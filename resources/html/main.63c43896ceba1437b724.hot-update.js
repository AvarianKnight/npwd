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

/***/ "./src/apps/boosting/hooks/useContracts.tsx":
/*!**************************************************!*\
  !*** ./src/apps/boosting/hooks/useContracts.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__.PromptState.prompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }, undefined),\n      message: 'TRADE CONTRACT',\n      open: true\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  }; //TODO: write UI -> Client \n\n\n  const startHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const tradeHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const declineHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"HoB8KBgbbphgn+papMVfl9mD9b0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQTlDQTtBQUNBOzs7QUErQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFoQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7Qk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50c30gZnJvbSAnQHR5cGluZ3MvYm9vc3RpbmcnO1xyXG5pbXBvcnQge3VzZU51aUV2ZW50fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHtDb250cmFjdHNTdGF0ZX0gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xyXG5pbXBvcnQgSW5qZWN0RGVidWdEYXRhIGZyb20gJy4uLy4uLy4uL29zL2RlYnVnL0luamVjdERlYnVnRGF0YSc7XHJcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XHJcbmltcG9ydCBTdGFydFByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1N0YXJ0UHJvbXB0JztcclxuaW1wb3J0IFRyYWRlUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvVHJhZGVQcm9tcHQnO1xyXG5pbXBvcnQgRGVjbGluZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL0RlY2xpbmVQcm9tcHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNvbnRyYWN0cyA9ICgpID0+IHtcclxuXHRjb25zdCBbY29udHJhY3RzLCBzZXRDb250cmFjdHNdID0gdXNlUmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcclxuXHRjb25zdCBzZXRQcm9tcHQgPSB1c2VTZXRSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xyXG5cclxuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkZFVENIX0NPTlRSQUNUUywgc2V0Q29udHJhY3RzKTtcclxuXHJcblx0Y29uc3Qgc3RhcnRQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8U3RhcnRQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcclxuXHRcdFx0bWVzc2FnZTogJ0FSRSBZT1UgUkVBRFkgVE8gU1RBUlQgWU9VUiBNSVNTSU9OPycsXHJcblx0XHRcdG9wZW46IHRydWUsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB0cmFkZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxUcmFkZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnVFJBREUgQ09OVFJBQ1QnLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVjbGluZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxEZWNsaW5lUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXHJcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFNVUkUgWU9VIFdBTlQgVE8gVFJBU0ggVEhJUyBDT05UUkFDVD8nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vVE9ETzogd3JpdGUgVUkgLT4gQ2xpZW50IFxyXG5cclxuXHRjb25zdCBzdGFydEhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coY29udHJhY3RzW2luZGV4XSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdHJhZGVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGNvbnRyYWN0c1tpbmRleF0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlY2xpbmVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGNvbnRyYWN0c1tpbmRleF0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7c3RhcnRQcm9tcHQsIHN0YXJ0SGFuZGxlciwgdHJhZGVQcm9tcHQsIHRyYWRlSGFuZGxlciwgZGVjbGluZVByb21wdCwgZGVjbGluZUhhbmRsZXJ9O1xyXG59O1xyXG5cclxuSW5qZWN0RGVidWdEYXRhKFxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0YXBwOiBCT09TVElOR19BUFAsXHJcblx0XHRcdG1ldGhvZDogQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLFxyXG5cdFx0XHRkYXRhOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dWlkOiAyLFxyXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ0EnLFxyXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxyXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xhMycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUysnLFxyXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGNvc3Q6IDUwLFxyXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xhcycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXHJcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0Y29zdDogMjAsXHJcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcclxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0XHRjb3N0OiAyMCxcclxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dWlkOiAyLFxyXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MnLFxyXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxyXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xheScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHQ1MDAsXHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91e69cf9a8b8d6177762")
/******/ })();
/******/ 
/******/ }
);