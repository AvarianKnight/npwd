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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListSubheader/ListSubheader.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\FlyOver.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst FlyOver = props => {\n  _s();\n\n  const anchorItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.anchorItem);\n  const hoverItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.hoverItem);\n\n  if (hoverItem.cost) {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      pointerEvents: 'none',\n      '& .MuiPaper-root': {\n        borderRadius: 0,\n        border: '1px solid gray'\n      },\n      left: 14,\n      zIndex: 1\n    },\n    anchorEl: anchorItem,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'left'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'left'\n    },\n    disableRestoreFocus: true,\n    open: Boolean(hoverItem),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      dense: true,\n      style: {\n        fontSize: 12\n      },\n      subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          sx: {\n            fontWeight: 'bolder',\n            lineHeight: '30px'\n          },\n          children: \"Contract Details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          sx: {\n            borderColor: 'gray'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        sx: {\n          paddingTop: '5px'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: [\"Cost: \", hoverItem.cost]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 6\n        }, undefined), hoverItem.expires_in >= 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          children: [\"Expires in: \", Math.floor(hoverItem.expires_in / (1000 * 60 * 60) % 24), ' ', \"hours\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          style: {\n            color: 'red'\n          },\n          children: [\"Expires in: \", Math.floor(hoverItem.expires_in / (1000 * 60) % 60), ' ', \"minutes\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(FlyOver, \"+6+ZhztaXcs4YaWvVpKBPnW7YtU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c = FlyOver;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlyOver);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"FlyOver\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBcEJBO0FBdUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBSkE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtREE7O0FBMURBO0FBQ0E7OztBQURBO0FBNERBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm94LCBEaXZpZGVyLCBMaXN0LCBMaXN0SXRlbSwgTGlzdFN1YmhlYWRlciwgUG9wb3Zlcn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQge3VzZVJlY29pbFZhbHVlfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHtIb3ZlclN0YXRlQ29udHJhY3RzfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuY29uc3QgRmx5T3ZlciA9IChwcm9wczogUHJvcHMpID0+IHtcblx0Y29uc3QgYW5jaG9ySXRlbSA9IHVzZVJlY29pbFZhbHVlKEhvdmVyU3RhdGVDb250cmFjdHMuYW5jaG9ySXRlbSk7XG5cdGNvbnN0IGhvdmVySXRlbSA9IHVzZVJlY29pbFZhbHVlKEhvdmVyU3RhdGVDb250cmFjdHMuaG92ZXJJdGVtKTtcblxuXHRpZiAoaG92ZXJJdGVtLmNvc3QpIHtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxQb3BvdmVyXG5cdFx0XHRzeD17e1xuXHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdCcmIC5NdWlQYXBlci1yb290Jzoge1xuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogMCxcblx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxlZnQ6IDE0LFxuXHRcdFx0XHR6SW5kZXg6IDEsXG5cdFx0XHR9fVxuXHRcdFx0YW5jaG9yRWw9e2FuY2hvckl0ZW19XG5cdFx0XHRhbmNob3JPcmlnaW49e3tcblx0XHRcdFx0dmVydGljYWw6ICdib3R0b20nLFxuXHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXG5cdFx0XHR9fVxuXHRcdFx0dHJhbnNmb3JtT3JpZ2luPXt7XG5cdFx0XHRcdHZlcnRpY2FsOiAndG9wJyxcblx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxuXHRcdFx0fX1cblx0XHRcdGRpc2FibGVSZXN0b3JlRm9jdXNcblx0XHRcdG9wZW49e0Jvb2xlYW4oaG92ZXJJdGVtKX1cblx0XHQ+XG5cdFx0XHQ8TGlzdFxuXHRcdFx0XHRkZW5zZVxuXHRcdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAxMn19XG5cdFx0XHRcdHN1YmhlYWRlcj17XG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxMaXN0U3ViaGVhZGVyIHN4PXt7Zm9udFdlaWdodDogJ2JvbGRlcicsIGxpbmVIZWlnaHQ6ICczMHB4J319PlxuXHRcdFx0XHRcdFx0XHRDb250cmFjdCBEZXRhaWxzXG5cdFx0XHRcdFx0XHQ8L0xpc3RTdWJoZWFkZXI+eycgJ31cblx0XHRcdFx0XHRcdDxEaXZpZGVyIHN4PXt7Ym9yZGVyQ29sb3I6ICdncmF5J319IC8+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0PEJveCBzeD17e3BhZGRpbmdUb3A6ICc1cHgnfX0+XG5cdFx0XHRcdFx0PExpc3RJdGVtPkNvc3Q6IHtob3Zlckl0ZW0uY29zdH08L0xpc3RJdGVtPlxuXHRcdFx0XHRcdHtob3Zlckl0ZW0uZXhwaXJlc19pbiA+PSAxID8gKFxuXHRcdFx0XHRcdFx0PExpc3RJdGVtPlxuXHRcdFx0XHRcdFx0XHRFeHBpcmVzIGluOiB7TWF0aC5mbG9vcigoaG92ZXJJdGVtLmV4cGlyZXNfaW4gLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KX17JyAnfVxuXHRcdFx0XHRcdFx0XHRob3Vyc1xuXHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PExpc3RJdGVtIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+XG5cdFx0XHRcdFx0XHRcdEV4cGlyZXMgaW46IHtNYXRoLmZsb29yKChob3Zlckl0ZW0uZXhwaXJlc19pbiAvICgxMDAwICogNjApKSAlIDYwKX17JyAnfVxuXHRcdFx0XHRcdFx0XHRtaW51dGVzXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9MaXN0PlxuXHRcdDwvUG9wb3Zlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZseU92ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/FlyOver.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38ef4059df5c321baf01")
/******/ })();
/******/ 
/******/ }
);