(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-config-dashboard"],{

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

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

/***/ }),

/***/ "./src/data/zha.ts":
/*!*************************!*\
  !*** ./src/data/zha.ts ***!
  \*************************/
/*! exports provided: reconfigureNode, fetchAttributesForCluster, fetchDevices, fetchZHADevice, fetchBindableDevices, bindDevices, unbindDevices, bindDeviceToGroup, unbindDeviceFromGroup, readAttributeValue, fetchCommandsForCluster, fetchClustersForZhaNode, fetchGroups, removeGroups, fetchGroup, fetchGroupableDevices, addMembersToGroup, removeMembersFromGroup, addGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconfigureNode", function() { return reconfigureNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAttributesForCluster", function() { return fetchAttributesForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDevices", function() { return fetchDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZHADevice", function() { return fetchZHADevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBindableDevices", function() { return fetchBindableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDevices", function() { return bindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDevices", function() { return unbindDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindDeviceToGroup", function() { return bindDeviceToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindDeviceFromGroup", function() { return unbindDeviceFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAttributeValue", function() { return readAttributeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCommandsForCluster", function() { return fetchCommandsForCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchClustersForZhaNode", function() { return fetchClustersForZhaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroups", function() { return fetchGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeGroups", function() { return removeGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupableDevices", function() { return fetchGroupableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMembersToGroup", function() { return addMembersToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMembersFromGroup", function() { return removeMembersFromGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGroup", function() { return addGroup; });
const reconfigureNode = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/reconfigure",
  ieee: ieeeAddress
});
const fetchAttributesForCluster = (opp, ieeeAddress, endpointId, clusterId, clusterType) => opp.callWS({
  type: "zha/devices/clusters/attributes",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchDevices = opp => opp.callWS({
  type: "zha/devices"
});
const fetchZHADevice = (opp, ieeeAddress) => opp.callWS({
  type: "zha/device",
  ieee: ieeeAddress
});
const fetchBindableDevices = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/bindable",
  ieee: ieeeAddress
});
const bindDevices = (opp, sourceIEEE, targetIEEE) => opp.callWS({
  type: "zha/devices/bind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const unbindDevices = (opp, sourceIEEE, targetIEEE) => opp.callWS({
  type: "zha/devices/unbind",
  source_ieee: sourceIEEE,
  target_ieee: targetIEEE
});
const bindDeviceToGroup = (opp, deviceIEEE, groupId, clusters) => opp.callWS({
  type: "zha/groups/bind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const unbindDeviceFromGroup = (opp, deviceIEEE, groupId, clusters) => opp.callWS({
  type: "zha/groups/unbind",
  source_ieee: deviceIEEE,
  group_id: groupId,
  bindings: clusters
});
const readAttributeValue = (opp, data) => {
  return opp.callWS(Object.assign({}, data, {
    type: "zha/devices/clusters/attributes/value"
  }));
};
const fetchCommandsForCluster = (opp, ieeeAddress, endpointId, clusterId, clusterType) => opp.callWS({
  type: "zha/devices/clusters/commands",
  ieee: ieeeAddress,
  endpoint_id: endpointId,
  cluster_id: clusterId,
  cluster_type: clusterType
});
const fetchClustersForZhaNode = (opp, ieeeAddress) => opp.callWS({
  type: "zha/devices/clusters",
  ieee: ieeeAddress
});
const fetchGroups = opp => opp.callWS({
  type: "zha/groups"
});
const removeGroups = (opp, groupIdsToRemove) => opp.callWS({
  type: "zha/group/remove",
  group_ids: groupIdsToRemove
});
const fetchGroup = (opp, groupId) => opp.callWS({
  type: "zha/group",
  group_id: groupId
});
const fetchGroupableDevices = opp => opp.callWS({
  type: "zha/devices/groupable"
});
const addMembersToGroup = (opp, groupId, membersToAdd) => opp.callWS({
  type: "zha/group/members/add",
  group_id: groupId,
  members: membersToAdd
});
const removeMembersFromGroup = (opp, groupId, membersToRemove) => opp.callWS({
  type: "zha/group/members/remove",
  group_id: groupId,
  members: membersToRemove
});
const addGroup = (opp, groupName, membersToAdd) => opp.callWS({
  type: "zha/group/add",
  group_name: groupName,
  members: membersToAdd
});

/***/ }),

