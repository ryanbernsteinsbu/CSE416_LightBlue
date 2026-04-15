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
"[project]/catch23-next/src/components/PlayerProfileModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerProfileModal",
    ()=>PlayerProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function PlayerProfileModal({ isOpen, onClose, player }) {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) setTimeout(()=>setVisible(true), 10);
        else setVisible(false);
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 999
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    background: "#3d4a8a",
                    border: "3px solid #5060b0",
                    borderRight: "none",
                    borderRadius: "16px 0 0 16px",
                    zIndex: 1000,
                    transform: visible ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                    overflowY: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "24px 28px",
                            borderBottom: "2px solid #5060b0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "26px",
                                    letterSpacing: "0.08em",
                                    color: "#fff"
                                },
                                children: "PLAYER PROFILE"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "#2e3a7a",
                                    border: "none",
                                    borderRadius: "8px",
                                    color: "#fff",
                                    width: "36px",
                                    height: "36px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    fontFamily: "sans-serif"
                                },
                                onMouseEnter: (e)=>e.target.style.background = "#3a4890",
                                onMouseLeave: (e)=>e.target.style.background = "#2e3a7a",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "28px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "36px",
                                            color: "#e03030",
                                            letterSpacing: "0.08em"
                                        },
                                        children: player?.username || "PLAYER"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "16px",
                                            color: "#aab0d0",
                                            letterSpacing: "0.1em"
                                        },
                                        children: player?.team ? `${player.team} · ${player.role}` : player?.role || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                lineNumber: 73,
                                columnNumber: 9
                            }, this),
                            player?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "13px",
                                            color: "#aab0d0",
                                            letterSpacing: "0.1em",
                                            marginBottom: "10px"
                                        },
                                        children: "HITTING"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        [
                                            "HR",
                                            player.stats.HR
                                        ],
                                        [
                                            "RBI",
                                            player.stats.RBI
                                        ],
                                        [
                                            "SB",
                                            player.stats.SB
                                        ],
                                        [
                                            "R",
                                            player.stats.R
                                        ],
                                        [
                                            "AVG",
                                            player.stats.AVG
                                        ],
                                        [
                                            "OBP",
                                            player.stats.OBP
                                        ]
                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "10px 0",
                                                borderBottom: "1px solid #5060b0"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#aab0d0",
                                                        letterSpacing: "0.08em"
                                                    },
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "18px",
                                                        color: "#fff",
                                                        fontWeight: "bold"
                                                    },
                                                    children: value ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            player?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "13px",
                                            color: "#aab0d0",
                                            letterSpacing: "0.1em",
                                            marginBottom: "10px"
                                        },
                                        children: "PITCHING"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        [
                                            "W",
                                            player.stats.W
                                        ],
                                        [
                                            "SV",
                                            player.stats.SV
                                        ],
                                        [
                                            "K",
                                            player.stats.K
                                        ],
                                        [
                                            "ERA",
                                            player.stats.ERA
                                        ],
                                        [
                                            "WHIP",
                                            player.stats.WHIP
                                        ]
                                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "10px 0",
                                                borderBottom: "1px solid #5060b0"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#aab0d0",
                                                        letterSpacing: "0.08em"
                                                    },
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "18px",
                                                        color: "#fff",
                                                        fontWeight: "bold"
                                                    },
                                                    children: value ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/catch23-next/src/components/PlayerInformation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerInformation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PlayerProfileModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/PlayerProfileModal.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// dummy data for now
