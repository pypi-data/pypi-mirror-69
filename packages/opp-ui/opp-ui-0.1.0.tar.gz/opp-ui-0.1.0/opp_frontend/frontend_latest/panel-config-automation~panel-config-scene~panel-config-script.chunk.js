(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation~panel-config-scene~panel-config-script"],{

/***/ "./src/common/entity/binary_sensor_icon.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
/*! exports provided: binarySensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySensorIcon", function() { return binarySensorIcon; });
/** Return an icon representing a binary sensor state. */
const binarySensorIcon = state => {
  const activated = state.state && state.state === "off";

  switch (state.attributes.device_class) {
    case "battery":
      return activated ? "opp:battery" : "opp:battery-outline";

    case "cold":
      return activated ? "opp:thermometer" : "opp:snowflake";

    case "connectivity":
      return activated ? "opp:server-network-off" : "opp:server-network";

    case "door":
      return activated ? "opp:door-closed" : "opp:door-open";

    case "garage_door":
      return activated ? "opp:garage" : "opp:garage-open";

    case "gas":
    case "power":
    case "problem":
    case "safety":
    case "smoke":
      return activated ? "opp:shield-check" : "opp:alert";

    case "heat":
      return activated ? "opp:thermometer" : "opp:fire";

    case "light":
      return activated ? "opp:brightness-5" : "opp:brightness-7";

    case "lock":
      return activated ? "opp:lock" : "opp:lock-open";

    case "moisture":
      return activated ? "opp:water-off" : "opp:water";

    case "motion":
      return activated ? "opp:walk" : "opp:run";

    case "occupancy":
      return activated ? "opp:home-outline" : "opp:home";

    case "opening":
      return activated ? "opp:square" : "opp:square-outline";

    case "plug":
      return activated ? "opp:power-plug-off" : "opp:power-plug";

    case "presence":
      return activated ? "opp:home-outline" : "opp:home";

    case "sound":
      return activated ? "opp:music-note-off" : "opp:music-note";

    case "vibration":
      return activated ? "opp:crop-portrait" : "opp:vibrate";

    case "window":
      return activated ? "opp:window-closed" : "opp:window-open";

    default:
      return activated ? "opp:radiobox-blank" : "opp:checkbox-marked-circle";
  }
};

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/entity/cover_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
/*! exports provided: coverIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coverIcon", function() { return coverIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a cover state. */

const coverIcon = state => {
  const open = state.state !== "closed";

  switch (state.attributes.device_class) {
    case "garage":
      return open ? "opp:garage-open" : "opp:garage";

    case "door":
      return open ? "opp:door-open" : "opp:door-closed";

    case "shutter":
      return open ? "opp:window-shutter-open" : "opp:window-shutter";

    case "blind":
      return open ? "opp:blinds-open" : "opp:blinds";

    case "window":
      return open ? "opp:window-open" : "opp:window-closed";

    default:
      return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("cover", state.state);
  }
};

/***/ }),

/***/ "./src/common/entity/domain_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
/*! exports provided: domainIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainIcon", function() { return domainIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/**
 * Return the icon to be used for a domain.
 *
 * Optionally pass in a state to influence the domain icon.
 */

const fixedIcons = {
  alert: "opp:alert",
  alexa: "opp:amazon-alexa",
  automation: "opp:robot",
  calendar: "opp:calendar",
  camera: "opp:video",
  climate: "opp:thermostat",
  configurator: "opp:settings",
  conversation: "opp:text-to-speech",
  counter: "opp:counter",
  device_tracker: "opp:account",
  fan: "opp:fan",
  google_assistant: "opp:google-assistant",
  group: "opp:google-circles-communities",
  history_graph: "opp:chart-line",
  openpeerpower: "opp:open-peer-power",
  homekit: "opp:home-automation",
  image_processing: "opp:image-filter-frames",
  input_boolean: "opp:drawing",
  input_datetime: "opp:calendar-clock",
  input_number: "opp:ray-vertex",
  input_select: "opp:format-list-bulleted",
  input_text: "opp:textbox",
  light: "opp:lightbulb",
  mailbox: "opp:mailbox",
  notify: "opp:comment-alert",
  persistent_notification: "opp:bell",
  person: "opp:account",
  plant: "opp:flower",
  proximity: "opp:apple-safari",
  remote: "opp:remote",
  scene: "opp:palette",
  script: "opp:script-text",
  sensor: "opp:eye",
  simple_alarm: "opp:bell",
  sun: "opp:white-balance-sunny",
  switch: "opp:flash",
  timer: "opp:timer",
  updater: "opp:cloud-upload",
  vacuum: "opp:robot-vacuum",
  water_heater: "opp:thermometer",
  weather: "opp:weather-cloudy",
  weblink: "opp:open-in-new",
  zone: "opp:map-marker-radius"
};
const domainIcon = (domain, state) => {
  if (domain in fixedIcons) {
    return fixedIcons[domain];
  }

  switch (domain) {
    case "alarm_control_panel":
      switch (state) {
        case "armed_home":
          return "opp:bell-plus";

        case "armed_night":
          return "opp:bell-sleep";

        case "disarmed":
          return "opp:bell-outline";

        case "triggered":
          return "opp:bell-ring";

        default:
          return "opp:bell";
      }

    case "binary_sensor":
      return state && state === "off" ? "opp:radiobox-blank" : "opp:checkbox-marked-circle";

    case "cover":
      return state === "closed" ? "opp:window-closed" : "opp:window-open";

    case "lock":
      return state && state === "unlocked" ? "opp:lock-open" : "opp:lock";

    case "media_player":
      return state && state !== "off" && state !== "idle" ? "opp:cast-connected" : "opp:cast";

    case "zwave":
      switch (state) {
        case "dead":
          return "opp:emoticon-dead";

        case "sleeping":
          return "opp:sleep";

        case "initializing":
          return "opp:timer-sand";

        default:
          return "opp:z-wave";
      }

    default:
      // tslint:disable-next-line
      console.warn("Unable to find icon for domain " + domain + " (" + state + ")");
      return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }
};

