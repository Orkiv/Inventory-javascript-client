# InventoryClient

InventoryClient - JavaScript client for InventoryClient
Orkiv Inventory API client 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2016-08-04T16:35:47.966-04:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)


#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/Orkiv/Inventory-javascript-client
then install it via:

```shell
    npm install Orkiv/Inventory-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var InventoryClient = require('InventoryClient');

var defaultClient = InventoryClient.ApiClient.instance;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix['APIKey'] = "Token"

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix['accountid'] = "Token"

var api = new InventoryClient.DefaultApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allGet(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.orkiv.com/i/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InventoryClient.DefaultApi* | [**allGet**](docs/DefaultApi.md#allGet) | **GET** /all/ | 
*InventoryClient.DefaultApi* | [**categoriesDelete**](docs/DefaultApi.md#categoriesDelete) | **DELETE** /categories/ | 
*InventoryClient.DefaultApi* | [**categoriesPost**](docs/DefaultApi.md#categoriesPost) | **POST** /categories/ | 
*InventoryClient.DefaultApi* | [**categoriesPut**](docs/DefaultApi.md#categoriesPut) | **PUT** /categories/ | 
*InventoryClient.DefaultApi* | [**itemAddPost**](docs/DefaultApi.md#itemAddPost) | **POST** /item/add/ | 
*InventoryClient.DefaultApi* | [**itemAddbulkPost**](docs/DefaultApi.md#itemAddbulkPost) | **POST** /item/addbulk/ | 
*InventoryClient.DefaultApi* | [**itemDelete**](docs/DefaultApi.md#itemDelete) | **DELETE** /item/ | 
*InventoryClient.DefaultApi* | [**itemPut**](docs/DefaultApi.md#itemPut) | **PUT** /item/ | 
*InventoryClient.DefaultApi* | [**itemsCountPost**](docs/DefaultApi.md#itemsCountPost) | **POST** /items/count/ | 
*InventoryClient.DefaultApi* | [**itemsPost**](docs/DefaultApi.md#itemsPost) | **POST** /items/ | 
*InventoryClient.DefaultApi* | [**itemsallfieldsPost**](docs/DefaultApi.md#itemsallfieldsPost) | **POST** /items/?allfields | 
*InventoryClient.DefaultApi* | [**ordersPost**](docs/DefaultApi.md#ordersPost) | **POST** /orders/ | 
*InventoryClient.DefaultApi* | [**queryPost**](docs/DefaultApi.md#queryPost) | **POST** /query/ | 
*InventoryClient.DefaultApi* | [**queryallfieldsPost**](docs/DefaultApi.md#queryallfieldsPost) | **POST** /query/?allfields | 
*InventoryClient.DefaultApi* | [**servicesDelete**](docs/DefaultApi.md#servicesDelete) | **DELETE** /services/ | 
*InventoryClient.DefaultApi* | [**servicesGet**](docs/DefaultApi.md#servicesGet) | **GET** /services/ | 
*InventoryClient.DefaultApi* | [**servicesPost**](docs/DefaultApi.md#servicesPost) | **POST** /services/ | 
*InventoryClient.DefaultApi* | [**servicesPut**](docs/DefaultApi.md#servicesPut) | **PUT** /services/ | 
*InventoryClient.DefaultApi* | [**writeDelete**](docs/DefaultApi.md#writeDelete) | **DELETE** /write/ | 
*InventoryClient.DefaultApi* | [**writePost**](docs/DefaultApi.md#writePost) | **POST** /write/ | 


## Documentation for Models

 - [InventoryClient.Category](docs/Category.md)
 - [InventoryClient.Dictionary](docs/Dictionary.md)
 - [InventoryClient.Error](docs/Error.md)
 - [InventoryClient.EventRequest](docs/EventRequest.md)
 - [InventoryClient.InventoryGroup](docs/InventoryGroup.md)
 - [InventoryClient.Item](docs/Item.md)
 - [InventoryClient.Order](docs/Order.md)
 - [InventoryClient.Response](docs/Response.md)
 - [InventoryClient.Service](docs/Service.md)


## Documentation for Authorization


### APIKey

- **Type**: API key
- **API key parameter name**: APIKey
- **Location**: HTTP header

### AccountID

- **Type**: API key
- **API key parameter name**: accountid
- **Location**: HTTP header

