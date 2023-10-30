(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 41993:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 41993;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Order */ 78512);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "App is loading")),
    _useState4 = _slicedToArray(_useState3, 2),
    child = _useState4[0],
    setChild = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    showInfo = _useState6[0],
    setShowInfo = _useState6[1];
  var infoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var script = document.createElement('script');
    script.src = '{{{appclient}}}';
    script.addEventListener('load', function () {
      return setLoaded(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  var handleOnShowInfo = function handleOnShowInfo(msg) {
    try {
      console.log({
        msg: msg
      });
      setShowInfo(msg);
    } catch (error) {
      console.log(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (!loaded) return;
    app.initialized().then(function (client) {
      setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Order__WEBPACK_IMPORTED_MODULE_2__["default"], {
        client: client,
        handleOnShowInfo: handleOnShowInfo
      }));
    });
  }, [loaded]);
  console.log({
    showInfo: showInfo
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "app-main-layer"
  }, child, showInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "info",
    ref: infoRef
  }, showInfo) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 9320:
/*!***************************************!*\
  !*** ./src/components/Order/Order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @freshworks/crayons/react */ 23963);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ 88104);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



function Order(_ref) {
  var orderData = _ref.orderData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__.FwDataTable, {
    className: "table-custom-style",
    columns: orderData.columns,
    rows: orderData.rows,
    rowActions: orderData.rowActions,
    label: "Data Table 1"
  });
}

/***/ }),

/***/ 41211:
/*!********************************************************!*\
  !*** ./src/components/Order/childComponents/Filter.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @freshworks/crayons/react */ 25843);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @freshworks/crayons/react */ 19785);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @freshworks/crayons/react */ 66905);
