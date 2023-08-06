(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-button-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-gauge-card-editor~hui-glanc~b5618394"],{

/***/ "./src/panels/devcon/components/hui-entity-editor.ts":
/*!***********************************************************!*\
  !*** ./src/panels/devcon/components/hui-entity-editor.ts ***!
  \***********************************************************/
/*! exports provided: HuiEntityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEntityEditor", function() { return HuiEntityEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_op_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
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





let HuiEntityEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-entity-editor")], function (_initialize, _LitElement) {
  class HuiEntityEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiEntityEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <h3>
        ${this.label || this.opp.localize("ui.panel.devcon.editor.card.generic.entities") + " (" + this.opp.localize("ui.panel.devcon.editor.card.config.required") + ")"}
      </h3>
      <div class="entities">
        ${this.entities.map((entityConf, index) => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="entity">
              <op-entity-picker
                .opp="${this.opp}"
                .value="${entityConf.entity}"
                .index="${index}"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></op-entity-picker>
              <paper-icon-button
                title="Move entity down"
                icon="opp:arrow-down"
                .index="${index}"
                @click="${this._entityDown}"
                ?disabled="${index === this.entities.length - 1}"
              ></paper-icon-button>
              <paper-icon-button
                title="Move entity up"
                icon="opp:arrow-up"
                .index="${index}"
                @click="${this._entityUp}"
                ?disabled="${index === 0}"
              ></paper-icon-button>
            </div>
          `;
        })}
        <op-entity-picker
          .opp="${this.opp}"
          @change="${this._addEntity}"
        ></op-entity-picker>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_addEntity",
      value: function _addEntity(ev) {
        const target = ev.target;

        if (target.value === "") {
          return;
        }

        const newConfigEntities = this.entities.concat({
          entity: target.value
        });
        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newConfigEntities
        });
      }
    }, {
      kind: "method",
      key: "_entityUp",
      value: function _entityUp(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index - 1], newEntities[target.index]] = [newEntities[target.index], newEntities[target.index - 1]];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newEntities
        });
      }
    }, {
      kind: "method",
      key: "_entityDown",
      value: function _entityDown(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index + 1], newEntities[target.index]] = [newEntities[target.index], newEntities[target.index + 1]];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newEntities
        });
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const target = ev.target;
        const newConfigEntities = this.entities.concat();

        if (target.value === "") {
          newConfigEntities.splice(target.index, 1);
        } else {
          newConfigEntities[target.index] = Object.assign({}, newConfigEntities[target.index], {
            entity: target.value
          });
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "entities-changed", {
          entities: newConfigEntities
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .entities {
        padding-left: 20px;
      }
      .entity {
        display: flex;
        align-items: flex-end;
      }
      .entity op-entity-picker {
        flex-grow: 1;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvcn5odWktZGlhbG9nLWVkaXQtdmlld35odWktZW50aXRpZXMtY2FyZC1lZGl0b3J+aHVpLWdhdWdlLWNhcmQtZWRpdG9yfmh1aS1nbGFuY35iNTYxODM5NC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2Y29uL2NvbXBvbmVudHMvaHVpLWVudGl0eS1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9jb25maWctZWxlbWVudHMtc3R5bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvb3AtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IHsgRWRpdG9yVGFyZ2V0IH0gZnJvbSBcIi4uL2VkaXRvci90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lbnRpdHktZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpRW50aXR5RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBsYWJlbD86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDM+XG4gICAgICAgICR7dGhpcy5sYWJlbCB8fFxuICAgICAgICAgIHRoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmNvbi5lZGl0b3IuY2FyZC5nZW5lcmljLmVudGl0aWVzXCIpICtcbiAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZjb24uZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCIpICtcbiAgICAgICAgICAgIFwiKVwifVxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbnRpdGllc1wiPlxuICAgICAgICAke3RoaXMuZW50aXRpZXMubWFwKChlbnRpdHlDb25mLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudGl0eVwiPlxuICAgICAgICAgICAgICA8b3AtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAgICAgLnZhbHVlPVwiJHtlbnRpdHlDb25mLmVudGl0eX1cIlxuICAgICAgICAgICAgICAgIC5pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICAgID48L29wLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBlbnRpdHkgZG93blwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9wcDphcnJvdy1kb3duXCJcbiAgICAgICAgICAgICAgICAuaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9lbnRpdHlEb3dufVwiXG4gICAgICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHtpbmRleCA9PT0gdGhpcy5lbnRpdGllcyEubGVuZ3RoIC0gMX1cIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGVudGl0eSB1cFwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIm9wcDphcnJvdy11cFwiXG4gICAgICAgICAgICAgICAgLmluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fZW50aXR5VXB9XCJcbiAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke2luZGV4ID09PSAwfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcbiAgICAgICAgfSl9XG4gICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9hZGRFbnRpdHl9XCJcbiAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFbnRpdHkoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdDb25maWdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCh7XG4gICAgICBlbnRpdHk6IHRhcmdldC52YWx1ZSBhcyBzdHJpbmcsXG4gICAgfSk7XG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJlbnRpdGllcy1jaGFuZ2VkXCIsIHsgZW50aXRpZXM6IG5ld0NvbmZpZ0VudGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5VXAoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3QgbmV3RW50aXRpZXMgPSB0aGlzLmVudGl0aWVzIS5jb25jYXQoKTtcblxuICAgIFtuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghIC0gMV0sIG5ld0VudGl0aWVzW3RhcmdldC5pbmRleCFdXSA9IFtcbiAgICAgIG5ld0VudGl0aWVzW3RhcmdldC5pbmRleCFdLFxuICAgICAgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4ISAtIDFdLFxuICAgIF07XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJlbnRpdGllcy1jaGFuZ2VkXCIsIHsgZW50aXRpZXM6IG5ld0VudGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5RG93bihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBjb25zdCBuZXdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCgpO1xuXG4gICAgW25ld0VudGl0aWVzW3RhcmdldC5pbmRleCEgKyAxXSwgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV1dID0gW1xuICAgICAgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV0sXG4gICAgICBuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghICsgMV0sXG4gICAgXTtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3RW50aXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgY29uc3QgbmV3Q29uZmlnRW50aXRpZXMgPSB0aGlzLmVudGl0aWVzIS5jb25jYXQoKTtcblxuICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIG5ld0NvbmZpZ0VudGl0aWVzLnNwbGljZSh0YXJnZXQuaW5kZXghLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q29uZmlnRW50aXRpZXNbdGFyZ2V0LmluZGV4IV0gPSB7XG4gICAgICAgIC4uLm5ld0NvbmZpZ0VudGl0aWVzW3RhcmdldC5pbmRleCFdLFxuICAgICAgICBlbnRpdHk6IHRhcmdldC52YWx1ZSEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3Q29uZmlnRW50aXRpZXMgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZW50aXRpZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgICAuZW50aXR5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgICAgLmVudGl0eSBvcC1lbnRpdHktcGlja2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lbnRpdHktZWRpdG9yXCI6IEh1aUVudGl0eUVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXHJcbiAgPHN0eWxlPlxyXG4gICAgb3Atc3dpdGNoIHtcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgfVxyXG4gICAgLnNpZGUtYnktc2lkZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuc2lkZS1ieS1zaWRlID4gKiB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5zdWZmaXgge1xyXG4gICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgfVxyXG4gIDwvc3R5bGU+XHJcbmA7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUdBO0FBR0E7QUFJQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQU9BO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFyQkE7QUF5QkE7O0FBRUE7QUFDQTs7O0FBdENBO0FBMENBO0FBdERBO0FBQUE7QUFBQTtBQUFBO0FBeURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFsRUE7QUFBQTtBQUFBO0FBQUE7QUFxRUE7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUE5RUE7QUFBQTtBQUFBO0FBQUE7QUFpRkE7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUExRkE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBMUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2R0E7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQXpIQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==