(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"],{

/***/ "./node_modules/@polymer/iron-dropdown/iron-dropdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/iron-dropdown/iron-dropdown.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-runner-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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








/**
`<iron-dropdown>` is a generalized element that is useful when you have
hidden content (`dropdown-content`) that is revealed due to some change in
state that should cause it to do so.

Note that this is a low-level element intended to be used as part of other
composite elements that cause dropdowns to be revealed.

Examples of elements that might be implemented using an `iron-dropdown`
include comboboxes, menubuttons, selects. The list goes on.

The `<iron-dropdown>` element exposes attributes that allow the position
of the `dropdown-content` relative to the `dropdown-trigger` to be
configured.

    <iron-dropdown horizontal-align="right" vertical-align="top">
      <div slot="dropdown-content">Hello!</div>
    </iron-dropdown>

In the above example, the `<div>` assigned to the `dropdown-content` slot will
be hidden until the dropdown element has `opened` set to true, or when the
`open` method is called on the element.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,
  is: 'iron-dropdown',
  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehavior"], _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__["NeonAnimationRunnerBehavior"]],
  properties: {
    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {
      type: String,
      value: 'left',
      reflectToAttribute: true
    },

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {
      type: String,
      value: 'top',
      reflectToAttribute: true
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    openAnimationConfig: {
      type: Object
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    closeAnimationConfig: {
      type: Object
    },

    /**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */
    focusTarget: {
      type: Object
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
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     * This property is a shortcut to set `scrollAction` to lock or refit.
     * Prefer directly setting the `scrollAction` property.
     */
    allowOutsideScroll: {
      type: Boolean,
      value: false,
      observer: '_allowOutsideScrollChanged'
    }
  },
  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },
  observers: ['_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)'],

  /**
   * The element that is contained by the dropdown, if any.
   */
  get containedElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  ready: function () {
    // Ensure scrollAction is set.
    if (!this.scrollAction) {
      this.scrollAction = this.allowOutsideScroll ? 'refit' : 'lock';
    }

    this._readied = true;
  },
  attached: function () {
    if (!this.sizingTarget || this.sizingTarget === this) {
      this.sizingTarget = this.containedElement || this;
    }
  },
  detached: function () {
    this.cancelAnimation();
  },

  /**
   * Called when the value of `opened` changes.
   * Overridden from `IronOverlayBehavior`
   */
  _openedChanged: function () {
    if (this.opened && this.disabled) {
      this.cancel();
    } else {
      this.cancelAnimation();

      this._updateAnimationConfig();

      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._openedChanged.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function () {
    if (!this.noAnimations && this.animationConfig.open) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('open');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderOpened.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function () {
    if (!this.noAnimations && this.animationConfig.close) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('close');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderClosed.apply(this, arguments);
    }
  },

  /**
   * Called when animation finishes on the dropdown (when opening or
   * closing). Responsible for "completing" the process of opening or
   * closing the dropdown by positioning it or setting its display to
   * none.
   */
  _onNeonAnimationFinish: function () {
    this.$.contentWrapper.classList.remove('animating');

    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  },

  /**
   * Constructs the final animation config from different properties used
   * to configure specific parts of the opening and closing animations.
   */
  _updateAnimationConfig: function () {
    // Update the animation node to be the containedElement.
    var animationNode = this.containedElement;
    var animations = [].concat(this.openAnimationConfig || []).concat(this.closeAnimationConfig || []);

    for (var i = 0; i < animations.length; i++) {
      animations[i].node = animationNode;
    }

    this.animationConfig = {
      open: this.openAnimationConfig,
      close: this.closeAnimationConfig
    };
  },

  /**
   * Updates the overlay position based on configured horizontal
   * and vertical alignment.
   */
  _updateOverlayPosition: function () {
    if (this.isAttached) {
      // This triggers iron-resize, and iron-overlay-behavior will call refit if
      // needed.
      this.notifyResize();
    }
  },

  /**
   * Sets scrollAction according to the value of allowOutsideScroll.
   * Prefer setting directly scrollAction.
   */
  _allowOutsideScrollChanged: function (allowOutsideScroll) {
    // Wait until initial values are all set.
    if (!this._readied) {
      return;
    }

    if (!allowOutsideScroll) {
      this.scrollAction = 'lock';
    } else if (!this.scrollAction || this.scrollAction === 'lock') {
      this.scrollAction = 'refit';
    }
  },

  /**
   * Apply focus to focusTarget or containedElement
   */
  _applyFocus: function () {
    var focusTarget = this.focusTarget || this.containedElement;

    if (focusTarget && this.opened && !this.noAutoFocus) {
      focusTarget.focus();
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._applyFocus.apply(this, arguments);
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/animations/fade-in-animation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/animations/fade-in-animation.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
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
`<fade-in-animation>` animates the opacity of an element from 0 to 1.

Configuration:
```
{
  name: 'fade-in-animation',
  node: <node>
  timing: <animation-timing>
}
```
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'fade-in-animation',
  behaviors: [_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [{
      'opacity': '0'
    }, {
      'opacity': '1'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/animations/fade-out-animation.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
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
`<fade-out-animation>` animates the opacity of an element from 1 to 0.

Configuration:
```
{
  name: 'fade-out-animation',
  node: <node>
  timing: <animation-timing>
}
```
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'fade-out-animation',
  behaviors: [_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [{
      'opacity': '1'
    }, {
      'opacity': '0'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \**************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimatableBehavior", function() { return NeonAnimatableBehavior; });
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
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */

const NeonAnimatableBehavior = {
  properties: {
    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {
      type: Object
    },

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String
    }
  },
  _entryAnimationChanged: function () {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{
      name: this.entryAnimation,
      node: this
    }];
  },
  _exitAnimationChanged: function () {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{
      name: this.exitAnimation,
      node: this
    }];
  },
  _copyProperties: function (config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },
  _cloneConfig: function (config) {
    var clone = {
      isClone: true
    };

    this._copyProperties(clone, config);

    return clone;
  },
  _getAnimationConfigRecursive: function (type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value && typeof this.animationConfig.value === 'function') {
      this._warn(this._logf('playAnimation', 'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));

      return;
    } // type is optional


    var thisConfig;

    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    } // iterate animations and recurse to process configurations from child nodes


    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];

            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }

              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function (type) {
    var map = {};
    var allConfigs = [];

    this._getAnimationConfigRecursive(type, map, allConfigs); // append the configurations saved in the map to the array


    for (var key in map) {
      allConfigs.push(map[key]);
    }

    return allConfigs;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-behavior.js ***!
  \*************************************************************************/
/*! exports provided: NeonAnimationBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationBehavior", function() { return NeonAnimationBehavior; });
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
 * Use `NeonAnimationBehavior` to implement an animation.
 * @polymerBehavior
 */

const NeonAnimationBehavior = {
  properties: {
    /**
     * Defines the animation timing.
     */
    animationTiming: {
      type: Object,
      value: function () {
        return {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          fill: 'both'
        };
      }
    }
  },

  /**
   * Can be used to determine that elements implement this behavior.
   */
  isNeonAnimation: true,

  /**
   * Do any animation configuration here.
   */
  // configure: function(config) {
  // },
  created: function () {
    if (!document.body.animate) {
      console.warn('No web animations detected. This element will not' + ' function without a web animations polyfill.');
    }
  },

  /**
   * Returns the animation timing by mixing in properties from `config` to the
   * defaults defined by the animation.
   */
  timingFromConfig: function (config) {
    if (config.timing) {
      for (var property in config.timing) {
        this.animationTiming[property] = config.timing[property];
      }
    }

    return this.animationTiming;
  },

  /**
   * Sets `transform` and `transformOrigin` properties along with the prefixed
   * versions.
   */
  setPrefixedProperty: function (node, property, value) {
    var map = {
      'transform': ['webkitTransform'],
      'transformOrigin': ['mozTransformOrigin', 'webkitTransformOrigin']
    };
    var prefixes = map[property];

    for (var prefix, index = 0; prefix = prefixes[index]; index++) {
      node.style[prefix] = value;
    }

    node.style[property] = value;
  },

  /**
   * Called when the animation finishes.
   */
  complete: function (config) {}
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \********************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehaviorImpl", function() { return NeonAnimationRunnerBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehavior", function() { return NeonAnimationRunnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js");
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
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */

const NeonAnimationRunnerBehaviorImpl = {
  _configureAnimations: function (configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (let config, index = 0; config = configs[index]; index++) {
        let neonAnimation = document.createElement(config.name); // is this element actually a neon animation?

        if (neonAnimation.isNeonAnimation) {
          let result = null; // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined

          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function (config) {
              return null;
            };
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      let result = resultsToPlay[i].result;
      let config = resultsToPlay[i].config;
      let neonAnimation = resultsToPlay[i].neonAnimation; // configuration or play could fail if polyfills aren't loaded

      try {
        // Check if we have an Effect rather than an Animation
        if (typeof result.cancel != 'function') {
          result = document.timeline.play(result);
        }
      } catch (e) {
        result = null;
        console.warn('Couldnt play', '(', config.name, ').', e);
      }

      if (result) {
        results.push({
          neonAnimation: neonAnimation,
          config: config,
          animation: result
        });
      }
    }

    return results;
  },
  _shouldComplete: function (activeEntries) {
    var finished = true;

    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }

    return finished;
  },
  _complete: function (activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function (type, cookie) {
    var configs = this.getAnimationConfig(type);

    if (!configs) {
      return;
    }

    this._active = this._active || {};

    if (this._active[type]) {
      this._complete(this._active[type]);

      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {
        bubbles: false
      });
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function () {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);

          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {
            bubbles: false
          });
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function () {
    for (var k in this._active) {
      var entries = this._active[k];

      for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};
/** @polymerBehavior */

const NeonAnimationRunnerBehavior = [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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



Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-grow-height-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var height = rect.height;
    this._effect = new KeyframeEffect(node, [{
      height: height / 2 + 'px'
    }, {
      height: height + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-grow-width-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var width = rect.width;
    this._effect = new KeyframeEffect(node, [{
      width: width / 2 + 'px'
    }, {
      width: width + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-shrink-width-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var width = rect.width;
    this._effect = new KeyframeEffect(node, [{
      width: width + 'px'
    }, {
      width: width - width / 20 + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-shrink-height-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function (config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var height = rect.height;
    this.setPrefixedProperty(node, 'transformOrigin', '0 0');
    this._effect = new KeyframeEffect(node, [{
      height: height + 'px',
      transform: 'translateY(0)'
    }, {
      height: height / 2 + 'px',
      transform: 'translateY(-20px)'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-menu-button/paper-menu-button.js ***!
  \**********************************************************************/
/*! exports provided: PaperMenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperMenuButton", function() { return PaperMenuButton; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_dropdown_iron_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-dropdown/iron-dropdown.js */ "./node_modules/@polymer/iron-dropdown/iron-dropdown.js");
/* harmony import */ var _polymer_neon_animation_animations_fade_in_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/neon-animation/animations/fade-in-animation.js */ "./node_modules/@polymer/neon-animation/animations/fade-in-animation.js");
/* harmony import */ var _polymer_neon_animation_animations_fade_out_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/neon-animation/animations/fade-out-animation.js */ "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _paper_menu_button_animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-menu-button-animations.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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












var config = {
  ANIMATION_CUBIC_BEZIER: 'cubic-bezier(.3,.95,.5,1)',
  MAX_ANIMATION_TIME_MS: 400
};
/**
Material design: [Dropdown
buttons](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-menu-button` allows one to compose a designated "trigger" element with
another element that represents "content", to create a dropdown menu that
displays the "content" when the "trigger" is clicked.

The child element assigned to the `dropdown-trigger` slot will be used as the
"trigger" element. The child element assigned to the `dropdown-content` slot
will be used as the "content" element.

The `paper-menu-button` is sensitive to its content's `iron-select` events. If
the "content" element triggers an `iron-select` event, the `paper-menu-button`
will close automatically.

Example:

    <paper-menu-button>
      <paper-icon-button icon="menu"
slot="dropdown-trigger"></paper-icon-button> <paper-listbox
slot="dropdown-content"> <paper-item>Share</paper-item>
        <paper-item>Settings</paper-item>
        <paper-item>Help</paper-item>
      </paper-listbox>
    </paper-menu-button>

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-menu-button-dropdown-background` | Background color of the paper-menu-button dropdown | `--primary-background-color`
`--paper-menu-button` | Mixin applied to the paper-menu-button | `{}`
`--paper-menu-button-disabled` | Mixin applied to the paper-menu-button when disabled | `{}`
`--paper-menu-button-dropdown` | Mixin applied to the paper-menu-button dropdown | `{}`
`--paper-menu-button-content` | Mixin applied to the paper-menu-button content | `{}`

@hero hero.svg
@demo demo/index.html
*/

const PaperMenuButton = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_9__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;

        @apply --paper-menu-button;
      }

      :host([disabled]) {
        cursor: auto;
        color: var(--disabled-text-color);

        @apply --paper-menu-button-disabled;
      }

      iron-dropdown {
        @apply --paper-menu-button-dropdown;
      }

      .dropdown-content {
        @apply --shadow-elevation-2dp;

        position: relative;
        border-radius: 2px;
        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));

        @apply --paper-menu-button-content;
      }

      :host([vertical-align="top"]) .dropdown-content {
        margin-bottom: 20px;
        margin-top: -10px;
        top: 10px;
      }

      :host([vertical-align="bottom"]) .dropdown-content {
        bottom: 10px;
        margin-bottom: -10px;
        margin-top: 20px;
      }

      #trigger {
        cursor: pointer;
      }
    </style>

    <div id="trigger" on-tap="toggle">
      <slot name="dropdown-trigger"></slot>
    </div>

    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">
      <div slot="dropdown-content" class="dropdown-content">
        <slot id="content" name="dropdown-content"></slot>
      </div>
    </iron-dropdown>
`,
  is: 'paper-menu-button',

  /**
   * Fired when the dropdown opens.
   *
   * @event paper-dropdown-open
   */

  /**
   * Fired when the dropdown closes.
   *
   * @event paper-dropdown-close
   */
  behaviors: [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronA11yKeysBehavior"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"]],
  properties: {
    /**
     * True if the content is currently displayed.
     */
    opened: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_openedChanged'
    },

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: {
      type: String,
      value: 'left',
      reflectToAttribute: true
    },

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: {
      type: String,
      value: 'top',
      reflectToAttribute: true
    },

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
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`. Use a negative value to offset to the
     * left, or a positive value to offset to the right.
     */
    horizontalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`. Use a negative value to offset towards the
     * top, or a positive value to offset towards the bottom.
     */
    verticalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * If true, the dropdown will be positioned so that it doesn't overlap
     * the button.
     */
    noOverlap: {
      type: Boolean
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
     * Set to true to disable automatically closing the dropdown after
     * a selection has been made.
     */
    ignoreSelect: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to enable automatically closing the dropdown after an
     * item has been activated, even if the selection did not change.
     */
    closeOnActivate: {
      type: Boolean,
      value: false
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown.
     */
    openAnimationConfig: {
      type: Object,
      value: function () {
        return [{
          name: 'fade-in-animation',
          timing: {
            delay: 100,
            duration: 200
          }
        }, {
          name: 'paper-menu-grow-width-animation',
          timing: {
            delay: 100,
            duration: 150,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }, {
          name: 'paper-menu-grow-height-animation',
          timing: {
            delay: 100,
            duration: 275,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }];
      }
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown.
     */
    closeAnimationConfig: {
      type: Object,
      value: function () {
        return [{
          name: 'fade-out-animation',
          timing: {
            duration: 150
          }
        }, {
          name: 'paper-menu-shrink-width-animation',
          timing: {
            delay: 100,
            duration: 50,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }, {
          name: 'paper-menu-shrink-height-animation',
          timing: {
            duration: 200,
            easing: 'ease-in'
          }
        }];
      }
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
     * Whether focus should be restored to the button when the menu closes.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: true
    },

    /**
     * This is the element intended to be bound as the focus target
     * for the `iron-dropdown` contained by `paper-menu-button`.
     */
    _dropdownContent: {
      type: Object
    }
  },
  hostAttributes: {
    role: 'group',
    'aria-haspopup': 'true'
  },
  listeners: {
    'iron-activate': '_onIronActivate',
    'iron-select': '_onIronSelect'
  },

  /**
   * The content element that is contained by the menu button, if any.
   */
  get contentElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Toggles the dropdown content between opened and closed.
   */
  toggle: function () {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  },

  /**
   * Make the dropdown content appear as an overlay positioned relative
   * to the dropdown trigger.
   */
  open: function () {
    if (this.disabled) {
      return;
    }

    this.$.dropdown.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function () {
    this.$.dropdown.close();
  },

  /**
   * When an `iron-select` event is received, the dropdown should
   * automatically close on the assumption that a value has been chosen.
   *
   * @param {CustomEvent} event A CustomEvent instance with type
   * set to `"iron-select"`.
   */
  _onIronSelect: function (event) {
    if (!this.ignoreSelect) {
      this.close();
    }
  },

  /**
   * Closes the dropdown when an `iron-activate` event is received if
   * `closeOnActivate` is true.
   *
   * @param {CustomEvent} event A CustomEvent of type 'iron-activate'.
   */
  _onIronActivate: function (event) {
    if (this.closeOnActivate) {
      this.close();
    }
  },

  /**
   * When the dropdown opens, the `paper-menu-button` fires `paper-open`.
   * When the dropdown closes, the `paper-menu-button` fires `paper-close`.
   *
   * @param {boolean} opened True if the dropdown is opened, otherwise false.
   * @param {boolean} oldOpened The previous value of `opened`.
   */
  _openedChanged: function (opened, oldOpened) {
    if (opened) {
      // TODO(cdata): Update this when we can measure changes in distributed
      // children in an idiomatic way.
      // We poke this property in case the element has changed. This will
      // cause the focus target for the `iron-dropdown` to be updated as
      // necessary:
      this._dropdownContent = this.contentElement;
      this.fire('paper-dropdown-open');
    } else if (oldOpened != null) {
      this.fire('paper-dropdown-close');
    }
  },

  /**
   * If the dropdown is open when disabled becomes true, close the
   * dropdown.
   *
   * @param {boolean} disabled True if disabled, otherwise false.
   */
  _disabledChanged: function (disabled) {
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"]._disabledChanged.apply(this, arguments);

    if (disabled && this.opened) {
      this.close();
    }
  },
  __onIronOverlayCanceled: function (event) {
    var uiEvent = event.detail;
    var trigger = this.$.trigger;
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__["dom"])(uiEvent).path;

    if (path.indexOf(trigger) > -1) {
      event.preventDefault();
    }
  }
});
Object.keys(config).forEach(function (key) {
  PaperMenuButton[key] = config[key];
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbn44ODVlYjlhNy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWRyb3Bkb3duL2lyb24tZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL2FuaW1hdGlvbnMvZmFkZS1pbi1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL2FuaW1hdGlvbnMvZmFkZS1vdXQtYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b24tYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25PdmVybGF5QmVoYXZpb3IsIElyb25PdmVybGF5QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7TmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbmA8aXJvbi1kcm9wZG93bj5gIGlzIGEgZ2VuZXJhbGl6ZWQgZWxlbWVudCB0aGF0IGlzIHVzZWZ1bCB3aGVuIHlvdSBoYXZlXG5oaWRkZW4gY29udGVudCAoYGRyb3Bkb3duLWNvbnRlbnRgKSB0aGF0IGlzIHJldmVhbGVkIGR1ZSB0byBzb21lIGNoYW5nZSBpblxuc3RhdGUgdGhhdCBzaG91bGQgY2F1c2UgaXQgdG8gZG8gc28uXG5cbk5vdGUgdGhhdCB0aGlzIGlzIGEgbG93LWxldmVsIGVsZW1lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBwYXJ0IG9mIG90aGVyXG5jb21wb3NpdGUgZWxlbWVudHMgdGhhdCBjYXVzZSBkcm9wZG93bnMgdG8gYmUgcmV2ZWFsZWQuXG5cbkV4YW1wbGVzIG9mIGVsZW1lbnRzIHRoYXQgbWlnaHQgYmUgaW1wbGVtZW50ZWQgdXNpbmcgYW4gYGlyb24tZHJvcGRvd25gXG5pbmNsdWRlIGNvbWJvYm94ZXMsIG1lbnVidXR0b25zLCBzZWxlY3RzLiBUaGUgbGlzdCBnb2VzIG9uLlxuXG5UaGUgYDxpcm9uLWRyb3Bkb3duPmAgZWxlbWVudCBleHBvc2VzIGF0dHJpYnV0ZXMgdGhhdCBhbGxvdyB0aGUgcG9zaXRpb25cbm9mIHRoZSBgZHJvcGRvd24tY29udGVudGAgcmVsYXRpdmUgdG8gdGhlIGBkcm9wZG93bi10cmlnZ2VyYCB0byBiZVxuY29uZmlndXJlZC5cblxuICAgIDxpcm9uLWRyb3Bkb3duIGhvcml6b250YWwtYWxpZ249XCJyaWdodFwiIHZlcnRpY2FsLWFsaWduPVwidG9wXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+SGVsbG8hPC9kaXY+XG4gICAgPC9pcm9uLWRyb3Bkb3duPlxuXG5JbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIGA8ZGl2PmAgYXNzaWduZWQgdG8gdGhlIGBkcm9wZG93bi1jb250ZW50YCBzbG90IHdpbGxcbmJlIGhpZGRlbiB1bnRpbCB0aGUgZHJvcGRvd24gZWxlbWVudCBoYXMgYG9wZW5lZGAgc2V0IHRvIHRydWUsIG9yIHdoZW4gdGhlXG5gb3BlbmAgbWV0aG9kIGlzIGNhbGxlZCBvbiB0aGUgZWxlbWVudC5cblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRXcmFwcGVyIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAjY29udGVudFdyYXBwZXIuYW5pbWF0aW5nIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudFdyYXBwZXJcIj5cbiAgICAgIDxzbG90IGlkPVwiY29udGVudFwiIG5hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2lyb24tZHJvcGRvd24nLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIElyb25Db250cm9sU3RhdGUsXG4gICAgSXJvbkExMXlLZXlzQmVoYXZpb3IsXG4gICAgSXJvbk92ZXJsYXlCZWhhdmlvcixcbiAgICBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgKiBob3Jpem9udGFsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2xlZnQnLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgKiB2ZXJ0aWNhbGx5IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB0cmlnZ2VyLlxuICAgICAqIE92ZXJyaWRkZW4gZnJvbSBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgLlxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAndG9wJywgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFuaW1hdGlvbiBjb25maWcuIElmIHByb3ZpZGVkLCB0aGlzIHdpbGwgYmUgdXNlZCB0byBhbmltYXRlIHRoZVxuICAgICAqIG9wZW5pbmcgb2YgdGhlIGRyb3Bkb3duLiBQYXNzIGFuIEFycmF5IGZvciBtdWx0aXBsZSBhbmltYXRpb25zLlxuICAgICAqIFNlZSBgbmVvbi1hbmltYXRpb25gIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgYW5pbWF0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBkZXRhaWxzLlxuICAgICAqL1xuICAgIG9wZW5BbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogQW4gYW5pbWF0aW9uIGNvbmZpZy4gSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB1c2VkIHRvIGFuaW1hdGUgdGhlXG4gICAgICogY2xvc2luZyBvZiB0aGUgZHJvcGRvd24uIFBhc3MgYW4gQXJyYXkgZm9yIG11bHRpcGxlIGFuaW1hdGlvbnMuXG4gICAgICogU2VlIGBuZW9uLWFuaW1hdGlvbmAgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBhbmltYXRpb24gY29uZmlndXJhdGlvblxuICAgICAqIGRldGFpbHMuXG4gICAgICovXG4gICAgY2xvc2VBbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgZm9jdXNlZCB3aGVuXG4gICAgICogdGhlIGRyb3Bkb3duIG9wZW5zLlxuICAgICAqL1xuICAgIGZvY3VzVGFyZ2V0OiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYW5pbWF0aW9ucyB3aGVuIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlXG4gICAgICogZHJvcGRvd24uXG4gICAgICovXG4gICAgbm9BbmltYXRpb25zOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBkcm9wZG93biB3aWxsIGNvbnN0cmFpbiBzY3JvbGxpbmcgb24gdGhlIHBhZ2VcbiAgICAgKiB0byBpdHNlbGYgd2hlbiBvcGVuZWQuXG4gICAgICogU2V0IHRvIHRydWUgaW4gb3JkZXIgdG8gcHJldmVudCBzY3JvbGwgZnJvbSBiZWluZyBjb25zdHJhaW5lZFxuICAgICAqIHRvIHRoZSBkcm9wZG93biB3aGVuIGl0IG9wZW5zLlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgYSBzaG9ydGN1dCB0byBzZXQgYHNjcm9sbEFjdGlvbmAgdG8gbG9jayBvciByZWZpdC5cbiAgICAgKiBQcmVmZXIgZGlyZWN0bHkgc2V0dGluZyB0aGUgYHNjcm9sbEFjdGlvbmAgcHJvcGVydHkuXG4gICAgICovXG4gICAgYWxsb3dPdXRzaWRlU2Nyb2xsOlxuICAgICAgICB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ19hbGxvd091dHNpZGVTY3JvbGxDaGFuZ2VkJ31cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHsnbmVvbi1hbmltYXRpb24tZmluaXNoJzogJ19vbk5lb25BbmltYXRpb25GaW5pc2gnfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3VwZGF0ZU92ZXJsYXlQb3NpdGlvbihwb3NpdGlvblRhcmdldCwgdmVydGljYWxBbGlnbiwgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbE9mZnNldCwgaG9yaXpvbnRhbE9mZnNldCknXG4gIF0sXG5cbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRoYXQgaXMgY29udGFpbmVkIGJ5IHRoZSBkcm9wZG93biwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGNvbnRhaW5lZEVsZW1lbnQoKSB7XG4gICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcy4kLmNvbnRlbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBFbnN1cmUgc2Nyb2xsQWN0aW9uIGlzIHNldC5cbiAgICBpZiAoIXRoaXMuc2Nyb2xsQWN0aW9uKSB7XG4gICAgICB0aGlzLnNjcm9sbEFjdGlvbiA9IHRoaXMuYWxsb3dPdXRzaWRlU2Nyb2xsID8gJ3JlZml0JyA6ICdsb2NrJztcbiAgICB9XG4gICAgdGhpcy5fcmVhZGllZCA9IHRydWU7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5zaXppbmdUYXJnZXQgfHwgdGhpcy5zaXppbmdUYXJnZXQgPT09IHRoaXMpIHtcbiAgICAgIHRoaXMuc2l6aW5nVGFyZ2V0ID0gdGhpcy5jb250YWluZWRFbGVtZW50IHx8IHRoaXM7XG4gICAgfVxuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgYG9wZW5lZGAgY2hhbmdlcy5cbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYFxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5fdXBkYXRlQW5pbWF0aW9uQ29uZmlnKCk7XG4gICAgICBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbC5fb3BlbmVkQ2hhbmdlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICovXG4gIF9yZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5ub0FuaW1hdGlvbnMgJiYgdGhpcy5hbmltYXRpb25Db25maWcub3Blbikge1xuICAgICAgdGhpcy4kLmNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGluZycpO1xuICAgICAgdGhpcy5wbGF5QW5pbWF0aW9uKCdvcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9yZW5kZXJPcGVuZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqL1xuICBfcmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMubm9BbmltYXRpb25zICYmIHRoaXMuYW5pbWF0aW9uQ29uZmlnLmNsb3NlKSB7XG4gICAgICB0aGlzLiQuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW5nJyk7XG4gICAgICB0aGlzLnBsYXlBbmltYXRpb24oJ2Nsb3NlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9yZW5kZXJDbG9zZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuaW1hdGlvbiBmaW5pc2hlcyBvbiB0aGUgZHJvcGRvd24gKHdoZW4gb3BlbmluZyBvclxuICAgKiBjbG9zaW5nKS4gUmVzcG9uc2libGUgZm9yIFwiY29tcGxldGluZ1wiIHRoZSBwcm9jZXNzIG9mIG9wZW5pbmcgb3JcbiAgICogY2xvc2luZyB0aGUgZHJvcGRvd24gYnkgcG9zaXRpb25pbmcgaXQgb3Igc2V0dGluZyBpdHMgZGlzcGxheSB0b1xuICAgKiBub25lLlxuICAgKi9cbiAgX29uTmVvbkFuaW1hdGlvbkZpbmlzaDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLmNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGluZycpO1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlckNsb3NlZCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29uc3RydWN0cyB0aGUgZmluYWwgYW5pbWF0aW9uIGNvbmZpZyBmcm9tIGRpZmZlcmVudCBwcm9wZXJ0aWVzIHVzZWRcbiAgICogdG8gY29uZmlndXJlIHNwZWNpZmljIHBhcnRzIG9mIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBfdXBkYXRlQW5pbWF0aW9uQ29uZmlnOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGFuaW1hdGlvbiBub2RlIHRvIGJlIHRoZSBjb250YWluZWRFbGVtZW50LlxuICAgIHZhciBhbmltYXRpb25Ob2RlID0gdGhpcy5jb250YWluZWRFbGVtZW50O1xuICAgIHZhciBhbmltYXRpb25zID0gW10uY29uY2F0KHRoaXMub3BlbkFuaW1hdGlvbkNvbmZpZyB8fCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHRoaXMuY2xvc2VBbmltYXRpb25Db25maWcgfHwgW10pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgYW5pbWF0aW9uc1tpXS5ub2RlID0gYW5pbWF0aW9uTm9kZTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB7XG4gICAgICBvcGVuOiB0aGlzLm9wZW5BbmltYXRpb25Db25maWcsXG4gICAgICBjbG9zZTogdGhpcy5jbG9zZUFuaW1hdGlvbkNvbmZpZ1xuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG92ZXJsYXkgcG9zaXRpb24gYmFzZWQgb24gY29uZmlndXJlZCBob3Jpem9udGFsXG4gICAqIGFuZCB2ZXJ0aWNhbCBhbGlnbm1lbnQuXG4gICAqL1xuICBfdXBkYXRlT3ZlcmxheVBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICAvLyBUaGlzIHRyaWdnZXJzIGlyb24tcmVzaXplLCBhbmQgaXJvbi1vdmVybGF5LWJlaGF2aW9yIHdpbGwgY2FsbCByZWZpdCBpZlxuICAgICAgLy8gbmVlZGVkLlxuICAgICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgc2Nyb2xsQWN0aW9uIGFjY29yZGluZyB0byB0aGUgdmFsdWUgb2YgYWxsb3dPdXRzaWRlU2Nyb2xsLlxuICAgKiBQcmVmZXIgc2V0dGluZyBkaXJlY3RseSBzY3JvbGxBY3Rpb24uXG4gICAqL1xuICBfYWxsb3dPdXRzaWRlU2Nyb2xsQ2hhbmdlZDogZnVuY3Rpb24oYWxsb3dPdXRzaWRlU2Nyb2xsKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBpbml0aWFsIHZhbHVlcyBhcmUgYWxsIHNldC5cbiAgICBpZiAoIXRoaXMuX3JlYWRpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFhbGxvd091dHNpZGVTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aW9uID0gJ2xvY2snO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc2Nyb2xsQWN0aW9uIHx8IHRoaXMuc2Nyb2xsQWN0aW9uID09PSAnbG9jaycpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aW9uID0gJ3JlZml0JztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGx5IGZvY3VzIHRvIGZvY3VzVGFyZ2V0IG9yIGNvbnRhaW5lZEVsZW1lbnRcbiAgICovXG4gIF9hcHBseUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9jdXNUYXJnZXQgPSB0aGlzLmZvY3VzVGFyZ2V0IHx8IHRoaXMuY29udGFpbmVkRWxlbWVudDtcbiAgICBpZiAoZm9jdXNUYXJnZXQgJiYgdGhpcy5vcGVuZWQgJiYgIXRoaXMubm9BdXRvRm9jdXMpIHtcbiAgICAgIGZvY3VzVGFyZ2V0LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9hcHBseUZvY3VzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge05lb25BbmltYXRpb25CZWhhdmlvcn0gZnJvbSAnLi4vbmVvbi1hbmltYXRpb24tYmVoYXZpb3IuanMnO1xuLypcbmA8ZmFkZS1pbi1hbmltYXRpb24+YCBhbmltYXRlcyB0aGUgb3BhY2l0eSBvZiBhbiBlbGVtZW50IGZyb20gMCB0byAxLlxuXG5Db25maWd1cmF0aW9uOlxuYGBgXG57XG4gIG5hbWU6ICdmYWRlLWluLWFuaW1hdGlvbicsXG4gIG5vZGU6IDxub2RlPlxuICB0aW1pbmc6IDxhbmltYXRpb24tdGltaW5nPlxufVxuYGBgXG4qL1xuUG9seW1lcih7XG5cbiAgaXM6ICdmYWRlLWluLWFuaW1hdGlvbicsXG5cbiAgYmVoYXZpb3JzOiBbTmVvbkFuaW1hdGlvbkJlaGF2aW9yXSxcblxuICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBub2RlID0gY29uZmlnLm5vZGU7XG4gICAgdGhpcy5fZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KFxuICAgICAgICBub2RlLFxuICAgICAgICBbeydvcGFjaXR5JzogJzAnfSwgeydvcGFjaXR5JzogJzEnfV0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7TmVvbkFuaW1hdGlvbkJlaGF2aW9yfSBmcm9tICcuLi9uZW9uLWFuaW1hdGlvbi1iZWhhdmlvci5qcyc7XG4vKlxuYDxmYWRlLW91dC1hbmltYXRpb24+YCBhbmltYXRlcyB0aGUgb3BhY2l0eSBvZiBhbiBlbGVtZW50IGZyb20gMSB0byAwLlxuXG5Db25maWd1cmF0aW9uOlxuYGBgXG57XG4gIG5hbWU6ICdmYWRlLW91dC1hbmltYXRpb24nLFxuICBub2RlOiA8bm9kZT5cbiAgdGltaW5nOiA8YW5pbWF0aW9uLXRpbWluZz5cbn1cbmBgYFxuKi9cblBvbHltZXIoe1xuXG4gIGlzOiAnZmFkZS1vdXQtYW5pbWF0aW9uJyxcblxuICBiZWhhdmlvcnM6IFtOZW9uQW5pbWF0aW9uQmVoYXZpb3JdLFxuXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIG5vZGUgPSBjb25maWcubm9kZTtcbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFtcbiAgICAgICAgICB7J29wYWNpdHknOiAnMSd9LFxuICAgICAgICAgIHsnb3BhY2l0eSc6ICcwJ30sXG4gICAgICAgIF0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBpcyBpbXBsZW1lbnRlZCBieSBlbGVtZW50cyBjb250YWluaW5nXG4gKiBhbmltYXRpb25zIGZvciB1c2Ugd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgLlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGFibGVCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gY29uZmlndXJhdGlvbi4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZW50cnknIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZW50cnlgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGVudHJ5QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19lbnRyeUFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZXhpdCcgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5leGl0YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBleGl0QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19leGl0QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICB9LFxuXG4gIF9lbnRyeUFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2VudHJ5J10gPSBbe25hbWU6IHRoaXMuZW50cnlBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfZXhpdEFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2V4aXQnXSA9IFt7bmFtZTogdGhpcy5leGl0QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2NvcHlQcm9wZXJ0aWVzOiBmdW5jdGlvbihjb25maWcxLCBjb25maWcyKSB7XG4gICAgLy8gc2hhbGxvd2x5IGNvcHkgcHJvcGVydGllcyBmcm9tIGNvbmZpZzIgdG8gY29uZmlnMVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZzFbcHJvcGVydHldID0gY29uZmlnMltwcm9wZXJ0eV07XG4gICAgfVxuICB9LFxuXG4gIF9jbG9uZUNvbmZpZzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIGNsb25lID0ge2lzQ2xvbmU6IHRydWV9O1xuICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNsb25lLCBjb25maWcpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfSxcblxuICBfZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlOiBmdW5jdGlvbih0eXBlLCBtYXAsIGFsbENvbmZpZ3MpIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fd2Fybih0aGlzLl9sb2dmKFxuICAgICAgICAgICdwbGF5QW5pbWF0aW9uJyxcbiAgICAgICAgICAnUGxlYXNlIHB1dCBcXCdhbmltYXRpb25Db25maWdcXCcgaW5zaWRlIG9mIHlvdXIgY29tcG9uZW50cyBcXCdwcm9wZXJ0aWVzXFwnIG9iamVjdCBpbnN0ZWFkIG9mIG91dHNpZGUgb2YgaXQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHR5cGUgaXMgb3B0aW9uYWxcbiAgICB2YXIgdGhpc0NvbmZpZztcbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWc7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXNDb25maWcpKSB7XG4gICAgICB0aGlzQ29uZmlnID0gW3RoaXNDb25maWddO1xuICAgIH1cblxuICAgIC8vIGl0ZXJhdGUgYW5pbWF0aW9ucyBhbmQgcmVjdXJzZSB0byBwcm9jZXNzIGNvbmZpZ3VyYXRpb25zIGZyb20gY2hpbGQgbm9kZXNcbiAgICBpZiAodGhpc0NvbmZpZykge1xuICAgICAgZm9yICh2YXIgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IHRoaXNDb25maWdbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChjb25maWcuYW5pbWF0YWJsZSkge1xuICAgICAgICAgIGNvbmZpZy5hbmltYXRhYmxlLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUoXG4gICAgICAgICAgICAgIGNvbmZpZy50eXBlIHx8IHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgaWYgKGNhY2hlZENvbmZpZykge1xuICAgICAgICAgICAgICAvLyBtZXJnZSBjb25maWd1cmF0aW9ucyB3aXRoIHRoZSBzYW1lIGlkLCBtYWtpbmcgYSBjbG9uZSBsYXppbHlcbiAgICAgICAgICAgICAgaWYgKCFjYWNoZWRDb25maWcuaXNDbG9uZSkge1xuICAgICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gdGhpcy5fY2xvbmVDb25maWcoY2FjaGVkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjYWNoZWRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwdXQgYW55IGNvbmZpZ3Mgd2l0aCBhbiBpZCBpbnRvIGEgbWFwXG4gICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxDb25maWdzLnB1c2goY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGNhbGxzIHRoaXNcbiAgICogbWV0aG9kIHRvIGNvbmZpZ3VyZSBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCB0eXBlLiBFbGVtZW50c1xuICAgKiBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIHNob3VsZCBkZWZpbmUgdGhlIHByb3BlcnR5XG4gICAqIGBhbmltYXRpb25Db25maWdgLCB3aGljaCBpcyBlaXRoZXIgYSBjb25maWd1cmF0aW9uIG9iamVjdCBvciBhIG1hcCBvZlxuICAgKiBhbmltYXRpb24gdHlwZSB0byBhcnJheSBvZiBjb25maWd1cmF0aW9uIG9iamVjdHMuXG4gICAqL1xuICBnZXRBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdmFyIGFsbENvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUodHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAvLyBhcHBlbmQgdGhlIGNvbmZpZ3VyYXRpb25zIHNhdmVkIGluIHRoZSBtYXAgdG8gdGhlIGFycmF5XG4gICAgZm9yICh2YXIga2V5IGluIG1hcCkge1xuICAgICAgYWxsQ29uZmlncy5wdXNoKG1hcFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbENvbmZpZ3M7XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBVc2UgYE5lb25BbmltYXRpb25CZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGFuaW1hdGlvbi5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25CZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBhbmltYXRpb24gdGltaW5nLlxuICAgICAqL1xuICAgIGFuaW1hdGlvblRpbWluZzoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIGVhc2luZzogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSknLCBmaWxsOiAnYm90aCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhhdCBlbGVtZW50cyBpbXBsZW1lbnQgdGhpcyBiZWhhdmlvci5cbiAgICovXG4gIGlzTmVvbkFuaW1hdGlvbjogdHJ1ZSxcblxuICAvKipcbiAgICogRG8gYW55IGFuaW1hdGlvbiBjb25maWd1cmF0aW9uIGhlcmUuXG4gICAqL1xuICAvLyBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAvLyB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghZG9jdW1lbnQuYm9keS5hbmltYXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05vIHdlYiBhbmltYXRpb25zIGRldGVjdGVkLiBUaGlzIGVsZW1lbnQgd2lsbCBub3QnICtcbiAgICAgICAgICAnIGZ1bmN0aW9uIHdpdGhvdXQgYSB3ZWIgYW5pbWF0aW9ucyBwb2x5ZmlsbC4nKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFuaW1hdGlvbiB0aW1pbmcgYnkgbWl4aW5nIGluIHByb3BlcnRpZXMgZnJvbSBgY29uZmlnYCB0byB0aGVcbiAgICogZGVmYXVsdHMgZGVmaW5lZCBieSB0aGUgYW5pbWF0aW9uLlxuICAgKi9cbiAgdGltaW5nRnJvbUNvbmZpZzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy50aW1pbmcpIHtcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZy50aW1pbmcpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmdbcHJvcGVydHldID0gY29uZmlnLnRpbWluZ1twcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvblRpbWluZztcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBgdHJhbnNmb3JtYCBhbmQgYHRyYW5zZm9ybU9yaWdpbmAgcHJvcGVydGllcyBhbG9uZyB3aXRoIHRoZSBwcmVmaXhlZFxuICAgKiB2ZXJzaW9ucy5cbiAgICovXG4gIHNldFByZWZpeGVkUHJvcGVydHk6IGZ1bmN0aW9uKG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBtYXAgPSB7XG4gICAgICAndHJhbnNmb3JtJzogWyd3ZWJraXRUcmFuc2Zvcm0nXSxcbiAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiBbJ21velRyYW5zZm9ybU9yaWdpbicsICd3ZWJraXRUcmFuc2Zvcm1PcmlnaW4nXVxuICAgIH07XG4gICAgdmFyIHByZWZpeGVzID0gbWFwW3Byb3BlcnR5XTtcbiAgICBmb3IgKHZhciBwcmVmaXgsIGluZGV4ID0gMDsgcHJlZml4ID0gcHJlZml4ZXNbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICBub2RlLnN0eWxlW3ByZWZpeF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgbm9kZS5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcy5cbiAgICovXG4gIGNvbXBsZXRlOiBmdW5jdGlvbihjb25maWcpIHt9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7TmVvbkFuaW1hdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGFkZHMgYSBtZXRob2QgdG8gcnVuIGFuaW1hdGlvbnMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGwgPSB7XG5cbiAgX2NvbmZpZ3VyZUFuaW1hdGlvbnM6IGZ1bmN0aW9uKGNvbmZpZ3MpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXN1bHRzVG9QbGF5ID0gW107XG5cbiAgICBpZiAoY29uZmlncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gY29uZmlnc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG5lb25BbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy5uYW1lKTtcbiAgICAgICAgLy8gaXMgdGhpcyBlbGVtZW50IGFjdHVhbGx5IGEgbmVvbiBhbmltYXRpb24/XG4gICAgICAgIGlmIChuZW9uQW5pbWF0aW9uLmlzTmVvbkFuaW1hdGlvbikge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICAgIC8vIENsb3N1cmUgY29tcGlsZXIgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggYSB0cnkgLyBjYXRjaCBoZXJlLlxuICAgICAgICAgIC8vIC5jb25maWd1cmUgbmVlZHMgdG8gYmUgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCFuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBbmltYXRpb25FZmZlY3RSZWFkT25seX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbi5jb25maWd1cmUgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0ID0gbmVvbkFuaW1hdGlvbi5jb25maWd1cmUoY29uZmlnKTtcbiAgICAgICAgICByZXN1bHRzVG9QbGF5LnB1c2goe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnOicsIGNvbmZpZy5uYW1lLCAnbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzVG9QbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1RvUGxheVtpXS5yZXN1bHQ7XG4gICAgICBsZXQgY29uZmlnID0gcmVzdWx0c1RvUGxheVtpXS5jb25maWc7XG4gICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IHJlc3VsdHNUb1BsYXlbaV0ubmVvbkFuaW1hdGlvbjtcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gb3IgcGxheSBjb3VsZCBmYWlsIGlmIHBvbHlmaWxscyBhcmVuJ3QgbG9hZGVkXG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIEVmZmVjdCByYXRoZXIgdGhhbiBhbiBBbmltYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuY2FuY2VsICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBkb2N1bWVudC50aW1lbGluZS5wbGF5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZG50IHBsYXknLCAnKCcsIGNvbmZpZy5uYW1lLCAnKS4nLCBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuXG4gIF9zaG91bGRDb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIHZhciBmaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ucGxheVN0YXRlICE9ICdmaW5pc2hlZCcpIHtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSxcblxuICBfY29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0ubmVvbkFuaW1hdGlvbi5jb21wbGV0ZShhY3RpdmVFbnRyaWVzW2ldLmNvbmZpZyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCBgdHlwZWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gdHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3Q9fSBjb29raWVcbiAgICovXG4gIHBsYXlBbmltYXRpb246IGZ1bmN0aW9uKHR5cGUsIGNvb2tpZSkge1xuICAgIHZhciBjb25maWdzID0gdGhpcy5nZXRBbmltYXRpb25Db25maWcodHlwZSk7XG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX2FjdGl2ZSB8fCB7fTtcbiAgICBpZiAodGhpcy5fYWN0aXZlW3R5cGVdKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZSh0aGlzLl9hY3RpdmVbdHlwZV0pO1xuICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRW50cmllcyA9IHRoaXMuX2NvbmZpZ3VyZUFuaW1hdGlvbnMoY29uZmlncyk7XG5cbiAgICBpZiAoYWN0aXZlRW50cmllcy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVt0eXBlXSA9IGFjdGl2ZUVudHJpZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLm9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRDb21wbGV0ZShhY3RpdmVFbnRyaWVzKSkge1xuICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKGFjdGl2ZUVudHJpZXMpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgKi9cbiAgY2FuY2VsQW5pbWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9hY3RpdmVba11cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllc1tqXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0ge307XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yID1cbiAgICBbTmVvbkFuaW1hdGFibGVCZWhhdmlvciwgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtJcm9uTWVudUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW01lbnVzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvbWVudXMuaHRtbClcblxuYDxwYXBlci1saXN0Ym94PmAgaW1wbGVtZW50cyBhbiBhY2Nlc3NpYmxlIGxpc3Rib3ggY29udHJvbCB3aXRoIE1hdGVyaWFsIERlc2lnblxuc3R5bGluZy4gVGhlIGZvY3VzZWQgaXRlbSBpcyBoaWdobGlnaHRlZCwgYW5kIHRoZSBzZWxlY3RlZCBpdGVtIGhhcyBib2xkZWQgdGV4dC5cblxuICAgIDxwYXBlci1saXN0Ym94PlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAxPC9wYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAyPC9wYXBlci1pdGVtPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuQW4gaW5pdGlhbCBzZWxlY3Rpb24gY2FuIGJlIHNwZWNpZmllZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGF0dHJpYnV0ZS5cblxuICAgIDxwYXBlci1saXN0Ym94IHNlbGVjdGVkPVwiMFwiPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAxPC9wYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAyPC9wYXBlci1pdGVtPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuTWFrZSBhIG11bHRpLXNlbGVjdCBsaXN0Ym94IHdpdGggdGhlIGBtdWx0aWAgYXR0cmlidXRlLiBJdGVtcyBpbiBhIG11bHRpLXNlbGVjdFxubGlzdGJveCBjYW4gYmUgZGVzZWxlY3RlZCwgYW5kIG11bHRpcGxlIGl0ZW0gY2FuIGJlIHNlbGVjdGVkLlxuXG4gICAgPHBhcGVyLWxpc3Rib3ggbXVsdGk+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDE8L3BhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbT5JdGVtIDI8L3BhcGVyLWl0ZW0+XG4gICAgPC9wYXBlci1saXN0Ym94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItbGlzdGJveC1iYWNrZ3JvdW5kLWNvbG9yYCAgIHwgTWVudSBiYWNrZ3JvdW5kIGNvbG9yIHxcbmAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWxpc3Rib3gtY29sb3JgICAgICAgICAgICAgICB8IE1lbnUgZm9yZWdyb3VuZCBjb2xvciB8XG5gLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1saXN0Ym94YCAgICAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsaXN0Ym94IHwgYHt9YFxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5gPHBhcGVyLWxpc3Rib3g+YCBoYXMgYHJvbGU9XCJsaXN0Ym94XCJgIGJ5IGRlZmF1bHQuIEEgbXVsdGktc2VsZWN0IGxpc3Rib3ggd2lsbFxuYWxzbyBoYXZlIGBhcmlhLW11bHRpc2VsZWN0YWJsZWAgc2V0LiBJdCBpbXBsZW1lbnRzIGtleSBiaW5kaW5ncyB0byBuYXZpZ2F0ZVxudGhyb3VnaCB0aGUgbGlzdGJveCB3aXRoIHRoZSB1cCBhbmQgZG93biBhcnJvdyBrZXlzLCBlc2MgdG8gZXhpdCB0aGUgbGlzdGJveCxcbmFuZCBlbnRlciB0byBhY3RpdmF0ZSBhIGxpc3Rib3ggaXRlbS4gVHlwaW5nIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBsaXN0Ym94IGl0ZW1cbndpbGwgYWxzbyBmb2N1cyBpdC5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1saXN0Ym94XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWxpc3Rib3gtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1saXN0Ym94LWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1saXN0Ym94O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItbGlzdGJveCcsXG4gIGJlaGF2aW9yczogW0lyb25NZW51QmVoYXZpb3JdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdsaXN0Ym94J31cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge05lb25BbmltYXRpb25CZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1tZW51LWdyb3ctaGVpZ2h0LWFuaW1hdGlvbicsXG5cbiAgYmVoYXZpb3JzOiBbTmVvbkFuaW1hdGlvbkJlaGF2aW9yXSxcblxuICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBub2RlID0gY29uZmlnLm5vZGU7XG4gICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcblxuICAgIHRoaXMuX2VmZmVjdCA9IG5ldyBLZXlmcmFtZUVmZmVjdChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgW3toZWlnaHQ6IChoZWlnaHQgLyAyKSArICdweCd9LCB7aGVpZ2h0OiBoZWlnaHQgKyAncHgnfV0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcblxuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cbn0pO1xuXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1tZW51LWdyb3ctd2lkdGgtYW5pbWF0aW9uJyxcblxuICBiZWhhdmlvcnM6IFtOZW9uQW5pbWF0aW9uQmVoYXZpb3JdLFxuXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIG5vZGUgPSBjb25maWcubm9kZTtcbiAgICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcblxuICAgIHRoaXMuX2VmZmVjdCA9IG5ldyBLZXlmcmFtZUVmZmVjdChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgW3t3aWR0aDogKHdpZHRoIC8gMikgKyAncHgnfSwge3dpZHRoOiB3aWR0aCArICdweCd9XSxcbiAgICAgICAgdGhpcy50aW1pbmdGcm9tQ29uZmlnKGNvbmZpZykpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdDtcbiAgfVxufSk7XG5cblBvbHltZXIoe1xuICBpczogJ3BhcGVyLW1lbnUtc2hyaW5rLXdpZHRoLWFuaW1hdGlvbicsXG5cbiAgYmVoYXZpb3JzOiBbTmVvbkFuaW1hdGlvbkJlaGF2aW9yXSxcblxuICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBub2RlID0gY29uZmlnLm5vZGU7XG4gICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG5cbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFt7d2lkdGg6IHdpZHRoICsgJ3B4J30sIHt3aWR0aDogd2lkdGggLSAod2lkdGggLyAyMCkgKyAncHgnfV0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcblxuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cbn0pO1xuXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1tZW51LXNocmluay1oZWlnaHQtYW5pbWF0aW9uJyxcblxuICBiZWhhdmlvcnM6IFtOZW9uQW5pbWF0aW9uQmVoYXZpb3JdLFxuXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIG5vZGUgPSBjb25maWcubm9kZTtcbiAgICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuXG4gICAgdGhpcy5zZXRQcmVmaXhlZFByb3BlcnR5KG5vZGUsICd0cmFuc2Zvcm1PcmlnaW4nLCAnMCAwJyk7XG5cbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFtcbiAgICAgICAgICB7aGVpZ2h0OiBoZWlnaHQgKyAncHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30sXG4gICAgICAgICAge2hlaWdodDogaGVpZ2h0IC8gMiArICdweCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTIwcHgpJ31cbiAgICAgICAgXSxcbiAgICAgICAgdGhpcy50aW1pbmdGcm9tQ29uZmlnKGNvbmZpZykpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdDtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZHJvcGRvd24vaXJvbi1kcm9wZG93bi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL2FuaW1hdGlvbnMvZmFkZS1pbi1hbmltYXRpb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9uZW9uLWFuaW1hdGlvbi9hbmltYXRpb25zL2ZhZGUtb3V0LWFuaW1hdGlvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3NoYWRvdy5qcyc7XG5pbXBvcnQgJy4vcGFwZXItbWVudS1idXR0b24tYW5pbWF0aW9ucy5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxudmFyIGNvbmZpZyA9IHtcbiAgQU5JTUFUSU9OX0NVQklDX0JFWklFUjogJ2N1YmljLWJlemllciguMywuOTUsLjUsMSknLFxuICBNQVhfQU5JTUFUSU9OX1RJTUVfTVM6IDQwMFxufTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtEcm9wZG93blxuYnV0dG9uc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2J1dHRvbnMuaHRtbCNidXR0b25zLWRyb3Bkb3duLWJ1dHRvbnMpXG5cbmBwYXBlci1tZW51LWJ1dHRvbmAgYWxsb3dzIG9uZSB0byBjb21wb3NlIGEgZGVzaWduYXRlZCBcInRyaWdnZXJcIiBlbGVtZW50IHdpdGhcbmFub3RoZXIgZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgXCJjb250ZW50XCIsIHRvIGNyZWF0ZSBhIGRyb3Bkb3duIG1lbnUgdGhhdFxuZGlzcGxheXMgdGhlIFwiY29udGVudFwiIHdoZW4gdGhlIFwidHJpZ2dlclwiIGlzIGNsaWNrZWQuXG5cblRoZSBjaGlsZCBlbGVtZW50IGFzc2lnbmVkIHRvIHRoZSBgZHJvcGRvd24tdHJpZ2dlcmAgc2xvdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG5cInRyaWdnZXJcIiBlbGVtZW50LiBUaGUgY2hpbGQgZWxlbWVudCBhc3NpZ25lZCB0byB0aGUgYGRyb3Bkb3duLWNvbnRlbnRgIHNsb3RcbndpbGwgYmUgdXNlZCBhcyB0aGUgXCJjb250ZW50XCIgZWxlbWVudC5cblxuVGhlIGBwYXBlci1tZW51LWJ1dHRvbmAgaXMgc2Vuc2l0aXZlIHRvIGl0cyBjb250ZW50J3MgYGlyb24tc2VsZWN0YCBldmVudHMuIElmXG50aGUgXCJjb250ZW50XCIgZWxlbWVudCB0cmlnZ2VycyBhbiBgaXJvbi1zZWxlY3RgIGV2ZW50LCB0aGUgYHBhcGVyLW1lbnUtYnV0dG9uYFxud2lsbCBjbG9zZSBhdXRvbWF0aWNhbGx5LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJtZW51XCJcbnNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj4gPHBhcGVyLWxpc3Rib3hcbnNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+IDxwYXBlci1pdGVtPlNoYXJlPC9wYXBlci1pdGVtPlxuICAgICAgICA8cGFwZXItaXRlbT5TZXR0aW5nczwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+SGVscDwvcGFwZXItaXRlbT5cbiAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGFsc28gYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1tZW51LWJ1dHRvbi1kcm9wZG93bi1iYWNrZ3JvdW5kYCB8IEJhY2tncm91bmQgY29sb3Igb2YgdGhlIHBhcGVyLW1lbnUtYnV0dG9uIGRyb3Bkb3duIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItbWVudS1idXR0b25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgcGFwZXItbWVudS1idXR0b24gfCBge31gXG5gLS1wYXBlci1tZW51LWJ1dHRvbi1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBwYXBlci1tZW51LWJ1dHRvbiB3aGVuIGRpc2FibGVkIHwgYHt9YFxuYC0tcGFwZXItbWVudS1idXR0b24tZHJvcGRvd25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgcGFwZXItbWVudS1idXR0b24gZHJvcGRvd24gfCBge31gXG5gLS1wYXBlci1tZW51LWJ1dHRvbi1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHBhcGVyLW1lbnUtYnV0dG9uIGNvbnRlbnQgfCBge31gXG5cbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5leHBvcnQgY29uc3QgUGFwZXJNZW51QnV0dG9uID0gUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWVudS1idXR0b24tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIGlyb24tZHJvcGRvd24ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tZW51LWJ1dHRvbi1kcm9wZG93bjtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItbWVudS1idXR0b24tZHJvcGRvd24tYmFja2dyb3VuZCwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWVudS1idXR0b24tY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3ZlcnRpY2FsLWFsaWduPVwidG9wXCJdKSAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt2ZXJ0aWNhbC1hbGlnbj1cImJvdHRvbVwiXSkgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAjdHJpZ2dlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInRyaWdnZXJcIiBvbi10YXA9XCJ0b2dnbGVcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJkcm9wZG93bi10cmlnZ2VyXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuXG4gICAgPGlyb24tZHJvcGRvd24gaWQ9XCJkcm9wZG93blwiIG9wZW5lZD1cInt7b3BlbmVkfX1cIiBob3Jpem9udGFsLWFsaWduPVwiW1tob3Jpem9udGFsQWxpZ25dXVwiIHZlcnRpY2FsLWFsaWduPVwiW1t2ZXJ0aWNhbEFsaWduXV1cIiBkeW5hbWljLWFsaWduPVwiW1tkeW5hbWljQWxpZ25dXVwiIGhvcml6b250YWwtb2Zmc2V0PVwiW1tob3Jpem9udGFsT2Zmc2V0XV1cIiB2ZXJ0aWNhbC1vZmZzZXQ9XCJbW3ZlcnRpY2FsT2Zmc2V0XV1cIiBuby1vdmVybGFwPVwiW1tub092ZXJsYXBdXVwiIG9wZW4tYW5pbWF0aW9uLWNvbmZpZz1cIltbb3BlbkFuaW1hdGlvbkNvbmZpZ11dXCIgY2xvc2UtYW5pbWF0aW9uLWNvbmZpZz1cIltbY2xvc2VBbmltYXRpb25Db25maWddXVwiIG5vLWFuaW1hdGlvbnM9XCJbW25vQW5pbWF0aW9uc11dXCIgZm9jdXMtdGFyZ2V0PVwiW1tfZHJvcGRvd25Db250ZW50XV1cIiBhbGxvdy1vdXRzaWRlLXNjcm9sbD1cIltbYWxsb3dPdXRzaWRlU2Nyb2xsXV1cIiByZXN0b3JlLWZvY3VzLW9uLWNsb3NlPVwiW1tyZXN0b3JlRm9jdXNPbkNsb3NlXV1cIiBvbi1pcm9uLW92ZXJsYXktY2FuY2VsZWQ9XCJfX29uSXJvbk92ZXJsYXlDYW5jZWxlZFwiPlxuICAgICAgPGRpdiBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICA8c2xvdCBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZHJvcGRvd24tY29udGVudFwiPjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvaXJvbi1kcm9wZG93bj5cbmAsXG5cbiAgaXM6ICdwYXBlci1tZW51LWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIGRyb3Bkb3duIG9wZW5zLlxuICAgKlxuICAgKiBAZXZlbnQgcGFwZXItZHJvcGRvd24tb3BlblxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgZHJvcGRvd24gY2xvc2VzLlxuICAgKlxuICAgKiBAZXZlbnQgcGFwZXItZHJvcGRvd24tY2xvc2VcbiAgICovXG5cbiAgYmVoYXZpb3JzOiBbSXJvbkExMXlLZXlzQmVoYXZpb3IsIElyb25Db250cm9sU3RhdGVdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBjb250ZW50IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQuXG4gICAgICovXG4gICAgb3BlbmVkOlxuICAgICAgICB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBub3RpZnk6IHRydWUsIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBtZW51IGRyb3Bkb3duXG4gICAgICogaG9yaXpvbnRhbGx5IHJlbGF0aXZlIHRvIHRoZSBkcm9wZG93biB0cmlnZ2VyLlxuICAgICAqL1xuICAgIGhvcml6b250YWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdsZWZ0JywgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBtZW51IGRyb3Bkb3duXG4gICAgICogdmVydGljYWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3RvcCcsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYGhvcml6b250YWxBbGlnbmAgYW5kIGB2ZXJ0aWNhbEFsaWduYCBwcm9wZXJ0aWVzIHdpbGxcbiAgICAgKiBiZSBjb25zaWRlcmVkIHByZWZlcmVuY2VzIGluc3RlYWQgb2Ygc3RyaWN0IHJlcXVpcmVtZW50cyB3aGVuXG4gICAgICogcG9zaXRpb25pbmcgdGhlIGRyb3Bkb3duIGFuZCBtYXkgYmUgY2hhbmdlZCBpZiBkb2luZyBzbyByZWR1Y2VzXG4gICAgICogdGhlIGFyZWEgb2YgdGhlIGRyb3Bkb3duIGZhbGxpbmcgb3V0c2lkZSBvZiBgZml0SW50b2AuXG4gICAgICovXG4gICAgZHluYW1pY0FsaWduOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBBIHBpeGVsIHZhbHVlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgcG9zaXRpb24gY2FsY3VsYXRlZCBmb3IgdGhlXG4gICAgICogZ2l2ZW4gYGhvcml6b250YWxBbGlnbmAuIFVzZSBhIG5lZ2F0aXZlIHZhbHVlIHRvIG9mZnNldCB0byB0aGVcbiAgICAgKiBsZWZ0LCBvciBhIHBvc2l0aXZlIHZhbHVlIHRvIG9mZnNldCB0byB0aGUgcmlnaHQuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbE9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBBIHBpeGVsIHZhbHVlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgcG9zaXRpb24gY2FsY3VsYXRlZCBmb3IgdGhlXG4gICAgICogZ2l2ZW4gYHZlcnRpY2FsQWxpZ25gLiBVc2UgYSBuZWdhdGl2ZSB2YWx1ZSB0byBvZmZzZXQgdG93YXJkcyB0aGVcbiAgICAgKiB0b3AsIG9yIGEgcG9zaXRpdmUgdmFsdWUgdG8gb2Zmc2V0IHRvd2FyZHMgdGhlIGJvdHRvbS5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZHJvcGRvd24gd2lsbCBiZSBwb3NpdGlvbmVkIHNvIHRoYXQgaXQgZG9lc24ndCBvdmVybGFwXG4gICAgICogdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBub092ZXJsYXA6IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYW5pbWF0aW9ucyB3aGVuIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlXG4gICAgICogZHJvcGRvd24uXG4gICAgICovXG4gICAgbm9BbmltYXRpb25zOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYXV0b21hdGljYWxseSBjbG9zaW5nIHRoZSBkcm9wZG93biBhZnRlclxuICAgICAqIGEgc2VsZWN0aW9uIGhhcyBiZWVuIG1hZGUuXG4gICAgICovXG4gICAgaWdub3JlU2VsZWN0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGVuYWJsZSBhdXRvbWF0aWNhbGx5IGNsb3NpbmcgdGhlIGRyb3Bkb3duIGFmdGVyIGFuXG4gICAgICogaXRlbSBoYXMgYmVlbiBhY3RpdmF0ZWQsIGV2ZW4gaWYgdGhlIHNlbGVjdGlvbiBkaWQgbm90IGNoYW5nZS5cbiAgICAgKi9cbiAgICBjbG9zZU9uQWN0aXZhdGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQW4gYW5pbWF0aW9uIGNvbmZpZy4gSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB1c2VkIHRvIGFuaW1hdGUgdGhlXG4gICAgICogb3BlbmluZyBvZiB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgb3BlbkFuaW1hdGlvbkNvbmZpZzoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtuYW1lOiAnZmFkZS1pbi1hbmltYXRpb24nLCB0aW1pbmc6IHtkZWxheTogMTAwLCBkdXJhdGlvbjogMjAwfX0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BhcGVyLW1lbnUtZ3Jvdy13aWR0aC1hbmltYXRpb24nLFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAsXG4gICAgICAgICAgICAgIGVhc2luZzogY29uZmlnLkFOSU1BVElPTl9DVUJJQ19CRVpJRVJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXBlci1tZW51LWdyb3ctaGVpZ2h0LWFuaW1hdGlvbicsXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDI3NSxcbiAgICAgICAgICAgICAgZWFzaW5nOiBjb25maWcuQU5JTUFUSU9OX0NVQklDX0JFWklFUlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQW4gYW5pbWF0aW9uIGNvbmZpZy4gSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB1c2VkIHRvIGFuaW1hdGUgdGhlXG4gICAgICogY2xvc2luZyBvZiB0aGUgZHJvcGRvd24uXG4gICAgICovXG4gICAgY2xvc2VBbmltYXRpb25Db25maWc6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7bmFtZTogJ2ZhZGUtb3V0LWFuaW1hdGlvbicsIHRpbWluZzoge2R1cmF0aW9uOiAxNTB9fSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGFwZXItbWVudS1zaHJpbmstd2lkdGgtYW5pbWF0aW9uJyxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICBkZWxheTogMTAwLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAsXG4gICAgICAgICAgICAgIGVhc2luZzogY29uZmlnLkFOSU1BVElPTl9DVUJJQ19CRVpJRVJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXBlci1tZW51LXNocmluay1oZWlnaHQtYW5pbWF0aW9uJyxcbiAgICAgICAgICAgIHRpbWluZzoge2R1cmF0aW9uOiAyMDAsIGVhc2luZzogJ2Vhc2UtaW4nfVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICovXG4gICAgYWxsb3dPdXRzaWRlU2Nyb2xsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIHJlc3RvcmVkIHRvIHRoZSBidXR0b24gd2hlbiB0aGUgbWVudSBjbG9zZXMuXG4gICAgICovXG4gICAgcmVzdG9yZUZvY3VzT25DbG9zZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIGVsZW1lbnQgaW50ZW5kZWQgdG8gYmUgYm91bmQgYXMgdGhlIGZvY3VzIHRhcmdldFxuICAgICAqIGZvciB0aGUgYGlyb24tZHJvcGRvd25gIGNvbnRhaW5lZCBieSBgcGFwZXItbWVudS1idXR0b25gLlxuICAgICAqL1xuICAgIF9kcm9wZG93bkNvbnRlbnQ6IHt0eXBlOiBPYmplY3R9XG4gIH0sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnZ3JvdXAnLCAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJ30sXG5cbiAgbGlzdGVuZXJzOlxuICAgICAgeydpcm9uLWFjdGl2YXRlJzogJ19vbklyb25BY3RpdmF0ZScsICdpcm9uLXNlbGVjdCc6ICdfb25Jcm9uU2VsZWN0J30sXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IGVsZW1lbnQgdGhhdCBpcyBjb250YWluZWQgYnkgdGhlIG1lbnUgYnV0dG9uLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgY29udGVudEVsZW1lbnQoKSB7XG4gICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcy4kLmNvbnRlbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBkcm9wZG93biBjb250ZW50IGJldHdlZW4gb3BlbmVkIGFuZCBjbG9zZWQuXG4gICAqL1xuICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ha2UgdGhlIGRyb3Bkb3duIGNvbnRlbnQgYXBwZWFyIGFzIGFuIG92ZXJsYXkgcG9zaXRpb25lZCByZWxhdGl2ZVxuICAgKiB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kLmRyb3Bkb3duLm9wZW4oKTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZSB0aGUgZHJvcGRvd24gY29udGVudC5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQuZHJvcGRvd24uY2xvc2UoKTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBhbiBgaXJvbi1zZWxlY3RgIGV2ZW50IGlzIHJlY2VpdmVkLCB0aGUgZHJvcGRvd24gc2hvdWxkXG4gICAqIGF1dG9tYXRpY2FsbHkgY2xvc2Ugb24gdGhlIGFzc3VtcHRpb24gdGhhdCBhIHZhbHVlIGhhcyBiZWVuIGNob3Nlbi5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSBDdXN0b21FdmVudCBpbnN0YW5jZSB3aXRoIHR5cGVcbiAgICogc2V0IHRvIGBcImlyb24tc2VsZWN0XCJgLlxuICAgKi9cbiAgX29uSXJvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlU2VsZWN0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYGlyb24tYWN0aXZhdGVgIGV2ZW50IGlzIHJlY2VpdmVkIGlmXG4gICAqIGBjbG9zZU9uQWN0aXZhdGVgIGlzIHRydWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEgQ3VzdG9tRXZlbnQgb2YgdHlwZSAnaXJvbi1hY3RpdmF0ZScuXG4gICAqL1xuICBfb25Jcm9uQWN0aXZhdGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY2xvc2VPbkFjdGl2YXRlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBkcm9wZG93biBvcGVucywgdGhlIGBwYXBlci1tZW51LWJ1dHRvbmAgZmlyZXMgYHBhcGVyLW9wZW5gLlxuICAgKiBXaGVuIHRoZSBkcm9wZG93biBjbG9zZXMsIHRoZSBgcGFwZXItbWVudS1idXR0b25gIGZpcmVzIGBwYXBlci1jbG9zZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3BlbmVkIFRydWUgaWYgdGhlIGRyb3Bkb3duIGlzIG9wZW5lZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9sZE9wZW5lZCBUaGUgcHJldmlvdXMgdmFsdWUgb2YgYG9wZW5lZGAuXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24ob3BlbmVkLCBvbGRPcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICAvLyBUT0RPKGNkYXRhKTogVXBkYXRlIHRoaXMgd2hlbiB3ZSBjYW4gbWVhc3VyZSBjaGFuZ2VzIGluIGRpc3RyaWJ1dGVkXG4gICAgICAvLyBjaGlsZHJlbiBpbiBhbiBpZGlvbWF0aWMgd2F5LlxuICAgICAgLy8gV2UgcG9rZSB0aGlzIHByb3BlcnR5IGluIGNhc2UgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWQuIFRoaXMgd2lsbFxuICAgICAgLy8gY2F1c2UgdGhlIGZvY3VzIHRhcmdldCBmb3IgdGhlIGBpcm9uLWRyb3Bkb3duYCB0byBiZSB1cGRhdGVkIGFzXG4gICAgICAvLyBuZWNlc3Nhcnk6XG4gICAgICB0aGlzLl9kcm9wZG93bkNvbnRlbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50O1xuICAgICAgdGhpcy5maXJlKCdwYXBlci1kcm9wZG93bi1vcGVuJyk7XG4gICAgfSBlbHNlIGlmIChvbGRPcGVuZWQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5maXJlKCdwYXBlci1kcm9wZG93bi1jbG9zZScpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSWYgdGhlIGRyb3Bkb3duIGlzIG9wZW4gd2hlbiBkaXNhYmxlZCBiZWNvbWVzIHRydWUsIGNsb3NlIHRoZVxuICAgKiBkcm9wZG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCBUcnVlIGlmIGRpc2FibGVkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBfZGlzYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihkaXNhYmxlZCkge1xuICAgIElyb25Db250cm9sU3RhdGUuX2Rpc2FibGVkQ2hhbmdlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChkaXNhYmxlZCAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICBfX29uSXJvbk92ZXJsYXlDYW5jZWxlZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgdWlFdmVudCA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgdHJpZ2dlciA9IHRoaXMuJC50cmlnZ2VyO1xuICAgIHZhciBwYXRoID0gZG9tKHVpRXZlbnQpLnBhdGg7XG5cbiAgICBpZiAocGF0aC5pbmRleE9mKHRyaWdnZXIpID4gLTEpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59KTtcblxuT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICBQYXBlck1lbnVCdXR0b25ba2V5XSA9IGNvbmZpZ1trZXldO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBc0JBO0FBRUE7QUFPQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBcERBO0FBdURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhPQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVlBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBWUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBaEJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7O0FBTUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXRCQTtBQTZCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzSEE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFOQTtBQUxBO0FBQ0E7QUFlQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQXJFQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSUE7QUF1SUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQXJCQTs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBckJBOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUE2REE7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7QUFNQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBdEJBO0FBQ0E7QUF3QkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBbEJBO0FBQ0E7QUFvQkE7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBeElBO0FBMklBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzVUE7QUE4VUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=