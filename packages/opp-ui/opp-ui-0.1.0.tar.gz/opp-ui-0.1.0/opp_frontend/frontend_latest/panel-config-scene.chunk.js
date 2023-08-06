(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene"],{

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, showSceneEditor, getSceneEditorInitData, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSceneEditor", function() { return showSceneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneEditorInitData", function() { return getSceneEditorInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
let inititialSceneEditorData;
const showSceneEditor = (el, data) => {
  inititialSceneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/scene/edit/new");
};
const getSceneEditorInitData = () => {
  const data = inititialSceneEditorData;
  inititialSceneEditorData = undefined;
  return data;
};
const activateScene = (opp, entityId) => opp.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (opp, entities) => opp.callService("scene", "apply", {
  entities
});
const getSceneConfig = (opp, sceneId) => opp.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (opp, sceneId, config) => opp.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (opp, id) => opp.callApi("DELETE", `config/scene/config/${id}`);

/***/ }),

/***/ "./src/panels/config/scene/op-config-scene.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/op-config-scene.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _op_scene_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./op-scene-editor */ "./src/panels/config/scene/op-scene-editor.ts");
/* harmony import */ var _op_scene_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-scene-dashboard */ "./src/panels/config/scene/op-scene-dashboard.ts");
/* harmony import */ var _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/opp-router-page */ "./src/layouts/opp-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
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











let OpConfigScene = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("op-config-scene")], function (_initialize, _OppRouterPage) {
  class OpConfigScene extends _OppRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigScene,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "scenes",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          routes: {
            dashboard: {
              tag: "op-scene-dashboard",
              cache: true
            },
            edit: {
              tag: "op-scene-editor"
            }
          }
        };
      }

    }, {
      kind: "field",
      key: "_computeScenes",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(states => {
          const scenes = [];
          Object.values(states).forEach(state => {
            if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(state) === "scene" && !state.attributes.hidden) {
              scenes.push(state);
            }
          });
          return scenes.sort((a, b) => {
            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_7__["compare"])(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(a), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(b));
          });
        });
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpConfigScene.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(pageEl, changedProps) {
        pageEl.opp = this.opp;
        pageEl.narrow = this.narrow;
        pageEl.isWide = this.isWide;
        pageEl.route = this.routeTail;
        pageEl.showAdvanced = this.showAdvanced;

        if (this.opp) {
          pageEl.scenes = this._computeScenes(this.opp.states);
        }

        if ((!changedProps || changedProps.has("route")) && this._currentPage === "edit") {
          pageEl.creatingNew = undefined;
          const sceneId = this.routeTail.path.substr(1);
          pageEl.creatingNew = sceneId === "new" ? true : false;
          pageEl.scene = sceneId === "new" ? undefined : pageEl.scenes.find(entity => entity.attributes.id === sceneId);
        }
      }
    }]
  };
}, _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_3__["OppRouterPage"]);

/***/ }),

/***/ "./src/panels/config/scene/op-scene-dashboard.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/scene/op-scene-dashboard.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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


















