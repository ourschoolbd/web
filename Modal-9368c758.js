import {r as b, j as e, m as i, ap as f} from "./index-4f7d73dc.js";
import {A as u} from "./index-ec8ca3c3.js";
const v = ({isOpen: t, setIsOpen: a, title: l, shouldRemoveByOverlayClick: s, children: r, size: o, theme: d}) => {
    let n = {
        hidden: {
            opacity: 0,
            scale: .5
        },
        visible: {
            opacity: 1,
            scale: 1
        },
        dump: {
            scale: 1.1,
            opacity: 1
        }
    };
    const c = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }
      , m = {
        screen: "md:max-w-[95vh]",
        big: "md:max-w-[700px]",
        a4: "md:w-[210mm]",
        small: "md:w-96",
        xl: "md:w-[512px]"
    }
      , x = {
        green: "bg-green-600 text-white",
        primary: "bg-slate-700 text-white",
        edit: "bg-amber-300"
    };
    return b.useEffect( () => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto",
    () => {
        document.body.style.overflow = "auto"
    }
    ), [t]),
    e.jsx(e.Fragment, {
        children: e.jsx(u, {
            children: t && e.jsx(i.div, {
                onClick: () => s && a(!1),
                variants: c,
                initial: "hidden",
                animate: t ? "visible" : "hidden",
                exit: "hidden",
                className: "overlay w-full fixed top-0 left-0 z-[100] h-[100vh] bg-black/30 flex justify-center items-center table-bordered",
                children: e.jsxs(i.div, {
                    className: `w-full ${m[o] || "md:w-96"}  ${x[d] || "bg-white text-black"} rounded shadow-lg  mx-5  max-h-[80vh] overflow-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-rounded `,
                    onClick: h => h.stopPropagation(),
                    variants: n,
                    initial: "hidden",
                    animate: t ? "visible" : "hidden",
                    exit: "hidden",
                    children: [e.jsxs("div", {
                        className: "flex text-lg items-center justify-between px-4 py-2",
                        children: [e.jsx("p", {
                            className: "font-semibold bangla",
                            children: l
                        }), e.jsx("div", {
                            onClick: () => a(!1),
                            className: "text-gray-600 cursor-pointer hover:bg-gray-200 flex items-center justify-center text-lg bg-gray-100 rounded h-7 w-7",
                            children: e.jsx(f, {})
                        })]
                    }), e.jsx("div", {
                        className: "bg-white p-4 text-black",
                        children: r
                    })]
                })
            })
        })
    })
}
;
export {v as default};
