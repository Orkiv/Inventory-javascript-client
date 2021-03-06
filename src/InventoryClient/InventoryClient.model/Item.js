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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['InventoryClient/ApiClient', 'InventoryClient/InventoryClient.model/Variation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Variation'));
  } else {
    // Browser globals (root is window)
    if (!root.InventoryClient) {
      root.InventoryClient = {};
    }
    root.InventoryClient.Item = factory(root.InventoryClient.ApiClient, root.InventoryClient.Variation);
  }
}(this, function(ApiClient, Variation) {
  'use strict';




  /**
   * The Item model module.
   * @module InventoryClient/InventoryClient.model/Item
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:InventoryClient/InventoryClient.model/Item
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:InventoryClient/InventoryClient.model/Item} obj Optional instance to populate.
   * @return {module:InventoryClient/InventoryClient.model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ordprice')) {
        obj['ordprice'] = ApiClient.convertToType(data['ordprice'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [Variation]);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], ['String']);
      }
      if (data.hasOwnProperty('Buy')) {
        obj['Buy'] = ApiClient.convertToType(data['Buy'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of item
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Category ID of item
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Rich text description of item
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;
  /**
   * Name of item
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Integer value of price
   * @member {Number} ordprice
   */
  exports.prototype['ordprice'] = undefined;
  /**
   * String value of price
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Array.<module:InventoryClient/InventoryClient.model/Variation>} variations
   */
  exports.prototype['variations'] = undefined;
  /**
   * Inventory quantity
   * @member {String} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Array of item media
   * @member {Array.<String>} media
   */
  exports.prototype['media'] = undefined;
  /**
   * Link to checkout page of item
   * @member {String} Buy
   */
  exports.prototype['Buy'] = undefined;



  return exports;
}));


