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
(()=>{
    const e = new Error("Cannot find module '../api/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            const { data } = await createLeague(newLeague);
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
"[project]/catch23-next/src/components/PositionPlayersModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionPlayersModal",
    ()=>PositionPlayersModal,
    "playerMatchesRowPosition",
    ()=>playerMatchesRowPosition,
    "rankPlayers",
    ()=>rankPlayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function rankPlayers(players) {
    // Placeholder: alphabetical by last name, then first name
    return [
        ...players
    ].sort((a, b)=>{
        const last = (a.lastName ?? "").localeCompare(b.lastName ?? "");
        return last !== 0 ? last : (a.firstName ?? "").localeCompare(b.firstName ?? "");
    });
}
const playerMatchesRowPosition = (player, rowPos)=>{
    const positions = player?.playablePositions || [];
    if (rowPos === "C") return positions.includes("CATCHER");
    if (rowPos === "1B") return positions.includes("FIRST");
    if (rowPos === "2B") return positions.includes("SECOND");
    if (rowPos === "3B") return positions.includes("THIRD");
    if (rowPos === "SS") return positions.includes("SHORTSTOP");
    if (rowPos === "OF") return positions.includes("OUTFIELD");
    if (rowPos === "P") return positions.includes("PITCHER");
    if (rowPos === "U") return player?.isHitter === true;
    if (rowPos === "CI") return positions.includes("FIRST") || positions.includes("THIRD");
    if (rowPos === "MI") return positions.includes("SECOND") || positions.includes("SHORTSTOP");
    return false;
};
const POSITION_LABELS = {
    C: "CATCHERS",
    "1B": "FIRST BASEMEN",
    "2B": "SECOND BASEMEN",
    "3B": "THIRD BASEMEN",
    SS: "SHORTSTOPS",
    CI: "CORNER INFIELDERS",
    MI: "MIDDLE INFIELDERS",
    OF: "OUTFIELDERS",
    U: "UTILITY",
    P: "PITCHERS"
};
function PositionPlayersModal({ isOpen, onClose, position, players, draftedIds = new Set() }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PositionPlayersModal.useEffect": ()=>{
            if (isOpen) setTimeout({
                "PositionPlayersModal.useEffect": ()=>setVisible(true)
            }["PositionPlayersModal.useEffect"], 10);
            else setVisible(false);
        }
    }["PositionPlayersModal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) return null;
    const ranked = rankPlayers(players).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ppm-backdrop",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `ppm-panel ${visible ? "ppm-panel--visible" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-header-title",
                                        children: "TOP AVAILABLE"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-header-position",
                                        children: POSITION_LABELS[position] ?? position
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "ppm-close-btn",
                                onMouseEnter: (e)=>e.target.style.background = "#3a4890",
                                onMouseLeave: (e_0)=>e_0.target.style.background = "#2e3a7a",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-col-labels",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "PLAYER"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TEAM"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-player-list",
                        children: ranked.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ppm-empty",
                            children: "No available players for this position."
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                            lineNumber: 83,
                            columnNumber: 44
                        }, this) : ranked.map((p, i)=>{
                            const isDrafted = draftedIds.has(p.id);
                            const fullName = `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim();
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `ppm-player-row ${isDrafted ? "ppm-player-row--drafted" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ppm-player-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ppm-rank",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `ppm-player-name ${isDrafted ? "ppm-player-name--drafted" : ""}`,
                                                        children: fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 45
                                                    }, this),
                                                    isDrafted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ppm-drafted-label",
                                                        children: "DRAFTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                        lineNumber: 96,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                lineNumber: 92,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 90,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-team",
                                        children: p.realTeam ?? p.real_team ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 101,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 88,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-footer",
                        children: "SORTED ALPHABETICALLY • SWAP rankPlayers() FOR SCORING EQUATION"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(PositionPlayersModal, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = PositionPlayersModal;
var _c;
__turbopack_context__.k.register(_c, "PositionPlayersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/LeagueDraftBoard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeagueDraftBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../api/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/PositionPlayersModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// helper functions
const buildPositions = (rosterSettings)=>{
    if (!rosterSettings) return [];
    return [
        ...Array(rosterSettings.numCatchers).fill("C"),
        ...Array(rosterSettings.numFirstBase).fill("1B"),
        ...Array(rosterSettings.numSecondBase).fill("2B"),
        ...Array(rosterSettings.numThirdBase).fill("3B"),
        ...Array(rosterSettings.numShortstop).fill("SS"),
        ...Array(rosterSettings.numCornerInfield).fill("CI"),
        ...Array(rosterSettings.numMiddleInfield).fill("MI"),
        ...Array(rosterSettings.numOutfield).fill("OF"),
        ...Array(rosterSettings.numUtility).fill("U"),
        ...Array(rosterSettings.numPitchers).fill("P")
    ];
};
const positionToEnum = (pos, index, POSITIONS)=>{
    const counts = {};
    for(let i = 0; i <= index; i++){
        const p = POSITIONS[i];
        counts[p] = (counts[p] || 0) + 1;
    }
    const n = counts[pos];
    const map = {
        C: `CATCHER_${n}`,
        "1B": "FIRST",
        "2B": "SECOND",
        "3B": "THIRD",
        SS: "SHORTSTOP",
        MI: "SHORTSTOP",
        CI: "FIRST",
        OF: `OUTFIELD_${n}`,
        U: "UTILITY",
        P: `PITCHER_${n}`
    };
    return map[pos] || pos;
};
// initialize empty rows 
function makeEmptyTeam(index, POSITIONS) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: POSITIONS.map(()=>({
                player: "",
                player_id: null,
                season: "",
                price: ""
            }))
    };
}
// get player display name
const getPlayerDisplayName = (p)=>`${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
// unify player names
const getPlayerName = (p)=>getPlayerDisplayName(p).toLowerCase();
function LeagueDraftBoard({ league, onBack }) {
    _s();
    const POSITIONS = buildPositions(league.rosterSettings);
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // { teamId, rowIndex, field }
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingTeamId, setEditingTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editTeamValue, setEditTeamValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [allPlayers, setAllPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamDeleteTarget, setTeamDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saveBanner, setSaveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPosition, setSelectedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //const [teamBudgets, setTeamBudgets] = useState({});
    const cellInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const teamInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // get all already-drafted player ids across every team
    const draftedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeagueDraftBoard.useMemo[draftedIds]": ()=>// flat map loops through every team and grabs the player_id from every row, filter removes null values
            new Set(teams.flatMap({
                "LeagueDraftBoard.useMemo[draftedIds]": (t)=>t.rows.map({
                        "LeagueDraftBoard.useMemo[draftedIds]": (r)=>r.player_id
                    }["LeagueDraftBoard.useMemo[draftedIds]"]).filter(Boolean)
            }["LeagueDraftBoard.useMemo[draftedIds]"]))
    }["LeagueDraftBoard.useMemo[draftedIds]"], [
        teams
    ]);
    const remainingBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeagueDraftBoard.useMemo[remainingBudgets]": ()=>{
            // Used AI to help with this function
            const result = {};
            teams.forEach({
                "LeagueDraftBoard.useMemo[remainingBudgets]": (team)=>{
                    const spent = (team.rows ?? []).reduce({
                        "LeagueDraftBoard.useMemo[remainingBudgets].spent": (sum, row)=>{
                            const price = parseFloat(row.price);
                            return sum + (isNaN(price) ? 0 : price);
                        }
                    }["LeagueDraftBoard.useMemo[remainingBudgets].spent"], 0);
                    console.log("league:", league);
                    result[team.id] = (league.draftSettings.budget ?? 0) - spent;
                }
            }["LeagueDraftBoard.useMemo[remainingBudgets]"]);
            return result;
        }
    }["LeagueDraftBoard.useMemo[remainingBudgets]"], [
        teams,
        league.draftSettings.budget
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeagueDraftBoard.useEffect": ()=>{
            const fetchTeams = {
                "LeagueDraftBoard.useEffect.fetchTeams": async ()=>{
                    try {
                        const { data } = await getLeagueTeams(league.id);
                        const loaded = await Promise.all(data.map({
                            "LeagueDraftBoard.useEffect.fetchTeams": async (t_0)=>{
                                const emptyRows = POSITIONS.map({
                                    "LeagueDraftBoard.useEffect.fetchTeams.emptyRows": ()=>({
                                            player: "",
                                            player_id: null,
                                            season: "",
                                            price: ""
                                        })
                                }["LeagueDraftBoard.useEffect.fetchTeams.emptyRows"]);
                                const { data: picks } = await getTeamDraftPicks(t_0.id);
                                picks.forEach({
                                    "LeagueDraftBoard.useEffect.fetchTeams": (pick)=>{
                                        const rowIndex = POSITIONS.findIndex({
                                            "LeagueDraftBoard.useEffect.fetchTeams.rowIndex": (pos, idx)=>positionToEnum(pos, idx, POSITIONS) === pick.rosterPosition
                                        }["LeagueDraftBoard.useEffect.fetchTeams.rowIndex"]);
                                        if (rowIndex !== -1) {
                                            emptyRows[rowIndex] = {
                                                player: pick.player ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim() : "",
                                                player_id: pick.player_id,
                                                season: "",
                                                price: pick.cost ?? ""
                                            };
                                        }
                                    }
                                }["LeagueDraftBoard.useEffect.fetchTeams"]);
                                return {
                                    id: Number(t_0.id),
                                    name: t_0.name,
                                    rows: emptyRows
                                };
                            }
                        }["LeagueDraftBoard.useEffect.fetchTeams"]));
                        setTeams(loaded);
                    } catch (err) {
                        console.error("Failed to load teams/draft picks:", err);
                    }
                }
            }["LeagueDraftBoard.useEffect.fetchTeams"];
            fetchTeams();
        }
    }["LeagueDraftBoard.useEffect"], [
        league.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeagueDraftBoard.useEffect": ()=>{
            getAllPlayers().then({
                "LeagueDraftBoard.useEffect": ({ data: data_0 })=>{
                    console.log("players from api:", data_0);
                    setAllPlayers(data_0);
                }
            }["LeagueDraftBoard.useEffect"]).catch({
                "LeagueDraftBoard.useEffect": (err_0)=>{
                    console.error("Failed to load players:", err_0);
                }
            }["LeagueDraftBoard.useEffect"]);
        }
    }["LeagueDraftBoard.useEffect"], []);
    const handleSaveDraft = async ()=>{
        const picks_0 = [];
        teams.forEach((team_0)=>{
            team_0.rows.forEach((row_0, i)=>{
                if (!row_0.player_id) return;
                picks_0.push({
                    cost: parseFloat(row_0.price) || 0,
                    rosterPosition: positionToEnum(POSITIONS[i], i, POSITIONS),
                    team_id: team_0.id,
                    player_id: row_0.player_id
                });
            });
        });
        console.log("sending picks:", picks_0);
        try {
            // save draft picks to the database
            await saveDraftPicks({
                picks: picks_0,
                teamIds: teams.map((t_1)=>t_1.id)
            });
            setSaveBanner(true);
            setTimeout(()=>setSaveBanner(false), 3000);
        } catch (err_1) {
            console.error("Failed to save draft:", err_1);
            alert("Error saving draft.");
        }
    };
    // adding a new team
    const addTeam = async ()=>{
        // initialize column
        const newTeam = makeEmptyTeam(teams.length, POSITIONS);
        try {
            const { data: data_1 } = await createTeam(newTeam.name, league.id);
            newTeam.id = Number(data_1.id);
            setTeams((prev)=>[
                    ...prev,
                    newTeam
                ]);
        } catch (err_2) {
            console.error("Failed to save team:", err_2);
            alert("Error saving team to database.");
            return;
        }
        setTimeout(()=>{
            setEditingTeamId(newTeam.id);
            setEditTeamValue(newTeam.name);
            setTimeout(()=>teamInputRef.current?.focus(), 0);
        }, 0);
    };
    // deleting a team
    const removeTeam = async (teamId)=>{
        await deleteTeam(teamId);
        setTeams((prev_0)=>prev_0.filter((t_2)=>t_2.id !== teamId));
    };
    // editing a team
    const startEditTeam = (team_1)=>{
        setEditingTeamId(team_1.id);
        setEditTeamValue(team_1.name);
        setTimeout(()=>teamInputRef.current?.focus(), 0);
    };
    const commitTeamEdit = ()=>{
        if (!editingTeamId) return;
        setTeams((prev_1)=>prev_1.map((t_3)=>t_3.id === editingTeamId ? {
                    ...t_3,
                    name: editTeamValue.trim() || t_3.name
                } : t_3));
        setEditingTeamId(null);
        setEditTeamValue("");
    };
    const handleTeamKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            commitTeamEdit();
        }
        if (e.key === "Escape") {
            setEditingTeamId(null);
            setEditTeamValue("");
        }
    };
    const startEditCell = (teamId_0, rowIndex_0, field, currentValue)=>{
        setEditingCell({
            teamId: teamId_0,
            rowIndex: rowIndex_0,
            field
        });
        setEditValue(currentValue);
        setTimeout(()=>cellInputRef.current?.focus(), 0);
    };
    const commitCellEdit = ()=>{
        if (!editingCell) return;
        const { teamId: teamId_1, rowIndex: rowIndex_1, field: field_0 } = editingCell;
        setTeams((prev_2)=>prev_2.map((t_4)=>{
                if (t_4.id !== teamId_1) return t_4;
                const newRows = t_4.rows.map((row_1, i_0)=>{
                    if (i_0 !== rowIndex_1) return row_1;
                    if (field_0 === "player") {
                        if (editValue.trim().toLowerCase() === row_1.player.toLowerCase()) {
                            return row_1;
                        }
                        const matched = allPlayers.find((p)=>getPlayerName(p) === editValue.trim().toLowerCase());
                        // invalid if: doesn't exist OR already drafted by another team
                        const isValid = matched && !draftedIds.has(matched.id);
                        return {
                            ...row_1,
                            player: isValid ? getPlayerDisplayName(matched) : "",
                            // null if not an existing player 
                            player_id: isValid ? matched.id : null
                        };
                    }
                    return {
                        ...row_1,
                        [field_0]: editValue
                    };
                });
                return {
                    ...t_4,
                    rows: newRows
                };
            }));
        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };
    const handleCellKeyDown = (e_0)=>{
        if (e_0.key === "Enter" || e_0.key === "Tab") {
            e_0.preventDefault();
            commitCellEdit();
        }
        if (e_0.key === "Escape") {
            setEditingCell(null);
            setEditValue("");
            setSuggestions([]);
        }
    };
    const isEditing = (teamId_2, rowIndex_2, field_1)=>editingCell?.teamId === teamId_2 && editingCell?.rowIndex === rowIndex_2 && editingCell?.field === field_1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home",
        style: {
            paddingTop: 80
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `save-banner ${saveBanner ? "save-banner--visible" : ""}`,
                children: "✅ Draft saved!"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 287,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-header-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "db-back-btn",
                                onClick: onBack,
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-league-name",
                                        children: league?.title || "LEAGUE"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-league-meta",
                                        children: [
                                            league?.format,
                                            " • ",
                                            teams.length,
                                            " TEAMS • ",
                                            league?.season,
                                            " SEASON"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 295,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 293,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 291,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-header-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-num",
                                        children: teams.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 302,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-label",
                                        children: "Teams"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-num",
                                        children: POSITIONS.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-label",
                                        children: "Positions"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 307,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 305,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 290,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-toolbar-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "db-tool-btn db-tool-primary",
                            onClick: addTeam,
                            children: "+ Add Team"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-toolbar-right",
                        children: teams.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "db-progress-label",
                                    children: "Click any cell to edit • Click team name to rename"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                    lineNumber: 320,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "db-tool-btn db-tool-primary",
                                    onClick: handleSaveDraft,
                                    children: "💾 Save Draft"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-table-wrap",
                children: teams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-empty",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-icon",
                            children: "📋"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 332,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-title",
                            children: "No teams yet"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 333,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-sub",
                            children: 'Click "+ Add Team" to add your first team column'
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 334,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "clm-primary",
                            style: {
                                marginTop: 18
                            },
                            onClick: addTeam,
                            children: "+ Add Team"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 335,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                    lineNumber: 331,
                    columnNumber: 39
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-scroll",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "db-table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "db-th db-th-pos db-sticky-col",
                                                rowSpan: 2,
                                                children: "POS"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 344,
                                                columnNumber: 37
                                            }, this),
                                            teams.map((team_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "db-th db-th-teamname",
                                                    colSpan: 3,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "db-th-team-inner",
                                                            children: [
                                                                editingTeamId === team_2.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: teamInputRef,
                                                                    className: "db-team-input",
                                                                    value: editTeamValue,
                                                                    onChange: (e_1)=>setEditTeamValue(e_1.target.value),
                                                                    onBlur: commitTeamEdit,
                                                                    onKeyDown: handleTeamKeyDown
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 80
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-team-name",
                                                                    onClick: ()=>startEditTeam(team_2),
                                                                    title: "Click to rename",
                                                                    children: team_2.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 266
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "db-remove-team",
                                                                    onClick: ()=>setTeamDeleteTarget({
                                                                            id: team_2.id,
                                                                            name: team_2.name
                                                                        }),
                                                                    title: "Remove team",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 346,
                                                            columnNumber: 45
                                                        }, this),
                                                        league.draftSettings.budget != null && // Used AI
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "db-team-budget",
                                                            children: [
                                                                "$",
                                                                remainingBudgets[team_2.id]?.toFixed(0),
                                                                " left"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 360,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, team_2.id, true, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 58
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 343,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: teams.map((team_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub",
                                                        children: "PLAYER"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 368,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub db-th-narrow",
                                                        children: "SEASON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 369,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub db-th-narrow",
                                                        children: "PRICE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 370,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, team_3.id, true, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 367,
                                                columnNumber: 58
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 366,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 342,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: POSITIONS.map((pos_0, rowIndex_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: rowIndex_3 % 2 === 0 ? "db-row" : "db-row db-row-alt",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "db-td db-td-pos db-sticky-col",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: ()=>setSelectedPosition(pos_0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tooltip-wrap",
                                                    "data-tip": "Click to view available players",
                                                    children: pos_0
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 380,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 377,
                                                columnNumber: 41
                                            }, this),
                                            teams.map((team_4)=>{
                                                const row_2 = team_4.rows[rowIndex_3];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick",
                                                                isEditing(team_4.id, rowIndex_3, "player") ? "db-td-editing" : "",
                                                                row_2.player ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team_4.id, rowIndex_3, "player") && startEditCell(team_4.id, rowIndex_3, "player", row_2.player),
                                                            children: isEditing(team_4.id, rowIndex_3, "player") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: "relative"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: cellInputRef,
                                                                        className: "db-cell-input",
                                                                        value: editValue,
                                                                        onChange: (e_2)=>{
                                                                            const value = e_2.target.value;
                                                                            const q = value.toLowerCase();
                                                                            setEditValue(value);
                                                                            setSuggestions(q.length < 2 ? [] : allPlayers.filter((p_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playerMatchesRowPosition"])(p_0, pos_0)).filter((p_1)=>getPlayerName(p_1).includes(q)).filter((p_2)=>!draftedIds.has(p_2.id)) // exclude players that are already drafted
                                                                            .slice(0, 8));
                                                                        },
                                                                        onBlur: commitCellEdit,
                                                                        onKeyDown: handleCellKeyDown
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "db-suggestions",
                                                                        children: suggestions.map((p_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "db-suggestion-item",
                                                                                onMouseDown: (e_3)=>{
                                                                                    e_3.preventDefault();
                                                                                    const displayName = getPlayerDisplayName(p_3);
                                                                                    setTeams((prev_3)=>prev_3.map((t_5)=>{
                                                                                            if (t_5.id !== team_4.id) return t_5;
                                                                                            const newRows_0 = t_5.rows.map((r_0, i_1)=>i_1 === rowIndex_3 ? {
                                                                                                    ...r_0,
                                                                                                    player: displayName,
                                                                                                    player_id: p_3.id
                                                                                                } : r_0);
                                                                                            return {
                                                                                                ...t_5,
                                                                                                rows: newRows_0
                                                                                            };
                                                                                        }));
                                                                                    setEditingCell(null);
                                                                                    setEditValue("");
                                                                                    setSuggestions([]);
                                                                                },
                                                                                children: [
                                                                                    getPlayerDisplayName(p_3),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "db-suggestion-pos",
                                                                                        children: [
                                                                                            " ",
                                                                                            Array.isArray(p_3.playablePositions) ? p_3.playablePositions.join(", ") : ""
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                                        lineNumber: 421,
                                                                                        columnNumber: 81
                                                                                    }, this)
                                                                                ]
                                                                            }, p_3.id, true, {
                                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 97
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 92
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 389,
                                                                columnNumber: 103
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row_2.player || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 427,
                                                                columnNumber: 70
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 388,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick db-td-narrow",
                                                                isEditing(team_4.id, rowIndex_3, "season") ? "db-td-editing" : "",
                                                                row_2.season ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team_4.id, rowIndex_3, "season") && startEditCell(team_4.id, rowIndex_3, "season", row_2.season),
                                                            children: isEditing(team_4.id, rowIndex_3, "season") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: cellInputRef,
                                                                className: "db-cell-input",
                                                                value: editValue,
                                                                onChange: (e_4)=>setEditValue(e_4.target.value),
                                                                onBlur: commitCellEdit,
                                                                onKeyDown: handleCellKeyDown
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 433,
                                                                columnNumber: 103
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row_2.season || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 433,
                                                                columnNumber: 281
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 432,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick db-td-narrow",
                                                                isEditing(team_4.id, rowIndex_3, "price") ? "db-td-editing" : "",
                                                                row_2.price ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team_4.id, rowIndex_3, "price") && startEditCell(team_4.id, rowIndex_3, "price", row_2.price),
                                                            children: isEditing(team_4.id, rowIndex_3, "price") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: cellInputRef,
                                                                className: "db-cell-input",
                                                                value: editValue,
                                                                onChange: (e_5)=>setEditValue(e_5.target.value),
                                                                onBlur: commitCellEdit,
                                                                onKeyDown: handleCellKeyDown
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 439,
                                                                columnNumber: 102
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row_2.price || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 81
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 439,
                                                                columnNumber: 280
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 438,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, `${team_4.id}-${rowIndex_3}`, true, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 24
                                                }, this);
                                            })
                                        ]
                                    }, rowIndex_3, true, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 376,
                                        columnNumber: 71
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 375,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 341,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                    lineNumber: 340,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 330,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!teamDeleteTarget,
                leagueName: teamDeleteTarget?.name || "",
                onCancel: ()=>setTeamDeleteTarget(null),
                onConfirm: async ()=>{
                    try {
                        await removeTeam(teamDeleteTarget.id);
                        setTeamDeleteTarget(null);
                    } catch (err_3) {
                        console.error("Failed to delete team:", err_3);
                        alert("Error deleting team.");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 451,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionPlayersModal"], {
                isOpen: !!selectedPosition,
                onClose: ()=>setSelectedPosition(null),
                position: selectedPosition,
                players: allPlayers.filter((p_4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playerMatchesRowPosition"])(p_4, selectedPosition ?? "")),
                draftedIds: draftedIds
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 461,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
        lineNumber: 284,
        columnNumber: 10
    }, this);
}
_s(LeagueDraftBoard, "g53oF0FEIBuTS4luDUtwTyTjZU0=");
_c = LeagueDraftBoard;
var _c;
__turbopack_context__.k.register(_c, "LeagueDraftBoard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$LeagueDraftBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/LeagueDraftBoard.jsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../api/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "26a784a4701dafae44beb41680b885fe1cf7bade9cf0a3310531a70ab702fce8") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26a784a4701dafae44beb41680b885fe1cf7bade9cf0a3310531a70ab702fce8";
    }
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLeague, setActiveLeague] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[fetchLeagues]": async ()=>{
                ;
                try {
                    const user_id = localStorage.getItem("user_id");
                    console.log("fetching leagues for user_id:", user_id);
                    const { data } = await getUserLeagues(user_id);
                    console.log("leagues from DB:", data);
                    const leaguesWithCounts = await Promise.all(data.map(_HomeFetchLeaguesDataMap));
                    setLeagues(leaguesWithCounts);
                } catch (t2) {
                    const err = t2;
                    console.error("Failed to fetch leagues:", err);
                }
            }
        })["Home[fetchLeagues]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const fetchLeagues = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[useEffect()]": ()=>{
                fetchLeagues();
            }
        })["Home[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (activeLeague) {
        let t4;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = ({
                "Home[<LeagueDraftBoard>.onBack]": ()=>{
                    setActiveLeague(null);
                    fetchLeagues();
                }
            })["Home[<LeagueDraftBoard>.onBack]"];
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        let t5;
        if ($[6] !== activeLeague) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$LeagueDraftBoard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                league: activeLeague,
                onBack: t4
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[6] = activeLeague;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        return t5;
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[onCreateLeague]": ()=>{
                setIsCreateOpen(true);
            }
        })["Home[onCreateLeague]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const onCreateLeague = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "home-leagues-title",
            children: "Leagues"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-header",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tooltip-wrap tooltip-right",
                    "data-tip": "Create a new league",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "create-league-btn",
                        onClick: onCreateLeague,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 113,
                        columnNumber: 118
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 113,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== leagues) {
        t7 = leagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-empty",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "No leagues yet."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 120,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Click the button to create one."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 120,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 120,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "league-grid",
            children: leagues.map({
                "Home[leagues.map()]": (league_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "league-card",
                        onClick: {
                            "Home[leagues.map() > <div>.onClick]": ()=>setActiveLeague(league_0)
                        }["Home[leagues.map() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "league-close",
                                type: "button",
                                onClick: {
                                    "Home[leagues.map() > <button>.onClick]": (e)=>{
                                        e.stopPropagation();
                                        setDeleteTarget({
                                            id: league_0.id,
                                            name: league_0.title || league_0.name
                                        });
                                    }
                                }["Home[leagues.map() > <button>.onClick]"],
                                "aria-label": "Remove league",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 123,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "league-logo-placeholder",
                                src: league_0.leagueIconUrl || league_0.league_icon_url || league_0.logoUrl || "https://i.imgur.com/DxHxkuJ.png",
                                alt: "league logo"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 131,
                                columnNumber: 93
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-title",
                                children: league_0.title || league_0.name
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 131,
                                columnNumber: 268
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-subtitle",
                                children: [
                                    league_0.format,
                                    " • ",
                                    league_0.teamCount ?? 0,
                                    " TEAMS • ",
                                    league_0.season,
                                    " SEASON"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 131,
                                columnNumber: 337
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-season",
                                children: [
                                    "Season ",
                                    league_0.seasonNum
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 131,
                                columnNumber: 454
                            }, this)
                        ]
                    }, league_0.id, true, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 121,
                        columnNumber: 44
                    }, this)
            }["Home[leagues.map()]"])
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 120,
            columnNumber: 132
        }, this);
        $[11] = leagues;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = !!deleteTarget;
    const t9 = deleteTarget?.name || "";
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Home[<ConfirmDeleteModal>.onCancel]": ()=>setDeleteTarget(null)
        })["Home[<ConfirmDeleteModal>.onCancel]"];
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== deleteTarget) {
        t11 = ({
            "Home[<ConfirmDeleteModal>.onConfirm]": async ()=>{
                ;
                try {
                    await deleteLeague(deleteTarget.id);
                    setLeagues({
                        "Home[<ConfirmDeleteModal>.onConfirm > setLeagues()]": (prev_0)=>prev_0.filter({
                                "Home[<ConfirmDeleteModal>.onConfirm > setLeagues() > prev_0.filter()]": (l_0)=>l_0.id !== deleteTarget.id
                            }["Home[<ConfirmDeleteModal>.onConfirm > setLeagues() > prev_0.filter()]"])
                    }["Home[<ConfirmDeleteModal>.onConfirm > setLeagues()]"]);
                    setDeleteTarget(null);
                } catch (t12) {
                    const err_0 = t12;
                    console.error("Failed to delete league:", err_0);
                    alert("Error deleting league. Please try again.");
                }
            }
        })["Home[<ConfirmDeleteModal>.onConfirm]"];
        $[14] = deleteTarget;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t8 || $[18] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: t8,
            leagueName: t9,
            onCancel: t10,
            onConfirm: t11
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t8;
        $[18] = t9;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Home[<CreateLeagueModal>.onClose]": ()=>setIsCreateOpen(false)
        })["Home[<CreateLeagueModal>.onClose]"];
        t14 = ({
            "Home[<CreateLeagueModal>.onSave]": (newLeague)=>{
                console.log("new league from modal:", newLeague);
                setLeagues({
                    "Home[<CreateLeagueModal>.onSave > setLeagues()]": (prev_1)=>[
                            newLeague,
                            ...prev_1
                        ]
                }["Home[<CreateLeagueModal>.onSave > setLeagues()]"]);
            }
        })["Home[<CreateLeagueModal>.onSave]"];
        $[20] = t13;
        $[21] = t14;
    } else {
        t13 = $[20];
        t14 = $[21];
    }
    let t15;
    if ($[22] !== isCreateOpen) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isCreateOpen,
            onClose: t13,
            onSave: t14
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[22] = isCreateOpen;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t12 || $[25] !== t15 || $[26] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home",
            children: [
                t6,
                t7,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t15;
        $[26] = t7;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_s(Home, "24uLrNA0iGG4ydNvZa+te9di7EQ=");
_c = Home;
// For evelyn
// DELETE FROM scoring_settings;
// DELETE FROM player_settings;
// DELETE FROM roster_settings;
// DELETE FROM draft_settings;
// DELETE FROM league;
async function _HomeFetchLeaguesDataMap(league) {
    const { data: teams } = await getLeagueTeams(league.id);
    return {
        ...league,
        teamCount: teams.length
    };
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=catch23-next_src_components_0bx7x66._.js.map