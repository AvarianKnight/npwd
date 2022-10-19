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

/***/ "./src/apps/boosting/components/StartPrompt.tsx":
/*!******************************************************!*\
  !*** ./src/apps/boosting/components/StartPrompt.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Button */ \"./src/apps/boosting/common/Button.tsx\");\n/* harmony import */ var _common_CarWreckImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/CarWreckImage */ \"./src/apps/boosting/common/CarWreckImage.tsx\");\n/* harmony import */ var _common_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Row */ \"./src/apps/boosting/common/Row.tsx\");\n/* harmony import */ var _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useContracts */ \"./src/apps/boosting/hooks/useContracts.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\components\\\\StartPrompt.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst StartPrompt = /*#__PURE__*/_s( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((props, ref) => {\n  _s();\n\n  const [prompt, setPrompt] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_0__.PromptState.prompt);\n  const {\n    startHandler\n  } = (0,_hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts)();\n\n  const closePopupHandler = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'center',\n        flexWrap: 'wrap'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: prompt.message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Row__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_CarWreckImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-evenly',\n        paddingTop: '10px'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        clickHandler: index => startHandler(index),\n        index: props.index,\n        text: 'YES'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_common_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        clickHandler: closePopupHandler,\n        text: 'NO'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 3\n  }, undefined);\n}, \"b4uLOSXXLgl/jscogzLoGgUKfhw=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts];\n})), \"b4uLOSXXLgl/jscogzLoGgUKfhw=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState, _hooks_useContracts__WEBPACK_IMPORTED_MODULE_6__.useContracts];\n});\n\n_c2 = StartPrompt;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartPrompt);\n\nvar _c, _c2;\n\n__webpack_require__.$Refresh$.register(_c, \"StartPrompt$forwardRef\");\n__webpack_require__.$Refresh$.register(_c2, \"StartPrompt\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9jb21wb25lbnRzL1N0YXJ0UHJvbXB0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQTFCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQTRCQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvY29tcG9uZW50cy9TdGFydFByb21wdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb3h9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21tb24vQnV0dG9uJztcclxuaW1wb3J0IENhcldyZWNrSW1hZ2UgZnJvbSAnLi4vY29tbW9uL0NhcldyZWNrSW1hZ2UnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4uL2NvbW1vbi9Sb3cnO1xyXG5pbXBvcnQge3VzZUNvbnRyYWN0c30gZnJvbSAnLi4vaG9va3MvdXNlQ29udHJhY3RzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3RhcnRQcm9tcHQgPSBmb3J3YXJkUmVmKChwcm9wczogUHJvcHMsIHJlZikgPT4ge1xyXG5cdGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xyXG5cdGNvbnN0IHtzdGFydEhhbmRsZXJ9ID0gdXNlQ29udHJhY3RzKCk7XHJcblxyXG5cdGNvbnN0IGNsb3NlUG9wdXBIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0bWVzc2FnZTogJycsXHJcblx0XHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0XHRjb21wb25lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8Qm94IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhXcmFwOiAnd3JhcCd9fT5cclxuXHRcdFx0XHQ8Um93Pntwcm9tcHQubWVzc2FnZX08L1Jvdz5cclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENhcldyZWNrSW1hZ2UgLz5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHRcdDxCb3ggc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JywgcGFkZGluZ1RvcDogJzEwcHgnfX0+XHJcblx0XHRcdFx0PEJ1dHRvbiBjbGlja0hhbmRsZXI9eyhpbmRleCkgPT4gc3RhcnRIYW5kbGVyKGluZGV4KX0gaW5kZXg9e3Byb3BzLmluZGV4fSB0ZXh0PXsnWUVTJ30gLz5cclxuXHRcdFx0XHQ8QnV0dG9uIGNsaWNrSGFuZGxlcj17Y2xvc2VQb3B1cEhhbmRsZXJ9IHRleHQ9eydOTyd9IC8+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydFByb21wdDtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/components/StartPrompt.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39911e371acfb576f17c")
/******/ })();
/******/ 
/******/ }
);