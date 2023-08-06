(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-register"],{

/***/ "./src/panels/config/cloud/register/cloud-register.js":
/*!************************************************************!*\
  !*** ./src/panels/config/cloud/register/cloud-register.js ***!
  \************************************************************/
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
/* harmony import */ var _op_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../op-config-section */ "./src/panels/config/op-config-section.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class CloudRegister extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
    <style include="iron-flex op-style">
      .content {
        direction: ltr;
      }

      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-item {
        cursor: pointer;
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
      [hidden] {
        display: none;
      }
    </style>
    <opp-subpage header="[[localize('ui.panel.config.cloud.register.title')]]">
      <div class="content">
        <op-config-section is-wide="[[isWide]]">
          <span slot="header">[[localize('ui.panel.config.cloud.register.headline')]]</span>
          <div slot="introduction">
            <p>
              [[localize('ui.panel.config.cloud.register.information')]]
            </p>
            <p>
            [[localize('ui.panel.config.cloud.register.information2')]]
            </p>
            <ul>
              <li>[[localize('ui.panel.config.cloud.register.feature_remote_control')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_google_home')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_amazon_alexa')]]</li>
              <li>[[localize('ui.panel.config.cloud.register.feature_webhook_apps')]]</li>
            </ul>
            <p>
              [[localize('ui.panel.config.cloud.register.information3')]] <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>[[localize('ui.panel.config.cloud.register.information3a')]]
            </p>

            <p>
              [[localize('ui.panel.config.cloud.register.information4')]]
              </p><ul>
                <li><a href="https://open-peer-power.io/tos/" target="_blank">[[localize('ui.panel.config.cloud.register.link_terms_conditions')]]</a></li>
                <li><a href="https://open-peer-power.io/privacy/" target="_blank">[[localize('ui.panel.config.cloud.register.link_privacy_policy')]]</a></li>
              </ul>
            </p>
          </div>

          <op-card header="[[localize('ui.panel.config.cloud.register.create_account')]]">
            <div class="card-content">
              <div class="header">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="[[localize('ui.panel.config.cloud.register.email_address')]]" type="email" value="{{email}}" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.email_error_msg')]]"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="[[localize('ui.panel.config.cloud.register.password_error_msg')]]"></paper-input>
            </div>
            <div class="card-actions">
              <op-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">[[localize('ui.panel.config.cloud.register.start_trial')]]</op-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">[[localize('ui.panel.config.cloud.register.resend_confirmation_email')]]</button>
            </div>
          </op-card>
        </op-config-section>
      </div>
    </opp-subpage>
`;
  }

  static get properties() {
    return {
      opp: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true
      },
      _requestInProgress: {
        type: Boolean,
        value: false
      },
      _password: {
        type: String,
        value: ""
      },
      _error: {
        type: String,
        value: ""
      }
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  _inputChanged() {
    this._error = "";
    this.$.email.invalid = false;
    this.$.password.invalid = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleRegister();

      ev.preventDefault();
    }
  }

  _handleRegister() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;
    this._requestInProgress = true;
    this.opp.callApi("post", "cloud/register", {
      email: this.email,
      password: this._password
    }).then(() => this._verificationEmailSent(), err => {
      // Do this before setProperties because changing it clears errors.
      this._password = "";
      this.setProperties({
        _requestInProgress: false,
        _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
      });
    });
  }

  _handleResendVerifyEmail() {
    if (!this.email) {
      this.$.email.invalid = true;
      return;
    }

    this.opp.callApi("post", "cloud/resend_confirm", {
      email: this.email
    }).then(() => this._verificationEmailSent(), err => this.setProperties({
      _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
    }));
  }

  _verificationEmailSent() {
    this.setProperties({
      _requestInProgress: false,
      _password: ""
    });
    this.fire("cloud-done", {
      flashMessage: this.opp.localize("ui.panel.config.cloud.register.account_created")
    });
  }

}

customElements.define("cloud-register", CloudRegister);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtcmVnaXN0ZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9yZWdpc3Rlci9jbG91ZC1yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9vcC1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvb3AtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL29wcC1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvb3Atc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL29wLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRSZWdpc3RlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggb3Atc3R5bGVcIj5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICB9XG5cbiAgICAgIFtzbG90PWludHJvZHVjdGlvbl0ge1xuICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgIH1cbiAgICAgIFtzbG90PWludHJvZHVjdGlvbl0gYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxvcHAtc3VicGFnZSBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIudGl0bGUnKV1dXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8b3AtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmhlYWRsaW5lJyldXTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuaW5mb3JtYXRpb24nKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjInKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuZmVhdHVyZV9yZW1vdGVfY29udHJvbCcpXV08L2xpPlxuICAgICAgICAgICAgICA8bGk+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmZlYXR1cmVfZ29vZ2xlX2hvbWUnKV1dPC9saT5cbiAgICAgICAgICAgICAgPGxpPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5mZWF0dXJlX2FtYXpvbl9hbGV4YScpXV08L2xpPlxuICAgICAgICAgICAgICA8bGk+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmZlYXR1cmVfd2ViaG9va19hcHBzJyldXTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjMnKV1dIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbScgdGFyZ2V0PSdfYmxhbmsnPk5hYnUmbmJzcDtDYXNhLCZuYnNwO0luYzwvYT5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuaW5mb3JtYXRpb24zYScpXV1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5pbmZvcm1hdGlvbjQnKV1dXG4gICAgICAgICAgICAgIDwvcD48dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL29wZW4tcGVlci1wb3dlci5pby90b3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmxpbmtfdGVybXNfY29uZGl0aW9ucycpXV08L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vb3Blbi1wZWVyLXBvd2VyLmlvL3ByaXZhY3kvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmxpbmtfcHJpdmFjeV9wb2xpY3knKV1dPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8b3AtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuY3JlYXRlX2FjY291bnQnKV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgYXV0b2ZvY3VzPVwiXCIgaWQ9XCJlbWFpbFwiIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2FkZHJlc3MnKV1dXCIgdHlwZT1cImVtYWlsXCIgdmFsdWU9XCJ7e2VtYWlsfX1cIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLmVtYWlsX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXQgaWQ9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIiB0eXBlPVwicGFzc3dvcmRcIiBvbi1rZXlkb3duPVwiX2tleURvd25cIiBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnBhc3N3b3JkX2Vycm9yX21zZycpXV1cIj48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxvcC1wcm9ncmVzcy1idXR0b24gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIiBwcm9ncmVzcz1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIj5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQucmVnaXN0ZXIuc3RhcnRfdHJpYWwnKV1dPC9vcC1wcm9ncmVzcy1idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaW5rXCIgaGlkZGVuPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiIG9uLWNsaWNrPVwiX2hhbmRsZVJlc2VuZFZlcmlmeUVtYWlsXCI+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLnJlZ2lzdGVyLnJlc2VuZF9jb25maXJtYXRpb25fZW1haWwnKV1dPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L29wLWNhcmQ+XG4gICAgICAgIDwvb3AtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L29wcC1zdWJwYWdlPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BwOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX3Bhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX2lucHV0Q2hhbmdlZChlbWFpbCwgX3Bhc3N3b3JkKVwiXTtcbiAgfVxuXG4gIF9pbnB1dENoYW5nZWQoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBcIlwiO1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy4kLnBhc3N3b3JkLmludmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9rZXlEb3duKGV2KSB7XG4gICAgLy8gdmFsaWRhdGUgb24gZW50ZXJcbiAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuX2hhbmRsZVJlZ2lzdGVyKCk7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVSZWdpc3RlcigpIHtcbiAgICBsZXQgaW52YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLmVtYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgdGhpcy4kLmVtYWlsLmludmFsaWQgPSB0cnVlO1xuICAgICAgdGhpcy4kLmVtYWlsLmZvY3VzKCk7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgICAgdGhpcy4kLnBhc3N3b3JkLmludmFsaWQgPSB0cnVlO1xuXG4gICAgICBpZiAoIWludmFsaWQpIHtcbiAgICAgICAgaW52YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuJC5wYXNzd29yZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbnZhbGlkKSByZXR1cm47XG5cbiAgICB0aGlzLl9yZXF1ZXN0SW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICB0aGlzLm9wcFxuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvcmVnaXN0ZXJcIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB0aGlzLl92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIC8vIERvIHRoaXMgYmVmb3JlIHNldFByb3BlcnRpZXMgYmVjYXVzZSBjaGFuZ2luZyBpdCBjbGVhcnMgZXJyb3JzLlxuICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfcmVxdWVzdEluUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgICAgICAgX2Vycm9yOlxuICAgICAgICAgICAgICBlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgID8gZXJyLmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgIDogXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBfaGFuZGxlUmVzZW5kVmVyaWZ5RW1haWwoKSB7XG4gICAgaWYgKCF0aGlzLmVtYWlsKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vcHBcbiAgICAgIC5jYWxsQXBpKFwicG9zdFwiLCBcImNsb3VkL3Jlc2VuZF9jb25maXJtXCIsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgICgpID0+IHRoaXMuX3ZlcmlmaWNhdGlvbkVtYWlsU2VudCgpLFxuICAgICAgICAoZXJyKSA9PlxuICAgICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIF92ZXJpZmljYXRpb25FbWFpbFNlbnQoKSB7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICBfcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSk7XG4gICAgdGhpcy5maXJlKFwiY2xvdWQtZG9uZVwiLCB7XG4gICAgICBmbGFzaE1lc3NhZ2U6IHRoaXMub3BwLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5yZWdpc3Rlci5hY2NvdW50X2NyZWF0ZWRcIlxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1yZWdpc3RlclwiLCBDbG91ZFJlZ2lzdGVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWhCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBNU1BO0FBQ0E7QUE2TUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==