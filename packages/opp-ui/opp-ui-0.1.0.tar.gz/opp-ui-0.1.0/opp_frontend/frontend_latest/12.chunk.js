(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[12],{

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

/***/ "./src/components/op-combo-box.js":
/*!****************************************!*\
  !*** ./src/components/op-combo-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");








class OpComboBox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-input > paper-icon-button {
          width: 24px;
          height: 24px;
          padding: 2px;
          color: var(--secondary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <vaadin-combo-box-light
        items="[[_items]]"
        item-value-path="[[itemValuePath]]"
        item-label-path="[[itemLabelPath]]"
        value="{{value}}"
        opened="{{opened}}"
        allow-custom-value="[[allowCustomValue]]"
        on-change="_fireChanged"
      >
        <paper-input
          autofocus="[[autofocus]]"
          label="[[label]]"
          class="input"
          value="[[value]]"
        >
          <paper-icon-button
            slot="suffix"
            class="clear-button"
            icon="opp:close"
            hidden$="[[!value]]"
            >Clear</paper-icon-button
          >
          <paper-icon-button
            slot="suffix"
            class="toggle-button"
            icon="[[_computeToggleIcon(opened)]]"
            hidden$="[[!items.length]]"
            >Toggle</paper-icon-button
          >
        </paper-input>
        <template>
          <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
          </style>
          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
        </template>
      </vaadin-combo-box-light>
    `;
  }

  static get properties() {
    return {
      allowCustomValue: Boolean,
      items: {
        type: Object,
        observer: "_itemsChanged"
      },
      _items: Object,
      itemLabelPath: String,
      itemValuePath: String,
      autofocus: Boolean,
      label: String,
      opened: {
        type: Boolean,
        value: false,
        observer: "_openedChanged"
      },
      value: {
        type: String,
        notify: true
      }
    };
  }

  _openedChanged(newVal) {
    if (!newVal) {
      this._items = this.items;
    }
  }

  _itemsChanged(newVal) {
    if (!this.opened) {
      this._items = newVal;
    }
  }

  _computeToggleIcon(opened) {
    return opened ? "opp:menu-up" : "opp:menu-down";
  }

  _computeItemLabel(item, itemLabelPath) {
    return itemLabelPath ? item[itemLabelPath] : item;
  }

  _fireChanged(ev) {
    ev.stopPropagation();
    this.fire("change");
  }

}

customElements.define("op-combo-box", OpComboBox);

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

/***/ "./src/components/op-service-picker.js":
/*!*********************************************!*\
  !*** ./src/components/op-service-picker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _op_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-combo-box */ "./src/components/op-combo-box.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class OpServicePicker extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-combo-box
        label="[[localize('ui.components.service-picker.service')]]"
        items="[[_services]]"
        value="{{value}}"
        allow-custom-value=""
      ></op-combo-box>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object,
        observer: "_oppChanged"
      },
      _services: Array,
      value: {
        type: String,
        notify: true
      }
    };
  }

  _oppChanged(opp, oldOpp) {
    if (!opp) {
      this._services = [];
      return;
    }

    if (oldOpp && opp.services === oldOpp.services) {
      return;
    }

    const result = [];
    Object.keys(opp.services).sort().forEach(domain => {
      const services = Object.keys(opp.services[domain]).sort();

      for (let i = 0; i < services.length; i++) {
        result.push(`${domain}.${services[i]}`);
      }
    });
    this._services = result;
  }

}

customElements.define("op-service-picker", OpServicePicker);

/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, UNKNOWN, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN", function() { return UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const UNKNOWN = "unknown";
const ENTITY_COMPONENT_DOMAINS = ["air_quality", "alarm_control_panel", "alert", "automation", "binary_sensor", "calendar", "camera", "counter", "cover", "dominos", "fan", "geo_location", "group", "history_graph", "image_processing", "input_boolean", "input_datetime", "input_number", "input_select", "input_text", "light", "lock", "mailbox", "media_player", "person", "plant", "remember_the_milk", "remote", "scene", "script", "sensor", "switch", "timer", "utility_meter", "vacuum", "weather", "wink", "zha", "zwave"];

/***/ }),

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

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

/***/ "./src/panels/developer-tools/service/developer-tools-service.js":
/*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _components_entity_op_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
/* harmony import */ var _components_op_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/op-code-editor */ "./src/components/op-code-editor.ts");
/* harmony import */ var _components_op_service_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/op-service-picker */ "./src/components/op-service-picker.js");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");












