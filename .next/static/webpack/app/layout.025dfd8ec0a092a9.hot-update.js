"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"128c413eeec9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YWFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjEyOGM0MTNlZWVjOVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes */ \"(app-pages-browser)/./src/components/themes/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [navbarOpen, setNavbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const { setSearchResults, setSearchQuery } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_7__.GlobalContext);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    console.log(session, \"session\");\n    function handleStickyNavbar() {\n        if (window.scrollY >= 80) setSticky(true);\n        else setSticky(false);\n    }\n    function handleNavbarToggle() {\n        setNavbarOpen(!navbarOpen);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleStickyNavbar);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSearchResults([]);\n        setSearchQuery(\"\");\n    }, [\n        pathName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"top-0 left-0 z-40 flex w-full items-center bg-transparent\\n        \".concat(sticky ? \"!fixed inset-x-0 border-gray-200 h-[80px] bg-white/75 dark:bg-white/0 backdrop-blur-lg transition-all dark:shadow-none dark:backdrop-blur-none !z-[9999] bg-gradient-to-b from-white/40 dark:from-black to-transparent\" : \"absolute\", \"\\n        \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mt-[-6px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative -mx-3 flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-60 hover:no-underline max-w-full px-4 xl:mr-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                className: \"text-[23px] dark:text-white hover:no-underline font-extrabold cursor-pointer block w-full\\n                    \".concat(sticky ? \"py-2 lg:py-2\" : \"py-3\", \"\\n                    \"),\n                                children: \"NextBLog\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full items-center justify-between px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleNavbarToggle,\n                                            id: \"navbarToggler\",\n                                            \"aria-label\": \"Mobile Menu\",\n                                            className: \"absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white\\n                        \".concat(navbarOpen ? \"top-[7px] rotate-45\" : \"\", \"\\n                        \")\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 20\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white\\n                        \".concat(navbarOpen ? \"opacity-0\" : \"\", \"\\n                        \")\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white\\n                        \".concat(navbarOpen ? \"top-[-8px] -rotate-45\" : \"\", \"\\n                        \")\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                            id: \"navbarCollapse\",\n                                            className: \"absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 \\n                px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100\\n\\n                \".concat(navbarOpen ? \"visible top-full opacity-100\" : \"invisible top-[120%] opacity-0\", \"\\n                \"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"block lg:flex lg:space-x-12\",\n                                                children: _utils__WEBPACK_IMPORTED_MODULE_4__.menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"group relative\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                            href: item.path,\n                                                            className: \"flex py-2 hover:no-underline text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0\",\n                                                            children: item.label\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, item.id, false, {\n                                                        fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 20\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4 items-center justify-end pr-16 lg:pr-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-3 items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Canals\\\\canals\\\\src\\\\components\\\\header\\\\index.tsx\",\n        lineNumber: 45,\n        columnNumber: 12\n    }, this);\n}\n_s(Header, \"g7l/RmpcYUqX3dOlfjBEG4Dw4CU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ25CO0FBQ1Q7QUFDUTtBQUd3QjtBQUNIO0FBQ2Y7QUFHM0IsU0FBU1U7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBVTtJQUM5QyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQVU7SUFDdEQsTUFBTSxFQUFDYSxNQUFNQyxPQUFPLEVBQUMsR0FBR1YsMkRBQVVBO0lBQ2xDLE1BQU0sRUFBQ1csZ0JBQWdCLEVBQUVDLGNBQWMsRUFBQyxHQUFHbEIsaURBQVVBLENBQUNTLG1EQUFhQTtJQUNuRSxNQUFNVSxTQUFTWCwwREFBU0E7SUFDeEIsTUFBTVksV0FBV2IsNERBQVdBO0lBRTVCYyxRQUFRQyxHQUFHLENBQUNOLFNBQVM7SUFHckIsU0FBU087UUFDTCxJQUFJQyxPQUFPQyxPQUFPLElBQUksSUFBSWIsVUFBVTthQUMvQkEsVUFBVTtJQUNqQjtJQUdGLFNBQVNjO1FBQ1BaLGNBQWMsQ0FBQ0Q7SUFDakI7SUFFRVosZ0RBQVNBLENBQUM7UUFDUnVCLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVKO0lBQ3BDO0lBRUF0QixnREFBU0EsQ0FBQztRQUNSZ0IsaUJBQWlCLEVBQUU7UUFDbkJDLGVBQWU7SUFDakIsR0FBRTtRQUFDRTtLQUFTO0lBR2QscUJBQU8sOERBQUNRO2tCQUNKLDRFQUFDQztZQUFPQyxXQUFXLHNFQUtsQixPQUhDbkIsU0FDSSwyTkFDQSxZQUNMO3NCQUdELDRFQUFDaUI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ1gsNEVBQUMxQixrREFBSUE7Z0NBQ0wyQixNQUFNO2dDQUNORCxXQUFXLGtIQUM0QixPQUFqQ25CLFNBQVMsaUJBQWlCLFFBQU87MENBRXRDOzs7Ozs7Ozs7OztzQ0FFTCw4REFBQ2lCOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ0Y7O3NEQUNDLDhEQUFDSTs0Q0FDQ0MsU0FBU1A7NENBQ1RRLElBQUc7NENBQ0hDLGNBQVc7NENBQ1hMLFdBQVU7OzhEQUVULDhEQUFDTTtvREFDQU4sV0FBVyxvSEFDbUMsT0FBeENqQixhQUFhLHdCQUF3QixJQUFHOzs7Ozs7OERBR2hELDhEQUFDdUI7b0RBQ0NOLFdBQVcsb0hBQ3lCLE9BQTlCakIsYUFBYSxjQUFjLElBQUc7Ozs7Ozs4REFHdEMsOERBQUN1QjtvREFDQ04sV0FBVyxvSEFDcUMsT0FBMUNqQixhQUFhLDBCQUEwQixJQUFHOzs7Ozs7Ozs7Ozs7c0RBSXBELDhEQUFDd0I7NENBQ0NILElBQUc7NENBQ0hKLFdBQVcsaVJBT1osT0FIQ2pCLGFBQ0ksaUNBQ0Esa0NBQ0w7c0RBR0UsNEVBQUN5QjtnREFBR1IsV0FBVTswREFDWnpCLDZDQUFTQSxDQUFDa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDQzt3REFBaUJYLFdBQVU7a0VBQzFCLDRFQUFDMUIsa0RBQUlBOzREQUNIMkIsTUFBTVMsS0FBS0UsSUFBSTs0REFDZlosV0FBWTtzRUFFWFUsS0FBS0csS0FBSzs7Ozs7O3VEQUxOSCxLQUFLTixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBWTVCLDhEQUFDTjtvQ0FBSUUsV0FBVTs4Q0FDVCw0RUFBQ0Y7d0NBQUlFLFdBQVU7a0RBQ2YsNEVBQUMzQiwrQ0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QjtHQTlHd0JPOztRQUdJSix1REFBVUE7UUFFbkJFLHNEQUFTQTtRQUNQRCx3REFBV0E7OztLQU5SRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4PzEyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUaGVtZVRvZ2dsZXIgZnJvbSBcIi4uL3RoZW1lc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiQC91dGlscy90eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcclxuaW1wb3J0IHtzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnN0IHtzZXRTZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hRdWVyeX0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uLCAnc2Vzc2lvbicpXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0aWNreU5hdmJhcigpIHtcclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gODApIHNldFN0aWNreSh0cnVlKTtcclxuICAgICAgICBlbHNlIHNldFN0aWNreShmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTmF2YmFyVG9nZ2xlKCkge1xyXG4gICAgICBzZXROYXZiYXJPcGVuKCFuYXZiYXJPcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU3RpY2t5TmF2YmFyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhbXSlcclxuICAgICAgICBzZXRTZWFyY2hRdWVyeSgnJylcclxuICAgICAgfSxbcGF0aE5hbWVdKVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2B0b3AtMCBsZWZ0LTAgei00MCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgYmctdHJhbnNwYXJlbnRcclxuICAgICAgICAke1xyXG4gICAgICAgICAgc3RpY2t5XHJcbiAgICAgICAgICAgID8gXCIhZml4ZWQgaW5zZXQteC0wIGJvcmRlci1ncmF5LTIwMCBoLVs4MHB4XSBiZy13aGl0ZS83NSBkYXJrOmJnLXdoaXRlLzAgYmFja2Ryb3AtYmx1ci1sZyB0cmFuc2l0aW9uLWFsbCBkYXJrOnNoYWRvdy1ub25lIGRhcms6YmFja2Ryb3AtYmx1ci1ub25lICF6LVs5OTk5XSBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUvNDAgZGFyazpmcm9tLWJsYWNrIHRvLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgOiBcImFic29sdXRlXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYH0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LVstNnB4XVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAtbXgtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYwIGhvdmVyOm5vLXVuZGVybGluZSBtYXgtdy1mdWxsIHB4LTQgeGw6bXItMTJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXsnLyd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LVsyM3B4XSBkYXJrOnRleHQtd2hpdGUgaG92ZXI6bm8tdW5kZXJsaW5lIGZvbnQtZXh0cmFib2xkIGN1cnNvci1wb2ludGVyIGJsb2NrIHctZnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICR7c3RpY2t5ID8gXCJweS0yIGxnOnB5LTJcIiA6IFwicHktM1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA+TmV4dEJMb2c8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5hdmJhclRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJUb2dnbGVyXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vYmlsZSBNZW51XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtMS8yIGJsb2NrIHRyYW5zbGF0ZS15LVstNTAlXSByb3VuZGVkLWxnIHB4LTMgcHktWzZweF0gcmluZy1wcmltYXJ5IGZvY3VzOnJpbmctMiBsZzpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBteS0xLjUgYmxvY2sgaC0wLjUgdy1bMzBweF0gYmctYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRhcms6Ymctd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtuYXZiYXJPcGVuID8gXCJ0b3AtWzdweF0gcm90YXRlLTQ1XCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIG15LTEuNSBibG9jayBoLTAuNSB3LVszMHB4XSBiZy1ibGFjayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGFyazpiZy13aGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke25hdmJhck9wZW4gPyBcIm9wYWNpdHktMFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBteS0xLjUgYmxvY2sgaC0wLjUgdy1bMzBweF0gYmctYmxhY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRhcms6Ymctd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtuYXZiYXJPcGVuID8gXCJ0b3AtWy04cHhdIC1yb3RhdGUtNDVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJDb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHJpZ2h0LTAgei0zMCB3LVsyNTBweF0gcm91bmRlZCBib3JkZXItWy41cHhdIGJnLXdoaXRlIGJvcmRlci1ib2R5LWNvbG9yLzUwIHB5LTQgXHJcbiAgICAgICAgICAgICAgICBweC02IGR1cmF0aW9uLTMwMCBkYXJrOmJvcmRlci1ib2R5LWNvbG9yLzIwIGRhcms6YmctZGFyayBsZzp2aXNpYmxlIGxnOnN0YXRpYyBsZzp3LWF1dG8gbGc6Ym9yZGVyLW5vbmUgbGc6IWJnLXRyYW5zcGFyZW50IGxnOnAtMCBsZzpvcGFjaXR5LTEwMFxyXG5cclxuICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cclxuICAgICAgICAgICAgICAgICAgICA/IFwidmlzaWJsZSB0b3AtZnVsbCBvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImludmlzaWJsZSB0b3AtWzEyMCVdIG9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2NrIGxnOmZsZXggbGc6c3BhY2UteC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtOiBNZW51SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBweS0yIGhvdmVyOm5vLXVuZGVybGluZSB0ZXh0LWJhc2UgdGV4dC1kYXJrIGdyb3VwLWhvdmVyOm9wYWNpdHktNzAgZGFyazp0ZXh0LXdoaXRlIGxnOm1yLTAgbGc6aW5saW5lLWZsZXggbGc6cHktNiBsZzpweC0wYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcHItMTYgbGc6cHItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lVG9nZ2xlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9kaXY+XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVUb2dnbGVyIiwiTGluayIsIm1lbnVJdGVtcyIsInVzZVNlc3Npb24iLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIkdsb2JhbENvbnRleHQiLCJIZWFkZXIiLCJzdGlja3kiLCJzZXRTdGlja3kiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsImRhdGEiLCJzZXNzaW9uIiwic2V0U2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFF1ZXJ5Iiwicm91dGVyIiwicGF0aE5hbWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3RpY2t5TmF2YmFyIiwid2luZG93Iiwic2Nyb2xsWSIsImhhbmRsZU5hdmJhclRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJuYXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsInBhdGgiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header/index.tsx\n"));

/***/ })

});