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

/***/ "../typings/boosting.ts":
/*!******************************!*\
  !*** ../typings/boosting.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BOOSTING_APP\": () => (/* binding */ BOOSTING_APP),\n/* harmony export */   \"BoostingEvents\": () => (/* binding */ BoostingEvents)\n/* harmony export */ });\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nconst BOOSTING_APP = 'BOOSTING';\nlet BoostingEvents;\n\n(function (BoostingEvents) {\n  BoostingEvents[\"LOAD_BOOSTING_PROFILE\"] = \"npwd:boosting:loadBoostingProfile\";\n  BoostingEvents[\"JOIN_WAITLIST\"] = \"npwd:boosting:joinWaitList\";\n  BoostingEvents[\"LEAVE_WAITLIST\"] = \"npwd:boosting:leaveWaitList\";\n  BoostingEvents[\"FETCH_CONTRACTS\"] = \"npwd:boosting:fetchContracts\";\n  BoostingEvents[\"TRANSFER_CONTRACT\"] = \"npwd:boosting:transferContract\";\n  BoostingEvents[\"REWARD_CONTRACT\"] = \"npwd:boosting:rewardContract\";\n  BoostingEvents[\"START_CONTRACT\"] = \"npwd:boosting:startContract\";\n  BoostingEvents[\"DELETE_CONTRACT\"] = \"npwd:boosting:deleteContract,\";\n  BoostingEvents[\"TRADE_CONTRACT\"] = \"npwd:boosting:tradeContract\";\n  BoostingEvents[\"GET_PLAYERS\"] = \"npwd:boosting:getPlayers\";\n})(BoostingEvents || (BoostingEvents = {}));\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdHlwaW5ncy9ib29zdGluZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC90eXBpbmdzL2Jvb3N0aW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCT09TVElOR19BUFAgPSAnQk9PU1RJTkcnO1xuXG5leHBvcnQgZW51bSBCb29zdGluZ0V2ZW50cyB7XG5cdExPQURfQk9PU1RJTkdfUFJPRklMRSA9ICducHdkOmJvb3N0aW5nOmxvYWRCb29zdGluZ1Byb2ZpbGUnLFxuXHRKT0lOX1dBSVRMSVNUID0gJ25wd2Q6Ym9vc3Rpbmc6am9pbldhaXRMaXN0Jyxcblx0TEVBVkVfV0FJVExJU1QgPSAnbnB3ZDpib29zdGluZzpsZWF2ZVdhaXRMaXN0Jyxcblx0RkVUQ0hfQ09OVFJBQ1RTID0gJ25wd2Q6Ym9vc3Rpbmc6ZmV0Y2hDb250cmFjdHMnLFxuXHRUUkFOU0ZFUl9DT05UUkFDVCA9ICducHdkOmJvb3N0aW5nOnRyYW5zZmVyQ29udHJhY3QnLFxuXHRSRVdBUkRfQ09OVFJBQ1QgPSAnbnB3ZDpib29zdGluZzpyZXdhcmRDb250cmFjdCcsXG5cdFNUQVJUX0NPTlRSQUNUID0gJ25wd2Q6Ym9vc3Rpbmc6c3RhcnRDb250cmFjdCcsXG5cdERFTEVURV9DT05UUkFDVCA9ICducHdkOmJvb3N0aW5nOmRlbGV0ZUNvbnRyYWN0LCcsXG5cdFRSQURFX0NPTlRSQUNUID0gJ25wd2Q6Ym9vc3Rpbmc6dHJhZGVDb250cmFjdCcsXG5cdEdFVF9QTEFZRVJTID0gJ25wd2Q6Ym9vc3Rpbmc6Z2V0UGxheWVycycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9vc3RMaXN0IHtcblx0Y2FyX21vZGVsOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcblx0aWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb29zdFByb2ZpbGUge1xuXHR1aWQ6IG51bWJlcjtcblx0bGV2ZWw6IG51bWJlcjtcblx0ZXhwZXJpZW5jZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyYWN0IHtcblx0aWQ6IG51bWJlcjtcblx0dWlkOiBudW1iZXI7XG5cdGNvbnRyYWN0X3R5cGU6IHN0cmluZztcblx0ZXhwaXJlc19pbjogRGF0ZTtcblx0Y29zdDogbnVtYmVyO1xuXHR2ZWhpY2xlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9vc3RpbmdQcm9maWxlIHtcblx0cHJvZmlsZTogQm9vc3RQcm9maWxlO1xuXHRjb250cmFjdHM6IENvbnRyYWN0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uT3B0aW9uIHtcblx0Y29tcG9uZW50OiBSZWFjdC5SZWFjdE5vZGU7XG5cdHRleHQ6IHN0cmluZztcblx0YWN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXVlZFBsYXllciB7XG5cdHNzbjogbnVtYmVyO1xuXHRmdWxsTmFtZTogc3RyaW5nO1xuXHRsZXZlbDogbnVtYmVyO1xuXHRleHBlcmllbmNlOiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../typings/boosting.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("50360e5b1c9893419826")
/******/ })();
/******/ 
/******/ }
);