/* harmony import */ var _helpers_filterHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/filterHelper */ 65168);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Filter = function Filter(_ref) {
  var handleOnLoadOrders = _ref.handleOnLoadOrders,
    handleUpdateResetFilter = _ref.handleUpdateResetFilter,
    _ref$resetFilter = _ref.resetFilter,
    resetFilter = _ref$resetFilter === void 0 ? false : _ref$resetFilter;
  // Setting initial states
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_1__.filterData[0]),
    _useState2 = _slicedToArray(_useState, 2),
    filterBy = _useState2[0],
    setFilterBy = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (resetFilter) {
      setFilterBy(_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_1__.filterData[0]);
      handleUpdateResetFilter(false);
    }
  }, [resetFilter]);
  var onSortChange = function onSortChange(event) {
    try {
      var _event$detail, _event$detail2;
      setFilterBy((_event$detail = event.detail) === null || _event$detail === void 0 || (_event$detail = _event$detail.meta) === null || _event$detail === void 0 ? void 0 : _event$detail.selectedOptions[0]);
      handleOnLoadOrders((_event$detail2 = event.detail) === null || _event$detail2 === void 0 || (_event$detail2 = _event$detail2.meta) === null || _event$detail2 === void 0 ? void 0 : _event$detail2.selectedOptions[0], "filter");
    } catch (error) {
      console.log("Error in Filter", error);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__.FwPopover, {
    sameWidth: "false",
    placement: "bottom-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_3__.FwButton, {
    slot: "popover-trigger",
    color: "secondary",
    showCaretIcon: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    id: "buttonContent"
  }, filterBy.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    slot: "popover-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "row fw-flex fw-type-xs fw-p-4 fw-type-semibold filter-header"
  }, "Sort Products By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    style: {
      margin: '0px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_4__.FwListOptions, {
    onFwChange: onSortChange,
    selectedOptions: [filterBy],
    options: _helpers_filterHelper__WEBPACK_IMPORTED_MODULE_1__.filterData,
    allowDeselect: false
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ 9902:
/*!********************************************************!*\
  !*** ./src/components/Order/childComponents/Search.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.development */ 73369);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Search(_ref) {
  var handleOnLoadOrders = _ref.handleOnLoadOrders;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var onChangeSearch = function onChangeSearch(e) {
    try {
      console.log(e.target.value);
      setSearchValue(e.target.value);
      debouncedSearch(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };
  var handleOnClearSearch = function handleOnClearSearch() {
    try {
      handleOnLoadOrders({}, "", true);
      setSearchValue("");
      debouncedResults.cancel();
    } catch (error) {}
  };
  var debouncedSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = {
              text: "All Orders",
              searchParams: value
            };
            handleOnLoadOrders(data, "search", false);
            // setCharacters(await search(criteria));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 500);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_cjs_react_development__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-container space-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    "clip-path": "url(#clip0_1_810)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M11.015 12.45C8.37401 14.62 4.45801 14.463 1.98201 11.986C-0.652986 9.35101 -0.661986 5.08801 1.96301 2.46301C4.58801 -0.161986 8.85101 -0.152986 11.486 2.48201C13.963 4.95801 14.119 8.87401 11.95 11.515L15.805 15.37C16.065 15.63 16.065 16.049 15.807 16.307C15.7454 16.3685 15.6723 16.4172 15.5918 16.4503C15.5113 16.4835 15.4251 16.5005 15.3381 16.5003C15.2511 16.5001 15.1649 16.4828 15.0846 16.4493C15.0043 16.4158 14.9314 16.3667 14.87 16.305L11.015 12.45ZM2.90201 3.40201C0.793014 5.51001 0.800014 8.93501 2.91701 11.052C5.03301 13.168 8.45801 13.175 10.567 11.067C12.675 8.95801 12.668 5.53301 10.552 3.41701C8.43501 1.30001 5.01001 1.29301 2.90201 3.40201Z",
    fill: "#183247"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "clip0_1_810"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white",
    transform: "translate(0 0.5)"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "input-search",
    type: "text",
    placeholder: "Search",
    value: searchValue,
    onChange: onChangeSearch
  }), searchValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-icon",
    onClick: handleOnClearSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.99599 8.49999L13.394 4.10199C13.5206 3.96882 13.5902 3.79142 13.5879 3.60765C13.5856 3.42388 13.5116 3.24829 13.3817 3.11833C13.2517 2.98838 13.0761 2.91435 12.8923 2.91204C12.7086 2.90974 12.5312 2.97934 12.398 3.10599L7.99999 7.50399L3.60199 3.10599C3.46882 2.97934 3.29142 2.90974 3.10765 2.91204C2.92388 2.91435 2.74829 2.98838 2.61833 3.11833C2.48838 3.24829 2.41435 3.42388 2.41204 3.60765C2.40974 3.79142 2.47934 3.96882 2.60599 4.10199L7.00399 8.49999L2.60599 12.898C2.47934 13.0312 2.40974 13.2086 2.41204 13.3923C2.41435 13.5761 2.48838 13.7517 2.61833 13.8817C2.74829 14.0116 2.92388 14.0856 3.10765 14.0879C3.29142 14.0902 3.46882 14.0206 3.60199 13.894L7.99999 9.49599L12.398 13.894C12.5312 14.0206 12.7086 14.0902 12.8923 14.0879C13.0761 14.0856 13.2517 14.0116 13.3817 13.8817C13.5116 13.7517 13.5856 13.5761 13.5879 13.3923C13.5902 13.2086 13.5206 13.0312 13.394 12.898L8.99599 8.49999Z",
    fill: "black"
  }))) : null));
}

/***/ }),

