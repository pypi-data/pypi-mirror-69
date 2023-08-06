(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-button-card-editor"],{

/***/ "./src/panels/devcon/editor/config-elements/hui-button-card-editor.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-button-card-editor.ts ***!
  \****************************************************************************/
/*! exports provided: HuiButtonCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiButtonCardEditor", function() { return HuiButtonCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/devcon/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/devcon/components/hui-entity-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./src/panels/devcon/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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










const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"])({
  type: "string",
  entity: "string?",
  name: "string?",
  show_name: "boolean?",
  icon: "string?",
  show_icon: "boolean?",
  icon_height: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_6__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_6__["actionConfigStruct"]),
  theme: "string?"
});
let HuiButtonCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-button-card-editor")], function (_initialize, _LitElement) {
  class HuiButtonCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiButtonCardEditor,
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
      key: "_show_name",
      value: function _show_name() {
        return this._config.show_name || true;
      }
    }, {
      kind: "get",
      key: "_icon",
      value: function _icon() {
        return this._config.icon || "";
      }
    }, {
      kind: "get",
      key: "_show_icon",
      value: function _show_icon() {
        return this._config.show_icon || true;
      }
    }, {
      kind: "get",
      key: "_icon_height",
      value: function _icon_height() {
        return this._config.icon_height && this._config.icon_height.includes("px") ? String(parseFloat(this._config.icon_height)) : "";
      }
    }, {
      kind: "get",
      key: "_tap_action",
      value: function _tap_action() {
        return this._config.tap_action || {
          action: "more-info"
        };
      }
    }, {
      kind: "get",
      key: "_hold_action",
      value: function _hold_action() {
        return this._config.hold_action || {
          action: "none"
        };
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "default";
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const actions = ["more-info", "toggle", "navigate", "url", "call-service", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_8__["configElementStyle"]}
      <div class="card-config">
        <op-entity-picker
        .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.entity")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .opp="${this.opp}"
          .value="${this._entity}"
          .configValue=${"entity"}
          @change="${this._valueChanged}"
          allow-custom-entity
        ></op-entity-picker>
        <div class="side-by-side">
          <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.name")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.icon")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .value="${this._icon}"
            .configValue="${"icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <div class="side-by-side">
          <op-switch
            .checked="${this._config.show_name !== false}"
            .configValue="${"show_name"}"
            @change="${this._valueChanged}"
            >${this.opp.localize("ui.panel.devcon.editor.card.generic.show_name")}</op-switch
          >
          <op-switch
            .checked="${this._config.show_icon !== false}"
            .configValue="${"show_icon"}"
            @change="${this._valueChanged}"
            >${this.opp.localize("ui.panel.devcon.editor.card.generic.show_icon")}</op-switch
          >
        </div>
        <div class="side-by-side">
          <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.icon_height")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .value="${this._icon_height}"
            .configValue="${"icon_height"}"
            @value-changed="${this._valueChanged}"
            type="number"
          ><div class="suffix" slot="suffix">px</div>
          </paper-input>
          <hui-theme-select-editor
            .opp="${this.opp}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
        </paper-input>

        </div>
        <div class="side-by-side">
          <hui-action-editor
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.tap_action")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .opp="${this.opp}"
            .config="${this._tap_action}"
            .actions="${actions}"
            .configValue="${"tap_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
          <hui-action-editor
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.hold_action")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .opp="${this.opp}"
            .config="${this._hold_action}"
            .actions="${actions}"
            .configValue="${"hold_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
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

        if (this[`_${target.configValue}`] === target.value || this[`_${target.configValue}`] === target.config) {
          return;
        }

        if (target.configValue) {
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            let newValue;

            if (target.configValue === "icon_height" && !isNaN(Number(target.value))) {
              newValue = `${String(target.value)}px`;
            }

            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.checked !== undefined ? target.checked : newValue !== undefined ? newValue : target.value ? target.value : target.config
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWJ1dHRvbi1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuXG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQge1xuICBFbnRpdGllc0VkaXRvckV2ZW50LFxuICBFZGl0b3JUYXJnZXQsXG4gIGFjdGlvbkNvbmZpZ1N0cnVjdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEZXZjb25DYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdFbGVtZW50U3R5bGUgfSBmcm9tIFwiLi9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcbmltcG9ydCB7IEFjdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmNvblwiO1xuaW1wb3J0IHsgQnV0dG9uQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgZW50aXR5OiBcInN0cmluZz9cIixcbiAgbmFtZTogXCJzdHJpbmc/XCIsXG4gIHNob3dfbmFtZTogXCJib29sZWFuP1wiLFxuICBpY29uOiBcInN0cmluZz9cIixcbiAgc2hvd19pY29uOiBcImJvb2xlYW4/XCIsXG4gIGljb25faGVpZ2h0OiBcInN0cmluZz9cIixcbiAgdGFwX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIGhvbGRfYWN0aW9uOiBzdHJ1Y3Qub3B0aW9uYWwoYWN0aW9uQ29uZmlnU3RydWN0KSxcbiAgdGhlbWU6IFwic3RyaW5nP1wiLFxufSk7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUJ1dHRvbkNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgRGV2Y29uQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IEJ1dHRvbkNhcmRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEJ1dHRvbkNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfc2hvd19uYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnNob3dfbmFtZSB8fCB0cnVlO1xuICB9XG5cbiAgZ2V0IF9pY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaWNvbiB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zaG93X2ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19pY29uIHx8IHRydWU7XG4gIH1cblxuICBnZXQgX2ljb25faGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaWNvbl9oZWlnaHQgJiYgdGhpcy5fY29uZmlnIS5pY29uX2hlaWdodC5pbmNsdWRlcyhcInB4XCIpXG4gICAgICA/IFN0cmluZyhwYXJzZUZsb2F0KHRoaXMuX2NvbmZpZyEuaWNvbl9oZWlnaHQpKVxuICAgICAgOiBcIlwiO1xuICB9XG5cbiAgZ2V0IF90YXBfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGFwX2FjdGlvbiB8fCB7IGFjdGlvbjogXCJtb3JlLWluZm9cIiB9O1xuICB9XG5cbiAgZ2V0IF9ob2xkX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmhvbGRfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICB9XG5cbiAgZ2V0IF90aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRoZW1lIHx8IFwiZGVmYXVsdFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgXCJtb3JlLWluZm9cIixcbiAgICAgIFwidG9nZ2xlXCIsXG4gICAgICBcIm5hdmlnYXRlXCIsXG4gICAgICBcInVybFwiLFxuICAgICAgXCJjYWxsLXNlcnZpY2VcIixcbiAgICAgIFwibm9uZVwiLFxuICAgIF07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y29uZmlnRWxlbWVudFN0eWxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5lbnRpdHlcIlxuICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgKX0pXCJcbiAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJlbnRpdHlcIn1cbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L29wLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5uYW1lXCJcbiAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgKX0pXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmFtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pY29ufVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaWNvblwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPG9wLXN3aXRjaFxuICAgICAgICAgICAgLmNoZWNrZWQ9XCIke3RoaXMuX2NvbmZpZyEuc2hvd19uYW1lICE9PSBmYWxzZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInNob3dfbmFtZVwifVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLnNob3dfbmFtZVwiXG4gICAgICAgICAgICApfTwvb3Atc3dpdGNoXG4gICAgICAgICAgPlxuICAgICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPVwiJHt0aGlzLl9jb25maWchLnNob3dfaWNvbiAhPT0gZmFsc2V9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzaG93X2ljb25cIn1cIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5zaG93X2ljb25cIlxuICAgICAgICAgICAgKX08L29wLXN3aXRjaFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5pY29uX2hlaWdodFwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICl9KVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2ljb25faGVpZ2h0fVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaWNvbl9oZWlnaHRcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgPjxkaXYgY2xhc3M9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+cHg8L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdGhlbWV9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aGVtZVwifVwiXG4gICAgICAgICAgICBAdGhlbWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3I+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy50YXBfYWN0aW9uXCJcbiAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgKX0pXCJcbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl90YXBfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRhcF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5ob2xkX2FjdGlvblwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICl9KVwiXG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5faG9sZF9hY3Rpb259XCJcbiAgICAgICAgICAgIC5hY3Rpb25zPVwiJHthY3Rpb25zfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaG9sZF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuXG4gICAgaWYgKFxuICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUgfHxcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LmNvbmZpZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhcmdldC5jb25maWdWYWx1ZSA9PT0gXCJpY29uX2hlaWdodFwiICYmXG4gICAgICAgICAgIWlzTmFOKE51bWJlcih0YXJnZXQudmFsdWUpKVxuICAgICAgICApIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGAke1N0cmluZyh0YXJnZXQudmFsdWUpfXB4YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTpcbiAgICAgICAgICAgIHRhcmdldC5jaGVja2VkICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyB0YXJnZXQuY2hlY2tlZFxuICAgICAgICAgICAgICA6IG5ld1ZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXdWYWx1ZVxuICAgICAgICAgICAgICA6IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICA/IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICA6IHRhcmdldC5jb25maWcsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1idXR0b24tY2FyZC1lZGl0b3JcIjogSHVpQnV0dG9uQ2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBR0E7QUFuQ0E7QUFBQTtBQUFBO0FBQUE7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBQUE7QUEwQ0E7QUFBQTtBQUFBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBQUE7QUE4Q0E7QUFDQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQU9BO0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFwR0E7QUF5R0E7QUF4S0E7QUFBQTtBQUFBO0FBQUE7QUEyS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBL01BO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9