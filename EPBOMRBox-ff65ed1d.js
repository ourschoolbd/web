import {j as e, R as n} from "./index-4f7d73dc.js";
import {c as i} from "./index-d5102e12.js";
const u = ({label: r, size: t}) => (t = t || 6,
e.jsx("div", {
    className: `h-${t} w-${t} rounded-full border border-gray-700 text-center flex items-center justify-center`,
    children: r
}))
  , y = ({OMRConfig: r}) => {
    const t = Array.from({
        length: r.number_of_question
    }, (l, s) => s + 1)
      , m = ["ক", "খ", "গ", "ঘ"]
      , x = Array.from({
        length: 1
    })
      , d = Array.from({
        length: r.column
    })
      , o = Array.from({
        length: Math.ceil(r.number_of_question / 10)
    })
      , j = Array.from({
        length: 1
    })
      , c = Math.ceil(t.length / r.column)
      , h = t.slice(0, c)
      , p = t.slice(c, c * 2)
      , f = t.slice(c * 2, c * 3)
      , b = t.slice(c * 3, r.number_of_question)
      , a = () => e.jsx("div", {
        className: "w-[120px]",
        children: e.jsx("div", {
            className: "flex justify-evenly text-gray-6 items-center",
            children: m.map( (l, s) => e.jsx(u, {
                label: l
            }, s))
        })
    });
    return e.jsxs("div", {
        className: "border border-gray-800 ",
        style: {
            minWidth: r.width,
            borderWidth: 3
        },
        children: [e.jsxs("div", {
            className: "border-b border-dashed border-gray-400 p-1 flex gap-2",
            children: [e.jsx("div", {
                className: "flex items-center gap-1 w-[60px]",
                children: x.map( (l, s) => e.jsx("div", {
                    className: "h-4 w-3 bg-black "
                }, s))
            }), e.jsx("div", {
                className: "flex items-center gap-1 w-[60px]",
                children: d.map( (l, s) => e.jsx("div", {
                    className: "h-4 w-3 bg-black "
                }, s))
            }), e.jsx("div", {
                className: "flex items-center gap-1 w-[60px]",
                children: j.map( (l, s) => e.jsx("div", {
                    className: "h-4 w-3 bg-black "
                }, s))
            }), e.jsx("div", {
                className: "flex items-center justify-end flex-1 gap-1 min-w-[45px]",
                children: o.map( (l, s) => e.jsx("div", {
                    className: "h-4 w-3 bg-black "
                }, s))
            })]
        }), e.jsxs("div", {
            className: "flex justify-between gap-6 px-1",
            children: [e.jsx("div", {
                className: "",
                children: h.map( (l, s) => e.jsx(n.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex items-center justify-between my-1 h-6 w-[145px]",
                        children: [e.jsx("div", {
                            className: "text-center flex justify-center w-[15px]",
                            children: e.jsx("p", {
                                className: "font-bold",
                                children: i(s + 1)
                            })
                        }), e.jsx(a, {})]
                    }, s)
                }, s))
            }), e.jsx("div", {
                className: "",
                children: p.map( (l, s) => e.jsx(n.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex items-center justify-between my-1 h-6 w-[145px]",
                        children: [e.jsx("div", {
                            className: "text-center flex justify-center w-[15px]",
                            children: e.jsx("p", {
                                className: "font-bold",
                                children: i(l)
                            })
                        }), e.jsx(a, {})]
                    })
                }, s))
            }), r.column >= 3 && e.jsx("div", {
                className: "",
                children: f.map( (l, s) => e.jsx(n.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex items-center justify-between my-1 h-6 w-[145px]",
                        children: [e.jsx("div", {
                            className: "text-center flex justify-center w-[15px]",
                            children: e.jsx("p", {
                                className: "font-bold",
                                children: i(l)
                            })
                        }), e.jsx(a, {})]
                    }, s)
                }, s))
            }), r.column == 4 && e.jsx("div", {
                className: "",
                children: b.map( (l, s) => e.jsx(n.Fragment, {
                    children: e.jsxs("div", {
                        className: "flex items-center justify-between my-1 h-6 w-[145px]",
                        children: [e.jsx("div", {
                            className: "text-center flex justify-center w-[15px]",
                            children: e.jsx("p", {
                                className: "font-bold",
                                children: i(l)
                            })
                        }), e.jsx(a, {})]
                    }, s)
                }, s))
            })]
        })]
    })
}
;
export {y as E};
