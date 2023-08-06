(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~zone-detail-dialog"],{

/***/ "./node_modules/@material/mwc-base/base-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/base-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return BaseElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/@material/mwc-base/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer_js__WEBPACK_IMPORTED_MODULE_1__["observer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@material/mwc-base/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



class BaseElement extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== undefined) {
      this.mdcFoundation.destroy();
    }

    this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
    this.mdcFoundation.init();
  }

  firstUpdated() {
    this.createFoundation();
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: observer, addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
  createRenderRoot() {
    return this.attachShadow({
      mode: 'open',
      delegatesFocus: true
    });
  }

  click() {
    if (this.formElement) {
      this.formElement.focus();
      this.formElement.click();
    }
  }

  setAriaLabel(label) {
    if (this.formElement) {
      this.formElement.setAttribute('aria-label', label);
    }
  }

  firstUpdated() {
    super.firstUpdated();
    this.mdcRoot.addEventListener('change', e => {
      this.dispatchEvent(new Event('change', e));
    });
  }

}

/***/ }),

/***/ "./node_modules/@material/mwc-base/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/mwc-base/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
const observer = observer => // eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
  // if we haven't wrapped `updated` in this class, do so
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;

    proto.updated = function (changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v, k) => {
        const observer = this.constructor._observers.get(k);

        if (observer !== undefined) {
          observer.call(this, this[k], v);
        }
      });
    }; // clone any existing observers (superclasses)

  } else if (!proto.constructor.hasOwnProperty('_observers')) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, k) => proto.constructor._observers.set(k, v));
  } // set this method


  proto.constructor._observers.set(propName, observer);
};

/***/ }),

/***/ "./node_modules/@material/mwc-base/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/mwc-base/utils.js ***!
  \**************************************************/
/*! exports provided: isNodeElement, findAssignedElement, addHasRemoveClass, supportsPassiveEventListener, deepActiveElementPath, doesElementContainFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeElement", function() { return isNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAssignedElement", function() { return findAssignedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return addHasRemoveClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListener", function() { return supportsPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepActiveElementPath", function() { return deepActiveElementPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Return an element assigned to a given slot that matches the given selector
 */

/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */

const isNodeElement = node => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function findAssignedElement(slot, selector) {
  for (const node of slot.assignedNodes({
    flatten: true
  })) {
    if (isNodeElement(node)) {
      const el = node;

      if (Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_0__["matches"])(el, selector)) {
        return el;
      }
    }
  }

  return null;
}
function addHasRemoveClass(element) {
  return {
    addClass: className => {
      element.classList.add(className);
    },
    removeClass: className => {
      element.classList.remove(className);
    },
    hasClass: className => element.classList.contains(className)
  };
}
let supportsPassive = false;

const fn = () => {};

const optionsBlock = {
  get passive() {
    supportsPassive = true;
    return false;
  }

};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
/**
 * Do event listeners suport the `passive` option?
 */

