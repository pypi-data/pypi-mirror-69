(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-history"],{

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
Material design:
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});

/***/ }),

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

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: formatDateTime, formatDateTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTime", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateTimeWithSeconds", function() { return formatDateTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatDateTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.shortTime}`);
const formatDateTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, `${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.longDate}, ${fecha__WEBPACK_IMPORTED_MODULE_0__["default"].masks.mediumTime}`);

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

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
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

/***/ "./src/panels/history/op-panel-history.js":
/*!************************************************!*\
  !*** ./src/panels/history/op-panel-history.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_op_state_history_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/op-state-history-data */ "./src/data/op-state-history-data.js");
/* harmony import */ var _resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../resources/op-date-picker-style */ "./src/resources/op-date-picker-style.js");
/* harmony import */ var _resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_resources_op_date_picker_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");



















/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelHistory extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <style include="iron-flex op-style">
        .content {
          padding: 0 16px 16px;
        }

        vaadin-date-picker {
          margin-right: 16px;
          max-width: 200px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          margin-top: 5px;
          --paper-input-container-label-floating: {
            padding-bottom: 10px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
        }

        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }
      </style>

      <op-state-history-data
        opp="[[opp]]"
        filter-type="[[_filterType]]"
        start-time="[[_computeStartTime(_currentDate)]]"
        end-time="[[endTime]]"
        data="{{stateHistory}}"
        is-loading="{{isLoadingData}}"
      ></op-state-history-data>
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
            <div main-title>[[localize('panel.history')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.history.showing_entries')]]"
              disabled="[[isLoadingData]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.history.period')]]"
              disabled="[[isLoadingData]]"
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
          </div>
          <state-history-charts
            opp="[[opp]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[isLoadingData]]"
            end-time="[[endTime]]"
            no-single
          >
          </state-history-charts>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      narrow: Boolean,
      stateHistory: {
        type: Object,
        value: null
      },
      _periodIndex: {
        type: Number,
        value: 0
      },
      isLoadingData: {
        type: Boolean,
        value: false
      },
      endTime: {
        type: Object,
        computed: "_computeEndTime(_currentDate, _periodIndex)"
      },
      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function () {
          var value = new Date();
          var today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
          return today.toISOString().split("T")[0];
        }
      },
      _filterType: {
        type: String,
        value: "date"
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(opp)"
      }
    };
  }

  datepickerFocus() {
    this.datePicker.adjustPosition();
  }

  connectedCallback() {
    super.connectedCallback(); // We are unable to parse date because we use intl api to render date

    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", date => Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__["formatDate"])(new Date(date.year, date.month, date.day), this.opp.language));
  }

  _computeStartTime(_currentDate) {
    if (!_currentDate) return undefined;

    var parts = _currentDate.split("-");

    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]);
  }

  _computeEndTime(_currentDate, periodIndex) {
    var startTime = this._computeStartTime(_currentDate);

    var endTime = new Date(startTime);
    endTime.setDate(startTime.getDate() + this._computeFilterDays(periodIndex));
    return endTime;
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

  _computeRTL(opp) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__["computeRTL"])(opp);
  }

}

customElements.define("op-panel-history", OpPanelHistory);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9jaGVja19vcHRpb25zX3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvaGlzdG9yeS9vcC1wYW5lbC1oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvb3AtZGF0ZS1waWNrZXItc3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG5leHBvcnQgY29uc3QgdG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zID0gY2hlY2tUb0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbmV4cG9ydCBjb25zdCB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcbmltcG9ydCB7IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zIH0gZnJvbSBcIi4vY2hlY2tfb3B0aW9uc19zdXBwb3J0XCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlVGltZSA9IHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+XG4gICAgICBmZWNoYS5mb3JtYXQoXG4gICAgICAgIGRhdGVPYmosXG4gICAgICAgIGAke2ZlY2hhLm1hc2tzLmxvbmdEYXRlfSwgJHtmZWNoYS5tYXNrcy5zaG9ydFRpbWV9YFxuICAgICAgKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVUaW1lV2l0aFNlY29uZHMgPSB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICB9KVxuICA6IChkYXRlT2JqOiBEYXRlKSA9PlxuICAgICAgZmVjaGEuZm9ybWF0KFxuICAgICAgICBkYXRlT2JqLFxuICAgICAgICBgJHtmZWNoYS5tYXNrcy5sb25nRGF0ZX0sICR7ZmVjaGEubWFza3MubWVkaXVtVGltZX1gXG4gICAgICApO1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogT3BwRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBvcHAgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvcHA6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShvcHAubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvb3Atc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvb3AtZGF0ZS1waWNrZXItc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE9wUGFuZWxIaXN0b3J5IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggb3Atc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFhZGluLWRhdGUtcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZzoge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxvcC1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgb3BwPVwiW1tvcHBdXVwiXG4gICAgICAgIGZpbHRlci10eXBlPVwiW1tfZmlsdGVyVHlwZV1dXCJcbiAgICAgICAgc3RhcnQtdGltZT1cIltbX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKV1dXCJcbiAgICAgICAgZW5kLXRpbWU9XCJbW2VuZFRpbWVdXVwiXG4gICAgICAgIGRhdGE9XCJ7e3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgaXMtbG9hZGluZz1cInt7aXNMb2FkaW5nRGF0YX19XCJcbiAgICAgID48L29wLXN0YXRlLWhpc3RvcnktZGF0YT5cbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxvcC1tZW51LWJ1dHRvbiBvcHA9XCJbW29wcF1dXCIgbmFycm93PVwiW1tuYXJyb3ddXVwiPjwvb3AtbWVudS1idXR0b24+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwuaGlzdG9yeScpXV08L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxheW91dCBob3Jpem9udGFsIHdyYXBcIj5cbiAgICAgICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgaWQ9XCJwaWNrZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnREYXRlfX1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmhpc3Rvcnkuc2hvd2luZ19lbnRyaWVzJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuXG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmhpc3RvcnkucGVyaW9kJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3BlcmlvZEluZGV4fX1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMyldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLndlZWsnLCAnY291bnQnLCAxKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBvcHA9XCJbW29wcF1dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgZW5kLXRpbWU9XCJbW2VuZFRpbWVdXVwiXG4gICAgICAgICAgICBuby1zaW5nbGVcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuXG4gICAgICBzdGF0ZUhpc3Rvcnk6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIF9wZXJpb2RJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcblxuICAgICAgaXNMb2FkaW5nRGF0YToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbmRUaW1lOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVFbmRUaW1lKF9jdXJyZW50RGF0ZSwgX3BlcmlvZEluZGV4KVwiLFxuICAgICAgfSxcblxuICAgICAgLy8gSVNPODYwMSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAgICAgIF9jdXJyZW50RGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgRGF0ZS5VVEModmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgX2ZpbHRlclR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJkYXRlXCIsXG4gICAgICB9LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChvcHApXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBkYXRlcGlja2VyRm9jdXMoKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIFdlIGFyZSB1bmFibGUgdG8gcGFyc2UgZGF0ZSBiZWNhdXNlIHdlIHVzZSBpbnRsIGFwaSB0byByZW5kZXIgZGF0ZVxuICAgIHRoaXMuJC5waWNrZXIuc2V0KFwiaTE4bi5wYXJzZURhdGVcIiwgbnVsbCk7XG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLmZvcm1hdERhdGVcIiwgKGRhdGUpID0+XG4gICAgICBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLCB0aGlzLm9wcC5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKSB7XG4gICAgaWYgKCFfY3VycmVudERhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcnRzID0gX2N1cnJlbnREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnNlSW50KHBhcnRzWzFdKSAtIDE7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnRzWzBdLCBwYXJ0c1sxXSwgcGFydHNbMl0pO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKF9jdXJyZW50RGF0ZSwgcGVyaW9kSW5kZXgpIHtcbiAgICB2YXIgc3RhcnRUaW1lID0gdGhpcy5fY29tcHV0ZVN0YXJ0VGltZShfY3VycmVudERhdGUpO1xuICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgICBlbmRUaW1lLnNldERhdGUoc3RhcnRUaW1lLmdldERhdGUoKSArIHRoaXMuX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSk7XG4gICAgcmV0dXJuIGVuZFRpbWU7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRheXMocGVyaW9kSW5kZXgpIHtcbiAgICBzd2l0Y2ggKHBlcmlvZEluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlUlRMKG9wcCkge1xuICAgIHJldHVybiBjb21wdXRlUlRMKG9wcCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFuZWwtaGlzdG9yeVwiLCBPcFBhbmVsSGlzdG9yeSk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcclxuXHJcbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci10ZXh0LWZpZWxkLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi10ZXh0LWZpZWxkXCI+XHJcbiAgPHRlbXBsYXRlPlxyXG4gICAgPHN0eWxlPlxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImxhYmVsXCJdIHtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJsYWJlbFwiXSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUsIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSwgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci1idXR0b24tc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWJ1dHRvblwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZT5cclxuICAgICAgOmhvc3QoW3BhcnR+PVwidG9kYXktYnV0dG9uXCJdKSBbcGFydH49XCJidXR0b25cIl06OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuPGRvbS1tb2R1bGUgaWQ9XCJvcC1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XHJcbiAgPHRlbXBsYXRlPlxyXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XHJcbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgIDwvc3R5bGU+XHJcbiAgPC90ZW1wbGF0ZT5cclxuPC9kb20tbW9kdWxlPlxyXG48ZG9tLW1vZHVsZSBpZD1cIm9wLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxyXG4gIDx0ZW1wbGF0ZT5cclxuICAgIDxzdHlsZSBpbmNsdWRlPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyLWRlZmF1bHQtdGhlbWVcIj5cclxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZG9tLW1vZHVsZT5cclxuYDtcclxuXHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RUE7QUFDQTs7Ozs7Ozs7Ozs7QUFEQTtBQWNBO0FBQ0E7QUFmQTs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBekNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2TEE7QUFDQTtBQXdMQTs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9