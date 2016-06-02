---
title: Vars Unset
layout: layout
---

## Vars Unset

```
Usage: catalyze vars unset VARIABLE

Unset (delete) an existing environment variable

Arguments:
  VARIABLE=""   The name of the environment variable to unset
```

`vars unset` removes an environment variables from your associated code service. Only the environment variable name is required to unset. Once environment variables are unset, a [redeploy](#redeploy) is required for your code service to realize the variable was removed. Here is a sample command

```
catalyze vars unset AWS_ACCESS_KEY_ID
```
