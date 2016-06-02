---
title: Add Entry
---

# Add Entry

## POST /classes/{name}/entry
Use this route to add data to the custom class that you created.

NAME | TYPE | DESCRIPTION
-----|------|------------
content | object | Include the key value pairs corresponding to each data column name. For example, 
 | | {"zip_code":"53202", "city":"Milwaukee", "state":"Wisconsin", "latitude":"43.038758", "longitude":"­87.906506"}


### Parameters

* name (required, String) ... The name of the custom class you are creating an entry for.

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
	"content": 
	{
		"zipcode": "53202",
		"city": "Milwaukee"
	}
}
```
### Response (application/json)

```json
{
	"id": "ENTRY_ID_123",
	"content": 
	{
		"zipcode": "53202",
		"city": "Milwaukee"
	},

	"phi": false
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://api.catalyze.io/v2/classes/{name}/entry');

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

var body = {
	"id": "ENTRY_ID_123",
	"content": 
	{
		"zipcode": "53202",
		"city": "Milwaukee"
	},

	"phi": false
}
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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/classes/{name}/entry"];

NSDictionary *body = @{
	@"id": @"ENTRY_ID_123",
	@"content": 
	@{
		@"zipcode": @"53202",
		@"city": @"Milwaukee"
	},

	@"phi":@false
}
;

[httpClient POST:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


