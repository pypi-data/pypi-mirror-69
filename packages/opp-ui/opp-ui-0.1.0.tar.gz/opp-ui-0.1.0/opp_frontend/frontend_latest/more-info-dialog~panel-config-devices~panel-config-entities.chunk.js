(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-config-devices~panel-config-entities"],{

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

/***/ "./src/panels/config/entities/show-dialog-entity-registry-detail.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/config/entities/show-dialog-entity-registry-detail.ts ***!
  \**************************************************************************/
/*! exports provided: loadEntityRegistryDetailDialog, showEntityRegistryDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEntityRegistryDetailDialog", function() { return loadEntityRegistryDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEntityRegistryDetailDialog", function() { return showEntityRegistryDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadEntityRegistryDetailDialog = () => Promise.all(/*! import() | entity-registry-detail-dialog */[__webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e(7), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op-store-auth-card~pa~5053a3b8"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~~22c2c76f"), __webpack_require__.e("vendors~entity-registry-detail-dialog~more-info-dialog~panel-history~panel-logbook"), __webpack_require__.e("vendors~entity-registry-detail-dialog~panel-devcon~panel-developer-tools~panel-mailbox"), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~more-info-dialog~person-detail-dialog"), __webpack_require__.e("vendors~entity-registry-detail-dialog~more-info-dialog~op-store-auth-card"), __webpack_require__.e("vendors~entity-registry-detail-dialog"), __webpack_require__.e(6), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"), __webpack_require__.e(11), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel~63a769ba"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-devcon~panel-history"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~panel-devcon"), __webpack_require__.e("entity-registry-detail-dialog~more-info-dialog"), __webpack_require__.e("entity-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-entity-registry-detail */ "./src/panels/config/entities/dialog-entity-registry-detail.ts"));

const getDialog = () => {
  return document.querySelector("open-peer-power").shadowRoot.querySelector("dialog-entity-registry-detail");
};

