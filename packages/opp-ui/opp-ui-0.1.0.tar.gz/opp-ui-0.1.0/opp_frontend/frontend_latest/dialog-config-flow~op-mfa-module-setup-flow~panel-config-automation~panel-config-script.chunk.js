(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~op-mfa-module-setup-flow~panel-config-automation~panel-config-script"],{

/***/ "./src/common/dom/dynamic-element-directive.ts":
/*!*****************************************************!*\
  !*** ./src/common/dom/dynamic-element-directive.ts ***!
  \*****************************************************/
/*! exports provided: dynamicElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicElement", function() { return dynamicElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");

const dynamicElement = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["directive"])((tag, properties) => part => {
  if (!(part instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["NodePart"])) {
    throw new Error("dynamicContentDirective can only be used in content bindings");
  }

  let element = part.value;

  if (element !== undefined && tag.toUpperCase() === element.tagName) {
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        element[key] = value;
      });
    }

    return;
  }

  element = document.createElement(tag);

  if (properties) {
    Object.entries(properties).forEach(([key, value]) => {
      element[key] = value;
    });
  }

  part.setValue(element);
});

/***/ }),

/***/ "./src/components/op-form/op-form-boolean.ts":
/*!***************************************************!*\
  !*** ./src/components/op-form/op-form-boolean.ts ***!
  \***************************************************/
/*! exports provided: OpFormBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormBoolean", function() { return OpFormBoolean; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
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



 // Not duplicate, is for typing
// tslint:disable-next-line

let OpFormBoolean = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-boolean")], function (_initialize, _LitElement) {
  class OpFormBoolean extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormBoolean,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-checkbox")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-checkbox .checked=${this.data} @change=${this._valueChanged}>
        ${this.label}
      </paper-checkbox>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: ev.target.checked
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      paper-checkbox {
        display: block;
        padding: 22px 0;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-float.ts":
/*!*************************************************!*\
  !*** ./src/components/op-form/op-form-float.ts ***!
  \*************************************************/
/*! exports provided: OpFormFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormFloat", function() { return OpFormFloat; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
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



 // Not duplicate, is for typing
// tslint:disable-next-line

let OpFormFloat = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-float")], function (_initialize, _LitElement) {
  class OpFormFloat extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormFloat,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-input
        .label=${this.label}
        .value=${this._value}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        @value-changed=${this._valueChanged}
      >
        <span suffix="" slot="suffix">${this.suffix}</span>
      </paper-input>
    `;
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.data || 0;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = Number(ev.target.value);

        if (this._value === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-integer.ts":
/*!***************************************************!*\
  !*** ./src/components/op-form/op-form-integer.ts ***!
  \***************************************************/
/*! exports provided: OpFormInteger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormInteger", function() { return OpFormInteger; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _op_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../op-paper-slider */ "./src/components/op-paper-slider.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
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




 // Not duplicate, is for typing
// tslint:disable-next-line

