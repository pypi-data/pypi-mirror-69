(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-logbook"],{

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDate = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleDateStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "longDate");

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

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

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from opp object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      opp: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(opp.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/logbook/op-logbook-data.js":
/*!***********************************************!*\
  !*** ./src/panels/logbook/op-logbook-data.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");

const DATA_CACHE = {};
const ALL_ENTITIES = "*";

class OpLogbookData extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      opp: {
        type: Object,
        observer: "oppChanged"
      },
      filterDate: {
        type: String,
        observer: "filterDataChanged"
      },
      filterPeriod: {
        type: Number,
        observer: "filterDataChanged"
      },
      filterEntity: {
        type: String,
        observer: "filterDataChanged"
      },
      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true
      },
      entries: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true
      }
    };
  }

  oppChanged(newOpp, oldOpp) {
    if (!oldOpp && this.filterDate) {
      this.updateData();
    }
  }

  filterDataChanged(newValue, oldValue) {
    if (oldValue !== undefined) {
      this.updateData();
    }
  }

  updateData() {
    if (!this.opp) return;

    this._setIsLoading(true);

    this.getData(this.filterDate, this.filterPeriod, this.filterEntity).then(logbookEntries => {
      this._setEntries(logbookEntries);

      this._setIsLoading(false);
    });
  }

  getData(date, period, entityId) {
    if (!entityId) entityId = ALL_ENTITIES;
    if (!DATA_CACHE[period]) DATA_CACHE[period] = [];
    if (!DATA_CACHE[period][date]) DATA_CACHE[period][date] = [];

    if (DATA_CACHE[period][date][entityId]) {
      return DATA_CACHE[period][date][entityId];
    }

    if (entityId !== ALL_ENTITIES && DATA_CACHE[period][date][ALL_ENTITIES]) {
      return DATA_CACHE[period][date][ALL_ENTITIES].then(function (entities) {
        return entities.filter(function (entity) {
          return entity.entity_id === entityId;
        });
      });
    }

    DATA_CACHE[period][date][entityId] = this._getFromServer(date, period, entityId);
    return DATA_CACHE[period][date][entityId];
  }

  _getFromServer(date, period, entityId) {
    let url = "logbook/" + date + "?period=" + period;

    if (entityId !== ALL_ENTITIES) {
      url += "&entity=" + entityId;
    }

    return this.opp.callApi("GET", url).then(function (logbookEntries) {
      logbookEntries.reverse();
      return logbookEntries;
    }, function () {
      return null;
    });
  }

  refreshLogbook() {
    DATA_CACHE[this.filterPeriod][this.filterDate] = [];
    this.updateData();
  }

}

customElements.define("op-logbook-data", OpLogbookData);

/***/ }),

/***/ "./src/panels/logbook/op-logbook.ts":
/*!******************************************!*\
  !*** ./src/panels/logbook/op-logbook.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_virtualizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-virtualizer */ "./node_modules/lit-virtualizer/lit-virtualizer.js");
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











