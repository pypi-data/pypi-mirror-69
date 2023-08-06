(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js ***!
  \************************************************************************/
/*! exports provided: IronMenuBehaviorImpl, IronMenuBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehaviorImpl", function() { return IronMenuBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehavior", function() { return IronMenuBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-multi-selectable.js */ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `IronMenuBehavior` implements accessible menu behavior.
 *
 * @demo demo/index.html
 * @polymerBehavior IronMenuBehavior
 */

const IronMenuBehaviorImpl = {
  properties: {
    /**
     * Returns the currently focused item.
     * @type {?Object}
     */
    focusedItem: {
      observer: '_focusedItemChanged',
      readOnly: true,
      type: Object
    },

    /**
     * The attribute to use on menu items to look up the item title. Typing the
     * first letter of an item when the menu is open focuses that item. If
     * unset, `textContent` will be used.
     */
    attrForItemTitle: {
      type: String
    },

    /**
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      value: false,
      observer: '_disabledChanged'
    }
  },

  /**
   * The list of keys has been taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   * @private
   */
  _MODIFIER_KEYS: ['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock'],

  /** @private */
  _SEARCH_RESET_TIMEOUT_MS: 1000,

  /** @private */
  _previousTabIndex: 0,
  hostAttributes: {
    'role': 'menu'
  },
  observers: ['_updateMultiselectable(multi)'],
  listeners: {
    'focus': '_onFocus',
    'keydown': '_onKeydown',
    'iron-items-changed': '_onIronItemsChanged'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up': '_onUpKey',
    'down': '_onDownKey',
    'esc': '_onEscKey',
    'shift+tab:keydown': '_onShiftTabDown'
  },
  attached: function () {
    this._resetTabindices();
  },

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    // Cancel automatically focusing a default item if the menu received focus
    // through a user action selecting a particular item.
    if (this._defaultFocusAsync) {
      this.cancelAsync(this._defaultFocusAsync);
      this._defaultFocusAsync = null;
    }

    var item = this._valueToItem(value);

    if (item && item.hasAttribute('disabled')) return;

    this._setFocusedItem(item);

    _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehaviorImpl"].select.apply(this, arguments);
  },

  /**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */
  _resetTabindices: function () {
    var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;
    this.items.forEach(function (item) {
      item.setAttribute('tabindex', item === firstSelectedItem ? '0' : '-1');
      item.setAttribute('aria-selected', this._selection.isSelected(item));
    }, this);
  },

  /**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param {boolean} multi True if the menu should be multi-selectable.
   */
  _updateMultiselectable: function (multi) {
    if (multi) {
      this.setAttribute('aria-multiselectable', 'true');
    } else {
      this.removeAttribute('aria-multiselectable');
    }
  },

  /**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param {KeyboardEvent} event A KeyboardEvent.
   */
  _focusWithKeyboardEvent: function (event) {
    // Make sure that the key pressed is not a modifier key.
    // getModifierState is not being used, as it is not available in Safari
    // earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
    if (this._MODIFIER_KEYS.indexOf(event.key) !== -1) return;
    this.cancelDebouncer('_clearSearchText');
    var searchText = this._searchText || '';
    var key = event.key && event.key.length == 1 ? event.key : String.fromCharCode(event.keyCode);
    searchText += key.toLocaleLowerCase();
    var searchLength = searchText.length;

    for (var i = 0, item; item = this.items[i]; i++) {
      if (item.hasAttribute('disabled')) {
        continue;
      }

      var attr = this.attrForItemTitle || 'textContent';
      var title = (item[attr] || item.getAttribute(attr) || '').trim();

      if (title.length < searchLength) {
        continue;
      }

      if (title.slice(0, searchLength).toLocaleLowerCase() == searchText) {
        this._setFocusedItem(item);

        break;
      }
    }

    this._searchText = searchText;
    this.debounce('_clearSearchText', this._clearSearchText, this._SEARCH_RESET_TIMEOUT_MS);
  },
  _clearSearchText: function () {
    this._searchText = '';
  },

  /**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusPrevious: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex - i + length) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusNext: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex + i) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param {Element} item An item in the menu.
   * @param {boolean} isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */
  _applySelection: function (item, isSelected) {
    if (isSelected) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._applySelection.apply(this, arguments);
  },

  /**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param {Element} focusedItem The element that is currently focused.
   * @param {?Element} old The last element that was considered focused, if
   * applicable.
   */
  _focusedItemChanged: function (focusedItem, old) {
    old && old.setAttribute('tabindex', '-1');

    if (focusedItem && !focusedItem.hasAttribute('disabled') && !this.disabled) {
      focusedItem.setAttribute('tabindex', '0');
      focusedItem.focus();
    }
  },

  /**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param {CustomEvent} event An event containing mutation records as its
   * detail.
   */
  _onIronItemsChanged: function (event) {
    if (event.detail.addedNodes.length) {
      this._resetTabindices();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function (event) {
    var oldTabIndex = this.getAttribute('tabindex');
    IronMenuBehaviorImpl._shiftTabPressed = true;

    this._setFocusedItem(null);

    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      IronMenuBehaviorImpl._shiftTabPressed = false; // NOTE(cdata): polymer/polymer#1305
    }, 1);
  },

  /**
   * Handler that is called when the menu receives focus.
   *
   * @param {FocusEvent} event A focus event.
   */
  _onFocus: function (event) {
    if (IronMenuBehaviorImpl._shiftTabPressed) {
      // do not focus the menu itself
      return;
    } // Do not focus the selected tab if the deepest target is part of the
    // menu element's local DOM and is focusable.


    var rootTarget =
    /** @type {?HTMLElement} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(event).rootTarget;

    if (rootTarget !== this && typeof rootTarget.tabIndex !== 'undefined' && !this.isLightDescendant(rootTarget)) {
      return;
    } // clear the cached focus item


    this._defaultFocusAsync = this.async(function () {
      // focus the selected item when the menu receives focus, or the first item
      // if no item is selected
      var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;

      this._setFocusedItem(null);

      if (firstSelectedItem) {
        this._setFocusedItem(firstSelectedItem);
      } else if (this.items[0]) {
        // We find the first none-disabled item (if one exists)
        this._focusNext();
      }
    });
  },

  /**
   * Handler that is called when the up key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onUpKey: function (event) {
    // up and down arrows moves the focus
    this._focusPrevious();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the down key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onDownKey: function (event) {
    this._focusNext();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the esc key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onEscKey: function (event) {
    var focusedItem = this.focusedItem;

    if (focusedItem) {
      focusedItem.blur();
    }
  },

  /**
   * Handler that is called when a keydown event is detected.
   *
   * @param {KeyboardEvent} event A keyboard event.
   */
  _onKeydown: function (event) {
    if (!this.keyboardEventMatchesKeys(event, 'up down esc')) {
      // all other keys focus the menu item starting with that character
      this._focusWithKeyboardEvent(event);
    }

    event.stopPropagation();
  },
  // override _activateHandler
  _activateHandler: function (event) {
    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._activateHandler.call(this, event);

    event.stopPropagation();
  },

  /**
   * Updates this element's tab index when it's enabled/disabled.
   * @param {boolean} disabled
   */
  _disabledChanged: function (disabled) {
    if (disabled) {
      this._previousTabIndex = this.hasAttribute('tabindex') ? this.tabIndex : 0;
      this.removeAttribute('tabindex'); // No tabindex means not tab-able or select-able.
    } else if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this._previousTabIndex);
    }
  }
};
IronMenuBehaviorImpl._shiftTabPressed = false;
/** @polymerBehavior */