/***/ }),

/***/ "./src/common/entity/input_dateteime_icon.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
/*! exports provided: inputDateTimeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDateTimeIcon", function() { return inputDateTimeIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing an input datetime state. */

const inputDateTimeIcon = state => {
  if (!state.attributes.has_date) {
    return "opp:clock";
  }

  if (!state.attributes.has_time) {
    return "opp:calendar";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["domainIcon"])("input_datetime");
};

/***/ }),

/***/ "./src/common/entity/sensor_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
/*! exports provided: sensorIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sensorIcon", function() { return sensorIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a sensor state. */


const fixedDeviceClassIcons = {
  humidity: "opp:water-percent",
  illuminance: "opp:brightness-5",
  temperature: "opp:thermometer",
  pressure: "opp:gauge",
  power: "opp:flash",
  signal_strength: "opp:wifi"
};
const sensorIcon = state => {
  const dclass = state.attributes.device_class;

  if (dclass && dclass in fixedDeviceClassIcons) {
    return fixedDeviceClassIcons[dclass];
  }

  if (dclass === "battery") {
    const battery = Number(state.state);

    if (isNaN(battery)) {
      return "opp:battery-unknown";
    }

    const batteryRound = Math.round(battery / 10) * 10;

    if (batteryRound >= 100) {
      return "opp:battery";
    }

    if (batteryRound <= 0) {
      return "opp:battery-alert";
    } // Will return one of the following icons: (listed so extractor picks up)
    // opp:battery-10
    // opp:battery-20
    // opp:battery-30
    // opp:battery-40
    // opp:battery-50
    // opp:battery-60
    // opp:battery-70
    // opp:battery-80
    // opp:battery-90
    // We obscure 'opp' in iconname so this name does not get picked up


    return `${"opp"}:battery-${batteryRound}`;
  }

  const unit = state.attributes.unit_of_measurement;

  if (unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] || unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]) {
    return "opp:thermometer";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["domainIcon"])("sensor");
};

/***/ }),

/***/ "./src/common/entity/state_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
/*! exports provided: stateIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateIcon", function() { return stateIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts");
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cover_icon */ "./src/common/entity/cover_icon.ts");
/* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts");
/* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts");
/** Return an icon representing a state. */







const domainIcons = {
  binary_sensor: _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_1__["binarySensorIcon"],
  cover: _cover_icon__WEBPACK_IMPORTED_MODULE_4__["coverIcon"],
  sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_5__["sensorIcon"],
  input_datetime: _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__["inputDateTimeIcon"]
};
const stateIcon = state => {
  if (!state) {
    return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }

  if (state.attributes.icon) {
    return state.attributes.icon;
  }

  const domain = Object(_compute_domain__WEBPACK_IMPORTED_MODULE_2__["computeDomain"])(state.entity_id);

  if (domain in domainIcons) {
    return domainIcons[domain](state);
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_3__["domainIcon"])(domain, state.state);
};

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

/***/ "./src/components/device/op-device-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/device/op-device-picker.ts ***!
  \***************************************************/
