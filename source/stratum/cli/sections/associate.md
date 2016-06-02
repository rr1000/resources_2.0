---
title: Associate
layout: layout
---

# Associate

```
Usage: catalyze associate ENV_NAME SERVICE_NAME [-a] [-r] [-d]

Associates an environment

Arguments:
  ENV_NAME=""       The name of your environment
  SERVICE_NAME=""   The name of the primary code service to associate with this environment (i.e. 'app01')

Options:
  -a, --alias=""            A shorter name to reference your environment by for local commands
  -r, --remote="catalyze"   The name of the remote
  -d, --default=false       Specifies whether or not the associated environment will be the default
```

`associate` is the entry point of the cli. You need to associate an environment before you can run most other commands. Check out [scope](#global-scope) and [aliases](#environment-aliases) for more info on the value of the alias and default options. Here is a sample command

```
catalyze associate My-Production-Environment app01 -a prod -d
```
