import {R as M, _ as O, r as l, j as e, u, h as b, A as f, aS as I, aU as L, b5 as g, b2 as N, L as R, b4 as S} from "./index-4f7d73dc.js";
import {h as T} from "./moment-fbc5633a.js";
import v from "./Modal-9368c758.js";
import D from "./RegisterInstitute-dab7f4c3.js";
import {M as k} from "./index.esm-441f5933.js";
import A from "./UpdateInstituteInfo-6c63c11e.js";
import "./index-a254eb95.js";
import "./index-ec8ca3c3.js";
import "./index.esm-bfd8d4b0.js";
import "./adressUtil-739e5524.js";
const F = M.lazy( () => O( () => import("./NameChangeForm-c742ba0a.js"), ["assets/NameChangeForm-c742ba0a.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js", "assets/Spinner-e3522d0e.js"]))
  , P = () => {
    const [t,a] = l.useState();
    return e.jsxs("div", {
        children: [e.jsx(v, {
            isOpen: t,
            setIsOpen: a,
            shouldRemoveByOverlayClick: !1,
            title: "প্রতিষ্ঠানের নাম পরিবর্তন ফর্ম",
            theme: "primary",
            children: e.jsx(F, {
                setChangeNameModal: a
            })
        }), e.jsx("button", {
            onClick: () => a(!0),
            className: "bg-primary-500 hover:bg-primary-400 text-white p-2 px-3 rounded-full mb-3",
            children: "নাম পরিবর্তন করুন"
        })]
    })
}
  , U = () => {
    const {instituteInfo: t} = u(s => s.instituteInfo)
      , {userInfo: a} = u(s => s.auth)
      , [h,i] = l.useState([])
      , [r,x] = l.useState(!1)
      , y = async () => {
        try {
            x(!0);
            const s = await b( () => f({
                method: "GET",
                url: "/institute/get-teachers"
            }));
            s.status === 200 && i(s.data.teachers || [])
        } catch (s) {
            console.error("Error fetching teachers:", s)
        } finally {
            x(!1)
        }
    }
    ;
    l.useEffect( () => {
        y()
    }
    , []);
    const w = async s => {
        var m, o;
        if (prompt('⚠️ এই শিক্ষককে মুছে ফেলতে চাইলে "DELETE" লিখে নিশ্চিত করুন:') !== "DELETE") {
            g.error("মুছে ফেলার প্রক্রিয়া বাতিল করা হয়েছে।");
            return
        }
        try {
            (await b( () => f({
                method: "POST",
                url: "/institute/delete-teacher",
                data: {
                    teacherId: s,
                    instituteId: t._id
                }
            }))).status === 200 && (g.success("শিক্ষক সফলভাবে মুছে ফেলা হয়েছে।"),
            i(_ => _.filter(C => C._id !== s)))
        } catch (c) {
            console.error("Error deleting teacher:", c),
            g.error(((o = (m = c == null ? void 0 : c.response) == null ? void 0 : m.data) == null ? void 0 : o.message) || "❌ শিক্ষক মুছে ফেলা ব্যর্থ হয়েছে।")
        }
    }
      , E = () => e.jsxs("div", {
        className: "bg-white rounded-xl shadow p-4 flex flex-col items-center text-center border animate-pulse",
        children: [e.jsx("div", {
            className: "w-20 h-20 rounded-full bg-gray-300 mb-3"
        }), e.jsx("div", {
            className: "h-4 bg-gray-300 rounded w-3/4 mb-2"
        }), e.jsx("div", {
            className: "h-3 bg-gray-300 rounded w-1/2"
        })]
    })
      , p = ({teacher: s, isOwner: d}) => {
        var o;
        const m = ((o = t == null ? void 0 : t.ownerId) == null ? void 0 : o._id) === (a == null ? void 0 : a._id);
        return e.jsxs("div", {
            className: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col items-center text-center border relative",
            children: [d && e.jsx("div", {
                className: "absolute top-3 right-3 bg-yellow-100 p-1 rounded-full",
                children: e.jsx(I, {
                    className: "w-4 h-4 text-yellow-500",
                    fill: "currentColor"
                })
            }), !d && m && e.jsx("button", {
                onClick: () => w(s._id),
                className: "group absolute top-3 right-3 hover:bg-red-200 hover:tex-red-500 p-1 rounded-full transition",
                title: "Remove Teacher",
                children: e.jsx(L, {
                    className: "w-4 h-4 text-gray-500 group-hover:text-red-500"
                })
            }), e.jsx("img", {
                src: s.picture,
                alt: s.name,
                className: "w-20 h-20 rounded-full border mb-3 object-cover"
            }), e.jsx("h3", {
                className: "text-lg font-semibold text-gray-800",
                children: s.name
            }), e.jsx("p", {
                className: "text-sm text-gray-500",
                children: s.email
            }), d && e.jsx("span", {
                className: "mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700",
                children: "Owner"
            })]
        })
    }
      , n = t != null && t.ownerId && typeof t.ownerId == "object" ? t.ownerId : null
      , j = h.filter(s => !n || s._id !== n._id);
    return e.jsxs("div", {
        className: "max-w-5xl mx-auto p-4",
        children: [e.jsx("h2", {
            className: "text-2xl font-bold text-gray-800 mb-6 border-b pb-2 text-center",
            children: "আমাদের শিক্ষকবৃন্দ"
        }), r ? e.jsx("div", {
            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            children: [...Array(6)].map( (s, d) => e.jsx(E, {}, d))
        }) : e.jsx(e.Fragment, {
            children: n || j.length ? e.jsxs("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: [n && e.jsx(p, {
                    teacher: n,
                    isOwner: !0
                }), j.map(s => e.jsx(p, {
                    teacher: s,
                    isOwner: !1
                }, s._id))]
            }) : e.jsx("div", {
                className: "text-center text-gray-500 mt-6",
                children: "কোনো শিক্ষক পাওয়া যায়নি।"
            })
        })]
    })
}
  , Q = () => {
    l.useState();
    const [t,a] = l.useState(!1)
      , [h,i] = l.useState(!1)
      , {instituteInfo: r} = u(x => x.instituteInfo);
    return e.jsxs("div", {
        className: "dashboard bangla",
        children: [e.jsx(v, {
            isOpen: h,
            setIsOpen: i,
            title: "প্রতিষ্ঠান রেজিস্ট্রেশন",
            children: e.jsx(D, {
                setIsRegisterModalOpen: i,
                institute: r
            })
        }), t ? e.jsx("div", {
            className: "rounded bg-primary-500 py-10 animate-pulse",
            children: "Loading..."
        }) : e.jsx("div", {
            children: r ? e.jsxs("div", {
                children: [e.jsxs("div", {
                    className: "rounded bg-primary-500 py-10 text-white text-center",
                    children: [e.jsx("div", {
                        className: "flex justify-center",
                        children: e.jsxs("p", {
                            className: "flex gap-2  items-center text-center rounded text-lg md:text-2xl",
                            children: [r == null ? void 0 : r.name, " ", (r == null ? void 0 : r.membership) && e.jsx(k, {
                                className: "text-lg"
                            })]
                        })
                    }), e.jsxs("p", {
                        className: "text-gray-300",
                        children: ["Joined:", " ", T(r.createdAt).format("DD-MMM-YYYY")]
                    })]
                }), e.jsx("div", {
                    className: "my-5",
                    children: e.jsx(U, {})
                }), e.jsxs("div", {
                    className: "max-w-2xl mx-auto",
                    children: [e.jsx(A, {
                        institute: r
                    }), e.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-4 mt-5",
                        children: [e.jsxs("div", {
                            className: "bg-white rounded-xl shadow-sm border p-5 flex flex-col items-center text-center hover:shadow-md transition-all duration-300",
                            children: [e.jsxs("div", {
                                className: "flex flex-col items-center mt-3",
                                children: [e.jsx("span", {
                                    className: "bg-rose-500 text-white text-xs font-semibold px-3 py-0.5 rounded-full mb-2",
                                    children: "NEW"
                                }), e.jsx(N, {
                                    className: "text-green-500 text-4xl mb-3"
                                }), e.jsx("p", {
                                    className: "font-bold text-lg leading-snug",
                                    children: "একাধিক শিক্ষক যুক্ত করতে চাচ্ছেন?"
                                })]
                            }), e.jsxs("div", {
                                className: "text-gray-600 text-sm mt-4",
                                children: ["প্রতিষ্ঠানে যুক্ত থাকা সকল শিক্ষক প্রশ্ন তৈরী, মূল্যায়ণ সবই করতে পারবে।", e.jsx("p", {
                                    className: "text-xs text-yellow-600 mt-2 leading-snug",
                                    children: "একই ইমেইল দিয়ে সবাই লগইন না করে সকল শিক্ষক আলাদা আলাদা একাউন্ট তৈরী করে নিন ।"
                                })]
                            }), e.jsxs(R, {
                                to: "/teacher/join",
                                className: "mt-5 inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-200",
                                children: [e.jsx(N, {}), " নতুন শিক্ষক অ্যাড করুন"]
                            })]
                        }), e.jsxs("div", {
                            className: "bg-white rounded-xl shadow-sm border p-5 flex flex-col items-center text-center hover:shadow-md transition-all duration-300",
                            children: [e.jsxs("div", {
                                className: "flex flex-col items-center mt-3",
                                children: [e.jsx(S, {
                                    className: "text-primary-500 text-4xl mb-3"
                                }), e.jsx("p", {
                                    className: "font-bold text-lg leading-snug",
                                    children: "প্রতিষ্ঠানের নাম পরিবর্তন করা প্রয়োজন?"
                                })]
                            }), e.jsx("div", {
                                className: "text-gray-600 text-sm mt-4",
                                children: e.jsx("p", {
                                    children: "নিচের বাটনে ক্লিক করে নাম পরিবর্তনের ফর্ম সাবমিট করুন।"
                                })
                            }), e.jsx("div", {
                                className: "mt-5 w-full",
                                children: e.jsx(P, {})
                            })]
                        })]
                    })]
                }), r.membership && e.jsxs("div", {
                    className: "p-4 bg-teal-50 rounded-lg shadow-lg border border-teal-500 w-72 md:w-80 mx-auto my-5",
                    children: [e.jsxs("div", {
                        className: "text-left mb-3",
                        children: [e.jsx("h2", {
                            className: "text-xl md:text-2xl font-semibold text-teal-700",
                            children: "মেম্বারশিপ কার্ড"
                        }), e.jsx("p", {
                            className: "text-sm text-gray-700",
                            children: "(Valid for 2025 curriculum)"
                        })]
                    }), e.jsxs("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [e.jsx("p", {
                            className: "font-bold text-lg text-gray-900",
                            children: "২৫% ছাড়"
                        }), e.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: ["Lifetime: ", e.jsx("span", {
                                className: "font-semibold",
                                children: "১০%"
                            }), " ছাড়"]
                        })]
                    }), e.jsx("hr", {
                        className: "border-dashed border-teal-400 mb-4"
                    }), e.jsx("div", {
                        className: "text-center",
                        children: e.jsx("p", {
                            className: "text-sm text-gray-700",
                            children: "মেম্বারশিপ কার্ডটি ব্যবহার করে আপনি ২০২৫ সালের নতুন কারিকুলামে বিশেষ ডিসকাউন্ট উপভোগ করতে পারবেন।"
                        })
                    })]
                })]
            }) : e.jsxs("div", {
                className: "bg-white p-4 text-center text-lg",
                children: [e.jsx("p", {
                    children: "আপনার কোনো প্রতিষ্ঠানের তথ্য নেই, রেজিস্টার্ড প্রতিষ্ঠান ছাড়া আমাদের কোনো সেবা নিতে পারবেন না।"
                }), e.jsx("button", {
                    onClick: () => i(!0),
                    className: "bg-green-600 rounded hover:bg-green-500 py-1 px-3 mt-4 text-white",
                    children: "Register Institute"
                })]
            })
        })]
    })
}
;
export {Q as default};
