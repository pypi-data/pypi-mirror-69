/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/core.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/auth/token_storage.ts":
/*!******************************************!*\
  !*** ./src/common/auth/token_storage.ts ***!
  \******************************************/
/*! exports provided: askWrite, saveTokens, enableWrite, loadTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askWrite", function() { return askWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokens", function() { return saveTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableWrite", function() { return enableWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTokens", function() { return loadTokens; });
const storage = window.localStorage || {};
// So that core.js and main app hit same shared object.
let tokenCache = window.__tokenCache;

if (!tokenCache) {
  tokenCache = window.__tokenCache = {
    tokens: undefined,
    writeEnabled: undefined
  };
}

function askWrite() {
  return tokenCache.tokens !== undefined && tokenCache.writeEnabled === undefined;
}
function saveTokens(tokens) {
  tokenCache.tokens = tokens;

  if (tokenCache.writeEnabled) {
    try {
      storage.oppTokens = JSON.stringify(tokens);
    } catch (err) {// write failed, ignore it. Happens if storage is full or private mode.
    }
  }
}
function enableWrite() {
  tokenCache.writeEnabled = true;

  if (tokenCache.tokens) {
    saveTokens(tokenCache.tokens);
  }
}
function loadTokens() {
  if (tokenCache.tokens === undefined) {
    try {
      // Delete the old token cache.
      delete storage.tokens;
      const tokens = storage.oppTokens;

      if (tokens) {
        tokenCache.tokens = JSON.parse(tokens);
        tokenCache.writeEnabled = true;
      } else {
        tokenCache.tokens = null;
      }
    } catch (err) {
      tokenCache.tokens = null;
    }
  }

  return tokenCache.tokens;
}

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: oppUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppUrl", function() { return oppUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
const oppUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (opp, path) => opp.callWS({
  type: "auth/sign_path",
  path
});
const fetchAuthProviders = () => fetch("/auth/providers", {
  credentials: "same-origin"
});

/***/ }),

/***/ "./src/data/devcon.ts":
/*!****************************!*\
  !*** ./src/data/devcon.ts ***!
  \****************************/
/*! exports provided: fetchConfig, saveConfig, deleteConfig, subscribeDevconUpdates, getDevconCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfig", function() { return deleteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDevconUpdates", function() { return subscribeDevconUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevconCollection", function() { return getDevconCollection; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");

const fetchConfig = (conn, force) => conn.sendMessagePromise({
  type: "devcon/config",
  force
});
const saveConfig = (opp, config) => opp.callWS({
  type: "devcon/config/save",
  config
});
const deleteConfig = opp => opp.callWS({
  type: "devcon/config/delete"
});
const subscribeDevconUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "devcon_updated");
const getDevconCollection = conn => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_devcon", conn2 => fetchConfig(conn2, false), (_conn, store) => subscribeDevconUpdates(conn, () => fetchConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/data/ws-panels.ts":
/*!*******************************!*\
  !*** ./src/data/ws-panels.ts ***!
  \*******************************/
/*! exports provided: subscribePanels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribePanels", function() { return subscribePanels; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");


const fetchPanels = conn => conn.sendMessagePromise({
  type: "get_panels"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchPanels(conn).then(panels => store.setState(panels, true)), "panels_updated");

const subscribePanels = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_pnl", fetchPanels, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-themes.ts":
/*!*******************************!*\
  !*** ./src/data/ws-themes.ts ***!
  \*******************************/
/*! exports provided: subscribeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeThemes", function() { return subscribeThemes; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");


const fetchThemes = conn => conn.sendMessagePromise({
  type: "frontend/get_themes"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchThemes(conn).then(data => store.setState(data, true)), "themes_updated");

const subscribeThemes = (conn, onChange) => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_thm", fetchThemes, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-user.ts":
/*!*****************************!*\
  !*** ./src/data/ws-user.ts ***!
  \*****************************/
/*! exports provided: userCollection, subscribeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCollection", function() { return userCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeUser", function() { return subscribeUser; });
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");

const userCollection = conn => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_usr", () => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["getUser"])(conn), undefined);
const subscribeUser = (conn, onChange) => userCollection(conn).subscribe(onChange);

/***/ }),

/***/ "./src/entrypoints/core.ts":
/*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _websocket_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../websocket/lib */ "./src/websocket/lib/index.ts");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ws-panels */ "./src/data/ws-panels.ts");
/* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ws-themes */ "./src/data/ws-themes.ts");
/* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ws-user */ "./src/data/ws-user.ts");
/* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/auth */ "./src/data/auth.ts");
/* harmony import */ var _data_devcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/devcon */ "./src/data/devcon.ts");








const authProm = () => Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["getAuth"])({
  oppUrl: _data_auth__WEBPACK_IMPORTED_MODULE_5__["oppUrl"],
  saveTokens: _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"],
  loadTokens: () => Promise.resolve(Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["loadTokens"])())
});

const connProm = async auth => {
  try {
    const conn = await Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    }); // Clear url if we have been able to establish a connection

    if (location.search.includes("auth_callback=1")) {
      history.replaceState(null, "", location.pathname);
    }

    return {
      auth,
      conn
    };
  } catch (err) {
    if (err !== _websocket_lib__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]) {
      throw err;
    } // We can get invalid auth if auth tokens were stored that are no longer valid
    // Clear stored tokens.


    Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"])(null);
    auth = await authProm();
    const conn = await Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    });
    return {
      auth,
      conn
    };
  }
};

if (true) {
  // Remove adoptedStyleSheets so style inspector works on shadow DOM.
  // @ts-ignore
  delete Document.prototype.adoptedStyleSheets;
  performance.mark("opp-start");
}

window.oppConnection = authProm().then(connProm); // Start fetching some of the data that we will need.

