(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~op-dialog-add-user"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35vcC1kaWFsb2ctYWRkLXVzZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGlvbi1ydW5uZXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIGlzIGltcGxlbWVudGVkIGJ5IGVsZW1lbnRzIGNvbnRhaW5pbmdcbiAqIGFuaW1hdGlvbnMgZm9yIHVzZSB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBjb25maWd1cmF0aW9uLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdlbnRyeScgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5lbnRyeWAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZW50cnlBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdleGl0JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmV4aXRgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGV4aXRBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2V4aXRBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gIH0sXG5cbiAgX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZW50cnknXSA9IFt7bmFtZTogdGhpcy5lbnRyeUFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9leGl0QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZXhpdCddID0gW3tuYW1lOiB0aGlzLmV4aXRBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfY29weVByb3BlcnRpZXM6IGZ1bmN0aW9uKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICAvLyBzaGFsbG93bHkgY29weSBwcm9wZXJ0aWVzIGZyb20gY29uZmlnMiB0byBjb25maWcxXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnMVtwcm9wZXJ0eV0gPSBjb25maWcyW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2Nsb25lQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgY2xvbmUgPSB7aXNDbG9uZTogdHJ1ZX07XG4gICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2xvbmUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LFxuXG4gIF9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmU6IGZ1bmN0aW9uKHR5cGUsIG1hcCwgYWxsQ29uZmlncykge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl93YXJuKHRoaXMuX2xvZ2YoXG4gICAgICAgICAgJ3BsYXlBbmltYXRpb24nLFxuICAgICAgICAgICdQbGVhc2UgcHV0IFxcJ2FuaW1hdGlvbkNvbmZpZ1xcJyBpbnNpZGUgb2YgeW91ciBjb21wb25lbnRzIFxcJ3Byb3BlcnRpZXNcXCcgb2JqZWN0IGluc3RlYWQgb2Ygb3V0c2lkZSBvZiBpdC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHlwZSBpcyBvcHRpb25hbFxuICAgIHZhciB0aGlzQ29uZmlnO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpc0NvbmZpZykpIHtcbiAgICAgIHRoaXNDb25maWcgPSBbdGhpc0NvbmZpZ107XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBhbmltYXRpb25zIGFuZCByZWN1cnNlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbnMgZnJvbSBjaGlsZCBub2Rlc1xuICAgIGlmICh0aGlzQ29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gdGhpc0NvbmZpZ1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hbmltYXRhYmxlKSB7XG4gICAgICAgICAgY29uZmlnLmFuaW1hdGFibGUuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgY29uZmlnLnR5cGUgfHwgdHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICBpZiAoY2FjaGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgIC8vIG1lcmdlIGNvbmZpZ3VyYXRpb25zIHdpdGggdGhlIHNhbWUgaWQsIG1ha2luZyBhIGNsb25lIGxhemlseVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlZENvbmZpZy5pc0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSB0aGlzLl9jbG9uZUNvbmZpZyhjYWNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNhY2hlZENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHB1dCBhbnkgY29uZmlncyB3aXRoIGFuIGlkIGludG8gYSBtYXBcbiAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgY2FsbHMgdGhpc1xuICAgKiBtZXRob2QgdG8gY29uZmlndXJlIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIHR5cGUuIEVsZW1lbnRzXG4gICAqIGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgc2hvdWxkIGRlZmluZSB0aGUgcHJvcGVydHlcbiAgICogYGFuaW1hdGlvbkNvbmZpZ2AsIHdoaWNoIGlzIGVpdGhlciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIGEgbWFwIG9mXG4gICAqIGFuaW1hdGlvbiB0eXBlIHRvIGFycmF5IG9mIGNvbmZpZ3VyYXRpb24gb2JqZWN0cy5cbiAgICovXG4gIGdldEFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgYWxsQ29uZmlncyA9IFtdO1xuICAgIHRoaXMuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZSh0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgIC8vIGFwcGVuZCB0aGUgY29uZmlndXJhdGlvbnMgc2F2ZWQgaW4gdGhlIG1hcCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICBhbGxDb25maWdzLnB1c2gobWFwW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gYWxsQ29uZmlncztcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge05lb25BbmltYXRhYmxlQmVoYXZpb3J9IGZyb20gJy4vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBhZGRzIGEgbWV0aG9kIHRvIHJ1biBhbmltYXRpb25zLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsID0ge1xuXG4gIF9jb25maWd1cmVBbmltYXRpb25zOiBmdW5jdGlvbihjb25maWdzKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVzdWx0c1RvUGxheSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IGNvbmZpZ3NbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcubmFtZSk7XG4gICAgICAgIC8vIGlzIHRoaXMgZWxlbWVudCBhY3R1YWxseSBhIG5lb24gYW5pbWF0aW9uP1xuICAgICAgICBpZiAobmVvbkFuaW1hdGlvbi5pc05lb25BbmltYXRpb24pIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAvLyBDbG9zdXJlIGNvbXBpbGVyIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGEgdHJ5IC8gY2F0Y2ggaGVyZS5cbiAgICAgICAgICAvLyAuY29uZmlndXJlIG5lZWRzIHRvIGJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGlmICghbmVvbkFuaW1hdGlvbi5jb25maWd1cmUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAgICAgICAgICogQHJldHVybiB7QW5pbWF0aW9uRWZmZWN0UmVhZE9ubHl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lb25BbmltYXRpb24uY29uZmlndXJlID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdCA9IG5lb25BbmltYXRpb24uY29uZmlndXJlKGNvbmZpZyk7XG4gICAgICAgICAgcmVzdWx0c1RvUGxheS5wdXNoKHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJzonLCBjb25maWcubmFtZSwgJ25vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0c1RvUGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNUb1BsYXlbaV0ucmVzdWx0O1xuICAgICAgbGV0IGNvbmZpZyA9IHJlc3VsdHNUb1BsYXlbaV0uY29uZmlnO1xuICAgICAgbGV0IG5lb25BbmltYXRpb24gPSByZXN1bHRzVG9QbGF5W2ldLm5lb25BbmltYXRpb247XG4gICAgICAvLyBjb25maWd1cmF0aW9uIG9yIHBsYXkgY291bGQgZmFpbCBpZiBwb2x5ZmlsbHMgYXJlbid0IGxvYWRlZFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBFZmZlY3QgcmF0aGVyIHRoYW4gYW4gQW5pbWF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmNhbmNlbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQudGltZWxpbmUucGxheShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGRudCBwbGF5JywgJygnLCBjb25maWcubmFtZSwgJykuJywgZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGFuaW1hdGlvbjogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSxcblxuICBfc2hvdWxkQ29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICB2YXIgZmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLnBsYXlTdGF0ZSAhPSAnZmluaXNoZWQnKSB7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmluaXNoZWQ7XG4gIH0sXG5cbiAgX2NvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLm5lb25BbmltYXRpb24uY29tcGxldGUoYWN0aXZlRW50cmllc1tpXS5jb25maWcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUGxheXMgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgYHR5cGVgLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0PX0gY29va2llXG4gICAqL1xuICBwbGF5QW5pbWF0aW9uOiBmdW5jdGlvbih0eXBlLCBjb29raWUpIHtcbiAgICB2YXIgY29uZmlncyA9IHRoaXMuZ2V0QW5pbWF0aW9uQ29uZmlnKHR5cGUpO1xuICAgIGlmICghY29uZmlncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9hY3RpdmUgfHwge307XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVt0eXBlXSkge1xuICAgICAgdGhpcy5fY29tcGxldGUodGhpcy5fYWN0aXZlW3R5cGVdKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVudHJpZXMgPSB0aGlzLl9jb25maWd1cmVBbmltYXRpb25zKGNvbmZpZ3MpO1xuXG4gICAgaWYgKGFjdGl2ZUVudHJpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVbdHlwZV0gPSBhY3RpdmVFbnRyaWVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkQ29tcGxldGUoYWN0aXZlRW50cmllcykpIHtcbiAgICAgICAgICB0aGlzLl9jb21wbGV0ZShhY3RpdmVFbnRyaWVzKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgICAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIGNhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgayBpbiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fYWN0aXZlW2tdXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXNbal0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IHt9O1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvciA9XG4gICAgW05lb25BbmltYXRhYmxlQmVoYXZpb3IsIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7OztBQU1BO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF0QkE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0hBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBJQTtBQXVJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=