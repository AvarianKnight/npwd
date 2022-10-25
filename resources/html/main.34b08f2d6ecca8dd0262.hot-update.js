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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListSubheader/ListSubheader.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\FlyOver.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst FlyOver = props => {\n  _s();\n\n  const anchorItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.anchorItem);\n  const hoverItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.hoverItem);\n\n  const hoursOrMinutes = () => {\n    const currentTimeInMs = Date.now();\n    const contractTime = hoverItem.expires_in;\n    const msDiff = contractTime - currentTimeInMs;\n    const hoursRemaining = Math.floor(msDiff / 1000 / 60 / 60);\n    const minutesRemaining = Math.floor(msDiff / 1000 / 60);\n\n    if (hoursRemaining >= 1 && hoursRemaining < 7) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\"Expires in: \", hoursRemaining, \"hours\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, undefined);\n    } else {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        style: {\n          color: 'red'\n        },\n        children: [\"Expires in: \", minutesRemaining, \" minutes\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, undefined);\n    }\n  };\n\n  if (hoverItem && hoverItem.cost) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      sx: {\n        pointerEvents: 'none',\n        '& .MuiPaper-root': {\n          borderRadius: 0,\n          border: '1px solid gray'\n        },\n        left: 14,\n        zIndex: 1\n      },\n      anchorEl: anchorItem,\n      anchorOrigin: {\n        vertical: 'bottom',\n        horizontal: 'left'\n      },\n      transformOrigin: {\n        vertical: 'top',\n        horizontal: 'left'\n      },\n      disableRestoreFocus: true,\n      open: Boolean(hoverItem),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        dense: true,\n        style: {\n          fontSize: 12\n        },\n        subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n              fontWeight: 'bolder',\n              lineHeight: '30px'\n            },\n            children: \"Contract Details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 8\n          }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            sx: {\n              borderColor: 'gray'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 8\n          }, undefined)]\n        }, void 0, true),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          sx: {\n            paddingTop: '5px'\n          },\n          children: hoursOrMinutes()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, undefined);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false);\n  }\n};\n\n_s(FlyOver, \"+6+ZhztaXcs4YaWvVpKBPnW7YtU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c = FlyOver;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlyOver);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"FlyOver\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXBCQTtBQXVCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBOztBQXJFQTtBQUNBOzs7QUFEQTtBQXVFQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvY29tcG9uZW50cy9GbHlPdmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JveCwgRGl2aWRlciwgTGlzdCwgTGlzdEl0ZW0sIExpc3RTdWJoZWFkZXIsIFBvcG92ZXJ9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHt1c2VSZWNvaWxWYWx1ZX0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7SG92ZXJTdGF0ZUNvbnRyYWN0c30gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IEZseU92ZXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XG5cdGNvbnN0IGFuY2hvckl0ZW0gPSB1c2VSZWNvaWxWYWx1ZShIb3ZlclN0YXRlQ29udHJhY3RzLmFuY2hvckl0ZW0pO1xuXHRjb25zdCBob3Zlckl0ZW0gPSB1c2VSZWNvaWxWYWx1ZShIb3ZlclN0YXRlQ29udHJhY3RzLmhvdmVySXRlbSk7XG5cblx0Y29uc3QgaG91cnNPck1pbnV0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFRpbWVJbk1zID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCBjb250cmFjdFRpbWUgPSBob3Zlckl0ZW0uZXhwaXJlc19pbjtcblxuXHRcdGNvbnN0IG1zRGlmZiA9IGNvbnRyYWN0VGltZSAtIGN1cnJlbnRUaW1lSW5Ncztcblx0XHRjb25zdCBob3Vyc1JlbWFpbmluZyA9IE1hdGguZmxvb3IobXNEaWZmIC8gMTAwMCAvIDYwIC8gNjApO1xuXHRcdGNvbnN0IG1pbnV0ZXNSZW1haW5pbmcgPSBNYXRoLmZsb29yKG1zRGlmZiAvIDEwMDAgLyA2MCk7XG5cblx0XHRpZiAoaG91cnNSZW1haW5pbmcgPj0gMSAmJiBob3Vyc1JlbWFpbmluZyA8IDcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaXN0SXRlbT5cblx0XHRcdFx0XHRFeHBpcmVzIGluOiB7aG91cnNSZW1haW5pbmd9XG5cdFx0XHRcdFx0aG91cnNcblx0XHRcdFx0PC9MaXN0SXRlbT5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaXN0SXRlbSBzdHlsZT17e2NvbG9yOiAncmVkJ319PkV4cGlyZXMgaW46IHttaW51dGVzUmVtYWluaW5nfSBtaW51dGVzPC9MaXN0SXRlbT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGlmIChob3Zlckl0ZW0gJiYgaG92ZXJJdGVtLmNvc3QpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdFx0JyYgLk11aVBhcGVyLXJvb3QnOiB7XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsZWZ0OiAxNCxcblx0XHRcdFx0XHR6SW5kZXg6IDEsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuY2hvckVsPXthbmNob3JJdGVtfVxuXHRcdFx0XHRhbmNob3JPcmlnaW49e3tcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW49e3tcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ3RvcCcsXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRkaXNhYmxlUmVzdG9yZUZvY3VzXG5cdFx0XHRcdG9wZW49e0Jvb2xlYW4oaG92ZXJJdGVtKX1cblx0XHRcdD5cblx0XHRcdFx0PExpc3Rcblx0XHRcdFx0XHRkZW5zZVxuXHRcdFx0XHRcdHN0eWxlPXt7Zm9udFNpemU6IDEyfX1cblx0XHRcdFx0XHRzdWJoZWFkZXI9e1xuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PExpc3RTdWJoZWFkZXIgc3g9e3tmb250V2VpZ2h0OiAnYm9sZGVyJywgbGluZUhlaWdodDogJzMwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0Q29udHJhY3QgRGV0YWlsc1xuXHRcdFx0XHRcdFx0XHQ8L0xpc3RTdWJoZWFkZXI+eycgJ31cblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgc3g9e3tib3JkZXJDb2xvcjogJ2dyYXknfX0gLz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCb3ggc3g9e3twYWRkaW5nVG9wOiAnNXB4J319Pntob3Vyc09yTWludXRlcygpfTwvQm94PlxuXHRcdFx0XHQ8L0xpc3Q+XG5cdFx0XHQ8L1BvcG92ZXI+XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gPD48Lz47XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZseU92ZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/FlyOver.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("42997e1ce11c80c7a097")
/******/ })();
/******/ 
/******/ }
);