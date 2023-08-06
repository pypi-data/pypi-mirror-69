/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"custom-panel": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"import-href-polyfill":"import-href-polyfill","vendors~compat":"vendors~compat","compat":"compat","vendors~legacy-support":"vendors~legacy-support","legacy-support":"legacy-support"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/custom-panel.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/dom/fire_event.ts":
/*!**************************************!*\
  !*** ./src/common/dom/fire_event.ts ***!
  \**************************************/
/*! exports provided: fireEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireEvent", function() { return fireEvent; });
// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * Dispatches a custom event with an optional detail value.
 *
 * @param {string} type Name of event type.
 * @param {*=} detail Detail value containing event-specific
 *   payload.
 * @param {{ bubbles: (boolean|undefined),
 *           cancelable: (boolean|undefined),
 *           composed: (boolean|undefined) }=}
 *  options Object specifying options.  These may include:
 *  `bubbles` (boolean, defaults to `true`),
 *  `cancelable` (boolean, defaults to false), and
 *  `node` on which to fire the event (HTMLElement, defaults to `this`).
 * @return {Event} The new event that was fired.
 */
const fireEvent = (node, type, detail, options) => {
  options = options || {}; // @ts-ignore

  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

/***/ }),

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
const _load = (tag, url, type) => {
  // This promise will be used by Promise.all to determine success or failure
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag);
    let attr = "src";
    let parent = "body"; // Important success and error for the promise

    element.onload = () => resolve(url);

    element.onerror = () => reject(url); // Need to set different attributes depending on tag type


    switch (tag) {
      case "script":
        element.async = true;

        if (type) {
          element.type = type;
        }

        break;

      case "link":
        element.type = "text/css";
        element.rel = "stylesheet";
        attr = "href";
        parent = "head";
    } // Inject into document to kick off loading


    element[attr] = url;
    document[parent].appendChild(element);
  });
};

const loadCSS = url => _load("link", url);
const loadJS = url => _load("script", url);
const loadImg = url => _load("img", url);
const loadModule = url => _load("script", url, "module");

/***/ }),

/***/ "./src/common/feature-detect/support-web-components.ts":
/*!*************************************************************!*\
  !*** ./src/common/feature-detect/support-web-components.ts ***!
  \*************************************************************/
/*! exports provided: webComponentsSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webComponentsSupported", function() { return webComponentsSupported; });
const webComponentsSupported = "customElements" in window && "content" in document.createElement("template");

/***/ }),

/***/ "./src/entrypoints/custom-panel.ts":
/*!*****************************************!*\
  !*** ./src/entrypoints/custom-panel.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts");
/* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/custom-panel/load-custom-panel */ "./src/util/custom-panel/load-custom-panel.ts");
/* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/custom-panel/create-custom-panel-element */ "./src/util/custom-panel/create-custom-panel-element.ts");
/* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/custom-panel/set-custom-panel-properties */ "./src/util/custom-panel/set-custom-panel-properties.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_feature_detect_support_web_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/feature-detect/support-web-components */ "./src/common/feature-detect/support-web-components.ts");






let es5Loaded;

window.loadES5Adapter = () => {
  if (!es5Loaded) {
    es5Loaded = Promise.all([Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(`${/static/}polyfills/custom-elements-es5-adapter.js`).catch(), Promise.all(/*! import() | compat */[__webpack_require__.e("vendors~compat"), __webpack_require__.e("compat")]).then(__webpack_require__.bind(null, /*! ./compatibility */ "./src/entrypoints/compatibility.ts"))]);
  }

  return es5Loaded;
};

let panelEl;

function setProperties(properties) {
  if (!panelEl) {
    return;
  }

  Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__["setCustomPanelProperties"])(panelEl, properties);
}