let OpLogbook = _decorate(null, function (_initialize, _LitElement) {
  class OpLogbook extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpLogbook,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "entries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        attribute: "rtl",
        type: Boolean,
        reflect: true
      })],
      key: "_rtl",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        const oldOpp = changedProps.get("opp");
        const languageChanged = oldOpp === undefined || oldOpp.language !== this.opp.language;
        return changedProps.has("entries") || languageChanged;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(_changedProps) {
        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(this.opp);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this$entries;

        if (!((_this$entries = this.entries) === null || _this$entries === void 0 ? void 0 : _this$entries.length)) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
        ${this.opp.localize("ui.panel.logbook.entries_not_found")}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <lit-virtualizer
        .items=${this.entries}
        .renderItem=${(item, index) => this._renderLogbookItem(item, index)}
        style="height: 100%;"
      ></lit-virtualizer>
    `;
      }
    }, {
      kind: "method",
      key: "_renderLogbookItem",
      value: function _renderLogbookItem(item, index) {
        const previous = this.entries[index - 1];
        const state = item.entity_id ? this.opp.states[item.entity_id] : undefined;
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <div>
        ${index === 0 || (item === null || item === void 0 ? void 0 : item.when) && (previous === null || previous === void 0 ? void 0 : previous.when) && new Date(item.when).toDateString() !== new Date(previous.when).toDateString() ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <h4 class="date">
                ${Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(item.when), this.opp.language)}
              </h4>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]``}

        <div class="entry">
          <div class="time">
            ${Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_1__["formatTimeWithSeconds"])(new Date(item.when), this.opp.language)}
          </div>
          <op-icon
            .icon=${state ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__["stateIcon"])(state) : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_3__["domainIcon"])(item.domain)}
          ></op-icon>
          <div class="message">
            ${!item.entity_id ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                  <span class="name">${item.name}</span>
                ` : lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                  <a
                    href="#"
                    @click=${this._entityClicked}
                    .entityId=${item.entity_id}
                    class="name"
                  >
                    ${item.name}
                  </a>
                `}
            <span>${item.message}</span>
          </div>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_entityClicked",
      value: function _entityClicked(ev) {
        ev.preventDefault();
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "opp-more-info", {
          entityId: ev.target.entityId
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
      :host {
        display: block;
        height: 100%;
      }

      :host([rtl]) {
        direction: ltr;
      }

      .entry {
        display: flex;
        line-height: 2em;
      }

      .time {
        width: 65px;
        flex-shrink: 0;
        font-size: 0.8em;
        color: var(--secondary-text-color);
      }

      :host([rtl]) .date {
        direction: rtl;
      }

      op-icon {
        margin: 0 8px 0 16px;
        flex-shrink: 0;
        color: var(--primary-text-color);
      }

      .message {
        color: var(--primary-text-color);
      }

      a {
        color: var(--primary-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]);

customElements.define("op-logbook", OpLogbook);

/***/ }),

/***/ "./src/panels/logbook/op-panel-logbook.js":
/*!************************************************!*\
  !*** ./src/panels/logbook/op-panel-logbook.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_entity_op_entity_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/entity/op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
/* harmony import */ var _resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/op-date-picker-style */ "./src/resources/op-date-picker-style.js");
/* harmony import */ var _resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _op_logbook_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./op-logbook-data */ "./src/panels/logbook/op-logbook-data.js");
/* harmony import */ var _op_logbook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./op-logbook */ "./src/panels/logbook/op-logbook.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");


















/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelLogbook extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="op-style">
        .content {
          padding: 0 16px 0 16px;
        }

        op-logbook {
          height: calc(100vh - 136px);
        }

        :host([narrow]) op-logbook {
          height: calc(100vh - 198px);
        }

        paper-spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .wrap {
          margin-bottom: 24px;
        }

        .filters {
          display: flex;
          align-items: center;
        }

        :host([narrow]) .filters {
          flex-wrap: wrap;
        }

        vaadin-date-picker {
          max-width: 200px;
          margin-right: 16px;
        }

        :host([rtl]) vaadin-date-picker {
          margin-right: 0;
          margin-left: 16px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          --paper-input-container-label-floating: {
            padding-bottom: 10px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
          margin-right: 0;
          margin-left: 16px;
        }

        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }

        op-entity-picker {
          display: inline-block;
          flex-grow: 1;
          max-width: 400px;
        }

        :host([narrow]) op-entity-picker {
          max-width: none;
          width: 100%;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <op-logbook-data
        opp="[[opp]]"
        is-loading="{{isLoading}}"
        entries="{{entries}}"
        filter-date="[[_computeFilterDate(_currentDate)]]"
        filter-period="[[_computeFilterDays(_periodIndex)]]"
        filter-entity="[[entityId]]"
      ></op-logbook-data>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
            <div main-title>[[localize('panel.logbook')]]</div>
            <paper-icon-button
              icon="opp:refresh"
              on-click="refreshLogbook"
              hidden$="[[isLoading]]"
            ></paper-icon-button>
          </app-toolbar>
        </app-header>

        <div class="content">
          <paper-spinner
            active="[[isLoading]]"
            hidden$="[[!isLoading]]"
            alt="[[localize('ui.common.loading')]]"
          ></paper-spinner>

          <div class="filters">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.logbook.showing_entries')]]"
              disabled="[[isLoading]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.logbook.period')]]"
              disabled="[[isLoading]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_periodIndex}}"
              >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item
                >
              </paper-listbox>
            </paper-dropdown-menu>

            <op-entity-picker
              opp="[[opp]]"
              value="{{_entityId}}"
              label="[[localize('ui.components.entity.entity-picker.entity')]]"
              disabled="[[isLoading]]"
              on-change="_entityPicked"
            ></op-entity-picker>
          </div>

          <op-logbook
            opp="[[opp]]"
            entries="[[entries]]"
            hidden$="[[isLoading]]"
          ></op-logbook>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      },
      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function () {
          const value = new Date();
          const today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
          return today.toISOString().split("T")[0];
        }
      },
      _periodIndex: {
        type: Number,
        value: 0
      },
      _entityId: {
        type: String,
        value: ""
      },
      entityId: {
        type: String,
        value: "",
        readOnly: true
      },
      isLoading: {
        type: Boolean
      },
      entries: {
        type: Array
      },
      datePicker: {
        type: Object
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(opp)"
      }
    };
  }

  connectedCallback() {
    super.connectedCallback(); // We are unable to parse date because we use intl api to render date

    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", date => Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__["formatDate"])(new Date(date.year, date.month, date.day), this.opp.language));
  }

  _computeFilterDate(_currentDate) {
    if (!_currentDate) return undefined;

    var parts = _currentDate.split("-");

    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]).toISOString();
  }

  _computeFilterDays(periodIndex) {
    switch (periodIndex) {
      case 1:
        return 3;

      case 2:
        return 7;

      default:
        return 1;
    }
  }

  _entityPicked(ev) {
    this._setEntityId(ev.target.value);
  }

  refreshLogbook() {
    this.shadowRoot.querySelector("op-logbook-data").refreshLogbook();
  }

  _computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__["computeRTL"])(opp);
  }

}

customElements.define("op-panel-logbook", OpPanelLogbook);

/***/ }),

/***/ "./src/resources/op-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/op-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `
<dom-module id="op-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0;
      }

      [part~="label"] {
        top: 6px;
        font-size: var(--paper-font-subhead_-_font-size);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      :host([focused]) [part~="label"] {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        color: var(--primary-text-color);
        top: 3px;
      }

      [part~="input-field"]::before, [part~="input-field"]::after {
        background-color: var(--paper-input-container-color, var(--secondary-text-color));
        opacity: 1;
      }

      :host([focused]) [part~="input-field"]::before, :host([focused]) [part~="input-field"]::after {
        background-color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
      }
    </style>
  </template>
</dom-module>
<dom-module id="op-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module>
<dom-module id="op-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--secondary-text-color);
        --material-body-text-color: var(--primary-background-color);
      }

      [part="overlay"] {
        background-color: var(--primary-background-color);
        --material-body-text-color: var(--secondary-text-color);
      }

    </style>
  </template>
