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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContractsService\": () => (/* binding */ useContractsService)\n/* harmony export */ });\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useBoostingNotification */ \"./src/apps/boosting/hooks/useBoostingNotification.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst useContractsService = () => {\n  _s();\n\n  const setBoostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setReset = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setContracts = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const {\n    setNotification\n  } = (0,_useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__.useBoostingNotification)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)();\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  const rewardContractHandler = newContract => {\n    setContracts(contractList => [...contractList, newContract]);\n  };\n\n  const setProfileHandler = data => {\n    setBoostProfile(data.profile);\n    setContracts(data.contracts);\n  };\n\n  const purchaseHandler = purchaseContract => {\n    setContracts(purchaseContract.contracts);\n    setBoostProfile(prevState => ({ ...prevState,\n      small_coin: purchaseContract.small_coin\n    }));\n  };\n\n  const alertHandler = msg => {\n    addAlert({\n      message: msg,\n      type: 'error'\n    });\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.PURCHASE_CONTRACT, purchaseHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.REWARD_CONTRACT, rewardContractHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.MISSING_EQUIPMENT, alertHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.SEND_NOTIFICATION, setNotification);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostMissionEvents.FAIL_VEHICLE);\n};\n\n_s(useContractsService, \"vd0IS94m1MjFZNtMuN5AnTmmUPo=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, _useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__.useBoostingNotification, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpEQTtBQUNBOzs7QUFrREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFoQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0c1NlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICdAb3MvZGVidWcvSW5qZWN0RGVidWdEYXRhJztcbmltcG9ydCB7XG5cdEJvb3N0aW5nRXZlbnRzLFxuXHRCb29zdGluZ1Byb2ZpbGUsXG5cdEJPT1NUSU5HX0FQUCxcblx0Qm9vc3RNaXNzaW9uRXZlbnRzLFxuXHRCb29zdFByb2ZpbGUsXG5cdENvbnRyYWN0LFxuXHRDb250cmFjdExpc3RBbmRDb2lucyxcbn0gZnJvbSAnQHR5cGluZ3MvYm9vc3RpbmcnO1xuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcbmltcG9ydCB7dXNlTnVpRXZlbnR9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xuaW1wb3J0IHt1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7dXNlU25hY2tiYXJ9IGZyb20gJy4uLy4uLy4uL29zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcbmltcG9ydCB7Qm9vc3RQcm9maWxlU3RhdGUsIENvbnRyYWN0c1N0YXRlfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XG5pbXBvcnQge3VzZUJvb3N0aW5nTm90aWZpY2F0aW9ufSBmcm9tICcuL3VzZUJvb3N0aW5nTm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IHVzZUNvbnRyYWN0c1NlcnZpY2UgPSAoKSA9PiB7XG5cdGNvbnN0IHNldEJvb3N0UHJvZmlsZSA9IHVzZVNldFJlY29pbFN0YXRlKEJvb3N0UHJvZmlsZVN0YXRlLnByb2ZpbGUpO1xuXHRjb25zdCBzZXRSZXNldCA9IHVzZVNldFJlY29pbFN0YXRlKEJvb3N0UHJvZmlsZVN0YXRlLnByb2ZpbGUpO1xuXHRjb25zdCBzZXRDb250cmFjdHMgPSB1c2VTZXRSZWNvaWxTdGF0ZShDb250cmFjdHNTdGF0ZS5jb250cmFjdHMpO1xuXHRjb25zdCBzZXRQcm9tcHQgPSB1c2VTZXRSZWNvaWxTdGF0ZShQcm9tcHRTdGF0ZS5wcm9tcHQpO1xuXHRjb25zdCB7c2V0Tm90aWZpY2F0aW9ufSA9IHVzZUJvb3N0aW5nTm90aWZpY2F0aW9uKCk7XG5cdGNvbnN0IHthZGRBbGVydH0gPSB1c2VTbmFja2JhcigpO1xuXG5cdGNvbnN0IGNsb3NlUHJvbXB0ID0gKCkgPT4ge1xuXHRcdHNldFByb21wdCh7XG5cdFx0XHRtZXNzYWdlOiAnJyxcblx0XHRcdG9wZW46IGZhbHNlLFxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmV3YXJkQ29udHJhY3RIYW5kbGVyID0gKG5ld0NvbnRyYWN0OiBDb250cmFjdCkgPT4ge1xuXHRcdHNldENvbnRyYWN0cygoY29udHJhY3RMaXN0OiBDb250cmFjdFtdKSA9PiBbLi4uY29udHJhY3RMaXN0LCBuZXdDb250cmFjdF0pO1xuXHR9O1xuXG5cdGNvbnN0IHNldFByb2ZpbGVIYW5kbGVyID0gKGRhdGE6IEJvb3N0aW5nUHJvZmlsZSkgPT4ge1xuXHRcdHNldEJvb3N0UHJvZmlsZShkYXRhLnByb2ZpbGUpO1xuXHRcdHNldENvbnRyYWN0cyhkYXRhLmNvbnRyYWN0cyk7XG5cdH07XG5cblx0Y29uc3QgcHVyY2hhc2VIYW5kbGVyID0gKHB1cmNoYXNlQ29udHJhY3Q6IENvbnRyYWN0TGlzdEFuZENvaW5zKSA9PiB7XG5cdFx0c2V0Q29udHJhY3RzKHB1cmNoYXNlQ29udHJhY3QuY29udHJhY3RzKTtcblx0XHRzZXRCb29zdFByb2ZpbGUoKHByZXZTdGF0ZTogQm9vc3RQcm9maWxlKSA9PiAoe1xuXHRcdFx0Li4ucHJldlN0YXRlLFxuXHRcdFx0c21hbGxfY29pbjogcHVyY2hhc2VDb250cmFjdC5zbWFsbF9jb2luLFxuXHRcdH0pKTtcblx0fTtcblxuXHRjb25zdCBhbGVydEhhbmRsZXIgPSAobXNnOiBzdHJpbmcpID0+IHtcblx0XHRhZGRBbGVydCh7XG5cdFx0XHRtZXNzYWdlOiBtc2csXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuTE9BRF9CT09TVElOR19QUk9GSUxFLCBzZXRQcm9maWxlSGFuZGxlcik7XG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLCBzZXRDb250cmFjdHMpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlBVUkNIQVNFX0NPTlRSQUNULCBwdXJjaGFzZUhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY2xvc2VQcm9tcHQpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjbG9zZVByb21wdCk7XG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuUkVXQVJEX0NPTlRSQUNULCByZXdhcmRDb250cmFjdEhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLk1JU1NJTkdfRVFVSVBNRU5ULCBhbGVydEhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlNFTkRfTk9USUZJQ0FUSU9OLCBzZXROb3RpZmljYXRpb24pO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0TWlzc2lvbkV2ZW50cy5GQUlMX1ZFSElDTEUsIClcbn07XG5cbkluamVjdERlYnVnRGF0YShcblx0W1xuXHRcdHtcblx0XHRcdGFwcDogQk9PU1RJTkdfQVBQLFxuXHRcdFx0bWV0aG9kOiBCb29zdGluZ0V2ZW50cy5GRVRDSF9DT05UUkFDVFMsXG5cdFx0XHRkYXRhOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1aWQ6IDIsXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ0EnLFxuXHRcdFx0XHRcdGV4cGlyZXNfaW46IG5ldyBEYXRlKCksXG5cdFx0XHRcdFx0Y29zdDogMjAsXG5cdFx0XHRcdFx0dmVoaWNsZTogJ3Rlc2xhMycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1aWQ6IDIsXG5cdFx0XHRcdFx0Y29udHJhY3RfdHlwZTogJ1MrJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDUwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYXknLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxuXHQ1MDAsXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContractsService.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("652373a0cc650b258eaa")
/******/ })();
/******/ 
/******/ }
);