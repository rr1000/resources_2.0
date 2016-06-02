---
title: DB Backup
layout: layout
---

## DB Backup

```
Usage: catalyze db backup DATABASE_NAME [-s]

Create a new backup

Arguments:
  DATABASE_NAME=""   The name of the database service to create a backup for (i.e. 'db01')

Options:
  -s, --skip-poll=false   Whether or not to wait for the backup to finish
```

`db backup` creates a new backup for the given database service. The backup is started and unless `-s` is specified, the CLI will poll every few seconds until it finishes. Regardless of a successful backup or not, the logs for the backup will be printed to the console when the backup is finished. If an error occurs and the logs are not printed, you can use the [db logs](#db-logs) command to print out historical backup job logs. Here is a sample command

```
catalyze db backup db01
```
