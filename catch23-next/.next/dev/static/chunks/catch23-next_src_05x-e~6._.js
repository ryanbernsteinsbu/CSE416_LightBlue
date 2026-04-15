(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/catch23-next/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "5749fb8b46d9770e8007b180c774907ddd2945ecba0ea3860ef86194244ac8af") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5749fb8b46d9770e8007b180c774907ddd2945ecba0ea3860ef86194244ac8af";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const onDocClick = {
                    "Navbar[useEffect() > onDocClick]": (e)=>{
                        if (!menuRef.current) {
                            return;
                        }
                        if (!menuRef.current.contains(e.target)) {
                            setOpen(false);
                        }
                    }
                }["Navbar[useEffect() > onDocClick]"];
                document.addEventListener("mousedown", onDocClick);
                return ()=>document.removeEventListener("mousedown", onDocClick);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[<button>.onClick]": ()=>setOpen(_NavbarButtonOnClickSetOpen)
        })["Navbar[<button>.onClick]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fa-solid fa-bars"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== open) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tooltip-wrap tooltip-right",
            "data-tip": "Menu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "navbar-iconbtn",
                type: "button",
                onClick: t2,
                "aria-label": "Menu",
                "aria-expanded": open,
                children: t3
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                lineNumber: 63,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = open;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== router) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar-brand",
            onClick: {
                "Navbar[<div>.onClick]": ()=>router.push("/")
            }["Navbar[<div>.onClick]"],
            role: "button",
            tabIndex: 0,
            children: "CATCH 23"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = router;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== open) {
        t6 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navmenu",
            role: "menu",
            "aria-label": "Navigation menu",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "navmenu-item",
                    href: "/",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                    lineNumber: 81,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "navmenu-item",
                    href: "/player",
                    onClick: {
                        "Navbar[<Link>.onClick]": ()=>setOpen(false)
                    }["Navbar[<Link>.onClick]"],
                    children: "Player Information"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                    lineNumber: 83,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 81,
            columnNumber: 18
        }, this);
        $[9] = open;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t4 || $[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar-left",
            ref: menuRef,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== router) {
        t8 = ({
            "Navbar[<button>.onClick]": ()=>router.push("/profile")
        })["Navbar[<button>.onClick]"];
        $[15] = router;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fa-solid fa-user"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tooltip-wrap tooltip-left",
            "data-tip": "View Profile",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "navbar-iconbtn",
                type: "button",
                onClick: t8,
                "aria-label": "Profile",
                children: t9
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                lineNumber: 120,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[18] = t8;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "navbar",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t7;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
}
_s(Navbar, "Uo1cSJ0nhhDK0ertZjBqdurOa1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
function _NavbarButtonOnClickSetOpen(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmDeleteModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ConfirmDeleteModal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "70bb0492bccf13560201c721a68b566e0c1b983d70d26ef3b8eb711fc84eaa4b") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "70bb0492bccf13560201c721a68b566e0c1b983d70d26ef3b8eb711fc84eaa4b";
    }
    const { isOpen, leagueName, onCancel, onConfirm } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-title",
            children: "ARE YOU SURE YOU WANT TO DELETE"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== leagueName) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-league",
            children: [
                leagueName,
                "?"
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = leagueName;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-warning",
            children: "YOU CANNOT UNDO THIS ACTION"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-inner",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onCancel) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "del-btn",
            type: "button",
            onClick: onCancel,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = onCancel;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== onConfirm) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "del-btn danger",
            type: "button",
            onClick: onConfirm,
            children: "Delete"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = onConfirm;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-actions",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t4 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-backdrop",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "del-card",
                role: "dialog",
                "aria-modal": "true",
                children: [
                    t4,
                    t7
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                lineNumber: 76,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[14] = t4;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_c = ConfirmDeleteModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDeleteModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLeague",
    ()=>createLeague,
    "createPlayer",
    ()=>createPlayer,
    "createTeam",
    ()=>createTeam,
    "deleteLeague",
    ()=>deleteLeague,
    "deletePlayer",
    ()=>deletePlayer,
    "deleteTeam",
    ()=>deleteTeam,
    "getAllPlayers",
    ()=>getAllPlayers,
    "getLeagueTeams",
    ()=>getLeagueTeams,
    "getPlayer",
    ()=>getPlayer,
    "getPlayerByMlbId",
    ()=>getPlayerByMlbId,
    "getPlayersByPosition",
    ()=>getPlayersByPosition,
    "getTeam",
    ()=>getTeam,
    "getTeamDraftPicks",
    ()=>getTeamDraftPicks,
    "getUserLeagues",
    ()=>getUserLeagues,
    "loginUser",
    ()=>loginUser,
    "registerUser",
    ()=>registerUser,
    "saveDraftPicks",
    ()=>saveDraftPicks,
    "updatePlayer",
    ()=>updatePlayer,
    "updateTeam",
    ()=>updateTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = 'http://localhost:8000';
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = BASE_URL;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
const registerUser = (email, displayName, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/users/register', {
        email,
        displayName,
        password
    });
const loginUser = (email, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/users/login', {
        email,
        password
    });
const createLeague = (leagueData)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/leagues/create', {
        title: leagueData.name,
        season: leagueData.season,
        status: 'PRE_DRAFT',
        leagueIconUrl: 'https://i.imgur.com/DxHxkuJ.png',
        user_id: ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("user_id") : "TURBOPACK unreachable"
    });
const deleteLeague = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/leagues/${id}`);
const getUserLeagues = (userId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/leagues/user/${userId}`);
const createTeam = (name, leagueId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/teams/create', {
        name,
        league_id: leagueId,
        budget: 260 // default
    });