/***/ 56187:
/*!********************************************************!*\
  !*** ./src/components/Order/childComponents/return.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RetunOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @freshworks/crayons/react */ 60936);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @freshworks/crayons/react */ 92434);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @freshworks/crayons/react */ 24990);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @freshworks/crayons/react */ 19785);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/cjs/react.production.min */ 72408);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var modalContent = [{
  key: "orderNo",
  text: "Order No"
}, {
  key: "userName",
  text: "Customer Name"
}, {
  key: "productId",
  text: "Product ID"
}, {
  key: "title",
  text: "Product Name"
}, {
  key: "orderDate",
  text: "Order Date"
}, {
  key: "deliveryDate",
  text: "Delivery Date"
}];
function RetunOrder(_ref) {
  var showModal = _ref.showModal,
    modalType = _ref.modalType,
    setShowReturnForm = _ref.setShowReturnForm,
    data = _ref.data,
    _ref$otpValidate = _ref.otpValidate,
    otpValidate = _ref$otpValidate === void 0 ? false : _ref$otpValidate,
    otpStatus = _ref.otpStatus,
    validateOTP = _ref.validateOTP,
    generateOTP = _ref.generateOTP,
    setReturnOtp = _ref.setReturnOtp,
    handleOnResetFilter = _ref.handleOnResetFilter;
  var disabled = otpValidate ? false : true;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    otp = _useState2[0],
    setOtp = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(data);
  }, []);
  var handleOnChangeOTP = function handleOnChangeOTP(e) {
    try {
      var value = e.target.value;
      if (isNaN(value)) {
        return;
      }
      ;
      setOtp(value);
    } catch (error) {
      console.log(error);
    }
  };
  var handleBlurInputOTP = function handleBlurInputOTP(e) {
    try {
      var value = e.target.value;
      if (isNaN(value)) {
        return;
      }
      ;
      setOtp(value);
      setReturnOtp(value);
    } catch (error) {}
  };
  var handleOnGenerateOTP = function handleOnGenerateOTP() {
    try {
      if (!data.orderNo) {
        return;
      }
      generateOTP(data);
    } catch (error) {}
  };
  var handleOnValidateOTP = function handleOnValidateOTP() {
    try {
      if (!data.orderNo) {
        return;
      }
      console.log(otpStatus);
      if (otpStatus === "" || !otpStatus) {
        handleOnGenerateOTP();
      } else if (otpStatus === "sent") {
        validateOTP(data.orderNo);
      }
    } catch (error) {
      console.log(error);
    }
  };
  var onCloseModal = function onCloseModal() {
    try {
      setShowReturnForm(false);
    } catch (error) {}
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_2__.FwModal, {
    id: modalType,
    size: modalType,
    submitColor: "danger",
    isOpen: showModal,
    close: onCloseModal,
    hideFooter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_3__.FwModalTitle, {
    titleText: "Initiate Order Return"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_4__.FwModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-return-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-column-split modal-left-content"
  }, modalContent.slice(0, 3).map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-items"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "return-modal-content-title"
    }, value.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "return-modal-content-value"
    }, data[value.key]));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-column-split modal-right-content"
  }, modalContent.slice(3, 6).map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-items"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "return-modal-content-title"
    }, value.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "return-modal-content-value"
    }, data[value.key]));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "return-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Return Detail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    className: "return-text-area"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "return-otp-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " ", "OTP", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "otp-info"
  }, " ".concat(data.mobile ? "(OTP ".concat(otpStatus === "sent" ? "sent" : "send", " to ****** ").concat(data.mobile.slice(data.mobile.length - 3, data.mobile.length), ")") : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "return-text-area",
    "data-input": true,
    value: otp,
    onChange: handleOnChangeOTP,
    onBlur: handleBlurInputOTP,
    accept: "number",
    pattern: "[0-9]",
    maxLength: 6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__.FwButton, {
    disabled: "".concat(otpStatus === "" || !otpStatus ? false : true),
    onFwClick: handleOnValidateOTP
  }, " ", "".concat(otpStatus === "sent" ? "OTP Sent" : "Send OTP"), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "return-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "return-submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_5__.FwButton, {
    disabled: otpStatus === "sent" && otp && otp.length === 6 ? false : true,
    style: {
      width: "200px"
    },
    onFwClick: handleOnValidateOTP
  }, " Validate and Submit Return "))))));
}

/***/ }),

/***/ 78512:
/*!***************************************!*\
  !*** ./src/components/Order/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order */ 9320);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/cjs/react.production.min */ 72408);
