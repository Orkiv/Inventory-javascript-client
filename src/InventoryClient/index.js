/**
 * InventoryAPI
 * Orkiv Inventory API client 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['InventoryClient/ApiClient', 'InventoryClient/InventoryClient.model/Category', 'InventoryClient/InventoryClient.model/Dictionary', 'InventoryClient/InventoryClient.model/Error', 'InventoryClient/InventoryClient.model/EventRequest', 'InventoryClient/InventoryClient.model/InventoryGroup', 'InventoryClient/InventoryClient.model/Item', 'InventoryClient/InventoryClient.model/Order', 'InventoryClient/InventoryClient.model/Response', 'InventoryClient/InventoryClient.model/Service', 'InventoryClient/InventoryClient.Api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./InventoryClient.model/Category'), require('./InventoryClient.model/Dictionary'), require('./InventoryClient.model/Error'), require('./InventoryClient.model/EventRequest'), require('./InventoryClient.model/InventoryGroup'), require('./InventoryClient.model/Item'), require('./InventoryClient.model/Order'), require('./InventoryClient.model/Response'), require('./InventoryClient.model/Service'), require('./InventoryClient.Api/DefaultApi'));
  }
}(function(ApiClient, Category, Dictionary, Error, EventRequest, InventoryGroup, Item, Order, Response, Service, DefaultApi) {
  'use strict';

  /**
   * Orkiv_Inventory_API_client.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var InventoryClient = require('InventoryClient/index'); // See note below*.
   * var xxxSvc = new InventoryClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new InventoryClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['InventoryClient/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new InventoryClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new InventoryClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module InventoryClient/index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:InventoryClient/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Category model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Category}
     */
    Category: Category,
    /**
     * The Dictionary model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Dictionary}
     */
    Dictionary: Dictionary,
    /**
     * The Error model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Error}
     */
    Error: Error,
    /**
     * The EventRequest model constructor.
     * @property {module:InventoryClient/InventoryClient.model/EventRequest}
     */
    EventRequest: EventRequest,
    /**
     * The InventoryGroup model constructor.
     * @property {module:InventoryClient/InventoryClient.model/InventoryGroup}
     */
    InventoryGroup: InventoryGroup,
    /**
     * The Item model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Item}
     */
    Item: Item,
    /**
     * The Order model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Order}
     */
    Order: Order,
    /**
     * The Response model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Response}
     */
    Response: Response,
    /**
     * The Service model constructor.
     * @property {module:InventoryClient/InventoryClient.model/Service}
     */
    Service: Service,
    /**
     * The DefaultApi service constructor.
     * @property {module:InventoryClient/InventoryClient.Api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
