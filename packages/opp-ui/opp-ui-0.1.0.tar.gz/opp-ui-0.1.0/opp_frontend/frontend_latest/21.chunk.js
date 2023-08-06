(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[21],{

/***/ "./src/common/datetime/check_options_support.ts":
/*!******************************************************!*\
  !*** ./src/common/datetime/check_options_support.ts ***!
  \******************************************************/
/*! exports provided: toLocaleDateStringSupportsOptions, toLocaleTimeStringSupportsOptions, toLocaleStringSupportsOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleDateStringSupportsOptions", function() { return toLocaleDateStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleTimeStringSupportsOptions", function() { return toLocaleTimeStringSupportsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocaleStringSupportsOptions", function() { return toLocaleStringSupportsOptions; });
// Check for support of native locale string options
function checkToLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

function checkToLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

const toLocaleDateStringSupportsOptions = checkToLocaleDateStringSupportsOptions();
const toLocaleTimeStringSupportsOptions = checkToLocaleTimeStringSupportsOptions();
const toLocaleStringSupportsOptions = checkToLocaleStringSupportsOptions();

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: formatTime, formatTimeWithSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeWithSeconds", function() { return formatTimeWithSeconds; });
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
/* harmony import */ var _check_options_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check_options_support */ "./src/common/datetime/check_options_support.ts");


const formatTime = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
const formatTimeWithSeconds = _check_options_support__WEBPACK_IMPORTED_MODULE_1__["toLocaleTimeStringSupportsOptions"] ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumTime");

/***/ }),

/***/ "./src/data/mqtt.ts":
/*!**************************!*\
  !*** ./src/data/mqtt.ts ***!
  \**************************/
/*! exports provided: subscribeMQTTTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeMQTTTopic", function() { return subscribeMQTTTopic; });
const subscribeMQTTTopic = (opp, topic, callback) => {
  return opp.connection.subscribeMessage(callback, {
    type: "mqtt/subscribe",
    topic
  });
};

/***/ }),

/***/ "./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/op-code-editor */ "./src/components/op-code-editor.ts");
/* harmony import */ var _mqtt_subscribe_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mqtt-subscribe-card */ "./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts");
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









