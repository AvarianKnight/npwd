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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListSubheader/ListSubheader.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\FlyOver.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\nconst FlyOver = props => {\n  _s();\n\n  const anchorItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.anchorItem);\n  const hoverItem = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_1__.HoverStateContracts.hoverItem);\n\n  if (hoverItem && hoverItem.cost) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        pointerEvents: 'none',\n        '& .MuiPaper-root': {\n          borderRadius: 0,\n          border: '1px solid gray'\n        },\n        left: 14,\n        zIndex: 1\n      },\n      anchorEl: anchorItem,\n      anchorOrigin: {\n        vertical: 'bottom',\n        horizontal: 'left'\n      },\n      transformOrigin: {\n        vertical: 'top',\n        horizontal: 'left'\n      },\n      disableRestoreFocus: true,\n      open: Boolean(hoverItem),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        dense: true,\n        style: {\n          fontSize: 12\n        },\n        subheader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n              fontWeight: 'bolder',\n              lineHeight: '30px'\n            },\n            children: \"Contract Details\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 8\n          }, undefined), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n              borderColor: 'gray'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 8\n          }, undefined)]\n        }, void 0, true),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          sx: {\n            paddingTop: '5px'\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: [\"Cost: \", hoverItem.cost]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, undefined), hoverItem.expires_in / (1000 * 60 * 60) % 24 >= 1 && hoverItem.expires_in / (1000 * 60 * 60) % 24 <= 6 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            children: [\"Expires in:\", ' ', Math.floor(hoverItem.expires_in / (1000 * 60 * 60) % 24), \" hours\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 8\n          }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            style: {\n              color: 'red'\n            },\n            children: [\"Expires in: \", Math.floor(hoverItem.expires_in / (1000 * 60) % 60), ' ', \"minutes\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 8\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, undefined);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {}, void 0, false);\n  }\n};\n\n_s(FlyOver, \"+6+ZhztaXcs4YaWvVpKBPnW7YtU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue, recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue];\n});\n\n_c = FlyOver;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlyOver);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"FlyOver\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL0ZseU92ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFwQkE7QUF1QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTs7QUE3REE7QUFDQTs7O0FBREE7QUErREEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2NvbXBvbmVudHMvRmx5T3Zlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb3gsIERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0U3ViaGVhZGVyLCBQb3BvdmVyfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7dXNlUmVjb2lsVmFsdWV9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQge0hvdmVyU3RhdGVDb250cmFjdHN9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBGbHlPdmVyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCBhbmNob3JJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5hbmNob3JJdGVtKTtcblx0Y29uc3QgaG92ZXJJdGVtID0gdXNlUmVjb2lsVmFsdWUoSG92ZXJTdGF0ZUNvbnRyYWN0cy5ob3Zlckl0ZW0pO1xuXG5cdGlmIChob3Zlckl0ZW0gJiYgaG92ZXJJdGVtLmNvc3QpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdFx0JyYgLk11aVBhcGVyLXJvb3QnOiB7XG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgZ3JheScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRsZWZ0OiAxNCxcblx0XHRcdFx0XHR6SW5kZXg6IDEsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuY2hvckVsPXthbmNob3JJdGVtfVxuXHRcdFx0XHRhbmNob3JPcmlnaW49e3tcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ2JvdHRvbScsXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW49e3tcblx0XHRcdFx0XHR2ZXJ0aWNhbDogJ3RvcCcsXG5cdFx0XHRcdFx0aG9yaXpvbnRhbDogJ2xlZnQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRkaXNhYmxlUmVzdG9yZUZvY3VzXG5cdFx0XHRcdG9wZW49e0Jvb2xlYW4oaG92ZXJJdGVtKX1cblx0XHRcdD5cblx0XHRcdFx0PExpc3Rcblx0XHRcdFx0XHRkZW5zZVxuXHRcdFx0XHRcdHN0eWxlPXt7Zm9udFNpemU6IDEyfX1cblx0XHRcdFx0XHRzdWJoZWFkZXI9e1xuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PExpc3RTdWJoZWFkZXIgc3g9e3tmb250V2VpZ2h0OiAnYm9sZGVyJywgbGluZUhlaWdodDogJzMwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0Q29udHJhY3QgRGV0YWlsc1xuXHRcdFx0XHRcdFx0XHQ8L0xpc3RTdWJoZWFkZXI+eycgJ31cblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgc3g9e3tib3JkZXJDb2xvcjogJ2dyYXknfX0gLz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCb3ggc3g9e3twYWRkaW5nVG9wOiAnNXB4J319PlxuXHRcdFx0XHRcdFx0PExpc3RJdGVtPkNvc3Q6IHtob3Zlckl0ZW0uY29zdH08L0xpc3RJdGVtPlxuXHRcdFx0XHRcdFx0eyhob3Zlckl0ZW0uZXhwaXJlc19pbiAvICgxMDAwICogNjAgKiA2MCkpICUgMjQgPj0gMSAmJlxuXHRcdFx0XHRcdFx0KGhvdmVySXRlbS5leHBpcmVzX2luIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCA8PSA2ID8gKFxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0RXhwaXJlcyBpbjp7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdHtNYXRoLmZsb29yKChob3Zlckl0ZW0uZXhwaXJlc19pbiAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpfSBob3Vyc1xuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+XG5cdFx0XHRcdFx0XHRcdFx0RXhwaXJlcyBpbjoge01hdGguZmxvb3IoKGhvdmVySXRlbS5leHBpcmVzX2luIC8gKDEwMDAgKiA2MCkpICUgNjApfXsnICd9XG5cdFx0XHRcdFx0XHRcdFx0bWludXRlc1xuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0PC9Qb3BvdmVyPlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIDw+PC8+O1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbHlPdmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/FlyOver.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("230bc52abd8b1eb5eff8")
/******/ })();
/******/ 
/******/ }
);