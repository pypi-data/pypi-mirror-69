(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[6],{

/***/ "./src/common/entity/compute_active_state.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_active_state.ts ***!
  \***************************************************/
/*! exports provided: computeActiveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeActiveState", function() { return computeActiveState; });
const computeActiveState = stateObj => {
  const domain = stateObj.entity_id.split(".")[0];
  let state = stateObj.state;

  if (domain === "climate") {
    state = stateObj.attributes.hvac_action;
  }

  return state;
};

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = stateObj => {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};

/***/ }),

/***/ "./src/common/style/icon_color_css.ts":
/*!********************************************!*\
  !*** ./src/common/style/icon_color_css.ts ***!
  \********************************************/
/*! exports provided: iconColorCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconColorCSS", function() { return iconColorCSS; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const iconColorCSS = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
  op-icon[data-domain="alert"][data-state="on"],
  op-icon[data-domain="automation"][data-state="on"],
  op-icon[data-domain="binary_sensor"][data-state="on"],
  op-icon[data-domain="calendar"][data-state="on"],
  op-icon[data-domain="camera"][data-state="streaming"],
  op-icon[data-domain="cover"][data-state="open"],
  op-icon[data-domain="fan"][data-state="on"],
  op-icon[data-domain="light"][data-state="on"],
  op-icon[data-domain="input_boolean"][data-state="on"],
  op-icon[data-domain="lock"][data-state="unlocked"],
  op-icon[data-domain="media_player"][data-state="paused"],
  op-icon[data-domain="media_player"][data-state="playing"],
  op-icon[data-domain="script"][data-state="running"],
  op-icon[data-domain="sun"][data-state="above_horizon"],
  op-icon[data-domain="switch"][data-state="on"],
  op-icon[data-domain="timer"][data-state="active"],
  op-icon[data-domain="vacuum"][data-state="cleaning"] {
    color: var(--paper-item-icon-active-color, #fdd835);
  }

  op-icon[data-domain="climate"][data-state="cooling"] {
    color: var(--cool-color, #2b9af9);
  }

  op-icon[data-domain="climate"][data-state="heating"] {
    color: var(--heat-color, #ff8100);
  }

  op-icon[data-domain="alarm_control_panel"] {
    color: var(--alarm-color-armed, var(--label-badge-red));
  }

  op-icon[data-domain="alarm_control_panel"][data-state="disarmed"] {
    color: var(--alarm-color-disarmed, var(--label-badge-green));
  }

  op-icon[data-domain="alarm_control_panel"][data-state="pending"],
  op-icon[data-domain="alarm_control_panel"][data-state="arming"] {
    color: var(--alarm-color-pending, var(--label-badge-yellow));
    animation: pulse 1s infinite;
  }

  op-icon[data-domain="alarm_control_panel"][data-state="triggered"] {
    color: var(--alarm-color-triggered, var(--label-badge-red));
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  op-icon[data-domain="plant"][data-state="problem"],
  op-icon[data-domain="zwave"][data-state="dead"] {
    color: var(--error-state-color, #db4437);
  }

  /* Color the icon if unavailable */
  op-icon[data-state="unavailable"] {
    color: var(--state-icon-unavailable-color);
  }
