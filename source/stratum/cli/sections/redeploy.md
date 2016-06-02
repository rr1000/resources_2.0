---
title: Redeploy
layout: layout
---

# Redeploy

```
Usage: catalyze redeploy SERVICE_NAME

Redeploy a service without having to do a git push

Arguments:
  SERVICE_NAME=""   The name of the service to redeploy (i.e. 'app01')
```

`redeploy` deploys an identical copy of the given service. For code services, this avoids having to perform a code push. You skip the git push and the build. For service proxies, new instances simply replace the old ones. All other service types cannot be redeployed with this command. Here is a sample command

```
catalyze redeploy app01
```
