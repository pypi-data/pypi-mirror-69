(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"],{

/***/ "./src/panels/config/op-config-section.ts":
/*!************************************************!*\
  !*** ./src/panels/config/op-config-section.ts ***!
  \************************************************/
/*! exports provided: OpConfigSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpConfigSection", function() { return OpConfigSection; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
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



let OpConfigSection = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-config-section")], function (_initialize, _LitElement) {
  class OpConfigSection extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigSection,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div
        class="content ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          narrow: !this.isWide
        })}"
      >
        <div class="header"><slot name="header"></slot></div>
        <div
          class="together layout ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          narrow: !this.isWide,
          vertical: !this.isWide,
          horizontal: this.isWide
        })}"
        >
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
      }
      .content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
      }

      .layout {
        display: flex;
      }

      .horizontal {
        flex-direction: row;
      }

      .vertical {
        flex-direction: column;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .header {
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

      .together {
        margin-top: 32px;
      }

      .intro {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-subhead_-_-webkit-font-smoothing
        );
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        width: 100%;
        max-width: 400px;
        margin-right: 40px;
        opacity: var(--dark-primary-opacity);
        font-size: 14px;
        padding-bottom: 20px;
      }

      .panel {
        margin-top: -24px;
      }

      .panel ::slotted(*) {
        margin-top: 24px;
        display: block;
      }

      .narrow.content {
        max-width: 640px;
      }
      .narrow .together {
        margin-top: 20px;
      }
      .narrow .intro {
        padding-bottom: 20px;
        margin-right: 0;
        max-width: 500px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWFzfnBhbmVsLWNvbmZpZy1hdXRvbWF0aW9ufnBhbmVsLWNvbmZpZy1jbG91ZH5wYW5lbC1jb25maWctY29yZX5wYW5lbC1jb25maWctY3VzdG9taX42N2UyNzdmNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL29wLWNvbmZpZy1zZWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIExpdEVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbkBjdXN0b21FbGVtZW50KFwib3AtY29uZmlnLXNlY3Rpb25cIilcbmV4cG9ydCBjbGFzcyBPcENvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY29udGVudCAke2NsYXNzTWFwKHtcbiAgICAgICAgICBuYXJyb3c6ICF0aGlzLmlzV2lkZSxcbiAgICAgICAgfSl9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cInRvZ2V0aGVyIGxheW91dCAke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIG5hcnJvdzogIXRoaXMuaXNXaWRlLFxuICAgICAgICAgICAgdmVydGljYWw6ICF0aGlzLmlzV2lkZSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IHRoaXMuaXNXaWRlLFxuICAgICAgICAgIH0pfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmhvcml6b250YWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuXG4gICAgICAudmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuZmxleC1hdXRvIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtZmFtaWx5KTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgIC0tcGFwZXItZm9udC1oZWFkbGluZV8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fbGV0dGVyLXNwYWNpbmcpO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgfVxuXG4gICAgICAudG9nZXRoZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgfVxuXG4gICAgICAuaW50cm8ge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiB2YXIoXG4gICAgICAgICAgLS1wYXBlci1mb250LXN1YmhlYWRfLV8td2Via2l0LWZvbnQtc21vb3RoaW5nXG4gICAgICAgICk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9saW5lLWhlaWdodCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnBhbmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgIH1cbiAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBREE7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7QUFSQTtBQW1CQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOEVBO0FBeEdBO0FBQUE7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9