const getLeagueTeams = (leagueId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/teams/league/${leagueId}`);
const getTeam = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/teams/${id}`);
const updateTeam = (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/teams/${id}`, data);
const deleteTeam = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/teams/${id}`);
const getAllPlayers = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/players/all');
const getPlayer = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/players/${id}`);
const getPlayerByMlbId = (mlbPlayerId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/players/mlbId/${mlbPlayerId}`);
const getPlayersByPosition = (position)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/players/position/${position}`);
const createPlayer = (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/players/create', data);
const updatePlayer = (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/players/${id}`, data);
const deletePlayer = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/players/${id}`);
const saveDraftPicks = (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/draft-picks/bulk', payload);
const getTeamDraftPicks = (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/draft-picks/team/${teamId}`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/CreateLeagueStepOne.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueStepOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function CreateLeagueStepOne(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "d49c17ff0c84a8498f86802aeba3eb178adf5bcb814ed13262c8d9997916f07a") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d49c17ff0c84a8498f86802aeba3eb178adf5bcb814ed13262c8d9997916f07a";
    }
    const { leagueName, setLeagueName, logoFile, logoPreview, onLogoChange, setLogoFile, setLogoPreview, canGoNext, onNext } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-title",
            children: "Create League"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== setLeagueName) {
        t2 = ({
            "CreateLeagueStepOne[<input>.onChange]": (e)=>setLeagueName(e.target.value)
        })["CreateLeagueStepOne[<input>.onChange]"];
        $[2] = setLeagueName;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== leagueName || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-field",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "clm-input",
                value: leagueName,
                onChange: t2,
                placeholder: "League Name"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                lineNumber: 41,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = leagueName;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "clm-label",
            children: "Upload League Logo"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== onLogoChange) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "clm-logo-input",
            className: "clm-file-hidden",
            type: "file",
            accept: "image/*",
            onChange: onLogoChange
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[8] = onLogoChange;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== logoPreview || $[11] !== setLogoFile || $[12] !== setLogoPreview) {
        t6 = ({
            "CreateLeagueStepOne[<label>.onDrop]": (e_1)=>{
                e_1.preventDefault();
                const file = e_1.dataTransfer.files?.[0];
                if (!file) {
                    return;
                }
                if (!file.type.startsWith("image/")) {
                    alert("Please upload an image file.");
                    return;
                }
                if (logoPreview) {
                    URL.revokeObjectURL(logoPreview);
                }
                setLogoFile(file);
                setLogoPreview(URL.createObjectURL(file));
            }
        })["CreateLeagueStepOne[<label>.onDrop]"];
        $[10] = logoPreview;
        $[11] = setLogoFile;
        $[12] = setLogoPreview;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-dropicon",
            "aria-hidden": "true",
            children: "⬆"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = logoFile ? "Replace file" : "Drag & drop or click to upload";
    let t9;
    if ($[15] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-dropheadline",
            children: t8
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[15] = t8;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-dropsub",
            children: "PNG, JPG, GIF up to ~10MB"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== logoFile) {
        t11 = logoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-filename",
            children: logoFile.name
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 115,
            columnNumber: 23
        }, this);
        $[18] = logoFile;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11 || $[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-droptext",
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "clm-logo-input",
            className: "clm-dropzone",
            onDragOver: _CreateLeagueStepOneLabelOnDragOver,
            onDrop: t6,
            children: [
                t7,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t6;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== logoPreview) {
        t14 = logoPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "clm-logo-preview",
            src: logoPreview,
            alt: "logo preview"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 141,
            columnNumber: 26
        }, this);
        $[26] = logoPreview;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13 || $[29] !== t14 || $[30] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-field",
            children: [
                t4,
                t5,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t5;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    const t17 = !canGoNext;
    let t18;
    if ($[33] !== onNext || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-footer",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "clm-primary",
                    type: "button",
                    onClick: onNext,
                    disabled: t17,
                    children: "Next →"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                    lineNumber: 167,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[33] = onNext;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== t15 || $[37] !== t18 || $[38] !== t3) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-step",
            children: [
                t1,
                t3,
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[36] = t15;
        $[37] = t18;
        $[38] = t3;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    return t19;
}
_c = CreateLeagueStepOne;
function _CreateLeagueStepOneLabelOnDragOver(e_0) {
    return e_0.preventDefault();
}
var _c;
__turbopack_context__.k.register(_c, "CreateLeagueStepOne");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_DRAFT_SETTINGS",
    ()=>INITIAL_DRAFT_SETTINGS,
    "INITIAL_PLAYER_SETTINGS",
    ()=>INITIAL_PLAYER_SETTINGS,
    "INITIAL_ROSTER_SETTINGS",
    ()=>INITIAL_ROSTER_SETTINGS,
    "INITIAL_SCORING_SETTINGS",
    ()=>INITIAL_SCORING_SETTINGS,
    "TABS",
    ()=>TABS,
    "buildLeaguePayload",
    ()=>buildLeaguePayload
]);
const TABS = [
    {
        key: "draft",
        label: "Draft"
    },
    {
        key: "players",
        label: "Players"
    },
    {
        key: "roster",
        label: "Roster"
    },
    {
        key: "scoring",
        label: "Scoring"
    }
];
const INITIAL_PLAYER_SETTINGS = {
    positionEligibilityRule: true,
    multiPositionEnabled: false,
    prospectEligibility: false,
    rookieStatusFilter: false,
    prospects: false,
    minorLeaguePlayers: false,
    freeAgents: false,
    twoWayPlayerSplit: false,
    injuredPlayersDraftable: false,
    autoInjuryRiskIndicator: false,
    hideLongTermIL: false
};
const INITIAL_ROSTER_SETTINGS = {
    numCatchers: 2,
    numFirstBase: 1,
    numSecondBase: 1,
    numThirdBase: 1,
    numShortstop: 1,
    numCornerInfield: 1,
    numMiddleInfield: 1,
    numOutfield: 5,
    numUtility: 1,
    numPitchers: 9,
    numTaxi: 8
};
const INITIAL_SCORING_SETTINGS = {
    useAvg: true,
    useHr: true,
    useRbi: true,
    useSb: true,
    useRuns: true,
    useEra: true,
    useWhip: true,
    useWins: true,
    useStrikeouts: true,
    useSaves: true
};
const INITIAL_DRAFT_SETTINGS = {
    budget: 260,
    numTeams: 0
};
function buildLeaguePayload({ leagueName, logoPreview, logoFile, draftSettings, scoringSettings, playerSettings, rosterSettings }) {
    return {
        id: crypto.randomUUID(),
        name: leagueName.trim(),
        logoUrl: logoPreview || "",
        currRank: 0,
        projectFinish: 0,
        dateMade: new Date(),
        season: new Date().getFullYear(),
        status: "ACTIVE",
        draftSettings: {
            budget: draftSettings.budget,
            numTeams: draftSettings.numTeams
        },
        scoringSettings: {
            useAvg: scoringSettings.useAvg,
            useHr: scoringSettings.useHr,
            useRbi: scoringSettings.useRbi,
            useSb: scoringSettings.useSb,
            useRuns: scoringSettings.useRuns,
            useEra: scoringSettings.useEra,
            useWhip: scoringSettings.useWhip,
            useWins: scoringSettings.useWins,
            useStrikeouts: scoringSettings.useStrikeouts,
            useSaves: scoringSettings.useSaves
        },
        playerSettings: {
            positionEligibility: playerSettings.positionEligibilityRule,
            multiPositionEnabled: playerSettings.multiPositionEnabled,
            prospectEligibility: playerSettings.prospectEligibility,
            rookieStatusFilter: playerSettings.rookieStatusFilter,
            mlbOnly: playerSettings.mlbOnly,
            mlbPlusProspects: playerSettings.mlbPlusProspects,
            minorLeaguePlayers: playerSettings.minorLeaguePlayers,
            freeAgents: playerSettings.freeAgents,
            draftInjuredPlayers: playerSettings.draftInjuredPlayers,
            autoInjuryRisk: playerSettings.autoInjuryRiskIndicator,
            hideLongTermIL: playerSettings.hideLongTermIL,
            ohtaniRule: playerSettings.ohtaniRule
        },
        rosterSettings: {
            numCatchers: rosterSettings.numCatchers,
            numFirstBase: rosterSettings.numFirstBase,
            numSecondBase: rosterSettings.numSecondBase,
            numThirdBase: rosterSettings.numThirdBase,
            numShortstop: rosterSettings.numShortstop,
            numCornerInfield: rosterSettings.numCornerInfield,
            numMiddleInfield: rosterSettings.numMiddleInfield,
            numOutfield: rosterSettings.numOutfield,
            numUtility: rosterSettings.numUtility,
            numPitchers: rosterSettings.numPitchers,
            numTaxi: rosterSettings.numTaxi
        },
        logoFile
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/CreateLeagueSettings.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-client] (ecmascript)");
;
;
;
;
function CreateLeagueSettings(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "4ea66d9e6d5db8596a855020358773470dcbdb8e2178f1492a49d16479d0ec5e") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ea66d9e6d5db8596a855020358773470dcbdb8e2178f1492a49d16479d0ec5e";
    }
    const { activeTab, setActiveTab, leagueName, playerSettings, setPlayerSettings, rosterSettings, setRosterSettings, scoringSettings, setScoringSettings, draftSettings, setDraftSettings, onBack, onSave } = t0;
    let t1;
    if ($[1] !== activeTab || $[2] !== setActiveTab) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABS"].map({
            "CreateLeagueSettings[TABS.map()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: activeTab === t.key ? "clm-tab active" : "clm-tab",
                    onClick: {
                        "CreateLeagueSettings[TABS.map() > <button>.onClick]": ()=>setActiveTab(t.key)
                    }["CreateLeagueSettings[TABS.map() > <button>.onClick]"],
                    children: t.label
                }, t.key, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 30,
                    columnNumber: 48
                }, this)
        }["CreateLeagueSettings[TABS.map()]"]);
        $[1] = activeTab;
        $[2] = setActiveTab;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-sidebar",
            children: t1
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-title",
            children: "Settings"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== leagueName) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-subtitle",
            children: leagueName
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = leagueName;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== activeTab || $[10] !== draftSettings || $[11] !== playerSettings || $[12] !== rosterSettings || $[13] !== scoringSettings || $[14] !== setDraftSettings || $[15] !== setPlayerSettings || $[16] !== setRosterSettings || $[17] !== setScoringSettings) {
        t5 = activeTab === "players" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "clm-section-title",
                            children: "Eligibility"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 65,
                            columnNumber: 92
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Position Eligibility Rule"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 65,
                                    columnNumber: 174
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.positionEligibilityRule ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.positionEligibilityRule ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 65,
                                    columnNumber: 241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 65,
                            columnNumber: 142
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Multi-Position Enabled"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 67,
                                    columnNumber: 158
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.multiPositionEnabled ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings2)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.multiPositionEnabled ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 67,
                                    columnNumber: 222
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 67,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Prospect Eligibility"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 69,
                                    columnNumber: 155
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.prospectEligibility ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings3)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.prospectEligibility ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 69,
                                    columnNumber: 217
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 69,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Rookie Status Filter"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 71,
                                    columnNumber: 154
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.rookieStatusFilter ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings4)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.rookieStatusFilter ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 71,
                                    columnNumber: 216
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 71,
                            columnNumber: 122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 65,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "clm-section-title",
                            children: "Player Pool"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 73,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Include Prospects"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 73,
                                    columnNumber: 238
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.prospects ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings5)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.prospects ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 73,
                                    columnNumber: 297
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 73,
                            columnNumber: 206
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Include Minor League Players"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 75,
                                    columnNumber: 144
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.minorLeaguePlayers ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings6)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.minorLeaguePlayers ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 75,
                                    columnNumber: 214
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 75,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Include Free Agents"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 77,
                                    columnNumber: 153
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.freeAgents ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings7)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.freeAgents ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 77,
                                    columnNumber: 214
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 77,
                            columnNumber: 121
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Include Two Way Player Split"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 79,
                                    columnNumber: 145
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.twoWayPlayerSplit ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings8)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.twoWayPlayerSplit ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 79,
                                    columnNumber: 215
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 79,
                            columnNumber: 113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 73,
                    columnNumber: 127
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "clm-section-title",
                            children: "Injury Handling"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 81,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Injured Players Draftable"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 81,
                                    columnNumber: 241
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.injuredPlayersDraftable ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings9)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.injuredPlayersDraftable ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 81,
                                    columnNumber: 308
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 81,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Auto Injury Risk Indicator"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 83,
                                    columnNumber: 158
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.autoInjuryRiskIndicator ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings10)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.autoInjuryRiskIndicator ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 83,
                                    columnNumber: 226
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 83,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-toggle-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-toggle-label",
                                    children: "Hide Long Term IL"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 85,
                                    columnNumber: 158
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `clm-toggle ${playerSettings.hideLongTermIL ? "on" : "off"}`,
                                    onClick: {
                                        "CreateLeagueSettings[<button>.onClick]": ()=>setPlayerSettings(_CreateLeagueSettingsButtonOnClickSetPlayerSettings11)
                                    }["CreateLeagueSettings[<button>.onClick]"],
                                    children: playerSettings.hideLongTermIL ? "ON" : "OFF"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 85,
                                    columnNumber: 217
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 85,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 81,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 65,
            columnNumber: 36
        }, this) : activeTab === "roster" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Roster"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 87,
                    columnNumber: 184
                }, this),
                [
                    [
                        "Number of Catchers",
                        "numCatchers"
                    ],
                    [
                        "Number of First Basemen",
                        "numFirstBase"
                    ],
                    [
                        "Number of Second Basemen",
                        "numSecondBase"
                    ],
                    [
                        "Number of Third Basemen",
                        "numThirdBase"
                    ],
                    [
                        "Number of Shortstop",
                        "numShortstop"
                    ],
                    [
                        "Number of Corner Infield",
                        "numCornerInfield"
                    ],
                    [
                        "Number of Middle Infield",
                        "numMiddleInfield"
                    ],
                    [
                        "Number of Outfielders",
                        "numOutfield"
                    ],
                    [
                        "Number of Utility Players",
                        "numUtility"
                    ],
                    [
                        "Number of Pitchers",
                        "numPitchers"
                    ],
                    [
                        "Number of Taxi Players",
                        "numTaxi"
                    ]
                ].map({
                    "CreateLeagueSettings[(anonymous)()]": (t6)=>{
                        const [label, key] = t6;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-num-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clm-num-label",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 90,
                                    columnNumber: 57
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    className: "clm-num-input",
                                    value: rosterSettings[key],
                                    min: 0,
                                    onChange: {
                                        "CreateLeagueSettings[(anonymous)() > <input>.onChange]": (e)=>setRosterSettings({
                                                "CreateLeagueSettings[(anonymous)() > <input>.onChange > setRosterSettings()]": (prev_10)=>({
                                                        ...prev_10,
                                                        [key]: parseInt(e.target.value) || 0
                                                    })
                                            }["CreateLeagueSettings[(anonymous)() > <input>.onChange > setRosterSettings()]"])
                                    }["CreateLeagueSettings[(anonymous)() > <input>.onChange]"]
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 90,
                                    columnNumber: 103
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 90,
                            columnNumber: 18
                        }, this);
                    }
                }["CreateLeagueSettings[(anonymous)()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 87,
            columnNumber: 157
        }, this) : activeTab === "scoring" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "clm-section-title",
                            children: "Hitters"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 99,
                            columnNumber: 140
                        }, this),
                        [
                            [
                                "Use Batting Average",
                                "useAvg"
                            ],
                            [
                                "Use Home Runs",
                                "useHr"
                            ],
                            [
                                "Use Runs Batted In",
                                "useRbi"
                            ],
                            [
                                "Use Stolen Bases",
                                "useSb"
                            ],
                            [
                                "Use Runs",
                                "useRuns"
                            ]
                        ].map({
                            "CreateLeagueSettings[(anonymous)()]": (t7)=>{
                                const [label_0, key_0] = t7;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "clm-toggle-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "clm-toggle-label",
                                            children: label_0
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 102,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `clm-toggle ${scoringSettings[key_0] ? "on" : "off"}`,
                                            onClick: {
                                                "CreateLeagueSettings[(anonymous)() > <button>.onClick]": ()=>setScoringSettings({
                                                        "CreateLeagueSettings[(anonymous)() > <button>.onClick > setScoringSettings()]": (prev_11)=>({
                                                                ...prev_11,
                                                                [key_0]: !prev_11[key_0]
                                                            })
                                                    }["CreateLeagueSettings[(anonymous)() > <button>.onClick > setScoringSettings()]"])
                                            }["CreateLeagueSettings[(anonymous)() > <button>.onClick]"],
                                            children: scoringSettings[key_0] ? "ON" : "OFF"
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 102,
                                            columnNumber: 115
                                        }, this)
                                    ]
                                }, key_0, true, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 102,
                                    columnNumber: 20
                                }, this);
                            }
                        }["CreateLeagueSettings[(anonymous)()]"])
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 99,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "clm-section-title",
                            children: "Pitchers"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 111,
                            columnNumber: 86
                        }, this),
                        [
                            [
                                "Use Earned Run Average",
                                "useEra"
                            ],
                            [
                                "Use WHIP",
                                "useWhip"
                            ],
                            [
                                "Use Wins",
                                "useWins"
                            ],
                            [
                                "Use Strikeouts",
                                "useStrikeouts"
                            ],
                            [
                                "Use Saves",
                                "useSaves"
                            ]
                        ].map({
                            "CreateLeagueSettings[(anonymous)()]": (t8)=>{
                                const [label_1, key_1] = t8;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "clm-toggle-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "clm-toggle-label",
                                            children: label_1
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 114,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `clm-toggle ${scoringSettings[key_1] ? "on" : "off"}`,
                                            onClick: {
                                                "CreateLeagueSettings[(anonymous)() > <button>.onClick]": ()=>setScoringSettings({
                                                        "CreateLeagueSettings[(anonymous)() > <button>.onClick > setScoringSettings()]": (prev_12)=>({
                                                                ...prev_12,
                                                                [key_1]: !prev_12[key_1]
                                                            })
                                                    }["CreateLeagueSettings[(anonymous)() > <button>.onClick > setScoringSettings()]"])
                                            }["CreateLeagueSettings[(anonymous)() > <button>.onClick]"],
                                            children: scoringSettings[key_1] ? "ON" : "OFF"
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 114,
                                            columnNumber: 115
                                        }, this)
                                    ]
                                }, key_1, true, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 114,
                                    columnNumber: 20
                                }, this);
                            }
                        }["CreateLeagueSettings[(anonymous)()]"])
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 111,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 99,
            columnNumber: 84
        }, this) : activeTab === "draft" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Draft"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 123,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-num-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "clm-num-label",
                            children: "Budget"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 123,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: "clm-num-input",
                            value: draftSettings.budget,
                            min: 0,
                            onChange: {
                                "CreateLeagueSettings[<input>.onChange]": (e_0)=>setDraftSettings({
                                        "CreateLeagueSettings[<input>.onChange > setDraftSettings()]": (prev_13)=>({
                                                ...prev_13,
                                                budget: parseInt(e_0.target.value) || 0
                                            })
                                    }["CreateLeagueSettings[<input>.onChange > setDraftSettings()]"])
                            }["CreateLeagueSettings[<input>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 123,
                            columnNumber: 205
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 123,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clm-num-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "clm-num-label",
                            children: "Number of Teams"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 130,
                            columnNumber: 91
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: "clm-num-input",
                            value: draftSettings.numTeams,
                            min: 0,
                            onChange: {
                                "CreateLeagueSettings[<input>.onChange]": (e_1)=>setDraftSettings({
                                        "CreateLeagueSettings[<input>.onChange > setDraftSettings()]": (prev_14)=>({
                                                ...prev_14,
                                                numTeams: parseInt(e_1.target.value) || 0
                                            })
                                    }["CreateLeagueSettings[<input>.onChange > setDraftSettings()]"])
                            }["CreateLeagueSettings[<input>.onChange]"]
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 130,
                            columnNumber: 145
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                    lineNumber: 130,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 123,
            columnNumber: 90
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-panel",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-placeholder",
                children: "Settings go here later."
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                lineNumber: 137,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 137,
            columnNumber: 71
        }, this);
        $[9] = activeTab;
        $[10] = draftSettings;
        $[11] = playerSettings;
        $[12] = rosterSettings;
        $[13] = scoringSettings;
        $[14] = setDraftSettings;
        $[15] = setPlayerSettings;
        $[16] = setRosterSettings;
        $[17] = setScoringSettings;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== onBack) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "clm-secondary",
            type: "button",
            onClick: onBack,
            children: "← Back"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[19] = onBack;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== onSave) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "clm-primary",
            type: "button",
            onClick: onSave,
            children: "Save"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[21] = onSave;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] !== t6 || $[24] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-footer",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[23] = t6;
        $[24] = t7;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== t4 || $[27] !== t5 || $[28] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-main",
            children: [
                t3,
                t4,
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[26] = t4;
        $[27] = t5;
        $[28] = t8;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== t2 || $[31] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-step2",
            children: [
                t2,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[30] = t2;
        $[31] = t9;
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    return t10;
}
_c = CreateLeagueSettings;
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings11(prev_9) {
    return {
        ...prev_9,
        hideLongTermIL: !prev_9.hideLongTermIL
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings10(prev_8) {
    return {
        ...prev_8,
        autoInjuryRiskIndicator: !prev_8.autoInjuryRiskIndicator
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings9(prev_7) {
    return {
        ...prev_7,
        injuredPlayersDraftable: !prev_7.injuredPlayersDraftable
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings8(prev_6) {
    return {
        ...prev_6,
        twoWayPlayerSplit: !prev_6.twoWayPlayerSplit
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings7(prev_5) {
    return {
        ...prev_5,
        freeAgents: !prev_5.freeAgents
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings6(prev_4) {
    return {
        ...prev_4,
        minorLeaguePlayers: !prev_4.minorLeaguePlayers
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings5(prev_3) {
    return {
        ...prev_3,
        prospects: !prev_3.prospects
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings4(prev_2) {
    return {
        ...prev_2,
        rookieStatusFilter: !prev_2.rookieStatusFilter
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings3(prev_1) {
    return {
        ...prev_1,
        prospectEligibility: !prev_1.prospectEligibility
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings2(prev_0) {
    return {
        ...prev_0,
        multiPositionEnabled: !prev_0.multiPositionEnabled
    };
}
function _CreateLeagueSettingsButtonOnClickSetPlayerSettings(prev) {
    return {
        ...prev,
        positionEligibilityRule: !prev.positionEligibilityRule
    };
}
var _c;
__turbopack_context__.k.register(_c, "CreateLeagueSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/CreateLeagueModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueStepOne$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueStepOne.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueSettings.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateLeagueModal({ isOpen, onClose, onSave }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("draft");
    const [leagueName, setLeagueName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoPreview, setLogoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [playerSettings, setPlayerSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PLAYER_SETTINGS"]);
    const [rosterSettings, setRosterSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ROSTER_SETTINGS"]);
    const [scoringSettings, setScoringSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SCORING_SETTINGS"]);
    const [draftSettings, setDraftSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_DRAFT_SETTINGS"]);
    const canGoNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateLeagueModal.useMemo[canGoNext]": ()=>leagueName.trim().length > 0
    }["CreateLeagueModal.useMemo[canGoNext]"], [
        leagueName
    ]);
    const onLogoChange = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file.");
            return;
        }
        if (logoPreview) URL.revokeObjectURL(logoPreview);
        setLogoFile(file);
        const objectUrl = URL.createObjectURL(file);
        setLogoPreview(objectUrl);
    };
    const resetState = ()=>{
        if (logoPreview) URL.revokeObjectURL(logoPreview);
        setStep(1);
        setActiveTab("draft");
        setLeagueName("");
        setLogoFile(null);
        setLogoPreview("");
        setPlayerSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_PLAYER_SETTINGS"]);
        setRosterSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_ROSTER_SETTINGS"]);
        setScoringSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_SCORING_SETTINGS"]);
        setDraftSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_DRAFT_SETTINGS"]);
    };
    const handleClose = ()=>{
        resetState();
        onClose?.();
    };
    const handleNext = ()=>{
        if (!canGoNext) return;
        setStep(2);
    };
    const handleBack = ()=>setStep(1);
    const handleSave = async ()=>{
        const newLeague = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLeaguePayload"])({
            leagueName,
            logoPreview,
            logoFile,
            draftSettings,
            scoringSettings,
            playerSettings,
            rosterSettings
        });
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLeague"])(newLeague);
            onSave?.({
                ...newLeague,
                id: Number(data.id),
                title: data.title
            });
            handleClose();
        } catch (err) {
            console.error("Failed to create league:", err);
            alert("Error creating league. Please try again.");
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clm-backdrop",
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-card",
            onClick: (e_0)=>e_0.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "clm-close",
                    type: "button",
                    onClick: handleClose,
                    "aria-label": "Close",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueStepOne$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    leagueName: leagueName,
                    setLeagueName: setLeagueName,
                    logoFile: logoFile,
                    logoPreview: logoPreview,
                    onLogoChange: onLogoChange,
                    setLogoFile: setLogoFile,
                    setLogoPreview: setLogoPreview,
                    canGoNext: canGoNext,
                    onNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
                    lineNumber: 88,
                    columnNumber: 23
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeTab: activeTab,
                    setActiveTab: setActiveTab,
                    leagueName: leagueName,
                    playerSettings: playerSettings,
                    setPlayerSettings: setPlayerSettings,
                    rosterSettings: rosterSettings,
                    setRosterSettings: setRosterSettings,
                    scoringSettings: scoringSettings,
                    setScoringSettings: setScoringSettings,
                    draftSettings: draftSettings,
                    setDraftSettings: setDraftSettings,
                    onBack: handleBack,
                    onSave: handleSave
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
                    lineNumber: 88,
                    columnNumber: 277
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_s(CreateLeagueModal, "3PoKcID/RfMzOU8tl19jdrh1Jfc=");
_c = CreateLeagueModal;
var _c;
__turbopack_context__.k.register(_c, "CreateLeagueModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "ee060be5bd7804c56f4b0ed66eb044817a1411d7d06ad1bb11d06f0722bdf0ea") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ee060be5bd7804c56f4b0ed66eb044817a1411d7d06ad1bb11d06f0722bdf0ea";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[useEffect()]": ()=>{
                const loadLeagues = async function loadLeagues() {
                    const userId = localStorage.getItem("user_id");
                    if (!userId) {
                        console.log("No user_id found, skipping league fetch");
                        setLeagues([]);
                        return;
                    }
                    ;
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserLeagues"])(userId);
                        setLeagues(response.data);
                    } catch (t3) {
                        const error = t3;
                        console.error("Error loading leagues:", error);
                    }
                };
                loadLeagues();
            }
        })["Home[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[onCreateLeague]": ()=>{
                setIsCreateOpen(true);
            }
        })["Home[onCreateLeague]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const onCreateLeague = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "home-leagues-title",
            children: "Leagues"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-header",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tooltip-wrap tooltip-right",
                    "data-tip": "Create a new league",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "create-league-btn",
                        onClick: onCreateLeague,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 79,
                        columnNumber: 118
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 79,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== leagues) {
        t6 = leagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-empty",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "No leagues yet."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 86,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Click the button to create one."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 86,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 86,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "league-grid",
            children: leagues.map({
                "Home[leagues.map()]": (league)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "league-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "league-close",
                                type: "button",
                                onClick: {
                                    "Home[leagues.map() > <button>.onClick]": (e)=>{
                                        e.stopPropagation();
                                        setDeleteTarget({
                                            id: league.id,
                                            name: league.title || league.name
                                        });
                                    }
                                }["Home[leagues.map() > <button>.onClick]"],
                                "aria-label": "Remove league",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 87,
                                columnNumber: 87
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "league-logo-placeholder",
                                src: league.leagueIconUrl || league.league_icon_url || league.logoUrl || "https://i.imgur.com/DxHxkuJ.png",
                                alt: "league logo"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 95,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-title",
                                children: league.title || league.name
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 95,
                                columnNumber: 262
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-subtitle",
                                children: [
                                    league.format,
                                    " • ",
                                    league.teamCount ?? 0,
                                    " TEAMS • ",
                                    league.season,
                                    " SEASON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 95,
                                columnNumber: 327
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-season",
                                children: [
                                    "Season ",
                                    league.seasonNum
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 95,
                                columnNumber: 438
                            }, this)
                        ]
                    }, league.id, true, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 87,
                        columnNumber: 42
                    }, this)
            }["Home[leagues.map()]"])
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 86,
            columnNumber: 132
        }, this);
        $[7] = leagues;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = !!deleteTarget;
    const t8 = deleteTarget?.name || "";
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Home[<ConfirmDeleteModal>.onCancel]": ()=>setDeleteTarget(null)
        })["Home[<ConfirmDeleteModal>.onCancel]"];
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== deleteTarget) {
        t10 = ({
            "Home[<ConfirmDeleteModal>.onConfirm]": async ()=>{
                ;
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteLeague"])(deleteTarget.id);
                    setLeagues({
                        "Home[<ConfirmDeleteModal>.onConfirm > setLeagues()]": (prev)=>prev.filter({
                                "Home[<ConfirmDeleteModal>.onConfirm > setLeagues() > prev.filter()]": (l)=>l.id !== deleteTarget.id
                            }["Home[<ConfirmDeleteModal>.onConfirm > setLeagues() > prev.filter()]"])
                    }["Home[<ConfirmDeleteModal>.onConfirm > setLeagues()]"]);
                    setDeleteTarget(null);
                } catch (t11) {
                    const err = t11;
                    console.error("Failed to delete league:", err);
                    alert("Error deleting league. Please try again.");
                }
            }
        })["Home[<ConfirmDeleteModal>.onConfirm]"];
        $[10] = deleteTarget;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t10 || $[13] !== t7 || $[14] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: t7,
            leagueName: t8,
            onCancel: t9,
            onConfirm: t10
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t7;
        $[14] = t8;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Home[<CreateLeagueModal>.onClose]": ()=>setIsCreateOpen(false)
        })["Home[<CreateLeagueModal>.onClose]"];
        t13 = ({
            "Home[<CreateLeagueModal>.onSave]": (newLeague)=>{
                console.log("new league from modal:", newLeague);
                setLeagues({
                    "Home[<CreateLeagueModal>.onSave > setLeagues()]": (prev_0)=>[
                            newLeague,
                            ...prev_0
                        ]
                }["Home[<CreateLeagueModal>.onSave > setLeagues()]"]);
                setIsCreateOpen(false);
            }
        })["Home[<CreateLeagueModal>.onSave]"];
        $[16] = t12;
        $[17] = t13;
    } else {
        t12 = $[16];
        t13 = $[17];
    }
    let t14;
    if ($[18] !== isCreateOpen) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isCreateOpen,
            onClose: t12,
            onSave: t13
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[18] = isCreateOpen;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t11 || $[21] !== t14 || $[22] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home",
            children: [
                t5,
                t6,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t14;
        $[22] = t6;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    return t15;
}
_s(Home, "Tzyqr9TyQ2kjEXcvWSPiGEm7gIs=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/Login.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Login({ onLoginSuccess, handleError, onShowRegister }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        if (!email) {
            alert("Please enter email");
            return;
        }
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"])(email, password);
            console.log("LOGIN:", data);
            onLoginSuccess?.(data);
        } catch (err) {
            if (err.response?.status === 404) {
                alert("User not found.");
            } else if (err.response?.status === 401) {
                alert("Password entered incorrectly.");
            } else {
                alert("An error has occurred.");
                console.error(err);
                handleError?.(err);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "login_setup",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            id: "login_form",
            onSubmit: handleLogin,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    placeholder: "Email",
                    value: email,
                    onChange: (e_0)=>setEmail(e_0.target.value)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 39,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    placeholder: "Password",
                    type: "password",
                    value: password,
                    onChange: (e_1)=>setPassword(e_1.target.value)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 41,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "submit_login",
                    type: "submit",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "go_register",
                    type: "button",
                    onClick: onShowRegister,
                    children: "Register"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Login.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/Login.jsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s(Login, "3B3pqDcVnkT+z/sPK6Z9zQsLP+s=");
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/Register.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = 'http://localhost:8000';
function Register(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "dbdad3ac56d83a04b3f3ed184a5ed78d157852f7dd8f6afe1ff8bde1b430af35") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dbdad3ac56d83a04b3f3ed184a5ed78d157852f7dd8f6afe1ff8bde1b430af35";
    }
    const { onCreateUserClick, onShowLogin } = t0;
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [displayName, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [firstPassword, setFirstPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [secondPassword, setSecondPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [saveBanner, setSaveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorBanner, setErrorBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Register[showBanner]": ()=>{
                setSaveBanner(true);
                setTimeout({
                    "Register[showBanner > setTimeout()]": ()=>setSaveBanner(false)
                }["Register[showBanner > setTimeout()]"], 3000);
            }
        })["Register[showBanner]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const showBanner = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Register[showError]": (msg)=>{
                setErrorBanner(msg);
                setTimeout({
                    "Register[showError > setTimeout()]": ()=>setErrorBanner("")
                }["Register[showError > setTimeout()]"], 3000);
            }
        })["Register[showError]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const showError = t2;
    let t3;
    if ($[3] !== displayName || $[4] !== email || $[5] !== firstPassword || $[6] !== onCreateUserClick || $[7] !== secondPassword) {
        t3 = ({
            "Register[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (email === "") {
                    return showError("Email is required");
                }
                if (displayName === "") {
                    return showError("Display Name is required");
                }
                if (firstPassword === "") {
                    return showError("Password is required");
                }
                if (secondPassword === "") {
                    return showError("Re-type Password is required");
                }
                if (firstPassword !== secondPassword) {
                    return showError("Passwords do not match, please try again");
                }
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(email)) {
                    return showError("Please enter a valid email address.");
                }
                const emailSub = email.split("@")[0];
                const p = firstPassword.toLowerCase();
                if (p.includes(displayName.toLowerCase())) {
                    return showError("Password cannot contain your display name!");
                }
                if (p.includes(emailSub.toLowerCase())) {
                    return showError("Password cannot contain your email!");
                }
                ;
                try {
                    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUser"])(email, displayName, firstPassword);
                    console.log("REGISTER:", data);
                    setEmail("");
                    setName("");
                    setFirstPassword("");
                    setSecondPassword("");
                    showBanner();
                    setTimeout({
                        "Register[handleSubmit > setTimeout()]": ()=>onCreateUserClick()
                    }["Register[handleSubmit > setTimeout()]"], 1500);
                } catch (t4) {
                    const err = t4;
                    const status = err.response?.status;
                    const code = err.response?.data?.error;
                    if (status === 409) {
                        if (code === "EMAIL_TAKEN") {
                            showError("There's already an account associated with that email");
                        } else {
                            if (code === "DISPLAYNAME_TAKEN") {
                                showError("That display name is already taken");
                            } else {
                                showError("Error creating user. Please try again later.");
                            }
                        }
                    } else {
                        showError("Error creating user. Please try again later.");
                    }
                }
            }
        })["Register[handleSubmit]"];
        $[3] = displayName;
        $[4] = email;
        $[5] = firstPassword;
        $[6] = onCreateUserClick;
        $[7] = secondPassword;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleSubmit = t3;
    let t4;
    if ($[9] !== saveBanner) {
        t4 = saveBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "save-banner save-banner--visible",
            style: {
                transform: "translateX(-50%) translateY(0)"
            },
            children: "✅ Account successfully created!"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 135,
            columnNumber: 24
        }, this);
        $[9] = saveBanner;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== errorBanner) {
        t5 = errorBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "save-banner save-banner--visible",
            style: {
                transform: "translateX(-50%) translateY(0)",
                background: "#BD2522"
            },
            children: [
                "❌ ",
                errorBanner
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 145,
            columnNumber: 25
        }, this);
        $[11] = errorBanner;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Register[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["Register[<input>.onChange]"];
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: email,
            placeholder: "Email",
            onChange: t6
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[14] = email;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[16] = t8;
        $[17] = t9;
    } else {
        t8 = $[16];
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Register[<input>.onChange]": (e_1)=>setName(e_1.target.value)
        })["Register[<input>.onChange]"];
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== displayName) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: displayName,
            placeholder: "Display Name",
            onChange: t10
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[19] = displayName;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t13;
    } else {
        t12 = $[21];
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Register[<input>.onChange]": (e_2)=>setFirstPassword(e_2.target.value)
        })["Register[<input>.onChange]"];
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== firstPassword) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            value: firstPassword,
            placeholder: "Password",
            onChange: t14
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[24] = firstPassword;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
    } else {
        t16 = $[26];
        t17 = $[27];
    }
    let t18;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "Register[<input>.onChange]": (e_3)=>setSecondPassword(e_3.target.value)
        })["Register[<input>.onChange]"];
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== secondPassword) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            value: secondPassword,
            placeholder: "Re-Type password",
            onChange: t18
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[29] = secondPassword;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    let t21;
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "submit_login",
            type: "submit",
            children: "Register"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[31] = t20;
        $[32] = t21;
        $[33] = t22;
    } else {
        t20 = $[31];
        t21 = $[32];
        t22 = $[33];
    }
    let t23;
    if ($[34] !== onShowLogin) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "go_register",
            type: "button",
            onClick: onShowLogin,
            children: "Sign In"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[34] = onShowLogin;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] !== handleSubmit || $[37] !== t11 || $[38] !== t15 || $[39] !== t19 || $[40] !== t23 || $[41] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            id: "login_form",
            onSubmit: handleSubmit,
            children: [
                t7,
                t8,
                t9,
                t11,
                t12,
                t13,
                t15,
                t16,
                t17,
                t19,
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[36] = handleSubmit;
        $[37] = t11;
        $[38] = t15;
        $[39] = t19;
        $[40] = t23;
        $[41] = t7;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== t24 || $[44] !== t4 || $[45] !== t5) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "login_setup",
            children: [
                t4,
                t5,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Register.jsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[43] = t24;
        $[44] = t4;
        $[45] = t5;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    return t25;
}
_s(Register, "Gt4sqZoNvG2e84seTHzM1/3DYk4=");
_c = Register;
var _c;
__turbopack_context__.k.register(_c, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/Modal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Modal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "cc07cd880fe09d63bbe7b1f7465ff2c5e81f419d691c7c3f21b90c7b5e2b5c21") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cc07cd880fe09d63bbe7b1f7465ff2c5e81f419d691c7c3f21b90c7b5e2b5c21";
    }
    const { isOpen, children } = t0;
    if (!isOpen) {
        return null;
    }
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-backdrop",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-card",
                children: children
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Modal.jsx",
                lineNumber: 19,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Modal.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/reddude.0~suoz9u7hxe9.png");}),
