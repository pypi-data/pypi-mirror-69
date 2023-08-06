(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
  const compareTime = options.compareTime || new Date();
  let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  const tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  let timeDesc;

  for (let i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
}

/***/ }),

/***/ "./src/components/op-paper-icon-button-prev.ts":
/*!*****************************************************!*\
  !*** ./src/components/op-paper-icon-button-prev.ts ***!
  \*****************************************************/
/*! exports provided: OpPaperIconButtonPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpPaperIconButtonPrev", function() { return OpPaperIconButtonPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");

const paperIconButtonClass = customElements.get("paper-icon-button");
class OpPaperIconButtonPrev extends paperIconButtonClass {
  connectedCallback() {
    super.connectedCallback(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? "opp:chevron-left" : "opp:chevron-right";
    }, 100);
  }

}
customElements.define("op-paper-icon-button-prev", OpPaperIconButtonPrev);

/***/ }),

/***/ "./src/components/op-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/op-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class OpRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      opp: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged"
      },
      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged"
      },
      parsedDateTime: Object
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback(); // update every 60 seconds

    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;
    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;
    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }

}

customElements.define("op-relative-time", OpRelativeTime);

/***/ }),

/***/ "./src/dialogs/notifications/configurator-notification-item.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/notifications/configurator-notification-item.ts ***!
  \*********************************************************************/
/*! exports provided: HuiConfiguratorNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiConfiguratorNotificationItem", function() { return HuiConfiguratorNotificationItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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





let HuiConfiguratorNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("configurator-notification-item")], function (_initialize, _LitElement) {
  class HuiConfiguratorNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiConfiguratorNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <notification-item-template>
        <span slot="header">${this.opp.localize("domain.configurator")}</span>

        <div>
          ${this.opp.localize("ui.notification_drawer.click_to_configure", "entity", this.notification.attributes.friendly_name)}
        </div>

        <mwc-button slot="actions" @click="${this._handleClick}"
          >${this.opp.localize(`state.configurator.${this.notification.state}`)}</mwc-button
        >
      </notification-item-template>
    `;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "opp-more-info", {
          entityId: this.notification.entity_id
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/notification-drawer.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/notifications/notification-drawer.js ***!
  \**********************************************************/
/*! exports provided: HuiNotificationDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationDrawer", function() { return HuiNotificationDrawer; });
/* harmony import */ var _polymer_app_layout_app_drawer_app_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-drawer/app-drawer */ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _notification_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-item */ "./src/dialogs/notifications/notification-item.ts");
/* harmony import */ var _components_op_paper_icon_button_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/op-paper-icon-button-prev */ "./src/components/op-paper-icon-button-prev.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");












