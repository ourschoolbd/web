import {r as e, j as s, a9 as c, h as d, A as l} from "./index-4f7d73dc.js";
import {S as m} from "./Spinner-e3522d0e.js";
import {h as f} from "./moment-fbc5633a.js";
const h = () => {
    const [a,o] = e.useState()
      , [i,r] = e.useState(!1)
      , n = async () => {
        try {
            r(!0);
            const t = await d( () => l({
                method: "GET",
                url: "/public/last-added-question"
            }));
            t.status == 200 && o(t.data.lastAdded)
        } catch {} finally {
            r(!1)
        }
    }
    ;
    return e.useEffect( () => {
        n()
    }
    , []),
    s.jsx("div", {
        children: i ? s.jsx(m, {
            size: 5
        }) : a && s.jsxs("span", {
            className: "flex gap-2 items-center justify-center ",
            children: [" ", s.jsx(c, {
                className: "text-sm text-green-600 mt-0.5"
            }), " ", f(a).fromNow()]
        })
    })
}
;
export {h as L};
