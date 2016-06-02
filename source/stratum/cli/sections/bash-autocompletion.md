---
title: Bash Autocompletion
layout: layout
---

# Bash Autocompletion

One feature we've found helpful on \*Nix systems is autocompletion in bash. To enable this feature, head over to the github repo and download the `catalyze_autocomplete` file. If you use a Mac, you will need to install bash-completion with `brew install bash-completion` or `source` the `catalyze_autocomplete` file each time you start up terminal. Store this file locally in `/etc/bash_completion.d/` or (`/usr/local/etc/bash_completion.d/` on Mac). Completion will be available when you restart terminal. Now simply type `catalyze ` and hit tab twice to see the list of available commands. **Please note** that autocompletion only works one level deep. The CLI will not autocomplete or suggest completions when you type `catalyze db ` and then hit tab twice. It currently only works when you have just `catalyze ` typed into your terminal. This is a feature we are looking into expanding in the future.

Note: you may have to add `source /etc/bash_completion.d/catalyze_autocomplete` (`/usr/local/etc/bash_completion.d/catalyze_autocomplete`) in your `~/.bashrc` (`~/.bash_profile`) file.
