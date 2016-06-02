---
title: Certs Update
layout: layout
---

## Certs Update

```
Usage: catalyze certs update HOSTNAME PUBLIC_KEY_PATH PRIVATE_KEY_PATH [-s] [-r]

Update the SSL certificate and private key pair for an existing domain

Arguments:
  HOSTNAME=""           The hostname of this domain and SSL certificate and private key pair
  PUBLIC_KEY_PATH=""    The path to a public key file in PEM format
  PRIVATE_KEY_PATH=""   The path to an unencrypted private key file in PEM format

Options:
  -s, --self-signed=false   Whether or not the given SSL certificate and private key are self signed
  -r, --resolve=true        Whether or not to attempt to automatically resolve incomplete SSL certificate issues
```

`certs update` works nearly identical to the [certs create](#certs-create) command. All rules regarding self signed certs and certificate resolution from the `certs create` command apply to the `certs update` command. This is useful for when your certificates have expired and you need to upload new ones. Simply update your certs, then redeploy your services. Here is a sample command

```
catalyze certs update mywebsite.com ~/path/to/new/cert.pem ~/path/to/new/priv.key
```
