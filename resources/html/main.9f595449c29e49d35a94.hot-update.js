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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const profile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.BoostProfileState.profile);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)();\n  const selectedPlayerBoosting = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.TradeState.selectedPlayerBoosting);\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 16\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    const transferData = {\n      contract: contracts[index],\n      small_coin: profile.small_coin\n    };\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.START_CONTRACT, transferData).then(allowed => {\n      if (allowed) {\n        closePrompt();\n        addAlert({\n          message: 'Contract started!',\n          type: 'success'\n        });\n      }\n    });\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, {\n      contract: contracts[index],\n      player: selectedPlayerBoosting\n    }).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      closePrompt();\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"O+MXOMm2Y2T9wrGul8N6r7qKlVk=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBdkdBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAnQG9zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcclxuaW1wb3J0IHtCb29zdGluZ0V2ZW50cywgQ29udHJhY3QsIFB1cmNoYXNlQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcclxuaW1wb3J0IHt1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgRGVjbGluZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL0RlY2xpbmVQcm9tcHQnO1xyXG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XHJcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcclxuaW1wb3J0IHtCb29zdFByb2ZpbGVTdGF0ZSwgQ29udHJhY3RzU3RhdGUsIFRyYWRlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb250cmFjdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvbnRyYWN0cywgc2V0Q29udHJhY3RzXSA9IHVzZVJlY29pbFN0YXRlKENvbnRyYWN0c1N0YXRlLmNvbnRyYWN0cyk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHRjb25zdCBwcm9maWxlID0gdXNlUmVjb2lsVmFsdWUoQm9vc3RQcm9maWxlU3RhdGUucHJvZmlsZSk7XHJcblx0Y29uc3Qge3NlbmR9ID0gdXNlTnVpUmVxdWVzdCgpO1xyXG5cdGNvbnN0IHthZGRBbGVydH0gPSB1c2VTbmFja2JhcigpO1xyXG5cdGNvbnN0IHNlbGVjdGVkUGxheWVyQm9vc3RpbmcgPSB1c2VSZWNvaWxWYWx1ZShUcmFkZVN0YXRlLnNlbGVjdGVkUGxheWVyQm9vc3RpbmcpO1xyXG5cclxuXHRjb25zdCBzdGFydFByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxTdGFydFByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBSRUFEWSBUTyBTVEFSVCBZT1VSIE1JU1NJT04/JyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRyYWRlUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuR0VUX1BMQVlFUlMpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRcdGNvbXBvbmVudDogPFRyYWRlUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXHJcblx0XHRcdFx0bWVzc2FnZTogJ1RSQURFIENPTlRSQUNUJyxcclxuXHRcdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlY2xpbmVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8RGVjbGluZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBTVVJFIFlPVSBXQU5UIFRPIFRSQVNIIFRISVMgQ09OVFJBQ1Q/JyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsb3NlUHJvbXB0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0bWVzc2FnZTogJycsXHJcblx0XHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0XHRjb21wb25lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vVE9ETzogd3JpdGUgVUkgLT4gQ2xpZW50IC0+IFNlcnZpY2UgY29kZSA6OjogZGVjbGluZUhhbmRsZXIgZmlyc3RcclxuXHRjb25zdCBzdGFydEhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdHJhbnNmZXJEYXRhOiBQdXJjaGFzZUNvbnRyYWN0ID0ge1xyXG5cdFx0XHRjb250cmFjdDogY29udHJhY3RzW2luZGV4XSxcclxuXHRcdFx0c21hbGxfY29pbjogcHJvZmlsZS5zbWFsbF9jb2luLFxyXG5cdFx0fTtcclxuXHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlNUQVJUX0NPTlRSQUNULCB0cmFuc2ZlckRhdGEpLnRoZW4oKGFsbG93ZWQpID0+IHtcclxuXHRcdFx0aWYoYWxsb3dlZCl7XHJcblxyXG5cdFx0XHRcdGNsb3NlUHJvbXB0KCk7XHJcblx0XHRcdFx0YWRkQWxlcnQoe1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ0NvbnRyYWN0IHN0YXJ0ZWQhJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly9UT0RPIGVycm9yIGNoZWNrIGZvciB3aGF0IGhhcHBlbnMgd2hlbiBhIHBsYXllciBsb2dzIG91dD9cclxuXHRjb25zdCB0cmFkZUhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2VuZChCb29zdGluZ0V2ZW50cy5UUkFERV9DT05UUkFDVCwge1xyXG5cdFx0XHRjb250cmFjdDogY29udHJhY3RzW2luZGV4XSxcclxuXHRcdFx0cGxheWVyOiBzZWxlY3RlZFBsYXllckJvb3N0aW5nLFxyXG5cdFx0fSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxyXG5cdFx0XHRcdFx0cHJldlN0YXRlLmZpbHRlcigoY29udHJhY3Q6IENvbnRyYWN0KSA9PiBjb250cmFjdC5pZCAhPT0gY29udHJhY3RzW2luZGV4XS5pZCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjbG9zZVByb21wdCgpO1xyXG5cdFx0XHRcdGFkZEFsZXJ0KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCB0cmFkZWQhJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnI6IGFueSkgPT4gYWRkQWxlcnQoe21lc3NhZ2U6IGVyciwgdHlwZTogJ2Vycm9yJ30pKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWNsaW5lSGFuZGxlciA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLkRFTEVURV9DT05UUkFDVCwgY29udHJhY3RzW2luZGV4XSlcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHNldENvbnRyYWN0cygocHJldlN0YXRlKSA9PlxyXG5cdFx0XHRcdFx0cHJldlN0YXRlLmZpbHRlcigoY29udHJhY3Q6IENvbnRyYWN0KSA9PiBjb250cmFjdC5pZCAhPT0gY29udHJhY3RzW2luZGV4XS5pZCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRhZGRBbGVydCh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiAnQ29udHJhY3QgZGVsZXRlZC4nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycjogYW55KSA9PiBhZGRBbGVydCh7bWVzc2FnZTogZXJyLCB0eXBlOiAnZXJyb3InfSkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzdGFydFByb21wdCxcclxuXHRcdHN0YXJ0SGFuZGxlcixcclxuXHRcdHRyYWRlUHJvbXB0LFxyXG5cdFx0Y2xvc2VQcm9tcHQsXHJcblx0XHR0cmFkZUhhbmRsZXIsXHJcblx0XHRkZWNsaW5lUHJvbXB0LFxyXG5cdFx0ZGVjbGluZUhhbmRsZXIsXHJcblx0fTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8d07ad9c5f0631cef51")
/******/ })();
/******/ 
/******/ }
);