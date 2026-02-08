import {j as e, m as t} from "./index-4f7d73dc.js";
const i = () => e.jsxs("div", {
    className: "flex items-center space-x-2",
    children: [e.jsxs("div", {
        className: "relative flex items-center justify-center",
        children: [e.jsx(t.div, {
            className: "absolute w-6 h-6 bg-red-500 rounded-full",
            initial: {
                scale: 0,
                opacity: 1
            },
            animate: {
                scale: 1.2,
                opacity: 0
            },
            transition: {
                duration: 2,
                repeat: 1 / 0,
                repeatDelay: .5
            }
        }), e.jsx(t.div, {
            className: "relative w-3 h-3 bg-red-500 rounded-full",
            animate: {
                opacity: [1, .5, 1]
            },
            transition: {
                duration: 2,
                repeat: 1 / 0
            }
        })]
    }), e.jsx("span", {
        className: "text-red-500 font-bold",
        children: "LIVE"
    })]
});
export {i as L};
