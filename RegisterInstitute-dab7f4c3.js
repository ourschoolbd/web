import {b as L, r as p, j as e, h as t, A as f, d as O, Q as y} from "./index-4f7d73dc.js";
import {u as T, C as x} from "./index.esm-bfd8d4b0.js";
import {d as z, u as C} from "./adressUtil-739e5524.js";
const F = ({institute: a, setIsRegisterModalOpen: N}) => {
    var j, u, v, b;
    const S = L()
      , [_,i] = p.useState([])
      , [R,g] = p.useState([])
      , {register: m, control: h, setValue: c, handleSubmit: w, formState: {isSubmitting: D, errors: o}} = T({
        defaultValues: {
            _id: a == null ? void 0 : a._id,
            name: a == null ? void 0 : a.name,
            board: (j = a == null ? void 0 : a.address) == null ? void 0 : j.board,
            district: (u = a == null ? void 0 : a.address) == null ? void 0 : u.district,
            upazilla: (v = a == null ? void 0 : a.address) == null ? void 0 : v.upazilla,
            place: (b = a == null ? void 0 : a.address) == null ? void 0 : b.place,
            phone: a == null ? void 0 : a.phone
        }
    })
      , E = async () => {
        await t( () => f({
            url: "/email/send-insitute-registered-email",
            method: "POST"
        }))
    }
      , I = r => {
        if (r) {
            c("board", r),
            c("district", ""),
            c("upazilla", "");
            const s = z.filter(d => d.division_id === r).map(d => ({
                value: d.name,
                label: d.bn_name
            }));
            i(s)
        }
    }
      , q = r => {
        if (r.target.value) {
            c("district", r.target.value),
            c("upazilla", "");
            const s = C.filter(d => d.district_id == r.target.value).map(d => ({
                value: d.name,
                label: d.bn_name
            }));
            g(s)
        }
    }
    ;
    p.useEffect( () => {
        var r, s;
        if ((r = a == null ? void 0 : a.address) != null && r.board) {
            const d = z.filter(l => {
                var n;
                return l.division_id === ((n = a == null ? void 0 : a.address) == null ? void 0 : n.board)
            }
            ).map(l => ({
                value: l.name,
                label: l.bn_name
            }));
            i(d)
        }
        if ((s = a == null ? void 0 : a.address) != null && s.district) {
            const d = C.filter(l => {
                var n;
                return l.district_id == ((n = a == null ? void 0 : a.address) == null ? void 0 : n.district)
            }
            ).map(l => ({
                value: l.name,
                label: l.bn_name
            }));
            g(d)
        }
    }
    , [a]);
    const P = async r => {
        var s, d;
        try {
            const l = await t( () => f({
                url: "/institute/register-institute-by-user",
                data: r,
                method: "POST"
            }));
            l.status == 200 && (S(O(l.data.institute)),
            y.success("Registration successfull"),
            N(!1),
            E())
        } catch (l) {
            console.log(l),
            y.error(((d = (s = l == null ? void 0 : l.response) == null ? void 0 : s.data) == null ? void 0 : d.message) || "Something went wrong. Contact Support")
        }
    }
      , A = r => /^(?:\+88|88)?(01[3-9]\d{8})$/.test(r) || "বাংলাদেশি মোবাইল নম্বর দিন (In English)";
    return e.jsx("div", {
        className: " bangla",
        children: e.jsxs("form", {
            onSubmit: w(P),
            children: [e.jsx("input", {
                placeholder: "প্রতিষ্ঠানের নাম *",
                ...m("name", {
                    required: "প্রতিষ্ঠানের নাম লিখুন",
                    maxLength: {
                        value: 100,
                        message: "টাইটেল ১০০ টি অক্ষরের মধ্যে লিখতে হবে"
                    },
                    minLength: {
                        value: 5,
                        message: "মিনিমাম ৫ টি অক্ষর দিতে লিখতে হবে"
                    }
                })
            }), o.name && e.jsx("span", {
                className: "text-red-500 text-sm",
                children: o.name.message
            }), e.jsx("div", {
                className: "my-2",
                children: e.jsx(x, {
                    name: "board",
                    control: h,
                    rules: {
                        required: "বিভাগ সিলেক্ট করুন"
                    },
                    render: ({field: r}) => e.jsxs("select", {
                        ...r,
                        onChange: s => {
                            r.onChange(s),
                            I(s.target.value)
                        }
                        ,
                        children: [e.jsx("option", {
                            value: "",
                            children: "বিভাগ *"
                        }), e.jsx("option", {
                            value: "Dhaka",
                            children: "ঢাকা"
                        }), e.jsx("option", {
                            value: "Rajshahi",
                            children: "রাজশাহী"
                        }), e.jsx("option", {
                            value: "Chattagram",
                            children: "চট্টগ্রাম"
                        }), e.jsx("option", {
                            value: "Khulna",
                            children: "খুলনা"
                        }), e.jsx("option", {
                            value: "Barisal",
                            children: "বরিশাল"
                        }), e.jsx("option", {
                            value: "Sylhet",
                            children: "সিলেট"
                        }), e.jsx("option", {
                            value: "Rangpur",
                            children: " রংপুর "
                        }), e.jsx("option", {
                            value: "Mymensingh",
                            children: "ময়মনসিংহ"
                        })]
                    })
                })
            }), o.board && e.jsx("span", {
                className: "text-red-500 text-sm",
                children: o.board.message
            }), e.jsx("div", {
                className: "my-2",
                children: e.jsx(x, {
                    name: "district",
                    control: h,
                    rules: {
                        required: "জেলা সিলেক্ট করুন *"
                    },
                    render: ({field: r}) => e.jsxs("select", {
                        ...r,
                        onChange: s => {
                            r.onChange(s),
                            q(s)
                        }
                        ,
                        children: [e.jsx("option", {
                            value: "",
                            children: "জেলা *"
                        }), _.map(s => e.jsx("option", {
                            value: s.value,
                            children: s.label
                        }, s.value))]
                    })
                })
            }), o.district && e.jsx("span", {
                className: "text-red-500 text-sm",
                children: o.district.message
            }), e.jsx("div", {
                className: "my-2",
                children: e.jsx(x, {
                    name: "upazilla",
                    control: h,
                    rules: {
                        required: "উপজেলা সিলেক্ট করুন *"
                    },
                    render: ({field: r}) => e.jsxs("select", {
                        ...r,
                        onChange: s => {
                            r.onChange(s)
                        }
                        ,
                        children: [e.jsx("option", {
                            value: "",
                            children: "উপজেলা *"
                        }), R.map(s => e.jsx("option", {
                            value: s.value,
                            children: s.label
                        }, s.value))]
                    })
                })
            }), o.upazilla && e.jsx("span", {
                className: "text-red-500 text-sm",
                children: o.upazilla.message
            }), e.jsx("input", {
                className: "my-2",
                placeholder: "ফোন নম্বর",
                type: "text",
                ...m("phone", {
                    required: "ফোন নম্বর দিন",
                    validate: A
                })
            }), o.phone && e.jsx("p", {
                className: "text-red-500 text-sm",
                children: o.phone.message
            }), e.jsx("textarea", {
                ...m("place"),
                placeholder: "নির্দিষ্ট ঠিকানা লিখুন (যদি থাকে) । এখানে জেলা বা উপজেলা লিখবেন না ।"
            }), e.jsx("button", {
                disabled: D,
                className: "text-white bg-green-600 hover:bg-green-500 py-2 w-full mt-2 rounded",
                children: "রেজিস্টার্ড করুন"
            })]
        })
    })
}
;
export {F as default};
