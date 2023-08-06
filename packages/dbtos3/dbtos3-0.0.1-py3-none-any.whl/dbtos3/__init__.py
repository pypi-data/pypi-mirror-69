import os
from dotenv import load_dotenv
from dbtos3.mysql_model.db import ReplicationMethodsMySQL
from dbtos3.postgres_model.db import ReplicationMethodsPostgreSQL
from dbtos3.sqlite_model.catalogue import CatalogueMethods

APP_ROOT = os.path.join(os.path.dirname(__file__))
load_dotenv(os.path.join(APP_ROOT, '.env'))
