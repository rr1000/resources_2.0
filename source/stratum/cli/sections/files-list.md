---
title: Files List
layout: layout
---

## Files List

```
Usage: catalyze files list [SERVICE_NAME]

List all files available for a given service

Arguments:
  SERVICE_NAME="service_proxy"   The name of the service to list files for
```

`files list` prints out a listing of all service files available for download. Nearly all service files are stored on the service_proxy and therefore you should not have to specify the `SERVICE_NAME` argument. Here is a sample command

```
catalyze files list
```
