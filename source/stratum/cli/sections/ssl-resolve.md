---
title: SSL Resolve
layout: layout
---

## SSL Resolve

```
Usage: catalyze ssl resolve CHAIN PRIVATE_KEY HOSTNAME [OUTPUT] [-f]

Verify that an SSL certificate is signed by a valid CA and attempt to resolve any incomplete certificate chains that are found

Arguments:
  CHAIN=""         The path to your full certificate chain in PEM format
  PRIVATE_KEY=""   The path to your private key in PEM format
  HOSTNAME=""      The hostname that should match your certificate (i.e. "*.catalyze.io")
  OUTPUT=""        The path of a file to save your properly resolved certificate chain (defaults to STDOUT)

Options:
  -f, --force=false   If an output file is specified and already exists, setting force to true will overwrite the existing output file
```

`ssl resolve` is a tool that will attempt to fix invalid SSL certificates chains. A well formatted SSL certificate will include your certificate, intermediate certificates, and root certificates. It should follow this format

```
-----BEGIN CERTIFICATE-----
<Your SSL certificate here>
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
<One or more intermediate certificates here>
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
<Root CA here>
-----END CERTIFICATE-----
```

If your certificate only includes your own certificate, such as the following format shows

```
-----BEGIN CERTIFICATE-----
<Your SSL certificate here>
-----END CERTIFICATE-----
```

then the SSL resolve command will attempt to resolve this by downloading public intermediate certificates and root certificates. A general rule of thumb is, if your certificate passes the `ssl resolve` check, it will almost always work on the Catalyze platform. You can specify where to save the updated chain or omit the `OUTPUT` argument to print it to STDOUT.

Please note you all certificates and private keys should be in PEM format. You cannot use self signed certificates with this command as they cannot be resolved as they are not signed by a valid CA. Here are some sample commands

```
catalyze ssl resolve ~/mysites_cert.pem ~/mysites_key.key *.mysite.com ~/updated_mysites_cert.pem -f
catalyze ssl resolve ~/mysites_cert.pem ~/mysites_key.key *.mysite.com
```