const IronMenuBehavior = [_polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehavior"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], IronMenuBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-multi-selectable.js ***!
  \**********************************************************************/
/*! exports provided: IronMultiSelectableBehaviorImpl, IronMultiSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehaviorImpl", function() { return IronMultiSelectableBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehavior", function() { return IronMultiSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
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
 * @polymerBehavior IronMultiSelectableBehavior
 */

const IronMultiSelectableBehaviorImpl = {
  properties: {
    /**
     * If true, multiple selections are allowed.
     */
    multi: {
      type: Boolean,
      value: false,
      observer: 'multiChanged'
    },

    /**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */
    selectedValues: {
      type: Array,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * Returns an array of currently selected items.
     */
    selectedItems: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    }
  },
  observers: ['_updateSelected(selectedValues.splices)'],

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    if (this.multi) {
      this._toggleSelected(value);
    } else {
      this.selected = value;
    }
  },
  multiChanged: function (multi) {
    this._selection.multi = multi;

    this._updateSelected();
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null || this.selectedValues != null && this.selectedValues.length;
  },

  _updateAttrForSelected: function () {
    if (!this.multi) {
      _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"]._updateAttrForSelected.apply(this);
    } else if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedValues = this.selectedItems.map(function (selectedItem) {
        return this._indexToValue(this.indexOf(selectedItem));
      }, this).filter(function (unfilteredValue) {
        return unfilteredValue != null;
      }, this);
    }
  },
  _updateSelected: function () {
    if (this.multi) {
      this._selectMulti(this.selectedValues);
    } else {
      this._selectSelected(this.selected);
    }
  },
  _selectMulti: function (values) {
    values = values || [];
    var selectedItems = (this._valuesToItems(values) || []).filter(function (item) {
      return item !== null && item !== undefined;
    }); // clear all but the current selected items

    this._selection.clear(selectedItems); // select only those not selected yet


    for (var i = 0; i < selectedItems.length; i++) {
      this._selection.setItemSelected(selectedItems[i], true);
    } // Check for items, since this array is populated only when attached


    if (this.fallbackSelection && !this._selection.get().length) {
      var fallback = this._valueToItem(this.fallbackSelection);

      if (fallback) {
        this.select(this.fallbackSelection);
      }
    }
  },
  _selectionChange: function () {
    var s = this._selection.get();

    if (this.multi) {
      this._setSelectedItems(s);

      this._setSelectedItem(s.length ? s[0] : null);
    } else {
      if (s !== null && s !== undefined) {
        this._setSelectedItems([s]);

        this._setSelectedItem(s);
      } else {
        this._setSelectedItems([]);

        this._setSelectedItem(null);
      }
    }
  },
  _toggleSelected: function (value) {
    var i = this.selectedValues.indexOf(value);
    var unselected = i < 0;

    if (unselected) {
      this.push('selectedValues', value);
    } else {
      this.splice('selectedValues', i, 1);
    }
  },
  _valuesToItems: function (values) {
    return values == null ? null : values.map(function (value) {
      return this._valueToItem(value);
    }, this);
  }
};
/** @polymerBehavior */

const IronMultiSelectableBehavior = [_iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"], IronMultiSelectableBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-selectable.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selectable.js ***!
  \****************************************************************/
/*! exports provided: IronSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelectableBehavior", function() { return IronSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron-selection.js */ "./node_modules/@polymer/iron-selector/iron-selection.js");
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
 * @polymerBehavior
 */

