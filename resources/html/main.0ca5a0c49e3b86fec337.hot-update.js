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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _os_apps_icons_material_app_BOOSTING__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../os/apps/icons/material/app/BOOSTING */ \"./src/os/apps/icons/material/app/BOOSTING.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_5__.PromptState.prompt);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS, setContracts);\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent)(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP, _os_apps_icons_material_app_BOOSTING__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }, undefined),\n      message: 'TRADE CONTRACT',\n      open: true\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const tradeHandler = index => {\n    console.log(contracts[index]);\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id === contracts[index].id));\n    });\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"njYAQDJye2IhfCq+HwIS3hCs/SQ=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiEvent];\n});\n\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([{\n  app: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BOOSTING_APP,\n  method: _typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.FETCH_CONTRACTS,\n  data: [{\n    uid: 2,\n    contract_type: 'A',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'tesla3'\n  }, {\n    uid: 2,\n    contract_type: 'S+',\n    expires_in: new Date(),\n    cost: 50,\n    vehicle: 'teslas'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }, {\n    uid: 2,\n    contract_type: 'S',\n    expires_in: new Date(),\n    cost: 20,\n    vehicle: 'teslay'\n  }]\n}], 500);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBbEVBO0FBQ0E7OztBQW1FQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWhDQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvaG9va3MvdXNlQ29udHJhY3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7Qk9PU1RJTkdfQVBQLCBCb29zdGluZ0V2ZW50cywgQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcbmltcG9ydCB7dXNlTnVpRXZlbnQsIHVzZU51aVJlcXVlc3R9IGZyb20gJ2ZpdmVtLW51aS1yZWFjdC1saWInO1xuaW1wb3J0IHtDb250cmFjdHNTdGF0ZX0gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuLi8uLi8uLi9vcy9kZWJ1Zy9JbmplY3REZWJ1Z0RhdGEnO1xuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcbmltcG9ydCBTdGFydFByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1N0YXJ0UHJvbXB0JztcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcbmltcG9ydCBEZWNsaW5lUHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvRGVjbGluZVByb21wdCc7XG5pbXBvcnQgQm9vc3RpbmcgZnJvbSAnLi4vLi4vLi4vb3MvYXBwcy9pY29ucy9tYXRlcmlhbC9hcHAvQk9PU1RJTkcnO1xuXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzID0gKCkgPT4ge1xuXHRjb25zdCBbY29udHJhY3RzLCBzZXRDb250cmFjdHNdID0gdXNlUmVjb2lsU3RhdGUoQ29udHJhY3RzU3RhdGUuY29udHJhY3RzKTtcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcblx0Y29uc3Qge3NlbmR9ID0gdXNlTnVpUmVxdWVzdCgpO1xuXG5cdHVzZU51aUV2ZW50KEJPT1NUSU5HX0FQUCwgQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLCBzZXRDb250cmFjdHMpO1xuXHR1c2VOdWlFdmVudChCT09TVElOR19BUFAsIEJvb3N0aW5nKVxuXHRjb25zdCBzdGFydFByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPFN0YXJ0UHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBSRUFEWSBUTyBTVEFSVCBZT1VSIE1JU1NJT04/Jyxcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgdHJhZGVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHNldFByb21wdCh7XG5cdFx0XHRjb21wb25lbnQ6IDxUcmFkZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxuXHRcdFx0bWVzc2FnZTogJ1RSQURFIENPTlRSQUNUJyxcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgZGVjbGluZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0c2V0UHJvbXB0KHtcblx0XHRcdGNvbXBvbmVudDogPERlY2xpbmVQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFNVUkUgWU9VIFdBTlQgVE8gVFJBU0ggVEhJUyBDT05UUkFDVD8nLFxuXHRcdFx0b3BlbjogdHJ1ZSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjbG9zZVByb21wdCA9ICgpID0+IHtcblx0XHRzZXRQcm9tcHQoe1xuXHRcdFx0bWVzc2FnZTogJycsXG5cdFx0XHRvcGVuOiBmYWxzZSxcblx0XHRcdGNvbXBvbmVudDogdW5kZWZpbmVkLFxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vVE9ETzogd3JpdGUgVUkgLT4gQ2xpZW50IC0+IFNlcnZpY2UgY29kZSA6OjogZGVjbGluZUhhbmRsZXIgZmlyc3RcblxuXHRjb25zdCBzdGFydEhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGNvbnRyYWN0c1tpbmRleF0pO1xuXHR9O1xuXG5cdGNvbnN0IHRyYWRlSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29udHJhY3RzW2luZGV4XSk7XG5cdH07XG5cblx0Y29uc3QgZGVjbGluZUhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuREVMRVRFX0NPTlRSQUNULCBjb250cmFjdHNbaW5kZXhdKS50aGVuKCgpID0+IHtcblx0XHRcdHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxuXHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChjb250cmFjdDogQ29udHJhY3QpID0+IGNvbnRyYWN0LmlkID09PSBjb250cmFjdHNbaW5kZXhdLmlkKSxcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRzdGFydFByb21wdCxcblx0XHRzdGFydEhhbmRsZXIsXG5cdFx0dHJhZGVQcm9tcHQsXG5cdFx0Y2xvc2VQcm9tcHQsXG5cdFx0dHJhZGVIYW5kbGVyLFxuXHRcdGRlY2xpbmVQcm9tcHQsXG5cdFx0ZGVjbGluZUhhbmRsZXIsXG5cdH07XG59O1xuXG5JbmplY3REZWJ1Z0RhdGEoXG5cdFtcblx0XHR7XG5cdFx0XHRhcHA6IEJPT1NUSU5HX0FQUCxcblx0XHRcdG1ldGhvZDogQm9vc3RpbmdFdmVudHMuRkVUQ0hfQ09OVFJBQ1RTLFxuXHRcdFx0ZGF0YTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdBJyxcblx0XHRcdFx0XHRleHBpcmVzX2luOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdGNvc3Q6IDIwLFxuXHRcdFx0XHRcdHZlaGljbGU6ICd0ZXNsYTMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dWlkOiAyLFxuXHRcdFx0XHRcdGNvbnRyYWN0X3R5cGU6ICdTKycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiA1MCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGFzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVpZDogMixcblx0XHRcdFx0XHRjb250cmFjdF90eXBlOiAnUycsXG5cdFx0XHRcdFx0ZXhwaXJlc19pbjogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRjb3N0OiAyMCxcblx0XHRcdFx0XHR2ZWhpY2xlOiAndGVzbGF5Jyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcblx0NTAwLFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ }),