`;

/***/ }),

/***/ "./src/components/entity/state-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/entity/state-badge.ts ***!
  \**********************************************/
/*! exports provided: StateBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBadge", function() { return StateBadge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _op_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_active_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_active_state */ "./src/common/entity/compute_active_state.ts");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _common_style_icon_color_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/style/icon_color_css */ "./src/common/style/icon_color_css.ts");
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








let StateBadge = _decorate(null, function (_initialize, _LitElement) {
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
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "overrideIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "overrideImage",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "stateColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("op-icon")],
      key: "_icon",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const stateObj = this.stateObj;

        if (!stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__["computeStateDomain"])(stateObj);
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-icon
        id="icon"
        data-domain=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_5__["ifDefined"])(this.stateColor || domain === "light" && this.stateColor !== false ? domain : undefined)}
        data-state=${Object(_common_entity_compute_active_state__WEBPACK_IMPORTED_MODULE_4__["computeActiveState"])(stateObj)}
        .icon=${this.overrideIcon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["stateIcon"])(stateObj)}
      ></op-icon>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!changedProps.has("stateObj") || !this.stateObj) {
          return;
        }

        const stateObj = this.stateObj;
        const iconStyle = {
          color: "",
          filter: ""
        };
        const hostStyle = {
          backgroundImage: ""
        };

        if (stateObj) {
          // hide icon if we have entity picture
          if (stateObj.attributes.entity_picture && !this.overrideIcon || this.overrideImage) {
            let imageUrl = this.overrideImage || stateObj.attributes.entity_picture;

            if (this.opp) {
              imageUrl = this.opp.oppUrl(imageUrl);
            }

            hostStyle.backgroundImage = `url(${imageUrl})`;
            iconStyle.display = "none";
          } else {
            if (stateObj.attributes.hs_color && this.stateColor !== false) {
              const hue = stateObj.attributes.hs_color[0];
              const sat = stateObj.attributes.hs_color[1];

              if (sat > 10) {
                iconStyle.color = `hsl(${hue}, 100%, ${100 - sat / 2}%)`;
              }
            }

            if (stateObj.attributes.brightness && this.stateColor !== false) {
              const brightness = stateObj.attributes.brightness;

              if (typeof brightness !== "number") {
                const errorMessage = `Type error: state-badge expected number, but type of ${stateObj.entity_id}.attributes.brightness is ${typeof brightness} (${brightness})`; // tslint:disable-next-line

                console.warn(errorMessage);
              } // lowest brighntess will be around 50% (that's pretty dark)


              iconStyle.filter = `brightness(${(brightness + 245) / 5}%)`;
            }
          }
        }

        Object.assign(this._icon.style, iconStyle);
        Object.assign(this.style, hostStyle);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        position: relative;
        display: inline-block;
        width: 40px;
        color: var(--paper-item-icon-color, #44739e);
        border-radius: 50%;
        height: 40px;
        text-align: center;
        background-size: cover;
        line-height: 40px;
        vertical-align: middle;
      }

      op-icon {
        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      ${_common_style_icon_color_css__WEBPACK_IMPORTED_MODULE_6__["iconColorCSS"]}
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define("state-badge", StateBadge);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfYWN0aXZlX3N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3R5bGUvaWNvbl9jb2xvcl9jc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlQWN0aXZlU3RhdGUgPSAoc3RhdGVPYmo6IE9wcEVudGl0eSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IHN0YXRlT2JqLmVudGl0eV9pZC5zcGxpdChcIi5cIilbMF07XG4gIGxldCBzdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuXG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgc3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogT3BwRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBpY29uQ29sb3JDU1MgPSBjc3NgXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJhbGVydFwiXVtkYXRhLXN0YXRlPVwib25cIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJhdXRvbWF0aW9uXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cImJpbmFyeV9zZW5zb3JcIl1bZGF0YS1zdGF0ZT1cIm9uXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiY2FsZW5kYXJcIl1bZGF0YS1zdGF0ZT1cIm9uXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiY2FtZXJhXCJdW2RhdGEtc3RhdGU9XCJzdHJlYW1pbmdcIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJjb3ZlclwiXVtkYXRhLXN0YXRlPVwib3BlblwiXSxcbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cImZhblwiXVtkYXRhLXN0YXRlPVwib25cIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJsaWdodFwiXVtkYXRhLXN0YXRlPVwib25cIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJpbnB1dF9ib29sZWFuXCJdW2RhdGEtc3RhdGU9XCJvblwiXSxcbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cImxvY2tcIl1bZGF0YS1zdGF0ZT1cInVubG9ja2VkXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwibWVkaWFfcGxheWVyXCJdW2RhdGEtc3RhdGU9XCJwYXVzZWRcIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJtZWRpYV9wbGF5ZXJcIl1bZGF0YS1zdGF0ZT1cInBsYXlpbmdcIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJzY3JpcHRcIl1bZGF0YS1zdGF0ZT1cInJ1bm5pbmdcIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJzdW5cIl1bZGF0YS1zdGF0ZT1cImFib3ZlX2hvcml6b25cIl0sXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJzd2l0Y2hcIl1bZGF0YS1zdGF0ZT1cIm9uXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwidGltZXJcIl1bZGF0YS1zdGF0ZT1cImFjdGl2ZVwiXSxcbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cInZhY3V1bVwiXVtkYXRhLXN0YXRlPVwiY2xlYW5pbmdcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tYWN0aXZlLWNvbG9yLCAjZmRkODM1KTtcbiAgfVxuXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJjbGltYXRlXCJdW2RhdGEtc3RhdGU9XCJjb29saW5nXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tY29vbC1jb2xvciwgIzJiOWFmOSk7XG4gIH1cblxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiY2xpbWF0ZVwiXVtkYXRhLXN0YXRlPVwiaGVhdGluZ1wiXSB7XG4gICAgY29sb3I6IHZhcigtLWhlYXQtY29sb3IsICNmZjgxMDApO1xuICB9XG5cbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cImFsYXJtX2NvbnRyb2xfcGFuZWxcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hbGFybS1jb2xvci1hcm1lZCwgdmFyKC0tbGFiZWwtYmFkZ2UtcmVkKSk7XG4gIH1cblxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiYWxhcm1fY29udHJvbF9wYW5lbFwiXVtkYXRhLXN0YXRlPVwiZGlzYXJtZWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hbGFybS1jb2xvci1kaXNhcm1lZCwgdmFyKC0tbGFiZWwtYmFkZ2UtZ3JlZW4pKTtcbiAgfVxuXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJhbGFybV9jb250cm9sX3BhbmVsXCJdW2RhdGEtc3RhdGU9XCJwZW5kaW5nXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiYWxhcm1fY29udHJvbF9wYW5lbFwiXVtkYXRhLXN0YXRlPVwiYXJtaW5nXCJdIHtcbiAgICBjb2xvcjogdmFyKC0tYWxhcm0tY29sb3ItcGVuZGluZywgdmFyKC0tbGFiZWwtYmFkZ2UteWVsbG93KSk7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcbiAgfVxuXG4gIG9wLWljb25bZGF0YS1kb21haW49XCJhbGFybV9jb250cm9sX3BhbmVsXCJdW2RhdGEtc3RhdGU9XCJ0cmlnZ2VyZWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1hbGFybS1jb2xvci10cmlnZ2VyZWQsIHZhcigtLWxhYmVsLWJhZGdlLXJlZCkpO1xuICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgb3AtaWNvbltkYXRhLWRvbWFpbj1cInBsYW50XCJdW2RhdGEtc3RhdGU9XCJwcm9ibGVtXCJdLFxuICBvcC1pY29uW2RhdGEtZG9tYWluPVwiendhdmVcIl1bZGF0YS1zdGF0ZT1cImRlYWRcIl0ge1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgI2RiNDQzNyk7XG4gIH1cblxuICAvKiBDb2xvciB0aGUgaWNvbiBpZiB1bmF2YWlsYWJsZSAqL1xuICBvcC1pY29uW2RhdGEtc3RhdGU9XCJ1bmF2YWlsYWJsZVwiXSB7XG4gICAgY29sb3I6IHZhcigtLXN0YXRlLWljb24tdW5hdmFpbGFibGUtY29sb3IpO1xuICB9XG5gO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHF1ZXJ5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL29wLWljb25cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBPcEljb24gfSBmcm9tIFwiLi4vb3AtaWNvblwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZUFjdGl2ZVN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9hY3RpdmVfc3RhdGVcIjtcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCB7IGljb25Db2xvckNTUyB9IGZyb20gXCIuLi8uLi9jb21tb24vc3R5bGUvaWNvbl9jb2xvcl9jc3NcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIG9wcD86IE9wZW5QZWVyUG93ZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IE9wcEVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIG92ZXJyaWRlSWNvbj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIG92ZXJyaWRlSW1hZ2U/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHN0YXRlQ29sb3I/OiBib29sZWFuO1xuICBAcXVlcnkoXCJvcC1pY29uXCIpIHByaXZhdGUgX2ljb24hOiBPcEljb247XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3AtaWNvblxuICAgICAgICBpZD1cImljb25cIlxuICAgICAgICBkYXRhLWRvbWFpbj0ke2lmRGVmaW5lZChcbiAgICAgICAgICB0aGlzLnN0YXRlQ29sb3IgfHwgKGRvbWFpbiA9PT0gXCJsaWdodFwiICYmIHRoaXMuc3RhdGVDb2xvciAhPT0gZmFsc2UpXG4gICAgICAgICAgICA/IGRvbWFpblxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgKX1cbiAgICAgICAgZGF0YS1zdGF0ZT0ke2NvbXB1dGVBY3RpdmVTdGF0ZShzdGF0ZU9iail9XG4gICAgICAgIC5pY29uPSR7dGhpcy5vdmVycmlkZUljb24gfHwgc3RhdGVJY29uKHN0YXRlT2JqKX1cbiAgICAgID48L29wLWljb24+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAoIWNoYW5nZWRQcm9wcy5oYXMoXCJzdGF0ZU9ialwiKSB8fCAhdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBjb25zdCBpY29uU3R5bGU6IFBhcnRpYWw8Q1NTU3R5bGVEZWNsYXJhdGlvbj4gPSB7XG4gICAgICBjb2xvcjogXCJcIixcbiAgICAgIGZpbHRlcjogXCJcIixcbiAgICB9O1xuICAgIGNvbnN0IGhvc3RTdHlsZTogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPiA9IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJcIixcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgLy8gaGlkZSBpY29uIGlmIHdlIGhhdmUgZW50aXR5IHBpY3R1cmVcbiAgICAgIGlmIChcbiAgICAgICAgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUgJiYgIXRoaXMub3ZlcnJpZGVJY29uKSB8fFxuICAgICAgICB0aGlzLm92ZXJyaWRlSW1hZ2VcbiAgICAgICkge1xuICAgICAgICBsZXQgaW1hZ2VVcmwgPSB0aGlzLm92ZXJyaWRlSW1hZ2UgfHwgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZTtcbiAgICAgICAgaWYgKHRoaXMub3BwKSB7XG4gICAgICAgICAgaW1hZ2VVcmwgPSB0aGlzLm9wcC5vcHBVcmwoaW1hZ2VVcmwpO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RTdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XG4gICAgICAgIGljb25TdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5oc19jb2xvciAmJiB0aGlzLnN0YXRlQ29sb3IgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgaHVlID0gc3RhdGVPYmouYXR0cmlidXRlcy5oc19jb2xvclswXTtcbiAgICAgICAgICBjb25zdCBzYXQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhzX2NvbG9yWzFdO1xuICAgICAgICAgIGlmIChzYXQgPiAxMCkge1xuICAgICAgICAgICAgaWNvblN0eWxlLmNvbG9yID0gYGhzbCgke2h1ZX0sIDEwMCUsICR7MTAwIC0gc2F0IC8gMn0lKWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmJyaWdodG5lc3MgJiYgdGhpcy5zdGF0ZUNvbG9yICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGJyaWdodG5lc3MgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJyaWdodG5lc3M7XG4gICAgICAgICAgaWYgKHR5cGVvZiBicmlnaHRuZXNzICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgVHlwZSBlcnJvcjogc3RhdGUtYmFkZ2UgZXhwZWN0ZWQgbnVtYmVyLCBidXQgdHlwZSBvZiAke1xuICAgICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWRcbiAgICAgICAgICAgIH0uYXR0cmlidXRlcy5icmlnaHRuZXNzIGlzICR7dHlwZW9mIGJyaWdodG5lc3N9ICgke2JyaWdodG5lc3N9KWA7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBsb3dlc3QgYnJpZ2hudGVzcyB3aWxsIGJlIGFyb3VuZCA1MCUgKHRoYXQncyBwcmV0dHkgZGFyaylcbiAgICAgICAgICBpY29uU3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoJHsoYnJpZ2h0bmVzcyArIDI0NSkgLyA1fSUpYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ljb24uc3R5bGUsIGljb25TdHlsZSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0eWxlLCBob3N0U3R5bGUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IsICM0NDczOWUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cblxuICAgICAgb3AtaWNvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQsIGZpbHRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAke2ljb25Db2xvckNTU31cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGF0ZS1iYWRnZVwiOiBTdGF0ZUJhZGdlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWJhZGdlXCIsIFN0YXRlQmFkZ2UpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFVQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFLQTtBQUNBOztBQVRBO0FBWUE7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1GQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBbEJBO0FBb0JBO0FBdkdBO0FBQUE7QUFBQTtBQWdIQTs7OztBIiwic291cmNlUm9vdCI6IiJ9