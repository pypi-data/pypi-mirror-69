(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-map"],{

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

/***/ "./src/components/op-icon.ts":
/*!***********************************!*\
  !*** ./src/components/op-icon.ts ***!
  \***********************************/
/*! exports provided: OpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpIcon", function() { return OpIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class OpIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("op-icon", OpIcon);

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

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from opp object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      opp: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(opp.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/map/op-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/op-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");




/*
 * @appliesMixin EventsMixin
 */

class OpEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--op-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]">[[entityName]]</template>
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object
      },
      entityId: {
        type: String,
        value: ""
      },
      entityName: {
        type: String,
        value: null
      },
      entityPicture: {
        type: String,
        value: null
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.badgeTap(ev));
  }

  badgeTap(ev) {
    ev.stopPropagation();

    if (this.entityId) {
      this.fire("opp-more-info", {
        entityId: this.entityId
      });
    }
  }

}

customElements.define("op-entity-marker", OpEntityMarker);

/***/ }),

/***/ "./src/panels/map/op-panel-map.js":
/*!****************************************!*\
  !*** ./src/panels/map/op-panel-map.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _components_op_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/op-icon */ "./src/components/op-icon.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _op_entity_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./op-entity-marker */ "./src/panels/map/op-entity-marker.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _data_zone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/zone */ "./src/data/zone.ts");












/*
 * @appliesMixin LocalizeMixin
 */

