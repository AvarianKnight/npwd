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

/***/ "./src/os/apps/config/apps.tsx":
/*!*************************************!*\
  !*** ./src/os/apps/config/apps.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APPS\": () => (/* binding */ APPS)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/blue.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/common.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/purple.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/grey.js\");\n/* harmony import */ var _apps_dialer_components_DialerApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apps/dialer/components/DialerApp */ \"./src/apps/dialer/components/DialerApp.tsx\");\n/* harmony import */ var _apps_contacts_components_ContactsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apps/contacts/components/ContactsApp */ \"./src/apps/contacts/components/ContactsApp.tsx\");\n/* harmony import */ var _apps_calculator_components_CalculatorApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apps/calculator/components/CalculatorApp */ \"./src/apps/calculator/components/CalculatorApp.tsx\");\n/* harmony import */ var _apps_settings_components_SettingsApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apps/settings/components/SettingsApp */ \"./src/apps/settings/components/SettingsApp.tsx\");\n/* harmony import */ var _apps_messages_components_MessagesApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apps/messages/components/MessagesApp */ \"./src/apps/messages/components/MessagesApp.tsx\");\n/* harmony import */ var _apps_example_components_ExampleAppWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apps/example/components/ExampleAppWrapper */ \"./src/apps/example/components/ExampleAppWrapper.tsx\");\n/* harmony import */ var _apps_marketplace_components_MarketplaceApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apps/marketplace/components/MarketplaceApp */ \"./src/apps/marketplace/components/MarketplaceApp.tsx\");\n/* harmony import */ var _apps_notes_NotesApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apps/notes/NotesApp */ \"./src/apps/notes/NotesApp.tsx\");\n/* harmony import */ var _apps_camera_components_CameraApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apps/camera/components/CameraApp */ \"./src/apps/camera/components/CameraApp.tsx\");\n/* harmony import */ var _components_AppRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AppRoute */ \"./src/os/apps/components/AppRoute.tsx\");\n/* harmony import */ var _apps_messages_messages_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../apps/messages/messages.theme */ \"./src/apps/messages/messages.theme.ts\");\n/* harmony import */ var _apps_contacts_contacts_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../apps/contacts/contacts.theme */ \"./src/apps/contacts/contacts.theme.ts\");\n/* harmony import */ var _apps_marketplace_marketplace_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../apps/marketplace/marketplace.theme */ \"./src/apps/marketplace/marketplace.theme.ts\");\n/* harmony import */ var _apps_notes_notes_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../apps/notes/notes.theme */ \"./src/apps/notes/notes.theme.ts\");\n/* harmony import */ var _apps_dialer_dialer_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../apps/dialer/dialer.theme */ \"./src/apps/dialer/dialer.theme.ts\");\n/* harmony import */ var _apps_twitter_twitter_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../apps/twitter/twitter.theme */ \"./src/apps/twitter/twitter.theme.ts\");\n/* harmony import */ var _apps_browser_components_BrowserApp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../apps/browser/components/BrowserApp */ \"./src/apps/browser/components/BrowserApp.tsx\");\n/* harmony import */ var _apps_twitter_components_TwitterContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../apps/twitter/components/TwitterContainer */ \"./src/apps/twitter/components/TwitterContainer.tsx\");\n/* harmony import */ var _apps_bank_components_BankApp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../apps/bank/components/BankApp */ \"./src/apps/bank/components/BankApp.tsx\");\n/* harmony import */ var _apps_darkmarket_components_DarkMarketApp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../apps/darkmarket/components/DarkMarketApp */ \"./src/apps/darkmarket/components/DarkMarketApp.tsx\");\n/* harmony import */ var _apps_bennys_components_BennysApp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../apps/bennys/components/BennysApp */ \"./src/apps/bennys/components/BennysApp.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _jsxFileName = \"C:\\\\Projects\\\\FXServer\\\\server-data\\\\resources\\\\npwd\\\\phone\\\\src\\\\os\\\\apps\\\\config\\\\apps.tsx\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst APPS = [{\n  id: 'DIALER',\n  nameLocale: 'APPS_DIALER',\n  backgroundColor: _apps_dialer_dialer_theme__WEBPACK_IMPORTED_MODULE_15__.DIALER_APP_PRIMARY_COLOR,\n  color: _apps_dialer_dialer_theme__WEBPACK_IMPORTED_MODULE_15__.DIALER_APP_TEXT_COLOR,\n  path: '/phone',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"DIALER\",\n    path: \"/phone\",\n    component: _apps_dialer_components_DialerApp__WEBPACK_IMPORTED_MODULE_1__.DialerApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 18\n  }, undefined)\n}, {\n  id: 'BROWSER',\n  nameLocale: 'BROWSER.NAME',\n  backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_23__[\"default\"][300],\n  path: '/browser',\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"BROWSER\",\n    path: \"/browser\",\n    component: _apps_browser_components_BrowserApp__WEBPACK_IMPORTED_MODULE_17__.BrowserApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'MESSAGES',\n  nameLocale: 'APPS_MESSAGES',\n  backgroundColor: _apps_messages_messages_theme__WEBPACK_IMPORTED_MODULE_11__.MESSAGES_APP_PRIMARY_COLOR,\n  color: _apps_messages_messages_theme__WEBPACK_IMPORTED_MODULE_11__.MESSAGES_APP_TEXT_COLOR,\n  path: '/messages',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"MESSAGES\",\n    path: \"/messages\",\n    component: _apps_messages_components_MessagesApp__WEBPACK_IMPORTED_MODULE_5__.MessagesApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'CONTACTS',\n  nameLocale: 'APPS_CONTACTS',\n  backgroundColor: _apps_contacts_contacts_theme__WEBPACK_IMPORTED_MODULE_12__.CONTACTS_APP_PRIMARY_COLOR,\n  color: _apps_contacts_contacts_theme__WEBPACK_IMPORTED_MODULE_12__.CONTACTS_APP_TEXT_COLOR,\n  path: '/contacts',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"CONTACTS\",\n    path: \"/contacts\",\n    component: _apps_contacts_components_ContactsApp__WEBPACK_IMPORTED_MODULE_2__.ContactsApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'CALCULATOR',\n  nameLocale: 'APPS_CALCULATOR',\n  backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_25__[\"default\"][500],\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_26__[\"default\"][50],\n  path: '/calculator',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"CALCULATOR\",\n    path: \"/calculator\",\n    component: _apps_calculator_components_CalculatorApp__WEBPACK_IMPORTED_MODULE_3__.CalculatorApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'SETTINGS',\n  nameLocale: 'APPS_SETTINGS',\n  backgroundColor: '#383838',\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_26__[\"default\"][50],\n  path: '/settings',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"SETTINGS\",\n    path: \"/settings\",\n    component: _apps_settings_components_SettingsApp__WEBPACK_IMPORTED_MODULE_4__.SettingsApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'BANK',\n  nameLocale: 'Banking',\n  backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_23__[\"default\"][900],\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  path: '/bank',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"BANK\",\n    path: \"/bank\",\n    component: _apps_bank_components_BankApp__WEBPACK_IMPORTED_MODULE_19__.BankApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 126,\n    columnNumber: 18\n  }, undefined)\n}, // {\n//   id: 'MATCH',\n//   nameLocale: 'APPS_MATCH',\n//   backgroundColor: MATCH_APP_PRIMARY_COLOR,\n//   color: MATCH_APP_TEXT_COLOR,\n//   path: '/match',\n//   Route: () => <AppRoute id=\"MATCH\" path=\"/match\" component={MatchApp} emitOnOpen={true} />,\n// },\n{\n  id: 'TWITTER',\n  nameLocale: 'APPS_TWITTER',\n  backgroundColor: _apps_twitter_twitter_theme__WEBPACK_IMPORTED_MODULE_16__.TWITTER_APP_PRIMARY_COLOR,\n  color: _apps_twitter_twitter_theme__WEBPACK_IMPORTED_MODULE_16__.TWITTER_APP_TEXT_COLOR,\n  path: '/twitter',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"TWITTER\",\n    path: \"/twitter\",\n    component: _apps_twitter_components_TwitterContainer__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 143,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'MARKETPLACE',\n  nameLocale: 'APPS_MARKETPLACE',\n  backgroundColor: _apps_marketplace_marketplace_theme__WEBPACK_IMPORTED_MODULE_13__.MARKETPLACE_APP_PRIMARY_COLOR,\n  color: _apps_marketplace_marketplace_theme__WEBPACK_IMPORTED_MODULE_13__.MARKETPLACE_APP_ICON_COLOR,\n  path: '/marketplace',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"MARKETPLACE\",\n    path: \"/marketplace\",\n    component: _apps_marketplace_components_MarketplaceApp__WEBPACK_IMPORTED_MODULE_7__.MarketplaceApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 153,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'NOTES',\n  nameLocale: 'APPS_NOTES',\n  backgroundColor: _apps_notes_notes_theme__WEBPACK_IMPORTED_MODULE_14__.NOTES_APP_PRIMARY_COLOR,\n  color: _apps_notes_notes_theme__WEBPACK_IMPORTED_MODULE_14__.NOTES_APP_ICON_COLOR,\n  path: '/notes',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"NOTES\",\n    path: \"/notes\",\n    component: _apps_notes_NotesApp__WEBPACK_IMPORTED_MODULE_8__.NotesApp,\n    emitOnOpen: true\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 167,\n    columnNumber: 18\n  }, undefined)\n}, {\n  id: 'CAMERA',\n  nameLocale: 'APPS_CAMERA',\n  backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_26__[\"default\"].A400,\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  path: '/camera',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"CAMERA\",\n    path: \"/camera\",\n    component: _apps_camera_components_CameraApp__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    emitOnOpen: true\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 175,\n    columnNumber: 18\n  }, undefined)\n}, {\n  id: 'DARKMARKET',\n  nameLocale: 'Life Invader',\n  backgroundColor: '#DD2626',\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  path: '/darkmarket',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"DARKMARKET\",\n    path: \"/darkmarket\",\n    component: _apps_darkmarket_components_DarkMarketApp__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 184,\n    columnNumber: 7\n  }, undefined)\n}, {\n  id: 'BENNYS',\n  nameLocale: 'Bennys Auto',\n  backgroundColor: '#9534eb',\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  path: '/bennys',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"BENNYS\",\n    path: \"/bennys\",\n    component: _apps_bennys_components_BennysApp__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 193,\n    columnNumber: 18\n  }, undefined)\n}, {\n  id: 'PROPERTY',\n  nameLocale: 'Property Management',\n  backgroundColor: '#DD2626',\n  color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_24__[\"default\"].white,\n  path: '/darkmarket',\n  Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n    id: \"PROPERTY\",\n    path: \"/property\",\n    component: PropertyApp,\n    emitOnOpen: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 202,\n    columnNumber: 7\n  }, undefined)\n}]; // Example app only in dev\n\nif (true) {\n  APPS.push({\n    id: 'EXAMPLE',\n    nameLocale: 'APPS_EXAMPLE',\n    backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_23__[\"default\"][500],\n    color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_23__[\"default\"][50],\n    path: '/example',\n    Route: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppRoute__WEBPACK_IMPORTED_MODULE_10__.AppRoute, {\n      id: \"EXAMPLE\",\n      path: \"/example\",\n      component: _apps_example_components_ExampleAppWrapper__WEBPACK_IMPORTED_MODULE_6__.ExampleAppWrapper,\n      emitOnOpen: false\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 7\n    }, undefined)\n  });\n}\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3MvYXBwcy9jb25maWcvYXBwcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQXFCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQSIsInNvdXJjZXMiOlsiQzovUHJvamVjdHMvRlhTZXJ2ZXIvc2VydmVyLWRhdGEvcmVzb3VyY2VzL25wd2QvcGhvbmUvc3JjL29zL2FwcHMvY29uZmlnL2FwcHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJsdWUsIGNvbW1vbiwgZ3JleSwgcHVycGxlIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5pbXBvcnQgeyBEaWFsZXJBcHAgfSBmcm9tICcuLi8uLi8uLi9hcHBzL2RpYWxlci9jb21wb25lbnRzL0RpYWxlckFwcCc7XHJcbmltcG9ydCB7IENvbnRhY3RzQXBwIH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9jb250YWN0cy9jb21wb25lbnRzL0NvbnRhY3RzQXBwJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRvckFwcCB9IGZyb20gJy4uLy4uLy4uL2FwcHMvY2FsY3VsYXRvci9jb21wb25lbnRzL0NhbGN1bGF0b3JBcHAnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc0FwcCB9IGZyb20gJy4uLy4uLy4uL2FwcHMvc2V0dGluZ3MvY29tcG9uZW50cy9TZXR0aW5nc0FwcCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzQXBwIH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9tZXNzYWdlcy9jb21wb25lbnRzL01lc3NhZ2VzQXBwJztcclxuaW1wb3J0IHsgRXhhbXBsZUFwcFdyYXBwZXIgfSBmcm9tICcuLi8uLi8uLi9hcHBzL2V4YW1wbGUvY29tcG9uZW50cy9FeGFtcGxlQXBwV3JhcHBlcic7XHJcbmltcG9ydCB7IE1hcmtldHBsYWNlQXBwIH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9tYXJrZXRwbGFjZS9jb21wb25lbnRzL01hcmtldHBsYWNlQXBwJztcclxuaW1wb3J0IHsgTm90ZXNBcHAgfSBmcm9tICcuLi8uLi8uLi9hcHBzL25vdGVzL05vdGVzQXBwJztcclxuaW1wb3J0IENhbWVyYUFwcCBmcm9tICcuLi8uLi8uLi9hcHBzL2NhbWVyYS9jb21wb25lbnRzL0NhbWVyYUFwcCc7XHJcbmltcG9ydCB7IEFwcFJvdXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHBSb3V0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE1FU1NBR0VTX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gIE1FU1NBR0VTX0FQUF9URVhUX0NPTE9SLFxyXG59IGZyb20gJy4uLy4uLy4uL2FwcHMvbWVzc2FnZXMvbWVzc2FnZXMudGhlbWUnO1xyXG5pbXBvcnQge1xyXG4gIENPTlRBQ1RTX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gIENPTlRBQ1RTX0FQUF9URVhUX0NPTE9SLFxyXG59IGZyb20gJy4uLy4uLy4uL2FwcHMvY29udGFjdHMvY29udGFjdHMudGhlbWUnO1xyXG5pbXBvcnQge1xyXG4gIE1BUktFVFBMQUNFX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gIE1BUktFVFBMQUNFX0FQUF9JQ09OX0NPTE9SLFxyXG59IGZyb20gJy4uLy4uLy4uL2FwcHMvbWFya2V0cGxhY2UvbWFya2V0cGxhY2UudGhlbWUnO1xyXG5pbXBvcnQgeyBOT1RFU19BUFBfSUNPTl9DT0xPUiwgTk9URVNfQVBQX1BSSU1BUllfQ09MT1IgfSBmcm9tICcuLi8uLi8uLi9hcHBzL25vdGVzL25vdGVzLnRoZW1lJztcclxuaW1wb3J0IHsgRElBTEVSX0FQUF9QUklNQVJZX0NPTE9SLCBESUFMRVJfQVBQX1RFWFRfQ09MT1IgfSBmcm9tICcuLi8uLi8uLi9hcHBzL2RpYWxlci9kaWFsZXIudGhlbWUnO1xyXG5pbXBvcnQge1xyXG4gIFRXSVRURVJfQVBQX1BSSU1BUllfQ09MT1IsXHJcbiAgVFdJVFRFUl9BUFBfVEVYVF9DT0xPUixcclxufSBmcm9tICcuLi8uLi8uLi9hcHBzL3R3aXR0ZXIvdHdpdHRlci50aGVtZSc7XHJcbmltcG9ydCB7IE1BVENIX0FQUF9QUklNQVJZX0NPTE9SLCBNQVRDSF9BUFBfVEVYVF9DT0xPUiB9IGZyb20gJy4uLy4uLy4uL2FwcHMvbWF0Y2gvbWF0Y2gudGhlbWUnO1xyXG5pbXBvcnQgeyBTdmdJY29uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSU5vdGlmaWNhdGlvbkljb24gfSBmcm9tICdAb3Mvbm90aWZpY2F0aW9ucy9wcm92aWRlcnMvTm90aWZpY2F0aW9uc1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgQnJvd3NlckFwcCB9IGZyb20gJy4uLy4uLy4uL2FwcHMvYnJvd3Nlci9jb21wb25lbnRzL0Jyb3dzZXJBcHAnO1xyXG5pbXBvcnQgeyBNYXRjaEFwcCB9IGZyb20gJy4uLy4uLy4uL2FwcHMvbWF0Y2gvY29tcG9uZW50cy9NYXRjaEFwcCc7XHJcbmltcG9ydCBUd2l0dGVyQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2FwcHMvdHdpdHRlci9jb21wb25lbnRzL1R3aXR0ZXJDb250YWluZXInO1xyXG5pbXBvcnQgeyBCYW5rQXBwIH0gZnJvbSAnLi4vLi4vLi4vYXBwcy9iYW5rL2NvbXBvbmVudHMvQmFua0FwcCc7XHJcbmltcG9ydCBEYXJrTWFya2V0QXBwIGZyb20gJy4uLy4uLy4uL2FwcHMvZGFya21hcmtldC9jb21wb25lbnRzL0RhcmtNYXJrZXRBcHAnO1xyXG5pbXBvcnQgQmVubnlzQXBwIGZyb20gJy4uLy4uLy4uL2FwcHMvYmVubnlzL2NvbXBvbmVudHMvQmVubnlzQXBwJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lTG9jYWxlOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgZGlzYWJsZT86IGJvb2xlYW47XHJcbiAgUm91dGU6IFJlYWN0LkZDO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJQXBwID0gSUFwcENvbmZpZyAmIHtcclxuICBub3RpZmljYXRpb246IElOb3RpZmljYXRpb25JY29uO1xyXG4gIGljb246IEpTWC5FbGVtZW50O1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgbm90aWZpY2F0aW9uSWNvbjogSlNYLkVsZW1lbnQ7XHJcbiAgTm90aWZpY2F0aW9uSWNvbjogUmVhY3QuRkM8U3ZnSWNvblByb3BzPjtcclxuICBJY29uPzogUmVhY3QuRkM8U3ZnSWNvblByb3BzPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBTOiBJQXBwQ29uZmlnW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdESUFMRVInLFxyXG4gICAgbmFtZUxvY2FsZTogJ0FQUFNfRElBTEVSJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogRElBTEVSX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gICAgY29sb3I6IERJQUxFUl9BUFBfVEVYVF9DT0xPUixcclxuICAgIHBhdGg6ICcvcGhvbmUnLFxyXG4gICAgUm91dGU6ICgpID0+IDxBcHBSb3V0ZSBpZD1cIkRJQUxFUlwiIHBhdGg9XCIvcGhvbmVcIiBjb21wb25lbnQ9e0RpYWxlckFwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdCUk9XU0VSJyxcclxuICAgIG5hbWVMb2NhbGU6ICdCUk9XU0VSLk5BTUUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBibHVlWyczMDAnXSxcclxuICAgIHBhdGg6ICcvYnJvd3NlcicsXHJcbiAgICBjb2xvcjogY29tbW9uLndoaXRlLFxyXG4gICAgUm91dGU6ICgpID0+IChcclxuICAgICAgPEFwcFJvdXRlIGlkPVwiQlJPV1NFUlwiIHBhdGg9XCIvYnJvd3NlclwiIGNvbXBvbmVudD17QnJvd3NlckFwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdNRVNTQUdFUycsXHJcbiAgICBuYW1lTG9jYWxlOiAnQVBQU19NRVNTQUdFUycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IE1FU1NBR0VTX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gICAgY29sb3I6IE1FU1NBR0VTX0FQUF9URVhUX0NPTE9SLFxyXG4gICAgcGF0aDogJy9tZXNzYWdlcycsXHJcbiAgICBSb3V0ZTogKCkgPT4gKFxyXG4gICAgICA8QXBwUm91dGUgaWQ9XCJNRVNTQUdFU1wiIHBhdGg9XCIvbWVzc2FnZXNcIiBjb21wb25lbnQ9e01lc3NhZ2VzQXBwfSBlbWl0T25PcGVuPXtmYWxzZX0gLz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ0NPTlRBQ1RTJyxcclxuICAgIG5hbWVMb2NhbGU6ICdBUFBTX0NPTlRBQ1RTJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogQ09OVEFDVFNfQVBQX1BSSU1BUllfQ09MT1IsXHJcbiAgICBjb2xvcjogQ09OVEFDVFNfQVBQX1RFWFRfQ09MT1IsXHJcbiAgICBwYXRoOiAnL2NvbnRhY3RzJyxcclxuICAgIFJvdXRlOiAoKSA9PiAoXHJcbiAgICAgIDxBcHBSb3V0ZSBpZD1cIkNPTlRBQ1RTXCIgcGF0aD1cIi9jb250YWN0c1wiIGNvbXBvbmVudD17Q29udGFjdHNBcHB9IGVtaXRPbk9wZW49e2ZhbHNlfSAvPlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnQ0FMQ1VMQVRPUicsXHJcbiAgICBuYW1lTG9jYWxlOiAnQVBQU19DQUxDVUxBVE9SJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogcHVycGxlWzUwMF0sXHJcbiAgICBjb2xvcjogZ3JleVs1MF0sXHJcbiAgICBwYXRoOiAnL2NhbGN1bGF0b3InLFxyXG4gICAgUm91dGU6ICgpID0+IChcclxuICAgICAgPEFwcFJvdXRlIGlkPVwiQ0FMQ1VMQVRPUlwiIHBhdGg9XCIvY2FsY3VsYXRvclwiIGNvbXBvbmVudD17Q2FsY3VsYXRvckFwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdTRVRUSU5HUycsXHJcbiAgICBuYW1lTG9jYWxlOiAnQVBQU19TRVRUSU5HUycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzgzODM4JyxcclxuICAgIGNvbG9yOiBncmV5WzUwXSxcclxuICAgIHBhdGg6ICcvc2V0dGluZ3MnLFxyXG4gICAgUm91dGU6ICgpID0+IChcclxuICAgICAgPEFwcFJvdXRlIGlkPVwiU0VUVElOR1NcIiBwYXRoPVwiL3NldHRpbmdzXCIgY29tcG9uZW50PXtTZXR0aW5nc0FwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdCQU5LJyxcclxuICAgIG5hbWVMb2NhbGU6ICdCYW5raW5nJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogYmx1ZVs5MDBdLFxyXG4gICAgY29sb3I6IGNvbW1vbi53aGl0ZSxcclxuICAgIHBhdGg6ICcvYmFuaycsXHJcbiAgICBSb3V0ZTogKCkgPT4gPEFwcFJvdXRlIGlkPVwiQkFOS1wiIHBhdGg9XCIvYmFua1wiIGNvbXBvbmVudD17QmFua0FwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+LFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6ICdNQVRDSCcsXHJcbiAgLy8gICBuYW1lTG9jYWxlOiAnQVBQU19NQVRDSCcsXHJcbiAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6IE1BVENIX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gIC8vICAgY29sb3I6IE1BVENIX0FQUF9URVhUX0NPTE9SLFxyXG4gIC8vICAgcGF0aDogJy9tYXRjaCcsXHJcbiAgLy8gICBSb3V0ZTogKCkgPT4gPEFwcFJvdXRlIGlkPVwiTUFUQ0hcIiBwYXRoPVwiL21hdGNoXCIgY29tcG9uZW50PXtNYXRjaEFwcH0gZW1pdE9uT3Blbj17dHJ1ZX0gLz4sXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBpZDogJ1RXSVRURVInLFxyXG4gICAgbmFtZUxvY2FsZTogJ0FQUFNfVFdJVFRFUicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFRXSVRURVJfQVBQX1BSSU1BUllfQ09MT1IsXHJcbiAgICBjb2xvcjogVFdJVFRFUl9BUFBfVEVYVF9DT0xPUixcclxuICAgIHBhdGg6ICcvdHdpdHRlcicsXHJcbiAgICBSb3V0ZTogKCkgPT4gKFxyXG4gICAgICA8QXBwUm91dGUgaWQ9XCJUV0lUVEVSXCIgcGF0aD1cIi90d2l0dGVyXCIgY29tcG9uZW50PXtUd2l0dGVyQ29udGFpbmVyfSBlbWl0T25PcGVuPXtmYWxzZX0gLz5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ01BUktFVFBMQUNFJyxcclxuICAgIG5hbWVMb2NhbGU6ICdBUFBTX01BUktFVFBMQUNFJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogTUFSS0VUUExBQ0VfQVBQX1BSSU1BUllfQ09MT1IsXHJcbiAgICBjb2xvcjogTUFSS0VUUExBQ0VfQVBQX0lDT05fQ09MT1IsXHJcbiAgICBwYXRoOiAnL21hcmtldHBsYWNlJyxcclxuICAgIFJvdXRlOiAoKSA9PiAoXHJcbiAgICAgIDxBcHBSb3V0ZVxyXG4gICAgICAgIGlkPVwiTUFSS0VUUExBQ0VcIlxyXG4gICAgICAgIHBhdGg9XCIvbWFya2V0cGxhY2VcIlxyXG4gICAgICAgIGNvbXBvbmVudD17TWFya2V0cGxhY2VBcHB9XHJcbiAgICAgICAgZW1pdE9uT3Blbj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdOT1RFUycsXHJcbiAgICBuYW1lTG9jYWxlOiAnQVBQU19OT1RFUycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IE5PVEVTX0FQUF9QUklNQVJZX0NPTE9SLFxyXG4gICAgY29sb3I6IE5PVEVTX0FQUF9JQ09OX0NPTE9SLFxyXG4gICAgcGF0aDogJy9ub3RlcycsXHJcbiAgICBSb3V0ZTogKCkgPT4gPEFwcFJvdXRlIGlkPVwiTk9URVNcIiBwYXRoPVwiL25vdGVzXCIgY29tcG9uZW50PXtOb3Rlc0FwcH0gZW1pdE9uT3Blbj17dHJ1ZX0gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ0NBTUVSQScsXHJcbiAgICBuYW1lTG9jYWxlOiAnQVBQU19DQU1FUkEnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmV5WydBNDAwJ10sXHJcbiAgICBjb2xvcjogY29tbW9uLndoaXRlLFxyXG4gICAgcGF0aDogJy9jYW1lcmEnLFxyXG4gICAgUm91dGU6ICgpID0+IDxBcHBSb3V0ZSBpZD1cIkNBTUVSQVwiIHBhdGg9XCIvY2FtZXJhXCIgY29tcG9uZW50PXtDYW1lcmFBcHB9IGVtaXRPbk9wZW49e3RydWV9IC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdEQVJLTUFSS0VUJyxcclxuICAgIG5hbWVMb2NhbGU6ICdMaWZlIEludmFkZXInLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0REMjYyNicsXHJcbiAgICBjb2xvcjogY29tbW9uLndoaXRlLFxyXG4gICAgcGF0aDogJy9kYXJrbWFya2V0JyxcclxuICAgIFJvdXRlOiAoKSA9PiAoXHJcbiAgICAgIDxBcHBSb3V0ZSBpZD1cIkRBUktNQVJLRVRcIiBwYXRoPVwiL2RhcmttYXJrZXRcIiBjb21wb25lbnQ9e0RhcmtNYXJrZXRBcHB9IGVtaXRPbk9wZW49e2ZhbHNlfSAvPlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnQkVOTllTJyxcclxuICAgIG5hbWVMb2NhbGU6ICdCZW5ueXMgQXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTUzNGViJyxcclxuICAgIGNvbG9yOiBjb21tb24ud2hpdGUsXHJcbiAgICBwYXRoOiAnL2Jlbm55cycsXHJcbiAgICBSb3V0ZTogKCkgPT4gPEFwcFJvdXRlIGlkPVwiQkVOTllTXCIgcGF0aD1cIi9iZW5ueXNcIiBjb21wb25lbnQ9e0Jlbm55c0FwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdQUk9QRVJUWScsXHJcbiAgICBuYW1lTG9jYWxlOiAnUHJvcGVydHkgTWFuYWdlbWVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREQyNjI2JyxcclxuICAgIGNvbG9yOiBjb21tb24ud2hpdGUsXHJcbiAgICBwYXRoOiAnL2RhcmttYXJrZXQnLFxyXG4gICAgUm91dGU6ICgpID0+IChcclxuICAgICAgPEFwcFJvdXRlIGlkPVwiUFJPUEVSVFlcIiBwYXRoPVwiL3Byb3BlcnR5XCIgY29tcG9uZW50PXtQcm9wZXJ0eUFwcH0gZW1pdE9uT3Blbj17ZmFsc2V9IC8+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBFeGFtcGxlIGFwcCBvbmx5IGluIGRldlxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBBUFBTLnB1c2goe1xyXG4gICAgaWQ6ICdFWEFNUExFJyxcclxuICAgIG5hbWVMb2NhbGU6ICdBUFBTX0VYQU1QTEUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBibHVlWzUwMF0sXHJcbiAgICBjb2xvcjogYmx1ZVs1MF0sXHJcbiAgICBwYXRoOiAnL2V4YW1wbGUnLFxyXG4gICAgUm91dGU6ICgpID0+IChcclxuICAgICAgPEFwcFJvdXRlIGlkPVwiRVhBTVBMRVwiIHBhdGg9XCIvZXhhbXBsZVwiIGNvbXBvbmVudD17RXhhbXBsZUFwcFdyYXBwZXJ9IGVtaXRPbk9wZW49e2ZhbHNlfSAvPlxyXG4gICAgKSxcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/os/apps/config/apps.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3037b91799fc7c204eb3")
/******/ })();
/******/ 
/******/ }
);