"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/allContacts/page",{

/***/ "(app-pages-browser)/./src/app/allContacts/page.js":
/*!*************************************!*\
  !*** ./src/app/allContacts/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nlet data;\nconst page = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3000/contact/details\");\n                setData(response.data);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            margin: \"100px\"\n        },\n        children: data.map((key, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"1434px\",\n                    height: \"77px\",\n                    background: \"#2D2273\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        justifyContent: \"space-evenly\",\n                        alignItems: \"center\",\n                        marginTop: \"23px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            children: item.userAddress\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            children: item.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                            children: item.phoneNo\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aryaa\\\\OneDrive\\\\Desktop\\\\contactMng\\\\client\\\\src\\\\app\\\\allContacts\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWxsQ29udGFjdHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ1E7QUFDUjtBQUUxQixJQUFJRztBQUVKLE1BQU1DLE9BQU87O0lBQ1hILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLEdBQUcsQ0FDOUI7Z0JBRUZDLFFBQVFGLFNBQVNILElBQUk7WUFDdkIsRUFBRSxPQUFPTSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFDQ0MsT0FBTztZQUNMQyxTQUFTO1lBQ1RDLGVBQWU7WUFDZkMsWUFBWTtZQUNaQyxRQUFRO1FBQ1Y7a0JBRUNiLEtBQUtjLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ1I7Z0JBRUNDLE9BQU87b0JBQUVRLE9BQU87b0JBQVVDLFFBQVE7b0JBQVFDLFlBQVk7Z0JBQVU7MEJBRWhFLDRFQUFDWDtvQkFDQ0MsT0FBTzt3QkFDTEMsU0FBUzt3QkFDVEMsZUFBZTt3QkFDZlMsZ0JBQWdCO3dCQUNoQlIsWUFBWTt3QkFDWlMsV0FBVztvQkFDYjs7c0NBRUEsOERBQUNDO3NDQUFNQyxLQUFLQyxXQUFXOzs7Ozs7c0NBQ3ZCLDhEQUFDRjtzQ0FBTUMsS0FBS0UsSUFBSTs7Ozs7O3NDQUNoQiw4REFBQ0g7c0NBQU1DLEtBQUtHLEtBQUs7Ozs7OztzQ0FDakIsOERBQUNKO3NDQUFNQyxLQUFLSSxPQUFPOzs7Ozs7Ozs7Ozs7ZUFmaEJYOzs7Ozs7Ozs7O0FBcUJmO0dBaERNZjtBQWtETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FsbENvbnRhY3RzL3BhZ2UuanM/Zjk5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxubGV0IGRhdGE7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250YWN0L2RldGFpbHNcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxMDBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7ZGF0YS5tYXAoKGtleSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTQzNHB4XCIsIGhlaWdodDogXCI3N3B4XCIsIGJhY2tncm91bmQ6IFwiIzJEMjI3M1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjNweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGV4dD57aXRlbS51c2VyQWRkcmVzc308L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0PntpdGVtLm5hbWV9PC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dD57aXRlbS5lbWFpbH08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0PntpdGVtLnBob25lTm99PC90ZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiZGF0YSIsInBhZ2UiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsInNldERhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIm1hcCIsImtleSIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJ0ZXh0IiwiaXRlbSIsInVzZXJBZGRyZXNzIiwibmFtZSIsImVtYWlsIiwicGhvbmVObyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/allContacts/page.js\n"));

/***/ })

});