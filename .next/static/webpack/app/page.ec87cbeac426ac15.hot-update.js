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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* harmony import */ var assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/home-pic.png */ \"(app-client)/./assets/home-pic.png\");\n/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/table/Table */ \"(app-client)/./components/table/Table.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Components\n\n// Homepage image\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let score = 0;\n    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [currentUser, setCurrentuser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [tableInput, setTableInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\"\n    });\n    const handleButtonClick = ()=>router.push(\"/quiz\");\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setShowButton(true);\n        function localStoreHandle() {\n            const existName = localStorage.getItem(userName);\n            if (existName !== null) {\n                // setting current-user\n                const data = userName;\n                const dataString = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataString);\n            } else {\n                // setting username with score value\n                const dataLocal = {\n                    score: []\n                };\n                const dataString = JSON.stringify(dataLocal);\n                localStorage.setItem(userName, dataString);\n                // setting current-user\n                const data = userName;\n                const dataStr = JSON.stringify(data);\n                localStorage.setItem(\"current-user\", dataStr);\n            }\n        }\n        localStoreHandle();\n        // Do your work with submitted name\n        console.log(\"User Name Submitted :\", userName);\n    };\n    const getUserData = ()=>{\n        // Get the total number of key-value pairs stored in localStorage\n        const totalItems = localStorage.length;\n        // Initialize an empty object to store all data\n        const allData = {};\n        // Loop through each key and get its associated value\n        for(let i = 0; i < totalItems; i++){\n            const key = localStorage.key(i);\n            const value = localStorage.getItem(\"\".concat(key));\n            allData[key] = JSON.parse(\"\".concat(value)); // Parse the JSON string back to an object\n        }\n        console.log(allData);\n        // Extract current-user value from the input\n        const currentUser = allData[\"current-user\"];\n        // Convert other properties to the desired format and store in the data array\n        const allUserData = Object.keys(allData).filter((key)=>key !== \"current-user\").map((name)=>({\n                name,\n                score: allData[name].score[0]\n            }));\n        // Output the results\n        console.log(currentUser);\n        console.log(allUserData);\n        // Setting the output into state\n        setCurrentuser(currentUser);\n        setTableInput(allUserData);\n    };\n    const tempData = {\n        rows: tableInput\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white p-4\",\n                    children: \"Do you have what it takes to become the Quiz master?\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"max-w-[700px] w-full rounded-[10px]\",\n                    src: assets_home_pic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"home-page\"\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#9F50AC] pt-2 pb-2 text-[20px]\",\n                    children: [\n                        \"Submit your name to start quiz..!\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] rounded-[10px] text-black pb-2 pr-2 border-[4px]-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Enter your name...\",\n                                    value: userName,\n                                    onChange: (e)=>setUserName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-[#9F50AC] select-none font-bold h-[30px] min-w-[80px] rounded-[3px] border-[4px]-black text-white hover:bg-sky-700\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#7b9e39] select-none h-[30px] min-w-[80px] rounded-[3px] text-black border-[4px]-black hover:bg-sky-700\",\n                            onClick: ()=>{\n                                getUserData();\n                                setShowTable(true);\n                            },\n                            children: \"Track User\"\n                        }, void 0, false, {\n                            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                currentUser.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[20px] bg-[#f2bfca] rounded-[10px] text-black pb-2 pr-2 width-[40%]\",\n                    children: [\n                        \"Current User is : \",\n                        currentUser\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, undefined) : null,\n                showButton ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    text: \"Start Quiz\",\n                    onClick: handleButtonClick\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, undefined) : null,\n                showTable ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    tableData: tempData\n                }, void 0, false, {\n                    fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 22\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/chandra.kant/Documents/JavaScript-FullStack-Tarining/Quiz-App (Assessment)/quizme-client/app/page.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"UgCO5caxVkMQ2YBlrfDXUK5eLhw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDYTtBQUNYO0FBQ2pDLGFBQWE7QUFDbUM7QUFDaEQsaUJBQWlCO0FBQytCO0FBQ0g7QUFHN0MsTUFBTU0sT0FBTyxJQUFNOztJQUNqQixNQUFNQyxTQUFTTiwwREFBU0E7SUFDeEIsSUFBSU8sUUFBUTtJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNhLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUFDaUIsTUFBSztJQUFHO0lBQ3RELE1BQU1DLG9CQUFvQixJQUFNYixPQUFPYyxJQUFJLENBQUM7SUFDNUMsTUFBTUMsZUFBZSxDQUFDQyxRQUFlO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCWixjQUFjLElBQUk7UUFDbEIsU0FBU2EsbUJBQW1CO1lBQzFCLE1BQU1DLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQ25CO1lBQ3ZDLElBQUlpQixjQUFjLElBQUksRUFBRTtnQkFDdEIsdUJBQXVCO2dCQUN2QixNQUFNRyxPQUFPcEI7Z0JBQ2IsTUFBTXFCLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0g7Z0JBQ2xDRixhQUFhTSxPQUFPLENBQUMsZ0JBQWdCSDtZQUN2QyxPQUFPO2dCQUNMLG9DQUFvQztnQkFDcEMsTUFBTUksWUFBWTtvQkFDaEIxQixPQUFPLEVBQUU7Z0JBQ1g7Z0JBQ0EsTUFBTXNCLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0U7Z0JBQ2xDUCxhQUFhTSxPQUFPLENBQUN4QixVQUFVcUI7Z0JBQy9CLHVCQUF1QjtnQkFDdkIsTUFBTUQsT0FBT3BCO2dCQUNiLE1BQU0wQixVQUFVSixLQUFLQyxTQUFTLENBQUNIO2dCQUMvQkYsYUFBYU0sT0FBTyxDQUFDLGdCQUFnQkU7WUFDdkMsQ0FBQztRQUNIO1FBQ0FWO1FBQ0EsbUNBQW1DO1FBQ25DVyxRQUFRQyxHQUFHLENBQUMseUJBQXlCNUI7SUFDdkM7SUFDQSxNQUFNNkIsY0FBYyxJQUFNO1FBQ3hCLGlFQUFpRTtRQUNqRSxNQUFNQyxhQUFhWixhQUFhYSxNQUFNO1FBRXRDLCtDQUErQztRQUMvQyxNQUFNQyxVQUFxQyxDQUFDO1FBRTVDLHFEQUFxRDtRQUNyRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsWUFBWUcsSUFBSztZQUNuQyxNQUFNQyxNQUFXaEIsYUFBYWdCLEdBQUcsQ0FBQ0Q7WUFDbEMsTUFBTUUsUUFBYWpCLGFBQWFDLE9BQU8sQ0FBQyxHQUFPLE9BQUplO1lBQzNDRixPQUFPLENBQUNFLElBQUksR0FBR1osS0FBS2MsS0FBSyxDQUFDLEdBQVMsT0FBTkQsU0FBVSwwQ0FBMEM7UUFDbkY7UUFFQVIsUUFBUUMsR0FBRyxDQUFDSTtRQUNaLDRDQUE0QztRQUM1QyxNQUFNMUIsY0FBYzBCLE9BQU8sQ0FBQyxlQUFlO1FBRTNDLDZFQUE2RTtRQUM3RSxNQUFNSyxjQUFjQyxPQUFPQyxJQUFJLENBQUNQLFNBQzdCUSxNQUFNLENBQUMsQ0FBQ04sTUFBUUEsUUFBUSxnQkFDeEJPLEdBQUcsQ0FBQyxDQUFDL0IsT0FBVTtnQkFDZEE7Z0JBQ0FYLE9BQU8sT0FBUSxDQUFDVyxLQUFLLENBQVNYLEtBQUssQ0FBQyxFQUFFO1lBQ3hDO1FBRUYscUJBQXFCO1FBQ3JCNEIsUUFBUUMsR0FBRyxDQUFDdEI7UUFDWnFCLFFBQVFDLEdBQUcsQ0FBQ1M7UUFDWixnQ0FBZ0M7UUFDaEM5QixlQUFlRDtRQUNmRyxjQUFjNEI7SUFDaEI7SUFHQSxNQUFNSyxXQUFzQjtRQUMxQkMsTUFBTW5DO0lBQ1I7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ29DO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFHOUIsOERBQUN0RCxtREFBS0E7b0JBQ0pzRCxXQUFVO29CQUNWRSxLQUFLcEQsMkRBQWFBO29CQUNsQnFELEtBQUk7Ozs7Ozs4QkFFTiw4REFBQ0Y7b0JBQUVELFdBQVU7O3dCQUF1Qzt3QkFDaEI7Ozs7Ozs7OEJBRXBDLDhEQUFDQztvQkFBRUQsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFLQyxVQUFVckM7OzhDQUVkLDhEQUFDc0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1psQixPQUFPbkM7b0NBQ1BzRCxVQUFVLENBQUNDLElBQU10RCxZQUFZc0QsRUFBRUMsTUFBTSxDQUFDckIsS0FBSzs7Ozs7OzhDQUc3Qyw4REFBQ3NCO29DQUFPWixXQUFVOzhDQUF3SDs7Ozs7Ozs7Ozs7O3NDQUk1SSw4REFBQ1k7NEJBQ0NaLFdBQVU7NEJBQ1ZhLFNBQVMsSUFBTTtnQ0FDYjdCO2dDQUNBeEIsYUFBYSxJQUFJOzRCQUNuQjtzQ0FDRDs7Ozs7Ozs7Ozs7O2dCQUlGQyxZQUFZeUIsTUFBTSxpQkFDakIsOERBQUNlO29CQUFFRCxXQUFVOzt3QkFBMkU7d0JBQ25FdkM7Ozs7OztnQ0FFbkIsSUFBSTtnQkFDUEosMkJBQ0MsOERBQUNSLGlFQUFNQTtvQkFBQ2lFLE1BQUs7b0JBQWFELFNBQVMvQzs7Ozs7Z0NBQ2pDLElBQUk7Z0JBQ1BQLDBCQUFZLDhEQUFDUiwrREFBS0E7b0JBQUNnRSxXQUFXbEI7Ozs7O2dDQUFlLElBQUk7Ozs7Ozs7O0FBSTFEO0dBN0hNN0M7O1FBQ1dMLHNEQUFTQTs7O0tBRHBCSztBQStITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcbi8vIEhvbWVwYWdlIGltYWdlXG5pbXBvcnQgSG9tZXBhZ2VJbWFnZSBmcm9tIFwiYXNzZXRzL2hvbWUtcGljLnBuZ1wiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvdGFibGUvVGFibGVcIjtcbmltcG9ydCBUYWJsZURhdGEgZnJvbSBcIkAvdHlwZXMvdGFibGVcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBzY29yZSA9IDA7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzaG93QnV0dG9uLCBzZXRTaG93QnV0dG9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dUYWJsZSwgc2V0U2hvd1RhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50dXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RhYmxlSW5wdXQsIHNldFRhYmxlSW5wdXRdID0gdXNlU3RhdGUoe25hbWU6XCJcIix9KTtcbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiByb3V0ZXIucHVzaChcIi9xdWl6XCIpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2hvd0J1dHRvbih0cnVlKTtcbiAgICBmdW5jdGlvbiBsb2NhbFN0b3JlSGFuZGxlKCkge1xuICAgICAgY29uc3QgZXhpc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odXNlck5hbWUpO1xuICAgICAgaWYgKGV4aXN0TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBzZXR0aW5nIGN1cnJlbnQtdXNlclxuICAgICAgICBjb25zdCBkYXRhID0gdXNlck5hbWU7XG4gICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50LXVzZXJcIiwgZGF0YVN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzZXR0aW5nIHVzZXJuYW1lIHdpdGggc2NvcmUgdmFsdWVcbiAgICAgICAgY29uc3QgZGF0YUxvY2FsID0ge1xuICAgICAgICAgIHNjb3JlOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFMb2NhbCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXJOYW1lLCBkYXRhU3RyaW5nKTtcbiAgICAgICAgLy8gc2V0dGluZyBjdXJyZW50LXVzZXJcbiAgICAgICAgY29uc3QgZGF0YSA9IHVzZXJOYW1lO1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudC11c2VyXCIsIGRhdGFTdHIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JlSGFuZGxlKCk7XG4gICAgLy8gRG8geW91ciB3b3JrIHdpdGggc3VibWl0dGVkIG5hbWVcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgTmFtZSBTdWJtaXR0ZWQgOlwiLCB1c2VyTmFtZSk7XG4gIH07XG4gIGNvbnN0IGdldFVzZXJEYXRhID0gKCkgPT4ge1xuICAgIC8vIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGtleS12YWx1ZSBwYWlycyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAvLyBJbml0aWFsaXplIGFuIGVtcHR5IG9iamVjdCB0byBzdG9yZSBhbGwgZGF0YVxuICAgIGNvbnN0IGFsbERhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGtleSBhbmQgZ2V0IGl0cyBhc3NvY2lhdGVkIHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbEl0ZW1zOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleTogYW55ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YCk7XG4gICAgICBhbGxEYXRhW2tleV0gPSBKU09OLnBhcnNlKGAke3ZhbHVlfWApOyAvLyBQYXJzZSB0aGUgSlNPTiBzdHJpbmcgYmFjayB0byBhbiBvYmplY3RcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhhbGxEYXRhKTtcbiAgICAvLyBFeHRyYWN0IGN1cnJlbnQtdXNlciB2YWx1ZSBmcm9tIHRoZSBpbnB1dFxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYWxsRGF0YVtcImN1cnJlbnQtdXNlclwiXTtcblxuICAgIC8vIENvbnZlcnQgb3RoZXIgcHJvcGVydGllcyB0byB0aGUgZGVzaXJlZCBmb3JtYXQgYW5kIHN0b3JlIGluIHRoZSBkYXRhIGFycmF5XG4gICAgY29uc3QgYWxsVXNlckRhdGEgPSBPYmplY3Qua2V5cyhhbGxEYXRhKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IFwiY3VycmVudC11c2VyXCIpXG4gICAgICAubWFwKChuYW1lKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzY29yZTogKGFsbERhdGFbbmFtZV0gYXMgYW55KS5zY29yZVswXSwgLy8gVHlwZSBhc3NlcnRpb24gaGVyZVxuICAgICAgfSkpO1xuXG4gICAgLy8gT3V0cHV0IHRoZSByZXN1bHRzXG4gICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKGFsbFVzZXJEYXRhKTtcbiAgICAvLyBTZXR0aW5nIHRoZSBvdXRwdXQgaW50byBzdGF0ZVxuICAgIHNldEN1cnJlbnR1c2VyKGN1cnJlbnRVc2VyKTtcbiAgICBzZXRUYWJsZUlucHV0KGFsbFVzZXJEYXRhKTtcbiAgfTtcbiAgXG5cbiAgY29uc3QgdGVtcERhdGE6IFRhYmxlRGF0YSA9IHtcbiAgICByb3dzOiB0YWJsZUlucHV0LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTRcIj5cbiAgICAgICAgICBEbyB5b3UgaGF2ZSB3aGF0IGl0IHRha2VzIHRvIGJlY29tZSB0aGUgUXVpeiBtYXN0ZXI/XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzcwMHB4XSB3LWZ1bGwgcm91bmRlZC1bMTBweF1cIlxuICAgICAgICAgIHNyYz17SG9tZXBhZ2VJbWFnZX1cbiAgICAgICAgICBhbHQ9XCJob21lLXBhZ2VcIlxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjOUY1MEFDXSBwdC0yIHBiLTIgdGV4dC1bMjBweF1cIj5cbiAgICAgICAgICBTdWJtaXQgeW91ciBuYW1lIHRvIHN0YXJ0IHF1aXouLiF7XCIgXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gcm91bmRlZC1bMTBweF0gdGV4dC1ibGFjayBwYi0yIHByLTIgYm9yZGVyLVs0cHhdLWJsYWNrXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICB7LyogSW5wdXQgZmllbGQgKi99XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZS4uLlwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIFN1Ym1pdCBidXR0b24gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjOUY1MEFDXSBzZWxlY3Qtbm9uZSBmb250LWJvbGQgaC1bMzBweF0gbWluLXctWzgwcHhdIHJvdW5kZWQtWzNweF0gYm9yZGVyLVs0cHhdLWJsYWNrIHRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTcwMFwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzdiOWUzOV0gc2VsZWN0LW5vbmUgaC1bMzBweF0gbWluLXctWzgwcHhdIHJvdW5kZWQtWzNweF0gdGV4dC1ibGFjayBib3JkZXItWzRweF0tYmxhY2sgaG92ZXI6Ymctc2t5LTcwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGdldFVzZXJEYXRhKCk7XG4gICAgICAgICAgICAgIHNldFNob3dUYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJhY2sgVXNlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtjdXJyZW50VXNlci5sZW5ndGggPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gYmctWyNmMmJmY2FdIHJvdW5kZWQtWzEwcHhdIHRleHQtYmxhY2sgcGItMiBwci0yIHdpZHRoLVs0MCVdXCI+XG4gICAgICAgICAgICBDdXJyZW50IFVzZXIgaXMgOiB7Y3VycmVudFVzZXJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge3Nob3dCdXR0b24gPyAoXG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU3RhcnQgUXVpelwiIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge3Nob3dUYWJsZSA/IDxUYWJsZSB0YWJsZURhdGE9e3RlbXBEYXRhfSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkhvbWVwYWdlSW1hZ2UiLCJUYWJsZSIsIkhvbWUiLCJyb3V0ZXIiLCJzY29yZSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJzaG93QnV0dG9uIiwic2V0U2hvd0J1dHRvbiIsInNob3dUYWJsZSIsInNldFNob3dUYWJsZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudHVzZXIiLCJ0YWJsZUlucHV0Iiwic2V0VGFibGVJbnB1dCIsIm5hbWUiLCJoYW5kbGVCdXR0b25DbGljayIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yZUhhbmRsZSIsImV4aXN0TmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwiZGF0YVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiZGF0YUxvY2FsIiwiZGF0YVN0ciIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRGF0YSIsInRvdGFsSXRlbXMiLCJsZW5ndGgiLCJhbGxEYXRhIiwiaSIsImtleSIsInZhbHVlIiwicGFyc2UiLCJhbGxVc2VyRGF0YSIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJtYXAiLCJ0ZW1wRGF0YSIsInJvd3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidGV4dCIsInRhYmxlRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});