function initialize(panel, properties) {
  const style = document.createElement("style");
  style.innerHTML = "body{margin:0}";
  document.head.appendChild(style);
  const config = panel.config._panel_custom;
  let start = Promise.resolve();

  if (!_common_feature_detect_support_web_components__WEBPACK_IMPORTED_MODULE_5__["webComponentsSupported"]) {
    start = start.then(() => Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(`${/static/}polyfills/webcomponents-bundle.js`));
  }

  if (false) {}

  start.then(() => Object(_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__["loadCustomPanel"])(config)) // If our element is using es5, let it finish loading that and define element
  // This avoids elements getting upgraded after being added to the DOM
  .then(() => es5Loaded || Promise.resolve()).then(() => {
    panelEl = Object(_util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__["createCustomPanelElement"])(config);

    const forwardEvent = ev => {
      if (window.parent.customPanel) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(window.parent.customPanel, ev.type, ev.detail);
      }
    };

    panelEl.addEventListener("opp-toggle-menu", forwardEvent);
    window.addEventListener("location-changed", ev => {
      if (window.parent.customPanel) {
        window.parent.customPanel.navigate(window.location.pathname, ev.detail ? ev.detail.replace : false);
      }
    });
    setProperties(Object.assign({
      panel
    }, properties));
    document.body.appendChild(panelEl);
  }, err => {
    // tslint:disable-next-line
    console.error(err, panel);
    alert(`Unable to load the panel source: ${err}.`);
  });
}

document.addEventListener("DOMContentLoaded", () => window.parent.customPanel.registerIframe(initialize, setProperties), {
  once: true
});

/***/ }),

/***/ "./src/util/custom-panel/create-custom-panel-element.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/create-custom-panel-element.ts ***!
  \**************************************************************/
/*! exports provided: createCustomPanelElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomPanelElement", function() { return createCustomPanelElement; });
const createCustomPanelElement = panelConfig => {
  // Legacy support. Custom panels used to have to define element op-panel-{name}
  const tagName = "html_url" in panelConfig ? `op-panel-${panelConfig.name}` : panelConfig.name;
  return document.createElement(tagName);
};

/***/ }),

/***/ "./src/util/custom-panel/load-custom-panel.ts":
/*!****************************************************!*\
  !*** ./src/util/custom-panel/load-custom-panel.ts ***!
  \****************************************************/
/*! exports provided: loadCustomPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomPanel", function() { return loadCustomPanel; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");
 // Make sure we only import every JS-based panel once (HTML import has this built-in)

const JS_CACHE = {};
const loadCustomPanel = panelConfig => {
  if (panelConfig.html_url) {
    const toLoad = [__webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js"))];

    if (!panelConfig.embed_iframe) {
      toLoad.push(Promise.all(/*! import() | legacy-support */[__webpack_require__.e("vendors~legacy-support"), __webpack_require__.e("legacy-support")]).then(__webpack_require__.bind(null, /*! ../legacy-support */ "./src/util/legacy-support.js")));
    }

    return Promise.all(toLoad).then(([{
      importHrefPromise
    }]) => importHrefPromise(panelConfig.html_url));
  }

  if (panelConfig.js_url) {
    if (!(panelConfig.js_url in JS_CACHE)) {
      JS_CACHE[panelConfig.js_url] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(panelConfig.js_url);
    }

    return JS_CACHE[panelConfig.js_url];
  }

  if (panelConfig.module_url) {
    return Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(panelConfig.module_url);
  }

  return Promise.reject("No valid url found in panel config.");
};

/***/ }),

/***/ "./src/util/custom-panel/set-custom-panel-properties.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/set-custom-panel-properties.ts ***!
  \**************************************************************/
