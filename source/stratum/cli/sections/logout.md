---
title: Logout
layout: layout
---

# Logout

```
Usage: catalyze logout

Clear the stored user information from your local machine
```

When using the CLI, your username and password are **never** stored in any file on your filesystem. However, in order to not type in your username and password each and every command, a session token is stored in the CLI's configuration file and used until it expires. `logout` removes this session token from the configuration file. Here is a sample command

```
catalyze logout
```
