"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
globalThis["webpackHotUpdatenpwd_nui"]("main",{

/***/ "./src/apps/boosting/BoostingApp.tsx":
/*!*******************************************!*\
  !*** ./src/apps/boosting/BoostingApp.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _assets_boosting_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/boosting/background.png */ \"./src/assets/boosting/background.png\");\n/* harmony import */ var _ui_components_Prompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/Prompt */ \"./src/ui/components/Prompt.tsx\");\n/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Text */ \"./src/apps/boosting/common/Text.tsx\");\n/* harmony import */ var _components_Contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Contracts */ \"./src/apps/boosting/components/Contracts.tsx\");\n/* harmony import */ var _components_Level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Level */ \"./src/apps/boosting/components/Level.tsx\");\n/* harmony import */ var _components_Queue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Queue */ \"./src/apps/boosting/components/Queue.tsx\");\n/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Status */ \"./src/apps/boosting/components/Status.tsx\");\n/* harmony import */ var _hooks_useBoosting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useBoosting */ \"./src/apps/boosting/hooks/useBoosting.tsx\");\n/* harmony import */ var _hooks_useContractsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useContractsService */ \"./src/apps/boosting/hooks/useContractsService.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\BoostingApp.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Wrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"])`\n\tposition: absolute;\n\tbackground: #000000 url(${_assets_boosting_background_png__WEBPACK_IMPORTED_MODULE_3__}) no-repeat;\n\tbackground-size: contain;\n\theight: 100%;\n\twidth: 100%;\n`;\n_c = Wrapper;\nconst TextWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"])`\n\ttop: 68px;\n\tposition: absolute;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n`;\n_c2 = TextWrapper;\n\nconst BoostingApp = () => {\n  _s();\n\n  const rootRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  const {\n    joinQueueHandler,\n    leaveQueueHandler\n  } = (0,_hooks_useBoosting__WEBPACK_IMPORTED_MODULE_10__.useBoosting)();\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest)();\n  (0,_hooks_useBoosting__WEBPACK_IMPORTED_MODULE_10__.useBoosting)();\n  (0,_hooks_useContractsService__WEBPACK_IMPORTED_MODULE_11__.useContractsService)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_2__.BoostingEvents.LOAD_BOOSTING_PROFILE);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Wrapper, {\n    ref: rootRef,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_ui_components_Prompt__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      rootRef: rootRef,\n      background: '#000000',\n      color: '#01B963',\n      border: '1px solid #01B963',\n      height: '278px',\n      width: '335px',\n      borderRadius: '34px',\n      fontWeight: 'bolder'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(TextWrapper, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_common_Text__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        fontSize: '24px',\n        children: \"WELCOME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Level__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Status__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Queue__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      joinQueueHandler: joinQueueHandler,\n      leaveQueueHandler: leaveQueueHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Contracts__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(BoostingApp, \"Bzu/4SZd4OnvLkv0Pthh7yfz1Nw=\", false, function () {\n  return [_hooks_useBoosting__WEBPACK_IMPORTED_MODULE_10__.useBoosting, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest, _hooks_useBoosting__WEBPACK_IMPORTED_MODULE_10__.useBoosting, _hooks_useContractsService__WEBPACK_IMPORTED_MODULE_11__.useContractsService];\n});\n\n_c3 = BoostingApp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoostingApp);\n\nvar _c, _c2, _c3;\n\n__webpack_require__.$Refresh$.register(_c, \"Wrapper\");\n__webpack_require__.$Refresh$.register(_c2, \"TextWrapper\");\n__webpack_require__.$Refresh$.register(_c3, \"BoostingApp\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9Cb29zdGluZ0FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQVFBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTs7QUFqQ0E7QUFFQTs7O0FBRkE7QUFtQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL0Jvb3N0aW5nQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JveH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7dXNlTnVpUmVxdWVzdH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Qm9vc3RpbmdFdmVudHN9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi4vLi4vYXNzZXRzL2Jvb3N0aW5nL2JhY2tncm91bmQucG5nJztcclxuaW1wb3J0IFByb21wdCBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL1Byb21wdCc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tbW9uL1RleHQnO1xyXG5pbXBvcnQgQ29udHJhY3RzIGZyb20gJy4vY29tcG9uZW50cy9Db250cmFjdHMnO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9jb21wb25lbnRzL0xldmVsJztcclxuaW1wb3J0IFF1ZXVlIGZyb20gJy4vY29tcG9uZW50cy9RdWV1ZSc7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi9jb21wb25lbnRzL1N0YXR1cyc7XHJcbmltcG9ydCB7dXNlQm9vc3Rpbmd9IGZyb20gJy4vaG9va3MvdXNlQm9vc3RpbmcnO1xyXG5pbXBvcnQge3VzZUNvbnRyYWN0c30gZnJvbSAnLi9ob29rcy91c2VDb250cmFjdHMnO1xyXG5pbXBvcnQgeyB1c2VDb250cmFjdHNTZXJ2aWNlIH0gZnJvbSAnLi9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0YmFja2dyb3VuZDogIzAwMDAwMCB1cmwoJHtiYWNrZ3JvdW5kSW1nfSkgbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZChCb3gpYFxyXG5cdHRvcDogNjhweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEJvb3N0aW5nQXBwID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvb3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cdGNvbnN0IHtqb2luUXVldWVIYW5kbGVyLCBsZWF2ZVF1ZXVlSGFuZGxlcn0gPSB1c2VCb29zdGluZygpO1xyXG5cdGNvbnN0IHtzZW5kfSA9IHVzZU51aVJlcXVlc3QoKTtcclxuXHJcblx0dXNlQm9vc3RpbmcoKTtcclxuICAgIHVzZUNvbnRyYWN0c1NlcnZpY2UoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuTE9BRF9CT09TVElOR19QUk9GSUxFKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlciByZWY9e3Jvb3RSZWZ9PlxyXG5cdFx0XHQ8UHJvbXB0XHJcblx0XHRcdFx0cm9vdFJlZj17cm9vdFJlZn1cclxuXHRcdFx0XHRiYWNrZ3JvdW5kPXsnIzAwMDAwMCd9XHJcblx0XHRcdFx0Y29sb3I9eycjMDFCOTYzJ31cclxuXHRcdFx0XHRib3JkZXI9eycxcHggc29saWQgIzAxQjk2Myd9XHJcblx0XHRcdFx0aGVpZ2h0PXsnMjc4cHgnfVxyXG5cdFx0XHRcdHdpZHRoPXsnMzM1cHgnfVxyXG5cdFx0XHRcdGJvcmRlclJhZGl1cz17JzM0cHgnfVxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ9eydib2xkZXInfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VGV4dFdyYXBwZXI+XHJcblx0XHRcdFx0PFRleHQgZm9udFNpemU9eycyNHB4J30+V0VMQ09NRTwvVGV4dD5cclxuXHRcdFx0PC9UZXh0V3JhcHBlcj5cclxuXHRcdFx0PExldmVsIC8+XHJcblx0XHRcdDxTdGF0dXMgLz5cclxuXHRcdFx0PFF1ZXVlIGpvaW5RdWV1ZUhhbmRsZXI9e2pvaW5RdWV1ZUhhbmRsZXJ9IGxlYXZlUXVldWVIYW5kbGVyPXtsZWF2ZVF1ZXVlSGFuZGxlcn0gLz5cclxuXHRcdFx0PENvbnRyYWN0cy8+XHJcblx0XHQ8L1dyYXBwZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb3N0aW5nQXBwO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/BoostingApp.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b314c52df6a1d07c8918")
/******/ })();
/******/ 
/******/ }
);