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

/***/ "./src/apps/property/hooks/useProperty.ts":
/*!************************************************!*\
  !*** ./src/apps/property/hooks/useProperty.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useProperty\": () => (/* binding */ useProperty)\n/* harmony export */ });\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fivem-nui-react-lib */ \"./node_modules/fivem-nui-react-lib/dist/index.js\");\n/* harmony import */ var fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../os/snackbar/hooks/useSnackbar */ \"./src/os/snackbar/hooks/useSnackbar.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\nconst useProperty = () => {\n  _s();\n\n  const [property, setProperty] = useRecoilState;\n  const {\n    addAlert\n  } = (0,_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__.useSnackbar)();\n  const {\n    send\n  } = (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    send(\"npwd:sendOwnedPropertiesToPhone\");\n  }, []);\n\n  const propertyHandler = ownedProperties => {\n    console.log(\"🚀 ~ file: useProperty.ts ~ line 11 ~ propertyHandler ~ ownedProperties\", ownedProperties); // send('pma-property-manager:sendToPhone');\n    // send(DarkMarketEvents.INIATE_TRADE, trade).then(() => {\n    //     setNotifyDisplay(false);\n    //     setTrade((state) => ({ ...state, playerId: '', amount: '' }));\n    //   });\n  };\n\n  (0,fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiEvent)('PROPERTY', 'npwd:getOwnedProperties', propertyHandler); //   useNuiEvent('DARKMARKET', DarkMarketEvents.SHOW_CRYPTO_UI, crypto.setCrypto);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.SEND_NOTIFICATION, setNotification);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_SUCCESS, alertSuccessHandler);\n  //   useNuiEvent('DARKMARKET', DarkMarketEvents.ALERT_FAILURE, alertFailHandler);\n};\n\n_s(useProperty, \"5scit+IV8Vk9wjfyfIYhlWwFeUc=\", false, function () {\n  return [_os_snackbar_hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_2__.useSnackbar, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiRequest, fivem_nui_react_lib__WEBPACK_IMPORTED_MODULE_0__.useNuiEvent];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQTVCQTtBQUVBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9wcm9wZXJ0eS9ob29rcy91c2VQcm9wZXJ0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPd25lZFByb3BlcnR5IH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi90eXBpbmdzL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgdXNlTnVpRXZlbnQsIHVzZU51aVJlcXVlc3QgfSBmcm9tICdmaXZlbS1udWktcmVhY3QtbGliJztcclxuaW1wb3J0IHsgc2VuZCB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnLi4vLi4vLi4vb3Mvc25hY2tiYXIvaG9va3MvdXNlU25hY2tiYXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb3BlcnR5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Byb3BlcnR5LCBzZXRQcm9wZXJ0eV0gPSB1c2VSZWNvaWxTdGF0ZVxyXG4gICAgY29uc3QgeyBhZGRBbGVydCB9ID0gdXNlU25hY2tiYXIoKTtcclxuICAgIGNvbnN0IHsgc2VuZCB9ID0gdXNlTnVpUmVxdWVzdCgpO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZW5kKFwibnB3ZDpzZW5kT3duZWRQcm9wZXJ0aWVzVG9QaG9uZVwiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBwcm9wZXJ0eUhhbmRsZXIgPSAob3duZWRQcm9wZXJ0aWVzOiBPd25lZFByb3BlcnR5W10pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiB1c2VQcm9wZXJ0eS50cyB+IGxpbmUgMTEgfiBwcm9wZXJ0eUhhbmRsZXIgfiBvd25lZFByb3BlcnRpZXNcIiwgb3duZWRQcm9wZXJ0aWVzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHNlbmQoJ3BtYS1wcm9wZXJ0eS1tYW5hZ2VyOnNlbmRUb1Bob25lJyk7XHJcbiAgICAgICAgLy8gc2VuZChEYXJrTWFya2V0RXZlbnRzLklOSUFURV9UUkFERSwgdHJhZGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBzZXROb3RpZnlEaXNwbGF5KGZhbHNlKTtcclxuICAgICAgICAvLyAgICAgc2V0VHJhZGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgcGxheWVySWQ6ICcnLCBhbW91bnQ6ICcnIH0pKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VOdWlFdmVudCgnUFJPUEVSVFknLCAnbnB3ZDpnZXRPd25lZFByb3BlcnRpZXMnLCBwcm9wZXJ0eUhhbmRsZXIpO1xyXG4gICAgLy8gICB1c2VOdWlFdmVudCgnREFSS01BUktFVCcsIERhcmtNYXJrZXRFdmVudHMuU0hPV19DUllQVE9fVUksIGNyeXB0by5zZXRDcnlwdG8pO1xyXG4gICAgLy8gICB1c2VOdWlFdmVudCgnREFSS01BUktFVCcsIERhcmtNYXJrZXRFdmVudHMuU0VORF9OT1RJRklDQVRJT04sIHNldE5vdGlmaWNhdGlvbik7XHJcblxyXG4gICAgLy8gICB1c2VOdWlFdmVudCgnREFSS01BUktFVCcsIERhcmtNYXJrZXRFdmVudHMuQUxFUlRfU1VDQ0VTUywgYWxlcnRTdWNjZXNzSGFuZGxlcik7XHJcbiAgICAvLyAgIHVzZU51aUV2ZW50KCdEQVJLTUFSS0VUJywgRGFya01hcmtldEV2ZW50cy5BTEVSVF9GQUlMVVJFLCBhbGVydEZhaWxIYW5kbGVyKTtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apps/property/hooks/useProperty.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e91401f10927f785e7e9")
/******/ })();
/******/ 
/******/ }
);