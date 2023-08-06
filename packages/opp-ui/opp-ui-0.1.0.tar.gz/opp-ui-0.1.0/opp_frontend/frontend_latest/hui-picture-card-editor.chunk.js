(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-card-editor"],{

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

/***/ "./src/panels/devcon/editor/config-elements/config-elements-style.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/config-elements-style.ts ***!
  \***************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    op-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

/***/ }),

/***/ "./src/panels/devcon/editor/config-elements/hui-picture-card-editor.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-picture-card-editor.ts ***!
  \*****************************************************************************/
/*! exports provided: HuiPictureCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCardEditor", function() { return HuiPictureCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/devcon/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./src/panels/devcon/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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









const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"])({
  type: "string",
  image: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_5__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_5__["actionConfigStruct"]),
  theme: "string?"
});
let HuiPictureCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-picture-card-editor")], function (_initialize, _LitElement) {
  class HuiPictureCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
      }
    }, {
      kind: "get",
      key: "_image",
      value: function _image() {
        return this._config.image || "";
      }
    }, {
      kind: "get",
      key: "_tap_action",
      value: function _tap_action() {
        return this._config.tap_action || {
          action: "none"
        };
      }
    }, {
      kind: "get",
      key: "_hold_action",
      value: function _hold_action() {
        return this._config.hold_action || {
          action: "none"
        };
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "Backend-selected";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const actions = ["navigate", "url", "call-service", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_7__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.image")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
          .value="${this._image}"
          .configValue="${"image"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.tap_action")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .opp="${this.opp}"
            .config="${this._tap_action}"
            .actions="${actions}"
            .configValue="${"tap_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.hold_action")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .opp="${this.opp}"
            .config="${this._hold_action}"
            .actions="${actions}"
            .configValue="${"hold_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
          <hui-theme-select-editor
            .opp="${this.opp}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.opp) {
          return;
        }

        const target = ev.target;

        if (this[`_${target.configValue}`] === target.value || this[`_${target.configValue}`] === target.config) {
          return;
        }

        if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.value ? target.value : target.config
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yL2lyb24tc2Nyb2xsLXRhcmdldC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2NvbmZpZy1lbGVtZW50cy1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1waWN0dXJlLWNhcmQtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogYFBvbHltZXIuSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yYCBhbGxvd3MgYW4gZWxlbWVudCB0byByZXNwb25kIHRvIHNjcm9sbFxuICogZXZlbnRzIGZyb20gYSBkZXNpZ25hdGVkIHNjcm9sbCB0YXJnZXQuXG4gKlxuICogRWxlbWVudHMgdGhhdCBjb25zdW1lIHRoaXMgYmVoYXZpb3IgY2FuIG92ZXJyaWRlIHRoZSBgX3Njcm9sbEhhbmRsZXJgXG4gKiBtZXRob2QgdG8gYWRkIGxvZ2ljIG9uIHRoZSBzY3JvbGwgZXZlbnQuXG4gKlxuICogQGRlbW8gZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuICogQGRlbW8gZGVtby9kb2N1bWVudC5odG1sIERvY3VtZW50IEVsZW1lbnRcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25TY3JvbGxUYXJnZXRCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGhhbmRsZSB0aGUgc2Nyb2xsIGV2ZW50XG4gICAgICogb24gdGhlIGJlaGFsZiBvZiB0aGUgY3VycmVudCBlbGVtZW50LiBUaGlzIGlzIHR5cGljYWxseSBhIHJlZmVyZW5jZSB0byBhblxuICAgICAqZWxlbWVudCwgYnV0IHRoZXJlIGFyZSBhIGZldyBtb3JlIHBvc2liaWxpdGllczpcbiAgICAgKlxuICAgICAqICMjIyBFbGVtZW50cyBpZFxuICAgICAqXG4gICAgICpgYGBodG1sXG4gICAgICogPGRpdiBpZD1cInNjcm9sbGFibGUtZWxlbWVudFwiIHN0eWxlPVwib3ZlcmZsb3c6IGF1dG87XCI+XG4gICAgICogIDx4LWVsZW1lbnQgc2Nyb2xsLXRhcmdldD1cInNjcm9sbGFibGUtZWxlbWVudFwiPlxuICAgICAqICAgIDwhLS0gQ29udGVudC0tPlxuICAgICAqICA8L3gtZWxlbWVudD5cbiAgICAgKiA8L2Rpdj5cbiAgICAgKmBgYFxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGBzY3JvbGxUYXJnZXRgIHdpbGwgcG9pbnQgdG8gdGhlIG91dGVyIGRpdiBlbGVtZW50LlxuICAgICAqXG4gICAgICogIyMjIERvY3VtZW50IHNjcm9sbGluZ1xuICAgICAqXG4gICAgICogRm9yIGRvY3VtZW50IHNjcm9sbGluZywgeW91IGNhbiB1c2UgdGhlIHJlc2VydmVkIHdvcmQgYGRvY3VtZW50YDpcbiAgICAgKlxuICAgICAqYGBgaHRtbFxuICAgICAqIDx4LWVsZW1lbnQgc2Nyb2xsLXRhcmdldD1cImRvY3VtZW50XCI+XG4gICAgICogICA8IS0tIENvbnRlbnQgLS0+XG4gICAgICogPC94LWVsZW1lbnQ+XG4gICAgICpgYGBcbiAgICAgKlxuICAgICAqICMjIyBFbGVtZW50cyByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqYGBganNcbiAgICAgKiBhcHBIZWFkZXIuc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njcm9sbGFibGUtZWxlbWVudCcpO1xuICAgICAqYGBgXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICogQGRlZmF1bHQgZG9jdW1lbnRcbiAgICAgKi9cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIHR5cGU6IEhUTUxFbGVtZW50LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFNjcm9sbFRhcmdldDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zY3JvbGxUYXJnZXRDaGFuZ2VkKHNjcm9sbFRhcmdldCwgaXNBdHRhY2hlZCknXSxcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIGJlIGluc3RhbGxlZC5cbiAgICovXG4gIF9zaG91bGRIYXZlTGlzdGVuZXI6IHRydWUsXG5cbiAgX3Njcm9sbFRhcmdldENoYW5nZWQ6IGZ1bmN0aW9uKHNjcm9sbFRhcmdldCwgaXNBdHRhY2hlZCkge1xuICAgIHZhciBldmVudFRhcmdldDtcblxuICAgIGlmICh0aGlzLl9vbGRTY3JvbGxUYXJnZXQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZVNjcm9sbExpc3RlbmVyKGZhbHNlLCB0aGlzLl9vbGRTY3JvbGxUYXJnZXQpO1xuICAgICAgdGhpcy5fb2xkU2Nyb2xsVGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFpc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZWxlbWVudCBpZCByZWZlcmVuY2VzXG4gICAgaWYgKHNjcm9sbFRhcmdldCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSB0aGlzLl9kb2M7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzY3JvbGxUYXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZG9tSG9zdCA9IHRoaXMuZG9tSG9zdDtcblxuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQgPSBkb21Ib3N0ICYmIGRvbUhvc3QuJCA/XG4gICAgICAgICAgZG9tSG9zdC4kW3Njcm9sbFRhcmdldF0gOlxuICAgICAgICAgIGRvbSh0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgc2Nyb2xsVGFyZ2V0KTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICB0aGlzLl9vbGRTY3JvbGxUYXJnZXQgPSBzY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcih0aGlzLl9zaG91bGRIYXZlTGlzdGVuZXIsIHNjcm9sbFRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSdW5zIG9uIGV2ZXJ5IHNjcm9sbCBldmVudC4gQ29uc3VtZXIgb2YgdGhpcyBiZWhhdmlvciBtYXkgb3ZlcnJpZGUgdGhpc1xuICAgKiBtZXRob2QuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge30sXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHNjcm9sbCB0YXJnZXQuIENvbnN1bWVycyBvZiB0aGlzIGJlaGF2aW9yIG1heSB3YW50IHRvIGN1c3RvbWl6ZVxuICAgKiB0aGUgZGVmYXVsdCBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGdldCBfZGVmYXVsdFNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3IgdGhlIGRvY3VtZW50IGVsZW1lbnRcbiAgICpcbiAgICogQHR5cGUge0VsZW1lbnR9XG4gICAqL1xuICBnZXQgX2RvYygpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWRcbiAgICogdXB3YXJkLlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUb3AoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cucGFnZVlPZmZzZXQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCB0byB0aGVcbiAgICogbGVmdC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsTGVmdCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZFNjcm9sbFRhcmdldCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYyA/IHdpbmRvdy5wYWdlWE9mZnNldCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRoYXQgdGhlIGNvbnRlbnQgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZFxuICAgKiB1cHdhcmQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBzZXQgX3Njcm9sbFRvcCh0b3ApIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgPT09IHRoaXMuX2RvYykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCwgdG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgdG8gdGhlXG4gICAqIGxlZnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBzZXQgX3Njcm9sbExlZnQobGVmdCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8obGVmdCwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBjb250ZW50IHRvIGEgcGFydGljdWxhciBwbGFjZS5cbiAgICpcbiAgICogQG1ldGhvZCBzY3JvbGxcbiAgICogQHBhcmFtIHtudW1iZXJ8IXtsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfX0gbGVmdE9yT3B0aW9ucyBUaGUgbGVmdCBwb3NpdGlvbiBvciBzY3JvbGwgb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcj19IHRvcCBUaGUgdG9wIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzY3JvbGw6IGZ1bmN0aW9uKGxlZnRPck9wdGlvbnMsIHRvcCkge1xuICAgIHZhciBsZWZ0O1xuXG4gICAgaWYgKHR5cGVvZiBsZWZ0T3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgbGVmdCA9IGxlZnRPck9wdGlvbnMubGVmdDtcbiAgICAgIHRvcCA9IGxlZnRPck9wdGlvbnMudG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gbGVmdE9yT3B0aW9ucztcbiAgICB9XG5cbiAgICBsZWZ0ID0gbGVmdCB8fCAwO1xuICAgIHRvcCA9IHRvcCB8fCAwO1xuICAgIGlmICh0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcy5fZG9jKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8obGVmdCwgdG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIHRhcmdldC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBfc2Nyb2xsVGFyZ2V0V2lkdGgoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cuaW5uZXJXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGwgdGFyZ2V0LlxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IF9zY3JvbGxUYXJnZXRIZWlnaHQoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWRTY3JvbGxUYXJnZXQoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNjcm9sbCB0YXJnZXQgaXMgYSB2YWxpZCBIVE1MRWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc1ZhbGlkU2Nyb2xsVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfSxcblxuICBfdG9nZ2xlU2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKHllcywgc2Nyb2xsVGFyZ2V0KSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzLl9kb2MgPyB3aW5kb3cgOiBzY3JvbGxUYXJnZXQ7XG4gICAgaWYgKHllcykge1xuICAgICAgaWYgKCF0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyID0gdGhpcy5fc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZFNjcm9sbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fYm91bmRTY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2JvdW5kU2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0geWVzIFRydWUgdG8gYWRkIHRoZSBldmVudCwgRmFsc2UgdG8gcmVtb3ZlIGl0LlxuICAgKi9cbiAgdG9nZ2xlU2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKHllcykge1xuICAgIHRoaXMuX3Nob3VsZEhhdmVMaXN0ZW5lciA9IHllcztcbiAgICB0aGlzLl90b2dnbGVTY3JvbGxMaXN0ZW5lcih5ZXMsIHRoaXMuc2Nyb2xsVGFyZ2V0KTtcbiAgfVxuXG59O1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXHJcbiAgPHN0eWxlPlxyXG4gICAgb3Atc3dpdGNoIHtcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgfVxyXG4gICAgLnNpZGUtYnktc2lkZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuc2lkZS1ieS1zaWRlID4gKiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5zdWZmaXgge1xyXG4gICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgfVxyXG4gIDwvc3R5bGU+XHJcbmA7XHJcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS1hY3Rpb24tZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7XG4gIEVudGl0aWVzRWRpdG9yRXZlbnQsXG4gIEVkaXRvclRhcmdldCxcbiAgYWN0aW9uQ29uZmlnU3RydWN0LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBQaWN0dXJlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgaW1hZ2U6IFwic3RyaW5nP1wiLFxuICB0YXBfYWN0aW9uOiBzdHJ1Y3Qub3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0KSxcbiAgaG9sZF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICB0aGVtZTogXCJzdHJpbmc/XCIsXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGljdHVyZS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVBpY3R1cmVDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIERldmNvbkNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwPzogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBQaWN0dXJlQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGljdHVyZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9pbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmltYWdlIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3RhcF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50YXBfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICB9XG5cbiAgZ2V0IF9ob2xkX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmhvbGRfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICB9XG5cbiAgZ2V0IF90aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRoZW1lIHx8IFwiQmFja2VuZC1zZWxlY3RlZFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1wibmF2aWdhdGVcIiwgXCJ1cmxcIiwgXCJjYWxsLXNlcnZpY2VcIiwgXCJub25lXCJdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5pbWFnZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pbWFnZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJpbWFnZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxodWktYWN0aW9uLWVkaXRvclxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy50YXBfYWN0aW9uXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl90YXBfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRhcF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuaG9sZF9hY3Rpb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2hvbGRfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvbGRfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPGh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aGVtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICAgIEB0aGVtZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuXG4gICAgaWYgKFxuICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUgfHxcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LmNvbmZpZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlID8gdGFyZ2V0LnZhbHVlIDogdGFyZ2V0LmNvbmZpZyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXBpY3R1cmUtY2FyZC1lZGl0b3JcIjogSHVpUGljdHVyZUNhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQVdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckNBO0FBNkNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExUEE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTFDQTtBQStDQTtBQWpGQTtBQUFBO0FBQUE7QUFBQTtBQW9GQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUExR0E7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=