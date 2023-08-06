(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-custom"],{

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

/***/ "./src/panels/custom/op-panel-custom.ts":
/*!**********************************************!*\
  !*** ./src/panels/custom/op-panel-custom.ts ***!
  \**********************************************/
/*! exports provided: OpPanelCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPanelCustom", function() { return OpPanelCustom; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/custom-panel/load-custom-panel */ "./src/util/custom-panel/load-custom-panel.ts");
/* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/custom-panel/create-custom-panel-element */ "./src/util/custom-panel/create-custom-panel-element.ts");
/* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/custom-panel/set-custom-panel-properties */ "./src/util/custom-panel/set-custom-panel-properties.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






let OpPanelCustom = _decorate(null, function (_initialize, _UpdatingElement) {
  class OpPanelCustom extends _UpdatingElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpPanelCustom,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "panel",
      value: void 0
    }, {
      kind: "field",
      key: "_setProperties",
      value: void 0
    }, {
      kind: "field",
      key: "navigate",

      value() {
        return (path, replace) => Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, path, replace);
      }

    }, {
      kind: "method",
      key: "registerIframe",
      value: // Since navigate fires events on `window`, we need to expose this as a function
      // to allow custom panels to forward their location changes to the main window
      // instead of their iframe window.
      function registerIframe(initialize, setProperties) {
        initialize(this.panel, {
          opp: this.opp,
          narrow: this.narrow,
          route: this.route
        });
        this._setProperties = setProperties;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpPanelCustom.prototype), "disconnectedCallback", this).call(this);

        this._cleanupPanel();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("panel")) {
          // Clean up old things if we had a panel
          if (changedProps.get("panel")) {
            this._cleanupPanel();
          }

          this._createPanel(this.panel);

          return;
        }

        if (!this._setProperties) {
          return;
        }

        const props = {}; // @ts-ignore

        for (const key of changedProps.keys()) {
          props[key] = this[key];
        }

        this._setProperties(props);
      }
    }, {
      kind: "method",
      key: "_cleanupPanel",
      value: function _cleanupPanel() {
        delete window.customPanel;
        this._setProperties = undefined;

        while (this.lastChild) {
          this.removeChild(this.lastChild);
        }
      }
    }, {
      kind: "method",
      key: "_createPanel",
      value: function _createPanel(panel) {
        const config = panel.config._panel_custom;
        const tempA = document.createElement("a");
        tempA.href = config.html_url || config.js_url || config.module_url || "";

        if (!config.trust_external && !["localhost", "127.0.0.1", location.hostname].includes(tempA.hostname)) {
          if (!confirm(`${this.opp.localize("ui.panel.custom.external_panel.question_trust", "name", config.name, "link", tempA.href)}

           ${this.opp.localize("ui.panel.custom.external_panel.complete_access")}

           (${this.opp.localize("ui.panel.custom.external_panel.hide_message")})`)) {
            return;
          }
        }

        if (!config.embed_iframe) {
          Object(_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_1__["loadCustomPanel"])(config).then(() => {
            const element = Object(_util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_2__["createCustomPanelElement"])(config);

            this._setProperties = props => Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__["setCustomPanelProperties"])(element, props);

            Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_3__["setCustomPanelProperties"])(element, {
              panel,
              opp: this.opp,
              narrow: this.narrow,
              route: this.route
            });
            this.appendChild(element);
          }, () => {
            alert(`Unable to load custom panel from ${tempA.href}`);
          });
          return;
        }

        window.customPanel = this;
        this.innerHTML = `
    <style>
      iframe {
        border: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-color: var(--primary-background-color);
      }
    </style>
    <iframe></iframe>
    `.trim();
        const iframeDoc = this.querySelector("iframe").contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`<!doctype html><script src='${window.customPanelJS}'></script>`);
        iframeDoc.close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);
