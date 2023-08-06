(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"],{

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

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = cb => {
  requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
  return new Promise(resolve => {
    afterNextRender(resolve);
  });
};

/***/ }),

/***/ "./src/components/entity/op-state-icon.js":
/*!************************************************!*\
  !*** ./src/components/entity/op-state-icon.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");





class OpStateIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-icon icon="[[computeIcon(stateObj)]]"></op-icon>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      }
    };
  }

  computeIcon(stateObj) {
    return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["stateIcon"])(stateObj);
  }

}

customElements.define("op-state-icon", OpStateIcon);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9uc356aGEtYWRkLWdyb3VwLXBhZ2V+emhhLWRldmljZXMtcGFnZX56aGEtZ3JvdXAtcGFnZX56aGEtZ3JvdXBzLWRhc2hib2FyZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2JpbmFyeV9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb3Zlcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2lucHV0X2RhdGV0ZWltZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NlbnNvcl9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9vcC1zdGF0ZS1pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGJpbmFyeSBzZW5zb3Igc3RhdGUuICovXG5cbmV4cG9ydCBjb25zdCBiaW5hcnlTZW5zb3JJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgYWN0aXZhdGVkID0gc3RhdGUuc3RhdGUgJiYgc3RhdGUuc3RhdGUgPT09IFwib2ZmXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiYmF0dGVyeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmJhdHRlcnlcIiA6IFwib3BwOmJhdHRlcnktb3V0bGluZVwiO1xuICAgIGNhc2UgXCJjb2xkXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6dGhlcm1vbWV0ZXJcIiA6IFwib3BwOnNub3dmbGFrZVwiO1xuICAgIGNhc2UgXCJjb25uZWN0aXZpdHlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzZXJ2ZXItbmV0d29yay1vZmZcIiA6IFwib3BwOnNlcnZlci1uZXR3b3JrXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpkb29yLWNsb3NlZFwiIDogXCJvcHA6ZG9vci1vcGVuXCI7XG4gICAgY2FzZSBcImdhcmFnZV9kb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6Z2FyYWdlXCIgOiBcIm9wcDpnYXJhZ2Utb3BlblwiO1xuICAgIGNhc2UgXCJnYXNcIjpcbiAgICBjYXNlIFwicG93ZXJcIjpcbiAgICBjYXNlIFwicHJvYmxlbVwiOlxuICAgIGNhc2UgXCJzYWZldHlcIjpcbiAgICBjYXNlIFwic21va2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzaGllbGQtY2hlY2tcIiA6IFwib3BwOmFsZXJ0XCI7XG4gICAgY2FzZSBcImhlYXRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp0aGVybW9tZXRlclwiIDogXCJvcHA6ZmlyZVwiO1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmJyaWdodG5lc3MtNVwiIDogXCJvcHA6YnJpZ2h0bmVzcy03XCI7XG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpsb2NrXCIgOiBcIm9wcDpsb2NrLW9wZW5cIjtcbiAgICBjYXNlIFwibW9pc3R1cmVcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3YXRlci1vZmZcIiA6IFwib3BwOndhdGVyXCI7XG4gICAgY2FzZSBcIm1vdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndhbGtcIiA6IFwib3BwOnJ1blwiO1xuICAgIGNhc2UgXCJvY2N1cGFuY3lcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpob21lLW91dGxpbmVcIiA6IFwib3BwOmhvbWVcIjtcbiAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNxdWFyZVwiIDogXCJvcHA6c3F1YXJlLW91dGxpbmVcIjtcbiAgICBjYXNlIFwicGx1Z1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnBvd2VyLXBsdWctb2ZmXCIgOiBcIm9wcDpwb3dlci1wbHVnXCI7XG4gICAgY2FzZSBcInByZXNlbmNlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6aG9tZS1vdXRsaW5lXCIgOiBcIm9wcDpob21lXCI7XG4gICAgY2FzZSBcInNvdW5kXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6bXVzaWMtbm90ZS1vZmZcIiA6IFwib3BwOm11c2ljLW5vdGVcIjtcbiAgICBjYXNlIFwidmlicmF0aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6Y3JvcC1wb3J0cmFpdFwiIDogXCJvcHA6dmlicmF0ZVwiO1xuICAgIGNhc2UgXCJ3aW5kb3dcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3aW5kb3ctY2xvc2VkXCIgOiBcIm9wcDp3aW5kb3ctb3BlblwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6cmFkaW9ib3gtYmxhbmtcIiA6IFwib3BwOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBjb3ZlciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGNvdmVySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgY29uc3Qgb3BlbiA9IHN0YXRlLnN0YXRlICE9PSBcImNsb3NlZFwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImdhcmFnZVwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpnYXJhZ2Utb3BlblwiIDogXCJvcHA6Z2FyYWdlXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6ZG9vci1vcGVuXCIgOiBcIm9wcDpkb29yLWNsb3NlZFwiO1xuICAgIGNhc2UgXCJzaHV0dGVyXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1zaHV0dGVyLW9wZW5cIiA6IFwib3BwOndpbmRvdy1zaHV0dGVyXCI7XG4gICAgY2FzZSBcImJsaW5kXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmJsaW5kcy1vcGVuXCIgOiBcIm9wcDpibGluZHNcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctY2xvc2VkXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGljb24gdG8gYmUgdXNlZCBmb3IgYSBkb21haW4uXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGEgc3RhdGUgdG8gaW5mbHVlbmNlIHRoZSBkb21haW4gaWNvbi5cbiAqL1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5jb25zdCBmaXhlZEljb25zID0ge1xuICBhbGVydDogXCJvcHA6YWxlcnRcIixcbiAgYWxleGE6IFwib3BwOmFtYXpvbi1hbGV4YVwiLFxuICBhdXRvbWF0aW9uOiBcIm9wcDpyb2JvdFwiLFxuICBjYWxlbmRhcjogXCJvcHA6Y2FsZW5kYXJcIixcbiAgY2FtZXJhOiBcIm9wcDp2aWRlb1wiLFxuICBjbGltYXRlOiBcIm9wcDp0aGVybW9zdGF0XCIsXG4gIGNvbmZpZ3VyYXRvcjogXCJvcHA6c2V0dGluZ3NcIixcbiAgY29udmVyc2F0aW9uOiBcIm9wcDp0ZXh0LXRvLXNwZWVjaFwiLFxuICBjb3VudGVyOiBcIm9wcDpjb3VudGVyXCIsXG4gIGRldmljZV90cmFja2VyOiBcIm9wcDphY2NvdW50XCIsXG4gIGZhbjogXCJvcHA6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwib3BwOmdvb2dsZS1hc3Npc3RhbnRcIixcbiAgZ3JvdXA6IFwib3BwOmdvb2dsZS1jaXJjbGVzLWNvbW11bml0aWVzXCIsXG4gIGhpc3RvcnlfZ3JhcGg6IFwib3BwOmNoYXJ0LWxpbmVcIixcbiAgb3BlbnBlZXJwb3dlcjogXCJvcHA6b3Blbi1wZWVyLXBvd2VyXCIsXG4gIGhvbWVraXQ6IFwib3BwOmhvbWUtYXV0b21hdGlvblwiLFxuICBpbWFnZV9wcm9jZXNzaW5nOiBcIm9wcDppbWFnZS1maWx0ZXItZnJhbWVzXCIsXG4gIGlucHV0X2Jvb2xlYW46IFwib3BwOmRyYXdpbmdcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwib3BwOmNhbGVuZGFyLWNsb2NrXCIsXG4gIGlucHV0X251bWJlcjogXCJvcHA6cmF5LXZlcnRleFwiLFxuICBpbnB1dF9zZWxlY3Q6IFwib3BwOmZvcm1hdC1saXN0LWJ1bGxldGVkXCIsXG4gIGlucHV0X3RleHQ6IFwib3BwOnRleHRib3hcIixcbiAgbGlnaHQ6IFwib3BwOmxpZ2h0YnVsYlwiLFxuICBtYWlsYm94OiBcIm9wcDptYWlsYm94XCIsXG4gIG5vdGlmeTogXCJvcHA6Y29tbWVudC1hbGVydFwiLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogXCJvcHA6YmVsbFwiLFxuICBwZXJzb246IFwib3BwOmFjY291bnRcIixcbiAgcGxhbnQ6IFwib3BwOmZsb3dlclwiLFxuICBwcm94aW1pdHk6IFwib3BwOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwib3BwOnJlbW90ZVwiLFxuICBzY2VuZTogXCJvcHA6cGFsZXR0ZVwiLFxuICBzY3JpcHQ6IFwib3BwOnNjcmlwdC10ZXh0XCIsXG4gIHNlbnNvcjogXCJvcHA6ZXllXCIsXG4gIHNpbXBsZV9hbGFybTogXCJvcHA6YmVsbFwiLFxuICBzdW46IFwib3BwOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgc3dpdGNoOiBcIm9wcDpmbGFzaFwiLFxuICB0aW1lcjogXCJvcHA6dGltZXJcIixcbiAgdXBkYXRlcjogXCJvcHA6Y2xvdWQtdXBsb2FkXCIsXG4gIHZhY3V1bTogXCJvcHA6cm9ib3QtdmFjdXVtXCIsXG4gIHdhdGVyX2hlYXRlcjogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJvcHA6d2VhdGhlci1jbG91ZHlcIixcbiAgd2VibGluazogXCJvcHA6b3Blbi1pbi1uZXdcIixcbiAgem9uZTogXCJvcHA6bWFwLW1hcmtlci1yYWRpdXNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBkb21haW5JY29uID0gKGRvbWFpbjogc3RyaW5nLCBzdGF0ZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGlmIChkb21haW4gaW4gZml4ZWRJY29ucykge1xuICAgIHJldHVybiBmaXhlZEljb25zW2RvbWFpbl07XG4gIH1cblxuICBzd2l0Y2ggKGRvbWFpbikge1xuICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9ob21lXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1zbGVlcFwiO1xuICAgICAgICBjYXNlIFwiZGlzYXJtZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1vdXRsaW5lXCI7XG4gICAgICAgIGNhc2UgXCJ0cmlnZ2VyZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGxcIjtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJiaW5hcnlfc2Vuc29yXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwib2ZmXCJcbiAgICAgICAgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiXG4gICAgICAgIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IFwiY2xvc2VkXCIgPyBcIm9wcDp3aW5kb3ctY2xvc2VkXCIgOiBcIm9wcDp3aW5kb3ctb3BlblwiO1xuXG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJ1bmxvY2tlZFwiID8gXCJvcHA6bG9jay1vcGVuXCIgOiBcIm9wcDpsb2NrXCI7XG5cbiAgICBjYXNlIFwibWVkaWFfcGxheWVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgIT09IFwib2ZmXCIgJiYgc3RhdGUgIT09IFwiaWRsZVwiXG4gICAgICAgID8gXCJvcHA6Y2FzdC1jb25uZWN0ZWRcIlxuICAgICAgICA6IFwib3BwOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDplbW90aWNvbi1kZWFkXCI7XG4gICAgICAgIGNhc2UgXCJzbGVlcGluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpzbGVlcFwiO1xuICAgICAgICBjYXNlIFwiaW5pdGlhbGl6aW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ei13YXZlXCI7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiICsgZG9tYWluICsgXCIgKFwiICsgc3RhdGUgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhbiBpbnB1dCBkYXRldGltZSBzdGF0ZS4gKi9cbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0RGF0ZVRpbWVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX2RhdGUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2FsZW5kYXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcImlucHV0X2RhdGV0aW1lXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzZW5zb3Igc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgVU5JVF9DLCBVTklUX0YgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5jb25zdCBmaXhlZERldmljZUNsYXNzSWNvbnMgPSB7XG4gIGh1bWlkaXR5OiBcIm9wcDp3YXRlci1wZXJjZW50XCIsXG4gIGlsbHVtaW5hbmNlOiBcIm9wcDpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHByZXNzdXJlOiBcIm9wcDpnYXVnZVwiLFxuICBwb3dlcjogXCJvcHA6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcIm9wcDp3aWZpXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRjbGFzcyA9IHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzO1xuXG4gIGlmIChkY2xhc3MgJiYgZGNsYXNzIGluIGZpeGVkRGV2aWNlQ2xhc3NJY29ucykge1xuICAgIHJldHVybiBmaXhlZERldmljZUNsYXNzSWNvbnNbZGNsYXNzXTtcbiAgfVxuICBpZiAoZGNsYXNzID09PSBcImJhdHRlcnlcIikge1xuICAgIGNvbnN0IGJhdHRlcnkgPSBOdW1iZXIoc3RhdGUuc3RhdGUpO1xuICAgIGlmIChpc05hTihiYXR0ZXJ5KSkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnlcIjtcbiAgICB9XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS1hbGVydFwiO1xuICAgIH1cbiAgICAvLyBXaWxsIHJldHVybiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpY29uczogKGxpc3RlZCBzbyBleHRyYWN0b3IgcGlja3MgdXApXG4gICAgLy8gb3BwOmJhdHRlcnktMTBcbiAgICAvLyBvcHA6YmF0dGVyeS0yMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTMwXG4gICAgLy8gb3BwOmJhdHRlcnktNDBcbiAgICAvLyBvcHA6YmF0dGVyeS01MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTYwXG4gICAgLy8gb3BwOmJhdHRlcnktNzBcbiAgICAvLyBvcHA6YmF0dGVyeS04MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTkwXG4gICAgLy8gV2Ugb2JzY3VyZSAnb3BwJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcIm9wcFwifTpiYXR0ZXJ5LSR7YmF0dGVyeVJvdW5kfWA7XG4gIH1cblxuICBjb25zdCB1bml0ID0gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICBpZiAodW5pdCA9PT0gVU5JVF9DIHx8IHVuaXQgPT09IFVOSVRfRikge1xuICAgIHJldHVybiBcIm9wcDp0aGVybW9tZXRlclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwic2Vuc29yXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBiaW5hcnlTZW5zb3JJY29uIH0gZnJvbSBcIi4vYmluYXJ5X3NlbnNvcl9pY29uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBjb3Zlckljb24gfSBmcm9tIFwiLi9jb3Zlcl9pY29uXCI7XG5pbXBvcnQgeyBzZW5zb3JJY29uIH0gZnJvbSBcIi4vc2Vuc29yX2ljb25cIjtcbmltcG9ydCB7IGlucHV0RGF0ZVRpbWVJY29uIH0gZnJvbSBcIi4vaW5wdXRfZGF0ZXRlaW1lX2ljb25cIjtcblxuY29uc3QgZG9tYWluSWNvbnMgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IGJpbmFyeVNlbnNvckljb24sXG4gIGNvdmVyOiBjb3Zlckljb24sXG4gIHNlbnNvcjogc2Vuc29ySWNvbixcbiAgaW5wdXRfZGF0ZXRpbWU6IGlucHV0RGF0ZVRpbWVJY29uLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlSWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxuICBpZiAoc3RhdGUuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGUuZW50aXR5X2lkKTtcblxuICBpZiAoZG9tYWluIGluIGRvbWFpbkljb25zKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb25zW2RvbWFpbl0oc3RhdGUpO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xufTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWZ0ZXJOZXh0UmVuZGVyID0gKGNiOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHJlc29sdmUpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9vcC1pY29uXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5cbmNsYXNzIE9wU3RhdGVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLWljb24gaWNvbj1cIltbY29tcHV0ZUljb24oc3RhdGVPYmopXV1cIj48L29wLWljb24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUljb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlT2JqKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1zdGF0ZS1pY29uXCIsIE9wU3RhdGVJY29uKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQTRDQTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBaERBO0FBa0RBOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==