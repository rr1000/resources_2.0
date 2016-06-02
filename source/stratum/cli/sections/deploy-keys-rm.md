---
title: Deploy Keys Rm
layout: layout
---

## Deploy Keys Rm

```
Usage: catalyze deploy-keys rm NAME SERVICE_NAME [-p]

Remove a deploy key

Arguments:
  NAME=""           The name of the key to remove
  SERVICE_NAME=""   The name of the code service to remove this deploy key from

Options:
  -p, --private=false   Whether or not this is a private key
```

`deploy-keys rm` will remove a previously created deploy key by name. It is a good idea to rotate deploy keys on a set schedule as they are intended to be shared among an organization. Here are some sample commands

```
catalyze deploy-keys rm app01_public app01
catalyze deploy-keys rm app01_private app01 -p
```
