(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa~cloud-google-assistant"],{

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
});

/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
  const compareTime = options.compareTime || new Date();
  let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  const tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  let timeDesc;

  for (let i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
}

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

/***/ "./src/common/entity/entity_filter.ts":
/*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
/*! exports provided: isEmptyFilter, generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyFilter", function() { return isEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const isEmptyFilter = filter => filter.include_domains.length + filter.include_entities.length + filter.exclude_domains.length + filter.exclude_entities.length === 0;
const generateFilter = (includeDomains, includeEntities, excludeDomains, excludeEntities) => {
  const includeDomainsSet = new Set(includeDomains);
  const includeEntitiesSet = new Set(includeEntities);
  const excludeDomainsSet = new Set(excludeDomains);
  const excludeEntitiesSet = new Set(excludeEntities);
  const haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
  const haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

  if (!haveInclude && !haveExclude) {
    return () => true;
  } // Case 2 - includes, no excludes - only include specified entities


  if (haveInclude && !haveExclude) {
    return entityId => includeEntitiesSet.has(entityId) || includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
  } // Case 3 - excludes, no includes - only exclude specified entities


  if (!haveInclude && haveExclude) {
    return entityId => !excludeEntitiesSet.has(entityId) && !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
  } // Case 4 - both includes and excludes specified
  // Case 4a - include domain specified
  //  - if domain is included, pass if entity not excluded
  //  - if domain is not included, pass if entity is included
  // note: if both include and exclude domains specified,
  //   the exclude domains are ignored


  if (includeDomainsSet.size) {
    return entityId => includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId)) ? !excludeEntitiesSet.has(entityId) : includeEntitiesSet.has(entityId);
  } // Case 4b - exclude domain specified
  //  - if domain is excluded, pass if entity is included
  //  - if domain is not excluded, pass if entity not excluded


  if (excludeDomainsSet.size) {
    return entityId => excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId)) ? includeEntitiesSet.has(entityId) : !excludeEntitiesSet.has(entityId);
  } // Case 4c - neither include or exclude domain specified
  //  - Only pass if entity is included.  Ignore entity excludes.


  return entityId => includeEntitiesSet.has(entityId);
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

/***/ "./src/components/entity/state-info.js":
/*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../op-relative-time */ "./src/components/op-relative-time.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");







class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
  }

  static get styleTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
  }

  static get stateBadgeTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
  }

  static get infoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <op-relative-time
              opp="[[opp]]"
              datetime="[[stateObj.last_changed]]"
            ></op-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: () => false
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "computeRTL(opp)"
      }
    };
  }

  computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
  }

  computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(opp);
  }

}

customElements.define("state-info", StateInfo);

/***/ }),

/***/ "./src/components/op-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/op-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class OpRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      opp: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged"
      },
      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged"
      },
      parsedDateTime: Object
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback(); // update every 60 seconds

    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;
    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;
    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }

}

customElements.define("op-relative-time", OpRelativeTime);

/***/ }),

/***/ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts":
/*!******************************************************************!*\
  !*** ./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts ***!
  \******************************************************************/
