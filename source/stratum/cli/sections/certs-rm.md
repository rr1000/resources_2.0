---
title: Certs Rm
layout: layout
---

## Certs Rm

```
Usage: catalyze certs rm HOSTNAME

Remove an existing domain and its associated SSL certificate and private key pair

Arguments:
  HOSTNAME=""   The hostname of the domain and SSL certificate and private key pair
```

`certs rm` allows you to delete old certificate and private key pairs. Only certs that are not in use by a site can be deleted. Here is a sample command

```
catalyze certs rm mywebsite.com
```
