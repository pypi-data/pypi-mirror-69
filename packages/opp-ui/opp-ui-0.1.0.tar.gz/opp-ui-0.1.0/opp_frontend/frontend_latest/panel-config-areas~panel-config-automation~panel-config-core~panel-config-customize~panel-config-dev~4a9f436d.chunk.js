(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-areas~panel-config-automation~panel-config-core~panel-config-customize~panel-config-dev~4a9f436d"],{

/***/ "./src/layouts/opp-tabs-subpage.ts":
/*!*****************************************!*\
  !*** ./src/layouts/opp-tabs-subpage.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_op_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/op-paper-icon-button-arrow-prev */ "./src/components/op-paper-icon-button-arrow-prev.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
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









let OppTabsSubpage = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("opp-tabs-subpage")], function (_initialize, _LitElement) {
  class OppTabsSubpage extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OppTabsSubpage,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: String,
        attribute: "back-path"
      })],
      key: "backPath",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "backCallback",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "oppio",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "showAdvanced",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "tabs",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "narrow",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_activeTab",

      value() {
        return -1;
      }

    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(OppTabsSubpage.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("route")) {
          this._activeTab = this.tabs.findIndex(tab => this.route.prefix.includes(tab.path));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="toolbar">
        <op-paper-icon-button-arrow-prev
          aria-label="Back"
          .oppio=${this.oppio}
          @click=${this._backTapped}
        ></op-paper-icon-button-arrow-prev>
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div main-title><slot name="header"></slot></div>
            ` : ""}
        <div id="tabbar" class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
          "bottom-bar": this.narrow
        })}>
          ${this.tabs.map((page, index) => (!page.component || page.core || Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_6__["isComponentLoaded"])(this.opp, page.component)) && (!page.exportOnly || this.showAdvanced) ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div
                    class="tab ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
          active: index === this._activeTab
        })}"
                    @click=${this._tabTapped}
                    .path=${page.path}
                  >
                    ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <op-icon .icon=${page.icon}></op-icon>
                        ` : ""}
                    ${!this.narrow || index === this._activeTab ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <span class="name"
                            >${page.translationKey ? this.opp.localize(page.translationKey) : name}</span
                          >
                        ` : ""}
                    <mwc-ripple></mwc-ripple>
                  </div>
                ` : "")}
        </div>

        <div id="toolbar-icon">
          <slot name="toolbar-icon"></slot>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_tabTapped",
      value: function _tabTapped(ev) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, ev.currentTarget.path, true);
      }
    }, {
      kind: "method",
      key: "_backTapped",
      value: function _backTapped() {
        if (this.backPath) {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(this, this.backPath);
          return;
        }

        if (this.backCallback) {
          this.backCallback();
          return;
        }

        history.back();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 100%;
        background-color: var(--primary-background-color);
      }

      .toolbar {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: 65px;
        background-color: var(--sidebar-background-color);
        font-weight: 400;
        color: var(--sidebar-text-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 0 16px;
        box-sizing: border-box;
      }

      #tabbar {
        display: flex;
        font-size: 14px;
      }

      #tabbar.bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 16px;
        box-sizing: border-box;
        background-color: var(--sidebar-background-color);
        border-top: 1px solid var(--divider-color);
        justify-content: space-between;
        z-index: 1;
        font-size: 12px;
        width: 100%;
      }

      #tabbar:not(.bottom-bar) {
        margin: auto;
        left: 50%;
        position: absolute;
        transform: translate(-50%, 0);
      }

      .tab {
        padding: 0 32px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 64px;
        cursor: pointer;
      }

      .name {
        white-space: nowrap;
      }

      .tab.active {
        color: var(--primary-color);
      }

      #tabbar:not(.bottom-bar) .tab.active {
        border-bottom: 2px solid var(--primary-color);
      }

      .bottom-bar .tab {
        padding: 0 16px;
        width: 20%;
        min-width: 0;
      }

      op-menu-button,
      op-paper-icon-button-arrow-prev,
      ::slotted([slot="toolbar-icon"]) {
        pointer-events: auto;
        color: var(--sidebar-icon-color);
      }

      [main-title] {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
      }

      .content {
        position: relative;
        width: 100%;
        height: calc(100% - 65px);
        overflow-y: auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      #toolbar-icon {
        position: absolute;
        right: 16px;
      }

      :host([narrow]) .content {
        height: calc(100% - 128px);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWFzfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1jb3JlfnBhbmVsLWNvbmZpZy1jdXN0b21pemV+cGFuZWwtY29uZmlnLWRldn40YTlmNDM2ZC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL29wcC10YWJzLXN1YnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9vcC1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9vcC1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgUm91dGUsIE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1yaXBwbGVcIjtcbmltcG9ydCB7IGlzQ29tcG9uZW50TG9hZGVkIH0gZnJvbSBcIi4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VOYXZpZ2F0aW9uIHtcbiAgcGF0aDogc3RyaW5nO1xuICB0cmFuc2xhdGlvbktleT86IHN0cmluZztcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBjb3JlPzogYm9vbGVhbjtcbiAgZXhwb3J0T25seT86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG4gIGluZm8/OiBhbnk7XG59XG5cbkBjdXN0b21FbGVtZW50KFwib3BwLXRhYnMtc3VicGFnZVwiKVxuY2xhc3MgT3BwVGFic1N1YnBhZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9wcCE6IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImJhY2stcGF0aFwiIH0pIHB1YmxpYyBiYWNrUGF0aD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGJhY2tDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIG9wcGlvID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dBZHZhbmNlZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHRhYnMhOiBQYWdlTmF2aWdhdGlvbltdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBuYXJyb3cgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aXZlVGFiOiBudW1iZXIgPSAtMTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwicm91dGVcIikpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhYiA9IHRoaXMudGFicy5maW5kSW5kZXgoKHRhYikgPT5cbiAgICAgICAgdGhpcy5yb3V0ZS5wcmVmaXguaW5jbHVkZXModGFiLnBhdGgpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICAgICAgPG9wLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFja1wiXG4gICAgICAgICAgLm9wcGlvPSR7dGhpcy5vcHBpb31cbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9iYWNrVGFwcGVkfVxuICAgICAgICA+PC9vcC1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2PlxuICAgICAgICAke3RoaXMubmFycm93XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxkaXYgaWQ9XCJ0YWJiYXJcIiBjbGFzcz0ke2NsYXNzTWFwKHsgXCJib3R0b20tYmFyXCI6IHRoaXMubmFycm93IH0pfT5cbiAgICAgICAgICAke3RoaXMudGFicy5tYXAoKHBhZ2UsIGluZGV4KSA9PlxuICAgICAgICAgICAgKCFwYWdlLmNvbXBvbmVudCB8fFxuICAgICAgICAgICAgICBwYWdlLmNvcmUgfHxcbiAgICAgICAgICAgICAgaXNDb21wb25lbnRMb2FkZWQodGhpcy5vcHAsIHBhZ2UuY29tcG9uZW50KSkgJiZcbiAgICAgICAgICAgICghcGFnZS5leHBvcnRPbmx5IHx8IHRoaXMuc2hvd0FkdmFuY2VkKVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IHRoaXMuX2FjdGl2ZVRhYixcbiAgICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdGFiVGFwcGVkfVxuICAgICAgICAgICAgICAgICAgICAucGF0aD0ke3BhZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWljb24gLmljb249JHtwYWdlLmljb259Pjwvb3AtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICR7IXRoaXMubmFycm93IHx8IGluZGV4ID09PSB0aGlzLl9hY3RpdmVUYWJcbiAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7cGFnZS50cmFuc2xhdGlvbktleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShwYWdlLnRyYW5zbGF0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuYW1lfTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8bXdjLXJpcHBsZT48L213Yy1yaXBwbGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwidG9vbGJhci1pY29uXCI+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3RhYlRhcHBlZChldjogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG5hdmlnYXRlKHRoaXMsIChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkucGF0aCwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9iYWNrVGFwcGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJhY2tQYXRoKSB7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCB0aGlzLmJhY2tQYXRoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmFja0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLmJhY2tDYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnRvb2xiYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAjdGFiYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAjdGFiYmFyLmJvdHRvbS1iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI3RhYmJhcjpub3QoLmJvdHRvbS1iYXIpIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICB9XG5cbiAgICAgIC50YWIge1xuICAgICAgICBwYWRkaW5nOiAwIDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAubmFtZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIC50YWIuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAjdGFiYmFyOm5vdCguYm90dG9tLWJhcikgLnRhYi5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5ib3R0b20tYmFyIC50YWIge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgb3AtbWVudS1idXR0b24sXG4gICAgICBvcC1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2LFxuICAgICAgOjpzbG90dGVkKFtzbG90PVwidG9vbGJhci1pY29uXCJdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1pY29uLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW21haW4tdGl0bGVdIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG5cbiAgICAgICN0b29sYmFyLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbmFycm93XSkgLmNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyOHB4KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcHAtdGFicy1zdWJwYWdlXCI6IE9wcFRhYnNTdWJwYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFBQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQUFBOzs7OztBQUNBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBRUE7QUFGQTtBQUtBOztBQUdBOztBQUhBOzs7QUFqQkE7Ozs7Ozs7Ozs7QUFkQTtBQXVEQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBMEdBOzs7QUF6TUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==