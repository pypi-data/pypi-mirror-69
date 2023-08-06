(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["device-automation-dialog"],{

/***/ "./src/components/op-chips.ts":
/*!************************************!*\
  !*** ./src/components/op-chips.ts ***!
  \************************************/
/*! exports provided: OpChips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpChips", function() { return OpChips; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_chips_dist_mdc_chips_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/chips/dist/mdc.chips.min.css */ "./node_modules/@material/chips/dist/mdc.chips.min.css");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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

 // @ts-ignore



let OpChips = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-chips")], function (_initialize, _LitElement) {
  class OpChips extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpChips,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "items",

      value() {
        return [];
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.items.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="mdc-chip-set">
        ${this.items.map((item, idx) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <button
                class="mdc-chip"
                .index=${idx}
                @click=${this._handleClick}
              >
                <span class="mdc-chip__text">${item}</span>
              </button>
            `)}
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "chip-clicked", {
          index: ev.target.closest("button").index
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ${Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"])(_material_chips_dist_mdc_chips_min_css__WEBPACK_IMPORTED_MODULE_1__["default"])}
      .mdc-chip {
        background-color: rgba(var(--rgb-primary-text-color), 0.15);
        color: var(--primary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: triggerAutomation, deleteAutomation, showAutomationEditor, getAutomationEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerAutomation", function() { return triggerAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAutomationEditor", function() { return showAutomationEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomationEditorInitData", function() { return getAutomationEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const triggerAutomation = (opp, entityId) => {
  opp.callService("automation", "trigger", {
    entity_id: entityId
  });
};
const deleteAutomation = (opp, id) => opp.callApi("DELETE", `config/automation/config/${id}`);
let inititialAutomationEditorData;
const showAutomationEditor = (el, data) => {
  inititialAutomationEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/automation/new");
};
const getAutomationEditorInitData = () => {
  const data = inititialAutomationEditorData;
  inititialAutomationEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/data/device_automation.ts":
/*!***************************************!*\
  !*** ./src/data/device_automation.ts ***!
  \***************************************/
/*! exports provided: fetchDeviceActions, fetchDeviceConditions, fetchDeviceTriggers, fetchDeviceActionCapabilities, fetchDeviceConditionCapabilities, fetchDeviceTriggerCapabilities, deviceAutomationsEqual, localizeDeviceAutomationAction, localizeDeviceAutomationCondition, localizeDeviceAutomationTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActions", function() { return fetchDeviceActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditions", function() { return fetchDeviceConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggers", function() { return fetchDeviceTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceActionCapabilities", function() { return fetchDeviceActionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceConditionCapabilities", function() { return fetchDeviceConditionCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeviceTriggerCapabilities", function() { return fetchDeviceTriggerCapabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceAutomationsEqual", function() { return deviceAutomationsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationAction", function() { return localizeDeviceAutomationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationCondition", function() { return localizeDeviceAutomationCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeDeviceAutomationTrigger", function() { return localizeDeviceAutomationTrigger; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

const fetchDeviceActions = (opp, deviceId) => opp.callWS({
  type: "device_automation/action/list",
  device_id: deviceId
});
const fetchDeviceConditions = (opp, deviceId) => opp.callWS({
  type: "device_automation/condition/list",
  device_id: deviceId
});
const fetchDeviceTriggers = (opp, deviceId) => opp.callWS({
  type: "device_automation/trigger/list",
  device_id: deviceId
});
const fetchDeviceActionCapabilities = (opp, action) => opp.callWS({
  type: "device_automation/action/capabilities",
  action
});
const fetchDeviceConditionCapabilities = (opp, condition) => opp.callWS({
  type: "device_automation/condition/capabilities",
  condition
});
const fetchDeviceTriggerCapabilities = (opp, trigger) => opp.callWS({
  type: "device_automation/trigger/capabilities",
  trigger
});
const whitelist = ["above", "below", "code", "for"];
const deviceAutomationsEqual = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  for (const property in a) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  for (const property in b) {
    if (whitelist.includes(property)) {
      continue;
    }

    if (!Object.is(a[property], b[property])) {
      return false;
    }
  }

  return true;
};
const localizeDeviceAutomationAction = (opp, action) => {
  const state = action.entity_id ? opp.states[action.entity_id] : undefined;
  return opp.localize(`component.${action.domain}.device_automation.action_type.${action.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : action.entity_id || "<unknown>", "subtype", action.subtype ? opp.localize(`component.${action.domain}.device_automation.action_subtype.${action.subtype}`) || action.subtype : "") || (action.subtype ? `"${action.subtype}" ${action.type}` : action.type);
};
const localizeDeviceAutomationCondition = (opp, condition) => {
  const state = condition.entity_id ? opp.states[condition.entity_id] : undefined;
  return opp.localize(`component.${condition.domain}.device_automation.condition_type.${condition.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : condition.entity_id || "<unknown>", "subtype", condition.subtype ? opp.localize(`component.${condition.domain}.device_automation.condition_subtype.${condition.subtype}`) || condition.subtype : "") || (condition.subtype ? `"${condition.subtype}" ${condition.type}` : condition.type);
};
const localizeDeviceAutomationTrigger = (opp, trigger) => {
  const state = trigger.entity_id ? opp.states[trigger.entity_id] : undefined;
  return opp.localize(`component.${trigger.domain}.device_automation.trigger_type.${trigger.type}`, "entity_name", state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(state) : trigger.entity_id || "<unknown>", "subtype", trigger.subtype ? opp.localize(`component.${trigger.domain}.device_automation.trigger_subtype.${trigger.subtype}`) || trigger.subtype : "") || (trigger.subtype ? `"${trigger.subtype}" ${trigger.type}` : trigger.type);
};

/***/ }),

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript, showScriptEditor, getScriptEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScriptEditor", function() { return showScriptEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScriptEditorInitData", function() { return getScriptEditorInitData; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");


const triggerScript = (opp, entityId, variables) => opp.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(entityId), variables);
const deleteScript = (opp, objectId) => opp.callApi("DELETE", `config/script/config/${objectId}`);
let inititialScriptEditorData;
const showScriptEditor = (el, data) => {
  inititialScriptEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(el, "/config/script/new");
};
const getScriptEditorInitData = () => {
  const data = inititialScriptEditorData;
  inititialScriptEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/panels/config/devices/device-detail/op-device-actions-card.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/op-device-actions-card.ts ***!
  \***************************************************************************/
/*! exports provided: OpDeviceActionsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDeviceActionsCard", function() { return OpDeviceActionsCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _op_device_automation_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-device-automation-card */ "./src/panels/config/devices/device-detail/op-device-automation-card.ts");
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





let OpDeviceActionsCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-device-actions-card")], function (_initialize, _OpDeviceAutomationCa) {
  class OpDeviceActionsCard extends _OpDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationAction"]);

      _initialize(this);
    }

  }

  return {
    F: OpDeviceActionsCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "action";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.actions.caption";
      }

    }]
  };
}, _op_device_automation_card__WEBPACK_IMPORTED_MODULE_3__["OpDeviceAutomationCard"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/op-device-automation-card.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/op-device-automation-card.ts ***!
  \******************************************************************************/
/*! exports provided: OpDeviceAutomationCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDeviceAutomationCard", function() { return OpDeviceAutomationCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/op-chips */ "./src/components/op-chips.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/script */ "./src/data/script.ts");
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






let OpDeviceAutomationCard = _decorate(null, function (_initialize, _LitElement) {
  class OpDeviceAutomationCard extends _LitElement {
    constructor(localizeDeviceAutomation) {
      super();

      _initialize(this);

      this._localizeDeviceAutomation = localizeDeviceAutomation;
    }

  }

  return {
    F: OpDeviceAutomationCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "deviceId",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "script",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automations",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "type",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "_localizeDeviceAutomation",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("deviceId") || changedProps.has("automations")) {
          return true;
        }

        const oldOpp = changedProps.get("opp");

        if (!oldOpp || this.opp.language !== oldOpp.language) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.automations.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h3>
        ${this.opp.localize(this.headerKey)}
      </h3>
      <div class="content">
        <op-chips
          @chip-clicked=${this._handleAutomationClicked}
          .items=${this.automations.map(automation => this._localizeDeviceAutomation(this.opp, automation))}
        >
        </op-chips>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleAutomationClicked",
      value: function _handleAutomationClicked(ev) {
        const automation = this.automations[ev.detail.index];

        if (!automation) {
          return;
        }

        if (this.script) {
          Object(_data_script__WEBPACK_IMPORTED_MODULE_4__["showScriptEditor"])(this, {
            sequence: [automation]
          });
          return;
        }

        const data = {};
        data[this.type] = [automation];
        Object(_data_automation__WEBPACK_IMPORTED_MODULE_3__["showAutomationEditor"])(this, data);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      h3 {
        color: var(--primary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/op-device-automation-dialog.ts":
/*!********************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/op-device-automation-dialog.ts ***!
  \********************************************************************************/
/*! exports provided: DialogDeviceAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeviceAutomation", function() { return DialogDeviceAutomation; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_op_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/op-dialog */ "./src/components/op-dialog.ts");
/* harmony import */ var _op_device_triggers_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-device-triggers-card */ "./src/panels/config/devices/device-detail/op-device-triggers-card.ts");
/* harmony import */ var _op_device_conditions_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-device-conditions-card */ "./src/panels/config/devices/device-detail/op-device-conditions-card.ts");
/* harmony import */ var _op_device_actions_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./op-device-actions-card */ "./src/panels/config/devices/device-detail/op-device-actions-card.ts");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
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







let DialogDeviceAutomation = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-device-automation")], function (_initialize, _LitElement) {
  class DialogDeviceAutomation extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogDeviceAutomation,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_triggers",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_conditions",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_actions",

      value() {
        return [];
      }

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
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(DialogDeviceAutomation.prototype), "updated", this).call(this, changedProps);

        if (!changedProps.has("_params")) {
          return;
        }

        this._triggers = [];
        this._conditions = [];
        this._actions = [];

        if (!this._params) {
          return;
        }

        const {
          deviceId,
          script
        } = this._params;
        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceActions"])(this.opp, deviceId).then(actions => this._actions = actions);

        if (script) {
          return;
        }

        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceTriggers"])(this.opp, deviceId).then(triggers => this._triggers = triggers);
        Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceConditions"])(this.opp, deviceId).then(conditions => this._conditions = conditions);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-dialog
        open
        @closing="${this._close}"
        .heading=${this.opp.localize(`ui.panel.config.devices.${this._params.script ? "script" : "automation"}.create`)}
      >
        <div @chip-clicked=${this._close}>
          ${this._triggers.length || this._conditions.length || this._actions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                ${this._triggers.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <op-device-triggers-card
                        .opp=${this.opp}
                        .automations=${this._triggers}
                      ></op-device-triggers-card>
                    ` : ""}
                ${this._conditions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <op-device-conditions-card
                        .opp=${this.opp}
                        .automations=${this._conditions}
                      ></op-device-conditions-card>
                    ` : ""}
                ${this._actions.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <op-device-actions-card
                        .opp=${this.opp}
                        .automations=${this._actions}
                        .script=${this._params.script}
                      ></op-device-actions-card>
                    ` : ""}
              ` : this.opp.localize("ui.panel.config.devices.automation.no_device_automations")}
        </div>
        <mwc-button slot="primaryAction" @click="${this._close}">
          Close
        </mwc-button>
      </op-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      op-dialog {
        --mdc-dialog-title-ink-color: var(--primary-text-color);
      }
      @media only screen and (min-width: 600px) {
        op-dialog {
          --mdc-dialog-min-width: 600px;
        }
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/op-device-conditions-card.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/op-device-conditions-card.ts ***!
  \******************************************************************************/
/*! exports provided: OpDeviceConditionsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDeviceConditionsCard", function() { return OpDeviceConditionsCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _op_device_automation_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-device-automation-card */ "./src/panels/config/devices/device-detail/op-device-automation-card.ts");
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





let OpDeviceConditionsCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-device-conditions-card")], function (_initialize, _OpDeviceAutomationCa) {
  class OpDeviceConditionsCard extends _OpDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationCondition"]);

      _initialize(this);
    }

  }

  return {
    F: OpDeviceConditionsCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "condition";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.conditions.caption";
      }

    }]
  };
}, _op_device_automation_card__WEBPACK_IMPORTED_MODULE_3__["OpDeviceAutomationCard"]);

/***/ }),

/***/ "./src/panels/config/devices/device-detail/op-device-triggers-card.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/op-device-triggers-card.ts ***!
  \****************************************************************************/
/*! exports provided: OpDeviceTriggersCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDeviceTriggersCard", function() { return OpDeviceTriggersCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _op_device_automation_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-device-automation-card */ "./src/panels/config/devices/device-detail/op-device-automation-card.ts");
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




let OpDeviceTriggersCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-device-triggers-card")], function (_initialize, _OpDeviceAutomationCa) {
  class OpDeviceTriggersCard extends _OpDeviceAutomationCa {
    constructor() {
      super(_data_device_automation__WEBPACK_IMPORTED_MODULE_1__["localizeDeviceAutomationTrigger"]);

      _initialize(this);
    }

  }

  return {
    F: OpDeviceTriggersCard,
    d: [{
      kind: "field",
      key: "type",

      value() {
        return "trigger";
      }

    }, {
      kind: "field",
      key: "headerKey",

      value() {
        return "ui.panel.config.devices.automation.triggers.caption";
      }

    }]
  };
}, _op_device_automation_card__WEBPACK_IMPORTED_MODULE_2__["OpDeviceAutomationCard"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLWF1dG9tYXRpb24tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3AtY2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kZXZpY2VfYXV0b21hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL29wLWRldmljZS1hY3Rpb25zLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL29wLWRldmljZS1hdXRvbWF0aW9uLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL29wLWRldmljZS1hdXRvbWF0aW9uLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2RldmljZS1kZXRhaWwvb3AtZGV2aWNlLWNvbmRpdGlvbnMtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2RldmljZS1kZXRhaWwvb3AtZGV2aWNlLXRyaWdnZXJzLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgdW5zYWZlQ1NTLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGNoaXBTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC9jaGlwcy9kaXN0L21kYy5jaGlwcy5taW4uY3NzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XG4gICAgXCJjaGlwLWNsaWNrZWRcIjogeyBpbmRleDogc3RyaW5nIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1jaGlwc1wiKVxuZXhwb3J0IGNsYXNzIE9wQ2hpcHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGl0ZW1zID0gW107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hpcC1zZXRcIj5cbiAgICAgICAgJHt0aGlzLml0ZW1zLm1hcChcbiAgICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWNoaXBcIlxuICAgICAgICAgICAgICAgIC5pbmRleD0ke2lkeH1cbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWNoaXBfX3RleHRcIj4ke2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDbGljayhldikge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNoaXAtY2xpY2tlZFwiLCB7XG4gICAgICBpbmRleDogZXYudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikuaW5kZXgsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAke3Vuc2FmZUNTUyhjaGlwU3R5bGVzKX1cbiAgICAgIC5tZGMtY2hpcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1jaGlwc1wiOiBPcENoaXBzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHlCYXNlLCBPcHBFbnRpdHlBdHRyaWJ1dGVCYXNlIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgRGV2aWNlQ29uZGl0aW9uLCBEZXZpY2VUcmlnZ2VyIH0gZnJvbSBcIi4vZGV2aWNlX2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCIuL3NjcmlwdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25FbnRpdHkgZXh0ZW5kcyBPcHBFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogT3BwRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9tYXRpb25Db25maWcge1xuICBhbGlhczogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0cmlnZ2VyOiBUcmlnZ2VyW107XG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbltdO1xuICBhY3Rpb246IEFjdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvckRpY3Qge1xuICBob3Vycz86IG51bWJlciB8IHN0cmluZztcbiAgbWludXRlcz86IG51bWJlciB8IHN0cmluZztcbiAgc2Vjb25kcz86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZVRyaWdnZXIge1xuICBwbGF0Zm9ybTogXCJzdGF0ZVwiO1xuICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gIGZyb20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBmb3I/OiBzdHJpbmcgfCBudW1iZXIgfCBGb3JEaWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1xdHRUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwibXF0dFwiO1xuICB0b3BpYzogc3RyaW5nO1xuICBwYXlsb2FkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb0xvY2F0aW9uVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcImdlb19sb2NhdGlvblwiO1xuICBzb3VyY2U6IFwic3RyaW5nXCI7XG4gIHpvbmU6IFwic3RyaW5nXCI7XG4gIGV2ZW50OiBcImVudGVyXCIgfCBcImxlYXZlXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BwVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcIm9wZW5wZWVycG93ZXJcIjtcbiAgZXZlbnQ6IFwic3RhcnRcIiB8IFwic2h1dGRvd25cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdW1lcmljU3RhdGVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwibnVtZXJpY19zdGF0ZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgYWJvdmU/OiBudW1iZXI7XG4gIGJlbG93PzogbnVtYmVyO1xuICB2YWx1ZV90ZW1wbGF0ZT86IHN0cmluZztcbiAgZm9yPzogc3RyaW5nIHwgbnVtYmVyIHwgRm9yRGljdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdW5UcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwic3VuXCI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBldmVudDogXCJzdW5yaXNlXCIgfCBcInN1bnNldFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVQYXR0ZXJuVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcInRpbWVfcGF0dGVyblwiO1xuICBob3Vycz86IG51bWJlciB8IHN0cmluZztcbiAgbWludXRlcz86IG51bWJlciB8IHN0cmluZztcbiAgc2Vjb25kcz86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcIndlYmhvb2tcIjtcbiAgd2ViaG9va19pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwiem9uZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgem9uZTogc3RyaW5nO1xuICBldmVudDogXCJlbnRlclwiIHwgXCJsZWF2ZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwidGltZVwiO1xuICBhdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlVHJpZ2dlciB7XG4gIHBsYXRmb3JtOiBcInRlbXBsYXRlXCI7XG4gIHZhbHVlX3RlbXBsYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRUcmlnZ2VyIHtcbiAgcGxhdGZvcm06IFwiZXZlbnRcIjtcbiAgZXZlbnRfdHlwZTogc3RyaW5nO1xuICBldmVudF9kYXRhOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIFRyaWdnZXIgPVxuICB8IFN0YXRlVHJpZ2dlclxuICB8IE1xdHRUcmlnZ2VyXG4gIHwgR2VvTG9jYXRpb25UcmlnZ2VyXG4gIHwgT3BwVHJpZ2dlclxuICB8IE51bWVyaWNTdGF0ZVRyaWdnZXJcbiAgfCBTdW5UcmlnZ2VyXG4gIHwgVGltZVBhdHRlcm5UcmlnZ2VyXG4gIHwgV2ViaG9va1RyaWdnZXJcbiAgfCBab25lVHJpZ2dlclxuICB8IFRpbWVUcmlnZ2VyXG4gIHwgVGVtcGxhdGVUcmlnZ2VyXG4gIHwgRXZlbnRUcmlnZ2VyXG4gIHwgRGV2aWNlVHJpZ2dlcjtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dpY2FsQ29uZGl0aW9uIHtcbiAgY29uZGl0aW9uOiBcImFuZFwiIHwgXCJvclwiO1xuICBjb25kaXRpb25zOiBDb25kaXRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJzdGF0ZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOdW1lcmljU3RhdGVDb25kaXRpb24ge1xuICBjb25kaXRpb246IFwibnVtZXJpY19zdGF0ZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgYWJvdmU/OiBudW1iZXI7XG4gIGJlbG93PzogbnVtYmVyO1xuICB2YWx1ZV90ZW1wbGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdW5Db25kaXRpb24ge1xuICBjb25kaXRpb246IFwic3VuXCI7XG4gIGFmdGVyX29mZnNldDogbnVtYmVyO1xuICBiZWZvcmVfb2Zmc2V0OiBudW1iZXI7XG4gIGFmdGVyOiBcInN1bnJpc2VcIiB8IFwic3Vuc2V0XCI7XG4gIGJlZm9yZTogXCJzdW5yaXNlXCIgfCBcInN1bnNldFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVDb25kaXRpb24ge1xuICBjb25kaXRpb246IFwiem9uZVwiO1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgem9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVDb25kaXRpb24ge1xuICBjb25kaXRpb246IFwidGltZVwiO1xuICBhZnRlcjogc3RyaW5nO1xuICBiZWZvcmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUNvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogXCJ0ZW1wbGF0ZVwiO1xuICB2YWx1ZV90ZW1wbGF0ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDb25kaXRpb24gPVxuICB8IFN0YXRlQ29uZGl0aW9uXG4gIHwgTnVtZXJpY1N0YXRlQ29uZGl0aW9uXG4gIHwgU3VuQ29uZGl0aW9uXG4gIHwgWm9uZUNvbmRpdGlvblxuICB8IFRpbWVDb25kaXRpb25cbiAgfCBUZW1wbGF0ZUNvbmRpdGlvblxuICB8IERldmljZUNvbmRpdGlvblxuICB8IExvZ2ljYWxDb25kaXRpb247XG5cbmV4cG9ydCBjb25zdCB0cmlnZ2VyQXV0b21hdGlvbiA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIGVudGl0eUlkOiBzdHJpbmcpID0+IHtcbiAgb3BwLmNhbGxTZXJ2aWNlKFwiYXV0b21hdGlvblwiLCBcInRyaWdnZXJcIiwge1xuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUF1dG9tYXRpb24gPSAob3BwOiBPcGVuUGVlclBvd2VyLCBpZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLyR7aWR9YCk7XG5cbmxldCBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YTogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNob3dBdXRvbWF0aW9uRWRpdG9yID0gKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGRhdGE/OiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGEgPSBkYXRhO1xuICBuYXZpZ2F0ZShlbCwgXCIvY29uZmlnL2F1dG9tYXRpb24vbmV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dG9tYXRpb25FZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhO1xuICBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YSA9IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUF1dG9tYXRpb24ge1xuICBkZXZpY2VfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBzdWJ0eXBlPzogc3RyaW5nO1xuICBldmVudD86IHN0cmluZztcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQWN0aW9uIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvbiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUNvbmRpdGlvbiBleHRlbmRzIERldmljZUF1dG9tYXRpb24ge1xuICBjb25kaXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VUcmlnZ2VyIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvbiB7XG4gIHBsYXRmb3JtOiBcImRldmljZVwiO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25zID0gKG9wcDogT3BlblBlZXJQb3dlciwgZGV2aWNlSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VBY3Rpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vYWN0aW9uL2xpc3RcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlQ29uZGl0aW9ucyA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIGRldmljZUlkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsV1M8RGV2aWNlQ29uZGl0aW9uW10+KHtcbiAgICB0eXBlOiBcImRldmljZV9hdXRvbWF0aW9uL2NvbmRpdGlvbi9saXN0XCIsXG4gICAgZGV2aWNlX2lkOiBkZXZpY2VJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZVRyaWdnZXJzID0gKG9wcDogT3BlblBlZXJQb3dlciwgZGV2aWNlSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VUcmlnZ2VyW10+KHtcbiAgICB0eXBlOiBcImRldmljZV9hdXRvbWF0aW9uL3RyaWdnZXIvbGlzdFwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hEZXZpY2VBY3Rpb25DYXBhYmlsaXRpZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgYWN0aW9uOiBEZXZpY2VBY3Rpb25cbikgPT5cbiAgb3BwLmNhbGxXUzxEZXZpY2VBY3Rpb25bXT4oe1xuICAgIHR5cGU6IFwiZGV2aWNlX2F1dG9tYXRpb24vYWN0aW9uL2NhcGFiaWxpdGllc1wiLFxuICAgIGFjdGlvbixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaERldmljZUNvbmRpdGlvbkNhcGFiaWxpdGllcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKSA9PlxuICBvcHAuY2FsbFdTPERldmljZUNvbmRpdGlvbltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi9jb25kaXRpb24vY2FwYWJpbGl0aWVzXCIsXG4gICAgY29uZGl0aW9uLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRGV2aWNlVHJpZ2dlckNhcGFiaWxpdGllcyA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB0cmlnZ2VyOiBEZXZpY2VUcmlnZ2VyXG4pID0+XG4gIG9wcC5jYWxsV1M8RGV2aWNlVHJpZ2dlcltdPih7XG4gICAgdHlwZTogXCJkZXZpY2VfYXV0b21hdGlvbi90cmlnZ2VyL2NhcGFiaWxpdGllc1wiLFxuICAgIHRyaWdnZXIsXG4gIH0pO1xuXG5jb25zdCB3aGl0ZWxpc3QgPSBbXCJhYm92ZVwiLCBcImJlbG93XCIsIFwiY29kZVwiLCBcImZvclwiXTtcblxuZXhwb3J0IGNvbnN0IGRldmljZUF1dG9tYXRpb25zRXF1YWwgPSAoXG4gIGE6IERldmljZUF1dG9tYXRpb24sXG4gIGI6IERldmljZUF1dG9tYXRpb25cbikgPT4ge1xuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBhKSB7XG4gICAgaWYgKHdoaXRlbGlzdC5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5pcyhhW3Byb3BlcnR5XSwgYltwcm9wZXJ0eV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gYikge1xuICAgIGlmICh3aGl0ZWxpc3QuaW5jbHVkZXMocHJvcGVydHkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3QuaXMoYVtwcm9wZXJ0eV0sIGJbcHJvcGVydHldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkFjdGlvbiA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBhY3Rpb246IERldmljZUFjdGlvblxuKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBhY3Rpb24uZW50aXR5X2lkID8gb3BwLnN0YXRlc1thY3Rpb24uZW50aXR5X2lkXSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICBvcHAubG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LiR7YWN0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uYWN0aW9uX3R5cGUuJHthY3Rpb24udHlwZX1gLFxuICAgICAgXCJlbnRpdHlfbmFtZVwiLFxuICAgICAgc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IGFjdGlvbi5lbnRpdHlfaWQgfHwgXCI8dW5rbm93bj5cIixcbiAgICAgIFwic3VidHlwZVwiLFxuICAgICAgYWN0aW9uLnN1YnR5cGVcbiAgICAgICAgPyBvcHAubG9jYWxpemUoXG4gICAgICAgICAgICBgY29tcG9uZW50LiR7YWN0aW9uLmRvbWFpbn0uZGV2aWNlX2F1dG9tYXRpb24uYWN0aW9uX3N1YnR5cGUuJHthY3Rpb24uc3VidHlwZX1gXG4gICAgICAgICAgKSB8fCBhY3Rpb24uc3VidHlwZVxuICAgICAgICA6IFwiXCJcbiAgICApIHx8IChhY3Rpb24uc3VidHlwZSA/IGBcIiR7YWN0aW9uLnN1YnR5cGV9XCIgJHthY3Rpb24udHlwZX1gIDogYWN0aW9uLnR5cGUhKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbiA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBjb25kaXRpb246IERldmljZUNvbmRpdGlvblxuKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBjb25kaXRpb24uZW50aXR5X2lkXG4gICAgPyBvcHAuc3RhdGVzW2NvbmRpdGlvbi5lbnRpdHlfaWRdXG4gICAgOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgb3BwLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke2NvbmRpdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmNvbmRpdGlvbl90eXBlLiR7Y29uZGl0aW9uLnR5cGV9YCxcbiAgICAgIFwiZW50aXR5X25hbWVcIixcbiAgICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBjb25kaXRpb24uZW50aXR5X2lkIHx8IFwiPHVua25vd24+XCIsXG4gICAgICBcInN1YnR5cGVcIixcbiAgICAgIGNvbmRpdGlvbi5zdWJ0eXBlXG4gICAgICAgID8gb3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgYGNvbXBvbmVudC4ke2NvbmRpdGlvbi5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLmNvbmRpdGlvbl9zdWJ0eXBlLiR7Y29uZGl0aW9uLnN1YnR5cGV9YFxuICAgICAgICAgICkgfHwgY29uZGl0aW9uLnN1YnR5cGVcbiAgICAgICAgOiBcIlwiXG4gICAgKSB8fFxuICAgIChjb25kaXRpb24uc3VidHlwZVxuICAgICAgPyBgXCIke2NvbmRpdGlvbi5zdWJ0eXBlfVwiICR7Y29uZGl0aW9uLnR5cGV9YFxuICAgICAgOiBjb25kaXRpb24udHlwZSEpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlciA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB0cmlnZ2VyOiBEZXZpY2VUcmlnZ2VyXG4pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHRyaWdnZXIuZW50aXR5X2lkID8gb3BwLnN0YXRlc1t0cmlnZ2VyLmVudGl0eV9pZF0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgb3BwLmxvY2FsaXplKFxuICAgICAgYGNvbXBvbmVudC4ke3RyaWdnZXIuZG9tYWlufS5kZXZpY2VfYXV0b21hdGlvbi50cmlnZ2VyX3R5cGUuJHt0cmlnZ2VyLnR5cGV9YCxcbiAgICAgIFwiZW50aXR5X25hbWVcIixcbiAgICAgIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiB0cmlnZ2VyLmVudGl0eV9pZCB8fCBcIjx1bmtub3duPlwiLFxuICAgICAgXCJzdWJ0eXBlXCIsXG4gICAgICB0cmlnZ2VyLnN1YnR5cGVcbiAgICAgICAgPyBvcHAubG9jYWxpemUoXG4gICAgICAgICAgICBgY29tcG9uZW50LiR7dHJpZ2dlci5kb21haW59LmRldmljZV9hdXRvbWF0aW9uLnRyaWdnZXJfc3VidHlwZS4ke3RyaWdnZXIuc3VidHlwZX1gXG4gICAgICAgICAgKSB8fCB0cmlnZ2VyLnN1YnR5cGVcbiAgICAgICAgOiBcIlwiXG4gICAgKSB8fFxuICAgICh0cmlnZ2VyLnN1YnR5cGUgPyBgXCIke3RyaWdnZXIuc3VidHlwZX1cIiAke3RyaWdnZXIudHlwZX1gIDogdHJpZ2dlci50eXBlISlcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSBcIi4vYXV0b21hdGlvblwiO1xuaW1wb3J0IHsgT3BwRW50aXR5QmFzZSwgT3BwRW50aXR5QXR0cmlidXRlQmFzZSB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTY3JpcHRFbnRpdHkgZXh0ZW5kcyBPcHBFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogT3BwRW50aXR5QXR0cmlidXRlQmFzZSAmIHtcbiAgICBsYXN0X3RyaWdnZXJlZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdENvbmZpZyB7XG4gIGFsaWFzOiBzdHJpbmc7XG4gIHNlcXVlbmNlOiBBY3Rpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGV2ZW50X2RhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBldmVudF9kYXRhX3RlbXBsYXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlQWN0aW9uIHtcbiAgc2VydmljZTogc3RyaW5nO1xuICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUFjdGlvbiB7XG4gIGRldmljZV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsYXlBY3Rpb24ge1xuICBkZWxheTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQWN0aW9uIHtcbiAgc2NlbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWl0QWN0aW9uIHtcbiAgd2FpdF90ZW1wbGF0ZTogc3RyaW5nO1xuICB0aW1lb3V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb24gPVxuICB8IEV2ZW50QWN0aW9uXG4gIHwgRGV2aWNlQWN0aW9uXG4gIHwgU2VydmljZUFjdGlvblxuICB8IENvbmRpdGlvblxuICB8IERlbGF5QWN0aW9uXG4gIHwgU2NlbmVBY3Rpb25cbiAgfCBXYWl0QWN0aW9uO1xuXG5leHBvcnQgY29uc3QgdHJpZ2dlclNjcmlwdCA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YXJpYWJsZXM/OiB7fVxuKSA9PiBvcHAuY2FsbFNlcnZpY2UoXCJzY3JpcHRcIiwgY29tcHV0ZU9iamVjdElkKGVudGl0eUlkKSwgdmFyaWFibGVzKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNjcmlwdCA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIG9iamVjdElkOiBzdHJpbmcpID0+XG4gIG9wcC5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NyaXB0L2NvbmZpZy8ke29iamVjdElkfWApO1xuXG5sZXQgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YTogUGFydGlhbDxTY3JpcHRDb25maWc+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NjcmlwdEVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxTY3JpcHRDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NyaXB0RWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvc2NyaXB0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY3JpcHRFZGl0b3JJbml0RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGE7XG4gIGluaXRpdGlhbFNjcmlwdEVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIERldmljZUFjdGlvbixcbiAgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uQWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcblxuaW1wb3J0IHsgT3BEZXZpY2VBdXRvbWF0aW9uQ2FyZCB9IGZyb20gXCIuL29wLWRldmljZS1hdXRvbWF0aW9uLWNhcmRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1kZXZpY2UtYWN0aW9ucy1jYXJkXCIpXG5leHBvcnQgY2xhc3MgT3BEZXZpY2VBY3Rpb25zQ2FyZCBleHRlbmRzIE9wRGV2aWNlQXV0b21hdGlvbkNhcmQ8RGV2aWNlQWN0aW9uPiB7XG4gIHByb3RlY3RlZCB0eXBlID0gXCJhY3Rpb25cIjtcbiAgcHJvdGVjdGVkIGhlYWRlcktleSA9IFwidWkucGFuZWwuY29uZmlnLmRldmljZXMuYXV0b21hdGlvbi5hY3Rpb25zLmNhcHRpb25cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihsb2NhbGl6ZURldmljZUF1dG9tYXRpb25BY3Rpb24pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1kZXZpY2UtYWN0aW9ucy1jYXJkXCI6IE9wRGV2aWNlQWN0aW9uc0NhcmQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2aWNlQXV0b21hdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jaGlwc1wiO1xuaW1wb3J0IHsgc2hvd0F1dG9tYXRpb25FZGl0b3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG5pbXBvcnQgeyBzaG93U2NyaXB0RWRpdG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPcERldmljZUF1dG9tYXRpb25DYXJkPFxuICBUIGV4dGVuZHMgRGV2aWNlQXV0b21hdGlvblxuPiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGRldmljZUlkPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NyaXB0ID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvbWF0aW9uczogVFtdID0gW107XG5cbiAgcHJvdGVjdGVkIGhlYWRlcktleSA9IFwiXCI7XG4gIHByb3RlY3RlZCB0eXBlID0gXCJcIjtcblxuICBwcml2YXRlIF9sb2NhbGl6ZURldmljZUF1dG9tYXRpb246IChcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgYXV0b21hdGlvbjogVFxuICApID0+IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb246IE9wRGV2aWNlQXV0b21hdGlvbkNhcmQ8XG4gICAgICBUXG4gICAgPltcIl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb25cIl1cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9sb2NhbGl6ZURldmljZUF1dG9tYXRpb24gPSBsb2NhbGl6ZURldmljZUF1dG9tYXRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wcyk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZGV2aWNlSWRcIikgfHwgY2hhbmdlZFByb3BzLmhhcyhcImF1dG9tYXRpb25zXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkT3BwID0gY2hhbmdlZFByb3BzLmdldChcIm9wcFwiKTtcbiAgICBpZiAoIW9sZE9wcCB8fCB0aGlzLm9wcC5sYW5ndWFnZSAhPT0gb2xkT3BwLmxhbmd1YWdlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuYXV0b21hdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMz5cbiAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZSh0aGlzLmhlYWRlcktleSl9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPG9wLWNoaXBzXG4gICAgICAgICAgQGNoaXAtY2xpY2tlZD0ke3RoaXMuX2hhbmRsZUF1dG9tYXRpb25DbGlja2VkfVxuICAgICAgICAgIC5pdGVtcz0ke3RoaXMuYXV0b21hdGlvbnMubWFwKChhdXRvbWF0aW9uKSA9PlxuICAgICAgICAgICAgdGhpcy5fbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uKHRoaXMub3BwLCBhdXRvbWF0aW9uKVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgPC9vcC1jaGlwcz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBdXRvbWF0aW9uQ2xpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBhdXRvbWF0aW9uID0gdGhpcy5hdXRvbWF0aW9uc1tldi5kZXRhaWwuaW5kZXhdO1xuICAgIGlmICghYXV0b21hdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgIHNob3dTY3JpcHRFZGl0b3IodGhpcywgeyBzZXF1ZW5jZTogW2F1dG9tYXRpb25dIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZGF0YVt0aGlzLnR5cGVdID0gW2F1dG9tYXRpb25dO1xuICAgIHNob3dBdXRvbWF0aW9uRWRpdG9yKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1kaWFsb2dcIjtcbmltcG9ydCBcIi4vb3AtZGV2aWNlLXRyaWdnZXJzLWNhcmRcIjtcbmltcG9ydCBcIi4vb3AtZGV2aWNlLWNvbmRpdGlvbnMtY2FyZFwiO1xuaW1wb3J0IFwiLi9vcC1kZXZpY2UtYWN0aW9ucy1jYXJkXCI7XG5pbXBvcnQgeyBEZXZpY2VBdXRvbWF0aW9uRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGV2aWNlLWF1dG9tYXRpb25cIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIERldmljZVRyaWdnZXIsXG4gIERldmljZUNvbmRpdGlvbixcbiAgRGV2aWNlQWN0aW9uLFxuICBmZXRjaERldmljZVRyaWdnZXJzLFxuICBmZXRjaERldmljZUNvbmRpdGlvbnMsXG4gIGZldGNoRGV2aWNlQWN0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctZGV2aWNlLWF1dG9tYXRpb25cIilcbmV4cG9ydCBjbGFzcyBEaWFsb2dEZXZpY2VBdXRvbWF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF90cmlnZ2VyczogRGV2aWNlVHJpZ2dlcltdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmRpdGlvbnM6IERldmljZUNvbmRpdGlvbltdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FjdGlvbnM6IERldmljZUFjdGlvbltdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IERldmljZUF1dG9tYXRpb25EaWFsb2dQYXJhbXM7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBEZXZpY2VBdXRvbWF0aW9uRGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIWNoYW5nZWRQcm9wcy5oYXMoXCJfcGFyYW1zXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlcnMgPSBbXTtcbiAgICB0aGlzLl9jb25kaXRpb25zID0gW107XG4gICAgdGhpcy5fYWN0aW9ucyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRldmljZUlkLCBzY3JpcHQgfSA9IHRoaXMuX3BhcmFtcztcblxuICAgIGZldGNoRGV2aWNlQWN0aW9ucyh0aGlzLm9wcCwgZGV2aWNlSWQpLnRoZW4oXG4gICAgICAoYWN0aW9ucykgPT4gKHRoaXMuX2FjdGlvbnMgPSBhY3Rpb25zKVxuICAgICk7XG4gICAgaWYgKHNjcmlwdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmZXRjaERldmljZVRyaWdnZXJzKHRoaXMub3BwLCBkZXZpY2VJZCkudGhlbihcbiAgICAgICh0cmlnZ2VycykgPT4gKHRoaXMuX3RyaWdnZXJzID0gdHJpZ2dlcnMpXG4gICAgKTtcbiAgICBmZXRjaERldmljZUNvbmRpdGlvbnModGhpcy5vcHAsIGRldmljZUlkKS50aGVuKFxuICAgICAgKGNvbmRpdGlvbnMpID0+ICh0aGlzLl9jb25kaXRpb25zID0gY29uZGl0aW9ucylcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLWRpYWxvZ1xuICAgICAgICBvcGVuXG4gICAgICAgIEBjbG9zaW5nPVwiJHt0aGlzLl9jbG9zZX1cIlxuICAgICAgICAuaGVhZGluZz0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuZGV2aWNlcy4ke1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnNjcmlwdCA/IFwic2NyaXB0XCIgOiBcImF1dG9tYXRpb25cIlxuICAgICAgICAgIH0uY3JlYXRlYFxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IEBjaGlwLWNsaWNrZWQ9JHt0aGlzLl9jbG9zZX0+XG4gICAgICAgICAgJHt0aGlzLl90cmlnZ2Vycy5sZW5ndGggfHxcbiAgICAgICAgICB0aGlzLl9jb25kaXRpb25zLmxlbmd0aCB8fFxuICAgICAgICAgIHRoaXMuX2FjdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLl90cmlnZ2Vycy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8b3AtZGV2aWNlLXRyaWdnZXJzLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdXRvbWF0aW9ucz0ke3RoaXMuX3RyaWdnZXJzfVxuICAgICAgICAgICAgICAgICAgICAgID48L29wLWRldmljZS10cmlnZ2Vycy1jYXJkPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9jb25kaXRpb25zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxvcC1kZXZpY2UtY29uZGl0aW9ucy1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXV0b21hdGlvbnM9JHt0aGlzLl9jb25kaXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgID48L29wLWRldmljZS1jb25kaXRpb25zLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke3RoaXMuX2FjdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPG9wLWRldmljZS1hY3Rpb25zLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdXRvbWF0aW9ucz0ke3RoaXMuX2FjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NyaXB0PSR7dGhpcy5fcGFyYW1zLnNjcmlwdH1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9vcC1kZXZpY2UtYWN0aW9ucy1jYXJkPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy5hdXRvbWF0aW9uLm5vX2RldmljZV9hdXRvbWF0aW9uc1wiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwicHJpbWFyeUFjdGlvblwiIEBjbGljaz1cIiR7dGhpcy5fY2xvc2V9XCI+XG4gICAgICAgICAgQ2xvc2VcbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9vcC1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG9wLWRpYWxvZyB7XG4gICAgICAgIC0tbWRjLWRpYWxvZy10aXRsZS1pbmstY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIG9wLWRpYWxvZyB7XG4gICAgICAgICAgLS1tZGMtZGlhbG9nLW1pbi13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctZGV2aWNlLWF1dG9tYXRpb25cIjogRGlhbG9nRGV2aWNlQXV0b21hdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlQ29uZGl0aW9uLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25Db25kaXRpb24sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9hdXRvbWF0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuXG5pbXBvcnQgeyBPcERldmljZUF1dG9tYXRpb25DYXJkIH0gZnJvbSBcIi4vb3AtZGV2aWNlLWF1dG9tYXRpb24tY2FyZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWRldmljZS1jb25kaXRpb25zLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBPcERldmljZUNvbmRpdGlvbnNDYXJkIGV4dGVuZHMgT3BEZXZpY2VBdXRvbWF0aW9uQ2FyZDxcbiAgRGV2aWNlQ29uZGl0aW9uXG4+IHtcbiAgcHJvdGVjdGVkIHR5cGUgPSBcImNvbmRpdGlvblwiO1xuICBwcm90ZWN0ZWQgaGVhZGVyS2V5ID0gXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy5hdXRvbWF0aW9uLmNvbmRpdGlvbnMuY2FwdGlvblwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGxvY2FsaXplRGV2aWNlQXV0b21hdGlvbkNvbmRpdGlvbik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWRldmljZS1jb25kaXRpb25zLWNhcmRcIjogT3BEZXZpY2VDb25kaXRpb25zQ2FyZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlVHJpZ2dlcixcbiAgbG9jYWxpemVEZXZpY2VBdXRvbWF0aW9uVHJpZ2dlcixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcblxuaW1wb3J0IHsgT3BEZXZpY2VBdXRvbWF0aW9uQ2FyZCB9IGZyb20gXCIuL29wLWRldmljZS1hdXRvbWF0aW9uLWNhcmRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1kZXZpY2UtdHJpZ2dlcnMtY2FyZFwiKVxuZXhwb3J0IGNsYXNzIE9wRGV2aWNlVHJpZ2dlcnNDYXJkIGV4dGVuZHMgT3BEZXZpY2VBdXRvbWF0aW9uQ2FyZDxcbiAgRGV2aWNlVHJpZ2dlclxuPiB7XG4gIHByb3RlY3RlZCB0eXBlID0gXCJ0cmlnZ2VyXCI7XG4gIHByb3RlY3RlZCBoZWFkZXJLZXkgPSBcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmF1dG9tYXRpb24udHJpZ2dlcnMuY2FwdGlvblwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGxvY2FsaXplRGV2aWNlQXV0b21hdGlvblRyaWdnZXIpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1kZXZpY2UtdHJpZ2dlcnMtY2FyZFwiOiBPcERldmljZVRyaWdnZXJzQ2FyZDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBVUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7QUFLQTtBQUNBOztBQUVBOztBQVJBOztBQUZBO0FBZ0JBO0FBdkJBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQ0E7QUFEQTtBQUdBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTs7Ozs7QUFEQTtBQU9BO0FBdkNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUdBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQkE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFhQTtBQUVBO0FBSUE7QUFHQTtBQWdCQTtBQUVBO0FBSUE7QUFDQTtBQWNBOzs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBcURBO0FBTUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUtBO0FBRUE7QUFHQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFFQTtBQUNBO0FBUEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFnQkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWxDQTtBQUFBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7O0FBSUE7QUFDQTs7OztBQVBBO0FBY0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUF5REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXBFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUVBOzs7O0FBQUE7QUFLQTtBQTVFQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBekNBO0FBQUE7QUFBQTtBQUFBO0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBTUE7QUFDQTtBQUlBOztBQUdBO0FBQ0E7O0FBSkE7QUFRQTs7QUFHQTtBQUNBOztBQUpBO0FBUUE7O0FBR0E7QUFDQTtBQUNBOztBQUxBO0FBcEJBOztBQWtDQTs7OztBQTdDQTtBQWtEQTtBQWxHQTtBQUFBO0FBQUE7QUFBQTtBQXFHQTtBQUNBO0FBdEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5R0E7Ozs7Ozs7OztBQUFBO0FBVUE7QUFuSEE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBS0E7QUFFQTtBQUdBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUVBO0FBQ0E7QUFQQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUtBO0FBR0E7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQVBBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==