/* harmony import */ var _childComponents_Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childComponents/Filter */ 41211);
/* harmony import */ var _childComponents_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./childComponents/Search */ 9902);
/* harmony import */ var _config_axiosConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/axiosConfig */ 2211);
/* harmony import */ var _helpers_dataTableHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/dataTableHelper */ 1338);
/* harmony import */ var _helpers_filterHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/filterHelper */ 65168);
/* harmony import */ var _childComponents_return__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./childComponents/return */ 56187);
/* harmony import */ var _freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @freshworks/crayons/react */ 30017);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function index(_ref) {
  var handleOnShowInfo = _ref.handleOnShowInfo;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      columns: [],
      rows: [],
      rowActions: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderData = _useState2[0],
    setOrderData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedData = _useState4[0],
    setSelectedData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showReturnForm = _useState6[0],
    setShowReturnForm = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("small"),
    _useState8 = _slicedToArray(_useState7, 2),
    modalType = _useState8[0],
    setModalType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    otpStatus = _useState10[0],
    setOtpStatus = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    otp = _useState12[0],
    setOtp = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      show: false,
      error: "",
      msg: "",
      type: ""
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    toastMsg = _useState14[0],
    setToastMsg = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    resetFilter = _useState16[0],
    setResetFilter = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    try {
      handleOnLoadOrders();
    } catch (error) {}
  }, []);
  var handleOnClickReturn = function handleOnClickReturn(data) {
    try {
      setSelectedData(data);
      // setToastMsg({ show: true, error: false, msg: `OTP Validated and Return Request Accepted`, type: "success" });
      setShowReturnForm(true);
    } catch (error) {}
  };
  var handleOnLoadOrders = function handleOnLoadOrders() {
    var searchData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments.length > 1 ? arguments[1] : undefined;
    var loadAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    try {
      var query = "searchtype=all&searchParams=";
      if (!loadAll) {
        if (Object.keys(searchData).length) {
          if (type === "filter") {
            query = "searchtype=".concat((0,_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_7__.getSearchType)(searchData.text));
          } else if (type === "search") {
            query = "searchtype=".concat((0,_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_7__.getSearchType)(searchData.text), "&searchParams=").concat(searchData.searchParams);
          }
        }
      } else {
        query = "searchtype=all";
      }
      _config_axiosConfig__WEBPACK_IMPORTED_MODULE_5__["default"].get("/order/search?".concat(query)).then(function (orderResponse) {
        console.log(orderResponse.data, orderResponse.data.data.length);
        if (orderResponse.status === 200 && orderResponse.data.data.length) {
          handleOnShowInfo("");
          setOrderData((0,_helpers_dataTableHelper__WEBPACK_IMPORTED_MODULE_6__.constructTableData)(orderResponse.data.data, handleOnClickReturn));
        } else if (orderResponse.data.data.length === 0) {
          handleOnShowInfo("No Records Found");
          setOrderData((0,_helpers_dataTableHelper__WEBPACK_IMPORTED_MODULE_6__.constructTableData)(orderResponse.data.data, handleOnClickReturn));
        }
      })["catch"](function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };
  var handleGenerateOTP = function handleGenerateOTP(orderData) {
    try {
      var orderNo = orderData.orderNo;
      setToastMsg({
        show: true,
        error: false,
        msg: "OTP sent to ".concat(orderData.mobile),
        type: "success"
      });
      console.log(toastMsg);
      if (!orderNo) {
        return;
      }
      _config_axiosConfig__WEBPACK_IMPORTED_MODULE_5__["default"].get("/order/generateotp?orderNo=".concat(orderNo)).then(function (otpResponse) {
        console.log(otpResponse, otpResponse.data.otp_for_test);
        setOtpStatus("sent");
        setOtp(otpResponse.data.otp_for_test);
        setToastMsg({
          show: true,
          error: false,
          msg: "OTP sent to ".concat(orderData.mobile),
          type: "success"
        });
      })["catch"](function (err) {
        setOtpStatus("");
        getErrorToastMsg(err);
        console.log("OTP Validation Failed", err);
      });
    } catch (error) {
      console.log(error);
    }
  };
  var handleValidateOTP = function handleValidateOTP(orderNo) {
    try {
      if (!orderNo || !otp) {
        console.log("OTP INVALID....");
        setToastMsg({
          show: true,
          error: false,
          msg: "Invalid OTP",
          type: "error"
        });
        return;
      }
      console.log({
        otp: otp
      });
      _config_axiosConfig__WEBPACK_IMPORTED_MODULE_5__["default"].get("/order/validateotp?orderNo=".concat(orderNo, "&otp=").concat(otp)).then(function (otpResponse) {
        console.log(otpResponse);
        setToastMsg({
          show: true,
          error: false,
          msg: "OTP Validated and Return Request Accepted",
          type: "success"
        });
        setShowReturnForm(false);
        handleOnLoadOrders({}, "All Orders", true);
        setResetFilter(true);
      })["catch"](function (err) {
        console.log("OTP Validation Failed", err);
        // setShowReturnForm(false);
        getErrorToastMsg(err);
      });
    } catch (error) {
      console.log(error);
    }
  };
  var getErrorToastMsg = function getErrorToastMsg(err) {
    try {
      var msg = "OTP Failed to Send";
      if (err && err.response && err.response.data) {
        msg = err.response.data.msg || err.response.data.message;
      }
      console.log({
        msg: msg
      });
      setToastMsg({
        show: true,
        error: false,
        msg: msg,
        type: "error"
      });
    } catch (error) {
      setToastMsg({
        show: true,
        error: false,
        msg: "Some Error Occured",
        type: "error"
      });
    }
  };
  var handleOnUpdateOTP = function handleOnUpdateOTP(value) {
    try {
      setOtp(value);
    } catch (error) {}
  };
  var handleOnCloseToast = function handleOnCloseToast() {
    try {
      setToastMsg({
        show: false,
        error: "",
        msg: "",
        type: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  var handleOnResetFilter = function handleOnResetFilter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    try {
      setResetFilter(value);
    } catch (error) {}
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "flex-item-border fw-flex-grow header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "header-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "options-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-menu-options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_childComponents_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleOnLoadOrders: handleOnLoadOrders
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_childComponents_Filter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleOnLoadOrders: handleOnLoadOrders,
    resetFilter: resetFilter,
    handleUpdateResetFilter: handleOnResetFilter
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "fw-flex flex-container-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "flex-item-border fw-flex-grow table-container"
  }, orderData.rows.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Order__WEBPACK_IMPORTED_MODULE_1__["default"], {
    orderData: orderData
  }) : null)), showReturnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_childComponents_return__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showModal: showReturnForm,
    modalType: modalType,
    setShowReturnForm: setShowReturnForm,
    data: selectedData,
    validateOTP: handleValidateOTP,
    generateOTP: handleGenerateOTP,
    otpStatus: otpStatus,
    setReturnOtp: handleOnUpdateOTP
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_freshworks_crayons_react__WEBPACK_IMPORTED_MODULE_9__.FwInlineMessage, {
    open: toastMsg.show,
    duration: 2000,
    closable: true,
    type: toastMsg.type,
    style: {
      position: "absolute",
      top: "10px",
      right: "10px",
      zIndex: "999"
    },
    onFwHide: handleOnCloseToast
  }, toastMsg.msg));
}

