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

/***/ "./src/apps/boosting/hooks/useBoostingNotification.ts":
/*!************************************************************!*\
  !*** ./src/apps/boosting/hooks/useBoostingNotification.ts ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBoostingNotification\": () => (/* binding */ useBoostingNotification)\n/* harmony export */ });\n/* harmony import */ var _os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/notifications/hooks/useNotifications */ \"./src/os/notifications/hooks/useNotifications.tsx\");\n/* harmony import */ var _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @os/apps/hooks/useApps */ \"./src/os/apps/hooks/useApps.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\nconst NOTIFICATION_ID = 'messages:broadcast';\nconst useBoostingNotification = () => {\n  _s();\n\n  const {\n    addNotificationAlert\n  } = (0,_os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__.useNotifications)();\n  const {\n    icon,\n    notificationIcon\n  } = (0,_os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__.useApp)('BOOSTING');\n\n  const setNotification = _ref => {\n    let {\n      title,\n      boostNotify,\n      message\n    } = _ref;\n    const id = `${NOTIFICATION_ID}:${bankNotifyId}`;\n    const notification = {\n      app: 'BOOSTING',\n      id,\n      sound: true,\n      title: title,\n      content: message,\n      icon,\n      notificationIcon\n    };\n    addNotificationAlert(notification);\n  };\n\n  return {\n    setNotification\n  };\n};\n\n_s(useBoostingNotification, \"TK1xYOhgtL2wst5YqKznKudI3yI=\", false, function () {\n  return [_os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__.useNotifications, _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__.useApp];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZ05vdGlmaWNhdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQXJCQTtBQUNBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9ib29zdGluZy9ob29rcy91c2VCb29zdGluZ05vdGlmaWNhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VOb3RpZmljYXRpb25zIH0gZnJvbSAnQG9zL25vdGlmaWNhdGlvbnMvaG9va3MvdXNlTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tICdAb3MvYXBwcy9ob29rcy91c2VBcHBzJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX0lEID0gJ21lc3NhZ2VzOmJyb2FkY2FzdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VCb29zdGluZ05vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFkZE5vdGlmaWNhdGlvbkFsZXJ0IH0gPSB1c2VOb3RpZmljYXRpb25zKCk7XG4gICAgY29uc3QgeyBpY29uLCBub3RpZmljYXRpb25JY29uIH0gPSB1c2VBcHAoJ0JPT1NUSU5HJyk7XG5cbiAgICBjb25zdCBzZXROb3RpZmljYXRpb24gPSAoeyB0aXRsZSwgYm9vc3ROb3RpZnksIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGAke05PVElGSUNBVElPTl9JRH06JHtiYW5rTm90aWZ5SWR9YDtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICBhcHA6ICdCT09TVElORycsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBub3RpZmljYXRpb25JY29uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZE5vdGlmaWNhdGlvbkFsZXJ0KG5vdGlmaWNhdGlvbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHNldE5vdGlmaWNhdGlvbiB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/boosting/hooks/useBoostingNotification.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b66c842d9d7681ac04d")
/******/ })();
/******/ 
/******/ }
);