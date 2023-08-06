(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["device-registry-detail-dialog~dialog-config-flow~entity-registry-detail-dialog~panel-config-automati~0004ef99"],{

/***/ "./src/dialogs/generic/show-dialog-box.ts":
/*!************************************************!*\
  !*** ./src/dialogs/generic/show-dialog-box.ts ***!
  \************************************************/
/*! exports provided: loadGenericDialog, showAlertDialog, showConfirmationDialog, showPromptDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGenericDialog", function() { return loadGenericDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertDialog", function() { return showAlertDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirmationDialog", function() { return showConfirmationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPromptDialog", function() { return showPromptDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadGenericDialog = () => Promise.all(/*! import() | confirmation */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~684cb48c"), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~confirmation"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("confirmation")]).then(__webpack_require__.bind(null, /*! ./dialog-box */ "./src/dialogs/generic/dialog-box.ts"));

const showDialogHelper = (element, dialogParams, extra) => new Promise(resolve => {
  const origCancel = dialogParams.cancel;
  const origConfirm = dialogParams.confirm;
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-box",
    dialogImport: loadGenericDialog,
    dialogParams: Object.assign({}, dialogParams, {}, extra, {
      cancel: () => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? null : false);

        if (origCancel) {
          origCancel();
        }
      },
      confirm: out => {
        resolve((extra === null || extra === void 0 ? void 0 : extra.prompt) ? out : true);

        if (origConfirm) {
          origConfirm(out);
        }
      }
    })
  });
});

const showAlertDialog = (element, dialogParams) => showDialogHelper(element, dialogParams);
const showConfirmationDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  confirmation: true
});
const showPromptDialog = (element, dialogParams) => showDialogHelper(element, dialogParams, {
  prompt: true
});

/***/ }),

/***/ "./src/mixins/subscribe-mixin.ts":
/*!***************************************!*\
  !*** ./src/mixins/subscribe-mixin.ts ***!
  \***************************************/
