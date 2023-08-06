(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-entity-card-editor"],{

/***/ "./src/panels/devcon/editor/config-elements/hui-picture-entity-card-editor.ts":
/*!************************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-picture-entity-card-editor.ts ***!
  \************************************************************************************/
/*! exports provided: HuiPictureEntityCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureEntityCardEditor", function() { return HuiPictureEntityCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/devcon/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/devcon/components/hui-entity-editor.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types */ "./src/panels/devcon/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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














const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"])({
  type: "string",
  entity: "string",
  image: "string?",
  name: "string?",
  camera_image: "string?",
  camera_view: "string?",
  aspect_ratio: "string?",
  tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_10__["actionConfigStruct"]),
  hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_10__["actionConfigStruct"]),
  show_name: "boolean?",
  show_state: "boolean?",
  theme: "string?"
});
let HuiPictureEntityCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-picture-entity-card-editor")], function (_initialize, _LitElement) {
  class HuiPictureEntityCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPictureEntityCardEditor,
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
      key: "_image",
      value: function _image() {
        return this._config.image || "";
      }
    }, {
      kind: "get",
      key: "_camera_image",
      value: function _camera_image() {
        return this._config.camera_image || "";
      }
    }, {
      kind: "get",
      key: "_camera_view",
      value: function _camera_view() {
        return this._config.camera_view || "auto";
      }
    }, {
      kind: "get",
      key: "_aspect_ratio",
      value: function _aspect_ratio() {
        return this._config.aspect_ratio || "50";
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
          action: "more-info"
        };
      }
    }, {
      kind: "get",
      key: "_show_name",
      value: function _show_name() {
        return this._config.show_name || true;
      }
    }, {
      kind: "get",
      key: "_show_state",
      value: function _show_state() {
        return this._config.show_state || true;
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

        const actions = ["more-info", "toggle", "navigate", "call-service", "none"];
        const views = ["auto", "live"];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_12__["configElementStyle"]}
      <div class="card-config">
        <op-entity-picker
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.entity")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
          .opp="${this.opp}"
          .value="${this._entity}"
          .configValue=${"entity"}
          @change="${this._valueChanged}"
          allow-custom-entity
        ></op-entity-picker>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.name")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._name}"
          .configValue="${"name"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.image")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._image}"
          .configValue="${"image"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <op-entity-picker
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.camera_image")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .opp="${this.opp}"
          .value="${this._camera_image}"
          .configValue=${"camera_image"}
          @change="${this._valueChanged}"
          include-domains='["camera"]'
          allow-custom-entity
        ></op-entity-picker>
        <div class="side-by-side">
          <paper-dropdown-menu
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.camera_view")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            .configValue="${"camera_view"}"
            @value-changed="${this._valueChanged}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${views.indexOf(this._camera_view)}"
            >
              ${views.map(view => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-item>${view}</paper-item>
                `;
        })}
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-input
            .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.aspect_ratio")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
            type="number"
            .value="${Number(this._aspect_ratio.replace("%", ""))}"
            .configValue="${"aspect_ratio"}"
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
            .checked="${this._config.show_state !== false}"
            .configValue="${"show_state"}"
            @change="${this._valueChanged}"
            >${this.opp.localize("ui.panel.devcon.editor.card.generic.show_state")}</op-switch
          >
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
          <hui-theme-select-editor
            .opp="${this.opp}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
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
        let value = target.value;

        if (target.configValue === "aspect_ratio" && target.value) {
          value += "%";
        }

        if (this[`_${target.configValue}`] === value || this[`_${target.configValue}`] === target.config) {
          return;
        }

        if (target.configValue) {
          if (value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.checked !== undefined ? target.checked : value ? value : target.config
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtZW50aXR5LWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktcGljdHVyZS1lbnRpdHktY2FyZC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWFjdGlvbi1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWVudGl0eS1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3Atc3dpdGNoXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7XG4gIEVudGl0aWVzRWRpdG9yRXZlbnQsXG4gIEVkaXRvclRhcmdldCxcbiAgYWN0aW9uQ29uZmlnU3RydWN0LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2Y29uXCI7XG5pbXBvcnQgeyBQaWN0dXJlRW50aXR5Q2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgZW50aXR5OiBcInN0cmluZ1wiLFxuICBpbWFnZTogXCJzdHJpbmc/XCIsXG4gIG5hbWU6IFwic3RyaW5nP1wiLFxuICBjYW1lcmFfaW1hZ2U6IFwic3RyaW5nP1wiLFxuICBjYW1lcmFfdmlldzogXCJzdHJpbmc/XCIsXG4gIGFzcGVjdF9yYXRpbzogXCJzdHJpbmc/XCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIHNob3dfbmFtZTogXCJib29sZWFuP1wiLFxuICBzaG93X3N0YXRlOiBcImJvb2xlYW4/XCIsXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1waWN0dXJlLWVudGl0eS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVBpY3R1cmVFbnRpdHlDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIERldmNvbkNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwPzogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBQaWN0dXJlRW50aXR5Q2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGljdHVyZUVudGl0eUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfaW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pbWFnZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9jYW1lcmFfaW1hZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5jYW1lcmFfaW1hZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfY2FtZXJhX3ZpZXcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5jYW1lcmFfdmlldyB8fCBcImF1dG9cIjtcbiAgfVxuXG4gIGdldCBfYXNwZWN0X3JhdGlvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuYXNwZWN0X3JhdGlvIHx8IFwiNTBcIjtcbiAgfVxuXG4gIGdldCBfdGFwX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRhcF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibW9yZS1pbmZvXCIgfTtcbiAgfVxuXG4gIGdldCBfaG9sZF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5ob2xkX2FjdGlvbiB8fCB7IGFjdGlvbjogXCJtb3JlLWluZm9cIiB9O1xuICB9XG5cbiAgZ2V0IF9zaG93X25hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19uYW1lIHx8IHRydWU7XG4gIH1cblxuICBnZXQgX3Nob3dfc3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19zdGF0ZSB8fCB0cnVlO1xuICB9XG5cbiAgZ2V0IF90aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRoZW1lIHx8IFwiQmFja2VuZC1zZWxlY3RlZFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1wibW9yZS1pbmZvXCIsIFwidG9nZ2xlXCIsIFwibmF2aWdhdGVcIiwgXCJjYWxsLXNlcnZpY2VcIiwgXCJub25lXCJdO1xuICAgIGNvbnN0IHZpZXdzID0gW1wiYXV0b1wiLCBcImxpdmVcIl07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y29uZmlnRWxlbWVudFN0eWxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJlbnRpdHlcIn1cbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L29wLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmFtZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJuYW1lXCJ9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5pbWFnZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pbWFnZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJpbWFnZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPG9wLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5jYW1lcmFfaW1hZ2VcIlxuICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9jYW1lcmFfaW1hZ2V9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImNhbWVyYV9pbWFnZVwifVxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGluY2x1ZGUtZG9tYWlucz0nW1wiY2FtZXJhXCJdJ1xuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLmNhbWVyYV92aWV3XCJcbiAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJjYW1lcmFfdmlld1wifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3ZpZXdzLmluZGV4T2YodGhpcy5fY2FtZXJhX3ZpZXcpfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dmlld3MubWFwKCh2aWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke3ZpZXd9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuYXNwZWN0X3JhdGlvXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHtOdW1iZXIodGhpcy5fYXNwZWN0X3JhdGlvLnJlcGxhY2UoXCIlXCIsIFwiXCIpKX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImFzcGVjdF9yYXRpb1wifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPG9wLXN3aXRjaFxuICAgICAgICAgICAgLmNoZWNrZWQ9XCIke3RoaXMuX2NvbmZpZyEuc2hvd19uYW1lICE9PSBmYWxzZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInNob3dfbmFtZVwifVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLnNob3dfbmFtZVwiXG4gICAgICAgICAgICApfTwvb3Atc3dpdGNoXG4gICAgICAgICAgPlxuICAgICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPVwiJHt0aGlzLl9jb25maWchLnNob3dfc3RhdGUgIT09IGZhbHNlfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2hvd19zdGF0ZVwifVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLnNob3dfc3RhdGVcIlxuICAgICAgICAgICAgKX08L29wLXN3aXRjaFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMudGFwX2FjdGlvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5fdGFwX2FjdGlvbn1cIlxuICAgICAgICAgICAgLmFjdGlvbnM9XCIke2FjdGlvbnN9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0YXBfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPGh1aS1hY3Rpb24tZWRpdG9yXG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLmhvbGRfYWN0aW9uXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9ob2xkX2FjdGlvbn1cIlxuICAgICAgICAgICAgLmFjdGlvbnM9XCIke2FjdGlvbnN9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJob2xkX2FjdGlvblwifVwiXG4gICAgICAgICAgICBAYWN0aW9uLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS1hY3Rpb24tZWRpdG9yPlxuICAgICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdGhlbWV9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aGVtZVwifVwiXG4gICAgICAgICAgICBAdGhlbWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlISA9PT0gXCJhc3BlY3RfcmF0aW9cIiAmJiB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHZhbHVlICs9IFwiJVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdmFsdWUgfHxcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LmNvbmZpZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOlxuICAgICAgICAgICAgdGFyZ2V0LmNoZWNrZWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6IHRhcmdldC5jb25maWcsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1waWN0dXJlLWVudGl0eS1jYXJkLWVkaXRvclwiOiBIdWlQaWN0dXJlRW50aXR5Q2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFnQkE7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBNEJBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQWpDQTtBQUFBO0FBQUE7QUFBQTtBQW9DQTtBQUFBO0FBQUE7QUFDQTtBQXJDQTtBQUFBO0FBQUE7QUFBQTtBQXdDQTtBQUFBO0FBQUE7QUFDQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBN0NBO0FBQUE7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFqREE7QUFBQTtBQUFBO0FBQUE7QUFvREE7QUFDQTtBQXJEQTtBQUFBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUtBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7O0FBSUE7O0FBTUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFPQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFoSUE7QUFxSUE7QUFwTUE7QUFBQTtBQUFBO0FBQUE7QUF1TUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXZPQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==