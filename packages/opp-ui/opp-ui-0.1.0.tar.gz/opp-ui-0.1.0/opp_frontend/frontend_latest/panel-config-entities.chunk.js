(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-entities"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = cb => {
  requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
  return new Promise(resolve => {
    afterNextRender(resolve);
  });
};

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (opp, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = opp.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (opp, entityId, updates) => opp.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (opp, entityId) => opp.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/panels/config/entities/op-config-entities.ts":
/*!**********************************************************!*\
  !*** ./src/panels/config/entities/op-config-entities.ts ***!
  \**********************************************************/
/*! exports provided: OpConfigEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpConfigEntities", function() { return OpConfigEntities; });
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _layouts_opp_tabs_subpage_data_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage-data-table */ "./src/layouts/opp-tabs-subpage-data-table.ts");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./show-dialog-entity-registry-detail */ "./src/panels/config/entities/show-dialog-entity-registry-detail.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
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






















 // tslint:disable-next-line: no-duplicate-imports

let OpConfigEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("op-config-entities")], function (_initialize, _SubscribeMixin) {
  class OpConfigEntities extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigEntities,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showDisabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showUnavailable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_showReadOnly",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()],
      key: "_selectedEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["query"])("opp-tabs-subpage-data-table")],
      key: "_dataTable",
      value: void 0
    }, {
      kind: "field",
      key: "getDialog",
      value: void 0
    }, {
      kind: "field",
      key: "_columns",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])((narrow, _language) => {
          const columns = {
            icon: {
              title: "",
              type: "icon",
              template: icon => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            <op-icon slot="item-icon" .icon=${icon}></op-icon>
          `
            },
            name: {
              title: this.opp.localize("ui.panel.config.entities.picker.headers.name"),
              sortable: true,
              filterable: true,
              direction: "asc"
            }
          };
          const statusColumn = {
            title: this.opp.localize("ui.panel.config.entities.picker.headers.status"),
            type: "icon",
            sortable: true,
            filterable: true,
            template: (_status, entity) => entity.unavailable || entity.disabled_by || entity.readonly ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                <div
                  tabindex="0"
                  style="display:inline-block; position: relative;"
                >
                  <op-icon
                    style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_6__["styleMap"])({
              color: entity.unavailable ? "var(--google-red-500)" : ""
            })}
                    .icon=${entity.unavailable ? "opp:alert-circle" : entity.disabled_by ? "opp:cancel" : "opp:pencil-off"}
                  ></op-icon>
                  <paper-tooltip position="left">
                    ${entity.unavailable ? this.opp.localize("ui.panel.config.entities.picker.status.unavailable") : entity.disabled_by ? this.opp.localize("ui.panel.config.entities.picker.status.disabled") : this.opp.localize("ui.panel.config.entities.picker.status.readonly")}
                  </paper-tooltip>
                </div>
              ` : ""
          };

          if (narrow) {
            columns.name.template = (name, entity) => {
              return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
            ${name}<br />
            ${entity.entity_id} |
            ${this.opp.localize(`component.${entity.platform}.config.title`) || entity.platform}
          `;
            };

            columns.status = statusColumn;
            return columns;
          }

          columns.entity_id = {
            title: this.opp.localize("ui.panel.config.entities.picker.headers.entity_id"),
            sortable: true,
            filterable: true
          };
          columns.platform = {
            title: this.opp.localize("ui.panel.config.entities.picker.headers.integration"),
            sortable: true,
            filterable: true,
            template: platform => this.opp.localize(`component.${platform}.config.title`) || platform
          };
          columns.status = statusColumn;
          return columns;
        });
      }

    }, {
      kind: "field",
      key: "_filteredEntities",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])((entities, states, showDisabled, showUnavailable, showReadOnly) => {
          const stateEntities = [];

          if (showReadOnly) {
            const regEntityIds = new Set(entities.map(entity => entity.entity_id));

            for (const entityId of Object.keys(states)) {
              if (regEntityIds.has(entityId)) {
                continue;
              }

              stateEntities.push({
                name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_21__["computeStateName"])(states[entityId]),
                entity_id: entityId,
                platform: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entityId),
                disabled_by: null,
                readonly: true,
                selectable: false
              });
            }
          }

          if (!showDisabled) {
            entities = entities.filter(entity => !Boolean(entity.disabled_by));
          }

          const result = [];

          for (const entry of entities.concat(stateEntities)) {
            const state = states[entry.entity_id];
            const unavailable = (state === null || state === void 0 ? void 0 : state.state) === "unavailable";

            if (!showUnavailable && unavailable) {
              continue;
            }

            result.push(Object.assign({}, entry, {
              icon: state ? Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_10__["stateIcon"])(state) : Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_9__["domainIcon"])(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entry.entity_id)),
              name: Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["computeEntityRegistryName"])(this.opp, entry) || this.opp.localize("state.default.unavailable"),
              unavailable,
              status: unavailable ? this.opp.localize("ui.panel.config.entities.picker.status.unavailable") : entry.disabled_by ? this.opp.localize("ui.panel.config.entities.picker.status.disabled") : this.opp.localize("ui.panel.config.entities.picker.status.ok")
            }));
          }

          return result;
        });
      }

    }, {
      kind: "method",
      key: "oppSubscribe",
      value: function oppSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["subscribeEntityRegistry"])(this.opp.connection, entities => {
          this._entities = entities;
        })];
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OpConfigEntities.prototype), "disconnectedCallback", this).call(this);

        if (!this.getDialog) {
          return;
        }

        const dialog = this.getDialog();

        if (!dialog) {
          return;
        }

        dialog.closeDialog();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || this._entities === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
        <opp-loading-screen></opp-loading-screen>
      `;
        }

        const headerToolbar = this._selectedEntities.length ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
          <p class="selected-txt">
            ${this.opp.localize("ui.panel.config.entities.picker.selected", "number", this._selectedEntities.length)}
          </p>
          <div class="header-btns">
            ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                  <mwc-button @click=${this._enableSelected}
                    >${this.opp.localize("ui.panel.config.entities.picker.enable_selected.button")}</mwc-button
                  >
                  <mwc-button @click=${this._disableSelected}
                    >${this.opp.localize("ui.panel.config.entities.picker.disable_selected.button")}</mwc-button
                  >
                  <mwc-button @click=${this._removeSelected}
                    >${this.opp.localize("ui.panel.config.entities.picker.remove_selected.button")}</mwc-button
                  >
                ` : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
                  <paper-icon-button
                    id="enable-btn"
                    icon="opp:undo"
                    @click=${this._enableSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="enable-btn">
                    ${this.opp.localize("ui.panel.config.entities.picker.enable_selected.button")}
                  </paper-tooltip>
                  <paper-icon-button
                    id="disable-btn"
                    icon="opp:cancel"
                    @click=${this._disableSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="disable-btn">
                    ${this.opp.localize("ui.panel.config.entities.picker.disable_selected.button")}
                  </paper-tooltip>
                  <paper-icon-button
                    id="remove-btn"
                    icon="opp:delete"
                    @click=${this._removeSelected}
                  ></paper-icon-button>
                  <paper-tooltip for="remove-btn">
                    ${this.opp.localize("ui.panel.config.entities.picker.remove_selected.button")}
                  </paper-tooltip>
                `}
          </div>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
          <search-input
            no-label-float
            no-underline
            @value-changed=${this._handleSearchChange}
            .filter=${this._filter}
          ></search-input>
          <paper-menu-button no-animations horizontal-align="right">
            <paper-icon-button
              aria-label=${this.opp.localize("ui.panel.config.entities.picker.filter.filter")}
              title="${this.opp.localize("ui.panel.config.entities.picker.filter.filter")}"
              icon="opp:filter-variant"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-icon-item @tap="${this._showDisabledChanged}">
                <paper-checkbox
                  .checked=${this._showDisabled}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.opp.localize("ui.panel.config.entities.picker.filter.show_disabled")}
              </paper-icon-item>
              <paper-icon-item @tap="${this._showRestoredChanged}">
                <paper-checkbox
                  .checked=${this._showUnavailable}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.opp.localize("ui.panel.config.entities.picker.filter.show_unavailable")}
              </paper-icon-item>
              <paper-icon-item @tap="${this._showReadOnlyChanged}">
                <paper-checkbox
                  .checked=${this._showReadOnly}
                  slot="item-icon"
                ></paper-checkbox>
                ${this.opp.localize("ui.panel.config.entities.picker.filter.show_readonly")}
              </paper-icon-item>
            </paper-listbox>
          </paper-menu-button>
        `;
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <opp-tabs-subpage-data-table
        .opp=${this.opp}
        .narrow=${this.narrow}
        back-path="/config"
        .route=${this.route}
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_19__["configSections"].integrations}
        .columns=${this._columns(this.narrow, this.opp.language)}
          .data=${this._filteredEntities(this._entities, this.opp.states, this._showDisabled, this._showUnavailable, this._showReadOnly)}
          .filter=${this._filter}
          selectable
          @selection-changed=${this._handleSelectionChanged}
          @row-click=${this._openEditEntry}
          id="entity_id"
      >
                <div class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_20__["classMap"])({
          "search-toolbar": this.narrow,
          "table-header": !this.narrow
        })} slot="header">
                  ${headerToolbar}
                </div>
        </op-data-table>
      </opp-tabs-subpage-data-table>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpConfigEntities.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_18__["loadEntityRegistryDetailDialog"])();
      }
    }, {
      kind: "method",
      key: "_showDisabledChanged",
      value: function _showDisabledChanged() {
        this._showDisabled = !this._showDisabled;
      }
    }, {
      kind: "method",
      key: "_showRestoredChanged",
      value: function _showRestoredChanged() {
        this._showUnavailable = !this._showUnavailable;
      }
    }, {
      kind: "method",
      key: "_showReadOnlyChanged",
      value: function _showReadOnlyChanged() {
        this._showReadOnly = !this._showReadOnly;
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._filter = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;

        if (changedSelection.selected) {
          this._selectedEntities = [...this._selectedEntities, entity];
        } else {
          this._selectedEntities = this._selectedEntities.filter(entityId => entityId !== entity);
        }
      }
    }, {
      kind: "method",
      key: "_enableSelected",
      value: function _enableSelected() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showConfirmationDialog"])(this, {
          title: this.opp.localize("ui.panel.config.entities.picker.enable_selected.confirm_title", "number", this._selectedEntities.length),
          text: this.opp.localize("ui.panel.config.entities.picker.enable_selected.confirm_text"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no"),
          confirm: () => {
            this._selectedEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["updateEntityRegistryEntry"])(this.opp, entity, {
              disabled_by: null
            }));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_disableSelected",
      value: function _disableSelected() {
        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showConfirmationDialog"])(this, {
          title: this.opp.localize("ui.panel.config.entities.picker.disable_selected.confirm_title", "number", this._selectedEntities.length),
          text: this.opp.localize("ui.panel.config.entities.picker.disable_selected.confirm_text"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no"),
          confirm: () => {
            this._selectedEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["updateEntityRegistryEntry"])(this.opp, entity, {
              disabled_by: "user"
            }));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_removeSelected",
      value: function _removeSelected() {
        const removeableEntities = this._selectedEntities.filter(entity => {
          const stateObj = this.opp.states[entity];
          return stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes.restored;
        });

        Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_14__["showConfirmationDialog"])(this, {
          title: this.opp.localize("ui.panel.config.entities.picker.remove_selected.confirm_title", "number", removeableEntities.length),
          text: this.opp.localize("ui.panel.config.entities.picker.remove_selected.confirm_text"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no"),
          confirm: () => {
            removeableEntities.forEach(entity => Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_13__["removeEntityRegistryEntry"])(this.opp, entity));

            this._clearSelection();
          }
        });
      }
    }, {
      kind: "method",
      key: "_clearSelection",
      value: function _clearSelection() {
        this._dataTable.clearSelection();
      }
    }, {
      kind: "method",
      key: "_openEditEntry",
      value: function _openEditEntry(ev) {
        const entityId = ev.detail.id;

        const entry = this._entities.find(entity => entity.entity_id === entityId);

        this.getDialog = Object(_show_dialog_entity_registry_detail__WEBPACK_IMPORTED_MODULE_18__["showEntityRegistryDetailDialog"])(this, {
          entry,
          entity_id: entityId
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["css"]`
      opp-loading-screen {
        --app-header-background-color: var(--sidebar-background-color);
        --app-header-text-color: var(--sidebar-text-color);
      }
      a {
        color: var(--primary-color);
      }
      h2 {
        margin-top: 0;
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
      p {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
      }
      op-data-table {
        width: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) op-data-table {
        height: calc(100vh - 65px);
        display: block;
      }
      op-switch {
        margin-top: 16px;
      }
      .table-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      }
      search-input {
        flex-grow: 1;
        position: relative;
        top: 2px;
      }
      .search-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-left: -24px;
        color: var(--secondary-text-color);
      }
      .selected-txt {
        font-weight: bold;
        padding-left: 16px;
      }
      .table-header .selected-txt {
        margin-top: 20px;
      }
      .search-toolbar .selected-txt {
        font-size: 16px;
      }
      .header-btns > mwc-button,
      .header-btns > paper-icon-button {
        margin: 8px;
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_17__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"]));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWVudGl0aWVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5X3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2VudGl0aWVzL29wLWNvbmZpZy1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWZ0ZXJOZXh0UmVuZGVyID0gKGNiOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHJlc29sdmUpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gb3BwLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIG9wcC5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jLCBPcHBFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IG1lbW9pemUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IHtcbiAgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyLFxuICBEYXRhVGFibGVDb2x1bW5EYXRhLFxuICBSb3dDbGlja2VkRXZlbnQsXG4gIFNlbGVjdGlvbkNoYW5nZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9vcC1kYXRhLXRhYmxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL29wLWljb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0XCI7XG5pbXBvcnQge1xuICBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lLFxuICBFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSxcbiAgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlybWF0aW9uRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL2RpYWxvZ3MvZ2VuZXJpYy9zaG93LWRpYWxvZy1ib3hcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERpYWxvZ0VudGl0eVJlZ2lzdHJ5RGV0YWlsIH0gZnJvbSBcIi4vZGlhbG9nLWVudGl0eS1yZWdpc3RyeS1kZXRhaWxcIjtcbmltcG9ydCB7XG4gIGxvYWRFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZyxcbiAgc2hvd0VudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1lbnRpdHktcmVnaXN0cnktZGV0YWlsXCI7XG5pbXBvcnQgeyBjb25maWdTZWN0aW9ucyB9IGZyb20gXCIuLi9vcC1wYW5lbC1jb25maWdcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBPcFRhYnNTdWJwYWdlRGF0YVRhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVFbnRpdHkgZXh0ZW5kcyBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgcmVhZG9ubHk/OiBib29sZWFuO1xuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSb3cgZXh0ZW5kcyBTdGF0ZUVudGl0eSB7XG4gIGljb246IHN0cmluZztcbiAgdW5hdmFpbGFibGU6IGJvb2xlYW47XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcIm9wLWNvbmZpZy1lbnRpdGllc1wiKVxuZXhwb3J0IGNsYXNzIE9wQ29uZmlnRW50aXRpZXMgZXh0ZW5kcyBTdWJzY3JpYmVNaXhpbihMaXRFbGVtZW50KSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllcz86IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2hvd0Rpc2FibGVkID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dVbmF2YWlsYWJsZSA9IHRydWU7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dSZWFkT25seSA9IHRydWU7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2ZpbHRlciA9IFwiXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG4gIEBxdWVyeShcIm9wcC10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVwiKVxuICBwcml2YXRlIF9kYXRhVGFibGUhOiBPcFRhYnNTdWJwYWdlRGF0YVRhYmxlO1xuICBwcml2YXRlIGdldERpYWxvZz86ICgpID0+IERpYWxvZ0VudGl0eVJlZ2lzdHJ5RGV0YWlsIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplKFxuICAgIChuYXJyb3csIF9sYW5ndWFnZSk6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7XG4gICAgICAgIGljb246IHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0eXBlOiBcImljb25cIixcbiAgICAgICAgICB0ZW1wbGF0ZTogKGljb24pID0+IGh0bWxgXG4gICAgICAgICAgICA8b3AtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgLmljb249JHtpY29ufT48L29wLWljb24+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5oZWFkZXJzLm5hbWVcIlxuICAgICAgICAgICksXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0dXNDb2x1bW46IERhdGFUYWJsZUNvbHVtbkRhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuaGVhZGVycy5zdGF0dXNcIlxuICAgICAgICApLFxuICAgICAgICB0eXBlOiBcImljb25cIixcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiAoX3N0YXR1cywgZW50aXR5OiBhbnkpID0+XG4gICAgICAgICAgZW50aXR5LnVuYXZhaWxhYmxlIHx8IGVudGl0eS5kaXNhYmxlZF9ieSB8fCBlbnRpdHkucmVhZG9ubHlcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wLWljb25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9JHtzdHlsZU1hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGVudGl0eS51bmF2YWlsYWJsZSA/IFwidmFyKC0tZ29vZ2xlLXJlZC01MDApXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgLmljb249JHtlbnRpdHkudW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICA/IFwib3BwOmFsZXJ0LWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBlbnRpdHkuZGlzYWJsZWRfYnlcbiAgICAgICAgICAgICAgICAgICAgICA/IFwib3BwOmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIm9wcDpwZW5jaWwtb2ZmXCJ9XG4gICAgICAgICAgICAgICAgICA+PC9vcC1pY29uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50aXR5LnVuYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnN0YXR1cy51bmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBlbnRpdHkuZGlzYWJsZWRfYnlcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuc3RhdHVzLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuc3RhdHVzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIixcbiAgICAgIH07XG5cbiAgICAgIGlmIChuYXJyb3cpIHtcbiAgICAgICAgY29sdW1ucy5uYW1lLnRlbXBsYXRlID0gKG5hbWUsIGVudGl0eTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAke25hbWV9PGJyIC8+XG4gICAgICAgICAgICAke2VudGl0eS5lbnRpdHlfaWR9IHxcbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoYGNvbXBvbmVudC4ke2VudGl0eS5wbGF0Zm9ybX0uY29uZmlnLnRpdGxlYCkgfHxcbiAgICAgICAgICAgICAgZW50aXR5LnBsYXRmb3JtfVxuICAgICAgICAgIGA7XG4gICAgICAgIH07XG4gICAgICAgIGNvbHVtbnMuc3RhdHVzID0gc3RhdHVzQ29sdW1uO1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICAgIH1cblxuICAgICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICAgIHRpdGxlOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuaGVhZGVycy5lbnRpdHlfaWRcIlxuICAgICAgICApLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLnBsYXRmb3JtID0ge1xuICAgICAgICB0aXRsZTogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmhlYWRlcnMuaW50ZWdyYXRpb25cIlxuICAgICAgICApLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6IChwbGF0Zm9ybSkgPT5cbiAgICAgICAgICB0aGlzLm9wcC5sb2NhbGl6ZShgY29tcG9uZW50LiR7cGxhdGZvcm19LmNvbmZpZy50aXRsZWApIHx8IHBsYXRmb3JtLFxuICAgICAgfTtcbiAgICAgIGNvbHVtbnMuc3RhdHVzID0gc3RhdHVzQ29sdW1uO1xuXG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG4gICk7XG5cbiAgcHJpdmF0ZSBfZmlsdGVyZWRFbnRpdGllcyA9IG1lbW9pemUoXG4gICAgKFxuICAgICAgZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIHN0YXRlczogT3BwRW50aXRpZXMsXG4gICAgICBzaG93RGlzYWJsZWQ6IGJvb2xlYW4sXG4gICAgICBzaG93VW5hdmFpbGFibGU6IGJvb2xlYW4sXG4gICAgICBzaG93UmVhZE9ubHk6IGJvb2xlYW5cbiAgICApOiBFbnRpdHlSb3dbXSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUVudGl0aWVzOiBTdGF0ZUVudGl0eVtdID0gW107XG4gICAgICBpZiAoc2hvd1JlYWRPbmx5KSB7XG4gICAgICAgIGNvbnN0IHJlZ0VudGl0eUlkcyA9IG5ldyBTZXQoXG4gICAgICAgICAgZW50aXRpZXMubWFwKChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgICk7XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5SWQgb2YgT2JqZWN0LmtleXMoc3RhdGVzKSkge1xuICAgICAgICAgIGlmIChyZWdFbnRpdHlJZHMuaGFzKGVudGl0eUlkKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlRW50aXRpZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlc1tlbnRpdHlJZF0pLFxuICAgICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgICAgICAgIHBsYXRmb3JtOiBjb21wdXRlRG9tYWluKGVudGl0eUlkKSxcbiAgICAgICAgICAgIGRpc2FibGVkX2J5OiBudWxsLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXNob3dEaXNhYmxlZCkge1xuICAgICAgICBlbnRpdGllcyA9IGVudGl0aWVzLmZpbHRlcigoZW50aXR5KSA9PiAhQm9vbGVhbihlbnRpdHkuZGlzYWJsZWRfYnkpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0OiBFbnRpdHlSb3dbXSA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudGl0aWVzLmNvbmNhdChzdGF0ZUVudGl0aWVzKSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICAgICAgICBjb25zdCB1bmF2YWlsYWJsZSA9IHN0YXRlPy5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiO1xuXG4gICAgICAgIGlmICghc2hvd1VuYXZhaWxhYmxlICYmIHVuYXZhaWxhYmxlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgLi4uZW50cnksXG4gICAgICAgICAgaWNvbjogc3RhdGVcbiAgICAgICAgICAgID8gc3RhdGVJY29uKHN0YXRlKVxuICAgICAgICAgICAgOiBkb21haW5JY29uKGNvbXB1dGVEb21haW4oZW50cnkuZW50aXR5X2lkKSksXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUodGhpcy5vcHAhLCBlbnRyeSkgfHxcbiAgICAgICAgICAgIHRoaXMub3BwLmxvY2FsaXplKFwic3RhdGUuZGVmYXVsdC51bmF2YWlsYWJsZVwiKSxcbiAgICAgICAgICB1bmF2YWlsYWJsZSxcbiAgICAgICAgICBzdGF0dXM6IHVuYXZhaWxhYmxlXG4gICAgICAgICAgICA/IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMudW5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IGVudHJ5LmRpc2FibGVkX2J5XG4gICAgICAgICAgICA/IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMuZGlzYWJsZWRcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHRoaXMub3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5zdGF0dXMub2tcIiksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgKTtcblxuICBwdWJsaWMgb3BwU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkodGhpcy5vcHAuY29ubmVjdGlvbiEsIChlbnRpdGllcykgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5nZXREaWFsb2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5nZXREaWFsb2coKTtcbiAgICBpZiAoIWRpYWxvZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaWFsb2cuY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5vcHAgfHwgdGhpcy5fZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxvcHAtbG9hZGluZy1zY3JlZW4+PC9vcHAtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJUb29sYmFyID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgID8gaHRtbGBcbiAgICAgICAgICA8cCBjbGFzcz1cInNlbGVjdGVkLXR4dFwiPlxuICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgIFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWJ0bnNcIj5cbiAgICAgICAgICAgICR7IXRoaXMubmFycm93XG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2VuYWJsZVNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZW5hYmxlX3NlbGVjdGVkLmJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9kaXNhYmxlU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5kaXNhYmxlX3NlbGVjdGVkLmJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9yZW1vdmVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLnJlbW92ZV9zZWxlY3RlZC5idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW5hYmxlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6dW5kb1wiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2VuYWJsZVNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBmb3I9XCJlbmFibGUtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmVuYWJsZV9zZWxlY3RlZC5idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlzYWJsZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwib3BwOmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2Rpc2FibGVTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgZm9yPVwiZGlzYWJsZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZGlzYWJsZV9zZWxlY3RlZC5idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVtb3ZlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fcmVtb3ZlU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIGZvcj1cInJlbW92ZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIucmVtb3ZlX3NlbGVjdGVkLmJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgOiBodG1sYFxuICAgICAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0XG4gICAgICAgICAgICBuby11bmRlcmxpbmVcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgLmZpbHRlcj0ke3RoaXMuX2ZpbHRlcn1cbiAgICAgICAgICA+PC9zZWFyY2gtaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uIG5vLWFuaW1hdGlvbnMgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZmlsdGVyLmZpbHRlclwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmZpbHRlci5maWx0ZXJcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIGljb249XCJvcHA6ZmlsdGVyLXZhcmlhbnRcIlxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gQHRhcD1cIiR7dGhpcy5fc2hvd0Rpc2FibGVkQ2hhbmdlZH1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fc2hvd0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZmlsdGVyLnNob3dfZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtIEB0YXA9XCIke3RoaXMuX3Nob3dSZXN0b3JlZENoYW5nZWR9XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX3Nob3dVbmF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmZpbHRlci5zaG93X3VuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBAdGFwPVwiJHt0aGlzLl9zaG93UmVhZE9ubHlDaGFuZ2VkfVwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9zaG93UmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5maWx0ZXIuc2hvd19yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgYDtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wcC10YWJzLXN1YnBhZ2UtZGF0YS10YWJsZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7Y29uZmlnU2VjdGlvbnMuaW50ZWdyYXRpb25zfVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3csIHRoaXMub3BwLmxhbmd1YWdlKX1cbiAgICAgICAgICAuZGF0YT0ke3RoaXMuX2ZpbHRlcmVkRW50aXRpZXMoXG4gICAgICAgICAgICB0aGlzLl9lbnRpdGllcyxcbiAgICAgICAgICAgIHRoaXMub3BwLnN0YXRlcyxcbiAgICAgICAgICAgIHRoaXMuX3Nob3dEaXNhYmxlZCxcbiAgICAgICAgICAgIHRoaXMuX3Nob3dVbmF2YWlsYWJsZSxcbiAgICAgICAgICAgIHRoaXMuX3Nob3dSZWFkT25seVxuICAgICAgICAgICl9XG4gICAgICAgICAgLmZpbHRlcj0ke3RoaXMuX2ZpbHRlcn1cbiAgICAgICAgICBzZWxlY3RhYmxlXG4gICAgICAgICAgQHNlbGVjdGlvbi1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VsZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICBAcm93LWNsaWNrPSR7dGhpcy5fb3BlbkVkaXRFbnRyeX1cbiAgICAgICAgICBpZD1cImVudGl0eV9pZFwiXG4gICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICAgIFwic2VhcmNoLXRvb2xiYXJcIjogdGhpcy5uYXJyb3csXG4gICAgICAgICAgICAgICAgICBcInRhYmxlLWhlYWRlclwiOiAhdGhpcy5uYXJyb3csXG4gICAgICAgICAgICAgICAgfSl9IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICR7aGVhZGVyVG9vbGJhcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9vcC1kYXRhLXRhYmxlPlxuICAgICAgPC9vcHAtdGFicy1zdWJwYWdlLWRhdGEtdGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgbG9hZEVudGl0eVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9zaG93RGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgIHRoaXMuX3Nob3dEaXNhYmxlZCA9ICF0aGlzLl9zaG93RGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIF9zaG93UmVzdG9yZWRDaGFuZ2VkKCkge1xuICAgIHRoaXMuX3Nob3dVbmF2YWlsYWJsZSA9ICF0aGlzLl9zaG93VW5hdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIF9zaG93UmVhZE9ubHlDaGFuZ2VkKCkge1xuICAgIHRoaXMuX3Nob3dSZWFkT25seSA9ICF0aGlzLl9zaG93UmVhZE9ubHk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTZWFyY2hDaGFuZ2UoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgdGhpcy5fZmlsdGVyID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VsZWN0aW9uQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VkU2VsZWN0aW9uID0gZXYuZGV0YWlsIGFzIFNlbGVjdGlvbkNoYW5nZWRFdmVudDtcbiAgICBjb25zdCBlbnRpdHkgPSBjaGFuZ2VkU2VsZWN0aW9uLmlkO1xuICAgIGlmIChjaGFuZ2VkU2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzID0gWy4uLnRoaXMuX3NlbGVjdGVkRW50aXRpZXMsIGVudGl0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMgPSB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmZpbHRlcihcbiAgICAgICAgKGVudGl0eUlkKSA9PiBlbnRpdHlJZCAhPT0gZW50aXR5XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2VuYWJsZVNlbGVjdGVkKCkge1xuICAgIHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgdGl0bGU6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5lbnRpdGllcy5waWNrZXIuZW5hYmxlX3NlbGVjdGVkLmNvbmZpcm1fdGl0bGVcIixcbiAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICksXG4gICAgICB0ZXh0OiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmVuYWJsZV9zZWxlY3RlZC5jb25maXJtX3RleHRcIlxuICAgICAgKSxcbiAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLm9wcC5sb2NhbGl6ZShcInVpLmNvbW1vbi55ZXNcIiksXG4gICAgICBkaXNtaXNzVGV4dDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21tb24ubm9cIiksXG4gICAgICBjb25maXJtOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PlxuICAgICAgICAgIHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAsIGVudGl0eSwge1xuICAgICAgICAgICAgZGlzYWJsZWRfYnk6IG51bGwsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlU2VsZWN0ZWQoKSB7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5kaXNhYmxlX3NlbGVjdGVkLmNvbmZpcm1fdGl0bGVcIixcbiAgICAgICAgXCJudW1iZXJcIixcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5sZW5ndGhcbiAgICAgICksXG4gICAgICB0ZXh0OiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuZW50aXRpZXMucGlja2VyLmRpc2FibGVfc2VsZWN0ZWQuY29uZmlybV90ZXh0XCJcbiAgICAgICksXG4gICAgICBjb25maXJtVGV4dDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMub3BwLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgY29uZmlybTogKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT5cbiAgICAgICAgICB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5KHRoaXMub3BwLCBlbnRpdHksIHtcbiAgICAgICAgICAgIGRpc2FibGVkX2J5OiBcInVzZXJcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9jbGVhclNlbGVjdGlvbigpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHJlbW92ZWFibGVFbnRpdGllcyA9IHRoaXMuX3NlbGVjdGVkRW50aXRpZXMuZmlsdGVyKChlbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5vcHAuc3RhdGVzW2VudGl0eV07XG4gICAgICByZXR1cm4gc3RhdGVPYmo/LmF0dHJpYnV0ZXMucmVzdG9yZWQ7XG4gICAgfSk7XG4gICAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyh0aGlzLCB7XG4gICAgICB0aXRsZTogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5yZW1vdmVfc2VsZWN0ZWQuY29uZmlybV90aXRsZVwiLFxuICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICByZW1vdmVhYmxlRW50aXRpZXMubGVuZ3RoXG4gICAgICApLFxuICAgICAgdGV4dDogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0aWVzLnBpY2tlci5yZW1vdmVfc2VsZWN0ZWQuY29uZmlybV90ZXh0XCJcbiAgICAgICksXG4gICAgICBjb25maXJtVGV4dDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgZGlzbWlzc1RleHQ6IHRoaXMub3BwLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgY29uZmlybTogKCkgPT4ge1xuICAgICAgICByZW1vdmVhYmxlRW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PlxuICAgICAgICAgIHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkodGhpcy5vcHAsIGVudGl0eSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9kYXRhVGFibGUuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5FZGl0RW50cnkoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9lbnRpdGllcyEuZmluZChcbiAgICAgIChlbnRpdHkpID0+IGVudGl0eS5lbnRpdHlfaWQgPT09IGVudGl0eUlkXG4gICAgKTtcbiAgICB0aGlzLmdldERpYWxvZyA9IHNob3dFbnRpdHlSZWdpc3RyeURldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRyeSxcbiAgICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBvcHAtbG9hZGluZy1zY3JlZW4ge1xuICAgICAgICAtLWFwcC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgLS1hcHAtaGVhZGVyLXRleHQtY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgIC0tcGFwZXItZm9udC1oZWFkbGluZV8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LWZhbWlseSk7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHZhcihcbiAgICAgICAgICAtLXBhcGVyLWZvbnQtc3ViaGVhZF8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIG9wLWRhdGEtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1kYXRhLXRhYmxlLWJvcmRlci13aWR0aDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpub3QoW25hcnJvd10pKSBvcC1kYXRhLXRhYmxlIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgb3Atc3dpdGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTIpO1xuICAgICAgfVxuICAgICAgc2VhcmNoLWlucHV0IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC10b29sYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZC10eHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgLnRhYmxlLWhlYWRlciAuc2VsZWN0ZWQtdHh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2gtdG9vbGJhciAuc2VsZWN0ZWQtdHh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmhlYWRlci1idG5zID4gbXdjLWJ1dHRvbixcbiAgICAgIC5oZWFkZXItYnRucyA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFSQTtBQWtCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVFBO0FBQ0E7QUFEQTtBQUdBOzs7QUFPQTs7O0FBakJBO0FBUkE7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQ0E7QUE3R0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXdIQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQVRBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBaExBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW9MQTtBQUVBO0FBQ0E7QUFFQTtBQXpMQTtBQUFBO0FBQUE7QUFBQTtBQTRMQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBck1BO0FBQUE7QUFBQTtBQUFBO0FBd01BO0FBQ0E7O0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBR0E7OztBQU9BO0FBRUE7QUFDQTs7QUFJQTtBQUNBOztBQUlBO0FBQ0E7O0FBYkE7Ozs7QUFzQkE7OztBQUdBOzs7OztBQU9BOzs7QUFHQTs7Ozs7QUFPQTs7O0FBR0E7O0FBSUE7O0FBM0RBOzs7O0FBa0VBO0FBQ0E7Ozs7QUFJQTtBQUdBOzs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBSUE7O0FBRUE7OztBQUdBOzs7O0FBeEdBO0FBZ0hBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBekJBO0FBOEJBO0FBM1ZBO0FBQUE7QUFBQTtBQUFBO0FBOFZBO0FBQ0E7QUFBQTtBQUNBO0FBaFdBO0FBQUE7QUFBQTtBQUFBO0FBbVdBO0FBQ0E7QUFwV0E7QUFBQTtBQUFBO0FBQUE7QUF1V0E7QUFDQTtBQXhXQTtBQUFBO0FBQUE7QUFBQTtBQTJXQTtBQUNBO0FBNVdBO0FBQUE7QUFBQTtBQUFBO0FBK1dBO0FBQ0E7QUFoWEE7QUFBQTtBQUFBO0FBQUE7QUFtWEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBNVhBO0FBQUE7QUFBQTtBQUFBO0FBK1hBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQWxCQTtBQW9CQTtBQW5aQTtBQUFBO0FBQUE7QUFBQTtBQXNaQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFsQkE7QUFvQkE7QUExYUE7QUFBQTtBQUFBO0FBQUE7QUE2YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBaEJBO0FBa0JBO0FBbmNBO0FBQUE7QUFBQTtBQUFBO0FBc2NBO0FBQ0E7QUF2Y0E7QUFBQTtBQUFBO0FBQUE7QUEwY0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBbGRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxZEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF3RUE7QUE3aEJBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9