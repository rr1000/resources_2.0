---
title: Query Class Entries
---

# Query Class Entries

## POST /classes/{name}/query{?pageSize,pageNumber,orderBy,direction}
This route allows the data in a custom class to be queried via an arbitrary `expression`, using a custom syntax. This expression, built as JSON, is sent as the body of the `POST` request.

In general, an `expression` consists of an object with a single property, the `operator`, with the  value of that property being the array of `arguments` to pass to that operator.

![http://i.imgur.com/Gemb7Lg.png](http://i.imgur.com/Gemb7Lg.png)

There are two types of `expression`s. The first type is **comparative** - an expression that names a field and compares it to a scalar value.

![http://i.imgur.com/SzCAoTr.png](http://i.imgur.com/SzCAoTr.png)

The field name can be either a top-level field of the custom class (e.g. `"age"`) or a period-separated selector to a child object's property (e.g. `"extras.favorites.color"`). Note: if querying a child property, ensure that every entry in that class has that property, or errors may occur.

The available comparative operators are:

* `=`, `!=` - Equality, Inequality
* `<`, `>`, `<=`, `>=` - Value Comparisons

The second type of `expression` is **logical** - an expression that contains other expressions.

![http://i.imgur.com/dkEhgNa.png](http://i.imgur.com/dkEhgNa.png)

The two logical operators - `and` and `or` - will match entries for which all of the nested `expression`s are true (for `and`), or at least one is true (for `or`). Logical expressions can be nested.

Some examples:

* Matching all males in an imaginary class "people"
    
    ```
    { "=": ["gender", "male"] }
    ```

* Matching males between ages 18 and 35 (inclusive)
    
    ```
    {
        "and": [
            { "=": ["gender", "male"] },
            { ">=": ["age", 18] },
            { "<=": ["age", 35] }
        ]
    }
    ```

* Matching women in Milwaukee, WI whose favorite color is blue or aren't named "Jenny"

    ```
    {
        "and": [
            { "=": ["gender", "female"] },
            { "=": ["address.city", "Milwaukee"] },
            { "=": ["address.state", "WI"] },
            { "or": [
                { "=": ["extras.favorites.color", "blue"] },
                { "!=": ["name.first", "Jenny"] }
            ]}
        ]
    }
    ```

To query the `createdAt` and `updatedAt` fields, the special values `@createdAt` and `@updatedAt` can be passed.


This route requires *Admin, dev, or supervisor*-level permissions.

### Parameters

* pageNumber (optional (default=1), int) ... The number of pages of size pageSize to skip before returning entries.  If not specified, defaults to 1.
* name (required, String) ... The name of the custom class
* pageSize (optional (default=10), int) ... The number of entries to return. If not specified, defaults to 10.
* orderBy (optional (default=@createdAt), String) ... The field by which to order the results.
* direction (optional (default=asc), String) ... The direction in which to sort entries. "asc" and "desc" are accepted values.

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{ "and": [
    { "=": ["suite", "clubs"] },
    { ">": ["value", 6] },
    { "<": ["value", 9] }
]}
```
### Response (application/json)

```json
[
    {
        "id": "ENTRY_ID_123",
        "content": 
        {
            "suite": "spades",
            "value": 7
        },
        "phi": false
    },
    {
        "id": "ENTRY_ID_456",
        "content": 
        {
            "suite": "spades",
            "value": 8
        },
        "phi": false
    }
]
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://api.catalyze.io/v2/classes/{name}/query');

request.setRequestHeader('X-Api-Key', 'browser api.catalyze.io 525ad5d6993247cccb083e5a');
request.setRequestHeader('Authorization', 'Bearer 0c7f26c8-5b4a-4a32-b35a-2e249448bbf2');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
    {
        "id": "ENTRY_ID_123",
        "content": 
        {
            "suite": "spades",
            "value": 7
        },
        "phi": false
    },
    {
        "id": "ENTRY_ID_456",
        "content": 
        {
            "suite": "spades",
            "value": 8
        },
        "phi": false
    }
]
;

request.send(JSON.stringify(body));
```


#### iOS

```objc
NSURL *baseUrl = [NSURL URLWithString:@"https://api.catalyze.io"];
AFHTTPRequestOperationManager *httpClient = [[AFHTTPRequestOperationManager alloc] initWithBaseURL:baseUrl];
httpClient.requestSerializer = [AFJSONRequestSerializer serializer];

[httpClient.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
[httpClient.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Accept"];
[httpClient.requestSerializer setValue:@"Bearer 0c7f26c8-5b4a-4a32-b35a-2e249448bbf2" forHTTPHeaderField:@"Authorization"];
[httpClient.requestSerializer setValue:@"browser api.catalyze.io 525ad5d6993247cccb083e5a" forHTTPHeaderField:@"X-Api-Key"];

httpClient.responseSerializer = [AFHTTPResponseSerializer serializer];

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/classes/{name}/query"];

NSDictionary *body = @[
    @{
        @"id": @"ENTRY_ID_123",
        @"content": 
        @{
            @"suite": @"spades",
            @"value": 7
        },
        @"phi":@false
    },
    @{
        @"id": @"ENTRY_ID_456",
        @"content": 
        @{
            @"suite": @"spades",
            @"value": 8
        },
        @"phi":@false
    }
]
;

[httpClient POST:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


