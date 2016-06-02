---
title: Metrics Network-Out
layout: layout
---

## Metrics Network-Out

```
Usage: catalyze metrics network-out [SERVICE_NAME] [(--json | --csv | --spark)] [--stream] [-m]

Print service and environment transmitted network data metrics in your local time zone

Arguments:
  SERVICE_NAME=""   The name of the service to print metrics for

Options:
  --json=false     Output the data as json
  --csv=false      Output the data as csv
  --spark=false    Output the data using spark lines
  --stream=false   Repeat calls once per minute until this process is interrupted.
  -m, --mins=1     How many minutes worth of metrics to retrieve.
```

`metrics network-out` prints out transmitted network metrics for your environment or individual services. You can print out metrics in csv, json, plain text, or spark lines format. If you want plain text format, simply omit the `--json`, `--csv`, and `--spark` flags. You can only stream metrics using plain text or spark lines formats. To print out metrics for every service in your environment, omit the `SERVICE_NAME` argument. Otherwise you may choose a service, such as an app service, to retrieve metrics for. Here are some sample commands

```
catalyze metrics network-out
catalyze metrics network-out app01 --stream
catalyze metrics network-out --json
catalyze metrics network-out db01 --csv -m 60
```
