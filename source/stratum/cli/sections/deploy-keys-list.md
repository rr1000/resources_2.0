---
title: Deploy Keys List
layout: layout
---

## Deploy Keys List

```
Usage: catalyze deploy-keys list SERVICE_NAME

List all deploy keys

Arguments:
  SERVICE_NAME=""   The name of the code service to list deploy keys
```

`deploy-keys list` will list all of your previously uploaded deploy keys by name including the key's fingerprint in SHA256 format. Here is a sample command

```
catalyze deploy-keys list app01
```
