---
title: Disassociate
layout: layout
---

# Disassociate

```
Usage: catalyze disassociate ENV_ALIAS

Remove the association with an environment

Arguments:
  ENV_ALIAS=""   The alias of an already associated environment to disassociate
```

`disassociate` does not have to be run from within a git repo. Disassociate removes the environment from your list of associated environments but **does not** remove the catalyze git remote on the git repo. Here is a sample command

```
catalyze disassociate myprod
```
