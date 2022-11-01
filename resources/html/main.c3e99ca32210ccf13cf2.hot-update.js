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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useContracts\": () => (/* binding */ useContracts)\n/* harmony export */ });\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* harmony import */ var _typings_boosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typings/boosting */ \"../typings/boosting.ts\");\n/* harmony import */ var _ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui/state/PromptState */ \"./src/ui/state/PromptState.ts\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DeclinePrompt */ \"./src/apps/boosting/components/DeclinePrompt.tsx\");\n/* harmony import */ var _components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StartPrompt */ \"./src/apps/boosting/components/StartPrompt.tsx\");\n/* harmony import */ var _components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TradePrompt */ \"./src/apps/boosting/components/TradePrompt.tsx\");\n/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/atoms */ \"./src/apps/boosting/state/atoms.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\apps\\\\boosting\\\\hooks\\\\useContracts.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst useContracts = () => {\n  _s();\n\n  const [contracts, setContracts] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.ContractsState.contracts);\n  const setPrompt = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState)(_ui_state_PromptState__WEBPACK_IMPORTED_MODULE_2__.PromptState.prompt);\n  const profile = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.BoostProfileState.profile);\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest)();\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)();\n  const selectedPlayerBoosting = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_state_atoms__WEBPACK_IMPORTED_MODULE_8__.TradeState.selectedPlayerBoosting);\n\n  const startPrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_StartPrompt__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU READY TO START YOUR MISSION?',\n      open: true\n    });\n  };\n\n  const tradePrompt = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.GET_PLAYERS).then(() => {\n      setPrompt({\n        component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_TradePrompt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          index: index\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 16\n        }, undefined),\n        message: 'TRADE CONTRACT',\n        open: true\n      });\n    });\n  };\n\n  const declinePrompt = index => {\n    setPrompt({\n      component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DeclinePrompt__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }, undefined),\n      message: 'ARE YOU SURE YOU WANT TO TRASH THIS CONTRACT?',\n      open: true\n    });\n  };\n\n  const closePrompt = () => {\n    setPrompt({\n      message: '',\n      open: false,\n      component: undefined\n    });\n  }; //TODO: write UI -> Client -> Service code ::: declineHandler first\n\n\n  const startHandler = index => {\n    const transferData = {\n      contract: contracts[index],\n      small_coin: profile.small_coin\n    };\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.START_CONTRACT, transferData).then(allowed => {\n      if (allowed) {\n        closePrompt();\n        addAlert({\n          message: 'Contract started!',\n          type: 'success'\n        });\n      } else {}\n    });\n  }; //TODO error check for what happens when a player logs out?\n\n\n  const tradeHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.TRADE_CONTRACT, {\n      contract: contracts[index],\n      player: selectedPlayerBoosting\n    }).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      closePrompt();\n      addAlert({\n        message: 'Contract traded!',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  const declineHandler = index => {\n    send(_typings_boosting__WEBPACK_IMPORTED_MODULE_1__.BoostingEvents.DELETE_CONTRACT, contracts[index]).then(() => {\n      setContracts(prevState => prevState.filter(contract => contract.id !== contracts[index].id));\n      addAlert({\n        message: 'Contract deleted.',\n        type: 'success'\n      });\n    }).catch(err => addAlert({\n      message: err,\n      type: 'error'\n    }));\n  };\n\n  return {\n    startPrompt,\n    startHandler,\n    tradePrompt,\n    closePrompt,\n    tradeHandler,\n    declinePrompt,\n    declineHandler\n  };\n};\n\n_s(useContracts, \"O+MXOMm2Y2T9wrGul8N6r7qKlVk=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useSetRecoilState, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_3__.useNuiRequest, _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_0__.useSnackbar, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VDb250cmFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBdkdBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9hcHBzL2Jvb3N0aW5nL2hvb2tzL3VzZUNvbnRyYWN0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAnQG9zL3NuYWNrYmFyL2hvb2tzL3VzZVNuYWNrYmFyJztcclxuaW1wb3J0IHtCb29zdGluZ0V2ZW50cywgQ29udHJhY3QsIFB1cmNoYXNlQ29udHJhY3R9IGZyb20gJ0B0eXBpbmdzL2Jvb3N0aW5nJztcclxuaW1wb3J0IHtQcm9tcHRTdGF0ZX0gZnJvbSAnQHVpL3N0YXRlL1Byb21wdFN0YXRlJztcclxuaW1wb3J0IHt1c2VOdWlSZXF1ZXN0fSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHt1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUsIHVzZVNldFJlY29pbFN0YXRlfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgRGVjbGluZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL0RlY2xpbmVQcm9tcHQnO1xyXG5pbXBvcnQgU3RhcnRQcm9tcHQgZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydFByb21wdCc7XHJcbmltcG9ydCBUcmFkZVByb21wdCBmcm9tICcuLi9jb21wb25lbnRzL1RyYWRlUHJvbXB0JztcclxuaW1wb3J0IHtCb29zdFByb2ZpbGVTdGF0ZSwgQ29udHJhY3RzU3RhdGUsIFRyYWRlU3RhdGV9IGZyb20gJy4uL3N0YXRlL2F0b21zJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb250cmFjdHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2NvbnRyYWN0cywgc2V0Q29udHJhY3RzXSA9IHVzZVJlY29pbFN0YXRlKENvbnRyYWN0c1N0YXRlLmNvbnRyYWN0cyk7XHJcblx0Y29uc3Qgc2V0UHJvbXB0ID0gdXNlU2V0UmVjb2lsU3RhdGUoUHJvbXB0U3RhdGUucHJvbXB0KTtcclxuXHRjb25zdCBwcm9maWxlID0gdXNlUmVjb2lsVmFsdWUoQm9vc3RQcm9maWxlU3RhdGUucHJvZmlsZSk7XHJcblx0Y29uc3Qge3NlbmR9ID0gdXNlTnVpUmVxdWVzdCgpO1xyXG5cdGNvbnN0IHthZGRBbGVydH0gPSB1c2VTbmFja2JhcigpO1xyXG5cdGNvbnN0IHNlbGVjdGVkUGxheWVyQm9vc3RpbmcgPSB1c2VSZWNvaWxWYWx1ZShUcmFkZVN0YXRlLnNlbGVjdGVkUGxheWVyQm9vc3RpbmcpO1xyXG5cclxuXHRjb25zdCBzdGFydFByb21wdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRjb21wb25lbnQ6IDxTdGFydFByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBSRUFEWSBUTyBTVEFSVCBZT1VSIE1JU1NJT04/JyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRyYWRlUHJvbXB0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuR0VUX1BMQVlFUlMpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRzZXRQcm9tcHQoe1xyXG5cdFx0XHRcdGNvbXBvbmVudDogPFRyYWRlUHJvbXB0IGluZGV4PXtpbmRleH0gLz4sXHJcblx0XHRcdFx0bWVzc2FnZTogJ1RSQURFIENPTlRSQUNUJyxcclxuXHRcdFx0XHRvcGVuOiB0cnVlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlY2xpbmVQcm9tcHQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0Y29tcG9uZW50OiA8RGVjbGluZVByb21wdCBpbmRleD17aW5kZXh9IC8+LFxyXG5cdFx0XHRtZXNzYWdlOiAnQVJFIFlPVSBTVVJFIFlPVSBXQU5UIFRPIFRSQVNIIFRISVMgQ09OVFJBQ1Q/JyxcclxuXHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsb3NlUHJvbXB0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UHJvbXB0KHtcclxuXHRcdFx0bWVzc2FnZTogJycsXHJcblx0XHRcdG9wZW46IGZhbHNlLFxyXG5cdFx0XHRjb21wb25lbnQ6IHVuZGVmaW5lZCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vVE9ETzogd3JpdGUgVUkgLT4gQ2xpZW50IC0+IFNlcnZpY2UgY29kZSA6OjogZGVjbGluZUhhbmRsZXIgZmlyc3RcclxuXHRjb25zdCBzdGFydEhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdHJhbnNmZXJEYXRhOiBQdXJjaGFzZUNvbnRyYWN0ID0ge1xyXG5cdFx0XHRjb250cmFjdDogY29udHJhY3RzW2luZGV4XSxcclxuXHRcdFx0c21hbGxfY29pbjogcHJvZmlsZS5zbWFsbF9jb2luLFxyXG5cdFx0fTtcclxuXHJcblx0XHRzZW5kKEJvb3N0aW5nRXZlbnRzLlNUQVJUX0NPTlRSQUNULCB0cmFuc2ZlckRhdGEpLnRoZW4oKGFsbG93ZWQpID0+IHtcclxuXHRcdFx0aWYgKGFsbG93ZWQpIHtcclxuXHRcdFx0XHRjbG9zZVByb21wdCgpO1xyXG5cdFx0XHRcdGFkZEFsZXJ0KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdDb250cmFjdCBzdGFydGVkIScsXHJcblx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vVE9ETyBlcnJvciBjaGVjayBmb3Igd2hhdCBoYXBwZW5zIHdoZW4gYSBwbGF5ZXIgbG9ncyBvdXQ/XHJcblx0Y29uc3QgdHJhZGVIYW5kbGVyID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdHNlbmQoQm9vc3RpbmdFdmVudHMuVFJBREVfQ09OVFJBQ1QsIHtcclxuXHRcdFx0Y29udHJhY3Q6IGNvbnRyYWN0c1tpbmRleF0sXHJcblx0XHRcdHBsYXllcjogc2VsZWN0ZWRQbGF5ZXJCb29zdGluZyxcclxuXHRcdH0pXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzZXRDb250cmFjdHMoKHByZXZTdGF0ZSkgPT5cclxuXHRcdFx0XHRcdHByZXZTdGF0ZS5maWx0ZXIoKGNvbnRyYWN0OiBDb250cmFjdCkgPT4gY29udHJhY3QuaWQgIT09IGNvbnRyYWN0c1tpbmRleF0uaWQpLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2xvc2VQcm9tcHQoKTtcclxuXHRcdFx0XHRhZGRBbGVydCh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiAnQ29udHJhY3QgdHJhZGVkIScsXHJcblx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyOiBhbnkpID0+IGFkZEFsZXJ0KHttZXNzYWdlOiBlcnIsIHR5cGU6ICdlcnJvcid9KSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVjbGluZUhhbmRsZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG5cdFx0c2VuZChCb29zdGluZ0V2ZW50cy5ERUxFVEVfQ09OVFJBQ1QsIGNvbnRyYWN0c1tpbmRleF0pXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzZXRDb250cmFjdHMoKHByZXZTdGF0ZSkgPT5cclxuXHRcdFx0XHRcdHByZXZTdGF0ZS5maWx0ZXIoKGNvbnRyYWN0OiBDb250cmFjdCkgPT4gY29udHJhY3QuaWQgIT09IGNvbnRyYWN0c1tpbmRleF0uaWQpLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0YWRkQWxlcnQoe1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ0NvbnRyYWN0IGRlbGV0ZWQuJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnI6IGFueSkgPT4gYWRkQWxlcnQoe21lc3NhZ2U6IGVyciwgdHlwZTogJ2Vycm9yJ30pKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c3RhcnRQcm9tcHQsXHJcblx0XHRzdGFydEhhbmRsZXIsXHJcblx0XHR0cmFkZVByb21wdCxcclxuXHRcdGNsb3NlUHJvbXB0LFxyXG5cdFx0dHJhZGVIYW5kbGVyLFxyXG5cdFx0ZGVjbGluZVByb21wdCxcclxuXHRcdGRlY2xpbmVIYW5kbGVyLFxyXG5cdH07XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useContracts.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d4cdccc5f8b77239b68")
/******/ })();
/******/ 
/******/ }
);