const ERROR_SENTINEL = {};
/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelDevService extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="op-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .op-form {
          margin-right: 16px;
          max-width: 400px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .description {
          margin-top: 24px;
          white-space: pre-wrap;
        }

        .header {
          @apply --paper-font-title;
        }

        .attributes th {
          text-align: left;
        }

        .attributes tr {
          vertical-align: top;
        }

        .attributes tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #eee);
        }

        .attributes tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }

        .attributes td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        pre {
          margin: 0;
        }

        h1 {
          white-space: normal;
        }

        td {
          padding: 4px;
        }

        .error {
          color: var(--google-red-500);
        }
      </style>

      <app-localstorage-document
        key="panel-dev-service-state-domain-service"
        data="{{domainService}}"
      >
      </app-localstorage-document>
      <app-localstorage-document
        key="[[_computeServicedataKey(domainService)]]"
        data="{{serviceData}}"
      >
      </app-localstorage-document>

      <div class="content">
        <p>
          [[localize('ui.panel.developer-tools.tabs.services.description')]]
        </p>

        <div class="op-form">
          <op-service-picker
            opp="[[opp]]"
            value="{{domainService}}"
          ></op-service-picker>
          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">
            <op-entity-picker
              opp="[[opp]]"
              value="[[_computeEntityValue(parsedJSON)]]"
              on-change="_entityPicked"
              disabled="[[!validJSON]]"
              include-domains="[[_computeEntityDomainFilter(_domain)]]"
              allow-custom-entity
            ></op-entity-picker>
          </template>
          <p>[[localize('ui.panel.developer-tools.tabs.services.data')]]</p>
          <op-code-editor
            mode="yaml"
            value="[[serviceData]]"
            error="[[!validJSON]]"
            on-value-changed="_yamlChanged"
          ></op-code-editor>
          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]">
            [[localize('ui.panel.developer-tools.tabs.services.call_service')]]
          </mwc-button>
        </div>

        <template is="dom-if" if="[[!domainService]]">
          <h1>
            [[localize('ui.panel.developer-tools.tabs.services.select_service')]]
          </h1>
        </template>

        <template is="dom-if" if="[[domainService]]">
          <template is="dom-if" if="[[!_description]]">
            <h1>
              [[localize('ui.panel.developer-tools.tabs.services.no_description')]]
            </h1>
          </template>
          <template is="dom-if" if="[[_description]]">
            <h3>[[_description]]</h3>

            <table class="attributes">
              <tr>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_parameter')]]
                </th>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_description')]]
                </th>
                <th>
                  [[localize('ui.panel.developer-tools.tabs.services.column_example')]]
                </th>
              </tr>
              <template is="dom-if" if="[[!_attributes.length]]">
                <tr>
                  <td colspan="3">
                    [[localize('ui.panel.developer-tools.tabs.services.no_parameters')]]
                  </td>
                </tr>
              </template>
              <template is="dom-repeat" items="[[_attributes]]" as="attribute">
                <tr>
                  <td><pre>[[attribute.key]]</pre></td>
                  <td>[[attribute.description]]</td>
                  <td>[[attribute.example]]</td>
                </tr>
              </template>
            </table>

            <template is="dom-if" if="[[_attributes.length]]">
              <mwc-button on-click="_fillExampleData">
                [[localize('ui.panel.developer-tools.tabs.services.fill_example_data')]]
              </mwc-button>
            </template>
          </template>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      domainService: {
        type: String,
        observer: "_domainServiceChanged"
      },
      _domain: {
        type: String,
        computed: "_computeDomain(domainService)"
      },
      _service: {
        type: String,
        computed: "_computeService(domainService)"
      },
      serviceData: {
        type: String,
        value: ""
      },
      parsedJSON: {
        type: Object,
        computed: "_computeParsedServiceData(serviceData)"
      },
      validJSON: {
        type: Boolean,
        computed: "_computeValidJSON(parsedJSON)"
      },
      _attributes: {
        type: Array,
        computed: "_computeAttributesArray(opp, _domain, _service)"
      },
      _description: {
        type: String,
        computed: "_computeDescription(opp, _domain, _service)"
      }
    };
  }

  _domainServiceChanged() {
    this.serviceData = "";
  }

  _computeAttributesArray(opp, domain, service) {
    const serviceDomains = opp.services;
    if (!(domain in serviceDomains)) return [];
    if (!(service in serviceDomains[domain])) return [];
    const fields = serviceDomains[domain][service].fields;
    return Object.keys(fields).map(function (field) {
      return Object.assign({
        key: field
      }, fields[field]);
    });
  }

  _computeDescription(opp, domain, service) {
    const serviceDomains = opp.services;
    if (!(domain in serviceDomains)) return undefined;
    if (!(service in serviceDomains[domain])) return undefined;
    return serviceDomains[domain][service].description;
  }

  _computeServicedataKey(domainService) {
    return `panel-dev-service-state-servicedata.${domainService}`;
  }

  _computeDomain(domainService) {
    return domainService.split(".", 1)[0];
  }

  _computeService(domainService) {
    return domainService.split(".", 2)[1] || null;
  }

  _computeParsedServiceData(serviceData) {
    try {
      return serviceData.trim() ? Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(serviceData) : {};
    } catch (err) {
      return ERROR_SENTINEL;
    }
  }

  _computeValidJSON(parsedJSON) {
    return parsedJSON !== ERROR_SENTINEL;
  }

  _computeHasEntity(attributes) {
    return attributes.some(attr => attr.key === "entity_id");
  }

  _computeEntityValue(parsedJSON) {
    return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
  }

  _computeEntityDomainFilter(domain) {
    return _data_entity__WEBPACK_IMPORTED_MODULE_4__["ENTITY_COMPONENT_DOMAINS"].includes(domain) ? [domain] : null;
  }

  _callService() {
    if (this.parsedJSON === ERROR_SENTINEL) {
      Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_11__["showAlertDialog"])(this, {
        text: this.opp.localize("ui.panel.developer-tools.tabs.services.alert_parsing_yaml", "data", this.serviceData)
      });
      return;
    }

    this.opp.callService(this._domain, this._service, this.parsedJSON);
  }

  _fillExampleData() {
    const example = {};

    this._attributes.forEach(attribute => {
      if (attribute.example) {
        let value = "";

        try {
          value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeLoad"])(attribute.example);
        } catch (err) {
          value = attribute.example;
        }

        example[attribute.key] = value;
      }
    });

    this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(example);
  }

  _entityPicked(ev) {
    this.serviceData = Object(js_yaml__WEBPACK_IMPORTED_MODULE_3__["safeDump"])(Object.assign({}, this.parsedJSON, {
      entity_id: ev.target.value
    }));
  }

  _yamlChanged(ev) {
    this.serviceData = ev.detail.value;
  }

}

customElements.define("developer-tools-service", OpPanelDevService);

/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */

