(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-scene~pa~5910adb6"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




class RippleBase extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.interactionNode = this;
  }

  connectedCallback() {
    if (this.interactionNode === this) {
      const parent = this.parentNode;

      if (parent instanceof HTMLElement) {
        this.interactionNode = parent;
      } else if (parent instanceof ShadowRoot && parent.host instanceof HTMLElement) {
        this.interactionNode = parent.host;
      }
    }

    super.connectedCallback();
  } // TODO(sorvell) #css: sizing.


  render() {
    const classes = {
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--accent': this.accent
    };
    const {
      disabled,
      unbounded,
      active,
      interactionNode
    } = this;
    const rippleOptions = {
      disabled,
      unbounded,
      interactionNode
    };

    if (active !== undefined) {
      rippleOptions.active = active;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}"></div>`;
  }

}

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const style = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./node_modules/@polymer/app-route/app-route.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/app-route/app-route.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
`app-route` is an element that enables declarative, self-describing routing
for a web app.

In its typical usage, a `app-route` element consumes an object that describes
some state about the current route, via the `route` property. It then parses
that state using the `pattern` property, and produces two artifacts: some `data`
related to the `route`, and a `tail` that contains the rest of the `route` that
did not match.

Here is a basic example, when used with `app-location`:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{data}}"
        tail="{{tail}}">
    </app-route>

In the above example, the `app-location` produces a `route` value. Then, the
`route.path` property is matched by comparing it to the `pattern` property. If
the `pattern` property matches `route.path`, the `app-route` will set or update
its `data` property with an object whose properties correspond to the parameters
in `pattern`. So, in the above example, if `route.path` was `'/about'`, the
value of `data` would be `{"page": "about"}`.

The `tail` property represents the remaining part of the route state after the
`pattern` has been applied to a matching `route`.

Here is another example, where `tail` is used:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>
    <app-route
        route="{{subroute}}"
        pattern="/:id"
        data="{{subrouteData}}">
    </app-route>

In the above example, there are two `app-route` elements. The first
`app-route` consumes a `route`. When the `route` is matched, the first
`app-route` also produces `routeData` from its `data`, and `subroute` from
its `tail`. The second `app-route` consumes the `subroute`, and when it
matches, it produces an object called `subrouteData` from its `data`.

So, when `route.path` is `'/about'`, the `routeData` object will look like
this: `{ page: 'about' }`

And `subrouteData` will be null. However, if `route.path` changes to
`'/article/123'`, the `routeData` object will look like this:
`{ page: 'article' }`

And the `subrouteData` will look like this: `{ id: '123' }`

`app-route` is responsive to bi-directional changes to the `data` objects
they produce. So, if `routeData.page` changed from `'article'` to `'about'`,
the `app-route` will update `route.path`. This in-turn will update the
`app-location`, and cause the global location bar to change its value.

