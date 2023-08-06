(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./src/data/integration.ts":
/*!*********************************!*\
  !*** ./src/data/integration.ts ***!
  \*********************************/
/*! exports provided: integrationDocsUrl, integrationIssuesUrl, domainToName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationDocsUrl", function() { return integrationDocsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integrationIssuesUrl", function() { return integrationIssuesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domainToName", function() { return domainToName; });
const integrationDocsUrl = domain => `https://www.open-peer-power.io/integrations/${domain}`;
const integrationIssuesUrl = domain => `https://github.com/open-peer-power/open-peer-power/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${domain}%22`;
const domainToName = (localize, domain) => localize(`domain.${domain}`) || domain;

/***/ }),

/***/ "./src/data/system_health.ts":
/*!***********************************!*\
  !*** ./src/data/system_health.ts ***!
  \***********************************/
/*! exports provided: fetchSystemHealthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemHealthInfo", function() { return fetchSystemHealthInfo; });
const fetchSystemHealthInfo = opp => opp.callWS({
  type: "system_health/info"
});

/***/ }),

/***/ "./src/panels/developer-tools/info/developer-tools-info.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/info/developer-tools-info.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _system_health_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-health-card */ "./src/panels/developer-tools/info/system-health-card.ts");
/* harmony import */ var _integrations_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integrations-card */ "./src/panels/developer-tools/info/integrations-card.ts");
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





const JS_TYPE = "latest";
const JS_VERSION = "20200000.1";
const OPT_IN_PANEL = "states";

