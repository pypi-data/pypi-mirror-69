(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-add-devices-page"],{

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

/***/ "./src/components/op-textarea.js":
/*!***************************************!*\
  !*** ./src/components/op-textarea.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/*
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/




class OpTextarea extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-textarea
        label="[[label]]"
        placeholder="[[placeholder]]"
        value="{{value}}"
      ></paper-textarea>
    `;
  }

  static get properties() {
    return {
      name: String,
      label: String,
      placeholder: String,
      value: {
        type: String,
        notify: true
      }
    };
  }

}

customElements.define("op-textarea", OpTextarea);

/***/ }),

/***/ "./src/panels/config/zha/zha-add-devices-page.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-add-devices-page.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_op_service_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/op-service-description */ "./src/components/op-service-description.js");
/* harmony import */ var _components_op_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/op-textarea */ "./src/components/op-textarea.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
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











let ZHAAddDevicesPage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["customElement"])("zha-add-devices-page")], function (_initialize, _LitElement) {
  class ZHAAddDevicesPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAAddDevicesPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_discoveredDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_formattedEvents",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_active",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()],
      key: "_showHelp",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_ieeeAddress",
      value: void 0
    }, {
      kind: "field",
      key: "_addDevicesTimeoutHandle",

      value() {
        return undefined;
      }

    }, {
      kind: "field",
      key: "_subscribed",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAAddDevicesPage.prototype), "connectedCallback", this).call(this);

        this.route && this.route.path && this.route.path !== "" ? this._ieeeAddress = this.route.path.substring(1) : this._ieeeAddress = undefined;

        this._subscribe();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(ZHAAddDevicesPage.prototype), "disconnectedCallback", this).call(this);

        this._unsubscribe();

        this._error = undefined;
        this._discoveredDevices = [];
        this._formattedEvents = "";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <opp-subpage
        header="${this.opp.localize("ui.panel.config.zha.add_device_page.header")}"
      >
        ${this._active ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <h2>
                <paper-spinner
                  ?active="${this._active}"
                  alt="Searching"
                ></paper-spinner>
                ${this.opp.localize("ui.panel.config.zha.add_device_page.spinner")}
              </h2>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <div class="card-actions">
                <mwc-button @click=${this._subscribe} class="search-button">
                  ${this.opp.localize("ui.panel.config.zha.add_device_page.search_again")}
                </mwc-button>
                <paper-icon-button
                  class="toggle-help-icon"
                  @click="${this._onHelpTap}"
                  icon="opp:help-circle"
                ></paper-icon-button>
                ${this._showHelp ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                      <op-service-description
                        .opp="${this.opp}"
                        domain="zha"
                        service="permit"
                        class="help-text"
                      />
                    ` : ""}
              </div>
            `}
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
              <div class="error">${this._error}</div>
            ` : ""}
        <div class="content-header"></div>
        <div class="content">
          ${this._discoveredDevices.length < 1 ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                <div class="discovery-text">
                  <h4>
                    ${this.opp.localize("ui.panel.config.zha.add_device_page.discovery_text")}
                  </h4>
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                ${this._discoveredDevices.map(device => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"]`
                    <zha-device-card
                      class="card"
                      .opp=${this.opp}
                      .device=${device}
                      .narrow=${!this.isWide}
                      .showHelp=${this._showHelp}
                      .showActions=${!this._active}
                      .showEntityDetail=${false}
                    ></zha-device-card>
                  `)}
              `}
        </div>
        <op-textarea class="events" value="${this._formattedEvents}">
        </op-textarea>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_handleMessage",
      value: function _handleMessage(message) {
        if (message.type === "log_output") {
          this._formattedEvents += message.log_entry.message + "\n";

          if (this.shadowRoot) {
            const textArea = this.shadowRoot.querySelector("op-textarea");

            if (textArea) {
              textArea.scrollTop = textArea.scrollHeight;
            }
          }
        }

        if (message.type && message.type === "device_fully_initialized") {
          this._discoveredDevices.push(message.device_info);
        }
      }
    }, {
      kind: "method",
      key: "_unsubscribe",
      value: function _unsubscribe() {
        this._active = false;

        if (this._addDevicesTimeoutHandle) {
          clearTimeout(this._addDevicesTimeoutHandle);
        }

        if (this._subscribed) {
          this._subscribed.then(unsub => unsub());

          this._subscribed = undefined;
        }
      }
    }, {
      kind: "method",
      key: "_subscribe",
      value: function _subscribe() {
        const data = {
          type: "zha/devices/permit"
        };

        if (this._ieeeAddress) {
          data.ieee = this._ieeeAddress;
        }

        this._subscribed = this.opp.connection.subscribeMessage(message => this._handleMessage(message), data);
        this._active = true;
        this._addDevicesTimeoutHandle = setTimeout(() => this._unsubscribe(), 75000);
      }
    }, {
      kind: "method",
      key: "_onHelpTap",
      value: function _onHelpTap() {
        this._showHelp = !this._showHelp;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_8__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_7__["css"]`
        .discovery-text,
        .content-header {
          margin: 16px;
        }
        .content {
          border-top: 1px solid var(--light-primary-color);
          min-height: 500px;
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: left;
          overflow: scroll;
        }
        .error {
          color: var(--google-red-500);
        }
        paper-spinner {
          display: none;
          margin-right: 20px;
          margin-left: 16px;
        }
        paper-spinner[active] {
          display: block;
          float: left;
          margin-right: 20px;
          margin-left: 16px;
        }
        .card {
          margin-left: 16px;
          margin-right: 16px;
          margin-bottom: 0px;
          margin-top: 10px;
        }
        .events {
          margin: 16px;
          border-top: 1px solid var(--light-primary-color);
          padding-top: 16px;
          min-height: 200px;
          max-height: 200px;
          overflow: scroll;
        }
        .toggle-help-icon {
          position: absolute;
          margin-top: 16px;
          margin-right: 16px;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }
        op-service-description {
          margin-top: 16px;
          margin-left: 16px;
          display: block;
          color: grey;
        }
        .search-button {
          margin-top: 16px;
          margin-left: 16px;
        }
        .help-text {
          color: grey;
          padding-left: 16px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1kZXZpY2VzLXBhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY292ZXJfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9kb21haW5faWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9pbnB1dF9kYXRldGVpbWVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLXRleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYWRkLWRldmljZXMtcGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG4vKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgYmluYXJ5IHNlbnNvciBzdGF0ZS4gKi9cblxuZXhwb3J0IGNvbnN0IGJpbmFyeVNlbnNvckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBjb25zdCBhY3RpdmF0ZWQgPSBzdGF0ZS5zdGF0ZSAmJiBzdGF0ZS5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJiYXR0ZXJ5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YmF0dGVyeVwiIDogXCJvcHA6YmF0dGVyeS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcImNvbGRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp0aGVybW9tZXRlclwiIDogXCJvcHA6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNlcnZlci1uZXR3b3JrLW9mZlwiIDogXCJvcHA6c2VydmVyLW5ldHdvcmtcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmRvb3ItY2xvc2VkXCIgOiBcIm9wcDpkb29yLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FyYWdlX2Rvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpnYXJhZ2VcIiA6IFwib3BwOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNoaWVsZC1jaGVja1wiIDogXCJvcHA6YWxlcnRcIjtcbiAgICBjYXNlIFwiaGVhdFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpmaXJlXCI7XG4gICAgY2FzZSBcImxpZ2h0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YnJpZ2h0bmVzcy01XCIgOiBcIm9wcDpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmxvY2tcIiA6IFwib3BwOmxvY2stb3BlblwiO1xuICAgIGNhc2UgXCJtb2lzdHVyZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndhdGVyLW9mZlwiIDogXCJvcHA6d2F0ZXJcIjtcbiAgICBjYXNlIFwibW90aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2Fsa1wiIDogXCJvcHA6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c3F1YXJlXCIgOiBcIm9wcDpzcXVhcmUtb3V0bGluZVwiO1xuICAgIGNhc2UgXCJwbHVnXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6cG93ZXItcGx1Zy1vZmZcIiA6IFwib3BwOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpob21lLW91dGxpbmVcIiA6IFwib3BwOmhvbWVcIjtcbiAgICBjYXNlIFwic291bmRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDptdXNpYy1ub3RlLW9mZlwiIDogXCJvcHA6bXVzaWMtbm90ZVwiO1xuICAgIGNhc2UgXCJ2aWJyYXRpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpjcm9wLXBvcnRyYWl0XCIgOiBcIm9wcDp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndpbmRvdy1jbG9zZWRcIiA6IFwib3BwOndpbmRvdy1vcGVuXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuICB9XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGNvdmVyIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5leHBvcnQgY29uc3QgY292ZXJJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBvcGVuID0gc3RhdGUuc3RhdGUgIT09IFwiY2xvc2VkXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiZ2FyYWdlXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmdhcmFnZS1vcGVuXCIgOiBcIm9wcDpnYXJhZ2VcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpkb29yLW9wZW5cIiA6IFwib3BwOmRvb3ItY2xvc2VkXCI7XG4gICAgY2FzZSBcInNodXR0ZXJcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6d2luZG93LXNodXR0ZXItb3BlblwiIDogXCJvcHA6d2luZG93LXNodXR0ZXJcIjtcbiAgICBjYXNlIFwiYmxpbmRcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6YmxpbmRzLW9wZW5cIiA6IFwib3BwOmJsaW5kc1wiO1xuICAgIGNhc2UgXCJ3aW5kb3dcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6d2luZG93LW9wZW5cIiA6IFwib3BwOndpbmRvdy1jbG9zZWRcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRvbWFpbkljb24oXCJjb3ZlclwiLCBzdGF0ZS5zdGF0ZSk7XG4gIH1cbn07XG4iLCIvKipcbiAqIFJldHVybiB0aGUgaWNvbiB0byBiZSB1c2VkIGZvciBhIGRvbWFpbi5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYSBzdGF0ZSB0byBpbmZsdWVuY2UgdGhlIGRvbWFpbiBpY29uLlxuICovXG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmNvbnN0IGZpeGVkSWNvbnMgPSB7XG4gIGFsZXJ0OiBcIm9wcDphbGVydFwiLFxuICBhbGV4YTogXCJvcHA6YW1hem9uLWFsZXhhXCIsXG4gIGF1dG9tYXRpb246IFwib3BwOnJvYm90XCIsXG4gIGNhbGVuZGFyOiBcIm9wcDpjYWxlbmRhclwiLFxuICBjYW1lcmE6IFwib3BwOnZpZGVvXCIsXG4gIGNsaW1hdGU6IFwib3BwOnRoZXJtb3N0YXRcIixcbiAgY29uZmlndXJhdG9yOiBcIm9wcDpzZXR0aW5nc1wiLFxuICBjb252ZXJzYXRpb246IFwib3BwOnRleHQtdG8tc3BlZWNoXCIsXG4gIGNvdW50ZXI6IFwib3BwOmNvdW50ZXJcIixcbiAgZGV2aWNlX3RyYWNrZXI6IFwib3BwOmFjY291bnRcIixcbiAgZmFuOiBcIm9wcDpmYW5cIixcbiAgZ29vZ2xlX2Fzc2lzdGFudDogXCJvcHA6Z29vZ2xlLWFzc2lzdGFudFwiLFxuICBncm91cDogXCJvcHA6Z29vZ2xlLWNpcmNsZXMtY29tbXVuaXRpZXNcIixcbiAgaGlzdG9yeV9ncmFwaDogXCJvcHA6Y2hhcnQtbGluZVwiLFxuICBvcGVucGVlcnBvd2VyOiBcIm9wcDpvcGVuLXBlZXItcG93ZXJcIixcbiAgaG9tZWtpdDogXCJvcHA6aG9tZS1hdXRvbWF0aW9uXCIsXG4gIGltYWdlX3Byb2Nlc3Npbmc6IFwib3BwOmltYWdlLWZpbHRlci1mcmFtZXNcIixcbiAgaW5wdXRfYm9vbGVhbjogXCJvcHA6ZHJhd2luZ1wiLFxuICBpbnB1dF9kYXRldGltZTogXCJvcHA6Y2FsZW5kYXItY2xvY2tcIixcbiAgaW5wdXRfbnVtYmVyOiBcIm9wcDpyYXktdmVydGV4XCIsXG4gIGlucHV0X3NlbGVjdDogXCJvcHA6Zm9ybWF0LWxpc3QtYnVsbGV0ZWRcIixcbiAgaW5wdXRfdGV4dDogXCJvcHA6dGV4dGJveFwiLFxuICBsaWdodDogXCJvcHA6bGlnaHRidWxiXCIsXG4gIG1haWxib3g6IFwib3BwOm1haWxib3hcIixcbiAgbm90aWZ5OiBcIm9wcDpjb21tZW50LWFsZXJ0XCIsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiBcIm9wcDpiZWxsXCIsXG4gIHBlcnNvbjogXCJvcHA6YWNjb3VudFwiLFxuICBwbGFudDogXCJvcHA6Zmxvd2VyXCIsXG4gIHByb3hpbWl0eTogXCJvcHA6YXBwbGUtc2FmYXJpXCIsXG4gIHJlbW90ZTogXCJvcHA6cmVtb3RlXCIsXG4gIHNjZW5lOiBcIm9wcDpwYWxldHRlXCIsXG4gIHNjcmlwdDogXCJvcHA6c2NyaXB0LXRleHRcIixcbiAgc2Vuc29yOiBcIm9wcDpleWVcIixcbiAgc2ltcGxlX2FsYXJtOiBcIm9wcDpiZWxsXCIsXG4gIHN1bjogXCJvcHA6d2hpdGUtYmFsYW5jZS1zdW5ueVwiLFxuICBzd2l0Y2g6IFwib3BwOmZsYXNoXCIsXG4gIHRpbWVyOiBcIm9wcDp0aW1lclwiLFxuICB1cGRhdGVyOiBcIm9wcDpjbG91ZC11cGxvYWRcIixcbiAgdmFjdXVtOiBcIm9wcDpyb2JvdC12YWN1dW1cIixcbiAgd2F0ZXJfaGVhdGVyOiBcIm9wcDp0aGVybW9tZXRlclwiLFxuICB3ZWF0aGVyOiBcIm9wcDp3ZWF0aGVyLWNsb3VkeVwiLFxuICB3ZWJsaW5rOiBcIm9wcDpvcGVuLWluLW5ld1wiLFxuICB6b25lOiBcIm9wcDptYXAtbWFya2VyLXJhZGl1c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRvbWFpbkljb24gPSAoZG9tYWluOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGRvbWFpbiBpbiBmaXhlZEljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkSWNvbnNbZG9tYWluXTtcbiAgfVxuXG4gIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImFybWVkX2hvbWVcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1wbHVzXCI7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9uaWdodFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJkaXNhcm1lZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLW91dGxpbmVcIjtcbiAgICAgICAgY2FzZSBcInRyaWdnZXJlZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXJpbmdcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbFwiO1xuICAgICAgfVxuXG4gICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJvZmZcIlxuICAgICAgICA/IFwib3BwOnJhZGlvYm94LWJsYW5rXCJcbiAgICAgICAgOiBcIm9wcDpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG5cbiAgICBjYXNlIFwiY292ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gXCJjbG9zZWRcIiA/IFwib3BwOndpbmRvdy1jbG9zZWRcIiA6IFwib3BwOndpbmRvdy1vcGVuXCI7XG5cbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInVubG9ja2VkXCIgPyBcIm9wcDpsb2NrLW9wZW5cIiA6IFwib3BwOmxvY2tcIjtcblxuICAgIGNhc2UgXCJtZWRpYV9wbGF5ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSAhPT0gXCJvZmZcIiAmJiBzdGF0ZSAhPT0gXCJpZGxlXCJcbiAgICAgICAgPyBcIm9wcDpjYXN0LWNvbm5lY3RlZFwiXG4gICAgICAgIDogXCJvcHA6Y2FzdFwiO1xuXG4gICAgY2FzZSBcInp3YXZlXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJkZWFkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmVtb3RpY29uLWRlYWRcIjtcbiAgICAgICAgY2FzZSBcInNsZWVwaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXppbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6dGltZXItc2FuZFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIm9wcDp6LXdhdmVcIjtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJVbmFibGUgdG8gZmluZCBpY29uIGZvciBkb21haW4gXCIgKyBkb21haW4gKyBcIiAoXCIgKyBzdGF0ZSArIFwiKVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGFuIGlucHV0IGRhdGV0aW1lIHN0YXRlLiAqL1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5leHBvcnQgY29uc3QgaW5wdXREYXRlVGltZUljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcIm9wcDpjbG9ja1wiO1xuICB9XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgIHJldHVybiBcIm9wcDpjYWxlbmRhclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwiaW5wdXRfZGF0ZXRpbWVcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHNlbnNvciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBVTklUX0MsIFVOSVRfRiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmNvbnN0IGZpeGVkRGV2aWNlQ2xhc3NJY29ucyA9IHtcbiAgaHVtaWRpdHk6IFwib3BwOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwib3BwOmJyaWdodG5lc3MtNVwiLFxuICB0ZW1wZXJhdHVyZTogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgcHJlc3N1cmU6IFwib3BwOmdhdWdlXCIsXG4gIHBvd2VyOiBcIm9wcDpmbGFzaFwiLFxuICBzaWduYWxfc3RyZW5ndGg6IFwib3BwOndpZmlcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5zb3JJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS11bmtub3duXCI7XG4gICAgfVxuICAgIGNvbnN0IGJhdHRlcnlSb3VuZCA9IE1hdGgucm91bmQoYmF0dGVyeSAvIDEwKSAqIDEwO1xuICAgIGlmIChiYXR0ZXJ5Um91bmQgPj0gMTAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeVwiO1xuICAgIH1cbiAgICBpZiAoYmF0dGVyeVJvdW5kIDw9IDApIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBvcHA6YmF0dGVyeS0xMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTIwXG4gICAgLy8gb3BwOmJhdHRlcnktMzBcbiAgICAvLyBvcHA6YmF0dGVyeS00MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTUwXG4gICAgLy8gb3BwOmJhdHRlcnktNjBcbiAgICAvLyBvcHA6YmF0dGVyeS03MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTgwXG4gICAgLy8gb3BwOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdvcHAnIGluIGljb25uYW1lIHNvIHRoaXMgbmFtZSBkb2VzIG5vdCBnZXQgcGlja2VkIHVwXG4gICAgcmV0dXJuIGAke1wib3BwXCJ9OmJhdHRlcnktJHtiYXR0ZXJ5Um91bmR9YDtcbiAgfVxuXG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIGlmICh1bml0ID09PSBVTklUX0MgfHwgdW5pdCA9PT0gVU5JVF9GKSB7XG4gICAgcmV0dXJuIFwib3BwOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGJpbmFyeVNlbnNvckljb24gfSBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IGNvdmVySWNvbiB9IGZyb20gXCIuL2NvdmVyX2ljb25cIjtcbmltcG9ydCB7IHNlbnNvckljb24gfSBmcm9tIFwiLi9zZW5zb3JfaWNvblwiO1xuaW1wb3J0IHsgaW5wdXREYXRlVGltZUljb24gfSBmcm9tIFwiLi9pbnB1dF9kYXRldGVpbWVfaWNvblwiO1xuXG5jb25zdCBkb21haW5JY29ucyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogYmluYXJ5U2Vuc29ySWNvbixcbiAgY292ZXI6IGNvdmVySWNvbixcbiAgc2Vuc29yOiBzZW5zb3JJY29uLFxuICBpbnB1dF9kYXRldGltZTogaW5wdXREYXRlVGltZUljb24sXG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG4gIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy5pY29uO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZS5lbnRpdHlfaWQpO1xuXG4gIGlmIChkb21haW4gaW4gZG9tYWluSWNvbnMpIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbnNbZG9tYWluXShzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG59O1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iLCIvKlxuV3JhcHBlciBmb3IgcGFwZXItdGV4dGFyZWEuXG5cbnBhcGVyLXRleHRhcmVhIGNyYXNoZXMgb24gaU9TIHdoZW4gY3JlYXRlZCBwcm9ncmFtbWF0aWNhbGx5LiBUaGlzIG9ubHkgaW1wYWN0c1xub3VyIGF1dG9tYXRpb24gYW5kIHNjcmlwdCBlZGl0b3JzIGFzIHRoZXkgYXJlIHVzaW5nIFByZWFjdC4gUG9seW1lciBpcyB1c2luZ1xudGVtcGxhdGUgZWxlbWVudHMgYW5kIGRvZXMgbm90IGhhdmUgdGhpcyBpc3N1ZS5cblxucGFwZXItdGV4dGFyZWEgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzU1NlxuV2ViS2l0IGlzc3VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc0NjI5XG4qL1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgT3BUZXh0YXJlYSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLXRleHRhcmVhXG4gICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICA+PC9wYXBlci10ZXh0YXJlYT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXRleHRhcmVhXCIsIE9wVGV4dGFyZWEpO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLXRleHRhcmVhXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuL3poYS1kZXZpY2UtY2FyZFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IFpIQURldmljZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyLCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCIpXG5jbGFzcyBaSEFBZGREZXZpY2VzUGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZT86IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlzY292ZXJlZERldmljZXM6IFpIQURldmljZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Zvcm1hdHRlZEV2ZW50czogc3RyaW5nID0gXCJcIjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2llZWVBZGRyZXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9hZGREZXZpY2VzVGltZW91dEhhbmRsZTogYW55ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9zdWJzY3JpYmVkPzogUHJvbWlzZTwoKSA9PiBQcm9taXNlPHZvaWQ+PjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJvdXRlICYmIHRoaXMucm91dGUucGF0aCAmJiB0aGlzLnJvdXRlLnBhdGggIT09IFwiXCJcbiAgICAgID8gKHRoaXMuX2llZWVBZGRyZXNzID0gdGhpcy5yb3V0ZS5wYXRoLnN1YnN0cmluZygxKSlcbiAgICAgIDogKHRoaXMuX2llZWVBZGRyZXNzID0gdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlzY292ZXJlZERldmljZXMgPSBbXTtcbiAgICB0aGlzLl9mb3JtYXR0ZWRFdmVudHMgPSBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3BwLXN1YnBhZ2VcbiAgICAgICAgaGVhZGVyPVwiJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmFkZF9kZXZpY2VfcGFnZS5oZWFkZXJcIlxuICAgICAgICApfVwiXG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fYWN0aXZlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX2FjdGl2ZX1cIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiU2VhcmNoaW5nXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmFkZF9kZXZpY2VfcGFnZS5zcGlubmVyXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX3N1YnNjcmliZX0gY2xhc3M9XCJzZWFyY2gtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmFkZF9kZXZpY2VfcGFnZS5zZWFyY2hfYWdhaW5cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8b3Atc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicGVybWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5fZGlzY292ZXJlZERldmljZXMubGVuZ3RoIDwgMVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNjb3ZlcnktdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuYWRkX2RldmljZV9wYWdlLmRpc2NvdmVyeV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2Rpc2NvdmVyZWREZXZpY2VzLm1hcChcbiAgICAgICAgICAgICAgICAgIChkZXZpY2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGV2aWNlPSR7ZGV2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgIC5uYXJyb3c9JHshdGhpcy5pc1dpZGV9XG4gICAgICAgICAgICAgICAgICAgICAgLnNob3dIZWxwPSR7dGhpcy5fc2hvd0hlbHB9XG4gICAgICAgICAgICAgICAgICAgICAgLnNob3dBY3Rpb25zPSR7IXRoaXMuX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAuc2hvd0VudGl0eURldGFpbD0ke2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICA+PC96aGEtZGV2aWNlLWNhcmQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxvcC10ZXh0YXJlYSBjbGFzcz1cImV2ZW50c1wiIHZhbHVlPVwiJHt0aGlzLl9mb3JtYXR0ZWRFdmVudHN9XCI+XG4gICAgICAgIDwvb3AtdGV4dGFyZWE+XG4gICAgICA8L29wcC1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwibG9nX291dHB1dFwiKSB7XG4gICAgICB0aGlzLl9mb3JtYXR0ZWRFdmVudHMgKz0gbWVzc2FnZS5sb2dfZW50cnkubWVzc2FnZSArIFwiXFxuXCI7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJvcC10ZXh0YXJlYVwiKTtcbiAgICAgICAgaWYgKHRleHRBcmVhKSB7XG4gICAgICAgICAgdGV4dEFyZWEuc2Nyb2xsVG9wID0gdGV4dEFyZWEuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgJiYgbWVzc2FnZS50eXBlID09PSBcImRldmljZV9mdWxseV9pbml0aWFsaXplZFwiKSB7XG4gICAgICB0aGlzLl9kaXNjb3ZlcmVkRGV2aWNlcy5wdXNoKG1lc3NhZ2UuZGV2aWNlX2luZm8pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9hZGREZXZpY2VzVGltZW91dEhhbmRsZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2FkZERldmljZXNUaW1lb3V0SGFuZGxlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZWQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZWQudGhlbigodW5zdWIpID0+IHVuc3ViKCkpO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YTogYW55ID0geyB0eXBlOiBcInpoYS9kZXZpY2VzL3Blcm1pdFwiIH07XG4gICAgaWYgKHRoaXMuX2llZWVBZGRyZXNzKSB7XG4gICAgICBkYXRhLmllZWUgPSB0aGlzLl9pZWVlQWRkcmVzcztcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaWJlZCA9IHRoaXMub3BwIS5jb25uZWN0aW9uLnN1YnNjcmliZU1lc3NhZ2UoXG4gICAgICAobWVzc2FnZSkgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShtZXNzYWdlKSxcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5fdW5zdWJzY3JpYmUoKSxcbiAgICAgIDc1MDAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmRpc2NvdmVyeS10ZXh0LFxuICAgICAgICAuY29udGVudC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lclthY3RpdmVdIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXZlbnRzIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIG9wLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCI6IFpIQUFkZERldmljZXNQYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQTRDQTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBaERBO0FBa0RBOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFDQTtBQTNCQTtBQUNBO0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7OztBQUFBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7O0FBRUE7O0FBSUE7OztBQUlBOzs7QUFHQTs7QUFQQTs7QUFjQTtBQUNBOzs7O0FBTUE7OztBQUdBOztBQUdBOzs7OztBQUhBOztBQVdBO0FBQ0E7QUFFQTtBQUZBOzs7QUFPQTs7O0FBSUE7OztBQUpBO0FBV0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQWFBOztBQUVBOzs7QUEzRUE7QUErRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFJQTs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRUE7OztBQWxPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9