(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zone"],{

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
// Sets up a Leaflet map on the provided DOM element
const setupLeafletMap = async (mapElement, darkMode = false, draw = false) => {
  if (!mapElement.parentNode) {
    throw new Error("Cannot setup Leaflet map on disconnected element");
  } // tslint:disable-next-line


  const Leaflet = await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7));
  Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";

  if (draw) {
    await __webpack_require__.e(/*! import() | leaflet-draw */ "vendors~leaflet-draw").then(__webpack_require__.t.bind(null, /*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js", 7));
  }

  const map = Leaflet.map(mapElement);
  const style = document.createElement("link");
  style.setAttribute("href", "/static/images/leaflet/leaflet.css");
  style.setAttribute("rel", "stylesheet");
  mapElement.parentNode.appendChild(style);
  map.setView([52.3731339, 4.8903147], 13);
  createTileLayer(Leaflet, darkMode).addTo(map);
  return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
  return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20
  });
};

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = entityId => {
  return entityId.substr(entityId.indexOf(".") + 1);
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

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = stateObj => {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
};

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
const debounce = (func, wait, immediate = false) => {
  let timeout; // @ts-ignore

  return function (...args) {
    // tslint:disable:no-this-assignment
    // @ts-ignore
    const context = this;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "./src/components/map/op-locations-editor.ts":
/*!***************************************************!*\
  !*** ./src/components/map/op-locations-editor.ts ***!
  \***************************************************/
/*! exports provided: OpLocationsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpLocationsEditor", function() { return OpLocationsEditor; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/zone */ "./src/data/zone.ts");
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





let OpLocationsEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-locations-editor")], function (_initialize, _LitElement) {
  class OpLocationsEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpLocationsEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "locations",
      value: void 0
    }, {
      kind: "field",
      key: "fitZoom",

      value() {
        return 16;
      }

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
      key: "_locationMarkers",
      value: void 0
    }, {
      kind: "field",
      key: "_circles",

      value() {
        return {};
      }

    }, {
      kind: "method",
      key: "fitMap",
      value: // tslint:disable-next-line
      // tslint:disable-next-line
      function fitMap() {
        if (!this._leafletMap || !this._locationMarkers || !Object.keys(this._locationMarkers).length) {
          return;
        }

        const bounds = this.Leaflet.latLngBounds(Object.values(this._locationMarkers).map(item => item.getLatLng()));

        this._leafletMap.fitBounds(bounds.pad(0.5));
      }
    }, {
      kind: "method",
      key: "fitMarker",
      value: function fitMarker(id) {
        if (!this._leafletMap || !this._locationMarkers) {
          return;
        }

        const marker = this._locationMarkers[id];

        if (!marker) {
          return;
        }

        if (marker.getBounds) {
          this._leafletMap.fitBounds(marker.getBounds());

          marker.bringToFront();
        } else {
          const circle = this._circles[id];

          if (circle) {
            this._leafletMap.fitBounds(circle.getBounds());
          } else {
            this._leafletMap.setView(marker.getLatLng(), this.fitZoom);
          }
        }
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
        _get(_getPrototypeOf(OpLocationsEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._initMap();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpLocationsEditor.prototype), "updated", this).call(this, changedProps); // Still loading.


        if (!this.Leaflet) {
          return;
        }

        if (changedProps.has("locations")) {
          this._updateMarkers();
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
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__["setupLeafletMap"])(this._mapEl, false, true);

        this._updateMarkers();

        this.fitMap();

        this._leafletMap.invalidateSize();
      }
    }, {
      kind: "method",
      key: "_updateLocation",
      value: function _updateLocation(ev) {
        const marker = ev.target;
        const latlng = marker.getLatLng();
        let longitude = latlng.lng;

        if (Math.abs(longitude) > 180.0) {
          // Normalize longitude if map provides values beyond -180 to +180 degrees.
          longitude = (longitude % 360.0 + 540.0) % 360.0 - 180.0;
        }

        const location = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "location-updated", {
          id: marker.id,
          location
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateRadius",
      value: function _updateRadius(ev) {
        const marker = ev.target;
        const circle = this._locationMarkers[marker.id];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "radius-updated", {
          id: marker.id,
          radius: circle.getRadius()
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_markerClicked",
      value: function _markerClicked(ev) {
        const marker = ev.target;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "marker-clicked", {
          id: marker.id
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateMarkers",
      value: function _updateMarkers() {
        if (this._locationMarkers) {
          Object.values(this._locationMarkers).forEach(marker => {
            marker.remove();
          });
          this._locationMarkers = undefined;
          Object.values(this._circles).forEach(circle => circle.remove());
          this._circles = {};
        }

        if (!this.locations || !this.locations.length) {
          return;
        }

        this._locationMarkers = {};
        this.locations.forEach(location => {
          let icon;

          if (location.icon) {
            // create icon
            const el = document.createElement("div");
            el.className = "named-icon";

            if (location.name) {
              el.innerText = location.name;
            }

            const iconEl = document.createElement("op-icon");
            iconEl.setAttribute("icon", location.icon);
            el.prepend(iconEl);
            icon = this.Leaflet.divIcon({
              html: el.outerHTML,
              iconSize: [24, 24],
              className: "light"
            });
          }

          if (location.radius) {
            const circle = this.Leaflet.circle([location.latitude, location.longitude], {
              color: location.radius_color || _data_zone__WEBPACK_IMPORTED_MODULE_3__["defaultRadiusColor"],
              radius: location.radius
            });
            circle.addTo(this._leafletMap);

            if (location.radius_editable || location.location_editable) {
              // @ts-ignore
              circle.editing.enable(); // @ts-ignore

              const moveMarker = circle.editing._moveMarker; // @ts-ignore

              const resizeMarker = circle.editing._resizeMarkers[0];

              if (icon) {
                moveMarker.setIcon(icon);
              }

              resizeMarker.id = moveMarker.id = location.id;
              moveMarker.addEventListener("dragend", // @ts-ignore
              ev => this._updateLocation(ev)).addEventListener("click", // @ts-ignore
              ev => this._markerClicked(ev));

              if (location.radius_editable) {
                resizeMarker.addEventListener("dragend", // @ts-ignore
                ev => this._updateRadius(ev));
              } else {
                resizeMarker.remove();
              }

              this._locationMarkers[location.id] = circle;
            } else {
              this._circles[location.id] = circle;
            }
          }

          if (!location.radius || !location.radius_editable && !location.location_editable) {
            const options = {
              title: location.name
            };

            if (icon) {
              options.icon = icon;
            }

            const marker = this.Leaflet.marker([location.latitude, location.longitude], options).addEventListener("dragend", // @ts-ignore
            ev => this._updateLocation(ev)).addEventListener("click", // @ts-ignore
            ev => this._markerClicked(ev)).addTo(this._leafletMap);
            marker.id = location.id;
            this._locationMarkers[location.id] = marker;
          }
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
      .leaflet-marker-draggable {
        cursor: move !important;
      }
      .leaflet-edit-resize {
        border-radius: 50%;
        cursor: nesw-resize !important;
      }
      .named-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
const saveCoreConfig = (opp, values) => opp.callWS(Object.assign({
  type: "config/core/update"
}, values));
const detectCoreConfig = opp => opp.callWS({
  type: "config/core/detect"
});

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (opp, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = opp.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (opp, entityId, updates) => opp.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (opp, entityId) => opp.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/zone.ts":
/*!**************************!*\
  !*** ./src/data/zone.ts ***!
  \**************************/
/*! exports provided: defaultRadiusColor, homeRadiusColor, passiveRadiusColor, fetchZones, createZone, updateZone, deleteZone, showZoneEditor, getZoneEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRadiusColor", function() { return defaultRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRadiusColor", function() { return homeRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveRadiusColor", function() { return passiveRadiusColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchZones", function() { return fetchZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZone", function() { return createZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateZone", function() { return updateZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteZone", function() { return deleteZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneEditor", function() { return showZoneEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneEditorInitData", function() { return getZoneEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

const defaultRadiusColor = "#FF9800";
const homeRadiusColor = "#03a9f4";
const passiveRadiusColor = "#9b9b9b";
const fetchZones = opp => opp.callWS({
  type: "zone/list"
});
const createZone = (opp, values) => opp.callWS(Object.assign({
  type: "zone/create"
}, values));
const updateZone = (opp, zoneId, updates) => opp.callWS(Object.assign({
  type: "zone/update",
  zone_id: zoneId
}, updates));
const deleteZone = (opp, zoneId) => opp.callWS({
  type: "zone/delete",
  zone_id: zoneId
});
let inititialZoneEditorData;
const showZoneEditor = (el, data) => {
  inititialZoneEditorData = data;
  Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/zone/new");
};
const getZoneEditorInitData = () => {
  const data = inititialZoneEditorData;
  inititialZoneEditorData = undefined;
  return data;
};

/***/ }),

/***/ "./src/panels/config/zone/op-config-zone.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zone/op-config-zone.ts ***!
  \**************************************************/
/*! exports provided: OpConfigZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpConfigZone", function() { return OpConfigZone; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_map_op_locations_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/map/op-locations-editor */ "./src/components/map/op-locations-editor.ts");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_op_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/op-fab */ "./src/components/op-fab.ts");
/* harmony import */ var _layouts_opp_tabs_subpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/opp-tabs-subpage */ "./src/layouts/opp-tabs-subpage.ts");
/* harmony import */ var _layouts_opp_loading_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/opp-loading-screen */ "./src/layouts/opp-loading-screen.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _show_dialog_zone_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-dialog-zone-detail */ "./src/panels/config/zone/show-dialog-zone-detail.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/zone */ "./src/data/zone.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../mixins/subscribe-mixin */ "./src/mixins/subscribe-mixin.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _op_panel_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../op-panel-config */ "./src/panels/config/op-panel-config.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../dialogs/generic/show-dialog-box */ "./src/dialogs/generic/show-dialog-box.ts");
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










let OpConfigZone = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("op-config-zone")], function (_initialize, _SubscribeMixin) {
  class OpConfigZone extends _SubscribeMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OpConfigZone,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "opp",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "route",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_storageItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_stateItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_activeEntry",

      value() {
        return "";
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_canEditCore",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("op-locations-editor")],
      key: "_map",
      value: void 0
    }, {
      kind: "field",
      key: "_regEntities",

      value() {
        return [];
      }

    }, {
      kind: "field",
      key: "_getZones",

      value() {
        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_15__["default"])((storageItems, stateItems) => {
          const stateLocations = stateItems.map(state => {
            return {
              id: state.entity_id,
              icon: state.attributes.icon,
              name: state.attributes.friendly_name || state.entity_id,
              latitude: state.attributes.latitude,
              longitude: state.attributes.longitude,
              radius: state.attributes.radius,
              radius_color: state.entity_id === "zone.home" ? _data_zone__WEBPACK_IMPORTED_MODULE_13__["homeRadiusColor"] : state.attributes.passive ? _data_zone__WEBPACK_IMPORTED_MODULE_13__["passiveRadiusColor"] : _data_zone__WEBPACK_IMPORTED_MODULE_13__["defaultRadiusColor"],
              location_editable: state.entity_id === "zone.home" && this._canEditCore,
              radius_editable: false
            };
          });
          const storageLocations = storageItems.map(zone => {
            return Object.assign({}, zone, {
              radius_color: zone.passive ? _data_zone__WEBPACK_IMPORTED_MODULE_13__["passiveRadiusColor"] : _data_zone__WEBPACK_IMPORTED_MODULE_13__["defaultRadiusColor"],
              location_editable: true,
              radius_editable: true
            });
          });
          return storageLocations.concat(stateLocations);
        });
      }

    }, {
      kind: "method",
      key: "oppSubscribe",
      value: function oppSubscribe() {
        return [Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeEntityRegistry"])(this.opp.connection, entities => {
          this._regEntities = entities.map(registryEntry => registryEntry.entity_id);

          this._filterStates();
        })];
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.opp || this._storageItems === undefined || this._stateItems === undefined) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <opp-loading-screen></opp-loading-screen>
      `;
        }

        const opp = this.opp;
        const listBox = this._storageItems.length === 0 && this._stateItems.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <div class="empty">
              ${opp.localize("ui.panel.config.zone.no_zones_created_yet")}
              <br />
              <mwc-button @click=${this._createZone}>
                ${opp.localize("ui.panel.config.zone.create_zone")}</mwc-button
              >
            </div>
          ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <paper-listbox
              attr-for-selected="data-id"
              .selected=${this._activeEntry || ""}
            >
              ${this._storageItems.map(entry => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-item
                    data-id=${entry.id}
                    @click=${this._itemClicked}
                    .entry=${entry}
                  >
                    <op-icon .icon=${entry.icon} slot="item-icon"> </op-icon>
                    <paper-item-body>
                      ${entry.name}
                    </paper-item-body>
                    ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <paper-icon-button
                            icon="opp:pencil"
                            .entry=${entry}
                            @click=${this._openEditEntry}
                          ></paper-icon-button>
                        ` : ""}
                  </paper-icon-item>
                `;
        })}
              ${this._stateItems.map(state => {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-item
                    data-id=${state.entity_id}
                    @click=${this._stateItemClicked}
                  >
                    <op-icon .icon=${state.attributes.icon} slot="item-icon">
                    </op-icon>
                    <paper-item-body>
                      ${state.attributes.friendly_name || state.entity_id}
                    </paper-item-body>
                    <div style="display:inline-block">
                      <paper-icon-button
                        .entityId=${state.entity_id}
                        icon="opp:pencil"
                        @click=${this._openCoreConfig}
                        disabled=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_21__["ifDefined"])(state.entity_id === "zone.home" && this.narrow && this._canEditCore ? undefined : true)}
                      ></paper-icon-button>
                      <paper-tooltip position="left">
                        ${state.entity_id === "zone.home" ? this.opp.localize(`ui.panel.config.zone.${this.narrow ? "edit_home_zone_narrow" : "edit_home_zone"}`) : this.opp.localize("ui.panel.config.zone.configured_in_yaml")}
                      </paper-tooltip>
                    </div>
                  </paper-icon-item>
                `;
        })}
            </paper-listbox>
          `;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <opp-tabs-subpage
        .opp=${this.opp}
        .narrow=${this.narrow}
        .route=${this.route}
        back-path="/config"
        .tabs=${_op_panel_config__WEBPACK_IMPORTED_MODULE_18__["configSections"].persons}
      >
        ${this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <op-config-section .isWide=${this.isWide}>
                <span slot="introduction">
                  ${opp.localize("ui.panel.config.zone.introduction")}
                </span>
                <op-card>${listBox}</op-card>
              </op-config-section>
            ` : ""}
        ${!this.narrow ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <div class="flex">
                <op-locations-editor
                  .locations=${this._getZones(this._storageItems, this._stateItems)}
                  @location-updated=${this._locationUpdated}
                  @radius-updated=${this._radiusUpdated}
                  @marker-clicked=${this._markerClicked}
                ></op-locations-editor>
                <div class="overflow">
                  ${listBox}
                </div>
              </div>
            ` : ""}
      </opp-tabs-subpage>

      <op-fab
        ?is-wide=${this.isWide}
        ?narrow=${this.narrow}
        icon="opp:plus"
        title="${opp.localize("ui.panel.config.zone.add_zone")}"
        @click=${this._createZone}
      ></op-fab>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this$opp$user;

        _get(_getPrototypeOf(OpConfigZone.prototype), "firstUpdated", this).call(this, changedProps);

        this._canEditCore = Boolean((_this$opp$user = this.opp.user) === null || _this$opp$user === void 0 ? void 0 : _this$opp$user.is_admin) && ["storage", "default"].includes(this.opp.config.config_source);

        this._fetchData();

        if (this.route.path === "/new") {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_19__["navigate"])(this, "/config/zone", true);

          this._createZone();
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(OpConfigZone.prototype), "updated", this).call(this, changedProps);

        const oldOpp = changedProps.get("opp");

        if (oldOpp && this._stateItems) {
          this._getStates(oldOpp);
        }
      }
    }, {
      kind: "method",
      key: "_fetchData",
      value: async function _fetchData() {
        this._storageItems = (await Object(_data_zone__WEBPACK_IMPORTED_MODULE_13__["fetchZones"])(this.opp)).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(ent1.name, ent2.name));

        this._getStates();
      }
    }, {
      kind: "method",
      key: "_getStates",
      value: function _getStates(oldOpp) {
        let changed = false;
        const tempStates = Object.values(this.opp.states).filter(entity => {
          if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_14__["computeStateDomain"])(entity) !== "zone") {
            return false;
          }

          if ((oldOpp === null || oldOpp === void 0 ? void 0 : oldOpp.states[entity.entity_id]) !== entity) {
            changed = true;
          }

          if (this._regEntities.includes(entity.entity_id)) {
            return false;
          }

          return true;
        });

        if (changed) {
          this._stateItems = tempStates;
        }
      }
    }, {
      kind: "method",
      key: "_filterStates",
      value: function _filterStates() {
        if (!this._stateItems) {
          return;
        }

        const tempStates = this._stateItems.filter(entity => !this._regEntities.includes(entity.entity_id));

        if (tempStates.length !== this._stateItems.length) {
          this._stateItems = tempStates;
        }
      }
    }, {
      kind: "method",
      key: "_locationUpdated",
      value: async function _locationUpdated(ev) {
        this._activeEntry = ev.detail.id;

        if (ev.detail.id === "zone.home" && this._canEditCore) {
          await Object(_data_core__WEBPACK_IMPORTED_MODULE_20__["saveCoreConfig"])(this.opp, {
            latitude: ev.detail.location[0],
            longitude: ev.detail.location[1]
          });
          return;
        }

        const entry = this._storageItems.find(item => item.id === ev.detail.id);

        if (!entry) {
          return;
        }

        this._updateEntry(entry, {
          latitude: ev.detail.location[0],
          longitude: ev.detail.location[1]
        });
      }
    }, {
      kind: "method",
      key: "_radiusUpdated",
      value: function _radiusUpdated(ev) {
        this._activeEntry = ev.detail.id;

        const entry = this._storageItems.find(item => item.id === ev.detail.id);

        if (!entry) {
          return;
        }

        this._updateEntry(entry, {
          radius: ev.detail.radius
        });
      }
    }, {
      kind: "method",
      key: "_markerClicked",
      value: function _markerClicked(ev) {
        this._activeEntry = ev.detail.id;
      }
    }, {
      kind: "method",
      key: "_createZone",
      value: function _createZone() {
        this._openDialog();
      }
    }, {
      kind: "method",
      key: "_itemClicked",
      value: function _itemClicked(ev) {
        if (this.narrow) {
          this._openEditEntry(ev);

          return;
        }

        const entry = ev.currentTarget.entry;

        this._zoomZone(entry.id);
      }
    }, {
      kind: "method",
      key: "_stateItemClicked",
      value: function _stateItemClicked(ev) {
        const entityId = ev.currentTarget.getAttribute("data-id");

        this._zoomZone(entityId);
      }
    }, {
      kind: "method",
      key: "_zoomZone",
      value: function _zoomZone(id) {
        var _this$_map;

        (_this$_map = this._map) === null || _this$_map === void 0 ? void 0 : _this$_map.fitMarker(id);
      }
    }, {
      kind: "method",
      key: "_openEditEntry",
      value: function _openEditEntry(ev) {
        const entry = ev.currentTarget.entry;

        this._openDialog(entry);
      }
    }, {
      kind: "method",
      key: "_openCoreConfig",
      value: async function _openCoreConfig(ev) {
        const entityId = ev.currentTarget.entityId;

        if (entityId !== "zone.home" || !this.narrow || !this._canEditCore) {
          return;
        }

        if (!(await Object(_dialogs_generic_show_dialog_box__WEBPACK_IMPORTED_MODULE_22__["showConfirmationDialog"])(this, {
          title: this.opp.localize("ui.panel.config.zone.go_to_core_config"),
          text: this.opp.localize("ui.panel.config.zone.home_zone_core_config"),
          confirmText: this.opp.localize("ui.common.yes"),
          dismissText: this.opp.localize("ui.common.no")
        }))) {
          return;
        }

        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_19__["navigate"])(this, "/config/core");
      }
    }, {
      kind: "method",
      key: "_createEntry",
      value: async function _createEntry(values) {
        var _this$_map2;

        const created = await Object(_data_zone__WEBPACK_IMPORTED_MODULE_13__["createZone"])(this.opp, values);
        this._storageItems = this._storageItems.concat(created).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_10__["compare"])(ent1.name, ent2.name));

        if (this.narrow) {
          return;
        }

        await this.updateComplete;
        this._activeEntry = created.id;
        (_this$_map2 = this._map) === null || _this$_map2 === void 0 ? void 0 : _this$_map2.fitMarker(created.id);
      }
    }, {
      kind: "method",
      key: "_updateEntry",
      value: async function _updateEntry(entry, values, fitMap = false) {
        var _this$_map3;

        const updated = await Object(_data_zone__WEBPACK_IMPORTED_MODULE_13__["updateZone"])(this.opp, entry.id, values);
        this._storageItems = this._storageItems.map(ent => ent === entry ? updated : ent);

        if (this.narrow || !fitMap) {
          return;
        }

        await this.updateComplete;
        this._activeEntry = entry.id;
        (_this$_map3 = this._map) === null || _this$_map3 === void 0 ? void 0 : _this$_map3.fitMarker(entry.id);
      }
    }, {
      kind: "method",
      key: "_removeEntry",
      value: async function _removeEntry(entry) {
        if (!confirm(`${this.opp.localize("ui.panel.config.zone.confirm_delete")}

${this.opp.localize("ui.panel.config.zone.confirm_delete2")}`)) {
          return false;
        }

        try {
          await Object(_data_zone__WEBPACK_IMPORTED_MODULE_13__["deleteZone"])(this.opp, entry.id);
          this._storageItems = this._storageItems.filter(ent => ent !== entry);

          if (!this.narrow) {
            var _this$_map4;

            (_this$_map4 = this._map) === null || _this$_map4 === void 0 ? void 0 : _this$_map4.fitMap();
          }

          return true;
        } catch (err) {
          return false;
        }
      }
    }, {
      kind: "method",
      key: "_openDialog",
      value: async function _openDialog(entry) {
        Object(_show_dialog_zone_detail__WEBPACK_IMPORTED_MODULE_12__["showZoneDetailDialog"])(this, {
          entry,
          createEntry: values => this._createEntry(values),
          updateEntry: entry ? values => this._updateEntry(entry, values, true) : undefined,
          removeEntry: entry ? () => this._removeEntry(entry) : undefined
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      opp-loading-screen {
        --app-header-background-color: var(--sidebar-background-color);
        --app-header-text-color: var(--sidebar-text-color);
      }
      a {
        color: var(--primary-color);
      }
      op-card {
        max-width: 600px;
        margin: 16px auto;
        overflow: hidden;
      }
      op-icon,
      paper-icon-button:not([disabled]) {
        color: var(--secondary-text-color);
      }
      .empty {
        text-align: center;
        padding: 8px;
      }
      .flex {
        display: flex;
        height: 100%;
      }
      .overflow {
        height: 100%;
        overflow: auto;
      }
      op-locations-editor {
        flex-grow: 1;
        height: 100%;
      }
      .flex paper-listbox,
      .flex .empty {
        border-left: 1px solid var(--divider-color);
        width: 250px;
        min-height: 100%;
        box-sizing: border-box;
      }
      paper-icon-item {
        padding-top: 4px;
        padding-bottom: 4px;
      }
      .overflow paper-icon-item:last-child {
        margin-bottom: 80px;
      }
      paper-icon-item.iron-selected:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: "";
        background-color: var(--sidebar-selected-icon-color);
        opacity: 0.12;
        transition: opacity 15ms linear;
        will-change: opacity;
      }
      op-card {
        margin-bottom: 100px;
      }
      op-card paper-item {
        cursor: pointer;
      }
      op-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }
      op-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }
      op-fab[narrow] {
        bottom: 84px;
      }
    `;
      }
    }]
  };
}, Object(_mixins_subscribe_mixin__WEBPACK_IMPORTED_MODULE_16__["SubscribeMixin"])(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]));

