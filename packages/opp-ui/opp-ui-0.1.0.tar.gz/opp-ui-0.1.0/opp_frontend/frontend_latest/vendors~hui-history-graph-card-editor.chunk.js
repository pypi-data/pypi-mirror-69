(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-history-graph-card-editor"],{

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

const IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function () {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function (scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function (leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function () {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function (yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function (yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

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

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktaGlzdG9yeS1ncmFwaC1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogYFBvbHltZXIuSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yYCBhbGxvd3MgYW4gZWxlbWVudCB0byByZXNwb25kIHRvIHNjcm9sbFxuICogZXZlbnRzIGZyb20gYSBkZXNpZ25hdGVkIHNjcm9sbCB0YXJnZXQuXG4gKlxuICogRWxlbWVudHMgdGhhdCBjb25zdW1lIHRoaXMgYmVoYXZpb3IgY2FuIG92ZXJyaWRlIHRoZSBgX3Njcm9sbEhhbmRsZXJgXG4gKiBtZXRob2QgdG8gYWRkIGxvZ2ljIG9uIHRoZSBzY3JvbGwgZXZlbnQuXG4gKlxuICogQGRlbW8gZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuICogQGRlbW8gZGVtby9kb2N1bWVudC5odG1sIERvY3VtZW50IEVsZW1lbnRcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25TY3JvbGxUYXJnZXRCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGhhbmRsZSB0aGUgc2Nyb2xsIGV2ZW50XG4gICAgICogb24gdGhlIGJlaGFsZiBvZiB0aGUgY3VycmVudCBlbGVtZW50LiBUaGlzIGlzIHR5cGljYWxseSBhIHJlZmVyZW5jZSB0byBhblxuICAgICAqZWxlbWVudCwgYnV0IHRoZXJlIGFyZSBhIGZldyBtb3JlIHBvc2liaWxpdGllczpcbiAgICAgKlxuICAgICAqICMjIyBFbGVtZW50cyBpZFxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICogPGRpdiBpZD1cInNjcm9sbGFibGUtZWxlbWVudFwiIHN0eWxlPVwib3ZlcmZsb3c6IGF1dG87XCI+XG4gICAgICogIDx4LWVsZW1lbnQgc2Nyb2xsLXRhcmdldD1cInNjcm9sbGFibGUtZWxlbWVudFwiPlxuICAgICAqICAgIDwhLS0gQ29udGVudC0tPlxuICAgICAqICA8L3gtZWxlbWVudD5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKmBgYFxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGBzY3JvbGxUYXJnZXRgIHdpbGwgcG9pbnQgdG8gdGhlIG91dGVyIGRpdiBlbGVtZW50LlxuICAgICAqXG4gICAgICogIyMjIERvY3VtZW50IHNjcm9sbGluZ1xuICAgICAqXG4gICAgICogRm9yIGRvY3VtZW50IHNjcm9sbGluZywgeW91IGNhbiB1c2UgdGhlIHJlc2VydmVkIHdvcmQgYGRvY3VtZW50YDpcbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDx4LWVsZW1lbnQgc2Nyb2xsLXRhcmdldD1cImRvY3VtZW50XCI+XG4gICAgICogICA8IS0tIENvbnRlbnQgLS0+XG4gICAgICogPC94LWVsZW1lbnQ+XG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqICMjIyBFbGVtZW50cyByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqYGBganNcbiAgICAgKiBhcHBIZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbGFibGUtZWxlbWVudCcpO1xuICAgICAqYGBgXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQGRlZmF1bHQgZG9jdW1lbnRcbiAgICAgKi9cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIHR5cGU6IEhUTUxFbGVtZW50LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFNjcm9sbFRhcmdldDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zY3JvbGxUYXJnZXRDaGFuZ2VkKHNjcm9sbFRhcmdldCwgaXNBdHRhY2hlZCknXSxcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIGJlIGluc3RhbGxlZC5cbiAgICovXG4gIF9zaG91bGRIYXZlTGlzdGVuZXI6IHRydWUsXG5cbiAgX3Njcm9sbFRhcmdldENoYW5nZWQ6IGZ1bmN0aW9uKHNjcm9sbFRhcmdldCwgaXNBdHRhY2hlZCkge1xuICAgIHZhciBldmVudFRhcmdldDtcblxuICAgIGlmICh0aGlzLl9vbGRTY3JvbGxUYXJnZXQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKGZhbHNlLCB0aGlzLl9vbGRTY3JvbGxUYXJnZXQpO1xuICAgICAgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZWxlbWVudCBpZCByZWZlcmVuY2VzXG4gICAgaWYgKHNjcm9sbFRhcmdldCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSB0aGlzLl9kb2M7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzY3JvbGxUYXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZG9tSG9zdCA9IHRoaXMuZG9tSG9zdDtcblxuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSBkb21Ib3N0ICYmIGRvbUhvc3QuJCA/XG4gICAgICAgICAgZG9tSG9zdC4kW3Njcm9sbFRhcmdldF0gOlxuICAgICAgICAgIGRvbSh0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgc2Nyb2xsVGFyZ2V0KTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLl9vbGRTY3JvbGxUYXJnZXQgPSBzY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcih0aGlzLl9zaG91bGRIYXZlTGlzdGVuZXIsIHNjcm9sbFRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSdW5zIG9uIGV2ZXJ5IHNjcm9sbCBldmVudC4gQ29uc3VtZXIgb2YgdGhpcyBiZWhhdmlvciBtYXkgb3ZlcnJpZGUgdGhpc1xuICAgKiBtZXRob2QuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge30sXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHNjcm9sbCB0YXJnZXQuIENvbnN1bWVycyBvZiB0aGlzIGJlaGF2aW9yIG1heSB3YW50IHRvIGN1c3RvbWl6ZVxuICAgKiB0aGUgZGVmYXVsdCBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGdldCBfZGVmYXVsdFNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRcbiAgICpcbiAgICogQHR5cGUge0VsZW1lbnR9XG4gICAqL1xuICBnZXQgX2RvYygpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWRcbiAgICogdXB3YXJkLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUb3AoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cucGFnZVlPZmZzZXQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCB0byB0aGVcbiAgICogbGVmdC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsTGVmdCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5wYWdlWE9mZnNldCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZFxuICAgKiB1cHdhcmQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBzZXQgX3Njcm9sbFRvcCh0b3ApIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCwgdG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgdG8gdGhlXG4gICAqIGxlZnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBzZXQgX3Njcm9sbExlZnQobGVmdCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8obGVmdCwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBjb250ZW50IHRvIGEgcGFydGljdWxhciBwbGFjZS5cbiAgICpcbiAgICogQG1ldGhvZCBzY3JvbGxcbiAgICogQHBhcmFtIHtudW1iZXJ8IXtsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX0gbGVmdE9yT3B0aW9ucyBUaGUgbGVmdCBwb3NpdGlvbiBvciBzY3JvbGwgb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcj19IHRvcCBUaGUgdG9wIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzY3JvbGw6IGZ1bmN0aW9uKGxlZnRPck9wdGlvbnMsIHRvcCkge1xuICAgIHZhciBsZWZ0O1xuXG4gICAgaWYgKHR5cGVvZiBsZWZ0T3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgbGVmdCA9IGxlZnRPck9wdGlvbnMubGVmdDtcbiAgICAgIHRvcCA9IGxlZnRPck9wdGlvbnMudG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gbGVmdE9yT3B0aW9ucztcbiAgICB9XG5cbiAgICBsZWZ0ID0gbGVmdCB8fCAwO1xuICAgIHRvcCA9IHRvcCB8fCAwO1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8obGVmdCwgdG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVGFyZ2V0V2lkdGgoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cuaW5uZXJXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUYXJnZXRIZWlnaHQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNjcm9sbCB0YXJnZXQgaXMgYSB2YWxpZCBIVE1MRWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc1ZhbGlkU2Nyb2xsVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfSxcblxuICBfdG9nZ2xlU2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKHllcywgc2Nyb2xsVGFyZ2V0KSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cgOiBzY3JvbGxUYXJnZXQ7XG4gICAgaWYgKHllcykge1xuICAgICAgaWYgKCF0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyID0gdGhpcy5fc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0geWVzIFRydWUgdG8gYWRkIHRoZSBldmVudCwgRmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgdG9nZ2xlU2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKHllcykge1xuICAgIHRoaXMuX3Nob3VsZEhhdmVMaXN0ZW5lciA9IHllcztcbiAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcih5ZXMsIHRoaXMuc2Nyb2xsVGFyZ2V0KTtcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICAgIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdJbnB1dHNbaV0gIT09IGxhc3RJbnB1dHNbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGxhc3RUaGlzO1xuICAgIHZhciBsYXN0QXJncyA9IFtdO1xuICAgIHZhciBsYXN0UmVzdWx0O1xuICAgIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICAgICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE2Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTFQQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBNEJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW9DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==