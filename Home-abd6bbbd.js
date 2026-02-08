import {u as c, a as i, r as l, j as s, L as u} from "./index-4f7d73dc.js";
const m = () => {
    var o;
    const {userInfo: e} = c(r => r.auth)
      , a = i()
      , n = {
        6897: "admin",
        900: "author",
        2258: "teacher",
        201: "student",
        123: "user"
    };
    return l.useEffect( () => {
        if (!e)
            return a("/login");
        if ((e == null ? void 0 : e.roles.length) == 1)
            return a("/" + n[e.roles[0]])
    }
    , []),
    s.jsx("div", {
        className: "flex justify-center items-start h-screen p-10",
        children: s.jsx("div", {
            children: (o = e == null ? void 0 : e.roles) == null ? void 0 : o.map( (r, d) => {
                const t = n[r] || "unknown";
                return s.jsxs(u, {
                    to: `/${t}`,
                    className: "block px-4 py-3 border rounded my-2 hover:bg-gray-100",
                    children: [s.jsxs("span", {
                        className: "capitalize",
                        children: [t, " "]
                    }), "Dashboard"]
                }, t)
            }
            )
        })
    })
}
;
export {m as default};
