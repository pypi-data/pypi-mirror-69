(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./src/panels/devcon/common/compute-unused-entities.ts":
/*!*************************************************************!*\
  !*** ./src/panels/devcon/common/compute-unused-entities.ts ***!
  \*************************************************************/
/*! exports provided: computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
const EXCLUDED_DOMAINS = ["zone", "persistent_notification"];

const addFromAction = (entities, actionConfig) => {
  if (actionConfig.action !== "call-service" || !actionConfig.service_data || !actionConfig.service_data.entity_id) {
    return;
  }

  let entityIds = actionConfig.service_data.entity_id;

  if (!Array.isArray(entityIds)) {
    entityIds = [entityIds];
  }

  for (const entityId of entityIds) {
    entities.add(entityId);
  }
};

const addEntityId = (entities, entity) => {
  if (typeof entity === "string") {
    entities.add(entity);
    return;
  }

  if (entity.entity) {
    entities.add(entity.entity);
  }

  if (entity.camera_image) {
    entities.add(entity.camera_image);
  }

  if (entity.tap_action) {
    addFromAction(entities, entity.tap_action);
  }

  if (entity.hold_action) {
    addFromAction(entities, entity.hold_action);
  }
};

const addEntities = (entities, obj) => {
  if (obj.entity) {
    addEntityId(entities, obj.entity);
  }

  if (obj.entities) {
    obj.entities.forEach(entity => addEntityId(entities, entity));
  }

  if (obj.card) {
    addEntities(entities, obj.card);
  }

  if (obj.cards) {
    obj.cards.forEach(card => addEntities(entities, card));
  }

  if (obj.elements) {
    obj.elements.forEach(card => addEntities(entities, card));
  }

  if (obj.badges) {
    obj.badges.forEach(badge => addEntityId(entities, badge));
  }
};

const computeUsedEntities = config => {
  const entities = new Set();
  config.views.forEach(view => addEntities(entities, view));
  return entities;
};

const computeUnusedEntities = (opp, config) => {
  const usedEntities = computeUsedEntities(config);
  return Object.keys(opp.states).filter(entity => !usedEntities.has(entity) && !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0])).sort();
};

/***/ }),

/***/ "./src/panels/devcon/editor/add-entities-to-view.ts":
/*!**********************************************************!*\
  !*** ./src/panels/devcon/editor/add-entities-to-view.ts ***!
  \**********************************************************/
/*! exports provided: addEntitiesToDevconView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntitiesToDevconView", function() { return addEntitiesToDevconView; });
/* harmony import */ var _data_devcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/devcon */ "./src/data/devcon.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-view/show-select-view-dialog */ "./src/panels/devcon/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-editor/show-suggest-card-dialog */ "./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts");



const addEntitiesToDevconView = async (element, opp, entities, devconConfig, saveConfigFunc) => {
  var _ref, _panels$devcon;

  if (((_ref = (_panels$devcon = opp.panels.devcon) === null || _panels$devcon === void 0 ? void 0 : _panels$devcon.config) === null || _ref === void 0 ? void 0 : _ref.mode) === "yaml") {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
      entities
    });
    return;
  }

  if (!devconConfig) {
    try {
      devconConfig = await Object(_data_devcon__WEBPACK_IMPORTED_MODULE_0__["fetchConfig"])(opp.connection, false);
    } catch {
      alert(opp.localize("ui.panel.devcon.editor.add_entities.generated_unsupported"));
      return;
    }
  }

  if (!devconConfig.views.length) {
    alert("You don't have any Devcon views, first create a view in Devcon.");
    return;
  }

  if (!saveConfigFunc) {
    saveConfigFunc = async newConfig => {
      try {
        await Object(_data_devcon__WEBPACK_IMPORTED_MODULE_0__["saveConfig"])(opp, newConfig);
      } catch {
        alert(opp.localize("ui.panel.config.devices.add_entities.saving_failed"));
      }
    };
  }

  if (devconConfig.views.length === 1) {
    Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
      devconConfig: devconConfig,
      saveConfig: saveConfigFunc,
      path: [0],
      entities
    });
    return;
  }

  Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_1__["showSelectViewDialog"])(element, {
    devconConfig,
    viewSelectedCallback: view => {
      Object(_card_editor_show_suggest_card_dialog__WEBPACK_IMPORTED_MODULE_2__["showSuggestCardDialog"])(element, {
        devconConfig: devconConfig,
        saveConfig: saveConfigFunc,
        path: [view],
        entities
      });
    }
  });
};