let OpFormInteger = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-integer")], function (_initialize, _LitElement) {
  class OpFormInteger extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormInteger,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-input op-paper-slider")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return "valueMin" in this.schema && "valueMax" in this.schema ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div>
            ${this.label}
            <op-paper-slider
              pin=""
              .value=${this._value}
              .min=${this.schema.valueMin}
              .max=${this.schema.valueMax}
              @value-changed=${this._valueChanged}
            ></op-paper-slider>
          </div>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <paper-input
            type="number"
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.data || 0;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = Number(ev.target.value);

        if (this._value === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-multi_select.ts":
/*!********************************************************!*\
  !*** ./src/components/op-form/op-form-multi_select.ts ***!
  \********************************************************/
/*! exports provided: OpFormMultiSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormMultiSelect", function() { return OpFormMultiSelect; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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









let OpFormMultiSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("op-form-multi_select")], function (_initialize, _LitElement) {
  class OpFormMultiSelect extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormMultiSelect,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_init",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["query"])("paper-menu-button")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const options = Array.isArray(this.schema.options) ? this.schema.options : Object.entries(this.schema.options);
        const data = this.data || [];
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <paper-menu-button horizontal-align="right" vertical-offset="8">
        <div class="dropdown-trigger" slot="dropdown-trigger">
          <paper-ripple></paper-ripple>
          <paper-input
            id="input"
            type="text"
            readonly
            value=${data.map(value => this.schema.options[value] || value).join(", ")}
            label=${this.label}
            input-role="button"
            input-aria-haspopup="listbox"
            autocomplete="off"
          >
            <iron-icon
              icon="paper-dropdown-menu:arrow-drop-down"
              suffix
              slot="suffix"
            ></iron-icon>
          </paper-input>
        </div>
        <paper-listbox
          multi
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selectedValues=${data}
          @selected-items-changed=${this._valueChanged}
          @iron-select=${this._onSelect}
        >
          ${// TS doesn't work with union array types https://github.com/microsoft/TypeScript/issues/36390
        // @ts-ignore
        options.map(item => {
          const value = this._optionValue(item);

          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <paper-icon-item .itemValue=${value}>
                <paper-checkbox
                  .checked=${data.includes(value)}
                  slot="item-icon"
                ></paper-checkbox>
                ${this._optionLabel(item)}
              </paper-icon-item>
            `;
        })}
        </paper-listbox>
      </paper-menu-button>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.updateComplete.then(() => {
          var _ref, _this$shadowRoot, _this$shadowRoot$quer;

          const input = (_ref = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : (_this$shadowRoot$quer = _this$shadowRoot.querySelector("paper-input")) === null || _this$shadowRoot$quer === void 0 ? void 0 : _this$shadowRoot$quer.inputElement) === null || _ref === void 0 ? void 0 : _ref.inputElement;

          if (input) {
            input.style.textOverflow = "ellipsis";
          }
        });
      }
    }, {
      kind: "method",
      key: "_optionValue",
      value: function _optionValue(item) {
        return Array.isArray(item) ? item[0] : item;
      }
    }, {
      kind: "method",
      key: "_optionLabel",
      value: function _optionLabel(item) {
        return Array.isArray(item) ? item[1] || item[0] : item;
      }
    }, {
      kind: "method",
      key: "_onSelect",
      value: function _onSelect(ev) {
        ev.stopPropagation();
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!ev.detail.value || !this._init) {
          // ignore first call because that is the init of the component
          this._init = true;
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "value-changed", {
          value: ev.detail.value.map(element => element.itemValue)
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      paper-menu-button {
        display: block;
        padding: 0;
        --paper-item-icon-width: 34px;
      }
      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;
      }
      paper-input {
        text-overflow: ellipsis;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-positive_time_period_dict.ts":
/*!*********************************************************************!*\
  !*** ./src/components/op-form/op-form-positive_time_period_dict.ts ***!
  \*********************************************************************/
/*! exports provided: OpFormTimePeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormTimePeriod", function() { return OpFormTimePeriod; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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



let OpFormTimePeriod = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-positive_time_period_dict")], function (_initialize, _LitElement) {
  class OpFormTimePeriod extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormTimePeriod,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-time-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-time-input
        .label=${this.label}
        .required=${this.schema.required}
        .autoValidate=${this.schema.required}
        error-message="Required"
        enable-second
        format="24"
        .hour=${this._parseDuration(this._hours)}
        .min=${this._parseDuration(this._minutes)}
        .sec=${this._parseDuration(this._seconds)}
        @hour-changed=${this._hourChanged}
        @min-changed=${this._minChanged}
        @sec-changed=${this._secChanged}
        float-input-labels
        no-hours-limit
        always-float-input-labels
        hour-label="hh"
        min-label="mm"
        sec-label="ss"
      ></paper-time-input>
    `;
      }
    }, {
      kind: "get",
      key: "_hours",
      value: function _hours() {
        return this.data && this.data.hours ? Number(this.data.hours) : 0;
      }
    }, {
      kind: "get",
      key: "_minutes",
      value: function _minutes() {
        return this.data && this.data.minutes ? Number(this.data.minutes) : 0;
      }
    }, {
      kind: "get",
      key: "_seconds",
      value: function _seconds() {
        return this.data && this.data.seconds ? Number(this.data.seconds) : 0;
      }
    }, {
      kind: "method",
      key: "_parseDuration",
      value: function _parseDuration(value) {
        return value.toString().padStart(2, "0");
      }
    }, {
      kind: "method",
      key: "_hourChanged",
      value: function _hourChanged(ev) {
        this._durationChanged(ev, "hours");
      }
    }, {
      kind: "method",
      key: "_minChanged",
      value: function _minChanged(ev) {
        this._durationChanged(ev, "minutes");
      }
    }, {
      kind: "method",
      key: "_secChanged",
      value: function _secChanged(ev) {
        this._durationChanged(ev, "seconds");
      }
    }, {
      kind: "method",
      key: "_durationChanged",
      value: function _durationChanged(ev, unit) {
        let value = Number(ev.detail.value);

        if (value === this[`_${unit}`]) {
          return;
        }

        let hours = this._hours;
        let minutes = this._minutes;

        if (unit === "seconds" && value > 59) {
          minutes = minutes + Math.floor(value / 60);
          value %= 60;
        }

        if (unit === "minutes" && value > 59) {
          hours = hours + Math.floor(value / 60);
          value %= 60;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: Object.assign({
            hours,
            minutes,
            seconds: this._seconds
          }, {
            [unit]: value
          })
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-select.ts":
/*!**************************************************!*\
  !*** ./src/components/op-form/op-form-select.ts ***!
  \**************************************************/
/*! exports provided: OpFormSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormSelect", function() { return OpFormSelect; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
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






let OpFormSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-select")], function (_initialize, _LitElement) {
  class OpFormSelect extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormSelect,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-dropdown-menu")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-dropdown-menu .label=${this.label}>
        <paper-listbox
          slot="dropdown-content"
          attr-for-selected="item-value"
          .selected=${this.data}
          @selected-item-changed=${this._valueChanged}
        >
          ${// TS doesn't work with union array types https://github.com/microsoft/TypeScript/issues/36390
        // @ts-ignore
        this.schema.options.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item .itemValue=${this._optionValue(item)}>
                ${this._optionLabel(item)}
              </paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu>
    `;
      }
    }, {
      kind: "method",
      key: "_optionValue",
      value: function _optionValue(item) {
        return Array.isArray(item) ? item[0] : item;
      }
    }, {
      kind: "method",
      key: "_optionLabel",
      value: function _optionLabel(item) {
        return Array.isArray(item) ? item[1] || item[0] : item;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!ev.detail.value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: ev.detail.value.itemValue
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      paper-dropdown-menu {
        display: block;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form-string.ts":
/*!**************************************************!*\
  !*** ./src/components/op-form/op-form-string.ts ***!
  \**************************************************/
/*! exports provided: OpFormString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpFormString", function() { return OpFormString; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
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




 // Not duplicate, is for typing
// tslint:disable-next-line

let OpFormString = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form-string")], function (_initialize, _LitElement) {
  class OpFormString extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpFormString,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "suffix",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_unmaskedPassword",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("paper-input")],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        if (this._input) {
          this._input.focus();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this.schema.name.includes("password") ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <paper-input
            .type=${this._unmaskedPassword ? "text" : "password"}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            @value-changed=${this._valueChanged}
          >
            <paper-icon-button
              toggles
              .active=${this._unmaskedPassword}
              slot="suffix"
              .icon=${this._unmaskedPassword ? "opp:eye-off" : "opp:eye"}
              id="iconButton"
              title="Click to toggle between masked and clear password"
              @click=${this._toggleUnmaskedPassword}
            >
            </paper-icon-button>
          </paper-input>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <paper-input
            .type=${this._stringType}
            .label=${this.label}
            .value=${this.data}
            .required=${this.schema.required}
            .autoValidate=${this.schema.required}
            error-message="Required"
            @value-changed=${this._valueChanged}
          ></paper-input>
        `;
      }
    }, {
      kind: "method",
      key: "_toggleUnmaskedPassword",
      value: function _toggleUnmaskedPassword(ev) {
        this._unmaskedPassword = ev.target.active;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const value = ev.target.value;

        if (this.data === value) {
          return;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value
        });
      }
    }, {
      kind: "get",
      key: "_stringType",
      value: function _stringType() {
        if (this.schema.format) {
          if (["email", "url"].includes(this.schema.format)) {
            return this.schema.format;
          }

          if (this.schema.format === "fqdnurl") {
            return "url";
          }
        }

        return "text";
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-form/op-form.ts":
/*!*******************************************!*\
  !*** ./src/components/op-form/op-form.ts ***!
  \*******************************************/
/*! exports provided: OpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpForm", function() { return OpForm; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _op_form_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./op-form-string */ "./src/components/op-form/op-form-string.ts");
/* harmony import */ var _op_form_integer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-form-integer */ "./src/components/op-form/op-form-integer.ts");
/* harmony import */ var _op_form_float__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-form-float */ "./src/components/op-form/op-form-float.ts");
/* harmony import */ var _op_form_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./op-form-boolean */ "./src/components/op-form/op-form-boolean.ts");
/* harmony import */ var _op_form_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./op-form-select */ "./src/components/op-form/op-form-select.ts");
/* harmony import */ var _op_form_multi_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op-form-multi_select */ "./src/components/op-form/op-form-multi_select.ts");
/* harmony import */ var _op_form_positive_time_period_dict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op-form-positive_time_period_dict */ "./src/components/op-form/op-form-positive_time_period_dict.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/dynamic-element-directive */ "./src/common/dom/dynamic-element-directive.ts");
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











let OpForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-form")], function (_initialize, _LitElement) {
  class OpForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpForm,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "schema",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeError",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "computeSuffix",
      value: void 0
    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        const input = this.shadowRoot.getElementById("child-form") || this.shadowRoot.querySelector("op-form");

        if (!input) {
          return;
        }

        input.focus();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (Array.isArray(this.schema)) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${this.error && this.error.base ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">
                ${this._computeError(this.error.base, this.schema)}
              </div>
            ` : ""}
        ${this.schema.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <op-form
              .data=${this._getValue(this.data, item)}
              .schema=${item}
              .error=${this._getValue(this.error, item)}
              @value-changed=${this._valueChanged}
              .computeError=${this.computeError}
              .computeLabel=${this.computeLabel}
              .computeSuffix=${this.computeSuffix}
            ></op-form>
          `)}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="error">
              ${this._computeError(this.error, this.schema)}
            </div>
          ` : ""}
      ${Object(_common_dom_dynamic_element_directive__WEBPACK_IMPORTED_MODULE_9__["dynamicElement"])(`op-form-${this.schema.type}`, {
          schema: this.schema,
          data: this.data,
          label: this._computeLabel(this.schema),
          suffix: this._computeSuffix(this.schema),
          id: "child-form"
        })}
    `;
      }
    }, {
      kind: "method",
      key: "_computeLabel",
      value: function _computeLabel(schema) {
        return this.computeLabel ? this.computeLabel(schema) : schema ? schema.name : "";
      }
    }, {
      kind: "method",
      key: "_computeSuffix",
      value: function _computeSuffix(schema) {
        return this.computeSuffix ? this.computeSuffix(schema) : schema && schema.description ? schema.description.suffix : "";
      }
    }, {
      kind: "method",
      key: "_computeError",
      value: function _computeError(error, schema) {
        return this.computeError ? this.computeError(error, schema) : error;
      }
    }, {
      kind: "method",
      key: "_getValue",
      value: function _getValue(obj, item) {
        if (obj) {
          return obj[item.name];
        }

        return null;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        ev.stopPropagation();
        const schema = ev.target.schema;
        const data = this.data;
        data[schema.name] = ev.detail.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "value-changed", {
          value: Object.assign({}, data)
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .error {
        color: var(--error-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/op-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/op-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

const PaperSliderClass = customElements.get("paper-slider");

class OpPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--op-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }

}

customElements.define("op-paper-slider", OpPaperSlider);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fm9wLW1mYS1tb2R1bGUtc2V0dXAtZmxvd35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vZHluYW1pYy1lbGVtZW50LWRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm0tYm9vbGVhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm0tZmxvYXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtZm9ybS9vcC1mb3JtLWludGVnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtZm9ybS9vcC1mb3JtLW11bHRpX3NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm0tcG9zaXRpdmVfdGltZV9wZXJpb2RfZGljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm0tc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWZvcm0vb3AtZm9ybS1zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtZm9ybS9vcC1mb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLXBhcGVyLXNsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaXJlY3RpdmUsIFBhcnQsIE5vZGVQYXJ0IH0gZnJvbSBcImxpdC1odG1sXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHluYW1pY0VsZW1lbnQgPSBkaXJlY3RpdmUoXHJcbiAgKHRhZzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gKHBhcnQ6IFBhcnQpOiB2b2lkID0+IHtcclxuICAgIGlmICghKHBhcnQgaW5zdGFuY2VvZiBOb2RlUGFydCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiZHluYW1pY0NvbnRlbnREaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb250ZW50IGJpbmRpbmdzXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWxlbWVudCA9IHBhcnQudmFsdWUgYXMgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBlbGVtZW50ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgdGFnLnRvVXBwZXJDYXNlKCkgPT09IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lXHJcbiAgICApIHtcclxuICAgICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwYXJ0LnNldFZhbHVlKGVsZW1lbnQpO1xyXG4gIH1cclxuKTtcclxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcXVlcnksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgT3BGb3JtRWxlbWVudCxcbiAgT3BGb3JtQm9vbGVhbkRhdGEsXG4gIE9wRm9ybUJvb2xlYW5TY2hlbWEsXG59IGZyb20gXCIuL29wLWZvcm1cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbi8vIE5vdCBkdXBsaWNhdGUsIGlzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJDaGVja2JveEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1mb3JtLWJvb2xlYW5cIilcbmV4cG9ydCBjbGFzcyBPcEZvcm1Cb29sZWFuIGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIE9wRm9ybUVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NoZW1hITogT3BGb3JtQm9vbGVhblNjaGVtYTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGRhdGEhOiBPcEZvcm1Cb29sZWFuRGF0YTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuICBAcXVlcnkoXCJwYXBlci1jaGVja2JveFwiKSBwcml2YXRlIF9pbnB1dD86IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItY2hlY2tib3ggLmNoZWNrZWQ9JHt0aGlzLmRhdGF9IEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9PlxuICAgICAgICAke3RoaXMubGFiZWx9XG4gICAgICA8L3BhcGVyLWNoZWNrYm94PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogKGV2LnRhcmdldCBhcyBQYXBlckNoZWNrYm94RWxlbWVudCkuY2hlY2tlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWNoZWNrYm94IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIycHggMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1mb3JtLWJvb2xlYW5cIjogT3BGb3JtQm9vbGVhbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBxdWVyeSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcEZvcm1FbGVtZW50LCBPcEZvcm1GbG9hdERhdGEsIE9wRm9ybUZsb2F0U2NoZW1hIH0gZnJvbSBcIi4vb3AtZm9ybVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgaXMgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWZvcm0tZmxvYXRcIilcbmV4cG9ydCBjbGFzcyBPcEZvcm1GbG9hdCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBPcEZvcm1FbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjaGVtYSE6IE9wRm9ybUZsb2F0U2NoZW1hO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGF0YSE6IE9wRm9ybUZsb2F0RGF0YTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuICBAcXVlcnkoXCJwYXBlci1pbnB1dFwiKSBwcml2YXRlIF9pbnB1dD86IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbH1cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgIC5yZXF1aXJlZD0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICAuYXV0b1ZhbGlkYXRlPSR7dGhpcy5zY2hlbWEucmVxdWlyZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBzdWZmaXg9XCJcIiBzbG90PVwic3VmZml4XCI+JHt0aGlzLnN1ZmZpeH08L3NwYW4+XG4gICAgICA8L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSB8fCAwO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKChldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgdmFsdWUsXG4gICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWZvcm0tZmxvYXRcIjogT3BGb3JtRmxvYXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcXVlcnksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgT3BGb3JtRWxlbWVudCxcbiAgT3BGb3JtSW50ZWdlckRhdGEsXG4gIE9wRm9ybUludGVnZXJTY2hlbWEsXG59IGZyb20gXCIuL29wLWZvcm1cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW1wb3J0IFwiLi4vb3AtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgaXMgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgUGFwZXJTbGlkZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXJcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1mb3JtLWludGVnZXJcIilcbmV4cG9ydCBjbGFzcyBPcEZvcm1JbnRlZ2VyIGV4dGVuZHMgTGl0RWxlbWVudCBpbXBsZW1lbnRzIE9wRm9ybUVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NoZW1hITogT3BGb3JtSW50ZWdlclNjaGVtYTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGRhdGEhOiBPcEZvcm1JbnRlZ2VyRGF0YTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuICBAcXVlcnkoXCJwYXBlci1pbnB1dCBvcC1wYXBlci1zbGlkZXJcIikgcHJpdmF0ZSBfaW5wdXQ/OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBcInZhbHVlTWluXCIgaW4gdGhpcy5zY2hlbWEgJiYgXCJ2YWx1ZU1heFwiIGluIHRoaXMuc2NoZW1hXG4gICAgICA/IGh0bWxgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICR7dGhpcy5sYWJlbH1cbiAgICAgICAgICAgIDxvcC1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgICAgcGluPVwiXCJcbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgICAgIC5taW49JHt0aGlzLnNjaGVtYS52YWx1ZU1pbn1cbiAgICAgICAgICAgICAgLm1heD0ke3RoaXMuc2NoZW1hLnZhbHVlTWF4fVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgID48L29wLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgOiBodG1sYFxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsfVxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5kYXRhfVxuICAgICAgICAgICAgLnJlcXVpcmVkPSR7dGhpcy5zY2hlbWEucmVxdWlyZWR9XG4gICAgICAgICAgICAuYXV0b1ZhbGlkYXRlPSR7dGhpcy5zY2hlbWEucmVxdWlyZWR9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhIHx8IDA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoXG4gICAgICAoZXYudGFyZ2V0IGFzIFBhcGVySW5wdXRFbGVtZW50IHwgUGFwZXJTbGlkZXJFbGVtZW50KS52YWx1ZVxuICAgICk7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1mb3JtLWludGVnZXJcIjogT3BGb3JtSW50ZWdlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZVwiO1xuaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgT3BGb3JtRWxlbWVudCxcbiAgT3BGb3JtTXVsdGlTZWxlY3REYXRhLFxuICBPcEZvcm1NdWx0aVNlbGVjdFNjaGVtYSxcbn0gZnJvbSBcIi4vb3AtZm9ybVwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWZvcm0tbXVsdGlfc2VsZWN0XCIpXG5leHBvcnQgY2xhc3MgT3BGb3JtTXVsdGlTZWxlY3QgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgT3BGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBPcEZvcm1NdWx0aVNlbGVjdFNjaGVtYTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGRhdGEhOiBPcEZvcm1NdWx0aVNlbGVjdERhdGE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHN1ZmZpeCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaW5pdCA9IGZhbHNlO1xuICBAcXVlcnkoXCJwYXBlci1tZW51LWJ1dHRvblwiKSBwcml2YXRlIF9pbnB1dD86IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkodGhpcy5zY2hlbWEub3B0aW9ucylcbiAgICAgID8gdGhpcy5zY2hlbWEub3B0aW9uc1xuICAgICAgOiBPYmplY3QuZW50cmllcyh0aGlzLnNjaGVtYS5vcHRpb25zISk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhIHx8IFtdO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiIHZlcnRpY2FsLW9mZnNldD1cIjhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIiBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgICAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBpZD1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICB2YWx1ZT0ke2RhdGFcbiAgICAgICAgICAgICAgLm1hcCgodmFsdWUpID0+IHRoaXMuc2NoZW1hLm9wdGlvbnMhW3ZhbHVlXSB8fCB2YWx1ZSlcbiAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5sYWJlbH1cbiAgICAgICAgICAgIGlucHV0LXJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaW5wdXQtYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aXJvbi1pY29uXG4gICAgICAgICAgICAgIGljb249XCJwYXBlci1kcm9wZG93bi1tZW51OmFycm93LWRyb3AtZG93blwiXG4gICAgICAgICAgICAgIHN1ZmZpeFxuICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgID48L2lyb24taWNvbj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICBtdWx0aVxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tdmFsdWVcIlxuICAgICAgICAgIC5zZWxlY3RlZFZhbHVlcz0ke2RhdGF9XG4gICAgICAgICAgQHNlbGVjdGVkLWl0ZW1zLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fb25TZWxlY3R9XG4gICAgICAgID5cbiAgICAgICAgICAkey8vIFRTIGRvZXNuJ3Qgd29yayB3aXRoIHVuaW9uIGFycmF5IHR5cGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzYzOTBcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgb3B0aW9ucy5tYXAoKGl0ZW06IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fb3B0aW9uVmFsdWUoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSAuaXRlbVZhbHVlPSR7dmFsdWV9PlxuICAgICAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtkYXRhLmluY2x1ZGVzKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICR7dGhpcy5fb3B0aW9uTGFiZWwoaXRlbSl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSAodGhpcy5zaGFkb3dSb290Py5xdWVyeVNlbGVjdG9yKFwicGFwZXItaW5wdXRcIilcbiAgICAgICAgPy5pbnB1dEVsZW1lbnQgYXMgYW55KT8uaW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnN0eWxlLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvblZhbHVlKGl0ZW06IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uTGFiZWwoaXRlbTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVsxXSB8fCBpdGVtWzBdIDogaXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2VsZWN0KGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlIHx8ICF0aGlzLl9pbml0KSB7XG4gICAgICAvLyBpZ25vcmUgZmlyc3QgY2FsbCBiZWNhdXNlIHRoYXQgaXMgdGhlIGluaXQgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KFxuICAgICAgdGhpcyxcbiAgICAgIFwidmFsdWUtY2hhbmdlZFwiLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogZXYuZGV0YWlsLnZhbHVlLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5pdGVtVmFsdWUpLFxuICAgICAgfSxcbiAgICAgIHsgYnViYmxlczogZmFsc2UgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aDogMzRweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtZm9ybS1tdWx0aV9zZWxlY3RcIjogT3BGb3JtTXVsdGlTZWxlY3Q7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcXVlcnksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BGb3JtRWxlbWVudCwgT3BGb3JtVGltZURhdGEsIE9wRm9ybVRpbWVTY2hlbWEgfSBmcm9tIFwiLi9vcC1mb3JtXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3AtZm9ybS1wb3NpdGl2ZV90aW1lX3BlcmlvZF9kaWN0XCIpXG5leHBvcnQgY2xhc3MgT3BGb3JtVGltZVBlcmlvZCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBPcEZvcm1FbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjaGVtYSE6IE9wRm9ybVRpbWVTY2hlbWE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogT3BGb3JtVGltZURhdGE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHN1ZmZpeCE6IHN0cmluZztcbiAgQHF1ZXJ5KFwicGFwZXItdGltZS1pbnB1dFwiKSBwcml2YXRlIF9pbnB1dD86IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5faW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItdGltZS1pbnB1dFxuICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsfVxuICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgLmF1dG9WYWxpZGF0ZT0ke3RoaXMuc2NoZW1hLnJlcXVpcmVkfVxuICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICBlbmFibGUtc2Vjb25kXG4gICAgICAgIGZvcm1hdD1cIjI0XCJcbiAgICAgICAgLmhvdXI9JHt0aGlzLl9wYXJzZUR1cmF0aW9uKHRoaXMuX2hvdXJzKX1cbiAgICAgICAgLm1pbj0ke3RoaXMuX3BhcnNlRHVyYXRpb24odGhpcy5fbWludXRlcyl9XG4gICAgICAgIC5zZWM9JHt0aGlzLl9wYXJzZUR1cmF0aW9uKHRoaXMuX3NlY29uZHMpfVxuICAgICAgICBAaG91ci1jaGFuZ2VkPSR7dGhpcy5faG91ckNoYW5nZWR9XG4gICAgICAgIEBtaW4tY2hhbmdlZD0ke3RoaXMuX21pbkNoYW5nZWR9XG4gICAgICAgIEBzZWMtY2hhbmdlZD0ke3RoaXMuX3NlY0NoYW5nZWR9XG4gICAgICAgIGZsb2F0LWlucHV0LWxhYmVsc1xuICAgICAgICBuby1ob3Vycy1saW1pdFxuICAgICAgICBhbHdheXMtZmxvYXQtaW5wdXQtbGFiZWxzXG4gICAgICAgIGhvdXItbGFiZWw9XCJoaFwiXG4gICAgICAgIG1pbi1sYWJlbD1cIm1tXCJcbiAgICAgICAgc2VjLWxhYmVsPVwic3NcIlxuICAgICAgPjwvcGFwZXItdGltZS1pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2hvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmhvdXJzID8gTnVtYmVyKHRoaXMuZGF0YS5ob3VycykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubWludXRlcyA/IE51bWJlcih0aGlzLmRhdGEubWludXRlcykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuc2Vjb25kcyA/IE51bWJlcih0aGlzLmRhdGEuc2Vjb25kcykgOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VEdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hvdXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5fZHVyYXRpb25DaGFuZ2VkKGV2LCBcImhvdXJzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWluQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2R1cmF0aW9uQ2hhbmdlZChldiwgXCJtaW51dGVzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VjQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2R1cmF0aW9uQ2hhbmdlZChldiwgXCJzZWNvbmRzXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZHVyYXRpb25DaGFuZ2VkKGV2LCB1bml0KSB7XG4gICAgbGV0IHZhbHVlID0gTnVtYmVyKGV2LmRldGFpbC52YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUgPT09IHRoaXNbYF8ke3VuaXR9YF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaG91cnMgPSB0aGlzLl9ob3VycztcbiAgICBsZXQgbWludXRlcyA9IHRoaXMuX21pbnV0ZXM7XG5cbiAgICBpZiAodW5pdCA9PT0gXCJzZWNvbmRzXCIgJiYgdmFsdWUgPiA1OSkge1xuICAgICAgbWludXRlcyA9IG1pbnV0ZXMgKyBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xuICAgICAgdmFsdWUgJT0gNjA7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQgPT09IFwibWludXRlc1wiICYmIHZhbHVlID4gNTkpIHtcbiAgICAgIGhvdXJzID0gaG91cnMgKyBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xuICAgICAgdmFsdWUgJT0gNjA7XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBob3VycyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgc2Vjb25kczogdGhpcy5fc2Vjb25kcyxcbiAgICAgICAgLi4ueyBbdW5pdF06IHZhbHVlIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1mb3JtLXBvc2l0aXZlX3RpbWVfcGVyaW9kX2RpY3RcIjogT3BGb3JtVGltZVBlcmlvZDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBxdWVyeSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BGb3JtRWxlbWVudCwgT3BGb3JtU2VsZWN0RGF0YSwgT3BGb3JtU2VsZWN0U2NoZW1hIH0gZnJvbSBcIi4vb3AtZm9ybVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3AtZm9ybS1zZWxlY3RcIilcbmV4cG9ydCBjbGFzcyBPcEZvcm1TZWxlY3QgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgT3BGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBPcEZvcm1TZWxlY3RTY2hlbWE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogT3BGb3JtU2VsZWN0RGF0YTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuICBAcXVlcnkoXCJwYXBlci1kcm9wZG93bi1tZW51XCIpIHByaXZhdGUgX2lucHV0PzogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IC5sYWJlbD0ke3RoaXMubGFiZWx9PlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tdmFsdWVcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuZGF0YX1cbiAgICAgICAgICBAc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgJHsvLyBUUyBkb2Vzbid0IHdvcmsgd2l0aCB1bmlvbiBhcnJheSB0eXBlcyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM2MzkwXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXMuc2NoZW1hLm9wdGlvbnMhLm1hcChcbiAgICAgICAgICAgIChpdGVtOiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSAuaXRlbVZhbHVlPSR7dGhpcy5fb3B0aW9uVmFsdWUoaXRlbSl9PlxuICAgICAgICAgICAgICAgICR7dGhpcy5fb3B0aW9uTGFiZWwoaXRlbSl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvblZhbHVlKGl0ZW06IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uTGFiZWwoaXRlbTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVsxXSB8fCBpdGVtWzBdIDogaXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBldi5kZXRhaWwudmFsdWUuaXRlbVZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWZvcm0tc2VsZWN0XCI6IE9wRm9ybVNlbGVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBxdWVyeSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IE9wRm9ybUVsZW1lbnQsIE9wRm9ybVN0cmluZ0RhdGEsIE9wRm9ybVN0cmluZ1NjaGVtYSB9IGZyb20gXCIuL29wLWZvcm1cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCBpcyBmb3IgdHlwaW5nXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3AtZm9ybS1zdHJpbmdcIilcbmV4cG9ydCBjbGFzcyBPcEZvcm1TdHJpbmcgZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgT3BGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBPcEZvcm1TdHJpbmdTY2hlbWE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogT3BGb3JtU3RyaW5nRGF0YTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3VmZml4ITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bm1hc2tlZFBhc3N3b3JkID0gZmFsc2U7XG4gIEBxdWVyeShcInBhcGVyLWlucHV0XCIpIHByaXZhdGUgX2lucHV0PzogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEubmFtZS5pbmNsdWRlcyhcInBhc3N3b3JkXCIpXG4gICAgICA/IGh0bWxgXG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAudHlwZT0ke3RoaXMuX3VubWFza2VkUGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLmRhdGF9XG4gICAgICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIC5hdXRvVmFsaWRhdGU9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICB0b2dnbGVzXG4gICAgICAgICAgICAgIC5hY3RpdmU9JHt0aGlzLl91bm1hc2tlZFBhc3N3b3JkfVxuICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgLmljb249JHt0aGlzLl91bm1hc2tlZFBhc3N3b3JkID8gXCJvcHA6ZXllLW9mZlwiIDogXCJvcHA6ZXllXCJ9XG4gICAgICAgICAgICAgIGlkPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gdG9nZ2xlIGJldHdlZW4gbWFza2VkIGFuZCBjbGVhciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3RvZ2dsZVVubWFza2VkUGFzc3dvcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIGBcbiAgICAgIDogaHRtbGBcbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC50eXBlPSR7dGhpcy5fc3RyaW5nVHlwZX1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWx9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLmRhdGF9XG4gICAgICAgICAgICAucmVxdWlyZWQ9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIC5hdXRvVmFsaWRhdGU9JHt0aGlzLnNjaGVtYS5yZXF1aXJlZH1cbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZVVubWFza2VkUGFzc3dvcmQoZXY6IEV2ZW50KSB7XG4gICAgdGhpcy5fdW5tYXNrZWRQYXNzd29yZCA9IChldi50YXJnZXQgYXMgYW55KS5hY3RpdmU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXYudGFyZ2V0IGFzIFBhcGVySW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBpZiAodGhpcy5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3N0cmluZ1R5cGUoKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdCkge1xuICAgICAgaWYgKFtcImVtYWlsXCIsIFwidXJsXCJdLmluY2x1ZGVzKHRoaXMuc2NoZW1hLmZvcm1hdCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjaGVtYS5mb3JtYXQgPT09IFwiZnFkbnVybFwiKSB7XG4gICAgICAgIHJldHVybiBcInVybFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWZvcm0tc3RyaW5nXCI6IE9wRm9ybVN0cmluZztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9vcC1mb3JtLXN0cmluZ1wiO1xuaW1wb3J0IFwiLi9vcC1mb3JtLWludGVnZXJcIjtcbmltcG9ydCBcIi4vb3AtZm9ybS1mbG9hdFwiO1xuaW1wb3J0IFwiLi9vcC1mb3JtLWJvb2xlYW5cIjtcbmltcG9ydCBcIi4vb3AtZm9ybS1zZWxlY3RcIjtcbmltcG9ydCBcIi4vb3AtZm9ybS1tdWx0aV9zZWxlY3RcIjtcbmltcG9ydCBcIi4vb3AtZm9ybS1wb3NpdGl2ZV90aW1lX3BlcmlvZF9kaWN0XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBkeW5hbWljRWxlbWVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2R5bmFtaWMtZWxlbWVudC1kaXJlY3RpdmVcIjtcblxuZXhwb3J0IHR5cGUgT3BGb3JtU2NoZW1hID1cbiAgfCBPcEZvcm1TdHJpbmdTY2hlbWFcbiAgfCBPcEZvcm1JbnRlZ2VyU2NoZW1hXG4gIHwgT3BGb3JtRmxvYXRTY2hlbWFcbiAgfCBPcEZvcm1Cb29sZWFuU2NoZW1hXG4gIHwgT3BGb3JtU2VsZWN0U2NoZW1hXG4gIHwgT3BGb3JtTXVsdGlTZWxlY3RTY2hlbWFcbiAgfCBPcEZvcm1UaW1lU2NoZW1hO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybUJhc2VTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlZmF1bHQ/OiBPcEZvcm1EYXRhO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIG9wdGlvbmFsPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiB7IHN1ZmZpeD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybUludGVnZXJTY2hlbWEgZXh0ZW5kcyBPcEZvcm1CYXNlU2NoZW1hIHtcbiAgdHlwZTogXCJpbnRlZ2VyXCI7XG4gIGRlZmF1bHQ/OiBPcEZvcm1JbnRlZ2VyRGF0YTtcbiAgdmFsdWVNaW4/OiBudW1iZXI7XG4gIHZhbHVlTWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybVNlbGVjdFNjaGVtYSBleHRlbmRzIE9wRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcInNlbGVjdFwiO1xuICBvcHRpb25zPzogc3RyaW5nW10gfCBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcEZvcm1NdWx0aVNlbGVjdFNjaGVtYSBleHRlbmRzIE9wRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcIm11bHRpX3NlbGVjdFwiO1xuICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IHN0cmluZ1tdIHwgQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BGb3JtRmxvYXRTY2hlbWEgZXh0ZW5kcyBPcEZvcm1CYXNlU2NoZW1hIHtcbiAgdHlwZTogXCJmbG9hdFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybVN0cmluZ1NjaGVtYSBleHRlbmRzIE9wRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcInN0cmluZ1wiO1xuICBmb3JtYXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BGb3JtQm9vbGVhblNjaGVtYSBleHRlbmRzIE9wRm9ybUJhc2VTY2hlbWEge1xuICB0eXBlOiBcImJvb2xlYW5cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcEZvcm1UaW1lU2NoZW1hIGV4dGVuZHMgT3BGb3JtQmFzZVNjaGVtYSB7XG4gIHR5cGU6IFwidGltZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybURhdGFDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBPcEZvcm1EYXRhO1xufVxuXG5leHBvcnQgdHlwZSBPcEZvcm1EYXRhID1cbiAgfCBPcEZvcm1TdHJpbmdEYXRhXG4gIHwgT3BGb3JtSW50ZWdlckRhdGFcbiAgfCBPcEZvcm1GbG9hdERhdGFcbiAgfCBPcEZvcm1Cb29sZWFuRGF0YVxuICB8IE9wRm9ybVNlbGVjdERhdGFcbiAgfCBPcEZvcm1NdWx0aVNlbGVjdERhdGFcbiAgfCBPcEZvcm1UaW1lRGF0YTtcblxuZXhwb3J0IHR5cGUgT3BGb3JtU3RyaW5nRGF0YSA9IHN0cmluZztcbmV4cG9ydCB0eXBlIE9wRm9ybUludGVnZXJEYXRhID0gbnVtYmVyO1xuZXhwb3J0IHR5cGUgT3BGb3JtRmxvYXREYXRhID0gbnVtYmVyO1xuZXhwb3J0IHR5cGUgT3BGb3JtQm9vbGVhbkRhdGEgPSBib29sZWFuO1xuZXhwb3J0IHR5cGUgT3BGb3JtU2VsZWN0RGF0YSA9IHN0cmluZztcbmV4cG9ydCB0eXBlIE9wRm9ybU11bHRpU2VsZWN0RGF0YSA9IHN0cmluZ1tdO1xuZXhwb3J0IGludGVyZmFjZSBPcEZvcm1UaW1lRGF0YSB7XG4gIGhvdXJzPzogbnVtYmVyO1xuICBtaW51dGVzPzogbnVtYmVyO1xuICBzZWNvbmRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wRm9ybUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc2NoZW1hOiBPcEZvcm1TY2hlbWE7XG4gIGRhdGE6IE9wRm9ybURhdGFDb250YWluZXIgfCBPcEZvcm1EYXRhO1xuICBsYWJlbD86IHN0cmluZztcbiAgc3VmZml4Pzogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcIm9wLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBPcEZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IGltcGxlbWVudHMgT3BGb3JtRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkYXRhITogT3BGb3JtRGF0YUNvbnRhaW5lciB8IE9wRm9ybURhdGE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzY2hlbWEhOiBPcEZvcm1TY2hlbWE7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlcnJvcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbXB1dGVFcnJvcj86IChzY2hlbWE6IE9wRm9ybVNjaGVtYSwgZXJyb3IpID0+IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbXB1dGVMYWJlbD86IChzY2hlbWE6IE9wRm9ybVNjaGVtYSkgPT4gc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29tcHV0ZVN1ZmZpeD86IChzY2hlbWE6IE9wRm9ybVNjaGVtYSkgPT4gc3RyaW5nO1xuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBjb25zdCBpbnB1dCA9XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFwiY2hpbGQtZm9ybVwiKSB8fFxuICAgICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwib3AtZm9ybVwiKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChpbnB1dCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zY2hlbWEpKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgJHt0aGlzLmVycm9yICYmIHRoaXMuZXJyb3IuYmFzZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlRXJyb3IodGhpcy5lcnJvci5iYXNlLCB0aGlzLnNjaGVtYSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHt0aGlzLnNjaGVtYS5tYXAoXG4gICAgICAgICAgKGl0ZW0pID0+IGh0bWxgXG4gICAgICAgICAgICA8b3AtZm9ybVxuICAgICAgICAgICAgICAuZGF0YT0ke3RoaXMuX2dldFZhbHVlKHRoaXMuZGF0YSwgaXRlbSl9XG4gICAgICAgICAgICAgIC5zY2hlbWE9JHtpdGVtfVxuICAgICAgICAgICAgICAuZXJyb3I9JHt0aGlzLl9nZXRWYWx1ZSh0aGlzLmVycm9yLCBpdGVtKX1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICAgIC5jb21wdXRlRXJyb3I9JHt0aGlzLmNvbXB1dGVFcnJvcn1cbiAgICAgICAgICAgICAgLmNvbXB1dGVMYWJlbD0ke3RoaXMuY29tcHV0ZUxhYmVsfVxuICAgICAgICAgICAgICAuY29tcHV0ZVN1ZmZpeD0ke3RoaXMuY29tcHV0ZVN1ZmZpeH1cbiAgICAgICAgICAgID48L29wLWZvcm0+XG4gICAgICAgICAgYFxuICAgICAgICApfVxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5lcnJvclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlRXJyb3IodGhpcy5lcnJvciwgdGhpcy5zY2hlbWEpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke2R5bmFtaWNFbGVtZW50KGBvcC1mb3JtLSR7dGhpcy5zY2hlbWEudHlwZX1gLCB7XG4gICAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWEsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgbGFiZWw6IHRoaXMuX2NvbXB1dGVMYWJlbCh0aGlzLnNjaGVtYSksXG4gICAgICAgIHN1ZmZpeDogdGhpcy5fY29tcHV0ZVN1ZmZpeCh0aGlzLnNjaGVtYSksXG4gICAgICAgIGlkOiBcImNoaWxkLWZvcm1cIixcbiAgICAgIH0pfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlTGFiZWwoc2NoZW1hOiBPcEZvcm1TY2hlbWEpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlTGFiZWxcbiAgICAgID8gdGhpcy5jb21wdXRlTGFiZWwoc2NoZW1hKVxuICAgICAgOiBzY2hlbWFcbiAgICAgID8gc2NoZW1hLm5hbWVcbiAgICAgIDogXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVTdWZmaXgoc2NoZW1hOiBPcEZvcm1TY2hlbWEpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlU3VmZml4XG4gICAgICA/IHRoaXMuY29tcHV0ZVN1ZmZpeChzY2hlbWEpXG4gICAgICA6IHNjaGVtYSAmJiBzY2hlbWEuZGVzY3JpcHRpb25cbiAgICAgID8gc2NoZW1hLmRlc2NyaXB0aW9uLnN1ZmZpeFxuICAgICAgOiBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUVycm9yKGVycm9yLCBzY2hlbWE6IE9wRm9ybVNjaGVtYSkge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVFcnJvciA/IHRoaXMuY29tcHV0ZUVycm9yKGVycm9yLCBzY2hlbWEpIDogZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIF9nZXRWYWx1ZShvYmosIGl0ZW0pIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqW2l0ZW0ubmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNjaGVtYSA9IChldi50YXJnZXQgYXMgT3BGb3JtRWxlbWVudCkuc2NoZW1hO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEgYXMgT3BGb3JtRGF0YUNvbnRhaW5lcjtcbiAgICBkYXRhW3NjaGVtYS5uYW1lXSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiB7IC4uLmRhdGEgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtZm9ybVwiOiBPcEZvcm07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAcG9seW1lclxyXG4gKiBAY3VzdG9tRWxlbWVudFxyXG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxyXG4gKi9cclxuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcclxuXHJcbmNsYXNzIE9wUGFwZXJTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcclxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gICAgdHBsLmlubmVySFRNTCA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcclxuICAgICAgICBmb250LXNpemU6ICB2YXIoLS1vcC1wYXBlci1zbGlkZXItcGluLWZvbnQtc2l6ZSwgMTBweCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuXHJcbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMi4yZW07XHJcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcclxuXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogdW5zZXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB1bnNldDtcclxuXHJcbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEuMWVtO1xyXG4gICAgICAgIHdpZHRoOiAyLjJlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuMWVtO1xyXG5cclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICBgO1xyXG4gICAgdHBsLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbiAgICByZXR1cm4gdHBsO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1zbGlkZXJcIiwgT3BQYXBlclNsaWRlcik7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBZUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTs7QUFGQTtBQUtBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUFEQTtBQUdBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7Ozs7O0FBQUE7QUFNQTtBQWxDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFTQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBY0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFSQTtBQVdBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUF2Q0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQWNBOztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVEE7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCQTtBQXVCQTtBQXJDQTtBQUFBO0FBQUE7QUFBQTtBQXdDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQUFBO0FBNENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBckRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBSUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBTkE7QUFTQTs7O0FBNUNBO0FBZ0RBO0FBcEVBO0FBQUE7QUFBQTtBQUFBO0FBdUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUVBO0FBQUE7QUFBQTtBQUFBO0FBaUZBO0FBQ0E7QUFsRkE7QUFBQTtBQUFBO0FBQUE7QUFxRkE7QUFDQTtBQXRGQTtBQUFBO0FBQUE7QUFBQTtBQXlGQTtBQUNBO0FBMUZBO0FBQUE7QUFBQTtBQUFBO0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQTNHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEdBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQTlIQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQVNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFjQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBYkE7QUFzQkE7QUFwQ0E7QUFBQTtBQUFBO0FBQUE7QUF1Q0E7QUFDQTtBQXhDQTtBQUFBO0FBQUE7QUFBQTtBQTJDQTtBQUNBO0FBNUNBO0FBQUE7QUFBQTtBQUFBO0FBK0NBO0FBQ0E7QUFoREE7QUFBQTtBQUFBO0FBQUE7QUFtREE7QUFDQTtBQXBEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBeERBO0FBQUE7QUFBQTtBQUFBO0FBMkRBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBQUE7QUErREE7QUFDQTtBQWhFQTtBQUFBO0FBQUE7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFMQTtBQVFBO0FBOUZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFIQTs7O0FBVkE7QUFvQkE7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTtBQUNBO0FBMUNBO0FBQUE7QUFBQTtBQUFBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNEQTs7OztBQUFBO0FBS0E7QUEzREE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQVVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQWVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7OztBQWpCQTs7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUE5QkE7QUFpQ0E7QUFoREE7QUFBQTtBQUFBO0FBQUE7QUFtREE7QUFDQTtBQXBEQTtBQUFBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQTlEQTtBQUFBO0FBQUE7QUFBQTtBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNGQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUNBOztBQUdBOztBQUhBO0FBT0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7QUFSQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUkE7QUFnQkE7QUE1REE7QUFBQTtBQUFBO0FBQUE7QUErREE7QUFLQTtBQXBFQTtBQUFBO0FBQUE7QUFBQTtBQXVFQTtBQUtBO0FBNUVBO0FBQUE7QUFBQTtBQUFBO0FBK0VBO0FBQ0E7QUFoRkE7QUFBQTtBQUFBO0FBQUE7QUFtRkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkZBO0FBQUE7QUFBQTtBQUFBO0FBMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFqR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9HQTs7OztBQUFBO0FBS0E7QUF6R0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBNURBO0FBQ0E7QUE0REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==