---
title: Keys Add
layout: layout
---

## Keys Add

```
Usage: catalyze keys add NAME PUBLIC_KEY_PATH

Add a public key

Arguments:
  NAME=""              The name for the new key, for your own purposes
  PUBLIC_KEY_PATH=""   Relative path to the public key file
```

`keys add` allows you to add a new SSH key to your user account. SSH keys added to your user account should be private and not shared with others. SSH keys can be used for authentication (as opposed to the traditional username and password) as well as pushing code to an environment's code services. Please note, you must specify the path to the public key file and not the private key. All SSH keys should be in either OpenSSH RSA format or PEM format. Here is a sample command

```
catalyze keys add my_prod_key ~/.ssh/prod_rsa.pub
```