window.oppConnection.then(({
  conn
}) => {
  const noop = () => {// do nothing
  };

  Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["subscribeEntities"])(conn, noop);
  Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["subscribeConfig"])(conn, noop);
  Object(_websocket_lib__WEBPACK_IMPORTED_MODULE_0__["subscribeServices"])(conn, noop);
  Object(_data_ws_panels__WEBPACK_IMPORTED_MODULE_2__["subscribePanels"])(conn, noop);
  Object(_data_ws_themes__WEBPACK_IMPORTED_MODULE_3__["subscribeThemes"])(conn, noop);
  Object(_data_ws_user__WEBPACK_IMPORTED_MODULE_4__["subscribeUser"])(conn, noop);

  if (location.pathname === "/" || location.pathname.startsWith("/devcon/")) {
    window.llConfProm = Object(_data_devcon__WEBPACK_IMPORTED_MODULE_6__["fetchConfig"])(conn, false);
  }
});
window.addEventListener("error", e => {
  const openPeerPower = document.querySelector("open-peer-power");

  if (openPeerPower && openPeerPower.opp && openPeerPower.opp.callService) {
    openPeerPower.opp.callService("system_log", "write", {
      logger: `frontend.${ true ? "js_dev" : undefined}.${"latest"}.${"20200000.1".replace(".", "")}`,
      message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`
    });
  }
});

/***/ }),

/***/ "./src/websocket/lib/auth.ts":
/*!***********************************!*\
  !*** ./src/websocket/lib/auth.ts ***!
  \***********************************/
/*! exports provided: genClientId, genExpires, Auth, getAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return genClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return genExpires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/websocket/lib/util.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/websocket/lib/errors.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const genClientId = () => `${location.protocol}//${location.host}/`;
const genExpires = expires_in => {
  return expires_in * 1000 + Date.now();
};

function genRedirectUrl() {
  // Get current url but without # part.
  const {
    protocol,
    host,
    pathname,
    search
  } = location;
  return `${protocol}//${host}${pathname}${search}`;
}

function genAuthorizeUrl(oppUrl, clientId, redirectUrl, state) {
  let authorizeUrl = `${oppUrl}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`;

  if (clientId !== null) {
    authorizeUrl += `&client_id=${encodeURIComponent(clientId)}`;
  }

  if (state) {
    authorizeUrl += `&state=${encodeURIComponent(state)}`;
  }

  return authorizeUrl;
}

function redirectAuthorize(oppUrl, clientId, redirectUrl, state) {
  // Add either ?auth_callback=1 or &auth_callback=1
  redirectUrl += (redirectUrl.includes("?") ? "&" : "?") + "auth_callback=1";
  document.location.href = genAuthorizeUrl(oppUrl, clientId, redirectUrl, state);
}

async function tokenRequest(oppUrl, clientId, data) {
  // Browsers don't allow fetching tokens from https -> http.
  // Throw an error because it's a pain to debug this.
  // Guard against not working in node.
  const l = typeof location !== "undefined" && location;

  if (l && l.protocol === "https:") {
    // Ensure that the oppUrl is hosted on https.
    const a = document.createElement("a");
    a.href = oppUrl;

    if (a.protocol === "http:" && a.hostname !== "localhost") {
      throw _errors__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_HTTPS_TO_HTTP"];
    }
  }

  const formData = new FormData();

  if (clientId !== null) {
    formData.append("client_id", clientId);
  }

  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  const resp = await fetch(`${oppUrl}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: formData
  });

  if (!resp.ok) {
    throw resp.status === 400
    /* auth invalid */
    || resp.status === 403
    /* user not active */
    ? _errors__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_AUTH"] : new Error("Unable to fetch tokens");
  }

  const tokens = await resp.json();
  tokens.oppUrl = oppUrl;
  tokens.clientId = clientId;
  tokens.expires = genExpires(tokens.expires_in);
  return tokens;
}

function fetchToken(oppUrl, clientId, code) {
  return tokenRequest(oppUrl, clientId, {
    code,
    grant_type: "authorization_code"
  });
}

function encodeOAuthState(state) {
  return btoa(JSON.stringify(state));
}

function decodeOAuthState(encoded) {
  return JSON.parse(atob(encoded));
}

class Auth {
  constructor(data, saveTokens) {
    _defineProperty(this, "_saveTokens", void 0);

    _defineProperty(this, "data", void 0);

    this.data = data;
    this._saveTokens = saveTokens;
  }

  get wsUrl() {
    // Convert from http:// -> ws://, https:// -> wss://
    return `ws${this.data.oppUrl.substr(4)}/api/websocket`;
  }

  get accessToken() {
    return this.data.access_token;
  }

  get expired() {
    return Date.now() > this.data.expires;
  }
  /**
   * Refresh the access token.
   */


  async refreshAccessToken() {
    const data = await tokenRequest(this.data.oppUrl, this.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: this.data.refresh_token
    }); // Access token response does not contain refresh token.

    data.refresh_token = this.data.refresh_token;
    this.data = data;
    if (this._saveTokens) this._saveTokens(data);
  }
  /**
   * Revoke the refresh & access tokens.
   */


  async revoke() {
    const formData = new FormData();
    formData.append("action", "revoke");
    formData.append("token", this.data.refresh_token); // There is no error checking, as revoke will always return 200

    await fetch(`${this.data.oppUrl}/auth/token`, {
      method: "POST",
      credentials: "same-origin",
      body: formData
    });

    if (this._saveTokens) {
      this._saveTokens(null);
    }
  }

}
async function getAuth(options = {}) {
  let data;
  let oppUrl = options.oppUrl; // Strip trailing slash.

  if (oppUrl && oppUrl[oppUrl.length - 1] === "/") {
    oppUrl = oppUrl.substr(0, oppUrl.length - 1);
  }

  const clientId = options.clientId !== undefined ? options.clientId : genClientId(); // Use auth code if it was passed in

  if (!data && options.authCode && oppUrl) {
    data = await fetchToken(oppUrl, clientId, options.authCode);

    if (options.saveTokens) {
      options.saveTokens(data);
    }
  } // Check if we came back from an authorize redirect


  if (!data) {
    const query = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseQuery"])(location.search.substr(1)); // Check if we got redirected here from authorize page

    if ("auth_callback" in query) {
      // Restore state
      const state = decodeOAuthState(query.state);
      data = await fetchToken(state.oppUrl, state.clientId, query.code);

      if (options.saveTokens) {
        options.saveTokens(data);
      }
    }
  } // Check for stored tokens


  if (!data && options.loadTokens) {
    data = await options.loadTokens();
  }

  if (data) {
    return new Auth(data, options.saveTokens);
  }

  if (oppUrl === undefined) {
    throw _errors__WEBPACK_IMPORTED_MODULE_1__["ERR_OPP_HOST_REQUIRED"];
  } // If no tokens found but a oppUrl was passed in, let's go get some tokens!


  redirectAuthorize(oppUrl, clientId, options.redirectUrl || genRedirectUrl(), encodeOAuthState({
    oppUrl,
    clientId
  })); // Just don't resolve while we navigate to next page

  return new Promise(() => {});
}

/***/ }),

/***/ "./src/websocket/lib/collection.ts":
/*!*****************************************!*\
  !*** ./src/websocket/lib/collection.ts ***!
  \*****************************************/
/*! exports provided: getCollection, createCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return createCollection; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/websocket/lib/store.ts");

const getCollection = (conn, key, fetchCollection, subscribeUpdates) => {
  if (conn[key]) {
    return conn[key];
  }

  let active = 0;
  let unsubProm;
  let store = Object(_store__WEBPACK_IMPORTED_MODULE_0__["createStore"])();

  const refresh = () => fetchCollection(conn).then(state => store.setState(state, true));

  const refreshSwallow = () => refresh().catch(err => {
    // Swallow errors if socket is connecting, closing or closed.
    // We will automatically call refresh again when we re-establish the connection.
    // Using conn.socket.OPEN instead of WebSocket for better node support
    if (conn.socket.readyState == conn.socket.OPEN) {
      throw err;
    }
  });

  conn[key] = {
    get state() {
      return store.state;
    },

    refresh,

    subscribe(subscriber) {
      active++; // If this was the first subscriber, attach collection

      if (active === 1) {
        if (subscribeUpdates) {
          unsubProm = subscribeUpdates(conn, store);
        } // Fetch when connection re-established.


        conn.addEventListener("ready", refreshSwallow);
        refreshSwallow();
      }

      const unsub = store.subscribe(subscriber);

      if (store.state !== undefined) {
        // Don't call it right away so that caller has time
        // to initialize all the things.
        setTimeout(() => subscriber(store.state), 0);
      }

      return () => {
        unsub();
        active--;

        if (!active) {
          // Unsubscribe from changes
          if (unsubProm) unsubProm.then(unsub => {
            unsub();
          });
          conn.removeEventListener("ready", refresh);
        }
      };
    }

  };
  return conn[key];
}; // Legacy name. It gets a collection and subscribes.

const createCollection = (key, fetchCollection, subscribeUpdates, conn, onChange) => getCollection(conn, key, fetchCollection, subscribeUpdates).subscribe(onChange);

/***/ }),

/***/ "./src/websocket/lib/commands.ts":
/*!***************************************!*\
  !*** ./src/websocket/lib/commands.ts ***!
  \***************************************/
/*! exports provided: getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return getStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/websocket/lib/messages.ts");

const getStates = connection => connection.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["states"]());
const getServices = connection => connection.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["services"]());
const getConfig = connection => connection.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["config"]());
const getUser = connection => connection.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["user"]());
const callService = (connection, domain, service, serviceData) => connection.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["callService"](domain, service, serviceData));

/***/ }),

/***/ "./src/websocket/lib/config.ts":
/*!*************************************!*\
  !*** ./src/websocket/lib/config.ts ***!
  \*************************************/
/*! exports provided: subscribeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return subscribeConfig; });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/websocket/lib/collection.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./src/websocket/lib/commands.ts");



function processComponentLoaded(state, event) {
  if (state === undefined) return null;
  return {
    components: state.components.concat(event.data.component)
  };
}

const fetchConfig = conn => Object(_commands__WEBPACK_IMPORTED_MODULE_1__["getConfig"])(conn);

const subscribeUpdates = (conn, store) => Promise.all([conn.subscribeEvents(store.action(processComponentLoaded), "component_loaded"), conn.subscribeEvents(() => fetchConfig(conn).then(config => store.setState(config, true)), "core_config_updated")]).then(unsubs => () => unsubs.forEach(unsub => unsub()));

const configColl = conn => Object(_collection__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_cnf", fetchConfig, subscribeUpdates);

const subscribeConfig = (conn, onChange) => configColl(conn).subscribe(onChange);

/***/ }),

/***/ "./src/websocket/lib/connection.ts":
/*!*****************************************!*\
  !*** ./src/websocket/lib/connection.ts ***!
  \*****************************************/
/*! exports provided: Connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/websocket/lib/messages.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/websocket/lib/errors.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Connection that wraps a socket and provides an interface to interact with
 * the Open Peer Power websocket API.
 */


const DEBUG = false;
class Connection {
  // @ts-ignore: incorrectly claiming it's not set in constructor.
  constructor(socket, options) {
    _defineProperty(this, "options", void 0);

    _defineProperty(this, "commandId", void 0);

    _defineProperty(this, "commands", void 0);

    _defineProperty(this, "eventListeners", void 0);

    _defineProperty(this, "closeRequested", void 0);

    _defineProperty(this, "socket", void 0);

    // connection options
    //  - setupRetry: amount of ms to retry when unable to connect on initial setup
    //  - createSocket: create a new Socket connection
    this.options = options; // id if next command to send

    this.commandId = 1; // info about active subscriptions and commands in flight

    this.commands = new Map(); // map of event listeners

    this.eventListeners = new Map(); // true if a close is requested by the user

    this.closeRequested = false;
    this.setSocket(socket);
  }

  setSocket(socket) {
    const oldSocket = this.socket;
    this.socket = socket;
    socket.addEventListener("message", ev => this._handleMessage(ev));
    socket.addEventListener("close", ev => this._handleClose(ev));

    if (oldSocket) {
      const oldCommands = this.commands; // reset to original state

      this.commandId = 1;
      this.commands = new Map();
      oldCommands.forEach(info => {
        if ("subscribe" in info) {
          info.subscribe().then(unsub => {
            info.unsubscribe = unsub; // We need to resolve this in case it wasn't resolved yet.
            // This allows us to subscribe while we're disconnected
            // and recover properly.

            info.resolve();
          });
        }
      });
      this.fireEvent("ready");
    }
  }

  addEventListener(eventType, callback) {
    let listeners = this.eventListeners.get(eventType);

    if (!listeners) {
      listeners = [];
      this.eventListeners.set(eventType, listeners);
    }

    listeners.push(callback);
  }

  removeEventListener(eventType, callback) {
    const listeners = this.eventListeners.get(eventType);

    if (!listeners) {
      return;
    }

    const index = listeners.indexOf(callback);

    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  fireEvent(eventType, eventData) {
    (this.eventListeners.get(eventType) || []).forEach(callback => callback(this, eventData));
  }

  close() {
    this.closeRequested = true;
    this.socket.close();
  }
  /**
   * Subscribe to a specific or all events.
   *
   * @param callback Callback  to be called when a new event fires
   * @param eventType
   * @returns promise that resolves to an unsubscribe function
   */


  async subscribeEvents(callback, eventType) {
    return this.subscribeMessage(callback, _messages__WEBPACK_IMPORTED_MODULE_0__["subscribeEvents"](eventType));
  }

  ping() {
    return this.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["ping"]());
  }

  sendMessage(message, commandId) {
    if (DEBUG) {
      console.log("Sending", message);
    }

    if (!commandId) {
      commandId = this._genCmdId();
    }

    message.id = commandId;
    this.socket.send(JSON.stringify(message));
  }

  sendMessagePromise(message) {
    return new Promise((resolve, reject) => {
      const commandId = this._genCmdId();

      this.commands.set(commandId, {
        resolve,
        reject
      });
      this.sendMessage(message, commandId);
    });
  }
  /**
   * Call a websocket command that starts a subscription on the backend.
   *
   * @param message the message to start the subscription
   * @param callback the callback to be called when a new item arrives
   * @returns promise that resolves to an unsubscribe function
   */


  async subscribeMessage(callback, subscribeMessage) {
    // Command ID that will be used
    const commandId = this._genCmdId();

    let info;
    await new Promise((resolve, reject) => {
      // We store unsubscribe on info object. That way we can overwrite it in case
      // we get disconnected and we have to subscribe again.
      info = {
        resolve,
        reject,
        callback,
        subscribe: () => this.subscribeMessage(callback, subscribeMessage),
        unsubscribe: async () => {
          await this.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["unsubscribeEvents"](commandId));
          this.commands.delete(commandId);
        }
      };
      this.commands.set(commandId, info);

      try {
        this.sendMessage(subscribeMessage, commandId);
      } catch (err) {// Happens when the websocket is already closing.
        // Don't have to handle the error, reconnect logic will pick it up.
      }
    });
    return () => info.unsubscribe();
  }

  _handleMessage(event) {
    const message = JSON.parse(event.data);

    if (DEBUG) {
      console.log("Received", message);
    }

    const info = this.commands.get(message.id);

    switch (message.type) {
      case "event":
        if (info) {
          info.callback(message.event);
        } else {
          console.warn(`Received event for unknown subscription ${message.id}. Unsubscribing.`);
          this.sendMessagePromise(_messages__WEBPACK_IMPORTED_MODULE_0__["unsubscribeEvents"](message.id));
        }

        break;

      case "result":
        // No info is fine. If just sendMessage is used, we did not store promise for result
        if (info) {
          if (message.success) {
            info.resolve(message.result); // Don't remove subscriptions.

            if (!("subscribe" in info)) {
              this.commands.delete(message.id);
            }
          } else {
            info.reject(message.error);
            this.commands.delete(message.id);
          }
        }

        break;

      case "pong":
        if (info) {
          info.resolve();
          this.commands.delete(message.id);
        } else {
          console.warn(`Received unknown pong response ${message.id}`);
        }

        break;

      default:
        if (DEBUG) {
          console.warn("Unhandled message", message);
        }

    }
  }

  _handleClose(ev) {
    // Reject in-flight sendMessagePromise requests
    this.commands.forEach(info => {
      // We don't cancel subscribeEvents commands in flight
      // as we will be able to recover them.
      if (!("subscribe" in info)) {
        info.reject(_messages__WEBPACK_IMPORTED_MODULE_0__["error"](_errors__WEBPACK_IMPORTED_MODULE_1__["ERR_CONNECTION_LOST"], "Connection lost"));
      }
    });

    if (this.closeRequested) {
      return;
    }

    this.fireEvent("disconnected"); // Disable setupRetry, we control it here with auto-backoff

    const options = Object.assign({}, this.options, {
      setupRetry: 0
    });

    const reconnect = tries => {
      setTimeout(async () => {
        if (DEBUG) {
          console.log("Trying to reconnect");
        }

        try {
          const socket = await options.createSocket(options);
          this.setSocket(socket);
        } catch (err) {
          if (err === _errors__WEBPACK_IMPORTED_MODULE_1__["ERR_INVALID_AUTH"]) {
            this.fireEvent("reconnect-error", err);
          } else {
            reconnect(tries + 1);
          }
        }
      }, Math.min(tries, 5) * 1000);
    };

    reconnect(0);
  }

  _genCmdId() {
    return ++this.commandId;
  }

}

/***/ }),

/***/ "./src/websocket/lib/entities.ts":
/*!***************************************!*\
  !*** ./src/websocket/lib/entities.ts ***!
  \***************************************/
/*! exports provided: entitiesColl, subscribeEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return entitiesColl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return subscribeEntities; });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/websocket/lib/collection.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./src/websocket/lib/commands.ts");



function processEvent(store, event) {
  const state = store.state;
  if (state === undefined) return;
  const {
    entity_id,
    new_state
  } = event.data;

  if (new_state) {
    store.setState({
      [new_state.entity_id]: new_state
    });
  } else {
    const newEntities = Object.assign({}, state);
    delete newEntities[entity_id];
    store.setState(newEntities, true);
  }
}

async function fetchEntities(conn) {
  const states = await Object(_commands__WEBPACK_IMPORTED_MODULE_1__["getStates"])(conn);
  const entities = {};

  for (let i = 0; i < states.length; i++) {
    const state = states[i];
    entities[state.entity_id] = state;
  }

  return entities;
}

const subscribeUpdates = (conn, store) => conn.subscribeEvents(ev => processEvent(store, ev), "state_changed");

const entitiesColl = conn => Object(_collection__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_ent", fetchEntities, subscribeUpdates);
const subscribeEntities = (conn, onChange) => entitiesColl(conn).subscribe(onChange);

/***/ }),

/***/ "./src/websocket/lib/errors.ts":
/*!*************************************!*\
  !*** ./src/websocket/lib/errors.ts ***!
  \*************************************/
/*! exports provided: ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_OPP_HOST_REQUIRED, ERR_INVALID_HTTPS_TO_HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return ERR_CANNOT_CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return ERR_INVALID_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return ERR_CONNECTION_LOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_OPP_HOST_REQUIRED", function() { return ERR_OPP_HOST_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return ERR_INVALID_HTTPS_TO_HTTP; });
const ERR_CANNOT_CONNECT = 1;
const ERR_INVALID_AUTH = 2;
const ERR_CONNECTION_LOST = 3;
const ERR_OPP_HOST_REQUIRED = 4;
const ERR_INVALID_HTTPS_TO_HTTP = 5;

/***/ }),

/***/ "./src/websocket/lib/index.ts":
/*!************************************!*\
  !*** ./src/websocket/lib/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return createConnection; });
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ "./src/websocket/lib/socket.ts");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ "./src/websocket/lib/connection.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/websocket/lib/auth.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["genClientId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["genExpires"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["Auth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return _auth__WEBPACK_IMPORTED_MODULE_2__["getAuth"]; });

/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection */ "./src/websocket/lib/collection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return _collection__WEBPACK_IMPORTED_MODULE_3__["getCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return _collection__WEBPACK_IMPORTED_MODULE_3__["createCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return _connection__WEBPACK_IMPORTED_MODULE_1__["Connection"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/websocket/lib/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_4__["subscribeConfig"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/websocket/lib/services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return _services__WEBPACK_IMPORTED_MODULE_5__["subscribeServices"]; });

/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities */ "./src/websocket/lib/entities.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return _entities__WEBPACK_IMPORTED_MODULE_6__["entitiesColl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return _entities__WEBPACK_IMPORTED_MODULE_6__["subscribeEntities"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors */ "./src/websocket/lib/errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return _errors__WEBPACK_IMPORTED_MODULE_7__["ERR_CANNOT_CONNECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return _errors__WEBPACK_IMPORTED_MODULE_7__["ERR_INVALID_AUTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return _errors__WEBPACK_IMPORTED_MODULE_7__["ERR_CONNECTION_LOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_OPP_HOST_REQUIRED", function() { return _errors__WEBPACK_IMPORTED_MODULE_7__["ERR_OPP_HOST_REQUIRED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return _errors__WEBPACK_IMPORTED_MODULE_7__["ERR_INVALID_HTTPS_TO_HTTP"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./src/websocket/lib/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_8__) if(["createConnection","genClientId","genExpires","Auth","getAuth","getCollection","createCollection","Connection","subscribeConfig","subscribeServices","entitiesColl","subscribeEntities","ERR_CANNOT_CONNECT","ERR_INVALID_AUTH","ERR_CONNECTION_LOST","ERR_OPP_HOST_REQUIRED","ERR_INVALID_HTTPS_TO_HTTP","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commands */ "./src/websocket/lib/commands.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return _commands__WEBPACK_IMPORTED_MODULE_9__["getStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return _commands__WEBPACK_IMPORTED_MODULE_9__["getServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return _commands__WEBPACK_IMPORTED_MODULE_9__["getConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _commands__WEBPACK_IMPORTED_MODULE_9__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return _commands__WEBPACK_IMPORTED_MODULE_9__["callService"]; });












const defaultConnectionOptions = {
  setupRetry: 0,
  createSocket: _socket__WEBPACK_IMPORTED_MODULE_0__["createSocket"]
};
async function createConnection(options) {
  const connOptions = Object.assign({}, defaultConnectionOptions, options);
  const socket = await connOptions.createSocket(connOptions);
  const conn = new _connection__WEBPACK_IMPORTED_MODULE_1__["Connection"](socket, connOptions);
  return conn;
}

/***/ }),

/***/ "./src/websocket/lib/messages.ts":
/*!***************************************!*\
  !*** ./src/websocket/lib/messages.ts ***!
  \***************************************/
/*! exports provided: auth, states, config, services, user, callService, subscribeEvents, unsubscribeEvents, ping, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEvents", function() { return subscribeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeEvents", function() { return unsubscribeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ping", function() { return ping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
function auth(accessToken) {
  return {
    type: "auth",
    access_token: accessToken
  };
}
function states() {
  return {
    type: "get_states"
  };
}
function config() {
  return {
    type: "get_config"
  };
}
function services() {
  return {
    type: "get_services"
  };
}
function user() {
  return {
    type: "auth/current_user"
  };
}
function callService(domain, service, serviceData) {
  const message = {
    type: "call_service",
    domain,
    service
  };

  if (serviceData) {
    message.service_data = serviceData;
  }

  return message;
}
function subscribeEvents(eventType) {
  const message = {
    type: "subscribe_events"
  };

  if (eventType) {
    message.event_type = eventType;
  }

  return message;
}
function unsubscribeEvents(subscription) {
  return {
    type: "unsubscribe_events",
    subscription
  };
}
function ping() {
  return {
    type: "ping"
  };
}
function error(code, message) {
  return {
    type: "result",
    success: false,
    error: {
      code,
      message
    }
  };
}

/***/ }),

/***/ "./src/websocket/lib/services.ts":
/*!***************************************!*\
  !*** ./src/websocket/lib/services.ts ***!
  \***************************************/
/*! exports provided: subscribeServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return subscribeServices; });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/websocket/lib/collection.ts");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./src/websocket/lib/commands.ts");



function processServiceRegistered(state, event) {
  if (state === undefined) return null;
  const {
    domain,
    service
  } = event.data;
  const domainInfo = Object.assign({}, state[domain], {
    [service]: {
      description: "",
      fields: {}
    }
  });
  return {
    [domain]: domainInfo
  };
}

function processServiceRemoved(state, event) {
  if (state === undefined) return null;
  const {
    domain,
    service
  } = event.data;
  const curDomainInfo = state[domain];
  if (!curDomainInfo || !(service in curDomainInfo)) return null;
  const domainInfo = {};
  Object.keys(curDomainInfo).forEach(sKey => {
    if (sKey !== service) domainInfo[sKey] = curDomainInfo[sKey];
  });
  return {
    [domain]: domainInfo
  };
}

const fetchServices = conn => Object(_commands__WEBPACK_IMPORTED_MODULE_1__["getServices"])(conn);

const subscribeUpdates = (conn, store) => Promise.all([conn.subscribeEvents(store.action(processServiceRegistered), "service_registered"), conn.subscribeEvents(store.action(processServiceRemoved), "service_removed")]).then(unsubs => () => unsubs.forEach(fn => fn()));

const servicesColl = conn => Object(_collection__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_srv", fetchServices, subscribeUpdates);

const subscribeServices = (conn, onChange) => servicesColl(conn).subscribe(onChange);

/***/ }),

/***/ "./src/websocket/lib/socket.ts":
/*!*************************************!*\
  !*** ./src/websocket/lib/socket.ts ***!
  \*************************************/
/*! exports provided: createSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSocket", function() { return createSocket; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/websocket/lib/errors.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/websocket/lib/messages.ts");
/**
 * Create a web socket connection with a Open Peer Power instance.
 */


const DEBUG = false;
const MSG_TYPE_AUTH_REQUIRED = "auth_required";
const MSG_TYPE_AUTH_INVALID = "auth_invalid";
const MSG_TYPE_AUTH_OK = "auth_ok";
function createSocket(options) {
  if (!options.auth) {
    throw _errors__WEBPACK_IMPORTED_MODULE_0__["ERR_OPP_HOST_REQUIRED"];
  }

  const auth = options.auth; // Start refreshing expired tokens even before the WS connection is open.
  // We know that we will need auth anyway.

  let authRefreshTask = auth.expired ? auth.refreshAccessToken().then(() => {
    authRefreshTask = undefined;
  }, () => {
    authRefreshTask = undefined;
  }) : undefined; // Convert from http:// -> ws://, https:// -> wss://

  const url = auth.wsUrl;

  if (DEBUG) {
    console.log("[Auth phase] Initializing", url);
  }

  function connect(triesLeft, promResolve, promReject) {
    if (DEBUG) {
      console.log("[Auth Phase] New connection", url);
    }

    const socket = new WebSocket(url); // If invalid auth, we will not try to reconnect.

    let invalidAuth = false;

    const closeMessage = () => {
      // If we are in error handler make sure close handler doesn't also fire.
      socket.removeEventListener("close", closeMessage);

      if (invalidAuth) {
        promReject(_errors__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]);
        return;
      } // Reject if we no longer have to retry


      if (triesLeft === 0) {
        // We never were connected and will not retry
        promReject(_errors__WEBPACK_IMPORTED_MODULE_0__["ERR_CANNOT_CONNECT"]);
        return;
      }

      const newTries = triesLeft === -1 ? -1 : triesLeft - 1; // Try again in a second

      setTimeout(() => connect(newTries, promResolve, promReject), 1000);
    }; // Auth is mandatory, so we can send the auth message right away.


    const handleOpen = async event => {
      try {
        if (auth.expired) {
          await (authRefreshTask ? authRefreshTask : auth.refreshAccessToken());
        }

        socket.send(JSON.stringify(_messages__WEBPACK_IMPORTED_MODULE_1__["auth"](auth.accessToken)));
      } catch (err) {
        // Refresh token failed
        invalidAuth = err === _errors__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"];
        socket.close();
      }
    };

    const handleMessage = async event => {
      const message = JSON.parse(event.data);

      if (DEBUG) {
        console.log("[Auth phase] Received", message);
      }

      switch (message.type) {
        case MSG_TYPE_AUTH_INVALID:
          invalidAuth = true;
          socket.close();
          break;

        case MSG_TYPE_AUTH_OK:
          socket.removeEventListener("open", handleOpen);
          socket.removeEventListener("message", handleMessage);
          socket.removeEventListener("close", closeMessage);
          socket.removeEventListener("error", closeMessage);
          promResolve(socket);
          break;

        default:
          if (DEBUG) {
            // We already send this message when socket opens
            if (message.type !== MSG_TYPE_AUTH_REQUIRED) {
              console.warn("[Auth phase] Unhandled message", message);
            }
          }

      }
    };

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("close", closeMessage);
    socket.addEventListener("error", closeMessage);
  }

  return new Promise((resolve, reject) => connect(options.setupRetry, resolve, reject));
}

/***/ }),

/***/ "./src/websocket/lib/store.ts":
/*!************************************!*\
  !*** ./src/websocket/lib/store.ts ***!
  \************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
// (c) Jason Miller
// Unistore - MIT license
// And then adopted to our needs + typescript
const createStore = state => {
  let listeners = [];

  function unsubscribe(listener) {
    let out = [];

    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener) {
        listener = null;
      } else {
        out.push(listeners[i]);
      }
    }

    listeners = out;
  }

  function setState(update, overwrite) {
    state = overwrite ? update : Object.assign({}, state, update);
    let currentListeners = listeners;

    for (let i = 0; i < currentListeners.length; i++) {
      currentListeners[i](state);
    }
  }
  /**
   * An observable state container, returned from {@link createStore}
   * @name store
   */


  return {
    get state() {
      return state;
    },

    /**
     * Create a bound copy of the given action function.
     * The bound returned function invokes action() and persists the result back to the store.
     * If the return value of `action` is a Promise, the resolved value will be used as state.
     * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
     * @returns {Function} boundAction()
     */
    action(action) {
      function apply(result) {
        setState(result, false);
      } // Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500


      return function () {
        let args = [state];

        for (let i = 0; i < arguments.length; i++) args.push(arguments[i]); // @ts-ignore


        let ret = action.apply(this, args);

        if (ret != null) {
          if (ret.then) return ret.then(apply);
          return apply(ret);
        }
      };
    },

    /**
     * Apply a partial state object to the current state, invoking registered listeners.
     * @param {Object} update				An object with properties to be merged into state
     * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
     */
    setState,

    /**
     * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
     * @param {Function} listener	A function to call when state changes. Gets passed the new state.
     * @returns {Function} unsubscribe()
     */
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        unsubscribe(listener);
      };
    } // /**
    //  * Remove a previously-registered listener function.
    //  * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
    //  * @function
    //  */
    // unsubscribe,


  };
};

/***/ }),

/***/ "./src/websocket/lib/types.ts":
/*!************************************!*\
  !*** ./src/websocket/lib/types.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/websocket/lib/util.ts":
/*!***********************************!*\
  !*** ./src/websocket/lib/util.ts ***!
  \***********************************/
/*! exports provided: parseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
function parseQuery(queryString) {
  const query = {};
  const items = queryString.split("&");

  for (let i = 0; i < items.length; i++) {
    const item = items[i].split("=");
    const key = decodeURIComponent(item[0]);
    const value = item.length > 1 ? decodeURIComponent(item[1]) : undefined;
    query[key] = value;
  }

  return query;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RldmNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy1wYW5lbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtdGhlbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNvY2tldC9saWIvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9jb2xsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQvbGliL2NvbW1hbmRzLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQvbGliL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9jb25uZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQvbGliL2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQvbGliL2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2xpYi9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNvY2tldC9saWIvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNvY2tldC9saWIvdXRpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9mcm9udGVuZF9sYXRlc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHNcIik7XG4iLCJpbXBvcnQgeyBBdXRoRGF0YSB9IGZyb20gXCIuLi8uLi93ZWJzb2NrZXQvbGliXCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlIHx8IHt9O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fdG9rZW5DYWNoZToge1xuICAgICAgLy8gdW5kZWZpbmVkOiB3ZSBoYXZlbid0IGxvYWRlZCB5ZXRcbiAgICAgIC8vIG51bGw6IG5vbmUgc3RvcmVkXG4gICAgICB0b2tlbnM/OiBBdXRoRGF0YSB8IG51bGw7XG4gICAgICB3cml0ZUVuYWJsZWQ/OiBib29sZWFuO1xuICAgIH07XG4gIH1cbn1cblxuLy8gU28gdGhhdCBjb3JlLmpzIGFuZCBtYWluIGFwcCBoaXQgc2FtZSBzaGFyZWQgb2JqZWN0LlxubGV0IHRva2VuQ2FjaGUgPSB3aW5kb3cuX190b2tlbkNhY2hlO1xuaWYgKCF0b2tlbkNhY2hlKSB7XG4gIHRva2VuQ2FjaGUgPSB3aW5kb3cuX190b2tlbkNhY2hlID0ge1xuICAgIHRva2VuczogdW5kZWZpbmVkLFxuICAgIHdyaXRlRW5hYmxlZDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNrV3JpdGUoKSB7XG4gIHJldHVybiAoXG4gICAgdG9rZW5DYWNoZS50b2tlbnMgIT09IHVuZGVmaW5lZCAmJiB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9PT0gdW5kZWZpbmVkXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9rZW5zKHRva2VuczogQXV0aERhdGEgfCBudWxsKSB7XG4gIHRva2VuQ2FjaGUudG9rZW5zID0gdG9rZW5zO1xuICBpZiAodG9rZW5DYWNoZS53cml0ZUVuYWJsZWQpIHtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZS5vcHBUb2tlbnMgPSBKU09OLnN0cmluZ2lmeSh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gd3JpdGUgZmFpbGVkLCBpZ25vcmUgaXQuIEhhcHBlbnMgaWYgc3RvcmFnZSBpcyBmdWxsIG9yIHByaXZhdGUgbW9kZS5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVdyaXRlKCkge1xuICB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9IHRydWU7XG4gIGlmICh0b2tlbkNhY2hlLnRva2Vucykge1xuICAgIHNhdmVUb2tlbnModG9rZW5DYWNoZS50b2tlbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9rZW5zKCkge1xuICBpZiAodG9rZW5DYWNoZS50b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBEZWxldGUgdGhlIG9sZCB0b2tlbiBjYWNoZS5cbiAgICAgIGRlbGV0ZSBzdG9yYWdlLnRva2VucztcbiAgICAgIGNvbnN0IHRva2VucyA9IHN0b3JhZ2Uub3BwVG9rZW5zO1xuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICB0b2tlbkNhY2hlLnRva2VucyA9IEpTT04ucGFyc2UodG9rZW5zKTtcbiAgICAgICAgdG9rZW5DYWNoZS53cml0ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9rZW5DYWNoZS50b2tlbnM7XG59XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRQYXRoIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgb3BwVXJsID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9YDtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFBhdGggPSAoXG4gIG9wcDogT3BlblBlZXJQb3dlcixcbiAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNpZ25lZFBhdGg+ID0+IG9wcC5jYWxsV1MoeyB0eXBlOiBcImF1dGgvc2lnbl9wYXRoXCIsIHBhdGggfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhQcm92aWRlcnMgPSAoKSA9PlxuICBmZXRjaChcIi9hdXRoL3Byb3ZpZGVyc1wiLCB7XG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBnZXRDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL3dlYnNvY2tldC9saWJcIjtcbmltcG9ydCB7IE9QUERvbUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERldmNvbkNvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB2aWV3czogRGV2Y29uVmlld0NvbmZpZ1tdO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICByZXNvdXJjZXM/OiBBcnJheTx7IHR5cGU6IFwiY3NzXCIgfCBcImpzXCIgfCBcIm1vZHVsZVwiIHwgXCJodG1sXCI7IHVybDogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmNvblZpZXdDb25maWcge1xuICBpbmRleD86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhZGdlcz86IEFycmF5PHN0cmluZyB8IERldmNvbkJhZGdlQ29uZmlnPjtcbiAgY2FyZHM/OiBEZXZjb25DYXJkQ29uZmlnW107XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHRoZW1lPzogc3RyaW5nO1xuICBwYW5lbD86IGJvb2xlYW47XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIHZpc2libGU/OiBib29sZWFuIHwgU2hvd1ZpZXdDb25maWdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93Vmlld0NvbmZpZyB7XG4gIHVzZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2Y29uQmFkZ2VDb25maWcge1xuICB0eXBlPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2Y29uQ2FyZENvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB2aWV3X2luZGV4PzogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIjtcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlX2RhdGE/OiB7XG4gICAgZW50aXR5X2lkPzogc3RyaW5nIHwgW3N0cmluZ107XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJuYXZpZ2F0ZVwiO1xuICBuYXZpZ2F0aW9uX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInVybFwiO1xuICB1cmxfcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcmVJbmZvQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJtb3JlLWluZm9cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb0FjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibm9uZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbUFjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwiZmlyZS1kb20tZXZlbnRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgY29uZmlybWF0aW9uPzogQ29uZmlybWF0aW9uUmVzdHJpY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uUmVzdHJpY3Rpb25Db25maWcge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBleGVtcHRpb25zPzogUmVzdHJpY3Rpb25Db25maWdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXN0cmljdGlvbkNvbmZpZyB7XG4gIHVzZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uQ29uZmlnID1cbiAgfCBUb2dnbGVBY3Rpb25Db25maWdcbiAgfCBDYWxsU2VydmljZUFjdGlvbkNvbmZpZ1xuICB8IE5hdmlnYXRlQWN0aW9uQ29uZmlnXG4gIHwgVXJsQWN0aW9uQ29uZmlnXG4gIHwgTW9yZUluZm9BY3Rpb25Db25maWdcbiAgfCBOb0FjdGlvbkNvbmZpZ1xuICB8IEN1c3RvbUFjdGlvbkNvbmZpZztcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBmb3JjZTogYm9vbGVhblxuKTogUHJvbWlzZTxEZXZjb25Db25maWc+ID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImRldmNvbi9jb25maWdcIixcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29uZmlnID0gKFxuICBvcHA6IE9wZW5QZWVyUG93ZXIsXG4gIGNvbmZpZzogRGV2Y29uQ29uZmlnXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiZGV2Y29uL2NvbmZpZy9zYXZlXCIsXG4gICAgY29uZmlnLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZyA9IChvcHA6IE9wZW5QZWVyUG93ZXIpOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG9wcC5jYWxsV1Moe1xuICAgIHR5cGU6IFwiZGV2Y29uL2NvbmZpZy9kZWxldGVcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZjb25VcGRhdGVzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKCkgPT4gdm9pZFxuKSA9PiBjb25uLnN1YnNjcmliZUV2ZW50cyhvbkNoYW5nZSwgXCJkZXZjb25fdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldERldmNvbkNvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIFwiX2RldmNvblwiLFxuICAgIChjb25uMikgPT4gZmV0Y2hDb25maWcoY29ubjIsIGZhbHNlKSxcbiAgICAoX2Nvbm4sIHN0b3JlKSA9PlxuICAgICAgc3Vic2NyaWJlRGV2Y29uVXBkYXRlcyhjb25uLCAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZyhjb25uLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PiBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpKVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1dpdGhEZXZjb25Qcm9tIGV4dGVuZHMgV2luZG93IHtcbiAgbGxDb25mUHJvbT86IFByb21pc2U8RGV2Y29uQ29uZmlnPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25IYW5kbGVyT3B0aW9ucyB7XG4gIGhhc0hvbGQ/OiBib29sZWFuO1xuICBoYXNEb3VibGVDbGljaz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlckRldGFpbCB7XG4gIGFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25IYW5kbGVyRXZlbnQgPSBPUFBEb21FdmVudDxBY3Rpb25IYW5kbGVyRGV0YWlsPjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgUGFuZWxzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IGZldGNoUGFuZWxzID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImdldF9wYW5lbHNcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgICgpID0+IGZldGNoUGFuZWxzKGNvbm4pLnRoZW4oKHBhbmVscykgPT4gc3RvcmUuc2V0U3RhdGUocGFuZWxzLCB0cnVlKSksXG4gICAgXCJwYW5lbHNfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVQYW5lbHMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAocGFuZWxzOiBQYW5lbHMpID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxQYW5lbHM+KFxuICAgIFwiX3BubFwiLFxuICAgIGZldGNoUGFuZWxzLFxuICAgIHN1YnNjcmliZVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgZmV0Y2hUaGVtZXMgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiZnJvbnRlbmQvZ2V0X3RoZW1lc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgKCkgPT4gZmV0Y2hUaGVtZXMoY29ubikudGhlbigoZGF0YSkgPT4gc3RvcmUuc2V0U3RhdGUoZGF0YSwgdHJ1ZSkpLFxuICAgIFwidGhlbWVzX3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVGhlbWVzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHRoZW1lczogVGhlbWVzKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248VGhlbWVzPihcbiAgICBcIl90aG1cIixcbiAgICBmZXRjaFRoZW1lcyxcbiAgICBzdWJzY3JpYmVVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IGdldFVzZXIsIENvbm5lY3Rpb24sIGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vd2Vic29ja2V0L2xpYlwiO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oXG4gICAgY29ubixcbiAgICBcIl91c3JcIixcbiAgICAoKSA9PiBnZXRVc2VyKGNvbm4pIGFzIFByb21pc2U8Q3VycmVudFVzZXI+LFxuICAgIHVuZGVmaW5lZFxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVXNlciA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICh1c2VyOiBDdXJyZW50VXNlcikgPT4gdm9pZFxuKSA9PiB1c2VyQ29sbGVjdGlvbihjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlQ29ubmVjdGlvbixcbiAgc3Vic2NyaWJlQ29uZmlnLFxuICBzdWJzY3JpYmVFbnRpdGllcyxcbiAgc3Vic2NyaWJlU2VydmljZXMsXG4gIEVSUl9JTlZBTElEX0FVVEgsXG4gIEF1dGgsXG4gIENvbm5lY3Rpb24sXG59IGZyb20gXCIuLi93ZWJzb2NrZXQvbGliXCI7XG5cbmltcG9ydCB7IGxvYWRUb2tlbnMsIHNhdmVUb2tlbnMgfSBmcm9tIFwiLi4vY29tbW9uL2F1dGgvdG9rZW5fc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlUGFuZWxzIH0gZnJvbSBcIi4uL2RhdGEvd3MtcGFuZWxzXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVUaGVtZXMgfSBmcm9tIFwiLi4vZGF0YS93cy10aGVtZXNcIjtcbmltcG9ydCB7IHN1YnNjcmliZVVzZXIgfSBmcm9tIFwiLi4vZGF0YS93cy11c2VyXCI7XG5pbXBvcnQgeyBPcGVuUGVlclBvd2VyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBvcHBVcmwgfSBmcm9tIFwiLi4vZGF0YS9hdXRoXCI7XG5pbXBvcnQgeyBmZXRjaENvbmZpZywgV2luZG93V2l0aERldmNvblByb20gfSBmcm9tIFwiLi4vZGF0YS9kZXZjb25cIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBvcHBDb25uZWN0aW9uOiBQcm9taXNlPHsgYXV0aDogQXV0aDsgY29ubjogQ29ubmVjdGlvbiB9PjtcbiAgfVxufVxuXG5jb25zdCBhdXRoUHJvbSA9ICgpID0+XG4gIGdldEF1dGgoe1xuICAgIG9wcFVybCxcbiAgICBzYXZlVG9rZW5zLFxuICAgIGxvYWRUb2tlbnM6ICgpID0+IFByb21pc2UucmVzb2x2ZShsb2FkVG9rZW5zKCkpLFxuICB9KTtcblxuY29uc3QgY29ublByb20gPSBhc3luYyAoYXV0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHsgYXV0aCB9KTtcblxuICAgIC8vIENsZWFyIHVybCBpZiB3ZSBoYXZlIGJlZW4gYWJsZSB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImF1dGhfY2FsbGJhY2s9MVwiKSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciAhPT0gRVJSX0lOVkFMSURfQVVUSCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICAvLyBXZSBjYW4gZ2V0IGludmFsaWQgYXV0aCBpZiBhdXRoIHRva2VucyB3ZXJlIHN0b3JlZCB0aGF0IGFyZSBubyBsb25nZXIgdmFsaWRcbiAgICAvLyBDbGVhciBzdG9yZWQgdG9rZW5zLlxuICAgIHNhdmVUb2tlbnMobnVsbCk7XG4gICAgYXV0aCA9IGF3YWl0IGF1dGhQcm9tKCk7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oeyBhdXRoIH0pO1xuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfVxufTtcblxuaWYgKF9fREVWX18pIHtcbiAgLy8gUmVtb3ZlIGFkb3B0ZWRTdHlsZVNoZWV0cyBzbyBzdHlsZSBpbnNwZWN0b3Igd29ya3Mgb24gc2hhZG93IERPTS5cbiAgLy8gQHRzLWlnbm9yZVxuICBkZWxldGUgRG9jdW1lbnQucHJvdG90eXBlLmFkb3B0ZWRTdHlsZVNoZWV0cztcbiAgcGVyZm9ybWFuY2UubWFyayhcIm9wcC1zdGFydFwiKTtcbn1cbndpbmRvdy5vcHBDb25uZWN0aW9uID0gYXV0aFByb20oKS50aGVuKGNvbm5Qcm9tKTtcblxuLy8gU3RhcnQgZmV0Y2hpbmcgc29tZSBvZiB0aGUgZGF0YSB0aGF0IHdlIHdpbGwgbmVlZC5cbndpbmRvdy5vcHBDb25uZWN0aW9uLnRoZW4oKHsgY29ubiB9KSA9PiB7XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9O1xuICBzdWJzY3JpYmVFbnRpdGllcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlQ29uZmlnKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVTZXJ2aWNlcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlUGFuZWxzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVUaGVtZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVVzZXIoY29ubiwgbm9vcCk7XG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2RldmNvbi9cIikpIHtcbiAgICAod2luZG93IGFzIFdpbmRvd1dpdGhEZXZjb25Qcm9tKS5sbENvbmZQcm9tID0gZmV0Y2hDb25maWcoY29ubiwgZmFsc2UpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICBjb25zdCBvcGVuUGVlclBvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm9wZW4tcGVlci1wb3dlclwiKSBhcyBhbnk7XG4gIGlmIChcbiAgICBvcGVuUGVlclBvd2VyICYmXG4gICAgb3BlblBlZXJQb3dlci5vcHAgJiZcbiAgICAob3BlblBlZXJQb3dlci5vcHAgYXMgT3BlblBlZXJQb3dlcikuY2FsbFNlcnZpY2VcbiAgKSB7XG4gICAgb3BlblBlZXJQb3dlci5vcHAuY2FsbFNlcnZpY2UoXCJzeXN0ZW1fbG9nXCIsIFwid3JpdGVcIiwge1xuICAgICAgbG9nZ2VyOiBgZnJvbnRlbmQuJHtcbiAgICAgICAgX19ERVZfXyA/IFwianNfZGV2XCIgOiBcImpzXCJcbiAgICAgIH0uJHtfX0JVSUxEX199LiR7X19WRVJTSU9OX18ucmVwbGFjZShcIi5cIiwgXCJcIil9YCxcbiAgICAgIG1lc3NhZ2U6IGAke2UuZmlsZW5hbWV9OiR7ZS5saW5lbm99OiR7ZS5jb2xub30gJHtlLm1lc3NhZ2V9YCxcbiAgICB9KTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBwYXJzZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHtcbiAgRVJSX09QUF9IT1NUX1JFUVVJUkVELFxuICBFUlJfSU5WQUxJRF9BVVRILFxuICBFUlJfSU5WQUxJRF9IVFRQU19UT19IVFRQLFxufSBmcm9tIFwiLi9lcnJvcnNcIjtcblxuZXhwb3J0IHR5cGUgQXV0aERhdGEgPSB7XG4gIG9wcFVybDogc3RyaW5nO1xuICBjbGllbnRJZDogc3RyaW5nIHwgbnVsbDtcbiAgZXhwaXJlczogbnVtYmVyO1xuICByZWZyZXNoX3Rva2VuOiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xuICBleHBpcmVzX2luOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBTYXZlVG9rZW5zRnVuYyA9IChkYXRhOiBBdXRoRGF0YSB8IG51bGwpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBMb2FkVG9rZW5zRnVuYyA9ICgpID0+IFByb21pc2U8QXV0aERhdGEgfCBudWxsIHwgdW5kZWZpbmVkPjtcblxuZXhwb3J0IHR5cGUgZ2V0QXV0aE9wdGlvbnMgPSB7XG4gIG9wcFVybD86IHN0cmluZztcbiAgY2xpZW50SWQ/OiBzdHJpbmcgfCBudWxsO1xuICByZWRpcmVjdFVybD86IHN0cmluZztcbiAgYXV0aENvZGU/OiBzdHJpbmc7XG4gIHNhdmVUb2tlbnM/OiBTYXZlVG9rZW5zRnVuYztcbiAgbG9hZFRva2Vucz86IExvYWRUb2tlbnNGdW5jO1xufTtcblxudHlwZSBRdWVyeUNhbGxiYWNrRGF0YSA9XG4gIHwge31cbiAgfCB7XG4gICAgICBzdGF0ZTogc3RyaW5nO1xuICAgICAgY29kZTogc3RyaW5nO1xuICAgICAgYXV0aF9jYWxsYmFjazogc3RyaW5nO1xuICAgIH07XG5cbnR5cGUgT0F1dGhTdGF0ZSA9IHtcbiAgb3BwVXJsOiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmcgfCBudWxsO1xufTtcblxudHlwZSBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QgPSB7XG4gIGdyYW50X3R5cGU6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gIGNvZGU6IHN0cmluZztcbn07XG5cbnR5cGUgUmVmcmVzaFRva2VuUmVxdWVzdCA9IHtcbiAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCI7XG4gIHJlZnJlc2hfdG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5DbGllbnRJZCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9L2A7XG5cbmV4cG9ydCBjb25zdCBnZW5FeHBpcmVzID0gKGV4cGlyZXNfaW46IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiBleHBpcmVzX2luICogMTAwMCArIERhdGUubm93KCk7XG59O1xuXG5mdW5jdGlvbiBnZW5SZWRpcmVjdFVybCgpIHtcbiAgLy8gR2V0IGN1cnJlbnQgdXJsIGJ1dCB3aXRob3V0ICMgcGFydC5cbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCwgcGF0aG5hbWUsIHNlYXJjaCB9ID0gbG9jYXRpb247XG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofWA7XG59XG5cbmZ1bmN0aW9uIGdlbkF1dGhvcml6ZVVybChcbiAgb3BwVXJsOiBzdHJpbmcsXG4gIGNsaWVudElkOiBzdHJpbmcgfCBudWxsLFxuICByZWRpcmVjdFVybDogc3RyaW5nLFxuICBzdGF0ZTogc3RyaW5nXG4pIHtcbiAgbGV0IGF1dGhvcml6ZVVybCA9IGAke29wcFVybH0vYXV0aC9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICByZWRpcmVjdFVybFxuICApfWA7XG5cbiAgaWYgKGNsaWVudElkICE9PSBudWxsKSB7XG4gICAgYXV0aG9yaXplVXJsICs9IGAmY2xpZW50X2lkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudElkKX1gO1xuICB9XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgYXV0aG9yaXplVXJsICs9IGAmc3RhdGU9JHtlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpfWA7XG4gIH1cbiAgcmV0dXJuIGF1dGhvcml6ZVVybDtcbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RBdXRob3JpemUoXG4gIG9wcFVybDogc3RyaW5nLFxuICBjbGllbnRJZDogc3RyaW5nIHwgbnVsbCxcbiAgcmVkaXJlY3RVcmw6IHN0cmluZyxcbiAgc3RhdGU6IHN0cmluZ1xuKSB7XG4gIC8vIEFkZCBlaXRoZXIgP2F1dGhfY2FsbGJhY2s9MSBvciAmYXV0aF9jYWxsYmFjaz0xXG4gIHJlZGlyZWN0VXJsICs9IChyZWRpcmVjdFVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiKSArIFwiYXV0aF9jYWxsYmFjaz0xXCI7XG5cbiAgZG9jdW1lbnQubG9jYXRpb24hLmhyZWYgPSBnZW5BdXRob3JpemVVcmwoXG4gICAgb3BwVXJsLFxuICAgIGNsaWVudElkLFxuICAgIHJlZGlyZWN0VXJsLFxuICAgIHN0YXRlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRva2VuUmVxdWVzdChcbiAgb3BwVXJsOiBzdHJpbmcsXG4gIGNsaWVudElkOiBzdHJpbmcgfCBudWxsLFxuICBkYXRhOiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QgfCBSZWZyZXNoVG9rZW5SZXF1ZXN0XG4pIHtcbiAgLy8gQnJvd3NlcnMgZG9uJ3QgYWxsb3cgZmV0Y2hpbmcgdG9rZW5zIGZyb20gaHR0cHMgLT4gaHR0cC5cbiAgLy8gVGhyb3cgYW4gZXJyb3IgYmVjYXVzZSBpdCdzIGEgcGFpbiB0byBkZWJ1ZyB0aGlzLlxuICAvLyBHdWFyZCBhZ2FpbnN0IG5vdCB3b3JraW5nIGluIG5vZGUuXG4gIGNvbnN0IGwgPSB0eXBlb2YgbG9jYXRpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYXRpb247XG4gIGlmIChsICYmIGwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgb3BwVXJsIGlzIGhvc3RlZCBvbiBodHRwcy5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gb3BwVXJsO1xuICAgIGlmIChhLnByb3RvY29sID09PSBcImh0dHA6XCIgJiYgYS5ob3N0bmFtZSAhPT0gXCJsb2NhbGhvc3RcIikge1xuICAgICAgdGhyb3cgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBpZiAoY2xpZW50SWQgIT09IG51bGwpIHtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjbGllbnRfaWRcIiwgY2xpZW50SWQpO1xuICB9XG4gIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtvcHBVcmx9L2F1dGgvdG9rZW5gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgIGJvZHk6IGZvcm1EYXRhLFxuICB9KTtcblxuICBpZiAoIXJlc3Aub2spIHtcbiAgICB0aHJvdyByZXNwLnN0YXR1cyA9PT0gNDAwIC8qIGF1dGggaW52YWxpZCAqLyB8fFxuICAgIHJlc3Auc3RhdHVzID09PSA0MDMgLyogdXNlciBub3QgYWN0aXZlICovXG4gICAgICA/IEVSUl9JTlZBTElEX0FVVEhcbiAgICAgIDogbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHRva2Vuc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuczogQXV0aERhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgdG9rZW5zLm9wcFVybCA9IG9wcFVybDtcbiAgdG9rZW5zLmNsaWVudElkID0gY2xpZW50SWQ7XG4gIHRva2Vucy5leHBpcmVzID0gZ2VuRXhwaXJlcyh0b2tlbnMuZXhwaXJlc19pbik7XG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGZldGNoVG9rZW4ob3BwVXJsOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcgfCBudWxsLCBjb2RlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRva2VuUmVxdWVzdChvcHBVcmwsIGNsaWVudElkLCB7XG4gICAgY29kZSxcbiAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlT0F1dGhTdGF0ZShzdGF0ZTogT0F1dGhTdGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZU9BdXRoU3RhdGUoZW5jb2RlZDogc3RyaW5nKTogT0F1dGhTdGF0ZSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGF0b2IoZW5jb2RlZCkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0aCB7XG4gIHByaXZhdGUgX3NhdmVUb2tlbnM/OiBTYXZlVG9rZW5zRnVuYztcbiAgZGF0YTogQXV0aERhdGE7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogQXV0aERhdGEsIHNhdmVUb2tlbnM/OiBTYXZlVG9rZW5zRnVuYykge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fc2F2ZVRva2VucyA9IHNhdmVUb2tlbnM7XG4gIH1cblxuICBnZXQgd3NVcmwoKSB7XG4gICAgLy8gQ29udmVydCBmcm9tIGh0dHA6Ly8gLT4gd3M6Ly8sIGh0dHBzOi8vIC0+IHdzczovL1xuICAgIHJldHVybiBgd3Mke3RoaXMuZGF0YS5vcHBVcmwuc3Vic3RyKDQpfS9hcGkvd2Vic29ja2V0YDtcbiAgfVxuXG4gIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmFjY2Vzc190b2tlbjtcbiAgfVxuXG4gIGdldCBleHBpcmVkKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpID4gdGhpcy5kYXRhLmV4cGlyZXM7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgYWNjZXNzIHRva2VuLlxuICAgKi9cbiAgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0b2tlblJlcXVlc3QodGhpcy5kYXRhLm9wcFVybCwgdGhpcy5kYXRhLmNsaWVudElkLCB7XG4gICAgICBncmFudF90eXBlOiBcInJlZnJlc2hfdG9rZW5cIixcbiAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMuZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgIH0pO1xuICAgIC8vIEFjY2VzcyB0b2tlbiByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIHJlZnJlc2ggdG9rZW4uXG4gICAgZGF0YS5yZWZyZXNoX3Rva2VuID0gdGhpcy5kYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5fc2F2ZVRva2VucykgdGhpcy5fc2F2ZVRva2VucyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2UgdGhlIHJlZnJlc2ggJiBhY2Nlc3MgdG9rZW5zLlxuICAgKi9cbiAgYXN5bmMgcmV2b2tlKCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIFwicmV2b2tlXCIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsIHRoaXMuZGF0YS5yZWZyZXNoX3Rva2VuKTtcblxuICAgIC8vIFRoZXJlIGlzIG5vIGVycm9yIGNoZWNraW5nLCBhcyByZXZva2Ugd2lsbCBhbHdheXMgcmV0dXJuIDIwMFxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuZGF0YS5vcHBVcmx9L2F1dGgvdG9rZW5gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3NhdmVUb2tlbnMpIHtcbiAgICAgIHRoaXMuX3NhdmVUb2tlbnMobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoKG9wdGlvbnM6IGdldEF1dGhPcHRpb25zID0ge30pOiBQcm9taXNlPEF1dGg+IHtcbiAgbGV0IGRhdGE6IEF1dGhEYXRhIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBsZXQgb3BwVXJsID0gb3B0aW9ucy5vcHBVcmw7XG4gIC8vIFN0cmlwIHRyYWlsaW5nIHNsYXNoLlxuICBpZiAob3BwVXJsICYmIG9wcFVybFtvcHBVcmwubGVuZ3RoIC0gMV0gPT09IFwiL1wiKSB7XG4gICAgb3BwVXJsID0gb3BwVXJsLnN1YnN0cigwLCBvcHBVcmwubGVuZ3RoIC0gMSk7XG4gIH1cbiAgY29uc3QgY2xpZW50SWQgPVxuICAgIG9wdGlvbnMuY2xpZW50SWQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xpZW50SWQgOiBnZW5DbGllbnRJZCgpO1xuXG4gIC8vIFVzZSBhdXRoIGNvZGUgaWYgaXQgd2FzIHBhc3NlZCBpblxuICBpZiAoIWRhdGEgJiYgb3B0aW9ucy5hdXRoQ29kZSAmJiBvcHBVcmwpIHtcbiAgICBkYXRhID0gYXdhaXQgZmV0Y2hUb2tlbihvcHBVcmwsIGNsaWVudElkLCBvcHRpb25zLmF1dGhDb2RlKTtcbiAgICBpZiAob3B0aW9ucy5zYXZlVG9rZW5zKSB7XG4gICAgICBvcHRpb25zLnNhdmVUb2tlbnMoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgY2FtZSBiYWNrIGZyb20gYW4gYXV0aG9yaXplIHJlZGlyZWN0XG4gIGlmICghZGF0YSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcGFyc2VRdWVyeTxRdWVyeUNhbGxiYWNrRGF0YT4obG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKSk7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBnb3QgcmVkaXJlY3RlZCBoZXJlIGZyb20gYXV0aG9yaXplIHBhZ2VcbiAgICBpZiAoXCJhdXRoX2NhbGxiYWNrXCIgaW4gcXVlcnkpIHtcbiAgICAgIC8vIFJlc3RvcmUgc3RhdGVcbiAgICAgIGNvbnN0IHN0YXRlID0gZGVjb2RlT0F1dGhTdGF0ZShxdWVyeS5zdGF0ZSk7XG4gICAgICBkYXRhID0gYXdhaXQgZmV0Y2hUb2tlbihzdGF0ZS5vcHBVcmwsIHN0YXRlLmNsaWVudElkLCBxdWVyeS5jb2RlKTtcbiAgICAgIGlmIChvcHRpb25zLnNhdmVUb2tlbnMpIHtcbiAgICAgICAgb3B0aW9ucy5zYXZlVG9rZW5zKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBzdG9yZWQgdG9rZW5zXG4gIGlmICghZGF0YSAmJiBvcHRpb25zLmxvYWRUb2tlbnMpIHtcbiAgICBkYXRhID0gYXdhaXQgb3B0aW9ucy5sb2FkVG9rZW5zKCk7XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgQXV0aChkYXRhLCBvcHRpb25zLnNhdmVUb2tlbnMpO1xuICB9XG5cbiAgaWYgKG9wcFVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgRVJSX09QUF9IT1NUX1JFUVVJUkVEO1xuICB9XG5cbiAgLy8gSWYgbm8gdG9rZW5zIGZvdW5kIGJ1dCBhIG9wcFVybCB3YXMgcGFzc2VkIGluLCBsZXQncyBnbyBnZXQgc29tZSB0b2tlbnMhXG4gIHJlZGlyZWN0QXV0aG9yaXplKFxuICAgIG9wcFVybCxcbiAgICBjbGllbnRJZCxcbiAgICBvcHRpb25zLnJlZGlyZWN0VXJsIHx8IGdlblJlZGlyZWN0VXJsKCksXG4gICAgZW5jb2RlT0F1dGhTdGF0ZSh7XG4gICAgICBvcHBVcmwsXG4gICAgICBjbGllbnRJZCxcbiAgICB9KVxuICApO1xuICAvLyBKdXN0IGRvbid0IHJlc29sdmUgd2hpbGUgd2UgbmF2aWdhdGUgdG8gbmV4dCBwYWdlXG4gIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoPigoKSA9PiB7fSk7XG59XG4iLCJpbXBvcnQgeyBTdG9yZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248U3RhdGU+ID0ge1xuICBzdGF0ZTogU3RhdGU7XG4gIHJlZnJlc2goKTogUHJvbWlzZTx2b2lkPjtcbiAgc3Vic2NyaWJlKHN1YnNjcmliZXI6IChzdGF0ZTogU3RhdGUpID0+IHZvaWQpOiBVbnN1YnNjcmliZUZ1bmM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29sbGVjdGlvbiA9IDxTdGF0ZT4oXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGtleTogc3RyaW5nLFxuICBmZXRjaENvbGxlY3Rpb246IChjb25uOiBDb25uZWN0aW9uKSA9PiBQcm9taXNlPFN0YXRlPixcbiAgc3Vic2NyaWJlVXBkYXRlcz86IChcbiAgICBjb25uOiBDb25uZWN0aW9uLFxuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZT5cbiAgKSA9PiBQcm9taXNlPFVuc3Vic2NyaWJlRnVuYz5cbik6IENvbGxlY3Rpb248U3RhdGU+ID0+IHtcbiAgaWYgKGNvbm5ba2V5XSkge1xuICAgIHJldHVybiBjb25uW2tleV07XG4gIH1cblxuICBsZXQgYWN0aXZlID0gMDtcbiAgbGV0IHVuc3ViUHJvbTogUHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+O1xuICBsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZTxTdGF0ZT4oKTtcblxuICBjb25zdCByZWZyZXNoID0gKCkgPT5cbiAgICBmZXRjaENvbGxlY3Rpb24oY29ubikudGhlbigoc3RhdGUpID0+IHN0b3JlLnNldFN0YXRlKHN0YXRlLCB0cnVlKSk7XG5cbiAgY29uc3QgcmVmcmVzaFN3YWxsb3cgPSAoKSA9PlxuICAgIHJlZnJlc2goKS5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgICAvLyBTd2FsbG93IGVycm9ycyBpZiBzb2NrZXQgaXMgY29ubmVjdGluZywgY2xvc2luZyBvciBjbG9zZWQuXG4gICAgICAvLyBXZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCByZWZyZXNoIGFnYWluIHdoZW4gd2UgcmUtZXN0YWJsaXNoIHRoZSBjb25uZWN0aW9uLlxuICAgICAgLy8gVXNpbmcgY29ubi5zb2NrZXQuT1BFTiBpbnN0ZWFkIG9mIFdlYlNvY2tldCBmb3IgYmV0dGVyIG5vZGUgc3VwcG9ydFxuICAgICAgaWYgKGNvbm4uc29ja2V0LnJlYWR5U3RhdGUgPT0gY29ubi5zb2NrZXQuT1BFTikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29ubltrZXldID0ge1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdG9yZS5zdGF0ZTtcbiAgICB9LFxuXG4gICAgcmVmcmVzaCxcblxuICAgIHN1YnNjcmliZShzdWJzY3JpYmVyOiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkKTogVW5zdWJzY3JpYmVGdW5jIHtcbiAgICAgIGFjdGl2ZSsrO1xuXG4gICAgICAvLyBJZiB0aGlzIHdhcyB0aGUgZmlyc3Qgc3Vic2NyaWJlciwgYXR0YWNoIGNvbGxlY3Rpb25cbiAgICAgIGlmIChhY3RpdmUgPT09IDEpIHtcbiAgICAgICAgaWYgKHN1YnNjcmliZVVwZGF0ZXMpIHtcbiAgICAgICAgICB1bnN1YlByb20gPSBzdWJzY3JpYmVVcGRhdGVzKGNvbm4sIHN0b3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZldGNoIHdoZW4gY29ubmVjdGlvbiByZS1lc3RhYmxpc2hlZC5cbiAgICAgICAgY29ubi5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwgcmVmcmVzaFN3YWxsb3cpO1xuXG4gICAgICAgIHJlZnJlc2hTd2FsbG93KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuXG4gICAgICBpZiAoc3RvcmUuc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBEb24ndCBjYWxsIGl0IHJpZ2h0IGF3YXkgc28gdGhhdCBjYWxsZXIgaGFzIHRpbWVcbiAgICAgICAgLy8gdG8gaW5pdGlhbGl6ZSBhbGwgdGhlIHRoaW5ncy5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdWJzY3JpYmVyKHN0b3JlLnN0YXRlISksIDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB1bnN1YigpO1xuICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGNoYW5nZXNcbiAgICAgICAgICBpZiAodW5zdWJQcm9tKVxuICAgICAgICAgICAgdW5zdWJQcm9tLnRoZW4oKHVuc3ViKSA9PiB7XG4gICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLCByZWZyZXNoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjb25uW2tleV07XG59O1xuXG4vLyBMZWdhY3kgbmFtZS4gSXQgZ2V0cyBhIGNvbGxlY3Rpb24gYW5kIHN1YnNjcmliZXMuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29sbGVjdGlvbiA9IDxTdGF0ZT4oXG4gIGtleTogc3RyaW5nLFxuICBmZXRjaENvbGxlY3Rpb246IChjb25uOiBDb25uZWN0aW9uKSA9PiBQcm9taXNlPFN0YXRlPixcbiAgc3Vic2NyaWJlVXBkYXRlczpcbiAgICB8ICgoY29ubjogQ29ubmVjdGlvbiwgc3RvcmU6IFN0b3JlPFN0YXRlPikgPT4gUHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+KVxuICAgIHwgdW5kZWZpbmVkLFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuKTogVW5zdWJzY3JpYmVGdW5jID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwga2V5LCBmZXRjaENvbGxlY3Rpb24sIHN1YnNjcmliZVVwZGF0ZXMpLnN1YnNjcmliZShcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBPcHBFbnRpdHksIE9wcFNlcnZpY2VzLCBPcHBDb25maWcsIE9wcFVzZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVzID0gKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlPE9wcEVudGl0eVtdPihtZXNzYWdlcy5zdGF0ZXMoKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlcyA9IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PlxuICBjb25uZWN0aW9uLnNlbmRNZXNzYWdlUHJvbWlzZTxPcHBTZXJ2aWNlcz4obWVzc2FnZXMuc2VydmljZXMoKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWcgPSAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2U8T3BwQ29uZmlnPihtZXNzYWdlcy5jb25maWcoKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlPE9wcFVzZXI+KG1lc3NhZ2VzLnVzZXIoKSk7XG5cbmV4cG9ydCBjb25zdCBjYWxsU2VydmljZSA9IChcbiAgY29ubmVjdGlvbjogQ29ubmVjdGlvbixcbiAgZG9tYWluOiBzdHJpbmcsXG4gIHNlcnZpY2U6IHN0cmluZyxcbiAgc2VydmljZURhdGE/OiBvYmplY3RcbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2UoXG4gICAgbWVzc2FnZXMuY2FsbFNlcnZpY2UoZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlRGF0YSlcbiAgKTtcbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBPcHBDb25maWcsIFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxudHlwZSBDb21wb25lbnRMb2FkZWRFdmVudCA9IHtcbiAgZGF0YToge1xuICAgIGNvbXBvbmVudDogc3RyaW5nO1xuICB9O1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudExvYWRlZChcbiAgc3RhdGU6IE9wcENvbmZpZyxcbiAgZXZlbnQ6IENvbXBvbmVudExvYWRlZEV2ZW50XG4pOiBQYXJ0aWFsPE9wcENvbmZpZz4gfCBudWxsIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50czogc3RhdGUuY29tcG9uZW50cy5jb25jYXQoZXZlbnQuZGF0YS5jb21wb25lbnQpLFxuICB9O1xufVxuXG5jb25zdCBmZXRjaENvbmZpZyA9IChjb25uOiBDb25uZWN0aW9uKSA9PiBnZXRDb25maWcoY29ubik7XG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm46IENvbm5lY3Rpb24sIHN0b3JlOiBTdG9yZTxPcHBDb25maWc+KSA9PlxuICBQcm9taXNlLmFsbChbXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgICBzdG9yZS5hY3Rpb24ocHJvY2Vzc0NvbXBvbmVudExvYWRlZCksXG4gICAgICBcImNvbXBvbmVudF9sb2FkZWRcIlxuICAgICksXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgICAoKSA9PiBmZXRjaENvbmZpZyhjb25uKS50aGVuKChjb25maWcpID0+IHN0b3JlLnNldFN0YXRlKGNvbmZpZywgdHJ1ZSkpLFxuICAgICAgXCJjb3JlX2NvbmZpZ191cGRhdGVkXCJcbiAgICApLFxuICBdKS50aGVuKCh1bnN1YnMpID0+ICgpID0+IHVuc3Vicy5mb3JFYWNoKCh1bnN1YikgPT4gdW5zdWIoKSkpO1xuXG5jb25zdCBjb25maWdDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfY25mXCIsIGZldGNoQ29uZmlnLCBzdWJzY3JpYmVVcGRhdGVzKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChzdGF0ZTogT3BwQ29uZmlnKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT4gY29uZmlnQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiLyoqXG4gKiBDb25uZWN0aW9uIHRoYXQgd3JhcHMgYSBzb2NrZXQgYW5kIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0byBpbnRlcmFjdCB3aXRoXG4gKiB0aGUgT3BlbiBQZWVyIFBvd2VyIHdlYnNvY2tldCBBUEkuXG4gKi9cbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBFUlJfSU5WQUxJRF9BVVRILCBFUlJfQ09OTkVDVElPTl9MT1NUIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucywgT3BwRXZlbnQsIE1lc3NhZ2VCYXNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgREVCVUcgPSBmYWxzZTtcblxuZXhwb3J0IHR5cGUgQ29ubmVjdGlvbkV2ZW50TGlzdGVuZXIgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGV2ZW50RGF0YT86IGFueVxuKSA9PiB2b2lkO1xuXG50eXBlIEV2ZW50cyA9IFwicmVhZHlcIiB8IFwiZGlzY29ubmVjdGVkXCIgfCBcInJlY29ubmVjdC1lcnJvclwiO1xuXG50eXBlIFdlYlNvY2tldFBvbmdSZXNwb25zZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJwb25nXCI7XG59O1xuXG50eXBlIFdlYlNvY2tldEV2ZW50UmVzcG9uc2UgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwiZXZlbnRcIjtcbiAgZXZlbnQ6IE9wcEV2ZW50O1xufTtcblxudHlwZSBXZWJTb2NrZXRSZXN1bHRSZXNwb25zZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJyZXN1bHRcIjtcbiAgc3VjY2VzczogdHJ1ZTtcbiAgcmVzdWx0OiBhbnk7XG59O1xuXG50eXBlIFdlYlNvY2tldFJlc3VsdEVycm9yUmVzcG9uc2UgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwicmVzdWx0XCI7XG4gIHN1Y2Nlc3M6IGZhbHNlO1xuICBlcnJvcjoge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIFdlYlNvY2tldFJlc3BvbnNlID1cbiAgfCBXZWJTb2NrZXRQb25nUmVzcG9uc2VcbiAgfCBXZWJTb2NrZXRFdmVudFJlc3BvbnNlXG4gIHwgV2ViU29ja2V0UmVzdWx0UmVzcG9uc2VcbiAgfCBXZWJTb2NrZXRSZXN1bHRFcnJvclJlc3BvbnNlO1xuXG50eXBlIFN1YnNjcmlwdGlvblVuc3Vic2NyaWJlID0gKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuaW50ZXJmYWNlIFN1YnNjcmliZUV2ZW50Q29tbW1hbmRJbkZsaWdodDxUPiB7XG4gIHJlc29sdmU6IChyZXN1bHQ/OiBhbnkpID0+IHZvaWQ7XG4gIHJlamVjdDogKGVycjogYW55KSA9PiB2b2lkO1xuICBjYWxsYmFjazogKGV2OiBUKSA9PiB2b2lkO1xuICBzdWJzY3JpYmU6ICgpID0+IFByb21pc2U8U3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU+O1xuICB1bnN1YnNjcmliZTogU3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU7XG59XG5cbnR5cGUgQ29tbWFuZFdpdGhBbnN3ZXJJbkZsaWdodCA9IHtcbiAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZDtcbiAgcmVqZWN0OiAoZXJyOiBhbnkpID0+IHZvaWQ7XG59O1xuXG50eXBlIENvbW1hbmRJbkZsaWdodCA9XG4gIHwgU3Vic2NyaWJlRXZlbnRDb21tbWFuZEluRmxpZ2h0PGFueT5cbiAgfCBDb21tYW5kV2l0aEFuc3dlckluRmxpZ2h0O1xuXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIG9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zO1xuICBjb21tYW5kSWQ6IG51bWJlcjtcbiAgY29tbWFuZHM6IE1hcDxudW1iZXIsIENvbW1hbmRJbkZsaWdodD47XG4gIGV2ZW50TGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBDb25uZWN0aW9uRXZlbnRMaXN0ZW5lcltdPjtcbiAgY2xvc2VSZXF1ZXN0ZWQ6IGJvb2xlYW47XG4gIC8vIEB0cy1pZ25vcmU6IGluY29ycmVjdGx5IGNsYWltaW5nIGl0J3Mgbm90IHNldCBpbiBjb25zdHJ1Y3Rvci5cbiAgc29ja2V0OiBXZWJTb2NrZXQ7XG5cbiAgY29uc3RydWN0b3Ioc29ja2V0OiBXZWJTb2NrZXQsIG9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zKSB7XG4gICAgLy8gY29ubmVjdGlvbiBvcHRpb25zXG4gICAgLy8gIC0gc2V0dXBSZXRyeTogYW1vdW50IG9mIG1zIHRvIHJldHJ5IHdoZW4gdW5hYmxlIHRvIGNvbm5lY3Qgb24gaW5pdGlhbCBzZXR1cFxuICAgIC8vICAtIGNyZWF0ZVNvY2tldDogY3JlYXRlIGEgbmV3IFNvY2tldCBjb25uZWN0aW9uXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBpZCBpZiBuZXh0IGNvbW1hbmQgdG8gc2VuZFxuICAgIHRoaXMuY29tbWFuZElkID0gMTtcbiAgICAvLyBpbmZvIGFib3V0IGFjdGl2ZSBzdWJzY3JpcHRpb25zIGFuZCBjb21tYW5kcyBpbiBmbGlnaHRcbiAgICB0aGlzLmNvbW1hbmRzID0gbmV3IE1hcCgpO1xuICAgIC8vIG1hcCBvZiBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcCgpO1xuICAgIC8vIHRydWUgaWYgYSBjbG9zZSBpcyByZXF1ZXN0ZWQgYnkgdGhlIHVzZXJcbiAgICB0aGlzLmNsb3NlUmVxdWVzdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFNvY2tldChzb2NrZXQpO1xuICB9XG5cbiAgc2V0U29ja2V0KHNvY2tldDogV2ViU29ja2V0KSB7XG4gICAgY29uc3Qgb2xkU29ja2V0ID0gdGhpcy5zb2NrZXQ7XG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldikgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShldikpO1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKGV2KSA9PiB0aGlzLl9oYW5kbGVDbG9zZShldikpO1xuXG4gICAgaWYgKG9sZFNvY2tldCkge1xuICAgICAgY29uc3Qgb2xkQ29tbWFuZHMgPSB0aGlzLmNvbW1hbmRzO1xuXG4gICAgICAvLyByZXNldCB0byBvcmlnaW5hbCBzdGF0ZVxuICAgICAgdGhpcy5jb21tYW5kSWQgPSAxO1xuICAgICAgdGhpcy5jb21tYW5kcyA9IG5ldyBNYXAoKTtcblxuICAgICAgb2xkQ29tbWFuZHMuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgICBpZiAoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSB7XG4gICAgICAgICAgaW5mby5zdWJzY3JpYmUoKS50aGVuKCh1bnN1YikgPT4ge1xuICAgICAgICAgICAgaW5mby51bnN1YnNjcmliZSA9IHVuc3ViO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZXNvbHZlIHRoaXMgaW4gY2FzZSBpdCB3YXNuJ3QgcmVzb2x2ZWQgeWV0LlxuICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gc3Vic2NyaWJlIHdoaWxlIHdlJ3JlIGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgLy8gYW5kIHJlY292ZXIgcHJvcGVybHkuXG4gICAgICAgICAgICBpbmZvLnJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlyZUV2ZW50KFwicmVhZHlcIik7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IEV2ZW50cywgY2FsbGJhY2s6IENvbm5lY3Rpb25FdmVudExpc3RlbmVyKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VHlwZSk7XG5cbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzID0gW107XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNldChldmVudFR5cGUsIGxpc3RlbmVycyk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IEV2ZW50cywgY2FsbGJhY2s6IENvbm5lY3Rpb25FdmVudExpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUeXBlKTtcblxuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBmaXJlRXZlbnQoZXZlbnRUeXBlOiBFdmVudHMsIGV2ZW50RGF0YT86IGFueSkge1xuICAgICh0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudFR5cGUpIHx8IFtdKS5mb3JFYWNoKChjYWxsYmFjaykgPT5cbiAgICAgIGNhbGxiYWNrKHRoaXMsIGV2ZW50RGF0YSlcbiAgICApO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gYSBzcGVjaWZpYyBvciBhbGwgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGV2ZW50IGZpcmVzXG4gICAqIEBwYXJhbSBldmVudFR5cGVcbiAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAqL1xuICBhc3luYyBzdWJzY3JpYmVFdmVudHM8RXZlbnRUeXBlPihcbiAgICBjYWxsYmFjazogKGV2OiBFdmVudFR5cGUpID0+IHZvaWQsXG4gICAgZXZlbnRUeXBlPzogc3RyaW5nXG4gICk6IFByb21pc2U8U3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVNZXNzYWdlKGNhbGxiYWNrLCBtZXNzYWdlcy5zdWJzY3JpYmVFdmVudHMoZXZlbnRUeXBlKSk7XG4gIH1cblxuICBwaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy5waW5nKCkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZUJhc2UsIGNvbW1hbmRJZD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nXCIsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICghY29tbWFuZElkKSB7XG4gICAgICBjb21tYW5kSWQgPSB0aGlzLl9nZW5DbWRJZCgpO1xuICAgIH1cbiAgICBtZXNzYWdlLmlkID0gY29tbWFuZElkO1xuXG4gICAgdGhpcy5zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gIH1cblxuICBzZW5kTWVzc2FnZVByb21pc2U8UmVzdWx0PihtZXNzYWdlOiBNZXNzYWdlQmFzZSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1hbmRJZCA9IHRoaXMuX2dlbkNtZElkKCk7XG4gICAgICB0aGlzLmNvbW1hbmRzLnNldChjb21tYW5kSWQsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBjb21tYW5kSWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSB3ZWJzb2NrZXQgY29tbWFuZCB0aGF0IHN0YXJ0cyBhIHN1YnNjcmlwdGlvbiBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc3RhcnQgdGhlIHN1YnNjcmlwdGlvblxuICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGl0ZW0gYXJyaXZlc1xuICAgKiBAcmV0dXJucyBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb25cbiAgICovXG4gIGFzeW5jIHN1YnNjcmliZU1lc3NhZ2U8UmVzdWx0PihcbiAgICBjYWxsYmFjazogKHJlc3VsdDogUmVzdWx0KSA9PiB2b2lkLFxuICAgIHN1YnNjcmliZU1lc3NhZ2U6IE1lc3NhZ2VCYXNlXG4gICk6IFByb21pc2U8U3Vic2NyaXB0aW9uVW5zdWJzY3JpYmU+IHtcbiAgICAvLyBDb21tYW5kIElEIHRoYXQgd2lsbCBiZSB1c2VkXG4gICAgY29uc3QgY29tbWFuZElkID0gdGhpcy5fZ2VuQ21kSWQoKTtcbiAgICBsZXQgaW5mbzogU3Vic2NyaWJlRXZlbnRDb21tbWFuZEluRmxpZ2h0PFJlc3VsdD47XG5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBXZSBzdG9yZSB1bnN1YnNjcmliZSBvbiBpbmZvIG9iamVjdC4gVGhhdCB3YXkgd2UgY2FuIG92ZXJ3cml0ZSBpdCBpbiBjYXNlXG4gICAgICAvLyB3ZSBnZXQgZGlzY29ubmVjdGVkIGFuZCB3ZSBoYXZlIHRvIHN1YnNjcmliZSBhZ2Fpbi5cbiAgICAgIGluZm8gPSB7XG4gICAgICAgIHJlc29sdmUsXG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIHN1YnNjcmliZTogKCkgPT4gdGhpcy5zdWJzY3JpYmVNZXNzYWdlKGNhbGxiYWNrLCBzdWJzY3JpYmVNZXNzYWdlKSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlUHJvbWlzZShtZXNzYWdlcy51bnN1YnNjcmliZUV2ZW50cyhjb21tYW5kSWQpKTtcbiAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShjb21tYW5kSWQpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIHRoaXMuY29tbWFuZHMuc2V0KGNvbW1hbmRJZCwgaW5mbyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2Uoc3Vic2NyaWJlTWVzc2FnZSwgY29tbWFuZElkKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBIYXBwZW5zIHdoZW4gdGhlIHdlYnNvY2tldCBpcyBhbHJlYWR5IGNsb3NpbmcuXG4gICAgICAgIC8vIERvbid0IGhhdmUgdG8gaGFuZGxlIHRoZSBlcnJvciwgcmVjb25uZWN0IGxvZ2ljIHdpbGwgcGljayBpdCB1cC5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBpbmZvLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlOiBXZWJTb2NrZXRSZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWRcIiwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuY29tbWFuZHMuZ2V0KG1lc3NhZ2UuaWQpO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJldmVudFwiOlxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIChpbmZvIGFzIFN1YnNjcmliZUV2ZW50Q29tbW1hbmRJbkZsaWdodDxhbnk+KS5jYWxsYmFjayhtZXNzYWdlLmV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgUmVjZWl2ZWQgZXZlbnQgZm9yIHVua25vd24gc3Vic2NyaXB0aW9uICR7bWVzc2FnZS5pZH0uIFVuc3Vic2NyaWJpbmcuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMudW5zdWJzY3JpYmVFdmVudHMobWVzc2FnZS5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicmVzdWx0XCI6XG4gICAgICAgIC8vIE5vIGluZm8gaXMgZmluZS4gSWYganVzdCBzZW5kTWVzc2FnZSBpcyB1c2VkLCB3ZSBkaWQgbm90IHN0b3JlIHByb21pc2UgZm9yIHJlc3VsdFxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGluZm8ucmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIC8vIERvbid0IHJlbW92ZSBzdWJzY3JpcHRpb25zLlxuICAgICAgICAgICAgaWYgKCEoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5mby5yZWplY3QobWVzc2FnZS5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJwb25nXCI6XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgaW5mby5yZXNvbHZlKCk7XG4gICAgICAgICAgdGhpcy5jb21tYW5kcy5kZWxldGUobWVzc2FnZS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBSZWNlaXZlZCB1bmtub3duIHBvbmcgcmVzcG9uc2UgJHttZXNzYWdlLmlkfWApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJVbmhhbmRsZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNsb3NlKGV2OiBDbG9zZUV2ZW50KSB7XG4gICAgLy8gUmVqZWN0IGluLWZsaWdodCBzZW5kTWVzc2FnZVByb21pc2UgcmVxdWVzdHNcbiAgICB0aGlzLmNvbW1hbmRzLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIC8vIFdlIGRvbid0IGNhbmNlbCBzdWJzY3JpYmVFdmVudHMgY29tbWFuZHMgaW4gZmxpZ2h0XG4gICAgICAvLyBhcyB3ZSB3aWxsIGJlIGFibGUgdG8gcmVjb3ZlciB0aGVtLlxuICAgICAgaWYgKCEoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSkge1xuICAgICAgICBpbmZvLnJlamVjdChtZXNzYWdlcy5lcnJvcihFUlJfQ09OTkVDVElPTl9MT1NULCBcIkNvbm5lY3Rpb24gbG9zdFwiKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZUV2ZW50KFwiZGlzY29ubmVjdGVkXCIpO1xuXG4gICAgLy8gRGlzYWJsZSBzZXR1cFJldHJ5LCB3ZSBjb250cm9sIGl0IGhlcmUgd2l0aCBhdXRvLWJhY2tvZmZcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIHNldHVwUmV0cnk6IDAgfTtcblxuICAgIGNvbnN0IHJlY29ubmVjdCA9ICh0cmllczogbnVtYmVyKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJUcnlpbmcgdG8gcmVjb25uZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc29ja2V0ID0gYXdhaXQgb3B0aW9ucy5jcmVhdGVTb2NrZXQob3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5zZXRTb2NrZXQoc29ja2V0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVyciA9PT0gRVJSX0lOVkFMSURfQVVUSCkge1xuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJyZWNvbm5lY3QtZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb25uZWN0KHRyaWVzICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLm1pbih0cmllcywgNSkgKiAxMDAwKTtcbiAgICB9O1xuXG4gICAgcmVjb25uZWN0KDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuQ21kSWQoKSB7XG4gICAgcmV0dXJuICsrdGhpcy5jb21tYW5kSWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBPcHBFbnRpdGllcywgU3RhdGVDaGFuZ2VkRXZlbnQsIFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGVzIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50KHN0b3JlOiBTdG9yZTxPcHBFbnRpdGllcz4sIGV2ZW50OiBTdGF0ZUNoYW5nZWRFdmVudCkge1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLnN0YXRlO1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgZW50aXR5X2lkLCBuZXdfc3RhdGUgfSA9IGV2ZW50LmRhdGE7XG4gIGlmIChuZXdfc3RhdGUpIHtcbiAgICBzdG9yZS5zZXRTdGF0ZSh7IFtuZXdfc3RhdGUuZW50aXR5X2lkXTogbmV3X3N0YXRlIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0VudGl0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICAgIGRlbGV0ZSBuZXdFbnRpdGllc1tlbnRpdHlfaWRdO1xuICAgIHN0b3JlLnNldFN0YXRlKG5ld0VudGl0aWVzLCB0cnVlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVudGl0aWVzKGNvbm46IENvbm5lY3Rpb24pOiBQcm9taXNlPE9wcEVudGl0aWVzPiB7XG4gIGNvbnN0IHN0YXRlcyA9IGF3YWl0IGdldFN0YXRlcyhjb25uKTtcbiAgY29uc3QgZW50aXRpZXM6IE9wcEVudGl0aWVzID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbaV07XG4gICAgZW50aXRpZXNbc3RhdGUuZW50aXR5X2lkXSA9IHN0YXRlO1xuICB9XG4gIHJldHVybiBlbnRpdGllcztcbn1cblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uOiBDb25uZWN0aW9uLCBzdG9yZTogU3RvcmU8T3BwRW50aXRpZXM+KSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50czxTdGF0ZUNoYW5nZWRFdmVudD4oXG4gICAgKGV2KSA9PiBwcm9jZXNzRXZlbnQoc3RvcmUsIGV2IGFzIFN0YXRlQ2hhbmdlZEV2ZW50KSxcbiAgICBcInN0YXRlX2NoYW5nZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3QgZW50aXRpZXNDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfZW50XCIsIGZldGNoRW50aXRpZXMsIHN1YnNjcmliZVVwZGF0ZXMpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXRpZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoc3RhdGU6IE9wcEVudGl0aWVzKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT4gZW50aXRpZXNDb2xsKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCJleHBvcnQgY29uc3QgRVJSX0NBTk5PVF9DT05ORUNUID0gMTtcbmV4cG9ydCBjb25zdCBFUlJfSU5WQUxJRF9BVVRIID0gMjtcbmV4cG9ydCBjb25zdCBFUlJfQ09OTkVDVElPTl9MT1NUID0gMztcbmV4cG9ydCBjb25zdCBFUlJfT1BQX0hPU1RfUkVRVUlSRUQgPSA0O1xuZXhwb3J0IGNvbnN0IEVSUl9JTlZBTElEX0hUVFBTX1RPX0hUVFAgPSA1O1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvbk9wdGlvbnMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlU29ja2V0IH0gZnJvbSBcIi4vc29ja2V0XCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcnZpY2VzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbnRpdGllc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXJyb3JzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuY29uc3QgZGVmYXVsdENvbm5lY3Rpb25PcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucyA9IHtcbiAgc2V0dXBSZXRyeTogMCxcbiAgY3JlYXRlU29ja2V0LFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3Rpb24ob3B0aW9ucz86IFBhcnRpYWw8Q29ubmVjdGlvbk9wdGlvbnM+KSB7XG4gIGNvbnN0IGNvbm5PcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdENvbm5lY3Rpb25PcHRpb25zLFxuICAgIG9wdGlvbnNcbiAgKTtcbiAgY29uc3Qgc29ja2V0ID0gYXdhaXQgY29ubk9wdGlvbnMuY3JlYXRlU29ja2V0KGNvbm5PcHRpb25zKTtcbiAgY29uc3QgY29ubiA9IG5ldyBDb25uZWN0aW9uKHNvY2tldCwgY29ubk9wdGlvbnMpO1xuICByZXR1cm4gY29ubjtcbn1cbiIsImltcG9ydCB7IEVycm9yIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGgoYWNjZXNzVG9rZW46IHN0cmluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiYXV0aFwiLFxuICAgIGFjY2Vzc190b2tlbjogYWNjZXNzVG9rZW4sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJnZXRfc3RhdGVzXCIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJnZXRfY29uZmlnXCIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImdldF9zZXJ2aWNlc1wiLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImF1dGgvY3VycmVudF91c2VyXCIsXG4gIH07XG59XG5cbnR5cGUgU2VydmljZUNhbGxNZXNzYWdlID0ge1xuICB0eXBlOiBcImNhbGxfc2VydmljZVwiO1xuICBkb21haW46IHN0cmluZztcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlX2RhdGE/OiBvYmplY3Q7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsbFNlcnZpY2UoXG4gIGRvbWFpbjogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmcsXG4gIHNlcnZpY2VEYXRhPzogb2JqZWN0XG4pIHtcbiAgY29uc3QgbWVzc2FnZTogU2VydmljZUNhbGxNZXNzYWdlID0ge1xuICAgIHR5cGU6IFwiY2FsbF9zZXJ2aWNlXCIsXG4gICAgZG9tYWluLFxuICAgIHNlcnZpY2UsXG4gIH07XG5cbiAgaWYgKHNlcnZpY2VEYXRhKSB7XG4gICAgbWVzc2FnZS5zZXJ2aWNlX2RhdGEgPSBzZXJ2aWNlRGF0YTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG50eXBlIFN1YnNjcmliZUV2ZW50TWVzc2FnZSA9IHtcbiAgdHlwZTogXCJzdWJzY3JpYmVfZXZlbnRzXCI7XG4gIGV2ZW50X3R5cGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlRXZlbnRzKGV2ZW50VHlwZT86IHN0cmluZykge1xuICBjb25zdCBtZXNzYWdlOiBTdWJzY3JpYmVFdmVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogXCJzdWJzY3JpYmVfZXZlbnRzXCIsXG4gIH07XG5cbiAgaWYgKGV2ZW50VHlwZSkge1xuICAgIG1lc3NhZ2UuZXZlbnRfdHlwZSA9IGV2ZW50VHlwZTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zdWJzY3JpYmVFdmVudHMoc3Vic2NyaXB0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInVuc3Vic2NyaWJlX2V2ZW50c1wiLFxuICAgIHN1YnNjcmlwdGlvbixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBpbmcoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJwaW5nXCIsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihjb2RlOiBFcnJvciwgbWVzc2FnZTogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJyZXN1bHRcIixcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBlcnJvcjoge1xuICAgICAgY29kZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBPcHBTZXJ2aWNlcywgT3BwRG9tYWluU2VydmljZXMsIFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U2VydmljZXMgfSBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG50eXBlIFNlcnZpY2VSZWdpc3RlcmVkRXZlbnQgPSB7XG4gIGRhdGE6IHtcbiAgICBkb21haW46IHN0cmluZztcbiAgICBzZXJ2aWNlOiBzdHJpbmc7XG4gIH07XG59O1xuXG50eXBlIFNlcnZpY2VSZW1vdmVkRXZlbnQgPSB7XG4gIGRhdGE6IHtcbiAgICBkb21haW46IHN0cmluZztcbiAgICBzZXJ2aWNlOiBzdHJpbmc7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzU2VydmljZVJlZ2lzdGVyZWQoXG4gIHN0YXRlOiBPcHBTZXJ2aWNlcyxcbiAgZXZlbnQ6IFNlcnZpY2VSZWdpc3RlcmVkRXZlbnRcbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgeyBkb21haW4sIHNlcnZpY2UgfSA9IGV2ZW50LmRhdGE7XG5cbiAgY29uc3QgZG9tYWluSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlW2RvbWFpbl0sIHtcbiAgICBbc2VydmljZV06IHsgZGVzY3JpcHRpb246IFwiXCIsIGZpZWxkczoge30gfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgW2RvbWFpbl06IGRvbWFpbkluZm8gfTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1NlcnZpY2VSZW1vdmVkKHN0YXRlOiBPcHBTZXJ2aWNlcywgZXZlbnQ6IFNlcnZpY2VSZW1vdmVkRXZlbnQpIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHsgZG9tYWluLCBzZXJ2aWNlIH0gPSBldmVudC5kYXRhO1xuICBjb25zdCBjdXJEb21haW5JbmZvID0gc3RhdGVbZG9tYWluXTtcblxuICBpZiAoIWN1ckRvbWFpbkluZm8gfHwgIShzZXJ2aWNlIGluIGN1ckRvbWFpbkluZm8pKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBkb21haW5JbmZvOiBPcHBEb21haW5TZXJ2aWNlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhjdXJEb21haW5JbmZvKS5mb3JFYWNoKChzS2V5KSA9PiB7XG4gICAgaWYgKHNLZXkgIT09IHNlcnZpY2UpIGRvbWFpbkluZm9bc0tleV0gPSBjdXJEb21haW5JbmZvW3NLZXldO1xuICB9KTtcblxuICByZXR1cm4geyBbZG9tYWluXTogZG9tYWluSW5mbyB9O1xufVxuXG5jb25zdCBmZXRjaFNlcnZpY2VzID0gKGNvbm46IENvbm5lY3Rpb24pID0+IGdldFNlcnZpY2VzKGNvbm4pO1xuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uOiBDb25uZWN0aW9uLCBzdG9yZTogU3RvcmU8T3BwU2VydmljZXM+KSA9PlxuICBQcm9taXNlLmFsbChbXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHM8U2VydmljZVJlZ2lzdGVyZWRFdmVudD4oXG4gICAgICBzdG9yZS5hY3Rpb24ocHJvY2Vzc1NlcnZpY2VSZWdpc3RlcmVkKSxcbiAgICAgIFwic2VydmljZV9yZWdpc3RlcmVkXCJcbiAgICApLFxuICAgIGNvbm4uc3Vic2NyaWJlRXZlbnRzPFNlcnZpY2VSZW1vdmVkRXZlbnQ+KFxuICAgICAgc3RvcmUuYWN0aW9uKHByb2Nlc3NTZXJ2aWNlUmVtb3ZlZCksXG4gICAgICBcInNlcnZpY2VfcmVtb3ZlZFwiXG4gICAgKSxcbiAgXSkudGhlbigodW5zdWJzKSA9PiAoKSA9PiB1bnN1YnMuZm9yRWFjaCgoZm4pID0+IGZuKCkpKTtcblxuY29uc3Qgc2VydmljZXNDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfc3J2XCIsIGZldGNoU2VydmljZXMsIHN1YnNjcmliZVVwZGF0ZXMpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlU2VydmljZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoc3RhdGU6IE9wcFNlcnZpY2VzKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT4gc2VydmljZXNDb2xsKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCIvKipcbiAqIENyZWF0ZSBhIHdlYiBzb2NrZXQgY29ubmVjdGlvbiB3aXRoIGEgT3BlbiBQZWVyIFBvd2VyIGluc3RhbmNlLlxuICovXG5pbXBvcnQge1xuICBFUlJfSU5WQUxJRF9BVVRILFxuICBFUlJfQ0FOTk9UX0NPTk5FQ1QsXG4gIEVSUl9PUFBfSE9TVF9SRVFVSVJFRCxcbn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucywgRXJyb3IgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgREVCVUcgPSBmYWxzZTtcblxuY29uc3QgTVNHX1RZUEVfQVVUSF9SRVFVSVJFRCA9IFwiYXV0aF9yZXF1aXJlZFwiO1xuY29uc3QgTVNHX1RZUEVfQVVUSF9JTlZBTElEID0gXCJhdXRoX2ludmFsaWRcIjtcbmNvbnN0IE1TR19UWVBFX0FVVEhfT0sgPSBcImF1dGhfb2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNvY2tldChvcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucyk6IFByb21pc2U8V2ViU29ja2V0PiB7XG4gIGlmICghb3B0aW9ucy5hdXRoKSB7XG4gICAgdGhyb3cgRVJSX09QUF9IT1NUX1JFUVVJUkVEO1xuICB9XG4gIGNvbnN0IGF1dGggPSBvcHRpb25zLmF1dGg7XG5cbiAgLy8gU3RhcnQgcmVmcmVzaGluZyBleHBpcmVkIHRva2VucyBldmVuIGJlZm9yZSB0aGUgV1MgY29ubmVjdGlvbiBpcyBvcGVuLlxuICAvLyBXZSBrbm93IHRoYXQgd2Ugd2lsbCBuZWVkIGF1dGggYW55d2F5LlxuICBsZXQgYXV0aFJlZnJlc2hUYXNrID0gYXV0aC5leHBpcmVkXG4gICAgPyBhdXRoLnJlZnJlc2hBY2Nlc3NUb2tlbigpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhdXRoUmVmcmVzaFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhdXRoUmVmcmVzaFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICA6IHVuZGVmaW5lZDtcblxuICAvLyBDb252ZXJ0IGZyb20gaHR0cDovLyAtPiB3czovLywgaHR0cHM6Ly8gLT4gd3NzOi8vXG4gIGNvbnN0IHVybCA9IGF1dGgud3NVcmw7XG5cbiAgaWYgKERFQlVHKSB7XG4gICAgY29uc29sZS5sb2coXCJbQXV0aCBwaGFzZV0gSW5pdGlhbGl6aW5nXCIsIHVybCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb25uZWN0KFxuICAgIHRyaWVzTGVmdDogbnVtYmVyLFxuICAgIHByb21SZXNvbHZlOiAoc29ja2V0OiBXZWJTb2NrZXQpID0+IHZvaWQsXG4gICAgcHJvbVJlamVjdDogKGVycjogRXJyb3IpID0+IHZvaWRcbiAgKSB7XG4gICAgaWYgKERFQlVHKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltBdXRoIFBoYXNlXSBOZXcgY29ubmVjdGlvblwiLCB1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuICAgIC8vIElmIGludmFsaWQgYXV0aCwgd2Ugd2lsbCBub3QgdHJ5IHRvIHJlY29ubmVjdC5cbiAgICBsZXQgaW52YWxpZEF1dGggPSBmYWxzZTtcblxuICAgIGNvbnN0IGNsb3NlTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIC8vIElmIHdlIGFyZSBpbiBlcnJvciBoYW5kbGVyIG1ha2Ugc3VyZSBjbG9zZSBoYW5kbGVyIGRvZXNuJ3QgYWxzbyBmaXJlLlxuICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgaWYgKGludmFsaWRBdXRoKSB7XG4gICAgICAgIHByb21SZWplY3QoRVJSX0lOVkFMSURfQVVUSCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVqZWN0IGlmIHdlIG5vIGxvbmdlciBoYXZlIHRvIHJldHJ5XG4gICAgICBpZiAodHJpZXNMZWZ0ID09PSAwKSB7XG4gICAgICAgIC8vIFdlIG5ldmVyIHdlcmUgY29ubmVjdGVkIGFuZCB3aWxsIG5vdCByZXRyeVxuICAgICAgICBwcm9tUmVqZWN0KEVSUl9DQU5OT1RfQ09OTkVDVCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VHJpZXMgPSB0cmllc0xlZnQgPT09IC0xID8gLTEgOiB0cmllc0xlZnQgLSAxO1xuICAgICAgLy8gVHJ5IGFnYWluIGluIGEgc2Vjb25kXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbm5lY3QobmV3VHJpZXMsIHByb21SZXNvbHZlLCBwcm9tUmVqZWN0KSwgMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIEF1dGggaXMgbWFuZGF0b3J5LCBzbyB3ZSBjYW4gc2VuZCB0aGUgYXV0aCBtZXNzYWdlIHJpZ2h0IGF3YXkuXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9IGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50SW5pdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGF1dGguZXhwaXJlZCkge1xuICAgICAgICAgIGF3YWl0IChhdXRoUmVmcmVzaFRhc2sgPyBhdXRoUmVmcmVzaFRhc2sgOiBhdXRoLnJlZnJlc2hBY2Nlc3NUb2tlbigpKTtcbiAgICAgICAgfVxuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtZXNzYWdlcy5hdXRoKGF1dGguYWNjZXNzVG9rZW4pKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gUmVmcmVzaCB0b2tlbiBmYWlsZWRcbiAgICAgICAgaW52YWxpZEF1dGggPSBlcnIgPT09IEVSUl9JTlZBTElEX0FVVEg7XG4gICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gYXN5bmMgKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQXV0aCBwaGFzZV0gUmVjZWl2ZWRcIiwgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlIE1TR19UWVBFX0FVVEhfSU5WQUxJRDpcbiAgICAgICAgICBpbnZhbGlkQXV0aCA9IHRydWU7XG4gICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBNU0dfVFlQRV9BVVRIX09LOlxuICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwib3BlblwiLCBoYW5kbGVPcGVuKTtcbiAgICAgICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgICBwcm9tUmVzb2x2ZShzb2NrZXQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgICAgICAvLyBXZSBhbHJlYWR5IHNlbmQgdGhpcyBtZXNzYWdlIHdoZW4gc29ja2V0IG9wZW5zXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlICE9PSBNU0dfVFlQRV9BVVRIX1JFUVVJUkVEKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltBdXRoIHBoYXNlXSBVbmhhbmRsZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCBoYW5kbGVPcGVuKTtcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgaGFuZGxlTWVzc2FnZSk7XG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCBjbG9zZU1lc3NhZ2UpO1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2xvc2VNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIGNvbm5lY3Qob3B0aW9ucy5zZXR1cFJldHJ5LCByZXNvbHZlLCByZWplY3QpXG4gICk7XG59XG4iLCJpbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vLyAoYykgSmFzb24gTWlsbGVyXG4vLyBVbmlzdG9yZSAtIE1JVCBsaWNlbnNlXG4vLyBBbmQgdGhlbiBhZG9wdGVkIHRvIG91ciBuZWVkcyArIHR5cGVzY3JpcHRcblxudHlwZSBMaXN0ZW5lcjxTdGF0ZT4gPSAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkO1xudHlwZSBBY3Rpb248U3RhdGU+ID0gKFxuICBzdGF0ZTogU3RhdGUsXG4gIC4uLmFyZ3M6IGFueVtdXG4pID0+IFBhcnRpYWw8U3RhdGU+IHwgUHJvbWlzZTxQYXJ0aWFsPFN0YXRlPj4gfCBudWxsO1xudHlwZSBCb3VuZEFjdGlvbjxTdGF0ZT4gPSAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFN0b3JlPFN0YXRlPiA9IHtcbiAgc3RhdGU6IFN0YXRlIHwgdW5kZWZpbmVkO1xuICBhY3Rpb24oYWN0aW9uOiBBY3Rpb248U3RhdGU+KTogQm91bmRBY3Rpb248U3RhdGU+O1xuICBzZXRTdGF0ZSh1cGRhdGU6IFBhcnRpYWw8U3RhdGU+LCBvdmVyd3JpdGU/OiBib29sZWFuKTogdm9pZDtcbiAgc3Vic2NyaWJlKGxpc3RlbmVyOiBMaXN0ZW5lcjxTdGF0ZT4pOiBVbnN1YnNjcmliZUZ1bmM7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSA8U3RhdGU+KHN0YXRlPzogU3RhdGUpOiBTdG9yZTxTdGF0ZT4gPT4ge1xuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxTdGF0ZT5bXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyOiBMaXN0ZW5lcjxTdGF0ZT4gfCBudWxsKSB7XG4gICAgbGV0IG91dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ZW5lcnMgPSBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGU6IFBhcnRpYWw8U3RhdGU+LCBvdmVyd3JpdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBzdGF0ZSA9IG92ZXJ3cml0ZSA/ICh1cGRhdGUgYXMgU3RhdGUpIDogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHVwZGF0ZSk7XG4gICAgbGV0IGN1cnJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzW2ldKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSBzdGF0ZSBjb250YWluZXIsIHJldHVybmVkIGZyb20ge0BsaW5rIGNyZWF0ZVN0b3JlfVxuICAgKiBAbmFtZSBzdG9yZVxuICAgKi9cblxuICByZXR1cm4ge1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYm91bmQgY29weSBvZiB0aGUgZ2l2ZW4gYWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIFRoZSBib3VuZCByZXR1cm5lZCBmdW5jdGlvbiBpbnZva2VzIGFjdGlvbigpIGFuZCBwZXJzaXN0cyB0aGUgcmVzdWx0IGJhY2sgdG8gdGhlIHN0b3JlLlxuICAgICAqIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgYGFjdGlvbmAgaXMgYSBQcm9taXNlLCB0aGUgcmVzb2x2ZWQgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvblx0QW4gYWN0aW9uIG9mIHRoZSBmb3JtIGBhY3Rpb24oc3RhdGUsIC4uLmFyZ3MpIC0+IHN0YXRlVXBkYXRlYFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYm91bmRBY3Rpb24oKVxuICAgICAqL1xuICAgIGFjdGlvbihhY3Rpb246IEFjdGlvbjxTdGF0ZT4pOiBCb3VuZEFjdGlvbjxTdGF0ZT4ge1xuICAgICAgZnVuY3Rpb24gYXBwbHkocmVzdWx0OiBQYXJ0aWFsPFN0YXRlPikge1xuICAgICAgICBzZXRTdGF0ZShyZXN1bHQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm90ZTogcGVyZiB0ZXN0cyB2ZXJpZnlpbmcgdGhpcyBpbXBsZW1lbnRhdGlvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YTI5NWU2Mjk5NjM0ODAwYTAzNDk1MDBcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBbc3RhdGVdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IHJldCA9IGFjdGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgaWYgKHJldCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJldC50aGVuKSByZXR1cm4gcmV0LnRoZW4oYXBwbHkpO1xuICAgICAgICAgIHJldHVybiBhcHBseShyZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHBhcnRpYWwgc3RhdGUgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHN0YXRlLCBpbnZva2luZyByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlXHRcdFx0XHRBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRvIGJlIG1lcmdlZCBpbnRvIHN0YXRlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3ZlcndyaXRlPWZhbHNlXVx0SWYgYHRydWVgLCB1cGRhdGUgd2lsbCByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgYmVpbmcgbWVyZ2VkIGludG8gaXRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHN0YXRlIGlzIGNoYW5nZWQuIFJldHVybnMgYW4gYHVuc3Vic2NyaWJlKClgIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXHRBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzdGF0ZSBjaGFuZ2VzLiBHZXRzIHBhc3NlZCB0aGUgbmV3IHN0YXRlLlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdW5zdWJzY3JpYmUoKVxuICAgICAqL1xuICAgIHN1YnNjcmliZShsaXN0ZW5lcjogTGlzdGVuZXI8U3RhdGU+KSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBSZW1vdmUgYSBwcmV2aW91c2x5LXJlZ2lzdGVyZWQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcdFRoZSBjYWxsYmFjayBwcmV2aW91c2x5IHBhc3NlZCB0byBgc3Vic2NyaWJlKClgIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgLy8gICogQGZ1bmN0aW9uXG4gICAgLy8gICovXG4gICAgLy8gdW5zdWJzY3JpYmUsXG4gIH07XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnk8VD4ocXVlcnlTdHJpbmc6IHN0cmluZykge1xyXG4gIGNvbnN0IHF1ZXJ5OiBhbnkgPSB7fTtcclxuICBjb25zdCBpdGVtcyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgY29uc3Qga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW1bMF0pO1xyXG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLmxlbmd0aCA+IDEgPyBkZWNvZGVVUklDb21wb25lbnQoaXRlbVsxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICBxdWVyeVtrZXldID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBxdWVyeSBhcyBUO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFEQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnR0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFEQTtBQUlBO0FBS0E7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUdBO0FBSkE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQWtEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZEQTtBQXlEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQTZDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBR0E7QUFHQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFPQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7QUFJQTtBQUNBO0FBR0E7QUE4REE7QUFNQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1UUE7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBZUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4REE7QUF3REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9