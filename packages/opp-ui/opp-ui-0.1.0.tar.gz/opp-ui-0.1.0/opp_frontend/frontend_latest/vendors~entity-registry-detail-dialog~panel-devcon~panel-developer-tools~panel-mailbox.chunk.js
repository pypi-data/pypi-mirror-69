(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-registry-detail-dialog~panel-devcon~panel-developer-tools~panel-mailbox"],{

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

/***/ "./node_modules/@polymer/paper-tabs/paper-tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tab.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/








/*
`paper-tab` is styled to look like a tab. It should be used in conjunction with
`paper-tabs`.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tab-ink` | Ink color | `--paper-yellow-a100`
`--paper-tab` | Mixin applied to the tab | `{}`
`--paper-tab-content` | Mixin applied to the tab content | `{}`
`--paper-tab-content-focused` | Mixin applied to the tab content when the tab is focused | `{}`
`--paper-tab-content-unselected` | Mixin applied to the tab content when the tab is not selected | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,
  is: 'paper-tab',
  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__["IronControlState"], _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperRippleBehavior"]],
  properties: {
    /**
     * If true, the tab will forward keyboard clicks (enter/space) to
     * the first anchor element found in its descendants
     */
    link: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tab'
  },
  listeners: {
    down: '_updateNoink',
    tap: '_onTap'
  },
  attached: function () {
    this._updateNoink();
  },

  get _parentNoink() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this).parentNode;
    return !!parent && !!parent.noink;
  },

  _updateNoink: function () {
    this.noink = !!this.noink || !!this._parentNoink;
  },
  _onTap: function (event) {
    if (this.link) {
      var anchor = this.queryEffectiveChildren('a');

      if (!anchor) {
        return;
      } // Don't get stuck in a loop delegating
      // the listener from the child anchor


      if (event.target === anchor) {
        return;
      }

      anchor.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs-icons.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;
document.head.appendChild(template.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paper_tabs_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-tabs-icons.js */ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js");
/* harmony import */ var _paper_tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-tab.js */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/













/**
Material design: [Tabs](https://www.google.com/design/spec/components/tabs.html)

`paper-tabs` makes it easy to explore and switch between different views or
functional aspects of an app, or to browse categorized data sets.

Use `selected` property to get or set the selected tab.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

See <a href="?active=paper-tab">paper-tab</a> for more information about
`paper-tab`.

A common usage for `paper-tabs` is to use it along with `iron-pages` to switch
between different views.

    <paper-tabs selected="{{selected}}">
      <paper-tab>Tab 1</paper-tab>
      <paper-tab>Tab 2</paper-tab>
      <paper-tab>Tab 3</paper-tab>
    </paper-tabs>

    <iron-pages selected="{{selected}}">
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
    </iron-pages>

To use links in tabs, add `link` attribute to `paper-tab` and put an `<a>`
element in `paper-tab` with a `tabindex` of -1.

Example:

<pre><code>
&lt;style is="custom-style">
  .link {
    &#64;apply --layout-horizontal;
    &#64;apply --layout-center-center;
  }
&lt;/style>

&lt;paper-tabs selected="0">
  &lt;paper-tab link>
    &lt;a href="#link1" class="link" tabindex="-1">TAB ONE&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link2" class="link" tabindex="-1">TAB TWO&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link3" class="link" tabindex="-1">TAB THREE&lt;/a>
  &lt;/paper-tab>
&lt;/paper-tabs>
</code></pre>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tabs-selection-bar-color` | Color for the selection bar | `--paper-yellow-a100`
`--paper-tabs-selection-bar` | Mixin applied to the selection bar | `{}`
`--paper-tabs` | Mixin applied to the tabs | `{}`
`--paper-tabs-content` | Mixin applied to the content container of tabs | `{}`
`--paper-tabs-container` | Mixin applied to the layout container of tabs | `{}`

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,
  is: 'paper-tabs',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronResizableBehavior"], _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__["IronMenubarBehavior"]],
  properties: {
    /**
     * If true, ink ripple effect is disabled. When this property is changed,
     * all descendant `<paper-tab>` elements have their `noink` property
     * changed to the new value as well.
     */
    noink: {
      type: Boolean,
      value: false,
      observer: '_noinkChanged'
    },

    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     */
    noBar: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the slide effect for the bottom bar is disabled.
     */
    noSlide: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs are scrollable and the tab width is based on the label
     * width.
     */
    scrollable: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs expand to fit their container. This currently only applies
     * when scrollable is true.
     */
    fitContainer: {
      type: Boolean,
      value: false
    },

    /**
     * If true, dragging on the tabs to scroll is disabled.
     */
    disableDrag: {
      type: Boolean,
      value: false
    },

    /**
     * If true, scroll buttons (left/right arrow) will be hidden for scrollable
     * tabs.
     */
    hideScrollButtons: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the tabs are aligned to bottom (the selection bar appears at the
     * top).
     */
    alignBottom: {
      type: Boolean,
      value: false
    },
    selectable: {
      type: String,
      value: 'paper-tab'
    },

    /**
     * If true, tabs are automatically selected when focused using the
     * keyboard.
     */
    autoselect: {
      type: Boolean,
      value: false
    },

    /**
     * The delay (in milliseconds) between when the user stops interacting
     * with the tabs through the keyboard and when the focused item is
     * automatically selected (if `autoselect` is true).
     */
    autoselectDelay: {
      type: Number,
      value: 0
    },
    _step: {
      type: Number,
      value: 10
    },
    _holdDelay: {
      type: Number,
      value: 1
    },
    _leftHidden: {
      type: Boolean,
      value: false
    },
    _rightHidden: {
      type: Boolean,
      value: false
    },
    _previousTab: {
      type: Object
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tablist'
  },
  listeners: {
    'iron-resize': '_onTabSizingChanged',
    'iron-items-changed': '_onTabSizingChanged',
    'iron-select': '_onIronSelect',
    'iron-deselect': '_onIronDeselect'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left:keyup right:keyup': '_onArrowKeyup'
  },
  created: function () {
    this._holdJob = null;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    this._bindDelayedActivationHandler = this._delayedActivationHandler.bind(this);
    this.addEventListener('blur', this._onBlurCapture.bind(this), true);
  },
  ready: function () {
    this.setScrollDirection('y', this.$.tabsContainer);
  },
  detached: function () {
    this._cancelPendingActivation();
  },
  _noinkChanged: function (noink) {
    var childTabs = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__["dom"])(this).querySelectorAll('paper-tab');
    childTabs.forEach(noink ? this._setNoinkAttribute : this._removeNoinkAttribute);
  },
  _setNoinkAttribute: function (element) {
    element.setAttribute('noink', '');
  },
  _removeNoinkAttribute: function (element) {
    element.removeAttribute('noink');
  },
  _computeScrollButtonClass: function (hideThisButton, scrollable, hideScrollButtons) {
    if (!scrollable || hideScrollButtons) {
      return 'hidden';
    }

    if (hideThisButton) {
      return 'not-visible';
    }

    return '';
  },
  _computeTabsContentClass: function (scrollable, fitContainer) {
    return scrollable ? 'scrollable' + (fitContainer ? ' fit-container' : '') : ' fit-container';
  },
  _computeSelectionBarClass: function (noBar, alignBottom) {
    if (noBar) {
      return 'hidden';
    } else if (alignBottom) {
      return 'align-bottom';
    }

    return '';
  },
  // TODO(cdata): Add `track` response back in when gesture lands.
  _onTabSizingChanged: function () {
    this.debounce('_onTabSizingChanged', function () {
      this._scroll();

      this._tabChanged(this.selectedItem);
    }, 10);
  },
  _onIronSelect: function (event) {
    this._tabChanged(event.detail.item, this._previousTab);

    this._previousTab = event.detail.item;
    this.cancelDebouncer('tab-changed');
  },
  _onIronDeselect: function (event) {
    this.debounce('tab-changed', function () {
      this._tabChanged(null, this._previousTab);

      this._previousTab = null; // See polymer/polymer#1305
    }, 1);
  },
  _activateHandler: function () {
    // Cancel item activations scheduled by keyboard events when any other
    // action causes an item to be activated (e.g. clicks).
    this._cancelPendingActivation();

    _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronMenuBehaviorImpl"]._activateHandler.apply(this, arguments);
  },

  /**
   * Activates an item after a delay (in milliseconds).
   */
  _scheduleActivation: function (item, delay) {
    this._pendingActivationItem = item;
    this._pendingActivationTimeout = this.async(this._bindDelayedActivationHandler, delay);
  },

  /**
   * Activates the last item given to `_scheduleActivation`.
   */
  _delayedActivationHandler: function () {
    var item = this._pendingActivationItem;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    item.fire(this.activateEvent, null, {
      bubbles: true,
      cancelable: true
    });
  },

  /**
   * Cancels a previously scheduled item activation made with
   * `_scheduleActivation`.
   */
  _cancelPendingActivation: function () {
    if (this._pendingActivationTimeout !== undefined) {
      this.cancelAsync(this._pendingActivationTimeout);
      this._pendingActivationItem = undefined;
      this._pendingActivationTimeout = undefined;
    }
  },
  _onArrowKeyup: function (event) {
    if (this.autoselect) {
      this._scheduleActivation(this.focusedItem, this.autoselectDelay);
    }
  },
  _onBlurCapture: function (event) {
    // Cancel a scheduled item activation (if any) when that item is
    // blurred.
    if (event.target === this._pendingActivationItem) {
      this._cancelPendingActivation();
    }
  },

  get _tabContainerScrollSize() {
    return Math.max(0, this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth);
  },

  _scroll: function (e, detail) {
    if (!this.scrollable) {
      return;
    }

    var ddx = detail && -detail.ddx || 0;

    this._affectScroll(ddx);
  },
  _down: function (e) {
    // go one beat async to defeat IronMenuBehavior
    // autorefocus-on-no-selection timeout
    this.async(function () {
      if (this._defaultFocusAsync) {
        this.cancelAsync(this._defaultFocusAsync);
        this._defaultFocusAsync = null;
      }
    }, 1);
  },
  _affectScroll: function (dx) {
    this.$.tabsContainer.scrollLeft += dx;
    var scrollLeft = this.$.tabsContainer.scrollLeft;
    this._leftHidden = scrollLeft === 0;
    this._rightHidden = scrollLeft === this._tabContainerScrollSize;
  },
  _onLeftScrollButtonDown: function () {
    this._scrollToLeft();

    this._holdJob = setInterval(this._scrollToLeft.bind(this), this._holdDelay);
  },
  _onRightScrollButtonDown: function () {
    this._scrollToRight();

    this._holdJob = setInterval(this._scrollToRight.bind(this), this._holdDelay);
  },
  _onScrollButtonUp: function () {
    clearInterval(this._holdJob);
    this._holdJob = null;
  },
  _scrollToLeft: function () {
    this._affectScroll(-this._step);
  },
  _scrollToRight: function () {
    this._affectScroll(this._step);
  },
  _tabChanged: function (tab, old) {
    if (!tab) {
      // Remove the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(0, 0);

      return;
    }

    var r = this.$.tabsContent.getBoundingClientRect();
    var w = r.width;
    var tabRect = tab.getBoundingClientRect();
    var tabOffsetLeft = tabRect.left - r.left;
    this._pos = {
      width: this._calcPercent(tabRect.width, w),
      left: this._calcPercent(tabOffsetLeft, w)
    };

    if (this.noSlide || old == null) {
      // Position the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(this._pos.width, this._pos.left);

      return;
    }

    var oldRect = old.getBoundingClientRect();
    var oldIndex = this.items.indexOf(old);
    var index = this.items.indexOf(tab);
    var m = 5; // bar animation: expand

    this.$.selectionBar.classList.add('expand');
    var moveRight = oldIndex < index;
    var isRTL = this._isRTL;

    if (isRTL) {
      moveRight = !moveRight;
    }

    if (moveRight) {
      this._positionBar(this._calcPercent(tabRect.left + tabRect.width - oldRect.left, w) - m, this._left);
    } else {
      this._positionBar(this._calcPercent(oldRect.left + oldRect.width - tabRect.left, w) - m, this._calcPercent(tabOffsetLeft, w) + m);
    }

    if (this.scrollable) {
      this._scrollToSelectedIfNeeded(tabRect.width, tabOffsetLeft);
    }
  },
  _scrollToSelectedIfNeeded: function (tabWidth, tabOffsetLeft) {
    var l = tabOffsetLeft - this.$.tabsContainer.scrollLeft;

    if (l < 0) {
      this.$.tabsContainer.scrollLeft += l;
    } else {
      l += tabWidth - this.$.tabsContainer.offsetWidth;

      if (l > 0) {
        this.$.tabsContainer.scrollLeft += l;
      }
    }
  },
  _calcPercent: function (w, w0) {
    return 100 * w / w0;
  },
  _positionBar: function (width, left) {
    width = width || 0;
    left = left || 0;
    this._width = width;
    this._left = left;
    this.transform('translateX(' + left + '%) scaleX(' + width / 100 + ')', this.$.selectionBar);
  },
  _onBarTransitionEnd: function (e) {
    var cl = this.$.selectionBar.classList; // bar animation: expand -> contract

    if (cl.contains('expand')) {
      cl.remove('expand');
      cl.add('contract');

      this._positionBar(this._pos.width, this._pos.left); // bar animation done

    } else if (cl.contains('contract')) {
      cl.remove('contract');
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZ35wYW5lbC1kZXZjb25+cGFuZWwtZGV2ZWxvcGVyLXRvb2xzfnBhbmVsLW1haWxib3guY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudWJhci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFicy1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uTWVudUJlaGF2aW9yfSBmcm9tICcuL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYElyb25NZW51YmFyQmVoYXZpb3JgIGltcGxlbWVudHMgYWNjZXNzaWJsZSBtZW51YmFyIGJlaGF2aW9yLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk1lbnViYXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdtZW51YmFyJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsnbGVmdCc6ICdfb25MZWZ0S2V5JywgJ3JpZ2h0JzogJ19vblJpZ2h0S2V5J30sXG5cbiAgX29uVXBLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1c2VkSXRlbS5jbGljaygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtLmNsaWNrKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBnZXQgX2lzUlRMKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVsnZGlyZWN0aW9uJ10gPT09ICdydGwnO1xuICB9LFxuXG4gIF9vbkxlZnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vblJpZ2h0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25LZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ3VwIGRvd24gbGVmdCByaWdodCBlc2MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsbCBvdGhlciBrZXlzIGZvY3VzIHRoZSBtZW51IGl0ZW0gc3RhcnRpbmcgd2l0aCB0aGF0IGNoYXJhY3RlclxuICAgIHRoaXMuX2ZvY3VzV2l0aEtleWJvYXJkRXZlbnQoZXZlbnQpO1xuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvciA9IFtJcm9uTWVudUJlaGF2aW9yLCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5gcGFwZXItdGFiYCBpcyBzdHlsZWQgdG8gbG9vayBsaWtlIGEgdGFiLiBJdCBzaG91bGQgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoXG5gcGFwZXItdGFic2AuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItdGFicyBzZWxlY3RlZD1cIjBcIj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDE8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDI8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDM8L3BhcGVyLXRhYj5cbiAgICA8L3BhcGVyLXRhYnM+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10YWItaW5rYCB8IEluayBjb2xvciB8IGAtLXBhcGVyLXllbGxvdy1hMTAwYFxuYC0tcGFwZXItdGFiYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRhYiB8IGB7fWBcbmAtLXBhcGVyLXRhYi1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRhYiBjb250ZW50IHwgYHt9YFxuYC0tcGFwZXItdGFiLWNvbnRlbnQtZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0YWIgY29udGVudCB3aGVuIHRoZSB0YWIgaXMgZm9jdXNlZCB8IGB7fWBcbmAtLXBhcGVyLXRhYi1jb250ZW50LXVuc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGFiIGNvbnRlbnQgd2hlbiB0aGUgdGFiIGlzIG5vdCBzZWxlY3RlZCB8IGB7fWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdGFiO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2xpbmtdKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWItY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdCguaXJvbi1zZWxlY3RlZCkpID4gLnRhYi1jb250ZW50IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYi1jb250ZW50LXVuc2VsZWN0ZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cykgLnRhYi1jb250ZW50IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWItY29udGVudC1mb2N1c2VkO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItdGFiLWluaywgdmFyKC0tcGFwZXIteWVsbG93LWExMDApKTtcbiAgICAgIH1cblxuICAgICAgLnRhYi1jb250ZW50ID4gOjpzbG90dGVkKGEpIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXgtYXV0bztcblxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLXRhYicsXG5cbiAgYmVoYXZpb3JzOiBbSXJvbkNvbnRyb2xTdGF0ZSwgSXJvbkJ1dHRvblN0YXRlLCBQYXBlclJpcHBsZUJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgdGFiIHdpbGwgZm9yd2FyZCBrZXlib2FyZCBjbGlja3MgKGVudGVyL3NwYWNlKSB0b1xuICAgICAqIHRoZSBmaXJzdCBhbmNob3IgZWxlbWVudCBmb3VuZCBpbiBpdHMgZGVzY2VuZGFudHNcbiAgICAgKi9cbiAgICBsaW5rOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9XG5cbiAgfSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAndGFiJ30sXG5cbiAgbGlzdGVuZXJzOiB7ZG93bjogJ191cGRhdGVOb2luaycsIHRhcDogJ19vblRhcCd9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91cGRhdGVOb2luaygpO1xuICB9LFxuXG4gIGdldCBfcGFyZW50Tm9pbmsoKSB7XG4gICAgdmFyIHBhcmVudCA9IGRvbSh0aGlzKS5wYXJlbnROb2RlO1xuICAgIHJldHVybiAhIXBhcmVudCAmJiAhIXBhcmVudC5ub2luaztcbiAgfSxcblxuICBfdXBkYXRlTm9pbms6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm9pbmsgPSAhIXRoaXMubm9pbmsgfHwgISF0aGlzLl9wYXJlbnROb2luaztcbiAgfSxcblxuICBfb25UYXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubGluaykge1xuICAgICAgdmFyIGFuY2hvciA9IHRoaXMucXVlcnlFZmZlY3RpdmVDaGlsZHJlbignYScpO1xuXG4gICAgICBpZiAoIWFuY2hvcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERvbid0IGdldCBzdHVjayBpbiBhIGxvb3AgZGVsZWdhdGluZ1xuICAgICAgLy8gdGhlIGxpc3RlbmVyIGZyb20gdGhlIGNoaWxkIGFuY2hvclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYW5jaG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYDxpcm9uLWljb25zZXQtc3ZnIG5hbWU9XCJwYXBlci10YWJzXCIgc2l6ZT1cIjI0XCI+XG48c3ZnPjxkZWZzPlxuPGcgaWQ9XCJjaGV2cm9uLWxlZnRcIj48cGF0aCBkPVwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCI+PC9wYXRoPjwvZz5cbjxnIGlkPVwiY2hldnJvbi1yaWdodFwiPjxwYXRoIGQ9XCJNMTAgNkw4LjU5IDcuNDEgMTMuMTcgMTJsLTQuNTggNC41OUwxMCAxOGw2LTZ6XCI+PC9wYXRoPjwvZz5cbjwvZGVmcz48L3N2Zz5cbjwvaXJvbi1pY29uc2V0LXN2Zz5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXRhYnMtaWNvbnMuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXRhYi5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnVCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uTWVudWJhckJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51YmFyLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblJlc2l6YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbVGFic10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3RhYnMuaHRtbClcblxuYHBhcGVyLXRhYnNgIG1ha2VzIGl0IGVhc3kgdG8gZXhwbG9yZSBhbmQgc3dpdGNoIGJldHdlZW4gZGlmZmVyZW50IHZpZXdzIG9yXG5mdW5jdGlvbmFsIGFzcGVjdHMgb2YgYW4gYXBwLCBvciB0byBicm93c2UgY2F0ZWdvcml6ZWQgZGF0YSBzZXRzLlxuXG5Vc2UgYHNlbGVjdGVkYCBwcm9wZXJ0eSB0byBnZXQgb3Igc2V0IHRoZSBzZWxlY3RlZCB0YWIuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItdGFicyBzZWxlY3RlZD1cIjBcIj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDE8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDI8L3BhcGVyLXRhYj5cbiAgICAgIDxwYXBlci10YWI+VEFCIDM8L3BhcGVyLXRhYj5cbiAgICA8L3BhcGVyLXRhYnM+XG5cblNlZSA8YSBocmVmPVwiP2FjdGl2ZT1wYXBlci10YWJcIj5wYXBlci10YWI8L2E+IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0XG5gcGFwZXItdGFiYC5cblxuQSBjb21tb24gdXNhZ2UgZm9yIGBwYXBlci10YWJzYCBpcyB0byB1c2UgaXQgYWxvbmcgd2l0aCBgaXJvbi1wYWdlc2AgdG8gc3dpdGNoXG5iZXR3ZWVuIGRpZmZlcmVudCB2aWV3cy5cblxuICAgIDxwYXBlci10YWJzIHNlbGVjdGVkPVwie3tzZWxlY3RlZH19XCI+XG4gICAgICA8cGFwZXItdGFiPlRhYiAxPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRhYiAyPC9wYXBlci10YWI+XG4gICAgICA8cGFwZXItdGFiPlRhYiAzPC9wYXBlci10YWI+XG4gICAgPC9wYXBlci10YWJzPlxuXG4gICAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCJ7e3NlbGVjdGVkfX1cIj5cbiAgICAgIDxkaXY+UGFnZSAxPC9kaXY+XG4gICAgICA8ZGl2PlBhZ2UgMjwvZGl2PlxuICAgICAgPGRpdj5QYWdlIDM8L2Rpdj5cbiAgICA8L2lyb24tcGFnZXM+XG5cblRvIHVzZSBsaW5rcyBpbiB0YWJzLCBhZGQgYGxpbmtgIGF0dHJpYnV0ZSB0byBgcGFwZXItdGFiYCBhbmQgcHV0IGFuIGA8YT5gXG5lbGVtZW50IGluIGBwYXBlci10YWJgIHdpdGggYSBgdGFiaW5kZXhgIG9mIC0xLlxuXG5FeGFtcGxlOlxuXG48cHJlPjxjb2RlPlxuJmx0O3N0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gIC5saW5rIHtcbiAgICAmIzY0O2FwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgJiM2NDthcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICB9XG4mbHQ7L3N0eWxlPlxuXG4mbHQ7cGFwZXItdGFicyBzZWxlY3RlZD1cIjBcIj5cbiAgJmx0O3BhcGVyLXRhYiBsaW5rPlxuICAgICZsdDthIGhyZWY9XCIjbGluazFcIiBjbGFzcz1cImxpbmtcIiB0YWJpbmRleD1cIi0xXCI+VEFCIE9ORSZsdDsvYT5cbiAgJmx0Oy9wYXBlci10YWI+XG4gICZsdDtwYXBlci10YWIgbGluaz5cbiAgICAmbHQ7YSBocmVmPVwiI2xpbmsyXCIgY2xhc3M9XCJsaW5rXCIgdGFiaW5kZXg9XCItMVwiPlRBQiBUV08mbHQ7L2E+XG4gICZsdDsvcGFwZXItdGFiPlxuICAmbHQ7cGFwZXItdGFiIGxpbms+XG4gICAgJmx0O2EgaHJlZj1cIiNsaW5rM1wiIGNsYXNzPVwibGlua1wiIHRhYmluZGV4PVwiLTFcIj5UQUIgVEhSRUUmbHQ7L2E+XG4gICZsdDsvcGFwZXItdGFiPlxuJmx0Oy9wYXBlci10YWJzPlxuPC9jb2RlPjwvcHJlPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yYCB8IENvbG9yIGZvciB0aGUgc2VsZWN0aW9uIGJhciB8IGAtLXBhcGVyLXllbGxvdy1hMTAwYFxuYC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHNlbGVjdGlvbiBiYXIgfCBge31gXG5gLS1wYXBlci10YWJzYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRhYnMgfCBge31gXG5gLS1wYXBlci10YWJzLWNvbnRlbnRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY29udGVudCBjb250YWluZXIgb2YgdGFicyB8IGB7fWBcbmAtLXBhcGVyLXRhYnMtY29udGFpbmVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxheW91dCBjb250YWluZXIgb2YgdGFicyB8IGB7fWBcblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgICAvKiBOT1RFOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZSB2YWx1ZSB0byBiZSBcXGB0cmFuc3BhcmVudFxcYC4gKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpkaXIocnRsKSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbC1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC1hdXRvO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWJzLWNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtbW96LWZsZXgtYmFzaXM6IGF1dG87XG4gICAgICAgIC1tcy1mbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10YWJzLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgICN0YWJzQ29udGVudC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAjdGFic0NvbnRlbnQ6bm90KC5zY3JvbGxhYmxlKSxcbiAgICAgICN0YWJzQ29udGVudC5zY3JvbGxhYmxlLmZpdC1jb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50LnNjcm9sbGFibGUuZml0LWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50LnNjcm9sbGFibGUuZml0LWNvbnRhaW5lciA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIC8qIElFIC0gcHJldmVudCB0YWJzIGZyb20gY29tcHJlc3Npbmcgd2hlbiB0aGV5IHNob3VsZCBzY3JvbGwuICovXG4gICAgICAgIC1tcy1mbGV4OiAxIDAgYXV0bztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDAgYXV0bztcbiAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubm90LXZpc2libGUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgIH1cblxuICAgICAgI3NlbGVjdGlvbkJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yLCB2YXIoLS1wYXBlci15ZWxsb3ctYTEwMCkpO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhcjtcbiAgICAgIH1cblxuICAgICAgI3NlbGVjdGlvbkJhci5hbGlnbi1ib3R0b20ge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgIH1cblxuICAgICAgI3NlbGVjdGlvbkJhci5leHBhbmQge1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSk7XG4gICAgICB9XG5cbiAgICAgICNzZWxlY3Rpb25CYXIuY29udHJhY3Qge1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE4cztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKTtcbiAgICAgIH1cblxuICAgICAgI3RhYnNDb250ZW50ID4gOjpzbG90dGVkKDpub3QoI3NlbGVjdGlvbkJhcikpIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInBhcGVyLXRhYnM6Y2hldnJvbi1sZWZ0XCIgY2xhc3MkPVwiW1tfY29tcHV0ZVNjcm9sbEJ1dHRvbkNsYXNzKF9sZWZ0SGlkZGVuLCBzY3JvbGxhYmxlLCBoaWRlU2Nyb2xsQnV0dG9ucyldXVwiIG9uLXVwPVwiX29uU2Nyb2xsQnV0dG9uVXBcIiBvbi1kb3duPVwiX29uTGVmdFNjcm9sbEJ1dHRvbkRvd25cIiB0YWJpbmRleD1cIi0xXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuICAgIDxkaXYgaWQ9XCJ0YWJzQ29udGFpbmVyXCIgb24tdHJhY2s9XCJfc2Nyb2xsXCIgb24tZG93bj1cIl9kb3duXCI+XG4gICAgICA8ZGl2IGlkPVwidGFic0NvbnRlbnRcIiBjbGFzcyQ9XCJbW19jb21wdXRlVGFic0NvbnRlbnRDbGFzcyhzY3JvbGxhYmxlLCBmaXRDb250YWluZXIpXV1cIj5cbiAgICAgICAgPGRpdiBpZD1cInNlbGVjdGlvbkJhclwiIGNsYXNzJD1cIltbX2NvbXB1dGVTZWxlY3Rpb25CYXJDbGFzcyhub0JhciwgYWxpZ25Cb3R0b20pXV1cIiBvbi10cmFuc2l0aW9uZW5kPVwiX29uQmFyVHJhbnNpdGlvbkVuZFwiPjwvZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwicGFwZXItdGFiczpjaGV2cm9uLXJpZ2h0XCIgY2xhc3MkPVwiW1tfY29tcHV0ZVNjcm9sbEJ1dHRvbkNsYXNzKF9yaWdodEhpZGRlbiwgc2Nyb2xsYWJsZSwgaGlkZVNjcm9sbEJ1dHRvbnMpXV1cIiBvbi11cD1cIl9vblNjcm9sbEJ1dHRvblVwXCIgb24tZG93bj1cIl9vblJpZ2h0U2Nyb2xsQnV0dG9uRG93blwiIHRhYmluZGV4PVwiLTFcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuYCxcblxuICBpczogJ3BhcGVyLXRhYnMnLFxuICBiZWhhdmlvcnM6IFtJcm9uUmVzaXphYmxlQmVoYXZpb3IsIElyb25NZW51YmFyQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBpbmsgcmlwcGxlIGVmZmVjdCBpcyBkaXNhYmxlZC4gV2hlbiB0aGlzIHByb3BlcnR5IGlzIGNoYW5nZWQsXG4gICAgICogYWxsIGRlc2NlbmRhbnQgYDxwYXBlci10YWI+YCBlbGVtZW50cyBoYXZlIHRoZWlyIGBub2lua2AgcHJvcGVydHlcbiAgICAgKiBjaGFuZ2VkIHRvIHRoZSBuZXcgdmFsdWUgYXMgd2VsbC5cbiAgICAgKi9cbiAgICBub2luazoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfbm9pbmtDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYm90dG9tIGJhciB0byBpbmRpY2F0ZSB0aGUgc2VsZWN0ZWQgdGFiIHdpbGwgbm90IGJlIHNob3duLlxuICAgICAqL1xuICAgIG5vQmFyOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBzbGlkZSBlZmZlY3QgZm9yIHRoZSBib3R0b20gYmFyIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIG5vU2xpZGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGFicyBhcmUgc2Nyb2xsYWJsZSBhbmQgdGhlIHRhYiB3aWR0aCBpcyBiYXNlZCBvbiB0aGUgbGFiZWxcbiAgICAgKiB3aWR0aC5cbiAgICAgKi9cbiAgICBzY3JvbGxhYmxlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRhYnMgZXhwYW5kIHRvIGZpdCB0aGVpciBjb250YWluZXIuIFRoaXMgY3VycmVudGx5IG9ubHkgYXBwbGllc1xuICAgICAqIHdoZW4gc2Nyb2xsYWJsZSBpcyB0cnVlLlxuICAgICAqL1xuICAgIGZpdENvbnRhaW5lcjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBkcmFnZ2luZyBvbiB0aGUgdGFicyB0byBzY3JvbGwgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZURyYWc6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2Nyb2xsIGJ1dHRvbnMgKGxlZnQvcmlnaHQgYXJyb3cpIHdpbGwgYmUgaGlkZGVuIGZvciBzY3JvbGxhYmxlXG4gICAgICogdGFicy5cbiAgICAgKi9cbiAgICBoaWRlU2Nyb2xsQnV0dG9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgdGFicyBhcmUgYWxpZ25lZCB0byBib3R0b20gKHRoZSBzZWxlY3Rpb24gYmFyIGFwcGVhcnMgYXQgdGhlXG4gICAgICogdG9wKS5cbiAgICAgKi9cbiAgICBhbGlnbkJvdHRvbToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBzZWxlY3RhYmxlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3BhcGVyLXRhYid9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGFicyBhcmUgYXV0b21hdGljYWxseSBzZWxlY3RlZCB3aGVuIGZvY3VzZWQgdXNpbmcgdGhlXG4gICAgICoga2V5Ym9hcmQuXG4gICAgICovXG4gICAgYXV0b3NlbGVjdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVsYXkgKGluIG1pbGxpc2Vjb25kcykgYmV0d2VlbiB3aGVuIHRoZSB1c2VyIHN0b3BzIGludGVyYWN0aW5nXG4gICAgICogd2l0aCB0aGUgdGFicyB0aHJvdWdoIHRoZSBrZXlib2FyZCBhbmQgd2hlbiB0aGUgZm9jdXNlZCBpdGVtIGlzXG4gICAgICogYXV0b21hdGljYWxseSBzZWxlY3RlZCAoaWYgYGF1dG9zZWxlY3RgIGlzIHRydWUpLlxuICAgICAqL1xuICAgIGF1dG9zZWxlY3REZWxheToge3R5cGU6IE51bWJlciwgdmFsdWU6IDB9LFxuXG4gICAgX3N0ZXA6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxMH0sXG5cbiAgICBfaG9sZERlbGF5OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMX0sXG5cbiAgICBfbGVmdEhpZGRlbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfcmlnaHRIaWRkZW46IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX3ByZXZpb3VzVGFiOiB7dHlwZTogT2JqZWN0fVxuICB9LFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICd0YWJsaXN0J30sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ2lyb24tcmVzaXplJzogJ19vblRhYlNpemluZ0NoYW5nZWQnLFxuICAgICdpcm9uLWl0ZW1zLWNoYW5nZWQnOiAnX29uVGFiU2l6aW5nQ2hhbmdlZCcsXG4gICAgJ2lyb24tc2VsZWN0JzogJ19vbklyb25TZWxlY3QnLFxuICAgICdpcm9uLWRlc2VsZWN0JzogJ19vbklyb25EZXNlbGVjdCdcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeydsZWZ0OmtleXVwIHJpZ2h0OmtleXVwJzogJ19vbkFycm93S2V5dXAnfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9ob2xkSm9iID0gbnVsbDtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2JpbmREZWxheWVkQWN0aXZhdGlvbkhhbmRsZXIgPVxuICAgICAgICB0aGlzLl9kZWxheWVkQWN0aXZhdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXJDYXB0dXJlLmJpbmQodGhpcyksIHRydWUpO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFNjcm9sbERpcmVjdGlvbigneScsIHRoaXMuJC50YWJzQ29udGFpbmVyKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2FuY2VsUGVuZGluZ0FjdGl2YXRpb24oKTtcbiAgfSxcblxuICBfbm9pbmtDaGFuZ2VkOiBmdW5jdGlvbihub2luaykge1xuICAgIHZhciBjaGlsZFRhYnMgPSBkb20odGhpcykucXVlcnlTZWxlY3RvckFsbCgncGFwZXItdGFiJyk7XG4gICAgY2hpbGRUYWJzLmZvckVhY2goXG4gICAgICAgIG5vaW5rID8gdGhpcy5fc2V0Tm9pbmtBdHRyaWJ1dGUgOiB0aGlzLl9yZW1vdmVOb2lua0F0dHJpYnV0ZSk7XG4gIH0sXG5cbiAgX3NldE5vaW5rQXR0cmlidXRlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vaW5rJywgJycpO1xuICB9LFxuXG4gIF9yZW1vdmVOb2lua0F0dHJpYnV0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdub2luaycpO1xuICB9LFxuXG4gIF9jb21wdXRlU2Nyb2xsQnV0dG9uQ2xhc3M6IGZ1bmN0aW9uKFxuICAgICAgaGlkZVRoaXNCdXR0b24sIHNjcm9sbGFibGUsIGhpZGVTY3JvbGxCdXR0b25zKSB7XG4gICAgaWYgKCFzY3JvbGxhYmxlIHx8IGhpZGVTY3JvbGxCdXR0b25zKSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgaWYgKGhpZGVUaGlzQnV0dG9uKSB7XG4gICAgICByZXR1cm4gJ25vdC12aXNpYmxlJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH0sXG5cbiAgX2NvbXB1dGVUYWJzQ29udGVudENsYXNzOiBmdW5jdGlvbihzY3JvbGxhYmxlLCBmaXRDb250YWluZXIpIHtcbiAgICByZXR1cm4gc2Nyb2xsYWJsZSA/ICdzY3JvbGxhYmxlJyArIChmaXRDb250YWluZXIgPyAnIGZpdC1jb250YWluZXInIDogJycpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICcgZml0LWNvbnRhaW5lcic7XG4gIH0sXG5cbiAgX2NvbXB1dGVTZWxlY3Rpb25CYXJDbGFzczogZnVuY3Rpb24obm9CYXIsIGFsaWduQm90dG9tKSB7XG4gICAgaWYgKG5vQmFyKSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfSBlbHNlIGlmIChhbGlnbkJvdHRvbSkge1xuICAgICAgcmV0dXJuICdhbGlnbi1ib3R0b20nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSxcblxuICAvLyBUT0RPKGNkYXRhKTogQWRkIGB0cmFja2AgcmVzcG9uc2UgYmFjayBpbiB3aGVuIGdlc3R1cmUgbGFuZHMuXG5cbiAgX29uVGFiU2l6aW5nQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kZWJvdW5jZSgnX29uVGFiU2l6aW5nQ2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fc2Nyb2xsKCk7XG4gICAgICB0aGlzLl90YWJDaGFuZ2VkKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9LCAxMCk7XG4gIH0sXG5cbiAgX29uSXJvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl90YWJDaGFuZ2VkKGV2ZW50LmRldGFpbC5pdGVtLCB0aGlzLl9wcmV2aW91c1RhYik7XG4gICAgdGhpcy5fcHJldmlvdXNUYWIgPSBldmVudC5kZXRhaWwuaXRlbTtcbiAgICB0aGlzLmNhbmNlbERlYm91bmNlcigndGFiLWNoYW5nZWQnKTtcbiAgfSxcblxuICBfb25Jcm9uRGVzZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5kZWJvdW5jZSgndGFiLWNoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3RhYkNoYW5nZWQobnVsbCwgdGhpcy5fcHJldmlvdXNUYWIpO1xuICAgICAgdGhpcy5fcHJldmlvdXNUYWIgPSBudWxsO1xuICAgICAgLy8gU2VlIHBvbHltZXIvcG9seW1lciMxMzA1XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgX2FjdGl2YXRlSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2FuY2VsIGl0ZW0gYWN0aXZhdGlvbnMgc2NoZWR1bGVkIGJ5IGtleWJvYXJkIGV2ZW50cyB3aGVuIGFueSBvdGhlclxuICAgIC8vIGFjdGlvbiBjYXVzZXMgYW4gaXRlbSB0byBiZSBhY3RpdmF0ZWQgKGUuZy4gY2xpY2tzKS5cbiAgICB0aGlzLl9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbigpO1xuXG4gICAgSXJvbk1lbnVCZWhhdmlvckltcGwuX2FjdGl2YXRlSGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgYW4gaXRlbSBhZnRlciBhIGRlbGF5IChpbiBtaWxsaXNlY29uZHMpLlxuICAgKi9cbiAgX3NjaGVkdWxlQWN0aXZhdGlvbjogZnVuY3Rpb24oaXRlbSwgZGVsYXkpIHtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCA9XG4gICAgICAgIHRoaXMuYXN5bmModGhpcy5fYmluZERlbGF5ZWRBY3RpdmF0aW9uSGFuZGxlciwgZGVsYXkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGxhc3QgaXRlbSBnaXZlbiB0byBgX3NjaGVkdWxlQWN0aXZhdGlvbmAuXG4gICAqL1xuICBfZGVsYXllZEFjdGl2YXRpb25IYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uSXRlbTtcbiAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIGl0ZW0uZmlyZSh0aGlzLmFjdGl2YXRlRXZlbnQsIG51bGwsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYSBwcmV2aW91c2x5IHNjaGVkdWxlZCBpdGVtIGFjdGl2YXRpb24gbWFkZSB3aXRoXG4gICAqIGBfc2NoZWR1bGVBY3RpdmF0aW9uYC5cbiAgICovXG4gIF9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNhbmNlbEFzeW5jKHRoaXMuX3BlbmRpbmdBY3RpdmF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvbkl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wZW5kaW5nQWN0aXZhdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuXG4gIF9vbkFycm93S2V5dXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYXV0b3NlbGVjdCkge1xuICAgICAgdGhpcy5fc2NoZWR1bGVBY3RpdmF0aW9uKHRoaXMuZm9jdXNlZEl0ZW0sIHRoaXMuYXV0b3NlbGVjdERlbGF5KTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQmx1ckNhcHR1cmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gQ2FuY2VsIGEgc2NoZWR1bGVkIGl0ZW0gYWN0aXZhdGlvbiAoaWYgYW55KSB3aGVuIHRoYXQgaXRlbSBpc1xuICAgIC8vIGJsdXJyZWQuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fcGVuZGluZ0FjdGl2YXRpb25JdGVtKSB7XG4gICAgICB0aGlzLl9jYW5jZWxQZW5kaW5nQWN0aXZhdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICBnZXQgX3RhYkNvbnRhaW5lclNjcm9sbFNpemUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAwLCB0aGlzLiQudGFic0NvbnRhaW5lci5zY3JvbGxXaWR0aCAtIHRoaXMuJC50YWJzQ29udGFpbmVyLm9mZnNldFdpZHRoKTtcbiAgfSxcblxuICBfc2Nyb2xsOiBmdW5jdGlvbihlLCBkZXRhaWwpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZHggPSAoZGV0YWlsICYmIC1kZXRhaWwuZGR4KSB8fCAwO1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbChkZHgpO1xuICB9LFxuXG4gIF9kb3duOiBmdW5jdGlvbihlKSB7XG4gICAgLy8gZ28gb25lIGJlYXQgYXN5bmMgdG8gZGVmZWF0IElyb25NZW51QmVoYXZpb3JcbiAgICAvLyBhdXRvcmVmb2N1cy1vbi1uby1zZWxlY3Rpb24gdGltZW91dFxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fZGVmYXVsdEZvY3VzQXN5bmMpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxBc3luYyh0aGlzLl9kZWZhdWx0Rm9jdXNBc3luYyk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgfSxcblxuICBfYWZmZWN0U2Nyb2xsOiBmdW5jdGlvbihkeCkge1xuICAgIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gZHg7XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG5cbiAgICB0aGlzLl9sZWZ0SGlkZGVuID0gc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB0aGlzLl9yaWdodEhpZGRlbiA9IHNjcm9sbExlZnQgPT09IHRoaXMuX3RhYkNvbnRhaW5lclNjcm9sbFNpemU7XG4gIH0sXG5cbiAgX29uTGVmdFNjcm9sbEJ1dHRvbkRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Njcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuX2hvbGRKb2IgPSBzZXRJbnRlcnZhbCh0aGlzLl9zY3JvbGxUb0xlZnQuYmluZCh0aGlzKSwgdGhpcy5faG9sZERlbGF5KTtcbiAgfSxcblxuICBfb25SaWdodFNjcm9sbEJ1dHRvbkRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Njcm9sbFRvUmlnaHQoKTtcbiAgICB0aGlzLl9ob2xkSm9iID1cbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5fc2Nyb2xsVG9SaWdodC5iaW5kKHRoaXMpLCB0aGlzLl9ob2xkRGVsYXkpO1xuICB9LFxuXG4gIF9vblNjcm9sbEJ1dHRvblVwOiBmdW5jdGlvbigpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2hvbGRKb2IpO1xuICAgIHRoaXMuX2hvbGRKb2IgPSBudWxsO1xuICB9LFxuXG4gIF9zY3JvbGxUb0xlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbCgtdGhpcy5fc3RlcCk7XG4gIH0sXG5cbiAgX3Njcm9sbFRvUmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FmZmVjdFNjcm9sbCh0aGlzLl9zdGVwKTtcbiAgfSxcblxuICBfdGFiQ2hhbmdlZDogZnVuY3Rpb24odGFiLCBvbGQpIHtcbiAgICBpZiAoIXRhYikge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBiYXIgd2l0aG91dCBhbmltYXRpb24uXG4gICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpO1xuICAgICAgdGhpcy4kLnNlbGVjdGlvbkJhci5jbGFzc0xpc3QucmVtb3ZlKCdjb250cmFjdCcpO1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIoMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHIgPSB0aGlzLiQudGFic0NvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHcgPSByLndpZHRoO1xuICAgIHZhciB0YWJSZWN0ID0gdGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0YWJPZmZzZXRMZWZ0ID0gdGFiUmVjdC5sZWZ0IC0gci5sZWZ0O1xuXG4gICAgdGhpcy5fcG9zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2NhbGNQZXJjZW50KHRhYlJlY3Qud2lkdGgsIHcpLFxuICAgICAgbGVmdDogdGhpcy5fY2FsY1BlcmNlbnQodGFiT2Zmc2V0TGVmdCwgdylcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubm9TbGlkZSB8fCBvbGQgPT0gbnVsbCkge1xuICAgICAgLy8gUG9zaXRpb24gdGhlIGJhciB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICAgIHRoaXMuJC5zZWxlY3Rpb25CYXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJyk7XG4gICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRyYWN0Jyk7XG4gICAgICB0aGlzLl9wb3NpdGlvbkJhcih0aGlzLl9wb3Mud2lkdGgsIHRoaXMuX3Bvcy5sZWZ0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb2xkUmVjdCA9IG9sZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgb2xkSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2Yob2xkKTtcbiAgICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGFiKTtcbiAgICB2YXIgbSA9IDU7XG5cbiAgICAvLyBiYXIgYW5pbWF0aW9uOiBleHBhbmRcbiAgICB0aGlzLiQuc2VsZWN0aW9uQmFyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuXG4gICAgdmFyIG1vdmVSaWdodCA9IG9sZEluZGV4IDwgaW5kZXg7XG4gICAgdmFyIGlzUlRMID0gdGhpcy5faXNSVEw7XG4gICAgaWYgKGlzUlRMKSB7XG4gICAgICBtb3ZlUmlnaHQgPSAhbW92ZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmIChtb3ZlUmlnaHQpIHtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQmFyKFxuICAgICAgICAgIHRoaXMuX2NhbGNQZXJjZW50KHRhYlJlY3QubGVmdCArIHRhYlJlY3Qud2lkdGggLSBvbGRSZWN0LmxlZnQsIHcpIC0gbSxcbiAgICAgICAgICB0aGlzLl9sZWZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9zaXRpb25CYXIoXG4gICAgICAgICAgdGhpcy5fY2FsY1BlcmNlbnQob2xkUmVjdC5sZWZ0ICsgb2xkUmVjdC53aWR0aCAtIHRhYlJlY3QubGVmdCwgdykgLSBtLFxuICAgICAgICAgIHRoaXMuX2NhbGNQZXJjZW50KHRhYk9mZnNldExlZnQsIHcpICsgbSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5fc2Nyb2xsVG9TZWxlY3RlZElmTmVlZGVkKHRhYlJlY3Qud2lkdGgsIHRhYk9mZnNldExlZnQpO1xuICAgIH1cbiAgfSxcblxuICBfc2Nyb2xsVG9TZWxlY3RlZElmTmVlZGVkOiBmdW5jdGlvbih0YWJXaWR0aCwgdGFiT2Zmc2V0TGVmdCkge1xuICAgIHZhciBsID0gdGFiT2Zmc2V0TGVmdCAtIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgaWYgKGwgPCAwKSB7XG4gICAgICB0aGlzLiQudGFic0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgKz0gKHRhYldpZHRoIC0gdGhpcy4kLnRhYnNDb250YWluZXIub2Zmc2V0V2lkdGgpO1xuICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgIHRoaXMuJC50YWJzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2NhbGNQZXJjZW50OiBmdW5jdGlvbih3LCB3MCkge1xuICAgIHJldHVybiAxMDAgKiB3IC8gdzA7XG4gIH0sXG5cbiAgX3Bvc2l0aW9uQmFyOiBmdW5jdGlvbih3aWR0aCwgbGVmdCkge1xuICAgIHdpZHRoID0gd2lkdGggfHwgMDtcbiAgICBsZWZ0ID0gbGVmdCB8fCAwO1xuXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLl9sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnRyYW5zZm9ybShcbiAgICAgICAgJ3RyYW5zbGF0ZVgoJyArIGxlZnQgKyAnJSkgc2NhbGVYKCcgKyAod2lkdGggLyAxMDApICsgJyknLFxuICAgICAgICB0aGlzLiQuc2VsZWN0aW9uQmFyKTtcbiAgfSxcblxuICBfb25CYXJUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGNsID0gdGhpcy4kLnNlbGVjdGlvbkJhci5jbGFzc0xpc3Q7XG4gICAgLy8gYmFyIGFuaW1hdGlvbjogZXhwYW5kIC0+IGNvbnRyYWN0XG4gICAgaWYgKGNsLmNvbnRhaW5zKCdleHBhbmQnKSkge1xuICAgICAgY2wucmVtb3ZlKCdleHBhbmQnKTtcbiAgICAgIGNsLmFkZCgnY29udHJhY3QnKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQmFyKHRoaXMuX3Bvcy53aWR0aCwgdGhpcy5fcG9zLmxlZnQpO1xuICAgICAgLy8gYmFyIGFuaW1hdGlvbiBkb25lXG4gICAgfSBlbHNlIGlmIChjbC5jb250YWlucygnY29udHJhY3QnKSkge1xuICAgICAgY2wucmVtb3ZlKCdjb250cmFjdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7OztBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREE7QUFvREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBbUVBO0FBRUE7QUFFQTtBQUVBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5IQTs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7Ozs7O0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBa0lBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQXRFQTtBQUNBO0FBd0VBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1ZkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==