(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~hui-dialog-suggest-card~more-info-dialog"],{

/***/ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js ***!
  \****************************************************************************/
/*! exports provided: PaperInkyFocusBehaviorImpl, PaperInkyFocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehaviorImpl", function() { return PaperInkyFocusBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehavior", function() { return PaperInkyFocusBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 *
 * @polymerBehavior PaperInkyFocusBehavior
 */

const PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],
  _focusedChanged: function (receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }

    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },
  _createRipple: function () {
    var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._createRipple();

    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};
/** @polymerBehavior */

const PaperInkyFocusBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"], PaperInkyFocusBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js ***!
  \************************************************************************/
/*! exports provided: PaperRippleBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRippleBehavior", function() { return PaperRippleBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */

const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {
      type: Boolean,
      observer: '_noinkChanged'
    },

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function () {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function (event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonStateImpl"]._downHandler.call(this, event);

    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function (optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;

      if (rippleContainer) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(rippleContainer).appendChild(this._ripple);
      }

      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this._rippleContainer || this);
        var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(optTriggeringEvent).rootTarget;

        if (domContainer.deepContains(
        /** @type {Node} */
        target)) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function () {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function () {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function () {
    var element =
    /** @type {!PaperRippleElement} */
    document.createElement('paper-ripple');
    return element;
  },
  _noinkChanged: function (noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-icon-button/paper-icon-button.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
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






/**
Material design: [Icon
toggles](https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons)

`paper-icon-button` is a button with an image placed at the center. When the
user touches the button, a ripple effect emanates from the center of the button.

`paper-icon-button` does not include a default icon set. To use icons from the
default set, include `PolymerElements/iron-icons/iron-icons.html`, and use the
`icon` attribute to specify which icon from the icon set to use.

    <paper-icon-button icon="menu"></paper-icon-button>

See [`iron-iconset`](iron-iconset) for more information about
how to use a custom icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button src="star.png"></paper-icon-button>

To use `paper-icon-button` as a link, wrap it in an anchor tag. Since
`paper-icon-button` will already receive focus, you may want to prevent the
anchor tag from receiving focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org" tabindex="-1">
      <paper-icon-button icon="polymer"></paper-icon-button>
    </a>

### Styling

Style the button with CSS as you would a normal DOM element. If you are using
the icons provided by `iron-icons`, they will inherit the foreground color of
the button.

    /* make a red "favorite" button *\/
    <paper-icon-button icon="favorite" style="color: red;"></paper-icon-button>

By default, the ripple is the same color as the foreground at 25% opacity. You
may customize the color using the `--paper-icon-button-ink-color` custom
property.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-icon-button-disabled-text` | The color of the disabled button | `--disabled-text-color`
`--paper-icon-button-ink-color` | Selected/focus ripple color | `--primary-text-color`
`--paper-icon-button` | Mixin for a button | `{}`
`--paper-icon-button-disabled` | Mixin for a disabled button | `{}`
`--paper-icon-button-hover` | Mixin for button on hover | `{}`

@group Paper Elements
@element paper-icon-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  is: 'paper-icon-button',
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,
  hostAttributes: {
    role: 'button',
    tabindex: '0'
  },
  behaviors: [_polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehavior"]],
  registered: function () {
    this._template.setAttribute('strip-whitespace', '');
  },
  properties: {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: {
      type: String
    },

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: {
      type: String
    },

    /**
     * Specifies the alternate text for the button, for accessibility.
     */
    alt: {
      type: String,
      observer: '_altChanged'
    }
  },
  _altChanged: function (newValue, oldValue) {
    var label = this.getAttribute('aria-label'); // Don't stomp over a user-set aria-label.

    if (!label || oldValue == label) {
      this.setAttribute('aria-label', newValue);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+aHVpLWRpYWxvZy1zdWdnZXN0LWNhcmR+bW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcmAgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhcyBrZXlib2FyZFxuICogZm9jdXMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlcklua3lGb2N1c0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbCA9IHtcbiAgb2JzZXJ2ZXJzOiBbJ19mb2N1c2VkQ2hhbmdlZChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSddLFxuXG4gIF9mb2N1c2VkQ2hhbmdlZDogZnVuY3Rpb24ocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgIGlmIChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLmhvbGREb3duID0gcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZDtcbiAgICB9XG4gIH0sXG5cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJpcHBsZSA9IFBhcGVyUmlwcGxlQmVoYXZpb3IuX2NyZWF0ZVJpcHBsZSgpO1xuICAgIHJpcHBsZS5pZCA9ICdpbmsnO1xuICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NlbnRlcicsICcnKTtcbiAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9yID0gW1xuICBJcm9uQnV0dG9uU3RhdGUsXG4gIElyb25Db250cm9sU3RhdGUsXG4gIFBhcGVyUmlwcGxlQmVoYXZpb3IsXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGVJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgUGFwZXJSaXBwbGVCZWhhdmlvcmAgZHluYW1pY2FsbHkgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhc1xuICogZm9jdXMgdmlhIHBvaW50ZXIgb3Iga2V5Ym9hcmQuXG4gKlxuICogTk9URTogVGhpcyBiZWhhdmlvciBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYW5kIGFmdGVyXG4gKiBgSXJvbkJ1dHRvblN0YXRlYCBhbmQgYElyb25Db250cm9sU3RhdGVgLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJSaXBwbGVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJSaXBwbGVCZWhhdmlvciA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IHByb2R1Y2UgYSByaXBwbGUgZWZmZWN0IHdoZW4gaW50ZXJhY3RlZFxuICAgICAqIHdpdGggdmlhIHRoZSBwb2ludGVyLlxuICAgICAqL1xuICAgIG5vaW5rOiB7dHlwZTogQm9vbGVhbiwgb2JzZXJ2ZXI6ICdfbm9pbmtDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgX3JpcHBsZUNvbnRhaW5lcjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyBhIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudCBpcyBhdmFpbGFibGUgd2hlbiB0aGUgZWxlbWVudCBpc1xuICAgKiBmb2N1c2VkLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluIGFkZGl0aW9uIHRvIHRoZSBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGluIGBJcm9uQnV0dG9uU3RhdGVgLCBlbnN1cmVzXG4gICAqIGEgcmlwcGxlIGVmZmVjdCBpcyBjcmVhdGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgaW4gYSBgcHJlc3NlZGAgc3RhdGUuXG4gICAqL1xuICBfZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbkJ1dHRvblN0YXRlSW1wbC5fZG93bkhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgaWYgKHRoaXMucHJlc3NlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGlzIGVsZW1lbnQgY29udGFpbnMgYSByaXBwbGUgZWZmZWN0LiBGb3Igc3RhcnR1cCBlZmZpY2llbmN5XG4gICAqIHRoZSByaXBwbGUgZWZmZWN0IGlzIGR5bmFtaWNhbGx5IG9uIGRlbWFuZCB3aGVuIG5lZWRlZC5cbiAgICogQHBhcmFtIHshRXZlbnQ9fSBvcHRUcmlnZ2VyaW5nRXZlbnQgKG9wdGlvbmFsKSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICogcmlwcGxlLlxuICAgKi9cbiAgZW5zdXJlUmlwcGxlOiBmdW5jdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZSA9IHRoaXMuX2NyZWF0ZVJpcHBsZSgpO1xuICAgICAgdGhpcy5fcmlwcGxlLm5vaW5rID0gdGhpcy5ub2luaztcbiAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIgfHwgdGhpcy5yb290O1xuICAgICAgaWYgKHJpcHBsZUNvbnRhaW5lcikge1xuICAgICAgICBkb20ocmlwcGxlQ29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl9yaXBwbGUpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdFRyaWdnZXJpbmdFdmVudCkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZXZlbnQgaGFwcGVuZWQgaW5zaWRlIG9mIHRoZSByaXBwbGUgY29udGFpbmVyXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBob3N0IGluc3RlYWQgb2YgdGhlIHJvb3QgYmVjYXVzZSBkaXN0cmlidXRlZCB0ZXh0XG4gICAgICAgIC8vIG5vZGVzIGFyZSBub3QgdmFsaWQgZXZlbnQgdGFyZ2V0c1xuICAgICAgICB2YXIgZG9tQ29udGFpbmVyID0gZG9tKHRoaXMuX3JpcHBsZUNvbnRhaW5lciB8fCB0aGlzKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvbShvcHRUcmlnZ2VyaW5nRXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgICAgIGlmIChkb21Db250YWluZXIuZGVlcENvbnRhaW5zKC8qKiBAdHlwZSB7Tm9kZX0gKi8gKHRhcmdldCkpKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnVpRG93bkFjdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQgdXNlZCBieSB0aGlzIGVsZW1lbnQgdG8gY3JlYXRlXG4gICAqIHJpcHBsZSBlZmZlY3RzLiBUaGUgZWxlbWVudCdzIHJpcHBsZSBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlblxuICAgKiBuZWNlc3NhcnksIGFuZCBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpbGwgZm9yY2UgdGhlXG4gICAqIHJpcHBsZSB0byBiZSBjcmVhdGVkLlxuICAgKi9cbiAgZ2V0UmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGVsZW1lbnQgY3VycmVudGx5IGNvbnRhaW5zIGEgcmlwcGxlIGVmZmVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1JpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fcmlwcGxlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB2aWEgY3JlYXRpbmcgYSBgPHBhcGVyLXJpcHBsZT5gLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjdXN0b21pemUgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshUGFwZXJSaXBwbGVFbGVtZW50fSBSZXR1cm5zIGEgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50LlxuICAgKi9cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFQYXBlclJpcHBsZUVsZW1lbnR9ICovIChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFwZXItcmlwcGxlJykpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuXG4gIF9ub2lua0NoYW5nZWQ6IGZ1bmN0aW9uKG5vaW5rKSB7XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5ub2luayA9IG5vaW5rO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlcklua3lGb2N1c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW0ljb25cbnRvZ2dsZXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLmh0bWwjYnV0dG9ucy10b2dnbGUtYnV0dG9ucylcblxuYHBhcGVyLWljb24tYnV0dG9uYCBpcyBhIGJ1dHRvbiB3aXRoIGFuIGltYWdlIHBsYWNlZCBhdCB0aGUgY2VudGVyLiBXaGVuIHRoZVxudXNlciB0b3VjaGVzIHRoZSBidXR0b24sIGEgcmlwcGxlIGVmZmVjdCBlbWFuYXRlcyBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGJ1dHRvbi5cblxuYHBhcGVyLWljb24tYnV0dG9uYCBkb2VzIG5vdCBpbmNsdWRlIGEgZGVmYXVsdCBpY29uIHNldC4gVG8gdXNlIGljb25zIGZyb20gdGhlXG5kZWZhdWx0IHNldCwgaW5jbHVkZSBgUG9seW1lckVsZW1lbnRzL2lyb24taWNvbnMvaXJvbi1pY29ucy5odG1sYCwgYW5kIHVzZSB0aGVcbmBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB3aGljaCBpY29uIGZyb20gdGhlIGljb24gc2V0IHRvIHVzZS5cblxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwibWVudVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG5cblNlZSBbYGlyb24taWNvbnNldGBdKGlyb24taWNvbnNldCkgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXRcbmhvdyB0byB1c2UgYSBjdXN0b20gaWNvbiBzZXQuXG5cbkV4YW1wbGU6XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29ucy9pcm9uLWljb25zLmpzJztcbiAgICA8L3NjcmlwdD5cblxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwiZmF2b3JpdGVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvcGFwZXItaWNvbi1idXR0b24+XG5cblRvIHVzZSBgcGFwZXItaWNvbi1idXR0b25gIGFzIGEgbGluaywgd3JhcCBpdCBpbiBhbiBhbmNob3IgdGFnLiBTaW5jZVxuYHBhcGVyLWljb24tYnV0dG9uYCB3aWxsIGFscmVhZHkgcmVjZWl2ZSBmb2N1cywgeW91IG1heSB3YW50IHRvIHByZXZlbnQgdGhlXG5hbmNob3IgdGFnIGZyb20gcmVjZWl2aW5nIGZvY3VzIGFzIHdlbGwgYnkgc2V0dGluZyBpdHMgdGFiaW5kZXggdG8gLTEuXG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZ1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwicG9seW1lclwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPC9hPlxuXG4jIyMgU3R5bGluZ1xuXG5TdHlsZSB0aGUgYnV0dG9uIHdpdGggQ1NTIGFzIHlvdSB3b3VsZCBhIG5vcm1hbCBET00gZWxlbWVudC4gSWYgeW91IGFyZSB1c2luZ1xudGhlIGljb25zIHByb3ZpZGVkIGJ5IGBpcm9uLWljb25zYCwgdGhleSB3aWxsIGluaGVyaXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2ZcbnRoZSBidXR0b24uXG5cbiAgICAvKiBtYWtlIGEgcmVkIFwiZmF2b3JpdGVcIiBidXR0b24gKlxcL1xuICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwiZmF2b3JpdGVcIiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuQnkgZGVmYXVsdCwgdGhlIHJpcHBsZSBpcyB0aGUgc2FtZSBjb2xvciBhcyB0aGUgZm9yZWdyb3VuZCBhdCAyNSUgb3BhY2l0eS4gWW91XG5tYXkgY3VzdG9taXplIHRoZSBjb2xvciB1c2luZyB0aGUgYC0tcGFwZXItaWNvbi1idXR0b24taW5rLWNvbG9yYCBjdXN0b21cbnByb3BlcnR5LlxuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaWNvbi1idXR0b24tZGlzYWJsZWQtdGV4dGAgfCBUaGUgY29sb3Igb2YgdGhlIGRpc2FibGVkIGJ1dHRvbiB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pY29uLWJ1dHRvbi1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaWNvbi1idXR0b25gIHwgTWl4aW4gZm9yIGEgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1idXR0b24tZGlzYWJsZWRgIHwgTWl4aW4gZm9yIGEgZGlzYWJsZWQgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1idXR0b24taG92ZXJgIHwgTWl4aW4gZm9yIGJ1dHRvbiBvbiBob3ZlciB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1pY29uLWJ1dHRvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIGlzOiAncGFwZXItaWNvbi1idXR0b24nLFxuXG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAvKlxuICAgICAgICAgIE5PVEU6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlIHZhbHVlIHRvXG4gICAgICAgICAgYmUgXFxgdHJhbnNwYXJlbnRcXGAuXG4gICAgICAgICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAvKiBCZWNhdXNlIG9mIHBvbHltZXIvMjU1OCwgdGhpcyBzdHlsZSBoYXMgbG93ZXIgc3BlY2lmaWNpdHkgdGhhbiAqICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWJ1dHRvbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgI2luayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pY29uLWJ1dHRvbi1pbmstY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWljb24tYnV0dG9uLWRpc2FibGVkLXRleHQsIHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogYXV0bztcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWJ1dHRvbi1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1idXR0b24taG92ZXI7XG4gICAgICB9XG5cbiAgICAgIGlyb24taWNvbiB7XG4gICAgICAgIC0taXJvbi1pY29uLXdpZHRoOiAxMDAlO1xuICAgICAgICAtLWlyb24taWNvbi1oZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxpcm9uLWljb24gaWQ9XCJpY29uXCIgc3JjPVwiW1tzcmNdXVwiIGljb249XCJbW2ljb25dXVwiXG4gICAgICAgICAgICAgICBhbHQkPVwiW1thbHRdXVwiPjwvaXJvbi1pY29uPlxuICBgLFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2J1dHRvbicsIHRhYmluZGV4OiAnMCd9LFxuXG4gIGJlaGF2aW9yczogW1BhcGVySW5reUZvY3VzQmVoYXZpb3JdLFxuXG4gIHJlZ2lzdGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3RlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBvZiBhbiBpbWFnZSBmb3IgdGhlIGljb24uIElmIHRoZSBzcmMgcHJvcGVydHkgaXMgc3BlY2lmaWVkLFxuICAgICAqIHRoZSBpY29uIHByb3BlcnR5IHNob3VsZCBub3QgYmUuXG4gICAgICovXG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgaWNvbiBuYW1lIG9yIGluZGV4IGluIHRoZSBzZXQgb2YgaWNvbnMgYXZhaWxhYmxlIGluXG4gICAgICogdGhlIGljb24ncyBpY29uIHNldC4gSWYgdGhlIGljb24gcHJvcGVydHkgaXMgc3BlY2lmaWVkLFxuICAgICAqIHRoZSBzcmMgcHJvcGVydHkgc2hvdWxkIG5vdCBiZS5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgYWx0ZXJuYXRlIHRleHQgZm9yIHRoZSBidXR0b24sIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqL1xuICAgIGFsdDoge3R5cGU6IFN0cmluZywgb2JzZXJ2ZXI6ICdfYWx0Q2hhbmdlZCd9XG4gIH0sXG5cbiAgX2FsdENoYW5nZWQ6IGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAvLyBEb24ndCBzdG9tcCBvdmVyIGEgdXNlci1zZXQgYXJpYS1sYWJlbC5cbiAgICBpZiAoIWxhYmVsIHx8IG9sZFZhbHVlID09IGxhYmVsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQXFCQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQVZBO0FBQ0E7QUFjQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxHQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhBO0FBaUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQW9CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXBHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9