/***/ }),

/***/ 2211:
/*!***********************************!*\
  !*** ./src/config/axiosConfig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ 5274);


// Axios.defaults.baseURL = "http://localhost:8000/"
axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.baseURL = "http://35.86.107.116:8000"; //Production

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 1338:
/*!****************************************!*\
  !*** ./src/helpers/dataTableHelper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constructTableData": () => (/* binding */ constructTableData)
/* harmony export */ });
var COLUMNS = [{
  "key": "orderNo",
  "text": "Order No"
}, {
  "key": "userName",
  "text": "Customer Name"
}, {
  "key": "productId",
  "text": "Product Id"
}, {
  "key": "title",
  "text": "Product Name"
}, {
  "key": "orderDate",
  "text": "Order Date"
}, {
  "key": "deliveryDate",
  "text": "Delivery Date"
}, {
  "key": "orderStatus",
  "text": "Order Status"
}, {
  "key": "returnEligible",
  "text": "Return Eligible"
}];
var constructTableData = function constructTableData(data, cb) {
  try {
    var tableData = {
      columns: COLUMNS,
      rows: [],
      rowActions: []
    };
    var hideButtonIds = [];
    data.map(function (value, index) {
      var user = value.user,
        product = value.product,
        orderNo = value.orderNo,
        orderDate = value.orderDate,
        deliveryDate = value.deliveryDate,
        orderStatus = value.orderStatus,
        returneligible = value.returneligible;
      if (returneligible === false) {
        hideButtonIds.push(index);
      }
      tableData.rows.push({
        id: index,
        orderNo: orderNo,
        userName: user.username,
        productId: product.id,
        title: product.title,
        orderDate: formatDate(new Date(orderDate)),
        deliveryDate: formatDate(new Date(deliveryDate)),
        orderStatus: orderStatus,
        returnEligible: returneligible.toString(),
        mobile: user.phone
      });
    });
    tableData.rowActions.push({
      "name": "Return",
      "handler": function handler(rowData) {
        return cb(rowData);
      },
      "disabled": "true",
      "hideForRowIds": hideButtonIds
    });
    console.log(tableData);
    return tableData;
  } catch (error) {
    console.log(error);
  }
};
var formatDate = function formatDate(date) {
  try {
    var day = new Intl.DateTimeFormat('en', {
      day: '2-digit'
    }).format(date);
    var month = new Intl.DateTimeFormat('en', {
      month: 'short'
    }).format(date);
    var year = new Intl.DateTimeFormat('en', {
      year: 'numeric'
    }).format(date);
    return "".concat(day, " ").concat(month, " ").concat(year);
  } catch (error) {
    console.log(error);
  }
};
var createElement = function createElement() {
  return function () {
    return 'div', {
      className: 'greeting'
    }, [createElement('h2', "text")];
  };
};

