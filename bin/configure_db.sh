echo "Configuring dragonstackdb"

set PGPASSWORD = node_password

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql "dbname='dragonstackdb' user='node_user' password='node_password'" -f generation.sql

echo "Dragonstackdb configured!"