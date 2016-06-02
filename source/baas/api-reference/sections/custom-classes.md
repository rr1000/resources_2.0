---
title: Custom Classes
---

# Custom Classes

While Catalyze provides a whole set of data models, we also realize that we 
can't cover all possible use cases that a developer might come up with. To support
those, we have enabled the concept of custom classes that allow a developer to 
create classes specific to their use cases if not already supported by Catalyze. 
It is indeed possible to use custom classes alone and not use any of the data 
models provided by Catalyze. The only restriction that we place on the developer 
is to always use the core user / demographics model. This is to ensure that PHI 
access and use is logged, monitored, and traceable.

NAME | TYPE | DESCRIPTION
-----|------|------------
id      | string | ID of the custom class                              
name    | string | The name of the class                               
editable| Boolean | You may use custom classes to store metadata and logging information which should not be edited after being written. Setting editable to "false" prevents using PUT or DELETE routes to edit or delete custom class entries. This defaults to `true` and _can only be set when creating the custom class_.
schema  | Object | This schema is a key value schema. Such as "zipcode":null, "city":null, "state":null. Note the use of the word null. No validations will be applied to custom class entries when null values are given. You may specify "integer", "string", "boolean", "array", "object", or "double".