</dom-module>
<dom-module id="op-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>
`;
document.head.appendChild(documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvY2hlY2tfb3B0aW9uc19zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvaW5wdXRfZGF0ZXRlaW1lX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL29wLWxvZ2Jvb2stZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svb3AtbG9nYm9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svb3AtcGFuZWwtbG9nYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL29wLWRhdGUtcGlja2VyLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImxvbmdEYXRlXCIpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuaW1wb3J0IHsgdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PiBmZWNoYS5mb3JtYXQoZGF0ZU9iaiwgXCJzaG9ydFRpbWVcIik7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lV2l0aFNlY29uZHMgPSB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bVRpbWVcIik7XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG4vKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgYmluYXJ5IHNlbnNvciBzdGF0ZS4gKi9cblxuZXhwb3J0IGNvbnN0IGJpbmFyeVNlbnNvckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSkgPT4ge1xuICBjb25zdCBhY3RpdmF0ZWQgPSBzdGF0ZS5zdGF0ZSAmJiBzdGF0ZS5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJiYXR0ZXJ5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YmF0dGVyeVwiIDogXCJvcHA6YmF0dGVyeS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcImNvbGRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp0aGVybW9tZXRlclwiIDogXCJvcHA6c25vd2ZsYWtlXCI7XG4gICAgY2FzZSBcImNvbm5lY3Rpdml0eVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNlcnZlci1uZXR3b3JrLW9mZlwiIDogXCJvcHA6c2VydmVyLW5ldHdvcmtcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmRvb3ItY2xvc2VkXCIgOiBcIm9wcDpkb29yLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FyYWdlX2Rvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpnYXJhZ2VcIiA6IFwib3BwOmdhcmFnZS1vcGVuXCI7XG4gICAgY2FzZSBcImdhc1wiOlxuICAgIGNhc2UgXCJwb3dlclwiOlxuICAgIGNhc2UgXCJwcm9ibGVtXCI6XG4gICAgY2FzZSBcInNhZmV0eVwiOlxuICAgIGNhc2UgXCJzbW9rZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNoaWVsZC1jaGVja1wiIDogXCJvcHA6YWxlcnRcIjtcbiAgICBjYXNlIFwiaGVhdFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpmaXJlXCI7XG4gICAgY2FzZSBcImxpZ2h0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6YnJpZ2h0bmVzcy01XCIgOiBcIm9wcDpicmlnaHRuZXNzLTdcIjtcbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmxvY2tcIiA6IFwib3BwOmxvY2stb3BlblwiO1xuICAgIGNhc2UgXCJtb2lzdHVyZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndhdGVyLW9mZlwiIDogXCJvcHA6d2F0ZXJcIjtcbiAgICBjYXNlIFwibW90aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2Fsa1wiIDogXCJvcHA6cnVuXCI7XG4gICAgY2FzZSBcIm9jY3VwYW5jeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJvcGVuaW5nXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c3F1YXJlXCIgOiBcIm9wcDpzcXVhcmUtb3V0bGluZVwiO1xuICAgIGNhc2UgXCJwbHVnXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6cG93ZXItcGx1Zy1vZmZcIiA6IFwib3BwOnBvd2VyLXBsdWdcIjtcbiAgICBjYXNlIFwicHJlc2VuY2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpob21lLW91dGxpbmVcIiA6IFwib3BwOmhvbWVcIjtcbiAgICBjYXNlIFwic291bmRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDptdXNpYy1ub3RlLW9mZlwiIDogXCJvcHA6bXVzaWMtbm90ZVwiO1xuICAgIGNhc2UgXCJ2aWJyYXRpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpjcm9wLXBvcnRyYWl0XCIgOiBcIm9wcDp2aWJyYXRlXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndpbmRvdy1jbG9zZWRcIiA6IFwib3BwOndpbmRvdy1vcGVuXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuICB9XG59O1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGNvdmVyIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5leHBvcnQgY29uc3QgY292ZXJJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBvcGVuID0gc3RhdGUuc3RhdGUgIT09IFwiY2xvc2VkXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiZ2FyYWdlXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmdhcmFnZS1vcGVuXCIgOiBcIm9wcDpnYXJhZ2VcIjtcbiAgICBjYXNlIFwiZG9vclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpkb29yLW9wZW5cIiA6IFwib3BwOmRvb3ItY2xvc2VkXCI7XG4gICAgY2FzZSBcInNodXR0ZXJcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6d2luZG93LXNodXR0ZXItb3BlblwiIDogXCJvcHA6d2luZG93LXNodXR0ZXJcIjtcbiAgICBjYXNlIFwiYmxpbmRcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6YmxpbmRzLW9wZW5cIiA6IFwib3BwOmJsaW5kc1wiO1xuICAgIGNhc2UgXCJ3aW5kb3dcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6d2luZG93LW9wZW5cIiA6IFwib3BwOndpbmRvdy1jbG9zZWRcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRvbWFpbkljb24oXCJjb3ZlclwiLCBzdGF0ZS5zdGF0ZSk7XG4gIH1cbn07XG4iLCIvKipcbiAqIFJldHVybiB0aGUgaWNvbiB0byBiZSB1c2VkIGZvciBhIGRvbWFpbi5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYSBzdGF0ZSB0byBpbmZsdWVuY2UgdGhlIGRvbWFpbiBpY29uLlxuICovXG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbmNvbnN0IGZpeGVkSWNvbnMgPSB7XG4gIGFsZXJ0OiBcIm9wcDphbGVydFwiLFxuICBhbGV4YTogXCJvcHA6YW1hem9uLWFsZXhhXCIsXG4gIGF1dG9tYXRpb246IFwib3BwOnJvYm90XCIsXG4gIGNhbGVuZGFyOiBcIm9wcDpjYWxlbmRhclwiLFxuICBjYW1lcmE6IFwib3BwOnZpZGVvXCIsXG4gIGNsaW1hdGU6IFwib3BwOnRoZXJtb3N0YXRcIixcbiAgY29uZmlndXJhdG9yOiBcIm9wcDpzZXR0aW5nc1wiLFxuICBjb252ZXJzYXRpb246IFwib3BwOnRleHQtdG8tc3BlZWNoXCIsXG4gIGNvdW50ZXI6IFwib3BwOmNvdW50ZXJcIixcbiAgZGV2aWNlX3RyYWNrZXI6IFwib3BwOmFjY291bnRcIixcbiAgZmFuOiBcIm9wcDpmYW5cIixcbiAgZ29vZ2xlX2Fzc2lzdGFudDogXCJvcHA6Z29vZ2xlLWFzc2lzdGFudFwiLFxuICBncm91cDogXCJvcHA6Z29vZ2xlLWNpcmNsZXMtY29tbXVuaXRpZXNcIixcbiAgaGlzdG9yeV9ncmFwaDogXCJvcHA6Y2hhcnQtbGluZVwiLFxuICBvcGVucGVlcnBvd2VyOiBcIm9wcDpvcGVuLXBlZXItcG93ZXJcIixcbiAgaG9tZWtpdDogXCJvcHA6aG9tZS1hdXRvbWF0aW9uXCIsXG4gIGltYWdlX3Byb2Nlc3Npbmc6IFwib3BwOmltYWdlLWZpbHRlci1mcmFtZXNcIixcbiAgaW5wdXRfYm9vbGVhbjogXCJvcHA6ZHJhd2luZ1wiLFxuICBpbnB1dF9kYXRldGltZTogXCJvcHA6Y2FsZW5kYXItY2xvY2tcIixcbiAgaW5wdXRfbnVtYmVyOiBcIm9wcDpyYXktdmVydGV4XCIsXG4gIGlucHV0X3NlbGVjdDogXCJvcHA6Zm9ybWF0LWxpc3QtYnVsbGV0ZWRcIixcbiAgaW5wdXRfdGV4dDogXCJvcHA6dGV4dGJveFwiLFxuICBsaWdodDogXCJvcHA6bGlnaHRidWxiXCIsXG4gIG1haWxib3g6IFwib3BwOm1haWxib3hcIixcbiAgbm90aWZ5OiBcIm9wcDpjb21tZW50LWFsZXJ0XCIsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiBcIm9wcDpiZWxsXCIsXG4gIHBlcnNvbjogXCJvcHA6YWNjb3VudFwiLFxuICBwbGFudDogXCJvcHA6Zmxvd2VyXCIsXG4gIHByb3hpbWl0eTogXCJvcHA6YXBwbGUtc2FmYXJpXCIsXG4gIHJlbW90ZTogXCJvcHA6cmVtb3RlXCIsXG4gIHNjZW5lOiBcIm9wcDpwYWxldHRlXCIsXG4gIHNjcmlwdDogXCJvcHA6c2NyaXB0LXRleHRcIixcbiAgc2Vuc29yOiBcIm9wcDpleWVcIixcbiAgc2ltcGxlX2FsYXJtOiBcIm9wcDpiZWxsXCIsXG4gIHN1bjogXCJvcHA6d2hpdGUtYmFsYW5jZS1zdW5ueVwiLFxuICBzd2l0Y2g6IFwib3BwOmZsYXNoXCIsXG4gIHRpbWVyOiBcIm9wcDp0aW1lclwiLFxuICB1cGRhdGVyOiBcIm9wcDpjbG91ZC11cGxvYWRcIixcbiAgdmFjdXVtOiBcIm9wcDpyb2JvdC12YWN1dW1cIixcbiAgd2F0ZXJfaGVhdGVyOiBcIm9wcDp0aGVybW9tZXRlclwiLFxuICB3ZWF0aGVyOiBcIm9wcDp3ZWF0aGVyLWNsb3VkeVwiLFxuICB3ZWJsaW5rOiBcIm9wcDpvcGVuLWluLW5ld1wiLFxuICB6b25lOiBcIm9wcDptYXAtbWFya2VyLXJhZGl1c1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGRvbWFpbkljb24gPSAoZG9tYWluOiBzdHJpbmcsIHN0YXRlPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgaWYgKGRvbWFpbiBpbiBmaXhlZEljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkSWNvbnNbZG9tYWluXTtcbiAgfVxuXG4gIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImFybWVkX2hvbWVcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1wbHVzXCI7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9uaWdodFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJkaXNhcm1lZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLW91dGxpbmVcIjtcbiAgICAgICAgY2FzZSBcInRyaWdnZXJlZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXJpbmdcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbFwiO1xuICAgICAgfVxuXG4gICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJvZmZcIlxuICAgICAgICA/IFwib3BwOnJhZGlvYm94LWJsYW5rXCJcbiAgICAgICAgOiBcIm9wcDpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG5cbiAgICBjYXNlIFwiY292ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSA9PT0gXCJjbG9zZWRcIiA/IFwib3BwOndpbmRvdy1jbG9zZWRcIiA6IFwib3BwOndpbmRvdy1vcGVuXCI7XG5cbiAgICBjYXNlIFwibG9ja1wiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcInVubG9ja2VkXCIgPyBcIm9wcDpsb2NrLW9wZW5cIiA6IFwib3BwOmxvY2tcIjtcblxuICAgIGNhc2UgXCJtZWRpYV9wbGF5ZXJcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSAhPT0gXCJvZmZcIiAmJiBzdGF0ZSAhPT0gXCJpZGxlXCJcbiAgICAgICAgPyBcIm9wcDpjYXN0LWNvbm5lY3RlZFwiXG4gICAgICAgIDogXCJvcHA6Y2FzdFwiO1xuXG4gICAgY2FzZSBcInp3YXZlXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJkZWFkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmVtb3RpY29uLWRlYWRcIjtcbiAgICAgICAgY2FzZSBcInNsZWVwaW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnNsZWVwXCI7XG4gICAgICAgIGNhc2UgXCJpbml0aWFsaXppbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6dGltZXItc2FuZFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIm9wcDp6LXdhdmVcIjtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJVbmFibGUgdG8gZmluZCBpY29uIGZvciBkb21haW4gXCIgKyBkb21haW4gKyBcIiAoXCIgKyBzdGF0ZSArIFwiKVwiXG4gICAgICApO1xuICAgICAgcmV0dXJuIERFRkFVTFRfRE9NQUlOX0lDT047XG4gIH1cbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGFuIGlucHV0IGRhdGV0aW1lIHN0YXRlLiAqL1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5leHBvcnQgY29uc3QgaW5wdXREYXRlVGltZUljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcIm9wcDpjbG9ja1wiO1xuICB9XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgIHJldHVybiBcIm9wcDpjYWxlbmRhclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwiaW5wdXRfZGF0ZXRpbWVcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHNlbnNvciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBVTklUX0MsIFVOSVRfRiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmNvbnN0IGZpeGVkRGV2aWNlQ2xhc3NJY29ucyA9IHtcbiAgaHVtaWRpdHk6IFwib3BwOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwib3BwOmJyaWdodG5lc3MtNVwiLFxuICB0ZW1wZXJhdHVyZTogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgcHJlc3N1cmU6IFwib3BwOmdhdWdlXCIsXG4gIHBvd2VyOiBcIm9wcDpmbGFzaFwiLFxuICBzaWduYWxfc3RyZW5ndGg6IFwib3BwOndpZmlcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5zb3JJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS11bmtub3duXCI7XG4gICAgfVxuICAgIGNvbnN0IGJhdHRlcnlSb3VuZCA9IE1hdGgucm91bmQoYmF0dGVyeSAvIDEwKSAqIDEwO1xuICAgIGlmIChiYXR0ZXJ5Um91bmQgPj0gMTAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeVwiO1xuICAgIH1cbiAgICBpZiAoYmF0dGVyeVJvdW5kIDw9IDApIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBvcHA6YmF0dGVyeS0xMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTIwXG4gICAgLy8gb3BwOmJhdHRlcnktMzBcbiAgICAvLyBvcHA6YmF0dGVyeS00MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTUwXG4gICAgLy8gb3BwOmJhdHRlcnktNjBcbiAgICAvLyBvcHA6YmF0dGVyeS03MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTgwXG4gICAgLy8gb3BwOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdvcHAnIGluIGljb25uYW1lIHNvIHRoaXMgbmFtZSBkb2VzIG5vdCBnZXQgcGlja2VkIHVwXG4gICAgcmV0dXJuIGAke1wib3BwXCJ9OmJhdHRlcnktJHtiYXR0ZXJ5Um91bmR9YDtcbiAgfVxuXG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIGlmICh1bml0ID09PSBVTklUX0MgfHwgdW5pdCA9PT0gVU5JVF9GKSB7XG4gICAgcmV0dXJuIFwib3BwOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGJpbmFyeVNlbnNvckljb24gfSBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IGNvdmVySWNvbiB9IGZyb20gXCIuL2NvdmVyX2ljb25cIjtcbmltcG9ydCB7IHNlbnNvckljb24gfSBmcm9tIFwiLi9zZW5zb3JfaWNvblwiO1xuaW1wb3J0IHsgaW5wdXREYXRlVGltZUljb24gfSBmcm9tIFwiLi9pbnB1dF9kYXRldGVpbWVfaWNvblwiO1xuXG5jb25zdCBkb21haW5JY29ucyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogYmluYXJ5U2Vuc29ySWNvbixcbiAgY292ZXI6IGNvdmVySWNvbixcbiAgc2Vuc29yOiBzZW5zb3JJY29uLFxuICBpbnB1dF9kYXRldGltZTogaW5wdXREYXRlVGltZUljb24sXG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG4gIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy5pY29uO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZS5lbnRpdHlfaWQpO1xuXG4gIGlmIChkb21haW4gaW4gZG9tYWluSWNvbnMpIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbnNbZG9tYWluXShzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG59O1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIG9wcCBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKG9wcC5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNvbnN0IERBVEFfQ0FDSEUgPSB7fTtcbmNvbnN0IEFMTF9FTlRJVElFUyA9IFwiKlwiO1xuXG5jbGFzcyBPcExvZ2Jvb2tEYXRhIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIm9wcENoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlckRhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJmaWx0ZXJEYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZmlsdGVyUGVyaW9kOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZmlsdGVyRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlckVudGl0eToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImZpbHRlckRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBlbnRyaWVzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBvcHBDaGFuZ2VkKG5ld09wcCwgb2xkT3BwKSB7XG4gICAgaWYgKCFvbGRPcHAgJiYgdGhpcy5maWx0ZXJEYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJEYXRhQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMub3BwKSByZXR1cm47XG5cbiAgICB0aGlzLl9zZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0aGlzLmdldERhdGEodGhpcy5maWx0ZXJEYXRlLCB0aGlzLmZpbHRlclBlcmlvZCwgdGhpcy5maWx0ZXJFbnRpdHkpLnRoZW4oXG4gICAgICAobG9nYm9va0VudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0RW50cmllcyhsb2dib29rRW50cmllcyk7XG4gICAgICAgIHRoaXMuX3NldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGEoZGF0ZSwgcGVyaW9kLCBlbnRpdHlJZCkge1xuICAgIGlmICghZW50aXR5SWQpIGVudGl0eUlkID0gQUxMX0VOVElUSUVTO1xuXG4gICAgaWYgKCFEQVRBX0NBQ0hFW3BlcmlvZF0pIERBVEFfQ0FDSEVbcGVyaW9kXSA9IFtdO1xuICAgIGlmICghREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdKSBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV0gPSBbXTtcblxuICAgIGlmIChEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdKSB7XG4gICAgICByZXR1cm4gREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXTtcbiAgICB9XG5cbiAgICBpZiAoZW50aXR5SWQgIT09IEFMTF9FTlRJVElFUyAmJiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bQUxMX0VOVElUSUVTXSkge1xuICAgICAgcmV0dXJuIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtBTExfRU5USVRJRVNdLnRoZW4oZnVuY3Rpb24oZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICByZXR1cm4gZW50aXR5LmVudGl0eV9pZCA9PT0gZW50aXR5SWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXSA9IHRoaXMuX2dldEZyb21TZXJ2ZXIoXG4gICAgICBkYXRlLFxuICAgICAgcGVyaW9kLFxuICAgICAgZW50aXR5SWRcbiAgICApO1xuICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdO1xuICB9XG5cbiAgX2dldEZyb21TZXJ2ZXIoZGF0ZSwgcGVyaW9kLCBlbnRpdHlJZCkge1xuICAgIGxldCB1cmwgPSBcImxvZ2Jvb2svXCIgKyBkYXRlICsgXCI/cGVyaW9kPVwiICsgcGVyaW9kO1xuICAgIGlmIChlbnRpdHlJZCAhPT0gQUxMX0VOVElUSUVTKSB7XG4gICAgICB1cmwgKz0gXCImZW50aXR5PVwiICsgZW50aXR5SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub3BwLmNhbGxBcGkoXCJHRVRcIiwgdXJsKS50aGVuKFxuICAgICAgZnVuY3Rpb24obG9nYm9va0VudHJpZXMpIHtcbiAgICAgICAgbG9nYm9va0VudHJpZXMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbG9nYm9va0VudHJpZXM7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoTG9nYm9vaygpIHtcbiAgICBEQVRBX0NBQ0hFW3RoaXMuZmlsdGVyUGVyaW9kXVt0aGlzLmZpbHRlckRhdGVdID0gW107XG4gICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtbG9nYm9vay1kYXRhXCIsIE9wTG9nYm9va0RhdGEpO1xuIiwiaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1pY29uXCI7XG5pbXBvcnQgeyBmb3JtYXRUaW1lV2l0aFNlY29uZHMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCJsaXQtdmlydHVhbGl6ZXJcIjtcbmltcG9ydCB7IExvZ2Jvb2tFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2xvZ2Jvb2tcIjtcblxuY2xhc3MgT3BMb2dib29rIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50cmllczogTG9nYm9va0VudHJ5W10gPSBbXTtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInJ0bFwiLCB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHJpdmF0ZSBfcnRsID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgY29uc3Qgb2xkT3BwID0gY2hhbmdlZFByb3BzLmdldChcIm9wcFwiKSBhcyBPcGVuUGVlclBvd2VyIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGxhbmd1YWdlQ2hhbmdlZCA9XG4gICAgICBvbGRPcHAgPT09IHVuZGVmaW5lZCB8fCBvbGRPcHAubGFuZ3VhZ2UgIT09IHRoaXMub3BwLmxhbmd1YWdlO1xuICAgIHJldHVybiBjaGFuZ2VkUHJvcHMuaGFzKFwiZW50cmllc1wiKSB8fCBsYW5ndWFnZUNoYW5nZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChfY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHRoaXMuX3J0bCA9IGNvbXB1dGVSVEwodGhpcy5vcHApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLmVudHJpZXM/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5sb2dib29rLmVudHJpZXNfbm90X2ZvdW5kXCIpfVxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxsaXQtdmlydHVhbGl6ZXJcbiAgICAgICAgLml0ZW1zPSR7dGhpcy5lbnRyaWVzfVxuICAgICAgICAucmVuZGVySXRlbT0keyhpdGVtOiBMb2dib29rRW50cnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgICAgdGhpcy5fcmVuZGVyTG9nYm9va0l0ZW0oaXRlbSwgaW5kZXgpfVxuICAgICAgICBzdHlsZT1cImhlaWdodDogMTAwJTtcIlxuICAgICAgPjwvbGl0LXZpcnR1YWxpemVyPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJMb2dib29rSXRlbShcbiAgICBpdGVtOiBMb2dib29rRW50cnksXG4gICAgaW5kZXg6IG51bWJlclxuICApOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmVudHJpZXNbaW5kZXggLSAxXTtcbiAgICBjb25zdCBzdGF0ZSA9IGl0ZW0uZW50aXR5X2lkID8gdGhpcy5vcHAuc3RhdGVzW2l0ZW0uZW50aXR5X2lkXSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXY+XG4gICAgICAgICR7aW5kZXggPT09IDAgfHxcbiAgICAgICAgKGl0ZW0/LndoZW4gJiZcbiAgICAgICAgICBwcmV2aW91cz8ud2hlbiAmJlxuICAgICAgICAgIG5ldyBEYXRlKGl0ZW0ud2hlbikudG9EYXRlU3RyaW5nKCkgIT09XG4gICAgICAgICAgICBuZXcgRGF0ZShwcmV2aW91cy53aGVuKS50b0RhdGVTdHJpbmcoKSlcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAke2Zvcm1hdERhdGUobmV3IERhdGUoaXRlbS53aGVuKSwgdGhpcy5vcHAubGFuZ3VhZ2UpfVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBgfVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+XG4gICAgICAgICAgICAke2Zvcm1hdFRpbWVXaXRoU2Vjb25kcyhuZXcgRGF0ZShpdGVtLndoZW4pLCB0aGlzLm9wcC5sYW5ndWFnZSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG9wLWljb25cbiAgICAgICAgICAgIC5pY29uPSR7c3RhdGUgPyBzdGF0ZUljb24oc3RhdGUpIDogZG9tYWluSWNvbihpdGVtLmRvbWFpbil9XG4gICAgICAgICAgPjwvb3AtaWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgJHshaXRlbS5lbnRpdHlfaWRcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9lbnRpdHlDbGlja2VkfVxuICAgICAgICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtpdGVtLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDxzcGFuPiR7aXRlbS5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5Q2xpY2tlZChldjogRXZlbnQpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IChldi50YXJnZXQgYXMgYW55KS5lbnRpdHlJZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3J0bF0pIHtcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICB9XG5cbiAgICAgIC5lbnRyeSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICB9XG5cbiAgICAgIC50aW1lIHtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcnRsXSkgLmRhdGUge1xuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgIH1cblxuICAgICAgb3AtaWNvbiB7XG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAxNnB4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1sb2dib29rXCIsIE9wTG9nYm9vayk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvb3AtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL29wLWRhdGUtcGlja2VyLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9vcC1sb2dib29rLWRhdGFcIjtcbmltcG9ydCBcIi4vb3AtbG9nYm9va1wiO1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE9wUGFuZWxMb2dib29rIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJvcC1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWxvZ2Jvb2sge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEzNnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSBvcC1sb2dib29rIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxOThweCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsdGVycyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW25hcnJvd10pIC5maWx0ZXJzIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YWFkaW4tZGF0ZS1waWNrZXIge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHZhYWRpbi1kYXRlLXBpY2tlciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc6IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWVudGl0eS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSBvcC1lbnRpdHktcGlja2VyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8b3AtbG9nYm9vay1kYXRhXG4gICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICBpcy1sb2FkaW5nPVwie3tpc0xvYWRpbmd9fVwiXG4gICAgICAgIGVudHJpZXM9XCJ7e2VudHJpZXN9fVwiXG4gICAgICAgIGZpbHRlci1kYXRlPVwiW1tfY29tcHV0ZUZpbHRlckRhdGUoX2N1cnJlbnREYXRlKV1dXCJcbiAgICAgICAgZmlsdGVyLXBlcmlvZD1cIltbX2NvbXB1dGVGaWx0ZXJEYXlzKF9wZXJpb2RJbmRleCldXVwiXG4gICAgICAgIGZpbHRlci1lbnRpdHk9XCJbW2VudGl0eUlkXV1cIlxuICAgICAgPjwvb3AtbG9nYm9vay1kYXRhPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8b3AtbWVudS1idXR0b24gb3BwPVwiW1tvcHBdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L29wLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLmxvZ2Jvb2snKV1dPC9kaXY+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cIm9wcDpyZWZyZXNoXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJyZWZyZXNoTG9nYm9va1wiXG4gICAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICBhY3RpdmU9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICBhbHQ9XCJbW2xvY2FsaXplKCd1aS5jb21tb24ubG9hZGluZycpXV1cIlxuICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cInBpY2tlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfY3VycmVudERhdGV9fVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwubG9nYm9vay5zaG93aW5nX2VudHJpZXMnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cblxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5sb2dib29rLnBlcmlvZCcpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3BlcmlvZEluZGV4fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLndlZWsnLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG5cbiAgICAgICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2VudGl0eUlkfX1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5JyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9lbnRpdHlQaWNrZWRcIlxuICAgICAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxvcC1sb2dib29rXG4gICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgIGVudHJpZXM9XCJbW2VudHJpZXNdXVwiXG4gICAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgPjwvb3AtbG9nYm9vaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICBuYXJyb3c6IHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlIH0sXG5cbiAgICAgIC8vIElTTzg2MDEgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gICAgICBfY3VycmVudERhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLlVUQyh2YWx1ZS5nZXRGdWxsWWVhcigpLCB2YWx1ZS5nZXRNb250aCgpLCB2YWx1ZS5nZXREYXRlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBfcGVyaW9kSW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIF9lbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGVudHJpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBkYXRlUGlja2VyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKG9wcClcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gV2UgYXJlIHVuYWJsZSB0byBwYXJzZSBkYXRlIGJlY2F1c2Ugd2UgdXNlIGludGwgYXBpIHRvIHJlbmRlciBkYXRlXG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLnBhcnNlRGF0ZVwiLCBudWxsKTtcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4uZm9ybWF0RGF0ZVwiLCAoZGF0ZSkgPT5cbiAgICAgIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIHRoaXMub3BwLmxhbmd1YWdlKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRhdGUoX2N1cnJlbnREYXRlKSB7XG4gICAgaWYgKCFfY3VycmVudERhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcnRzID0gX2N1cnJlbnREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnNlSW50KHBhcnRzWzFdKSAtIDE7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnRzWzBdLCBwYXJ0c1sxXSwgcGFydHNbMl0pLnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRheXMocGVyaW9kSW5kZXgpIHtcbiAgICBzd2l0Y2ggKHBlcmlvZEluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLl9zZXRFbnRpdHlJZChldi50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVmcmVzaExvZ2Jvb2soKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJvcC1sb2dib29rLWRhdGFcIikucmVmcmVzaExvZ2Jvb2soKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKG9wcCkge1xuICAgIHJldHVybiBjb21wdXRlUlRMKG9wcCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFuZWwtbG9nYm9va1wiLCBPcFBhbmVsTG9nYm9vayk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcclxuXHJcbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci10ZXh0LWZpZWxkLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi10ZXh0LWZpZWxkXCI+XHJcbiAgPHRlbXBsYXRlPlxyXG4gICAgPHN0eWxlPlxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImxhYmVsXCJdIHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJsYWJlbFwiXSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUsIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSwgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci1idXR0b24tc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWJ1dHRvblwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZT5cclxuICAgICAgOmhvc3QoW3BhcnR+PVwidG9kYXktYnV0dG9uXCJdKSBbcGFydH49XCJidXR0b25cIl06OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XHJcbiAgPHRlbXBsYXRlPlxyXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XHJcbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgIDwvc3R5bGU+XHJcbiAgPC90ZW1wbGF0ZT5cclxuPC9kb20tbW9kdWxlPlxyXG48ZG9tLW1vZHVsZSBpZD1cIm9wLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyLWRlZmF1bHQtdGhlbWVcIj5cclxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuYDtcclxuXHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExQ0E7QUE0Q0E7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFjQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQWhEQTtBQWtEQTs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUE1QkE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7QUFDQTtBQWdIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBSEE7QUFRQTs7OztBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQU9BOztBQVBBO0FBQ0E7OztBQWFBOzs7QUFHQTs7O0FBR0E7QUFFQTtBQUZBOzs7QUFPQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7O0FBcENBO0FBeUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0NBOzs7QUFwSUE7QUFDQTtBQXNJQTs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQTdDQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNQQTtBQUNBO0FBNFBBOzs7Ozs7Ozs7OztBQ3RSQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0ZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=