(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-iframe"],{

/***/ "./src/panels/iframe/op-panel-iframe.js":
/*!**********************************************!*\
  !*** ./src/panels/iframe/op-panel-iframe.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/op-menu-button */ "./src/components/op-menu-button.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/op-style */ "./src/resources/op-style.ts");






class OpPanelIframe extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="op-style">
        iframe {
          border: 0;
          width: 100%;
          height: calc(100% - 64px);
          background-color: var(--primary-background-color);
        }
      </style>
      <app-toolbar>
        <op-menu-button opp="[[opp]]" narrow="[[narrow]]"></op-menu-button>
        <div main-title>[[panel.title]]</div>
      </app-toolbar>

      <iframe
        src="[[panel.config.url]]"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      narrow: Boolean,
      panel: Object
    };
  }

}

customElements.define("op-panel-iframe", OpPanelIframe);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaWZyYW1lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9pZnJhbWUvb3AtcGFuZWwtaWZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3AtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9vcC1zdHlsZVwiO1xuXG5jbGFzcyBPcFBhbmVsSWZyYW1lIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJvcC1zdHlsZVwiPlxuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgIDxvcC1tZW51LWJ1dHRvbiBvcHA9XCJbW29wcF1dXCIgbmFycm93PVwiW1tuYXJyb3ddXVwiPjwvb3AtbWVudS1idXR0b24+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW3BhbmVsLnRpdGxlXV08L2Rpdj5cbiAgICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPVwiW1twYW5lbC5jb25maWcudXJsXV1cIlxuICAgICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiXG4gICAgICAgIHdlYmtpdGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIlxuICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCJcbiAgICAgID48L2lmcmFtZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIHBhbmVsOiBPYmplY3QsXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJvcC1wYW5lbC1pZnJhbWVcIiwgT3BQYW5lbElmcmFtZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBakNBO0FBQ0E7QUFrQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==