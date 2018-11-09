(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("stateshape", [], factory);
	else if(typeof exports === 'object')
		exports["stateshape"] = factory();
	else
		root["stateshape"] = factory();
})((typeof window !== 'undefined' ? window : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _object = __webpack_require__(/*! ./object */ "./src/object.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var array = {
  flattenizeArray: function flattenizeArray(array) {
    return [].concat(_toConsumableArray([].concat.apply([], array)));
  },
  arrayToObject: function arrayToObject(name, array) {
    var _this = this;

    var propertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
    var anotherParameters = this.flattenizeArray(array.map(function (item) {
      return Object.entries(item).map(function (val) {
        if (Array.isArray(val[1]) && val[1].every(function (item) {
          return _typeof(item) === 'object';
        })) {
          return val[0];
        }

        return null;
      }).filter(function (x) {
        return x;
      });
    }));
    var allIds = array.map(function (item) {
      return item.uuid;
    });
    var result = {};
    result[name] = {
      byUuid: Object.values(array).reduce(function (obj, row) {
        // allIds.push(row[propertyName])
        row = Object.entries(row).map(function (val) {
          // console.log('VAL: ', val)
          if (Array.isArray(val[1]) && val[1].every(function (item) {
            return _typeof(item) === 'object';
          })) {
            val[1] = val[1].map(function (item) {
              return item[propertyName];
            });
          } // console.log('RETURNED VAL: ', val)


          return val;
        }).reduce(function (prev, curr) {
          prev[curr[0]] = curr[1];
          return prev;
        }, {}); // console.log('ROW: ', row)

        return obj[row[propertyName]] = row, obj;
      }, {}),
      allIds: allIds
    };
    anotherParameters = [].concat(_toConsumableArray(new Set(anotherParameters)));
    console.log('Another Parameters: ', anotherParameters);

    if (anotherParameters.length > 0) {
      var anotherObjects = this.flattenizeArray(anotherParameters.map(function (parameter) {
        var objectsArray = _this.flattenizeArray(array.map(function (item) {
          return item[parameter];
        }));

        var objects = _this.transformArrayToObjs(parameter, objectsArray, propertyName);

        return objects;
      }));
      console.log('Another Objects: ', anotherObjects);
      var objectsMerge = (0, _object.objectsArrayMerge)(anotherObjects);
      result = Object.assign(result, objectsMerge);
    }

    return result;
  }
};
var _default = array;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _object = _interopRequireDefault(__webpack_require__(/*! ./object */ "./src/object.js"));

var _array = _interopRequireDefault(__webpack_require__(/*! ./array */ "./src/array.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateShape = {
  object: _object.default,
  array: _array.default
};
var _default = stateShape;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./src/array.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var object = {
  /**
   * Clone object without reference
   *
   * @private
   * @param {Object} [obj] The original object.
   * @returns {Object} Returns the cloned object.
   */
  deepClone: function deepClone(obj) {
    var _this = this;

    var clone = Object.assign({}, obj);
    Object.keys(clone).forEach(function (key) {
      return clone[key] = _typeof(obj[key]) === 'object' ? _this.deepClone(obj[key]) : obj[key];
    });
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
  },

  /**
   * Convert array of object to single object
   *
   * @private
   * @param {Array} [arr] The array.
   * @returns {Object} Returns the object.
   */
  objectsArrayMerge: function objectsArrayMerge(arr) {
    return (0, _array.flattenizeArray)(arr.map(function (item) {
      return Object.entries(item);
    })).reduce(function (prev, curr) {
      prev[curr[0]] = curr[1];
      return prev;
    }, {});
  },

  /**
   * Remove object by key (uuid)
   *
   * @private
   * @param {Object} [objs] The object with keys of uuid.
   * @param {String} [uuid] The string index (uuid).
   * @returns {Object} Returns the new object, by removing the object from the key passed by uuid parameter.
   */
  removeByUuid: function removeByUuid(objs, uuid) {
    return (0, _array.transformArrayToObjs)(Object.values(objs).filter(function (obj) {
      return obj.uuid !== uuid;
    }));
  }
};
var _default = object;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=stateshape.js.map