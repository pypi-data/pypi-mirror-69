(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-forgot-password"],{

/***/ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js":
/*!**************************************************************************!*\
  !*** ./src/panels/config/cloud/forgot-password/cloud-forgot-password.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_op_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/op-card */ "./src/components/op-card.ts");
/* harmony import */ var _components_buttons_op_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/buttons/op-progress-button */ "./src/components/buttons/op-progress-button.js");
/* harmony import */ var _layouts_opp_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/opp-subpage */ "./src/layouts/opp-subpage.ts");
/* harmony import */ var _resources_op_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/op-style */ "./src/resources/op-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");









/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudForgotPassword extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex op-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }

        op-card {
          max-width: 600px;
          margin: 0 auto;
          margin-top: 24px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-actions a {
          color: var(--primary-text-color);
        }
        [hidden] {
          display: none;
        }
      </style>
      <opp-subpage header=[[localize('ui.panel.config.cloud.forgot_password.title')]]>
        <div class="content">
          <op-card header=[[localize('ui.panel.config.cloud.forgot_password.subtitle')]]>
            <div class="card-content">
              <p>
                [[localize('ui.panel.config.cloud.forgot_password.instructions')]]
              </p>
              <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              <paper-input
                autofocus=""
                id="email"
                label="[[localize('ui.panel.config.cloud.forgot_password.email')]]"
                value="{{email}}"
                type="email"
                on-keydown="_keyDown"
                error-message="[[localize('ui.panel.config.cloud.forgot_password.email_error_msg')]]"
              ></paper-input>
            </div>
            <div class="card-actions">
              <op-progress-button
                on-click="_handleEmailPasswordReset"
                progress="[[_requestInProgress]]"
                >[[localize('ui.panel.config.cloud.forgot_password.send_reset_email')]]</op-progress-button
              >
            </div>
          </op-card>
        </div>
      </opp-subpage>
    `;
  }

  static get properties() {
    return {
      opp: Object,
      email: {
        type: String,
        notify: true,
        observer: "_emailChanged"
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      _error: {
        type: String,
        value: ""
      }
    };
  }

  _emailChanged() {
    this._error = "";
    this.$.email.invalid = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleEmailPasswordReset();

      ev.preventDefault();
    }
  }

  _handleEmailPasswordReset() {
    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
    }

    if (this.$.email.invalid) return;
    this._requestInProgress = true;
    this.opp.callApi("post", "cloud/forgot_password", {
      email: this.email
    }).then(() => {
      this._requestInProgress = false;
      this.fire("cloud-done", {
        flashMessage: "[[localize('ui.panel.config.cloud.forgot_password.check_your_email')]]"
      });
    }, err => this.setProperties({
      _requestInProgress: false,
      _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
    }));
  }

}

customElements.define("cloud-forgot-password", CloudForgotPassword);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZm9yZ290LXBhc3N3b3JkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkL2Nsb3VkLWZvcmdvdC1wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvb3AtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL29wcC1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRGb3Jnb3RQYXNzd29yZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBvcC1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICBvcC1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8b3BwLXN1YnBhZ2UgaGVhZGVyPVtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5mb3Jnb3RfcGFzc3dvcmQudGl0bGUnKV1dPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxvcC1jYXJkIGhlYWRlcj1bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuZm9yZ290X3Bhc3N3b3JkLnN1YnRpdGxlJyldXT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC5pbnN0cnVjdGlvbnMnKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgaGlkZGVuJD1cIltbIV9lcnJvcl1dXCI+W1tfZXJyb3JdXTwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM9XCJcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmZvcmdvdF9wYXNzd29yZC5lbWFpbCcpXV1cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwie3tlbWFpbH19XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5mb3Jnb3RfcGFzc3dvcmQuZW1haWxfZXJyb3JfbXNnJyldXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxvcC1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVFbWFpbFBhc3N3b3JkUmVzZXRcIlxuICAgICAgICAgICAgICAgIHByb2dyZXNzPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5mb3Jnb3RfcGFzc3dvcmQuc2VuZF9yZXNldF9lbWFpbCcpXV08L29wLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9vcHAtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHA6IE9iamVjdCxcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogXCJfZW1haWxDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfZXJyb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9lbWFpbENoYW5nZWQoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBcIlwiO1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gIH1cblxuICBfa2V5RG93bihldikge1xuICAgIC8vIHZhbGlkYXRlIG9uIGVudGVyXG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLl9oYW5kbGVFbWFpbFBhc3N3b3JkUmVzZXQoKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUVtYWlsUGFzc3dvcmRSZXNldCgpIHtcbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5lbWFpbC5pbnZhbGlkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB0aGlzLm9wcFxuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvZm9yZ290X3Bhc3N3b3JkXCIsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZmlyZShcImNsb3VkLWRvbmVcIiwge1xuICAgICAgICAgICAgZmxhc2hNZXNzYWdlOlxuICAgICAgICAgICAgICBcIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5mb3Jnb3RfcGFzc3dvcmQuY2hlY2tfeW91cl9lbWFpbCcpXV1cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT5cbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgICAgX3JlcXVlc3RJblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIF9lcnJvcjpcbiAgICAgICAgICAgICAgZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA/IGVyci5ib2R5Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6IFwiVW5rbm93biBlcnJvclwiLFxuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNsb3VkLWZvcmdvdC1wYXNzd29yZFwiLCBDbG91ZEZvcmdvdFBhc3N3b3JkKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQS9IQTtBQUNBO0FBZ0lBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=