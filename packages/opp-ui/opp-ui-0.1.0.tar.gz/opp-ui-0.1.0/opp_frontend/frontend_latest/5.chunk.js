(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/entity/op-entity-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/op-entity-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













const rowRenderer = (root, _owner, model) => {
  if (!root.firstElementChild) {
    root.innerHTML = `
      <style>
        paper-icon-item {
          margin: -10px;
          padding: 0;
        }
      </style>
      <paper-icon-item>
        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>
        <paper-item-body two-line="">
          <div class='name'>[[_computeStateName(item)]]</div>
          <div secondary>[[item.entity_id]]</div>
        </paper-item-body>
      </paper-icon-item>
    `;
  }

  root.querySelector("state-badge").stateObj = model.item;
  root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(model.item);
  root.querySelector("[secondary]").textContent = model.item.entity_id;
};

let OpEntityPicker = _decorate(null, function (_initialize, _LitElement) {
  class OpEntityPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpEntityPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Boolean
      })],
      key: "autofocus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Boolean
      })],
      key: "disabled",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Boolean,
        attribute: "allow-custom-entity"
      })],
      key: "allowCustomEntity",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()],
      key: "entityFilter",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])({
        type: Boolean
      })],
      key: "_opened",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()],
      key: "_opp",
      value: void 0
    }, {
      kind: "field",
      key: "_getStates",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])((opp, includeDomains, excludeDomains, entityFilter, includeDeviceClasses) => {
          let states = [];

          if (!opp) {
            return [];
          }

          let entityIds = Object.keys(opp.states);

          if (includeDomains) {
            entityIds = entityIds.filter(eid => includeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(eid)));
          }

          if (excludeDomains) {
            entityIds = entityIds.filter(eid => !excludeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(eid)));
          }

          states = entityIds.sort().map(key => opp.states[key]);

          if (includeDeviceClasses) {
            states = states.filter(stateObj => // We always want to include the entity of the current value
            stateObj.entity_id === this.value || stateObj.attributes.device_class && includeDeviceClasses.includes(stateObj.attributes.device_class));
          }

          if (entityFilter) {
            states = states.filter(stateObj => // We always want to include the entity of the current value
            stateObj.entity_id === this.value || entityFilter(stateObj));
          }

          return states;
        });
      }

    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Show entities from specific domains.
       * @type {Array}
       * @attr include-domains
       */

      /**
       * Show no entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */

      /**
       * Show only entities of these device classes.
       * @type {Array}
       * @attr include-device-classes
       */
      function updated(changedProps) {
        _get(_getPrototypeOf(OpEntityPicker.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("opp") && !this._opened) {
          this._opp = this.opp;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const states = this._getStates(this._opp, this.includeDomains, this.excludeDomains, this.entityFilter, this.includeDeviceClasses);

        return lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${states}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${this.label === undefined && this._opp ? this._opp.localize("ui.components.entity.entity-picker.entity") : this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.entity.entity-picker.clear")}
                  slot="suffix"
                  class="clear-button"
                  icon="opp:close"
                  @click=${this._clearValue}
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              ` : ""}
          ${states.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_8__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.entity.entity-picker.show_entities")}
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "opp:menu-up" : "opp:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              ` : ""}
        </paper-input>
      </vaadin-combo-box-light>
    `;
      }
    }, {
      kind: "method",
      key: "_clearValue",
      value: function _clearValue(ev) {
        ev.stopPropagation();

        this._setValue("");
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || "";
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        const newValue = ev.detail.value;

        if (newValue !== this._value) {
          this._setValue(newValue);
        }
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(value) {
        this.value = value;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "value-changed", {
            value
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_8__["css"]`
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_8__["LitElement"]);

customElements.define("op-entity-picker", OpEntityPicker);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9vcC1lbnRpdHktcGlja2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCB0eXBlIE9wRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChlbnRpdHlJZDogT3BwRW50aXR5KSA9PiBib29sZWFuO1xuXG5jb25zdCByb3dSZW5kZXJlciA9IChyb290OiBIVE1MRWxlbWVudCwgX293bmVyLCBtb2RlbDogeyBpdGVtOiBPcHBFbnRpdHkgfSkgPT4ge1xuICBpZiAoIXJvb3QuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByb290LmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tpdGVtXV1cIiBzbG90PVwiaXRlbS1pY29uXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbX2NvbXB1dGVTdGF0ZU5hbWUoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PltbaXRlbS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIGA7XG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdGF0ZS1iYWRnZVwiKSEuc3RhdGVPYmogPSBtb2RlbC5pdGVtO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKSEudGV4dENvbnRlbnQgPSBjb21wdXRlU3RhdGVOYW1lKG1vZGVsLml0ZW0pO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJbc2Vjb25kYXJ5XVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLmVudGl0eV9pZDtcbn07XG5cbmNsYXNzIE9wRW50aXR5UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGF1dG9mb2N1cz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBcImFsbG93LWN1c3RvbS1lbnRpdHlcIiB9KVxuICBwdWJsaWMgYWxsb3dDdXN0b21FbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNob3cgZW50aXRpZXMgZnJvbSBzcGVjaWZpYyBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGluY2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFNob3cgbm8gZW50aXRpZXMgb2YgdGhlc2UgZG9tYWlucy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAYXR0ciBleGNsdWRlLWRvbWFpbnNcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5LCBhdHRyaWJ1dGU6IFwiZXhjbHVkZS1kb21haW5zXCIgfSlcbiAgcHVibGljIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTaG93IG9ubHkgZW50aXRpZXMgb2YgdGhlc2UgZGV2aWNlIGNsYXNzZXMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgaW5jbHVkZS1kZXZpY2UtY2xhc3Nlc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJpbmNsdWRlLWRldmljZS1jbGFzc2VzXCIgfSlcbiAgcHVibGljIGluY2x1ZGVEZXZpY2VDbGFzc2VzPzogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdHlGaWx0ZXI/OiBPcEVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmM7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfb3BlbmVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfb3BwPzogT3BlblBlZXJQb3dlcjtcblxuICBwcml2YXRlIF9nZXRTdGF0ZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIG9wcDogdGhpc1tcIm9wcFwiXSxcbiAgICAgIGluY2x1ZGVEb21haW5zOiB0aGlzW1wiaW5jbHVkZURvbWFpbnNcIl0sXG4gICAgICBleGNsdWRlRG9tYWluczogdGhpc1tcImV4Y2x1ZGVEb21haW5zXCJdLFxuICAgICAgZW50aXR5RmlsdGVyOiB0aGlzW1wiZW50aXR5RmlsdGVyXCJdLFxuICAgICAgaW5jbHVkZURldmljZUNsYXNzZXM6IHRoaXNbXCJpbmNsdWRlRGV2aWNlQ2xhc3Nlc1wiXVxuICAgICkgPT4ge1xuICAgICAgbGV0IHN0YXRlczogT3BwRW50aXR5W10gPSBbXTtcblxuICAgICAgaWYgKCFvcHApIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgbGV0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKG9wcC5zdGF0ZXMpO1xuXG4gICAgICBpZiAoaW5jbHVkZURvbWFpbnMpIHtcbiAgICAgICAgZW50aXR5SWRzID0gZW50aXR5SWRzLmZpbHRlcigoZWlkKSA9PlxuICAgICAgICAgIGluY2x1ZGVEb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZWlkKSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4Y2x1ZGVEb21haW5zKSB7XG4gICAgICAgIGVudGl0eUlkcyA9IGVudGl0eUlkcy5maWx0ZXIoXG4gICAgICAgICAgKGVpZCkgPT4gIWV4Y2x1ZGVEb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZWlkKSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGVzID0gZW50aXR5SWRzLnNvcnQoKS5tYXAoKGtleSkgPT4gb3BwIS5zdGF0ZXNba2V5XSk7XG5cbiAgICAgIGlmIChpbmNsdWRlRGV2aWNlQ2xhc3Nlcykge1xuICAgICAgICBzdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgIChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIGluY2x1ZGUgdGhlIGVudGl0eSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgc3RhdGVPYmouZW50aXR5X2lkID09PSB0aGlzLnZhbHVlIHx8XG4gICAgICAgICAgICAoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgJiZcbiAgICAgICAgICAgICAgaW5jbHVkZURldmljZUNsYXNzZXMuaW5jbHVkZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW50aXR5RmlsdGVyKSB7XG4gICAgICAgIHN0YXRlcyA9IHN0YXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHN0YXRlT2JqKSA9PlxuICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHdhbnQgdG8gaW5jbHVkZSB0aGUgZW50aXR5IG9mIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWQgPT09IHRoaXMudmFsdWUgfHwgZW50aXR5RmlsdGVyIShzdGF0ZU9iailcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwib3BwXCIpICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wcCA9IHRoaXMub3BwO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2dldFN0YXRlcyhcbiAgICAgIHRoaXMuX29wcCxcbiAgICAgIHRoaXMuaW5jbHVkZURvbWFpbnMsXG4gICAgICB0aGlzLmV4Y2x1ZGVEb21haW5zLFxuICAgICAgdGhpcy5lbnRpdHlGaWx0ZXIsXG4gICAgICB0aGlzLmluY2x1ZGVEZXZpY2VDbGFzc2VzXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLml0ZW1zPSR7c3RhdGVzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLmFsbG93Q3VzdG9tVmFsdWU9JHt0aGlzLmFsbG93Q3VzdG9tRW50aXR5fVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5fb3BwXG4gICAgICAgICAgICA/IHRoaXMuX29wcC5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5XCIpXG4gICAgICAgICAgICA6IHRoaXMubGFiZWx9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMudmFsdWVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9JHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5jbGVhclwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwib3BwOmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NsZWFyVmFsdWV9XG4gICAgICAgICAgICAgICAgICBuby1yaXBwbGVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3N0YXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuc2hvd19lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcIm9wcDptZW51LXVwXCIgOiBcIm9wcDptZW51LWRvd25cIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGVcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyVmFsdWUoZXY6IEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fc2V0VmFsdWUoXCJcIik7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWVudGl0eS1waWNrZXJcIiwgT3BFbnRpdHlQaWNrZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtZW50aXR5LXBpY2tlclwiOiBPcEVudGl0eVBpY2tlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTtBQUFBO0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7OztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVBOzs7OztBQUNBO0FBQUE7QUFBQTs7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQXpFQTs7Ozs7O0FBT0E7Ozs7OztBQU9BOzs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQU9BOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBR0E7QUFDQTs7Ozs7OztBQU9BOztBQUdBOzs7O0FBTUE7Ozs7O0FBVEE7QUFnQkE7O0FBR0E7OztBQUtBOzs7O0FBUkE7OztBQXhDQTtBQXlEQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBQUE7QUFXQTs7O0FBeE1BO0FBQ0E7QUEwTUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==