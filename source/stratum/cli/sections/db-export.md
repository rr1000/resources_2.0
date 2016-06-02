---
title: DB Export
layout: layout
---

## DB Export

```
Usage: catalyze db export DATABASE_NAME FILEPATH [-f]

Export data from a database

Arguments:
  DATABASE_NAME=""   The name of the database to export data from (i.e. 'db01')
  FILEPATH=""        The location to save the exported data. This location must NOT already exist unless -f is specified

Options:
  -f, --force=false   If a file previously exists at `filepath`, overwrite it and export data
```

`db export` is a simple wrapper around the `db backup` and `db download` commands. When you request an export, a backup is created that will be added to the list of backups shown when you perform the [db list](#db-list) command. Then that backup is immediately downloaded. Regardless of a successful export or not, the logs for the backup will be printed to the console when the export is finished. If an error occurs and the logs are not printed, you can use the [db logs](#db-logs) command to print out historical backup job logs. Here is a sample command

```
catalyze db export db01 ./dbexport.sql
```

This assumes you are exporting a MySQL or PostgreSQL database which takes the `.sql` file format. If you are exporting a mongo database, the command might look like this

```
catalyze db export db01 ./dbexport.tar.gz
```
