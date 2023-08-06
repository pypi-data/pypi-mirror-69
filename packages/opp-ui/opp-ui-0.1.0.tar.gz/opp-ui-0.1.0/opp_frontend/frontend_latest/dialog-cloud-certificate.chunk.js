(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-cloud-certificate"],{

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

/***/ "./src/components/dialog/op-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/op-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: OpIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIronFocusablesHelper", function() { return OpIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
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

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const OpIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/op-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/op-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: OpPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperDialog", function() { return OpPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-iron-focusables-helper.js */ "./src/components/dialog/op-iron-focusables-helper.js");


 // tslint:disable-next-line

const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["OpIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class OpPaperDialog extends paperDialogClass {}
// @ts-ignore

class OpPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
customElements.define("op-paper-dialog", OpPaperDialog);

/***/ }),

/***/ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts":
/*!**************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line




let DialogCloudCertificate = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-cloud-certificate")], function (_initialize, _LitElement) {
  class DialogCloudCertificate extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogCloudCertificate,
    d: [{
      kind: "field",
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params; // Wait till dialog is rendered.

        await this.updateComplete;

        this._dialog.open();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          certificateInfo
        } = this._params;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop>
        <h2>
          ${this.opp.localize("ui.panel.config.cloud.dialog_certificate.certificate_information")}
        </h2>
        <div>
          <p>
            ${this.opp.localize("ui.panel.config.cloud.dialog_certificate.certificate_expiration_date")}
            ${Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_4__["formatDateTime"])(new Date(certificateInfo.expire_date), this.opp.language)}<br />
            (${this.opp.localize("ui.panel.config.cloud.dialog_certificate.will_be_auto_renewed")})
          </p>
          <p class="break-word">
            ${this.opp.localize("ui.panel.config.cloud.dialog_certificate.fingerprint")}
            ${certificateInfo.fingerprint}
          </p>
        </div>

        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.opp.localize("ui.panel.config.cloud.dialog_certificate.close")}</mwc-button
          >
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._dialog.close();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          width: 535px;
        }
        .break-word {
          overflow-wrap: break-word;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIGlzIGltcGxlbWVudGVkIGJ5IGVsZW1lbnRzIGNvbnRhaW5pbmdcbiAqIGFuaW1hdGlvbnMgZm9yIHVzZSB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBjb25maWd1cmF0aW9uLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdlbnRyeScgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5lbnRyeWAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZW50cnlBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdleGl0JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmV4aXRgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGV4aXRBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2V4aXRBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gIH0sXG5cbiAgX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZW50cnknXSA9IFt7bmFtZTogdGhpcy5lbnRyeUFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9leGl0QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZXhpdCddID0gW3tuYW1lOiB0aGlzLmV4aXRBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfY29weVByb3BlcnRpZXM6IGZ1bmN0aW9uKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICAvLyBzaGFsbG93bHkgY29weSBwcm9wZXJ0aWVzIGZyb20gY29uZmlnMiB0byBjb25maWcxXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnMVtwcm9wZXJ0eV0gPSBjb25maWcyW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2Nsb25lQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgY2xvbmUgPSB7aXNDbG9uZTogdHJ1ZX07XG4gICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2xvbmUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LFxuXG4gIF9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmU6IGZ1bmN0aW9uKHR5cGUsIG1hcCwgYWxsQ29uZmlncykge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl93YXJuKHRoaXMuX2xvZ2YoXG4gICAgICAgICAgJ3BsYXlBbmltYXRpb24nLFxuICAgICAgICAgICdQbGVhc2UgcHV0IFxcJ2FuaW1hdGlvbkNvbmZpZ1xcJyBpbnNpZGUgb2YgeW91ciBjb21wb25lbnRzIFxcJ3Byb3BlcnRpZXNcXCcgb2JqZWN0IGluc3RlYWQgb2Ygb3V0c2lkZSBvZiBpdC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHlwZSBpcyBvcHRpb25hbFxuICAgIHZhciB0aGlzQ29uZmlnO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpc0NvbmZpZykpIHtcbiAgICAgIHRoaXNDb25maWcgPSBbdGhpc0NvbmZpZ107XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBhbmltYXRpb25zIGFuZCByZWN1cnNlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbnMgZnJvbSBjaGlsZCBub2Rlc1xuICAgIGlmICh0aGlzQ29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gdGhpc0NvbmZpZ1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hbmltYXRhYmxlKSB7XG4gICAgICAgICAgY29uZmlnLmFuaW1hdGFibGUuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgY29uZmlnLnR5cGUgfHwgdHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICBpZiAoY2FjaGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgIC8vIG1lcmdlIGNvbmZpZ3VyYXRpb25zIHdpdGggdGhlIHNhbWUgaWQsIG1ha2luZyBhIGNsb25lIGxhemlseVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlZENvbmZpZy5pc0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSB0aGlzLl9jbG9uZUNvbmZpZyhjYWNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNhY2hlZENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHB1dCBhbnkgY29uZmlncyB3aXRoIGFuIGlkIGludG8gYSBtYXBcbiAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgY2FsbHMgdGhpc1xuICAgKiBtZXRob2QgdG8gY29uZmlndXJlIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIHR5cGUuIEVsZW1lbnRzXG4gICAqIGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgc2hvdWxkIGRlZmluZSB0aGUgcHJvcGVydHlcbiAgICogYGFuaW1hdGlvbkNvbmZpZ2AsIHdoaWNoIGlzIGVpdGhlciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIGEgbWFwIG9mXG4gICAqIGFuaW1hdGlvbiB0eXBlIHRvIGFycmF5IG9mIGNvbmZpZ3VyYXRpb24gb2JqZWN0cy5cbiAgICovXG4gIGdldEFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgYWxsQ29uZmlncyA9IFtdO1xuICAgIHRoaXMuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZSh0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgIC8vIGFwcGVuZCB0aGUgY29uZmlndXJhdGlvbnMgc2F2ZWQgaW4gdGhlIG1hcCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICBhbGxDb25maWdzLnB1c2gobWFwW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gYWxsQ29uZmlncztcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge05lb25BbmltYXRhYmxlQmVoYXZpb3J9IGZyb20gJy4vbmVvbi1hbmltYXRhYmxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBhZGRzIGEgbWV0aG9kIHRvIHJ1biBhbmltYXRpb25zLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsID0ge1xuXG4gIF9jb25maWd1cmVBbmltYXRpb25zOiBmdW5jdGlvbihjb25maWdzKSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcmVzdWx0c1RvUGxheSA9IFtdO1xuXG4gICAgaWYgKGNvbmZpZ3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IGNvbmZpZ3NbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcubmFtZSk7XG4gICAgICAgIC8vIGlzIHRoaXMgZWxlbWVudCBhY3R1YWxseSBhIG5lb24gYW5pbWF0aW9uP1xuICAgICAgICBpZiAobmVvbkFuaW1hdGlvbi5pc05lb25BbmltYXRpb24pIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAvLyBDbG9zdXJlIGNvbXBpbGVyIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGEgdHJ5IC8gY2F0Y2ggaGVyZS5cbiAgICAgICAgICAvLyAuY29uZmlndXJlIG5lZWRzIHRvIGJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGlmICghbmVvbkFuaW1hdGlvbi5jb25maWd1cmUpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAgICAgICAgICogQHJldHVybiB7QW5pbWF0aW9uRWZmZWN0UmVhZE9ubHl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG5lb25BbmltYXRpb24uY29uZmlndXJlID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdCA9IG5lb25BbmltYXRpb24uY29uZmlndXJlKGNvbmZpZyk7XG4gICAgICAgICAgcmVzdWx0c1RvUGxheS5wdXNoKHtcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmlzICsgJzonLCBjb25maWcubmFtZSwgJ25vdCBmb3VuZCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0c1RvUGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNUb1BsYXlbaV0ucmVzdWx0O1xuICAgICAgbGV0IGNvbmZpZyA9IHJlc3VsdHNUb1BsYXlbaV0uY29uZmlnO1xuICAgICAgbGV0IG5lb25BbmltYXRpb24gPSByZXN1bHRzVG9QbGF5W2ldLm5lb25BbmltYXRpb247XG4gICAgICAvLyBjb25maWd1cmF0aW9uIG9yIHBsYXkgY291bGQgZmFpbCBpZiBwb2x5ZmlsbHMgYXJlbid0IGxvYWRlZFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBFZmZlY3QgcmF0aGVyIHRoYW4gYW4gQW5pbWF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LmNhbmNlbCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZG9jdW1lbnQudGltZWxpbmUucGxheShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGRudCBwbGF5JywgJygnLCBjb25maWcubmFtZSwgJykuJywgZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBuZW9uQW5pbWF0aW9uOiBuZW9uQW5pbWF0aW9uLFxuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGFuaW1hdGlvbjogcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSxcblxuICBfc2hvdWxkQ29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICB2YXIgZmluaXNoZWQgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLnBsYXlTdGF0ZSAhPSAnZmluaXNoZWQnKSB7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmluaXNoZWQ7XG4gIH0sXG5cbiAgX2NvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLm5lb25BbmltYXRpb24uY29tcGxldGUoYWN0aXZlRW50cmllc1tpXS5jb25maWcpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUGxheXMgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgYHR5cGVgLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0PX0gY29va2llXG4gICAqL1xuICBwbGF5QW5pbWF0aW9uOiBmdW5jdGlvbih0eXBlLCBjb29raWUpIHtcbiAgICB2YXIgY29uZmlncyA9IHRoaXMuZ2V0QW5pbWF0aW9uQ29uZmlnKHR5cGUpO1xuICAgIGlmICghY29uZmlncykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9hY3RpdmUgfHwge307XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVt0eXBlXSkge1xuICAgICAgdGhpcy5fY29tcGxldGUodGhpcy5fYWN0aXZlW3R5cGVdKTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVudHJpZXMgPSB0aGlzLl9jb25maWd1cmVBbmltYXRpb25zKGNvbmZpZ3MpO1xuXG4gICAgaWYgKGFjdGl2ZUVudHJpZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVbdHlwZV0gPSBhY3RpdmVFbnRyaWVzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5vbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkQ29tcGxldGUoYWN0aXZlRW50cmllcykpIHtcbiAgICAgICAgICB0aGlzLl9jb21wbGV0ZShhY3RpdmVFbnRyaWVzKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgICAgICAgIHRoaXMuZmlyZSgnbmVvbi1hbmltYXRpb24tZmluaXNoJywgY29va2llLCB7YnViYmxlczogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIGNhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgayBpbiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fYWN0aXZlW2tdXG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXNbal0uYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IHt9O1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvciA9XG4gICAgW05lb25BbmltYXRhYmxlQmVoYXZpb3IsIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2dcIjtcbi8vIFRoaXMgaXMgbm90IGEgZHVwbGljYXRlIGltcG9ydCwgb25lIGlzIGZvciB0eXBlcywgb25lIGlzIGZvciBlbGVtZW50LlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcFBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBvcFN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IENsb3VkQ2VydGlmaWNhdGVQYXJhbXMgYXMgQ2xvdWRDZXJ0aWZpY2F0ZURpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlVGltZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiKVxuY2xhc3MgRGlhbG9nQ2xvdWRDZXJ0aWZpY2F0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9wYXJhbXM/OiBDbG91ZENlcnRpZmljYXRlRGlhbG9nUGFyYW1zO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogQ2xvdWRDZXJ0aWZpY2F0ZURpYWxvZ1BhcmFtcykge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICAvLyBXYWl0IHRpbGwgZGlhbG9nIGlzIHJlbmRlcmVkLlxuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IHsgY2VydGlmaWNhdGVJbmZvIH0gPSB0aGlzLl9wYXJhbXM7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZGlhbG9nX2NlcnRpZmljYXRlLmNlcnRpZmljYXRlX2luZm9ybWF0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmRpYWxvZ19jZXJ0aWZpY2F0ZS5jZXJ0aWZpY2F0ZV9leHBpcmF0aW9uX2RhdGVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICR7Zm9ybWF0RGF0ZVRpbWUoXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGNlcnRpZmljYXRlSW5mby5leHBpcmVfZGF0ZSksXG4gICAgICAgICAgICAgIHRoaXMub3BwIS5sYW5ndWFnZVxuICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICgke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZGlhbG9nX2NlcnRpZmljYXRlLndpbGxfYmVfYXV0b19yZW5ld2VkXCJcbiAgICAgICAgICAgICl9KVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImJyZWFrLXdvcmRcIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2VydGlmaWNhdGUuZmluZ2VycHJpbnRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICR7Y2VydGlmaWNhdGVJbmZvLmZpbmdlcnByaW50fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9jbG9zZURpYWxvZ31cIlxuICAgICAgICAgICAgPiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2VydGlmaWNhdGUuY2xvc2VcIlxuICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogT3BQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIm9wLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogNTM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJyZWFrLXdvcmQge1xuICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCI6IERpYWxvZ0Nsb3VkQ2VydGlmaWNhdGU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTs7Ozs7OztBQU1BO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF0QkE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0hBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBJQTtBQXVJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBR0E7Ozs7QUFNQTtBQUdBO0FBSUE7OztBQUtBO0FBR0E7Ozs7O0FBS0E7QUFDQTs7OztBQTlCQTtBQXFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7O0FBQUE7QUFXQTs7O0FBOUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=