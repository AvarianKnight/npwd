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

/***/ "./src/apps/bank/hooks/useBankNotification.ts":
/*!****************************************************!*\
  !*** ./src/apps/bank/hooks/useBankNotification.ts ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBankNotification\": () => (/* binding */ useBankNotification)\n/* harmony export */ });\n/* harmony import */ var _os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @os/notifications/hooks/useNotifications */ \"./src/os/notifications/hooks/useNotifications.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../os/apps/hooks/useApps */ \"./src/os/apps/hooks/useApps.tsx\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\nconst NOTIFICATION_ID = 'messages:broadcast';\nconst useBankNotification = () => {\n  _s();\n\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();\n  const {\n    removeId,\n    addNotification,\n    addNotificationAlert\n  } = (0,_os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__.useNotifications)();\n  const {\n    icon,\n    notificationIcon\n  } = (0,_os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__.useApp)('BANK'); // return useRecoilValue<Transfer | null>(bankState.notification);\n\n  const setNotification = _ref => {\n    let {\n      title,\n      bankNotifyId,\n      message\n    } = _ref;\n    const id = `${NOTIFICATION_ID}:${bankNotifyId}`;\n    const notification = {\n      app: 'BANK',\n      id,\n      sound: true,\n      title: title,\n      content: message,\n      icon,\n      notificationIcon\n    };\n    addNotificationAlert(notification);\n  };\n\n  return {\n    setNotification\n  };\n}; // import { useTranslation } from 'react-i18next';\n// import { matchPath, useHistory } from 'react-router-dom';\n// import { useApp } from '@os/apps/hooks/useApps';\n// import { useNotifications } from '@os/notifications/hooks/useNotifications';\n// import useMessages from './useMessages';\n// import { useRecoilValue } from 'recoil';\n// import { messageState } from './state';\n// import { MessageConversation } from '@typings/messages';\n// const NOTIFICATION_ID = 'messages:broadcast';\n// export const useMessageNotifications = () => {\n//   const [t] = useTranslation();\n//   const history = useHistory();\n//   const { removeId, addNotification, addNotificationAlert } = useNotifications();\n//   const { icon, notificationIcon } = useApp('MESSAGES');\n//   const { getMessageConversationById, goToConversation } = useMessages();\n//   const activeMessageConversation = useRecoilValue(messageState.activeMessageConversation);\n//   // Remove notifications from groups when opening them\n//   history.listen((location) => {\n//     if (\n//       activeMessageConversation?.id &&\n//       matchPath(location.pathname, {\n//         path: `/messages/conversations/${activeMessageConversation.id}`,\n//         exact: true,\n//       })\n//     ) {\n//       removeId(`${NOTIFICATION_ID}:${activeMessageConversation.id}`);\n//     }\n//   });\n//   const setNotification = ({ conversationName, conversationId, message }) => {\n//     let group = getMessageConversationById(conversationId) as MessageConversation;\n//     if (!group) return;\n//     const id = `${NOTIFICATION_ID}:${conversationId}`;\n//     const notification = {\n//       app: 'MESSAGES',\n//       id,\n//       sound: true,\n//       title: conversationName,\n//       onClick: () => goToConversation(group),\n//       content: message,\n//       icon,\n//       notificationIcon,\n//     };\n//     addNotificationAlert(notification, (n) => {\n//       removeId(id);\n//       if (group.unread && group.unread > 1) {\n//         addNotification({\n//           ...n,\n//           title: group.participant || \"\",\n//           content: t('MESSAGES.MESSAGES.UNREAD_MESSAGES', {\n//             count: group.unread,\n//           }),\n//         });\n//         return;\n//       }\n//       addNotification(n);\n//     });\n//   };\n//   return { setNotification };\n// };\n\n_s(useBankNotification, \"reSKxATYMyLdKowWCgIjrYO30GI=\", false, function () {\n  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory, _os_notifications_hooks_useNotifications__WEBPACK_IMPORTED_MODULE_0__.useNotifications, _os_apps_hooks_useApps__WEBPACK_IMPORTED_MODULE_1__.useApp];\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwcy9iYW5rL2hvb2tzL3VzZUJhbmtOb3RpZmljYXRpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQWpHQTtBQUNBIiwic291cmNlcyI6WyJDOi9Qcm9qZWN0cy9GWFNlcnZlci9zZXJ2ZXItZGF0YS9yZXNvdXJjZXMvbnB3ZC9waG9uZS9zcmMvYXBwcy9iYW5rL2hvb2tzL3VzZUJhbmtOb3RpZmljYXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBUcmFuc2ZlciB9IGZyb20gJ0B0eXBpbmdzL2JhbmsnO1xyXG5cclxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9ucyB9IGZyb20gJ0Bvcy9ub3RpZmljYXRpb25zL2hvb2tzL3VzZU5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBiYW5rU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tICcuLi8uLi8uLi9vcy9hcHBzL2hvb2tzL3VzZUFwcHMnO1xyXG5cclxuXHJcbmNvbnN0IE5PVElGSUNBVElPTl9JRCA9ICdtZXNzYWdlczpicm9hZGNhc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUJhbmtOb3RpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCB7IHJlbW92ZUlkLCBhZGROb3RpZmljYXRpb24sIGFkZE5vdGlmaWNhdGlvbkFsZXJ0IH0gPSB1c2VOb3RpZmljYXRpb25zKCk7XHJcbiAgY29uc3QgeyBpY29uLCBub3RpZmljYXRpb25JY29uIH0gPSB1c2VBcHAoJ0JBTksnKTtcclxuXHJcbiAgLy8gcmV0dXJuIHVzZVJlY29pbFZhbHVlPFRyYW5zZmVyIHwgbnVsbD4oYmFua1N0YXRlLm5vdGlmaWNhdGlvbik7XHJcblxyXG5cclxuICBjb25zdCBzZXROb3RpZmljYXRpb24gPSAoeyB0aXRsZSwgYmFua05vdGlmeUlkLCBtZXNzYWdlIH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gYCR7Tk9USUZJQ0FUSU9OX0lEfToke2JhbmtOb3RpZnlJZH1gO1xyXG5cclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgYXBwOiAnQkFOSycsXHJcbiAgICAgIGlkLFxyXG4gICAgICBzb3VuZDogdHJ1ZSxcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICBpY29uLFxyXG4gICAgICBub3RpZmljYXRpb25JY29uLFxyXG4gICAgfTtcclxuXHJcbiAgICBhZGROb3RpZmljYXRpb25BbGVydChub3RpZmljYXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHNldE5vdGlmaWNhdGlvbiB9O1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuLy8gaW1wb3J0IHsgbWF0Y2hQYXRoLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vIGltcG9ydCB7IHVzZUFwcCB9IGZyb20gJ0Bvcy9hcHBzL2hvb2tzL3VzZUFwcHMnO1xyXG4vLyBpbXBvcnQgeyB1c2VOb3RpZmljYXRpb25zIH0gZnJvbSAnQG9zL25vdGlmaWNhdGlvbnMvaG9va3MvdXNlTm90aWZpY2F0aW9ucyc7XHJcbi8vIGltcG9ydCB1c2VNZXNzYWdlcyBmcm9tICcuL3VzZU1lc3NhZ2VzJztcclxuLy8gaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG4vLyBpbXBvcnQgeyBtZXNzYWdlU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcclxuLy8gaW1wb3J0IHsgTWVzc2FnZUNvbnZlcnNhdGlvbiB9IGZyb20gJ0B0eXBpbmdzL21lc3NhZ2VzJztcclxuXHJcbi8vIGNvbnN0IE5PVElGSUNBVElPTl9JRCA9ICdtZXNzYWdlczpicm9hZGNhc3QnO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHVzZU1lc3NhZ2VOb3RpZmljYXRpb25zID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IFt0XSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbi8vICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuLy8gICBjb25zdCB7IHJlbW92ZUlkLCBhZGROb3RpZmljYXRpb24sIGFkZE5vdGlmaWNhdGlvbkFsZXJ0IH0gPSB1c2VOb3RpZmljYXRpb25zKCk7XHJcbi8vICAgY29uc3QgeyBpY29uLCBub3RpZmljYXRpb25JY29uIH0gPSB1c2VBcHAoJ01FU1NBR0VTJyk7XHJcbi8vICAgY29uc3QgeyBnZXRNZXNzYWdlQ29udmVyc2F0aW9uQnlJZCwgZ29Ub0NvbnZlcnNhdGlvbiB9ID0gdXNlTWVzc2FnZXMoKTtcclxuLy8gICBjb25zdCBhY3RpdmVNZXNzYWdlQ29udmVyc2F0aW9uID0gdXNlUmVjb2lsVmFsdWUobWVzc2FnZVN0YXRlLmFjdGl2ZU1lc3NhZ2VDb252ZXJzYXRpb24pO1xyXG5cclxuLy8gICAvLyBSZW1vdmUgbm90aWZpY2F0aW9ucyBmcm9tIGdyb3VwcyB3aGVuIG9wZW5pbmcgdGhlbVxyXG4vLyAgIGhpc3RvcnkubGlzdGVuKChsb2NhdGlvbikgPT4ge1xyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICBhY3RpdmVNZXNzYWdlQ29udmVyc2F0aW9uPy5pZCAmJlxyXG4vLyAgICAgICBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIHtcclxuLy8gICAgICAgICBwYXRoOiBgL21lc3NhZ2VzL2NvbnZlcnNhdGlvbnMvJHthY3RpdmVNZXNzYWdlQ29udmVyc2F0aW9uLmlkfWAsXHJcbi8vICAgICAgICAgZXhhY3Q6IHRydWUsXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICApIHtcclxuLy8gICAgICAgcmVtb3ZlSWQoYCR7Tk9USUZJQ0FUSU9OX0lEfToke2FjdGl2ZU1lc3NhZ2VDb252ZXJzYXRpb24uaWR9YCk7XHJcbi8vICAgICB9XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIGNvbnN0IHNldE5vdGlmaWNhdGlvbiA9ICh7IGNvbnZlcnNhdGlvbk5hbWUsIGNvbnZlcnNhdGlvbklkLCBtZXNzYWdlIH0pID0+IHtcclxuLy8gICAgIGxldCBncm91cCA9IGdldE1lc3NhZ2VDb252ZXJzYXRpb25CeUlkKGNvbnZlcnNhdGlvbklkKSBhcyBNZXNzYWdlQ29udmVyc2F0aW9uO1xyXG5cclxuLy8gICAgIGlmICghZ3JvdXApIHJldHVybjtcclxuXHJcbi8vICAgICBjb25zdCBpZCA9IGAke05PVElGSUNBVElPTl9JRH06JHtjb252ZXJzYXRpb25JZH1gO1xyXG5cclxuLy8gICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHtcclxuLy8gICAgICAgYXBwOiAnTUVTU0FHRVMnLFxyXG4vLyAgICAgICBpZCxcclxuLy8gICAgICAgc291bmQ6IHRydWUsXHJcbi8vICAgICAgIHRpdGxlOiBjb252ZXJzYXRpb25OYW1lLFxyXG4vLyAgICAgICBvbkNsaWNrOiAoKSA9PiBnb1RvQ29udmVyc2F0aW9uKGdyb3VwKSxcclxuLy8gICAgICAgY29udGVudDogbWVzc2FnZSxcclxuLy8gICAgICAgaWNvbixcclxuLy8gICAgICAgbm90aWZpY2F0aW9uSWNvbixcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgYWRkTm90aWZpY2F0aW9uQWxlcnQobm90aWZpY2F0aW9uLCAobikgPT4ge1xyXG4vLyAgICAgICByZW1vdmVJZChpZCk7XHJcbi8vICAgICAgIGlmIChncm91cC51bnJlYWQgJiYgZ3JvdXAudW5yZWFkID4gMSkge1xyXG4vLyAgICAgICAgIGFkZE5vdGlmaWNhdGlvbih7XHJcbi8vICAgICAgICAgICAuLi5uLFxyXG4vLyAgICAgICAgICAgdGl0bGU6IGdyb3VwLnBhcnRpY2lwYW50IHx8IFwiXCIsXHJcbi8vICAgICAgICAgICBjb250ZW50OiB0KCdNRVNTQUdFUy5NRVNTQUdFUy5VTlJFQURfTUVTU0FHRVMnLCB7XHJcbi8vICAgICAgICAgICAgIGNvdW50OiBncm91cC51bnJlYWQsXHJcbi8vICAgICAgICAgICB9KSxcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYWRkTm90aWZpY2F0aW9uKG4pO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIHsgc2V0Tm90aWZpY2F0aW9uIH07XHJcbi8vIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apps/bank/hooks/useBankNotification.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6be8a660cd9cf23cc98")
/******/ })();
/******/ 
/******/ }
);