/*! exports provided: setCustomPanelProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomPanelProperties", function() { return setCustomPanelProperties; });
const setCustomPanelProperties = (root, properties) => {
  if ("setProperties" in root) {
    root.setProperties(properties);
  } else {
    Object.keys(properties).forEach(key => {
      root[key] = properties[key];
    });
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXBhbmVsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL2ZpcmVfZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ZlYXR1cmUtZGV0ZWN0L3N1cHBvcnQtd2ViLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2N1c3RvbS1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvY3JlYXRlLWN1c3RvbS1wYW5lbC1lbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvc2V0LWN1c3RvbS1wYW5lbC1wcm9wZXJ0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY3VzdG9tLXBhbmVsXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJpbXBvcnQtaHJlZi1wb2x5ZmlsbFwiOlwiaW1wb3J0LWhyZWYtcG9seWZpbGxcIixcInZlbmRvcnN+Y29tcGF0XCI6XCJ2ZW5kb3JzfmNvbXBhdFwiLFwiY29tcGF0XCI6XCJjb21wYXRcIixcInZlbmRvcnN+bGVnYWN5LXN1cHBvcnRcIjpcInZlbmRvcnN+bGVnYWN5LXN1cHBvcnRcIixcImxlZ2FjeS1zdXBwb3J0XCI6XCJsZWdhY3ktc3VwcG9ydFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5jaHVuay5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZnJvbnRlbmRfbGF0ZXN0L1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSBzZWxmW1wid2VicGFja0pzb25wXCJdID0gc2VsZltcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL2N1c3RvbS1wYW5lbC50c1wiKTtcbiIsIi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxyXG4vL1xyXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy9cclxuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XHJcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcclxuLy8gbWV0OlxyXG4vL1xyXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXHJcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxyXG4vLyBkaXN0cmlidXRpb24uXHJcbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxyXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4vL1xyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXHJcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcclxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXHJcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXHJcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxyXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXHJcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxyXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcclxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxyXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0VcclxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBpbnRlcmZhY2UgT1BQRG9tRXZlbnRzIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFZhbGlkT3BwRG9tRXZlbnQgPSBrZXlvZiBPUFBEb21FdmVudHM7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9QUERvbUV2ZW50PFQ+IGV4dGVuZHMgRXZlbnQge1xyXG4gIGRldGFpbDogVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cclxuICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXHJcbiAqICAgcGF5bG9hZC5cclxuICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXHJcbiAqICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxyXG4gKiAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XHJcbiAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcclxuICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcclxuICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcclxuICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXHJcbiAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpcmVFdmVudCA9IDxPcHBFdmVudCBleHRlbmRzIFZhbGlkT3BwRG9tRXZlbnQ+KFxyXG4gIG5vZGU6IEhUTUxFbGVtZW50IHwgV2luZG93LFxyXG4gIHR5cGU6IE9wcEV2ZW50LFxyXG4gIGRldGFpbD86IE9QUERvbUV2ZW50c1tPcHBFdmVudF0sXHJcbiAgb3B0aW9ucz86IHtcclxuICAgIGJ1YmJsZXM/OiBib29sZWFuO1xyXG4gICAgY2FuY2VsYWJsZT86IGJvb2xlYW47XHJcbiAgICBjb21wb3NlZD86IGJvb2xlYW47XHJcbiAgfVxyXG4pID0+IHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgZGV0YWlsID0gZGV0YWlsID09PSBudWxsIHx8IGRldGFpbCA9PT0gdW5kZWZpbmVkID8ge30gOiBkZXRhaWw7XHJcbiAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xyXG4gICAgYnViYmxlczogb3B0aW9ucy5idWJibGVzID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5idWJibGVzLFxyXG4gICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxyXG4gICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxyXG4gIH0pO1xyXG4gIChldmVudCBhcyBhbnkpLmRldGFpbCA9IGRldGFpbDtcclxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIHJldHVybiBldmVudDtcclxufTtcclxuIiwiLy8gTG9hZCBhIHJlc291cmNlIGFuZCBnZXQgYSBwcm9taXNlIHdoZW4gbG9hZGluZyBkb25lLlxuLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1sb2FkZXJcblxuY29uc3QgX2xvYWQgPSAoXG4gIHRhZzogXCJsaW5rXCIgfCBcInNjcmlwdFwiIHwgXCJpbWdcIixcbiAgdXJsOiBzdHJpbmcsXG4gIHR5cGU/OiBcIm1vZHVsZVwiXG4pID0+IHtcbiAgLy8gVGhpcyBwcm9taXNlIHdpbGwgYmUgdXNlZCBieSBQcm9taXNlLmFsbCB0byBkZXRlcm1pbmUgc3VjY2VzcyBvciBmYWlsdXJlXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBsZXQgYXR0ciA9IFwic3JjXCI7XG4gICAgbGV0IHBhcmVudCA9IFwiYm9keVwiO1xuXG4gICAgLy8gSW1wb3J0YW50IHN1Y2Nlc3MgYW5kIGVycm9yIGZvciB0aGUgcHJvbWlzZVxuICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh1cmwpO1xuICAgIGVsZW1lbnQub25lcnJvciA9ICgpID0+IHJlamVjdCh1cmwpO1xuXG4gICAgLy8gTmVlZCB0byBzZXQgZGlmZmVyZW50IGF0dHJpYnV0ZXMgZGVwZW5kaW5nIG9uIHRhZyB0eXBlXG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgXCJzY3JpcHRcIjpcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGlua1wiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MTGlua0VsZW1lbnQpLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGF0dHIgPSBcImhyZWZcIjtcbiAgICAgICAgcGFyZW50ID0gXCJoZWFkXCI7XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGludG8gZG9jdW1lbnQgdG8ga2ljayBvZmYgbG9hZGluZ1xuICAgIGVsZW1lbnRbYXR0cl0gPSB1cmw7XG4gICAgZG9jdW1lbnRbcGFyZW50XS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENTUyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJsaW5rXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEpTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRJbWcgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwiaW1nXCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZE1vZHVsZSA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJzY3JpcHRcIiwgdXJsLCBcIm1vZHVsZVwiKTtcbiIsImV4cG9ydCBjb25zdCB3ZWJDb21wb25lbnRzU3VwcG9ydGVkID1cbiAgXCJjdXN0b21FbGVtZW50c1wiIGluIHdpbmRvdyAmJiBcImNvbnRlbnRcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4iLCJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlXCI7XG5pbXBvcnQgeyBsb2FkQ3VzdG9tUGFuZWwgfSBmcm9tIFwiLi4vdXRpbC9jdXN0b20tcGFuZWwvbG9hZC1jdXN0b20tcGFuZWxcIjtcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbVBhbmVsRWxlbWVudCB9IGZyb20gXCIuLi91dGlsL2N1c3RvbS1wYW5lbC9jcmVhdGUtY3VzdG9tLXBhbmVsLWVsZW1lbnRcIjtcbmltcG9ydCB7IHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyB9IGZyb20gXCIuLi91dGlsL2N1c3RvbS1wYW5lbC9zZXQtY3VzdG9tLXBhbmVsLXByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcbmltcG9ydCB7IEN1c3RvbVBhbmVsSW5mbyB9IGZyb20gXCIuLi9kYXRhL3BhbmVsX2N1c3RvbVwiO1xuaW1wb3J0IHsgd2ViQ29tcG9uZW50c1N1cHBvcnRlZCB9IGZyb20gXCIuLi9jb21tb24vZmVhdHVyZS1kZXRlY3Qvc3VwcG9ydC13ZWItY29tcG9uZW50c1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxvYWRFUzVBZGFwdGVyOiAoKSA9PiBQcm9taXNlPHVua25vd24+O1xuICB9XG59XG5cbmxldCBlczVMb2FkZWQ6IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQ7XG5cbndpbmRvdy5sb2FkRVM1QWRhcHRlciA9ICgpID0+IHtcbiAgaWYgKCFlczVMb2FkZWQpIHtcbiAgICBlczVMb2FkZWQgPSBQcm9taXNlLmFsbChbXG4gICAgICBsb2FkSlMoXG4gICAgICAgIGAke19fU1RBVElDX1BBVEhfX31wb2x5ZmlsbHMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyLmpzYFxuICAgICAgKS5jYXRjaCgpLFxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcGF0XCIgKi8gXCIuL2NvbXBhdGliaWxpdHlcIiksXG4gICAgXSk7XG4gIH1cbiAgcmV0dXJuIGVzNUxvYWRlZDtcbn07XG5cbmxldCBwYW5lbEVsOiBIVE1MRWxlbWVudCB8IFBvbHltZXJFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgaWYgKCFwYW5lbEVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyhwYW5lbEVsLCBwcm9wZXJ0aWVzKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZShwYW5lbDogQ3VzdG9tUGFuZWxJbmZvLCBwcm9wZXJ0aWVzOiB7fSkge1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gXCJib2R5e21hcmdpbjowfVwiO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBjb25zdCBjb25maWcgPSBwYW5lbC5jb25maWcuX3BhbmVsX2N1c3RvbTtcbiAgbGV0IHN0YXJ0OiBQcm9taXNlPHVua25vd24+ID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgaWYgKCF3ZWJDb21wb25lbnRzU3VwcG9ydGVkKSB7XG4gICAgc3RhcnQgPSBzdGFydC50aGVuKCgpID0+XG4gICAgICBsb2FkSlMoYCR7X19TVEFUSUNfUEFUSF9ffXBvbHlmaWxscy93ZWJjb21wb25lbnRzLWJ1bmRsZS5qc2ApXG4gICAgKTtcbiAgfVxuXG4gIGlmIChfX0JVSUxEX18gPT09IFwiZXM1XCIpIHtcbiAgICAvLyBMb2FkIEVTNSBhZGFwdGVyLiBTd2FsbG93IGVycm9ycyBhcyBpdCByYWlzZXMgZXJyb3JzIG9uIG9sZCBicm93c2Vycy5cbiAgICBzdGFydCA9IHN0YXJ0LnRoZW4oKCkgPT4gd2luZG93LmxvYWRFUzVBZGFwdGVyKCkpO1xuICB9XG5cbiAgc3RhcnRcbiAgICAudGhlbigoKSA9PiBsb2FkQ3VzdG9tUGFuZWwoY29uZmlnKSlcbiAgICAvLyBJZiBvdXIgZWxlbWVudCBpcyB1c2luZyBlczUsIGxldCBpdCBmaW5pc2ggbG9hZGluZyB0aGF0IGFuZCBkZWZpbmUgZWxlbWVudFxuICAgIC8vIFRoaXMgYXZvaWRzIGVsZW1lbnRzIGdldHRpbmcgdXBncmFkZWQgYWZ0ZXIgYmVpbmcgYWRkZWQgdG8gdGhlIERPTVxuICAgIC50aGVuKCgpID0+IGVzNUxvYWRlZCB8fCBQcm9taXNlLnJlc29sdmUoKSlcbiAgICAudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgcGFuZWxFbCA9IGNyZWF0ZUN1c3RvbVBhbmVsRWxlbWVudChjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IGZvcndhcmRFdmVudCA9IChldikgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50LmN1c3RvbVBhbmVsKSB7XG4gICAgICAgICAgICBmaXJlRXZlbnQod2luZG93LnBhcmVudC5jdXN0b21QYW5lbCwgZXYudHlwZSwgZXYuZGV0YWlsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHBhbmVsRWwhLmFkZEV2ZW50TGlzdGVuZXIoXCJvcHAtdG9nZ2xlLW1lbnVcIiwgZm9yd2FyZEV2ZW50KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2NhdGlvbi1jaGFuZ2VkXCIsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQuY3VzdG9tUGFuZWwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQuY3VzdG9tUGFuZWwubmF2aWdhdGUoXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgZXYuZGV0YWlsID8gZXYuZGV0YWlsLnJlcGxhY2UgOiBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRQcm9wZXJ0aWVzKHsgcGFuZWwsIC4uLnByb3BlcnRpZXMgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWxFbCEpO1xuICAgICAgfSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCBwYW5lbCk7XG4gICAgICAgIGFsZXJ0KGBVbmFibGUgdG8gbG9hZCB0aGUgcGFuZWwgc291cmNlOiAke2Vycn0uYCk7XG4gICAgICB9XG4gICAgKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJET01Db250ZW50TG9hZGVkXCIsXG4gICgpID0+IHdpbmRvdy5wYXJlbnQuY3VzdG9tUGFuZWwhLnJlZ2lzdGVySWZyYW1lKGluaXRpYWxpemUsIHNldFByb3BlcnRpZXMpLFxuICB7IG9uY2U6IHRydWUgfVxuKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQgPSAocGFuZWxDb25maWcpID0+IHtcbiAgLy8gTGVnYWN5IHN1cHBvcnQuIEN1c3RvbSBwYW5lbHMgdXNlZCB0byBoYXZlIHRvIGRlZmluZSBlbGVtZW50IG9wLXBhbmVsLXtuYW1lfVxuICBjb25zdCB0YWdOYW1lID1cbiAgICBcImh0bWxfdXJsXCIgaW4gcGFuZWxDb25maWdcbiAgICAgID8gYG9wLXBhbmVsLSR7cGFuZWxDb25maWcubmFtZX1gXG4gICAgICA6IHBhbmVsQ29uZmlnLm5hbWU7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufTtcbiIsImltcG9ydCB7IGxvYWRKUywgbG9hZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2xvYWRfcmVzb3VyY2VcIjtcclxuXHJcbi8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGltcG9ydCBldmVyeSBKUy1iYXNlZCBwYW5lbCBvbmNlIChIVE1MIGltcG9ydCBoYXMgdGhpcyBidWlsdC1pbilcclxuY29uc3QgSlNfQ0FDSEUgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ3VzdG9tUGFuZWwgPSAocGFuZWxDb25maWcpOiBQcm9taXNlPHVua25vd24+ID0+IHtcclxuICBpZiAocGFuZWxDb25maWcuaHRtbF91cmwpIHtcclxuICAgIGNvbnN0IHRvTG9hZCA9IFtcclxuICAgICAgaW1wb3J0KFxyXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW1wb3J0LWhyZWYtcG9seWZpbGxcIiAqLyBcIi4uLy4uL3Jlc291cmNlcy9odG1sLWltcG9ydC9pbXBvcnQtaHJlZlwiXHJcbiAgICAgICksXHJcbiAgICBdO1xyXG5cclxuICAgIGlmICghcGFuZWxDb25maWcuZW1iZWRfaWZyYW1lKSB7XHJcbiAgICAgIHRvTG9hZC5wdXNoKFxyXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlZ2FjeS1zdXBwb3J0XCIgKi8gXCIuLi9sZWdhY3ktc3VwcG9ydFwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0b0xvYWQpLnRoZW4oKFt7IGltcG9ydEhyZWZQcm9taXNlIH1dKSA9PlxyXG4gICAgICBpbXBvcnRIcmVmUHJvbWlzZShwYW5lbENvbmZpZy5odG1sX3VybClcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChwYW5lbENvbmZpZy5qc191cmwpIHtcclxuICAgIGlmICghKHBhbmVsQ29uZmlnLmpzX3VybCBpbiBKU19DQUNIRSkpIHtcclxuICAgICAgSlNfQ0FDSEVbcGFuZWxDb25maWcuanNfdXJsXSA9IGxvYWRKUyhwYW5lbENvbmZpZy5qc191cmwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF07XHJcbiAgfVxyXG4gIGlmIChwYW5lbENvbmZpZy5tb2R1bGVfdXJsKSB7XHJcbiAgICByZXR1cm4gbG9hZE1vZHVsZShwYW5lbENvbmZpZy5tb2R1bGVfdXJsKTtcclxuICB9XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiTm8gdmFsaWQgdXJsIGZvdW5kIGluIHBhbmVsIGNvbmZpZy5cIik7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzZXRDdXN0b21QYW5lbFByb3BlcnRpZXMgPSAocm9vdCwgcHJvcGVydGllcykgPT4ge1xuICBpZiAoXCJzZXRQcm9wZXJ0aWVzXCIgaW4gcm9vdCkge1xuICAgIHJvb3Quc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHJvb3Rba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1WEFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSxlQUdBO0FBQ0E7QUFDQTtBQUdBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EsME9BRUE7QUFDQTtBQUdBO0FBQ0EsdVBBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=