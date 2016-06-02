---
title: Sites Create
layout: layout
---

## Sites Create

```
Usage: catalyze sites create NAME SERVICE_NAME HOSTNAME

Create a new site linking it to an existing cert instance

Arguments:
  NAME=""           The name of the site to be created. This will be used in this site's nginx configuration file
  SERVICE_NAME=""   The name of the service to add this site configuration to (i.e. 'app01')
  HOSTNAME=""       The hostname used in the creation of a certs instance with the 'certs' command
```

`sites create` allows you to create a site configuration that is tied to a single service. To create a site, you must first [create a cert](#certs-create). A site has three pieces of information, a name, the service it's tied to, and the cert instance it will use. The name is the `server_name` that will be injected into this site's nginx configuration file. It is important that this site name match what URL your site will respond to. If this is a basic domain, using `mysite.com` is sufficient. If it should respond to the APEX domain and all subdomains, it should be named `.mysite.com` notice the leading `.`. The service is a code service that will use this site configuration. Lastly, the cert instance must be specified by the `HOSTNAME` argument used in the [certs create](#certs-create) command. Here is a sample command

```
catalyze sites create .mysite.com app01 wildcard_mysitecom
```
