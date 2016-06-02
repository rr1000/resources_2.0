---
title: Certs Create
layout: layout
---

## Certs Create

```
Usage: catalyze certs create HOSTNAME PUBLIC_KEY_PATH PRIVATE_KEY_PATH [-s] [-r]

Create a new domain with an SSL certificate and private key

Arguments:
  HOSTNAME=""           The hostname of this domain and SSL certificate plus private key pair
  PUBLIC_KEY_PATH=""    The path to a public key file in PEM format
  PRIVATE_KEY_PATH=""   The path to an unencrypted private key file in PEM format

Options:
  -s, --self-signed=false   Whether or not the given SSL certificate and private key are self signed
  -r, --resolve=true        Whether or not to attempt to automatically resolve incomplete SSL certificate issues
```

`certs create` allows you to upload an SSL certificate and private key which can be used to secure your public facing code service. Cert creation can be done at any time, even after environment provisioning, but must be done before [creating a site](#sites-create). When creating a cert, the CLI will check to ensure the certificate and private key match and the given hostname is valid for the given certificate. If you are using a self signed cert, pass in the `-s` flag and the hostname check will be skipped. Catalyze requires that your certificate include your own certificate, intermediate certificates, and the root certificate in that order. If you only include your certificate, the CLI will attempt to resolve this and fetch intermediate and root certificates for you. It is advised that you create a full chain before running this command as the `-r` flag is accomplished on a "best effort" basis.

The `HOSTNAME` for a certificate does not need to match the valid Subject of the actual SSL certificate nor does it need to match the `site` name used in the `sites create` command. The `HOSTNAME` is used for organizational purposes only and can be named anything with the exclusion of the following characters: `/`, `&`, `%`. Here is a sample command

```
catalyze certs create wildcard_mysitecom ~/path/to/cert.pem ~/path/to/priv.key
```