"[project]/catch23-next/src/assets/images/reddude.png.mjs { IMAGE => \"[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 750,
    height: 1000,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR42gHIADf/AAcHBwAMCwsADAsLAQwMDAAICAgAAAAAAABsYmEHuqmoEbh4d1i9trYJhYWFAAYGBgAAjUxHHvN+d2T2XVrG+sG+SbKxsQEIBwcAAIl1ZwLxlotC9mRhuvhvbbWyq6oKCAcHAACRjowA+/LvCPmYl4D5bWy7r3x8RwcHBwEAk5KSAP75+An5paV0+aOjd7CGhT0IBwcAAHRycgDJyMgAyLu6EsWYlz+NiYkEBgYGAAAKCgoAEhERABIREQEREBACDAwMAAEBAQDhiEJA4tRxTwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/AuthScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Login.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Register$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Register.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Modal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/catch23-next/src/assets/images/reddude.png.mjs { IMAGE => "[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
function AuthScreen(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "8695bd153e98a5943e92332c3db42e771d75dab81b1cee85b8fb0891561869fa") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8695bd153e98a5943e92332c3db42e771d75dab81b1cee85b8fb0891561869fa";
    }
    const { authView, setAuthView, onLoginSuccess } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "landing-runner",
            src: __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            alt: "runner"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "landing-title",
            children: "CATCH 23"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== authView || $[4] !== onLoginSuccess || $[5] !== setAuthView) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "landing",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: true,
                    children: authView === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onLoginSuccess: onLoginSuccess,
                        onShowRegister: {
                            "AuthScreen[<Login>.onShowRegister]": ()=>setAuthView("register")
                        }["AuthScreen[<Login>.onShowRegister]"]
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 88
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Register$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        createUser: _AuthScreenRegisterCreateUser,
                        onCreateUserClick: {
                            "AuthScreen[<Register>.onCreateUserClick]": ()=>setAuthView("login")
                        }["AuthScreen[<Register>.onCreateUserClick]"],
                        onShowLogin: {
                            "AuthScreen[<Register>.onShowLogin]": ()=>setAuthView("login")
                        }["AuthScreen[<Register>.onShowLogin]"]
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 55
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                    lineNumber: 33,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = authView;
        $[4] = onLoginSuccess;
        $[5] = setAuthView;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_c = AuthScreen;
