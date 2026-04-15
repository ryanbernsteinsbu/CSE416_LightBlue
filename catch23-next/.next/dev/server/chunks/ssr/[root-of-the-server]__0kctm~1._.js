module.exports = [
"[project]/catch23-next/src/components/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navbar() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onDocClick = (e)=>{
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onDocClick);
        return ()=>document.removeEventListener("mousedown", onDocClick);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "navbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "navbar-left",
                ref: menuRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tooltip-wrap tooltip-right",
                        "data-tip": "Menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "navbar-iconbtn",
                            type: "button",
                            onClick: ()=>setOpen((v)=>!v),
                            "aria-label": "Menu",
                            "aria-expanded": open,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-solid fa-bars"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-brand",
                        onClick: ()=>router.push("/"),
                        role: "button",
                        tabIndex: 0,
                        children: "CATCH 23"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navmenu",
                        role: "menu",
                        "aria-label": "Navigation menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "navmenu-item",
                                href: "/",
                                onClick: ()=>setOpen(false),
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "navmenu-item",
                                href: "/player",
                                onClick: ()=>setOpen(false),
                                children: "Player Information"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tooltip-wrap tooltip-left",
                "data-tip": "View Profile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "navbar-iconbtn",
                    type: "button",
                    onClick: ()=>router.push("/profile"),
                    "aria-label": "Profile",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-solid fa-user"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Navbar.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/Navbar.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmDeleteModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ConfirmDeleteModal({ isOpen, leagueName, onCancel, onConfirm }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "del-backdrop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "del-card",
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "del-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "del-title",
                            children: "ARE YOU SURE YOU WANT TO DELETE"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "del-league",
                            children: [
                                leagueName,
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "del-warning",
                            children: "YOU CANNOT UNDO THIS ACTION"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "del-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "del-btn",
                            type: "button",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "del-btn danger",
                            type: "button",
                            onClick: onConfirm,
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/ConfirmDeleteModal.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const BASE_URL = 'http://localhost:8000';
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = BASE_URL;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
const registerUser = (email, displayName, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/users/register', {
        email,
        displayName,
        password
    });
const loginUser = (email, password)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/users/login', {
        email,
        password
    });
const createLeague = (leagueData)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/leagues/create', {
        title: leagueData.name,
        season: leagueData.season,
        status: 'PRE_DRAFT',
        leagueIconUrl: 'https://i.imgur.com/DxHxkuJ.png',
        user_id: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null
    });
const deleteLeague = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/leagues/${id}`);
const getUserLeagues = (userId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/leagues/user/${userId}`);
const createTeam = (name, leagueId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/teams/create', {
        name,
        league_id: leagueId,
        budget: 260 // default
    });