/***/ }),

/***/ "./src/panels/config/zone/show-dialog-zone-detail.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/zone/show-dialog-zone-detail.ts ***!
  \***********************************************************/
/*! exports provided: loadZoneDetailDialog, showZoneDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadZoneDetailDialog", function() { return loadZoneDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showZoneDetailDialog", function() { return showZoneDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadZoneDetailDialog = () => Promise.all(/*! import() | zone-detail-dialog */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-ca~58ebb325"), __webpack_require__.e("vendors~device-automation-dialog~person-detail-dialog~zone-detail-dialog"), __webpack_require__.e("vendors~zone-detail-dialog"), __webpack_require__.e("config-entry-system-options~confirmation~entity-registry-detail-dialog~hui-dialog-suggest-card~more-~4cb2b160"), __webpack_require__.e("onboarding-core-config~panel-config-core~zone-detail-dialog"), __webpack_require__.e("device-automation-dialog~person-detail-dialog~zone-detail-dialog"), __webpack_require__.e("zone-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-zone-detail */ "./src/panels/config/zone/dialog-zone-detail.ts"));
const showZoneDetailDialog = (element, systemLogDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-zone-detail",
    dialogImport: loadZoneDetailDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpvbmUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFwL29wLWxvY2F0aW9ucy1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvem9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96b25lL29wLWNvbmZpZy16b25lLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3pvbmUvc2hvdy1kaWFsb2ctem9uZS1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSBcImxlYWZsZXRcIjtcblxuLy8gU2V0cyB1cCBhIExlYWZsZXQgbWFwIG9uIHRoZSBwcm92aWRlZCBET00gZWxlbWVudFxuZXhwb3J0IHR5cGUgTGVhZmxldE1vZHVsZVR5cGUgPSB0eXBlb2YgaW1wb3J0KFwibGVhZmxldFwiKTtcbmV4cG9ydCB0eXBlIExlYWZsZXREcmF3TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0LWRyYXdcIik7XG5cbmV4cG9ydCBjb25zdCBzZXR1cExlYWZsZXRNYXAgPSBhc3luYyAoXG4gIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkYXJrTW9kZSA9IGZhbHNlLFxuICBkcmF3ID0gZmFsc2Vcbik6IFByb21pc2U8W01hcCwgTGVhZmxldE1vZHVsZVR5cGVdPiA9PiB7XG4gIGlmICghbWFwRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldHVwIExlYWZsZXQgbWFwIG9uIGRpc2Nvbm5lY3RlZCBlbGVtZW50XCIpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBMZWFmbGV0ID0gKGF3YWl0IGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlYWZsZXRcIiAqLyBcImxlYWZsZXRcIlxuICApKSBhcyBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgTGVhZmxldC5JY29uLkRlZmF1bHQuaW1hZ2VQYXRoID0gXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2ltYWdlcy9cIjtcblxuICBpZiAoZHJhdykge1xuICAgIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlYWZsZXQtZHJhd1wiICovIFwibGVhZmxldC1kcmF3XCIpO1xuICB9XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBjcmVhdGVUaWxlTGF5ZXIoTGVhZmxldCwgZGFya01vZGUpLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbGVMYXllciA9IChcbiAgbGVhZmxldDogTGVhZmxldE1vZHVsZVR5cGUsXG4gIGRhcmtNb2RlOiBib29sZWFuXG4pID0+IHtcbiAgcmV0dXJuIGxlYWZsZXQudGlsZUxheWVyKFxuICAgIGBodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vJHtcbiAgICAgIGRhcmtNb2RlID8gXCJkYXJrX2FsbFwiIDogXCJsaWdodF9hbGxcIlxuICAgIH0ve3p9L3t4fS97eX0ke2xlYWZsZXQuQnJvd3Nlci5yZXRpbmEgPyBcIkAyeC5wbmdcIiA6IFwiLnBuZ1wifWAsXG4gICAge1xuICAgICAgYXR0cmlidXRpb246XG4gICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vY2FydG8uY29tL2F0dHJpYnV0aW9uc1wiPkNBUlRPPC9hPicsXG4gICAgICBzdWJkb21haW5zOiBcImFiY2RcIixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMCxcbiAgICB9XG4gICk7XG59O1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogT3BwRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgT3BwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBPcHBFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBNYXJrZXIsXG4gIE1hcCxcbiAgRHJhZ0VuZEV2ZW50LFxuICBMYXRMbmcsXG4gIENpcmNsZSxcbiAgTWFya2VyT3B0aW9ucyxcbiAgRGl2SWNvbixcbn0gZnJvbSBcImxlYWZsZXRcIjtcbmltcG9ydCB7XG4gIHNldHVwTGVhZmxldE1hcCxcbiAgTGVhZmxldE1vZHVsZVR5cGUsXG59IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0UmFkaXVzQ29sb3IgfSBmcm9tIFwiLi4vLi4vZGF0YS96b25lXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIE9QUERvbUV2ZW50cyB7XG4gICAgXCJsb2NhdGlvbi11cGRhdGVkXCI6IHsgaWQ6IHN0cmluZzsgbG9jYXRpb246IFtudW1iZXIsIG51bWJlcl0gfTtcbiAgICBcInJhZGl1cy11cGRhdGVkXCI6IHsgaWQ6IHN0cmluZzsgcmFkaXVzOiBudW1iZXIgfTtcbiAgICBcIm1hcmtlci1jbGlja2VkXCI6IHsgaWQ6IHN0cmluZyB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTG9jYXRpb24ge1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICByYWRpdXNfY29sb3I/OiBzdHJpbmc7XG4gIGxvY2F0aW9uX2VkaXRhYmxlPzogYm9vbGVhbjtcbiAgcmFkaXVzX2VkaXRhYmxlPzogYm9vbGVhbjtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJvcC1sb2NhdGlvbnMtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgT3BMb2NhdGlvbnNFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxvY2F0aW9ucz86IE1hcmtlckxvY2F0aW9uW107XG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHByaXZhdGUgTGVhZmxldD86IExlYWZsZXRNb2R1bGVUeXBlO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBfbGVhZmxldE1hcD86IE1hcDtcbiAgcHJpdmF0ZSBfbG9jYXRpb25NYXJrZXJzPzogeyBba2V5OiBzdHJpbmddOiBNYXJrZXIgfCBDaXJjbGUgfTtcbiAgcHJpdmF0ZSBfY2lyY2xlczogeyBba2V5OiBzdHJpbmddOiBDaXJjbGUgfSA9IHt9O1xuXG4gIHB1YmxpYyBmaXRNYXAoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX2xlYWZsZXRNYXAgfHxcbiAgICAgICF0aGlzLl9sb2NhdGlvbk1hcmtlcnMgfHxcbiAgICAgICFPYmplY3Qua2V5cyh0aGlzLl9sb2NhdGlvbk1hcmtlcnMpLmxlbmd0aFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLkxlYWZsZXQhLmxhdExuZ0JvdW5kcyhcbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5fbG9jYXRpb25NYXJrZXJzKS5tYXAoKGl0ZW0pID0+IGl0ZW0uZ2V0TGF0TG5nKCkpXG4gICAgKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmZpdEJvdW5kcyhib3VuZHMucGFkKDAuNSkpO1xuICB9XG5cbiAgcHVibGljIGZpdE1hcmtlcihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9sZWFmbGV0TWFwIHx8ICF0aGlzLl9sb2NhdGlvbk1hcmtlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFya2VyID0gdGhpcy5fbG9jYXRpb25NYXJrZXJzW2lkXTtcbiAgICBpZiAoIW1hcmtlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKG1hcmtlciBhcyBDaXJjbGUpLmdldEJvdW5kcykge1xuICAgICAgdGhpcy5fbGVhZmxldE1hcC5maXRCb3VuZHMoKG1hcmtlciBhcyBDaXJjbGUpLmdldEJvdW5kcygpKTtcbiAgICAgIChtYXJrZXIgYXMgQ2lyY2xlKS5icmluZ1RvRnJvbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2lyY2xlID0gdGhpcy5fY2lyY2xlc1tpZF07XG4gICAgICBpZiAoY2lyY2xlKSB7XG4gICAgICAgIHRoaXMuX2xlYWZsZXRNYXAuZml0Qm91bmRzKGNpcmNsZS5nZXRCb3VuZHMoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sZWFmbGV0TWFwLnNldFZpZXcobWFya2VyLmdldExhdExuZygpLCB0aGlzLmZpdFpvb20pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9pbml0TWFwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gU3RpbGwgbG9hZGluZy5cbiAgICBpZiAoIXRoaXMuTGVhZmxldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibG9jYXRpb25zXCIpKSB7XG4gICAgICB0aGlzLl91cGRhdGVNYXJrZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21hcEVsKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2luaXRNYXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgW3RoaXMuX2xlYWZsZXRNYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAoXG4gICAgICB0aGlzLl9tYXBFbCxcbiAgICAgIGZhbHNlLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VycygpO1xuICAgIHRoaXMuZml0TWFwKCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTG9jYXRpb24oZXY6IERyYWdFbmRFdmVudCkge1xuICAgIGNvbnN0IG1hcmtlciA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBsYXRsbmc6IExhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICBsZXQgbG9uZ2l0dWRlOiBudW1iZXIgPSBsYXRsbmcubG5nO1xuICAgIGlmIChNYXRoLmFicyhsb25naXR1ZGUpID4gMTgwLjApIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSBsb25naXR1ZGUgaWYgbWFwIHByb3ZpZGVzIHZhbHVlcyBiZXlvbmQgLTE4MCB0byArMTgwIGRlZ3JlZXMuXG4gICAgICBsb25naXR1ZGUgPSAoKChsb25naXR1ZGUgJSAzNjAuMCkgKyA1NDAuMCkgJSAzNjAuMCkgLSAxODAuMDtcbiAgICB9XG4gICAgY29uc3QgbG9jYXRpb246IFtudW1iZXIsIG51bWJlcl0gPSBbbGF0bG5nLmxhdCwgbG9uZ2l0dWRlXTtcbiAgICBmaXJlRXZlbnQoXG4gICAgICB0aGlzLFxuICAgICAgXCJsb2NhdGlvbi11cGRhdGVkXCIsXG4gICAgICB7IGlkOiBtYXJrZXIuaWQsIGxvY2F0aW9uIH0sXG4gICAgICB7IGJ1YmJsZXM6IGZhbHNlIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaXVzKGV2OiBEcmFnRW5kRXZlbnQpIHtcbiAgICBjb25zdCBtYXJrZXIgPSBldi50YXJnZXQ7XG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5fbG9jYXRpb25NYXJrZXJzIVttYXJrZXIuaWRdIGFzIENpcmNsZTtcbiAgICBmaXJlRXZlbnQoXG4gICAgICB0aGlzLFxuICAgICAgXCJyYWRpdXMtdXBkYXRlZFwiLFxuICAgICAgeyBpZDogbWFya2VyLmlkLCByYWRpdXM6IGNpcmNsZS5nZXRSYWRpdXMoKSB9LFxuICAgICAgeyBidWJibGVzOiBmYWxzZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtlckNsaWNrZWQoZXY6IERyYWdFbmRFdmVudCkge1xuICAgIGNvbnN0IG1hcmtlciA9IGV2LnRhcmdldDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJtYXJrZXItY2xpY2tlZFwiLCB7IGlkOiBtYXJrZXIuaWQgfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcmtlcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2Vycykge1xuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9sb2NhdGlvbk1hcmtlcnMpLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyA9IHVuZGVmaW5lZDtcblxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLl9jaXJjbGVzKS5mb3JFYWNoKChjaXJjbGUpID0+IGNpcmNsZS5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9jaXJjbGVzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvY2F0aW9ucyB8fCAhdGhpcy5sb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYXRpb25NYXJrZXJzID0ge307XG5cbiAgICB0aGlzLmxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbjogTWFya2VyTG9jYXRpb24pID0+IHtcbiAgICAgIGxldCBpY29uOiBEaXZJY29uIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKGxvY2F0aW9uLmljb24pIHtcbiAgICAgICAgLy8gY3JlYXRlIGljb25cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBcIm5hbWVkLWljb25cIjtcbiAgICAgICAgaWYgKGxvY2F0aW9uLm5hbWUpIHtcbiAgICAgICAgICBlbC5pbm5lclRleHQgPSBsb2NhdGlvbi5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcC1pY29uXCIpO1xuICAgICAgICBpY29uRWwuc2V0QXR0cmlidXRlKFwiaWNvblwiLCBsb2NhdGlvbi5pY29uKTtcbiAgICAgICAgZWwucHJlcGVuZChpY29uRWwpO1xuXG4gICAgICAgIGljb24gPSB0aGlzLkxlYWZsZXQhLmRpdkljb24oe1xuICAgICAgICAgIGh0bWw6IGVsLm91dGVySFRNTCxcbiAgICAgICAgICBpY29uU2l6ZTogWzI0LCAyNF0sXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImxpZ2h0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGxvY2F0aW9uLnJhZGl1cykge1xuICAgICAgICBjb25zdCBjaXJjbGUgPSB0aGlzLkxlYWZsZXQhLmNpcmNsZShcbiAgICAgICAgICBbbG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IGxvY2F0aW9uLnJhZGl1c19jb2xvciB8fCBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gICAgICAgICAgICByYWRpdXM6IGxvY2F0aW9uLnJhZGl1cyxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGNpcmNsZS5hZGRUbyh0aGlzLl9sZWFmbGV0TWFwISk7XG4gICAgICAgIGlmIChsb2NhdGlvbi5yYWRpdXNfZWRpdGFibGUgfHwgbG9jYXRpb24ubG9jYXRpb25fZWRpdGFibGUpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2lyY2xlLmVkaXRpbmcuZW5hYmxlKCk7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNvbnN0IG1vdmVNYXJrZXIgPSBjaXJjbGUuZWRpdGluZy5fbW92ZU1hcmtlcjtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29uc3QgcmVzaXplTWFya2VyID0gY2lyY2xlLmVkaXRpbmcuX3Jlc2l6ZU1hcmtlcnNbMF07XG4gICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIG1vdmVNYXJrZXIuc2V0SWNvbihpY29uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzaXplTWFya2VyLmlkID0gbW92ZU1hcmtlci5pZCA9IGxvY2F0aW9uLmlkO1xuICAgICAgICAgIG1vdmVNYXJrZXJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBcImRyYWdlbmRcIixcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIChldjogTW91c2VFdmVudCkgPT4gdGhpcy5fbWFya2VyQ2xpY2tlZChldilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uLnJhZGl1c19lZGl0YWJsZSkge1xuICAgICAgICAgICAgcmVzaXplTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIFwiZHJhZ2VuZFwiLFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIChldjogRHJhZ0VuZEV2ZW50KSA9PiB0aGlzLl91cGRhdGVSYWRpdXMoZXYpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNpemVNYXJrZXIucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyFbbG9jYXRpb24uaWRdID0gY2lyY2xlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NpcmNsZXNbbG9jYXRpb24uaWRdID0gY2lyY2xlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFsb2NhdGlvbi5yYWRpdXMgfHxcbiAgICAgICAgKCFsb2NhdGlvbi5yYWRpdXNfZWRpdGFibGUgJiYgIWxvY2F0aW9uLmxvY2F0aW9uX2VkaXRhYmxlKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1hcmtlck9wdGlvbnMgPSB7XG4gICAgICAgICAgdGl0bGU6IGxvY2F0aW9uLm5hbWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICBvcHRpb25zLmljb24gPSBpY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5MZWFmbGV0IS5tYXJrZXIoXG4gICAgICAgICAgW2xvY2F0aW9uLmxhdGl0dWRlLCBsb2NhdGlvbi5sb25naXR1ZGVdLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLl9tYXJrZXJDbGlja2VkKGV2KVxuICAgICAgICAgIClcbiAgICAgICAgICAuYWRkVG8odGhpcy5fbGVhZmxldE1hcCk7XG4gICAgICAgIG1hcmtlci5pZCA9IGxvY2F0aW9uLmlkO1xuXG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VycyFbbG9jYXRpb24uaWRdID0gbWFya2VyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cbiAgICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAubGlnaHQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cbiAgICAgIC5sZWFmbGV0LW1hcmtlci1kcmFnZ2FibGUge1xuICAgICAgICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5sZWFmbGV0LWVkaXQtcmVzaXplIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjdXJzb3I6IG5lc3ctcmVzaXplICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubmFtZWQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib3AtbG9jYXRpb25zLWVkaXRvclwiOiBPcExvY2F0aW9uc0VkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgT3BwQ29uZmlnIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdVcGRhdGVWYWx1ZXMge1xuICBsb2NhdGlvbl9uYW1lOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBlbGV2YXRpb246IG51bWJlcjtcbiAgdW5pdF9zeXN0ZW06IFwibWV0cmljXCIgfCBcImltcGVyaWFsXCI7XG4gIHRpbWVfem9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZUNvcmVDb25maWcgPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgdmFsdWVzOiBQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxPcHBDb25maWc+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL3VwZGF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZXRlY3RDb3JlQ29uZmlnID0gKG9wcDogT3BlblBlZXJQb3dlcikgPT5cbiAgb3BwLmNhbGxXUzxQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz4+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL2RldGVjdFwiLFxuICB9KTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWRfYnk/OiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBvcHAuc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gIHJldHVybiBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbik6IFByb21pc2U8RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgb3BwLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEVudGl0eVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRW50aXR5UmVnaXN0cnkoY29ubikudGhlbigoZW50aXRpZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZW50aXRpZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImVudGl0eV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxFbnRpdHlSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2VudGl0eVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hFbnRpdHlSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgT3BlblBlZXJQb3dlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UmFkaXVzQ29sb3IgPSBcIiNGRjk4MDBcIjtcbmV4cG9ydCBjb25zdCBob21lUmFkaXVzQ29sb3I6IHN0cmluZyA9IFwiIzAzYTlmNFwiO1xuZXhwb3J0IGNvbnN0IHBhc3NpdmVSYWRpdXNDb2xvcjogc3RyaW5nID0gXCIjOWI5YjliXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIHBhc3NpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9uZU11dGFibGVQYXJhbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3NpdmU6IGJvb2xlYW47XG4gIHJhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hab25lcyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpID0+XG4gIG9wcC5jYWxsV1M8Wm9uZVtdPih7IHR5cGU6IFwiem9uZS9saXN0XCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVab25lID0gKG9wcDogT3BlblBlZXJQb3dlciwgdmFsdWVzOiBab25lTXV0YWJsZVBhcmFtcykgPT5cbiAgb3BwLmNhbGxXUzxab25lPih7XG4gICAgdHlwZTogXCJ6b25lL2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVab25lID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIHpvbmVJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPFpvbmVNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBvcHAuY2FsbFdTPFpvbmU+KHtcbiAgICB0eXBlOiBcInpvbmUvdXBkYXRlXCIsXG4gICAgem9uZV9pZDogem9uZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlWm9uZSA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIHpvbmVJZDogc3RyaW5nKSA9PlxuICBvcHAuY2FsbFdTKHtcbiAgICB0eXBlOiBcInpvbmUvZGVsZXRlXCIsXG4gICAgem9uZV9pZDogem9uZUlkLFxuICB9KTtcblxubGV0IGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhOiBQYXJ0aWFsPFpvbmVNdXRhYmxlUGFyYW1zPiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IHNob3dab25lRWRpdG9yID0gKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGRhdGE/OiBQYXJ0aWFsPFpvbmVNdXRhYmxlUGFyYW1zPlxuKSA9PiB7XG4gIGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhID0gZGF0YTtcbiAgbmF2aWdhdGUoZWwsIFwiL2NvbmZpZy96b25lL25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRab25lRWRpdG9ySW5pdERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpbml0aXRpYWxab25lRWRpdG9yRGF0YTtcbiAgaW5pdGl0aWFsWm9uZUVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHF1ZXJ5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbWFwL29wLWxvY2F0aW9ucy1lZGl0b3JcIjtcblxuaW1wb3J0IHsgT3BlblBlZXJQb3dlciwgUm91dGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvb3AtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcC1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvb3BwLXRhYnMtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9vcHAtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgXCIuLi9vcC1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IHsgc2hvd1pvbmVEZXRhaWxEaWFsb2cgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy16b25lLWRldGFpbFwiO1xuaW1wb3J0IHtcbiAgWm9uZSxcbiAgZmV0Y2hab25lcyxcbiAgY3JlYXRlWm9uZSxcbiAgdXBkYXRlWm9uZSxcbiAgZGVsZXRlWm9uZSxcbiAgWm9uZU11dGFibGVQYXJhbXMsXG4gIGhvbWVSYWRpdXNDb2xvcixcbiAgcGFzc2l2ZVJhZGl1c0NvbG9yLFxuICBkZWZhdWx0UmFkaXVzQ29sb3IsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3pvbmVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHtcbiAgT3BMb2NhdGlvbnNFZGl0b3IsXG4gIE1hcmtlckxvY2F0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9tYXAvb3AtbG9jYXRpb25zLWVkaXRvclwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IE9wcEVudGl0eSwgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcIi4uLy4uLy4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL3N1YnNjcmliZS1taXhpblwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IGNvbmZpZ1NlY3Rpb25zIH0gZnJvbSBcIi4uL29wLXBhbmVsLWNvbmZpZ1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBzYXZlQ29yZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvcmVcIjtcbmltcG9ydCB7IGlmRGVmaW5lZCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2lmLWRlZmluZWRcIjtcbmltcG9ydCB7IHNob3dDb25maXJtYXRpb25EaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGlhbG9ncy9nZW5lcmljL3Nob3ctZGlhbG9nLWJveFwiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9wLWNvbmZpZy16b25lXCIpXG5leHBvcnQgY2xhc3MgT3BDb25maWdab25lIGV4dGVuZHMgU3Vic2NyaWJlTWl4aW4oTGl0RWxlbWVudCkge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb3BwITogT3BlblBlZXJQb3dlcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3c/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3RvcmFnZUl0ZW1zPzogWm9uZVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdGF0ZUl0ZW1zPzogT3BwRW50aXR5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FjdGl2ZUVudHJ5OiBzdHJpbmcgPSBcIlwiO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jYW5FZGl0Q29yZSA9IGZhbHNlO1xuICBAcXVlcnkoXCJvcC1sb2NhdGlvbnMtZWRpdG9yXCIpIHByaXZhdGUgX21hcD86IE9wTG9jYXRpb25zRWRpdG9yO1xuICBwcml2YXRlIF9yZWdFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIF9nZXRab25lcyA9IG1lbW9pemVPbmUoXG4gICAgKHN0b3JhZ2VJdGVtczogWm9uZVtdLCBzdGF0ZUl0ZW1zOiBPcHBFbnRpdHlbXSk6IE1hcmtlckxvY2F0aW9uW10gPT4ge1xuICAgICAgY29uc3Qgc3RhdGVMb2NhdGlvbnM6IE1hcmtlckxvY2F0aW9uW10gPSBzdGF0ZUl0ZW1zLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogc3RhdGUuZW50aXR5X2lkLFxuICAgICAgICAgIGljb246IHN0YXRlLmF0dHJpYnV0ZXMuaWNvbixcbiAgICAgICAgICBuYW1lOiBzdGF0ZS5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgc3RhdGUuZW50aXR5X2lkLFxuICAgICAgICAgIGxhdGl0dWRlOiBzdGF0ZS5hdHRyaWJ1dGVzLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogc3RhdGUuYXR0cmlidXRlcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBzdGF0ZS5hdHRyaWJ1dGVzLnJhZGl1cyxcbiAgICAgICAgICByYWRpdXNfY29sb3I6XG4gICAgICAgICAgICBzdGF0ZS5lbnRpdHlfaWQgPT09IFwiem9uZS5ob21lXCJcbiAgICAgICAgICAgICAgPyBob21lUmFkaXVzQ29sb3JcbiAgICAgICAgICAgICAgOiBzdGF0ZS5hdHRyaWJ1dGVzLnBhc3NpdmVcbiAgICAgICAgICAgICAgPyBwYXNzaXZlUmFkaXVzQ29sb3JcbiAgICAgICAgICAgICAgOiBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gICAgICAgICAgbG9jYXRpb25fZWRpdGFibGU6XG4gICAgICAgICAgICBzdGF0ZS5lbnRpdHlfaWQgPT09IFwiem9uZS5ob21lXCIgJiYgdGhpcy5fY2FuRWRpdENvcmUsXG4gICAgICAgICAgcmFkaXVzX2VkaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3RvcmFnZUxvY2F0aW9uczogTWFya2VyTG9jYXRpb25bXSA9IHN0b3JhZ2VJdGVtcy5tYXAoKHpvbmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lLFxuICAgICAgICAgIHJhZGl1c19jb2xvcjogem9uZS5wYXNzaXZlID8gcGFzc2l2ZVJhZGl1c0NvbG9yIDogZGVmYXVsdFJhZGl1c0NvbG9yLFxuICAgICAgICAgIGxvY2F0aW9uX2VkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIHJhZGl1c19lZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0b3JhZ2VMb2NhdGlvbnMuY29uY2F0KHN0YXRlTG9jYXRpb25zKTtcbiAgICB9XG4gICk7XG5cbiAgcHVibGljIG9wcFN1YnNjcmliZSgpOiBVbnN1YnNjcmliZUZ1bmNbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5KHRoaXMub3BwLmNvbm5lY3Rpb24hLCAoZW50aXRpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fcmVnRW50aXRpZXMgPSBlbnRpdGllcy5tYXAoXG4gICAgICAgICAgKHJlZ2lzdHJ5RW50cnkpID0+IHJlZ2lzdHJ5RW50cnkuZW50aXR5X2lkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2ZpbHRlclN0YXRlcygpO1xuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLm9wcCB8fFxuICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX3N0YXRlSXRlbXMgPT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxvcHAtbG9hZGluZy1zY3JlZW4+PC9vcHAtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBvcHAgPSB0aGlzLm9wcDtcbiAgICBjb25zdCBsaXN0Qm94ID1cbiAgICAgIHRoaXMuX3N0b3JhZ2VJdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fc3RhdGVJdGVtcy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+XG4gICAgICAgICAgICAgICR7b3BwLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUubm9fem9uZXNfY3JlYXRlZF95ZXRcIil9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jcmVhdGVab25lfT5cbiAgICAgICAgICAgICAgICAke29wcC5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56b25lLmNyZWF0ZV96b25lXCIpfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1pZFwiXG4gICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2FjdGl2ZUVudHJ5IHx8IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5fc3RvcmFnZUl0ZW1zLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD0ke2VudHJ5LmlkfVxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9pdGVtQ2xpY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgLmVudHJ5PSR7ZW50cnl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcC1pY29uIC5pY29uPSR7ZW50cnkuaWNvbn0gc2xvdD1cIml0ZW0taWNvblwiPiA8L29wLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgJHtlbnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5uYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJvcHA6cGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW50cnk9JHtlbnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuRWRpdEVudHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgJHt0aGlzLl9zdGF0ZUl0ZW1zLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD0ke3N0YXRlLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc3RhdGVJdGVtQ2xpY2tlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wLWljb24gLmljb249JHtzdGF0ZS5hdHRyaWJ1dGVzLmljb259IHNsb3Q9XCJpdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9vcC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICR7c3RhdGUuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IHN0YXRlLmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7c3RhdGUuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm9wcDpwZW5jaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkNvcmVDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD0ke2lmRGVmaW5lZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZW50aXR5X2lkID09PSBcInpvbmUuaG9tZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXJyb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5FZGl0Q29yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZS5lbnRpdHlfaWQgPT09IFwiem9uZS5ob21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuem9uZS4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJlZGl0X2hvbWVfem9uZV9uYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJlZGl0X2hvbWVfem9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm9wcC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpvbmUuY29uZmlndXJlZF9pbl95YW1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICBgO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8b3BwLXRhYnMtc3VicGFnZVxuICAgICAgICAub3BwPSR7dGhpcy5vcHB9XG4gICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgLnJvdXRlPSR7dGhpcy5yb3V0ZX1cbiAgICAgICAgYmFjay1wYXRoPVwiL2NvbmZpZ1wiXG4gICAgICAgIC50YWJzPSR7Y29uZmlnU2VjdGlvbnMucGVyc29uc31cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG9wLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgJHtvcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5pbnRyb2R1Y3Rpb25cIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxvcC1jYXJkPiR7bGlzdEJveH08L29wLWNhcmQ+XG4gICAgICAgICAgICAgIDwvb3AtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAkeyF0aGlzLm5hcnJvd1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8b3AtbG9jYXRpb25zLWVkaXRvclxuICAgICAgICAgICAgICAgICAgLmxvY2F0aW9ucz0ke3RoaXMuX2dldFpvbmVzKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9yYWdlSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSXRlbXNcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBAbG9jYXRpb24tdXBkYXRlZD0ke3RoaXMuX2xvY2F0aW9uVXBkYXRlZH1cbiAgICAgICAgICAgICAgICAgIEByYWRpdXMtdXBkYXRlZD0ke3RoaXMuX3JhZGl1c1VwZGF0ZWR9XG4gICAgICAgICAgICAgICAgICBAbWFya2VyLWNsaWNrZWQ9JHt0aGlzLl9tYXJrZXJDbGlja2VkfVxuICAgICAgICAgICAgICAgID48L29wLWxvY2F0aW9ucy1lZGl0b3I+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAke2xpc3RCb3h9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvb3BwLXRhYnMtc3VicGFnZT5cblxuICAgICAgPG9wLWZhYlxuICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICA/bmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgIGljb249XCJvcHA6cGx1c1wiXG4gICAgICAgIHRpdGxlPVwiJHtvcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5hZGRfem9uZVwiKX1cIlxuICAgICAgICBAY2xpY2s9JHt0aGlzLl9jcmVhdGVab25lfVxuICAgICAgPjwvb3AtZmFiPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9jYW5FZGl0Q29yZSA9XG4gICAgICBCb29sZWFuKHRoaXMub3BwLnVzZXI/LmlzX2FkbWluKSAmJlxuICAgICAgW1wic3RvcmFnZVwiLCBcImRlZmF1bHRcIl0uaW5jbHVkZXModGhpcy5vcHAuY29uZmlnLmNvbmZpZ19zb3VyY2UpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIGlmICh0aGlzLnJvdXRlLnBhdGggPT09IFwiL25ld1wiKSB7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvem9uZVwiLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NyZWF0ZVpvbmUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGNvbnN0IG9sZE9wcCA9IGNoYW5nZWRQcm9wcy5nZXQoXCJvcHBcIikgYXMgT3BlblBlZXJQb3dlciB8IHVuZGVmaW5lZDtcbiAgICBpZiAob2xkT3BwICYmIHRoaXMuX3N0YXRlSXRlbXMpIHtcbiAgICAgIHRoaXMuX2dldFN0YXRlcyhvbGRPcHApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSAoYXdhaXQgZmV0Y2hab25lcyh0aGlzLm9wcCEpKS5zb3J0KChlbnQxLCBlbnQyKSA9PlxuICAgICAgY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSlcbiAgICApO1xuICAgIHRoaXMuX2dldFN0YXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0U3RhdGVzKG9sZE9wcD86IE9wZW5QZWVyUG93ZXIpIHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHRlbXBTdGF0ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMub3BwIS5zdGF0ZXMpLmZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgIT09IFwiem9uZVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChvbGRPcHA/LnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSAhPT0gZW50aXR5KSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JlZ0VudGl0aWVzLmluY2x1ZGVzKGVudGl0eS5lbnRpdHlfaWQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlSXRlbXMgPSB0ZW1wU3RhdGVzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlclN0YXRlcygpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGVtcFN0YXRlcyA9IHRoaXMuX3N0YXRlSXRlbXMuZmlsdGVyKFxuICAgICAgKGVudGl0eSkgPT4gIXRoaXMuX3JlZ0VudGl0aWVzLmluY2x1ZGVzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgKTtcbiAgICBpZiAodGVtcFN0YXRlcy5sZW5ndGggIT09IHRoaXMuX3N0YXRlSXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGF0ZUl0ZW1zID0gdGVtcFN0YXRlcztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2NhdGlvblVwZGF0ZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgdGhpcy5fYWN0aXZlRW50cnkgPSBldi5kZXRhaWwuaWQ7XG4gICAgaWYgKGV2LmRldGFpbC5pZCA9PT0gXCJ6b25lLmhvbWVcIiAmJiB0aGlzLl9jYW5FZGl0Q29yZSkge1xuICAgICAgYXdhaXQgc2F2ZUNvcmVDb25maWcodGhpcy5vcHAsIHtcbiAgICAgICAgbGF0aXR1ZGU6IGV2LmRldGFpbC5sb2NhdGlvblswXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBldi5kZXRhaWwubG9jYXRpb25bMV0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGV2LmRldGFpbC5pZCk7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVFbnRyeShlbnRyeSwge1xuICAgICAgbGF0aXR1ZGU6IGV2LmRldGFpbC5sb2NhdGlvblswXSxcbiAgICAgIGxvbmdpdHVkZTogZXYuZGV0YWlsLmxvY2F0aW9uWzFdLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmFkaXVzVXBkYXRlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGV2LmRldGFpbC5pZDtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXYuZGV0YWlsLmlkKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUVudHJ5KGVudHJ5LCB7XG4gICAgICByYWRpdXM6IGV2LmRldGFpbC5yYWRpdXMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrZXJDbGlja2VkKGV2OiBDdXN0b21FdmVudCkge1xuICAgIHRoaXMuX2FjdGl2ZUVudHJ5ID0gZXYuZGV0YWlsLmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlWm9uZSgpIHtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9pdGVtQ2xpY2tlZChldjogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5uYXJyb3cpIHtcbiAgICAgIHRoaXMuX29wZW5FZGl0RW50cnkoZXYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbnRyeTogWm9uZSA9IChldi5jdXJyZW50VGFyZ2V0ISBhcyBhbnkpLmVudHJ5O1xuICAgIHRoaXMuX3pvb21ab25lKGVudHJ5LmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlSXRlbUNsaWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcbiAgICAgIFwiZGF0YS1pZFwiXG4gICAgKSE7XG4gICAgdGhpcy5fem9vbVpvbmUoZW50aXR5SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfem9vbVpvbmUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21hcD8uZml0TWFya2VyKGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5FZGl0RW50cnkoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50cnk6IFpvbmUgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRyeTtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKGVudHJ5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX29wZW5Db3JlQ29uZmlnKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkOiBzdHJpbmcgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBpZiAoZW50aXR5SWQgIT09IFwiem9uZS5ob21lXCIgfHwgIXRoaXMubmFycm93IHx8ICF0aGlzLl9jYW5FZGl0Q29yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhKGF3YWl0IHNob3dDb25maXJtYXRpb25EaWFsb2codGhpcywge1xuICAgICAgICB0aXRsZTogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5nb190b19jb3JlX2NvbmZpZ1wiKSxcbiAgICAgICAgdGV4dDogdGhpcy5vcHAubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuem9uZS5ob21lX3pvbmVfY29yZV9jb25maWdcIiksXG4gICAgICAgIGNvbmZpcm1UZXh0OiB0aGlzLm9wcCEubG9jYWxpemUoXCJ1aS5jb21tb24ueWVzXCIpLFxuICAgICAgICBkaXNtaXNzVGV4dDogdGhpcy5vcHAhLmxvY2FsaXplKFwidWkuY29tbW9uLm5vXCIpLFxuICAgICAgfSkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy9jb3JlXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY3JlYXRlRW50cnkodmFsdWVzOiBab25lTXV0YWJsZVBhcmFtcykge1xuICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBjcmVhdGVab25lKHRoaXMub3BwISwgdmFsdWVzKTtcbiAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSB0aGlzLl9zdG9yYWdlSXRlbXMhLmNvbmNhdChcbiAgICAgIGNyZWF0ZWRcbiAgICApLnNvcnQoKGVudDEsIGVudDIpID0+IGNvbXBhcmUoZW50MS5uYW1lLCBlbnQyLm5hbWUpKTtcbiAgICBpZiAodGhpcy5uYXJyb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGNyZWF0ZWQuaWQ7XG4gICAgdGhpcy5fbWFwPy5maXRNYXJrZXIoY3JlYXRlZC5pZCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVFbnRyeShcbiAgICBlbnRyeTogWm9uZSxcbiAgICB2YWx1ZXM6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+LFxuICAgIGZpdE1hcDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVab25lKHRoaXMub3BwISwgZW50cnkhLmlkLCB2YWx1ZXMpO1xuICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEubWFwKChlbnQpID0+XG4gICAgICBlbnQgPT09IGVudHJ5ID8gdXBkYXRlZCA6IGVudFxuICAgICk7XG4gICAgaWYgKHRoaXMubmFycm93IHx8ICFmaXRNYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICB0aGlzLl9hY3RpdmVFbnRyeSA9IGVudHJ5LmlkO1xuICAgIHRoaXMuX21hcD8uZml0TWFya2VyKGVudHJ5LmlkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbW92ZUVudHJ5KGVudHJ5OiBab25lKSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oYCR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuY29uZmlybV9kZWxldGVcIil9XG5cbiR7dGhpcy5vcHAhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnpvbmUuY29uZmlybV9kZWxldGUyXCIpfWApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZVpvbmUodGhpcy5vcHAhLCBlbnRyeSEuaWQpO1xuICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID0gdGhpcy5fc3RvcmFnZUl0ZW1zIS5maWx0ZXIoKGVudCkgPT4gZW50ICE9PSBlbnRyeSk7XG4gICAgICBpZiAoIXRoaXMubmFycm93KSB7XG4gICAgICAgIHRoaXMuX21hcD8uZml0TWFwKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vcGVuRGlhbG9nKGVudHJ5PzogWm9uZSkge1xuICAgIHNob3dab25lRGV0YWlsRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5LFxuICAgICAgY3JlYXRlRW50cnk6ICh2YWx1ZXMpID0+IHRoaXMuX2NyZWF0ZUVudHJ5KHZhbHVlcyksXG4gICAgICB1cGRhdGVFbnRyeTogZW50cnlcbiAgICAgICAgPyAodmFsdWVzKSA9PiB0aGlzLl91cGRhdGVFbnRyeShlbnRyeSwgdmFsdWVzLCB0cnVlKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIHJlbW92ZUVudHJ5OiBlbnRyeSA/ICgpID0+IHRoaXMuX3JlbW92ZUVudHJ5KGVudHJ5KSA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG9wcC1sb2FkaW5nLXNjcmVlbiB7XG4gICAgICAgIC0tYXBwLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAtLWFwcC1oZWFkZXItdGV4dC1jb2xvcjogdmFyKC0tc2lkZWJhci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBvcC1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBvcC1pY29uLFxuICAgICAgcGFwZXItaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5lbXB0eSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLmZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAub3ZlcmZsb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuICAgICAgb3AtbG9jYXRpb25zLWVkaXRvciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLmZsZXggcGFwZXItbGlzdGJveCxcbiAgICAgIC5mbGV4IC5lbXB0eSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgICAub3ZlcmZsb3cgcGFwZXItaWNvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1pdGVtLmlyb24tc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLWljb24tY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAwLjEyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1bXMgbGluZWFyO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgICAgIH1cbiAgICAgIG9wLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIG9wLWNhcmQgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIG9wLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIG9wLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBvcC1mYWJbbmFycm93XSB7XG4gICAgICAgIGJvdHRvbTogODRweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBab25lLCBab25lTXV0YWJsZVBhcmFtcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3pvbmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBab25lRGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk/OiBab25lO1xuICBjcmVhdGVFbnRyeTogKHZhbHVlczogWm9uZU11dGFibGVQYXJhbXMpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHVwZGF0ZUVudHJ5PzogKHVwZGF0ZXM6IFBhcnRpYWw8Wm9uZU11dGFibGVQYXJhbXM+KSA9PiBQcm9taXNlPHVua25vd24+O1xuICByZW1vdmVFbnRyeT86ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkWm9uZURldGFpbERpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpvbmUtZGV0YWlsLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctem9uZS1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Wm9uZURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogWm9uZURldGFpbERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLXpvbmUtZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkWm9uZURldGFpbERpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHN5c3RlbUxvZ0RldGFpbFBhcmFtcyxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxpTUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHdNQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBbUJBO0FBSUE7QUFDQTtBQXdCQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQStDQTs7QUFBQTtBQUdBO0FBbERBO0FBQUE7QUFBQTtBQUFBO0FBcURBO0FBQ0E7QUFBQTtBQUNBO0FBdkRBO0FBQUE7QUFBQTtBQUFBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwRUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFBQTtBQTJFQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBbkZBO0FBQUE7QUFBQTtBQUFBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFwR0E7QUFBQTtBQUFBO0FBQUE7QUF1R0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBL0dBO0FBQUE7QUFBQTtBQUFBO0FBa0hBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcEhBO0FBQUE7QUFBQTtBQUFBO0FBdUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXZPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBME9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7QUFwUUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQURBO0FBS0E7QUFFQTtBQURBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUExQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBOENBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQXREQTtBQUFBO0FBQUE7QUFBQTtBQXlEQTtBQUtBOztBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7O0FBSUE7O0FBRUE7QUFDQTs7O0FBTkE7OztBQWFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFJQTtBQUNBOztBQUxBOztBQVZBO0FBcUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7OztBQUlBOztBQUVBO0FBQ0E7OztBQVNBOzs7O0FBeEJBO0FBdUNBOztBQS9FQTtBQW1GQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFFQTs7QUFFQTs7QUFFQTs7QUFOQTtBQVVBOzs7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQWJBOzs7O0FBcUJBO0FBQ0E7O0FBRUE7QUFDQTs7QUEzQ0E7QUE4Q0E7QUFwTUE7QUFBQTtBQUFBO0FBQUE7QUFzTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWhOQTtBQUFBO0FBQUE7QUFBQTtBQW1OQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBeE5BO0FBQUE7QUFBQTtBQUFBO0FBMk5BO0FBQ0E7QUFFQTtBQUNBO0FBL05BO0FBQUE7QUFBQTtBQUFBO0FBa09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5QQTtBQUFBO0FBQUE7QUFBQTtBQXNQQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQS9QQTtBQUFBO0FBQUE7QUFBQTtBQWtRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFsUkE7QUFBQTtBQUFBO0FBQUE7QUFxUkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBN1JBO0FBQUE7QUFBQTtBQUFBO0FBZ1NBO0FBQ0E7QUFqU0E7QUFBQTtBQUFBO0FBQUE7QUFvU0E7QUFDQTtBQXJTQTtBQUFBO0FBQUE7QUFBQTtBQXdTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTlTQTtBQUFBO0FBQUE7QUFBQTtBQWlUQTtBQUNBO0FBRUE7QUFDQTtBQXJUQTtBQUFBO0FBQUE7QUFBQTtBQXVUQTtBQUNBO0FBQUE7QUFDQTtBQXpUQTtBQUFBO0FBQUE7QUFBQTtBQTRUQTtBQUNBO0FBQUE7QUFDQTtBQTlUQTtBQUFBO0FBQUE7QUFBQTtBQWlVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaFZBO0FBQUE7QUFBQTtBQUFBO0FBa1ZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBN1ZBO0FBQUE7QUFBQTtBQUFBO0FBbVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOVdBO0FBQUE7QUFBQTtBQUFBO0FBaVhBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5ZQTtBQUFBO0FBQUE7QUFBQTtBQXNZQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFRQTtBQTlZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaVpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnRkE7QUFqZUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBLGk0QkFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=