customElements.define("op-panel-custom", OpPanelCustom);

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY3VzdG9tLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2N1c3RvbS9vcC1wYW5lbC1jdXN0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvbG9hZC1jdXN0b20tcGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2FkIGEgcmVzb3VyY2UgYW5kIGdldCBhIHByb21pc2Ugd2hlbiBsb2FkaW5nIGRvbmUuXG4vLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWxvYWRlclxuXG5jb25zdCBfbG9hZCA9IChcbiAgdGFnOiBcImxpbmtcIiB8IFwic2NyaXB0XCIgfCBcImltZ1wiLFxuICB1cmw6IHN0cmluZyxcbiAgdHlwZT86IFwibW9kdWxlXCJcbikgPT4ge1xuICAvLyBUaGlzIHByb21pc2Ugd2lsbCBiZSB1c2VkIGJ5IFByb21pc2UuYWxsIHRvIGRldGVybWluZSBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGxldCBhdHRyID0gXCJzcmNcIjtcbiAgICBsZXQgcGFyZW50ID0gXCJib2R5XCI7XG5cbiAgICAvLyBJbXBvcnRhbnQgc3VjY2VzcyBhbmQgZXJyb3IgZm9yIHRoZSBwcm9taXNlXG4gICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHVybCk7XG4gICAgZWxlbWVudC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHVybCk7XG5cbiAgICAvLyBOZWVkIHRvIHNldCBkaWZmZXJlbnQgYXR0cmlidXRlcyBkZXBlbmRpbmcgb24gdGFnIHR5cGVcbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSBcInNjcmlwdFwiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuYXN5bmMgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgYXR0ciA9IFwiaHJlZlwiO1xuICAgICAgICBwYXJlbnQgPSBcImhlYWRcIjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgaW50byBkb2N1bWVudCB0byBraWNrIG9mZiBsb2FkaW5nXG4gICAgZWxlbWVudFthdHRyXSA9IHVybDtcbiAgICBkb2N1bWVudFtwYXJlbnRdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ1NTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImxpbmtcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSlMgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEltZyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJpbWdcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkTW9kdWxlID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwsIFwibW9kdWxlXCIpO1xuIiwiaW1wb3J0IHsgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzLCBVcGRhdGluZ0VsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRDdXN0b21QYW5lbCB9IGZyb20gXCIuLi8uLi91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudFwiO1xuaW1wb3J0IHsgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEN1c3RvbVBhbmVsSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhL3BhbmVsX2N1c3RvbVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY3VzdG9tUGFuZWw6IE9wUGFuZWxDdXN0b20gfCB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wUGFuZWxDdXN0b20gZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcGFuZWwhOiBDdXN0b21QYW5lbEluZm87XG4gIHByaXZhdGUgX3NldFByb3BlcnRpZXM/OiAocHJvcHM6IHt9KSA9PiB2b2lkIHwgdW5kZWZpbmVkO1xuXG4gIC8vIFNpbmNlIG5hdmlnYXRlIGZpcmVzIGV2ZW50cyBvbiBgd2luZG93YCwgd2UgbmVlZCB0byBleHBvc2UgdGhpcyBhcyBhIGZ1bmN0aW9uXG4gIC8vIHRvIGFsbG93IGN1c3RvbSBwYW5lbHMgdG8gZm9yd2FyZCB0aGVpciBsb2NhdGlvbiBjaGFuZ2VzIHRvIHRoZSBtYWluIHdpbmRvd1xuICAvLyBpbnN0ZWFkIG9mIHRoZWlyIGlmcmFtZSB3aW5kb3cuXG4gIHB1YmxpYyBuYXZpZ2F0ZSA9IChwYXRoOiBzdHJpbmcsIHJlcGxhY2U/OiBib29sZWFuKSA9PlxuICAgIG5hdmlnYXRlKHRoaXMsIHBhdGgsIHJlcGxhY2UpO1xuXG4gIHB1YmxpYyByZWdpc3RlcklmcmFtZShpbml0aWFsaXplLCBzZXRQcm9wZXJ0aWVzKSB7XG4gICAgaW5pdGlhbGl6ZSh0aGlzLnBhbmVsLCB7XG4gICAgICBvcHA6IHRoaXMub3BwLFxuICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFByb3BlcnRpZXMgPSBzZXRQcm9wZXJ0aWVzO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2xlYW51cFBhbmVsKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJwYW5lbFwiKSkge1xuICAgICAgLy8gQ2xlYW4gdXAgb2xkIHRoaW5ncyBpZiB3ZSBoYWQgYSBwYW5lbFxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoXCJwYW5lbFwiKSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBhbmVsKHRoaXMucGFuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NldFByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgcHJvcHNba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwUGFuZWwoKSB7XG4gICAgZGVsZXRlIHdpbmRvdy5jdXN0b21QYW5lbDtcbiAgICB0aGlzLl9zZXRQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZWwocGFuZWw6IEN1c3RvbVBhbmVsSW5mbykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNvbmZpZyEuX3BhbmVsX2N1c3RvbTtcblxuICAgIGNvbnN0IHRlbXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdGVtcEEuaHJlZiA9IGNvbmZpZy5odG1sX3VybCB8fCBjb25maWcuanNfdXJsIHx8IGNvbmZpZy5tb2R1bGVfdXJsIHx8IFwiXCI7XG5cbiAgICBpZiAoXG4gICAgICAhY29uZmlnLnRydXN0X2V4dGVybmFsICYmXG4gICAgICAhW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCIsIGxvY2F0aW9uLmhvc3RuYW1lXS5pbmNsdWRlcyh0ZW1wQS5ob3N0bmFtZSlcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgYCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmN1c3RvbS5leHRlcm5hbF9wYW5lbC5xdWVzdGlvbl90cnVzdFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBjb25maWcubmFtZSxcbiAgICAgICAgICAgIFwibGlua1wiLFxuICAgICAgICAgICAgdGVtcEEuaHJlZlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICBcInVpLnBhbmVsLmN1c3RvbS5leHRlcm5hbF9wYW5lbC5jb21wbGV0ZV9hY2Nlc3NcIlxuICAgICAgICAgICApfVxuXG4gICAgICAgICAgICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgIFwidWkucGFuZWwuY3VzdG9tLmV4dGVybmFsX3BhbmVsLmhpZGVfbWVzc2FnZVwiXG4gICAgICAgICAgICl9KWBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5lbWJlZF9pZnJhbWUpIHtcbiAgICAgIGxvYWRDdXN0b21QYW5lbChjb25maWcpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50KGNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydGllcyA9IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgICAgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHBhbmVsLFxuICAgICAgICAgICAgb3BwOiB0aGlzLm9wcCxcbiAgICAgICAgICAgIG5hcnJvdzogdGhpcy5uYXJyb3csXG4gICAgICAgICAgICByb3V0ZTogdGhpcy5yb3V0ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoYFVuYWJsZSB0byBsb2FkIGN1c3RvbSBwYW5lbCBmcm9tICR7dGVtcEEuaHJlZn1gKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuY3VzdG9tUGFuZWwgPSB0aGlzO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgIGlmcmFtZSB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8aWZyYW1lPjwvaWZyYW1lPlxuICAgIGAudHJpbSgpO1xuICAgIGNvbnN0IGlmcmFtZURvYyA9IHRoaXMucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKSEuY29udGVudFdpbmRvdyEuZG9jdW1lbnQ7XG4gICAgaWZyYW1lRG9jLm9wZW4oKTtcbiAgICBpZnJhbWVEb2Mud3JpdGUoXG4gICAgICBgPCFkb2N0eXBlIGh0bWw+PHNjcmlwdCBzcmM9JyR7d2luZG93LmN1c3RvbVBhbmVsSlN9Jz48L3NjcmlwdD5gXG4gICAgKTtcbiAgICBpZnJhbWVEb2MuY2xvc2UoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYW5lbC1jdXN0b21cIiwgT3BQYW5lbEN1c3RvbSk7XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50ID0gKHBhbmVsQ29uZmlnKSA9PiB7XG4gIC8vIExlZ2FjeSBzdXBwb3J0LiBDdXN0b20gcGFuZWxzIHVzZWQgdG8gaGF2ZSB0byBkZWZpbmUgZWxlbWVudCBvcC1wYW5lbC17bmFtZX1cbiAgY29uc3QgdGFnTmFtZSA9XG4gICAgXCJodG1sX3VybFwiIGluIHBhbmVsQ29uZmlnXG4gICAgICA/IGBvcC1wYW5lbC0ke3BhbmVsQ29uZmlnLm5hbWV9YFxuICAgICAgOiBwYW5lbENvbmZpZy5uYW1lO1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn07XG4iLCJpbXBvcnQgeyBsb2FkSlMsIGxvYWRNb2R1bGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlXCI7XHJcblxyXG4vLyBNYWtlIHN1cmUgd2Ugb25seSBpbXBvcnQgZXZlcnkgSlMtYmFzZWQgcGFuZWwgb25jZSAoSFRNTCBpbXBvcnQgaGFzIHRoaXMgYnVpbHQtaW4pXHJcbmNvbnN0IEpTX0NBQ0hFID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEN1c3RvbVBhbmVsID0gKHBhbmVsQ29uZmlnKTogUHJvbWlzZTx1bmtub3duPiA9PiB7XHJcbiAgaWYgKHBhbmVsQ29uZmlnLmh0bWxfdXJsKSB7XHJcbiAgICBjb25zdCB0b0xvYWQgPSBbXHJcbiAgICAgIGltcG9ydChcclxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImltcG9ydC1ocmVmLXBvbHlmaWxsXCIgKi8gXCIuLi8uLi9yZXNvdXJjZXMvaHRtbC1pbXBvcnQvaW1wb3J0LWhyZWZcIlxyXG4gICAgICApLFxyXG4gICAgXTtcclxuXHJcbiAgICBpZiAoIXBhbmVsQ29uZmlnLmVtYmVkX2lmcmFtZSkge1xyXG4gICAgICB0b0xvYWQucHVzaChcclxuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsZWdhY3ktc3VwcG9ydFwiICovIFwiLi4vbGVnYWN5LXN1cHBvcnRcIilcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodG9Mb2FkKS50aGVuKChbeyBpbXBvcnRIcmVmUHJvbWlzZSB9XSkgPT5cclxuICAgICAgaW1wb3J0SHJlZlByb21pc2UocGFuZWxDb25maWcuaHRtbF91cmwpXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAocGFuZWxDb25maWcuanNfdXJsKSB7XHJcbiAgICBpZiAoIShwYW5lbENvbmZpZy5qc191cmwgaW4gSlNfQ0FDSEUpKSB7XHJcbiAgICAgIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF0gPSBsb2FkSlMocGFuZWxDb25maWcuanNfdXJsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU19DQUNIRVtwYW5lbENvbmZpZy5qc191cmxdO1xyXG4gIH1cclxuICBpZiAocGFuZWxDb25maWcubW9kdWxlX3VybCkge1xyXG4gICAgcmV0dXJuIGxvYWRNb2R1bGUocGFuZWxDb25maWcubW9kdWxlX3VybCk7XHJcbiAgfVxyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHZhbGlkIHVybCBmb3VuZCBpbiBwYW5lbCBjb25maWcuXCIpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzID0gKHJvb3QsIHByb3BlcnRpZXMpID0+IHtcbiAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIHJvb3QpIHtcbiAgICByb290LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByb290W2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBQUE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN0NBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBQUE7QUFBQTtBQUFBO0FBd0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBU0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBaElBO0FBQUE7QUFBQTtBQW1JQTs7Ozs7Ozs7Ozs7O0FDakpBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EsME9BRUE7QUFDQTtBQUdBO0FBQ0EsdVBBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=