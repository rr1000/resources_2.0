---
title: Console
layout: layout
---

# Console

```
Usage: catalyze console SERVICE_NAME [COMMAND]

Open a secure console to a service

Arguments:
  SERVICE_NAME=""   The name of the service to open up a console for
  COMMAND=""        An optional command to run when the console becomes available
```

`console` gives you direct access to your database service or application shell. For example, if you open up a console to a postgres database, you will be given access to a psql prompt. You can also open up a mysql prompt, mongo cli prompt, rails console, django shell, and much more. When accessing a database service, the `COMMAND` argument is not needed because the appropriate prompt will be given to you. If you are connecting to an application service the `COMMAND` argument is required. Here are some sample commands

```
catalyze console db01
catalyze console app01 "bundle exec rails console"
```
