---
title: DB Download
layout: layout
---

## DB Download

```
Usage: catalyze db download DATABASE_NAME BACKUP_ID FILEPATH [-f]

Download a previously created backup

Arguments:
  DATABASE_NAME=""   The name of the database service which was backed up (i.e. 'db01')
  BACKUP_ID=""       The ID of the backup to download (found from "catalyze backup list")
  FILEPATH=""        The location to save the downloaded backup to. This location must NOT already exist unless -f is specified

Options:
  -f, --force=false   If a file previously exists at "filepath", overwrite it and download the backup
```

`db download` downloads a previously created backup to your local hard drive. Be careful using this command is it could download PHI. Be sure that all hard drive encryption and necessary precautions have been taken before performing a download. The ID of the backup is found by first running the [db list](#db-list) command. Here is a sample command

```
catalyze db download db01 cd2b4bce-2727-42d1-89e0-027bf3f1a203 ./db.sql
```

This assumes you are downloading a MySQL or PostgreSQL backup which takes the `.sql` file format. If you are downloading a mongo backup, the command might look like this

```
catalyze db download db01 cd2b4bce-2727-42d1-89e0-027bf3f1a203 ./db.tar.gz
```
