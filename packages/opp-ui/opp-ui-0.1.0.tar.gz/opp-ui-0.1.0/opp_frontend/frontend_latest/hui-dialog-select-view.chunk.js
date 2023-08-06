(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-select-view"],{

/***/ "./src/common/dom/toggle_attribute.ts":
/*!********************************************!*\
  !*** ./src/common/dom/toggle_attribute.ts ***!
  \********************************************/
/*! exports provided: toggleAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAttribute", function() { return toggleAttribute; });
// Toggle Attribute Polyfill because it's too new for some browsers
const toggleAttribute = (el, name, force) => {
  if (force !== undefined) {
    force = !!force;
  }

  if (el.hasAttribute(name)) {
    if (force) {
      return true;
    }

    el.removeAttribute(name);
    return false;
  }

  if (force === false) {
    return false;
  }

  el.setAttribute(name, "");
  return true;
};

/***/ }),

/***/ "./src/panels/devcon/editor/select-view/hui-dialog-select-view.ts":
/*!************************************************************************!*\
  !*** ./src/panels/devcon/editor/select-view/hui-dialog-select-view.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogSelectView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogSelectView", function() { return HuiDialogSelectView; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_op_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/dialog/op-paper-dialog */ "./src/components/dialog/op-paper-dialog.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");
/* harmony import */ var _components_hui_views_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-views-list */ "./src/panels/devcon/components/hui-views-list.ts");
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




 // tslint:disable-next-line:no-duplicate-imports

let HuiDialogSelectView = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-dialog-select-view")], function (_initialize, _LitElement) {
  class HuiDialogSelectView extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiDialogSelectView,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_params",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: async function showDialog(params) {
        this._params = params;
        await this.updateComplete;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        var _this$_params;

        _get(_getPrototypeOf(HuiDialogSelectView.prototype), "updated", this).call(this, changedProps);

        Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_2__["toggleAttribute"])(this, "hide-icons", ((_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.devconConfig) ? !this._params.devconConfig.views.some(view => view.icon) : true);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._params) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-paper-dialog
        with-backdrop
        opened
        @opened-changed="${this._openedChanged}"
      >
        <h2>Choose a view</h2>
        <hui-views-list 
        .devconConfig=${this._params.devconConfig}
        @view-selected=${this._selectView}>
        </hui-view-list>
      </op-paper-dialog>
    `;
      }
    }, {
      kind: "get",
      key: "_dialog",
      value: function _dialog() {
        return this.shadowRoot.querySelector("op-paper-dialog");
      }
    }, {
      kind: "method",
      key: "_selectView",
      value: function _selectView(e) {
        const view = e.detail.view;

        this._params.viewSelectedCallback(view);

        this._dialog.close();
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        if (!ev.detail.value) {
          this._params = undefined;
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zZWxlY3Qtdmlldy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3RvZ2dsZV9hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZjb24vZWRpdG9yL3NlbGVjdC12aWV3L2h1aS1kaWFsb2ctc2VsZWN0LXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVG9nZ2xlIEF0dHJpYnV0ZSBQb2x5ZmlsbCBiZWNhdXNlIGl0J3MgdG9vIG5ldyBmb3Igc29tZSBicm93c2Vyc1xyXG5leHBvcnQgY29uc3QgdG9nZ2xlQXR0cmlidXRlID0gKFxyXG4gIGVsOiBIVE1MRWxlbWVudCxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZm9yY2U/OiBib29sZWFuXHJcbikgPT4ge1xyXG4gIGlmIChmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmb3JjZSA9ICEhZm9yY2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XHJcbiAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZm9yY2UgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgXCJcIik7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL29wLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgdG9nZ2xlQXR0cmlidXRlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vdG9nZ2xlX2F0dHJpYnV0ZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdmlld3MtbGlzdFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IE9wUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvb3AtcGFwZXItZGlhbG9nXCI7XG5cbmltcG9ydCB7IFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LXNlbGVjdC12aWV3LWRpYWxvZ1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiKVxuZXhwb3J0IGNsYXNzIEh1aURpYWxvZ1NlbGVjdFZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogU2VsZWN0Vmlld0RpYWxvZ1BhcmFtcztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0b2dnbGVBdHRyaWJ1dGUoXG4gICAgICB0aGlzLFxuICAgICAgXCJoaWRlLWljb25zXCIsXG4gICAgICB0aGlzLl9wYXJhbXM/LmRldmNvbkNvbmZpZ1xuICAgICAgICA/ICF0aGlzLl9wYXJhbXMuZGV2Y29uQ29uZmlnLnZpZXdzLnNvbWUoKHZpZXcpID0+IHZpZXcuaWNvbilcbiAgICAgICAgOiB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPVwiJHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxoMj5DaG9vc2UgYSB2aWV3PC9oMj5cbiAgICAgICAgPGh1aS12aWV3cy1saXN0IFxuICAgICAgICAuZGV2Y29uQ29uZmlnPSR7dGhpcy5fcGFyYW1zIS5kZXZjb25Db25maWd9XG4gICAgICAgIEB2aWV3LXNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0Vmlld30+XG4gICAgICAgIDwvaHVpLXZpZXctbGlzdD5cbiAgICAgIDwvb3AtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZGlhbG9nKCk6IE9wUGFwZXJEaWFsb2cge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJvcC1wYXBlci1kaWFsb2dcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0VmlldyhlOiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZpZXc6IG51bWJlciA9IGUuZGV0YWlsLnZpZXc7XG4gICAgdGhpcy5fcGFyYW1zIS52aWV3U2VsZWN0ZWRDYWxsYmFjayh2aWV3KTtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIShldi5kZXRhaWwgYXMgYW55KS52YWx1ZSkge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiOiBIdWlEaWFsb2dTZWxlY3RWaWV3O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBSUE7Ozs7QUFJQTtBQUNBOzs7QUFUQTtBQWFBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBdUNBO0FBQ0E7QUF4Q0E7QUFBQTtBQUFBO0FBQUE7QUEyQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBOUNBO0FBQUE7QUFBQTtBQUFBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBcERBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9