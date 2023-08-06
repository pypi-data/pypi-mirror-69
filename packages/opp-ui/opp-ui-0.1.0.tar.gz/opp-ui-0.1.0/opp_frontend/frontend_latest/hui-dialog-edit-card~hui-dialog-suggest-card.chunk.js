(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-card~hui-dialog-suggest-card"],{

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

/***/ "./src/panels/devcon/editor/card-editor/hui-card-editor.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/hui-card-editor.ts ***!
  \*****************************************************************/
/*! exports provided: HuiCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardEditor", function() { return HuiCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_op_code_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/op-code-editor */ "./src/components/op-code-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/devcon/create-element/create-card-element.ts");
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





 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line



let HuiCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-editor")], function (_initialize, _LitElement) {
  class HuiCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_yaml",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_configElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_configElType",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_GUImode",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_warning",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loading",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "yaml",
      value: // Error: Configuration broken - do not save
      // Warning: GUI editor can't handle configuration - ok to save
      function yaml() {
        return this._yaml || "";
      }
    }, {
      kind: "set",
      key: "yaml",
      value: function yaml(_yaml) {
        this._yaml = _yaml;

        try {
          this._config = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeLoad"])(this.yaml);

          this._updateConfigElement();

          this._error = undefined;
        } catch (err) {
          this._error = err.message;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "config-changed", {
          config: this.value,
          error: this._error
        });
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return this._config;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(config) {
        if (JSON.stringify(config) !== JSON.stringify(this._config || {})) {
          this.yaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(config);
        }
      }
    }, {
      kind: "get",
      key: "hasError",
      value: function hasError() {
        return this._error !== undefined;
      }
    }, {
      kind: "get",
      key: "_yamlEditor",
      value: function _yamlEditor() {
        return this.shadowRoot.querySelector("op-code-editor");
      }
    }, {
      kind: "method",
      key: "toggleMode",
      value: function toggleMode() {
        this._GUImode = !this._GUImode;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "connectedCallback", this).call(this);

        this._refreshYamlEditor();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="wrapper">
        ${this._GUImode ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="gui-editor">
                ${this._loading ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <paper-spinner
                        active
                        alt="Loading"
                        class="center margin-bot"
                      ></paper-spinner>
                    ` : this._configElement}
              </div>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="yaml-editor">
                <op-code-editor
                  mode="yaml"
                  autofocus
                  .value=${this.yaml}
                  .error=${this._error}
                  .rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__["computeRTL"])(this.opp)}
                  @value-changed=${this._handleYAMLChanged}
                ></op-code-editor>
              </div>
            `}
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">
                ${this._error}
              </div>
            ` : ""}
        ${this._warning ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="warning">
                ${this._warning}
              </div>
            ` : ""}
        <div class="buttons">
          <mwc-button
            @click=${this.toggleMode}
            ?disabled=${this._warning || this._error}
          >
            ${this.opp.localize(this._GUImode ? "ui.panel.devcon.editor.edit_card.show_code_editor" : "ui.panel.devcon.editor.edit_card.show_visual_editor")}
          </mwc-button>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiCardEditor.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("_GUImode")) {
          if (this._GUImode === false) {
            // Refresh code editor when switching to yaml mode
            this._refreshYamlEditor(true);
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "iron-resize");
        }
      }
    }, {
      kind: "method",
      key: "_refreshYamlEditor",
      value: function _refreshYamlEditor(focus = false) {
        // wait on render
        setTimeout(() => {
          if (this._yamlEditor && this._yamlEditor.codemirror) {
            this._yamlEditor.codemirror.refresh();

            if (focus) {
              this._yamlEditor.codemirror.focus();
            }
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "iron-resize");
        }, 1);
      }
    }, {
      kind: "method",
      key: "_handleUIConfigChanged",
      value: function _handleUIConfigChanged(ev) {
        ev.stopPropagation();
        const config = ev.detail.config;
        this.value = config;
      }
    }, {
      kind: "method",
      key: "_handleYAMLChanged",
      value: function _handleYAMLChanged(ev) {
        ev.stopPropagation();
        const newYaml = ev.detail.value;

        if (newYaml !== this.yaml) {
          this.yaml = newYaml;
        }
      }
    }, {
      kind: "method",
      key: "_updateConfigElement",
      value: async function _updateConfigElement() {
        if (!this.value) {
          return;
        }

        const cardType = this.value.type;
        let configElement = this._configElement;

        try {
          this._error = undefined;
          this._warning = undefined;

          if (this._configElType !== cardType) {
            // If the card type has changed, we need to load a new GUI editor
            if (!this.value.type) {
              throw new Error("No card type defined");
            }

            const elClass = await Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_6__["getCardElementClass"])(cardType);
            this._loading = true; // Check if a GUI editor exists

            if (elClass && elClass.getConfigElement) {
              configElement = await elClass.getConfigElement();
            } else {
              configElement = undefined;
              throw Error(`WARNING: No visual editor available for: ${cardType}`);
            }

            this._configElement = configElement;
            this._configElType = cardType;
          } // Setup GUI editor and check that it can handle the current config


          try {
            this._configElement.setConfig(this.value);
          } catch (err) {
            throw Error(`WARNING: ${err.message}`);
          } // Perform final setup


          this._configElement.opp = this.opp;

          this._configElement.addEventListener("config-changed", ev => this._handleUIConfigChanged(ev));

          return;
        } catch (err) {
          if (err.message.startsWith("WARNING:")) {
            this._warning = err.message.substr(8);
          } else {
            this._error = err;
          }

          this._GUImode = false;
        } finally {
          this._loading = false;
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "iron-resize");
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: flex;
      }
      .wrapper {
        width: 100%;
      }
      .gui-editor,
      .yaml-editor {
        padding: 8px 0px;
      }
      .error {
        color: #ef5350;
      }
      .warning {
        color: #ffa726;
      }
      .buttons {
        text-align: right;
        padding: 8px 0px;
      }
      paper-spinner {
        display: block;
        margin: auto;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/hui-card-picker.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/hui-card-picker.ts ***!
  \*****************************************************************/
/*! exports provided: HuiCardPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPicker", function() { return HuiCardPicker; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/devcon/create-element/create-card-element.ts");
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





const cards = ["alarm-panel", "conditional", "entities", "button", "entity-filter", "gauge", "glance", "history-graph", "horizontal-stack", "iframe", "light", "map", "markdown", "media-control", "picture", "picture-elements", "picture-entity", "picture-glance", "plant-status", "sensor", "shopping-list", "thermostat", "vertical-stack", "weather-forecast"];
let HuiCardPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-picker")], function (_initialize, _LitElement) {
  class HuiCardPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardPicker,
    d: [{
      kind: "field",
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      key: "cardPicked",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="cards-container">
        ${cards.map(card => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <mwc-button @click="${this._cardPicked}" .type="${card}">
              ${this.opp.localize(`ui.panel.devcon.editor.card.${card}.name`)}
            </mwc-button>
          `;
        })}
      </div>
      <div class="cards-container">
        <mwc-button @click="${this._manualPicked}">MANUAL CARD</mwc-button>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .cards-container mwc-button {
          flex: 1 0 25%;
          margin: 4px;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          .cards-container mwc-button {
            flex: 1 0 33%;
          }
        }
      `];
      }
    }, {
      kind: "method",
      key: "_manualPicked",
      value: function _manualPicked() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "config-changed", {
          config: {
            type: ""
          }
        });
      }
    }, {
      kind: "method",
      key: "_cardPicked",
      value: async function _cardPicked(ev) {
        const type = ev.currentTarget.type;
        const elClass = await Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_3__["getCardElementClass"])(type);
        let config = {
          type
        };

        if (elClass && elClass.getStubConfig) {
          const cardConfig = elClass.getStubConfig(this.opp);
          config = Object.assign({}, config, {}, cardConfig);
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "config-changed", {
          config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/hui-card-preview.ts":
/*!******************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/hui-card-preview.ts ***!
  \******************************************************************/
/*! exports provided: HuiCardPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPreview", function() { return HuiCardPreview; });
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _create_element_create_card_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create-element/create-card-element */ "./src/panels/devcon/create-element/create-card-element.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/hui-error-card */ "./src/panels/devcon/cards/hui-error-card.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class HuiCardPreview extends HTMLElement {
  get _error() {
    var _this$_element;

    return ((_this$_element = this._element) === null || _this$_element === void 0 ? void 0 : _this$_element.tagName) === "HUI-ERROR-CARD";
  }

  constructor() {
    super();

    _defineProperty(this, "_opp", void 0);

    _defineProperty(this, "_element", void 0);

    _defineProperty(this, "_config", void 0);

    this.addEventListener("ll-rebuild", () => {
      this._cleanup();

      if (this._config) {
        this.config = this._config;
      }
    });
  }

  set opp(opp) {
    if (!this._opp || this._opp.language !== opp.language) {
      this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_3__["computeRTL"])(opp) ? "rtl" : "ltr";
    }

    this._opp = opp;

    if (this._element) {
      this._element.opp = opp;
    }
  }

  set error(error) {
    this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardConfig"])(`${error.type}: ${error.message}`, undefined));
  }

  set config(configValue) {
    const curConfig = this._config;
    this._config = configValue;

    if (!configValue) {
      this._cleanup();

      return;
    }

    if (!configValue.type) {
      this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardConfig"])("No card type found", configValue));

      return;
    }

    if (!this._element) {
      this._createCard(configValue);

      return;
    } // in case the element was an error element we always want to recreate it


    if (!this._error && curConfig && configValue.type === curConfig.type) {
      try {
        this._element.setConfig(configValue);
      } catch (err) {
        this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardConfig"])(err.message, configValue));
      }
    } else {
      this._createCard(configValue);
    }
  }

  _createCard(configValue) {
    this._cleanup();

    this._element = Object(_create_element_create_card_element__WEBPACK_IMPORTED_MODULE_1__["createCardElement"])(configValue);

    if (this._opp) {
      this._element.opp = this._opp;
    }

    this.appendChild(this._element);
  }

  _cleanup() {
    if (!this._element) {
      return;
    }

    this.removeChild(this._element);
    this._element = undefined;
  }

}
customElements.define("hui-card-preview", HuiCardPreview);

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, opp) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
  message: opp.localize("ui.common.successfully_saved")
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmR+aHVpLWRpYWxvZy1zdWdnZXN0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jYXJkLWVkaXRvci9odWktY2FyZC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWNhcmQtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XHJcbmltcG9ydCB7IE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5cclxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcclxuXHJcbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXHJcbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xyXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XHJcbiAgICByZXR1cm4gT3BJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxyXG4vLyBleHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgT3BQYXBlckRpYWxvZ1xyXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcclxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xyXG4gICAgXCJvcC1wYXBlci1kaWFsb2dcIjogT3BQYXBlckRpYWxvZztcclxuICB9XHJcbn1cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFwZXItZGlhbG9nXCIsIE9wUGFwZXJEaWFsb2cpO1xyXG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBjc3MsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IERldmNvbkNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9wQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IGdldENhcmRFbGVtZW50Q2xhc3MgfSBmcm9tIFwiLi4vLi4vY3JlYXRlLWVsZW1lbnQvY3JlYXRlLWNhcmQtZWxlbWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwiZW50aXRpZXMtY2hhbmdlZFwiOiB7XG4gICAgICBlbnRpdGllczogRW50aXR5Q29uZmlnW107XG4gICAgfTtcbiAgICBcImNvbmZpZy1jaGFuZ2VkXCI6IHtcbiAgICAgIGNvbmZpZzogRGV2Y29uQ2FyZENvbmZpZztcbiAgICAgIGVycm9yPzogc3RyaW5nO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbmZpZ0NoYW5nZWRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgY29uZmlnOiBEZXZjb25DYXJkQ29uZmlnO1xuICB9O1xufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfeWFtbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRGV2Y29uQ2FyZENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxlbWVudD86IERldmNvbkNhcmRFZGl0b3I7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0VsVHlwZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfR1VJbW9kZTogYm9vbGVhbiA9IHRydWU7XG4gIC8vIEVycm9yOiBDb25maWd1cmF0aW9uIGJyb2tlbiAtIGRvIG5vdCBzYXZlXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuICAvLyBXYXJuaW5nOiBHVUkgZWRpdG9yIGNhbid0IGhhbmRsZSBjb25maWd1cmF0aW9uIC0gb2sgdG8gc2F2ZVxuICBAcHJvcGVydHkoKSBwcml2YXRlIF93YXJuaW5nPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCB5YW1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3lhbWwgfHwgXCJcIjtcbiAgfVxuICBwdWJsaWMgc2V0IHlhbWwoX3lhbWw6IHN0cmluZykge1xuICAgIHRoaXMuX3lhbWwgPSBfeWFtbDtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fY29uZmlnID0gc2FmZUxvYWQodGhpcy55YW1sKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUNvbmZpZ0VsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwge1xuICAgICAgY29uZmlnOiB0aGlzLnZhbHVlISxcbiAgICAgIGVycm9yOiB0aGlzLl9lcnJvcixcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogRGV2Y29uQ2FyZENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKGNvbmZpZzogRGV2Y29uQ2FyZENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShjb25maWcpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLl9jb25maWcgfHwge30pKSB7XG4gICAgICB0aGlzLnlhbWwgPSBzYWZlRHVtcChjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfeWFtbEVkaXRvcigpOiBPcENvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJvcC1jb2RlLWVkaXRvclwiKSEgYXMgT3BDb2RlRWRpdG9yO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZU1vZGUoKSB7XG4gICAgdGhpcy5fR1VJbW9kZSA9ICF0aGlzLl9HVUltb2RlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fcmVmcmVzaFlhbWxFZGl0b3IoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgJHt0aGlzLl9HVUltb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3VpLWVkaXRvclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZW50ZXIgbWFyZ2luLWJvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiB0aGlzLl9jb25maWdFbGVtZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5YW1sLWVkaXRvclwiPlxuICAgICAgICAgICAgICAgIDxvcC1jb2RlLWVkaXRvclxuICAgICAgICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLnlhbWx9XG4gICAgICAgICAgICAgICAgICAuZXJyb3I9JHt0aGlzLl9lcnJvcn1cbiAgICAgICAgICAgICAgICAgIC5ydGw9JHtjb21wdXRlUlRMKHRoaXMub3BwKX1cbiAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlWUFNTENoYW5nZWR9XG4gICAgICAgICAgICAgICAgPjwvb3AtY29kZS1lZGl0b3I+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9lcnJvcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuX3dhcm5pbmdcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl93YXJuaW5nfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIEBjbGljaz0ke3RoaXMudG9nZ2xlTW9kZX1cbiAgICAgICAgICAgID9kaXNhYmxlZD0ke3RoaXMuX3dhcm5pbmcgfHwgdGhpcy5fZXJyb3J9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgIHRoaXMuX0dVSW1vZGVcbiAgICAgICAgICAgICAgICA/IFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5lZGl0X2NhcmQuc2hvd19jb2RlX2VkaXRvclwiXG4gICAgICAgICAgICAgICAgOiBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuZWRpdF9jYXJkLnNob3dfdmlzdWFsX2VkaXRvclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfR1VJbW9kZVwiKSkge1xuICAgICAgaWYgKHRoaXMuX0dVSW1vZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggY29kZSBlZGl0b3Igd2hlbiBzd2l0Y2hpbmcgdG8geWFtbCBtb2RlXG4gICAgICAgIHRoaXMuX3JlZnJlc2hZYW1sRWRpdG9yKHRydWUpO1xuICAgICAgfVxuICAgICAgZmlyZUV2ZW50KHRoaXMgYXMgSFRNTEVsZW1lbnQsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVmcmVzaFlhbWxFZGl0b3IoZm9jdXMgPSBmYWxzZSkge1xuICAgIC8vIHdhaXQgb24gcmVuZGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5feWFtbEVkaXRvciAmJiB0aGlzLl95YW1sRWRpdG9yLmNvZGVtaXJyb3IpIHtcbiAgICAgICAgdGhpcy5feWFtbEVkaXRvci5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5feWFtbEVkaXRvci5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpcmVFdmVudCh0aGlzIGFzIEhUTUxFbGVtZW50LCBcImlyb24tcmVzaXplXCIpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVUlDb25maWdDaGFuZ2VkKGV2OiBVSUNvbmZpZ0NoYW5nZWRFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgdGhpcy52YWx1ZSA9IGNvbmZpZztcbiAgfVxuICBwcml2YXRlIF9oYW5kbGVZQU1MQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IG5ld1lhbWwgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1lhbWwgIT09IHRoaXMueWFtbCkge1xuICAgICAgdGhpcy55YW1sID0gbmV3WWFtbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWdFbGVtZW50KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRUeXBlID0gdGhpcy52YWx1ZS50eXBlO1xuICAgIGxldCBjb25maWdFbGVtZW50ID0gdGhpcy5fY29uZmlnRWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93YXJuaW5nID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnRWxUeXBlICE9PSBjYXJkVHlwZSkge1xuICAgICAgICAvLyBJZiB0aGUgY2FyZCB0eXBlIGhhcyBjaGFuZ2VkLCB3ZSBuZWVkIHRvIGxvYWQgYSBuZXcgR1VJIGVkaXRvclxuICAgICAgICBpZiAoIXRoaXMudmFsdWUudHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmQgdHlwZSBkZWZpbmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxDbGFzcyA9IGF3YWl0IGdldENhcmRFbGVtZW50Q2xhc3MoY2FyZFR5cGUpO1xuXG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAvLyBDaGVjayBpZiBhIEdVSSBlZGl0b3IgZXhpc3RzXG4gICAgICAgIGlmIChlbENsYXNzICYmIGVsQ2xhc3MuZ2V0Q29uZmlnRWxlbWVudCkge1xuICAgICAgICAgIGNvbmZpZ0VsZW1lbnQgPSBhd2FpdCBlbENsYXNzLmdldENvbmZpZ0VsZW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25maWdFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHRocm93IEVycm9yKGBXQVJOSU5HOiBObyB2aXN1YWwgZWRpdG9yIGF2YWlsYWJsZSBmb3I6ICR7Y2FyZFR5cGV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb25maWdFbGVtZW50ID0gY29uZmlnRWxlbWVudDtcbiAgICAgICAgdGhpcy5fY29uZmlnRWxUeXBlID0gY2FyZFR5cGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIEdVSSBlZGl0b3IgYW5kIGNoZWNrIHRoYXQgaXQgY2FuIGhhbmRsZSB0aGUgY3VycmVudCBjb25maWdcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ0VsZW1lbnQhLnNldENvbmZpZyh0aGlzLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBFcnJvcihgV0FSTklORzogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIH1cblxuICAgICAgLy8gUGVyZm9ybSBmaW5hbCBzZXR1cFxuICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCEub3BwID0gdGhpcy5vcHA7XG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50IS5hZGRFdmVudExpc3RlbmVyKFwiY29uZmlnLWNoYW5nZWRcIiwgKGV2KSA9PlxuICAgICAgICB0aGlzLl9oYW5kbGVVSUNvbmZpZ0NoYW5nZWQoZXYgYXMgVUlDb25maWdDaGFuZ2VkRXZlbnQpXG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2Uuc3RhcnRzV2l0aChcIldBUk5JTkc6XCIpKSB7XG4gICAgICAgIHRoaXMuX3dhcm5pbmcgPSBlcnIubWVzc2FnZS5zdWJzdHIoOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX0dVSW1vZGUgPSBmYWxzZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLndyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ndWktZWRpdG9yLFxuICAgICAgLnlhbWwtZWRpdG9yIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiAjZWY1MzUwO1xuICAgICAgfVxuICAgICAgLndhcm5pbmcge1xuICAgICAgICBjb2xvcjogI2ZmYTcyNjtcbiAgICAgIH1cbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1lZGl0b3JcIjogSHVpQ2FyZEVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IENhcmRQaWNrVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudENsYXNzIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1jYXJkLWVsZW1lbnRcIjtcblxuY29uc3QgY2FyZHM6IHN0cmluZ1tdID0gW1xuICBcImFsYXJtLXBhbmVsXCIsXG4gIFwiY29uZGl0aW9uYWxcIixcbiAgXCJlbnRpdGllc1wiLFxuICBcImJ1dHRvblwiLFxuICBcImVudGl0eS1maWx0ZXJcIixcbiAgXCJnYXVnZVwiLFxuICBcImdsYW5jZVwiLFxuICBcImhpc3RvcnktZ3JhcGhcIixcbiAgXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gIFwiaWZyYW1lXCIsXG4gIFwibGlnaHRcIixcbiAgXCJtYXBcIixcbiAgXCJtYXJrZG93blwiLFxuICBcIm1lZGlhLWNvbnRyb2xcIixcbiAgXCJwaWN0dXJlXCIsXG4gIFwicGljdHVyZS1lbGVtZW50c1wiLFxuICBcInBpY3R1cmUtZW50aXR5XCIsXG4gIFwicGljdHVyZS1nbGFuY2VcIixcbiAgXCJwbGFudC1zdGF0dXNcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzaG9wcGluZy1saXN0XCIsXG4gIFwidGhlcm1vc3RhdFwiLFxuICBcInZlcnRpY2FsLXN0YWNrXCIsXG4gIFwid2VhdGhlci1mb3JlY2FzdFwiLFxuXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FyZC1waWNrZXJcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkUGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIHB1YmxpYyBjYXJkUGlja2VkPzogKGNhcmRDb25mOiBEZXZjb25DYXJkQ29uZmlnKSA9PiB2b2lkO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxuICAgICAgICAke2NhcmRzLm1hcCgoY2FyZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2NhcmRQaWNrZWR9XCIgLnR5cGU9XCIke2NhcmR9XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKGB1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuJHtjYXJkfS5uYW1lYCl9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgYDtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9tYW51YWxQaWNrZWR9XCI+TUFOVUFMIENBUkQ8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRzLWNvbnRhaW5lciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBmbGV4OiAxIDAgMjUlO1xuICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5jYXJkcy1jb250YWluZXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMzMlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFudWFsUGlja2VkKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHtcbiAgICAgIGNvbmZpZzogeyB0eXBlOiBcIlwiIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYXJkUGlja2VkKGV2OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHR5cGUgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgQ2FyZFBpY2tUYXJnZXQpLnR5cGU7XG5cbiAgICBjb25zdCBlbENsYXNzID0gYXdhaXQgZ2V0Q2FyZEVsZW1lbnRDbGFzcyh0eXBlKTtcbiAgICBsZXQgY29uZmlnOiBEZXZjb25DYXJkQ29uZmlnID0geyB0eXBlIH07XG5cbiAgICBpZiAoZWxDbGFzcyAmJiBlbENsYXNzLmdldFN0dWJDb25maWcpIHtcbiAgICAgIGNvbnN0IGNhcmRDb25maWcgPSBlbENsYXNzLmdldFN0dWJDb25maWcodGhpcy5vcHAhKTtcbiAgICAgIGNvbmZpZyA9IHsgLi4uY29uZmlnLCAuLi5jYXJkQ29uZmlnIH07XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLXBpY2tlclwiOiBIdWlDYXJkUGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDYXJkRWxlbWVudCB9IGZyb20gXCIuLi8uLi9jcmVhdGUtZWxlbWVudC9jcmVhdGUtY2FyZC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZjb25DYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBEZXZjb25DYXJkIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdFcnJvciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL2h1aS1lcnJvci1jYXJkXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmV4cG9ydCBjbGFzcyBIdWlDYXJkUHJldmlldyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgcHJpdmF0ZSBfb3BwPzogT3BlblBlZXJQb3dlcjtcbiAgcHJpdmF0ZSBfZWxlbWVudD86IERldmNvbkNhcmQ7XG4gIHByaXZhdGUgX2NvbmZpZz86IERldmNvbkNhcmRDb25maWc7XG5cbiAgcHJpdmF0ZSBnZXQgX2Vycm9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Py50YWdOYW1lID09PSBcIkhVSS1FUlJPUi1DQVJEXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImxsLXJlYnVpbGRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuX2NvbmZpZztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldCBvcHAob3BwOiBPcGVuUGVlclBvd2VyKSB7XG4gICAgaWYgKCF0aGlzLl9vcHAgfHwgdGhpcy5fb3BwLmxhbmd1YWdlICE9PSBvcHAubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc3R5bGUuZGlyZWN0aW9uID0gY29tcHV0ZVJUTChvcHApID8gXCJydGxcIiA6IFwibHRyXCI7XG4gICAgfVxuXG4gICAgdGhpcy5fb3BwID0gb3BwO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50Lm9wcCA9IG9wcDtcbiAgICB9XG4gIH1cblxuICBzZXQgZXJyb3IoZXJyb3I6IENvbmZpZ0Vycm9yKSB7XG4gICAgdGhpcy5fY3JlYXRlQ2FyZChcbiAgICAgIGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhgJHtlcnJvci50eXBlfTogJHtlcnJvci5tZXNzYWdlfWAsIHVuZGVmaW5lZClcbiAgICApO1xuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWdWYWx1ZTogRGV2Y29uQ2FyZENvbmZpZykge1xuICAgIGNvbnN0IGN1ckNvbmZpZyA9IHRoaXMuX2NvbmZpZztcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdWYWx1ZTtcblxuICAgIGlmICghY29uZmlnVmFsdWUpIHtcbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZ1ZhbHVlLnR5cGUpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoXG4gICAgICAgIGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhcIk5vIGNhcmQgdHlwZSBmb3VuZFwiLCBjb25maWdWYWx1ZSlcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpbiBjYXNlIHRoZSBlbGVtZW50IHdhcyBhbiBlcnJvciBlbGVtZW50IHdlIGFsd2F5cyB3YW50IHRvIHJlY3JlYXRlIGl0XG4gICAgaWYgKCF0aGlzLl9lcnJvciAmJiBjdXJDb25maWcgJiYgY29uZmlnVmFsdWUudHlwZSA9PT0gY3VyQ29uZmlnLnR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0Q29uZmlnKGNvbmZpZ1ZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLl9jcmVhdGVDYXJkKGNyZWF0ZUVycm9yQ2FyZENvbmZpZyhlcnIubWVzc2FnZSwgY29uZmlnVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChjb25maWdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2FyZChjb25maWdWYWx1ZTogRGV2Y29uQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gY3JlYXRlQ2FyZEVsZW1lbnQoY29uZmlnVmFsdWUpO1xuXG4gICAgaWYgKHRoaXMuX29wcCkge1xuICAgICAgdGhpcy5fZWxlbWVudCEub3BwID0gdGhpcy5fb3BwO1xuICAgIH1cblxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudCEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYW51cCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1wcmV2aWV3XCI6IEh1aUNhcmRQcmV2aWV3O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImh1aS1jYXJkLXByZXZpZXdcIiwgSHVpQ2FyZFByZXZpZXcpO1xuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcclxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgb3BwOiBPcGVuUGVlclBvd2VyKSA9PlxyXG4gIHNob3dUb2FzdChlbCwge1xyXG4gICAgbWVzc2FnZTogb3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5zdWNjZXNzZnVsbHlfc2F2ZWRcIiksXHJcbiAgfSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBVUE7QUFFQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQXFCQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBOUJBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBQUE7QUFzREE7QUFDQTtBQUFBO0FBQ0E7QUF4REE7QUFBQTtBQUFBO0FBQUE7QUEyREE7O0FBRUE7O0FBR0E7Ozs7OztBQUFBOztBQUhBOzs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFHQTs7QUFIQTtBQU9BOztBQUdBOztBQUhBOzs7QUFTQTtBQUNBOztBQUVBOzs7O0FBL0NBO0FBd0RBO0FBbkhBO0FBQUE7QUFBQTtBQUFBO0FBc0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUEvSEE7QUFBQTtBQUFBO0FBQUE7QUFrSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE1SUE7QUFBQTtBQUFBO0FBQUE7QUErSUE7QUFDQTtBQUNBO0FBQ0E7QUFsSkE7QUFBQTtBQUFBO0FBQUE7QUFvSkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6SkE7QUFBQTtBQUFBO0FBQUE7QUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1TkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQWpQQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBUUE7QUFLQTtBQUNBO0FBRUE7QUE0QkE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTs7O0FBR0E7O0FBWEE7QUFjQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7QUExQ0E7QUFBQTtBQUFBO0FBQUE7QUE2Q0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBaERBO0FBQUE7QUFBQTtBQUFBO0FBbURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQTlEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBdkZBO0FBK0ZBOzs7Ozs7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==