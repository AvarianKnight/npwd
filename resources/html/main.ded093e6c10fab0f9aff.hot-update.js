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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Phone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Phone.css */ \"./src/Phone.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _os_call_components_CallModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @os/call/components/CallModal */ \"./src/os/call/components/CallModal.tsx\");\n/* harmony import */ var _apps_home_components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/home/components/Home */ \"./src/apps/home/components/Home.tsx\");\n/* harmony import */ var _os_notifications_components_NotificationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @os/notifications/components/NotificationBar */ \"./src/os/notifications/components/NotificationBar.tsx\");\n/* harmony import */ var _os_navigation_bar_components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @os/navigation-bar/components/Navigation */ \"./src/os/navigation-bar/components/Navigation.tsx\");\n/* harmony import */ var _os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @os/simcard/hooks/useSimcardService */ \"./src/os/simcard/hooks/useSimcardService.ts\");\n/* harmony import */ var _os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @os/phone/hooks/usePhoneService */ \"./src/os/phone/hooks/usePhoneService.ts\");\n/* harmony import */ var _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @os/apps/hooks/useApps */ \"./src/os/apps/hooks/useApps.tsx\");\n/* harmony import */ var _apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apps/twitter/hooks/useTwitterService */ \"./src/apps/twitter/hooks/useTwitterService.ts\");\n/* harmony import */ var _apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apps/marketplace/hooks/useMarketplaceService */ \"./src/apps/marketplace/hooks/useMarketplaceService.ts\");\n/* harmony import */ var _apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apps/bank/hooks/useBankService */ \"./src/apps/bank/hooks/useBankService.ts\");\n/* harmony import */ var _apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apps/messages/hooks/useMessageService */ \"./src/apps/messages/hooks/useMessageService.ts\");\n/* harmony import */ var _apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apps/settings/hooks/useSettings */ \"./src/apps/settings/hooks/useSettings.ts\");\n/* harmony import */ var _os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @os/call/hooks/useCallService */ \"./src/os/call/hooks/useCallService.tsx\");\n/* harmony import */ var _apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apps/dialer/hooks/useDialService */ \"./src/apps/dialer/hooks/useDialService.ts\");\n/* harmony import */ var _os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./os/debug/InjectDebugData */ \"./src/os/debug/InjectDebugData.ts\");\n/* harmony import */ var _os_notifications_components_NotificationAlert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @os/notifications/components/NotificationAlert */ \"./src/os/notifications/components/NotificationAlert.tsx\");\n/* harmony import */ var _os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @os/call/hooks/useCallModal */ \"./src/os/call/hooks/useCallModal.ts\");\n/* harmony import */ var _ui_components_WindowSnackbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/components/WindowSnackbar */ \"./src/ui/components/WindowSnackbar.tsx\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/useTranslation.js\");\n/* harmony import */ var _typings_phone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @typings/phone */ \"../typings/phone.ts\");\n/* harmony import */ var _PhoneWrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PhoneWrapper */ \"./src/PhoneWrapper.tsx\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../config.json */ \"../config.json\");\n/* harmony import */ var _ui_components_TopLevelErrorComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ui/components/TopLevelErrorComponent */ \"./src/ui/components/TopLevelErrorComponent.tsx\");\n/* harmony import */ var _os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @os/phone/hooks/useConfig */ \"./src/os/phone/hooks/useConfig.ts\");\n/* harmony import */ var _apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apps/contacts/hooks/useContactsListener */ \"./src/apps/contacts/hooks/useContactsListener.ts\");\n/* harmony import */ var _apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./apps/notes/hooks/useNoteListener */ \"./src/apps/notes/hooks/useNoteListener.ts\");\n/* harmony import */ var _os_snackbar_components_PhoneSnackbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @os/snackbar/components/PhoneSnackbar */ \"./src/os/snackbar/components/PhoneSnackbar.tsx\");\n/* harmony import */ var _apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./apps/settings/hooks/useInvalidSettingsHandler */ \"./src/apps/settings/hooks/useInvalidSettingsHandler.ts\");\n/* harmony import */ var _os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @os/keyboard/hooks/useKeyboardService */ \"./src/os/keyboard/hooks/useKeyboardService.ts\");\n/* harmony import */ var _apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./apps/darkmarket/hooks/useDarkMarketService */ \"./src/apps/darkmarket/hooks/useDarkMarketService.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\Phone.tsx\",\n    _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Phone() {\n  _s();\n\n  const {\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_33__.useTranslation)();\n  const {\n    apps\n  } = (0,_os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__.useApps)();\n  const [settings] = (0,_apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__.useSettings)(); // Set language from local storage\n  // This will only trigger on first mount & settings changes\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    i18n.changeLanguage(settings.language.value).catch(e => console.error(e));\n  }, [i18n, settings.language]);\n  (0,_os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__.useConfig)();\n  (0,_os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__.useKeyboardService)();\n  (0,_os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__.usePhoneService)();\n  (0,_os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__.useSimcardService)();\n  (0,_apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__.useTwitterService)(); // useMatchService();\n  // useProperty();\n\n  (0,_apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__.useDarkMarketService)();\n  (0,_apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__.useMarketplaceService)();\n  (0,_apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__.useBankService)();\n  (0,_apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__.useMessagesService)();\n  (0,_apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__.useContactsListener)();\n  (0,_apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__.useNoteListener)();\n  (0,_os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__.useCallService)();\n  (0,_apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__.useDialService)();\n  (0,_apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__.useInvalidSettingsHandler)();\n  const {\n    modal: callModal\n  } = (0,_os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__.useCallModal)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_ui_components_TopLevelErrorComponent__WEBPACK_IMPORTED_MODULE_24__.TopLevelErrorComponent, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_ui_components_WindowSnackbar__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_PhoneWrapper__WEBPACK_IMPORTED_MODULE_21__[\"default\"], {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_os_notifications_components_NotificationBar__WEBPACK_IMPORTED_MODULE_4__.NotificationBar, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(\"div\", {\n          className: \"PhoneAppContainer\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.Route, {\n              exact: true,\n              path: \"/\",\n              component: _apps_home_components_Home__WEBPACK_IMPORTED_MODULE_3__.HomeApp\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, this), callModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.Route, {\n              exact: true,\n              path: \"/call\",\n              component: _os_call_components_CallModal__WEBPACK_IMPORTED_MODULE_2__.CallModal\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 29\n            }, this), apps.map(App => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n              children: !App.isDisabled && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(App.Route, {}, App.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 79,\n                columnNumber: 60\n              }, this)\n            }, App.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 17\n            }, this))]\n          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_os_notifications_components_NotificationAlert__WEBPACK_IMPORTED_MODULE_17__.NotificationAlert, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_os_snackbar_components_PhoneSnackbar__WEBPACK_IMPORTED_MODULE_28__.PhoneSnackbar, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxDEV)(_os_navigation_bar_components_Navigation__WEBPACK_IMPORTED_MODULE_5__.Navigation, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Phone, \"9xm2J/NXqvpiI+qL1rnyNrofcBs=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_33__.useTranslation, _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_8__.useApps, _apps_settings_hooks_useSettings__WEBPACK_IMPORTED_MODULE_13__.useSettings, _os_phone_hooks_useConfig__WEBPACK_IMPORTED_MODULE_25__.useConfig, _os_keyboard_hooks_useKeyboardService__WEBPACK_IMPORTED_MODULE_30__.useKeyboardService, _os_phone_hooks_usePhoneService__WEBPACK_IMPORTED_MODULE_7__.usePhoneService, _os_simcard_hooks_useSimcardService__WEBPACK_IMPORTED_MODULE_6__.useSimcardService, _apps_twitter_hooks_useTwitterService__WEBPACK_IMPORTED_MODULE_9__.useTwitterService, _apps_darkmarket_hooks_useDarkMarketService__WEBPACK_IMPORTED_MODULE_31__.useDarkMarketService, _apps_marketplace_hooks_useMarketplaceService__WEBPACK_IMPORTED_MODULE_10__.useMarketplaceService, _apps_bank_hooks_useBankService__WEBPACK_IMPORTED_MODULE_11__.useBankService, _apps_messages_hooks_useMessageService__WEBPACK_IMPORTED_MODULE_12__.useMessagesService, _apps_contacts_hooks_useContactsListener__WEBPACK_IMPORTED_MODULE_26__.useContactsListener, _apps_notes_hooks_useNoteListener__WEBPACK_IMPORTED_MODULE_27__.useNoteListener, _os_call_hooks_useCallService__WEBPACK_IMPORTED_MODULE_14__.useCallService, _apps_dialer_hooks_useDialService__WEBPACK_IMPORTED_MODULE_15__.useDialService, _apps_settings_hooks_useInvalidSettingsHandler__WEBPACK_IMPORTED_MODULE_29__.useInvalidSettingsHandler, _os_call_hooks_useCallModal__WEBPACK_IMPORTED_MODULE_18__.useCallModal];\n});\n\n_c = Phone;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Phone);\n(0,_os_debug_InjectDebugData__WEBPACK_IMPORTED_MODULE_16__[\"default\"])([{\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_VISIBILITY,\n  data: true\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_PHONE_READY,\n  data: true\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_TIME,\n  data: dayjs__WEBPACK_IMPORTED_MODULE_22___default()().format('hh:mm')\n}, {\n  app: 'PHONE',\n  method: _typings_phone__WEBPACK_IMPORTED_MODULE_20__.PhoneEvents.SET_CONFIG,\n  data: _config_json__WEBPACK_IMPORTED_MODULE_23__\n}]);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"Phone\");\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGhvbmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTs7QUFwREE7QUFDQTs7O0FBREE7QUFzREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvUGhvbmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vUGhvbmUuY3NzJztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQ2FsbE1vZGFsIH0gZnJvbSAnQG9zL2NhbGwvY29tcG9uZW50cy9DYWxsTW9kYWwnO1xyXG5pbXBvcnQgeyBIb21lQXBwIH0gZnJvbSAnLi9hcHBzL2hvbWUvY29tcG9uZW50cy9Ib21lJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQmFyIH0gZnJvbSAnQG9zL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25CYXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnQG9zL25hdmlnYXRpb24tYmFyL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVNpbWNhcmRTZXJ2aWNlIH0gZnJvbSAnQG9zL3NpbWNhcmQvaG9va3MvdXNlU2ltY2FyZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VQaG9uZVNlcnZpY2UgfSBmcm9tICdAb3MvcGhvbmUvaG9va3MvdXNlUGhvbmVTZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlQXBwcyB9IGZyb20gJ0Bvcy9hcHBzL2hvb2tzL3VzZUFwcHMnO1xyXG5pbXBvcnQgeyB1c2VUd2l0dGVyU2VydmljZSB9IGZyb20gJy4vYXBwcy90d2l0dGVyL2hvb2tzL3VzZVR3aXR0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlTWFya2V0cGxhY2VTZXJ2aWNlIH0gZnJvbSAnLi9hcHBzL21hcmtldHBsYWNlL2hvb2tzL3VzZU1hcmtldHBsYWNlU2VydmljZSc7XHJcbmltcG9ydCB7IHVzZUJhbmtTZXJ2aWNlIH0gZnJvbSAnLi9hcHBzL2JhbmsvaG9va3MvdXNlQmFua1NlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuL2FwcHMvbWVzc2FnZXMvaG9va3MvdXNlTWVzc2FnZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZXR0aW5ncyB9IGZyb20gJy4vYXBwcy9zZXR0aW5ncy9ob29rcy91c2VTZXR0aW5ncyc7XHJcbmltcG9ydCB7IHVzZUNhbGxTZXJ2aWNlIH0gZnJvbSAnQG9zL2NhbGwvaG9va3MvdXNlQ2FsbFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VEaWFsU2VydmljZSB9IGZyb20gJy4vYXBwcy9kaWFsZXIvaG9va3MvdXNlRGlhbFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VNYXRjaFNlcnZpY2UgfSBmcm9tICcuL2FwcHMvbWF0Y2gvaG9va3MvdXNlTWF0Y2hTZXJ2aWNlJztcclxuaW1wb3J0IEluamVjdERlYnVnRGF0YSBmcm9tICcuL29zL2RlYnVnL0luamVjdERlYnVnRGF0YSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkFsZXJ0IH0gZnJvbSAnQG9zL25vdGlmaWNhdGlvbnMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25BbGVydCc7XHJcbmltcG9ydCB7IHVzZUNhbGxNb2RhbCB9IGZyb20gJ0Bvcy9jYWxsL2hvb2tzL3VzZUNhbGxNb2RhbCc7XHJcbmltcG9ydCBXaW5kb3dTbmFja2JhciBmcm9tICcuL3VpL2NvbXBvbmVudHMvV2luZG93U25hY2tiYXInO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBQaG9uZUV2ZW50cyB9IGZyb20gJ0B0eXBpbmdzL3Bob25lJztcclxuaW1wb3J0IFBob25lV3JhcHBlciBmcm9tICcuL1Bob25lV3JhcHBlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcclxuaW1wb3J0IHsgVG9wTGV2ZWxFcnJvckNvbXBvbmVudCB9IGZyb20gJ0B1aS9jb21wb25lbnRzL1RvcExldmVsRXJyb3JDb21wb25lbnQnO1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICdAb3MvcGhvbmUvaG9va3MvdXNlQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlQ29udGFjdHNMaXN0ZW5lciB9IGZyb20gJy4vYXBwcy9jb250YWN0cy9ob29rcy91c2VDb250YWN0c0xpc3RlbmVyJztcclxuaW1wb3J0IHsgdXNlTm90ZUxpc3RlbmVyIH0gZnJvbSAnLi9hcHBzL25vdGVzL2hvb2tzL3VzZU5vdGVMaXN0ZW5lcic7XHJcbmltcG9ydCB7IFBob25lU25hY2tiYXIgfSBmcm9tICdAb3Mvc25hY2tiYXIvY29tcG9uZW50cy9QaG9uZVNuYWNrYmFyJztcclxuaW1wb3J0IHsgdXNlSW52YWxpZFNldHRpbmdzSGFuZGxlciB9IGZyb20gJy4vYXBwcy9zZXR0aW5ncy9ob29rcy91c2VJbnZhbGlkU2V0dGluZ3NIYW5kbGVyJztcclxuaW1wb3J0IHsgdXNlS2V5Ym9hcmRTZXJ2aWNlIH0gZnJvbSAnQG9zL2tleWJvYXJkL2hvb2tzL3VzZUtleWJvYXJkU2VydmljZSc7XHJcbmltcG9ydCB7IHVzZURhcmtNYXJrZXRTZXJ2aWNlIH0gZnJvbSAnLi9hcHBzL2RhcmttYXJrZXQvaG9va3MvdXNlRGFya01hcmtldFNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VQcm9wZXJ0eSB9IGZyb20gJy4vYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eSc7XHJcblxyXG5mdW5jdGlvbiBQaG9uZSgpIHtcclxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgeyBhcHBzIH0gPSB1c2VBcHBzKCk7XHJcbiAgY29uc3QgW3NldHRpbmdzXSA9IHVzZVNldHRpbmdzKCk7XHJcblxyXG4gIC8vIFNldCBsYW5ndWFnZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAvLyBUaGlzIHdpbGwgb25seSB0cmlnZ2VyIG9uIGZpcnN0IG1vdW50ICYgc2V0dGluZ3MgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpMThuLmNoYW5nZUxhbmd1YWdlKHNldHRpbmdzLmxhbmd1YWdlLnZhbHVlKS5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgfSwgW2kxOG4sIHNldHRpbmdzLmxhbmd1YWdlXSk7XHJcblxyXG4gIHVzZUNvbmZpZygpO1xyXG4gIHVzZUtleWJvYXJkU2VydmljZSgpO1xyXG4gIHVzZVBob25lU2VydmljZSgpO1xyXG4gIHVzZVNpbWNhcmRTZXJ2aWNlKCk7XHJcbiAgdXNlVHdpdHRlclNlcnZpY2UoKTtcclxuICAvLyB1c2VNYXRjaFNlcnZpY2UoKTtcclxuICAvLyB1c2VQcm9wZXJ0eSgpO1xyXG4gIHVzZURhcmtNYXJrZXRTZXJ2aWNlKCk7XHJcbiAgdXNlTWFya2V0cGxhY2VTZXJ2aWNlKCk7XHJcbiAgdXNlQmFua1NlcnZpY2UoKTtcclxuICB1c2VNZXNzYWdlc1NlcnZpY2UoKTtcclxuICB1c2VDb250YWN0c0xpc3RlbmVyKCk7XHJcbiAgdXNlTm90ZUxpc3RlbmVyKCk7XHJcbiAgdXNlQ2FsbFNlcnZpY2UoKTtcclxuICB1c2VEaWFsU2VydmljZSgpO1xyXG4gIHVzZUludmFsaWRTZXR0aW5nc0hhbmRsZXIoKTtcclxuXHJcbiAgY29uc3QgeyBtb2RhbDogY2FsbE1vZGFsIH0gPSB1c2VDYWxsTW9kYWwoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUb3BMZXZlbEVycm9yQ29tcG9uZW50PlxyXG4gICAgICAgIDxXaW5kb3dTbmFja2JhciAvPlxyXG4gICAgICAgIDxQaG9uZVdyYXBwZXI+XHJcbiAgICAgICAgICA8Tm90aWZpY2F0aW9uQmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBob25lQXBwQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lQXBwfSAvPlxyXG4gICAgICAgICAgICAgIHtjYWxsTW9kYWwgJiYgPFJvdXRlIGV4YWN0IHBhdGg9XCIvY2FsbFwiIGNvbXBvbmVudD17Q2FsbE1vZGFsfSAvPn1cclxuICAgICAgICAgICAgICB7YXBwcy5tYXAoKEFwcCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17QXBwLmlkfT57IUFwcC5pc0Rpc2FibGVkICYmIDxBcHAuUm91dGUga2V5PXtBcHAuaWR9IC8+fTwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uQWxlcnQgLz5cclxuICAgICAgICAgICAgPFBob25lU25hY2tiYXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICA8L1Bob25lV3JhcHBlcj5cclxuICAgICAgPC9Ub3BMZXZlbEVycm9yQ29tcG9uZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvbmU7XHJcblxyXG5JbmplY3REZWJ1Z0RhdGE8YW55PihbXHJcbiAge1xyXG4gICAgYXBwOiAnUEhPTkUnLFxyXG4gICAgbWV0aG9kOiBQaG9uZUV2ZW50cy5TRVRfVklTSUJJTElUWSxcclxuICAgIGRhdGE6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhcHA6ICdQSE9ORScsXHJcbiAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9QSE9ORV9SRUFEWSxcclxuICAgIGRhdGE6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhcHA6ICdQSE9ORScsXHJcbiAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9USU1FLFxyXG4gICAgZGF0YTogZGF5anMoKS5mb3JtYXQoJ2hoOm1tJyksXHJcbiAgfSxcclxuICB7XHJcbiAgICBhcHA6ICdQSE9ORScsXHJcbiAgICBtZXRob2Q6IFBob25lRXZlbnRzLlNFVF9DT05GSUcsXHJcbiAgICBkYXRhOiBEZWZhdWx0Q29uZmlnLFxyXG4gIH0sXHJcbl0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Phone.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e7d74182e85e5e239df")
/******/ })();
/******/ 
/******/ }
);