/* eslint-disable */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */

Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],
  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: "__computeStorage(sessionOnly)"
    }
  },
  observers: ["__storageSourceChanged(storage, key)"],
  attached: function () {
    this.listen(window, "storage", "__onStorage");
    this.listen(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },
  detached: function () {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function (key) {
    try {
      this.__setStorageValue(
      /*{@type if (key ty){String}}*/
      key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key =
    /** @type {String} */
    key;
    return Promise.resolve();
  },
  reset: function () {
    this.key = null;
    this.data = this.zeroValue;
  },
  destroy: function () {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },
  getStoredValue: function (path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },
  setStoredValue: function (path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },
  __computeStorage: function (sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },
  __storageSourceChanged: function (storage, key) {
    this._initializeStoredValue();
  },
  __onStorage: function (event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", this.__parseValueFromStorage());
    });
  },
  __onAppLocalStorageChanged: function (event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", event.detail.data);
    });
  },
  __parseValueFromStorage: function () {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },
  __setStorageValue: function (key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9iaW5hcnlfc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvdmVyX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvaW5wdXRfZGF0ZXRlaW1lX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc2Vuc29yX2ljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1zZXJ2aWNlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhIGJpbmFyeSBzZW5zb3Igc3RhdGUuICovXG5cbmV4cG9ydCBjb25zdCBiaW5hcnlTZW5zb3JJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgY29uc3QgYWN0aXZhdGVkID0gc3RhdGUuc3RhdGUgJiYgc3RhdGUuc3RhdGUgPT09IFwib2ZmXCI7XG4gIHN3aXRjaCAoc3RhdGUuYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICBjYXNlIFwiYmF0dGVyeVwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmJhdHRlcnlcIiA6IFwib3BwOmJhdHRlcnktb3V0bGluZVwiO1xuICAgIGNhc2UgXCJjb2xkXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6dGhlcm1vbWV0ZXJcIiA6IFwib3BwOnNub3dmbGFrZVwiO1xuICAgIGNhc2UgXCJjb25uZWN0aXZpdHlcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzZXJ2ZXItbmV0d29yay1vZmZcIiA6IFwib3BwOnNlcnZlci1uZXR3b3JrXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpkb29yLWNsb3NlZFwiIDogXCJvcHA6ZG9vci1vcGVuXCI7XG4gICAgY2FzZSBcImdhcmFnZV9kb29yXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6Z2FyYWdlXCIgOiBcIm9wcDpnYXJhZ2Utb3BlblwiO1xuICAgIGNhc2UgXCJnYXNcIjpcbiAgICBjYXNlIFwicG93ZXJcIjpcbiAgICBjYXNlIFwicHJvYmxlbVwiOlxuICAgIGNhc2UgXCJzYWZldHlcIjpcbiAgICBjYXNlIFwic21va2VcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpzaGllbGQtY2hlY2tcIiA6IFwib3BwOmFsZXJ0XCI7XG4gICAgY2FzZSBcImhlYXRcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp0aGVybW9tZXRlclwiIDogXCJvcHA6ZmlyZVwiO1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOmJyaWdodG5lc3MtNVwiIDogXCJvcHA6YnJpZ2h0bmVzcy03XCI7XG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpsb2NrXCIgOiBcIm9wcDpsb2NrLW9wZW5cIjtcbiAgICBjYXNlIFwibW9pc3R1cmVcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3YXRlci1vZmZcIiA6IFwib3BwOndhdGVyXCI7XG4gICAgY2FzZSBcIm1vdGlvblwiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOndhbGtcIiA6IFwib3BwOnJ1blwiO1xuICAgIGNhc2UgXCJvY2N1cGFuY3lcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDpob21lLW91dGxpbmVcIiA6IFwib3BwOmhvbWVcIjtcbiAgICBjYXNlIFwib3BlbmluZ1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnNxdWFyZVwiIDogXCJvcHA6c3F1YXJlLW91dGxpbmVcIjtcbiAgICBjYXNlIFwicGx1Z1wiOlxuICAgICAgcmV0dXJuIGFjdGl2YXRlZCA/IFwib3BwOnBvd2VyLXBsdWctb2ZmXCIgOiBcIm9wcDpwb3dlci1wbHVnXCI7XG4gICAgY2FzZSBcInByZXNlbmNlXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6aG9tZS1vdXRsaW5lXCIgOiBcIm9wcDpob21lXCI7XG4gICAgY2FzZSBcInNvdW5kXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6bXVzaWMtbm90ZS1vZmZcIiA6IFwib3BwOm11c2ljLW5vdGVcIjtcbiAgICBjYXNlIFwidmlicmF0aW9uXCI6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6Y3JvcC1wb3J0cmFpdFwiIDogXCJvcHA6dmlicmF0ZVwiO1xuICAgIGNhc2UgXCJ3aW5kb3dcIjpcbiAgICAgIHJldHVybiBhY3RpdmF0ZWQgPyBcIm9wcDp3aW5kb3ctY2xvc2VkXCIgOiBcIm9wcDp3aW5kb3ctb3BlblwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYWN0aXZhdGVkID8gXCJvcHA6cmFkaW9ib3gtYmxhbmtcIiA6IFwib3BwOmNoZWNrYm94LW1hcmtlZC1jaXJjbGVcIjtcbiAgfVxufTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBjb3ZlciBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4vZG9tYWluX2ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGNvdmVySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgY29uc3Qgb3BlbiA9IHN0YXRlLnN0YXRlICE9PSBcImNsb3NlZFwiO1xuICBzd2l0Y2ggKHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzKSB7XG4gICAgY2FzZSBcImdhcmFnZVwiOlxuICAgICAgcmV0dXJuIG9wZW4gPyBcIm9wcDpnYXJhZ2Utb3BlblwiIDogXCJvcHA6Z2FyYWdlXCI7XG4gICAgY2FzZSBcImRvb3JcIjpcbiAgICAgIHJldHVybiBvcGVuID8gXCJvcHA6ZG9vci1vcGVuXCIgOiBcIm9wcDpkb29yLWNsb3NlZFwiO1xuICAgIGNhc2UgXCJzaHV0dGVyXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1zaHV0dGVyLW9wZW5cIiA6IFwib3BwOndpbmRvdy1zaHV0dGVyXCI7XG4gICAgY2FzZSBcImJsaW5kXCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOmJsaW5kcy1vcGVuXCIgOiBcIm9wcDpibGluZHNcIjtcbiAgICBjYXNlIFwid2luZG93XCI6XG4gICAgICByZXR1cm4gb3BlbiA/IFwib3BwOndpbmRvdy1vcGVuXCIgOiBcIm9wcDp3aW5kb3ctY2xvc2VkXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb21haW5JY29uKFwiY292ZXJcIiwgc3RhdGUuc3RhdGUpO1xuICB9XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIGljb24gdG8gYmUgdXNlZCBmb3IgYSBkb21haW4uXG4gKlxuICogT3B0aW9uYWxseSBwYXNzIGluIGEgc3RhdGUgdG8gaW5mbHVlbmNlIHRoZSBkb21haW4gaWNvbi5cbiAqL1xuaW1wb3J0IHsgREVGQVVMVF9ET01BSU5fSUNPTiB9IGZyb20gXCIuLi9jb25zdFwiO1xuXG5jb25zdCBmaXhlZEljb25zID0ge1xuICBhbGVydDogXCJvcHA6YWxlcnRcIixcbiAgYWxleGE6IFwib3BwOmFtYXpvbi1hbGV4YVwiLFxuICBhdXRvbWF0aW9uOiBcIm9wcDpyb2JvdFwiLFxuICBjYWxlbmRhcjogXCJvcHA6Y2FsZW5kYXJcIixcbiAgY2FtZXJhOiBcIm9wcDp2aWRlb1wiLFxuICBjbGltYXRlOiBcIm9wcDp0aGVybW9zdGF0XCIsXG4gIGNvbmZpZ3VyYXRvcjogXCJvcHA6c2V0dGluZ3NcIixcbiAgY29udmVyc2F0aW9uOiBcIm9wcDp0ZXh0LXRvLXNwZWVjaFwiLFxuICBjb3VudGVyOiBcIm9wcDpjb3VudGVyXCIsXG4gIGRldmljZV90cmFja2VyOiBcIm9wcDphY2NvdW50XCIsXG4gIGZhbjogXCJvcHA6ZmFuXCIsXG4gIGdvb2dsZV9hc3Npc3RhbnQ6IFwib3BwOmdvb2dsZS1hc3Npc3RhbnRcIixcbiAgZ3JvdXA6IFwib3BwOmdvb2dsZS1jaXJjbGVzLWNvbW11bml0aWVzXCIsXG4gIGhpc3RvcnlfZ3JhcGg6IFwib3BwOmNoYXJ0LWxpbmVcIixcbiAgb3BlbnBlZXJwb3dlcjogXCJvcHA6b3Blbi1wZWVyLXBvd2VyXCIsXG4gIGhvbWVraXQ6IFwib3BwOmhvbWUtYXV0b21hdGlvblwiLFxuICBpbWFnZV9wcm9jZXNzaW5nOiBcIm9wcDppbWFnZS1maWx0ZXItZnJhbWVzXCIsXG4gIGlucHV0X2Jvb2xlYW46IFwib3BwOmRyYXdpbmdcIixcbiAgaW5wdXRfZGF0ZXRpbWU6IFwib3BwOmNhbGVuZGFyLWNsb2NrXCIsXG4gIGlucHV0X251bWJlcjogXCJvcHA6cmF5LXZlcnRleFwiLFxuICBpbnB1dF9zZWxlY3Q6IFwib3BwOmZvcm1hdC1saXN0LWJ1bGxldGVkXCIsXG4gIGlucHV0X3RleHQ6IFwib3BwOnRleHRib3hcIixcbiAgbGlnaHQ6IFwib3BwOmxpZ2h0YnVsYlwiLFxuICBtYWlsYm94OiBcIm9wcDptYWlsYm94XCIsXG4gIG5vdGlmeTogXCJvcHA6Y29tbWVudC1hbGVydFwiLFxuICBwZXJzaXN0ZW50X25vdGlmaWNhdGlvbjogXCJvcHA6YmVsbFwiLFxuICBwZXJzb246IFwib3BwOmFjY291bnRcIixcbiAgcGxhbnQ6IFwib3BwOmZsb3dlclwiLFxuICBwcm94aW1pdHk6IFwib3BwOmFwcGxlLXNhZmFyaVwiLFxuICByZW1vdGU6IFwib3BwOnJlbW90ZVwiLFxuICBzY2VuZTogXCJvcHA6cGFsZXR0ZVwiLFxuICBzY3JpcHQ6IFwib3BwOnNjcmlwdC10ZXh0XCIsXG4gIHNlbnNvcjogXCJvcHA6ZXllXCIsXG4gIHNpbXBsZV9hbGFybTogXCJvcHA6YmVsbFwiLFxuICBzdW46IFwib3BwOndoaXRlLWJhbGFuY2Utc3VubnlcIixcbiAgc3dpdGNoOiBcIm9wcDpmbGFzaFwiLFxuICB0aW1lcjogXCJvcHA6dGltZXJcIixcbiAgdXBkYXRlcjogXCJvcHA6Y2xvdWQtdXBsb2FkXCIsXG4gIHZhY3V1bTogXCJvcHA6cm9ib3QtdmFjdXVtXCIsXG4gIHdhdGVyX2hlYXRlcjogXCJvcHA6dGhlcm1vbWV0ZXJcIixcbiAgd2VhdGhlcjogXCJvcHA6d2VhdGhlci1jbG91ZHlcIixcbiAgd2VibGluazogXCJvcHA6b3Blbi1pbi1uZXdcIixcbiAgem9uZTogXCJvcHA6bWFwLW1hcmtlci1yYWRpdXNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBkb21haW5JY29uID0gKGRvbWFpbjogc3RyaW5nLCBzdGF0ZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGlmIChkb21haW4gaW4gZml4ZWRJY29ucykge1xuICAgIHJldHVybiBmaXhlZEljb25zW2RvbWFpbl07XG4gIH1cblxuICBzd2l0Y2ggKGRvbWFpbikge1xuICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgXCJhcm1lZF9ob21lXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGwtcGx1c1wiO1xuICAgICAgICBjYXNlIFwiYXJtZWRfbmlnaHRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1zbGVlcFwiO1xuICAgICAgICBjYXNlIFwiZGlzYXJtZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1vdXRsaW5lXCI7XG4gICAgICAgIGNhc2UgXCJ0cmlnZ2VyZWRcIjpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6YmVsbC1yaW5nXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOmJlbGxcIjtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJiaW5hcnlfc2Vuc29yXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgPT09IFwib2ZmXCJcbiAgICAgICAgPyBcIm9wcDpyYWRpb2JveC1ibGFua1wiXG4gICAgICAgIDogXCJvcHA6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiO1xuXG4gICAgY2FzZSBcImNvdmVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgPT09IFwiY2xvc2VkXCIgPyBcIm9wcDp3aW5kb3ctY2xvc2VkXCIgOiBcIm9wcDp3aW5kb3ctb3BlblwiO1xuXG4gICAgY2FzZSBcImxvY2tcIjpcbiAgICAgIHJldHVybiBzdGF0ZSAmJiBzdGF0ZSA9PT0gXCJ1bmxvY2tlZFwiID8gXCJvcHA6bG9jay1vcGVuXCIgOiBcIm9wcDpsb2NrXCI7XG5cbiAgICBjYXNlIFwibWVkaWFfcGxheWVyXCI6XG4gICAgICByZXR1cm4gc3RhdGUgJiYgc3RhdGUgIT09IFwib2ZmXCIgJiYgc3RhdGUgIT09IFwiaWRsZVwiXG4gICAgICAgID8gXCJvcHA6Y2FzdC1jb25uZWN0ZWRcIlxuICAgICAgICA6IFwib3BwOmNhc3RcIjtcblxuICAgIGNhc2UgXCJ6d2F2ZVwiOlxuICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIFwiZGVhZFwiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDplbW90aWNvbi1kZWFkXCI7XG4gICAgICAgIGNhc2UgXCJzbGVlcGluZ1wiOlxuICAgICAgICAgIHJldHVybiBcIm9wcDpzbGVlcFwiO1xuICAgICAgICBjYXNlIFwiaW5pdGlhbGl6aW5nXCI6XG4gICAgICAgICAgcmV0dXJuIFwib3BwOnRpbWVyLXNhbmRcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJvcHA6ei13YXZlXCI7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVW5hYmxlIHRvIGZpbmQgaWNvbiBmb3IgZG9tYWluIFwiICsgZG9tYWluICsgXCIgKFwiICsgc3RhdGUgKyBcIilcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBERUZBVUxUX0RPTUFJTl9JQ09OO1xuICB9XG59O1xuIiwiLyoqIFJldHVybiBhbiBpY29uIHJlcHJlc2VudGluZyBhbiBpbnB1dCBkYXRldGltZSBzdGF0ZS4gKi9cbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0RGF0ZVRpbWVJY29uID0gKHN0YXRlOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX2RhdGUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2xvY2tcIjtcbiAgfVxuICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICByZXR1cm4gXCJvcHA6Y2FsZW5kYXJcIjtcbiAgfVxuICByZXR1cm4gZG9tYWluSWNvbihcImlucHV0X2RhdGV0aW1lXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzZW5zb3Igc3RhdGUuICovXG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgVU5JVF9DLCBVTklUX0YgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi9kb21haW5faWNvblwiO1xuXG5jb25zdCBmaXhlZERldmljZUNsYXNzSWNvbnMgPSB7XG4gIGh1bWlkaXR5OiBcIm9wcDp3YXRlci1wZXJjZW50XCIsXG4gIGlsbHVtaW5hbmNlOiBcIm9wcDpicmlnaHRuZXNzLTVcIixcbiAgdGVtcGVyYXR1cmU6IFwib3BwOnRoZXJtb21ldGVyXCIsXG4gIHByZXNzdXJlOiBcIm9wcDpnYXVnZVwiLFxuICBwb3dlcjogXCJvcHA6Zmxhc2hcIixcbiAgc2lnbmFsX3N0cmVuZ3RoOiBcIm9wcDp3aWZpXCIsXG59O1xuXG5leHBvcnQgY29uc3Qgc2Vuc29ySWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRjbGFzcyA9IHN0YXRlLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzO1xuXG4gIGlmIChkY2xhc3MgJiYgZGNsYXNzIGluIGZpeGVkRGV2aWNlQ2xhc3NJY29ucykge1xuICAgIHJldHVybiBmaXhlZERldmljZUNsYXNzSWNvbnNbZGNsYXNzXTtcbiAgfVxuICBpZiAoZGNsYXNzID09PSBcImJhdHRlcnlcIikge1xuICAgIGNvbnN0IGJhdHRlcnkgPSBOdW1iZXIoc3RhdGUuc3RhdGUpO1xuICAgIGlmIChpc05hTihiYXR0ZXJ5KSkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnktdW5rbm93blwiO1xuICAgIH1cbiAgICBjb25zdCBiYXR0ZXJ5Um91bmQgPSBNYXRoLnJvdW5kKGJhdHRlcnkgLyAxMCkgKiAxMDtcbiAgICBpZiAoYmF0dGVyeVJvdW5kID49IDEwMCkge1xuICAgICAgcmV0dXJuIFwib3BwOmJhdHRlcnlcIjtcbiAgICB9XG4gICAgaWYgKGJhdHRlcnlSb3VuZCA8PSAwKSB7XG4gICAgICByZXR1cm4gXCJvcHA6YmF0dGVyeS1hbGVydFwiO1xuICAgIH1cbiAgICAvLyBXaWxsIHJldHVybiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpY29uczogKGxpc3RlZCBzbyBleHRyYWN0b3IgcGlja3MgdXApXG4gICAgLy8gb3BwOmJhdHRlcnktMTBcbiAgICAvLyBvcHA6YmF0dGVyeS0yMFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTMwXG4gICAgLy8gb3BwOmJhdHRlcnktNDBcbiAgICAvLyBvcHA6YmF0dGVyeS01MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTYwXG4gICAgLy8gb3BwOmJhdHRlcnktNzBcbiAgICAvLyBvcHA6YmF0dGVyeS04MFxuICAgIC8vIG9wcDpiYXR0ZXJ5LTkwXG4gICAgLy8gV2Ugb2JzY3VyZSAnb3BwJyBpbiBpY29ubmFtZSBzbyB0aGlzIG5hbWUgZG9lcyBub3QgZ2V0IHBpY2tlZCB1cFxuICAgIHJldHVybiBgJHtcIm9wcFwifTpiYXR0ZXJ5LSR7YmF0dGVyeVJvdW5kfWA7XG4gIH1cblxuICBjb25zdCB1bml0ID0gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICBpZiAodW5pdCA9PT0gVU5JVF9DIHx8IHVuaXQgPT09IFVOSVRfRikge1xuICAgIHJldHVybiBcIm9wcDp0aGVybW9tZXRlclwiO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKFwic2Vuc29yXCIpO1xufTtcbiIsIi8qKiBSZXR1cm4gYW4gaWNvbiByZXByZXNlbnRpbmcgYSBzdGF0ZS4gKi9cbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBERUZBVUxUX0RPTUFJTl9JQ09OIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBiaW5hcnlTZW5zb3JJY29uIH0gZnJvbSBcIi4vYmluYXJ5X3NlbnNvcl9pY29uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuL2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBjb3Zlckljb24gfSBmcm9tIFwiLi9jb3Zlcl9pY29uXCI7XG5pbXBvcnQgeyBzZW5zb3JJY29uIH0gZnJvbSBcIi4vc2Vuc29yX2ljb25cIjtcbmltcG9ydCB7IGlucHV0RGF0ZVRpbWVJY29uIH0gZnJvbSBcIi4vaW5wdXRfZGF0ZXRlaW1lX2ljb25cIjtcblxuY29uc3QgZG9tYWluSWNvbnMgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IGJpbmFyeVNlbnNvckljb24sXG4gIGNvdmVyOiBjb3Zlckljb24sXG4gIHNlbnNvcjogc2Vuc29ySWNvbixcbiAgaW5wdXRfZGF0ZXRpbWU6IGlucHV0RGF0ZVRpbWVJY29uLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlSWNvbiA9IChzdGF0ZTogT3BwRW50aXR5KSA9PiB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gREVGQVVMVF9ET01BSU5fSUNPTjtcbiAgfVxuICBpZiAoc3RhdGUuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMuaWNvbjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGUuZW50aXR5X2lkKTtcblxuICBpZiAoZG9tYWluIGluIGRvbWFpbkljb25zKSB7XG4gICAgcmV0dXJuIGRvbWFpbkljb25zW2RvbWFpbl0oc3RhdGUpO1xuICB9XG4gIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5jbGFzcyBPcENvbWJvQm94IGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbXM9XCJbW19pdGVtc11dXCJcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiW1tpdGVtVmFsdWVQYXRoXV1cIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJbW2l0ZW1MYWJlbFBhdGhdXVwiXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgb3BlbmVkPVwie3tvcGVuZWR9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIltbYWxsb3dDdXN0b21WYWx1ZV1dXCJcbiAgICAgICAgb24tY2hhbmdlPVwiX2ZpcmVDaGFuZ2VkXCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgYXV0b2ZvY3VzPVwiW1thdXRvZm9jdXNdXVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xhYmVsXV1cIlxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPVwiW1t2YWx1ZV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwib3BwOmNsb3NlXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyF2YWx1ZV1dXCJcbiAgICAgICAgICAgID5DbGVhcjwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiW1tfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKV1dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpdGVtcy5sZW5ndGhdXVwiXG4gICAgICAgICAgICA+VG9nZ2xlPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IC01cHggLTEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZTogQm9vbGVhbixcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2l0ZW1zQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9pdGVtczogT2JqZWN0LFxuICAgICAgaXRlbUxhYmVsUGF0aDogU3RyaW5nLFxuICAgICAgaXRlbVZhbHVlUGF0aDogU3RyaW5nLFxuICAgICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vcGVuZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIF9pdGVtc0NoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBuZXdWYWw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCkge1xuICAgIHJldHVybiBvcGVuZWQgPyBcIm9wcDptZW51LXVwXCIgOiBcIm9wcDptZW51LWRvd25cIjtcbiAgfVxuXG4gIF9jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICByZXR1cm4gaXRlbUxhYmVsUGF0aCA/IGl0ZW1baXRlbUxhYmVsUGF0aF0gOiBpdGVtO1xuICB9XG5cbiAgX2ZpcmVDaGFuZ2VkKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNvbWJvLWJveFwiLCBPcENvbWJvQm94KTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBPcEljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uXCI6IE9wSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uXCIsIE9wSWNvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgXCIuL29wLWNvbWJvLWJveFwiO1xyXG5cclxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xyXG5cclxuLypcclxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXHJcbiAqL1xyXG5jbGFzcyBPcFNlcnZpY2VQaWNrZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XHJcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8b3AtY29tYm8tYm94XHJcbiAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLnNlcnZpY2UtcGlja2VyLnNlcnZpY2UnKV1dXCJcclxuICAgICAgICBpdGVtcz1cIltbX3NlcnZpY2VzXV1cIlxyXG4gICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcclxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJcIlxyXG4gICAgICA+PC9vcC1jb21iby1ib3g+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIG9ic2VydmVyOiBcIl9vcHBDaGFuZ2VkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXJ2aWNlczogQXJyYXksXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBfb3BwQ2hhbmdlZChvcHAsIG9sZE9wcCkge1xyXG4gICAgaWYgKCFvcHApIHtcclxuICAgICAgdGhpcy5fc2VydmljZXMgPSBbXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKG9sZE9wcCAmJiBvcHAuc2VydmljZXMgPT09IG9sZE9wcC5zZXJ2aWNlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhvcHAuc2VydmljZXMpXHJcbiAgICAgIC5zb3J0KClcclxuICAgICAgLmZvckVhY2goKGRvbWFpbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gT2JqZWN0LmtleXMob3BwLnNlcnZpY2VzW2RvbWFpbl0pLnNvcnQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZG9tYWlufS4ke3NlcnZpY2VzW2ldfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2VydmljZXMgPSByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1zZXJ2aWNlLXBpY2tlclwiLCBPcFNlcnZpY2VQaWNrZXIpO1xyXG4iLCJleHBvcnQgY29uc3QgVU5BVkFJTEFCTEUgPSBcInVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgVU5LTk9XTiA9IFwidW5rbm93blwiO1xuXG5leHBvcnQgY29uc3QgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TID0gW1xuICBcImFpcl9xdWFsaXR5XCIsXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImFsZXJ0XCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJjYWxlbmRhclwiLFxuICBcImNhbWVyYVwiLFxuICBcImNvdW50ZXJcIixcbiAgXCJjb3ZlclwiLFxuICBcImRvbWlub3NcIixcbiAgXCJmYW5cIixcbiAgXCJnZW9fbG9jYXRpb25cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbWFnZV9wcm9jZXNzaW5nXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1haWxib3hcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJwZXJzb25cIixcbiAgXCJwbGFudFwiLFxuICBcInJlbWVtYmVyX3RoZV9taWxrXCIsXG4gIFwicmVtb3RlXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJ0aW1lclwiLFxuICBcInV0aWxpdHlfbWV0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwid2lua1wiLFxuICBcInpoYVwiLFxuICBcInp3YXZlXCIsXG5dO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbnRlcmZhY2UgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25EaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgZGlzbWlzc1RleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBjYW5jZWw/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdERpYWxvZ1BhcmFtcyBleHRlbmRzIEJhc2VEaWFsb2dQYXJhbXMge1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBzdHJpbmc7XG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgY29uZmlybT86IChvdXQ/OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUGFyYW1zXG4gIGV4dGVuZHMgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zLFxuICAgIFByb21wdERpYWxvZ1BhcmFtcyB7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtYXRpb24/OiBib29sZWFuO1xuICBwcm9tcHQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZEdlbmVyaWNEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb25maXJtYXRpb25cIiAqLyBcIi4vZGlhbG9nLWJveFwiKTtcblxuY29uc3Qgc2hvd0RpYWxvZ0hlbHBlciA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogRGlhbG9nUGFyYW1zLFxuICBleHRyYT86IHtcbiAgICBjb25maXJtYXRpb24/OiBEaWFsb2dQYXJhbXNbXCJjb25maXJtYXRpb25cIl07XG4gICAgcHJvbXB0PzogRGlhbG9nUGFyYW1zW1wicHJvbXB0XCJdO1xuICB9XG4pID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ0NhbmNlbCA9IGRpYWxvZ1BhcmFtcy5jYW5jZWw7XG4gICAgY29uc3Qgb3JpZ0NvbmZpcm0gPSBkaWFsb2dQYXJhbXMuY29uZmlybTtcblxuICAgIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYm94XCIsXG4gICAgICBkaWFsb2dJbXBvcnQ6IGxvYWRHZW5lcmljRGlhbG9nLFxuICAgICAgZGlhbG9nUGFyYW1zOiB7XG4gICAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICAgIGNhbmNlbDogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZXh0cmE/LnByb21wdCA/IG51bGwgOiBmYWxzZSk7XG4gICAgICAgICAgaWYgKG9yaWdDYW5jZWwpIHtcbiAgICAgICAgICAgIG9yaWdDYW5jZWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IChvdXQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBvdXQgOiB0cnVlKTtcbiAgICAgICAgICBpZiAob3JpZ0NvbmZpcm0pIHtcbiAgICAgICAgICAgIG9yaWdDb25maXJtKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93QWxlcnREaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEFsZXJ0RGlhbG9nUGFyYW1zXG4pID0+IHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maXJtYXRpb25EaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtc1xuKSA9PlxuICBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywgeyBjb25maXJtYXRpb246IHRydWUgfSkgYXMgUHJvbWlzZTxcbiAgICBib29sZWFuXG4gID47XG5cbmV4cG9ydCBjb25zdCBzaG93UHJvbXB0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBQcm9tcHREaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgcHJvbXB0OiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgbnVsbCB8IHN0cmluZ1xuICA+O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IHsgRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9vcC1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLXNlcnZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3V0aWwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgc2hvd0FsZXJ0RGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcblxuY29uc3QgRVJST1JfU0VOVElORUwgPSB7fTtcbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BQYW5lbERldlNlcnZpY2UgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cIm9wLXN0eWxlXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAub3AtZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHIge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWJhY2tncm91bmQtY29sb3IsICNlZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYWx0ZXJuYXRpdmUtYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0ZDpudGgtY2hpbGQoMykge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICAgIGtleT1cInBhbmVsLWRldi1zZXJ2aWNlLXN0YXRlLWRvbWFpbi1zZXJ2aWNlXCJcbiAgICAgICAgZGF0YT1cInt7ZG9tYWluU2VydmljZX19XCJcbiAgICAgID5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cbiAgICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XG4gICAgICAgIGtleT1cIltbX2NvbXB1dGVTZXJ2aWNlZGF0YUtleShkb21haW5TZXJ2aWNlKV1dXCJcbiAgICAgICAgZGF0YT1cInt7c2VydmljZURhdGF9fVwiXG4gICAgICA+XG4gICAgICA8L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmRlc2NyaXB0aW9uJyldXVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wLWZvcm1cIj5cbiAgICAgICAgICA8b3Atc2VydmljZS1waWNrZXJcbiAgICAgICAgICAgIG9wcD1cIltbb3BwXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2RvbWFpblNlcnZpY2V9fVwiXG4gICAgICAgICAgPjwvb3Atc2VydmljZS1waWNrZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlSGFzRW50aXR5KF9hdHRyaWJ1dGVzKV1dXCI+XG4gICAgICAgICAgICA8b3AtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJbW19jb21wdXRlRW50aXR5VmFsdWUocGFyc2VkSlNPTildXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9lbnRpdHlQaWNrZWRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgICAgaW5jbHVkZS1kb21haW5zPVwiW1tfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihfZG9tYWluKV1dXCJcbiAgICAgICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxwPltbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmRhdGEnKV1dPC9wPlxuICAgICAgICAgIDxvcC1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgdmFsdWU9XCJbW3NlcnZpY2VEYXRhXV1cIlxuICAgICAgICAgICAgZXJyb3I9XCJbWyF2YWxpZEpTT05dXVwiXG4gICAgICAgICAgICBvbi12YWx1ZS1jaGFuZ2VkPVwiX3lhbWxDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9vcC1jb2RlLWVkaXRvcj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiIHJhaXNlZCBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jYWxsX3NlcnZpY2UnKV1dXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLnNlbGVjdF9zZXJ2aWNlJyldXVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2Rlc2NyaXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc2VydmljZXMubm9fZGVzY3JpcHRpb24nKV1dXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19kZXNjcmlwdGlvbl1dXCI+XG4gICAgICAgICAgICA8aDM+W1tfZGVzY3JpcHRpb25dXTwvaDM+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImF0dHJpYnV0ZXNcIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLmNvbHVtbl9wYXJhbWV0ZXInKV1dXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jb2x1bW5fZGVzY3JpcHRpb24nKV1dXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5jb2x1bW5fZXhhbXBsZScpXV1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9hdHRyaWJ1dGVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLm5vX3BhcmFtZXRlcnMnKV1dXG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2F0dHJpYnV0ZXNdXVwiIGFzPVwiYXR0cmlidXRlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPjxwcmU+W1thdHRyaWJ1dGUua2V5XV08L3ByZT48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmRlc2NyaXB0aW9uXV08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmV4YW1wbGVdXTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfYXR0cmlidXRlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9maWxsRXhhbXBsZURhdGFcIj5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5maWxsX2V4YW1wbGVfZGF0YScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpblNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJfZG9tYWluU2VydmljZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihkb21haW5TZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX3NlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkSlNPTjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKVwiLFxuICAgICAgfSxcblxuICAgICAgX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXR0cmlidXRlc0FycmF5KG9wcCwgX2RvbWFpbiwgX3NlcnZpY2UpXCIsXG4gICAgICB9LFxuXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURlc2NyaXB0aW9uKG9wcCwgX2RvbWFpbiwgX3NlcnZpY2UpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfZG9tYWluU2VydmljZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZXNBcnJheShvcHAsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gb3BwLnNlcnZpY2VzO1xuICAgIGlmICghKGRvbWFpbiBpbiBzZXJ2aWNlRG9tYWlucykpIHJldHVybiBbXTtcbiAgICBpZiAoIShzZXJ2aWNlIGluIHNlcnZpY2VEb21haW5zW2RvbWFpbl0pKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBmaWVsZHMgPSBzZXJ2aWNlRG9tYWluc1tkb21haW5dW3NlcnZpY2VdLmZpZWxkcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIHJldHVybiB7IGtleTogZmllbGQsIC4uLmZpZWxkc1tmaWVsZF0gfTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlRGVzY3JpcHRpb24ob3BwLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlRG9tYWlucyA9IG9wcC5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghKHNlcnZpY2UgaW4gc2VydmljZURvbWFpbnNbZG9tYWluXSkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNlcnZpY2VEb21haW5zW2RvbWFpbl1bc2VydmljZV0uZGVzY3JpcHRpb247XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gYHBhbmVsLWRldi1zZXJ2aWNlLXN0YXRlLXNlcnZpY2VkYXRhLiR7ZG9tYWluU2VydmljZX1gO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAxKVswXTtcbiAgfVxuXG4gIF9jb21wdXRlU2VydmljZShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGRvbWFpblNlcnZpY2Uuc3BsaXQoXCIuXCIsIDIpWzFdIHx8IG51bGw7XG4gIH1cblxuICBfY29tcHV0ZVBhcnNlZFNlcnZpY2VEYXRhKHNlcnZpY2VEYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlRGF0YS50cmltKCkgPyBzYWZlTG9hZChzZXJ2aWNlRGF0YSkgOiB7fTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBFUlJPUl9TRU5USU5FTDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKSB7XG4gICAgcmV0dXJuIHBhcnNlZEpTT04gIT09IEVSUk9SX1NFTlRJTkVMO1xuICB9XG5cbiAgX2NvbXB1dGVIYXNFbnRpdHkoYXR0cmlidXRlcykge1xuICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoKGF0dHIpID0+IGF0dHIua2V5ID09PSBcImVudGl0eV9pZFwiKTtcbiAgfVxuXG4gIF9jb21wdXRlRW50aXR5VmFsdWUocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OID09PSBFUlJPUl9TRU5USU5FTCA/IFwiXCIgOiBwYXJzZWRKU09OLmVudGl0eV9pZDtcbiAgfVxuXG4gIF9jb21wdXRlRW50aXR5RG9tYWluRmlsdGVyKGRvbWFpbikge1xuICAgIHJldHVybiBFTlRJVFlfQ09NUE9ORU5UX0RPTUFJTlMuaW5jbHVkZXMoZG9tYWluKSA/IFtkb21haW5dIDogbnVsbDtcbiAgfVxuXG4gIF9jYWxsU2VydmljZSgpIHtcbiAgICBpZiAodGhpcy5wYXJzZWRKU09OID09PSBFUlJPUl9TRU5USU5FTCkge1xuICAgICAgc2hvd0FsZXJ0RGlhbG9nKHRoaXMsIHtcbiAgICAgICAgdGV4dDogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy5hbGVydF9wYXJzaW5nX3lhbWxcIixcbiAgICAgICAgICBcImRhdGFcIixcbiAgICAgICAgICB0aGlzLnNlcnZpY2VEYXRhXG4gICAgICAgICksXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wcC5jYWxsU2VydmljZSh0aGlzLl9kb21haW4sIHRoaXMuX3NlcnZpY2UsIHRoaXMucGFyc2VkSlNPTik7XG4gIH1cblxuICBfZmlsbEV4YW1wbGVEYXRhKCkge1xuICAgIGNvbnN0IGV4YW1wbGUgPSB7fTtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgaWYgKGF0dHJpYnV0ZS5leGFtcGxlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsdWUgPSBzYWZlTG9hZChhdHRyaWJ1dGUuZXhhbXBsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlLmV4YW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgZXhhbXBsZVthdHRyaWJ1dGUua2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZURhdGEgPSBzYWZlRHVtcChleGFtcGxlKTtcbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gc2FmZUR1bXAoe1xuICAgICAgLi4udGhpcy5wYXJzZWRKU09OLFxuICAgICAgZW50aXR5X2lkOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBfeWFtbENoYW5nZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1zZXJ2aWNlXCIsIE9wUGFuZWxEZXZTZXJ2aWNlKTtcbiIsIi8qIEZvcmtlZCBiZWNhdXNlIGl0IGNvbnRhaW5lZCBhbiBpbXBvcnQubWV0YSB3aGljaCB3ZWJwYWNrIGRvZXNuJ3Qgc3VwcG9ydC4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuLyoqXHJcbkBsaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcclxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XHJcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXHJcbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XHJcbiovXHJcbmltcG9ydCB7IEFwcFN0b3JhZ2VCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9hcHAtc3RvcmFnZS9hcHAtc3RvcmFnZS1iZWhhdmlvclwiO1xyXG5pbXBvcnQgeyBQb2x5bWVyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuXCI7XHJcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3lcIjtcclxuXHJcbi8qKlxyXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IHN5bmNocm9uaXplcyBzdG9yYWdlIGJldHdlZW4gYW4gaW4tbWVtb3J5XHJcbiAqIHZhbHVlIGFuZCBhIGxvY2F0aW9uIGluIHRoZSBicm93c2VyJ3MgbG9jYWxTdG9yYWdlIHN5c3RlbS5cclxuICpcclxuICogbG9jYWxTdG9yYWdlIGlzIGEgc2ltcGxlIGFuZCB3aWRlbHkgc3VwcG9ydGVkIHN0b3JhZ2UgQVBJIHRoYXQgcHJvdmlkZXMgYm90aFxyXG4gKiBwZXJtYW5lbnQgYW5kIHNlc3Npb24tYmFzZWQgc3RvcmFnZSBvcHRpb25zLiBVc2luZyBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XHJcbiAqIHlvdSBjYW4gZWFzaWx5IGludGVncmF0ZSBsb2NhbFN0b3JhZ2UgaW50byB5b3VyIGFwcCB2aWEgbm9ybWFsIFBvbHltZXJcclxuICogZGF0YWJpbmRpbmcuXHJcbiAqXHJcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgaXMgdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlbGVtZW50XHJcbiAqIHRoYXQgdXNlcyBgQXBwU3RvcmFnZUJlaGF2aW9yYC4gUmVhZGluZyBpdHMgY29kZSBpcyBhIGdvb2Qgd2F5IHRvIGdldFxyXG4gKiBzdGFydGVkIHdyaXRpbmcgeW91ciBvd24gc3RvcmFnZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBFeGFtcGxlIHVzZTpcclxuICpcclxuICogICAgIDxwYXBlci1pbnB1dCB2YWx1ZT1cInt7c2VhcmNofX1cIj48L3BhcGVyLWlucHV0PlxyXG4gKiAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQga2V5PVwic2VhcmNoXCIgZGF0YT1cInt7c2VhcmNofX1cIj5cclxuICogICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cclxuICpcclxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBhdXRvbWF0aWNhbGx5IHN5bmNocm9uaXplcyBjaGFuZ2VzIHRvIHRoZVxyXG4gKiBzYW1lIGtleSBhY3Jvc3MgbXVsdGlwbGUgdGFicy5cclxuICpcclxuICogT25seSBzdXBwb3J0cyBzdG9yaW5nIEpTT04tc2VyaWFsaXphYmxlIHZhbHVlcy5cclxuICovXHJcblBvbHltZXIoe1xyXG4gIGlzOiBcImFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcIixcclxuICBiZWhhdmlvcnM6IFtBcHBTdG9yYWdlQmVoYXZpb3JdLFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGV7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBrZXk6IHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRydWUsIHRoZSBkYXRhIHdpbGwgYXV0b21hdGljYWxseSBiZSBjbGVhcmVkIGZyb20gc3RvcmFnZSB3aGVuXHJcbiAgICAgKiB0aGUgcGFnZSBzZXNzaW9uIGVuZHMgKGkuZS4gd2hlbiB0aGUgdXNlciBoYXMgbmF2aWdhdGVkIGF3YXkgZnJvbVxyXG4gICAgICogdGhlIHBhZ2UpLlxyXG4gICAgICovXHJcbiAgICBzZXNzaW9uT25seTogeyB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVpdGhlciBgd2luZG93LmxvY2FsU3RvcmFnZWAgb3IgYHdpbmRvdy5zZXNzaW9uU3RvcmFnZWAsIGRlcGVuZGluZyBvblxyXG4gICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxyXG4gICAgICovXHJcbiAgICBzdG9yYWdlOiB7IHR5cGU6IE9iamVjdCwgY29tcHV0ZWQ6IFwiX19jb21wdXRlU3RvcmFnZShzZXNzaW9uT25seSlcIiB9LFxyXG4gIH0sXHJcblxyXG4gIG9ic2VydmVyczogW1wiX19zdG9yYWdlU291cmNlQ2hhbmdlZChzdG9yYWdlLCBrZXkpXCJdLFxyXG5cclxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xyXG4gICAgdGhpcy5saXN0ZW4oXHJcbiAgICAgIHdpbmRvdy50b3AsXHJcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxyXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51bmxpc3Rlbih3aW5kb3csIFwic3RvcmFnZVwiLCBcIl9fb25TdG9yYWdlXCIpO1xyXG4gICAgdGhpcy51bmxpc3RlbihcclxuICAgICAgd2luZG93LnRvcCxcclxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXHJcbiAgICAgIFwiX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWRcIlxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICBnZXQgaXNOZXcoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMua2V5O1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3JlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXksIGFuZCBpZiBzdWNjZXNzZnVsLCB1cGRhdGVzIHRoaXMua2V5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHsqfSBrZXkgVGhlIG5ldyBrZXkgdG8gdXNlLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAgICovXHJcbiAgc2F2ZVZhbHVlOiBmdW5jdGlvbihrZXkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuX19zZXRTdG9yYWdlVmFsdWUoLyp7QHR5cGUgaWYgKGtleSB0eSl7U3RyaW5nfX0qLyBrZXksIHRoaXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfSxcclxuXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy56ZXJvVmFsdWU7XHJcbiAgfSxcclxuXHJcbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9LFxyXG5cclxuICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xyXG4gICAgdmFyIHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0KHBhdGgsIHsgZGF0YTogdmFsdWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xyXG4gIH0sXHJcblxyXG4gIHNldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMua2V5ICE9IG51bGwpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKHRoaXMua2V5LCB0aGlzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpcmUoXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsIHRoaXMsIHsgbm9kZTogd2luZG93LnRvcCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcclxuICB9LFxyXG5cclxuICBfX2NvbXB1dGVTdG9yYWdlOiBmdW5jdGlvbihzZXNzaW9uT25seSkge1xyXG4gICAgcmV0dXJuIHNlc3Npb25Pbmx5ID8gd2luZG93LnNlc3Npb25TdG9yYWdlIDogd2luZG93LmxvY2FsU3RvcmFnZTtcclxuICB9LFxyXG5cclxuICBfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkOiBmdW5jdGlvbihzdG9yYWdlLCBrZXkpIHtcclxuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xyXG4gIH0sXHJcblxyXG4gIF9fb25TdG9yYWdlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gdGhpcy5rZXkgfHwgZXZlbnQuc3RvcmFnZUFyZWEgIT09IHRoaXMuc3RvcmFnZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCkpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gdGhpcyB8fFxyXG4gICAgICBldmVudC5kZXRhaWwua2V5ICE9PSB0aGlzLmtleSB8fFxyXG4gICAgICBldmVudC5kZXRhaWwuc3RvcmFnZSAhPT0gdGhpcy5zdG9yYWdlXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCBldmVudC5kZXRhaWwuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfX3BhcnNlVmFsdWVGcm9tU3RvcmFnZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGZyb20gc3RvcmFnZSBmb3JcIiwgdGhpcy5rZXkpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIF9fc2V0U3RvcmFnZVZhbHVlOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB2YWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUNBO0FBNENBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBY0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBR0E7QUFoREE7QUFrREE7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6R0E7QUFDQTtBQTBHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVLQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUF1QkE7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoREE7QUFDQTtBQWlEQTs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlDQSxxMUJBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBSEE7QUFvQkE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUFBO0FBSUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF4Q0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBelRBO0FBQ0E7QUEwVEE7Ozs7Ozs7Ozs7OztBQzlVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=