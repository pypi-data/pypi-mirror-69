(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zha"],{

/***/ "./src/panels/config/zha/zha-config-dashboard-router.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/zha/zha-config-dashboard-router.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/opp-router-page */ "./src/layouts/opp-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
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




let ZHAConfigDashboardRouter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("zha-config-dashboard-router")], function (_initialize, _OppRouterPage) {
  class ZHAConfigDashboardRouter extends _OppRouterPage {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ZHAConfigDashboardRouter,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      key: "routerOptions",

      value() {
        return {
          defaultPage: "dashboard",
          cacheAll: true,
          preloadAll: true,
          showLoading: true,
          routes: {
            dashboard: {
              tag: "zha-config-dashboard",
              load: () => Promise.all(/*! import() | zha-config-dashboard */[__webpack_require__.e(2), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("zha-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./zha-config-dashboard */ "./src/panels/config/zha/zha-config-dashboard.ts"))
            },
            device: {
              tag: "zha-device-page",
              load: () => Promise.all(/*! import() | zha-devices-page */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-devices-page")]).then(__webpack_require__.bind(null, /*! ./zha-device-page */ "./src/panels/config/zha/zha-device-page.ts"))
            },
            add: {
              tag: "zha-add-devices-page",
              load: () => Promise.all(/*! import() | zha-add-devices-page */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~hui-button-card-editor~hui-dialog-edit-card~hui-dialog-suggest-card~hui-markdown-card-editor~b03e5084"), __webpack_require__.e("vendors~dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-add-devices-page")]).then(__webpack_require__.bind(null, /*! ./zha-add-devices-page */ "./src/panels/config/zha/zha-add-devices-page.ts"))
            },
            groups: {
              tag: "zha-groups-dashboard",
              load: () => Promise.all(/*! import() | zha-groups-dashboard */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~zha-groups-dashboard"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"), __webpack_require__.e("zha-groups-dashboard")]).then(__webpack_require__.bind(null, /*! ./zha-groups-dashboard */ "./src/panels/config/zha/zha-groups-dashboard.ts"))
            },
            group: {
              tag: "zha-group-page",
              load: () => Promise.all(/*! import() | zha-group-page */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~confirma~11a95c2c"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~op-sidebar~98f740c9"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~885eb9a7"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-config-automation~panel-con~9829483a"), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-devices-page~zha-group-page"), __webpack_require__.e("zha-add-group-page~zha-group-page"), __webpack_require__.e("zha-group-page")]).then(__webpack_require__.bind(null, /*! ./zha-group-page */ "./src/panels/config/zha/zha-group-page.ts"))
            },
            "group-add": {
              tag: "zha-add-group-page",
              load: () => Promise.all(/*! import() | zha-add-group-page */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~hui-dialog-suggest-card~panel-config-devices~panel-config-entities~panel-config-integrations~85c06897"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha~d4a7e683"), __webpack_require__.e("vendors~zha-add-group-page"), __webpack_require__.e("panel-config-areas~panel-config-automation~panel-config-cloud~panel-config-core~panel-config-customi~67e277f4"), __webpack_require__.e("dialog-config-flow~hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integ~abf0f1de"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entities~panel-config-integrations~zha-add-gro~4c885637"), __webpack_require__.e("panel-config-integrations~zha-add-group-page~zha-devices-page~zha-group-page~zha-groups-dashboard"), __webpack_require__.e("zha-add-group-page~zha-group-page"), __webpack_require__.e("zha-add-group-page")]).then(__webpack_require__.bind(null, /*! ./zha-add-group-page */ "./src/panels/config/zha/zha-add-group-page.ts"))
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "updatePageEl",
      value: function updatePageEl(el) {
        el.route = this.routeTail;
        el.opp = this.opp;
        el.isWide = this.isWide;
        el.narrow = this.narrow;

        if (this._currentPage === "group") {
          el.groupId = this.routeTail.path.substr(1);
        } else if (this._currentPage === "device") {
          el.ieee = this.routeTail.path.substr(1);
        }
      }
    }]
  };
}, _layouts_opp_router_page__WEBPACK_IMPORTED_MODULE_0__["OppRouterPage"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpoYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY29uZmlnLWRhc2hib2FyZC1yb3V0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BwUm91dGVyUGFnZSwgUm91dGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL29wcC1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6aGEtY29uZmlnLWRhc2hib2FyZC1yb3V0ZXJcIilcbmNsYXNzIFpIQUNvbmZpZ0Rhc2hib2FyZFJvdXRlciBleHRlbmRzIE9wcFJvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImRhc2hib2FyZFwiLFxuICAgIGNhY2hlQWxsOiB0cnVlLFxuICAgIHByZWxvYWRBbGw6IHRydWUsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgcm91dGVzOiB7XG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgdGFnOiBcInpoYS1jb25maWctZGFzaGJvYXJkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtY29uZmlnLWRhc2hib2FyZFwiICovIFwiLi96aGEtY29uZmlnLWRhc2hib2FyZFwiXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICBkZXZpY2U6IHtcbiAgICAgICAgdGFnOiBcInpoYS1kZXZpY2UtcGFnZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiemhhLWRldmljZXMtcGFnZVwiICovIFwiLi96aGEtZGV2aWNlLXBhZ2VcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgYWRkOiB7XG4gICAgICAgIHRhZzogXCJ6aGEtYWRkLWRldmljZXMtcGFnZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiemhhLWFkZC1kZXZpY2VzLXBhZ2VcIiAqLyBcIi4vemhhLWFkZC1kZXZpY2VzLXBhZ2VcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZ3JvdXBzOiB7XG4gICAgICAgIHRhZzogXCJ6aGEtZ3JvdXBzLWRhc2hib2FyZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiemhhLWdyb3Vwcy1kYXNoYm9hcmRcIiAqLyBcIi4vemhhLWdyb3Vwcy1kYXNoYm9hcmRcIlxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAgZ3JvdXA6IHtcbiAgICAgICAgdGFnOiBcInpoYS1ncm91cC1wYWdlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiemhhLWdyb3VwLXBhZ2VcIiAqLyBcIi4vemhhLWdyb3VwLXBhZ2VcIiksXG4gICAgICB9LFxuICAgICAgXCJncm91cC1hZGRcIjoge1xuICAgICAgICB0YWc6IFwiemhhLWFkZC1ncm91cC1wYWdlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJ6aGEtYWRkLWdyb3VwLXBhZ2VcIiAqLyBcIi4vemhhLWFkZC1ncm91cC1wYWdlXCJcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpOiB2b2lkIHtcbiAgICBlbC5yb3V0ZSA9IHRoaXMucm91dGVUYWlsO1xuICAgIGVsLm9wcCA9IHRoaXMub3BwO1xuICAgIGVsLmlzV2lkZSA9IHRoaXMuaXNXaWRlO1xuICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBlbC5ncm91cElkID0gdGhpcy5yb3V0ZVRhaWwucGF0aC5zdWJzdHIoMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50UGFnZSA9PT0gXCJkZXZpY2VcIikge1xuICAgICAgZWwuaWVlZSA9IHRoaXMucm91dGVUYWlsLnBhdGguc3Vic3RyKDEpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNvbmZpZy1kYXNoYm9hcmQtcm91dGVyXCI6IFpIQUNvbmZpZ0Rhc2hib2FyZFJvdXRlcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9aQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsZzJEQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0Esc3RDQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EseS9CQUVBO0FBSkE7QUFPQTtBQUNBO0FBQ0EsczVEQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0EsbXJDQUVBO0FBSkE7QUFsQ0E7QUFMQTs7Ozs7O0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaEVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=