/***/ "./src/panels/config/zha/functions.ts":
/*!********************************************!*\
  !*** ./src/panels/config/zha/functions.ts ***!
  \********************************************/
/*! exports provided: formatAsPaddedHex, sortZHADevices, sortZHAGroups, computeClusterKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAsPaddedHex", function() { return formatAsPaddedHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHADevices", function() { return sortZHADevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortZHAGroups", function() { return sortZHAGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeClusterKey", function() { return computeClusterKey; });
const formatAsPaddedHex = value => {
  let hex = value;

  if (typeof value === "string") {
    hex = parseInt(value, 16);
  }

  return "0x" + hex.toString(16).padStart(4, "0");
};
const sortZHADevices = (a, b) => {
  const nameA = a.user_given_name ? a.user_given_name : a.name;
  const nameb = b.user_given_name ? b.user_given_name : b.name;
  return nameA.localeCompare(nameb);
};
const sortZHAGroups = (a, b) => {
  const nameA = a.name;
  const nameb = b.name;
  return nameA.localeCompare(nameb);
};
const computeClusterKey = cluster => {
  return `${cluster.name} (Endpoint id: ${cluster.endpoint_id}, Id: ${formatAsPaddedHex(cluster.id)}, Type: ${cluster.type})`;
};

/***/ }),

/***/ "./src/panels/config/zha/zha-config-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-config-dashboard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_icon_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-icon-next */ "./src/components/op-icon-next.ts");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
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














let ZHAConfigDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("zha-config-dashboard")], function (_initialize, _LitElement) {
  class ZHAConfigDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAConfigDashboard,
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "pages",

      value() {
        return ["add", "groups"];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_memoizeDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_10__["default"])(devices => {
          let outputDevices = devices;
          outputDevices = outputDevices.map(device => {
            return Object.assign({}, device, {
              name: device.user_given_name ? device.user_given_name : device.name,
              nwk: Object(_functions__WEBPACK_IMPORTED_MODULE_9__["formatAsPaddedHex"])(device.nwk)
            });
          });
          return outputDevices;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_10__["default"])(narrow => narrow ? {
          name: {
            title: "Devices",
            sortable: true,
            filterable: true,
            direction: "asc"
          }
        } : {
          name: {
            title: "Name",
            sortable: true,
            filterable: true,
            direction: "asc"
          },
          nwk: {
            title: "Nwk",
            sortable: true,
            filterable: true
          },
          ieee: {
            title: "IEEE",
            sortable: true,
            filterable: true
          }
        });
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAConfigDashboard.prototype), "connectedCallback", this).call(this);

        if (this.opp && this._firstUpdatedCalled) {
          this._fetchDevices();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAConfigDashboard.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.opp) {
          this._fetchDevices();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-subpage .header=${this.opp.localize("ui.panel.config.zha.title")}>
        <op-config-section .narrow=${this.narrow} .isWide=${this.isWide}>
          <div slot="header">
            ${this.opp.localize("ui.panel.config.zha.header")}
          </div>

          <div slot="introduction">
            ${this.opp.localize("ui.panel.config.zha.introduction")}
          </div>

          <op-card>
            ${this.pages.map(page => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <a href=${`/config/zha/${page}`}>
                  <paper-item>
                    <paper-item-body two-line="">
                      ${this.opp.localize(`ui.panel.config.zha.${page}.caption`)}
                      <div secondary>
                        ${this.opp.localize(`ui.panel.config.zha.${page}.description`)}
                      </div>
                    </paper-item-body>
                    <op-icon-next></op-icon-next>
                  </paper-item>
                </a>
              `;
        })}
          </op-card>
          <op-card>
            <op-data-table
              .columns=${this._columns(this.narrow)}
              .data=${this._memoizeDevices(this._devices)}
              @row-click=${this._handleDeviceClicked}
              .id=${"ieee"}
            ></op-data-table>
          </op-card>
        </op-config-section>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchDevices",
      value: async function _fetchDevices() {
        this._devices = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_8__["fetchDevices"])(this.opp)).sort(_functions__WEBPACK_IMPORTED_MODULE_9__["sortZHADevices"]);
      }
    }, {
      kind: "method",
      key: "_handleDeviceClicked",
      value: async function _handleDeviceClicked(ev) {
        const deviceId = ev.detail.id;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_11__["navigate"])(this, `/config/zha/device/${deviceId}`);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWNvbmZpZy1kYXNoYm9hcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS96aGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNvbmZpZy1kYXNoYm9hcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcEljb24gfSBmcm9tIFwiLi9vcC1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBPcEljb25OZXh0IGV4dGVuZHMgT3BJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwib3BwOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJvcHA6Y2hldnJvbi1sZWZ0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtaWNvbi1uZXh0XCI6IE9wSWNvbk5leHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtaWNvbi1uZXh0XCIsIE9wSWNvbk5leHQpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWkhBRW50aXR5UmVmZXJlbmNlIGV4dGVuZHMgT3BwRW50aXR5IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQURldmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWVlZTogc3RyaW5nO1xuICBud2s6IHN0cmluZztcbiAgbHFpOiBzdHJpbmc7XG4gIHJzc2k6IHN0cmluZztcbiAgbGFzdF9zZWVuOiBzdHJpbmc7XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbDogc3RyaW5nO1xuICBxdWlya19hcHBsaWVkOiBib29sZWFuO1xuICBxdWlya19jbGFzczogc3RyaW5nO1xuICBlbnRpdGllczogWkhBRW50aXR5UmVmZXJlbmNlW107XG4gIG1hbnVmYWN0dXJlcl9jb2RlOiBudW1iZXI7XG4gIGRldmljZV9yZWdfaWQ6IHN0cmluZztcbiAgdXNlcl9naXZlbl9uYW1lPzogc3RyaW5nO1xuICBwb3dlcl9zb3VyY2U/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV90eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsdXN0ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIGVuZHBvaW50X2lkOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhIHtcbiAgaWVlZTogc3RyaW5nO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICBjbHVzdGVyX2lkOiBudW1iZXI7XG4gIGNsdXN0ZXJfdHlwZTogc3RyaW5nO1xuICBhdHRyaWJ1dGU6IG51bWJlcjtcbiAgbWFudWZhY3R1cmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpIQUdyb3VwIHtcbiAgbmFtZTogc3RyaW5nO1xuICBncm91cF9pZDogbnVtYmVyO1xuICBtZW1iZXJzOiBaSEFEZXZpY2VbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlY29uZmlndXJlTm9kZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvcmVjb25maWd1cmVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmcsXG4gIGVuZHBvaW50SWQ6IG51bWJlcixcbiAgY2x1c3RlcklkOiBudW1iZXIsXG4gIGNsdXN0ZXJUeXBlOiBzdHJpbmdcbik6IFByb21pc2U8QXR0cmlidXRlW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvYXR0cmlidXRlc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICAgIGVuZHBvaW50X2lkOiBlbmRwb2ludElkLFxuICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXJJZCxcbiAgICBjbHVzdGVyX3R5cGU6IGNsdXN0ZXJUeXBlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlcyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2haSEFEZXZpY2UgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxaSEFEZXZpY2U+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQmluZGFibGVEZXZpY2VzID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8WkhBRGV2aWNlW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvYmluZGFibGVcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBiaW5kRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2JpbmRcIixcbiAgICBzb3VyY2VfaWVlZTogc291cmNlSUVFRSxcbiAgICB0YXJnZXRfaWVlZTogdGFyZ2V0SUVFRSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VzID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHNvdXJjZUlFRUU6IHN0cmluZyxcbiAgdGFyZ2V0SUVFRTogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZVRvR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGV2aWNlSUVFRTogc3RyaW5nLFxuICBncm91cElkOiBudW1iZXIsXG4gIGNsdXN0ZXJzOiBDbHVzdGVyW11cbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXBzL2JpbmRcIixcbiAgICBzb3VyY2VfaWVlZTogZGV2aWNlSUVFRSxcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgICBiaW5kaW5nczogY2x1c3RlcnMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlRnJvbUdyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwcy91bmJpbmRcIixcbiAgICBzb3VyY2VfaWVlZTogZGV2aWNlSUVFRSxcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgICBiaW5kaW5nczogY2x1c3RlcnMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVhZEF0dHJpYnV0ZVZhbHVlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRhdGE6IFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YVxuKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIG9wcC5jYWxsV1Moe1xuICAgIC4uLmRhdGEsXG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzL3ZhbHVlXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmcsXG4gIGVuZHBvaW50SWQ6IG51bWJlcixcbiAgY2x1c3RlcklkOiBudW1iZXIsXG4gIGNsdXN0ZXJUeXBlOiBzdHJpbmdcbik6IFByb21pc2U8Q29tbWFuZFtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzL2NvbW1hbmRzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDbHVzdGVyc0ZvclpoYU5vZGUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxDbHVzdGVyW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwcyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpOiBQcm9taXNlPFpIQUdyb3VwW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUdyb3VwcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cElkc1RvUmVtb3ZlOiBudW1iZXJbXVxuKTogUHJvbWlzZTxaSEFHcm91cFtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9yZW1vdmVcIixcbiAgICBncm91cF9pZHM6IGdyb3VwSWRzVG9SZW1vdmUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cElkOiBudW1iZXJcbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cGFibGVEZXZpY2VzID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXJcbik6IFByb21pc2U8WkhBRGV2aWNlW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvZ3JvdXBhYmxlXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkTWVtYmVyc1RvR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBtZW1iZXJzVG9BZGQ6IHN0cmluZ1tdXG4pOiBQcm9taXNlPFpIQUdyb3VwPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9tZW1iZXJzL2FkZFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIG1lbWJlcnM6IG1lbWJlcnNUb0FkZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVNZW1iZXJzRnJvbUdyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvUmVtb3ZlOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvbWVtYmVycy9yZW1vdmVcIixcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgICBtZW1iZXJzOiBtZW1iZXJzVG9SZW1vdmUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYWRkR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBOYW1lOiBzdHJpbmcsXG4gIG1lbWJlcnNUb0FkZD86IHN0cmluZ1tdXG4pOiBQcm9taXNlPFpIQUdyb3VwPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9hZGRcIixcbiAgICBncm91cF9uYW1lOiBncm91cE5hbWUsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcbiIsImltcG9ydCB7IFpIQURldmljZSwgWkhBR3JvdXAsIENsdXN0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzUGFkZGVkSGV4ID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgaGV4ID0gdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBoZXggPSBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICB9XG4gIHJldHVybiBcIjB4XCIgKyBoZXgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDQsIFwiMFwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0WkhBRGV2aWNlcyA9IChhOiBaSEFEZXZpY2UsIGI6IFpIQURldmljZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG5hbWVBID0gYS51c2VyX2dpdmVuX25hbWUgPyBhLnVzZXJfZ2l2ZW5fbmFtZSA6IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLnVzZXJfZ2l2ZW5fbmFtZSA/IGIudXNlcl9naXZlbl9uYW1lIDogYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQUdyb3VwcyA9IChhOiBaSEFHcm91cCwgYjogWkhBR3JvdXApOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEubmFtZTtcbiAgY29uc3QgbmFtZWIgPSBiLm5hbWU7XG4gIHJldHVybiBuYW1lQS5sb2NhbGVDb21wYXJlKG5hbWViKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlQ2x1c3RlcktleSA9IChjbHVzdGVyOiBDbHVzdGVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGAke2NsdXN0ZXIubmFtZX0gKEVuZHBvaW50IGlkOiAke1xuICAgIGNsdXN0ZXIuZW5kcG9pbnRfaWRcbiAgfSwgSWQ6ICR7Zm9ybWF0QXNQYWRkZWRIZXgoY2x1c3Rlci5pZCl9LCBUeXBlOiAke2NsdXN0ZXIudHlwZX0pYDtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1pY29uLW5leHRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZldGNoRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBzb3J0WkhBRGV2aWNlcywgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyLFxuICBSb3dDbGlja2VkRXZlbnQsXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUm93RGF0YSBleHRlbmRzIFpIQURldmljZSB7XG4gIGRldmljZT86IERldmljZVJvd0RhdGE7XG59XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWNvbmZpZy1kYXNoYm9hcmRcIilcbmNsYXNzIFpIQUNvbmZpZ0Rhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlczogWkhBRGV2aWNlW10gPSBbXTtcbiAgcHJpdmF0ZSBwYWdlczogc3RyaW5nW10gPSBbXCJhZGRcIiwgXCJncm91cHNcIl07XG4gIHByaXZhdGUgX2ZpcnN0VXBkYXRlZENhbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX21lbW9pemVEZXZpY2VzID0gbWVtb2l6ZU9uZSgoZGV2aWNlczogWkhBRGV2aWNlW10pID0+IHtcbiAgICBsZXQgb3V0cHV0RGV2aWNlczogRGV2aWNlUm93RGF0YVtdID0gZGV2aWNlcztcblxuICAgIG91dHB1dERldmljZXMgPSBvdXRwdXREZXZpY2VzLm1hcCgoZGV2aWNlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZXZpY2UsXG4gICAgICAgIG5hbWU6IGRldmljZS51c2VyX2dpdmVuX25hbWUgPyBkZXZpY2UudXNlcl9naXZlbl9uYW1lIDogZGV2aWNlLm5hbWUsXG4gICAgICAgIG53azogZm9ybWF0QXNQYWRkZWRIZXgoZGV2aWNlLm53ayksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dERldmljZXM7XG4gIH0pO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKFxuICAgIChuYXJyb3c6IGJvb2xlYW4pOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT5cbiAgICAgIG5hcnJvd1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlc1wiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICB0aXRsZTogXCJOYW1lXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbndrOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk53a1wiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpZWVlOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIklFRUVcIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgKTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5vcHAgJiYgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkKSB7XG4gICAgICB0aGlzLl9mZXRjaERldmljZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKHRoaXMub3BwKSB7XG4gICAgICB0aGlzLl9mZXRjaERldmljZXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wcC1zdWJwYWdlIC5oZWFkZXI9JHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEudGl0bGVcIil9PlxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gLm5hcnJvdz0ke3RoaXMubmFycm93fSAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuaGVhZGVyXCIpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpoYS5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8b3AtY2FyZD5cbiAgICAgICAgICAgICR7dGhpcy5wYWdlcy5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0ke2AvY29uZmlnL3poYS8ke3BhZ2V9YH0+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBgdWkucGFuZWwuY29uZmlnLnpoYS4ke3BhZ2V9LmNhcHRpb25gXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuemhhLiR7cGFnZX0uZGVzY3JpcHRpb25gXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG9wLWljb24tbmV4dD48L29wLWljb24tbmV4dD5cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgICAgPG9wLWNhcmQ+XG4gICAgICAgICAgICA8b3AtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3cpfVxuICAgICAgICAgICAgICAuZGF0YT0ke3RoaXMuX21lbW9pemVEZXZpY2VzKHRoaXMuX2RldmljZXMpfVxuICAgICAgICAgICAgICBAcm93LWNsaWNrPSR7dGhpcy5faGFuZGxlRGV2aWNlQ2xpY2tlZH1cbiAgICAgICAgICAgICAgLmlkPSR7XCJpZWVlXCJ9XG4gICAgICAgICAgICA+PC9vcC1kYXRhLXRhYmxlPlxuICAgICAgICAgIDwvb3AtY2FyZD5cbiAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvb3BwLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGV2aWNlcygpIHtcbiAgICB0aGlzLl9kZXZpY2VzID0gKGF3YWl0IGZldGNoRGV2aWNlcyh0aGlzLm9wcCEpKS5zb3J0KHNvcnRaSEFEZXZpY2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZURldmljZUNsaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZGV2aWNlSWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvemhhL2RldmljZS8ke2RldmljZUlkfWApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNvbmZpZy1kYXNoYm9hcmRcIjogWkhBQ29uZmlnRGFzaGJvYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWkE7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBdUJBOzs7Ozs7Ozs7Ozs7QUN3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUlBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUlBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ3BQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7OztBQUFBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBOzs7Ozs7OztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVpBOzs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFJQTs7Ozs7O0FBUkE7QUFpQkE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFyQ0E7QUEyQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7OztBQUFBO0FBU0E7OztBQXRJQTs7OztBIiwic291cmNlUm9vdCI6IiJ9