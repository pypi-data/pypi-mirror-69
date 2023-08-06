(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \***************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
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
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */

const IronMenubarBehaviorImpl = {
  hostAttributes: {
    'role': 'menubar'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left': '_onLeftKey',
    'right': '_onRightKey'
  },
  _onUpKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },
  _onDownKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function (event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onRightKey: function (event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onKeydown: function (event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    } // all other keys focus the menu item starting with that character


    this._focusWithKeyboardEvent(event);
  }
};
/** @polymerBehavior */

const IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-button/paper-radio-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-button` is a button that can be either checked or unchecked. The
user can tap the radio button to check or uncheck it.

Use a `<paper-radio-group>` to group a set of radio buttons. When radio buttons
are inside a radio group, exactly one radio button in the group can be checked
at any time.

Example:

    <paper-radio-button></paper-radio-button>
    <paper-radio-button>Item label</paper-radio-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
`--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
`--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-radio-button-checked-color` | Radio button color when the input is checked | `--primary-color`
`--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-radio-button-size` | Size of the radio button | `16px`
`--paper-radio-button-ink-size` | Size of the ripple | `48px`
`--paper-radio-button-label-color` | Label color | `--primary-text-color`
`--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
`--paper-radio-button-radio-container` | A mixin applied to the internal radio container | `{}`
`--paper-radio-button-label` | A mixin applied to the internal label | `{}`
`--paper-radio-button-label-checked` | A mixin applied to the internal label when the radio button is checked | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-radio-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-radio-button',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperCheckedElementBehavior"]],
  hostAttributes: {
    role: 'radio',
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
  ready: function () {
    this._rippleContainer = this.$.radioContainer;
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-radio-button-ink-size').trim(); // If unset, compute and set the default `--paper-radio-button-ink-size`.

      if (inkSize === '-1px') {
        var size = parseFloat(this.getComputedStyleValue('--calculated-paper-radio-button-size').trim());
        var defaultInkSize = Math.floor(3 * size); // The button and ripple need to have the same parity so that their
        // centers align.

        if (defaultInkSize % 2 !== size % 2) {
          defaultInkSize++;
        }

        this.updateStyles({
          '--paper-radio-button-ink-size': defaultInkSize + 'px'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-group/paper-radio-group.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button.js */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design: [Radio
button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-group` allows user to select at most one radio button from a set.
Checking one radio button that belongs to a radio group unchecks any
previously checked radio button within the same group. Use
`selected` to get or set the selected radio button.

The <paper-radio-buttons> inside the group must have the `name` attribute
set.

Example:

    <paper-radio-group selected="small">
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

Radio-button-groups can be made optional, and allow zero buttons to be selected:

    <paper-radio-group selected="small" allow-empty-selection>
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

See <a href="paper-radio-button">paper-radio-button</a> for more
information about `paper-radio-button`.


Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-group-item-padding` | The padding of the item | `12px`

@group Paper Elements
@element paper-radio-group
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,
  is: 'paper-radio-group',
  behaviors: [_polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'radiogroup'
  },
  properties: {
    /**
     * Fired when the radio group selection changes.
     *
     * @event paper-radio-group-changed
     */

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    attrForSelected: {
      type: String,
      value: 'name'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectedAttribute: {
      type: String,
      value: 'checked'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectable: {
      type: String,
      value: 'paper-radio-button'
    },

    /**
     * If true, radio-buttons can be deselected
     */
    allowEmptySelection: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Selects the given value.
   */
  select: function (value) {
    var newItem = this._valueToItem(value);

    if (newItem && newItem.hasAttribute('disabled')) {
      return;
    }

    if (this.selected) {
      var oldItem = this._valueToItem(this.selected);

      if (this.selected == value) {
        // If deselecting is allowed we'll have to apply an empty selection.
        // Otherwise, we should force the selection to stay and make this
        // action a no-op.
        if (this.allowEmptySelection) {
          value = '';
        } else {
          if (oldItem) oldItem.checked = true;
          return;
        }
      }

      if (oldItem) oldItem.checked = false;
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__["IronSelectableBehavior"].select.apply(this, [value]);
    this.fire('paper-radio-group-changed');
  },
  _activateFocusedItem: function () {
    this._itemActivate(this._valueForItem(this.focusedItem), this.focusedItem);
  },
  _onUpKey: function (event) {
    this._focusPrevious();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onDownKey: function (event) {
    this._focusNext();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onLeftKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onLeftKey.apply(this, arguments);

    this._activateFocusedItem();
  },
  _onRightKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onRightKey.apply(this, arguments);

    this._activateFocusedItem();
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35vbmJvYXJkaW5nLWNvcmUtY29uZmlnfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1jb3JlfnBhbmVsLWNvbmZpZy1zY3JpcHQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudWJhci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25NZW51QmVoYXZpb3J9IGZyb20gJy4vaXJvbi1tZW51LWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgSXJvbk1lbnViYXJCZWhhdmlvcmAgaW1wbGVtZW50cyBhY2Nlc3NpYmxlIG1lbnViYXIgYmVoYXZpb3IuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uTWVudWJhckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbCA9IHtcblxuICBob3N0QXR0cmlidXRlczogeydyb2xlJzogJ21lbnViYXInfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeydsZWZ0JzogJ19vbkxlZnRLZXknLCAncmlnaHQnOiAnX29uUmlnaHRLZXknfSxcblxuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtLmNsaWNrKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25Eb3duS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuZm9jdXNlZEl0ZW0uY2xpY2soKTtcbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIGdldCBfaXNSVEwoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpWydkaXJlY3Rpb24nXSA9PT0gJ3J0bCc7XG4gIH0sXG5cbiAgX29uTGVmdEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgfVxuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uUmlnaHRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vbktleWRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGV2ZW50LCAndXAgZG93biBsZWZ0IHJpZ2h0IGVzYycpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWxsIG90aGVyIGtleXMgZm9jdXMgdGhlIG1lbnUgaXRlbSBzdGFydGluZyB3aXRoIHRoYXQgY2hhcmFjdGVyXG4gICAgdGhpcy5fZm9jdXNXaXRoS2V5Ym9hcmRFdmVudChldmVudCk7XG4gIH1cblxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudWJhckJlaGF2aW9yID0gW0lyb25NZW51QmVoYXZpb3IsIElyb25NZW51YmFyQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24tc2l6ZTogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXNpemUsIDE2cHgpO1xuICAgIC8qIC0xcHggaXMgYSBzZW50aW5lbCBmb3IgdGhlIGRlZmF1bHQgYW5kIGlzIHJlcGxhY2UgaW4gXFxgYXR0YWNoZWRcXGAuICovXG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZTogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplLCAtMXB4KTtcbiAgfVxuXG4gIDpob3N0KDpmb2N1cykge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAjcmFkaW9Db250YWluZXIge1xuICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLXNpemUpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICBAYXBwbHkgLS1wYXBlci1yYWRpby1idXR0b24tcmFkaW8tY29udGFpbmVyO1xuICB9XG5cbiAgI2luayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICByaWdodDogYXV0bztcbiAgICB3aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAjaW5rW2NoZWNrZWRdIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIH1cblxuICAjb2ZmUmFkaW8sICNvblJhZGlvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgI29mZlJhZGlvIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yOHM7XG4gIH1cblxuICAjb25SYWRpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBlYXNlIDAuMjhzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlIDAuMjhzO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNvZmZSYWRpbyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgOmhvc3QoW2NoZWNrZWRdKSAjb25SYWRpbyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG5cbiAgI3JhZGlvTGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtc3BhY2luZywgMTBweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcblxuICAgIEBhcHBseSAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbDtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI3JhZGlvTGFiZWwge1xuICAgIEBhcHBseSAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1jaGVja2VkO1xuICB9XG5cbiAgI3JhZGlvTGFiZWw6ZGlyKHJ0bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLXNwYWNpbmcsIDEwcHgpO1xuICB9XG5cbiAgI3JhZGlvTGFiZWxbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRpc2FibGVkIHN0YXRlICovXG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI29mZlJhZGlvIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF1bY2hlY2tlZF0pICNvblJhZGlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjcmFkaW9MYWJlbCB7XG4gICAgLyogc2xpZ2h0bHkgZGFya2VyIHRoYW4gdGhlIGJ1dHRvbiwgc28gdGhhdCBpdCdzIHJlYWRhYmxlICovXG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBpZD1cInJhZGlvQ29udGFpbmVyXCI+XG4gIDxkaXYgaWQ9XCJvZmZSYWRpb1wiPjwvZGl2PlxuICA8ZGl2IGlkPVwib25SYWRpb1wiPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgaWQ9XCJyYWRpb0xhYmVsXCI+PHNsb3Q+PC9zbG90PjwvZGl2PmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUmFkaW8gYnV0dG9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc2VsZWN0aW9uLWNvbnRyb2xzLXJhZGlvLWJ1dHRvbilcblxuYHBhcGVyLXJhZGlvLWJ1dHRvbmAgaXMgYSBidXR0b24gdGhhdCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQgb3IgdW5jaGVja2VkLiBUaGVcbnVzZXIgY2FuIHRhcCB0aGUgcmFkaW8gYnV0dG9uIHRvIGNoZWNrIG9yIHVuY2hlY2sgaXQuXG5cblVzZSBhIGA8cGFwZXItcmFkaW8tZ3JvdXA+YCB0byBncm91cCBhIHNldCBvZiByYWRpbyBidXR0b25zLiBXaGVuIHJhZGlvIGJ1dHRvbnNcbmFyZSBpbnNpZGUgYSByYWRpbyBncm91cCwgZXhhY3RseSBvbmUgcmFkaW8gYnV0dG9uIGluIHRoZSBncm91cCBjYW4gYmUgY2hlY2tlZFxuYXQgYW55IHRpbWUuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItcmFkaW8tYnV0dG9uPjwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDxwYXBlci1yYWRpby1idXR0b24+SXRlbSBsYWJlbDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFJhZGlvIGJ1dHRvbiBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYHRyYW5zcGFyZW50YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1jb2xvcmAgfCBSYWRpbyBidXR0b24gY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1jb2xvcmAgfCBSYWRpbyBidXR0b24gY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXNpemVgIHwgU2l6ZSBvZiB0aGUgcmFkaW8gYnV0dG9uIHwgYDE2cHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemVgIHwgU2l6ZSBvZiB0aGUgcmlwcGxlIHwgYDQ4cHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtc3BhY2luZ2AgfCBTcGFjaW5nIGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgYnV0dG9uIHwgYDEwcHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24tcmFkaW8tY29udGFpbmVyYCB8IEEgbWl4aW4gYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgcmFkaW8gY29udGFpbmVyIHwgYHt9YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsYCB8IEEgbWl4aW4gYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgbGFiZWwgfCBge31gXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY2hlY2tlZGAgfCBBIG1peGluIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGxhYmVsIHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkIHwgYHt9YFxuXG5UaGlzIGVsZW1lbnQgYXBwbGllcyB0aGUgbWl4aW4gYC0tcGFwZXItZm9udC1jb21tb24tYmFzZWAgYnV0IGRvZXMgbm90IGltcG9ydFxuYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLiBJbiBvcmRlciB0byBhcHBseSB0aGUgYFJvYm90b2AgZm9udCB0byB0aGlzXG5lbGVtZW50LCBtYWtlIHN1cmUgeW91J3ZlIGltcG9ydGVkIGBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1yYWRpby1idXR0b25cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItcmFkaW8tYnV0dG9uJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JdLFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ3JhZGlvJywgJ2FyaWEtY2hlY2tlZCc6IGZhbHNlLCB0YWJpbmRleDogMH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuXG4gICAgYXJpYUFjdGl2ZUF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdhcmlhLWNoZWNrZWQnfVxuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLiQucmFkaW9Db250YWluZXI7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFdhaXQgdW50aWwgc3R5bGVzIGhhdmUgcmVzb2x2ZWQgdG8gY2hlY2sgZm9yIHRoZSBkZWZhdWx0IHNlbnRpbmVsLlxuICAgIC8vIFNlZSBwb2x5bWVyIzQwMDkgZm9yIG1vcmUgZGV0YWlscy5cbiAgICBhZnRlck5leHRSZW5kZXIodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5rU2l6ZSA9XG4gICAgICAgICAgdGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUnKVxuICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgLy8gSWYgdW5zZXQsIGNvbXB1dGUgYW5kIHNldCB0aGUgZGVmYXVsdCBgLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemVgLlxuICAgICAgaWYgKGlua1NpemUgPT09ICctMXB4Jykge1xuICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplJylcbiAgICAgICAgICAgICAgICAudHJpbSgpKTtcbiAgICAgICAgdmFyIGRlZmF1bHRJbmtTaXplID0gTWF0aC5mbG9vcigzICogc2l6ZSk7XG5cbiAgICAgICAgLy8gVGhlIGJ1dHRvbiBhbmQgcmlwcGxlIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBwYXJpdHkgc28gdGhhdCB0aGVpclxuICAgICAgICAvLyBjZW50ZXJzIGFsaWduLlxuICAgICAgICBpZiAoZGVmYXVsdElua1NpemUgJSAyICE9PSBzaXplICUgMikge1xuICAgICAgICAgIGRlZmF1bHRJbmtTaXplKys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgICAgJy0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplJzogZGVmYXVsdElua1NpemUgKyAncHgnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pXG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvbi5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnViYXJCZWhhdmlvciwgSXJvbk1lbnViYXJCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnViYXItYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tc2VsZWN0YWJsZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1JhZGlvXG5idXR0b25dKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtcmFkaW8tYnV0dG9uKVxuXG5gcGFwZXItcmFkaW8tZ3JvdXBgIGFsbG93cyB1c2VyIHRvIHNlbGVjdCBhdCBtb3N0IG9uZSByYWRpbyBidXR0b24gZnJvbSBhIHNldC5cbkNoZWNraW5nIG9uZSByYWRpbyBidXR0b24gdGhhdCBiZWxvbmdzIHRvIGEgcmFkaW8gZ3JvdXAgdW5jaGVja3MgYW55XG5wcmV2aW91c2x5IGNoZWNrZWQgcmFkaW8gYnV0dG9uIHdpdGhpbiB0aGUgc2FtZSBncm91cC4gVXNlXG5gc2VsZWN0ZWRgIHRvIGdldCBvciBzZXQgdGhlIHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi5cblxuVGhlIDxwYXBlci1yYWRpby1idXR0b25zPiBpbnNpZGUgdGhlIGdyb3VwIG11c3QgaGF2ZSB0aGUgYG5hbWVgIGF0dHJpYnV0ZVxuc2V0LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXJhZGlvLWdyb3VwIHNlbGVjdGVkPVwic21hbGxcIj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInNtYWxsXCI+U21hbGw8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1lZGl1bVwiPk1lZGl1bTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGFyZ2VcIj5MYXJnZTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cblJhZGlvLWJ1dHRvbi1ncm91cHMgY2FuIGJlIG1hZGUgb3B0aW9uYWwsIGFuZCBhbGxvdyB6ZXJvIGJ1dHRvbnMgdG8gYmUgc2VsZWN0ZWQ6XG5cbiAgICA8cGFwZXItcmFkaW8tZ3JvdXAgc2VsZWN0ZWQ9XCJzbWFsbFwiIGFsbG93LWVtcHR5LXNlbGVjdGlvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInNtYWxsXCI+U21hbGw8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1lZGl1bVwiPk1lZGl1bTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGFyZ2VcIj5MYXJnZTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cblNlZSA8YSBocmVmPVwicGFwZXItcmFkaW8tYnV0dG9uXCI+cGFwZXItcmFkaW8tYnV0dG9uPC9hPiBmb3IgbW9yZVxuaW5mb3JtYXRpb24gYWJvdXQgYHBhcGVyLXJhZGlvLWJ1dHRvbmAuXG5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItcmFkaW8tZ3JvdXAtaXRlbS1wYWRkaW5nYCB8IFRoZSBwYWRkaW5nIG9mIHRoZSBpdGVtIHwgYDEycHhgXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItcmFkaW8tZ3JvdXBcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhcGVyLXJhZGlvLWdyb3VwLWl0ZW0tcGFkZGluZywgMTJweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1yYWRpby1ncm91cCcsXG4gIGJlaGF2aW9yczogW0lyb25NZW51YmFyQmVoYXZpb3JdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge1xuICAgIHJvbGU6ICdyYWRpb2dyb3VwJyxcbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgcmFkaW8gZ3JvdXAgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgcGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVuIGZyb20gUG9seW1lci5Jcm9uU2VsZWN0YWJsZUJlaGF2aW9yXG4gICAgICovXG4gICAgYXR0ckZvclNlbGVjdGVkOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ25hbWUnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIFBvbHltZXIuSXJvblNlbGVjdGFibGVCZWhhdmlvclxuICAgICAqL1xuICAgIHNlbGVjdGVkQXR0cmlidXRlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2NoZWNrZWQnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIFBvbHltZXIuSXJvblNlbGVjdGFibGVCZWhhdmlvclxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncGFwZXItcmFkaW8tYnV0dG9uJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByYWRpby1idXR0b25zIGNhbiBiZSBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgYWxsb3dFbXB0eVNlbGVjdGlvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG5ld0l0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh2YWx1ZSk7XG4gICAgaWYgKG5ld0l0ZW0gJiYgbmV3SXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdmFyIG9sZEl0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh0aGlzLnNlbGVjdGVkKTtcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gdmFsdWUpIHtcbiAgICAgICAgLy8gSWYgZGVzZWxlY3RpbmcgaXMgYWxsb3dlZCB3ZSdsbCBoYXZlIHRvIGFwcGx5IGFuIGVtcHR5IHNlbGVjdGlvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBzaG91bGQgZm9yY2UgdGhlIHNlbGVjdGlvbiB0byBzdGF5IGFuZCBtYWtlIHRoaXNcbiAgICAgICAgLy8gYWN0aW9uIGEgbm8tb3AuXG4gICAgICAgIGlmICh0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24pIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvbGRJdGVtKVxuICAgICAgICAgICAgb2xkSXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9sZEl0ZW0pXG4gICAgICAgIG9sZEl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3Iuc2VsZWN0LmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuICAgIHRoaXMuZmlyZSgncGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZCcpO1xuICB9LFxuXG4gIF9hY3RpdmF0ZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pdGVtQWN0aXZhdGUodGhpcy5fdmFsdWVGb3JJdGVtKHRoaXMuZm9jdXNlZEl0ZW0pLCB0aGlzLmZvY3VzZWRJdGVtKTtcbiAgfSxcblxuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH0sXG5cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNlZEl0ZW0oKTtcbiAgfSxcblxuICBfb25MZWZ0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25NZW51YmFyQmVoYXZpb3JJbXBsLl9vbkxlZnRLZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH0sXG5cbiAgX29uUmlnaHRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbk1lbnViYXJCZWhhdmlvckltcGwuX29uUmlnaHRLZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBb0RBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7OztBQU1BOzs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBdERBOzs7Ozs7Ozs7Ozs7QUMvTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBREE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7OztBQU1BOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQUNBO0FBMkJBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTVHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9