/***/ }),

/***/ "./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/devcon/editor/card-editor/show-suggest-card-dialog.ts ***!
  \**************************************************************************/
/*! exports provided: showSuggestCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuggestCardDialog", function() { return showSuggestCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


const importsuggestCardDialog = () => Promise.all(/*! import() | hui-dialog-suggest-card */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e(7), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-edit-card~hui-dialog-suggest-card~hui-markdown-card-editor~b03e5084"), __webpack_require__.e(9), __webpack_require__.e("vendors~dialog-config-flow~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op~88aaba77"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op-store-auth-card~pa~5053a3b8"), __webpack_require__.e("vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~~22c2c76f"), __webpack_require__.e("vendors~dialog-config-flow~hui-dialog-suggest-card~more-info-dialog"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-devcon"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e(8), __webpack_require__.e(11), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-automation~panel~63a769ba"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-devcon~panel-history"), __webpack_require__.e("entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~panel-config-devices~panel-devcon"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-devices~panel-devcon"), __webpack_require__.e("hui-dialog-suggest-card~panel-config-automation~panel-config-script"), __webpack_require__.e("hui-dialog-suggest-card~panel-devcon"), __webpack_require__.e("hui-dialog-edit-card~hui-dialog-suggest-card"), __webpack_require__.e("hui-dialog-suggest-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-suggest-card */ "./src/panels/devcon/editor/card-editor/hui-dialog-suggest-card.ts"));

const showSuggestCardDialog = (element, suggestCardDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-suggest-card",
    dialogImport: importsuggestCardDialog,
    dialogParams: suggestCardDialogParams
  });
};

/***/ }),

/***/ "./src/panels/devcon/editor/select-view/show-select-view-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/devcon/editor/select-view/show-select-view-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/devcon/editor/select-view/hui-dialog-select-view.ts")),
    dialogParams: selectViewDialogParams
  });
};

/***/ }),

/***/ "./src/panels/devcon/editor/unused-entities/hui-unused-entities.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/devcon/editor/unused-entities/hui-unused-entities.ts ***!
  \*************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_op_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/op-relative-time */ "./src/components/op-relative-time.js");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _components_data_table_op_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/data-table/op-data-table */ "./src/components/data-table/op-data-table.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/devcon/common/compute-unused-entities.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _add_entities_to_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-entities-to-view */ "./src/panels/devcon/editor/add-entities-to-view.ts");
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








 // tslint:disable-next-line







let HuiUnusedEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-unused-entities")], function (_initialize, _LitElement) {
  class HuiUnusedEntities extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiUnusedEntities,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "devcon",
      value: void 0
    }, {
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
      key: "_unusedEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_selectedEntities",

      value() {
        return [];
      }

    }, {
      kind: "get",
      key: "_config",
      value: function _config() {
        return this.devcon.config;
      }
    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(narrow => {
          const columns = {
            entity: {
              title: this.opp.localize("ui.panel.devcon.unused_entities.entity"),
              sortable: true,
              filterable: true,
              filterKey: "friendly_name",
              direction: "asc",
              template: stateObj => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div @click=${this._handleEntityClicked} style="cursor: pointer;">
            <state-badge .opp=${this.opp} .stateObj=${stateObj}></state-badge>
            ${stateObj.friendly_name}
          </div>
        `
            }
          };

          if (narrow) {
            return columns;
          }

          columns.entity_id = {
            title: this.opp.localize("ui.panel.devcon.unused_entities.entity_id"),
            sortable: true,
            filterable: true
          };
          columns.domain = {
            title: this.opp.localize("ui.panel.devcon.unused_entities.domain"),
            sortable: true,
            filterable: true
          };
          columns.last_changed = {
            title: this.opp.localize("ui.panel.devcon.unused_entities.last_changed"),
            type: "numeric",
            sortable: true,
            template: lastChanged => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <op-relative-time
          .opp=${this.opp}
          .datetime=${lastChanged}
        ></op-relative-time>
      `
          };
          return columns;
        });
      }

    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiUnusedEntities.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("devcon")) {
          this._getUnusedEntities();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || !this.devcon) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (this.devcon.mode === "storage" && this.devcon.editMode === false) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-card
        header="${this.opp.localize("ui.panel.devcon.unused_entities.title")}"
      >
        <div class="card-content">
          ${this.opp.localize("ui.panel.devcon.unused_entities.available_entities")}
          ${this.devcon.mode === "storage" ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <br />${this.opp.localize("ui.panel.devcon.unused_entities.select_to_add")}
              ` : ""}
        </div>
      </op-card>
      <op-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._unusedEntities.map(entity => {
          const stateObj = this.opp.states[entity];
          return {
            entity_id: entity,
            entity: Object.assign({}, stateObj, {
              friendly_name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj)
            }),
            domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entity),
            last_changed: stateObj.last_changed
          };
        })}
        .id=${"entity_id"}
        selectable
        @selection-changed=${this._handleSelectionChanged}
      ></op-data-table>

      <op-fab
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTL"])(this.opp)
        })}"
        icon="opp:plus"
        label="${this.opp.localize("ui.panel.devcon.editor.edit_card.add")}"
        @click="${this._addToDevconView}"
      ></op-fab>
    `;
      }
    }, {
      kind: "method",
      key: "_getUnusedEntities",
      value: function _getUnusedEntities() {
        if (!this.opp || !this.devcon) {
          return;
        }

        this._selectedEntities = [];
        this._unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__["computeUnusedEntities"])(this.opp, this._config);
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected) {
          this._selectedEntities.push(entity);
        } else {
          const index = this._selectedEntities.indexOf(entity);

          if (index !== -1) {
            this._selectedEntities.splice(index, 1);
          }
        }
      }
    }, {
      kind: "method",
      key: "_handleEntityClicked",
      value: function _handleEntityClicked(ev) {
        const entityId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "opp-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_addToDevconView",
      value: function _addToDevconView() {
        Object(_add_entities_to_view__WEBPACK_IMPORTED_MODULE_13__["addEntitiesToDevconView"])(this, this.opp, this._selectedEntities, this.devcon.config, this.devcon.saveConfig);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        background: var(--devcon-background);
        padding: 16px;
      }
      op-fab {
        position: sticky;
        float: right;
        bottom: 16px;
        z-index: 1;
      }
      op-fab.rtl {
        float: left;
      }
      op-card {
        margin-bottom: 16px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvYWRkLWVudGl0aWVzLXRvLXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctc3VnZ2VzdC1jYXJkLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3Ivc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL3VudXNlZC1lbnRpdGllcy9odWktdW51c2VkLWVudGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmNvbkNvbmZpZywgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IEVYQ0xVREVEX0RPTUFJTlMgPSBbXCJ6b25lXCIsIFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIl07XG5cbmNvbnN0IGFkZEZyb21BY3Rpb24gPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBhY3Rpb25Db25maWc6IEFjdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoXG4gICAgYWN0aW9uQ29uZmlnLmFjdGlvbiAhPT0gXCJjYWxsLXNlcnZpY2VcIiB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZW50aXR5SWRzID0gYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdHlJZHMpKSB7XG4gICAgZW50aXR5SWRzID0gW2VudGl0eUlkc107XG4gIH1cbiAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBlbnRpdHlJZHMpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5SWQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdHlJZCA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGVudGl0eSkgPT4ge1xuICBpZiAodHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbnRpdHkuZW50aXR5KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5lbnRpdHkpO1xuICB9XG4gIGlmIChlbnRpdHkuY2FtZXJhX2ltYWdlKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5jYW1lcmFfaW1hZ2UpO1xuICB9XG4gIGlmIChlbnRpdHkudGFwX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS50YXBfYWN0aW9uKTtcbiAgfVxuICBpZiAoZW50aXR5LmhvbGRfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LmhvbGRfYWN0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXRpZXMgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBvYmopID0+IHtcbiAgaWYgKG9iai5lbnRpdHkpIHtcbiAgICBhZGRFbnRpdHlJZChlbnRpdGllcywgb2JqLmVudGl0eSk7XG4gIH1cbiAgaWYgKG9iai5lbnRpdGllcykge1xuICAgIG9iai5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBlbnRpdHkpKTtcbiAgfVxuICBpZiAob2JqLmNhcmQpIHtcbiAgICBhZGRFbnRpdGllcyhlbnRpdGllcywgb2JqLmNhcmQpO1xuICB9XG4gIGlmIChvYmouY2FyZHMpIHtcbiAgICBvYmouY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIGNhcmQpKTtcbiAgfVxuICBpZiAob2JqLmVsZW1lbnRzKSB7XG4gICAgb2JqLmVsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5iYWRnZXMpIHtcbiAgICBvYmouYmFkZ2VzLmZvckVhY2goKGJhZGdlKSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgYmFkZ2UpKTtcbiAgfVxufTtcblxuY29uc3QgY29tcHV0ZVVzZWRFbnRpdGllcyA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZW50aXRpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uZmlnLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCB2aWV3KSk7XG4gIHJldHVybiBlbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVW51c2VkRW50aXRpZXMgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgY29uZmlnOiBEZXZjb25Db25maWdcbik6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgdXNlZEVudGl0aWVzID0gY29tcHV0ZVVzZWRFbnRpdGllcyhjb25maWcpO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3BwLnN0YXRlcylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgIXVzZWRFbnRpdGllcy5oYXMoZW50aXR5KSAmJlxuICAgICAgICAhRVhDTFVERURfRE9NQUlOUy5pbmNsdWRlcyhlbnRpdHkuc3BsaXQoXCIuXCIsIDEpWzBdKVxuICAgIClcbiAgICAuc29ydCgpO1xufTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZywgZmV0Y2hDb25maWcsIHNhdmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IHNob3dTZWxlY3RWaWV3RGlhbG9nIH0gZnJvbSBcIi4vc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dTdWdnZXN0Q2FyZERpYWxvZyB9IGZyb20gXCIuL2NhcmQtZWRpdG9yL3Nob3ctc3VnZ2VzdC1jYXJkLWRpYWxvZ1wiO1xuXG5leHBvcnQgY29uc3QgYWRkRW50aXRpZXNUb0RldmNvblZpZXcgPSBhc3luYyAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBzdHJpbmdbXSxcbiAgZGV2Y29uQ29uZmlnPzogRGV2Y29uQ29uZmlnLFxuICBzYXZlQ29uZmlnRnVuYz86IChuZXdDb25maWc6IERldmNvbkNvbmZpZykgPT4gdm9pZFxuKSA9PiB7XG4gIGlmICgob3BwIS5wYW5lbHMuZGV2Y29uPy5jb25maWcgYXMgYW55KT8ubW9kZSA9PT0gXCJ5YW1sXCIpIHtcbiAgICBzaG93U3VnZ2VzdENhcmREaWFsb2coZWxlbWVudCwge1xuICAgICAgZW50aXRpZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghZGV2Y29uQ29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGRldmNvbkNvbmZpZyA9IGF3YWl0IGZldGNoQ29uZmlnKG9wcC5jb25uZWN0aW9uLCBmYWxzZSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBhbGVydChcbiAgICAgICAgb3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5hZGRfZW50aXRpZXMuZ2VuZXJhdGVkX3Vuc3VwcG9ydGVkXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKCFkZXZjb25Db25maWcudmlld3MubGVuZ3RoKSB7XG4gICAgYWxlcnQoXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgRGV2Y29uIHZpZXdzLCBmaXJzdCBjcmVhdGUgYSB2aWV3IGluIERldmNvbi5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc2F2ZUNvbmZpZ0Z1bmMpIHtcbiAgICBzYXZlQ29uZmlnRnVuYyA9IGFzeW5jIChuZXdDb25maWc6IERldmNvbkNvbmZpZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2F2ZUNvbmZpZyhvcHAhLCBuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIG9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLmFkZF9lbnRpdGllcy5zYXZpbmdfZmFpbGVkXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBpZiAoZGV2Y29uQ29uZmlnLnZpZXdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHNob3dTdWdnZXN0Q2FyZERpYWxvZyhlbGVtZW50LCB7XG4gICAgICBkZXZjb25Db25maWc6IGRldmNvbkNvbmZpZyEsXG4gICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgIHBhdGg6IFswXSxcbiAgICAgIGVudGl0aWVzLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBzaG93U2VsZWN0Vmlld0RpYWxvZyhlbGVtZW50LCB7XG4gICAgZGV2Y29uQ29uZmlnLFxuICAgIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldykgPT4ge1xuICAgICAgc2hvd1N1Z2dlc3RDYXJkRGlhbG9nKGVsZW1lbnQsIHtcbiAgICAgICAgZGV2Y29uQ29uZmlnOiBkZXZjb25Db25maWchLFxuICAgICAgICBzYXZlQ29uZmlnOiBzYXZlQ29uZmlnRnVuYyxcbiAgICAgICAgcGF0aDogW3ZpZXddLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZywgRGV2Y29uQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zIHtcbiAgZGV2Y29uQ29uZmlnPzogRGV2Y29uQ29uZmlnO1xuICBzYXZlQ29uZmlnPzogKGNvbmZpZzogRGV2Y29uQ29uZmlnKSA9PiB2b2lkO1xuICBwYXRoPzogW251bWJlcl07XG4gIGVudGl0aWVzOiBzdHJpbmdbXTsgLy8gV2UgY2FuIHBhc3MgZW50aXR5IGlkJ3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb25maWcgd2hlbiBhIGNhcmQgaXMgcGlja2VkXG4gIGNhcmRDb25maWc/OiBEZXZjb25DYXJkQ29uZmlnW107IC8vIFdlIGNhbiBwYXNzIGEgc3VnZ2VzdGVkIGNvbmZpZ1xufVxuXG5jb25zdCBpbXBvcnRzdWdnZXN0Q2FyZERpYWxvZyA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCIgKi8gXCIuL2h1aS1kaWFsb2ctc3VnZ2VzdC1jYXJkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNob3dTdWdnZXN0Q2FyZERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN1Z2dlc3RDYXJkRGlhbG9nUGFyYW1zOiBTdWdnZXN0Q2FyZERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zdWdnZXN0LWNhcmRcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGltcG9ydHN1Z2dlc3RDYXJkRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3VnZ2VzdENhcmREaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERldmNvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMge1xuICBkZXZjb25Db25maWc6IERldmNvbkNvbmZpZztcbiAgdmlld1NlbGVjdGVkQ2FsbGJhY2s6ICh2aWV3OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzaG93U2VsZWN0Vmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdFZpZXdEaWFsb2dQYXJhbXM6IFNlbGVjdFZpZXdEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiICovIFwiLi9odWktZGlhbG9nLXNlbGVjdC12aWV3XCJcbiAgICAgICksXG4gICAgZGlhbG9nUGFyYW1zOiBzZWxlY3RWaWV3RGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1pY29uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9vcC1kYXRhLXRhYmxlXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7XG4gIFNlbGVjdGlvbkNoYW5nZWRFdmVudCxcbiAgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL29wLWRhdGEtdGFibGVcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IGNvbXB1dGVVbnVzZWRFbnRpdGllcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcHV0ZS11bnVzZWQtZW50aXRpZXNcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2Y29uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZjb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGFkZEVudGl0aWVzVG9EZXZjb25WaWV3IH0gZnJvbSBcIi4uL2FkZC1lbnRpdGllcy10by12aWV3XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXVudXNlZC1lbnRpdGllc1wiKVxuZXhwb3J0IGNsYXNzIEh1aVVudXNlZEVudGl0aWVzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZjb24/OiBEZXZjb247XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW51c2VkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBfY29uZmlnKCk6IERldmNvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuZGV2Y29uIS5jb25maWc7XG4gIH1cblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZU9uZSgobmFycm93OiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIHRpdGxlOiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24udW51c2VkX2VudGl0aWVzLmVudGl0eVwiKSxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgIGZpbHRlcktleTogXCJmcmllbmRseV9uYW1lXCIsXG4gICAgICAgIGRpcmVjdGlvbjogXCJhc2NcIixcbiAgICAgICAgdGVtcGxhdGU6IChzdGF0ZU9iaikgPT4gaHRtbGBcbiAgICAgICAgICA8ZGl2IEBjbGljaz0ke3RoaXMuX2hhbmRsZUVudGl0eUNsaWNrZWR9IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgPHN0YXRlLWJhZGdlIC5vcHA9JHt0aGlzLm9wcCF9IC5zdGF0ZU9iaj0ke3N0YXRlT2JqfT48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgJHtzdGF0ZU9iai5mcmllbmRseV9uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKG5hcnJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuZGV2Y29uLnVudXNlZF9lbnRpdGllcy5lbnRpdHlfaWRcIiksXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgICBjb2x1bW5zLmRvbWFpbiA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24udW51c2VkX2VudGl0aWVzLmRvbWFpblwiKSxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbHVtbnMubGFzdF9jaGFuZ2VkID0ge1xuICAgICAgdGl0bGU6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi51bnVzZWRfZW50aXRpZXMubGFzdF9jaGFuZ2VkXCIpLFxuICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAobGFzdENoYW5nZWQ6IHN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgPG9wLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAub3BwPSR7dGhpcy5vcHAhfVxuICAgICAgICAgIC5kYXRldGltZT0ke2xhc3RDaGFuZ2VkfVxuICAgICAgICA+PC9vcC1yZWxhdGl2ZS10aW1lPlxuICAgICAgYCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImRldmNvblwiKSkge1xuICAgICAgdGhpcy5fZ2V0VW51c2VkRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwIHx8ICF0aGlzLmRldmNvbikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZXZjb24ubW9kZSA9PT0gXCJzdG9yYWdlXCIgJiYgdGhpcy5kZXZjb24uZWRpdE1vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLWNhcmRcbiAgICAgICAgaGVhZGVyPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi51bnVzZWRfZW50aXRpZXMudGl0bGVcIil9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi51bnVzZWRfZW50aXRpZXMuYXZhaWxhYmxlX2VudGl0aWVzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgICR7dGhpcy5kZXZjb24ubW9kZSA9PT0gXCJzdG9yYWdlXCJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8YnIgLz4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24udW51c2VkX2VudGl0aWVzLnNlbGVjdF90b19hZGRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L29wLWNhcmQ+XG4gICAgICA8b3AtZGF0YS10YWJsZVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3chKX1cbiAgICAgICAgLmRhdGE9JHt0aGlzLl91bnVzZWRFbnRpdGllcy5tYXAoKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5vcHAhLnN0YXRlc1tlbnRpdHldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAuLi5zdGF0ZU9iaixcbiAgICAgICAgICAgICAgZnJpZW5kbHlfbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tYWluOiBjb21wdXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqIS5sYXN0X2NoYW5nZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSl9XG4gICAgICAgIC5pZD0ke1wiZW50aXR5X2lkXCJ9XG4gICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgID48L29wLWRhdGEtdGFibGU+XG5cbiAgICAgIDxvcC1mYWJcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5vcHApLFxuICAgICAgICB9KX1cIlxuICAgICAgICBpY29uPVwib3BwOnBsdXNcIlxuICAgICAgICBsYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmVkaXRfY2FyZC5hZGRcIil9XCJcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9hZGRUb0RldmNvblZpZXd9XCJcbiAgICAgID48L29wLWZhYj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VW51c2VkRW50aXRpZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wcCB8fCAhdGhpcy5kZXZjb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcyA9IFtdO1xuICAgIHRoaXMuX3VudXNlZEVudGl0aWVzID0gY29tcHV0ZVVudXNlZEVudGl0aWVzKHRoaXMub3BwLCB0aGlzLl9jb25maWchKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlZFNlbGVjdGlvbiA9IGV2LmRldGFpbCBhcyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgY29uc3QgZW50aXR5ID0gY2hhbmdlZFNlbGVjdGlvbi5pZDtcbiAgICBpZiAoY2hhbmdlZFNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5pbmRleE9mKGVudGl0eSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFbnRpdHlDbGlja2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidHJcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIikhO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRUb0RldmNvblZpZXcoKTogdm9pZCB7XG4gICAgYWRkRW50aXRpZXNUb0RldmNvblZpZXcoXG4gICAgICB0aGlzLFxuICAgICAgdGhpcy5vcHAsXG4gICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLFxuICAgICAgdGhpcy5kZXZjb24hLmNvbmZpZyxcbiAgICAgIHRoaXMuZGV2Y29uIS5zYXZlQ29uZmlnXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGV2Y29uLWJhY2tncm91bmQpO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuICAgICAgb3AtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICBvcC1mYWIucnRsIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICBvcC1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktdW51c2VkLWVudGl0aWVzXCI6IEh1aVVudXNlZEVudGl0aWVzO1xuICB9XG59XG4i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