const getLeagueTeams = (leagueId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/teams/league/${leagueId}`);
const getTeam = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/teams/${id}`);
const updateTeam = (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/api/teams/${id}`, data);
const deleteTeam = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/teams/${id}`);
const getAllPlayers = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/api/players/all');
const getPlayer = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/players/${id}`);
const getPlayerByMlbId = (mlbPlayerId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/players/mlbId/${mlbPlayerId}`);
const getPlayersByPosition = (position)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/players/position/${position}`);
const createPlayer = (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/players/create', data);
const updatePlayer = (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/api/players/${id}`, data);
const deletePlayer = (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/api/players/${id}`);
const saveDraftPicks = (payload)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/draft-picks/bulk', payload);
const getTeamDraftPicks = (teamId)=>__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/draft-picks/team/${teamId}`);
}),
"[project]/catch23-next/src/components/CreateLeagueStepOne.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueStepOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function CreateLeagueStepOne({ leagueName, setLeagueName, logoFile, logoPreview, onLogoChange, setLogoFile, setLogoPreview, canGoNext, onNext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clm-step",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-title",
                children: "Create League"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-field",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "clm-input",
                    value: leagueName,
                    onChange: (e)=>setLeagueName(e.target.value),
                    placeholder: "League Name"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "clm-label",
                        children: "Upload League Logo"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "clm-logo-input",
                        className: "clm-file-hidden",
                        type: "file",
                        accept: "image/*",
                        onChange: onLogoChange
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "clm-logo-input",
                        className: "clm-dropzone",
                        onDragOver: (e)=>e.preventDefault(),
                        onDrop: (e)=>{
                            e.preventDefault();
                            const file = e.dataTransfer.files?.[0];
                            if (!file) return;
                            if (!file.type.startsWith("image/")) {
                                alert("Please upload an image file.");
                                return;
                            }
                            if (logoPreview) URL.revokeObjectURL(logoPreview);
                            setLogoFile(file);
                            setLogoPreview(URL.createObjectURL(file));
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-dropicon",
                                "aria-hidden": "true",
                                children: "⬆"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-droptext",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-dropheadline",
                                        children: logoFile ? "Replace file" : "Drag & drop or click to upload"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-dropsub",
                                        children: "PNG, JPG, GIF up to ~10MB"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    logoFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-filename",
                                        children: logoFile.name
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                                        lineNumber: 63,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    logoPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "clm-logo-preview",
                        src: logoPreview,
                        alt: "logo preview"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "clm-primary",
                        type: "button",
                        onClick: onNext,
                        disabled: !canGoNext,
                        children: "Next →"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/CreateLeagueStepOne.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/catch23-next/src/components/CreateLeagueSettings.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-ssr] (ecmascript)");