/*! exports provided: loadDomainTogglerDialog, showDomainTogglerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDomainTogglerDialog", function() { return loadDomainTogglerDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDomainTogglerDialog", function() { return showDomainTogglerDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDomainTogglerDialog = () => Promise.all(/*! import() | dialog-domain-toggler */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("dialog-domain-toggler")]).then(__webpack_require__.bind(null, /*! ./dialog-domain-toggler */ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts"));
const showDomainTogglerDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-domain-toggler",
    dialogImport: loadDomainTogglerDialog,
    dialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGF+Y2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy9pZi1kZWZpbmVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9pbnB1dF9kYXRldGVpbWVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zZW5zb3JfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9kb21haW4tdG9nZ2xlci9zaG93LWRpYWxvZy1kb21haW4tdG9nZ2xlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRhdGUgb2JqZWN0IGFzIHJlbGF0aXZlIHRpbWUgZnJvbSBub3cuXG4gKlxuICogRXhhbXBsZSBvdXRwdXQ6IDUgbWludXRlcyBhZ28sIGluIDMgZGF5cy5cbiAqL1xuY29uc3QgdGVzdHMgPSBbNjAsIDYwLCAyNCwgN107XG5jb25zdCBsYW5nS2V5ID0gW1wic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKFxuICBkYXRlT2JqOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBvcHRpb25zOiB7XG4gICAgY29tcGFyZVRpbWU/OiBEYXRlO1xuICAgIGluY2x1ZGVUZW5zZT86IGJvb2xlYW47XG4gIH0gPSB7fVxuKTogc3RyaW5nIHtcbiAgY29uc3QgY29tcGFyZVRpbWUgPSBvcHRpb25zLmNvbXBhcmVUaW1lIHx8IG5ldyBEYXRlKCk7XG4gIGxldCBkZWx0YSA9IChjb21wYXJlVGltZS5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLyAxMDAwO1xuICBjb25zdCB0ZW5zZSA9IGRlbHRhID49IDAgPyBcInBhc3RcIiA6IFwiZnV0dXJlXCI7XG4gIGRlbHRhID0gTWF0aC5hYnMoZGVsdGEpO1xuXG4gIGxldCB0aW1lRGVzYztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRlbHRhIDwgdGVzdHNbaV0pIHtcbiAgICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgICBgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLiR7bGFuZ0tleVtpXX1gLFxuICAgICAgICBcImNvdW50XCIsXG4gICAgICAgIGRlbHRhXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgLz0gdGVzdHNbaV07XG4gIH1cblxuICBpZiAodGltZURlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgIFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLndlZWtcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIGRlbHRhXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLmluY2x1ZGVUZW5zZSA9PT0gZmFsc2VcbiAgICA/IHRpbWVEZXNjXG4gICAgOiBsb2NhbGl6ZShgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLiR7dGVuc2V9YCwgXCJ0aW1lXCIsIHRpbWVEZXNjKTtcbn1cbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBiaW5hcnkgc2Vuc29yIHN0YXRlLiAqL1xuXG5leHBvcnQgY29uc3QgYmluYXJ5U2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGFjdGl2YXRlZCA9IHN0YXRlLnN0YXRlICYmIHN0YXRlLnN0YXRlID09PSBcIm9mZlwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImJhdHRlcnlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpiYXR0ZXJ5XCIgOiBcIm9wcDpiYXR0ZXJ5LW91dGxpbmVcIjtcbiAgICBjYXNlIFwiY29sZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnRoZXJtb21ldGVyXCIgOiBcIm9wcDpzbm93Zmxha2VcIjtcbiAgICBjYXNlIFwiY29ubmVjdGl2aXR5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2VydmVyLW5ldHdvcmstb2ZmXCIgOiBcIm9wcDpzZXJ2ZXItbmV0d29ya1wiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6ZG9vci1jbG9zZWRcIiA6IFwib3BwOmRvb3Itb3BlblwiO1xuICAgIGNhc2UgXCJnYXJhZ2VfZG9vclwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmdhcmFnZVwiIDogXCJvcHA6Z2FyYWdlLW9wZW5cIjtcbiAgICBjYXNlIFwiZ2FzXCI6XG4gICAgY2FzZSBcInBvd2VyXCI6XG4gICAgY2FzZSBcInByb2JsZW1cIjpcbiAgICBjYXNlIFwic2FmZXR5XCI6XG4gICAgY2FzZSBcInNtb2tlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6c2hpZWxkLWNoZWNrXCIgOiBcIm9wcDphbGVydFwiO1xuICAgIGNhc2UgXCJoZWF0XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6dGhlcm1vbWV0ZXJcIiA6IFwib3BwOmZpcmVcIjtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpicmlnaHRuZXNzLTVcIiA6IFwib3BwOmJyaWdodG5lc3MtN1wiO1xuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6bG9ja1wiIDogXCJvcHA6bG9jay1vcGVuXCI7XG4gICAgY2FzZSBcIm1vaXN0dXJlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2F0ZXItb2ZmXCIgOiBcIm9wcDp3YXRlclwiO1xuICAgIGNhc2UgXCJtb3Rpb25cIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3YWxrXCIgOiBcIm9wcDpydW5cIjtcbiAgICBjYXNlIFwib2NjdXBhbmN5XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6aG9tZS1vdXRsaW5lXCIgOiBcIm9wcDpob21lXCI7XG4gICAgY2FzZSBcIm9wZW5pbmdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzcXVhcmVcIiA6IFwib3BwOnNxdWFyZS1vdXRsaW5lXCI7XG4gICAgY2FzZSBcInBsdWdcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpwb3dlci1wbHVnLW9mZlwiIDogXCJvcHA6cG93ZXItcGx1Z1wiO1xuICAgIGNhc2UgXCJwcmVzZW5jZVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmhvbWUtb3V0bGluZVwiIDogXCJvcHA6aG9tZVwiO1xuICAgIGNhc2UgXCJzb3VuZFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOm11c2ljLW5vdGUtb2ZmXCIgOiBcIm9wcDptdXNpYy1ub3RlXCI7XG4gICAgY2FzZSBcInZpYnJhdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmNyb3AtcG9ydHJhaXRcIiA6IFwib3BwOnZpYnJhdGVcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnJhZGlvYm94LWJsYW5rXCIgOiBcIm9wcDpjaGVja2JveC1tYXJrZWQtY2lyY2xlXCI7XG4gIH1cbn07XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGEgY292ZXIgc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBjb3Zlckljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG9wZW4gPSBzdGF0ZS5zdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgc3dpdGNoIChzdGF0ZS5hdHRyaWJ1dGVzLmRldmljZV9jbGFzcykge1xuICAgIGNhc2UgXCJnYXJhZ2VcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6Z2FyYWdlLW9wZW5cIiA6IFwib3BwOmdhcmFnZVwiO1xuICAgIGNhc2UgXCJkb29yXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmRvb3Itb3BlblwiIDogXCJvcHA6ZG9vci1jbG9zZWRcIjtcbiAgICBjYXNlIFwic2h1dHRlclwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctc2h1dHRlci1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctc2h1dHRlclwiO1xuICAgIGNhc2UgXCJibGluZFwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpibGluZHMtb3BlblwiIDogXCJvcHA6YmxpbmRzXCI7XG4gICAgY2FzZSBcIndpbmRvd1wiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDp3aW5kb3ctb3BlblwiIDogXCJvcHA6d2luZG93LWNsb3NlZFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZG9tYWluSWNvbihcImNvdmVyXCIsIHN0YXRlLnN0YXRlKTtcbiAgfVxufTtcbiIsIi8qKlxuICogUmV0dXJuIHRoZSBpY29uIHRvIGJlIHVzZWQgZm9yIGEgZG9tYWluLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBhIHN0YXRlIHRvIGluZmx1ZW5jZSB0aGUgZG9tYWluIGljb24uXG4gKi9cbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuY29uc3QgZml4ZWRJY29ucyA9IHtcbiAgYWxlcnQ6IFwib3BwOmFsZXJ0XCIsXG4gIGFsZXhhOiBcIm9wcDphbWF6b24tYWxleGFcIixcbiAgYXV0b21hdGlvbjogXCJvcHA6cm9ib3RcIixcbiAgY2FsZW5kYXI6IFwib3BwOmNhbGVuZGFyXCIsXG4gIGNhbWVyYTogXCJvcHA6dmlkZW9cIixcbiAgY2xpbWF0ZTogXCJvcHA6dGhlcm1vc3RhdFwiLFxuICBjb25maWd1cmF0b3I6IFwib3BwOnNldHRpbmdzXCIsXG4gIGNvbnZlcnNhdGlvbjogXCJvcHA6dGV4dC10by1zcGVlY2hcIixcbiAgY291bnRlcjogXCJvcHA6Y291bnRlclwiLFxuICBkZXZpY2VfdHJhY2tlcjogXCJvcHA6YWNjb3VudFwiLFxuICBmYW46IFwib3BwOmZhblwiLFxuICBnb29nbGVfYXNzaXN0YW50OiBcIm9wcDpnb29nbGUtYXNzaXN0YW50XCIsXG4gIGdyb3VwOiBcIm9wcDpnb29nbGUtY2lyY2xlcy1jb21tdW5pdGllc1wiLFxuICBoaXN0b3J5X2dyYXBoOiBcIm9wcDpjaGFydC1saW5lXCIsXG4gIG9wZW5wZWVycG93ZXI6IFwib3BwOm9wZW4tcGVlci1wb3dlclwiLFxuICBob21la2l0OiBcIm9wcDpob21lLWF1dG9tYXRpb25cIixcbiAgaW1hZ2VfcHJvY2Vzc2luZzogXCJvcHA6aW1hZ2UtZmlsdGVyLWZyYW1lc1wiLFxuICBpbnB1dF9ib29sZWFuOiBcIm9wcDpkcmF3aW5nXCIsXG4gIGlucHV0X2RhdGV0aW1lOiBcIm9wcDpjYWxlbmRhci1jbG9ja1wiLFxuICBpbnB1dF9udW1iZXI6IFwib3BwOnJheS12ZXJ0ZXhcIixcbiAgaW5wdXRfc2VsZWN0OiBcIm9wcDpmb3JtYXQtbGlzdC1idWxsZXRlZFwiLFxuICBpbnB1dF90ZXh0OiBcIm9wcDp0ZXh0Ym94XCIsXG4gIGxpZ2h0OiBcIm9wcDpsaWdodGJ1bGJcIixcbiAgbWFpbGJveDogXCJvcHA6bWFpbGJveFwiLFxuICBub3RpZnk6IFwib3BwOmNvbW1lbnQtYWxlcnRcIixcbiAgcGVyc2lzdGVudF9ub3RpZmljYXRpb246IFwib3BwOmJlbGxcIixcbiAgcGVyc29uOiBcIm9wcDphY2NvdW50XCIsXG4gIHBsYW50OiBcIm9wcDpmbG93ZXJcIixcbiAgcHJveGltaXR5OiBcIm9wcDphcHBsZS1zYWZhcmlcIixcbiAgcmVtb3RlOiBcIm9wcDpyZW1vdGVcIixcbiAgc2NlbmU6IFwib3BwOnBhbGV0dGVcIixcbiAgc2NyaXB0OiBcIm9wcDpzY3JpcHQtdGV4dFwiLFxuICBzZW5zb3I6IFwib3BwOmV5ZVwiLFxuICBzaW1wbGVfYWxhcm06IFwib3BwOmJlbGxcIixcbiAgc3VuOiBcIm9wcDp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gIHN3aXRjaDogXCJvcHA6Zmxhc2hcIixcbiAgdGltZXI6IFwib3BwOnRpbWVyXCIsXG4gIHVwZGF0ZXI6IFwib3BwOmNsb3VkLXVwbG9hZFwiLFxuICB2YWN1dW06IFwib3BwOnJvYm90LXZhY3V1bVwiLFxuICB3YXRlcl9oZWF0ZXI6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHdlYXRoZXI6IFwib3BwOndlYXRoZXItY2xvdWR5XCIsXG4gIHdlYmxpbms6IFwib3BwOm9wZW4taW4tbmV3XCIsXG4gIHpvbmU6IFwib3BwOm1hcC1tYXJrZXItcmFkaXVzXCIsXG59O1xuXG5leHBvcnQgY29uc3QgZG9tYWluSWNvbiA9IChkb21haW46IHN0cmluZywgc3RhdGU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoZG9tYWluIGluIGZpeGVkSWNvbnMpIHtcbiAgICByZXR1cm4gZml4ZWRJY29uc1tkb21haW5dO1xuICB9XG5cbiAgc3dpdGNoIChkb21haW4pIHtcbiAgICBjYXNlIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiYXJtZWRfaG9tZVwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsLXBsdXNcIjtcbiAgICAgICAgY2FzZSBcImFybWVkX25pZ2h0XCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtc2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImRpc2FybWVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtb3V0bGluZVwiO1xuICAgICAgICBjYXNlIFwidHJpZ2dlcmVkXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcmluZ1wiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcIm9wcDpiZWxsXCI7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlID09PSBcIm9mZlwiXG4gICAgICAgID8gXCJvcHA6cmFkaW9ib3gtYmxhbmtcIlxuICAgICAgICA6IFwib3BwOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcblxuICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgcmV0dXJuIHN0YXRlID09PSBcImNsb3NlZFwiID8gXCJvcHA6d2luZG93LWNsb3NlZFwiIDogXCJvcHA6d2luZG93LW9wZW5cIjtcblxuICAgIGNhc2UgXCJsb2NrXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwidW5sb2NrZWRcIiA/IFwib3BwOmxvY2stb3BlblwiIDogXCJvcHA6bG9ja1wiO1xuXG4gICAgY2FzZSBcIm1lZGlhX3BsYXllclwiOlxuICAgICAgcmV0dXJuIHN0YXRlICYmIHN0YXRlICE9PSBcIm9mZlwiICYmIHN0YXRlICE9PSBcImlkbGVcIlxuICAgICAgICA/IFwib3BwOmNhc3QtY29ubmVjdGVkXCJcbiAgICAgICAgOiBcIm9wcDpjYXN0XCI7XG5cbiAgICBjYXNlIFwiendhdmVcIjpcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBcImRlYWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ZW1vdGljb24tZGVhZFwiO1xuICAgICAgICBjYXNlIFwic2xlZXBpbmdcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6c2xlZXBcIjtcbiAgICAgICAgY2FzZSBcImluaXRpYWxpemluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDp0aW1lci1zYW5kXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnotd2F2ZVwiO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlVuYWJsZSB0byBmaW5kIGljb24gZm9yIGRvbWFpbiBcIiArIGRvbWFpbiArIFwiIChcIiArIHN0YXRlICsgXCIpXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5RmlsdGVyIHtcbiAgaW5jbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9lbnRpdGllczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaXNFbXB0eUZpbHRlciA9IChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzLmxlbmd0aCA9PT1cbiAgMDtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmlsdGVyID0gKFxuICBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBpbmNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZUVudGl0aWVzPzogc3RyaW5nW11cbik6IEZpbHRlckZ1bmMgPT4ge1xuICBjb25zdCBpbmNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoaW5jbHVkZURvbWFpbnMpO1xuICBjb25zdCBpbmNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGluY2x1ZGVFbnRpdGllcyk7XG4gIGNvbnN0IGV4Y2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChleGNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGV4Y2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoZXhjbHVkZUVudGl0aWVzKTtcblxuICBjb25zdCBoYXZlSW5jbHVkZSA9IGluY2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGluY2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcbiAgY29uc3QgaGF2ZUV4Y2x1ZGUgPSBleGNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBleGNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG5cbiAgLy8gQ2FzZSAxIC0gbm8gaW5jbHVkZXMgb3IgZXhjbHVkZXMgLSBwYXNzIGFsbCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICB9XG5cbiAgLy8gQ2FzZSAyIC0gaW5jbHVkZXMsIG5vIGV4Y2x1ZGVzIC0gb25seSBpbmNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpIHx8XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSAzIC0gZXhjbHVkZXMsIG5vIGluY2x1ZGVzIC0gb25seSBleGNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmIGhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSAmJlxuICAgICAgIWV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDQgLSBib3RoIGluY2x1ZGVzIGFuZCBleGNsdWRlcyBzcGVjaWZpZWRcbiAgLy8gQ2FzZSA0YSAtIGluY2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyBub3RlOiBpZiBib3RoIGluY2x1ZGUgYW5kIGV4Y2x1ZGUgZG9tYWlucyBzcGVjaWZpZWQsXG4gIC8vICAgdGhlIGV4Y2x1ZGUgZG9tYWlucyBhcmUgaWdub3JlZFxuICBpZiAoaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRiIC0gZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIGlmIChleGNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGMgLSBuZWl0aGVyIGluY2x1ZGUgb3IgZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIE9ubHkgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWQuICBJZ25vcmUgZW50aXR5IGV4Y2x1ZGVzLlxuICByZXR1cm4gKGVudGl0eUlkKSA9PiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbn07XG4iLCIvKiogUmV0dXJuIGFuIGljb24gcmVwcmVzZW50aW5nIGFuIGlucHV0IGRhdGV0aW1lIHN0YXRlLiAqL1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5leHBvcnQgY29uc3QgaW5wdXREYXRlVGltZUljb24gPSAoc3RhdGU6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgIHJldHVybiBcIm9wcDpjbG9ja1wiO1xuICB9XG4gIGlmICghc3RhdGUuYXR0cmlidXRlcy5oYXNfdGltZSkge1xuICAgIHJldHVybiBcIm9wcDpjYWxlbmRhclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwiaW5wdXRfZGF0ZXRpbWVcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHNlbnNvciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBVTklUX0MsIFVOSVRfRiB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5cbmNvbnN0IGZpeGVkRGV2aWNlQ2xhc3NJY29ucyA9IHtcbiAgaHVtaWRpdHk6IFwib3BwOndhdGVyLXBlcmNlbnRcIixcbiAgaWxsdW1pbmFuY2U6IFwib3BwOmJyaWdodG5lc3MtNVwiLFxuICB0ZW1wZXJhdHVyZTogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgcHJlc3N1cmU6IFwib3BwOmdhdWdlXCIsXG4gIHBvd2VyOiBcIm9wcDpmbGFzaFwiLFxuICBzaWduYWxfc3RyZW5ndGg6IFwib3BwOndpZmlcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5zb3JJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgZGNsYXNzID0gc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3M7XG5cbiAgaWYgKGRjbGFzcyAmJiBkY2xhc3MgaW4gZml4ZWREZXZpY2VDbGFzc0ljb25zKSB7XG4gICAgcmV0dXJuIGZpeGVkRGV2aWNlQ2xhc3NJY29uc1tkY2xhc3NdO1xuICB9XG4gIGlmIChkY2xhc3MgPT09IFwiYmF0dGVyeVwiKSB7XG4gICAgY29uc3QgYmF0dGVyeSA9IE51bWJlcihzdGF0ZS5zdGF0ZSk7XG4gICAgaWYgKGlzTmFOKGJhdHRlcnkpKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS11bmtub3duXCI7XG4gICAgfVxuICAgIGNvbnN0IGJhdHRlcnlSb3VuZCA9IE1hdGgucm91bmQoYmF0dGVyeSAvIDEwKSAqIDEwO1xuICAgIGlmIChiYXR0ZXJ5Um91bmQgPj0gMTAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeVwiO1xuICAgIH1cbiAgICBpZiAoYmF0dGVyeVJvdW5kIDw9IDApIHtcbiAgICAgIHJldHVybiBcIm9wcDpiYXR0ZXJ5LWFsZXJ0XCI7XG4gICAgfVxuICAgIC8vIFdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zOiAobGlzdGVkIHNvIGV4dHJhY3RvciBwaWNrcyB1cClcbiAgICAvLyBvcHA6YmF0dGVyeS0xMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTIwXG4gICAgLy8gb3BwOmJhdHRlcnktMzBcbiAgICAvLyBvcHA6YmF0dGVyeS00MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTUwXG4gICAgLy8gb3BwOmJhdHRlcnktNjBcbiAgICAvLyBvcHA6YmF0dGVyeS03MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTgwXG4gICAgLy8gb3BwOmJhdHRlcnktOTBcbiAgICAvLyBXZSBvYnNjdXJlICdvcHAnIGluIGljb25uYW1lIHNvIHRoaXMgbmFtZSBkb2VzIG5vdCBnZXQgcGlja2VkIHVwXG4gICAgcmV0dXJuIGAke1wib3BwXCJ9OmJhdHRlcnktJHtiYXR0ZXJ5Um91bmR9YDtcbiAgfVxuXG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gIGlmICh1bml0ID09PSBVTklUX0MgfHwgdW5pdCA9PT0gVU5JVF9GKSB7XG4gICAgcmV0dXJuIFwib3BwOnRoZXJtb21ldGVyXCI7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oXCJzZW5zb3JcIik7XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIHN0YXRlLiAqL1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IERFRkFVTFRfRE9NQUlOX0lDT04gfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGJpbmFyeVNlbnNvckljb24gfSBmcm9tIFwiLi9iaW5hcnlfc2Vuc29yX2ljb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IGNvdmVySWNvbiB9IGZyb20gXCIuL2NvdmVyX2ljb25cIjtcbmltcG9ydCB7IHNlbnNvckljb24gfSBmcm9tIFwiLi9zZW5zb3JfaWNvblwiO1xuaW1wb3J0IHsgaW5wdXREYXRlVGltZUljb24gfSBmcm9tIFwiLi9pbnB1dF9kYXRldGVpbWVfaWNvblwiO1xuXG5jb25zdCBkb21haW5JY29ucyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogYmluYXJ5U2Vuc29ySWNvbixcbiAgY292ZXI6IGNvdmVySWNvbixcbiAgc2Vuc29yOiBzZW5zb3JJY29uLFxuICBpbnB1dF9kYXRldGltZTogaW5wdXREYXRlVGltZUljb24sXG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG4gIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLmljb24pIHtcbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy5pY29uO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZS5lbnRpdHlfaWQpO1xuXG4gIGlmIChkb21haW4gaW4gZG9tYWluSWNvbnMpIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbnNbZG9tYWluXShzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9vcC1yZWxhdGl2ZS10aW1lXCI7XHJcbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcclxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xyXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XHJcblxyXG5jbGFzcyBTdGF0ZUluZm8gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XHJcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZX0gJHt0aGlzLnN0YXRlQmFkZ2VUZW1wbGF0ZX0gJHt0aGlzLmluZm9UZW1wbGF0ZX1cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLWJhZGdlIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmhvc3QoW3J0bF0pIHN0YXRlLWJhZGdlIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmhvc3QoW3J0bF0pIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTZweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWVbaW4tZGlhbG9nXSxcclxuICAgICAgICA6aG9zdChbc2Vjb25kYXJ5LWxpbmVdKSAubmFtZSB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLWFnbyxcclxuICAgICAgICAuZXh0cmEtaW5mbyxcclxuICAgICAgICAuZXh0cmEtaW5mbyA+ICoge1xyXG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdGF0ZUJhZGdlVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvc3RhdGUtYmFkZ2U+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbmZvVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIGluLWRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIj5cclxuICAgICAgICAgIFtbY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaW5EaWFsb2ddXVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYWdvXCI+XHJcbiAgICAgICAgICAgIDxvcC1yZWxhdGl2ZS10aW1lXHJcbiAgICAgICAgICAgICAgb3BwPVwiW1tvcHBdXVwiXHJcbiAgICAgICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmxhc3RfY2hhbmdlZF1dXCJcclxuICAgICAgICAgICAgPjwvb3AtcmVsYXRpdmUtdGltZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpbkRpYWxvZ11dXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPjxzbG90PiA8L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiBPYmplY3QsXHJcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXHJcbiAgICAgIGluRGlhbG9nOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogKCkgPT4gZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ0bDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxyXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSVEwob3BwKVwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcclxuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVSVEwob3BwKSB7XHJcbiAgICByZXR1cm4gY29tcHV0ZVJUTChvcHApO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaW5mb1wiLCBTdGF0ZUluZm8pO1xyXG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXJlbGF0aXZlLXRpbWVcIiwgT3BSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcERvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xyXG4gIGRvbWFpbnM6IHN0cmluZ1tdO1xyXG4gIHRvZ2dsZURvbWFpbjogKGRvbWFpbjogc3RyaW5nLCB0dXJuT246IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIiAqLyBcIi4vZGlhbG9nLWRvbWFpbi10b2dnbGVyXCJcclxuICApO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nID0gKFxyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gIGRpYWxvZ1BhcmFtczogT3BEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zXHJcbik6IHZvaWQgPT4ge1xyXG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcclxuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIixcclxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERvbWFpblRvZ2dsZXJEaWFsb2csXHJcbiAgICBkaWFsb2dQYXJhbXMsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFDQTtBQTRDQTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBaERBO0FBa0RBOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUdBO0FBQ0E7QUEyR0E7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsdWhCQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==