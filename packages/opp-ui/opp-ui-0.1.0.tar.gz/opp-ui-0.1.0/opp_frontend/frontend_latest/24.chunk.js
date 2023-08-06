(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[24],{

/***/ "./src/cast/cast_framework.ts":
/*!************************************!*\
  !*** ./src/cast/cast_framework.ts ***!
  \************************************/
/*! exports provided: castApiAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castApiAvailable", function() { return castApiAvailable; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

let loadedPromise;
const castApiAvailable = () => {
  if (loadedPromise) {
    return loadedPromise;
  }

  loadedPromise = new Promise(resolve => {
    window.__onGCastApiAvailable = resolve;
  }); // Any element with a specific ID will get set as a JS variable on window
  // This will override the cast SDK if the iconset is loaded afterwards.
  // Conflicting IDs will no longer mess with window, so we'll just append one.

  const el = document.createElement("div");
  el.id = "cast";
  document.body.append(el);
  Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1");
  return loadedPromise;
};

/***/ }),

/***/ "./src/cast/cast_manager.ts":
/*!**********************************!*\
  !*** ./src/cast/cast_manager.ts ***!
  \**********************************/
/*! exports provided: CastManager, getCastManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastManager", function() { return CastManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCastManager", function() { return getCastManager; });
/* harmony import */ var _cast_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast_framework */ "./src/cast/cast_framework.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
/* harmony import */ var _receiver_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receiver_messages */ "./src/cast/receiver_messages.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let managerProm;
class CastManager {
  // If the cast connection is connected to our Opp.
  constructor(auth) {
    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "_eventListeners", {});

    this.auth = auth;
    const context = this.castContext;
    context.setOptions({
      receiverApplicationId: _const__WEBPACK_IMPORTED_MODULE_1__["CAST_APP_ID"],
      // @ts-ignore
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    context.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, ev => this._sessionStateChanged(ev));
    context.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, ev => this._castStateChanged(ev));
  }

  addEventListener(event, listener) {
    if (!(event in this._eventListeners)) {
      this._eventListeners[event] = [];
    }

    this._eventListeners[event].push(listener);

    return () => {
      this._eventListeners[event].splice(this._eventListeners[event].indexOf(listener));
    };
  }

  get castConnectedToOurOpp() {
    return this.status !== undefined && this.auth !== undefined && this.status.connected && (this.status.oppUrl === this.auth.data.oppUrl || _const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV"] && this.status.oppUrl === _dev_const__WEBPACK_IMPORTED_MODULE_2__["CAST_DEV_OPP_URL"]);
  }

  sendMessage(msg) {
    if (true) {
      console.log("Sending cast message", msg);
    }

    this.castSession.sendMessage(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], msg);
  }

  get castState() {
    return this.castContext.getCastState();
  }

  get castContext() {
    return cast.framework.CastContext.getInstance();
  }

  get castSession() {
    return this.castContext.getCurrentSession();
  }

  requestSession() {
    return this.castContext.requestSession();
  }

  _fireEvent(event) {
    for (const listener of this._eventListeners[event] || []) {
      listener();
    }
  }

  _receiveMessage(msg) {
    if (true) {
      console.log("Received cast message", msg);
    }

    if (msg.type === "receiver_status") {
      this.status = msg;

      this._fireEvent("connection-changed");
    }
  }

  _sessionStateChanged(ev) {
    if (true) {
      console.log("Cast session state changed", ev.sessionState);
    } // On Android, opening a new session always results in SESSION_RESUMED.
    // So treat both as the same.


    if (ev.sessionState === "SESSION_STARTED" || ev.sessionState === "SESSION_RESUMED") {
      if (this.auth) {
        Object(_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["castSendAuth"])(this, this.auth);
      } else {
        // Only do if no auth, as this is done as part of sendAuth.
        this.sendMessage({
          type: "get_status"
        });
      }

      this._attachMessageListener();
    } else if (ev.sessionState === "SESSION_ENDED") {
      this.status = undefined;

      this._fireEvent("connection-changed");
    }
  }

  _castStateChanged(ev) {
    if (true) {
      console.log("Cast state changed", ev.castState);
    }

    this._fireEvent("state-changed");
  }

  _attachMessageListener() {
    const session = this.castSession;
    session.addMessageListener(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], (_ns, msg) => this._receiveMessage(JSON.parse(msg)));
  }

}
const getCastManager = auth => {
  if (!managerProm) {
    managerProm = Object(_cast_framework__WEBPACK_IMPORTED_MODULE_0__["castApiAvailable"])().then(isAvailable => {
      if (!isAvailable) {
        throw new Error("No Cast API available");
      }

      return new CastManager(auth);
    });
  }

  return managerProm;
};

