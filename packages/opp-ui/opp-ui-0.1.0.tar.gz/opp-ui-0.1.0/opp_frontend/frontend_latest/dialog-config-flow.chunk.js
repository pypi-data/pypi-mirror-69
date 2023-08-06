(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow"],{

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
};

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/components/op-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/op-icon-next.ts ***!
  \****************************************/
/*! exports provided: OpIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIconNext", function() { return OpIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./op-icon */ "./src/components/op-icon.ts");
 // Not duplicate, this is for typing.
// tslint:disable-next-line


class OpIconNext extends _op_icon__WEBPACK_IMPORTED_MODULE_1__["OpIcon"] {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "opp:chevron-right" : "opp:chevron-left";
    }, 100);
  }

}
customElements.define("op-icon-next", OpIconNext);

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

/***/ "./src/dialogs/config-flow/dialog-data-entry-flow.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/dialog-data-entry-flow.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_op_form_op_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/op-form/op-form */ "./src/components/op-form/op-form.ts");
/* harmony import */ var _components_op_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-markdown */ "./src/components/op-markdown.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _step_flow_pick_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step-flow-pick-handler */ "./src/dialogs/config-flow/step-flow-pick-handler.ts");
/* harmony import */ var _step_flow_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-flow-loading */ "./src/dialogs/config-flow/step-flow-loading.ts");
/* harmony import */ var _step_flow_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step-flow-form */ "./src/dialogs/config-flow/step-flow-form.ts");
/* harmony import */ var _step_flow_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./step-flow-external */ "./src/dialogs/config-flow/step-flow-external.ts");
/* harmony import */ var _step_flow_abort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./step-flow-abort */ "./src/dialogs/config-flow/step-flow-abort.ts");
/* harmony import */ var _step_flow_create_entry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./step-flow-create-entry */ "./src/dialogs/config-flow/step-flow-create-entry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");
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










 // Not duplicate, is for typing
// tslint:disable-next-line










let instance = 0;