let OpPanelDevInfo = _decorate(null, function (_initialize, _LitElement) {
  class OpPanelDevInfo extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpPanelDevInfo,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const opp = this.opp;
        const customUiList = window.CUSTOM_UI_LIST || [];
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="about">
        <p class="version">
          <a href="https://www.open-peer-power.io" target="_blank"
            ><img
              src="/static/icons/favicon-192x192.png"
              height="192"
              alt="${this.opp.localize("ui.panel.developer-tools.tabs.info.open_peer_power_logo")}"
          /></a>
          <br />
          <h2>Open Peer Power ${opp.config.version}</h2>
        </p>
        <p>
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.path_configuration", "path", opp.config.config_dir)}
        </p>
        <p class="develop">
          <a
            href="https://www.open-peer-power.io/developers/credits/"
            target="_blank"
          >
            ${this.opp.localize("ui.panel.developer-tools.tabs.info.developed_by")}
          </a>
        </p>
        <p>
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.license")}<br />
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.source")}
          <a
            href="https://github.com/open-peer-power/open-peer-power"
            target="_blank"
            >${this.opp.localize("ui.panel.developer-tools.tabs.info.server")}</a
          >
          &mdash;
          <a
            href="https://github.com/open-peer-power/open-peer-power-polymer"
            target="_blank"
            >${this.opp.localize("ui.panel.developer-tools.tabs.info.frontend")}</a
          >
        </p>
        <p>
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.built_using")}
          <a href="https://www.python.org">Python 3</a>,
          <a href="https://www.polymer-project.org" target="_blank">Polymer</a>,
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.icons_by")}
          <a href="https://www.google.com/design/icons/" target="_blank"
            >Google</a
          >
          and
          <a href="https://MaterialDesignIcons.com" target="_blank"
            >MaterialDesignIcons.com</a
          >.
        </p>
        <p>
          ${this.opp.localize("ui.panel.developer-tools.tabs.info.frontend_version", "version", JS_VERSION, "type", JS_TYPE)}
          ${customUiList.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div>
                    ${this.opp.localize("ui.panel.developer-tools.tabs.info.custom_uis")}
                    ${customUiList.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                        <div>
                          <a href="${item.url}" target="_blank"> ${item.name}</a
                          >: ${item.version}
                        </div>
                      `)}
                  </div>
                ` : ""}
        </p>
      </div>
      <div class="content">
        <system-health-card .opp=${this.opp}></system-health-card>
        <integrations-card .opp=${this.opp}></integrations-card>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OpPanelDevInfo.prototype), "firstUpdated", this).call(this, changedProps); // Legacy custom UI can be slow to register, give them time.


        const customUI = (window.CUSTOM_UI_LIST || []).length;
        setTimeout(() => {
          if ((window.CUSTOM_UI_LIST || []).length !== customUI.length) {
            this.requestUpdate();
          }
        }, 1000);
      }
    }, {
      kind: "method",
      key: "_toggleDefaultPage",
      value: function _toggleDefaultPage() {
        if (localStorage.defaultPage === OPT_IN_PANEL) {
          delete localStorage.defaultPage;
        } else {
          localStorage.defaultPage = OPT_IN_PANEL;
        }

        this.requestUpdate();
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_1__["opStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          direction: ltr;
        }

        .about {
          text-align: center;
          line-height: 2em;
        }

        .version {
          @apply --paper-font-headline;
        }

        .develop {
          @apply --paper-font-subhead;
        }

        .about a {
          color: var(--dark-primary-color);
        }

        system-health-card,
        integrations-card {
          display: block;
          max-width: 600px;
          margin: 0 auto;
          padding-bottom: 16px;
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("developer-tools-info", OpPanelDevInfo);

/***/ }),

/***/ "./src/panels/developer-tools/info/integrations-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/developer-tools/info/integrations-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _data_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/integration */ "./src/data/integration.ts");
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





let IntegrationsCard = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("integrations-card")], function (_initialize, _LitElement) {
  class IntegrationsCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: IntegrationsCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      key: "_sortedIntegrations",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(components => {
          return components.filter(comp => !comp.includes(".")).sort();
        });
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-card header="Integrations">
        <table class="card-content">
          <tbody>
            ${this._sortedIntegrations(this.opp.config.components).map(domain => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <tr>
                  <td>${domain}</td>
                  <td>
                    <a href=${Object(_data_integration__WEBPACK_IMPORTED_MODULE_2__["integrationDocsUrl"])(domain)} target="_blank">
                      Documentation
                    </a>
                  </td>
                  <td>
                    <a href=${Object(_data_integration__WEBPACK_IMPORTED_MODULE_2__["integrationIssuesUrl"])(domain)} target="_blank">
                      Issues
                    </a>
                  </td>
                </tr>
              `)}
          </tbody>
        </table>
      </op-card>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      td {
        line-height: 2em;
        padding: 0 8px;
      }
      td:first-child {
        padding-left: 0;
      }
      a {
        color: var(--primary-color);
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/developer-tools/info/system-health-card.ts":
/*!***************************************************************!*\
  !*** ./src/panels/developer-tools/info/system-health-card.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _data_system_health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/system_health */ "./src/data/system_health.ts");
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






const sortKeys = (a, b) => {
  if (a === "openpeerpower") {
    return -1;
  }

  if (b === "openpeerpower") {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  if (b < a) {
    return 1;
  }

  return 0;
};

let SystemHealthCard = _decorate(null, function (_initialize, _LitElement) {
  class SystemHealthCard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: SystemHealthCard,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_info",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        const sections = [];

        if (!this._info) {
          sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div class="loading-container">
            <paper-spinner active></paper-spinner>
          </div>
        `);
        } else {
          const domains = Object.keys(this._info).sort(sortKeys);

          for (const domain of domains) {
            const keys = [];

            for (const key of Object.keys(this._info[domain]).sort()) {
              keys.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <tr>
              <td>${key}</td>
              <td>${this._info[domain][key]}</td>
            </tr>
          `);
            }

            if (domain !== "openpeerpower") {
              sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>${this.opp.localize(`domain.${domain}`) || domain}</h3>
            `);
            }

            sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <table>
            ${keys}
          </table>
        `);
          }
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <op-card .header=${this.opp.localize("domain.system_health")}>
        <div class="card-content">${sections}</div>
      </op-card>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(SystemHealthCard.prototype), "firstUpdated", this).call(this, changedProps);

        this._fetchInfo();
      }
    }, {
      kind: "method",
      key: "_fetchInfo",
      value: async function _fetchInfo() {
        try {
          if (!this.opp.config.components.includes("system_health")) {
            throw new Error();
          }

          this._info = await Object(_data_system_health__WEBPACK_IMPORTED_MODULE_3__["fetchSystemHealthInfo"])(this.opp);
        } catch (err) {
          this._info = {
            system_health: {
              error: this.opp.localize("ui.panel.developer-tools.tabs.info.system_health_error")
            }
          };
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      table {
        width: 100%;
      }

      td:first-child {
        width: 33%;
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("system-health-card", SystemHealthCard);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3N5c3RlbV9oZWFsdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvaW5mby9kZXZlbG9wZXItdG9vbHMtaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9pbmZvL2ludGVncmF0aW9ucy1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2luZm8vc3lzdGVtLWhlYWx0aC1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG5leHBvcnQgY29uc3QgaW50ZWdyYXRpb25Eb2NzVXJsID0gKGRvbWFpbjogc3RyaW5nKSA9PlxuICBgaHR0cHM6Ly93d3cub3Blbi1wZWVyLXBvd2VyLmlvL2ludGVncmF0aW9ucy8ke2RvbWFpbn1gO1xuXG5leHBvcnQgY29uc3QgaW50ZWdyYXRpb25Jc3N1ZXNVcmwgPSAoZG9tYWluOiBzdHJpbmcpID0+XG4gIGBodHRwczovL2dpdGh1Yi5jb20vb3Blbi1wZWVyLXBvd2VyL29wZW4tcGVlci1wb3dlci9pc3N1ZXM/cT1pcyUzQWlzc3VlK2lzJTNBb3BlbitsYWJlbCUzQSUyMmludGVncmF0aW9uJTNBKyR7ZG9tYWlufSUyMmA7XG5cbmV4cG9ydCBjb25zdCBkb21haW5Ub05hbWUgPSAobG9jYWxpemU6IExvY2FsaXplRnVuYywgZG9tYWluOiBzdHJpbmcpID0+XG4gIGxvY2FsaXplKGBkb21haW4uJHtkb21haW59YCkgfHwgZG9tYWluO1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5QZWVyUG93ZXJTeXN0ZW1IZWFsdGhJbmZvIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBkZXY6IGJvb2xlYW47XG4gIG9wcGlvOiBib29sZWFuO1xuICB2aXJ0dWFsZW52OiBzdHJpbmc7XG4gIHB5dGhvbl92ZXJzaW9uOiBzdHJpbmc7XG4gIGRvY2tlcjogYm9vbGVhbjtcbiAgYXJjaDogc3RyaW5nO1xuICB0aW1lem9uZTogc3RyaW5nO1xuICBvc19uYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtSGVhbHRoSW5mbyB7XG4gIFtkb21haW46IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9O1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTeXN0ZW1IZWFsdGhJbmZvID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXJcbik6IFByb21pc2U8U3lzdGVtSGVhbHRoSW5mbz4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJzeXN0ZW1faGVhbHRoL2luZm9cIixcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgb3BTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4vc3lzdGVtLWhlYWx0aC1jYXJkXCI7XG5pbXBvcnQgXCIuL2ludGVncmF0aW9ucy1jYXJkXCI7XG5cbmNvbnN0IEpTX1RZUEUgPSBfX0JVSUxEX187XG5jb25zdCBKU19WRVJTSU9OID0gX19WRVJTSU9OX187XG5jb25zdCBPUFRfSU5fUEFORUwgPSBcInN0YXRlc1wiO1xuXG5jbGFzcyBPcFBhbmVsRGV2SW5mbyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdCBvcHAgPSB0aGlzLm9wcDtcbiAgICBjb25zdCBjdXN0b21VaUxpc3Q6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nIH0+ID1cbiAgICAgICh3aW5kb3cgYXMgYW55KS5DVVNUT01fVUlfTElTVCB8fCBbXTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwidmVyc2lvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuLXBlZXItcG93ZXIuaW9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPjxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pY29ucy9mYXZpY29uLTE5MngxOTIucG5nXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTkyXCJcbiAgICAgICAgICAgICAgYWx0PVwiJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmluZm8ub3Blbl9wZWVyX3Bvd2VyX2xvZ29cIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgLz48L2E+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGgyPk9wZW4gUGVlciBQb3dlciAke29wcC5jb25maWcudmVyc2lvbn08L2gyPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmluZm8ucGF0aF9jb25maWd1cmF0aW9uXCIsXG4gICAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICAgIG9wcC5jb25maWcuY29uZmlnX2RpclxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXZlbG9wXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5vcGVuLXBlZXItcG93ZXIuaW8vZGV2ZWxvcGVycy9jcmVkaXRzL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuaW5mby5kZXZlbG9wZWRfYnlcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuaW5mby5saWNlbnNlXCJcbiAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5pbmZvLnNvdXJjZVwiKX1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXBlZXItcG93ZXIvb3Blbi1wZWVyLXBvd2VyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5pbmZvLnNlcnZlclwiXG4gICAgICAgICAgICApfTwvYVxuICAgICAgICAgID5cbiAgICAgICAgICAmbWRhc2g7XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb3Blbi1wZWVyLXBvd2VyL29wZW4tcGVlci1wb3dlci1wb2x5bWVyXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+JHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5pbmZvLmZyb250ZW5kXCJcbiAgICAgICAgICAgICl9PC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICR7dGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5pbmZvLmJ1aWx0X3VzaW5nXCIpfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5weXRob24ub3JnXCI+UHl0aG9uIDM8L2E+LFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UG9seW1lcjwvYT4sXG4gICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmluZm8uaWNvbnNfYnlcIil9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL2ljb25zL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+R29vZ2xlPC9hXG4gICAgICAgICAgPlxuICAgICAgICAgIGFuZFxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL01hdGVyaWFsRGVzaWduSWNvbnMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5NYXRlcmlhbERlc2lnbkljb25zLmNvbTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHt0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuaW5mby5mcm9udGVuZF92ZXJzaW9uXCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIixcbiAgICAgICAgICAgIEpTX1ZFUlNJT04sXG4gICAgICAgICAgICBcInR5cGVcIixcbiAgICAgICAgICAgIEpTX1RZUEVcbiAgICAgICAgICApfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBjdXN0b21VaUxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuaW5mby5jdXN0b21fdWlzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgJHtjdXN0b21VaUxpc3QubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+ICR7aXRlbS5uYW1lfTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+OiAke2l0ZW0udmVyc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxzeXN0ZW0taGVhbHRoLWNhcmQgLm9wcD0ke3RoaXMub3BwfT48L3N5c3RlbS1oZWFsdGgtY2FyZD5cbiAgICAgICAgPGludGVncmF0aW9ucy1jYXJkIC5vcHA9JHt0aGlzLm9wcH0+PC9pbnRlZ3JhdGlvbnMtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gTGVnYWN5IGN1c3RvbSBVSSBjYW4gYmUgc2xvdyB0byByZWdpc3RlciwgZ2l2ZSB0aGVtIHRpbWUuXG4gICAgY29uc3QgY3VzdG9tVUkgPSAoKHdpbmRvdyBhcyBhbnkpLkNVU1RPTV9VSV9MSVNUIHx8IFtdKS5sZW5ndGg7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoKCh3aW5kb3cgYXMgYW55KS5DVVNUT01fVUlfTElTVCB8fCBbXSkubGVuZ3RoICE9PSBjdXN0b21VSS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3RvZ2dsZURlZmF1bHRQYWdlKCk6IHZvaWQge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgPT09IE9QVF9JTl9QQU5FTCkge1xuICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZS5kZWZhdWx0UGFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLmRlZmF1bHRQYWdlID0gT1BUX0lOX1BBTkVMO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgb3BTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWJvdXQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnNpb24ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGV2ZWxvcCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFib3V0IGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3lzdGVtLWhlYWx0aC1jYXJkLFxuICAgICAgICBpbnRlZ3JhdGlvbnMtY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkZXZlbG9wZXItdG9vbHMtaW5mb1wiOiBPcFBhbmVsRGV2SW5mbztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtaW5mb1wiLCBPcFBhbmVsRGV2SW5mbyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHtcbiAgaW50ZWdyYXRpb25Eb2NzVXJsLFxuICBpbnRlZ3JhdGlvbklzc3Vlc1VybCxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvaW50ZWdyYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJpbnRlZ3JhdGlvbnMtY2FyZFwiKVxuY2xhc3MgSW50ZWdyYXRpb25zQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcblxuICBwcml2YXRlIF9zb3J0ZWRJbnRlZ3JhdGlvbnMgPSBtZW1vaXplT25lKChjb21wb25lbnRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHJldHVybiBjb21wb25lbnRzLmZpbHRlcigoY29tcCkgPT4gIWNvbXAuaW5jbHVkZXMoXCIuXCIpKS5zb3J0KCk7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPG9wLWNhcmQgaGVhZGVyPVwiSW50ZWdyYXRpb25zXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICR7dGhpcy5fc29ydGVkSW50ZWdyYXRpb25zKHRoaXMub3BwIS5jb25maWcuY29tcG9uZW50cykubWFwKFxuICAgICAgICAgICAgICAoZG9tYWluKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2RvbWFpbn08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSR7aW50ZWdyYXRpb25Eb2NzVXJsKGRvbWFpbil9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0ke2ludGVncmF0aW9uSXNzdWVzVXJsKGRvbWFpbil9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgIElzc3Vlc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvb3AtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgdGQge1xuICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJpbnRlZ3JhdGlvbnMtY2FyZFwiOiBJbnRlZ3JhdGlvbnNDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5cbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIFN5c3RlbUhlYWx0aEluZm8sXG4gIGZldGNoU3lzdGVtSGVhbHRoSW5mbyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2hlYWx0aFwiO1xuXG5jb25zdCBzb3J0S2V5cyA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA9PT0gXCJvcGVucGVlcnBvd2VyXCIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGIgPT09IFwib3BlbnBlZXJwb3dlclwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChiIDwgYSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY2xhc3MgU3lzdGVtSGVhbHRoQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaW5mbz86IFN5c3RlbUhlYWx0aEluZm87XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgaWYgKCF0aGlzLm9wcCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbnM6IFRlbXBsYXRlUmVzdWx0W10gPSBbXTtcblxuICAgIGlmICghdGhpcy5faW5mbykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvbWFpbnMgPSBPYmplY3Qua2V5cyh0aGlzLl9pbmZvKS5zb3J0KHNvcnRLZXlzKTtcbiAgICAgIGZvciAoY29uc3QgZG9tYWluIG9mIGRvbWFpbnMpIHtcbiAgICAgICAgY29uc3Qga2V5czogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX2luZm9bZG9tYWluXSkuc29ydCgpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGh0bWxgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4ke2tleX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt0aGlzLl9pbmZvW2RvbWFpbl1ba2V5XX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tYWluICE9PSBcIm9wZW5wZWVycG93ZXJcIikge1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8aDM+JHt0aGlzLm9wcC5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApIHx8IGRvbWFpbn08L2gzPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbnMucHVzaChodG1sYFxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICR7a2V5c31cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxvcC1jYXJkIC5oZWFkZXI9JHt0aGlzLm9wcC5sb2NhbGl6ZShcImRvbWFpbi5zeXN0ZW1faGVhbHRoXCIpfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPiR7c2VjdGlvbnN9PC9kaXY+XG4gICAgICA8L29wLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hJbmZvKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaEluZm8oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5vcHAhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3lzdGVtX2hlYWx0aFwiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luZm8gPSBhd2FpdCBmZXRjaFN5c3RlbUhlYWx0aEluZm8odGhpcy5vcHAhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2luZm8gPSB7XG4gICAgICAgIHN5c3RlbV9oZWFsdGg6IHtcbiAgICAgICAgICBlcnJvcjogdGhpcy5vcHAubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmluZm8uc3lzdGVtX2hlYWx0aF9lcnJvclwiXG4gICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgfVxuXG4gICAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN5c3RlbS1oZWFsdGgtY2FyZFwiLCBTeXN0ZW1IZWFsdGhDYXJkKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDVUE7QUFBQTtBQUFBO0FBSUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQVVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7OztBQU9BOzs7QUFLQTs7O0FBR0E7Ozs7Ozs7QUFXQTs7OztBQU1BO0FBR0E7Ozs7QUFJQTs7Ozs7O0FBUUE7Ozs7QUFNQTs7O0FBR0E7Ozs7Ozs7Ozs7QUFVQTtBQVFBOztBQUdBO0FBR0E7O0FBR0E7QUFDQTs7QUFKQTs7QUFOQTs7OztBQXFCQTtBQUNBOztBQWhHQTtBQW1HQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVDQTs7O0FBMUtBO0FBQ0E7QUFrTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNQTtBQVVBO0FBQ0E7QUFDQTtBQUtBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQURBOzs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFHQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7QUFWQTs7OztBQUpBO0FBeUJBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTs7O0FBaERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTs7QUFFQTs7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBT0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7OztBQTNGQTtBQUNBO0FBNkZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=