/*! exports provided: OpDevicePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDevicePicker", function() { return OpDevicePicker; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
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
















const rowRenderer = (root, _owner, model) => {
  if (!root.firstElementChild) {
    root.innerHTML = `
    <style>
      paper-item {
        margin: -10px 0;
        padding: 0;
      }
    </style>
    <paper-item>
      <paper-item-body two-line="">    
        <div class='name'>[[item.name]]</div>
        <div secondary>[[item.area]]</div>
      </paper-item-body>
    </paper-item>
    `;
  }

  root.querySelector(".name").textContent = model.item.name;
  root.querySelector("[secondary]").textContent = model.item.area;
};

let OpDevicePicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("op-device-picker")], function (_initialize, _SubscribeMixin) {
  class OpDevicePicker extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpDevicePicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean
      })],
      key: "_opened",
      value: void 0
    }, {
      kind: "field",
      key: "_getDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])((devices, areas, entities, includeDomains, excludeDomains, includeDeviceClasses) => {
          if (!devices.length) {
            return [];
          }

          const deviceEntityLookup = {};

          for (const entity of entities) {
            if (!entity.device_id) {
              continue;
            }

            if (!(entity.device_id in deviceEntityLookup)) {
              deviceEntityLookup[entity.device_id] = [];
            }

            deviceEntityLookup[entity.device_id].push(entity);
          }

          const areaLookup = {};

          for (const area of areas) {
            areaLookup[area.area_id] = area;
          }

          let inputDevices = [...devices];

          if (includeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => includeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__["computeDomain"])(entity.entity_id)));
            });
          }

          if (excludeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return true;
              }

              return entities.every(entity => !excludeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__["computeDomain"])(entity.entity_id)));
            });
          }

          if (includeDeviceClasses) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => {
                const stateObj = this.opp.states[entity.entity_id];

                if (!stateObj) {
                  return false;
                }

                return stateObj.attributes.device_class && includeDeviceClasses.includes(stateObj.attributes.device_class);
              });
            });
          }

          const outputDevices = inputDevices.map(device => {
            return {
              id: device.id,
              name: Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["computeDeviceName"])(device, this.opp, deviceEntityLookup[device.id]),
              area: device.area_id ? areaLookup[device.area_id].name : "No area"
            };
          });

          if (outputDevices.length === 1) {
            return outputDevices;
          }

          return outputDevices.sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(a.name || "", b.name || ""));
        });
      }

    }, {
      kind: "method",
      key: "oppSubscribe",
      value:
      /**
       * Show only devices with entities from specific domains.
       * @type {Array}
       * @attr include-domains
       */

      /**
       * Show no devices with entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */

      /**
       * Show only deviced with entities of these device classes.
       * @type {Array}
       * @attr include-device-classes
       */
      function oppSubscribe() {
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"])(this.opp.connection, devices => {
          this.devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_11__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this.areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_12__["subscribeEntityRegistry"])(this.opp.connection, entities => {
          this.entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.devices || !this.areas || !this.entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]``;
        }

        const devices = this._getDevices(this.devices, this.areas, this.entities, this.includeDomains, this.excludeDomains, this.includeDeviceClasses);

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <vaadin-combo-box-light
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        .items=${devices}
        .value=${this._value}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      >
        <paper-input
          .label=${this.label === undefined && this.opp ? this.opp.localize("ui.components.device-picker.device") : this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.device-picker.clear")}
                  slot="suffix"
                  class="clear-button"
                  icon="opp:close"
                  @click=${this._clearValue}
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              ` : ""}
          ${devices.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.device-picker.show_devices")}
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "opp:menu-up" : "opp:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              ` : ""}
        </paper-input>
      </vaadin-combo-box-light>
    `;
      }
    }, {
      kind: "method",
      key: "_clearValue",
      value: function _clearValue(ev) {
        ev.stopPropagation();

        this._setValue("");
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || "";
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_deviceChanged",
      value: function _deviceChanged(ev) {
        const newValue = ev.detail.value;

        if (newValue !== this._value) {
          this._setValue(newValue);
        }
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(value) {
        this.value = value;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "value-changed", {
            value
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_7__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]));

/***/ }),

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

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

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: computeDeviceName, fallbackDeviceName, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");



const computeDeviceName = (device, opp, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(opp, entities) || opp.localize("ui.panel.config.devices.unnamed_device");
};
const fallbackDeviceName = (opp, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = opp.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const updateDeviceRegistryEntry = (opp, deviceId, updates) => opp.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (opp, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = opp.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (opp, entityId, updates) => opp.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (opp, entityId) => opp.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/layouts/op-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/op-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Open Peer Power doesn't use it.
transform: translate(0) is added.
*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class OpAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }

}

customElements.define("op-app-layout", OpAppLayout);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb25+cGFuZWwtY29uZmlnLXNjZW5lfnBhbmVsLWNvbmZpZy1zY3JpcHQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvaW5wdXRfZGF0ZXRlaW1lX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2Uvb3AtZGV2aWNlLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9vcC1hcHAtbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBiaW5hcnkgc2Vuc29yIHN0YXRlLiAqL1xuXG5leHBvcnQgY29uc3QgYmluYXJ5U2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpiYXR0ZXJ5XCIgOiBcIm9wcDpiYXR0ZXJ5LW91dGxpbmVcIjtcbiAgICBjYXNlIFwiY29sZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpzbm93Zmxha2VcIjtcbiAgICBjYXNlIFwiY29ubmVjdGl2aXR5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2VydmVyLW5ldHdvcmstb2ZmXCIgOiBcIm9wcDpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6ZG9vci1jbG9zZWRcIiA6IFwib3BwOmRvb3Itb3BlblwiO1xuICAgIGNhc2UgXCJnYXJhZ2VfZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmdhcmFnZVwiIDogXCJvcHA6Z2FyYWdlLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FzXCI6XG4gICAgY2FzZSBcInBvd2VyXCI6XG4gICAgY2FzZSBcInByb2JsZW1cIjpcbiAgICBjYXNlIFwic2FmZXR5XCI6XG4gICAgY2FzZSBcInNtb2tlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2hpZWxkLWNoZWNrXCIgOiBcIm9wcDphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6dGhlcm1vbWV0ZXJcIiA6IFwib3BwOmZpcmVcIjtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpicmlnaHRuZXNzLTVcIiA6IFwib3BwOmJyaWdodG5lc3MtN1wiO1xuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6bG9ja1wiIDogXCJvcHA6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2F0ZXItb2ZmXCIgOiBcIm9wcDp3YXRlclwiO1xuICAgIGNhc2UgXCJtb3Rpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3YWxrXCIgOiBcIm9wcDpydW5cIjtcbiAgICBjYXNlIFwib2NjdXBhbmN5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6aG9tZS1vdXRsaW5lXCIgOiBcIm9wcDpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzcXVhcmVcIiA6IFwib3BwOnNxdWFyZS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcInBsdWdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpwb3dlci1wbHVnLW9mZlwiIDogXCJvcHA6cG93ZXItcGx1Z1wiO1xuICAgIGNhc2UgXCJwcmVzZW5jZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOm11c2ljLW5vdGUtb2ZmXCIgOiBcIm9wcDptdXNpYy1ub3RlXCI7XG4gICAgY2FzZSBcInZpYnJhdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmNyb3AtcG9ydHJhaXRcIiA6IFwib3BwOnZpYnJhdGVcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnJhZGlvYm94LWJsYW5rXCIgOiBcIm9wcDpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG4gIH1cbn07XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgY292ZXIgc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBjb3Zlckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJnYXJhZ2VcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6Z2FyYWdlLW9wZW5cIiA6IFwib3BwOmdhcmFnZVwiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmRvb3Itb3BlblwiIDogXCJvcHA6ZG9vci1jbG9zZWRcIjtcbiAgICBjYXNlIFwic2h1dHRlclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctc2h1dHRlci1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctc2h1dHRlclwiO1xuICAgIGNhc2UgXCJibGluZFwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpibGluZHMtb3BlblwiIDogXCJvcHA6YmxpbmRzXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctb3BlblwiIDogXCJvcHA6d2luZG93LWNsb3NlZFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZG9tYWluSWNvbihcImNvdmVyXCIsIHN0YXRlLnN0YXRlKTtcbiAgfVxufTtcbiIsIi8qKlxuICogUmV0dXJuIHRoZSBpY29uIHRvIGJlIHVzZWQgZm9yIGEgZG9tYWluLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHN0YXRlIHRvIGluZmx1ZW5jZSB0aGUgZG9tYWluIGljb24uXG4gKi9cbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgZml4ZWRJY29ucyA9IHtcbiAgYWxlcnQ6IFwib3BwOmFsZXJ0XCIsXG4gIGFsZXhhOiBcIm9wcDphbWF6b24tYWxleGFcIixcbiAgYXV0b21hdGlvbjogXCJvcHA6cm9ib3RcIixcbiAgY2FsZW5kYXI6IFwib3BwOmNhbGVuZGFyXCIsXG4gIGNhbWVyYTogXCJvcHA6dmlkZW9cIixcbiAgY2xpbWF0ZTogXCJvcHA6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwib3BwOnNldHRpbmdzXCIsXG4gIGNvbnZlcnNhdGlvbjogXCJvcHA6dGV4dC10by1zcGVlY2hcIixcbiAgY291bnRlcjogXCJvcHA6Y291bnRlclwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJvcHA6YWNjb3VudFwiLFxuICBmYW46IFwib3BwOmZhblwiLFxuICBnb29nbGVfYXNzaXN0YW50OiBcIm9wcDpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcIm9wcDpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLFxuICBoaXN0b3J5X2dyYXBoOiBcIm9wcDpjaGFydC1saW5lXCIsXG4gIG9wZW5wZWVycG93ZXI6IFwib3BwOm9wZW4tcGVlci1wb3dlclwiLFxuICBob21la2l0OiBcIm9wcDpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJvcHA6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLFxuICBpbnB1dF9ib29sZWFuOiBcIm9wcDpkcmF3aW5nXCIsXG4gIGlucHV0X2RhdGV0aW1lOiBcIm9wcDpjYWxlbmRhci1jbG9ja1wiLFxuICBpbnB1dF9udW1iZXI6IFwib3BwOnJheS12ZXJ0ZXhcIixcbiAgaW5wdXRfc2VsZWN0OiBcIm9wcDpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLFxuICBpbnB1dF90ZXh0OiBcIm9wcDp0ZXh0Ym94XCIsXG4gIGxpZ2h0OiBcIm9wcDpsaWdodGJ1bGJcIixcbiAgbWFpbGJveDogXCJvcHA6bWFpbGJveFwiLFxuICBub3RpZnk6IFwib3BwOmNvbW1lbnQtYWxlcnRcIixcbiAgcGVyc2lzdGVudF9ub3RpZmljYXRpb246IFwib3BwOmJlbGxcIixcbiAgcGVyc29uOiBcIm9wcDphY2NvdW50XCIsXG4gIHBsYW50OiBcIm9wcDpmbG93ZXJcIixcbiAgcHJveGltaXR5OiBcIm9wcDphcHBsZS1zYWZhcmlcIixcbiAgcmVtb3RlOiBcIm9wcDpyZW1vdGVcIixcbiAgc2NlbmU6IFwib3BwOnBhbGV0dGVcIixcbiAgc2NyaXB0OiBcIm9wcDpzY3JpcHQtdGV4dFwiLFxuICBzZW5zb3I6IFwib3BwOmV5ZVwiLFxuICBzaW1wbGVfYWxhcm06IFwib3BwOmJlbGxcIixcbiAgc3VuOiBcIm9wcDp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJvcHA6Zmxhc2hcIixcbiAgdGltZXI6IFwib3BwOnRpbWVyXCIsXG4gIHVwZGF0ZXI6IFwib3BwOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwib3BwOnJvYm90LXZhY3V1bVwiLFxuICB3YXRlcl9oZWF0ZXI6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHdlYXRoZXI6IFwib3BwOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwib3BwOm9wZW4taW4tbmV3XCIsXG4gIHpvbmU6IFwib3BwOm1hcC1tYXJrZXItcmFkaXVzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZG9tYWluSWNvbiA9IChkb21haW46IHN0cmluZywgc3RhdGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoZG9tYWluIGluIGZpeGVkSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWRJY29uc1tkb21haW5dO1xuICB9XG5cbiAgc3dpdGNoIChkb21haW4pIHtcbiAgICBjYXNlIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiYXJtZWRfaG9tZVwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXBsdXNcIjtcbiAgICAgICAgY2FzZSBcImFybWVkX25pZ2h0XCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtb3V0bGluZVwiO1xuICAgICAgICBjYXNlIFwidHJpZ2dlcmVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcmluZ1wiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJvcHA6cmFkaW9ib3gtYmxhbmtcIlxuICAgICAgICA6IFwib3BwOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcblxuICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgcmV0dXJuIHN0YXRlID09PSBcImNsb3NlZFwiID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcblxuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwidW5sb2NrZWRcIiA/IFwib3BwOmxvY2stb3BlblwiIDogXCJvcHA6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlICE9PSBcIm9mZlwiICYmIHN0YXRlICE9PSBcImlkbGVcIlxuICAgICAgICA/IFwib3BwOmNhc3QtY29ubmVjdGVkXCJcbiAgICAgICAgOiBcIm9wcDpjYXN0XCI7XG5cbiAgICBjYXNlIFwiendhdmVcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImRlYWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6c2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDp0aW1lci1zYW5kXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYW4gaW5wdXQgZGF0ZXRpbWUgc3RhdGUuICovXG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dERhdGVUaW1lSWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgcmV0dXJuIFwib3BwOmNsb2NrXCI7XG4gIH1cbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgcmV0dXJuIFwib3BwOmNhbGVuZGFyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJpbnB1dF9kYXRldGltZVwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc2Vuc29yIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IFVOSVRfQywgVU5JVF9GIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuY29uc3QgZml4ZWREZXZpY2VDbGFzc0ljb25zID0ge1xuICBodW1pZGl0eTogXCJvcHA6d2F0ZXItcGVyY2VudFwiLFxuICBpbGx1bWluYW5jZTogXCJvcHA6YnJpZ2h0bmVzcy01XCIsXG4gIHRlbXBlcmF0dXJlOiBcIm9wcDp0aGVybW9tZXRlclwiLFxuICBwcmVzc3VyZTogXCJvcHA6Z2F1Z2VcIixcbiAgcG93ZXI6IFwib3BwOmZsYXNoXCIsXG4gIHNpZ25hbF9zdHJlbmd0aDogXCJvcHA6d2lmaVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbnNvckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBjb25zdCBkY2xhc3MgPSBzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcztcblxuICBpZiAoZGNsYXNzICYmIGRjbGFzcyBpbiBmaXhlZERldmljZUNsYXNzSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWREZXZpY2VDbGFzc0ljb25zW2RjbGFzc107XG4gIH1cbiAgaWYgKGRjbGFzcyA9PT0gXCJiYXR0ZXJ5XCIpIHtcbiAgICBjb25zdCBiYXR0ZXJ5ID0gTnVtYmVyKHN0YXRlLnN0YXRlKTtcbiAgICBpZiAoaXNOYU4oYmF0dGVyeSkpIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5LXVua25vd25cIjtcbiAgICB9XG4gICAgY29uc3QgYmF0dGVyeVJvdW5kID0gTWF0aC5yb3VuZChiYXR0ZXJ5IC8gMTApICogMTA7XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA+PSAxMDApIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5XCI7XG4gICAgfVxuICAgIGlmIChiYXR0ZXJ5Um91bmQgPD0gMCkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnktYWxlcnRcIjtcbiAgICB9XG4gICAgLy8gV2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnM6IChsaXN0ZWQgc28gZXh0cmFjdG9yIHBpY2tzIHVwKVxuICAgIC8vIG9wcDpiYXR0ZXJ5LTEwXG4gICAgLy8gb3BwOmJhdHRlcnktMjBcbiAgICAvLyBvcHA6YmF0dGVyeS0zMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTQwXG4gICAgLy8gb3BwOmJhdHRlcnktNTBcbiAgICAvLyBvcHA6YmF0dGVyeS02MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTcwXG4gICAgLy8gb3BwOmJhdHRlcnktODBcbiAgICAvLyBvcHA6YmF0dGVyeS05MFxuICAgIC8vIFdlIG9ic2N1cmUgJ29wcCcgaW4gaWNvbm5hbWUgc28gdGhpcyBuYW1lIGRvZXMgbm90IGdldCBwaWNrZWQgdXBcbiAgICByZXR1cm4gYCR7XCJvcHBcIn06YmF0dGVyeS0ke2JhdHRlcnlSb3VuZH1gO1xuICB9XG5cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgaWYgKHVuaXQgPT09IFVOSVRfQyB8fCB1bml0ID09PSBVTklUX0YpIHtcbiAgICByZXR1cm4gXCJvcHA6dGhlcm1vbWV0ZXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcInNlbnNvclwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgYmluYXJ5U2Vuc29ySWNvbiB9IGZyb20gXCIuL2JpbmFyeV9zZW5zb3JfaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgY292ZXJJY29uIH0gZnJvbSBcIi4vY292ZXJfaWNvblwiO1xuaW1wb3J0IHsgc2Vuc29ySWNvbiB9IGZyb20gXCIuL3NlbnNvcl9pY29uXCI7XG5pbXBvcnQgeyBpbnB1dERhdGVUaW1lSWNvbiB9IGZyb20gXCIuL2lucHV0X2RhdGV0ZWltZV9pY29uXCI7XG5cbmNvbnN0IGRvbWFpbkljb25zID0ge1xuICBiaW5hcnlfc2Vuc29yOiBiaW5hcnlTZW5zb3JJY29uLFxuICBjb3ZlcjogY292ZXJJY29uLFxuICBzZW5zb3I6IHNlbnNvckljb24sXG4gIGlucHV0X2RhdGV0aW1lOiBpbnB1dERhdGVUaW1lSWNvbixcbn07XG5cbmV4cG9ydCBjb25zdCBzdGF0ZUljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbiAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMuaWNvbikge1xuICAgIHJldHVybiBzdGF0ZS5hdHRyaWJ1dGVzLmljb247XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlRG9tYWluKHN0YXRlLmVudGl0eV9pZCk7XG5cbiAgaWYgKGRvbWFpbiBpbiBkb21haW5JY29ucykge1xuICAgIHJldHVybiBkb21haW5JY29uc1tkb21haW5dKHN0YXRlKTtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihkb21haW4sIHN0YXRlLnN0YXRlKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxuICBjb21wdXRlRGV2aWNlTmFtZSxcbiAgRGV2aWNlRW50aXR5TG9va3VwLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEVudGl0eVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuXG5pbnRlcmZhY2UgRGV2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhcmVhOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IHJvd1JlbmRlcmVyID0gKHJvb3Q6IEhUTUxFbGVtZW50LCBfb3duZXIsIG1vZGVsOiB7IGl0ZW06IERldmljZSB9KSA9PiB7XG4gIGlmICghcm9vdC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IC0xMHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj4gICAgXG4gICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbaXRlbS5uYW1lXV08L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmFyZWFdXTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuICAgIGA7XG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLm5hbWUhO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJbc2Vjb25kYXJ5XVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLmFyZWEhO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1kZXZpY2UtcGlja2VyXCIpXG5leHBvcnQgY2xhc3MgT3BEZXZpY2VQaWNrZXIgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZXM/OiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcbiAgLyoqXG4gICAqIFNob3cgb25seSBkZXZpY2VzIHdpdGggZW50aXRpZXMgZnJvbSBzcGVjaWZpYyBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGluY2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNob3cgbm8gZGV2aWNlcyB3aXRoIGVudGl0aWVzIG9mIHRoZXNlIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgZXhjbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImV4Y2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU2hvdyBvbmx5IGRldmljZWQgd2l0aCBlbnRpdGllcyBvZiB0aGVzZSBkZXZpY2UgY2xhc3Nlcy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAYXR0ciBpbmNsdWRlLWRldmljZS1jbGFzc2VzXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZGV2aWNlLWNsYXNzZXNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURldmljZUNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBwcml2YXRlIF9vcGVuZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2dldERldmljZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGluY2x1ZGVEb21haW5zOiB0aGlzW1wiaW5jbHVkZURvbWFpbnNcIl0sXG4gICAgICBleGNsdWRlRG9tYWluczogdGhpc1tcImV4Y2x1ZGVEb21haW5zXCJdLFxuICAgICAgaW5jbHVkZURldmljZUNsYXNzZXM6IHRoaXNbXCJpbmNsdWRlRGV2aWNlQ2xhc3Nlc1wiXVxuICAgICk6IERldmljZVtdID0+IHtcbiAgICAgIGlmICghZGV2aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0eUxvb2t1cCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgaWYgKCFlbnRpdHkuZGV2aWNlX2lkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiBkZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXJlYUxvb2t1cDogeyBbYXJlYUlkOiBzdHJpbmddOiBBcmVhUmVnaXN0cnlFbnRyeSB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGFyZWEgb2YgYXJlYXMpIHtcbiAgICAgICAgYXJlYUxvb2t1cFthcmVhLmFyZWFfaWRdID0gYXJlYTtcbiAgICAgIH1cblxuICAgICAgbGV0IGlucHV0RGV2aWNlcyA9IFsuLi5kZXZpY2VzXTtcblxuICAgICAgaWYgKGluY2x1ZGVEb21haW5zKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXS5zb21lKChlbnRpdHkpID0+XG4gICAgICAgICAgICBpbmNsdWRlRG9tYWlucy5pbmNsdWRlcyhjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhjbHVkZURvbWFpbnMpIHtcbiAgICAgICAgaW5wdXREZXZpY2VzID0gaW5wdXREZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2RW50aXRpZXMgPSBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXTtcbiAgICAgICAgICBpZiAoIWRldkVudGl0aWVzIHx8ICFkZXZFbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZW50aXRpZXMuZXZlcnkoXG4gICAgICAgICAgICAoZW50aXR5KSA9PlxuICAgICAgICAgICAgICAhZXhjbHVkZURvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGVEZXZpY2VDbGFzc2VzKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlLmlkXS5zb21lKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5vcHAuc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcyAmJlxuICAgICAgICAgICAgICBpbmNsdWRlRGV2aWNlQ2xhc3Nlcy5pbmNsdWRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRwdXREZXZpY2VzID0gaW5wdXREZXZpY2VzLm1hcCgoZGV2aWNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGRldmljZS5pZCxcbiAgICAgICAgICBuYW1lOiBjb21wdXRlRGV2aWNlTmFtZShcbiAgICAgICAgICAgIGRldmljZSxcbiAgICAgICAgICAgIHRoaXMub3BwLFxuICAgICAgICAgICAgZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF1cbiAgICAgICAgICApLFxuICAgICAgICAgIGFyZWE6IGRldmljZS5hcmVhX2lkID8gYXJlYUxvb2t1cFtkZXZpY2UuYXJlYV9pZF0ubmFtZSA6IFwiTm8gYXJlYVwiLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpZiAob3V0cHV0RGV2aWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dERldmljZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0RGV2aWNlcy5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEubmFtZSB8fCBcIlwiLCBiLm5hbWUgfHwgXCJcIikpO1xuICAgIH1cbiAgKTtcblxuICBwdWJsaWMgb3BwU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiEsIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IGRldmljZXM7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLm9wcC5jb25uZWN0aW9uISwgKGFyZWFzKSA9PiB7XG4gICAgICAgIHRoaXMuYXJlYXMgPSBhcmVhcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiEsIChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmRldmljZXMgfHwgIXRoaXMuYXJlYXMgfHwgIXRoaXMuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLl9nZXREZXZpY2VzKFxuICAgICAgdGhpcy5kZXZpY2VzLFxuICAgICAgdGhpcy5hcmVhcyxcbiAgICAgIHRoaXMuZW50aXRpZXMsXG4gICAgICB0aGlzLmluY2x1ZGVEb21haW5zLFxuICAgICAgdGhpcy5leGNsdWRlRG9tYWlucyxcbiAgICAgIHRoaXMuaW5jbHVkZURldmljZUNsYXNzZXNcbiAgICApO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiaWRcIlxuICAgICAgICBpdGVtLWlkLXBhdGg9XCJpZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIm5hbWVcIlxuICAgICAgICAuaXRlbXM9JHtkZXZpY2VzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLnJlbmRlcmVyPSR7cm93UmVuZGVyZXJ9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMub3BwXG4gICAgICAgICAgICA/IHRoaXMub3BwLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5kZXZpY2UtcGlja2VyLmRldmljZVwiKVxuICAgICAgICAgICAgOiB0aGlzLmxhYmVsfVxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy52YWx1ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5jbGVhclwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwib3BwOmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NsZWFyVmFsdWV9XG4gICAgICAgICAgICAgICAgICBuby1yaXBwbGVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke2RldmljZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5zaG93X2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJvcHA6bWVudS11cFwiIDogXCJvcHA6bWVudS1kb3duXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG9nZ2xlXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclZhbHVlKGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX3NldFZhbHVlKFwiXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGV2aWNlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZSB9KTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtZGV2aWNlLXBpY2tlclwiOiBPcERldmljZVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB2YWx1ZXM6IEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtc1xuKSA9PlxuICBvcHAuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBvcHAuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcmVhUmVnaXN0cnlFbnRyeSA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4vZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VFbnRpdHlMb29rdXAge1xuICBbZGV2aWNlSWQ6IHN0cmluZ106IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZURldmljZU5hbWUgPSAoXG4gIGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICBkZXZpY2UubmFtZV9ieV91c2VyIHx8XG4gICAgZGV2aWNlLm5hbWUgfHxcbiAgICAoZW50aXRpZXMgJiYgZmFsbGJhY2tEZXZpY2VOYW1lKG9wcCwgZW50aXRpZXMpKSB8fFxuICAgIG9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLnVubmFtZWRfZGV2aWNlXCIpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZmFsbGJhY2tEZXZpY2VOYW1lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzIHx8IFtdKSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSB0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiID8gZW50aXR5IDogZW50aXR5LmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IG9wcC5zdGF0ZXNbZW50aXR5SWRdO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gb3BwLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIG9wcC5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuVGhpcyBjb2RlIGlzIGNvcGllZCBmcm9tIGFwcC1oZWFkZXItbGF5b3V0LlxuJ2Z1bGxibGVlZCcgc3VwcG9ydCBpcyByZW1vdmVkIGFzIE9wZW4gUGVlciBQb3dlciBkb2Vzbid0IHVzZSBpdC5cbnRyYW5zZm9ybTogdHJhbnNsYXRlKDApIGlzIGFkZGVkLlxuKi9cbi8qXG4gIEZJWE1FKHBvbHltZXItbW9kdWxpemVyKTogdGhlIGFib3ZlIGNvbW1lbnRzIHdlcmUgZXh0cmFjdGVkXG4gIGZyb20gSFRNTCBhbmQgbWF5IGJlIG91dCBvZiBwbGFjZSBoZXJlLiBSZXZpZXcgdGhlbSBhbmRcbiAgdGhlbiBkZWxldGUgdGhpcyBjb21tZW50IVxuKi9cbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIE9wQXBwTGF5b3V0IGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KFwiYXBwLWhlYWRlci1sYXlvdXRcIikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGFwcC1oZWFkZXItbGF5b3V0IHRvIGhhdmUgaXRzIG93biBzdGFja2luZyBjb250ZXh0IHNvIHRoYXQgaXRzIHBhcmVudCBjYW5cbiAgICAgICAgICogY29udHJvbCB0aGUgc3RhY2tpbmcgb2YgaXQgcmVsYXRpdmUgdG8gb3RoZXIgZWxlbWVudHMgKGUuZy4gYXBwLWRyYXdlci1sYXlvdXQpLlxuICAgICAgICAgKiBUaGlzIGNvdWxkIGJlIGRvbmUgdXNpbmcgXFxgaXNvbGF0aW9uOiBpc29sYXRlXFxgLCBidXQgdGhhdCdzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICAgICAgICAgKiBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgICAgICAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKVxuICAgICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZ1xuICAgICAgICAgIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIC8qIFVzaW5nICd0cmFuc2Zvcm0nIHdpbGwgY2F1c2UgJ3Bvc2l0aW9uOiBmaXhlZCcgZWxlbWVudHMgdG8gYmVoYXZlIGxpa2VcbiAgICAgICAgICAgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScgcmVsYXRpdmUgdG8gdGhpcyBlbGVtZW50LiAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgICA8c2xvdCBpZD1cImhlYWRlclNsb3RcIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdCBpZD1cImZhYlwiIG5hbWU9XCJmYWJcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1hcHAtbGF5b3V0XCIsIE9wQXBwTGF5b3V0KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUNBO0FBNENBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBY0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBR0E7QUFoREE7QUFrREE7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUdBO0FBQ0E7QUFNQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQUE7QUFBQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQUE7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF6SEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7OztBQU9BOzs7Ozs7QUFPQTs7Ozs7QUF1R0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBeElBO0FBQUE7QUFBQTtBQUFBO0FBMklBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBU0E7O0FBR0E7Ozs7QUFNQTs7Ozs7QUFUQTtBQWdCQTs7QUFHQTs7O0FBS0E7Ozs7QUFSQTs7O0FBckNBO0FBc0RBO0FBNU1BO0FBQUE7QUFBQTtBQUFBO0FBK01BO0FBQ0E7QUFBQTtBQUNBO0FBak5BO0FBQUE7QUFBQTtBQUFBO0FBb05BO0FBQ0E7QUFyTkE7QUFBQTtBQUFBO0FBQUE7QUF3TkE7QUFDQTtBQXpOQTtBQUFBO0FBQUE7QUFBQTtBQTROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqT0E7QUFBQTtBQUFBO0FBQUE7QUFvT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXpPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNE9BOzs7Ozs7Ozs7O0FBQUE7QUFXQTtBQXZQQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBS0E7QUFEQTtBQUtBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQXdCQTtBQUtBO0FBTUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBaUJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0VBO0FBQ0E7QUF6RUE7QUFDQTtBQXlFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9