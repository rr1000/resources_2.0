---
title: Keys Set
layout: layout
---

## Keys Set

```
Usage: catalyze keys set PRIVATE_KEY_PATH

Set your auth key

Arguments:
  PRIVATE_KEY_PATH=""   Relative path to the private key file.
```

`keys set` allows the CLI to use an SSH key for authentication instead of the traditional username and password combination. This can be useful for automation or where a shared workstations are involved. Please note that you must pass in the path to the private key and not the public key. Here is a sample command

```
catalyze keys set ~/.ssh/my_key
```
