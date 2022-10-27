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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const profile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.BoostProfileState.profile);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)();\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 16\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    // console.log(index);\n    const transferData = {\n      contracts: contracts[index],\n      small_coin: profile.small_coin\n    };\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.START_CONTRACT, transferData).then(() => {\n      closePrompt();\n      addAlert({\n        message: 'Contract started!',\n        type: 'success'\n      });\n    });\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"v6hUCoOI/aiGz0DUf0pI5j0vtFU=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBaEdBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAnQG9zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcclxuaW1wb3J0IHtCb29zdGluZ0V2ZW50cywgQnV5Q29udHJhY3QsIENvbnRyYWN0LCBQdXJjaGFzZUNvbnRyYWN0fSBmcm9tICdAdHlwaW5ncy9ib29zdGluZyc7XHJcbmltcG9ydCB7UHJvbXB0U3RhdGV9IGZyb20gJ0B1aS9zdGF0ZS9Qcm9tcHRTdGF0ZSc7XHJcbmltcG9ydCB7dXNlTnVpUmVxdWVzdH0gZnJvbSAnZml2ZW0tbnVpLXJlYWN0LWxpYic7XHJcbmltcG9ydCB7dXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZX0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IERlY2xpbmVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9EZWNsaW5lUHJvbXB0JztcclxuaW1wb3J0IFN0YXJ0UHJvbXB0IGZyb20gJy4uL2NvbXBvbmVudHMvU3RhcnRQcm9tcHQnO1xyXG5pbXBvcnQgVHJhZGVQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFkZVByb21wdCc7XHJcbmltcG9ydCB7Qm9vc3RQcm9maWxlU3RhdGUsIENvbnRyYWN0c1N0YXRlfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29udHJhY3RzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjb250cmFjdHMsIHNldENvbnRyYWN0c10gPSB1c2VSZWNvaWxTdGF0ZShDb250cmFjdHNTdGF0ZS5jb250cmFjdHMpO1xyXG5cdGNvbnN0IHNldFByb21wdCA9IHVzZVNldFJlY29pbFN0YXRlKFByb21wdFN0YXRlLnByb21wdCk7XHJcblx0Y29uc3QgcHJvZmlsZSA9IHVzZVJlY29pbFZhbHVlKEJvb3N0UHJvZmlsZVN0YXRlLnByb2ZpbGUpO1xyXG5cdGNvbnN0IHtzZW5kfSA9IHVzZU51aVJlcXVlc3QoKTtcclxuXHRjb25zdCB7YWRkQWxlcnR9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcblx0Y29uc3Qgc3RhcnRQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8U3RhcnRQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcclxuXHRcdFx0bWVzc2FnZTogJ0FSRSBZT1UgUkVBRFkgVE8gU1RBUlQgWU9VUiBNSVNTSU9OPycsXHJcblx0XHRcdG9wZW46IHRydWUsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB0cmFkZVByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLkdFVF9QTEFZRVJTKS50aGVuKCgpID0+IHtcclxuXHRcdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0XHRjb21wb25lbnQ6IDxUcmFkZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRcdG1lc3NhZ2U6ICdUUkFERSBDT05UUkFDVCcsXHJcblx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNsaW5lUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdGNvbXBvbmVudDogPERlY2xpbmVQcm9tcHQgaW5kZXg9e2luZGV4fSAvPixcclxuXHRcdFx0bWVzc2FnZTogJ0FSRSBZT1UgU1VSRSBZT1UgV0FOVCBUTyBUUkFTSCBUSElTIENPTlRSQUNUPycsXHJcblx0XHRcdG9wZW46IHRydWUsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbG9zZVByb21wdCA9ICgpID0+IHtcclxuXHRcdHNldFByb21wdCh7XHJcblx0XHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0XHRvcGVuOiBmYWxzZSxcclxuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQsXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvL1RPRE86IHdyaXRlIFVJIC0+IENsaWVudCAtPiBTZXJ2aWNlIGNvZGUgOjo6IGRlY2xpbmVIYW5kbGVyIGZpcnN0XHJcblx0Y29uc3Qgc3RhcnRIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuXHRcdGNvbnN0IHRyYW5zZmVyRGF0YTogUHVyY2hhc2VDb250cmFjdCA9IHtcclxuXHRcdFx0Y29udHJhY3RzOiBjb250cmFjdHNbaW5kZXhdLFxyXG5cdFx0XHRzbWFsbF9jb2luOiBwcm9maWxlLnNtYWxsX2NvaW4sXHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuU1RBUlRfQ09OVFJBQ1QsIHRyYW5zZmVyRGF0YSkudGhlbigoKSA9PiB7XHJcblx0XHRcdGNsb3NlUHJvbXB0KCk7XHJcblx0XHRcdGFkZEFsZXJ0KHtcclxuXHRcdFx0XHRtZXNzYWdlOiAnQ29udHJhY3Qgc3RhcnRlZCEnLFxyXG5cdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvL1RPRE8gZXJyb3IgY2hlY2sgZm9yIHdoYXQgaGFwcGVucyB3aGVuIGEgcGxheWVyIGxvZ3Mgb3V0P1xyXG5cdGNvbnN0IHRyYWRlSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlRSQURFX0NPTlRSQUNULCBjb250cmFjdHNbaW5kZXhdKVxyXG5cdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0c2V0Q29udHJhY3RzKChwcmV2U3RhdGUpID0+XHJcblx0XHRcdFx0XHRwcmV2U3RhdGUuZmlsdGVyKChjb250cmFjdDogQ29udHJhY3QpID0+IGNvbnRyYWN0LmlkICE9PSBjb250cmFjdHNbaW5kZXhdLmlkKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGFkZEFsZXJ0KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCB0cmFkZWQhJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnI6IGFueSkgPT4gYWRkQWxlcnQoe21lc3NhZ2U6IGVyciwgdHlwZTogJ2Vycm9yJ30pKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNsaW5lSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY29udHJhY3RzW2luZGV4XSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxyXG5cdFx0XHRcdFx0cHJldlN0YXRlLmZpbHRlcigoY29udHJhY3Q6IENvbnRyYWN0KSA9PiBjb250cmFjdC5pZCAhPT0gY29udHJhY3RzW2luZGV4XS5pZCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRhZGRBbGVydCh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiAnQ29udHJhY3QgZGVsZXRlZC4nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycjogYW55KSA9PiBhZGRBbGVydCh7bWVzc2FnZTogZXJyLCB0eXBlOiAnZXJyb3InfSkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzdGFydFByb21wdCxcclxuXHRcdHN0YXJ0SGFuZGxlcixcclxuXHRcdHRyYWRlUHJvbXB0LFxyXG5cdFx0Y2xvc2VQcm9tcHQsXHJcblx0XHR0cmFkZUhhbmRsZXIsXHJcblx0XHRkZWNsaW5lUHJvbXB0LFxyXG5cdFx0ZGVjbGluZUhhbmRsZXIsXHJcblx0fTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ef425d1671a24d12488")
/******/ })();
/******/ 
/******/ }
);