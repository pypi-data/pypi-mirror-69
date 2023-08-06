(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-add-group-page~zha-group-page"],{

/***/ "./src/panels/config/zha/zha-devices-data-table.ts":
/*!*********************************************************!*\
  !*** ./src/panels/config/zha/zha-devices-data-table.ts ***!
  \*********************************************************/
/*! exports provided: ZHADevicesDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHADevicesDataTable", function() { return ZHADevicesDataTable; });
/* harmony import */ var _components_data_table_op_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/data-table/op-data-table */ "./src/components/data-table/op-data-table.ts");
/* harmony import */ var _components_entity_op_state_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/entity/op-state-icon */ "./src/components/entity/op-state-icon.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _dialogs_zha_device_info_dialog_show_dialog_zha_device_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dialogs/zha-device-info-dialog/show-dialog-zha-device-info */ "./src/dialogs/zha-device-info-dialog/show-dialog-zha-device-info.ts");
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






let ZHADevicesDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zha-devices-data-table")], function (_initialize, _LitElement) {
  class ZHADevicesDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHADevicesDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])({
        type: Boolean
      })],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "devices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_devices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(devices => {
          let outputDevices = devices;
          outputDevices = outputDevices.map(device => {
            return Object.assign({}, device, {
              name: device.user_given_name || device.name,
              model: device.model,
              manufacturer: device.manufacturer,
              id: device.ieee
            });
          });
          return outputDevices;
        });
      }

    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(narrow => narrow ? {
          name: {
            title: "Devices",
            sortable: true,
            filterable: true,
            direction: "asc",
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div @click=${this._handleClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          }
        } : {
          name: {
            title: "Name",
            sortable: true,
            filterable: true,
            direction: "asc",
            template: name => lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
                <div @click=${this._handleClicked} style="cursor: pointer;">
                  ${name}
                </div>
              `
          },
          manufacturer: {
            title: "Manufacturer",
            sortable: true,
            filterable: true
          },
          model: {
            title: "Model",
            sortable: true,
            filterable: true
          }
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <op-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._devices(this.devices)}
        .selectable=${this.selectable}
      ></op-data-table>
    `;
      }
    }, {
      kind: "method",
      key: "_handleClicked",
      value: async function _handleClicked(ev) {
        const ieee = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_dialogs_zha_device_info_dialog_show_dialog_zha_device_info__WEBPACK_IMPORTED_MODULE_4__["showZHADeviceInfoDialog"])(this, {
          ieee
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1ncm91cC1wYWdlfnpoYS1ncm91cC1wYWdlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1kZXZpY2VzLWRhdGEtdGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL29wLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L29wLXN0YXRlLWljb25cIjtcblxuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IHNob3daSEFEZXZpY2VJbmZvRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvemhhLWRldmljZS1pbmZvLWRpYWxvZy9zaG93LWRpYWxvZy16aGEtZGV2aWNlLWluZm9cIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSb3dEYXRhIGV4dGVuZHMgWkhBRGV2aWNlIHtcbiAgZGV2aWNlPzogRGV2aWNlUm93RGF0YTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtZGV2aWNlcy1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgWkhBRGV2aWNlc0RhdGFUYWJsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2RldmljZXMgPSBtZW1vaXplT25lKChkZXZpY2VzOiBaSEFEZXZpY2VbXSkgPT4ge1xuICAgIGxldCBvdXRwdXREZXZpY2VzOiBEZXZpY2VSb3dEYXRhW10gPSBkZXZpY2VzO1xuXG4gICAgb3V0cHV0RGV2aWNlcyA9IG91dHB1dERldmljZXMubWFwKChkZXZpY2UpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRldmljZSxcbiAgICAgICAgbmFtZTogZGV2aWNlLnVzZXJfZ2l2ZW5fbmFtZSB8fCBkZXZpY2UubmFtZSxcbiAgICAgICAgbW9kZWw6IGRldmljZS5tb2RlbCxcbiAgICAgICAgbWFudWZhY3R1cmVyOiBkZXZpY2UubWFudWZhY3R1cmVyLFxuICAgICAgICBpZDogZGV2aWNlLmllZWUsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dERldmljZXM7XG4gIH0pO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKFxuICAgIChuYXJyb3c6IGJvb2xlYW4pOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT5cbiAgICAgIG5hcnJvd1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlc1wiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogKG5hbWUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja2VkfSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICR7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogKG5hbWUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVDbGlja2VkfSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgICAgICAgICR7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiTWFudWZhY3R1cmVyXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1vZGVsXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtZGF0YS10YWJsZVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3cpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX2RldmljZXModGhpcy5kZXZpY2VzKX1cbiAgICAgICAgLnNlbGVjdGFibGU9JHt0aGlzLnNlbGVjdGFibGV9XG4gICAgICA+PC9vcC1kYXRhLXRhYmxlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVDbGlja2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IGllZWUgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0clwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gICAgc2hvd1pIQURldmljZUluZm9EaWFsb2codGhpcywgeyBpZWVlIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtZGV2aWNlcy1kYXRhLXRhYmxlXCI6IFpIQURldmljZXNEYXRhVGFibGU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7QUFPQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUhBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFQQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWpCQTtBQXRDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFnRUE7O0FBRUE7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUF2RUE7QUFBQTtBQUFBO0FBQUE7QUEwRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQTlFQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==