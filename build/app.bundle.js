/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calender__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calender___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__calender__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__future_getaways__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__future_getaways___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__future_getaways__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

var events = [{
  'Date': new Date(2016, 6, 7),
  'Title': 'Doctor appointment at 3:25pm.'
}, {
  'Date': new Date(2016, 6, 18),
  'Title': 'New Garfield movie comes out!',
  'Link': 'https://garfield.com'
}, {
  'Date': new Date(2016, 6, 27),
  'Title': '25 year anniversary',
  'Link': 'https://www.google.com.au/#q=anniversary+gifts'
}];
var settings = {};
var element = document.getElementById('check-in-calender');
caleandar(element, events, settings);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var $future_getaways__links_container = document.querySelectorAll('.future-getaways__links-container>p');
var $future_getaways__main_container = document.querySelectorAll('.future-getaways__main-container>div');

active = function active(id) {
  for (var i = 0; i < $future_getaways__links_container.length; i++) {
    if ($future_getaways__links_container[i].id == id) {
      $future_getaways__links_container[i].classList.add('active');
      var $id = $future_getaways__links_container[i].id;
      var replace_text = $id.replace('__link', '');

      for (var _i = 0; _i < $future_getaways__main_container.length; _i++) {
        if ($future_getaways__main_container[_i].classList.contains(replace_text)) {
          $future_getaways__main_container[_i].classList.remove('hidden');
        } else {
          $future_getaways__main_container[_i].classList.add('hidden');
        }
      }
    } else {
      $future_getaways__links_container[i].classList.remove('active');
    }
  }
}; // var cities = [
//     {
//         city : 'New York',
//         country: 'New York'
//     },
//     {
//         city : 'Phoenix',
//         country: 'Arizona'
//     },
// ]
// for (let i = 0; i < cities.length; i++){
//     let $div = document.createElement("div");
//     $div.className = "w-1/4 mt-6";
//     let $city_text = document.createElement("p");
//     $city_text.className = "font-medium";
//     let $city_name = document.createTextNode("Nepal");
//     $city_text.appendChild($city_name)
// console.log($city_text.appendChild($city_name));
//     let $country_text = document.createElement("p");
//     $country_text.className = "font-light text-gray-400";
//     let $country_name = document.createTextNode(cities[i].country);
//     var a = $city_text.appendChild($city_name);
//     var b = $country_text.appendChild($country_name);
//     $div.appendChild(b);
//     $div.appendChild(a);
//     // console.log($div);
//     $future_getaways__first_container.appendChild($div);
// }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var $header = document.querySelector('.main-wrapper__second-section');
var $check_in_calender = document.querySelector('#check-in-calender');
var $options__container = document.querySelector('.options__container');
var $location__container = document.querySelector('.location__container');
var $guests__container = document.querySelector('.guests__container');

window.onscroll = function () {
  if (window.pageYOffset >= 64) {
    $header.classList.add("sticky");
  } else {
    $header.classList.remove("sticky");
  }
};

search_click = function search_click() {
  $header.classList.remove('sticky');
  $header.classList.add('show-form');
};

check_in_out = function check_in_out() {
  if ($check_in_calender.classList.contains('hidden')) {
    $check_in_calender.classList.remove('hidden');
  } else {
    $check_in_calender.classList.add('hidden');
  }
};

options_btn_click = function options_btn_click() {
  if ($options__container.classList.contains('hidden')) {
    $options__container.classList.remove('hidden');
  } else {
    $options__container.classList.add('hidden');
  }
};

form_location = function form_location() {
  if ($location__container.classList.contains('hidden')) {
    $location__container.classList.remove('hidden');
  } else {
    $location__container.classList.add('hidden');
  }
};

guests__container = function guests__container() {
  if ($guests__container.classList.contains('hidden')) {
    $guests__container.classList.remove('hidden');
  } else {
    $guests__container.classList.add('hidden');
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
(function webpackMissingModule() { throw new Error("Cannot find module \"serve\""); }());


/***/ })
/******/ ]);