/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HuiNotificationDrawer extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-material-styles">
      app-toolbar {
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        min-height: 64px;
        width: calc(100% - 32px);
      }

      .notifications {
        overflow-y: auto;
        padding-top: 16px;
        height: calc(100% - 65px);
        box-sizing: border-box;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }

      .notification {
        padding: 0 16px 16px;
      }

      .empty {
        padding: 16px;
        text-align: center;
      }
    </style>
    <app-drawer id="drawer" opened="{{open}}" disable-swipe align="start">
      <app-toolbar>
        <div main-title>[[localize('ui.notification_drawer.title')]]</div>
        <op-paper-icon-button-prev on-click="_closeDrawer" aria-label$="[[localize('ui.notification_drawer.close')]]"></paper-icon-button>
      </app-toolbar>
      <div class="notifications">
        <template is="dom-if" if="[[!_empty(notifications)]]">
          <dom-repeat items="[[notifications]]">
            <template>
              <div class="notification">
                <notification-item opp="[[opp]]" notification="[[item]]"></notification-item>
              </div>
            </template>
          </dom-repeat>
        </template>
        <template is="dom-if" if="[[_empty(notifications)]]">
          <div class="empty">[[localize('ui.notification_drawer.empty')]]<div>
        </template>
      </div>
    </app-drawer>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      open: {
        type: Boolean,
        observer: "_openChanged"
      },
      notifications: {
        type: Array,
        computed: "_computeNotifications(open, opp, _notificationsBackend)"
      },
      _notificationsBackend: {
        type: Array,
        value: []
      }
    };
  }

  ready() {
    super.ready();
    window.addEventListener("location-changed", () => {
      // close drawer when we navigate away.
      if (this.open) {
        this.open = false;
      }
    });
  }

  _closeDrawer(ev) {
    ev.stopPropagation();
    this.open = false;
  }

  _empty(notifications) {
    return notifications.length === 0;
  }

  _openChanged(open) {
    if (open) {
      // Render closed then animate open
      this._unsubNotifications = Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__["subscribeNotifications"])(this.opp.connection, notifications => {
        this._notificationsBackend = notifications;
      });
    } else if (this._unsubNotifications) {
      this._unsubNotifications();

      this._unsubNotifications = undefined;
    }
  }

  _computeNotifications(open, opp, notificationsBackend) {
    if (!open) {
      return [];
    }

    const configuratorEntities = Object.keys(opp.states).filter(entityId => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__["computeDomain"])(entityId) === "configurator").map(entityId => opp.states[entityId]);
    return notificationsBackend.concat(configuratorEntities);
  }

  showDialog({
    narrow
  }) {
    this.style.setProperty("--app-drawer-width", narrow ? window.innerWidth + "px" : "500px");
    this.$.drawer.open();
  }

}
customElements.define("notification-drawer", HuiNotificationDrawer);

/***/ }),

/***/ "./src/dialogs/notifications/notification-item-template.ts":
/*!*****************************************************************!*\
  !*** ./src/dialogs/notifications/notification-item-template.ts ***!
  \*****************************************************************/
/*! exports provided: HuiNotificationItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItemTemplate", function() { return HuiNotificationItemTemplate; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/op-card */ "./src/components/op-card.ts");
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



