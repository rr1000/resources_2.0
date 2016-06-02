---
title: DB Import
layout: layout
---

## DB Import


```
Usage: catalyze db import DATABASE_NAME FILEPATH [-d [-c]]

Import data into a database

Arguments:
  DATABASE_NAME=""   The name of the database to import data to (i.e. 'db01')
  FILEPATH=""        The location of the file to import to the database

Options:
  -c, --mongo-collection=""   If importing into a mongo service, the name of the collection to import into
  -d, --mongo-database=""     If importing into a mongo service, the name of the database to import into
```

`db import` allows you to inject new data into your database service. For example, if you wrote a simple SQL file

```
CREATE TABLE mytable (
id TEXT PRIMARY KEY,
val TEXT
);

INSERT INTO mytable (id, val) values ('1', 'test');
```

and stored it at `./db.sql` you could import this into your database service. When importing data into mongo, you may specify the database and collection to import into using the `-d` and `-c` flags respectively. Regardless of a successful import or not, the logs for the import will be printed to the console when the import is finished. Before an import takes place, your database is backed up automatically in case any issues arise. Here is a sample command

```
catalyze db import db01 ./db.sql
```
