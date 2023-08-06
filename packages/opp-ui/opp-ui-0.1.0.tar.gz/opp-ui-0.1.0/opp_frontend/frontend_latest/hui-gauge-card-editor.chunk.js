(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-gauge-card-editor"],{

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

/***/ "./src/panels/devcon/editor/config-elements/hui-gauge-card-editor.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-gauge-card-editor.ts ***!
  \***************************************************************************/
/*! exports provided: HuiGaugeCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiGaugeCardEditor", function() { return HuiGaugeCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/devcon/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/devcon/components/hui-entity-editor.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/devcon/editor/config-elements/config-elements-style.ts");
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
  name: "string?",
  entity: "string?",
  unit: "string?",
  min: "number?",
  max: "number?",
  severity: "object?",
  theme: "string?"
});
let HuiGaugeCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-gauge-card-editor")], function (_initialize, _LitElement) {
  class HuiGaugeCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiGaugeCardEditor,
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
      key: "_name",
      value: function _name() {
        return this._config.name || "";
      }
    }, {
      kind: "get",
      key: "_entity",
      value: function _entity() {
        return this._config.entity || "";
      }
    }, {
      kind: "get",
      key: "_unit",
      value: function _unit() {
        return this._config.unit || "";
      }
    }, {
      kind: "get",
      key: "_theme",
      value: function _theme() {
        return this._config.theme || "default";
      }
    }, {
      kind: "get",
      key: "_min",
      value: function _min() {
        return this._config.min || 0;
      }
    }, {
      kind: "get",
      key: "_max",
      value: function _max() {
        return this._config.max || 100;
      }
    }, {
      kind: "get",
      key: "_severity",
      value: function _severity() {
        return this._config.severity || undefined;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_7__["configElementStyle"]}
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
          .configValue=${"name"}
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <paper-input
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.unit")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._unit}"
          .configValue=${"unit"}
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <hui-theme-select-editor
          .opp="${this.opp}"
          .value="${this._theme}"
          .configValue="${"theme"}"
          @theme-changed="${this._valueChanged}"
        ></hui-theme-select-editor>
        <paper-input
          type="number"
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.minimum")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._min}"
          .configValue=${"min"}
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <paper-input
          type="number"
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.maximum")} (${this.opp.localize("ui.panel.devcon.editor.card.config.optional")})"
          .value="${this._max}"
          .configValue=${"max"}
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <op-switch
          .checked="${this._config.severity !== undefined}"
          @change="${this._toggleSeverity}"
          >${this.opp.localize("ui.panel.devcon.editor.card.gauge.severity.define")}</op-switch
        >
        ${this._config.severity !== undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-input
                type="number"
                .label="${this.opp.localize("ui.panel.devcon.editor.card.gauge.severity.green")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
                .value="${this._severity ? this._severity.green : 0}"
                .configValue=${"green"}
                @value-changed="${this._severityChanged}"
              ></paper-input>
              <paper-input
                type="number"
                .label="${this.opp.localize("ui.panel.devcon.editor.card.gauge.severity.yellow")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
                .value="${this._severity ? this._severity.yellow : 0}"
                .configValue=${"yellow"}
                @value-changed="${this._severityChanged}"
              ></paper-input>
              <paper-input
                type="number"
                .label="${this.opp.localize("ui.panel.devcon.editor.card.gauge.severity.red")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
                .value="${this._severity ? this._severity.red : 0}"
                .configValue=${"red"}
                @value-changed="${this._severityChanged}"
              ></paper-input>
          </div>
          ` : ""}
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .severity {
        display: none;
        width: 100%;
        padding-left: 16px;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .severity > * {
        flex: 1 0 30%;
        padding-right: 4px;
      }
      op-switch[checked] ~ .severity {
        display: flex;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_toggleSeverity",
      value: function _toggleSeverity(ev) {
        if (!this._config || !this.opp) {
          return;
        }

        if (ev.target.checked) {
          this._config.severity = {
            green: 0,
            yellow: 0,
            red: 0
          };
        } else {
          delete this._config.severity;
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_severityChanged",
      value: function _severityChanged(ev) {
        if (!this._config || !this.opp) {
          return;
        }

        const target = ev.target;
        const severity = Object.assign({}, this._config.severity, {
          [target.configValue]: Number(target.value)
        });
        this._config = Object.assign({}, this._config, {
          severity
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        if (!this._config || !this.opp) {
          return;
        }

        const target = ev.target;

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

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWdhdWdlLWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvaXMtZW50aXR5LWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWdhdWdlLWNhcmQtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS1lbnRpdHktZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQgeyBFbnRpdGllc0VkaXRvckV2ZW50LCBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmNvbkNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgR2F1Z2VDYXJkQ29uZmlnLCBTZXZlcml0eUNvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgbmFtZTogXCJzdHJpbmc/XCIsXG4gIGVudGl0eTogXCJzdHJpbmc/XCIsXG4gIHVuaXQ6IFwic3RyaW5nP1wiLFxuICBtaW46IFwibnVtYmVyP1wiLFxuICBtYXg6IFwibnVtYmVyP1wiLFxuICBzZXZlcml0eTogXCJvYmplY3Q/XCIsXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1nYXVnZS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUdhdWdlQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBEZXZjb25DYXJkRWRpdG9yIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogR2F1Z2VDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBHYXVnZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEubmFtZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9lbnRpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5lbnRpdHkgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdW5pdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnVuaXQgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50aGVtZSB8fCBcImRlZmF1bHRcIjtcbiAgfVxuXG4gIGdldCBfbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEubWluIHx8IDA7XG4gIH1cblxuICBnZXQgX21heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm1heCB8fCAxMDA7XG4gIH1cblxuICBnZXQgX3NldmVyaXR5KCk6IFNldmVyaXR5Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5zZXZlcml0eSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPG9wLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5lbnRpdHlcIlxuICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9lbnRpdHl9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgIGluY2x1ZGUtZG9tYWlucz0nW1wic2Vuc29yXCJdJ1xuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJuYW1lXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMudW5pdFwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl91bml0fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJ1bml0XCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPGh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXG4gICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3RoZW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICBAdGhlbWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2VuZXJpYy5taW5pbXVtXCJcbiAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX21pbn1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wibWluXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMubWF4aW11bVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9tYXh9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm1heFwifVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAuY2hlY2tlZD1cIiR7dGhpcy5fY29uZmlnIS5zZXZlcml0eSAhPT0gdW5kZWZpbmVkfVwiXG4gICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdG9nZ2xlU2V2ZXJpdHl9XCJcbiAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdhdWdlLnNldmVyaXR5LmRlZmluZVwiXG4gICAgICAgICAgKX08L29wLXN3aXRjaFxuICAgICAgICA+XG4gICAgICAgICR7dGhpcy5fY29uZmlnIS5zZXZlcml0eSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuZ2F1Z2Uuc2V2ZXJpdHkuZ3JlZW5cIlxuICAgICAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3NldmVyaXR5ID8gdGhpcy5fc2V2ZXJpdHkuZ3JlZW4gOiAwfVwiXG4gICAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJncmVlblwifVxuICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9zZXZlcml0eUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nYXVnZS5zZXZlcml0eS55ZWxsb3dcIlxuICAgICAgICAgICAgICAgICl9ICgke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3NldmVyaXR5ID8gdGhpcy5fc2V2ZXJpdHkueWVsbG93IDogMH1cIlxuICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wieWVsbG93XCJ9XG4gICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3NldmVyaXR5Q2hhbmdlZH1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdhdWdlLnNldmVyaXR5LnJlZFwiXG4gICAgICAgICAgICAgICAgKX0gKCR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fc2V2ZXJpdHkgPyB0aGlzLl9zZXZlcml0eS5yZWQgOiAwfVwiXG4gICAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJyZWRcIn1cbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fc2V2ZXJpdHlDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnNldmVyaXR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuICAgICAgLnNldmVyaXR5ID4gKiB7XG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICAgIG9wLXN3aXRjaFtjaGVja2VkXSB+IC5zZXZlcml0eSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZVNldmVyaXR5KGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKChldi50YXJnZXQgYXMgRWRpdG9yVGFyZ2V0KS5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jb25maWcuc2V2ZXJpdHkgPSB7XG4gICAgICAgIGdyZWVuOiAwLFxuICAgICAgICB5ZWxsb3c6IDAsXG4gICAgICAgIHJlZDogMCxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWcuc2V2ZXJpdHk7XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXZlcml0eUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5vcHApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3Qgc2V2ZXJpdHkgPSB7XG4gICAgICAuLi50aGlzLl9jb25maWcuc2V2ZXJpdHksXG4gICAgICBbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV06IE51bWJlcih0YXJnZXQudmFsdWUpLFxuICAgIH07XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgc2V2ZXJpdHksXG4gICAgfTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgICAgKHRhcmdldC50eXBlID09PSBcIm51bWJlclwiICYmIGlzTmFOKE51bWJlcih0YXJnZXQudmFsdWUpKSlcbiAgICAgICkge1xuICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3RhcmdldC5jb25maWdWYWx1ZSFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIGlmICh0YXJnZXQudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZywgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB2YWx1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZ2F1Z2UtY2FyZC1lZGl0b3JcIjogSHVpR2F1Z2VDYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUlBOzs7QUFJQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBS0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7OztBQWpDQTs7QUF2RUE7QUErR0E7QUExSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZKQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUE3S0E7QUFBQTtBQUFBO0FBQUE7QUFnTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOUxBO0FBQUE7QUFBQTtBQUFBO0FBaU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQTlNQTtBQUFBO0FBQUE7QUFBQTtBQWlOQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBck9BO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9