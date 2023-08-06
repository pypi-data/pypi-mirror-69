(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~panel-devcon"],{

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
  const parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

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

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
const leftPad = num => num < 10 ? `0${num}` : num;

function secondsToDuration(d) {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return `${h}:${leftPad(m)}:${leftPad(s)}`;
  }

  if (m > 0) {
    return `${m}:${leftPad(s)}`;
  }

  if (s > 0) {
    return "" + s;
  }

  return null;
}

/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
const stopPropagation = ev => ev.stopPropagation();

/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
const supportsFeature = (stateObj, feature) => {
  // tslint:disable-next-line:no-bitwise
  return (stateObj.attributes.supported_features & feature) !== 0;
};

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

const timerTimeRemaining = stateObj => {
  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    const now = new Date().getTime();
    const madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
};

/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
const timeCachePromiseFunc = async (cacheKey, cacheTime, func, opp, entityId, ...args) => {
  let cache = opp[cacheKey];

  if (!cache) {
    cache = opp[cacheKey] = {};
  }

  const lastResult = cache[entityId];

  if (lastResult) {
    return lastResult;
  }

  const result = func(opp, entityId, ...args);
  cache[entityId] = result;
  result.then( // When successful, set timer to clear cache
  () => setTimeout(() => {
    cache[entityId] = undefined;
  }, cacheTime), // On failure, clear cache right away
  () => {
    cache[entityId] = undefined;
  });
  return result;
};

/***/ }),

/***/ "./src/components/op-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/op-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");




/*
 * @appliesMixin LocalizeMixin
 */

class OpClimateState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(opp, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      stateObj: Object,
      currentStatus: {
        type: String,
        computed: "computeCurrentStatus(opp, stateObj)"
      }
    };
  }

  computeCurrentStatus(opp, stateObj) {
    if (!opp || !stateObj) return null;

    if (stateObj.attributes.current_temperature != null) {
      return `${stateObj.attributes.current_temperature} ${opp.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.current_humidity != null) {
      return `${stateObj.attributes.current_humidity} %`;
    }

    return null;
  }

  computeTarget(opp, stateObj) {
    if (!opp || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

    if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
      return `${stateObj.attributes.target_temp_low}-${stateObj.attributes.target_temp_high} ${opp.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${opp.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
      return `${stateObj.attributes.target_humidity_low}-${stateObj.attributes.target_humidity_high}%`;
    }

    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(localize, stateObj) {
    const stateString = localize(`state.climate.${stateObj.state}`);
    return stateObj.attributes.hvac_action ? `${localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`)} (${stateString})` : stateString;
  }

  _localizePreset(localize, preset) {
    return localize(`state_attributes.climate.preset_mode.${preset}`) || preset;
  }

  _renderPreset(attributes) {
    return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"];
  }

}

customElements.define("op-climate-state", OpClimateState);

/***/ }),

/***/ "./src/components/op-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/op-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");





class OpCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="opp:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="opp:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="opp:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(opp, stateObj)"
      }
    };
  }

  computeEntityObj(opp, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](opp, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
  }

  onOpenTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCover();
  }

  onCloseTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCover();
  }

  onStopTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCover();
  }

}

customElements.define("op-cover-controls", OpCoverControls);

/***/ }),

/***/ "./src/components/op-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/op-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");






class OpCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="opp:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="opp:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="opp:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(opp, stateObj)"
      }
    };
  }

  computeEntityObj(opp, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](opp, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyOpenTilt && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyClosedTilt && !assumedState;
  }

  onOpenTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCoverTilt();
  }

  onCloseTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCoverTilt();
  }

  onStopTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCoverTilt();
  }

}

customElements.define("op-cover-tilt-controls", OpCoverTiltControls);

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

/***/ "./src/components/op-slider.js":
/*!*************************************!*\
  !*** ./src/components/op-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

const PaperSliderClass = customElements.get("paper-slider");
let subTemplate;

class OpSlider extends PaperSliderClass {
  static get template() {
    if (!subTemplate) {
      subTemplate = PaperSliderClass.template.cloneNode(true);
      const superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

      superStyle.appendChild(document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }
        `));
    }

    return subTemplate;
  }

  _calcStep(value) {
    if (!this.step) {
      return parseFloat(value);
    }

    const numSteps = Math.round((value - this.min) / this.step);
    const stepStr = this.step.toString();
    const stepPointAt = stepStr.indexOf(".");

    if (stepPointAt !== -1) {
      /**
       * For small values of this.step, if we calculate the step using
       * For non-integer values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can round with the decimal precision of `step`
       */
      const precision = 10 ** (stepStr.length - stepPointAt - 1);
      return Math.round((numSteps * this.step + this.min) * precision) / precision;
    }

    return numSteps * this.step + this.min;
  }

}

customElements.define("op-slider", OpSlider);

/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/






class PaperTimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
          color: var(
            --paper-input-container-color,
            var(--secondary-text-color)
          );
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          label="[[hourLabel]]"
          on-change="_shouldFormatHour"
          on-focus="_onFocus"
          required
          prevent-invalid-input
          auto-validate="[[autoValidate]]"
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          label="[[minLabel]]"
          on-change="_formatMin"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span hidden$="[[!enableSecond]]" suffix slot="suffix">:</span>
        </paper-input>

        <!-- Sec Input -->
        <paper-input
          id="sec"
          type="number"
          value="{{sec}}"
          label="[[secLabel]]"
          on-change="_formatSec"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
          hidden$="[[!enableSecond]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      /**
       * Label for the input
       */
      label: {
        type: String,
        value: "Time"
      },

      /**
       * auto validate time inputs
       */
      autoValidate: {
        type: Boolean,
        value: true
      },

      /**
       * hides the label
       */
      hideLabel: {
        type: Boolean,
        value: false
      },

      /**
       * float the input labels
       */
      floatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * always float the input labels
       */
      alwaysFloatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * 12 or 24 hr format
       */
      format: {
        type: Number,
        value: 12
      },

      /**
       * disables the inputs
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * hour
       */
      hour: {
        type: String,
        notify: true
      },

      /**
       * minute
       */
      min: {
        type: String,
        notify: true
      },

      /**
       * second
       */
      sec: {
        type: String,
        notify: true
      },

      /**
       * Suffix for the hour input
       */
      hourLabel: {
        type: String,
        value: ""
      },

      /**
       * Suffix for the min input
       */
      minLabel: {
        type: String,
        value: ":"
      },

      /**
       * Suffix for the sec input
       */
      secLabel: {
        type: String,
        value: ""
      },

      /**
       * show the sec field
       */
      enableSecond: {
        type: Boolean,
        value: false
      },

      /**
       * limit hours input
       */
      noHoursLimit: {
        type: Boolean,
        value: false
      },

      /**
       * AM or PM
       */
      amPm: {
        type: String,
        notify: true,
        value: "AM"
      },

      /**
       * Formatted time string
       */
      value: {
        type: String,
        notify: true,
        readOnly: true,
        computed: "_computeTime(min, hour, sec, amPm)"
      }
    };
  }
  /**
   * Validate the inputs
   * @return {boolean}
   */


  validate() {
    var valid = true; // Validate hour & min fields

    if (!this.$.hour.validate() | !this.$.min.validate()) {
      valid = false;
    } // Validate second field


    if (this.enableSecond && !this.$.sec.validate()) {
      valid = false;
    } // Validate AM PM if 12 hour time


    if (this.format === 12 && !this.$.dropdown.validate()) {
      valid = false;
    }

    return valid;
  }
  /**
   * Create time string
   */


  _computeTime(min, hour, sec, amPm) {
    let str;

    if (hour || min || sec && this.enableSecond) {
      hour = hour || "00";
      min = min || "00";
      sec = sec || "00";
      str = hour + ":" + min; // add sec field

      if (this.enableSecond && sec) {
        str = str + ":" + sec;
      } // No ampm on 24 hr time


      if (this.format === 12) {
        str = str + " " + amPm;
      }
    }

    return str;
  }

  _onFocus(ev) {
    ev.target.inputElement.inputElement.select();
  }
  /**
   * Format sec
   */


  _formatSec() {
    if (this.sec.toString().length === 1) {
      this.sec = this.sec.toString().padStart(2, "0");
    }
  }
  /**
   * Format min
   */


  _formatMin() {
    if (this.min.toString().length === 1) {
      this.min = this.min.toString().padStart(2, "0");
    }
  }
  /**
   * Format hour
   */


  _shouldFormatHour() {
    if (this.format === 24 && this.hour.toString().length === 1) {
      this.hour = this.hour.toString().padStart(2, "0");
    }
  }
  /**
   * 24 hour format has a max hr of 23
   */


  _computeHourMax(format) {
    if (this.noHoursLimit) {
      return null;
    }

    if (format === 12) {
      return format;
    }

    return 23;
  }

  _equal(n1, n2) {
    return n1 === n2;
  }

}
customElements.define("paper-time-input", PaperTimeInput);

/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
const CLIMATE_PRESET_NONE = "none";
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const CLIMATE_SUPPORT_AUX_HEAT = 64;
const hvacModeOrdering = {
  auto: 1,
  heat_cool: 2,
  heat: 3,
  cool: 4,
  dry: 5,
  fan_only: 6,
  off: 7
};
const compareClimateHvacModes = (mode1, mode2) => hvacModeOrdering[mode1] - hvacModeOrdering[mode2];

/***/ }),

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
const setInputSelectOption = (opp, entity, option) => opp.callService("input_select", "select_option", {
  option,
  entity_id: entity
});

