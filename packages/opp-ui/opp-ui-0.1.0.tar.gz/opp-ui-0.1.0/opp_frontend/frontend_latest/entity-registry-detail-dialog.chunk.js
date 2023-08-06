(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["entity-registry-detail-dialog"],{

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

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

/***/ "./src/components/op-related-items.ts":
/*!********************************************!*\
  !*** ./src/components/op-related-items.ts ***!
  \********************************************/
/*! exports provided: OpRelatedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpRelatedItems", function() { return OpRelatedItems; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/search */ "./src/data/search.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _op_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./op-switch */ "./src/components/op-switch.ts");
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









let OpRelatedItems = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-related-items")], function (_initialize, _SubscribeMixin) {
  class OpRelatedItems extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpRelatedItems,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "itemType",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "itemId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_related",
      value: void 0
    }, {
      kind: "method",
      key: "oppSubscribe",
      value: function oppSubscribe() {
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_4__["subscribeDeviceRegistry"])(this.opp.connection, devices => {
          this._devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_2__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this._areas = areas;
        })];
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpRelatedItems.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_3__["getConfigEntries"])(this.opp).then(configEntries => {
          this._entries = configEntries;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpRelatedItems.prototype), "updated", this).call(this, changedProps);

        if ((changedProps.has("itemId") || changedProps.has("itemType")) && this.itemId && this.itemType) {
          this._findRelated();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._related) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (Object.keys(this._related).length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <p>
          ${this.opp.localize("ui.components.related-items.no_related_found")}
        </p>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this._related.config_entry && this._entries ? this._related.config_entry.map(relatedConfigEntryId => {
          const entry = this._entries.find(configEntry => configEntry.entry_id === relatedConfigEntryId);

          if (!entry) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.opp.localize("ui.components.related-items.integration")}:
              </h3>
              <a
                href="/config/integrations/config_entry/${relatedConfigEntryId}"
                @click=${this._close}
              >
                ${this.opp.localize(`component.${entry.domain}.config.title`)}:
                ${entry.title}
              </a>
            `;
        }) : ""}
      ${this._related.device && this._devices ? this._related.device.map(relatedDeviceId => {
          const device = this._devices.find(dev => dev.id === relatedDeviceId);

          if (!device) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.opp.localize("ui.components.related-items.device")}:
              </h3>
              <a
                href="/config/devices/device/${relatedDeviceId}"
                @click=${this._close}
              >
                ${device.name_by_user || device.name}
              </a>
            `;
        }) : ""}
      ${this._related.area && this._areas ? this._related.area.map(relatedAreaId => {
          const area = this._areas.find(ar => ar.area_id === relatedAreaId);

          if (!area) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>
                ${this.opp.localize("ui.components.related-items.area")}:
              </h3>
              ${area.name}
            `;
        }) : ""}
      ${this._related.entity ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.opp.localize("ui.components.related-items.entity")}:
            </h3>
            <ul>
              ${this._related.entity.map(entityId => {
          const entity = this.opp.states[entityId];

          if (!entity) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      @click=${this._openMoreInfo}
                      .entityId="${entityId}"
                      class="link"
                    >
                      ${entity.attributes.friendly_name || entityId}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.group ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>${this.opp.localize("ui.components.related-items.group")}:</h3>
            <ul>
              ${this._related.group.map(groupId => {
          const group = this.opp.states[groupId];

          if (!group) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${groupId}"
                    >
                      ${group.attributes.friendly_name || group.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.scene ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>${this.opp.localize("ui.components.related-items.scene")}:</h3>
            <ul>
              ${this._related.scene.map(sceneId => {
          const scene = this.opp.states[sceneId];

          if (!scene) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${sceneId}"
                    >
                      ${scene.attributes.friendly_name || scene.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.automation ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.opp.localize("ui.components.related-items.automation")}:
            </h3>
            <ul>
              ${this._related.automation.map(automationId => {
          const automation = this.opp.states[automationId];

          if (!automation) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${automationId}"
                    >
                      ${automation.attributes.friendly_name || automation.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
      ${this._related.script ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <h3>
              ${this.opp.localize("ui.components.related-items.script")}:
            </h3>
            <ul>
              ${this._related.script.map(scriptId => {
          const script = this.opp.states[scriptId];

          if (!script) {
            return;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <li>
                    <button
                      class="link"
                      @click=${this._openMoreInfo}
                      .entityId="${scriptId}"
                    >
                      ${script.attributes.friendly_name || script.entity_id}
                    </button>
                  </li>
                `;
        })}
            </ul>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "_findRelated",
      value: async function _findRelated() {
        this._related = await Object(_data_search__WEBPACK_IMPORTED_MODULE_5__["findRelated"])(this.opp, this.itemType, this.itemId);
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo(ev) {
        const entityId = ev.target.entityId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "opp-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "close-dialog");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      a {
        color: var(--primary-color);
      }
      button.link {
        color: var(--primary-color);
        text-align: left;
        cursor: pointer;
        background: none;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        padding: 0px;
        font: inherit;
        text-decoration: underline;
      }
      h3 {
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-title_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-title_-_font-size);
        font-weight: var(--paper-font-headline-_font-weight);
        letter-spacing: var(--paper-font-title_-_letter-spacing);
        line-height: var(--paper-font-title_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_6__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (opp, values) => opp.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (opp, areaId, updates) => opp.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (opp, areaId) => opp.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = opp => opp.callApi("GET", "config/config_entries/entry");
const deleteConfigEntry = (opp, configEntryId) => opp.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (opp, configEntryId) => opp.callWS({
  type: "config_entries/system_options/list",
  entry_id: configEntryId
});
const updateConfigEntrySystemOptions = (opp, configEntryId, params) => opp.callWS(Object.assign({
  type: "config_entries/system_options/update",
  entry_id: configEntryId
}, params));

/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: computeDeviceName, fallbackDeviceName, updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDeviceName", function() { return computeDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDeviceName", function() { return fallbackDeviceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");



const computeDeviceName = (device, opp, entities) => {
  return device.name_by_user || device.name || entities && fallbackDeviceName(opp, entities) || opp.localize("ui.panel.config.devices.unnamed_device");
};
const fallbackDeviceName = (opp, entities) => {
  for (const entity of entities || []) {
    const entityId = typeof entity === "string" ? entity : entity.entity_id;
    const stateObj = opp.states[entityId];

    if (stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
    }
  }

  return undefined;
};
const updateDeviceRegistryEntry = (opp, deviceId, updates) => opp.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/search.ts":
/*!****************************!*\
  !*** ./src/data/search.ts ***!
  \****************************/
/*! exports provided: findRelated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRelated", function() { return findRelated; });
const findRelated = (opp, itemType, itemId) => opp.callWS({
  type: "search/related",
  item_type: itemType,
  item_id: itemId
});

/***/ }),

/***/ "./src/panels/config/entities/dialog-entity-registry-detail.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/config/entities/dialog-entity-registry-detail.ts ***!
  \*********************************************************************/
/*! exports provided: DialogEntityRegistryDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEntityRegistryDetail", function() { return DialogEntityRegistryDetail; });
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/cache */ "./node_modules/lit-html/directives/cache.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _components_op_related_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/op-related-items */ "./src/components/op-related-items.ts");
/* harmony import */ var _dialogs_more_info_controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../dialogs/more-info/controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _entity_registry_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entity-registry-settings */ "./src/panels/config/entities/entity-registry-settings.ts");
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






