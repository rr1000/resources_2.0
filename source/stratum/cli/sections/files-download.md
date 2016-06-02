---
title: Files Download
layout: layout
---

## Files Download

```
Usage: catalyze files download [SERVICE_NAME] FILE_NAME [-o] [-f]

Download a file to your localhost with the same file permissions as on the remote host or print it to stdout

Arguments:
  SERVICE_NAME="service_proxy"   The name of the service to download a file from
  FILE_NAME=""                   The name of the service file from running "catalyze files list"

Options:
  -o, --output=""     The downloaded file will be saved to the given location with the same file permissions as it has on the remote host. If those file permissions cannot be applied, a warning will be printed and default 0644 permissions applied. If no output is specified, stdout is used.
  -f, --force=false   If the specified output file already exists, automatically overwrite it
```

`files download` allows you to view the contents of a service file and save it to your local machine. Most service files are stored on your service_proxy and therefore you should not have to specify the `SERVICE_NAME` argument. Simply supply the `FILE_NAME` found from the [files list](#files-list) command and the contents of the file, as well as the permissions string, will be printed to your console. You can always store the file locally, applying the same permissions as those on the remote server, by specifying an output file with the `-o` flag. Here is a sample command

```
catalyze files download /etc/nginx/sites-enabled/mywebsite.com
```
