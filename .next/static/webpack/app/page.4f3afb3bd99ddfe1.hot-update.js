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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* harmony import */ var assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/home-pic.png */ \"(app-client)/./assets/home-pic.png\");\n/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/table/Table */ \"(app-client)/./components/table/Table.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Components\n\n// Homepage image\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let score = 0;\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [currentUser, setCurrentuser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [tableInput, setTableInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {}\n    ]);\n    const handleButtonClick = ()=>router.push(\"/quiz\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setShowButton(true);\n        function localStoreHandle() {\n            const existName = localStorage.getItem(userName);\n            if (existName !== null) {\n                // setting current-user\n                const data = userName;\n                const dataString = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataString);\n            } else {\n                // setting username with score value\n                const dataLocal = {\n                    score: []\n                };\n                const dataString = JSON.stringify(dataLocal);\n                localStorage.setItem(userName, dataString);\n                // setting current-user\n                const data = userName;\n                const dataStr = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataStr);\n            }\n        }\n        localStoreHandle();\n        // Do your work with submitted name\n        console.log(\"User Name Submitted :\", userName);\n    };\n    const getUserData = ()=>{\n        // Get the total number of key-value pairs stored in localStorage\n        const totalItems = localStorage.length;\n        // Initialize an empty object to store all data\n        const allData = {};\n        // Loop through each key and get its associated value\n        for(let i = 0; i < totalItems; i++){\n            const key = localStorage.key(i);\n            const value = localStorage.getItem(\"\".concat(key));\n            allData[key] = JSON.parse(\"\".concat(value)); // Parse the JSON string back to an object\n        }\n        console.log(allData);\n        // Extract current-user value from the input\n        const currentUser = allData[\"current-user\"];\n        // Convert other properties to the desired format and store in the data array\n        const allUserData = Object.keys(allData).filter((key)=>key !== \"current-user\").map((name)=>({\n                name,\n                score: allData[name].score[0]\n            }));\n        // Output the results\n        console.log(currentUser);\n        console.log(allUserData);\n        // Setting the output into state\n        setCurrentuser(currentUser);\n        setTableInput(allUserData);\n    };\n    const tempData = {\n        rows: [\n            {\n                \"name\": \"Raju\",\n                \"score\": 1\n            },\n            {\n                \"name\": \"Shekhar\",\n                \"score\": 2\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white p-4\",\n                    children: \"Do you have what it takes to become the Quiz master?\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"max-w-[700px] w-full rounded-[10px]\",\n                    src: assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"home-page\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#9F50AC] pt-2 pb-2 text-[20px]\",\n                    children: [\n                        \"Submit your name to start quiz..!\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] rounded-[10px] text-black pb-2 pr-2 border-[4px]-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your name...\",\n                                    value: userName,\n                                    onChange: (e)=>setUserName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-[#9F50AC] select-none font-bold h-[30px] min-w-[80px] rounded-[3px] border-[4px]-black text-white hover:bg-sky-700\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#7b9e39] select-none h-[30px] min-w-[80px] rounded-[3px] text-black border-[4px]-black hover:bg-sky-700\",\n                            onClick: ()=>{\n                                getUserData();\n                                setShowTable(true);\n                            },\n                            children: \"Track User\"\n                        }, void 0, false, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                currentUser.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] bg-[#f2bfca] rounded-[10px] text-black pb-2 pr-2 width-[40%]\",\n                    children: [\n                        \"Current User is : \",\n                        currentUser\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 11\n                }, undefined) : null,\n                showButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    text: \"Start Quiz\",\n                    onClick: handleButtonClick\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, undefined) : null,\n                showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    tableData: tempData\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 22\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n            lineNumber: 98,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"HE044ILqZ5tV/hESoPF6dCnrPWc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ1IsU0FBUztZQUNiO1NBQ0g7SUFDRDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQWlCOzs7Ozs7OEJBRzlCLDhEQUFDdEQsbURBQUtBO29CQUNKc0QsV0FBVTtvQkFDVkUsS0FBS3BELDJEQUFhQTtvQkFDbEJxRCxLQUFJOzs7Ozs7OEJBRU4sOERBQUNGO29CQUFFRCxXQUFVOzt3QkFBdUM7d0JBQ2hCOzs7Ozs7OzhCQUVwQyw4REFBQ0M7b0JBQUVELFdBQVU7O3NDQUNYLDhEQUFDSTs0QkFBS0MsVUFBVXRDOzs4Q0FFZCw4REFBQ3VDO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNabkIsT0FBT2xDO29DQUNQc0QsVUFBVSxDQUFDQyxJQUFNdEQsWUFBWXNELEVBQUVDLE1BQU0sQ0FBQ3RCLEtBQUs7Ozs7Ozs4Q0FHN0MsOERBQUN1QjtvQ0FBT1osV0FBVTs4Q0FBd0g7Ozs7Ozs7Ozs7OztzQ0FJNUksOERBQUNZOzRCQUNDWixXQUFVOzRCQUNWYSxTQUFTLElBQU07Z0NBQ2I5QjtnQ0FDQXZCLGFBQWEsSUFBSTs0QkFDbkI7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFJRkMsWUFBWXdCLE1BQU0saUJBQ2pCLDhEQUFDZ0I7b0JBQUVELFdBQVU7O3dCQUEyRTt3QkFDbkV2Qzs7Ozs7O2dDQUVuQixJQUFJO2dCQUNQSiwyQkFDQyw4REFBQ1IsaUVBQU1BO29CQUFDaUUsTUFBSztvQkFBYUQsU0FBU2hEOzs7OztnQ0FDakMsSUFBSTtnQkFDUE4sMEJBQVksOERBQUNSLCtEQUFLQTtvQkFBQ2dFLFdBQVdsQjs7Ozs7Z0NBQWUsSUFBSTs7Ozs7Ozs7QUFJMUQ7R0FySU03Qzs7UUFDV0wsc0RBQVNBOzs7S0FEcEJLO0FBdUlOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuLy8gSG9tZXBhZ2UgaW1hZ2VcbmltcG9ydCBIb21lcGFnZUltYWdlIGZyb20gXCJhc3NldHMvaG9tZS1waWMucG5nXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIkAvY29tcG9uZW50cy90YWJsZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlRGF0YSBmcm9tIFwiQC90eXBlcy90YWJsZVwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHNjb3JlID0gMDtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1RhYmxlLCBzZXRTaG93VGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnR1c2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGFibGVJbnB1dCwgc2V0VGFibGVJbnB1dF0gPSB1c2VTdGF0ZShbe31dKTtcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiByb3V0ZXIucHVzaChcIi9xdWl6XCIpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2hvd0J1dHRvbih0cnVlKTtcbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JlSGFuZGxlKCkge1xuICAgICAgY29uc3QgZXhpc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odXNlck5hbWUpO1xuICAgICAgaWYgKGV4aXN0TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBzZXR0aW5nIGN1cnJlbnQtdXNlclxuICAgICAgICBjb25zdCBkYXRhID0gdXNlck5hbWU7XG4gICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50LXVzZXJcIiwgZGF0YVN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXR0aW5nIHVzZXJuYW1lIHdpdGggc2NvcmUgdmFsdWVcbiAgICAgICAgY29uc3QgZGF0YUxvY2FsID0ge1xuICAgICAgICAgIHNjb3JlOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFMb2NhbCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXJOYW1lLCBkYXRhU3RyaW5nKTtcbiAgICAgICAgLy8gc2V0dGluZyBjdXJyZW50LXVzZXJcbiAgICAgICAgY29uc3QgZGF0YSA9IHVzZXJOYW1lO1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudC11c2VyXCIsIGRhdGFTdHIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JlSGFuZGxlKCk7XG4gICAgLy8gRG8geW91ciB3b3JrIHdpdGggc3VibWl0dGVkIG5hbWVcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgTmFtZSBTdWJtaXR0ZWQgOlwiLCB1c2VyTmFtZSk7XG4gIH07XG4gIGNvbnN0IGdldFVzZXJEYXRhID0gKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGtleS12YWx1ZSBwYWlycyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAvLyBJbml0aWFsaXplIGFuIGVtcHR5IG9iamVjdCB0byBzdG9yZSBhbGwgZGF0YVxuICAgIGNvbnN0IGFsbERhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGtleSBhbmQgZ2V0IGl0cyBhc3NvY2lhdGVkIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbEl0ZW1zOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleTogYW55ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCk7XG4gICAgICBhbGxEYXRhW2tleV0gPSBKU09OLnBhcnNlKGAke3ZhbHVlfWApOyAvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgYmFjayB0byBhbiBvYmplY3RcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxEYXRhKTtcbiAgICAvLyBFeHRyYWN0IGN1cnJlbnQtdXNlciB2YWx1ZSBmcm9tIHRoZSBpbnB1dFxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYWxsRGF0YVtcImN1cnJlbnQtdXNlclwiXTtcblxuICAgIC8vIENvbnZlcnQgb3RoZXIgcHJvcGVydGllcyB0byB0aGUgZGVzaXJlZCBmb3JtYXQgYW5kIHN0b3JlIGluIHRoZSBkYXRhIGFycmF5XG4gICAgY29uc3QgYWxsVXNlckRhdGEgPSBPYmplY3Qua2V5cyhhbGxEYXRhKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IFwiY3VycmVudC11c2VyXCIpXG4gICAgICAubWFwKChuYW1lKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzY29yZTogKGFsbERhdGFbbmFtZV0gYXMgYW55KS5zY29yZVswXSwgLy8gVHlwZSBhc3NlcnRpb24gaGVyZVxuICAgICAgfSkpO1xuXG4gICAgLy8gT3V0cHV0IHRoZSByZXN1bHRzXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKGFsbFVzZXJEYXRhKTtcbiAgICAvLyBTZXR0aW5nIHRoZSBvdXRwdXQgaW50byBzdGF0ZVxuICAgIHNldEN1cnJlbnR1c2VyKGN1cnJlbnRVc2VyKTtcbiAgICBzZXRUYWJsZUlucHV0KGFsbFVzZXJEYXRhKTtcbiAgfTtcblxuICBjb25zdCB0ZW1wRGF0YTogVGFibGVEYXRhID0ge1xuICAgIHJvd3M6IFtcbiAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJSYWp1XCIsXG4gICAgICAgICAgXCJzY29yZVwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlNoZWtoYXJcIixcbiAgICAgICAgICBcInNjb3JlXCI6IDJcbiAgICAgIH1cbiAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+XG4gICAgICAgICAgRG8geW91IGhhdmUgd2hhdCBpdCB0YWtlcyB0byBiZWNvbWUgdGhlIFF1aXogbWFzdGVyP1xuICAgICAgICA8L3A+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVs3MDBweF0gdy1mdWxsIHJvdW5kZWQtWzEwcHhdXCJcbiAgICAgICAgICBzcmM9e0hvbWVwYWdlSW1hZ2V9XG4gICAgICAgICAgYWx0PVwiaG9tZS1wYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzlGNTBBQ10gcHQtMiBwYi0yIHRleHQtWzIwcHhdXCI+XG4gICAgICAgICAgU3VibWl0IHlvdXIgbmFtZSB0byBzdGFydCBxdWl6Li4he1wiIFwifVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIHJvdW5kZWQtWzEwcHhdIHRleHQtYmxhY2sgcGItMiBwci0yIGJvcmRlci1bNHB4XS1ibGFja1wiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlck5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBTdWJtaXQgYnV0dG9uICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzlGNTBBQ10gc2VsZWN0LW5vbmUgZm9udC1ib2xkIGgtWzMwcHhdIG1pbi13LVs4MHB4XSByb3VuZGVkLVszcHhdIGJvcmRlci1bNHB4XS1ibGFjayB0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS03MDBcIj5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM3YjllMzldIHNlbGVjdC1ub25lIGgtWzMwcHhdIG1pbi13LVs4MHB4XSByb3VuZGVkLVszcHhdIHRleHQtYmxhY2sgYm9yZGVyLVs0cHhdLWJsYWNrIGhvdmVyOmJnLXNreS03MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBnZXRVc2VyRGF0YSgpO1xuICAgICAgICAgICAgICBzZXRTaG93VGFibGUodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRyYWNrIFVzZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgICB7Y3VycmVudFVzZXIubGVuZ3RoID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGJnLVsjZjJiZmNhXSByb3VuZGVkLVsxMHB4XSB0ZXh0LWJsYWNrIHBiLTIgcHItMiB3aWR0aC1bNDAlXVwiPlxuICAgICAgICAgICAgQ3VycmVudCBVc2VyIGlzIDoge2N1cnJlbnRVc2VyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93QnV0dG9uID8gKFxuICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN0YXJ0IFF1aXpcIiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30gLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93VGFibGUgPyA8VGFibGUgdGFibGVEYXRhPXt0ZW1wRGF0YX0gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJCdXR0b24iLCJIb21lcGFnZUltYWdlIiwiVGFibGUiLCJIb21lIiwicm91dGVyIiwic2NvcmUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJzaG93VGFibGUiLCJzZXRTaG93VGFibGUiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnR1c2VyIiwidGFibGVJbnB1dCIsInNldFRhYmxlSW5wdXQiLCJoYW5kbGVCdXR0b25DbGljayIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yZUhhbmRsZSIsImV4aXN0TmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwiZGF0YVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiZGF0YUxvY2FsIiwiZGF0YVN0ciIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRGF0YSIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJhbGxEYXRhIiwiaSIsImtleSIsInZhbHVlIiwicGFyc2UiLCJhbGxVc2VyRGF0YSIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJtYXAiLCJuYW1lIiwidGVtcERhdGEiLCJyb3dzIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNyYyIsImFsdCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInRleHQiLCJ0YWJsZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});