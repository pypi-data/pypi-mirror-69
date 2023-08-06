(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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


/*
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-input.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-input.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_input_iron_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input.js */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-behavior.js");
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
Material design: [Text
fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-input>` is a single-line text field with Material Design styling.

    <paper-input label="Input label"></paper-input>

It may include an optional error message or character counter.

    <paper-input error-message="Invalid input!" label="Input
    label"></paper-input> <paper-input char-counter label="Input
    label"></paper-input>

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself. In order for an element to be
considered as a prefix, it must have the `prefix` attribute (and similarly
for `suffix`).

    <paper-input label="total">
      <div prefix>$</div>
      <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
    </paper-input>

A `paper-input` can use the native `type=search` or `type=file` features.
However, since we can't control the native styling of the input (search icon,
file button, date placeholder, etc.), in these cases the label will be
automatically floated. The `placeholder` attribute can still be used for
additional informational text.

    <paper-input label="search!" type="search"
        placeholder="search for cats" autosave="test" results="5">
    </paper-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Focus

To focus a paper-input, you can call the native `focus()` method as long as the
paper input has a tab index. Similarly, `blur()` will blur the element.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

@element paper-input
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__["Polymer"])({
  is: 'paper-input',

  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"]`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,
  behaviors: [_paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__["PaperInputBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"]],
  properties: {
    value: {
      // Required for the correct TypeScript type-generation
      type: String
    },
    inputRole: {
      type: String,
      value: undefined
    },
    inputAriaHaspopup: {
      type: String,
      value: undefined
    }
  },

  /**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement._inputElement;
  },

  // Note: This event is only available in the 1.0 version of this element.
  // In 2.0, the functionality of `_onIronInputReady` is done in
  // PaperInputBehavior::attached.
  listeners: {
    'iron-input-ready': '_onIronInputReady'
  },
  _onIronInputReady: function () {
    // Even though this is only used in the next line, save this for
    // backwards compatibility, since the native input had this ID until 2.0.5.
    if (!this.$.nativeInput) {
      this.$.nativeInput =
      /** @type {!Element} */
      this.$$('input');
    }

    if (this.inputElement && this._typesThatHaveText.indexOf(this.$.nativeInput.type) !== -1) {
      this.alwaysFloatLabel = true;
    } // Only validate when attached if the input already has a value.


    if (!!this.inputElement.bindValue) {
      this.$.container._handleValueAndAutoValidate(this.inputElement);
    }
  }
});

/***/ }),

/***/ "./node_modules/fecha/src/fecha.js":
/*!*****************************************!*\
  !*** ./node_modules/fecha/src/fecha.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse or format dates
 * @class fecha
 */
var fecha = {};
var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
var twoDigits = '\\d\\d?';
var threeDigits = '\\d{3}';
var fourDigits = '\\d{4}';
var word = '[^\\s]+';
var literal = /\[([^]*?)\]/gm;

var noop = function () {};

function regexEscape(str) {
  return str.replace(/[|\\{()[^$+*?.-]/g, '\\$&');
}

function shorten(arr, sLen) {
  var newArr = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    newArr.push(arr[i].substr(0, sLen));
  }

  return newArr;
}

function monthUpdate(arrName) {
  return function (d, v, i18n) {
    var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

    if (~index) {
      d.month = index;
    }
  };
}

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = '0' + val;
  }

  return val;
}

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNamesShort = shorten(monthNames, 3);
var dayNamesShort = shorten(dayNames, 3);
fecha.i18n = {
  dayNamesShort: dayNamesShort,
  dayNames: dayNames,
  monthNamesShort: monthNamesShort,
  monthNames: monthNames,
  amPm: ['am', 'pm'],
  DoFn: function DoFn(D) {
    return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
  }
};
var formatFlags = {
  D: function (dateObj) {
    return dateObj.getDate();
  },
  DD: function (dateObj) {
    return pad(dateObj.getDate());
  },
  Do: function (dateObj, i18n) {
    return i18n.DoFn(dateObj.getDate());
  },
  d: function (dateObj) {
    return dateObj.getDay();
  },
  dd: function (dateObj) {
    return pad(dateObj.getDay());
  },
  ddd: function (dateObj, i18n) {
    return i18n.dayNamesShort[dateObj.getDay()];
  },
  dddd: function (dateObj, i18n) {
    return i18n.dayNames[dateObj.getDay()];
  },
  M: function (dateObj) {
    return dateObj.getMonth() + 1;
  },
  MM: function (dateObj) {
    return pad(dateObj.getMonth() + 1);
  },
  MMM: function (dateObj, i18n) {
    return i18n.monthNamesShort[dateObj.getMonth()];
  },
  MMMM: function (dateObj, i18n) {
    return i18n.monthNames[dateObj.getMonth()];
  },
  YY: function (dateObj) {
    return pad(String(dateObj.getFullYear()), 4).substr(2);
  },
  YYYY: function (dateObj) {
    return pad(dateObj.getFullYear(), 4);
  },
  h: function (dateObj) {
    return dateObj.getHours() % 12 || 12;
  },
  hh: function (dateObj) {
    return pad(dateObj.getHours() % 12 || 12);
  },
  H: function (dateObj) {
    return dateObj.getHours();
  },
  HH: function (dateObj) {
    return pad(dateObj.getHours());
  },
  m: function (dateObj) {
    return dateObj.getMinutes();
  },
  mm: function (dateObj) {
    return pad(dateObj.getMinutes());
  },
  s: function (dateObj) {
    return dateObj.getSeconds();
  },
  ss: function (dateObj) {
    return pad(dateObj.getSeconds());
  },
  S: function (dateObj) {
    return Math.round(dateObj.getMilliseconds() / 100);
  },
  SS: function (dateObj) {
    return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
  },
  SSS: function (dateObj) {
    return pad(dateObj.getMilliseconds(), 3);
  },
  a: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
  },
  A: function (dateObj, i18n) {
    return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
  },
  ZZ: function (dateObj) {
    var o = dateObj.getTimezoneOffset();
    return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
  }
};
var parseFlags = {
  D: [twoDigits, function (d, v) {
    d.day = v;
  }],
  Do: [twoDigits + word, function (d, v) {
    d.day = parseInt(v, 10);
  }],
  M: [twoDigits, function (d, v) {
    d.month = v - 1;
  }],
  YY: [twoDigits, function (d, v) {
    var da = new Date(),
        cent = +('' + da.getFullYear()).substr(0, 2);
    d.year = '' + (v > 68 ? cent - 1 : cent) + v;
  }],
  h: [twoDigits, function (d, v) {
    d.hour = v;
  }],
  m: [twoDigits, function (d, v) {
    d.minute = v;
  }],
  s: [twoDigits, function (d, v) {
    d.second = v;
  }],
  YYYY: [fourDigits, function (d, v) {
    d.year = v;
  }],
  S: ['\\d', function (d, v) {
    d.millisecond = v * 100;
  }],
  SS: ['\\d{2}', function (d, v) {
    d.millisecond = v * 10;
  }],
  SSS: [threeDigits, function (d, v) {
    d.millisecond = v;
  }],
  d: [twoDigits, noop],
  ddd: [word, noop],
  MMM: [word, monthUpdate('monthNamesShort')],
  MMMM: [word, monthUpdate('monthNames')],
  a: [word, function (d, v, i18n) {
    var val = v.toLowerCase();

    if (val === i18n.amPm[0]) {
      d.isPm = false;
    } else if (val === i18n.amPm[1]) {
      d.isPm = true;
    }
  }],
  ZZ: ['[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z', function (d, v) {
    var parts = (v + '').match(/([+-]|\d\d)/gi),
        minutes;

    if (parts) {
      minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
      d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
    }
  }]
};
parseFlags.dd = parseFlags.d;
parseFlags.dddd = parseFlags.ddd;
parseFlags.DD = parseFlags.D;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.MM = parseFlags.M;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a; // Some common format strings

