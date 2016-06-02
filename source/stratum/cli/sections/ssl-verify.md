---
title: SSL Verify
layout: layout
---

## SSL Verify

```
Usage: catalyze ssl verify CHAIN PRIVATE_KEY HOSTNAME [-s]

Verify whether a certificate chain is complete and if it matches the given private key

Arguments:
  CHAIN=""         The path to your full certificate chain in PEM format
  PRIVATE_KEY=""   The path to your private key in PEM format
  HOSTNAME=""      The hostname that should match your certificate (i.e. "*.catalyze.io")

Options:
  -s, --self-signed=false   Whether or not the certificate is self signed. If set, chain verification is skipped
```

`ssl verify` will tell you if your SSL certificate and private key are properly formatted for use with the Catalyze PaaS. Before uploading a certificate to Catalyze you should verify it creates a full chain and matches the given private key with this command. Both your chain and private key should be **unencrypted** and in **PEM** format. The private key is the only key in the key file. However, for the chain, you should include your SSL certificate, intermediate certificates, and root certificate in the following order and format.

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

This command also requires you to specify the hostname that you are using the SSL certificate for in order to verify that the hostname matches what is in the chain. If it is a wildcard certificate, your hostname would be in the following format: `*.catalyze.io`. This command will verify a complete chain can be made from your certificate down through the intermediate certificates all the way to a root certificate that you have given or one found in your system.

You can also use this command to verify self-signed certificates match a given private key. To do so, add the `-s` option which will skip verifying the certificate to root chain and just tell you if your certificate matches your private key. Please note that the empty quotes are required for checking self signed certificates. This is the required parameter HOSTNAME which is ignored when checking self signed certificates. Here are some sample commands

```
catalyze ssl verify ./catalyze.crt ./catalyze.key *.catalyze.io
catalyze ssl verify ~/self-signed.crt ~/self-signed.key "" -s
```
