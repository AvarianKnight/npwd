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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__.PromptState.prompt);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }, undefined),\n      message: 'TRADE CONTRACT',\n      open: true\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const tradeHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const declineHandler = index => {\n    console.log(contracts[index]);\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, CONTRACT);\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"3i84dqOTJ3tCf8KMqIZjEL2HPU4=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUEvREE7QUFDQTs7O0FBZ0VBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBaENBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHtCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzfSBmcm9tICdAdHlwaW5ncy9ib29zdGluZyc7XG5pbXBvcnQge3VzZU51aUV2ZW50LCB1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcbmltcG9ydCB7Q29udHJhY3RzU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcbmltcG9ydCBJbmplY3REZWJ1Z0RhdGEgZnJvbSAnLi4vLi4vLi4vb3MvZGVidWcvSW5qZWN0RGVidWdEYXRhJztcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XG5pbXBvcnQgVHJhZGVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFkZVByb21wdCc7XG5pbXBvcnQgRGVjbGluZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL0RlY2xpbmVQcm9tcHQnO1xuXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzID0gKCkgPT4ge1xuXHRjb25zdCBbY29udHJhY3RzLCBzZXRDb250cmFjdHNdID0gdXNlUmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcblx0Y29uc3Qge3NlbmR9ID0gdXNlTnVpUmVxdWVzdCgpO1xuXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLCBzZXRDb250cmFjdHMpO1xuXG5cdGNvbnN0IHN0YXJ0UHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRzZXRQcm9tcHQoe1xuXHRcdFx0Y29tcG9uZW50OiA8U3RhcnRQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFJFQURZIFRPIFNUQVJUIFlPVVIgTUlTU0lPTj8nLFxuXHRcdFx0b3BlbjogdHJ1ZSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCB0cmFkZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPFRyYWRlUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXG5cdFx0XHRtZXNzYWdlOiAnVFJBREUgQ09OVFJBQ1QnLFxuXHRcdFx0b3BlbjogdHJ1ZSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBkZWNsaW5lUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRzZXRQcm9tcHQoe1xuXHRcdFx0Y29tcG9uZW50OiA8RGVjbGluZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxuXHRcdFx0bWVzc2FnZTogJ0FSRSBZT1UgU1VSRSBZT1UgV0FOVCBUTyBUUkFTSCBUSElTIENPTlRSQUNUPycsXG5cdFx0XHRvcGVuOiB0cnVlLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNsb3NlUHJvbXB0ID0gKCkgPT4ge1xuXHRcdHNldFByb21wdCh7XG5cdFx0XHRtZXNzYWdlOiAnJyxcblx0XHRcdG9wZW46IGZhbHNlLFxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXG5cdFx0fSk7XG5cdH07XG5cblx0Ly9UT0RPOiB3cml0ZSBVSSAtPiBDbGllbnQgLT4gU2VydmljZSBjb2RlIDo6OiBkZWNsaW5lSGFuZGxlciBmaXJzdFxuXG5cdGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29udHJhY3RzW2luZGV4XSk7XG5cdH07XG5cblx0Y29uc3QgdHJhZGVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRjb25zb2xlLmxvZyhjb250cmFjdHNbaW5kZXhdKTtcblx0fTtcblxuXHRjb25zdCBkZWNsaW5lSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29udHJhY3RzW2luZGV4XSk7XG5cdFx0c2VuZChCb29zdGluZ0V2ZW50cy5ERUxFVEVfQ09OVFJBQ1QsIENPTlRSQUNUKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0UHJvbXB0LFxuXHRcdHN0YXJ0SGFuZGxlcixcblx0XHR0cmFkZVByb21wdCxcblx0XHRjbG9zZVByb21wdCxcblx0XHR0cmFkZUhhbmRsZXIsXG5cdFx0ZGVjbGluZVByb21wdCxcblx0XHRkZWNsaW5lSGFuZGxlcixcblx0fTtcbn07XG5cbkluamVjdERlYnVnRGF0YShcblx0W1xuXHRcdHtcblx0XHRcdGFwcDogQk9PU1RJTkdfQVBQLFxuXHRcdFx0bWV0aG9kOiBCb29zdGluZ0V2ZW50cy5GRVRDSF9DT05UUkFDVFMsXG5cdFx0XHRkYXRhOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1aWQ6IDIsXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ0EnLFxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXG5cdFx0XHRcdFx0Y29zdDogMjAsXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xhMycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1aWQ6IDIsXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MrJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDUwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxuXHQ1MDAsXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d9db1d12c7a3f039501")
/******/ })();
/******/ 
/******/ }
);