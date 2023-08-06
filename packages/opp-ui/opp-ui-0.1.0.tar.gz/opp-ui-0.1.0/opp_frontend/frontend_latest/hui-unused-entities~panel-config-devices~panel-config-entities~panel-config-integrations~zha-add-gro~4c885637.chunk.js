(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/components/data-table/sort_filter_worker.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["filterSortData","filterData","sortData"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "218acaa6010915001ec1.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/components/data-table/op-data-table.ts":
/*!****************************************************!*\
  !*** ./src/components/data-table/op-data-table.ts ***!
  \****************************************************/
/*! exports provided: OpDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpDataTable", function() { return OpDataTable; });
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/data-table */ "./node_modules/@material/data-table/index.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workerize-loader!./sort_filter_worker */ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _op_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../op-checkbox */ "./src/components/op-checkbox.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
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






 // eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies




 // tslint:disable-next-line




let OpDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("op-data-table")], function (_initialize, _BaseElement) {
  class OpDataTable extends _BaseElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Object
      })],
      key: "columns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "data",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "selectable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "id",

      value() {
        return "id";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "mdcFoundation",
      value: void 0
    }, {
      kind: "field",
      key: "mdcFoundationClass",

      value() {
        return _material_data_table__WEBPACK_IMPORTED_MODULE_2__["MDCDataTableFoundation"];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])(".mdc-data-table")],
      key: "mdcRoot",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["queryAll"])(".mdc-data-table__row")],
      key: "rowElements",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_filterable",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerChecked",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerIndeterminate",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_checkedRows",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_filter",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortColumn",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortDirection",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_filteredData",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("slot[name='header']")],
      key: "_header",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])(".scroller")],
      key: "_scroller",
      value: void 0
    }, {
      kind: "field",
      key: "_sortColumns",

      value() {
        return {};
      }

    }, {
      kind: "field",
      key: "curRequest",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      key: "_worker",
      value: void 0
    }, {
      kind: "field",
      key: "_debounceSearch",

      value() {
        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_12__["debounce"])(value => {
          this._filter = value;
        }, 200, false);
      }

    }, {
      kind: "method",
      key: "clearSelection",
      value: function clearSelection() {
        this._headerChecked = false;
        this._headerIndeterminate = false;
        this.mdcFoundation.handleHeaderRowCheckboxChange();
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(OpDataTable.prototype), "firstUpdated", this).call(this);

        this._worker = workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default()();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(properties) {
        _get(_getPrototypeOf(OpDataTable.prototype), "updated", this).call(this, properties);

        if (properties.has("columns")) {
          this._filterable = Object.values(this.columns).some(column => column.filterable);

          for (const columnId in this.columns) {
            if (this.columns[columnId].direction) {
              this._sortDirection = this.columns[columnId].direction;
              this._sortColumn = columnId;
              break;
            }
          }

          const clonedColumns = Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__["default"])(this.columns);
          Object.values(clonedColumns).forEach(column => {
            delete column.title;
            delete column.type;
            delete column.template;
          });
          this._sortColumns = clonedColumns;
        }

        if (properties.has("filter")) {
          this._debounceSearch(this.filter);
        }

        if (properties.has("data") || properties.has("columns") || properties.has("_filter") || properties.has("_sortColumn") || properties.has("_sortDirection")) {
          this._filterData();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <div class="mdc-data-table">
        <slot name="header" @slotchange=${this._calcScrollHeight}>
          ${this._filterable ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                <div class="table-header">
                  <search-input
                    @value-changed=${this._handleSearchChange}
                  ></search-input>
                </div>
              ` : ""}
        </slot>
        <div class="scroller">
          <table class="mdc-data-table__table">
            <thead>
              <tr class="mdc-data-table__header-row">
                ${this.selectable ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                      <th
                        class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
                        role="columnheader"
                        scope="col"
                      >
                        <op-checkbox
                          class="mdc-data-table__row-checkbox"
                          @change=${this._handleHeaderRowCheckboxChange}
                          .indeterminate=${this._headerIndeterminate}
                          .checked=${this._headerChecked}
                        >
                        </op-checkbox>
                      </th>
                    ` : ""}
                ${Object.entries(this.columns).map(columnEntry => {
          const [key, column] = columnEntry;
          const sorted = key === this._sortColumn;
          const classes = {
            "mdc-data-table__header-cell--numeric": Boolean(column.type && column.type === "numeric"),
            "mdc-data-table__header-cell--icon": Boolean(column.type && column.type === "icon"),
            sortable: Boolean(column.sortable),
            "not-sorted": Boolean(column.sortable && !sorted)
          };
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                    <th
                      class="mdc-data-table__header-cell ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])(classes)}"
                      role="columnheader"
                      scope="col"
                      @click=${this._handleHeaderClick}
                      data-column-id="${key}"
                    >
                      ${column.sortable ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                            <op-icon
                              .icon=${sorted && this._sortDirection === "desc" ? "opp:arrow-down" : "opp:arrow-up"}
                            ></op-icon>
                          ` : ""}
                      <span>${column.title}</span>
                    </th>
                  `;
        })}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__["repeat"])(this._filteredData, row => row[this.id], row => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                  <tr
                    data-row-id="${row[this.id]}"
                    @click=${this._handleRowClick}
                    class="mdc-data-table__row"
                    .selectable=${row.selectable !== false}
                  >
                    ${this.selectable ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                          <td
                            class="mdc-data-table__cell mdc-data-table__cell--checkbox"
                          >
                            <op-checkbox
                              class="mdc-data-table__row-checkbox"
                              @change=${this._handleRowCheckboxChange}
                              .disabled=${row.selectable === false}
                              .checked=${this._checkedRows.includes(String(row[this.id]))}
                            >
                            </op-checkbox>
                          </td>
                        ` : ""}
                    ${Object.entries(this.columns).map(columnEntry => {
          const [key, column] = columnEntry;
          return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"]`
                        <td
                          class="mdc-data-table__cell ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
            "mdc-data-table__cell--numeric": Boolean(column.type && column.type === "numeric"),
            "mdc-data-table__cell--icon": Boolean(column.type && column.type === "icon")
          })}"
                        >
                          ${column.template ? column.template(row[key], row) : row[key]}
                        </td>
                      `;
        })}
                  </tr>
                `)}
            </tbody>
          </table>
        </div>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "createAdapter",
      value: function createAdapter() {
        return {
          addClassAtRowIndex: (rowIndex, cssClasses) => {
            if (!this.rowElements[rowIndex].selectable) {
              return;
            }

            this.rowElements[rowIndex].classList.add(cssClasses);
          },
          getRowCount: () => this.rowElements.length,
          getRowElements: () => this.rowElements,
          getRowIdAtIndex: rowIndex => this._getRowIdAtIndex(rowIndex),
          getRowIndexByChildElement: el => Array.prototype.indexOf.call(this.rowElements, el.closest("tr")),
          getSelectedRowCount: () => this._checkedRows.length,
          isCheckboxAtRowIndexChecked: rowIndex => this._checkedRows.includes(this._getRowIdAtIndex(rowIndex)),
          isHeaderRowCheckboxChecked: () => this._headerChecked,
          isRowsSelectable: () => this.selectable,
          notifyRowSelectionChanged: () => undefined,
          notifySelectedAll: () => undefined,
          notifyUnselectedAll: () => undefined,
          registerHeaderRowCheckbox: () => undefined,
          registerRowCheckboxes: () => undefined,
          removeClassAtRowIndex: (rowIndex, cssClasses) => {
            this.rowElements[rowIndex].classList.remove(cssClasses);
          },
          setAttributeAtRowIndex: (rowIndex, attr, value) => {
            this.rowElements[rowIndex].setAttribute(attr, value);
          },
          setHeaderRowCheckboxChecked: checked => {
            this._headerChecked = checked;
          },
          setHeaderRowCheckboxIndeterminate: indeterminate => {
            this._headerIndeterminate = indeterminate;
          },
          setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
            if (!this.rowElements[rowIndex].selectable) {
              return;
            }

            this._setRowChecked(this._getRowIdAtIndex(rowIndex), checked);
          }
        };
      }
    }, {
      kind: "method",
      key: "_filterData",
      value: async function _filterData() {
        const startTime = new Date().getTime();
        this.curRequest++;
        const curRequest = this.curRequest;

        const filterProm = this._worker.filterSortData(this.data, this._sortColumns, this._filter, this._sortDirection, this._sortColumn);

        const [data] = await Promise.all([filterProm, _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__["nextRender"]]);
        const curTime = new Date().getTime();
        const elapsed = curTime - startTime;

        if (elapsed < 100) {
          await new Promise(resolve => setTimeout(resolve, 100 - elapsed));
        }

        if (this.curRequest !== curRequest) {
          return;
        }

        this._filteredData = data;
      }
    }, {
      kind: "method",
      key: "_getRowIdAtIndex",
      value: function _getRowIdAtIndex(rowIndex) {
        return this.rowElements[rowIndex].getAttribute("data-row-id");
      }
    }, {
      kind: "method",
      key: "_handleHeaderClick",
      value: function _handleHeaderClick(ev) {
        const columnId = ev.target.closest("th").getAttribute("data-column-id");

        if (!this.columns[columnId].sortable) {
          return;
        }

        if (!this._sortDirection || this._sortColumn !== columnId) {
          this._sortDirection = "asc";
        } else if (this._sortDirection === "asc") {
          this._sortDirection = "desc";
        } else {
          this._sortDirection = null;
        }

        this._sortColumn = this._sortDirection === null ? undefined : columnId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "sorting-changed", {
          column: columnId,
          direction: this._sortDirection
        });
      }
    }, {
      kind: "method",
      key: "_handleHeaderRowCheckboxChange",
      value: function _handleHeaderRowCheckboxChange(ev) {
        const checkbox = ev.target;
        this._headerChecked = checkbox.checked;
        this._headerIndeterminate = checkbox.indeterminate;
        this.mdcFoundation.handleHeaderRowCheckboxChange();
      }
    }, {
      kind: "method",
      key: "_handleRowCheckboxChange",
      value: function _handleRowCheckboxChange(ev) {
        const checkbox = ev.target;
        const rowId = checkbox.closest("tr").getAttribute("data-row-id");

        this._setRowChecked(rowId, checkbox.checked);

        this.mdcFoundation.handleRowCheckboxChange(ev);
      }
    }, {
      kind: "method",
      key: "_handleRowClick",
      value: function _handleRowClick(ev) {
        const target = ev.target;

        if (target.tagName === "OP-CHECKBOX") {
          return;
        }

        const rowId = target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "row-click", {
          id: rowId
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_setRowChecked",
      value: function _setRowChecked(rowId, checked) {
        if (checked) {
          if (this._checkedRows.includes(rowId)) {
            return;
          }

          this._checkedRows = [...this._checkedRows, rowId];
        } else {
          const index = this._checkedRows.indexOf(rowId);

          if (index === -1) {
            return;
          }

          this._checkedRows.splice(index, 1);
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "selection-changed", {
          id: rowId,
          selected: checked
        });
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._debounceSearch(ev.detail.value);
      }
    }, {
      kind: "method",
      key: "_calcScrollHeight",
      value: async function _calcScrollHeight() {
        await this.updateComplete;
        this._scroller.style.maxHeight = `calc(100% - ${this._header.clientHeight}px)`;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"]`
      /* default mdc styles, colors changed, without checkbox styles */

      .mdc-data-table__content {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table {
        background-color: var(--data-table-background-color);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(var(--rgb-primary-text-color), 0.12);
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow-x: auto;
      }

      .mdc-data-table__row--selected {
        background-color: rgba(var(--rgb-primary-color), 0.04);
      }

      .mdc-data-table__row {
        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);
      }

      .mdc-data-table__row {
        border-top-width: 1px;
        border-top-style: solid;
      }

      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }

      .mdc-data-table__header-cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__cell {
        color: var(--primary-text-color);
      }

      .mdc-data-table__header-row {
        height: 56px;
      }

      .mdc-data-table__row {
        height: 52px;
      }

      .mdc-data-table__cell,
      .mdc-data-table__header-cell {
        padding-right: 16px;
        padding-left: 16px;
      }

      .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__cell--checkbox {
        /* @noflip */
        padding-left: 16px;
        /* @noflip */
        padding-right: 0;
        width: 40px;
      }
      [dir="rtl"] .mdc-data-table__header-cell--checkbox,
      .mdc-data-table__header-cell--checkbox[dir="rtl"],
      [dir="rtl"] .mdc-data-table__cell--checkbox,
      .mdc-data-table__cell--checkbox[dir="rtl"] {
        /* @noflip */
        padding-left: 0;
        /* @noflip */
        padding-right: 16px;
      }

      .mdc-data-table__table {
        width: 100%;
        border: 0;
        white-space: nowrap;
        border-collapse: collapse;
      }

      .mdc-data-table__cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: 0.0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
      }

      .mdc-data-table__cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__cell--numeric,
      .mdc-data-table__cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      .mdc-data-table__cell--icon {
        color: var(--secondary-text-color);
        text-align: center;
        width: 24px;
      }

      .mdc-data-table__header-cell {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 500;
        letter-spacing: 0.0071428571em;
        text-decoration: inherit;
        text-transform: inherit;
        text-align: left;
      }
      [dir="rtl"] .mdc-data-table__header-cell,
      .mdc-data-table__header-cell[dir="rtl"] {
        /* @noflip */
        text-align: right;
      }

      .mdc-data-table__header-cell--numeric {
        text-align: right;
      }
      [dir="rtl"] .mdc-data-table__header-cell--numeric,
      .mdc-data-table__header-cell--numeric[dir="rtl"] {
        /* @noflip */
        text-align: left;
      }

      .mdc-data-table__header-cell--icon {
        text-align: center;
      }

      /* custom from here */

      :host {
        display: block;
      }

      .mdc-data-table {
        display: block;
        border-width: var(--data-table-border-width, 1px);
        height: 100%;
      }
      .mdc-data-table__header-cell {
        overflow: hidden;
      }
      .mdc-data-table__header-cell.sortable {
        cursor: pointer;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon)
        span {
        position: relative;
        left: -24px;
      }
      .mdc-data-table__header-cell.not-sorted > * {
        transition: left 0.2s ease 0s;
      }
      .mdc-data-table__header-cell.not-sorted op-icon {
        left: -36px;
      }
      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon):hover
        span {
        left: 0px;
      }
      .mdc-data-table__header-cell:hover.not-sorted op-icon {
        left: 0px;
      }
      .table-header {
        border-bottom: 1px solid rgba(var(--rgb-primary-text-color), 0.12);
      }
      search-input {
        position: relative;
        top: 2px;
      }
      .scroller {
        overflow: auto;
      }
      slot[name="header"] {
        display: block;
      }
    `;
      }
    }]
  };
}, _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__["BaseElement"]);

/***/ }),

/***/ "./src/components/op-checkbox.ts":
/*!***************************************!*\
  !*** ./src/components/op-checkbox.ts ***!
  \***************************************/
/*! exports provided: OpCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpCheckbox", function() { return OpCheckbox; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-checkbox */ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js");
/* harmony import */ var _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-checkbox/mwc-checkbox-css */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");
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


 // tslint:disable-next-line


// tslint:disable-next-line
const MwcCheckbox = customElements.get("mwc-checkbox");
let OpCheckbox = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-checkbox")], function (_initialize, _MwcCheckbox) {
  class OpCheckbox extends _MwcCheckbox {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpCheckbox,
    d: [{
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(OpCheckbox.prototype), "firstUpdated", this).call(this);

        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__["style"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
          ~ .mdc-checkbox__background {
          border-color: rgba(var(--rgb-primary-text-color), 0.54);
        }
      `];
      }
    }]
  };
}, MwcCheckbox);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllc35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctZW50aXRpZXN+cGFuZWwtY29uZmlnLWludGVncmF0aW9uc356aGEtYWRkLWdyb340Yzg4NTYzNy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvc29ydF9maWx0ZXJfd29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvb3AtZGF0YS10YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vcC1jaGVja2JveC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcImZpbHRlclNvcnREYXRhXCIsXCJmaWx0ZXJEYXRhXCIsXCJzb3J0RGF0YVwiXVxuXHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB3ID0gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjE4YWNhYTYwMTA5MTUwMDFlYzEud29ya2VyLmpzXCIsIHsgbmFtZTogXCJbaGFzaF0ud29ya2VyLmpzXCIgfSlcblx0XHRcdFx0XHRhZGRNZXRob2RzKHcsIG1ldGhvZHMpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIHdcblx0XHRcdFx0fVxuXHRcdFx0IiwiaW1wb3J0IHsgcmVwZWF0IH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvcmVwZWF0XCI7XG5pbXBvcnQgZGVlcENsb25lIGZyb20gXCJkZWVwLWNsb25lLXNpbXBsZVwiO1xuXG5pbXBvcnQge1xuICBNRENEYXRhVGFibGVBZGFwdGVyLFxuICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLFxufSBmcm9tIFwiQG1hdGVyaWFsL2RhdGEtdGFibGVcIjtcblxuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW1wb3J0IHtcbiAgaHRtbCxcbiAgcXVlcnksXG4gIHF1ZXJ5QWxsLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEJhc2VFbGVtZW50IH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnRcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby13ZWJwYWNrLWxvYWRlci1zeW50YXhcbi8vIEB0cy1pZ25vcmVcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wbGljaXQtZGVwZW5kZW5jaWVzXG5pbXBvcnQgc29ydEZpbHRlcldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuL3NvcnRfZmlsdGVyX3dvcmtlclwiO1xuXG5pbXBvcnQgXCIuLi9vcC1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vb3AtY2hlY2tib3hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgT3BDaGVja2JveCB9IGZyb20gXCIuLi9vcC1jaGVja2JveFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbmV4dFJlbmRlciB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBPUFBEb21FdmVudHMge1xuICAgIFwic2VsZWN0aW9uLWNoYW5nZWRcIjogU2VsZWN0aW9uQ2hhbmdlZEV2ZW50O1xuICAgIFwicm93LWNsaWNrXCI6IFJvd0NsaWNrZWRFdmVudDtcbiAgICBcInNvcnRpbmctY2hhbmdlZFwiOiBTb3J0aW5nQ2hhbmdlZEV2ZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93Q2xpY2tlZEV2ZW50IHtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQge1xuICBpZDogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3J0aW5nQ2hhbmdlZEV2ZW50IHtcbiAgY29sdW1uOiBzdHJpbmc7XG4gIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgU29ydGluZ0RpcmVjdGlvbiA9IFwiZGVzY1wiIHwgXCJhc2NcIiB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogRGF0YVRhYmxlQ29sdW1uRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YSB7XG4gIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgZmlsdGVyYWJsZT86IGJvb2xlYW47XG4gIGZpbHRlcktleT86IHN0cmluZztcbiAgZGlyZWN0aW9uPzogU29ydGluZ0RpcmVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVDb2x1bW5EYXRhIGV4dGVuZHMgRGF0YVRhYmxlU29ydENvbHVtbkRhdGEge1xuICB0aXRsZTogc3RyaW5nO1xuICB0eXBlPzogXCJudW1lcmljXCIgfCBcImljb25cIjtcbiAgdGVtcGxhdGU/OiA8VD4oZGF0YTogYW55LCByb3c6IFQpID0+IFRlbXBsYXRlUmVzdWx0IHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZVJvd0RhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHNlbGVjdGFibGU/OiBib29sZWFuO1xufVxuXG5AY3VzdG9tRWxlbWVudChcIm9wLWRhdGEtdGFibGVcIilcbmV4cG9ydCBjbGFzcyBPcERhdGFUYWJsZSBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7fTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHVibGljIGRhdGE6IERhdGFUYWJsZVJvd0RhdGFbXSA9IFtdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwdWJsaWMgaWQgPSBcImlkXCI7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwdWJsaWMgZmlsdGVyID0gXCJcIjtcbiAgcHJvdGVjdGVkIG1kY0ZvdW5kYXRpb24hOiBNRENEYXRhVGFibGVGb3VuZGF0aW9uO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWRjRm91bmRhdGlvbkNsYXNzID0gTURDRGF0YVRhYmxlRm91bmRhdGlvbjtcbiAgQHF1ZXJ5KFwiLm1kYy1kYXRhLXRhYmxlXCIpIHByb3RlY3RlZCBtZGNSb290ITogSFRNTEVsZW1lbnQ7XG4gIEBxdWVyeUFsbChcIi5tZGMtZGF0YS10YWJsZV9fcm93XCIpIHByb3RlY3RlZCByb3dFbGVtZW50cyE6IEhUTUxFbGVtZW50W107XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfZmlsdGVyYWJsZSA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX2hlYWRlckNoZWNrZWQgPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9oZWFkZXJJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pIHByaXZhdGUgX2NoZWNrZWRSb3dzOiBzdHJpbmdbXSA9IFtdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHJpdmF0ZSBfZmlsdGVyID0gXCJcIjtcbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHByaXZhdGUgX3NvcnRDb2x1bW4/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9zb3J0RGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHJpdmF0ZSBfZmlsdGVyZWREYXRhOiBEYXRhVGFibGVSb3dEYXRhW10gPSBbXTtcbiAgQHF1ZXJ5KFwic2xvdFtuYW1lPSdoZWFkZXInXVwiKSBwcml2YXRlIF9oZWFkZXIhOiBIVE1MU2xvdEVsZW1lbnQ7XG4gIEBxdWVyeShcIi5zY3JvbGxlclwiKSBwcml2YXRlIF9zY3JvbGxlciE6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9zb3J0Q29sdW1uczoge1xuICAgIFtrZXk6IHN0cmluZ106IERhdGFUYWJsZVNvcnRDb2x1bW5EYXRhO1xuICB9ID0ge307XG4gIHByaXZhdGUgY3VyUmVxdWVzdCA9IDA7XG4gIHByaXZhdGUgX3dvcmtlcjogYW55IHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX2RlYm91bmNlU2VhcmNoID0gZGVib3VuY2UoXG4gICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICAgIH0sXG4gICAgMjAwLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHVibGljIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX2hlYWRlckNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuX3dvcmtlciA9IHNvcnRGaWx0ZXJXb3JrZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKHByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzLmhhcyhcImNvbHVtbnNcIikpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmFibGUgPSBPYmplY3QudmFsdWVzKHRoaXMuY29sdW1ucykuc29tZShcbiAgICAgICAgKGNvbHVtbikgPT4gY29sdW1uLmZpbHRlcmFibGVcbiAgICAgICk7XG5cbiAgICAgIGZvciAoY29uc3QgY29sdW1uSWQgaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnNbY29sdW1uSWRdLmRpcmVjdGlvbikge1xuICAgICAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbnNbY29sdW1uSWRdLmRpcmVjdGlvbiE7XG4gICAgICAgICAgdGhpcy5fc29ydENvbHVtbiA9IGNvbHVtbklkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsb25lZENvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9IGRlZXBDbG9uZSh0aGlzLmNvbHVtbnMpO1xuICAgICAgT2JqZWN0LnZhbHVlcyhjbG9uZWRDb2x1bW5zKS5mb3JFYWNoKChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50aXRsZTtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50eXBlO1xuICAgICAgICBkZWxldGUgY29sdW1uLnRlbXBsYXRlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5zID0gY2xvbmVkQ29sdW1ucztcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcy5oYXMoXCJmaWx0ZXJcIikpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlU2VhcmNoKHRoaXMuZmlsdGVyKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcImRhdGFcIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiY29sdW1uc1wiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJfZmlsdGVyXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0Q29sdW1uXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0RGlyZWN0aW9uXCIpXG4gICAgKSB7XG4gICAgICB0aGlzLl9maWx0ZXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGF0YS10YWJsZVwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCIgQHNsb3RjaGFuZ2U9JHt0aGlzLl9jYWxjU2Nyb2xsSGVpZ2h0fT5cbiAgICAgICAgICAke3RoaXMuX2ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8c2VhcmNoLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgPjwvc2VhcmNoLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvc2xvdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbGVyXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3RhYmxlXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0ciBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnNlbGVjdGFibGVcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIG1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV0ZXJtaW5hdGU9JHt0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2hlYWRlckNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgW2tleSwgY29sdW1uXSA9IGNvbHVtbkVudHJ5O1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0ga2V5ID09PSB0aGlzLl9zb3J0Q29sdW1uO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWNcIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IEJvb2xlYW4oY29sdW1uLnNvcnRhYmxlKSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Qtc29ydGVkXCI6IEJvb2xlYW4oY29sdW1uLnNvcnRhYmxlICYmICFzb3J0ZWQpLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUhlYWRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uLWlkPVwiJHtrZXl9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICR7Y29sdW1uLnNvcnRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uPSR7c29ydGVkICYmIHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IFwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJvcHA6YXJyb3ctZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJvcHA6YXJyb3ctdXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9vcC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjb2x1bW4udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAke3JlcGVhdChcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZERhdGEhLFxuICAgICAgICAgICAgICAgIChyb3c6IERhdGFUYWJsZVJvd0RhdGEpID0+IHJvd1t0aGlzLmlkXSxcbiAgICAgICAgICAgICAgICAocm93OiBEYXRhVGFibGVSb3dEYXRhKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcm93LWlkPVwiJHtyb3dbdGhpcy5pZF19XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RhYmxlPSR7cm93LnNlbGVjdGFibGUgIT09IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuc2VsZWN0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY2VsbCBtZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3ctY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZVJvd0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7cm93LnNlbGVjdGFibGUgPT09IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHJvd1t0aGlzLmlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3AtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19jZWxsICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWNcIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSBcIm51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9fY2VsbC0taWNvblwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2x1bW4udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi50ZW1wbGF0ZShyb3dba2V5XSwgcm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93W2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVBZGFwdGVyKCk6IE1EQ0RhdGFUYWJsZUFkYXB0ZXIge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRDbGFzc0F0Um93SW5kZXg6IChyb3dJbmRleDogbnVtYmVyLCBjc3NDbGFzc2VzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCEodGhpcy5yb3dFbGVtZW50c1tyb3dJbmRleF0gYXMgYW55KS5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcyk7XG4gICAgICB9LFxuICAgICAgZ2V0Um93Q291bnQ6ICgpID0+IHRoaXMucm93RWxlbWVudHMubGVuZ3RoLFxuICAgICAgZ2V0Um93RWxlbWVudHM6ICgpID0+IHRoaXMucm93RWxlbWVudHMsXG4gICAgICBnZXRSb3dJZEF0SW5kZXg6IChyb3dJbmRleDogbnVtYmVyKSA9PiB0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpLFxuICAgICAgZ2V0Um93SW5kZXhCeUNoaWxkRWxlbWVudDogKGVsOiBFbGVtZW50KSA9PlxuICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMucm93RWxlbWVudHMsIGVsLmNsb3Nlc3QoXCJ0clwiKSksXG4gICAgICBnZXRTZWxlY3RlZFJvd0NvdW50OiAoKSA9PiB0aGlzLl9jaGVja2VkUm93cy5sZW5ndGgsXG4gICAgICBpc0NoZWNrYm94QXRSb3dJbmRleENoZWNrZWQ6IChyb3dJbmRleDogbnVtYmVyKSA9PlxuICAgICAgICB0aGlzLl9jaGVja2VkUm93cy5pbmNsdWRlcyh0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpKSxcbiAgICAgIGlzSGVhZGVyUm93Q2hlY2tib3hDaGVja2VkOiAoKSA9PiB0aGlzLl9oZWFkZXJDaGVja2VkLFxuICAgICAgaXNSb3dzU2VsZWN0YWJsZTogKCkgPT4gdGhpcy5zZWxlY3RhYmxlLFxuICAgICAgbm90aWZ5Um93U2VsZWN0aW9uQ2hhbmdlZDogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgbm90aWZ5U2VsZWN0ZWRBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeVVuc2VsZWN0ZWRBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlZ2lzdGVySGVhZGVyUm93Q2hlY2tib3g6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlZ2lzdGVyUm93Q2hlY2tib3hlczogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgcmVtb3ZlQ2xhc3NBdFJvd0luZGV4OiAocm93SW5kZXg6IG51bWJlciwgY3NzQ2xhc3Nlczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcyk7XG4gICAgICB9LFxuICAgICAgc2V0QXR0cmlidXRlQXRSb3dJbmRleDogKFxuICAgICAgICByb3dJbmRleDogbnVtYmVyLFxuICAgICAgICBhdHRyOiBzdHJpbmcsXG4gICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5faGVhZGVyQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICB9LFxuICAgICAgc2V0SGVhZGVyUm93Q2hlY2tib3hJbmRldGVybWluYXRlOiAoaW5kZXRlcm1pbmF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgIH0sXG4gICAgICBzZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4OiAocm93SW5kZXg6IG51bWJlciwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoISh0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XSBhcyBhbnkpLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0Um93Q2hlY2tlZCh0aGlzLl9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpLCBjaGVja2VkKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckRhdGEoKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5jdXJSZXF1ZXN0Kys7XG4gICAgY29uc3QgY3VyUmVxdWVzdCA9IHRoaXMuY3VyUmVxdWVzdDtcblxuICAgIGNvbnN0IGZpbHRlclByb20gPSB0aGlzLl93b3JrZXIuZmlsdGVyU29ydERhdGEoXG4gICAgICB0aGlzLmRhdGEsXG4gICAgICB0aGlzLl9zb3J0Q29sdW1ucyxcbiAgICAgIHRoaXMuX2ZpbHRlcixcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24sXG4gICAgICB0aGlzLl9zb3J0Q29sdW1uXG4gICAgKTtcblxuICAgIGNvbnN0IFtkYXRhXSA9IGF3YWl0IFByb21pc2UuYWxsKFtmaWx0ZXJQcm9tLCBuZXh0UmVuZGVyXSk7XG5cbiAgICBjb25zdCBjdXJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IGN1clRpbWUgLSBzdGFydFRpbWU7XG5cbiAgICBpZiAoZWxhcHNlZCA8IDEwMCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwIC0gZWxhcHNlZCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJSZXF1ZXN0ICE9PSBjdXJSZXF1ZXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IGRhdGE7XG4gIH1cblxuICBwcml2YXRlIF9nZXRSb3dJZEF0SW5kZXgocm93SW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmdldEF0dHJpYnV0ZShcImRhdGEtcm93LWlkXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUhlYWRlckNsaWNrKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGNvbHVtbklkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidGhcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW4taWRcIikhO1xuICAgIGlmICghdGhpcy5jb2x1bW5zW2NvbHVtbklkXS5zb3J0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NvcnREaXJlY3Rpb24gfHwgdGhpcy5fc29ydENvbHVtbiAhPT0gY29sdW1uSWQpIHtcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSBcImFzY1wiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc29ydERpcmVjdGlvbiA9PT0gXCJhc2NcIikge1xuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IFwiZGVzY1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0Q29sdW1uID0gdGhpcy5fc29ydERpcmVjdGlvbiA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IGNvbHVtbklkO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwic29ydGluZy1jaGFuZ2VkXCIsIHtcbiAgICAgIGNvbHVtbjogY29sdW1uSWQsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX3NvcnREaXJlY3Rpb24sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZShldjogRXZlbnQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2LnRhcmdldCBhcyBPcENoZWNrYm94O1xuICAgIHRoaXMuX2hlYWRlckNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgIHRoaXMuX2hlYWRlckluZGV0ZXJtaW5hdGUgPSBjaGVja2JveC5pbmRldGVybWluYXRlO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2UoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi50YXJnZXQgYXMgT3BDaGVja2JveDtcbiAgICBjb25zdCByb3dJZCA9IGNoZWNrYm94LmNsb3Nlc3QoXCJ0clwiKSEuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIik7XG5cbiAgICB0aGlzLl9zZXRSb3dDaGVja2VkKHJvd0lkISwgY2hlY2tib3guY2hlY2tlZCk7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZVJvd0NoZWNrYm94Q2hhbmdlKGV2KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJvd0NsaWNrKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09IFwiT1AtQ0hFQ0tCT1hcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByb3dJZCA9IHRhcmdldC5jbG9zZXN0KFwidHJcIikhLmdldEF0dHJpYnV0ZShcImRhdGEtcm93LWlkXCIpITtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJyb3ctY2xpY2tcIiwgeyBpZDogcm93SWQgfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFJvd0NoZWNrZWQocm93SWQ6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBpZiAodGhpcy5fY2hlY2tlZFJvd3MuaW5jbHVkZXMocm93SWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NoZWNrZWRSb3dzID0gWy4uLnRoaXMuX2NoZWNrZWRSb3dzLCByb3dJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY2hlY2tlZFJvd3MuaW5kZXhPZihyb3dJZCk7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NoZWNrZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsIHtcbiAgICAgIGlkOiByb3dJZCxcbiAgICAgIHNlbGVjdGVkOiBjaGVja2VkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VhcmNoQ2hhbmdlKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2RlYm91bmNlU2VhcmNoKGV2LmRldGFpbC52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxjU2Nyb2xsSGVpZ2h0KCkge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fc2Nyb2xsZXIuc3R5bGUubWF4SGVpZ2h0ID0gYGNhbGMoMTAwJSAtICR7dGhpcy5faGVhZGVyLmNsaWVudEhlaWdodH1weClgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLyogZGVmYXVsdCBtZGMgc3R5bGVzLCBjb2xvcnMgY2hhbmdlZCwgd2l0aG91dCBjaGVja2JveCBzdHlsZXMgKi9cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jb250ZW50IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTc4NTcxNDI5ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhdGEtdGFibGUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LWNvbG9yKSwgMC4wNCk7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4xMik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IHtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3c6bm90KC5tZGMtZGF0YS10YWJsZV9fcm93LS1zZWxlY3RlZCk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjA0KTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93IHtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3JvdyB7XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3gsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94IHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3hbZGlyPVwicnRsXCJdLFxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3RhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTc4NTcxNDI5ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpYyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWMsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWNbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3MTQyODU3MWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWMsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljW2Rpcj1cInJ0bFwiXSB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLyogY3VzdG9tIGZyb20gaGVyZSAqL1xuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1kYXRhLXRhYmxlLWJvcmRlci13aWR0aCwgMXB4KTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLnNvcnRhYmxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljKTpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbilcbiAgICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogLTI0cHg7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQgPiAqIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGVhc2UgMHM7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQgb3AtaWNvbiB7XG4gICAgICAgIGxlZnQ6IC0zNnB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljKTpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbik6aG92ZXJcbiAgICAgICAgc3BhbiB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGw6aG92ZXIubm90LXNvcnRlZCBvcC1pY29uIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLnRhYmxlLWhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjEyKTtcbiAgICAgIH1cbiAgICAgIHNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICB9XG4gICAgICAuc2Nyb2xsZXIge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICAgIHNsb3RbbmFtZT1cImhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWRhdGEtdGFibGVcIjogT3BEYXRhVGFibGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWNoZWNrYm94XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3gvbXdjLWNoZWNrYm94LWNzc1wiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjQ2hlY2tib3ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2MtY2hlY2tib3hcIikgYXMgQ29uc3RydWN0b3I8Q2hlY2tib3g+O1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWNoZWNrYm94XCIpXG5leHBvcnQgY2xhc3MgT3BDaGVja2JveCBleHRlbmRzIE13Y0NoZWNrYm94IHtcbiAgcHVibGljIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSlcbiAgICAgICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC41NCk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtY2hlY2tib3hcIjogT3BDaGVja2JveDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQVlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWtEQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFIQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUxBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQVZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFYQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBWkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQWJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFkQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBakJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQTRCQTtBQUNBO0FBN0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTtBQUNBO0FBQUE7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFwRkE7QUFBQTtBQUFBO0FBQUE7QUF1RkE7O0FBRUE7QUFDQTs7O0FBSUE7OztBQUpBOzs7Ozs7QUFjQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7Ozs7QUFYQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBUkE7QUFVQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFHQTs7QUFIQTtBQVNBOztBQWpCQTtBQW9CQTs7OztBQUlBOztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7OztBQVRBO0FBaUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFKQTs7QUFTQTs7QUFYQTtBQWdCQTs7QUE3Q0E7Ozs7O0FBdkVBO0FBNkhBO0FBcE5BO0FBQUE7QUFBQTtBQUFBO0FBdU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBM0NBO0FBNkNBO0FBcFFBO0FBQUE7QUFBQTtBQUFBO0FBdVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEvUkE7QUFBQTtBQUFBO0FBQUE7QUFrU0E7QUFDQTtBQW5TQTtBQUFBO0FBQUE7QUFBQTtBQXNTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBMVRBO0FBQUE7QUFBQTtBQUFBO0FBNlRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqVUE7QUFBQTtBQUFBO0FBQUE7QUFvVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF6VUE7QUFBQTtBQUFBO0FBQUE7QUE0VUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFsVkE7QUFBQTtBQUFBO0FBQUE7QUFxVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBcldBO0FBQUE7QUFBQTtBQUFBO0FBd1dBO0FBQ0E7QUF6V0E7QUFBQTtBQUFBO0FBQUE7QUE0V0E7QUFDQTtBQUNBO0FBOVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpWEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFzTUE7QUF2akJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7OztBQUFBO0FBU0E7QUFoQkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=