(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-google-assistant"],{

/***/ "./src/data/google_assistant.ts":
/*!**************************************!*\
  !*** ./src/data/google_assistant.ts ***!
  \**************************************/
/*! exports provided: fetchCloudGoogleEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudGoogleEntities", function() { return fetchCloudGoogleEntities; });
const fetchCloudGoogleEntities = opp => opp.callWS({
  type: "cloud/google_assistant/entities"
});

/***/ }),

/***/ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_op_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/op-switch */ "./src/components/op-switch.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_google_assistant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/google_assistant */ "./src/data/google_assistant.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
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

const configIsExposed = config => config.should_expose === undefined ? DEFAULT_CONFIG_EXPOSE : config.should_expose;

let CloudGoogleAssistant = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("cloud-google-assistant")], function (_initialize, _LitElement) {
  class CloudGoogleAssistant extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: CloudGoogleAssistant,
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
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
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
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(filter => Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities));
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

        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_9__["isEmptyFilter"])(this.cloudStatus.google_entities);

        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.google_entities); // We will only generate `isInitialExposed` during first render.
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
              ${entity.traits.map(trait => trait.substr(trait.lastIndexOf(".") + 1)).join(", ")}
            </state-info>
            <op-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.opp.localize("ui.panel.config.cloud.google.expose")}
            </op-switch>
            ${entity.might_2fa ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <op-switch
                    .entityId=${entity.entity_id}
                    .checked=${Boolean(config.disable_2fa)}
                    @change=${this._disable2FAChanged}
                  >
                    ${this.opp.localize("ui.panel.config.cloud.google.disable_2FA")}
                  </op-switch>
                ` : ""}
          </div>
        </op-card>
      `);
        });

        if (trackExposed) {
          this._isInitialExposed = showInExposed;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-subpage header="${this.opp.localize("ui.panel.config.cloud.google.title")}">
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
                  ${this.opp.localize("ui.panel.config.cloud.google.banner")}
                </div>
              ` : ""}
          ${exposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>
                    ${this.opp.localize("ui.panel.config.cloud.google.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                ` : ""}
          ${notExposedCards.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <h1>
                    ${this.opp.localize("ui.panel.config.cloud.google.not_exposed_entities")}
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
        _get(_getPrototypeOf(CloudGoogleAssistant.prototype), "firstUpdated", this).call(this, changedProps);

        this._fetchData();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(CloudGoogleAssistant.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          this._entityConfigs = this.cloudStatus.prefs.google_entity_configs;
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        const entities = await Object(_data_google_assistant__WEBPACK_IMPORTED_MODULE_14__["fetchCloudGoogleEntities"])(this.opp);
        entities.sort((a, b) => {
          const stateA = this.opp.states[a.entity_id];
          const stateB = this.opp.states[b.entity_id];
          return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateB) : b.entity_id);
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
      key: "_disable2FAChanged",
      value: async function _disable2FAChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newDisable2FA = ev.target.checked;
        const curDisable2FA = Boolean((this._entityConfigs[entityId] || {}).disable_2fa);

        if (newDisable2FA === curDisable2FA) {
          return;
        }

        await this._updateConfig(entityId, {
          disable_2fa: newDisable2FA
        });
      }
    }, {
      kind: "method",
      key: "_updateConfig",
      value: async function _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["updateCloudGoogleEntityConfig"])(this.opp, entityId, values);
        this._entityConfigs = Object.assign({}, this._entityConfigs, {
          [entityId]: updatedConfig
        });

        this._ensureStatusReload();
      }
    }, {
      kind: "method",
      key: "_openDomainToggler",
      value: function _openDomainToggler() {
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__["showDomainTogglerDialog"])(this, {
          domains: this._entities.map(entity => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id)).filter((value, idx, self) => self.indexOf(value) === idx),
          toggleDomain: (domain, turnOn) => {
            this._entities.forEach(entity => {
              if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id) === domain) {
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

        const parent = this.parentElement;
        window.addEventListener("popstate", () => {
          Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(parent, {
            message: this.opp.localize("ui.panel.config.cloud.google.sync_to_google")
          });
          Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["cloudSyncGoogleAssistant"])(this.opp);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhL2dvb2dsZV9hc3Npc3RhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZ29vZ2xlLWFzc2lzdGFudC9jbG91ZC1nb29nbGUtYXNzaXN0YW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVFbnRpdHkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgdHJhaXRzOiBzdHJpbmdbXTtcbiAgbWlnaHRfMmZhOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hDbG91ZEdvb2dsZUVudGl0aWVzID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxXUzxHb29nbGVFbnRpdHlbXT4oeyB0eXBlOiBcImNsb3VkL2dvb2dsZV9hc3Npc3RhbnQvZW50aXRpZXNcIiB9KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL29wcC1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL29wcC1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxuICBDbG91ZFByZWZlcmVuY2VzLFxuICB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyxcbiAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50LFxuICBHb29nbGVFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUZpbHRlcixcbiAgaXNFbXB0eUZpbHRlcixcbiAgRW50aXR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3RcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZUVudGl0eSxcbiAgZmV0Y2hDbG91ZEdvb2dsZUVudGl0aWVzLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9nb29nbGVfYXNzaXN0YW50XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBPcFN3aXRjaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL29wLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUdfRVhQT1NFID0gdHJ1ZTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogR29vZ2xlRW50aXR5Q29uZmlnKSA9PlxuICBjb25maWcuc2hvdWxkX2V4cG9zZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBERUZBVUxUX0NPTkZJR19FWFBPU0VcbiAgICA6IGNvbmZpZy5zaG91bGRfZXhwb3NlO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIilcbmNsYXNzIENsb3VkR29vZ2xlQXNzaXN0YW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBHb29nbGVFbnRpdHlbXTtcbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZW50aXR5Q29uZmlnczogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuICBwcml2YXRlIF9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8b3BwLWxvYWRpbmctc2NyZWVuPjwvb3BwLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlGaWx0ZXIgPSBpc0VtcHR5RmlsdGVyKHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuZ29vZ2xlX2VudGl0aWVzXG4gICAgKTtcblxuICAgIC8vIFdlIHdpbGwgb25seSBnZW5lcmF0ZSBgaXNJbml0aWFsRXhwb3NlZGAgZHVyaW5nIGZpcnN0IHJlbmRlci5cbiAgICAvLyBPbiBlYWNoIHN1YnNlcXVlbnQgcmVuZGVyIHdlIHdpbGwgdXNlIHRoZSBzYW1lIHNldCBzbyB0aGF0IGNhcmRzXG4gICAgLy8gd2lsbCBub3QganVtcCBhcm91bmQgd2hlbiB3ZSBjaGFuZ2UgdGhlIGV4cG9zZWQgc2V0dGluZy5cbiAgICBjb25zdCBzaG93SW5FeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCB8fCBuZXcgU2V0KCk7XG4gICAgY29uc3QgdHJhY2tFeHBvc2VkID0gdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9PT0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHNlbGVjdGVkID0gMDtcblxuICAgIC8vIE9uIGZpcnN0IHJlbmRlciB3ZSBkZWNpZGUgd2hpY2ggY2FyZHMgc2hvdyBpbiB3aGljaCBjYXRlZ29yeS5cbiAgICAvLyBUaGF0IHdheSBjYXJkcyB3b24ndCBqdW1wIGFyb3VuZCB3aGVuIGNoYW5naW5nIHZhbHVlcy5cbiAgICBjb25zdCBleHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcbiAgICBjb25zdCBub3RFeHBvc2VkQ2FyZHM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLm9wcC5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eS5lbnRpdHlfaWRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNFeHBvc2VkID0gZW1wdHlGaWx0ZXJcbiAgICAgICAgPyBjb25maWdJc0V4cG9zZWQoY29uZmlnKVxuICAgICAgICA6IGZpbHRlckZ1bmMoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICBpZiAoaXNFeHBvc2VkKSB7XG4gICAgICAgIHNlbGVjdGVkKys7XG5cbiAgICAgICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgICAgIHNob3dJbkV4cG9zZWQuYWRkKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IHNob3dJbkV4cG9zZWQuaGFzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgID8gZXhwb3NlZENhcmRzXG4gICAgICAgIDogbm90RXhwb3NlZENhcmRzO1xuXG4gICAgICB0YXJnZXQucHVzaChodG1sYFxuICAgICAgICA8b3AtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZVxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93TW9yZUluZm99XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7ZW50aXR5LnRyYWl0c1xuICAgICAgICAgICAgICAgIC5tYXAoKHRyYWl0KSA9PiB0cmFpdC5zdWJzdHIodHJhaXQubGFzdEluZGV4T2YoXCIuXCIpICsgMSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxvcC1zd2l0Y2hcbiAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWVtcHR5RmlsdGVyfVxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke2lzRXhwb3NlZH1cbiAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2V4cG9zZUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5leHBvc2VcIil9XG4gICAgICAgICAgICA8L29wLXN3aXRjaD5cbiAgICAgICAgICAgICR7ZW50aXR5Lm1pZ2h0XzJmYVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8b3Atc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7Qm9vbGVhbihjb25maWcuZGlzYWJsZV8yZmEpfVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZGlzYWJsZTJGQUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5kaXNhYmxlXzJGQVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L29wLXN3aXRjaD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9vcC1jYXJkPlxuICAgICAgYCk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID0gc2hvd0luRXhwb3NlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtc3VicGFnZSBoZWFkZXI9XCIke3RoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLnRpdGxlXCJcbiAgICAgICl9XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6dHVuZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuRG9tYWluVG9nZ2xlcn1cbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgJHtcbiAgICAgICAgICAhZW1wdHlGaWx0ZXJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMub3BwIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUuYmFubmVyXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBleHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5leHBvc2VkX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7ZXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBub3RFeHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5vcHAhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5ub3RfZXhwb3NlZF9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke25vdEV4cG9zZWRDYXJkc308L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L29wcC1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmdvb2dsZV9lbnRpdHlfY29uZmlncztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERhdGEoKSB7XG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXModGhpcy5vcHApO1xuICAgIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlQSA9IHRoaXMub3BwLnN0YXRlc1thLmVudGl0eV9pZF07XG4gICAgICBjb25zdCBzdGF0ZUIgPSB0aGlzLm9wcC5zdGF0ZXNbYi5lbnRpdHlfaWRdO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoXG4gICAgICAgIHN0YXRlQSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVBKSA6IGEuZW50aXR5X2lkLFxuICAgICAgICBzdGF0ZUIgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQikgOiBiLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd01vcmVJbmZvKGV2KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5jdXJyZW50VGFyZ2V0LnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJvcHAtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHBvc2VDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gKGV2LnRhcmdldCBhcyBPcFN3aXRjaCkuY2hlY2tlZDtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kaXNhYmxlMkZBQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RGlzYWJsZTJGQSA9IChldi50YXJnZXQgYXMgT3BTd2l0Y2gpLmNoZWNrZWQ7XG4gICAgY29uc3QgY3VyRGlzYWJsZTJGQSA9IEJvb2xlYW4oXG4gICAgICAodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pLmRpc2FibGVfMmZhXG4gICAgKTtcbiAgICBpZiAobmV3RGlzYWJsZTJGQSA9PT0gY3VyRGlzYWJsZTJGQSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIGRpc2FibGVfMmZhOiBuZXdEaXNhYmxlMkZBLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5vcHAsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIHZhbHVlc1xuICAgICk7XG4gICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHtcbiAgICAgIC4uLnRoaXMuX2VudGl0eUNvbmZpZ3MsXG4gICAgICBbZW50aXR5SWRdOiB1cGRhdGVkQ29uZmlnLFxuICAgIH07XG4gICAgdGhpcy5fZW5zdXJlU3RhdHVzUmVsb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRG9tYWluVG9nZ2xlcigpIHtcbiAgICBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyh0aGlzLCB7XG4gICAgICBkb21haW5zOiB0aGlzLl9lbnRpdGllcyEubWFwKChlbnRpdHkpID0+XG4gICAgICAgIGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZClcbiAgICAgICkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLFxuICAgICAgdG9nZ2xlRG9tYWluOiAoZG9tYWluLCB0dXJuT24pID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSBkb21haW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5LmVudGl0eV9pZCwgdHVybk9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZVN0YXR1c1JlbG9hZCgpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiBmaXJlRXZlbnQocGFyZW50LCBcIm9wLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpLFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlRW50aXR5U3luYygpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSB0cnVlO1xuICAgIC8vIENhY2hlIHBhcmVudCBiZWNhdXNlIGJ5IHRoZSB0aW1lIHBvcHN0YXRlIGhhcHBlbnMsXG4gICAgLy8gdGhpcyBlbGVtZW50IGlzIGRldGFjaGVkXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50ITtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicG9wc3RhdGVcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2hvd1RvYXN0KHBhcmVudCwge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMub3BwIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5zeW5jX3RvX2dvb2dsZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCh0aGlzLm9wcCk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1vcC1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICAgIGdyaWQtZ2FwOiA4cHggOHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgICBzdGF0ZS1pbmZvIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgb3Atc3dpdGNoIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIG9wLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIjogQ2xvdWRHb29nbGVBc3Npc3RhbnQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBT0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBUEE7OztBQXJCQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUNBOztBQVFBOzs7O0FBS0E7O0FBTEE7QUFXQTs7QUFHQTs7QUFIQTtBQVNBOztBQUdBOztBQUlBO0FBUEE7QUFZQTs7QUFHQTs7QUFJQTtBQVBBOzs7QUE5Q0E7QUE0REE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUNBOzs7QUE3VUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==