fecha.masks = {
  default: 'ddd MMM DD YYYY HH:mm:ss',
  shortDate: 'M/D/YY',
  mediumDate: 'MMM D, YYYY',
  longDate: 'MMMM D, YYYY',
  fullDate: 'dddd, MMMM D, YYYY',
  shortTime: 'HH:mm',
  mediumTime: 'HH:mm:ss',
  longTime: 'HH:mm:ss.SSS'
};
/***
 * Format a date
 * @method format
 * @param {Date|number} dateObj
 * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
 */

fecha.format = function (dateObj, mask, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof dateObj === 'number') {
    dateObj = new Date(dateObj);
  }

  if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
    throw new Error('Invalid Date in fecha.format');
  }

  mask = fecha.masks[mask] || mask || fecha.masks['default'];
  var literals = []; // Make literals inactive by replacing them with ??

  mask = mask.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  }); // Apply formatting rules

  mask = mask.replace(token, function ($0) {
    return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
  }); // Inline literal values back into the formatted value

  return mask.replace(/@@@/g, function () {
    return literals.shift();
  });
};
/**
 * Parse a date string into an object, changes - into /
 * @method parse
 * @param {string} dateStr Date string
 * @param {string} format Date parse format
 * @returns {Date|boolean}
 */


fecha.parse = function (dateStr, format, i18nSettings) {
  var i18n = i18nSettings || fecha.i18n;

  if (typeof format !== 'string') {
    throw new Error('Invalid format in fecha.parse');
  }

  format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
  // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

  if (dateStr.length > 1000) {
    return null;
  }

  var dateInfo = {};
  var parseInfo = [];
  var literals = [];
  format = format.replace(literal, function ($0, $1) {
    literals.push($1);
    return '@@@';
  });
  var newFormat = regexEscape(format).replace(token, function ($0) {
    if (parseFlags[$0]) {
      var info = parseFlags[$0];
      parseInfo.push(info[1]);
      return '(' + info[0] + ')';
    }

    return $0;
  });
  newFormat = newFormat.replace(/@@@/g, function () {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, 'i'));

  if (!matches) {
    return null;
  }

  for (var i = 1; i < matches.length; i++) {
    parseInfo[i - 1](dateInfo, matches[i], i18n);
  }

  var today = new Date();

  if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }

  var date;

  if (dateInfo.timezoneOffset != null) {
    dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
    date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
  } else {
    date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
  }

  return date;
};