let HuiNotificationItemTemplate = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("notification-item-template")], function (_initialize, _LitElement) {
  class HuiNotificationItemTemplate extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiNotificationItemTemplate,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-card>
        <div class="header"><slot name="header"></slot></div>
        <div class="contents"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </op-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .contents {
        padding: 16px;
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      op-card .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        /* end paper-font-headline style */

        color: var(--primary-text-color);
        padding: 16px 16px 0;
      }

      .actions {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }

      ::slotted(.primary) {
        color: var(--primary-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/notification-item.ts":
/*!********************************************************!*\
  !*** ./src/dialogs/notifications/notification-item.ts ***!
  \********************************************************/
/*! exports provided: HuiNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItem", function() { return HuiNotificationItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _configurator_notification_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configurator-notification-item */ "./src/dialogs/notifications/configurator-notification-item.ts");
/* harmony import */ var _persistent_notification_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persistent-notification-item */ "./src/dialogs/notifications/persistent-notification-item.ts");
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




let HuiNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("notification-item")], function (_initialize, _LitElement) {
  class HuiNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (!this.opp || !this.notification || changedProps.has("notification")) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return "entity_id" in this.notification ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <configurator-notification-item
            .opp="${this.opp}"
            .notification="${this.notification}"
          ></configurator-notification-item>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <persistent-notification-item
            .opp="${this.opp}"
            .notification="${this.notification}"
          ></persistent-notification-item>
        `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/notifications/persistent-notification-item.ts":
/*!*******************************************************************!*\
  !*** ./src/dialogs/notifications/persistent-notification-item.ts ***!
  \*******************************************************************/
/*! exports provided: HuiPersistentNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPersistentNotificationItem", function() { return HuiPersistentNotificationItem; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_op_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/op-relative-time */ "./src/components/op-relative-time.js");
/* harmony import */ var _components_op_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/op-markdown */ "./src/components/op-markdown.ts");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");
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







let HuiPersistentNotificationItem = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("persistent-notification-item")], function (_initialize, _LitElement) {
  class HuiPersistentNotificationItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiPersistentNotificationItem,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "notification",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || !this.notification) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <notification-item-template>
        <span slot="header">
          ${this.notification.title || this.notification.notification_id}
        </span>

        <op-markdown content="${this.notification.message}"></op-markdown>

        <div class="time">
          <span>
            <op-relative-time
              .opp="${this.opp}"
              .datetime="${this.notification.created_at}"
            ></op-relative-time>
            <paper-tooltip
              >${this._computeTooltip(this.opp, this.notification)}</paper-tooltip
            >
          </span>
        </div>

        <mwc-button slot="actions" @click="${this._handleDismiss}"
          >${this.opp.localize("ui.card.persistent_notification.dismiss")}</mwc-button
        >
      </notification-item-template>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .time {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
      op-relative-time {
        color: var(--secondary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      op-markdown {
        overflow-wrap: break-word;
      }
    `;
      }
    }, {
      kind: "method",
      key: "_handleDismiss",
      value: function _handleDismiss() {
        this.opp.callService("persistent_notification", "dismiss", {
          notification_id: this.notification.notification_id
        });
      }
    }, {
      kind: "method",
      key: "_computeTooltip",
      value: function _computeTooltip(opp, notification) {
        if (!opp || !notification) {
          return undefined;
        }

        const d = new Date(notification.created_at);
        return d.toLocaleDateString(opp.language, {
          year: "numeric",
          month: "short",
          day: "numeric",
          minute: "numeric",
          hour: "numeric"
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from opp object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      opp: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(opp.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3JwYy13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1wYXBlci1pY29uLWJ1dHRvbi1wcmV2LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLXJlbGF0aXZlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24taXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL3BlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNZXRob2RzKHdvcmtlciwgbWV0aG9kcykge1xuXHRsZXQgYyA9IDA7XG5cdGxldCBjYWxsYmFja3MgPSB7fTtcblx0d29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuXHRcdGxldCBkID0gZS5kYXRhO1xuXHRcdGlmIChkLnR5cGUhPT0nUlBDJykgcmV0dXJuO1xuXHRcdGlmIChkLmlkKSB7XG5cdFx0XHRsZXQgZiA9IGNhbGxiYWNrc1tkLmlkXTtcblx0XHRcdGlmIChmKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWxsYmFja3NbZC5pZF07XG5cdFx0XHRcdGlmIChkLmVycm9yKSB7XG5cdFx0XHRcdFx0ZlsxXShPYmplY3QuYXNzaWduKEVycm9yKGQuZXJyb3IubWVzc2FnZSksIGQuZXJyb3IpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRmWzBdKGQucmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRcdGV2dC5pbml0RXZlbnQoZC5tZXRob2QsIGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRldnQuZGF0YSA9IGQucGFyYW1zO1xuXHRcdFx0d29ya2VyLmRpc3BhdGNoRXZlbnQoZXZ0KTtcblx0XHR9XG5cdH0pO1xuXHRtZXRob2RzLmZvckVhY2goIG1ldGhvZCA9PiB7XG5cdFx0d29ya2VyW21ldGhvZF0gPSAoLi4ucGFyYW1zKSA9PiBuZXcgUHJvbWlzZSggKGEsIGIpID0+IHtcblx0XHRcdGxldCBpZCA9ICsrYztcblx0XHRcdGNhbGxiYWNrc1tpZF0gPSBbYSwgYl07XG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoeyB0eXBlOiAnUlBDJywgaWQsIG1ldGhvZCwgcGFyYW1zIH0pO1xuXHRcdH0pO1xuXHR9KTtcbn1cbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgUGFwZXJJY29uQnV0dG9uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xyXG5cclxuY29uc3QgcGFwZXJJY29uQnV0dG9uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXHJcbiAgXCJwYXBlci1pY29uLWJ1dHRvblwiXHJcbikgYXMgQ29uc3RydWN0b3I8UGFwZXJJY29uQnV0dG9uRWxlbWVudD47XHJcblxyXG5leHBvcnQgY2xhc3MgT3BQYXBlckljb25CdXR0b25QcmV2IGV4dGVuZHMgcGFwZXJJY29uQnV0dG9uQ2xhc3Mge1xyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaWNvbiA9XHJcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXHJcbiAgICAgICAgICA/IFwib3BwOmNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICA6IFwib3BwOmNoZXZyb24tcmlnaHRcIjtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XHJcbiAgICBcIm9wLXBhcGVyLWljb24tYnV0dG9uLXByZXZcIjogT3BQYXBlckljb25CdXR0b25QcmV2O1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFwZXItaWNvbi1idXR0b24tcHJldlwiLCBPcFBhcGVySWNvbkJ1dHRvblByZXYpO1xyXG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLXJlbGF0aXZlLXRpbWVcIiwgT3BSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGVcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgUGVyc2l0ZW50Tm90aWZpY2F0aW9uRW50aXR5IH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIilcbmV4cG9ydCBjbGFzcyBIdWlDb25maWd1cmF0b3JOb3RpZmljYXRpb25JdGVtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHA/OiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBQZXJzaXRlbnROb3RpZmljYXRpb25FbnRpdHk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj4ke3RoaXMub3BwLmxvY2FsaXplKFwiZG9tYWluLmNvbmZpZ3VyYXRvclwiKX08L3NwYW4+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5ub3RpZmljYXRpb25fZHJhd2VyLmNsaWNrX3RvX2NvbmZpZ3VyZVwiLFxuICAgICAgICAgICAgXCJlbnRpdHlcIixcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxtd2MtYnV0dG9uIHNsb3Q9XCJhY3Rpb25zXCIgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVDbGlja31cIlxuICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgYHN0YXRlLmNvbmZpZ3VyYXRvci4ke3RoaXMubm90aWZpY2F0aW9uLnN0YXRlfWBcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJvcHAtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vdGlmaWNhdGlvbiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpQ29uZmlndXJhdG9yTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtZHJhd2VyL2FwcC1kcmF3ZXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL25vdGlmaWNhdGlvbi1pdGVtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLXBhcGVyLWljb24tYnV0dG9uLXByZXZcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkRyYXdlciBleHRlbmRzIEV2ZW50c01peGluKFxuICBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9ucyB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YXBwLWRyYXdlciBpZD1cImRyYXdlclwiIG9wZW5lZD1cInt7b3Blbn19XCIgZGlzYWJsZS1zd2lwZSBhbGlnbj1cInN0YXJ0XCI+XG4gICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCd1aS5ub3RpZmljYXRpb25fZHJhd2VyLnRpdGxlJyldXTwvZGl2PlxuICAgICAgICA8b3AtcGFwZXItaWNvbi1idXR0b24tcHJldiBvbi1jbGljaz1cIl9jbG9zZURyYXdlclwiIGFyaWEtbGFiZWwkPVwiW1tsb2NhbGl6ZSgndWkubm90aWZpY2F0aW9uX2RyYXdlci5jbG9zZScpXV1cIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZG9tLXJlcGVhdCBpdGVtcz1cIltbbm90aWZpY2F0aW9uc11dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bm90aWZpY2F0aW9uLWl0ZW0gb3BwPVwiW1tvcHBdXVwiIG5vdGlmaWNhdGlvbj1cIltbaXRlbV1dXCI+PC9ub3RpZmljYXRpb24taXRlbT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZG9tLXJlcGVhdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lbXB0eShub3RpZmljYXRpb25zKV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+W1tsb2NhbGl6ZSgndWkubm90aWZpY2F0aW9uX2RyYXdlci5lbXB0eScpXV08ZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcHAtZHJhd2VyPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDogT2JqZWN0LFxuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbkNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3Blbiwgb3BwLCBfbm90aWZpY2F0aW9uc0JhY2tlbmQpXCIsXG4gICAgICB9LFxuICAgICAgX25vdGlmaWNhdGlvbnNCYWNrZW5kOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9jYXRpb24tY2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICAvLyBjbG9zZSBkcmF3ZXIgd2hlbiB3ZSBuYXZpZ2F0ZSBhd2F5LlxuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9jbG9zZURyYXdlcihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgX2VtcHR5KG5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBfb3BlbkNoYW5nZWQob3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBSZW5kZXIgY2xvc2VkIHRoZW4gYW5pbWF0ZSBvcGVuXG4gICAgICB0aGlzLl91bnN1Yk5vdGlmaWNhdGlvbnMgPSBzdWJzY3JpYmVOb3RpZmljYXRpb25zKFxuICAgICAgICB0aGlzLm9wcC5jb25uZWN0aW9uLFxuICAgICAgICAobm90aWZpY2F0aW9ucykgPT4ge1xuICAgICAgICAgIHRoaXMuX25vdGlmaWNhdGlvbnNCYWNrZW5kID0gbm90aWZpY2F0aW9ucztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Vuc3ViTm90aWZpY2F0aW9ucykge1xuICAgICAgdGhpcy5fdW5zdWJOb3RpZmljYXRpb25zKCk7XG4gICAgICB0aGlzLl91bnN1Yk5vdGlmaWNhdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVOb3RpZmljYXRpb25zKG9wZW4sIG9wcCwgbm90aWZpY2F0aW9uc0JhY2tlbmQpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWd1cmF0b3JFbnRpdGllcyA9IE9iamVjdC5rZXlzKG9wcC5zdGF0ZXMpXG4gICAgICAuZmlsdGVyKChlbnRpdHlJZCkgPT4gY29tcHV0ZURvbWFpbihlbnRpdHlJZCkgPT09IFwiY29uZmlndXJhdG9yXCIpXG4gICAgICAubWFwKChlbnRpdHlJZCkgPT4gb3BwLnN0YXRlc1tlbnRpdHlJZF0pO1xuXG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnNCYWNrZW5kLmNvbmNhdChjb25maWd1cmF0b3JFbnRpdGllcyk7XG4gIH1cblxuICBzaG93RGlhbG9nKHsgbmFycm93IH0pIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgXCItLWFwcC1kcmF3ZXItd2lkdGhcIixcbiAgICAgIG5hcnJvdyA/IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiIDogXCI1MDBweFwiXG4gICAgKTtcbiAgICB0aGlzLiQuZHJhd2VyLm9wZW4oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibm90aWZpY2F0aW9uLWRyYXdlclwiLCBIdWlOb3RpZmljYXRpb25EcmF3ZXIpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGVcIilcbmV4cG9ydCBjbGFzcyBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj48c2xvdCBuYW1lPVwiYWN0aW9uc1wiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDwvb3AtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3AtY2FyZCAuaGVhZGVyIHtcbiAgICAgICAgLyogc3RhcnQgcGFwZXItZm9udC1oZWFkbGluZSBzdHlsZSAqL1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJOb3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyAvKiBPUyBYIHN1YnBpeGVsIEFBIGJsZWVkIGJ1ZyAqL1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC8qIGVuZCBwYXBlci1mb250LWhlYWRsaW5lIHN0eWxlICovXG5cbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKC5wcmltYXJ5KSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiOiBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcblxuaW1wb3J0IFwiLi9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjtcbmltcG9ydCBcIi4vcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJub3RpZmljYXRpb24taXRlbVwiKVxuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5vdGlmaWNhdGlvbj86IE9wcEVudGl0eSB8IFBlcnNpc3RlbnROb3RpZmljYXRpb247XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLm9wcCB8fCAhdGhpcy5ub3RpZmljYXRpb24gfHwgY2hhbmdlZFByb3BzLmhhcyhcIm5vdGlmaWNhdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZW50aXR5X2lkXCIgaW4gdGhpcy5ub3RpZmljYXRpb25cbiAgICAgID8gaHRtbGBcbiAgICAgICAgICA8Y29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtXG4gICAgICAgICAgICAub3BwPVwiJHt0aGlzLm9wcH1cIlxuICAgICAgICAgICAgLm5vdGlmaWNhdGlvbj1cIiR7dGhpcy5ub3RpZmljYXRpb259XCJcbiAgICAgICAgICA+PC9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW0+XG4gICAgICAgIGBcbiAgICAgIDogaHRtbGBcbiAgICAgICAgICA8cGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVxuICAgICAgICAgICAgLm9wcD1cIiR7dGhpcy5vcHB9XCJcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbT5cbiAgICAgICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9vcC1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJwZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtXCIpXG5leHBvcnQgY2xhc3MgSHVpUGVyc2lzdGVudE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5vdGlmaWNhdGlvbj86IFBlcnNpc3RlbnROb3RpZmljYXRpb247XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAke3RoaXMubm90aWZpY2F0aW9uLnRpdGxlIHx8IHRoaXMubm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbl9pZH1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxvcC1tYXJrZG93biBjb250ZW50PVwiJHt0aGlzLm5vdGlmaWNhdGlvbi5tZXNzYWdlfVwiPjwvb3AtbWFya2Rvd24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxvcC1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIC5vcHA9XCIke3RoaXMub3BwfVwiXG4gICAgICAgICAgICAgIC5kYXRldGltZT1cIiR7dGhpcy5ub3RpZmljYXRpb24uY3JlYXRlZF9hdH1cIlxuICAgICAgICAgICAgPjwvb3AtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICAgIDxwYXBlci10b29sdGlwXG4gICAgICAgICAgICAgID4ke3RoaXMuX2NvbXB1dGVUb29sdGlwKFxuICAgICAgICAgICAgICAgIHRoaXMub3BwLFxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICl9PC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlRGlzbWlzc31cIlxuICAgICAgICAgID4ke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5jYXJkLnBlcnNpc3RlbnRfbm90aWZpY2F0aW9uLmRpc21pc3NcIlxuICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC50aW1lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgfVxuICAgICAgb3AtcmVsYXRpdmUtdGltZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgICAgb3AtbWFya2Rvd24ge1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVEaXNtaXNzKCk6IHZvaWQge1xuICAgIHRoaXMub3BwIS5jYWxsU2VydmljZShcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsIFwiZGlzbWlzc1wiLCB7XG4gICAgICBub3RpZmljYXRpb25faWQ6IHRoaXMubm90aWZpY2F0aW9uIS5ub3RpZmljYXRpb25faWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlVG9vbHRpcChcbiAgICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gICAgbm90aWZpY2F0aW9uOiBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFvcHAgfHwgIW5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBkID0gbmV3IERhdGUobm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQhKTtcbiAgICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcob3BwLmxhbmd1YWdlLCB7XG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJwZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtXCI6IEh1aVBlcnNpc3RlbnROb3RpZmljYXRpb25JdGVtO1xuICB9XG59XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIG9wcCBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKG9wcC5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7O0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQkE7QUFzQkE7QUFDQTs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBWkE7QUFvQkE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBT0E7QUFFQTtBQUdBO0FBSUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBT0E7QUFDQTs7O0FBYkE7QUFtQkE7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQURBO0FBR0E7QUFuQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQTVIQTtBQTZIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBU0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7QUFBQTtBQU9BO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUNBO0FBN0NBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBVUE7QUFDQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFKQTs7QUFTQTtBQUNBOztBQVZBO0FBYUE7QUEvQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBOzs7OztBQVFBO0FBQ0E7OztBQXhCQTtBQThCQTtBQXhDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkNBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdCQTtBQTNEQTtBQUFBO0FBQUE7QUFBQTtBQThEQTtBQUNBO0FBREE7QUFHQTtBQWpFQTtBQUFBO0FBQUE7QUFBQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQW5GQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==