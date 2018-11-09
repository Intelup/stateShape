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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
var stateShape = {
  object: {
    deepClone: function deepClone(obj) {
      var _this = this;

      var clone = Object.assign({}, obj);
      Object.keys(clone).forEach(function (key) {
        return clone[key] = _typeof(obj[key]) === 'object' ? _this.deepClone(obj[key]) : obj[key];
      });
      return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
    },
    objectsArrayMerge: function objectsArrayMerge(arr) {
      return stateShape.array.flattenizeArray(arr.map(function (item) {
        return Object.entries(item);
      })).reduce(function (prev, curr) {
        prev[curr[0]] = curr[1];
        return prev;
      }, {});
    },
    removeByUuid: function removeByUuid(objs, uuid) {
      return transformArrayToObjs(Object.values(objs).filter(function (obj) {
        return obj.uuid !== uuid;
      }));
    }
  },
  array: {
    flattenizeArray: function flattenizeArray(array) {
      return [].concat(_toConsumableArray([].concat.apply([], array)));
    },
    transformArrayToObjs: function transformArrayToObjs(name, array) {
      var _this2 = this;

      var propertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      var anotherParameters = this.flattenizeArray(array.map(function (item) {
        return Object.entries(item).map(function (val) {
          if (Array.isArray(val[1]) && val[1].every(function (item) {
            return _typeof(item) == 'object';
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
              return _typeof(item) == 'object';
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
          var objectsArray = _this2.flattenizeArray(array.map(function (item) {
            return item[parameter];
          }));

          var objects = _this2.transformArrayToObjs(parameter, objectsArray, propertyName);

          return objects;
        }));
        console.log('Another Objects: ', anotherObjects);
        var objectsMerge = stateShape.object.objectsArrayMerge(anotherObjects);
        result = Object.assign(result, objectsMerge);
      }

      return result;
    }
  }
};
module.exports = stateShape;

/***/ })

/******/ });
});
//# sourceMappingURL=stateshape.js.map