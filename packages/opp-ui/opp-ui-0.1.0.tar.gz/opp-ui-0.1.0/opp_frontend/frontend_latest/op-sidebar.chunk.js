(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["op-sidebar"],{

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

/***/ }),

/***/ "./src/components/op-sidebar.ts":
/*!**************************************!*\
  !*** ./src/components/op-sidebar.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _components_user_op_user_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/user/op-user-badge */ "./src/components/user/op-user-badge.ts");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/const */ "./src/common/const.ts");
/* harmony import */ var _external_app_external_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../external_app/external_config */ "./src/external_app/external_config.ts");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
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


const SHOW_AFTER_SPACER = ["config", "developer-tools", "oppio"];
const SUPPORT_SCROLL_IF_NEEDED = ("scrollIntoViewIfNeeded" in document.body);
const SORT_VALUE_URL_PATHS = {
  map: 1,
  logbook: 2,
  history: 3,
  "developer-tools": 9,
  oppio: 10,
  config: 11
};

const panelSorter = (a, b) => {
  const aBuiltIn = (a.url_path in SORT_VALUE_URL_PATHS);
  const bBuiltIn = (b.url_path in SORT_VALUE_URL_PATHS);

  if (aBuiltIn && bBuiltIn) {
    return SORT_VALUE_URL_PATHS[a.url_path] - SORT_VALUE_URL_PATHS[b.url_path];
  }

  if (aBuiltIn) {
    return -1;
  }

  if (bBuiltIn) {
    return 1;
  } // both not built in, sort by title


  if (a.title < b.title) {
    return -1;
  }

  if (a.title > b.title) {
    return 1;
  }

  return 0;
};

const computePanels = opp => {
  const panels = opp.panels;

  if (!panels) {
    return [[], []];
  }

  const beforeSpacer = [];
  const afterSpacer = [];
  Object.values(panels).forEach(panel => {
    if (!panel.title) {
      return;
    }

    (SHOW_AFTER_SPACER.includes(panel.url_path) ? afterSpacer : beforeSpacer).push(panel);
  });
  beforeSpacer.sort(panelSorter);
  afterSpacer.sort(panelSorter);
  return [beforeSpacer, afterSpacer];
};
/*
 * @appliesMixin LocalizeMixin
 */


