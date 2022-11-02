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

/***/ "./src/apps/boosting/components/prompts/Decline.tsx":
/*!**********************************************************!*\
  !*** ./src/apps/boosting/components/prompts/Decline.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Button */ \"./src/apps/boosting/common/Button.tsx\");\n/* harmony import */ var _common_DeclineImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/DeclineImage */ \"./src/apps/boosting/common/DeclineImage.tsx\");\n/* harmony import */ var _common_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Row */ \"./src/apps/boosting/common/Row.tsx\");\n/* harmony import */ var _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useContracts */ \"./src/apps/boosting/hooks/useContracts.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\prompts\\\\Decline.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst Decline = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((props, ref) => {\n  _s();\n\n  const prompt = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_0__.PromptState.prompt);\n  const {\n    declineHandler,\n    closePrompt\n  } = (0,_hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'center',\n        flexWrap: 'wrap'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: prompt.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_DeclineImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-evenly',\n        paddingTop: '10px'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        clickHandler: declineHandler,\n        index: props.index,\n        text: 'YES'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        clickHandler: closePrompt,\n        text: 'NO'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }, undefined);\n}, \"OgEy1D93BFFG96JgvsDC9tznXC0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue, _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts];\n})), \"OgEy1D93BFFG96JgvsDC9tznXC0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue, _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts];\n});\n\n_c2 = Decline;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decline);\n\nvar _c, _c2;\n\n__webpack_require__.$Refresh$.register(_c, \"Decline$forwardRef\");\n__webpack_require__.$Refresh$.register(_c2, \"Decline\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL3Byb21wdHMvRGVjbGluZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBbEJBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBb0JBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL3Byb21wdHMvRGVjbGluZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb3h9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSZWNvaWxWYWx1ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21tb24vQnV0dG9uJztcclxuaW1wb3J0IERlY2xpbmVJbWFnZSBmcm9tICcuLi8uLi9jb21tb24vRGVjbGluZUltYWdlJztcclxuaW1wb3J0IFJvdyBmcm9tICcuLi8uLi9jb21tb24vUm93JztcclxuaW1wb3J0IHt1c2VDb250cmFjdHN9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbnRyYWN0cyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IERlY2xpbmUgPSBmb3J3YXJkUmVmKChwcm9wczogUHJvcHMsIHJlZikgPT4ge1xyXG5cdGNvbnN0IHByb21wdCA9IHVzZVJlY29pbFZhbHVlKFByb21wdFN0YXRlLnByb21wdCk7XHJcblx0Y29uc3Qge2RlY2xpbmVIYW5kbGVyLCBjbG9zZVByb21wdH0gPSB1c2VDb250cmFjdHMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxCb3ggc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZmxleFdyYXA6ICd3cmFwJ319PlxyXG5cdFx0XHRcdDxSb3c+e3Byb21wdC5tZXNzYWdlfTwvUm93PlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8RGVjbGluZUltYWdlIC8+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8Qm94IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsIHBhZGRpbmdUb3A6ICcxMHB4J319PlxyXG5cdFx0XHRcdDxCdXR0b24gY2xpY2tIYW5kbGVyPXtkZWNsaW5lSGFuZGxlcn0gaW5kZXg9e3Byb3BzLmluZGV4fSB0ZXh0PXsnWUVTJ30gLz5cclxuXHRcdFx0XHQ8QnV0dG9uIGNsaWNrSGFuZGxlcj17Y2xvc2VQcm9tcHR9IHRleHQ9eydOTyd9IC8+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWNsaW5lO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/prompts/Decline.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba1f8ae771d55fe28529")
/******/ })();
/******/ 
/******/ }
);