/***/ "./src/os/apps/icons/material/app/BOOSTING.tsx":
/*!*****************************************************!*\
  !*** ./src/os/apps/icons/material/app/BOOSTING.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material */ \"./node_modules/@mui/icons-material/esm/DoNotTouch.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\os\\\\apps\\\\icons\\\\material\\\\app\\\\BOOSTING.tsx\";\n\n\n\n\nconst Boosting = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  fontSize: \"large\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 34\n}, undefined);\n\n_c = Boosting;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boosting);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Boosting\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3MvYXBwcy9pY29ucy9tYXRlcmlhbC9hcHAvQk9PU1RJTkcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL29zL2FwcHMvaWNvbnMvbWF0ZXJpYWwvYXBwL0JPT1NUSU5HLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEb05vdFRvdWNoIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBCb29zdGluZzogUmVhY3QuRkMgPSAoKSA9PiA8RG9Ob3RUb3VjaCBmb250U2l6ZT1cImxhcmdlXCIgLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29zdGluZztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/os/apps/icons/material/app/BOOSTING.tsx\n");

/***/ }),

/***/ "./node_modules/@mui/icons-material/esm/DoNotTouch.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/DoNotTouch.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@mui/material/utils/createSvgIcon.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n  d: \"m13 10.17-2.5-2.5V2.25c0-.69.56-1.25 1.25-1.25S13 1.56 13 2.25v7.92zm7 2.58v-7.5C20 4.56 19.44 4 18.75 4s-1.25.56-1.25 1.25V11h-1V3.25c0-.69-.56-1.25-1.25-1.25S14 2.56 14 3.25v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm3.5 5.92-2.5-2.5V2.25c0-.69.56-1.25 1.25-1.25S13 1.56 13 2.25v7.92zm7 2.58v-7.5C20 4.56 19.44 4 18.75 4s-1.25.56-1.25 1.25V11h-1V3.25c0-.69-.56-1.25-1.25-1.25S14 2.56 14 3.25v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15 1.41-1.42z\"\n}), 'DoNotTouch'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRG9Ob3RUb3VjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRG9Ob3RUb3VjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwibTEzIDEwLjE3LTIuNS0yLjVWMi4yNWMwLS42OS41Ni0xLjI1IDEuMjUtMS4yNVMxMyAxLjU2IDEzIDIuMjV2Ny45MnptNyAyLjU4di03LjVDMjAgNC41NiAxOS40NCA0IDE4Ljc1IDRzLTEuMjUuNTYtMS4yNSAxLjI1VjExaC0xVjMuMjVjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1UzE0IDIuNTYgMTQgMy4yNXY3LjkybDYgNnYtNC40MnpNOS41IDQuMjVDOS41IDMuNTYgOC45NCAzIDguMjUgM2MtLjY3IDAtMS4yLjUzLTEuMjQgMS4xOEw5LjUgNi42N1Y0LjI1em0zLjUgNS45Mi0yLjUtMi41VjIuMjVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVTMTMgMS41NiAxMyAyLjI1djcuOTJ6bTcgMi41OHYtNy41QzIwIDQuNTYgMTkuNDQgNCAxOC43NSA0cy0xLjI1LjU2LTEuMjUgMS4yNVYxMWgtMVYzLjI1YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNVMxNCAyLjU2IDE0IDMuMjV2Ny45Mmw2IDZ2LTQuNDJ6TTkuNSA0LjI1QzkuNSAzLjU2IDguOTQgMyA4LjI1IDNjLS42NyAwLTEuMi41My0xLjI0IDEuMThMOS41IDYuNjdWNC4yNXptMTEuNjkgMTYuOTRMMi44MSAyLjgxIDEuMzkgNC4yMmw1LjYzIDUuNjNMNyA5LjgzdjQuM2MtMS4xMS0uNjQtMi41OC0xLjQ3LTIuNi0xLjQ4LS4xNy0uMDktLjM0LS4xNC0uNTQtLjE0LS4yNiAwLS41LjA5LS43LjI2LS4wNC4wMS0xLjE2IDEuMTEtMS4xNiAxLjExbDYuOCA3LjE4Yy41Ny42IDEuMzUuOTQgMi4xOC45NEgxN2MuNjIgMCAxLjE4LS4xOSAxLjY1LS41MmwtLjAyLS4wMiAxLjE1IDEuMTUgMS40MS0xLjQyelwiXG59KSwgJ0RvTm90VG91Y2gnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@mui/icons-material/esm/DoNotTouch.js\n");

