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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContractsService\": () => (/* binding */ useContractsService)\n/* harmony export */ });\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useBoostingNotification */ \"./src/apps/boosting/hooks/useBoostingNotification.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\nconst useContractsService = () => {\n  _s();\n\n  const setBoostProfile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.profile);\n  const setReset = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.BoostProfileState.reset);\n  const setContracts = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.ContractsState.contracts);\n  const setQueue = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_6__.QueState.inQue);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)();\n  const {\n    setNotificationHandler\n  } = (0,_useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__.useBoostingNotification)();\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  };\n\n  const rewardContractHandler = newContract => {\n    setContracts(contractList => [...contractList, newContract]);\n    setQueue(false);\n  };\n\n  const setProfileHandler = data => {\n    setBoostProfile(data.profile);\n    setContracts(data.contracts);\n  };\n\n  const purchaseHandler = purchaseContract => {\n    setContracts(purchaseContract.contracts);\n    setBoostProfile(prevState => ({ ...prevState,\n      small_coin: purchaseContract.small_coin\n    }));\n  };\n\n  const alertHandler = msg => {\n    addAlert({\n      message: msg,\n      type: 'error'\n    });\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.LOAD_BOOSTING_PROFILE, setProfileHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.PURCHASE_CONTRACT, purchaseHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, closePrompt);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.REWARD_CONTRACT, rewardContractHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.MISSING_EQUIPMENT, alertHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.SEND_NOTIFICATION, setNotificationHandler);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostMissionEvents.FAIL_VEHICLE, setReset);\n};\n\n_s(useContractsService, \"IyP7E6kAl5X9lBrKbKiDGv3isZc=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar, _useBoostingNotification__WEBPACK_IMPORTED_MODULE_7__.useBoostingNotification, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuREE7QUFDQTs7O0FBb0RBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBaENBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHNTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmplY3REZWJ1Z0RhdGEgZnJvbSAnQG9zL2RlYnVnL0luamVjdERlYnVnRGF0YSc7XG5pbXBvcnQge1xuXHRCb29zdGluZ0V2ZW50cyxcblx0Qm9vc3RpbmdQcm9maWxlLFxuXHRCT09TVElOR19BUFAsXG5cdEJvb3N0TWlzc2lvbkV2ZW50cyxcblx0Qm9vc3RQcm9maWxlLFxuXHRDb250cmFjdCxcblx0Q29udHJhY3RMaXN0QW5kQ29pbnMsXG59IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XG5pbXBvcnQge3VzZU51aUV2ZW50fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcbmltcG9ydCB7dXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tICcuLi8uLi8uLi9vcy9zbmFja2Jhci9ob29rcy91c2VTbmFja2Jhcic7XG5pbXBvcnQge0Jvb3N0UHJvZmlsZVN0YXRlLCBDb250cmFjdHNTdGF0ZSwgUXVlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcbmltcG9ydCB7dXNlQm9vc3RpbmdOb3RpZmljYXRpb259IGZyb20gJy4vdXNlQm9vc3RpbmdOb3RpZmljYXRpb24nO1xuXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzU2VydmljZSA9ICgpID0+IHtcblx0Y29uc3Qgc2V0Qm9vc3RQcm9maWxlID0gdXNlU2V0UmVjb2lsU3RhdGUoQm9vc3RQcm9maWxlU3RhdGUucHJvZmlsZSk7XG5cdGNvbnN0IHNldFJlc2V0ID0gdXNlU2V0UmVjb2lsU3RhdGUoQm9vc3RQcm9maWxlU3RhdGUucmVzZXQpO1xuXHRjb25zdCBzZXRDb250cmFjdHMgPSB1c2VTZXRSZWNvaWxTdGF0ZShDb250cmFjdHNTdGF0ZS5jb250cmFjdHMpO1xuXHRjb25zdCBzZXRRdWV1ZSA9IHVzZVNldFJlY29pbFN0YXRlKFF1ZVN0YXRlLmluUXVlKTtcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcblx0Y29uc3Qge2FkZEFsZXJ0fSA9IHVzZVNuYWNrYmFyKCk7XG5cdGNvbnN0IHtzZXROb3RpZmljYXRpb25IYW5kbGVyfSA9IHVzZUJvb3N0aW5nTm90aWZpY2F0aW9uKCk7XG5cblx0Y29uc3QgY2xvc2VQcm9tcHQgPSAoKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdG1lc3NhZ2U6ICcnLFxuXHRcdFx0b3BlbjogZmFsc2UsXG5cdFx0XHRjb21wb25lbnQ6IHVuZGVmaW5lZCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXdhcmRDb250cmFjdEhhbmRsZXIgPSAobmV3Q29udHJhY3Q6IENvbnRyYWN0KSA9PiB7XG5cdFx0c2V0Q29udHJhY3RzKChjb250cmFjdExpc3Q6IENvbnRyYWN0W10pID0+IFsuLi5jb250cmFjdExpc3QsIG5ld0NvbnRyYWN0XSk7XG5cdFx0c2V0UXVldWUoZmFsc2UpO1xuXHR9O1xuXG5cdGNvbnN0IHNldFByb2ZpbGVIYW5kbGVyID0gKGRhdGE6IEJvb3N0aW5nUHJvZmlsZSkgPT4ge1xuXHRcdHNldEJvb3N0UHJvZmlsZShkYXRhLnByb2ZpbGUpO1xuXHRcdHNldENvbnRyYWN0cyhkYXRhLmNvbnRyYWN0cyk7XG5cdH07XG5cblx0Y29uc3QgcHVyY2hhc2VIYW5kbGVyID0gKHB1cmNoYXNlQ29udHJhY3Q6IENvbnRyYWN0TGlzdEFuZENvaW5zKSA9PiB7XG5cdFx0c2V0Q29udHJhY3RzKHB1cmNoYXNlQ29udHJhY3QuY29udHJhY3RzKTtcblx0XHRzZXRCb29zdFByb2ZpbGUoKHByZXZTdGF0ZTogQm9vc3RQcm9maWxlKSA9PiAoe1xuXHRcdFx0Li4ucHJldlN0YXRlLFxuXHRcdFx0c21hbGxfY29pbjogcHVyY2hhc2VDb250cmFjdC5zbWFsbF9jb2luLFxuXHRcdH0pKTtcblx0fTtcblxuXHRjb25zdCBhbGVydEhhbmRsZXIgPSAobXNnOiBzdHJpbmcpID0+IHtcblx0XHRhZGRBbGVydCh7XG5cdFx0XHRtZXNzYWdlOiBtc2csXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuTE9BRF9CT09TVElOR19QUk9GSUxFLCBzZXRQcm9maWxlSGFuZGxlcik7XG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLCBzZXRDb250cmFjdHMpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlBVUkNIQVNFX0NPTlRSQUNULCBwdXJjaGFzZUhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY2xvc2VQcm9tcHQpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjbG9zZVByb21wdCk7XG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuUkVXQVJEX0NPTlRSQUNULCByZXdhcmRDb250cmFjdEhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLk1JU1NJTkdfRVFVSVBNRU5ULCBhbGVydEhhbmRsZXIpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nRXZlbnRzLlNFTkRfTk9USUZJQ0FUSU9OLCBzZXROb3RpZmljYXRpb25IYW5kbGVyKTtcblx0dXNlTnVpRXZlbnQoQk9PU1RJTkdfQVBQLCBCb29zdE1pc3Npb25FdmVudHMuRkFJTF9WRUhJQ0xFLCBzZXRSZXNldCk7XG59O1xuXG5JbmplY3REZWJ1Z0RhdGEoXG5cdFtcblx0XHR7XG5cdFx0XHRhcHA6IEJPT1NUSU5HX0FQUCxcblx0XHRcdG1ldGhvZDogQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLFxuXHRcdFx0ZGF0YTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdBJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYTMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTKycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiA1MCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGFzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcblx0NTAwLFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContractsService.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c466d327e528baf00ca9")
/******/ })();
/******/ 
/******/ }
);