let OpSidebar = _decorate(null, function (_initialize, _LitElement) {
  class OpSidebar extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpSidebar,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "alwaysExpand",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_defaultPage",

      value() {
        return localStorage.defaultPage || _common_const__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_PANEL"];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_externalConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_notifications",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "_rtl",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_mouseLeaveTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_tooltipHideTimeout",
      value: void 0
    }, {
      kind: "field",
      key: "_recentKeydownActiveUntil",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "render",
      value: // property used only in css
      // @ts-ignore
      function render() {
        const opp = this.opp;

        if (!opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const [beforeSpacer, afterSpacer] = computePanels(opp);
        let notificationCount = this._notifications ? this._notifications.length : 0;

        for (const entityId in opp.states) {
          if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_13__["computeDomain"])(entityId) === "configurator") {
            notificationCount++;
          }
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="menu">
        ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                aria-label=${opp.localize("ui.sidebar.sidebar_toggle")}
                .icon=${opp.dockedSidebar === "docked" ? "opp:menu-open" : "opp:menu"}
                @click=${this._toggleSidebar}
              ></paper-icon-button>
            ` : ""}
        <span class="title">Open Peer Power</span>
      </div>
      <paper-listbox
        attr-for-selected="data-panel"
        .selected=${opp.panelUrl}
        @focusin=${this._listboxFocusIn}
        @focusout=${this._listboxFocusOut}
        @scroll=${this._listboxScroll}
        @keydown=${this._listboxKeydown}
      >
        ${this._renderPanel(this._defaultPage, "opp:apps", opp.localize("panel.states"))}
        ${beforeSpacer.map(panel => this._renderPanel(panel.url_path, panel.icon, opp.localize(`panel.${panel.title}`) || panel.title))}
        <div class="spacer" disabled></div>

        ${afterSpacer.map(panel => this._renderPanel(panel.url_path, panel.icon, opp.localize(`panel.${panel.title}`) || panel.title))}
        ${this._externalConfig && this._externalConfig.HasSettingsScreen ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <a
                aria-role="option"
                aria-label=${opp.localize("ui.sidebar.external_app_configuration")}
                href="#external-app-configuration"
                tabindex="-1"
                @click=${this._handleExternalAppConfiguration}
                @mouseenter=${this._itemMouseEnter}
                @mouseleave=${this._itemMouseLeave}
              >
                <paper-icon-item>
                  <op-icon
                    slot="item-icon"
                    icon="opp:cellphone-settings-variant"
                  ></op-icon>
                  <span class="item-text">
                    ${opp.localize("ui.sidebar.external_app_configuration")}
                  </span>
                </paper-icon-item>
              </a>
            ` : ""}
      </paper-listbox>

      <div class="divider"></div>

      <div
        class="notifications-container"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item
          class="notifications"
          aria-role="option"
          @click=${this._handleShowNotificationDrawer}
        >
          <op-icon slot="item-icon" icon="opp:bell"></op-icon>
          ${!this.expanded && notificationCount > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <span class="notification-badge" slot="item-icon">
                  ${notificationCount}
                </span>
              ` : ""}
          <span class="item-text">
            ${opp.localize("ui.notification_drawer.title")}
          </span>
          ${this.expanded && notificationCount > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <span class="notification-badge">${notificationCount}</span>
              ` : ""}
        </paper-icon-item>
      </div>

      <a
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_14__["classMap"])({
          profile: true,
          // Mimick behavior that paper-listbox provides
          "iron-selected": opp.panelUrl === "profile"
        })}
        href="/profile"
        data-panel="panel"
        tabindex="-1"
        aria-role="option"
        aria-label=${opp.localize("panel.profile")}
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <op-user-badge slot="item-icon" .user=${opp.user}></op-user-badge>

          <span class="item-text">
            ${opp.user ? opp.user.name : ""}
          </span>
        </paper-icon-item>
      </a>
      <div disabled class="bottom-spacer"></div>
      <div class="tooltip"></div>
    `;
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("expanded") || changedProps.has("narrow") || changedProps.has("alwaysExpand") || changedProps.has("_externalConfig") || changedProps.has("_notifications")) {
          return true;
        }

        if (!this.opp || !changedProps.has("opp")) {
          return false;
        }

        const oldOpp = changedProps.get("opp");

        if (!oldOpp) {
          return true;
        }

        const opp = this.opp;
        return opp.panels !== oldOpp.panels || opp.panelUrl !== oldOpp.panelUrl || opp.user !== oldOpp.user || opp.localize !== oldOpp.localize || opp.states !== oldOpp.states;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpSidebar.prototype), "firstUpdated", this).call(this, changedProps);

        if (this.opp && this.opp.auth.external) {
          Object(_external_app_external_config__WEBPACK_IMPORTED_MODULE_11__["getExternalConfig"])(this.opp.auth.external).then(conf => {
            this._externalConfig = conf;
          });
        }

        Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_12__["subscribeNotifications"])(this.opp.connection, notifications => {
          this._notifications = notifications;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpSidebar.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("alwaysExpand")) {
          this.expanded = this.alwaysExpand;
        }

        if (!changedProps.has("opp")) {
          return;
        }

        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.opp);

        if (!SUPPORT_SCROLL_IF_NEEDED) {
          return;
        }

        const oldOpp = changedProps.get("opp");

        if (!oldOpp || oldOpp.panelUrl !== this.opp.panelUrl) {
          const selectedEl = this.shadowRoot.querySelector(".iron-selected");

          if (selectedEl) {
            // @ts-ignore
            selectedEl.scrollIntoViewIfNeeded();
          }
        }
      }
    }, {
      kind: "get",
      key: "_tooltip",
      value: function _tooltip() {
        return this.shadowRoot.querySelector(".tooltip");
      }
    }, {
      kind: "method",
      key: "_itemMouseEnter",
      value: function _itemMouseEnter(ev) {
        // On keypresses on the listbox, we're going to ignore mouse enter events
        // for 100ms so that we ignore it when pressing down arrow scrolls the
        // sidebar causing the mouse to hover a new icon
        if (this.expanded || new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
          this._mouseLeaveTimeout = undefined;
        }

        this._showTooltip(ev.currentTarget);
      }
    }, {
      kind: "method",
      key: "_itemMouseLeave",
      value: function _itemMouseLeave() {
        if (this._mouseLeaveTimeout) {
          clearTimeout(this._mouseLeaveTimeout);
        }

        this._mouseLeaveTimeout = window.setTimeout(() => {
          this._hideTooltip();
        }, 500);
      }
    }, {
      kind: "method",
      key: "_listboxFocusIn",
      value: function _listboxFocusIn(ev) {
        if (this.expanded || ev.target.nodeName !== "A") {
          return;
        }

        this._showTooltip(ev.target.querySelector("paper-icon-item"));
      }
    }, {
      kind: "method",
      key: "_listboxFocusOut",
      value: function _listboxFocusOut() {
        this._hideTooltip();
      }
    }, {
      kind: "method",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["eventOptions"])({
        passive: true
      })],
      key: "_listboxScroll",
      value: function _listboxScroll() {
        // On keypresses on the listbox, we're going to ignore scroll events
        // for 100ms so that if pressing down arrow scrolls the sidebar, the tooltip
        // will not be hidden.
        if (new Date().getTime() < this._recentKeydownActiveUntil) {
          return;
        }

        this._hideTooltip();
      }
    }, {
      kind: "method",
      key: "_listboxKeydown",
      value: function _listboxKeydown() {
        this._recentKeydownActiveUntil = new Date().getTime() + 100;
      }
    }, {
      kind: "method",
      key: "_showTooltip",
      value: function _showTooltip(item) {
        if (this._tooltipHideTimeout) {
          clearTimeout(this._tooltipHideTimeout);
          this._tooltipHideTimeout = undefined;
        }

        const tooltip = this._tooltip;
        const listbox = this.shadowRoot.querySelector("paper-listbox");
        let top = item.offsetTop + 11;

        if (listbox.contains(item)) {
          top -= listbox.scrollTop;
        }

        tooltip.innerHTML = item.querySelector(".item-text").innerHTML;
        tooltip.style.display = "block";
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${item.offsetLeft + item.clientWidth + 4}px`;
      }
    }, {
      kind: "method",
      key: "_hideTooltip",
      value: function _hideTooltip() {
        // Delay it a little in case other events are pending processing.
        if (!this._tooltipHideTimeout) {
          this._tooltipHideTimeout = window.setTimeout(() => {
            this._tooltipHideTimeout = undefined;
            this._tooltip.style.display = "none";
          }, 10);
        }
      }
    }, {
      kind: "method",
      key: "_handleShowNotificationDrawer",
      value: function _handleShowNotificationDrawer() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "opp-show-notifications");
      }
    }, {
      kind: "method",
      key: "_handleExternalAppConfiguration",
      value: function _handleExternalAppConfiguration(ev) {
        ev.preventDefault();
        this.opp.auth.external.fireMessage({
          type: "config_screen/show"
        });
      }
    }, {
      kind: "method",
      key: "_toggleSidebar",
      value: function _toggleSidebar() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "opp-toggle-menu");
      }
    }, {
      kind: "method",
      key: "_renderPanel",
      value: function _renderPanel(urlPath, icon, title) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <a
        aria-role="option"
        href="${`/${urlPath}`}"
        data-panel="${urlPath}"
        tabindex="-1"
        @mouseenter=${this._itemMouseEnter}
        @mouseleave=${this._itemMouseLeave}
      >
        <paper-icon-item>
          <op-icon slot="item-icon" .icon="${icon}"></op-icon>
          <span class="item-text">${title}</span>
        </paper-icon-item>
      </a>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        height: 100%;
        display: block;
        overflow: hidden;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(--sidebar-background-color);
        width: 64px;
      }
      :host([expanded]) {
        width: 256px;
      }

      .menu {
        box-sizing: border-box;
        height: 65px;
        display: flex;
        padding: 0 12px;
        border-bottom: 1px solid transparent;
        white-space: nowrap;
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        font-size: 20px;
        align-items: center;
      }
      :host([expanded]) .menu {
        width: 256px;
      }

      .menu paper-icon-button {
        color: var(--sidebar-icon-color);
      }
      :host([expanded]) .menu paper-icon-button {
        margin-right: 23px;
      }
      :host([expanded][_rtl]) .menu paper-icon-button {
        margin-right: 0px;
        margin-left: 23px;
      }

      .title {
        display: none;
      }
      :host([expanded]) .title {
        display: initial;
      }

      paper-listbox::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      paper-listbox::-webkit-scrollbar-thumb {
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: var(--scrollbar-thumb-color);
      }

      paper-listbox {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: calc(100% - 196px);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: var(--scrollbar-thumb-color) transparent;
        scrollbar-width: thin;
      }

      a {
        text-decoration: none;
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        position: relative;
        display: block;
        outline: 0;
      }

      paper-icon-item {
        box-sizing: border-box;
        margin: 4px 8px;
        padding-left: 12px;
        border-radius: 4px;
        --paper-item-min-height: 40px;
        width: 48px;
      }
      :host([expanded]) paper-icon-item {
        width: 240px;
      }
      :host([_rtl]) paper-icon-item {
        padding-left: auto;
        padding-right: 12px;
      }

      op-icon[slot="item-icon"] {
        color: var(--sidebar-icon-color);
      }

      .iron-selected paper-icon-item::before,
      a:not(.iron-selected):focus::before {
        border-radius: 4px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      .iron-selected paper-icon-item::before {
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
      }
      a:not(.iron-selected):focus::before {
        background-color: currentColor;
        opacity: var(--dark-divider-opacity);
        margin: 4px 8px;
      }
      .iron-selected paper-icon-item:focus::before,
      .iron-selected:focus paper-icon-item::before {
        opacity: 0.2;
      }

      .iron-selected paper-icon-item[pressed]:before {
        opacity: 0.37;
      }

      paper-icon-item span {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
      }

      a.iron-selected paper-icon-item op-icon {
        color: var(--sidebar-selected-icon-color);
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item .item-text {
        display: none;
        max-width: calc(100% - 56px);
      }
      :host([expanded]) paper-icon-item .item-text {
        display: block;
      }

      .divider {
        bottom: 112px;
        padding: 10px 0;
      }
      .divider::before {
        content: " ";
        display: block;
        height: 1px;
        background-color: var(--divider-color);
      }
      .notifications-container {
        display: flex;
      }
      .notifications {
        cursor: pointer;
      }
      .notifications .item-text {
        flex: 1;
      }
      .profile {
      }
      .profile paper-icon-item {
        padding-left: 4px;
      }
      :host([_rtl]) .profile paper-icon-item {
        padding-left: auto;
        padding-right: 4px;
      }
      .profile .item-text {
        margin-left: 8px;
      }
      :host([_rtl]) .profile .item-text {
        margin-right: 8px;
      }

      .notification-badge {
        min-width: 20px;
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: 400;
        background-color: var(--accent-color);
        line-height: 20px;
        text-align: center;
        padding: 0px 6px;
        color: var(--text-primary-color);
      }
      op-icon + .notification-badge {
        position: absolute;
        bottom: 14px;
        left: 26px;
        font-size: 0.65em;
      }

      .spacer {
        flex: 1;
        pointer-events: none;
      }

      .subheader {
        color: var(--sidebar-text-color);
        font-weight: 500;
        font-size: 14px;
        padding: 16px;
        white-space: nowrap;
      }

      .dev-tools {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
        width: 256px;
        box-sizing: border-box;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }

      .tooltip {
        display: none;
        position: absolute;
        opacity: 0.9;
        border-radius: 2px;
        white-space: nowrap;
        color: var(--sidebar-background-color);
        background-color: var(--sidebar-text-color);
        padding: 4px;
        font-weight: 500;
      }

      :host([_rtl]) .menu paper-icon-button {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("op-sidebar", OpSidebar);

/***/ }),

/***/ "./src/components/user/op-user-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/user/op-user-badge.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");
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




