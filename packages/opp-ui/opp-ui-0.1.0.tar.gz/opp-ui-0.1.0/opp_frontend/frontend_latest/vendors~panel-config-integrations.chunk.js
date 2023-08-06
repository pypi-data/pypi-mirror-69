(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-integrations"],{

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

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcbkEgc2V0IG9mIGxheW91dCBjbGFzc2VzIHRoYXQgbGV0IHlvdSBzcGVjaWZ5IGxheW91dCBwcm9wZXJ0aWVzIGRpcmVjdGx5IGluXG5tYXJrdXAuIFlvdSBtdXN0IGluY2x1ZGUgdGhpcyBmaWxlIGluIGV2ZXJ5IGVsZW1lbnQgdGhhdCBuZWVkcyB0byB1c2UgdGhlbS5cblxuU2FtcGxlIHVzZTpcblxuICAgIGltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXMuanMnO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnRlc3QgeyB3aWR0aDogMTAwcHg7IH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdFwiPmhvcml6b250YWwgbGF5b3V0IGNlbnRlciBhbGlnbm1lbnQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcblxuVGhlIGZvbGxvd2luZyBpbXBvcnRzIGFyZSBhdmFpbGFibGU6XG4gLSBpcm9uLWZsZXhcbiAtIGlyb24tZmxleC1yZXZlcnNlXG4gLSBpcm9uLWZsZXgtYWxpZ25tZW50XG4gLSBpcm9uLWZsZXgtZmFjdG9yc1xuIC0gaXJvbi1wb3NpdGlvbmluZ1xuKi9cblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuLyogTW9zdCBjb21tb24gdXNlZCBmbGV4IHN0eWxlcyovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLFxuICAgICAgLmxheW91dC52ZXJ0aWNhbCB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5ob3Jpem9udGFsIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cblxuICAgICAgLmxheW91dC52ZXJ0aWNhbCB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQud3JhcCB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQubm8td3JhcCB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1qdXN0aWZpZWQsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZmxleCB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LWF1dG8ge1xuICAgICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICAgIC13ZWJraXQtZmxleDogMSAxIGF1dG87XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuZmxleC1ub25lIHtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogQmFzaWMgZmxleGJveCByZXZlcnNlIHN0eWxlcyAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtcmV2ZXJzZVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLXJldmVyc2UsXG4gICAgICAubGF5b3V0LnZlcnRpY2FsLXJldmVyc2Uge1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQudmVydGljYWwtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQud3JhcC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogRmxleGJveCBhbGlnbm1lbnQgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LWFsaWdubWVudFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbm1lbnQgaW4gY3Jvc3MgYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydCB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZCB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYmFzZWxpbmUge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWxpZ25tZW50IGluIG1haW4gYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItanVzdGlmaWVkLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYXJvdW5kLWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VsZiBhbGlnbm1lbnQuXG4gICAgICAgKi9cbiAgICAgIC5zZWxmLXN0YXJ0IHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtY2VudGVyIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtZW5kIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtc3RyZXRjaCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWJhc2VsaW5lIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBtdWx0aS1saW5lIGFsaWdubWVudCBpbiBtYWluIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RhcnQ7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGVuZDsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmJldHdlZW4tYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazoganVzdGlmeTsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5hcm91bmQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZGlzdHJpYnV0ZTsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuLyogTm9uLWZsZXhib3ggcG9zaXRpb25pbmcgaGVscGVyIHN0eWxlcyAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtZmFjdG9yc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmZsZXgsXG4gICAgICAuZmxleC0xIHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMiB7XG4gICAgICAgIC1tcy1mbGV4OiAyO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDI7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTMge1xuICAgICAgICAtbXMtZmxleDogMztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAzO1xuICAgICAgICBmbGV4OiAzO1xuICAgICAgfVxuXG4gICAgICAuZmxleC00IHtcbiAgICAgICAgLW1zLWZsZXg6IDQ7XG4gICAgICAgIC13ZWJraXQtZmxleDogNDtcbiAgICAgICAgZmxleDogNDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNSB7XG4gICAgICAgIC1tcy1mbGV4OiA1O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDU7XG4gICAgICAgIGZsZXg6IDU7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTYge1xuICAgICAgICAtbXMtZmxleDogNjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA2O1xuICAgICAgICBmbGV4OiA2O1xuICAgICAgfVxuXG4gICAgICAuZmxleC03IHtcbiAgICAgICAgLW1zLWZsZXg6IDc7XG4gICAgICAgIC13ZWJraXQtZmxleDogNztcbiAgICAgICAgZmxleDogNztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtOCB7XG4gICAgICAgIC1tcy1mbGV4OiA4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDg7XG4gICAgICAgIGZsZXg6IDg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTkge1xuICAgICAgICAtbXMtZmxleDogOTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA5O1xuICAgICAgICBmbGV4OiA5O1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMCB7XG4gICAgICAgIC1tcy1mbGV4OiAxMDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMDtcbiAgICAgICAgZmxleDogMTA7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTExIHtcbiAgICAgICAgLW1zLWZsZXg6IDExO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDExO1xuICAgICAgICBmbGV4OiAxMTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTIge1xuICAgICAgICAtbXMtZmxleDogMTI7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTI7XG4gICAgICAgIGZsZXg6IDEyO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG48ZG9tLW1vZHVsZSBpZD1cImlyb24tcG9zaXRpb25pbmdcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmludmlzaWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAucmVsYXRpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgYm9keS5mdWxsYmxlZWQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAvKiBmaXhlZCBwb3NpdGlvbiAqL1xuICAgICAgLmZpeGVkLWJvdHRvbSxcbiAgICAgIC5maXhlZC1sZWZ0LFxuICAgICAgLmZpeGVkLXJpZ2h0LFxuICAgICAgLmZpeGVkLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLXRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1yaWdodCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLWJvdHRvbSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1sZWZ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY29udGFpbmVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1lcnJvci5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7RG9tTW9kdWxlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge1BhcGVySW5wdXRCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbnB1dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dFxuZmllbGRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGV4dC1maWVsZHMuaHRtbClcblxuYDxwYXBlci1pbnB1dD5gIGlzIGEgc2luZ2xlLWxpbmUgdGV4dCBmaWVsZCB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBtYXkgaW5jbHVkZSBhbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlciBjb3VudGVyLlxuXG4gICAgPHBhcGVyLWlucHV0IGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGlucHV0IVwiIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+IDxwYXBlci1pbnB1dCBjaGFyLWNvdW50ZXIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIHJldmVhbCBidXR0b24gKHRoZSBleWViYWxsKSB8IHt9XG5cbkBlbGVtZW50IHBhcGVyLWlucHV0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pbnB1dCcsXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoZSA8aW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzIGl0LlxuICAgICAgSW4gMi54IHRoZSA8aXJvbi1pbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXNcbiAgICAgIGl0LCBidXQgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29yayBjb3JyZWN0bHksIHdlIG5lZWQgdG8gcmVzZXQgc29tZVxuICAgICAgb2YgdGhlIG5hdGl2ZSBpbnB1dCdzIHByb3BlcnRpZXMgdG8gaW5oZXJpdCAoZnJvbSB0aGUgaXJvbi1pbnB1dCkgKi9cbiAgICAgIGlyb24taW5wdXQgPiBpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLXJldmVhbDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIiBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvciQ9XCJbW19pbnB1dElkXV1cIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIiBzbG90PVwiaW5wdXRcIiBjbGFzcz1cImlucHV0LWVsZW1lbnRcIiBpZCQ9XCJbW19pbnB1dElkXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCIgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIHRpdGxlJD1cIltbdGl0bGVdXVwiIHR5cGUkPVwiW1t0eXBlXV1cIiBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCIgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCIgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCIgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIG1pbiQ9XCJbW21pbl1dXCIgbWF4JD1cIltbbWF4XV1cIiBzdGVwJD1cIltbc3RlcF1dXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiIGxpc3QkPVwiW1tsaXN0XV1cIiBzaXplJD1cIltbc2l6ZV1dXCIgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCIgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCIgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCIgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCIgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCIgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCIgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCIgcm9sZSQ9XCJbW2lucHV0Um9sZV1dXCIgYXJpYS1oYXNwb3B1cCQ9XCJbW2lucHV0QXJpYUhhc3BvcHVwXV1cIj5cbiAgICAgIDwvaXJvbi1pbnB1dD5cblxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG4gIGAsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJJbnB1dEJlaGF2aW9yLCBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIHZhbHVlOiB7XG4gICAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIGNvcnJlY3QgVHlwZVNjcmlwdCB0eXBlLWdlbmVyYXRpb25cbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG5cbiAgICBpbnB1dFJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcblxuICAgIGlucHV0QXJpYUhhc3BvcHVwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb21cbiAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICBsaXN0ZW5lcnM6IHsnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSd9LFxuXG4gIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIG9ubHkgdXNlZCBpbiB0aGUgbmV4dCBsaW5lLCBzYXZlIHRoaXMgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNpbmNlIHRoZSBuYXRpdmUgaW5wdXQgaGFkIHRoaXMgSUQgdW50aWwgMi4wLjUuXG4gICAgaWYgKCF0aGlzLiQubmF0aXZlSW5wdXQpIHtcbiAgICAgIHRoaXMuJC5uYXRpdmVJbnB1dCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovICh0aGlzLiQkKCdpbnB1dCcpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy4kLm5hdGl2ZUlucHV0LnR5cGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgaWYgKCEhdGhpcy5pbnB1dEVsZW1lbnQuYmluZFZhbHVlKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLmlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9LFxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bTWVudXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9tZW51cy5odG1sKVxuXG5gPHBhcGVyLWxpc3Rib3g+YCBpbXBsZW1lbnRzIGFuIGFjY2Vzc2libGUgbGlzdGJveCBjb250cm9sIHdpdGggTWF0ZXJpYWwgRGVzaWduXG5zdHlsaW5nLiBUaGUgZm9jdXNlZCBpdGVtIGlzIGhpZ2hsaWdodGVkLCBhbmQgdGhlIHNlbGVjdGVkIGl0ZW0gaGFzIGJvbGRlZCB0ZXh0LlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5BbiBpbml0aWFsIHNlbGVjdGlvbiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggdGhlIGBzZWxlY3RlZGAgYXR0cmlidXRlLlxuXG4gICAgPHBhcGVyLWxpc3Rib3ggc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG5NYWtlIGEgbXVsdGktc2VsZWN0IGxpc3Rib3ggd2l0aCB0aGUgYG11bHRpYCBhdHRyaWJ1dGUuIEl0ZW1zIGluIGEgbXVsdGktc2VsZWN0XG5saXN0Ym94IGNhbiBiZSBkZXNlbGVjdGVkLCBhbmQgbXVsdGlwbGUgaXRlbSBjYW4gYmUgc2VsZWN0ZWQuXG5cbiAgICA8cGFwZXItbGlzdGJveCBtdWx0aT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1saXN0Ym94LWJhY2tncm91bmQtY29sb3JgICAgfCBNZW51IGJhY2tncm91bmQgY29sb3IgfFxuYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItbGlzdGJveC1jb2xvcmAgICAgICAgICAgICAgIHwgTWVudSBmb3JlZ3JvdW5kIGNvbG9yIHxcbmAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWxpc3Rib3hgICAgICAgICAgICAgICAgICAgICB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxpc3Rib3ggfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmA8cGFwZXItbGlzdGJveD5gIGhhcyBgcm9sZT1cImxpc3Rib3hcImAgYnkgZGVmYXVsdC4gQSBtdWx0aS1zZWxlY3QgbGlzdGJveCB3aWxsXG5hbHNvIGhhdmUgYGFyaWEtbXVsdGlzZWxlY3RhYmxlYCBzZXQuIEl0IGltcGxlbWVudHMga2V5IGJpbmRpbmdzIHRvIG5hdmlnYXRlXG50aHJvdWdoIHRoZSBsaXN0Ym94IHdpdGggdGhlIHVwIGFuZCBkb3duIGFycm93IGtleXMsIGVzYyB0byBleGl0IHRoZSBsaXN0Ym94LFxuYW5kIGVudGVyIHRvIGFjdGl2YXRlIGEgbGlzdGJveCBpdGVtLiBUeXBpbmcgdGhlIGZpcnN0IGxldHRlciBvZiBhIGxpc3Rib3ggaXRlbVxud2lsbCBhbHNvIGZvY3VzIGl0LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWxpc3Rib3hcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWxpc3Rib3gtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWxpc3Rib3g7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1saXN0Ym94JyxcbiAgYmVoYXZpb3JzOiBbSXJvbk1lbnVCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2xpc3Rib3gnfVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpWkE7QUFDQTs7Ozs7Ozs7Ozs7O0FDMWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUpBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE0QkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFyQkE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9