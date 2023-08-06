(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-zha-device-info"],{

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "opp:bookmark";
/** Panel to show when no panel is picked. */

const DEFAULT_PANEL = "devcon";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "counter", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "person", "script", "sun", "timer", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Devcon. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

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

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: computeDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomain", function() { return computeDomain; });
const computeDomain = entityId => {
  return entityId.substr(0, entityId.indexOf("."));
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

/***/ "./src/components/dialog/op-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/op-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: OpIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIronFocusablesHelper", function() { return OpIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const OpIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/op-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/op-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: OpPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperDialog", function() { return OpPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-iron-focusables-helper.js */ "./src/components/dialog/op-iron-focusables-helper.js");


 // tslint:disable-next-line

const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["OpIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class OpPaperDialog extends paperDialogClass {}
// @ts-ignore

class OpPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
customElements.define("op-paper-dialog", OpPaperDialog);

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

/***/ "./src/dialogs/zha-device-info-dialog/dialog-zha-device-info.ts":
/*!**********************************************************************!*\
  !*** ./src/dialogs/zha-device-info-dialog/dialog-zha-device-info.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _panels_config_zha_zha_device_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/config/zha/zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/zha */ "./src/data/zha.ts");
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





let DialogZHADeviceInfo = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-zha-device-info")], function (_initialize, _LitElement) {
  class DialogZHADeviceInfo extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogZHADeviceInfo,
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
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_device",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._device = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_5__["fetchZHADevice"])(this.opp, params.ieee);
        await this.updateComplete;

        this._dialog.open();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params || !this._device) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        with-backdrop
        opened
        @opened-changed=${this._openedChanged}
      >
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">${this._error}</div>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <zha-device-card
                class="card"
                .opp=${this.opp}
                .device=${this._device}
                @zha-device-removed=${this._onDeviceRemoved}
                .showEntityDetail=${false}
                .showActions="${this._device.device_type !== "Coordinator"}"
              ></zha-device-card>
            `}
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._params = undefined;
          this._error = undefined;
          this._device = undefined;
        }
      }
    }, {
      kind: "method",
      key: "_onDeviceRemoved",
      value: function _onDeviceRemoved() {
        this._closeDialog();
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._dialog.close();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_4__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog > * {
          margin: 0;
          display: block;
          padding: 0;
        }
        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 600px;
          word-wrap: break-word;
        }
        .error {
          color: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXpoYS1kZXZpY2UtaW5mby5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvYmluYXJ5X3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvaW5wdXRfZGF0ZXRlaW1lX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL25hdmlnYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvemhhLWRldmljZS1pbmZvLWRpYWxvZy9kaWFsb2ctemhhLWRldmljZS1pbmZvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb25zdGFudHMgdG8gYmUgdXNlZCBpbiB0aGUgZnJvbnRlbmQuICovXG5cbi8vIENvbnN0YW50cyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGJ5IG5hbWUuXG4vLyBBcnJheXMgd2l0aCB2YWx1ZXMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBpZiBvcmRlciBkb2Vzbid0IG1hdHRlci5cbi8vIEVhY2ggY29uc3RhbnQgc2hvdWxkIGhhdmUgYSBkZXNjcmlwdGlvbiB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgZm9yLlxuXG4vKiogSWNvbiB0byB1c2Ugd2hlbiBubyBpY29uIHNwZWNpZmllZCBmb3IgZG9tYWluLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRE9NQUlOX0lDT04gPSBcIm9wcDpib29rbWFya1wiO1xuXG4vKiogUGFuZWwgdG8gc2hvdyB3aGVuIG5vIHBhbmVsIGlzIHBpY2tlZC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBTkVMID0gXCJkZXZjb25cIjtcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgXCJjbGltYXRlXCIsXG4gIFwiY292ZXJcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwidGltZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB3aXRoIHNlcGFyYXRlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX01PUkVfSU5GTyA9IFtcbiAgXCJhbGFybV9jb250cm9sX3BhbmVsXCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImNhbWVyYVwiLFxuICBcImNsaW1hdGVcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJjb3VudGVyXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInBlcnNvblwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInRpbWVyXCIsXG4gIFwidXBkYXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYXRoZXJcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcInNjZW5lXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgXCJjYW1lcmFcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwic2NlbmVcIixcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXCJjbG9zZWRcIiwgXCJsb2NrZWRcIiwgXCJvZmZcIl07XG5cbi8qKiBEb21haW5zIHdoZXJlIHdlIGFsbG93IHRvZ2dsZSBpbiBEZXZjb24uICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJncm91cFwiLFxuICBcImF1dG9tYXRpb25cIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG4vKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgYmluYXJ5IHNlbnNvciBzdGF0ZS4gKi9cblxuZXhwb3J0IGNvbnN0IGJpbmFyeVNlbnNvckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBjb25zdCBhY3RpdmF0ZWQgPSBzdGF0ZS5zdGF0ZSAmJiBzdGF0ZS5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJiYXR0ZXJ5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YmF0dGVyeVwiIDogXCJvcHA6YmF0dGVyeS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcImNvbGRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp0aGVybW9tZXRlclwiIDogXCJvcHA6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNlcnZlci1uZXR3b3JrLW9mZlwiIDogXCJvcHA6c2VydmVyLW5ldHdvcmtcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmRvb3ItY2xvc2VkXCIgOiBcIm9wcDpkb29yLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FyYWdlX2Rvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpnYXJhZ2VcIiA6IFwib3BwOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNoaWVsZC1jaGVja1wiIDogXCJvcHA6YWxlcnRcIjtcbiAgICBjYXNlIFwiaGVhdFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpmaXJlXCI7XG4gICAgY2FzZSBcImxpZ2h0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YnJpZ2h0bmVzcy01XCIgOiBcIm9wcDpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmxvY2tcIiA6IFwib3BwOmxvY2stb3BlblwiO1xuICAgIGNhc2UgXCJtb2lzdHVyZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndhdGVyLW9mZlwiIDogXCJvcHA6d2F0ZXJcIjtcbiAgICBjYXNlIFwibW90aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2Fsa1wiIDogXCJvcHA6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c3F1YXJlXCIgOiBcIm9wcDpzcXVhcmUtb3V0bGluZVwiO1xuICAgIGNhc2UgXCJwbHVnXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6cG93ZXItcGx1Zy1vZmZcIiA6IFwib3BwOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpob21lLW91dGxpbmVcIiA6IFwib3BwOmhvbWVcIjtcbiAgICBjYXNlIFwic291bmRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDptdXNpYy1ub3RlLW9mZlwiIDogXCJvcHA6bXVzaWMtbm90ZVwiO1xuICAgIGNhc2UgXCJ2aWJyYXRpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpjcm9wLXBvcnRyYWl0XCIgOiBcIm9wcDp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndpbmRvdy1jbG9zZWRcIiA6IFwib3BwOndpbmRvdy1vcGVuXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXB1dGVEb21haW4gPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZihcIi5cIikpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBjb3ZlciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGNvdmVySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgY29uc3Qgb3BlbiA9IHN0YXRlLnN0YXRlICE9PSBcImNsb3NlZFwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImdhcmFnZVwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpnYXJhZ2Utb3BlblwiIDogXCJvcHA6Z2FyYWdlXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6ZG9vci1vcGVuXCIgOiBcIm9wcDpkb29yLWNsb3NlZFwiO1xuICAgIGNhc2UgXCJzaHV0dGVyXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1zaHV0dGVyLW9wZW5cIiA6IFwib3BwOndpbmRvdy1zaHV0dGVyXCI7XG4gICAgY2FzZSBcImJsaW5kXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmJsaW5kcy1vcGVuXCIgOiBcIm9wcDpibGluZHNcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctY2xvc2VkXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGljb24gdG8gYmUgdXNlZCBmb3IgYSBkb21haW4uXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGEgc3RhdGUgdG8gaW5mbHVlbmNlIHRoZSBkb21haW4gaWNvbi5cbiAqL1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5jb25zdCBmaXhlZEljb25zID0ge1xuICBhbGVydDogXCJvcHA6YWxlcnRcIixcbiAgYWxleGE6IFwib3BwOmFtYXpvbi1hbGV4YVwiLFxuICBhdXRvbWF0aW9uOiBcIm9wcDpyb2JvdFwiLFxuICBjYWxlbmRhcjogXCJvcHA6Y2FsZW5kYXJcIixcbiAgY2FtZXJhOiBcIm9wcDp2aWRlb1wiLFxuICBjbGltYXRlOiBcIm9wcDp0aGVybW9zdGF0XCIsXG4gIGNvbmZpZ3VyYXRvcjogXCJvcHA6c2V0dGluZ3NcIixcbiAgY29udmVyc2F0aW9uOiBcIm9wcDp0ZXh0LXRvLXNwZWVjaFwiLFxuICBjb3VudGVyOiBcIm9wcDpjb3VudGVyXCIsXG4gIGRldmljZV90cmFja2VyOiBcIm9wcDphY2NvdW50XCIsXG4gIGZhbjogXCJvcHA6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwib3BwOmdvb2dsZS1hc3Npc3RhbnRcIixcbiAgZ3JvdXA6IFwib3BwOmdvb2dsZS1jaXJjbGVzLWNvbW11bml0aWVzXCIsXG4gIGhpc3RvcnlfZ3JhcGg6IFwib3BwOmNoYXJ0LWxpbmVcIixcbiAgb3BlbnBlZXJwb3dlcjogXCJvcHA6b3Blbi1wZWVyLXBvd2VyXCIsXG4gIGhvbWVraXQ6IFwib3BwOmhvbWUtYXV0b21hdGlvblwiLFxuICBpbWFnZV9wcm9jZXNzaW5nOiBcIm9wcDppbWFnZS1maWx0ZXItZnJhbWVzXCIsXG4gIGlucHV0X2Jvb2xlYW46IFwib3BwOmRyYXdpbmdcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwib3BwOmNhbGVuZGFyLWNsb2NrXCIsXG4gIGlucHV0X251bWJlcjogXCJvcHA6cmF5LXZlcnRleFwiLFxuICBpbnB1dF9zZWxlY3Q6IFwib3BwOmZvcm1hdC1saXN0LWJ1bGxldGVkXCIsXG4gIGlucHV0X3RleHQ6IFwib3BwOnRleHRib3hcIixcbiAgbGlnaHQ6IFwib3BwOmxpZ2h0YnVsYlwiLFxuICBtYWlsYm94OiBcIm9wcDptYWlsYm94XCIsXG4gIG5vdGlmeTogXCJvcHA6Y29tbWVudC1hbGVydFwiLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogXCJvcHA6YmVsbFwiLFxuICBwZXJzb246IFwib3BwOmFjY291bnRcIixcbiAgcGxhbnQ6IFwib3BwOmZsb3dlclwiLFxuICBwcm94aW1pdHk6IFwib3BwOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwib3BwOnJlbW90ZVwiLFxuICBzY2VuZTogXCJvcHA6cGFsZXR0ZVwiLFxuICBzY3JpcHQ6IFwib3BwOnNjcmlwdC10ZXh0XCIsXG4gIHNlbnNvcjogXCJvcHA6ZXllXCIsXG4gIHNpbXBsZV9hbGFybTogXCJvcHA6YmVsbFwiLFxuICBzdW46IFwib3BwOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgc3dpdGNoOiBcIm9wcDpmbGFzaFwiLFxuICB0aW1lcjogXCJvcHA6dGltZXJcIixcbiAgdXBkYXRlcjogXCJvcHA6Y2xvdWQtdXBsb2FkXCIsXG4gIHZhY3V1bTogXCJvcHA6cm9ib3QtdmFjdXVtXCIsXG4gIHdhdGVyX2hlYXRlcjogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJvcHA6d2VhdGhlci1jbG91ZHlcIixcbiAgd2VibGluazogXCJvcHA6b3Blbi1pbi1uZXdcIixcbiAgem9uZTogXCJvcHA6bWFwLW1hcmtlci1yYWRpdXNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBkb21haW5JY29uID0gKGRvbWFpbjogc3RyaW5nLCBzdGF0ZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGlmIChkb21haW4gaW4gZml4ZWRJY29ucykge1xuICAgIHJldHVybiBmaXhlZEljb25zW2RvbWFpbl07XG4gIH1cblxuICBzd2l0Y2ggKGRvbWFpbikge1xuICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9ob21lXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1zbGVlcFwiO1xuICAgICAgICBjYXNlIFwiZGlzYXJtZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1vdXRsaW5lXCI7XG4gICAgICAgIGNhc2UgXCJ0cmlnZ2VyZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGxcIjtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJiaW5hcnlfc2Vuc29yXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwib2ZmXCJcbiAgICAgICAgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiXG4gICAgICAgIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IFwiY2xvc2VkXCIgPyBcIm9wcDp3aW5kb3ctY2xvc2VkXCIgOiBcIm9wcDp3aW5kb3ctb3BlblwiO1xuXG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJ1bmxvY2tlZFwiID8gXCJvcHA6bG9jay1vcGVuXCIgOiBcIm9wcDpsb2NrXCI7XG5cbiAgICBjYXNlIFwibWVkaWFfcGxheWVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgIT09IFwib2ZmXCIgJiYgc3RhdGUgIT09IFwiaWRsZVwiXG4gICAgICAgID8gXCJvcHA6Y2FzdC1jb25uZWN0ZWRcIlxuICAgICAgICA6IFwib3BwOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDplbW90aWNvbi1kZWFkXCI7XG4gICAgICAgIGNhc2UgXCJzbGVlcGluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpzbGVlcFwiO1xuICAgICAgICBjYXNlIFwiaW5pdGlhbGl6aW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ei13YXZlXCI7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiICsgZG9tYWluICsgXCIgKFwiICsgc3RhdGUgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhbiBpbnB1dCBkYXRldGltZSBzdGF0ZS4gKi9cbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0RGF0ZVRpbWVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX2RhdGUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2FsZW5kYXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcImlucHV0X2RhdGV0aW1lXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzZW5zb3Igc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgVU5JVF9DLCBVTklUX0YgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5jb25zdCBmaXhlZERldmljZUNsYXNzSWNvbnMgPSB7XG4gIGh1bWlkaXR5OiBcIm9wcDp3YXRlci1wZXJjZW50XCIsXG4gIGlsbHVtaW5hbmNlOiBcIm9wcDpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHByZXNzdXJlOiBcIm9wcDpnYXVnZVwiLFxuICBwb3dlcjogXCJvcHA6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcIm9wcDp3aWZpXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRjbGFzcyA9IHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzO1xuXG4gIGlmIChkY2xhc3MgJiYgZGNsYXNzIGluIGZpeGVkRGV2aWNlQ2xhc3NJY29ucykge1xuICAgIHJldHVybiBmaXhlZERldmljZUNsYXNzSWNvbnNbZGNsYXNzXTtcbiAgfVxuICBpZiAoZGNsYXNzID09PSBcImJhdHRlcnlcIikge1xuICAgIGNvbnN0IGJhdHRlcnkgPSBOdW1iZXIoc3RhdGUuc3RhdGUpO1xuICAgIGlmIChpc05hTihiYXR0ZXJ5KSkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnlcIjtcbiAgICB9XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS1hbGVydFwiO1xuICAgIH1cbiAgICAvLyBXaWxsIHJldHVybiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpY29uczogKGxpc3RlZCBzbyBleHRyYWN0b3IgcGlja3MgdXApXG4gICAgLy8gb3BwOmJhdHRlcnktMTBcbiAgICAvLyBvcHA6YmF0dGVyeS0yMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTMwXG4gICAgLy8gb3BwOmJhdHRlcnktNDBcbiAgICAvLyBvcHA6YmF0dGVyeS01MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTYwXG4gICAgLy8gb3BwOmJhdHRlcnktNzBcbiAgICAvLyBvcHA6YmF0dGVyeS04MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTkwXG4gICAgLy8gV2Ugb2JzY3VyZSAnb3BwJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcIm9wcFwifTpiYXR0ZXJ5LSR7YmF0dGVyeVJvdW5kfWA7XG4gIH1cblxuICBjb25zdCB1bml0ID0gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICBpZiAodW5pdCA9PT0gVU5JVF9DIHx8IHVuaXQgPT09IFVOSVRfRikge1xuICAgIHJldHVybiBcIm9wcDp0aGVybW9tZXRlclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwic2Vuc29yXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBiaW5hcnlTZW5zb3JJY29uIH0gZnJvbSBcIi4vYmluYXJ5X3NlbnNvcl9pY29uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBjb3Zlckljb24gfSBmcm9tIFwiLi9jb3Zlcl9pY29uXCI7XG5pbXBvcnQgeyBzZW5zb3JJY29uIH0gZnJvbSBcIi4vc2Vuc29yX2ljb25cIjtcbmltcG9ydCB7IGlucHV0RGF0ZVRpbWVJY29uIH0gZnJvbSBcIi4vaW5wdXRfZGF0ZXRlaW1lX2ljb25cIjtcblxuY29uc3QgZG9tYWluSWNvbnMgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IGJpbmFyeVNlbnNvckljb24sXG4gIGNvdmVyOiBjb3Zlckljb24sXG4gIHNlbnNvcjogc2Vuc29ySWNvbixcbiAgaW5wdXRfZGF0ZXRpbWU6IGlucHV0RGF0ZVRpbWVJY29uLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlSWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxuICBpZiAoc3RhdGUuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGUuZW50aXR5X2lkKTtcblxuICBpZiAoZG9tYWluIGluIGRvbWFpbkljb25zKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb25zW2RvbWFpbl0oc3RhdGUpO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XG4gICAgXCJsb2NhdGlvbi1jaGFuZ2VkXCI6IHtcbiAgICAgIHJlcGxhY2U6IGJvb2xlYW47XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbmF2aWdhdGUgPSAoXG4gIF9ub2RlOiBhbnksXG4gIHBhdGg6IHN0cmluZyxcbiAgcmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlXG4pID0+IHtcbiAgaWYgKF9fREVNT19fKSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGAke2xvY2F0aW9uLnBhdGhuYW1lfSMke3BhdGh9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCBwYXRoKTtcbiAgICB9XG4gIH1cbiAgZmlyZUV2ZW50KHdpbmRvdywgXCJsb2NhdGlvbi1jaGFuZ2VkXCIsIHtcbiAgICByZXBsYWNlLFxuICB9KTtcbn07XG4iLCIvLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzIEZ1bmN0aW9uPihcbiAgZnVuYzogVCxcbiAgd2FpdCxcbiAgaW1tZWRpYXRlID0gZmFsc2Vcbik6IFQgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2dcIjtcbi8vIE5vdCBkdXBsaWNhdGUsIGlzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3BQYXBlckRpYWxvZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIi4uLy4uL3BhbmVscy9jb25maWcvemhhL3poYS1kZXZpY2UtY2FyZFwiO1xuXG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IG9wU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgWkhBRGV2aWNlSW5mb0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLXpoYS1kZXZpY2UtaW5mb1wiO1xuaW1wb3J0IHsgWkhBRGV2aWNlLCBmZXRjaFpIQURldmljZSB9IGZyb20gXCIuLi8uLi9kYXRhL3poYVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy16aGEtZGV2aWNlLWluZm9cIilcbmNsYXNzIERpYWxvZ1pIQURldmljZUluZm8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IFpIQURldmljZUluZm9EaWFsb2dQYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2U/OiBaSEFEZXZpY2U7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBaSEFEZXZpY2VJbmZvRGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2RldmljZSA9IGF3YWl0IGZldGNoWkhBRGV2aWNlKHRoaXMub3BwLCBwYXJhbXMuaWVlZSk7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9kaWFsb2cub3BlbigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMgfHwgIXRoaXMuX2RldmljZSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAuZGV2aWNlPSR7dGhpcy5fZGV2aWNlfVxuICAgICAgICAgICAgICAgIEB6aGEtZGV2aWNlLXJlbW92ZWQ9JHt0aGlzLl9vbkRldmljZVJlbW92ZWR9XG4gICAgICAgICAgICAgICAgLnNob3dFbnRpdHlEZXRhaWw9JHtmYWxzZX1cbiAgICAgICAgICAgICAgICAuc2hvd0FjdGlvbnM9XCIke3RoaXMuX2RldmljZS5kZXZpY2VfdHlwZSAhPT0gXCJDb29yZGluYXRvclwifVwiXG4gICAgICAgICAgICAgID48L3poYS1kZXZpY2UtY2FyZD5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L29wLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkRldmljZVJlbW92ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogT3BQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIm9wLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgb3AtcGFwZXItZGlhbG9nID4gKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4OiAxIDAgMzAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctemhhLWRldmljZS1pbmZvXCI6IERpYWxvZ1pIQURldmljZUluZm87XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBaUJBO0FBQ0E7QUFBQTtBQXlCQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUNBO0FBNENBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBY0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBR0E7QUFoREE7QUFrREE7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFLQSxlQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFFQTtBQUZBOzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQW5CQTtBQXNCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7OztBQXBGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9