let DataEntryFlowDialog = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-data-entry-flow")], function (_initialize, _LitElement) {
  class DataEntryFlowDialog extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DataEntryFlowDialog,
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loading",

      value() {
        return true;
      }

    }, {
      kind: "field",
      key: "_instance",

      value() {
        return instance;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_step",
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
      key: "_handlers",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubAreas",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubDevices",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._instance = instance++; // Create a new config flow. Show picker

        if (!params.continueFlowId && !params.startFlowHandler) {
          if (!params.flowConfig.getFlowHandlers) {
            throw new Error("No getFlowHandlers defined in flow config");
          }

          this._step = null; // We only load the handlers once

          if (this._handlers === undefined) {
            this._loading = true;
            this.updateComplete.then(() => this._scheduleCenterDialog());

            try {
              this._handlers = await params.flowConfig.getFlowHandlers(this.opp);
            } finally {
              this._loading = false;
            }
          }

          await this.updateComplete;

          this._scheduleCenterDialog();

          return;
        }

        this._loading = true;
        const curInstance = this._instance;
        const step = await (params.continueFlowId ? params.flowConfig.fetchFlow(this.opp, params.continueFlowId) : params.flowConfig.createFlow(this.opp, params.startFlowHandler)); // Happens if second showDialog called

        if (curInstance !== this._instance) {
          return;
        }

        this._processStep(step);

        this._loading = false; // When the flow changes, center the dialog.
        // Don't do it on each step or else the dialog keeps bouncing.

        this._scheduleCenterDialog();
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
        modal
        @opened-changed=${this._openedChanged}
      >
        ${this._loading || this._step === null && this._handlers === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <step-flow-loading></step-flow-loading>
            ` : this._step === undefined ? // When we are going to next step, we render 1 round of empty
        // to reset the element.
        "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                aria-label=${this.opp.localize("ui.panel.config.integrations.config_flow.dismiss")}
                icon="opp:close"
                dialog-dismiss
              ></paper-icon-button>
              ${this._step === null ? // Show handler picker
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-pick-handler
                      .flowConfig=${this._params.flowConfig}
                      .opp=${this.opp}
                      .handlers=${this._handlers}
                      .showAdvanced=${this._params.showAdvanced}
                    ></step-flow-pick-handler>
                  ` : this._step.type === "form" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-form
                      .flowConfig=${this._params.flowConfig}
                      .step=${this._step}
                      .opp=${this.opp}
                    ></step-flow-form>
                  ` : this._step.type === "external" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-external
                      .flowConfig=${this._params.flowConfig}
                      .step=${this._step}
                      .opp=${this.opp}
                    ></step-flow-external>
                  ` : this._step.type === "abort" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-abort
                      .flowConfig=${this._params.flowConfig}
                      .step=${this._step}
                      .opp=${this.opp}
                    ></step-flow-abort>
                  ` : this._devices === undefined || this._areas === undefined ? // When it's a create entry result, we will fetch device & area registry
        lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-loading></step-flow-loading>
                  ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <step-flow-create-entry
                      .flowConfig=${this._params.flowConfig}
                      .step=${this._step}
                      .opp=${this.opp}
                      .devices=${this._devices}
                      .areas=${this._areas}
                    ></step-flow-create-entry>
                  `}
            `}
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(DataEntryFlowDialog.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("flow-update", ev => {
          const {
            step,
            stepPromise
          } = ev.detail;

          this._processStep(step || stepPromise);
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("_step") && this._step && this._step.type === "create_entry") {
          if (this._params.flowConfig.loadDevicesAndAreas) {
            this._fetchDevices(this._step.result);

            this._fetchAreas();
          } else {
            this._devices = [];
            this._areas = [];
          }
        }

        if (changedProps.has("_devices") && this._dialog) {
          this._scheduleCenterDialog();
        }
      }
    }, {
      kind: "method",
      key: "_scheduleCenterDialog",
      value: function _scheduleCenterDialog() {
        setTimeout(() => this._dialog.center(), 0);
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "method",
      key: "_fetchDevices",
      value: async function _fetchDevices(configEntryId) {
        this._unsubDevices = Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeDeviceRegistry"])(this.opp.connection, devices => {
          this._devices = devices.filter(device => device.config_entries.includes(configEntryId));
        });
      }
    }, {
      kind: "method",
      key: "_fetchAreas",
      value: async function _fetchAreas() {
        this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_18__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this._areas = areas;
        });
      }
    }, {
      kind: "method",
      key: "_processStep",
      value: async function _processStep(step) {
        if (step instanceof Promise) {
          this._loading = true;

          try {
            this._step = await step;
          } finally {
            this._loading = false;
          }

          return;
        }

        if (step === undefined) {
          this._flowDone();

          return;
        }

        this._step = undefined;
        await this.updateComplete;
        this._step = step;
      }
    }, {
      kind: "method",
      key: "_flowDone",
      value: function _flowDone() {
        if (!this._params) {
          return;
        }

        const flowFinished = Boolean(this._step && ["create_entry", "abort"].includes(this._step.type)); // If we created this flow, delete it now.

        if (this._step && !flowFinished && !this._params.continueFlowId) {
          this._params.flowConfig.deleteFlow(this.opp, this._step.flow_id);
        }

        if (this._params.dialogClosedCallback) {
          this._params.dialogClosedCallback({
            flowFinished
          });
        }

        this._step = undefined;
        this._params = undefined;
        this._devices = undefined;

        if (this._unsubAreas) {
          this._unsubAreas();

          this._unsubAreas = undefined;
        }

        if (this._unsubDevices) {
          this._unsubDevices();

          this._unsubDevices = undefined;
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        // Closed dialog by clicking on the overlay
        if (!ev.detail.value) {
          if (this._step) {
            this._flowDone();
          } else if (this._step === null) {
            // Flow aborted during picking flow
            this._step = undefined;
            this._params = undefined;
          }
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          max-width: 600px;
        }
        op-paper-dialog > * {
          margin: 0;
          display: block;
          padding: 0;
        }
        paper-icon-button {
          display: inline-block;
          padding: 8px;
          margin: 16px 16px 0 0;
          float: right;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-abort.ts":
/*!****************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-abort.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
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






let StepFlowAbort = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-abort")], function (_initialize, _LitElement) {
  class StepFlowAbort extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowAbort,
    d: [{
      kind: "field",
      key: "flowConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "step",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>
        ${this.opp.localize("ui.panel.config.integrations.config_flow.aborted")}
      </h2>
      <div class="content">
        ${this.flowConfig.renderAbortDescription(this.opp, this.step)}
      </div>
      <div class="buttons">
        <mwc-button @click="${this._flowDone}"
          >${this.opp.localize("ui.panel.config.integrations.config_flow.close")}</mwc-button
        >
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_flowDone",
      value: function _flowDone() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "flow-update", {
          step: undefined
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return _styles__WEBPACK_IMPORTED_MODULE_3__["configFlowContentStyles"];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-create-entry.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-create-entry.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_op_area_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/op-area-picker */ "./src/components/op-area-picker.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
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












let StepFlowCreateEntry = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-create-entry")], function (_initialize, _LitElement) {
  class StepFlowCreateEntry extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowCreateEntry,
    d: [{
      kind: "field",
      key: "flowConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "step",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devices",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const localize = this.opp.localize;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>Success!</h2>
      <div class="content">
        ${this.flowConfig.renderCreateEntryDescription(this.opp, this.step)}
        ${this.devices.length === 0 ? "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <p>We found the following devices:</p>
              <div class="devices">
                ${this.devices.map(device => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div class="device">
                        <div>
                          <b>${device.name}</b><br />
                          ${device.model} (${device.manufacturer})
                        </div>
                        <op-area-picker
                          .opp=${this.opp}
                          .device=${device.id}
                          @value-changed=${this._areaPicked}
                        ></op-area-picker>
                      </div>
                    `)}
              </div>
            `}
      </div>
      <div class="buttons">
        <mwc-button @click="${this._flowDone}"
          >${localize("ui.panel.config.integrations.config_flow.finish")}</mwc-button
        >
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_flowDone",
      value: function _flowDone() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "flow-update", {
          step: undefined
        });
      }
    }, {
      kind: "method",
      key: "_areaPicked",
      value: async function _areaPicked(ev) {
        const picker = ev.currentTarget;
        const device = picker.device;
        const area = ev.detail.value;

        try {
          await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_8__["updateDeviceRegistryEntry"])(this.opp, device, {
            area_id: area
          });
        } catch (err) {
          Object(_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_9__["showAlertDialog"])(this, {
            text: this.opp.localize("ui.panel.config.integrations.config_flow.error_saving_area", "error", err.message)
          });
          picker.value = null;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_styles__WEBPACK_IMPORTED_MODULE_7__["configFlowContentStyles"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .devices {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
          max-height: 600px;
          overflow-y: auto;
        }
        .device {
          border: 1px solid var(--divider-color);
          padding: 5px;
          border-radius: 4px;
          margin: 4px;
          display: inline-block;
          width: 250px;
        }
        .buttons > *:last-child {
          margin-left: auto;
        }
        paper-dropdown-menu-light {
          cursor: pointer;
        }
        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          .device {
            width: 100%;
          }
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-external.ts":
/*!*******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-external.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
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






let StepFlowExternal = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-external")], function (_initialize, _LitElement) {
  class StepFlowExternal extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowExternal,
    d: [{
      kind: "field",
      key: "flowConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "step",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const localize = this.opp.localize;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>
        ${this.flowConfig.renderExternalStepHeader(this.opp, this.step)}
      </h2>
      <div class="content">
        ${this.flowConfig.renderExternalStepDescription(this.opp, this.step)}
        <div class="open-button">
          <a href=${this.step.url} target="_blank">
            <mwc-button raised>
              ${localize("ui.panel.config.integrations.config_flow.external_step.open_site")}
            </mwc-button>
          </a>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(StepFlowExternal.prototype), "firstUpdated", this).call(this, changedProps);

        this.opp.connection.subscribeEvents(async ev => {
          if (ev.data.flow_id !== this.step.flow_id) {
            return;
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "flow-update", {
            stepPromise: this.flowConfig.fetchFlow(this.opp, this.step.flow_id)
          });
        }, "data_entry_flow_progressed");
        window.open(this.step.url);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_styles__WEBPACK_IMPORTED_MODULE_3__["configFlowContentStyles"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .open-button {
          text-align: center;
          padding: 24px 0;
        }
        .open-button a {
          text-decoration: none;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-form.ts":
/*!***************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-form.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_op_form_op_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/op-form/op-form */ "./src/components/op-form/op-form.ts");
/* harmony import */ var _components_op_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/op-markdown */ "./src/components/op-markdown.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
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











let StepFlowForm = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-form")], function (_initialize, _LitElement) {
  class StepFlowForm extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowForm,
    d: [{
      kind: "field",
      key: "flowConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "step",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_loading",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_stepData",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_errorMsg",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const step = this.step;
        const stepData = this._stepDataProcessed;
        const allRequiredInfoFilledIn = stepData === undefined ? // If no data filled in, just check that any field is required
        step.data_schema.find(field => !field.optional) === undefined : // If data is filled in, make sure all required fields are
        stepData && step.data_schema.every(field => field.optional || !["", undefined].includes(stepData[field.name]));
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>
        ${this.flowConfig.renderShowFormStepHeader(this.opp, this.step)}
      </h2>
      <div class="content">
        ${this._errorMsg ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="error">${this._errorMsg}</div>
            ` : ""}
        ${this.flowConfig.renderShowFormStepDescription(this.opp, this.step)}
        <op-form
          .data=${stepData}
          @value-changed=${this._stepDataChanged}
          .schema=${step.data_schema}
          .error=${step.errors}
          .computeLabel=${this._labelCallback}
          .computeError=${this._errorCallback}
        ></op-form>
      </div>
      <div class="buttons">
        ${this._loading ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="submit-spinner">
                <paper-spinner active></paper-spinner>
              </div>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div>
                <mwc-button
                  @click=${this._submitStep}
                  .disabled=${!allRequiredInfoFilledIn}
                  >${this.opp.localize("ui.panel.config.integrations.config_flow.submit")}
                </mwc-button>

                ${!allRequiredInfoFilledIn ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <paper-tooltip position="left"
                        >${this.opp.localize("ui.panel.config.integrations.config_flow.not_all_required_fields")}
                      </paper-tooltip>
                    ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
              </div>
            `}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(StepFlowForm.prototype), "firstUpdated", this).call(this, changedProps);

        setTimeout(() => this.shadowRoot.querySelector("op-form").focus(), 0);
        this.addEventListener("keypress", ev => {
          if (ev.keyCode === 13) {
            this._submitStep();
          }
        });
      }
    }, {
      kind: "get",
      key: "_stepDataProcessed",
      value: function _stepDataProcessed() {
        if (this._stepData !== undefined) {
          return this._stepData;
        }

        const data = {};
        this.step.data_schema.forEach(field => {
          if ("default" in field) {
            data[field.name] = field.default;
          }
        });
        return data;
      }
    }, {
      kind: "method",
      key: "_submitStep",
      value: async function _submitStep() {
        this._loading = true;
        this._errorMsg = undefined;
        const flowId = this.step.flow_id;
        const stepData = this._stepData || {};
        const toSendData = {};
        Object.keys(stepData).forEach(key => {
          const value = stepData[key];
          const isEmpty = [undefined, ""].includes(value);

          if (!isEmpty) {
            toSendData[key] = value;
          }
        });

        try {
          const step = await this.flowConfig.handleFlowStep(this.opp, this.step.flow_id, toSendData); // make sure we're still showing the same step as when we
          // fired off request.

          if (!this.step || flowId !== this.step.flow_id) {
            return;
          }

          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "flow-update", {
            step
          });
        } catch (err) {
          this._errorMsg = err && err.body && err.body.message || "Unknown error occurred";
        } finally {
          this._loading = false;
        }
      }
    }, {
      kind: "method",
      key: "_stepDataChanged",
      value: function _stepDataChanged(ev) {
        this._stepData = ev.detail.value;
      }
    }, {
      kind: "field",
      key: "_labelCallback",

      value() {
        return field => this.flowConfig.renderShowFormStepFieldLabel(this.opp, this.step, field);
      }

    }, {
      kind: "field",
      key: "_errorCallback",

      value() {
        return error => this.flowConfig.renderShowFormStepFieldError(this.opp, this.step, error);
      }

    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_styles__WEBPACK_IMPORTED_MODULE_8__["configFlowContentStyles"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .error {
          color: red;
        }

        .submit-spinner {
          margin-right: 16px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-loading.ts":
/*!******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-loading.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
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




let StepFlowLoading = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-loading")], function (_initialize, _LitElement) {
  class StepFlowLoading extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowLoading,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="init-spinner">
        <paper-spinner-lite active></paper-spinner-lite>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .init-spinner {
        padding: 50px 100px;
        text-align: center;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-pick-handler.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-pick-handler.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_op_icon_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-icon-next */ "./src/components/op-icon-next.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
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














let StepFlowPickHandler = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("step-flow-pick-handler")], function (_initialize, _LitElement) {
  class StepFlowPickHandler extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StepFlowPickHandler,
    d: [{
      kind: "field",
      key: "flowConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "handlers",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "filter",
      value: void 0
    }, {
      kind: "field",
      key: "_width",
      value: void 0
    }, {
      kind: "field",
      key: "_getHandlers",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])((h, filter) => {
          const handlers = h.map(handler => {
            return {
              name: this.opp.localize(`component.${handler}.config.title`) || handler,
              slug: handler
            };
          });

          if (filter) {
            const options = {
              keys: ["name", "slug"],
              caseSensitive: false,
              minMatchCharLength: 2,
              threshold: 0.2
            };
            const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_6__(handlers, options);
            return fuse.search(filter);
          }

          return handlers.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1);
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const handlers = this._getHandlers(this.handlers, this.filter);

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h2>${this.opp.localize("ui.panel.config.integrations.new")}</h2>
      <search-input
        .filter=${this.filter}
        @value-changed=${this._filterChanged}
      ></search-input>
      <div
        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_9__["styleMap"])({
          width: `${this._width}px`
        })}
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__["classMap"])({
          advanced: Boolean(this.showAdvanced)
        })}
      >
        ${handlers.map(handler => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item @click=${this._handlerPicked} .handler=${handler}>
                <paper-item-body>
                  ${handler.name}
                </paper-item-body>
                <op-icon-next></op-icon-next>
              </paper-item>
            `)}
      </div>
      ${this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <p>
              ${this.opp.localize("ui.panel.config.integrations.note_about_integrations")}<br />
              ${this.opp.localize("ui.panel.config.integrations.note_about_website_reference")}<a
                href="https://www.open-peer-power.io/integrations/"
                target="_blank"
                >${this.opp.localize("ui.panel.config.integrations.open_peer_power_website")}</a
              >.
            </p>
          ` : ""}
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(StepFlowPickHandler.prototype), "firstUpdated", this).call(this, changedProps);

        setTimeout(() => this.shadowRoot.querySelector("search-input").focus(), 0);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(StepFlowPickHandler.prototype), "updated", this).call(this, changedProps); // Store the width so that when we search, box doesn't jump


        if (!this._width) {
          const width = this.shadowRoot.querySelector("div").clientWidth;

          if (width) {
            this._width = width;
          }
        }
      }
    }, {
      kind: "method",
      key: "_filterChanged",
      value: async function _filterChanged(e) {
        this.filter = e.detail.value;
      }
    }, {
      kind: "method",
      key: "_handlerPicked",
      value: async function _handlerPicked(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "flow-update", {
          stepPromise: this.flowConfig.createFlow(this.opp, ev.currentTarget.handler.slug)
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_styles__WEBPACK_IMPORTED_MODULE_10__["configFlowContentStyles"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        div {
          overflow: auto;
          max-height: 600px;
        }
        @media all and (max-height: 1px) {
          div {
            max-height: calc(100vh - 205px);
          }
          div.advanced {
            max-height: calc(100vh - 300px);
          }
        }
        paper-item {
          cursor: pointer;
        }
        p {
          text-align: center;
          padding: 16px;
          margin: 0;
        }
        p > a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/config-flow/styles.ts":
/*!*******************************************!*\
  !*** ./src/dialogs/config-flow/styles.ts ***!
  \*******************************************/
/*! exports provided: configFlowContentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFlowContentStyles", function() { return configFlowContentStyles; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configFlowContentStyles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
  h2 {
    margin-top: 24px;
    padding: 0 24px;
  }

  .content {
    margin-top: 20px;
    padding: 0 24px;
  }

  .buttons {
    position: relative;
    padding: 8px 8px 8px 24px;
    margin: 0;
    color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
  }

  op-markdown {
    overflow-wrap: break-word;
  }
  op-markdown a {
    color: var(--primary-color);
  }
  op-markdown img:first-child:last-child {
    display: block;
    margin: 0 auto;
  }
`;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmljZV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9kaWFsb2ctZGF0YS1lbnRyeS1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1hYm9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctY3JlYXRlLWVudHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1leHRlcm5hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9jb25maWctZmxvdy9zdGVwLWZsb3ctcGljay1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9wSWNvbiB9IGZyb20gXCIuL29wLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbk5leHQgZXh0ZW5kcyBPcEljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gXCJvcHA6Y2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgOiBcIm9wcDpjaGV2cm9uLWxlZnRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1pY29uLW5leHRcIjogT3BJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1pY29uLW5leHRcIiwgT3BJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvY3JlYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBhcmVhSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnkge1xuICBpZDogc3RyaW5nO1xuICBjb25maWdfZW50cmllczogc3RyaW5nW107XG4gIGNvbm5lY3Rpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBzd192ZXJzaW9uPzogc3RyaW5nO1xuICB2aWFfZGV2aWNlX2lkPzogc3RyaW5nO1xuICBhcmVhX2lkPzogc3RyaW5nO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlRW50aXR5TG9va3VwIHtcbiAgW2RldmljZUlkOiBzdHJpbmddOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBhcmVhX2lkPzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVEZXZpY2VOYW1lID0gKFxuICBkZXZpY2U6IERldmljZVJlZ2lzdHJ5RW50cnksXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50aXRpZXM/OiBFbnRpdHlSZWdpc3RyeUVudHJ5W10gfCBzdHJpbmdbXVxuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgZGV2aWNlLm5hbWVfYnlfdXNlciB8fFxuICAgIGRldmljZS5uYW1lIHx8XG4gICAgKGVudGl0aWVzICYmIGZhbGxiYWNrRGV2aWNlTmFtZShvcHAsIGVudGl0aWVzKSkgfHxcbiAgICBvcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy51bm5hbWVkX2RldmljZVwiKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZhbGxiYWNrRGV2aWNlTmFtZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdIHwgc3RyaW5nW11cbikgPT4ge1xuICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcyB8fCBbXSkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gdHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIiA/IGVudGl0eSA6IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgY29uc3Qgc3RhdGVPYmogPSBvcHAuc3RhdGVzW2VudGl0eUlkXTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRldmljZUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RGV2aWNlUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXM+XG4pID0+XG4gIG9wcC5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG4vLyBOb3QgZHVwbGljYXRlLCBpcyBmb3IgdHlwaW5nXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBvcFN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuXG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1waWNrLWhhbmRsZXJcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWxvYWRpbmdcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWZvcm1cIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWV4dGVybmFsXCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1hYm9ydFwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctY3JlYXRlLWVudHJ5XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcCB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5sZXQgaW5zdGFuY2UgPSAwO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwiZmxvdy11cGRhdGVcIjoge1xuICAgICAgc3RlcD86IERhdGFFbnRyeUZsb3dTdGVwO1xuICAgICAgc3RlcFByb21pc2U/OiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiKVxuY2xhc3MgRGF0YUVudHJ5Rmxvd0RpYWxvZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9hZGluZyA9IHRydWU7XG4gIHByaXZhdGUgX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N0ZXA6XG4gICAgfCBEYXRhRW50cnlGbG93U3RlcFxuICAgIHwgdW5kZWZpbmVkXG4gICAgLy8gTnVsbCBtZWFucyB3ZSBuZWVkIHRvIHBpY2sgYSBjb25maWcgZmxvd1xuICAgIHwgbnVsbDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYXM/OiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYW5kbGVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF91bnN1YkFyZWFzPzogVW5zdWJzY3JpYmVGdW5jO1xuICBwcml2YXRlIF91bnN1YkRldmljZXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2UrKztcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBjb25maWcgZmxvdy4gU2hvdyBwaWNrZXJcbiAgICBpZiAoIXBhcmFtcy5jb250aW51ZUZsb3dJZCAmJiAhcGFyYW1zLnN0YXJ0Rmxvd0hhbmRsZXIpIHtcbiAgICAgIGlmICghcGFyYW1zLmZsb3dDb25maWcuZ2V0Rmxvd0hhbmRsZXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGdldEZsb3dIYW5kbGVycyBkZWZpbmVkIGluIGZsb3cgY29uZmlnXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RlcCA9IG51bGw7XG5cbiAgICAgIC8vIFdlIG9ubHkgbG9hZCB0aGUgaGFuZGxlcnMgb25jZVxuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLl9zY2hlZHVsZUNlbnRlckRpYWxvZygpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVycyA9IGF3YWl0IHBhcmFtcy5mbG93Q29uZmlnLmdldEZsb3dIYW5kbGVycyh0aGlzLm9wcCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjdXJJbnN0YW5jZSA9IHRoaXMuX2luc3RhbmNlO1xuICAgIGNvbnN0IHN0ZXAgPSBhd2FpdCAocGFyYW1zLmNvbnRpbnVlRmxvd0lkXG4gICAgICA/IHBhcmFtcy5mbG93Q29uZmlnLmZldGNoRmxvdyh0aGlzLm9wcCwgcGFyYW1zLmNvbnRpbnVlRmxvd0lkKVxuICAgICAgOiBwYXJhbXMuZmxvd0NvbmZpZy5jcmVhdGVGbG93KHRoaXMub3BwLCBwYXJhbXMuc3RhcnRGbG93SGFuZGxlciEpKTtcblxuICAgIC8vIEhhcHBlbnMgaWYgc2Vjb25kIHNob3dEaWFsb2cgY2FsbGVkXG4gICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyBXaGVuIHRoZSBmbG93IGNoYW5nZXMsIGNlbnRlciB0aGUgZGlhbG9nLlxuICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBtb2RhbFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICAke3RoaXMuX2xvYWRpbmcgfHwgKHRoaXMuX3N0ZXAgPT09IG51bGwgJiYgdGhpcy5faGFuZGxlcnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzdGVwLWZsb3ctbG9hZGluZz48L3N0ZXAtZmxvdy1sb2FkaW5nPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAvLyBXaGVuIHdlIGFyZSBnb2luZyB0byBuZXh0IHN0ZXAsIHdlIHJlbmRlciAxIHJvdW5kIG9mIGVtcHR5XG4gICAgICAgICAgICAvLyB0byByZXNldCB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5kaXNtaXNzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGljb249XCJvcHA6Y2xvc2VcIlxuICAgICAgICAgICAgICAgIGRpYWxvZy1kaXNtaXNzXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAke3RoaXMuX3N0ZXAgPT09IG51bGxcbiAgICAgICAgICAgICAgICA/IC8vIFNob3cgaGFuZGxlciBwaWNrZXJcbiAgICAgICAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxzdGVwLWZsb3ctcGljay1oYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmZsb3dDb25maWc9JHt0aGlzLl9wYXJhbXMuZmxvd0NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgICAgLmhhbmRsZXJzPSR7dGhpcy5faGFuZGxlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgLnNob3dBZHZhbmNlZD0ke3RoaXMuX3BhcmFtcy5zaG93QWR2YW5jZWR9XG4gICAgICAgICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1waWNrLWhhbmRsZXI+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiZm9ybVwiXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3RlcC1mbG93LWZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1mb3JtPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImV4dGVybmFsXCJcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxzdGVwLWZsb3ctZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1leHRlcm5hbD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3N0ZXAudHlwZSA9PT0gXCJhYm9ydFwiXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3RlcC1mbG93LWFib3J0XG4gICAgICAgICAgICAgICAgICAgICAgLmZsb3dDb25maWc9JHt0aGlzLl9wYXJhbXMuZmxvd0NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RoaXMuX3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctYWJvcnQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9kZXZpY2VzID09PSB1bmRlZmluZWQgfHwgdGhpcy5fYXJlYXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gLy8gV2hlbiBpdCdzIGEgY3JlYXRlIGVudHJ5IHJlc3VsdCwgd2Ugd2lsbCBmZXRjaCBkZXZpY2UgJiBhcmVhIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3RlcC1mbG93LWxvYWRpbmc+PC9zdGVwLWZsb3ctbG9hZGluZz5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgLmZsb3dDb25maWc9JHt0aGlzLl9wYXJhbXMuZmxvd0NvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RoaXMuX3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2VzPSR7dGhpcy5fZGV2aWNlc31cbiAgICAgICAgICAgICAgICAgICAgICAuYXJlYXM9JHt0aGlzLl9hcmVhc31cbiAgICAgICAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWNyZWF0ZS1lbnRyeT5cbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICBgfVxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZsb3ctdXBkYXRlXCIsIChldikgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwLCBzdGVwUHJvbWlzZSB9ID0gKGV2IGFzIGFueSkuZGV0YWlsO1xuICAgICAgdGhpcy5fcHJvY2Vzc1N0ZXAoc3RlcCB8fCBzdGVwUHJvbWlzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcIl9zdGVwXCIpICYmXG4gICAgICB0aGlzLl9zdGVwICYmXG4gICAgICB0aGlzLl9zdGVwLnR5cGUgPT09IFwiY3JlYXRlX2VudHJ5XCJcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLl9wYXJhbXMhLmZsb3dDb25maWcubG9hZERldmljZXNBbmRBcmVhcykge1xuICAgICAgICB0aGlzLl9mZXRjaERldmljZXModGhpcy5fc3RlcC5yZXN1bHQpO1xuICAgICAgICB0aGlzLl9mZXRjaEFyZWFzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gW107XG4gICAgICAgIHRoaXMuX2FyZWFzID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfZGV2aWNlc1wiKSAmJiB0aGlzLl9kaWFsb2cpIHtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2NoZWR1bGVDZW50ZXJEaWFsb2coKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9kaWFsb2cuY2VudGVyKCksIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2RpYWxvZygpOiBPcFBhcGVyRGlhbG9nIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwib3AtcGFwZXItZGlhbG9nXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGV2aWNlcyhjb25maWdFbnRyeUlkKSB7XG4gICAgdGhpcy5fdW5zdWJEZXZpY2VzID0gc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkoXG4gICAgICB0aGlzLm9wcC5jb25uZWN0aW9uLFxuICAgICAgKGRldmljZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmluY2x1ZGVzKGNvbmZpZ0VudHJ5SWQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQXJlYXMoKSB7XG4gICAgdGhpcy5fdW5zdWJBcmVhcyA9IHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLm9wcC5jb25uZWN0aW9uLCAoYXJlYXMpID0+IHtcbiAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9wcm9jZXNzU3RlcChcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcCB8IHVuZGVmaW5lZCB8IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChzdGVwIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9zdGVwID0gYXdhaXQgc3RlcDtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9mbG93RG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gIH1cblxuICBwcml2YXRlIF9mbG93RG9uZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmbG93RmluaXNoZWQgPSBCb29sZWFuKFxuICAgICAgdGhpcy5fc3RlcCAmJiBbXCJjcmVhdGVfZW50cnlcIiwgXCJhYm9ydFwiXS5pbmNsdWRlcyh0aGlzLl9zdGVwLnR5cGUpXG4gICAgKTtcblxuICAgIC8vIElmIHdlIGNyZWF0ZWQgdGhpcyBmbG93LCBkZWxldGUgaXQgbm93LlxuICAgIGlmICh0aGlzLl9zdGVwICYmICFmbG93RmluaXNoZWQgJiYgIXRoaXMuX3BhcmFtcy5jb250aW51ZUZsb3dJZCkge1xuICAgICAgdGhpcy5fcGFyYW1zLmZsb3dDb25maWcuZGVsZXRlRmxvdyh0aGlzLm9wcCwgdGhpcy5fc3RlcC5mbG93X2lkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGFyYW1zLmRpYWxvZ0Nsb3NlZENhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9wYXJhbXMuZGlhbG9nQ2xvc2VkQ2FsbGJhY2soe1xuICAgICAgICBmbG93RmluaXNoZWQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9kZXZpY2VzID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl91bnN1YkFyZWFzKSB7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzKCk7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdW5zdWJEZXZpY2VzKSB7XG4gICAgICB0aGlzLl91bnN1YkRldmljZXMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViRGV2aWNlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KTogdm9pZCB7XG4gICAgLy8gQ2xvc2VkIGRpYWxvZyBieSBjbGlja2luZyBvbiB0aGUgb3ZlcmxheVxuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5fc3RlcCkge1xuICAgICAgICB0aGlzLl9mbG93RG9uZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGVwID09PSBudWxsKSB7XG4gICAgICAgIC8vIEZsb3cgYWJvcnRlZCBkdXJpbmcgcGlja2luZyBmbG93XG4gICAgICAgIHRoaXMuX3N0ZXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIG9wLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1wYXBlci1kaWFsb2cgPiAqIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMTZweCAwIDA7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjogRGF0YUVudHJ5Rmxvd0RpYWxvZztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydCB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctYWJvcnRcIilcbmNsYXNzIFN0ZXBGbG93QWJvcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGZsb3dDb25maWchOiBGbG93Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgc3RlcCE6IERhdGFFbnRyeUZsb3dTdGVwQWJvcnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+XG4gICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmFib3J0ZWRcIil9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgJHt0aGlzLmZsb3dDb25maWcucmVuZGVyQWJvcnREZXNjcmlwdGlvbih0aGlzLm9wcCwgdGhpcy5zdGVwKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9mbG93RG9uZX1cIlxuICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmNsb3NlXCJcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmxvd0RvbmUoKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwgeyBzdGVwOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjb25maWdGbG93Q29udGVudFN0eWxlcztcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWFib3J0XCI6IFN0ZXBGbG93QWJvcnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1hcmVhLXBpY2tlclwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgRmxvd0NvbmZpZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuaW1wb3J0IHsgc2hvd0FsZXJ0RGlhbG9nIH0gZnJvbSBcIi4uL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94XCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWNyZWF0ZS1lbnRyeVwiKVxuY2xhc3MgU3RlcEZsb3dDcmVhdGVFbnRyeSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgZmxvd0NvbmZpZyE6IEZsb3dDb25maWc7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIHN0ZXAhOiBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBkZXZpY2VzITogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5vcHAubG9jYWxpemU7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5TdWNjZXNzITwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKHRoaXMub3BwLCB0aGlzLnN0ZXApfVxuICAgICAgICAke3RoaXMuZGV2aWNlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwPldlIGZvdW5kIHRoZSBmb2xsb3dpbmcgZGV2aWNlczo8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2VzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmRldmljZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGRldmljZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ke2RldmljZS5uYW1lfTwvYj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXZpY2UubW9kZWx9ICgke2RldmljZS5tYW51ZmFjdHVyZXJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3AtYXJlYS1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV2aWNlPSR7ZGV2aWNlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FyZWFQaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9vcC1hcmVhLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9mbG93RG9uZX1cIlxuICAgICAgICAgID4ke2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmZpbmlzaFwiXG4gICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHsgc3RlcDogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYXJlYVBpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBwaWNrZXIgPSBldi5jdXJyZW50VGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBkZXZpY2UgPSBwaWNrZXIuZGV2aWNlO1xuXG4gICAgY29uc3QgYXJlYSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSh0aGlzLm9wcCwgZGV2aWNlLCB7XG4gICAgICAgIGFyZWFfaWQ6IGFyZWEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNob3dBbGVydERpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5lcnJvcl9zYXZpbmdfYXJlYVwiLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgICBwaWNrZXIudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5kZXZpY2VzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXJnaW46IC00cHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuZGV2aWNlIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbnMgPiAqOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLmRldmljZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWNyZWF0ZS1lbnRyeVwiOiBTdGVwRmxvd0NyZWF0ZUVudHJ5O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWwsXG4gIERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQsXG59IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgRmxvd0NvbmZpZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1leHRlcm5hbFwiKVxuY2xhc3MgU3RlcEZsb3dFeHRlcm5hbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgZmxvd0NvbmZpZyE6IEZsb3dDb25maWc7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBzdGVwITogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCBsb2NhbGl6ZSA9IHRoaXMub3BwLmxvY2FsaXplO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlckV4dGVybmFsU3RlcEhlYWRlcih0aGlzLm9wcCwgdGhpcy5zdGVwKX1cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbih0aGlzLm9wcCwgdGhpcy5zdGVwKX1cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wZW4tYnV0dG9uXCI+XG4gICAgICAgICAgPGEgaHJlZj0ke3RoaXMuc3RlcC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPlxuICAgICAgICAgICAgICAke2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLm9wZW5fc2l0ZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMub3BwLmNvbm5lY3Rpb24uc3Vic2NyaWJlRXZlbnRzPERhdGFFbnRyeUZsb3dQcm9ncmVzc2VkRXZlbnQ+KFxuICAgICAgYXN5bmMgKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5kYXRhLmZsb3dfaWQgIT09IHRoaXMuc3RlcC5mbG93X2lkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwge1xuICAgICAgICAgIHN0ZXBQcm9taXNlOiB0aGlzLmZsb3dDb25maWcuZmV0Y2hGbG93KHRoaXMub3BwLCB0aGlzLnN0ZXAuZmxvd19pZCksXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFwiZGF0YV9lbnRyeV9mbG93X3Byb2dyZXNzZWRcIlxuICAgICk7XG4gICAgd2luZG93Lm9wZW4odGhpcy5zdGVwLnVybCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAub3Blbi1idXR0b24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm9wZW4tYnV0dG9uIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctZXh0ZXJuYWxcIjogU3RlcEZsb3dFeHRlcm5hbDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwRm9ybSB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgRmxvd0NvbmZpZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcEZvcm1TY2hlbWEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vcC1mb3JtL29wLWZvcm1cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctZm9ybVwiKVxuY2xhc3MgU3RlcEZsb3dGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgc3RlcCE6IERhdGFFbnRyeUZsb3dTdGVwRm9ybTtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfc3RlcERhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2Vycm9yTXNnPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG4gICAgY29uc3Qgc3RlcERhdGEgPSB0aGlzLl9zdGVwRGF0YVByb2Nlc3NlZDtcblxuICAgIGNvbnN0IGFsbFJlcXVpcmVkSW5mb0ZpbGxlZEluID1cbiAgICAgIHN0ZXBEYXRhID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAvLyBJZiBubyBkYXRhIGZpbGxlZCBpbiwganVzdCBjaGVjayB0aGF0IGFueSBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgICAgIHN0ZXAuZGF0YV9zY2hlbWEuZmluZCgoZmllbGQpID0+ICFmaWVsZC5vcHRpb25hbCkgPT09IHVuZGVmaW5lZFxuICAgICAgICA6IC8vIElmIGRhdGEgaXMgZmlsbGVkIGluLCBtYWtlIHN1cmUgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmVcbiAgICAgICAgICBzdGVwRGF0YSAmJlxuICAgICAgICAgIHN0ZXAuZGF0YV9zY2hlbWEuZXZlcnkoXG4gICAgICAgICAgICAoZmllbGQpID0+XG4gICAgICAgICAgICAgIGZpZWxkLm9wdGlvbmFsIHx8ICFbXCJcIiwgdW5kZWZpbmVkXS5pbmNsdWRlcyhzdGVwRGF0YSFbZmllbGQubmFtZV0pXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIodGhpcy5vcHAsIHRoaXMuc3RlcCl9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgJHt0aGlzLl9lcnJvck1zZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvck1zZ308L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKHRoaXMub3BwLCB0aGlzLnN0ZXApfVxuICAgICAgICA8b3AtZm9ybVxuICAgICAgICAgIC5kYXRhPSR7c3RlcERhdGF9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9zdGVwRGF0YUNoYW5nZWR9XG4gICAgICAgICAgLnNjaGVtYT0ke3N0ZXAuZGF0YV9zY2hlbWF9XG4gICAgICAgICAgLmVycm9yPSR7c3RlcC5lcnJvcnN9XG4gICAgICAgICAgLmNvbXB1dGVMYWJlbD0ke3RoaXMuX2xhYmVsQ2FsbGJhY2t9XG4gICAgICAgICAgLmNvbXB1dGVFcnJvcj0ke3RoaXMuX2Vycm9yQ2FsbGJhY2t9XG4gICAgICAgID48L29wLWZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICR7dGhpcy5fbG9hZGluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zdWJtaXRTdGVwfVxuICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWFsbFJlcXVpcmVkSW5mb0ZpbGxlZElufVxuICAgICAgICAgICAgICAgICAgPiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5zdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAkeyFhbGxSZXF1aXJlZEluZm9GaWxsZWRJblxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93Lm5vdF9hbGxfcmVxdWlyZWRfZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwib3AtZm9ybVwiKSEuZm9jdXMoKSwgMCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0U3RlcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3N0ZXBEYXRhUHJvY2Vzc2VkKCkge1xuICAgIGlmICh0aGlzLl9zdGVwRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RlcERhdGE7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIHRoaXMuc3RlcC5kYXRhX3NjaGVtYS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKFwiZGVmYXVsdFwiIGluIGZpZWxkKSB7XG4gICAgICAgIGRhdGFbZmllbGQubmFtZV0gPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3VibWl0U3RlcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9lcnJvck1zZyA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGZsb3dJZCA9IHRoaXMuc3RlcC5mbG93X2lkO1xuICAgIGNvbnN0IHN0ZXBEYXRhID0gdGhpcy5fc3RlcERhdGEgfHwge307XG5cbiAgICBjb25zdCB0b1NlbmREYXRhID0ge307XG4gICAgT2JqZWN0LmtleXMoc3RlcERhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGVwRGF0YVtrZXldO1xuICAgICAgY29uc3QgaXNFbXB0eSA9IFt1bmRlZmluZWQsIFwiXCJdLmluY2x1ZGVzKHZhbHVlKTtcblxuICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgIHRvU2VuZERhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBhd2FpdCB0aGlzLmZsb3dDb25maWcuaGFuZGxlRmxvd1N0ZXAoXG4gICAgICAgIHRoaXMub3BwLFxuICAgICAgICB0aGlzLnN0ZXAuZmxvd19pZCxcbiAgICAgICAgdG9TZW5kRGF0YVxuICAgICAgKTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlJ3JlIHN0aWxsIHNob3dpbmcgdGhlIHNhbWUgc3RlcCBhcyB3aGVuIHdlXG4gICAgICAvLyBmaXJlZCBvZmYgcmVxdWVzdC5cbiAgICAgIGlmICghdGhpcy5zdGVwIHx8IGZsb3dJZCAhPT0gdGhpcy5zdGVwLmZsb3dfaWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICAgIHN0ZXAsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yTXNnID1cbiAgICAgICAgKGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlKSB8fCBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0ZXBEYXRhQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGVwRGF0YSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2xhYmVsQ2FsbGJhY2sgPSAoZmllbGQ6IE9wRm9ybVNjaGVtYSk6IHN0cmluZyA9PlxuICAgIHRoaXMuZmxvd0NvbmZpZy5yZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKHRoaXMub3BwLCB0aGlzLnN0ZXAsIGZpZWxkKTtcblxuICBwcml2YXRlIF9lcnJvckNhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+XG4gICAgdGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IodGhpcy5vcHAsIHRoaXMuc3RlcCwgZXJyb3IpO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtaXQtc3Bpbm5lciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1mb3JtXCI6IFN0ZXBGbG93Rm9ybTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWxvYWRpbmdcIilcbmNsYXNzIFN0ZXBGbG93TG9hZGluZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbml0LXNwaW5uZXJcIj5cbiAgICAgICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmluaXQtc3Bpbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctbG9hZGluZ1wiOiBTdGVwRmxvd0xvYWRpbmc7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLWxpdGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0ICogYXMgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWljb24tbmV4dFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXRcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwXCI7XG5pbXBvcnQgeyBGbG93Q29uZmlnIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW50ZXJmYWNlIEhhbmRsZXJPYmoge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCIpXG5jbGFzcyBTdGVwRmxvd1BpY2tIYW5kbGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhbmRsZXJzITogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzaG93QWR2YW5jZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGZpbHRlcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfd2lkdGg/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfZ2V0SGFuZGxlcnMgPSBtZW1vaXplT25lKChoOiBzdHJpbmdbXSwgZmlsdGVyPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnM6IEhhbmRsZXJPYmpbXSA9IGgubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLm9wcC5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlcn0uY29uZmlnLnRpdGxlYCkgfHwgaGFuZGxlcixcbiAgICAgICAgc2x1ZzogaGFuZGxlcixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBjb25zdCBvcHRpb25zOiBGdXNlLkZ1c2VPcHRpb25zPEhhbmRsZXJPYmo+ID0ge1xuICAgICAgICBrZXlzOiBbXCJuYW1lXCIsIFwic2x1Z1wiXSxcbiAgICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMixcbiAgICAgICAgdGhyZXNob2xkOiAwLjIsXG4gICAgICB9O1xuICAgICAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGhhbmRsZXJzLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBmdXNlLnNlYXJjaChmaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcnMuc29ydCgoYSwgYikgPT5cbiAgICAgIGEubmFtZS50b1VwcGVyQ2FzZSgpIDwgYi5uYW1lLnRvVXBwZXJDYXNlKCkgPyAtMSA6IDFcbiAgICApO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2dldEhhbmRsZXJzKHRoaXMuaGFuZGxlcnMsIHRoaXMuZmlsdGVyKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPiR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ld1wiKX08L2gyPlxuICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAuZmlsdGVyPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVyQ2hhbmdlZH1cbiAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7IHdpZHRoOiBgJHt0aGlzLl93aWR0aH1weGAgfSl9XG4gICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoeyBhZHZhbmNlZDogQm9vbGVhbih0aGlzLnNob3dBZHZhbmNlZCkgfSl9XG4gICAgICA+XG4gICAgICAgICR7aGFuZGxlcnMubWFwKFxuICAgICAgICAgIChoYW5kbGVyOiBIYW5kbGVyT2JqKSA9PlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQGNsaWNrPSR7dGhpcy5faGFuZGxlclBpY2tlZH0gLmhhbmRsZXI9JHtoYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgJHtoYW5kbGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgPG9wLWljb24tbmV4dD48L29wLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICAke3RoaXMuc2hvd0FkdmFuY2VkXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5ub3RlX2Fib3V0X2ludGVncmF0aW9uc1wiXG4gICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5vdGVfYWJvdXRfd2Vic2l0ZV9yZWZlcmVuY2VcIlxuICAgICAgICAgICAgICApfTxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW4tcGVlci1wb3dlci5pby9pbnRlZ3JhdGlvbnMvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm9wZW5fcGVlcl9wb3dlcl93ZWJzaXRlXCJcbiAgICAgICAgICAgICAgICApfTwvYVxuICAgICAgICAgICAgICA+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJzZWFyY2gtaW5wdXRcIikhLmZvY3VzKCksXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAvLyBTdG9yZSB0aGUgd2lkdGggc28gdGhhdCB3aGVuIHdlIHNlYXJjaCwgYm94IGRvZXNuJ3QganVtcFxuICAgIGlmICghdGhpcy5fd2lkdGgpIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpIS5jbGllbnRXaWR0aDtcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckNoYW5nZWQoZSkge1xuICAgIHRoaXMuZmlsdGVyID0gZS5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVyUGlja2VkKGV2KSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwge1xuICAgICAgc3RlcFByb21pc2U6IHRoaXMuZmxvd0NvbmZpZy5jcmVhdGVGbG93KFxuICAgICAgICB0aGlzLm9wcCxcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5oYW5kbGVyLnNsdWdcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICBkaXYge1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtaGVpZ2h0OiAxcHgpIHtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwNXB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2LmFkdmFuY2VkIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgcCA+IGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCI6IFN0ZXBGbG93UGlja0hhbmRsZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgPSBjc3NgXG4gIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIG9wLW1hcmtkb3duIHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIG9wLW1hcmtkb3duIGEge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuICBvcC1tYXJrZG93biBpbWc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWkE7QUFvQkE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBV0E7QUFLQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBd0JBO0FBS0E7QUFNQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFPQTtBQUNBO0FBWUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFFQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7OztBQUNBOzs7OztBQUNBOzs7OztBQUtBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7O0FBQUE7QUFNQTtBQUNBOztBQUdBOzs7O0FBTUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTs7QUFhQTtBQUNBO0FBQ0E7O0FBTEE7O0FBV0E7QUFDQTtBQUNBOztBQUxBOztBQVdBO0FBQ0E7QUFDQTs7QUFMQTtBQVVBOztBQUZBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUF2RUE7QUEwRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTs7O0FBelJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBUUE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7OztBQUdBOzs7Ozs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBVEE7QUFlQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUFqQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTs7O0FBS0E7OztBQUtBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBWEE7O0FBaUJBOzs7QUFHQTtBQUNBOzs7QUE5QkE7QUFvQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUNBOzs7QUFsSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQU9BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7Ozs7O0FBR0E7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7O0FBVEE7QUFpQkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFZQTs7O0FBN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7OztBQUdBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBR0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQU1BOztBQUVBOzs7QUFHQTtBQUVBO0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUFBOzs7QUFTQTtBQUNBO0FBQ0E7OztBQUtBOztBQUdBOztBQUhBOztBQVVBOztBQS9DQTtBQWtEQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFHQTs7Ozs7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFZQTs7O0FBN0tBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQVFBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7OztBQUNBO0FBQ0E7Ozs7QUFBQTtBQUtBOzs7OztBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFNQTs7O0FBaEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBR0E7O0FBRUE7Ozs7QUFMQTs7QUFZQTs7QUFHQTtBQUdBOzs7QUFLQTs7O0FBWEE7QUF0QkE7QUF5Q0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFNQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQTs7O0FBM0lBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==