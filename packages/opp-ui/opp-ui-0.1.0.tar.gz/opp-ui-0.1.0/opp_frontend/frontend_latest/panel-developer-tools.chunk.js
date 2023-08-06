(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-developer-tools"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  /** @override */
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function () {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
const isComponentLoaded = (opp, component) => opp && opp.config.components.indexOf(component) !== -1;

/***/ }),

/***/ "./src/common/dom/scroll-to-target.ts":
/*!********************************************!*\
  !*** ./src/common/dom/scroll-to-target.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollToTarget; });
/**
 * Scroll to a specific y coordinate.
 *
 * Copied from paper-scroll-header-panel.
 *
 * @method scroll
 * @param {number} top The coordinate to scroll to, along the y-axis.
 * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
 */
function scrollToTarget(element, target) {
  // the scroll event will trigger _updateScrollState directly,
  // However, _updateScrollState relies on the previous `scrollTop` to update the states.
  // Calling _updateScrollState will ensure that the states are synced correctly.
  const top = 0;
  const scroller = target;

  const easingFn = function easeOutQuad(t, b, c, d) {
    /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
    t /= d;
    return -c * t * (t - 2) + b;
    /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
  };

  const animationId = Math.random();
  const duration = 200;
  const startTime = Date.now();
  const currentScrollTop = scroller.scrollTop;
  const deltaScrollTop = top - currentScrollTop;
  element._currentAnimationId = animationId;
  (function updateFrame() {
    const now = Date.now();
    const elapsedTime = now - startTime;

    if (elapsedTime > duration) {
      scroller.scrollTop = top;
    } else if (element._currentAnimationId === animationId) {
      scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
      requestAnimationFrame(updateFrame.bind(element));
    }
  }).call(element);
}

/***/ }),

/***/ "./src/panels/developer-tools/developer-tools-router.ts":
/*!**************************************************************!*\
  !*** ./src/panels/developer-tools/developer-tools-router.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/opp-router-page */ "./src/layouts/opp-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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




let DeveloperToolsRouter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("developer-tools-router")], function (_initialize, _OppRouterPage) {
  class DeveloperToolsRouter extends _OppRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DeveloperToolsRouter,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          // defaultPage: "info",
          beforeRender: page => {
            if (!page || page === "not_found") {
              // If we can, we are going to restore the last visited page.
              return this._currentPage ? this._currentPage : "info";
            }

            return undefined;
          },
          cacheAll: true,
          showLoading: true,
          routes: {
            event: {
              tag: "developer-tools-event",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(9), __webpack_require__.e(22), __webpack_require__.e(2), __webpack_require__.e(8), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ./event/developer-tools-event */ "./src/panels/developer-tools/event/developer-tools-event.js"))
            },
            info: {
              tag: "developer-tools-info",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, /*! ./info/developer-tools-info */ "./src/panels/developer-tools/info/developer-tools-info.ts"))
            },
            logs: {
              tag: "developer-tools-logs",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e(2), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./logs/developer-tools-logs */ "./src/panels/developer-tools/logs/developer-tools-logs.ts"))
            },
            mqtt: {
              tag: "developer-tools-mqtt",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(25), __webpack_require__.e(2), __webpack_require__.e(8), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, /*! ./mqtt/developer-tools-mqtt */ "./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts"))
            },
            service: {
              tag: "developer-tools-service",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(17), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(8), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./service/developer-tools-service */ "./src/panels/developer-tools/service/developer-tools-service.js"))
            },
            state: {
              tag: "developer-tools-state",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(7), __webpack_require__.e(9), __webpack_require__.e(18), __webpack_require__.e(5), __webpack_require__.e(6), __webpack_require__.e(8), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./state/developer-tools-state */ "./src/panels/developer-tools/state/developer-tools-state.js"))
            },
            template: {
              tag: "developer-tools-template",
              load: () => Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ./template/developer-tools-template */ "./src/panels/developer-tools/template/developer-tools-template.js"))
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        if ("setProperties" in el) {
          // As long as we have Polymer pages
          el.setProperties({
            opp: this.opp,
            narrow: this.narrow
          });
        } else {
          el.opp = this.opp;
          el.narrow = this.narrow;
        }
      }
    }]
  };
}, _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_0__["OppRouterPage"]);

/***/ }),

