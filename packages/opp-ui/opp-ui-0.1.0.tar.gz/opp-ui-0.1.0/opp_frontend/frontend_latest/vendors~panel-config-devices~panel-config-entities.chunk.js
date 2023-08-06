(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-devices~panel-config-entities"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctZW50aXRpZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0LmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNvbnRhaW5lci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtZXJyb3IuanMnO1xuXG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0RvbU1vZHVsZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLW1vZHVsZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHtQYXBlcklucHV0QmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1RleHRcbmZpZWxkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3RleHQtZmllbGRzLmh0bWwpXG5cbmA8cGFwZXItaW5wdXQ+YCBpcyBhIHNpbmdsZS1saW5lIHRleHQgZmllbGQgd2l0aCBNYXRlcmlhbCBEZXNpZ24gc3R5bGluZy5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIklucHV0IGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgbWF5IGluY2x1ZGUgYW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBvciBjaGFyYWN0ZXIgY291bnRlci5cblxuICAgIDxwYXBlci1pbnB1dCBlcnJvci1tZXNzYWdlPVwiSW52YWxpZCBpbnB1dCFcIiBsYWJlbD1cIklucHV0XG4gICAgbGFiZWxcIj48L3BhcGVyLWlucHV0PiA8cGFwZXItaW5wdXQgY2hhci1jb3VudGVyIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IGNhbiBhbHNvIGluY2x1ZGUgY3VzdG9tIHByZWZpeCBvciBzdWZmaXggZWxlbWVudHMsIHdoaWNoIGFyZSBkaXNwbGF5ZWRcbmJlZm9yZSBvciBhZnRlciB0aGUgdGV4dCBpbnB1dCBpdHNlbGYuIEluIG9yZGVyIGZvciBhbiBlbGVtZW50IHRvIGJlXG5jb25zaWRlcmVkIGFzIGEgcHJlZml4LCBpdCBtdXN0IGhhdmUgdGhlIGBwcmVmaXhgIGF0dHJpYnV0ZSAoYW5kIHNpbWlsYXJseVxuZm9yIGBzdWZmaXhgKS5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInRvdGFsXCI+XG4gICAgICA8ZGl2IHByZWZpeD4kPC9kaXY+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGljb249XCJjbGVhclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuQSBgcGFwZXItaW5wdXRgIGNhbiB1c2UgdGhlIG5hdGl2ZSBgdHlwZT1zZWFyY2hgIG9yIGB0eXBlPWZpbGVgIGZlYXR1cmVzLlxuSG93ZXZlciwgc2luY2Ugd2UgY2FuJ3QgY29udHJvbCB0aGUgbmF0aXZlIHN0eWxpbmcgb2YgdGhlIGlucHV0IChzZWFyY2ggaWNvbixcbmZpbGUgYnV0dG9uLCBkYXRlIHBsYWNlaG9sZGVyLCBldGMuKSwgaW4gdGhlc2UgY2FzZXMgdGhlIGxhYmVsIHdpbGwgYmVcbmF1dG9tYXRpY2FsbHkgZmxvYXRlZC4gVGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIGNhbiBzdGlsbCBiZSB1c2VkIGZvclxuYWRkaXRpb25hbCBpbmZvcm1hdGlvbmFsIHRleHQuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJzZWFyY2ghXCIgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBjYXRzXCIgYXV0b3NhdmU9XCJ0ZXN0XCIgcmVzdWx0cz1cIjVcIj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dEJlaGF2aW9yYCBmb3IgbW9yZSBBUEkgZG9jcy5cblxuIyMjIEZvY3VzXG5cblRvIGZvY3VzIGEgcGFwZXItaW5wdXQsIHlvdSBjYW4gY2FsbCB0aGUgbmF0aXZlIGBmb2N1cygpYCBtZXRob2QgYXMgbG9uZyBhcyB0aGVcbnBhcGVyIGlucHV0IGhhcyBhIHRhYiBpbmRleC4gU2ltaWxhcmx5LCBgYmx1cigpYCB3aWxsIGJsdXIgdGhlIGVsZW1lbnQuXG5cbiMjIyBTdHlsaW5nXG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0Q29udGFpbmVyYCBmb3IgYSBsaXN0IG9mIGN1c3RvbSBwcm9wZXJ0aWVzIHVzZWQgdG9cbnN0eWxlIHRoaXMgZWxlbWVudC5cblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBJbnRlcm5ldCBFeHBsb3JlciByZXZlYWwgYnV0dG9uICh0aGUgZXllYmFsbCkgfCB7fVxuXG5AZWxlbWVudCBwYXBlci1pbnB1dFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIGlzOiAncGFwZXItaW5wdXQnLFxuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLyogSW4gMS54LCB0aGUgPGlucHV0PiBpcyBkaXN0cmlidXRlZCB0byBwYXBlci1pbnB1dC1jb250YWluZXIsIHdoaWNoIHN0eWxlcyBpdC5cbiAgICAgIEluIDIueCB0aGUgPGlyb24taW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzXG4gICAgICBpdCwgYnV0IGluIG9yZGVyIGZvciB0aGlzIHRvIHdvcmsgY29ycmVjdGx5LCB3ZSBuZWVkIHRvIHJlc2V0IHNvbWVcbiAgICAgIG9mIHRoZSBuYXRpdmUgaW5wdXQncyBwcm9wZXJ0aWVzIHRvIGluaGVyaXQgKGZyb20gdGhlIGlyb24taW5wdXQpICovXG4gICAgICBpcm9uLWlucHV0ID4gaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICAgIHdvcmQtc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBpbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1zLWNsZWFyIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1zLXJldmVhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1yZXZlYWw7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXIgaWQ9XCJjb250YWluZXJcIiBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIiBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW19jb21wdXRlQWx3YXlzRmxvYXRMYWJlbChhbHdheXNGbG9hdExhYmVsLHBsYWNlaG9sZGVyKV1dXCIgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbIWxhYmVsXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb3IkPVwiW1tfaW5wdXRJZF1dXCIgc2xvdD1cImxhYmVsXCI+W1tsYWJlbF1dPC9sYWJlbD5cblxuICAgICAgPCEtLSBOZWVkIHRvIGJpbmQgbWF4bGVuZ3RoIHNvIHRoYXQgdGhlIHBhcGVyLWlucHV0LWNoYXItY291bnRlciB3b3JrcyBjb3JyZWN0bHkgLS0+XG4gICAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3t2YWx1ZX19XCIgc2xvdD1cImlucHV0XCIgY2xhc3M9XCJpbnB1dC1lbGVtZW50XCIgaWQkPVwiW1tfaW5wdXRJZF1dXCIgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIiBhbGxvd2VkLXBhdHRlcm49XCJbW2FsbG93ZWRQYXR0ZXJuXV1cIiBpbnZhbGlkPVwie3tpbnZhbGlkfX1cIiB2YWxpZGF0b3I9XCJbW3ZhbGlkYXRvcl1dXCI+XG4gICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsbGVkYnkkPVwiW1tfYXJpYUxhYmVsbGVkQnldXVwiIGFyaWEtZGVzY3JpYmVkYnkkPVwiW1tfYXJpYURlc2NyaWJlZEJ5XV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiB0aXRsZSQ9XCJbW3RpdGxlXV1cIiB0eXBlJD1cIltbdHlwZV1dXCIgcGF0dGVybiQ9XCJbW3BhdHRlcm5dXVwiIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiIGF1dG9jb21wbGV0ZSQ9XCJbW2F1dG9jb21wbGV0ZV1dXCIgYXV0b2ZvY3VzJD1cIltbYXV0b2ZvY3VzXV1cIiBpbnB1dG1vZGUkPVwiW1tpbnB1dG1vZGVdXVwiIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCIgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIiBtaW4kPVwiW1ttaW5dXVwiIG1heCQ9XCJbW21heF1dXCIgc3RlcCQ9XCJbW3N0ZXBdXVwiIG5hbWUkPVwiW1tuYW1lXV1cIiBwbGFjZWhvbGRlciQ9XCJbW3BsYWNlaG9sZGVyXV1cIiByZWFkb25seSQ9XCJbW3JlYWRvbmx5XV1cIiBsaXN0JD1cIltbbGlzdF1dXCIgc2l6ZSQ9XCJbW3NpemVdXVwiIGF1dG9jYXBpdGFsaXplJD1cIltbYXV0b2NhcGl0YWxpemVdXVwiIGF1dG9jb3JyZWN0JD1cIltbYXV0b2NvcnJlY3RdXVwiIG9uLWNoYW5nZT1cIl9vbkNoYW5nZVwiIHRhYmluZGV4JD1cIltbdGFiSW5kZXhdXVwiIGF1dG9zYXZlJD1cIltbYXV0b3NhdmVdXVwiIHJlc3VsdHMkPVwiW1tyZXN1bHRzXV1cIiBhY2NlcHQkPVwiW1thY2NlcHRdXVwiIG11bHRpcGxlJD1cIltbbXVsdGlwbGVdXVwiIHJvbGUkPVwiW1tpbnB1dFJvbGVdXVwiIGFyaWEtaGFzcG9wdXAkPVwiW1tpbnB1dEFyaWFIYXNwb3B1cF1dXCI+XG4gICAgICA8L2lyb24taW5wdXQ+XG5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JNZXNzYWdlXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWVycm9yIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIHNsb3Q9XCJhZGQtb25cIj5bW2Vycm9yTWVzc2FnZV1dPC9wYXBlci1pbnB1dC1lcnJvcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjaGFyQ291bnRlcl1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgc2xvdD1cImFkZC1vblwiPjwvcGFwZXItaW5wdXQtY2hhci1jb3VudGVyPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgIDwvcGFwZXItaW5wdXQtY29udGFpbmVyPlxuICBgLFxuXG4gIGJlaGF2aW9yczogW1BhcGVySW5wdXRCZWhhdmlvciwgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBjb3JyZWN0IFR5cGVTY3JpcHQgdHlwZS1nZW5lcmF0aW9uXG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuXG4gICAgaW5wdXRSb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIH0sXG5cbiAgICBpbnB1dEFyaWFIYXNwb3B1cDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBmb2N1c2FibGUgZWxlbWVudC4gT3ZlcnJpZGRlbiBmcm9tXG4gICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBjb3JyZWN0bHkgZm9jdXMgdGhlIG5hdGl2ZSBpbnB1dC5cbiAgICpcbiAgICogQHJldHVybiB7IUhUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5faW5wdXRFbGVtZW50O1xuICB9LFxuXG4gIC8vIE5vdGU6IFRoaXMgZXZlbnQgaXMgb25seSBhdmFpbGFibGUgaW4gdGhlIDEuMCB2ZXJzaW9uIG9mIHRoaXMgZWxlbWVudC5cbiAgLy8gSW4gMi4wLCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBgX29uSXJvbklucHV0UmVhZHlgIGlzIGRvbmUgaW5cbiAgLy8gUGFwZXJJbnB1dEJlaGF2aW9yOjphdHRhY2hlZC5cbiAgbGlzdGVuZXJzOiB7J2lyb24taW5wdXQtcmVhZHknOiAnX29uSXJvbklucHV0UmVhZHknfSxcblxuICBfb25Jcm9uSW5wdXRSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gRXZlbiB0aG91Z2ggdGhpcyBpcyBvbmx5IHVzZWQgaW4gdGhlIG5leHQgbGluZSwgc2F2ZSB0aGlzIGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBzaW5jZSB0aGUgbmF0aXZlIGlucHV0IGhhZCB0aGlzIElEIHVudGlsIDIuMC41LlxuICAgIGlmICghdGhpcy4kLm5hdGl2ZUlucHV0KSB7XG4gICAgICB0aGlzLiQubmF0aXZlSW5wdXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAodGhpcy4kJCgnaW5wdXQnKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCAmJlxuICAgICAgICB0aGlzLl90eXBlc1RoYXRIYXZlVGV4dC5pbmRleE9mKHRoaXMuJC5uYXRpdmVJbnB1dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWx3YXlzRmxvYXRMYWJlbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gT25seSB2YWxpZGF0ZSB3aGVuIGF0dGFjaGVkIGlmIHRoZSBpbnB1dCBhbHJlYWR5IGhhcyBhIHZhbHVlLlxuICAgIGlmICghIXRoaXMuaW5wdXRFbGVtZW50LmJpbmRWYWx1ZSkge1xuICAgICAgdGhpcy4kLmNvbnRhaW5lci5faGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGUodGhpcy5pbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhBO0FBNkdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQUNBO0FBZ0JBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlKQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBNEJBO0FBQ0E7QUE3QkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==