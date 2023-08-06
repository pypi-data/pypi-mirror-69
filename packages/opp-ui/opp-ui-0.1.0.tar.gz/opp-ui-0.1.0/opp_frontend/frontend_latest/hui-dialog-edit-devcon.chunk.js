(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-devcon"],{

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
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
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function () {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function () {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function () {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function () {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});

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

/***/ "./src/panels/devcon/editor/devcon-editor/hui-devcon-editor.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/devcon/editor/devcon-editor/hui-devcon-editor.ts ***!
  \*********************************************************************/
/*! exports provided: HuiDevconEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDevconEditor", function() { return HuiDevconEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-elements/config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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





let HuiDevconEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-devcon-editor")], function (_initialize, _LitElement) {
  class HuiDevconEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDevconEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "config",
      value: void 0
    }, {
      kind: "get",
      key: "_title",
      value: function _title() {
        if (!this.config) {
          return "";
        }

        return this.config.title || "";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_3__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          label="Title"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this.config) {
          return;
        }

        const target = ev.currentTarget;

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        let newConfig;

        if (target.configValue) {
          newConfig = Object.assign({}, this.config, {
            [target.configValue]: target.value
          });
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "devcon-config-changed", {
          config: newConfig
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/devcon-editor/hui-dialog-edit-devcon.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/devcon/editor/devcon-editor/hui-dialog-edit-devcon.ts ***!
  \**************************************************************************/
/*! exports provided: HuiDialogEditDevcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditDevcon", function() { return HuiDialogEditDevcon; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _hui_devcon_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hui-devcon-editor */ "./src/panels/devcon/editor/devcon-editor/hui-devcon-editor.ts");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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



 // tslint:disable-next-line:no-duplicate-imports





let HuiDialogEditDevcon = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-edit-devcon")], function (_initialize, _LitElement) {
  class HuiDialogEditDevcon extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this._saving = false;
    }

  }

  return {
    F: HuiDialogEditDevcon,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devcon",
      value: void 0
    }, {
      kind: "field",
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_saving",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(devcon) {
        this._devcon = devcon;

        if (this._dialog == null) {
          await this.updateComplete;
        }

        const _config = this._devcon.config,
              devconConfig = _objectWithoutPropertiesLoose(_config, ["views"]);

        this._config = devconConfig;

        this._dialog.open();
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop modal>
        <h2>
          ${this.opp.localize("ui.panel.devcon.editor.edit_devcon.header")}
        </h2>
        <paper-dialog-scrollable>
          ${this.opp.localize("ui.panel.devcon.editor.edit_devcon.explanation")}
          <hui-devcon-editor
            .opp="${this.opp}"
            .config="${this._config}"
            @devcon-config-changed="${this._ConfigChanged}"
          ></hui-devcon-editor
        ></paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._closeDialog}"
            >${this.opp.localize("ui.common.cancel")}</mwc-button
          >
          <mwc-button
            ?disabled="${!this._config || this._saving}"
            @click="${this._save}"
          >
            <paper-spinner
              ?active="${this._saving}"
              alt="Saving"
            ></paper-spinner>
            ${this.opp.localize("ui.common.save")}</mwc-button
          >
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._config = undefined;

        this._dialog.close();
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save() {
        if (!this._config) {
          return;
        }

        if (!this._isConfigChanged()) {
          this._closeDialog();

          return;
        }

        this._saving = true;
        const devcon = this._devcon;
        const config = Object.assign({}, devcon.config, {}, this._config);

        try {
          await devcon.saveConfig(config);

          this._closeDialog();
        } catch (err) {
          alert(`Saving failed: ${err.message}`);
        } finally {
          this._saving = false;
        }
      }
    }, {
      kind: "method",
      key: "_ConfigChanged",
      value: function _ConfigChanged(ev) {
        if (ev.detail && ev.detail.config) {
          this._config = ev.detail.config;
        }
      }
    }, {
      kind: "method",
      key: "_isConfigChanged",
      value: function _isConfigChanged() {
        const _config2 = this._devcon.config,
              devconConfig = _objectWithoutPropertiesLoose(_config2, ["views"]);

        return JSON.stringify(this._config) !== JSON.stringify(devconConfig);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the op-style-dialog max-height on small screens */
          op-paper-dialog {
            max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 660px) {
          op-paper-dialog {
            width: 650px;
          }
        }
        op-paper-dialog {
          max-width: 650px;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWRldmNvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9kZXZjb24tZWRpdG9yL2h1aS1kZXZjb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9kZXZjb24tZWRpdG9yL2h1aS1kaWFsb2ctZWRpdC1kZXZjb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XHJcbmltcG9ydCB7IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5cclxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcclxuXHJcbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXHJcbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xyXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XHJcbiAgICByZXR1cm4gT3BJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxyXG4vLyBleHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZ1xyXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcclxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgXCJvcC1wYXBlci1kaWFsb2dcIjogT3BQYXBlckRpYWxvZztcclxuICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFwZXItZGlhbG9nXCIsIE9wUGFwZXJEaWFsb2cpO1xyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnRWxlbWVudFN0eWxlID0gaHRtbGBcclxuICA8c3R5bGU+XHJcbiAgICBvcC1zd2l0Y2gge1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgICAuc2lkZS1ieS1zaWRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgLnN1ZmZpeCB7XHJcbiAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuYDtcclxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4uL2NvbmZpZy1lbGVtZW50cy9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcblxuaW1wb3J0IHsgRGV2Y29uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XG4gICAgXCJkZXZjb24tY29uZmlnLWNoYW5nZWRcIjoge1xuICAgICAgY29uZmlnOiBEZXZjb25Db25maWc7XG4gICAgfTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kZXZjb24tZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpRGV2Y29uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb25maWc/OiBEZXZjb25Db25maWc7XG5cbiAgZ2V0IF90aXRsZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcudGl0bGUgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aXRsZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aXRsZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQhIGFzIEVkaXRvclRhcmdldDtcblxuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdDb25maWc7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBuZXdDb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICBbdGFyZ2V0LmNvbmZpZ1ZhbHVlXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJkZXZjb24tY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IG5ld0NvbmZpZyB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRldmNvbi1lZGl0b3JcIjogSHVpRGV2Y29uRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBjc3MsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcblxuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4vaHVpLWRldmNvbi1lZGl0b3JcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuaW1wb3J0IHsgRGV2Y29uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LWRldmNvblwiKVxuZXhwb3J0IGNsYXNzIEh1aURpYWxvZ0VkaXREZXZjb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2Y29uPzogRGV2Y29uO1xuXG4gIHByaXZhdGUgX2NvbmZpZz86IERldmNvbkNvbmZpZztcblxuICBwcml2YXRlIF9zYXZpbmc6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhkZXZjb246IERldmNvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2RldmNvbiA9IGRldmNvbjtcbiAgICBpZiAodGhpcy5fZGlhbG9nID09IG51bGwpIHtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgfVxuXG4gICAgY29uc3QgeyB2aWV3cywgLi4uZGV2Y29uQ29uZmlnIH0gPSB0aGlzLl9kZXZjb24hLmNvbmZpZztcbiAgICB0aGlzLl9jb25maWcgPSBkZXZjb25Db25maWcgYXMgRGV2Y29uQ29uZmlnO1xuXG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogT3BQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIm9wLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcCBtb2RhbD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5lZGl0X2RldmNvbi5oZWFkZXJcIil9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5lZGl0X2RldmNvbi5leHBsYW5hdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aHVpLWRldmNvbi1lZGl0b3JcbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jb25maWd9XCJcbiAgICAgICAgICAgIEBkZXZjb24tY29uZmlnLWNoYW5nZWQ9XCIke3RoaXMuX0NvbmZpZ0NoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktZGV2Y29uLWVkaXRvclxuICAgICAgICA+PC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9jbG9zZURpYWxvZ31cIlxuICAgICAgICAgICAgPiR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLmNhbmNlbFwiKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7IXRoaXMuX2NvbmZpZyB8fCB0aGlzLl9zYXZpbmd9XCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fc2F2ZX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgICBhbHQ9XCJTYXZpbmdcIlxuICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLnNhdmVcIil9PC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZURpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlhbG9nLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5faXNDb25maWdDaGFuZ2VkKCkpIHtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2F2aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBkZXZjb24gPSB0aGlzLl9kZXZjb24hO1xuXG4gICAgY29uc3QgY29uZmlnOiBEZXZjb25Db25maWcgPSB7XG4gICAgICAuLi5kZXZjb24uY29uZmlnLFxuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGV2Y29uLnNhdmVDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgU2F2aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfQ29uZmlnQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXYuZGV0YWlsICYmIGV2LmRldGFpbC5jb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNDb25maWdDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgdmlld3MsIC4uLmRldmNvbkNvbmZpZyB9ID0gdGhpcy5fZGV2Y29uIS5jb25maWc7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2NvbmZpZykgIT09IEpTT04uc3RyaW5naWZ5KGRldmNvbkNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAvKiBvdmVycnVsZSB0aGUgb3Atc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICAgIG9wLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIG9wLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogNjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9wLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctZWRpdC1kZXZjb25cIjogSHVpRGlhbG9nRWRpdERldmNvbjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBOENBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBT0E7QUFJQTtBQUNBO0FBYUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBUEE7QUFXQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQS9DQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUErQkE7OztBQUdBOzs7QUFHQTs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7O0FBR0E7Ozs7QUEzQkE7QUFnQ0E7QUEvREE7QUFBQTtBQUFBO0FBQUE7QUFrRUE7QUFDQTtBQUFBO0FBQ0E7QUFwRUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0ZBO0FBQUE7QUFBQTtBQUFBO0FBa0dBO0FBQ0E7QUFDQTtBQUNBO0FBckdBO0FBQUE7QUFBQTtBQUFBO0FBd0dBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUExR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQkE7QUE1SUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=