/*! exports provided: SubscribeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeMixin", function() { return SubscribeMixin; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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



/* tslint:disable-next-line:variable-name */
const SubscribeMixin = superClass => {
  let SubscribeClass = _decorate(null, function (_initialize, _superClass) {
    class SubscribeClass extends _superClass {
      constructor(...args) {
        super(...args);

        _initialize(this);
      }

    }

    return {
      F: SubscribeClass,
      d: [{
        kind: "field",
        decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
        key: "opp",
        value: void 0
      }, {
        kind: "field",
        key: "__unsubs",
        value: void 0
      }, {
        kind: "method",
        key: "connectedCallback",
        value:
        /* tslint:disable-next-line:variable-name */
        function connectedCallback() {
          _get(_getPrototypeOf(SubscribeClass.prototype), "connectedCallback", this).call(this);

          this.__checkSubscribed();
        }
      }, {
        kind: "method",
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(SubscribeClass.prototype), "disconnectedCallback", this).call(this);

          if (this.__unsubs) {
            while (this.__unsubs.length) {
              this.__unsubs.pop()();
            }

            this.__unsubs = undefined;
          }
        }
      }, {
        kind: "method",
        key: "updated",
        value: function updated(changedProps) {
          _get(_getPrototypeOf(SubscribeClass.prototype), "updated", this).call(this, changedProps);

          if (changedProps.has("opp")) {
            this.__checkSubscribed();
          }
        }
      }, {
        kind: "method",
        key: "oppSubscribe",
        value: function oppSubscribe() {
          return [];
        }
      }, {
        kind: "method",
        key: "__checkSubscribed",
        value: function __checkSubscribed() {
          if (this.__unsubs !== undefined || !this.isConnected || this.opp === undefined) {
            return;
          }

          this.__unsubs = this.oppSubscribe();
        }
      }]
    };
  }, superClass);

  return SubscribeClass;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+ZGlhbG9nLWNvbmZpZy1mbG93fmVudGl0eS1yZWdpc3RyeS1kZXRhaWwtZGlhbG9nfnBhbmVsLWNvbmZpZy1hdXRvbWF0aX4wMDA0ZWY5OS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2dlbmVyaWMvc2hvdy1kaWFsb2ctYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvc3Vic2NyaWJlLW1peGluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuaW50ZXJmYWNlIEJhc2VEaWFsb2dQYXJhbXMge1xuICBjb25maXJtVGV4dD86IHN0cmluZztcbiAgdGV4dD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgY29uZmlybT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uRGlhbG9nUGFyYW1zIGV4dGVuZHMgQmFzZURpYWxvZ1BhcmFtcyB7XG4gIGRpc21pc3NUZXh0Pzogc3RyaW5nO1xuICBjb25maXJtPzogKCkgPT4gdm9pZDtcbiAgY2FuY2VsPzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHREaWFsb2dQYXJhbXMgZXh0ZW5kcyBCYXNlRGlhbG9nUGFyYW1zIHtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG4gIGNvbmZpcm0/OiAob3V0Pzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1BhcmFtc1xuICBleHRlbmRzIENvbmZpcm1hdGlvbkRpYWxvZ1BhcmFtcyxcbiAgICBQcm9tcHREaWFsb2dQYXJhbXMge1xuICBjb25maXJtPzogKG91dD86IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybWF0aW9uPzogYm9vbGVhbjtcbiAgcHJvbXB0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRHZW5lcmljRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlybWF0aW9uXCIgKi8gXCIuL2RpYWxvZy1ib3hcIik7XG5cbmNvbnN0IHNob3dEaWFsb2dIZWxwZXIgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IERpYWxvZ1BhcmFtcyxcbiAgZXh0cmE/OiB7XG4gICAgY29uZmlybWF0aW9uPzogRGlhbG9nUGFyYW1zW1wiY29uZmlybWF0aW9uXCJdO1xuICAgIHByb21wdD86IERpYWxvZ1BhcmFtc1tcInByb21wdFwiXTtcbiAgfVxuKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdDYW5jZWwgPSBkaWFsb2dQYXJhbXMuY2FuY2VsO1xuICAgIGNvbnN0IG9yaWdDb25maXJtID0gZGlhbG9nUGFyYW1zLmNvbmZpcm07XG5cbiAgICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWJveFwiLFxuICAgICAgZGlhbG9nSW1wb3J0OiBsb2FkR2VuZXJpY0RpYWxvZyxcbiAgICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgICAuLi5kaWFsb2dQYXJhbXMsXG4gICAgICAgIC4uLmV4dHJhLFxuICAgICAgICBjYW5jZWw6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV4dHJhPy5wcm9tcHQgPyBudWxsIDogZmFsc2UpO1xuICAgICAgICAgIGlmIChvcmlnQ2FuY2VsKSB7XG4gICAgICAgICAgICBvcmlnQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiAob3V0KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShleHRyYT8ucHJvbXB0ID8gb3V0IDogdHJ1ZSk7XG4gICAgICAgICAgaWYgKG9yaWdDb25maXJtKSB7XG4gICAgICAgICAgICBvcmlnQ29uZmlybShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsZXJ0RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBBbGVydERpYWxvZ1BhcmFtc1xuKSA9PiBzaG93RGlhbG9nSGVscGVyKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcyk7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlybWF0aW9uRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBDb25maXJtYXRpb25EaWFsb2dQYXJhbXNcbikgPT5cbiAgc2hvd0RpYWxvZ0hlbHBlcihlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHsgY29uZmlybWF0aW9uOiB0cnVlIH0pIGFzIFByb21pc2U8XG4gICAgYm9vbGVhblxuICA+O1xuXG5leHBvcnQgY29uc3Qgc2hvd1Byb21wdERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogUHJvbXB0RGlhbG9nUGFyYW1zXG4pID0+XG4gIHNob3dEaWFsb2dIZWxwZXIoZWxlbWVudCwgZGlhbG9nUGFyYW1zLCB7IHByb21wdDogdHJ1ZSB9KSBhcyBQcm9taXNlPFxuICAgIG51bGwgfCBzdHJpbmdcbiAgPjtcbiIsImltcG9ydCB7IFByb3BlcnR5VmFsdWVzLCBwcm9wZXJ0eSwgVXBkYXRpbmdFbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBPcHBTdWJzY3JpYmVFbGVtZW50IHtcbiAgb3BwU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZSAqL1xuZXhwb3J0IGNvbnN0IFN1YnNjcmliZU1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxVcGRhdGluZ0VsZW1lbnQ+PihcbiAgc3VwZXJDbGFzczogVFxuKSA9PiB7XG4gIGNsYXNzIFN1YnNjcmliZUNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgQHByb3BlcnR5KCkgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG5cbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZSAqL1xuICAgIHByaXZhdGUgX191bnN1YnM/OiBVbnN1YnNjcmliZUZ1bmNbXTtcblxuICAgIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIGlmICh0aGlzLl9fdW5zdWJzKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9fdW5zdWJzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX191bnN1YnMucG9wKCkhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3Vuc3VicyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm9wcFwiKSkge1xuICAgICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9wcFN1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfX2NoZWNrU3Vic2NyaWJlZCgpOiB2b2lkIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fX3Vuc3VicyAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICEoKHRoaXMgYXMgdW5rbm93bikgYXMgRWxlbWVudCkuaXNDb25uZWN0ZWQgfHxcbiAgICAgICAgdGhpcy5vcHAgPT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX191bnN1YnMgPSB0aGlzLm9wcFN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gU3Vic2NyaWJlQ2xhc3M7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0EscTFCQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUhBO0FBb0JBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFBQTtBQUlBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBO0FBQUE7QUFrQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUNBO0FBQUE7QUFBQTtBQUNBO0FBMkNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==