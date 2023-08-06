(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/@polymer/app-storage/app-storage-behavior.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-storage/app-storage-behavior.js ***!
  \*******************************************************************/
/*! exports provided: AppStorageBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStorageBehavior", function() { return AppStorageBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

var SPLICES_RX = /\.splices$/;
var LENGTH_RX = /\.length$/;
var NUMBER_RX = /\.?#?([0-9]+)$/;
/**
 * AppStorageBehavior is an abstract behavior that makes it easy to
 * synchronize in-memory data and a persistent storage system, such as
 * the browser's IndexedDB, or a remote database like Firebase.
 *
 * For examples of how to use this behavior to write your own app storage
 * elements see `<app-localstorage-document>` here, or check out
 * [polymerfire](https://github.com/Firebase/polymerfire) and
 * [app-pouchdb](https://github.com/PolymerElements/app-pouchdb).
 *
 * @polymerBehavior
 */

const AppStorageBehavior = {
  properties: {
    /**
     * The data to synchronize.
     */
    data: {
      type: Object,
      notify: true,
      value: function () {
        return this.zeroValue;
      }
    },

    /**
     * If this is true transactions will happen one after the other,
     * never in parallel.
     *
     * Specifically, no transaction will begin until every previously
     * enqueued transaction by this element has completed.
     *
     * If it is false, new transactions will be executed as they are
     * received.
     */
    sequentialTransactions: {
      type: Boolean,
      value: false
    },

    /**
     * When true, will perform detailed logging.
     */
    log: {
      type: Boolean,
      value: false
    }
  },
  observers: ['__dataChanged(data.*)'],
  created: function () {
    this.__initialized = false;
    this.__syncingToMemory = false;
    this.__initializingStoredValue = null;
    this.__transactionQueueAdvances = Promise.resolve();
  },
  ready: function () {
    this._initializeStoredValue();
  },

  /**
   * Override this getter to return true if the value has never been
   * persisted to storage.
   *
   * @return {boolean}
   */
  get isNew() {
    return true;
  },

  /**
   * A promise that will resolve once all queued transactions
   * have completed.
   *
   * This field is updated as new transactions are enqueued, so it will
   * only wait for transactions which were enqueued when the field
   * was accessed.
   *
   * This promise never rejects.
   *
   * @return {Promise}
   */
  get transactionsComplete() {
    return this.__transactionQueueAdvances;
  },

  /**
   * Override this getter to define the default value to use when
   * there's no data stored.
   *
   * @return {*}
   */
  get zeroValue() {
    return undefined;
  },

  /**
   * Override this method.
   *
   * If the data value represented by this storage instance is new, this
   * method generates an attempt to write the value to storage.
   *
   *
   * @param {*} args
   * @return {Promise} a Promise that settles only once the write has.
   */
  saveValue: function (args) {
    return Promise.resolve();
  },

  /**
   * Optional. Override this method to clear out the mapping of this
   * storage object and a logical location within storage.
   *
   * If this method is supported, after it's called, isNew() should be
   * true.
   */
  reset: function () {},

  /**
   * Remove the data from storage.
   *
   * @return {Promise} A promise that settles once the destruction is
   *   complete.
   */
  destroy: function () {
    this.data = this.zeroValue;
    return this.saveValue();
  },

  /**
   * Perform the initial sync between storage and memory. This method
   * is called automatically while the element is being initialized.
   * Implementations may override it.
   *
   * If an implementation intends to call this method, it should instead
   * call _initializeStoredValue, which provides reentrancy protection.
   *
   * @return {Promise} A promise that settles once this process is
   *     complete.
   */
  initializeStoredValue: function () {
    if (this.isNew) {
      return Promise.resolve();
    } // If this is not a "new" model, then we should attempt
    // to read an initial value from storage:


    return this._getStoredValue('data').then(function (data) {
      this._log('Got stored value!', data, this.data);

      if (data == null) {
        return this._setStoredValue('data', this.data || this.zeroValue);
      } else {
        this.syncToMemory(function () {
          this.set('data', data);
        });
      }
    }.bind(this));
  },

  /**
   * Override this method to implement reading a value from storage.
   *
   *
   * @param {string} storagePath The path (through storage) of the value to
   *   create, relative to the root of storage associated with this instance.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. _If there is no
   *   such value at the provided path through storage, then the promise will
   *   resolve to `undefined`._ The promise will be rejected if the transaction
   *   fails for any reason.
   */
  getStoredValue: function (storagePath) {
    return Promise.resolve();
  },

  /**
   * Override this method to implement creating and updating
   * stored values.
   *
   *
   * @param {string} storagePath The path of the value to update, relative
   *   to the root storage path configured for this instance.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */
  setStoredValue: function (storagePath, value) {
    return Promise.resolve(value);
  },

  /**
   * Maps a Polymer databinding path to the corresponding path in the
   * storage system. Override to define a custom mapping.
   *
   * The inverse of storagePathToMemoryPath.
   *
   * @param {string} path An in-memory path through a storage object.
   * @return {string} The provided path mapped to the equivalent location in
   *   storage. This mapped version of the path is suitable for use with the
   *   CRUD operations on both memory and storage.
   */
  memoryPathToStoragePath: function (path) {
    return path;
  },

  /**
   * Maps a storage path to the corresponding Polymer databinding path.
   * Override to define a custom mapping.
   *
   * The inverse of memoryPathToStoragePath.
   *
   * @param {string} path The storage path through a storage object.
   * @return {string} The provided path through storage mapped to the
   *   equivalent Polymer path through the in-memory representation of storage.
   */
  storagePathToMemoryPath: function (path) {
    return path;
  },

  /**
   * Enables performing transformations on the in-memory representation of
   * storage without activating observers that will cause those
   * transformations to be re-applied to the storage backend. This is useful
   * for preventing redundant (or cyclical) application of transformations.
   *
   * @param {Function} operation A function that will perform the desired
   *   transformation. It will be called synchronously, when it is safe to
   *   apply the transformation.
   */
  syncToMemory: function (operation) {
    if (this.__syncingToMemory) {
      return;
    }

    this._group('Sync to memory.');

    this.__syncingToMemory = true;
    operation.call(this);
    this.__syncingToMemory = false;

    this._groupEnd('Sync to memory.');
  },

  /**
   * A convenience method. Returns true iff value is null, undefined,
   * an empty array, or an object with no keys.
   */
  valueIsEmpty: function (value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else if (Object.prototype.isPrototypeOf(value)) {
      return Object.keys(value).length === 0;
    } else {
      return value == null;
    }
  },

  /**
   * Like `getStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to get.
   * @return {Promise} A Promise of the value stored at that path.
   */
  _getStoredValue: function (path) {
    return this.getStoredValue(this.memoryPathToStoragePath(path));
  },

  /**
   * Like `setStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to update.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */
  _setStoredValue: function (path, value) {
    return this.setStoredValue(this.memoryPathToStoragePath(path), value);
  },

  /**
   * Enqueues the given function in the transaction queue.
   *
   * The transaction queue allows for optional parallelism/sequentiality
   * via the `sequentialTransactions` boolean property, as well as giving
   * the user a convenient way to wait for all pending transactions to
   * finish.
   *
   * The given function may be called immediately or after an arbitrary
   * delay. Its `this` context will be bound to the element.
   *
   * If the transaction performs any asynchronous operations it must
   * return a promise.
   *
   * @param {Function} transaction A function implementing the transaction.
   * @return {Promise} A promise that resolves once the transaction has
   *   finished. This promise will never reject.
   */
  _enqueueTransaction: function (transaction) {
    if (this.sequentialTransactions) {
      transaction = transaction.bind(this);
    } else {
      var result = transaction.call(this);

      transaction = function () {
        return result;
      };
    }

    return this.__transactionQueueAdvances = this.__transactionQueueAdvances.then(transaction).catch(function (error) {
      this._error('Error performing queued transaction.', error);
    }.bind(this));
  },

  /**
   * A wrapper around `console.log`.
   */
  _log: function (...args) {
    if (this.log) {
      console.log.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.error`.
   */
  _error: function (...args) {
    if (this.log) {
      console.error.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.group`.
   */
  _group: function (...args) {
    if (this.log) {
      console.group.apply(console, args);
    }
  },

  /**
   * A wrapper around `console.groupEnd`.
   */
  _groupEnd: function (...args) {
    if (this.log) {
      console.groupEnd.apply(console, args);
    }
  },

  /**
   * A reentrancy-save wrapper around `this.initializeStoredValue`.
   * Prefer calling this method over that one.
   *
   * @return {Promise} The result of calling `initializeStoredValue`,
   *   or `undefined` if called while initializing.
   */
  _initializeStoredValue: function () {
    if (this.__initializingStoredValue) {
      return;
    }

    this._group('Initializing stored value.');

    var initializingStoredValue = this.__initializingStoredValue = this.initializeStoredValue().then(function () {
      this.__initialized = true;
      this.__initializingStoredValue = null;

      this._groupEnd('Initializing stored value.');
    }.bind(this)).catch(function (e) {
      this.__initializingStoredValue = null;

      this._groupEnd('Initializing stored value.');
    }.bind(this));
    return this._enqueueTransaction(function () {
      return initializingStoredValue;
    });
  },
  __dataChanged: function (change) {
    if (this.isNew || this.__syncingToMemory || !this.__initialized || this.__pathCanBeIgnored(change.path)) {
      return;
    }

    var path = this.__normalizeMemoryPath(change.path);

    var value = change.value;
    var indexSplices = value && value.indexSplices;

    this._enqueueTransaction(function () {
      this._log('Setting', path + ':', indexSplices || value);

      if (indexSplices && this.__pathIsSplices(path)) {
        path = this.__parentPath(path);
        value = this.get(path);
      }

      return this._setStoredValue(path, value);
    });
  },
  __normalizeMemoryPath: function (path) {
    var parts = path.split('.');
    var parentPath = [];
    var currentPath = [];
    var normalizedPath = [];
    var index;

    for (var i = 0; i < parts.length; ++i) {
      currentPath.push(parts[i]);

      if (/^#/.test(parts[i])) {
        normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)));
      } else {
        normalizedPath.push(parts[i]);
      }

      parentPath.push(parts[i]);
    }

    return normalizedPath.join('.');
  },
  __parentPath: function (path) {
    var parentPath = path.split('.');
    return parentPath.slice(0, parentPath.length - 1).join('.');
  },
  __pathCanBeIgnored: function (path) {
    return LENGTH_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathIsSplices: function (path) {
    return SPLICES_RX.test(path) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathRefersToArray: function (path) {
    return (SPLICES_RX.test(path) || LENGTH_RX.test(path)) && Array.isArray(this.get(this.__parentPath(path)));
  },
  __pathTailToIndex: function (path) {
    var tail = path.split('.').pop();
    return window.parseInt(tail.replace(NUMBER_RX, '$1'), 10);
  }
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

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

const PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

const PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbnZhciBTUExJQ0VTX1JYID0gL1xcLnNwbGljZXMkLztcbnZhciBMRU5HVEhfUlggPSAvXFwubGVuZ3RoJC87XG52YXIgTlVNQkVSX1JYID0gL1xcLj8jPyhbMC05XSspJC87XG5cbi8qKlxuICogQXBwU3RvcmFnZUJlaGF2aW9yIGlzIGFuIGFic3RyYWN0IGJlaGF2aW9yIHRoYXQgbWFrZXMgaXQgZWFzeSB0b1xuICogc3luY2hyb25pemUgaW4tbWVtb3J5IGRhdGEgYW5kIGEgcGVyc2lzdGVudCBzdG9yYWdlIHN5c3RlbSwgc3VjaCBhc1xuICogdGhlIGJyb3dzZXIncyBJbmRleGVkREIsIG9yIGEgcmVtb3RlIGRhdGFiYXNlIGxpa2UgRmlyZWJhc2UuXG4gKlxuICogRm9yIGV4YW1wbGVzIG9mIGhvdyB0byB1c2UgdGhpcyBiZWhhdmlvciB0byB3cml0ZSB5b3VyIG93biBhcHAgc3RvcmFnZVxuICogZWxlbWVudHMgc2VlIGA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5gIGhlcmUsIG9yIGNoZWNrIG91dFxuICogW3BvbHltZXJmaXJlXShodHRwczovL2dpdGh1Yi5jb20vRmlyZWJhc2UvcG9seW1lcmZpcmUpIGFuZFxuICogW2FwcC1wb3VjaGRiXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2FwcC1wb3VjaGRiKS5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBTdG9yYWdlQmVoYXZpb3IgPSB7XG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSB0byBzeW5jaHJvbml6ZS5cbiAgICAgKi9cbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnplcm9WYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyB0cnVlIHRyYW5zYWN0aW9ucyB3aWxsIGhhcHBlbiBvbmUgYWZ0ZXIgdGhlIG90aGVyLFxuICAgICAqIG5ldmVyIGluIHBhcmFsbGVsLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCBubyB0cmFuc2FjdGlvbiB3aWxsIGJlZ2luIHVudGlsIGV2ZXJ5IHByZXZpb3VzbHlcbiAgICAgKiBlbnF1ZXVlZCB0cmFuc2FjdGlvbiBieSB0aGlzIGVsZW1lbnQgaGFzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIElmIGl0IGlzIGZhbHNlLCBuZXcgdHJhbnNhY3Rpb25zIHdpbGwgYmUgZXhlY3V0ZWQgYXMgdGhleSBhcmVcbiAgICAgKiByZWNlaXZlZC5cbiAgICAgKi9cbiAgICBzZXF1ZW50aWFsVHJhbnNhY3Rpb25zOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgd2lsbCBwZXJmb3JtIGRldGFpbGVkIGxvZ2dpbmcuXG4gICAgICovXG4gICAgbG9nOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydfX2RhdGFDaGFuZ2VkKGRhdGEuKiknXSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fc3luY2luZ1RvTWVtb3J5ID0gZmFsc2U7XG4gICAgdGhpcy5fX2luaXRpYWxpemluZ1N0b3JlZFZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9fdHJhbnNhY3Rpb25RdWV1ZUFkdmFuY2VzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGdldHRlciB0byByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgaGFzIG5ldmVyIGJlZW5cbiAgICogcGVyc2lzdGVkIHRvIHN0b3JhZ2UuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNOZXcoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFsbCBxdWV1ZWQgdHJhbnNhY3Rpb25zXG4gICAqIGhhdmUgY29tcGxldGVkLlxuICAgKlxuICAgKiBUaGlzIGZpZWxkIGlzIHVwZGF0ZWQgYXMgbmV3IHRyYW5zYWN0aW9ucyBhcmUgZW5xdWV1ZWQsIHNvIGl0IHdpbGxcbiAgICogb25seSB3YWl0IGZvciB0cmFuc2FjdGlvbnMgd2hpY2ggd2VyZSBlbnF1ZXVlZCB3aGVuIHRoZSBmaWVsZFxuICAgKiB3YXMgYWNjZXNzZWQuXG4gICAqXG4gICAqIFRoaXMgcHJvbWlzZSBuZXZlciByZWplY3RzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0IHRyYW5zYWN0aW9uc0NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9fdHJhbnNhY3Rpb25RdWV1ZUFkdmFuY2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIGdldHRlciB0byBkZWZpbmUgdGhlIGRlZmF1bHQgdmFsdWUgdG8gdXNlIHdoZW5cbiAgICogdGhlcmUncyBubyBkYXRhIHN0b3JlZC5cbiAgICpcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldCB6ZXJvVmFsdWUoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIElmIHRoZSBkYXRhIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoaXMgc3RvcmFnZSBpbnN0YW5jZSBpcyBuZXcsIHRoaXNcbiAgICogbWV0aG9kIGdlbmVyYXRlcyBhbiBhdHRlbXB0IHRvIHdyaXRlIHRoZSB2YWx1ZSB0byBzdG9yYWdlLlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGFyZ3NcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBQcm9taXNlIHRoYXQgc2V0dGxlcyBvbmx5IG9uY2UgdGhlIHdyaXRlIGhhcy5cbiAgICovXG4gIHNhdmVWYWx1ZTogZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICAvKipcbiAgICogT3B0aW9uYWwuIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNsZWFyIG91dCB0aGUgbWFwcGluZyBvZiB0aGlzXG4gICAqIHN0b3JhZ2Ugb2JqZWN0IGFuZCBhIGxvZ2ljYWwgbG9jYXRpb24gd2l0aGluIHN0b3JhZ2UuXG4gICAqXG4gICAqIElmIHRoaXMgbWV0aG9kIGlzIHN1cHBvcnRlZCwgYWZ0ZXIgaXQncyBjYWxsZWQsIGlzTmV3KCkgc2hvdWxkIGJlXG4gICAqIHRydWUuXG4gICAqL1xuICByZXNldDogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkYXRhIGZyb20gc3RvcmFnZS5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgc2V0dGxlcyBvbmNlIHRoZSBkZXN0cnVjdGlvbiBpc1xuICAgKiAgIGNvbXBsZXRlLlxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy56ZXJvVmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZVZhbHVlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIGluaXRpYWwgc3luYyBiZXR3ZWVuIHN0b3JhZ2UgYW5kIG1lbW9yeS4gVGhpcyBtZXRob2RcbiAgICogaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hpbGUgdGhlIGVsZW1lbnQgaXMgYmVpbmcgaW5pdGlhbGl6ZWQuXG4gICAqIEltcGxlbWVudGF0aW9ucyBtYXkgb3ZlcnJpZGUgaXQuXG4gICAqXG4gICAqIElmIGFuIGltcGxlbWVudGF0aW9uIGludGVuZHMgdG8gY2FsbCB0aGlzIG1ldGhvZCwgaXQgc2hvdWxkIGluc3RlYWRcbiAgICogY2FsbCBfaW5pdGlhbGl6ZVN0b3JlZFZhbHVlLCB3aGljaCBwcm92aWRlcyByZWVudHJhbmN5IHByb3RlY3Rpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHNldHRsZXMgb25jZSB0aGlzIHByb2Nlc3MgaXNcbiAgICogICAgIGNvbXBsZXRlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZVN0b3JlZFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgbm90IGEgXCJuZXdcIiBtb2RlbCwgdGhlbiB3ZSBzaG91bGQgYXR0ZW1wdFxuICAgIC8vIHRvIHJlYWQgYW4gaW5pdGlhbCB2YWx1ZSBmcm9tIHN0b3JhZ2U6XG4gICAgcmV0dXJuIHRoaXMuX2dldFN0b3JlZFZhbHVlKCdkYXRhJykudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLl9sb2coJ0dvdCBzdG9yZWQgdmFsdWUhJywgZGF0YSwgdGhpcy5kYXRhKTtcbiAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldFN0b3JlZFZhbHVlKCdkYXRhJywgdGhpcy5kYXRhIHx8IHRoaXMuemVyb1ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc2V0KCdkYXRhJywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGltcGxlbWVudCByZWFkaW5nIGEgdmFsdWUgZnJvbSBzdG9yYWdlLlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZVBhdGggVGhlIHBhdGggKHRocm91Z2ggc3RvcmFnZSkgb2YgdGhlIHZhbHVlIHRvXG4gICAqICAgY3JlYXRlLCByZWxhdGl2ZSB0byB0aGUgcm9vdCBvZiBzdG9yYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjYW5vbmljYWwgdmFsdWUgc3RvcmVkXG4gICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGggd2hlbiB0aGUgdHJhbnNhY3Rpb24gaGFzIGNvbXBsZXRlZC4gX0lmIHRoZXJlIGlzIG5vXG4gICAqICAgc3VjaCB2YWx1ZSBhdCB0aGUgcHJvdmlkZWQgcGF0aCB0aHJvdWdoIHN0b3JhZ2UsIHRoZW4gdGhlIHByb21pc2Ugd2lsbFxuICAgKiAgIHJlc29sdmUgdG8gYHVuZGVmaW5lZGAuXyBUaGUgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIGlmIHRoZSB0cmFuc2FjdGlvblxuICAgKiAgIGZhaWxzIGZvciBhbnkgcmVhc29uLlxuICAgKi9cbiAgZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHN0b3JhZ2VQYXRoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbXBsZW1lbnQgY3JlYXRpbmcgYW5kIHVwZGF0aW5nXG4gICAqIHN0b3JlZCB2YWx1ZXMuXG4gICAqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlUGF0aCBUaGUgcGF0aCBvZiB0aGUgdmFsdWUgdG8gdXBkYXRlLCByZWxhdGl2ZVxuICAgKiAgIHRvIHRoZSByb290IHN0b3JhZ2UgcGF0aCBjb25maWd1cmVkIGZvciB0aGlzIGluc3RhbmNlLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB1cGRhdGVkIGluLW1lbW9yeSB2YWx1ZSB0byBhcHBseSB0byB0aGUgc3RvcmVkIHZhbHVlXG4gICAqICAgYXQgdGhlIHByb3ZpZGVkIHBhdGguXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNhbm9uaWNhbCB2YWx1ZSBzdG9yZWRcbiAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aCB3aGVuIHRoZSB0cmFuc2FjdGlvbiBoYXMgY29tcGxldGVkLiBUaGUgcHJvbWlzZVxuICAgKiAgIHdpbGwgYmUgcmVqZWN0ZWQgaWYgdGhlIHRyYW5zYWN0aW9uIGZhaWxzIGZvciBhbnkgcmVhc29uLlxuICAgKi9cbiAgc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHN0b3JhZ2VQYXRoLCB2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNYXBzIGEgUG9seW1lciBkYXRhYmluZGluZyBwYXRoIHRvIHRoZSBjb3JyZXNwb25kaW5nIHBhdGggaW4gdGhlXG4gICAqIHN0b3JhZ2Ugc3lzdGVtLiBPdmVycmlkZSB0byBkZWZpbmUgYSBjdXN0b20gbWFwcGluZy5cbiAgICpcbiAgICogVGhlIGludmVyc2Ugb2Ygc3RvcmFnZVBhdGhUb01lbW9yeVBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEFuIGluLW1lbW9yeSBwYXRoIHRocm91Z2ggYSBzdG9yYWdlIG9iamVjdC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgcHJvdmlkZWQgcGF0aCBtYXBwZWQgdG8gdGhlIGVxdWl2YWxlbnQgbG9jYXRpb24gaW5cbiAgICogICBzdG9yYWdlLiBUaGlzIG1hcHBlZCB2ZXJzaW9uIG9mIHRoZSBwYXRoIGlzIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCB0aGVcbiAgICogICBDUlVEIG9wZXJhdGlvbnMgb24gYm90aCBtZW1vcnkgYW5kIHN0b3JhZ2UuXG4gICAqL1xuICBtZW1vcnlQYXRoVG9TdG9yYWdlUGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBwYXRoO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNYXBzIGEgc3RvcmFnZSBwYXRoIHRvIHRoZSBjb3JyZXNwb25kaW5nIFBvbHltZXIgZGF0YWJpbmRpbmcgcGF0aC5cbiAgICogT3ZlcnJpZGUgdG8gZGVmaW5lIGEgY3VzdG9tIG1hcHBpbmcuXG4gICAqXG4gICAqIFRoZSBpbnZlcnNlIG9mIG1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc3RvcmFnZSBwYXRoIHRocm91Z2ggYSBzdG9yYWdlIG9iamVjdC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgcHJvdmlkZWQgcGF0aCB0aHJvdWdoIHN0b3JhZ2UgbWFwcGVkIHRvIHRoZVxuICAgKiAgIGVxdWl2YWxlbnQgUG9seW1lciBwYXRoIHRocm91Z2ggdGhlIGluLW1lbW9yeSByZXByZXNlbnRhdGlvbiBvZiBzdG9yYWdlLlxuICAgKi9cbiAgc3RvcmFnZVBhdGhUb01lbW9yeVBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfSxcblxuICAvKipcbiAgICogRW5hYmxlcyBwZXJmb3JtaW5nIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mXG4gICAqIHN0b3JhZ2Ugd2l0aG91dCBhY3RpdmF0aW5nIG9ic2VydmVycyB0aGF0IHdpbGwgY2F1c2UgdGhvc2VcbiAgICogdHJhbnNmb3JtYXRpb25zIHRvIGJlIHJlLWFwcGxpZWQgdG8gdGhlIHN0b3JhZ2UgYmFja2VuZC4gVGhpcyBpcyB1c2VmdWxcbiAgICogZm9yIHByZXZlbnRpbmcgcmVkdW5kYW50IChvciBjeWNsaWNhbCkgYXBwbGljYXRpb24gb2YgdHJhbnNmb3JtYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcGVyYXRpb24gQSBmdW5jdGlvbiB0aGF0IHdpbGwgcGVyZm9ybSB0aGUgZGVzaXJlZFxuICAgKiAgIHRyYW5zZm9ybWF0aW9uLiBJdCB3aWxsIGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5LCB3aGVuIGl0IGlzIHNhZmUgdG9cbiAgICogICBhcHBseSB0aGUgdHJhbnNmb3JtYXRpb24uXG4gICAqL1xuICBzeW5jVG9NZW1vcnk6IGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgIGlmICh0aGlzLl9fc3luY2luZ1RvTWVtb3J5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZ3JvdXAoJ1N5bmMgdG8gbWVtb3J5LicpO1xuXG4gICAgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSA9IHRydWU7XG4gICAgb3BlcmF0aW9uLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZ3JvdXBFbmQoJ1N5bmMgdG8gbWVtb3J5LicpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG1ldGhvZC4gUmV0dXJucyB0cnVlIGlmZiB2YWx1ZSBpcyBudWxsLCB1bmRlZmluZWQsXG4gICAqIGFuIGVtcHR5IGFycmF5LCBvciBhbiBvYmplY3Qgd2l0aCBubyBrZXlzLlxuICAgKi9cbiAgdmFsdWVJc0VtcHR5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpa2UgYGdldFN0b3JlZFZhbHVlYCBidXQgY2FsbGVkIHdpdGggYSBQb2x5bWVyIHBhdGggcmF0aGVyIHRoYW5cbiAgICogYSBzdG9yYWdlIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBQb2x5bWVyIHBhdGggdG8gZ2V0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBBIFByb21pc2Ugb2YgdGhlIHZhbHVlIHN0b3JlZCBhdCB0aGF0IHBhdGguXG4gICAqL1xuICBfZ2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdG9yZWRWYWx1ZSh0aGlzLm1lbW9yeVBhdGhUb1N0b3JhZ2VQYXRoKHBhdGgpKTtcbiAgfSxcblxuICAvKipcbiAgICogTGlrZSBgc2V0U3RvcmVkVmFsdWVgIGJ1dCBjYWxsZWQgd2l0aCBhIFBvbHltZXIgcGF0aCByYXRoZXIgdGhhblxuICAgKiBhIHN0b3JhZ2UgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIFBvbHltZXIgcGF0aCB0byB1cGRhdGUuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHVwZGF0ZWQgaW4tbWVtb3J5IHZhbHVlIHRvIGFwcGx5IHRvIHRoZSBzdG9yZWQgdmFsdWVcbiAgICogICBhdCB0aGUgcHJvdmlkZWQgcGF0aC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY2Fub25pY2FsIHZhbHVlIHN0b3JlZFxuICAgKiAgIGF0IHRoZSBwcm92aWRlZCBwYXRoIHdoZW4gdGhlIHRyYW5zYWN0aW9uIGhhcyBjb21wbGV0ZWQuIFRoZSBwcm9taXNlXG4gICAqICAgd2lsbCBiZSByZWplY3RlZCBpZiB0aGUgdHJhbnNhY3Rpb24gZmFpbHMgZm9yIGFueSByZWFzb24uXG4gICAqL1xuICBfc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RvcmVkVmFsdWUodGhpcy5tZW1vcnlQYXRoVG9TdG9yYWdlUGF0aChwYXRoKSwgdmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbnF1ZXVlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gaW4gdGhlIHRyYW5zYWN0aW9uIHF1ZXVlLlxuICAgKlxuICAgKiBUaGUgdHJhbnNhY3Rpb24gcXVldWUgYWxsb3dzIGZvciBvcHRpb25hbCBwYXJhbGxlbGlzbS9zZXF1ZW50aWFsaXR5XG4gICAqIHZpYSB0aGUgYHNlcXVlbnRpYWxUcmFuc2FjdGlvbnNgIGJvb2xlYW4gcHJvcGVydHksIGFzIHdlbGwgYXMgZ2l2aW5nXG4gICAqIHRoZSB1c2VyIGEgY29udmVuaWVudCB3YXkgdG8gd2FpdCBmb3IgYWxsIHBlbmRpbmcgdHJhbnNhY3Rpb25zIHRvXG4gICAqIGZpbmlzaC5cbiAgICpcbiAgICogVGhlIGdpdmVuIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgaW1tZWRpYXRlbHkgb3IgYWZ0ZXIgYW4gYXJiaXRyYXJ5XG4gICAqIGRlbGF5LiBJdHMgYHRoaXNgIGNvbnRleHQgd2lsbCBiZSBib3VuZCB0byB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogSWYgdGhlIHRyYW5zYWN0aW9uIHBlcmZvcm1zIGFueSBhc3luY2hyb25vdXMgb3BlcmF0aW9ucyBpdCBtdXN0XG4gICAqIHJldHVybiBhIHByb21pc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zYWN0aW9uIEEgZnVuY3Rpb24gaW1wbGVtZW50aW5nIHRoZSB0cmFuc2FjdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSB0aGUgdHJhbnNhY3Rpb24gaGFzXG4gICAqICAgZmluaXNoZWQuIFRoaXMgcHJvbWlzZSB3aWxsIG5ldmVyIHJlamVjdC5cbiAgICovXG4gIF9lbnF1ZXVlVHJhbnNhY3Rpb246IGZ1bmN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuc2VxdWVudGlhbFRyYW5zYWN0aW9ucykge1xuICAgICAgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJhbnNhY3Rpb24uY2FsbCh0aGlzKTtcbiAgICAgIHRyYW5zYWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9fdHJhbnNhY3Rpb25RdWV1ZUFkdmFuY2VzID1cbiAgICAgICAgICAgICAgIHRoaXMuX190cmFuc2FjdGlvblF1ZXVlQWR2YW5jZXMudGhlbih0cmFuc2FjdGlvbilcbiAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKCdFcnJvciBwZXJmb3JtaW5nIHF1ZXVlZCB0cmFuc2FjdGlvbi4nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCBgY29uc29sZS5sb2dgLlxuICAgKi9cbiAgX2xvZzogZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIHdyYXBwZXIgYXJvdW5kIGBjb25zb2xlLmVycm9yYC5cbiAgICovXG4gIF9lcnJvcjogZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlciBhcm91bmQgYGNvbnNvbGUuZ3JvdXBgLlxuICAgKi9cbiAgX2dyb3VwOiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubG9nKSB7XG4gICAgICBjb25zb2xlLmdyb3VwLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSB3cmFwcGVyIGFyb3VuZCBgY29uc29sZS5ncm91cEVuZGAuXG4gICAqL1xuICBfZ3JvdXBFbmQ6IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBIHJlZW50cmFuY3ktc2F2ZSB3cmFwcGVyIGFyb3VuZCBgdGhpcy5pbml0aWFsaXplU3RvcmVkVmFsdWVgLlxuICAgKiBQcmVmZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBvdmVyIHRoYXQgb25lLlxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgcmVzdWx0IG9mIGNhbGxpbmcgYGluaXRpYWxpemVTdG9yZWRWYWx1ZWAsXG4gICAqICAgb3IgYHVuZGVmaW5lZGAgaWYgY2FsbGVkIHdoaWxlIGluaXRpYWxpemluZy5cbiAgICovXG4gIF9pbml0aWFsaXplU3RvcmVkVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ncm91cCgnSW5pdGlhbGl6aW5nIHN0b3JlZCB2YWx1ZS4nKTtcblxuICAgIHZhciBpbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9IHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0b3JlZFZhbHVlKClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6aW5nU3RvcmVkVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLl9ncm91cEVuZCgnSW5pdGlhbGl6aW5nIHN0b3JlZCB2YWx1ZS4nKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX19pbml0aWFsaXppbmdTdG9yZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMuX2dyb3VwRW5kKCdJbml0aWFsaXppbmcgc3RvcmVkIHZhbHVlLicpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzLl9lbnF1ZXVlVHJhbnNhY3Rpb24oZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbGl6aW5nU3RvcmVkVmFsdWU7XG4gICAgfSk7XG4gIH0sXG5cbiAgX19kYXRhQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlKSB7XG4gICAgaWYgKHRoaXMuaXNOZXcgfHwgdGhpcy5fX3N5bmNpbmdUb01lbW9yeSB8fCAhdGhpcy5fX2luaXRpYWxpemVkIHx8XG4gICAgICAgIHRoaXMuX19wYXRoQ2FuQmVJZ25vcmVkKGNoYW5nZS5wYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXRoID0gdGhpcy5fX25vcm1hbGl6ZU1lbW9yeVBhdGgoY2hhbmdlLnBhdGgpO1xuICAgIHZhciB2YWx1ZSA9IGNoYW5nZS52YWx1ZTtcbiAgICB2YXIgaW5kZXhTcGxpY2VzID0gdmFsdWUgJiYgdmFsdWUuaW5kZXhTcGxpY2VzO1xuXG4gICAgdGhpcy5fZW5xdWV1ZVRyYW5zYWN0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fbG9nKCdTZXR0aW5nJywgcGF0aCArICc6JywgaW5kZXhTcGxpY2VzIHx8IHZhbHVlKTtcblxuICAgICAgaWYgKGluZGV4U3BsaWNlcyAmJiB0aGlzLl9fcGF0aElzU3BsaWNlcyhwYXRoKSkge1xuICAgICAgICBwYXRoID0gdGhpcy5fX3BhcmVudFBhdGgocGF0aCk7XG4gICAgICAgIHZhbHVlID0gdGhpcy5nZXQocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9zZXRTdG9yZWRWYWx1ZShwYXRoLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX19ub3JtYWxpemVNZW1vcnlQYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHZhciBwYXJlbnRQYXRoID0gW107XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gW107XG4gICAgdmFyIG5vcm1hbGl6ZWRQYXRoID0gW107XG4gICAgdmFyIGluZGV4O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgY3VycmVudFBhdGgucHVzaChwYXJ0c1tpXSk7XG4gICAgICBpZiAoL14jLy50ZXN0KHBhcnRzW2ldKSkge1xuICAgICAgICBub3JtYWxpemVkUGF0aC5wdXNoKFxuICAgICAgICAgICAgdGhpcy5nZXQocGFyZW50UGF0aCkuaW5kZXhPZih0aGlzLmdldChjdXJyZW50UGF0aCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbGl6ZWRQYXRoLnB1c2gocGFydHNbaV0pO1xuICAgICAgfVxuICAgICAgcGFyZW50UGF0aC5wdXNoKHBhcnRzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFBhdGguam9pbignLicpO1xuICB9LFxuXG4gIF9fcGFyZW50UGF0aDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBwYXJlbnRQYXRoID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJlbnRQYXRoLnNsaWNlKDAsIHBhcmVudFBhdGgubGVuZ3RoIC0gMSkuam9pbignLicpO1xuICB9LFxuXG4gIF9fcGF0aENhbkJlSWdub3JlZDogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiBMRU5HVEhfUlgudGVzdChwYXRoKSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuZ2V0KHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpKSk7XG4gIH0sXG5cbiAgX19wYXRoSXNTcGxpY2VzOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcmV0dXJuIFNQTElDRVNfUlgudGVzdChwYXRoKSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuZ2V0KHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpKSk7XG4gIH0sXG5cbiAgX19wYXRoUmVmZXJzVG9BcnJheTogZnVuY3Rpb24ocGF0aCkge1xuICAgIHJldHVybiAoU1BMSUNFU19SWC50ZXN0KHBhdGgpIHx8IExFTkdUSF9SWC50ZXN0KHBhdGgpKSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuZ2V0KHRoaXMuX19wYXJlbnRQYXRoKHBhdGgpKSk7XG4gIH0sXG5cbiAgX19wYXRoVGFpbFRvSW5kZXg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgdGFpbCA9IHBhdGguc3BsaXQoJy4nKS5wb3AoKTtcbiAgICByZXR1cm4gd2luZG93LnBhcnNlSW50KHRhaWwucmVwbGFjZShOVU1CRVJfUlgsICckMScpLCAxMCk7XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW5wdXQvaXJvbi1pbnB1dC5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jb250YWluZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWVycm9yLmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtEb21Nb2R1bGV9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7UGFwZXJJbnB1dEJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWlucHV0LWJlaGF2aW9yLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtUZXh0XG5maWVsZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy90ZXh0LWZpZWxkcy5odG1sKVxuXG5gPHBhcGVyLWlucHV0PmAgaXMgYSBzaW5nbGUtbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJJbnB1dCBsYWJlbFwiPjwvcGFwZXItaW5wdXQ+XG5cbkl0IG1heSBpbmNsdWRlIGFuIG9wdGlvbmFsIGVycm9yIG1lc3NhZ2Ugb3IgY2hhcmFjdGVyIGNvdW50ZXIuXG5cbiAgICA8cGFwZXItaW5wdXQgZXJyb3ItbWVzc2FnZT1cIkludmFsaWQgaW5wdXQhXCIgbGFiZWw9XCJJbnB1dFxuICAgIGxhYmVsXCI+PC9wYXBlci1pbnB1dD4gPHBhcGVyLWlucHV0IGNoYXItY291bnRlciBsYWJlbD1cIklucHV0XG4gICAgbGFiZWxcIj48L3BhcGVyLWlucHV0PlxuXG5JdCBjYW4gYWxzbyBpbmNsdWRlIGN1c3RvbSBwcmVmaXggb3Igc3VmZml4IGVsZW1lbnRzLCB3aGljaCBhcmUgZGlzcGxheWVkXG5iZWZvcmUgb3IgYWZ0ZXIgdGhlIHRleHQgaW5wdXQgaXRzZWxmLiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZVxuY29uc2lkZXJlZCBhcyBhIHByZWZpeCwgaXQgbXVzdCBoYXZlIHRoZSBgcHJlZml4YCBhdHRyaWJ1dGUgKGFuZCBzaW1pbGFybHlcbmZvciBgc3VmZml4YCkuXG5cbiAgICA8cGFwZXItaW5wdXQgbGFiZWw9XCJ0b3RhbFwiPlxuICAgICAgPGRpdiBwcmVmaXg+JDwvZGl2PlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBpY29uPVwiY2xlYXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDwvcGFwZXItaW5wdXQ+XG5cbkEgYHBhcGVyLWlucHV0YCBjYW4gdXNlIHRoZSBuYXRpdmUgYHR5cGU9c2VhcmNoYCBvciBgdHlwZT1maWxlYCBmZWF0dXJlcy5cbkhvd2V2ZXIsIHNpbmNlIHdlIGNhbid0IGNvbnRyb2wgdGhlIG5hdGl2ZSBzdHlsaW5nIG9mIHRoZSBpbnB1dCAoc2VhcmNoIGljb24sXG5maWxlIGJ1dHRvbiwgZGF0ZSBwbGFjZWhvbGRlciwgZXRjLiksIGluIHRoZXNlIGNhc2VzIHRoZSBsYWJlbCB3aWxsIGJlXG5hdXRvbWF0aWNhbGx5IGZsb2F0ZWQuIFRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBjYW4gc3RpbGwgYmUgdXNlZCBmb3JcbmFkZGl0aW9uYWwgaW5mb3JtYXRpb25hbCB0ZXh0LlxuXG4gICAgPHBhcGVyLWlucHV0IGxhYmVsPVwic2VhcmNoIVwiIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgY2F0c1wiIGF1dG9zYXZlPVwidGVzdFwiIHJlc3VsdHM9XCI1XCI+XG4gICAgPC9wYXBlci1pbnB1dD5cblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRCZWhhdmlvcmAgZm9yIG1vcmUgQVBJIGRvY3MuXG5cbiMjIyBGb2N1c1xuXG5UbyBmb2N1cyBhIHBhcGVyLWlucHV0LCB5b3UgY2FuIGNhbGwgdGhlIG5hdGl2ZSBgZm9jdXMoKWAgbWV0aG9kIGFzIGxvbmcgYXMgdGhlXG5wYXBlciBpbnB1dCBoYXMgYSB0YWIgaW5kZXguIFNpbWlsYXJseSwgYGJsdXIoKWAgd2lsbCBibHVyIHRoZSBlbGVtZW50LlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgYFBvbHltZXIuUGFwZXJJbnB1dENvbnRhaW5lcmAgZm9yIGEgbGlzdCBvZiBjdXN0b20gcHJvcGVydGllcyB1c2VkIHRvXG5zdHlsZSB0aGlzIGVsZW1lbnQuXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtY2xlYXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgSW50ZXJuZXQgRXhwbG9yZXIgcmV2ZWFsIGJ1dHRvbiAodGhlIGV5ZWJhbGwpIHwge31cblxuQGVsZW1lbnQgcGFwZXItaW5wdXRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLWlucHV0JyxcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICAvKiBGaXJlZm94IHNldHMgYSBtaW4td2lkdGggb24gdGhlIGlucHV0LCB3aGljaCBjYW4gY2F1c2UgbGF5b3V0IGlzc3VlcyAqL1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhlIDxpbnB1dD4gaXMgZGlzdHJpYnV0ZWQgdG8gcGFwZXItaW5wdXQtY29udGFpbmVyLCB3aGljaCBzdHlsZXMgaXQuXG4gICAgICBJbiAyLnggdGhlIDxpcm9uLWlucHV0PiBpcyBkaXN0cmlidXRlZCB0byBwYXBlci1pbnB1dC1jb250YWluZXIsIHdoaWNoIHN0eWxlc1xuICAgICAgaXQsIGJ1dCBpbiBvcmRlciBmb3IgdGhpcyB0byB3b3JrIGNvcnJlY3RseSwgd2UgbmVlZCB0byByZXNldCBzb21lXG4gICAgICBvZiB0aGUgbmF0aXZlIGlucHV0J3MgcHJvcGVydGllcyB0byBpbmhlcml0IChmcm9tIHRoZSBpcm9uLWlucHV0KSAqL1xuICAgICAgaXJvbi1pbnB1dCA+IGlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgICB3b3JkLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXNoYWRvdzogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6ZGlzYWJsZWQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dC13ZWJraXQtY2xlYXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1tcy1jbGVhcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXQ6Oi1tcy1yZXZlYWwge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pbnB1dC1jb250YWluZXItbXMtcmV2ZWFsO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIGlkPVwiY29udGFpbmVyXCIgbm8tbGFiZWwtZmxvYXQ9XCJbW25vTGFiZWxGbG9hdF1dXCIgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1tfY29tcHV0ZUFsd2F5c0Zsb2F0TGFiZWwoYWx3YXlzRmxvYXRMYWJlbCxwbGFjZWhvbGRlcildXVwiIGF1dG8tdmFsaWRhdGUkPVwiW1thdXRvVmFsaWRhdGVdXVwiIGRpc2FibGVkJD1cIltbZGlzYWJsZWRdXVwiIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiPlxuXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCIgc2xvdD1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbWyFsYWJlbF1dXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9yJD1cIltbX2lucHV0SWRdXVwiIHNsb3Q9XCJsYWJlbFwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDwhLS0gTmVlZCB0byBiaW5kIG1heGxlbmd0aCBzbyB0aGF0IHRoZSBwYXBlci1pbnB1dC1jaGFyLWNvdW50ZXIgd29ya3MgY29ycmVjdGx5IC0tPlxuICAgICAgPGlyb24taW5wdXQgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIHNsb3Q9XCJpbnB1dFwiIGNsYXNzPVwiaW5wdXQtZWxlbWVudFwiIGlkJD1cIltbX2lucHV0SWRdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgYWxsb3dlZC1wYXR0ZXJuPVwiW1thbGxvd2VkUGF0dGVybl1dXCIgaW52YWxpZD1cInt7aW52YWxpZH19XCIgdmFsaWRhdG9yPVwiW1t2YWxpZGF0b3JdXVwiPlxuICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIiBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgdGl0bGUkPVwiW1t0aXRsZV1dXCIgdHlwZSQ9XCJbW3R5cGVdXVwiIHBhdHRlcm4kPVwiW1twYXR0ZXJuXV1cIiByZXF1aXJlZCQ9XCJbW3JlcXVpcmVkXV1cIiBhdXRvY29tcGxldGUkPVwiW1thdXRvY29tcGxldGVdXVwiIGF1dG9mb2N1cyQ9XCJbW2F1dG9mb2N1c11dXCIgaW5wdXRtb2RlJD1cIltbaW5wdXRtb2RlXV1cIiBtaW5sZW5ndGgkPVwiW1ttaW5sZW5ndGhdXVwiIG1heGxlbmd0aCQ9XCJbW21heGxlbmd0aF1dXCIgbWluJD1cIltbbWluXV1cIiBtYXgkPVwiW1ttYXhdXVwiIHN0ZXAkPVwiW1tzdGVwXV1cIiBuYW1lJD1cIltbbmFtZV1dXCIgcGxhY2Vob2xkZXIkPVwiW1twbGFjZWhvbGRlcl1dXCIgcmVhZG9ubHkkPVwiW1tyZWFkb25seV1dXCIgbGlzdCQ9XCJbW2xpc3RdXVwiIHNpemUkPVwiW1tzaXplXV1cIiBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIiBhdXRvY29ycmVjdCQ9XCJbW2F1dG9jb3JyZWN0XV1cIiBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIiBhdXRvc2F2ZSQ9XCJbW2F1dG9zYXZlXV1cIiByZXN1bHRzJD1cIltbcmVzdWx0c11dXCIgYWNjZXB0JD1cIltbYWNjZXB0XV1cIiBtdWx0aXBsZSQ9XCJbW211bHRpcGxlXV1cIiByb2xlJD1cIltbaW5wdXRSb2xlXV1cIiBhcmlhLWhhc3BvcHVwJD1cIltbaW5wdXRBcmlhSGFzcG9wdXBdXVwiPlxuICAgICAgPC9pcm9uLWlucHV0PlxuXG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCIgc2xvdD1cInN1ZmZpeFwiPjwvc2xvdD5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yTWVzc2FnZV1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dC1lcnJvciBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBzbG90PVwiYWRkLW9uXCI+W1tlcnJvck1lc3NhZ2VdXTwvcGFwZXItaW5wdXQtZXJyb3I+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2hhckNvdW50ZXJdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtY2hhci1jb3VudGVyIHNsb3Q9XCJhZGQtb25cIj48L3BhcGVyLWlucHV0LWNoYXItY291bnRlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L3BhcGVyLWlucHV0LWNvbnRhaW5lcj5cbiAgYCxcblxuICBiZWhhdmlvcnM6IFtQYXBlcklucHV0QmVoYXZpb3IsIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgY29ycmVjdCBUeXBlU2NyaXB0IHR5cGUtZ2VuZXJhdGlvblxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcblxuICAgIGlucHV0Um9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICB9LFxuXG4gICAgaW5wdXRBcmlhSGFzcG9wdXA6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZm9jdXNhYmxlIGVsZW1lbnQuIE92ZXJyaWRkZW4gZnJvbVxuICAgKiBQYXBlcklucHV0QmVoYXZpb3IgdG8gY29ycmVjdGx5IGZvY3VzIHRoZSBuYXRpdmUgaW5wdXQuXG4gICAqXG4gICAqIEByZXR1cm4geyFIVE1MRWxlbWVudH1cbiAgICovXG4gIGdldCBfZm9jdXNhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQuX2lucHV0RWxlbWVudDtcbiAgfSxcblxuICAvLyBOb3RlOiBUaGlzIGV2ZW50IGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSAxLjAgdmVyc2lvbiBvZiB0aGlzIGVsZW1lbnQuXG4gIC8vIEluIDIuMCwgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYF9vbklyb25JbnB1dFJlYWR5YCBpcyBkb25lIGluXG4gIC8vIFBhcGVySW5wdXRCZWhhdmlvcjo6YXR0YWNoZWQuXG4gIGxpc3RlbmVyczogeydpcm9uLWlucHV0LXJlYWR5JzogJ19vbklyb25JbnB1dFJlYWR5J30sXG5cbiAgX29uSXJvbklucHV0UmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEV2ZW4gdGhvdWdoIHRoaXMgaXMgb25seSB1c2VkIGluIHRoZSBuZXh0IGxpbmUsIHNhdmUgdGhpcyBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgc2luY2UgdGhlIG5hdGl2ZSBpbnB1dCBoYWQgdGhpcyBJRCB1bnRpbCAyLjAuNS5cbiAgICBpZiAoIXRoaXMuJC5uYXRpdmVJbnB1dCkge1xuICAgICAgdGhpcy4kLm5hdGl2ZUlucHV0ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKHRoaXMuJCQoJ2lucHV0JykpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQgJiZcbiAgICAgICAgdGhpcy5fdHlwZXNUaGF0SGF2ZVRleHQuaW5kZXhPZih0aGlzLiQubmF0aXZlSW5wdXQudHlwZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFsd2F5c0Zsb2F0TGFiZWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdmFsaWRhdGUgd2hlbiBhdHRhY2hlZCBpZiB0aGUgaW5wdXQgYWxyZWFkeSBoYXMgYSB2YWx1ZS5cbiAgICBpZiAoISF0aGlzLmlucHV0RWxlbWVudC5iaW5kVmFsdWUpIHtcbiAgICAgIHRoaXMuJC5jb250YWluZXIuX2hhbmRsZVZhbHVlQW5kQXV0b1ZhbGlkYXRlKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH0sXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0LCAucGFwZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAucGFwZXItaXRlbSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLCAucGFwZXItaXRlbVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXJvbi1zZWxlY3RlZCksIC5wYXBlci1pdGVtLmlyb24tc2VsZWN0ZWQge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHQsIGJvbGQpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLCAucGFwZXItaXRlbVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvciwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyksIC5wYXBlci1pdGVtOmZvY3VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tZm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmZvY3VzKTpiZWZvcmUsIC5wYXBlci1pdGVtOmZvY3VzOmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG5cbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXZpZGVyLW9wYWNpdHkpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0xpc3RzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbGlzdHMuaHRtbClcblxuYDxwYXBlci1pdGVtPmAgaXMgYW4gaW50ZXJhY3RpdmUgbGlzdCBpdGVtLiBCeSBkZWZhdWx0LCBpdCBpcyBhIGhvcml6b250YWxcbmZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5JdGVtPC9wYXBlci1pdGVtPlxuXG5Vc2UgdGhpcyBlbGVtZW50IHdpdGggYDxwYXBlci1pdGVtLWJvZHk+YCB0byBtYWtlIE1hdGVyaWFsIERlc2lnbiBzdHlsZWRcbnR3by1saW5lIGFuZCB0aHJlZS1saW5lIGl0ZW1zLlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UbyB1c2UgYHBhcGVyLWl0ZW1gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZSBgcGFwZXItaXRlbWAgd2lsbFxuYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGUgYW5jaG9yIHRhZyBmcm9tIHJlY2VpdmluZ1xuZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnL1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pdGVtIHJhaXNlZD5Qb2x5bWVyIFByb2plY3Q8L3BhcGVyLWl0ZW0+XG4gICAgPC9hPlxuXG5JZiB5b3UgYXJlIGNvbmNlcm5lZCBhYm91dCBwZXJmb3JtYW5jZSBhbmQgd2FudCB0byB1c2UgYHBhcGVyLWl0ZW1gIGluIGFcbmBwYXBlci1saXN0Ym94YCB3aXRoIG1hbnkgaXRlbXMsIHlvdSBjYW4ganVzdCB1c2UgYSBuYXRpdmUgYGJ1dHRvbmAgd2l0aCB0aGVcbmBwYXBlci1pdGVtYCBjbGFzcyBhcHBsaWVkIChwcm92aWRlZCB5b3UgaGF2ZSBjb3JyZWN0bHkgaW5jbHVkZWQgdGhlIHNoYXJlZFxuc3R5bGVzKTpcblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuXG4gICAgPHBhcGVyLWxpc3Rib3g+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFwZXItaXRlbVwiIHJvbGU9XCJvcHRpb25cIj5JbmJveDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U3RhcnJlZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+U2VudCBtYWlsPC9idXR0b24+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIHRoZSBpdGVtIHwgYDQ4cHhgXG5gLS1wYXBlci1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJsaXN0aXRlbVwiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdXNhZ2UsIGl0IG1heSBiZVxubW9yZSBhcHByb3ByaWF0ZSB0byBzZXQgYHJvbGU9XCJtZW51aXRlbVwiYCwgYHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCJgIG9yXG5gcm9sZT1cIm1lbnVpdGVtcmFkaW9cImAuXG5cbiAgICA8cGFwZXItaXRlbSByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgU2hvdyB5b3VyIHN0YXR1c1xuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8cGFwZXItY2hlY2tib3g+PC9wYXBlci1jaGVja2JveD5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItaXRlbVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7QXR0cmlidXRlUGFydCwgZGlyZWN0aXZlLCBQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8qKlxuICogRm9yIEF0dHJpYnV0ZVBhcnRzLCBzZXRzIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIGRlZmluZWQgYW5kIHJlbW92ZXNcbiAqIHRoZSBhdHRyaWJ1dGUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAqXG4gKiBGb3Igb3RoZXIgcGFydCB0eXBlcywgdGhpcyBkaXJlY3RpdmUgaXMgYSBuby1vcC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlmRGVmaW5lZCA9IGRpcmVjdGl2ZSgodmFsdWU6IHVua25vd24pID0+IChwYXJ0OiBQYXJ0KSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIHBhcnQgaW5zdGFuY2VvZiBBdHRyaWJ1dGVQYXJ0KSB7XG4gICAgaWYgKHZhbHVlICE9PSBwYXJ0LnZhbHVlKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGFydC5jb21taXR0ZXIubmFtZTtcbiAgICAgIHBhcnQuY29tbWl0dGVyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUEzQkE7QUE4QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdGJBOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQTZHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBWEE7QUFDQTtBQWdCQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5SkE7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBb0NBO0FBcENBOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3REE7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBREE7QUFjQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9