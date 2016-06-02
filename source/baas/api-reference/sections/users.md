---
title: Users
---

# Users

The user model is core to Catalyze and HIPAA-compliance. It continues to evolve as we explore different ways in which Protected Health Information (PHI) and PII (Personally Identifiable Information) data can be connected and used for identification. The current user model, outlined below, represents the core elements of PII.

Fields noted with an asterisk (*) are **required** for user creation - the rest are optional, and can be used as you see fit.

NAME          |TYPE        |DESCRIPTION
--------------|------------|-------------
**userId**    |string      | Unique ID for each user. This will be generated upon creation.
**createdAt** |string      | Date when the record was created, in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`. This will be generated upon creation.
**updatedAt** |string      | Date when the record was updated, in ISO 8601 format. This will be generated upon creation and updated automatically each time the user is updated.
**username*** |string      | Username of the user. This is the name they will log in with. This will never be returned, but is required when the user is being created.
**password*** |string      | Password of the user. This will never be returned, but is required when the user is being created.
**email**     |object      | email address of the user. This is an object with multiple email addresses, marked by the following properties:
              |string      | **primary***: This is the current email address used for all identification & communication.
              |string      | **secondary**: Alternate email address.
              |string      | **work**: Work/office address.
              |string      | **other**: An older email addresses that is no longer applicable to the current app. This is not necessarily an invalid email address.
**name**      |object      | The name of the user. This is a JSON object with the following details:
              |string      | **prefix**: Mr., Mrs., Sir, Dr., etc
              |string      | **firstName**: First (given) name of the user
              |string      | **middleName**
              |string      | **lastName**: Last (family) name of the user
              |string      | **maidenName**
**extras**    |?           | To be used for whatever purpose you see fit. Any JSON type (object, array, string, etc) is legal here. Whatever you put in will be returned back on future calls. This field is not queryable - if you need to be able to query user-specific data, consider using a [Custom Class](#custom-classes).

