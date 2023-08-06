(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-view"],{

/***/ "./src/common/string/slugify.ts":
/*!**************************************!*\
  !*** ./src/common/string/slugify.ts ***!
  \**************************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const slugify = value => {
  const a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return value.toString().toLowerCase().replace(/\s+/g, "-") // Replace spaces with -
  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  .replace(/&/g, "-and-") // Replace & with 'and'
  .replace(/[^\w\-]+/g, "") // Remove all non-word characters
  .replace(/\-\-+/g, "-") // Replace multiple - with single -
  .replace(/^-+/, "") // Trim - from start of text
  .replace(/-+$/, ""); // Trim - from end of text
};

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

/***/ "./src/panels/devcon/editor/view-editor/hui-dialog-edit-view.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/devcon/editor/view-editor/hui-dialog-edit-view.ts ***!
  \**********************************************************************/
/*! exports provided: HuiDialogEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditView", function() { return HuiDialogEditView; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _hui_edit_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hui-edit-view */ "./src/panels/devcon/editor/view-editor/hui-edit-view.ts");
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



let HuiDialogEditView = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-edit-view")], function (_initialize, _LitElement) {
  class HuiDialogEditView extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogEditView,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
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
        this._params = params;
        await this.updateComplete;
        this.shadowRoot.children[0].showDialog();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hui-edit-view
        .opp="${this.opp}"
        .devcon="${this._params.devcon}"
        .viewIndex="${this._params.viewIndex}"
      >
      </hui-edit-view>
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/view-editor/hui-edit-view.ts":
/*!***************************************************************!*\
  !*** ./src/panels/devcon/editor/view-editor/hui-edit-view.ts ***!
  \***************************************************************/
/*! exports provided: HuiEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEditView", function() { return HuiEditView; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/devcon/components/hui-entity-editor.ts");
/* harmony import */ var _hui_view_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hui-view-editor */ "./src/panels/devcon/editor/view-editor/hui-view-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/devcon/editor/process-editor-entities.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config-util */ "./src/panels/devcon/editor/config-util.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
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











