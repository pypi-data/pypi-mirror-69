(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zone-detail-dialog"],{

/***/ "./src/common/location/add_distance_to_coord.ts":
/*!******************************************************!*\
  !*** ./src/common/location/add_distance_to_coord.ts ***!
  \******************************************************/
/*! exports provided: addDistanceToCoord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDistanceToCoord", function() { return addDistanceToCoord; });
const addDistanceToCoord = (location, dx, dy) => {
  const rEarth = 6378000;
  const newLatitude = location[0] + dy / rEarth * (180 / Math.PI);
  const newLongitude = location[1] + dx / rEarth * (180 / Math.PI) / Math.cos(location[0] * Math.PI / 180);
  return [newLatitude, newLongitude];
};

/***/ }),

/***/ "./src/panels/config/zone/dialog-zone-detail.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/zone/dialog-zone-detail.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_map_op_location_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/map/op-location-editor */ "./src/components/map/op-location-editor.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _components_op_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-dialog */ "./src/components/op-dialog.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/zone */ "./src/data/zone.ts");
/* harmony import */ var _common_location_add_distance_to_coord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/location/add_distance_to_coord */ "./src/common/location/add_distance_to_coord.ts");
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










let DialogZoneDetail = _decorate(null, function (_initialize, _LitElement) {
  class DialogZoneDetail extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogZoneDetail,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_latitude",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_longitude",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_passive",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_radius",
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
      key: "_submitting",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        this._error = undefined;

        if (this._params.entry) {
          this._name = this._params.entry.name || "";
          this._icon = this._params.entry.icon || "";
          this._latitude = this._params.entry.latitude || this.opp.config.latitude;
          this._longitude = this._params.entry.longitude || this.opp.config.longitude;
          this._passive = this._params.entry.passive || false;
          this._radius = this._params.entry.radius || 100;
        } else {
          const initConfig = Object(_data_zone__WEBPACK_IMPORTED_MODULE_6__["getZoneEditorInitData"])();
          let movedHomeLocation;

          if (!(initConfig === null || initConfig === void 0 ? void 0 : initConfig.latitude) || !(initConfig === null || initConfig === void 0 ? void 0 : initConfig.longitude)) {
            movedHomeLocation = Object(_common_location_add_distance_to_coord__WEBPACK_IMPORTED_MODULE_7__["addDistanceToCoord"])([this.opp.config.latitude, this.opp.config.longitude], Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1), Math.random() * 500 * (Math.random() < 0.5 ? -1 : 1));
          }

          this._latitude = (initConfig === null || initConfig === void 0 ? void 0 : initConfig.latitude) || movedHomeLocation[0];
          this._longitude = (initConfig === null || initConfig === void 0 ? void 0 : initConfig.longitude) || movedHomeLocation[1];
          this._name = (initConfig === null || initConfig === void 0 ? void 0 : initConfig.name) || "";
          this._icon = (initConfig === null || initConfig === void 0 ? void 0 : initConfig.icon) || "mdi:map-marker";
          this._passive = false;
          this._radius = 100;
        }

        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const title = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this._params.entry ? this._params.entry.name : this.opp.localize("ui.panel.config.zone.detail.new_zone")}
      <paper-icon-button
        aria-label=${this.opp.localize("ui.panel.config.integrations.config_flow.dismiss")}
        icon="opp:close"
        dialogAction="close"
        style="position: absolute; right: 16px; top: 12px;"
      ></paper-icon-button>
    `;
        const nameValid = this._name.trim() === "";
        const iconValid = !this._icon.trim().includes(":");
        const latValid = String(this._latitude) === "";
        const lngValid = String(this._longitude) === "";
        const radiusValid = String(this._radius) === "";
        const valid = !nameValid && !iconValid && !latValid && !lngValid && !radiusValid;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-dialog
        open
        @closing="${this._close}"
        scrimClickAction=""
        escapeKeyAction=""
        .heading=${title}
      >
        <div>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="error">${this._error}</div>
              ` : ""}
          <div class="form">
            <paper-input
              .value=${this._name}
              .configValue=${"name"}
              @value-changed=${this._valueChanged}
              .label="${this.opp.localize("ui.panel.config.zone.detail.name")}"
              .errorMessage="${this.opp.localize("ui.panel.config.zone.detail.required_error_msg")}"
              .invalid=${nameValid}
            ></paper-input>
            <paper-input
              .value=${this._icon}
              .configValue=${"icon"}
              @value-changed=${this._valueChanged}
              .label="${this.opp.localize("ui.panel.config.zone.detail.icon")}"
              .errorMessage="${this.opp.localize("ui.panel.config.zone.detail.icon_error_msg")}"
              .invalid=${iconValid}
            ></paper-input>
            <op-location-editor
              class="flex"
              .location=${this._locationValue}
              .radius=${this._radius}
              .radiusColor=${this._passive ? _data_zone__WEBPACK_IMPORTED_MODULE_6__["passiveRadiusColor"] : _data_zone__WEBPACK_IMPORTED_MODULE_6__["defaultRadiusColor"]}
              .icon=${this._icon}
              @change=${this._locationChanged}
            ></op-location-editor>
            <div class="location">
              <paper-input
                .value=${this._latitude}
                .configValue=${"latitude"}
                @value-changed=${this._valueChanged}
                .label="${this.opp.localize("ui.panel.config.zone.detail.latitude")}"
                .errorMessage="${this.opp.localize("ui.panel.config.zone.detail.required_error_msg")}"
                .invalid=${latValid}
              ></paper-input>
              <paper-input
                .value=${this._longitude}
                .configValue=${"longitude"}
                @value-changed=${this._valueChanged}
                .label="${this.opp.localize("ui.panel.config.zone.detail.longitude")}"
                .errorMessage="${this.opp.localize("ui.panel.config.zone.detail.required_error_msg")}"
                .invalid=${lngValid}
              ></paper-input>
            </div>
            <paper-input
              .value=${this._radius}
              .configValue=${"radius"}
              @value-changed=${this._valueChanged}
              .label="${this.opp.localize("ui.panel.config.zone.detail.radius")}"
              .errorMessage="${this.opp.localize("ui.panel.config.zone.detail.required_error_msg")}"
              .invalid=${radiusValid}
            ></paper-input>
            <p>
              ${this.opp.localize("ui.panel.config.zone.detail.passive_note")}
            </p>
            <op-switch .checked=${this._passive} @change=${this._passiveChanged}
              >${this.opp.localize("ui.panel.config.zone.detail.passive")}</op-switch
            >
          </div>
        </div>
        ${this._params.entry ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <mwc-button
                slot="secondaryAction"
                class="warning"
                @click="${this._deleteEntry}"
                .disabled=${this._submitting}
              >
                ${this.opp.localize("ui.panel.config.zone.detail.delete")}
              </mwc-button>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
        <mwc-button
          slot="primaryAction"
          @click="${this._updateEntry}"
          .disabled=${!valid || this._submitting}
        >
          ${this._params.entry ? this.opp.localize("ui.panel.config.zone.detail.update") : this.opp.localize("ui.panel.config.zone.detail.create")}
        </mwc-button>
      </op-dialog>
    `;
      }
    }, {
      kind: "get",
      key: "_locationValue",
      value: function _locationValue() {
        return [Number(this._latitude), Number(this._longitude)];
      }
    }, {
      kind: "method",
      key: "_locationChanged",
      value: function _locationChanged(ev) {
        [this._latitude, this._longitude] = ev.currentTarget.location;
        this._radius = ev.currentTarget.radius;
      }
    }, {
      kind: "method",
      key: "_passiveChanged",
      value: function _passiveChanged(ev) {
        this._passive = ev.target.checked;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const configValue = ev.target.configValue;
        this._error = undefined;
        this[`_${configValue}`] = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry() {
        this._submitting = true;

        try {
          const values = {
            name: this._name.trim(),
            icon: this._icon.trim(),
            latitude: this._latitude,
            longitude: this._longitude,
            passive: this._passive,
            radius: this._radius
          };

          if (this._params.entry) {
            await this._params.updateEntry(values);
          } else {
            await this._params.createEntry(values);
          }

          this._params = undefined;
        } catch (err) {
          this._error = err ? err.message : "Unknown error";
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_deleteEntry",
      value: async function _deleteEntry() {
        this._submitting = true;

        try {
          if (await this._params.removeEntry()) {
            this._params = undefined;
          }
        } finally {
          this._submitting = false;
        }
      }
    }, {
      kind: "method",
      key: "_close",
      value: function _close() {
        this._params = undefined;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-dialog {
          --mdc-dialog-title-ink-color: var(--primary-text-color);
          --justify-action-buttons: space-between;
        }
        @media only screen and (min-width: 600px) {
          op-dialog {
            --mdc-dialog-min-width: 600px;
          }
        }

        /* make dialog fullscreen on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          op-dialog {
            --mdc-dialog-min-width: 100vw;
            --mdc-dialog-max-height: 100vh;
            --mdc-dialog-shape-radius: 0px;
            --vertial-align-dialog: flex-end;
          }
        }
        .form {
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        .location {
          display: flex;
        }
        .location > * {
          flex-grow: 1;
          min-width: 0;
        }
        .location > *:first-child {
          margin-right: 4px;
        }
        .location > *:last-child {
          margin-left: 4px;
        }
        op-location-editor {
          margin-top: 16px;
        }
        op-user-picker {
          margin-top: 16px;
        }
        mwc-button.warning {
          --mdc-theme-primary: var(--google-red-500);
        }
        .error {
          color: var(--google-red-500);
        }
        a {
          color: var(--primary-color);
        }
        p {
          color: var(--primary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("dialog-zone-detail", DialogZoneDetail);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS1kZXRhaWwtZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9sb2NhdGlvbi9hZGRfZGlzdGFuY2VfdG9fY29vcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvem9uZS9kaWFsb2ctem9uZS1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkZERpc3RhbmNlVG9Db29yZCA9IChcbiAgbG9jYXRpb246IFtudW1iZXIsIG51bWJlcl0sXG4gIGR4OiBudW1iZXIsXG4gIGR5OiBudW1iZXJcbik6IFtudW1iZXIsIG51bWJlcl0gPT4ge1xuICBjb25zdCByRWFydGggPSA2Mzc4MDAwO1xuICBjb25zdCBuZXdMYXRpdHVkZSA9IGxvY2F0aW9uWzBdICsgKGR5IC8gckVhcnRoKSAqICgxODAgLyBNYXRoLlBJKTtcbiAgY29uc3QgbmV3TG9uZ2l0dWRlID1cbiAgICBsb2NhdGlvblsxXSArXG4gICAgKChkeCAvIHJFYXJ0aCkgKiAoMTgwIC8gTWF0aC5QSSkpIC8gTWF0aC5jb3MoKGxvY2F0aW9uWzBdICogTWF0aC5QSSkgLyAxODApO1xuICByZXR1cm4gW25ld0xhdGl0dWRlLCBuZXdMb25naXR1ZGVdO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9tYXAvb3AtbG9jYXRpb24tZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgWm9uZURldGFpbERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLXpvbmUtZGV0YWlsXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBab25lTXV0YWJsZVBhcmFtcyxcbiAgcGFzc2l2ZVJhZGl1c0NvbG9yLFxuICBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gIGdldFpvbmVFZGl0b3JJbml0RGF0YSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvem9uZVwiO1xuaW1wb3J0IHsgYWRkRGlzdGFuY2VUb0Nvb3JkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9sb2NhdGlvbi9hZGRfZGlzdGFuY2VfdG9fY29vcmRcIjtcblxuY2xhc3MgRGlhbG9nWm9uZURldGFpbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaWNvbiE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbGF0aXR1ZGUhOiBudW1iZXI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvbmdpdHVkZSE6IG51bWJlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFzc2l2ZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3JhZGl1cyE6IG51bWJlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IFpvbmVEZXRhaWxEaWFsb2dQYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IFpvbmVEZXRhaWxEaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuX3BhcmFtcy5lbnRyeSkge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMuX3BhcmFtcy5lbnRyeS5uYW1lIHx8IFwiXCI7XG4gICAgICB0aGlzLl9pY29uID0gdGhpcy5fcGFyYW1zLmVudHJ5Lmljb24gfHwgXCJcIjtcbiAgICAgIHRoaXMuX2xhdGl0dWRlID0gdGhpcy5fcGFyYW1zLmVudHJ5LmxhdGl0dWRlIHx8IHRoaXMub3BwLmNvbmZpZy5sYXRpdHVkZTtcbiAgICAgIHRoaXMuX2xvbmdpdHVkZSA9XG4gICAgICAgIHRoaXMuX3BhcmFtcy5lbnRyeS5sb25naXR1ZGUgfHwgdGhpcy5vcHAuY29uZmlnLmxvbmdpdHVkZTtcbiAgICAgIHRoaXMuX3Bhc3NpdmUgPSB0aGlzLl9wYXJhbXMuZW50cnkucGFzc2l2ZSB8fCBmYWxzZTtcbiAgICAgIHRoaXMuX3JhZGl1cyA9IHRoaXMuX3BhcmFtcy5lbnRyeS5yYWRpdXMgfHwgMTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0Q29uZmlnID0gZ2V0Wm9uZUVkaXRvckluaXREYXRhKCk7XG4gICAgICBsZXQgbW92ZWRIb21lTG9jYXRpb247XG4gICAgICBpZiAoIWluaXRDb25maWc/LmxhdGl0dWRlIHx8ICFpbml0Q29uZmlnPy5sb25naXR1ZGUpIHtcbiAgICAgICAgbW92ZWRIb21lTG9jYXRpb24gPSBhZGREaXN0YW5jZVRvQ29vcmQoXG4gICAgICAgICAgW3RoaXMub3BwLmNvbmZpZy5sYXRpdHVkZSwgdGhpcy5vcHAuY29uZmlnLmxvbmdpdHVkZV0sXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDUwMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gLTEgOiAxKSxcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogNTAwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtMSA6IDEpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXRpdHVkZSA9IGluaXRDb25maWc/LmxhdGl0dWRlIHx8IG1vdmVkSG9tZUxvY2F0aW9uWzBdO1xuICAgICAgdGhpcy5fbG9uZ2l0dWRlID0gaW5pdENvbmZpZz8ubG9uZ2l0dWRlIHx8IG1vdmVkSG9tZUxvY2F0aW9uWzFdO1xuICAgICAgdGhpcy5fbmFtZSA9IGluaXRDb25maWc/Lm5hbWUgfHwgXCJcIjtcbiAgICAgIHRoaXMuX2ljb24gPSBpbml0Q29uZmlnPy5pY29uIHx8IFwibWRpOm1hcC1tYXJrZXJcIjtcblxuICAgICAgdGhpcy5fcGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmFkaXVzID0gMTAwO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGNvbnN0IHRpdGxlID0gaHRtbGBcbiAgICAgICR7dGhpcy5fcGFyYW1zLmVudHJ5XG4gICAgICAgID8gdGhpcy5fcGFyYW1zLmVudHJ5Lm5hbWVcbiAgICAgICAgOiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwubmV3X3pvbmVcIil9XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5kaXNtaXNzXCJcbiAgICAgICAgKX1cbiAgICAgICAgaWNvbj1cIm9wcDpjbG9zZVwiXG4gICAgICAgIGRpYWxvZ0FjdGlvbj1cImNsb3NlXCJcbiAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAxNnB4OyB0b3A6IDEycHg7XCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIGA7XG4gICAgY29uc3QgbmFtZVZhbGlkID0gdGhpcy5fbmFtZS50cmltKCkgPT09IFwiXCI7XG4gICAgY29uc3QgaWNvblZhbGlkID0gIXRoaXMuX2ljb24udHJpbSgpLmluY2x1ZGVzKFwiOlwiKTtcbiAgICBjb25zdCBsYXRWYWxpZCA9IFN0cmluZyh0aGlzLl9sYXRpdHVkZSkgPT09IFwiXCI7XG4gICAgY29uc3QgbG5nVmFsaWQgPSBTdHJpbmcodGhpcy5fbG9uZ2l0dWRlKSA9PT0gXCJcIjtcbiAgICBjb25zdCByYWRpdXNWYWxpZCA9IFN0cmluZyh0aGlzLl9yYWRpdXMpID09PSBcIlwiO1xuXG4gICAgY29uc3QgdmFsaWQgPVxuICAgICAgIW5hbWVWYWxpZCAmJiAhaWNvblZhbGlkICYmICFsYXRWYWxpZCAmJiAhbG5nVmFsaWQgJiYgIXJhZGl1c1ZhbGlkO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtZGlhbG9nXG4gICAgICAgIG9wZW5cbiAgICAgICAgQGNsb3Npbmc9XCIke3RoaXMuX2Nsb3NlfVwiXG4gICAgICAgIHNjcmltQ2xpY2tBY3Rpb249XCJcIlxuICAgICAgICBlc2NhcGVLZXlBY3Rpb249XCJcIlxuICAgICAgICAuaGVhZGluZz0ke3RpdGxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcIm5hbWVcIn1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLm5hbWVcIil9XCJcbiAgICAgICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLnJlcXVpcmVkX2Vycm9yX21zZ1wiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgLmludmFsaWQ9JHtuYW1lVmFsaWR9XG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9pY29ufVxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLmljb25cIil9XCJcbiAgICAgICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLmljb25fZXJyb3JfbXNnXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAuaW52YWxpZD0ke2ljb25WYWxpZH1cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPG9wLWxvY2F0aW9uLWVkaXRvclxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAubG9jYXRpb249JHt0aGlzLl9sb2NhdGlvblZhbHVlfVxuICAgICAgICAgICAgICAucmFkaXVzPSR7dGhpcy5fcmFkaXVzfVxuICAgICAgICAgICAgICAucmFkaXVzQ29sb3I9JHt0aGlzLl9wYXNzaXZlXG4gICAgICAgICAgICAgICAgPyBwYXNzaXZlUmFkaXVzQ29sb3JcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRSYWRpdXNDb2xvcn1cbiAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9pY29ufVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fbG9jYXRpb25DaGFuZ2VkfVxuICAgICAgICAgICAgPjwvb3AtbG9jYXRpb24tZWRpdG9yPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2xhdGl0dWRlfVxuICAgICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wibGF0aXR1ZGVcIn1cbiAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLmxhdGl0dWRlXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgLmludmFsaWQ9JHtsYXRWYWxpZH1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX2xvbmdpdHVkZX1cbiAgICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImxvbmdpdHVkZVwifVxuICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwubG9uZ2l0dWRlXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgLmVycm9yTWVzc2FnZT1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwucmVxdWlyZWRfZXJyb3JfbXNnXCJcbiAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgLmludmFsaWQ9JHtsbmdWYWxpZH1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9yYWRpdXN9XG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wicmFkaXVzXCJ9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgICAubGFiZWw9XCIke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56b25lLmRldGFpbC5yYWRpdXNcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIC5lcnJvck1lc3NhZ2U9XCIke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56b25lLmRldGFpbC5yZXF1aXJlZF9lcnJvcl9tc2dcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIC5pbnZhbGlkPSR7cmFkaXVzVmFsaWR9XG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLmRldGFpbC5wYXNzaXZlX25vdGVcIil9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8b3Atc3dpdGNoIC5jaGVja2VkPSR7dGhpcy5fcGFzc2l2ZX0gQGNoYW5nZT0ke3RoaXMuX3Bhc3NpdmVDaGFuZ2VkfVxuICAgICAgICAgICAgICA+JHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwucGFzc2l2ZVwiXG4gICAgICAgICAgICAgICl9PC9vcC1zd2l0Y2hcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7dGhpcy5fcGFyYW1zLmVudHJ5XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzZWNvbmRhcnlBY3Rpb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9kZWxldGVFbnRyeX1cIlxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLmRldGFpbC5kZWxldGVcIil9XG4gICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBzbG90PVwicHJpbWFyeUFjdGlvblwiXG4gICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl91cGRhdGVFbnRyeX1cIlxuICAgICAgICAgIC5kaXNhYmxlZD0keyF2YWxpZCB8fCB0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLl9wYXJhbXMuZW50cnlcbiAgICAgICAgICAgID8gdGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuZGV0YWlsLnVwZGF0ZVwiKVxuICAgICAgICAgICAgOiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5kZXRhaWwuY3JlYXRlXCIpfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L29wLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2xvY2F0aW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIFtOdW1iZXIodGhpcy5fbGF0aXR1ZGUpLCBOdW1iZXIodGhpcy5fbG9uZ2l0dWRlKV07XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvbkNoYW5nZWQoZXYpIHtcbiAgICBbdGhpcy5fbGF0aXR1ZGUsIHRoaXMuX2xvbmdpdHVkZV0gPSBldi5jdXJyZW50VGFyZ2V0LmxvY2F0aW9uO1xuICAgIHRoaXMuX3JhZGl1cyA9IGV2LmN1cnJlbnRUYXJnZXQucmFkaXVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFzc2l2ZUNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9wYXNzaXZlID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSAoZXYudGFyZ2V0IGFzIGFueSkuY29uZmlnVmFsdWU7XG5cbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzW2BfJHtjb25maWdWYWx1ZX1gXSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudHJ5KCkge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZXM6IFpvbmVNdXRhYmxlUGFyYW1zID0ge1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgaWNvbjogdGhpcy5faWNvbi50cmltKCksXG4gICAgICAgIGxhdGl0dWRlOiB0aGlzLl9sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiB0aGlzLl9sb25naXR1ZGUsXG4gICAgICAgIHBhc3NpdmU6IHRoaXMuX3Bhc3NpdmUsXG4gICAgICAgIHJhZGl1czogdGhpcy5fcmFkaXVzLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLl9wYXJhbXMhLmVudHJ5KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3BhcmFtcyEudXBkYXRlRW50cnkhKHZhbHVlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLl9wYXJhbXMhLmNyZWF0ZUVudHJ5KHZhbHVlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGVyciA/IGVyci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kZWxldGVFbnRyeSgpIHtcbiAgICB0aGlzLl9zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKGF3YWl0IHRoaXMuX3BhcmFtcyEucmVtb3ZlRW50cnkhKCkpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIG9wLWRpYWxvZyB7XG4gICAgICAgICAgLS1tZGMtZGlhbG9nLXRpdGxlLWluay1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAtLWp1c3RpZnktYWN0aW9uLWJ1dHRvbnM6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIG9wLWRpYWxvZyB7XG4gICAgICAgICAgICAtLW1kYy1kaWFsb2ctbWluLXdpZHRoOiA2MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBtYWtlIGRpYWxvZyBmdWxsc2NyZWVuIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIG9wLWRpYWxvZyB7XG4gICAgICAgICAgICAtLW1kYy1kaWFsb2ctbWluLXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIC0tbWRjLWRpYWxvZy1tYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIC0tbWRjLWRpYWxvZy1zaGFwZS1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIC0tdmVydGlhbC1hbGlnbi1kaWFsb2c6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2F0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2NhdGlvbiA+ICoge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2F0aW9uID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2F0aW9uID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIG9wLWxvY2F0aW9uLWVkaXRvciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBvcC11c2VyLXBpY2tlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uLndhcm5pbmcge1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy16b25lLWRldGFpbFwiOiBEaWFsb2dab25lRGV0YWlsO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRpYWxvZy16b25lLWRldGFpbFwiLCBEaWFsb2dab25lRGV0YWlsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFJQTs7Ozs7QUFMQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOzs7QUFHQTs7O0FBR0E7OztBQUdBO0FBRUE7QUFGQTs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7OztBQUdBOztBQUVBO0FBQ0E7Ozs7QUFNQTs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBUkE7OztBQWNBO0FBQ0E7O0FBRUE7OztBQTlHQTtBQW9IQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBEQTs7O0FBbFRBO0FBQ0E7QUEwVEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==