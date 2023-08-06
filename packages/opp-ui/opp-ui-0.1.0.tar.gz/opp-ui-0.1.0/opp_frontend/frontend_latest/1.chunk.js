(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js ***!
  \**************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/

const IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,
  is: 'iron-a11y-announcer',
  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },
    _text: {
      type: String,
      value: ''
    }
  },
  created: function () {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function (text) {
    this._text = '';
    this.async(function () {
      this._text = text;
    }, 100);
  },
  _onIronAnnounce: function (event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});
IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function () {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};

/***/ }),

/***/ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js ***!
  \****************************************************************************************/
/*! exports provided: IronFormElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFormElementBehavior", function() { return IronFormElementBehavior; });
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
  IronFormElementBehavior adds a `name`, `value` and `required` properties to
  a custom element. It mostly exists for backcompatibility with Polymer 1.x, and
  is probably not something you want to use.

  @demo demo/index.html
  @polymerBehavior
 */

const IronFormElementBehavior = {
  properties: {
    /**
     * The name of this element.
     */
    name: {
      type: String
    },

    /**
     * The value for this element.
     * @type {*}
     */
    value: {
      notify: true,
      type: String
    },

    /**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */
    required: {
      type: Boolean,
      value: false
    }
  },
  // Empty implementations for backcompatibility.
  attached: function () {},
  detached: function () {}
};

/***/ }),

/***/ "./node_modules/@polymer/iron-input/iron-input.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-input/iron-input.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
`<iron-input>` is a wrapper to a native `<input>` element, that adds two-way
binding and prevention of invalid input. To use it, you must distribute a native
`<input>` yourself. You can continue to use the native `input` as you would
normally:

    <iron-input>
      <input>
    </iron-input>

    <iron-input>
      <input type="email" disabled>
    </iron-input>

### Two-way binding

By default you can only get notified of changes to a native `<input>`'s `value`
due to user input:

    <input value="{{myValue::input}}">

This means that if you imperatively set the value (i.e. `someNativeInput.value =
'foo'`), no events will be fired and this change cannot be observed.

`iron-input` adds the `bind-value` property that mirrors the native `input`'s
'`value` property; this property can be used for two-way data binding.
`bind-value` will notify if it is changed either by user input or by script.

    <iron-input bind-value="{{myValue}}">
      <input>
    </iron-input>

Note: this means that if you want to imperatively set the native `input`'s, you
_must_ set `bind-value` instead, so that the wrapper `iron-input` can be
notified.

### Validation