const showEntityRegistryDetailDialog = (element, entityDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-entity-registry-detail",
    dialogImport: loadEntityRegistryDetailDialog,
    dialogParams: entityDetailParams
  });
  return getDialog;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctZW50aXRpZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvaW5wdXRfZGF0ZXRlaW1lX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9lbnRpdGllcy9zaG93LWRpYWxvZy1lbnRpdHktcmVnaXN0cnktZGV0YWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBiaW5hcnkgc2Vuc29yIHN0YXRlLiAqL1xuXG5leHBvcnQgY29uc3QgYmluYXJ5U2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpiYXR0ZXJ5XCIgOiBcIm9wcDpiYXR0ZXJ5LW91dGxpbmVcIjtcbiAgICBjYXNlIFwiY29sZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpzbm93Zmxha2VcIjtcbiAgICBjYXNlIFwiY29ubmVjdGl2aXR5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2VydmVyLW5ldHdvcmstb2ZmXCIgOiBcIm9wcDpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6ZG9vci1jbG9zZWRcIiA6IFwib3BwOmRvb3Itb3BlblwiO1xuICAgIGNhc2UgXCJnYXJhZ2VfZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmdhcmFnZVwiIDogXCJvcHA6Z2FyYWdlLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FzXCI6XG4gICAgY2FzZSBcInBvd2VyXCI6XG4gICAgY2FzZSBcInByb2JsZW1cIjpcbiAgICBjYXNlIFwic2FmZXR5XCI6XG4gICAgY2FzZSBcInNtb2tlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2hpZWxkLWNoZWNrXCIgOiBcIm9wcDphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6dGhlcm1vbWV0ZXJcIiA6IFwib3BwOmZpcmVcIjtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpicmlnaHRuZXNzLTVcIiA6IFwib3BwOmJyaWdodG5lc3MtN1wiO1xuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6bG9ja1wiIDogXCJvcHA6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2F0ZXItb2ZmXCIgOiBcIm9wcDp3YXRlclwiO1xuICAgIGNhc2UgXCJtb3Rpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3YWxrXCIgOiBcIm9wcDpydW5cIjtcbiAgICBjYXNlIFwib2NjdXBhbmN5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6aG9tZS1vdXRsaW5lXCIgOiBcIm9wcDpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzcXVhcmVcIiA6IFwib3BwOnNxdWFyZS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcInBsdWdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpwb3dlci1wbHVnLW9mZlwiIDogXCJvcHA6cG93ZXItcGx1Z1wiO1xuICAgIGNhc2UgXCJwcmVzZW5jZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOm11c2ljLW5vdGUtb2ZmXCIgOiBcIm9wcDptdXNpYy1ub3RlXCI7XG4gICAgY2FzZSBcInZpYnJhdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmNyb3AtcG9ydHJhaXRcIiA6IFwib3BwOnZpYnJhdGVcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnJhZGlvYm94LWJsYW5rXCIgOiBcIm9wcDpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG4gIH1cbn07XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgY292ZXIgc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBjb3Zlckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJnYXJhZ2VcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6Z2FyYWdlLW9wZW5cIiA6IFwib3BwOmdhcmFnZVwiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmRvb3Itb3BlblwiIDogXCJvcHA6ZG9vci1jbG9zZWRcIjtcbiAgICBjYXNlIFwic2h1dHRlclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctc2h1dHRlci1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctc2h1dHRlclwiO1xuICAgIGNhc2UgXCJibGluZFwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpibGluZHMtb3BlblwiIDogXCJvcHA6YmxpbmRzXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctb3BlblwiIDogXCJvcHA6d2luZG93LWNsb3NlZFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZG9tYWluSWNvbihcImNvdmVyXCIsIHN0YXRlLnN0YXRlKTtcbiAgfVxufTtcbiIsIi8qKlxuICogUmV0dXJuIHRoZSBpY29uIHRvIGJlIHVzZWQgZm9yIGEgZG9tYWluLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHN0YXRlIHRvIGluZmx1ZW5jZSB0aGUgZG9tYWluIGljb24uXG4gKi9cbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgZml4ZWRJY29ucyA9IHtcbiAgYWxlcnQ6IFwib3BwOmFsZXJ0XCIsXG4gIGFsZXhhOiBcIm9wcDphbWF6b24tYWxleGFcIixcbiAgYXV0b21hdGlvbjogXCJvcHA6cm9ib3RcIixcbiAgY2FsZW5kYXI6IFwib3BwOmNhbGVuZGFyXCIsXG4gIGNhbWVyYTogXCJvcHA6dmlkZW9cIixcbiAgY2xpbWF0ZTogXCJvcHA6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwib3BwOnNldHRpbmdzXCIsXG4gIGNvbnZlcnNhdGlvbjogXCJvcHA6dGV4dC10by1zcGVlY2hcIixcbiAgY291bnRlcjogXCJvcHA6Y291bnRlclwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJvcHA6YWNjb3VudFwiLFxuICBmYW46IFwib3BwOmZhblwiLFxuICBnb29nbGVfYXNzaXN0YW50OiBcIm9wcDpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcIm9wcDpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLFxuICBoaXN0b3J5X2dyYXBoOiBcIm9wcDpjaGFydC1saW5lXCIsXG4gIG9wZW5wZWVycG93ZXI6IFwib3BwOm9wZW4tcGVlci1wb3dlclwiLFxuICBob21la2l0OiBcIm9wcDpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJvcHA6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLFxuICBpbnB1dF9ib29sZWFuOiBcIm9wcDpkcmF3aW5nXCIsXG4gIGlucHV0X2RhdGV0aW1lOiBcIm9wcDpjYWxlbmRhci1jbG9ja1wiLFxuICBpbnB1dF9udW1iZXI6IFwib3BwOnJheS12ZXJ0ZXhcIixcbiAgaW5wdXRfc2VsZWN0OiBcIm9wcDpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLFxuICBpbnB1dF90ZXh0OiBcIm9wcDp0ZXh0Ym94XCIsXG4gIGxpZ2h0OiBcIm9wcDpsaWdodGJ1bGJcIixcbiAgbWFpbGJveDogXCJvcHA6bWFpbGJveFwiLFxuICBub3RpZnk6IFwib3BwOmNvbW1lbnQtYWxlcnRcIixcbiAgcGVyc2lzdGVudF9ub3RpZmljYXRpb246IFwib3BwOmJlbGxcIixcbiAgcGVyc29uOiBcIm9wcDphY2NvdW50XCIsXG4gIHBsYW50OiBcIm9wcDpmbG93ZXJcIixcbiAgcHJveGltaXR5OiBcIm9wcDphcHBsZS1zYWZhcmlcIixcbiAgcmVtb3RlOiBcIm9wcDpyZW1vdGVcIixcbiAgc2NlbmU6IFwib3BwOnBhbGV0dGVcIixcbiAgc2NyaXB0OiBcIm9wcDpzY3JpcHQtdGV4dFwiLFxuICBzZW5zb3I6IFwib3BwOmV5ZVwiLFxuICBzaW1wbGVfYWxhcm06IFwib3BwOmJlbGxcIixcbiAgc3VuOiBcIm9wcDp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJvcHA6Zmxhc2hcIixcbiAgdGltZXI6IFwib3BwOnRpbWVyXCIsXG4gIHVwZGF0ZXI6IFwib3BwOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwib3BwOnJvYm90LXZhY3V1bVwiLFxuICB3YXRlcl9oZWF0ZXI6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHdlYXRoZXI6IFwib3BwOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwib3BwOm9wZW4taW4tbmV3XCIsXG4gIHpvbmU6IFwib3BwOm1hcC1tYXJrZXItcmFkaXVzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZG9tYWluSWNvbiA9IChkb21haW46IHN0cmluZywgc3RhdGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoZG9tYWluIGluIGZpeGVkSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWRJY29uc1tkb21haW5dO1xuICB9XG5cbiAgc3dpdGNoIChkb21haW4pIHtcbiAgICBjYXNlIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiYXJtZWRfaG9tZVwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXBsdXNcIjtcbiAgICAgICAgY2FzZSBcImFybWVkX25pZ2h0XCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtb3V0bGluZVwiO1xuICAgICAgICBjYXNlIFwidHJpZ2dlcmVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcmluZ1wiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJvcHA6cmFkaW9ib3gtYmxhbmtcIlxuICAgICAgICA6IFwib3BwOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcblxuICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgcmV0dXJuIHN0YXRlID09PSBcImNsb3NlZFwiID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcblxuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwidW5sb2NrZWRcIiA/IFwib3BwOmxvY2stb3BlblwiIDogXCJvcHA6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlICE9PSBcIm9mZlwiICYmIHN0YXRlICE9PSBcImlkbGVcIlxuICAgICAgICA/IFwib3BwOmNhc3QtY29ubmVjdGVkXCJcbiAgICAgICAgOiBcIm9wcDpjYXN0XCI7XG5cbiAgICBjYXNlIFwiendhdmVcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImRlYWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6c2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDp0aW1lci1zYW5kXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYW4gaW5wdXQgZGF0ZXRpbWUgc3RhdGUuICovXG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dERhdGVUaW1lSWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgcmV0dXJuIFwib3BwOmNsb2NrXCI7XG4gIH1cbiAgaWYgKCFzdGF0ZS5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgcmV0dXJuIFwib3BwOmNhbGVuZGFyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJpbnB1dF9kYXRldGltZVwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc2Vuc29yIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IFVOSVRfQywgVU5JVF9GIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuY29uc3QgZml4ZWREZXZpY2VDbGFzc0ljb25zID0ge1xuICBodW1pZGl0eTogXCJvcHA6d2F0ZXItcGVyY2VudFwiLFxuICBpbGx1bWluYW5jZTogXCJvcHA6YnJpZ2h0bmVzcy01XCIsXG4gIHRlbXBlcmF0dXJlOiBcIm9wcDp0aGVybW9tZXRlclwiLFxuICBwcmVzc3VyZTogXCJvcHA6Z2F1Z2VcIixcbiAgcG93ZXI6IFwib3BwOmZsYXNoXCIsXG4gIHNpZ25hbF9zdHJlbmd0aDogXCJvcHA6d2lmaVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbnNvckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBjb25zdCBkY2xhc3MgPSBzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcztcblxuICBpZiAoZGNsYXNzICYmIGRjbGFzcyBpbiBmaXhlZERldmljZUNsYXNzSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWREZXZpY2VDbGFzc0ljb25zW2RjbGFzc107XG4gIH1cbiAgaWYgKGRjbGFzcyA9PT0gXCJiYXR0ZXJ5XCIpIHtcbiAgICBjb25zdCBiYXR0ZXJ5ID0gTnVtYmVyKHN0YXRlLnN0YXRlKTtcbiAgICBpZiAoaXNOYU4oYmF0dGVyeSkpIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5LXVua25vd25cIjtcbiAgICB9XG4gICAgY29uc3QgYmF0dGVyeVJvdW5kID0gTWF0aC5yb3VuZChiYXR0ZXJ5IC8gMTApICogMTA7XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA+PSAxMDApIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5XCI7XG4gICAgfVxuICAgIGlmIChiYXR0ZXJ5Um91bmQgPD0gMCkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnktYWxlcnRcIjtcbiAgICB9XG4gICAgLy8gV2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnM6IChsaXN0ZWQgc28gZXh0cmFjdG9yIHBpY2tzIHVwKVxuICAgIC8vIG9wcDpiYXR0ZXJ5LTEwXG4gICAgLy8gb3BwOmJhdHRlcnktMjBcbiAgICAvLyBvcHA6YmF0dGVyeS0zMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTQwXG4gICAgLy8gb3BwOmJhdHRlcnktNTBcbiAgICAvLyBvcHA6YmF0dGVyeS02MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTcwXG4gICAgLy8gb3BwOmJhdHRlcnktODBcbiAgICAvLyBvcHA6YmF0dGVyeS05MFxuICAgIC8vIFdlIG9ic2N1cmUgJ29wcCcgaW4gaWNvbm5hbWUgc28gdGhpcyBuYW1lIGRvZXMgbm90IGdldCBwaWNrZWQgdXBcbiAgICByZXR1cm4gYCR7XCJvcHBcIn06YmF0dGVyeS0ke2JhdHRlcnlSb3VuZH1gO1xuICB9XG5cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudDtcbiAgaWYgKHVuaXQgPT09IFVOSVRfQyB8fCB1bml0ID09PSBVTklUX0YpIHtcbiAgICByZXR1cm4gXCJvcHA6dGhlcm1vbWV0ZXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcInNlbnNvclwiKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgYmluYXJ5U2Vuc29ySWNvbiB9IGZyb20gXCIuL2JpbmFyeV9zZW5zb3JfaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgY292ZXJJY29uIH0gZnJvbSBcIi4vY292ZXJfaWNvblwiO1xuaW1wb3J0IHsgc2Vuc29ySWNvbiB9IGZyb20gXCIuL3NlbnNvcl9pY29uXCI7XG5pbXBvcnQgeyBpbnB1dERhdGVUaW1lSWNvbiB9IGZyb20gXCIuL2lucHV0X2RhdGV0ZWltZV9pY29uXCI7XG5cbmNvbnN0IGRvbWFpbkljb25zID0ge1xuICBiaW5hcnlfc2Vuc29yOiBiaW5hcnlTZW5zb3JJY29uLFxuICBjb3ZlcjogY292ZXJJY29uLFxuICBzZW5zb3I6IHNlbnNvckljb24sXG4gIGlucHV0X2RhdGV0aW1lOiBpbnB1dERhdGVUaW1lSWNvbixcbn07XG5cbmV4cG9ydCBjb25zdCBzdGF0ZUljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbiAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMuaWNvbikge1xuICAgIHJldHVybiBzdGF0ZS5hdHRyaWJ1dGVzLmljb247XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlRG9tYWluKHN0YXRlLmVudGl0eV9pZCk7XG5cbiAgaWYgKGRvbWFpbiBpbiBkb21haW5JY29ucykge1xuICAgIHJldHVybiBkb21haW5JY29uc1tkb21haW5dKHN0YXRlKTtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihkb21haW4sIHN0YXRlLnN0YXRlKTtcbn07XG4iLCIvLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWRlYm91bmNlLWZ1bmN0aW9uXG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3Rcbi8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3Jcbi8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogYmFuLXR5cGVzXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSA8VCBleHRlbmRzIEZ1bmN0aW9uPihcbiAgZnVuYzogVCxcbiAgd2FpdCxcbiAgaW1tZWRpYXRlID0gZmFsc2Vcbik6IFQgPT4ge1xuICBsZXQgdGltZW91dDtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLXRoaXMtYXNzaWdubWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9XG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERpYWxvZ0VudGl0eVJlZ2lzdHJ5RGV0YWlsIH0gZnJvbSBcIi4vZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB7XG4gIGVudHJ5PzogRW50aXR5UmVnaXN0cnlFbnRyeTtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJlbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiXG4gICk7XG5cbmNvbnN0IGdldERpYWxvZyA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJvcGVuLXBlZXItcG93ZXJcIikhXG4gICAgLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiKSBhc1xuICAgIHwgRGlhbG9nRW50aXR5UmVnaXN0cnlEZXRhaWxcbiAgICB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93RW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBlbnRpdHlEZXRhaWxQYXJhbXM6IEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiAoKCkgPT4gRGlhbG9nRW50aXR5UmVnaXN0cnlEZXRhaWwgfCB1bmRlZmluZWQpID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogZW50aXR5RGV0YWlsUGFyYW1zLFxuICB9KTtcbiAgcmV0dXJuIGdldERpYWxvZztcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQTRDQTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBaERBO0FBa0RBOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBLDB4RUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=