(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"],{

/***/ "./src/components/op-switch.ts":
/*!*************************************!*\
  !*** ./src/components/op-switch.ts ***!
  \*************************************/
/*! exports provided: OpSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpSwitch", function() { return OpSwitch; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-switch */ "./node_modules/@material/mwc-switch/mwc-switch.js");
/* harmony import */ var _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-switch/mwc-switch-css */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
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

const MwcSwitch = customElements.get("mwc-switch");
let OpSwitch = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-switch")], function (_initialize, _MwcSwitch) {
  class OpSwitch extends _MwcSwitch {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpSwitch,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "haptic",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("slot")],
      key: "_slot",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value: // Generate a haptic vibration.
      // Only set to true if the new value of the switch is applied right away when toggling.
      // Do not add haptic when a user is required to press save.
      function firstUpdated() {
        _get(_getPrototypeOf(OpSwitch.prototype), "firstUpdated", this).call(this);

        this.style.setProperty("--mdc-theme-secondary", "var(--switch-checked-color)");
        this.classList.toggle("slotted", Boolean(this._slot.assignedNodes().length));
        this.addEventListener("change", () => {
          if (this.haptic) {
            Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("light");
          }
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div
          class="mdc-switch__thumb-underlay"
          .ripple="${Object(_material_mwc_ripple_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["ripple"])({
          interactionNode: this
        })}"
        >
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              @change="${this._haChangeHandler}"
            />
          </div>
        </div>
      </div>
      <label for="basic-switch"><slot></slot></label>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_2__["style"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .mdc-switch.mdc-switch--checked .mdc-switch__thumb {
          background-color: var(--switch-checked-button-color);
          border-color: var(--switch-checked-button-color);
        }
        .mdc-switch.mdc-switch--checked .mdc-switch__track {
          background-color: var(--switch-checked-track-color);
          border-color: var(--switch-checked-track-color);
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
          background-color: var(--switch-unchecked-button-color);
          border-color: var(--switch-unchecked-button-color);
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
          background-color: var(--switch-unchecked-track-color);
          border-color: var(--switch-unchecked-track-color);
        }
        :host(.slotted) .mdc-switch {
          margin-right: 24px;
        }
      `];
      }
    }, {
      kind: "method",
      key: "_haChangeHandler",
      value: function _haChangeHandler(e) {
        this.mdcFoundation.handleChange(e); // catch "click" event and sync properties

        this.checked = this.formElement.checked;
      }
    }]
  };
}, MwcSwitch);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zfmNvbmZpcm1hdGlvbn5lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZ35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5tb3JlLX40Y2IyYjE2MC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLXN3aXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcXVlcnksXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaC9td2Mtc3dpdGNoLWNzc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3J3YXJkSGFwdGljIH0gZnJvbSBcIi4uL2RhdGEvaGFwdGljc1wiO1xuaW1wb3J0IHsgcmlwcGxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjU3dpdGNoID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLXN3aXRjaFwiKSBhcyBDb25zdHJ1Y3RvcjxTd2l0Y2g+O1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLXN3aXRjaFwiKVxuZXhwb3J0IGNsYXNzIE9wU3dpdGNoIGV4dGVuZHMgTXdjU3dpdGNoIHtcbiAgLy8gR2VuZXJhdGUgYSBoYXB0aWMgdmlicmF0aW9uLlxuICAvLyBPbmx5IHNldCB0byB0cnVlIGlmIHRoZSBuZXcgdmFsdWUgb2YgdGhlIHN3aXRjaCBpcyBhcHBsaWVkIHJpZ2h0IGF3YXkgd2hlbiB0b2dnbGluZy5cbiAgLy8gRG8gbm90IGFkZCBoYXB0aWMgd2hlbiBhIHVzZXIgaXMgcmVxdWlyZWQgdG8gcHJlc3Mgc2F2ZS5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgaGFwdGljID0gZmFsc2U7XG4gIEBxdWVyeShcInNsb3RcIikgcHJpdmF0ZSBfc2xvdCE6IEhUTUxTbG90RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tbWRjLXRoZW1lLXNlY29uZGFyeVwiLFxuICAgICAgXCJ2YXIoLS1zd2l0Y2gtY2hlY2tlZC1jb2xvcilcIlxuICAgICk7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJzbG90dGVkXCIsXG4gICAgICBCb29sZWFuKHRoaXMuX3Nsb3QuYXNzaWduZWROb2RlcygpLmxlbmd0aClcbiAgICApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5oYXB0aWMpIHtcbiAgICAgICAgZm9yd2FyZEhhcHRpYyhcImxpZ2h0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190cmFja1wiPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYi11bmRlcmxheVwiXG4gICAgICAgICAgLnJpcHBsZT1cIiR7cmlwcGxlKHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uTm9kZTogdGhpcyxcbiAgICAgICAgICB9KX1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zd2l0Y2hfX3RodW1iXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1zd2l0Y2hcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX2hhQ2hhbmdlSGFuZGxlcn1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJiYXNpYy1zd2l0Y2hcIj48c2xvdD48L3Nsb3Q+PC9sYWJlbD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3dpdGNoLWNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXN3aXRjaC1jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2gubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdHJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN3aXRjaC1jaGVja2VkLXRyYWNrLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXN3aXRjaC1jaGVja2VkLXRyYWNrLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3dpdGNoLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3dpdGNoLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RyYWNrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zd2l0Y2gtdW5jaGVja2VkLXRyYWNrLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXN3aXRjaC11bmNoZWNrZWQtdHJhY2stY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zbG90dGVkKSAubWRjLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIF9oYUNoYW5nZUhhbmRsZXIoZTogRXZlbnQpIHtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlQ2hhbmdlKGUpO1xuICAgIC8vIGNhdGNoIFwiY2xpY2tcIiBldmVudCBhbmQgc3luYyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5jaGVja2VkID0gdGhpcy5mb3JtRWxlbWVudC5jaGVja2VkO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvcC1zd2l0Y2hcIjogT3BTd2l0Y2g7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUF5QkE7Ozs7O0FBS0E7QUFDQTtBQURBOzs7Ozs7OztBQVVBOzs7Ozs7QUFmQTtBQXNCQTtBQS9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE2QkE7QUEvRUE7QUFBQTtBQUFBO0FBQUE7QUFrRkE7QUFDQTtBQUNBO0FBQ0E7QUFyRkE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=