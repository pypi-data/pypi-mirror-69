(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-entities-card-editor"],{

/***/ "./src/panels/devcon/common/structs/is-entity-id.ts":
/*!**********************************************************!*\
  !*** ./src/panels/devcon/common/structs/is-entity-id.ts ***!
  \**********************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/devcon/common/structs/is-icon.ts":
/*!*****************************************************!*\
  !*** ./src/panels/devcon/common/structs/is-icon.ts ***!
  \*****************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/devcon/common/structs/struct.ts":
/*!****************************************************!*\
  !*** ./src/panels/devcon/common/structs/struct.ts ***!
  \****************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/devcon/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/devcon/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/devcon/editor/config-elements/hui-entities-card-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-entities-card-editor.ts ***!
  \******************************************************************************/
/*! exports provided: HuiEntitiesCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEntitiesCardEditor", function() { return HuiEntitiesCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/devcon/components/hui-entity-editor.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/devcon/editor/process-editor-entities.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types */ "./src/panels/devcon/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
/* harmony import */ var _header_footer_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../header-footer/types */ "./src/panels/devcon/header-footer/types.ts");
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

















const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_11__["struct"])({
  type: "string",
  title: "string|number?",
  theme: "string?",
  show_header_toggle: "boolean?",
  entities: [_types__WEBPACK_IMPORTED_MODULE_12__["entitiesConfigStruct"]],
  header: _common_structs_struct__WEBPACK_IMPORTED_MODULE_11__["struct"].optional(_header_footer_types__WEBPACK_IMPORTED_MODULE_15__["headerFooterConfigStructs"]),
  footer: _common_structs_struct__WEBPACK_IMPORTED_MODULE_11__["struct"].optional(_header_footer_types__WEBPACK_IMPORTED_MODULE_15__["headerFooterConfigStructs"])
});
let HuiEntitiesCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-entities-card-editor")], function (_initialize, _LitElement) {
  class HuiEntitiesCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiEntitiesCardEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_config",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_configEntities",
      value: void 0
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
        this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_10__["processEditorEntities"])(config.entities);
      }
    }, {
      kind: "get",
      key: "_title",
      value: function _title() {
        return this._config.title || "";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "Backend-selected";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_14__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.title")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._title}"
          .configValue="${"title"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <hui-theme-select-editor
          .opp="${this.opp}"
          .value="${this._theme}"
          .configValue="${"theme"}"
          @theme-changed="${this._valueChanged}"
        ></hui-theme-select-editor>
        <op-switch
          .checked="${this._config.show_header_toggle !== false}"
          .configValue="${"show_header_toggle"}"
          @change="${this._valueChanged}"
          >${this.opp.localize("ui.panel.devcon.editor.card.entities.show_header_toggle")}</op-switch
        >
      </div>
      <hui-entity-editor
        .opp="${this.opp}"
        .entities="${this._configEntities}"
        @entities-changed="${this._valueChanged}"
      ></hui-entity-editor>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.opp) {
          return;
        }

        const target = ev.target;

        if (target.configValue === "title" && target.value === this._title || target.configValue === "theme" && target.value === this._theme) {
          return;
        }

        if (ev.detail && ev.detail.entities) {
          this._config.entities = ev.detail.entities;
          this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_10__["processEditorEntities"])(this._config.entities);
        } else if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.checked !== undefined ? target.checked : target.value
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/devcon/editor/types.ts":
/*!*******************************************!*\
  !*** ./src/panels/devcon/editor/types.ts ***!
  \*******************************************/
/*! exports provided: actionConfigStruct, entitiesConfigStruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionConfigStruct", function() { return actionConfigStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesConfigStruct", function() { return entitiesConfigStruct; });
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");

const actionConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"])({
  action: "string",
  navigation_path: "string?",
  url_path: "string?",
  service: "string?",
  service_data: "object?"
});
const entitiesConfigStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].union([{
  entity: "entity-id",
  name: "string?",
  icon: "icon?"
}, "entity-id"]);

/***/ }),

/***/ "./src/panels/devcon/header-footer/types.ts":
/*!**************************************************!*\
  !*** ./src/panels/devcon/header-footer/types.ts ***!
  \**************************************************/
