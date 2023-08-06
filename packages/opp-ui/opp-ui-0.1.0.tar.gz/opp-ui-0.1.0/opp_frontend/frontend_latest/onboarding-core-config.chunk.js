(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-core-config"],{

/***/ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js ***!
  \****************************************************************************/
/*! exports provided: PaperInkyFocusBehaviorImpl, PaperInkyFocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehaviorImpl", function() { return PaperInkyFocusBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehavior", function() { return PaperInkyFocusBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 *
 * @polymerBehavior PaperInkyFocusBehavior
 */

const PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],
  _focusedChanged: function (receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }

    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },
  _createRipple: function () {
    var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._createRipple();

    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};
/** @polymerBehavior */

const PaperInkyFocusBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"], PaperInkyFocusBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js ***!
  \************************************************************************/
/*! exports provided: PaperRippleBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRippleBehavior", function() { return PaperRippleBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/




/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */

const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {
      type: Boolean,
      observer: '_noinkChanged'
    },

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function () {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function (event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonStateImpl"]._downHandler.call(this, event);

    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function (optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;

      if (rippleContainer) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(rippleContainer).appendChild(this._ripple);
      }

      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this._rippleContainer || this);
        var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(optTriggeringEvent).rootTarget;

        if (domContainer.deepContains(
        /** @type {Node} */
        target)) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function () {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function () {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function () {
    var element =
    /** @type {!PaperRippleElement} */
    document.createElement('paper-ripple');
    return element;
  },
  _noinkChanged: function (noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

/***/ }),

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
// Sets up a Leaflet map on the provided DOM element
const setupLeafletMap = async (mapElement, darkMode = false, draw = false) => {
  if (!mapElement.parentNode) {
    throw new Error("Cannot setup Leaflet map on disconnected element");
  } // tslint:disable-next-line


  const Leaflet = await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7));
  Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";

  if (draw) {
    await __webpack_require__.e(/*! import() | leaflet-draw */ "vendors~leaflet-draw").then(__webpack_require__.t.bind(null, /*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js", 7));
  }

  const map = Leaflet.map(mapElement);
  const style = document.createElement("link");
  style.setAttribute("href", "/static/images/leaflet/leaflet.css");
  style.setAttribute("rel", "stylesheet");
  mapElement.parentNode.appendChild(style);
  map.setView([52.3731339, 4.8903147], 13);
  createTileLayer(Leaflet, darkMode).addTo(map);
  return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
  return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20
  });
};

/***/ }),

/***/ "./src/common/navigate.ts":
/*!********************************!*\
  !*** ./src/common/navigate.ts ***!
  \********************************/
/*! exports provided: navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/fire_event */ "./src/common/dom/fire_event.ts");

const navigate = (_node, path, replace = false) => {
  if (false) {} else {
    if (replace) {
      history.replaceState(null, "", path);
    } else {
      history.pushState(null, "", path);
    }
  }

  Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(window, "location-changed", {
    replace
  });
};

/***/ }),

/***/ "./src/components/timezone-datalist.ts":
/*!*********************************************!*\
  !*** ./src/components/timezone-datalist.ts ***!
  \*********************************************/
/*! exports provided: createTimezoneListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimezoneListEl", function() { return createTimezoneListEl; });
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-timezones-json */ "./node_modules/google-timezones-json/index.js");
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_timezones_json__WEBPACK_IMPORTED_MODULE_0__);

const createTimezoneListEl = () => {
  const list = document.createElement("datalist");
  list.id = "timezones";
  Object.keys(google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.innerHTML = google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a[key];
    list.appendChild(option);
  });
  return list;
};

/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
const saveCoreConfig = (opp, values) => opp.callWS(Object.assign({
  type: "config/core/update"
}, values));
const detectCoreConfig = opp => opp.callWS({
  type: "config/core/detect"
});

/***/ }),

/***/ "./src/data/zone.ts":
/*!**************************!*\
  !*** ./src/data/zone.ts ***!
  \**************************/
