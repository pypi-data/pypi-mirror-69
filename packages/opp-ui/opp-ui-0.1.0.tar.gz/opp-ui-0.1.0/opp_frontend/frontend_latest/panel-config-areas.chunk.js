(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-areas"],{

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

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
const debounce = (func, wait, immediate = false) => {
  let timeout; // @ts-ignore

  return function (...args) {
    // tslint:disable:no-this-assignment
    // @ts-ignore
    const context = this;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (opp, values) => opp.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (opp, areaId, updates) => opp.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (opp, areaId) => opp.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/panels/config/areas/op-config-areas.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/areas/op-config-areas.ts ***!
  \****************************************************/
/*! exports provided: OpConfigAreas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpConfigAreas", function() { return OpConfigAreas; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-dialog-area-registry-detail */ "./src/panels/config/areas/show-dialog-area-registry-detail.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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














let OpConfigAreas = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-config-areas")], function (_initialize, _LitElement) {
  class OpConfigAreas extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigAreas,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
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
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubAreas",
      value: void 0
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpConfigAreas.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubAreas) {
          this._unsubAreas();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || this._areas === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <opp-loading-screen></opp-loading-screen>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_12__["configSections"].integrations}
      >
        <op-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.opp.localize("ui.panel.config.areas.picker.header")}
          </span>
          <span slot="introduction">
            ${this.opp.localize("ui.panel.config.areas.picker.introduction")}
            <p>
              ${this.opp.localize("ui.panel.config.areas.picker.introduction2")}
            </p>
            <a href="/config/integrations/dashboard">
              ${this.opp.localize("ui.panel.config.areas.picker.integrations_page")}
            </a>
          </span>
          <op-card>
            ${this._areas.map(entry => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-item @click=${this._openEditEntry} .entry=${entry}>
                  <paper-item-body>
                    ${entry.name}
                  </paper-item-body>
                </paper-item>
              `;
        })}
            ${this._areas.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="empty">
                    ${this.opp.localize("ui.panel.config.areas.no_areas")}
                    <mwc-button @click=${this._createArea}>
                      ${this.opp.localize("ui.panel.config.areas.create_area")}
                    </mwc-button>
                  </div>
                ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
          </op-card>
        </op-config-section>
      </opp-tabs-subpage>

      <op-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="opp:plus"
        title="${this.opp.localize("ui.panel.config.areas.create_area")}"
        @click=${this._createArea}
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_10__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.opp)
        })}"
      ></op-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpConfigAreas.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__["loadAreaRegistryDetailDialog"])();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpConfigAreas.prototype), "updated", this).call(this, changedProps);

        if (!this._unsubAreas) {
          this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_3__["subscribeAreaRegistry"])(this.opp.connection, areas => {
            this._areas = areas;
          });
        }
      }
    }, {
      kind: "method",
      key: "_createArea",
      value: function _createArea() {
        this._openDialog();
      }
    }, {
      kind: "method",
      key: "_openEditEntry",
      value: function _openEditEntry(ev) {
        const entry = ev.currentTarget.entry;

        this._openDialog(entry);
      }
    }, {
      kind: "method",
      key: "_openDialog",
      value: function _openDialog(entry) {
        Object(_show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_9__["showAreaRegistryDetailDialog"])(this, {
          entry,
          createEntry: async values => Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_3__["createAreaRegistryEntry"])(this.opp, values),
          updateEntry: async values => Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_3__["updateAreaRegistryEntry"])(this.opp, entry.area_id, values),
          removeEntry: async () => {
            if (!confirm(`Are you sure you want to delete this area?

All devices in this area will become unassigned.`)) {
              return false;
            }

            try {
              await Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_3__["deleteAreaRegistryEntry"])(this.opp, entry.area_id);
              return true;
            } catch (err) {
              return false;
            }
          }
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      opp-loading-screen {
        --app-header-background-color: var(--sidebar-background-color);
        --app-header-text-color: var(--sidebar-text-color);
      }
      a {
        color: var(--primary-color);
      }
      op-card {
        max-width: 600px;
        margin: 16px auto;
        overflow: hidden;
      }
      .empty {
        text-align: center;
      }
      paper-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      op-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }

      op-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      op-fab[narrow] {
        bottom: 84px;
      }
      op-fab.rtl {
        right: auto;
        left: 16px;
      }

      op-fab[is-wide].rtl {
        bottom: 24px;
        right: auto;
        left: 24px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/areas/show-dialog-area-registry-detail.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/config/areas/show-dialog-area-registry-detail.ts ***!
  \*********************************************************************/
/*! exports provided: loadAreaRegistryDetailDialog, showAreaRegistryDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAreaRegistryDetailDialog", function() { return loadAreaRegistryDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAreaRegistryDetailDialog", function() { return showAreaRegistryDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadAreaRegistryDetailDialog = () => Promise.all(/*! import() | area-registry-detail-dialog */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~area-registry-detail-dialog"), __webpack_require__.e("area-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-area-registry-detail */ "./src/panels/config/areas/dialog-area-registry-detail.ts"));
const showAreaRegistryDetailDialog = (element, systemLogDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-area-registry-detail",
    dialogImport: loadAreaRegistryDetailDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWFzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLWJhc2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLWNzcy50cyIsIndlYnBhY2s6Ly8vc3JjL213Yy1yaXBwbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXJlYV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hcmVhcy9vcC1jb25maWctYXJlYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXJlYXMvc2hvdy1kaWFsb2ctYXJlYS1yZWdpc3RyeS1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtodG1sLCBMaXRFbGVtZW50LCBwcm9wZXJ0eX0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHtjbGFzc01hcH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5pbXBvcnQge3JpcHBsZSwgUmlwcGxlT3B0aW9uc30gZnJvbSAnLi9yaXBwbGUtZGlyZWN0aXZlLmpzJztcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgcHJpbWFyeSA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjdGl2ZTogYm9vbGVhbnx1bmRlZmluZWQ7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgYWNjZW50ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgdW5ib3VuZGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHt0eXBlOiBCb29sZWFufSkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe2F0dHJpYnV0ZTogZmFsc2V9KSBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25Ob2RlOiBIVE1MRWxlbWVudCA9IHRoaXM7XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25Ob2RlID09PSB0aGlzKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfCBTaGFkb3dSb290IHwgbnVsbDtcbiAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgcGFyZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCAmJiBwYXJlbnQuaG9zdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25Ob2RlID0gcGFyZW50Lmhvc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICAvLyBUT0RPKHNvcnZlbGwpICNjc3M6IHNpemluZy5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeSc6IHRoaXMucHJpbWFyeSxcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudCc6IHRoaXMuYWNjZW50LFxuICAgIH07XG4gICAgY29uc3Qge2Rpc2FibGVkLCB1bmJvdW5kZWQsIGFjdGl2ZSwgaW50ZXJhY3Rpb25Ob2RlfSA9IHRoaXM7XG4gICAgY29uc3QgcmlwcGxlT3B0aW9uczogUmlwcGxlT3B0aW9ucyA9IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBpbnRlcmFjdGlvbk5vZGV9O1xuICAgIGlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlT3B0aW9ucy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiAucmlwcGxlPVwiJHtyaXBwbGUocmlwcGxlT3B0aW9ucyl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1yaXBwbGUtc3VyZmFjZSAke2NsYXNzTWFwKGNsYXNzZXMpfVwiPjwvZGl2PmA7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7Y3NzfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2BAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNley0tbWRjLXJpcHBsZS1mZy1zaXplOiAwOy0tbWRjLXJpcHBsZS1sZWZ0OiAwOy0tbWRjLXJpcHBsZS10b3A6IDA7LS1tZGMtcmlwcGxlLWZnLXNjYWxlOiAxOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwOy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQ6IDA7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCk7cG9zaXRpb246cmVsYXRpdmU7b3V0bGluZTpub25lO292ZXJmbG93OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwifS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1kYy1yaXBwbGUtc3VyZmFjZTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSAxMDAlKTtsZWZ0OmNhbGMoNTAlIC0gMTAwJSk7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXXtvdmVyZmxvdzp2aXNpYmxlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSA1MCUpO2xlZnQ6Y2FsYyg1MCUgLSA1MCUpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gNTAlKSk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIGNhbGMoNTAlIC0gNTAlKSk7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzYyMDBlZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfWA7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtSaXBwbGVCYXNlfSBmcm9tICcuL213Yy1yaXBwbGUtYmFzZS5qcyc7XG5pbXBvcnQge3N0eWxlfSBmcm9tICcuL213Yy1yaXBwbGUtY3NzLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbXdjLXJpcHBsZSc6IFJpcHBsZTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnbXdjLXJpcHBsZScpXG5leHBvcnQgY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmlwcGxlQmFzZSB7XG4gIHN0YXRpYyBzdHlsZXMgPSBzdHlsZTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB2YWx1ZXM6IEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtc1xuKSA9PlxuICBvcHAuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBvcHAuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcmVhUmVnaXN0cnlFbnRyeSA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSxcbiAgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnksXG4gIGNyZWF0ZUFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXRhYnMtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcHAtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQge1xuICBzaG93QXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1hcmVhLXJlZ2lzdHJ5LWRldGFpbFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuLi8uLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9vcC1wYW5lbC1jb25maWdcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1jb25maWctYXJlYXNcIilcbmV4cG9ydCBjbGFzcyBPcENvbmZpZ0FyZWFzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIHByaXZhdGUgX3Vuc3ViQXJlYXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViQXJlYXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViQXJlYXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwIHx8IHRoaXMuX2FyZWFzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8b3BwLWxvYWRpbmctc2NyZWVuPjwvb3BwLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3BwLXRhYnMtc3VicGFnZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7Y29uZmlnU2VjdGlvbnMuaW50ZWdyYXRpb25zfVxuICAgICAgPlxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmFyZWFzLnBpY2tlci5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXJlYXMucGlja2VyLmludHJvZHVjdGlvblwiKX1cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmFyZWFzLnBpY2tlci5pbnRyb2R1Y3Rpb24yXCIpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvaW50ZWdyYXRpb25zL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFzLnBpY2tlci5pbnRlZ3JhdGlvbnNfcGFnZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9IC5lbnRyeT0ke2VudHJ5fT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXJlYXMubm9fYXJlYXNcIil9XG4gICAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUFyZWF9PlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXJlYXMuY3JlYXRlX2FyZWFcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICA8L29wLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9vcHAtdGFicy1zdWJwYWdlPlxuXG4gICAgICA8b3AtZmFiXG4gICAgICAgID9pcy13aWRlPSR7dGhpcy5pc1dpZGV9XG4gICAgICAgID9uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgaWNvbj1cIm9wcDpwbHVzXCJcbiAgICAgICAgdGl0bGU9XCIke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmFyZWFzLmNyZWF0ZV9hcmVhXCIpfVwiXG4gICAgICAgIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUFyZWF9XG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMub3BwKSxcbiAgICAgICAgfSl9XCJcbiAgICAgID48L29wLWZhYj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl91bnN1YkFyZWFzKSB7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzID0gc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQXJlYSgpIHtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRWRpdEVudHJ5KGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnk6IEFyZWFSZWdpc3RyeUVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIGFueSkuZW50cnk7XG4gICAgdGhpcy5fb3BlbkRpYWxvZyhlbnRyeSk7XG4gIH1cbiAgcHJpdmF0ZSBfb3BlbkRpYWxvZyhlbnRyeT86IEFyZWFSZWdpc3RyeUVudHJ5KSB7XG4gICAgc2hvd0FyZWFSZWdpc3RyeURldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRyeSxcbiAgICAgIGNyZWF0ZUVudHJ5OiBhc3luYyAodmFsdWVzKSA9PiBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLm9wcCEsIHZhbHVlcyksXG4gICAgICB1cGRhdGVFbnRyeTogYXN5bmMgKHZhbHVlcykgPT5cbiAgICAgICAgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAhLCBlbnRyeSEuYXJlYV9pZCwgdmFsdWVzKSxcbiAgICAgIHJlbW92ZUVudHJ5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFyZWE/XG5cbkFsbCBkZXZpY2VzIGluIHRoaXMgYXJlYSB3aWxsIGJlY29tZSB1bmFzc2lnbmVkLmApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAhLCBlbnRyeSEuYXJlYV9pZCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG9wcC1sb2FkaW5nLXNjcmVlbiB7XG4gICAgICAgIC0tYXBwLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAtLWFwcC1oZWFkZXItdGV4dC1jb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBvcC1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuZW1wdHkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgICAgb3AtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBvcC1mYWJbaXMtd2lkZV0ge1xuICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgb3AtZmFiW25hcnJvd10ge1xuICAgICAgICBib3R0b206IDg0cHg7XG4gICAgICB9XG4gICAgICBvcC1mYWIucnRsIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIG9wLWZhYltpcy13aWRlXS5ydGwge1xuICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXMge1xuICBlbnRyeT86IEFyZWFSZWdpc3RyeUVudHJ5O1xuICBjcmVhdGVFbnRyeTogKHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zKSA9PiBQcm9taXNlPHVua25vd24+O1xuICB1cGRhdGVFbnRyeTogKFxuICAgIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuICApID0+IFByb21pc2U8dW5rbm93bj47XG4gIHJlbW92ZUVudHJ5OiAoKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEFyZWFSZWdpc3RyeURldGFpbERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFyZWEtcmVnaXN0cnktZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctYXJlYS1yZWdpc3RyeS1kZXRhaWxcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FyZWFSZWdpc3RyeURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYXJlYS1yZWdpc3RyeS1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRBcmVhUmVnaXN0cnlEZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBRUE7QUFBQTs7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBOEJBO0FBQ0E7QUE3QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFXQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFTQTtBQUNBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOzs7O0FBTUE7QUFDQTtBQUNBOztBQUVBOzs7QUFIQTtBQU9BO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOzs7QUFMQTs7Ozs7O0FBZUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQXJEQTtBQTBEQTtBQS9FQTtBQUFBO0FBQUE7QUFBQTtBQWtGQTtBQUNBO0FBQUE7QUFDQTtBQXBGQTtBQUFBO0FBQUE7QUFBQTtBQXVGQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQUFBO0FBZ0dBO0FBQ0E7QUFqR0E7QUFBQTtBQUFBO0FBQUE7QUFvR0E7QUFDQTtBQUFBO0FBQ0E7QUF0R0E7QUFBQTtBQUFBO0FBQUE7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBO0FBL0tBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQSxtcUJBRUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9