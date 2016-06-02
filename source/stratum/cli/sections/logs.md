---
title: Logs
layout: layout
---

# Logs

```
Usage: catalyze logs [QUERY] [(-f | -t)] [--hours] [--minutes] [--seconds]

Show the logs in your terminal streamed from your logging dashboard

Arguments:
  QUERY="*"    The query to send to your logging dashboard's elastic search (regex is supported)

Options:
  -f, --follow=false   Tail/follow the logs (Equivalent to -t)
  -t, --tail=false     Tail/follow the logs (Equivalent to -f)
  --hours=0            The number of hours before now (in combination with minutes and seconds) to retrieve logs
  --minutes=1          The number of minutes before now (in combination with hours and seconds) to retrieve logs
  --seconds=0          The number of seconds before now (in combination with hours and minutes) to retrieve logs
```

`logs` prints out your application logs directly from your logging Dashboard. If you do not see your logs, try adjusting the number of hours, minutes, or seconds of logs that are retrieved with the `--hours`, `--minutes`, and `--seconds` options respectively. You can also follow the logs with the `-f` option. When using `-f` all logs will be printed to the console within the given time frame as well as any new logs that are sent to the logging Dashboard for the duration of the command. When using the `-f` option, hit ctrl-c to stop. Here is a sample command

```
catalyze logs -f --hours=6 --minutes=30
```
