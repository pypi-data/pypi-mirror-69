(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-add-group-page"],{

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

/***/ "./src/panels/config/zha/zha-add-group-page.ts":
/*!*****************************************************!*\
  !*** ./src/panels/config/zha/zha-add-group-page.ts ***!
  \*****************************************************/
/*! exports provided: ZHAAddGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAAddGroupPage", function() { return ZHAAddGroupPage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _layouts_opp_error_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/opp-error-screen */ "./src/layouts/opp-error-screen.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _zha_devices_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zha-devices-data-table */ "./src/panels/config/zha/zha-devices-data-table.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
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










let ZHAAddGroupPage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("zha-add-group-page")], function (_initialize, _LitElement) {
  class ZHAAddGroupPage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAAddGroupPage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_processingAdd",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_groupName",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "_firstUpdatedCalled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_selectedDevicesToAdd",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ZHAAddGroupPage.prototype), "connectedCallback", this).call(this);

        if (this.opp && this._firstUpdatedCalled) {
          this._fetchData();
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProperties) {
        _get(_getPrototypeOf(ZHAAddGroupPage.prototype), "firstUpdated", this).call(this, changedProperties);

        if (this.opp) {
          this._fetchData();
        }

        this._firstUpdatedCalled = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-subpage
        .header=${this.opp.localize("ui.panel.config.zha.groups.create_group")}
      >
        <op-config-section .isWide=${!this.narrow}>
          <p slot="introduction">
            ${this.opp.localize("ui.panel.config.zha.groups.create_group_details")}
          </p>
          <paper-input
            type="string"
            .value="${this._groupName}"
            @value-changed=${this._handleNameChange}
            placeholder="${this.opp.localize("ui.panel.config.zha.groups.group_name_placeholder")}"
          ></paper-input>

          <div class="header">
            ${this.opp.localize("ui.panel.config.zha.groups.add_members")}
          </div>

          <zha-devices-data-table
            .opp=${this.opp}
            .devices=${this.devices}
            .narrow=${this.narrow}
            selectable
            @selection-changed=${this._handleAddSelectionChanged}
            class="table"
          >
          </zha-devices-data-table>

          <div class="paper-dialog-buttons">
            <mwc-button
              .disabled="${!this._groupName || this._groupName === "" || this._processingAdd}"
              @click="${this._createGroup}"
              class="button"
            >
              <paper-spinner
                ?active="${this._processingAdd}"
                alt="${this.opp.localize("ui.panel.config.zha.groups.creating_group")}"
              ></paper-spinner>
              ${this.opp.localize("ui.panel.config.zha.groups.create")}</mwc-button
            >
          </div>
        </op-config-section>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        this.devices = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_4__["fetchGroupableDevices"])(this.opp);
      }
    }, {
      kind: "method",
      key: "_handleAddSelectionChanged",
      value: function _handleAddSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected && !this._selectedDevicesToAdd.includes(entity)) {
          this._selectedDevicesToAdd.push(entity);
        } else {
          const index = this._selectedDevicesToAdd.indexOf(entity);

          if (index !== -1) {
            this._selectedDevicesToAdd.splice(index, 1);
          }
        }

        this._selectedDevicesToAdd = [...this._selectedDevicesToAdd];
      }
    }, {
      kind: "method",
      key: "_createGroup",
      value: async function _createGroup() {
        this._processingAdd = true;
        const group = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_4__["addGroup"])(this.opp, this._groupName, this._selectedDevicesToAdd);
        this._selectedDevicesToAdd = [];
        this._processingAdd = false;
        this._groupName = "";
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_6__["navigate"])(this, `/config/zha/group/${group.group_id}`, true);
      }
    }, {
      kind: "method",
      key: "_handleNameChange",
      value: function _handleNameChange(ev) {
        const target = ev.currentTarget;
        this._groupName = target.value || "";
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .header {
          font-family: var(--paper-font-display1_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-display1_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-display1_-_font-size);
          font-weight: var(--paper-font-display1_-_font-weight);
          letter-spacing: var(--paper-font-display1_-_letter-spacing);
          line-height: var(--paper-font-display1_-_line-height);
          opacity: var(--dark-primary-opacity);
        }

        .button {
          float: right;
        }

        .table {
          height: 400px;
          overflow: auto;
        }

        op-config-section *:last-child {
          padding-bottom: 24px;
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
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1ncm91cC1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvemhhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYWRkLWdyb3VwLXBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBaSEFFbnRpdHlSZWZlcmVuY2UgZXh0ZW5kcyBPcHBFbnRpdHkge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWkhBRGV2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZWVlOiBzdHJpbmc7XG4gIG53azogc3RyaW5nO1xuICBscWk6IHN0cmluZztcbiAgcnNzaTogc3RyaW5nO1xuICBsYXN0X3NlZW46IHN0cmluZztcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG4gIG1vZGVsOiBzdHJpbmc7XG4gIHF1aXJrX2FwcGxpZWQ6IGJvb2xlYW47XG4gIHF1aXJrX2NsYXNzOiBzdHJpbmc7XG4gIGVudGl0aWVzOiBaSEFFbnRpdHlSZWZlcmVuY2VbXTtcbiAgbWFudWZhY3R1cmVyX2NvZGU6IG51bWJlcjtcbiAgZGV2aWNlX3JlZ19pZDogc3RyaW5nO1xuICB1c2VyX2dpdmVuX25hbWU/OiBzdHJpbmc7XG4gIHBvd2VyX3NvdXJjZT86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgZGV2aWNlX3R5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2x1c3RlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgZW5kcG9pbnRfaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWFkQXR0cmlidXRlU2VydmljZURhdGEge1xuICBpZWVlOiBzdHJpbmc7XG4gIGVuZHBvaW50X2lkOiBudW1iZXI7XG4gIGNsdXN0ZXJfaWQ6IG51bWJlcjtcbiAgY2x1c3Rlcl90eXBlOiBzdHJpbmc7XG4gIGF0dHJpYnV0ZTogbnVtYmVyO1xuICBtYW51ZmFjdHVyZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWkhBR3JvdXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGdyb3VwX2lkOiBudW1iZXI7XG4gIG1lbWJlcnM6IFpIQURldmljZVtdO1xufVxuXG5leHBvcnQgY29uc3QgcmVjb25maWd1cmVOb2RlID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGllZWVBZGRyZXNzOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9yZWNvbmZpZ3VyZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXR0cmlidXRlc0ZvckNsdXN0ZXIgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZyxcbiAgZW5kcG9pbnRJZDogbnVtYmVyLFxuICBjbHVzdGVySWQ6IG51bWJlcixcbiAgY2x1c3RlclR5cGU6IHN0cmluZ1xuKTogUHJvbWlzZTxBdHRyaWJ1dGVbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVycy9hdHRyaWJ1dGVzXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gICAgZW5kcG9pbnRfaWQ6IGVuZHBvaW50SWQsXG4gICAgY2x1c3Rlcl9pZDogY2x1c3RlcklkLFxuICAgIGNsdXN0ZXJfdHlwZTogY2x1c3RlclR5cGUsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VzID0gKG9wcDogT3BlblBlZXJQb3dlcik6IFByb21pc2U8WkhBRGV2aWNlW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFpIQURldmljZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPFpIQURldmljZT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlXCIsXG4gICAgaWVlZTogaWVlZUFkZHJlc3MsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCaW5kYWJsZURldmljZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZ1xuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9iaW5kYWJsZVwiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGJpbmREZXZpY2VzID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHNvdXJjZUlFRUU6IHN0cmluZyxcbiAgdGFyZ2V0SUVFRTogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBzb3VyY2VJRUVFLFxuICAgIHRhcmdldF9pZWVlOiB0YXJnZXRJRUVFLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVuYmluZERldmljZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgc291cmNlSUVFRTogc3RyaW5nLFxuICB0YXJnZXRJRUVFOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy91bmJpbmRcIixcbiAgICBzb3VyY2VfaWVlZTogc291cmNlSUVFRSxcbiAgICB0YXJnZXRfaWVlZTogdGFyZ2V0SUVFRSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBiaW5kRGV2aWNlVG9Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBkZXZpY2VJRUVFOiBzdHJpbmcsXG4gIGdyb3VwSWQ6IG51bWJlcixcbiAgY2x1c3RlcnM6IENsdXN0ZXJbXVxuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cHMvYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1bmJpbmREZXZpY2VGcm9tR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGV2aWNlSUVFRTogc3RyaW5nLFxuICBncm91cElkOiBudW1iZXIsXG4gIGNsdXN0ZXJzOiBDbHVzdGVyW11cbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXBzL3VuYmluZFwiLFxuICAgIHNvdXJjZV9pZWVlOiBkZXZpY2VJRUVFLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIGJpbmRpbmdzOiBjbHVzdGVycyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZWFkQXR0cmlidXRlVmFsdWUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZGF0YTogUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gb3BwLmNhbGxXUyh7XG4gICAgLi4uZGF0YSxcbiAgICB0eXBlOiBcInpoYS9kZXZpY2VzL2NsdXN0ZXJzL2F0dHJpYnV0ZXMvdmFsdWVcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb21tYW5kc0ZvckNsdXN0ZXIgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgaWVlZUFkZHJlc3M6IHN0cmluZyxcbiAgZW5kcG9pbnRJZDogbnVtYmVyLFxuICBjbHVzdGVySWQ6IG51bWJlcixcbiAgY2x1c3RlclR5cGU6IHN0cmluZ1xuKTogUHJvbWlzZTxDb21tYW5kW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2RldmljZXMvY2x1c3RlcnMvY29tbWFuZHNcIixcbiAgICBpZWVlOiBpZWVlQWRkcmVzcyxcbiAgICBlbmRwb2ludF9pZDogZW5kcG9pbnRJZCxcbiAgICBjbHVzdGVyX2lkOiBjbHVzdGVySWQsXG4gICAgY2x1c3Rlcl90eXBlOiBjbHVzdGVyVHlwZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsdXN0ZXJzRm9yWmhhTm9kZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBpZWVlQWRkcmVzczogc3RyaW5nXG4pOiBQcm9taXNlPENsdXN0ZXJbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9jbHVzdGVyc1wiLFxuICAgIGllZWU6IGllZWVBZGRyZXNzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JvdXBzID0gKG9wcDogT3BlblBlZXJQb3dlcik6IFByb21pc2U8WkhBR3JvdXBbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXBzXCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlR3JvdXBzID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwSWRzVG9SZW1vdmU6IG51bWJlcltdXG4pOiBQcm9taXNlPFpIQUdyb3VwW10+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkczogZ3JvdXBJZHNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGdyb3VwSWQ6IG51bWJlclxuKTogUHJvbWlzZTxaSEFHcm91cD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZ3JvdXBcIixcbiAgICBncm91cF9pZDogZ3JvdXBJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEdyb3VwYWJsZURldmljZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlclxuKTogUHJvbWlzZTxaSEFEZXZpY2VbXT4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6aGEvZGV2aWNlcy9ncm91cGFibGVcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhZGRNZW1iZXJzVG9Hcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cElkOiBudW1iZXIsXG4gIG1lbWJlcnNUb0FkZDogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL21lbWJlcnMvYWRkXCIsXG4gICAgZ3JvdXBfaWQ6IGdyb3VwSWQsXG4gICAgbWVtYmVyczogbWVtYmVyc1RvQWRkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU1lbWJlcnNGcm9tR3JvdXAgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZ3JvdXBJZDogbnVtYmVyLFxuICBtZW1iZXJzVG9SZW1vdmU6IHN0cmluZ1tdXG4pOiBQcm9taXNlPFpIQUdyb3VwPiA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpoYS9ncm91cC9tZW1iZXJzL3JlbW92ZVwiLFxuICAgIGdyb3VwX2lkOiBncm91cElkLFxuICAgIG1lbWJlcnM6IG1lbWJlcnNUb1JlbW92ZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBhZGRHcm91cCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBncm91cE5hbWU6IHN0cmluZyxcbiAgbWVtYmVyc1RvQWRkPzogc3RyaW5nW11cbik6IFByb21pc2U8WkhBR3JvdXA+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiemhhL2dyb3VwL2FkZFwiLFxuICAgIGdyb3VwX25hbWU6IGdyb3VwTmFtZSxcbiAgICBtZW1iZXJzOiBtZW1iZXJzVG9BZGQsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLWVycm9yLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vb3AtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIFpIQURldmljZSxcbiAgZmV0Y2hHcm91cGFibGVEZXZpY2VzLFxuICBhZGRHcm91cCxcbiAgWkhBR3JvdXAsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IFwiLi96aGEtZGV2aWNlcy1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL29wLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBQYXBlcklucHV0RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1hZGQtZ3JvdXAtcGFnZVwiKVxuZXhwb3J0IGNsYXNzIFpIQUFkZEdyb3VwUGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wcm9jZXNzaW5nQWRkOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2dyb3VwTmFtZTogc3RyaW5nID0gXCJcIjtcblxuICBwcml2YXRlIF9maXJzdFVwZGF0ZWRDYWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VzVG9BZGQ6IHN0cmluZ1tdID0gW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMub3BwICYmIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCkge1xuICAgICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGlmICh0aGlzLm9wcCkge1xuICAgICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcnN0VXBkYXRlZENhbGxlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wcC1zdWJwYWdlXG4gICAgICAgIC5oZWFkZXI9JHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmNyZWF0ZV9ncm91cFwiKX1cbiAgICAgID5cbiAgICAgICAgPG9wLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHshdGhpcy5uYXJyb3d9PlxuICAgICAgICAgIDxwIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ncm91cHMuY3JlYXRlX2dyb3VwX2RldGFpbHNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZ3JvdXBOYW1lfVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmdyb3VwX25hbWVfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmFkZF9tZW1iZXJzXCIpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHpoYS1kZXZpY2VzLWRhdGEtdGFibGVcbiAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgIC5kZXZpY2VzPSR7dGhpcy5kZXZpY2VzfVxuICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgc2VsZWN0YWJsZVxuICAgICAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQWRkU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGNsYXNzPVwidGFibGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3poYS1kZXZpY2VzLWRhdGEtdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD1cIiR7IXRoaXMuX2dyb3VwTmFtZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2dyb3VwTmFtZSA9PT0gXCJcIiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGR9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jcmVhdGVHcm91cH1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyXG4gICAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fcHJvY2Vzc2luZ0FkZH1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmdyb3Vwcy5jcmVhdGluZ19ncm91cFwiXG4gICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuZ3JvdXBzLmNyZWF0ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvb3AtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L29wcC1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgdGhpcy5kZXZpY2VzID0gYXdhaXQgZmV0Y2hHcm91cGFibGVEZXZpY2VzKHRoaXMub3BwISk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBZGRTZWxlY3Rpb25DaGFuZ2VkKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZWRTZWxlY3Rpb24gPSBldi5kZXRhaWwgYXMgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICAgIGNvbnN0IGVudGl0eSA9IGNoYW5nZWRTZWxlY3Rpb24uaWQ7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFNlbGVjdGlvbi5zZWxlY3RlZCAmJlxuICAgICAgIXRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLmluY2x1ZGVzKGVudGl0eSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLnB1c2goZW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZC5pbmRleE9mKGVudGl0eSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkID0gWy4uLnRoaXMuX3NlbGVjdGVkRGV2aWNlc1RvQWRkXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NyZWF0ZUdyb3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdBZGQgPSB0cnVlO1xuICAgIGNvbnN0IGdyb3VwOiBaSEFHcm91cCA9IGF3YWl0IGFkZEdyb3VwKFxuICAgICAgdGhpcy5vcHAsXG4gICAgICB0aGlzLl9ncm91cE5hbWUsXG4gICAgICB0aGlzLl9zZWxlY3RlZERldmljZXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VzVG9BZGQgPSBbXTtcbiAgICB0aGlzLl9wcm9jZXNzaW5nQWRkID0gZmFsc2U7XG4gICAgdGhpcy5fZ3JvdXBOYW1lID0gXCJcIjtcbiAgICBuYXZpZ2F0ZSh0aGlzLCBgL2NvbmZpZy96aGEvZ3JvdXAvJHtncm91cC5ncm91cF9pZH1gLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU5hbWVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5fZ3JvdXBOYW1lID0gdGFyZ2V0LnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXBhcGVyLWZvbnQtZGlzcGxheTFfLV9mb250LWZhbWlseSk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1mb250LWRpc3BsYXkxXy1fLXdlYmtpdC1mb250LXNtb290aGluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LWRpc3BsYXkxXy1fZm9udC1zaXplKTtcbiAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1kaXNwbGF5MV8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBvcC1jb25maWctc2VjdGlvbiAqOmxhc3QtY2hpbGQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24gcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXJbYWN0aXZlXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnBhcGVyLWRpYWxvZy1idXR0b25zIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYXBlci1kaWFsb2ctYnV0dG9ucyAud2FybmluZyB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTREQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBRUE7QUFEQTtBQUlBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBSUE7QUFFQTtBQUZBO0FBSUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQURBO0FBSUE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFEQTtBQUlBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RQQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUFBO0FBMEJBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBTUE7QUFDQTtBQUNBOzs7O0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUdBOzs7O0FBSUE7QUFDQTs7QUFJQTs7Ozs7QUEvQ0E7QUF1REE7QUFqRkE7QUFBQTtBQUFBO0FBQUE7QUFvRkE7QUFDQTtBQXJGQTtBQUFBO0FBQUE7QUFBQTtBQXdGQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF0R0E7QUFBQTtBQUFBO0FBQUE7QUF5R0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuSEE7QUFBQTtBQUFBO0FBQUE7QUFzSEE7QUFDQTtBQUNBO0FBeEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEySEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQThDQTtBQXpLQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==