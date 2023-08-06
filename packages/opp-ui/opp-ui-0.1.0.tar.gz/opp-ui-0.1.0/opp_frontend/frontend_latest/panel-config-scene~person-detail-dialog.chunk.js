(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-scene~person-detail-dialog"],{

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
const validEntityId = /^(\w+)\.(\w+)$/;
const isValidEntityId = entityId => validEntityId.test(entityId);
const createValidEntityId = input => input.toLowerCase().replace(/\s|\'/g, "_") // replace spaces and quotes with underscore
.replace(/\W/g, "") // remove not allowed chars
.replace(/_{2,}/g, "_") // replace multiple underscores with 1
.replace(/_$/, ""); // remove underscores at the end

/***/ }),

/***/ "./src/components/entity/op-entities-picker.ts":
/*!*****************************************************!*\
  !*** ./src/components/entity/op-entities-picker.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _op_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./op-entity-picker */ "./src/components/entity/op-entity-picker.ts");
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





 // Not a duplicate, type import
// tslint:disable-next-line

let OpEntitiesPickerLight = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-entities-picker")], function (_initialize, _LitElement) {
  class OpEntitiesPickerLight extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpEntitiesPickerLight,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "picked-entity-label"
      })],
      key: "pickedEntityLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "pick-entity-label"
      })],
      key: "pickEntityLabel",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Show entities from specific domains.
       * @type {string}
       * @attr include-domains
       */

      /**
       * Show no entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */
      function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const currentEntities = this._currentEntities;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${currentEntities.map(entityId => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div>
            <op-entity-picker
              allow-custom-entity
              .curValue=${entityId}
              .opp=${this.opp}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .entityFilter=${this._entityFilter}
              .value=${entityId}
              .label=${this.pickedEntityLabel}
              @value-changed=${this._entityChanged}
            ></op-entity-picker>
          </div>
        `)}
      <div>
        <op-entity-picker
          .opp=${this.opp}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .entityFilter=${this._entityFilter}
          .label=${this.pickEntityLabel}
          @value-changed=${this._addEntity}
        ></op-entity-picker>
      </div>
    `;
      }
    }, {
      kind: "field",
      key: "_entityFilter",

      value() {
        return stateObj => !this.value || !this.value.includes(stateObj.entity_id);
      }

    }, {
      kind: "get",
      key: "_currentEntities",
      value: function _currentEntities() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_updateEntities",
      value: async function _updateEntities(entities) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: entities
        });
        this.value = entities;
      }
    }, {
      kind: "method",
      key: "_entityChanged",
      value: function _entityChanged(event) {
        event.stopPropagation();
        const curValue = event.currentTarget.curValue;
        const newValue = event.detail.value;

        if (newValue === curValue || newValue !== "" && !Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_3__["isValidEntityId"])(newValue)) {
          return;
        }

        if (newValue === "") {
          this._updateEntities(this._currentEntities.filter(ent => ent !== curValue));
        } else {
          this._updateEntities(this._currentEntities.map(ent => ent === curValue ? newValue : ent));
        }
      }
    }, {
      kind: "method",
      key: "_addEntity",
      value: async function _addEntity(event) {
        event.stopPropagation();
        const toAdd = event.detail.value;
        event.currentTarget.value = "";

        if (!toAdd) {
          return;
        }

        const currentEntities = this._currentEntities;

        if (currentEntities.includes(toAdd)) {
          return;
        }

        this._updateEntities([...currentEntities, toAdd]);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjZW5lfnBlcnNvbi1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9vcC1lbnRpdGllcy1waWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRFbnRpdHlJZCA9IC9eKFxcdyspXFwuKFxcdyspJC87XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW50aXR5SWQgPSAoZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgdmFsaWRFbnRpdHlJZC50ZXN0KGVudGl0eUlkKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbGlkRW50aXR5SWQgPSAoaW5wdXQ6IHN0cmluZykgPT5cbiAgaW5wdXRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHN8XFwnL2csIFwiX1wiKSAvLyByZXBsYWNlIHNwYWNlcyBhbmQgcXVvdGVzIHdpdGggdW5kZXJzY29yZVxuICAgIC5yZXBsYWNlKC9cXFcvZywgXCJcIikgLy8gcmVtb3ZlIG5vdCBhbGxvd2VkIGNoYXJzXG4gICAgLnJlcGxhY2UoL197Mix9L2csIFwiX1wiKSAvLyByZXBsYWNlIG11bHRpcGxlIHVuZGVyc2NvcmVzIHdpdGggMVxuICAgIC5yZXBsYWNlKC9fJC8sIFwiXCIpOyAvLyByZW1vdmUgdW5kZXJzY29yZXMgYXQgdGhlIGVuZFxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uLWxpZ2h0XCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgaXNWYWxpZEVudGl0eUlkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdmFsaWRfZW50aXR5X2lkXCI7XG5cbmltcG9ydCBcIi4vb3AtZW50aXR5LXBpY2tlclwiO1xuLy8gTm90IGEgZHVwbGljYXRlLCB0eXBlIGltcG9ydFxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcEVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgfSBmcm9tIFwiLi9vcC1lbnRpdHktcGlja2VyXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWVudGl0aWVzLXBpY2tlclwiKVxuY2xhc3MgT3BFbnRpdGllc1BpY2tlckxpZ2h0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNob3cgZW50aXRpZXMgZnJvbSBzcGVjaWZpYyBkb21haW5zLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAYXR0ciBpbmNsdWRlLWRvbWFpbnNcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5LCBhdHRyaWJ1dGU6IFwiaW5jbHVkZS1kb21haW5zXCIgfSlcbiAgcHVibGljIGluY2x1ZGVEb21haW5zPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTaG93IG5vIGVudGl0aWVzIG9mIHRoZXNlIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgZXhjbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImV4Y2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwicGlja2VkLWVudGl0eS1sYWJlbFwiIH0pXG4gIHB1YmxpYyBwaWNrZWRFbnRpdHlMYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInBpY2stZW50aXR5LWxhYmVsXCIgfSkgcHVibGljIHBpY2tFbnRpdHlMYWJlbD86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMub3BwKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRFbnRpdGllcyA9IHRoaXMuX2N1cnJlbnRFbnRpdGllcztcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y3VycmVudEVudGl0aWVzLm1hcChcbiAgICAgICAgKGVudGl0eUlkKSA9PiBodG1sYFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8b3AtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICAgIC5jdXJWYWx1ZT0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke3RoaXMuaW5jbHVkZURvbWFpbnN9XG4gICAgICAgICAgICAgIC5leGNsdWRlRG9tYWlucz0ke3RoaXMuZXhjbHVkZURvbWFpbnN9XG4gICAgICAgICAgICAgIC5lbnRpdHlGaWx0ZXI9JHt0aGlzLl9lbnRpdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC52YWx1ZT0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLnBpY2tlZEVudGl0eUxhYmVsfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eUNoYW5nZWR9XG4gICAgICAgICAgICA+PC9vcC1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPG9wLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7dGhpcy5pbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAuZXhjbHVkZURvbWFpbnM9JHt0aGlzLmV4Y2x1ZGVEb21haW5zfVxuICAgICAgICAgIC5lbnRpdHlGaWx0ZXI9JHt0aGlzLl9lbnRpdHlGaWx0ZXJ9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5waWNrRW50aXR5TGFiZWx9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9hZGRFbnRpdHl9XG4gICAgICAgID48L29wLWVudGl0eS1waWNrZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXR5RmlsdGVyOiBPcEVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgPSAoXG4gICAgc3RhdGVPYmo6IE9wcEVudGl0eVxuICApID0+ICF0aGlzLnZhbHVlIHx8ICF0aGlzLnZhbHVlLmluY2x1ZGVzKHN0YXRlT2JqLmVudGl0eV9pZCk7XG5cbiAgcHJpdmF0ZSBnZXQgX2N1cnJlbnRFbnRpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudGl0aWVzKGVudGl0aWVzKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogZW50aXRpZXMsXG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlDaGFuZ2VkKGV2ZW50OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjdXJWYWx1ZSA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkuY3VyVmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgPT09IGN1clZhbHVlIHx8XG4gICAgICAobmV3VmFsdWUgIT09IFwiXCIgJiYgIWlzVmFsaWRFbnRpdHlJZChuZXdWYWx1ZSkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5fdXBkYXRlRW50aXRpZXMoXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFbnRpdGllcy5maWx0ZXIoKGVudCkgPT4gZW50ICE9PSBjdXJWYWx1ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGl0aWVzKFxuICAgICAgICB0aGlzLl9jdXJyZW50RW50aXRpZXMubWFwKChlbnQpID0+IChlbnQgPT09IGN1clZhbHVlID8gbmV3VmFsdWUgOiBlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZGRFbnRpdHkoZXZlbnQ6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRvQWRkID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkudmFsdWUgPSBcIlwiO1xuICAgIGlmICghdG9BZGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudEVudGl0aWVzID0gdGhpcy5fY3VycmVudEVudGl0aWVzO1xuICAgIGlmIChjdXJyZW50RW50aXRpZXMuaW5jbHVkZXModG9BZGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlRW50aXRpZXMoWy4uLmN1cnJlbnRFbnRpdGllcywgdG9BZGRdKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtZW50aXRpZXMtcGlja2VyXCI6IE9wRW50aXRpZXNQaWNrZXJMaWdodDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBT0E7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7OztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7Ozs7QUFoQkE7Ozs7OztBQU9BOzs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFaQTs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekJBO0FBNkJBOzs7Ozs7QUFHQTs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=