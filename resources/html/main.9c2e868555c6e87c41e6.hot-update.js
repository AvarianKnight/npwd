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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContractsService\": () => (/* binding */ useContractsService)\n/* harmony export */ });\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useBoostingNotification */ \"./src/apps/boosting/hooks/useBoostingNotification.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\nconst useContractsService = () => {\n  _s();\n\n  const setBoostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_5__.BoostProfileState.profile);\n  const setContracts = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_5__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const {\n    setNotification\n  } = (0,_useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__.useBoostingNotification)();\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  const rewardContractHandler = newContract => {\n    setContracts(contractList => [...contractList, newContract]);\n  };\n\n  const setProfileHandler = data => {\n    setBoostProfile(data.profile);\n    setContracts(data.contracts);\n  };\n\n  const purchaseHandler = purchaseContract => {\n    setContracts(purchaseContract.contracts);\n    setBoostProfile(prevState => ({ ...prevState,\n      small_coin: purchaseContract.small_coin\n    }));\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.PURCHASE_CONTRACT, purchaseHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.REWARD_CONTRACT, rewardContractHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, Boos);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.SEND_NOTIFICATION, setNotification);\n};\n\n_s(useContractsService, \"A+HrjzfvET8L2t+mmYTHl4X7h2Y=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, _useBoostingNotification__WEBPACK_IMPORTED_MODULE_6__.useBoostingNotification, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2Q0E7QUFDQTs7O0FBd0NBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBaENBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmplY3REZWJ1Z0RhdGEgZnJvbSAnQG9zL2RlYnVnL0luamVjdERlYnVnRGF0YSc7XHJcbmltcG9ydCB7XHJcblx0Qm9vc3RpbmdFdmVudHMsXHJcblx0Qm9vc3RpbmdQcm9maWxlLFxyXG5cdEJPT1NUSU5HX0FQUCxcclxuXHRCb29zdFByb2ZpbGUsXHJcblx0Q29udHJhY3QsXHJcblx0Q29udHJhY3RMaXN0QW5kQ29pbnMsXHJcbn0gZnJvbSAnQHR5cGluZ3MvYm9vc3RpbmcnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQge3VzZU51aUV2ZW50fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHt1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHtCb29zdFByb2ZpbGVTdGF0ZSwgQ29udHJhY3RzU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuaW1wb3J0IHt1c2VCb29zdGluZ05vdGlmaWNhdGlvbn0gZnJvbSAnLi91c2VCb29zdGluZ05vdGlmaWNhdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzU2VydmljZSA9ICgpID0+IHtcclxuXHRjb25zdCBzZXRCb29zdFByb2ZpbGUgPSB1c2VTZXRSZWNvaWxTdGF0ZShCb29zdFByb2ZpbGVTdGF0ZS5wcm9maWxlKTtcclxuXHRjb25zdCBzZXRDb250cmFjdHMgPSB1c2VTZXRSZWNvaWxTdGF0ZShDb250cmFjdHNTdGF0ZS5jb250cmFjdHMpO1xyXG5cdGNvbnN0IHNldFByb21wdCA9IHVzZVNldFJlY29pbFN0YXRlKFByb21wdFN0YXRlLnByb21wdCk7XHJcblx0Y29uc3Qge3NldE5vdGlmaWNhdGlvbn0gPSB1c2VCb29zdGluZ05vdGlmaWNhdGlvbigpO1xyXG5cclxuXHRjb25zdCBjbG9zZVByb21wdCA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRvcGVuOiBmYWxzZSxcclxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZXdhcmRDb250cmFjdEhhbmRsZXIgPSAobmV3Q29udHJhY3Q6IENvbnRyYWN0KSA9PiB7XHJcblx0XHRzZXRDb250cmFjdHMoKGNvbnRyYWN0TGlzdDogQ29udHJhY3RbXSkgPT4gWy4uLmNvbnRyYWN0TGlzdCwgbmV3Q29udHJhY3RdKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRQcm9maWxlSGFuZGxlciA9IChkYXRhOiBCb29zdGluZ1Byb2ZpbGUpID0+IHtcclxuXHRcdHNldEJvb3N0UHJvZmlsZShkYXRhLnByb2ZpbGUpO1xyXG5cdFx0c2V0Q29udHJhY3RzKGRhdGEuY29udHJhY3RzKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwdXJjaGFzZUhhbmRsZXIgPSAocHVyY2hhc2VDb250cmFjdDogQ29udHJhY3RMaXN0QW5kQ29pbnMpID0+IHtcclxuXHRcdHNldENvbnRyYWN0cyhwdXJjaGFzZUNvbnRyYWN0LmNvbnRyYWN0cyk7XHJcblx0XHRzZXRCb29zdFByb2ZpbGUoKHByZXZTdGF0ZTogQm9vc3RQcm9maWxlKSA9PiAoe1xyXG5cdFx0XHQuLi5wcmV2U3RhdGUsXHJcblx0XHRcdHNtYWxsX2NvaW46IHB1cmNoYXNlQ29udHJhY3Quc21hbGxfY29pbixcclxuXHRcdH0pKTtcclxuXHR9O1xyXG5cclxuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkxPQURfQk9PU1RJTkdfUFJPRklMRSwgc2V0UHJvZmlsZUhhbmRsZXIpO1xyXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLCBzZXRDb250cmFjdHMpO1xyXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuUFVSQ0hBU0VfQ09OVFJBQ1QsIHB1cmNoYXNlSGFuZGxlcik7XHJcblx0dXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5ERUxFVEVfQ09OVFJBQ1QsIGNsb3NlUHJvbXB0KTtcclxuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjbG9zZVByb21wdCk7XHJcblx0dXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cy5SRVdBUkRfQ09OVFJBQ1QsIHJld2FyZENvbnRyYWN0SGFuZGxlcik7XHJcblx0dXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zKVxyXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuU0VORF9OT1RJRklDQVRJT04sIHNldE5vdGlmaWNhdGlvbik7XHJcbn07XHJcblxyXG5JbmplY3REZWJ1Z0RhdGEoXHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRhcHA6IEJPT1NUSU5HX0FQUCxcclxuXHRcdFx0bWV0aG9kOiBCb29zdGluZ0V2ZW50cy5GRVRDSF9DT05UUkFDVFMsXHJcblx0XHRcdGRhdGE6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnQScsXHJcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0Y29zdDogMjAsXHJcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGEzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTKycsXHJcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0Y29zdDogNTAsXHJcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGFzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHVpZDogMixcclxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcclxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXHJcblx0XHRcdFx0XHRjb3N0OiAyMCxcclxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dWlkOiAyLFxyXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MnLFxyXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcclxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxyXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xheScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR1aWQ6IDIsXHJcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXHJcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdFx0Y29zdDogMjAsXHJcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdDUwMCxcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContractsService.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c102ba2c00db385943c3")
/******/ })();
/******/ 
/******/ }
);