let OpPanelDevMqtt = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("developer-tools-mqtt")], function (_initialize, _LitElement) {
  class OpPanelDevMqtt extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpPanelDevMqtt,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "topic",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "payload",

      value() {
        return "";
      }

    }, {
      kind: "field",
      key: "inited",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        if (localStorage && localStorage["panel-dev-mqtt-topic"]) {
          this.topic = localStorage["panel-dev-mqtt-topic"];
        }

        if (localStorage && localStorage["panel-dev-mqtt-payload"]) {
          this.payload = localStorage["panel-dev-mqtt-payload"];
        }

        this.inited = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="content">
        <op-card
          header="${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.description_publish")}"
        >
          <div class="card-content">
            <paper-input
              label="${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.topic")}"
              .value=${this.topic}
              @value-changed=${this._handleTopic}
            ></paper-input>

            <p>
              ${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.payload")}
            </p>
            <op-code-editor
              mode="jinja2"
              .value="${this.payload}"
              @value-changed=${this._handlePayload}
            ></op-code-editor>
          </div>
          <div class="card-actions">
            <mwc-button @click=${this._publish}
              >${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.publish")}</mwc-button
            >
          </div>
        </op-card>

        <mqtt-subscribe-card .opp=${this.opp}></mqtt-subscribe-card>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "_handleTopic",
      value: function _handleTopic(ev) {
        this.topic = ev.detail.value;

        if (localStorage && this.inited) {
          localStorage["panel-dev-mqtt-topic"] = this.topic;
        }
      }
    }, {
      kind: "method",
      key: "_handlePayload",
      value: function _handlePayload(ev) {
        this.payload = ev.detail.value;

        if (localStorage && this.inited) {
          localStorage["panel-dev-mqtt-payload"] = this.payload;
        }
      }
    }, {
      kind: "method",
      key: "_publish",
      value: function _publish() {
        if (!this.opp) {
          return;
        }

        this.opp.callService("mqtt", "publish", {
          topic: this.topic,
          payload_template: this.payload
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_3__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 24px 0 32px;
          max-width: 600px;
          margin: 0 auto;
          direction: ltr;
        }

        mqtt-subscribe-card {
          display: block;
          margin: 16px auto;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/developer-tools/mqtt/mqtt-subscribe-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _data_mqtt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/mqtt */ "./src/data/mqtt.ts");
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








let MqttSubscribeCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("mqtt-subscribe-card")], function (_initialize, _LitElement) {
  class MqttSubscribeCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MqttSubscribeCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_topic",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_subscribed",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_messages",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_messageCount",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(MqttSubscribeCard.prototype), "disconnectedCallback", this).call(this);

        if (this._subscribed) {
          this._subscribed();

          this._subscribed = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-card
        header="${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.description_listen")}"
      >
        <form>
          <paper-input
            .label=${this._subscribed ? this.opp.localize("ui.panel.developer-tools.tabs.mqtt.listening_to") : this.opp.localize("ui.panel.developer-tools.tabs.mqtt.subscribe_to")}
            .disabled=${this._subscribed !== undefined}
            .value=${this._topic}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <mwc-button
            .disabled=${this._topic === ""}
            @click=${this._handleSubmit}
            type="submit"
          >
            ${this._subscribed ? this.opp.localize("ui.panel.developer-tools.tabs.mqtt.stop_listening") : this.opp.localize("ui.panel.developer-tools.tabs.mqtt.start_listening")}
          </mwc-button>
        </form>
        <div class="events">
          ${this._messages.map(msg => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="event">
                ${this.opp.localize("ui.panel.developer-tools.tabs.mqtt.message_received", "id", msg.id, "topic", msg.message.topic, "time", Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(msg.time, this.opp.language))}
                <pre>${msg.payload}</pre>
                <div class="bottom">
                  QoS: ${msg.message.qos} - Retain:
                  ${Boolean(msg.message.retain)}
                </div>
              </div>
            `)}
        </div>
      </op-card>
    `;
      }
    }, {
      kind: "method",
      key: "_valueChanged",
      value: function _valueChanged(ev) {
        this._topic = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_handleSubmit",
      value: async function _handleSubmit() {
        if (this._subscribed) {
          this._subscribed();

          this._subscribed = undefined;
        } else {
          this._subscribed = await Object(_data_mqtt__WEBPACK_IMPORTED_MODULE_5__["subscribeMQTTTopic"])(this.opp, this._topic, message => this._handleMessage(message));
        }
      }
    }, {
      kind: "method",
      key: "_handleMessage",
      value: function _handleMessage(message) {
        const tail = this._messages.length > 30 ? this._messages.slice(0, 29) : this._messages;
        let payload;

        try {
          payload = JSON.stringify(JSON.parse(message.payload), null, 4);
        } catch (e) {
          payload = message.payload;
        }

        this._messages = [{
          payload,
          message,
          time: new Date(),
          id: this._messageCount++
        }, ...tail];
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      form {
        display: block;
        padding: 16px;
      }
      paper-input {
        display: inline-block;
        width: 200px;
      }
      .events {
        margin: -16px 0;
        padding: 0 16px;
      }
      .event {
        border-bottom: 1px solid var(--divider-color);
        padding-bottom: 16px;
        margin: 16px 0;
      }
      .event:last-child {
        border-bottom: 0;
      }
      .bottom {
        font-size: 80%;
        color: var(--secondary-text-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2NoZWNrX29wdGlvbnNfc3VwcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL21xdHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvbXF0dC9kZXZlbG9wZXItdG9vbHMtbXF0dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9tcXR0L21xdHQtc3Vic2NyaWJlLWNhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gY2hlY2tUb0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja1RvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCB0b0xvY2FsZURhdGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpO1xuZXhwb3J0IGNvbnN0IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucyA9IGNoZWNrVG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG5leHBvcnQgY29uc3QgdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMgPSBjaGVja1RvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5pbXBvcnQgeyB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMgfSBmcm9tIFwiLi9jaGVja19vcHRpb25zX3N1cHBvcnRcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnNcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWVXaXRoU2Vjb25kcyA9IHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9uc1xuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwibWVkaXVtVGltZVwiKTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNUVRUTWVzc2FnZSB7XG4gIHRvcGljOiBzdHJpbmc7XG4gIHBheWxvYWQ6IHN0cmluZztcbiAgcW9zOiBudW1iZXI7XG4gIHJldGFpbjogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlTVFUVFRvcGljID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHRvcGljOiBzdHJpbmcsXG4gIGNhbGxiYWNrOiAobWVzc2FnZTogTVFUVE1lc3NhZ2UpID0+IHZvaWRcbikgPT4ge1xuICByZXR1cm4gb3BwLmNvbm5lY3Rpb24uc3Vic2NyaWJlTWVzc2FnZTxNUVRUTWVzc2FnZT4oY2FsbGJhY2ssIHtcbiAgICB0eXBlOiBcIm1xdHQvc3Vic2NyaWJlXCIsXG4gICAgdG9waWMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgeyBvcFN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IFwiLi9tcXR0LXN1YnNjcmliZS1jYXJkXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZGV2ZWxvcGVyLXRvb2xzLW1xdHRcIilcbmNsYXNzIE9wUGFuZWxEZXZNcXR0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgdG9waWMgPSBcIlwiO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgcGF5bG9hZCA9IFwiXCI7XG5cbiAgcHJpdmF0ZSBpbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlW1wicGFuZWwtZGV2LW1xdHQtdG9waWNcIl0pIHtcbiAgICAgIHRoaXMudG9waWMgPSBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC10b3BpY1wiXTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC1wYXlsb2FkXCJdKSB7XG4gICAgICB0aGlzLnBheWxvYWQgPSBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC1wYXlsb2FkXCJdO1xuICAgIH1cbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxvcC1jYXJkXG4gICAgICAgICAgaGVhZGVyPVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMubXF0dC5kZXNjcmlwdGlvbl9wdWJsaXNoXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMubXF0dC50b3BpY1wiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy50b3BpY31cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVUb3BpY31cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLm1xdHQucGF5bG9hZFwiKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxvcC1jb2RlLWVkaXRvclxuICAgICAgICAgICAgICBtb2RlPVwiamluamEyXCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnBheWxvYWR9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVQYXlsb2FkfVxuICAgICAgICAgICAgPjwvb3AtY29kZS1lZGl0b3I+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fcHVibGlzaH1cbiAgICAgICAgICAgICAgPiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5tcXR0LnB1Ymxpc2hcIlxuICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L29wLWNhcmQ+XG5cbiAgICAgICAgPG1xdHQtc3Vic2NyaWJlLWNhcmQgLm9wcD0ke3RoaXMub3BwfT48L21xdHQtc3Vic2NyaWJlLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVG9waWMoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgdGhpcy50b3BpYyA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobG9jYWxTdG9yYWdlICYmIHRoaXMuaW5pdGVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbXCJwYW5lbC1kZXYtbXF0dC10b3BpY1wiXSA9IHRoaXMudG9waWM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGF5bG9hZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLnBheWxvYWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKGxvY2FsU3RvcmFnZSAmJiB0aGlzLmluaXRlZCkge1xuICAgICAgbG9jYWxTdG9yYWdlW1wicGFuZWwtZGV2LW1xdHQtcGF5bG9hZFwiXSA9IHRoaXMucGF5bG9hZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wdWJsaXNoKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcHApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHAuY2FsbFNlcnZpY2UoXCJtcXR0XCIsIFwicHVibGlzaFwiLCB7XG4gICAgICB0b3BpYzogdGhpcy50b3BpYyxcbiAgICAgIHBheWxvYWRfdGVtcGxhdGU6IHRoaXMucGF5bG9hZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjRweCAwIDMycHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1xdHQtc3Vic2NyaWJlLWNhcmQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRldmVsb3Blci10b29scy1tcXR0XCI6IE9wUGFuZWxEZXZNcXR0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuXG5pbXBvcnQgeyBzdWJzY3JpYmVNUVRUVG9waWMsIE1RVFRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbXF0dFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm1xdHQtc3Vic2NyaWJlLWNhcmRcIilcbmNsYXNzIE1xdHRTdWJzY3JpYmVDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvcHAhOiBPcGVuUGVlclBvd2VyO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RvcGljID0gXCJcIjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdWJzY3JpYmVkPzogKCkgPT4gdm9pZDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9tZXNzYWdlczogQXJyYXk8e1xuICAgIGlkOiBudW1iZXI7XG4gICAgbWVzc2FnZTogTVFUVE1lc3NhZ2U7XG4gICAgcGF5bG9hZDogc3RyaW5nO1xuICAgIHRpbWU6IERhdGU7XG4gIH0+ID0gW107XG5cbiAgcHJpdmF0ZSBfbWVzc2FnZUNvdW50ID0gMDtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCgpO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1jYXJkXG4gICAgICAgIGhlYWRlcj1cIiR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5tcXR0LmRlc2NyaXB0aW9uX2xpc3RlblwiXG4gICAgICAgICl9XCJcbiAgICAgID5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9zdWJzY3JpYmVkXG4gICAgICAgICAgICAgID8gdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLm1xdHQubGlzdGVuaW5nX3RvXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLm1xdHQuc3Vic2NyaWJlX3RvXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fc3Vic2NyaWJlZCAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdG9waWN9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fdG9waWMgPT09IFwiXCJ9XG4gICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX3N1YnNjcmliZWRcbiAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMubXF0dC5zdG9wX2xpc3RlbmluZ1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5tcXR0LnN0YXJ0X2xpc3RlbmluZ1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxuICAgICAgICAgICR7dGhpcy5fbWVzc2FnZXMubWFwKFxuICAgICAgICAgICAgKG1zZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMubXF0dC5tZXNzYWdlX3JlY2VpdmVkXCIsXG4gICAgICAgICAgICAgICAgICBcImlkXCIsXG4gICAgICAgICAgICAgICAgICBtc2cuaWQsXG4gICAgICAgICAgICAgICAgICBcInRvcGljXCIsXG4gICAgICAgICAgICAgICAgICBtc2cubWVzc2FnZS50b3BpYyxcbiAgICAgICAgICAgICAgICAgIFwidGltZVwiLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0VGltZShtc2cudGltZSwgdGhpcy5vcHAhLmxhbmd1YWdlKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHByZT4ke21zZy5wYXlsb2FkfTwvcHJlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgIFFvUzogJHttc2cubWVzc2FnZS5xb3N9IC0gUmV0YWluOlxuICAgICAgICAgICAgICAgICAgJHtCb29sZWFuKG1zZy5tZXNzYWdlLnJldGFpbil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcC1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fdG9waWMgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVTdWJtaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmliZWQpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZWQoKTtcbiAgICAgIHRoaXMuX3N1YnNjcmliZWQgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZWQgPSBhd2FpdCBzdWJzY3JpYmVNUVRUVG9waWMoXG4gICAgICAgIHRoaXMub3BwISxcbiAgICAgICAgdGhpcy5fdG9waWMsXG4gICAgICAgIChtZXNzYWdlKSA9PiB0aGlzLl9oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1lc3NhZ2UobWVzc2FnZTogTVFUVE1lc3NhZ2UpIHtcbiAgICBjb25zdCB0YWlsID1cbiAgICAgIHRoaXMuX21lc3NhZ2VzLmxlbmd0aCA+IDMwID8gdGhpcy5fbWVzc2FnZXMuc2xpY2UoMCwgMjkpIDogdGhpcy5fbWVzc2FnZXM7XG4gICAgbGV0IHBheWxvYWQ6IHN0cmluZztcbiAgICB0cnkge1xuICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UobWVzc2FnZS5wYXlsb2FkKSwgbnVsbCwgNCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcGF5bG9hZCA9IG1lc3NhZ2UucGF5bG9hZDtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIGlkOiB0aGlzLl9tZXNzYWdlQ291bnQrKyxcbiAgICAgIH0sXG4gICAgICAuLi50YWlsLFxuICAgIF07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50cyB7XG4gICAgICAgIG1hcmdpbjogLTE2cHggMDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICB9XG4gICAgICAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuYm90dG9tIHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibXF0dC1zdWJzY3JpYmUtY2FyZFwiOiBNcXR0U3Vic2NyaWJlQ2FyZDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBU0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7OztBQUFBOzs7Ozs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTs7O0FBR0E7Ozs7QUFNQTtBQUdBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7OztBQU9BOztBQWxDQTtBQXFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXNCQTs7O0FBMUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7QUFBQTs7Ozs7QUFFQTs7Ozs7QUFFQTs7OztBQUtBOzs7Ozs7OztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBOztBQUVBOzs7O0FBTUE7QUFPQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOzs7O0FBVUE7O0FBR0E7QUFTQTs7QUFFQTtBQUNBOzs7QUFmQTs7O0FBbENBO0FBeURBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7OztBQXBKQTs7OztBIiwic291cmNlUm9vdCI6IiJ9