/*! exports provided: pictureHeaderFooterConfigStruct, buttonsHeaderFooterConfigStruct, headerFooterConfigStructs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pictureHeaderFooterConfigStruct", function() { return pictureHeaderFooterConfigStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonsHeaderFooterConfigStruct", function() { return buttonsHeaderFooterConfigStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerFooterConfigStructs", function() { return headerFooterConfigStructs; });
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _editor_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor/types */ "./src/panels/devcon/editor/types.ts");


const pictureHeaderFooterConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"])({
  type: "string",
  image: "string",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].optional(_editor_types__WEBPACK_IMPORTED_MODULE_1__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].optional(_editor_types__WEBPACK_IMPORTED_MODULE_1__["actionConfigStruct"]),
  double_tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].optional(_editor_types__WEBPACK_IMPORTED_MODULE_1__["actionConfigStruct"])
});
const buttonsHeaderFooterConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"])({
  type: "string",
  entities: [_editor_types__WEBPACK_IMPORTED_MODULE_1__["entitiesConfigStruct"]]
});
const headerFooterConfigStructs = _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].union([pictureHeaderFooterConfigStruct, buttonsHeaderFooterConfigStruct]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvaXMtZW50aXR5LWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9oZWFkZXItZm9vdGVyL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWVudGl0eS1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBwcm9jZXNzRWRpdG9yRW50aXRpZXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy1lZGl0b3ItZW50aXRpZXNcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7XG4gIEVudGl0aWVzRWRpdG9yRXZlbnQsXG4gIEVkaXRvclRhcmdldCxcbiAgZW50aXRpZXNDb25maWdTdHJ1Y3QsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2Y29uQ2FyZEVkaXRvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4vY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5pbXBvcnQge1xuICBFbnRpdGllc0NhcmRDb25maWcsXG4gIEVudGl0aWVzQ2FyZEVudGl0eUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5pbXBvcnQgeyBoZWFkZXJGb290ZXJDb25maWdTdHJ1Y3RzIH0gZnJvbSBcIi4uLy4uL2hlYWRlci1mb290ZXIvdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIHRpdGxlOiBcInN0cmluZ3xudW1iZXI/XCIsXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbiAgc2hvd19oZWFkZXJfdG9nZ2xlOiBcImJvb2xlYW4/XCIsXG4gIGVudGl0aWVzOiBbZW50aXRpZXNDb25maWdTdHJ1Y3RdLFxuICBoZWFkZXI6IHN0cnVjdC5vcHRpb25hbChoZWFkZXJGb290ZXJDb25maWdTdHJ1Y3RzKSxcbiAgZm9vdGVyOiBzdHJ1Y3Qub3B0aW9uYWwoaGVhZGVyRm9vdGVyQ29uZmlnU3RydWN0cyksXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZW50aXRpZXMtY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlFbnRpdGllc0NhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgRGV2Y29uQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEVudGl0aWVzQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbnRpdGllcz86IEVudGl0aWVzQ2FyZEVudGl0eUNvbmZpZ1tdO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBFbnRpdGllc0NhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2NvbmZpZ0VudGl0aWVzID0gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGNvbmZpZy5lbnRpdGllcyk7XG4gIH1cblxuICBnZXQgX3RpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGl0bGUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50aGVtZSB8fCBcIkJhY2tlbmQtc2VsZWN0ZWRcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5vcHApIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy50aXRsZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aXRsZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aXRsZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPGh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXG4gICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3RoZW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICBAdGhlbWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgICA8b3Atc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9XCIke3RoaXMuX2NvbmZpZyEuc2hvd19oZWFkZXJfdG9nZ2xlICE9PSBmYWxzZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzaG93X2hlYWRlcl90b2dnbGVcIn1cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZW50aXRpZXMuc2hvd19oZWFkZXJfdG9nZ2xlXCJcbiAgICAgICAgICApfTwvb3Atc3dpdGNoXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGh1aS1lbnRpdHktZWRpdG9yXG4gICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgIC5lbnRpdGllcz1cIiR7dGhpcy5fY29uZmlnRW50aXRpZXN9XCJcbiAgICAgICAgQGVudGl0aWVzLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgPjwvaHVpLWVudGl0eS1lZGl0b3I+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuXG4gICAgaWYgKFxuICAgICAgKHRhcmdldC5jb25maWdWYWx1ZSEgPT09IFwidGl0bGVcIiAmJiB0YXJnZXQudmFsdWUgPT09IHRoaXMuX3RpdGxlKSB8fFxuICAgICAgKHRhcmdldC5jb25maWdWYWx1ZSEgPT09IFwidGhlbWVcIiAmJiB0YXJnZXQudmFsdWUgPT09IHRoaXMuX3RoZW1lKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldi5kZXRhaWwgJiYgZXYuZGV0YWlsLmVudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jb25maWcuZW50aXRpZXMgPSBldi5kZXRhaWwuZW50aXRpZXM7XG4gICAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyh0aGlzLl9jb25maWcuZW50aXRpZXMpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWVdOlxuICAgICAgICAgICAgdGFyZ2V0LmNoZWNrZWQgIT09IHVuZGVmaW5lZCA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lbnRpdGllcy1jYXJkLWVkaXRvclwiOiBIdWlFbnRpdGllc0NhcmRFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERldmNvbkNhcmRDb25maWcsXG4gIERldmNvblZpZXdDb25maWcsXG4gIEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcbmltcG9ydCB7IElucHV0VHlwZSB9IGZyb20gXCJ6bGliXCI7XG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWWFtbENoYW5nZWRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgeWFtbDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdFZGl0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGNvbmZpZzogRGV2Y29uVmlld0NvbmZpZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdWYWx1ZSB7XG4gIGZvcm1hdDogXCJqc29uXCIgfCBcInlhbWxcIjtcbiAgdmFsdWU/OiBzdHJpbmcgfCBEZXZjb25DYXJkQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Vycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXRpZXNFZGl0b3JFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGNvbmZpZ1ZhbHVlPzogc3RyaW5nO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICBjb25maWc6IEFjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGlja1RhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgYWN0aW9uOiBcInN0cmluZ1wiLFxuICBuYXZpZ2F0aW9uX3BhdGg6IFwic3RyaW5nP1wiLFxuICB1cmxfcGF0aDogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2U6IFwic3RyaW5nP1wiLFxuICBzZXJ2aWNlX2RhdGE6IFwib2JqZWN0P1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbmZpZ1N0cnVjdCA9IHN0cnVjdC51bmlvbihbXG4gIHtcbiAgICBlbnRpdHk6IFwiZW50aXR5LWlkXCIsXG4gICAgbmFtZTogXCJzdHJpbmc/XCIsXG4gICAgaWNvbjogXCJpY29uP1wiLFxuICB9LFxuICBcImVudGl0eS1pZFwiLFxuXSk7XG4iLCJpbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9kZXZjb25cIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7IGFjdGlvbkNvbmZpZ1N0cnVjdCwgZW50aXRpZXNDb25maWdTdHJ1Y3QgfSBmcm9tIFwiLi4vZWRpdG9yL3R5cGVzXCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZjb25IZWFkZXJGb290ZXJDb25maWcge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uc0hlYWRlckZvb3RlckNvbmZpZyBleHRlbmRzIERldmNvbkhlYWRlckZvb3RlckNvbmZpZyB7XG4gIGVudGl0aWVzOiBBcnJheTxzdHJpbmcgfCBFbnRpdHlDb25maWc+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBpY3R1cmVIZWFkZXJGb290ZXJDb25maWcgZXh0ZW5kcyBEZXZjb25IZWFkZXJGb290ZXJDb25maWcge1xuICBpbWFnZTogc3RyaW5nO1xuICB0YXBfYWN0aW9uPzogQWN0aW9uQ29uZmlnO1xuICBob2xkX2FjdGlvbj86IEFjdGlvbkNvbmZpZztcbiAgZG91YmxlX3RhcF9hY3Rpb24/OiBBY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBjb25zdCBwaWN0dXJlSGVhZGVyRm9vdGVyQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgaW1hZ2U6IFwic3RyaW5nXCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIGRvdWJsZV90YXBfYWN0aW9uOiBzdHJ1Y3Qub3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uc0hlYWRlckZvb3RlckNvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGVudGl0aWVzOiBbZW50aXRpZXNDb25maWdTdHJ1Y3RdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJGb290ZXJDb25maWdTdHJ1Y3RzID0gc3RydWN0LnVuaW9uKFtcbiAgcGljdHVyZUhlYWRlckZvb3RlckNvbmZpZ1N0cnVjdCxcbiAgYnV0dG9uc0hlYWRlckZvb3RlckNvbmZpZ1N0cnVjdCxcbl0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU1BO0FBQ0E7QUFDQTs7QUEvQkE7QUFrQ0E7QUE3REE7QUFBQTtBQUFBO0FBQUE7QUFnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==