(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-core-config~panel-config-core~zone-detail-dialog"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = cb => {
  requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
  return new Promise(resolve => {
    afterNextRender(resolve);
  });
};

/***/ }),

/***/ "./src/components/map/op-location-editor.ts":
/*!**************************************************!*\
  !*** ./src/components/map/op-location-editor.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/zone */ "./src/data/zone.ts");
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







let LocationEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-location-editor")], function (_initialize, _LitElement) {
  class LocationEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: LocationEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "location",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "radius",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "radiusColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      key: "fitZoom",

      value() {
        return 16;
      }

    }, {
      kind: "field",
      key: "_iconEl",
      value: void 0
    }, {
      kind: "field",
      key: "_ignoreFitToMap",
      value: void 0
    }, {
      kind: "field",
      key: "Leaflet",
      value: void 0
    }, {
      kind: "field",
      key: "_leafletMap",
      value: void 0
    }, {
      kind: "field",
      key: "_locationMarker",
      value: void 0
    }, {
      kind: "method",
      key: "fitMap",
      value: // tslint:disable-next-line
      function fitMap() {
        if (!this._leafletMap || !this.location) {
          return;
        }

        if (this._locationMarker.getBounds) {
          this._leafletMap.fitBounds(this._locationMarker.getBounds());
        } else {
          this._leafletMap.setView(this.location, this.fitZoom);
        }

        this._ignoreFitToMap = this.location;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div id="map"></div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(LocationEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._initMap();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(LocationEditor.prototype), "updated", this).call(this, changedProps); // Still loading.


        if (!this.Leaflet) {
          return;
        }

        if (changedProps.has("location")) {
          this._updateMarker();

          if (this.location && (!this._ignoreFitToMap || this._ignoreFitToMap[0] !== this.location[0] || this._ignoreFitToMap[1] !== this.location[1])) {
            this.fitMap();
          }
        }

        if (changedProps.has("radius")) {
          this._updateRadius();
        }

        if (changedProps.has("radiusColor")) {
          this._updateRadiusColor();
        }

        if (changedProps.has("icon")) {
          this._updateIcon();
        }
      }
    }, {
      kind: "get",
      key: "_mapEl",
      value: function _mapEl() {
        return this.shadowRoot.querySelector("div");
      }
    }, {
      kind: "method",
      key: "_initMap",
      value: async function _initMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__["setupLeafletMap"])(this._mapEl, false, Boolean(this.radius));

        this._leafletMap.addEventListener("click", // @ts-ignore
        ev => this._locationUpdated(ev.latlng));

        this._updateIcon();

        this._updateMarker();

        this.fitMap();

        this._leafletMap.invalidateSize();
      }
    }, {
      kind: "method",
      key: "_locationUpdated",
      value: function _locationUpdated(latlng) {
        let longitude = latlng.lng;

        if (Math.abs(longitude) > 180.0) {
          // Normalize longitude if map provides values beyond -180 to +180 degrees.
          longitude = (longitude % 360.0 + 540.0) % 360.0 - 180.0;
        }

        this.location = this._ignoreFitToMap = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "change", undefined, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_radiusUpdated",
      value: function _radiusUpdated() {
        this._ignoreFitToMap = this.location;
        this.radius = this._locationMarker.getRadius();
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "change", undefined, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateIcon",
      value: function _updateIcon() {
        if (!this.icon) {
          this._iconEl = undefined;
          return;
        } // create icon


        let iconHTML = "";
        const el = document.createElement("op-icon");
        el.setAttribute("icon", this.icon);
        iconHTML = el.outerHTML;
        this._iconEl = this.Leaflet.divIcon({
          html: iconHTML,
          iconSize: [24, 24],
          className: "light leaflet-edit-move"
        });

        this._setIcon();
      }
    }, {
      kind: "method",
      key: "_setIcon",
      value: function _setIcon() {
        if (!this._locationMarker || !this._iconEl) {
          return;
        }

        if (!this.radius) {
          this._locationMarker.setIcon(this._iconEl);

          return;
        } // @ts-ignore


        const moveMarker = this._locationMarker.editing._moveMarker;
        moveMarker.setIcon(this._iconEl);
      }
    }, {
      kind: "method",
      key: "_setupEdit",
      value: function _setupEdit() {
        // @ts-ignore
        this._locationMarker.editing.enable(); // @ts-ignore


        const moveMarker = this._locationMarker.editing._moveMarker; // @ts-ignore

        const resizeMarker = this._locationMarker.editing._resizeMarkers[0];

        this._setIcon();

        moveMarker.addEventListener("dragend", // @ts-ignore
        ev => this._locationUpdated(ev.target.getLatLng()));
        resizeMarker.addEventListener("dragend", // @ts-ignore
        ev => this._radiusUpdated(ev));
      }
    }, {
      kind: "method",
      key: "_updateMarker",
      value: async function _updateMarker() {
        if (!this.location) {
          if (this._locationMarker) {
            this._locationMarker.remove();

            this._locationMarker = undefined;
          }

          return;
        }

        if (this._locationMarker) {
          this._locationMarker.setLatLng(this.location);

          if (this.radius) {
            // @ts-ignore
            this._locationMarker.editing.disable();

            await Object(_common_util_render_status__WEBPACK_IMPORTED_MODULE_3__["nextRender"])();

            this._setupEdit();
          }

          return;
        }

        if (!this.radius) {
          this._locationMarker = this.Leaflet.marker(this.location, {
            draggable: true
          });

          this._setIcon();

          this._locationMarker.addEventListener("dragend", // @ts-ignore
          ev => this._locationUpdated(ev.target.getLatLng()));

          this._leafletMap.addLayer(this._locationMarker);
        } else {
          this._locationMarker = this.Leaflet.circle(this.location, {
            color: this.radiusColor || _data_zone__WEBPACK_IMPORTED_MODULE_4__["defaultRadiusColor"],
            radius: this.radius
          });

          this._leafletMap.addLayer(this._locationMarker);

          this._setupEdit();
        }
      }
    }, {
      kind: "method",
      key: "_updateRadius",
      value: function _updateRadius() {
        if (!this._locationMarker || !this.radius) {
          return;
        }

        this._locationMarker.setRadius(this.radius);
      }
    }, {
      kind: "method",
      key: "_updateRadiusColor",
      value: function _updateRadiusColor() {
        if (!this._locationMarker || !this.radius) {
          return;
        }

        this._locationMarker.setStyle({
          color: this.radiusColor
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
      .light {
        color: #000000;
      }
      .leaflet-edit-move {
        border-radius: 50%;
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jb3JlLWNvbmZpZ35wYW5lbC1jb25maWctY29yZX56b25lLWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvb3AtbG9jYXRpb24tZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZnRlck5leHRSZW5kZXIgPSAoY2I6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gc2V0VGltZW91dChjYiwgMCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5leHRSZW5kZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBhZnRlck5leHRSZW5kZXIocmVzb2x2ZSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7XG4gIE1hcmtlcixcbiAgTWFwLFxuICBMZWFmbGV0TW91c2VFdmVudCxcbiAgRHJhZ0VuZEV2ZW50LFxuICBMYXRMbmcsXG4gIENpcmNsZSxcbiAgRGl2SWNvbixcbn0gZnJvbSBcImxlYWZsZXRcIjtcbmltcG9ydCB7XG4gIHNldHVwTGVhZmxldE1hcCxcbiAgTGVhZmxldE1vZHVsZVR5cGUsXG59IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBuZXh0UmVuZGVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL3JlbmRlci1zdGF0dXNcIjtcbmltcG9ydCB7IGRlZmF1bHRSYWRpdXNDb2xvciB9IGZyb20gXCIuLi8uLi9kYXRhL3pvbmVcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1sb2NhdGlvbi1lZGl0b3JcIilcbmNsYXNzIExvY2F0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb2NhdGlvbj86IFtudW1iZXIsIG51bWJlcl07XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByYWRpdXM/OiBudW1iZXI7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByYWRpdXNDb2xvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGljb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG4gIHByaXZhdGUgX2ljb25FbD86IERpdkljb247XG4gIHByaXZhdGUgX2lnbm9yZUZpdFRvTWFwPzogW251bWJlciwgbnVtYmVyXTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBMZWFmbGV0PzogTGVhZmxldE1vZHVsZVR5cGU7XG4gIHByaXZhdGUgX2xlYWZsZXRNYXA/OiBNYXA7XG4gIHByaXZhdGUgX2xvY2F0aW9uTWFya2VyPzogTWFya2VyIHwgQ2lyY2xlO1xuXG4gIHB1YmxpYyBmaXRNYXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9sZWFmbGV0TWFwIHx8ICF0aGlzLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5fbG9jYXRpb25NYXJrZXIgYXMgQ2lyY2xlKS5nZXRCb3VuZHMpIHtcbiAgICAgIHRoaXMuX2xlYWZsZXRNYXAuZml0Qm91bmRzKCh0aGlzLl9sb2NhdGlvbk1hcmtlciBhcyBDaXJjbGUpLmdldEJvdW5kcygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGVhZmxldE1hcC5zZXRWaWV3KHRoaXMubG9jYXRpb24sIHRoaXMuZml0Wm9vbSk7XG4gICAgfVxuICAgIHRoaXMuX2lnbm9yZUZpdFRvTWFwID0gdGhpcy5sb2NhdGlvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9pbml0TWFwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gU3RpbGwgbG9hZGluZy5cbiAgICBpZiAoIXRoaXMuTGVhZmxldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibG9jYXRpb25cIikpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcmtlcigpO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmxvY2F0aW9uICYmXG4gICAgICAgICghdGhpcy5faWdub3JlRml0VG9NYXAgfHxcbiAgICAgICAgICB0aGlzLl9pZ25vcmVGaXRUb01hcFswXSAhPT0gdGhpcy5sb2NhdGlvblswXSB8fFxuICAgICAgICAgIHRoaXMuX2lnbm9yZUZpdFRvTWFwWzFdICE9PSB0aGlzLmxvY2F0aW9uWzFdKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZml0TWFwKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicmFkaXVzXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVSYWRpdXMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJyYWRpdXNDb2xvclwiKSkge1xuICAgICAgdGhpcy5fdXBkYXRlUmFkaXVzQ29sb3IoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJpY29uXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21hcEVsKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2luaXRNYXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgW3RoaXMuX2xlYWZsZXRNYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAoXG4gICAgICB0aGlzLl9tYXBFbCxcbiAgICAgIGZhbHNlLFxuICAgICAgQm9vbGVhbih0aGlzLnJhZGl1cylcbiAgICApO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChldjogTGVhZmxldE1vdXNlRXZlbnQpID0+IHRoaXMuX2xvY2F0aW9uVXBkYXRlZChldi5sYXRsbmcpXG4gICAgKTtcbiAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgdGhpcy5maXRNYXAoKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmludmFsaWRhdGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvblVwZGF0ZWQobGF0bG5nOiBMYXRMbmcpIHtcbiAgICBsZXQgbG9uZ2l0dWRlID0gbGF0bG5nLmxuZztcbiAgICBpZiAoTWF0aC5hYnMobG9uZ2l0dWRlKSA+IDE4MC4wKSB7XG4gICAgICAvLyBOb3JtYWxpemUgbG9uZ2l0dWRlIGlmIG1hcCBwcm92aWRlcyB2YWx1ZXMgYmV5b25kIC0xODAgdG8gKzE4MCBkZWdyZWVzLlxuICAgICAgbG9uZ2l0dWRlID0gKCgobG9uZ2l0dWRlICUgMzYwLjApICsgNTQwLjApICUgMzYwLjApIC0gMTgwLjA7XG4gICAgfVxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLl9pZ25vcmVGaXRUb01hcCA9IFtsYXRsbmcubGF0LCBsb25naXR1ZGVdO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiLCB1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yYWRpdXNVcGRhdGVkKCkge1xuICAgIHRoaXMuX2lnbm9yZUZpdFRvTWFwID0gdGhpcy5sb2NhdGlvbjtcbiAgICB0aGlzLnJhZGl1cyA9ICh0aGlzLl9sb2NhdGlvbk1hcmtlciBhcyBDaXJjbGUpLmdldFJhZGl1cygpO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiLCB1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJY29uKCkge1xuICAgIGlmICghdGhpcy5pY29uKSB7XG4gICAgICB0aGlzLl9pY29uRWwgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGljb25cbiAgICBsZXQgaWNvbkhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wLWljb25cIik7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwiaWNvblwiLCB0aGlzLmljb24pO1xuICAgIGljb25IVE1MID0gZWwub3V0ZXJIVE1MO1xuXG4gICAgdGhpcy5faWNvbkVsID0gdGhpcy5MZWFmbGV0IS5kaXZJY29uKHtcbiAgICAgIGh0bWw6IGljb25IVE1MLFxuICAgICAgaWNvblNpemU6IFsyNCwgMjRdLFxuICAgICAgY2xhc3NOYW1lOiBcImxpZ2h0IGxlYWZsZXQtZWRpdC1tb3ZlXCIsXG4gICAgfSk7XG4gICAgdGhpcy5fc2V0SWNvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SWNvbigpIHtcbiAgICBpZiAoIXRoaXMuX2xvY2F0aW9uTWFya2VyIHx8ICF0aGlzLl9pY29uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucmFkaXVzKSB7XG4gICAgICAodGhpcy5fbG9jYXRpb25NYXJrZXIgYXMgTWFya2VyKS5zZXRJY29uKHRoaXMuX2ljb25FbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IG1vdmVNYXJrZXIgPSB0aGlzLl9sb2NhdGlvbk1hcmtlci5lZGl0aW5nLl9tb3ZlTWFya2VyO1xuICAgIG1vdmVNYXJrZXIuc2V0SWNvbih0aGlzLl9pY29uRWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0dXBFZGl0KCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5lZGl0aW5nLmVuYWJsZSgpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBtb3ZlTWFya2VyID0gdGhpcy5fbG9jYXRpb25NYXJrZXIuZWRpdGluZy5fbW92ZU1hcmtlcjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcmVzaXplTWFya2VyID0gdGhpcy5fbG9jYXRpb25NYXJrZXIuZWRpdGluZy5fcmVzaXplTWFya2Vyc1swXTtcbiAgICB0aGlzLl9zZXRJY29uKCk7XG4gICAgbW92ZU1hcmtlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fbG9jYXRpb25VcGRhdGVkKGV2LnRhcmdldC5nZXRMYXRMbmcoKSlcbiAgICApO1xuICAgIHJlc2l6ZU1hcmtlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fcmFkaXVzVXBkYXRlZChldilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlTWFya2VyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5sb2NhdGlvbikge1xuICAgICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2VyKSB7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLnNldExhdExuZyh0aGlzLmxvY2F0aW9uKTtcbiAgICAgIGlmICh0aGlzLnJhZGl1cykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLmVkaXRpbmcuZGlzYWJsZSgpO1xuICAgICAgICBhd2FpdCBuZXh0UmVuZGVyKCk7XG4gICAgICAgIHRoaXMuX3NldHVwRWRpdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyID0gdGhpcy5MZWFmbGV0IS5tYXJrZXIodGhpcy5sb2NhdGlvbiwge1xuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3NldEljb24oKTtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiZHJhZ2VuZFwiLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIChldjogRHJhZ0VuZEV2ZW50KSA9PiB0aGlzLl9sb2NhdGlvblVwZGF0ZWQoZXYudGFyZ2V0LmdldExhdExuZygpKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2xlYWZsZXRNYXAhLmFkZExheWVyKHRoaXMuX2xvY2F0aW9uTWFya2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9jYXRpb25NYXJrZXIgPSB0aGlzLkxlYWZsZXQhLmNpcmNsZSh0aGlzLmxvY2F0aW9uLCB7XG4gICAgICAgIGNvbG9yOiB0aGlzLnJhZGl1c0NvbG9yIHx8IGRlZmF1bHRSYWRpdXNDb2xvcixcbiAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbGVhZmxldE1hcCEuYWRkTGF5ZXIodGhpcy5fbG9jYXRpb25NYXJrZXIpO1xuICAgICAgdGhpcy5fc2V0dXBFZGl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaXVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbG9jYXRpb25NYXJrZXIgfHwgIXRoaXMucmFkaXVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzLl9sb2NhdGlvbk1hcmtlciBhcyBDaXJjbGUpLnNldFJhZGl1cyh0aGlzLnJhZGl1cyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSYWRpdXNDb2xvcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2xvY2F0aW9uTWFya2VyIHx8ICF0aGlzLnJhZGl1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAodGhpcy5fbG9jYXRpb25NYXJrZXIgYXMgQ2lyY2xlKS5zZXRTdHlsZSh7IGNvbG9yOiB0aGlzLnJhZGl1c0NvbG9yIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cbiAgICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAubGlnaHQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cbiAgICAgIC5sZWFmbGV0LWVkaXQtbW92ZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubGVhZmxldC1lZGl0LXJlc2l6ZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBuZXN3LXJlc2l6ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWxvY2F0aW9uLWVkaXRvclwiOiBMb2NhdGlvbkVkaXRvcjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQW1CQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBOztBQUFBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQkE7OztBQTNPQTs7OztBIiwic291cmNlUm9vdCI6IiJ9