async function _AuthScreenRegisterCreateUser() {}
var _c;
__turbopack_context__.k.register(_c, "AuthScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Home.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/AuthScreen.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Page() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "064328d9d7a982fc936fcd54240fa34b9645b4dc72fd0dddfe2981d8d7a26d47") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "064328d9d7a982fc936fcd54240fa34b9645b4dc72fd0dddfe2981d8d7a26d47";
    }
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authView, setAuthView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [checkedAuth, setCheckedAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Page[useEffect()]": ()=>{
                const token = localStorage.getItem("token");
                const userId = localStorage.getItem("user_id");
                setIsLoggedIn(!!token && !!userId);
                setCheckedAuth(true);
            }
        })["Page[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!checkedAuth) {
        return null;
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/catch23-next/src/app/page.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== authView || $[5] !== isLoggedIn) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Home$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/app/page.jsx",
                    lineNumber: 50,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    authView: authView,
                    setAuthView: setAuthView,
                    onLoginSuccess: {
                        "Page[<AuthScreen>.onLoginSuccess]": (data)=>{
                            console.log("Login success:", data);
                            if (data.token) {
                                localStorage.setItem("token", data.token);
                            }
                            if (data.user?.id) {
                                localStorage.setItem("user_id", String(data.user.id));
                            } else {
                                if (data.user_id) {
                                    localStorage.setItem("user_id", String(data.user_id));
                                } else {
                                    if (data.id) {
                                        localStorage.setItem("user_id", String(data.id));
                                    }
                                }
                            }
                            setIsLoggedIn(true);
                        }
                    }["Page[<AuthScreen>.onLoginSuccess]"]
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/app/page.jsx",
                    lineNumber: 50,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true);
        $[4] = authView;
        $[5] = isLoggedIn;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(Page, "/H7B6xWYbzGghT5a3pxdonK7Nv8=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=catch23-next_src_05x-e~6._.js.map