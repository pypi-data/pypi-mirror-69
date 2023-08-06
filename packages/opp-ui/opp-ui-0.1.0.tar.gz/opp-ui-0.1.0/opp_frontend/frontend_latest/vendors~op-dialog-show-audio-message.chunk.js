(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~op-dialog-show-audio-message"],{

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

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35vcC1kaWFsb2ctc2hvdy1hdWRpby1tZXNzYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBpcyBpbXBsZW1lbnRlZCBieSBlbGVtZW50cyBjb250YWluaW5nXG4gKiBhbmltYXRpb25zIGZvciB1c2Ugd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgLlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGFibGVCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gY29uZmlndXJhdGlvbi4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZW50cnknIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZW50cnlgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGVudHJ5QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19lbnRyeUFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZXhpdCcgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5leGl0YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBleGl0QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19leGl0QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICB9LFxuXG4gIF9lbnRyeUFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2VudHJ5J10gPSBbe25hbWU6IHRoaXMuZW50cnlBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfZXhpdEFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2V4aXQnXSA9IFt7bmFtZTogdGhpcy5leGl0QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2NvcHlQcm9wZXJ0aWVzOiBmdW5jdGlvbihjb25maWcxLCBjb25maWcyKSB7XG4gICAgLy8gc2hhbGxvd2x5IGNvcHkgcHJvcGVydGllcyBmcm9tIGNvbmZpZzIgdG8gY29uZmlnMVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZzFbcHJvcGVydHldID0gY29uZmlnMltwcm9wZXJ0eV07XG4gICAgfVxuICB9LFxuXG4gIF9jbG9uZUNvbmZpZzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIGNsb25lID0ge2lzQ2xvbmU6IHRydWV9O1xuICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNsb25lLCBjb25maWcpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfSxcblxuICBfZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlOiBmdW5jdGlvbih0eXBlLCBtYXAsIGFsbENvbmZpZ3MpIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fd2Fybih0aGlzLl9sb2dmKFxuICAgICAgICAgICdwbGF5QW5pbWF0aW9uJyxcbiAgICAgICAgICAnUGxlYXNlIHB1dCBcXCdhbmltYXRpb25Db25maWdcXCcgaW5zaWRlIG9mIHlvdXIgY29tcG9uZW50cyBcXCdwcm9wZXJ0aWVzXFwnIG9iamVjdCBpbnN0ZWFkIG9mIG91dHNpZGUgb2YgaXQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHR5cGUgaXMgb3B0aW9uYWxcbiAgICB2YXIgdGhpc0NvbmZpZztcbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWc7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXNDb25maWcpKSB7XG4gICAgICB0aGlzQ29uZmlnID0gW3RoaXNDb25maWddO1xuICAgIH1cblxuICAgIC8vIGl0ZXJhdGUgYW5pbWF0aW9ucyBhbmQgcmVjdXJzZSB0byBwcm9jZXNzIGNvbmZpZ3VyYXRpb25zIGZyb20gY2hpbGQgbm9kZXNcbiAgICBpZiAodGhpc0NvbmZpZykge1xuICAgICAgZm9yICh2YXIgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IHRoaXNDb25maWdbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChjb25maWcuYW5pbWF0YWJsZSkge1xuICAgICAgICAgIGNvbmZpZy5hbmltYXRhYmxlLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUoXG4gICAgICAgICAgICAgIGNvbmZpZy50eXBlIHx8IHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgaWYgKGNhY2hlZENvbmZpZykge1xuICAgICAgICAgICAgICAvLyBtZXJnZSBjb25maWd1cmF0aW9ucyB3aXRoIHRoZSBzYW1lIGlkLCBtYWtpbmcgYSBjbG9uZSBsYXppbHlcbiAgICAgICAgICAgICAgaWYgKCFjYWNoZWRDb25maWcuaXNDbG9uZSkge1xuICAgICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gdGhpcy5fY2xvbmVDb25maWcoY2FjaGVkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjYWNoZWRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwdXQgYW55IGNvbmZpZ3Mgd2l0aCBhbiBpZCBpbnRvIGEgbWFwXG4gICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxDb25maWdzLnB1c2goY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGNhbGxzIHRoaXNcbiAgICogbWV0aG9kIHRvIGNvbmZpZ3VyZSBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCB0eXBlLiBFbGVtZW50c1xuICAgKiBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIHNob3VsZCBkZWZpbmUgdGhlIHByb3BlcnR5XG4gICAqIGBhbmltYXRpb25Db25maWdgLCB3aGljaCBpcyBlaXRoZXIgYSBjb25maWd1cmF0aW9uIG9iamVjdCBvciBhIG1hcCBvZlxuICAgKiBhbmltYXRpb24gdHlwZSB0byBhcnJheSBvZiBjb25maWd1cmF0aW9uIG9iamVjdHMuXG4gICAqL1xuICBnZXRBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdmFyIGFsbENvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUodHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAvLyBhcHBlbmQgdGhlIGNvbmZpZ3VyYXRpb25zIHNhdmVkIGluIHRoZSBtYXAgdG8gdGhlIGFycmF5XG4gICAgZm9yICh2YXIga2V5IGluIG1hcCkge1xuICAgICAgYWxsQ29uZmlncy5wdXNoKG1hcFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbENvbmZpZ3M7XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yfSBmcm9tICcuL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgYWRkcyBhIG1ldGhvZCB0byBydW4gYW5pbWF0aW9ucy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbCA9IHtcblxuICBfY29uZmlndXJlQW5pbWF0aW9uczogZnVuY3Rpb24oY29uZmlncykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlc3VsdHNUb1BsYXkgPSBbXTtcblxuICAgIGlmIChjb25maWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSBjb25maWdzW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLm5hbWUpO1xuICAgICAgICAvLyBpcyB0aGlzIGVsZW1lbnQgYWN0dWFsbHkgYSBuZW9uIGFuaW1hdGlvbj9cbiAgICAgICAgaWYgKG5lb25BbmltYXRpb24uaXNOZW9uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgLy8gQ2xvc3VyZSBjb21waWxlciBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBhIHRyeSAvIGNhdGNoIGhlcmUuXG4gICAgICAgICAgLy8gLmNvbmZpZ3VyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBpZiAoIW5lb25BbmltYXRpb24uY29uZmlndXJlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FuaW1hdGlvbkVmZmVjdFJlYWRPbmx5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAgIHJlc3VsdHNUb1BsYXkucHVzaCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5pcyArICc6JywgY29uZmlnLm5hbWUsICdub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNUb1BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzVG9QbGF5W2ldLnJlc3VsdDtcbiAgICAgIGxldCBjb25maWcgPSByZXN1bHRzVG9QbGF5W2ldLmNvbmZpZztcbiAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gcmVzdWx0c1RvUGxheVtpXS5uZW9uQW5pbWF0aW9uO1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBvciBwbGF5IGNvdWxkIGZhaWwgaWYgcG9seWZpbGxzIGFyZW4ndCBsb2FkZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gRWZmZWN0IHJhdGhlciB0aGFuIGFuIEFuaW1hdGlvblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5jYW5jZWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnRpbWVsaW5lLnBsYXkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkbnQgcGxheScsICcoJywgY29uZmlnLm5hbWUsICcpLicsIGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBhbmltYXRpb246IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG5cbiAgX3Nob3VsZENvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgdmFyIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5wbGF5U3RhdGUgIT0gJ2ZpbmlzaGVkJykge1xuICAgICAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9LFxuXG4gIF9jb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5uZW9uQW5pbWF0aW9uLmNvbXBsZXRlKGFjdGl2ZUVudHJpZXNbaV0uY29uZmlnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGB0eXBlYC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0eXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdD19IGNvb2tpZVxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSwgY29va2llKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmdldEFuaW1hdGlvbkNvbmZpZyh0eXBlKTtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5fYWN0aXZlIHx8IHt9O1xuICAgIGlmICh0aGlzLl9hY3RpdmVbdHlwZV0pIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKHRoaXMuX2FjdGl2ZVt0eXBlXSk7XG4gICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbnRyaWVzID0gdGhpcy5fY29uZmlndXJlQW5pbWF0aW9ucyhjb25maWdzKTtcblxuICAgIGlmIChhY3RpdmVFbnRyaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlW3R5cGVdID0gYWN0aXZlRW50cmllcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ub25maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZENvbXBsZXRlKGFjdGl2ZUVudHJpZXMpKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGxldGUoYWN0aXZlRW50cmllcyk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICAgICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuX2FjdGl2ZVtrXVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZW50cmllcykge1xuICAgICAgICBlbnRyaWVzW2pdLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB7fTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3IgPVxuICAgIFtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7Ozs7QUFNQTtBQUVBO0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdEJBO0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNIQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSUE7QUF1SUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7OztBIiwic291cmNlUm9vdCI6IiJ9