/* harmony default export */ __webpack_exports__["default"] = (fecha);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mZWNoYS9zcmMvZmVjaGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5BIHNldCBvZiBsYXlvdXQgY2xhc3NlcyB0aGF0IGxldCB5b3Ugc3BlY2lmeSBsYXlvdXQgcHJvcGVydGllcyBkaXJlY3RseSBpblxubWFya3VwLiBZb3UgbXVzdCBpbmNsdWRlIHRoaXMgZmlsZSBpbiBldmVyeSBlbGVtZW50IHRoYXQgbmVlZHMgdG8gdXNlIHRoZW0uXG5cblNhbXBsZSB1c2U6XG5cbiAgICBpbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzLmpzJztcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC50ZXN0IHsgd2lkdGg6IDEwMHB4OyB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGNlbnRlci1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RcIj5ob3Jpem9udGFsIGxheW91dCBjZW50ZXIgYWxpZ25tZW50PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG5cblRoZSBmb2xsb3dpbmcgaW1wb3J0cyBhcmUgYXZhaWxhYmxlOlxuIC0gaXJvbi1mbGV4XG4gLSBpcm9uLWZsZXgtcmV2ZXJzZVxuIC0gaXJvbi1mbGV4LWFsaWdubWVudFxuIC0gaXJvbi1mbGV4LWZhY3RvcnNcbiAtIGlyb24tcG9zaXRpb25pbmdcbiovXG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbi8qIE1vc3QgY29tbW9uIHVzZWQgZmxleCBzdHlsZXMqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXhcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbCxcbiAgICAgIC5sYXlvdXQudmVydGljYWwge1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbCB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQudmVydGljYWwge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LndyYXAge1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lm5vLXdyYXAge1xuICAgICAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlcixcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItanVzdGlmaWVkLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgge1xuICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC1hdXRvIHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtbm9uZSB7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIEJhc2ljIGZsZXhib3ggcmV2ZXJzZSBzdHlsZXMgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LXJldmVyc2VcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlLFxuICAgICAgLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNlIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LnZlcnRpY2FsLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LndyYXAtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIEZsZXhib3ggYWxpZ25tZW50ICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1hbGlnbm1lbnRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC8qKlxuICAgICAgICogQWxpZ25tZW50IGluIGNyb3NzIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlcixcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmJhc2VsaW5lIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFsaWdubWVudCBpbiBtYWluIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWp1c3RpZmllZCxcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kLWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmFyb3VuZC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlbGYgYWxpZ25tZW50LlxuICAgICAgICovXG4gICAgICAuc2VsZi1zdGFydCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWNlbnRlciB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWVuZCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLXN0cmV0Y2gge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1iYXNlbGluZSB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogbXVsdGktbGluZSBhbGlnbm1lbnQgaW4gbWFpbiBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0LWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0OyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQ7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5iZXR3ZWVuLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnk7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYXJvdW5kLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGU7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIE5vbi1mbGV4Ym94IHBvc2l0aW9uaW5nIGhlbHBlciBzdHlsZXMgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LWZhY3RvcnNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mbGV4LFxuICAgICAgLmZsZXgtMSB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTIge1xuICAgICAgICAtbXMtZmxleDogMjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAyO1xuICAgICAgICBmbGV4OiAyO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0zIHtcbiAgICAgICAgLW1zLWZsZXg6IDM7XG4gICAgICAgIC13ZWJraXQtZmxleDogMztcbiAgICAgICAgZmxleDogMztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNCB7XG4gICAgICAgIC1tcy1mbGV4OiA0O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDQ7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTUge1xuICAgICAgICAtbXMtZmxleDogNTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA1O1xuICAgICAgICBmbGV4OiA1O1xuICAgICAgfVxuXG4gICAgICAuZmxleC02IHtcbiAgICAgICAgLW1zLWZsZXg6IDY7XG4gICAgICAgIC13ZWJraXQtZmxleDogNjtcbiAgICAgICAgZmxleDogNjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNyB7XG4gICAgICAgIC1tcy1mbGV4OiA3O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDc7XG4gICAgICAgIGZsZXg6IDc7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTgge1xuICAgICAgICAtbXMtZmxleDogODtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA4O1xuICAgICAgICBmbGV4OiA4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC05IHtcbiAgICAgICAgLW1zLWZsZXg6IDk7XG4gICAgICAgIC13ZWJraXQtZmxleDogOTtcbiAgICAgICAgZmxleDogOTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTAge1xuICAgICAgICAtbXMtZmxleDogMTA7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTA7XG4gICAgICAgIGZsZXg6IDEwO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMSB7XG4gICAgICAgIC1tcy1mbGV4OiAxMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMTtcbiAgICAgICAgZmxleDogMTE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTEyIHtcbiAgICAgICAgLW1zLWZsZXg6IDEyO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEyO1xuICAgICAgICBmbGV4OiAxMjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLXBvc2l0aW9uaW5nXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnJlbGF0aXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGJvZHkuZnVsbGJsZWVkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cblxuICAgICAgLyogZml4ZWQgcG9zaXRpb24gKi9cbiAgICAgIC5maXhlZC1ib3R0b20sXG4gICAgICAuZml4ZWQtbGVmdCxcbiAgICAgIC5maXhlZC1yaWdodCxcbiAgICAgIC5maXhlZC10b3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1ib3R0b20ge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0LmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNvbnRhaW5lci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtZXJyb3IuanMnO1xuXG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0RvbU1vZHVsZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLW1vZHVsZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHtQYXBlcklucHV0QmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1RleHRcbmZpZWxkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3RleHQtZmllbGRzLmh0bWwpXG5cbmA8cGFwZXItaW5wdXQ+YCBpcyBhIHNpbmdsZS1saW5lIHRleHQgZmllbGQgd2l0aCBNYXRlcmlhbCBEZXNpZ24gc3R5bGluZy5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgbWF5IGluY2x1ZGUgYW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXIgY291bnRlci5cblxuICAgIDxwYXBlci1pbnB1dCBlcnJvci1tZXNzYWdlPVwiSW52YWxpZCBpbnB1dCFcIiBsYWJlbD1cIklucHV0XG4gICAgbGFiZWxcIj48L3BhcGVyLWlucHV0PiA8cGFwZXItaW5wdXQgY2hhci1jb3VudGVyIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IGNhbiBhbHNvIGluY2x1ZGUgY3VzdG9tIHByZWZpeCBvciBzdWZmaXggZWxlbWVudHMsIHdoaWNoIGFyZSBkaXNwbGF5ZWRcbmJlZm9yZSBvciBhZnRlciB0aGUgdGV4dCBpbnB1dCBpdHNlbGYuIEluIG9yZGVyIGZvciBhbiBlbGVtZW50IHRvIGJlXG5jb25zaWRlcmVkIGFzIGEgcHJlZml4LCBpdCBtdXN0IGhhdmUgdGhlIGBwcmVmaXhgIGF0dHJpYnV0ZSAoYW5kIHNpbWlsYXJseVxuZm9yIGBzdWZmaXhgKS5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInRvdGFsXCI+XG4gICAgICA8ZGl2IHByZWZpeD4kPC9kaXY+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuQSBgcGFwZXItaW5wdXRgIGNhbiB1c2UgdGhlIG5hdGl2ZSBgdHlwZT1zZWFyY2hgIG9yIGB0eXBlPWZpbGVgIGZlYXR1cmVzLlxuSG93ZXZlciwgc2luY2Ugd2UgY2FuJ3QgY29udHJvbCB0aGUgbmF0aXZlIHN0eWxpbmcgb2YgdGhlIGlucHV0IChzZWFyY2ggaWNvbixcbmZpbGUgYnV0dG9uLCBkYXRlIHBsYWNlaG9sZGVyLCBldGMuKSwgaW4gdGhlc2UgY2FzZXMgdGhlIGxhYmVsIHdpbGwgYmVcbmF1dG9tYXRpY2FsbHkgZmxvYXRlZC4gVGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIGNhbiBzdGlsbCBiZSB1c2VkIGZvclxuYWRkaXRpb25hbCBpbmZvcm1hdGlvbmFsIHRleHQuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJzZWFyY2ghXCIgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBjYXRzXCIgYXV0b3NhdmU9XCJ0ZXN0XCIgcmVzdWx0cz1cIjVcIj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yYCBmb3IgbW9yZSBBUEkgZG9jcy5cblxuIyMjIEZvY3VzXG5cblRvIGZvY3VzIGEgcGFwZXItaW5wdXQsIHlvdSBjYW4gY2FsbCB0aGUgbmF0aXZlIGBmb2N1cygpYCBtZXRob2QgYXMgbG9uZyBhcyB0aGVcbnBhcGVyIGlucHV0IGhhcyBhIHRhYiBpbmRleC4gU2ltaWxhcmx5LCBgYmx1cigpYCB3aWxsIGJsdXIgdGhlIGVsZW1lbnQuXG5cbiMjIyBTdHlsaW5nXG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0Q29udGFpbmVyYCBmb3IgYSBsaXN0IG9mIGN1c3RvbSBwcm9wZXJ0aWVzIHVzZWQgdG9cbnN0eWxlIHRoaXMgZWxlbWVudC5cblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBJbnRlcm5ldCBFeHBsb3JlciByZXZlYWwgYnV0dG9uICh0aGUgZXllYmFsbCkgfCB7fVxuXG5AZWxlbWVudCBwYXBlci1pbnB1dFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIGlzOiAncGFwZXItaW5wdXQnLFxuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLyogSW4gMS54LCB0aGUgPGlucHV0PiBpcyBkaXN0cmlidXRlZCB0byBwYXBlci1pbnB1dC1jb250YWluZXIsIHdoaWNoIHN0eWxlcyBpdC5cbiAgICAgIEluIDIueCB0aGUgPGlyb24taW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzXG4gICAgICBpdCwgYnV0IGluIG9yZGVyIGZvciB0aGlzIHRvIHdvcmsgY29ycmVjdGx5LCB3ZSBuZWVkIHRvIHJlc2V0IHNvbWVcbiAgICAgIG9mIHRoZSBuYXRpdmUgaW5wdXQncyBwcm9wZXJ0aWVzIHRvIGluaGVyaXQgKGZyb20gdGhlIGlyb24taW5wdXQpICovXG4gICAgICBpcm9uLWlucHV0ID4gaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICAgIHdvcmQtc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBpbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1zLWNsZWFyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1zLXJldmVhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1yZXZlYWw7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgaWQ9XCJjb250YWluZXJcIiBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIiBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW19jb21wdXRlQWx3YXlzRmxvYXRMYWJlbChhbHdheXNGbG9hdExhYmVsLHBsYWNlaG9sZGVyKV1dXCIgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb3IkPVwiW1tfaW5wdXRJZF1dXCIgc2xvdD1cImxhYmVsXCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPCEtLSBOZWVkIHRvIGJpbmQgbWF4bGVuZ3RoIHNvIHRoYXQgdGhlIHBhcGVyLWlucHV0LWNoYXItY291bnRlciB3b3JrcyBjb3JyZWN0bHkgLS0+XG4gICAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3t2YWx1ZX19XCIgc2xvdD1cImlucHV0XCIgY2xhc3M9XCJpbnB1dC1lbGVtZW50XCIgaWQkPVwiW1tfaW5wdXRJZF1dXCIgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIiBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIiBpbnZhbGlkPVwie3tpbnZhbGlkfX1cIiB2YWxpZGF0b3I9XCJbW3ZhbGlkYXRvcl1dXCI+XG4gICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsbGVkYnkkPVwiW1tfYXJpYUxhYmVsbGVkQnldXVwiIGFyaWEtZGVzY3JpYmVkYnkkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiB0aXRsZSQ9XCJbW3RpdGxlXV1cIiB0eXBlJD1cIltbdHlwZV1dXCIgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCIgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIiBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCIgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIiBtaW4kPVwiW1ttaW5dXVwiIG1heCQ9XCJbW21heF1dXCIgc3RlcCQ9XCJbW3N0ZXBdXVwiIG5hbWUkPVwiW1tuYW1lXV1cIiBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIiByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIiBsaXN0JD1cIltbbGlzdF1dXCIgc2l6ZSQ9XCJbW3NpemVdXVwiIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIiBhY2NlcHQkPVwiW1thY2NlcHRdXVwiIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiIHJvbGUkPVwiW1tpbnB1dFJvbGVdXVwiIGFyaWEtaGFzcG9wdXAkPVwiW1tpbnB1dEFyaWFIYXNwb3B1cF1dXCI+XG4gICAgICA8L2lyb24taW5wdXQ+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICBgLFxuXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRCZWhhdmlvciwgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBjb3JyZWN0IFR5cGVTY3JpcHQgdHlwZS1nZW5lcmF0aW9uXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuXG4gICAgaW5wdXRSb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIH0sXG5cbiAgICBpbnB1dEFyaWFIYXNwb3B1cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmb2N1c2FibGUgZWxlbWVudC4gT3ZlcnJpZGRlbiBmcm9tXG4gICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBjb3JyZWN0bHkgZm9jdXMgdGhlIG5hdGl2ZSBpbnB1dC5cbiAgICpcbiAgICogQHJldHVybiB7IUhUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5faW5wdXRFbGVtZW50O1xuICB9LFxuXG4gIC8vIE5vdGU6IFRoaXMgZXZlbnQgaXMgb25seSBhdmFpbGFibGUgaW4gdGhlIDEuMCB2ZXJzaW9uIG9mIHRoaXMgZWxlbWVudC5cbiAgLy8gSW4gMi4wLCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBgX29uSXJvbklucHV0UmVhZHlgIGlzIGRvbmUgaW5cbiAgLy8gUGFwZXJJbnB1dEJlaGF2aW9yOjphdHRhY2hlZC5cbiAgbGlzdGVuZXJzOiB7J2lyb24taW5wdXQtcmVhZHknOiAnX29uSXJvbklucHV0UmVhZHknfSxcblxuICBfb25Jcm9uSW5wdXRSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gRXZlbiB0aG91Z2ggdGhpcyBpcyBvbmx5IHVzZWQgaW4gdGhlIG5leHQgbGluZSwgc2F2ZSB0aGlzIGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBzaW5jZSB0aGUgbmF0aXZlIGlucHV0IGhhZCB0aGlzIElEIHVudGlsIDIuMC41LlxuICAgIGlmICghdGhpcy4kLm5hdGl2ZUlucHV0KSB7XG4gICAgICB0aGlzLiQubmF0aXZlSW5wdXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAodGhpcy4kJCgnaW5wdXQnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgIGlmICghIXRoaXMuaW5wdXRFbGVtZW50LmJpbmRWYWx1ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgZGF0ZXNcbiAqIEBjbGFzcyBmZWNoYVxuICovXG52YXIgZmVjaGEgPSB7fTtcbnZhciB0b2tlbiA9IC9kezEsNH18TXsxLDR9fFlZKD86WVkpP3xTezEsM318RG98Wlp8KFtIaE1zRG1dKVxcMT98W2FBXXxcIlteXCJdKlwifCdbXiddKicvZztcbnZhciB0d29EaWdpdHMgPSAnXFxcXGRcXFxcZD8nO1xudmFyIHRocmVlRGlnaXRzID0gJ1xcXFxkezN9JztcbnZhciBmb3VyRGlnaXRzID0gJ1xcXFxkezR9JztcbnZhciB3b3JkID0gJ1teXFxcXHNdKyc7XG52YXIgbGl0ZXJhbCA9IC9cXFsoW15dKj8pXFxdL2dtO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5mdW5jdGlvbiByZWdleEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvW3xcXFxceygpW14kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gc2hvcnRlbihhcnIsIHNMZW4pIHtcbiAgdmFyIG5ld0FyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbmV3QXJyLnB1c2goYXJyW2ldLnN1YnN0cigwLCBzTGVuKSk7XG4gIH1cbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZnVuY3Rpb24gbW9udGhVcGRhdGUoYXJyTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGQsIHYsIGkxOG4pIHtcbiAgICB2YXIgaW5kZXggPSBpMThuW2Fyck5hbWVdLmluZGV4T2Yodi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHYuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmICh+aW5kZXgpIHtcbiAgICAgIGQubW9udGggPSBpbmRleDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhZCh2YWwsIGxlbikge1xuICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgbGVuID0gbGVuIHx8IDI7XG4gIHdoaWxlICh2YWwubGVuZ3RoIDwgbGVuKSB7XG4gICAgdmFsID0gJzAnICsgdmFsO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBkYXlOYW1lcyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbnZhciBtb250aE5hbWVzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG52YXIgbW9udGhOYW1lc1Nob3J0ID0gc2hvcnRlbihtb250aE5hbWVzLCAzKTtcbnZhciBkYXlOYW1lc1Nob3J0ID0gc2hvcnRlbihkYXlOYW1lcywgMyk7XG5mZWNoYS5pMThuID0ge1xuICBkYXlOYW1lc1Nob3J0OiBkYXlOYW1lc1Nob3J0LFxuICBkYXlOYW1lczogZGF5TmFtZXMsXG4gIG1vbnRoTmFtZXNTaG9ydDogbW9udGhOYW1lc1Nob3J0LFxuICBtb250aE5hbWVzOiBtb250aE5hbWVzLFxuICBhbVBtOiBbJ2FtJywgJ3BtJ10sXG4gIERvRm46IGZ1bmN0aW9uIERvRm4oRCkge1xuICAgIHJldHVybiBEICsgWyd0aCcsICdzdCcsICduZCcsICdyZCddW0QgJSAxMCA+IDMgPyAwIDogKEQgLSBEICUgMTAgIT09IDEwKSAqIEQgJSAxMF07XG4gIH1cbn07XG5cbnZhciBmb3JtYXRGbGFncyA9IHtcbiAgRDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldERhdGUoKTtcbiAgfSxcbiAgREQ6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0RGF0ZSgpKTtcbiAgfSxcbiAgRG86IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5Eb0ZuKGRhdGVPYmouZ2V0RGF0ZSgpKTtcbiAgfSxcbiAgZDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldERheSgpO1xuICB9LFxuICBkZDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXREYXkoKSk7XG4gIH0sXG4gIGRkZDogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLmRheU5hbWVzU2hvcnRbZGF0ZU9iai5nZXREYXkoKV07XG4gIH0sXG4gIGRkZGQ6IGZ1bmN0aW9uKGRhdGVPYmosIGkxOG4pIHtcbiAgICByZXR1cm4gaTE4bi5kYXlOYW1lc1tkYXRlT2JqLmdldERheSgpXTtcbiAgfSxcbiAgTTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldE1vbnRoKCkgKyAxO1xuICB9LFxuICBNTTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNb250aCgpICsgMSk7XG4gIH0sXG4gIE1NTTogZnVuY3Rpb24oZGF0ZU9iaiwgaTE4bikge1xuICAgIHJldHVybiBpMThuLm1vbnRoTmFtZXNTaG9ydFtkYXRlT2JqLmdldE1vbnRoKCldO1xuICB9LFxuICBNTU1NOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGkxOG4ubW9udGhOYW1lc1tkYXRlT2JqLmdldE1vbnRoKCldO1xuICB9LFxuICBZWTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoU3RyaW5nKGRhdGVPYmouZ2V0RnVsbFllYXIoKSksIDQpLnN1YnN0cigyKTtcbiAgfSxcbiAgWVlZWTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRGdWxsWWVhcigpLCA0KTtcbiAgfSxcbiAgaDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCkgJSAxMiB8fCAxMjtcbiAgfSxcbiAgaGg6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyIHx8IDEyKTtcbiAgfSxcbiAgSDogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBkYXRlT2JqLmdldEhvdXJzKCk7XG4gIH0sXG4gIEhIOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlT2JqLmdldEhvdXJzKCkpO1xuICB9LFxuICBtOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0TWludXRlcygpO1xuICB9LFxuICBtbTogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRNaW51dGVzKCkpO1xuICB9LFxuICBzOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0U2Vjb25kcygpO1xuICB9LFxuICBzczogZnVuY3Rpb24oZGF0ZU9iaikge1xuICAgIHJldHVybiBwYWQoZGF0ZU9iai5nZXRTZWNvbmRzKCkpO1xuICB9LFxuICBTOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGF0ZU9iai5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCk7XG4gIH0sXG4gIFNTOiBmdW5jdGlvbihkYXRlT2JqKSB7XG4gICAgcmV0dXJuIHBhZChNYXRoLnJvdW5kKGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpO1xuICB9LFxuICBTU1M6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICByZXR1cm4gcGFkKGRhdGVPYmouZ2V0TWlsbGlzZWNvbmRzKCksIDMpO1xuICB9LFxuICBhOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSA8IDEyID8gaTE4bi5hbVBtWzBdIDogaTE4bi5hbVBtWzFdO1xuICB9LFxuICBBOiBmdW5jdGlvbihkYXRlT2JqLCBpMThuKSB7XG4gICAgcmV0dXJuIGRhdGVPYmouZ2V0SG91cnMoKSA8IDEyID8gaTE4bi5hbVBtWzBdLnRvVXBwZXJDYXNlKCkgOiBpMThuLmFtUG1bMV0udG9VcHBlckNhc2UoKTtcbiAgfSxcbiAgWlo6IGZ1bmN0aW9uKGRhdGVPYmopIHtcbiAgICB2YXIgbyA9IGRhdGVPYmouZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICByZXR1cm4gKG8gPiAwID8gJy0nIDogJysnKSArIHBhZChNYXRoLmZsb29yKE1hdGguYWJzKG8pIC8gNjApICogMTAwICsgTWF0aC5hYnMobykgJSA2MCwgNCk7XG4gIH1cbn07XG5cbnZhciBwYXJzZUZsYWdzID0ge1xuICBEOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuZGF5ID0gdjtcbiAgfV0sXG4gIERvOiBbdHdvRGlnaXRzICsgd29yZCwgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLmRheSA9IHBhcnNlSW50KHYsIDEwKTtcbiAgfV0sXG4gIE06IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5tb250aCA9IHYgLSAxO1xuICB9XSxcbiAgWVk6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgdmFyIGRhID0gbmV3IERhdGUoKSwgY2VudCA9ICsoJycgKyBkYS5nZXRGdWxsWWVhcigpKS5zdWJzdHIoMCwgMik7XG4gICAgZC55ZWFyID0gJycgKyAodiA+IDY4ID8gY2VudCAtIDEgOiBjZW50KSArIHY7XG4gIH1dLFxuICBoOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQuaG91ciA9IHY7XG4gIH1dLFxuICBtOiBbdHdvRGlnaXRzLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWludXRlID0gdjtcbiAgfV0sXG4gIHM6IFt0d29EaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC5zZWNvbmQgPSB2O1xuICB9XSxcbiAgWVlZWTogW2ZvdXJEaWdpdHMsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgZC55ZWFyID0gdjtcbiAgfV0sXG4gIFM6IFsnXFxcXGQnLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2ICogMTAwO1xuICB9XSxcbiAgU1M6IFsnXFxcXGR7Mn0nLCBmdW5jdGlvbiAoZCwgdikge1xuICAgIGQubWlsbGlzZWNvbmQgPSB2ICogMTA7XG4gIH1dLFxuICBTU1M6IFt0aHJlZURpZ2l0cywgZnVuY3Rpb24gKGQsIHYpIHtcbiAgICBkLm1pbGxpc2Vjb25kID0gdjtcbiAgfV0sXG4gIGQ6IFt0d29EaWdpdHMsIG5vb3BdLFxuICBkZGQ6IFt3b3JkLCBub29wXSxcbiAgTU1NOiBbd29yZCwgbW9udGhVcGRhdGUoJ21vbnRoTmFtZXNTaG9ydCcpXSxcbiAgTU1NTTogW3dvcmQsIG1vbnRoVXBkYXRlKCdtb250aE5hbWVzJyldLFxuICBhOiBbd29yZCwgZnVuY3Rpb24gKGQsIHYsIGkxOG4pIHtcbiAgICB2YXIgdmFsID0gdi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh2YWwgPT09IGkxOG4uYW1QbVswXSkge1xuICAgICAgZC5pc1BtID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IGkxOG4uYW1QbVsxXSkge1xuICAgICAgZC5pc1BtID0gdHJ1ZTtcbiAgICB9XG4gIH1dLFxuICBaWjogWydbXlxcXFxzXSo/W1xcXFwrXFxcXC1dXFxcXGRcXFxcZDo/XFxcXGRcXFxcZHxbXlxcXFxzXSo/WicsIGZ1bmN0aW9uIChkLCB2KSB7XG4gICAgdmFyIHBhcnRzID0gKHYgKyAnJykubWF0Y2goLyhbKy1dfFxcZFxcZCkvZ2kpLCBtaW51dGVzO1xuXG4gICAgaWYgKHBhcnRzKSB7XG4gICAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHBhcnNlSW50KHBhcnRzWzJdLCAxMCk7XG4gICAgICBkLnRpbWV6b25lT2Zmc2V0ID0gcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbiAgICB9XG4gIH1dXG59O1xucGFyc2VGbGFncy5kZCA9IHBhcnNlRmxhZ3MuZDtcbnBhcnNlRmxhZ3MuZGRkZCA9IHBhcnNlRmxhZ3MuZGRkO1xucGFyc2VGbGFncy5ERCA9IHBhcnNlRmxhZ3MuRDtcbnBhcnNlRmxhZ3MubW0gPSBwYXJzZUZsYWdzLm07XG5wYXJzZUZsYWdzLmhoID0gcGFyc2VGbGFncy5IID0gcGFyc2VGbGFncy5ISCA9IHBhcnNlRmxhZ3MuaDtcbnBhcnNlRmxhZ3MuTU0gPSBwYXJzZUZsYWdzLk07XG5wYXJzZUZsYWdzLnNzID0gcGFyc2VGbGFncy5zO1xucGFyc2VGbGFncy5BID0gcGFyc2VGbGFncy5hO1xuXG5cbi8vIFNvbWUgY29tbW9uIGZvcm1hdCBzdHJpbmdzXG5mZWNoYS5tYXNrcyA9IHtcbiAgZGVmYXVsdDogJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcycsXG4gIHNob3J0RGF0ZTogJ00vRC9ZWScsXG4gIG1lZGl1bURhdGU6ICdNTU0gRCwgWVlZWScsXG4gIGxvbmdEYXRlOiAnTU1NTSBELCBZWVlZJyxcbiAgZnVsbERhdGU6ICdkZGRkLCBNTU1NIEQsIFlZWVknLFxuICBzaG9ydFRpbWU6ICdISDptbScsXG4gIG1lZGl1bVRpbWU6ICdISDptbTpzcycsXG4gIGxvbmdUaW1lOiAnSEg6bW06c3MuU1NTJ1xufTtcblxuLyoqKlxuICogRm9ybWF0IGEgZGF0ZVxuICogQG1ldGhvZCBmb3JtYXRcbiAqIEBwYXJhbSB7RGF0ZXxudW1iZXJ9IGRhdGVPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXNrIEZvcm1hdCBvZiB0aGUgZGF0ZSwgaS5lLiAnbW0tZGQteXknIG9yICdzaG9ydERhdGUnXG4gKi9cbmZlY2hhLmZvcm1hdCA9IGZ1bmN0aW9uIChkYXRlT2JqLCBtYXNrLCBpMThuU2V0dGluZ3MpIHtcbiAgdmFyIGkxOG4gPSBpMThuU2V0dGluZ3MgfHwgZmVjaGEuaTE4bjtcblxuICBpZiAodHlwZW9mIGRhdGVPYmogPT09ICdudW1iZXInKSB7XG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGVPYmopO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlT2JqKSAhPT0gJ1tvYmplY3QgRGF0ZV0nIHx8IGlzTmFOKGRhdGVPYmouZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBEYXRlIGluIGZlY2hhLmZvcm1hdCcpO1xuICB9XG5cbiAgbWFzayA9IGZlY2hhLm1hc2tzW21hc2tdIHx8IG1hc2sgfHwgZmVjaGEubWFza3NbJ2RlZmF1bHQnXTtcblxuICB2YXIgbGl0ZXJhbHMgPSBbXTtcblxuICAvLyBNYWtlIGxpdGVyYWxzIGluYWN0aXZlIGJ5IHJlcGxhY2luZyB0aGVtIHdpdGggPz9cbiAgbWFzayA9IG1hc2sucmVwbGFjZShsaXRlcmFsLCBmdW5jdGlvbigkMCwgJDEpIHtcbiAgICBsaXRlcmFscy5wdXNoKCQxKTtcbiAgICByZXR1cm4gJ0BAQCc7XG4gIH0pO1xuICAvLyBBcHBseSBmb3JtYXR0aW5nIHJ1bGVzXG4gIG1hc2sgPSBtYXNrLnJlcGxhY2UodG9rZW4sIGZ1bmN0aW9uICgkMCkge1xuICAgIHJldHVybiAkMCBpbiBmb3JtYXRGbGFncyA/IGZvcm1hdEZsYWdzWyQwXShkYXRlT2JqLCBpMThuKSA6ICQwLnNsaWNlKDEsICQwLmxlbmd0aCAtIDEpO1xuICB9KTtcbiAgLy8gSW5saW5lIGxpdGVyYWwgdmFsdWVzIGJhY2sgaW50byB0aGUgZm9ybWF0dGVkIHZhbHVlXG4gIHJldHVybiBtYXNrLnJlcGxhY2UoL0BAQC9nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGl0ZXJhbHMuc2hpZnQoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgZGF0ZSBzdHJpbmcgaW50byBhbiBvYmplY3QsIGNoYW5nZXMgLSBpbnRvIC9cbiAqIEBtZXRob2QgcGFyc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyIERhdGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IERhdGUgcGFyc2UgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZXxib29sZWFufVxuICovXG5mZWNoYS5wYXJzZSA9IGZ1bmN0aW9uIChkYXRlU3RyLCBmb3JtYXQsIGkxOG5TZXR0aW5ncykge1xuICB2YXIgaTE4biA9IGkxOG5TZXR0aW5ncyB8fCBmZWNoYS5pMThuO1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmb3JtYXQgaW4gZmVjaGEucGFyc2UnKTtcbiAgfVxuXG4gIGZvcm1hdCA9IGZlY2hhLm1hc2tzW2Zvcm1hdF0gfHwgZm9ybWF0O1xuXG4gIC8vIEF2b2lkIHJlZ3VsYXIgZXhwcmVzc2lvbiBkZW5pYWwgb2Ygc2VydmljZSwgZmFpbCBlYXJseSBmb3IgcmVhbGx5IGxvbmcgc3RyaW5nc1xuICAvLyBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL1JlZ3VsYXJfZXhwcmVzc2lvbl9EZW5pYWxfb2ZfU2VydmljZV8tX1JlRG9TXG4gIGlmIChkYXRlU3RyLmxlbmd0aCA+IDEwMDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBkYXRlSW5mbyA9IHt9O1xuICB2YXIgcGFyc2VJbmZvID0gW107XG4gIHZhciBsaXRlcmFscyA9IFtdO1xuICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsaXRlcmFsLCBmdW5jdGlvbigkMCwgJDEpIHtcbiAgICBsaXRlcmFscy5wdXNoKCQxKTtcbiAgICByZXR1cm4gJ0BAQCc7XG4gIH0pO1xuICB2YXIgbmV3Rm9ybWF0ID0gcmVnZXhFc2NhcGUoZm9ybWF0KS5yZXBsYWNlKHRva2VuLCBmdW5jdGlvbiAoJDApIHtcbiAgICBpZiAocGFyc2VGbGFnc1skMF0pIHtcbiAgICAgIHZhciBpbmZvID0gcGFyc2VGbGFnc1skMF07XG4gICAgICBwYXJzZUluZm8ucHVzaChpbmZvWzFdKTtcbiAgICAgIHJldHVybiAnKCcgKyBpbmZvWzBdICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiAkMDtcbiAgfSk7XG4gIG5ld0Zvcm1hdCA9IG5ld0Zvcm1hdC5yZXBsYWNlKC9AQEAvZywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxzLnNoaWZ0KCk7XG4gIH0pO1xuICB2YXIgbWF0Y2hlcyA9IGRhdGVTdHIubWF0Y2gobmV3IFJlZ0V4cChuZXdGb3JtYXQsICdpJykpO1xuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHBhcnNlSW5mb1tpIC0gMV0oZGF0ZUluZm8sIG1hdGNoZXNbaV0sIGkxOG4pO1xuICB9XG5cbiAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgaWYgKGRhdGVJbmZvLmlzUG0gPT09IHRydWUgJiYgZGF0ZUluZm8uaG91ciAhPSBudWxsICYmICtkYXRlSW5mby5ob3VyICE9PSAxMikge1xuICAgIGRhdGVJbmZvLmhvdXIgPSArZGF0ZUluZm8uaG91ciArIDEyO1xuICB9IGVsc2UgaWYgKGRhdGVJbmZvLmlzUG0gPT09IGZhbHNlICYmICtkYXRlSW5mby5ob3VyID09PSAxMikge1xuICAgIGRhdGVJbmZvLmhvdXIgPSAwO1xuICB9XG5cbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlSW5mby50aW1lem9uZU9mZnNldCAhPSBudWxsKSB7XG4gICAgZGF0ZUluZm8ubWludXRlID0gKyhkYXRlSW5mby5taW51dGUgfHwgMCkgLSArZGF0ZUluZm8udGltZXpvbmVPZmZzZXQ7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGVJbmZvLnllYXIgfHwgdG9kYXkuZ2V0RnVsbFllYXIoKSwgZGF0ZUluZm8ubW9udGggfHwgMCwgZGF0ZUluZm8uZGF5IHx8IDEsXG4gICAgICBkYXRlSW5mby5ob3VyIHx8IDAsIGRhdGVJbmZvLm1pbnV0ZSB8fCAwLCBkYXRlSW5mby5zZWNvbmQgfHwgMCwgZGF0ZUluZm8ubWlsbGlzZWNvbmQgfHwgMCkpO1xuICB9IGVsc2Uge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlSW5mby55ZWFyIHx8IHRvZGF5LmdldEZ1bGxZZWFyKCksIGRhdGVJbmZvLm1vbnRoIHx8IDAsIGRhdGVJbmZvLmRheSB8fCAxLFxuICAgICAgZGF0ZUluZm8uaG91ciB8fCAwLCBkYXRlSW5mby5taW51dGUgfHwgMCwgZGF0ZUluZm8uc2Vjb25kIHx8IDAsIGRhdGVJbmZvLm1pbGxpc2Vjb25kIHx8IDApO1xuICB9XG4gIHJldHVybiBkYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmVjaGE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpWkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDMWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUpBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEZBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==