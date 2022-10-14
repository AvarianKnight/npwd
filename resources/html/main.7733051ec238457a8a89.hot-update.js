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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__.PromptState.prompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n\n  const startPrompt = () => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const startHandler = index => {\n    console.log(index);\n  };\n\n  const tradePrompt = () => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 15\n      }, undefined),\n      message: 'TRADE CONTRACT',\n      open: true\n    });\n  };\n\n  const tradeHandler = index => {\n    console.log(index);\n  };\n\n  const declinePrompt = index => {\n    console.log('🚀 ~ file: useContracts.tsx ~ line 34 ~ declineHandler ~ index', index);\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const declineHandler = index => {};\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"HoB8KBgbbphgn+papMVfl9mD9b0=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUExQ0E7QUFDQTs7O0FBMkNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBaENBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQge0JPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHN9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHt1c2VOdWlFdmVudH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCB7Q29udHJhY3RzU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuLi8uLi8uLi9vcy9kZWJ1Zy9JbmplY3REZWJ1Z0RhdGEnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XHJcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcclxuaW1wb3J0IERlY2xpbmVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9EZWNsaW5lUHJvbXB0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb250cmFjdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvbnRyYWN0cywgc2V0Q29udHJhY3RzXSA9IHVzZVJlY29pbFN0YXRlKENvbnRyYWN0c1N0YXRlLmNvbnRyYWN0cyk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHJcblx0dXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5GRVRDSF9DT05UUkFDVFMsIHNldENvbnRyYWN0cyk7XHJcblxyXG5cdGNvbnN0IHN0YXJ0UHJvbXB0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8U3RhcnRQcm9tcHQgLz4sXHJcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFJFQURZIFRPIFNUQVJUIFlPVVIgTUlTU0lPTj8nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3RhcnRIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB0cmFkZVByb21wdCA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFRyYWRlUHJvbXB0IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnVFJBREUgQ09OVFJBQ1QnLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdHJhZGVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNsaW5lUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCfwn5qAIH4gZmlsZTogdXNlQ29udHJhY3RzLnRzeCB+IGxpbmUgMzQgfiBkZWNsaW5lSGFuZGxlciB+IGluZGV4JywgaW5kZXgpO1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8RGVjbGluZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBTVVJFIFlPVSBXQU5UIFRPIFRSQVNIIFRISVMgQ09OVFJBQ1Q/JyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlY2xpbmVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHt9O1xyXG5cclxuXHRyZXR1cm4ge3N0YXJ0UHJvbXB0LCBzdGFydEhhbmRsZXIsIHRyYWRlUHJvbXB0LCB0cmFkZUhhbmRsZXIsIGRlY2xpbmVQcm9tcHQsIGRlY2xpbmVIYW5kbGVyfTtcclxufTtcclxuXHJcbkluamVjdERlYnVnRGF0YShcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdGFwcDogQk9PU1RJTkdfQVBQLFxyXG5cdFx0XHRtZXRob2Q6IEJvb3N0aW5nRXZlbnRzLkZFVENIX0NPTlRSQUNUUyxcclxuXHRcdFx0ZGF0YTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdBJyxcclxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0XHRjb3N0OiAyMCxcclxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYTMnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dWlkOiAyLFxyXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MrJyxcclxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0XHRjb3N0OiA1MCxcclxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXMnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dWlkOiAyLFxyXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MnLFxyXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxyXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xheScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXHJcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0Y29zdDogMjAsXHJcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcclxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0XHRjb3N0OiAyMCxcclxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0NTAwLFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d5ffd04c82e6c217d9b")
/******/ })();
/******/ 
/******/ }
);