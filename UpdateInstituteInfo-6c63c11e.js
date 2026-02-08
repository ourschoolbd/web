import {r as m, b as B, j as a, b4 as K, h as Q, A as T, d as $, Q as D} from "./index-4f7d73dc.js";
import {u as G, C as x} from "./index.esm-bfd8d4b0.js";
import {d as _, u as I, g as H, a as J, b as L} from "./adressUtil-739e5524.js";
import W from "./Modal-9368c758.js";
import "./index-ec8ca3c3.js";
const sa = ({institute: e, from: i, setIsUpdateAddress: E}) => {
    var g, v, u, y, f, N, z, C, w, S;
    const [U,p] = m.useState(!1)
      , [O,t] = m.useState([])
      , [q,j] = m.useState([])
      , M = B()
      , {register: b, control: h, setValue: n, handleSubmit: P, formState: {isSubmitting: R, errors: o}} = G({
        defaultValues: {
            _id: e == null ? void 0 : e._id,
            name: e == null ? void 0 : e.name,
            board: (g = e == null ? void 0 : e.address) == null ? void 0 : g.board,
            district: (v = e == null ? void 0 : e.address) == null ? void 0 : v.district,
            upazilla: (u = e == null ? void 0 : e.address) == null ? void 0 : u.upazilla,
            place: (y = e == null ? void 0 : e.address) == null ? void 0 : y.place,
            phone: e == null ? void 0 : e.phone
        }
    })
      , k = r => {
        if (r) {
            n("board", r),
            n("district", ""),
            n("upazilla", "");
            const s = _.filter(l => l.division_id === r).map(l => ({
                value: l.name,
                label: l.bn_name
            }));
            t(s)
        }
    }
      , A = r => {
        if (r.target.value) {
            n("district", r.target.value),
            n("upazilla", "");
            const s = I.filter(l => l.district_id == r.target.value).map(l => ({
                value: l.name,
                label: l.bn_name
            }));
            j(s)
        }
    }
      , F = async r => {
        var s, l;
        try {
            const d = await Q( () => T({
                url: "/institute/update-institute-by-user",
                data: r,
                method: "POST"
            }));
            if (d.status == 200) {
                const c = {
                    ...e
                };
                delete c.address,
                c.address = d.data.address,
                c.phone = r.phone,
                M($(c)),
                D.success("Update successfull"),
                p(!1),
                i && i == "PopUp" && E(!1)
            }
        } catch (d) {
            D.error(((l = (s = d == null ? void 0 : d.response) == null ? void 0 : s.data) == null ? void 0 : l.message) || "Something went wrong. Contact Support")
        }
    }
      , V = r => /^(?:\+88|88)?(01[3-9]\d{8})$/.test(r) || "বাংলাদেশি মোবাইল নম্বর দিন (In English)";
    return m.useEffect( () => {
        var r, s;
        if ((r = e == null ? void 0 : e.address) != null && r.board) {
            const l = _.filter(d => {
                var c;
                return d.division_id === ((c = e == null ? void 0 : e.address) == null ? void 0 : c.board)
            }
            ).map(d => ({
                value: d.name,
                label: d.bn_name
            }));
            t(l)
        }
        if ((s = e == null ? void 0 : e.address) != null && s.district) {
            const l = I.filter(d => {
                var c;
                return d.district_id == ((c = e == null ? void 0 : e.address) == null ? void 0 : c.district)
            }
            ).map(d => ({
                value: d.name,
                label: d.bn_name
            }));
            j(l)
        }
    }
    , [e]),
    a.jsxs("div", {
        className: "bg-white p-4 w-full",
        children: [a.jsx(W, {
            isOpen: U,
            setIsOpen: p,
            title: "ঠিকানা আপডেট ফর্ম",
            theme: "primary",
            children: a.jsx("div", {
                children: a.jsxs("form", {
                    onSubmit: P(F),
                    children: [a.jsx("div", {
                        className: "my-2",
                        children: a.jsx(x, {
                            name: "board",
                            control: h,
                            rules: {
                                required: "বিভাগ সিলেক্ট করুন"
                            },
                            render: ({field: r}) => a.jsxs("select", {
                                ...r,
                                onChange: s => {
                                    r.onChange(s),
                                    k(s.target.value)
                                }
                                ,
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "বিভাগ *"
                                }), a.jsx("option", {
                                    value: "Dhaka",
                                    children: "ঢাকা"
                                }), a.jsx("option", {
                                    value: "Rajshahi",
                                    children: "রাজশাহী"
                                }), a.jsx("option", {
                                    value: "Chattagram",
                                    children: "চট্টগ্রাম"
                                }), a.jsx("option", {
                                    value: "Khulna",
                                    children: "খুলনা"
                                }), a.jsx("option", {
                                    value: "Barisal",
                                    children: "বরিশাল"
                                }), a.jsx("option", {
                                    value: "Sylhet",
                                    children: "সিলেট"
                                }), a.jsx("option", {
                                    value: "Rangpur",
                                    children: " রংপুর "
                                }), a.jsx("option", {
                                    value: "Mymensingh",
                                    children: "ময়মনসিংহ"
                                })]
                            })
                        })
                    }), o.board && a.jsx("span", {
                        className: "text-red-500 text-sm",
                        children: o.board.message
                    }), a.jsx("div", {
                        className: "my-2",
                        children: a.jsx(x, {
                            name: "district",
                            control: h,
                            rules: {
                                required: "জেলা সিলেক্ট করুন *"
                            },
                            render: ({field: r}) => a.jsxs("select", {
                                ...r,
                                onChange: s => {
                                    r.onChange(s),
                                    A(s)
                                }
                                ,
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "জেলা *"
                                }), O.map(s => a.jsx("option", {
                                    value: s.value,
                                    children: s.label
                                }, s.value))]
                            })
                        })
                    }), o.district && a.jsx("span", {
                        className: "text-red-500 text-sm",
                        children: o.district.message
                    }), a.jsx("div", {
                        className: "my-2",
                        children: a.jsx(x, {
                            name: "upazilla",
                            control: h,
                            rules: {
                                required: "উপজেলা সিলেক্ট করুন *"
                            },
                            render: ({field: r}) => a.jsxs("select", {
                                ...r,
                                onChange: s => {
                                    r.onChange(s)
                                }
                                ,
                                children: [a.jsx("option", {
                                    value: "",
                                    children: "উপজেলা *"
                                }), q.map(s => a.jsx("option", {
                                    value: s.value,
                                    children: s.label
                                }, s.value))]
                            })
                        })
                    }), o.upazilla && a.jsx("span", {
                        className: "text-red-500 text-sm",
                        children: o.upazilla.message
                    }), a.jsx("input", {
                        className: "my-2",
                        placeholder: "ফোন নম্বর",
                        type: "text",
                        ...b("phone", {
                            required: "ফোন নম্বর দিন",
                            validate: V
                        })
                    }), o.phone && a.jsx("p", {
                        className: "text-red-500 text-sm",
                        children: o.phone.message
                    }), a.jsx("textarea", {
                        ...b("place"),
                        placeholder: "নির্দিষ্ট ঠিকানা লিখুন (যদি থাকে) । এখানে জেলা বা উপজেলা লিখবেন না ।"
                    }), a.jsx("button", {
                        disabled: R,
                        className: "text-white bg-amber-400 hover:bg-amber-500 py-2 w-full my-2 rounded",
                        children: "সাবমিট করুন"
                    })]
                })
            })
        }), e && a.jsx(a.Fragment, {
            children: (f = e.address) != null && f.board ? a.jsxs("div", {
                children: [a.jsx("p", {
                    className: "bg-gray-100 p-2 text-center rounded font-semibold",
                    children: "ঠিকানা"
                }), a.jsxs("div", {
                    className: "relative",
                    children: [a.jsx("button", {
                        onClick: () => p(!0),
                        className: "absolute top-2 right-2 p-1 hover:bg-gray-200 rounded",
                        title: "সম্পাদনা করুন",
                        children: a.jsx(K, {
                            className: "w-5 h-5 text-gray-600"
                        })
                    }), a.jsx("table", {
                        className: "w-full text-sm border mt-2",
                        children: a.jsxs("tbody", {
                            children: [((N = e.address) == null ? void 0 : N.place) && a.jsxs("tr", {
                                className: "border-b",
                                children: [a.jsx("td", {
                                    className: "px-3 py-2 font-medium w-28 bg-gray-50",
                                    children: "ঠিকানা"
                                }), a.jsx("td", {
                                    className: "px-3 py-2",
                                    children: (z = e.address) == null ? void 0 : z.place
                                })]
                            }), a.jsxs("tr", {
                                className: "border-b",
                                children: [a.jsx("td", {
                                    className: "px-3 py-2 font-medium w-28 bg-gray-50",
                                    children: "উপজেলা"
                                }), a.jsx("td", {
                                    className: "px-3 py-2",
                                    children: H((C = e.address) == null ? void 0 : C.upazilla)
                                })]
                            }), a.jsxs("tr", {
                                className: "border-b",
                                children: [a.jsx("td", {
                                    className: "px-3 py-2 font-medium bg-gray-50",
                                    children: "জেলা"
                                }), a.jsx("td", {
                                    className: "px-3 py-2",
                                    children: J((w = e.address) == null ? void 0 : w.district)
                                })]
                            }), a.jsxs("tr", {
                                children: [a.jsx("td", {
                                    className: "px-3 py-2 font-medium bg-gray-50",
                                    children: "বিভাগ"
                                }), a.jsx("td", {
                                    className: "px-3 py-2",
                                    children: L((S = e.address) == null ? void 0 : S.board)
                                })]
                            })]
                        })
                    })]
                })]
            }) : a.jsxs("div", {
                children: [a.jsx("p", {
                    className: "bg-gray-100 p-2 text-center rounded",
                    children: "ঠিকানা"
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-red-500 text-center my-2 font-bold",
                        children: "ঠিকানা ইনপুট দেয়া নেই!"
                    }), a.jsx("p", {
                        className: "text-center text-gray-600",
                        children: "ঠিকানা ইনপুট দিন । প্রশ্নে ঠিকানা ব্যবহার করার জন্য ঠিকানা ইনপুট দিতে হবে ।"
                    }), a.jsx("button", {
                        onClick: () => p(!0),
                        className: "mt-2 bg-green-500 text-white hover:bg-green-600 px-3 py-1.5 rounded w-full mt-5",
                        children: "ঠিকানা সেট করুন"
                    })]
                })]
            })
        })]
    })
}
;
export {sa as default};
