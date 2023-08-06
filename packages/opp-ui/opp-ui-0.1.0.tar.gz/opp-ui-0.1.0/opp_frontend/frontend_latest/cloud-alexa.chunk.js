(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa"],{

/***/ "./src/panels/config/cloud/alexa/cloud-alexa.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/alexa/cloud-alexa.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
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



const DEFAULT_CONFIG_EXPOSE = true;
const IGNORE_INTERFACES = ["Alexa.EndpointHealth"];

const configIsExposed = config => config.should_expose === undefined ? DEFAULT_CONFIG_EXPOSE : config.should_expose;

let CloudAlexa = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("cloud-alexa")], function (_initialize, _LitElement) {
  class CloudAlexa extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudAlexa,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "cloudStatus",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entities",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entityConfigs",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "_popstateSyncAttached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_popstateReloadStatusAttached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_isInitialExposed",
      value: void 0
    }, {
      kind: "field",
      key: "_getEntityFilterFunc",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(filter => Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities));
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this._entities === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <opp-loading-screen></opp-loading-screen>
      `;
        }

        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__["isEmptyFilter"])(this.cloudStatus.alexa_entities);

        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.alexa_entities); // We will only generate `isInitialExposed` during first render.
        // On each subsequent render we will use the same set so that cards
        // will not jump around when we change the exposed setting.


        const showInExposed = this._isInitialExposed || new Set();
        const trackExposed = this._isInitialExposed === undefined;
        let selected = 0; // On first render we decide which cards show in which category.
        // That way cards won't jump around when changing values.

        const exposedCards = [];
        const notExposedCards = [];

        this._entities.forEach(entity => {
          const stateObj = this.opp.states[entity.entity_id];
          const config = this._entityConfigs[entity.entity_id] || {};
          const isExposed = emptyFilter ? configIsExposed(config) : filterFunc(entity.entity_id);

          if (isExposed) {
            selected++;

            if (trackExposed) {
              showInExposed.add(entity.entity_id);
            }
          }

          const target = showInExposed.has(entity.entity_id) ? exposedCards : notExposedCards;
          target.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <op-card>
          <div class="card-content">
            <state-info
              .opp=${this.opp}
              .stateObj=${stateObj}
              secondary-line
              @click=${this._showMoreInfo}
            >
              ${entity.interfaces.filter(ifc => !IGNORE_INTERFACES.includes(ifc)).map(ifc => ifc.replace("Alexa.", "").replace("Controller", "")).join(", ")}
            </state-info>
            <op-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.opp.localize("ui.panel.config.cloud.alexa.expose")}
            </op-switch>
          </div>
        </op-card>
      `);
        });

        if (trackExposed) {
          this._isInitialExposed = showInExposed;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-subpage header="${this.opp.localize("ui.panel.config.cloud.alexa.title")}">
        <span slot="toolbar-icon">
          ${selected}${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            selected
          ` : ""}
        </span>
        ${emptyFilter ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <paper-icon-button
                  slot="toolbar-icon"
                  icon="opp:tune"
                  @click=${this._openDomainToggler}
                ></paper-icon-button>
              ` : ""}
        ${!emptyFilter ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="banner">
                  ${this.opp.localize("ui.panel.config.cloud.alexa.banner")}
                </div>
              ` : ""}
          ${exposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>
                    ${this.opp.localize("ui.panel.config.cloud.alexa.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                ` : ""}
          ${notExposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>
                    ${this.opp.localize("ui.panel.config.cloud.alexa.not_exposed_entities")}
                  </h1>
                  <div class="content">${notExposedCards}</div>
                ` : ""}
        </div>
      </opp-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(CloudAlexa.prototype), "firstUpdated", this).call(this, changedProps);

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(CloudAlexa.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          this._entityConfigs = this.cloudStatus.prefs.alexa_entity_configs;
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        const entities = await Object(_data_alexa__WEBPACK_IMPORTED_MODULE_13__["fetchCloudAlexaEntities"])(this.opp);
        entities.sort((a, b) => {
          const stateA = this.opp.states[a.entity_id];
          const stateB = this.opp.states[b.entity_id];
          return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_14__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_14__["computeStateName"])(stateB) : b.entity_id);
        });
        this._entities = entities;
      }
    }, {
      kind: "method",
      key: "_showMoreInfo",
      value: function _showMoreInfo(ev) {
        const entityId = ev.currentTarget.stateObj.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this, "opp-more-info", {
          entityId
        });
      }
    }, {
      kind: "method",
      key: "_exposeChanged",
      value: async function _exposeChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newExposed = ev.target.checked;
        await this._updateExposed(entityId, newExposed);
      }
    }, {
      kind: "method",
      key: "_updateExposed",
      value: async function _updateExposed(entityId, newExposed) {
        const curExposed = configIsExposed(this._entityConfigs[entityId] || {});

        if (newExposed === curExposed) {
          return;
        }

        await this._updateConfig(entityId, {
          should_expose: newExposed
        });

        this._ensureEntitySync();
      }
    }, {
      kind: "method",
      key: "_updateConfig",
      value: async function _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["updateCloudAlexaEntityConfig"])(this.opp, entityId, values);
        this._entityConfigs = Object.assign({}, this._entityConfigs, {
          [entityId]: updatedConfig
        });

        this._ensureStatusReload();
      }
    }, {
      kind: "method",
      key: "_openDomainToggler",
      value: function _openDomainToggler() {
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_12__["showDomainTogglerDialog"])(this, {
          domains: this._entities.map(entity => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__["computeDomain"])(entity.entity_id)).filter((value, idx, self) => self.indexOf(value) === idx),
          toggleDomain: (domain, turnOn) => {
            this._entities.forEach(entity => {
              if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_15__["computeDomain"])(entity.entity_id) === domain) {
                this._updateExposed(entity.entity_id, turnOn);
              }
            });
          }
        });
      }
    }, {
      kind: "method",
      key: "_ensureStatusReload",
      value: function _ensureStatusReload() {
        if (this._popstateReloadStatusAttached) {
          return;
        }

        this._popstateReloadStatusAttached = true; // Cache parent because by the time popstate happens,
        // this element is detached

        const parent = this.parentElement;
        window.addEventListener("popstate", () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(parent, "op-refresh-cloud-status"), {
          once: true
        });
      }
    }, {
      kind: "method",
      key: "_ensureEntitySync",
      value: function _ensureEntitySync() {
        if (this._popstateSyncAttached) {
          return;
        }

        this._popstateSyncAttached = true; // Cache parent because by the time popstate happens,
        // this element is detached
        // const parent = this.parentElement!;

        window.addEventListener("popstate", () => {// We don't have anything yet.
          // showToast(parent, { message: "Synchronizing changes to Google." });
          // cloudSyncGoogleAssistant(this.opp);
        }, {
          once: true
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .banner {
        color: var(--primary-text-color);
        background-color: var(
          --op-card-background,
          var(--paper-card-background-color, white)
        );
        padding: 16px 8px;
        text-align: center;
      }
      h1 {
        color: var(--primary-text-color);
        font-size: 24px;
        letter-spacing: -0.012em;
        margin-bottom: 0;
        padding: 0 8px;
      }
      .content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 8px 8px;
        padding: 8px;
      }
      op-switch {
        clear: both;
      }
      .card-content {
        padding-bottom: 12px;
      }
      state-info {
        cursor: pointer;
      }
      op-switch {
        padding: 8px 0;
      }

      @media all and (max-width: 450px) {
        op-card {
          max-width: 100%;
        }
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hbGV4YS9jbG91ZC1hbGV4YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9vcHAtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9vcHAtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1zd2l0Y2hcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbiAgQ2xvdWRQcmVmZXJlbmNlcyxcbiAgdXBkYXRlQ2xvdWRBbGV4YUVudGl0eUNvbmZpZyxcbiAgQWxleGFFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUZpbHRlcixcbiAgaXNFbXB0eUZpbHRlcixcbiAgRW50aXR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGlhbG9ncy9kb21haW4tdG9nZ2xlci9zaG93LWRpYWxvZy1kb21haW4tdG9nZ2xlclwiO1xuaW1wb3J0IHsgQWxleGFFbnRpdHksIGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvYWxleGFcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvb3Atc3dpdGNoXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuXG5jb25zdCBERUZBVUxUX0NPTkZJR19FWFBPU0UgPSB0cnVlO1xuY29uc3QgSUdOT1JFX0lOVEVSRkFDRVMgPSBbXCJBbGV4YS5FbmRwb2ludEhlYWx0aFwiXTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogQWxleGFFbnRpdHlDb25maWcpID0+XG4gIGNvbmZpZy5zaG91bGRfZXhwb3NlID09PSB1bmRlZmluZWRcbiAgICA/IERFRkFVTFRfQ09ORklHX0VYUE9TRVxuICAgIDogY29uZmlnLnNob3VsZF9leHBvc2U7XG5cbkBjdXN0b21FbGVtZW50KFwiY2xvdWQtYWxleGFcIilcbmNsYXNzIENsb3VkQWxleGEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGNsb3VkU3RhdHVzITogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzPzogQWxleGFFbnRpdHlbXTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9lbnRpdHlDb25maWdzOiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfZW50aXR5X2NvbmZpZ3NcIl0gPSB7fTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0luaXRpYWxFeHBvc2VkPzogU2V0PHN0cmluZz47XG5cbiAgcHJpdmF0ZSBfZ2V0RW50aXR5RmlsdGVyRnVuYyA9IG1lbW9pemVPbmUoKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICAgIGdlbmVyYXRlRmlsdGVyKFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzXG4gICAgKVxuICApO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICh0aGlzLl9lbnRpdGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPG9wcC1sb2FkaW5nLXNjcmVlbj48L29wcC1sb2FkaW5nLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5RmlsdGVyID0gaXNFbXB0eUZpbHRlcih0aGlzLmNsb3VkU3RhdHVzLmFsZXhhX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuYWxleGFfZW50aXRpZXNcbiAgICApO1xuXG4gICAgLy8gV2Ugd2lsbCBvbmx5IGdlbmVyYXRlIGBpc0luaXRpYWxFeHBvc2VkYCBkdXJpbmcgZmlyc3QgcmVuZGVyLlxuICAgIC8vIE9uIGVhY2ggc3Vic2VxdWVudCByZW5kZXIgd2Ugd2lsbCB1c2UgdGhlIHNhbWUgc2V0IHNvIHRoYXQgY2FyZHNcbiAgICAvLyB3aWxsIG5vdCBqdW1wIGFyb3VuZCB3aGVuIHdlIGNoYW5nZSB0aGUgZXhwb3NlZCBzZXR0aW5nLlxuICAgIGNvbnN0IHNob3dJbkV4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkIHx8IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0cmFja0V4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID09PSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSAwO1xuXG4gICAgLy8gT24gZmlyc3QgcmVuZGVyIHdlIGRlY2lkZSB3aGljaCBjYXJkcyBzaG93IGluIHdoaWNoIGNhdGVnb3J5LlxuICAgIC8vIFRoYXQgd2F5IGNhcmRzIHdvbid0IGp1bXAgYXJvdW5kIHdoZW4gY2hhbmdpbmcgdmFsdWVzLlxuICAgIGNvbnN0IGV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuICAgIGNvbnN0IG5vdEV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMub3BwLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2VudGl0eUNvbmZpZ3NbZW50aXR5LmVudGl0eV9pZF0gfHwge307XG4gICAgICBjb25zdCBpc0V4cG9zZWQgPSBlbXB0eUZpbHRlclxuICAgICAgICA/IGNvbmZpZ0lzRXhwb3NlZChjb25maWcpXG4gICAgICAgIDogZmlsdGVyRnVuYyhlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgIGlmIChpc0V4cG9zZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQrKztcblxuICAgICAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICAgICAgc2hvd0luRXhwb3NlZC5hZGQoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2hvd0luRXhwb3NlZC5oYXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgPyBleHBvc2VkQ2FyZHNcbiAgICAgICAgOiBub3RFeHBvc2VkQ2FyZHM7XG5cbiAgICAgIHRhcmdldC5wdXNoKGh0bWxgXG4gICAgICAgIDxvcC1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgIHNlY29uZGFyeS1saW5lXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtlbnRpdHkuaW50ZXJmYWNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlmYykgPT4gIUlHTk9SRV9JTlRFUkZBQ0VTLmluY2x1ZGVzKGlmYykpXG4gICAgICAgICAgICAgICAgLm1hcCgoaWZjKSA9PlxuICAgICAgICAgICAgICAgICAgaWZjLnJlcGxhY2UoXCJBbGV4YS5cIiwgXCJcIikucmVwbGFjZShcIkNvbnRyb2xsZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWVtcHR5RmlsdGVyfVxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke2lzRXhwb3NlZH1cbiAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2V4cG9zZUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLmV4cG9zZVwiKX1cbiAgICAgICAgICAgIDwvb3Atc3dpdGNoPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L29wLWNhcmQ+XG4gICAgICBgKTtcbiAgICB9KTtcblxuICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgIHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPSBzaG93SW5FeHBvc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wcC1zdWJwYWdlIGhlYWRlcj1cIiR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS50aXRsZVwiXG4gICAgICApfVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwidG9vbGJhci1pY29uXCI+XG4gICAgICAgICAgJHtzZWxlY3RlZH0ke1xuICAgICAgIXRoaXMubmFycm93XG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIHNlbGVjdGVkXG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJcbiAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgJHtcbiAgICAgICAgICBlbXB0eUZpbHRlclxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwib3BwOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWxleGEuYmFubmVyXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBleHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLmV4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm9wcCEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWxleGEubm90X2V4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtub3RFeHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcHAtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpKSB7XG4gICAgICB0aGlzLl9lbnRpdHlDb25maWdzID0gdGhpcy5jbG91ZFN0YXR1cy5wcmVmcy5hbGV4YV9lbnRpdHlfY29uZmlncztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCBmZXRjaENsb3VkQWxleGFFbnRpdGllcyh0aGlzLm9wcCk7XG4gICAgZW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVBID0gdGhpcy5vcHAuc3RhdGVzW2EuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IHN0YXRlQiA9IHRoaXMub3BwLnN0YXRlc1tiLmVudGl0eV9pZF07XG4gICAgICByZXR1cm4gY29tcGFyZShcbiAgICAgICAgc3RhdGVBID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUEpIDogYS5lbnRpdHlfaWQsXG4gICAgICAgIHN0YXRlQiA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVCKSA6IGIuZW50aXR5X2lkXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXYpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IGV2LmN1cnJlbnRUYXJnZXQuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4cG9zZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGNvbnN0IG5ld0V4cG9zZWQgPSAoZXYudGFyZ2V0IGFzIE9wU3dpdGNoKS5jaGVja2VkO1xuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQsIG5ld0V4cG9zZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRXhwb3NlZChlbnRpdHlJZDogc3RyaW5nLCBuZXdFeHBvc2VkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY3VyRXhwb3NlZCA9IGNvbmZpZ0lzRXhwb3NlZCh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSk7XG4gICAgaWYgKG5ld0V4cG9zZWQgPT09IGN1ckV4cG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlQ29uZmlnKGVudGl0eUlkLCB7XG4gICAgICBzaG91bGRfZXhwb3NlOiBuZXdFeHBvc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuX2Vuc3VyZUVudGl0eVN5bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZDogc3RyaW5nLCB2YWx1ZXM6IEFsZXhhRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcoXG4gICAgICB0aGlzLm9wcCxcbiAgICAgIGVudGl0eUlkLFxuICAgICAgdmFsdWVzXG4gICAgKTtcbiAgICB0aGlzLl9lbnRpdHlDb25maWdzID0ge1xuICAgICAgLi4udGhpcy5fZW50aXR5Q29uZmlncyxcbiAgICAgIFtlbnRpdHlJZF06IHVwZGF0ZWRDb25maWcsXG4gICAgfTtcbiAgICB0aGlzLl9lbnN1cmVTdGF0dXNSZWxvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5Eb21haW5Ub2dnbGVyKCkge1xuICAgIHNob3dEb21haW5Ub2dnbGVyRGlhbG9nKHRoaXMsIHtcbiAgICAgIGRvbWFpbnM6IHRoaXMuX2VudGl0aWVzIS5tYXAoKGVudGl0eSkgPT5cbiAgICAgICAgY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgKS5maWx0ZXIoKHZhbHVlLCBpZHgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGlkeCksXG4gICAgICB0b2dnbGVEb21haW46IChkb21haW4sIHR1cm5PbikgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdGllcyEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IGRvbWFpbikge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRXhwb3NlZChlbnRpdHkuZW50aXR5X2lkLCB0dXJuT24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlU3RhdHVzUmVsb2FkKCkge1xuICAgIGlmICh0aGlzLl9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQgPSB0cnVlO1xuICAgIC8vIENhY2hlIHBhcmVudCBiZWNhdXNlIGJ5IHRoZSB0aW1lIHBvcHN0YXRlIGhhcHBlbnMsXG4gICAgLy8gdGhpcyBlbGVtZW50IGlzIGRldGFjaGVkXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50ITtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicG9wc3RhdGVcIixcbiAgICAgICgpID0+IGZpcmVFdmVudChwYXJlbnQsIFwib3AtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIiksXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVFbnRpdHlTeW5jKCkge1xuICAgIGlmICh0aGlzLl9wb3BzdGF0ZVN5bmNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICAvLyBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGFueXRoaW5nIHlldC5cbiAgICAgICAgLy8gc2hvd1RvYXN0KHBhcmVudCwgeyBtZXNzYWdlOiBcIlN5bmNocm9uaXppbmcgY2hhbmdlcyB0byBHb29nbGUuXCIgfSk7XG4gICAgICAgIC8vIGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCh0aGlzLm9wcCk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1vcC1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIGdyaWQtZ2FwOiA4cHggOHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICBvcC1zd2l0Y2gge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBvcC1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgb3AtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGFcIjogQ2xvdWRBbGV4YTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBdEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7O0FBQ0E7O0FBUUE7Ozs7QUFLQTs7QUFMQTtBQVdBOztBQUdBOztBQUhBO0FBU0E7O0FBR0E7O0FBSUE7QUFQQTtBQVlBOztBQUdBOztBQUlBO0FBUEE7OztBQTlDQTtBQTREQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQ0E7OztBQTFUQTs7OztBIiwic291cmNlUm9vdCI6IiJ9