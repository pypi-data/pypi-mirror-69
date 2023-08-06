(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-devices~panel-config-entities"],{

/***/ "./src/layouts/opp-tabs-subpage-data-table.ts":
/*!****************************************************!*\
  !*** ./src/layouts/opp-tabs-subpage-data-table.ts ***!
  \****************************************************/
/*! exports provided: OpTabsSubpageDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpTabsSubpageDataTable", function() { return OpTabsSubpageDataTable; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_data_table_op_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/data-table/op-data-table */ "./src/components/data-table/op-data-table.ts");
/* harmony import */ var _opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
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


 // tslint:disable-next-line


let OpTabsSubpageDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("opp-tabs-subpage-data-table")], function (_initialize, _LitElement) {
  class OpTabsSubpageDataTable extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpTabsSubpageDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Object
      })],
      key: "columns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Array
      })],
      key: "data",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: String
      })],
      key: "id",

      value() {
        return "id";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: String
      })],
      key: "filter",

      value() {
        return "";
      }

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
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("op-data-table")],
      key: "_dataTable",
      value: void 0
    }, {
      kind: "method",
      key: "clearSelection",
      value:
      /**
       * Object with the columns.
       * @type {Object}
       */

      /**
       * Data to show in the table.
       * @type {Array}
       */

      /**
       * Should rows be selectable.
       * @type {Boolean}
       */

      /**
       * Field with a unique id per entry in data.
       * @type {String}
       */

      /**
       * String to filter the data in the data table on.
       * @type {String}
       */

      /**
       * What path to use when the back button is pressed.
       * @type {String}
       * @attr back-path
       */

      /**
       * Function to call when the back button is pressed.
       * @type {() => void}
       */

      /**
       * Array of tabs to show on the page.
       * @type {Array}
       */
      function clearSelection() {
        this._dataTable.clearSelection();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        .backPath=${this.backPath}
        .backCallback=${this.backCallback}
        .route=${this.route}
        .tabs=${this.tabs}
      >
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div slot="header">
                <slot name="header">
                  <div class="search-toolbar">
                    <search-input
                      no-label-float
                      no-underline
                      @value-changed=${this._handleSearchChange}
                    ></search-input>
                  </div>
                </slot>
              </div>
            ` : ""}
        <op-data-table
          .columns=${this.columns}
          .data=${this.data}
          .filter=${this.filter}
          .selectable=${this.selectable}
          .id=${this.id}
        >
          ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div slot="header">
                  <slot name="header">
                    <slot name="header">
                      <div class="table-header">
                        <search-input
                          no-label-float
                          no-underline
                          @value-changed=${this._handleSearchChange}
                        ></search-input></div></slot
                  ></slot>
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div slot="header"></div>
              `}
        </op-data-table>
      </opp-tabs-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this.filter = ev.detail.value;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      op-data-table {
        width: 100%;
        --data-table-border-width: 0;
      }
      :host(:not([narrow])) op-data-table {
        height: calc(100vh - 65px);
        display: block;
      }
      .table-header {
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      }
      .search-toolbar {
        margin-left: -24px;
        color: var(--secondary-text-color);
      }
      search-input {
        position: relative;
        top: 2px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLWVudGl0aWVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvb3BwLXRhYnMtc3VicGFnZS1kYXRhLXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgcXVlcnksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9vcC1kYXRhLXRhYmxlXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7XG4gIE9wRGF0YVRhYmxlLFxuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG4gIERhdGFUYWJsZVJvd0RhdGEsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZVwiO1xuaW1wb3J0IFwiLi9vcHAtdGFicy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyLCBSb3V0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbiB9IGZyb20gXCIuL29wcC10YWJzLXN1YnBhZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcHAtdGFicy1zdWJwYWdlLWRhdGEtdGFibGVcIilcbmV4cG9ydCBjbGFzcyBPcFRhYnNTdWJwYWdlRGF0YVRhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcbiAgLyoqXG4gICAqIE9iamVjdCB3aXRoIHRoZSBjb2x1bW5zLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7fTtcbiAgLyoqXG4gICAqIERhdGEgdG8gc2hvdyBpbiB0aGUgdGFibGUuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pIHB1YmxpYyBkYXRhOiBEYXRhVGFibGVSb3dEYXRhW10gPSBbXTtcbiAgLyoqXG4gICAqIFNob3VsZCByb3dzIGJlIHNlbGVjdGFibGUuXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAvKipcbiAgICogRmllbGQgd2l0aCBhIHVuaXF1ZSBpZCBwZXIgZW50cnkgaW4gZGF0YS5cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwdWJsaWMgaWQgPSBcImlkXCI7XG4gIC8qKlxuICAgKiBTdHJpbmcgdG8gZmlsdGVyIHRoZSBkYXRhIGluIHRoZSBkYXRhIHRhYmxlIG9uLlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHB1YmxpYyBmaWx0ZXIgPSBcIlwiO1xuICAvKipcbiAgICogV2hhdCBwYXRoIHRvIHVzZSB3aGVuIHRoZSBiYWNrIGJ1dHRvbiBpcyBwcmVzc2VkLlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKiBAYXR0ciBiYWNrLXBhdGhcbiAgICovXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImJhY2stcGF0aFwiIH0pIHB1YmxpYyBiYWNrUGF0aD86IHN0cmluZztcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgcHJlc3NlZC5cbiAgICogQHR5cGUgeygpID0+IHZvaWR9XG4gICAqL1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYmFja0NhbGxiYWNrPzogKCkgPT4gdm9pZDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJvdXRlITogUm91dGU7XG4gIC8qKlxuICAgKiBBcnJheSBvZiB0YWJzIHRvIHNob3cgb24gdGhlIHBhZ2UuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB0YWJzITogUGFnZU5hdmlnYXRpb25bXTtcbiAgQHF1ZXJ5KFwib3AtZGF0YS10YWJsZVwiKSBwcml2YXRlIF9kYXRhVGFibGUhOiBPcERhdGFUYWJsZTtcblxuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5fZGF0YVRhYmxlLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcHAtdGFicy1zdWJwYWdlXG4gICAgICAgIC5vcHA9JHt0aGlzLm9wcH1cbiAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAuYmFja1BhdGg9JHt0aGlzLmJhY2tQYXRofVxuICAgICAgICAuYmFja0NhbGxiYWNrPSR7dGhpcy5iYWNrQ2FsbGJhY2t9XG4gICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgIC50YWJzPSR7dGhpcy50YWJzfVxuICAgICAgPlxuICAgICAgICAke3RoaXMubmFycm93XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5vLWxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICAgICAgbm8tdW5kZXJsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8b3AtZGF0YS10YWJsZVxuICAgICAgICAgIC5jb2x1bW5zPSR7dGhpcy5jb2x1bW5zfVxuICAgICAgICAgIC5kYXRhPSR7dGhpcy5kYXRhfVxuICAgICAgICAgIC5maWx0ZXI9JHt0aGlzLmZpbHRlcn1cbiAgICAgICAgICAuc2VsZWN0YWJsZT0ke3RoaXMuc2VsZWN0YWJsZX1cbiAgICAgICAgICAuaWQ9JHt0aGlzLmlkfVxuICAgICAgICA+XG4gICAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm8tbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm8tdW5kZXJsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc2VhcmNoLWlucHV0PjwvZGl2Pjwvc2xvdFxuICAgICAgICAgICAgICAgICAgPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cImhlYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L29wLWRhdGEtdGFibGU+XG4gICAgICA8L29wcC10YWJzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlYXJjaENoYW5nZShldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLmZpbHRlciA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG9wLWRhdGEtdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1kYXRhLXRhYmxlLWJvcmRlci13aWR0aDogMDtcbiAgICAgIH1cbiAgICAgIDpob3N0KDpub3QoW25hcnJvd10pKSBvcC1kYXRhLXRhYmxlIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjEyKTtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2gtdG9vbGJhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQU1BO0FBTUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQVJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFiQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQWxCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF1QkE7QUFBQTtBQXZCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUE0QkE7QUFBQTtBQTVCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFrQ0E7QUFBQTtBQUFBO0FBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7Ozs7O0FBTUE7Ozs7O0FBTUE7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFsREE7QUFBQTtBQUFBO0FBQUE7QUFxREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBUUE7Ozs7O0FBUkE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBU0E7Ozs7QUFUQTs7QUFnQkE7OztBQS9DQTtBQW1EQTtBQXhHQTtBQUFBO0FBQUE7QUFBQTtBQTJHQTtBQUNBO0FBNUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFwSUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=