#!/bin/bash

file="/docker-entrypoint-initdb.d/os_open_roads.dump"
dbname=roads

echo "Restoring DB using $file"
pg_restore -U admin --dbname=$dbname --verbose --single-transaction < "$file" || exit 1
