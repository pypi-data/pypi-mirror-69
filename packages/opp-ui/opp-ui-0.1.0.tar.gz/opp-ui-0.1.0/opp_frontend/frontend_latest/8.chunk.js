(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/op-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/op-code-editor.ts ***!
  \******************************************/
/*! exports provided: OpCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpCodeEditor", function() { return OpCodeEditor; });
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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




let OpCodeEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("op-code-editor")], function (_initialize, _UpdatingElement) {
  class OpCodeEditor extends _UpdatingElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpCodeEditor,
    d: [{
      kind: "field",
      key: "codemirror",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "mode",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "autofocus",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "rtl",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "error",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_value",

      value() {
        return "";
      }

    }, {
      kind: "set",
      key: "value",
      value: function value(_value) {
        this._value = _value;
      }
    }, {
      kind: "get",
      key: "value",
      value: function value() {
        return this.codemirror ? this.codemirror.getValue() : this._value;
      }
    }, {
      kind: "get",
      key: "hasComments",
      value: function hasComments() {
        return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OpCodeEditor.prototype), "connectedCallback", this).call(this);

        if (!this.codemirror) {
          return;
        }

        this.codemirror.refresh();

        if (this.autofocus !== false) {
          this.codemirror.focus();
        }
      }
    }, {
      kind: "method",
      key: "update",
      value: function update(changedProps) {
        _get(_getPrototypeOf(OpCodeEditor.prototype), "update", this).call(this, changedProps);

        if (!this.codemirror) {
          return;
        }

        if (changedProps.has("mode")) {
          this.codemirror.setOption("mode", this.mode);
        }

        if (changedProps.has("autofocus")) {
          this.codemirror.setOption("autofocus", this.autofocus !== false);
        }

        if (changedProps.has("_value") && this._value !== this.value) {
          this.codemirror.setValue(this._value);
        }

        if (changedProps.has("rtl")) {
          this.codemirror.setOption("gutters", this._calcGutters());

          this._setScrollBarDirection();
        }

        if (changedProps.has("error")) {
          this.classList.toggle("error-state", this.error);
        }
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpCodeEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._load();
      }
    }, {
      kind: "method",
      key: "_load",
      value: async function _load() {
        const loaded = await Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_0__["loadCodeMirror"])();
        const codeMirror = loaded.codeMirror;
        const shadowRoot = this.attachShadow({
          mode: "open"
        });
        shadowRoot.innerHTML = `
    <style>
      ${loaded.codeMirrorCss}
      .CodeMirror {
        height: var(--code-mirror-height, auto);
        direction: var(--code-mirror-direction, ltr);
      }
      .CodeMirror-scroll {
        max-height: var(--code-mirror-max-height, --code-mirror-height);
      }
      .CodeMirror-gutters {
        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        background-color: var(--paper-dialog-background-color, var(--primary-background-color));
        transition: 0.2s ease border-right;
      }
      :host(.error-state) .CodeMirror-gutters {
        border-color: var(--error-state-color, red);
      }
      .CodeMirror-focused .CodeMirror-gutters {
        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .CodeMirror-linenumber {
        color: var(--paper-dialog-color, var(--primary-text-color));
      }
      .rtl .CodeMirror-vscrollbar {
        right: auto;
        left: 0px;
      }
      .rtl-gutter {
        width: 20px;
      }
    </style>`;
        this.codemirror = codeMirror(shadowRoot, {
          value: this._value,
          lineNumbers: true,
          tabSize: 2,
          mode: this.mode,
          autofocus: this.autofocus !== false,
          viewportMargin: Infinity,
          extraKeys: {
            Tab: "indentMore",
            "Shift-Tab": "indentLess"
          },
          gutters: this._calcGutters()
        });

        this._setScrollBarDirection();

        this.codemirror.on("changes", () => this._onChange());
      }
    }, {
      kind: "method",
      key: "_onChange",
      value: function _onChange() {
        const newValue = this.value;

        if (newValue === this._value) {
          return;
        }

        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(this, "value-changed", {
          value: this._value
        });
      }
    }, {
      kind: "method",
      key: "_calcGutters",
      value: function _calcGutters() {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
      }
    }, {
      kind: "method",
      key: "_setScrollBarDirection",
      value: function _setScrollBarDirection() {
        if (this.codemirror) {
          this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]);

/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
let loaded;
const loadCodeMirror = async () => {
  if (!loaded) {
    loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
  }

  return loaded;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWNvZGUtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkQ29kZU1pcnJvciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZFwiO1xyXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgVXBkYXRpbmdFbGVtZW50LFxyXG4gIHByb3BlcnR5LFxyXG4gIGN1c3RvbUVsZW1lbnQsXHJcbiAgUHJvcGVydHlWYWx1ZXMsXHJcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XHJcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCJjb2RlbWlycm9yXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XHJcbiAgICBcImVkaXRvci1zYXZlXCI6IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbkBjdXN0b21FbGVtZW50KFwib3AtY29kZS1lZGl0b3JcIilcclxuZXhwb3J0IGNsYXNzIE9wQ29kZUVkaXRvciBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XHJcbiAgcHVibGljIGNvZGVtaXJyb3I/OiBFZGl0b3I7XHJcbiAgQHByb3BlcnR5KCkgcHVibGljIG1vZGU/OiBzdHJpbmc7XHJcbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xyXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBydGwgPSBmYWxzZTtcclxuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcclxuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XHJcblxyXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IgPyB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKSA6IHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoYXNDb21tZW50cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNtLWNvbW1lbnRcIikgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKTtcclxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5jb2RlbWlycm9yLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xyXG5cclxuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm1vZGVcIikpIHtcclxuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcIm1vZGVcIiwgdGhpcy5tb2RlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYXV0b2ZvY3VzXCIpKSB7XHJcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJhdXRvZm9jdXNcIiwgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX3ZhbHVlXCIpICYmIHRoaXMuX3ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInJ0bFwiKSkge1xyXG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiZ3V0dGVyc1wiLCB0aGlzLl9jYWxjR3V0dGVycygpKTtcclxuICAgICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImVycm9yXCIpKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XHJcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcclxuICAgIHRoaXMuX2xvYWQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBsb2FkQ29kZU1pcnJvcigpO1xyXG5cclxuICAgIGNvbnN0IGNvZGVNaXJyb3IgPSBsb2FkZWQuY29kZU1pcnJvcjtcclxuXHJcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuXHJcbiAgICBzaGFkb3dSb290IS5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3R5bGU+XHJcbiAgICAgICR7bG9hZGVkLmNvZGVNaXJyb3JDc3N9XHJcbiAgICAgIC5Db2RlTWlycm9yIHtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLWhlaWdodCwgYXV0byk7XHJcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1jb2RlLW1pcnJvci1kaXJlY3Rpb24sIGx0cik7XHJcbiAgICAgIH1cclxuICAgICAgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0LCAtLWNvZGUtbWlycm9yLWhlaWdodCk7XHJcbiAgICAgIH1cclxuICAgICAgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYm9yZGVyLXJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIDpob3N0KC5lcnJvci1zdGF0ZSkgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgcmVkKTtcclxuICAgICAgfVxyXG4gICAgICAuQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG4gICAgICB9XHJcbiAgICAgIC5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xyXG4gICAgICB9XHJcbiAgICAgIC5ydGwgLkNvZGVNaXJyb3ItdnNjcm9sbGJhciB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ydGwtZ3V0dGVyIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5gO1xyXG5cclxuICAgIHRoaXMuY29kZW1pcnJvciA9IGNvZGVNaXJyb3Ioc2hhZG93Um9vdCwge1xyXG4gICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXHJcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICB0YWJTaXplOiAyLFxyXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXHJcbiAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlLFxyXG4gICAgICB2aWV3cG9ydE1hcmdpbjogSW5maW5pdHksXHJcbiAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgIFRhYjogXCJpbmRlbnRNb3JlXCIsXHJcbiAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGd1dHRlcnM6IHRoaXMuX2NhbGNHdXR0ZXJzKCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xyXG4gICAgdGhpcy5jb2RlbWlycm9yIS5vbihcImNoYW5nZXNcIiwgKCkgPT4gdGhpcy5fb25DaGFuZ2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy5fdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jYWxjR3V0dGVycygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5ydGwgPyBbXCJydGwtZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29kZW1pcnJvcikge1xyXG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZ2V0V3JhcHBlckVsZW1lbnQoKS5jbGFzc0xpc3QudG9nZ2xlKFwicnRsXCIsIHRoaXMucnRsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcclxuICAgIFwib3AtY29kZS1lZGl0b3JcIjogT3BDb2RlRWRpdG9yO1xyXG4gIH1cclxufVxyXG4iLCJpbnRlcmZhY2UgTG9hZGVkQ29kZU1pcnJvciB7XHJcbiAgY29kZU1pcnJvcjogYW55O1xyXG4gIGNvZGVNaXJyb3JDc3M6IGFueTtcclxufVxyXG5cclxubGV0IGxvYWRlZDogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ29kZU1pcnJvciA9IGFzeW5jICgpOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+ID0+IHtcclxuICBpZiAoIWxvYWRlZCkge1xyXG4gICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29kZW1pcnJvclwiICovIFwiLi9jb2RlbWlycm9yXCIpO1xyXG4gIH1cclxuICByZXR1cm4gbG9hZGVkO1xyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBZUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUF5REE7QUFDQTtBQUFBO0FBQ0E7QUEzREE7QUFBQTtBQUFBO0FBQUE7QUE4REE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVhBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQXBIQTtBQUFBO0FBQUE7QUFBQTtBQXVIQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBN0hBO0FBQUE7QUFBQTtBQUFBO0FBZ0lBO0FBQ0E7QUFqSUE7QUFBQTtBQUFBO0FBQUE7QUFvSUE7QUFDQTtBQUNBO0FBQ0E7QUF2SUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0Esa09BQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9