const computeInitials = name => {
  if (!name) {
    return "user";
  }

  return name.trim() // Split by space and take first 3 words
  .split(" ").slice(0, 3) // Of each word, take first letter
  .map(s => s.substr(0, 1)).join("");
};

let StateBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-user-badge")], function (_initialize, _LitElement) {
  class StateBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StateBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "user",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const user = this.user;
        const initials = user ? computeInitials(user.name) : "?";
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${initials}
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(StateBadge.prototype), "updated", this).call(this, changedProps);

        Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_1__["toggleAttribute"])(this, "long", (this.user ? computeInitials(this.user.name) : "?").length > 2);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
        overflow: hidden;
      }

      :host([long]) {
        font-size: 80%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/external_app/external_config.ts":
/*!*********************************************!*\
  !*** ./src/external_app/external_config.ts ***!
  \*********************************************/
/*! exports provided: getExternalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalConfig", function() { return getExternalConfig; });
const getExternalConfig = bus => {
  if (!bus.cache.cfg) {
    bus.cache.cfg = bus.sendMessage({
      type: "config/get"
    });
  }

  return bus.cache.cfg;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Atc2lkZWJhci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3Atc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL29wLXVzZXItYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIGV2ZW50T3B0aW9ucyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuL29wLWljb25cIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy91c2VyL29wLXVzZXItYmFkZ2VcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvb3AtbWVudS1idXR0b25cIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIsIFBhbmVsSW5mbyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgREVGQVVMVF9QQU5FTCB9IGZyb20gXCIuLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7XG4gIGdldEV4dGVybmFsQ29uZmlnLFxuICBFeHRlcm5hbENvbmZpZyxcbn0gZnJvbSBcIi4uL2V4dGVybmFsX2FwcC9leHRlcm5hbF9jb25maWdcIjtcbmltcG9ydCB7XG4gIFBlcnNpc3RlbnROb3RpZmljYXRpb24sXG4gIHN1YnNjcmliZU5vdGlmaWNhdGlvbnMsXG59IGZyb20gXCIuLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBQYXBlckljb25JdGVtRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jb25zdCBTSE9XX0FGVEVSX1NQQUNFUiA9IFtcImNvbmZpZ1wiLCBcImRldmVsb3Blci10b29sc1wiLCBcIm9wcGlvXCJdO1xuXG5jb25zdCBTVVBQT1JUX1NDUk9MTF9JRl9ORUVERUQgPSBcInNjcm9sbEludG9WaWV3SWZOZWVkZWRcIiBpbiBkb2N1bWVudC5ib2R5O1xuXG5jb25zdCBTT1JUX1ZBTFVFX1VSTF9QQVRIUyA9IHtcbiAgbWFwOiAxLFxuICBsb2dib29rOiAyLFxuICBoaXN0b3J5OiAzLFxuICBcImRldmVsb3Blci10b29sc1wiOiA5LFxuICBvcHBpbzogMTAsXG4gIGNvbmZpZzogMTEsXG59O1xuXG5jb25zdCBwYW5lbFNvcnRlciA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFCdWlsdEluID0gYS51cmxfcGF0aCBpbiBTT1JUX1ZBTFVFX1VSTF9QQVRIUztcbiAgY29uc3QgYkJ1aWx0SW4gPSBiLnVybF9wYXRoIGluIFNPUlRfVkFMVUVfVVJMX1BBVEhTO1xuXG4gIGlmIChhQnVpbHRJbiAmJiBiQnVpbHRJbikge1xuICAgIHJldHVybiBTT1JUX1ZBTFVFX1VSTF9QQVRIU1thLnVybF9wYXRoXSAtIFNPUlRfVkFMVUVfVVJMX1BBVEhTW2IudXJsX3BhdGhdO1xuICB9XG4gIGlmIChhQnVpbHRJbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYkJ1aWx0SW4pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICAvLyBib3RoIG5vdCBidWlsdCBpbiwgc29ydCBieSB0aXRsZVxuICBpZiAoYS50aXRsZSEgPCBiLnRpdGxlISkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS50aXRsZSEgPiBiLnRpdGxlISkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgY29tcHV0ZVBhbmVscyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpOiBbUGFuZWxJbmZvW10sIFBhbmVsSW5mb1tdXSA9PiB7XG4gIGNvbnN0IHBhbmVscyA9IG9wcC5wYW5lbHM7XG4gIGlmICghcGFuZWxzKSB7XG4gICAgcmV0dXJuIFtbXSwgW11dO1xuICB9XG5cbiAgY29uc3QgYmVmb3JlU3BhY2VyOiBQYW5lbEluZm9bXSA9IFtdO1xuICBjb25zdCBhZnRlclNwYWNlcjogUGFuZWxJbmZvW10gPSBbXTtcblxuICBPYmplY3QudmFsdWVzKHBhbmVscykuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICBpZiAoIXBhbmVsLnRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChTSE9XX0FGVEVSX1NQQUNFUi5pbmNsdWRlcyhwYW5lbC51cmxfcGF0aClcbiAgICAgID8gYWZ0ZXJTcGFjZXJcbiAgICAgIDogYmVmb3JlU3BhY2VyXG4gICAgKS5wdXNoKHBhbmVsKTtcbiAgfSk7XG5cbiAgYmVmb3JlU3BhY2VyLnNvcnQocGFuZWxTb3J0ZXIpO1xuICBhZnRlclNwYWNlci5zb3J0KHBhbmVsU29ydGVyKTtcblxuICByZXR1cm4gW2JlZm9yZVNwYWNlciwgYWZ0ZXJTcGFjZXJdO1xufTtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBPcFNpZGViYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFsd2F5c0V4cGFuZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgX2RlZmF1bHRQYWdlPzogc3RyaW5nID1cbiAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgfHwgREVGQVVMVF9QQU5FTDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXh0ZXJuYWxDb25maWc/OiBFeHRlcm5hbENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucz86IFBlcnNpc3RlbnROb3RpZmljYXRpb25bXTtcbiAgLy8gcHJvcGVydHkgdXNlZCBvbmx5IGluIGNzc1xuICAvLyBAdHMtaWdub3JlXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHJpdmF0ZSBfcnRsID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbW91c2VMZWF2ZVRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3Rvb2x0aXBIaWRlVGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsID0gMDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IG9wcCA9IHRoaXMub3BwO1xuXG4gICAgaWYgKCFvcHApIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgW2JlZm9yZVNwYWNlciwgYWZ0ZXJTcGFjZXJdID0gY29tcHV0ZVBhbmVscyhvcHApO1xuXG4gICAgbGV0IG5vdGlmaWNhdGlvbkNvdW50ID0gdGhpcy5fbm90aWZpY2F0aW9uc1xuICAgICAgPyB0aGlzLl9ub3RpZmljYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIGZvciAoY29uc3QgZW50aXR5SWQgaW4gb3BwLnN0YXRlcykge1xuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImNvbmZpZ3VyYXRvclwiKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke29wcC5sb2NhbGl6ZShcInVpLnNpZGViYXIuc2lkZWJhcl90b2dnbGVcIil9XG4gICAgICAgICAgICAgICAgLmljb249JHtvcHAuZG9ja2VkU2lkZWJhciA9PT0gXCJkb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgPyBcIm9wcDptZW51LW9wZW5cIlxuICAgICAgICAgICAgICAgICAgOiBcIm9wcDptZW51XCJ9XG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlU2lkZWJhcn1cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpdGxlXCI+T3BlbiBQZWVyIFBvd2VyPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cImRhdGEtcGFuZWxcIlxuICAgICAgICAuc2VsZWN0ZWQ9JHtvcHAucGFuZWxVcmx9XG4gICAgICAgIEBmb2N1c2luPSR7dGhpcy5fbGlzdGJveEZvY3VzSW59XG4gICAgICAgIEBmb2N1c291dD0ke3RoaXMuX2xpc3Rib3hGb2N1c091dH1cbiAgICAgICAgQHNjcm9sbD0ke3RoaXMuX2xpc3Rib3hTY3JvbGx9XG4gICAgICAgIEBrZXlkb3duPSR7dGhpcy5fbGlzdGJveEtleWRvd259XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFuZWwoXG4gICAgICAgICAgdGhpcy5fZGVmYXVsdFBhZ2UsXG4gICAgICAgICAgXCJvcHA6YXBwc1wiLFxuICAgICAgICAgIG9wcC5sb2NhbGl6ZShcInBhbmVsLnN0YXRlc1wiKVxuICAgICAgICApfVxuICAgICAgICAke2JlZm9yZVNwYWNlci5tYXAoKHBhbmVsKSA9PlxuICAgICAgICAgIHRoaXMuX3JlbmRlclBhbmVsKFxuICAgICAgICAgICAgcGFuZWwudXJsX3BhdGgsXG4gICAgICAgICAgICBwYW5lbC5pY29uLFxuICAgICAgICAgICAgb3BwLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlXG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCIgZGlzYWJsZWQ+PC9kaXY+XG5cbiAgICAgICAgJHthZnRlclNwYWNlci5tYXAoKHBhbmVsKSA9PlxuICAgICAgICAgIHRoaXMuX3JlbmRlclBhbmVsKFxuICAgICAgICAgICAgcGFuZWwudXJsX3BhdGgsXG4gICAgICAgICAgICBwYW5lbC5pY29uLFxuICAgICAgICAgICAgb3BwLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlXG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICAke3RoaXMuX2V4dGVybmFsQ29uZmlnICYmIHRoaXMuX2V4dGVybmFsQ29uZmlnLkhhc1NldHRpbmdzU2NyZWVuXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0ke29wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkuc2lkZWJhci5leHRlcm5hbF9hcHBfY29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBocmVmPVwiI2V4dGVybmFsLWFwcC1jb25maWd1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFeHRlcm5hbEFwcENvbmZpZ3VyYXRpb259XG4gICAgICAgICAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9pdGVtTW91c2VFbnRlcn1cbiAgICAgICAgICAgICAgICBAbW91c2VsZWF2ZT0ke3RoaXMuX2l0ZW1Nb3VzZUxlYXZlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICAgIDxvcC1pY29uXG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJpdGVtLWljb25cIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwib3BwOmNlbGxwaG9uZS1zZXR0aW5ncy12YXJpYW50XCJcbiAgICAgICAgICAgICAgICAgID48L29wLWljb24+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAke29wcC5sb2NhbGl6ZShcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zLWNvbnRhaW5lclwiXG4gICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbnNcIlxuICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU2hvd05vdGlmaWNhdGlvbkRyYXdlcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcC1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiBpY29uPVwib3BwOmJlbGxcIj48L29wLWljb24+XG4gICAgICAgICAgJHshdGhpcy5leHBhbmRlZCAmJiBub3RpZmljYXRpb25Db3VudCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1iYWRnZVwiIHNsb3Q9XCJpdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uQ291bnR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgICAgICR7b3BwLmxvY2FsaXplKFwidWkubm90aWZpY2F0aW9uX2RyYXdlci50aXRsZVwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJHt0aGlzLmV4cGFuZGVkICYmIG5vdGlmaWNhdGlvbkNvdW50ID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90aWZpY2F0aW9uLWJhZGdlXCI+JHtub3RpZmljYXRpb25Db3VudH08L3NwYW4+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgcHJvZmlsZTogdHJ1ZSxcbiAgICAgICAgICAvLyBNaW1pY2sgYmVoYXZpb3IgdGhhdCBwYXBlci1saXN0Ym94IHByb3ZpZGVzXG4gICAgICAgICAgXCJpcm9uLXNlbGVjdGVkXCI6IG9wcC5wYW5lbFVybCA9PT0gXCJwcm9maWxlXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxuICAgICAgICBkYXRhLXBhbmVsPVwicGFuZWxcIlxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD0ke29wcC5sb2NhbGl6ZShcInBhbmVsLnByb2ZpbGVcIil9XG4gICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgPG9wLXVzZXItYmFkZ2Ugc2xvdD1cIml0ZW0taWNvblwiIC51c2VyPSR7b3BwLnVzZXJ9Pjwvb3AtdXNlci1iYWRnZT5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAke29wcC51c2VyID8gb3BwLnVzZXIubmFtZSA6IFwiXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgZGlzYWJsZWQgY2xhc3M9XCJib3R0b20tc3BhY2VyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiZXhwYW5kZWRcIikgfHxcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJuYXJyb3dcIikgfHxcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJhbHdheXNFeHBhbmRcIikgfHxcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJfZXh0ZXJuYWxDb25maWdcIikgfHxcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJfbm90aWZpY2F0aW9uc1wiKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHAgfHwgIWNoYW5nZWRQcm9wcy5oYXMoXCJvcHBcIikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkT3BwID0gY2hhbmdlZFByb3BzLmdldChcIm9wcFwiKSBhcyBPcGVuUGVlclBvd2VyO1xuICAgIGlmICghb2xkT3BwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3BwID0gdGhpcy5vcHA7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wcC5wYW5lbHMgIT09IG9sZE9wcC5wYW5lbHMgfHxcbiAgICAgIG9wcC5wYW5lbFVybCAhPT0gb2xkT3BwLnBhbmVsVXJsIHx8XG4gICAgICBvcHAudXNlciAhPT0gb2xkT3BwLnVzZXIgfHxcbiAgICAgIG9wcC5sb2NhbGl6ZSAhPT0gb2xkT3BwLmxvY2FsaXplIHx8XG4gICAgICBvcHAuc3RhdGVzICE9PSBvbGRPcHAuc3RhdGVzXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMub3BwICYmIHRoaXMub3BwLmF1dGguZXh0ZXJuYWwpIHtcbiAgICAgIGdldEV4dGVybmFsQ29uZmlnKHRoaXMub3BwLmF1dGguZXh0ZXJuYWwpLnRoZW4oKGNvbmYpID0+IHtcbiAgICAgICAgdGhpcy5fZXh0ZXJuYWxDb25maWcgPSBjb25mO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbnModGhpcy5vcHAuY29ubmVjdGlvbiwgKG5vdGlmaWNhdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYWx3YXlzRXhwYW5kXCIpKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5hbHdheXNFeHBhbmQ7XG4gICAgfVxuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcIm9wcFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3J0bCA9IGNvbXB1dGVSVEwodGhpcy5vcHApO1xuXG4gICAgaWYgKCFTVVBQT1JUX1NDUk9MTF9JRl9ORUVERUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkT3BwID0gY2hhbmdlZFByb3BzLmdldChcIm9wcFwiKSBhcyBPcGVuUGVlclBvd2VyIHwgdW5kZWZpbmVkO1xuICAgIGlmICghb2xkT3BwIHx8IG9sZE9wcC5wYW5lbFVybCAhPT0gdGhpcy5vcHAucGFuZWxVcmwpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRWwgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCIuaXJvbi1zZWxlY3RlZFwiKTtcbiAgICAgIGlmIChzZWxlY3RlZEVsKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2VsZWN0ZWRFbC5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3Rvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIi50b29sdGlwXCIpISBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2l0ZW1Nb3VzZUVudGVyKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgLy8gT24ga2V5cHJlc3NlcyBvbiB0aGUgbGlzdGJveCwgd2UncmUgZ29pbmcgdG8gaWdub3JlIG1vdXNlIGVudGVyIGV2ZW50c1xuICAgIC8vIGZvciAxMDBtcyBzbyB0aGF0IHdlIGlnbm9yZSBpdCB3aGVuIHByZXNzaW5nIGRvd24gYXJyb3cgc2Nyb2xscyB0aGVcbiAgICAvLyBzaWRlYmFyIGNhdXNpbmcgdGhlIG1vdXNlIHRvIGhvdmVyIGEgbmV3IGljb25cbiAgICBpZiAoXG4gICAgICB0aGlzLmV4cGFuZGVkIHx8XG4gICAgICBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IHRoaXMuX3JlY2VudEtleWRvd25BY3RpdmVVbnRpbFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCk7XG4gICAgICB0aGlzLl9tb3VzZUxlYXZlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fc2hvd1Rvb2x0aXAoZXYuY3VycmVudFRhcmdldCBhcyBQYXBlckljb25JdGVtRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIF9pdGVtTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCk7XG4gICAgfVxuICAgIHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGJveEZvY3VzSW4oZXYpIHtcbiAgICBpZiAodGhpcy5leHBhbmRlZCB8fCBldi50YXJnZXQubm9kZU5hbWUgIT09IFwiQVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3Nob3dUb29sdGlwKGV2LnRhcmdldC5xdWVyeVNlbGVjdG9yKFwicGFwZXItaWNvbi1pdGVtXCIpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3Rib3hGb2N1c091dCgpIHtcbiAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xuICB9XG5cbiAgQGV2ZW50T3B0aW9ucyh7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgfSlcbiAgcHJpdmF0ZSBfbGlzdGJveFNjcm9sbCgpIHtcbiAgICAvLyBPbiBrZXlwcmVzc2VzIG9uIHRoZSBsaXN0Ym94LCB3ZSdyZSBnb2luZyB0byBpZ25vcmUgc2Nyb2xsIGV2ZW50c1xuICAgIC8vIGZvciAxMDBtcyBzbyB0aGF0IGlmIHByZXNzaW5nIGRvd24gYXJyb3cgc2Nyb2xscyB0aGUgc2lkZWJhciwgdGhlIHRvb2x0aXBcbiAgICAvLyB3aWxsIG5vdCBiZSBoaWRkZW4uXG4gICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgdGhpcy5fcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2hpZGVUb29sdGlwKCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0Ym94S2V5ZG93bigpIHtcbiAgICB0aGlzLl9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwMDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dUb29sdGlwKGl0ZW06IFBhcGVySWNvbkl0ZW1FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCk7XG4gICAgICB0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLl90b29sdGlwO1xuICAgIGNvbnN0IGxpc3Rib3ggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1saXN0Ym94XCIpITtcbiAgICBsZXQgdG9wID0gaXRlbS5vZmZzZXRUb3AgKyAxMTtcbiAgICBpZiAobGlzdGJveC5jb250YWlucyhpdGVtKSkge1xuICAgICAgdG9wIC09IGxpc3Rib3guc2Nyb2xsVG9wO1xuICAgIH1cbiAgICB0b29sdGlwLmlubmVySFRNTCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5pdGVtLXRleHRcIikhLmlubmVySFRNTDtcbiAgICB0b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgdG9vbHRpcC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGAke2l0ZW0ub2Zmc2V0TGVmdCArIGl0ZW0uY2xpZW50V2lkdGggKyA0fXB4YDtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGVUb29sdGlwKCkge1xuICAgIC8vIERlbGF5IGl0IGEgbGl0dGxlIGluIGNhc2Ugb3RoZXIgZXZlbnRzIGFyZSBwZW5kaW5nIHByb2Nlc3NpbmcuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl90b29sdGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTaG93Tm90aWZpY2F0aW9uRHJhd2VyKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9wcC1zaG93LW5vdGlmaWNhdGlvbnNcIik7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFeHRlcm5hbEFwcENvbmZpZ3VyYXRpb24oZXY6IEV2ZW50KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9wcC5hdXRoLmV4dGVybmFsIS5maXJlTWVzc2FnZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZ19zY3JlZW4vc2hvd1wiLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJvcHAtdG9nZ2xlLW1lbnVcIik7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJQYW5lbCh1cmxQYXRoLCBpY29uLCB0aXRsZSkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgaHJlZj1cIiR7YC8ke3VybFBhdGh9YH1cIlxuICAgICAgICBkYXRhLXBhbmVsPVwiJHt1cmxQYXRofVwiXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICBAbW91c2VlbnRlcj0ke3RoaXMuX2l0ZW1Nb3VzZUVudGVyfVxuICAgICAgICBAbW91c2VsZWF2ZT0ke3RoaXMuX2l0ZW1Nb3VzZUxlYXZlfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgIDxvcC1pY29uIHNsb3Q9XCJpdGVtLWljb25cIiAuaWNvbj1cIiR7aWNvbn1cIj48L29wLWljb24+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICA8L2E+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSB7XG4gICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgIH1cblxuICAgICAgLm1lbnUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSAubWVudSB7XG4gICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgIH1cblxuICAgICAgLm1lbnUgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXVtfcnRsXSkgLm1lbnUgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjRyZW07XG4gICAgICAgIGhlaWdodDogMC40cmVtO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci10aHVtYi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWxpc3Rib3gge1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxOTZweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItdGh1bWItY29sb3IpIHRyYW5zcGFyZW50O1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIC0tcGFwZXItaXRlbS1taW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF0pIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtfcnRsXSkgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBvcC1pY29uW3Nsb3Q9XCJpdGVtLWljb25cIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmlyb24tc2VsZWN0ZWQgcGFwZXItaWNvbi1pdGVtOjpiZWZvcmUsXG4gICAgICBhOm5vdCguaXJvbi1zZWxlY3RlZCk6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1bXMgbGluZWFyO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgIH1cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC1pY29uLWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC4xMjtcbiAgICAgIH1cbiAgICAgIGE6bm90KC5pcm9uLXNlbGVjdGVkKTpmb2N1czo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpdmlkZXItb3BhY2l0eSk7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcbiAgICAgIH1cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbTpmb2N1czo6YmVmb3JlLFxuICAgICAgLmlyb24tc2VsZWN0ZWQ6Zm9jdXMgcGFwZXItaWNvbi1pdGVtOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbVtwcmVzc2VkXTpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjM3O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGEuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW0gb3AtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLWljb24tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBhLmlyb24tc2VsZWN0ZWQgLml0ZW0tdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNTZweCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGJvdHRvbTogMTEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cbiAgICAgIC5kaXZpZGVyOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5ub3RpZmljYXRpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9ucyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5ub3RpZmljYXRpb25zIC5pdGVtLXRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUge1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbX3J0bF0pIC5wcm9maWxlIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYXV0bztcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgfVxuICAgICAgLnByb2ZpbGUgLml0ZW0tdGV4dCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbX3J0bF0pIC5wcm9maWxlIC5pdGVtLXRleHQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIG9wLWljb24gKyAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE0cHg7XG4gICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xuICAgICAgfVxuXG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5zdWJoZWFkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAuZGV2LXRvb2xzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgd2lkdGg6IDI1NnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAuZGV2LXRvb2xzIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnRvb2x0aXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbX3J0bF0pIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1zaWRlYmFyXCI6IE9wU2lkZWJhcjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1zaWRlYmFyXCIsIE9wU2lkZWJhcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgdG9nZ2xlQXR0cmlidXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vdG9nZ2xlX2F0dHJpYnV0ZVwiO1xuXG5jb25zdCBjb21wdXRlSW5pdGlhbHMgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBcInVzZXJcIjtcbiAgfVxuICByZXR1cm4gKFxuICAgIG5hbWVcbiAgICAgIC50cmltKClcbiAgICAgIC8vIFNwbGl0IGJ5IHNwYWNlIGFuZCB0YWtlIGZpcnN0IDMgd29yZHNcbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5zbGljZSgwLCAzKVxuICAgICAgLy8gT2YgZWFjaCB3b3JkLCB0YWtlIGZpcnN0IGxldHRlclxuICAgICAgLm1hcCgocykgPT4gcy5zdWJzdHIoMCwgMSkpXG4gICAgICAuam9pbihcIlwiKVxuICApO1xufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC11c2VyLWJhZGdlXCIpXG5jbGFzcyBTdGF0ZUJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB1c2VyPzogVXNlciB8IEN1cnJlbnRVc2VyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgY29uc3QgaW5pdGlhbHMgPSB1c2VyID8gY29tcHV0ZUluaXRpYWxzKHVzZXIubmFtZSkgOiBcIj9cIjtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7aW5pdGlhbHN9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0b2dnbGVBdHRyaWJ1dGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJsb25nXCIsXG4gICAgICAodGhpcy51c2VyID8gY29tcHV0ZUluaXRpYWxzKHRoaXMudXNlci5uYW1lKSA6IFwiP1wiKS5sZW5ndGggPiAyXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2xvbmddKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLXVzZXItYmFkZ2VcIjogU3RhdGVCYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRXh0ZXJuYWxNZXNzYWdpbmcgfSBmcm9tIFwiLi9leHRlcm5hbF9tZXNzYWdpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbENvbmZpZyB7XG4gIEhhc1NldHRpbmdzU2NyZWVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RXh0ZXJuYWxDb25maWcgPSAoXG4gIGJ1czogRXh0ZXJuYWxNZXNzYWdpbmdcbik6IFByb21pc2U8RXh0ZXJuYWxDb25maWc+ID0+IHtcbiAgaWYgKCFidXMuY2FjaGUuY2ZnKSB7XG4gICAgYnVzLmNhY2hlLmNmZyA9IGJ1cy5zZW5kTWVzc2FnZTxFeHRlcm5hbENvbmZpZz4oe1xuICAgICAgdHlwZTogXCJjb25maWcvZ2V0XCIsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJ1cy5jYWNoZS5jZmc7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBOzs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBR0E7O0FBUEE7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBOzs7QUFTQTtBQU9BOzs7QUFJQTs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOzs7O0FBbkJBOzs7Ozs7O0FBK0JBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUdBOztBQUhBOztBQVFBOztBQUVBO0FBRUE7QUFGQTs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7OztBQVNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7O0FBeEhBO0FBK0hBOzs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBWEE7QUFlQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4UEE7OztBQTFsQkE7QUFDQTtBQWttQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHNCQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFrQkE7OztBQXZDQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==