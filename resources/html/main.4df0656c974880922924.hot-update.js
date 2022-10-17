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

/***/ "./src/apps/boosting/hooks/useContractsService.ts":
/*!********************************************************!*\
  !*** ./src/apps/boosting/hooks/useContractsService.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContractsService\": () => (/* binding */ useContractsService)\n/* harmony export */ });\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useBoostingNotification */ \"./src/apps/boosting/hooks/useBoostingNotification.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nconst useContractsService = () => {\n  _s();\n\n  const setContracts = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_4__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_1__.PromptState.prompt);\n  const {\n    setNotification\n  } = (0,_useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__.useBoostingNotification)();\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  const rewardContractHandler = newContract => {\n    setContracts(contractList => [...contractList, newContract]);\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.DELETE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.TRADE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.REWARD_CONTRACT, rewardContractHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.REWARD_CONTRACT, rewardContractHandler);\n};\n\n_s(useContractsService, \"yBWCRPEMVtRG0EjNo3Y5j+zFtzc=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState, _useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__.useBoostingNotification, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_0__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUF2QkE7QUFDQTs7O0FBd0JBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBaENBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cywgQ29udHJhY3R9IGZyb20gXCJAdHlwaW5ncy9ib29zdGluZ1wiO1xuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSBcIkB1aS9zdGF0ZS9Qcm9tcHRTdGF0ZVwiO1xuaW1wb3J0IHt1c2VOdWlFdmVudH0gZnJvbSBcImZpdmVtLW51aS1yZWFjdC1saWJcIjtcbmltcG9ydCB7dXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7Q29udHJhY3RzU3RhdGV9IGZyb20gXCIuLi9zdGF0ZS9hdG9tc1wiO1xuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tIFwiQG9zL2RlYnVnL0luamVjdERlYnVnRGF0YVwiO1xuaW1wb3J0IHt1c2VCb29zdGluZ05vdGlmaWNhdGlvbn0gZnJvbSBcIi4vdXNlQm9vc3RpbmdOb3RpZmljYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHVzZUNvbnRyYWN0c1NlcnZpY2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0Q29udHJhY3RzID0gdXNlU2V0UmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcbiAgICBjb25zdCBzZXRQcm9tcHQgPSB1c2VTZXRSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xuICAgIGNvbnN0IHsgc2V0Tm90aWZpY2F0aW9uIH0gPSB1c2VCb29zdGluZ05vdGlmaWNhdGlvbigpO1xuXG4gICAgY29uc3QgY2xvc2VQcm9tcHQgPSAoKSA9PiB7XG4gICAgICAgIHNldFByb21wdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgY29tcG9uZW50OiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCByZXdhcmRDb250cmFjdEhhbmRsZXIgPSAobmV3Q29udHJhY3Q6IENvbnRyYWN0KSA9PiB7XG4gICAgICAgIHNldENvbnRyYWN0cygoY29udHJhY3RMaXN0OiBDb250cmFjdFtdKSA9PiBbLi4uY29udHJhY3RMaXN0LCBuZXdDb250cmFjdF0pXG4gICAgfVxuXG4gICAgdXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5GRVRDSF9DT05UUkFDVFMsIHNldENvbnRyYWN0cyk7XG4gICAgdXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5ERUxFVEVfQ09OVFJBQ1QsIGNsb3NlUHJvbXB0KTtcbiAgICB1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjbG9zZVByb21wdCk7XG4gICAgdXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5SRVdBUkRfQ09OVFJBQ1QsIHJld2FyZENvbnRyYWN0SGFuZGxlcilcbiAgICB1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlJFV0FSRF9DT05UUkFDVCwgcmV3YXJkQ29udHJhY3RIYW5kbGVyKVxuICAgIFxufVxuXG5JbmplY3REZWJ1Z0RhdGEoXG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBhcHA6IEJPT1NUSU5HX0FQUCxcbiAgICAgICAgICAgIG1ldGhvZDogQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdWlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdF90eXBlOiAnQScsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGNvc3Q6IDIwLFxuICAgICAgICAgICAgICAgICAgICB2ZWhpY2xlOiAndGVzbGEzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdWlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdF90eXBlOiAnUysnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBjb3N0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZTogJ3Rlc2xhcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVpZDogMixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfdHlwZTogJ1MnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBjb3N0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZTogJ3Rlc2xheScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVpZDogMixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfdHlwZTogJ1MnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBjb3N0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZTogJ3Rlc2xheScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVpZDogMixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfdHlwZTogJ1MnLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBjb3N0OiAyMCxcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZTogJ3Rlc2xheScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICA1MDAsXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContractsService.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc1a342d57ea2453d9fa")
/******/ })();
/******/ 
/******/ }
);