let DialogEntityRegistryDetail = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("dialog-entity-registry-detail")], function (_initialize, _LitElement) {
  class DialogEntityRegistryDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogEntityRegistryDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_curTab",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("op-paper-dialog")],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      key: "_curTabIndex",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "closeDialog",
      value: function closeDialog() {
        this._params = undefined;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``;
        }

        const entry = this._params.entry;
        const entityId = this._params.entity_id;
        const stateObj = this.opp.states[entityId];
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <op-paper-dialog
        with-backdrop
        opened
        @opened-changed=${this._openedChanged}
      >
        <app-toolbar>
          <paper-icon-button
            aria-label=${this.opp.localize("ui.dialogs.entity_registry.dismiss")}
            icon="opp:close"
            dialog-dismiss
          ></paper-icon-button>
          <div class="main-title" main-title>
            ${stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj) : (entry === null || entry === void 0 ? void 0 : entry.name) || entityId}
          </div>
          ${stateObj ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.dialogs.entity_registry.control")}
                  icon="opp:tune"
                  @click=${this._openMoreInfo}
                ></paper-icon-button>
              ` : ""}
        </app-toolbar>
        <paper-tabs
          scrollable
          hide-scroll-buttons
          .selected=${this._curTabIndex}
          @selected-item-changed=${this._handleTabSelected}
        >
          <paper-tab id="tab-settings">
            ${this.opp.localize("ui.dialogs.entity_registry.settings")}
          </paper-tab>
          <paper-tab id="tab-related">
            ${this.opp.localize("ui.dialogs.entity_registry.related")}
          </paper-tab>
        </paper-tabs>
        ${Object(lit_html_directives_cache__WEBPACK_IMPORTED_MODULE_4__["cache"])(this._curTab === "tab-settings" ? entry ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <entity-registry-settings
                    .opp=${this.opp}
                    .entry=${entry}
                    .dialogElement=${this._dialog}
                    @close-dialog=${this._closeDialog}
                  ></entity-registry-settings>
                ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  <paper-dialog-scrollable>
                    ${this.opp.localize("ui.dialogs.entity_registry.no_unique_id")}
                  </paper-dialog-scrollable>
                ` : this._curTab === "tab-related" ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <paper-dialog-scrollable>
                  <op-related-items
                    .opp=${this.opp}
                    .itemId=${entityId}
                    itemType="entity"
                    @close-dialog=${this._closeDialog}
                  ></op-related-items>
                </paper-dialog-scrollable>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]``)}
      </op-paper-dialog>
    `;
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
      key: "_resizeDialog",
      value: async function _resizeDialog() {
        await this.updateComplete;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this._dialog, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_openMoreInfo",
      value: function _openMoreInfo() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "opp-more-info", {
          entityId: this._params.entity_id
        });
        this._params = undefined;
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._params = undefined;
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
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_3__["css"]`
        app-toolbar {
          color: var(--primary-text-color);
          background-color: var(--secondary-background-color);
          margin: 0;
          padding: 0 16px;
        }

        app-toolbar [main-title] {
          /* Design guideline states 24px, changed to 16 to align with state info */
          margin-left: 16px;
          line-height: 1.3em;
          max-height: 2.6em;
          overflow: hidden;
          /* webkit and blink still support simple multiline text-overflow */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        op-paper-dialog {
          width: 450px;
        }

        /* overrule the op-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          app-toolbar {
            background-color: var(--primary-color);
            color: var(--text-primary-color);
          }
          op-paper-dialog {
            height: 100%;
            max-height: 100% !important;
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          op-paper-dialog::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        mwc-button.warning {
          --mdc-theme-primary: var(--google-red-500);
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
        :host {
          --paper-font-title_-_white-space: normal;
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: var(--primary-color);
          text-transform: uppercase;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 0;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/entities/entity-registry-settings.ts":
/*!****************************************************************!*\
  !*** ./src/panels/config/entities/entity-registry-settings.ts ***!
  \****************************************************************/
/*! exports provided: EntityRegistrySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRegistrySettings", function() { return EntityRegistrySettings; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
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






 // tslint:disable-next-line: no-duplicate-imports



let EntityRegistrySettings = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("entity-registry-settings")], function (_initialize, _LitElement) {
  class EntityRegistrySettings extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: EntityRegistrySettings,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "entry",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "dialogElement",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_entityId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_disabledBy",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_submitting",
      value: void 0
    }, {
      kind: "field",
      key: "_origEntityId",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(EntityRegistrySettings.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("entry")) {
          this._error = undefined;
          this._name = this.entry.name || "";
          this._origEntityId = this.entry.entity_id;
          this._entityId = this.entry.entity_id;
          this._disabledBy = this.entry.disabled_by;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.entry.entity_id !== this._origEntityId) {
          return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]``;
        }

        const stateObj = this.opp.states[this.entry.entity_id];
        const invalidDomainUpdate = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__["computeDomain"])(this._entityId.trim()) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__["computeDomain"])(this.entry.entity_id);
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-dialog-scrollable .dialogElement=${this.dialogElement}>
        ${!stateObj ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div>
                ${this.opp.localize("ui.dialogs.entity_registry.editor.unavailable")}
              </div>
            ` : ""}
        ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <div class="error">${this._error}</div>
            ` : ""}
        <div class="form">
          <paper-input
            .value=${this._name}
            @value-changed=${this._nameChanged}
            .label=${this.opp.localize("ui.dialogs.entity_registry.editor.name")}
            .placeholder=${stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj) : ""}
            .disabled=${this._submitting}
          ></paper-input>
          <paper-input
            .value=${this._entityId}
            @value-changed=${this._entityIdChanged}
            .label=${this.opp.localize("ui.dialogs.entity_registry.editor.entity_id")}
            error-message="Domain needs to stay the same"
            .invalid=${invalidDomainUpdate}
            .disabled=${this._submitting}
          ></paper-input>
          <div class="row">
            <op-switch
              .checked=${!this._disabledBy}
              @change=${this._disabledByChanged}
            >
              <div>
                <div>
                  ${this.opp.localize("ui.dialogs.entity_registry.editor.enabled_label")}
                </div>
                <div class="secondary">
                  ${this._disabledBy && this._disabledBy !== "user" ? this.opp.localize("ui.dialogs.entity_registry.editor.enabled_cause", "cause", this.opp.localize(`config_entry.disabled_by.${this._disabledBy}`)) : ""}
                  ${this.opp.localize("ui.dialogs.entity_registry.editor.enabled_description")}
                  <br />${this.opp.localize("ui.dialogs.entity_registry.editor.note")}
                </div>
              </div>
            </op-switch>
          </div>
        </div>
      </paper-dialog-scrollable>
      <div class="buttons">
        <mwc-button
          class="warning"
          @click="${this._confirmDeleteEntry}"
          .disabled=${this._submitting || !(stateObj && stateObj.attributes.restored)}
        >
          ${this.opp.localize("ui.dialogs.entity_registry.editor.delete")}
        </mwc-button>
        <mwc-button
          @click="${this._updateEntry}"
          .disabled=${invalidDomainUpdate || this._submitting}
        >
          ${this.opp.localize("ui.dialogs.entity_registry.editor.update")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        this._error = undefined;
        this._name = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_entityIdChanged",
      value: function _entityIdChanged(ev) {
        this._error = undefined;
        this._entityId = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;
        const params = {
          name: this._name.trim() || null,
          new_entity_id: this._entityId.trim()
        };

        if (this._disabledBy === null || this._disabledBy === "user") {
          params.disabled_by = this._disabledBy;
        }

        try {
          await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_6__["updateEntityRegistryEntry"])(this.opp, this._origEntityId, params);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "close-dialog");
        } catch (err) {
          this._error = err.message || "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_confirmDeleteEntry",
      value: async function _confirmDeleteEntry() {
        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_7__["showConfirmationDialog"])(this, {
          text: this.opp.localize("ui.dialogs.entity_registry.editor.confirm_delete")
        }))) {
          return;
        }

        this._submitting = true;

        try {
          await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_6__["removeEntityRegistryEntry"])(this.opp, this._origEntityId);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "close-dialog");
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_disabledByChanged",
      value: function _disabledByChanged(ev) {
        this._disabledBy = ev.target.checked ? null : "user";
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      :host {
        display: block;
        margin-bottom: 0 !important;
        padding: 0 !important;
      }
      .form {
        padding-bottom: 24px;
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        padding: 8px;
      }
      mwc-button.warning {
        margin-right: auto;
        --mdc-theme-primary: var(--google-red-500);
      }
      .error {
        color: var(--google-red-500);
      }
      .row {
        margin-top: 8px;
        color: var(--primary-text-color);
      }
      .secondary {
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtcmVsYXRlZC1pdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZW50aXRpZXMvZW50aXR5LXJlZ2lzdHJ5LXNldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCB7IE9wcEVudGl0eSwgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5LCBnZXRDb25maWdFbnRyaWVzIH0gZnJvbSBcIi4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7IFNjZW5lRW50aXR5IH0gZnJvbSBcIi4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCB7IGZpbmRSZWxhdGVkLCBJdGVtVHlwZSwgUmVsYXRlZFJlc3VsdCB9IGZyb20gXCIuLi9kYXRhL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9vcC1zd2l0Y2hcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1yZWxhdGVkLWl0ZW1zXCIpXG5leHBvcnQgY2xhc3MgT3BSZWxhdGVkSXRlbXMgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXRlbVR5cGUhOiBJdGVtVHlwZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGl0ZW1JZCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50cmllcz86IENvbmZpZ0VudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZXM/OiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzPzogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcmVsYXRlZD86IFJlbGF0ZWRSZXN1bHQ7XG5cbiAgcHVibGljIG9wcFN1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24hLCAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24hLCAoYXJlYXMpID0+IHtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBnZXRDb25maWdFbnRyaWVzKHRoaXMub3BwKS50aGVuKChjb25maWdFbnRyaWVzKSA9PiB7XG4gICAgICB0aGlzLl9lbnRyaWVzID0gY29uZmlnRW50cmllcztcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKFxuICAgICAgKGNoYW5nZWRQcm9wcy5oYXMoXCJpdGVtSWRcIikgfHwgY2hhbmdlZFByb3BzLmhhcyhcIml0ZW1UeXBlXCIpKSAmJlxuICAgICAgdGhpcy5pdGVtSWQgJiZcbiAgICAgIHRoaXMuaXRlbVR5cGVcbiAgICApIHtcbiAgICAgIHRoaXMuX2ZpbmRSZWxhdGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9yZWxhdGVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcmVsYXRlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHA+XG4gICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5ub19yZWxhdGVkX2ZvdW5kXCIpfVxuICAgICAgICA8L3A+XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5fcmVsYXRlZC5jb25maWdfZW50cnkgJiYgdGhpcy5fZW50cmllc1xuICAgICAgICA/IHRoaXMuX3JlbGF0ZWQuY29uZmlnX2VudHJ5Lm1hcCgocmVsYXRlZENvbmZpZ0VudHJ5SWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5OiBDb25maWdFbnRyeSB8IHVuZGVmaW5lZCA9IHRoaXMuX2VudHJpZXMhLmZpbmQoXG4gICAgICAgICAgICAgIChjb25maWdFbnRyeSkgPT4gY29uZmlnRW50cnkuZW50cnlfaWQgPT09IHJlbGF0ZWRDb25maWdFbnRyeUlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuaW50ZWdyYXRpb25cIil9OlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9ucy9jb25maWdfZW50cnkvJHtyZWxhdGVkQ29uZmlnRW50cnlJZH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2Nsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShgY29tcG9uZW50LiR7ZW50cnkuZG9tYWlufS5jb25maWcudGl0bGVgKX06XG4gICAgICAgICAgICAgICAgJHtlbnRyeS50aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9KVxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuZGV2aWNlICYmIHRoaXMuX2RldmljZXNcbiAgICAgICAgPyB0aGlzLl9yZWxhdGVkLmRldmljZS5tYXAoKHJlbGF0ZWREZXZpY2VJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGV2aWNlOiBEZXZpY2VSZWdpc3RyeUVudHJ5IHwgdW5kZWZpbmVkID0gdGhpcy5fZGV2aWNlcyEuZmluZChcbiAgICAgICAgICAgICAgKGRldikgPT4gZGV2LmlkID09PSByZWxhdGVkRGV2aWNlSWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWRldmljZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuZGV2aWNlXCIpfTpcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL2NvbmZpZy9kZXZpY2VzL2RldmljZS8ke3JlbGF0ZWREZXZpY2VJZH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2Nsb3NlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHtkZXZpY2UubmFtZV9ieV91c2VyIHx8IGRldmljZS5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fcmVsYXRlZC5hcmVhICYmIHRoaXMuX2FyZWFzXG4gICAgICAgID8gdGhpcy5fcmVsYXRlZC5hcmVhLm1hcCgocmVsYXRlZEFyZWFJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJlYTogQXJlYVJlZ2lzdHJ5RW50cnkgfCB1bmRlZmluZWQgPSB0aGlzLl9hcmVhcyEuZmluZChcbiAgICAgICAgICAgICAgKGFyKSA9PiBhci5hcmVhX2lkID09PSByZWxhdGVkQXJlYUlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFhcmVhKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5hcmVhXCIpfTpcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgJHthcmVhLm5hbWV9XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fcmVsYXRlZC5lbnRpdHlcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGVkLWl0ZW1zLmVudGl0eVwiKX06XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAke3RoaXMuX3JlbGF0ZWQuZW50aXR5Lm1hcCgoZW50aXR5SWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHk6IE9wcEVudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMub3BwLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHtlbnRpdHlJZH1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAke2VudGl0eS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuZ3JvdXBcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGgzPiR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuZ3JvdXBcIil9OjwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICR7dGhpcy5fcmVsYXRlZC5ncm91cC5tYXAoKGdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cDogT3BwRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5vcHAuc3RhdGVzW2dyb3VwSWRdO1xuICAgICAgICAgICAgICAgIGlmICghZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX29wZW5Nb3JlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5SWQ9XCIke2dyb3VwSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7Z3JvdXAuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IGdyb3VwLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fcmVsYXRlZC5zY2VuZVxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aDM+JHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRlZC1pdGVtcy5zY2VuZVwiKX06PC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgJHt0aGlzLl9yZWxhdGVkLnNjZW5lLm1hcCgoc2NlbmVJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lOiBTY2VuZUVudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMub3BwLnN0YXRlc1tzY2VuZUlkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHtzY2VuZUlkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAke3NjZW5lLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBzY2VuZS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3JlbGF0ZWQuYXV0b21hdGlvblxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuYXV0b21hdGlvblwiKX06XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAke3RoaXMuX3JlbGF0ZWQuYXV0b21hdGlvbi5tYXAoKGF1dG9tYXRpb25JZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9tYXRpb246IE9wcEVudGl0eSB8IHVuZGVmaW5lZCA9IHRoaXMub3BwLnN0YXRlc1tcbiAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25JZFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgaWYgKCFhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuTW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPVwiJHthdXRvbWF0aW9uSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7YXV0b21hdGlvbi5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLl9yZWxhdGVkLnNjcmlwdFxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0ZWQtaXRlbXMuc2NyaXB0XCIpfTpcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICR7dGhpcy5fcmVsYXRlZC5zY3JpcHQubWFwKChzY3JpcHRJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdDogT3BwRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5vcHAuc3RhdGVzW3NjcmlwdElkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3Blbk1vcmVJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD1cIiR7c2NyaXB0SWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7c2NyaXB0LmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBzY3JpcHQuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maW5kUmVsYXRlZCgpIHtcbiAgICB0aGlzLl9yZWxhdGVkID0gYXdhaXQgZmluZFJlbGF0ZWQodGhpcy5vcHAsIHRoaXMuaXRlbVR5cGUsIHRoaXMuaXRlbUlkKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3Blbk1vcmVJbmZvKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNsb3NlLWRpYWxvZ1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBidXR0b24ubGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXItd2lkdGg6IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wYXBlci1mb250LXRpdGxlXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgLS1wYXBlci1mb250LXRpdGxlXy1fLXdlYmtpdC1mb250LXNtb290aGluZ1xuICAgICAgICApO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtdGl0bGVfLV9mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZS1fZm9udC13ZWlnaHQpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tcGFwZXItZm9udC10aXRsZV8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtdGl0bGVfLV9saW5lLWhlaWdodCk7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1yZWxhdGVkLWl0ZW1zXCI6IE9wUmVsYXRlZEl0ZW1zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBhcmVhSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeSB7XHJcbiAgZW50cnlfaWQ6IHN0cmluZztcclxuICBkb21haW46IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNvdXJjZTogc3RyaW5nO1xyXG4gIHN0YXRlOiBzdHJpbmc7XHJcbiAgY29ubmVjdGlvbl9jbGFzczogc3RyaW5nO1xyXG4gIHN1cHBvcnRzX29wdGlvbnM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIHtcclxuICBkaXNhYmxlX25ld19lbnRpdGllczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJpZXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKSA9PlxyXG4gIG9wcC5jYWxsQXBpPENvbmZpZ0VudHJ5W10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0VudHJ5ID0gKG9wcDogT3BlblBlZXJQb3dlciwgY29uZmlnRW50cnlJZDogc3RyaW5nKSA9PlxyXG4gIG9wcC5jYWxsQXBpPHtcclxuICAgIHJlcXVpcmVfcmVzdGFydDogYm9vbGVhbjtcclxuICB9PihcIkRFTEVURVwiLCBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5LyR7Y29uZmlnRW50cnlJZH1gKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXHJcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxyXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZ1xyXG4pID0+XHJcbiAgb3BwLmNhbGxXUzxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+KHtcclxuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvc3lzdGVtX29wdGlvbnMvbGlzdFwiLFxyXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxyXG4gIG9wcDogT3BlblBlZXJQb3dlcixcclxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXHJcbiAgcGFyYW1zOiBQYXJ0aWFsPENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucz5cclxuKSA9PlxyXG4gIG9wcC5jYWxsV1Moe1xyXG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy91cGRhdGVcIixcclxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxyXG4gICAgLi4ucGFyYW1zLFxyXG4gIH0pO1xyXG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4vZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VFbnRpdHlMb29rdXAge1xuICBbZGV2aWNlSWQ6IHN0cmluZ106IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZURldmljZU5hbWUgPSAoXG4gIGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSB8IHN0cmluZ1tdXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICBkZXZpY2UubmFtZV9ieV91c2VyIHx8XG4gICAgZGV2aWNlLm5hbWUgfHxcbiAgICAoZW50aXRpZXMgJiYgZmFsbGJhY2tEZXZpY2VOYW1lKG9wcCwgZW50aXRpZXMpKSB8fFxuICAgIG9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLnVubmFtZWRfZGV2aWNlXCIpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZmFsbGJhY2tEZXZpY2VOYW1lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzIHx8IFtdKSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSB0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiID8gZW50aXR5IDogZW50aXR5LmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IG9wcC5zdGF0ZXNbZW50aXR5SWRdO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVsYXRlZFJlc3VsdCB7XG4gIGFyZWE/OiBzdHJpbmdbXTtcbiAgYXV0b21hdGlvbj86IHN0cmluZ1tdO1xuICBjb25maWdfZW50cnk/OiBzdHJpbmdbXTtcbiAgZGV2aWNlPzogc3RyaW5nW107XG4gIGVudGl0eT86IHN0cmluZ1tdO1xuICBncm91cD86IHN0cmluZ1tdO1xuICBzY2VuZT86IHN0cmluZ1tdO1xuICBzY3JpcHQ/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IHR5cGUgSXRlbVR5cGUgPVxuICB8IFwiYXJlYVwiXG4gIHwgXCJhdXRvbWF0aW9uXCJcbiAgfCBcImNvbmZpZ19lbnRyeVwiXG4gIHwgXCJkZXZpY2VcIlxuICB8IFwiZW50aXR5XCJcbiAgfCBcImdyb3VwXCJcbiAgfCBcInNjZW5lXCJcbiAgfCBcInNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgZmluZFJlbGF0ZWQgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaXRlbVR5cGU6IEl0ZW1UeXBlLFxuICBpdGVtSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxSZWxhdGVkUmVzdWx0PiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInNlYXJjaC9yZWxhdGVkXCIsXG4gICAgaXRlbV90eXBlOiBpdGVtVHlwZSxcbiAgICBpdGVtX2lkOiBpdGVtSWQsXG4gIH0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFiXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIjtcbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NhY2hlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2dcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLXJlbGF0ZWQtaXRlbXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IG9wU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbnRlbnRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4vZW50aXR5LXJlZ2lzdHJ5LXNldHRpbmdzXCI7XG5pbXBvcnQgeyBFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0VudGl0eVJlZ2lzdHJ5RGV0YWlsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY3VyVGFiPzogc3RyaW5nO1xuICBAcXVlcnkoXCJvcC1wYXBlci1kaWFsb2dcIikgcHJpdmF0ZSBfZGlhbG9nITogT3BQYXBlckRpYWxvZztcbiAgcHJpdmF0ZSBfY3VyVGFiSW5kZXggPSAwO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKFxuICAgIHBhcmFtczogRW50aXR5UmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXNcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5fcGFyYW1zLmVudHJ5O1xuICAgIGNvbnN0IGVudGl0eUlkID0gdGhpcy5fcGFyYW1zLmVudGl0eV9pZDtcbiAgICBjb25zdCBzdGF0ZU9iajogT3BwRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5vcHAuc3RhdGVzW2VudGl0eUlkXTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZGlzbWlzc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgaWNvbj1cIm9wcDpjbG9zZVwiXG4gICAgICAgICAgICBkaWFsb2ctZGlzbWlzc1xuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlXCIgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICR7c3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IGVudHJ5Py5uYW1lIHx8IGVudGl0eUlkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7c3RhdGVPYmpcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBpY29uPVwib3BwOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3Blbk1vcmVJbmZvfVxuICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgIGhpZGUtc2Nyb2xsLWJ1dHRvbnNcbiAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9jdXJUYWJJbmRleH1cbiAgICAgICAgICBAc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlVGFiU2VsZWN0ZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItdGFiIGlkPVwidGFiLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuc2V0dGluZ3NcIil9XG4gICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgPHBhcGVyLXRhYiBpZD1cInRhYi1yZWxhdGVkXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkucmVsYXRlZFwiKX1cbiAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgPC9wYXBlci10YWJzPlxuICAgICAgICAke2NhY2hlKFxuICAgICAgICAgIHRoaXMuX2N1clRhYiA9PT0gXCJ0YWItc2V0dGluZ3NcIlxuICAgICAgICAgICAgPyBlbnRyeVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZW50aXR5LXJlZ2lzdHJ5LXNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgLmVudHJ5PSR7ZW50cnl9XG4gICAgICAgICAgICAgICAgICAgIC5kaWFsb2dFbGVtZW50PSR7dGhpcy5fZGlhbG9nfVxuICAgICAgICAgICAgICAgICAgICBAY2xvc2UtZGlhbG9nPSR7dGhpcy5fY2xvc2VEaWFsb2d9XG4gICAgICAgICAgICAgICAgICA+PC9lbnRpdHktcmVnaXN0cnktc2V0dGluZ3M+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5ub191bmlxdWVfaWRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IHRoaXMuX2N1clRhYiA9PT0gXCJ0YWItcmVsYXRlZFwiXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgICAgPG9wLXJlbGF0ZWQtaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAuaXRlbUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsb3NlLWRpYWxvZz0ke3RoaXMuX2Nsb3NlRGlhbG9nfVxuICAgICAgICAgICAgICAgICAgPjwvb3AtcmVsYXRlZC1pdGVtcz5cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgYFxuICAgICAgICApfVxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRhYlNlbGVjdGVkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1clRhYiA9IGV2LmRldGFpbC52YWx1ZS5pZDtcbiAgICB0aGlzLl9yZXNpemVEaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3Jlc2l6ZURpYWxvZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGZpcmVFdmVudCh0aGlzLl9kaWFsb2cgYXMgSFRNTEVsZW1lbnQsIFwiaXJvbi1yZXNpemVcIik7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuTW9yZUluZm8oKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwib3BwLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5fcGFyYW1zIS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VEaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIGlmICghKGV2LmRldGFpbCBhcyBhbnkpLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIC8qIERlc2lnbiBndWlkZWxpbmUgc3RhdGVzIDI0cHgsIGNoYW5nZWQgdG8gMTYgdG8gYWxpZ24gd2l0aCBzdGF0ZSBpbmZvICovXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIuNmVtO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgLyogd2Via2l0IGFuZCBibGluayBzdGlsbCBzdXBwb3J0IHNpbXBsZSBtdWx0aWxpbmUgdGV4dC1vdmVyZmxvdyAqL1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDUxcHgpIGFuZCAobWluLWhlaWdodDogNTAxcHgpIHtcbiAgICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIG92ZXJydWxlIHRoZSBvcC1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcC1wYXBlci1kaWFsb2c6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbi53YXJuaW5nIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLXBhcGVyLWZvbnQtdGl0bGVfLV93aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctZW50aXR5LXJlZ2lzdHJ5LWRldGFpbFwiOiBEaWFsb2dFbnRpdHlSZWdpc3RyeURldGFpbDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3Atc3dpdGNoXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBPcFN3aXRjaCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgRW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImVudGl0eS1yZWdpc3RyeS1zZXR0aW5nc1wiKVxuZXhwb3J0IGNsYXNzIEVudGl0eVJlZ2lzdHJ5U2V0dGluZ3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRyeSE6IEVudGl0eVJlZ2lzdHJ5RW50cnk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkaWFsb2dFbGVtZW50ITogSFRNTEVsZW1lbnQ7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0eUlkITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNhYmxlZEJ5ITogc3RyaW5nIHwgbnVsbDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmc/OiBib29sZWFuO1xuICBwcml2YXRlIF9vcmlnRW50aXR5SWQhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImVudHJ5XCIpKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB0aGlzLmVudHJ5Lm5hbWUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX29yaWdFbnRpdHlJZCA9IHRoaXMuZW50cnkuZW50aXR5X2lkO1xuICAgICAgdGhpcy5fZW50aXR5SWQgPSB0aGlzLmVudHJ5LmVudGl0eV9pZDtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQnkgPSB0aGlzLmVudHJ5LmRpc2FibGVkX2J5O1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICh0aGlzLmVudHJ5LmVudGl0eV9pZCAhPT0gdGhpcy5fb3JpZ0VudGl0eUlkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZU9iajogT3BwRW50aXR5IHwgdW5kZWZpbmVkID0gdGhpcy5vcHAuc3RhdGVzW1xuICAgICAgdGhpcy5lbnRyeS5lbnRpdHlfaWRcbiAgICBdO1xuICAgIGNvbnN0IGludmFsaWREb21haW5VcGRhdGUgPVxuICAgICAgY29tcHV0ZURvbWFpbih0aGlzLl9lbnRpdHlJZC50cmltKCkpICE9PVxuICAgICAgY29tcHV0ZURvbWFpbih0aGlzLmVudHJ5LmVudGl0eV9pZCk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSAuZGlhbG9nRWxlbWVudD0ke3RoaXMuZGlhbG9nRWxlbWVudH0+XG4gICAgICAgICR7IXN0YXRlT2JqXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5kaWFsb2dzLmVudGl0eV9yZWdpc3RyeS5lZGl0b3IudW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9uYW1lQ2hhbmdlZH1cbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5uYW1lXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIDogXCJcIn1cbiAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9lbnRpdHlJZH1cbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZW50aXR5SWRDaGFuZ2VkfVxuICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVudGl0eV9pZFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkRvbWFpbiBuZWVkcyB0byBzdGF5IHRoZSBzYW1lXCJcbiAgICAgICAgICAgIC5pbnZhbGlkPSR7aW52YWxpZERvbWFpblVwZGF0ZX1cbiAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPG9wLXN3aXRjaFxuICAgICAgICAgICAgICAuY2hlY2tlZD0keyF0aGlzLl9kaXNhYmxlZEJ5fVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZGlzYWJsZWRCeUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVuYWJsZWRfbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX2Rpc2FibGVkQnkgJiYgdGhpcy5fZGlzYWJsZWRCeSAhPT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmVuYWJsZWRfY2F1c2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F1c2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgY29uZmlnX2VudHJ5LmRpc2FibGVkX2J5LiR7dGhpcy5fZGlzYWJsZWRCeX1gXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5lbmFibGVkX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8YnIgLz4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MuZW50aXR5X3JlZ2lzdHJ5LmVkaXRvci5ub3RlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9vcC1zd2l0Y2g+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NvbmZpcm1EZWxldGVFbnRyeX1cIlxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmcgfHxcbiAgICAgICAgICAgICEoc3RhdGVPYmogJiYgc3RhdGVPYmouYXR0cmlidXRlcy5yZXN0b3JlZCl9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmRlbGV0ZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlRW50cnl9XCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHtpbnZhbGlkRG9tYWluVXBkYXRlIHx8IHRoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLnVwZGF0ZVwiKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uYW1lID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5SWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9lbnRpdHlJZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudHJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHBhcmFtczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPiA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpIHx8IG51bGwsXG4gICAgICBuZXdfZW50aXR5X2lkOiB0aGlzLl9lbnRpdHlJZC50cmltKCksXG4gICAgfTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRCeSA9PT0gbnVsbCB8fCB0aGlzLl9kaXNhYmxlZEJ5ID09PSBcInVzZXJcIikge1xuICAgICAgcGFyYW1zLmRpc2FibGVkX2J5ID0gdGhpcy5fZGlzYWJsZWRCeTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAhLCB0aGlzLl9vcmlnRW50aXR5SWQsIHBhcmFtcyk7XG4gICAgICBmaXJlRXZlbnQodGhpcyBhcyBIVE1MRWxlbWVudCwgXCJjbG9zZS1kaWFsb2dcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGVyci5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY29uZmlybURlbGV0ZUVudHJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChcbiAgICAgICEoYXdhaXQgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkuZGlhbG9ncy5lbnRpdHlfcmVnaXN0cnkuZWRpdG9yLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgKSxcbiAgICAgIH0pKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAhLCB0aGlzLl9vcmlnRW50aXR5SWQpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMgYXMgSFRNTEVsZW1lbnQsIFwiY2xvc2UtZGlhbG9nXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWRCeUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZWRCeSA9IChldi50YXJnZXQgYXMgT3BTd2l0Y2gpLmNoZWNrZWQgPyBudWxsIDogXCJ1c2VyXCI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5mb3JtIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgICAuYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIG13Yy1idXR0b24ud2FybmluZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgfVxuICAgICAgLmVycm9yIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgLnNlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZW50aXR5LXJlZ2lzdHJ5LXNldHRpbmdzXCI6IEVudGl0eVJlZ2lzdHJ5U2V0dGluZ3M7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFVQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTs7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFUQTtBQVlBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFSQTtBQVdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7QUFFQTtBQUpBO0FBTUE7QUFFQTs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQVBBO0FBV0E7O0FBdEJBO0FBMEJBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQ0E7O0FBRUE7OztBQVBBO0FBV0E7O0FBcEJBO0FBd0JBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQ0E7O0FBRUE7OztBQVBBO0FBV0E7O0FBcEJBO0FBd0JBOztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFFQTs7O0FBUEE7QUFZQTs7QUF6QkE7QUE2QkE7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUVBOzs7QUFQQTtBQVdBOztBQXRCQTtBQW5LQTtBQThMQTtBQS9PQTtBQUFBO0FBQUE7QUFBQTtBQWtQQTtBQUNBO0FBQ0E7QUFDQTtBQXJQQTtBQUFBO0FBQUE7QUFBQTtBQXdQQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBMVBBO0FBQUE7QUFBQTtBQUFBO0FBNlBBO0FBQ0E7QUE5UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNkJBO0FBOVJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFXQTtBQUtBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFVQTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUF3QkE7QUFLQTtBQU1BO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTs7OztBQUlBOzs7OztBQU9BOztBQUVBOztBQUdBOztBQUlBOztBQVBBOzs7OztBQWVBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7O0FBV0E7O0FBWkE7OztBQXFCQTtBQUNBOztBQUVBOzs7QUFQQTs7QUE1REE7QUEyRUE7QUFyR0E7QUFBQTtBQUFBO0FBQUE7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTdHQTtBQUFBO0FBQUE7QUFBQTtBQWdIQTtBQUNBO0FBQ0E7QUFsSEE7QUFBQTtBQUFBO0FBQUE7QUFxSEE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQXpIQTtBQUFBO0FBQUE7QUFBQTtBQTRIQTtBQUNBO0FBN0hBO0FBQUE7QUFBQTtBQUFBO0FBZ0lBO0FBQ0E7QUFDQTtBQUNBO0FBbklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1GQTtBQXpOQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7O0FBR0E7O0FBSEE7QUFTQTtBQUVBO0FBRkE7OztBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBOzs7QUFLQTtBQVNBO0FBR0E7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFsRkE7QUFzRkE7QUF2SEE7QUFBQTtBQUFBO0FBQUE7QUEwSEE7QUFDQTtBQUNBO0FBNUhBO0FBQUE7QUFBQTtBQUFBO0FBK0hBO0FBQ0E7QUFDQTtBQWpJQTtBQUFBO0FBQUE7QUFBQTtBQW9JQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBKQTtBQUFBO0FBQUE7QUFBQTtBQXVKQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6S0E7QUFBQTtBQUFBO0FBQUE7QUE0S0E7QUFDQTtBQTdLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7QUE3TUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=