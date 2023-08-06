(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-move-card-view~hui-dialog-select-view"],{

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

/***/ "./src/panels/devcon/components/hui-views-list.ts":
/*!********************************************************!*\
  !*** ./src/panels/devcon/components/hui-views-list.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _src_components_op_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _src_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








let HuiViewsList = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-views-list")], function (_initialize, _LitElement) {
  class HuiViewsList extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiViewsList,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devconConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "selected",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.devconConfig) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <paper-listbox attr-for-selected="data-index" .selected=${this.selected}>
        ${this.devconConfig.views.map((view, index) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <paper-icon-item @click=${this._handlePickView} data-index=${index}>
              ${view.icon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <op-icon .icon=${view.icon} slot="item-icon"></op-icon>
                  ` : ""}
              ${view.title || view.path}
            </paper-icon-item>
          `)}
      </paper-listbox>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HuiViewsList.prototype), "updated", this).call(this, changedProps);

        Object(_src_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_4__["toggleAttribute"])(this, "hide-icons", this.devconConfig ? !this.devconConfig.views.some(view => view.icon) : true);
      }
    }, {
      kind: "method",
      key: "_handlePickView",
      value: async function _handlePickView(ev) {
        const view = Number(ev.currentTarget.getAttribute("data-index"));
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "view-selected", {
          view
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      paper-listbox {
        padding-top: 0;
      }

      paper-listbox op-icon {
        padding: 12px;
        color: var(--secondary-text-color);
      }

      paper-icon-item {
        cursor: pointer;
      }

      paper-icon-item[disabled] {
        cursor: initial;
      }

      :host([hide-icons]) paper-icon-item {
        --paper-item-icon-width: 0px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld35odWktZGlhbG9nLXNlbGVjdC12aWV3LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tcG9uZW50cy9odWktdmlld3MtbGlzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XHJcbmltcG9ydCB7IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5cclxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcclxuXHJcbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXHJcbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xyXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XHJcbiAgICByZXR1cm4gT3BJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxyXG4vLyBleHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZ1xyXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcclxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgXCJvcC1wYXBlci1kaWFsb2dcIjogT3BQYXBlckRpYWxvZztcclxuICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFwZXItZGlhbG9nXCIsIE9wUGFwZXJEaWFsb2cpO1xyXG4iLCJpbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29wLWljb25cIjtcbmltcG9ydCB7IHRvZ2dsZUF0dHJpYnV0ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL2RvbS90b2dnbGVfYXR0cmlidXRlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBEZXZjb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgT1BQRG9tRXZlbnRzIHtcbiAgICBcInZpZXctc2VsZWN0ZWRcIjoge1xuICAgICAgdmlldzogbnVtYmVyO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdmlld3MtbGlzdFwiKVxuY2xhc3MgSHVpVmlld3NMaXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZGV2Y29uQ29uZmlnPzogRGV2Y29uQ29uZmlnIHwgdW5kZWZpbmVkO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIHNlbGVjdGVkPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5kZXZjb25Db25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItbGlzdGJveCBhdHRyLWZvci1zZWxlY3RlZD1cImRhdGEtaW5kZXhcIiAuc2VsZWN0ZWQ9JHt0aGlzLnNlbGVjdGVkfT5cbiAgICAgICAgJHt0aGlzLmRldmNvbkNvbmZpZy52aWV3cy5tYXAoXG4gICAgICAgICAgKHZpZXcsIGluZGV4KSA9PiBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBAY2xpY2s9JHt0aGlzLl9oYW5kbGVQaWNrVmlld30gZGF0YS1pbmRleD0ke2luZGV4fT5cbiAgICAgICAgICAgICAgJHt2aWV3Lmljb25cbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxvcC1pY29uIC5pY29uPSR7dmlldy5pY29ufSBzbG90PVwiaXRlbS1pY29uXCI+PC9vcC1pY29uPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgJHt2aWV3LnRpdGxlIHx8IHZpZXcucGF0aH1cbiAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRvZ2dsZUF0dHJpYnV0ZShcbiAgICAgIHRoaXMsXG4gICAgICBcImhpZGUtaWNvbnNcIixcbiAgICAgIHRoaXMuZGV2Y29uQ29uZmlnXG4gICAgICAgID8gIXRoaXMuZGV2Y29uQ29uZmlnLnZpZXdzLnNvbWUoKHZpZXcpID0+IHZpZXcuaWNvbilcbiAgICAgICAgOiB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVBpY2tWaWV3KGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHZpZXcgPSBOdW1iZXIoKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2aWV3LXNlbGVjdGVkXCIsIHsgdmlldyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWxpc3Rib3gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveCBvcC1pY29uIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW1bZGlzYWJsZWRdIHtcbiAgICAgICAgY3Vyc29yOiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZS1pY29uc10pIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIC0tcGFwZXItaXRlbS1pY29uLXdpZHRoOiAwcHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXZpZXdzLWxpc3RcIjogSHVpVmlld3NMaXN0O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQTRCQTtBQUNBO0FBN0JBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUtBOztBQVJBOztBQUZBO0FBZ0JBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFPQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTs7O0FBbEVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=