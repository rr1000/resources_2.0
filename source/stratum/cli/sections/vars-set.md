---
title: Vars Set
layout: layout
---

## Vars Set

```
Usage: catalyze vars set -v...

Set one or more new environment variables or update the values of existing ones

Options:
  -v, --variable    The env variable to set or update in the form "<key>=<value>"
```

`vars set` allows you to add new environment variables or update the value of an existing environment variable on your code service. You can set/update 1 or more environment variables at a time with this command by repeating the `-v` option multiple times. Once new environment variables are added or values updated, a [redeploy](#redeploy) is required for your code service to have access to the new values. The environment variables must be of the form `<key>=<value>`. Here is a sample command

```
catalyze vars set -v AWS_ACCESS_KEY_ID=1234 -v AWS_SECRET_ACCESS_KEY=5678
```
