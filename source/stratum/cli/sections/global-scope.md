---
title: Global Scope
layout: layout
---

# Global Scope

The CLI now supports the concept of scope. Previous to version 2.0.0, all commands had to be run within an associated local git repo. Now, the only time you need to be in a local git repo is when you associate to a new environment. After the initial association, CLI commands can be run from any directory. If you have more than one environment, the CLI uses this concept of scope to decide which environment you are using for the command.

Let's say you have an environment that you associated in the directory `~/mysandbox-code` and another you associated in the directory `~/myprod-code`. These environments are named `mysandbox` and `myprod` respectively. When you are within either of those directories, the CLI knows that any command you run will be in the context of that given environment. Commands run in the `~/myprod-code` directory will be run against the `myprod` environment. Similarly for `~/mysandbox-code` and the `mysandbox` environment. What if you are outside those directories? You have three options.

First, you can tell the CLI which environment you want to use with the global option `-E` or `--env` (see [Global Options](#global-options)). Your command might start like this

```
catalyze -E myprod ...
```

This global option will even override the environment found in a local git repo. If you don't set the `-E` flag, and the CLI can't find an environment in your local git repo, the CLI then checks for a default environment. A default environment is used whenever you are outside of a git repo and an environment is not specified. A default environment can be specified using the [default](#default) command. You can find out which environment is the default by running the [associated](#associated) command.

Lastly, if no environment is specified, you're outside of a git repo, and no default environment is set, then the CLI simply takes the first environment you associated and prompts you to continue with this environment. This concept of scope will make it easier for Catalyze customers with multiple environments to use the CLI!
