import {r as t, c as J, j as e, m as D, L as X, N as G, f as H, v as Y, w as Z, x as K, y as ee, z as te, B as ne, e as se, C as ae, D as oe, E as ie, H as re, I as ce, J as le, K as de, M as ue, P as me, S as pe, T as he, U as _e, V as xe, W as ve, A as C, X as fe, a as ge, Y as ye, O as be, h as Ee, R as je, _ as a, l as Re, n as E, o as we} from "./index-4f7d73dc.js";
import Te from "./PrivateRoute-5ea1880e.js";
import {r as Ie, n as Se, F as Ae, T as Le} from "./navbar_brand-515a6f5e.js";
import {P as ke} from "./PageLoading-abbdf9b1.js";
const Pe = () => {
    let s = Ie.useMediaQuery({
        query: "(max-width:768px)"
    });
    const [i,o] = t.useState(!s)
      , {pathname: r} = J()
      , u = [{
        name: "সার্বিক চিত্র",
        links: [{
            name: "ড্যাশবোর্ড",
            url: "/teacher",
            icon: e.jsx(H, {})
        }, {
            name: "১ ক্লিকে প্রশ্ন তৈরী",
            url: "/teacher/new-question",
            icon: e.jsx(Y, {})
        }, {
            name: "প্রশ্নব্যাংক",
            url: "/teacher/question-bank",
            icon: e.jsx(Z, {})
        }]
    }, {
        name: "প্যাকেজ",
        links: [{
            name: "রেডি প্রশ্ন/সাজেশন",
            url: "/teacher/package/epbqset",
            icon: e.jsx(K, {})
        }]
    }, {
        name: "ব্যবস্থাপনা",
        links: [{
            name: "আমার তৈরী প্রশ্ন",
            url: "/teacher/my-questions",
            icon: e.jsx(ee, {})
        }, {
            name: "অনলাইন পরীক্ষা",
            url: "/teacher/my-exam",
            icon: e.jsx(te, {})
        }, {
            name: "শিক্ষার্থী",
            url: "/teacher/our-students",
            icon: e.jsx(ne, {})
        }]
    }, {
        name: "প্রতিষ্ঠান সংক্রান্ত",
        links: [{
            name: "আমার প্রতিষ্ঠান",
            url: "/teacher/my-institute",
            icon: e.jsx(se, {})
        }, {
            name: "আমার সাবস্ক্রিপশন",
            url: "/teacher/my-subscription",
            icon: e.jsx(ae, {})
        }]
    }, {
        name: "OMR সংক্রান্ত",
        links: [{
            name: "OMR টিউটোরিয়াল",
            url: "/teacher/omr/tutorial",
            icon: e.jsx(oe, {})
        }, {
            name: "OMR তৈরী",
            url: "/teacher/omr/generator",
            icon: e.jsx(ie, {})
        }, {
            name: "OMR টোকেন",
            url: "/teacher/omr/token",
            icon: e.jsx(re, {})
        }, {
            name: "OMR মূল্যায়ন",
            url: "/teacher/omr/evaluator",
            icon: e.jsx(ce, {})
        }]
    }, {
        name: "হেল্প লাইন",
        links: [{
            name: "যোগাযোগ",
            url: "/teacher/contact",
            icon: e.jsx(le, {})
        }, {
            name: "মতামত",
            url: "/teacher/contact/feedback",
            icon: e.jsx(de, {})
        }]
    }]
      , h = {
        open: {
            x: 0,
            width: "16rem",
            padding: "1rem",
            transition: {
                damping: 40
            }
        },
        close: {
            x: -350,
            padding: "1rem",
            width: "16rem",
            transition: {
                damping: 40
            }
        }
    };
    return t.useEffect( () => {
        o(!s)
    }
    , [s]),
    t.useEffect( () => {
        s && o(!1)
    }
    , [r]),
    e.jsxs("div", {
        className: "print:hidden print:w-0",
        children: [e.jsx(D.div, {
            onClick: () => o(!1),
            className: `print:hidden md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${i ? "block" : "hidden"}`
        }), e.jsxs(D.div, {
            initial: {
                x: -350
            },
            variants: h,
            animate: i ? "open" : "close",
            className: "sidebar bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-y-auto md:relative fixed",
            children: [e.jsx(X, {
                to: "/",
                className: "brand flex justify-center mb-6",
                children: e.jsx("img", {
                    src: Se,
                    className: "h-10",
                    alt: ""
                })
            }), e.jsx("div", {
                children: u.map( (_, x) => e.jsxs("div", {
                    className: "overview",
                    children: [e.jsx("p", {
                        className: "text-sm font-bold text-gray-400 my-2",
                        children: _.name
                    }), _.links.map( (p, j) => e.jsx(G, {
                        to: p.url,
                        className: ({isActive: y}) => y ? "active" : "",
                        end: !0,
                        children: e.jsxs("div", {
                            className: "my-1  overview_btn font-medium text-md  hover:bg-gray-100  py-1.5 px-2 rounded flex items-center",
                            children: [e.jsx("span", {
                                className: "bg-primary-500 text-white p-1.5 rounded",
                                children: p.icon
                            }), e.jsx("span", {
                                className: "mx-1.5",
                                children: p.name
                            })]
                        })
                    }, j))]
                }, x))
            })]
        }), e.jsx("div", {
            className: "fixed top-3 left-5 md:hidden z-[998] cursor-pointer text-3xl",
            onClick: () => o(!0),
            children: e.jsx(Ae, {})
        })]
    })
}
  , V = [{
    cmd: "bold",
    icon: e.jsx(ue, {}),
    title: "Bold"
}, {
    cmd: "italic",
    icon: e.jsx(me, {}),
    title: "Italic"
}, {
    cmd: "underline",
    icon: e.jsx(pe, {}),
    title: "Underline"
}, {
    cmd: "justifyLeft",
    icon: e.jsx(he, {}),
    title: "Align Left"
}, {
    cmd: "justifyCenter",
    icon: e.jsx(_e, {}),
    title: "Align Center"
}, {
    cmd: "justifyRight",
    icon: e.jsx(xe, {}),
    title: "Align Right"
}, {
    cmd: "removeFormat",
    icon: e.jsx(ve, {}),
    title: "Remove Format"
}]
  , N = 8
  , F = 25
  , Oe = () => {
    const [s,i] = t.useState(null)
      , [o,r] = t.useState(!1)
      , [u,h] = t.useState(!1)
      , [_,x] = t.useState({})
      , [p,j] = t.useState(null)
      , [y,k] = t.useState(12)
      , R = t.useRef(null)
      , w = n => {
        for (; n && n !== document.body; ) {
            if (n.nodeType === 1 && n.hasAttribute("contenteditable") && n.getAttribute("contenteditable") !== "false")
                return n;
            n = n.parentNode
        }
        return null
    }
      , M = () => {
        const n = window.getSelection();
        n.rangeCount > 0 && (R.current = n.getRangeAt(0))
    }
      , Q = () => {
        const n = window.getSelection();
        n.removeAllRanges(),
        R.current && n.addRange(R.current)
    }
      , P = (n, c) => {
        if (!c)
            return;
        const l = c.getBoundingClientRect()
          , m = 320
          , b = 10;
        let f = l.left + window.scrollX + l.width / 2;
        f = Math.min(Math.max(f, b + m / 2), window.innerWidth - b - m / 2);
        const $ = l.top - 50;
        i({
            top: $,
            left: f
        }),
        j(c);
        let g = window.getSelection().focusNode;
        (g == null ? void 0 : g.nodeType) === 3 && (g = g.parentNode);
        const U = window.getComputedStyle(g || c)
          , W = parseInt(U.fontSize) || 12;
        k(Math.min(Math.max(W, N), F));
        const I = {};
        V.forEach( ({cmd: S}) => {
            try {
                I[S] = document.queryCommandState(S)
            } catch {
                I[S] = !1
            }
        }
        ),
        x(I),
        o ? h(!0) : (r(!0),
        setTimeout( () => h(!0), 10))
    }
      , T = () => {
        h(!1),
        setTimeout( () => r(!1), 200)
    }
      , v = () => {
        const n = window.getSelection();
        if (!n.rangeCount) {
            T();
            return
        }
        const c = n.getRangeAt(0)
          , l = w(c.startContainer);
        if (!l || !l.isContentEditable) {
            T();
            return
        }
        P(null, l)
    }
      , O = n => {
        const c = w(n.target);
        if (!c) {
            T();
            return
        }
        const l = window.getSelection()
          , m = l.rangeCount ? l.getRangeAt(0) : document.createRange();
        P(m, c)
    }
      , B = (n, c=null) => {
        if (!p)
            return;
        p.focus();
        const l = window.getSelection();
        if (l.isCollapsed) {
            const m = document.createRange();
            m.selectNodeContents(p),
            l.removeAllRanges(),
            l.addRange(m)
        }
        setTimeout( () => {
            document.execCommand(n, !1, c),
            v()
        }
        , 10)
    }
      , z = n => {
        if (!p || n < N || n > F)
            return;
        k(n),
        p.focus();
        const c = window.getSelection();
        if (c.isCollapsed) {
            const f = document.createRange();
            f.selectNodeContents(p),
            c.removeAllRanges(),
            c.addRange(f)
        }
        const l = c.getRangeAt(0)
          , m = document.createElement("span");
        m.style.fontSize = `${n}px`,
        m.appendChild(l.extractContents()),
        l.insertNode(m),
        c.removeAllRanges();
        const b = document.createRange();
        b.selectNodeContents(m),
        c.addRange(b),
        v()
    }
    ;
    return t.useEffect( () => (document.addEventListener("mouseup", v),
    document.addEventListener("keyup", v),
    document.addEventListener("click", O),
    () => {
        document.removeEventListener("mouseup", v),
        document.removeEventListener("keyup", v),
        document.removeEventListener("click", O)
    }
    ), []),
    document.addEventListener("mouseover", n => {
        const c = w(n.target);
        c && c.classList.add("editable-effect")
    }
    ),
    s ? e.jsxs("div", {
        className: `print:hidden fixed z-[1000] bg-white border shadow px-2 py-1 rounded flex gap-1 transition-all duration-200 ease-in-out transform -translate-x-1/2
        ${u ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`,
        style: {
            top: `${s.top}px`,
            left: `${s.left}px`,
            width: 310
        },
        onMouseDown: n => {
            n.preventDefault(),
            M()
        }
        ,
        children: [e.jsxs("div", {
            className: "flex items-center justify-center",
            children: [e.jsx("button", {
                type: "button",
                onClick: () => z(y - 1),
                title: "Decrease font size",
                className: "px-1.5 font-bold rounded hover:bg-gray-200 select-none border",
                children: "-"
            }), e.jsx("span", {
                className: "px-1 select-none text-sm",
                children: y
            }), e.jsx("button", {
                type: "button",
                onClick: () => z(y + 1),
                title: "Increase font size",
                className: "px-1.5 font-bold rounded hover:bg-gray-200 select-none border",
                children: "+"
            })]
        }), V.map( ({cmd: n, icon: c, title: l}) => e.jsx("button", {
            type: "button",
            title: l,
            onClick: () => {
                Q(),
                B(n)
            }
            ,
            className: `p-1.5 rounded transition-colors duration-150 ${n === "removeFormat" ? "bg-red-400 text-white" : _[n] ? "bg-emerald-600 text-white" : "hover:bg-zinc-200"}`,
            children: c
        }, n))]
    }) : null
}
  , d = new Map
  , ze = 5 * 60 * 1e3
  , De = 500
  , A = ({reset: s=!0}={}) => {
    const i = [];
    for (const [o,r] of d.entries()) {
        const {view: u, usedInSet: h, print: _, classId: x} = r;
        (u || h || _) && (i.push({
            questionId: o,
            classId: x || null,
            view: u,
            usedInSet: h,
            print: _
        }),
        s && d.set(o, {
            view: 0,
            usedInSet: 0,
            print: 0,
            classId: x
        }))
    }
    return i
}
  , q = async () => {
    const s = A();
    if (s.length)
        try {
            await C.post("/collect/data/q/v", {
                questions: s
            })
        } catch {}
}
  , wt = (s, i) => {
    if (!s || !i)
        return;
    d.has(s) || d.set(s, {
        view: 0,
        usedInSet: 0,
        print: 0,
        classId: i
    });
    const o = d.get(s);
    o.view += 1,
    o.classId = i,
    d.set(s, o),
    L()
}
  , Tt = (s=[], i) => {
    for (const o of s) {
        if (d.has(o) && d.get(o).usedInSet > 0)
            continue;
        d.has(o) || d.set(o, {
            view: 0,
            usedInSet: 0,
            print: 0,
            classId: i
        });
        const r = d.get(o);
        r.usedInSet += 1,
        r.classId = i || r.classId,
        d.set(o, r)
    }
    L()
}
  , It = (s=[], i) => {
    const o = s.map(r => r._id);
    for (const r of o) {
        d.has(r) || d.set(r, {
            view: 0,
            usedInSet: 0,
            print: 0,
            classId: i
        });
        const u = d.get(r);
        u.print += 1,
        u.classId = i || u.classId,
        d.set(r, u)
    }
    L()
}
  , L = () => {
    A({
        reset: !1
    }).length >= De && q()
}
  , Ve = () => {
    const s = t.useRef(null);
    t.useEffect( () => {
        s.current = setInterval(q, ze);
        const i = () => {
            const o = A();
            if (o.length)
                try {
                    const r = new Blob([JSON.stringify({
                        questions: o
                    })],{
                        type: "application/json"
                    });
                    navigator.sendBeacon(fe + "collect/data/q/v", r)
                } catch {}
        }
        ;
        return window.addEventListener("beforeunload", i),
        document.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && i()
        }
        ),
        () => {
            clearInterval(s.current),
            window.removeEventListener("beforeunload", i),
            document.removeEventListener("visibilitychange", i)
        }
    }
    , [])
}
  , Ne = () => {
    const [s,i] = t.useState(!1)
      , [o,r] = t.useState(!1)
      , u = ge();
    return t.useEffect( () => {
        (async () => {
            r(!0);
            try {
                (await Ee( () => C({
                    url: "/auth/check-role?role=teacher",
                    method: "GET"
                }))).status === 200 ? i(!0) : u("/logout", {
                    replace: !0
                })
            } catch {
                u("/logout", {
                    replace: !0
                })
            }
            r(!1)
        }
        )()
    }
    , []),
    Ve(),
    e.jsxs(e.Fragment, {
        children: [e.jsx(ye, {
            children: e.jsx("title", {
                children: "Teacher Portal - Eproshnobank"
            })
        }), e.jsx(Oe, {}), o ? e.jsx("div", {
            className: "h-screen w-screen bg-gray-100",
            children: e.jsx("div", {
                className: "sticky print:hidden top-0 z-[2] w-full flex justify-end  items-center py-1.5 px-5 shadow bg-white",
                children: e.jsx("div", {
                    className: "h-10 w-10 animate-pulse rounded-full bg-gray-200"
                })
            })
        }) : e.jsx("div", {
            children: s ? e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "md:fixed top-0 left-0 z-10 print:hidden print:w-0",
                    children: e.jsx(Pe, {})
                }), e.jsxs("div", {
                    className: "md:ml-64 teacher-outlet",
                    children: [e.jsx(Le, {}), e.jsx(be, {})]
                })]
            }) : e.jsx("p", {
                children: "You are not authorized"
            })
        })]
    })
}
  , Fe = ({component: s, fallback: i}) => e.jsx(je.Suspense, {
    fallback: i || e.jsx(PageLoading, {}),
    children: e.jsx(s, {})
})
  , Ce = t.lazy( () => a( () => import("./TeacherDashboard-220a9bf5.js"), ["assets/TeacherDashboard-220a9bf5.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/LiveLastQuestionAdded-50d5aedb.js", "assets/Spinner-e3522d0e.js", "assets/moment-fbc5633a.js", "assets/adressUtil-739e5524.js", "assets/index.esm-441f5933.js", "assets/react-error-boundary.esm-44eb150e.js", "assets/index-d5102e12.js", "assets/index-a254eb95.js", "assets/ContactButtons-ddfdceef.js", "assets/LiveDot-648a7edb.js"]))
  , qe = t.lazy( () => a( () => import("./ViewQuestionPaper-22f7838f.js").then(s => s.V), ["assets/ViewQuestionPaper-22f7838f.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/Spinner-e3522d0e.js", "assets/index.esm-441f5933.js", "assets/adressUtil-739e5524.js", "assets/EPBOMRBox-ff65ed1d.js", "assets/omrUtils-faa47d0a.js", "assets/config-e19b493c.js", "assets/ViewQuestionPaper-08214b15.css"]))
  , Me = t.lazy( () => a( () => import("./NewQuestion-26e24404.js"), ["assets/NewQuestion-26e24404.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js", "assets/config-e19b493c.js", "assets/Spinner-e3522d0e.js", "assets/ReduxUtils-6c53172d.js", "assets/index-ec8ca3c3.js", "assets/LiveLastQuestionAdded-50d5aedb.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , Qe = t.lazy( () => a( () => import("./GeneratedQsetInfo-b59ba9ac.js"), ["assets/GeneratedQsetInfo-b59ba9ac.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , Be = t.lazy( () => a( () => import("./ViewQuestionRenderer-cb7f22f7.js"), ["assets/ViewQuestionRenderer-cb7f22f7.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/config-e19b493c.js", "assets/ViewQuestions-ed2215f2.js", "assets/ReduxUtils-6c53172d.js", "assets/ViewQuestionPaper-22f7838f.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/Spinner-e3522d0e.js", "assets/index.esm-441f5933.js", "assets/adressUtil-739e5524.js", "assets/EPBOMRBox-ff65ed1d.js", "assets/omrUtils-faa47d0a.js", "assets/ViewQuestionPaper-08214b15.css", "assets/Paginate-7513dbe5.js", "assets/MessengerButton-ead80ea1.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/react-error-boundary.esm-44eb150e.js", "assets/ViewQuestionError-98c88815.js", "assets/PrivateRoute-5ea1880e.js", "assets/navbar_brand-515a6f5e.js", "assets/PageLoading-abbdf9b1.js"]))
  , $e = t.lazy( () => a( () => import("./WithErrorHandlePrimaryViewQuestion-2a85a20a.js"), ["assets/WithErrorHandlePrimaryViewQuestion-2a85a20a.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/react-error-boundary.esm-44eb150e.js", "assets/ReduxUtils-6c53172d.js", "assets/ViewQuestionPaper-22f7838f.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/Spinner-e3522d0e.js", "assets/index.esm-441f5933.js", "assets/adressUtil-739e5524.js", "assets/EPBOMRBox-ff65ed1d.js", "assets/omrUtils-faa47d0a.js", "assets/config-e19b493c.js", "assets/ViewQuestionPaper-08214b15.css", "assets/MessengerButton-ead80ea1.js", "assets/Paginate-7513dbe5.js", "assets/ViewQuestionError-98c88815.js", "assets/PrivateRoute-5ea1880e.js", "assets/navbar_brand-515a6f5e.js", "assets/PageLoading-abbdf9b1.js"]))
  , Ue = t.lazy( () => a( () => import("./ViewQuestion-50e1f473.js"), ["assets/ViewQuestion-50e1f473.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , We = t.lazy( () => a( () => import("./SingleQuestionBank-b8338124.js"), ["assets/SingleQuestionBank-b8338124.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , Je = t.lazy( () => a( () => import("./TeacherQuestionBank-a92aa51d.js"), ["assets/TeacherQuestionBank-a92aa51d.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css"]))
  , Xe = t.lazy( () => a( () => import("./SingleSubject-9594d349.js"), ["assets/SingleSubject-9594d349.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/config-e19b493c.js"]))
  , Ge = t.lazy( () => a( () => import("./EPBQuestion-8627be9e.js"), ["assets/EPBQuestion-8627be9e.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/MessengerButton-ead80ea1.js", "assets/moment-fbc5633a.js"]))
  , He = t.lazy( () => a( () => import("./MyQByChapter-a451d8e0.js"), ["assets/MyQByChapter-a451d8e0.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/config-e19b493c.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/index.esm-bfd8d4b0.js", "assets/ShareQuestion-7d829fab.js", "assets/moment-fbc5633a.js", "assets/InfoCard-aba3f47d.js"]))
  , Ye = t.lazy( () => a( () => import("./MyQuestionsBySubject-ec470e0b.js"), ["assets/MyQuestionsBySubject-ec470e0b.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/ReduxUtils-6c53172d.js", "assets/config-e19b493c.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/index.esm-bfd8d4b0.js", "assets/ShareQuestion-7d829fab.js", "assets/moment-fbc5633a.js", "assets/InfoCard-aba3f47d.js"]))
  , Ze = t.lazy( () => a( () => import("./MyQuestion-423a55e9.js"), ["assets/MyQuestion-423a55e9.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css"]))
  , Ke = t.lazy( () => a( () => import("./SubjectView-01fc9b65.js"), ["assets/SubjectView-01fc9b65.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , et = t.lazy( () => a( () => import("./OurStudentDashboard-def67a7e.js"), ["assets/OurStudentDashboard-def67a7e.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/config-e19b493c.js"]))
  , tt = t.lazy( () => a( () => import("./ViewQuestion-0ee5fba5.js"), ["assets/ViewQuestion-0ee5fba5.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/index.esm-1e84ca90.js", "assets/index.esm-bfd8d4b0.js", "assets/ReduxUtils-6c53172d.js", "assets/config-e19b493c.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/Spinner-e3522d0e.js"]))
  , nt = t.lazy( () => a( () => import("./SingleExamDashboard-5785ebda.js"), ["assets/SingleExamDashboard-5785ebda.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/moment-fbc5633a.js", "assets/Spinner-e3522d0e.js", "assets/index.esm-1e84ca90.js", "assets/config-e19b493c.js", "assets/index.esm-441f5933.js"]))
  , st = t.lazy( () => a( () => import("./SingleExamBatch-3e8fcba7.js"), ["assets/SingleExamBatch-3e8fcba7.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/index.esm-bfd8d4b0.js", "assets/ReduxUtils-6c53172d.js", "assets/config-e19b493c.js", "assets/moment-fbc5633a.js"]))
  , at = t.lazy( () => a( () => import("./DatabaseSearch-f5470f07.js"), ["assets/DatabaseSearch-f5470f07.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/Spinner-e3522d0e.js", "assets/MessengerButton-ead80ea1.js", "assets/Paginate-7513dbe5.js", "assets/ViewQuestions-ed2215f2.js", "assets/ReduxUtils-6c53172d.js", "assets/ViewQuestionPaper-22f7838f.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/index.esm-441f5933.js", "assets/adressUtil-739e5524.js", "assets/EPBOMRBox-ff65ed1d.js", "assets/omrUtils-faa47d0a.js", "assets/config-e19b493c.js", "assets/ViewQuestionPaper-08214b15.css", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/PrivateRoute-5ea1880e.js", "assets/navbar_brand-515a6f5e.js", "assets/PageLoading-abbdf9b1.js"]))
  , ot = t.lazy( () => a( () => import("./ExamDashboard-a6d7105d.js"), ["assets/ExamDashboard-a6d7105d.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/index.esm-bfd8d4b0.js", "assets/config-e19b493c.js", "assets/ReduxUtils-6c53172d.js"]))
  , it = t.lazy( () => a( () => import("./MyInstitute-a4e5c3fd.js"), ["assets/MyInstitute-a4e5c3fd.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/moment-fbc5633a.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/RegisterInstitute-dab7f4c3.js", "assets/index.esm-bfd8d4b0.js", "assets/adressUtil-739e5524.js", "assets/index.esm-441f5933.js", "assets/UpdateInstituteInfo-6c63c11e.js", "assets/index-a254eb95.js"]))
  , rt = t.lazy( () => a( () => import("./MySubscription-da6212c9.js"), ["assets/MySubscription-da6212c9.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , ct = t.lazy( () => a( () => import("./FeedbackPage-f3251661.js"), ["assets/FeedbackPage-f3251661.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js"]))
  , lt = t.lazy( () => a( () => import("./ContactSupport-a0e685b7.js"), ["assets/ContactSupport-a0e685b7.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/ContactButtons-ddfdceef.js"]))
  , dt = t.lazy( () => a( () => import("./OMRTutorial-eb7eab2f.js"), ["assets/OMRTutorial-eb7eab2f.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css"]))
  , ut = t.lazy( () => a( () => import("./SingleToken-9cef851e.js"), ["assets/SingleToken-9cef851e.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/omrUtils-faa47d0a.js"]))
  , mt = t.lazy( () => a( () => import("./MyOmrTokens-4eb9a1df.js"), ["assets/MyOmrTokens-4eb9a1df.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js"]))
  , pt = t.lazy( () => a( () => import("./OmrGeneratorHome-182b6616.js"), ["assets/OmrGeneratorHome-182b6616.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/EPBOMRBox-ff65ed1d.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js", "assets/omrUtils-faa47d0a.js", "assets/adressUtil-739e5524.js"]))
  , ht = t.lazy( () => a( () => import("./EvaluatorHome-9950ab18.js"), ["assets/EvaluatorHome-9950ab18.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/config-e19b493c.js", "assets/index.esm-441f5933.js", "assets/Spinner-e3522d0e.js", "assets/index-d5102e12.js", "assets/moment-fbc5633a.js", "assets/index-a254eb95.js"]))
  , _t = t.lazy( () => a( () => import("./TeacherJoinApproval-60345b8d.js"), ["assets/TeacherJoinApproval-60345b8d.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/moment-fbc5633a.js"]))
  , xt = t.lazy( () => a( () => import("./TeacherJoin-a0cdd15e.js"), ["assets/TeacherJoin-a0cdd15e.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js", "assets/config-e19b493c.js"]))
  , vt = t.lazy( () => a( () => import("./EnglishRelease-3e2260bc.js"), ["assets/EnglishRelease-3e2260bc.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js"]))
  , ft = t.lazy( () => a( () => import("./BookletDashboard-48f362b3.js"), ["assets/BookletDashboard-48f362b3.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/_commonjs-dynamic-modules-302442b1.js", "assets/Spinner-e3522d0e.js", "assets/BookletDashboard-795d88c0.css"]))
  , gt = [{
    path: "/",
    index: !0,
    element: Ce
}, {
    path: "question-paper",
    element: qe
}, {
    path: "new-question",
    element: Me
}, {
    path: "new-question/generated-qset",
    element: Qe
}, {
    path: "view-questions",
    element: Be
}, {
    path: "view-questions/primary",
    element: $e
}, {
    path: "question-bank/view/:qbSetId",
    element: Ue
}, {
    path: "question-bank/:qbId",
    element: We
}, {
    path: "question-bank",
    element: Je
}, {
    path: "package/epbqset/:singlePkg/:subjectId/:classId",
    element: Xe
}, {
    path: "package/epbqset",
    element: Ge
}, {
    path: "my-questions/subject/:subjectId/:chapterId",
    element: He
}, {
    path: "my-questions/subject/:subjectId",
    element: Ye
}, {
    path: "my-questions/subject",
    element: Ke
}, {
    path: "my-questions",
    element: Ze
}, {
    path: "our-students",
    element: et
}, {
    path: "my-exam/view-question/:id",
    element: tt
}, {
    path: "my-exam/dashboard/:examId",
    element: nt
}, {
    path: "my-exam/exam-batch/:id",
    element: st
}, {
    path: "my-exam/database-search",
    element: at
}, {
    path: "my-exam",
    element: ot
}, {
    path: "my-institute",
    element: it
}, {
    path: "my-subscription",
    element: rt
}, {
    path: "contact",
    element: lt
}, {
    path: "contact/feedback",
    element: ct
}, {
    path: "omr/tutorial",
    element: dt
}, {
    path: "omr/token/:tokenId",
    element: ut
}, {
    path: "omr/token",
    element: mt
}, {
    path: "omr/generator",
    element: pt
}, {
    path: "omr/evaluator",
    element: ht
}, {
    path: "admin/teacher-join-approval",
    element: _t
}, {
    path: "join",
    element: xt
}, {
    path: "eng-published",
    element: vt
}, {
    path: "t/booklet",
    element: ft
}]
  , yt = () => e.jsxs(Re, {
    children: [e.jsx(E, {
        element: e.jsx(Te, {
            allowedRoles: [2258]
        }),
        children: e.jsx(E, {
            element: e.jsx(Ne, {}),
            children: gt.map( ({path: s, element: i, index: o}, r) => e.jsx(E, {
                path: s,
                index: o,
                element: e.jsx(Fe, {
                    component: i,
                    fallback: e.jsx(ke, {})
                })
            }, r))
        })
    }), e.jsx(E, {
        path: "*",
        element: e.jsx(we, {})
    })]
})
  , St = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yt
}, Symbol.toStringTag, {
    value: "Module"
}));
export {St as T, wt as a, Tt as b, It as t};