class OpPanelMap extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="op-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }

        .light {
          color: #000000;
        }
      </style>

      <app-toolbar>
        <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
        <template is="dom-if" if="[[computeShowEditZone(opp)]]">
          <paper-icon-button
            icon="opp:pencil"
            on-click="openZonesEditor"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <div id="map"></div>
    `;
  }

  static get properties() {
    return {
      opp: {
        type: Object,
        observer: "drawEntities"
      },
      narrow: Boolean
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMap();
  }

  async loadMap() {
    [this._map, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_10__["setupLeafletMap"])(this.$.map);
    this.drawEntities(this.opp);

    this._map.invalidateSize();

    this.fitMap();
  }

  disconnectedCallback() {
    if (this._map) {
      this._map.remove();
    }
  }

  computeShowEditZone(opp) {
    return  true && opp.user.is_admin;
  }

  openZonesEditor() {
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, "/config/zone");
  }

  fitMap() {
    var bounds;

    if (this._mapItems.length === 0) {
      this._map.setView(new this.Leaflet.LatLng(this.opp.config.latitude, this.opp.config.longitude), 14);
    } else {
      bounds = new this.Leaflet.latLngBounds(this._mapItems.map(item => item.getLatLng()));

      this._map.fitBounds(bounds.pad(0.5));
    }
  }

  drawEntities(opp) {
    /* eslint-disable vars-on-top */
    var map = this._map;
    if (!map) return;

    if (this._mapItems) {
      this._mapItems.forEach(function (marker) {
        marker.remove();
      });
    }

    var mapItems = this._mapItems = [];

    if (this._mapZones) {
      this._mapZones.forEach(function (marker) {
        marker.remove();
      });
    }

    var mapZones = this._mapZones = [];
    Object.keys(opp.states).forEach(entityId => {
      var entity = opp.states[entityId];

      if (entity.attributes.hidden && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(entity) !== "zone" || entity.state === "home" || !("latitude" in entity.attributes) || !("longitude" in entity.attributes)) {
        return;
      }

      var title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(entity);
      var icon;

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(entity) === "zone") {
        // DRAW ZONE
        if (entity.attributes.passive) return; // create icon

        var iconHTML = "";

        if (entity.attributes.icon) {
          const el = document.createElement("op-icon");
          el.setAttribute("icon", entity.attributes.icon);
          iconHTML = el.outerHTML;
        } else {
          const el = document.createElement("span");
          el.innerHTML = title;
          iconHTML = el.outerHTML;
        }

        icon = this.Leaflet.divIcon({
          html: iconHTML,
          iconSize: [24, 24],
          className: "light"
        }); // create marker with the icon

        mapZones.push(this.Leaflet.marker([entity.attributes.latitude, entity.attributes.longitude], {
          icon: icon,
          interactive: false,
          title: title
        }).addTo(map)); // create circle around it

        mapZones.push(this.Leaflet.circle([entity.attributes.latitude, entity.attributes.longitude], {
          interactive: false,
          color: _data_zone__WEBPACK_IMPORTED_MODULE_11__["defaultRadiusColor"],
          radius: entity.attributes.radius
        }).addTo(map));
        return;
      } // DRAW ENTITY
      // create icon


      var entityPicture = entity.attributes.entity_picture || "";
      var entityName = title.split(" ").map(function (part) {
        return part.substr(0, 1);
      }).join("");
      /* Leaflet clones this element before adding it to the map. This messes up
         our Polymer object and we can't pass data through. Thus we hack like this. */

      icon = this.Leaflet.divIcon({
        html: "<op-entity-marker entity-id='" + entity.entity_id + "' entity-name='" + entityName + "' entity-picture='" + entityPicture + "'></op-entity-marker>",
        iconSize: [45, 45],
        className: ""
      }); // create market with the icon

      mapItems.push(this.Leaflet.marker([entity.attributes.latitude, entity.attributes.longitude], {
        icon: icon,
        title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(entity)
      }).addTo(map)); // create circle around if entity has accuracy

      if (entity.attributes.gps_accuracy) {
        mapItems.push(this.Leaflet.circle([entity.attributes.latitude, entity.attributes.longitude], {
          interactive: false,
          color: "#0288D1",
          radius: entity.attributes.gps_accuracy
        }).addTo(map));
      }
    });
  }

}

customElements.define("op-panel-map", OpPanelMap);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFwLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL29wLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvem9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFwL29wLWVudGl0eS1tYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9tYXAvb3AtcGFuZWwtbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbi8vIFNldHMgdXAgYSBMZWFmbGV0IG1hcCBvbiB0aGUgcHJvdmlkZWQgRE9NIGVsZW1lbnRcbmV4cG9ydCB0eXBlIExlYWZsZXRNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXRcIik7XG5leHBvcnQgdHlwZSBMZWFmbGV0RHJhd01vZHVsZVR5cGUgPSB0eXBlb2YgaW1wb3J0KFwibGVhZmxldC1kcmF3XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZSxcbiAgZHJhdyA9IGZhbHNlXG4pOiBQcm9taXNlPFtNYXAsIExlYWZsZXRNb2R1bGVUeXBlXT4gPT4ge1xuICBpZiAoIW1hcEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXR1cCBMZWFmbGV0IG1hcCBvbiBkaXNjb25uZWN0ZWQgZWxlbWVudFwiKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgTGVhZmxldCA9IChhd2FpdCBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0XCIgKi8gXCJsZWFmbGV0XCJcbiAgKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgaWYgKGRyYXcpIHtcbiAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0LWRyYXdcIiAqLyBcImxlYWZsZXQtZHJhd1wiKTtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IExlYWZsZXQubWFwKG1hcEVsZW1lbnQpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9sZWFmbGV0LmNzc1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgbWFwRWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgbWFwLnNldFZpZXcoWzUyLjM3MzEzMzksIDQuODkwMzE0N10sIDEzKTtcbiAgY3JlYXRlVGlsZUxheWVyKExlYWZsZXQsIGRhcmtNb2RlKS5hZGRUbyhtYXApO1xuXG4gIHJldHVybiBbbWFwLCBMZWFmbGV0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaWxlTGF5ZXIgPSAoXG4gIGxlYWZsZXQ6IExlYWZsZXRNb2R1bGVUeXBlLFxuICBkYXJrTW9kZTogYm9vbGVhblxuKSA9PiB7XG4gIHJldHVybiBsZWFmbGV0LnRpbGVMYXllcihcbiAgICBgaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tLyR7XG4gICAgICBkYXJrTW9kZSA/IFwiZGFya19hbGxcIiA6IFwibGlnaHRfYWxsXCJcbiAgICB9L3t6fS97eH0ve3l9JHtsZWFmbGV0LkJyb3dzZXIucmV0aW5hID8gXCJAMngucG5nXCIgOiBcIi5wbmdcIn1gLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL2NhcnRvLmNvbS9hdHRyaWJ1dGlvbnNcIj5DQVJUTzwvYT4nLFxuICAgICAgc3ViZG9tYWluczogXCJhYmNkXCIsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjAsXG4gICAgfVxuICApO1xufTtcbiIsIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBPcHBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEb21haW4gPSAoc3RhdGVPYmo6IE9wcEVudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IE9wcEVudGl0eSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogT3BwRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIE9wSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9wLWljb25cIjogT3BJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm9wLWljb25cIiwgT3BJY29uKTtcbiIsImltcG9ydCB7IE9wZW5QZWVyUG93ZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJhZGl1c0NvbG9yID0gXCIjRkY5ODAwXCI7XG5leHBvcnQgY29uc3QgaG9tZVJhZGl1c0NvbG9yOiBzdHJpbmcgPSBcIiMwM2E5ZjRcIjtcbmV4cG9ydCBjb25zdCBwYXNzaXZlUmFkaXVzQ29sb3I6IHN0cmluZyA9IFwiIzliOWI5YlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmUge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBwYXNzaXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvbmVNdXRhYmxlUGFyYW1zIHtcbiAgaWNvbjogc3RyaW5nO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXNzaXZlOiBib29sZWFuO1xuICByYWRpdXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoWm9uZXMgPSAob3BwOiBPcGVuUGVlclBvd2VyKSA9PlxuICBvcHAuY2FsbFdTPFpvbmVbXT4oeyB0eXBlOiBcInpvbmUvbGlzdFwiIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlWm9uZSA9IChvcHA6IE9wZW5QZWVyUG93ZXIsIHZhbHVlczogWm9uZU11dGFibGVQYXJhbXMpID0+XG4gIG9wcC5jYWxsV1M8Wm9uZT4oe1xuICAgIHR5cGU6IFwiem9uZS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlWm9uZSA9IChcbiAgb3BwOiBPcGVuUGVlclBvd2VyLFxuICB6b25lSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgb3BwLmNhbGxXUzxab25lPih7XG4gICAgdHlwZTogXCJ6b25lL3VwZGF0ZVwiLFxuICAgIHpvbmVfaWQ6IHpvbmVJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVpvbmUgPSAob3BwOiBPcGVuUGVlclBvd2VyLCB6b25lSWQ6IHN0cmluZykgPT5cbiAgb3BwLmNhbGxXUyh7XG4gICAgdHlwZTogXCJ6b25lL2RlbGV0ZVwiLFxuICAgIHpvbmVfaWQ6IHpvbmVJZCxcbiAgfSk7XG5cbmxldCBpbml0aXRpYWxab25lRWRpdG9yRGF0YTogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93Wm9uZUVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxab25lTXV0YWJsZVBhcmFtcz5cbikgPT4ge1xuICBpbml0aXRpYWxab25lRWRpdG9yRGF0YSA9IGRhdGE7XG4gIG5hdmlnYXRlKGVsLCBcIi9jb25maWcvem9uZS9uZXdcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Wm9uZUVkaXRvckluaXREYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0gaW5pdGl0aWFsWm9uZUVkaXRvckRhdGE7XG4gIGluaXRpdGlhbFpvbmVFZGl0b3JEYXRhID0gdW5kZWZpbmVkO1xuICByZXR1cm4gZGF0YTtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIG9wcCBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9wcDogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKG9wcC5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24taW1hZ2UvaXJvbi1pbWFnZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBPcEVudGl0eU1hcmtlciBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tcG9zaXRpb25pbmdcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAubWFya2VyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMC4xZW0gc29saWRcbiAgICAgICAgICAgIHZhcigtLW9wLW1hcmtlci1jb2xvciwgdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHJnYig3NiwgNzYsIDc2KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBpcm9uLWltYWdlIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXJrZXJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VudGl0eU5hbWVdXVwiPltbZW50aXR5TmFtZV1dPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VudGl0eVBpY3R1cmVdXVwiPlxuICAgICAgICAgIDxpcm9uLWltYWdlXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBjbGFzcz1cImZpdFwiXG4gICAgICAgICAgICBzcmM9XCJbW2VudGl0eVBpY3R1cmVdXVwiXG4gICAgICAgICAgPjwvaXJvbi1pbWFnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5TmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5UGljdHVyZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHRoaXMuYmFkZ2VUYXAoZXYpKTtcbiAgfVxuXG4gIGJhZGdlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZW50aXR5SWQpIHtcbiAgICAgIHRoaXMuZmlyZShcIm9wcC1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5lbnRpdHlJZCB9KTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtZW50aXR5LW1hcmtlclwiLCBPcEVudGl0eU1hcmtlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29wLWljb25cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG5pbXBvcnQgXCIuL29wLWVudGl0eS1tYXJrZXJcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IHNldHVwTGVhZmxldE1hcCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBkZWZhdWx0UmFkaXVzQ29sb3IgfSBmcm9tIFwiLi4vLi4vZGF0YS96b25lXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgT3BQYW5lbE1hcCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwib3Atc3R5bGVcIj5cbiAgICAgICAgI21hcCB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0IHtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8b3AtbWVudS1idXR0b24gb3BwPVwiW1tvcHBdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L29wLW1lbnUtYnV0dG9uPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwubWFwJyldXTwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZVNob3dFZGl0Wm9uZShvcHApXV1cIj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJvcHA6cGVuY2lsXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwib3BlblpvbmVzRWRpdG9yXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkcmF3RW50aXRpZXNcIixcbiAgICAgIH0sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5sb2FkTWFwKCk7XG4gIH1cblxuICBhc3luYyBsb2FkTWFwKCkge1xuICAgIFt0aGlzLl9tYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAodGhpcy4kLm1hcCk7XG4gICAgdGhpcy5kcmF3RW50aXRpZXModGhpcy5vcHApO1xuICAgIHRoaXMuX21hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICAgIHRoaXMuZml0TWFwKCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl9tYXAucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVNob3dFZGl0Wm9uZShvcHApIHtcbiAgICByZXR1cm4gIV9fREVNT19fICYmIG9wcC51c2VyLmlzX2FkbWluO1xuICB9XG5cbiAgb3BlblpvbmVzRWRpdG9yKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy96b25lXCIpO1xuICB9XG5cbiAgZml0TWFwKCkge1xuICAgIHZhciBib3VuZHM7XG5cbiAgICBpZiAodGhpcy5fbWFwSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9tYXAuc2V0VmlldyhcbiAgICAgICAgbmV3IHRoaXMuTGVhZmxldC5MYXRMbmcoXG4gICAgICAgICAgdGhpcy5vcHAuY29uZmlnLmxhdGl0dWRlLFxuICAgICAgICAgIHRoaXMub3BwLmNvbmZpZy5sb25naXR1ZGVcbiAgICAgICAgKSxcbiAgICAgICAgMTRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kcyA9IG5ldyB0aGlzLkxlYWZsZXQubGF0TG5nQm91bmRzKFxuICAgICAgICB0aGlzLl9tYXBJdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZ2V0TGF0TG5nKCkpXG4gICAgICApO1xuICAgICAgdGhpcy5fbWFwLmZpdEJvdW5kcyhib3VuZHMucGFkKDAuNSkpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdFbnRpdGllcyhvcHApIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YXJzLW9uLXRvcCAqL1xuICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmICh0aGlzLl9tYXBJdGVtcykge1xuICAgICAgdGhpcy5fbWFwSXRlbXMuZm9yRWFjaChmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBtYXBJdGVtcyA9ICh0aGlzLl9tYXBJdGVtcyA9IFtdKTtcblxuICAgIGlmICh0aGlzLl9tYXBab25lcykge1xuICAgICAgdGhpcy5fbWFwWm9uZXMuZm9yRWFjaChmdW5jdGlvbihtYXJrZXIpIHtcbiAgICAgICAgbWFya2VyLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBtYXBab25lcyA9ICh0aGlzLl9tYXBab25lcyA9IFtdKTtcblxuICAgIE9iamVjdC5rZXlzKG9wcC5zdGF0ZXMpLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICB2YXIgZW50aXR5ID0gb3BwLnN0YXRlc1tlbnRpdHlJZF07XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSAhPT0gXCJ6b25lXCIpIHx8XG4gICAgICAgIGVudGl0eS5zdGF0ZSA9PT0gXCJob21lXCIgfHxcbiAgICAgICAgIShcImxhdGl0dWRlXCIgaW4gZW50aXR5LmF0dHJpYnV0ZXMpIHx8XG4gICAgICAgICEoXCJsb25naXR1ZGVcIiBpbiBlbnRpdHkuYXR0cmlidXRlcylcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0aXRsZSA9IGNvbXB1dGVTdGF0ZU5hbWUoZW50aXR5KTtcbiAgICAgIHZhciBpY29uO1xuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwiem9uZVwiKSB7XG4gICAgICAgIC8vIERSQVcgWk9ORVxuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMucGFzc2l2ZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBpY29uXG4gICAgICAgIHZhciBpY29uSFRNTCA9IFwiXCI7XG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3AtaWNvblwiKTtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpY29uXCIsIGVudGl0eS5hdHRyaWJ1dGVzLmljb24pO1xuICAgICAgICAgIGljb25IVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgICAgICAgaWNvbkhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgICAgIH1cblxuICAgICAgICBpY29uID0gdGhpcy5MZWFmbGV0LmRpdkljb24oe1xuICAgICAgICAgIGh0bWw6IGljb25IVE1MLFxuICAgICAgICAgIGljb25TaXplOiBbMjQsIDI0XSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwibGlnaHRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG1hcmtlciB3aXRoIHRoZSBpY29uXG4gICAgICAgIG1hcFpvbmVzLnB1c2goXG4gICAgICAgICAgdGhpcy5MZWFmbGV0Lm1hcmtlcihcbiAgICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5hZGRUbyhtYXApXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGNpcmNsZSBhcm91bmQgaXRcbiAgICAgICAgbWFwWm9uZXMucHVzaChcbiAgICAgICAgICB0aGlzLkxlYWZsZXQuY2lyY2xlKFxuICAgICAgICAgICAgW2VudGl0eS5hdHRyaWJ1dGVzLmxhdGl0dWRlLCBlbnRpdHkuYXR0cmlidXRlcy5sb25naXR1ZGVdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yOiBkZWZhdWx0UmFkaXVzQ29sb3IsXG4gICAgICAgICAgICAgIHJhZGl1czogZW50aXR5LmF0dHJpYnV0ZXMucmFkaXVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRFJBVyBFTlRJVFlcbiAgICAgIC8vIGNyZWF0ZSBpY29uXG4gICAgICB2YXIgZW50aXR5UGljdHVyZSA9IGVudGl0eS5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlIHx8IFwiXCI7XG4gICAgICB2YXIgZW50aXR5TmFtZSA9IHRpdGxlXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnQuc3Vic3RyKDAsIDEpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgIC8qIExlYWZsZXQgY2xvbmVzIHRoaXMgZWxlbWVudCBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBtYXAuIFRoaXMgbWVzc2VzIHVwXG4gICAgICAgICBvdXIgUG9seW1lciBvYmplY3QgYW5kIHdlIGNhbid0IHBhc3MgZGF0YSB0aHJvdWdoLiBUaHVzIHdlIGhhY2sgbGlrZSB0aGlzLiAqL1xuICAgICAgaWNvbiA9IHRoaXMuTGVhZmxldC5kaXZJY29uKHtcbiAgICAgICAgaHRtbDpcbiAgICAgICAgICBcIjxvcC1lbnRpdHktbWFya2VyIGVudGl0eS1pZD0nXCIgK1xuICAgICAgICAgIGVudGl0eS5lbnRpdHlfaWQgK1xuICAgICAgICAgIFwiJyBlbnRpdHktbmFtZT0nXCIgK1xuICAgICAgICAgIGVudGl0eU5hbWUgK1xuICAgICAgICAgIFwiJyBlbnRpdHktcGljdHVyZT0nXCIgK1xuICAgICAgICAgIGVudGl0eVBpY3R1cmUgK1xuICAgICAgICAgIFwiJz48L29wLWVudGl0eS1tYXJrZXI+XCIsXG4gICAgICAgIGljb25TaXplOiBbNDUsIDQ1XSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNyZWF0ZSBtYXJrZXQgd2l0aCB0aGUgaWNvblxuICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgdGhpcy5MZWFmbGV0Lm1hcmtlcihcbiAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICAgIHRpdGxlOiBjb21wdXRlU3RhdGVOYW1lKGVudGl0eSksXG4gICAgICAgICAgfVxuICAgICAgICApLmFkZFRvKG1hcClcbiAgICAgICk7XG5cbiAgICAgIC8vIGNyZWF0ZSBjaXJjbGUgYXJvdW5kIGlmIGVudGl0eSBoYXMgYWNjdXJhY3lcbiAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy5ncHNfYWNjdXJhY3kpIHtcbiAgICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgICB0aGlzLkxlYWZsZXQuY2lyY2xlKFxuICAgICAgICAgICAgW2VudGl0eS5hdHRyaWJ1dGVzLmxhdGl0dWRlLCBlbnRpdHkuYXR0cmlidXRlcy5sb25naXR1ZGVdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMjg4RDFcIixcbiAgICAgICAgICAgICAgcmFkaXVzOiBlbnRpdHkuYXR0cmlidXRlcy5ncHNfYWNjdXJhY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5hZGRUbyhtYXApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3AtcGFuZWwtbWFwXCIsIE9wUGFuZWxNYXApO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxpTUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHdNQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFmQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBekVBO0FBQ0E7QUEwRUE7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFWQTtBQUNBO0FBYUE7QUFJQTtBQUNBO0FBRkE7QUFDQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBMU5BO0FBQ0E7QUEyTkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==