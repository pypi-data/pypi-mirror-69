from copy import deepcopy
import psycopg2
import json
from contextlib import contextmanager

from urllib.parse import urlparse, parse_qs

from target_postgres.postgres import MillisLoggingConnection, PostgresTarget
from target_postgres import target_tools

from spintop.models.serialization import get_json_serializer
from ..logs import _logger

logger = _logger('singer')

class AbstractSingerTarget(object):
    def __init__(self):
        self.serializer = get_json_serializer()
    
    @contextmanager
    def stream(self, stream_name):
        batch = CollectMessagesFromFactory(stream_name)
        yield batch
        self.send_messages(self.json_dumps_messages(batch.messages))

    def json_dumps_messages(self, messages):
        serialized_messages = [self.serializer.serialize(msg) for msg in messages]
        return [json.dumps(ser_msg) for ser_msg in serialized_messages]

    def send_messages(self, messages_str):
        raise NotImplementedError()

class PostgreSQLSingerTarget(AbstractSingerTarget):
    def __init__(self, uri, database_name, config={}):
        super().__init__()
        result = urlparse(uri)
 
        username = result.username
        password = result.password
        hostname = result.hostname
        port = result.port

        # Support host being passed as query param. This is used by sqlalchemy
        # to allow unix sockets:
        # postgres://user:password@/dbname?host=/path/to/db
        query = parse_qs(result.query)

        if 'host' in query and not hostname:
            # host in query is a list of hosts.
            # join with commas
            hostname = ','.join(query['host'])

        self.connection = psycopg2.connect(
            database = database_name,
            user = username,
            password = password,
            host = hostname,
            port = port
        )
    
        self.config = config

    def send_messages(self, messages_str):
        with self.connection:
            postgres_target = PostgresTarget(
                self.connection,
                postgres_schema=self.config.get('postgres_schema', 'public'),
                logging_level=self.config.get('logging_level'),
                persist_empty_tables=self.config.get('persist_empty_tables'),
                add_upsert_indexes=self.config.get('add_upsert_indexes', True),
                before_run_sql=self.config.get('before_run_sql'),
                after_run_sql=self.config.get('after_run_sql'),
            )
            target_tools.stream_to_target(messages_str, postgres_target, config=self.config)

class CollectMessagesFromFactory(object):
    def __init__(self, stream_name):
        self.messages = []
        self.factory = SingerMessagesFactory(stream_name)

    def __getattr__(self, key):
        factory_fn = getattr(self.factory, key)
        def _wrapper(*args, **kwargs):
            self.messages.append(factory_fn(*args, **kwargs))
        return _wrapper

class SingerMessagesFactory(object):
    def __init__(self, stream_name):
        self.stream_name = stream_name
        self.logger = logger.getChild(stream_name)

    def schema(self, schema , key_properties):
        schema = deepcopy(schema)
        _schema_transform(schema)
        return {
            'type': 'SCHEMA',
            'stream': self.stream_name,
            'key_properties': key_properties,
            'schema': schema
        }

    def record(self, data):
        return {
            'type': 'RECORD',
            'stream': self.stream_name,
            'record': data
        }


### Replace datetime by string type.
_FIELD_TRANSFORM = {
    'datetime': lambda field: {'type': 'string', 'format': 'date-time'}
}

def _schema_transform(schema):
    try:
        fields = schema.get('properties', {})
    except AttributeError:
        return 
    
    for key, field in fields.items():
        # Try to get type in map, else keep same.
        # Also add null allowed everywhere.
        transformer = _FIELD_TRANSFORM.get(field['type'], None)
        if transformer:
            update = transformer(field)
            field.update(update)

        field['type'] = [field['type'], 'null']

        # in case it contains other properties (object)
        _schema_transform(field)