/***/ }),

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, showSceneEditor, getSceneEditorInitData, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSceneEditor", function() { return showSceneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneEditorInitData", function() { return getSceneEditorInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
let inititialSceneEditorData;
const showSceneEditor = (el, data) => {
  inititialSceneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/scene/edit/new");
};
const getSceneEditorInitData = () => {
  const data = inititialSceneEditorData;
  inititialSceneEditorData = undefined;
  return data;
};
const activateScene = (opp, entityId) => opp.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (opp, entities) => opp.callService("scene", "apply", {
  entities
});
const getSceneConfig = (opp, sceneId) => opp.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (opp, sceneId, config) => opp.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (opp, id) => opp.callApi("DELETE", `config/scene/config/${id}`);

/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");

/* eslint-enable no-bitwise */

class CoverEntity {
  constructor(opp, stateObj) {
    this.opp = opp;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isFullyOpen() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 100;
    }

    return this.stateObj.state === "open";
  }

  get isFullyClosed() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 0;
    }

    return this.stateObj.state === "closed";
  }

  get isFullyOpenTilt() {
    return this._attr.current_tilt_position === 100;
  }

  get isFullyClosedTilt() {
    return this._attr.current_tilt_position === 0;
  }

  get isOpening() {
    return this.stateObj.state === "opening";
  }

  get isClosing() {
    return this.stateObj.state === "closing";
  }

  get supportsOpen() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsClose() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
  }

  get supportsSetPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsStop() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsOpenTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsCloseTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsStopTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
  }

  get supportsSetTiltPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get isTiltOnly() {
    const supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
    const supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
    return supportsTilt && !supportsCover;
  }

  openCover() {
    this.callService("open_cover");
  }

  closeCover() {
    this.callService("close_cover");
  }

  stopCover() {
    this.callService("stop_cover");
  }

  openCoverTilt() {
    this.callService("open_cover_tilt");
  }

  closeCoverTilt() {
    this.callService("close_cover_tilt");
  }

  stopCoverTilt() {
    this.callService("stop_cover_tilt");
  }

  setCoverPosition(position) {
    this.callService("set_cover_position", {
      position
    });
  }

  setCoverTiltPosition(tiltPosition) {
    this.callService("set_cover_tilt_position", {
      tilt_position: tiltPosition
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.opp.callService("cover", service, data);
  }

}
const supportsOpen = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
const supportsClose = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
const supportsSetPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
const supportsStop = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
const supportsOpenTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
const supportsCloseTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
const supportsStopTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
const supportsSetTiltPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
function isTiltOnly(stateObj) {
  const supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  const supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+aHVpLWRpYWxvZy1zdWdnZXN0LWNhcmR+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1kZXZjb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL3RpbWUtY2FjaGUtZnVuY3Rpb24tcHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1jbGltYXRlLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWNvdmVyLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWNvdmVyLXRpbHQtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXItdGltZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkdXJhdGlvblRvU2Vjb25kcyhkdXJhdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgcGFydHMgPSBkdXJhdGlvbi5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gIHJldHVybiBwYXJ0c1swXSAqIDM2MDAgKyBwYXJ0c1sxXSAqIDYwICsgcGFydHNbMl07XG59XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRhdGUgb2JqZWN0IGFzIHJlbGF0aXZlIHRpbWUgZnJvbSBub3cuXG4gKlxuICogRXhhbXBsZSBvdXRwdXQ6IDUgbWludXRlcyBhZ28sIGluIDMgZGF5cy5cbiAqL1xuY29uc3QgdGVzdHMgPSBbNjAsIDYwLCAyNCwgN107XG5jb25zdCBsYW5nS2V5ID0gW1wic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKFxuICBkYXRlT2JqOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBvcHRpb25zOiB7XG4gICAgY29tcGFyZVRpbWU/OiBEYXRlO1xuICAgIGluY2x1ZGVUZW5zZT86IGJvb2xlYW47XG4gIH0gPSB7fVxuKTogc3RyaW5nIHtcbiAgY29uc3QgY29tcGFyZVRpbWUgPSBvcHRpb25zLmNvbXBhcmVUaW1lIHx8IG5ldyBEYXRlKCk7XG4gIGxldCBkZWx0YSA9IChjb21wYXJlVGltZS5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLyAxMDAwO1xuICBjb25zdCB0ZW5zZSA9IGRlbHRhID49IDAgPyBcInBhc3RcIiA6IFwiZnV0dXJlXCI7XG4gIGRlbHRhID0gTWF0aC5hYnMoZGVsdGEpO1xuXG4gIGxldCB0aW1lRGVzYztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRlbHRhIDwgdGVzdHNbaV0pIHtcbiAgICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgICBgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLiR7bGFuZ0tleVtpXX1gLFxuICAgICAgICBcImNvdW50XCIsXG4gICAgICAgIGRlbHRhXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgLz0gdGVzdHNbaV07XG4gIH1cblxuICBpZiAodGltZURlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgIFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLndlZWtcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIGRlbHRhXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLmluY2x1ZGVUZW5zZSA9PT0gZmFsc2VcbiAgICA/IHRpbWVEZXNjXG4gICAgOiBsb2NhbGl6ZShgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLiR7dGVuc2V9YCwgXCJ0aW1lXCIsIHRpbWVEZXNjKTtcbn1cbiIsImNvbnN0IGxlZnRQYWQgPSAobnVtOiBudW1iZXIpID0+IChudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWNvbmRzVG9EdXJhdGlvbihkOiBudW1iZXIpIHtcclxuICBjb25zdCBoID0gTWF0aC5mbG9vcihkIC8gMzYwMCk7XHJcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcclxuICBjb25zdCBzID0gTWF0aC5mbG9vcigoZCAlIDM2MDApICUgNjApO1xyXG5cclxuICBpZiAoaCA+IDApIHtcclxuICAgIHJldHVybiBgJHtofToke2xlZnRQYWQobSl9OiR7bGVmdFBhZChzKX1gO1xyXG4gIH1cclxuICBpZiAobSA+IDApIHtcclxuICAgIHJldHVybiBgJHttfToke2xlZnRQYWQocyl9YDtcclxuICB9XHJcbiAgaWYgKHMgPiAwKSB7XHJcbiAgICByZXR1cm4gXCJcIiArIHM7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmVhdHVyZSA9IChcbiAgc3RhdGVPYmo6IE9wcEVudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lclRpbWVSZW1haW5pbmcgPSAoc3RhdGVPYmo6IE9wcEVudGl0eSkgPT4ge1xuICBsZXQgdGltZVJlbWFpbmluZyA9IGR1cmF0aW9uVG9TZWNvbmRzKHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVtYWluaW5nKTtcblxuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBtYWRlQWN0aXZlID0gbmV3IERhdGUoc3RhdGVPYmoubGFzdF9jaGFuZ2VkKS5nZXRUaW1lKCk7XG4gICAgdGltZVJlbWFpbmluZyA9IE1hdGgubWF4KHRpbWVSZW1haW5pbmcgLSAobm93IC0gbWFkZUFjdGl2ZSkgLyAxMDAwLCAwKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lUmVtYWluaW5nO1xufTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFJlc3VsdENhY2hlPFQ+IHtcbiAgW2VudGl0eUlkOiBzdHJpbmddOiBQcm9taXNlPFQ+IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgdGltZUNhY2hlUHJvbWlzZUZ1bmMgPSBhc3luYyA8VD4oXG4gIGNhY2hlS2V5OiBzdHJpbmcsXG4gIGNhY2hlVGltZTogbnVtYmVyLFxuICBmdW5jOiAoXG4gICAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICAgIGVudGl0eUlkOiBzdHJpbmcsXG4gICAgLi4uYXJnczogdW5rbm93bltdXG4gICkgPT4gUHJvbWlzZTxUPixcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICAuLi5hcmdzOiB1bmtub3duW11cbik6IFByb21pc2U8VD4gPT4ge1xuICBsZXQgY2FjaGU6IFJlc3VsdENhY2hlPFQ+IHwgdW5kZWZpbmVkID0gKG9wcCBhcyBhbnkpW2NhY2hlS2V5XTtcblxuICBpZiAoIWNhY2hlKSB7XG4gICAgY2FjaGUgPSBvcHBbY2FjaGVLZXldID0ge307XG4gIH1cblxuICBjb25zdCBsYXN0UmVzdWx0ID0gY2FjaGVbZW50aXR5SWRdO1xuXG4gIGlmIChsYXN0UmVzdWx0KSB7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBmdW5jKG9wcCwgZW50aXR5SWQsIC4uLmFyZ3MpO1xuICBjYWNoZVtlbnRpdHlJZF0gPSByZXN1bHQ7XG5cbiAgcmVzdWx0LnRoZW4oXG4gICAgLy8gV2hlbiBzdWNjZXNzZnVsLCBzZXQgdGltZXIgdG8gY2xlYXIgY2FjaGVcbiAgICAoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgICB9LCBjYWNoZVRpbWUpLFxuICAgIC8vIE9uIGZhaWx1cmUsIGNsZWFyIGNhY2hlIHJpZ2h0IGF3YXlcbiAgICAoKSA9PiB7XG4gICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcclxuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcclxuXHJcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcclxuaW1wb3J0IHsgQ0xJTUFURV9QUkVTRVRfTk9ORSB9IGZyb20gXCIuLi9kYXRhL2NsaW1hdGVcIjtcclxuXHJcbi8qXHJcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxyXG4gKi9cclxuY2xhc3MgT3BDbGltYXRlU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XHJcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFyZ2V0IHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1cnJlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0ZS1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVuaXQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhcmdldFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaGFzS25vd25TdGF0ZShzdGF0ZU9iai5zdGF0ZSldXVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICBbW19sb2NhbGl6ZVN0YXRlKGxvY2FsaXplLCBzdGF0ZU9iaildXVxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3JlbmRlclByZXNldChzdGF0ZU9iai5hdHRyaWJ1dGVzKV1dXCI+XHJcbiAgICAgICAgICAgICAgLSBbW19sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZSldXVxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRcIj5bW2NvbXB1dGVUYXJnZXQob3BwLCBzdGF0ZU9iaildXTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjdXJyZW50U3RhdHVzXV1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxyXG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5jbGltYXRlLmN1cnJlbnRseScpXV06XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5pdFwiPltbY3VycmVudFN0YXR1c11dPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiBPYmplY3QsXHJcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXHJcbiAgICAgIGN1cnJlbnRTdGF0dXM6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUN1cnJlbnRTdGF0dXMob3BwLCBzdGF0ZU9iailcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wdXRlQ3VycmVudFN0YXR1cyhvcHAsIHN0YXRlT2JqKSB7XHJcbiAgICBpZiAoIW9wcCB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmV9ICR7b3BwLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHl9ICVgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlVGFyZ2V0KG9wcCwgc3RhdGVPYmopIHtcclxuICAgIGlmICghb3BwIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XHJcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXHJcbiAgICBpZiAoXHJcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93ICE9IG51bGwgJiZcclxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9LSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdofSAke29wcC5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7b3BwLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9sb3cgIT0gbnVsbCAmJlxyXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdoICE9IG51bGxcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93fS0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2h9JWA7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIF9oYXNLbm93blN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gc3RhdGUgIT09IFwidW5rbm93blwiO1xyXG4gIH1cclxuXHJcbiAgX2xvY2FsaXplU3RhdGUobG9jYWxpemUsIHN0YXRlT2JqKSB7XHJcbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IGxvY2FsaXplKGBzdGF0ZS5jbGltYXRlLiR7c3RhdGVPYmouc3RhdGV9YCk7XHJcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5odmFjX2FjdGlvblxyXG4gICAgICA/IGAke2xvY2FsaXplKFxyXG4gICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5odmFjX2FjdGlvbi4ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb259YFxyXG4gICAgICAgICl9ICgke3N0YXRlU3RyaW5nfSlgXHJcbiAgICAgIDogc3RhdGVTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBfbG9jYWxpemVQcmVzZXQobG9jYWxpemUsIHByZXNldCkge1xyXG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHtwcmVzZXR9YCkgfHwgcHJlc2V0O1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlclByZXNldChhdHRyaWJ1dGVzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBhdHRyaWJ1dGVzLnByZXNldF9tb2RlICYmIGF0dHJpYnV0ZXMucHJlc2V0X21vZGUgIT09IENMSU1BVEVfUFJFU0VUX05PTkVcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNsaW1hdGUtc3RhdGVcIiwgT3BDbGltYXRlU3RhdGUpO1xyXG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XHJcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcclxuXHJcbmNsYXNzIE9wQ292ZXJDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcclxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICAuc3RhdGUge1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgW2ludmlzaWJsZV0ge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRlXCI+XHJcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjb3ZlclwiXHJcbiAgICAgICAgICBpY29uPVwib3BwOmFycm93LXVwXCJcclxuICAgICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGFwXCJcclxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuXV1cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXHJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3RvcCB0aGUgY292ZXIgZnJvbSBtb3ZpbmdcIlxyXG4gICAgICAgICAgaWNvbj1cIm9wcDpzdG9wXCJcclxuICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGFwXCJcclxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wXV1cIlxyXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxyXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNvdmVyXCJcclxuICAgICAgICAgIGljb249XCJvcHA6YXJyb3ctZG93blwiXHJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUYXBcIlxyXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlXV1cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcclxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZU9iajoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgfSxcclxuICAgICAgZW50aXR5T2JqOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmoob3BwLCBzdGF0ZU9iailcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wdXRlRW50aXR5T2JqKG9wcCwgc3RhdGVPYmopIHtcclxuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkob3BwLCBzdGF0ZU9iaik7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcclxuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XHJcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5T3BlbiB8fCBlbnRpdHlPYmouaXNPcGVuaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcclxuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XHJcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkIHx8IGVudGl0eU9iai5pc0Nsb3NpbmcpICYmICFhc3N1bWVkU3RhdGU7XHJcbiAgfVxyXG5cclxuICBvbk9wZW5UYXAoZXYpIHtcclxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlVGFwKGV2KSB7XHJcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZW50aXR5T2JqLmNsb3NlQ292ZXIoKTtcclxuICB9XHJcblxyXG4gIG9uU3RvcFRhcChldikge1xyXG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNvdmVyLWNvbnRyb2xzXCIsIE9wQ292ZXJDb250cm9scyk7XHJcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XHJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XHJcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcclxuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcclxuXHJcbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xyXG5cclxuY2xhc3MgT3BDb3ZlclRpbHRDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcclxuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtpbnZpc2libGVdIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXIgdGlsdFwiXHJcbiAgICAgICAgaWNvbj1cIm9wcDphcnJvdy10b3AtcmlnaHRcIlxyXG4gICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGlsdFRhcFwiXHJcbiAgICAgICAgdGl0bGU9XCJPcGVuIHRpbHRcIlxyXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuVGlsdF1dXCJcclxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcclxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIGNvdmVyIGZyb20gbW92aW5nXCJcclxuICAgICAgICBpY29uPVwib3BwOnN0b3BcIlxyXG4gICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGlsdFRhcFwiXHJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BUaWx0XV1cIlxyXG4gICAgICAgIHRpdGxlPVwiU3RvcCB0aWx0XCJcclxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBjb3ZlciB0aWx0XCJcclxuICAgICAgICBpY29uPVwib3BwOmFycm93LWJvdHRvbS1sZWZ0XCJcclxuICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUaWx0VGFwXCJcclxuICAgICAgICB0aXRsZT1cIkNsb3NlIHRpbHRcIlxyXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZVRpbHRdXVwiXHJcbiAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcclxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BwOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZU9iajoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgfSxcclxuICAgICAgZW50aXR5T2JqOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmoob3BwLCBzdGF0ZU9iailcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wdXRlRW50aXR5T2JqKG9wcCwgc3RhdGVPYmopIHtcclxuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkob3BwLCBzdGF0ZU9iaik7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcclxuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XHJcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlPcGVuVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcclxuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XHJcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlDbG9zZWRUaWx0ICYmICFhc3N1bWVkU3RhdGU7XHJcbiAgfVxyXG5cclxuICBvbk9wZW5UaWx0VGFwKGV2KSB7XHJcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlclRpbHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xvc2VUaWx0VGFwKGV2KSB7XHJcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZW50aXR5T2JqLmNsb3NlQ292ZXJUaWx0KCk7XHJcbiAgfVxyXG5cclxuICBvblN0b3BUaWx0VGFwKGV2KSB7XHJcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlclRpbHQoKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWNvdmVyLXRpbHQtY29udHJvbHNcIiwgT3BDb3ZlclRpbHRDb250cm9scyk7XHJcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBPcFJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBkYXRldGltZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkRGF0ZVRpbWU6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlID0gdGhpcy51cGRhdGVSZWxhdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyB1cGRhdGUgZXZlcnkgNjAgc2Vjb25kc1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVJlbGF0aXZlLCA2MDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH1cblxuICBkYXRldGltZUNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbCA/IG5ldyBEYXRlKG5ld1ZhbCkgOiBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgZGF0ZXRpbWVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICB1cGRhdGVSZWxhdGl2ZSgpIHtcbiAgICBjb25zdCByb290ID0gZG9tKHRoaXMpO1xuICAgIGlmICghdGhpcy5wYXJzZWREYXRlVGltZSkge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSB0aGlzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLm5ldmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHJlbGF0aXZlVGltZSh0aGlzLnBhcnNlZERhdGVUaW1lLCB0aGlzLmxvY2FsaXplKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcmVsYXRpdmUtdGltZVwiLCBPcFJlbGF0aXZlVGltZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXJcIjtcclxuXHJcbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XHJcbmxldCBzdWJUZW1wbGF0ZTtcclxuXHJcbmNsYXNzIE9wU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XHJcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcclxuICAgIGlmICghc3ViVGVtcGxhdGUpIHtcclxuICAgICAgc3ViVGVtcGxhdGUgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHN1cGVyU3R5bGUgPSBzdWJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcclxuXHJcbiAgICAgIC8vIGFwcGVuZCBzdHlsZSB0byBhZGQgbWlycm9yaW5nIG9mIHBpbiBpbiBSVExcclxuICAgICAgc3VwZXJTdHlsZS5hcHBlbmRDaGlsZChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXHJcbiAgICAgICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAjc2xpZGVyQ29udGFpbmVyLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdWJUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIF9jYWxjU3RlcCh2YWx1ZSkge1xyXG4gICAgaWYgKCF0aGlzLnN0ZXApIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG51bVN0ZXBzID0gTWF0aC5yb3VuZCgodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXApO1xyXG4gICAgY29uc3Qgc3RlcFN0ciA9IHRoaXMuc3RlcC50b1N0cmluZygpO1xyXG4gICAgY29uc3Qgc3RlcFBvaW50QXQgPSBzdGVwU3RyLmluZGV4T2YoXCIuXCIpO1xyXG4gICAgaWYgKHN0ZXBQb2ludEF0ICE9PSAtMSkge1xyXG4gICAgICAvKipcclxuICAgICAgICogRm9yIHNtYWxsIHZhbHVlcyBvZiB0aGlzLnN0ZXAsIGlmIHdlIGNhbGN1bGF0ZSB0aGUgc3RlcCB1c2luZ1xyXG4gICAgICAgKiBGb3Igbm9uLWludGVnZXIgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXHJcbiAgICAgICAqIGBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwYCB3ZSBtYXkgaGl0IGEgcHJlY2lzaW9uIHBvaW50IGlzc3VlXHJcbiAgICAgICAqIGVnLiAwLjEgKiAwLjIgPSAgMC4wMjAwMDAwMDAwMDAwMDAwMDRcclxuICAgICAgICogaHR0cDovL2RvY3Mub3JhY2xlLmNvbS9jZC9FMTk5NTctMDEvODA2LTM1NjgvbmNnX2dvbGRiZXJnLmh0bWxcclxuICAgICAgICpcclxuICAgICAgICogYXMgYSB3b3JrIGFyb3VuZCB3ZSBjYW4gcm91bmQgd2l0aCB0aGUgZGVjaW1hbCBwcmVjaXNpb24gb2YgYHN0ZXBgXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCBwcmVjaXNpb24gPSAxMCAqKiAoc3RlcFN0ci5sZW5ndGggLSBzdGVwUG9pbnRBdCAtIDEpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIE1hdGgucm91bmQoKG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW4pICogcHJlY2lzaW9uKSAvIHByZWNpc2lvblxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW1TdGVwcyAqIHRoaXMuc3RlcCArIHRoaXMubWluO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1zbGlkZXJcIiwgT3BTbGlkZXIpO1xyXG4iLCIvKipcclxuQWRhcHRlZCBmcm9tIHBhcGVyLXRpbWUtaW5wdXQgZnJvbVxyXG5odHRwczovL2dpdGh1Yi5jb20vcnlhbmJ1cm5zMjMvcGFwZXItdGltZS1pbnB1dFxyXG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXHJcblxyXG5gPHBhcGVyLXRpbWUtaW5wdXQ+YCBQb2x5bWVyIGVsZW1lbnQgdG8gYWNjZXB0IGEgdGltZSB3aXRoIHBhcGVyLWlucHV0ICYgcGFwZXItZHJvcGRvd24tbWVudVxyXG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcclxuXHJcbiMjIyBTdHlsaW5nXHJcblxyXG5gPHBhcGVyLXRpbWUtaW5wdXQ+YCBwcm92aWRlcyB0aGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgZm9yIHN0eWxpbmc6XHJcblxyXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcclxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cclxuYC0tcGFwZXItdGltZS1pbnB1dC1kcm9wZG93bi1yaXBwbGUtY29sb3JgIHwgZHJvcGRvd24gcmlwcGxlIGNvbG9yIHwgYC0tcHJpbWFyeS1jb2xvcmBcclxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxyXG5gLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBkcm9wZG93biBpbnB1dCB8IGB7fWBcclxuKi9cclxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcclxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XHJcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xyXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xyXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcGVyVGltZUlucHV0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xyXG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcGVyLWlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcclxuICAgICAgICAgICAgLyogRGFtbiB5b3UgZmlyZWZveFxyXG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XHJcbiAgICAgICAgICAgICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc5MDkzNS9jYW4taS1oaWRlLXRoZS1odG1sNS1udW1iZXItaW5wdXQtcy1zcGluLWJveFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLXRpbWUtaW5wdXQtY290bmFpbmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGVfLV8td2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLyogRm9yY2UgcmlwcGxlIHRvIHVzZSB0aGUgd2hvbGUgY29udGFpbmVyICovXHJcbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoXHJcbiAgICAgICAgICAgICAgLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcixcclxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcclxuICAgICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1idXR0b247XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLXRpbWUtZHJvcGRvd24taW5wdXQtY290bmFpbmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFwZXItbGlzdGJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xyXG4gICAgICAgICAgY29sb3I6IHZhcihcclxuICAgICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsXHJcbiAgICAgICAgICAgIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lLWlucHV0LXdyYXAge1xyXG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XHJcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtbm8td3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtoaWRkZW5dIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbaGlkZUxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGltZS1pbnB1dC13cmFwXCI+XHJcbiAgICAgICAgPCEtLSBIb3VyIElucHV0IC0tPlxyXG4gICAgICAgIDxwYXBlci1pbnB1dFxyXG4gICAgICAgICAgaWQ9XCJob3VyXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgdmFsdWU9XCJ7e2hvdXJ9fVwiXHJcbiAgICAgICAgICBsYWJlbD1cIltbaG91ckxhYmVsXV1cIlxyXG4gICAgICAgICAgb24tY2hhbmdlPVwiX3Nob3VsZEZvcm1hdEhvdXJcIlxyXG4gICAgICAgICAgb24tZm9jdXM9XCJfb25Gb2N1c1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcHJldmVudC1pbnZhbGlkLWlucHV0XHJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXHJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcclxuICAgICAgICAgIG1heD1cIltbX2NvbXB1dGVIb3VyTWF4KGZvcm1hdCldXVwiXHJcbiAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0JD1cIltbIWZsb2F0SW5wdXRMYWJlbHNdXVwiXHJcbiAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWwkPVwiW1thbHdheXNGbG9hdElucHV0TGFiZWxzXV1cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIHN1ZmZpeD1cIlwiIHNsb3Q9XCJzdWZmaXhcIj46PC9zcGFuPlxyXG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XHJcblxyXG4gICAgICAgIDwhLS0gTWluIElucHV0IC0tPlxyXG4gICAgICAgIDxwYXBlci1pbnB1dFxyXG4gICAgICAgICAgaWQ9XCJtaW5cIlxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxyXG4gICAgICAgICAgbGFiZWw9XCJbW21pbkxhYmVsXV1cIlxyXG4gICAgICAgICAgb24tY2hhbmdlPVwiX2Zvcm1hdE1pblwiXHJcbiAgICAgICAgICBvbi1mb2N1cz1cIl9vbkZvY3VzXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXHJcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcclxuICAgICAgICAgIG1heGxlbmd0aD1cIjJcIlxyXG4gICAgICAgICAgbWF4PVwiNTlcIlxyXG4gICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxyXG4gICAgICAgICAgYWx3YXlzLWZsb2F0LWxhYmVsJD1cIltbYWx3YXlzRmxvYXRJbnB1dExhYmVsc11dXCJcclxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBoaWRkZW4kPVwiW1shZW5hYmxlU2Vjb25kXV1cIiBzdWZmaXggc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XHJcbiAgICAgICAgPC9wYXBlci1pbnB1dD5cclxuXHJcbiAgICAgICAgPCEtLSBTZWMgSW5wdXQgLS0+XHJcbiAgICAgICAgPHBhcGVyLWlucHV0XHJcbiAgICAgICAgICBpZD1cInNlY1wiXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIHZhbHVlPVwie3tzZWN9fVwiXHJcbiAgICAgICAgICBsYWJlbD1cIltbc2VjTGFiZWxdXVwiXHJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfZm9ybWF0U2VjXCJcclxuICAgICAgICAgIG9uLWZvY3VzPVwiX29uRm9jdXNcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcclxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dFxyXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICBtYXg9XCI1OVwiXHJcbiAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0JD1cIltbIWZsb2F0SW5wdXRMYWJlbHNdXVwiXHJcbiAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWwkPVwiW1thbHdheXNGbG9hdElucHV0TGFiZWxzXV1cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxyXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWVuYWJsZVNlY29uZF1dXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9wYXBlci1pbnB1dD5cclxuXHJcbiAgICAgICAgPCEtLSBEcm9wZG93biBNZW51IC0tPlxyXG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XHJcbiAgICAgICAgICBpZD1cImRyb3Bkb3duXCJcclxuICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgIGhpZGRlbiQ9XCJbW19lcXVhbChmb3JtYXQsIDI0KV1dXCJcclxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcclxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxyXG4gICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBzZWxlY3RlZD1cInt7YW1QbX19XCJcclxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGFwZXItaXRlbSBuYW1lPVwiQU1cIj5BTTwvcGFwZXItaXRlbT5cclxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0gbmFtZT1cIlBNXCI+UE08L3BhcGVyLWl0ZW0+XHJcbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XHJcbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvKipcclxuICAgICAgICogTGFiZWwgZm9yIHRoZSBpbnB1dFxyXG4gICAgICAgKi9cclxuICAgICAgbGFiZWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6IFwiVGltZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogYXV0byB2YWxpZGF0ZSB0aW1lIGlucHV0c1xyXG4gICAgICAgKi9cclxuICAgICAgYXV0b1ZhbGlkYXRlOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGhpZGVzIHRoZSBsYWJlbFxyXG4gICAgICAgKi9cclxuICAgICAgaGlkZUxhYmVsOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBmbG9hdCB0aGUgaW5wdXQgbGFiZWxzXHJcbiAgICAgICAqL1xyXG4gICAgICBmbG9hdElucHV0TGFiZWxzOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBhbHdheXMgZmxvYXQgdGhlIGlucHV0IGxhYmVsc1xyXG4gICAgICAgKi9cclxuICAgICAgYWx3YXlzRmxvYXRJbnB1dExhYmVsczoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogMTIgb3IgMjQgaHIgZm9ybWF0XHJcbiAgICAgICAqL1xyXG4gICAgICBmb3JtYXQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgdmFsdWU6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogZGlzYWJsZXMgdGhlIGlucHV0c1xyXG4gICAgICAgKi9cclxuICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGhvdXJcclxuICAgICAgICovXHJcbiAgICAgIGhvdXI6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogbWludXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBtaW46IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogc2Vjb25kXHJcbiAgICAgICAqL1xyXG4gICAgICBzZWM6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogU3VmZml4IGZvciB0aGUgaG91ciBpbnB1dFxyXG4gICAgICAgKi9cclxuICAgICAgaG91ckxhYmVsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogU3VmZml4IGZvciB0aGUgbWluIGlucHV0XHJcbiAgICAgICAqL1xyXG4gICAgICBtaW5MYWJlbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB2YWx1ZTogXCI6XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTdWZmaXggZm9yIHRoZSBzZWMgaW5wdXRcclxuICAgICAgICovXHJcbiAgICAgIHNlY0xhYmVsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogc2hvdyB0aGUgc2VjIGZpZWxkXHJcbiAgICAgICAqL1xyXG4gICAgICBlbmFibGVTZWNvbmQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGxpbWl0IGhvdXJzIGlucHV0XHJcbiAgICAgICAqL1xyXG4gICAgICBub0hvdXJzTGltaXQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEFNIG9yIFBNXHJcbiAgICAgICAqL1xyXG4gICAgICBhbVBtOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogXCJBTVwiLFxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICogRm9ybWF0dGVkIHRpbWUgc3RyaW5nXHJcbiAgICAgICAqL1xyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBub3RpZnk6IHRydWUsXHJcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXHJcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVUaW1lKG1pbiwgaG91ciwgc2VjLCBhbVBtKVwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlIHRoZSBpbnB1dHNcclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgIC8vIFZhbGlkYXRlIGhvdXIgJiBtaW4gZmllbGRzXHJcbiAgICBpZiAoIXRoaXMuJC5ob3VyLnZhbGlkYXRlKCkgfCAhdGhpcy4kLm1pbi52YWxpZGF0ZSgpKSB7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBWYWxpZGF0ZSBzZWNvbmQgZmllbGRcclxuICAgIGlmICh0aGlzLmVuYWJsZVNlY29uZCAmJiAhdGhpcy4kLnNlYy52YWxpZGF0ZSgpKSB7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBWYWxpZGF0ZSBBTSBQTSBpZiAxMiBob3VyIHRpbWVcclxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gMTIgJiYgIXRoaXMuJC5kcm9wZG93bi52YWxpZGF0ZSgpKSB7XHJcbiAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGltZSBzdHJpbmdcclxuICAgKi9cclxuICBfY29tcHV0ZVRpbWUobWluLCBob3VyLCBzZWMsIGFtUG0pIHtcclxuICAgIGxldCBzdHI7XHJcbiAgICBpZiAoaG91ciB8fCBtaW4gfHwgKHNlYyAmJiB0aGlzLmVuYWJsZVNlY29uZCkpIHtcclxuICAgICAgaG91ciA9IGhvdXIgfHwgXCIwMFwiO1xyXG4gICAgICBtaW4gPSBtaW4gfHwgXCIwMFwiO1xyXG4gICAgICBzZWMgPSBzZWMgfHwgXCIwMFwiO1xyXG4gICAgICBzdHIgPSBob3VyICsgXCI6XCIgKyBtaW47XHJcbiAgICAgIC8vIGFkZCBzZWMgZmllbGRcclxuICAgICAgaWYgKHRoaXMuZW5hYmxlU2Vjb25kICYmIHNlYykge1xyXG4gICAgICAgIHN0ciA9IHN0ciArIFwiOlwiICsgc2VjO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIE5vIGFtcG0gb24gMjQgaHIgdGltZVxyXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyKSB7XHJcbiAgICAgICAgc3RyID0gc3RyICsgXCIgXCIgKyBhbVBtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIF9vbkZvY3VzKGV2KSB7XHJcbiAgICBldi50YXJnZXQuaW5wdXRFbGVtZW50LmlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBzZWNcclxuICAgKi9cclxuICBfZm9ybWF0U2VjKCkge1xyXG4gICAgaWYgKHRoaXMuc2VjLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuc2VjID0gdGhpcy5zZWMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXQgbWluXHJcbiAgICovXHJcbiAgX2Zvcm1hdE1pbigpIHtcclxuICAgIGlmICh0aGlzLm1pbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLm1pbiA9IHRoaXMubWluLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9ybWF0IGhvdXJcclxuICAgKi9cclxuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gMjQgJiYgdGhpcy5ob3VyLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuaG91ciA9IHRoaXMuaG91ci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIDI0IGhvdXIgZm9ybWF0IGhhcyBhIG1heCBociBvZiAyM1xyXG4gICAqL1xyXG4gIF9jb21wdXRlSG91ck1heChmb3JtYXQpIHtcclxuICAgIGlmICh0aGlzLm5vSG91cnNMaW1pdCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmb3JtYXQgPT09IDEyKSB7XHJcbiAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMjM7XHJcbiAgfVxyXG5cclxuICBfZXF1YWwobjEsIG4yKSB7XHJcbiAgICByZXR1cm4gbjEgPT09IG4yO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicGFwZXItdGltZS1pbnB1dFwiLCBQYXBlclRpbWVJbnB1dCk7XHJcbiIsImltcG9ydCB7IE9wcEVudGl0eUJhc2UsIE9wcEVudGl0eUF0dHJpYnV0ZUJhc2UgfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5leHBvcnQgdHlwZSBIdmFjTW9kZSA9XG4gIHwgXCJvZmZcIlxuICB8IFwiaGVhdFwiXG4gIHwgXCJjb29sXCJcbiAgfCBcImhlYXRfY29vbFwiXG4gIHwgXCJhdXRvXCJcbiAgfCBcImRyeVwiXG4gIHwgXCJmYW5fb25seVwiO1xuXG5leHBvcnQgY29uc3QgQ0xJTUFURV9QUkVTRVRfTk9ORSA9IFwibm9uZVwiO1xuXG5leHBvcnQgdHlwZSBIdmFjQWN0aW9uID0gXCJvZmZcIiB8IFwiaGVhdGluZ1wiIHwgXCJjb29saW5nXCIgfCBcImRyeWluZ1wiIHwgXCJpZGxlXCI7XG5cbmV4cG9ydCB0eXBlIENsaW1hdGVFbnRpdHkgPSBPcHBFbnRpdHlCYXNlICYge1xuICBhdHRyaWJ1dGVzOiBPcHBFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGh2YWNfbW9kZTogSHZhY01vZGU7XG4gICAgaHZhY19tb2RlczogSHZhY01vZGVbXTtcbiAgICBodmFjX2FjdGlvbj86IEh2YWNBY3Rpb247XG4gICAgY3VycmVudF90ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIG1pbl90ZW1wOiBudW1iZXI7XG4gICAgbWF4X3RlbXA6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX3N0ZXA/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfaGlnaD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9sb3c/OiBudW1iZXI7XG4gICAgaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgY3VycmVudF9odW1pZGl0eT86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfbG93PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9oaWdoPzogbnVtYmVyO1xuICAgIG1pbl9odW1pZGl0eT86IG51bWJlcjtcbiAgICBtYXhfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgZmFuX21vZGU/OiBzdHJpbmc7XG4gICAgZmFuX21vZGVzPzogc3RyaW5nW107XG4gICAgcHJlc2V0X21vZGU/OiBzdHJpbmc7XG4gICAgcHJlc2V0X21vZGVzPzogc3RyaW5nW107XG4gICAgc3dpbmdfbW9kZT86IHN0cmluZztcbiAgICBzd2luZ19tb2Rlcz86IHN0cmluZ1tdO1xuICAgIGF1eF9oZWF0PzogXCJvblwiIHwgXCJvZmZcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFID0gMTtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFID0gMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZID0gNDtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUgPSA4O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFID0gMzI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUID0gNjQ7XG5cbmNvbnN0IGh2YWNNb2RlT3JkZXJpbmc6IHsgW2tleSBpbiBIdmFjTW9kZV06IG51bWJlciB9ID0ge1xuICBhdXRvOiAxLFxuICBoZWF0X2Nvb2w6IDIsXG4gIGhlYXQ6IDMsXG4gIGNvb2w6IDQsXG4gIGRyeTogNSxcbiAgZmFuX29ubHk6IDYsXG4gIG9mZjogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcyA9IChtb2RlMTogSHZhY01vZGUsIG1vZGUyOiBIdmFjTW9kZSkgPT5cbiAgaHZhY01vZGVPcmRlcmluZ1ttb2RlMV0gLSBodmFjTW9kZU9yZGVyaW5nW21vZGUyXTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNldElucHV0U2VsZWN0T3B0aW9uID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0eTogc3RyaW5nLFxuICBvcHRpb246IHN0cmluZ1xuKSA9PlxuICBvcHAuY2FsbFNlcnZpY2UoXCJpbnB1dF9zZWxlY3RcIiwgXCJzZWxlY3Rfb3B0aW9uXCIsIHtcbiAgICBvcHRpb24sXG4gICAgZW50aXR5X2lkOiBlbnRpdHksXG4gIH0pO1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5QmFzZSwgT3BwRW50aXR5QXR0cmlidXRlQmFzZSB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIsIFNlcnZpY2VDYWxsUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxubGV0IGluaXRpdGlhbFNjZW5lRWRpdG9yRGF0YTogUGFydGlhbDxTY2VuZUNvbmZpZz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93U2NlbmVFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8U2NlbmVDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhID0gZGF0YTtcbiAgbmF2aWdhdGUoZWwsIFwiL2NvbmZpZy9zY2VuZS9lZGl0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY2VuZUVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhO1xuICBpbml0aXRpYWxTY2VuZUVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0eSBleHRlbmRzIE9wcEVudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBPcHBFbnRpdHlBdHRyaWJ1dGVCYXNlICYgeyBpZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdGllczogU2NlbmVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0aWVzIHtcbiAgW2VudGl0eUlkOiBzdHJpbmddOiBzdHJpbmcgfCB7IHN0YXRlOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgY29uc3QgYWN0aXZhdGVTY2VuZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIG9wcC5jYWxsU2VydmljZShcInNjZW5lXCIsIFwidHVybl9vblwiLCB7IGVudGl0eV9pZDogZW50aXR5SWQgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBseVNjZW5lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBTY2VuZUVudGl0aWVzXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIG9wcC5jYWxsU2VydmljZShcInNjZW5lXCIsIFwiYXBwbHlcIiwgeyBlbnRpdGllcyB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFNjZW5lQ29uZmlnID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHNjZW5lSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxTY2VuZUNvbmZpZz4gPT5cbiAgb3BwLmNhbGxBcGk8U2NlbmVDb25maWc+KFwiR0VUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gKTtcblxuZXhwb3J0IGNvbnN0IHNhdmVTY2VuZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzY2VuZUlkOiBzdHJpbmcsXG4gIGNvbmZpZzogU2NlbmVDb25maWdcbikgPT4gb3BwLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gLCBjb25maWcpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NlbmUgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBpZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke2lkfWApO1xuIiwiaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyRW50aXR5IHtcbiAgY29uc3RydWN0b3Iob3BwLCBzdGF0ZU9iaikge1xuICAgIHRoaXMub3BwID0gb3BwO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW4oKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAxMDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5cIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2VkXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseU9wZW5UaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMTAwO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfdGlsdF9wb3NpdGlvbiA9PT0gMDtcbiAgfVxuXG4gIGdldCBpc09wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlbmluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zaW5nXCI7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMSk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3AoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW5UaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2VUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcFRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCA2NCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgZ2V0IGlzVGlsdE9ubHkoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlbiB8fCB0aGlzLnN1cHBvcnRzQ2xvc2UgfHwgdGhpcy5zdXBwb3J0c1N0b3A7XG4gICAgY29uc3Qgc3VwcG9ydHNUaWx0ID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuVGlsdCB8fCB0aGlzLnN1cHBvcnRzQ2xvc2VUaWx0IHx8IHRoaXMuc3VwcG9ydHNTdG9wVGlsdDtcbiAgICByZXR1cm4gc3VwcG9ydHNUaWx0ICYmICFzdXBwb3J0c0NvdmVyO1xuICB9XG5cbiAgb3BlbkNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyXCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJcIik7XG4gIH1cblxuICBzdG9wQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJcIik7XG4gIH1cblxuICBvcGVuQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJvcGVuX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwiY2xvc2VfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInN0b3BfY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIHNldENvdmVyUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3Bvc2l0aW9uXCIsIHsgcG9zaXRpb24gfSk7XG4gIH1cblxuICBzZXRDb3ZlclRpbHRQb3NpdGlvbih0aWx0UG9zaXRpb24pIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic2V0X2NvdmVyX3RpbHRfcG9zaXRpb25cIiwge1xuICAgICAgdGlsdF9wb3NpdGlvbjogdGlsdFBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5vcHAuY2FsbFNlcnZpY2UoXCJjb3ZlclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZSA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3AgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW5UaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDE2KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2VUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDMyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcFRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+XG4gIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTI4KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGlsdE9ubHkoc3RhdGVPYmopIHtcbiAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgc3VwcG9ydHNPcGVuKHN0YXRlT2JqKSB8fCBzdXBwb3J0c0Nsb3NlKHN0YXRlT2JqKSB8fCBzdXBwb3J0c1N0b3Aoc3RhdGVPYmopO1xuICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgIHN1cHBvcnRzT3BlblRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNDbG9zZVRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNTdG9wVGlsdChzdGF0ZU9iaik7XG4gIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQXhIQTtBQUNBO0FBd0hBOzs7Ozs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoRkE7QUFDQTtBQWlGQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRkE7QUFDQTtBQWtGQTs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFDQTtBQXVEQTs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXJIQTtBQTRIQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoWUE7QUFrWUE7Ozs7Ozs7Ozs7OztBQ2haQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQWFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBRUE7QUFNQTtBQU1BOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEhBO0FBd0hBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=