---
title: DB Logs
layout: layout
---

## DB Logs

```
Usage: catalyze db logs DATABASE_NAME BACKUP_ID

Print out the logs from a previous database backup job

Arguments:
  DATABASE_NAME=""   The name of the database service (i.e. 'db01')
  BACKUP_ID=""       The ID of the backup to download logs from (found from "catalyze backup list")
```

`db logs` allows you to view backup logs from historical backup jobs. You can find the backup ID from using the `db list` command. Here is a sample command

```
catalyze db logs db01 cd2b4bce-2727-42d1-89e0-027bf3f1a203
```
