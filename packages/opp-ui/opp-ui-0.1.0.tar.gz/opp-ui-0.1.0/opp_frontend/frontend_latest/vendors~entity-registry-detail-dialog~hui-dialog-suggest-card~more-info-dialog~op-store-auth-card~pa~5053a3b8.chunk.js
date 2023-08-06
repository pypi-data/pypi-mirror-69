(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-registry-detail-dialog~hui-dialog-suggest-card~more-info-dialog~op-store-auth-card~pa~5053a3b8"],{

/***/ "./node_modules/@polymer/iron-image/iron-image.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-image/iron-image.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/




/**
`iron-image` is an element for displaying an image that provides useful sizing and
preloading options not found on the standard `<img>` tag.

The `sizing` option allows the image to be either cropped (`cover`) or
letterboxed (`contain`) to fill a fixed user-size placed on the element.

The `preload` option prevents the browser from rendering the image until the
image is fully loaded.  In the interim, either the element's CSS `background-color`
can be be used as the placeholder, or the `placeholder` property can be
set to a URL (preferably a data-URI, for instant rendering) for an
placeholder image.

The `fade` option (only valid when `preload` is set) will cause the placeholder
image/color to be faded out once the image is rendered.

Examples:

  Basically identical to `<img src="...">` tag:

    <iron-image src="http://lorempixel.com/400/400"></iron-image>

  Will letterbox the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="contain"
      src="http://lorempixel.com/600/400"></iron-image>

  Will crop the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="cover"
      src="http://lorempixel.com/600/400"></iron-image>

  Will show light-gray background until the image loads:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will show a base-64 encoded placeholder image until the image loads:

    <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will fade the light-gray background out once the image is loaded:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>

Custom property | Description | Default
----------------|-------------|----------
`--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
`--iron-image-width` | Sets the width of the wrapped image | `auto`
`--iron-image-height` | Sets the height of the wrapped image | `auto`

@group Iron Elements
@element iron-image
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,
  is: 'iron-image',
  properties: {
    /**
     * The URL of an image.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * A short text alternative for the image.
     */
    alt: {
      type: String,
      value: null
    },

    /**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: {
      type: String,
      value: null
    },

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: {
      type: Boolean,
      value: false
    },

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: {
      type: String,
      value: 'center'
    },

    /**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */
    preload: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholder: {
      type: String,
      value: null,
      observer: '_placeholderChanged'
    },

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */
    loading: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */
    width: {
      observer: '_widthChanged',
      type: Number,
      value: null
    },

    /**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: {
      observer: '_heightChanged',
      type: Number,
      value: null
    }
  },
  observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],
  created: function () {
    this._resolvedSrc = '';
  },
  _imgOnLoad: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);

    this._setLoaded(true);

    this._setError(false);
  },
  _imgOnError: function () {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);

    this._setLoaded(false);

    this._setError(true);
  },
  _computePlaceholderHidden: function () {
    return !this.preload || !this.fade && !this.loading && this.loaded;
  },
  _computePlaceholderClassName: function () {
    return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
  },
  _computeImgDivHidden: function () {
    return !this.sizing;
  },
  _computeImgDivARIAHidden: function () {
    return this.alt === '' ? 'true' : undefined;
  },
  _computeImgDivARIALabel: function () {
    if (this.alt !== null) {
      return this.alt;
    } // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.


    if (this.src === '') {
      return '';
    } // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.


    var resolved = this._resolveSrc(this.src); // Remove query parts, get file name.


    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },
  _computeImgHidden: function () {
    return !!this.sizing;
  },
  _widthChanged: function () {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },
  _heightChanged: function () {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },
  _loadStateObserver: function (src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);

    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);

      this._setLoaded(false);

      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

      this._setLoading(true);

      this._setLoaded(false);

      this._setError(false);
    }
  },
  _placeholderChanged: function () {
    this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },
  _transformChanged: function () {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;
    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;
    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';
    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
  },
  _resolveSrc: function (testSrc) {
    var resolved = Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__["resolveUrl"])(testSrc, this.$.baseURIAnchor.href); // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.

    if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
    }

    return resolved;
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZ35odWktZGlhbG9nLXN1Z2dlc3QtY2FyZH5tb3JlLWluZm8tZGlhbG9nfm9wLXN0b3JlLWF1dGgtY2FyZH5wYX41MDUzYTNiOC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWltYWdlL2lyb24taW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge3Jlc29sdmVVcmx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3Jlc29sdmUtdXJsLmpzJztcblxuLyoqXG5gaXJvbi1pbWFnZWAgaXMgYW4gZWxlbWVudCBmb3IgZGlzcGxheWluZyBhbiBpbWFnZSB0aGF0IHByb3ZpZGVzIHVzZWZ1bCBzaXppbmcgYW5kXG5wcmVsb2FkaW5nIG9wdGlvbnMgbm90IGZvdW5kIG9uIHRoZSBzdGFuZGFyZCBgPGltZz5gIHRhZy5cblxuVGhlIGBzaXppbmdgIG9wdGlvbiBhbGxvd3MgdGhlIGltYWdlIHRvIGJlIGVpdGhlciBjcm9wcGVkIChgY292ZXJgKSBvclxubGV0dGVyYm94ZWQgKGBjb250YWluYCkgdG8gZmlsbCBhIGZpeGVkIHVzZXItc2l6ZSBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG5cblRoZSBgcHJlbG9hZGAgb3B0aW9uIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVuZGVyaW5nIHRoZSBpbWFnZSB1bnRpbCB0aGVcbmltYWdlIGlzIGZ1bGx5IGxvYWRlZC4gIEluIHRoZSBpbnRlcmltLCBlaXRoZXIgdGhlIGVsZW1lbnQncyBDU1MgYGJhY2tncm91bmQtY29sb3JgXG5jYW4gYmUgYmUgdXNlZCBhcyB0aGUgcGxhY2Vob2xkZXIsIG9yIHRoZSBgcGxhY2Vob2xkZXJgIHByb3BlcnR5IGNhbiBiZVxuc2V0IHRvIGEgVVJMIChwcmVmZXJhYmx5IGEgZGF0YS1VUkksIGZvciBpbnN0YW50IHJlbmRlcmluZykgZm9yIGFuXG5wbGFjZWhvbGRlciBpbWFnZS5cblxuVGhlIGBmYWRlYCBvcHRpb24gKG9ubHkgdmFsaWQgd2hlbiBgcHJlbG9hZGAgaXMgc2V0KSB3aWxsIGNhdXNlIHRoZSBwbGFjZWhvbGRlclxuaW1hZ2UvY29sb3IgdG8gYmUgZmFkZWQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIHJlbmRlcmVkLlxuXG5FeGFtcGxlczpcblxuICBCYXNpY2FsbHkgaWRlbnRpY2FsIHRvIGA8aW1nIHNyYz1cIi4uLlwiPmAgdGFnOlxuXG4gICAgPGlyb24taW1hZ2Ugc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBsZXR0ZXJib3ggdGhlIGltYWdlIHRvIGZpdDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDtcIiBzaXppbmc9XCJjb250YWluXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgY3JvcCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvdmVyXCJcbiAgICAgIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBsaWdodC1ncmF5IGJhY2tncm91bmQgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIHNob3cgYSBiYXNlLTY0IGVuY29kZWQgcGxhY2Vob2xkZXIgaW1hZ2UgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHBsYWNlaG9sZGVyPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LC4uLlwiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBmYWRlIHRoZSBsaWdodC1ncmF5IGJhY2tncm91bmQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZDpcblxuICAgIDxpcm9uLWltYWdlIHN0eWxlPVwid2lkdGg6NDAwcHg7IGhlaWdodDo0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1wiXG4gICAgICBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQgZmFkZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvICNwbGFjZWhvbGRlciB8IGB7fWBcbmAtLWlyb24taW1hZ2Utd2lkdGhgIHwgU2V0cyB0aGUgd2lkdGggb2YgdGhlIHdyYXBwZWQgaW1hZ2UgfCBgYXV0b2BcbmAtLWlyb24taW1hZ2UtaGVpZ2h0YCB8IFNldHMgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pbWFnZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAjYmFzZVVSSUFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNzaXplZEltZ0RpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pbWFnZS13aWR0aCwgYXV0byk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taXJvbi1pbWFnZS1oZWlnaHQsIGF1dG8pO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2l6aW5nXSkgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgIEBhcHBseSAtLWlyb24taW1hZ2UtcGxhY2Vob2xkZXI7XG4gICAgICB9XG5cbiAgICAgICNwbGFjZWhvbGRlci5mYWRlZC1vdXQge1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8YSBpZD1cImJhc2VVUklBbmNob3JcIiBocmVmPVwiI1wiPjwvYT5cbiAgICA8ZGl2IGlkPVwic2l6ZWRJbWdEaXZcIiByb2xlPVwiaW1nXCIgaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdEaXZIaWRkZW4oc2l6aW5nKV1dXCIgYXJpYS1oaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkFSSUFIaWRkZW4oYWx0KV1dXCIgYXJpYS1sYWJlbCQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUxhYmVsKGFsdCwgc3JjKV1dXCI+PC9kaXY+XG4gICAgPGltZyBpZD1cImltZ1wiIGFsdCQ9XCJbW2FsdF1dXCIgaGlkZGVuJD1cIltbX2NvbXB1dGVJbWdIaWRkZW4oc2l6aW5nKV1dXCIgY3Jvc3NvcmlnaW4kPVwiW1tjcm9zc29yaWdpbl1dXCIgb24tbG9hZD1cIl9pbWdPbkxvYWRcIiBvbi1lcnJvcj1cIl9pbWdPbkVycm9yXCI+XG4gICAgPGRpdiBpZD1cInBsYWNlaG9sZGVyXCIgaGlkZGVuJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckhpZGRlbihwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIiBjbGFzcyQ9XCJbW19jb21wdXRlUGxhY2Vob2xkZXJDbGFzc05hbWUocHJlbG9hZCwgZmFkZSwgbG9hZGluZywgbG9hZGVkKV1dXCI+PC9kaXY+XG5gLFxuXG4gIGlzOiAnaXJvbi1pbWFnZScsXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgYW4gaW1hZ2UuXG4gICAgICovXG4gICAgc3JjOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogQSBzaG9ydCB0ZXh0IGFsdGVybmF0aXZlIGZvciB0aGUgaW1hZ2UuXG4gICAgICovXG4gICAgYWx0OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBDT1JTIGVuYWJsZWQgaW1hZ2VzIHN1cHBvcnQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9DT1JTX2VuYWJsZWRfaW1hZ2VcbiAgICAgKi9cbiAgICBjcm9zc29yaWdpbjoge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaW1hZ2UgaXMgcHJldmVudGVkIGZyb20gbG9hZGluZyBhbmQgYW55IHBsYWNlaG9sZGVyIGlzXG4gICAgICogc2hvd24uICBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBhIGJpbmRpbmcgdG8gdGhlIHNyYyBwcm9wZXJ0eSBpcyBrbm93biB0b1xuICAgICAqIGJlIGludmFsaWQsIHRvIHByZXZlbnQgNDA0IHJlcXVlc3RzLlxuICAgICAqL1xuICAgIHByZXZlbnRMb2FkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgaW1hZ2UuICBWYWxpZCB2YWx1ZXMgYXJlIGBjb250YWluYCAoZnVsbFxuICAgICAqIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgaXMgY29udGFpbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBhbmRcbiAgICAgKiBsZXR0ZXJib3hlZCkgb3IgYGNvdmVyYCAoaW1hZ2UgaXMgY3JvcHBlZCBpbiBvcmRlciB0byBmdWxseSBjb3ZlciB0aGVcbiAgICAgKiBib3VuZHMgb2YgdGhlIGVsZW1lbnQpLCBvciBgbnVsbGAgKGRlZmF1bHQ6IGltYWdlIHRha2VzIG5hdHVyYWwgc2l6ZSkuXG4gICAgICovXG4gICAgc2l6aW5nOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbCwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYSBzaXppbmcgb3B0aW9uIGlzIHVzZWQgKGBjb3ZlcmAgb3IgYGNvbnRhaW5gKSwgdGhpcyBkZXRlcm1pbmVzXG4gICAgICogaG93IHRoZSBpbWFnZSBpcyBhbGlnbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBib3VuZHMuXG4gICAgICovXG4gICAgcG9zaXRpb246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnY2VudGVyJ30sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgYHNyY2AgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGVcbiAgICAgKiBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBuZXcgaW1hZ2UgaGFzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBwcmVsb2FkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlXG4gICAgICogaGFzIGxvYWRlZC4gIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50XG4gICAgICogcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbCwgb2JzZXJ2ZXI6ICdfcGxhY2Vob2xkZXJDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGBwcmVsb2FkYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlIGltYWdlIHRvXG4gICAgICogZmFkZSBpbnRvIHBsYWNlLlxuICAgICAqL1xuICAgIGZhZGU6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgaXMgdHJ1ZSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAgICovXG4gICAgbG9hZGVkOiB7bm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZSwgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IHRyYWNrcyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgaW1hZ2Ugd2hlbiB0aGVcbiAgICAgKiBgcHJlbG9hZGAgb3B0aW9uIGlzIHVzZWQuXG4gICAgICovXG4gICAgbG9hZGluZzoge25vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWUsIHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBzZXQgYHNyY2AgZmFpbGVkIHRvIGxvYWQuXG4gICAgICovXG4gICAgZXJyb3I6IHtub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB3aWR0aCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc29cbiAgICAgKiBiZSBzZXQgdmlhIENTUy5cbiAgICAgKi9cbiAgICB3aWR0aDoge29ic2VydmVyOiAnX3dpZHRoQ2hhbmdlZCcsIHR5cGU6IE51bWJlciwgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSBoZWlnaHQgb2YgaW1hZ2UgKGUuZy4gdmlhIGJpbmRpbmcpOyBzaXplIG1heSBhbHNvXG4gICAgICogYmUgc2V0IHZpYSBDU1MuXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIGhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBoZWlnaHQ6IHtvYnNlcnZlcjogJ19oZWlnaHRDaGFuZ2VkJywgdHlwZTogTnVtYmVyLCB2YWx1ZTogbnVsbH0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ190cmFuc2Zvcm1DaGFuZ2VkKHNpemluZywgcG9zaXRpb24pJyxcbiAgICAnX2xvYWRTdGF0ZU9ic2VydmVyKHNyYywgcHJldmVudExvYWQpJ1xuICBdLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gJyc7XG4gIH0sXG5cbiAgX2ltZ09uTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuJC5pbWcuc3JjICE9PSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldExvYWRpbmcoZmFsc2UpO1xuICAgIHRoaXMuX3NldExvYWRlZCh0cnVlKTtcbiAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gIH0sXG5cbiAgX2ltZ09uRXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLiQuaW1nLnNyYyAhPT0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiQuaW1nLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXG4gICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICB0aGlzLl9zZXRFcnJvcih0cnVlKTtcbiAgfSxcblxuICBfY29tcHV0ZVBsYWNlaG9sZGVySGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMucHJlbG9hZCB8fCAoIXRoaXMuZmFkZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMubG9hZGVkKTtcbiAgfSxcblxuICBfY29tcHV0ZVBsYWNlaG9sZGVyQ2xhc3NOYW1lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJlbG9hZCAmJiB0aGlzLmZhZGUgJiYgIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCkgP1xuICAgICAgICAnZmFkZWQtb3V0JyA6XG4gICAgICAgICcnO1xuICB9LFxuXG4gIF9jb21wdXRlSW1nRGl2SGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIXRoaXMuc2l6aW5nO1xuICB9LFxuXG4gIF9jb21wdXRlSW1nRGl2QVJJQUhpZGRlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWx0ID09PSAnJyA/ICd0cnVlJyA6IHVuZGVmaW5lZDtcbiAgfSxcblxuICBfY29tcHV0ZUltZ0RpdkFSSUFMYWJlbDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWx0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbHQ7XG4gICAgfVxuXG4gICAgLy8gUG9seW1lci5SZXNvbHZlVXJsLnJlc29sdmVVcmwgd2lsbCByZXNvbHZlICcnIHJlbGF0aXZlIHRvIGEgVVJMIHggdG9cbiAgICAvLyB0aGF0IFVSTCB4LCBidXQgJycgaXMgdGhlIGRlZmF1bHQgZm9yIHNyYy5cbiAgICBpZiAodGhpcy5zcmMgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gTk9URTogVXNlIG9mIGBVUkxgIHdhcyByZW1vdmVkIGhlcmUgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydFxuICAgIC8vIGNvbnN0cnVjdGluZyBpdC4gSWYgdGhpcyBlbmRzIHVwIGJlaW5nIHByb2JsZW1hdGljLCB3ZSBzaG91bGRcbiAgICAvLyBjb25zaWRlciByZXZlcnRpbmcgYW5kIGFkZGluZyB0aGUgVVJMIHBvbHlmaWxsIGFzIGEgZGV2IGRlcGVuZGVuY3kuXG4gICAgdmFyIHJlc29sdmVkID0gdGhpcy5fcmVzb2x2ZVNyYyh0aGlzLnNyYyk7XG4gICAgLy8gUmVtb3ZlIHF1ZXJ5IHBhcnRzLCBnZXQgZmlsZSBuYW1lLlxuICAgIHJldHVybiByZXNvbHZlZC5yZXBsYWNlKC9bP3wjXS4qL2csICcnKS5zcGxpdCgnLycpLnBvcCgpO1xuICB9LFxuXG4gIF9jb21wdXRlSW1nSGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLnNpemluZztcbiAgfSxcblxuICBfd2lkdGhDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLndpZHRoID0gaXNOYU4odGhpcy53aWR0aCkgPyB0aGlzLndpZHRoIDogdGhpcy53aWR0aCArICdweCc7XG4gIH0sXG5cbiAgX2hlaWdodENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaXNOYU4odGhpcy5oZWlnaHQpID8gdGhpcy5oZWlnaHQgOiB0aGlzLmhlaWdodCArICdweCc7XG4gIH0sXG5cbiAgX2xvYWRTdGF0ZU9ic2VydmVyOiBmdW5jdGlvbihzcmMsIHByZXZlbnRMb2FkKSB7XG4gICAgdmFyIG5ld1Jlc29sdmVkU3JjID0gdGhpcy5fcmVzb2x2ZVNyYyhzcmMpO1xuICAgIGlmIChuZXdSZXNvbHZlZFNyYyA9PT0gdGhpcy5fcmVzb2x2ZWRTcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZXNvbHZlZFNyYyA9ICcnO1xuICAgIHRoaXMuJC5pbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICBpZiAoc3JjID09PSAnJyB8fCBwcmV2ZW50TG9hZCkge1xuICAgICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgICAgdGhpcy5fc2V0RXJyb3IoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNvbHZlZFNyYyA9IG5ld1Jlc29sdmVkU3JjO1xuICAgICAgdGhpcy4kLmltZy5zcmMgPSB0aGlzLl9yZXNvbHZlZFNyYztcbiAgICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICd1cmwoXCInICsgdGhpcy5fcmVzb2x2ZWRTcmMgKyAnXCIpJztcblxuICAgICAgdGhpcy5fc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIF9wbGFjZWhvbGRlckNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5wbGFjZWhvbGRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID8gJ3VybChcIicgKyB0aGlzLnBsYWNlaG9sZGVyICsgJ1wiKScgOiAnJztcbiAgfSxcblxuICBfdHJhbnNmb3JtQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNpemVkSW1nRGl2U3R5bGUgPSB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGU7XG4gICAgdmFyIHBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLiQucGxhY2Vob2xkZXIuc3R5bGU7XG5cbiAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRTaXplID0gcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgIHRoaXMuc2l6aW5nO1xuXG4gICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgIHRoaXMuc2l6aW5nID8gdGhpcy5wb3NpdGlvbiA6ICcnO1xuXG4gICAgc2l6ZWRJbWdEaXZTdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gcGxhY2Vob2xkZXJTdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgdGhpcy5zaXppbmcgPyAnbm8tcmVwZWF0JyA6ICcnO1xuICB9LFxuXG4gIF9yZXNvbHZlU3JjOiBmdW5jdGlvbih0ZXN0U3JjKSB7XG4gICAgdmFyIHJlc29sdmVkID0gcmVzb2x2ZVVybCh0ZXN0U3JjLCB0aGlzLiQuYmFzZVVSSUFuY2hvci5ocmVmKTtcbiAgICAvLyBOT1RFOiBVc2Ugb2YgYFVSTGAgd2FzIHJlbW92ZWQgaGVyZSBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0XG4gICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgIC8vIGNvbnNpZGVyIHJldmVydGluZyBhbmQgYWRkaW5nIHRoZSBVUkwgcG9seWZpbGwgYXMgYSBkZXYgZGVwZW5kZW5jeS5cbiAgICBpZiAocmVzb2x2ZWQubGVuZ3RoID49IDIgJiYgcmVzb2x2ZWRbMF0gPT09ICcvJyAmJiByZXNvbHZlZFsxXSAhPT0gJy8nKSB7XG4gICAgICAvLyBJbiBJRSBsb2NhdGlvbi5vcmlnaW4gbWlnaHQgbm90IHdvcmtcbiAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTc2MzgwMi9sb2NhdGlvbi1vcmlnaW4taXMtdW5kZWZpbmVkLWluLWllLTExLW9uLXdpbmRvd3MtMTAtYnV0LXdvcmtzLW9uLXdpbmRvd3MtN1xuICAgICAgcmVzb2x2ZWQgPSAobG9jYXRpb24ub3JpZ2luIHx8IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpICtcbiAgICAgICAgICByZXNvbHZlZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBOERBO0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkZBO0FBMEZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBcFNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=