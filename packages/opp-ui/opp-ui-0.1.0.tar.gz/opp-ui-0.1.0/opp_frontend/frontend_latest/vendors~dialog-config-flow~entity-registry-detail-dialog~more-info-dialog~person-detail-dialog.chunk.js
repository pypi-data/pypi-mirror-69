(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~entity-registry-detail-dialog~more-info-dialog~person-detail-dialog"],{

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js");
/* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
















/**
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

This is a faster, lighter version of `paper-dropdown-menu`, that does not
use a `<paper-input>` internally. Use this element if you're concerned about
the performance of this element, i.e., if you plan on using many dropdowns on
the same page. Note that this element has a slightly different styling API
than `paper-dropdown-menu`.

`paper-dropdown-menu-light` is similar to a native browser select element.
`paper-dropdown-menu-light` works with selectable content. The currently
selected item is displayed in the control. If no item is selected, the `label`
is displayed instead.

Example:

    <paper-dropdown-menu-light label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu-light>

This example renders a dropdown menu with 4 options.

The child element with the slot `dropdown-content` is used as the dropdown
menu. This can be a [`paper-listbox`](paper-listbox), or any other or
element that acts like an [`iron-selector`](iron-selector).

Specifically, the menu child must fire an
[`iron-select`](iron-selector#event-iron-select) event when one of its
children is selected, and an
[`iron-deselect`](iron-selector#event-iron-deselect) event when a child is
deselected. The selected or deselected item must be passed as the event's
`detail.item` property.

Applications can listen for the `iron-select` and `iron-deselect` events
to react when options are selected and deselected.

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
`--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
`--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
`--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
`--paper-dropdown-menu-disabled-opacity` | The opacity of the dropdown when disabled  | `0.33`
`--paper-dropdown-menu-color` | The color of the input/label/underline when the dropdown is unfocused | `--primary-text-color`
`--paper-dropdown-menu-focus-color` | The color of the label/underline when the dropdown is focused  | `--primary-color`
`--paper-dropdown-error-color` | The color of the label/underline when the dropdown is invalid  | `--error-color`
`--paper-dropdown-menu-label` | Mixin applied to the label | `{}`
`--paper-dropdown-menu-input` | Mixin appled to the input | `{}`

Note that in this element, the underline is just the bottom border of the
"input". To style it:

    <style is=custom-style>
      paper-dropdown-menu-light.custom {
        --paper-dropdown-menu-input: {
          border-bottom: 2px dashed lavender;
        };
    </style>

@group Paper Elements
@element paper-dropdown-menu-light
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_12__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_15__["html"]`
    <style include="paper-dropdown-menu-shared-styles">
      :host(:focus) {
        outline: none;
      }

      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <label class\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,
  is: 'paper-dropdown-menu-light',
  behaviors: [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_7__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_11__["PaperRippleBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_10__["IronValidatableBehavior"]],
  properties: {
    /**
     * The derived "label" of the currently selected item. This value
     * is the `label` property on the selected item if set, or else the
     * trimmed text content of the selected item.
     */
    selectedItemLabel: {
      type: String,
      notify: true,
      readOnly: true
    },

    /**
     * The last selected item. An item is selected if the dropdown menu has
     * a child with class `dropdown-content`, and that child triggers an
     * `iron-select` event with the selected `item` in the `detail`.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * The value for this element that will be used when submitting in
     * a form. It reflects the value of `selectedItemLabel`. If set directly,
     * it will not update the `selectedItemLabel` value.
     */
    value: {
      type: String,
      notify: true,
      observer: '_valueChanged'
    },

    /**
     * The label for the dropdown.
     */
    label: {
      type: String
    },

    /**
     * The placeholder for the dropdown.
     */
    placeholder: {
      type: String
    },

    /**
     * True if the dropdown is open. Otherwise, false.
     */
    opened: {
      type: Boolean,
      notify: true,
      value: false,
      observer: '_openedChanged'
    },

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */
    allowOutsideScroll: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. Bind this to the
     * `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * Set to true to always float the label. Bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: {
      type: Boolean,
      value: false
    },

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: {
      type: String,
      value: 'right'
    },

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: {
      type: String,
      value: 'top'
    },

    /**
     * Overrides the vertical offset computed in
     * _computeMenuVerticalOffset.
     */
    verticalOffset: Number,
    hasContent: {
      type: Boolean,
      readOnly: true
    }
  },
  listeners: {
    'tap': '_onTap'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up down': 'open',
    'esc': 'close'
  },
  hostAttributes: {
    tabindex: 0,
    role: 'combobox',
    'aria-autocomplete': 'none',
    'aria-haspopup': 'true'
  },
  observers: ['_selectedItemChanged(selectedItem)'],
  attached: function () {
    // NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
    // child will cause an `iron-select` event to fire while the element is
    // still in a `DocumentFragment`. This has the effect of causing
    // handlers not to fire. So, we double check this value on attached:
    var contentElement = this.contentElement;

    if (contentElement && contentElement.selectedItem) {
      this._setSelectedItem(contentElement.selectedItem);
    }
  },

  /**
   * The content element that is contained by the dropdown menu, if any.
   */
  get contentElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_13__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Show the dropdown content.
   */
  open: function () {
    this.$.menuButton.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function () {
    this.$.menuButton.close();
  },

  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} event An `iron-select` event.
   */
  _onIronSelect: function (event) {
    this._setSelectedItem(event.detail.item);
  },

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */
  _onIronDeselect: function (event) {
    this._setSelectedItem(null);
  },

  /**
   * A handler that is called when the dropdown is tapped.
   *
   * @param {CustomEvent} event A tap event.
   */
  _onTap: function (event) {
    if (_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_14__["findOriginalTarget"](event) === this) {
      this.open();
    }
  },

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged: function (selectedItem) {
    var value = '';

    if (!selectedItem) {
      value = '';
    } else {
      value = selectedItem.label || selectedItem.getAttribute('label') || selectedItem.textContent.trim();
    }

    this.value = value;

    this._setSelectedItemLabel(value);
  },

  /**
   * Compute the vertical offset of the menu based on the value of
   * `noLabelFloat`.
   *
   * @param {boolean} noLabelFloat True if the label should not float
   * @param {number=} opt_verticalOffset Optional offset from the user
   * above the input, otherwise false.
   */
  _computeMenuVerticalOffset: function (noLabelFloat, opt_verticalOffset) {
    // Override offset if it's passed from the user.
    if (opt_verticalOffset) {
      return opt_verticalOffset;
    } // NOTE(cdata): These numbers are somewhat magical because they are
    // derived from the metrics of elements internal to `paper-input`'s
    // template. The metrics will change depending on whether or not the
    // input has a floating label.


    return noLabelFloat ? -4 : 8;
  },

  /**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.required && !!this.value;
  },
  _openedChanged: function () {
    var openState = this.opened ? 'true' : 'false';
    var e = this.contentElement;

    if (e) {
      e.setAttribute('aria-expanded', openState);
    }
  },
  _computeLabelClass: function (noLabelFloat, alwaysFloatLabel, hasContent) {
    var cls = '';

    if (noLabelFloat === true) {
      return hasContent ? 'label-is-hidden' : '';
    }

    if (hasContent || alwaysFloatLabel === true) {
      cls += ' label-is-floating';
    }

    return cls;
  },
  _valueChanged: function () {
    // Only update if it's actually different.
    if (this.$.input && this.$.input.textContent !== this.value) {
      this.$.input.textContent = this.value;
    }

    this._setHasContent(!!this.value);
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+bW9yZS1pbmZvLWRpYWxvZ35wZXJzb24tZGV0YWlsLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnLi9wYXBlci1kcm9wZG93bi1tZW51LWljb25zLmpzJztcbmltcG9ydCAnLi9wYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRHJvcGRvd25cbm1lbnVzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy5odG1sI2J1dHRvbnMtZHJvcGRvd24tYnV0dG9ucylcblxuVGhpcyBpcyBhIGZhc3RlciwgbGlnaHRlciB2ZXJzaW9uIG9mIGBwYXBlci1kcm9wZG93bi1tZW51YCwgdGhhdCBkb2VzIG5vdFxudXNlIGEgYDxwYXBlci1pbnB1dD5gIGludGVybmFsbHkuIFVzZSB0aGlzIGVsZW1lbnQgaWYgeW91J3JlIGNvbmNlcm5lZCBhYm91dFxudGhlIHBlcmZvcm1hbmNlIG9mIHRoaXMgZWxlbWVudCwgaS5lLiwgaWYgeW91IHBsYW4gb24gdXNpbmcgbWFueSBkcm9wZG93bnMgb25cbnRoZSBzYW1lIHBhZ2UuIE5vdGUgdGhhdCB0aGlzIGVsZW1lbnQgaGFzIGEgc2xpZ2h0bHkgZGlmZmVyZW50IHN0eWxpbmcgQVBJXG50aGFuIGBwYXBlci1kcm9wZG93bi1tZW51YC5cblxuYHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRgIGlzIHNpbWlsYXIgdG8gYSBuYXRpdmUgYnJvd3NlciBzZWxlY3QgZWxlbWVudC5cbmBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0YCB3b3JrcyB3aXRoIHNlbGVjdGFibGUgY29udGVudC4gVGhlIGN1cnJlbnRseVxuc2VsZWN0ZWQgaXRlbSBpcyBkaXNwbGF5ZWQgaW4gdGhlIGNvbnRyb2wuIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHRoZSBgbGFiZWxgXG5pcyBkaXNwbGF5ZWQgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IGxhYmVsPVwiWW91ciBmYXZvdXJpdGUgcGFzdHJ5XCI+XG4gICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICA8cGFwZXItaXRlbT5Dcm9pc3NhbnQ8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkRvbnV0PC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5GaW5hbmNpZXI8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPk1hZGVsZWluZTwvcGFwZXItaXRlbT5cbiAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG5cblRoaXMgZXhhbXBsZSByZW5kZXJzIGEgZHJvcGRvd24gbWVudSB3aXRoIDQgb3B0aW9ucy5cblxuVGhlIGNoaWxkIGVsZW1lbnQgd2l0aCB0aGUgc2xvdCBgZHJvcGRvd24tY29udGVudGAgaXMgdXNlZCBhcyB0aGUgZHJvcGRvd25cbm1lbnUuIFRoaXMgY2FuIGJlIGEgW2BwYXBlci1saXN0Ym94YF0ocGFwZXItbGlzdGJveCksIG9yIGFueSBvdGhlciBvclxuZWxlbWVudCB0aGF0IGFjdHMgbGlrZSBhbiBbYGlyb24tc2VsZWN0b3JgXShpcm9uLXNlbGVjdG9yKS5cblxuU3BlY2lmaWNhbGx5LCB0aGUgbWVudSBjaGlsZCBtdXN0IGZpcmUgYW5cbltgaXJvbi1zZWxlY3RgXShpcm9uLXNlbGVjdG9yI2V2ZW50LWlyb24tc2VsZWN0KSBldmVudCB3aGVuIG9uZSBvZiBpdHNcbmNoaWxkcmVuIGlzIHNlbGVjdGVkLCBhbmQgYW5cbltgaXJvbi1kZXNlbGVjdGBdKGlyb24tc2VsZWN0b3IjZXZlbnQtaXJvbi1kZXNlbGVjdCkgZXZlbnQgd2hlbiBhIGNoaWxkIGlzXG5kZXNlbGVjdGVkLiBUaGUgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCBpdGVtIG11c3QgYmUgcGFzc2VkIGFzIHRoZSBldmVudCdzXG5gZGV0YWlsLml0ZW1gIHByb3BlcnR5LlxuXG5BcHBsaWNhdGlvbnMgY2FuIGxpc3RlbiBmb3IgdGhlIGBpcm9uLXNlbGVjdGAgYW5kIGBpcm9uLWRlc2VsZWN0YCBldmVudHNcbnRvIHJlYWN0IHdoZW4gb3B0aW9ucyBhcmUgc2VsZWN0ZWQgYW5kIGRlc2VsZWN0ZWQuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYWxzbyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWRgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB3aGVuIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHJpcHBsZSB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBtZW51IGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbmAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgaWNvbiB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQtb3BhY2l0eWAgfCBUaGUgb3BhY2l0eSBvZiB0aGUgZHJvcGRvd24gd2hlbiBkaXNhYmxlZCAgfCBgMC4zM2BcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBpbnB1dC9sYWJlbC91bmRlcmxpbmUgd2hlbiB0aGUgZHJvcGRvd24gaXMgdW5mb2N1c2VkIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1mb2N1cy1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGxhYmVsL3VuZGVybGluZSB3aGVuIHRoZSBkcm9wZG93biBpcyBmb2N1c2VkICB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1kcm9wZG93bi1lcnJvci1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGxhYmVsL3VuZGVybGluZSB3aGVuIHRoZSBkcm9wZG93biBpcyBpbnZhbGlkICB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1sYWJlbGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXRgIHwgTWl4aW4gYXBwbGVkIHRvIHRoZSBpbnB1dCB8IGB7fWBcblxuTm90ZSB0aGF0IGluIHRoaXMgZWxlbWVudCwgdGhlIHVuZGVybGluZSBpcyBqdXN0IHRoZSBib3R0b20gYm9yZGVyIG9mIHRoZVxuXCJpbnB1dFwiLiBUbyBzdHlsZSBpdDpcblxuICAgIDxzdHlsZSBpcz1jdXN0b20tc3R5bGU+XG4gICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0LmN1c3RvbSB7XG4gICAgICAgIC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDoge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgbGF2ZW5kZXI7XG4gICAgICAgIH07XG4gICAgPC9zdHlsZT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICA6aG9zdCg6Zm9jdXMpIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Qge1xuICAgICAgICB3aWR0aDogMjAwcHg7ICAvKiBEZWZhdWx0IHNpemUgb2YgYW4gPGlucHV0PiAqL1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFsbCBvZiB0aGVzZSBzdHlsZXMgYmVsb3cgYXJlIGZvciBzdHlsaW5nIHRoZSBmYWtlLWlucHV0IGRpc3BsYXlcbiAgICAgICAqL1xuICAgICAgW3Nsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJdIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDhweCAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIl0ge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZC1vcGFjaXR5LCAwLjMzKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vLWxhYmVsLWZsb2F0XSkgW3Nsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJdIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDsgICAvKiBJZiB0aGVyZSdzIG5vIGxhYmVsLCB3ZSBuZWVkIGxlc3Mgc3BhY2UgdXAgdG9wLiAqL1xuICAgICAgfVxuXG4gICAgICAjaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kcm9wZG93bi1tZW51LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweCAwIDA7ICAgLyogUmlnaHQgcGFkZGluZyBzbyB0aGF0IHRleHQgZG9lc24ndCBvdmVybGFwIHRoZSBpY29uICovXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgICNpbnB1dDpkaXIocnRsKSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAjaW5wdXQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgI2lucHV0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWRyb3Bkb3duLWVycm9yLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSAjaW5wdXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDsgICAvKiBJZiB0aGVyZSdzIG5vIGxhYmVsLCB3ZSBuZWVkIGxlc3Mgc3BhY2UgdXAgdG9wLiAqL1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbnRhaW5lciBoYXMgYSAxNnB4IHRvcCBwYWRkaW5nLCBhbmQgdGhlcmUncyAxMnB4IG9mIHBhZGRpbmdcbiAgICAgICAgICogYmV0d2VlbiB0aGUgaW5wdXQgYW5kIHRoZSBsYWJlbCAoZnJvbSB0aGUgaW5wdXQncyBwYWRkaW5nLXRvcClcbiAgICAgICAgICovXG4gICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICAgIC8qIFJpZ2h0IHBhZGRpbmcgc28gdGhhdCB0ZXh0IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgaWNvbiAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtbGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsOmRpcihydGwpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIGxhYmVsIHtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIC8qIFNpbmNlIHRoZSBsYWJlbCBkb2Vzbid0IG5lZWQgdG8gZmxvYXQsIHJlbW92ZSB0aGUgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgIHdoaWNoIHNsb3dzIGRvd24gdmlzaWJpbGl0eSBjaGFuZ2VzIChpLmUuIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZSkgKi9cbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsLmxhYmVsLWlzLWZsb2F0aW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgbGFiZWwubGFiZWwtaXMtaGlkZGVuIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIGxhYmVsLmxhYmVsLWlzLWZsb2F0aW5nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBsYWJlbC5sYWJlbC1pcy1mbG9hdGluZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kcm9wZG93bi1lcnJvci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXRzIHVwIHRoZSBmb2N1c2VkIHVuZGVybGluZS4gSXQncyBpbml0aWFsbHkgaGlkZGVuLCBhbmQgYmVjb21lc1xuICAgICAgICogdmlzaWJsZSB3aGVuIGl0J3MgZm9jdXNlZC5cbiAgICAgICAqL1xuICAgICAgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kcm9wZG93bi1tZW51LWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgIGJvdHRvbTogN3B4OyAgICAvKiBUaGUgY29udGFpbmVyIGhhcyBhbiA4cHggYm90dG9tIHBhZGRpbmcgKi9cbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBsZWZ0OiA0NSU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kcm9wZG93bi1lcnJvci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vLWxhYmVsLWZsb2F0XSkgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBib3R0b206IDdweDsgICAgLyogVGhlIGNvbnRhaW5lciBoYXMgYSA4cHggYm90dG9tIHBhZGRpbmcgKi9cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdOm5vdChbZGlzYWJsZWRdKSkgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDhweDsgICAgLyogVGhlIGNvbnRhaW5lciBoYXMgYW4gOHB4IGJvdHRvbSBwYWRkaW5nICovXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWljb247XG4gICAgICB9XG5cbiAgICAgIGlyb24taWNvbjpkaXIocnRsKSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBpcm9uLWljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZHJvcGRvd24tZXJyb3ItY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHJpZ2h0OjA7XG4gICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgLmVycm9yIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPCEtLSB0aGlzIGRpdiBmdWxmaWxscyBhbiBhMTF5IHJlcXVpcmVtZW50IGZvciBjb21ib2JveCwgZG8gbm90IHJlbW92ZSAtLT5cbiAgICA8c3BhbiByb2xlPVwiYnV0dG9uXCI+PC9zcGFuPlxuICAgIDxwYXBlci1tZW51LWJ1dHRvbiBpZD1cIm1lbnVCdXR0b25cIiB2ZXJ0aWNhbC1hbGlnbj1cIltbdmVydGljYWxBbGlnbl1dXCIgaG9yaXpvbnRhbC1hbGlnbj1cIltbaG9yaXpvbnRhbEFsaWduXV1cIiB2ZXJ0aWNhbC1vZmZzZXQ9XCJbW19jb21wdXRlTWVudVZlcnRpY2FsT2Zmc2V0KG5vTGFiZWxGbG9hdCwgdmVydGljYWxPZmZzZXQpXV1cIiBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiIG5vLWFuaW1hdGlvbnM9XCJbW25vQW5pbWF0aW9uc11dXCIgb24taXJvbi1zZWxlY3Q9XCJfb25Jcm9uU2VsZWN0XCIgb24taXJvbi1kZXNlbGVjdD1cIl9vbklyb25EZXNlbGVjdFwiIG9wZW5lZD1cInt7b3BlbmVkfX1cIiBjbG9zZS1vbi1hY3RpdmF0ZSBhbGxvdy1vdXRzaWRlLXNjcm9sbD1cIltbYWxsb3dPdXRzaWRlU2Nyb2xsXV1cIj5cbiAgICAgIDwhLS0gc3VwcG9ydCBoeWJyaWQgbW9kZTogdXNlciBtaWdodCBiZSB1c2luZyBwYXBlci1tZW51LWJ1dHRvbiAxLnggd2hpY2ggZGlzdHJpYnV0ZXMgdmlhIDxjb250ZW50PiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCIgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzXFwkPVwiW1tfY29tcHV0ZUxhYmVsQ2xhc3Mobm9MYWJlbEZsb2F0LGFsd2F5c0Zsb2F0TGFiZWwsaGFzQ29udGVudCldXVwiPlxuICAgICAgICAgIFtbbGFiZWxdXVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGlkPVwiaW5wdXRcIiB0YWJpbmRleD1cIi0xXCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgIDxpcm9uLWljb24gaWNvbj1cInBhcGVyLWRyb3Bkb3duLW1lbnU6YXJyb3ctZHJvcC1kb3duXCI+PC9pcm9uLWljb24+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj5bW2Vycm9yTWVzc2FnZV1dPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZHJvcGRvd24tY29udGVudFwiIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+PC9zbG90PlxuICAgIDwvcGFwZXItbWVudS1idXR0b24+XG5gLFxuXG4gIGlzOiAncGFwZXItZHJvcGRvd24tbWVudS1saWdodCcsXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgSXJvbkJ1dHRvblN0YXRlLFxuICAgIElyb25Db250cm9sU3RhdGUsXG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvcixcbiAgICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvclxuICBdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVyaXZlZCBcImxhYmVsXCIgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLiBUaGlzIHZhbHVlXG4gICAgICogaXMgdGhlIGBsYWJlbGAgcHJvcGVydHkgb24gdGhlIHNlbGVjdGVkIGl0ZW0gaWYgc2V0LCBvciBlbHNlIHRoZVxuICAgICAqIHRyaW1tZWQgdGV4dCBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbUxhYmVsOiB7dHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IHNlbGVjdGVkIGl0ZW0uIEFuIGl0ZW0gaXMgc2VsZWN0ZWQgaWYgdGhlIGRyb3Bkb3duIG1lbnUgaGFzXG4gICAgICogYSBjaGlsZCB3aXRoIGNsYXNzIGBkcm9wZG93bi1jb250ZW50YCwgYW5kIHRoYXQgY2hpbGQgdHJpZ2dlcnMgYW5cbiAgICAgKiBgaXJvbi1zZWxlY3RgIGV2ZW50IHdpdGggdGhlIHNlbGVjdGVkIGBpdGVtYCBpbiB0aGUgYGRldGFpbGAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBzdWJtaXR0aW5nIGluXG4gICAgICogYSBmb3JtLiBJdCByZWZsZWN0cyB0aGUgdmFsdWUgb2YgYHNlbGVjdGVkSXRlbUxhYmVsYC4gSWYgc2V0IGRpcmVjdGx5LFxuICAgICAqIGl0IHdpbGwgbm90IHVwZGF0ZSB0aGUgYHNlbGVjdGVkSXRlbUxhYmVsYCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIGZvciB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgbGFiZWw6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZHJvcGRvd24gaXMgb3Blbi4gT3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgKi9cbiAgICBvcGVuZWQ6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgYWxsb3dPdXRzaWRlU2Nyb2xsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBCaW5kIHRoaXMgdG8gdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBub0xhYmVsRmxvYXRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG5vTGFiZWxGbG9hdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIEJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhbmltYXRpb25zIHdoZW4gb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAgICAgKiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBub0FuaW1hdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIG1lbnUgZHJvcGRvd25cbiAgICAgKiBob3Jpem9udGFsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3JpZ2h0J30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyB0aGUgdmVydGljYWwgb2Zmc2V0IGNvbXB1dGVkIGluXG4gICAgICogX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQuXG4gICAgICovXG4gICAgdmVydGljYWxPZmZzZXQ6IE51bWJlcixcblxuICAgIGhhc0NvbnRlbnQ6IHt0eXBlOiBCb29sZWFuLCByZWFkT25seTogdHJ1ZX1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHsndGFwJzogJ19vblRhcCd9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7J3VwIGRvd24nOiAnb3BlbicsICdlc2MnOiAnY2xvc2UnfSxcblxuICBob3N0QXR0cmlidXRlczoge1xuICAgIHRhYmluZGV4OiAwLFxuICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ25vbmUnLFxuICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zZWxlY3RlZEl0ZW1DaGFuZ2VkKHNlbGVjdGVkSXRlbSknXSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gTk9URShjZGF0YSk6IER1ZSB0byB0aW1pbmcsIGEgcHJlc2VsZWN0ZWQgdmFsdWUgaW4gYSBgSXJvblNlbGVjdGFibGVgXG4gICAgLy8gY2hpbGQgd2lsbCBjYXVzZSBhbiBgaXJvbi1zZWxlY3RgIGV2ZW50IHRvIGZpcmUgd2hpbGUgdGhlIGVsZW1lbnQgaXNcbiAgICAvLyBzdGlsbCBpbiBhIGBEb2N1bWVudEZyYWdtZW50YC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZiBjYXVzaW5nXG4gICAgLy8gaGFuZGxlcnMgbm90IHRvIGZpcmUuIFNvLCB3ZSBkb3VibGUgY2hlY2sgdGhpcyB2YWx1ZSBvbiBhdHRhY2hlZDpcbiAgICB2YXIgY29udGVudEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50O1xuICAgIGlmIChjb250ZW50RWxlbWVudCAmJiBjb250ZW50RWxlbWVudC5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShjb250ZW50RWxlbWVudC5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgZWxlbWVudCB0aGF0IGlzIGNvbnRhaW5lZCBieSB0aGUgZHJvcGRvd24gbWVudSwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGNvbnRlbnRFbGVtZW50KCkge1xuICAgIC8vIFBvbHltZXIgMi54IHJldHVybnMgc2xvdC5hc3NpZ25lZE5vZGVzIHdoaWNoIGNhbiBjb250YWluIHRleHQgbm9kZXMuXG4gICAgdmFyIG5vZGVzID0gZG9tKHRoaXMuJC5jb250ZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2hvdyB0aGUgZHJvcGRvd24gY29udGVudC5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5tZW51QnV0dG9uLm9wZW4oKTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZSB0aGUgZHJvcGRvd24gY29udGVudC5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQubWVudUJ1dHRvbi5jbG9zZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBgaXJvbi1zZWxlY3RgIGlzIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBbiBgaXJvbi1zZWxlY3RgIGV2ZW50LlxuICAgKi9cbiAgX29uSXJvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0oZXZlbnQuZGV0YWlsLml0ZW0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBgaXJvbi1kZXNlbGVjdGAgaXMgZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGBpcm9uLWRlc2VsZWN0YCBldmVudC5cbiAgICovXG4gIF9vbklyb25EZXNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0obnVsbCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBkcm9wZG93biBpcyB0YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEgdGFwIGV2ZW50LlxuICAgKi9cbiAgX29uVGFwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChnZXN0dXJlcy5maW5kT3JpZ2luYWxUYXJnZXQoZXZlbnQpID09PSB0aGlzKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIGxhYmVsIGZvciB0aGUgZHJvcGRvd24gZ2l2ZW4gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNlbGVjdGVkSXRlbSBBIHNlbGVjdGVkIEVsZW1lbnQgaXRlbSwgd2l0aCBhblxuICAgKiBvcHRpb25hbCBgbGFiZWxgIHByb3BlcnR5LlxuICAgKi9cbiAgX3NlbGVjdGVkSXRlbUNoYW5nZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHNlbGVjdGVkSXRlbS5sYWJlbCB8fCBzZWxlY3RlZEl0ZW0uZ2V0QXR0cmlidXRlKCdsYWJlbCcpIHx8XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtTGFiZWwodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIG1lbnUgYmFzZWQgb24gdGhlIHZhbHVlIG9mXG4gICAqIGBub0xhYmVsRmxvYXRgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vTGFiZWxGbG9hdCBUcnVlIGlmIHRoZSBsYWJlbCBzaG91bGQgbm90IGZsb2F0XG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X3ZlcnRpY2FsT2Zmc2V0IE9wdGlvbmFsIG9mZnNldCBmcm9tIHRoZSB1c2VyXG4gICAqIGFib3ZlIHRoZSBpbnB1dCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQ6IGZ1bmN0aW9uKG5vTGFiZWxGbG9hdCwgb3B0X3ZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgLy8gT3ZlcnJpZGUgb2Zmc2V0IGlmIGl0J3MgcGFzc2VkIGZyb20gdGhlIHVzZXIuXG4gICAgaWYgKG9wdF92ZXJ0aWNhbE9mZnNldCkge1xuICAgICAgcmV0dXJuIG9wdF92ZXJ0aWNhbE9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBOT1RFKGNkYXRhKTogVGhlc2UgbnVtYmVycyBhcmUgc29tZXdoYXQgbWFnaWNhbCBiZWNhdXNlIHRoZXkgYXJlXG4gICAgLy8gZGVyaXZlZCBmcm9tIHRoZSBtZXRyaWNzIG9mIGVsZW1lbnRzIGludGVybmFsIHRvIGBwYXBlci1pbnB1dGAnc1xuICAgIC8vIHRlbXBsYXRlLiBUaGUgbWV0cmljcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3QgdGhlXG4gICAgLy8gaW5wdXQgaGFzIGEgZmxvYXRpbmcgbGFiZWwuXG4gICAgcmV0dXJuIG5vTGFiZWxGbG9hdCA/IC00IDogODtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBhbmQgZG9lcyBub3QgaGF2ZSBhIHNlbGVjdGlvbixcbiAgICogYW5kIHRydWUgb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlLCBvciBpZiBgcmVxdWlyZWRgIGlzIHRydWVcbiAgICogYW5kIHRoZSBlbGVtZW50IGhhcyBhIHZhbGlkIHNlbGVjdGlvbi5cbiAgICovXG4gIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24oX3ZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVxdWlyZWQgfHwgKHRoaXMucmVxdWlyZWQgJiYgISF0aGlzLnZhbHVlKTtcbiAgfSxcblxuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wZW5TdGF0ZSA9IHRoaXMub3BlbmVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB2YXIgZSA9IHRoaXMuY29udGVudEVsZW1lbnQ7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlblN0YXRlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2NvbXB1dGVMYWJlbENsYXNzOiBmdW5jdGlvbihub0xhYmVsRmxvYXQsIGFsd2F5c0Zsb2F0TGFiZWwsIGhhc0NvbnRlbnQpIHtcbiAgICB2YXIgY2xzID0gJyc7XG4gICAgaWYgKG5vTGFiZWxGbG9hdCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGhhc0NvbnRlbnQgPyAnbGFiZWwtaXMtaGlkZGVuJyA6ICcnO1xuICAgIH1cblxuICAgIGlmIChoYXNDb250ZW50IHx8IGFsd2F5c0Zsb2F0TGFiZWwgPT09IHRydWUpIHtcbiAgICAgIGNscyArPSAnIGxhYmVsLWlzLWZsb2F0aW5nJztcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfSxcblxuICBfdmFsdWVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBPbmx5IHVwZGF0ZSBpZiBpdCdzIGFjdHVhbGx5IGRpZmZlcmVudC5cbiAgICBpZiAodGhpcy4kLmlucHV0ICYmIHRoaXMuJC5pbnB1dC50ZXh0Q29udGVudCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy4kLmlucHV0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fc2V0SGFzQ29udGVudCghIXRoaXMudmFsdWUpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBa01BO0FBRUE7QUFRQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQXhGQTtBQTJGQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZjQTs7OztBIiwic291cmNlUm9vdCI6IiJ9