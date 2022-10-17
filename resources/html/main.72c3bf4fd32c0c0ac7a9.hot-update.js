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

/***/ "./src/Phone.tsx":
/*!***********************!*\
  !*** ./src/Phone.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Phone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Phone.css */ \"./src/Phone.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _os_call_components_CallModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @os/call/components/CallModal */ \"./src/os/call/components/CallModal.tsx\");\n/* harmony import */ var _apps_home_components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/home/components/Home */ \"./src/apps/home/components/Home.tsx\");\n/* harmony import */ var _os_notifications_components_NotificationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @os/notifications/components/NotificationBar */ \"./src/os/notifications/components/NotificationBar.tsx\");\n/* harmony import */ var _os_navigation_bar_components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @os/navigation-bar/components/Navigation */ \"./src/os/navigation-bar/components/Navigation.tsx\");\n/* harmony import */ var _os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @os/simcard/hooks/useSimcardService */ \"./src/os/simcard/hooks/useSimcardService.ts\");\n/* harmony import */ var _os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @os/phone/hooks/usePhoneService */ \"./src/os/phone/hooks/usePhoneService.ts\");\n/* harmony import */ var _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @os/apps/hooks/useApps */ \"./src/os/apps/hooks/useApps.tsx\");\n/* harmony import */ var _apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps/twitter/hooks/useTwitterService */ \"./src/apps/twitter/hooks/useTwitterService.ts\");\n/* harmony import */ var _apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apps/marketplace/hooks/useMarketplaceService */ \"./src/apps/marketplace/hooks/useMarketplaceService.ts\");\n/* harmony import */ var _apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apps/bank/hooks/useBankService */ \"./src/apps/bank/hooks/useBankService.ts\");\n/* harmony import */ var _apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apps/messages/hooks/useMessageService */ \"./src/apps/messages/hooks/useMessageService.ts\");\n/* harmony import */ var _apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apps/settings/hooks/useSettings */ \"./src/apps/settings/hooks/useSettings.ts\");\n/* harmony import */ var _os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @os/call/hooks/useCallService */ \"./src/os/call/hooks/useCallService.tsx\");\n/* harmony import */ var _apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apps/dialer/hooks/useDialService */ \"./src/apps/dialer/hooks/useDialService.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _os_notifications_components_NotificationAlert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @os/notifications/components/NotificationAlert */ \"./src/os/notifications/components/NotificationAlert.tsx\");\n/* harmony import */ var _os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @os/call/hooks/useCallModal */ \"./src/os/call/hooks/useCallModal.ts\");\n/* harmony import */ var _ui_components_WindowSnackbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/components/WindowSnackbar */ \"./src/ui/components/WindowSnackbar.tsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/useTranslation.js\");\n/* harmony import */ var _typings_phone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @typings/phone */ \"../typings/phone.ts\");\n/* harmony import */ var _PhoneWrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PhoneWrapper */ \"./src/PhoneWrapper.tsx\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../config.json */ \"../config.json\");\n/* harmony import */ var _ui_components_TopLevelErrorComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ui/components/TopLevelErrorComponent */ \"./src/ui/components/TopLevelErrorComponent.tsx\");\n/* harmony import */ var _os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @os/phone/hooks/useConfig */ \"./src/os/phone/hooks/useConfig.ts\");\n/* harmony import */ var _apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apps/contacts/hooks/useContactsListener */ \"./src/apps/contacts/hooks/useContactsListener.ts\");\n/* harmony import */ var _apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./apps/notes/hooks/useNoteListener */ \"./src/apps/notes/hooks/useNoteListener.ts\");\n/* harmony import */ var _os_snackbar_components_PhoneSnackbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @os/snackbar/components/PhoneSnackbar */ \"./src/os/snackbar/components/PhoneSnackbar.tsx\");\n/* harmony import */ var _apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./apps/settings/hooks/useInvalidSettingsHandler */ \"./src/apps/settings/hooks/useInvalidSettingsHandler.ts\");\n/* harmony import */ var _os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @os/keyboard/hooks/useKeyboardService */ \"./src/os/keyboard/hooks/useKeyboardService.ts\");\n/* harmony import */ var _apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./apps/darkmarket/hooks/useDarkMarketService */ \"./src/apps/darkmarket/hooks/useDarkMarketService.ts\");\n/* harmony import */ var _apps_property_hooks_useProperty__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./apps/property/hooks/useProperty */ \"./src/apps/property/hooks/useProperty.ts\");\n/* harmony import */ var _ui_components_ImagePopOut__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ui/components/ImagePopOut */ \"./src/ui/components/ImagePopOut.tsx\");\n/* harmony import */ var _Debugger__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Debugger */ \"./src/Debugger.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\Phone.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Phone() {\n  _s();\n\n  const {\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_36__.useTranslation)();\n  const {\n    apps\n  } = (0,_os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__.useApps)();\n  const [settings] = (0,_apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__.useSettings)(); // Set language from local storage\n  // This will only trigger on first mount & settings changes\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    i18n.changeLanguage(settings.language.value).catch(e => console.error(e));\n  }, [i18n, settings.language]);\n  (0,_os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__.useConfig)();\n  (0,_os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__.useKeyboardService)();\n  (0,_os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__.usePhoneService)();\n  (0,_os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__.useSimcardService)();\n  (0,_apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__.useTwitterService)();\n  (0,_apps_property_hooks_useProperty__WEBPACK_IMPORTED_MODULE_32__.useProperty)();\n  (0,_apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__.useDarkMarketService)();\n  (0,_apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__.useMarketplaceService)();\n  (0,_apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__.useBankService)();\n  (0,_apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__.useMessagesService)();\n  (0,_apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__.useContactsListener)();\n  (0,_apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__.useNoteListener)();\n  (0,_os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__.useCallService)();\n  (0,_apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__.useDialService)();\n  (0,_apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__.useInvalidSettingsHandler)();\n  useContractsService(); //\tuseBoosting();\n  // useMatchService();\n\n  const {\n    modal: callModal\n  } = (0,_os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__.useCallModal)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_ui_components_TopLevelErrorComponent__WEBPACK_IMPORTED_MODULE_24__.TopLevelErrorComponent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_Debugger__WEBPACK_IMPORTED_MODULE_34__.Debugger, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_ui_components_WindowSnackbar__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_ui_components_ImagePopOut__WEBPACK_IMPORTED_MODULE_33__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_PhoneWrapper__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_os_notifications_components_NotificationBar__WEBPACK_IMPORTED_MODULE_4__.NotificationBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(\"div\", {\n          className: \"PhoneAppContainer\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_37__.Route, {\n              exact: true,\n              path: \"/\",\n              component: _apps_home_components_Home__WEBPACK_IMPORTED_MODULE_3__.HomeApp\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 29\n            }, this), callModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_37__.Route, {\n              exact: true,\n              path: \"/call\",\n              component: _os_call_components_CallModal__WEBPACK_IMPORTED_MODULE_2__.CallModal\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 43\n            }, this), apps.map(App => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n              children: !App.isDisabled && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(App.Route, {}, App.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 57\n              }, this)\n            }, App.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 33\n            }, this))]\n          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_os_notifications_components_NotificationAlert__WEBPACK_IMPORTED_MODULE_17__.NotificationAlert, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_os_snackbar_components_PhoneSnackbar__WEBPACK_IMPORTED_MODULE_28__.PhoneSnackbar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_35__.jsxDEV)(_os_navigation_bar_components_Navigation__WEBPACK_IMPORTED_MODULE_5__.Navigation, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Phone, \"P2HgD+qvPs236/V63EoA0hIPEBM=\", true, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_36__.useTranslation, _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__.useApps, _apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__.useSettings, _os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__.useConfig, _os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__.useKeyboardService, _os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__.usePhoneService, _os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__.useSimcardService, _apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__.useTwitterService, _apps_property_hooks_useProperty__WEBPACK_IMPORTED_MODULE_32__.useProperty, _apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__.useDarkMarketService, _apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__.useMarketplaceService, _apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__.useBankService, _apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__.useMessagesService, _apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__.useContactsListener, _apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__.useNoteListener, _os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__.useCallService, _apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__.useDialService, _apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__.useInvalidSettingsHandler, _os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__.useCallModal];\n});\n\n_c = Phone;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Phone);\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_16__[\"default\"])([{\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_VISIBILITY,\n  data: true\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_PHONE_READY,\n  data: true\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_TIME,\n  data: dayjs__WEBPACK_IMPORTED_MODULE_22___default()().format('hh:mm')\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_CONFIG,\n  data: _config_json__WEBPACK_IMPORTED_MODULE_23__\n}], 1000);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Phone\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGhvbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBOztBQTNEQTtBQUNBOzs7QUFEQTtBQTZEQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL0ZYU2VydmVyL3NlcnZlci1kYXRhL3Jlc291cmNlcy9ucHdkL3Bob25lL3NyYy9QaG9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vUGhvbmUuY3NzJztcclxuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7Q2FsbE1vZGFsfSBmcm9tICdAb3MvY2FsbC9jb21wb25lbnRzL0NhbGxNb2RhbCc7XHJcbmltcG9ydCB7SG9tZUFwcH0gZnJvbSAnLi9hcHBzL2hvbWUvY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25CYXJ9IGZyb20gJ0Bvcy9ub3RpZmljYXRpb25zL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQmFyJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9ufSBmcm9tICdAb3MvbmF2aWdhdGlvbi1iYXIvY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHt1c2VTaW1jYXJkU2VydmljZX0gZnJvbSAnQG9zL3NpbWNhcmQvaG9va3MvdXNlU2ltY2FyZFNlcnZpY2UnO1xyXG5pbXBvcnQge3VzZVBob25lU2VydmljZX0gZnJvbSAnQG9zL3Bob25lL2hvb2tzL3VzZVBob25lU2VydmljZSc7XHJcbmltcG9ydCB7dXNlQXBwc30gZnJvbSAnQG9zL2FwcHMvaG9va3MvdXNlQXBwcyc7XHJcbmltcG9ydCB7dXNlVHdpdHRlclNlcnZpY2V9IGZyb20gJy4vYXBwcy90d2l0dGVyL2hvb2tzL3VzZVR3aXR0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHt1c2VNYXJrZXRwbGFjZVNlcnZpY2V9IGZyb20gJy4vYXBwcy9tYXJrZXRwbGFjZS9ob29rcy91c2VNYXJrZXRwbGFjZVNlcnZpY2UnO1xyXG5pbXBvcnQge3VzZUJhbmtTZXJ2aWNlfSBmcm9tICcuL2FwcHMvYmFuay9ob29rcy91c2VCYW5rU2VydmljZSc7XHJcbmltcG9ydCB7dXNlTWVzc2FnZXNTZXJ2aWNlfSBmcm9tICcuL2FwcHMvbWVzc2FnZXMvaG9va3MvdXNlTWVzc2FnZVNlcnZpY2UnO1xyXG5pbXBvcnQge3VzZVNldHRpbmdzfSBmcm9tICcuL2FwcHMvc2V0dGluZ3MvaG9va3MvdXNlU2V0dGluZ3MnO1xyXG5pbXBvcnQge3VzZUNhbGxTZXJ2aWNlfSBmcm9tICdAb3MvY2FsbC9ob29rcy91c2VDYWxsU2VydmljZSc7XHJcbmltcG9ydCB7dXNlRGlhbFNlcnZpY2V9IGZyb20gJy4vYXBwcy9kaWFsZXIvaG9va3MvdXNlRGlhbFNlcnZpY2UnO1xyXG5pbXBvcnQgSW5qZWN0RGVidWdEYXRhIGZyb20gJy4vb3MvZGVidWcvSW5qZWN0RGVidWdEYXRhJztcclxuaW1wb3J0IHtOb3RpZmljYXRpb25BbGVydH0gZnJvbSAnQG9zL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25BbGVydCc7XHJcbmltcG9ydCB7dXNlQ2FsbE1vZGFsfSBmcm9tICdAb3MvY2FsbC9ob29rcy91c2VDYWxsTW9kYWwnO1xyXG5pbXBvcnQgV2luZG93U25hY2tiYXIgZnJvbSAnLi91aS9jb21wb25lbnRzL1dpbmRvd1NuYWNrYmFyJztcclxuaW1wb3J0IHt1c2VUcmFuc2xhdGlvbn0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7UGhvbmVFdmVudHN9IGZyb20gJ0B0eXBpbmdzL3Bob25lJztcclxuaW1wb3J0IFBob25lV3JhcHBlciBmcm9tICcuL1Bob25lV3JhcHBlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcclxuaW1wb3J0IHtUb3BMZXZlbEVycm9yQ29tcG9uZW50fSBmcm9tICdAdWkvY29tcG9uZW50cy9Ub3BMZXZlbEVycm9yQ29tcG9uZW50JztcclxuaW1wb3J0IHt1c2VDb25maWd9IGZyb20gJ0Bvcy9waG9uZS9ob29rcy91c2VDb25maWcnO1xyXG5pbXBvcnQge3VzZUNvbnRhY3RzTGlzdGVuZXJ9IGZyb20gJy4vYXBwcy9jb250YWN0cy9ob29rcy91c2VDb250YWN0c0xpc3RlbmVyJztcclxuaW1wb3J0IHt1c2VOb3RlTGlzdGVuZXJ9IGZyb20gJy4vYXBwcy9ub3Rlcy9ob29rcy91c2VOb3RlTGlzdGVuZXInO1xyXG5pbXBvcnQge1Bob25lU25hY2tiYXJ9IGZyb20gJ0Bvcy9zbmFja2Jhci9jb21wb25lbnRzL1Bob25lU25hY2tiYXInO1xyXG5pbXBvcnQge3VzZUludmFsaWRTZXR0aW5nc0hhbmRsZXJ9IGZyb20gJy4vYXBwcy9zZXR0aW5ncy9ob29rcy91c2VJbnZhbGlkU2V0dGluZ3NIYW5kbGVyJztcclxuaW1wb3J0IHt1c2VLZXlib2FyZFNlcnZpY2V9IGZyb20gJ0Bvcy9rZXlib2FyZC9ob29rcy91c2VLZXlib2FyZFNlcnZpY2UnO1xyXG5pbXBvcnQge3VzZURhcmtNYXJrZXRTZXJ2aWNlfSBmcm9tICcuL2FwcHMvZGFya21hcmtldC9ob29rcy91c2VEYXJrTWFya2V0U2VydmljZSc7XHJcbmltcG9ydCB7dXNlUHJvcGVydHl9IGZyb20gJy4vYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eSc7XHJcbmltcG9ydCBJbWFnZVBvcE91dCBmcm9tICcuL3VpL2NvbXBvbmVudHMvSW1hZ2VQb3BPdXQnO1xyXG5pbXBvcnQge0RlYnVnZ2VyfSBmcm9tICcuL0RlYnVnZ2VyJztcclxuXHJcbmZ1bmN0aW9uIFBob25lKCkge1xyXG4gICAgY29uc3Qge2kxOG59ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IHthcHBzfSA9IHVzZUFwcHMoKTtcclxuICAgIGNvbnN0IFtzZXR0aW5nc10gPSB1c2VTZXR0aW5ncygpO1xyXG5cclxuICAgIC8vIFNldCBsYW5ndWFnZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIC8vIFRoaXMgd2lsbCBvbmx5IHRyaWdnZXIgb24gZmlyc3QgbW91bnQgJiBzZXR0aW5ncyBjaGFuZ2VzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2Uoc2V0dGluZ3MubGFuZ3VhZ2UudmFsdWUpLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICAgIH0sIFtpMThuLCBzZXR0aW5ncy5sYW5ndWFnZV0pO1xyXG5cclxuICAgIHVzZUNvbmZpZygpO1xyXG4gICAgdXNlS2V5Ym9hcmRTZXJ2aWNlKCk7XHJcbiAgICB1c2VQaG9uZVNlcnZpY2UoKTtcclxuICAgIHVzZVNpbWNhcmRTZXJ2aWNlKCk7XHJcbiAgICB1c2VUd2l0dGVyU2VydmljZSgpO1xyXG4gICAgdXNlUHJvcGVydHkoKTtcclxuICAgIHVzZURhcmtNYXJrZXRTZXJ2aWNlKCk7XHJcbiAgICB1c2VNYXJrZXRwbGFjZVNlcnZpY2UoKTtcclxuICAgIHVzZUJhbmtTZXJ2aWNlKCk7XHJcbiAgICB1c2VNZXNzYWdlc1NlcnZpY2UoKTtcclxuICAgIHVzZUNvbnRhY3RzTGlzdGVuZXIoKTtcclxuICAgIHVzZU5vdGVMaXN0ZW5lcigpO1xyXG4gICAgdXNlQ2FsbFNlcnZpY2UoKTtcclxuICAgIHVzZURpYWxTZXJ2aWNlKCk7XHJcbiAgICB1c2VJbnZhbGlkU2V0dGluZ3NIYW5kbGVyKCk7XHJcbiAgICB1c2VDb250cmFjdHNTZXJ2aWNlKCk7XHJcbiAgICBcclxuICAgIC8vXHR1c2VCb29zdGluZygpO1xyXG4gICAgLy8gdXNlTWF0Y2hTZXJ2aWNlKCk7XHJcblxyXG4gICAgY29uc3Qge21vZGFsOiBjYWxsTW9kYWx9ID0gdXNlQ2FsbE1vZGFsKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VG9wTGV2ZWxFcnJvckNvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxEZWJ1Z2dlci8+XHJcbiAgICAgICAgICAgICAgICA8V2luZG93U25hY2tiYXIvPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlUG9wT3V0Lz5cclxuICAgICAgICAgICAgICAgIDxQaG9uZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkJhci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQaG9uZUFwcENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lQXBwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsbE1vZGFsICYmIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2NhbGxcIiBjb21wb25lbnQ9e0NhbGxNb2RhbH0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHBzLm1hcCgoQXBwKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17QXBwLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFBcHAuaXNEaXNhYmxlZCAmJiA8QXBwLlJvdXRlIGtleT17QXBwLmlkfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25BbGVydC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaG9uZVNuYWNrYmFyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICAgICAgICA8L1Bob25lV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Ub3BMZXZlbEVycm9yQ29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvbmU7XHJcblxyXG5JbmplY3REZWJ1Z0RhdGE8YW55PihcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFwcDogJ1BIT05FJyxcclxuICAgICAgICAgICAgbWV0aG9kOiBQaG9uZUV2ZW50cy5TRVRfVklTSUJJTElUWSxcclxuICAgICAgICAgICAgZGF0YTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXBwOiAnUEhPTkUnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9QSE9ORV9SRUFEWSxcclxuICAgICAgICAgICAgZGF0YTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXBwOiAnUEhPTkUnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9USU1FLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXlqcygpLmZvcm1hdCgnaGg6bW0nKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXBwOiAnUEhPTkUnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9DT05GSUcsXHJcbiAgICAgICAgICAgIGRhdGE6IERlZmF1bHRDb25maWcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAxMDAwLFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Phone.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0492ec0fb15a406da391")
/******/ })();
/******/ 
/******/ }
);