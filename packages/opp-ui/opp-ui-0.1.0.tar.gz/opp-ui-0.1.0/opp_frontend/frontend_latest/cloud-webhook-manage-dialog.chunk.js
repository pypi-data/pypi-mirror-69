(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-webhook-manage-dialog"],{

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

/***/ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts":
/*!************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts ***!
  \************************************************************************************/
/*! exports provided: DialogManageCloudhook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogManageCloudhook", function() { return DialogManageCloudhook; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
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


const inputLabel = "Public URL – Click to copy to clipboard";
let DialogManageCloudhook = _decorate(null, function (_initialize, _LitElement) {
  class DialogManageCloudhook extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogManageCloudhook,
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
          webhook,
          cloudhook
        } = this._params;
        const docsUrl = webhook.domain === "automation" ? "https://www.open-peer-power.io/docs/automation/trigger/#webhook-trigger" : `https://www.open-peer-power.io/integrations/${webhook.domain}/`;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog with-backdrop>
        <h2>
          ${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.webhook_for", "name", webhook.name)}
        </h2>
        <div>
          <p>
            ${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.available_at")}
          </p>
          <paper-input
            label="${inputLabel}"
            value="${cloudhook.cloudhook_url}"
            @click="${this._copyClipboard}"
            @blur="${this._restoreLabel}"
          ></paper-input>
          <p>
            ${cloudhook.managed ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  ${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.managed_by_integration")}
                ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  ${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.info_disable_webhook")}
                  <button class="link" @click="${this._disableWebhook}">
                    ${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.link_disable_webhook")}</button
                  >.
                `}
          </p>
        </div>

        <div class="paper-dialog-buttons">
          <a href="${docsUrl}" target="_blank">
            <mwc-button
              >${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.view_documentation")}</mwc-button
            >
          </a>
          <mwc-button @click="${this._closeDialog}"
            >${this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.close")}</mwc-button
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
      kind: "get",
      key: "_paperInput",
      value: function _paperInput() {
        return this.shadowRoot.querySelector("paper-input");
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._dialog.close();
      }
    }, {
      kind: "method",
      key: "_disableWebhook",
      value: async function _disableWebhook() {
        if (!confirm(this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.confirm_disable"))) {
          return;
        }

        this._params.disableHook();

        this._closeDialog();
      }
    }, {
      kind: "method",
      key: "_copyClipboard",
      value: function _copyClipboard(ev) {
        // paper-input -> iron-input -> input
        const paperInput = ev.currentTarget;
        const input = paperInput.inputElement.inputElement;
        input.setSelectionRange(0, input.value.length);

        try {
          document.execCommand("copy");
          paperInput.label = this.opp.localize("ui.panel.config.cloud.dialog_cloudhook.copied_to_clipboard");
        } catch (err) {// Copying failed. Oh no
        }
      }
    }, {
      kind: "method",
      key: "_restoreLabel",
      value: function _restoreLabel() {
        this._paperInput.label = inputLabel;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          width: 650px;
        }
        paper-input {
          margin-top: -8px;
        }
        button.link {
          color: var(--primary-color);
        }
        .paper-dialog-buttons a {
          text-decoration: none;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("dialog-manage-cloudhook", DialogManageCloudhook);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay9kaWFsb2ctbWFuYWdlLWNsb3VkaG9vay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBPcElyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xyXG5pbXBvcnQgeyBPcElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vb3AtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcclxuXHJcbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XHJcblxyXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxyXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcclxuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xyXG4gICAgcmV0dXJuIE9wSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcclxuICB9LFxyXG59O1xyXG5cclxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3JcclxuLy8gZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNsYXNzIE9wUGFwZXJEaWFsb2dcclxuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXHJcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgIFwib3AtcGFwZXItZGlhbG9nXCI6IE9wUGFwZXJEaWFsb2c7XHJcbiAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXBhcGVyLWRpYWxvZ1wiLCBPcFBhcGVyRGlhbG9nKTtcclxuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCwgY3NzLCBDU1NSZXN1bHQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgV2ViaG9va0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjtcblxuY29uc3QgaW5wdXRMYWJlbCA9IFwiUHVibGljIFVSTCDigJMgQ2xpY2sgdG8gY29weSB0byBjbGlwYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIERpYWxvZ01hbmFnZUNsb3VkaG9vayBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgb3BwPzogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogV2ViaG9va0RpYWxvZ1BhcmFtcztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IFdlYmhvb2tEaWFsb2dQYXJhbXMpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgLy8gV2FpdCB0aWxsIGRpYWxvZyBpcyByZW5kZXJlZC5cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX2RpYWxvZy5vcGVuKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCB7IHdlYmhvb2ssIGNsb3VkaG9vayB9ID0gdGhpcy5fcGFyYW1zO1xuICAgIGNvbnN0IGRvY3NVcmwgPVxuICAgICAgd2ViaG9vay5kb21haW4gPT09IFwiYXV0b21hdGlvblwiXG4gICAgICAgID8gXCJodHRwczovL3d3dy5vcGVuLXBlZXItcG93ZXIuaW8vZG9jcy9hdXRvbWF0aW9uL3RyaWdnZXIvI3dlYmhvb2stdHJpZ2dlclwiXG4gICAgICAgIDogYGh0dHBzOi8vd3d3Lm9wZW4tcGVlci1wb3dlci5pby9pbnRlZ3JhdGlvbnMvJHt3ZWJob29rLmRvbWFpbn0vYDtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2cgd2l0aC1iYWNrZHJvcD5cbiAgICAgICAgPGgyPlxuICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZGlhbG9nX2Nsb3VkaG9vay53ZWJob29rX2ZvclwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICB3ZWJob29rLm5hbWVcbiAgICAgICAgICApfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmRpYWxvZ19jbG91ZGhvb2suYXZhaWxhYmxlX2F0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCIke2lucHV0TGFiZWx9XCJcbiAgICAgICAgICAgIHZhbHVlPVwiJHtjbG91ZGhvb2suY2xvdWRob29rX3VybH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jb3B5Q2xpcGJvYXJkfVwiXG4gICAgICAgICAgICBAYmx1cj1cIiR7dGhpcy5fcmVzdG9yZUxhYmVsfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAke2Nsb3VkaG9vay5tYW5hZ2VkXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2xvdWRob29rLm1hbmFnZWRfYnlfaW50ZWdyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2xvdWRob29rLmluZm9fZGlzYWJsZV93ZWJob29rXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiIEBjbGljaz1cIiR7dGhpcy5fZGlzYWJsZVdlYmhvb2t9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmRpYWxvZ19jbG91ZGhvb2subGlua19kaXNhYmxlX3dlYmhvb2tcIlxuICAgICAgICAgICAgICAgICAgICApfTwvYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+LlxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiJHtkb2NzVXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgPiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmRpYWxvZ19jbG91ZGhvb2sudmlld19kb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9jbG9zZURpYWxvZ31cIlxuICAgICAgICAgICAgPiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2xvdWRob29rLmNsb3NlXCJcbiAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZGlhbG9nKCk6IE9wUGFwZXJEaWFsb2cge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJvcC1wYXBlci1kaWFsb2dcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3BhcGVySW5wdXQoKTogUGFwZXJJbnB1dEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1pbnB1dFwiKSE7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGVXZWJob29rKCkge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZGlhbG9nX2Nsb3VkaG9vay5jb25maXJtX2Rpc2FibGVcIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyYW1zIS5kaXNhYmxlSG9vaygpO1xuICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9jb3B5Q2xpcGJvYXJkKGV2OiBGb2N1c0V2ZW50KSB7XG4gICAgLy8gcGFwZXItaW5wdXQgLT4gaXJvbi1pbnB1dCAtPiBpbnB1dFxuICAgIGNvbnN0IHBhcGVySW5wdXQgPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVySW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0ID0gKHBhcGVySW5wdXQuaW5wdXRFbGVtZW50IGFzIGFueSlcbiAgICAgIC5pbnB1dEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBpbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICBwYXBlcklucHV0LmxhYmVsID0gdGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5kaWFsb2dfY2xvdWRob29rLmNvcGllZF90b19jbGlwYm9hcmRcIlxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIENvcHlpbmcgZmFpbGVkLiBPaCBub1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc3RvcmVMYWJlbCgpIHtcbiAgICB0aGlzLl9wYXBlcklucHV0LmxhYmVsID0gaW5wdXRMYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogNjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmxpbmsge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZGlhbG9nLWJ1dHRvbnMgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy1tYW5hZ2UtY2xvdWRob29rXCI6IERpYWxvZ01hbmFnZUNsb3VkaG9vaztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkaWFsb2ctbWFuYWdlLWNsb3VkaG9va1wiLCBEaWFsb2dNYW5hZ2VDbG91ZGhvb2spO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7O0FBR0E7Ozs7QUFRQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFGQTtBQU9BO0FBR0E7QUFDQTs7QUFJQTs7Ozs7QUFLQTs7QUFFQTs7O0FBS0E7QUFDQTs7OztBQWxEQTtBQXlEQTtBQTdFQTtBQUFBO0FBQUE7QUFBQTtBQWdGQTtBQUNBO0FBakZBO0FBQUE7QUFBQTtBQUFBO0FBb0ZBO0FBQ0E7QUFyRkE7QUFBQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQXpGQTtBQUFBO0FBQUE7QUFBQTtBQTRGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBeEdBO0FBQUE7QUFBQTtBQUFBO0FBMkdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUF4SEE7QUFBQTtBQUFBO0FBQUE7QUEySEE7QUFDQTtBQTVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0hBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQkE7QUFoSkE7QUFBQTtBQUFBO0FBeUpBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=