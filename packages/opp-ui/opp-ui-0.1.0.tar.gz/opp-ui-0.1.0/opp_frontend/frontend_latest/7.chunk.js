(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
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
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */

const IronCheckedElementBehaviorImpl = {
  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: true,
      reflectToAttribute: true
    },

    /* Overriden from IronFormElementBehavior */
    value: {
      type: String,
      value: 'on',
      observer: '_valueChanged'
    }
  },
  observers: ['_requiredChanged(required)'],
  created: function () {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function () {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function () {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function () {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};
/** @polymerBehavior */

const IronCheckedElementBehavior = [_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"], IronCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
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
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */

const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function () {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);

    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function () {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);

    if (this.disabled) {
      return;
    }

    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};
/** @polymerBehavior */

const PaperCheckedElementBehavior = [_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"], _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"], PaperCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-checkbox/paper-checkbox.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design:
[Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)

`paper-checkbox` is a button that can be either checked or unchecked. User can
tap the checkbox to check or uncheck it. Usually you use checkboxes to allow
user to select multiple options from a set. If you have a single ON/OFF option,
avoid using a single checkbox and use `paper-toggle-button` instead.

Example:

    <paper-checkbox>label</paper-checkbox>

    <paper-checkbox checked> label</paper-checkbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--primary-color`
`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-checkbox-checkmark-color` | Checkmark color | `white`
`--paper-checkbox-label-color` | Label color | `--primary-text-color`
`--paper-checkbox-label-checked-color` | Label color when the input is checked | `--paper-checkbox-label-color`
`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
`--paper-checkbox-label` | Mixin applied to the label | `{}`
`--paper-checkbox-label-checked` | Mixin applied to the label when the input is checked | `{}`
`--paper-checkbox-error-color` | Checkbox color when invalid | `--error-color`
`--paper-checkbox-size` | Size of the checkbox | `18px`
`--paper-checkbox-ink-size` | Size of the ripple | `48px`
`--paper-checkbox-margin` | Margin around the checkbox container | `initial`
`--paper-checkbox-vertical-align` | Vertical alignment of the checkbox container | `middle`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-checkbox',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperCheckedElementBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'checkbox',
    'aria-checked': false,
    tabindex: 0
  },
  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-checked'
    }
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-checkbox-ink-size').trim(); // If unset, compute and set the default `--paper-checkbox-ink-size`.

      if (inkSize === '-1px') {
        var checkboxSizeText = this.getComputedStyleValue('--calculated-paper-checkbox-size').trim();
        var units = 'px';
        var unitsMatches = checkboxSizeText.match(/[A-Za-z]+$/);

        if (unitsMatches !== null) {
          units = unitsMatches[0];
        }

        var checkboxSize = parseFloat(checkboxSizeText);
        var defaultInkSize = 8 / 3 * checkboxSize;

        if (units === 'px') {
          defaultInkSize = Math.floor(defaultInkSize); // The checkbox and ripple need to have the same parity so that their
          // centers align.

          if (defaultInkSize % 2 !== checkboxSize % 2) {
            defaultInkSize++;
          }
        }

        this.updateStyles({
          '--paper-checkbox-ink-size': defaultInkSize + units
        });
      }
    });
  },
  _computeCheckboxClass: function (checked, invalid) {
    var className = '';

    if (checked) {
      className += 'checked ';
    }

    if (invalid) {
      className += 'invalid';
    }

    return className;
  },
  _computeCheckmarkClass: function (checked) {
    return checked ? '' : 'hidden';
  },
  // create ripple inside the checkboxContainer
  _createRipple: function () {
    this._rippleContainer = this.$.checkboxContainer;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25WYWxpZGF0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIHRvIGltcGxlbWVudCBhIGN1c3RvbSBlbGVtZW50IHRoYXQgaGFzIGFcbiAqIGBjaGVja2VkYCBwcm9wZXJ0eSwgd2hpY2ggY2FuIGJlIHVzZWQgZm9yIHZhbGlkYXRpb24gaWYgdGhlIGVsZW1lbnQgaXMgYWxzb1xuICogYHJlcXVpcmVkYC4gRWxlbWVudCBpbnN0YW5jZXMgaW1wbGVtZW50aW5nIHRoaXMgYmVoYXZpb3Igd2lsbCBhbHNvIGJlXG4gKiByZWdpc3RlcmVkIGZvciB1c2UgaW4gYW4gYGlyb24tZm9ybWAgZWxlbWVudC5cbiAqXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQGV2ZW50IGlyb24tY2hhbmdlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHN0YXRlLCBgdHJ1ZWAgaXMgY2hlY2tlZCBhbmQgYGZhbHNlYCBpcyB1bmNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2NoZWNrZWRDaGFuZ2VkJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGVhY2ggdGFwIG9yIHByZXNzXG4gICAgICogb2YgdGhlIHNwYWNlYmFyLlxuICAgICAqL1xuICAgIHRvZ2dsZXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qIE92ZXJyaWRlbiBmcm9tIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yICovXG4gICAgdmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nLCBvYnNlcnZlcjogJ192YWx1ZUNoYW5nZWQnfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfcmVxdWlyZWRDaGFuZ2VkKHJlcXVpcmVkKSddLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZWQgYnkgYGlyb24tZm9ybWAgdG8gaGFuZGxlIHRoZSBjYXNlIHRoYXQgYW4gZWxlbWVudCB3aXRoIHRoaXMgYmVoYXZpb3JcbiAgICAvLyBkb2Vzbid0IGhhdmUgYSByb2xlIG9mICdjaGVja2JveCcgb3IgJ3JhZGlvJywgYnV0IHNob3VsZCBzdGlsbCBvbmx5IGJlXG4gICAgLy8gaW5jbHVkZWQgd2hlbiB0aGUgZm9ybSBpcyBzZXJpYWxpemVkIGlmIGB0aGlzLmNoZWNrZWQgPT09IHRydWVgLlxuICAgIHRoaXMuX2hhc0lyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBhbmQgbm90IGNoZWNrZWQsIGFuZCB0cnVlXG4gICAqIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHsqPX0gX3ZhbHVlIElnbm9yZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYHJlcXVpcmVkYCBpcyBmYWxzZSBvciBpZiBgY2hlY2tlZGAgaXMgdHJ1ZS5cbiAgICovXG4gIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24oX3ZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVxdWlyZWQgfHwgdGhpcy5jaGVja2VkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGFyaWEtcmVxdWlyZWQgbGFiZWwgd2hlbiBgcmVxdWlyZWRgIGlzIGNoYW5nZWQuXG4gICAqL1xuICBfcmVxdWlyZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRmlyZSBgaXJvbi1jaGFuZ2VkYCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAqL1xuICBfY2hlY2tlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jaGVja2VkO1xuICAgIHRoaXMuZmlyZSgnaXJvbi1jaGFuZ2UnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXQgdmFsdWUgdG8gJ29uJyBpZiBpdCBpcyBzZXQgdG8gYHVuZGVmaW5lZGAuXG4gICAqL1xuICBfdmFsdWVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnb24nO1xuICAgIH1cbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IsXG4gIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yLFxuICBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBVc2UgYFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5IHNpbWlsYXIgdG8gYElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yYCBhbmQgaXMgY29tcGF0aWJsZVxuICogd2l0aCBoYXZpbmcgYSByaXBwbGUgZWZmZWN0LlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwgPSB7XG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBjaGVja2VkIHN0YXRlIHdpdGggaXRzIHJpcHBsZSBlZmZlY3QuXG4gICAqL1xuICBfY2hlY2tlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbC5fY2hlY2tlZENoYW5nZWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHRoZSBlbGVtZW50J3MgYGFjdGl2ZWAgYW5kIGBjaGVja2VkYCBzdGF0ZS5cbiAgICovXG4gIF9idXR0b25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIFBhcGVyUmlwcGxlQmVoYXZpb3IuX2J1dHRvblN0YXRlQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSBbXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yLFxuICBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWlua3ktZm9jdXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7YWZ0ZXJOZXh0UmVuZGVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9yZW5kZXItc3RhdHVzLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYDxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZTogdmFyKC0tcGFwZXItY2hlY2tib3gtc2l6ZSwgMThweCk7XG4gICAgLyogLTFweCBpcyBhIHNlbnRpbmVsIGZvciB0aGUgZGVmYXVsdCBhbmQgaXMgcmVwbGFjZWQgaW4gXFxgYXR0YWNoZWRcXGAuICovXG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplOiB2YXIoLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZSwgLTFweCk7XG4gICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6aG9zdCg6Zm9jdXMpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNjaGVja2JveENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSk7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpO1xuICAgIG1hcmdpbjogdmFyKC0tcGFwZXItY2hlY2tib3gtbWFyZ2luLCBpbml0aWFsKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdmFyKC0tcGFwZXItY2hlY2tib3gtdmVydGljYWwtYWxpZ24sIG1pZGRsZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gICNpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIC8qIENlbnRlciB0aGUgcmlwcGxlIGluIHRoZSBjaGVja2JveCBieSBuZWdhdGl2ZSBvZmZzZXR0aW5nIGl0IGJ5XG4gICAgICogKGlua1dpZHRoIC0gcmlwcGxlV2lkdGgpIC8gMiAqL1xuICAgIHRvcDogY2FsYygwcHggLSAodmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSkgLSB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKSAvIDIpO1xuICAgIGxlZnQ6IGNhbGMoMHB4IC0gKHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpIC0gdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSkgLyAyKTtcbiAgICB3aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgI2luazpkaXIocnRsKSB7XG4gICAgcmlnaHQ6IGNhbGMoMHB4IC0gKHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpIC0gdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKSkgLyAyKTtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgI2lua1tjaGVja2VkXSB7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIH1cblxuICAjY2hlY2tib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcywgYm9yZGVyLWNvbG9yIDE0MG1zO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMsIGJvcmRlci1jb2xvciAxNDBtcztcblxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItY2hlY2tib3gtYW5pbWF0aW9uLWR1cmF0aW9uLCAxNDBtcyk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItY2hlY2tib3gtYW5pbWF0aW9uLWR1cmF0aW9uLCAxNDBtcyk7XG4gIH1cblxuICAvKiBjaGVja2JveCBjaGVja2VkIGFuaW1hdGlvbnMgKi9cbiAgI2NoZWNrYm94LmNoZWNrZWQgI2NoZWNrbWFyayB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrbWFyay1leHBhbmQgMTQwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBjaGVja21hcmstZXhwYW5kIDE0MG1zIGVhc2Utb3V0IGZvcndhcmRzO1xuXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLWNoZWNrYm94LWFuaW1hdGlvbi1kdXJhdGlvbiwgMTQwbXMpO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItY2hlY2tib3gtYW5pbWF0aW9uLWR1cmF0aW9uLCAxNDBtcyk7XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgY2hlY2ttYXJrLWV4cGFuZCB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjaGVja21hcmstZXhwYW5kIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgfVxuXG4gICNjaGVja2JveC5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIH1cblxuICAjY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM2JTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiBjYWxjKDIvMTUgKiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiBjYWxjKDIvMTUgKiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrbWFyay1jb2xvciwgd2hpdGUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogOTclIDg2JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA5NyUgODYlO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiBwcm90ZWN0IGFnYWluc3QgcGFnZS1sZXZlbCBib3gtc2l6aW5nICovXG4gIH1cblxuICAjY2hlY2ttYXJrOmRpcihydGwpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE0JTtcbiAgfVxuXG4gIC8qIGxhYmVsICovXG4gICNjaGVja2JveExhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1zcGFjaW5nLCA4cHgpO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIEBhcHBseSAtLXBhcGVyLWNoZWNrYm94LWxhYmVsO1xuICB9XG5cbiAgOmhvc3QoW2NoZWNrZWRdKSAjY2hlY2tib3hMYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNoZWNrZWQtY29sb3IsIHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKSk7XG4gICAgQGFwcGx5IC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZDtcbiAgfVxuXG4gICNjaGVja2JveExhYmVsOmRpcihydGwpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1zcGFjaW5nLCA4cHgpO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gICNjaGVja2JveExhYmVsW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBkaXNhYmxlZCBzdGF0ZSAqL1xuXG4gIDpob3N0KFtkaXNhYmxlZF0pICNjaGVja2JveCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF1bY2hlY2tlZF0pICNjaGVja2JveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjY2hlY2tib3hMYWJlbCAge1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gIH1cblxuICAvKiBpbnZhbGlkIHN0YXRlICovXG4gICNjaGVja2JveC5pbnZhbGlkOm5vdCguY2hlY2tlZCkge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtZXJyb3ItY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgaWQ9XCJjaGVja2JveENvbnRhaW5lclwiPlxuICA8ZGl2IGlkPVwiY2hlY2tib3hcIiBjbGFzcyQ9XCJbW19jb21wdXRlQ2hlY2tib3hDbGFzcyhjaGVja2VkLCBpbnZhbGlkKV1dXCI+XG4gICAgPGRpdiBpZD1cImNoZWNrbWFya1wiIGNsYXNzJD1cIltbX2NvbXB1dGVDaGVja21hcmtDbGFzcyhjaGVja2VkKV1dXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgaWQ9XCJjaGVja2JveExhYmVsXCI+PHNsb3Q+PC9zbG90PjwvZGl2PmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0NoZWNrYm94XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc2VsZWN0aW9uLWNvbnRyb2xzLWNoZWNrYm94KVxuXG5gcGFwZXItY2hlY2tib3hgIGlzIGEgYnV0dG9uIHRoYXQgY2FuIGJlIGVpdGhlciBjaGVja2VkIG9yIHVuY2hlY2tlZC4gVXNlciBjYW5cbnRhcCB0aGUgY2hlY2tib3ggdG8gY2hlY2sgb3IgdW5jaGVjayBpdC4gVXN1YWxseSB5b3UgdXNlIGNoZWNrYm94ZXMgdG8gYWxsb3dcbnVzZXIgdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMgZnJvbSBhIHNldC4gSWYgeW91IGhhdmUgYSBzaW5nbGUgT04vT0ZGIG9wdGlvbixcbmF2b2lkIHVzaW5nIGEgc2luZ2xlIGNoZWNrYm94IGFuZCB1c2UgYHBhcGVyLXRvZ2dsZS1idXR0b25gIGluc3RlYWQuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItY2hlY2tib3g+bGFiZWw8L3BhcGVyLWNoZWNrYm94PlxuXG4gICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ+IGxhYmVsPC9wYXBlci1jaGVja2JveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IENoZWNrYm94IGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgdHJhbnNwYXJlbnRgXG5gLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3JgIHwgQ2hlY2tib3ggYm9yZGVyIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWNvbG9yYCB8IENoZWNrYm94IGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtY2hlY2ttYXJrLWNvbG9yYCB8IENoZWNrbWFyayBjb2xvciB8IGB3aGl0ZWBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNvbG9yYCB8IExhYmVsIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZC1jb2xvcmAgfCBMYWJlbCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1zcGFjaW5nYCB8IFNwYWNpbmcgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIHRoZSBjaGVja2JveCB8IGA4cHhgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLWNoZWNrZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGB7fWBcbmAtLXBhcGVyLWNoZWNrYm94LWVycm9yLWNvbG9yYCB8IENoZWNrYm94IGNvbG9yIHdoZW4gaW52YWxpZCB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItY2hlY2tib3gtc2l6ZWAgfCBTaXplIG9mIHRoZSBjaGVja2JveCB8IGAxOHB4YFxuYC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemVgIHwgU2l6ZSBvZiB0aGUgcmlwcGxlIHwgYDQ4cHhgXG5gLS1wYXBlci1jaGVja2JveC1tYXJnaW5gIHwgTWFyZ2luIGFyb3VuZCB0aGUgY2hlY2tib3ggY29udGFpbmVyIHwgYGluaXRpYWxgXG5gLS1wYXBlci1jaGVja2JveC12ZXJ0aWNhbC1hbGlnbmAgfCBWZXJ0aWNhbCBhbGlnbm1lbnQgb2YgdGhlIGNoZWNrYm94IGNvbnRhaW5lciB8IGBtaWRkbGVgXG5cblRoaXMgZWxlbWVudCBhcHBsaWVzIHRoZSBtaXhpbiBgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlYCBidXQgZG9lcyBub3QgaW1wb3J0XG5gcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuIEluIG9yZGVyIHRvIGFwcGx5IHRoZSBgUm9ib3RvYCBmb250IHRvIHRoaXNcbmVsZW1lbnQsIG1ha2Ugc3VyZSB5b3UndmUgaW1wb3J0ZWQgYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLWNoZWNrYm94JyxcblxuICBiZWhhdmlvcnM6IFtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdjaGVja2JveCcsICdhcmlhLWNoZWNrZWQnOiBmYWxzZSwgdGFiaW5kZXg6IDB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAZXZlbnQgY2hhbmdlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cbiAgICBhcmlhQWN0aXZlQXR0cmlidXRlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2FyaWEtY2hlY2tlZCd9XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFdhaXQgdW50aWwgc3R5bGVzIGhhdmUgcmVzb2x2ZWQgdG8gY2hlY2sgZm9yIHRoZSBkZWZhdWx0IHNlbnRpbmVsLlxuICAgIC8vIFNlZSBwb2x5bWVyIzQwMDkgZm9yIG1vcmUgZGV0YWlscy5cbiAgICBhZnRlck5leHRSZW5kZXIodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5rU2l6ZSA9XG4gICAgICAgICAgdGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZScpXG4gICAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAvLyBJZiB1bnNldCwgY29tcHV0ZSBhbmQgc2V0IHRoZSBkZWZhdWx0IGAtLXBhcGVyLWNoZWNrYm94LWluay1zaXplYC5cbiAgICAgIGlmIChpbmtTaXplID09PSAnLTFweCcpIHtcbiAgICAgICAgdmFyIGNoZWNrYm94U2l6ZVRleHQgPVxuICAgICAgICAgICAgdGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplJylcbiAgICAgICAgICAgICAgICAudHJpbSgpO1xuXG4gICAgICAgIHZhciB1bml0cyA9ICdweCc7XG4gICAgICAgIHZhciB1bml0c01hdGNoZXMgPSBjaGVja2JveFNpemVUZXh0Lm1hdGNoKC9bQS1aYS16XSskLyk7XG4gICAgICAgIGlmICh1bml0c01hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgICB1bml0cyA9IHVuaXRzTWF0Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGVja2JveFNpemUgPSBwYXJzZUZsb2F0KGNoZWNrYm94U2l6ZVRleHQpO1xuICAgICAgICB2YXIgZGVmYXVsdElua1NpemUgPSAoOCAvIDMpICogY2hlY2tib3hTaXplO1xuXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ3B4Jykge1xuICAgICAgICAgIGRlZmF1bHRJbmtTaXplID0gTWF0aC5mbG9vcihkZWZhdWx0SW5rU2l6ZSk7XG5cbiAgICAgICAgICAvLyBUaGUgY2hlY2tib3ggYW5kIHJpcHBsZSBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgcGFyaXR5IHNvIHRoYXQgdGhlaXJcbiAgICAgICAgICAvLyBjZW50ZXJzIGFsaWduLlxuICAgICAgICAgIGlmIChkZWZhdWx0SW5rU2l6ZSAlIDIgIT09IGNoZWNrYm94U2l6ZSAlIDIpIHtcbiAgICAgICAgICAgIGRlZmF1bHRJbmtTaXplKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoe1xuICAgICAgICAgICctLXBhcGVyLWNoZWNrYm94LWluay1zaXplJzogZGVmYXVsdElua1NpemUgKyB1bml0cyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgX2NvbXB1dGVDaGVja2JveENsYXNzOiBmdW5jdGlvbihjaGVja2VkLCBpbnZhbGlkKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJ2NoZWNrZWQgJztcbiAgICB9XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnaW52YWxpZCc7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH0sXG5cbiAgX2NvbXB1dGVDaGVja21hcmtDbGFzczogZnVuY3Rpb24oY2hlY2tlZCkge1xuICAgIHJldHVybiBjaGVja2VkID8gJycgOiAnaGlkZGVuJztcbiAgfSxcblxuICAvLyBjcmVhdGUgcmlwcGxlIGluc2lkZSB0aGUgY2hlY2tib3hDb250YWluZXJcbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy4kLmNoZWNrYm94Q29udGFpbmVyO1xuICAgIHJldHVybiBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbC5fY3JlYXRlUmlwcGxlLmNhbGwodGhpcyk7XG4gIH1cblxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJBO0FBNEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRUE7QUE4RUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTZCQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUxBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5GQTs7OztBIiwic291cmNlUm9vdCI6IiJ9