`iron-input` uses the native `input`'s validation. For simplicity, `iron-input`
has a `validate()` method (which internally just checks the distributed
`input`'s validity), which sets an `invalid` attribute that can also be used for
styling.

To validate automatically as you type, you can use the `auto-validate`
attribute.

`iron-input` also fires an `iron-input-validate` event after `validate()` is
called. You can use it to implement a custom validator:

    var CatsOnlyValidator = {
      validate: function(ironInput) {
        var valid = !ironInput.bindValue || ironInput.bindValue === 'cat';
        ironInput.invalid = !valid;
        return valid;
      }
    }
    ironInput.addEventListener('iron-input-validate', function() {
      CatsOnly.validate(input2);
    });

You can also use an element implementing an
[`IronValidatorBehavior`](/element/PolymerElements/iron-validatable-behavior).
This example can also be found in the demo for this element:

    <iron-input validator="cats-only">
      <input>
    </iron-input>

### Preventing invalid input

It may be desirable to only allow users to enter certain characters. You can use
the `allowed-pattern` attribute to accomplish this. This feature is separate
from validation, and `allowed-pattern` does not affect how the input is
validated.

    // Only allow typing digits, but a valid input has exactly 5 digits.
    <iron-input allowed-pattern="[0-9]">
      <input pattern="\d{5}">
    </iron-input>

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,
  is: 'iron-input',
  behaviors: [_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"]],

  /**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */
  properties: {
    /**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */
    bindValue: {
      type: String,
      value: ''
    },

    /**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */
    value: {
      type: String,
      computed: '_computeValue(bindValue)'
    },

    /**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */
    allowedPattern: {
      type: String
    },

    /**
     * Set to true to auto-validate the input value as you type.
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * The native input element.
     */
    _inputElement: Object
  },
  observers: ['_bindValueChanged(bindValue, _inputElement)'],
  listeners: {
    'input': '_onInput',
    'keypress': '_onKeypress'
  },
  created: function () {
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yAnnouncer"].requestAvailability();
    this._previousValidInput = '';
    this._patternAlreadyChecked = false;
  },
  attached: function () {
    // If the input is added at a later time, update the internal reference.
    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).observeNodes(function (info) {
      this._initSlottedInput();
    }.bind(this));
  },
  detached: function () {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(this).unobserveNodes(this._observer);
      this._observer = null;
    }
  },

  /**
   * Returns the distributed input element.
   */
  get inputElement() {
    return this._inputElement;
  },

  _initSlottedInput: function () {
    this._inputElement = this.getEffectiveChildren()[0];

    if (this.inputElement && this.inputElement.value) {
      this.bindValue = this.inputElement.value;
    }

    this.fire('iron-input-ready');
  },

  get _patternRegExp() {
    var pattern;

    if (this.allowedPattern) {
      pattern = new RegExp(this.allowedPattern);
    } else {
      switch (this.inputElement.type) {
        case 'number':
          pattern = /[0-9.,e-]/;
          break;
      }
    }

    return pattern;
  },

  /**
   * @suppress {checkTypes}
   */
  _bindValueChanged: function (bindValue, inputElement) {
    // The observer could have run before attached() when we have actually
    // initialized this property.
    if (!inputElement) {
      return;
    }

    if (bindValue === undefined) {
      inputElement.value = null;
    } else if (bindValue !== inputElement.value) {
      this.inputElement.value = bindValue;
    }

    if (this.autoValidate) {
      this.validate();
    } // manually notify because we don't want to notify until after setting value


    this.fire('bind-value-changed', {
      value: bindValue
    });
  },
  _onInput: function () {
    // Need to validate each of the characters pasted if they haven't
    // been validated inside `_onKeypress` already.
    if (this.allowedPattern && !this._patternAlreadyChecked) {
      var valid = this._checkPatternValidity();

      if (!valid) {
        this._announceInvalidCharacter('Invalid string of characters not entered.');

        this.inputElement.value = this._previousValidInput;
      }
    }

    this.bindValue = this._previousValidInput = this.inputElement.value;
    this._patternAlreadyChecked = false;
  },
  _isPrintable: function (event) {
    // What a control/printable character is varies wildly based on the browser.
    // - most control characters (arrows, backspace) do not send a `keypress`
    // event
    //   in Chrome, but the *do* on Firefox
    // - in Firefox, when they do send a `keypress` event, control chars have
    //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
    // - printable characters always send a keypress event.
    // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
    // keyCode
    //   always matches the charCode.
    // None of this makes any sense.
    // For these keys, ASCII code == browser keycode.
    var anyNonPrintable = event.keyCode == 8 || // backspace
    event.keyCode == 9 || // tab
    event.keyCode == 13 || // enter
    event.keyCode == 27; // escape
    // For these keys, make sure it's a browser keycode and not an ASCII code.

    var mozNonPrintable = event.keyCode == 19 || // pause
    event.keyCode == 20 || // caps lock
    event.keyCode == 45 || // insert
    event.keyCode == 46 || // delete
    event.keyCode == 144 || // num lock
    event.keyCode == 145 || // scroll lock
    event.keyCode > 32 && event.keyCode < 41 || // page up/down, end, home, arrows
    event.keyCode > 111 && event.keyCode < 124; // fn keys

    return !anyNonPrintable && !(event.charCode == 0 && mozNonPrintable);
  },
  _onKeypress: function (event) {
    if (!this.allowedPattern && this.inputElement.type !== 'number') {
      return;
    }

    var regexp = this._patternRegExp;

    if (!regexp) {
      return;
    } // Handle special keys and backspace


    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    } // Check the pattern either here or in `_onInput`, but not in both.


    this._patternAlreadyChecked = true;
    var thisChar = String.fromCharCode(event.charCode);

    if (this._isPrintable(event) && !regexp.test(thisChar)) {
      event.preventDefault();

      this._announceInvalidCharacter('Invalid character ' + thisChar + ' not entered.');
    }
  },
  _checkPatternValidity: function () {
    var regexp = this._patternRegExp;

    if (!regexp) {
      return true;
    }

    for (var i = 0; i < this.inputElement.value.length; i++) {
      if (!regexp.test(this.inputElement.value[i])) {
        return false;
      }
    }

    return true;
  },

  /**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */
  validate: function () {
    if (!this.inputElement) {
      this.invalid = false;
      return true;
    } // Use the nested input's native validity.


    var valid = this.inputElement.checkValidity(); // Only do extra checking if the browser thought this was valid.

    if (valid) {
      // Empty, required input is invalid
      if (this.required && this.bindValue === '') {
        valid = false;
      } else if (this.hasValidator()) {
        valid = _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"].validate.call(this, this.bindValue);
      }
    }

    this.invalid = !valid;
    this.fire('iron-input-validate');
    return valid;
  },
  _announceInvalidCharacter: function (message) {
    this.fire('iron-announce', {
      text: message
    });
  },
  _computeValue: function (bindValue) {
    return bindValue;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js ***!
  \**************************************************************************************/
/*! exports provided: IronValidatableBehaviorMeta, IronValidatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehaviorMeta", function() { return IronValidatableBehaviorMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronValidatableBehavior", function() { return IronValidatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
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
 * Singleton IronMeta instance.
 */

let IronValidatableBehaviorMeta = null;
/**
 * `Use IronValidatableBehavior` to implement an element that validates
 * user input. Use the related `IronValidatorBehavior` to add custom
 * validation logic to an iron-input.
 *
 * By default, an `<iron-form>` element validates its fields when the user
 * presses the submit button. To validate a form imperatively, call the form's
 * `validate()` method, which in turn will call `validate()` on all its
 * children. By using `IronValidatableBehavior`, your custom element
 * will get a public `validate()`, which will return the validity of the
 * element, and a corresponding `invalid` attribute, which can be used for
 * styling.
 *
 * To implement the custom validation logic of your element, you must override
 * the protected `_getValidity()` method of this behaviour, rather than
 * `validate()`. See
 * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
 * for an example.
 *
 * ### Accessibility
 *
 * Changing the `invalid` property, either manually or by calling `validate()`
 * will update the `aria-invalid` attribute.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */

const IronValidatableBehavior = {
  properties: {
    /**
     * Name of the validator to use.
     */
    validator: {
      type: String
    },

    /**
     * True if the last call to `validate` is invalid.
     */
    invalid: {
      notify: true,
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_invalidChanged'
    }
  },
  registered: function () {
    IronValidatableBehaviorMeta = new _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__["IronMeta"]({
      type: 'validator'
    });
  },
  _invalidChanged: function () {
    if (this.invalid) {
      this.setAttribute('aria-invalid', 'true');
    } else {
      this.removeAttribute('aria-invalid');
    }
  },

  /* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */
  get _validator() {
    return IronValidatableBehaviorMeta && IronValidatableBehaviorMeta.byKey(this.validator);
  },

  /**
   * @return {boolean} True if the validator `validator` exists.
   */
  hasValidator: function () {
    return this._validator != null;
  },

  /**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.
    * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */
  validate: function (value) {
    // If this is an element that also has a value property, and there was
    // no explicit value argument passed, use the element's property instead.
    if (value === undefined && this.value !== undefined) this.invalid = !this._getValidity(this.value);else this.invalid = !this._getValidity(value);
    return !this.invalid;
  },

  /**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */
  _getValidity: function (value) {
    if (this.hasValidator()) {
      return this._validator.validate(value);
    }

    return true;
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYGlyb24tYTExeS1hbm5vdW5jZXJgIGlzIGEgc2luZ2xldG9uIGVsZW1lbnQgdGhhdCBpcyBpbnRlbmRlZCB0byBhZGQgYTExeVxudG8gZmVhdHVyZXMgdGhhdCByZXF1aXJlIG9uLWRlbWFuZCBhbm5vdW5jZW1lbnQgZnJvbSBzY3JlZW4gcmVhZGVycy4gSW5cbm9yZGVyIHRvIG1ha2UgdXNlIG9mIHRoZSBhbm5vdW5jZXIsIGl0IGlzIGJlc3QgdG8gcmVxdWVzdCBpdHMgYXZhaWxhYmlsaXR5XG5pbiB0aGUgYW5ub3VuY2luZyBlbGVtZW50LlxuXG5FeGFtcGxlOlxuXG4gICAgUG9seW1lcih7XG5cbiAgICAgIGlzOiAneC1jaGF0dHknLFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBjcmVhdGUgdGhlIHNpbmdsZXRvbiBlbGVtZW50IGlmIGl0IGhhcyBub3RcbiAgICAgICAgLy8gYmVlbiBjcmVhdGVkIHlldDpcbiAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbkFmdGVyIHRoZSBgaXJvbi1hMTF5LWFubm91bmNlcmAgaGFzIGJlZW4gbWFkZSBhdmFpbGFibGUsIGVsZW1lbnRzIGNhblxubWFrZSBhbm5vdW5jZXMgYnkgZmlyaW5nIGJ1YmJsaW5nIGBpcm9uLWFubm91bmNlYCBldmVudHMuXG5cbkV4YW1wbGU6XG5cbiAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7XG4gICAgICB0ZXh0OiAnVGhpcyBpcyBhbiBhbm5vdW5jZW1lbnQhJ1xuICAgIH0sIHsgYnViYmxlczogdHJ1ZSB9KTtcblxuTm90ZTogYW5ub3VuY2VtZW50cyBhcmUgb25seSBhdWRpYmxlIGlmIHlvdSBoYXZlIGEgc2NyZWVuIHJlYWRlciBlbmFibGVkLlxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuZXhwb3J0IGNvbnN0IElyb25BMTF5QW5ub3VuY2VyID0gUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjbGlwOiByZWN0KDBweCwwcHgsMHB4LDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGFyaWEtbGl2ZSQ9XCJbW21vZGVdXVwiPltbX3RleHRdXTwvZGl2PlxuYCxcblxuICBpczogJ2lyb24tYTExeS1hbm5vdW5jZXInLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiBtb2RlIGlzIHVzZWQgdG8gc2V0IHRoZSBgYXJpYS1saXZlYCBhdHRyaWJ1dGVcbiAgICAgKiBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGFubm91bmNlZC4gVmFsaWQgdmFsdWVzIGFyZTogYG9mZmAsXG4gICAgICogYHBvbGl0ZWAgYW5kIGBhc3NlcnRpdmVgLlxuICAgICAqL1xuICAgIG1vZGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncG9saXRlJ30sXG5cbiAgICBfdGV4dDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgIElyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdpcm9uLWFubm91bmNlJywgdGhpcy5fb25Jcm9uQW5ub3VuY2UuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhdXNlIGEgdGV4dCBzdHJpbmcgdG8gYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHNob3VsZCBiZSBhbm5vdW5jZWQuXG4gICAqL1xuICBhbm5vdW5jZTogZnVuY3Rpb24odGV4dCkge1xuICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgfSwgMTAwKTtcbiAgfSxcblxuICBfb25Jcm9uQW5ub3VuY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGV4dCkge1xuICAgICAgdGhpcy5hbm5vdW5jZShldmVudC5kZXRhaWwudGV4dCk7XG4gICAgfVxuICB9XG59KTtcblxuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBudWxsO1xuXG5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICBJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24tYTExeS1hbm5vdW5jZXInKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yIGFkZHMgYSBgbmFtZWAsIGB2YWx1ZWAgYW5kIGByZXF1aXJlZGAgcHJvcGVydGllcyB0b1xuICBhIGN1c3RvbSBlbGVtZW50LiBJdCBtb3N0bHkgZXhpc3RzIGZvciBiYWNrY29tcGF0aWJpbGl0eSB3aXRoIFBvbHltZXIgMS54LCBhbmRcbiAgaXMgcHJvYmFibHkgbm90IHNvbWV0aGluZyB5b3Ugd2FudCB0byB1c2UuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25Gb3JtRWxlbWVudEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICovXG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB2YWx1ZToge25vdGlmeTogdHJ1ZSwgdHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLiBJZiB1c2VkIGluIGEgZm9ybSwgYVxuICAgICAqIGN1c3RvbSBlbGVtZW50IHRoYXQgdXNlcyB0aGlzIGJlaGF2aW9yIHNob3VsZCBhbHNvIHVzZVxuICAgICAqIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yIGFuZCBkZWZpbmUgYSBjdXN0b20gdmFsaWRhdGlvbiBtZXRob2QuXG4gICAgICogT3RoZXJ3aXNlLCBhIGByZXF1aXJlZGAgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBjb25zaWRlcmVkIHZhbGlkLlxuICAgICAqIEl0J3MgYWxzbyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBwcm92aWRlIGEgdmlzdWFsIHN0eWxlIGZvciB0aGUgZWxlbWVudFxuICAgICAqIHdoZW4gaXRzIHZhbHVlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgcmVxdWlyZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuICB9LFxuXG4gIC8vIEVtcHR5IGltcGxlbWVudGF0aW9ucyBmb3IgYmFja2NvbXBhdGliaWxpdHkuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHt9LFxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7fVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUFubm91bmNlcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYDxpcm9uLWlucHV0PmAgaXMgYSB3cmFwcGVyIHRvIGEgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50LCB0aGF0IGFkZHMgdHdvLXdheVxuYmluZGluZyBhbmQgcHJldmVudGlvbiBvZiBpbnZhbGlkIGlucHV0LiBUbyB1c2UgaXQsIHlvdSBtdXN0IGRpc3RyaWJ1dGUgYSBuYXRpdmVcbmA8aW5wdXQ+YCB5b3Vyc2VsZi4gWW91IGNhbiBjb250aW51ZSB0byB1c2UgdGhlIG5hdGl2ZSBgaW5wdXRgIGFzIHlvdSB3b3VsZFxubm9ybWFsbHk6XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiAgICA8aXJvbi1pbnB1dD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBkaXNhYmxlZD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbiMjIyBUd28td2F5IGJpbmRpbmdcblxuQnkgZGVmYXVsdCB5b3UgY2FuIG9ubHkgZ2V0IG5vdGlmaWVkIG9mIGNoYW5nZXMgdG8gYSBuYXRpdmUgYDxpbnB1dD5gJ3MgYHZhbHVlYFxuZHVlIHRvIHVzZXIgaW5wdXQ6XG5cbiAgICA8aW5wdXQgdmFsdWU9XCJ7e215VmFsdWU6OmlucHV0fX1cIj5cblxuVGhpcyBtZWFucyB0aGF0IGlmIHlvdSBpbXBlcmF0aXZlbHkgc2V0IHRoZSB2YWx1ZSAoaS5lLiBgc29tZU5hdGl2ZUlucHV0LnZhbHVlID1cbidmb28nYCksIG5vIGV2ZW50cyB3aWxsIGJlIGZpcmVkIGFuZCB0aGlzIGNoYW5nZSBjYW5ub3QgYmUgb2JzZXJ2ZWQuXG5cbmBpcm9uLWlucHV0YCBhZGRzIHRoZSBgYmluZC12YWx1ZWAgcHJvcGVydHkgdGhhdCBtaXJyb3JzIHRoZSBuYXRpdmUgYGlucHV0YCdzXG4nYHZhbHVlYCBwcm9wZXJ0eTsgdGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcuXG5gYmluZC12YWx1ZWAgd2lsbCBub3RpZnkgaWYgaXQgaXMgY2hhbmdlZCBlaXRoZXIgYnkgdXNlciBpbnB1dCBvciBieSBzY3JpcHQuXG5cbiAgICA8aXJvbi1pbnB1dCBiaW5kLXZhbHVlPVwie3tteVZhbHVlfX1cIj5cbiAgICAgIDxpbnB1dD5cbiAgICA8L2lyb24taW5wdXQ+XG5cbk5vdGU6IHRoaXMgbWVhbnMgdGhhdCBpZiB5b3Ugd2FudCB0byBpbXBlcmF0aXZlbHkgc2V0IHRoZSBuYXRpdmUgYGlucHV0YCdzLCB5b3Vcbl9tdXN0XyBzZXQgYGJpbmQtdmFsdWVgIGluc3RlYWQsIHNvIHRoYXQgdGhlIHdyYXBwZXIgYGlyb24taW5wdXRgIGNhbiBiZVxubm90aWZpZWQuXG5cbiMjIyBWYWxpZGF0aW9uXG5cbmBpcm9uLWlucHV0YCB1c2VzIHRoZSBuYXRpdmUgYGlucHV0YCdzIHZhbGlkYXRpb24uIEZvciBzaW1wbGljaXR5LCBgaXJvbi1pbnB1dGBcbmhhcyBhIGB2YWxpZGF0ZSgpYCBtZXRob2QgKHdoaWNoIGludGVybmFsbHkganVzdCBjaGVja3MgdGhlIGRpc3RyaWJ1dGVkXG5gaW5wdXRgJ3MgdmFsaWRpdHkpLCB3aGljaCBzZXRzIGFuIGBpbnZhbGlkYCBhdHRyaWJ1dGUgdGhhdCBjYW4gYWxzbyBiZSB1c2VkIGZvclxuc3R5bGluZy5cblxuVG8gdmFsaWRhdGUgYXV0b21hdGljYWxseSBhcyB5b3UgdHlwZSwgeW91IGNhbiB1c2UgdGhlIGBhdXRvLXZhbGlkYXRlYFxuYXR0cmlidXRlLlxuXG5gaXJvbi1pbnB1dGAgYWxzbyBmaXJlcyBhbiBgaXJvbi1pbnB1dC12YWxpZGF0ZWAgZXZlbnQgYWZ0ZXIgYHZhbGlkYXRlKClgIGlzXG5jYWxsZWQuIFlvdSBjYW4gdXNlIGl0IHRvIGltcGxlbWVudCBhIGN1c3RvbSB2YWxpZGF0b3I6XG5cbiAgICB2YXIgQ2F0c09ubHlWYWxpZGF0b3IgPSB7XG4gICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oaXJvbklucHV0KSB7XG4gICAgICAgIHZhciB2YWxpZCA9ICFpcm9uSW5wdXQuYmluZFZhbHVlIHx8IGlyb25JbnB1dC5iaW5kVmFsdWUgPT09ICdjYXQnO1xuICAgICAgICBpcm9uSW5wdXQuaW52YWxpZCA9ICF2YWxpZDtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgfVxuICAgIH1cbiAgICBpcm9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pbnB1dC12YWxpZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgQ2F0c09ubHkudmFsaWRhdGUoaW5wdXQyKTtcbiAgICB9KTtcblxuWW91IGNhbiBhbHNvIHVzZSBhbiBlbGVtZW50IGltcGxlbWVudGluZyBhblxuW2BJcm9uVmFsaWRhdG9yQmVoYXZpb3JgXSgvZWxlbWVudC9Qb2x5bWVyRWxlbWVudHMvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvcikuXG5UaGlzIGV4YW1wbGUgY2FuIGFsc28gYmUgZm91bmQgaW4gdGhlIGRlbW8gZm9yIHRoaXMgZWxlbWVudDpcblxuICAgIDxpcm9uLWlucHV0IHZhbGlkYXRvcj1cImNhdHMtb25seVwiPlxuICAgICAgPGlucHV0PlxuICAgIDwvaXJvbi1pbnB1dD5cblxuIyMjIFByZXZlbnRpbmcgaW52YWxpZCBpbnB1dFxuXG5JdCBtYXkgYmUgZGVzaXJhYmxlIHRvIG9ubHkgYWxsb3cgdXNlcnMgdG8gZW50ZXIgY2VydGFpbiBjaGFyYWN0ZXJzLiBZb3UgY2FuIHVzZVxudGhlIGBhbGxvd2VkLXBhdHRlcm5gIGF0dHJpYnV0ZSB0byBhY2NvbXBsaXNoIHRoaXMuIFRoaXMgZmVhdHVyZSBpcyBzZXBhcmF0ZVxuZnJvbSB2YWxpZGF0aW9uLCBhbmQgYGFsbG93ZWQtcGF0dGVybmAgZG9lcyBub3QgYWZmZWN0IGhvdyB0aGUgaW5wdXQgaXNcbnZhbGlkYXRlZC5cblxuICAgIC8vIE9ubHkgYWxsb3cgdHlwaW5nIGRpZ2l0cywgYnV0IGEgdmFsaWQgaW5wdXQgaGFzIGV4YWN0bHkgNSBkaWdpdHMuXG4gICAgPGlyb24taW5wdXQgYWxsb3dlZC1wYXR0ZXJuPVwiWzAtOV1cIj5cbiAgICAgIDxpbnB1dCBwYXR0ZXJuPVwiXFxkezV9XCI+XG4gICAgPC9pcm9uLWlucHV0PlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3QgaWQ9XCJjb250ZW50XCI+PC9zbG90PlxuYCxcblxuICBpczogJ2lyb24taW5wdXQnLFxuICBiZWhhdmlvcnM6IFtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcl0sXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW5ldmVyIGB2YWxpZGF0ZSgpYCBpcyBjYWxsZWQuXG4gICAqXG4gICAqIEBldmVudCBpcm9uLWlucHV0LXZhbGlkYXRlXG4gICAqL1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIHByb3BlcnR5IGluc3RlYWQgb2YgYHZhbHVlYCBmb3IgdHdvLXdheSBkYXRhIGJpbmRpbmcsIG9yIHRvXG4gICAgICogc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGlucHV0LiAqKkRvIG5vdCoqIHVzZSB0aGUgZGlzdHJpYnV0ZWRcbiAgICAgKiBpbnB1dCdzIGB2YWx1ZWAgcHJvcGVydHkgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKi9cbiAgICBiaW5kVmFsdWU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlZCBwcm9wZXJ0eSB0aGF0IGVjaG9lcyBgYmluZFZhbHVlYCAobW9zdGx5IHVzZWQgZm9yIFBvbHltZXIgMS4wXG4gICAgICogYmFja2NvbXBhdGliaWxpdHksIGlmIHlvdSB3ZXJlIG9uZS13YXkgYmluZGluZyB0byB0aGUgUG9seW1lciAxLjBcbiAgICAgKiBgaW5wdXQgaXM9XCJpcm9uLWlucHV0XCJgIHZhbHVlIGF0dHJpYnV0ZSkuXG4gICAgICovXG4gICAgdmFsdWU6IHt0eXBlOiBTdHJpbmcsIGNvbXB1dGVkOiAnX2NvbXB1dGVWYWx1ZShiaW5kVmFsdWUpJ30sXG5cbiAgICAvKipcbiAgICAgKiBSZWdleC1saWtlIGxpc3Qgb2YgY2hhcmFjdGVycyBhbGxvd2VkIGFzIGlucHV0OyBhbGwgY2hhcmFjdGVycyBub3QgaW4gdGhlXG4gICAgICogbGlzdCB3aWxsIGJlIHJlamVjdGVkLiBUaGUgcmVjb21tZW5kZWQgZm9ybWF0IHNob3VsZCBiZSBhIGxpc3Qgb2YgYWxsb3dlZFxuICAgICAqIGNoYXJhY3RlcnMsIGZvciBleGFtcGxlLCBgW2EtekEtWjAtOS4rLSE7Ol1gLlxuICAgICAqXG4gICAgICogVGhpcyBwYXR0ZXJuIHJlcHJlc2VudHMgdGhlIGFsbG93ZWQgY2hhcmFjdGVycyBmb3IgdGhlIGZpZWxkOyBhcyB0aGUgdXNlclxuICAgICAqIGlucHV0cyB0ZXh0LCBlYWNoIGluZGl2aWR1YWwgY2hhcmFjdGVyIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoZVxuICAgICAqIHBhdHRlcm4gKHJhdGhlciB0aGFuIGNoZWNraW5nIHRoZSBlbnRpcmUgdmFsdWUgYXMgYSB3aG9sZSkuIElmIGFcbiAgICAgKiBjaGFyYWN0ZXIgaXMgbm90IGEgbWF0Y2gsIGl0IHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAgICpcbiAgICAgKiBQYXN0ZWQgaW5wdXQgd2lsbCBoYXZlIGVhY2ggY2hhcmFjdGVyIGNoZWNrZWQgaW5kaXZpZHVhbGx5OyBpZiBhbnlcbiAgICAgKiBjaGFyYWN0ZXIgZG9lc24ndCBtYXRjaCBgYWxsb3dlZFBhdHRlcm5gLCB0aGUgZW50aXJlIHBhc3RlZCBzdHJpbmcgd2lsbFxuICAgICAqIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogTm90ZTogaWYgeW91IHdlcmUgdXNpbmcgYGlyb24taW5wdXRgIGluIDEuMCwgeW91IHdlcmUgYWxzbyByZXF1aXJlZCB0b1xuICAgICAqIHNldCBgcHJldmVudC1pbnZhbGlkLWlucHV0YC4gVGhpcyBpcyBubyBsb25nZXIgbmVlZGVkIGFzIG9mIFBvbHltZXIgMi4wLFxuICAgICAqIGFuZCB3aWxsIGJlIHNldCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaWYgYW4gYGFsbG93ZWRQYXR0ZXJuYCBpcyBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGFsbG93ZWRQYXR0ZXJuOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tdmFsaWRhdGUgdGhlIGlucHV0IHZhbHVlIGFzIHlvdSB0eXBlLlxuICAgICAqL1xuICAgIGF1dG9WYWxpZGF0ZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmF0aXZlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgX2lucHV0RWxlbWVudDogT2JqZWN0LFxuICB9LFxuXG4gIG9ic2VydmVyczogWydfYmluZFZhbHVlQ2hhbmdlZChiaW5kVmFsdWUsIF9pbnB1dEVsZW1lbnQpJ10sXG4gIGxpc3RlbmVyczogeydpbnB1dCc6ICdfb25JbnB1dCcsICdrZXlwcmVzcyc6ICdfb25LZXlwcmVzcyd9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIElyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgICB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSAnJztcbiAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGFkZGVkIGF0IGEgbGF0ZXIgdGltZSwgdXBkYXRlIHRoZSBpbnRlcm5hbCByZWZlcmVuY2UuXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBkb20odGhpcykub2JzZXJ2ZU5vZGVzKGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgIHRoaXMuX2luaXRTbG90dGVkSW5wdXQoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIGRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBpbnB1dCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50O1xuICB9LFxuXG4gIF9pbml0U2xvdHRlZElucHV0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQgPSB0aGlzLmdldEVmZmVjdGl2ZUNoaWxkcmVuKClbMF07XG5cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuYmluZFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5maXJlKCdpcm9uLWlucHV0LXJlYWR5Jyk7XG4gIH0sXG5cbiAgZ2V0IF9wYXR0ZXJuUmVnRXhwKCkge1xuICAgIHZhciBwYXR0ZXJuO1xuICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cCh0aGlzLmFsbG93ZWRQYXR0ZXJuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0aGlzLmlucHV0RWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgcGF0dGVybiA9IC9bMC05LixlLV0vO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfSxcblxuICAvKipcbiAgICogQHN1cHByZXNzIHtjaGVja1R5cGVzfVxuICAgKi9cbiAgX2JpbmRWYWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKGJpbmRWYWx1ZSwgaW5wdXRFbGVtZW50KSB7XG4gICAgLy8gVGhlIG9ic2VydmVyIGNvdWxkIGhhdmUgcnVuIGJlZm9yZSBhdHRhY2hlZCgpIHdoZW4gd2UgaGF2ZSBhY3R1YWxseVxuICAgIC8vIGluaXRpYWxpemVkIHRoaXMgcHJvcGVydHkuXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYmluZFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChiaW5kVmFsdWUgIT09IGlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBiaW5kVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b1ZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gbWFudWFsbHkgbm90aWZ5IGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBub3RpZnkgdW50aWwgYWZ0ZXIgc2V0dGluZyB2YWx1ZVxuICAgIHRoaXMuZmlyZSgnYmluZC12YWx1ZS1jaGFuZ2VkJywge3ZhbHVlOiBiaW5kVmFsdWV9KTtcbiAgfSxcblxuICBfb25JbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgLy8gTmVlZCB0byB2YWxpZGF0ZSBlYWNoIG9mIHRoZSBjaGFyYWN0ZXJzIHBhc3RlZCBpZiB0aGV5IGhhdmVuJ3RcbiAgICAvLyBiZWVuIHZhbGlkYXRlZCBpbnNpZGUgYF9vbktleXByZXNzYCBhbHJlYWR5LlxuICAgIGlmICh0aGlzLmFsbG93ZWRQYXR0ZXJuICYmICF0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQpIHtcbiAgICAgIHZhciB2YWxpZCA9IHRoaXMuX2NoZWNrUGF0dGVyblZhbGlkaXR5KCk7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcihcbiAgICAgICAgICAgICdJbnZhbGlkIHN0cmluZyBvZiBjaGFyYWN0ZXJzIG5vdCBlbnRlcmVkLicpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMuX3ByZXZpb3VzVmFsaWRJbnB1dDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iaW5kVmFsdWUgPSB0aGlzLl9wcmV2aW91c1ZhbGlkSW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgICB0aGlzLl9wYXR0ZXJuQWxyZWFkeUNoZWNrZWQgPSBmYWxzZTtcbiAgfSxcblxuICBfaXNQcmludGFibGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gV2hhdCBhIGNvbnRyb2wvcHJpbnRhYmxlIGNoYXJhY3RlciBpcyB2YXJpZXMgd2lsZGx5IGJhc2VkIG9uIHRoZSBicm93c2VyLlxuICAgIC8vIC0gbW9zdCBjb250cm9sIGNoYXJhY3RlcnMgKGFycm93cywgYmFja3NwYWNlKSBkbyBub3Qgc2VuZCBhIGBrZXlwcmVzc2BcbiAgICAvLyBldmVudFxuICAgIC8vICAgaW4gQ2hyb21lLCBidXQgdGhlICpkbyogb24gRmlyZWZveFxuICAgIC8vIC0gaW4gRmlyZWZveCwgd2hlbiB0aGV5IGRvIHNlbmQgYSBga2V5cHJlc3NgIGV2ZW50LCBjb250cm9sIGNoYXJzIGhhdmVcbiAgICAvLyAgIGEgY2hhckNvZGUgPSAwLCBrZXlDb2RlID0geHggKGZvciBleC4gNDAgZm9yIGRvd24gYXJyb3cpXG4gICAgLy8gLSBwcmludGFibGUgY2hhcmFjdGVycyBhbHdheXMgc2VuZCBhIGtleXByZXNzIGV2ZW50LlxuICAgIC8vIC0gaW4gRmlyZWZveCwgcHJpbnRhYmxlIGNoYXJzIGFsd2F5cyBoYXZlIGEga2V5Q29kZSA9IDAuIEluIENocm9tZSwgdGhlXG4gICAgLy8ga2V5Q29kZVxuICAgIC8vICAgYWx3YXlzIG1hdGNoZXMgdGhlIGNoYXJDb2RlLlxuICAgIC8vIE5vbmUgb2YgdGhpcyBtYWtlcyBhbnkgc2Vuc2UuXG5cbiAgICAvLyBGb3IgdGhlc2Uga2V5cywgQVNDSUkgY29kZSA9PSBicm93c2VyIGtleWNvZGUuXG4gICAgdmFyIGFueU5vblByaW50YWJsZSA9IChldmVudC5rZXlDb2RlID09IDgpIHx8ICAvLyBiYWNrc3BhY2VcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gOSkgfHwgICAgICAgICAgICAgICAgICAgIC8vIHRhYlxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxMykgfHwgICAgICAgICAgICAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPT0gMjcpOyAgICAgICAgICAgICAgICAgICAgIC8vIGVzY2FwZVxuXG4gICAgLy8gRm9yIHRoZXNlIGtleXMsIG1ha2Ugc3VyZSBpdCdzIGEgYnJvd3NlciBrZXljb2RlIGFuZCBub3QgYW4gQVNDSUkgY29kZS5cbiAgICB2YXIgbW96Tm9uUHJpbnRhYmxlID0gKGV2ZW50LmtleUNvZGUgPT0gMTkpIHx8ICAvLyBwYXVzZVxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAyMCkgfHwgICAgICAgICAgICAgICAgICAgIC8vIGNhcHMgbG9ja1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NSkgfHwgICAgICAgICAgICAgICAgICAgIC8vIGluc2VydFxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSA0NikgfHwgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZVxuICAgICAgICAoZXZlbnQua2V5Q29kZSA9PSAxNDQpIHx8ICAgICAgICAgICAgICAgICAgIC8vIG51bSBsb2NrXG4gICAgICAgIChldmVudC5rZXlDb2RlID09IDE0NSkgfHwgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsIGxvY2tcbiAgICAgICAgKGV2ZW50LmtleUNvZGUgPiAzMiAmJlxuICAgICAgICAgZXZlbnQua2V5Q29kZSA8IDQxKSB8fCAgLy8gcGFnZSB1cC9kb3duLCBlbmQsIGhvbWUsIGFycm93c1xuICAgICAgICAoZXZlbnQua2V5Q29kZSA+IDExMSAmJiBldmVudC5rZXlDb2RlIDwgMTI0KTsgIC8vIGZuIGtleXNcblxuICAgIHJldHVybiAhYW55Tm9uUHJpbnRhYmxlICYmICEoZXZlbnQuY2hhckNvZGUgPT0gMCAmJiBtb3pOb25QcmludGFibGUpO1xuICB9LFxuXG4gIF9vbktleXByZXNzOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd2VkUGF0dGVybiAmJiB0aGlzLmlucHV0RWxlbWVudC50eXBlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmVnZXhwID0gdGhpcy5fcGF0dGVyblJlZ0V4cDtcbiAgICBpZiAoIXJlZ2V4cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBzcGVjaWFsIGtleXMgYW5kIGJhY2tzcGFjZVxuICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIHBhdHRlcm4gZWl0aGVyIGhlcmUgb3IgaW4gYF9vbklucHV0YCwgYnV0IG5vdCBpbiBib3RoLlxuICAgIHRoaXMuX3BhdHRlcm5BbHJlYWR5Q2hlY2tlZCA9IHRydWU7XG5cbiAgICB2YXIgdGhpc0NoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKTtcbiAgICBpZiAodGhpcy5faXNQcmludGFibGUoZXZlbnQpICYmICFyZWdleHAudGVzdCh0aGlzQ2hhcikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9hbm5vdW5jZUludmFsaWRDaGFyYWN0ZXIoXG4gICAgICAgICAgJ0ludmFsaWQgY2hhcmFjdGVyICcgKyB0aGlzQ2hhciArICcgbm90IGVudGVyZWQuJyk7XG4gICAgfVxuICB9LFxuXG4gIF9jaGVja1BhdHRlcm5WYWxpZGl0eTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlZ2V4cCA9IHRoaXMuX3BhdHRlcm5SZWdFeHA7XG4gICAgaWYgKCFyZWdleHApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXJlZ2V4cC50ZXN0KHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gVGhlIHZhbGlkYXRvciBwcm92aWRlZCBpbiBgdmFsaWRhdG9yYFxuICAgKiB3aWxsIGJlIHVzZWQgZmlyc3QsIHRoZW4gYW55IGNvbnN0cmFpbnRzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgbmVzdGVkIGlucHV0J3MgbmF0aXZlIHZhbGlkaXR5LlxuICAgIHZhciB2YWxpZCA9IHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcblxuICAgIC8vIE9ubHkgZG8gZXh0cmEgY2hlY2tpbmcgaWYgdGhlIGJyb3dzZXIgdGhvdWdodCB0aGlzIHdhcyB2YWxpZC5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIC8vIEVtcHR5LCByZXF1aXJlZCBpbnB1dCBpcyBpbnZhbGlkXG4gICAgICBpZiAodGhpcy5yZXF1aXJlZCAmJiB0aGlzLmJpbmRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICB2YWxpZCA9IElyb25WYWxpZGF0YWJsZUJlaGF2aW9yLnZhbGlkYXRlLmNhbGwodGhpcywgdGhpcy5iaW5kVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW52YWxpZCA9ICF2YWxpZDtcbiAgICB0aGlzLmZpcmUoJ2lyb24taW5wdXQtdmFsaWRhdGUnKTtcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH0sXG5cbiAgX2Fubm91bmNlSW52YWxpZENoYXJhY3RlcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHRoaXMuZmlyZSgnaXJvbi1hbm5vdW5jZScsIHt0ZXh0OiBtZXNzYWdlfSk7XG4gIH0sXG5cbiAgX2NvbXB1dGVWYWx1ZTogZnVuY3Rpb24oYmluZFZhbHVlKSB7XG4gICAgcmV0dXJuIGJpbmRWYWx1ZTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbk1ldGF9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWV0YS9pcm9uLW1ldGEuanMnO1xuXG4vKipcbiAqIFNpbmdsZXRvbiBJcm9uTWV0YSBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGxldCBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEgPSBudWxsO1xuXG4vKipcbiAqIGBVc2UgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBlbGVtZW50IHRoYXQgdmFsaWRhdGVzXG4gKiB1c2VyIGlucHV0LiBVc2UgdGhlIHJlbGF0ZWQgYElyb25WYWxpZGF0b3JCZWhhdmlvcmAgdG8gYWRkIGN1c3RvbVxuICogdmFsaWRhdGlvbiBsb2dpYyB0byBhbiBpcm9uLWlucHV0LlxuICpcbiAqIEJ5IGRlZmF1bHQsIGFuIGA8aXJvbi1mb3JtPmAgZWxlbWVudCB2YWxpZGF0ZXMgaXRzIGZpZWxkcyB3aGVuIHRoZSB1c2VyXG4gKiBwcmVzc2VzIHRoZSBzdWJtaXQgYnV0dG9uLiBUbyB2YWxpZGF0ZSBhIGZvcm0gaW1wZXJhdGl2ZWx5LCBjYWxsIHRoZSBmb3JtJ3NcbiAqIGB2YWxpZGF0ZSgpYCBtZXRob2QsIHdoaWNoIGluIHR1cm4gd2lsbCBjYWxsIGB2YWxpZGF0ZSgpYCBvbiBhbGwgaXRzXG4gKiBjaGlsZHJlbi4gQnkgdXNpbmcgYElyb25WYWxpZGF0YWJsZUJlaGF2aW9yYCwgeW91ciBjdXN0b20gZWxlbWVudFxuICogd2lsbCBnZXQgYSBwdWJsaWMgYHZhbGlkYXRlKClgLCB3aGljaCB3aWxsIHJldHVybiB0aGUgdmFsaWRpdHkgb2YgdGhlXG4gKiBlbGVtZW50LCBhbmQgYSBjb3JyZXNwb25kaW5nIGBpbnZhbGlkYCBhdHRyaWJ1dGUsIHdoaWNoIGNhbiBiZSB1c2VkIGZvclxuICogc3R5bGluZy5cbiAqXG4gKiBUbyBpbXBsZW1lbnQgdGhlIGN1c3RvbSB2YWxpZGF0aW9uIGxvZ2ljIG9mIHlvdXIgZWxlbWVudCwgeW91IG11c3Qgb3ZlcnJpZGVcbiAqIHRoZSBwcm90ZWN0ZWQgYF9nZXRWYWxpZGl0eSgpYCBtZXRob2Qgb2YgdGhpcyBiZWhhdmlvdXIsIHJhdGhlciB0aGFuXG4gKiBgdmFsaWRhdGUoKWAuIFNlZVxuICogW3RoaXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1mb3JtL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLWVsZW1lbnQuaHRtbClcbiAqIGZvciBhbiBleGFtcGxlLlxuICpcbiAqICMjIyBBY2Nlc3NpYmlsaXR5XG4gKlxuICogQ2hhbmdpbmcgdGhlIGBpbnZhbGlkYCBwcm9wZXJ0eSwgZWl0aGVyIG1hbnVhbGx5IG9yIGJ5IGNhbGxpbmcgYHZhbGlkYXRlKClgXG4gKiB3aWxsIHVwZGF0ZSB0aGUgYGFyaWEtaW52YWxpZGAgYXR0cmlidXRlLlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIHZhbGlkYXRvciB0byB1c2UuXG4gICAgICovXG4gICAgdmFsaWRhdG9yOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGxhc3QgY2FsbCB0byBgdmFsaWRhdGVgIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaW52YWxpZDoge1xuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiAnX2ludmFsaWRDaGFuZ2VkJ1xuICAgIH0sXG4gIH0sXG5cbiAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3JNZXRhID0gbmV3IElyb25NZXRhKHt0eXBlOiAndmFsaWRhdG9yJ30pO1xuICB9LFxuXG4gIF9pbnZhbGlkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyogUmVjb21wdXRlIHRoaXMgZXZlcnkgdGltZSBpdCdzIG5lZWRlZCwgYmVjYXVzZSB3ZSBkb24ndCBrbm93IGlmIHRoZVxuICAgKiB1bmRlcmx5aW5nIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSBoYXMgY2hhbmdlZC4gKi9cbiAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgcmV0dXJuIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yTWV0YSAmJlxuICAgICAgICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvck1ldGEuYnlLZXkodGhpcy52YWxpZGF0b3IpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWxpZGF0b3IgYHZhbGlkYXRvcmAgZXhpc3RzLlxuICAgKi9cbiAgaGFzVmFsaWRhdG9yOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yICE9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHVwZGF0ZXMgYGludmFsaWRgLiBJZiB5b3Ugd2FudFxuICAgKiB5b3VyIGVsZW1lbnQgdG8gaGF2ZSBjdXN0b20gdmFsaWRhdGlvbiBsb2dpYywgZG8gbm90IG92ZXJyaWRlIHRoaXMgbWV0aG9kO1xuICAgKiBvdmVycmlkZSBgX2dldFZhbGlkaXR5KHZhbHVlKWAgaW5zdGVhZC5cblxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgRGVwcmVjYXRlZDogVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC4gQnkgZGVmYXVsdCxcbiAgICogaXQgaXMgcGFzc2VkIHRvIHRoZSB2YWxpZGF0b3IncyBgdmFsaWRhdGUoKWAgZnVuY3Rpb24sIGlmIGEgdmFsaWRhdG9yIGlzXG4gICBzZXQuXG4gICAqIElmIHRoaXMgYXJndW1lbnQgaXMgbm90IHNwZWNpZmllZCwgdGhlbiB0aGUgZWxlbWVudCdzIGB2YWx1ZWAgcHJvcGVydHlcbiAgICogaXMgdXNlZCwgaWYgaXQgZXhpc3RzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGFuIGVsZW1lbnQgdGhhdCBhbHNvIGhhcyBhIHZhbHVlIHByb3BlcnR5LCBhbmQgdGhlcmUgd2FzXG4gICAgLy8gbm8gZXhwbGljaXQgdmFsdWUgYXJndW1lbnQgcGFzc2VkLCB1c2UgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLl9nZXRWYWxpZGl0eSh0aGlzLnZhbHVlKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmludmFsaWQgPSAhdGhpcy5fZ2V0VmFsaWRpdHkodmFsdWUpO1xuICAgIHJldHVybiAhdGhpcy5pbnZhbGlkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gIEJ5IGRlZmF1bHQsIGl0IGlzIHBhc3NlZFxuICAgKiB0byB0aGUgdmFsaWRhdG9yJ3MgYHZhbGlkYXRlKClgIGZ1bmN0aW9uLCBpZiBhIHZhbGlkYXRvciBpcyBzZXQuIFlvdVxuICAgKiBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IGN1c3RvbSB2YWxpZGl0eVxuICAgKiBsb2dpYyBmb3IgeW91ciBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgKi9cblxuICBfZ2V0VmFsaWRpdHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRhdG9yKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7OztBQURBO0FBWUE7QUFFQTtBQUVBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkRBO0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBcEJBO0FBdUJBO0FBQ0E7QUFDQTtBQTNCQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRkE7QUFDQTs7Ozs7OztBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBTUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUE3Q0E7QUFnREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFRQTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7OztBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFFQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVRBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQW5GQTs7OztBIiwic291cmNlUm9vdCI6IiJ9