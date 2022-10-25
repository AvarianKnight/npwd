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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListSubheader/ListSubheader.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\FlyOver.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst FlyOver = props => {\n  _s();\n\n  const anchorItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.anchorItem);\n  const hoverItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.hoverItem);\n\n  const hoursOrMinutes = () => {\n    const currentTimeInMs = Date.now();\n    const contractTime = hoverItem.expires_in;\n    const hoursRemaining = (contractTime - currentTimeInMs / (1000 * 60 * 60)) % 24;\n    const minutesRemaining = (contractTime - currentTimeInMs) / (1000 * 60) % 60;\n\n    if (hoursRemaining >= 1 && hoursRemaining < 7) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\"Expires in: \", hoursRemaining, \"hours\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, undefined);\n    } else {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        style: {\n          color: 'red'\n        },\n        children: [\"Expires in: \", minutesRemaining, \" minutes\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, undefined);\n    }\n  };\n\n  if (hoverItem && hoverItem.cost) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      sx: {\n        pointerEvents: 'none',\n        '& .MuiPaper-root': {\n          borderRadius: 0,\n          border: '1px solid gray'\n        },\n        left: 14,\n        zIndex: 1\n      },\n      anchorEl: anchorItem,\n      anchorOrigin: {\n        vertical: 'bottom',\n        horizontal: 'left'\n      },\n      transformOrigin: {\n        vertical: 'top',\n        horizontal: 'left'\n      },\n      disableRestoreFocus: true,\n      open: Boolean(hoverItem),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        dense: true,\n        style: {\n          fontSize: 12\n        },\n        subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n              fontWeight: 'bolder',\n              lineHeight: '30px'\n            },\n            children: \"Contract Details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 8\n          }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            sx: {\n              borderColor: 'gray'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 8\n          }, undefined)]\n        }, void 0, true),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          sx: {\n            paddingTop: '5px'\n          },\n          children: hoursOrMinutes\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false);\n  }\n};\n\n_s(FlyOver, \"+6+ZhztaXcs4YaWvVpKBPnW7YtU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c = FlyOver;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlyOver);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"FlyOver\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFwQkE7QUF1QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwRUE7QUFDQTs7O0FBREE7QUFzRUEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2NvbXBvbmVudHMvRmx5T3Zlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb3gsIERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0U3ViaGVhZGVyLCBQb3BvdmVyfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7dXNlUmVjb2lsVmFsdWV9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQge0hvdmVyU3RhdGVDb250cmFjdHN9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBGbHlPdmVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCBhbmNob3JJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5hbmNob3JJdGVtKTtcblx0Y29uc3QgaG92ZXJJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5ob3Zlckl0ZW0pO1xuXG5cdGNvbnN0IGhvdXJzT3JNaW51dGVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRUaW1lSW5NcyA9IERhdGUubm93KCk7XG5cdFx0Y29uc3QgY29udHJhY3RUaW1lID0gaG92ZXJJdGVtLmV4cGlyZXNfaW47XG5cblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IChjb250cmFjdFRpbWUgLSBjdXJyZW50VGltZUluTXMgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0O1xuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSAoKGNvbnRyYWN0VGltZSAtIGN1cnJlbnRUaW1lSW5NcykgLyAoMTAwMCAqIDYwKSkgJSA2MDtcblxuXHRcdGlmIChob3Vyc1JlbWFpbmluZyA+PSAxICYmIGhvdXJzUmVtYWluaW5nIDwgNykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PExpc3RJdGVtPlxuXHRcdFx0XHRcdEV4cGlyZXMgaW46IHtob3Vyc1JlbWFpbmluZ31cblx0XHRcdFx0XHRob3Vyc1xuXHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PExpc3RJdGVtIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+RXhwaXJlcyBpbjoge21pbnV0ZXNSZW1haW5pbmd9IG1pbnV0ZXM8L0xpc3RJdGVtPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0aWYgKGhvdmVySXRlbSAmJiBob3Zlckl0ZW0uY29zdCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UG9wb3ZlclxuXHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRcdFx0XHQnJiAuTXVpUGFwZXItcm9vdCc6IHtcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogMCxcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGxlZnQ6IDE0LFxuXHRcdFx0XHRcdHpJbmRleDogMSxcblx0XHRcdFx0fX1cblx0XHRcdFx0YW5jaG9yRWw9e2FuY2hvckl0ZW19XG5cdFx0XHRcdGFuY2hvck9yaWdpbj17e1xuXHRcdFx0XHRcdHZlcnRpY2FsOiAnYm90dG9tJyxcblx0XHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXG5cdFx0XHRcdH19XG5cdFx0XHRcdHRyYW5zZm9ybU9yaWdpbj17e1xuXHRcdFx0XHRcdHZlcnRpY2FsOiAndG9wJyxcblx0XHRcdFx0XHRob3Jpem9udGFsOiAnbGVmdCcsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGRpc2FibGVSZXN0b3JlRm9jdXNcblx0XHRcdFx0b3Blbj17Qm9vbGVhbihob3Zlckl0ZW0pfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TGlzdFxuXHRcdFx0XHRcdGRlbnNlXG5cdFx0XHRcdFx0c3R5bGU9e3tmb250U2l6ZTogMTJ9fVxuXHRcdFx0XHRcdHN1YmhlYWRlcj17XG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8TGlzdFN1YmhlYWRlciBzeD17e2ZvbnRXZWlnaHQ6ICdib2xkZXInLCBsaW5lSGVpZ2h0OiAnMzBweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRDb250cmFjdCBEZXRhaWxzXG5cdFx0XHRcdFx0XHRcdDwvTGlzdFN1YmhlYWRlcj57JyAnfVxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlciBzeD17e2JvcmRlckNvbG9yOiAnZ3JheSd9fSAvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJveCBzeD17e3BhZGRpbmdUb3A6ICc1cHgnfX0+e2hvdXJzT3JNaW51dGVzfTwvQm94PlxuXHRcdFx0XHQ8L0xpc3Q+XG5cdFx0XHQ8L1BvcG92ZXI+XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gPD48Lz47XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZseU92ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/FlyOver.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("733222e8c5b263dd0b39")
/******/ })();
/******/ 
/******/ }
);