let HuiEditView = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-edit-view")], function (_initialize, _LitElement) {
  class HuiEditView extends _LitElement {
    constructor() {
      super();

      _initialize(this);

      this._saving = false;
      this._curTabIndex = 0;
    }

  }

  return {
    F: HuiEditView,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "viewIndex",
      value: void 0
    }, {
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_badges",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cards",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_saving",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_curTab",
      value: void 0
    }, {
      kind: "field",
      key: "_curTabIndex",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog() {
        // Wait till dialog is rendered.
        if (this._dialog == null) {
          await this.updateComplete;
        }

        if (this.viewIndex === undefined) {
          this._config = {};
          this._badges = [];
          this._cards = [];
        } else {
          const _config$views$this$vi = this.devcon.config.views[this.viewIndex],
                {
            cards,
            badges
          } = _config$views$this$vi,
                viewConfig = _objectWithoutPropertiesLoose(_config$views$this$vi, ["cards", "badges"]);

          this._config = viewConfig;
          this._badges = badges ? Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_12__["processEditorEntities"])(badges) : [];
          this._cards = cards;
        }

        this._dialog.open();
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "get",
      key: "_viewConfigTitle",
      value: function _viewConfigTitle() {
        if (!this._config || !this._config.title) {
          return this.opp.localize("ui.panel.devcon.editor.edit_view.header");
        }

        return this.opp.localize("ui.panel.devcon.editor.edit_view.header_name", "name", this._config.title);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        let content;

        switch (this._curTab) {
          case "tab-settings":
            content = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <hui-view-editor
            .isNew=${this.viewIndex === undefined}
            .opp="${this.opp}"
            .config="${this._config}"
            @view-config-changed="${this._viewConfigChanged}"
          ></hui-view-editor>
        `;
            break;

          case "tab-badges":
            content = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <hui-entity-editor
            .opp="${this.opp}"
            .entities="${this._badges}"
            @entities-changed="${this._badgesChanged}"
          ></hui-entity-editor>
        `;
            break;

          case "tab-cards":
            content = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          Cards
        `;
            break;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop modal>
        <h2>
          ${this._viewConfigTitle}
        </h2>
        <paper-tabs
          scrollable
          hide-scroll-buttons
          .selected="${this._curTabIndex}"
          @selected-item-changed="${this._handleTabSelected}"
        >
          <paper-tab id="tab-settings">Settings</paper-tab>
          <paper-tab id="tab-badges">Badges</paper-tab>
        </paper-tabs>
        <paper-dialog-scrollable> ${content} </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          ${this.viewIndex !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <mwc-button class="warning" @click="${this._deleteConfirm}">
                  ${this.opp.localize("ui.panel.devcon.editor.edit_view.delete")}
                </mwc-button>
              ` : ""}
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
      key: "_delete",
      value: async function _delete() {
        try {
          await this.devcon.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_14__["deleteView"])(this.devcon.config, this.viewIndex));

          this._closeDialog();

          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_13__["navigate"])(this, `/devcon/0`);
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_15__["showAlertDialog"])(this, {
            text: `Deleting failed: ${err.message}`
          });
        }
      }
    }, {
      kind: "method",
      key: "_deleteConfirm",
      value: function _deleteConfirm() {
        if (this._cards && this._cards.length > 0) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_15__["showAlertDialog"])(this, {
            text: this.opp.localize("ui.panel.devcon.views.existing_cards")
          });
          return;
        }

        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_15__["showConfirmationDialog"])(this, {
          text: this.opp.localize("ui.panel.devcon.views.confirm_delete"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_resizeDialog",
      value: async function _resizeDialog() {
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this._dialog, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._curTabIndex = 0;
        this.devcon = undefined;
        this._config = {};
        this._badges = [];

        this._dialog.close();
      }
    }, {
      kind: "method",
      key: "_handleTabSelected",
      value: function _handleTabSelected(ev) {
        if (!ev.detail.value) {
          return;
        }

        this._curTab = ev.detail.value.id;

        this._resizeDialog();
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
        const viewConf = Object.assign({}, this._config, {
          badges: this._badges,
          cards: this._cards
        });
        const devcon = this.devcon;

        try {
          await devcon.saveConfig(this._creatingView ? Object(_config_util__WEBPACK_IMPORTED_MODULE_14__["addView"])(devcon.config, viewConf) : Object(_config_util__WEBPACK_IMPORTED_MODULE_14__["replaceView"])(devcon.config, this.viewIndex, viewConf));

          this._closeDialog();
        } catch (err) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_15__["showAlertDialog"])(this, {
            text: `Saving failed: ${err.message}`
          });
        } finally {
          this._saving = false;
        }
      }
    }, {
      kind: "method",
      key: "_viewConfigChanged",
      value: function _viewConfigChanged(ev) {
        if (ev.detail && ev.detail.config) {
          this._config = ev.detail.config;
        }
      }
    }, {
      kind: "method",
      key: "_badgesChanged",
      value: function _badgesChanged(ev) {
        if (!this._badges || !this.opp || !ev.detail || !ev.detail.entities) {
          return;
        }

        this._badges = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_12__["processEditorEntities"])(ev.detail.entities);
      }
    }, {
      kind: "method",
      key: "_isConfigChanged",
      value: function _isConfigChanged() {
        return this._creatingView || JSON.stringify(this._config) !== JSON.stringify(this.devcon.config.views[this.viewIndex]);
      }
    }, {
      kind: "get",
      key: "_creatingView",
      value: function _creatingView() {
        return this.viewIndex === undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_8__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
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
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--primary-color);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .hidden {
          display: none;
        }
        .error {
          color: var(--error-color);
          border-bottom: 1px solid var(--error-color);
        }
      </style>
    `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/view-editor/hui-view-editor.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/devcon/editor/view-editor/hui-view-editor.ts ***!
  \*****************************************************************/
/*! exports provided: HuiViewEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiViewEditor", function() { return HuiViewEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-elements/config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
/* harmony import */ var _common_string_slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/string/slugify */ "./src/common/string/slugify.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
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








let HuiViewEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-view-editor")], function (_initialize, _LitElement) {
  class HuiViewEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiViewEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      key: "_suggestedPath",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "_path",
      value: function _path() {
        if (!this._config) {
          return "";
        }

        return this._config.path || "";
      }
    }, {
      kind: "get",
      key: "_title",
      value: function _title() {
        if (!this._config) {
          return "";
        }

        return this._config.title || "";
      }
    }, {
      kind: "get",
      key: "_icon",
      value: function _icon() {
        if (!this._config) {
          return "";
        }

        return this._config.icon || "";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        if (!this._config) {
          return "";
        }

        return this._config.theme || "Backend-selected";
      }
    }, {
      kind: "get",
      key: "_panel",
      value: function _panel() {
        if (!this._config) {
          return false;
        }

        return this._config.panel || false;
      }
    }, {
      kind: "set",
      key: "config",
      value: function config(_config) {
        this._config = _config;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_3__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.title")}  (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value=${this._title}
          .configValue=${"title"}
          @value-changed=${this._valueChanged}
          @blur=${this._handleTitleBlur}
        ></paper-input>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.icon")}  (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value=${this._icon}
          .configValue=${"icon"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.url")}  (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value=${this._path}
          .configValue=${"path"}
          @value-changed=${this._valueChanged}
        ></paper-input>
        <hui-theme-select-editor
          .opp=${this.opp}
          .value=${this._theme}
          .configValue=${"theme"}
          @theme-changed=${this._valueChanged}
        ></hui-theme-select-editor>
        <op-switch
          .checked=${this._panel !== false}
          .configValue=${"panel"}
          @change=${this._valueChanged}
          >${this.opp.localize("ui.panel.devcon.editor.view.panel_mode.title")}</op-switch
        >
        <span class="panel"
          >${this.opp.localize("ui.panel.devcon.editor.view.panel_mode.description")}</span
        >
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const target = ev.currentTarget;

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        let newConfig;

        if (target.configValue) {
          newConfig = Object.assign({}, this._config, {
            [target.configValue]: target.checked !== undefined ? target.checked : target.value
          });
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "view-config-changed", {
          config: newConfig
        });
      }
    }, {
      kind: "method",
      key: "_handleTitleBlur",
      value: function _handleTitleBlur(ev) {
        if (!this.isNew || this._suggestedPath || this._config.path || !ev.currentTarget.value) {
          return;
        }

        const config = Object.assign({}, this._config, {
          path: Object(_common_string_slugify__WEBPACK_IMPORTED_MODULE_4__["slugify"])(ev.currentTarget.value)
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "view-config-changed", {
          config
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .panel {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LXZpZXcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL3ZpZXctZWRpdG9yL2h1aS1kaWFsb2ctZWRpdC12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci92aWV3LWVkaXRvci9odWktZWRpdC12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci92aWV3LWVkaXRvci9odWktdmlldy1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaGFnZW1hbm4vMzgyYWRmYzU3YWRiZDVhZjA3OGRjOTNmZWVmMDFmZTFcclxuZXhwb3J0IGNvbnN0IHNsdWdpZnkgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGEgPVxyXG4gICAgXCLDoMOhw6TDosOjw6XEg8OmxIXDp8SHxI3EkcSPw6jDqcSbxJfDq8OqxJnEn8e14binw6zDrcOvw67Er8WC4bi/x7nFhMWIw7HDssOzw7bDtMWTw7jhuZXFlcWZw5/Fn8WbxaHImcWlyJvDucO6w7zDu8eYxa/FscWrxbPhuoPhuo3Dv8O9xbrFvsW8wrcvXyw6O1wiO1xyXG4gIGNvbnN0IGIgPVxyXG4gICAgXCJhYWFhYWFhYWFjY2NkZGVlZWVlZWVnZ2hpaWlpaWxtbm5ubm9vb29vb3BycnNzc3NzdHR1dXV1dXV1dXV3eHl5enp6LS0tLS0tXCI7XHJcbiAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdChcIlwiKS5qb2luKFwifFwiKSwgXCJnXCIpO1xyXG5cclxuICByZXR1cm4gdmFsdWVcclxuICAgIC50b1N0cmluZygpXHJcbiAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCItXCIpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggLVxyXG4gICAgLnJlcGxhY2UocCwgKGMpID0+IGIuY2hhckF0KGEuaW5kZXhPZihjKSkpIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXHJcbiAgICAucmVwbGFjZSgvJi9nLCBcIi1hbmQtXCIpIC8vIFJlcGxhY2UgJiB3aXRoICdhbmQnXHJcbiAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCBcIlwiKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnNcclxuICAgIC5yZXBsYWNlKC9cXC1cXC0rL2csIFwiLVwiKSAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxyXG4gICAgLnJlcGxhY2UoL14tKy8sIFwiXCIpIC8vIFRyaW0gLSBmcm9tIHN0YXJ0IG9mIHRleHRcclxuICAgIC5yZXBsYWNlKC8tKyQvLCBcIlwiKTsgLy8gVHJpbSAtIGZyb20gZW5kIG9mIHRleHRcclxufTtcclxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9QUERvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiLi9odWktZWRpdC12aWV3XCI7XG5pbXBvcnQgeyBFZGl0Vmlld0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZWRpdC12aWV3LWRpYWxvZ1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwicmVsb2FkLWRldmNvblwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJyZWxvYWQtZGV2Y29uXCI6IE9QUERvbUV2ZW50PHVuZGVmaW5lZD47XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZGlhbG9nLWVkaXQtdmlld1wiKVxuZXhwb3J0IGNsYXNzIEh1aURpYWxvZ0VkaXRWaWV3IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IEVkaXRWaWV3RGlhbG9nUGFyYW1zO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogRWRpdFZpZXdEaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAodGhpcy5zaGFkb3dSb290IS5jaGlsZHJlblswXSBhcyBhbnkpLnNob3dEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZWRpdC12aWV3XG4gICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgIC5kZXZjb249XCIke3RoaXMuX3BhcmFtcy5kZXZjb259XCJcbiAgICAgICAgLnZpZXdJbmRleD1cIiR7dGhpcy5fcGFyYW1zLnZpZXdJbmRleH1cIlxuICAgICAgPlxuICAgICAgPC9odWktZWRpdC12aWV3PlxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctZWRpdC12aWV3XCI6IEh1aURpYWxvZ0VkaXRWaWV3O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBjc3MsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcblxuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWVudGl0eS1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaHVpLXZpZXctZWRpdG9yXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBEZXZjb25WaWV3Q29uZmlnLFxuICBEZXZjb25DYXJkQ29uZmlnLFxuICBEZXZjb25CYWRnZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdGllc0VkaXRvckV2ZW50LCBWaWV3RWRpdEV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBwcm9jZXNzRWRpdG9yRW50aXRpZXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy1lZGl0b3ItZW50aXRpZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgRGV2Y29uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZWxldGVWaWV3LCBhZGRWaWV3LCByZXBsYWNlVmlldyB9IGZyb20gXCIuLi9jb25maWctdXRpbFwiO1xuaW1wb3J0IHtcbiAgc2hvd0FsZXJ0RGlhbG9nLFxuICBzaG93Q29uZmlybWF0aW9uRGlhbG9nLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lZGl0LXZpZXdcIilcbmV4cG9ydCBjbGFzcyBIdWlFZGl0VmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2Y29uPzogRGV2Y29uO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2aWV3SW5kZXg/OiBudW1iZXI7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRGV2Y29uVmlld0NvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9iYWRnZXM/OiBEZXZjb25CYWRnZUNvbmZpZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhcmRzPzogRGV2Y29uQ2FyZENvbmZpZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NhdmluZzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jdXJUYWI/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY3VyVGFiSW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJUYWJJbmRleCA9IDA7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBXYWl0IHRpbGwgZGlhbG9nIGlzIHJlbmRlcmVkLlxuICAgIGlmICh0aGlzLl9kaWFsb2cgPT0gbnVsbCkge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fY29uZmlnID0ge307XG4gICAgICB0aGlzLl9iYWRnZXMgPSBbXTtcbiAgICAgIHRoaXMuX2NhcmRzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY2FyZHMsIGJhZGdlcywgLi4udmlld0NvbmZpZyB9ID0gdGhpcy5kZXZjb24hLmNvbmZpZy52aWV3c1tcbiAgICAgICAgdGhpcy52aWV3SW5kZXhcbiAgICAgIF07XG4gICAgICB0aGlzLl9jb25maWcgPSB2aWV3Q29uZmlnO1xuICAgICAgdGhpcy5fYmFkZ2VzID0gYmFkZ2VzID8gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGJhZGdlcykgOiBbXTtcbiAgICAgIHRoaXMuX2NhcmRzID0gY2FyZHM7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogT3BQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIm9wLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmlld0NvbmZpZ1RpdGxlKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2NvbmZpZy50aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF92aWV3LmhlYWRlclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfdmlldy5oZWFkZXJfbmFtZVwiLFxuICAgICAgXCJuYW1lXCIsXG4gICAgICB0aGlzLl9jb25maWcudGl0bGVcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgc3dpdGNoICh0aGlzLl9jdXJUYWIpIHtcbiAgICAgIGNhc2UgXCJ0YWItc2V0dGluZ3NcIjpcbiAgICAgICAgY29udGVudCA9IGh0bWxgXG4gICAgICAgICAgPGh1aS12aWV3LWVkaXRvclxuICAgICAgICAgICAgLmlzTmV3PSR7dGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jb25maWd9XCJcbiAgICAgICAgICAgIEB2aWV3LWNvbmZpZy1jaGFuZ2VkPVwiJHt0aGlzLl92aWV3Q29uZmlnQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS12aWV3LWVkaXRvcj5cbiAgICAgICAgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGFiLWJhZGdlc1wiOlxuICAgICAgICBjb250ZW50ID0gaHRtbGBcbiAgICAgICAgICA8aHVpLWVudGl0eS1lZGl0b3JcbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuZW50aXRpZXM9XCIke3RoaXMuX2JhZGdlc31cIlxuICAgICAgICAgICAgQGVudGl0aWVzLWNoYW5nZWQ9XCIke3RoaXMuX2JhZGdlc0NoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktZW50aXR5LWVkaXRvcj5cbiAgICAgICAgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGFiLWNhcmRzXCI6XG4gICAgICAgIGNvbnRlbnQgPSBodG1sYFxuICAgICAgICAgIENhcmRzXG4gICAgICAgIGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcCBtb2RhbD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5fdmlld0NvbmZpZ1RpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItdGFic1xuICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICBoaWRlLXNjcm9sbC1idXR0b25zXG4gICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9jdXJUYWJJbmRleH1cIlxuICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9XCIke3RoaXMuX2hhbmRsZVRhYlNlbGVjdGVkfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItdGFiIGlkPVwidGFiLXNldHRpbmdzXCI+U2V0dGluZ3M8L3BhcGVyLXRhYj5cbiAgICAgICAgICA8cGFwZXItdGFiIGlkPVwidGFiLWJhZGdlc1wiPkJhZGdlczwvcGFwZXItdGFiPlxuICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT4gJHtjb250ZW50fSA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICAke3RoaXMudmlld0luZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBjbGFzcz1cIndhcm5pbmdcIiBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZUNvbmZpcm19XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfdmlldy5kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRGlhbG9nfVwiXG4gICAgICAgICAgICA+JHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHshdGhpcy5fY29uZmlnIHx8IHRoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fc2F2aW5nfVwiXG4gICAgICAgICAgICAgIGFsdD1cIlNhdmluZ1wiXG4gICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24uc2F2ZVwiKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5kZXZjb24hLnNhdmVDb25maWcoXG4gICAgICAgIGRlbGV0ZVZpZXcodGhpcy5kZXZjb24hLmNvbmZpZywgdGhpcy52aWV3SW5kZXghKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2RldmNvbi8wYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiBgRGVsZXRpbmcgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVDb25maXJtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jYXJkcyAmJiB0aGlzLl9jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24udmlld3MuZXhpc3RpbmdfY2FyZHNcIiksXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93Q29uZmlybWF0aW9uRGlhbG9nKHRoaXMsIHtcbiAgICAgIHRleHQ6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi52aWV3cy5jb25maXJtX2RlbGV0ZVwiKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVzaXplRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgZmlyZUV2ZW50KHRoaXMuX2RpYWxvZyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuX2N1clRhYkluZGV4ID0gMDtcbiAgICB0aGlzLmRldmNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jb25maWcgPSB7fTtcbiAgICB0aGlzLl9iYWRnZXMgPSBbXTtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRhYlNlbGVjdGVkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1clRhYiA9IGV2LmRldGFpbC52YWx1ZS5pZDtcbiAgICB0aGlzLl9yZXNpemVEaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9pc0NvbmZpZ0NoYW5nZWQoKSkge1xuICAgICAgdGhpcy5fY2xvc2VEaWFsb2coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zYXZpbmcgPSB0cnVlO1xuXG4gICAgY29uc3Qgdmlld0NvbmY6IERldmNvblZpZXdDb25maWcgPSB7XG4gICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICBiYWRnZXM6IHRoaXMuX2JhZGdlcyxcbiAgICAgIGNhcmRzOiB0aGlzLl9jYXJkcyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGV2Y29uID0gdGhpcy5kZXZjb24hO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRldmNvbi5zYXZlQ29uZmlnKFxuICAgICAgICB0aGlzLl9jcmVhdGluZ1ZpZXdcbiAgICAgICAgICA/IGFkZFZpZXcoZGV2Y29uLmNvbmZpZywgdmlld0NvbmYpXG4gICAgICAgICAgOiByZXBsYWNlVmlldyhkZXZjb24uY29uZmlnLCB0aGlzLnZpZXdJbmRleCEsIHZpZXdDb25mKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzaG93QWxlcnREaWFsb2codGhpcywge1xuICAgICAgICB0ZXh0OiBgU2F2aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gLFxuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3NhdmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3ZpZXdDb25maWdDaGFuZ2VkKGV2OiBWaWV3RWRpdEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2LmRldGFpbCAmJiBldi5kZXRhaWwuY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBldi5kZXRhaWwuY29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JhZGdlc0NoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2JhZGdlcyB8fCAhdGhpcy5vcHAgfHwgIWV2LmRldGFpbCB8fCAhZXYuZGV0YWlsLmVudGl0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JhZGdlcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyhldi5kZXRhaWwuZW50aXRpZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNDb25maWdDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9jcmVhdGluZ1ZpZXcgfHxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX2NvbmZpZykgIT09XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuZGV2Y29uIS5jb25maWcudmlld3NbdGhpcy52aWV3SW5kZXghXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NyZWF0aW5nVmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC8qIG92ZXJydWxlIHRoZSBvcC1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ud2FybmluZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lclthY3RpdmVdIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWVkaXQtdmlld1wiOiBIdWlFZGl0VmlldztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuLi9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5pbXBvcnQgeyBEZXZjb25WaWV3Q29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvc2x1Z2lmeVwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwidmlldy1jb25maWctY2hhbmdlZFwiOiB7XG4gICAgICBjb25maWc6IERldmNvblZpZXdDb25maWc7XG4gICAgfTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS12aWV3LWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVZpZXdFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc05ldyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZyE6IERldmNvblZpZXdDb25maWc7XG4gIHByaXZhdGUgX3N1Z2dlc3RlZFBhdGggPSBmYWxzZTtcblxuICBnZXQgX3BhdGgoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWcucGF0aCB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF90aXRsZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy50aXRsZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9pY29uKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmljb24gfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWcudGhlbWUgfHwgXCJCYWNrZW5kLXNlbGVjdGVkXCI7XG4gIH1cblxuICBnZXQgX3BhbmVsKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWcucGFuZWwgfHwgZmFsc2U7XG4gIH1cblxuICBzZXQgY29uZmlnKGNvbmZpZzogRGV2Y29uVmlld0NvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5vcHApIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy50aXRsZVwiXG4gICAgICAgICAgKX0gICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3RpdGxlfVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1widGl0bGVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICBAYmx1cj0ke3RoaXMuX2hhbmRsZVRpdGxlQmx1cn1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9ICAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9pY29ufVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiaWNvblwifVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMudXJsXCJcbiAgICAgICAgICApfSAgKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fcGF0aH1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInBhdGhcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aGVtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInRoZW1lXCJ9XG4gICAgICAgICAgQHRoZW1lLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgICA8b3Atc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9wYW5lbCAhPT0gZmFsc2V9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJwYW5lbFwifVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgPiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3Iudmlldy5wYW5lbF9tb2RlLnRpdGxlXCJcbiAgICAgICAgICApfTwvb3Atc3dpdGNoXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwYW5lbFwiXG4gICAgICAgICAgPiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3Iudmlldy5wYW5lbF9tb2RlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfTwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQhIGFzIEVkaXRvclRhcmdldDtcblxuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdDb25maWc7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBuZXdDb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOlxuICAgICAgICAgIHRhcmdldC5jaGVja2VkICE9PSB1bmRlZmluZWQgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmlldy1jb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogbmV3Q29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGl0bGVCbHVyKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaXNOZXcgfHxcbiAgICAgIHRoaXMuX3N1Z2dlc3RlZFBhdGggfHxcbiAgICAgIHRoaXMuX2NvbmZpZy5wYXRoIHx8XG4gICAgICAhZXYuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4udGhpcy5fY29uZmlnLCBwYXRoOiBzbHVnaWZ5KGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpIH07XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmlldy1jb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5wYW5lbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXZpZXctZWRpdG9yXCI6IEh1aVZpZXdFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBVUE7QUFlQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFKQTtBQVFBO0FBdkJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFEQTtBQW9CQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFqREE7QUFBQTtBQUFBO0FBQUE7QUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBN0RBO0FBQUE7QUFBQTtBQUFBO0FBZ0VBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUdBO0FBeEJBO0FBQ0E7QUF5QkE7OztBQUdBOzs7OztBQUtBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFFQTtBQUNBOztBQUhBO0FBU0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBOzs7O0FBcENBO0FBeUNBO0FBcElBO0FBQUE7QUFBQTtBQUFBO0FBdUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWxKQTtBQUFBO0FBQUE7QUFBQTtBQXFKQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFoS0E7QUFBQTtBQUFBO0FBQUE7QUFtS0E7QUFDQTtBQUNBO0FBcktBO0FBQUE7QUFBQTtBQUFBO0FBd0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBN0tBO0FBQUE7QUFBQTtBQUFBO0FBZ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFyTEE7QUFBQTtBQUFBO0FBQUE7QUF3TEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXhOQTtBQUFBO0FBQUE7QUFBQTtBQTJOQTtBQUNBO0FBQ0E7QUFDQTtBQTlOQTtBQUFBO0FBQUE7QUFBQTtBQWlPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFyT0E7QUFBQTtBQUFBO0FBQUE7QUF3T0E7QUFLQTtBQTdPQTtBQUFBO0FBQUE7QUFBQTtBQWdQQTtBQUNBO0FBalBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStDQTtBQW5TQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBU0E7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBV0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTs7O0FBakRBO0FBdURBO0FBekdBO0FBQUE7QUFBQTtBQUFBO0FBNEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTdIQTtBQUFBO0FBQUE7QUFBQTtBQWdJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBM0lBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4SUE7Ozs7QUFBQTtBQUtBO0FBbkpBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9