/***/ }),

/***/ "./src/os/apps/icons lazy recursive ^\\.\\/.*\\/app\\/.*$":
/*!********************************************************************!*\
  !*** ./src/os/apps/icons/ lazy ^\.\/.*\/app\/.*$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./material/app/BANK": [
		"./src/os/apps/icons/material/app/BANK.tsx",
		"src_os_apps_icons_material_app_BANK_tsx"
	],
	"./material/app/BANK.tsx": [
		"./src/os/apps/icons/material/app/BANK.tsx",
		"src_os_apps_icons_material_app_BANK_tsx"
	],
	"./material/app/BENNYS": [
		"./src/os/apps/icons/material/app/BENNYS.tsx",
		"src_os_apps_icons_material_app_BENNYS_tsx"
	],
	"./material/app/BENNYS.tsx": [
		"./src/os/apps/icons/material/app/BENNYS.tsx",
		"src_os_apps_icons_material_app_BENNYS_tsx"
	],
	"./material/app/BOOSTING": [
		"./src/os/apps/icons/material/app/BOOSTING.tsx"
	],
	"./material/app/BOOSTING.tsx": [
		"./src/os/apps/icons/material/app/BOOSTING.tsx"
	],
	"./material/app/BROWSER": [
		"./src/os/apps/icons/material/app/BROWSER.tsx",
		"src_os_apps_icons_material_app_BROWSER_tsx"
	],
	"./material/app/BROWSER.tsx": [
		"./src/os/apps/icons/material/app/BROWSER.tsx",
		"src_os_apps_icons_material_app_BROWSER_tsx"
	],
	"./material/app/CALCULATOR": [
		"./src/os/apps/icons/material/app/CALCULATOR.tsx",
		"src_os_apps_icons_material_app_CALCULATOR_tsx"
	],
	"./material/app/CALCULATOR.tsx": [
		"./src/os/apps/icons/material/app/CALCULATOR.tsx",
		"src_os_apps_icons_material_app_CALCULATOR_tsx"
	],
	"./material/app/CAMERA": [
		"./src/os/apps/icons/material/app/CAMERA.tsx",
		"src_os_apps_icons_material_app_CAMERA_tsx"
	],
	"./material/app/CAMERA.tsx": [
		"./src/os/apps/icons/material/app/CAMERA.tsx",
		"src_os_apps_icons_material_app_CAMERA_tsx"
	],
	"./material/app/CONTACTS": [
		"./src/os/apps/icons/material/app/CONTACTS.tsx",
		"src_os_apps_icons_material_app_CONTACTS_tsx"
	],
	"./material/app/CONTACTS.tsx": [
		"./src/os/apps/icons/material/app/CONTACTS.tsx",
		"src_os_apps_icons_material_app_CONTACTS_tsx"
	],
	"./material/app/DARKMARKET": [
		"./src/os/apps/icons/material/app/DARKMARKET.tsx",
		"src_os_apps_icons_material_app_DARKMARKET_tsx"
	],
	"./material/app/DARKMARKET.tsx": [
		"./src/os/apps/icons/material/app/DARKMARKET.tsx",
		"src_os_apps_icons_material_app_DARKMARKET_tsx"
	],
	"./material/app/DIALER": [
		"./src/os/apps/icons/material/app/DIALER.tsx",
		"src_os_apps_icons_material_app_DIALER_tsx"
	],
	"./material/app/DIALER.tsx": [
		"./src/os/apps/icons/material/app/DIALER.tsx",
		"src_os_apps_icons_material_app_DIALER_tsx"
	],
	"./material/app/EMAIL": [
		"./src/os/apps/icons/material/app/EMAIL.tsx",
		"src_os_apps_icons_material_app_EMAIL_tsx"
	],
	"./material/app/EMAIL.tsx": [
		"./src/os/apps/icons/material/app/EMAIL.tsx",
		"src_os_apps_icons_material_app_EMAIL_tsx"
	],
	"./material/app/EXAMPLE": [
		"./src/os/apps/icons/material/app/EXAMPLE.tsx",
		"src_os_apps_icons_material_app_EXAMPLE_tsx"
	],
	"./material/app/EXAMPLE.tsx": [
		"./src/os/apps/icons/material/app/EXAMPLE.tsx",
		"src_os_apps_icons_material_app_EXAMPLE_tsx"
	],
	"./material/app/LOCATION": [
		"./src/os/apps/icons/material/app/LOCATION.tsx",
		"src_os_apps_icons_material_app_LOCATION_tsx"
	],
	"./material/app/LOCATION.tsx": [
		"./src/os/apps/icons/material/app/LOCATION.tsx",
		"src_os_apps_icons_material_app_LOCATION_tsx"
	],
	"./material/app/MARKETPLACE": [
		"./src/os/apps/icons/material/app/MARKETPLACE.tsx",
		"src_os_apps_icons_material_app_MARKETPLACE_tsx"
	],
	"./material/app/MARKETPLACE.tsx": [
		"./src/os/apps/icons/material/app/MARKETPLACE.tsx",
		"src_os_apps_icons_material_app_MARKETPLACE_tsx"
	],
	"./material/app/MATCH": [
		"./src/os/apps/icons/material/app/MATCH.tsx",
		"src_os_apps_icons_material_app_MATCH_tsx"
	],
	"./material/app/MATCH.tsx": [
		"./src/os/apps/icons/material/app/MATCH.tsx",
		"src_os_apps_icons_material_app_MATCH_tsx"
	],
	"./material/app/MESSAGES": [
		"./src/os/apps/icons/material/app/MESSAGES.tsx",
		"src_os_apps_icons_material_app_MESSAGES_tsx"
	],
	"./material/app/MESSAGES.tsx": [
		"./src/os/apps/icons/material/app/MESSAGES.tsx",
		"src_os_apps_icons_material_app_MESSAGES_tsx"
	],
	"./material/app/NOTES": [
		"./src/os/apps/icons/material/app/NOTES.tsx",
		"src_os_apps_icons_material_app_NOTES_tsx"
	],
	"./material/app/NOTES.tsx": [
		"./src/os/apps/icons/material/app/NOTES.tsx",
		"src_os_apps_icons_material_app_NOTES_tsx"
	],
	"./material/app/PROPERTY": [
		"./src/os/apps/icons/material/app/PROPERTY.tsx",
		"src_os_apps_icons_material_app_PROPERTY_tsx"
	],
	"./material/app/PROPERTY.tsx": [
		"./src/os/apps/icons/material/app/PROPERTY.tsx",
		"src_os_apps_icons_material_app_PROPERTY_tsx"
	],
	"./material/app/SETTINGS": [
		"./src/os/apps/icons/material/app/SETTINGS.tsx",
		"src_os_apps_icons_material_app_SETTINGS_tsx"
	],
	"./material/app/SETTINGS.tsx": [
		"./src/os/apps/icons/material/app/SETTINGS.tsx",
		"src_os_apps_icons_material_app_SETTINGS_tsx"
	],
	"./material/app/TWITTER": [
		"./src/os/apps/icons/material/app/TWITTER.tsx",
		"src_os_apps_icons_material_app_TWITTER_tsx"
	],
	"./material/app/TWITTER.tsx": [
		"./src/os/apps/icons/material/app/TWITTER.tsx",
		"src_os_apps_icons_material_app_TWITTER_tsx"
	],
	"./npwd_icons/app/BANK": [
		"./src/os/apps/icons/npwd_icons/app/BANK.tsx",
		"src_os_apps_icons_npwd_icons_app_BANK_tsx"
	],
	"./npwd_icons/app/BANK.tsx": [
		"./src/os/apps/icons/npwd_icons/app/BANK.tsx",
		"src_os_apps_icons_npwd_icons_app_BANK_tsx"
	],
	"./npwd_icons/app/BENNYS": [
		"./src/os/apps/icons/npwd_icons/app/BENNYS.tsx",
		"src_os_apps_icons_npwd_icons_app_BENNYS_tsx"
	],
	"./npwd_icons/app/BENNYS.tsx": [
		"./src/os/apps/icons/npwd_icons/app/BENNYS.tsx",
		"src_os_apps_icons_npwd_icons_app_BENNYS_tsx"
	],
	"./npwd_icons/app/BOOSTING": [
		"./src/os/apps/icons/npwd_icons/app/BOOSTING.tsx",
		"src_os_apps_icons_npwd_icons_app_BOOSTING_tsx"
	],
	"./npwd_icons/app/BOOSTING.tsx": [
		"./src/os/apps/icons/npwd_icons/app/BOOSTING.tsx",
		"src_os_apps_icons_npwd_icons_app_BOOSTING_tsx"
	],
	"./npwd_icons/app/BROWSER": [
		"./src/os/apps/icons/npwd_icons/app/BROWSER.tsx",
		"src_os_apps_icons_npwd_icons_app_BROWSER_tsx"
	],
	"./npwd_icons/app/BROWSER.tsx": [
		"./src/os/apps/icons/npwd_icons/app/BROWSER.tsx",
		"src_os_apps_icons_npwd_icons_app_BROWSER_tsx"
	],
	"./npwd_icons/app/CALCULATOR": [
		"./src/os/apps/icons/npwd_icons/app/CALCULATOR.tsx",
		"src_os_apps_icons_npwd_icons_app_CALCULATOR_tsx"
	],
	"./npwd_icons/app/CALCULATOR.tsx": [
		"./src/os/apps/icons/npwd_icons/app/CALCULATOR.tsx",
		"src_os_apps_icons_npwd_icons_app_CALCULATOR_tsx"
	],
	"./npwd_icons/app/CAMERA": [
		"./src/os/apps/icons/npwd_icons/app/CAMERA.tsx",
		"src_os_apps_icons_npwd_icons_app_CAMERA_tsx"
	],
	"./npwd_icons/app/CAMERA.tsx": [
		"./src/os/apps/icons/npwd_icons/app/CAMERA.tsx",
		"src_os_apps_icons_npwd_icons_app_CAMERA_tsx"
	],
	"./npwd_icons/app/CONTACTS": [
		"./src/os/apps/icons/npwd_icons/app/CONTACTS.tsx",
		"src_os_apps_icons_npwd_icons_app_CONTACTS_tsx"
	],
	"./npwd_icons/app/CONTACTS.tsx": [
		"./src/os/apps/icons/npwd_icons/app/CONTACTS.tsx",
		"src_os_apps_icons_npwd_icons_app_CONTACTS_tsx"
	],
	"./npwd_icons/app/DARKMARKET": [
		"./src/os/apps/icons/npwd_icons/app/DARKMARKET.tsx",
		"src_os_apps_icons_npwd_icons_app_DARKMARKET_tsx"
	],
	"./npwd_icons/app/DARKMARKET.tsx": [
		"./src/os/apps/icons/npwd_icons/app/DARKMARKET.tsx",
		"src_os_apps_icons_npwd_icons_app_DARKMARKET_tsx"
	],
	"./npwd_icons/app/DIALER": [
		"./src/os/apps/icons/npwd_icons/app/DIALER.tsx",
		"src_os_apps_icons_npwd_icons_app_DIALER_tsx"
	],
	"./npwd_icons/app/DIALER.tsx": [
		"./src/os/apps/icons/npwd_icons/app/DIALER.tsx",
		"src_os_apps_icons_npwd_icons_app_DIALER_tsx"
	],
	"./npwd_icons/app/EMAIL": [
		"./src/os/apps/icons/npwd_icons/app/EMAIL.tsx",
		"src_os_apps_icons_npwd_icons_app_EMAIL_tsx"
	],
	"./npwd_icons/app/EMAIL.tsx": [
		"./src/os/apps/icons/npwd_icons/app/EMAIL.tsx",
		"src_os_apps_icons_npwd_icons_app_EMAIL_tsx"
	],
	"./npwd_icons/app/EXAMPLE": [
		"./src/os/apps/icons/npwd_icons/app/EXAMPLE.tsx",
		"src_os_apps_icons_npwd_icons_app_EXAMPLE_tsx"
	],
	"./npwd_icons/app/EXAMPLE.tsx": [
		"./src/os/apps/icons/npwd_icons/app/EXAMPLE.tsx",
		"src_os_apps_icons_npwd_icons_app_EXAMPLE_tsx"
	],
	"./npwd_icons/app/LOCATION": [
		"./src/os/apps/icons/npwd_icons/app/LOCATION.tsx",
		"src_os_apps_icons_npwd_icons_app_LOCATION_tsx"
	],
	"./npwd_icons/app/LOCATION.tsx": [
		"./src/os/apps/icons/npwd_icons/app/LOCATION.tsx",
		"src_os_apps_icons_npwd_icons_app_LOCATION_tsx"
	],
	"./npwd_icons/app/MARKETPLACE": [
		"./src/os/apps/icons/npwd_icons/app/MARKETPLACE.tsx",
		"src_os_apps_icons_npwd_icons_app_MARKETPLACE_tsx"
	],
	"./npwd_icons/app/MARKETPLACE.tsx": [
		"./src/os/apps/icons/npwd_icons/app/MARKETPLACE.tsx",
		"src_os_apps_icons_npwd_icons_app_MARKETPLACE_tsx"
	],
	"./npwd_icons/app/MATCH": [
		"./src/os/apps/icons/npwd_icons/app/MATCH.tsx",
		"src_os_apps_icons_npwd_icons_app_MATCH_tsx"
	],
	"./npwd_icons/app/MATCH.tsx": [
		"./src/os/apps/icons/npwd_icons/app/MATCH.tsx",
		"src_os_apps_icons_npwd_icons_app_MATCH_tsx"
	],
	"./npwd_icons/app/MESSAGES": [
		"./src/os/apps/icons/npwd_icons/app/MESSAGES.tsx",
		"src_os_apps_icons_npwd_icons_app_MESSAGES_tsx"
	],
	"./npwd_icons/app/MESSAGES.tsx": [
		"./src/os/apps/icons/npwd_icons/app/MESSAGES.tsx",
		"src_os_apps_icons_npwd_icons_app_MESSAGES_tsx"
	],
	"./npwd_icons/app/NOTES": [
		"./src/os/apps/icons/npwd_icons/app/NOTES.tsx",
		"src_os_apps_icons_npwd_icons_app_NOTES_tsx"
	],
	"./npwd_icons/app/NOTES.tsx": [
		"./src/os/apps/icons/npwd_icons/app/NOTES.tsx",
		"src_os_apps_icons_npwd_icons_app_NOTES_tsx"
	],
	"./npwd_icons/app/SETTINGS": [
		"./src/os/apps/icons/npwd_icons/app/SETTINGS.tsx",
		"src_os_apps_icons_npwd_icons_app_SETTINGS_tsx"
	],
	"./npwd_icons/app/SETTINGS.tsx": [
		"./src/os/apps/icons/npwd_icons/app/SETTINGS.tsx",
		"src_os_apps_icons_npwd_icons_app_SETTINGS_tsx"
	],
	"./npwd_icons/app/TWITTER": [
		"./src/os/apps/icons/npwd_icons/app/TWITTER.tsx",
		"src_os_apps_icons_npwd_icons_app_TWITTER_tsx"
	],
	"./npwd_icons/app/TWITTER.tsx": [
		"./src/os/apps/icons/npwd_icons/app/TWITTER.tsx",
		"src_os_apps_icons_npwd_icons_app_TWITTER_tsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/os/apps/icons lazy recursive ^\\.\\/.*\\/app\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65578b2c791e7a265f78")
/******/ })();
/******/ 
/******/ }
);