/***/ "./src/panels/developer-tools/op-panel-developer-tools.ts":
/*!****************************************************************!*\
  !*** ./src/panels/developer-tools/op-panel-developer-tools.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _developer_tools_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./developer-tools-router */ "./src/panels/developer-tools/developer-tools-router.ts");
/* harmony import */ var _common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/scroll-to-target */ "./src/common/dom/scroll-to-target.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
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















let PanelDeveloperTools = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-panel-developer-tools")], function (_initialize, _LitElement) {
  class PanelDeveloperTools extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: PanelDeveloperTools,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const page = this._page;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <app-header-layout has-scrolling-region>
        <app-header fixed slot="header">
          <app-toolbar>
            <op-menu-button
              .opp=${this.opp}
              .narrow=${this.narrow}
            ></op-menu-button>
            <div main-title>${this.opp.localize("panel.developer_tools")}</div>
          </app-toolbar>
          <paper-tabs
            scrollable
            attr-for-selected="page-name"
            .selected=${page}
            @iron-activate=${this.handlePageSelected}
          >
            <paper-tab page-name="state">
              ${this.opp.localize("ui.panel.developer-tools.tabs.states.title")}
            </paper-tab>
            <paper-tab page-name="service">
              ${this.opp.localize("ui.panel.developer-tools.tabs.services.title")}
            </paper-tab>
            <paper-tab page-name="logs">
              ${this.opp.localize("ui.panel.developer-tools.tabs.logs.title")}
            </paper-tab>
            <paper-tab page-name="template">
              ${this.opp.localize("ui.panel.developer-tools.tabs.templates.title")}
            </paper-tab>
            <paper-tab page-name="event">
              ${this.opp.localize("ui.panel.developer-tools.tabs.events.title")}
            </paper-tab>
            ${Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["isComponentLoaded"])(this.opp, "mqtt") ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-tab page-name="mqtt">
                    ${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.title")}
                  </paper-tab>
                ` : ""}
            <paper-tab page-name="info">
              ${this.opp.localize("ui.panel.developer-tools.tabs.info.title")}
            </paper-tab>
          </paper-tabs>
        </app-header>
        <developer-tools-router
          .route=${this.route}
          .narrow=${this.narrow}
          .opp=${this.opp}
        ></developer-tools-router>
      </app-header-layout>
    `;
      }
    }, {
      kind: "method",
      key: "handlePageSelected",
      value: function handlePageSelected(ev) {
        const newPage = ev.detail.item.getAttribute("page-name");

        if (newPage !== this._page) {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_11__["navigate"])(this, `/developer-tools/${newPage}`);
        }

        Object(_common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_9__["default"])(this, // @ts-ignore
        this.shadowRoot.querySelector("app-header-layout").header.scrollTarget);
      }
    }, {
      kind: "get",
      key: "_page",
      value: function _page() {
        return this.route.path.substr(1);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          color: var(--primary-text-color);
          --paper-card-header-color: var(--primary-text-color);
        }
        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: #fff;
          text-transform: uppercase;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtZGV2ZWxvcGVyLXRvb2xzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zY3JvbGwtdG8tdGFyZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2RldmVsb3Blci10b29scy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvb3AtcGFuZWwtZGV2ZWxvcGVyLXRvb2xzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge0FwcExheW91dEJlaGF2aW9yfSBmcm9tICcuLi9hcHAtbGF5b3V0LWJlaGF2aW9yL2FwcC1sYXlvdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbmFwcC1oZWFkZXItbGF5b3V0IGlzIGEgd3JhcHBlciBlbGVtZW50IHRoYXQgcG9zaXRpb25zIGFuIGFwcC1oZWFkZXIgYW5kIG90aGVyXG5jb250ZW50LiBUaGlzIGVsZW1lbnQgdXNlcyB0aGUgZG9jdW1lbnQgc2Nyb2xsIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYWxzb1xuZGVmaW5lIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cblxuVXNpbmcgdGhlIGRvY3VtZW50IHNjcm9sbDpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0PlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5Vc2luZyBhbiBvd24gc2Nyb2xsaW5nIHJlZ2lvbjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5BZGQgdGhlIGBmdWxsYmxlZWRgIGF0dHJpYnV0ZSB0byBhcHAtaGVhZGVyLWxheW91dCB0byBtYWtlIGl0IGZpdCB0aGUgc2l6ZSBvZlxuaXRzIGNvbnRhaW5lcjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGZ1bGxibGVlZD5cbiAuLi5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQGVsZW1lbnQgYXBwLWhlYWRlci1sYXlvdXRcbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2ltcGxlLmh0bWwgU2ltcGxlIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vbXVzaWMuaHRtbCBNdXNpYyBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL2Zvb3Rlci5odG1sIEZvb3RlciBEZW1vXG4qL1xuUG9seW1lcih7XG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlcixcbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnYXBwLWhlYWRlci1sYXlvdXQnLFxuICBiZWhhdmlvcnM6IFtBcHBMYXlvdXRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBjdXJyZW50IGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBkb2N1bWVudCBzY3JvbGwgdG8gY29udHJvbCB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhhc1Njcm9sbGluZ1JlZ2lvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydyZXNldExheW91dChpc0F0dGFjaGVkLCBoYXNTY3JvbGxpbmdSZWdpb24pJ10sXG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhcHAtaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBoZWFkZXJcbiAgICovXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvbSh0aGlzLiQuaGVhZGVyU2xvdCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpWzBdO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhaGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbGl6aW5nIGNsYXNzLCB3aGljaCBzdGF0aWNseSBwb3NpdGlvbnMgdGhlIGhlYWRlciBhbmRcbiAgICAvLyB0aGUgY29udGVudCB1bnRpbCB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy4kLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgLy8gVXBkYXRlIHNjcm9sbCB0YXJnZXQuXG4gICAgaGVhZGVyLnNjcm9sbFRhcmdldCA9IHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uID9cbiAgICAgICAgdGhpcy4kLmNvbnRlbnRDb250YWluZXIgOlxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vIEdldCBoZWFkZXIgaGVpZ2h0IGhlcmUgc28gdGhhdCBzdHlsZSByZWFkcyBhcmUgYmF0Y2hlZCB0b2dldGhlciBiZWZvcmVcbiAgICAvLyBzdHlsZSB3cml0ZXMgKGkuZS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYmVsb3cpLlxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFVwZGF0ZSB0aGUgaGVhZGVyIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICBoZWFkZXIuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9IHJpZ2h0T2Zmc2V0ICsgJ3B4JztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGNvbnRhaW5lciBwb3NpdGlvbi5cbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZTtcbiAgICBpZiAoaGVhZGVyLmZpeGVkICYmICFoZWFkZXIuY29uZGVuc2VzICYmIHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHNpemUgZG9lcyBub3QgY2hhbmdlIGFuZCB3ZSdyZSB1c2luZyBhIHNjcm9sbGluZyByZWdpb24sXG4gICAgICAvLyBleGNsdWRlIHRoZSBoZWFkZXIgYXJlYSBmcm9tIHRoZSBzY3JvbGxpbmcgcmVnaW9uIHNvIHRoYXQgdGhlIGhlYWRlclxuICAgICAgLy8gZG9lc24ndCBvdmVybGFwIHRoZSBzY3JvbGxiYXIuXG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuID0+IG9wcCAmJiBvcHAuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsIi8qKlxuICogU2Nyb2xsIHRvIGEgc3BlY2lmaWMgeSBjb29yZGluYXRlLlxuICpcbiAqIENvcGllZCBmcm9tIHBhcGVyLXNjcm9sbC1oZWFkZXItcGFuZWwuXG4gKlxuICogQG1ldGhvZCBzY3JvbGxcbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIGNvb3JkaW5hdGUgdG8gc2Nyb2xsIHRvLCBhbG9uZyB0aGUgeS1heGlzLlxuICogQHBhcmFtIHtib29sZWFufSBzbW9vdGggdHJ1ZSBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIHNob3VsZCBiZSBzbW9vdGhseSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9UYXJnZXQoZWxlbWVudCwgdGFyZ2V0KSB7XG4gIC8vIHRoZSBzY3JvbGwgZXZlbnQgd2lsbCB0cmlnZ2VyIF91cGRhdGVTY3JvbGxTdGF0ZSBkaXJlY3RseSxcbiAgLy8gSG93ZXZlciwgX3VwZGF0ZVNjcm9sbFN0YXRlIHJlbGllcyBvbiB0aGUgcHJldmlvdXMgYHNjcm9sbFRvcGAgdG8gdXBkYXRlIHRoZSBzdGF0ZXMuXG4gIC8vIENhbGxpbmcgX3VwZGF0ZVNjcm9sbFN0YXRlIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHN0YXRlcyBhcmUgc3luY2VkIGNvcnJlY3RseS5cbiAgY29uc3QgdG9wID0gMDtcbiAgY29uc3Qgc2Nyb2xsZXIgPSB0YXJnZXQ7XG4gIGNvbnN0IGVhc2luZ0ZuID0gZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBzcGFjZS1pbmZpeC1vcHMsIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgIHQgLz0gZDtcbiAgICByZXR1cm4gLWMgKiB0ICogKHQgLSAyKSArIGI7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgc3BhY2UtaW5maXgtb3BzLCBuby1taXhlZC1vcGVyYXRvcnMgKi9cbiAgfTtcbiAgY29uc3QgYW5pbWF0aW9uSWQgPSBNYXRoLnJhbmRvbSgpO1xuICBjb25zdCBkdXJhdGlvbiA9IDIwMDtcbiAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHNjcm9sbGVyLnNjcm9sbFRvcDtcbiAgY29uc3QgZGVsdGFTY3JvbGxUb3AgPSB0b3AgLSBjdXJyZW50U2Nyb2xsVG9wO1xuICBlbGVtZW50Ll9jdXJyZW50QW5pbWF0aW9uSWQgPSBhbmltYXRpb25JZDtcbiAgKGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSBub3cgLSBzdGFydFRpbWU7XG4gICAgaWYgKGVsYXBzZWRUaW1lID4gZHVyYXRpb24pIHtcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuX2N1cnJlbnRBbmltYXRpb25JZCA9PT0gYW5pbWF0aW9uSWQpIHtcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IGVhc2luZ0ZuKFxuICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgY3VycmVudFNjcm9sbFRvcCxcbiAgICAgICAgZGVsdGFTY3JvbGxUb3AsXG4gICAgICAgIGR1cmF0aW9uXG4gICAgICApO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUZyYW1lLmJpbmQoZWxlbWVudCkpO1xuICAgIH1cbiAgfS5jYWxsKGVsZW1lbnQpKTtcbn1cbiIsImltcG9ydCB7IE9wcFJvdXRlclBhZ2UsIFJvdXRlck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9vcHAtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZGV2ZWxvcGVyLXRvb2xzLXJvdXRlclwiKVxuY2xhc3MgRGV2ZWxvcGVyVG9vbHNSb3V0ZXIgZXh0ZW5kcyBPcHBSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIC8vIGRlZmF1bHRQYWdlOiBcImluZm9cIixcbiAgICBiZWZvcmVSZW5kZXI6IChwYWdlKSA9PiB7XG4gICAgICBpZiAoIXBhZ2UgfHwgcGFnZSA9PT0gXCJub3RfZm91bmRcIikge1xuICAgICAgICAvLyBJZiB3ZSBjYW4sIHdlIGFyZSBnb2luZyB0byByZXN0b3JlIHRoZSBsYXN0IHZpc2l0ZWQgcGFnZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlID8gdGhpcy5fY3VycmVudFBhZ2UgOiBcImluZm9cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBjYWNoZUFsbDogdHJ1ZSxcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGV2ZW50OiB7XG4gICAgICAgIHRhZzogXCJkZXZlbG9wZXItdG9vbHMtZXZlbnRcIixcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KFwiLi9ldmVudC9kZXZlbG9wZXItdG9vbHMtZXZlbnRcIiksXG4gICAgICB9LFxuICAgICAgaW5mbzoge1xuICAgICAgICB0YWc6IFwiZGV2ZWxvcGVyLXRvb2xzLWluZm9cIixcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KFwiLi9pbmZvL2RldmVsb3Blci10b29scy1pbmZvXCIpLFxuICAgICAgfSxcbiAgICAgIGxvZ3M6IHtcbiAgICAgICAgdGFnOiBcImRldmVsb3Blci10b29scy1sb2dzXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydChcIi4vbG9ncy9kZXZlbG9wZXItdG9vbHMtbG9nc1wiKSxcbiAgICAgIH0sXG4gICAgICBtcXR0OiB7XG4gICAgICAgIHRhZzogXCJkZXZlbG9wZXItdG9vbHMtbXF0dFwiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL21xdHQvZGV2ZWxvcGVyLXRvb2xzLW1xdHRcIiksXG4gICAgICB9LFxuICAgICAgc2VydmljZToge1xuICAgICAgICB0YWc6IFwiZGV2ZWxvcGVyLXRvb2xzLXNlcnZpY2VcIixcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KFwiLi9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlXCIpLFxuICAgICAgfSxcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHRhZzogXCJkZXZlbG9wZXItdG9vbHMtc3RhdGVcIixcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KFwiLi9zdGF0ZS9kZXZlbG9wZXItdG9vbHMtc3RhdGVcIiksXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgdGFnOiBcImRldmVsb3Blci10b29scy10ZW1wbGF0ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL3RlbXBsYXRlL2RldmVsb3Blci10b29scy10ZW1wbGF0ZVwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKGVsKSB7XG4gICAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIGVsKSB7XG4gICAgICAvLyBBcyBsb25nIGFzIHdlIGhhdmUgUG9seW1lciBwYWdlc1xuICAgICAgKGVsIGFzIFBvbHltZXJFbGVtZW50KS5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgb3BwOiB0aGlzLm9wcCxcbiAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5vcHAgPSB0aGlzLm9wcDtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGV2ZWxvcGVyLXRvb2xzLXJvdXRlclwiOiBEZXZlbG9wZXJUb29sc1JvdXRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFic1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuL2RldmVsb3Blci10b29scy1yb3V0ZXJcIjtcblxuaW1wb3J0IHNjcm9sbFRvVGFyZ2V0IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3Njcm9sbC10by10YXJnZXRcIjtcblxuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyLCBSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1wYW5lbC1kZXZlbG9wZXItdG9vbHNcIilcbmNsYXNzIFBhbmVsRGV2ZWxvcGVyVG9vbHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5fcGFnZTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZml4ZWQgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxvcC1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgID48L29wLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPiR7dGhpcy5vcHAubG9jYWxpemUoXCJwYW5lbC5kZXZlbG9wZXJfdG9vbHNcIil9PC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgICA8cGFwZXItdGFic1xuICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJwYWdlLW5hbWVcIlxuICAgICAgICAgICAgLnNlbGVjdGVkPSR7cGFnZX1cbiAgICAgICAgICAgIEBpcm9uLWFjdGl2YXRlPSR7dGhpcy5oYW5kbGVQYWdlU2VsZWN0ZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLXRhYiBwYWdlLW5hbWU9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuc3RhdGVzLnRpdGxlXCIpfVxuICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cInNlcnZpY2VcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLnNlcnZpY2VzLnRpdGxlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgPHBhcGVyLXRhYiBwYWdlLW5hbWU9XCJsb2dzXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5sb2dzLnRpdGxlXCIpfVxuICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy50ZW1wbGF0ZXMudGl0bGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5ldmVudHMudGl0bGVcIil9XG4gICAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgICAgICR7aXNDb21wb25lbnRMb2FkZWQodGhpcy5vcHAsIFwibXF0dFwiKVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cIm1xdHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLm1xdHQudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmluZm8udGl0bGVcIil9XG4gICAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cbiAgICAgICAgPGRldmVsb3Blci10b29scy1yb3V0ZXJcbiAgICAgICAgICAucm91dGU9JHt0aGlzLnJvdXRlfVxuICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgID48L2RldmVsb3Blci10b29scy1yb3V0ZXI+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBhZ2VTZWxlY3RlZChldikge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSBldi5kZXRhaWwuaXRlbS5nZXRBdHRyaWJ1dGUoXCJwYWdlLW5hbWVcIik7XG4gICAgaWYgKG5ld1BhZ2UgIT09IHRoaXMuX3BhZ2UpIHtcbiAgICAgIG5hdmlnYXRlKHRoaXMsIGAvZGV2ZWxvcGVyLXRvb2xzLyR7bmV3UGFnZX1gKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1RhcmdldChcbiAgICAgIHRoaXMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJhcHAtaGVhZGVyLWxheW91dFwiKS5oZWFkZXIuc2Nyb2xsVGFyZ2V0XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9wYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGguc3Vic3RyKDEpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci10YWJzIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAtLXBhcGVyLXRhYnMtc2VsZWN0aW9uLWJhci1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLXBhbmVsLWRldmVsb3Blci10b29sc1wiOiBQYW5lbERldmVsb3BlclRvb2xzO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFpRkE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5SUE7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQXpCQTtBQVhBOzs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUExREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUtBOzs7QUFHQTs7O0FBS0E7O0FBRUE7O0FBR0E7O0FBSEE7O0FBVUE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFwREE7QUF3REE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBQUE7QUFjQTs7O0FBakdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=