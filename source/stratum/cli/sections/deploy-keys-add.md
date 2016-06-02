---
title: Deploy Keys Add
layout: layout
---

## Deploy Keys Add

```
Usage: catalyze deploy-keys add NAME KEY_PATH SERVICE_NAME [-p]

Add a new deploy key

Arguments:
  NAME=""              The name for the new key, for your own purposes
  PUBLIC_KEY_PATH=""   Relative path to the public key file
  SERVICE_NAME=""      The name of the code service to add this deploy key to

Options:
  -p, --private=false   Whether or not this is a private key
```

`deploy-keys add` allows you to upload an SSH public key or SSH private key in OpenSSH format. These keys are used for pushing code to your code services but are not required. You may use personal SSH keys with the [keys](#keys) command instead. Deploy keys are useful for Continuous Integration or Continuous Deployment scenarios and are intended to be shared among an organization. Here are some sample commands

```
catalyze deploy-keys add app01_public ~/.ssh/app01_rsa.pub app01
catalyze deploy-keys add app01_private ~/.ssh/app01_rsa app01 -p
```