/*! exports provided: defaultRadiusColor, homeRadiusColor, passiveRadiusColor, fetchZones, createZone, updateZone, deleteZone, showZoneEditor, getZoneEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRadiusColor", function() { return defaultRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRadiusColor", function() { return homeRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveRadiusColor", function() { return passiveRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZones", function() { return fetchZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZone", function() { return createZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateZone", function() { return updateZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteZone", function() { return deleteZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneEditor", function() { return showZoneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneEditorInitData", function() { return getZoneEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const defaultRadiusColor = "#FF9800";
const homeRadiusColor = "#03a9f4";
const passiveRadiusColor = "#9b9b9b";
const fetchZones = opp => opp.callWS({
  type: "zone/list"
});
const createZone = (opp, values) => opp.callWS(Object.assign({
  type: "zone/create"
}, values));
const updateZone = (opp, zoneId, updates) => opp.callWS(Object.assign({
  type: "zone/update",
  zone_id: zoneId
}, updates));
const deleteZone = (opp, zoneId) => opp.callWS({
  type: "zone/delete",
  zone_id: zoneId
});
let inititialZoneEditorData;
const showZoneEditor = (el, data) => {
  inititialZoneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/zone/new");
};
const getZoneEditorInitData = () => {
  const data = inititialZoneEditorData;
  inititialZoneEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/onboarding/onboarding-core-config.ts":
/*!**************************************************!*\
  !*** ./src/onboarding/onboarding-core-config.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/core */ "./src/data/core.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_timezone_datalist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/timezone-datalist */ "./src/components/timezone-datalist.ts");
/* harmony import */ var _components_map_op_location_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/map/op-location-editor */ "./src/components/map/op-location-editor.ts");
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





 // tslint:disable-next-line: no-duplicate-imports






const amsterdam = [52.3731339, 4.8903147];

let OnboardingCoreConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("onboarding-core-config")], function (_initialize, _LitElement) {
  class OnboardingCoreConfig extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingCoreConfig,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "onboardingLocalize",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_working",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_location",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_elevation",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_unitSystem",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_timeZone",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro", "name", this.opp.user.name)}
      </p>

      <paper-input
        .label=${this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name")}
        name="name"
        .disabled=${this._working}
        .value=${this._nameValue}
        @value-changed=${this._handleChange}
      ></paper-input>

      <div class="middle-text">
        <p>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location")}
        </p>

        <div class="row">
          <div>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect")}
          </div>
          <mwc-button @click=${this._detect}>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.button_detect")}
          </mwc-button>
        </div>
      </div>

      <div class="row">
        <op-location-editor
          class="flex"
          .location=${this._locationValue}
          .fitZoom=${14}
          @change=${this._locationChanged}
        ></op-location-editor>
      </div>

      <div class="row">
        <paper-input
          class="flex"
          .label=${this.opp.localize("ui.panel.config.core.section.core.core_config.time_zone")}
          name="timeZone"
          list="timezones"
          .disabled=${this._working}
          .value=${this._timeZoneValue}
          @value-changed=${this._handleChange}
        ></paper-input>

        <paper-input
          class="flex"
          .label=${this.opp.localize("ui.panel.config.core.section.core.core_config.elevation")}
          name="elevation"
          type="number"
          .disabled=${this._working}
          .value=${this._elevationValue}
          @value-changed=${this._handleChange}
        >
          <span slot="suffix">
            ${this._unitSystem === "metric" ? this.opp.localize("ui.panel.config.core.section.core.core_config.elevation_meters") : this.opp.localize("ui.panel.config.core.section.core.core_config.elevation_feet")}
          </span>
        </paper-input>
      </div>

      <div class="row">
        <div class="flex">
          ${this.opp.localize("ui.panel.config.core.section.core.core_config.unit_system")}
        </div>
        <paper-radio-group
          class="flex"
          .selected=${this._unitSystemValue}
          @selected-changed=${this._unitSystemChanged}
        >
          <paper-radio-button name="metric" .disabled=${this._working}>
            ${this.opp.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
            <div class="secondary">
              ${this.opp.localize("ui.panel.config.core.section.core.core_config.metric_example")}
            </div>
          </paper-radio-button>
          <paper-radio-button name="imperial" .disabled=${this._working}>
            ${this.opp.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial")}
            <div class="secondary">
              ${this.opp.localize("ui.panel.config.core.section.core.core_config.imperial_example")}
            </div>
          </paper-radio-button>
        </paper-radio-group>
      </div>

      <div class="footer">
        <mwc-button @click=${this._save} .disabled=${this._working}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OnboardingCoreConfig.prototype), "firstUpdated", this).call(this, changedProps);

        setTimeout(() => this.shadowRoot.querySelector("paper-input").focus(), 100);
        this.addEventListener("keypress", ev => {
          if (ev.keyCode === 13) {
            this._save(ev);
          }
        });
        const input = this.shadowRoot.querySelector("[name=timeZone]");
        input.inputElement.appendChild(Object(_components_timezone_datalist__WEBPACK_IMPORTED_MODULE_8__["createTimezoneListEl"])());
      }
    }, {
      kind: "get",
      key: "_nameValue",
      value: function _nameValue() {
        return this._name !== undefined ? this._name : this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default");
      }
    }, {
      kind: "get",
      key: "_locationValue",
      value: function _locationValue() {
        return this._location || amsterdam;
      }
    }, {
      kind: "get",
      key: "_elevationValue",
      value: function _elevationValue() {
        return this._elevation !== undefined ? this._elevation : 0;
      }
    }, {
      kind: "get",
      key: "_timeZoneValue",
      value: function _timeZoneValue() {
        return this._timeZone;
      }
    }, {
      kind: "get",
      key: "_unitSystemValue",
      value: function _unitSystemValue() {
        return this._unitSystem !== undefined ? this._unitSystem : "metric";
      }
    }, {
      kind: "method",
      key: "_handleChange",
      value: function _handleChange(ev) {
        const target = ev.currentTarget;
        this[`_${target.name}`] = target.value;
      }
    }, {
      kind: "method",
      key: "_locationChanged",
      value: function _locationChanged(ev) {
        this._location = ev.currentTarget.location;
      }
    }, {
      kind: "method",
      key: "_unitSystemChanged",
      value: function _unitSystemChanged(ev) {
        this._unitSystem = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_detect",
      value: async function _detect() {
        this._working = true;

        try {
          const values = await Object(_data_core__WEBPACK_IMPORTED_MODULE_5__["detectCoreConfig"])(this.opp);

          if (values.latitude && values.longitude) {
            this._location = [Number(values.latitude), Number(values.longitude)];
          }

          if (values.elevation) {
            this._elevation = String(values.elevation);
          }

          if (values.unit_system) {
            this._unitSystem = values.unit_system;
          }

          if (values.time_zone) {
            this._timeZone = values.time_zone;
          }
        } catch (err) {
          alert(`Failed to detect location information: ${err.message}`);
        } finally {
          this._working = false;
        }
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save(ev) {
        ev.preventDefault();
        this._working = true;

        try {
          const location = this._locationValue;
          await Object(_data_core__WEBPACK_IMPORTED_MODULE_5__["saveCoreConfig"])(this.opp, {
            location_name: this._nameValue,
            latitude: location[0],
            longitude: location[1],
            elevation: Number(this._elevationValue),
            unit_system: this._unitSystemValue,
            time_zone: this._timeZoneValue || "UTC"
          });
          const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_6__["onboardCoreConfigStep"])(this.opp);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "onboarding-step", {
            type: "core_config",
            result
          });
        } catch (err) {
          this._working = false;
          alert(`Failed to save: ${err.message}`);
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .row {
        display: flex;
        flex-direction: row;
        margin: 0 -8px;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      .flex {
        flex: 1;
      }

      .middle-text {
        margin: 24px 0;
      }

      .row > * {
        margin: 0 8px;
      }
      .footer {
        margin-top: 16px;
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jb3JlLWNvbmZpZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL25hdmlnYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvem9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWNvcmUtY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcblxuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYFBhcGVySW5reUZvY3VzQmVoYXZpb3JgIGltcGxlbWVudHMgYSByaXBwbGUgd2hlbiB0aGUgZWxlbWVudCBoYXMga2V5Ym9hcmRcbiAqIGZvY3VzLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGwgPSB7XG4gIG9ic2VydmVyczogWydfZm9jdXNlZENoYW5nZWQocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCknXSxcblxuICBfZm9jdXNlZENoYW5nZWQ6IGZ1bmN0aW9uKHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQpIHtcbiAgICBpZiAocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5ob2xkRG93biA9IHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQ7XG4gICAgfVxuICB9LFxuXG4gIF9jcmVhdGVSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByaXBwbGUgPSBQYXBlclJpcHBsZUJlaGF2aW9yLl9jcmVhdGVSaXBwbGUoKTtcbiAgICByaXBwbGUuaWQgPSAnaW5rJztcbiAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdjZW50ZXInLCAnJyk7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgIHJldHVybiByaXBwbGU7XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvciA9IFtcbiAgSXJvbkJ1dHRvblN0YXRlLFxuICBJcm9uQ29udHJvbFN0YXRlLFxuICBQYXBlclJpcHBsZUJlaGF2aW9yLFxuICBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlSW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogYFBhcGVyUmlwcGxlQmVoYXZpb3JgIGR5bmFtaWNhbGx5IGltcGxlbWVudHMgYSByaXBwbGUgd2hlbiB0aGUgZWxlbWVudCBoYXNcbiAqIGZvY3VzIHZpYSBwb2ludGVyIG9yIGtleWJvYXJkLlxuICpcbiAqIE5PVEU6IFRoaXMgYmVoYXZpb3IgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGFuZCBhZnRlclxuICogYElyb25CdXR0b25TdGF0ZWAgYW5kIGBJcm9uQ29udHJvbFN0YXRlYC5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyUmlwcGxlQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyUmlwcGxlQmVoYXZpb3IgPSB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBwcm9kdWNlIGEgcmlwcGxlIGVmZmVjdCB3aGVuIGludGVyYWN0ZWRcbiAgICAgKiB3aXRoIHZpYSB0aGUgcG9pbnRlci5cbiAgICAgKi9cbiAgICBub2luazoge3R5cGU6IEJvb2xlYW4sIG9ic2VydmVyOiAnX25vaW5rQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIF9yaXBwbGVDb250YWluZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgYSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHdoZW4gdGhlIGVsZW1lbnQgaXNcbiAgICogZm9jdXNlZC5cbiAgICovXG4gIF9idXR0b25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbiBhZGRpdGlvbiB0byB0aGUgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBpbiBgSXJvbkJ1dHRvblN0YXRlYCwgZW5zdXJlc1xuICAgKiBhIHJpcHBsZSBlZmZlY3QgaXMgY3JlYXRlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGluIGEgYHByZXNzZWRgIHN0YXRlLlxuICAgKi9cbiAgX2Rvd25IYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25CdXR0b25TdGF0ZUltcGwuX2Rvd25IYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGlmICh0aGlzLnByZXNzZWQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhpcyBlbGVtZW50IGNvbnRhaW5zIGEgcmlwcGxlIGVmZmVjdC4gRm9yIHN0YXJ0dXAgZWZmaWNpZW5jeVxuICAgKiB0aGUgcmlwcGxlIGVmZmVjdCBpcyBkeW5hbWljYWxseSBvbiBkZW1hbmQgd2hlbiBuZWVkZWQuXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gb3B0VHJpZ2dlcmluZ0V2ZW50IChvcHRpb25hbCkgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAqIHJpcHBsZS5cbiAgICovXG4gIGVuc3VyZVJpcHBsZTogZnVuY3Rpb24ob3B0VHJpZ2dlcmluZ0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICB0aGlzLl9yaXBwbGUgPSB0aGlzLl9jcmVhdGVSaXBwbGUoKTtcbiAgICAgIHRoaXMuX3JpcHBsZS5ub2luayA9IHRoaXMubm9pbms7XG4gICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyIHx8IHRoaXMucm9vdDtcbiAgICAgIGlmIChyaXBwbGVDb250YWluZXIpIHtcbiAgICAgICAgZG9tKHJpcHBsZUNvbnRhaW5lcikuYXBwZW5kQ2hpbGQodGhpcy5fcmlwcGxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRUcmlnZ2VyaW5nRXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV2ZW50IGhhcHBlbmVkIGluc2lkZSBvZiB0aGUgcmlwcGxlIGNvbnRhaW5lclxuICAgICAgICAvLyBGYWxsIGJhY2sgdG8gaG9zdCBpbnN0ZWFkIG9mIHRoZSByb290IGJlY2F1c2UgZGlzdHJpYnV0ZWQgdGV4dFxuICAgICAgICAvLyBub2RlcyBhcmUgbm90IHZhbGlkIGV2ZW50IHRhcmdldHNcbiAgICAgICAgdmFyIGRvbUNvbnRhaW5lciA9IGRvbSh0aGlzLl9yaXBwbGVDb250YWluZXIgfHwgdGhpcyk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBkb20ob3B0VHJpZ2dlcmluZ0V2ZW50KS5yb290VGFyZ2V0O1xuICAgICAgICBpZiAoZG9tQ29udGFpbmVyLmRlZXBDb250YWlucygvKiogQHR5cGUge05vZGV9ICovICh0YXJnZXQpKSkge1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS51aURvd25BY3Rpb24ob3B0VHJpZ2dlcmluZ0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50IHVzZWQgYnkgdGhpcyBlbGVtZW50IHRvIGNyZWF0ZVxuICAgKiByaXBwbGUgZWZmZWN0cy4gVGhlIGVsZW1lbnQncyByaXBwbGUgaXMgY3JlYXRlZCBvbiBkZW1hbmQsIHdoZW5cbiAgICogbmVjZXNzYXJ5LCBhbmQgY2FsbGluZyB0aGlzIG1ldGhvZCB3aWxsIGZvcmNlIHRoZVxuICAgKiByaXBwbGUgdG8gYmUgY3JlYXRlZC5cbiAgICovXG4gIGdldFJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBlbGVtZW50IGN1cnJlbnRseSBjb250YWlucyBhIHJpcHBsZSBlZmZlY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3JpcHBsZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3QgdmlhIGNyZWF0aW5nIGEgYDxwYXBlci1yaXBwbGU+YC5cbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY3VzdG9taXplIHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHJldHVybiB7IVBhcGVyUmlwcGxlRWxlbWVudH0gUmV0dXJucyBhIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudC5cbiAgICovXG4gIF9jcmVhdGVSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshUGFwZXJSaXBwbGVFbGVtZW50fSAqLyAoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcGVyLXJpcHBsZScpKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSxcblxuICBfbm9pbmtDaGFuZ2VkOiBmdW5jdGlvbihub2luaykge1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICB0aGlzLl9yaXBwbGUubm9pbmsgPSBub2luaztcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuZXhwb3J0IHR5cGUgTGVhZmxldERyYXdNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXQtZHJhd1wiKTtcblxuZXhwb3J0IGNvbnN0IHNldHVwTGVhZmxldE1hcCA9IGFzeW5jIChcbiAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRhcmtNb2RlID0gZmFsc2UsXG4gIGRyYXcgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiXG4gICkpIGFzIExlYWZsZXRNb2R1bGVUeXBlO1xuICBMZWFmbGV0Lkljb24uRGVmYXVsdC5pbWFnZVBhdGggPSBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvaW1hZ2VzL1wiO1xuXG4gIGlmIChkcmF3KSB7XG4gICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldC1kcmF3XCIgKi8gXCJsZWFmbGV0LWRyYXdcIik7XG4gIH1cblxuICBjb25zdCBtYXAgPSBMZWFmbGV0Lm1hcChtYXBFbGVtZW50KTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvbGVhZmxldC5jc3NcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gIG1hcEVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIG1hcC5zZXRWaWV3KFs1Mi4zNzMxMzM5LCA0Ljg5MDMxNDddLCAxMyk7XG4gIGNyZWF0ZVRpbGVMYXllcihMZWFmbGV0LCBkYXJrTW9kZSkuYWRkVG8obWFwKTtcblxuICByZXR1cm4gW21hcCwgTGVhZmxldF07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGlsZUxheWVyID0gKFxuICBsZWFmbGV0OiBMZWFmbGV0TW9kdWxlVHlwZSxcbiAgZGFya01vZGU6IGJvb2xlYW5cbikgPT4ge1xuICByZXR1cm4gbGVhZmxldC50aWxlTGF5ZXIoXG4gICAgYGh0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS8ke1xuICAgICAgZGFya01vZGUgPyBcImRhcmtfYWxsXCIgOiBcImxpZ2h0X2FsbFwiXG4gICAgfS97en0ve3h9L3t5fSR7bGVhZmxldC5Ccm93c2VyLnJldGluYSA/IFwiQDJ4LnBuZ1wiIDogXCIucG5nXCJ9YCxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9jYXJ0by5jb20vYXR0cmlidXRpb25zXCI+Q0FSVE88L2E+JyxcbiAgICAgIHN1YmRvbWFpbnM6IFwiYWJjZFwiLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIwLFxuICAgIH1cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi9kb20vZmlyZV9ldmVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwibG9jYXRpb24tY2hhbmdlZFwiOiB7XG4gICAgICByZXBsYWNlOiBib29sZWFuO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRlID0gKFxuICBfbm9kZTogYW55LFxuICBwYXRoOiBzdHJpbmcsXG4gIHJlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZVxuKSA9PiB7XG4gIGlmIChfX0RFTU9fXykge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBgJHtsb2NhdGlvbi5wYXRobmFtZX0jJHtwYXRofWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgcGF0aCk7XG4gICAgfVxuICB9XG4gIGZpcmVFdmVudCh3aW5kb3csIFwibG9jYXRpb24tY2hhbmdlZFwiLCB7XG4gICAgcmVwbGFjZSxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHRpbWV6b25lcyBmcm9tIFwiZ29vZ2xlLXRpbWV6b25lcy1qc29uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXpvbmVMaXN0RWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcclxuICBsaXN0LmlkID0gXCJ0aW1lem9uZXNcIjtcclxuICBPYmplY3Qua2V5cyh0aW1lem9uZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IGtleTtcclxuICAgIG9wdGlvbi5pbm5lckhUTUwgPSB0aW1lem9uZXNba2V5XTtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxuICByZXR1cm4gbGlzdDtcclxufTtcclxuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BwQ29uZmlnIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdVcGRhdGVWYWx1ZXMge1xuICBsb2NhdGlvbl9uYW1lOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBlbGV2YXRpb246IG51bWJlcjtcbiAgdW5pdF9zeXN0ZW06IFwibWV0cmljXCIgfCBcImltcGVyaWFsXCI7XG4gIHRpbWVfem9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZUNvcmVDb25maWcgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgdmFsdWVzOiBQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxPcHBDb25maWc+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL3VwZGF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZXRlY3RDb3JlQ29uZmlnID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxXUzxQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz4+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL2RldGVjdFwiLFxuICB9KTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJhZGl1c0NvbG9yID0gXCIjRkY5ODAwXCI7XG5leHBvcnQgY29uc3QgaG9tZVJhZGl1c0NvbG9yOiBzdHJpbmcgPSBcIiMwM2E5ZjRcIjtcbmV4cG9ydCBjb25zdCBwYXNzaXZlUmFkaXVzQ29sb3I6IHN0cmluZyA9IFwiIzliOWI5YlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmUge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBwYXNzaXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVNdXRhYmxlUGFyYW1zIHtcbiAgaWNvbjogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzaXZlOiBib29sZWFuO1xuICByYWRpdXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoWm9uZXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKSA9PlxuICBvcHAuY2FsbFdTPFpvbmVbXT4oeyB0eXBlOiBcInpvbmUvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlWm9uZSA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIHZhbHVlczogWm9uZU11dGFibGVQYXJhbXMpID0+XG4gIG9wcC5jYWxsV1M8Wm9uZT4oe1xuICAgIHR5cGU6IFwiem9uZS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlWm9uZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB6b25lSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxab25lPih7XG4gICAgdHlwZTogXCJ6b25lL3VwZGF0ZVwiLFxuICAgIHpvbmVfaWQ6IHpvbmVJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVpvbmUgPSAob3BwOiBPcGVuUGVlclBvd2VyLCB6b25lSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6b25lL2RlbGV0ZVwiLFxuICAgIHpvbmVfaWQ6IHpvbmVJZCxcbiAgfSk7XG5cbmxldCBpbml0aXRpYWxab25lRWRpdG9yRGF0YTogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93Wm9uZUVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz5cbikgPT4ge1xuICBpbml0aXRpYWxab25lRWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvem9uZS9uZXdcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Wm9uZUVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsWm9uZUVkaXRvckRhdGE7XG4gIGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhID0gdW5kZWZpbmVkO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENvbmZpZ1VwZGF0ZVZhbHVlcyxcbiAgZGV0ZWN0Q29yZUNvbmZpZyxcbiAgc2F2ZUNvcmVDb25maWcsXG59IGZyb20gXCIuLi9kYXRhL2NvcmVcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgb25ib2FyZENvcmVDb25maWdTdGVwIH0gZnJvbSBcIi4uL2RhdGEvb25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGNyZWF0ZVRpbWV6b25lTGlzdEVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGltZXpvbmUtZGF0YWxpc3RcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWFwL29wLWxvY2F0aW9uLWVkaXRvclwiO1xuXG5jb25zdCBhbXN0ZXJkYW0gPSBbNTIuMzczMTMzOSwgNC44OTAzMTQ3XTtcblxuQGN1c3RvbUVsZW1lbnQoXCJvbmJvYXJkaW5nLWNvcmUtY29uZmlnXCIpXG5jbGFzcyBPbmJvYXJkaW5nQ29yZUNvbmZpZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9uYm9hcmRpbmdMb2NhbGl6ZSE6IExvY2FsaXplRnVuYztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93b3JraW5nID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IENvbmZpZ1VwZGF0ZVZhbHVlc1tcImxvY2F0aW9uX25hbWVcIl07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvY2F0aW9uITogW251bWJlciwgbnVtYmVyXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZWxldmF0aW9uITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bml0U3lzdGVtITogQ29uZmlnVXBkYXRlVmFsdWVzW1widW5pdF9zeXN0ZW1cIl07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVab25lITogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHA+XG4gICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuaW50cm9cIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICB0aGlzLm9wcC51c2VyIS5uYW1lXG4gICAgICAgICl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAubGFiZWw9JHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5sb2NhdGlvbl9uYW1lXCJcbiAgICAgICAgKX1cbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lVmFsdWV9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtdGV4dFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuaW50cm9fbG9jYXRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmNvcmUtY29uZmlnLmludHJvX2xvY2F0aW9uX2RldGVjdFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2RldGVjdH0+XG4gICAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5idXR0b25fZGV0ZWN0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxvcC1sb2NhdGlvbi1lZGl0b3JcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIC5sb2NhdGlvbj0ke3RoaXMuX2xvY2F0aW9uVmFsdWV9XG4gICAgICAgICAgLmZpdFpvb209JHsxNH1cbiAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fbG9jYXRpb25DaGFuZ2VkfVxuICAgICAgICA+PC9vcC1sb2NhdGlvbi1lZGl0b3I+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudGltZV96b25lXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJ0aW1lWm9uZVwiXG4gICAgICAgICAgbGlzdD1cInRpbWV6b25lc1wiXG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fd29ya2luZ31cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aW1lWm9uZVZhbHVlfVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuZWxldmF0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJlbGV2YXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fZWxldmF0aW9uVmFsdWV9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzbG90PVwic3VmZml4XCI+XG4gICAgICAgICAgICAke3RoaXMuX3VuaXRTeXN0ZW0gPT09IFwibWV0cmljXCJcbiAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvbl9tZXRlcnNcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvbl9mZWV0XCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl91bml0U3lzdGVtVmFsdWV9XG4gICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl91bml0U3lzdGVtQ2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1ldHJpY1wiIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9PlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudW5pdF9zeXN0ZW1fbWV0cmljXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubWV0cmljX2V4YW1wbGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiaW1wZXJpYWxcIiAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfT5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtX2ltcGVyaWFsXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuaW1wZXJpYWxfZXhhbXBsZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX3NhdmV9IC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9PlxuICAgICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5maW5pc2hcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1pbnB1dFwiKSEuZm9jdXMoKSxcbiAgICAgIDEwMFxuICAgICk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fc2F2ZShldik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIltuYW1lPXRpbWVab25lXVwiXG4gICAgKSBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICBpbnB1dC5pbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZXpvbmVMaXN0RWwoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbmFtZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fbmFtZVxuICAgICAgOiB0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5sb2NhdGlvbl9uYW1lX2RlZmF1bHRcIlxuICAgICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2xvY2F0aW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uIHx8IGFtc3RlcmRhbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9lbGV2YXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uICE9PSB1bmRlZmluZWQgPyB0aGlzLl9lbGV2YXRpb24gOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RpbWVab25lVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVab25lO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3VuaXRTeXN0ZW1WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdFN5c3RlbSAhPT0gdW5kZWZpbmVkID8gdGhpcy5fdW5pdFN5c3RlbSA6IFwibWV0cmljXCI7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpc1tgXyR7dGFyZ2V0Lm5hbWV9YF0gPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvbkNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGV2LmN1cnJlbnRUYXJnZXQubG9jYXRpb247XG4gIH1cblxuICBwcml2YXRlIF91bml0U3lzdGVtQ2hhbmdlZChcbiAgICBldjogUG9seW1lckNoYW5nZWRFdmVudDxDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXT5cbiAgKSB7XG4gICAgdGhpcy5fdW5pdFN5c3RlbSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RldGVjdCgpIHtcbiAgICB0aGlzLl93b3JraW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgZGV0ZWN0Q29yZUNvbmZpZyh0aGlzLm9wcCk7XG4gICAgICBpZiAodmFsdWVzLmxhdGl0dWRlICYmIHZhbHVlcy5sb25naXR1ZGUpIHtcbiAgICAgICAgdGhpcy5fbG9jYXRpb24gPSBbTnVtYmVyKHZhbHVlcy5sYXRpdHVkZSksIE51bWJlcih2YWx1ZXMubG9uZ2l0dWRlKV07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLmVsZXZhdGlvbikge1xuICAgICAgICB0aGlzLl9lbGV2YXRpb24gPSBTdHJpbmcodmFsdWVzLmVsZXZhdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnVuaXRfc3lzdGVtKSB7XG4gICAgICAgIHRoaXMuX3VuaXRTeXN0ZW0gPSB2YWx1ZXMudW5pdF9zeXN0ZW07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnRpbWVfem9uZSkge1xuICAgICAgICB0aGlzLl90aW1lWm9uZSA9IHZhbHVlcy50aW1lX3pvbmU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIGRldGVjdCBsb2NhdGlvbiBpbmZvcm1hdGlvbjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fd29ya2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3dvcmtpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2xvY2F0aW9uVmFsdWU7XG4gICAgICBhd2FpdCBzYXZlQ29yZUNvbmZpZyh0aGlzLm9wcCwge1xuICAgICAgICBsb2NhdGlvbl9uYW1lOiB0aGlzLl9uYW1lVmFsdWUsXG4gICAgICAgIGxhdGl0dWRlOiBsb2NhdGlvblswXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBsb2NhdGlvblsxXSxcbiAgICAgICAgZWxldmF0aW9uOiBOdW1iZXIodGhpcy5fZWxldmF0aW9uVmFsdWUpLFxuICAgICAgICB1bml0X3N5c3RlbTogdGhpcy5fdW5pdFN5c3RlbVZhbHVlLFxuICAgICAgICB0aW1lX3pvbmU6IHRoaXMuX3RpbWVab25lVmFsdWUgfHwgXCJVVENcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb25ib2FyZENvcmVDb25maWdTdGVwKHRoaXMub3BwKTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcIm9uYm9hcmRpbmctc3RlcFwiLCB7XG4gICAgICAgIHR5cGU6IFwiY29yZV9jb25maWdcIixcbiAgICAgICAgcmVzdWx0LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl93b3JraW5nID0gZmFsc2U7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIHNhdmU6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbjogMCAtOHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAubWlkZGxlLXRleHQge1xuICAgICAgICBtYXJnaW46IDI0cHggMDtcbiAgICAgIH1cblxuICAgICAgLnJvdyA+ICoge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9uYm9hcmRpbmctY29yZS1jb25maWdcIjogT25ib2FyZGluZ0NvcmVDb25maWc7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFxQkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUNBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsR0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGlNQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esd01BQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFRQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFLQSxlQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBREE7QUFLQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFRQTs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7O0FBT0E7O0FBSUE7QUFDQTs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBYUE7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7OztBQUtBO0FBQ0E7O0FBSUE7Ozs7Ozs7QUFTQTtBQUNBOzs7QUF6SEE7QUErSEE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQTs7O0FBbFJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=