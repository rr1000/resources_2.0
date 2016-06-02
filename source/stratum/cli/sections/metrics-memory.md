---
title: Metrics Memory
layout: layout
---

## Metrics Memory

```
Usage: catalyze metrics memory [SERVICE_NAME] [(--json | --csv | --spark)] [--stream] [-m]

Print service and environment memory metrics in your local time zone

Arguments:
  SERVICE_NAME=""   The name of the service to print metrics for

Options:
  --json=false     Output the data as json
  --csv=false      Output the data as csv
  --spark=false    Output the data using spark lines
  --stream=false   Repeat calls once per minute until this process is interrupted.
  -m, --mins=1     How many minutes worth of metrics to retrieve.
```

`metrics memory` prints out memory metrics for your environment or individual services. You can print out metrics in csv, json, plain text, or spark lines format. If you want plain text format, simply omit the `--json`, `--csv`, and `--spark` flags. You can only stream metrics using plain text or spark lines formats. To print out metrics for every service in your environment, omit the `SERVICE_NAME` argument. Otherwise you may choose a service, such as an app service, to retrieve metrics for. Here are some sample commands

```
catalyze metrics memory
catalyze metrics memory app01 --stream
catalyze metrics memory --json
catalyze metrics memory db01 --csv -m 60
```