/***/ }),

/***/ 65168:
/*!*************************************!*\
  !*** ./src/helpers/filterHelper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterData": () => (/* binding */ filterData),
/* harmony export */   "getSearchType": () => (/* binding */ getSearchType),
/* harmony export */   "sortOrderData": () => (/* binding */ sortOrderData)
/* harmony export */ });
var filterData = [{
  value: '1',
  text: 'All Orders'
}, {
  value: '2',
  text: 'Placed Orders'
}, {
  value: '3',
  text: 'Delivered Orders'
}, {
  value: '4',
  text: 'Returned Orders'
}];
var sortOrderData = [{
  value: 'vertical-align-bottom',
  text: 'Ascending',
  graphicsProps: {
    name: 'vertical-align-bottom'
  }
}, {
  value: 'vertical-align-top',
  text: 'Descending',
  graphicsProps: {
    name: 'vertical-align-top'
  }
}];
var getSearchType = function getSearchType(type) {
  try {
    switch (type) {
      case "All Orders":
        return "all";
      case "Placed Orders":
        return "placed";
      case "Delivered Orders":
        return "delivered";
      case "Returned Orders":
        return "returned";
      default:
        return "all";
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, #root, .app-main-layer {\n  width: 100%;\n  height: 100%;\n}\n\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.info {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-large;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["html, body, #root, .app-main-layer {\n  width: 100%;\n  height: 100%;\n}\n\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.info {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: x-large;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 91236:
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Order/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    padding-left: 64px;\r\n    z-index: 4;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n.header-section {\r\n    height: 55px;\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.flex-container-border {\r\n    padding: 5px;\r\n}\r\n\r\n.flex-item-border {\r\n    color: white;\r\n}\r\n\r\n.header-container {\r\n    width: 100%;\r\n    height: 55px;\r\n    border-bottom: 1px solid #D3D5DC;\r\n    background: #F5F7F9;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\n.options-container {\r\n    width: 33%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.header-menu-options {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.filter-header {\r\n    color: black;\r\n    padding: 0 5px;\r\n    display: flex;\r\n    height: 30px;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.search-container {\r\n    border-radius: 4px;\r\n    border: 1px solid #D3D5DC;\r\n    height: 28px;\r\n    /* width: 150px; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    background: #ffffff;\r\n}\r\n\r\n.input-search,\r\n.input-search:focus {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.search-icon {\r\n    height: inherit;\r\n    align-items: center;\r\n    display: flex;\r\n    margin: 0 3px 0 5px;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n}\r\n\r\n.space-around {\r\n    margin: 0 10px;\r\n}\r\n\r\n.table-container {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.modal-return-data {\r\n    height: 180px;\r\n    /* width: 90%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom: 1px solid #D3D5DC;\r\n    ;\r\n}\r\n\r\n.modal-column-split {\r\n    display: inline-flex;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.modal-content-body {\r\n    display: inline-flex;\r\n    height: inherit;\r\n    width: inherit;\r\n}\r\n\r\n.return-modal-content-title {\r\n    color: #183247;\r\n    ;\r\n}\r\n\r\n.return-modal-content-value {\r\n    color: #11344D;\r\n    ;\r\n}\r\n\r\n.modal-items {\r\n    max-width: 120px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.return-area {\r\n    padding: 20px 0;\r\n}\r\n\r\n.return-text-area {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 4px;\r\n    border: 1px solid #D3D5DC;\r\n    background: #FFF;\r\n}\r\n.return-text-area[data-input=\"true\"] {\r\n    height: 30px;\r\n}\r\n.return-otp-area {\r\n    width: 55%;\r\n}\r\n.return-modal-footer {\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 96%;\r\n}\r\n.return-submit{\r\n    padding: 10px;\r\n}\r\n.otp-info {\r\n    font-size: 12px;\r\n}", "",{"version":3,"sources":["webpack://src/components/Order/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,eAAe;IACf,MAAM;IACN,QAAQ;IACR,kBAAkB;IAClB,UAAU;AACd;;AAEA;;IAEI,YAAY;IACZ,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;;IAEI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,gCAAgC;;AAEpC;;AAEA;IACI,oBAAoB;IACpB,6BAA6B;IAC7B,sBAAsB;IACtB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,cAAc;;AAElB;;AAEA;IACI,cAAc;;AAElB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,OAAO;IACP,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;AACnB","sourcesContent":["header {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    padding-left: 64px;\r\n    z-index: 4;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n\r\n.header-section {\r\n    height: 55px;\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.flex-container-border {\r\n    padding: 5px;\r\n}\r\n\r\n.flex-item-border {\r\n    color: white;\r\n}\r\n\r\n.header-container {\r\n    width: 100%;\r\n    height: 55px;\r\n    border-bottom: 1px solid #D3D5DC;\r\n    background: #F5F7F9;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\n.options-container {\r\n    width: 33%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.header-menu-options {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.filter-header {\r\n    color: black;\r\n    padding: 0 5px;\r\n    display: flex;\r\n    height: 30px;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    font-weight: bold;\r\n}\r\n\r\n.search-container {\r\n    border-radius: 4px;\r\n    border: 1px solid #D3D5DC;\r\n    height: 28px;\r\n    /* width: 150px; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    background: #ffffff;\r\n}\r\n\r\n.input-search,\r\n.input-search:focus {\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.search-icon {\r\n    height: inherit;\r\n    align-items: center;\r\n    display: flex;\r\n    margin: 0 3px 0 5px;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n}\r\n\r\n.space-around {\r\n    margin: 0 10px;\r\n}\r\n\r\n.table-container {\r\n    text-transform: capitalize;\r\n}\r\n\r\n.modal-return-data {\r\n    height: 180px;\r\n    /* width: 90%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-bottom: 1px solid #D3D5DC;\r\n    ;\r\n}\r\n\r\n.modal-column-split {\r\n    display: inline-flex;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.modal-content-body {\r\n    display: inline-flex;\r\n    height: inherit;\r\n    width: inherit;\r\n}\r\n\r\n.return-modal-content-title {\r\n    color: #183247;\r\n    ;\r\n}\r\n\r\n.return-modal-content-value {\r\n    color: #11344D;\r\n    ;\r\n}\r\n\r\n.modal-items {\r\n    max-width: 120px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.return-area {\r\n    padding: 20px 0;\r\n}\r\n\r\n.return-text-area {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 4px;\r\n    border: 1px solid #D3D5DC;\r\n    background: #FFF;\r\n}\r\n.return-text-area[data-input=\"true\"] {\r\n    height: 30px;\r\n}\r\n.return-otp-area {\r\n    width: 55%;\r\n}\r\n.return-modal-footer {\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    left: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 96%;\r\n}\r\n.return-submit{\r\n    padding: 10px;\r\n}\r\n.otp-info {\r\n    font-size: 12px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 88104:
/*!****************************************!*\
  !*** ./src/components/Order/style.css ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ 91236);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.adb9f2c1.js.map