const IronSelectableBehavior = {
  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */
  properties: {
    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {
      type: String,
      value: null
    },

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {
      type: String,
      notify: true
    },

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      readOnly: true,
      notify: true
    },

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent: {
      type: String,
      value: 'tap',
      observer: '_activateEventChanged'
    },

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {
      type: String,
      value: 'iron-selected'
    },

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {
      type: String,
      value: null
    },

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {
      type: String,
      value: null
    },

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function () {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1
        };
      }
    }
  },
  observers: ['_updateAttrForSelected(attrForSelected)', '_updateSelected(selected)', '_checkFallback(fallbackSelection)'],
  created: function () {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__["IronSelection"](this._applySelection.bind(this));
  },
  attached: function () {
    this._observer = this._observeItems(this);

    this._addListener(this.activateEvent);
  },
  detached: function () {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).unobserveNodes(this._observer);
    }

    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function (item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function () {
    var length = this.items.length;
    var index = length - 1;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function () {
    var index = 0;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function (index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function () {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function () {
    this._updateSelected();
  },
  _addListener: function (eventName) {
    this.listen(this, eventName, '_activateHandler');
  },
  _removeListener: function (eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },
  _activateEventChanged: function (eventName, old) {
    this._removeListener(old);

    this._addListener(eventName);
  },
  _updateItems: function () {
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);

    this._setItems(nodes);
  },
  _updateAttrForSelected: function () {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },
  _updateSelected: function () {
    this._selectSelected(this.selected);
  },
  _selectSelected: function (selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);

    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    } // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined


    if (this.fallbackSelection && this.items.length && this._selection.get() === undefined) {
      this.selected = this.fallbackSelection;
    }
  },
  _filterItem: function (node) {
    return !this._excludedLocalNames[node.localName];
  },
  _valueToItem: function (value) {
    return value == null ? null : this.items[this._valueToIndex(value)];
  },
  _valueToIndex: function (value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },
  _indexToValue: function (index) {
    if (this.attrForSelected) {
      var item = this.items[index];

      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },
  _valueForItem: function (item) {
    if (!item) {
      return null;
    }

    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }

    var propValue = item[Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__["dashToCamelCase"])(this.attrForSelected)];
    return propValue != undefined ? propValue : item.getAttribute(this.attrForSelected);
  },
  _applySelection: function (item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }

    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }

    this._selectionChange();

    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {
      item: item
    });
  },
  _selectionChange: function () {
    this._setSelectedItem(this._selection.get());
  },
  // observe items change under the given node.
  _observeItems: function (node) {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(node).observeNodes(function (mutation) {
      this._updateItems();

      this._updateSelected(); // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.


      this.fire('iron-items-changed', mutation, {
        bubbles: false,
        cancelable: false
      });
    });
  },
  _activateHandler: function (e) {
    var t = e.target;
    var items = this.items;

    while (t && t != this) {
      var i = items.indexOf(t);

      if (i >= 0) {
        var value = this._indexToValue(i);

        this._itemActivate(value, t);

        return;
      }

      t = t.parentNode;
    }
  },
  _itemActivate: function (value, item) {
    if (!this.fire('iron-activate', {
      selected: value,
      item: item
    }, {
      cancelable: true
    }).defaultPrevented) {
      this.select(value);
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-selection.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selection.js ***!
  \***************************************************************/
/*! exports provided: IronSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelection", function() { return IronSelection; });
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

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }
  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */


  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }
  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */


  clear(excludes) {
    this.selection.slice().forEach(function (item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }
  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */


  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }
  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */


  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);

          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }

        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }
  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */


  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }
  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */


  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
  }

}
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfm9uYm9hcmRpbmctY29yZS1jb25maWd+b3Atc2lkZWJhcn45OGY3NDBjOS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tbXVsdGktc2VsZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLXNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvciwgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLW11bHRpLXNlbGVjdGFibGUuanMnO1xuaW1wb3J0IHtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tc2VsZWN0YWJsZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgSXJvbk1lbnVCZWhhdmlvcmAgaW1wbGVtZW50cyBhY2Nlc3NpYmxlIG1lbnUgYmVoYXZpb3IuXG4gKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yIElyb25NZW51QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25NZW51QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0uXG4gICAgICogQHR5cGUgez9PYmplY3R9XG4gICAgICovXG4gICAgZm9jdXNlZEl0ZW06XG4gICAgICAgIHtvYnNlcnZlcjogJ19mb2N1c2VkSXRlbUNoYW5nZWQnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdHRyaWJ1dGUgdG8gdXNlIG9uIG1lbnUgaXRlbXMgdG8gbG9vayB1cCB0aGUgaXRlbSB0aXRsZS4gVHlwaW5nIHRoZVxuICAgICAqIGZpcnN0IGxldHRlciBvZiBhbiBpdGVtIHdoZW4gdGhlIG1lbnUgaXMgb3BlbiBmb2N1c2VzIHRoYXQgaXRlbS4gSWZcbiAgICAgKiB1bnNldCwgYHRleHRDb250ZW50YCB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgYXR0ckZvckl0ZW1UaXRsZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2Yga2V5cyBoYXMgYmVlbiB0YWtlbiBmcm9tXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L2dldE1vZGlmaWVyU3RhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9NT0RJRklFUl9LRVlTOiBbXG4gICAgJ0FsdCcsXG4gICAgJ0FsdEdyYXBoJyxcbiAgICAnQ2Fwc0xvY2snLFxuICAgICdDb250cm9sJyxcbiAgICAnRm4nLFxuICAgICdGbkxvY2snLFxuICAgICdIeXBlcicsXG4gICAgJ01ldGEnLFxuICAgICdOdW1Mb2NrJyxcbiAgICAnT1MnLFxuICAgICdTY3JvbGxMb2NrJyxcbiAgICAnU2hpZnQnLFxuICAgICdTdXBlcicsXG4gICAgJ1N5bWJvbCcsXG4gICAgJ1N5bWJvbExvY2snXG4gIF0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9TRUFSQ0hfUkVTRVRfVElNRU9VVF9NUzogMTAwMCxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgX3ByZXZpb3VzVGFiSW5kZXg6IDAsXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICAncm9sZSc6ICdtZW51JyxcbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3VwZGF0ZU11bHRpc2VsZWN0YWJsZShtdWx0aSknXSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnZm9jdXMnOiAnX29uRm9jdXMnLFxuICAgICdrZXlkb3duJzogJ19vbktleWRvd24nLFxuICAgICdpcm9uLWl0ZW1zLWNoYW5nZWQnOiAnX29uSXJvbkl0ZW1zQ2hhbmdlZCdcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczoge1xuICAgICd1cCc6ICdfb25VcEtleScsXG4gICAgJ2Rvd24nOiAnX29uRG93bktleScsXG4gICAgJ2VzYyc6ICdfb25Fc2NLZXknLFxuICAgICdzaGlmdCt0YWI6a2V5ZG93bic6ICdfb25TaGlmdFRhYkRvd24nXG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc2V0VGFiaW5kaWNlcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiB2YWx1ZS4gSWYgdGhlIGBtdWx0aWAgcHJvcGVydHkgaXMgdHJ1ZSwgdGhlbiB0aGUgc2VsZWN0ZWRcbiAgICogc3RhdGUgb2YgdGhlIGB2YWx1ZWAgd2lsbCBiZSB0b2dnbGVkOyBvdGhlcndpc2UgdGhlIGB2YWx1ZWAgd2lsbCBiZVxuICAgKiBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2VsZWN0LlxuICAgKi9cbiAgc2VsZWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIENhbmNlbCBhdXRvbWF0aWNhbGx5IGZvY3VzaW5nIGEgZGVmYXVsdCBpdGVtIGlmIHRoZSBtZW51IHJlY2VpdmVkIGZvY3VzXG4gICAgLy8gdGhyb3VnaCBhIHVzZXIgYWN0aW9uIHNlbGVjdGluZyBhIHBhcnRpY3VsYXIgaXRlbS5cbiAgICBpZiAodGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMpIHtcbiAgICAgIHRoaXMuY2FuY2VsQXN5bmModGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMpO1xuICAgICAgdGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgaXRlbSA9IHRoaXMuX3ZhbHVlVG9JdGVtKHZhbHVlKTtcbiAgICBpZiAoaXRlbSAmJiBpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSlcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShpdGVtKTtcbiAgICBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JJbXBsLnNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldHMgYWxsIHRhYmluZGV4IGF0dHJpYnV0ZXMgdG8gdGhlIGFwcHJvcHJpYXRlIHZhbHVlIGJhc2VkIG9uIHRoZVxuICAgKiBjdXJyZW50IHNlbGVjdGlvbiBzdGF0ZS4gVGhlIGFwcHJvcHJpYXRlIHZhbHVlIGlzIGAwYCAoZm9jdXNhYmxlKSBmb3JcbiAgICogdGhlIGRlZmF1bHQgc2VsZWN0ZWQgaXRlbSwgYW5kIGAtMWAgKG5vdCBrZXlib2FyZCBmb2N1c2FibGUpIGZvciBhbGxcbiAgICogb3RoZXIgaXRlbXMuIEFsc28gc2V0cyB0aGUgY29ycmVjdCBpbml0aWFsIHZhbHVlcyBmb3IgYXJpYS1zZWxlY3RlZFxuICAgKiBhdHRyaWJ1dGUsIHRydWUgZm9yIGRlZmF1bHQgc2VsZWN0ZWQgaXRlbSBhbmQgZmFsc2UgZm9yIG90aGVycy5cbiAgICovXG4gIF9yZXNldFRhYmluZGljZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaXJzdFNlbGVjdGVkSXRlbSA9IHRoaXMubXVsdGkgP1xuICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW1zICYmIHRoaXMuc2VsZWN0ZWRJdGVtc1swXSkgOlxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBpdGVtID09PSBmaXJzdFNlbGVjdGVkSXRlbSA/ICcwJyA6ICctMScpO1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0aGlzLl9zZWxlY3Rpb24uaXNTZWxlY3RlZChpdGVtKSk7XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYXBwcm9wcmlhdGUgQVJJQSBiYXNlZCBvbiB3aGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBtZWFudCB0byBiZVxuICAgKiBtdWx0aS1zZWxlY3RhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG11bHRpIFRydWUgaWYgdGhlIG1lbnUgc2hvdWxkIGJlIG11bHRpLXNlbGVjdGFibGUuXG4gICAqL1xuICBfdXBkYXRlTXVsdGlzZWxlY3RhYmxlOiBmdW5jdGlvbihtdWx0aSkge1xuICAgIGlmIChtdWx0aSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIEtleWJvYXJkRXZlbnQsIHRoaXMgbWV0aG9kIHdpbGwgZm9jdXMgdGhlIGFwcHJvcHJpYXRlIGl0ZW0gaW4gdGhlXG4gICAqIG1lbnUgKGlmIHRoZXJlIGlzIGEgcmVsZXZhbnQgaXRlbSwgYW5kIGl0IGlzIHBvc3NpYmxlIHRvIGZvY3VzIGl0KS5cbiAgICpcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBBIEtleWJvYXJkRXZlbnQuXG4gICAqL1xuICBfZm9jdXNXaXRoS2V5Ym9hcmRFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUga2V5IHByZXNzZWQgaXMgbm90IGEgbW9kaWZpZXIga2V5LlxuICAgIC8vIGdldE1vZGlmaWVyU3RhdGUgaXMgbm90IGJlaW5nIHVzZWQsIGFzIGl0IGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpXG4gICAgLy8gZWFybGllciB0aGFuIDEwLjAuMiAoaHR0cHM6Ly90cmFjLndlYmtpdC5vcmcvY2hhbmdlc2V0LzIwNjcyNS93ZWJraXQpXG4gICAgaWYgKHRoaXMuX01PRElGSUVSX0tFWVMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY2FuY2VsRGVib3VuY2VyKCdfY2xlYXJTZWFyY2hUZXh0Jyk7XG5cbiAgICB2YXIgc2VhcmNoVGV4dCA9IHRoaXMuX3NlYXJjaFRleHQgfHwgJyc7XG4gICAgdmFyIGtleSA9IGV2ZW50LmtleSAmJiBldmVudC5rZXkubGVuZ3RoID09IDEgP1xuICAgICAgICBldmVudC5rZXkgOlxuICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgIHNlYXJjaFRleHQgKz0ga2V5LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICB2YXIgc2VhcmNoTGVuZ3RoID0gc2VhcmNoVGV4dC5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaXRlbTsgaXRlbSA9IHRoaXMuaXRlbXNbaV07IGkrKykge1xuICAgICAgaWYgKGl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXR0ciA9IHRoaXMuYXR0ckZvckl0ZW1UaXRsZSB8fCAndGV4dENvbnRlbnQnO1xuICAgICAgdmFyIHRpdGxlID0gKGl0ZW1bYXR0cl0gfHwgaXRlbS5nZXRBdHRyaWJ1dGUoYXR0cikgfHwgJycpLnRyaW0oKTtcblxuICAgICAgaWYgKHRpdGxlLmxlbmd0aCA8IHNlYXJjaExlbmd0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpdGxlLnNsaWNlKDAsIHNlYXJjaExlbmd0aCkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSBzZWFyY2hUZXh0KSB7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICB0aGlzLmRlYm91bmNlKFxuICAgICAgICAnX2NsZWFyU2VhcmNoVGV4dCcsXG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoVGV4dCxcbiAgICAgICAgdGhpcy5fU0VBUkNIX1JFU0VUX1RJTUVPVVRfTVMpO1xuICB9LFxuXG4gIF9jbGVhclNlYXJjaFRleHQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlYXJjaFRleHQgPSAnJztcbiAgfSxcblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgaXRlbSAocmVsYXRpdmUgdG8gdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0pIGluIHRoZVxuICAgKiBtZW51LCBkaXNhYmxlZCBpdGVtcyB3aWxsIGJlIHNraXBwZWQuXG4gICAqIExvb3AgdW50aWwgbGVuZ3RoICsgMSB0byBoYW5kbGUgY2FzZSBvZiBzaW5nbGUgaXRlbSBpbiBtZW51LlxuICAgKi9cbiAgX2ZvY3VzUHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgY3VyRm9jdXNJbmRleCA9IE51bWJlcih0aGlzLmluZGV4T2YodGhpcy5mb2N1c2VkSXRlbSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW5ndGggKyAxOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1soY3VyRm9jdXNJbmRleCAtIGkgKyBsZW5ndGgpICUgbGVuZ3RoXTtcbiAgICAgIGlmICghaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgdmFyIG93bmVyID0gZG9tKGl0ZW0pLmdldE93bmVyUm9vdCgpIHx8IGRvY3VtZW50O1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShpdGVtKTtcblxuICAgICAgICAvLyBGb2N1cyBtaWdodCBub3QgaGF2ZSB3b3JrZWQsIGlmIHRoZSBlbGVtZW50IHdhcyBoaWRkZW4gb3Igbm90XG4gICAgICAgIC8vIGZvY3VzYWJsZS4gSW4gdGhhdCBjYXNlLCB0cnkgYWdhaW4uXG4gICAgICAgIGlmIChkb20ob3duZXIpLmFjdGl2ZUVsZW1lbnQgPT0gaXRlbSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBpdGVtIChyZWxhdGl2ZSB0byB0aGUgY3VycmVudGx5IGZvY3VzZWQgaXRlbSkgaW4gdGhlXG4gICAqIG1lbnUsIGRpc2FibGVkIGl0ZW1zIHdpbGwgYmUgc2tpcHBlZC5cbiAgICogTG9vcCB1bnRpbCBsZW5ndGggKyAxIHRvIGhhbmRsZSBjYXNlIG9mIHNpbmdsZSBpdGVtIGluIG1lbnUuXG4gICAqL1xuICBfZm9jdXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgdmFyIGN1ckZvY3VzSW5kZXggPSBOdW1iZXIodGhpcy5pbmRleE9mKHRoaXMuZm9jdXNlZEl0ZW0pKTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbKGN1ckZvY3VzSW5kZXggKyBpKSAlIGxlbmd0aF07XG4gICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHZhciBvd25lciA9IGRvbShpdGVtKS5nZXRPd25lclJvb3QoKSB8fCBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgLy8gRm9jdXMgbWlnaHQgbm90IGhhdmUgd29ya2VkLCBpZiB0aGUgZWxlbWVudCB3YXMgaGlkZGVuIG9yIG5vdFxuICAgICAgICAvLyBmb2N1c2FibGUuIEluIHRoYXQgY2FzZSwgdHJ5IGFnYWluLlxuICAgICAgICBpZiAoZG9tKG93bmVyKS5hY3RpdmVFbGVtZW50ID09IGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE11dGF0ZXMgaXRlbXMgaW4gdGhlIG1lbnUgYmFzZWQgb24gcHJvdmlkZWQgc2VsZWN0aW9uIGRldGFpbHMsIHNvIHRoYXRcbiAgICogYWxsIGl0ZW1zIGNvcnJlY3RseSByZWZsZWN0IHNlbGVjdGlvbiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBpdGVtIEFuIGl0ZW0gaW4gdGhlIG1lbnUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RlZCBUcnVlIGlmIHRoZSBpdGVtIHNob3VsZCBiZSBzaG93biBpbiBhXG4gICAqIHNlbGVjdGVkIHN0YXRlLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBfYXBwbHlTZWxlY3Rpb246IGZ1bmN0aW9uKGl0ZW0sIGlzU2VsZWN0ZWQpIHtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgICBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLl9hcHBseVNlbGVjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEaXNjcmV0ZWx5IHVwZGF0ZXMgdGFiaW5kZXggdmFsdWVzIGFtb25nIG1lbnUgaXRlbXMgYXMgdGhlIGZvY3VzZWQgaXRlbVxuICAgKiBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGZvY3VzZWRJdGVtIFRoZSBlbGVtZW50IHRoYXQgaXMgY3VycmVudGx5IGZvY3VzZWQuXG4gICAqIEBwYXJhbSB7P0VsZW1lbnR9IG9sZCBUaGUgbGFzdCBlbGVtZW50IHRoYXQgd2FzIGNvbnNpZGVyZWQgZm9jdXNlZCwgaWZcbiAgICogYXBwbGljYWJsZS5cbiAgICovXG4gIF9mb2N1c2VkSXRlbUNoYW5nZWQ6IGZ1bmN0aW9uKGZvY3VzZWRJdGVtLCBvbGQpIHtcbiAgICBvbGQgJiYgb2xkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICBpZiAoZm9jdXNlZEl0ZW0gJiYgIWZvY3VzZWRJdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJlxuICAgICAgICAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgZm9jdXNlZEl0ZW0uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICBmb2N1c2VkSXRlbS5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgcmVzcG9uZHMgdG8gbXV0YXRpb24gY2hhbmdlcyByZWxhdGVkIHRvIHRoZSBsaXN0IG9mIGl0ZW1zXG4gICAqIGluIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBbiBldmVudCBjb250YWluaW5nIG11dGF0aW9uIHJlY29yZHMgYXMgaXRzXG4gICAqIGRldGFpbC5cbiAgICovXG4gIF9vbklyb25JdGVtc0NoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRldGFpbC5hZGRlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVzZXRUYWJpbmRpY2VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBzaGlmdCt0YWIga2V5cHJlc3MgaXMgZGV0ZWN0ZWQgYnkgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uU2hpZnRUYWJEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBvbGRUYWJJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXG4gICAgSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCA9IHRydWU7XG5cbiAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShudWxsKTtcblxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIG9sZFRhYkluZGV4KTtcbiAgICAgIElyb25NZW51QmVoYXZpb3JJbXBsLl9zaGlmdFRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgIC8vIE5PVEUoY2RhdGEpOiBwb2x5bWVyL3BvbHltZXIjMTMwNVxuICAgIH0sIDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIG1lbnUgcmVjZWl2ZXMgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7Rm9jdXNFdmVudH0gZXZlbnQgQSBmb2N1cyBldmVudC5cbiAgICovXG4gIF9vbkZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChJcm9uTWVudUJlaGF2aW9ySW1wbC5fc2hpZnRUYWJQcmVzc2VkKSB7XG4gICAgICAvLyBkbyBub3QgZm9jdXMgdGhlIG1lbnUgaXRzZWxmXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvY3VzIHRoZSBzZWxlY3RlZCB0YWIgaWYgdGhlIGRlZXBlc3QgdGFyZ2V0IGlzIHBhcnQgb2YgdGhlXG4gICAgLy8gbWVudSBlbGVtZW50J3MgbG9jYWwgRE9NIGFuZCBpcyBmb2N1c2FibGUuXG4gICAgdmFyIHJvb3RUYXJnZXQgPVxuICAgICAgICAvKiogQHR5cGUgez9IVE1MRWxlbWVudH0gKi8gKGRvbShldmVudCkucm9vdFRhcmdldCk7XG4gICAgaWYgKHJvb3RUYXJnZXQgIT09IHRoaXMgJiYgdHlwZW9mIHJvb3RUYXJnZXQudGFiSW5kZXggIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICF0aGlzLmlzTGlnaHREZXNjZW5kYW50KHJvb3RUYXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgdGhlIGNhY2hlZCBmb2N1cyBpdGVtXG4gICAgdGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMgPSB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gZm9jdXMgdGhlIHNlbGVjdGVkIGl0ZW0gd2hlbiB0aGUgbWVudSByZWNlaXZlcyBmb2N1cywgb3IgdGhlIGZpcnN0IGl0ZW1cbiAgICAgIC8vIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICAgIHZhciBmaXJzdFNlbGVjdGVkSXRlbSA9IHRoaXMubXVsdGkgP1xuICAgICAgICAgICh0aGlzLnNlbGVjdGVkSXRlbXMgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zWzBdKSA6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKG51bGwpO1xuXG4gICAgICBpZiAoZmlyc3RTZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oZmlyc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW1zWzBdKSB7XG4gICAgICAgIC8vIFdlIGZpbmQgdGhlIGZpcnN0IG5vbmUtZGlzYWJsZWQgaXRlbSAoaWYgb25lIGV4aXN0cylcbiAgICAgICAgdGhpcy5fZm9jdXNOZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXAga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uVXBLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gdXAgYW5kIGRvd24gYXJyb3dzIG1vdmVzIHRoZSBmb2N1c1xuICAgIHRoaXMuX2ZvY3VzUHJldmlvdXMoKTtcbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGRvd24ga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGVzYyBrZXkgaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBrZXkgY29tYmluYXRpb24gZXZlbnQuXG4gICAqL1xuICBfb25Fc2NLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGZvY3VzZWRJdGVtID0gdGhpcy5mb2N1c2VkSXRlbTtcbiAgICBpZiAoZm9jdXNlZEl0ZW0pIHtcbiAgICAgIGZvY3VzZWRJdGVtLmJsdXIoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGtleWRvd24gZXZlbnQgaXMgZGV0ZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgQSBrZXlib2FyZCBldmVudC5cbiAgICovXG4gIF9vbktleWRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ3VwIGRvd24gZXNjJykpIHtcbiAgICAgIC8vIGFsbCBvdGhlciBrZXlzIGZvY3VzIHRoZSBtZW51IGl0ZW0gc3RhcnRpbmcgd2l0aCB0aGF0IGNoYXJhY3RlclxuICAgICAgdGhpcy5fZm9jdXNXaXRoS2V5Ym9hcmRFdmVudChldmVudCk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIC8vIG92ZXJyaWRlIF9hY3RpdmF0ZUhhbmRsZXJcbiAgX2FjdGl2YXRlSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yLl9hY3RpdmF0ZUhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhpcyBlbGVtZW50J3MgdGFiIGluZGV4IHdoZW4gaXQncyBlbmFibGVkL2Rpc2FibGVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkXG4gICAqL1xuICBfZGlzYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihkaXNhYmxlZCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNUYWJJbmRleCA9XG4gICAgICAgICAgdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPyB0aGlzLnRhYkluZGV4IDogMDtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKFxuICAgICAgICAgICd0YWJpbmRleCcpOyAgLy8gTm8gdGFiaW5kZXggbWVhbnMgbm90IHRhYi1hYmxlIG9yIHNlbGVjdC1hYmxlLlxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9wcmV2aW91c1RhYkluZGV4KTtcbiAgICB9XG4gIH1cbn07XG5cbklyb25NZW51QmVoYXZpb3JJbXBsLl9zaGlmdFRhYlByZXNzZWQgPSBmYWxzZTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudUJlaGF2aW9yID1cbiAgICBbSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yLCBJcm9uQTExeUtleXNCZWhhdmlvciwgSXJvbk1lbnVCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJy4vaXJvbi1zZWxlY3RhYmxlLmpzJztcblxuLyoqXG4gKiBAcG9seW1lckJlaGF2aW9yIElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9ySW1wbCA9IHtcbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgbXVsdGlwbGUgc2VsZWN0aW9ucyBhcmUgYWxsb3dlZC5cbiAgICAgKi9cbiAgICBtdWx0aToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdtdWx0aUNoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc2VsZWN0ZWQgZWxlbWVudHMuIFRoaXMgaXMgdXNlZCBpbnN0ZWFkIG9mIGBzZWxlY3RlZGBcbiAgICAgKiB3aGVuIGBtdWx0aWAgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBzZWxlY3RlZFZhbHVlczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3VwZGF0ZVNlbGVjdGVkKHNlbGVjdGVkVmFsdWVzLnNwbGljZXMpJ10sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGUgYG11bHRpYCBwcm9wZXJ0eSBpcyB0cnVlLCB0aGVuIHRoZSBzZWxlY3RlZFxuICAgKiBzdGF0ZSBvZiB0aGUgYHZhbHVlYCB3aWxsIGJlIHRvZ2dsZWQ7IG90aGVyd2lzZSB0aGUgYHZhbHVlYCB3aWxsIGJlXG4gICAqIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVNlbGVjdGVkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtdWx0aUNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uLm11bHRpID0gbXVsdGk7XG4gICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWQoKTtcbiAgfSxcblxuICAvLyBVTlVTRUQsIEZPUiBBUEkgQ09NUEFUSUJJTElUWVxuICBnZXQgX3Nob3VsZFVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCAhPSBudWxsIHx8XG4gICAgICAgICh0aGlzLnNlbGVjdGVkVmFsdWVzICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGgpO1xuICB9LFxuXG4gIF91cGRhdGVBdHRyRm9yU2VsZWN0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5tdWx0aSkge1xuICAgICAgSXJvblNlbGVjdGFibGVCZWhhdmlvci5fdXBkYXRlQXR0ckZvclNlbGVjdGVkLmFwcGx5KHRoaXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID1cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNcbiAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhUb1ZhbHVlKHRoaXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0aGlzKVxuICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHVuZmlsdGVyZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmZpbHRlcmVkVmFsdWUgIT0gbnVsbDtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdE11bHRpKHRoaXMuc2VsZWN0ZWRWYWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgICB9XG4gIH0sXG5cbiAgX3NlbGVjdE11bHRpOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMgfHwgW107XG5cbiAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9XG4gICAgICAgICh0aGlzLl92YWx1ZXNUb0l0ZW1zKHZhbHVlcykgfHwgW10pLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0gIT09IG51bGwgJiYgaXRlbSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcblxuICAgIC8vIGNsZWFyIGFsbCBidXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbXNcbiAgICB0aGlzLl9zZWxlY3Rpb24uY2xlYXIoc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICAvLyBzZWxlY3Qgb25seSB0aG9zZSBub3Qgc2VsZWN0ZWQgeWV0XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb24uc2V0SXRlbVNlbGVjdGVkKHNlbGVjdGVkSXRlbXNbaV0sIHRydWUpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBpdGVtcywgc2luY2UgdGhpcyBhcnJheSBpcyBwb3B1bGF0ZWQgb25seSB3aGVuIGF0dGFjaGVkXG4gICAgaWYgKHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24gJiYgIXRoaXMuX3NlbGVjdGlvbi5nZXQoKS5sZW5ndGgpIHtcbiAgICAgIHZhciBmYWxsYmFjayA9IHRoaXMuX3ZhbHVlVG9JdGVtKHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24pO1xuICAgICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfc2VsZWN0aW9uQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcyA9IHRoaXMuX3NlbGVjdGlvbi5nZXQoKTtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtcyhzKTtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShzLmxlbmd0aCA/IHNbMF0gOiBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHMgIT09IG51bGwgJiYgcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbXMoW3NdKTtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtcyhbXSk7XG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX3RvZ2dsZVNlbGVjdGVkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBpID0gdGhpcy5zZWxlY3RlZFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICB2YXIgdW5zZWxlY3RlZCA9IGkgPCAwO1xuICAgIGlmICh1bnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnB1c2goJ3NlbGVjdGVkVmFsdWVzJywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNwbGljZSgnc2VsZWN0ZWRWYWx1ZXMnLCBpLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgX3ZhbHVlc1RvSXRlbXM6IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHJldHVybiAodmFsdWVzID09IG51bGwpID8gbnVsbCA6IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZVRvSXRlbSh2YWx1ZSk7XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9yID1cbiAgICBbSXJvblNlbGVjdGFibGVCZWhhdmlvciwgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtkYXNoVG9DYW1lbENhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Nhc2UtbWFwLmpzJztcblxuaW1wb3J0IHtJcm9uU2VsZWN0aW9ufSBmcm9tICcuL2lyb24tc2VsZWN0aW9uLmpzJztcblxuLyoqXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yID0ge1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGlyb24tc2VsZWN0b3IgaXMgYWN0aXZhdGVkIChzZWxlY3RlZCBvciBkZXNlbGVjdGVkKS5cbiAgICogSXQgaXMgZmlyZWQgYmVmb3JlIHRoZSBzZWxlY3RlZCBpdGVtcyBhcmUgY2hhbmdlZC5cbiAgICogQ2FuY2VsIHRoZSBldmVudCB0byBhYm9ydCBzZWxlY3Rpb24uXG4gICAqXG4gICAqIEBldmVudCBpcm9uLWFjdGl2YXRlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGFuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICpcbiAgICogQGV2ZW50IGlyb24tc2VsZWN0XG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIGFuIGl0ZW0gaXMgZGVzZWxlY3RlZFxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1kZXNlbGVjdFxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgbGlzdCBvZiBzZWxlY3RhYmxlIGl0ZW1zIGNoYW5nZXMgKGUuZy4sIGl0ZW1zIGFyZVxuICAgKiBhZGRlZCBvciByZW1vdmVkKS4gVGhlIGRldGFpbCBvZiB0aGUgZXZlbnQgaXMgYSBtdXRhdGlvbiByZWNvcmQgdGhhdFxuICAgKiBkZXNjcmliZXMgd2hhdCBjaGFuZ2VkLlxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1pdGVtcy1jaGFuZ2VkXG4gICAqL1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIHlvdSB3YW50IHRvIHVzZSBhbiBhdHRyaWJ1dGUgdmFsdWUgb3IgcHJvcGVydHkgb2YgYW4gZWxlbWVudCBmb3JcbiAgICAgKiBgc2VsZWN0ZWRgIGluc3RlYWQgb2YgdGhlIGluZGV4LCBzZXQgdGhpcyB0byB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gICAgICogb3IgcHJvcGVydHkuIEh5cGhlbmF0ZWQgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgdG8gY2FtZWwgY2FzZSB3aGVuIHVzZWQgdG9cbiAgICAgKiBsb29rIHVwIHRoZSBwcm9wZXJ0eSBvZiBhIHNlbGVjdGFibGUgZWxlbWVudC4gQ2FtZWwgY2FzZWQgdmFsdWVzIGFyZVxuICAgICAqICpub3QqIGNvbnZlcnRlZCB0byBoeXBoZW5hdGVkIHZhbHVlcyBmb3IgYXR0cmlidXRlIGxvb2t1cC4gSXQnc1xuICAgICAqIHJlY29tbWVuZGVkIHRoYXQgeW91IHByb3ZpZGUgdGhlIGh5cGhlbmF0ZWQgZm9ybSBvZiB0aGUgbmFtZSBzbyB0aGF0XG4gICAgICogc2VsZWN0aW9uIHdvcmtzIGluIGJvdGggY2FzZXMuIChVc2UgYGF0dHItb3ItcHJvcGVydHktbmFtZWAgaW5zdGVhZCBvZlxuICAgICAqIGBhdHRyT3JQcm9wZXJ0eU5hbWVgLilcbiAgICAgKi9cbiAgICBhdHRyRm9yU2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc2VsZWN0ZWQgZWxlbWVudC4gVGhlIGRlZmF1bHQgaXMgdG8gdXNlIHRoZSBpbmRleCBvZiB0aGVcbiAgICAgKiBpdGVtLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIHNlbGVjdGVkOiB7dHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IHt0eXBlOiBPYmplY3QsIHJlYWRPbmx5OiB0cnVlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGV2ZW50IHRoYXQgZmlyZXMgZnJvbSBpdGVtcyB3aGVuIHRoZXkgYXJlIHNlbGVjdGVkLiBTZWxlY3RhYmxlXG4gICAgICogd2lsbCBsaXN0ZW4gZm9yIHRoaXMgZXZlbnQgZnJvbSBpdGVtcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3Rpb24gc3RhdGUuXG4gICAgICogU2V0IHRvIGVtcHR5IHN0cmluZyB0byBsaXN0ZW4gdG8gbm8gZXZlbnRzLlxuICAgICAqL1xuICAgIGFjdGl2YXRlRXZlbnQ6XG4gICAgICAgIHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAndGFwJywgb2JzZXJ2ZXI6ICdfYWN0aXZhdGVFdmVudENoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nLiAgSWYgdGhpcyBpcyBzZXQsIG9ubHkgaXRlbXMgdGhhdCBtYXRjaCB0aGVcbiAgICAgKiBDU1Mgc2VsZWN0b3IgYXJlIHNlbGVjdGFibGUuXG4gICAgICovXG4gICAgc2VsZWN0YWJsZTogU3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIHRvIHNldCBvbiBlbGVtZW50cyB3aGVuIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdGVkQ2xhc3M6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaXJvbi1zZWxlY3RlZCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGF0dHJpYnV0ZSB0byBzZXQgb24gZWxlbWVudHMgd2hlbiBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBmYWxsYmFjayBpZiB0aGUgc2VsZWN0aW9uIGJhc2VkIG9uIHNlbGVjdGVkIHdpdGhcbiAgICAgKiBgYXR0ckZvclNlbGVjdGVkYCBpcyBub3QgZm91bmQuXG4gICAgICovXG4gICAgZmFsbGJhY2tTZWxlY3Rpb246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGl0ZW1zIGZyb20gd2hpY2ggYSBzZWxlY3Rpb24gY2FuIGJlIG1hZGUuXG4gICAgICovXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNldCBvZiBleGNsdWRlZCBlbGVtZW50cyB3aGVyZSB0aGUga2V5IGlzIHRoZSBgbG9jYWxOYW1lYFxuICAgICAqIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBpZ25vcmVkIGZyb20gdGhlIGl0ZW0gbGlzdC5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IHt0ZW1wbGF0ZTogMX1cbiAgICAgKi9cbiAgICBfZXhjbHVkZWRMb2NhbE5hbWVzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgJ3RlbXBsYXRlJzogMSxcbiAgICAgICAgICAnZG9tLWJpbmQnOiAxLFxuICAgICAgICAgICdkb20taWYnOiAxLFxuICAgICAgICAgICdkb20tcmVwZWF0JzogMSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVBdHRyRm9yU2VsZWN0ZWQoYXR0ckZvclNlbGVjdGVkKScsXG4gICAgJ191cGRhdGVTZWxlY3RlZChzZWxlY3RlZCknLFxuICAgICdfY2hlY2tGYWxsYmFjayhmYWxsYmFja1NlbGVjdGlvbiknXG4gIF0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYmluZEZpbHRlckl0ZW0gPSB0aGlzLl9maWx0ZXJJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gbmV3IElyb25TZWxlY3Rpb24odGhpcy5fYXBwbHlTZWxlY3Rpb24uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fb2JzZXJ2ZUl0ZW1zKHRoaXMpO1xuICAgIHRoaXMuX2FkZExpc3RlbmVyKHRoaXMuYWN0aXZhdGVFdmVudCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgZG9tKHRoaXMpLnVub2JzZXJ2ZU5vZGVzKHRoaXMuX29ic2VydmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIodGhpcy5hY3RpdmF0ZUV2ZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIGl0ZW0uXG4gICAqXG4gICAqIEBtZXRob2QgaW5kZXhPZlxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbVxuICAgKi9cbiAgaW5kZXhPZjogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pIDogLTE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGdpdmVuIHZhbHVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBwcmV2aW91cyBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdFByZXZpb3VzXG4gICAqL1xuICBzZWxlY3RQcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZXggPSAoTnVtYmVyKHRoaXMuX3ZhbHVlVG9JbmRleCh0aGlzLnNlbGVjdGVkKSkgLSAxICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX2luZGV4VG9WYWx1ZShpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIG5leHQgaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3ROZXh0XG4gICAqL1xuICBzZWxlY3ROZXh0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGV4ID1cbiAgICAgICAgICAoTnVtYmVyKHRoaXMuX3ZhbHVlVG9JbmRleCh0aGlzLnNlbGVjdGVkKSkgKyAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5faW5kZXhUb1ZhbHVlKGluZGV4KTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0SW5kZXhcbiAgICovXG4gIHNlbGVjdEluZGV4OiBmdW5jdGlvbihpbmRleCkge1xuICAgIHRoaXMuc2VsZWN0KHRoaXMuX2luZGV4VG9WYWx1ZShpbmRleCkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZSBhIHN5bmNocm9ub3VzIHVwZGF0ZSBvZiB0aGUgYGl0ZW1zYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogTk9URTogQ29uc2lkZXIgbGlzdGVuaW5nIGZvciB0aGUgYGlyb24taXRlbXMtY2hhbmdlZGAgZXZlbnQgdG8gcmVzcG9uZCB0b1xuICAgKiB1cGRhdGVzIHRvIHRoZSBzZXQgb2Ygc2VsZWN0YWJsZSBpdGVtcyBhZnRlciB1cGRhdGVzIHRvIHRoZSBET00gbGlzdCBhbmRcbiAgICogc2VsZWN0aW9uIHN0YXRlIGhhdmUgYmVlbiBtYWRlLlxuICAgKlxuICAgKiBXQVJOSU5HOiBJZiB5b3UgYXJlIHVzaW5nIHRoaXMgbWV0aG9kLCB5b3Ugc2hvdWxkIHByb2JhYmx5IGNvbnNpZGVyIGFuXG4gICAqIGFsdGVybmF0ZSBhcHByb2FjaC4gU3luY2hyb25vdXNseSBxdWVyeWluZyBmb3IgaXRlbXMgaXMgcG90ZW50aWFsbHlcbiAgICogc2xvdyBmb3IgbWFueSB1c2UgY2FzZXMuIFRoZSBgaXRlbXNgIHByb3BlcnR5IHdpbGwgdXBkYXRlIGFzeW5jaHJvbm91c2x5XG4gICAqIG9uIGl0cyBvd24gdG8gcmVmbGVjdCBzZWxlY3RhYmxlIGl0ZW1zIGluIHRoZSBET00uXG4gICAqL1xuICBmb3JjZVN5bmNocm9ub3VzSXRlbVVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29ic2VydmVyICYmIHR5cGVvZiB0aGlzLl9vYnNlcnZlci5mbHVzaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gTk9URShiaWNrbmVsbHIpOiBgZG9tLmZsdXNoYCBhYm92ZSBpcyBubyBsb25nZXIgc3VmZmljaWVudCB0byB0cmlnZ2VyXG4gICAgICAvLyBgb2JzZXJ2ZU5vZGVzYCBjYWxsYmFja3MuIFBvbHltZXIgMi54IHJldHVybnMgYW4gb2JqZWN0IGZyb21cbiAgICAgIC8vIGBvYnNlcnZlTm9kZXNgIHdpdGggYSBgZmx1c2hgIHRoYXQgc3luY2hyb25vdXNseSBnaXZlcyB0aGUgY2FsbGJhY2sgYW55XG4gICAgICAvLyBwZW5kaW5nIE11dGF0aW9uUmVjb3JkcyAocmV0cmlldmVkIHdpdGggYHRha2VSZWNvcmRzYCkuIEFueSBjYXNlIHdoZXJlXG4gICAgICAvLyBTaGFkeURPTSBmbHVzaGVzIHdlcmUgZXhwZWN0ZWQgdG8gc3luY2hyb25vdXNseSB0cmlnZ2VyIGl0ZW0gdXBkYXRlc1xuICAgICAgLy8gd2lsbCBub3cgcmVxdWlyZSBjYWxsaW5nIGBmb3JjZVN5bmNocm9ub3VzSXRlbVVwZGF0ZWAuXG4gICAgICB0aGlzLl9vYnNlcnZlci5mbHVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgfSxcblxuICAvLyBVTlVTRUQsIEZPUiBBUEkgQ09NUEFUSUJJTElUWVxuICBnZXQgX3Nob3VsZFVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCAhPSBudWxsO1xuICB9LFxuXG4gIF9jaGVja0ZhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVTZWxlY3RlZCgpO1xuICB9LFxuXG4gIF9hZGRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5saXN0ZW4odGhpcywgZXZlbnROYW1lLCAnX2FjdGl2YXRlSGFuZGxlcicpO1xuICB9LFxuXG4gIF9yZW1vdmVMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCBldmVudE5hbWUsICdfYWN0aXZhdGVIYW5kbGVyJyk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlRXZlbnRDaGFuZ2VkOiBmdW5jdGlvbihldmVudE5hbWUsIG9sZCkge1xuICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKG9sZCk7XG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lKTtcbiAgfSxcblxuICBfdXBkYXRlSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzKS5xdWVyeURpc3RyaWJ1dGVkRWxlbWVudHModGhpcy5zZWxlY3RhYmxlIHx8ICcqJyk7XG4gICAgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwobm9kZXMsIHRoaXMuX2JpbmRGaWx0ZXJJdGVtKTtcbiAgICB0aGlzLl9zZXRJdGVtcyhub2Rlcyk7XG4gIH0sXG5cbiAgX3VwZGF0ZUF0dHJGb3JTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5fdmFsdWVGb3JJdGVtKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZVNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZWxlY3RTZWxlY3RlZCh0aGlzLnNlbGVjdGVkKTtcbiAgfSxcblxuICBfc2VsZWN0U2VsZWN0ZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh0aGlzLnNlbGVjdGVkKTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdChpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBpdGVtcywgc2luY2UgdGhpcyBhcnJheSBpcyBwb3B1bGF0ZWQgb25seSB3aGVuIGF0dGFjaGVkXG4gICAgLy8gU2luY2UgTnVtYmVyKDApIGlzIGZhbHN5LCBleHBsaWNpdGx5IGNoZWNrIGZvciB1bmRlZmluZWRcbiAgICBpZiAodGhpcy5mYWxsYmFja1NlbGVjdGlvbiAmJiB0aGlzLml0ZW1zLmxlbmd0aCAmJlxuICAgICAgICAodGhpcy5fc2VsZWN0aW9uLmdldCgpID09PSB1bmRlZmluZWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5mYWxsYmFja1NlbGVjdGlvbjtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpbHRlckl0ZW06IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gIXRoaXMuX2V4Y2x1ZGVkTG9jYWxOYW1lc1tub2RlLmxvY2FsTmFtZV07XG4gIH0sXG5cbiAgX3ZhbHVlVG9JdGVtOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgPT0gbnVsbCkgPyBudWxsIDogdGhpcy5pdGVtc1t0aGlzLl92YWx1ZVRvSW5kZXgodmFsdWUpXTtcbiAgfSxcblxuICBfdmFsdWVUb0luZGV4OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLmF0dHJGb3JTZWxlY3RlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGl0ZW07IGl0ZW0gPSB0aGlzLml0ZW1zW2ldOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlRm9ySXRlbShpdGVtKSA9PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfaW5kZXhUb1ZhbHVlOiBmdW5jdGlvbihpbmRleCkge1xuICAgIGlmICh0aGlzLmF0dHJGb3JTZWxlY3RlZCkge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZUZvckl0ZW0oaXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH0sXG5cbiAgX3ZhbHVlRm9ySXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5hdHRyRm9yU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBpID0gdGhpcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgcmV0dXJuIGkgPT09IC0xID8gbnVsbCA6IGk7XG4gICAgfVxuICAgIHZhciBwcm9wVmFsdWUgPSBpdGVtW2Rhc2hUb0NhbWVsQ2FzZSh0aGlzLmF0dHJGb3JTZWxlY3RlZCldO1xuICAgIHJldHVybiBwcm9wVmFsdWUgIT0gdW5kZWZpbmVkID8gcHJvcFZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0QXR0cmlidXRlKHRoaXMuYXR0ckZvclNlbGVjdGVkKTtcbiAgfSxcblxuICBfYXBwbHlTZWxlY3Rpb246IGZ1bmN0aW9uKGl0ZW0sIGlzU2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuc2VsZWN0ZWRDbGFzcywgaXNTZWxlY3RlZCwgaXRlbSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkQXR0cmlidXRlKSB7XG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLnNlbGVjdGVkQXR0cmlidXRlLCBpc1NlbGVjdGVkLCBpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgdGhpcy5maXJlKCdpcm9uLScgKyAoaXNTZWxlY3RlZCA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0JyksIHtpdGVtOiBpdGVtfSk7XG4gIH0sXG5cbiAgX3NlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKHRoaXMuX3NlbGVjdGlvbi5nZXQoKSk7XG4gIH0sXG5cbiAgLy8gb2JzZXJ2ZSBpdGVtcyBjaGFuZ2UgdW5kZXIgdGhlIGdpdmVuIG5vZGUuXG4gIF9vYnNlcnZlSXRlbXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZG9tKG5vZGUpLm9ic2VydmVOb2RlcyhmdW5jdGlvbihtdXRhdGlvbikge1xuICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkKCk7XG5cbiAgICAgIC8vIExldCBvdGhlciBpbnRlcmVzdGVkIHBhcnRpZXMga25vdyBhYm91dCB0aGUgY2hhbmdlIHNvIHRoYXRcbiAgICAgIC8vIHdlIGRvbid0IGhhdmUgdG8gcmVjcmVhdGUgbXV0YXRpb24gb2JzZXJ2ZXJzIGV2ZXJ5d2hlcmUuXG4gICAgICB0aGlzLmZpcmUoXG4gICAgICAgICAgJ2lyb24taXRlbXMtY2hhbmdlZCcsIG11dGF0aW9uLCB7YnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gZS50YXJnZXQ7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICB3aGlsZSAodCAmJiB0ICE9IHRoaXMpIHtcbiAgICAgIHZhciBpID0gaXRlbXMuaW5kZXhPZih0KTtcbiAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5faW5kZXhUb1ZhbHVlKGkpO1xuICAgICAgICB0aGlzLl9pdGVtQWN0aXZhdGUodmFsdWUsIHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0ID0gdC5wYXJlbnROb2RlO1xuICAgIH1cbiAgfSxcblxuICBfaXRlbUFjdGl2YXRlOiBmdW5jdGlvbih2YWx1ZSwgaXRlbSkge1xuICAgIGlmICghdGhpcy5maXJlKCdpcm9uLWFjdGl2YXRlJywge3NlbGVjdGVkOiB2YWx1ZSwgaXRlbTogaXRlbX0sIHtcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgIC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJcm9uU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBzZWxlY3RDYWxsYmFja1xuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm92aWRlfVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2VsZWN0Q2FsbGJhY2spIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0Q2FsbGJhY2sgPSBzZWxlY3RDYWxsYmFjaztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlbGVjdGVkIGl0ZW0ocykuXG4gICAqXG4gICAqIEByZXR1cm5zIFJldHVybnMgdGhlIHNlbGVjdGVkIGl0ZW0ocykuIElmIHRoZSBtdWx0aSBwcm9wZXJ0eSBpcyB0cnVlLFxuICAgKiBgZ2V0YCB3aWxsIHJldHVybiBhbiBhcnJheSwgb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuXG4gICAqIHRoZSBzZWxlY3RlZCBpdGVtIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBzZWxlY3Rpb24uXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGkgPyB0aGlzLnNlbGVjdGlvbi5zbGljZSgpIDogdGhpcy5zZWxlY3Rpb25bMF07XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCB0aGUgc2VsZWN0aW9uIGV4Y2VwdCB0aGUgb25lcyBpbmRpY2F0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4Y2x1ZGVzIGl0ZW1zIHRvIGJlIGV4Y2x1ZGVkLlxuICAgKi9cbiAgY2xlYXIoZXhjbHVkZXMpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKCFleGNsdWRlcyB8fCBleGNsdWRlcy5pbmRleE9mKGl0ZW0pIDwgMCkge1xuICAgICAgICB0aGlzLnNldEl0ZW1TZWxlY3RlZChpdGVtLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIGEgZ2l2ZW4gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIHdob3NlIHNlbGVjdGlvbiBzdGF0ZSBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGBpdGVtYCBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGlzU2VsZWN0ZWQoaXRlbSkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKGl0ZW0pID49IDA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIHN0YXRlIGZvciBhIGdpdmVuIGl0ZW0gdG8gZWl0aGVyIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB0byBzZWxlY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RlZCBUcnVlIGZvciBzZWxlY3RlZCwgZmFsc2UgZm9yIGRlc2VsZWN0ZWQuXG4gICAqL1xuICBzZXRJdGVtU2VsZWN0ZWQoaXRlbSwgaXNTZWxlY3RlZCkge1xuICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1NlbGVjdGVkICE9PSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgICAgLy8gcHJvY2VlZCB0byB1cGRhdGUgc2VsZWN0aW9uIG9ubHkgaWYgcmVxdWVzdGVkIHN0YXRlIGRpZmZlcnMgZnJvbVxuICAgICAgICAvLyBjdXJyZW50XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaSA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YoaXRlbSk7XG4gICAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q2FsbGJhY2soaXRlbSwgaXNTZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0aW9uIHN0YXRlIGZvciBhIGdpdmVuIGl0ZW0uIElmIHRoZSBgbXVsdGlgIHByb3BlcnR5XG4gICAqIGlzIHRydWUsIHRoZW4gdGhlIHNlbGVjdGVkIHN0YXRlIG9mIGBpdGVtYCB3aWxsIGJlIHRvZ2dsZWQ7IG90aGVyd2lzZVxuICAgKiB0aGUgYGl0ZW1gIHdpbGwgYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB0byBzZWxlY3QuXG4gICAqL1xuICBzZWxlY3QoaXRlbSkge1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLnRvZ2dsZShpdGVtKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0KCkgIT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuc2V0SXRlbVNlbGVjdGVkKHRoaXMuZ2V0KCksIGZhbHNlKTtcbiAgICAgIHRoaXMuc2V0SXRlbVNlbGVjdGVkKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUgZm9yIGBpdGVtYC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIHRvIHRvZ2dsZS5cbiAgICovXG4gIHRvZ2dsZShpdGVtKSB7XG4gICAgdGhpcy5zZXRJdGVtU2VsZWN0ZWQoaXRlbSwgIXRoaXMuaXNTZWxlY3RlZChpdGVtKSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBbkJBO0FBQ0E7QUF5QkE7Ozs7O0FBS0E7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXhaQTtBQTJaQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDcmJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUF0QkE7QUFpQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvSUE7QUFrSkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNwS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7O0FBTUE7Ozs7OztBQU1BOzs7Ozs7O0FBUUE7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFUQTtBQTVFQTtBQXlGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBeFhBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBOUZBO0FBOEZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=