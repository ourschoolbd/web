import {b as h, c as f, u as g, j as s, O as w, a3 as u, a4 as m} from "./index-4f7d73dc.js";
function p(t) {
    this.message = t
}
p.prototype = new Error,
p.prototype.name = "InvalidCharacterError";
var d = typeof window < "u" && window.atob && window.atob.bind(window) || function(t) {
    var r = String(t).replace(/=+$/, "");
    if (r.length % 4 == 1)
        throw new p("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n, e, o = 0, a = 0, c = ""; e = r.charAt(a++); ~e && (n = o % 4 ? 64 * n + e : e,
    o++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0)
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);
    return c
}
;
function v(t) {
    var r = t.replace(/-/g, "+").replace(/_/g, "/");
    switch (r.length % 4) {
    case 0:
        break;
    case 2:
        r += "==";
        break;
    case 3:
        r += "=";
        break;
    default:
        throw "Illegal base64url string!"
    }
    try {
        return function(n) {
            return decodeURIComponent(d(n).replace(/(.)/g, function(e, o) {
                var a = o.charCodeAt(0).toString(16).toUpperCase();
                return a.length < 2 && (a = "0" + a),
                "%" + a
            }))
        }(r)
    } catch {
        return d(r)
    }
}
function i(t) {
    this.message = t
}
function b(t, r) {
    if (typeof t != "string")
        throw new i("Invalid token specified");
    var n = (r = r || {}).header === !0 ? 0 : 1;
    try {
        return JSON.parse(v(t.split(".")[n]))
    } catch (e) {
        throw new i("Invalid token specified: " + e.message)
    }
}
i.prototype = new Error,
i.prototype.name = "InvalidTokenError";
const x = ({allowedRoles: t}) => {
    var o;
    const r = h()
      , n = f()
      , {userInfo: e} = g(a => a.auth);
    if (e) {
        const a = b(e.token);
        return Math.floor(Date.now() / 1e3) < a.exp ? t.includes("everyone") || (o = e == null ? void 0 : e.roles) != null && o.some(l => t.includes(l)) ? s.jsx(w, {}) : s.jsx(u, {
            to: "/unauthorized",
            state: {
                path: n.pathname
            },
            replace: !0
        }) : (r(m()),
        s.jsx(u, {
            to: "/login",
            state: {
                path: n.pathname
            },
            replace: !0
        }))
    } else
        return s.jsx(u, {
            to: "/login",
            state: {
                path: n.pathname
            },
            replace: !0
        })
}
;
export {x as default};
