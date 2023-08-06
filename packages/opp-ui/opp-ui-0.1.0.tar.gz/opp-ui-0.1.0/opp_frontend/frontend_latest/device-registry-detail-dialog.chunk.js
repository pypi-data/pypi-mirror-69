(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["device-registry-detail-dialog"],{

/***/ "./src/dialogs/device-registry-detail/dialog-device-registry-detail.ts":
/*!*****************************************************************************!*\
  !*** ./src/dialogs/device-registry-detail/dialog-device-registry-detail.ts ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _components_op_area_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/op-area-picker */ "./src/components/op-area-picker.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
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













let DialogDeviceRegistryDetail = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("dialog-device-registry-detail")], function (_initialize, _LitElement) {
  class DialogDeviceRegistryDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogDeviceRegistryDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_nameByUser",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_areaId",
      value: void 0
    }, {
      kind: "field",
      key: "_submitting",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._error = undefined;
        this._nameByUser = this._params.device.name_by_user || "";
        this._areaId = this._params.device.area_id;
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const device = this._params.device;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>
          ${Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["computeDeviceName"])(device, this.opp)}
        </h2>
        <paper-dialog-scrollable>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="error">${this._error}</div>
              ` : ""}
          <div class="form">
            <paper-input
              .value=${this._nameByUser}
              @value-changed=${this._nameChanged}
              .label=${this.opp.localize("ui.dialogs.devices.name")}
              .placeholder=${device.name || ""}
              .disabled=${this._submitting}
            ></paper-input>
            <op-area-picker
              .opp=${this.opp}
              .value=${this._areaId}
              @value-changed=${this._areaPicked}
            ></op-area-picker>
          </div>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button @click="${this._updateEntry}">
            ${this.opp.localize("ui.panel.config.devices.update")}
          </mwc-button>
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_nameChanged",
      value: function _nameChanged(ev) {
        this._error = undefined;
        this._nameByUser = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_areaPicked",
      value: function _areaPicked(event) {
        this._areaId = event.detail.value;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;

        try {
          await this._params.updateEntry({
            name_by_user: this._nameByUser.trim() || null,
            area_id: this._areaId || null
          });
          this._params = undefined;
        } catch (err) {
          this._error = err.message || this.opp.localize("ui.panel.config.devices.unknown_error");
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._params = undefined;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          min-width: 400px;
        }
        .form {
          padding-bottom: 24px;
        }
        mwc-button.warning {
          margin-right: auto;
        }
        .error {
          color: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9kZXZpY2UtcmVnaXN0cnktZGV0YWlsL2RpYWxvZy1kZXZpY2UtcmVnaXN0cnktZGV0YWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1hcmVhLXBpY2tlclwiO1xuXG5pbXBvcnQgeyBEZXZpY2VSZWdpc3RyeURldGFpbERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRldmljZS1yZWdpc3RyeS1kZXRhaWxcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlRGV2aWNlTmFtZSB9IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy1kZXZpY2UtcmVnaXN0cnktZGV0YWlsXCIpXG5jbGFzcyBEaWFsb2dEZXZpY2VSZWdpc3RyeURldGFpbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uYW1lQnlVc2VyITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRGV2aWNlUmVnaXN0cnlEZXRhaWxEaWFsb2dQYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFJZD86IHN0cmluZztcblxuICBwcml2YXRlIF9zdWJtaXR0aW5nPzogYm9vbGVhbjtcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhcbiAgICBwYXJhbXM6IERldmljZVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uYW1lQnlVc2VyID0gdGhpcy5fcGFyYW1zLmRldmljZS5uYW1lX2J5X3VzZXIgfHwgXCJcIjtcbiAgICB0aGlzLl9hcmVhSWQgPSB0aGlzLl9wYXJhbXMuZGV2aWNlLmFyZWFfaWQ7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBjb25zdCBkZXZpY2UgPSB0aGlzLl9wYXJhbXMuZGV2aWNlO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtcGFwZXItZGlhbG9nXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgb3BlbmVkXG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD1cIiR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHtjb21wdXRlRGV2aWNlTmFtZShkZXZpY2UsIHRoaXMub3BwKX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lQnlVc2VyfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX25hbWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmRpYWxvZ3MuZGV2aWNlcy5uYW1lXCIpfVxuICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtkZXZpY2UubmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8b3AtYXJlYS1waWNrZXJcbiAgICAgICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9hcmVhSWR9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fYXJlYVBpY2tlZH1cbiAgICAgICAgICAgID48L29wLWFyZWEtcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX3VwZGF0ZUVudHJ5fVwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5kZXZpY2VzLnVwZGF0ZVwiKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uYW1lQnlVc2VyID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYVBpY2tlZChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9hcmVhSWQgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVFbnRyeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5fcGFyYW1zIS51cGRhdGVFbnRyeSh7XG4gICAgICAgIG5hbWVfYnlfdXNlcjogdGhpcy5fbmFtZUJ5VXNlci50cmltKCkgfHwgbnVsbCxcbiAgICAgICAgYXJlYV9pZDogdGhpcy5fYXJlYUlkIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID1cbiAgICAgICAgZXJyLm1lc3NhZ2UgfHxcbiAgICAgICAgdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuZGV2aWNlcy51bmtub3duX2Vycm9yXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIGlmICghKGV2LmRldGFpbCBhcyBhbnkpLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ud2FybmluZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbFwiOiBEaWFsb2dEZXZpY2VSZWdpc3RyeURldGFpbDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUVBO0FBRkE7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7O0FBaENBO0FBcUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCQTs7O0FBbkhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=