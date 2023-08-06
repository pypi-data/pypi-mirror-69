(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"],{

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-addon-behavior.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-addon-behavior.js ***!
  \*******************************************************************************************************************/
/*! exports provided: PaperInputAddonBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputAddonBehavior", function() { return PaperInputAddonBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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
 * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for
 * `<paper-input-container>`. A add-on appears below the input, and may display
 * information based on the input value and validity such as a character counter
 * or an error message.
 * @polymerBehavior
 */

const PaperInputAddonBehavior = {
  attached: function () {
    this.fire('addon-attached');
  },

  /**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {}
};

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-behavior.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-behavior.js ***!
  \*************************************************************************************************************/
/*! exports provided: PaperInputHelper, PaperInputBehaviorImpl, PaperInputBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputHelper", function() { return PaperInputHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehaviorImpl", function() { return PaperInputBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInputBehavior", function() { return PaperInputBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
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




 // Generate unique, monotonically increasing IDs for labels (needed by
// aria-labelledby) and add-ons.

const PaperInputHelper = {};
PaperInputHelper.NextLabelID = 1;
PaperInputHelper.NextAddonID = 1;
PaperInputHelper.NextInputID = 1;
/**
 * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
 * This behavior is implemented by `<paper-input>`. It exposes a number of
 * properties from `<paper-input-container>` and `<input is="iron-input">` and
 * they should be bound in your template.
 *
 * The input element can be accessed by the `inputElement` property if you need
 * to access properties or methods that are not exposed.
 * @polymerBehavior PaperInputBehavior
 */

const PaperInputBehaviorImpl = {
  properties: {
    /**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */

    /**
     * The label for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * `<label>`'s content and `hidden` property, e.g.
     * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
     */
    label: {
      type: String
    },

    /**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */
    disabled: {
      type: Boolean,
      value: false
    },

    /**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */
    invalid: {
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */
    allowedPattern: {
      type: String
    },

    /**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */
    type: {
      type: String
    },

    /**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */
    list: {
      type: String
    },

    /**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */
    pattern: {
      type: String
    },

    /**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */
    required: {
      type: Boolean,
      value: false
    },

    /**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */
    errorMessage: {
      type: String
    },

    /**
     * Set to true to show a character counter.
     */
    charCounter: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */
    validator: {
      type: String
    },
    // HTMLInputElement attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */
    autocomplete: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     */
    autofocus: {
      type: Boolean,
      observer: '_autofocusChanged'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */
    inputmode: {
      type: String
    },

    /**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */
    minlength: {
      type: Number
    },

    /**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */
    maxlength: {
      type: Number
    },

    /**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */
    min: {
      type: String
    },

    /**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */
    max: {
      type: String
    },

    /**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */
    step: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */
    name: {
      type: String
    },

    /**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */
    placeholder: {
      type: String,
      // need to set a default so _computeAlwaysFloatLabel is run
      value: ''
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */
    readonly: {
      type: Boolean,
      value: false
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */
    size: {
      type: Number
    },
    // Nonstandard attributes for binding if needed

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */
    autocapitalize: {
      type: String,
      value: 'none'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */
    autocorrect: {
      type: String,
      value: 'off'
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */
    autosave: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */
    results: {
      type: Number
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */
    accept: {
      type: String
    },

    /**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */
    multiple: {
      type: Boolean
    },

    /** @private */
    _ariaDescribedBy: {
      type: String,
      value: ''
    },

    /** @private */
    _ariaLabelledBy: {
      type: String,
      value: ''
    },

    /** @private */
    _inputId: {
      type: String,
      value: ''
    }
  },
  listeners: {
    'addon-attached': '_onAddonAttached'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'shift+tab:keydown': '_onShiftTabDown'
  },

  /** @private */
  hostAttributes: {
    tabindex: 0
  },

  /**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */
  get inputElement() {
    // Chrome generates audit errors if an <input type="password"> has a
    // duplicate ID, which is almost always true in Shady DOM. Generate
    // a unique ID instead.
    if (!this.$) {
      this.$ = {};
    }

    if (!this.$.input) {
      this._generateInputId();

      this.$.input = this.$$('#' + this._inputId);
    }

    return this.$.input;
  },

  /**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */
  get _focusableElement() {
    return this.inputElement;
  },

  /** @override */
  created: function () {
    // These types have some default placeholder text; overlapping
    // the label on top of it looks terrible. Auto-float the label in this case.
    this._typesThatHaveText = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week', 'file'];
  },

  /** @override */
  attached: function () {
    this._updateAriaLabelledBy(); // In the 2.0 version of the element, this is handled in `onIronInputReady`,
    // i.e. after the native input has finished distributing. In the 1.0
    // version, the input is in the shadow tree, so it's already available.


    if (!_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] && this.inputElement && this._typesThatHaveText.indexOf(this.inputElement.type) !== -1) {
      this.alwaysFloatLabel = true;
    }
  },
  _appendStringWithSpace: function (str, more) {
    if (str) {
      str = str + ' ' + more;
    } else {
      str = more;
    }

    return str;
  },
  _onAddonAttached: function (event) {
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).rootTarget;

    if (target.id) {
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, target.id);
    } else {
      var id = 'paper-input-add-on-' + PaperInputHelper.NextAddonID++;
      target.id = id;
      this._ariaDescribedBy = this._appendStringWithSpace(this._ariaDescribedBy, id);
    }
  },

  /**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */
  validate: function () {
    return this.inputElement.validate();
  },

  /**
   * Forward focus to inputElement. Overriden from IronControlState.
   */
  _focusBlurHandler: function (event) {
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"]._focusBlurHandler.call(this, event); // Forward the focus to the nested input.


    if (this.focused && !this._shiftTabPressed && this._focusableElement) {
      this._focusableElement.focus();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function (event) {
    var oldTabIndex = this.getAttribute('tabindex');
    this._shiftTabPressed = true;
    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      this._shiftTabPressed = false;
    }, 1);
  },

  /**
   * If `autoValidate` is true, then validates the element.
   */
  _handleAutoValidate: function () {
    if (this.autoValidate) this.validate();
  },

  /**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */
  updateValueAndPreserveCaret: function (newValue) {
    // Not all elements might have selection, and even if they have the
    // right properties, accessing them might throw an exception (like for
    // <input type=number>)
    try {
      var start = this.inputElement.selectionStart;
      this.value = newValue; // The cursor automatically jumps to the end after re-setting the value,
      // so restore it to its original position.

      this.inputElement.selectionStart = start;
      this.inputElement.selectionEnd = start;
    } catch (e) {
      // Just set the value and give up on the caret.
      this.value = newValue;
    }
  },
  _computeAlwaysFloatLabel: function (alwaysFloatLabel, placeholder) {
    return placeholder || alwaysFloatLabel;
  },
  _updateAriaLabelledBy: function () {
    var label = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).querySelector('label');

    if (!label) {
      this._ariaLabelledBy = '';
      return;
    }

    var labelledBy;

    if (label.id) {
      labelledBy = label.id;
    } else {
      labelledBy = 'paper-input-label-' + PaperInputHelper.NextLabelID++;
      label.id = labelledBy;
    }

    this._ariaLabelledBy = labelledBy;
  },
  _generateInputId: function () {
    if (!this._inputId || this._inputId === '') {
      this._inputId = 'input-' + PaperInputHelper.NextInputID++;
    }
  },
  _onChange: function (event) {
    // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.
    // See
    // https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
    if (this.shadowRoot) {
      this.fire(event.type, {
        sourceEvent: event
      }, {
        node: this,
        bubbles: event.bubbles,
        cancelable: event.cancelable
      });
    }
  },
  _autofocusChanged: function () {
    // Firefox doesn't respect the autofocus attribute if it's applied after
    // the page is loaded (Chrome/WebKit do respect it), preventing an
    // autofocus attribute specified in markup from taking effect when the
    // element is upgraded. As a workaround, if the autofocus property is set,
    // and the focus hasn't already been moved elsewhere, we take focus.
    if (this.autofocus && this._focusableElement) {
      // In IE 11, the default document.activeElement can be the page's
      // outermost html element, but there are also cases (under the
      // polyfill?) in which the activeElement is not a real HTMLElement, but
      // just a plain object. We identify the latter case as having no valid
      // activeElement.
      var activeElement = document.activeElement;
      var isActiveElementValid = activeElement instanceof HTMLElement; // Has some other element has already taken the focus?

      var isSomeElementActive = isActiveElementValid && activeElement !== document.body && activeElement !== document.documentElement;
      /* IE 11 */

      if (!isSomeElementActive) {
        // No specific element has taken the focus yet, so we can take it.
        this._focusableElement.focus();
      }
    }
  }
};
/** @polymerBehavior */

const PaperInputBehavior = [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], PaperInputBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-char-counter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-char-counter.js ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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
`<paper-input-char-counter>` is a character counter for use with
`<paper-input-container>`. It shows the number of characters entered in the
input and the max length if it is specified.

    <paper-input-container>
      <input maxlength="20">
      <paper-input-char-counter></paper-input-char-counter>
    </paper-input-container>

### Styling

The following mixin is available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-char-counter` | Mixin applied to the element | `{}`
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,
  is: 'paper-input-char-counter',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperInputAddonBehavior"]],
  properties: {
    _charCounterStr: {
      type: String,
      value: '0'
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {
    if (!state.inputElement) {
      return;
    }

    state.value = state.value || '';
    var counter = state.value.toString().length.toString();

    if (state.inputElement.hasAttribute('maxlength')) {
      counter += '/' + state.inputElement.getAttribute('maxlength');
    }

    this._charCounterStr = counter;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-container.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-container.js ***!
  \**************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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








const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
/*
`<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
`<textarea>` and optional add-on elements such as an error message or character
counter, used to implement Material Design text fields.

For example:

    <paper-input-container>
      <label slot="label">Your name</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above.
    </paper-input-container>

You can style the nested `<input>` however you want; if you want it to look like
a Material Design input, you can style it with the
--paper-input-container-shared-input-style mixin.

Do not wrap `<paper-input-container>` around elements that already include it,
such as `<paper-input>`. Doing so may cause events to bounce infinitely between
the container and its contained element.

### Listening for input changes

By default, it listens for changes on the `bind-value` attribute on its children
nodes and perform tasks such as auto-validating and label styling when the
`bind-value` changes. You can configure the attribute it listens to with the
`attr-for-value` attribute.

### Using a custom input element

You can use a custom input element in a `<paper-input-container>`, for example
to implement a compound input field like a social security number input. The
custom input element should have the `paper-input-input` class, have a
`notify:true` value property and optionally implements
`Polymer.IronValidatableBehavior` if it is validatable.

    <paper-input-container attr-for-value="ssn-value">
      <label slot="label">Social security number</label>
      <ssn-input slot="input" class="paper-input-input"></ssn-input>
    </paper-input-container>


If you're using a `<paper-input-container>` imperatively, it's important to make
sure that you attach its children (the `iron-input` and the optional `label`)
before you attach the `<paper-input-container>` itself, so that it can be set up
correctly.

### Validation

If the `auto-validate` attribute is set, the input container will validate the
input and update the container styling when the input value changes.

### Add-ons

Add-ons are child elements of a `<paper-input-container>` with the `add-on`
attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
are notified when the input value or validity changes, and may implement
functionality such as error messages or character counters. They appear at the
bottom of the input.

### Prefixes and suffixes
These are child elements of a `<paper-input-container>` with the `prefix`
or `suffix` attribute, and are displayed inline with the input, before or after.

    <paper-input-container>
      <div slot="prefix">$</div>
      <label slot="label">Total</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above. <paper-icon-button slot="suffix"
icon="clear"></paper-icon-button>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
`--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
`--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
`--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
`--paper-input-container` | Mixin applied to the container | `{}`
`--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
`--paper-input-container-label` | Mixin applied to the label | `{}`
`--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
`--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
`--paper-input-container-input` | Mixin applied to the input | `{}`
`--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
`--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
`--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
`--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
`--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
`--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
`--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
`--paper-input-container-underline` | Mixin applied to the underline | `{}`
`--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
`--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
`--paper-input-prefix` | Mixin applied to the input prefix | `{}`
`--paper-input-suffix` | Mixin applied to the input suffix | `{}`

This element is `display:block` by default, but you can set the `inline`
attribute to make it `display:inline-block`.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,
  is: 'paper-input-container',
  properties: {
    /**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */
    noLabelFloat: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to always float the floating label.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * The attribute to listen for value changes on.
     */
    attrForValue: {
      type: String,
      value: 'bind-value'
    },

    /**
     * Set to true to auto-validate the input value when it changes.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */
    invalid: {
      observer: '_invalidChanged',
      type: Boolean,
      value: false
    },

    /**
     * True if the input has focus.
     */
    focused: {
      readOnly: true,
      type: Boolean,
      value: false,
      notify: true
    },
    _addons: {
      type: Array // do not set a default value here intentionally - it will be initialized
      // lazily when a distributed child is attached, which may occur before
      // configuration for this element in polyfill.

    },
    _inputHasContent: {
      type: Boolean,
      value: false
    },
    _inputSelector: {
      type: String,
      value: 'input,iron-input,textarea,.paper-input-input'
    },
    _boundOnFocus: {
      type: Function,
      value: function () {
        return this._onFocus.bind(this);
      }
    },
    _boundOnBlur: {
      type: Function,
      value: function () {
        return this._onBlur.bind(this);
      }
    },
    _boundOnInput: {
      type: Function,
      value: function () {
        return this._onInput.bind(this);
      }
    },
    _boundValueChanged: {
      type: Function,
      value: function () {
        return this._onValueChanged.bind(this);
      }
    }
  },
  listeners: {
    'addon-attached': '_onAddonAttached',
    'iron-input-validate': '_onIronInputValidate'
  },

  get _valueChangedEvent() {
    return this.attrForValue + '-changed';
  },

  get _propertyForValue() {
    return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_6__["dashToCamelCase"])(this.attrForValue);
  },

  get _inputElement() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__["dom"])(this).querySelector(this._inputSelector);
  },

  get _inputElementValue() {
    return this._inputElement[this._propertyForValue] || this._inputElement.value;
  },

  /** @override */
  ready: function () {
    // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. We need to track whether the first time we
    // encounter the value is basically this first time, so that we can validate
    // it correctly the rest of the time. See
    // https://github.com/PolymerElements/paper-input/issues/605
    this.__isFirstValueUpdate = true;

    if (!this._addons) {
      this._addons = [];
    }

    this.addEventListener('focus', this._boundOnFocus, true);
    this.addEventListener('blur', this._boundOnBlur, true);
  },

  /** @override */
  attached: function () {
    if (this.attrForValue) {
      this._inputElement.addEventListener(this._valueChangedEvent, this._boundValueChanged);
    } else {
      this.addEventListener('input', this._onInput);
    } // Only validate when attached if the input already has a value.


    if (this._inputElementValue && this._inputElementValue != '') {
      this._handleValueAndAutoValidate(this._inputElement);
    } else {
      this._handleValue(this._inputElement);
    }
  },

  /** @private */
  _onAddonAttached: function (event) {
    if (!this._addons) {
      this._addons = [];
    }

    var target = event.target;

    if (this._addons.indexOf(target) === -1) {
      this._addons.push(target);

      if (this.isAttached) {
        this._handleValue(this._inputElement);
      }
    }
  },

  /** @private */
  _onFocus: function () {
    this._setFocused(true);
  },

  /** @private */
  _onBlur: function () {
    this._setFocused(false);

    this._handleValueAndAutoValidate(this._inputElement);
  },

  /** @private */
  _onInput: function (event) {
    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _onValueChanged: function (event) {
    var input = event.target; // Paper-input treats a value of undefined differently at startup than
    // the rest of the time (specifically: it does not validate it at startup,
    // but it does after that. If this is in fact the bootup case, ignore
    // validation, just this once.

    if (this.__isFirstValueUpdate) {
      this.__isFirstValueUpdate = false;

      if (input.value === undefined || input.value === '') {
        return;
      }
    }

    this._handleValueAndAutoValidate(event.target);
  },

  /** @private */
  _handleValue: function (inputElement) {
    var value = this._inputElementValue; // type="number" hack needed because this.value is empty until it's valid

    if (value || value === 0 || inputElement.type === 'number' && !inputElement.checkValidity()) {
      this._inputHasContent = true;
    } else {
      this._inputHasContent = false;
    }

    this.updateAddons({
      inputElement: inputElement,
      value: value,
      invalid: this.invalid
    });
  },

  /** @private */
  _handleValueAndAutoValidate: function (inputElement) {
    if (this.autoValidate && inputElement) {
      var valid;

      if (inputElement.validate) {
        valid = inputElement.validate(this._inputElementValue);
      } else {
        valid = inputElement.checkValidity();
      }

      this.invalid = !valid;
    } // Call this last to notify the add-ons.


    this._handleValue(inputElement);
  },

  /** @private */
  _onIronInputValidate: function (event) {
    this.invalid = this._inputElement.invalid;
  },

  /** @private */
  _invalidChanged: function () {
    if (this._addons) {
      this.updateAddons({
        invalid: this.invalid
      });
    }
  },

  /**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */
  updateAddons: function (state) {
    for (var addon, index = 0; addon = this._addons[index]; index++) {
      addon.update(state);
    }
  },

  /** @private */
  _computeInputContentClass: function (noLabelFloat, alwaysFloatLabel, focused, invalid, _inputHasContent) {
    var cls = 'input-content';

    if (!noLabelFloat) {
      var label = this.querySelector('label');

      if (alwaysFloatLabel || _inputHasContent) {
        cls += ' label-is-floating'; // If the label is floating, ignore any offsets that may have been
        // applied from a prefix element.

        this.$.labelAndInputContainer.style.position = 'static';

        if (invalid) {
          cls += ' is-invalid';
        } else if (focused) {
          cls += ' label-is-highlighted';
        }
      } else {
        // When the label is not floating, it should overlap the input element.
        if (label) {
          this.$.labelAndInputContainer.style.position = 'relative';
        }

        if (invalid) {
          cls += ' is-invalid';
        }
      }
    } else {
      if (_inputHasContent) {
        cls += ' label-is-hidden';
      }

      if (invalid) {
        cls += ' is-invalid';
      }
    }

    if (focused) {
      cls += ' focused';
    }

    return cls;
  },

  /** @private */
  _computeUnderlineClass: function (focused, invalid) {
    var cls = 'underline';

    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }

    return cls;
  },

  /** @private */
  _computeAddOnContentClass: function (focused, invalid) {
    var cls = 'add-on-content';

    if (invalid) {
      cls += ' is-invalid';
    } else if (focused) {
      cls += ' is-highlighted';
    }

    return cls;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-error.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-error.js ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-input-addon-behavior.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-addon-behavior.js");
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
`<paper-input-error>` is an error message for use with
`<paper-input-container>`. The error is displayed when the
`<paper-input-container>` is `invalid`.

    <paper-input-container>
      <input pattern="[0-9]*">
      <paper-input-error slot="add-on">Only numbers are
allowed!</paper-input-error>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
`--paper-input-error` | Mixin applied to the error | `{}`
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,
  is: 'paper-input-error',
  behaviors: [_paper_input_addon_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperInputAddonBehavior"]],
  properties: {
    /**
     * True if the error is showing.
     */
    invalid: {
      readOnly: true,
      reflectToAttribute: true,
      type: Boolean
    }
  },

  /**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */
  update: function (state) {
    this._setInvalid(state.invalid);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input.js ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_input_iron_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input.js */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input-behavior.js");
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

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input.js */ "./node_modules/@polymer/paper-dropdown-menu/node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js");
/* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-dropdown-menu` is similar to a native browser select element.
`paper-dropdown-menu` works with selectable content. The currently selected
item is displayed in the control. If no item is selected, the `label` is
displayed instead.

Example:

    <paper-dropdown-menu label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

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
`--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`

You can also use any of the `paper-input-container` and `paper-menu-button`
style mixins and custom properties to style the internal input and menu button
respectively.

@group Paper Elements
@element paper-dropdown-menu
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__["html"]`
    <style include="paper-dropdown-menu-shared-styles"></style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <paper-ripple></paper-ripple>
        <!-- paper-input has type="text" for a11y, do not remove -->
        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">
          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->
          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>
        </paper-input>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,
  is: 'paper-dropdown-menu',
  behaviors: [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__["IronControlState"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__["IronValidatableBehavior"]],
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
     * a child with slot `dropdown-content`, and that child triggers an
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
      notify: true
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
     * The error message to display when invalid.
     */
    errorMessage: {
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

    /**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * Whether focus should be restored to the dropdown when the menu closes.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: true
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
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__["dom"])(this.$.content).getDistributedNodes();

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
    if (_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__["findOriginalTarget"](event) === this) {
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
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbn45ODI5NDgzYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1hZGRvbi1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQtY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogVXNlIGBQb2x5bWVyLlBhcGVySW5wdXRBZGRvbkJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gYWRkLW9uIGZvclxuICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gQSBhZGQtb24gYXBwZWFycyBiZWxvdyB0aGUgaW5wdXQsIGFuZCBtYXkgZGlzcGxheVxuICogaW5mb3JtYXRpb24gYmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIGFuZCB2YWxpZGl0eSBzdWNoIGFzIGEgY2hhcmFjdGVyIGNvdW50ZXJcbiAqIG9yIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklucHV0QWRkb25CZWhhdmlvciA9IHtcbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlyZSgnYWRkb24tYXR0YWNoZWQnKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIGNhbGxlZCBieSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdoZW4gdGhlIGlucHV0IHZhbHVlIG9yXG4gICAqIHZhbGlkaXR5IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgIGludmFsaWQ6IGJvb2xlYW4sXG4gICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAgICogfX0gc3RhdGUgLVxuICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge31cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUtleXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge1BvbHltZXJFbGVtZW50fSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbi8vIEdlbmVyYXRlIHVuaXF1ZSwgbW9ub3RvbmljYWxseSBpbmNyZWFzaW5nIElEcyBmb3IgbGFiZWxzIChuZWVkZWQgYnlcbi8vIGFyaWEtbGFiZWxsZWRieSkgYW5kIGFkZC1vbnMuXG5leHBvcnQgY29uc3QgUGFwZXJJbnB1dEhlbHBlciA9IHt9O1xuXG5QYXBlcklucHV0SGVscGVyLk5leHRMYWJlbElEID0gMTtcblBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQgPSAxO1xuUGFwZXJJbnB1dEhlbHBlci5OZXh0SW5wdXRJRCA9IDE7XG5cbi8qKlxuICogVXNlIGBQYXBlcklucHV0QmVoYXZpb3JgIHRvIGltcGxlbWVudCBpbnB1dHMgd2l0aCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLlxuICogVGhpcyBiZWhhdmlvciBpcyBpbXBsZW1lbnRlZCBieSBgPHBhcGVyLWlucHV0PmAuIEl0IGV4cG9zZXMgYSBudW1iZXIgb2ZcbiAqIHByb3BlcnRpZXMgZnJvbSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGFuZCBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAgYW5kXG4gKiB0aGV5IHNob3VsZCBiZSBib3VuZCBpbiB5b3VyIHRlbXBsYXRlLlxuICpcbiAqIFRoZSBpbnB1dCBlbGVtZW50IGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgYGlucHV0RWxlbWVudGAgcHJvcGVydHkgaWYgeW91IG5lZWRcbiAqIHRvIGFjY2VzcyBwcm9wZXJ0aWVzIG9yIG1ldGhvZHMgdGhhdCBhcmUgbm90IGV4cG9zZWQuXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySW5wdXRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJJbnB1dEJlaGF2aW9ySW1wbCA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgaW5wdXQgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBmb3IgdGhpcyBpbnB1dC4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIGA8bGFiZWw+YCdzIGNvbnRlbnQgYW5kIGBoaWRkZW5gIHByb3BlcnR5LCBlLmcuXG4gICAgICogYDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiPltbbGFiZWxdXTwvbGFiZWw+YCBpbiB5b3VyIGB0ZW1wbGF0ZWBcbiAgICAgKi9cbiAgICBsYWJlbDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgKiB0aGUgYDxpcm9uLWlucHV0PmAncyBgYmluZFZhbHVlYFxuICAgICAqIHByb3BlcnR5LCBvciB0aGUgdmFsdWUgcHJvcGVydHkgb2YgeW91ciBpbnB1dCB0aGF0IGlzIGBub3RpZnk6dHJ1ZWAuXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdmFsdWU6IHtub3RpZnk6IHRydWUsIHR5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgaW5wdXQuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG9cbiAgICAgKiBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG9cbiAgICAgKiBib3RoIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYW5kIHRoZSBpbnB1dCdzIGBkaXNhYmxlZGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkLiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yXG4gICAgICogdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZCB0aGlzIHRvIGJvdGggdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGFuZCB0aGUgaW5wdXQncyBgaW52YWxpZGAgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGUgYGludmFsaWRgIGF0dHJpYnV0ZSBpcyBtYW5hZ2VkXG4gICAgICogYXV0b21hdGljYWxseSwgd2hpY2ggY2FuIGNsb2JiZXIgYXR0ZW1wdHMgdG8gbWFuYWdlIGl0IG1hbnVhbGx5LlxuICAgICAqL1xuICAgIGludmFsaWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byBzcGVjaWZ5IHRoZSBwYXR0ZXJuIGFsbG93ZWQgYnkgYHByZXZlbnRJbnZhbGlkSW5wdXRgLiBJZlxuICAgICAqIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhbGxvd2VkUGF0dGVybmBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhbGxvd2VkUGF0dGVybjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgaW5wdXQuIFRoZSBzdXBwb3J0ZWQgdHlwZXMgYXJlIHRoZVxuICAgICAqIFtuYXRpdmUgaW5wdXQnc1xuICAgICAqIHR5cGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV88aW5wdXQ+X3R5cGVzKS5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSAoUG9seW1lciAxKSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBvclxuICAgICAqIChQb2x5bWVyIDIpXG4gICAgICogYDxpcm9uLWlucHV0PmAncyBgdHlwZWAgcHJvcGVydHkuXG4gICAgICovXG4gICAgdHlwZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YWxpc3Qgb2YgdGhlIGlucHV0IChpZiBhbnkpLiBUaGlzIHNob3VsZCBtYXRjaCB0aGUgaWQgb2YgYW5cbiAgICAgKiBleGlzdGluZyBgPGRhdGFsaXN0PmAuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50XG4gICAgICogeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXRcbiAgICAgKiBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGxpc3RgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGxpc3Q6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQSBwYXR0ZXJuIHRvIHZhbGlkYXRlIHRoZSBgaW5wdXRgIHdpdGguIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kXG4gICAgICogdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHBhdHRlcm5gIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHBhdHRlcm46IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gbWFyayB0aGUgaW5wdXQgYXMgcmVxdWlyZWQuIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kXG4gICAgICogdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlcXVpcmVkYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICByZXF1aXJlZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGludmFsaWQuIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LFxuICAgICAqIGJpbmQgdGhpcyB0byB0aGUgYDxwYXBlci1pbnB1dC1lcnJvcj5gJ3MgY29udGVudCwgaWYgdXNpbmcuXG4gICAgICovXG4gICAgZXJyb3JNZXNzYWdlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIHNob3cgYSBjaGFyYWN0ZXIgY291bnRlci5cbiAgICAgKi9cbiAgICBjaGFyQ291bnRlcjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoZSBmbG9hdGluZyBsYWJlbC4gSWYgeW91J3JlIHVzaW5nXG4gICAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmRcbiAgICAgKiB0aGlzIHRvIHRoZSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYG5vTGFiZWxGbG9hdGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbm9MYWJlbEZsb2F0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3JcbiAgICAgKiB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZSBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBhbHdheXNGbG9hdExhYmVsYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhbHdheXNGbG9hdExhYmVsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlLiBJZiB5b3UncmUgdXNpbmdcbiAgICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2UgZWxlbWVudCwgYmluZFxuICAgICAqIHRoaXMgdG8gdGhlIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYXV0b1ZhbGlkYXRlYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhdXRvVmFsaWRhdGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgdmFsaWRhdG9yIHRvIHVzZS4gSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0b1xuICAgICAqIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlIGVsZW1lbnQsIGJpbmQgdGhpcyB0b1xuICAgICAqIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgdmFsaWRhdG9yYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICB2YWxpZGF0b3I6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLy8gSFRNTElucHV0RWxlbWVudCBhdHRyaWJ1dGVzIGZvciBiaW5kaW5nIGlmIG5lZWRlZFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYGF1dG9jb21wbGV0ZWBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhdXRvY29tcGxldGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb2ZmJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2ZvY3VzYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGF1dG9mb2N1czoge3R5cGU6IEJvb2xlYW4sIG9ic2VydmVyOiAnX2F1dG9mb2N1c0NoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBpbnB1dG1vZGVgXG4gICAgICogcHJvcGVydHkuXG4gICAgICovXG4gICAgaW5wdXRtb2RlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG1pbmxlbmd0aGBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBtaW5sZW5ndGg6IHt0eXBlOiBOdW1iZXJ9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgbWF4bGVuZ3RoYFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG1heGxlbmd0aDoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSAobnVtZXJpYyBvciBkYXRlLXRpbWUpIGlucHV0IHZhbHVlLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtaW5gIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG1pbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSAobnVtZXJpYyBvciBkYXRlLXRpbWUpIGlucHV0IHZhbHVlLlxuICAgICAqIENhbiBiZSBhIFN0cmluZyAoZS5nLiBgXCIyMDAwLTAxLTAxXCJgKSBvciBhIE51bWJlciAoZS5nLiBgMmApLlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtYXhgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG1heDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBMaW1pdHMgdGhlIG51bWVyaWMgb3IgZGF0ZS10aW1lIGluY3JlbWVudHMuXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHN0ZXBgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHN0ZXA6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYG5hbWVgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQSBwbGFjZWhvbGRlciBzdHJpbmcgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsLiBJZiB0aGlzIGlzIHNldCwgdGhlIGxhYmVsXG4gICAgICogd2lsbCBhbHdheXMgZmxvYXQuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIC8vIG5lZWQgdG8gc2V0IGEgZGVmYXVsdCBzbyBfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwgaXMgcnVuXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91J3JlIHVzaW5nIFBhcGVySW5wdXRCZWhhdmlvciB0byBpbXBsZW1lbnQgeW91ciBvd24gcGFwZXItaW5wdXQtbGlrZVxuICAgICAqIGVsZW1lbnQsIGJpbmQgdGhpcyB0byB0aGUgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIj5gJ3MgYHJlYWRvbmx5YFxuICAgICAqIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBzaXplYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBzaXplOiB7dHlwZTogTnVtYmVyfSxcblxuICAgIC8vIE5vbnN0YW5kYXJkIGF0dHJpYnV0ZXMgZm9yIGJpbmRpbmcgaWYgbmVlZGVkXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYXV0b2NhcGl0YWxpemVgXG4gICAgICogcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGF1dG9jYXBpdGFsaXplOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ25vbmUnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvY29ycmVjdGBcbiAgICAgKiBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhdXRvY29ycmVjdDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvZmYnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBhdXRvc2F2ZWBcbiAgICAgKiBwcm9wZXJ0eSwgdXNlZCB3aXRoIHR5cGU9c2VhcmNoLlxuICAgICAqL1xuICAgIGF1dG9zYXZlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSdyZSB1c2luZyBQYXBlcklucHV0QmVoYXZpb3IgdG8gaW1wbGVtZW50IHlvdXIgb3duIHBhcGVyLWlucHV0LWxpa2VcbiAgICAgKiBlbGVtZW50LCBiaW5kIHRoaXMgdG8gdGhlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGByZXN1bHRzYCBwcm9wZXJ0eSxcbiAgICAgKiB1c2VkIHdpdGggdHlwZT1zZWFyY2guXG4gICAgICovXG4gICAgcmVzdWx0czoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZSBgPGlucHV0IGlzPVwiaXJvbi1pbnB1dFwiPmAncyBgYWNjZXB0YCBwcm9wZXJ0eSxcbiAgICAgKiB1c2VkIHdpdGggdHlwZT1maWxlLlxuICAgICAqL1xuICAgIGFjY2VwdDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3UncmUgdXNpbmcgUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGltcGxlbWVudCB5b3VyIG93biBwYXBlci1pbnB1dC1saWtlXG4gICAgICogZWxlbWVudCwgYmluZCB0aGlzIHRvIHRoZWA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCI+YCdzIGBtdWx0aXBsZWAgcHJvcGVydHksXG4gICAgICogdXNlZCB3aXRoIHR5cGU9ZmlsZS5cbiAgICAgKi9cbiAgICBtdWx0aXBsZToge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgX2FyaWFEZXNjcmliZWRCeToge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIF9hcmlhTGFiZWxsZWRCeToge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKiBAcHJpdmF0ZSAqL1xuICAgIF9pbnB1dElkOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9XG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ2FkZG9uLWF0dGFjaGVkJzogJ19vbkFkZG9uQXR0YWNoZWQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7IU9iamVjdH1cbiAgICovXG4gIGtleUJpbmRpbmdzOiB7J3NoaWZ0K3RhYjprZXlkb3duJzogJ19vblNoaWZ0VGFiRG93bid9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3RhYmluZGV4OiAwfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUhUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICAvLyBDaHJvbWUgZ2VuZXJhdGVzIGF1ZGl0IGVycm9ycyBpZiBhbiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCI+IGhhcyBhXG4gICAgLy8gZHVwbGljYXRlIElELCB3aGljaCBpcyBhbG1vc3QgYWx3YXlzIHRydWUgaW4gU2hhZHkgRE9NLiBHZW5lcmF0ZVxuICAgIC8vIGEgdW5pcXVlIElEIGluc3RlYWQuXG4gICAgaWYgKCF0aGlzLiQpIHtcbiAgICAgIHRoaXMuJCA9IHt9XG4gICAgfVxuICAgIGlmICghdGhpcy4kLmlucHV0KSB7XG4gICAgICB0aGlzLl9nZW5lcmF0ZUlucHV0SWQoKTtcbiAgICAgIHRoaXMuJC5pbnB1dCA9IHRoaXMuJCQoJyMnICsgdGhpcy5faW5wdXRJZCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50O1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVGhlc2UgdHlwZXMgaGF2ZSBzb21lIGRlZmF1bHQgcGxhY2Vob2xkZXIgdGV4dDsgb3ZlcmxhcHBpbmdcbiAgICAvLyB0aGUgbGFiZWwgb24gdG9wIG9mIGl0IGxvb2tzIHRlcnJpYmxlLiBBdXRvLWZsb2F0IHRoZSBsYWJlbCBpbiB0aGlzIGNhc2UuXG4gICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQgPVxuICAgICAgICBbJ2RhdGUnLCAnZGF0ZXRpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnbW9udGgnLCAndGltZScsICd3ZWVrJywgJ2ZpbGUnXTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVBcmlhTGFiZWxsZWRCeSgpO1xuXG4gICAgLy8gSW4gdGhlIDIuMCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50LCB0aGlzIGlzIGhhbmRsZWQgaW4gYG9uSXJvbklucHV0UmVhZHlgLFxuICAgIC8vIGkuZS4gYWZ0ZXIgdGhlIG5hdGl2ZSBpbnB1dCBoYXMgZmluaXNoZWQgZGlzdHJpYnV0aW5nLiBJbiB0aGUgMS4wXG4gICAgLy8gdmVyc2lvbiwgdGhlIGlucHV0IGlzIGluIHRoZSBzaGFkb3cgdHJlZSwgc28gaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cbiAgICBpZiAoIVBvbHltZXJFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy5pbnB1dEVsZW1lbnQudHlwZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBfYXBwZW5kU3RyaW5nV2l0aFNwYWNlOiBmdW5jdGlvbihzdHIsIG1vcmUpIHtcbiAgICBpZiAoc3RyKSB7XG4gICAgICBzdHIgPSBzdHIgKyAnICcgKyBtb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBtb3JlO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9LFxuXG4gIF9vbkFkZG9uQXR0YWNoZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGRvbShldmVudCkucm9vdFRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmlkKSB7XG4gICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPVxuICAgICAgICAgIHRoaXMuX2FwcGVuZFN0cmluZ1dpdGhTcGFjZSh0aGlzLl9hcmlhRGVzY3JpYmVkQnksIHRhcmdldC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpZCA9ICdwYXBlci1pbnB1dC1hZGQtb24tJyArIFBhcGVySW5wdXRIZWxwZXIuTmV4dEFkZG9uSUQrKztcbiAgICAgIHRhcmdldC5pZCA9IGlkO1xuICAgICAgdGhpcy5fYXJpYURlc2NyaWJlZEJ5ID1cbiAgICAgICAgICB0aGlzLl9hcHBlbmRTdHJpbmdXaXRoU3BhY2UodGhpcy5fYXJpYURlc2NyaWJlZEJ5LCBpZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHNldHMgYW4gZXJyb3Igc3R5bGUgaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgdmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3J3YXJkIGZvY3VzIHRvIGlucHV0RWxlbWVudC4gT3ZlcnJpZGVuIGZyb20gSXJvbkNvbnRyb2xTdGF0ZS5cbiAgICovXG4gIF9mb2N1c0JsdXJIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25Db250cm9sU3RhdGUuX2ZvY3VzQmx1ckhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG5cbiAgICAvLyBGb3J3YXJkIHRoZSBmb2N1cyB0byB0aGUgbmVzdGVkIGlucHV0LlxuICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIXRoaXMuX3NoaWZ0VGFiUHJlc3NlZCAmJiB0aGlzLl9mb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBzaGlmdCt0YWIga2V5cHJlc3MgaXMgZGV0ZWN0ZWQgYnkgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uU2hpZnRUYWJEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBvbGRUYWJJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIG9sZFRhYkluZGV4KTtcbiAgICAgIHRoaXMuX3NoaWZ0VGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0sIDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJZiBgYXV0b1ZhbGlkYXRlYCBpcyB0cnVlLCB0aGVuIHZhbGlkYXRlcyB0aGUgZWxlbWVudC5cbiAgICovXG4gIF9oYW5kbGVBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSlcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzdG9yZXMgdGhlIGN1cnNvciB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24gYWZ0ZXIgdXBkYXRpbmcgdGhlIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHNhdmVkLlxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRQcmVzZXJ2ZUNhcmV0OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIC8vIE5vdCBhbGwgZWxlbWVudHMgbWlnaHQgaGF2ZSBzZWxlY3Rpb24sIGFuZCBldmVuIGlmIHRoZXkgaGF2ZSB0aGVcbiAgICAvLyByaWdodCBwcm9wZXJ0aWVzLCBhY2Nlc3NpbmcgdGhlbSBtaWdodCB0aHJvdyBhbiBleGNlcHRpb24gKGxpa2UgZm9yXG4gICAgLy8gPGlucHV0IHR5cGU9bnVtYmVyPilcbiAgICB0cnkge1xuICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgIC8vIFRoZSBjdXJzb3IgYXV0b21hdGljYWxseSBqdW1wcyB0byB0aGUgZW5kIGFmdGVyIHJlLXNldHRpbmcgdGhlIHZhbHVlLFxuICAgICAgLy8gc28gcmVzdG9yZSBpdCB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc3RhcnQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSnVzdCBzZXQgdGhlIHZhbHVlIGFuZCBnaXZlIHVwIG9uIHRoZSBjYXJldC5cbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsOiBmdW5jdGlvbihhbHdheXNGbG9hdExhYmVsLCBwbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBwbGFjZWhvbGRlciB8fCBhbHdheXNGbG9hdExhYmVsO1xuICB9LFxuXG4gIF91cGRhdGVBcmlhTGFiZWxsZWRCeTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxhYmVsID0gZG9tKHRoaXMucm9vdCkucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGFiZWxsZWRCeTtcbiAgICBpZiAobGFiZWwuaWQpIHtcbiAgICAgIGxhYmVsbGVkQnkgPSBsYWJlbC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxsZWRCeSA9ICdwYXBlci1pbnB1dC1sYWJlbC0nICsgUGFwZXJJbnB1dEhlbHBlci5OZXh0TGFiZWxJRCsrO1xuICAgICAgbGFiZWwuaWQgPSBsYWJlbGxlZEJ5O1xuICAgIH1cbiAgICB0aGlzLl9hcmlhTGFiZWxsZWRCeSA9IGxhYmVsbGVkQnk7XG4gIH0sXG5cbiAgX2dlbmVyYXRlSW5wdXRJZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9pbnB1dElkIHx8IHRoaXMuX2lucHV0SWQgPT09ICcnKSB7XG4gICAgICB0aGlzLl9pbnB1dElkID0gJ2lucHV0LScgKyBQYXBlcklucHV0SGVscGVyLk5leHRJbnB1dElEKys7XG4gICAgfVxuICB9LFxuXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBJbiB0aGUgU2hhZG93IERPTSwgdGhlIGBjaGFuZ2VgIGV2ZW50IGlzIG5vdCBsZWFrZWQgaW50byB0aGVcbiAgICAvLyBhbmNlc3RvciB0cmVlLCBzbyB3ZSBtdXN0IGRvIHRoaXMgbWFudWFsbHkuXG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9zaGFkb3cvI2V2ZW50cy10aGF0LWFyZS1ub3QtbGVha2VkLWludG8tYW5jZXN0b3ItdHJlZXMuXG4gICAgaWYgKHRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgdGhpcy5maXJlKFxuICAgICAgICAgIGV2ZW50LnR5cGUsXG4gICAgICAgICAge3NvdXJjZUV2ZW50OiBldmVudH0sXG4gICAgICAgICAge25vZGU6IHRoaXMsIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsIGNhbmNlbGFibGU6IGV2ZW50LmNhbmNlbGFibGV9KTtcbiAgICB9XG4gIH0sXG5cbiAgX2F1dG9mb2N1c0NoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCByZXNwZWN0IHRoZSBhdXRvZm9jdXMgYXR0cmlidXRlIGlmIGl0J3MgYXBwbGllZCBhZnRlclxuICAgIC8vIHRoZSBwYWdlIGlzIGxvYWRlZCAoQ2hyb21lL1dlYktpdCBkbyByZXNwZWN0IGl0KSwgcHJldmVudGluZyBhblxuICAgIC8vIGF1dG9mb2N1cyBhdHRyaWJ1dGUgc3BlY2lmaWVkIGluIG1hcmt1cCBmcm9tIHRha2luZyBlZmZlY3Qgd2hlbiB0aGVcbiAgICAvLyBlbGVtZW50IGlzIHVwZ3JhZGVkLiBBcyBhIHdvcmthcm91bmQsIGlmIHRoZSBhdXRvZm9jdXMgcHJvcGVydHkgaXMgc2V0LFxuICAgIC8vIGFuZCB0aGUgZm9jdXMgaGFzbid0IGFscmVhZHkgYmVlbiBtb3ZlZCBlbHNld2hlcmUsIHdlIHRha2UgZm9jdXMuXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICYmIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIC8vIEluIElFIDExLCB0aGUgZGVmYXVsdCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiBiZSB0aGUgcGFnZSdzXG4gICAgICAvLyBvdXRlcm1vc3QgaHRtbCBlbGVtZW50LCBidXQgdGhlcmUgYXJlIGFsc28gY2FzZXMgKHVuZGVyIHRoZVxuICAgICAgLy8gcG9seWZpbGw/KSBpbiB3aGljaCB0aGUgYWN0aXZlRWxlbWVudCBpcyBub3QgYSByZWFsIEhUTUxFbGVtZW50LCBidXRcbiAgICAgIC8vIGp1c3QgYSBwbGFpbiBvYmplY3QuIFdlIGlkZW50aWZ5IHRoZSBsYXR0ZXIgY2FzZSBhcyBoYXZpbmcgbm8gdmFsaWRcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB2YXIgaXNBY3RpdmVFbGVtZW50VmFsaWQgPSBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIC8vIEhhcyBzb21lIG90aGVyIGVsZW1lbnQgaGFzIGFscmVhZHkgdGFrZW4gdGhlIGZvY3VzP1xuICAgICAgdmFyIGlzU29tZUVsZW1lbnRBY3RpdmUgPSBpc0FjdGl2ZUVsZW1lbnRWYWxpZCAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8qIElFIDExICovXG4gICAgICBpZiAoIWlzU29tZUVsZW1lbnRBY3RpdmUpIHtcbiAgICAgICAgLy8gTm8gc3BlY2lmaWMgZWxlbWVudCBoYXMgdGFrZW4gdGhlIGZvY3VzIHlldCwgc28gd2UgY2FuIHRha2UgaXQuXG4gICAgICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJbnB1dEJlaGF2aW9yID1cbiAgICBbSXJvbkNvbnRyb2xTdGF0ZSwgSXJvbkExMXlLZXlzQmVoYXZpb3IsIFBhcGVySW5wdXRCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbnB1dEFkZG9uQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+YCBpcyBhIGNoYXJhY3RlciBjb3VudGVyIGZvciB1c2Ugd2l0aFxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YC4gSXQgc2hvd3MgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGVudGVyZWQgaW4gdGhlXG5pbnB1dCBhbmQgdGhlIG1heCBsZW5ndGggaWYgaXQgaXMgc3BlY2lmaWVkLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxpbnB1dCBtYXhsZW5ndGg9XCIyMFwiPlxuICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlcj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBtaXhpbiBpcyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNoYXItY291bnRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBlbGVtZW50IHwgYHt9YFxuKi9cblBvbHltZXIoe1xuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY2hhci1jb3VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpkaXIocnRsKSkge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNwYW4+W1tfY2hhckNvdW50ZXJTdHJdXTwvc3Bhbj5cbmAsXG5cbiAgaXM6ICdwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXInLFxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QWRkb25CZWhhdmlvcl0sXG4gIHByb3BlcnRpZXM6IHtfY2hhckNvdW50ZXJTdHI6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnMCd9fSxcblxuICAvKipcbiAgICogVGhpcyBvdmVycmlkZXMgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpbiBQYXBlcklucHV0QWRkb25CZWhhdmlvci5cbiAgICogQHBhcmFtIHt7XG4gICAqICAgaW5wdXRFbGVtZW50OiAoRWxlbWVudHx1bmRlZmluZWQpLFxuICAgKiAgIHZhbHVlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAqICAgaW52YWxpZDogYm9vbGVhblxuICAgKiB9fSBzdGF0ZSAtXG4gICAqICAgICBpbnB1dEVsZW1lbnQ6IFRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiAgICAgdmFsdWU6IFRoZSBpbnB1dCB2YWx1ZS5cbiAgICogICAgIGludmFsaWQ6IFRydWUgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAqL1xuICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGF0ZS52YWx1ZSA9IHN0YXRlLnZhbHVlIHx8ICcnO1xuXG4gICAgdmFyIGNvdW50ZXIgPSBzdGF0ZS52YWx1ZS50b1N0cmluZygpLmxlbmd0aC50b1N0cmluZygpO1xuXG4gICAgaWYgKHN0YXRlLmlucHV0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKSB7XG4gICAgICBjb3VudGVyICs9ICcvJyArIHN0YXRlLmlucHV0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpO1xuICAgIH1cblxuICAgIHRoaXMuX2NoYXJDb3VudGVyU3RyID0gY291bnRlcjtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtkYXNoVG9DYW1lbENhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gICAgaHRtbCB7XG4gICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiB0byBtYWtlIGEgc3RhY2tpbmcgY29udGV4dCAqL1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtYWxpZ24sIGJvdHRvbSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgfTtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG4vKlxuYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpcyBhIGNvbnRhaW5lciBmb3IgYSBgPGxhYmVsPmAsIGFuIGA8aXJvbi1pbnB1dD5gIG9yXG5gPHRleHRhcmVhPmAgYW5kIG9wdGlvbmFsIGFkZC1vbiBlbGVtZW50cyBzdWNoIGFzIGFuIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyXG5jb3VudGVyLCB1c2VkIHRvIGltcGxlbWVudCBNYXRlcmlhbCBEZXNpZ24gdGV4dCBmaWVsZHMuXG5cbkZvciBleGFtcGxlOlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgPGlyb24taW5wdXQgc2xvdD1cImlucHV0XCI+XG4gICAgICAgIDxpbnB1dD5cbiAgICAgIDwvaXJvbi1pbnB1dD5cbiAgICAgIC8vIEluIFBvbHltZXIgMS4wLCB5b3Ugd291bGQgdXNlIGA8aW5wdXQgaXM9XCJpcm9uLWlucHV0XCIgc2xvdD1cImlucHV0XCI+YFxuaW5zdGVhZCBvZiB0aGUgYWJvdmUuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbllvdSBjYW4gc3R5bGUgdGhlIG5lc3RlZCBgPGlucHV0PmAgaG93ZXZlciB5b3Ugd2FudDsgaWYgeW91IHdhbnQgaXQgdG8gbG9vayBsaWtlXG5hIE1hdGVyaWFsIERlc2lnbiBpbnB1dCwgeW91IGNhbiBzdHlsZSBpdCB3aXRoIHRoZVxuLS1wYXBlci1pbnB1dC1jb250YWluZXItc2hhcmVkLWlucHV0LXN0eWxlIG1peGluLlxuXG5EbyBub3Qgd3JhcCBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGFyb3VuZCBlbGVtZW50cyB0aGF0IGFscmVhZHkgaW5jbHVkZSBpdCxcbnN1Y2ggYXMgYDxwYXBlci1pbnB1dD5gLiBEb2luZyBzbyBtYXkgY2F1c2UgZXZlbnRzIHRvIGJvdW5jZSBpbmZpbml0ZWx5IGJldHdlZW5cbnRoZSBjb250YWluZXIgYW5kIGl0cyBjb250YWluZWQgZWxlbWVudC5cblxuIyMjIExpc3RlbmluZyBmb3IgaW5wdXQgY2hhbmdlc1xuXG5CeSBkZWZhdWx0LCBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzIG9uIHRoZSBgYmluZC12YWx1ZWAgYXR0cmlidXRlIG9uIGl0cyBjaGlsZHJlblxubm9kZXMgYW5kIHBlcmZvcm0gdGFza3Mgc3VjaCBhcyBhdXRvLXZhbGlkYXRpbmcgYW5kIGxhYmVsIHN0eWxpbmcgd2hlbiB0aGVcbmBiaW5kLXZhbHVlYCBjaGFuZ2VzLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGUgYXR0cmlidXRlIGl0IGxpc3RlbnMgdG8gd2l0aCB0aGVcbmBhdHRyLWZvci12YWx1ZWAgYXR0cmlidXRlLlxuXG4jIyMgVXNpbmcgYSBjdXN0b20gaW5wdXQgZWxlbWVudFxuXG5Zb3UgY2FuIHVzZSBhIGN1c3RvbSBpbnB1dCBlbGVtZW50IGluIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCwgZm9yIGV4YW1wbGVcbnRvIGltcGxlbWVudCBhIGNvbXBvdW5kIGlucHV0IGZpZWxkIGxpa2UgYSBzb2NpYWwgc2VjdXJpdHkgbnVtYmVyIGlucHV0LiBUaGVcbmN1c3RvbSBpbnB1dCBlbGVtZW50IHNob3VsZCBoYXZlIHRoZSBgcGFwZXItaW5wdXQtaW5wdXRgIGNsYXNzLCBoYXZlIGFcbmBub3RpZnk6dHJ1ZWAgdmFsdWUgcHJvcGVydHkgYW5kIG9wdGlvbmFsbHkgaW1wbGVtZW50c1xuYFBvbHltZXIuSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgIGlmIGl0IGlzIHZhbGlkYXRhYmxlLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBhdHRyLWZvci12YWx1ZT1cInNzbi12YWx1ZVwiPlxuICAgICAgPGxhYmVsIHNsb3Q9XCJsYWJlbFwiPlNvY2lhbCBzZWN1cml0eSBudW1iZXI8L2xhYmVsPlxuICAgICAgPHNzbi1pbnB1dCBzbG90PVwiaW5wdXRcIiBjbGFzcz1cInBhcGVyLWlucHV0LWlucHV0XCI+PC9zc24taW5wdXQ+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cblxuSWYgeW91J3JlIHVzaW5nIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpbXBlcmF0aXZlbHksIGl0J3MgaW1wb3J0YW50IHRvIG1ha2VcbnN1cmUgdGhhdCB5b3UgYXR0YWNoIGl0cyBjaGlsZHJlbiAodGhlIGBpcm9uLWlucHV0YCBhbmQgdGhlIG9wdGlvbmFsIGBsYWJlbGApXG5iZWZvcmUgeW91IGF0dGFjaCB0aGUgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCBpdHNlbGYsIHNvIHRoYXQgaXQgY2FuIGJlIHNldCB1cFxuY29ycmVjdGx5LlxuXG4jIyMgVmFsaWRhdGlvblxuXG5JZiB0aGUgYGF1dG8tdmFsaWRhdGVgIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBpbnB1dCBjb250YWluZXIgd2lsbCB2YWxpZGF0ZSB0aGVcbmlucHV0IGFuZCB1cGRhdGUgdGhlIGNvbnRhaW5lciBzdHlsaW5nIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG5cbiMjIyBBZGQtb25zXG5cbkFkZC1vbnMgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCB3aXRoIHRoZSBgYWRkLW9uYFxuYXR0cmlidXRlIGFuZCBpbXBsZW1lbnRzIHRoZSBgUG9seW1lci5QYXBlcklucHV0QWRkb25CZWhhdmlvcmAgYmVoYXZpb3IuIFRoZXlcbmFyZSBub3RpZmllZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBvciB2YWxpZGl0eSBjaGFuZ2VzLCBhbmQgbWF5IGltcGxlbWVudFxuZnVuY3Rpb25hbGl0eSBzdWNoIGFzIGVycm9yIG1lc3NhZ2VzIG9yIGNoYXJhY3RlciBjb3VudGVycy4gVGhleSBhcHBlYXIgYXQgdGhlXG5ib3R0b20gb2YgdGhlIGlucHV0LlxuXG4jIyMgUHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG5UaGVzZSBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIHdpdGggdGhlIGBwcmVmaXhgXG5vciBgc3VmZml4YCBhdHRyaWJ1dGUsIGFuZCBhcmUgZGlzcGxheWVkIGlubGluZSB3aXRoIHRoZSBpbnB1dCwgYmVmb3JlIG9yIGFmdGVyLlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgICAgIDxkaXYgc2xvdD1cInByZWZpeFwiPiQ8L2Rpdj5cbiAgICAgIDxsYWJlbCBzbG90PVwibGFiZWxcIj5Ub3RhbDwvbGFiZWw+XG4gICAgICA8aXJvbi1pbnB1dCBzbG90PVwiaW5wdXRcIj5cbiAgICAgICAgPGlucHV0PlxuICAgICAgPC9pcm9uLWlucHV0PlxuICAgICAgLy8gSW4gUG9seW1lciAxLjAsIHlvdSB3b3VsZCB1c2UgYDxpbnB1dCBpcz1cImlyb24taW5wdXRcIiBzbG90PVwiaW5wdXRcIj5gXG5pbnN0ZWFkIG9mIHRoZSBhYm92ZS4gPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIlxuaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvcmAgfCBMYWJlbCBhbmQgdW5kZXJsaW5lIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBmb2N1c2VkIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3JgIHwgTGFiZWwgYW5kIHVuZGVybGluZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yYCB8IExhYmVsIGFuZCB1bmRlcmxpbmUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgaXMgaW52YWxpZCB8IGAtLWVycm9yLWNvbG9yYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yYCB8IElucHV0IGZvcmVncm91bmQgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGFpbmVyIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciB3aGVuIGl0J3MgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWxgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZm9jdXNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGFiZWwgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZ2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIGZsb2F0aW5nIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWFsaWduYCB8IFRoZSB2ZXJ0aWNhbC1hbGlnbiBwcm9wZXJ0eSBvZiB0aGUgaW5wdXQgfCBgYm90dG9tYFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC1mb2N1c2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGZvY3VzZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtaW52YWxpZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbnB1dCB3aGVuIGludmFsaWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IHNwaW5uZXIgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHdlYmtpdCBjbGVhciBidXR0b24gfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3JgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgd2Via2l0IGNhbGVuZGFyIHBpY2tlciBpbmRpY2F0b3IgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgY2xlYXIgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgfCBge31gXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lLWZvY3VzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHVuZGVybGluZSB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkIHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB1bmRlcmxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1pbnB1dC1wcmVmaXhgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXQgcHJlZml4IHwgYHt9YFxuYC0tcGFwZXItaW5wdXQtc3VmZml4YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IHN1ZmZpeCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGlzIGBkaXNwbGF5OmJsb2NrYCBieSBkZWZhdWx0LCBidXQgeW91IGNhbiBzZXQgdGhlIGBpbmxpbmVgXG5hdHRyaWJ1dGUgdG8gbWFrZSBpdCBgZGlzcGxheTppbmxpbmUtYmxvY2tgLlxuKi9cblBvbHltZXIoe1xuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW5saW5lXSkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuMzM7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuZmxvYXRlZC1sYWJlbC1wbGFjZWhvbGRlciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5mb2N1c2VkLWxpbmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLDEsMSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZS1mb2N1cztcbiAgICAgIH1cblxuICAgICAgLnVuZGVybGluZS5pcy1oaWdobGlnaHRlZCAuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRyYW5zaXRpb24tZWFzaW5nO1xuICAgICAgfVxuXG4gICAgICAudW5kZXJsaW5lLmlzLWludmFsaWQgLmZvY3VzZWQtbGluZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWludmFsaWQtY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgLnVuZm9jdXNlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB3aWR0aCAwLjI1cztcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgIC8qIEZpeCBmb3Igc2FmYXJpIG5vdCBmb2N1c2luZyAwLWhlaWdodCBkYXRlL3RpbWUgaW5wdXRzIHdpdGggLXdlYmtpdC1hcHBlcmFuY2U6IG5vbmU7ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10cmFuc2l0aW9uLWVhc2luZztcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtZmxvYXRpbmcgOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWZsb2F0aW5nIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1JSkgc2NhbGUoMC43NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzUlKSBzY2FsZSgwLjc1KTtcblxuICAgICAgICAvKiBTaW5jZSB3ZSBzY2FsZSB0byA3NS8xMDAgb2YgdGhlIHNpemUsIHdlIGFjdHVhbGx5IGhhdmUgMTAwLzc1IG9mIHRoZVxuICAgICAgICBvcmlnaW5hbCBzcGFjZSBub3cgYXZhaWxhYmxlICovXG4gICAgICAgIHdpZHRoOiAxMzMlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmRpcihydGwpKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgOmhvc3QoOmRpcihydGwpKSAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1mbG9hdGluZyA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWdobGlnaHRlZCA6OnNsb3R0ZWQobGFiZWwpLFxuICAgICAgLmlucHV0LWNvbnRlbnQubGFiZWwtaXMtaGlnaGxpZ2h0ZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1sYWJlbCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWxhYmVsLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZChsYWJlbCksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtbGFiZWwpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnZhbGlkLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudC5sYWJlbC1pcy1oaWRkZW4gOjpzbG90dGVkKGxhYmVsKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmxhYmVsLWlzLWhpZGRlbiA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWxhYmVsKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZChpcm9uLWlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50IDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoLnBhcGVyLWlucHV0LWlucHV0KSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIC8qIFRoZSBhcHBseSBzaGltIGRvZXNuJ3QgYXBwbHkgdGhlIG5lc3RlZCBjb2xvciBjdXN0b20gcHJvcGVydHksXG4gICAgICAgICAgc28gd2UgaGF2ZSB0byByZS1hcHBseSBpdCBoZXJlLiAqL1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0O1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgLmlucHV0LWNvbnRlbnQgOjpzbG90dGVkKGlucHV0KTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtc3Bpbm5lcjtcbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuZm9jdXNlZCA6OnNsb3R0ZWQoaXJvbi1pbnB1dCksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5mb2N1c2VkIDo6c2xvdHRlZChpcm9uLWF1dG9ncm93LXRleHRhcmVhKSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmZvY3VzZWQgOjpzbG90dGVkKC5wYXBlci1pbnB1dC1pbnB1dCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIC5pbnB1dC1jb250ZW50LmlzLWludmFsaWQgOjpzbG90dGVkKGlyb24taW5wdXQpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLmlucHV0LWNvbnRlbnQuaXMtaW52YWxpZCA6OnNsb3R0ZWQoaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSksXG4gICAgICAuaW5wdXQtY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgucGFwZXItaW5wdXQtaW5wdXQpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWludmFsaWQ7XG4gICAgICB9XG5cbiAgICAgIC5wcmVmaXggOjpzbG90dGVkKCopIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4LW5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LXByZWZpeDtcbiAgICAgIH1cblxuICAgICAgLnN1ZmZpeCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1zdWZmaXg7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpcmVmb3ggc2V0cyBhIG1pbi13aWR0aCBvbiB0aGUgaW5wdXQsIHdoaWNoIGNhbiBjYXVzZSBsYXlvdXQgaXNzdWVzICovXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQoaW5wdXQpIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAuaW5wdXQtY29udGVudCA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYWRkLW9uLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hZGQtb24tY29udGVudC5pcy1pbnZhbGlkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgLmFkZC1vbi1jb250ZW50LmlzLWhpZ2hsaWdodGVkIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsb2F0ZWQtbGFiZWwtcGxhY2Vob2xkZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBoaWRkZW49XCJbW25vTGFiZWxGbG9hdF1dXCI+Jm5ic3A7PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmVmaXhcIj48c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90Pjwvc3Bhbj5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW19jb21wdXRlSW5wdXRDb250ZW50Q2xhc3Mobm9MYWJlbEZsb2F0LGFsd2F5c0Zsb2F0TGFiZWwsZm9jdXNlZCxpbnZhbGlkLF9pbnB1dEhhc0NvbnRlbnQpXV1cIiBpZD1cImxhYmVsQW5kSW5wdXRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PC9zbG90PlxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWZmaXhcIj48c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90Pjwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3MkPVwiW1tfY29tcHV0ZVVuZGVybGluZUNsYXNzKGZvY3VzZWQsaW52YWxpZCldXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVuZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9jdXNlZC1saW5lXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzJD1cIltbX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzcyhmb2N1c2VkLGludmFsaWQpXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJhZGQtb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItaW5wdXQtY29udGFpbmVyJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIFRoZSBsYWJlbCBkaXNhcHBlYXJzIHdoZW4gdGhlXG4gICAgICogaW5wdXQgdmFsdWUgaXMgbm90IG51bGwuXG4gICAgICovXG4gICAgbm9MYWJlbEZsb2F0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAgICovXG4gICAgYWx3YXlzRmxvYXRMYWJlbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXR0cmlidXRlIHRvIGxpc3RlbiBmb3IgdmFsdWUgY2hhbmdlcyBvbi5cbiAgICAgKi9cbiAgICBhdHRyRm9yVmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYmluZC12YWx1ZSd9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYXV0by12YWxpZGF0ZSB0aGUgaW5wdXQgdmFsdWUgd2hlbiBpdCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBpcyBpbnZhbGlkLiBUaGlzIHByb3BlcnR5IGlzIHNldCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlXG4gICAgICogaW5wdXQgdmFsdWUgY2hhbmdlcyBpZiBhdXRvLXZhbGlkYXRpbmcsIG9yIHdoZW4gdGhlIGBpcm9uLWlucHV0LXZhbGlkYXRlYFxuICAgICAqIGV2ZW50IGlzIGhlYXJkIGZyb20gYSBjaGlsZC5cbiAgICAgKi9cbiAgICBpbnZhbGlkOiB7b2JzZXJ2ZXI6ICdfaW52YWxpZENoYW5nZWQnLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgaW5wdXQgaGFzIGZvY3VzLlxuICAgICAqL1xuICAgIGZvY3VzZWQ6IHtyZWFkT25seTogdHJ1ZSwgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgX2FkZG9uczoge1xuICAgICAgdHlwZTogQXJyYXlcbiAgICAgIC8vIGRvIG5vdCBzZXQgYSBkZWZhdWx0IHZhbHVlIGhlcmUgaW50ZW50aW9uYWxseSAtIGl0IHdpbGwgYmUgaW5pdGlhbGl6ZWRcbiAgICAgIC8vIGxhemlseSB3aGVuIGEgZGlzdHJpYnV0ZWQgY2hpbGQgaXMgYXR0YWNoZWQsIHdoaWNoIG1heSBvY2N1ciBiZWZvcmVcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgZWxlbWVudCBpbiBwb2x5ZmlsbC5cbiAgICB9LFxuXG4gICAgX2lucHV0SGFzQ29udGVudDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfaW5wdXRTZWxlY3RvcjpcbiAgICAgICAge3R5cGU6IFN0cmluZywgdmFsdWU6ICdpbnB1dCxpcm9uLWlucHV0LHRleHRhcmVhLC5wYXBlci1pbnB1dC1pbnB1dCd9LFxuXG4gICAgX2JvdW5kT25Gb2N1czoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9ib3VuZE9uQmx1cjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JvdW5kT25JbnB1dDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9ib3VuZFZhbHVlQ2hhbmdlZDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vblZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnYWRkb24tYXR0YWNoZWQnOiAnX29uQWRkb25BdHRhY2hlZCcsXG4gICAgJ2lyb24taW5wdXQtdmFsaWRhdGUnOiAnX29uSXJvbklucHV0VmFsaWRhdGUnXG4gIH0sXG5cbiAgZ2V0IF92YWx1ZUNoYW5nZWRFdmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyRm9yVmFsdWUgKyAnLWNoYW5nZWQnO1xuICB9LFxuXG4gIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICByZXR1cm4gZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgfSxcblxuICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9tKHRoaXMpLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRTZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdIHx8XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBQYXBlci1pbnB1dCB0cmVhdHMgYSB2YWx1ZSBvZiB1bmRlZmluZWQgZGlmZmVyZW50bHkgYXQgc3RhcnR1cCB0aGFuXG4gICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHRpbWUgKHNwZWNpZmljYWxseTogaXQgZG9lcyBub3QgdmFsaWRhdGUgaXQgYXQgc3RhcnR1cCxcbiAgICAvLyBidXQgaXQgZG9lcyBhZnRlciB0aGF0LiBXZSBuZWVkIHRvIHRyYWNrIHdoZXRoZXIgdGhlIGZpcnN0IHRpbWUgd2VcbiAgICAvLyBlbmNvdW50ZXIgdGhlIHZhbHVlIGlzIGJhc2ljYWxseSB0aGlzIGZpcnN0IHRpbWUsIHNvIHRoYXQgd2UgY2FuIHZhbGlkYXRlXG4gICAgLy8gaXQgY29ycmVjdGx5IHRoZSByZXN0IG9mIHRoZSB0aW1lLiBTZWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy82MDVcbiAgICB0aGlzLl9faXNGaXJzdFZhbHVlVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kT25CbHVyLCB0cnVlKTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5hdHRyRm9yVmFsdWUpIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlZEV2ZW50LCB0aGlzLl9ib3VuZFZhbHVlQ2hhbmdlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0KTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICYmIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICE9ICcnKSB7XG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uQWRkb25BdHRhY2hlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2FkZG9ucykge1xuICAgICAgdGhpcy5fYWRkb25zID0gW107XG4gICAgfVxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRoaXMuX2FkZG9ucy5pbmRleE9mKHRhcmdldCkgPT09IC0xKSB7XG4gICAgICB0aGlzLl9hZGRvbnMucHVzaCh0YXJnZXQpO1xuICAgICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVWYWx1ZSh0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vbkJsdXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEZvY3VzZWQoZmFsc2UpO1xuICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuX2lucHV0RWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vbklucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaW5wdXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAvLyBQYXBlci1pbnB1dCB0cmVhdHMgYSB2YWx1ZSBvZiB1bmRlZmluZWQgZGlmZmVyZW50bHkgYXQgc3RhcnR1cCB0aGFuXG4gICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHRpbWUgKHNwZWNpZmljYWxseTogaXQgZG9lcyBub3QgdmFsaWRhdGUgaXQgYXQgc3RhcnR1cCxcbiAgICAvLyBidXQgaXQgZG9lcyBhZnRlciB0aGF0LiBJZiB0aGlzIGlzIGluIGZhY3QgdGhlIGJvb3R1cCBjYXNlLCBpZ25vcmVcbiAgICAvLyB2YWxpZGF0aW9uLCBqdXN0IHRoaXMgb25jZS5cbiAgICBpZiAodGhpcy5fX2lzRmlyc3RWYWx1ZVVwZGF0ZSkge1xuICAgICAgdGhpcy5fX2lzRmlyc3RWYWx1ZVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSB1bmRlZmluZWQgfHwgaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZShldmVudC50YXJnZXQpO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuXG4gICAgLy8gdHlwZT1cIm51bWJlclwiIGhhY2sgbmVlZGVkIGJlY2F1c2UgdGhpcy52YWx1ZSBpcyBlbXB0eSB1bnRpbCBpdCdzIHZhbGlkXG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwIHx8XG4gICAgICAgIChpbnB1dEVsZW1lbnQudHlwZSA9PT0gJ251bWJlcicgJiYgIWlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpKSB7XG4gICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnB1dEhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFkZG9ucyhcbiAgICAgICAge2lucHV0RWxlbWVudDogaW5wdXRFbGVtZW50LCB2YWx1ZTogdmFsdWUsIGludmFsaWQ6IHRoaXMuaW52YWxpZH0pO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfaGFuZGxlVmFsdWVBbmRBdXRvVmFsaWRhdGU6IGZ1bmN0aW9uKGlucHV0RWxlbWVudCkge1xuICAgIGlmICh0aGlzLmF1dG9WYWxpZGF0ZSAmJiBpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHZhciB2YWxpZDtcblxuICAgICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGF0ZSkge1xuICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC52YWxpZGF0ZSh0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZCA9IGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGlzIGxhc3QgdG8gbm90aWZ5IHRoZSBhZGQtb25zLlxuICAgIHRoaXMuX2hhbmRsZVZhbHVlKGlucHV0RWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vbklyb25JbnB1dFZhbGlkYXRlOiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX2lucHV0RWxlbWVudC5pbnZhbGlkO1xuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfaW52YWxpZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9hZGRvbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQWRkb25zKHtpbnZhbGlkOiB0aGlzLmludmFsaWR9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGwgdGhpcyB0byB1cGRhdGUgdGhlIHN0YXRlIG9mIGFkZC1vbnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBBZGQtb24gc3RhdGUuXG4gICAqL1xuICB1cGRhdGVBZGRvbnM6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgZm9yICh2YXIgYWRkb24sIGluZGV4ID0gMDsgYWRkb24gPSB0aGlzLl9hZGRvbnNbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICBhZGRvbi51cGRhdGUoc3RhdGUpO1xuICAgIH1cbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2NvbXB1dGVJbnB1dENvbnRlbnRDbGFzczogZnVuY3Rpb24oXG4gICAgICBub0xhYmVsRmxvYXQsIGFsd2F5c0Zsb2F0TGFiZWwsIGZvY3VzZWQsIGludmFsaWQsIF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICB2YXIgY2xzID0gJ2lucHV0LWNvbnRlbnQnO1xuICAgIGlmICghbm9MYWJlbEZsb2F0KSB7XG4gICAgICB2YXIgbGFiZWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG5cbiAgICAgIGlmIChhbHdheXNGbG9hdExhYmVsIHx8IF9pbnB1dEhhc0NvbnRlbnQpIHtcbiAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtZmxvYXRpbmcnO1xuICAgICAgICAvLyBJZiB0aGUgbGFiZWwgaXMgZmxvYXRpbmcsIGlnbm9yZSBhbnkgb2Zmc2V0cyB0aGF0IG1heSBoYXZlIGJlZW5cbiAgICAgICAgLy8gYXBwbGllZCBmcm9tIGEgcHJlZml4IGVsZW1lbnQuXG4gICAgICAgIHRoaXMuJC5sYWJlbEFuZElucHV0Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICAgICAgY2xzICs9ICcgbGFiZWwtaXMtaGlnaGxpZ2h0ZWQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIHRoZSBsYWJlbCBpcyBub3QgZmxvYXRpbmcsIGl0IHNob3VsZCBvdmVybGFwIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLiQubGFiZWxBbmRJbnB1dENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoX2lucHV0SGFzQ29udGVudCkge1xuICAgICAgICBjbHMgKz0gJyBsYWJlbC1pcy1oaWRkZW4nO1xuICAgICAgfVxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICBjbHMgKz0gJyBmb2N1c2VkJztcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2NvbXB1dGVVbmRlcmxpbmVDbGFzczogZnVuY3Rpb24oZm9jdXNlZCwgaW52YWxpZCkge1xuICAgIHZhciBjbHMgPSAndW5kZXJsaW5lJztcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY2xzICs9ICcgaXMtaW52YWxpZCc7XG4gICAgfSBlbHNlIGlmIChmb2N1c2VkKSB7XG4gICAgICBjbHMgKz0gJyBpcy1oaWdobGlnaHRlZCdcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX2NvbXB1dGVBZGRPbkNvbnRlbnRDbGFzczogZnVuY3Rpb24oZm9jdXNlZCwgaW52YWxpZCkge1xuICAgIHZhciBjbHMgPSAnYWRkLW9uLWNvbnRlbnQnO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjbHMgKz0gJyBpcy1pbnZhbGlkJztcbiAgICB9IGVsc2UgaWYgKGZvY3VzZWQpIHtcbiAgICAgIGNscyArPSAnIGlzLWhpZ2hsaWdodGVkJ1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbnB1dEFkZG9uQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYWRkb24tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pbnB1dC1lcnJvcj5gIGlzIGFuIGVycm9yIG1lc3NhZ2UgZm9yIHVzZSB3aXRoXG5gPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gLiBUaGUgZXJyb3IgaXMgZGlzcGxheWVkIHdoZW4gdGhlXG5gPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gIGlzIGBpbnZhbGlkYC5cblxuICAgIDxwYXBlci1pbnB1dC1jb250YWluZXI+XG4gICAgICA8aW5wdXQgcGF0dGVybj1cIlswLTldKlwiPlxuICAgICAgPHBhcGVyLWlucHV0LWVycm9yIHNsb3Q9XCJhZGQtb25cIj5Pbmx5IG51bWJlcnMgYXJlXG5hbGxvd2VkITwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvcmAgfCBUaGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgZXJyb3IgfCBgLS1lcnJvci1jb2xvcmBcbmAtLXBhcGVyLWlucHV0LWVycm9yYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGVycm9yIHwgYHt9YFxuKi9cblBvbHltZXIoe1xuICAvKiogQG92ZXJyaWRlICovXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItaW52YWxpZC1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWVycm9yO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG5cbiAgICAgICNhMTF5V3JhcHBlciB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSAjYTExeVdyYXBwZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8IS0tXG4gICAgSWYgdGhlIHBhcGVyLWlucHV0LWVycm9yIGVsZW1lbnQgaXMgZGlyZWN0bHkgcmVmZXJlbmNlZCBieSBhblxuICAgIFxcYGFyaWEtZGVzY3JpYmVkYnlcXGAgYXR0cmlidXRlLCBzdWNoIGFzIHdoZW4gdXNlZCBhcyBhIHBhcGVyLWlucHV0IGFkZC1vbixcbiAgICB0aGVuIGFwcGx5aW5nIFxcYHZpc2liaWxpdHk6IGhpZGRlbjtcXGAgdG8gdGhlIHBhcGVyLWlucHV0LWVycm9yIGVsZW1lbnQgaXRzZWxmXG4gICAgZG9lcyBub3QgaGlkZSB0aGUgZXJyb3IuXG5cbiAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOlxuICAgIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9hY2NuYW1lLTEuMS8jbWFwcGluZ19hZGRpdGlvbmFsX25kX2Rlc2NyaXB0aW9uXG4gICAgLS0+XG4gICAgPGRpdiBpZD1cImExMXlXcmFwcGVyXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItaW5wdXQtZXJyb3InLFxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QWRkb25CZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGVycm9yIGlzIHNob3dpbmcuXG4gICAgICovXG4gICAgaW52YWxpZDoge3JlYWRPbmx5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsIHR5cGU6IEJvb2xlYW59XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgb3ZlcnJpZGVzIHRoZSB1cGRhdGUgZnVuY3Rpb24gaW4gUGFwZXJJbnB1dEFkZG9uQmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgIGlucHV0RWxlbWVudDogKEVsZW1lbnR8dW5kZWZpbmVkKSxcbiAgICogICB2YWx1ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGludmFsaWQ6IGJvb2xlYW5cbiAgICogfX0gc3RhdGUgLVxuICAgKiAgICAgaW5wdXRFbGVtZW50OiBUaGUgaW5wdXQgZWxlbWVudC5cbiAgICogICAgIHZhbHVlOiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqICAgICBpbnZhbGlkOiBUcnVlIGlmIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgKi9cbiAgdXBkYXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgIHRoaXMuX3NldEludmFsaWQoc3RhdGUuaW52YWxpZCk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY29udGFpbmVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1lcnJvci5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7RG9tTW9kdWxlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge1BhcGVySW5wdXRCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbnB1dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dFxuZmllbGRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGV4dC1maWVsZHMuaHRtbClcblxuYDxwYXBlci1pbnB1dD5gIGlzIGEgc2luZ2xlLWxpbmUgdGV4dCBmaWVsZCB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBtYXkgaW5jbHVkZSBhbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlciBjb3VudGVyLlxuXG4gICAgPHBhcGVyLWlucHV0IGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGlucHV0IVwiIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+IDxwYXBlci1pbnB1dCBjaGFyLWNvdW50ZXIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIHJldmVhbCBidXR0b24gKHRoZSBleWViYWxsKSB8IHt9XG5cbkBlbGVtZW50IHBhcGVyLWlucHV0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pbnB1dCcsXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoZSA8aW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzIGl0LlxuICAgICAgSW4gMi54IHRoZSA8aXJvbi1pbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXNcbiAgICAgIGl0LCBidXQgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29yayBjb3JyZWN0bHksIHdlIG5lZWQgdG8gcmVzZXQgc29tZVxuICAgICAgb2YgdGhlIG5hdGl2ZSBpbnB1dCdzIHByb3BlcnRpZXMgdG8gaW5oZXJpdCAoZnJvbSB0aGUgaXJvbi1pbnB1dCkgKi9cbiAgICAgIGlyb24taW5wdXQgPiBpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLXJldmVhbDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIiBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvciQ9XCJbW19pbnB1dElkXV1cIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIiBzbG90PVwiaW5wdXRcIiBjbGFzcz1cImlucHV0LWVsZW1lbnRcIiBpZCQ9XCJbW19pbnB1dElkXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCIgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIHRpdGxlJD1cIltbdGl0bGVdXVwiIHR5cGUkPVwiW1t0eXBlXV1cIiBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCIgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCIgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCIgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIG1pbiQ9XCJbW21pbl1dXCIgbWF4JD1cIltbbWF4XV1cIiBzdGVwJD1cIltbc3RlcF1dXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiIGxpc3QkPVwiW1tsaXN0XV1cIiBzaXplJD1cIltbc2l6ZV1dXCIgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCIgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCIgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCIgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCIgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCIgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCIgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCIgcm9sZSQ9XCJbW2lucHV0Um9sZV1dXCIgYXJpYS1oYXNwb3B1cCQ9XCJbW2lucHV0QXJpYUhhc3BvcHVwXV1cIj5cbiAgICAgIDwvaXJvbi1pbnB1dD5cblxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG4gIGAsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJJbnB1dEJlaGF2aW9yLCBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIHZhbHVlOiB7XG4gICAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIGNvcnJlY3QgVHlwZVNjcmlwdCB0eXBlLWdlbmVyYXRpb25cbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG5cbiAgICBpbnB1dFJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcblxuICAgIGlucHV0QXJpYUhhc3BvcHVwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb21cbiAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICBsaXN0ZW5lcnM6IHsnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSd9LFxuXG4gIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIG9ubHkgdXNlZCBpbiB0aGUgbmV4dCBsaW5lLCBzYXZlIHRoaXMgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNpbmNlIHRoZSBuYXRpdmUgaW5wdXQgaGFkIHRoaXMgSUQgdW50aWwgMi4wLjUuXG4gICAgaWYgKCF0aGlzLiQubmF0aXZlSW5wdXQpIHtcbiAgICAgIHRoaXMuJC5uYXRpdmVJbnB1dCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovICh0aGlzLiQkKCdpbnB1dCcpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy4kLm5hdGl2ZUlucHV0LnR5cGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgaWYgKCEhdGhpcy5pbnB1dEVsZW1lbnQuYmluZFZhbHVlKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLmlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9LFxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLWRyb3Bkb3duLW1lbnVcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLyogTk9URShjZGF0YSk6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlXG4gICAgICAgICAqIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtub2lua10pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItZHJvcGRvd24tbWVudS1pY29ucy5qcyc7XG5pbXBvcnQgJy4vcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRHJvcGRvd25cbm1lbnVzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy5odG1sI2J1dHRvbnMtZHJvcGRvd24tYnV0dG9ucylcblxuYHBhcGVyLWRyb3Bkb3duLW1lbnVgIGlzIHNpbWlsYXIgdG8gYSBuYXRpdmUgYnJvd3NlciBzZWxlY3QgZWxlbWVudC5cbmBwYXBlci1kcm9wZG93bi1tZW51YCB3b3JrcyB3aXRoIHNlbGVjdGFibGUgY29udGVudC4gVGhlIGN1cnJlbnRseSBzZWxlY3RlZFxuaXRlbSBpcyBkaXNwbGF5ZWQgaW4gdGhlIGNvbnRyb2wuIElmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQsIHRoZSBgbGFiZWxgIGlzXG5kaXNwbGF5ZWQgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiWW91ciBmYXZvdXJpdGUgcGFzdHJ5XCI+XG4gICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICA8cGFwZXItaXRlbT5Dcm9pc3NhbnQ8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkRvbnV0PC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5GaW5hbmNpZXI8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPk1hZGVsZWluZTwvcGFwZXItaXRlbT5cbiAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG5cblRoaXMgZXhhbXBsZSByZW5kZXJzIGEgZHJvcGRvd24gbWVudSB3aXRoIDQgb3B0aW9ucy5cblxuVGhlIGNoaWxkIGVsZW1lbnQgd2l0aCB0aGUgc2xvdCBgZHJvcGRvd24tY29udGVudGAgaXMgdXNlZCBhcyB0aGUgZHJvcGRvd25cbm1lbnUuIFRoaXMgY2FuIGJlIGEgW2BwYXBlci1saXN0Ym94YF0ocGFwZXItbGlzdGJveCksIG9yIGFueSBvdGhlciBvclxuZWxlbWVudCB0aGF0IGFjdHMgbGlrZSBhbiBbYGlyb24tc2VsZWN0b3JgXShpcm9uLXNlbGVjdG9yKS5cblxuU3BlY2lmaWNhbGx5LCB0aGUgbWVudSBjaGlsZCBtdXN0IGZpcmUgYW5cbltgaXJvbi1zZWxlY3RgXShpcm9uLXNlbGVjdG9yI2V2ZW50LWlyb24tc2VsZWN0KSBldmVudCB3aGVuIG9uZSBvZiBpdHNcbmNoaWxkcmVuIGlzIHNlbGVjdGVkLCBhbmQgYW5cbltgaXJvbi1kZXNlbGVjdGBdKGlyb24tc2VsZWN0b3IjZXZlbnQtaXJvbi1kZXNlbGVjdCkgZXZlbnQgd2hlbiBhIGNoaWxkIGlzXG5kZXNlbGVjdGVkLiBUaGUgc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCBpdGVtIG11c3QgYmUgcGFzc2VkIGFzIHRoZSBldmVudCdzXG5gZGV0YWlsLml0ZW1gIHByb3BlcnR5LlxuXG5BcHBsaWNhdGlvbnMgY2FuIGxpc3RlbiBmb3IgdGhlIGBpcm9uLXNlbGVjdGAgYW5kIGBpcm9uLWRlc2VsZWN0YCBldmVudHNcbnRvIHJlYWN0IHdoZW4gb3B0aW9ucyBhcmUgc2VsZWN0ZWQgYW5kIGRlc2VsZWN0ZWQuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYWxzbyBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWRgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgaG9zdCB3aGVuIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGVgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHJpcHBsZSB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBtZW51IGJ1dHRvbiB8IGB7fWBcbmAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXRgIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIHBhcGVyIGlucHV0IHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1pY29uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBpY29uIHwgYHt9YFxuXG5Zb3UgY2FuIGFsc28gdXNlIGFueSBvZiB0aGUgYHBhcGVyLWlucHV0LWNvbnRhaW5lcmAgYW5kIGBwYXBlci1tZW51LWJ1dHRvbmBcbnN0eWxlIG1peGlucyBhbmQgY3VzdG9tIHByb3BlcnRpZXMgdG8gc3R5bGUgdGhlIGludGVybmFsIGlucHV0IGFuZCBtZW51IGJ1dHRvblxucmVzcGVjdGl2ZWx5LlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRyb3Bkb3duLW1lbnVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPCEtLSB0aGlzIGRpdiBmdWxmaWxscyBhbiBhMTF5IHJlcXVpcmVtZW50IGZvciBjb21ib2JveCwgZG8gbm90IHJlbW92ZSAtLT5cbiAgICA8c3BhbiByb2xlPVwiYnV0dG9uXCI+PC9zcGFuPlxuICAgIDxwYXBlci1tZW51LWJ1dHRvbiBpZD1cIm1lbnVCdXR0b25cIiB2ZXJ0aWNhbC1hbGlnbj1cIltbdmVydGljYWxBbGlnbl1dXCIgaG9yaXpvbnRhbC1hbGlnbj1cIltbaG9yaXpvbnRhbEFsaWduXV1cIiBkeW5hbWljLWFsaWduPVwiW1tkeW5hbWljQWxpZ25dXVwiIHZlcnRpY2FsLW9mZnNldD1cIltbX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQobm9MYWJlbEZsb2F0LCB2ZXJ0aWNhbE9mZnNldCldXVwiIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCIgbm8tYW5pbWF0aW9ucz1cIltbbm9BbmltYXRpb25zXV1cIiBvbi1pcm9uLXNlbGVjdD1cIl9vbklyb25TZWxlY3RcIiBvbi1pcm9uLWRlc2VsZWN0PVwiX29uSXJvbkRlc2VsZWN0XCIgb3BlbmVkPVwie3tvcGVuZWR9fVwiIGNsb3NlLW9uLWFjdGl2YXRlIGFsbG93LW91dHNpZGUtc2Nyb2xsPVwiW1thbGxvd091dHNpZGVTY3JvbGxdXVwiIHJlc3RvcmUtZm9jdXMtb24tY2xvc2U9XCJbW3Jlc3RvcmVGb2N1c09uQ2xvc2VdXVwiPlxuICAgICAgPCEtLSBzdXBwb3J0IGh5YnJpZCBtb2RlOiB1c2VyIG1pZ2h0IGJlIHVzaW5nIHBhcGVyLW1lbnUtYnV0dG9uIDEueCB3aGljaCBkaXN0cmlidXRlcyB2aWEgPGNvbnRlbnQ+IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIiBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgICAgICA8cGFwZXItcmlwcGxlPjwvcGFwZXItcmlwcGxlPlxuICAgICAgICA8IS0tIHBhcGVyLWlucHV0IGhhcyB0eXBlPVwidGV4dFwiIGZvciBhMTF5LCBkbyBub3QgcmVtb3ZlIC0tPlxuICAgICAgICA8cGFwZXItaW5wdXQgdHlwZT1cInRleHRcIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIiByZWFkb25seSBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiIHZhbHVlPVwiW1t2YWx1ZV1dXCIgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVyXV1cIiBlcnJvci1tZXNzYWdlPVwiW1tlcnJvck1lc3NhZ2VdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbYWx3YXlzRmxvYXRMYWJlbF1dXCIgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIj5cbiAgICAgICAgICA8IS0tIHN1cHBvcnQgaHlicmlkIG1vZGU6IHVzZXIgbWlnaHQgYmUgdXNpbmcgcGFwZXItaW5wdXQgMS54IHdoaWNoIGRpc3RyaWJ1dGVzIHZpYSA8Y29udGVudD4gLS0+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwicGFwZXItZHJvcGRvd24tbWVudTphcnJvdy1kcm9wLWRvd25cIiBzdWZmaXggc2xvdD1cInN1ZmZpeFwiPjwvaXJvbi1pY29uPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZHJvcGRvd24tY29udGVudFwiIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+PC9zbG90PlxuICAgIDwvcGFwZXItbWVudS1idXR0b24+XG5gLFxuXG4gIGlzOiAncGFwZXItZHJvcGRvd24tbWVudScsXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgSXJvbkJ1dHRvblN0YXRlLFxuICAgIElyb25Db250cm9sU3RhdGUsXG4gICAgSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IsXG4gICAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGRlcml2ZWQgXCJsYWJlbFwiIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS4gVGhpcyB2YWx1ZVxuICAgICAqIGlzIHRoZSBgbGFiZWxgIHByb3BlcnR5IG9uIHRoZSBzZWxlY3RlZCBpdGVtIGlmIHNldCwgb3IgZWxzZSB0aGVcbiAgICAgKiB0cmltbWVkIHRleHQgY29udGVudCBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1MYWJlbDoge3R5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCBzZWxlY3RlZCBpdGVtLiBBbiBpdGVtIGlzIHNlbGVjdGVkIGlmIHRoZSBkcm9wZG93biBtZW51IGhhc1xuICAgICAqIGEgY2hpbGQgd2l0aCBzbG90IGBkcm9wZG93bi1jb250ZW50YCwgYW5kIHRoYXQgY2hpbGQgdHJpZ2dlcnMgYW5cbiAgICAgKiBgaXJvbi1zZWxlY3RgIGV2ZW50IHdpdGggdGhlIHNlbGVjdGVkIGBpdGVtYCBpbiB0aGUgYGRldGFpbGAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIG5vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBzdWJtaXR0aW5nIGluXG4gICAgICogYSBmb3JtLiBJdCByZWZsZWN0cyB0aGUgdmFsdWUgb2YgYHNlbGVjdGVkSXRlbUxhYmVsYC4gSWYgc2V0IGRpcmVjdGx5LFxuICAgICAqIGl0IHdpbGwgbm90IHVwZGF0ZSB0aGUgYHNlbGVjdGVkSXRlbUxhYmVsYCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBsYWJlbDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gaW52YWxpZC5cbiAgICAgKi9cbiAgICBlcnJvck1lc3NhZ2U6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgZHJvcGRvd24gaXMgb3Blbi4gT3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgKi9cbiAgICBvcGVuZWQ6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCBub3RpZnk6IHRydWUsIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgYWxsb3dPdXRzaWRlU2Nyb2xsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIGZsb2F0aW5nIGxhYmVsLiBCaW5kIHRoaXMgdG8gdGhlXG4gICAgICogYDxwYXBlci1pbnB1dC1jb250YWluZXI+YCdzIGBub0xhYmVsRmxvYXRgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIG5vTGFiZWxGbG9hdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBmbG9hdCB0aGUgbGFiZWwuIEJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYGFsd2F5c0Zsb2F0TGFiZWxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGFsd2F5c0Zsb2F0TGFiZWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhbmltYXRpb25zIHdoZW4gb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAgICAgKiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBub0FuaW1hdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIG1lbnUgZHJvcGRvd25cbiAgICAgKiBob3Jpem9udGFsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3JpZ2h0J30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyB0aGUgdmVydGljYWwgb2Zmc2V0IGNvbXB1dGVkIGluXG4gICAgICogX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQuXG4gICAgICovXG4gICAgdmVydGljYWxPZmZzZXQ6IE51bWJlcixcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBgaG9yaXpvbnRhbEFsaWduYCBhbmQgYHZlcnRpY2FsQWxpZ25gIHByb3BlcnRpZXMgd2lsbFxuICAgICAqIGJlIGNvbnNpZGVyZWQgcHJlZmVyZW5jZXMgaW5zdGVhZCBvZiBzdHJpY3QgcmVxdWlyZW1lbnRzIHdoZW5cbiAgICAgKiBwb3NpdGlvbmluZyB0aGUgZHJvcGRvd24gYW5kIG1heSBiZSBjaGFuZ2VkIGlmIGRvaW5nIHNvIHJlZHVjZXNcbiAgICAgKiB0aGUgYXJlYSBvZiB0aGUgZHJvcGRvd24gZmFsbGluZyBvdXRzaWRlIG9mIGBmaXRJbnRvYC5cbiAgICAgKi9cbiAgICBkeW5hbWljQWxpZ246IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIHJlc3RvcmVkIHRvIHRoZSBkcm9wZG93biB3aGVuIHRoZSBtZW51IGNsb3Nlcy5cbiAgICAgKi9cbiAgICByZXN0b3JlRm9jdXNPbkNsb3NlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IHRydWV9LFxuICB9LFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uVGFwJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsndXAgZG93bic6ICdvcGVuJywgJ2VzYyc6ICdjbG9zZSd9LFxuXG4gIGhvc3RBdHRyaWJ1dGVzOlxuICAgICAge3JvbGU6ICdjb21ib2JveCcsICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdub25lJywgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSd9LFxuXG4gIG9ic2VydmVyczogWydfc2VsZWN0ZWRJdGVtQ2hhbmdlZChzZWxlY3RlZEl0ZW0pJ10sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE5PVEUoY2RhdGEpOiBEdWUgdG8gdGltaW5nLCBhIHByZXNlbGVjdGVkIHZhbHVlIGluIGEgYElyb25TZWxlY3RhYmxlYFxuICAgIC8vIGNoaWxkIHdpbGwgY2F1c2UgYW4gYGlyb24tc2VsZWN0YCBldmVudCB0byBmaXJlIHdoaWxlIHRoZSBlbGVtZW50IGlzXG4gICAgLy8gc3RpbGwgaW4gYSBgRG9jdW1lbnRGcmFnbWVudGAuIFRoaXMgaGFzIHRoZSBlZmZlY3Qgb2YgY2F1c2luZ1xuICAgIC8vIGhhbmRsZXJzIG5vdCB0byBmaXJlLiBTbywgd2UgZG91YmxlIGNoZWNrIHRoaXMgdmFsdWUgb24gYXR0YWNoZWQ6XG4gICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICBpZiAoY29udGVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0oY29udGVudEVsZW1lbnQuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IGVsZW1lbnQgdGhhdCBpcyBjb250YWluZWQgYnkgdGhlIGRyb3Bkb3duIG1lbnUsIGlmIGFueS5cbiAgICovXG4gIGdldCBjb250ZW50RWxlbWVudCgpIHtcbiAgICAvLyBQb2x5bWVyIDIueCByZXR1cm5zIHNsb3QuYXNzaWduZWROb2RlcyB3aGljaCBjYW4gY29udGFpbiB0ZXh0IG5vZGVzLlxuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzLiQuY29udGVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGRyb3Bkb3duIGNvbnRlbnQuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQubWVudUJ1dHRvbi5vcGVuKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGRyb3Bkb3duIGNvbnRlbnQuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLm1lbnVCdXR0b24uY2xvc2UoKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYGlyb24tc2VsZWN0YCBpcyBmaXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQW4gYGlyb24tc2VsZWN0YCBldmVudC5cbiAgICovXG4gIF9vbklyb25TZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKGV2ZW50LmRldGFpbC5pdGVtKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYGlyb24tZGVzZWxlY3RgIGlzIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBbiBgaXJvbi1kZXNlbGVjdGAgZXZlbnQuXG4gICAqL1xuICBfb25Jcm9uRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKG51bGwpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIHRhcCBldmVudC5cbiAgICovXG4gIF9vblRhcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZ2VzdHVyZXMuZmluZE9yaWdpbmFsVGFyZ2V0KGV2ZW50KSA9PT0gdGhpcykge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSBsYWJlbCBmb3IgdGhlIGRyb3Bkb3duIGdpdmVuIGEgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBzZWxlY3RlZEl0ZW0gQSBzZWxlY3RlZCBFbGVtZW50IGl0ZW0sIHdpdGggYW5cbiAgICogb3B0aW9uYWwgYGxhYmVsYCBwcm9wZXJ0eS5cbiAgICovXG4gIF9zZWxlY3RlZEl0ZW1DaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICB2YXIgdmFsdWUgPSAnJztcbiAgICBpZiAoIXNlbGVjdGVkSXRlbSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBzZWxlY3RlZEl0ZW0ubGFiZWwgfHwgc2VsZWN0ZWRJdGVtLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSB8fFxuICAgICAgICAgIHNlbGVjdGVkSXRlbS50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbUxhYmVsKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgdmVydGljYWwgb2Zmc2V0IG9mIHRoZSBtZW51IGJhc2VkIG9uIHRoZSB2YWx1ZSBvZlxuICAgKiBgbm9MYWJlbEZsb2F0YC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBub0xhYmVsRmxvYXQgVHJ1ZSBpZiB0aGUgbGFiZWwgc2hvdWxkIG5vdCBmbG9hdFxuICAgKiBAcGFyYW0ge251bWJlcj19IG9wdF92ZXJ0aWNhbE9mZnNldCBPcHRpb25hbCBvZmZzZXQgZnJvbSB0aGUgdXNlclxuICAgKiBhYm92ZSB0aGUgaW5wdXQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIF9jb21wdXRlTWVudVZlcnRpY2FsT2Zmc2V0OiBmdW5jdGlvbihub0xhYmVsRmxvYXQsIG9wdF92ZXJ0aWNhbE9mZnNldCkge1xuICAgIC8vIE92ZXJyaWRlIG9mZnNldCBpZiBpdCdzIHBhc3NlZCBmcm9tIHRoZSB1c2VyLlxuICAgIGlmIChvcHRfdmVydGljYWxPZmZzZXQpIHtcbiAgICAgIHJldHVybiBvcHRfdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuXG4gICAgLy8gTk9URShjZGF0YSk6IFRoZXNlIG51bWJlcnMgYXJlIHNvbWV3aGF0IG1hZ2ljYWwgYmVjYXVzZSB0aGV5IGFyZVxuICAgIC8vIGRlcml2ZWQgZnJvbSB0aGUgbWV0cmljcyBvZiBlbGVtZW50cyBpbnRlcm5hbCB0byBgcGFwZXItaW5wdXRgJ3NcbiAgICAvLyB0ZW1wbGF0ZS4gVGhlIG1ldHJpY3Mgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgIC8vIGlucHV0IGhhcyBhIGZsb2F0aW5nIGxhYmVsLlxuICAgIHJldHVybiBub0xhYmVsRmxvYXQgPyAtNCA6IDg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaXMgcmVxdWlyZWQgYW5kIGRvZXMgbm90IGhhdmUgYSBzZWxlY3Rpb24sXG4gICAqIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHsqPX0gX3ZhbHVlIElnbm9yZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYHJlcXVpcmVkYCBpcyBmYWxzZSwgb3IgaWYgYHJlcXVpcmVkYCBpcyB0cnVlXG4gICAqIGFuZCB0aGUgZWxlbWVudCBoYXMgYSB2YWxpZCBzZWxlY3Rpb24uXG4gICAqL1xuICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKF92YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICF0aGlzLnJlcXVpcmVkIHx8ICh0aGlzLnJlcXVpcmVkICYmICEhdGhpcy52YWx1ZSk7XG4gIH0sXG5cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcGVuU3RhdGUgPSB0aGlzLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRlbnRFbGVtZW50O1xuICAgIGlmIChlKSB7XG4gICAgICBlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW5TdGF0ZSk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBakJBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBelFBO0FBNFFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoZUE7QUFtZUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2Z0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQXdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUJBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBb1BBO0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQW5FQTtBQTJFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBNWhCQTs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBNENBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQW5FQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUpBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFBQTtBQU9BOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvRUE7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBb0JBO0FBRUE7QUFPQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUF2R0E7QUEwR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBL1FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=