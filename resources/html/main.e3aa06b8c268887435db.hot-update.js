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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_4__.PromptState.prompt);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 16\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.START_CONTRACT);\n    console.log(contracts[index]);\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"0JGWJcwAOlWannOAWLK37OfrIak=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_2__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_8__.useSnackbar];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUFwRkE7QUFDQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL2FwcHMvYm9vc3RpbmcvaG9va3MvdXNlQ29udHJhY3RzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHtCb29zdGluZ0V2ZW50cywgQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHt1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHtDb250cmFjdHNTdGF0ZX0gZnJvbSAnLi4vc3RhdGUvYXRvbXMnO1xyXG5pbXBvcnQge1Byb21wdFN0YXRlfSBmcm9tICdAdWkvc3RhdGUvUHJvbXB0U3RhdGUnO1xyXG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XHJcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcclxuaW1wb3J0IERlY2xpbmVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9EZWNsaW5lUHJvbXB0JztcclxuaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAnQG9zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb250cmFjdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvbnRyYWN0cywgc2V0Q29udHJhY3RzXSA9IHVzZVJlY29pbFN0YXRlKENvbnRyYWN0c1N0YXRlLmNvbnRyYWN0cyk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHRjb25zdCB7c2VuZH0gPSB1c2VOdWlSZXF1ZXN0KCk7XHJcblx0Y29uc3Qge2FkZEFsZXJ0fSA9IHVzZVNuYWNrYmFyKCk7XHJcblxyXG5cdGNvbnN0IHN0YXJ0UHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPFN0YXJ0UHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXHJcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFJFQURZIFRPIFNUQVJUIFlPVVIgTUlTU0lPTj8nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdHJhZGVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2VuZChCb29zdGluZ0V2ZW50cy5HRVRfUExBWUVSUykudGhlbigoKSA9PiB7XHJcblx0XHRcdHNldFByb21wdCh7XHJcblx0XHRcdFx0Y29tcG9uZW50OiA8VHJhZGVQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcclxuXHRcdFx0XHRtZXNzYWdlOiAnVFJBREUgQ09OVFJBQ1QnLFxyXG5cdFx0XHRcdG9wZW46IHRydWUsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVjbGluZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxEZWNsaW5lUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXHJcblx0XHRcdG1lc3NhZ2U6ICdBUkUgWU9VIFNVUkUgWU9VIFdBTlQgVE8gVFJBU0ggVEhJUyBDT05UUkFDVD8nLFxyXG5cdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2xvc2VQcm9tcHQgPSAoKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRtZXNzYWdlOiAnJyxcclxuXHRcdFx0b3BlbjogZmFsc2UsXHJcblx0XHRcdGNvbXBvbmVudDogdW5kZWZpbmVkLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly9UT0RPOiB3cml0ZSBVSSAtPiBDbGllbnQgLT4gU2VydmljZSBjb2RlIDo6OiBkZWNsaW5lSGFuZGxlciBmaXJzdFxyXG5cdGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlNUQVJUX0NPTlRSQUNULCApXHJcblx0XHRjb25zb2xlLmxvZyhjb250cmFjdHNbaW5kZXhdKTtcclxuXHR9O1xyXG5cclxuXHQvL1RPRE8gZXJyb3IgY2hlY2sgZm9yIHdoYXQgaGFwcGVucyB3aGVuIGEgcGxheWVyIGxvZ3Mgb3V0P1xyXG5cdGNvbnN0IHRyYWRlSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjb250cmFjdHNbaW5kZXhdKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c2V0Q29udHJhY3RzKChwcmV2U3RhdGUpID0+XHJcblx0XHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChjb250cmFjdDogQ29udHJhY3QpID0+IGNvbnRyYWN0LmlkICE9PSBjb250cmFjdHNbaW5kZXhdLmlkKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGFkZEFsZXJ0KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCB0cmFkZWQhJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnI6IGFueSkgPT4gYWRkQWxlcnQoe21lc3NhZ2U6IGVyciwgdHlwZTogJ2Vycm9yJ30pKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNsaW5lSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY29udHJhY3RzW2luZGV4XSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxyXG5cdFx0XHRcdFx0cHJldlN0YXRlLmZpbHRlcigoY29udHJhY3Q6IENvbnRyYWN0KSA9PiBjb250cmFjdC5pZCAhPT0gY29udHJhY3RzW2luZGV4XS5pZCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRhZGRBbGVydCh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiAnQ29udHJhY3QgZGVsZXRlZC4nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycjogYW55KSA9PiBhZGRBbGVydCh7bWVzc2FnZTogZXJyLCB0eXBlOiAnZXJyb3InfSkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzdGFydFByb21wdCxcclxuXHRcdHN0YXJ0SGFuZGxlcixcclxuXHRcdHRyYWRlUHJvbXB0LFxyXG5cdFx0Y2xvc2VQcm9tcHQsXHJcblx0XHR0cmFkZUhhbmRsZXIsXHJcblx0XHRkZWNsaW5lUHJvbXB0LFxyXG5cdFx0ZGVjbGluZUhhbmRsZXIsXHJcblx0fTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12625e9a2282b9ad0746")
/******/ })();
/******/ 
/******/ }
);