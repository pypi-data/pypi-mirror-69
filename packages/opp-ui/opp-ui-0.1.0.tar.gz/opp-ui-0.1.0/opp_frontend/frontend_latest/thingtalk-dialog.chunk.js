(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["thingtalk-dialog"],{

/***/ "./src/common/util/patch.ts":
/*!**********************************!*\
  !*** ./src/common/util/patch.ts ***!
  \**********************************/
/*! exports provided: applyPatch, getPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
const applyPatch = (data, path, value) => {
  if (path.length === 1) {
    data[path[0]] = value;
  } else {
    if (!data[path[0]]) {
      data[path[0]] = {};
    }

    return applyPatch(data[path[0]], path.slice(1), value);
  }
};
const getPath = (data, path) => {
  if (path.length === 1) {
    return data[path[0]];
  } else {
    if (data[path[0]] === undefined) {
      return undefined;
    }

    return getPath(data[path[0]], path.slice(1));
  }
};

/***/ }),

/***/ "./src/components/device/op-area-devices-picker.ts":
/*!*********************************************************!*\
  !*** ./src/components/device/op-area-devices-picker.ts ***!
  \*********************************************************/
/*! exports provided: OpAreaDevicesPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpAreaDevicesPicker", function() { return OpAreaDevicesPicker; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_theme_material_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _op_devices_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./op-devices-picker */ "./src/components/device/op-devices-picker.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
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
      paper-item {
        width: 100%;
        margin: -10px 0;
        padding: 0;
      }
      paper-icon-button {
        float: right;
      }
      .devices {
        display: none;
      }
      .devices.visible {
        display: block;
      }
    </style>
    <paper-item>
      <paper-item-body two-line="">
        <div class='name'>[[item.name]]</div>
        <div secondary>[[item.devices.length]] devices</div>
      </paper-item-body>
    </paper-item>
    `;
  }

  root.querySelector(".name").textContent = model.item.name;
  root.querySelector("[secondary]").textContent = `${model.item.devices.length.toString()} devices`;
};

let OpAreaDevicesPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["customElement"])("op-area-devices-picker")], function (_initialize, _SubscribeMixin) {
  class OpAreaDevicesPicker extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpAreaDevicesPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "area",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-domains"
      })],
      key: "includeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "exclude-domains"
      })],
      key: "excludeDomains",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])({
        type: Boolean
      })],
      key: "_opened",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_areaPicker",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()],
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      key: "_selectedDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_filteredDevices",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_getDevices",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])((devices, areas, entities, includeDomains, excludeDomains, includeDeviceClasses) => {
          if (!devices.length) {
            return [];
          }

          const deviceEntityLookup = {};

          for (const entity of entities) {
            if (!entity.device_id) {
              continue;
            }

            if (!(entity.device_id in deviceEntityLookup)) {
              deviceEntityLookup[entity.device_id] = [];
            }

            deviceEntityLookup[entity.device_id].push(entity);
          }

          let inputDevices = [...devices];

          if (includeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => includeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__["computeDomain"])(entity.entity_id)));
            });
          }

          if (excludeDomains) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return true;
              }

              return entities.every(entity => !excludeDomains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__["computeDomain"])(entity.entity_id)));
            });
          }

          if (includeDeviceClasses) {
            inputDevices = inputDevices.filter(device => {
              const devEntities = deviceEntityLookup[device.id];

              if (!devEntities || !devEntities.length) {
                return false;
              }

              return deviceEntityLookup[device.id].some(entity => {
                const stateObj = this.opp.states[entity.entity_id];

                if (!stateObj) {
                  return false;
                }

                return stateObj.attributes.device_class && includeDeviceClasses.includes(stateObj.attributes.device_class);
              });
            });
          }

          this._filteredDevices = inputDevices;
          const areaLookup = {};

          for (const area of areas) {
            areaLookup[area.area_id] = area;
          }

          const devicesByArea = {};

          for (const device of inputDevices) {
            const areaId = device.area_id;

            if (areaId) {
              if (!(areaId in devicesByArea)) {
                devicesByArea[areaId] = {
                  id: areaId,
                  name: areaLookup[areaId].name,
                  devices: []
                };
              }

              devicesByArea[areaId].devices.push(device.id);
            }
          }

          const sorted = Object.keys(devicesByArea).sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(devicesByArea[a].name || "", devicesByArea[b].name || "")).map(key => devicesByArea[key]);
          return sorted;
        });
      }

    }, {
      kind: "method",
      key: "oppSubscribe",
      value:
      /**
       * Show only devices with entities from specific domains.
       * @type {Array}
       * @attr include-domains
       */

      /**
       * Show no devices with entities of these domains.
       * @type {Array}
       * @attr exclude-domains
       */

      /**
       * Show only deviced with entities of these device classes.
       * @type {Array}
       * @attr include-device-classes
       */
      function oppSubscribe() {
        return [Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"])(this.opp.connection, devices => {
          this._devices = devices;
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_12__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this._areas = areas;
        }), Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["subscribeEntityRegistry"])(this.opp.connection, entities => {
          this._entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpAreaDevicesPicker.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("area") && this.area) {
          this._areaPicker = true;
          this.value = this.area;
        } else if (changedProps.has("devices") && this.devices) {
          this._areaPicker = false;

          const filteredDeviceIds = this._filteredDevices.map(device => device.id);

          const selectedDevices = this.devices.filter(device => filteredDeviceIds.includes(device));

          this._setValue(selectedDevices);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._devices || !this._areas || !this._entities) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]``;
        }

        const areas = this._getDevices(this._devices, this._areas, this._entities, this.includeDomains, this.excludeDomains, this.includeDeviceClasses);

        if (!this._areaPicker || areas.length === 0) {
          return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
        <op-devices-picker
          @value-changed=${this._devicesPicked}
          .opp=${this.opp}
          .includeDomains=${this.includeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .value=${this._selectedDevices}
          .pickDeviceLabel=${`Add ${this.label} device`}
          .pickedDeviceLabel=${`${this.label} device`}
        ></op-devices-picker>
        ${areas.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
              <mwc-button @click=${this._switchPicker}
                >Choose an area</mwc-button
              >
            ` : ""}
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <vaadin-combo-box-light
        item-value-path="id"
        item-id-path="id"
        item-label-path="name"
        .items=${areas}
        .value=${this._value}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._areaPicked}
      >
        <paper-input
          .label=${this.label === undefined && this.opp ? this.opp.localize("ui.components.device-picker.device") : `${this.label} in area`}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.device-picker.clear")}
                  slot="suffix"
                  class="clear-button"
                  icon="opp:close"
                  @click=${this._clearValue}
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              ` : ""}
          ${areas.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"]`
                <paper-icon-button
                  aria-label=${this.opp.localize("ui.components.device-picker.show_devices")}
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "opp:menu-up" : "opp:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              ` : ""}
        </paper-input>
      </vaadin-combo-box-light>
      <mwc-button @click=${this._switchPicker}
        >Choose individual devices</mwc-button
      >
    `;
      }
    }, {
      kind: "method",
      key: "_clearValue",
      value: function _clearValue(ev) {
        ev.stopPropagation();

        this._setValue([]);
      }
    }, {
      kind: "get",
      key: "_value",
      value: function _value() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_switchPicker",
      value: async function _switchPicker() {
        this._areaPicker = !this._areaPicker;
      }
    }, {
      kind: "method",
      key: "_areaPicked",
      value: async function _areaPicked(ev) {
        const value = ev.detail.value;
        let selectedDevices = [];
        const target = ev.target;

        if (target.selectedItem) {
          selectedDevices = target.selectedItem.devices;
        }

        if (value !== this._value || this._selectedDevices !== selectedDevices) {
          this._setValue(selectedDevices, value);
        }
      }
    }, {
      kind: "method",
      key: "_devicesPicked",
      value: function _devicesPicked(ev) {
        ev.stopPropagation();
        const selectedDevices = ev.detail.value;

        this._setValue(selectedDevices);
      }
    }, {
      kind: "method",
      key: "_setValue",
      value: function _setValue(selectedDevices, value = "") {
        this.value = value;
        this._selectedDevices = selectedDevices;
        setTimeout(() => {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "value-changed", {
            value: selectedDevices
          });
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "change");
        }, 0);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["css"]`
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
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_7__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"]));

/***/ }),

/***/ "./src/components/device/op-devices-picker.ts":
/*!****************************************************!*\
  !*** ./src/components/device/op-devices-picker.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _op_device_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./op-device-picker */ "./src/components/device/op-device-picker.ts");
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






let OpDevicesPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-devices-picker")], function (_initialize, _LitElement) {
  class OpDevicesPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpDevicesPicker,
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
        attribute: "picked-device-label"
      }), Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array,
        attribute: "include-device-classes"
      })],
      key: "includeDeviceClasses",
      value: void 0
    }, {
      kind: "field",
      key: "pickedDeviceLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        attribute: "pick-device-label"
      })],
      key: "pickDeviceLabel",
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

        const currentDevices = this._currentDevices;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${currentDevices.map(entityId => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div>
            <op-device-picker
              allow-custom-entity
              .curValue=${entityId}
              .opp=${this.opp}
              .includeDomains=${this.includeDomains}
              .excludeDomains=${this.excludeDomains}
              .includeDeviceClasses=${this.includeDeviceClasses}
              .value=${entityId}
              .label=${this.pickedDeviceLabel}
              @value-changed=${this._deviceChanged}
            ></op-device-picker>
          </div>
        `)}
      <div>
        <op-device-picker
          .opp=${this.opp}
          .includeDomains=${this.includeDomains}
          .excludeDomains=${this.excludeDomains}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .label=${this.pickDeviceLabel}
          @value-changed=${this._addDevice}
        ></op-device-picker>
      </div>
    `;
      }
    }, {
      kind: "get",
      key: "_currentDevices",
      value: function _currentDevices() {
        return this.value || [];
      }
    }, {
      kind: "method",
      key: "_updateDevices",
      value: async function _updateDevices(devices) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: devices
        });
        this.value = devices;
      }
    }, {
      kind: "method",
      key: "_deviceChanged",
      value: function _deviceChanged(event) {
        event.stopPropagation();
        const curValue = event.currentTarget.curValue;
        const newValue = event.detail.value;

        if (newValue === curValue || newValue !== "") {
          return;
        }

        if (newValue === "") {
          this._updateDevices(this._currentDevices.filter(dev => dev !== curValue));
        } else {
          this._updateDevices(this._currentDevices.map(dev => dev === curValue ? newValue : dev));
        }
      }
    }, {
      kind: "method",
      key: "_addDevice",
      value: async function _addDevice(event) {
        event.stopPropagation();
        const toAdd = event.detail.value;
        event.currentTarget.value = "";

        if (!toAdd) {
          return;
        }

        const currentDevices = this._currentDevices;

        if (currentDevices.includes(toAdd)) {
          return;
        }

        this._updateDevices([...currentDevices, toAdd]);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/dialog/op-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/op-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: OpIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIronFocusablesHelper", function() { return OpIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


const OpIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function (node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function (node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/op-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/op-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: OpPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperDialog", function() { return OpPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./op-iron-focusables-helper.js */ "./src/components/dialog/op-iron-focusables-helper.js");


 // tslint:disable-next-line

const paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

const haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _op_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["OpIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class OpPaperDialog extends paperDialogClass {}
// @ts-ignore

class OpPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {}
customElements.define("op-paper-dialog", OpPaperDialog);

/***/ }),

/***/ "./src/panels/config/automation/thingtalk/dialog-thingtalk.ts":
/*!********************************************************************!*\
  !*** ./src/panels/config/automation/thingtalk/dialog-thingtalk.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _op_thingtalk_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op-thingtalk-placeholders */ "./src/panels/config/automation/thingtalk/op-thingtalk-placeholders.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
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











let DialogThingtalk = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-dialog-thinktalk")], function (_initialize, _LitElement) {
  class DialogThingtalk extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: DialogThingtalk,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_opened",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_placeholders",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("#input")],
      key: "_input",
      value: void 0
    }, {
      kind: "field",
      key: "_value",
      value: void 0
    }, {
      kind: "field",
      key: "_config",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: function showDialog(params) {
        this._params = params;
        this._error = undefined;
        this._opened = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        if (this._placeholders) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <op-thingtalk-placeholders
          .opp=${this.opp}
          .placeholders=${this._placeholders}
          .opened=${this._opened}
          .skip=${() => this._skip()}
          @opened-changed=${this._openedChanged}
          @placeholders-filled=${this._handlePlaceholders}
        >
        </op-thingtalk-placeholders>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        with-backdrop
        .opened=${this._opened}
        @opened-changed=${this._openedChanged}
      >
        <h2>Create a new automation</h2>
        <paper-dialog-scrollable>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="error">${this._error}</div>
              ` : ""}
          Type below what this automation should do, and we will try to convert
          it into a Open Peer Power automation. (only English is supported for
          now)<br /><br />
          For example:
          <ul @click=${this._handleExampleClick}>
            <li>
              <button class="link">
                Turn off the lights when I leave home
              </button>
            </li>
            <li>
              <button class="link">
                Turn on the lights when the sun is set
              </button>
            </li>
            <li>
              <button class="link">
                Notify me if the door opens and I am not at home
              </button>
            </li>
            <li>
              <button class="link">
                Turn the light on when motion is detected
              </button>
            </li>
          </ul>
          <paper-input
            id="input"
            label="What should this automation do?"
            autofocus
            @keyup=${this._handleKeyUp}
          ></paper-input>
          <a
            href="https://almond.stanford.edu/"
            target="_blank"
            class="attribution"
            >Powered by Almond</a
          >
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this._skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._generate}" .disabled=${this._submitting}>
            <paper-spinner
              ?active="${this._submitting}"
              alt="Creating your automation..."
            ></paper-spinner>
            Create automation
          </mwc-button>
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_generate",
      value: async function _generate() {
        this._value = this._input.value;

        if (!this._value) {
          this._error = "Enter a command or tap skip.";
          return;
        }

        this._submitting = true;
        let config;
        let placeholders;

        try {
          const result = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["convertThingTalk"])(this.opp, this._value);
          config = result.config;
          placeholders = result.placeholders;
        } catch (err) {
          this._error = err.message;
          this._submitting = false;
          return;
        }

        this._submitting = false;

        if (!Object.keys(config).length) {
          this._error = "We couldn't create an automation for that (yet?).";
        } else if (Object.keys(placeholders).length) {
          this._config = config;
          this._placeholders = placeholders;
        } else {
          this._sendConfig(this._value, config);
        }
      }
    }, {
      kind: "method",
      key: "_handlePlaceholders",
      value: function _handlePlaceholders(ev) {
        const placeholderValues = ev.detail.value;
        Object.entries(placeholderValues).forEach(([type, values]) => {
          Object.entries(values).forEach(([index, placeholder]) => {
            const devices = Object.values(placeholder);

            if (devices.length === 1) {
              Object.entries(devices[0]).forEach(([field, value]) => {
                this._config[type][index][field] = value;
              });
              return;
            }

            const automation = Object.assign({}, this._config[type][index]);
            const newAutomations = [];
            devices.forEach(fields => {
              const newAutomation = Object.assign({}, automation);
              Object.entries(fields).forEach(([field, value]) => {
                newAutomation[field] = value;
              });
              newAutomations.push(newAutomation);
            });

            this._config[type].splice(index, 1, ...newAutomations);
          });
        });

        this._sendConfig(this._value, this._config);
      }
    }, {
      kind: "method",
      key: "_sendConfig",
      value: function _sendConfig(input, config) {
        this._params.callback(Object.assign({
          alias: input
        }, config));

        this._closeDialog();
      }
    }, {
      kind: "method",
      key: "_skip",
      value: function _skip() {
        this._params.callback(undefined);

        this._closeDialog();
      }
    }, {
      kind: "method",
      key: "_closeDialog",
      value: function _closeDialog() {
        this._placeholders = undefined;

        if (this._input) {
          this._input.value = null;
        }

        this._opened = false;
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._closeDialog();
        }
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        if (ev.keyCode === 13) {
          this._generate();
        }
      }
    }, {
      kind: "method",
      key: "_handleExampleClick",
      value: function _handleExampleClick(ev) {
        this._input.value = ev.target.innerText;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_7__["opStyle"], _resources_styles__WEBPACK_IMPORTED_MODULE_7__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        mwc-button paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }
        paper-spinner {
          display: none;
        }
        paper-spinner[active] {
          display: block;
        }
        .error {
          color: var(--google-red-500);
        }
        .attribution {
          color: var(--secondary-text-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/automation/thingtalk/op-thingtalk-placeholders.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/config/automation/thingtalk/op-thingtalk-placeholders.ts ***!
  \*****************************************************************************/
/*! exports provided: ThingTalkPlaceholders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThingTalkPlaceholders", function() { return ThingTalkPlaceholders; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_device_op_area_devices_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/device/op-area-devices-picker */ "./src/components/device/op-area-devices-picker.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/util/patch */ "./src/common/util/patch.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/device_registry */ "./src/data/device_registry.ts");
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











let ThingTalkPlaceholders = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-thingtalk-placeholders")], function (_initialize, _SubscribeMixin) {
  class ThingTalkPlaceholders extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ThingTalkPlaceholders,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opened",
      value: void 0
    }, {
      kind: "field",
      key: "skip",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "placeholders",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_error",
      value: void 0
    }, {
      kind: "field",
      key: "_deviceEntityLookup",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_extraInfo",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_placeholderValues",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_devices",
      value: void 0
    }, {
      kind: "field",
      key: "_areas",
      value: void 0
    }, {
      kind: "field",
      key: "_search",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "oppSubscribe",
      value: function oppSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_5__["subscribeEntityRegistry"])(this.opp.connection, entries => {
          for (const entity of entries) {
            if (!entity.device_id) {
              continue;
            }

            if (!(entity.device_id in this._deviceEntityLookup)) {
              this._deviceEntityLookup[entity.device_id] = [];
            }

            if (!this._deviceEntityLookup[entity.device_id].includes(entity.entity_id)) {
              this._deviceEntityLookup[entity.device_id].push(entity.entity_id);
            }
          }
        }), Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"])(this.opp.connection, devices => {
          this._devices = devices;

          this._searchNames();
        }), Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_8__["subscribeAreaRegistry"])(this.opp.connection, areas => {
          this._areas = areas;

          this._searchNames();
        })];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("placeholders")) {
          this._search = true;

          this._searchNames();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        modal
        with-backdrop
        .opened=${this.opened}
        @opened-changed="${this._openedChanged}"
      >
        <h2>Great! Now we need to link some devices.</h2>
        <paper-dialog-scrollable>
          ${this._error ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="error">${this._error}</div>
              ` : ""}
          ${Object.entries(this.placeholders).map(([type, placeholders]) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <h3>
                  ${this.opp.localize(`ui.panel.config.automation.editor.${type}s.name`)}:
                </h3>
                ${placeholders.map(placeholder => {
          if (placeholder.fields.includes("device_id")) {
            const extraInfo = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["getPath"])(this._extraInfo, [type, placeholder.index]);
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <op-area-devices-picker
                        .type=${type}
                        .placeholder=${placeholder}
                        @value-changed=${this._devicePicked}
                        .opp=${this.opp}
                        .area=${extraInfo ? extraInfo.area_id : undefined}
                        .devices=${extraInfo && extraInfo.device_ids ? extraInfo.device_ids : undefined}
                        .includeDomains=${placeholder.domains}
                        .includeDeviceClasses=${placeholder.device_classes}
                        .label=${this._getLabel(placeholder.domains, placeholder.device_classes)}
                      ></op-area-devices-picker>
                      ${extraInfo && extraInfo.manualEntity ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                            <h3>
                              One or more devices have more than one matching
                              entity, please pick the one you want to use.
                            </h3>
                            ${Object.keys(extraInfo.manualEntity).map(idx => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                <op-entity-picker
                                  id="device-entity-picker"
                                  .type=${type}
                                  .placeholder=${placeholder}
                                  .index=${idx}
                                  @change=${this._entityPicked}
                                  .includeDomains=${placeholder.domains}
                                  .includeDeviceClasses=${placeholder.device_classes}
                                  .opp=${this.opp}
                                  .label=${`${this._getLabel(placeholder.domains, placeholder.device_classes)} of device ${this._getDeviceName(Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["getPath"])(this._placeholderValues, [type, placeholder.index, idx, "device_id"]))}`}
                                  .entityFilter=${state => {
              const devId = this._placeholderValues[type][placeholder.index][idx].device_id;
              return this._deviceEntityLookup[devId].includes(state.entity_id);
            }}
                                ></op-entity-picker>
                              `)}
                          ` : ""}
                    `;
          } else if (placeholder.fields.includes("entity_id")) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <op-entity-picker
                        .type=${type}
                        .placeholder=${placeholder}
                        @change=${this._entityPicked}
                        .includeDomains=${placeholder.domains}
                        .includeDeviceClasses=${placeholder.device_classes}
                        .opp=${this.opp}
                        .label=${this._getLabel(placeholder.domains, placeholder.device_classes)}
                      ></op-entity-picker>
                    `;
          }

          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <div class="error">
                      Unknown placeholder<br />
                      ${placeholder.domains}<br />
                      ${placeholder.fields.map(field => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                            ${field}<br />
                          `)}
                    </div>
                  `;
        })}
              `)}
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <mwc-button class="left" @click="${this.skip}">
            Skip
          </mwc-button>
          <mwc-button @click="${this._done}" .disabled=${!this._isDone}>
            Create automation
          </mwc-button>
        </div>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "method",
      key: "_getDeviceName",
      value: function _getDeviceName(deviceId) {
        if (!this._devices) {
          return "";
        }

        const foundDevice = this._devices.find(device => device.id === deviceId);

        if (!foundDevice) {
          return "";
        }

        return foundDevice.name_by_user || foundDevice.name || "";
      }
    }, {
      kind: "method",
      key: "_searchNames",
      value: function _searchNames() {
        if (!this._search || !this._areas || !this._devices) {
          return;
        }

        this._search = false;
        Object.entries(this.placeholders).forEach(([type, placeholders]) => placeholders.forEach(placeholder => {
          if (!placeholder.name) {
            return;
          }

          const name = placeholder.name;

          const foundArea = this._areas.find(area => area.name.toLowerCase().includes(name));

          if (foundArea) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._extraInfo, [type, placeholder.index, "area_id"], foundArea.area_id);
            this.requestUpdate("_extraInfo");
            return;
          }

          const foundDevices = this._devices.filter(device => {
            const deviceName = device.name_by_user || device.name;

            if (!deviceName) {
              return false;
            }

            return deviceName.toLowerCase().includes(name);
          });

          if (foundDevices.length) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._extraInfo, [type, placeholder.index, "device_ids"], foundDevices.map(device => device.id));
            this.requestUpdate("_extraInfo");
          }
        }));
      }
    }, {
      kind: "get",
      key: "_isDone",
      value: function _isDone() {
        return Object.entries(this.placeholders).every(([type, placeholders]) => placeholders.every(placeholder => placeholder.fields.every(field => {
          const entries = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["getPath"])(this._placeholderValues, [type, placeholder.index]);

          if (!entries) {
            return false;
          }

          const values = Object.values(entries);
          return values.every(entry => entry[field] !== undefined && entry[field] !== "");
        })));
      }
    }, {
      kind: "method",
      key: "_getLabel",
      value: function _getLabel(domains, deviceClasses) {
        return `${domains.map(domain => this.opp.localize(`domain.${domain}`)).join(", ")}${deviceClasses ? ` of type ${deviceClasses.join(", ")}` : ""}`;
      }
    }, {
      kind: "method",
      key: "_devicePicked",
      value: function _devicePicked(ev) {
        const value = ev.detail.value;

        if (!value) {
          return;
        }

        const target = ev.target;
        const placeholder = target.placeholder;
        const type = target.type;
        let oldValues = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["getPath"])(this._placeholderValues, [type, placeholder.index]);

        if (oldValues) {
          oldValues = Object.values(oldValues);
        }

        const oldExtraInfo = Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["getPath"])(this._extraInfo, [type, placeholder.index]);

        if (this._placeholderValues[type]) {
          delete this._placeholderValues[type][placeholder.index];
        }

        if (this._extraInfo[type]) {
          delete this._extraInfo[type][placeholder.index];
        }

        if (!value.length) {
          this.requestUpdate("_placeholderValues");
          return;
        }

        value.forEach((deviceId, index) => {
          let oldIndex;

          if (oldValues) {
            const oldDevice = oldValues.find((oldVal, idx) => {
              oldIndex = idx;
              return oldVal.device_id === deviceId;
            });

            if (oldDevice) {
              Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index], oldDevice);

              if (oldExtraInfo) {
                Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._extraInfo, [type, placeholder.index, index], oldExtraInfo[oldIndex]);
              }

              return;
            }
          }

          Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "device_id"], deviceId);

          if (!placeholder.fields.includes("entity_id")) {
            return;
          }

          const devEntities = this._deviceEntityLookup[deviceId];
          const entities = devEntities.filter(eid => {
            if (placeholder.device_classes) {
              const stateObj = this.opp.states[eid];

              if (!stateObj) {
                return false;
              }

              return placeholder.domains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(eid)) && stateObj.attributes.device_class && placeholder.device_classes.includes(stateObj.attributes.device_class);
            }

            return placeholder.domains.includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(eid));
          });

          if (entities.length === 0) {
            // Should not happen because we filter the device picker on domain
            this._error = `No ${placeholder.domains.map(domain => this.opp.localize(`domain.${domain}`)).join(", ")} entities found in this device.`;
          } else if (entities.length === 1) {
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "entity_id"], entities[0]);
            this.requestUpdate("_placeholderValues");
          } else {
            delete this._placeholderValues[type][placeholder.index][index].entity_id;
            Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._extraInfo, [type, placeholder.index, "manualEntity", index], true);
            this.requestUpdate("_placeholderValues");
          }
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this.shadowRoot.querySelector("op-paper-dialog"), "iron-resize");
      }
    }, {
      kind: "method",
      key: "_entityPicked",
      value: function _entityPicked(ev) {
        const target = ev.target;
        const placeholder = target.placeholder;
        const value = target.value;
        const type = target.type;
        const index = target.index || 0;
        Object(_common_util_patch__WEBPACK_IMPORTED_MODULE_7__["applyPatch"])(this._placeholderValues, [type, placeholder.index, index, "entity_id"], value);
        this.requestUpdate("_placeholderValues");
      }
    }, {
      kind: "method",
      key: "_done",
      value: function _done() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "placeholders-filled", {
          value: this._placeholderValues
        });
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        // The opened-changed event doesn't leave the shadowdom so we re-dispatch it
        this.dispatchEvent(new CustomEvent(ev.type, ev));
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["opStyleDialog"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        op-paper-dialog {
          max-width: 500px;
        }
        mwc-button.left {
          margin-right: auto;
        }
        paper-dialog-scrollable {
          margin-top: 10px;
        }
        h3 {
          margin: 10px 0 0 0;
          font-weight: 500;
        }
        .error {
          color: var(--google-red-500);
        }
      `];
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_4__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpbmd0YWxrLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9wYXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2Uvb3AtYXJlYS1kZXZpY2VzLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXZpY2Uvb3AtZGV2aWNlcy1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL3RoaW5ndGFsay9kaWFsb2ctdGhpbmd0YWxrLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vdGhpbmd0YWxrL29wLXRoaW5ndGFsay1wbGFjZWhvbGRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcGx5UGF0Y2ggPSAoZGF0YSwgcGF0aCwgdmFsdWUpID0+IHtcclxuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcclxuICAgIGRhdGFbcGF0aFswXV0gPSB2YWx1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFkYXRhW3BhdGhbMF1dKSB7XHJcbiAgICAgIGRhdGFbcGF0aFswXV0gPSB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcHBseVBhdGNoKGRhdGFbcGF0aFswXV0sIHBhdGguc2xpY2UoMSksIHZhbHVlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGF0aCA9IChkYXRhLCBwYXRoKSA9PiB7XHJcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gZGF0YVtwYXRoWzBdXTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGRhdGFbcGF0aFswXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldFBhdGgoZGF0YVtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IFwiLi9vcC1kZXZpY2VzLXBpY2tlclwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSxcbiAgRGV2aWNlRW50aXR5TG9va3VwLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEVudGl0eVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuXG5pbnRlcmZhY2UgRGV2aWNlc0J5QXJlYSB7XG4gIFthcmVhSWQ6IHN0cmluZ106IEFyZWFEZXZpY2VzO1xufVxuXG5pbnRlcmZhY2UgQXJlYURldmljZXMge1xuICBpZD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXZpY2VzOiBzdHJpbmdbXTtcbn1cblxuY29uc3Qgcm93UmVuZGVyZXIgPSAoXG4gIHJvb3Q6IEhUTUxFbGVtZW50LFxuICBfb3duZXIsXG4gIG1vZGVsOiB7IGl0ZW06IEFyZWFEZXZpY2VzIH1cbikgPT4ge1xuICBpZiAoIXJvb3QuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByb290LmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogLTEwcHggMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLmRldmljZXMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmRldmljZXMudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbaXRlbS5uYW1lXV08L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmRldmljZXMubGVuZ3RoXV0gZGV2aWNlczwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuICAgIGA7XG4gIH1cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVcIikhLnRleHRDb250ZW50ID0gbW9kZWwuaXRlbS5uYW1lITtcbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW3NlY29uZGFyeV1cIlxuICApIS50ZXh0Q29udGVudCA9IGAke21vZGVsLml0ZW0uZGV2aWNlcy5sZW5ndGgudG9TdHJpbmcoKX0gZGV2aWNlc2A7XG59O1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWFyZWEtZGV2aWNlcy1waWNrZXJcIilcbmV4cG9ydCBjbGFzcyBPcEFyZWFEZXZpY2VzUGlja2VyIGV4dGVuZHMgU3Vic2NyaWJlTWl4aW4oTGl0RWxlbWVudCkge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhcmVhPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU2hvdyBvbmx5IGRldmljZXMgd2l0aCBlbnRpdGllcyBmcm9tIHNwZWNpZmljIGRvbWFpbnMuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICogQGF0dHIgaW5jbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU2hvdyBubyBkZXZpY2VzIHdpdGggZW50aXRpZXMgb2YgdGhlc2UgZG9tYWlucy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAYXR0ciBleGNsdWRlLWRvbWFpbnNcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5LCBhdHRyaWJ1dGU6IFwiZXhjbHVkZS1kb21haW5zXCIgfSlcbiAgcHVibGljIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTaG93IG9ubHkgZGV2aWNlZCB3aXRoIGVudGl0aWVzIG9mIHRoZXNlIGRldmljZSBjbGFzc2VzLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGluY2x1ZGUtZGV2aWNlLWNsYXNzZXNcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5LCBhdHRyaWJ1dGU6IFwiaW5jbHVkZS1kZXZpY2UtY2xhc3Nlc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRGV2aWNlQ2xhc3Nlcz86IHN0cmluZ1tdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFQaWNrZXIgPSB0cnVlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VzPzogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhcz86IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzPzogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xuICBwcml2YXRlIF9zZWxlY3RlZERldmljZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2ZpbHRlcmVkRGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgcHJpdmF0ZSBfZ2V0RGV2aWNlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgYXJlYXM6IEFyZWFSZWdpc3RyeUVudHJ5W10sXG4gICAgICBlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdLFxuICAgICAgaW5jbHVkZURvbWFpbnM6IHRoaXNbXCJpbmNsdWRlRG9tYWluc1wiXSxcbiAgICAgIGV4Y2x1ZGVEb21haW5zOiB0aGlzW1wiZXhjbHVkZURvbWFpbnNcIl0sXG4gICAgICBpbmNsdWRlRGV2aWNlQ2xhc3NlczogdGhpc1tcImluY2x1ZGVEZXZpY2VDbGFzc2VzXCJdXG4gICAgKTogQXJlYURldmljZXNbXSA9PiB7XG4gICAgICBpZiAoIWRldmljZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXAgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgIGlmICghZW50aXR5LmRldmljZV9pZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVudGl0eS5kZXZpY2VfaWQgaW4gZGV2aWNlRW50aXR5TG9va3VwKSkge1xuICAgICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5wdXNoKGVudGl0eSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBpbnB1dERldmljZXMgPSBbLi4uZGV2aWNlc107XG5cbiAgICAgIGlmIChpbmNsdWRlRG9tYWlucykge1xuICAgICAgICBpbnB1dERldmljZXMgPSBpbnB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkZXZFbnRpdGllcyA9IGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2UuaWRdO1xuICAgICAgICAgIGlmICghZGV2RW50aXRpZXMgfHwgIWRldkVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF0uc29tZSgoZW50aXR5KSA9PlxuICAgICAgICAgICAgaW5jbHVkZURvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4Y2x1ZGVEb21haW5zKSB7XG4gICAgICAgIGlucHV0RGV2aWNlcyA9IGlucHV0RGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF07XG4gICAgICAgICAgaWYgKCFkZXZFbnRpdGllcyB8fCAhZGV2RW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVudGl0aWVzLmV2ZXJ5KFxuICAgICAgICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgICAgICAgIWV4Y2x1ZGVEb21haW5zLmluY2x1ZGVzKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmNsdWRlRGV2aWNlQ2xhc3Nlcykge1xuICAgICAgICBpbnB1dERldmljZXMgPSBpbnB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkZXZFbnRpdGllcyA9IGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2UuaWRdO1xuICAgICAgICAgIGlmICghZGV2RW50aXRpZXMgfHwgIWRldkVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGV2aWNlRW50aXR5TG9va3VwW2RldmljZS5pZF0uc29tZSgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMub3BwLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgJiZcbiAgICAgICAgICAgICAgaW5jbHVkZURldmljZUNsYXNzZXMuaW5jbHVkZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZmlsdGVyZWREZXZpY2VzID0gaW5wdXREZXZpY2VzO1xuXG4gICAgICBjb25zdCBhcmVhTG9va3VwOiB7IFthcmVhSWQ6IHN0cmluZ106IEFyZWFSZWdpc3RyeUVudHJ5IH0gPSB7fTtcbiAgICAgIGZvciAoY29uc3QgYXJlYSBvZiBhcmVhcykge1xuICAgICAgICBhcmVhTG9va3VwW2FyZWEuYXJlYV9pZF0gPSBhcmVhO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXZpY2VzQnlBcmVhOiBEZXZpY2VzQnlBcmVhID0ge307XG5cbiAgICAgIGZvciAoY29uc3QgZGV2aWNlIG9mIGlucHV0RGV2aWNlcykge1xuICAgICAgICBjb25zdCBhcmVhSWQgPSBkZXZpY2UuYXJlYV9pZDtcbiAgICAgICAgaWYgKGFyZWFJZCkge1xuICAgICAgICAgIGlmICghKGFyZWFJZCBpbiBkZXZpY2VzQnlBcmVhKSkge1xuICAgICAgICAgICAgZGV2aWNlc0J5QXJlYVthcmVhSWRdID0ge1xuICAgICAgICAgICAgICBpZDogYXJlYUlkLFxuICAgICAgICAgICAgICBuYW1lOiBhcmVhTG9va3VwW2FyZWFJZF0ubmFtZSxcbiAgICAgICAgICAgICAgZGV2aWNlczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZXZpY2VzQnlBcmVhW2FyZWFJZF0uZGV2aWNlcy5wdXNoKGRldmljZS5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc29ydGVkID0gT2JqZWN0LmtleXMoZGV2aWNlc0J5QXJlYSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgY29tcGFyZShkZXZpY2VzQnlBcmVhW2FdLm5hbWUgfHwgXCJcIiwgZGV2aWNlc0J5QXJlYVtiXS5uYW1lIHx8IFwiXCIpXG4gICAgICAgIClcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBkZXZpY2VzQnlBcmVhW2tleV0pO1xuXG4gICAgICByZXR1cm4gc29ydGVkO1xuICAgIH1cbiAgKTtcblxuICBwdWJsaWMgb3BwU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiEsIChkZXZpY2VzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBkZXZpY2VzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiEsIChhcmVhcykgPT4ge1xuICAgICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLm9wcC5jb25uZWN0aW9uISwgKGVudGl0aWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gICAgICB9KSxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImFyZWFcIikgJiYgdGhpcy5hcmVhKSB7XG4gICAgICB0aGlzLl9hcmVhUGlja2VyID0gdHJ1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFyZWE7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZGV2aWNlc1wiKSAmJiB0aGlzLmRldmljZXMpIHtcbiAgICAgIHRoaXMuX2FyZWFQaWNrZXIgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkRGV2aWNlSWRzID0gdGhpcy5fZmlsdGVyZWREZXZpY2VzLm1hcChcbiAgICAgICAgKGRldmljZSkgPT4gZGV2aWNlLmlkXG4gICAgICApO1xuICAgICAgY29uc3Qgc2VsZWN0ZWREZXZpY2VzID0gdGhpcy5kZXZpY2VzLmZpbHRlcigoZGV2aWNlKSA9PlxuICAgICAgICBmaWx0ZXJlZERldmljZUlkcy5pbmNsdWRlcyhkZXZpY2UpXG4gICAgICApO1xuICAgICAgdGhpcy5fc2V0VmFsdWUoc2VsZWN0ZWREZXZpY2VzKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX2RldmljZXMgfHwgIXRoaXMuX2FyZWFzIHx8ICF0aGlzLl9lbnRpdGllcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgYXJlYXMgPSB0aGlzLl9nZXREZXZpY2VzKFxuICAgICAgdGhpcy5fZGV2aWNlcyxcbiAgICAgIHRoaXMuX2FyZWFzLFxuICAgICAgdGhpcy5fZW50aXRpZXMsXG4gICAgICB0aGlzLmluY2x1ZGVEb21haW5zLFxuICAgICAgdGhpcy5leGNsdWRlRG9tYWlucyxcbiAgICAgIHRoaXMuaW5jbHVkZURldmljZUNsYXNzZXNcbiAgICApO1xuICAgIGlmICghdGhpcy5fYXJlYVBpY2tlciB8fCBhcmVhcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8b3AtZGV2aWNlcy1waWNrZXJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2RldmljZXNQaWNrZWR9XG4gICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgIC5pbmNsdWRlRG9tYWlucz0ke3RoaXMuaW5jbHVkZURvbWFpbnN9XG4gICAgICAgICAgLmluY2x1ZGVEZXZpY2VDbGFzc2VzPSR7dGhpcy5pbmNsdWRlRGV2aWNlQ2xhc3Nlc31cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9zZWxlY3RlZERldmljZXN9XG4gICAgICAgICAgLnBpY2tEZXZpY2VMYWJlbD0ke2BBZGQgJHt0aGlzLmxhYmVsfSBkZXZpY2VgfVxuICAgICAgICAgIC5waWNrZWREZXZpY2VMYWJlbD0ke2Ake3RoaXMubGFiZWx9IGRldmljZWB9XG4gICAgICAgID48L29wLWRldmljZXMtcGlja2VyPlxuICAgICAgICAke2FyZWFzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX3N3aXRjaFBpY2tlcn1cbiAgICAgICAgICAgICAgICA+Q2hvb3NlIGFuIGFyZWE8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiaWRcIlxuICAgICAgICBpdGVtLWlkLXBhdGg9XCJpZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIm5hbWVcIlxuICAgICAgICAuaXRlbXM9JHthcmVhc31cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgIC5yZW5kZXJlcj0ke3Jvd1JlbmRlcmVyfVxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FyZWFQaWNrZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wcFxuICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5kZXZpY2VcIilcbiAgICAgICAgICAgIDogYCR7dGhpcy5sYWJlbH0gaW4gYXJlYWB9XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnZhbHVlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkuY29tcG9uZW50cy5kZXZpY2UtcGlja2VyLmNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6Y2xvc2VcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY2xlYXJWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG5vLXJpcHBsZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7YXJlYXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLmNvbXBvbmVudHMuZGV2aWNlLXBpY2tlci5zaG93X2RldmljZXNcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJvcHA6bWVudS11cFwiIDogXCJvcHA6bWVudS1kb3duXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG9nZ2xlXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fc3dpdGNoUGlja2VyfVxuICAgICAgICA+Q2hvb3NlIGluZGl2aWR1YWwgZGV2aWNlczwvbXdjLWJ1dHRvblxuICAgICAgPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclZhbHVlKGV2OiBFdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX3NldFZhbHVlKFtdKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zd2l0Y2hQaWNrZXIoKSB7XG4gICAgdGhpcy5fYXJlYVBpY2tlciA9ICF0aGlzLl9hcmVhUGlja2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYXJlYVBpY2tlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgbGV0IHNlbGVjdGVkRGV2aWNlcyA9IFtdO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBhbnk7XG4gICAgaWYgKHRhcmdldC5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHNlbGVjdGVkRGV2aWNlcyA9IHRhcmdldC5zZWxlY3RlZEl0ZW0uZGV2aWNlcztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlIHx8IHRoaXMuX3NlbGVjdGVkRGV2aWNlcyAhPT0gc2VsZWN0ZWREZXZpY2VzKSB7XG4gICAgICB0aGlzLl9zZXRWYWx1ZShzZWxlY3RlZERldmljZXMsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZXZpY2VzUGlja2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNlbGVjdGVkRGV2aWNlcyA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLl9zZXRWYWx1ZShzZWxlY3RlZERldmljZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VmFsdWUoc2VsZWN0ZWREZXZpY2VzOiBzdHJpbmdbXSwgdmFsdWUgPSBcIlwiKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlcyA9IHNlbGVjdGVkRGV2aWNlcztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogc2VsZWN0ZWREZXZpY2VzIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1hcmVhLWRldmljZXMtcGlja2VyXCI6IE9wQXJlYURldmljZXNQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi1saWdodFwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW1wb3J0IFwiLi9vcC1kZXZpY2UtcGlja2VyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3AtZGV2aWNlcy1waWNrZXJcIilcbmNsYXNzIE9wRGV2aWNlc1BpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwPzogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiBTaG93IGVudGl0aWVzIGZyb20gc3BlY2lmaWMgZG9tYWlucy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGF0dHIgaW5jbHVkZS1kb21haW5zXG4gICAqL1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZG9tYWluc1wiIH0pXG4gIHB1YmxpYyBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogU2hvdyBubyBlbnRpdGllcyBvZiB0aGVzZSBkb21haW5zLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqIEBhdHRyIGV4Y2x1ZGUtZG9tYWluc1xuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXksIGF0dHJpYnV0ZTogXCJleGNsdWRlLWRvbWFpbnNcIiB9KVxuICBwdWJsaWMgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXTtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInBpY2tlZC1kZXZpY2UtbGFiZWxcIiB9KVxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSwgYXR0cmlidXRlOiBcImluY2x1ZGUtZGV2aWNlLWNsYXNzZXNcIiB9KVxuICBwdWJsaWMgaW5jbHVkZURldmljZUNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgcHVibGljIHBpY2tlZERldmljZUxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwicGljay1kZXZpY2UtbGFiZWxcIiB9KSBwdWJsaWMgcGlja0RldmljZUxhYmVsPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5vcHApIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudERldmljZXMgPSB0aGlzLl9jdXJyZW50RGV2aWNlcztcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y3VycmVudERldmljZXMubWFwKFxuICAgICAgICAoZW50aXR5SWQpID0+IGh0bWxgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxvcC1kZXZpY2UtcGlja2VyXG4gICAgICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgICAgICAgLmN1clZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7dGhpcy5pbmNsdWRlRG9tYWluc31cbiAgICAgICAgICAgICAgLmV4Y2x1ZGVEb21haW5zPSR7dGhpcy5leGNsdWRlRG9tYWluc31cbiAgICAgICAgICAgICAgLmluY2x1ZGVEZXZpY2VDbGFzc2VzPSR7dGhpcy5pbmNsdWRlRGV2aWNlQ2xhc3Nlc31cbiAgICAgICAgICAgICAgLnZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMucGlja2VkRGV2aWNlTGFiZWx9XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZGV2aWNlQ2hhbmdlZH1cbiAgICAgICAgICAgID48L29wLWRldmljZS1waWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8b3AtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHt0aGlzLmluY2x1ZGVEb21haW5zfVxuICAgICAgICAgIC5leGNsdWRlRG9tYWlucz0ke3RoaXMuZXhjbHVkZURvbWFpbnN9XG4gICAgICAgICAgLmluY2x1ZGVEZXZpY2VDbGFzc2VzPSR7dGhpcy5pbmNsdWRlRGV2aWNlQ2xhc3Nlc31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLnBpY2tEZXZpY2VMYWJlbH1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FkZERldmljZX1cbiAgICAgICAgPjwvb3AtZGV2aWNlLXBpY2tlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfY3VycmVudERldmljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgW107XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVEZXZpY2VzKGRldmljZXMpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBkZXZpY2VzLFxuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZSA9IGRldmljZXM7XG4gIH1cblxuICBwcml2YXRlIF9kZXZpY2VDaGFuZ2VkKGV2ZW50OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjdXJWYWx1ZSA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkuY3VyVmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBjdXJWYWx1ZSB8fCBuZXdWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmV3VmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZURldmljZXMoXG4gICAgICAgIHRoaXMuX2N1cnJlbnREZXZpY2VzLmZpbHRlcigoZGV2KSA9PiBkZXYgIT09IGN1clZhbHVlKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlRGV2aWNlcyhcbiAgICAgICAgdGhpcy5fY3VycmVudERldmljZXMubWFwKChkZXYpID0+IChkZXYgPT09IGN1clZhbHVlID8gbmV3VmFsdWUgOiBkZXYpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZGREZXZpY2UoZXZlbnQ6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRvQWRkID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkudmFsdWUgPSBcIlwiO1xuICAgIGlmICghdG9BZGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudERldmljZXMgPSB0aGlzLl9jdXJyZW50RGV2aWNlcztcbiAgICBpZiAoY3VycmVudERldmljZXMuaW5jbHVkZXModG9BZGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlRGV2aWNlcyhbLi4uY3VycmVudERldmljZXMsIHRvQWRkXSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWRldmljZXMtcGlja2VyXCI6IE9wRGV2aWNlc1BpY2tlcjtcbiAgfVxufVxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcclxuaW1wb3J0IHsgT3BJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL29wLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XHJcblxyXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xyXG5cclxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cclxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XHJcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcclxuICAgIHJldHVybiBPcElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XHJcbiAgfSxcclxufTtcclxuXHJcbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXHJcbi8vIGV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBjbGFzcyBPcFBhcGVyRGlhbG9nXHJcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxyXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWRpYWxvZ1wiOiBPcFBhcGVyRGlhbG9nO1xyXG4gIH1cclxufVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYXBlci1kaWFsb2dcIiwgT3BQYXBlckRpYWxvZyk7XHJcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHF1ZXJ5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9vcC1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIi4vb3AtdGhpbmd0YWxrLXBsYWNlaG9sZGVyc1wiO1xuaW1wb3J0IHsgVGhpbmd0YWxrRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4uL3Nob3ctZGlhbG9nLXRoaW5ndGFsa1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBvcFN0eWxlRGlhbG9nLCBvcFN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IEF1dG9tYXRpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hdXRvbWF0aW9uXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBsYWNlaG9sZGVyVmFsdWVzIH0gZnJvbSBcIi4vb3AtdGhpbmd0YWxrLXBsYWNlaG9sZGVyc1wiO1xuaW1wb3J0IHsgY29udmVydFRoaW5nVGFsayB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG4gIGZpZWxkczogc3RyaW5nW107XG4gIGRvbWFpbnM6IHN0cmluZ1tdO1xuICBkZXZpY2VfY2xhc3Nlcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlaG9sZGVyQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogUGxhY2Vob2xkZXJbXTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1kaWFsb2ctdGhpbmt0YWxrXCIpXG5jbGFzcyBEaWFsb2dUaGluZ3RhbGsgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Vycm9yPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBUaGluZ3RhbGtEaWFsb2dQYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N1Ym1pdHRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BsYWNlaG9sZGVycz86IFBsYWNlaG9sZGVyQ29udGFpbmVyO1xuXG4gIEBxdWVyeShcIiNpbnB1dFwiKSBwcml2YXRlIF9pbnB1dD86IFBhcGVySW5wdXRFbGVtZW50O1xuXG4gIHByaXZhdGUgX3ZhbHVlITogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWchOiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+O1xuXG4gIHB1YmxpYyBzaG93RGlhbG9nKHBhcmFtczogVGhpbmd0YWxrRGlhbG9nUGFyYW1zKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVycykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxvcC10aGluZ3RhbGstcGxhY2Vob2xkZXJzXG4gICAgICAgICAgLm9wcD0ke3RoaXMub3BwfVxuICAgICAgICAgIC5wbGFjZWhvbGRlcnM9JHt0aGlzLl9wbGFjZWhvbGRlcnN9XG4gICAgICAgICAgLm9wZW5lZD0ke3RoaXMuX29wZW5lZH1cbiAgICAgICAgICAuc2tpcD0keygpID0+IHRoaXMuX3NraXAoKX1cbiAgICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgICAgIEBwbGFjZWhvbGRlcnMtZmlsbGVkPSR7dGhpcy5faGFuZGxlUGxhY2Vob2xkZXJzfVxuICAgICAgICA+XG4gICAgICAgIDwvb3AtdGhpbmd0YWxrLXBsYWNlaG9sZGVycz5cbiAgICAgIGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIC5vcGVuZWQ9JHt0aGlzLl9vcGVuZWR9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxoMj5DcmVhdGUgYSBuZXcgYXV0b21hdGlvbjwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIFR5cGUgYmVsb3cgd2hhdCB0aGlzIGF1dG9tYXRpb24gc2hvdWxkIGRvLCBhbmQgd2Ugd2lsbCB0cnkgdG8gY29udmVydFxuICAgICAgICAgIGl0IGludG8gYSBPcGVuIFBlZXIgUG93ZXIgYXV0b21hdGlvbi4gKG9ubHkgRW5nbGlzaCBpcyBzdXBwb3J0ZWQgZm9yXG4gICAgICAgICAgbm93KTxiciAvPjxiciAvPlxuICAgICAgICAgIEZvciBleGFtcGxlOlxuICAgICAgICAgIDx1bCBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFeGFtcGxlQ2xpY2t9PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gb2ZmIHRoZSBsaWdodHMgd2hlbiBJIGxlYXZlIGhvbWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gb24gdGhlIGxpZ2h0cyB3aGVuIHRoZSBzdW4gaXMgc2V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpbmtcIj5cbiAgICAgICAgICAgICAgICBOb3RpZnkgbWUgaWYgdGhlIGRvb3Igb3BlbnMgYW5kIEkgYW0gbm90IGF0IGhvbWVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlua1wiPlxuICAgICAgICAgICAgICAgIFR1cm4gdGhlIGxpZ2h0IG9uIHdoZW4gbW90aW9uIGlzIGRldGVjdGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICBsYWJlbD1cIldoYXQgc2hvdWxkIHRoaXMgYXV0b21hdGlvbiBkbz9cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICBAa2V5dXA9JHt0aGlzLl9oYW5kbGVLZXlVcH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWxtb25kLnN0YW5mb3JkLmVkdS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYXR0cmlidXRpb25cIlxuICAgICAgICAgICAgPlBvd2VyZWQgYnkgQWxtb25kPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBjbGFzcz1cImxlZnRcIiBAY2xpY2s9XCIke3RoaXMuX3NraXB9XCI+XG4gICAgICAgICAgICBTa2lwXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fZ2VuZXJhdGV9XCIgLmRpc2FibGVkPSR7dGhpcy5fc3VibWl0dGluZ30+XG4gICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICA/YWN0aXZlPVwiJHt0aGlzLl9zdWJtaXR0aW5nfVwiXG4gICAgICAgICAgICAgIGFsdD1cIkNyZWF0aW5nIHlvdXIgYXV0b21hdGlvbi4uLlwiXG4gICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgQ3JlYXRlIGF1dG9tYXRpb25cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dlbmVyYXRlKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5wdXQhLnZhbHVlIGFzIHN0cmluZztcbiAgICBpZiAoIXRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IFwiRW50ZXIgYSBjb21tYW5kIG9yIHRhcCBza2lwLlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICBsZXQgY29uZmlnOiBQYXJ0aWFsPEF1dG9tYXRpb25Db25maWc+O1xuICAgIGxldCBwbGFjZWhvbGRlcnM6IFBsYWNlaG9sZGVyQ29udGFpbmVyO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb252ZXJ0VGhpbmdUYWxrKHRoaXMub3BwLCB0aGlzLl92YWx1ZSk7XG4gICAgICBjb25maWcgPSByZXN1bHQuY29uZmlnO1xuICAgICAgcGxhY2Vob2xkZXJzID0gcmVzdWx0LnBsYWNlaG9sZGVycztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc3VibWl0dGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZXJyb3IgPSBcIldlIGNvdWxkbid0IGNyZWF0ZSBhbiBhdXRvbWF0aW9uIGZvciB0aGF0ICh5ZXQ/KS5cIjtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycykubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlcnMgPSBwbGFjZWhvbGRlcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbmRDb25maWcodGhpcy5fdmFsdWUsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGxhY2Vob2xkZXJzKGV2OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVmFsdWVzID0gZXYuZGV0YWlsLnZhbHVlIGFzIFBsYWNlaG9sZGVyVmFsdWVzO1xuICAgIE9iamVjdC5lbnRyaWVzKHBsYWNlaG9sZGVyVmFsdWVzKS5mb3JFYWNoKChbdHlwZSwgdmFsdWVzXSkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVzKS5mb3JFYWNoKChbaW5kZXgsIHBsYWNlaG9sZGVyXSkgPT4ge1xuICAgICAgICBjb25zdCBkZXZpY2VzID0gT2JqZWN0LnZhbHVlcyhwbGFjZWhvbGRlcik7XG4gICAgICAgIGlmIChkZXZpY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRldmljZXNbMF0pLmZvckVhY2goKFtmaWVsZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jb25maWdbdHlwZV1baW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdXRvbWF0aW9uID0geyAuLi50aGlzLl9jb25maWdbdHlwZV1baW5kZXhdIH07XG4gICAgICAgIGNvbnN0IG5ld0F1dG9tYXRpb25zOiBhbnlbXSA9IFtdO1xuICAgICAgICBkZXZpY2VzLmZvckVhY2goKGZpZWxkcykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0F1dG9tYXRpb24gPSB7IC4uLmF1dG9tYXRpb24gfTtcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhmaWVsZHMpLmZvckVhY2goKFtmaWVsZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBuZXdBdXRvbWF0aW9uW2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld0F1dG9tYXRpb25zLnB1c2gobmV3QXV0b21hdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb25maWdbdHlwZV0uc3BsaWNlKGluZGV4LCAxLCAuLi5uZXdBdXRvbWF0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZW5kQ29uZmlnKHRoaXMuX3ZhbHVlLCB0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VuZENvbmZpZyhpbnB1dCwgY29uZmlnKSB7XG4gICAgdGhpcy5fcGFyYW1zIS5jYWxsYmFjayh7IGFsaWFzOiBpbnB1dCwgLi4uY29uZmlnIH0pO1xuICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9za2lwKCkge1xuICAgIHRoaXMuX3BhcmFtcyEuY2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgICB0aGlzLl9jbG9zZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJzID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLl9pbnB1dCkge1xuICAgICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgdGhpcy5fY2xvc2VEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVLZXlVcChldjogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5fZ2VuZXJhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFeGFtcGxlQ2xpY2soZXY6IEV2ZW50KSB7XG4gICAgdGhpcy5faW5wdXQhLnZhbHVlID0gKGV2LnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaW5uZXJUZXh0O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlLFxuICAgICAgb3BTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgb3AtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ubGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24gcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNwaW5uZXJbYWN0aXZlXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1kaWFsb2ctdGhpbmt0YWxrXCI6IERpYWxvZ1RoaW5ndGFsaztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RldmljZS9vcC1hcmVhLWRldmljZXMtcGlja2VyXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgb3BTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckNvbnRhaW5lciwgUGxhY2Vob2xkZXIgfSBmcm9tIFwiLi9kaWFsb2ctdGhpbmd0YWxrXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvc3Vic2NyaWJlLW1peGluXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgZ2V0UGF0aCwgYXBwbHlQYXRjaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9wYXRjaFwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5LFxuICBBcmVhUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwicGxhY2Vob2xkZXJzLWZpbGxlZFwiOiB7IHZhbHVlOiBQbGFjZWhvbGRlclZhbHVlcyB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Vob2xkZXJWYWx1ZXMge1xuICBba2V5OiBzdHJpbmddOiB7XG4gICAgW2luZGV4OiBudW1iZXJdOiB7XG4gICAgICBbaW5kZXg6IG51bWJlcl06IHsgZGV2aWNlX2lkPzogc3RyaW5nOyBlbnRpdHlfaWQ/OiBzdHJpbmcgfTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhSW5mbyB7XG4gIFtrZXk6IHN0cmluZ106IHtcbiAgICBbaW5kZXg6IG51bWJlcl06IHtcbiAgICAgIFtpbmRleDogbnVtYmVyXToge1xuICAgICAgICBhcmVhX2lkPzogc3RyaW5nO1xuICAgICAgICBkZXZpY2VfaWRzPzogc3RyaW5nW107XG4gICAgICAgIG1hbnVhbEVudGl0eTogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIERldmljZUVudGl0aWVzTG9va3VwIHtcbiAgW2RldmljZUlkOiBzdHJpbmddOiBzdHJpbmdbXTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJvcC10aGluZ3RhbGstcGxhY2Vob2xkZXJzXCIpXG5leHBvcnQgY2xhc3MgVGhpbmdUYWxrUGxhY2Vob2xkZXJzIGV4dGVuZHMgU3Vic2NyaWJlTWl4aW4oTGl0RWxlbWVudCkge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wZW5lZCE6IGJvb2xlYW47XG4gIHB1YmxpYyBza2lwITogKCkgPT4gdm9pZDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHBsYWNlaG9sZGVycyE6IFBsYWNlaG9sZGVyQ29udGFpbmVyO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdGllc0xvb2t1cCA9IHt9O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9leHRyYUluZm86IEV4dHJhSW5mbyA9IHt9O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wbGFjZWhvbGRlclZhbHVlczogUGxhY2Vob2xkZXJWYWx1ZXMgPSB7fTtcbiAgcHJpdmF0ZSBfZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcbiAgcHJpdmF0ZSBfYXJlYXM/OiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuICBwcml2YXRlIF9zZWFyY2ggPSBmYWxzZTtcblxuICBwdWJsaWMgb3BwU3Vic2NyaWJlKCkge1xuICAgIHJldHVybiBbXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLm9wcC5jb25uZWN0aW9uLCAoZW50cmllcykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFlbnRpdHkuZGV2aWNlX2lkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoZW50aXR5LmRldmljZV9pZCBpbiB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXApKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXZpY2VFbnRpdHlMb29rdXBbZW50aXR5LmRldmljZV9pZF0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgZW50aXR5LmVudGl0eV9pZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2VudGl0eS5kZXZpY2VfaWRdLnB1c2goZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24hLCAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgICAgdGhpcy5fc2VhcmNoTmFtZXMoKTtcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24hLCAoYXJlYXMpID0+IHtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgICAgdGhpcy5fc2VhcmNoTmFtZXMoKTtcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJwbGFjZWhvbGRlcnNcIikpIHtcbiAgICAgIHRoaXMuX3NlYXJjaCA9IHRydWU7XG4gICAgICB0aGlzLl9zZWFyY2hOYW1lcygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLXBhcGVyLWRpYWxvZ1xuICAgICAgICBtb2RhbFxuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIC5vcGVuZWQ9JHt0aGlzLm9wZW5lZH1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPVwiJHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxoMj5HcmVhdCEgTm93IHdlIG5lZWQgdG8gbGluayBzb21lIGRldmljZXMuPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtPYmplY3QuZW50cmllcyh0aGlzLnBsYWNlaG9sZGVycykubWFwKFxuICAgICAgICAgICAgKFt0eXBlLCBwbGFjZWhvbGRlcnNdKSA9PlxuICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuJHt0eXBlfXMubmFtZWBcbiAgICAgICAgICAgICAgICAgICl9OlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgJHtwbGFjZWhvbGRlcnMubWFwKChwbGFjZWhvbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyLmZpZWxkcy5pbmNsdWRlcyhcImRldmljZV9pZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRyYUluZm8gPSBnZXRQYXRoKHRoaXMuX2V4dHJhSW5mbywgW1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8b3AtYXJlYS1kZXZpY2VzLXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgLnR5cGU9JHt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyPSR7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2RldmljZVBpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcmVhPSR7ZXh0cmFJbmZvID8gZXh0cmFJbmZvLmFyZWFfaWQgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZGV2aWNlcz0ke2V4dHJhSW5mbyAmJiBleHRyYUluZm8uZGV2aWNlX2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGV4dHJhSW5mby5kZXZpY2VfaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVEb21haW5zPSR7cGxhY2Vob2xkZXIuZG9tYWluc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlRGV2aWNlQ2xhc3Nlcz0ke3BsYWNlaG9sZGVyLmRldmljZV9jbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5fZ2V0TGFiZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRvbWFpbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRldmljZV9jbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID48L29wLWFyZWEtZGV2aWNlcy1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgJHtleHRyYUluZm8gJiYgZXh0cmFJbmZvLm1hbnVhbEVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uZSBvciBtb3JlIGRldmljZXMgaGF2ZSBtb3JlIHRoYW4gb25lIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHksIHBsZWFzZSBwaWNrIHRoZSBvbmUgeW91IHdhbnQgdG8gdXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtPYmplY3Qua2V5cyhleHRyYUluZm8ubWFudWFsRW50aXR5KS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWR4KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3AtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGV2aWNlLWVudGl0eS1waWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlPSR7dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXg9JHtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2VudGl0eVBpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHtwbGFjZWhvbGRlci5kb21haW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlRGV2aWNlQ2xhc3Nlcz0ke3BsYWNlaG9sZGVyLmRldmljZV9jbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHtgJHt0aGlzLl9nZXRMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRvbWFpbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlci5kZXZpY2VfY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IG9mIGRldmljZSAke3RoaXMuX2dldERldmljZU5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXRoKHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWNlX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50aXR5RmlsdGVyPSR7KHN0YXRlOiBPcHBFbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldklkID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXNbdHlwZV1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW2lkeF0uZGV2aWNlX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RldmljZUVudGl0eUxvb2t1cFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV2SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9vcC1lbnRpdHktcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxhY2Vob2xkZXIuZmllbGRzLmluY2x1ZGVzKFwiZW50aXR5X2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxvcC1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHlwZT0ke3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZURvbWFpbnM9JHtwbGFjZWhvbGRlci5kb21haW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVEZXZpY2VDbGFzc2VzPSR7cGxhY2Vob2xkZXIuZGV2aWNlX2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9nZXRMYWJlbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuZG9tYWlucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuZGV2aWNlX2NsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvb3AtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICBVbmtub3duIHBsYWNlaG9sZGVyPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgJHtwbGFjZWhvbGRlci5kb21haW5zfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICR7cGxhY2Vob2xkZXIuZmllbGRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ZpZWxkfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gY2xhc3M9XCJsZWZ0XCIgQGNsaWNrPVwiJHt0aGlzLnNraXB9XCI+XG4gICAgICAgICAgICBTa2lwXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fZG9uZX1cIiAuZGlzYWJsZWQ9JHshdGhpcy5faXNEb25lfT5cbiAgICAgICAgICAgIENyZWF0ZSBhdXRvbWF0aW9uXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXZpY2VOYW1lKGRldmljZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fZGV2aWNlcykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGZvdW5kRGV2aWNlID0gdGhpcy5fZGV2aWNlcy5maW5kKChkZXZpY2UpID0+IGRldmljZS5pZCA9PT0gZGV2aWNlSWQpO1xuICAgIGlmICghZm91bmREZXZpY2UpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmREZXZpY2UubmFtZV9ieV91c2VyIHx8IGZvdW5kRGV2aWNlLm5hbWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaE5hbWVzKCkge1xuICAgIGlmICghdGhpcy5fc2VhcmNoIHx8ICF0aGlzLl9hcmVhcyB8fCAhdGhpcy5fZGV2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWFyY2ggPSBmYWxzZTtcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLnBsYWNlaG9sZGVycykuZm9yRWFjaCgoW3R5cGUsIHBsYWNlaG9sZGVyc10pID0+XG4gICAgICBwbGFjZWhvbGRlcnMuZm9yRWFjaCgocGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlci5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwbGFjZWhvbGRlci5uYW1lO1xuICAgICAgICBjb25zdCBmb3VuZEFyZWEgPSB0aGlzLl9hcmVhcyEuZmluZCgoYXJlYSkgPT5cbiAgICAgICAgICBhcmVhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lKVxuICAgICAgICApO1xuICAgICAgICBpZiAoZm91bmRBcmVhKSB7XG4gICAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhSW5mbyxcbiAgICAgICAgICAgIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleCwgXCJhcmVhX2lkXCJdLFxuICAgICAgICAgICAgZm91bmRBcmVhLmFyZWFfaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9leHRyYUluZm9cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvdW5kRGV2aWNlcyA9IHRoaXMuX2RldmljZXMhLmZpbHRlcigoZGV2aWNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGV2aWNlTmFtZSA9IGRldmljZS5uYW1lX2J5X3VzZXIgfHwgZGV2aWNlLm5hbWU7XG4gICAgICAgICAgaWYgKCFkZXZpY2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkZXZpY2VOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZm91bmREZXZpY2VzLmxlbmd0aCkge1xuICAgICAgICAgIGFwcGx5UGF0Y2goXG4gICAgICAgICAgICB0aGlzLl9leHRyYUluZm8sXG4gICAgICAgICAgICBbdHlwZSwgcGxhY2Vob2xkZXIuaW5kZXgsIFwiZGV2aWNlX2lkc1wiXSxcbiAgICAgICAgICAgIGZvdW5kRGV2aWNlcy5tYXAoKGRldmljZSkgPT4gZGV2aWNlLmlkKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKFwiX2V4dHJhSW5mb1wiKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2lzRG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5wbGFjZWhvbGRlcnMpLmV2ZXJ5KChbdHlwZSwgcGxhY2Vob2xkZXJzXSkgPT5cbiAgICAgIHBsYWNlaG9sZGVycy5ldmVyeSgocGxhY2Vob2xkZXIpID0+XG4gICAgICAgIHBsYWNlaG9sZGVyLmZpZWxkcy5ldmVyeSgoZmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyaWVzOiB7XG4gICAgICAgICAgICBba2V5OiBudW1iZXJdOiB7IGRldmljZV9pZD86IHN0cmluZzsgZW50aXR5X2lkPzogc3RyaW5nIH07XG4gICAgICAgICAgfSA9IGdldFBhdGgodGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXMsIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleF0pO1xuICAgICAgICAgIGlmICghZW50cmllcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGVudHJpZXMpO1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMuZXZlcnkoXG4gICAgICAgICAgICAoZW50cnkpID0+IGVudHJ5W2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIGVudHJ5W2ZpZWxkXSAhPT0gXCJcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsKGRvbWFpbnM6IHN0cmluZ1tdLCBkZXZpY2VDbGFzc2VzPzogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gYCR7ZG9tYWluc1xuICAgICAgLm1hcCgoZG9tYWluKSA9PiB0aGlzLm9wcC5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApKVxuICAgICAgLmpvaW4oXCIsIFwiKX0ke1xuICAgICAgZGV2aWNlQ2xhc3NlcyA/IGAgb2YgdHlwZSAke2RldmljZUNsYXNzZXMuam9pbihcIiwgXCIpfWAgOiBcIlwiXG4gICAgfWA7XG4gIH1cblxuICBwcml2YXRlIF9kZXZpY2VQaWNrZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRhcmdldC5wbGFjZWhvbGRlciBhcyBQbGFjZWhvbGRlcjtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0LnR5cGU7XG5cbiAgICBsZXQgb2xkVmFsdWVzID0gZ2V0UGF0aCh0aGlzLl9wbGFjZWhvbGRlclZhbHVlcywgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4XSk7XG4gICAgaWYgKG9sZFZhbHVlcykge1xuICAgICAgb2xkVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhvbGRWYWx1ZXMpO1xuICAgIH1cbiAgICBjb25zdCBvbGRFeHRyYUluZm8gPSBnZXRQYXRoKHRoaXMuX2V4dHJhSW5mbywgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4XSk7XG5cbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXNbdHlwZV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlc1t0eXBlXVtwbGFjZWhvbGRlci5pbmRleF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V4dHJhSW5mb1t0eXBlXSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2V4dHJhSW5mb1t0eXBlXVtwbGFjZWhvbGRlci5pbmRleF07XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9wbGFjZWhvbGRlclZhbHVlc1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZS5mb3JFYWNoKChkZXZpY2VJZCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBvbGRJbmRleDtcbiAgICAgIGlmIChvbGRWYWx1ZXMpIHtcbiAgICAgICAgY29uc3Qgb2xkRGV2aWNlID0gb2xkVmFsdWVzLmZpbmQoKG9sZFZhbCwgaWR4KSA9PiB7XG4gICAgICAgICAgb2xkSW5kZXggPSBpZHg7XG4gICAgICAgICAgcmV0dXJuIG9sZFZhbC5kZXZpY2VfaWQgPT09IGRldmljZUlkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2xkRGV2aWNlKSB7XG4gICAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzLFxuICAgICAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleF0sXG4gICAgICAgICAgICBvbGREZXZpY2VcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChvbGRFeHRyYUluZm8pIHtcbiAgICAgICAgICAgIGFwcGx5UGF0Y2goXG4gICAgICAgICAgICAgIHRoaXMuX2V4dHJhSW5mbyxcbiAgICAgICAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleF0sXG4gICAgICAgICAgICAgIG9sZEV4dHJhSW5mb1tvbGRJbmRleF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhcHBseVBhdGNoKFxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlcyxcbiAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBpbmRleCwgXCJkZXZpY2VfaWRcIl0sXG4gICAgICAgIGRldmljZUlkXG4gICAgICApO1xuXG4gICAgICBpZiAoIXBsYWNlaG9sZGVyLmZpZWxkcy5pbmNsdWRlcyhcImVudGl0eV9pZFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldkVudGl0aWVzID0gdGhpcy5fZGV2aWNlRW50aXR5TG9va3VwW2RldmljZUlkXTtcblxuICAgICAgY29uc3QgZW50aXRpZXMgPSBkZXZFbnRpdGllcy5maWx0ZXIoKGVpZCkgPT4ge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXIuZGV2aWNlX2NsYXNzZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMub3BwLnN0YXRlc1tlaWRdO1xuICAgICAgICAgIGlmICghc3RhdGVPYmopIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlaWQpKSAmJlxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgJiZcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLmRldmljZV9jbGFzc2VzLmluY2x1ZGVzKFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZV9jbGFzc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZURvbWFpbihlaWQpKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiBiZWNhdXNlIHdlIGZpbHRlciB0aGUgZGV2aWNlIHBpY2tlciBvbiBkb21haW5cbiAgICAgICAgdGhpcy5fZXJyb3IgPSBgTm8gJHtwbGFjZWhvbGRlci5kb21haW5zXG4gICAgICAgICAgLm1hcCgoZG9tYWluKSA9PiB0aGlzLm9wcC5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApKVxuICAgICAgICAgIC5qb2luKFwiLCBcIil9IGVudGl0aWVzIGZvdW5kIGluIHRoaXMgZGV2aWNlLmA7XG4gICAgICB9IGVsc2UgaWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBhcHBseVBhdGNoKFxuICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWVzLFxuICAgICAgICAgIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleCwgaW5kZXgsIFwiZW50aXR5X2lkXCJdLFxuICAgICAgICAgIGVudGl0aWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9wbGFjZWhvbGRlclZhbHVlc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlc1t0eXBlXVtwbGFjZWhvbGRlci5pbmRleF1baW5kZXhdXG4gICAgICAgICAgLmVudGl0eV9pZDtcbiAgICAgICAgYXBwbHlQYXRjaChcbiAgICAgICAgICB0aGlzLl9leHRyYUluZm8sXG4gICAgICAgICAgW3R5cGUsIHBsYWNlaG9sZGVyLmluZGV4LCBcIm1hbnVhbEVudGl0eVwiLCBpbmRleF0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoXCJfcGxhY2Vob2xkZXJWYWx1ZXNcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaXJlRXZlbnQoXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJvcC1wYXBlci1kaWFsb2dcIikhIGFzIEhUTUxFbGVtZW50LFxuICAgICAgXCJpcm9uLXJlc2l6ZVwiXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VudGl0eVBpY2tlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQgYXMgYW55O1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGFyZ2V0LnBsYWNlaG9sZGVyIGFzIFBsYWNlaG9sZGVyO1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHR5cGUgPSB0YXJnZXQudHlwZTtcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleCB8fCAwO1xuICAgIGFwcGx5UGF0Y2goXG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlcyxcbiAgICAgIFt0eXBlLCBwbGFjZWhvbGRlci5pbmRleCwgaW5kZXgsIFwiZW50aXR5X2lkXCJdLFxuICAgICAgdmFsdWVcbiAgICApO1xuICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9wbGFjZWhvbGRlclZhbHVlc1wiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RvbmUoKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwicGxhY2Vob2xkZXJzLWZpbGxlZFwiLCB7IHZhbHVlOiB0aGlzLl9wbGFjZWhvbGRlclZhbHVlcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICAvLyBUaGUgb3BlbmVkLWNoYW5nZWQgZXZlbnQgZG9lc24ndCBsZWF2ZSB0aGUgc2hhZG93ZG9tIHNvIHdlIHJlLWRpc3BhdGNoIGl0XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldi50eXBlLCBldikpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcFN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBvcC1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbi5sZWZ0IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC10aGluZ3RhbGstcGxhY2Vob2xkZXJzXCI6IFRoaW5nVGFsa1BsYWNlaG9sZGVycztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUFXQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3QkE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBO0FBQUE7QUFBQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUF4SUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7OztBQU9BOzs7Ozs7QUFPQTs7Ozs7QUF1SEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBdkpBO0FBQUE7QUFBQTtBQUFBO0FBMEpBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXhLQTtBQUFBO0FBQUE7QUFBQTtBQTJLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7OztBQUZBO0FBVkE7QUFrQkE7QUFDQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBU0E7O0FBR0E7Ozs7QUFNQTs7Ozs7QUFUQTtBQWdCQTs7QUFHQTs7O0FBS0E7Ozs7QUFSQTs7O0FBZ0JBOzs7QUFyREE7QUF5REE7QUFuUUE7QUFBQTtBQUFBO0FBQUE7QUFzUUE7QUFDQTtBQUFBO0FBQ0E7QUF4UUE7QUFBQTtBQUFBO0FBQUE7QUEyUUE7QUFDQTtBQTVRQTtBQUFBO0FBQUE7QUFBQTtBQStRQTtBQUNBO0FBaFJBO0FBQUE7QUFBQTtBQUFBO0FBbVJBO0FBQ0E7QUFwUkE7QUFBQTtBQUFBO0FBQUE7QUF1UkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBalNBO0FBQUE7QUFBQTtBQUFBO0FBb1NBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2U0E7QUFBQTtBQUFBO0FBQUE7QUEwU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaFRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtVEE7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBOVRBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQU9BO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7OztBQU9BO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBOzs7Ozs7O0FBbEJBOzs7Ozs7QUFPQTs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBWkE7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXpCQTtBQTZCQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXZHQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFPQTtBQUNBO0FBY0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7O0FBQUE7Ozs7O0FBQ0E7Ozs7QUFBQTs7Ozs7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFQQTtBQVdBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBRUE7QUFGQTs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7QUExREE7QUFrRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7OztBQWpPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFXQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFxQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUF6Q0E7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBaERBO0FBQUE7QUFBQTtBQUFBO0FBbURBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBRUE7QUFGQTtBQUtBOztBQUlBOztBQUlBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7QUFNQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFHQTtBQUdBOztBQTdCQTtBQU5BO0FBakJBO0FBMkRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFjQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFHQTtBQUhBOztBQUpBO0FBWUE7QUFyR0E7OztBQTBHQTs7O0FBR0E7Ozs7O0FBM0hBO0FBaUlBO0FBcExBO0FBQUE7QUFBQTtBQUFBO0FBdUxBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9MQTtBQUFBO0FBQUE7QUFBQTtBQWtNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUF6T0E7QUFBQTtBQUFBO0FBQUE7QUE0T0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQTVQQTtBQUFBO0FBQUE7QUFBQTtBQStQQTtBQUtBO0FBcFFBO0FBQUE7QUFBQTtBQUFBO0FBdVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBblhBO0FBQUE7QUFBQTtBQUFBO0FBc1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFqWUE7QUFBQTtBQUFBO0FBQUE7QUFvWUE7QUFBQTtBQUFBO0FBQ0E7QUFyWUE7QUFBQTtBQUFBO0FBQUE7QUF3WUE7QUFDQTtBQUNBO0FBMVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2WUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFsYUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=