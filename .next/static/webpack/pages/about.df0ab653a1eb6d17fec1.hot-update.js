"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_thenukasiva_Documents_CS_Projects_2021_personal_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grid */ \"./components/Grid.tsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container */ \"./components/Container.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/thenukasiva/Documents/CS_Projects/2021-personal-website/components/Nav.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_thenukasiva_Documents_CS_Projects_2021_personal_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nvar states = {\n  '/': {\n    left: '6px',\n    width: '61px'\n  },\n  '/about': {\n    left: '81px',\n    width: '65px'\n  },\n  '/work': {\n    left: '157px',\n    width: '55px'\n  },\n  '/projects': {\n    left: '224px',\n    width: '79px'\n  }\n};\nvar NavLink = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_6__.default.a.withConfig({\n  displayName: \"Nav__NavLink\",\n  componentId: \"sc-1jo3h0x-0\"\n})([\"color:inherit;text-decoration:none;cursor:pointer;border-bottom:none;margin:0;padding:0;z-index:1;font-weight:500;transition:opacity 0.3s ease 0s;&:hover{opacity:0.5;}\"]);\n_c = NavLink;\n\nvar Nav = function Nav() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var navStyle = states['/'];\n\n  if (router.asPath !== '/') {\n    var _iterator = _createForOfIteratorHelper(Object.keys(states).slice(1)),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var path = _step.value;\n\n        if (router.asPath.startsWith(path)) {\n          navStyle = states[path];\n          break;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n    as: \"nav\",\n    alignContent: \"center\",\n    justifyContent: \"space-between\",\n    my: \"3rem\",\n    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr 1fr'],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n      display: ['none', 'none', 'flex'],\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n        href: \"/\",\n        children: \"thenuka siva \\uD83C\\uDF3B\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n      alignContent: \"center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {\n        width: \"fit-content\",\n        gridGap: \"2rem\",\n        alignItems: \"center\",\n        justifyItems: \"center\",\n        gridTemplateColumns: \"repeat(4, auto)\",\n        style: {\n          borderRadius: '25px',\n          background: 'rgba(0, 0, 0, 0.04)',\n          padding: '15px',\n          position: 'relative'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          style: _objectSpread({\n            background: 'white',\n            position: 'absolute',\n            borderRadius: '25px',\n            height: '85%',\n            left: '6px',\n            width: '60px'\n          }, navStyle)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n          href: \"/\",\n          children: \"home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n          href: \"/about\",\n          children: \"about\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n          href: \"/work\",\n          children: \"work\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n          href: \"/projects\",\n          children: \"projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n      alignContent: \"flex-end\",\n      display: ['none', 'none', 'flex'],\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLink, {\n        href: \"mailto:thenukasiva@yahoo.com\",\n        children: \"contact\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c2 = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c2, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQUksRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRixlQXlCRSw4REFBQyxPQUFEO0FBQVMsY0FBSSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBMEJFLDhEQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUEyQkUsOERBQUMsT0FBRDtBQUFTLGNBQUksRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUF5Q0UsOERBQUMsK0NBQUQ7QUFBVyxrQkFBWSxFQUFDLFVBQXhCO0FBQW1DLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQTVDO0FBQUEsNkJBQ0UsOERBQUMsT0FBRDtBQUFTLFlBQUksRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0E1REQ7O0dBQU1GO1VBQ1dWOzs7TUFEWFU7QUE4RE4sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4PzFkM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBzdGF0ZXM6IHsgW2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICAnLyc6IHtcbiAgICBsZWZ0OiAnNnB4JyxcbiAgICB3aWR0aDogJzYxcHgnLFxuICB9LFxuICAnL2Fib3V0Jzoge1xuICAgIGxlZnQ6ICc4MXB4JyxcbiAgICB3aWR0aDogJzY1cHgnLFxuICB9LFxuICAnL3dvcmsnOiB7XG4gICAgbGVmdDogJzE1N3B4JyxcbiAgICB3aWR0aDogJzU1cHgnLFxuICB9LFxuICAnL3Byb2plY3RzJzoge1xuICAgIGxlZnQ6ICcyMjRweCcsXG4gICAgd2lkdGg6ICc3OXB4JyxcbiAgfSxcbn07XG5cbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgbmF2U3R5bGUgPSBzdGF0ZXNbJy8nXTtcblxuICBpZiAocm91dGVyLmFzUGF0aCAhPT0gJy8nKSB7XG4gICAgZm9yIChjb25zdCBwYXRoIG9mIE9iamVjdC5rZXlzKHN0YXRlcykuc2xpY2UoMSkpIHtcbiAgICAgIGlmIChyb3V0ZXIuYXNQYXRoLnN0YXJ0c1dpdGgocGF0aCkpIHtcbiAgICAgICAgbmF2U3R5bGUgPSBzdGF0ZXNbcGF0aF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGFzPVwibmF2XCJcbiAgICAgIGFsaWduQ29udGVudD1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgbXk9XCIzcmVtXCJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9e1snMWZyJywgJzFmcicsICcxZnIgMWZyIDFmciddfVxuICAgID5cbiAgICAgIDxDb250YWluZXIgZGlzcGxheT17Wydub25lJywgJ25vbmUnLCAnZmxleCddfT5cbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj50aGVudWthIHNpdmEg8J+MuzwvTmF2TGluaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcbiAgICAgICAgICBncmlkR2FwPVwiMnJlbVwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDQsIGF1dG8pXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc4NSUnLFxuICAgICAgICAgICAgICBsZWZ0OiAnNnB4JyxcbiAgICAgICAgICAgICAgd2lkdGg6ICc2MHB4JyxcbiAgICAgICAgICAgICAgLi4ubmF2U3R5bGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIj5ob21lPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWJvdXRcIj5hYm91dDwvTmF2TGluaz5cbiAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3dvcmtcIj53b3JrPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5wcm9qZWN0czwvTmF2TGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyIGFsaWduQ29udGVudD1cImZsZXgtZW5kXCIgZGlzcGxheT17Wydub25lJywgJ25vbmUnLCAnZmxleCddfT5cbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIm1haWx0bzp0aGVudWthc2l2YUB5YWhvby5jb21cIj5jb250YWN0PC9OYXZMaW5rPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsIkdyaWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzdGF0ZXMiLCJsZWZ0Iiwid2lkdGgiLCJOYXZMaW5rIiwiYSIsIk5hdiIsInJvdXRlciIsIm5hdlN0eWxlIiwiYXNQYXRoIiwiT2JqZWN0Iiwia2V5cyIsInNsaWNlIiwicGF0aCIsInN0YXJ0c1dpdGgiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsInBvc2l0aW9uIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.tsx\n");

/***/ })

});