;
;
;
function CreateLeagueSettings({ activeTab, setActiveTab, leagueName, playerSettings, setPlayerSettings, rosterSettings, setRosterSettings, scoringSettings, setScoringSettings, draftSettings, setDraftSettings, onBack, onSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clm-step2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-sidebar",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TABS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: activeTab === t.key ? "clm-tab active" : "clm-tab",
                        onClick: ()=>setActiveTab(t.key),
                        children: t.label
                    }, t.key, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "clm-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-title",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-subtitle",
                        children: leagueName
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    activeTab === "players" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "clm-section-title",
                                        children: "Eligibility"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Position Eligibility Rule"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.positionEligibilityRule ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            positionEligibilityRule: !prev.positionEligibilityRule
                                                        })),
                                                children: playerSettings.positionEligibilityRule ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Multi-Position Enabled"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.multiPositionEnabled ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            multiPositionEnabled: !prev.multiPositionEnabled
                                                        })),
                                                children: playerSettings.multiPositionEnabled ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Prospect Eligibility"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.prospectEligibility ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            prospectEligibility: !prev.prospectEligibility
                                                        })),
                                                children: playerSettings.prospectEligibility ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Rookie Status Filter"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.rookieStatusFilter ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            rookieStatusFilter: !prev.rookieStatusFilter
                                                        })),
                                                children: playerSettings.rookieStatusFilter ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "clm-section-title",
                                        children: "Player Pool"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Include Prospects"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.prospects ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            prospects: !prev.prospects
                                                        })),
                                                children: playerSettings.prospects ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Include Minor League Players"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.minorLeaguePlayers ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            minorLeaguePlayers: !prev.minorLeaguePlayers
                                                        })),
                                                children: playerSettings.minorLeaguePlayers ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Include Free Agents"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.freeAgents ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            freeAgents: !prev.freeAgents
                                                        })),
                                                children: playerSettings.freeAgents ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Include Two Way Player Split"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.twoWayPlayerSplit ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            twoWayPlayerSplit: !prev.twoWayPlayerSplit
                                                        })),
                                                children: playerSettings.twoWayPlayerSplit ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "clm-section-title",
                                        children: "Injury Handling"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Injured Players Draftable"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.injuredPlayersDraftable ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            injuredPlayersDraftable: !prev.injuredPlayersDraftable
                                                        })),
                                                children: playerSettings.injuredPlayersDraftable ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Auto Injury Risk Indicator"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.autoInjuryRiskIndicator ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            autoInjuryRiskIndicator: !prev.autoInjuryRiskIndicator
                                                        })),
                                                children: playerSettings.autoInjuryRiskIndicator ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clm-toggle-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "clm-toggle-label",
                                                children: "Hide Long Term IL"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `clm-toggle ${playerSettings.hideLongTermIL ? "on" : "off"}`,
                                                onClick: ()=>setPlayerSettings((prev)=>({
                                                            ...prev,
                                                            hideLongTermIL: !prev.hideLongTermIL
                                                        })),
                                                children: playerSettings.hideLongTermIL ? "ON" : "OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this) : activeTab === "roster" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Roster"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 219,
                                columnNumber: 13
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
                            ].map(([label, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "clm-num-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "clm-num-label",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "clm-num-input",
                                            value: rosterSettings[key],
                                            min: 0,
                                            onChange: (e)=>setRosterSettings((prev)=>({
                                                        ...prev,
                                                        [key]: parseInt(e.target.value) || 0
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this) : activeTab === "scoring" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "clm-section-title",
                                        children: "Hitters"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 254,
                                        columnNumber: 15
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
                                    ].map(([label, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "clm-toggle-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "clm-toggle-label",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `clm-toggle ${scoringSettings[key] ? "on" : "off"}`,
                                                    onClick: ()=>setScoringSettings((prev)=>({
                                                                ...prev,
                                                                [key]: !prev[key]
                                                            })),
                                                    children: scoringSettings[key] ? "ON" : "OFF"
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "clm-section-title",
                                        children: "Pitchers"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 281,
                                        columnNumber: 15
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
                                    ].map(([label, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "clm-toggle-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "clm-toggle-label",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `clm-toggle ${scoringSettings[key] ? "on" : "off"}`,
                                                    onClick: ()=>setScoringSettings((prev)=>({
                                                                ...prev,
                                                                [key]: !prev[key]
                                                            })),
                                                    children: scoringSettings[key] ? "ON" : "OFF"
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, key, true, {
                                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this) : activeTab === "draft" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Draft"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-num-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "clm-num-label",
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "clm-num-input",
                                        value: draftSettings.budget,
                                        min: 0,
                                        onChange: (e)=>setDraftSettings((prev)=>({
                                                    ...prev,
                                                    budget: parseInt(e.target.value) || 0
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clm-num-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "clm-num-label",
                                        children: "Number of Teams"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        className: "clm-num-input",
                                        value: draftSettings.numTeams,
                                        min: 0,
                                        onChange: (e)=>setDraftSettings((prev)=>({
                                                    ...prev,
                                                    numTeams: parseInt(e.target.value) || 0
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "clm-placeholder",
                            children: "Settings go here later."
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clm-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "clm-secondary",
                                type: "button",
                                onClick: onBack,
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "clm-primary",
                                type: "button",
                                onClick: onSave,
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/CreateLeagueSettings.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/CreateLeagueModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeagueModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueStepOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueStepOne.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueHelpers.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CreateLeagueModal({ isOpen, onClose, onSave }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("draft");
    const [leagueName, setLeagueName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [logoFile, setLogoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logoPreview, setLogoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [playerSettings, setPlayerSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_PLAYER_SETTINGS"]);
    const [rosterSettings, setRosterSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ROSTER_SETTINGS"]);
    const [scoringSettings, setScoringSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_SCORING_SETTINGS"]);
    const [draftSettings, setDraftSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DRAFT_SETTINGS"]);
    const canGoNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>leagueName.trim().length > 0, [
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
        setPlayerSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_PLAYER_SETTINGS"]);
        setRosterSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_ROSTER_SETTINGS"]);
        setScoringSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_SCORING_SETTINGS"]);
        setDraftSettings(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_DRAFT_SETTINGS"]);
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
        const newLeague = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueHelpers$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLeaguePayload"])({
            leagueName,
            logoPreview,
            logoFile,
            draftSettings,
            scoringSettings,
            playerSettings,
            rosterSettings
        });
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLeague"])(newLeague);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clm-backdrop",
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "clm-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "clm-close",
                    type: "button",
                    onClick: handleClose,
                    "aria-label": "Close",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueStepOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    lineNumber: 102,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/CreateLeagueModal.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/Home.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/CreateLeagueModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const DEFAULT_LOGO = "https://i.imgur.com/DxHxkuJ.png";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadLeagues() {
            const userId = localStorage.getItem("user_id");
            if (!userId) {
                console.log("No user_id found, skipping league fetch");
                setLeagues([]);
                return;
            }
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLeagues"])(userId);
                setLeagues(response.data);
            } catch (error) {
                console.error("Error loading leagues:", error);
            }
        }
        loadLeagues();
    }, []);
    const onCreateLeague = ()=>{
        setIsCreateOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "home-leagues-title",
                        children: "Leagues"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tooltip-wrap tooltip-right",
                        "data-tip": "Create a new league",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "create-league-btn",
                            onClick: onCreateLeague,
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/Home.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            leagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "No leagues yet."
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Click the button to create one."
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "league-grid",
                children: leagues.map((league)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "league-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "league-close",
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setDeleteTarget({
                                        id: league.id,
                                        name: league.title || league.name
                                    });
                                },
                                "aria-label": "Remove league",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "league-logo-placeholder",
                                src: league.leagueIconUrl || league.league_icon_url || league.logoUrl || DEFAULT_LOGO,
                                alt: "league logo"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-title",
                                children: league.title || league.name
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-season",
                                children: [
                                    "Season ",
                                    league.seasonNum
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        ]
                    }, league.id, true, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!deleteTarget,
                leagueName: deleteTarget?.name || "",
                onCancel: ()=>setDeleteTarget(null),
                onConfirm: async ()=>{
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteLeague"])(deleteTarget.id);
                        setLeagues((prev)=>prev.filter((l)=>l.id !== deleteTarget.id));
                        setDeleteTarget(null);
                    } catch (err) {
                        console.error("Failed to delete league:", err);
                        alert("Error deleting league. Please try again.");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateOpen,
                onClose: ()=>setIsCreateOpen(false),
                onSave: (newLeague)=>{
                    console.log("new league from modal:", newLeague);
                    setLeagues((prev)=>[
                            newLeague,
                            ...prev
                        ]);
                    setIsCreateOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/Home.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/Login.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Login({ onLoginSuccess, handleError, onShowRegister }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        if (!email) {
            alert("Please enter email");
            return;
        }
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginUser"])(email, password);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "login_setup",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            id: "login_form",
            onSubmit: handleLogin,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    placeholder: "Email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 42,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    placeholder: "Password",
                    type: "password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 49,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "submit_login",
                    type: "submit",
                    children: "Sign in"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    id: "go_register",
                    type: "button",
                    onClick: onShowRegister,
                    children: "Register"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Login.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Login.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/Login.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/components/Register.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.baseURL = 'http://localhost:8000';
function Register({ onCreateUserClick, onShowLogin }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [displayName, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [firstPassword, setFirstPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [secondPassword, setSecondPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [saveBanner, setSaveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorBanner, setErrorBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const showBanner = ()=>{
        setSaveBanner(true);
        setTimeout(()=>setSaveBanner(false), 3000);
    };
    const showError = (msg)=>{
        setErrorBanner(msg);
        setTimeout(()=>setErrorBanner(""), 3000);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (email === "") return showError("Email is required");
        if (displayName === "") return showError("Display Name is required");
        if (firstPassword === "") return showError("Password is required");
        if (secondPassword === "") return showError("Re-type Password is required");
        if (firstPassword !== secondPassword) return showError("Passwords do not match, please try again");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return showError("Please enter a valid email address.");
        const emailSub = email.split("@")[0];
        const p = firstPassword.toLowerCase();
        if (p.includes(displayName.toLowerCase())) return showError("Password cannot contain your display name!");
        if (p.includes(emailSub.toLowerCase())) return showError("Password cannot contain your email!");
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerUser"])(email, displayName, firstPassword);
            console.log("REGISTER:", data);
            setEmail("");
            setName("");
            setFirstPassword("");
            setSecondPassword("");
            showBanner();
            setTimeout(()=>onCreateUserClick(), 1500);
        } catch (err) {
            const status = err.response?.status;
            const code = err.response?.data?.error;
            if (status === 409) {
                if (code === "EMAIL_TAKEN") showError("There's already an account associated with that email");
                else if (code === "DISPLAYNAME_TAKEN") showError("That display name is already taken");
                else showError("Error creating user. Please try again later.");
            } else {
                showError("Error creating user. Please try again later.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "login_setup",
        children: [
            saveBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "save-banner save-banner--visible",
                style: {
                    transform: "translateX(-50%) translateY(0)"
                },
                children: "✅ Account successfully created!"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Register.jsx",
                lineNumber: 72,
                columnNumber: 17
            }, this),
            errorBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 78,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "login_form",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: email,
                        placeholder: "Email",
                        onChange: (e)=>setEmail(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 91,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: displayName,
                        placeholder: "Display Name",
                        onChange: (e)=>setName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 100,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: firstPassword,
                        placeholder: "Password",
                        onChange: (e)=>setFirstPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 109,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: secondPassword,
                        placeholder: "Re-Type password",
                        onChange: (e)=>setSecondPassword(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 118,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "submit_login",
                        type: "submit",
                        children: "Register"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "go_register",
                        type: "button",
                        onClick: onShowLogin,
                        children: "Sign In"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Register.jsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Register.jsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/Register.jsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
}),
"[project]/catch23-next/src/components/Modal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Modal({ isOpen, children }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-card",
            children: children
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Modal.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/catch23-next/src/components/Modal.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/reddude.0~suoz9u7hxe9.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/catch23-next/src/assets/images/reddude.png.mjs { IMAGE => \"[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/catch23-next/src/components/AuthScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Login.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Register$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Register.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Modal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/catch23-next/src/assets/images/reddude.png.mjs { IMAGE => "[project]/catch23-next/src/assets/images/reddude.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
function AuthScreen({ authView, setAuthView, onLoginSuccess }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "landing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "landing-runner",
                src: __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$catch23$2d$next$2f$src$2f$assets$2f$images$2f$reddude$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: "runner"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "landing-title",
                children: "CATCH 23"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Modal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: true,
                children: authView === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Login$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onLoginSuccess: onLoginSuccess,
                    onShowRegister: ()=>setAuthView("register")
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Register$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    createUser: async ()=>{},
                    onCreateUserClick: ()=>setAuthView("login"),
                    onShowLogin: ()=>setAuthView("login")
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/AuthScreen.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/catch23-next/src/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Home$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/Home.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/AuthScreen.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Page() {
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authView, setAuthView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [checkedAuth, setCheckedAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");
        setIsLoggedIn(!!token && !!userId);
        setCheckedAuth(true);
    }, []);
    if (!checkedAuth) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/catch23-next/src/app/page.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$Home$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/catch23-next/src/app/page.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$AuthScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                authView: authView,
                setAuthView: setAuthView,
                onLoginSuccess: (data)=>{
                    console.log("Login success:", data);
                    if (data.token) {
                        localStorage.setItem("token", data.token);
                    }
                    if (data.user?.id) {
                        localStorage.setItem("user_id", String(data.user.id));
                    } else if (data.user_id) {
                        localStorage.setItem("user_id", String(data.user_id));
                    } else if (data.id) {
                        localStorage.setItem("user_id", String(data.id));
                    }
                    setIsLoggedIn(true);
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/app/page.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kctm~1._.js.map