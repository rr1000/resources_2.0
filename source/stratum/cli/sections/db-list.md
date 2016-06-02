---
title: DB List
layout: layout
---

## DB List

```
Usage: catalyze db list DATABASE_NAME [-p] [-n]

List created backups

Arguments:
  DATABASE_NAME=""   The name of the database service to list backups for (i.e. 'db01')

Options:
  -p, --page=1         The page to view
  -n, --page-size=10   The number of items to show per page
```

`db list` lists all previously created backups. After listing backups you can copy the backup ID and use it to [download](#db-download) that backup or [view the logs](#db-logs) from that backup. Here is a sample command

```
catalyze db list db01
```