@element app-route
@demo demo/index.html
@demo demo/data-loading-demo.html
@demo demo/simple-demo.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'app-route',
  properties: {
    /**
     * The URL component managed by this element.
     */
    route: {
      type: Object,
      notify: true
    },

    /**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */
    pattern: {
      type: String
    },

    /**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */
    data: {
      type: Object,
      value: function () {
        return {};
      },
      notify: true
    },

    /**
     * Auto activate route if path empty
     */
    autoActivate: {
      type: Boolean,
      value: false
    },
    _queryParamsUpdating: {
      type: Boolean,
      value: false
    },

    /**
     * @type {?Object}
     */
    queryParams: {
      type: Object,
      value: function () {
        return {};
      },
      notify: true
    },

    /**
     * The part of `route.path` NOT consumed by `pattern`.
     */
    tail: {
      type: Object,
      value: function () {
        return {
          path: null,
          prefix: null,
          __queryParams: null
        };
      },
      notify: true
    },

    /**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */
    active: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * @type {?string}
     */
    _matched: {
      type: String,
      value: ''
    }
  },
  observers: ['__tryToMatch(route.path, pattern)', '__updatePathOnDataChange(data.*)', '__tailPathChanged(tail.path)', '__routeQueryParamsChanged(route.__queryParams)', '__tailQueryParamsChanged(tail.__queryParams)', '__queryParamsChanged(queryParams.*)'],
  created: function () {
    this.linkPaths('route.__queryParams', 'tail.__queryParams');
    this.linkPaths('tail.__queryParams', 'route.__queryParams');
  },

  /**
   * Deal with the query params object being assigned to wholesale.
   */
  __routeQueryParamsChanged: function (queryParams) {
    if (queryParams && this.tail) {
      if (this.tail.__queryParams !== queryParams) {
        this.set('tail.__queryParams', queryParams);
      }

      if (!this.active || this._queryParamsUpdating) {
        return;
      } // Copy queryParams and track whether there are any differences compared
      // to the existing query params.


      var copyOfQueryParams = {};
      var anythingChanged = false;

      for (var key in queryParams) {
        copyOfQueryParams[key] = queryParams[key];

        if (anythingChanged || !this.queryParams || queryParams[key] !== this.queryParams[key]) {
          anythingChanged = true;
        }
      } // Need to check whether any keys were deleted


      for (var key in this.queryParams) {
        if (anythingChanged || !(key in queryParams)) {
          anythingChanged = true;
          break;
        }
      }

      if (!anythingChanged) {
        return;
      }

      this._queryParamsUpdating = true;
      this.set('queryParams', copyOfQueryParams);
      this._queryParamsUpdating = false;
    }
  },
  __tailQueryParamsChanged: function (queryParams) {
    if (queryParams && this.route && this.route.__queryParams != queryParams) {
      this.set('route.__queryParams', queryParams);
    }
  },
  __queryParamsChanged: function (changes) {
    if (!this.active || this._queryParamsUpdating) {
      return;
    }

    this.set('route.__' + changes.path, changes.value);
  },
  __resetProperties: function () {
    this._setActive(false);

    this._matched = null;
  },
  __tryToMatch: function () {
    if (!this.route) {
      return;
    }

    var path = this.route.path;
    var pattern = this.pattern;

    if (this.autoActivate && path === '') {
      path = '/';
    }

    if (!pattern) {
      return;
    }

    if (!path) {
      this.__resetProperties();

      return;
    }

    var remainingPieces = path.split('/');
    var patternPieces = pattern.split('/');
    var matched = [];
    var namedMatches = {};

    for (var i = 0; i < patternPieces.length; i++) {
      var patternPiece = patternPieces[i];

      if (!patternPiece && patternPiece !== '') {
        break;
      }

      var pathPiece = remainingPieces.shift(); // We don't match this path.

      if (!pathPiece && pathPiece !== '') {
        this.__resetProperties();

        return;
      }

      matched.push(pathPiece);

      if (patternPiece.charAt(0) == ':') {
        namedMatches[patternPiece.slice(1)] = pathPiece;
      } else if (patternPiece !== pathPiece) {
        this.__resetProperties();

        return;
      }
    }

    this._matched = matched.join('/'); // Properties that must be updated atomically.

    var propertyUpdates = {}; // this.active

    if (!this.active) {
      propertyUpdates.active = true;
    } // this.tail


    var tailPrefix = this.route.prefix + this._matched;
    var tailPath = remainingPieces.join('/');

    if (remainingPieces.length > 0) {
      tailPath = '/' + tailPath;
    }

    if (!this.tail || this.tail.prefix !== tailPrefix || this.tail.path !== tailPath) {
      propertyUpdates.tail = {
        prefix: tailPrefix,
        path: tailPath,
        __queryParams: this.route.__queryParams
      };
    } // this.data


    propertyUpdates.data = namedMatches;
    this._dataInUrl = {};

    for (var key in namedMatches) {
      this._dataInUrl[key] = namedMatches[key];
    }

    if (this.setProperties) {
      // atomic update
      this.setProperties(propertyUpdates, true);
    } else {
      this.__setMulti(propertyUpdates);
    }
  },
  __tailPathChanged: function (path) {
    if (!this.active) {
      return;
    }

    var tailPath = path;
    var newPath = this._matched;

    if (tailPath) {
      if (tailPath.charAt(0) !== '/') {
        tailPath = '/' + tailPath;
      }

      newPath += tailPath;
    }

    this.set('route.path', newPath);
  },
  __updatePathOnDataChange: function () {
    if (!this.route || !this.active) {
      return;
    }

    var newPath = this.__getLink({});

    var oldPath = this.__getLink(this._dataInUrl);

    if (newPath === oldPath) {
      return;
    }

    this.set('route.path', newPath);
  },
  __getLink: function (overrideValues) {
    var values = {
      tail: null
    };

    for (var key in this.data) {
      values[key] = this.data[key];
    }

    for (var key in overrideValues) {
      values[key] = overrideValues[key];
    }

    var patternPieces = this.pattern.split('/');
    var interp = patternPieces.map(function (value) {
      if (value[0] == ':') {
        value = values[value.slice(1)];
      }

      return value;
    }, this);

    if (values.tail && values.tail.path) {
      if (interp.length > 0 && values.tail.path.charAt(0) === '/') {
        interp.push(values.tail.path.slice(1));
      } else {
        interp.push(values.tail.path);
      }
    }

    return interp.join('/');
  },
  __setMulti: function (setObj) {
    // HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
    //     internal data structures. I would not advise that you copy this
    //     example.
    //
    //     In the future this will be a feature of Polymer itself.
    //     See: https://github.com/Polymer/polymer/issues/3640
    //
    //     Hacking around with private methods like this is juggling footguns,
    //     and is likely to have unexpected and unsupported rough edges.
    //
    //     Be ye so warned.
    for (var property in setObj) {
      this._propertySetter(property, setObj[property]);
    } // notify in a specific order


    if (setObj.data !== undefined) {
      this._pathEffector('data', this.data);

      this._notifyChange('data');
    }

    if (setObj.active !== undefined) {
      this._pathEffector('active', this.active);

      this._notifyChange('active');
    }

    if (setObj.tail !== undefined) {
      this._pathEffector('tail', this.tail);

      this._notifyChange('tail');
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zfnBhbmVsLWNvbmZpZy1zY2VuZX5wYX41OTEwYWRiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1iYXNlLnRzIiwid2VicGFjazovLy9zcmMvbXdjLXJpcHBsZS1jc3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy9td2MtcmlwcGxlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7aHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHl9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7Y2xhc3NNYXB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IHtyaXBwbGUsIFJpcHBsZU9wdGlvbnN9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHByaW1hcnkgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoe3R5cGU6IEJvb2xlYW59KSBhY3RpdmU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGFjY2VudCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7dHlwZTogQm9vbGVhbn0pIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHthdHRyaWJ1dGU6IGZhbHNlfSkgcHJvdGVjdGVkIGludGVyYWN0aW9uTm9kZTogSFRNTEVsZW1lbnQgPSB0aGlzO1xuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmludGVyYWN0aW9uTm9kZSA9PT0gdGhpcykge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgU2hhZG93Um9vdCB8IG51bGw7XG4gICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSBwYXJlbnQ7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHBhcmVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiYgcGFyZW50Lmhvc3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudC5ob3N0O1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgLy8gVE9ETyhzb3J2ZWxsKSAjY3NzOiBzaXppbmcuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICB9O1xuICAgIGNvbnN0IHtkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZX0gPSB0aGlzO1xuICAgIGNvbnN0IHJpcHBsZU9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7ZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlfTtcbiAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICB9XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQge2Nzc30gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWU7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtcHJpbWFyeSwgIzYyMDBlZSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjdXN0b21FbGVtZW50fSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCB7UmlwcGxlQmFzZX0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ213Yy1yaXBwbGUnOiBSaXBwbGU7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ213Yy1yaXBwbGUnKVxuZXhwb3J0IGNsYXNzIFJpcHBsZSBleHRlbmRzIFJpcHBsZUJhc2Uge1xuICBzdGF0aWMgc3R5bGVzID0gc3R5bGU7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuXG4vKipcbmBhcHAtcm91dGVgIGlzIGFuIGVsZW1lbnQgdGhhdCBlbmFibGVzIGRlY2xhcmF0aXZlLCBzZWxmLWRlc2NyaWJpbmcgcm91dGluZ1xuZm9yIGEgd2ViIGFwcC5cblxuSW4gaXRzIHR5cGljYWwgdXNhZ2UsIGEgYGFwcC1yb3V0ZWAgZWxlbWVudCBjb25zdW1lcyBhbiBvYmplY3QgdGhhdCBkZXNjcmliZXNcbnNvbWUgc3RhdGUgYWJvdXQgdGhlIGN1cnJlbnQgcm91dGUsIHZpYSB0aGUgYHJvdXRlYCBwcm9wZXJ0eS4gSXQgdGhlbiBwYXJzZXNcbnRoYXQgc3RhdGUgdXNpbmcgdGhlIGBwYXR0ZXJuYCBwcm9wZXJ0eSwgYW5kIHByb2R1Y2VzIHR3byBhcnRpZmFjdHM6IHNvbWUgYGRhdGFgXG5yZWxhdGVkIHRvIHRoZSBgcm91dGVgLCBhbmQgYSBgdGFpbGAgdGhhdCBjb250YWlucyB0aGUgcmVzdCBvZiB0aGUgYHJvdXRlYCB0aGF0XG5kaWQgbm90IG1hdGNoLlxuXG5IZXJlIGlzIGEgYmFzaWMgZXhhbXBsZSwgd2hlbiB1c2VkIHdpdGggYGFwcC1sb2NhdGlvbmA6XG5cbiAgICA8YXBwLWxvY2F0aW9uIHJvdXRlPVwie3tyb3V0ZX19XCI+PC9hcHAtbG9jYXRpb24+XG4gICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cInt7cm91dGV9fVwiXG4gICAgICAgIHBhdHRlcm49XCIvOnBhZ2VcIlxuICAgICAgICBkYXRhPVwie3tkYXRhfX1cIlxuICAgICAgICB0YWlsPVwie3t0YWlsfX1cIj5cbiAgICA8L2FwcC1yb3V0ZT5cblxuSW4gdGhlIGFib3ZlIGV4YW1wbGUsIHRoZSBgYXBwLWxvY2F0aW9uYCBwcm9kdWNlcyBhIGByb3V0ZWAgdmFsdWUuIFRoZW4sIHRoZVxuYHJvdXRlLnBhdGhgIHByb3BlcnR5IGlzIG1hdGNoZWQgYnkgY29tcGFyaW5nIGl0IHRvIHRoZSBgcGF0dGVybmAgcHJvcGVydHkuIElmXG50aGUgYHBhdHRlcm5gIHByb3BlcnR5IG1hdGNoZXMgYHJvdXRlLnBhdGhgLCB0aGUgYGFwcC1yb3V0ZWAgd2lsbCBzZXQgb3IgdXBkYXRlXG5pdHMgYGRhdGFgIHByb3BlcnR5IHdpdGggYW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgY29ycmVzcG9uZCB0byB0aGUgcGFyYW1ldGVyc1xuaW4gYHBhdHRlcm5gLiBTbywgaW4gdGhlIGFib3ZlIGV4YW1wbGUsIGlmIGByb3V0ZS5wYXRoYCB3YXMgYCcvYWJvdXQnYCwgdGhlXG52YWx1ZSBvZiBgZGF0YWAgd291bGQgYmUgYHtcInBhZ2VcIjogXCJhYm91dFwifWAuXG5cblRoZSBgdGFpbGAgcHJvcGVydHkgcmVwcmVzZW50cyB0aGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIHJvdXRlIHN0YXRlIGFmdGVyIHRoZVxuYHBhdHRlcm5gIGhhcyBiZWVuIGFwcGxpZWQgdG8gYSBtYXRjaGluZyBgcm91dGVgLlxuXG5IZXJlIGlzIGFub3RoZXIgZXhhbXBsZSwgd2hlcmUgYHRhaWxgIGlzIHVzZWQ6XG5cbiAgICA8YXBwLWxvY2F0aW9uIHJvdXRlPVwie3tyb3V0ZX19XCI+PC9hcHAtbG9jYXRpb24+XG4gICAgPGFwcC1yb3V0ZVxuICAgICAgICByb3V0ZT1cInt7cm91dGV9fVwiXG4gICAgICAgIHBhdHRlcm49XCIvOnBhZ2VcIlxuICAgICAgICBkYXRhPVwie3tyb3V0ZURhdGF9fVwiXG4gICAgICAgIHRhaWw9XCJ7e3N1YnJvdXRlfX1cIj5cbiAgICA8L2FwcC1yb3V0ZT5cbiAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tzdWJyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86aWRcIlxuICAgICAgICBkYXRhPVwie3tzdWJyb3V0ZURhdGF9fVwiPlxuICAgIDwvYXBwLXJvdXRlPlxuXG5JbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlcmUgYXJlIHR3byBgYXBwLXJvdXRlYCBlbGVtZW50cy4gVGhlIGZpcnN0XG5gYXBwLXJvdXRlYCBjb25zdW1lcyBhIGByb3V0ZWAuIFdoZW4gdGhlIGByb3V0ZWAgaXMgbWF0Y2hlZCwgdGhlIGZpcnN0XG5gYXBwLXJvdXRlYCBhbHNvIHByb2R1Y2VzIGByb3V0ZURhdGFgIGZyb20gaXRzIGBkYXRhYCwgYW5kIGBzdWJyb3V0ZWAgZnJvbVxuaXRzIGB0YWlsYC4gVGhlIHNlY29uZCBgYXBwLXJvdXRlYCBjb25zdW1lcyB0aGUgYHN1YnJvdXRlYCwgYW5kIHdoZW4gaXRcbm1hdGNoZXMsIGl0IHByb2R1Y2VzIGFuIG9iamVjdCBjYWxsZWQgYHN1YnJvdXRlRGF0YWAgZnJvbSBpdHMgYGRhdGFgLlxuXG5Tbywgd2hlbiBgcm91dGUucGF0aGAgaXMgYCcvYWJvdXQnYCwgdGhlIGByb3V0ZURhdGFgIG9iamVjdCB3aWxsIGxvb2sgbGlrZVxudGhpczogYHsgcGFnZTogJ2Fib3V0JyB9YFxuXG5BbmQgYHN1YnJvdXRlRGF0YWAgd2lsbCBiZSBudWxsLiBIb3dldmVyLCBpZiBgcm91dGUucGF0aGAgY2hhbmdlcyB0b1xuYCcvYXJ0aWNsZS8xMjMnYCwgdGhlIGByb3V0ZURhdGFgIG9iamVjdCB3aWxsIGxvb2sgbGlrZSB0aGlzOlxuYHsgcGFnZTogJ2FydGljbGUnIH1gXG5cbkFuZCB0aGUgYHN1YnJvdXRlRGF0YWAgd2lsbCBsb29rIGxpa2UgdGhpczogYHsgaWQ6ICcxMjMnIH1gXG5cbmBhcHAtcm91dGVgIGlzIHJlc3BvbnNpdmUgdG8gYmktZGlyZWN0aW9uYWwgY2hhbmdlcyB0byB0aGUgYGRhdGFgIG9iamVjdHNcbnRoZXkgcHJvZHVjZS4gU28sIGlmIGByb3V0ZURhdGEucGFnZWAgY2hhbmdlZCBmcm9tIGAnYXJ0aWNsZSdgIHRvIGAnYWJvdXQnYCxcbnRoZSBgYXBwLXJvdXRlYCB3aWxsIHVwZGF0ZSBgcm91dGUucGF0aGAuIFRoaXMgaW4tdHVybiB3aWxsIHVwZGF0ZSB0aGVcbmBhcHAtbG9jYXRpb25gLCBhbmQgY2F1c2UgdGhlIGdsb2JhbCBsb2NhdGlvbiBiYXIgdG8gY2hhbmdlIGl0cyB2YWx1ZS5cblxuQGVsZW1lbnQgYXBwLXJvdXRlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBkZW1vIGRlbW8vZGF0YS1sb2FkaW5nLWRlbW8uaHRtbFxuQGRlbW8gZGVtby9zaW1wbGUtZGVtby5odG1sXG4qL1xuUG9seW1lcih7XG4gIGlzOiAnYXBwLXJvdXRlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBjb21wb25lbnQgbWFuYWdlZCBieSB0aGlzIGVsZW1lbnQuXG4gICAgICovXG4gICAgcm91dGU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhdHRlcm4gb2Ygc2xhc2gtc2VwYXJhdGVkIHNlZ21lbnRzIHRvIG1hdGNoIGByb3V0ZS5wYXRoYCBhZ2FpbnN0LlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUgdGhlIHBhdHRlcm4gXCIvZm9vXCIgd2lsbCBtYXRjaCBcIi9mb29cIiBvciBcIi9mb28vYmFyXCJcbiAgICAgKiBidXQgbm90IFwiL2Zvb2JhclwiLlxuICAgICAqXG4gICAgICogUGF0aCBzZWdtZW50cyBsaWtlIGAvOm5hbWVkYCBhcmUgbWFwcGVkIHRvIHByb3BlcnRpZXMgb24gdGhlIGBkYXRhYFxuICAgICAqIG9iamVjdC5cbiAgICAgKi9cbiAgICBwYXR0ZXJuOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJhbWV0ZXJpemVkIHZhbHVlcyB0aGF0IGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgcm91dGUgYXNcbiAgICAgKiBkZXNjcmliZWQgYnkgYHBhdHRlcm5gLlxuICAgICAqL1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXV0byBhY3RpdmF0ZSByb3V0ZSBpZiBwYXRoIGVtcHR5XG4gICAgICovXG4gICAgYXV0b0FjdGl2YXRlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICBfcXVlcnlQYXJhbXNVcGRhdGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgez9PYmplY3R9XG4gICAgICovXG4gICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQgb2YgYHJvdXRlLnBhdGhgIE5PVCBjb25zdW1lZCBieSBgcGF0dGVybmAuXG4gICAgICovXG4gICAgdGFpbDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICAgIF9fcXVlcnlQYXJhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJvdXRlIGlzIGFjdGl2ZS4gVHJ1ZSBpZiBgcm91dGUucGF0aGAgbWF0Y2hlcyB0aGVcbiAgICAgKiBgcGF0dGVybmAsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgez9zdHJpbmd9XG4gICAgICovXG4gICAgX21hdGNoZWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ19fdHJ5VG9NYXRjaChyb3V0ZS5wYXRoLCBwYXR0ZXJuKScsXG4gICAgJ19fdXBkYXRlUGF0aE9uRGF0YUNoYW5nZShkYXRhLiopJyxcbiAgICAnX190YWlsUGF0aENoYW5nZWQodGFpbC5wYXRoKScsXG4gICAgJ19fcm91dGVRdWVyeVBhcmFtc0NoYW5nZWQocm91dGUuX19xdWVyeVBhcmFtcyknLFxuICAgICdfX3RhaWxRdWVyeVBhcmFtc0NoYW5nZWQodGFpbC5fX3F1ZXJ5UGFyYW1zKScsXG4gICAgJ19fcXVlcnlQYXJhbXNDaGFuZ2VkKHF1ZXJ5UGFyYW1zLiopJ1xuICBdLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlua1BhdGhzKCdyb3V0ZS5fX3F1ZXJ5UGFyYW1zJywgJ3RhaWwuX19xdWVyeVBhcmFtcycpO1xuICAgIHRoaXMubGlua1BhdGhzKCd0YWlsLl9fcXVlcnlQYXJhbXMnLCAncm91dGUuX19xdWVyeVBhcmFtcycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWFsIHdpdGggdGhlIHF1ZXJ5IHBhcmFtcyBvYmplY3QgYmVpbmcgYXNzaWduZWQgdG8gd2hvbGVzYWxlLlxuICAgKi9cbiAgX19yb3V0ZVF1ZXJ5UGFyYW1zQ2hhbmdlZDogZnVuY3Rpb24ocXVlcnlQYXJhbXMpIHtcbiAgICBpZiAocXVlcnlQYXJhbXMgJiYgdGhpcy50YWlsKSB7XG4gICAgICBpZiAodGhpcy50YWlsLl9fcXVlcnlQYXJhbXMgIT09IHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRoaXMuc2V0KCd0YWlsLl9fcXVlcnlQYXJhbXMnLCBxdWVyeVBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5hY3RpdmUgfHwgdGhpcy5fcXVlcnlQYXJhbXNVcGRhdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgcXVlcnlQYXJhbXMgYW5kIHRyYWNrIHdoZXRoZXIgdGhlcmUgYXJlIGFueSBkaWZmZXJlbmNlcyBjb21wYXJlZFxuICAgICAgLy8gdG8gdGhlIGV4aXN0aW5nIHF1ZXJ5IHBhcmFtcy5cbiAgICAgIHZhciBjb3B5T2ZRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgdmFyIGFueXRoaW5nQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgZm9yICh2YXIga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGNvcHlPZlF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICBpZiAoYW55dGhpbmdDaGFuZ2VkIHx8ICF0aGlzLnF1ZXJ5UGFyYW1zIHx8XG4gICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldICE9PSB0aGlzLnF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICBhbnl0aGluZ0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBOZWVkIHRvIGNoZWNrIHdoZXRoZXIgYW55IGtleXMgd2VyZSBkZWxldGVkXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5xdWVyeVBhcmFtcykge1xuICAgICAgICBpZiAoYW55dGhpbmdDaGFuZ2VkIHx8ICEoa2V5IGluIHF1ZXJ5UGFyYW1zKSkge1xuICAgICAgICAgIGFueXRoaW5nQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbnl0aGluZ0NoYW5nZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fcXVlcnlQYXJhbXNVcGRhdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNldCgncXVlcnlQYXJhbXMnLCBjb3B5T2ZRdWVyeVBhcmFtcyk7XG4gICAgICB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIF9fdGFpbFF1ZXJ5UGFyYW1zQ2hhbmdlZDogZnVuY3Rpb24ocXVlcnlQYXJhbXMpIHtcbiAgICBpZiAocXVlcnlQYXJhbXMgJiYgdGhpcy5yb3V0ZSAmJiB0aGlzLnJvdXRlLl9fcXVlcnlQYXJhbXMgIT0gcXVlcnlQYXJhbXMpIHtcbiAgICAgIHRoaXMuc2V0KCdyb3V0ZS5fX3F1ZXJ5UGFyYW1zJywgcXVlcnlQYXJhbXMpO1xuICAgIH1cbiAgfSxcblxuICBfX3F1ZXJ5UGFyYW1zQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlcykge1xuICAgIGlmICghdGhpcy5hY3RpdmUgfHwgdGhpcy5fcXVlcnlQYXJhbXNVcGRhdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0KCdyb3V0ZS5fXycgKyBjaGFuZ2VzLnBhdGgsIGNoYW5nZXMudmFsdWUpO1xuICB9LFxuXG4gIF9fcmVzZXRQcm9wZXJ0aWVzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMuX21hdGNoZWQgPSBudWxsO1xuICB9LFxuXG4gIF9fdHJ5VG9NYXRjaDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSB0aGlzLnJvdXRlLnBhdGg7XG4gICAgdmFyIHBhdHRlcm4gPSB0aGlzLnBhdHRlcm47XG5cbiAgICBpZiAodGhpcy5hdXRvQWN0aXZhdGUgJiYgcGF0aCA9PT0gJycpIHtcbiAgICAgIHBhdGggPSAnLyc7XG4gICAgfVxuXG4gICAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICB0aGlzLl9fcmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlbWFpbmluZ1BpZWNlcyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICB2YXIgcGF0dGVyblBpZWNlcyA9IHBhdHRlcm4uc3BsaXQoJy8nKTtcblxuICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgdmFyIG5hbWVkTWF0Y2hlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGF0dGVyblBpZWNlID0gcGF0dGVyblBpZWNlc1tpXTtcbiAgICAgIGlmICghcGF0dGVyblBpZWNlICYmIHBhdHRlcm5QaWVjZSAhPT0gJycpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgcGF0aFBpZWNlID0gcmVtYWluaW5nUGllY2VzLnNoaWZ0KCk7XG5cbiAgICAgIC8vIFdlIGRvbid0IG1hdGNoIHRoaXMgcGF0aC5cbiAgICAgIGlmICghcGF0aFBpZWNlICYmIHBhdGhQaWVjZSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5fX3Jlc2V0UHJvcGVydGllcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtYXRjaGVkLnB1c2gocGF0aFBpZWNlKTtcblxuICAgICAgaWYgKHBhdHRlcm5QaWVjZS5jaGFyQXQoMCkgPT0gJzonKSB7XG4gICAgICAgIG5hbWVkTWF0Y2hlc1twYXR0ZXJuUGllY2Uuc2xpY2UoMSldID0gcGF0aFBpZWNlO1xuICAgICAgfSBlbHNlIGlmIChwYXR0ZXJuUGllY2UgIT09IHBhdGhQaWVjZSkge1xuICAgICAgICB0aGlzLl9fcmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXRjaGVkID0gbWF0Y2hlZC5qb2luKCcvJyk7XG5cbiAgICAvLyBQcm9wZXJ0aWVzIHRoYXQgbXVzdCBiZSB1cGRhdGVkIGF0b21pY2FsbHkuXG4gICAgdmFyIHByb3BlcnR5VXBkYXRlcyA9IHt9O1xuXG4gICAgLy8gdGhpcy5hY3RpdmVcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICBwcm9wZXJ0eVVwZGF0ZXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnRhaWxcbiAgICB2YXIgdGFpbFByZWZpeCA9IHRoaXMucm91dGUucHJlZml4ICsgdGhpcy5fbWF0Y2hlZDtcbiAgICB2YXIgdGFpbFBhdGggPSByZW1haW5pbmdQaWVjZXMuam9pbignLycpO1xuICAgIGlmIChyZW1haW5pbmdQaWVjZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGFpbFBhdGggPSAnLycgKyB0YWlsUGF0aDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRhaWwgfHwgdGhpcy50YWlsLnByZWZpeCAhPT0gdGFpbFByZWZpeCB8fFxuICAgICAgICB0aGlzLnRhaWwucGF0aCAhPT0gdGFpbFBhdGgpIHtcbiAgICAgIHByb3BlcnR5VXBkYXRlcy50YWlsID0ge1xuICAgICAgICBwcmVmaXg6IHRhaWxQcmVmaXgsXG4gICAgICAgIHBhdGg6IHRhaWxQYXRoLFxuICAgICAgICBfX3F1ZXJ5UGFyYW1zOiB0aGlzLnJvdXRlLl9fcXVlcnlQYXJhbXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdGhpcy5kYXRhXG4gICAgcHJvcGVydHlVcGRhdGVzLmRhdGEgPSBuYW1lZE1hdGNoZXM7XG4gICAgdGhpcy5fZGF0YUluVXJsID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIG5hbWVkTWF0Y2hlcykge1xuICAgICAgdGhpcy5fZGF0YUluVXJsW2tleV0gPSBuYW1lZE1hdGNoZXNba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgICAvLyBhdG9taWMgdXBkYXRlXG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcGVydHlVcGRhdGVzLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX3NldE11bHRpKHByb3BlcnR5VXBkYXRlcyk7XG4gICAgfVxuICB9LFxuXG4gIF9fdGFpbFBhdGhDaGFuZ2VkOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGFpbFBhdGggPSBwYXRoO1xuICAgIHZhciBuZXdQYXRoID0gdGhpcy5fbWF0Y2hlZDtcbiAgICBpZiAodGFpbFBhdGgpIHtcbiAgICAgIGlmICh0YWlsUGF0aC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICB0YWlsUGF0aCA9ICcvJyArIHRhaWxQYXRoO1xuICAgICAgfVxuICAgICAgbmV3UGF0aCArPSB0YWlsUGF0aDtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3JvdXRlLnBhdGgnLCBuZXdQYXRoKTtcbiAgfSxcblxuICBfX3VwZGF0ZVBhdGhPbkRhdGFDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5yb3V0ZSB8fCAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5ld1BhdGggPSB0aGlzLl9fZ2V0TGluayh7fSk7XG4gICAgdmFyIG9sZFBhdGggPSB0aGlzLl9fZ2V0TGluayh0aGlzLl9kYXRhSW5VcmwpO1xuICAgIGlmIChuZXdQYXRoID09PSBvbGRQYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0KCdyb3V0ZS5wYXRoJywgbmV3UGF0aCk7XG4gIH0sXG5cbiAgX19nZXRMaW5rOiBmdW5jdGlvbihvdmVycmlkZVZhbHVlcykge1xuICAgIHZhciB2YWx1ZXMgPSB7dGFpbDogbnVsbH07XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgdmFsdWVzW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG92ZXJyaWRlVmFsdWVzKSB7XG4gICAgICB2YWx1ZXNba2V5XSA9IG92ZXJyaWRlVmFsdWVzW2tleV07XG4gICAgfVxuICAgIHZhciBwYXR0ZXJuUGllY2VzID0gdGhpcy5wYXR0ZXJuLnNwbGl0KCcvJyk7XG4gICAgdmFyIGludGVycCA9IHBhdHRlcm5QaWVjZXMubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWVbMF0gPT0gJzonKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVzW3ZhbHVlLnNsaWNlKDEpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCB0aGlzKTtcbiAgICBpZiAodmFsdWVzLnRhaWwgJiYgdmFsdWVzLnRhaWwucGF0aCkge1xuICAgICAgaWYgKGludGVycC5sZW5ndGggPiAwICYmIHZhbHVlcy50YWlsLnBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgICAgaW50ZXJwLnB1c2godmFsdWVzLnRhaWwucGF0aC5zbGljZSgxKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcnAucHVzaCh2YWx1ZXMudGFpbC5wYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGludGVycC5qb2luKCcvJyk7XG4gIH0sXG5cbiAgX19zZXRNdWx0aTogZnVuY3Rpb24oc2V0T2JqKSB7XG4gICAgLy8gSEFDSyhyaWN0aWMpOiBza2lydGluZyBhcm91bmQgMS4wJ3MgbGFjayBvZiBhIHNldE11bHRpIGJ5IHBva2luZyBhdFxuICAgIC8vICAgICBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZXMuIEkgd291bGQgbm90IGFkdmlzZSB0aGF0IHlvdSBjb3B5IHRoaXNcbiAgICAvLyAgICAgZXhhbXBsZS5cbiAgICAvL1xuICAgIC8vICAgICBJbiB0aGUgZnV0dXJlIHRoaXMgd2lsbCBiZSBhIGZlYXR1cmUgb2YgUG9seW1lciBpdHNlbGYuXG4gICAgLy8gICAgIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvcG9seW1lci9pc3N1ZXMvMzY0MFxuICAgIC8vXG4gICAgLy8gICAgIEhhY2tpbmcgYXJvdW5kIHdpdGggcHJpdmF0ZSBtZXRob2RzIGxpa2UgdGhpcyBpcyBqdWdnbGluZyBmb290Z3VucyxcbiAgICAvLyAgICAgYW5kIGlzIGxpa2VseSB0byBoYXZlIHVuZXhwZWN0ZWQgYW5kIHVuc3VwcG9ydGVkIHJvdWdoIGVkZ2VzLlxuICAgIC8vXG4gICAgLy8gICAgIEJlIHllIHNvIHdhcm5lZC5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzZXRPYmopIHtcbiAgICAgIHRoaXMuX3Byb3BlcnR5U2V0dGVyKHByb3BlcnR5LCBzZXRPYmpbcHJvcGVydHldKTtcbiAgICB9XG4gICAgLy8gbm90aWZ5IGluIGEgc3BlY2lmaWMgb3JkZXJcbiAgICBpZiAoc2V0T2JqLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fcGF0aEVmZmVjdG9yKCdkYXRhJywgdGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZSgnZGF0YScpO1xuICAgIH1cbiAgICBpZiAoc2V0T2JqLmFjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoRWZmZWN0b3IoJ2FjdGl2ZScsIHRoaXMuYWN0aXZlKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGlmIChzZXRPYmoudGFpbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoRWZmZWN0b3IoJ3RhaWwnLCB0aGlzLnRhaWwpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCd0YWlsJyk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBRUE7QUFBQTs7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBOEJBO0FBQ0E7QUE3QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUF0RkE7QUE0RkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWxWQTs7OztBIiwic291cmNlUm9vdCI6IiJ9