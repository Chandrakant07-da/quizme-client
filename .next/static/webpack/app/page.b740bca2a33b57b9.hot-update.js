"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* harmony import */ var assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/home-pic.png */ \"(app-client)/./assets/home-pic.png\");\n/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/table/Table */ \"(app-client)/./components/table/Table.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Components\n\n// Homepage image\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let score = 0;\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [currentUser, setCurrentuser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [tableInput, setTableInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name\n    });\n    const handleButtonClick = ()=>router.push(\"/quiz\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setShowButton(true);\n        function localStoreHandle() {\n            const existName = localStorage.getItem(userName);\n            if (existName !== null) {\n                // setting current-user\n                const data = userName;\n                const dataString = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataString);\n            } else {\n                // setting username with score value\n                const dataLocal = {\n                    score: []\n                };\n                const dataString = JSON.stringify(dataLocal);\n                localStorage.setItem(userName, dataString);\n                // setting current-user\n                const data = userName;\n                const dataStr = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataStr);\n            }\n        }\n        localStoreHandle();\n        // Do your work with submitted name\n        console.log(\"User Name Submitted :\", userName);\n    };\n    const getUserData = ()=>{\n        // Get the total number of key-value pairs stored in localStorage\n        const totalItems = localStorage.length;\n        // Initialize an empty object to store all data\n        const allData = {};\n        // Loop through each key and get its associated value\n        for(let i = 0; i < totalItems; i++){\n            const key = localStorage.key(i);\n            const value = localStorage.getItem(\"\".concat(key));\n            allData[key] = JSON.parse(\"\".concat(value)); // Parse the JSON string back to an object\n        }\n        console.log(allData);\n        // Extract current-user value from the input\n        const currentUser = allData[\"current-user\"];\n        // Convert other properties to the desired format and store in the data array\n        const allUserData = Object.keys(allData).filter((key)=>key !== \"current-user\").map((name1)=>({\n                name: name1,\n                score: allData[name1].score[0]\n            }));\n        // Output the results\n        console.log(currentUser);\n        console.log(allUserData);\n        // Setting the output into state\n        setCurrentuser(currentUser);\n        setTableInput(allUserData);\n    };\n    const tempData = {\n        rows: tableInput\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white p-4\",\n                    children: \"Do you have what it takes to become the Quiz master?\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"max-w-[700px] w-full rounded-[10px]\",\n                    src: assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"home-page\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#9F50AC] pt-2 pb-2 text-[20px]\",\n                    children: [\n                        \"Submit your name to start quiz..!\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] rounded-[10px] text-black pb-2 pr-2 border-[4px]-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your name...\",\n                                    value: userName,\n                                    onChange: (e)=>setUserName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-[#9F50AC] select-none font-bold h-[30px] min-w-[80px] rounded-[3px] border-[4px]-black text-white hover:bg-sky-700\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#7b9e39] select-none h-[30px] min-w-[80px] rounded-[3px] text-black border-[4px]-black hover:bg-sky-700\",\n                            onClick: ()=>{\n                                getUserData();\n                                setShowTable(true);\n                            },\n                            children: \"Track User\"\n                        }, void 0, false, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                currentUser.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] bg-[#f2bfca] rounded-[10px] text-black pb-2 pr-2 width-[40%]\",\n                    children: [\n                        \"Current User is : \",\n                        currentUser\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, undefined) : null,\n                showButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    text: \"Start Quiz\",\n                    onClick: handleButtonClick\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, undefined) : null,\n                showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    tableData: tempData\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 22\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"H4GcOia4lGthEccQdKO4TP6aa1g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQWlCOzs7Ozs7OEJBRzlCLDhEQUFDdEQsbURBQUtBO29CQUNKc0QsV0FBVTtvQkFDVkUsS0FBS3BELDJEQUFhQTtvQkFDbEJxRCxLQUFJOzs7Ozs7OEJBRU4sOERBQUNGO29CQUFFRCxXQUFVOzt3QkFBdUM7d0JBQ2hCOzs7Ozs7OzhCQUVwQyw4REFBQ0M7b0JBQUVELFdBQVU7O3NDQUNYLDhEQUFDSTs0QkFBS0MsVUFBVXJDOzs4Q0FFZCw4REFBQ3NDO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNabEIsT0FBT25DO29DQUNQc0QsVUFBVSxDQUFDQyxJQUFNdEQsWUFBWXNELEVBQUVDLE1BQU0sQ0FBQ3JCLEtBQUs7Ozs7Ozs4Q0FHN0MsOERBQUNzQjtvQ0FBT1osV0FBVTs4Q0FBd0g7Ozs7Ozs7Ozs7OztzQ0FJNUksOERBQUNZOzRCQUNDWixXQUFVOzRCQUNWYSxTQUFTLElBQU07Z0NBQ2I3QjtnQ0FDQXhCLGFBQWEsSUFBSTs0QkFDbkI7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFJRkMsWUFBWXlCLE1BQU0saUJBQ2pCLDhEQUFDZTtvQkFBRUQsV0FBVTs7d0JBQTJFO3dCQUNuRXZDOzs7Ozs7Z0NBRW5CLElBQUk7Z0JBQ1BKLDJCQUNDLDhEQUFDUixpRUFBTUE7b0JBQUNpRSxNQUFLO29CQUFhRCxTQUFTL0M7Ozs7O2dDQUNqQyxJQUFJO2dCQUNQUCwwQkFBWSw4REFBQ1IsK0RBQUtBO29CQUFDZ0UsV0FBV2xCOzs7OztnQ0FBZSxJQUFJOzs7Ozs7OztBQUkxRDtHQTdITTdDOztRQUNXTCxzREFBU0E7OztLQURwQks7QUErSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIENvbXBvbmVudHNcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCI7XG4vLyBIb21lcGFnZSBpbWFnZVxuaW1wb3J0IEhvbWVwYWdlSW1hZ2UgZnJvbSBcImFzc2V0cy9ob21lLXBpYy5wbmdcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL3RhYmxlL1RhYmxlXCI7XG5pbXBvcnQgVGFibGVEYXRhIGZyb20gXCJAL3R5cGVzL3RhYmxlXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBsZXQgc2NvcmUgPSAwO1xuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd0J1dHRvbiwgc2V0U2hvd0J1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93VGFibGUsIHNldFNob3dUYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudHVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0YWJsZUlucHV0LCBzZXRUYWJsZUlucHV0XSA9IHVzZVN0YXRlKHtuYW1lfSk7XG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKCkgPT4gcm91dGVyLnB1c2goXCIvcXVpelwiKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNob3dCdXR0b24odHJ1ZSk7XG4gICAgZnVuY3Rpb24gbG9jYWxTdG9yZUhhbmRsZSgpIHtcbiAgICAgIGNvbnN0IGV4aXN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVzZXJOYW1lKTtcbiAgICAgIGlmIChleGlzdE5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0dGluZyBjdXJyZW50LXVzZXJcbiAgICAgICAgY29uc3QgZGF0YSA9IHVzZXJOYW1lO1xuICAgICAgICBjb25zdCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudC11c2VyXCIsIGRhdGFTdHJpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2V0dGluZyB1c2VybmFtZSB3aXRoIHNjb3JlIHZhbHVlXG4gICAgICAgIGNvbnN0IGRhdGFMb2NhbCA9IHtcbiAgICAgICAgICBzY29yZTogW10sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhTG9jYWwpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh1c2VyTmFtZSwgZGF0YVN0cmluZyk7XG4gICAgICAgIC8vIHNldHRpbmcgY3VycmVudC11c2VyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2VyTmFtZTtcbiAgICAgICAgY29uc3QgZGF0YVN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnQtdXNlclwiLCBkYXRhU3RyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yZUhhbmRsZSgpO1xuICAgIC8vIERvIHlvdXIgd29yayB3aXRoIHN1Ym1pdHRlZCBuYW1lXG4gICAgY29uc29sZS5sb2coXCJVc2VyIE5hbWUgU3VibWl0dGVkIDpcIiwgdXNlck5hbWUpO1xuICB9O1xuICBjb25zdCBnZXRVc2VyRGF0YSA9ICgpID0+IHtcbiAgICAvLyBHZXQgdGhlIHRvdGFsIG51bWJlciBvZiBrZXktdmFsdWUgcGFpcnMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBhbiBlbXB0eSBvYmplY3QgdG8gc3RvcmUgYWxsIGRhdGFcbiAgICBjb25zdCBhbGxEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBrZXkgYW5kIGdldCBpdHMgYXNzb2NpYXRlZCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxJdGVtczsgaSsrKSB7XG4gICAgICBjb25zdCBrZXk6IGFueSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICBjb25zdCB2YWx1ZTogYW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7a2V5fWApO1xuICAgICAgYWxsRGF0YVtrZXldID0gSlNPTi5wYXJzZShgJHt2YWx1ZX1gKTsgLy8gUGFyc2UgdGhlIEpTT04gc3RyaW5nIGJhY2sgdG8gYW4gb2JqZWN0XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYWxsRGF0YSk7XG4gICAgLy8gRXh0cmFjdCBjdXJyZW50LXVzZXIgdmFsdWUgZnJvbSB0aGUgaW5wdXRcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGFsbERhdGFbXCJjdXJyZW50LXVzZXJcIl07XG5cbiAgICAvLyBDb252ZXJ0IG90aGVyIHByb3BlcnRpZXMgdG8gdGhlIGRlc2lyZWQgZm9ybWF0IGFuZCBzdG9yZSBpbiB0aGUgZGF0YSBhcnJheVxuICAgIGNvbnN0IGFsbFVzZXJEYXRhID0gT2JqZWN0LmtleXMoYWxsRGF0YSlcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSBcImN1cnJlbnQtdXNlclwiKVxuICAgICAgLm1hcCgobmFtZSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc2NvcmU6IChhbGxEYXRhW25hbWVdIGFzIGFueSkuc2NvcmVbMF0sIC8vIFR5cGUgYXNzZXJ0aW9uIGhlcmVcbiAgICAgIH0pKTtcblxuICAgIC8vIE91dHB1dCB0aGUgcmVzdWx0c1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcbiAgICBjb25zb2xlLmxvZyhhbGxVc2VyRGF0YSk7XG4gICAgLy8gU2V0dGluZyB0aGUgb3V0cHV0IGludG8gc3RhdGVcbiAgICBzZXRDdXJyZW50dXNlcihjdXJyZW50VXNlcik7XG4gICAgc2V0VGFibGVJbnB1dChhbGxVc2VyRGF0YSk7XG4gIH07XG4gIFxuXG4gIGNvbnN0IHRlbXBEYXRhOiBUYWJsZURhdGEgPSB7XG4gICAgcm93czogdGFibGVJbnB1dCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgd2hhdCBpdCB0YWtlcyB0byBiZWNvbWUgdGhlIFF1aXogbWFzdGVyP1xuICAgICAgICA8L3A+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVs3MDBweF0gdy1mdWxsIHJvdW5kZWQtWzEwcHhdXCJcbiAgICAgICAgICBzcmM9e0hvbWVwYWdlSW1hZ2V9XG4gICAgICAgICAgYWx0PVwiaG9tZS1wYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzlGNTBBQ10gcHQtMiBwYi0yIHRleHQtWzIwcHhdXCI+XG4gICAgICAgICAgU3VibWl0IHlvdXIgbmFtZSB0byBzdGFydCBxdWl6Li4he1wiIFwifVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIHJvdW5kZWQtWzEwcHhdIHRleHQtYmxhY2sgcGItMiBwci0yIGJvcmRlci1bNHB4XS1ibGFja1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlck5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBTdWJtaXQgYnV0dG9uICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzlGNTBBQ10gc2VsZWN0LW5vbmUgZm9udC1ib2xkIGgtWzMwcHhdIG1pbi13LVs4MHB4XSByb3VuZGVkLVszcHhdIGJvcmRlci1bNHB4XS1ibGFjayB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS03MDBcIj5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM3YjllMzldIHNlbGVjdC1ub25lIGgtWzMwcHhdIG1pbi13LVs4MHB4XSByb3VuZGVkLVszcHhdIHRleHQtYmxhY2sgYm9yZGVyLVs0cHhdLWJsYWNrIGhvdmVyOmJnLXNreS03MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBnZXRVc2VyRGF0YSgpO1xuICAgICAgICAgICAgICBzZXRTaG93VGFibGUodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRyYWNrIFVzZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgICB7Y3VycmVudFVzZXIubGVuZ3RoID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGJnLVsjZjJiZmNhXSByb3VuZGVkLVsxMHB4XSB0ZXh0LWJsYWNrIHBiLTIgcHItMiB3aWR0aC1bNDAlXVwiPlxuICAgICAgICAgICAgQ3VycmVudCBVc2VyIGlzIDoge2N1cnJlbnRVc2VyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93QnV0dG9uID8gKFxuICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN0YXJ0IFF1aXpcIiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30gLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93VGFibGUgPyA8VGFibGUgdGFibGVEYXRhPXt0ZW1wRGF0YX0gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJCdXR0b24iLCJIb21lcGFnZUltYWdlIiwiVGFibGUiLCJIb21lIiwicm91dGVyIiwic2NvcmUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnR1c2VyIiwidGFibGVJbnB1dCIsInNldFRhYmxlSW5wdXQiLCJuYW1lIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmVIYW5kbGUiLCJleGlzdE5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YSIsImRhdGFTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsImRhdGFMb2NhbCIsImRhdGFTdHIiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwiYWxsRGF0YSIsImkiLCJrZXkiLCJ2YWx1ZSIsInBhcnNlIiwiYWxsVXNlckRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwibWFwIiwidGVtcERhdGEiLCJyb3dzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNyYyIsImFsdCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInRleHQiLCJ0YWJsZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});