import {r, j as e, L as x, x as p, t as y, h as b, A as v, u as j, ak as N, al as w, am as _, R as I, _ as g, Y as E, aj as L, I as k, an as R, ao as A} from "./index-4f7d73dc.js";
import {L as M} from "./LiveLastQuestionAdded-50d5aedb.js";
import {g as O, a as D} from "./adressUtil-739e5524.js";
import {M as S} from "./index.esm-441f5933.js";
import {E as f} from "./react-error-boundary.esm-44eb150e.js";
import {c as h} from "./index-d5102e12.js";
import {C} from "./ContactButtons-ddfdceef.js";
import {L as F} from "./LiveDot-648a7edb.js";
import "./Spinner-e3522d0e.js";
import "./moment-fbc5633a.js";
import "./index-a254eb95.js";
const T = () => {
    const [l,t] = r.useState(!0)
      , [i,n] = r.useState([])
      , s = async () => {
        try {
            const a = await b( () => v({
                method: "GET",
                url: "/teacher/data/last-5-question"
            }));
            a.status === 200 && n(a.data.questions)
        } catch {}
    }
      , d = async () => {
        t(!0),
        s(),
        t(!1)
    }
    ;
    return r.useEffect( () => {
        d()
    }
    , []),
    l || (i == null ? void 0 : i.length) == 0 ? null : e.jsxs("div", {
        className: "w-full my-4 md:my-0 border rounded",
        children: [e.jsx("h3", {
            className: "flex items-center gap-2  justify-center text-center rounded-t bg-gray-100 p-2",
            children: e.jsx("span", {
                className: "text-lg font-bold",
                children: "আপনার তৈরী সর্বশেষ প্রশ্ন"
            })
        }), i == null ? void 0 : i.map( (a, o) => {
            var c, m;
            return e.jsx(x, {
                to: "/teacher/question-paper?classId=" + ((c = a.classId) == null ? void 0 : c._id) + "&q_set=" + a._id + "&type=" + (a.type || "primary"),
                children: e.jsxs("div", {
                    className: "bg-white hover:border-gray-400 flex gap-2 items-center transition-all border-b hover:bg-gray-50 p-1.5  w-full text-start ",
                    children: [e.jsx(p, {
                        className: "shrink-0 text-2xl text-gray-500"
                    }), e.jsxs("div", {
                        className: "w-full",
                        children: [e.jsx("p", {
                            className: "line-clamp-1",
                            children: a.title
                        }), e.jsxs("div", {
                            className: "text-xs text-gray-700 mt-0.5 flex justify-between",
                            children: [a.subjectId.length == 1 ? e.jsx("p", {
                                className: "bg-gray-50 rounded-full px-1",
                                children: a.subjectId[0].name
                            }) : e.jsx("p", {
                                className: "bg-gray-50 rounded-full px-1",
                                children: "সমন্বিত বিষয়"
                            }), e.jsx("p", {
                                className: "bg-green-50 text-green-700 rounded-full px-1.5 py-0.5",
                                children: (m = a.classId) == null ? void 0 : m.name
                            })]
                        })]
                    })]
                })
            }, o)
        }
        ), e.jsx(x, {
            to: "/teacher/my-questions",
            children: e.jsxs("p", {
                className: "rounded-b-lg text-center flex items-center justify-between p-2 bg-gray-50",
                children: [e.jsx("span", {
                    children: "সকল প্রশ্ন দেখুন"
                }), " ", e.jsx(y, {}), " "]
            })
        })]
    })
}
  , P = () => {
    var t, i, n, s;
    const l = j(d => {
        var a;
        return (a = d.instituteInfo) == null ? void 0 : a.instituteInfo
    }
    );
    return l ? e.jsx("div", {
        className: "",
        children: e.jsx("div", {
            className: "relative bg-primary-500 p-8 py-14 rounded-lg shadow-lg",
            children: e.jsx("div", {
                className: "flex items-center gap-4 relative text-white text-center",
                children: e.jsxs("div", {
                    className: "flex-1",
                    children: [e.jsxs("h1", {
                        className: "text-2xl md:text-3xl font-semibold leading-tight",
                        children: [l == null ? void 0 : l.name, " ", (l == null ? void 0 : l.membership) && e.jsx(S, {
                            className: "inline -mt-1",
                            title: "Membership"
                        })]
                    }), e.jsxs("div", {
                        className: "text-gray-100",
                        children: [((t = l.address) == null ? void 0 : t.place) && e.jsxs("span", {
                            children: [(i = l.address) == null ? void 0 : i.place, ", "]
                        }), e.jsxs("span", {
                            children: [O((n = l.address) == null ? void 0 : n.upazilla), ",", " "]
                        }), e.jsx("span", {
                            children: D((s = l.address) == null ? void 0 : s.district)
                        })]
                    })]
                })
            })
        })
    }) : null
}
  , U = () => {
    const l = j(s => {
        var d;
        return (d = s.instituteInfo) == null ? void 0 : d.instituteInfo
    }
    )
      , [t,i] = r.useState(null)
      , n = async () => {
        try {
            const s = await b( () => v({
                method: "GET",
                url: "/teacher/data/counts-student-exam-omr_evaluate"
            }));
            s.status === 200 && i(s.data.data)
        } catch {}
    }
    ;
    return r.useEffect( () => {
        n()
    }
    , []),
    l ? e.jsxs("div", {
        className: "grid grid-cols-2 gap-2 lg:grid-cols-4  lg:gap-3 items-center mt-5",
        children: [e.jsxs("div", {
            className: "bg-green-50  rounded-lg p-4 flex-1 relative",
            children: [e.jsxs("div", {
                children: [e.jsx("p", {
                    className: "line-clamp-1",
                    children: "মোট প্রশ্ন তৈরী"
                }), e.jsx("p", {
                    className: "font-bold text-3xl md:text-4xl lg:text-5xl text-green-600",
                    children: h(t == null ? void 0 : t.total_question)
                })]
            }), e.jsx("span", {
                className: "absolute bottom-2 right-0 text-2xl md:text-3xl lg:text-4xl opacity-10 text-green-700",
                children: e.jsx(p, {})
            })]
        }), e.jsxs("div", {
            className: "bg-indigo-50 rounded-lg p-4 relative  flex-1",
            children: [e.jsxs("div", {
                children: [e.jsx("p", {
                    className: "line-clamp-1",
                    children: "অনলাইন পরীক্ষা"
                }), e.jsx("p", {
                    className: "font-bold text-3xl md:text-4xl lg:text-5xl text-indigo-500",
                    children: h(t == null ? void 0 : t.total_exam)
                })]
            }), e.jsx("span", {
                className: "absolute bottom-2 right-0 text-2xl md:text-3xl lg:text-4xl opacity-10 text-indigo-700",
                children: e.jsx(N, {})
            })]
        }), e.jsxs("div", {
            className: "bg-yellow-50  rounded-lg p-4 flex-1 relative",
            children: [e.jsxs("div", {
                children: [e.jsx("p", {
                    className: "line-clamp-1",
                    children: "OMR মূল্যায়ন "
                }), e.jsx("p", {
                    className: "font-bold text-3xl md:text-4xl lg:text-5xl text-yellow-500",
                    children: h(t == null ? void 0 : t.total_evaluated)
                })]
            }), e.jsx("span", {
                className: "absolute bottom-2 right-1 text-2xl md:text-3xl lg:text-4xl opacity-10 text-yellow-700",
                children: e.jsx(w, {})
            })]
        }), e.jsxs("div", {
            className: "bg-teal-50  rounded-lg p-4 flex-1 relative",
            children: [e.jsxs("div", {
                children: [e.jsx("p", {
                    className: "line-clamp-1",
                    children: " শিক্ষার্থী "
                }), e.jsx("p", {
                    className: "font-bold text-3xl md:text-4xl lg:text-5xl text-teal-500",
                    children: h(t == null ? void 0 : t.total_student)
                })]
            }), e.jsx("span", {
                className: "absolute bottom-2 right-1 text-2xl md:text-3xl lg:text-4xl opacity-20 text-teal-700",
                children: e.jsx(_, {})
            })]
        })]
    }) : null
}
  , u = r.lazy( () => g( () => import("./Modal-9368c758.js"), ["assets/Modal-9368c758.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index-ec8ca3c3.js"]))
  , z = r.lazy( () => g( () => import("./RegisterInstitute-dab7f4c3.js"), ["assets/RegisterInstitute-dab7f4c3.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js", "assets/adressUtil-739e5524.js"]))
  , B = r.lazy( () => g( () => import("./UpdateInstituteInfo-6c63c11e.js"), ["assets/UpdateInstituteInfo-6c63c11e.js", "assets/index-4f7d73dc.js", "assets/index-59c932b3.css", "assets/index.esm-bfd8d4b0.js", "assets/adressUtil-739e5524.js", "assets/Modal-9368c758.js", "assets/index-ec8ca3c3.js"]))
  , V = () => {
    const [l,t] = r.useState(!1)
      , [i,n] = r.useState(!1)
      , s = j(o => {
        var c;
        return (c = o.instituteInfo) == null ? void 0 : c.instituteInfo
    }
    );
    r.useEffect( () => {
        var o, c, m;
        s ? (!((o = s == null ? void 0 : s.address) != null && o.board) || !((c = s == null ? void 0 : s.address) != null && c.district) || !((m = s == null ? void 0 : s.address) != null && m.upazilla)) && n(!0) : t(!0)
    }
    , [s]);
    const d = r.useCallback( () => t(!1), [])
      , a = r.useCallback( () => n(!1), []);
    return e.jsxs("div", {
        className: "container p-4 bangla",
        children: [e.jsx(E, {
            children: e.jsx("title", {
                children: "ড্যাশবোর্ড - শিক্ষক পোর্টাল"
            })
        }), e.jsxs(r.Suspense, {
            fallback: e.jsx("div", {
                children: "Loading..."
            }),
            children: [e.jsx(u, {
                isOpen: l,
                setIsOpen: d,
                title: "এক ধাপ বাকি, প্রতিষ্ঠান রেজিস্ট্রেশন করুন",
                theme: "green",
                children: e.jsx(z, {
                    setIsRegisterModalOpen: d
                })
            }), e.jsx(u, {
                isOpen: i,
                title: "ঠিকানা আপডেট করুন",
                children: e.jsx(B, {
                    institute: s,
                    from: "PopUp",
                    setIsUpdateAddress: a
                })
            })]
        }), e.jsx(f, {
            fallback: "Something went wrong.",
            children: e.jsx(P, {})
        }), e.jsxs("div", {
            children: [e.jsx(f, {
                fallback: "Something went wrong.",
                children: e.jsx(U, {})
            }), e.jsxs("div", {
                className: "lg:flex flex-wrap gap-4 my-5",
                children: [e.jsx("div", {
                    children: e.jsx("div", {
                        className: "md:w-96",
                        children: e.jsxs("div", {
                            className: "grid grid-cols-2 gap-1",
                            children: [e.jsx(x, {
                                to: "/teacher/new-question",
                                children: e.jsxs("div", {
                                    className: "relative bg-white h-40 flex flex-col items-center gap-2 justify-center rounded hover:border hover:bg-primary-500 hover:text-white transition-all py-2 px-3 border",
                                    children: [e.jsx("span", {
                                        className: "absolute text-sm right-2 top-2 bg-green-500 text-white px-2.5 py-0.5 rounded-full",
                                        children: "৩য়-১২শ"
                                    }), e.jsx(L, {
                                        className: "text-2xl"
                                    }), e.jsx("div", {
                                        children: e.jsx("span", {
                                            children: "১ ক্লিকে প্রশ্ন তৈরী"
                                        })
                                    })]
                                })
                            }), e.jsx(x, {
                                to: "/teacher/package/epbqset",
                                children: e.jsxs("div", {
                                    className: "bg-white h-40 flex flex-col items-center gap-2 justify-center rounded hover:border hover:bg-primary-500 hover:text-white transition-all py-2 px-3 border",
                                    children: [e.jsx(p, {
                                        className: "text-2xl"
                                    }), e.jsx("div", {
                                        children: e.jsx("span", {
                                            children: "রেডি প্রশ্ন "
                                        })
                                    })]
                                })
                            }), e.jsx(x, {
                                to: "/teacher/omr/evaluator",
                                children: e.jsxs("div", {
                                    className: "bg-white h-40 flex flex-col items-center gap-2 justify-center rounded hover:border hover:bg-primary-500 hover:text-white transition-all py-2 px-3 border",
                                    children: [e.jsx(k, {
                                        className: "text-2xl"
                                    }), e.jsx("div", {
                                        children: e.jsx("span", {
                                            children: "OMR Evaluator "
                                        })
                                    })]
                                })
                            }), e.jsx(x, {
                                to: "/teacher/my-exam",
                                children: e.jsxs("div", {
                                    className: "bg-white h-40 flex flex-col items-center gap-2 justify-center rounded hover:border hover:bg-primary-500 hover:text-white transition-all py-2 px-3 border",
                                    children: [e.jsx(N, {
                                        className: "text-2xl"
                                    }), e.jsx("div", {
                                        children: e.jsx("span", {
                                            children: "অনলাইন পরীক্ষা তৈরী"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }), e.jsxs("div", {
                    className: "border min-w-[300px] rounded-lg bg-white flex-1 mt-5 lg:mt-0 overflow-hidden",
                    children: [e.jsxs("p", {
                        className: "bg-amber-100 text-center font-semibold text-lg py-2 flex items-center justify-center gap-2 border-b",
                        children: [e.jsx(R, {
                            className: "text-amber-500"
                        }), "ইপ্রশ্নব্যাংক আপডেটস"]
                    }), e.jsxs("div", {
                        className: "p-5 space-y-4",
                        children: [e.jsxs("p", {
                            className: "text-gray-600 text-base leading-relaxed mb-10",
                            children: ["সফটওয়্যারের", " ", e.jsx("span", {
                                className: "font-bold",
                                children: "নতুন ফিচার, জরুরি আপডেট এবং নির্দেশনা"
                            }), " ", "— সবই আগে পাবেন আমাদের মেসেঞ্জার ব্রডকাস্ট চ্যানেলে। ", e.jsx("br", {}), "✅", " ", e.jsx("span", {
                                className: "font-medium",
                                children: "দেরি না করে এখনই যুক্ত হন — না হলে গুরুত্বপূর্ণ কিছু মিস হয়ে যেতে পারে!"
                            })]
                        }), e.jsx("div", {
                            className: "flex justify-center",
                            children: e.jsx(x, {
                                to: "https://www.messenger.com/channel/eproshnobank",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-center",
                                children: "🔔 চ্যানেলে এখনই যুক্ত হোন"
                            })
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "mt-5  min-w-[300px] lg:mt-0 flex-1 flex-col border rounded flex items-center ",
                    children: [e.jsxs("p", {
                        className: "bg-emerald-100 text-lg w-full font-bold text-center flex items-center gap-2 justify-center p-2",
                        children: [e.jsx(A, {
                            className: "text-emerald-600"
                        }), " মতামত জানান !"]
                    }), e.jsx("div", {
                        className: "flex-1 flex items-center  p-2",
                        children: e.jsxs("div", {
                            children: [e.jsxs("div", {
                                className: "text-center my-4",
                                children: [e.jsx("p", {
                                    className: "font-bold text-lg mb-2",
                                    children: "আপনার চাওয়া, আমাদের দায়িত্ব!"
                                }), "প্রশ্ন তৈরি, OMR ইভালুয়েটরসহ যেকোনো উন্নতিতে আপনার মতামতই আমাদের সবচেয়ে গুরুত্বপূর্ণ!"]
                            }), e.jsx("div", {
                                className: "flex items-center justify-center",
                                children: e.jsx(x, {
                                    to: "/teacher/contact/feedback",
                                    className: "bg-gray-200 hover:bg-gray-100 px-3 py-1 rounded-full ",
                                    children: "মতামত দিন"
                                })
                            })]
                        })
                    })]
                })]
            })]
        }), e.jsxs("div", {
            className: "lg:flex flex-wrap gap-2 ",
            children: [e.jsx("div", {
                children: e.jsxs("div", {
                    className: "md:my-0 flex-1 lg:max-w-96 border rounded",
                    children: [e.jsxs("div", {
                        className: "py-2 bg-gray-100 text-center flex items-center  justify-center gap-2",
                        children: [e.jsx(F, {}), " ", e.jsx("span", {
                            className: "font-bold",
                            children: "আপডেট ! "
                        })]
                    }), e.jsx("div", {
                        className: "text-center my-2 text-lg text-gray-700  px-2",
                        children: "ইপ্রশ্নব্যাংক ডেটাবেজে সর্বশেষ নতুন প্রশ্ন যুক্ত হয়েছে"
                    }), e.jsx("div", {
                        className: "p-2  border-y border-dashed border-gray-300",
                        children: e.jsx(M, {})
                    }), e.jsx("p", {
                        className: "text-center text-gray-500 italic py-2",
                        children: "প্রতি ৩০ মিনিট পর পর এই তথ্য আপডেট হয়"
                    })]
                })
            }), e.jsx("div", {
                className: "flex-1  md:min-w-[400px] mt-5 lg:mt-0 ",
                children: e.jsx(T, {})
            }), e.jsxs("div", {
                className: "mt-5 lg:mt-0  flex-1 flex-col border rounded flex items-center ",
                children: [e.jsx("p", {
                    className: "text-lg w-full font-bold text-center flex items-center gap-2 justify-center bg-gray-100 p-2",
                    children: "লাইভ চ্যাট"
                }), e.jsx("div", {
                    className: "flex-1 flex items-center  p-2",
                    children: e.jsxs("div", {
                        children: [e.jsxs("div", {
                            className: "text-center my-4",
                            children: [e.jsx("p", {
                                className: "font-bold text-lg mb-2",
                                children: "আপনার কথা আমাদের কাছে সবচেয়ে মূল্যবান!"
                            }), "যেকোনো প্রশ্ন, পরামর্শ বা সমস্যার দ্রুত সমাধানে আমরা সবসময় আছি আপনার পাশে।"]
                        }), e.jsx("div", {
                            className: "flex items-center justify-center",
                            children: e.jsx(C, {})
                        })]
                    })
                })]
            })]
        })]
    })
}
  , ee = I.memo(V);
export {ee as default};