// const MOCK_PLAYERS = [
//   {
//     id: "p1",
//     firstName: "Edwin",
//     lastName: "Díaz",
//     team: "LAD",
//     pos: "RP",
//     age: 30,
//     stats: { W: 6, SV: 28, K: 98, AVG: 0.164, ERA: 1.63, WHIP: 0.87, HR: 0, RBI: 0, SB: 0, R: 0, OBP: 0.0 },
//   },
//   {
//     id: "p2",
//     firstName: "José",
//     lastName: "Ramírez",
//     team: "CLE",
//     pos: "3B",
//     age: 32,
//     stats: { HR: 30, RBI: 85, SB: 44, AVG: 0.283, R: 103, OBP: 0.36, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
//   },
//   {
//     id: "p3",
//     firstName: "Mookie",
//     lastName: "Betts",
//     team: "LAD",
//     pos: "RF",
//     age: 31,
//     stats: { HR: 22, RBI: 67, SB: 14, AVG: 0.301, R: 98, OBP: 0.392, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
//   },
// ];
// Base columns (shared columns that appear both hitting and pitching views)
const BASE_COLUMNS = [
    {
        key: "name",
        label: "PLAYER",
        sortable: true
    },
    {
        key: "team",
        label: "TEAM",
        sortable: true
    },
    {
        key: "pos",
        label: "POS",
        sortable: true
    },
    {
        key: "age",
        label: "AGE",
        sortable: true
    }
];
// Hitting-specific columns
const HITTING_COLUMNS = [
    ...BASE_COLUMNS,
    {
        key: "HR",
        label: "HR",
        sortable: true,
        stat: "HR"
    },
    {
        key: "RBI",
        label: "RBI",
        sortable: true,
        stat: "RBI"
    },
    {
        key: "SB",
        label: "SB",
        sortable: true,
        stat: "SB"
    },
    {
        key: "R",
        label: "R",
        sortable: true,
        stat: "R"
    },
    {
        key: "AVG",
        label: "AVG",
        sortable: true,
        stat: "AVG",
        format: "avg"
    },
    {
        key: "OBP",
        label: "OBP",
        sortable: true,
        stat: "OBP",
        format: "avg"
    }
];
// Pitching-specific columns
const PITCHING_COLUMNS = [
    ...BASE_COLUMNS,
    {
        key: "W",
        label: "W",
        sortable: true,
        stat: "W"
    },
    {
        key: "SV",
        label: "SV",
        sortable: true,
        stat: "SV"
    },
    {
        key: "K",
        label: "K",
        sortable: true,
        stat: "K"
    },
    {
        key: "ERA",
        label: "ERA",
        sortable: true,
        stat: "ERA",
        format: "era"
    },
    {
        key: "WHIP",
        label: "WHIP",
        sortable: true,
        stat: "WHIP",
        format: "whip"
    }
];
// Sort helpers
// Converts any value into a number so we can sort numerically
function toNum(v) {
    const s = String(v ?? "").trim().replace(/^\./, "0.");
    const n = Number(s);
    return Number.isFinite(n) ? n : -Infinity;
}
// Returns the sortable value for a given player + column combination
// what value should I use to sort this player for this column?
function sortVal(player, col) {
    const raw = col.stat ? player.stats?.[col.stat] : player[col.key];
    if (col.key === "name" || col.key === "team" || col.key === "pos") return String(raw ?? "").toLowerCase(); // string sort 
    return toNum(raw); // numeric sort 
}
function PlayerInformation() {
    // MLB-like tabs
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hitting") // hitting | pitching
    ;
    // search filter inputs
    const [nameQuery, setNameQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [teamQuery, setTeamQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posQuery, setPosQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // which column is currently sorted, and in which direction
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("name");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("asc");
    // current page number, and how many rows to show per page
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25);
    // pick the right column set based on the active tab 
    const columns = mode === "hitting" ? HITTING_COLUMNS : PITCHING_COLUMNS;
    // player selected
    const [selectedPlayer, setSelectedPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPlayers = async ()=>{
            try {
                const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPlayers"])();
                // map DB fields to what the component expects
                const mapped = data.map((p)=>({
                        id: p.id,
                        firstName: p.firstName || p.first_name,
                        lastName: p.lastName || p.last_name,
                        team: p.realTeam || p.real_team,
                        pos: p.playablePositions?.[0] || "—",
                        age: "—",
                        stats: {
                            HR: 0,
                            RBI: 0,
                            SB: 0,
                            AVG: 0,
                            R: 0,
                            OBP: 0,
                            W: 0,
                            SV: 0,
                            K: 0,
                            ERA: 0,
                            WHIP: 0,
                            ...p.lastYearStats
                        }
                    }));
                setPlayers(mapped);
            } catch (err) {
                console.error("Failed to fetch players:", err);
            } finally{
                setLoading(false);
            }
        };
        fetchPlayers();
    }, []);
    // returns only te players that match all active filter inputs 
    // Note: useMemo only re-runs when nameQuery or posQuery changes, not on every single render
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>players.filter((p)=>(!nameQuery || `${p.firstName} ${p.lastName}`.toLowerCase().includes(nameQuery.toLowerCase())) && (!teamQuery || p.team?.toLowerCase().includes(teamQuery.toLowerCase())) && (!posQuery || p.pos?.toLowerCase().includes(posQuery.toLowerCase()))), [
        players,
        nameQuery,
        teamQuery,
        posQuery
    ]);
    // Sort
    // takes the filtered array and returns a new sorted copy 
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const col = columns.find((c)=>c.key === sortKey);
        if (!col) return filtered;
        // converts sort direction into a number you can multiply with
        const dir = sortDir === "asc" ? 1 : -1;
        return [
            ...filtered
        ].sort((a, b)=>{
            const va = sortVal(a, col), vb = sortVal(b, col);
            // alphabetically compare strings (asc v desc)
            if (typeof va === "string") return va.localeCompare(vb) * dir;
            // compare numbers (asc v desc)
            return (va - vb) * dir;
        });
    }, [
        filtered,
        columns,
        sortKey,
        sortDir
    ]);
    // Pagination
    // total number of pages based on how many players passed filtering
    const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
    // clamp page to a valid range (prevents being stuck on page 5 if filters reduce results to 1 page)
    const safePage = Math.min(Math.max(1, page), pageCount);
    // slice just the rows for the current page to render in the table
    const pageRows = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);
    // Event Handlers
    // called when the user clicks a column eader to sort it
    const handleHeader = (col)=>{
        setSortKey(col.key);
        setSortDir(sortKey === col.key && sortDir === "asc" ? "desc" : "asc");
        setPage(1);
    };
    // called when the user switches between Hitting and Pitching tabs.
    // resets sort and page so the new tab starts in a clean state.
    const switchTab = (next)=>{
        setMode(next);
        setSortKey("name");
        setSortDir("asc");
        setPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pi-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pi-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-titleRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "pi-title",
                                        children: "Player Information"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pi-tabs",
                                        children: [
                                            "hitting",
                                            "pitching"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `pi-tab ${mode === t ? "is-active" : ""}`,
                                                onClick: ()=>switchTab(t),
                                                type: "button",
                                                children: t.charAt(0).toUpperCase() + t.slice(1)
                                            }, t, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 204,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-filters",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Player",
                                        value: nameQuery,
                                        onChange: (e)=>{
                                            setNameQuery(e.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 217,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Team",
                                        value: teamQuery,
                                        onChange: (e)=>{
                                            setTeamQuery(e.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Position",
                                        value: posQuery,
                                        onChange: (e)=>{
                                            setPosQuery(e.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 229,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pi-btn pi-btn--ghost",
                                        type: "button",
                                        onClick: ()=>{
                                            setNameQuery("");
                                            setTeamQuery("");
                                            setPosQuery("");
                                            setPage(1);
                                        },
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 235,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "pi-rows",
                                        children: [
                                            "Rows",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "pi-select",
                                                value: pageSize,
                                                onChange: (e)=>{
                                                    setPageSize(Number(e.target.value));
                                                    setPage(1);
                                                },
                                                children: [
                                                    10,
                                                    25,
                                                    50
                                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: n,
                                                        children: n
                                                    }, n, false, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-tableCard",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pi-empty",
                            children: "Loading players..."
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                            lineNumber: 259,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 258,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-tableCard",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pi-tableScroll",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "pi-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: `pi-th ${col.sortable ? "is-sortable" : ""}`,
                                                    onClick: ()=>handleHeader(col),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pi-thInner",
                                                        children: [
                                                            col.label,
                                                            sortKey === col.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pi-sortIcon",
                                                                children: sortDir === "asc" ? "▲" : "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 276,
                                                                columnNumber: 57
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pi-sortIcon pi-sortIcon--muted",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 278,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 273,
                                                        columnNumber: 49
                                                    }, this)
                                                }, col.key, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 266,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 265,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: pageRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "pi-empty",
                                                colSpan: columns.length,
                                                children: "No results."
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 288,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 287,
                                            columnNumber: 41
                                        }, this) : pageRows.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "pi-row",
                                                children: columns.map((col)=>{
                                                    let val = "—";
                                                    if (col.key === "name") {
                                                        const fullName = `${p.firstName} ${p.lastName}`;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "pi-td",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "tooltip-wrap tooltip-top",
                                                                "data-tip": "More details",
                                                                style: {
                                                                    display: "inline-block"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    onClick: ()=>setSelectedPlayer(p),
                                                                    style: {
                                                                        cursor: "pointer",
                                                                        color: "#e03030",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: fullName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 69
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 301,
                                                                columnNumber: 65
                                                            }, this)
                                                        }, col.key, false, {
                                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                            lineNumber: 300,
                                                            columnNumber: 61
                                                        }, this);
                                                    } else if (col.stat) val = p.stats?.[col.stat] ?? "—";
                                                    else val = p[col.key] ?? "—";
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "pi-td",
                                                        children: val
                                                    }, col.key, false, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 319,
                                                        columnNumber: 57
                                                    }, this);
                                                })
                                            }, p.id, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 294,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 264,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                            lineNumber: 263,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 262,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-pager",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-pagerInfo",
                                children: [
                                    "Showing",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            pageRows.length === 0 ? 0 : (safePage - 1) * pageSize + 1,
                                            "–",
                                            (safePage - 1) * pageSize + pageRows.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 334,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    "of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: sorted.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 338,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 332,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-pagerBtns",
                                children: [
                                    [
                                        [
                                            "⟪",
                                            1
                                        ],
                                        [
                                            "‹",
                                            safePage - 1
                                        ],
                                        [
                                            "›",
                                            safePage + 1
                                        ],
                                        [
                                            "⟫",
                                            pageCount
                                        ]
                                    ].map(([label, target])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "pi-btn pi-btn--page",
                                            type: "button",
                                            onClick: ()=>setPage(target),
                                            disabled: target < 1 || target > pageCount || target === safePage,
                                            children: label
                                        }, label, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pi-pageText",
                                        children: [
                                            "Page ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: safePage
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 358,
                                                columnNumber: 34
                                            }, this),
                                            " / ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: pageCount
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 358,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 357,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 340,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                lineNumber: 197,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PlayerProfileModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerProfileModal"], {
                isOpen: !!selectedPlayer,
                onClose: ()=>setSelectedPlayer(null),
                player: {
                    username: `${selectedPlayer?.firstName} ${selectedPlayer?.lastName}`,
                    role: selectedPlayer?.pos,
                    games: "—",
                    wins: selectedPlayer?.stats?.W ?? "—",
                    losses: "—",
                    winRate: selectedPlayer?.stats?.AVG ?? "—",
                    team: selectedPlayer?.team,
                    stats: selectedPlayer?.stats
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                lineNumber: 363,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
        lineNumber: 196,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0lhsoh3._.js.map