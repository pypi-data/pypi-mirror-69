(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-groups-dashboard"],{

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

/***/ "./src/panels/config/zha/zha-groups-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-groups-dashboard.ts ***!
  \*******************************************************/
/*! exports provided: ZHAGroupsDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupsDashboard", function() { return ZHAGroupsDashboard; });
/* harmony import */ var _zha_groups_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zha-groups-data-table */ "./src/panels/config/zha/zha-groups-data-table.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
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










let ZHAGroupsDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("zha-groups-dashboard")], function (_initialize, _LitElement) {
  class ZHAGroupsDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupsDashboard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_groups",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_processingRemove",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "_selectedGroupsToRemove",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAGroupsDashboard.prototype), "connectedCallback", this).call(this);

        if (this.opp && this._firstUpdatedCalled) {
          this._fetchGroups();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAGroupsDashboard.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.opp) {
          this._fetchGroups();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <opp-subpage
        .header=${this.opp.localize("ui.panel.config.zha.groups.groups-header")}
      >
        <paper-icon-button
          slot="toolbar-icon"
          icon="opp:plus"
          @click=${this._addGroup}
        ></paper-icon-button>

        <div class="content">
          ${this._groups ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <zha-groups-data-table
                  .opp=${this.opp}
                  .narrow=${this.narrow}
                  .groups=${this._groups}
                  .selectable=${true}
                  @selection-changed=${this._handleRemoveSelectionChanged}
                  class="table"
                ></zha-groups-data-table>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
                <paper-spinner
                  active
                  alt=${this.opp.localize("ui.common.loading")}
                ></paper-spinner>
              `}
        </div>
        <div class="paper-dialog-buttons">
          <mwc-button
            ?disabled="${!this._selectedGroupsToRemove.length || this._processingRemove}"
            @click="${this._removeGroup}"
            class="button"
          >
            <paper-spinner
              ?active="${this._processingRemove}"
              alt=${this.opp.localize("ui.panel.config.zha.groups.removing_groups")}
            ></paper-spinner>
            ${this.opp.localize("ui.panel.config.zha.groups.remove_groups")}</mwc-button
          >
        </div>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchGroups",
      value: async function _fetchGroups() {
        this._groups = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_2__["fetchGroups"])(this.opp)).sort(_functions__WEBPACK_IMPORTED_MODULE_3__["sortZHAGroups"]);
      }
    }, {
      kind: "method",
      key: "_handleRemoveSelectionChanged",
      value: function _handleRemoveSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const groupId = Number(changedSelection.id);

        if (changedSelection.selected && !this._selectedGroupsToRemove.includes(groupId)) {
          this._selectedGroupsToRemove.push(groupId);
        } else {
          const index = this._selectedGroupsToRemove.indexOf(groupId);

          if (index !== -1) {
            this._selectedGroupsToRemove.splice(index, 1);
          }
        }

        this._selectedGroupsToRemove = [...this._selectedGroupsToRemove];
      }
    }, {
      kind: "method",
      key: "_removeGroup",
      value: async function _removeGroup() {
        this._processingRemove = true;
        this._groups = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_2__["removeGroups"])(this.opp, this._selectedGroupsToRemove);
        this._selectedGroupsToRemove = [];
        this._processingRemove = false;
      }
    }, {
      kind: "method",
      key: "_addGroup",
      value: async function _addGroup() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(this, `/config/zha/group-add`);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
        .content {
          padding: 4px;
        }
        zha-groups-data-table {
          width: 100%;
        }
        .button {
          float: right;
        }
        .table {
          height: 200px;
          overflow: auto;
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
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
        }
        .paper-dialog-buttons .warning {
          --mdc-theme-primary: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/zha/zha-groups-data-table.ts":
/*!********************************************************!*\
  !*** ./src/panels/config/zha/zha-groups-data-table.ts ***!
  \********************************************************/
/*! exports provided: ZHAGroupsDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAGroupsDataTable", function() { return ZHAGroupsDataTable; });
/* harmony import */ var _components_data_table_op_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/data-table/op-data-table */ "./src/components/data-table/op-data-table.ts");
/* harmony import */ var _components_entity_op_state_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/entity/op-state-icon */ "./src/components/entity/op-state-icon.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
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







let ZHAGroupsDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zha-groups-data-table")], function (_initialize, _LitElement) {
  class ZHAGroupsDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAGroupsDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "groups",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_groups",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(groups => {
          let outputGroups = groups;
          outputGroups = outputGroups.map(group => {
            return Object.assign({}, group, {
              id: String(group.group_id)
            });
          });
          return outputGroups;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(narrow => narrow ? {
          name: {
            title: "Group",
            sortable: true,
            filterable: true,
            direction: "asc",
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div @click=${this._handleRowClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          }
        } : {
          name: {
            title: this.opp.localize("ui.panel.config.zha.groups.groups"),
            sortable: true,
            filterable: true,
            direction: "asc",
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div @click=${this._handleRowClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          },
          group_id: {
            title: this.opp.localize("ui.panel.config.zha.groups.group_id"),
            template: groupId => {
              return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  ${Object(_functions__WEBPACK_IMPORTED_MODULE_4__["formatAsPaddedHex"])(groupId)}
                `;
            },
            sortable: true
          },
          members: {
            title: this.opp.localize("ui.panel.config.zha.groups.members"),
            template: members => {
              return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                  ${members.length}
                `;
            },
            sortable: true
          }
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <op-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._groups(this.groups)}
        .selectable=${this.selectable}
      ></op-data-table>
    `;
      }
    }, {
      kind: "method",
      key: "_handleRowClicked",
      value: function _handleRowClicked(ev) {
        const groupId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, `/config/zha/group/${groupId}`);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWdyb3Vwcy1kYXNoYm9hcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS96aGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWdyb3Vwcy1kYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1ncm91cHMtZGF0YS10YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpIQUVudGl0eVJlZmVyZW5jZSBleHRlbmRzIE9wcEVudGl0eSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFEZXZpY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGllZWU6IHN0cmluZztcbiAgbndrOiBzdHJpbmc7XG4gIGxxaTogc3RyaW5nO1xuICByc3NpOiBzdHJpbmc7XG4gIGxhc3Rfc2Vlbjogc3RyaW5nO1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw6IHN0cmluZztcbiAgcXVpcmtfYXBwbGllZDogYm9vbGVhbjtcbiAgcXVpcmtfY2xhc3M6IHN0cmluZztcbiAgZW50aXRpZXM6IFpIQUVudGl0eVJlZmVyZW5jZVtdO1xuICBtYW51ZmFjdHVyZXJfY29kZTogbnVtYmVyO1xuICBkZXZpY2VfcmVnX2lkOiBzdHJpbmc7XG4gIHVzZXJfZ2l2ZW5fbmFtZT86IHN0cmluZztcbiAgcG93ZXJfc291cmNlPzogc3RyaW5nO1xuICBhcmVhX2lkPzogc3RyaW5nO1xuICBkZXZpY2VfdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbHVzdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBlbmRwb2ludF9pZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRBdHRyaWJ1dGVTZXJ2aWNlRGF0YSB7XG4gIGllZWU6IHN0cmluZztcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl9pZDogbnVtYmVyO1xuICBjbHVzdGVyX3R5cGU6IHN0cmluZztcbiAgYXR0cmlidXRlOiBudW1iZXI7XG4gIG1hbnVmYWN0dXJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaSEFHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgbWVtYmVyczogWkhBRGV2aWNlW107XG59XG5cbmV4cG9ydCBjb25zdCByZWNvbmZpZ3VyZU5vZGUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3JlY29uZmlndXJlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlciA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPEF0dHJpYnV0ZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzL2F0dHJpYnV0ZXNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlc1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWkhBRGV2aWNlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8WkhBRGV2aWNlPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2JpbmRhYmxlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgYmluZERldmljZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IHNvdXJjZUlFRUUsXG4gICAgdGFyZ2V0X2llZWU6IHRhcmdldElFRUUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdW5iaW5kRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzb3VyY2VJRUVFOiBzdHJpbmcsXG4gIHRhcmdldElFRUU6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL3VuYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBzb3VyY2VJRUVFLFxuICAgIHRhcmdldF9pZWVlOiB0YXJnZXRJRUVFLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VUb0dyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGRldmljZUlFRUU6IHN0cmluZyxcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBjbHVzdGVyczogQ2x1c3RlcltdXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3Vwcy9iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVuYmluZERldmljZUZyb21Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBkZXZpY2VJRUVFOiBzdHJpbmcsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgY2x1c3RlcnM6IENsdXN0ZXJbXVxuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvdW5iaW5kXCIsXG4gICAgc291cmNlX2llZWU6IGRldmljZUlFRUUsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgYmluZGluZ3M6IGNsdXN0ZXJzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlYWRBdHRyaWJ1dGVWYWx1ZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBkYXRhOiBSZWFkQXR0cmlidXRlU2VydmljZURhdGFcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBvcHAuY2FsbFdTKHtcbiAgICAuLi5kYXRhLFxuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvYXR0cmlidXRlcy92YWx1ZVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbW1hbmRzRm9yQ2x1c3RlciA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nLFxuICBlbmRwb2ludElkOiBudW1iZXIsXG4gIGNsdXN0ZXJJZDogbnVtYmVyLFxuICBjbHVzdGVyVHlwZTogc3RyaW5nXG4pOiBQcm9taXNlPENvbW1hbmRbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9jb21tYW5kc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICAgIGVuZHBvaW50X2lkOiBlbmRwb2ludElkLFxuICAgIGNsdXN0ZXJfaWQ6IGNsdXN0ZXJJZCxcbiAgICBjbHVzdGVyX3R5cGU6IGNsdXN0ZXJUeXBlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8Q2x1c3RlcltdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hHcm91cHMgPSAob3BwOiBPcGVuUGVlclBvd2VyKTogUHJvbWlzZTxaSEFHcm91cFtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVHcm91cHMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZHNUb1JlbW92ZTogbnVtYmVyW11cbik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWRzOiBncm91cElkc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZDogbnVtYmVyXG4pOiBQcm9taXNlPFpIQUdyb3VwPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cFwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBhYmxlRGV2aWNlcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyXG4pOiBQcm9taXNlPFpIQURldmljZVtdPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2dyb3VwYWJsZVwiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZE1lbWJlcnNUb0dyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgbWVtYmVyc1RvQWRkOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvbWVtYmVycy9hZGRcIixcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgICBtZW1iZXJzOiBtZW1iZXJzVG9BZGQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlTWVtYmVyc0Zyb21Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cElkOiBudW1iZXIsXG4gIG1lbWJlcnNUb1JlbW92ZTogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvcmVtb3ZlXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvUmVtb3ZlLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGFkZEdyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwTmFtZTogc3RyaW5nLFxuICBtZW1iZXJzVG9BZGQ/OiBzdHJpbmdbXVxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXAvYWRkXCIsXG4gICAgZ3JvdXBfbmFtZTogZ3JvdXBOYW1lLFxuICAgIG1lbWJlcnM6IG1lbWJlcnNUb0FkZCxcbiAgfSk7XG4iLCJpbXBvcnQgeyBaSEFEZXZpY2UsIFpIQUdyb3VwLCBDbHVzdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRBc1BhZGRlZEhleCA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgbGV0IGhleCA9IHZhbHVlO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgaGV4ID0gcGFyc2VJbnQodmFsdWUsIDE2KTtcbiAgfVxuICByZXR1cm4gXCIweFwiICsgaGV4LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg0LCBcIjBcIik7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydFpIQURldmljZXMgPSAoYTogWkhBRGV2aWNlLCBiOiBaSEFEZXZpY2UpOiBudW1iZXIgPT4ge1xuICBjb25zdCBuYW1lQSA9IGEudXNlcl9naXZlbl9uYW1lID8gYS51c2VyX2dpdmVuX25hbWUgOiBhLm5hbWU7XG4gIGNvbnN0IG5hbWViID0gYi51c2VyX2dpdmVuX25hbWUgPyBiLnVzZXJfZ2l2ZW5fbmFtZSA6IGIubmFtZTtcbiAgcmV0dXJuIG5hbWVBLmxvY2FsZUNvbXBhcmUobmFtZWIpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRaSEFHcm91cHMgPSAoYTogWkhBR3JvdXAsIGI6IFpIQUdyb3VwKTogbnVtYmVyID0+IHtcbiAgY29uc3QgbmFtZUEgPSBhLm5hbWU7XG4gIGNvbnN0IG5hbWViID0gYi5uYW1lO1xuICByZXR1cm4gbmFtZUEubG9jYWxlQ29tcGFyZShuYW1lYik7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZUNsdXN0ZXJLZXkgPSAoY2x1c3RlcjogQ2x1c3Rlcik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBgJHtjbHVzdGVyLm5hbWV9IChFbmRwb2ludCBpZDogJHtcbiAgICBjbHVzdGVyLmVuZHBvaW50X2lkXG4gIH0sIElkOiAke2Zvcm1hdEFzUGFkZGVkSGV4KGNsdXN0ZXIuaWQpfSwgVHlwZTogJHtjbHVzdGVyLnR5cGV9KWA7XG59O1xuIiwiaW1wb3J0IFwiLi96aGEtZ3JvdXBzLWRhdGEtdGFibGVcIjtcblxuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgWkhBR3JvdXAsIGZldGNoR3JvdXBzLCByZW1vdmVHcm91cHMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IHNvcnRaSEFHcm91cHMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFNlbGVjdGlvbkNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcHAtc3VicGFnZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1ncm91cHMtZGFzaGJvYXJkXCIpXG5leHBvcnQgY2xhc3MgWkhBR3JvdXBzRGFzaGJvYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBfZ3JvdXBzPzogWkhBR3JvdXBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcHJvY2Vzc2luZ1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZEdyb3Vwc1RvUmVtb3ZlOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIF9maXJzdFVwZGF0ZWRDYWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5vcHAgJiYgdGhpcy5fZmlyc3RVcGRhdGVkQ2FsbGVkKSB7XG4gICAgICB0aGlzLl9mZXRjaEdyb3VwcygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAodGhpcy5vcHApIHtcbiAgICAgIHRoaXMuX2ZldGNoR3JvdXBzKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuZ3JvdXBzLWhlYWRlclwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgIGljb249XCJvcHA6cGx1c1wiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fYWRkR3JvdXB9XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLl9ncm91cHNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8emhhLWdyb3Vwcy1kYXRhLXRhYmxlXG4gICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAuZ3JvdXBzPSR7dGhpcy5fZ3JvdXBzfVxuICAgICAgICAgICAgICAgICAgLnNlbGVjdGFibGU9JHt0cnVlfVxuICAgICAgICAgICAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlUmVtb3ZlU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFibGVcIlxuICAgICAgICAgICAgICAgID48L3poYS1ncm91cHMtZGF0YS10YWJsZT5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgIGFsdD0ke3RoaXMub3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5sb2FkaW5nXCIpfVxuICAgICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHshdGhpcy5fc2VsZWN0ZWRHcm91cHNUb1JlbW92ZS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1JlbW92ZX1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9yZW1vdmVHcm91cH1cIlxuICAgICAgICAgICAgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX3Byb2Nlc3NpbmdSZW1vdmV9XCJcbiAgICAgICAgICAgICAgYWx0PSR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMucmVtb3ZpbmdfZ3JvdXBzXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5yZW1vdmVfZ3JvdXBzXCJcbiAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3BwLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoR3JvdXBzKCkge1xuICAgIHRoaXMuX2dyb3VwcyA9IChhd2FpdCBmZXRjaEdyb3Vwcyh0aGlzLm9wcCEpKS5zb3J0KHNvcnRaSEFHcm91cHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUmVtb3ZlU2VsZWN0aW9uQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VkU2VsZWN0aW9uID0gZXYuZGV0YWlsIGFzIFNlbGVjdGlvbkNoYW5nZWRFdmVudDtcbiAgICBjb25zdCBncm91cElkID0gTnVtYmVyKGNoYW5nZWRTZWxlY3Rpb24uaWQpO1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRTZWxlY3Rpb24uc2VsZWN0ZWQgJiZcbiAgICAgICF0aGlzLl9zZWxlY3RlZEdyb3Vwc1RvUmVtb3ZlLmluY2x1ZGVzKGdyb3VwSWQpXG4gICAgKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEdyb3Vwc1RvUmVtb3ZlLnB1c2goZ3JvdXBJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRHcm91cHNUb1JlbW92ZS5pbmRleE9mKGdyb3VwSWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEdyb3Vwc1RvUmVtb3ZlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkR3JvdXBzVG9SZW1vdmUgPSBbLi4udGhpcy5fc2VsZWN0ZWRHcm91cHNUb1JlbW92ZV07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW1vdmVHcm91cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlID0gdHJ1ZTtcbiAgICB0aGlzLl9ncm91cHMgPSBhd2FpdCByZW1vdmVHcm91cHModGhpcy5vcHAsIHRoaXMuX3NlbGVjdGVkR3JvdXBzVG9SZW1vdmUpO1xuICAgIHRoaXMuX3NlbGVjdGVkR3JvdXBzVG9SZW1vdmUgPSBbXTtcbiAgICB0aGlzLl9wcm9jZXNzaW5nUmVtb3ZlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZGRHcm91cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy96aGEvZ3JvdXAtYWRkYCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgICB6aGEtZ3JvdXBzLWRhdGEtdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lclthY3RpdmVdIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAucGFwZXItZGlhbG9nLWJ1dHRvbnMge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBhcGVyLWRpYWxvZy1idXR0b25zIC53YXJuaW5nIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWdyb3Vwcy1kYXNoYm9hcmRcIjogWkhBR3JvdXBzRGFzaGJvYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvb3Atc3RhdGUtaWNvblwiO1xuXG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9vcC1kYXRhLXRhYmxlXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFpIQUdyb3VwLCBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHcm91cFJvd0RhdGEgZXh0ZW5kcyBaSEFHcm91cCB7XG4gIGdyb3VwPzogR3JvdXBSb3dEYXRhO1xuICBpZD86IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtZ3JvdXBzLWRhdGEtdGFibGVcIilcbmV4cG9ydCBjbGFzcyBaSEFHcm91cHNEYXRhVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3cgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGdyb3VwczogWkhBR3JvdXBbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0YWJsZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2dyb3VwcyA9IG1lbW9pemVPbmUoKGdyb3VwczogWkhBR3JvdXBbXSkgPT4ge1xuICAgIGxldCBvdXRwdXRHcm91cHM6IEdyb3VwUm93RGF0YVtdID0gZ3JvdXBzO1xuXG4gICAgb3V0cHV0R3JvdXBzID0gb3V0cHV0R3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmdyb3VwLFxuICAgICAgICBpZDogU3RyaW5nKGdyb3VwLmdyb3VwX2lkKSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0R3JvdXBzO1xuICB9KTtcblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZU9uZShcbiAgICAobmFycm93OiBib29sZWFuKTogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0+XG4gICAgICBuYXJyb3dcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkdyb3VwXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrZWR9IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICAgICAgJHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5ncm91cHNcIiksXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrZWR9IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICAgICAgJHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwX2lkOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX2lkXCIpLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGdyb3VwSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgJHtmb3JtYXRBc1BhZGRlZEhleChncm91cElkKX1cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLm1lbWJlcnNcIiksXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAobWVtYmVyczogWkhBRGV2aWNlW10pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7bWVtYmVycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyl9XG4gICAgICAgIC5kYXRhPSR7dGhpcy5fZ3JvdXBzKHRoaXMuZ3JvdXBzKX1cbiAgICAgICAgLnNlbGVjdGFibGU9JHt0aGlzLnNlbGVjdGFibGV9XG4gICAgICA+PC9vcC1kYXRhLXRhYmxlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSb3dDbGlja2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IGdyb3VwSWQgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0clwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvemhhL2dyb3VwLyR7Z3JvdXBJZH1gKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWdyb3Vwcy1kYXRhLXRhYmxlXCI6IFpIQUdyb3Vwc0RhdGFUYWJsZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBNERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFFQTtBQURBO0FBSUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFJQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBREE7QUFJQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFJQTtBQURBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNwUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTs7QUFFQTs7Ozs7QUFPQTs7OztBQUlBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVBBOzs7QUFjQTs7QUFFQTs7OztBQUlBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUlBOzs7O0FBNUNBO0FBbURBO0FBM0VBO0FBQUE7QUFBQTtBQUFBO0FBOEVBO0FBQ0E7QUEvRUE7QUFBQTtBQUFBO0FBQUE7QUFrRkE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaEdBO0FBQUE7QUFBQTtBQUFBO0FBbUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2R0E7QUFBQTtBQUFBO0FBQUE7QUEwR0E7QUFDQTtBQTNHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUNBO0FBakpBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFFQTtBQVlBO0FBQ0E7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQWpCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVBBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQTtBQXJCQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFxRUE7O0FBRUE7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUE1RUE7QUFBQTtBQUFBO0FBQUE7QUErRUE7QUFHQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9