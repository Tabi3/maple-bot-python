(() => {
var exports = {};
exports.id = 508;
exports.ids = [508,458];
exports.modules = {

/***/ 8111:
/***/ ((module) => {

// Exports
module.exports = {
	"wolfram-form": "wolfram-alpha_wolfram-form__fIihl",
	"container": "wolfram-alpha_container__UVuJG",
	"pods": "wolfram-alpha_pods__6H2Ll",
	"PodButton": "wolfram-alpha_PodButton__i2u2E",
	"expanded": "wolfram-alpha_expanded__54xqv",
	"pod": "wolfram-alpha_pod__rDfNU",
	"search-field": "wolfram-alpha_search-field__7s4so",
	"submit-form": "wolfram-alpha_submit-form__Djc3C",
	"search-bar": "wolfram-alpha_search-bar__WPa34"
};


/***/ }),

/***/ 5447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WolframApi),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1163);
/* harmony import */ var next_router___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1257);
/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4854);
/* harmony import */ var _styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8111);
/* harmony import */ var _styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 




function WolframApi({ result  }) {
    const router = (0,next_router___WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { my_query  } = router.query;
    let { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    let handleChange = (event)=>{
        event.preventDefault();
        setQuery(event.target.value);
    };
    let handleForm = (event)=>{
        event.preventDefault();
        console.log((_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default()));
        console.log(query);
        router.push(`${query}`);
    };
    let handlePod = (event)=>{
        event.preventDefault();
        let panel = event.target.nextElementSibling;
        if (panel.style.maxHeight !== "0px") {
            event.target.classList.remove((_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().expanded));
            panel.style.maxHeight = 0;
        } else {
            event.target.classList.add((_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().expanded));
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    let renderPods = (x, key)=>{
        if (x[key][0] === undefined) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
        if (x[key][0] instanceof String || typeof x[key][0] == "string") {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().PodButton),
                        onClick: handlePod,
                        children: key
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().pod),
                        style: {
                            maxHeight: "0px"
                        },
                        children: x[key].map((i)=>{
                            i = i.toString();
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: i.startsWith("http") ? i : "data:image/gif;base64," + i,
                                        alt: "None"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                ]
                            });
                        })
                    })
                ]
            });
        }
        ;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().PodButton),
                    onClick: handlePod,
                    children: key
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().pod),
                    style: {
                        maxHeight: "0px"
                    },
                    children: x[key].map((i, j)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                i[0],
                                ":",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: i[1].startsWith("http") ? i[1] : "data:image/gif;base64," + i[1],
                                    alt: "None"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                            ]
                        });
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5___default()["main-test"]),
                style: {
                    "--title": `"${my_query}"`
                },
                children: my_query
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_sidebar_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
                style: {
                    height: "100%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleForm,
                        method: "POST",
                        className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default()["wolfram-form"]),
                        style: {
                            height: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 31fr"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M11.445 21.832a1 1 0 0 0 1.11 0l9-6A.998.998 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432l9 6zm8.12-7.078L12 19.798V4.667l7.565 10.087z"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "query",
                                        children: "Ask Wolfram Alpha"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-bar"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "query",
                                        defaultValue: query,
                                        onChange: handleChange,
                                        className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default()["search-field"]),
                                        placeholder: "x^2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default()["submit-form"]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            style: {
                                                fill: "rgba(0, 0, 0, 1)",
                                                filter: "invert(100)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_wolfram_alpha_module_css__WEBPACK_IMPORTED_MODULE_4___default().pods),
                                children: Object.keys(result).map((key, index)=>renderPods(result, key))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                style: {
                                    border: "0px solid",
                                    width: "100%",
                                    backgroundImage: "linear-gradient(45deg, #F62336, #FF6611)",
                                    height: "5px",
                                    marginTop: "auto"
                                }
                            })
                        ]
                    })
                })
            })
        ]
    });
};
async function getServerSideProps({ params  }) {
    console.log(params);
    const req = await fetch("http://localhost:5000/flask/wolfram_query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });
    const data = await req.json();
    return {
        props: {
            result: data
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,952,392,163,257], () => (__webpack_exec__(5447)));
module.exports = __webpack_exports__;

})();