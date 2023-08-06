(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-suggest-card"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




class RippleBase extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.interactionNode = this;
  }

  connectedCallback() {
    if (this.interactionNode === this) {
      const parent = this.parentNode;

      if (parent instanceof HTMLElement) {
        this.interactionNode = parent;
      } else if (parent instanceof ShadowRoot && parent.host instanceof HTMLElement) {
        this.interactionNode = parent.host;
      }
    }

    super.connectedCallback();
  } // TODO(sorvell) #css: sizing.


  render() {
    const classes = {
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--accent': this.accent
    };
    const {
      disabled,
      unbounded,
      active,
      interactionNode
    } = this;
    const rippleOptions = {
      disabled,
      unbounded,
      interactionNode
    };

    if (active !== undefined) {
      rippleOptions.active = active;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"></div>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./src/common/dom/toggle_attribute.ts":
/*!********************************************!*\
  !*** ./src/common/dom/toggle_attribute.ts ***!
  \********************************************/
/*! exports provided: toggleAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAttribute", function() { return toggleAttribute; });
// Toggle Attribute Polyfill because it's too new for some browsers
const toggleAttribute = (el, name, force) => {
  if (force !== undefined) {
    force = !!force;
  }

  if (el.hasAttribute(name)) {
    if (force) {
      return true;
    }

    el.removeAttribute(name);
    return false;
  }

  if (force === false) {
    return false;
  }

  el.setAttribute(name, "");
  return true;
};

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/hui-dialog-suggest-card.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/hui-dialog-suggest-card.ts ***!
  \*************************************************************************/
/*! exports provided: HuiDialogSuggestCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogSuggestCard", function() { return HuiDialogSuggestCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-freeze */ "./node_modules/deep-freeze/index.js");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hui_card_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-card-editor */ "./src/panels/devcon/editor/card-editor/hui-card-editor.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/devcon/editor/card-editor/hui-card-preview.ts");
/* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hui-card-picker */ "./src/panels/devcon/editor/card-editor/hui-card-picker.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-util */ "./src/panels/devcon/editor/config-util.ts");
/* harmony import */ var _components_op_yaml_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/op-yaml-editor */ "./src/components/op-yaml-editor.ts");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-edit-card-dialog */ "./src/panels/devcon/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_generate_devcon_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/generate-devcon-config */ "./src/panels/devcon/common/generate-devcon-config.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
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












 // tslint:disable-next-line

let HuiDialogSuggestCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-suggest-card")], function (_initialize, _LitElement) {
  class HuiDialogSuggestCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogSuggestCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_saving",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_yamlMode",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("op-paper-dialog")],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("op-yaml-editor")],
      key: "_yamlEditor",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        var _ref, _this$opp$panels$devc;

        this._params = params;
        this._yamlMode = ((_ref = (_this$opp$panels$devc = this.opp.panels.devcon) === null || _this$opp$panels$devc === void 0 ? void 0 : _this$opp$panels$devc.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml";
        this._cardConfig = params.cardConfig || Object(_common_generate_devcon_config__WEBPACK_IMPORTED_MODULE_10__["computeCards"])(params.entities.map(entityId => [entityId, this.opp.states[entityId]]), {}, true);

        if (!Object.isFrozen(this._cardConfig)) {
          this._cardConfig = deep_freeze__WEBPACK_IMPORTED_MODULE_1___default()(this._cardConfig);
        }

        if (this._dialog) {
          this._dialog.open();
        }

        if (this._yamlEditor) {
          this._yamlEditor.setValue(this._cardConfig);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop opened>
        <h2>
          ${this.opp.localize("ui.panel.devcon.editor.suggest_card.header")}
        </h2>
        <paper-dialog-scrollable>
          ${this._cardConfig ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="element-preview">
                  ${this._cardConfig.map(cardConfig => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <hui-card-preview
                        .opp="${this.opp}"
                        .config="${cardConfig}"
                      ></hui-card-preview>
                    `)}
                </div>
              ` : ""}
          ${this._yamlMode && this._cardConfig ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="editor">
                  <op-yaml-editor
                    .defaultValue=${this._cardConfig}
                  ></op-yaml-editor>
                </div>
              ` : ""}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._close}">
            ${this._yamlMode ? this.opp.localize("ui.common.close") : this.opp.localize("ui.common.cancel")}
          </mwc-button>
          ${!this._yamlMode ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button @click="${this._pickCard}"
                  >${this.opp.localize("ui.panel.devcon.editor.suggest_card.create_own")}</mwc-button
                >
                <mwc-button ?disabled="${this._saving}" @click="${this._save}">
                  ${this._saving ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                        <paper-spinner active alt="Saving"></paper-spinner>
                      ` : this.opp.localize("ui.panel.devcon.editor.suggest_card.add")}
                </mwc-button>
              ` : ""}
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_8__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the op-style-dialog max-height on small screens */
          op-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 850px) {
          op-paper-dialog {
            width: 845px;
          }
        }
        op-paper-dialog {
          max-width: 845px;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        .hidden {
          display: none;
        }
        .element-preview {
          position: relative;
        }
        hui-card-preview {
          padding-top: 8px;
          margin: 4px auto;
          max-width: 390px;
          display: block;
          width: 100%;
        }
        .editor {
          padding-top: 16px;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._dialog.close();

        this._params = undefined;
        this._cardConfig = undefined;
        this._yamlMode = false;
      }
    }, {
      kind: "method",
      key: "_pickCard",
      value: function _pickCard() {
        var _this$_params, _this$_params2, _this$_params3;

        if (!((_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.devconConfig) || !((_this$_params2 = this._params) === null || _this$_params2 === void 0 ? void 0 : _this$_params2.path) || !((_this$_params3 = this._params) === null || _this$_params3 === void 0 ? void 0 : _this$_params3.saveConfig)) {
          return;
        }

        Object(_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_9__["showEditCardDialog"])(this, {
          devconConfig: this._params.devconConfig,
          saveConfig: this._params.saveConfig,
          path: this._params.path,
          entities: this._params.entities
        });

        this._close();
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        var _this$_params4, _this$_params5, _this$_params6;

        if (!((_this$_params4 = this._params) === null || _this$_params4 === void 0 ? void 0 : _this$_params4.devconConfig) || !((_this$_params5 = this._params) === null || _this$_params5 === void 0 ? void 0 : _this$_params5.path) || !((_this$_params6 = this._params) === null || _this$_params6 === void 0 ? void 0 : _this$_params6.saveConfig) || !this._cardConfig) {
          return;
        }

        this._saving = true;
        await this._params.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["addCards"])(this._params.devconConfig, this._params.path, this._cardConfig));
        this._saving = false;
        Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__["showSaveSuccessToast"])(this, this.opp);

        this._close();
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtYmFzZS50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUtY3NzLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS90b2dnbGVfYXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jYXJkLWVkaXRvci9odWktZGlhbG9nLXN1Z2dlc3QtY2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2h0bWwsIExpdEVsZW1lbnQsIHByb3BlcnR5fSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQge2NsYXNzTWFwfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmltcG9ydCB7cmlwcGxlLCBSaXBwbGVPcHRpb25zfSBmcm9tICcuL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBwcmltYXJ5ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgYWN0aXZlOiBib29sZWFufHVuZGVmaW5lZDtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY2NlbnQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSB1bmJvdW5kZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7YXR0cmlidXRlOiBmYWxzZX0pIHByb3RlY3RlZCBpbnRlcmFjdGlvbk5vZGU6IEhUTUxFbGVtZW50ID0gdGhpcztcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5pbnRlcmFjdGlvbk5vZGUgPT09IHRoaXMpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IFNoYWRvd1Jvb3QgfCBudWxsO1xuICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25Ob2RlID0gcGFyZW50O1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwYXJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIHBhcmVudC5ob3N0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQuaG9zdDtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8vIFRPRE8oc29ydmVsbCkgI2Nzczogc2l6aW5nLlxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5JzogdGhpcy5wcmltYXJ5LFxuICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50JzogdGhpcy5hY2NlbnQsXG4gICAgfTtcbiAgICBjb25zdCB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgYWN0aXZlLCBpbnRlcmFjdGlvbk5vZGV9ID0gdGhpcztcbiAgICBjb25zdCByaXBwbGVPcHRpb25zOiBSaXBwbGVPcHRpb25zID0ge2Rpc2FibGVkLCB1bmJvdW5kZWQsIGludGVyYWN0aW9uTm9kZX07XG4gICAgaWYgKGFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGVPcHRpb25zLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IC5yaXBwbGU9XCIke3JpcHBsZShyaXBwbGVPcHRpb25zKX1cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLXJpcHBsZS1zdXJmYWNlICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCI+PC9kaXY+YDtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjc3N9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzYEBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtcmlwcGxlLXN1cmZhY2V7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmU7b3ZlcmZsb3c6aGlkZGVufS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3Jle3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3otaW5kZXg6MX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgMCk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIDApfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWRjLXJpcHBsZS1zdXJmYWNlOmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDEwMCUpO2xlZnQ6Y2FsYyg1MCUgLSAxMDAlKTt3aWR0aDoyMDAlO2hlaWdodDoyMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRde292ZXJmbG93OnZpc2libGV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgY2FsYyg1MCUgLSA1MCUpKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSA1MCUpKTt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjIwMGVlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4NjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNle3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9YDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQge1JpcHBsZUJhc2V9IGZyb20gJy4vbXdjLXJpcHBsZS1iYXNlLmpzJztcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vbXdjLXJpcHBsZS1jc3MuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdtd2MtcmlwcGxlJzogUmlwcGxlO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdtd2MtcmlwcGxlJylcbmV4cG9ydCBjbGFzcyBSaXBwbGUgZXh0ZW5kcyBSaXBwbGVCYXNlIHtcbiAgc3RhdGljIHN0eWxlcyA9IHN0eWxlO1xufVxuIiwiLy8gVG9nZ2xlIEF0dHJpYnV0ZSBQb2x5ZmlsbCBiZWNhdXNlIGl0J3MgdG9vIG5ldyBmb3Igc29tZSBicm93c2Vyc1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0cmlidXRlID0gKFxyXG4gIGVsOiBIVE1MRWxlbWVudCxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZm9yY2U/OiBib29sZWFuXHJcbikgPT4ge1xyXG4gIGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmb3JjZSA9ICEhZm9yY2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XHJcbiAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZm9yY2UgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgXCJcIik7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgZGVlcEZyZWV6ZSBmcm9tIFwiZGVlcC1mcmVlemVcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2Y29uQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaHVpLWNhcmQtcHJldmlld1wiO1xuaW1wb3J0IFwiLi9odWktY2FyZC1waWNrZXJcIjtcbmltcG9ydCB7IGFkZENhcmRzIH0gZnJvbSBcIi4uL2NvbmZpZy11dGlsXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AteWFtbC1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBzaG93RWRpdENhcmREaWFsb2cgfSBmcm9tIFwiLi9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IGNvbXB1dGVDYXJkcyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2VuZXJhdGUtZGV2Y29uLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VnZ2VzdENhcmREaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LXN1Z2dlc3QtY2FyZC1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dTYXZlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcFBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcFlhbWxFZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC15YW1sLWVkaXRvclwiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCIpXG5leHBvcnQgY2xhc3MgSHVpRGlhbG9nU3VnZ2VzdENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYXJkQ29uZmlnPzogRGV2Y29uQ2FyZENvbmZpZ1tdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zYXZpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfeWFtbE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHF1ZXJ5KFwib3AtcGFwZXItZGlhbG9nXCIpIHByaXZhdGUgX2RpYWxvZz86IE9wUGFwZXJEaWFsb2c7XG4gIEBxdWVyeShcIm9wLXlhbWwtZWRpdG9yXCIpIHByaXZhdGUgX3lhbWxFZGl0b3I/OiBPcFlhbWxFZGl0b3I7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl95YW1sTW9kZSA9ICh0aGlzLm9wcC5wYW5lbHMuZGV2Y29uPy5jb25maWcgYXMgYW55KT8ubW9kZSA9PT0gXCJ5YW1sXCI7XG4gICAgdGhpcy5fY2FyZENvbmZpZyA9XG4gICAgICBwYXJhbXMuY2FyZENvbmZpZyB8fFxuICAgICAgY29tcHV0ZUNhcmRzKFxuICAgICAgICBwYXJhbXMuZW50aXRpZXMubWFwKChlbnRpdHlJZCkgPT4gW1xuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHRoaXMub3BwLnN0YXRlc1tlbnRpdHlJZF0sXG4gICAgICAgIF0pLFxuICAgICAgICB7fSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICBpZiAoIU9iamVjdC5pc0Zyb3plbih0aGlzLl9jYXJkQ29uZmlnKSkge1xuICAgICAgdGhpcy5fY2FyZENvbmZpZyA9IGRlZXBGcmVlemUodGhpcy5fY2FyZENvbmZpZyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2cpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5vcGVuKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl95YW1sRWRpdG9yKSB7XG4gICAgICB0aGlzLl95YW1sRWRpdG9yLnNldFZhbHVlKHRoaXMuX2NhcmRDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZyB3aXRoLWJhY2tkcm9wIG9wZW5lZD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5zdWdnZXN0X2NhcmQuaGVhZGVyXCIpfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgJHt0aGlzLl9jYXJkQ29uZmlnXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jYXJkQ29uZmlnLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGNhcmRDb25maWcpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGh1aS1jYXJkLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPVwiJHtjYXJkQ29uZmlnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7dGhpcy5feWFtbE1vZGUgJiYgdGhpcy5fY2FyZENvbmZpZ1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JcIj5cbiAgICAgICAgICAgICAgICAgIDxvcC15YW1sLWVkaXRvclxuICAgICAgICAgICAgICAgICAgICAuZGVmYXVsdFZhbHVlPSR7dGhpcy5fY2FyZENvbmZpZ31cbiAgICAgICAgICAgICAgICAgID48L29wLXlhbWwtZWRpdG9yPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fY2xvc2V9XCI+XG4gICAgICAgICAgICAke3RoaXMuX3lhbWxNb2RlXG4gICAgICAgICAgICAgID8gdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLmNsb3NlXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLmNhbmNlbFwiKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgJHshdGhpcy5feWFtbE1vZGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX3BpY2tDYXJkfVwiXG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5zdWdnZXN0X2NhcmQuY3JlYXRlX293blwiXG4gICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiA/ZGlzYWJsZWQ9XCIke3RoaXMuX3NhdmluZ31cIiBAY2xpY2s9XCIke3RoaXMuX3NhdmV9XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX3NhdmluZ1xuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmUgYWx0PVwiU2F2aW5nXCI+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3Iuc3VnZ2VzdF9jYXJkLmFkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L29wLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIG9wLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgd2lkdGg6IDg0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogODQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVsZW1lbnQtcHJldmlldyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGh1aS1jYXJkLXByZXZpZXcge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgbWFyZ2luOiA0cHggYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2chLmNsb3NlKCk7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NhcmRDb25maWcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5feWFtbE1vZGUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX3BpY2tDYXJkKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLl9wYXJhbXM/LmRldmNvbkNvbmZpZyB8fFxuICAgICAgIXRoaXMuX3BhcmFtcz8ucGF0aCB8fFxuICAgICAgIXRoaXMuX3BhcmFtcz8uc2F2ZUNvbmZpZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93RWRpdENhcmREaWFsb2codGhpcywge1xuICAgICAgZGV2Y29uQ29uZmlnOiB0aGlzLl9wYXJhbXMhLmRldmNvbkNvbmZpZyxcbiAgICAgIHNhdmVDb25maWc6IHRoaXMuX3BhcmFtcyEuc2F2ZUNvbmZpZyxcbiAgICAgIHBhdGg6IHRoaXMuX3BhcmFtcyEucGF0aCxcbiAgICAgIGVudGl0aWVzOiB0aGlzLl9wYXJhbXMhLmVudGl0aWVzLFxuICAgIH0pO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLl9wYXJhbXM/LmRldmNvbkNvbmZpZyB8fFxuICAgICAgIXRoaXMuX3BhcmFtcz8ucGF0aCB8fFxuICAgICAgIXRoaXMuX3BhcmFtcz8uc2F2ZUNvbmZpZyB8fFxuICAgICAgIXRoaXMuX2NhcmRDb25maWdcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2F2aW5nID0gdHJ1ZTtcbiAgICBhd2FpdCB0aGlzLl9wYXJhbXMhLnNhdmVDb25maWcoXG4gICAgICBhZGRDYXJkcyhcbiAgICAgICAgdGhpcy5fcGFyYW1zIS5kZXZjb25Db25maWcsXG4gICAgICAgIHRoaXMuX3BhcmFtcyEucGF0aCBhcyBbbnVtYmVyXSxcbiAgICAgICAgdGhpcy5fY2FyZENvbmZpZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5vcHApO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCI6IEh1aURpYWxvZ1N1Z2dlc3RDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQThCQTtBQUNBO0FBN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQVdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBO0FBQUE7QUFrQ0E7OztBQUdBOzs7QUFHQTs7QUFHQTs7QUFHQTtBQUNBOztBQUpBOztBQUhBO0FBY0E7OztBQUlBOzs7QUFKQTs7O0FBV0E7QUFDQTs7QUFJQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTs7QUFBQTs7QUFSQTs7O0FBcENBO0FBeURBO0FBM0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlDQTtBQXZJQTtBQUFBO0FBQUE7QUFBQTtBQTBJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5SUE7QUFBQTtBQUFBO0FBQUE7QUFnSkE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBL0pBO0FBQUE7QUFBQTtBQUFBO0FBaUtBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckxBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9