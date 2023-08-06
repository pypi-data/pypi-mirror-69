import datetime
import json
import os
import shutil
import sqlite3
import re

import tempfile
import multipart

import mindsdb
from dateutil.parser import parse
from flask import request, send_file
from flask_restx import Resource, abort
from mindsdb import FileDS

from mindsdb_server.namespaces.configs.datasources import ns_conf
from mindsdb_server.namespaces.entitites.datasources.datasource import (
    datasource_metadata,
    put_datasource_params
)
from mindsdb_server.namespaces.entitites.datasources.datasource_data import (
    get_datasource_rows_params,
    datasource_rows_metadata
)
from mindsdb_server.namespaces.entitites.datasources.datasource_files import (
    put_datasource_file_params
)
from mindsdb_server.namespaces.entitites.datasources.datasource_missed_files import (
    datasource_missed_files_metadata,
    get_datasource_missed_files_params
)
from mindsdb_server.shared_ressources import get_shared

app, api = get_shared()
datasources = []
global_mdb = mindsdb.Predictor(name='datasource_metapredictor')

def get_datasources():
    datasources = []
    for ds_name in os.listdir(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH):
        try:
            with open(os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, ds_name, 'metadata.json'), 'r') as fp:
                try:
                    datasource = json.load(fp)
                    datasource['created_at'] = parse(datasource['created_at'].split('.')[0])
                    datasource['updated_at'] = parse(datasource['updated_at'].split('.')[0])
                    datasources.append(datasource)
                except Exception as e:
                    print(e)
        except Exception as e:
            print(e)
    return datasources


def get_datasource(name):
    for ds in get_datasources():
        if ds['name'] == name:
            return ds
    return None

def save_datasource_metadata(ds):
        ds['created_at'] = str(ds['created_at']).split('.')[0]
        ds['updated_at'] = str(datetime.datetime.now()).split('.')[0]

        with open(os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, ds['name'], 'metadata.json'), 'w') as fp:
            json.dump(ds, fp)

def create_sqlite_db(path, ds):
    con = sqlite3.connect(path)
    ds.to_sql(name='data', con=con, index=False)
    con.close()


@ns_conf.route('/')
class DatasourcesList(Resource):
    @ns_conf.doc('get_datasources_list')
    @ns_conf.marshal_list_with(datasource_metadata)
    def get(self):
        '''List all datasources'''
        return get_datasources()


@ns_conf.route('/<name>')
@ns_conf.param('name', 'Datasource name')
class Datasource(Resource):
    @ns_conf.doc('get_datasource')
    @ns_conf.marshal_with(datasource_metadata)
    def get(self, name):
        '''return datasource metadata'''
        ds = get_datasource(name)
        if ds is not None:
            return ds
        return '', 404

    @ns_conf.doc('delete_datasource')
    def delete(self, name):
        '''delete datasource'''
        try:
            data_sources = get_datasource(name)
            shutil.rmtree(os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, data_sources['name']))
        except Exception as e:
            print(e)
            abort(400, str(e))
        return '', 200

    @ns_conf.doc('put_datasource', params=put_datasource_params)
    @ns_conf.marshal_with(datasource_metadata)
    def put(self, name):
        '''add new datasource'''
        data = {}
        def on_field(field):
            name = field.field_name.decode()
            value = field.value.decode()
            data[name] = value

        def on_file(file):
            data['file'] = file.file_name.decode()

        temp_dir_path = tempfile.mkdtemp(prefix='gateway_')

        parser = multipart.create_form_parser(
            headers=request.headers,
            on_field=on_field,
            on_file=on_file,
            config={
                'UPLOAD_DIR': temp_dir_path.encode(),    # bytes required
                'UPLOAD_KEEP_FILENAME': True,
                'UPLOAD_KEEP_EXTENSIONS': True,
                'MAX_MEMORY_FILE_SIZE': 0
            }
        )

        while True:
            chunk = request.stream.read(8192)
            if not chunk:
                break
            parser.write(chunk)
        parser.finalize()
        parser.close()

        if 'name' in data:
            datasource_name = data['name']
        else:
            datasource_name = name
        datasource_type = data['source_type']

        if 'source' in data:
            datasource_source = data['source']
        else:
            datasource_source = name

        if datasource_type == 'file' and 'file' not in data:
            abort(400, "Argument 'file' is missing")

        names = [x['name'] for x in get_datasources()]

        for i in range(1, 100):
            if datasource_name in names:
                previous_index = i - 1
                datasource_name = datasource_name.replace(f'({previous_index})', '')
                datasource_name += f'({i})'
            else:
                break

        os.mkdir(os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, datasource_name))
        os.mkdir(os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, datasource_name, 'resources'))

        ds_dir = os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, datasource_name, 'datasource')
        os.mkdir(ds_dir)
        if datasource_type == 'file':
            datasource_source = os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, datasource_name, 'datasource', datasource_source)
            os.replace(
                os.path.join(temp_dir_path, data['file']),
                datasource_source
            )
            ds = FileDS(datasource_source)
        else:
            ds = FileDS(datasource_source)

        os.rmdir(temp_dir_path)

        columns = [dict(name=x) for x in list(ds.df.keys())]
        row_count = len(ds.df)

        create_sqlite_db(os.path.join(ds_dir, 'sqlite.db'), ds)

        new_data_source = {
            'name': datasource_name,
            'source_type': datasource_type,
            'source': datasource_source,
            'missed_files': False,
            'created_at': datetime.datetime.now(),
            'updated_at': datetime.datetime.now(),
            'row_count': row_count,
            'columns': columns
        }

        save_datasource_metadata(new_data_source)

        return get_datasource(datasource_name)


