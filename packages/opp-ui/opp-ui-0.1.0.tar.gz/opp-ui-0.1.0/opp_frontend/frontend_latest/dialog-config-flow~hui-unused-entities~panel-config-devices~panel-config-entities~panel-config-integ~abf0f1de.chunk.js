(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"],{

/***/ "./src/common/search/search-input.ts":
/*!*******************************************!*\
  !*** ./src/common/search/search-input.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
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









let SearchInput = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("search-input")], function (_initialize, _LitElement) {
  class SearchInput extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: SearchInput,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "filter",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        attribute: "no-label-float"
      })],
      key: "noLabelFloat",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Boolean,
        attribute: "no-underline"
      })],
      key: "noUnderline",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "focus",
      value: function focus() {
        this.shadowRoot.querySelector("paper-input").focus();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .no-underline {
          --paper-input-container-underline: {
            display: none;
            height: 0;
          }
        }
      </style>
      <div class="search-container">
        <paper-input
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_6__["classMap"])({
          "no-underline": this.noUnderline
        })}
          autofocus
          label="Search"
          .value=${this.filter}
          @value-changed=${this._filterInputChanged}
          .noLabelFloat=${this.noLabelFloat}
        >
          <op-icon icon="opp:magnify" slot="prefix" class="prefix"></op-icon>
          ${this.filter && lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                slot="suffix"
                class="suffix"
                @click=${this._clearSearch}
                icon="opp:close"
                alt="Clear"
                title="Clear"
              ></paper-icon-button>
            `}
        </paper-input>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_filterChanged",
      value: async function _filterChanged(value) {
        Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", {
          value: String(value)
        });
      }
    }, {
      kind: "method",
      key: "_filterInputChanged",
      value: async function _filterInputChanged(e) {
        this._filterChanged(e.target.value);
      }
    }, {
      kind: "method",
      key: "_clearSearch",
      value: async function _clearSearch() {
        this._filterChanged("");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"]`
      paper-input {
        flex: 1 1 auto;
        margin: 0 16px;
      }
      .search-container {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
      .prefix {
        margin: 8px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmh1aS11bnVzZWQtZW50aXRpZXN+cGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLWVudGl0aWVzfnBhbmVsLWNvbmZpZy1pbnRlZ35hYmYwZjFkZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCwgaHRtbCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWljb25cIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic2VhcmNoLWlucHV0XCIpXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwibm8tbGFiZWwtZmxvYXRcIiB9KVxuICBwdWJsaWMgbm9MYWJlbEZsb2F0PyA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwibm8tdW5kZXJsaW5lXCIgfSlcbiAgcHVibGljIG5vVW5kZXJsaW5lID0gZmFsc2U7XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpIS5mb2N1cygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5uby11bmRlcmxpbmUge1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXVuZGVybGluZToge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHsgXCJuby11bmRlcmxpbmVcIjogdGhpcy5ub1VuZGVybGluZSB9KX1cbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9maWx0ZXJJbnB1dENoYW5nZWR9XG4gICAgICAgICAgLm5vTGFiZWxGbG9hdD0ke3RoaXMubm9MYWJlbEZsb2F0fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wLWljb24gaWNvbj1cIm9wcDptYWduaWZ5XCIgc2xvdD1cInByZWZpeFwiIGNsYXNzPVwicHJlZml4XCI+PC9vcC1pY29uPlxuICAgICAgICAgICR7dGhpcy5maWx0ZXIgJiZcbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9jbGVhclNlYXJjaH1cbiAgICAgICAgICAgICAgICBpY29uPVwib3BwOmNsb3NlXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhclwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IFN0cmluZyh2YWx1ZSkgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJJbnB1dENoYW5nZWQoZSkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJTZWFyY2goKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucHJlZml4IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic2VhcmNoLWlucHV0XCI6IFNlYXJjaElucHV0O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBS0E7Ozs7O0FBS0E7OztBQTdCQTtBQWlDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7OztBQTFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9