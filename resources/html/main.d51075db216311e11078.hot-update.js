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

/***/ "./src/apps/bank/components/home/BankHome.tsx":
/*!****************************************************!*\
  !*** ./src/apps/bank/components/home/BankHome.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BankHome\": () => (/* binding */ BankHome)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _ui_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui/components/Button */ \"./src/ui/components/Button.tsx\");\n/* harmony import */ var _hooks_useBankModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useBankModal */ \"./src/apps/bank/hooks/useBankModal.ts\");\n/* harmony import */ var _hooks_useCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useCredentials */ \"./src/apps/bank/hooks/useCredentials.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _home_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.styles */ \"./src/apps/bank/components/home/home.styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\bank\\\\components\\\\home\\\\BankHome.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst BankHome = () => {\n  _s();\n\n  const classes = (0,_home_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const {\n    setShowBankModal\n  } = (0,_hooks_useBankModal__WEBPACK_IMPORTED_MODULE_2__.useBankModal)();\n  const credentials = (0,_hooks_useCredentials__WEBPACK_IMPORTED_MODULE_3__.useCredentials)();\n  useBankService();\n\n  const openTransactionsModal = () => {\n    setShowBankModal(true);\n  };\n\n  if (!credentials) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n    children: \"Could not load credentials\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 28\n  }, undefined);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.headTitle,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n        style: {\n          fontWeight: 'bold'\n        },\n        children: \"Welcome\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), \", \", credentials.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: classes.accounts,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        className: classes.accountsType,\n        children: \"Checking:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: classes.accountBalance,\n        children: [\"$\", credentials.balance.toLocaleString(\"en-US\")]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: classes.actions,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ui_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        id: \"actionButton\",\n        className: classes.actionButton,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {\n          to: \"/bank/account\",\n          children: \"Account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ui_components_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: openTransactionsModal,\n        className: classes.actionButton,\n        children: \"Bank Transfer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(BankHome, \"toFRRs7T48TqAMNNKh4qmjDU04E=\", true, function () {\n  return [_home_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _hooks_useBankModal__WEBPACK_IMPORTED_MODULE_2__.useBankModal, _hooks_useCredentials__WEBPACK_IMPORTED_MODULE_3__.useCredentials];\n});\n\n_c = BankHome;\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"BankHome\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iYW5rL2NvbXBvbmVudHMvaG9tZS9CYW5rSG9tZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBOztBQWpDQTtBQUNBOzs7QUFEQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYmFuay9jb21wb25lbnRzL2hvbWUvQmFua0hvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHVpL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlQmFua01vZGFsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQmFua01vZGFsJztcclxuaW1wb3J0IHsgdXNlQ3JlZGVudGlhbHMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VDcmVkZW50aWFscyc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9ob21lLnN0eWxlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQmFua0hvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgc2V0U2hvd0JhbmtNb2RhbCB9ID0gdXNlQmFua01vZGFsKCk7XHJcbiAgY29uc3QgY3JlZGVudGlhbHMgPSB1c2VDcmVkZW50aWFscygpO1xyXG5cclxuICB1c2VCYW5rU2VydmljZSgpXHJcblxyXG5cclxuICBjb25zdCBvcGVuVHJhbnNhY3Rpb25zTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QmFua01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGlmICghY3JlZGVudGlhbHMpIHJldHVybiA8cD5Db3VsZCBub3QgbG9hZCBjcmVkZW50aWFsczwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRUaXRsZX0+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PldlbGNvbWU8L3NwYW4+LCB7Y3JlZGVudGlhbHMubmFtZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvdW50c30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvdW50c1R5cGV9PkNoZWNraW5nOjwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjY291bnRCYWxhbmNlfT4ke2NyZWRlbnRpYWxzLmJhbGFuY2UudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICA8QnV0dG9uIGlkPVwiYWN0aW9uQnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgICA8TmF2TGluayB0bz1cIi9iYW5rL2FjY291bnRcIj5BY2NvdW50PC9OYXZMaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b3BlblRyYW5zYWN0aW9uc01vZGFsfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uQnV0dG9ufT5cclxuICAgICAgICAgIEJhbmsgVHJhbnNmZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/bank/components/home/BankHome.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b43b9a44fed3afb63cdd")
/******/ })();
/******/ 
/******/ }
);