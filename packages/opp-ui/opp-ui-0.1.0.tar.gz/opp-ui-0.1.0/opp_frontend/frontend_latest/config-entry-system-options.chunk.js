(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["config-entry-system-options"],{

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

/***/ "./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts":
/*!***************************************************************************************!*\
  !*** ./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
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







 // tslint:disable-next-line: no-duplicate-imports

let DialogConfigEntrySystemOptions = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-config-entry-system-options")], function (_initialize, _LitElement) {
  class DialogConfigEntrySystemOptions extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogConfigEntrySystemOptions,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_disableNewEntities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loading",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_submitting",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._error = undefined;
        this._loading = true;
        const systemOptions = await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_5__["getConfigEntrySystemOptions"])(this.opp, params.entry.entry_id);
        this._loading = false;
        this._disableNewEntities = systemOptions.disable_new_entities;
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${this.opp.localize("ui.dialogs.config_entry_system_options.title", "integration", this.opp.localize(`component.${this._params.entry.domain}.config.title`) || this._params.entry.domain)}
        </h2>
        <paper-dialog-scrollable>
          ${this._loading ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="init-spinner">
                  <paper-spinner-lite active></paper-spinner-lite>
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div class="error">${this._error}</div>
                    ` : ""}
                <div class="form">
                  <op-switch
                    .checked=${!this._disableNewEntities}
                    @change=${this._disableNewEntitiesChanged}
                    .disabled=${this._submitting}
                  >
                    <div>
                      <p>
                        ${this.opp.localize("ui.dialogs.config_entry_system_options.enable_new_entities_label")}
                      </p>
                      <p class="secondary">
                        ${this.opp.localize("ui.dialogs.config_entry_system_options.enable_new_entities_description", "integration", this.opp.localize(`component.${this._params.entry.domain}.config.title`) || this._params.entry.domain)}
                      </p>
                    </div>
                  </op-switch>
                </div>
              `}
        </paper-dialog-scrollable>
        ${!this._loading ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="paper-dialog-buttons">
                <mwc-button
                  @click="${this._updateEntry}"
                  .disabled=${this._submitting}
                >
                  ${this.opp.localize("ui.dialogs.config_entry_system_options.update")}
                </mwc-button>
              </div>
            ` : ""}
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_disableNewEntitiesChanged",
      value: function _disableNewEntitiesChanged(ev) {
        this._error = undefined;
        this._disableNewEntities = !ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;

        try {
          await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_5__["updateConfigEntrySystemOptions"])(this.opp, this._params.entry.entry_id, {
            disable_new_entities: this._disableNewEntities
          });
          this._params = undefined;
        } catch (err) {
          this._error = err.message || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._params = undefined;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_6__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          min-width: 400px;
          max-width: 500px;
        }
        .init-spinner {
          padding: 50px 100px;
          text-align: center;
        }

        .form {
          padding-top: 6px;
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        p {
          margin: 0;
        }
        .secondary {
          color: var(--secondary-text-color);
        }

        .error {
          color: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMvZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBPcElyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xyXG5pbXBvcnQgeyBPcElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuXHJcbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XHJcblxyXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxyXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcclxuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xyXG4gICAgcmV0dXJuIE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcclxuICB9LFxyXG59O1xyXG5cclxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3JcclxuLy8gZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2dcclxuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXHJcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgIFwib3AtcGFwZXItZGlhbG9nXCI6IE9wUGFwZXJEaWFsb2c7XHJcbiAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXBhcGVyLWRpYWxvZ1wiLCBPcFBhcGVyRGlhbG9nKTtcclxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIjtcbmltcG9ydCB7XG4gIGdldENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyxcbiAgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBvcFN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvb3Atc3dpdGNoXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiKVxuY2xhc3MgRGlhbG9nQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNhYmxlTmV3RW50aXRpZXMhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nUGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2FkaW5nPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3VibWl0dGluZz86IGJvb2xlYW47XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coXG4gICAgcGFyYW1zOiBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXNcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHN5c3RlbU9wdGlvbnMgPSBhd2FpdCBnZXRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMoXG4gICAgICB0aGlzLm9wcCxcbiAgICAgIHBhcmFtcy5lbnRyeS5lbnRyeV9pZFxuICAgICk7XG4gICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2Rpc2FibGVOZXdFbnRpdGllcyA9IHN5c3RlbU9wdGlvbnMuZGlzYWJsZV9uZXdfZW50aXRpZXM7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9XCIke3RoaXMuX29wZW5lZENoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3MuY29uZmlnX2VudHJ5X3N5c3RlbV9vcHRpb25zLnRpdGxlXCIsXG4gICAgICAgICAgICBcImludGVncmF0aW9uXCIsXG4gICAgICAgICAgICB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgYGNvbXBvbmVudC4ke3RoaXMuX3BhcmFtcy5lbnRyeS5kb21haW59LmNvbmZpZy50aXRsZWBcbiAgICAgICAgICAgICkgfHwgdGhpcy5fcGFyYW1zLmVudHJ5LmRvbWFpblxuICAgICAgICAgICl9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAke3RoaXMuX2xvYWRpbmdcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHshdGhpcy5fZGlzYWJsZU5ld0VudGl0aWVzfVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZGlzYWJsZU5ld0VudGl0aWVzQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5jb25maWdfZW50cnlfc3lzdGVtX29wdGlvbnMuZW5hYmxlX25ld19lbnRpdGllc19sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmNvbmZpZ19lbnRyeV9zeXN0ZW1fb3B0aW9ucy5lbmFibGVfbmV3X2VudGl0aWVzX2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvbXBvbmVudC4ke3RoaXMuX3BhcmFtcy5lbnRyeS5kb21haW59LmNvbmZpZy50aXRsZWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCB0aGlzLl9wYXJhbXMuZW50cnkuZG9tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L29wLXN3aXRjaD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgJHshdGhpcy5fbG9hZGluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlRW50cnl9XCJcbiAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmNvbmZpZ19lbnRyeV9zeXN0ZW1fb3B0aW9ucy51cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlTmV3RW50aXRpZXNDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Rpc2FibGVOZXdFbnRpdGllcyA9ICEoZXYudGFyZ2V0IGFzIE9wU3dpdGNoKS5jaGVja2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRW50cnkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucyhcbiAgICAgICAgdGhpcy5vcHAsXG4gICAgICAgIHRoaXMuX3BhcmFtcyEuZW50cnkuZW50cnlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNhYmxlX25ld19lbnRpdGllczogdGhpcy5fZGlzYWJsZU5ld0VudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnIubWVzc2FnZSB8fCBcIlVua25vd24gZXJyb3JcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIShldi5kZXRhaWwgYXMgYW55KS52YWx1ZSkge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluaXQtc3Bpbm5lciB7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZGFyeSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zXCI6IERpYWxvZ0NvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUtBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7O0FBU0E7Ozs7QUFBQTtBQU9BO0FBRUE7QUFGQTs7O0FBT0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUtBOzs7OztBQVdBOztBQUVBOzs7QUFJQTtBQUNBOztBQUVBOzs7QUFQQTs7QUF0REE7QUFzRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTZCQTs7O0FBL0pBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=