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

/***/ "./src/apps/boosting/components/FlyOver.tsx":
/*!**************************************************!*\
  !*** ./src/apps/boosting/components/FlyOver.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListSubheader/ListSubheader.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\FlyOver.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst FlyOver = props => {\n  _s();\n\n  const anchorItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.anchorItem);\n  const hoverItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.hoverItem);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      pointerEvents: 'none',\n      '& .MuiPaper-root': {\n        borderRadius: 0,\n        border: '1px solid gray'\n      },\n      left: 14,\n      zIndex: 1\n    },\n    anchorEl: anchorItem,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'left'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'left'\n    },\n    disableRestoreFocus: true,\n    open: Boolean(hoverItem),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      dense: true,\n      style: {\n        fontSize: 12\n      },\n      subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sx: {\n            fontWeight: 'bolder',\n            lineHeight: '30px'\n          },\n          children: \"Contract Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 7\n        }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          sx: {\n            borderColor: 'gray'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n          paddingTop: '5px'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: [\"Cost: \", hoverItem.cost]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 6\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: \"Expires In:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 6\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(FlyOver, \"+6+ZhztaXcs4YaWvVpKBPnW7YtU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c = FlyOver;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlyOver);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"FlyOver\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFwQkE7QUF1QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTs7QUE5Q0E7QUFDQTs7O0FBREE7QUFnREEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2NvbXBvbmVudHMvRmx5T3Zlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb3gsIERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0U3ViaGVhZGVyLCBQb3BvdmVyfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7dXNlUmVjb2lsVmFsdWV9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQge0hvdmVyU3RhdGVDb250cmFjdHN9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBGbHlPdmVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCBhbmNob3JJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5hbmNob3JJdGVtKTtcblx0Y29uc3QgaG92ZXJJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5ob3Zlckl0ZW0pO1xuXG5cdHJldHVybiAoXG5cdFx0PFBvcG92ZXJcblx0XHRcdHN4PXt7XG5cdFx0XHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRcdFx0JyYgLk11aVBhcGVyLXJvb3QnOiB7XG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAwLFxuXHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGVmdDogMTQsXG5cdFx0XHRcdHpJbmRleDogMSxcblx0XHRcdH19XG5cdFx0XHRhbmNob3JFbD17YW5jaG9ySXRlbX1cblx0XHRcdGFuY2hvck9yaWdpbj17e1xuXHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXG5cdFx0XHRcdGhvcml6b250YWw6ICdsZWZ0Jyxcblx0XHRcdH19XG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW49e3tcblx0XHRcdFx0dmVydGljYWw6ICd0b3AnLFxuXHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXG5cdFx0XHR9fVxuXHRcdFx0ZGlzYWJsZVJlc3RvcmVGb2N1c1xuXHRcdFx0b3Blbj17Qm9vbGVhbihob3Zlckl0ZW0pfVxuXHRcdD5cblx0XHRcdDxMaXN0XG5cdFx0XHRcdGRlbnNlXG5cdFx0XHRcdHN0eWxlPXt7Zm9udFNpemU6IDEyfX1cblx0XHRcdFx0c3ViaGVhZGVyPXtcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PExpc3RTdWJoZWFkZXIgc3g9e3tmb250V2VpZ2h0OiAnYm9sZGVyJywgbGluZUhlaWdodDogJzMwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdENvbnRyYWN0IERldGFpbHNcblx0XHRcdFx0XHRcdDwvTGlzdFN1YmhlYWRlcj57JyAnfVxuXHRcdFx0XHRcdFx0PERpdmlkZXIgc3g9e3tib3JkZXJDb2xvcjogJ2dyYXknfX0gLz5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Qm94IHN4PXt7cGFkZGluZ1RvcDogJzVweCd9fT5cblx0XHRcdFx0XHQ8TGlzdEl0ZW0+Q29zdDoge2hvdmVySXRlbS5jb3N0fTwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0PExpc3RJdGVtPkV4cGlyZXMgSW46PC9MaXN0SXRlbT5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQ8L0xpc3Q+XG5cdFx0PC9Qb3BvdmVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmx5T3ZlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/FlyOver.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b87d7a3ebf47464a6c0")
/******/ })();
/******/ 
/******/ }
);