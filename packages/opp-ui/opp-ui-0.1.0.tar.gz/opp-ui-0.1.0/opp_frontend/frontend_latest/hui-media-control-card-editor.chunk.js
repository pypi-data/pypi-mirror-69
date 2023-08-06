(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-media-control-card-editor"],{

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

/***/ "./src/panels/devcon/editor/config-elements/hui-media-control-card-editor.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/devcon/editor/config-elements/hui-media-control-card-editor.ts ***!
  \***********************************************************************************/
/*! exports provided: HuiMediaControlCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMediaControlCardEditor", function() { return HuiMediaControlCardEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/devcon/common/structs/struct.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_op_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
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





const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_1__["struct"])({
  type: "string",
  entity: "string?"
});
let HuiMediaControlCardEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-media-control-card-editor")], function (_initialize, _LitElement) {
  class HuiMediaControlCardEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiMediaControlCardEditor,
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
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="card-config">
        <op-entity-picker
          .label="${this.opp.localize("ui.panel.devcon.editor.card.generic.entity")} (${this.opp.localize("ui.panel.devcon.editor.card.config.required")})"
          .opp="${this.opp}"
          .value="${this._entity}"
          .configValue=${"entity"}
          include-domains='["media_player"]'
          @change="${this._valueChanged}"
          allow-custom-entity
        ></op-entity-picker>
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
          if (target.value === "") {
            delete this._config[target.configValue];
          } else {
            this._config = Object.assign({}, this._config, {
              [target.configValue]: target.value
            });
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "config-changed", {
          config: this._config
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLW1lZGlhLWNvbnRyb2wtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vY29tbW9uL3N0cnVjdHMvaXMtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmNvbi9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktbWVkaWEtY29udHJvbC1jYXJkLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7IEVudGl0aWVzRWRpdG9yRXZlbnQsIEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGV2Y29uQ2FyZEVkaXRvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9vcC1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgeyBNZWRpYUNvbnRyb2xDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICBlbnRpdHk6IFwic3RyaW5nP1wiLFxufSk7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLW1lZGlhLWNvbnRyb2wtY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlNZWRpYUNvbnRyb2xDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIERldmNvbkNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwPzogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBNZWRpYUNvbnRyb2xDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBNZWRpYUNvbnRyb2xDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uZmlnID0gY2FyZENvbmZpZ1N0cnVjdChjb25maWcpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBfZW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZW50aXR5IHx8IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgICApfSAoJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2Y29uLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJlbnRpdHlcIn1cbiAgICAgICAgICBpbmNsdWRlLWRvbWFpbnM9J1tcIm1lZGlhX3BsYXllclwiXSdcbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L29wLWVudGl0eS1waWNrZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb25maWdbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktbWVkaWEtY29udHJvbC1jYXJkLWVkaXRvclwiOiBIdWlNZWRpYUNvbnRyb2xDYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFRQTtBQUlBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQVpBO0FBaUJBO0FBckNBO0FBQUE7QUFBQTtBQUFBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTFEQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==