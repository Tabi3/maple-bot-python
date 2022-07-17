(() => {
var exports = {};
exports.id = 250;
exports.ids = [250,458];
exports.modules = {

/***/ 2435:
/***/ ((module) => {

// Exports
module.exports = {
	"card_link": "KhubCard_card_link__ecs7K",
	"maindiv": "KhubCard_maindiv__fhD6Y",
	"cards": "KhubCard_cards__Y4Sgq",
	"cardsContainer": "KhubCard_cardsContainer__zTcOp"
};


/***/ }),

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

/***/ 1976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ KhubHome),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/navbar.js
var navbar = __webpack_require__(1257);
// EXTERNAL MODULE: ./styles/sidebar.module.css
var sidebar_module = __webpack_require__(4854);
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);
// EXTERNAL MODULE: ./styles/Khub/KhubCard.module.css
var KhubCard_module = __webpack_require__(2435);
var KhubCard_module_default = /*#__PURE__*/__webpack_require__.n(KhubCard_module);
;// CONCATENATED MODULE: ./MyComponents/KhubCard.js

/* eslint-disable @next/next/no-img-element */ 
function KhubCard(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: (KhubCard_module_default()).card_link,
        href: props.href,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (KhubCard_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: props.img_src,
                    alt: "img_src"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (KhubCard_module_default()).maindiv,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.description
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "0.5rem",
                        height: "4rem"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                height: "2rem",
                                position: "absolute",
                                gap: "0.5rem"
                            },
                            children: props.authors.map((i)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: i.pfp,
                                    title: i.name,
                                    alt: "pfp",
                                    style: {
                                        height: "2rem",
                                        width: "2rem",
                                        borderRadius: "100%"
                                    }
                                }, i.name))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            style: {
                                marginTop: "2rem",
                                color: "#555"
                            },
                            children: props.name
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/wolfram-alpha.module.css
var wolfram_alpha_module = __webpack_require__(8111);
var wolfram_alpha_module_default = /*#__PURE__*/__webpack_require__.n(wolfram_alpha_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/khub/index.js







function KhubHome({ li  }) {
    const img = "https://media.istockphoto.com/videos/abstract-background-holographic-gradient-futuristic-3d-rendering-video-id1159788522?s=640x640";
    const lnk = "https://www.youtube.com/watch?v=wF5jQPZRAjg&list=RDGMEMYH9CUrFO7CfLJpaD7UR85w&index=3";
    let renderCards = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: li.home.map((i)=>/*#__PURE__*/ jsx_runtime_.jsx(KhubCard, {
                    img_src: i.img,
                    name: i.title,
                    description: i.description,
                    href: i.link,
                    authors: i.advisers
                }, i.title))
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sidebar_module_default())["main-test"],
                style: {
                    "--title": '"PSHS Knowledge hub"'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (sidebar_module_default()).main,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (wolfram_alpha_module_default()).container,
                    style: {
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (KhubCard_module_default()).cardsContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    height: "3rem",
                                    marginBottom: "2rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        style: {
                                            marginRight: "2rem"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M3 5v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3z"
                                        })
                                    }),
                                    "Courses"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (KhubCard_module_default()).cards,
                                children: [
                                    renderCards(),
                                    /*#__PURE__*/ jsx_runtime_.jsx(KhubCard, {
                                        img_src: img,
                                        name: "Random C418 Song",
                                        description: "Its Nice",
                                        href: lnk,
                                        authors: [
                                            {
                                                profile: "none",
                                                name: "c418",
                                                pfp: "https://yt3.ggpht.com/ytc/AKedOLTsfRbieVuIoewtJFWCL-HlUXNJfOn2-5RUgjotKQ=s176-c-k-c0x00ffffff-no-rj-mo"
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                style: {
                                    border: "0px solid",
                                    width: "100%",
                                    backgroundImage: "linear-gradient(45deg, #F62336, #FF6611)",
                                    height: "5px",
                                    marginTop: "2rem"
                                }
                            })
                        ]
                    })
                })
            })
        ]
    });
};
let getServerSideProps = async ()=>{
    const req = await fetch("http://localhost:5000/flask/khub", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "cookie": {
                "name": "MoodleSession",
                "value": "mi3h5dqe19bm6lpekmkn9ld9m5"
            }
        })
    });
    const data = await req.json();
    console.log(data);
    return {
        props: {
            li: data
        }
    };
};


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [257], () => (__webpack_exec__(1976)));
module.exports = __webpack_exports__;

})();