@ns_conf.route('/<name>/analyze')
@ns_conf.param('name', 'Datasource name')
class Analyze(Resource):
    @ns_conf.doc('analyse_dataset')
    def get(self, name):
        global global_mdb
        ds = get_datasource(name)
        if ds['name'] is None:
            print('No valid datasource given')
            abort(400, 'No valid datasource given')

        if 'analysis_data' in ds and ds['analysis_data'] is not None:
            return ds['analysis_data'], 200

        analysis = global_mdb.analyse_dataset(ds['source'], sample_margin_of_error=0.025)

        ds['analysis_data'] = analysis
        save_datasource_metadata(ds)
        
        return analysis, 200


@ns_conf.route('/<name>/data/')
@ns_conf.param('name', 'Datasource name')
class DatasourceData(Resource):
    @ns_conf.doc('get_datasource_data', params=get_datasource_rows_params)
    @ns_conf.marshal_with(datasource_rows_metadata)
    def get(self, name):
        '''return data rows'''
        ds_record = ([x for x in get_datasources() if x['name'] == name] or [None])[0]
        if ds_record:
            ds_dir = os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, ds_record['name'], 'datasource')
            db_path = os.path.join(ds_dir, 'sqlite.db')
            if os.path.isfile(db_path) is False:
                path = ds_record['source']
                if ds_record['source_type'] == 'file':
                    if not os.path.exists(path):
                        abort(404, "")
                ds = FileDS(path)
                create_sqlite_db(os.path.join(ds_dir, 'sqlite.db'), ds)

            limit = ''
            offset = ''
            order = ''
            params = {
                'page[size]': None,
                'page[offset]': None
            }
            where = []
            for key, value in request.args.items():
                if key == 'page[size]':
                    params['page[size]'] = int(value)
                if key == 'page[offset]':
                    params['page[offset]'] = int(value)
                elif key.startswith('filter'):
                    result = re.search(r'filter\[(.*)\]', key)
                    field = result.groups(1)[0]
                    where.append({'field': field, 'value': value})
            if params['page[size]'] is not None:
                limit = f"limit {params['page[size]']}"
            if params['page[size]'] is not None and params['page[offset]'] is not None:
                offset = f"offset {params['page[offset]']}"

            con = sqlite3.connect(db_path)
            cur = con.cursor()
            cur.execute('pragma table_info(data);')
            column_name_index = [x[0] for x in cur.description].index('name')
            columns = cur.fetchall()
            column_names = [x[column_name_index] for x in columns]
            where = [x for x in where if x['field'] in column_names]
            marks = {}
            if len(where) > 0:
                for i in range(len(where)):
                    field = where[i]["field"].replace('"', '""')
                    if ' ' in field:
                        field = f'"{field}"'
                    marks['var' + str(i)] = '%' + where[i]['value'] + '%'
                    where[i] = f'{field} like :var{i}'
                where = 'where ' + ' and '.join(where)
            else:
                where = ''
            count_query = ' '.join(['select count(1) from data', where])
            query = ' '.join(['select * from data', where, order, limit, offset])

            cur.execute(count_query, marks)
            rowcount = cur.fetchone()[0]
            cur.execute(query, marks)
            data = cur.fetchall()
            data = [dict(zip(column_names, x)) for x in data]
            cur.close()
            con.close()

            response = {
                'rowcount': rowcount,
                'data': data
            }
            return response, 200
        abort(404, "")


@ns_conf.route('/<name>/files/<column_name>:<index>')
@ns_conf.param('name', 'Datasource name')
@ns_conf.param('column_name', 'column name')
@ns_conf.param('index', 'row index')
class DatasourceFiles(Resource):
    @ns_conf.doc('put_datasource_file', params=put_datasource_file_params)
    def put(self, name, column_name, index):
        '''put file'''
        extension = request.values['extension']
        fileName = '{}-{}{}'.format(column_name, index, extension)
        file = request.files['file']
        filesDir = os.path.join(mindsdb.CONFIG.MINDSDB_DATASOURCES_PATH, name, 'files')
        filePath = os.path.join(filesDir, fileName)

        if not os.path.exists(filesDir):
            os.makedirs(filesDir)

        open(filePath, 'wb').write(file.read())
        return '', 200


@ns_conf.route('/<name>/missed_files')
@ns_conf.param('name', 'Datasource name')
class DatasourceMissedFiles(Resource):
    @ns_conf.doc('get_datasource_missed_files', params=get_datasource_missed_files_params)
    @ns_conf.marshal_with(datasource_missed_files_metadata)
    def get(self, name):
        '''return missed files'''
        abort(404, '')


@ns_conf.route('/<name>/download')
@ns_conf.param('name', 'Datasource name')
class DatasourceMissedFilesDownload(Resource):
    @ns_conf.doc('get_datasource_download')
    def get(self, name):
        '''download uploaded file'''
        ds = get_datasource(name)
        if not ds:
            abort(404, "{} not found".format(name))
        if not os.path.exists(ds['source']):
            abort(404, "{} not found".format(name))

        return send_file(os.path.abspath(ds['source']), as_attachment=True)