let OpSceneDashboard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-scene-dashboard")], function (_initialize, _LitElement) {
  class OpSceneDashboard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpSceneDashboard,
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
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scenes",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_15__["configSections"].automation}
      >
        <op-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.opp.localize("ui.panel.config.scene.picker.header")}
          </div>
          <div slot="introduction">
            ${this.opp.localize("ui.panel.config.scene.picker.introduction")}
            <p>
              <a
                href="https://open-peer-power.io/docs/scene/editor/"
                target="_blank"
              >
                ${this.opp.localize("ui.panel.config.scene.picker.learn_more")}
              </a>
            </p>
          </div>

          <op-card
            .heading=${this.opp.localize("ui.panel.config.scene.picker.pick_scene")}
          >
            ${this.scenes.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.opp.localize("ui.panel.config.scene.picker.no_scenes")}
                    </p>
                  </div>
                ` : this.scenes.map(scene => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <div class="scene">
                      <paper-icon-button
                        .scene=${scene}
                        icon="opp:play"
                        title="${this.opp.localize("ui.panel.config.scene.picker.activate_scene")}"
                        @click=${this._activateScene}
                      ></paper-icon-button>
                      <paper-item-body two-line>
                        <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(scene)}</div>
                      </paper-item-body>
                      <div class="actions">
                        <a
                          href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_13__["ifDefined"])(scene.attributes.id ? `/config/scene/edit/${scene.attributes.id}` : undefined)}
                        >
                          <paper-icon-button
                            title="${this.opp.localize("ui.panel.config.scene.picker.edit_scene")}"
                            icon="opp:pencil"
                            .disabled=${!scene.attributes.id}
                          ></paper-icon-button>
                          ${!scene.attributes.id ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                <paper-tooltip position="left">
                                  ${this.opp.localize("ui.panel.config.scene.picker.only_editable")}
                                </paper-tooltip>
                              ` : ""}
                        </a>
                      </div>
                    </div>
                  `)}
          </op-card>
        </op-config-section>
        <a href="/config/scene/edit/new">
          <op-fab
            ?is-wide=${this.isWide}
            ?narrow=${this.narrow}
            icon="opp:plus"
            title=${this.opp.localize("ui.panel.config.scene.picker.add_scene")}
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__["computeRTL"])(this.opp)}
          ></op-fab>
        </a>
      </opp-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_activateScene",
      value: async function _activateScene(ev) {
        const scene = ev.target.scene;
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_11__["activateScene"])(this.opp, scene.entity_id);
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(this, {
          message: this.opp.localize("ui.panel.config.scene.activated", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(scene))
        });
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_14__["forwardHaptic"])("light");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_10__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
          height: 100%;
        }

        op-card {
          margin-bottom: 56px;
        }

        .scene {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .scene > *:first-child {
          margin-right: 8px;
        }

        .scene a[href] {
          color: var(--primary-text-color);
        }

        .actions {
          display: flex;
        }

        op-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        op-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        op-fab[narrow] {
          bottom: 84px;
        }
        op-fab[rtl] {
          right: auto;
          left: 16px;
        }

        op-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/scene/op-scene-editor.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/scene/op-scene-editor.ts ***!
  \****************************************************/
/*! exports provided: OpSceneEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpSceneEditor", function() { return OpSceneEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _components_device_op_device_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/device/op-device-picker */ "./src/components/device/op-device-picker.ts");
/* harmony import */ var _components_entity_op_entities_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/entity/op-entities-picker */ "./src/components/entity/op-entities-picker.ts");
/* harmony import */ var _components_op_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/op-paper-icon-button-arrow-prev */ "./src/components/op-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_op_app_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layouts/op-app-layout */ "./src/layouts/op-app-layout.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/scene */ "./src/data/scene.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
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



























let OpSceneEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-scene-editor")], function (_initialize, _SubscribeMixin) {
  class OpSceneEditor extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpSceneEditor,
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
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scene",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "creatingNew",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "showAdvanced",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_dirty",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_errors",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_deviceRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entityRegistryEntries",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_storedStates",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_unsubscribeEvents",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_deviceEntityLookup",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_activateContextId",
      value: void 0
    }, {
      kind: "field",
      key: "_getEntitiesDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_22__["default"])((entities, devices, deviceEntityLookup, deviceRegs) => {
          const outputDevices = [];

          if (devices.length) {
            const deviceLookup = {};

            for (const device of deviceRegs) {
              deviceLookup[device.id] = device;
            }

            devices.forEach(deviceId => {
              const device = deviceLookup[deviceId];
              const deviceEntities = deviceEntityLookup[deviceId] || [];
              outputDevices.push({
                name: Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_19__["computeDeviceName"])(device, this.opp, this._deviceEntityLookup[device.id]),
                id: device.id,
                entities: deviceEntities
              });
            });
          }

          const outputEntities = [];
          entities.forEach(entity => {
            if (!outputDevices.find(device => device.entities.includes(entity))) {
              outputEntities.push(entity);
            }
          });
          return {
            devices: outputDevices,
            entities: outputEntities
          };
        });
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpSceneEditor.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubscribeEvents) {
          this._unsubscribeEvents();

          this._unsubscribeEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "oppSubscribe",
      value: function oppSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_20__["subscribeEntityRegistry"])(this.opp.connection, entries => {
          this._entityRegistryEntries = entries;
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_19__["subscribeDeviceRegistry"])(this.opp.connection, entries => {
          this._deviceRegistryEntries = entries;
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const {
          devices,
          entities
        } = this._getEntitiesDevices(this._entities, this._devices, this._deviceEntityLookup, this._deviceRegistryEntries);

        const name = this.scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(this.scene) : this.opp.localize("ui.panel.config.scene.editor.default_name");
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        .route=${this.route}
        .backCallback=${() => this._backTapped()}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_25__["configSections"].automation}
      >

      ${this.creatingNew ? "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                slot="toolbar-icon"
                title="${this.opp.localize("ui.panel.config.scene.picker.delete_scene")}"
                icon="opp:delete"
                @click=${this._deleteTapped}
              ></paper-icon-button>
            `}

          ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="errors">${this._errors}</div>
                ` : ""}
          ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <span slot="header">${name}</span>
                ` : ""}
          <div
            id="root"
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.opp)
        })}"
          >
            <op-config-section .isWide=${this.isWide}>
              ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <span slot="header">${name}</span>
                    ` : ""}
              <div slot="introduction">
                ${this.opp.localize("ui.panel.config.scene.editor.introduction")}
              </div>
              <op-card>
                <div class="card-content">
                  <paper-input
                    .value=${this.scene ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(this.scene) : ""}
                    @value-changed=${this._nameChanged}
                    label=${this.opp.localize("ui.panel.config.scene.editor.name")}
                  ></paper-input>
                </div>
              </op-card>
            </op-config-section>

            <op-config-section .isWide=${this.isWide}>
              <div slot="header">
                ${this.opp.localize("ui.panel.config.scene.editor.devices.header")}
              </div>
              <div slot="introduction">
                ${this.opp.localize("ui.panel.config.scene.editor.devices.introduction")}
              </div>

              ${devices.map(device => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <op-card>
                      <div class="card-header">
                        ${device.name}
                        <paper-icon-button
                          icon="opp:delete"
                          title="${this.opp.localize("ui.panel.config.scene.editor.devices.delete")}"
                          .device=${device.id}
                          @click=${this._deleteDevice}
                        ></paper-icon-button>
                      </div>
                      ${device.entities.map(entityId => {
          const stateObj = this.opp.states[entityId];

          if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <paper-icon-item
                            .entityId=${entityId}
                            @click=${this._showMoreInfo}
                            class="device-entity"
                          >
                            <state-badge
                              .stateObj=${stateObj}
                              slot="item-icon"
                            ></state-badge>
                            <paper-item-body>
                              ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(stateObj)}
                            </paper-item-body>
                          </paper-icon-item>
                        `;
        })}
                    </op-card>
                  `)}

              <op-card
                .header=${this.opp.localize("ui.panel.config.scene.editor.devices.add")}
              >
                <div class="card-content">
                  <op-device-picker
                    @value-changed=${this._devicePicked}
                    .opp=${this.opp}
                    .label=${this.opp.localize("ui.panel.config.scene.editor.devices.add")}
                  />
                </div>
              </op-card>
            </op-config-section>

            ${this.showAdvanced ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <op-config-section .isWide=${this.isWide}>
                      <div slot="header">
                        ${this.opp.localize("ui.panel.config.scene.editor.entities.header")}
                      </div>
                      <div slot="introduction">
                        ${this.opp.localize("ui.panel.config.scene.editor.entities.introduction")}
                      </div>
                      ${entities.length ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                            <op-card
                              class="entities"
                              .header=${this.opp.localize("ui.panel.config.scene.editor.entities.without_device")}
                            >
                              ${entities.map(entityId => {
          const stateObj = this.opp.states[entityId];

          if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                  <paper-icon-item
                                    .entityId=${entityId}
                                    @click=${this._showMoreInfo}
                                    class="device-entity"
                                  >
                                    <state-badge
                                      .stateObj=${stateObj}
                                      slot="item-icon"
                                    ></state-badge>
                                    <paper-item-body>
                                      ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_13__["computeStateName"])(stateObj)}
                                    </paper-item-body>
                                    <paper-icon-button
                                      icon="opp:delete"
                                      .entityId=${entityId}
                                      .title="${this.opp.localize("ui.panel.config.scene.editor.entities.delete")}"
                                      @click=${this._deleteEntity}
                                    ></paper-icon-button>
                                  </paper-icon-item>
                                `;
        })}
                            </op-card>
                          ` : ""}

                      <op-card
                        header=${this.opp.localize("ui.panel.config.scene.editor.entities.add")}
                      >
                        <div class="card-content">
                          ${this.opp.localize("ui.panel.config.scene.editor.entities.device_entities")}
                          <op-entity-picker
                            @value-changed=${this._entityPicked}
                            .excludeDomains=${_data_scene__WEBPACK_IMPORTED_MODULE_17__["SCENE_IGNORED_DOMAINS"]}
                            .opp=${this.opp}
                            label=${this.opp.localize("ui.panel.config.scene.editor.entities.add")}
                          />
                        </div>
                      </op-card>
                    </op-config-section>
                  ` : ""}
          </div>
        <op-fab
          ?is-wide="${this.isWide}"
          ?narrow="${this.narrow}"
          ?dirty="${this._dirty}"
          icon="opp:content-save"
          .title="${this.opp.localize("ui.panel.config.scene.editor.save")}"
          @click=${this._saveScene}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_7__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.opp)
        })}"
        ></op-fab>
      </op-app-layout>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpSceneEditor.prototype), "updated", this).call(this, changedProps);

        const oldscene = changedProps.get("scene");

        if (changedProps.has("scene") && this.scene && this.opp && ( // Only refresh config if we picked a new scene. If same ID, don't fetch it.
        !oldscene || oldscene.attributes.id !== this.scene.attributes.id)) {
          this._loadConfig();
        }

        if (changedProps.has("creatingNew") && this.creatingNew && this.opp) {
          this._dirty = false;
          const initData = Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["getSceneEditorInitData"])();
          this._config = Object.assign({
            name: this.opp.localize("ui.panel.config.scene.editor.default_name"),
            entities: {}
          }, initData);

          this._initEntities(this._config);

          if (initData) {
            this._dirty = true;
          }
        }

        if (changedProps.has("_entityRegistryEntries")) {
          for (const entity of this._entityRegistryEntries) {
            if (!entity.device_id || _data_scene__WEBPACK_IMPORTED_MODULE_17__["SCENE_IGNORED_DOMAINS"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_23__["computeDomain"])(entity.entity_id))) {
              continue;
            }

            if (!(entity.device_id in this._deviceEntityLookup)) {
              this._deviceEntityLookup[entity.device_id] = [];
            }

            if (!this._deviceEntityLookup[entity.device_id].includes(entity.entity_id)) {
              this._deviceEntityLookup[entity.device_id].push(entity.entity_id);
            }

            if (this._entities.includes(entity.entity_id) && !this._devices.includes(entity.device_id)) {
              this._devices = [...this._devices, entity.device_id];
            }
          }
        }
      }
    }, {
      kind: "method",
      key: "_showMoreInfo",
      value: function _showMoreInfo(ev) {
        const entityId = ev.currentTarget.entityId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_18__["fireEvent"])(this, "opp-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_loadConfig",
      value: async function _loadConfig() {
        let config;

        try {
          config = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["getSceneConfig"])(this.opp, this.scene.attributes.id);
        } catch (err) {
          alert(err.status_code === 404 ? this.opp.localize("ui.panel.config.scene.editor.load_error_not_editable") : this.opp.localize("ui.panel.config.scene.editor.load_error_unknown", "err_no", err.status_code));
          history.back();
          return;
        }

        if (!config.entities) {
          config.entities = {};
        }

        this._initEntities(config);

        const {
          context
        } = await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["activateScene"])(this.opp, this.scene.entity_id);
        this._activateContextId = context.id;
        this._unsubscribeEvents = await this.opp.connection.subscribeEvents(event => this._stateChanged(event), "state_changed");
        this._dirty = false;
        this._config = config;
      }
    }, {
      kind: "method",
      key: "_initEntities",
      value: function _initEntities(config) {
        this._entities = Object.keys(config.entities);

        this._entities.forEach(entity => this._storeState(entity));

        const filteredEntityReg = this._entityRegistryEntries.filter(entityReg => this._entities.includes(entityReg.entity_id));

        this._devices = [];

        for (const entityReg of filteredEntityReg) {
          if (!entityReg.device_id) {
            continue;
          }

          if (!this._devices.includes(entityReg.device_id)) {
            this._devices = [...this._devices, entityReg.device_id];
          }
        }
      }
    }, {
      kind: "method",
      key: "_entityPicked",
      value: function _entityPicked(ev) {
        const entityId = ev.detail.value;
        ev.target.value = "";

        if (this._entities.includes(entityId)) {
          return;
        }

        this._entities = [...this._entities, entityId];

        this._storeState(entityId);

        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteEntity",
      value: function _deleteEntity(ev) {
        ev.stopPropagation();
        const deleteEntityId = ev.target.entityId;
        this._entities = this._entities.filter(entityId => entityId !== deleteEntityId);
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_devicePicked",
      value: function _devicePicked(ev) {
        const device = ev.detail.value;
        ev.target.value = "";

        if (this._devices.includes(device)) {
          return;
        }

        this._devices = [...this._devices, device];
        const deviceEntities = this._deviceEntityLookup[device];

        if (!deviceEntities) {
          return;
        }

        this._entities = [...this._entities, ...deviceEntities];
        deviceEntities.forEach(entityId => {
          this._storeState(entityId);
        });
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_deleteDevice",
      value: function _deleteDevice(ev) {
        const deviceId = ev.target.device;
        this._devices = this._devices.filter(device => device !== deviceId);
        const deviceEntities = this._deviceEntityLookup[deviceId];

        if (!deviceEntities) {
          return;
        }

        this._entities = this._entities.filter(entityId => !deviceEntities.includes(entityId));
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        if (!this._config || this._config.name === ev.detail.value) {
          return;
        }

        this._config.name = ev.detail.value;
        this._dirty = true;
      }
    }, {
      kind: "method",
      key: "_stateChanged",
      value: function _stateChanged(event) {
        if (event.context.id !== this._activateContextId && this._entities.includes(event.data.entity_id)) {
          this._dirty = true;
        }
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this._dirty) {
          Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_24__["showConfirmationDialog"])(this, {
            text: this.opp.localize("ui.panel.config.scene.editor.unsaved_confirm"),
            confirmText: this.opp.localize("ui.common.yes"),
            dismissText: this.opp.localize("ui.common.no"),
            confirm: () => this._goBack()
          });
        } else {
          this._goBack();
        }
      }
    }, {
      kind: "method",
      key: "_goBack",
      value: function _goBack() {
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["applyScene"])(this.opp, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_deleteTapped",
      value: function _deleteTapped() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_24__["showConfirmationDialog"])(this, {
          text: this.opp.localize("ui.panel.config.scene.picker.delete_confirm"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no"),
          confirm: () => this._delete()
        });
      }
    }, {
      kind: "method",
      key: "_delete",
      value: async function _delete() {
        await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["deleteScene"])(this.opp, this.scene.attributes.id);
        Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["applyScene"])(this.opp, this._storedStates);
        history.back();
      }
    }, {
      kind: "method",
      key: "_calculateStates",
      value: function _calculateStates() {
        const output = {};

        this._entities.forEach(entityId => {
          const state = this._getCurrentState(entityId);

          if (state) {
            output[entityId] = state;
          }
        });

        return output;
      }
    }, {
      kind: "method",
      key: "_storeState",
      value: function _storeState(entityId) {
        if (entityId in this._storedStates) {
          return;
        }

        const state = this._getCurrentState(entityId);

        if (!state) {
          return;
        }

        this._storedStates[entityId] = state;
      }
    }, {
      kind: "method",
      key: "_getCurrentState",
      value: function _getCurrentState(entityId) {
        const stateObj = this.opp.states[entityId];

        if (!stateObj) {
          return;
        }

        return Object.assign({}, stateObj.attributes, {
          state: stateObj.state
        });
      }
    }, {
      kind: "method",
      key: "_saveScene",
      value: async function _saveScene() {
        const id = this.creatingNew ? "" + Date.now() : this.scene.attributes.id;
        this._config = Object.assign({}, this._config, {
          entities: this._calculateStates()
        });

        try {
          await Object(_data_scene__WEBPACK_IMPORTED_MODULE_17__["saveScene"])(this.opp, id, this._config);
          this._dirty = false;

          if (this.creatingNew) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_15__["navigate"])(this, `/config/scene/edit/${id}`, true);
          }
        } catch (err) {
          this._errors = err.body.message || err.message;
          throw err;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_14__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers op-card,
        .script op-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        paper-icon-item {
          padding: 8px 16px;
        }
        op-card paper-icon-button {
          color: var(--secondary-text-color);
        }
        .card-header > paper-icon-button {
          float: right;
          position: relative;
          top: -8px;
        }
        .device-entity {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        op-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        op-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        op-fab[narrow] {
          bottom: 84px;
          margin-bottom: -140px;
        }
        op-fab[dirty] {
          margin-bottom: 0;
        }

        op-fab.rtl {
          right: auto;
          left: 16px;
        }

        op-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_21__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NlbmUvb3AtY29uZmlnLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3NjZW5lL29wLXNjZW5lLWRhc2hib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zY2VuZS9vcC1zY2VuZS1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BwRW50aXR5QmFzZSwgT3BwRW50aXR5QXR0cmlidXRlQmFzZSB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIsIFNlcnZpY2VDYWxsUmVzcG9uc2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxubGV0IGluaXRpdGlhbFNjZW5lRWRpdG9yRGF0YTogUGFydGlhbDxTY2VuZUNvbmZpZz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93U2NlbmVFZGl0b3IgPSAoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgZGF0YT86IFBhcnRpYWw8U2NlbmVDb25maWc+XG4pID0+IHtcbiAgaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhID0gZGF0YTtcbiAgbmF2aWdhdGUoZWwsIFwiL2NvbmZpZy9zY2VuZS9lZGl0L25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTY2VuZUVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsU2NlbmVFZGl0b3JEYXRhO1xuICBpbml0aXRpYWxTY2VuZUVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0eSBleHRlbmRzIE9wcEVudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBPcHBFbnRpdHlBdHRyaWJ1dGVCYXNlICYgeyBpZD86IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRpdGllczogU2NlbmVFbnRpdGllcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUVudGl0aWVzIHtcbiAgW2VudGl0eUlkOiBzdHJpbmddOiBzdHJpbmcgfCB7IHN0YXRlOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgY29uc3QgYWN0aXZhdGVTY2VuZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIG9wcC5jYWxsU2VydmljZShcInNjZW5lXCIsIFwidHVybl9vblwiLCB7IGVudGl0eV9pZDogZW50aXR5SWQgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBseVNjZW5lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0aWVzOiBTY2VuZUVudGl0aWVzXG4pOiBQcm9taXNlPFNlcnZpY2VDYWxsUmVzcG9uc2U+ID0+XG4gIG9wcC5jYWxsU2VydmljZShcInNjZW5lXCIsIFwiYXBwbHlcIiwgeyBlbnRpdGllcyB9KTtcblxuZXhwb3J0IGNvbnN0IGdldFNjZW5lQ29uZmlnID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHNjZW5lSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxTY2VuZUNvbmZpZz4gPT5cbiAgb3BwLmNhbGxBcGk8U2NlbmVDb25maWc+KFwiR0VUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gKTtcblxuZXhwb3J0IGNvbnN0IHNhdmVTY2VuZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBzY2VuZUlkOiBzdHJpbmcsXG4gIGNvbmZpZzogU2NlbmVDb25maWdcbikgPT4gb3BwLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gLCBjb25maWcpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NlbmUgPSAob3BwOiBPcGVuUGVlclBvd2VyLCBpZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke2lkfWApO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuXG5pbXBvcnQgXCIuL29wLXNjZW5lLWVkaXRvclwiO1xuaW1wb3J0IFwiLi9vcC1zY2VuZS1kYXNoYm9hcmRcIjtcblxuaW1wb3J0IHsgT3BwUm91dGVyUGFnZSwgUm91dGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL29wcC1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQsIFByb3BlcnR5VmFsdWVzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IFNjZW5lRW50aXR5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgT3BwRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWNvbmZpZy1zY2VuZVwiKVxuY2xhc3MgT3BDb25maWdTY2VuZSBleHRlbmRzIE9wcFJvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2hvd0FkdmFuY2VkITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjZW5lczogU2NlbmVFbnRpdHlbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIHJvdXRlczoge1xuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJvcC1zY2VuZS1kYXNoYm9hcmRcIixcbiAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgZWRpdDoge1xuICAgICAgICB0YWc6IFwib3Atc2NlbmUtZWRpdG9yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVNjZW5lcyA9IG1lbW9pemVPbmUoKHN0YXRlczogT3BwRW50aXRpZXMpID0+IHtcbiAgICBjb25zdCBzY2VuZXM6IFNjZW5lRW50aXR5W10gPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKHN0YXRlcykuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGUpID09PSBcInNjZW5lXCIgJiYgIXN0YXRlLmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgIHNjZW5lcy5wdXNoKHN0YXRlIGFzIFNjZW5lRW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzY2VuZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGNvbXBhcmUoY29tcHV0ZVN0YXRlTmFtZShhKSwgY29tcHV0ZVN0YXRlTmFtZShiKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChwYWdlRWwsIGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBwYWdlRWwub3BwID0gdGhpcy5vcHA7XG4gICAgcGFnZUVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIHBhZ2VFbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgICBwYWdlRWwucm91dGUgPSB0aGlzLnJvdXRlVGFpbDtcbiAgICBwYWdlRWwuc2hvd0FkdmFuY2VkID0gdGhpcy5zaG93QWR2YW5jZWQ7XG5cbiAgICBpZiAodGhpcy5vcHApIHtcbiAgICAgIHBhZ2VFbC5zY2VuZXMgPSB0aGlzLl9jb21wdXRlU2NlbmVzKHRoaXMub3BwLnN0YXRlcyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKCFjaGFuZ2VkUHJvcHMgfHwgY2hhbmdlZFByb3BzLmhhcyhcInJvdXRlXCIpKSAmJlxuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZWRpdFwiXG4gICAgKSB7XG4gICAgICBwYWdlRWwuY3JlYXRpbmdOZXcgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBzY2VuZUlkID0gdGhpcy5yb3V0ZVRhaWwucGF0aC5zdWJzdHIoMSk7XG4gICAgICBwYWdlRWwuY3JlYXRpbmdOZXcgPSBzY2VuZUlkID09PSBcIm5ld1wiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgcGFnZUVsLnNjZW5lID1cbiAgICAgICAgc2NlbmVJZCA9PT0gXCJuZXdcIlxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBwYWdlRWwuc2NlbmVzLmZpbmQoXG4gICAgICAgICAgICAgIChlbnRpdHk6IFNjZW5lRW50aXR5KSA9PiBlbnRpdHkuYXR0cmlidXRlcy5pZCA9PT0gc2NlbmVJZFxuICAgICAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWNvbmZpZy1zY2VuZVwiOiBPcENvbmZpZ1NjZW5lO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXRhYnMtc3VicGFnZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtZmFiXCI7XG5cbmltcG9ydCBcIi4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IG9wU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFNjZW5lRW50aXR5LCBhY3RpdmF0ZVNjZW5lIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmVcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5pbXBvcnQgeyBpZkRlZmluZWQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9pZi1kZWZpbmVkXCI7XG5pbXBvcnQgeyBmb3J3YXJkSGFwdGljIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaGFwdGljc1wiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vb3AtcGFuZWwtY29uZmlnXCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3Atc2NlbmUtZGFzaGJvYXJkXCIpXG5jbGFzcyBPcFNjZW5lRGFzaGJvYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NlbmVzITogU2NlbmVFbnRpdHlbXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtdGFicy1zdWJwYWdlXG4gICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICBiYWNrLXBhdGg9XCIvY29uZmlnXCJcbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5hdXRvbWF0aW9ufVxuICAgICAgPlxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT0ke3RoaXMuaXNXaWRlfT5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmhlYWRlclwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmludHJvZHVjdGlvblwiKX1cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL29wZW4tcGVlci1wb3dlci5pby9kb2NzL3NjZW5lL2VkaXRvci9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5sZWFybl9tb3JlXCIpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8b3AtY2FyZFxuICAgICAgICAgICAgLmhlYWRpbmc9JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLnBpY2tfc2NlbmVcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuc2NlbmVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIubm9fc2NlbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogdGhpcy5zY2VuZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKHNjZW5lKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zY2VuZT0ke3NjZW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmFjdGl2YXRlX3NjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2FjdGl2YXRlU2NlbmV9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKHNjZW5lKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0ke2lmRGVmaW5lZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAvY29uZmlnL3NjZW5lL2VkaXQvJHtzY2VuZS5hdHRyaWJ1dGVzLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5lZGl0X3NjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpwZW5jaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFzY2VuZS5hdHRyaWJ1dGVzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHshc2NlbmUuYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5vbmx5X2VkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvb3AtY2FyZD5cbiAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvc2NlbmUvZWRpdC9uZXdcIj5cbiAgICAgICAgICA8b3AtZmFiXG4gICAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgICAgP25hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgaWNvbj1cIm9wcDpwbHVzXCJcbiAgICAgICAgICAgIHRpdGxlPSR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUucGlja2VyLmFkZF9zY2VuZVwiKX1cbiAgICAgICAgICAgID9ydGw9JHtjb21wdXRlUlRMKHRoaXMub3BwKX1cbiAgICAgICAgICA+PC9vcC1mYWI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvb3BwLXRhYnMtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWN0aXZhdGVTY2VuZShldikge1xuICAgIGNvbnN0IHNjZW5lID0gZXYudGFyZ2V0LnNjZW5lIGFzIFNjZW5lRW50aXR5O1xuICAgIGF3YWl0IGFjdGl2YXRlU2NlbmUodGhpcy5vcHAsIHNjZW5lLmVudGl0eV9pZCk7XG4gICAgc2hvd1RvYXN0KHRoaXMsIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5hY3RpdmF0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc2NlbmUpXG4gICAgICApLFxuICAgIH0pO1xuICAgIGZvcndhcmRIYXB0aWMoXCJsaWdodFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NlbmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGhvcml6b250YWw7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NlbmUgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY2VuZSBhW2hyZWZdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgb3AtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBvcC1mYWJbbmFycm93XSB7XG4gICAgICAgICAgYm90dG9tOiA4NHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYltydGxdIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgb3AtZmFiW3J0bF1baXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLXNjZW5lLWRhc2hib2FyZFwiOiBPcFNjZW5lRGFzaGJvYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5cbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9vcC1kZXZpY2UtcGlja2VyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9vcC1lbnRpdGllcy1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcC1hcHAtbGF5b3V0XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyLCBSb3V0ZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQge1xuICBTY2VuZUVudGl0eSxcbiAgU2NlbmVDb25maWcsXG4gIGdldFNjZW5lQ29uZmlnLFxuICBkZWxldGVTY2VuZSxcbiAgc2F2ZVNjZW5lLFxuICBTQ0VORV9JR05PUkVEX0RPTUFJTlMsXG4gIFNjZW5lRW50aXRpZXMsXG4gIGFwcGx5U2NlbmUsXG4gIGFjdGl2YXRlU2NlbmUsXG4gIGdldFNjZW5lRWRpdG9ySW5pdERhdGEsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3NjZW5lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbiAgY29tcHV0ZURldmljZU5hbWUsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IE9wcEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuaW1wb3J0IHsgY29uZmlnU2VjdGlvbnMgfSBmcm9tIFwiLi4vb3AtcGFuZWwtY29uZmlnXCI7XG5cbmludGVyZmFjZSBEZXZpY2VFbnRpdGllcyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgRGV2aWNlRW50aXRpZXNMb29rdXAge1xuICBbZGV2aWNlSWQ6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5AY3VzdG9tRWxlbWVudChcIm9wLXNjZW5lLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIE9wU2NlbmVFZGl0b3IgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2NlbmU/OiBTY2VuZUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNyZWF0aW5nTmV3PzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNob3dBZHZhbmNlZCE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RpcnR5PzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3JzPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWchOiBTY2VuZUNvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM6IHN0cmluZ1tdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZXM6IHN0cmluZ1tdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZVJlZ2lzdHJ5RW50cmllczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0eVJlZ2lzdHJ5RW50cmllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdID0gW107XG4gIHByaXZhdGUgX3N0b3JlZFN0YXRlczogU2NlbmVFbnRpdGllcyA9IHt9O1xuICBwcml2YXRlIF91bnN1YnNjcmliZUV2ZW50cz86ICgpID0+IHZvaWQ7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZUVudGl0eUxvb2t1cDogRGV2aWNlRW50aXRpZXNMb29rdXAgPSB7fTtcbiAgcHJpdmF0ZSBfYWN0aXZhdGVDb250ZXh0SWQ/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZ2V0RW50aXRpZXNEZXZpY2VzID0gbWVtb2l6ZU9uZShcbiAgICAoXG4gICAgICBlbnRpdGllczogc3RyaW5nW10sXG4gICAgICBkZXZpY2VzOiBzdHJpbmdbXSxcbiAgICAgIGRldmljZUVudGl0eUxvb2t1cDogRGV2aWNlRW50aXRpZXNMb29rdXAsXG4gICAgICBkZXZpY2VSZWdzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W11cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IG91dHB1dERldmljZXM6IERldmljZUVudGl0aWVzW10gPSBbXTtcblxuICAgICAgaWYgKGRldmljZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRldmljZUxvb2t1cDogeyBbZGV2aWNlSWQ6IHN0cmluZ106IERldmljZVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VSZWdzKSB7XG4gICAgICAgICAgZGV2aWNlTG9va3VwW2RldmljZS5pZF0gPSBkZXZpY2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXZpY2VzLmZvckVhY2goKGRldmljZUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2aWNlID0gZGV2aWNlTG9va3VwW2RldmljZUlkXTtcbiAgICAgICAgICBjb25zdCBkZXZpY2VFbnRpdGllczogc3RyaW5nW10gPSBkZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlSWRdIHx8IFtdO1xuICAgICAgICAgIG91dHB1dERldmljZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBjb21wdXRlRGV2aWNlTmFtZShcbiAgICAgICAgICAgICAgZGV2aWNlLFxuICAgICAgICAgICAgICB0aGlzLm9wcCxcbiAgICAgICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpZDogZGV2aWNlLmlkLFxuICAgICAgICAgICAgZW50aXRpZXM6IGRldmljZUVudGl0aWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0RW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoIW91dHB1dERldmljZXMuZmluZCgoZGV2aWNlKSA9PiBkZXZpY2UuZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5KSkpIHtcbiAgICAgICAgICBvdXRwdXRFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyBkZXZpY2VzOiBvdXRwdXREZXZpY2VzLCBlbnRpdGllczogb3V0cHV0RW50aXRpZXMgfTtcbiAgICB9XG4gICk7XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3Vic2NyaWJlRXZlbnRzKSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZUV2ZW50cygpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmVFdmVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9wcFN1YnNjcmliZSgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiwgKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiwgKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZGV2aWNlUmVnaXN0cnlFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCB7IGRldmljZXMsIGVudGl0aWVzIH0gPSB0aGlzLl9nZXRFbnRpdGllc0RldmljZXMoXG4gICAgICB0aGlzLl9lbnRpdGllcyxcbiAgICAgIHRoaXMuX2RldmljZXMsXG4gICAgICB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXAsXG4gICAgICB0aGlzLl9kZXZpY2VSZWdpc3RyeUVudHJpZXNcbiAgICApO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnNjZW5lXG4gICAgICA/IGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5zY2VuZSlcbiAgICAgIDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgICA8b3BwLXRhYnMtc3VicGFnZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgLmJhY2tDYWxsYmFjaz0keygpID0+IHRoaXMuX2JhY2tUYXBwZWQoKX1cbiAgICAgICAgLnRhYnM9JHtjb25maWdTZWN0aW9ucy5hdXRvbWF0aW9ufVxuICAgICAgPlxuXG4gICAgICAke1xuICAgICAgICB0aGlzLmNyZWF0aW5nTmV3XG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5waWNrZXIuZGVsZXRlX3NjZW5lXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpkZWxldGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZVRhcHBlZH1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICB9XG5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JzXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj4ke3RoaXMuX2Vycm9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgdGhpcy5uYXJyb3dcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7bmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJyb290XCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLm9wcCksXG4gICAgICAgICAgICB9KX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcC1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj4ke25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLnNjZW5lID8gY29tcHV0ZVN0YXRlTmFtZSh0aGlzLnNjZW5lKSA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fbmFtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvb3AtY2FyZD5cbiAgICAgICAgICAgIDwvb3AtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgICAgIDxvcC1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRldmljZXMuaGVhZGVyXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgJHtkZXZpY2VzLm1hcChcbiAgICAgICAgICAgICAgICAoZGV2aWNlKSA9PlxuICAgICAgICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPG9wLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2RldmljZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5kZXZpY2VzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldmljZT0ke2RldmljZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlRGV2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgJHtkZXZpY2UuZW50aXRpZXMubWFwKChlbnRpdHlJZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLm9wcC5zdGF0ZXNbZW50aXR5SWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHlJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkZXZpY2UtZW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0ZS1iYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPG9wLWNhcmRcbiAgICAgICAgICAgICAgICAuaGVhZGVyPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGV2aWNlcy5hZGRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8b3AtZGV2aWNlLXBpY2tlclxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2RldmljZVBpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZGV2aWNlcy5hZGRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgICAgPC9vcC1jb25maWctc2VjdGlvbj5cblxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93QWR2YW5jZWRcbiAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxvcC1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICR7ZW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlcj0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMud2l0aG91dF9kZXZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2VudGl0aWVzLm1hcCgoZW50aXR5SWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLm9wcC5zdGF0ZXNbZW50aXR5SWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHlJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGV2aWNlLWVudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXRlLWJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZT1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlRW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgICAgICAgICAgIDxvcC1jYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmVudGl0aWVzLmFkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuZGV2aWNlX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eVBpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHtTQ0VORV9JR05PUkVEX0RPTUFJTlN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IuZW50aXRpZXMuYWRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L29wLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8b3AtZmFiXG4gICAgICAgICAgP2lzLXdpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgP25hcnJvdz1cIiR7dGhpcy5uYXJyb3d9XCJcbiAgICAgICAgICA/ZGlydHk9XCIke3RoaXMuX2RpcnR5fVwiXG4gICAgICAgICAgaWNvbj1cIm9wcDpjb250ZW50LXNhdmVcIlxuICAgICAgICAgIC50aXRsZT1cIiR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLnNhdmVcIil9XCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zYXZlU2NlbmV9XG4gICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLm9wcCksXG4gICAgICAgICAgfSl9XCJcbiAgICAgICAgPjwvb3AtZmFiPlxuICAgICAgPC9vcC1hcHAtbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3Qgb2xkc2NlbmUgPSBjaGFuZ2VkUHJvcHMuZ2V0KFwic2NlbmVcIikgYXMgU2NlbmVFbnRpdHk7XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwic2NlbmVcIikgJiZcbiAgICAgIHRoaXMuc2NlbmUgJiZcbiAgICAgIHRoaXMub3BwICYmXG4gICAgICAvLyBPbmx5IHJlZnJlc2ggY29uZmlnIGlmIHdlIHBpY2tlZCBhIG5ldyBzY2VuZS4gSWYgc2FtZSBJRCwgZG9uJ3QgZmV0Y2ggaXQuXG4gICAgICAoIW9sZHNjZW5lIHx8IG9sZHNjZW5lLmF0dHJpYnV0ZXMuaWQgIT09IHRoaXMuc2NlbmUuYXR0cmlidXRlcy5pZClcbiAgICApIHtcbiAgICAgIHRoaXMuX2xvYWRDb25maWcoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNyZWF0aW5nTmV3XCIpICYmIHRoaXMuY3JlYXRpbmdOZXcgJiYgdGhpcy5vcHApIHtcbiAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICBjb25zdCBpbml0RGF0YSA9IGdldFNjZW5lRWRpdG9ySW5pdERhdGEoKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NlbmUuZWRpdG9yLmRlZmF1bHRfbmFtZVwiKSxcbiAgICAgICAgZW50aXRpZXM6IHt9LFxuICAgICAgICAuLi5pbml0RGF0YSxcbiAgICAgIH07XG4gICAgICB0aGlzLl9pbml0RW50aXRpZXModGhpcy5fY29uZmlnKTtcbiAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfZW50aXR5UmVnaXN0cnlFbnRyaWVzXCIpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB0aGlzLl9lbnRpdHlSZWdpc3RyeUVudHJpZXMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFlbnRpdHkuZGV2aWNlX2lkIHx8XG4gICAgICAgICAgU0NFTkVfSUdOT1JFRF9ET01BSU5TLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVudGl0eS5kZXZpY2VfaWQgaW4gdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwKSkge1xuICAgICAgICAgIHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLmluY2x1ZGVzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5wdXNoKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLl9lbnRpdGllcy5pbmNsdWRlcyhlbnRpdHkuZW50aXR5X2lkKSAmJlxuICAgICAgICAgICF0aGlzLl9kZXZpY2VzLmluY2x1ZGVzKGVudGl0eS5kZXZpY2VfaWQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuX2RldmljZXMgPSBbLi4udGhpcy5fZGV2aWNlcywgZW50aXR5LmRldmljZV9pZF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWRDb25maWcoKSB7XG4gICAgbGV0IGNvbmZpZzogU2NlbmVDb25maWc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmZpZyA9IGF3YWl0IGdldFNjZW5lQ29uZmlnKHRoaXMub3BwLCB0aGlzLnNjZW5lIS5hdHRyaWJ1dGVzLmlkISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgZXJyLnN0YXR1c19jb2RlID09PSA0MDRcbiAgICAgICAgICA/IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IubG9hZF9lcnJvcl9ub3RfZWRpdGFibGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjZW5lLmVkaXRvci5sb2FkX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgXCJlcnJfbm9cIixcbiAgICAgICAgICAgICAgZXJyLnN0YXR1c19jb2RlXG4gICAgICAgICAgICApXG4gICAgICApO1xuICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcuZW50aXRpZXMpIHtcbiAgICAgIGNvbmZpZy5lbnRpdGllcyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRFbnRpdGllcyhjb25maWcpO1xuXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBhd2FpdCBhY3RpdmF0ZVNjZW5lKHRoaXMub3BwLCB0aGlzLnNjZW5lIS5lbnRpdHlfaWQpO1xuXG4gICAgdGhpcy5fYWN0aXZhdGVDb250ZXh0SWQgPSBjb250ZXh0LmlkO1xuXG4gICAgdGhpcy5fdW5zdWJzY3JpYmVFdmVudHMgPSBhd2FpdCB0aGlzLm9wcCEuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHM8XG4gICAgICBPcHBFdmVudFxuICAgID4oKGV2ZW50KSA9PiB0aGlzLl9zdGF0ZUNoYW5nZWQoZXZlbnQpLCBcInN0YXRlX2NoYW5nZWRcIik7XG5cbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRFbnRpdGllcyhjb25maWc6IFNjZW5lQ29uZmlnKSB7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBPYmplY3Qua2V5cyhjb25maWcuZW50aXRpZXMpO1xuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4gdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHkpKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkRW50aXR5UmVnID0gdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzLmZpbHRlcigoZW50aXR5UmVnKSA9PlxuICAgICAgdGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5UmVnLmVudGl0eV9pZClcbiAgICApO1xuICAgIHRoaXMuX2RldmljZXMgPSBbXTtcblxuICAgIGZvciAoY29uc3QgZW50aXR5UmVnIG9mIGZpbHRlcmVkRW50aXR5UmVnKSB7XG4gICAgICBpZiAoIWVudGl0eVJlZy5kZXZpY2VfaWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2RldmljZXMuaW5jbHVkZXMoZW50aXR5UmVnLmRldmljZV9pZCkpIHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IFsuLi50aGlzLl9kZXZpY2VzLCBlbnRpdHlSZWcuZGV2aWNlX2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZW50aXRpZXMuaW5jbHVkZXMoZW50aXR5SWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2VudGl0aWVzID0gWy4uLnRoaXMuX2VudGl0aWVzLCBlbnRpdHlJZF07XG4gICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRW50aXR5KGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRlbGV0ZUVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIHRoaXMuX2VudGl0aWVzID0gdGhpcy5fZW50aXRpZXMuZmlsdGVyKFxuICAgICAgKGVudGl0eUlkKSA9PiBlbnRpdHlJZCAhPT0gZGVsZXRlRW50aXR5SWRcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RldmljZVBpY2tlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCBkZXZpY2UgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgKGV2LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcbiAgICBpZiAodGhpcy5fZGV2aWNlcy5pbmNsdWRlcyhkZXZpY2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2RldmljZXMgPSBbLi4udGhpcy5fZGV2aWNlcywgZGV2aWNlXTtcbiAgICBjb25zdCBkZXZpY2VFbnRpdGllcyA9IHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtkZXZpY2VdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSBbLi4udGhpcy5fZW50aXRpZXMsIC4uLmRldmljZUVudGl0aWVzXTtcbiAgICBkZXZpY2VFbnRpdGllcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgdGhpcy5fc3RvcmVTdGF0ZShlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlRGV2aWNlKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGRldmljZUlkID0gKGV2LnRhcmdldCBhcyBhbnkpLmRldmljZTtcbiAgICB0aGlzLl9kZXZpY2VzID0gdGhpcy5fZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gZGV2aWNlICE9PSBkZXZpY2VJZCk7XG4gICAgY29uc3QgZGV2aWNlRW50aXRpZXMgPSB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZGV2aWNlSWRdO1xuICAgIGlmICghZGV2aWNlRW50aXRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZW50aXRpZXMgPSB0aGlzLl9lbnRpdGllcy5maWx0ZXIoXG4gICAgICAoZW50aXR5SWQpID0+ICFkZXZpY2VFbnRpdGllcy5pbmNsdWRlcyhlbnRpdHlJZClcbiAgICApO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8IHRoaXMuX2NvbmZpZy5uYW1lID09PSBldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnLm5hbWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGVDaGFuZ2VkKGV2ZW50OiBPcHBFdmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmNvbnRleHQuaWQgIT09IHRoaXMuX2FjdGl2YXRlQ29udGV4dElkICYmXG4gICAgICB0aGlzLl9lbnRpdGllcy5pbmNsdWRlcyhldmVudC5kYXRhLmVudGl0eV9pZClcbiAgICApIHtcbiAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9iYWNrVGFwcGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICAgIHRleHQ6IHRoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY2VuZS5lZGl0b3IudW5zYXZlZF9jb25maXJtXCJcbiAgICAgICAgKSxcbiAgICAgICAgY29uZmlybVRleHQ6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi55ZXNcIiksXG4gICAgICAgIGRpc21pc3NUZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2dvQmFjaygpLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvQmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dvQmFjaygpOiB2b2lkIHtcbiAgICBhcHBseVNjZW5lKHRoaXMub3BwLCB0aGlzLl9zdG9yZWRTdGF0ZXMpO1xuICAgIGhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlVGFwcGVkKCk6IHZvaWQge1xuICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgdGV4dDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjZW5lLnBpY2tlci5kZWxldGVfY29uZmlybVwiKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLmNvbW1vbi5ub1wiKSxcbiAgICAgIGNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZSgpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IGRlbGV0ZVNjZW5lKHRoaXMub3BwLCB0aGlzLnNjZW5lIS5hdHRyaWJ1dGVzLmlkISk7XG4gICAgYXBwbHlTY2VuZSh0aGlzLm9wcCwgdGhpcy5fc3RvcmVkU3RhdGVzKTtcbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVN0YXRlcygpOiBTY2VuZUVudGl0aWVzIHtcbiAgICBjb25zdCBvdXRwdXQ6IFNjZW5lRW50aXRpZXMgPSB7fTtcbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9nZXRDdXJyZW50U3RhdGUoZW50aXR5SWQpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIG91dHB1dFtlbnRpdHlJZF0gPSBzdGF0ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RvcmVTdGF0ZShlbnRpdHlJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGVudGl0eUlkIGluIHRoaXMuX3N0b3JlZFN0YXRlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX2dldEN1cnJlbnRTdGF0ZShlbnRpdHlJZCk7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yZWRTdGF0ZXNbZW50aXR5SWRdID0gc3RhdGU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDdXJyZW50U3RhdGUoZW50aXR5SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5vcHAuc3RhdGVzW2VudGl0eUlkXTtcbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7IC4uLnN0YXRlT2JqLmF0dHJpYnV0ZXMsIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZVNjZW5lKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGluZ05ldyA/IFwiXCIgKyBEYXRlLm5vdygpIDogdGhpcy5zY2VuZSEuYXR0cmlidXRlcy5pZCE7XG4gICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWcsIGVudGl0aWVzOiB0aGlzLl9jYWxjdWxhdGVTdGF0ZXMoKSB9O1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYXZlU2NlbmUodGhpcy5vcHAsIGlkLCB0aGlzLl9jb25maWcpO1xuICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuY3JlYXRpbmdOZXcpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvc2NlbmUvZWRpdC8ke2lkfWAsIHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3JzID0gZXJyLmJvZHkubWVzc2FnZSB8fCBlcnIubWVzc2FnZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG9wU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIG9wLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9ycyB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMsXG4gICAgICAgIC5zY3JpcHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50cmlnZ2VycyBvcC1jYXJkLFxuICAgICAgICAuc2NyaXB0IG9wLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1jYXJkIG13Yy1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLnJ0bCAuY2FyZC1tZW51IHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLW1lbnUgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgb3AtY2FyZCBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkZXIgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZS1lbnRpdHkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1ib3R0b20gMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIG9wLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYltuYXJyb3ddIHtcbiAgICAgICAgICBib3R0b206IDg0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE0MHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWZhYltkaXJ0eV0ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1mYWIucnRsIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgb3AtZmFiW2lzLXdpZGVdLnJ0bCB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3Atc2NlbmUtZWRpdG9yXCI6IE9wU2NlbmVFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQWFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFJQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBRUE7QUFNQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBRkE7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOzs7QUE5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7QUFNQTs7Ozs7O0FBTUE7O0FBSUE7OztBQUlBOzs7QUFKQTs7O0FBY0E7O0FBRUE7QUFHQTs7O0FBR0E7Ozs7QUFJQTs7O0FBT0E7O0FBSUE7O0FBRUE7O0FBR0E7O0FBSEE7Ozs7QUE3QkE7Ozs7O0FBK0NBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQTFGQTtBQStGQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU9BO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2REE7OztBQXBMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEzREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwRUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBL0VBO0FBQUE7QUFBQTtBQUFBO0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7OztBQUtBOztBQUlBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFPQTtBQUVBO0FBRkE7OztBQVFBO0FBQ0E7QUFEQTs7QUFJQTtBQUVBO0FBRUE7QUFGQTs7QUFPQTs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7OztBQVFBOztBQUVBOzs7QUFLQTs7O0FBS0E7OztBQUtBOzs7QUFHQTtBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTs7OztBQUlBOzs7O0FBSUE7OztBQVhBO0FBZUE7O0FBbkNBO0FBQ0E7O0FBd0NBOzs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7QUFTQTtBQUVBOztBQUVBOzs7QUFLQTs7QUFJQTs7O0FBSUE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7QUFHQTs7O0FBbkJBO0FBdUJBOztBQXBDQTtBQUNBOztBQXlDQTs7O0FBS0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBbkVBOzs7QUErRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQWpPQTtBQXVPQTtBQXRVQTtBQUFBO0FBQUE7QUFBQTtBQXlVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN1hBO0FBQUE7QUFBQTtBQUFBO0FBZ1lBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFsWUE7QUFBQTtBQUFBO0FBQUE7QUFxWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBeGFBO0FBQUE7QUFBQTtBQUFBO0FBMmFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNiQTtBQUFBO0FBQUE7QUFBQTtBQThiQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQXRjQTtBQUFBO0FBQUE7QUFBQTtBQXljQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBL2NBO0FBQUE7QUFBQTtBQUFBO0FBa2RBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqZUE7QUFBQTtBQUFBO0FBQUE7QUFvZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQTllQTtBQUFBO0FBQUE7QUFBQTtBQWlmQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXRmQTtBQUFBO0FBQUE7QUFBQTtBQXlmQTtBQUlBO0FBQ0E7QUFDQTtBQS9mQTtBQUFBO0FBQUE7QUFBQTtBQWtnQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQTlnQkE7QUFBQTtBQUFBO0FBQUE7QUFpaEJBO0FBQ0E7QUFDQTtBQW5oQkE7QUFBQTtBQUFBO0FBQUE7QUFzaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBNWhCQTtBQUFBO0FBQUE7QUFBQTtBQStoQkE7QUFDQTtBQUNBO0FBQ0E7QUFsaUJBO0FBQUE7QUFBQTtBQUFBO0FBcWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE3aUJBO0FBQUE7QUFBQTtBQUFBO0FBZ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF4akJBO0FBQUE7QUFBQTtBQUFBO0FBMmpCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWhrQkE7QUFBQTtBQUFBO0FBQUE7QUFta0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFobEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEZBO0FBN3FCQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==