const supportsPassiveEventListener = supportsPassive;
const deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];

  if (!activeElement) {
    return path;
  }

  while (activeElement) {
    path.push(activeElement);

    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }

  return path;
};
const doesElementContainFocus = element => {
  const activePath = deepActiveElementPath();

  if (!activePath.length) {
    return false;
  }

  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event('check-if-focused', {
    bubbles: true,
    composed: true
  });
  let composedPath = [];

  const listener = ev => {
    composedPath = ev.composedPath();
  };

  document.body.addEventListener('check-if-focused', listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener('check-if-focused', listener);
  return composedPath.indexOf(element) !== -1;
};

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc356b25lLWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Jhc2UtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vc3JjL2Zvcm0tZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vc3JjL29ic2VydmVyLnRzIiwid2VicGFjazovLy9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZSc7XG5pbXBvcnQge0xpdEVsZW1lbnR9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IHtDb25zdHJ1Y3Rvcn0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQge29ic2VydmVyfSBmcm9tICcuL29ic2VydmVyLmpzJztcbmV4cG9ydCB7YWRkSGFzUmVtb3ZlQ2xhc3N9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0ICogZnJvbSAnQG1hdGVyaWFsL2Jhc2UvdHlwZXMuanMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLyoqXG4gICAqIFJvb3QgZWxlbWVudCBmb3IgTURDIEZvdW5kYXRpb24gdXNhZ2UuXG4gICAqXG4gICAqIERlZmluZSBpbiB5b3VyIGNvbXBvbmVudCB3aXRoIHRoZSBgQHF1ZXJ5YCBkZWNvcmF0b3JcbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBtZGNSb290OiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IG1kY0ZvdW5kYXRpb25DbGFzczogQ29uc3RydWN0b3I8TURDRm91bmRhdGlvbj47XG5cbiAgLyoqXG4gICAqIEFuIGluc3RhbmNlIG9mIHRoZSBNREMgRm91bmRhdGlvbiBjbGFzcyB0byBhdHRhY2ggdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG1kY0ZvdW5kYXRpb246IE1EQ0ZvdW5kYXRpb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYWRhcHRlciBmb3IgdGhlIGBtZGNGb3VuZGF0aW9uYC5cbiAgICpcbiAgICogT3ZlcnJpZGUgYW5kIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgQWRhcHRlcidzIGZ1bmN0aW9ucyBpbXBsZW1lbnRlZDpcbiAgICpcbiAgICogICAge1xuICAgKiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICogICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAqICAgICAgLi4uXG4gICAqICAgIH1cbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVBZGFwdGVyKCk6IHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYXR0YWNoIHRoZSBNREMgRm91bmRhdGlvbiB0byB0aGUgaW5zdGFuY2VcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVGb3VuZGF0aW9uKCkge1xuICAgIGlmICh0aGlzLm1kY0ZvdW5kYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uID0gbmV3IHRoaXMubWRjRm91bmRhdGlvbkNsYXNzKHRoaXMuY3JlYXRlQWRhcHRlcigpKTtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaW5pdCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvdW5kYXRpb24oKTtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQge01EQ1JpcHBsZUZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyc7XG5cbmltcG9ydCB7QmFzZUVsZW1lbnR9IGZyb20gJy4vYmFzZS1lbGVtZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9iYXNlLWVsZW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxFbGVtZW50V2l0aFJpcHBsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgcmlwcGxlPzogTURDUmlwcGxlRm91bmRhdGlvbjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuICAvKipcbiAgICogRm9ybS1jYXBhYmxlIGVsZW1lbnQgaW4gdGhlIGNvbXBvbmVudCBTaGFkb3dSb290LlxuICAgKlxuICAgKiBEZWZpbmUgaW4geW91ciBjb21wb25lbnQgd2l0aCB0aGUgYEBxdWVyeWAgZGVjb3JhdG9yXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9ybUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudCByaXBwbGUgZ2V0dGVyIGZvciBSaXBwbGUgaW50ZWdyYXRpb24gd2l0aCBtd2MtZm9ybWZpZWxkXG4gICAqL1xuICByZWFkb25seSByaXBwbGU/OiBNRENSaXBwbGVGb3VuZGF0aW9uO1xuXG4gIGNsaWNrKCkge1xuICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJpYUxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtQcm9wZXJ0eVZhbHVlc30gZnJvbSAnbGl0LWVsZW1lbnQvbGliL3VwZGF0aW5nLWVsZW1lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgKHZhbHVlOiBhbnksIG9sZDogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IG9ic2VydmVyID0gKG9ic2VydmVyOiBPYnNlcnZlcikgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIChwcm90bzogYW55LCBwcm9wTmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIC8vIGlmIHdlIGhhdmVuJ3Qgd3JhcHBlZCBgdXBkYXRlZGAgaW4gdGhpcyBjbGFzcywgZG8gc29cbiAgICAgIGlmICghcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycykge1xuICAgICAgICBwcm90by5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgT2JzZXJ2ZXI+KCk7XG4gICAgICAgIGNvbnN0IHVzZXJVcGRhdGVkID0gcHJvdG8udXBkYXRlZDtcbiAgICAgICAgcHJvdG8udXBkYXRlZCA9IGZ1bmN0aW9uKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgICAgICAgIHVzZXJVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgIGNoYW5nZWRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5jb25zdHJ1Y3Rvci5fb2JzZXJ2ZXJzLmdldChrKTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLmNhbGwodGhpcywgdGhpc1trXSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGNsb25lIGFueSBleGlzdGluZyBvYnNlcnZlcnMgKHN1cGVyY2xhc3NlcylcbiAgICAgIH0gZWxzZSBpZiAoIXByb3RvLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KCdfb2JzZXJ2ZXJzJykpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJzID0gcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycztcbiAgICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2goXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKHY6IGFueSwgazogUHJvcGVydHlLZXkpID0+IHByb3RvLmNvbnN0cnVjdG9yLl9vYnNlcnZlcnMuc2V0KGssIHYpKTtcbiAgICAgIH1cbiAgICAgIC8vIHNldCB0aGlzIG1ldGhvZFxuICAgICAgcHJvdG8uY29uc3RydWN0b3IuX29ic2VydmVycy5zZXQocHJvcE5hbWUsIG9ic2VydmVyKTtcbiAgICB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG4vKipcbiAqIFJldHVybiBhbiBlbGVtZW50IGFzc2lnbmVkIHRvIGEgZ2l2ZW4gc2xvdCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHNlbGVjdG9yXG4gKi9cblxuaW1wb3J0IHttYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBub2RlIGlzIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBjaGVja1xuICovXG5leHBvcnQgY29uc3QgaXNOb2RlRWxlbWVudCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBFbGVtZW50ID0+IHtcbiAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBc3NpZ25lZEVsZW1lbnQoc2xvdDogSFRNTFNsb3RFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIGZvciAoY29uc3Qgbm9kZSBvZiBzbG90LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KSkge1xuICAgIGlmIChpc05vZGVFbGVtZW50KG5vZGUpKSB7XG4gICAgICBjb25zdCBlbCA9IChub2RlIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IHR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSGFzUmVtb3ZlQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDbGFzczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0sXG4gICAgaGFzQ2xhc3M6IChjbGFzc05hbWU6IHN0cmluZykgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgfTtcbn1cblxubGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuY29uc3QgZm4gPSAoKSA9PiB7IC8qIGVtcHR5IGxpc3RlbmVyICovIH07XG5jb25zdCBvcHRpb25zQmxvY2s6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3gnLCBmbiwgb3B0aW9uc0Jsb2NrKTtcbmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3gnLCBmbik7XG4vKipcbiAqIERvIGV2ZW50IGxpc3RlbmVycyBzdXBvcnQgdGhlIGBwYXNzaXZlYCBvcHRpb24/XG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyID0gc3VwcG9ydHNQYXNzaXZlO1xuXG5leHBvcnQgY29uc3QgZGVlcEFjdGl2ZUVsZW1lbnRQYXRoID0gKGRvYyA9IHdpbmRvdy5kb2N1bWVudCk6IEVsZW1lbnRbXSA9PiB7XG4gIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gIGNvbnN0IHBhdGg6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBwYXRoLnB1c2goYWN0aXZlRWxlbWVudCk7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBkb2VzRWxlbWVudENvbnRhaW5Gb2N1cyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBhY3RpdmVQYXRoID0gZGVlcEFjdGl2ZUVsZW1lbnRQYXRoKCk7XG5cbiAgaWYgKCFhY3RpdmVQYXRoLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRlZXBBY3RpdmVFbGVtZW50ID0gYWN0aXZlUGF0aFthY3RpdmVQYXRoLmxlbmd0aCAtIDFdO1xuICBjb25zdCBmb2N1c0V2ID1cbiAgICAgIG5ldyBFdmVudCgnY2hlY2staWYtZm9jdXNlZCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pO1xuICBsZXQgY29tcG9zZWRQYXRoOiBFdmVudFRhcmdldFtdID0gW107XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2OiBFdmVudCkgPT4ge1xuICAgIGNvbXBvc2VkUGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2hlY2staWYtZm9jdXNlZCcsIGxpc3RlbmVyKTtcbiAgZGVlcEFjdGl2ZUVsZW1lbnQuZGlzcGF0Y2hFdmVudChmb2N1c0V2KTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGVjay1pZi1mb2N1c2VkJywgbGlzdGVuZXIpO1xuXG4gIHJldHVybiBjb21wb3NlZFBhdGguaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWNoYXItY291bnRlci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY29udGFpbmVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1lcnJvci5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7RG9tTW9kdWxlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge1BhcGVySW5wdXRCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbnB1dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbVGV4dFxuZmllbGRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdGV4dC1maWVsZHMuaHRtbClcblxuYDxwYXBlci1pbnB1dD5gIGlzIGEgc2luZ2xlLWxpbmUgdGV4dCBmaWVsZCB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwiSW5wdXQgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBtYXkgaW5jbHVkZSBhbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIG9yIGNoYXJhY3RlciBjb3VudGVyLlxuXG4gICAgPHBhcGVyLWlucHV0IGVycm9yLW1lc3NhZ2U9XCJJbnZhbGlkIGlucHV0IVwiIGxhYmVsPVwiSW5wdXRcbiAgICBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+IDxwYXBlci1pbnB1dCBjaGFyLWNvdW50ZXIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD5cblxuSXQgY2FuIGFsc28gaW5jbHVkZSBjdXN0b20gcHJlZml4IG9yIHN1ZmZpeCBlbGVtZW50cywgd2hpY2ggYXJlIGRpc3BsYXllZFxuYmVmb3JlIG9yIGFmdGVyIHRoZSB0ZXh0IGlucHV0IGl0c2VsZi4gSW4gb3JkZXIgZm9yIGFuIGVsZW1lbnQgdG8gYmVcbmNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgYHByZWZpeGAgYXR0cmlidXRlIChhbmQgc2ltaWxhcmx5XG5mb3IgYHN1ZmZpeGApLlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwidG90YWxcIj5cbiAgICAgIDxkaXYgcHJlZml4PiQ8L2Rpdj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgaWNvbj1cImNsZWFyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L3BhcGVyLWlucHV0PlxuXG5BIGBwYXBlci1pbnB1dGAgY2FuIHVzZSB0aGUgbmF0aXZlIGB0eXBlPXNlYXJjaGAgb3IgYHR5cGU9ZmlsZWAgZmVhdHVyZXMuXG5Ib3dldmVyLCBzaW5jZSB3ZSBjYW4ndCBjb250cm9sIHRoZSBuYXRpdmUgc3R5bGluZyBvZiB0aGUgaW5wdXQgKHNlYXJjaCBpY29uLFxuZmlsZSBidXR0b24sIGRhdGUgcGxhY2Vob2xkZXIsIGV0Yy4pLCBpbiB0aGVzZSBjYXNlcyB0aGUgbGFiZWwgd2lsbCBiZVxuYXV0b21hdGljYWxseSBmbG9hdGVkLiBUaGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgY2FuIHN0aWxsIGJlIHVzZWQgZm9yXG5hZGRpdGlvbmFsIGluZm9ybWF0aW9uYWwgdGV4dC5cblxuICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cInNlYXJjaCFcIiB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGNhdHNcIiBhdXRvc2F2ZT1cInRlc3RcIiByZXN1bHRzPVwiNVwiPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgRm9jdXNcblxuVG8gZm9jdXMgYSBwYXBlci1pbnB1dCwgeW91IGNhbiBjYWxsIHRoZSBuYXRpdmUgYGZvY3VzKClgIG1ldGhvZCBhcyBsb25nIGFzIHRoZVxucGFwZXIgaW5wdXQgaGFzIGEgdGFiIGluZGV4LiBTaW1pbGFybHksIGBibHVyKClgIHdpbGwgYmx1ciB0aGUgZWxlbWVudC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLWNsZWFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIEludGVybmV0IEV4cGxvcmVyIHJldmVhbCBidXR0b24gKHRoZSBleWViYWxsKSB8IHt9XG5cbkBlbGVtZW50IHBhcGVyLWlucHV0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pbnB1dCcsXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgLyogRmlyZWZveCBzZXRzIGEgbWluLXdpZHRoIG9uIHRoZSBpbnB1dCwgd2hpY2ggY2FuIGNhdXNlIGxheW91dCBpc3N1ZXMgKi9cbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoZSA8aW5wdXQ+IGlzIGRpc3RyaWJ1dGVkIHRvIHBhcGVyLWlucHV0LWNvbnRhaW5lciwgd2hpY2ggc3R5bGVzIGl0LlxuICAgICAgSW4gMi54IHRoZSA8aXJvbi1pbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXNcbiAgICAgIGl0LCBidXQgaW4gb3JkZXIgZm9yIHRoaXMgdG8gd29yayBjb3JyZWN0bHksIHdlIG5lZWQgdG8gcmVzZXQgc29tZVxuICAgICAgb2YgdGhlIG5hdGl2ZSBpbnB1dCdzIHByb3BlcnRpZXMgdG8gaW5oZXJpdCAoZnJvbSB0aGUgaXJvbi1pbnB1dCkgKi9cbiAgICAgIGlyb24taW5wdXQgPiBpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1zaGFyZWQtaW5wdXQtc3R5bGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgICAgd29yZC1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1zcGlubmVyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jbGVhci1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNsZWFyO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtY2xlYXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLW1zLXJldmVhbDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgbGFiZWwge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLWlucHV0LWNvbnRhaW5lciBpZD1cImNvbnRhaW5lclwiIG5vLWxhYmVsLWZsb2F0PVwiW1tub0xhYmVsRmxvYXRdXVwiIGFsd2F5cy1mbG9hdC1sYWJlbD1cIltbX2NvbXB1dGVBbHdheXNGbG9hdExhYmVsKGFsd2F5c0Zsb2F0TGFiZWwscGxhY2Vob2xkZXIpXV1cIiBhdXRvLXZhbGlkYXRlJD1cIltbYXV0b1ZhbGlkYXRlXV1cIiBkaXNhYmxlZCQ9XCJbW2Rpc2FibGVkXV1cIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIj5cblxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvciQ9XCJbW19pbnB1dElkXV1cIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8IS0tIE5lZWQgdG8gYmluZCBtYXhsZW5ndGggc28gdGhhdCB0aGUgcGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHdvcmtzIGNvcnJlY3RseSAtLT5cbiAgICAgIDxpcm9uLWlucHV0IGJpbmQtdmFsdWU9XCJ7e3ZhbHVlfX1cIiBzbG90PVwiaW5wdXRcIiBjbGFzcz1cImlucHV0LWVsZW1lbnRcIiBpZCQ9XCJbW19pbnB1dElkXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIGFsbG93ZWQtcGF0dGVybj1cIltbYWxsb3dlZFBhdHRlcm5dXVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvcj1cIltbdmFsaWRhdG9yXV1cIj5cbiAgICAgICAgPGlucHV0IGFyaWEtbGFiZWxsZWRieSQ9XCJbW19hcmlhTGFiZWxsZWRCeV1dXCIgYXJpYS1kZXNjcmliZWRieSQ9XCJbW19hcmlhRGVzY3JpYmVkQnldXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIHRpdGxlJD1cIltbdGl0bGVdXVwiIHR5cGUkPVwiW1t0eXBlXV1cIiBwYXR0ZXJuJD1cIltbcGF0dGVybl1dXCIgcmVxdWlyZWQkPVwiW1tyZXF1aXJlZF1dXCIgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCIgbWlubGVuZ3RoJD1cIltbbWlubGVuZ3RoXV1cIiBtYXhsZW5ndGgkPVwiW1ttYXhsZW5ndGhdXVwiIG1pbiQ9XCJbW21pbl1dXCIgbWF4JD1cIltbbWF4XV1cIiBzdGVwJD1cIltbc3RlcF1dXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiIGxpc3QkPVwiW1tsaXN0XV1cIiBzaXplJD1cIltbc2l6ZV1dXCIgYXV0b2NhcGl0YWxpemUkPVwiW1thdXRvY2FwaXRhbGl6ZV1dXCIgYXV0b2NvcnJlY3QkPVwiW1thdXRvY29ycmVjdF1dXCIgb24tY2hhbmdlPVwiX29uQ2hhbmdlXCIgdGFiaW5kZXgkPVwiW1t0YWJJbmRleF1dXCIgYXV0b3NhdmUkPVwiW1thdXRvc2F2ZV1dXCIgcmVzdWx0cyQ9XCJbW3Jlc3VsdHNdXVwiIGFjY2VwdCQ9XCJbW2FjY2VwdF1dXCIgbXVsdGlwbGUkPVwiW1ttdWx0aXBsZV1dXCIgcm9sZSQ9XCJbW2lucHV0Um9sZV1dXCIgYXJpYS1oYXNwb3B1cCQ9XCJbW2lucHV0QXJpYUhhc3BvcHVwXV1cIj5cbiAgICAgIDwvaXJvbi1pbnB1dD5cblxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiIHNsb3Q9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG4gIGAsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJJbnB1dEJlaGF2aW9yLCBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIHZhbHVlOiB7XG4gICAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIGNvcnJlY3QgVHlwZVNjcmlwdCB0eXBlLWdlbmVyYXRpb25cbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG5cbiAgICBpbnB1dFJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcblxuICAgIGlucHV0QXJpYUhhc3BvcHVwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGZvY3VzYWJsZSBlbGVtZW50LiBPdmVycmlkZGVuIGZyb21cbiAgICogUGFwZXJJbnB1dEJlaGF2aW9yIHRvIGNvcnJlY3RseSBmb2N1cyB0aGUgbmF0aXZlIGlucHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHshSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXQgX2ZvY3VzYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50Ll9pbnB1dEVsZW1lbnQ7XG4gIH0sXG5cbiAgLy8gTm90ZTogVGhpcyBldmVudCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgMS4wIHZlcnNpb24gb2YgdGhpcyBlbGVtZW50LlxuICAvLyBJbiAyLjAsIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGBfb25Jcm9uSW5wdXRSZWFkeWAgaXMgZG9uZSBpblxuICAvLyBQYXBlcklucHV0QmVoYXZpb3I6OmF0dGFjaGVkLlxuICBsaXN0ZW5lcnM6IHsnaXJvbi1pbnB1dC1yZWFkeSc6ICdfb25Jcm9uSW5wdXRSZWFkeSd9LFxuXG4gIF9vbklyb25JbnB1dFJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFdmVuIHRob3VnaCB0aGlzIGlzIG9ubHkgdXNlZCBpbiB0aGUgbmV4dCBsaW5lLCBzYXZlIHRoaXMgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHNpbmNlIHRoZSBuYXRpdmUgaW5wdXQgaGFkIHRoaXMgSUQgdW50aWwgMi4wLjUuXG4gICAgaWYgKCF0aGlzLiQubmF0aXZlSW5wdXQpIHtcbiAgICAgIHRoaXMuJC5uYXRpdmVJbnB1dCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovICh0aGlzLiQkKCdpbnB1dCcpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX3R5cGVzVGhhdEhhdmVUZXh0LmluZGV4T2YodGhpcy4kLm5hdGl2ZUlucHV0LnR5cGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hbHdheXNGbG9hdExhYmVsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHZhbGlkYXRlIHdoZW4gYXR0YWNoZWQgaWYgdGhlIGlucHV0IGFscmVhZHkgaGFzIGEgdmFsdWUuXG4gICAgaWYgKCEhdGhpcy5pbnB1dEVsZW1lbnQuYmluZFZhbHVlKSB7XG4gICAgICB0aGlzLiQuY29udGFpbmVyLl9oYW5kbGVWYWx1ZUFuZEF1dG9WYWxpZGF0ZSh0aGlzLmlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9LFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUdBO0FBQ0E7QUFHQTtBQStCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUVBO0FBTUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7OztBQUlBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUE2R0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=