/***/ }),

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
const _load = (tag, url, type) => {
  // This promise will be used by Promise.all to determine success or failure
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag);
    let attr = "src";
    let parent = "body"; // Important success and error for the promise

    element.onload = () => resolve(url);

    element.onerror = () => reject(url); // Need to set different attributes depending on tag type


    switch (tag) {
      case "script":
        element.async = true;

        if (type) {
          element.type = type;
        }

        break;

      case "link":
        element.type = "text/css";
        element.rel = "stylesheet";
        attr = "href";
        parent = "head";
    } // Inject into document to kick off loading


    element[attr] = url;
    document[parent].appendChild(element);
  });
};

const loadCSS = url => _load("link", url);
const loadJS = url => _load("script", url);
const loadImg = url => _load("img", url);
const loadModule = url => _load("script", url, "module");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X2ZyYW1ld29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FzdC9jYXN0X21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlXCI7XG5cbmxldCBsb2FkZWRQcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgY2FzdEFwaUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgaWYgKGxvYWRlZFByb21pc2UpIHtcbiAgICByZXR1cm4gbG9hZGVkUHJvbWlzZTtcbiAgfVxuXG4gIGxvYWRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICh3aW5kb3cgYXMgYW55KS5fX29uR0Nhc3RBcGlBdmFpbGFibGUgPSByZXNvbHZlO1xuICB9KTtcbiAgLy8gQW55IGVsZW1lbnQgd2l0aCBhIHNwZWNpZmljIElEIHdpbGwgZ2V0IHNldCBhcyBhIEpTIHZhcmlhYmxlIG9uIHdpbmRvd1xuICAvLyBUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIGNhc3QgU0RLIGlmIHRoZSBpY29uc2V0IGlzIGxvYWRlZCBhZnRlcndhcmRzLlxuICAvLyBDb25mbGljdGluZyBJRHMgd2lsbCBubyBsb25nZXIgbWVzcyB3aXRoIHdpbmRvdywgc28gd2UnbGwganVzdCBhcHBlbmQgb25lLlxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmlkID0gXCJjYXN0XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsKTtcblxuICBsb2FkSlMoXG4gICAgXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9jdi9qcy9zZW5kZXIvdjEvY2FzdF9zZW5kZXIuanM/bG9hZENhc3RGcmFtZXdvcms9MVwiXG4gICk7XG4gIHJldHVybiBsb2FkZWRQcm9taXNlO1xufTtcbiIsImltcG9ydCB7IGNhc3RBcGlBdmFpbGFibGUgfSBmcm9tIFwiLi9jYXN0X2ZyYW1ld29ya1wiO1xuaW1wb3J0IHsgQ0FTVF9BUFBfSUQsIENBU1RfTlMsIENBU1RfREVWIH0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB7IENBU1RfREVWX09QUF9VUkwgfSBmcm9tIFwiLi9kZXZfY29uc3RcIjtcbmltcG9ydCB7XG4gIGNhc3RTZW5kQXV0aCxcbiAgT3BwTWVzc2FnZSBhcyBSZWNlaXZlck1lc3NhZ2UsXG59IGZyb20gXCIuL3JlY2VpdmVyX21lc3NhZ2VzXCI7XG5pbXBvcnQge1xuICBTZXNzaW9uU3RhdGVFdmVudERhdGEsXG4gIENhc3RTdGF0ZUV2ZW50RGF0YSxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbn0gZnJvbSBcImNocm9tZWNhc3QtY2FmLXJlY2VpdmVyL2Nhc3QuZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTZW5kZXJNZXNzYWdlLCBSZWNlaXZlclN0YXR1c01lc3NhZ2UgfSBmcm9tIFwiLi9zZW5kZXJfbWVzc2FnZXNcIjtcbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuXG5sZXQgbWFuYWdlclByb206IFByb21pc2U8Q2FzdE1hbmFnZXI+IHwgdW5kZWZpbmVkO1xuXG50eXBlIENhc3RFdmVudExpc3RlbmVyID0gKCkgPT4gdm9pZDtcblxuLypcbkdlbmVyYWwgZmxvdyBvZiBDaHJvbWVjYXN0OlxuXG5DaHJvbWVjYXN0IHNlc3Npb25zIGFyZSBzdGFydGVkIHZpYSB0aGUgQ2hyb21lY2FzdCBidXR0b24uIFdoZW4gY2xpY2tlZCwgc2Vzc2lvblxuc3RhdGUgY2hhbmdlcyB0byBzdGFydGVkLiBXZSB0aGVuIHNlbmQgYXV0aGVudGljYXRpb24sIHdoaWNoIHdpbGwgY2F1c2UgdGhlXG5yZWNlaXZlciBhcHAgdG8gc2VuZCBhIHN0YXR1cyB1cGRhdGUuXG5cbklmIGEgc2Vzc2lvbiBpcyBhbHJlYWR5IGFjdGl2ZSwgd2UgcXVlcnkgdGhlIHN0YXR1cyB0byBzZWUgd2hhdCBpdCBpcyB1cCB0by4gSWZcbmEgdXNlciBwcmVzc2VzIHRoZSBjYXN0IGJ1dHRvbiB3ZSBzZW5kIGF1dGggaWYgbm90IGNvbm5lY3RlZCB5ZXQsIHRoZW4gc2VuZFxuY29tbWFuZCBhcyB1c3VhbC5cbiovXG5cbi8qIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGUgKi9cblxudHlwZSBDYXN0RXZlbnQgPSBcImNvbm5lY3Rpb24tY2hhbmdlZFwiIHwgXCJzdGF0ZS1jaGFuZ2VkXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXN0TWFuYWdlciB7XG4gIHB1YmxpYyBhdXRoPzogQXV0aDtcbiAgLy8gSWYgdGhlIGNhc3QgY29ubmVjdGlvbiBpcyBjb25uZWN0ZWQgdG8gb3VyIE9wcC5cbiAgcHVibGljIHN0YXR1cz86IFJlY2VpdmVyU3RhdHVzTWVzc2FnZTtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IHsgW2V2ZW50OiBzdHJpbmddOiBDYXN0RXZlbnRMaXN0ZW5lcltdIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihhdXRoPzogQXV0aCkge1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FzdENvbnRleHQ7XG4gICAgY29udGV4dC5zZXRPcHRpb25zKHtcbiAgICAgIHJlY2VpdmVyQXBwbGljYXRpb25JZDogQ0FTVF9BUFBfSUQsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhdXRvSm9pblBvbGljeTogY2hyb21lLmNhc3QuQXV0b0pvaW5Qb2xpY3kuT1JJR0lOX1NDT1BFRCxcbiAgICB9KTtcbiAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dEV2ZW50VHlwZS5TRVNTSU9OX1NUQVRFX0NIQU5HRUQsXG4gICAgICAoZXYpID0+IHRoaXMuX3Nlc3Npb25TdGF0ZUNoYW5nZWQoZXYpXG4gICAgKTtcbiAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBjYXN0LmZyYW1ld29yay5DYXN0Q29udGV4dEV2ZW50VHlwZS5DQVNUX1NUQVRFX0NIQU5HRUQsXG4gICAgICAoZXYpID0+IHRoaXMuX2Nhc3RTdGF0ZUNoYW5nZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBDYXN0RXZlbnQsIGxpc3RlbmVyOiBDYXN0RXZlbnRMaXN0ZW5lcikge1xuICAgIGlmICghKGV2ZW50IGluIHRoaXMuX2V2ZW50TGlzdGVuZXJzKSkge1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0uc3BsaWNlKFxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0uaW5kZXhPZihsaXN0ZW5lcilcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdENvbm5lY3RlZFRvT3VyT3BwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLmF1dGggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zdGF0dXMuY29ubmVjdGVkICYmXG4gICAgICAodGhpcy5zdGF0dXMub3BwVXJsID09PSB0aGlzLmF1dGguZGF0YS5vcHBVcmwgfHxcbiAgICAgICAgKENBU1RfREVWICYmIHRoaXMuc3RhdHVzLm9wcFVybCA9PT0gQ0FTVF9ERVZfT1BQX1VSTCkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZW5kTWVzc2FnZShtc2c6IFJlY2VpdmVyTWVzc2FnZSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgY2FzdCBtZXNzYWdlXCIsIG1zZyk7XG4gICAgfVxuICAgIHRoaXMuY2FzdFNlc3Npb24uc2VuZE1lc3NhZ2UoQ0FTVF9OUywgbXNnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmNhc3RDb250ZXh0LmdldENhc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gY2FzdC5mcmFtZXdvcmsuQ2FzdENvbnRleHQuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FzdENvbnRleHQuZ2V0Q3VycmVudFNlc3Npb24oKSE7XG4gIH1cblxuICBwdWJsaWMgcmVxdWVzdFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FzdENvbnRleHQucmVxdWVzdFNlc3Npb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpcmVFdmVudChldmVudDogQ2FzdEV2ZW50KSB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0gfHwgW10pIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVjZWl2ZU1lc3NhZ2UobXNnOiBTZW5kZXJNZXNzYWdlKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgY2FzdCBtZXNzYWdlXCIsIG1zZyk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJyZWNlaXZlcl9zdGF0dXNcIikge1xuICAgICAgdGhpcy5zdGF0dXMgPSBtc2c7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoXCJjb25uZWN0aW9uLWNoYW5nZWRcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvblN0YXRlQ2hhbmdlZChldjogU2Vzc2lvblN0YXRlRXZlbnREYXRhKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FzdCBzZXNzaW9uIHN0YXRlIGNoYW5nZWRcIiwgZXYuc2Vzc2lvblN0YXRlKTtcbiAgICB9XG4gICAgLy8gT24gQW5kcm9pZCwgb3BlbmluZyBhIG5ldyBzZXNzaW9uIGFsd2F5cyByZXN1bHRzIGluIFNFU1NJT05fUkVTVU1FRC5cbiAgICAvLyBTbyB0cmVhdCBib3RoIGFzIHRoZSBzYW1lLlxuICAgIGlmIChcbiAgICAgIGV2LnNlc3Npb25TdGF0ZSA9PT0gXCJTRVNTSU9OX1NUQVJURURcIiB8fFxuICAgICAgZXYuc2Vzc2lvblN0YXRlID09PSBcIlNFU1NJT05fUkVTVU1FRFwiXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5hdXRoKSB7XG4gICAgICAgIGNhc3RTZW5kQXV0aCh0aGlzLCB0aGlzLmF1dGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT25seSBkbyBpZiBubyBhdXRoLCBhcyB0aGlzIGlzIGRvbmUgYXMgcGFydCBvZiBzZW5kQXV0aC5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSh7IHR5cGU6IFwiZ2V0X3N0YXR1c1wiIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXR0YWNoTWVzc2FnZUxpc3RlbmVyKCk7XG4gICAgfSBlbHNlIGlmIChldi5zZXNzaW9uU3RhdGUgPT09IFwiU0VTU0lPTl9FTkRFRFwiKSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudChcImNvbm5lY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jYXN0U3RhdGVDaGFuZ2VkKGV2OiBDYXN0U3RhdGVFdmVudERhdGEpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJDYXN0IHN0YXRlIGNoYW5nZWRcIiwgZXYuY2FzdFN0YXRlKTtcbiAgICB9XG4gICAgdGhpcy5fZmlyZUV2ZW50KFwic3RhdGUtY2hhbmdlZFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaE1lc3NhZ2VMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gdGhpcy5jYXN0U2Vzc2lvbjtcbiAgICBzZXNzaW9uLmFkZE1lc3NhZ2VMaXN0ZW5lcihDQVNUX05TLCAoX25zLCBtc2cpID0+XG4gICAgICB0aGlzLl9yZWNlaXZlTWVzc2FnZShKU09OLnBhcnNlKG1zZykpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2FzdE1hbmFnZXIgPSAoYXV0aD86IEF1dGgpID0+IHtcbiAgaWYgKCFtYW5hZ2VyUHJvbSkge1xuICAgIG1hbmFnZXJQcm9tID0gY2FzdEFwaUF2YWlsYWJsZSgpLnRoZW4oKGlzQXZhaWxhYmxlKSA9PiB7XG4gICAgICBpZiAoIWlzQXZhaWxhYmxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIENhc3QgQVBJIGF2YWlsYWJsZVwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQ2FzdE1hbmFnZXIoYXV0aCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG1hbmFnZXJQcm9tO1xufTtcbiIsIi8vIExvYWQgYSByZXNvdXJjZSBhbmQgZ2V0IGEgcHJvbWlzZSB3aGVuIGxvYWRpbmcgZG9uZS5cbi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtbG9hZGVyXG5cbmNvbnN0IF9sb2FkID0gKFxuICB0YWc6IFwibGlua1wiIHwgXCJzY3JpcHRcIiB8IFwiaW1nXCIsXG4gIHVybDogc3RyaW5nLFxuICB0eXBlPzogXCJtb2R1bGVcIlxuKSA9PiB7XG4gIC8vIFRoaXMgcHJvbWlzZSB3aWxsIGJlIHVzZWQgYnkgUHJvbWlzZS5hbGwgdG8gZGV0ZXJtaW5lIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgbGV0IGF0dHIgPSBcInNyY1wiO1xuICAgIGxldCBwYXJlbnQgPSBcImJvZHlcIjtcblxuICAgIC8vIEltcG9ydGFudCBzdWNjZXNzIGFuZCBlcnJvciBmb3IgdGhlIHByb21pc2VcbiAgICBlbGVtZW50Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUodXJsKTtcbiAgICBlbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodXJsKTtcblxuICAgIC8vIE5lZWQgdG8gc2V0IGRpZmZlcmVudCBhdHRyaWJ1dGVzIGRlcGVuZGluZyBvbiB0YWcgdHlwZVxuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlIFwic2NyaXB0XCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS5hc3luYyA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmtcIjpcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICAoZWxlbWVudCBhcyBIVE1MTGlua0VsZW1lbnQpLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBhdHRyID0gXCJocmVmXCI7XG4gICAgICAgIHBhcmVudCA9IFwiaGVhZFwiO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBpbnRvIGRvY3VtZW50IHRvIGtpY2sgb2ZmIGxvYWRpbmdcbiAgICBlbGVtZW50W2F0dHJdID0gdXJsO1xuICAgIGRvY3VtZW50W3BhcmVudF0uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDU1MgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwibGlua1wiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRKUyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJzY3JpcHRcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSW1nID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImltZ1wiLCB1cmwpO1xuZXhwb3J0IGNvbnN0IGxvYWRNb2R1bGUgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCwgXCJtb2R1bGVcIik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFvQkE7QUFFQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQTFIQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDektBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=