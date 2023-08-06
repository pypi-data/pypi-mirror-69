(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-sensor-card-editor"],{

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

/***/ "./src/panels/devcon/editor/config-elements/config-elements-style.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/config-elements-style.ts ***!
  \***************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    op-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;

/***/ }),

/***/ "./src/panels/devcon/editor/config-elements/hui-sensor-card-editor.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-sensor-card-editor.ts ***!
  \****************************************************************************/
/*! exports provided: HuiSensorCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiSensorCardEditor", function() { return HuiSensorCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_entity_op_entity_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/entity/op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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











const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_7__["struct"])({
  type: "string",
  entity: "string?",
  name: "string?",
  icon: "string?",
  graph: "string?",
  unit: "string?",
  detail: "number?",
  theme: "string?",
  hours_to_show: "number?"
});
let HuiSensorCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-sensor-card-editor")], function (_initialize, _LitElement) {
  class HuiSensorCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiSensorCardEditor,
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
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
      }
    }, {
      kind: "get",
      key: "_entity",
      value: function _entity() {
        return this._config.entity || "";
      }
    }, {
      kind: "get",
      key: "_name",
      value: function _name() {
        return this._config.name || "";
      }
    }, {
      kind: "get",
      key: "_icon",
      value: function _icon() {
        return this._config.icon || "";
      }
    }, {
      kind: "get",
      key: "_graph",
      value: function _graph() {
        return this._config.graph || "none";
      }
    }, {
      kind: "get",
      key: "_unit",
      value: function _unit() {
        return this._config.unit || "";
      }
    }, {
      kind: "get",
      key: "_detail",
      value: function _detail() {
        return this._config.number || "1";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "default";
      }
    }, {
      kind: "get",
      key: "_hours_to_show",
      value: function _hours_to_show() {
        return this._config.hours_to_show || "24";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const graphs = ["line", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_9__["configElementStyle"]}
      <div class="card-config">
        <op-entity-picker
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.entity")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
          .opp="${this.opp}"
          .value="${this._entity}"
          .configValue=${"entity"}
          include-domains='["sensor"]'
          @change="${this._valueChanged}"
          allow-custom-entity
        ></op-entity-picker>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.name")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._name}"
          .configValue="${"name"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <div class="side-by-side">
          <paper-input
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.icon")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .value="${this._icon}"
            .configValue="${"icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-dropdown-menu
            .label="${this.opp.localize("ui.panel.devcon.editor.card.sensor.graph_type")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .configValue="${"graph"}"
            @value-changed="${this._valueChanged}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${graphs.indexOf(this._graph)}"
            >
              ${graphs.map(graph => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-item>${graph}</paper-item>
                `;
        })}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div class="side-by-side">
          <paper-input
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.unit")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .value="${this._unit}"
            .configValue="${"unit"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            .label="${this.opp.localize("ui.panel.devcon.editor.card.sensor.graph_detail")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            type="number"
            .value="${this._detail}"
            .configValue="${"detail"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <div class="side-by-side">
          <hui-theme-select-editor
            .opp="${this.opp}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
          <paper-input
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.hours_to_show")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            type="number"
            .value="${this._hours_to_show}"
            .configValue="${"hours_to_show"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
      </div>
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

        if (this[`_${target.configValue}`] === target.value) {
          return;
        }

        if (target.configValue) {
          if (target.value === "" || target.type === "number" && isNaN(Number(target.value))) {
            delete this._config[target.configValue];
          } else {
            let value = target.value;

            if (target.type === "number") {
              value = Number(value);
            }

            this._config = Object.assign({}, this._config, {
              [target.configValue]: value
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXNlbnNvci1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2NvbmZpZy1lbGVtZW50cy1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1zZW5zb3ItY2FyZC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRW50aXR5SWQodmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdkb21haW4uZW50aXR5J1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbih2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnbWRpOmljb24nXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBzdXBlcnN0cnVjdCB9IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgaXNFbnRpdHlJZCB9IGZyb20gXCIuL2lzLWVudGl0eS1pZFwiO1xuaW1wb3J0IHsgaXNJY29uIH0gZnJvbSBcIi4vaXMtaWNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gc3VwZXJzdHJ1Y3Qoe1xuICB0eXBlczoge1xuICAgIFwiZW50aXR5LWlkXCI6IGlzRW50aXR5SWQsXG4gICAgaWNvbjogaXNJY29uLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnRWxlbWVudFN0eWxlID0gaHRtbGBcclxuICA8c3R5bGU+XHJcbiAgICBvcC1zd2l0Y2gge1xyXG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgICAuc2lkZS1ieS1zaWRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgLnN1ZmZpeCB7XHJcbiAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuYDtcclxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L29wLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHsgRW50aXRpZXNFZGl0b3JFdmVudCwgRWRpdG9yVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZjb25DYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdFbGVtZW50U3R5bGUgfSBmcm9tIFwiLi9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcbmltcG9ydCB7IFNlbnNvckNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGVudGl0eTogXCJzdHJpbmc/XCIsXG4gIG5hbWU6IFwic3RyaW5nP1wiLFxuICBpY29uOiBcInN0cmluZz9cIixcbiAgZ3JhcGg6IFwic3RyaW5nP1wiLFxuICB1bml0OiBcInN0cmluZz9cIixcbiAgZGV0YWlsOiBcIm51bWJlcj9cIixcbiAgdGhlbWU6IFwic3RyaW5nP1wiLFxuICBob3Vyc190b19zaG93OiBcIm51bWJlcj9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1zZW5zb3ItY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlTZW5zb3JDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIERldmNvbkNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwPzogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBTZW5zb3JDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBTZW5zb3JDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uZmlnID0gY2FyZENvbmZpZ1N0cnVjdChjb25maWcpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBfZW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZW50aXR5IHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX25hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5uYW1lIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2ljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2dyYXBoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZ3JhcGggfHwgXCJub25lXCI7XG4gIH1cblxuICBnZXQgX3VuaXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS51bml0IHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2RldGFpbCgpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm51bWJlciB8fCBcIjFcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50aGVtZSB8fCBcImRlZmF1bHRcIjtcbiAgfVxuXG4gIGdldCBfaG91cnNfdG9fc2hvdygpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmhvdXJzX3RvX3Nob3cgfHwgXCIyNFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBncmFwaHMgPSBbXCJsaW5lXCIsIFwibm9uZVwiXTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPG9wLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5lbnRpdHlcIlxuICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9lbnRpdHl9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgIGluY2x1ZGUtZG9tYWlucz0nW1wic2Vuc29yXCJdJ1xuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuaWNvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2ljb259XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJpY29uXCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuc2Vuc29yLmdyYXBoX3R5cGVcIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImdyYXBoXCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIC5zZWxlY3RlZD1cIiR7Z3JhcGhzLmluZGV4T2YodGhpcy5fZ3JhcGgpfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7Z3JhcGhzLm1hcCgoZ3JhcGgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7Z3JhcGh9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMudW5pdFwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3VuaXR9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ1bml0XCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLnNlbnNvci5ncmFwaF9kZXRhaWxcIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2RldGFpbH1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImRldGFpbFwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPGh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aGVtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICAgIEB0aGVtZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuaG91cnNfdG9fc2hvd1wiXG4gICAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5faG91cnNfdG9fc2hvd31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvdXJzX3RvX3Nob3dcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5vcHApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAodGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgKHRhcmdldC50eXBlID09PSBcIm51bWJlclwiICYmIGlzTmFOKE51bWJlcih0YXJnZXQudmFsdWUpKSlcbiAgICAgICkge1xuICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3RhcmdldC5jb25maWdWYWx1ZSFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIGlmICh0YXJnZXQudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZywgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB2YWx1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktc2Vuc29yLWNhcmQtZWRpdG9yXCI6IEh1aVNlbnNvckNhcmRFZGl0b3I7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQXJDQTtBQUFBO0FBQUE7QUFBQTtBQXdDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQUFBO0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7OztBQU1BO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQU1BO0FBQ0E7QUFDQTs7OztBQWpHQTtBQXNHQTtBQXhKQTtBQUFBO0FBQUE7QUFBQTtBQTJKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFsTEE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=