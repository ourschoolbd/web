import {j as e, r as k, aA as le, aB as P, h as U, A as I, Q as V, u as oe, aC as Xe, aD as qe, T as Ce, aE as Pe, V as et, aF as tt, aG as st, aH as at, aI as rt, aJ as nt, aK as lt, aL as Me, aM as Fe, a9 as $e, aN as it, aO as dt, R as ct, _ as ot, a as mt, a6 as ht, Y as ut, m as te, aP as bt, aQ as xt, aR as pt} from "./index-4f7d73dc.js";
import {c as S, a as de, b as re, d as K, g as ft, e as Ee, I as gt} from "./index-d5102e12.js";
import {M as jt, C as _t, v as Se} from "./index-a254eb95.js";
import {S as yt} from "./Spinner-e3522d0e.js";
import {a as Nt} from "./index.esm-441f5933.js";
import {g as kt, a as wt, b as vt} from "./adressUtil-739e5524.js";
import {h as qt} from "./moment-fbc5633a.js";
import {E as Et} from "./EPBOMRBox-ff65ed1d.js";
import {g as St} from "./omrUtils-faa47d0a.js";
import {a as Tt} from "./config-e19b493c.js";
import {t as At} from "./TeacherRoutes-6b115772.js";
const me = ({question: s}) => {
    var a, r, l, c, i, o;
    const t = s;
    return ((a = t.boardInfo) == null ? void 0 : a.length) > 0 || ((r = t.topSchool) == null ? void 0 : r.length) > 0 || ((l = t.university) == null ? void 0 : l.length) > 0 ? e.jsxs("mark", {
        className: "text-xs italic",
        children: ["[", e.jsx("span", {
            children: ((c = t.boardInfo) == null ? void 0 : c.length) > 0 && e.jsx("i", {
                children: t.boardInfo.map( (n, b) => {
                    var m;
                    return e.jsxs("span", {
                        children: [e.jsxs("span", {
                            children: [e.jsx("span", {
                                children: (m = n == null ? void 0 : n.boardId) == null ? void 0 : m.shortForm
                            }), (n == null ? void 0 : n.year) && e.jsxs("span", {
                                children: ["'", S(n.year)]
                            })]
                        }), b !== t.boardInfo.length - 1 && ";"]
                    }, b)
                }
                )
            })
        }), e.jsx("span", {
            children: ((i = t.topSchool) == null ? void 0 : i.length) > 0 && e.jsx("i", {
                children: t.topSchool.map( (n, b) => {
                    var m;
                    return e.jsxs("span", {
                        children: [b !== 0 && ",", e.jsxs("span", {
                            children: [e.jsx("span", {
                                children: (m = n == null ? void 0 : n.schoolId) == null ? void 0 : m.name
                            }), (n == null ? void 0 : n.year) && e.jsxs("span", {
                                children: ["'", S(n.year)]
                            })]
                        })]
                    }, b)
                }
                )
            })
        }), e.jsx("span", {
            children: ((o = t.university) == null ? void 0 : o.length) > 0 && e.jsx("i", {
                children: t.university.map( (n, b) => {
                    var m;
                    return e.jsxs("span", {
                        children: [b !== 0 && ",", e.jsxs("span", {
                            children: [e.jsx("span", {
                                children: (m = n == null ? void 0 : n.uniId) == null ? void 0 : m.name
                            }), (n == null ? void 0 : n.year) && e.jsxs("span", {
                                children: ["'", S(n.year)]
                            })]
                        })]
                    }, b)
                }
                )
            })
        }), "]"]
    }) : null
}
  , Mt = ({size: s}) => e.jsx("span", {
    className: "center mr-0.5",
    style: {
        width: s,
        height: s,
        fontSize: s,
        background: "black",
        color: "white"
    },
    children: e.jsx(Nt, {
        size: s
    })
})
  , ie = ({star: s, fontSize: t=14}) => {
    var r;
    if (!s)
        return null;
    let a = t;
    try {
        const l = W == null ? void 0 : W();
        (r = l == null ? void 0 : l.config) != null && r.font_size && (a = l.config.font_size)
    } catch {}
    return e.jsx("span", {
        className: "inline-flex text-sm",
        children: Array.from({
            length: s
        }).map( (l, c) => e.jsx(Mt, {
            size: a
        }, c))
    })
}
  , ee = (s, t, a) => {
    const {config: r} = W();
    if (!r)
        return "";
    const l = r.version === "EN";
    switch (a || r.sl) {
    case "number":
        return l ? String(s + 1) : S(s + 1);
    case "bn_letter":
        return re(s);
    case "en_letter":
        return de(s);
    case "roman":
        return K(s + 1);
    case "auto":
    default:
        return (t == null ? void 0 : t.indexLabel) === "Numeric" ? l ? String(s + 1) : S(s + 1) : l ? de(s) : re(s)
    }
}
  , he = ({index: s, typeInfo: t, controlPanelConfig: a, defaultLabel: r}) => {
    if ((t == null ? void 0 : t.separated) === "comma" || (t == null ? void 0 : t.indexing) === !1)
        return null;
    const l = ee(s, t, r)
      , c = a.option_style;
    if (a.answer_sheet && (t == null ? void 0 : t.q_style) === "lb_rec")
        return e.jsx("span", {
            contentEditable: !0,
            className: "bg-gray-100 border-l-4 border-gray-500 shrink-0 px-1.5",
            children: e.jsxs("span", {
                className: "font-bold",
                children: ["প্রশ্ন: ", l]
            })
        });
    const i = `
    ${a.answer_sheet ? "font-bold" : ""}
    ${c === "circle" ? "inline-flex items-center justify-center rounded-full border border-gray-500 h-4 w-4 text-xs" : ""}
  `;
    return e.jsxs("span", {
        className: i,
        contentEditable: !0,
        children: [c === "d_bracket" && "(", l, (c === "s_bracket" || c === "d_bracket") && ")", c === "dot" && ".", !["s_bracket", "d_bracket", "dot", "circle"].includes(c) && "."]
    })
}
  , ce = ({mcq: s, controlPanelConfig: t, setQuestions: a, i: r, q_set: l, qsetInfo: c, typeInfo: i}) => {
    const {config: o, deleteQuestion: n} = W()
      , b = o.version
      , m = s
      , [d,_] = k.useState("2x2")
      , [h,w] = k.useState(!1)
      , f = async (v, q) => {
        var E, N;
        try {
            w(!0);
            const y = await U( () => I({
                url: "/academic/exchange-question-in-set",
                method: "POST",
                data: {
                    classId: c.classId._id,
                    q_set: l,
                    questionId: q,
                    sector: "academic",
                    type: "mcq"
                }
            }));
            y.status === 200 && y.data.exchangedQuestion && a(A => {
                const M = [...A];
                return M.splice(v, 1, y.data.exchangedQuestion),
                M
            }
            ),
            w(!1)
        } catch (y) {
            w(!1),
            V.error(((N = (E = y == null ? void 0 : y.response) == null ? void 0 : E.data) == null ? void 0 : N.message) || "Error while processing exchange")
        }
    }
      , p = () => {
        _(v => {
            switch (v) {
            case "2x2":
                return "1x4";
            case "1x4":
                return "4x1";
            case "4x1":
                return "2x2";
            default:
                return "2x2"
            }
        }
        )
    }
      , j = k.useRef(null)
      , x = 25;
    k.useEffect( () => {
        const v = j.current.querySelectorAll(".option")
          , q = Array.from(v).some(E => E.offsetHeight > x);
        _(q ? "4x1" : "2x2")
    }
    , []);
    const g = t.duplicateCheck && m.duplicate;
    return e.jsxs("div", {
        className: `${h && "opacity-60 bg-gray-100"} bg-white relative p-0.5 hover:bg-gray-50 rounded group`,
        children: [h && e.jsx("div", {
            className: "absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2",
            children: e.jsxs("svg", {
                "aria-hidden": "true",
                className: "inline w-10 h-10 text-gray-300 animate-spin fill-primary-900",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }), e.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })]
            })
        }), e.jsxs("div", {
            className: "absolute group-hover:flex bg-gray-200 w-full justify-end gap-2 hidden p-0.5 -top-6 right-0",
            children: [e.jsx("button", {
                onClick: p,
                className: "group-hover:block px-2 py-1 bg-gray-100 hover:bg-primary-400 hover:text-white rounded",
                children: d
            }), e.jsx("div", {
                onClick: () => n(m._id),
                className: "flex items-center bg-gray-100 hover:bg-red-500 p-1 px-2 text-gray-400 hover:text-white rounded cursor-pointer",
                children: e.jsx(le, {})
            }), e.jsxs("div", {
                onClick: () => f(r, m._id),
                className: "flex items-center p-1 gap-1.5 bg-gray-100 hover:bg-primary-400 hover:text-white rounded cursor-pointer",
                children: [e.jsx(P, {}), "Exchange"]
            })]
        }), e.jsxs("div", {
            className: `${g ? "text-red-500" : ""} flex items-baseline gap-x-2 `,
            children: [e.jsxs("p", {
                contentEditable: !0,
                children: [t.version === "EN" ? String(r + 1).padStart(2, "0") : S(String(r + 1).padStart(2, "0")), t.version === "EN" ? "." : "।"]
            }), e.jsxs("div", {
                className: "w-full",
                children: [e.jsxs("div", {
                    children: [e.jsx("span", {
                        contentEditable: !0,
                        className: `${t.editingMode && "cursor-text"} bangla-bold inline_p_tag`,
                        dangerouslySetInnerHTML: {
                            __html: m.question
                        }
                    }), e.jsxs("span", {
                        className: "float-right inline-flex flex-wrap items-center  justify-end",
                        children: [t.star && e.jsx(ie, {
                            star: m.star
                        }), t.details && e.jsx(me, {
                            question: m
                        })]
                    })]
                }), e.jsxs("div", {
                    ref: j,
                    className: `relative grid w-full ${d === "1x4" ? "grid-cols-4" : d === "4x1" ? "" : "grid-cols-2"} group my-0.5`,
                    children: [t.answer_sheet && e.jsx("span", {
                        className: `flex justify-center items-center absolute right-0 top-0 p-0.5 ${t.font_size <= 12 ? "h-4 w-4" : "h-5 w-5"} bg-black rounded-full text-white`,
                        children: b === "EN" ? e.jsxs(e.Fragment, {
                            children: [m.mcqAns == "0" && "a", m.mcqAns == "1" && "b", m.mcqAns == "2" && "c", m.mcqAns == "3" && "d"]
                        }) : e.jsxs(e.Fragment, {
                            children: [m.mcqAns == "0" && "ক", m.mcqAns == "1" && "খ", m.mcqAns == "2" && "গ", m.mcqAns == "3" && "ঘ"]
                        })
                    }), m == null ? void 0 : m.options.map( (v, q) => e.jsxs("div", {
                        className: "option flex flex-1 items-baseline mb-0.5",
                        children: [e.jsxs("div", {
                            className: `${t.font_size <= 12 ? "h-3 w-3" : "h-4 w-4"}
              ${t.option_style == "circle" && "border border-gray-500 "}
              shrink-0 mr-1 rounded-full center`,
                            children: [t.option_style == "d_bracket" && "(", t.version === "BN" ? ["ক", "খ", "গ", "ঘ"][q] : ["a", "b", "c", "d"][q], " ", e.jsx("span", {
                                children: (t.option_style == "s_bracket" || t.option_style == "d_bracket") && ")"
                            }), e.jsx("span", {
                                children: t.option_style == "dot" && "."
                            })]
                        }), e.jsx("div", {
                            contentEditable: !0,
                            dangerouslySetInnerHTML: {
                                __html: v
                            }
                        })]
                    }, q))]
                })]
            })]
        }), t.answer_sheet && (m == null ? void 0 : m.answer) && e.jsxs("div", {
            className: "flex items-baseline gap-1.5",
            children: [e.jsx("span", {
                className: "bg-black text-white pl-1 pr-1.5 rounded-sm italic ",
                children: "ব্যাখ্যা"
            }), e.jsx("div", {
                contentEditable: !0,
                className: `${t.editingMode && "cursor-text"}`,
                dangerouslySetInnerHTML: {
                    __html: m == null ? void 0 : m.answer
                }
            })]
        })]
    })
}
  , Ft = ({questions: s, setQuestions: t, controlPanelConfig: a, q_set: r, qsetInfo: l}) => e.jsx(e.Fragment, {
    children: e.jsx("div", {
        className: `relative flex-1 columns-1 ${a.column == 1 ? "lg:columns-1 print:columns-1" : a.column == 2 ? "lg:columns-2 print:columns-2" : "lg:columns-3 print:columns-3"}`,
        style: {
            columnRule: a.divider ? "1px solid rgba(0, 0, 0, 0.3)" : "none"
        },
        children: s == null ? void 0 : s.map( (c, i) => e.jsx(ce, {
            mcq: c,
            i,
            q_set: r,
            qsetInfo: l,
            controlPanelConfig: a,
            setQuestions: t,
            questions: s
        }))
    })
})
  , Re = ({cq: s, controlPanelConfig: t, questions: a, setQuestions: r, i: l, qsetInfo: c, q_set: i}) => {
    var p, j;
    const o = s
      , [n,b] = k.useState(!1)
      , [m,d] = k.useState()
      , h = jt.includes(o.subjectId) ? ["২", "৪", "৪"] : ["১", "২", "৩", "৪"]
      , w = async (x, g) => {
        var v, q;
        try {
            b(!0);
            const E = await U( () => I({
                url: "/academic/exchange-question-in-set",
                method: "POST",
                data: {
                    q_set: i,
                    questionId: g,
                    sector: "academic",
                    type: "cq",
                    classId: c.classId._id
                }
            }));
            E.status == 200 && E.data.exchangedQuestion && r(N => {
                const y = [...N];
                return y.splice(x, 1, E.data.exchangedQuestion),
                y
            }
            ),
            b(!1)
        } catch (E) {
            b(!1),
            V.error(((q = (v = E == null ? void 0 : E.response) == null ? void 0 : v.data) == null ? void 0 : q.message) || "Error while processing exchange")
        }
    }
      , f = t.duplicateCheck && o.duplicate;
    return e.jsxs("div", {
        className: `${n && "opacity-60 bg-gray-100"}  relative p-0.5 bg-white rounded group select-none mb-2.5`,
        children: [n && e.jsx("div", {
            className: "absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2",
            children: e.jsxs("svg", {
                "aria-hidden": "true",
                className: "inline w-10 h-10  text-gray-300 animate-spin fill-primary-900",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }), e.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })]
            })
        }), t.editingMode && c.type != "combine" && e.jsxs("div", {
            className: "flex gap-2 print:hidden justify-end  py-1",
            children: [e.jsx("div", {
                onClick: () => r(a.filter(x => x._id != o._id)),
                className: "flex items-center bg-gray-100 hover:bg-red-500 p-1 px-2 text-gray-400 hover:text-white rounded cursor-pointer z-10",
                children: e.jsx(le, {})
            }), e.jsxs("div", {
                disabled: n,
                onClick: () => w(l, o._id),
                className: "flex items-center py-1 px-2 gap-1.5  bg-gray-100 hover:bg-primary-500  hover:text-white rounded cursor-pointer z-10",
                children: [e.jsx(P, {}), "Exchange"]
            })]
        }), (t.editingMode || m) && e.jsx("div", {
            className: `${m ? " font-bold" : "print:hidden bg-gray-50"}  py-1 text-center cursor-text`,
            contentEditable: !0,
            suppressContentEditableWarning: !0,
            onInput: x => d(x.currentTarget.textContent),
            children: "+ Add Text"
        }), e.jsxs("div", {
            className: "hover:bg-gray-100",
            children: [e.jsxs("div", {
                className: `${f && "text-red-500"} flex items-baseline gap-x-2`,
                children: [e.jsxs("span", {
                    contentEditable: !0,
                    children: [l < 9 ? "০" + S(l + 1) : S(l + 1), "."]
                }), e.jsxs("div", {
                    className: "flex flex-wrap justify-between items-center w-full ",
                    children: [e.jsx("div", {
                        contentEditable: t.editingMode,
                        className: `${t.editingMode && "cursor-text"}`,
                        dangerouslySetInnerHTML: {
                            __html: o.question
                        }
                    }), t.details && e.jsx(me, {
                        question: o
                    })]
                })]
            }), e.jsx("div", {
                className: "relative grid ml-7 py-0.5 group",
                children: (p = o == null ? void 0 : o.options) == null ? void 0 : p.slice(0, 4).map( (x, g) => {
                    if (g === 3 && !x)
                        return null;
                    const v = ["ক", "খ", "গ", "ঘ"]
                      , q = ["a", "b", "c", "d"]
                      , E = t.version === "BN" ? v[g] : q[g];
                    return e.jsxs("div", {
                        className: "flex flex-1 items-baseline mb-0.5",
                        children: [e.jsxs("div", {
                            className: `${t.font_size <= 12 ? "h-3 w-3" : "h-4 w-4"} ${t.option_style === "circle" ? "border border-gray-500" : ""} shrink-0 mr-1 rounded-full flex justify-center items-center`,
                            children: [t.option_style === "d_bracket" && "(", E, ["s_bracket", "d_bracket"].includes(t.option_style) && ")", t.option_style === "dot" && "."]
                        }), e.jsx("div", {
                            contentEditable: t.editingMode,
                            className: `
                    ${t.editingMode ? "cursor-text" : ""}
                    relative w-full 
                  `,
                            dangerouslySetInnerHTML: {
                                __html: x
                            }
                        }), e.jsx("span", {
                            className: "ml-1.5",
                            contentEditable: !0,
                            children: h[g]
                        })]
                    }, g)
                }
                )
            }), t.answer_sheet && ((j = o == null ? void 0 : o.cqAns) == null ? void 0 : j.length) > 0 && e.jsxs("div", {
                children: [e.jsxs("p", {
                    className: "py-1 font-bold",
                    children: ["উত্তরপত্র (", S(l + 1), "নং প্রশ্ন)"]
                }), e.jsxs("div", {
                    children: [(o == null ? void 0 : o.options[0]) && e.jsxs("div", {
                        className: "flex flex-1 items-baseline mb-0.5",
                        children: [e.jsx("span", {
                            className: "mr-2 bg-gray-800 text-center px-1.5 rounded-tr rounded-bl text-white",
                            children: t.version === "BN" ? "ক" : "a."
                        }), e.jsx("div", {
                            contentEditable: t.editingMode,
                            contentEditableWarning: "disabled",
                            className: `${t.editingMode && "cursor-text"}`,
                            dangerouslySetInnerHTML: {
                                __html: o == null ? void 0 : o.cqAns[0]
                            }
                        })]
                    }), (o == null ? void 0 : o.options[1]) && e.jsxs("div", {
                        className: "flex flex-1 items-baseline mb-0.5",
                        children: [e.jsx("span", {
                            className: "mr-2 bg-gray-800 text-center px-1.5 rounded-tr rounded-bl text-white",
                            children: t.version === "BN" ? "খ" : "b."
                        }), e.jsx("div", {
                            contentEditable: t.editingMode,
                            contentEditableWarning: "disabled",
                            className: `${t.editingMode && "cursor-text"}`,
                            dangerouslySetInnerHTML: {
                                __html: o == null ? void 0 : o.cqAns[1]
                            }
                        })]
                    }), (o == null ? void 0 : o.options[2]) && e.jsxs("div", {
                        className: "flex flex-1 items-baseline mb-0.5",
                        children: [e.jsx("span", {
                            className: "mr-2 bg-gray-800 text-center px-1.5 rounded-tr rounded-bl text-white",
                            children: t.version === "BN" ? "গ" : "d."
                        }), e.jsx("div", {
                            contentEditable: t.editingMode,
                            contentEditableWarning: "disabled",
                            className: `${t.editingMode && "cursor-text"}`,
                            dangerouslySetInnerHTML: {
                                __html: o == null ? void 0 : o.cqAns[2]
                            }
                        })]
                    }), (o == null ? void 0 : o.options[3]) && e.jsxs("div", {
                        className: "flex flex-1 items-baseline mb-0.5",
                        children: [e.jsx("span", {
                            className: "mr-2 bg-gray-800 text-center px-1.5 rounded-tr rounded-bl text-white",
                            children: t.version === "BN" ? "ঘ" : "c."
                        }), e.jsx("div", {
                            contentEditable: t.editingMode,
                            contentEditableWarning: "disabled",
                            className: `${t.editingMode && "cursor-text"}`,
                            dangerouslySetInnerHTML: {
                                __html: o == null ? void 0 : o.cqAns[3]
                            }
                        })]
                    })]
                })]
            })]
        })]
    })
}
  , $t = ({questions: s, setQuestions: t, controlPanelConfig: a, q_set: r, qsetInfo: l}) => e.jsx(e.Fragment, {
    children: e.jsx("div", {
        className: `relative flex-1 columns-1 ${a.column == 1 ? "lg:columns-1 print:columns-1" : a.column == 2 ? "lg:columns-2 print:columns-2" : "lg:columns-3 print:columns-3"}`,
        style: {
            columnRule: a.divider ? "1px solid rgba(0, 0, 0, 0.2)" : "none"
        },
        children: s.map( (c, i) => e.jsx(Re, {
            cq: c,
            i,
            q_set: r,
            controlPanelConfig: a,
            setQuestions: t,
            questions: s,
            qsetInfo: l
        }))
    })
})
  , Y = ({children: s}) => {
    var a;
    const t = oe(r => {
        var l;
        return (l = r.auth) == null ? void 0 : l.userInfo
    }
    );
    return !t || !((a = t.roles) != null && a.includes(6897)) ? null : e.jsx(k.Suspense, {
        fallback: "Loading...",
        children: s
    })
}
  , ue = ({pec: s}) => {
    if (!s || s.length === 0)
        return null;
    const t = s.map(a => S(a.toString().slice(-2))).join(", ");
    return e.jsxs("span", {
        className: "italic ml-2",
        children: ["[প্রা. শি. স. প. ", t, "]"]
    })
}
  , Rt = ({cq: s, setQuestions: t, i: a, q_set: r, qsetInfo: l, typeInfo: c}) => {
    var j;
    const {config: i, deleteQuestion: o} = W()
      , n = s
      , [b,m] = k.useState(!1)
      , [d,_] = k.useState("2x2")
      , h = () => {
        var x, g, v;
        return (n == null ? void 0 : n.solution) && i.answer_sheet && n.task !== "mcq" && ((x = c == null ? void 0 : c.ans_display) == null ? void 0 : x.render) !== !1 && ((g = c == null ? void 0 : c.ans_display) == null ? void 0 : g.render) !== "list" && ((v = c == null ? void 0 : c.ans_display) == null ? void 0 : v.render) !== "flex"
    }
      , w = async (x, g, v) => {
        var q, E;
        if ((l == null ? void 0 : l.plan) == "PAY_AS_YOU_GO" && l.payment_status.isPaid)
            return V.info("আনলিমিটেড এক্সচেঞ্জ এর জন্য প্রিমিয়াম সাবস্ক্রিপশন থাকতে হবে।");
        try {
            m(!0);
            const N = await U( () => I({
                url: "/academic/primary/exchange-question",
                method: "POST",
                data: {
                    q_set: r,
                    questionId: g,
                    type: v
                }
            }));
            N.status == 200 && N.data.exchagnedQuestion && t(y => {
                const A = [...y]
                  , M = A.findIndex(u => u._id === g);
                return M !== -1 && A.splice(M, 1, N.data.exchagnedQuestion),
                A
            }
            ),
            m(!1)
        } catch (N) {
            m(!1),
            V.error(((E = (q = N == null ? void 0 : N.response) == null ? void 0 : q.data) == null ? void 0 : E.message) || "Error while processing exchange")
        }
    }
      , f = () => {
        _(x => {
            switch (x) {
            case "2x2":
                return "1x4";
            case "1x4":
                return "4x1";
            case "4x1":
                return "2x2";
            default:
                return "2x2"
            }
        }
        )
    }
      , p = i.duplicateCheck && n.duplicate;
    return e.jsxs("div", {
        className: `${b && "opacity-60 bg-gray-100"}
     relative hover:bg-gray-200 rounded group select-none`,
        children: [b && e.jsx("div", {
            className: "absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2",
            children: e.jsx(yt, {
                size: 8
            })
        }), e.jsxs("div", {
            className: " absolute group-hover:flex bg-gray-200 flex-1 min-w-[200px] justify-end gap-2 hidden -top-7 p-0.5 right-0",
            children: [n.type == "mcq" && e.jsx("div", {
                onClick: () => f(),
                className: "group-hover:block px-2 py-1 bg-gray-100 hover:bg-primary-400 hover:text-white rounded z-10 cursor-pointer",
                children: d
            }), e.jsx("div", {
                onClick: () => o(n._id),
                className: "flex items-center bg-gray-100 hover:bg-red-500 p-1 px-2 text-gray-400 hover:text-white rounded cursor-pointer z-10",
                children: e.jsx(le, {})
            }), e.jsxs("div", {
                disabled: b,
                onClick: () => w(a, n._id, n.type),
                className: "flex items-center p-1 gap-1.5  bg-gray-100 hover:bg-primary-400  hover:text-white rounded cursor-pointer z-10",
                children: [e.jsx(P, {}), "Exchange"]
            })]
        }), e.jsxs("div", {
            className: `flex items-baseline  gap-x-1
     `,
            children: [e.jsx(he, {
                index: a,
                typeInfo: c,
                controlPanelConfig: i
            }), e.jsxs("div", {
                className: "w-full",
                children: [e.jsxs("div", {
                    className: `${p && "text-red-500"}`,
                    children: [e.jsx("span", {
                        contentEditable: !0,
                        dangerouslySetInnerHTML: {
                            __html: n.question
                        }
                    }), e.jsx(Y, {
                        children: e.jsxs("span", {
                            className: "float-right inline-flex flex-wrap items-center  justify-end",
                            children: [i.star && (n == null ? void 0 : n.star) && e.jsx(ie, {
                                star: n == null ? void 0 : n.star
                            }), i.details && e.jsx(ue, {
                                pec: n == null ? void 0 : n.pec
                            })]
                        })
                    })]
                }), e.jsxs("div", {
                    className: "w-full",
                    children: [n.type == "mcq" && e.jsxs("div", {
                        className: `relative grid ${d == "1x4" ? "grid-cols-4" : d == "4x1" ? "" : "grid-cols-2"} justify-between py-0.5 group w-full`,
                        children: [i.answer_sheet && e.jsx("span", {
                            className: "flex justify-center items-center absolute right-0 top-0 p-0.5 h-5 w-5 bg-black rounded-full text-white",
                            children: i.version === "EN" ? K(n.mcqAns + 1) : ["ক", "খ", "গ", "ঘ"][n.mcqAns]
                        }), (j = n == null ? void 0 : n.options) == null ? void 0 : j.map( (x, g) => e.jsxs("div", {
                            className: "flex flex-1 items-baseline mb-0.5",
                            children: [e.jsxs("p", {
                                className: "shrink-0 mr-1 flex justify-center items-center",
                                children: ["(", i.version === "EN" ? K(g + 1) : re(g), ")"]
                            }), e.jsx("div", {
                                contentEditable: !0,
                                className: "option",
                                dangerouslySetInnerHTML: {
                                    __html: x
                                }
                            })]
                        }, g))]
                    }), (n.taskList.length && n.task != "mcq") > 0 && e.jsx(e.Fragment, {
                        children: n.taskList.map( (x, g) => e.jsxs("div", {
                            className: "relative grid group",
                            children: [e.jsxs("div", {
                                className: "flex flex-1 items-baseline mb-0.5",
                                children: [e.jsx("span", {
                                    className: "mr-2",
                                    children: re(g) + "."
                                }), e.jsx("div", {
                                    contentEditable: !0,
                                    className: "option",
                                    dangerouslySetInnerHTML: {
                                        __html: x == null ? void 0 : x.question
                                    }
                                })]
                            }), (x == null ? void 0 : x.solution) && i.answer_sheet && e.jsxs("div", {
                                className: "relative",
                                children: [e.jsx("span", {
                                    className: "absolute left-0 font-bold",
                                    children: i.version === "EN" ? "Ans:" : "উত্তর:"
                                }), e.jsx("div", {
                                    contentEditable: !0,
                                    className: `${(x == null ? void 0 : x.solution) && i.answer_sheet && "indent-9"}`,
                                    dangerouslySetInnerHTML: {
                                        __html: x.solution
                                    }
                                })]
                            })]
                        }, g))
                    })]
                })]
            })]
        }), h() && e.jsxs("div", {
            className: "relative mt-0.5",
            children: [e.jsx("span", {
                className: "absolute left-0 font-bold",
                children: i.version === "EN" ? "Ans:" : "উত্তর:"
            }), e.jsx("div", {
                contentEditable: !0,
                className: "indent-9",
                dangerouslySetInnerHTML: {
                    __html: n.solution
                }
            })]
        })]
    })
}
  , F = {
    class_5: {
        bangla: "67af0f5b9ddeb9d885fba09f",
        eng: "67af11339ddeb9d885fba417",
        math: "67af11289ddeb9d885fba410",
        sci: "67af11579ddeb9d885fba472",
        somaj: "67af11609ddeb9d885fba479",
        islam: "67af116a9ddeb9d885fba4a3"
    },
    class_4: {
        bangla: "67af118a9ddeb9d885fba4bc",
        math: "67af11949ddeb9d885fba4e3",
        eng: "67af119c9ddeb9d885fba523",
        sci: "67af11a59ddeb9d885fba52a",
        somaj: "67af11af9ddeb9d885fba55f",
        islam: "67af11b79ddeb9d885fba581"
    },
    class_3: {
        bangla: "67af11c99ddeb9d885fba5b9",
        math: "67af11cf9ddeb9d885fba5d2",
        eng: "67af11d99ddeb9d885fba609",
        sci: "67af11e29ddeb9d885fba61d",
        somaj: "67af11f09ddeb9d885fba63e",
        islam: "67af11fa9ddeb9d885fba65d"
    }
}
  , Ot = [F.class_5.math, F.class_4.math, F.class_3.math]
  , Lt = [F.class_5.sci, F.class_4.sci, F.class_3.sci, F.class_5.somaj, F.class_4.somaj, F.class_3.somaj]
  , Bt = [F.class_5.islam, F.class_4.islam, F.class_3.islam]
  , G = {
    math: [{
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ (বহুনির্বাচনী):",
        marks: 1,
        total_question: 20,
        ans_limit: 20,
        indexLabel: "Numeric",
        britti: {
            total_question: 10,
            marks: 1
        }
    }, {
        en: "gap",
        bn: "শুন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ কর:",
        marks: 1,
        total_question: 10,
        ans_limit: 10,
        britti: {
            total_question: 10,
            marks: 1
        }
    }, {
        en: "short_question",
        bn: "সংক্ষিপ্ত প্রশ্ন",
        title: "সংক্ষেপে উত্তর দাও: ",
        marks: 2,
        total_question: 12,
        ans_limit: 10,
        q_style: "lb_rec",
        britti: {
            total_question: 16,
            marks: 1
        }
    }, {
        en: "big_qus",
        bn: "বড় প্রশ্ন",
        title: "নিচের প্রশ্নের উত্তর দাও:",
        marks: 5,
        total_question: 13,
        ans_limit: 10,
        q_style: "lb_rec",
        britti: {
            total_question: 8,
            marks: 8
        }
    }],
    biggan_somaj: [{
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ (বহুনির্বাচনী):",
        marks: 1,
        total_question: 10,
        indexLabel: "Numeric",
        britti: {
            total_question: 5,
            marks: 1
        }
    }, {
        en: "gap",
        bn: "শূন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 5,
        britti: {
            total_question: 5,
            marks: 1
        }
    }, {
        en: "shuddho_osuddho",
        bn: "শুদ্ধ/অশুদ্ধ",
        title: "শুদ্ধ/অশুদ্ধ নির্ণয় করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 5,
        britti: {
            total_question: 5,
            marks: 1
        }
    }, {
        en: "bam_dan",
        bn: "বাম/ডান মিলকরণ",
        title: "বাম পাশের বাক্যাংশের সাথে ডান পাশের বাক্যাংশের মিল করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 4,
        britti: {
            total_question: 5,
            marks: 1
        }
    }, {
        en: "short_question",
        bn: "সংক্ষিপ্ত প্রশ্ন",
        title: "নিচের প্রশ্নের উত্তর সংক্ষেপে উত্তরপত্রে লেখ:",
        marks: 3,
        total_question: 12,
        ans_limit: 10,
        q_style: "lb_rec",
        britti: {
            total_question: 8,
            marks: 2
        }
    }, {
        en: "bornonamulok",
        bn: "বর্ণনামূলক প্রশ্ন",
        title: "নিচের প্রশ্নের উত্তর উত্তরপত্রে লেখ:",
        marks: 8,
        total_question: 6,
        ans_limit: 4,
        q_style: "lb_rec",
        britti: {
            total_question: 4,
            marks: 6
        }
    }],
    islam: [{
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ (বহুনির্বাচনী):",
        marks: 1,
        total_question: 10,
        indexLabel: "Numeric"
    }, {
        en: "gap",
        bn: "শুন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 5
    }, {
        en: "shuddho_osuddho",
        bn: "শুদ্ধ/অশুদ্ধ",
        title: "শুদ্ধ/অশুদ্ধ নির্ণয় করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 5
    }, {
        en: "milkoron",
        bn: "মিলকরণ",
        title: "বাম পাশের বাক্যাংশের সাথে ডান পাশের বাক্যাংশের মিল করে উত্তরপত্রে লেখ:",
        marks: 2,
        total_question: 5
    }, {
        en: "olpo_kothai_uttor",
        bn: "অল্প কথায় উত্তর",
        title: "নিচের প্রশ্নের অল্প কথায় উত্তর উত্তরপত্রে লেখ:",
        marks: 4,
        total_question: 7,
        ans_limit: 5,
        q_style: "lb_rec"
    }, {
        en: "bornonamulok",
        bn: "বর্ণনামূলক প্রশ্ন",
        title: "নিচের প্রশ্নের উত্তর উত্তরপত্রে লেখ:",
        marks: 8,
        total_question: 7,
        ans_limit: 5,
        q_style: "lb_rec"
    }],
    bangla5: [{
        en: "kobita",
        bn: "কবিতা",
        title: "কবিতা।",
        marks: 8,
        total_question: 1,
        indexing: !1,
        britti: {
            total_question: 1,
            marks: 10,
            sl: 1
        }
    }, {
        en: "gap",
        bn: "শুন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ কর।",
        marks: 1,
        total_question: 5,
        britti: {
            total_question: 5,
            marks: 1,
            sl: 4
        }
    }, {
        en: "rochona_mulok",
        bn: "রচনামূলক প্রশ্ন",
        title: "রচনামূলক প্রশ্নের উত্তর লেখ।",
        marks: 4,
        total_question: 5,
        ans_limit: 3,
        q_style: "lb_rec",
        britti: {
            total_question: 3,
            marks: 5,
            sl: 8
        }
    }, {
        en: "short_question",
        bn: "সংক্ষিপ্ত প্রশ্ন",
        title: "সংক্ষিপ্ত প্রশ্নের উত্তর লেখ।",
        marks: 2,
        total_question: 6,
        ans_limit: 4,
        q_style: "lb_rec",
        britti: {
            total_question: 4,
            marks: 2,
            sl: 7
        }
    }, {
        en: "mulvab",
        bn: "মূলভাব",
        title: "কবিতার মূলভাব",
        marks: 8,
        total_question: 1,
        indexing: !1,
        britti: {
            total_question: 1,
            marks: 5,
            sl: 9
        }
    }, {
        en: "shobdartho",
        bn: "শব্দার্থ",
        title: "শব্দের অর্থ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "শব্দার্থ"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 2
        }
    }, {
        en: "bakko_gothon",
        bn: "বাক্য গঠন",
        title: "শব্দ দিয়ে বাক্য গঠন কর।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বাক্য"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 3
        }
    }, {
        en: "cholito_rup",
        bn: "চলিত রূপ",
        title: "ক্রিয়াপদের চলিত রূপ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "ক্রিয়াপদ",
            key2: "চলিত রূপ"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 10
        }
    }, {
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ।",
        marks: 1,
        total_question: 5,
        indexLabel: "Numeric",
        britti: {
            total_question: 5,
            marks: 1,
            sl: 5
        }
    }, {
        en: "onucched_to_qus",
        bn: "অনুচ্ছেদ থেকে প্রশ্ন",
        title: "নিচের অনুচ্ছেদটি পড়ে কে, কী, কোথায়, কীভাবে, কেন, কখন শব্দগুলোর একবার ব্যবহার করে প্রশ্নবোধক বাক্য তৈরী করো।",
        marks: 5,
        total_question: 1,
        indexing: !1,
        britti: {
            total_question: 1,
            marks: 5,
            sl: 11
        }
    }, {
        en: "jukto_borno",
        bn: "যুক্তবর্ণ",
        title: "নিচের যুক্তবর্ণ ভেঙে লেখ এবং প্রতিটি যুক্তবর্ণ দিয়ে শব্দ তৈরী করো।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "যুক্তবর্ণ",
            key2: "বিভাজন, শব্দ"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 12
        }
    }, {
        en: "biporit",
        bn: "বিপরীত শব্দ",
        title: "নিচের শব্দের একটি করে বিপরীত শব্দ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বিপরীত শব্দ"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 6
        }
    }, {
        en: "somarthok",
        bn: "সমার্থক শব্দ",
        title: "নিচের শব্দের একটি করে সমার্থক শব্দ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "সমার্থক শব্দ"
        },
        britti: {
            total_question: 5,
            marks: 1,
            sl: 6
        }
    }, {
        en: "ek_kothai",
        bn: "এক কথায় প্রকাশ",
        title: "নিচের ব্যাক্যকে এককথায় প্রকাশ কর।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        britti: {
            total_question: 5,
            marks: 1,
            sl: 13
        }
    }, {
        en: "form_puron",
        bn: "ফরম পূরণ",
        title: "ফরম পূরণ",
        marks: 5,
        total_question: 1,
        indexing: !1,
        britti: {
            total_question: 1,
            marks: 5,
            sl: 14
        }
    }, {
        en: "rochona",
        bn: "রচনা",
        title: "নিচের বিষয়ে ১৫০ শব্দের মধ্যে রচনা লেখ।",
        marks: 12,
        total_question: 3,
        ans_limit: 1,
        britti: {
            total_question: 1,
            marks: 12,
            sl: 15
        }
    }, {
        en: "biram_chinno",
        bn: "বিরামচিহ্ন (বৃত্তি)",
        title: "নিচের অনুচ্ছেদটির যথাস্থানে বিরামচিহ্ন বসিয়ে লেখ।",
        marks: 5,
        total_question: 1,
        britti: {
            total_question: 1,
            marks: 5,
            sl: 11
        }
    }],
    bangla4: [{
        en: "kobita",
        bn: "কবিতা",
        title: "কবিতা।",
        marks: 8,
        total_question: 1,
        ans_limit: 1,
        indexing: !1
    }, {
        en: "short_question",
        bn: "সংক্ষিপ্ত প্রশ্ন",
        title: "সংক্ষিপ্ত প্রশ্নের উত্তর লেখ।",
        marks: 2,
        total_question: 6,
        ans_limit: 4,
        q_style: "lb_rec"
    }, {
        en: "rochona_mulok",
        bn: "রচনামূলক প্রশ্ন",
        title: "রচনামূলক প্রশ্নের উত্তর লেখ।",
        marks: 4,
        total_question: 5,
        ans_limit: 3,
        q_style: "lb_rec"
    }, {
        en: "shobdartho",
        bn: "শব্দার্থ",
        title: "শব্দের অর্থ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "শব্দার্থ"
        }
    }, {
        en: "gap",
        bn: "শুন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ কর।",
        marks: 1,
        total_question: 5
    }, {
        en: "biporit",
        bn: "বিপরীত শব্দ",
        title: "নিচের শব্দের একটি করে বিপরীত শব্দ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বিপরীত শব্দ"
        }
    }, {
        en: "somarthok",
        bn: "সমার্থক শব্দ",
        title: "নিচের শব্দের একটি করে সমার্থক শব্দ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "সমার্থক শব্দ"
        }
    }, {
        en: "bakko_gothon",
        bn: "বাক্য গঠন",
        title: "শব্দ দিয়ে বাক্য গঠন কর।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বাক্য"
        }
    }, {
        en: "biram_chinno",
        bn: "বিরামচিহ্ন",
        title: "নিচের অনুচ্ছেদটির যথাস্থানে বিরামচিহ্ন বসিয়ে লেখ।",
        marks: 5,
        total_question: 1
    }, {
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ।",
        marks: 1,
        total_question: 5,
        indexLabel: "Numeric"
    }, {
        en: "jukto_borno",
        bn: "যুক্তবর্ণ",
        title: "নিচের যুক্তবর্ণ ভেঙে লেখ এবং প্রতিটি যুক্তবর্ণ দিয়ে শব্দ তৈরী করো।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "যুক্তবর্ণ",
            key2: "বিভাজন, শব্দ"
        }
    }, {
        en: "ek_kothai",
        bn: "এক কথায় প্রকাশ",
        title: "নিচের ব্যাক্যকে এককথায় প্রকাশ কর।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma"
    }, {
        en: "potro_likhon",
        bn: "পত্র লিখন",
        title: "পত্র লিখন",
        marks: 8,
        total_question: 1,
        ans_limit: 1
    }, {
        en: "mulvab",
        bn: "মূলভাব",
        title: "কবিতার মূলভাব",
        marks: 8,
        total_question: 1,
        ans_limit: 1,
        indexing: !1
    }, {
        en: "rochona",
        bn: "রচনা",
        title: "প্রদত্ত সংকেতের আলোকে ১৫০ শব্দের মধ্যে রচনা লেখ।",
        marks: 12,
        total_question: 3,
        ans_limit: 1
    }],
    bangla3: [{
        en: "kobita",
        bn: "কবিতা",
        title: "কবিতা।",
        marks: 8,
        total_question: 1,
        ans_limit: 1,
        indexing: !1
    }, {
        en: "short_question",
        bn: "সংক্ষিপ্ত প্রশ্ন",
        title: "সংক্ষিপ্ত প্রশ্নের উত্তর লেখ।",
        marks: 2,
        total_question: 7,
        ans_limit: 5,
        q_style: "lb_rec"
    }, {
        en: "rochona_mulok",
        bn: "রচনামূলক প্রশ্ন",
        title: "রচনামূলক প্রশ্নের উত্তর লেখ।",
        marks: 4,
        total_question: 5,
        ans_limit: 3,
        q_style: "lb_rec"
    }, {
        en: "shobdartho",
        bn: "শব্দার্থ",
        title: "শব্দের অর্থ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "শব্দার্থ"
        }
    }, {
        en: "bakko_gothon",
        bn: "বাক্য গঠন",
        title: "শব্দ দিয়ে বাক্য গঠন কর।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বাক্য"
        }
    }, {
        en: "gap",
        bn: "শুন্যস্থান",
        title: "সঠিক শব্দ বসিয়ে শূন্যস্থান পূরণ কর।",
        marks: 1,
        total_question: 5
    }, {
        en: "mcq",
        bn: "বহুনির্বাচনী",
        title: "সঠিক উত্তরটি উত্তরপত্রে লেখ।",
        marks: 1,
        total_question: 5,
        indexLabel: "Numeric"
    }, {
        en: "gender_change",
        bn: "লিঙ্গান্তর",
        title: "শব্দের লিঙ্গ পরিবর্তন করে লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "নরবাচক শব্দ",
            key2: "নারীবাচক শব্দ"
        }
    }, {
        en: "jukto_borno",
        bn: "যুক্তবর্ণ",
        title: "নিচের যুক্তবর্ণ ভেঙে লেখ এবং প্রতিটি যুক্তবর্ণ দিয়ে শব্দ তৈরী করো।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "যুক্তবর্ণ",
            key2: "বিভাজন, শব্দ"
        }
    }, {
        en: "biporit",
        bn: "বিপরীত শব্দ",
        title: "নিচের শব্দের একটি করে বিপরীত শব্দ লেখ।",
        marks: 1,
        total_question: 7,
        ans_limit: 5,
        separated: "comma",
        ans_display: {
            render: !1,
            key1: "প্রদত্ত শব্দ",
            key2: "বিপরীত শব্দ"
        }
    }, {
        en: "milkoron",
        bn: "মিলকরণ",
        title: "বাম পাশের শব্দের সাথে ডান পাশের শব্দ জোড়া দিয়ে নতুন শব্দ বানাই।",
        marks: 1,
        total_question: 5
    }, {
        en: "biram_chinno",
        bn: "বিরামচিহ্ন",
        title: "নিচের অনুচ্ছেদটির যথাস্থানে বিরামচিহ্ন বসিয়ে লেখ।",
        marks: 5,
        total_question: 1
    }, {
        en: "form_puron",
        bn: "ফরম পূরণ",
        title: "ফরম পূরণ",
        marks: 5,
        total_question: 1
    }, {
        en: "onnucched",
        bn: "অনুচ্ছেদ",
        title: "নিচের বিষয়ে অনুচ্ছেদ ১০০ শব্দের মধ্যে অনুচ্ছেদ লেখ।",
        marks: 10,
        total_question: 1
    }],
    eng5: [{
        en: "passage",
        bn: "Text/Passage",
        title: "Read the text and answer the questions 1, 2, 3 and 4.",
        marks: 0,
        total_question: 1,
        indexing: !1
    }, {
        en: "mcq",
        bn: "MCQ",
        title: "Choose the best answer from the following alternatives and write them in your answer script.",
        marks: 1,
        total_question: 5
    }, {
        en: "en_blanks_passage",
        bn: "Fill in the blank",
        title: "Fill in the blanks with the appropriate word from the box. Find the information in the text. There are extra words which you need not use",
        marks: 1,
        total_question: 5
    }, {
        en: "TF",
        bn: "True/False",
        title: "Write 'True' for correct statement or 'False' for incorrect statement:",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "ans_short_qus",
        bn: "Short Question",
        title: "Answer the following questions in a sentence or sentences:",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "short_composition",
        bn: "Short Composition",
        title: "Short composition",
        marks: 10,
        total_question: 1
    }, {
        en: "match_words",
        bn: "Match the words",
        title: "Match the words in Column A with their meanings in Column B.",
        marks: 2,
        total_question: 5
    }, {
        en: "match_info",
        bn: "Match the info (Col A / Col B)",
        title: "Match the information in Column A with the information in Column B.",
        marks: 1,
        total_question: 5
    }, {
        en: "rearrange",
        bn: "Rearrange",
        title: "Rearrange the given words in the correct order to make meaningful sentences.",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "wh",
        bn: "WH Question",
        title: "Make WH questions from the given sentences with Who, What, When, Where, Why, Which and How using the underlined word/words:",
        marks: 2,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "punctuation",
        bn: "Punctuation",
        title: "Rewrite using capital letters and punctuation marks.",
        marks: 1,
        total_question: 1,
        indexing: "list"
    }, {
        en: "correct_form_verbs",
        bn: "Correct form of verbs",
        title: "Rewrite the correct form of verbs in the brackets.",
        marks: 1,
        total_question: 10,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "en_short_qus",
        bn: "Short Qus(T11)",
        title: "Answer the questions below",
        marks: 1,
        total_question: 5,
        indexing: !1,
        ans_display: {
            render: "list"
        }
    }, {
        en: "en_blanks",
        bn: "Fill in the blanks",
        title: "Fill in the gaps by writing the related information so that the story makes sense.",
        marks: 1,
        total_question: 5,
        indexing: !1
    }, {
        en: "letter",
        bn: "Letter",
        title: "Letter Writing",
        marks: 10,
        total_question: 1
    }, {
        en: "form",
        bn: "Form",
        title: "Form",
        marks: 5,
        total_question: 1
    }],
    eng4: [{
        en: "passage",
        bn: "Text/Passage",
        title: "Read the text and answer the questions 1, 2, 3 and 4.",
        marks: 0,
        total_question: 1,
        indexing: !1
    }, {
        en: "mcq",
        bn: "MCQ",
        title: "Choose the best answer from the following alternatives and write them in your answer script.",
        marks: 1,
        total_question: 5
    }, {
        en: "en_blanks_passage",
        bn: "Fill in the blank",
        title: "Fill in the blanks with the appropriate word from the box. Find the information in the text. There are extra words which you need not use.",
        marks: 1,
        total_question: 5
    }, {
        en: "TF",
        bn: "True/False",
        title: "Write 'True' for correct statement or 'False' for incorrect statement:",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "ans_short_qus",
        bn: "Short Question",
        title: "Answer the questions in short.",
        marks: 3,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "short_composition",
        bn: "Short Composition",
        title: "Short composition",
        marks: 10,
        total_question: 1
    }, {
        en: "match_words",
        bn: "Match the words",
        title: "Match the words in Column A with their meanings in Column B.",
        marks: 2,
        total_question: 5
    }, {
        en: "punctuation",
        bn: "Punctuation",
        title: "Rewrite the sentence using punctuation and capital letters where necessary.",
        marks: 10,
        total_question: 1
    }, {
        en: "match_info",
        bn: "Match the info (Col A / Col B)",
        title: "Match the information in column A with the information in column B",
        marks: 2,
        total_question: 5
    }, {
        en: "qus_words",
        bn: "Question words from box..",
        title: "Write the question words from the box to complete the sentences.",
        marks: 2,
        total_question: 5
    }, {
        en: "correct_form_verbs",
        bn: "Correct form of verbs",
        title: "Rewrite the correct form of verbs in bracket.",
        marks: 1,
        total_question: 10,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "en_short_qus",
        bn: "Short Qus",
        title: "Answer the questions below",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "en_blanks_info_rel",
        bn: "Fill in the blank (info related)",
        title: "Fill in the gaps by writing the related information so that the story makes sense.",
        marks: 1,
        total_question: 5
    }, {
        en: "letter",
        bn: "Letter",
        title: "Letter Writing",
        marks: 1,
        total_question: 5
    }],
    eng3: [{
        en: "passage",
        bn: "Text/Passage",
        title: "Read the text and answer the questions 1, 2, 3 and 4.",
        marks: 0,
        total_question: 1,
        indexing: !1
    }, {
        en: "mcq",
        bn: "MCQ",
        title: "Choose the best answer from the following alternatives and write them in your answer script.",
        marks: 1,
        total_question: 5
    }, {
        en: "en_blanks_passage",
        bn: "Fill in the blank",
        title: "Fill in the gaps with the best word from the box. Find the information in the story.There are extra words which you need not use:",
        marks: 1,
        total_question: 5
    }, {
        en: "TF",
        bn: "True/False",
        title: "Read the following statements. Write 'T' if the statement is true and write 'F' if the statement is false.",
        marks: 1,
        total_question: 5,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "ans_short_qus",
        bn: "Short Question",
        title: "Answer the following questions in a sentence or sentences.",
        marks: 3,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "short_composition",
        bn: "Short Composition",
        title: "Write a short composition in five sentence.",
        marks: 10,
        total_question: 1
    }, {
        en: "num_to_words",
        bn: "Number in words",
        title: "Write the numbers in words",
        marks: 1,
        total_question: 12,
        ans_limit: 10,
        separated: "comma",
        ans_display: {
            render: "flex"
        }
    }, {
        en: "punctuation",
        bn: "Punctuation",
        title: "Rewrite the sentence using capital letters and punctuation marks where necessary.",
        marks: 10,
        total_question: 1
    }, {
        en: "match_info",
        bn: "Match the info (Col A / Col B)",
        title: "Match the cardinal number in column A with their ordinal number in column B.",
        marks: 2,
        total_question: 5
    }, {
        en: "rearrange_word",
        bn: "Rearrange words",
        title: "Arrange the following words to make them meaningful sentences.",
        marks: 2,
        total_question: 5,
        ans_display: {
            render: "list"
        }
    }, {
        en: "meaningful_sentence",
        bn: "Write meaningful sentence.",
        title: "Use the words from the table to write meaningful sentences.",
        marks: 1,
        total_question: 5
    }, {
        en: "correct_form_verbs",
        bn: "Correct form of verbs",
        title: "Complete the following sentences using the right form of verbs given in the brackets",
        marks: 1,
        total_question: 10,
        ans_display: {
            render: "flex"
        }
    }, {
        en: "match_req_res",
        bn: "Match request/response",
        title: "Match the requests (A) with suitable responses (B). Write the responses under the requests.",
        marks: 2,
        total_question: 5
    }]
}
  , be = {
    ...Object.fromEntries(Ot.map(s => [s, G.math])),
    ...Object.fromEntries(Lt.map(s => [s, G.biggan_somaj])),
    ...Object.fromEntries(Bt.map(s => [s, G.islam])),
    [F.class_5.bangla]: G.bangla5,
    [F.class_4.bangla]: G.bangla4,
    [F.class_3.bangla]: G.bangla3,
    [F.class_5.eng]: G.eng5,
    [F.class_4.eng]: G.eng4,
    [F.class_3.eng]: G.eng3
};
function Qt(s) {
    return be[s] || []
}
function zt(s, t) {
    const r = (be[s] || []).find(l => l.en === t);
    return r || null
}
function Te(s, t, a) {
    const r = be[s || []] || [];
    return t.reduce( (l, c) => {
        const i = r.find(n => n.en === c.type);
        if (!i)
            return l + 1;
        const o = a && i.britti ? i.britti.marks : i.marks;
        return l + o
    }
    , 0)
}
const Ht = ({questions: s, controlPanelConfig: t, typeInfo: a}) => {
    const r = t.version === "EN"
      , l = [...s].map(n => n.solution).sort( () => Math.random() - .5).concat(["Extra 1", "Extra 2"])
      , [c,i] = k.useState(l)
      , o = n => {
        i(b => b.filter( (m, d) => d !== n))
    }
    ;
    return e.jsxs("div", {
        children: [e.jsxs("table", {
            className: "w-full border-collapse border border-gray-300",
            children: [e.jsx("thead", {
                children: e.jsxs("tr", {
                    className: "text-center",
                    children: [e.jsx("th", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: r ? "Column A" : "বাম পাশ"
                    }), e.jsx("th", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: r ? "Column B" : "ডান পাশ"
                    })]
                })
            }), e.jsxs("tbody", {
                children: [s.map( (n, b) => e.jsxs("tr", {
                    className: "hover:bg-gray-100",
                    children: [e.jsx("td", {
                        contentEditable: !0,
                        className: `p-2 ${t.duplicateCheck && n.duplicate ? "text-red-500" : ""}`,
                        children: e.jsxs("div", {
                            className: "flex gap-1 items-baseline",
                            children: [e.jsx(he, {
                                index: b,
                                typeInfo: a,
                                controlPanelConfig: t
                            }), e.jsxs("div", {
                                className: "w-full",
                                children: [e.jsx("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: n.question
                                    }
                                }), e.jsx(Y, {
                                    children: e.jsxs("span", {
                                        className: "float-right inline-flex flex-wrap items-center justify-end",
                                        children: [t.star && (n == null ? void 0 : n.star) && e.jsx(ie, {
                                            star: n == null ? void 0 : n.star
                                        }), t.details && e.jsx(ue, {
                                            pec: n == null ? void 0 : n.pec
                                        })]
                                    })
                                })]
                            })]
                        })
                    }), e.jsx("td", {
                        contentEditable: !0,
                        className: "p-2",
                        children: e.jsxs("div", {
                            className: "flex gap-1 items-baseline",
                            children: [r && e.jsxs("span", {
                                children: [K(b + 1), "."]
                            }), e.jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: c[b]
                                }
                            })]
                        })
                    })]
                }, n._id)), c.slice(s.length).map( (n, b) => {
                    const m = s.length + b;
                    return e.jsxs("tr", {
                        className: "group hover:bg-gray-100 relative",
                        children: [e.jsx("td", {
                            contentEditable: !0,
                            className: "border border-gray-300 p-2"
                        }), e.jsxs("td", {
                            contentEditable: !0,
                            className: "border border-gray-300 p-2 relative",
                            children: [e.jsxs("div", {
                                className: "flex gap-1 items-baseline",
                                children: [r && e.jsxs("span", {
                                    children: [K(m + 1), "."]
                                }), e.jsx("span", {
                                    children: n
                                })]
                            }), e.jsx("button", {
                                onClick: () => o(m),
                                className: `print:hidden absolute right-2 top-1/2 -translate-y-1/2 
                 text-red-500 hover:text-red-700 font-bold`,
                                children: "✖"
                            })]
                        })]
                    }, `extra-${m}`)
                }
                )]
            })]
        }), t.answer_sheet && e.jsxs("div", {
            className: "my-2",
            children: [e.jsx("p", {
                className: "font-bold",
                children: r ? "Answer:" : "উত্তর:"
            }), e.jsx("div", {
                children: s.map( (n, b) => e.jsxs("div", {
                    contentEditable: !0,
                    children: [e.jsxs("span", {
                        children: [ee(b, a), ". "]
                    }), e.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: n.question
                        }
                    }), e.jsx("span", {
                        className: "font-bold ml-1",
                        dangerouslySetInnerHTML: {
                            __html: n.solution
                        }
                    })]
                }, n._id))
            })]
        })]
    })
}
  , Wt = ({questions: s, typeInfo: t}) => {
    const {config: a, deleteQuestion: r} = W()
      , l = a.version === "EN"
      , c = [...s.map(i => i.solution)].sort( () => Math.random() - .5);
    return c.sort( () => Math.random() - .5),
    c.push("Extra 1", "Extra 2"),
    e.jsxs("div", {
        children: [l && e.jsx("div", {
            className: "flex flex-wrap gap-0.5 mb-1",
            children: c.map( (i, o) => e.jsx("div", {
                className: "border px-2 py-0.5 border-black",
                contentEditable: !0,
                children: e.jsx("p", {
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })
            }, o))
        }), s.map( (i, o) => {
            const n = a.duplicateCheck && i.duplicate;
            return e.jsxs("div", {
                contentEditable: !0,
                className: `relative group flex gap-1 items-baseline ${n ? "text-red-500" : ""}`,
                children: [e.jsxs("div", {
                    className: "absolute group-hover:flex bg-gray-200 w-full justify-end gap-2 hidden p-0.5 -top-7 right-0",
                    children: [e.jsx("div", {
                        onClick: b => {
                            b.stopPropagation(),
                            r(i._id)
                        }
                        ,
                        className: "flex items-center bg-gray-100 hover:bg-red-500 p-1 px-2 text-gray-400 hover:text-white rounded cursor-pointer z-10",
                        children: e.jsx(Xe, {})
                    }), e.jsxs("div", {
                        className: "flex items-center p-1 gap-1.5  bg-gray-100 hover:bg-primary-400  hover:text-white rounded cursor-pointer z-10",
                        children: [e.jsx(P, {}), "Exchange"]
                    })]
                }), e.jsx(he, {
                    index: o,
                    typeInfo: t,
                    controlPanelConfig: a
                }), e.jsxs("div", {
                    className: "w-full",
                    children: [e.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: i.question
                        }
                    }), e.jsx(Y, {
                        children: e.jsxs("span", {
                            className: "float-right inline-flex flex-wrap items-center justify-end",
                            children: [a.star && (i == null ? void 0 : i.star) && e.jsx(ie, {
                                star: i == null ? void 0 : i.star
                            }), a.details && e.jsx(ue, {
                                pec: i == null ? void 0 : i.pec
                            })]
                        })
                    })]
                })]
            }, i._id)
        }
        ), a.answer_sheet && e.jsxs("div", {
            className: "flex items-baseline border border-gray-500 p-0.5 px-1 my-1",
            children: [e.jsx("span", {
                className: "font-bold mr-1",
                children: l ? "Answer:" : "উত্তর:"
            }), e.jsx("div", {
                className: "flex gap-x-2 flex-wrap",
                children: s.map( (i, o) => e.jsxs("div", {
                    contentEditable: !0,
                    children: [e.jsxs("span", {
                        children: [ee(o, t), ". "]
                    }), e.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: i.solution
                        }
                    })]
                }, i._id))
            })]
        })]
    })
}
  , Gt = ({questions: s, typeInfo: t}) => {
    var a, r;
    return e.jsx("div", {
        children: e.jsxs("table", {
            className: "w-full border-collapse border border-gray-300",
            children: [e.jsx("thead", {
                children: e.jsxs("tr", {
                    className: "text-center",
                    children: [e.jsx("th", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: (a = t == null ? void 0 : t.ans_display) == null ? void 0 : a.key1
                    }), e.jsx("th", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: (r = t == null ? void 0 : t.ans_display) == null ? void 0 : r.key2
                    })]
                })
            }), e.jsx("tbody", {
                children: s.map( (l, c) => e.jsxs("tr", {
                    className: "hover:bg-gray-100",
                    children: [e.jsx("td", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: e.jsx("span", {
                            className: "mx-1.5",
                            dangerouslySetInnerHTML: {
                                __html: l.question
                            }
                        })
                    }), e.jsx("td", {
                        contentEditable: !0,
                        className: "border border-gray-300 p-2",
                        children: e.jsx("span", {
                            className: "mx-1.5",
                            dangerouslySetInnerHTML: {
                                __html: l.solution
                            }
                        })
                    })]
                }, l._id))
            })]
        })
    })
}
  , Dt = ({questions: s, typeInfo: t}) => e.jsxs("div", {
    className: "my-2",
    children: [e.jsx("p", {
        className: "font-bold",
        children: "Answer:"
    }), e.jsx("div", {
        className: "flex flex-col gap-1",
        children: s.map( (a, r) => e.jsxs("div", {
            contentEditable: !0,
            className: "pl-2",
            children: [e.jsxs("span", {
                className: "font-bold",
                children: [e.jsxs("span", {
                    children: [ee(r, t), " "]
                }), " )", " "]
            }), e.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: a.solution
                }
            })]
        }, a._id))
    })]
})
  , Ut = ({questions: s, controlPanelConfig: t, typeInfo: a}) => e.jsxs("div", {
    className: "flex items-baseline border border-gray-500 p-0.5 px-1 my-1",
    children: [e.jsx("span", {
        className: "font-bold mr-1",
        children: t.version == "EN" ? "Answer:" : "উত্তর:"
    }), e.jsx("div", {
        className: "flex gap-x-1 flex-wrap",
        children: s.map( (r, l) => e.jsxs("div", {
            contentEditable: !0,
            className: "px-1",
            children: [e.jsx("span", {
                className: "font-bold",
                children: e.jsxs("span", {
                    children: [ee(l, a), ". "]
                })
            }), e.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: r.solution
                }
            })]
        }, r._id))
    })]
})
  , It = ({type: s, groupedQuestion: t, controlPanelConfig: a, questions: r, setQuestions: l, q_set: c, qsetInfo: i, i: o}) => {
    var w, f;
    oe(p => {
        var j;
        return (j = p.questionSettings) == null ? void 0 : j.typeSection
    }
    );
    const n = {
        false: Gt,
        list: Dt,
        flex: Ut
    }
      , [b,m] = k.useState()
      , d = zt((w = i == null ? void 0 : i.subjectId[0]) == null ? void 0 : w._id, s)
      , _ = (d == null ? void 0 : d.separated) === "comma" && !a.answer_sheet || ((f = d == null ? void 0 : d.ans_display) == null ? void 0 : f.render) === !1 && a.answer_sheet
      , h = p => {
        var j;
        return (d == null ? void 0 : d.separated) === "comma" && !a.answer_sheet && p !== (t == null ? void 0 : t.length) - 1 || a.answer_sheet && ((j = d == null ? void 0 : d.ans_display) == null ? void 0 : j.render) === !1 && p !== (t == null ? void 0 : t.length) - 1
    }
    ;
    return e.jsxs("div", {
        children: [(a.editingMode || b) && e.jsx("div", {
            className: `${b ? "font-bold" : "print:hidden bg-gray-50"} py-1 text-center cursor-text`,
            contentEditable: !0,
            suppressContentEditableWarning: !0,
            onInput: p => m(p.currentTarget.textContent),
            children: "+ Add Text"
        }), (t == null ? void 0 : t.length) > 0 && e.jsxs("div", {
            className: "bg-white mb-2 border-white border-solid hover:border-dashed hover:border-gray-300 rounded",
            children: [e.jsx("div", {
                children: e.jsxs("div", {
                    className: "flex gap-1.5 items-baseline font-bold mb-0.5",
                    children: [e.jsxs("p", {
                        contentEditable: !0,
                        children: [a.version === "EN" ? String(o + 1).padStart(2, "0") : S(String(o + 1).padStart(2, "0")), a.version === "EN" ? "." : "।"]
                    }), e.jsx("div", {
                        className: "relative w-full",
                        children: e.jsxs("p", {
                            className: "m-0",
                            children: [e.jsx("span", {
                                contentEditable: !0,
                                children: d == null ? void 0 : d.title
                            }), a.isFullMarksQuestion.enabled && e.jsx("span", {
                                className: "font-normal",
                                contentEditable: !0,
                                children: ( () => {
                                    var x, g;
                                    const p = (x = a.isFullMarksQuestion) == null ? void 0 : x.britti
                                      , j = p ? (g = d == null ? void 0 : d.britti) == null ? void 0 : g.total_question : d == null ? void 0 : d.ans_limit;
                                    return j ? a.version === "EN" ? p ? `(${j} Questions)` : `(Any ${j})` : p ? `${S(j)}টি` : `(যেকোনো ${S(j)}টি)` : null
                                }
                                )()
                            }), !a.sheet.enabled && d && e.jsx("span", {
                                className: "float-right font-normal",
                                contentEditable: !0,
                                children: ( () => {
                                    var j, x;
                                    const p = (j = a.isFullMarksQuestion) != null && j.britti ? ((x = d.britti) == null ? void 0 : x.marks) ?? d.marks : d.marks;
                                    return a.version === "EN" ? `${t.length} x ${p} = ${t.length * p}` : `${S(t.length)} x ${S(p)} = ${S(t.length * p)}`
                                }
                                )()
                            })]
                        })
                    })]
                })
            }), ( () => {
                var j, x;
                const p = (j = a.isFullMarksQuestion) != null && j.britti ? ((x = d == null ? void 0 : d.britti) == null ? void 0 : x.total_question) ?? (d == null ? void 0 : d.total_question) : d == null ? void 0 : d.total_question;
                return p !== t.length && a.isFullMarksQuestion.enabled && e.jsx("div", {
                    className: "bg-red-100 p-2 rounded text-red-800 print:hidden",
                    children: p > t.length ? e.jsxs("span", {
                        children: ["** মোট ", S(p), "টি প্রশ্ন রাখতে হবে। আরও", " ", S(p - t.length), "টি প্রশ্ন যোগ করুন।"]
                    }) : e.jsxs("span", {
                        children: ["** মোট ", S(p), "টি প্রশ্ন রাখতে হবে।", " ", S(t.length - p), "টি প্রশ্ন কমাতে হবে।"]
                    })
                })
            }
            )(), e.jsx("div", {
                className: s !== "cq" ? "md:flex gap-2 print:flex" : "",
                children: e.jsxs("div", {
                    className: `relative flex-1 ${s !== "cq" ? "print:w-1/2" : ""}`,
                    children: [e.jsx("div", {
                        className: `ml-[26px] ${_ ? "flex gap-x-1 flex-wrap" : ""}`,
                        children: ["bam_dan", "milkoron", "match_words", "match_info", "match_req_res"].includes(d == null ? void 0 : d.en) ? e.jsx(Ht, {
                            questions: t,
                            controlPanelConfig: a,
                            typeInfo: d
                        }) : ["gap", "shuddho_osuddho", "en_blanks_passage"].includes(d == null ? void 0 : d.en) ? e.jsx(Wt, {
                            questions: t,
                            controlPanelConfig: a,
                            typeInfo: d
                        }) : t.map( (p, j) => e.jsxs("div", {
                            className: _ ? "flex" : "mb-0.5",
                            children: [e.jsx(Rt, {
                                qsetInfo: i,
                                cq: p,
                                i: j,
                                q_set: c,
                                setQuestions: l,
                                questions: r,
                                typeInfo: d
                            }), h(j) && ", "]
                        }, p._id))
                    }), a.answer_sheet && ( () => {
                        var x;
                        const p = (x = d == null ? void 0 : d.ans_display) == null ? void 0 : x.render
                          , j = n[p];
                        return j ? e.jsx("div", {
                            className: "ml-[26px] my-2",
                            children: e.jsx(j, {
                                questions: t,
                                controlPanelConfig: a,
                                typeInfo: d
                            })
                        }) : null
                    }
                    )()]
                })
            })]
        }, s)]
    })
}
  , Oe = ({subjectId: s, questions: t, setQuestions: a, controlPanelConfig: r, q_set: l, qsetInfo: c}) => {
    var _;
    const [i,o] = k.useState([])
      , n = k.useMemo( () => d(t), [t])
      , b = k.useMemo( () => Qt(s), [s])
      , m = b.map(h => h.en);
    k.useEffect( () => {
        var p;
        if (!t.length)
            return;
        const h = Object.keys(n)
          , w = j => j.sort( (x, g) => {
            const v = m.indexOf(x)
              , q = m.indexOf(g);
            return v !== -1 && q !== -1 ? v - q : v !== -1 ? -1 : q !== -1 ? 1 : 0
        }
        );
        let f;
        (p = r.isFullMarksQuestion) != null && p.britti && h.every(x => {
            var g, v;
            return ((v = (g = b.find(q => q.en === x)) == null ? void 0 : g.britti) == null ? void 0 : v.sl) != null
        }
        ) ? f = h.map(x => {
            const g = b.find(v => v.en === x);
            return {
                key: x,
                sl: g.britti.sl
            }
        }
        ).sort( (x, g) => x.sl - g.sl).map(x => x.key) : f = w(h),
        o(f)
    }
    , [t, (_ = r.isFullMarksQuestion) == null ? void 0 : _.britti, b]);
    function d(h) {
        return h.reduce( (w, f) => {
            const p = ["tg", "practice", "example", "extra", "assessment_preparation"].includes(f.type) ? "others" : f.type
              , j = ft(f.type);
            return w[p] || (w[p] = {
                title: j,
                questions: []
            }),
            w[p].questions.push(f),
            w
        }
        , {})
    }
    return e.jsxs("div", {
        className: "",
        children: [r.isFullMarksQuestion.enabled && e.jsx("div", {
            className: "bg-yellow-100 p-2 text-sm rounded mb-1 print:hidden",
            children: b.length !== i.length && ( () => {
                const w = b.map(f => f.en).filter(f => !i.includes(f));
                return w.length > 0 ? e.jsxs("div", {
                    className: "text-center",
                    children: [e.jsx("p", {
                        className: "font-semibold mb-1",
                        children: "⚠️ নিচের প্রশ্ন টাইপগুলো যুক্ত করা হয়নি।"
                    }), e.jsx("ul", {
                        className: "list-disc list-inside text-red-600",
                        children: w.map(f => {
                            const p = b.find(j => j.en === f);
                            return e.jsxs("li", {
                                children: [e.jsx("span", {
                                    className: "font-medium",
                                    children: (p == null ? void 0 : p.bn) || f
                                }), " "]
                            }, f)
                        }
                        )
                    }), e.jsx("p", {
                        children: "উপরের টাইপগুলো অ্যাড করুন ।"
                    }), e.jsx("p", {
                        className: "text-xs md:text-sm italic text-gray-700",
                        children: "Note: This notice is for on-screen reference only and will not appear in the printed or downloaded document."
                    })]
                }) : null
            }
            )()
        }), e.jsx("div", {
            className: `relative flex-1 columns-1 ${r.column == 1 ? "lg:columns-1 print:columns-1" : r.column == 2 ? "lg:columns-2 print:columns-2" : "lg:columns-3 print:columns-3"}`,
            style: {
                columnRule: r.divider ? "1px solid rgba(0, 0, 0, 0.2)" : "none"
            },
            children: i.map( (h, w) => {
                var p;
                const f = (p = n[h]) == null ? void 0 : p.questions;
                return e.jsx(It, {
                    type: h,
                    groupedQuestion: f,
                    q_set: l,
                    i: w,
                    controlPanelConfig: r,
                    setQuestions: a,
                    questions: t,
                    qsetInfo: c
                }, h)
            }
            )
        })]
    })
}
  , Vt = ({questions: s, setQuestions: t, controlPanelConfig: a, q_set: r, qsetInfo: l}) => {
    console.log(l);
    const c = s.reduce( (i, o) => (i[o.subjectId] || (i[o.subjectId] = []),
    i[o.subjectId].push(o),
    i), {});
    return e.jsx("div", {
        className: "space-y-8",
        children: Object.entries(c).map( ([i,o]) => {
            var m;
            const n = (m = l == null ? void 0 : l.subjectId) == null ? void 0 : m.find(d => d._id === i)
              , b = (n == null ? void 0 : n.name) || "Unknown Subject";
            return e.jsxs("div", {
                className: "mb-6",
                children: [e.jsx("div", {
                    className: "text-center mb-3 print:mb-1",
                    children: e.jsx("h2", {
                        className: "text-lg font-semibold text-gray-800 print:text-base border-b border-gray-400 inline-block px-4 pb-1",
                        contentEditable: !0,
                        children: b
                    })
                }), e.jsx(Oe, {
                    subjectId: i,
                    questions: o,
                    setQuestions: t,
                    controlPanelConfig: a,
                    q_set: r,
                    qsetInfo: l
                })]
            }, i)
        }
        )
    })
}
  , Yt = ({questions: s, setQuestions: t, controlPanelConfig: a, q_set: r, qsetInfo: l}) => {
    var c;
    return ((c = l == null ? void 0 : l.subjectId) == null ? void 0 : c.length) === 1 ? e.jsx(Oe, {
        q_set: r,
        controlPanelConfig: a,
        setQuestions: t,
        questions: s,
        qsetInfo: l
    }) : e.jsx(Vt, {
        q_set: r,
        controlPanelConfig: a,
        setQuestions: t,
        questions: s,
        qsetInfo: l
    })
}
  , Le = ({institute: s, controlPanelConfig: t}) => {
    var r, l, c, i;
    const a = [];
    return t.includeAddress.place && ((r = s == null ? void 0 : s.address) != null && r.place) && a.push(s.address.place),
    t.includeAddress.upazilla && ((l = s == null ? void 0 : s.address) != null && l.upazilla) && a.push(kt(s.address.upazilla)),
    t.includeAddress.district && ((c = s == null ? void 0 : s.address) != null && c.district) && a.push(wt(s.address.district)),
    t.includeAddress.board && ((i = s == null ? void 0 : s.address) != null && i.board) && a.push(vt(s.address.board)),
    e.jsx("div", {
        className: "text-center flex flex-wrap justify-center gap-0.5",
        contentEditable: !0,
        children: a.length > 0 && e.jsx("div", {
            children: a.join(", ")
        })
    })
}
  , Jt = ({controlPanelConfig: s, classInfo: t, institute: a}) => {
    var i, o, n, b, m;
    const {userInfo: r} = oe(d => d.auth)
      , [l,c] = k.useState();
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "items-start border-b mb-1 w-full border-gray-400 py-2 relative overflow-hidden",
            style: {
                backgroundColor: s.sheet.colored ? s.sheet.bgColor || "#f3f4f6" : void 0,
                color: s.sheet.colored ? s.sheet.textColor || "#000" : void 0
            },
            children: [s.ribbon.enabled && e.jsx("p", {
                className: "ribbon-x",
                contentEditable: !0,
                children: "সেরা ২০০ প্রশ্ন"
            }), e.jsx("h1", {
                className: "text-xl font-bold text-center",
                children: a == null ? void 0 : a.name
            }), s.includeAddress.enabled && e.jsx(Le, {
                institute: a,
                controlPanelConfig: s
            }), e.jsxs("div", {
                className: "relative flex justify-center items-center text-center flex-col w-full",
                children: [e.jsx("div", {
                    className: "absolute right-2 top-0",
                    children: s.sheet.date && e.jsxs("p", {
                        contentEditable: s.editingMode,
                        children: ["Date:", " ", e.jsx("span", {
                            className: "font-normal",
                            children: qt(Date.now()).format("MMM DD, YYYY")
                        })]
                    })
                }), e.jsx("div", {
                    className: "absolute left-2 top-0",
                    children: s.sheet.lectureNo && e.jsxs("p", {
                        contentEditable: s.editingMode,
                        children: ["লেকচার নম্বরঃ ", e.jsx("span", {
                            className: "font-normal",
                            children: "১"
                        })]
                    })
                }), e.jsxs("div", {
                    className: "w-full",
                    children: [e.jsx("p", {
                        contentEditable: s.editingMode,
                        className: "text-lg",
                        children: (i = t == null ? void 0 : t.classId) == null ? void 0 : i.name
                    }), ((o = t == null ? void 0 : t.subjectId) == null ? void 0 : o.length) == 1 && e.jsx("p", {
                        contentEditable: s.editingMode,
                        children: (n = t == null ? void 0 : t.subjectId[0]) == null ? void 0 : n.name
                    }), ((b = t == null ? void 0 : t.chapterId) == null ? void 0 : b.length) == 1 && e.jsx("p", {
                        contentEditable: s.editingMode,
                        children: (m = t == null ? void 0 : t.chapterId[0]) == null ? void 0 : m.name
                    }), s.sheet.instructorName && e.jsxs("div", {
                        className: "w-full",
                        children: [e.jsxs("p", {
                            contentEditable: s.editingMode,
                            className: "text-lg",
                            children: ["ইন্সট্রাক্টর:", " ", e.jsx("span", {
                                className: "font-normal",
                                children: r == null ? void 0 : r.name
                            })]
                        }), s.sheet.instructorProfile && e.jsx(e.Fragment, {
                            children: e.jsx("div", {
                                className: `${l ? "" : "print:hidden bg-gray-50 bg-gray-200"} text-center cursor-text w-full `,
                                contentEditable: !0,
                                suppressContentEditableWarning: !0,
                                onInput: d => c(d.currentTarget.textContent),
                                children: "+ Write Your Profile Here"
                            })
                        })]
                    })]
                })]
            }), e.jsx("div", {
                children: s.sheet.topic && e.jsx("div", {
                    contentEditable: s.editingMode,
                    className: "text-center mb-1",
                    children: e.jsxs("p", {
                        children: ["লেকচার টপিক: ", t == null ? void 0 : t.title]
                    })
                })
            })]
        }), e.jsx("div", {
            className: "border-b mb-1 border-gray-400"
        })]
    })
}
  , Zt = ({short: s, controlPanelConfig: t, questions: a, setQuestions: r, i: l, qsetInfo: c, q_set: i, totalQuestion: o}) => {
    const n = s
      , [b,m] = k.useState(!1)
      , d = t.version
      , _ = async (f, p) => {
        var j, x;
        try {
            m(!0);
            const g = await U( () => I({
                url: "/academic/exchange-question-in-set",
                method: "POST",
                data: {
                    q_set: i,
                    questionId: p,
                    sector: "academic",
                    type: "cq",
                    classId: c.classId._id
                }
            }));
            g.status == 200 && g.data.exchangedQuestion && r(v => {
                const q = [...v];
                return q.splice(f, 1, g.data.exchangedQuestion),
                q
            }
            ),
            m(!1)
        } catch (g) {
            m(!1),
            V.error(((x = (j = g == null ? void 0 : g.response) == null ? void 0 : j.data) == null ? void 0 : x.message) || "Error while processing exchange")
        }
    }
      , h = d === "EN" ? o > 1 ? `${de(l)}.` : null : l < 9 ? `০${S(l + 1)}.` : `${S(l + 1)}.`
      , w = t.duplicateCheck && n.duplicate;
    return e.jsxs("div", {
        className: `${b && "opacity-60 bg-gray-100"}  relative bg-white rounded group select-none`,
        children: [b && e.jsx("div", {
            className: "absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2",
            children: e.jsxs("svg", {
                "aria-hidden": "true",
                className: "inline w-10 h-10  text-gray-300 animate-spin fill-primary-900",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }), e.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })]
            })
        }), t.editingMode && c.type != "combine" && e.jsxs("div", {
            className: "flex gap-2 print:hidden justify-end  py-1",
            children: [e.jsx("div", {
                onClick: () => r(a.filter(f => f._id != n._id)),
                className: "flex items-center bg-gray-100 hover:bg-red-500 p-1 px-2 text-gray-400 hover:text-white rounded cursor-pointer z-10",
                children: e.jsx(le, {})
            }), e.jsxs("div", {
                disabled: b,
                onClick: () => _(l, n._id),
                className: "flex items-center py-1 px-2 gap-1.5  bg-gray-100 hover:bg-primary-500  hover:text-white rounded cursor-pointer z-10",
                children: [e.jsx(P, {}), "Exchange"]
            })]
        }), e.jsxs("div", {
            className: "hover:bg-gray-100",
            children: [e.jsxs("div", {
                className: "flex items-baseline",
                children: [e.jsx("span", {
                    className: `bangla-bold ${h ? "pr-2" : ""}`,
                    contentEditable: !0,
                    children: h
                }), e.jsxs("div", {
                    className: "flex flex-wrap justify-between items-center w-full",
                    children: [e.jsx("div", {
                        contentEditable: !0,
                        className: ` ${w && "text-red-500"} w-full mb-[1px]`,
                        dangerouslySetInnerHTML: {
                            __html: n.question
                        }
                    }), t.details && e.jsx(me, {
                        question: n
                    })]
                })]
            }), t.answer_sheet && (n == null ? void 0 : n.answer) && e.jsxs("div", {
                children: [e.jsxs("span", {
                    className: "font-bold",
                    children: [" ", d == "EN" ? "Ans:" : "উত্তর:", " "]
                }), " ", e.jsx("span", {
                    contentEditable: !0,
                    dangerouslySetInnerHTML: {
                        __html: n.answer
                    }
                })]
            })]
        })]
    })
}
  , xe = [{
    en: "_9_gap_",
    bn: "Gap Filling",
    title: "Fill in the blanks with the words from the box. You may need to change the forms of some of the words.",
    marks: 10,
    total_question: 1
}, {
    en: "_9_substitution_table",
    bn: "Substitution Table",
    title: "Make five sentences using parts of sentences from each column of the table below.",
    marks: 5,
    total_question: 1
}, {
    en: "_9_right_form_of_verbs",
    bn: "Right Forms of Verbs",
    title: "Complete the following text with right forms of the verbs given in the box.",
    marks: 10,
    total_question: 1
}, {
    en: "_9_changing_sentence",
    bn: "Changing Sentence",
    title: "Change the sentence according to the directions.",
    marks: 10,
    total_question: 1
}, {
    en: "_9_tag_q",
    bn: "Tag Question",
    title: "Make tag question of these statements.",
    marks: 5,
    total_question: 1
}, {
    en: "_9_suffix_prefix",
    bn: "Suffix/Prefix",
    title: "Complete the following passage adding suffixes, prefixes or the both to the root words give in the parenthesis:",
    marks: 5,
    total_question: 1
}, {
    en: "_9_prepositon",
    bn: "Preposition",
    title: "Fill in the blanks with suitable prepositions.",
    marks: 5,
    total_question: 1
}, {
    en: "_9_connectors",
    bn: "Connectors",
    title: "Complete the passage using suitable connectors.",
    marks: 5,
    total_question: 1
}, {
    en: "_9_punctuation",
    bn: "Punctuation",
    title: "Use capitals and punctuation marks where necessary in the following text.",
    marks: 5,
    total_question: 1
}, {
    en: "_9_paragraph",
    bn: "Paragraph",
    title: "Paragraph Writing.",
    marks: 10,
    total_question: 1
}, {
    en: "_9_letter",
    bn: "Letter/Application",
    title: "Letter/Application Writing",
    marks: 10,
    total_question: 1
}, {
    en: "_9_short_composition",
    bn: "Short Composition",
    title: "Composition Writing.",
    marks: 20,
    total_question: 1
}]
  , Kt = {
    en: "_9_seen_pasg_1",
    bn: "Seen Passage",
    title: "Read the text and answer the questions 1, 2 & 3.",
    marks: 0,
    total_question: 1
}
  , Xt = {
    en: "en_mcq",
    bn: "MCQ",
    title: "Choose the correct answer to each question from the alternatives given and write the corresponding number of the answers in your answer script.",
    marks: 1,
    total_question: 7
}
  , Ct = {
    en: "ans_qus",
    bn: "Answering Questions",
    title: "Give short answers to the following questions.",
    marks: 2,
    total_question: 5
}
  , Pt = {
    en: "_9_gap_filling_1st",
    bn: "Gap Filling",
    title: "Read the following text and fill in each gap with a suitable word based on the information of the text.",
    marks: 5,
    total_question: 1
}
  , es = {
    en: "_9_unseen_pasg",
    bn: "Unseen Passage",
    title: "Read the text and answer the questions 4 & 5.",
    marks: 0,
    total_question: 1
}
  , ts = {
    en: "information_transfer",
    bn: "Information Transfer",
    title: "Complete the table below with information from the passage.",
    marks: 5,
    total_question: 1
}
  , ss = {
    en: "summary",
    bn: "Writing Summary",
    title: "Summary Writing",
    marks: 10,
    total_question: 1
}
  , as = {
    en: "_9_matching",
    bn: "Matching",
    title: "Match the parts of sentences given in column 'A', 'B' and column 'C' to write five complete sentences.",
    marks: 5,
    total_question: 1
}
  , rs = {
    en: "_9_rearrange",
    bn: "Rearraging sentences",
    title: "Put the following parts of the story in correct order to rewrite the whole story.",
    marks: 8,
    total_question: 1
}
  , ns = {
    en: "_9ans_qus_from_poems",
    bn: "Ans Qus from Poems",
    title: "Answer the following questions from the poems.",
    marks: 2,
    total_question: 5
}
  , ls = {
    en: "_9ans_qus_from_stories",
    bn: "Ans Qus from Stories",
    title: "Answer the following questions from the stories.",
    marks: 2,
    total_question: 5
}
  , is = {
    en: "_9_completing_stories",
    bn: "Completing Stories",
    title: "Read the opening of a story below and add at least ten new sentences to complete the story.",
    marks: 15,
    total_question: 1
}
  , ds = {
    en: "dialogue",
    bn: "Dialogue",
    title: "Dialogue Writing",
    marks: 15,
    total_question: 1
}
  , pe = [Kt, Xt, Ct, Pt, es, ts, ss, as, rs, ns, ls, is, ds]
  , cs = {
    en: "seen_pasg_1",
    bn: "Seen Passage 1",
    title: "Read the text and answer the questions 1 & 2.",
    marks: 0,
    total_question: 1
}
  , os = {
    en: "en_mcq",
    bn: "MCQ",
    title: "Choose the correct answer to each question from the alternatives given and write the corresponding number of the answers in your answer script.",
    marks: 1,
    total_question: 7
}
  , ms = {
    en: "ans_qus",
    bn: "Answering Questions",
    title: "Give short answers to the following questions.",
    marks: 2,
    total_question: 5
}
  , hs = {
    en: "seen_pasg_2",
    bn: "Seen Passage 2",
    title: "Read the text and answer the questions 3 & 4.",
    marks: 0,
    total_question: 1
}
  , us = {
    en: "gap_filling_1st",
    bn: "Gap Filling",
    title: "Read the following text and fill in each gap with a suitable word based on the information of the text.",
    marks: 5,
    total_question: 1
}
  , bs = {
    en: "vocabulary",
    bn: "Vocabulary (Synonyms & Antonyms)",
    title: "Read the above passage again and write the synonyms and antonyms of the words as directed below:",
    marks: 1,
    total_question: 5
}
  , xs = {
    en: "unseen_pasg",
    bn: "Unseen Passage",
    title: "Read the text and answer the questions 5, 6 & 7.",
    marks: 0,
    total_question: 1
}
  , ps = {
    en: "information_transfer",
    bn: "Information Transfer",
    title: "Complete the table below with information from the passage.",
    marks: 5,
    total_question: 1
}
  , fs = {
    en: "tf",
    bn: "True/False",
    title: "Now read the following statements. Write (T) in your answer script if the statement is true. Write (F) if the statement is false. If false, write the correct answer.",
    marks: 1,
    total_question: 5
}
  , gs = {
    en: "summary",
    bn: "Writing Summary",
    title: "Summary Writing",
    marks: 10,
    total_question: 1
}
  , js = {
    en: "matching",
    bn: "Matching",
    title: "Match the parts of sentences given in column 'A' and column 'B' to write five complete sentences.",
    marks: 1,
    total_question: 5
}
  , _s = {
    en: "rearrange",
    bn: "Rearraging sentences",
    title: "Rearrange the following sentences in correct order in your answer script. You do not need to reproduce the sentences in your script. Only the corresponding numbers of the sentences need to be wrritten.",
    marks: 8,
    total_question: 1
}
  , ys = {
    en: "ans_qus_from_poems",
    bn: "Ans Qus from Poems",
    title: "Answer the following questions from the poems of your text book.",
    marks: 2,
    total_question: 5
}
  , Ns = {
    en: "completing_stories",
    bn: "Completing Stories",
    title: "Read the opening of a story below and complete it in 10 sentences.",
    marks: 10,
    total_question: 1
}
  , ks = {
    en: "paragraph_writing",
    bn: "Paragraph",
    title: "Paragraph Writing",
    marks: 10,
    total_question: 1
}
  , ws = {
    en: "dialogue",
    bn: "Dialogue",
    title: "Dialogue Writing",
    marks: 10,
    total_question: 1
}
  , vs = {
    en: "indn_parts_speech",
    bn: "Parts of Speech",
    title: "Identify the parts of speech of the underlined words in the following passage.",
    marks: 5,
    total_question: 1
}
  , qs = {
    en: "narration",
    bn: "Narration",
    title: "Change the following passage/sentence into indirect speech.",
    marks: 5,
    total_question: 1
}
  , Be = {
    en: "gap",
    bn: "Gap Filling",
    title: "Fill in the blanks with the words from the box. You may need to change the forms of some of the words.",
    marks: 5,
    total_question: 1
}
  , Qe = {
    en: "substitution_table",
    bn: "Substitution Table",
    title: "Make five sentences using parts of sentences from each column of the table below.",
    marks: 5,
    total_question: 1
}
  , ze = {
    en: "right_form_of_verbs",
    bn: "Right Forms of Verbs",
    title: "Complete the following text with right forms of the verbs given in the box.",
    marks: 5,
    total_question: 1
}
  , He = {
    en: "changing_sentence",
    bn: "Changing Sentence",
    title: "Change the sentence according to the directions.",
    marks: 5,
    total_question: 1
}
  , We = {
    en: "punctuation",
    bn: "Punctuation",
    title: "Use capitals and punctuation marks where necessary in the following text.",
    marks: 5,
    total_question: 1
}
  , Ge = {
    en: "letter",
    bn: "Letter/Application",
    title: "Letter/Application Writing",
    marks: 8,
    total_question: 1
}
  , De = {
    en: "short_composition",
    bn: "Short Composition",
    title: "Composition Writing.",
    marks: 12,
    total_question: 1
}
  , Z = [cs, os, ms, hs, us, bs, xs, ps, fs, gs, js, _s, ys, Ns, ks, ws]
  , fe = [vs, Be, Qe, ze, He, We, Ge, De]
  , X = [Be, Qe, ze, qs, He, We, Ge, De]
  , Ue = {
    6: "67c45bf5c1abeffd5e2306a5",
    7: "67c45b59c1abeffd5e230377",
    8: "67c456d3c1abeffd5e22f09b"
}
  , Ie = {
    6: "67c45bfdc1abeffd5e2306ca",
    7: "67c45b60c1abeffd5e2303e5",
    8: "67c456e7c1abeffd5e22f14c"
}
  , se = {
    6: "67c45c15c1abeffd5e230734",
    7: "67c45b77c1abeffd5e23044a",
    8: "67c456fbc1abeffd5e22f1c2",
    9: "67498c13f540fe4caa27bfdc"
}
  , ae = {
    6: "67c45c09c1abeffd5e230716",
    7: "67c45b6cc1abeffd5e230415",
    8: "67c456f1c1abeffd5e22f1ac",
    9: "67498c06f540fe4caa27bfd5"
}
  , Es = "67457b462415487576bad097"
  , Ss = "67457b562415487576bad0a0"
  , Ts = [{
    en: "knowledge",
    bn: "জ্ঞান",
    color: "bg-green-500"
}, {
    en: "comprehension",
    bn: "অনুধাবন",
    color: "bg-blue-600"
}, {
    en: "application",
    bn: "প্রয়োগ",
    color: "bg-yellow-500"
}, {
    en: "skills",
    bn: "দক্ষতা",
    color: "bg-red-500"
}, {
    en: "easy",
    bn: "সহজ",
    color: "bg-teal-500",
    math: !0
}, {
    en: "medium",
    bn: "মধ্যম",
    color: "bg-yellow-500",
    math: !0
}, {
    en: "hard",
    bn: "কঠিন",
    color: "bg-red-500",
    math: !0
}]
  , ba = s => {
    const t = Ts.find(a => a.en === s);
    return t ? t.bn : s
}
  , As = (...s) => {
    const t = new Map;
    return s.flat().forEach( ({en: a, bn: r}) => {
        t.has(a) || t.set(a, {
            en: a,
            bn: r
        })
    }
    ),
    Array.from(t.values())
}
  , C = {
    ban1st: [{
        en: "bornona_mulok",
        bn: "বর্ণনামূলক প্রশ্ন",
        title: "বর্ণনামূলক প্রশ্নগুলোর উত্তর দাও :",
        marks: 10,
        total_question: 4,
        ans_limit: 2
    }],
    banglaSecond: [{
        en: "onudhabn_dokkhota",
        bn: "অনুধাবন দক্ষতা",
        title: "অনুধাবন দক্ষতা / অনুচ্ছেদ রচনা করো :",
        marks: 5,
        total_question: 1,
        ans_limit: 1
    }, {
        en: "potro_rochona",
        bn: "পত্র রচনা",
        title: "পত্র রচনা : ",
        marks: 5,
        total_question: 2,
        ans_limit: 1
    }, {
        en: "sarangsho",
        bn: "সারাংশ/সারমর্ম",
        title: "সারাংশ/সারমর্ম লেখ :",
        marks: 5,
        total_question: 2,
        ans_limit: 1
    }, {
        en: "vabsomprosaron",
        bn: "ভাব-সমপ্রসারণ",
        title: "ভাব-সমপ্রসারণ কর :",
        marks: 5,
        total_question: 2,
        ans_limit: 1
    }, {
        en: "rochona",
        bn: "রচনা",
        title: "নিচের বিষয়ে প্রবন্ধ রচনা কর :",
        marks: 15,
        total_question: 3,
        ans_limit: 1
    }]
}
  , Ve = [{
    en: "mcq",
    bn: "বহুনির্বাচনি",
    title: "বহুনির্বাচনি অংশ: ",
    marks: 1
}, {
    en: "short",
    bn: "সংক্ষিপ্ত প্রশ্ন",
    title: "সংক্ষিপ্ত প্রশ্ন গুলোর উত্তর লিখ: ",
    marks: 2
}, {
    en: "cq",
    bn: "সৃজনশীল",
    title: "সৃজনশীল অংশ:",
    marks: 10
}]
  , ge = [{
    en: "onudcched_rochona",
    bn: "অনুচ্ছেদ রচনা",
    title: "অনুধাবন দক্ষতা / অনুচ্ছেদ রচনা করো :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "potro",
    bn: "পত্র/দরখাস্ত",
    title: "পত্র/দরখাস্ত :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "sarangsho9_10",
    bn: "সারাংশ/সারমর্ম",
    title: "সারাংশ/সারমর্ম লেখ :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "vabsomprosaron9_10",
    bn: "ভাব-সমপ্রসারণ",
    title: "ভাব-সমপ্রসারণ কর :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "protibedon",
    bn: "প্রতিবেদন প্রণয়ন",
    title: "নিচের বিষয়ে প্রতিবেদন রচনা কর :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "onubad",
    bn: "বাংলায় অনুবাদ",
    title: "অনুবাদ কর :",
    marks: 10,
    total_question: 2,
    ans_limit: 1
}, {
    en: "rochona9_10",
    bn: "রচনা",
    title: "নিচের বিষয়ে প্রবন্ধ রচনা কর :",
    marks: 20,
    total_question: 3,
    ans_limit: 1
}]
  , R = s => s.map( ({en: t, bn: a, title: r, marks: l, total_question: c}) => ({
    en: t,
    bn: a,
    title: r,
    marks: l,
    total_question: c
}))
  , ne = {
    [ae[6]]: R(Z),
    [se[6]]: R(fe),
    [ae[7]]: R(Z),
    [se[7]]: R(X),
    [ae[8]]: R(Z),
    [se[8]]: R(X),
    [ae[9]]: pe,
    [se[9]]: xe,
    [Es]: [{
        en: "bornona_mulok",
        bn: "বর্ণনামূলক প্রশ্ন"
    }],
    [Ss]: ge,
    [_t]: [{
        en: "arthik_biboroni",
        bn: "আর্থিক বিবরণী",
        title: "আর্থিক বিবরণী প্রস্তুত কর: ",
        marks: 20
    }]
}
  , xa = s => {
    if (console.log(s),
    ne[s])
        return ne[s];
    const t = new Set(Object.values(Ue))
      , a = new Set(Object.values(Ie));
    return t.has(s) ? R(C.ban1st) : a.has(s) ? R(C.banglaSecond) : []
}
;
function Ms(s) {
    if (!Array.isArray(s) || s.length === 0)
        return [];
    const t = new Set(Object.values(Ue))
      , a = new Set(Object.values(Ie))
      , r = [];
    for (const c of s) {
        const i = typeof c == "string" ? c : c._id;
        if (i) {
            if (ne[i]) {
                r.push(...ne[i] || []);
                continue
            }
            if (t.has(i)) {
                r.push(...R(C.ban1st));
                continue
            }
            if (a.has(i)) {
                r.push(...R(C.banglaSecond));
                continue
            }
        }
    }
    const l = Array.from(new Map(r.map(c => [c.en, c])).values());
    return Ve.concat(l)
}
const Fs = [...Ve, ...Object.values(C).flat(), ...R(ge), ...R(xe), ...R(fe), ...R(X), ...R(X), ...R(Z), ...R(pe)]
  , $s = Fs.reduce( (s, t) => (t.en && t.marks && (s[t.en] = t.marks),
s), {});
function Ae(s) {
    return s.reduce( (a, r) => a + ($s[r.type] || 0), 0)
}
const Rs = As(ge, xe, fe, X, Z, pe)
  , Os = {
    short: "সংক্ষিপ্ত",
    onudhabn_dokkhota: "অনুধাবন দক্ষতা",
    onudcched_rochona: "অনুচ্ছেদ রচনা",
    potro_rochona: "পত্র রচনা",
    potro: "পত্র",
    sarangsho: "সারাংশ",
    sarangsho9_10: "সারাংশ",
    sarmormo: "সারমর্ম",
    vabsomprosaron: "ভাব-সমপ্রসারণ",
    vabsomprosaron9_10: "ভাব-সমপ্রসারণ",
    onubad: "বাংলায় অনুবাদ",
    protibedon: "প্রতিবেদন",
    rochona: "রচনা",
    rochona9_10: "রচনা",
    bornona_mulok: "বর্ণনামূলক",
    arthik_biboroni: "আর্থিক বিবরণী"
}
  , Ls = Object.fromEntries([...Object.entries(Os), ...Rs.map(s => [s.en, s.bn])])
  , pa = s => Ls[s] || ""
  , Bs = ({questions: s, setQuestions: t, controlPanelConfig: a, qsetInfo: r, q_set: l}) => {
    const c = a.version
      , i = k.useMemo( () => s.reduce( (m, d) => {
        const {type: _} = d;
        return m[_] || (m[_] = []),
        m[_].push(d),
        m
    }
    , {}), [s])
      , o = Ms(r == null ? void 0 : r.subjectId);
    let n = 1;
    const b = (m, d) => m === "cq" ? d.map( (_, h) => e.jsx(Re, {
        cq: _,
        i: h,
        q_set: l,
        controlPanelConfig: a,
        setQuestions: t,
        questions: _,
        qsetInfo: r
    }, _._id || h)) : m === "mcq" ? d.map( (_, h) => e.jsx(ce, {
        mcq: _,
        i: h,
        q_set: l,
        qsetInfo: r,
        controlPanelConfig: a,
        setQuestions: t,
        questions: d,
        typeInfo: m
    }, _._id || h)) : m === "en_mcq" ? d.map( (_, h) => e.jsx(ce, {
        mcq: _,
        i: h,
        q_set: l,
        qsetInfo: r,
        controlPanelConfig: a,
        setQuestions: t,
        questions: d,
        typeInfo: m
    }, _._id || h)) : d.map( (_, h) => e.jsx(Zt, {
        short: _,
        i: h,
        q_set: l,
        controlPanelConfig: a,
        setQuestions: t,
        questions: _,
        qsetInfo: r,
        totalQuestion: d.length,
        typeInfo: m
    }, _._id || h));
    return e.jsx("div", {
        className: `relative flex-1 columns-1 ${a.column == 1 ? "lg:columns-1 print:columns-1" : a.column == 2 ? "lg:columns-2 print:columns-2" : "lg:columns-3 print:columns-3"}`,
        style: {
            columnRule: a.divider ? "1px solid rgba(0, 0, 0, 0.2)" : "none"
        },
        children: o == null ? void 0 : o.map(m => {
            const {en: d, title: _, marks: h} = m
              , w = i[d];
            if (!w || w.length === 0)
                return null;
            let f = null;
            return h > 0 && (f = n++),
            e.jsx("div", {
                children: e.jsxs("div", {
                    className: "flex items-baseline mb-2.5",
                    children: [c === "EN" && h > 0 && e.jsxs("span", {
                        className: "mr-1 font-bold",
                        contentEditable: !0,
                        children: [f <= 9 ? `0${f}` : f, "."]
                    }), e.jsxs("div", {
                        className: "w-full",
                        children: [e.jsxs("div", {
                            className: "mb-1.5",
                            contentEditable: !0,
                            children: [e.jsx("span", {
                                className: "font-bold",
                                children: _
                            }), !a.sheet.enabled && h > 0 && e.jsx("p", {
                                className: "float-right font-normal",
                                children: c === "EN" ? `${w.length} x ${h} = ${w.length * h}` : `${S(w.length)} x ${S(h)} = ${S(w.length * h)}`
                            })]
                        }), e.jsx("div", {
                            children: b(d, w)
                        })]
                    })]
                })
            }, d)
        }
        )
    })
}
  , Qs = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = () => {
        t({
            ...s,
            isFullMarksQuestion: {
                ...s.isFullMarksQuestion,
                enabled: !s.isFullMarksQuestion.enabled
            }
        })
    }
    ;
    return e.jsxs("div", {
        className: " p-2 relative bg-gray-100 border rounded  my-2",
        children: [e.jsxs("div", {
            className: " rounded flex justify-between items-center my-1",
            children: [e.jsx("span", {
                className: "bangla",
                children: "স্ট্যান্ডার্ড চেকার"
            }), e.jsxs("label", {
                className: "relative inline-flex items-center cursor-pointer",
                children: [e.jsx("input", {
                    type: "checkbox",
                    className: "sr-only peer",
                    checked: s.isFullMarksQuestion.enabled,
                    onChange: a
                }), e.jsx("div", {
                    className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                })]
            })]
        }), e.jsx("div", {
            className: "bg-white text- md:text-sm text-center",
            children: "প্রান্তিক মূল্যায়নের প্রশ্ন তৈরীর জন্য এই অপশনটা চালু করে দিন"
        })]
    })
}
  , zs = ({children: s, classId: t}) => Object.values(Tt).includes(t) ? e.jsx(e.Fragment, {
    children: s
}) : null
  , Hs = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                enabled: !s.sheet.enabled
            },
            star: !s.star
        })
    }
      , r = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                instructorName: !s.sheet.instructorName
            }
        })
    }
      , l = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                instructorProfile: !s.sheet.instructorProfile
            }
        })
    }
      , c = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                date: !s.sheet.date
            }
        })
    }
      , i = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                lectureNo: !s.sheet.lectureNo
            }
        })
    }
      , o = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                topic: !s.sheet.topic
            }
        })
    }
      , n = () => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                colored: !s.sheet.colored
            }
        })
    }
      , b = (m, d) => {
        t({
            ...s,
            sheet: {
                ...s.sheet,
                [d]: m.target.value
            }
        })
    }
    ;
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "relative bg-gray-100 p-2 rounded flex justify-between items-center my-1",
            children: [e.jsx("span", {
                className: "bangla",
                children: "শীট"
            }), e.jsxs("label", {
                className: "relative inline-flex items-center cursor-pointer",
                children: [e.jsx("input", {
                    type: "checkbox",
                    className: "sr-only peer",
                    checked: s.sheet.enabled,
                    onChange: a
                }), e.jsx("div", {
                    className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                })]
            })]
        }), s.sheet.enabled && e.jsxs("div", {
            className: "p-1 border border-dashed border-indigo-600 rounded-lg",
            children: [e.jsx("p", {
                className: "bg-gray-50 text-center text-sm p-0.5",
                children: "শীট তৈরীর সেটিংসগুলো অটোমেটিক সেভ থাকবে সবসময়।"
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "ইন্সট্রাক্টর নেম"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.instructorName,
                        onChange: r
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "ইন্সট্রাক্টর প্রোফাইল"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.instructorProfile,
                        onChange: l
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "লেকচার নম্বর"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.lectureNo,
                        onChange: i
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "লেকচার টপিক"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.topic,
                        onChange: o
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "তারিখ"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.date,
                        onChange: c
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: " রঙ্গিন ব্যাকগ্রাউন্ড "
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.sheet.colored,
                        onChange: n
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), s.sheet.colored && e.jsxs("div", {
                children: [e.jsxs("div", {
                    className: "px-2 pt-2 rounded my-1 border",
                    children: [e.jsx("input", {
                        type: "color",
                        value: s.sheet.bgColor,
                        onChange: m => {
                            b(m, "bgColor")
                        }
                        ,
                        className: "h-10 cursor-pointer w-full"
                    }), e.jsxs("p", {
                        className: "text-center flex gap-2 items-center justify-center",
                        children: ["ব্যাকগ্রাউন্ড কালার পছন্দ করুন", " ", e.jsx(qe, {
                            className: "text-gray-600"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "px-2 pt-2 rounded my-1 border",
                    children: [e.jsx("input", {
                        type: "color",
                        value: s.sheet.textColor,
                        onChange: m => {
                            b(m, "textColor")
                        }
                        ,
                        className: "h-10 cursor-pointer w-full"
                    }), e.jsxs("p", {
                        className: "text-center flex gap-2 items-center justify-center",
                        children: ["টেক্সট কালার পছন্দ করুন", " ", e.jsx(qe, {
                            className: "text-gray-600"
                        })]
                    })]
                })]
            })]
        })]
    })
}
  , Ws = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = r => {
        t({
            ...s,
            option_style: r
        })
    }
    ;
    return e.jsxs("div", {
        className: "relative bg-gray-100 p-2 rounded my-1",
        children: [e.jsx("p", {
            className: "bangla mb-2",
            children: "অপশন স্টাইল"
        }), e.jsxs("div", {
            className: "flex gap-2",
            children: [e.jsx("div", {
                onClick: () => a("circle"),
                className: `p-1 flex-1 flex justify-center items-center cursor-pointer ${s.option_style === "circle" ? "bg-emerald-600" : "bg-white hover:bg-emerald-100"}`,
                children: e.jsx("div", {
                    className: "h-5 w-5 border border-gray-500 rounded-full bg-white"
                })
            }), e.jsx("div", {
                onClick: () => a("d_bracket"),
                className: `p-1 flex-1 flex justify-center items-center cursor-pointer ${s.option_style === "d_bracket" ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"}`,
                children: "( )"
            }), e.jsx("div", {
                onClick: () => a("dot"),
                className: `p-1 flex-1 flex justify-center items-center cursor-pointer ${s.option_style === "dot" ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"}`,
                children: "."
            }), e.jsx("div", {
                onClick: () => a("s_bracket"),
                className: `p-1 flex-1 flex justify-center items-center cursor-pointer ${s.option_style === "s_bracket" ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"}`,
                children: ")"
            })]
        })]
    })
}
  , Gs = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = () => {
        t({
            ...s,
            includeAddress: {
                ...s.includeAddress,
                enabled: !s.includeAddress.enabled
            }
        })
    }
      , r = () => {
        t({
            ...s,
            includeAddress: {
                ...s.includeAddress,
                place: !s.includeAddress.place
            }
        })
    }
      , l = () => {
        t({
            ...s,
            includeAddress: {
                ...s.includeAddress,
                upazilla: !s.includeAddress.upazilla
            }
        })
    }
      , c = () => {
        t({
            ...s,
            includeAddress: {
                ...s.includeAddress,
                district: !s.includeAddress.district
            }
        })
    }
      , i = () => {
        t({
            ...s,
            includeAddress: {
                ...s.includeAddress,
                board: !s.includeAddress.board
            }
        })
    }
    ;
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
            children: [e.jsx("span", {
                className: "bangla",
                children: "ঠিকানা"
            }), e.jsxs("label", {
                className: "relative inline-flex items-center cursor-pointer",
                children: [e.jsx("input", {
                    type: "checkbox",
                    className: "sr-only peer",
                    checked: s.includeAddress.enabled,
                    onChange: () => a()
                }), e.jsx("div", {
                    className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                })]
            })]
        }), s.includeAddress.enabled && e.jsxs("div", {
            className: "p-2 border border-dashed border-gray-400 rounded-lg",
            children: [e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "স্পেসিফিক ঠিকানা"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.includeAddress.place,
                        onChange: () => r()
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "উপজেলা"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.includeAddress.upazilla,
                        onChange: () => l()
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "জেলা"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.includeAddress.district,
                        onChange: () => c()
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "বিভাগ"
                }), e.jsxs("label", {
                    className: "relative inline-flex items-center cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        className: "sr-only peer",
                        checked: s.includeAddress.board,
                        onChange: () => i()
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-800"
                    })]
                })]
            })]
        })]
    })
}
  , Ds = ({controlPanelConfig: s, setControlPanelConfig: t, watermark: a, setWatermark: r}) => {
    const l = () => {
        t({
            ...s,
            watermark: {
                ...s.watermark,
                enabled: !s.watermark.enabled
            }
        })
    }
      , c = o => {
        t({
            ...s,
            watermark: {
                ...s.watermark,
                opacity: parseInt(o.target.value)
            }
        })
    }
      , i = o => {
        t({
            ...s,
            watermark: {
                ...s.watermark,
                size: parseInt(o.target.value)
            }
        })
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: "bg-gray-100  my-1  p-2",
            children: e.jsxs("div", {
                className: "rounded flex justify-between items-center",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "জলছাপ"
                }), e.jsxs("label", {
                    className: "relative inline-flex  items-center  cursor-pointer",
                    children: [e.jsx("input", {
                        type: "checkbox",
                        defaultValue: "",
                        className: "sr-only peer",
                        defaultChecked: "",
                        onChange: () => l()
                    }), e.jsx("div", {
                        className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                    })]
                })]
            })
        }), s.watermark.enabled && e.jsxs("div", {
            className: "p-2 border border-dashed border-gray-400 rounded-lg",
            children: [e.jsxs("div", {
                className: "mt-2 p-1 bg-gray-100 rounded flex justify-between items-center",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "Opacity"
                }), e.jsx("input", {
                    type: "range",
                    min: "10",
                    max: "50",
                    step: "5",
                    value: s.watermark.opacity,
                    onChange: c
                }), e.jsx("span", {
                    children: s.watermark.opacity
                })]
            }), e.jsxs("div", {
                className: "bg-gray-100 rounded flex justify-between items-center",
                children: [e.jsx("span", {
                    className: "bangla",
                    children: "Size"
                }), e.jsx("input", {
                    type: "range",
                    min: "15",
                    max: "50",
                    step: "5",
                    value: s.watermark.size,
                    onChange: i
                }), e.jsx("span", {
                    children: s.watermark.size
                })]
            }), e.jsx("textarea", {
                className: "mt-2",
                onChange: o => r(o.target.value),
                children: a
            })]
        })]
    })
}
  , Us = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = k.useRef()
      , r = {
        COL_2: 314,
        COL_3: 483,
        COL_4: 652
    }
      , l = () => {
        t({
            ...s,
            omr: {
                ...s.omr,
                enabled: !s.omr.enabled
            }
        })
    }
      , c = () => {
        let o = Number(a.current.value);
        t({
            ...s,
            omr: {
                ...s.omr,
                questions: o
            }
        })
    }
      , i = o => {
        let n = s.omr.width;
        o == 2 ? n = r.COL_2 : o == 3 ? n = r.COL_3 : o == 4 && (n = r.COL_4),
        t({
            ...s,
            omr: {
                ...s.omr,
                width: n,
                column: o
            }
        })
    }
    ;
    return e.jsxs("div", {
        children: [e.jsxs("div", {
            className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
            children: [e.jsx("span", {
                className: "bangla",
                children: "OMR সংযুক্ত"
            }), e.jsxs("label", {
                className: "relative inline-flex items-center cursor-pointer",
                children: [e.jsx("input", {
                    type: "checkbox",
                    className: "sr-only peer",
                    checked: s.omr.enabled,
                    onChange: () => l()
                }), e.jsx("div", {
                    className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                })]
            })]
        }), s.omr.enabled && e.jsxs("div", {
            className: "p-2 border border-dashed border-gray-400 rounded-lg",
            children: [e.jsxs("div", {
                className: "my-2",
                children: [e.jsx("p", {
                    children: "Number of Question"
                }), e.jsx("div", {
                    className: "flex gap-1 justify-evenly mt-2",
                    children: e.jsx("input", {
                        onChange: c,
                        ref: a,
                        type: "number",
                        max: 100,
                        min: 10,
                        defaultValue: s.omr.questions,
                        placeholder: "Total Question"
                    })
                }), e.jsx("p", {
                    className: "text-gray-500 text-sm italic mt-0.5",
                    children: "(Valid input 10 - 100)"
                })]
            }), e.jsxs("div", {
                className: "my-2",
                children: [e.jsx("p", {
                    children: "Column"
                }), e.jsxs("div", {
                    className: "flex gap-2 justify-center",
                    children: [e.jsx("div", {
                        onClick: () => i(2),
                        className: `${s.omr.column == 2 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-2 flex-1 cursor-pointer`,
                        children: e.jsxs("div", {
                            className: "flex justify-center gap-0.5 items-center",
                            children: [e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            })]
                        })
                    }), e.jsx("div", {
                        onClick: () => i(3),
                        className: `${s.omr.column == 3 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-2 flex-1 cursor-pointer`,
                        children: e.jsxs("div", {
                            className: "flex justify-center gap-0.5 items-center",
                            children: [e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            })]
                        })
                    }), e.jsx("div", {
                        onClick: () => i(4),
                        className: `${s.omr.column == 4 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-2 flex-1 cursor-pointer`,
                        children: e.jsxs("div", {
                            className: "flex justify-center gap-0.5 items-center",
                            children: [e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            }), e.jsx("div", {
                                className: "w-4 h-6 bg-gray-300"
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
;
const Is = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = [{
        label: "বাংলা",
        value: "Bangla"
    }, {
        label: "সোলাইমান লিপি",
        value: "SolaimanLipi"
    }, {
        label: "কালপুরুষ",
        value: "Kalpurush"
    }, {
        label: "Times New Roman",
        value: "roman"
    }];
    return e.jsx("div", {
        className: "bg-gray-100 my-1 p-2",
        children: e.jsxs("div", {
            className: "rounded  justify-between items-center",
            children: [e.jsx("p", {
                className: "bangla mb-1 text-center",
                children: "ফন্ট পরিবর্তন"
            }), e.jsx("select", {
                id: "font-selector",
                value: s.font,
                onChange: r => t({
                    ...s,
                    font: r.target.value
                }),
                children: a.map(r => e.jsx("option", {
                    value: r.value,
                    children: r.label
                }, r.value))
            })]
        })
    })
}
  , Vs = ({controlPanelConfig: s, setControlPanelConfig: t}) => {
    const a = [{
        icon: e.jsx(Ce, {}),
        value: "left"
    }, {
        icon: e.jsx(Pe, {}),
        value: "center"
    }, {
        icon: e.jsx(et, {}),
        value: "right"
    }, {
        icon: e.jsx(tt, {}),
        value: "justify"
    }]
      , r = l => {
        t(c => ({
            ...c,
            textAlign: l
        }))
    }
    ;
    return e.jsxs("div", {
        className: "bg-gray-100 p-1",
        children: [e.jsx("div", {
            className: "flex justify-between gap-2",
            children: e.jsx("p", {
                children: "টেক্সট এলাইনমেন্ট"
            })
        }), e.jsx("div", {
            className: "flex gap-2 py-1",
            children: a.map( ({icon: l, value: c}) => e.jsx("button", {
                onClick: () => r(c),
                className: `p-2 rounded ${s.textAlign === c ? "bg-emerald-600 text-white" : "bg-white text-gray-700"}`,
                title: c,
                children: l
            }, c))
        })]
    })
}
  , Ys = s => typeof s != "string" ? "" : (typeof decodeHtmlEntities == "function" && (s = decodeHtmlEntities(s)),
s.replace(/<[^>]*>/g, "").replace(/\u00A0|&nbsp;/g, " ").replace(/\s+/g, " ").replace(/\s+([।,\.!?;:])/g, "$1").trim().toLowerCase())
  , Js = s => {
    if (!Array.isArray(s))
        return [];
    const t = new Map
      , a = new Set;
    s.forEach(r => {
        if (!r || typeof r._id > "u" || typeof r.question != "string")
            return;
        const l = Ys(r.question);
        if (!l)
            return;
        const c = `${r.type || ""}__${l}`;
        t.has(c) ? t.get(c).push(r._id) : t.set(c, [r._id])
    }
    );
    for (const r of t.values())
        r.length > 1 && r.forEach(l => a.add(l));
    return Array.from(a)
}
  , Zs = () => {
    const {questions: s, setQuestions: t, config: a, setConfig: r} = W()
      , l = () => {
        const c = !a.duplicateCheck;
        if (r({
            ...a,
            duplicateCheck: c
        }),
        c) {
            const i = Js(s)
              , o = s.map(n => ({
                ...n,
                duplicate: i.includes(n._id)
            }));
            t(o)
        } else {
            const i = s.map( ({duplicate: o, ...n}) => n);
            t(i)
        }
    }
    ;
    return e.jsxs("div", {
        className: "p-1.5 bg-gray-100 rounded my-1 relative",
        children: [e.jsxs("div", {
            className: "flex justify-between items-center",
            children: [e.jsx("span", {
                className: "bangla font-medium flex items-center",
                children: "পুনরাবৃত্ত প্রশ্ন শনাক্ত"
            }), e.jsxs("label", {
                className: "relative inline-flex items-center cursor-pointer",
                children: [e.jsx("input", {
                    type: "checkbox",
                    className: "sr-only peer",
                    checked: a.duplicateCheck || !1,
                    onChange: l
                }), e.jsx("div", {
                    className: "w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-emerald-600 relative after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"
                })]
            })]
        }), e.jsx("div", {
            className: "text-sm bg-white mt-1 text-center",
            children: "একই প্রশ্ন একাধিকবার নির্বাচিত হলে সহজে শনাক্ত ও পরিবর্তন করা যাবে।"
        })]
    })
}
  , Ks = () => {
    const {config: s, setConfig: t} = W()
      , a = [{
        type: "auto",
        label: "Auto",
        icon: e.jsx(st, {
            size: 20
        })
    }, {
        type: "number",
        label: "Nmbr",
        icon: e.jsx(at, {
            size: 20
        })
    }, {
        type: "bn_letter",
        label: "BN",
        icon: e.jsx(rt, {
            size: 20
        })
    }, {
        type: "en_letter",
        label: "EN",
        icon: e.jsx(nt, {
            size: 20
        })
    }, {
        type: "roman",
        label: "Roman",
        icon: e.jsx(lt, {
            size: 20
        })
    }]
      , r = l => {
        t({
            ...s,
            sl: l
        })
    }
    ;
    return e.jsxs("div", {
        className: "relative bg-gray-100 p-2 rounded my-1",
        children: [e.jsx("p", {
            className: "bangla mb-2",
            children: " ক্রমিক "
        }), e.jsx("div", {
            className: "flex gap-1",
            children: a.map(l => e.jsxs("div", {
                onClick: () => r(l.type),
                className: `p-2 flex-1 flex flex-col justify-center items-center cursor-pointer rounded ${s.sl === l.type ? "bg-emerald-600 text-white" : "bg-white hover:bg-emerald-100"}`,
                children: [l.icon, e.jsx("span", {
                    className: "text-xs mt-1",
                    children: l.label
                })]
            }, l.type))
        })]
    })
}
  , Xs = [{
    key: "a4",
    label: "A4",
    width: 210,
    height: 297
}, {
    key: "letter",
    label: "Letter",
    width: 216,
    height: 279
}, {
    key: "legal",
    label: "Legal",
    width: 216,
    height: 356
}, {
    key: "a5",
    label: "A5",
    width: 148,
    height: 210
}]
  , Cs = ({isSidebarOpen: s, controlPanelConfig: t, setControlPanelConfig: a, handlePrintClick: r, classId: l, questions: c, originalQustion: i, setQuestions: o, watermark: n, setWatermark: b, setSetCode: m, setCode: d}) => {
    const [_,h] = k.useState("a4")
      , w = () => {
        t.editingMode && !window.confirm("All the changes may reset. Do you want to disable editing mode?") || a(N => ({
            ...N,
            editingMode: !N.editingMode
        }))
    }
    ;
    function f(N, y) {
        let A = N.slice()
          , M = p(y);
        for (let u = A.length - 1; u > 0; u--) {
            const B = Math.floor(M() * (u + 1));
            [A[u],A[B]] = [A[B], A[u]]
        }
        return A
    }
    function p(N) {
        return function() {
            N |= 0,
            N = N + 1831565813 | 0;
            let y = Math.imul(N ^ N >>> 15, 1 | N);
            return y ^= y + Math.imul(y ^ y >>> 7, 61 | y),
            ((y ^ y >>> 14) >>> 0) / 4294967296
        }
    }
    const j = () => {
        const N = ["ক", "খ", "গ", "ঘ", "ঙ", "চ"]
          , y = {
            ক: null,
            খ: 2,
            গ: 3,
            ঘ: 4,
            ঙ: 5,
            চ: 6
        }
          , M = (N.indexOf(d) + 1) % N.length
          , u = N[M]
          , B = y[u] ? f(i, y[u]) : i;
        m(u),
        o(B)
    }
    ;
    k.useEffect( () => {
        document.body.classList.add(_)
    }
    , []);
    const x = N => {
        h(N),
        document.body.classList.remove("a4", "letter", "legal", "a5"),
        document.body.classList.add(N)
    }
      , g = 60
      , v = 45
      , q = (N, y) => {
        const A = g / y;
        let M = N * A;
        if (M > v) {
            const u = v / M;
            return M = v,
            {
                width: M,
                height: y * A * u
            }
        }
        return {
            width: M,
            height: g
        }
    }
      , E = () => {
        a({
            ...t,
            isFullMarksQuestion: {
                ...t.isFullMarksQuestion,
                britti: !t.isFullMarksQuestion.britti
            }
        })
    }
    ;
    return e.jsx("div", {
        className: `${!s && "hidden  print:hidden"} select-none fixed top-0 right-0 z-[1000] overflow-y-auto lg:z-0 bg-white lg:bg-none lg:sticky lg:block lg:top-16 h-screen w-72 google-shadow print:hidden overflow-y-scroll sidebar`,
        children: e.jsx("div", {
            className: "relative overflow-hidden print:hidden",
            children: e.jsxs("div", {
                className: " bg-white backdrop-blur-lg p-2",
                children: [e.jsxs("h1", {
                    className: "py-2 flex items-center gap-2 justify-center rounded text-center bg-gray-50 mb-2 shadow",
                    children: [e.jsx(Me, {
                        className: "text-gray-500 text-sm"
                    }), " ", e.jsx("span", {
                        className: "text-lg",
                        children: "সেটিংস"
                    })]
                }), e.jsxs("button", {
                    onClick: r,
                    className: "hover:bg-primary-400 bg-primary-500 transition-all py-2 rounded w-full text-center text-white flex items-center gap-2 justify-center",
                    children: [e.jsx(Fe, {}), "ডাউনলোড"]
                }), e.jsxs(Y, {
                    children: [e.jsxs("div", {
                        className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-2",
                        children: [e.jsx("span", {
                            className: "bangla",
                            children: "Ribbon"
                        }), e.jsxs("label", {
                            className: "relative inline-flex items-center  cursor-pointer",
                            children: [e.jsx("input", {
                                type: "checkbox",
                                defaultValue: "",
                                className: "sr-only peer",
                                defaultChecked: "",
                                onChange: () => a({
                                    ...t,
                                    ribbon: {
                                        ...t.ribbon,
                                        enabled: !t.ribbon.enabled
                                    }
                                })
                            }), e.jsx("div", {
                                className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "bg-gray-100 p-2 rounded  flex justify-between items-center",
                        children: [e.jsx("span", {
                            className: "bangla",
                            children: "বৃত্তি পরীক্ষা"
                        }), e.jsxs("label", {
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [e.jsx("input", {
                                type: "checkbox",
                                className: "sr-only peer",
                                checked: t.isFullMarksQuestion.britti,
                                onChange: E
                            }), e.jsx("div", {
                                className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "my-4 ",
                    children: [e.jsx("p", {
                        className: "bg-emerald-50 p-2 font-bold border-t border-emerald-500",
                        children: "প্রশ্নে সংযুক্তি"
                    }), e.jsxs("div", {
                        children: [e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "উত্তরপত্র"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    defaultValue: "",
                                    className: "sr-only peer",
                                    defaultChecked: "",
                                    onChange: () => a({
                                        ...t,
                                        answer_sheet: !t.answer_sheet
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsx(Us, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "গুরুত্বপূর্ণ প্রশ্ন "
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    onChange: () => a({
                                        ...t,
                                        star: !t.star
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "প্রশ্নের তথ্য"
                            }), e.jsxs("label", {
                                className: "relative inline-flex  items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    defaultValue: "",
                                    className: "sr-only peer",
                                    defaultChecked: "",
                                    onChange: () => a({
                                        ...t,
                                        details: !t.details
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "relative rounded",
                            children: e.jsxs("div", {
                                className: "bg-gray-100 p-2 rounded flex justify-between items-center",
                                children: [e.jsx("span", {
                                    className: "bangla",
                                    children: "শিক্ষার্থীর তথ্য"
                                }), e.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [e.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        onChange: () => a({
                                            ...t,
                                            include_student_info: !t.include_student_info
                                        })
                                    }), e.jsx("div", {
                                        className: "w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                    })]
                                })]
                            })
                        }), e.jsx("div", {
                            className: "relative rounded mt-1",
                            children: e.jsxs("div", {
                                className: "bg-gray-100 p-2 rounded flex justify-between items-center",
                                children: [e.jsx("span", {
                                    className: "bangla",
                                    children: " প্রাপ্ত নম্বর ঘর "
                                }), e.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [e.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        onChange: () => a({
                                            ...t,
                                            include_marks_box: !t.include_marks_box
                                        })
                                    }), e.jsx("div", {
                                        className: "w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                    })]
                                })]
                            })
                        }), e.jsx("div", {
                            className: "relative rounded mt-1",
                            children: e.jsxs("div", {
                                className: "bg-gray-100 p-2 rounded flex justify-between items-center",
                                children: [e.jsx("span", {
                                    className: "bangla text-rose-500 font-bold animate-pulse",
                                    children: " বিষয় কোড "
                                }), e.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [e.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        onChange: () => a({
                                            ...t,
                                            include_subject_code: !t.include_subject_code
                                        })
                                    }), e.jsx("div", {
                                        className: "w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                    })]
                                })]
                            })
                        })]
                    })]
                }), e.jsxs("div", {
                    className: " my-5",
                    children: [e.jsx("p", {
                        className: "bg-emerald-50 p-2 font-bold border-t border-emerald-500",
                        children: "প্রশ্নের মেটাডাটা (হেডার)"
                    }), e.jsxs("div", {
                        children: [e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "শ্রেণির নাম"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    defaultChecked: "true",
                                    onChange: () => a({
                                        ...t,
                                        include_className: !t.include_className
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "বিষয়ের নাম"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    defaultChecked: "true",
                                    onChange: () => a({
                                        ...t,
                                        include_subjectName: !t.include_subjectName
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "অধ্যায়ের নাম"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    defaultChecked: "true",
                                    onChange: () => a({
                                        ...t,
                                        include_chapterName: !t.include_chapterName
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "সেট কোড "
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    defaultChecked: t.setCode,
                                    onChange: () => a({
                                        ...t,
                                        setCode: !t.setCode
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "প্রোগ্রাম/পরিক্ষার নাম"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    defaultValue: "",
                                    className: "sr-only peer",
                                    defaultChecked: "",
                                    onChange: () => a({
                                        ...t,
                                        includeTitle: !t.includeTitle
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "নির্দেশনা"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: t.instruction,
                                    onChange: () => a({
                                        ...t,
                                        instruction: !t.instruction
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: " my-5",
                    children: [e.jsx("p", {
                        className: "bg-emerald-50 p-2 font-bold border-t border-emerald-500",
                        children: "ডকুমেন্ট কাস্টমাইজেসন"
                    }), e.jsx(Y, {
                        children: e.jsx(Ks, {})
                    }), e.jsxs("div", {
                        children: [e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  my-1",
                            children: [e.jsxs("div", {
                                className: " flex justify-between items-center",
                                children: [e.jsx("span", {
                                    className: "bangla",
                                    children: " এডিটিং মোড "
                                }), e.jsxs("label", {
                                    className: "relative inline-flex items-center cursor-pointer",
                                    children: [e.jsx("input", {
                                        type: "checkbox",
                                        className: "sr-only peer",
                                        checked: t.editingMode,
                                        onChange: w
                                    }), e.jsx("div", {
                                        className: "w-11 h-6 bg-gray-200 rounded-full peer dark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                    })]
                                })]
                            }), t.editingMode && e.jsxs("div", {
                                className: "bg-yellow-50 border rounded border-yellow-500 mt-2 p-2",
                                children: [e.jsxs("p", {
                                    className: "text-yellow-600 text-sm font-bold text-center flex gap-1 justify-center items-center",
                                    children: [e.jsx($e, {
                                        className: "text-yellow-600"
                                    }), "এডিটিং মোড চালু রয়েছে"]
                                }), e.jsx("p", {
                                    className: "text-xs text-center",
                                    children: "যেকোনো লেখায় ক্লিক করে সহজেই সম্পাদনা করতে পারবেন।"
                                }), e.jsxs("p", {
                                    className: "text-yellow-600 text-sm font-bold text-center flex gap-1 justify-center items-center mt-2",
                                    children: [e.jsx(it, {
                                        className: "text-yellow-600"
                                    }), "সতর্কতা!"]
                                }), e.jsx("p", {
                                    className: "text-xs text-center",
                                    children: "এডিট স্থায়ী নয়, সম্পাদনার পর অবশ্যই ডাউনলোড করে সংরক্ষণ করুন।"
                                })]
                            })]
                        }), e.jsx(Vs, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsxs("div", {
                            className: "my-1",
                            children: [e.jsx("p", {
                                children: " পেপার সাইজ "
                            }), e.jsx("div", {
                                className: "grid grid-cols-4 gap-1.5",
                                children: Xs.map( ({key: N, label: y, width: A, height: M}) => {
                                    const {width: u, height: B} = q(A, M);
                                    return e.jsxs("div", {
                                        onClick: () => x(N),
                                        className: `flex-1 flex flex-col items-center justify-center cursor-pointer px-2 py-2 border rounded text-sm capitalize select-none ${_ === N ? "bg-emerald-50 border-emerald-500" : "border-gray-200 hover:bg-gray-200"}`,
                                        children: [e.jsx("div", {
                                            className: "mb-1 border shadow bg-white",
                                            style: {
                                                minWidth: u,
                                                minHeight: B
                                            }
                                        }), y]
                                    }, N)
                                }
                                )
                            })]
                        }), e.jsx(Ws, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsx(Is, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "ফন্ট সাইজ "
                            }), e.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [e.jsx("button", {
                                    onClick: () => a({
                                        ...t,
                                        font_size: t.font_size >= 11 ? t.font_size - 1 : 10
                                    }),
                                    className: "hover:bg-white px-2 rounded text-lg",
                                    children: "-"
                                }), e.jsx("p", {
                                    className: "border rounded p-0.5 px-1.5 bg-white",
                                    children: t.font_size
                                }), e.jsx("button", {
                                    onClick: () => a({
                                        ...t,
                                        font_size: t.font_size <= 20 ? t.font_size + 1 : 21
                                    }),
                                    className: "hover:bg-white px-2 rounded text-lg",
                                    children: "+"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "my-1",
                            children: [e.jsx("p", {
                                children: "কলাম"
                            }), e.jsxs("div", {
                                className: "flex gap-2 justify-center",
                                children: [e.jsx("div", {
                                    onClick: () => a({
                                        ...t,
                                        column: 1
                                    }),
                                    className: `${t.column == 1 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-3 flex-1 cursor-pointer`,
                                    children: e.jsx("div", {
                                        className: "flex justify-center gap-0.5 items-center",
                                        children: e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        })
                                    })
                                }), e.jsx("div", {
                                    onClick: () => a({
                                        ...t,
                                        column: 2
                                    }),
                                    className: `${t.column == 2 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-3 flex-1 cursor-pointer`,
                                    children: e.jsxs("div", {
                                        className: "flex justify-center gap-0.5 items-center",
                                        children: [e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        }), e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        })]
                                    })
                                }), e.jsx("div", {
                                    onClick: () => a({
                                        ...t,
                                        column: 3
                                    }),
                                    className: `${t.column == 3 ? "border border-black" : "border hover:border-gray-500"}  rounded py-2 px-3 flex-1 cursor-pointer`,
                                    children: e.jsxs("div", {
                                        className: "flex justify-center gap-0.5 items-center",
                                        children: [e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        }), e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        }), e.jsx("div", {
                                            className: "w-4 h-6 bg-gray-300"
                                        })]
                                    })
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-gray-100 p-2 rounded  flex justify-between items-center my-1",
                            children: [e.jsx("span", {
                                className: "bangla",
                                children: "কলাম ডিভাইডার"
                            }), e.jsxs("label", {
                                className: "relative inline-flex items-center  cursor-pointer",
                                children: [e.jsx("input", {
                                    type: "checkbox",
                                    defaultValue: "",
                                    className: "sr-only peer",
                                    defaultChecked: "true",
                                    onChange: () => a({
                                        ...t,
                                        divider: !t.divider
                                    })
                                }), e.jsx("div", {
                                    className: "w-11 h-6 bg-gray-200 rounded-full peerdark:peer-focus:ring-emerald-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"
                                })]
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "my-5",
                    children: [e.jsx("p", {
                        className: "bg-emerald-50 p-2 font-bold border-t border-emerald-500",
                        children: "সহায়ক টুলস"
                    }), e.jsxs("div", {
                        children: [e.jsx(zs, {
                            classId: l,
                            children: e.jsx(Qs, {
                                controlPanelConfig: t,
                                setControlPanelConfig: a
                            })
                        }), e.jsx(Zs, {}), e.jsx(Hs, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsx("div", {
                            onClick: j,
                            children: e.jsxs("div", {
                                whileTap: {
                                    scale: .9
                                },
                                className: "cursor-pointer bg-gray-100 hover:bg-emerald-600 hover:text-white flex justify-between items-center p-2 rounded my-1",
                                children: [e.jsx("p", {
                                    children: "শাফল (সেট কোড তৈরী) "
                                }), e.jsx(dt, {})]
                            })
                        })]
                    })]
                }), e.jsxs("div", {
                    className: " my-5",
                    children: [e.jsx("p", {
                        className: "bg-emerald-50 p-2 font-bold border-t border-emerald-500",
                        children: "ব্রান্ডিং"
                    }), e.jsxs("div", {
                        children: [e.jsx(Gs, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a
                        }), e.jsx(Ds, {
                            controlPanelConfig: t,
                            setControlPanelConfig: a,
                            watermark: n,
                            setWatermark: b
                        })]
                    })]
                }), e.jsx("div", {
                    className: "h-40"
                })]
            })
        })
    })
}
  , Ps = () => e.jsxs("div", {
    className: "grid grid-cols-12 overflow-hidden mb-1",
    children: [e.jsxs("div", {
        contentEditable: !0,
        className: "col-span-7 flex items-center  py-1.5 border-black",
        children: [e.jsx("span", {
            className: "bangla",
            children: "শিক্ষার্থীর নাম:"
        }), e.jsx("span", {
            className: "flex-1 border-b border-black border-dotted ml-2 h-5"
        })]
    }), e.jsxs("div", {
        contentEditable: !0,
        className: "col-span-3 flex items-center px-2 py-1.5  border-black",
        children: [e.jsx("span", {
            className: "bangla",
            children: "শাখা:"
        }), e.jsx("span", {
            className: "flex-1 border-b border-black border-dotted ml-2 h-5"
        })]
    }), e.jsxs("div", {
        contentEditable: !0,
        className: "col-span-2 flex items-center  py-1.5",
        children: [e.jsx("span", {
            className: "bangla",
            children: "রোল:"
        }), e.jsx("span", {
            className: "flex-1 border-b border-black border-dotted ml-2 h-5"
        })]
    })]
})
  , ea = ({subjectCode: s}) => s ? e.jsx("div", {
    className: "flex border-2 border-black font-bold",
    children: s.split("").map( (t, a) => e.jsx("div", {
        contentEditable: !0,
        className: `px-2 flex items-center justify-center ${a !== s.length - 1 ? "border-r-2 border-black" : ""}`,
        children: t
    }, a))
}) : null
  , ta = ct.lazy( () => ot( () => import("./AddFooter-a60da5d6.js"), ["assets/AddFooter-a60da5d6.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css"]))
  , Ye = k.createContext()
  , W = () => k.useContext(Ye)
  , sa = () => {
    var _e, ye, Ne, ke, we, ve;
    const s = mt()
      , [t,a] = k.useState(!1)
      , [r,l] = k.useState(!1)
      , [c,i] = k.useState(!1)
      , [o,n] = k.useState([])
      , [b,m] = k.useState(null)
      , [d,_] = k.useState([])
      , [h,w] = k.useState()
      , [f,p] = k.useState("ইপ্রশ্নব্যাংক ডট কম অফিশিয়াল")
      , [j,x] = k.useState("ক")
      , [g,v] = k.useState("ইপ্রশ্নব্যাংক ডট কম অফিশিয়াল")
      , [q] = ht()
      , E = q.get("q_set")
      , N = q.get("classId")
      , y = q.get("type");
    if (!E)
        return window.alert("Invlaid Set");
    if (!y)
        return window.alert("type is required");
    const A = {
        version: "BN",
        paper: "A4",
        font: "Bangla",
        textAlign: "justify",
        editingMode: !1,
        sl: "auto",
        sheet: {
            enabled: !1,
            date: !0,
            instructorName: !0,
            instructorProfile: !1,
            lectureNo: !0,
            topic: !1,
            colored: !0,
            bgColor: "#f3f4f6",
            textColor: "#000"
        },
        option_style: y == "mcq" ? "circle" : "d_bracket",
        details: !1,
        answer_sheet: !1,
        star: !1,
        includeTitle: !1,
        include_className: !0,
        include_subjectName: !0,
        include_chapterName: !0,
        include_student_info: !1,
        include_marks_box: !1,
        include_subject_code: !1,
        setCode: y === "mcq",
        font_size: 14,
        sl_sort: "COL",
        column: 2,
        divider: !0,
        instruction: !0,
        duplicateCheck: !1,
        watermark: {
            enabled: !1,
            size: 30,
            opacity: 20
        },
        omr: {
            enabled: !1,
            width: 652,
            column: 4,
            questions: 20
        },
        includeAddress: {
            enabled: !1,
            board: !1,
            district: !0,
            upazilla: !0,
            place: !0
        },
        isFullMarksQuestion: {
            enabled: !1,
            britti: !1
        },
        ribbon: {
            enabled: !1
        }
    }
      , M = JSON.parse(localStorage.getItem("sheetConfig")) || {}
      , [u,B] = k.useState({
        ...A,
        sheet: {
            ...A.sheet,
            ...M,
            enabled: q.get("pkg_type") == "suggesstion" || q.get("sheet") == "enabled"
        }
    });
    k.useEffect( () => {
        const {enabled: $, ...O} = u.sheet;
        localStorage.setItem("sheetConfig", JSON.stringify(O))
    }
    , [u.sheet]);
    const Je = async () => {
        var $, O, H, z, T, J;
        l(!0);
        try {
            const Q = await U( () => {
                var L;
                return I({
                    url: "/academic/add-more-question-checkpoint",
                    method: "POST",
                    data: {
                        q_set: E,
                        classId: (L = b == null ? void 0 : b.classId) == null ? void 0 : L._id
                    }
                })
            }
            );
            if (($ = Q == null ? void 0 : Q.data) != null && $.success && ((O = Q == null ? void 0 : Q.data) != null && O.checkpoint)) {
                let L = "";
                y === "primary" ? L = `/teacher/view-questions/primary?classId=${(H = b == null ? void 0 : b.classId) == null ? void 0 : H._id}&q_set=${E}` : L = `/teacher/view-questions?classId=${(z = b == null ? void 0 : b.classId) == null ? void 0 : z._id}&type=${y}&q_set=${E}`,
                s(L)
            }
        } catch (Q) {
            V.error(((J = (T = Q == null ? void 0 : Q.response) == null ? void 0 : T.data) == null ? void 0 : J.message) || "Something went wrong.")
        } finally {
            l(!1)
        }
    }
      , Ze = k.useCallback(async $ => {
        if (window.confirm("Are you sure to delete this question?"))
            try {
                const H = await U( () => {
                    var z;
                    return I({
                        url: "/academic/delete-question-from-set",
                        method: "POST",
                        data: {
                            q_set: E,
                            classId: (z = b == null ? void 0 : b.classId) == null ? void 0 : z._id,
                            questionId: $
                        }
                    })
                }
                );
                H.status == 200 && (V.success(H.data.message),
                _(d.filter(z => z._id != $)))
            } catch (H) {
                console.log(H)
            }
    }
    );
    k.useEffect( () => {
        (async () => {
            var O, H;
            try {
                a(!0);
                let z = `/academic/get-question-set?classId=${N}&q_set=${E}`;
                y == "primary" && (z = `/academic/primary/get-question-set?q_set=${E}`);
                const T = await U( () => I({
                    url: z,
                    method: "GET"
                }));
                if (T.status === 200) {
                    let J = T.data.qset.subjectId.length == 1 && gt(T.data.qset.subjectId[0]._id) ? "EN" : "BN"
                      , Q = {
                        classId: T.data.qset.classId,
                        subjectId: T.data.qset.subjectId,
                        chapterId: T.data.qset.chapterId,
                        title: T.data.qset.title
                    };
                    if (p(T.data.institute),
                    v(T.data.institute.name),
                    w(Q),
                    m({
                        classId: T.data.qset.classId,
                        subjectId: T.data.qset.subjectId,
                        type: T.data.qset.type,
                        instituteId: T.data.qset.instituteId,
                        plan: T.data.qset.plan,
                        payment_status: T.data.qset.payment_status
                    }),
                    B(L => ({
                        ...L,
                        version: J,
                        font: J === "EN" ? "roman" : "Bangla",
                        include_subjectName: T.data.qset.subjectId.length === 1,
                        include_chapterName: T.data.qset.chapterId.length === 1
                    })),
                    y == "primary") {
                        const L = (O = T.data.qset.questions) == null ? void 0 : O.map(D => ({
                            ...D,
                            question: Se(D.question)
                        }));
                        n(L),
                        _(L)
                    } else {
                        const L = (H = T.data.qset.academicQuestions) == null ? void 0 : H.map(D => ({
                            ...D,
                            question: Se(D.question)
                        }));
                        n(L),
                        _(L),
                        B(D => ({
                            ...D,
                            omr: {
                                ...D.omr,
                                questions: T.data.qset.academicQuestions.length < 10 ? 12 : T.data.qset.academicQuestions.length > 100 ? 100 : T.data.qset.academicQuestions.length
                            }
                        }))
                    }
                }
            } catch {} finally {
                a(!1)
            }
        }
        )()
    }
    , []);
    const je = () => {
        Ke(),
        window.print()
    }
      , Ke = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return k.useEffect( () => {
        const $ = O => {
            O.preventDefault(),
            O.returnValue = ""
        }
        ;
        return u.editingMode ? window.addEventListener("beforeunload", $) : window.removeEventListener("beforeunload", $),
        () => {
            window.removeEventListener("beforeunload", $)
        }
    }
    , [u.editingMode]),
    k.useEffect( () => {
        const $ = () => {
            At(d)
        }
        ;
        return window.addEventListener("afterprint", $),
        () => {
            window.removeEventListener("afterprint", $)
        }
    }
    , [d]),
    e.jsx(Ye.Provider, {
        value: {
            config: u,
            setConfig: B,
            questions: d,
            setQuestions: _,
            deleteQuestion: Ze
        },
        children: e.jsxs("div", {
            className: "table-bordered py-4 print:p-0 print:overflow-hidden bg-gray-100 min-h-[95vh] print:bg-white",
            children: [e.jsx(ut, {
                children: e.jsx("title", {
                    children: `
        ${u != null && u.answer_sheet ? "উত্তরপত্র - " : ""} 
        ${u != null && u.details ? "সোর্স - " : ""} 
        ${h == null ? void 0 : h.title}
        - ইপ্রশ্নব্যাংক.কম
        `
                })
            }), e.jsxs("div", {
                className: "bangla flex flex-col lg:flex-row justify-center  gap-5  print:gap-0 mx-4 print:mx-0",
                children: [e.jsxs(te.div, {
                    className: "print:hidden  flex gap-x-2 justify-between sticky top-12 lg:hidden  p-2 text-center z-10 bg-white",
                    children: [e.jsxs(te.button, {
                        whileTap: {
                            scale: .9
                        },
                        onClick: () => i(!c),
                        className: "flex justify-center gap-1 items-center border py-1 px-2 bg-white rounded",
                        children: [e.jsx(Me, {
                            className: "text-gray-600 text-xs"
                        }), e.jsx("span", {
                            children: "সেটিংস"
                        })]
                    }), e.jsxs(te.button, {
                        whileTap: {
                            scale: .9
                        },
                        onClick: () => B({
                            ...u,
                            answer_sheet: !u.answer_sheet
                        }),
                        className: "flex justify-center gap-1 items-center border py-1 px-2 bg-white rounded",
                        children: [u.answer_sheet ? e.jsx(xt, {
                            className: "text-gray-600 text-xs"
                        }) : e.jsx(bt, {
                            className: "text-gray-600 text-xs"
                        }), e.jsx("span", {
                            children: "উত্তরমালা"
                        })]
                    }), e.jsxs(te.button, {
                        whileTap: {
                            scale: .9
                        },
                        onClick: je,
                        className: "flex justify-center gap-1 items-center border py-1 px-2 bg-white rounded",
                        children: [e.jsx(Fe, {
                            className: "text-gray-600 text-xs"
                        }), e.jsx("span", {
                            children: "ডাউনলোড"
                        })]
                    })]
                }), e.jsx("div", {
                    onClick: () => i(!1),
                    className: `${!c && "hidden"} fixed print:hidden lg:hidden left-0 top-0 z-[100] h-full bg-gray-900/50 w-screen -ml-20`
                }), e.jsxs("div", {
                    style: {
                        fontFamily: `${u.font}`
                    },
                    className: "print-area relative min-w-screen md:overflow-auto lg:w-[210mm]",
                    children: [e.jsxs("div", {
                        className: "bg-white mb-3 print:hidden border-t-2 border-emerald-500",
                        children: [e.jsx("p", {
                            className: "text-center font-bold bg-emerald-50 p-1",
                            children: "কুইক সেটিংস"
                        }), e.jsx("div", {
                            className: " p-2",
                            children: e.jsx("button", {
                                onClick: Je,
                                className: `bg-emerald-600 hover:opacity-90 px-2 py-1 text-white ${r ? "opacity-50 cursor-not-allowed" : ""}`,
                                disabled: r,
                                children: r ? "লোড হচ্ছে..." : "+ আরও প্রশ্ন যুক্ত করুন"
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "leading-tight bg-white w-full p-[5mm] md:p-[10mm] print:p-0.5 print:w-full print:shadow-none",
                        children: [u.sheet.enabled ? e.jsx(Jt, {
                            controlPanelConfig: u,
                            classInfo: h,
                            institute: f
                        }) : e.jsxs("div", {
                            className: "relative py-2 print:py-0",
                            children: [u.ribbon.enabled && e.jsx("p", {
                                className: "ribbon-x",
                                contentEditable: !0,
                                children: "সেরা ২০০ প্রশ্ন"
                            }), e.jsx("h1", {
                                className: "text-xl font-bold text-center",
                                children: u.version === "EN" ? f == null ? void 0 : f.en_name : f == null ? void 0 : f.name
                            }), u.includeAddress.enabled && e.jsx(Le, {
                                institute: f,
                                controlPanelConfig: u
                            }), u.includeTitle && e.jsx("p", {
                                contentEditable: !0,
                                className: "leading-none  mb-0.5 text-center text-lg font-bold outline-none hover:outline hover:outline hover:outline-dashed hover:outline-gray-400",
                                children: h == null ? void 0 : h.title
                            }), e.jsxs("div", {
                                className: "relative",
                                children: [u.include_className && e.jsx("p", {
                                    contentEditable: !0,
                                    className: "text-center text-lg leading-none mb-0.5",
                                    children: u.version === "EN" ? (_e = h == null ? void 0 : h.classId) == null ? void 0 : _e.en_name : (ye = h == null ? void 0 : h.classId) == null ? void 0 : ye.name
                                }), u.include_subjectName && e.jsx("p", {
                                    contentEditable: !0,
                                    className: "text-center z-[10] mb-0.5",
                                    children: ((Ne = h == null ? void 0 : h.subjectId) == null ? void 0 : Ne.length) == 1 ? h.subjectId[0].name : "সমন্বিত বিষয়"
                                }), u.include_chapterName && e.jsx("p", {
                                    contentEditable: !0,
                                    className: "text-center",
                                    children: ((ke = h == null ? void 0 : h.chapterId) == null ? void 0 : ke.length) == 1 ? h.chapterId[0].name : "সমন্বিত অধ্যায়"
                                }), u.setCode && e.jsxs("div", {
                                    className: "absolute -top-1.5 right-0 flex gap-2 items-center ",
                                    children: [e.jsx("p", {
                                        className: "",
                                        contentEditable: !0,
                                        children: "সেট :"
                                    }), e.jsx("p", {
                                        contentEditable: !0,
                                        className: "border-2  px-1.5 border-black",
                                        children: j
                                    })]
                                }), e.jsxs("div", {
                                    className: `absolute top-5 w-full flex items-center ${u.include_marks_box && u.include_subject_code ? "justify-between" : "justify-end"}`,
                                    children: [u.include_marks_box && e.jsxs("div", {
                                        className: "flex",
                                        children: [e.jsx("p", {
                                            className: "border py-[2px] px-1 border-black bg-black text-white",
                                            contentEditable: !0,
                                            children: "প্রাপ্ত নম্বর"
                                        }), e.jsx("p", {
                                            contentEditable: !0,
                                            className: "border-y border-r px-6 border-black"
                                        })]
                                    }), u.include_subject_code && e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [e.jsx("span", {
                                            children: "বিষয় কোড :"
                                        }), e.jsx(ea, {
                                            subjectCode: ((we = h == null ? void 0 : h.subjectId[0]) == null ? void 0 : we.code) || "০০০"
                                        })]
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex justify-between relative mt-1",
                                children: [e.jsx(e.Fragment, {
                                    children: e.jsxs("div", {
                                        className: "flex items-center",
                                        contentEditable: !0,
                                        children: [u.version == "EN" ? "Time—" : "সময়—", e.jsx("span", {
                                            className: "mx-1",
                                            suppressContentEditableWarning: !0,
                                            children: y == "primary" ? Ee(Math.round(Te((ve = h == null ? void 0 : h.subjectId[0]) == null ? void 0 : ve._id, d, u.isFullMarksQuestion.britti) * 1.4), u.version) : Ee(Math.round(Ae(d) * 1.4), u.version)
                                        })]
                                    })
                                }), e.jsx(e.Fragment, {
                                    children: e.jsxs("div", {
                                        contentEditable: !0,
                                        suppressContentEditableWarning: !0,
                                        children: [u.version === "EN" ? "Marks—" : "পূর্ণমান—", e.jsx("span", {
                                            className: "mx-1",
                                            children: ( () => {
                                                var O;
                                                const $ = y === "primary" ? Te((O = h == null ? void 0 : h.subjectId[0]) == null ? void 0 : O._id, d, u.isFullMarksQuestion.britti) : Ae(d);
                                                return u.version === "EN" ? $ : S($)
                                            }
                                            )()
                                        })]
                                    })
                                })]
                            }), u.include_student_info && e.jsx(Ps, {}), e.jsx("hr", {}), u.instruction && e.jsxs(e.Fragment, {
                                children: [y === "mcq" && e.jsx("div", {
                                    className: `text-center ${u.font_size <= 12 ? "text-xs" : "text-sm"} my-1`,
                                    contentEditable: !0,
                                    suppressContentEditableWarning: !0,
                                    children: e.jsxs("span", {
                                        children: [e.jsxs("i", {
                                            children: [e.jsx("span", {
                                                className: "bangla-bold",
                                                children: "দ্রষ্টব্যঃ"
                                            }), " ", "সরবরাহকৃত বহুনির্বাচনি অভীক্ষার উত্তরপত্রে প্রশ্নের ক্রমিক নম্বরের বিপরীতে প্রদত্ত বর্ণসম্বলিত বৃত্ত সমুহ হতে সঠিক উত্তরের বৃত্তটি"]
                                        }), " ", "(", e.jsx(pt, {
                                            className: "inline-block"
                                        }), ")", " ", e.jsx("i", {
                                            children: "বল পয়েন্ট কলম দ্বারা সম্পুর্ণ ভরাট করো। প্রতিটি প্রশ্নের মান ১।"
                                        })]
                                    })
                                }), y === "cq" && e.jsx("div", {
                                    className: `text-center ${u.font_size <= 12 ? "text-xs" : "text-sm"} my-1`,
                                    contentEditable: !0,
                                    children: e.jsxs("i", {
                                        children: [e.jsx("span", {
                                            className: "bangla-bold",
                                            children: "দ্রষ্টব্যঃ"
                                        }), " ডান পাশের সংখ্যা প্রশ্নের পূর্ণমান জ্ঞাপক । যেকোনো __ টি প্রশ্নের উত্তর দাও।"]
                                    })
                                }), e.jsx("div", {
                                    contentEditable: !0,
                                    className: `bangla-bold text-center ${u.font_size <= 12 ? "text-xs" : "text-sm"} mt-1 font-bold`,
                                    children: u.version === "EN" ? e.jsxs("div", {
                                        className: "italic ",
                                        children: [e.jsxs("p", {
                                            className: "font-normal ",
                                            children: ["[", e.jsx("span", {
                                                className: "font-bold",
                                                children: "N.B."
                                            }), " The figure in the right margin indicate full marks.]"]
                                        }), e.jsx("span", {
                                            className: "font-normal",
                                            children: "No marks, signs, or symbols are allowed on the question paper."
                                        })]
                                    }) : "প্রশ্নপত্রে কোনো প্রকার দাগ/চিহ্ন দেয়া যাবেনা।"
                                })]
                            })]
                        }), e.jsxs("div", {
                            style: {
                                fontSize: u.font_size
                            },
                            children: [u.watermark.enabled && e.jsx("div", {
                                className: "fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none z-10",
                                children: e.jsx("p", {
                                    style: {
                                        opacity: u.watermark.opacity / 100,
                                        fontSize: u.watermark.size
                                    },
                                    className: "text-gray-400 transform -rotate-45 font-bold text-center",
                                    children: g
                                })
                            }), !t && d.length == 0 && e.jsxs("div", {
                                className: "text-center  bg-yellow-50 p-2",
                                children: [e.jsxs("p", {
                                    children: [" ", "প্রশ্ন সিলেক্ট করার পরে", " ", e.jsx("span", {
                                        className: "underline",
                                        children: "Save"
                                    }), " করেননি ।", e.jsx("br", {}), " এজন্য প্রশ্ন প্রদর্শন হচ্ছে না।", " "]
                                }), e.jsxs("p", {
                                    children: [" ", "প্রশ্ন সিলেক্ট করার পর", " ", e.jsx("span", {
                                        className: "underline",
                                        children: "Save"
                                    }), " বাটনে ক্লিক করুন।"]
                                })]
                            }), t && e.jsx("div", {
                                className: "absolute top-0 left-0 inset-1 bg-white/80 z-10 flex justify-center items-start",
                                children: e.jsx("img", {
                                    src: "/images/bar_loading.svg",
                                    height: "100px",
                                    className: "mt-72",
                                    width: "100px"
                                })
                            }), e.jsxs("div", {
                                style: {
                                    textAlign: u.textAlign
                                },
                                children: [y === "mcq" && e.jsx(Ft, {
                                    questions: d,
                                    setQuestions: _,
                                    controlPanelConfig: u,
                                    q_set: E,
                                    qsetInfo: b
                                }), y === "cq" && e.jsx($t, {
                                    questions: d,
                                    setQuestions: _,
                                    controlPanelConfig: u,
                                    q_set: E,
                                    qsetInfo: b
                                }), y === "combine" && e.jsx(Bs, {
                                    questions: d,
                                    setQuestions: _,
                                    controlPanelConfig: u,
                                    q_set: E,
                                    qsetInfo: b
                                }), y === "primary" && e.jsx(Yt, {
                                    questions: d,
                                    setQuestions: _,
                                    controlPanelConfig: u,
                                    q_set: E,
                                    qsetInfo: b
                                })]
                            })]
                        }), u.omr.enabled && e.jsxs("div", {
                            className: "break-inside-avoid",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-center mt-3 w-full",
                                children: [e.jsx("div", {
                                    className: "border-t border-gray-300 flex-grow mr-2"
                                }), e.jsx("span", {
                                    className: "text-gray-500 italic ",
                                    children: "OMR Area"
                                }), e.jsx("div", {
                                    className: "border-t border-gray-300 flex-grow ml-2"
                                })]
                            }), e.jsxs("div", {
                                className: "mt-5 overflow-auto mx-auto",
                                style: {
                                    maxWidth: u.omr.width + 10
                                },
                                children: [e.jsxs("div", {
                                    className: "flex justify-center gap-2 mb-5",
                                    children: [e.jsxs("div", {
                                        className: "flex-1 flex gap-1 items-baseline",
                                        children: [e.jsx("span", {
                                            contentEditable: !0,
                                            children: "নাম:"
                                        }), e.jsx("p", {
                                            className: "flex-1 border-b border-dashed border-gray-400"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "w-48 flex gap-1 items-baseline",
                                        children: [e.jsx("span", {
                                            contentEditable: !0,
                                            children: " রোল :"
                                        }), e.jsx("p", {
                                            className: "flex-1 border-b border-dashed border-gray-400"
                                        })]
                                    })]
                                }), e.jsx(Et, {
                                    OMRConfig: {
                                        template: 1,
                                        number_of_question: u.omr.questions,
                                        column: u.omr.column,
                                        width: u.omr.width
                                    }
                                })]
                            }), e.jsxs("div", {
                                className: "print:hidden flex flex-col items-center justify-center text-sm mt-3 italic text-gray-500",
                                children: [e.jsxs("div", {
                                    className: "flex items-center justify-center gap-1",
                                    children: [e.jsx($e, {
                                        className: "text-green-600"
                                    }), e.jsx("p", {
                                        className: "text-center",
                                        children: "This OMR is scanable"
                                    })]
                                }), e.jsxs("p", {
                                    children: ["OMR Code :", " ", e.jsx("span", {
                                        className: "font-bold text-black",
                                        children: St(1, u.omr.column, u.omr.questions).code
                                    })]
                                })]
                            })]
                        }), e.jsx(Y, {
                            children: e.jsx(ta, {})
                        })]
                    })]
                }), e.jsx(Cs, {
                    isSidebarOpen: c,
                    controlPanelConfig: u,
                    setControlPanelConfig: B,
                    handlePrintClick: je,
                    classId: N,
                    questions: d,
                    originalQustion: o,
                    setQuestions: _,
                    watermark: g,
                    setWatermark: v,
                    setSetCode: x,
                    setCode: j
                })]
            })]
        })
    })
}
  , fa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sa,
    useControlPanel: W
}, Symbol.toStringTag, {
    value: "Module"
}));
export {ue as P, me as Q, ie as S, fa as V, ba as a, pa as b, Qt as c, xa as g, Ts as s};
