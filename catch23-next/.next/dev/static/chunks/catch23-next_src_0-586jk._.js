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
"[project]/catch23-next/src/components/PlayerProfileModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerProfileModal",
    ()=>PlayerProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PlayerProfileModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "4159609b538795e15eb1f3561f2021c3b70323be677265c408bfdd27cf2dc635") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4159609b538795e15eb1f3561f2021c3b70323be677265c408bfdd27cf2dc635";
    }
    const { isOpen, onClose, player } = t0;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] !== isOpen) {
        t1 = ({
            "PlayerProfileModal[useEffect()]": ()=>{
                if (isOpen) {
                    setTimeout({
                        "PlayerProfileModal[useEffect() > setTimeout()]": ()=>setVisible(true)
                    }["PlayerProfileModal[useEffect() > setTimeout()]"], 10);
                } else {
                    setVisible(false);
                }
            }
        })["PlayerProfileModal[useEffect()]"];
        t2 = [
            isOpen
        ];
        $[1] = isOpen;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isOpen) {
        return null;
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClose,
            style: t3
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[5] = onClose;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = visible ? "translateX(0)" : "translateX(100%)";
    let t6;
    if ($[7] !== t5) {
        t6 = {
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
            transform: t5,
            transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            overflowY: "auto"
        };
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 28px",
            borderBottom: "2px solid #5060b0"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontSize: "26px",
                letterSpacing: "0.08em",
                color: "#fff"
            },
            children: "PLAYER PROFILE"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
    } else {
        t7 = $[9];
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            background: "#2e3a7a",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            width: "36px",
            height: "36px",
            fontSize: "18px",
            cursor: "pointer",
            fontFamily: "sans-serif"
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== onClose) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t7,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: t9,
                    onMouseEnter: _PlayerProfileModalButtonOnMouseEnter,
                    onMouseLeave: _PlayerProfileModalButtonOnMouseLeave,
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                    lineNumber: 131,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[12] = onClose;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    let t12;
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        };
        t12 = {
            textAlign: "center"
        };
        t13 = {
            fontSize: "36px",
            color: "#e03030",
            letterSpacing: "0.08em"
        };
        $[14] = t11;
        $[15] = t12;
        $[16] = t13;
    } else {
        t11 = $[14];
        t12 = $[15];
        t13 = $[16];
    }
    const t14 = player?.username || "PLAYER";
    let t15;
    if ($[17] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            fontSize: "16px",
            color: "#aab0d0",
            letterSpacing: "0.1em"
        };
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    const t17 = player?.team ? `${player.team} · ${player.role}` : player?.role || "\u2014";
    let t18;
    if ($[20] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[20] = t17;
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] !== t15 || $[23] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[22] = t15;
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== player) {
        t20 = player?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "13px",
                        color: "#aab0d0",
                        letterSpacing: "0.1em",
                        marginBottom: "10px"
                    },
                    children: "HITTING"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                    lineNumber: 203,
                    columnNumber: 33
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
                ].map(_PlayerProfileModalAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 203,
            columnNumber: 28
        }, this);
        $[25] = player;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] !== player) {
        t21 = player?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "13px",
                        color: "#aab0d0",
                        letterSpacing: "0.1em",
                        marginBottom: "10px"
                    },
                    children: "PITCHING"
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                    lineNumber: 216,
                    columnNumber: 33
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
                ].map(_PlayerProfileModalAnonymous2)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 216,
            columnNumber: 28
        }, this);
        $[27] = player;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== t19 || $[30] !== t20 || $[31] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: [
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[29] = t19;
        $[30] = t20;
        $[31] = t21;
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t10 || $[34] !== t22 || $[35] !== t6) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: [
                t10,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t22;
        $[35] = t6;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] !== t23 || $[38] !== t4) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t23
            ]
        }, void 0, true);
        $[37] = t23;
        $[38] = t4;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    return t24;
}
_s(PlayerProfileModal, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = PlayerProfileModal;
function _PlayerProfileModalAnonymous2(t0) {
    const [label_0, value_0] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid #5060b0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "14px",
                    color: "#aab0d0",
                    letterSpacing: "0.08em"
                },
                children: label_0
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 266,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: "bold"
                },
                children: value_0 ?? "\u2014"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 270,
                columnNumber: 24
            }, this)
        ]
    }, label_0, true, {
        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
        lineNumber: 260,
        columnNumber: 10
    }, this);
}
function _PlayerProfileModalAnonymous(t0) {
    const [label, value] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid #5060b0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "14px",
                    color: "#aab0d0",
                    letterSpacing: "0.08em"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 284,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "18px",
                    color: "#fff",
                    fontWeight: "bold"
                },
                children: value ?? "\u2014"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
                lineNumber: 288,
                columnNumber: 22
            }, this)
        ]
    }, label, true, {
        fileName: "[project]/catch23-next/src/components/PlayerProfileModal.jsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
function _PlayerProfileModalButtonOnMouseLeave(e_0) {
    return e_0.target.style.background = "#2e3a7a";
}
function _PlayerProfileModalButtonOnMouseEnter(e) {
    return e.target.style.background = "#3a4890";
}
var _c;
__turbopack_context__.k.register(_c, "PlayerProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/catch23-next/src/components/PlayerInformation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerInformation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PlayerProfileModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/PlayerProfileModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    // MLB-like tabs
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hitting"); // hitting | pitching
    // search filter inputs
    const [nameQuery, setNameQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [teamQuery, setTeamQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [posQuery, setPosQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // which column is currently sorted, and in which direction
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    // current page number, and how many rows to show per page
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
    // pick the right column set based on the active tab 
    const columns = mode === "hitting" ? HITTING_COLUMNS : PITCHING_COLUMNS;
    // player selected
    const [selectedPlayer, setSelectedPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerInformation.useEffect": ()=>{
            const fetchPlayers = {
                "PlayerInformation.useEffect.fetchPlayers": async ()=>{
                    try {
                        const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllPlayers"])();
                        // map DB fields to what the component expects
                        const mapped = data.map({
                            "PlayerInformation.useEffect.fetchPlayers.mapped": (p)=>({
                                    id: p.id,
                                    firstName: p.firstName || p.first_name,
                                    lastName: p.lastName || p.last_name,
                                    team: p.realTeam || p.real_team,
                                    pos: p.playablePositions?.[0] || "—",
                                    age: "—",
                                    // not in DB yet
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
                                })
                        }["PlayerInformation.useEffect.fetchPlayers.mapped"]);
                        setPlayers(mapped);
                    } catch (err) {
                        console.error("Failed to fetch players:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PlayerInformation.useEffect.fetchPlayers"];
            fetchPlayers();
        }
    }["PlayerInformation.useEffect"], []);
    // returns only te players that match all active filter inputs 
    // Note: useMemo only re-runs when nameQuery or posQuery changes, not on every single render
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerInformation.useMemo[filtered]": ()=>players.filter({
                "PlayerInformation.useMemo[filtered]": (p_0)=>(!nameQuery || `${p_0.firstName} ${p_0.lastName}`.toLowerCase().includes(nameQuery.toLowerCase())) && (!teamQuery || p_0.team?.toLowerCase().includes(teamQuery.toLowerCase())) && (!posQuery || p_0.pos?.toLowerCase().includes(posQuery.toLowerCase()))
            }["PlayerInformation.useMemo[filtered]"])
    }["PlayerInformation.useMemo[filtered]"], [
        players,
        nameQuery,
        teamQuery,
        posQuery
    ]);
    // Sort
    // takes the filtered array and returns a new sorted copy 
    const sorted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerInformation.useMemo[sorted]": ()=>{
            const col = columns.find({
                "PlayerInformation.useMemo[sorted].col": (c)=>c.key === sortKey
            }["PlayerInformation.useMemo[sorted].col"]);
            if (!col) return filtered;
            // converts sort direction into a number you can multiply with
            const dir = sortDir === "asc" ? 1 : -1;
            return [
                ...filtered
            ].sort({
                "PlayerInformation.useMemo[sorted]": (a, b)=>{
                    const va = sortVal(a, col), vb = sortVal(b, col);
                    // alphabetically compare strings (asc v desc)
                    if (typeof va === "string") return va.localeCompare(vb) * dir;
                    // compare numbers (asc v desc)
                    return (va - vb) * dir;
                }
            }["PlayerInformation.useMemo[sorted]"]);
        }
    }["PlayerInformation.useMemo[sorted]"], [
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
    const handleHeader = (col_0)=>{
        setSortKey(col_0.key);
        setSortDir(sortKey === col_0.key && sortDir === "asc" ? "desc" : "asc");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pi-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pi-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-titleRow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "pi-title",
                                        children: "Player Information"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 253,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pi-tabs",
                                        children: [
                                            "hitting",
                                            "pitching"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `pi-tab ${mode === t ? "is-active" : ""}`,
                                                onClick: ()=>switchTab(t),
                                                type: "button",
                                                children: t.charAt(0).toUpperCase() + t.slice(1)
                                            }, t, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 256,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-filters",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Player",
                                        value: nameQuery,
                                        onChange: (e)=>{
                                            setNameQuery(e.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Team",
                                        value: teamQuery,
                                        onChange: (e_0)=>{
                                            setTeamQuery(e_0.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 267,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "pi-input",
                                        placeholder: "Position",
                                        value: posQuery,
                                        onChange: (e_1)=>{
                                            setPosQuery(e_1.target.value);
                                            setPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 275,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "pi-rows",
                                        children: [
                                            "Rows",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "pi-select",
                                                value: pageSize,
                                                onChange: (e_2)=>{
                                                    setPageSize(Number(e_2.target.value));
                                                    setPage(1);
                                                },
                                                children: [
                                                    10,
                                                    25,
                                                    50
                                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: n,
                                                        children: n
                                                    }, n, false, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 289,
                                                        columnNumber: 56
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 285,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 262,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-tableCard",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pi-empty",
                            children: "Loading players..."
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                            lineNumber: 296,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 295,
                        columnNumber: 28
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-tableCard",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pi-tableScroll",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "pi-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: columns.map((col_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: `pi-th ${col_1.sortable ? "is-sortable" : ""}`,
                                                    onClick: ()=>handleHeader(col_1),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pi-thInner",
                                                        children: [
                                                            col_1.label,
                                                            sortKey === col_1.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pi-sortIcon",
                                                                children: sortDir === "asc" ? "▲" : "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 305,
                                                                columnNumber: 78
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "pi-sortIcon pi-sortIcon--muted",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 305,
                                                                columnNumber: 149
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 49
                                                    }, this)
                                                }, col_1.key, false, {
                                                    fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 63
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 301,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 300,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: pageRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "pi-empty",
                                                colSpan: columns.length,
                                                children: "No results."
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 312,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 311,
                                            columnNumber: 62
                                        }, this) : pageRows.map((p_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "pi-row",
                                                children: columns.map((col_2)=>{
                                                    let val = "—";
                                                    if (col_2.key === "name") {
                                                        const fullName = `${p_1.firstName} ${p_1.lastName}`;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "pi-td",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "tooltip-wrap tooltip-top",
                                                                "data-tip": "More details",
                                                                style: {
                                                                    display: "inline-block"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    onClick: ()=>setSelectedPlayer(p_1),
                                                                    style: {
                                                                        cursor: "pointer",
                                                                        color: "#e03030",
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: fullName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 69
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                                lineNumber: 321,
                                                                columnNumber: 65
                                                            }, this)
                                                        }, col_2.key, false, {
                                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                            lineNumber: 320,
                                                            columnNumber: 28
                                                        }, this);
                                                    } else if (col_2.stat) val = p_1.stats?.[col_2.stat] ?? "—";
                                                    else val = p_1[col_2.key] ?? "—";
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "pi-td",
                                                        children: val
                                                    }, col_2.key, false, {
                                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                        lineNumber: 334,
                                                        columnNumber: 26
                                                    }, this);
                                                })
                                            }, p_1.id, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 315,
                                                columnNumber: 69
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 310,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 299,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                            lineNumber: 298,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 297,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pi-pager",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pi-pagerInfo",
                                children: [
                                    "Showing",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            pageRows.length === 0 ? 0 : (safePage - 1) * pageSize + 1,
                                            "–",
                                            (safePage - 1) * pageSize + pageRows.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 345,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    "of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: sorted.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 349,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 343,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map(([label, target])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "pi-btn pi-btn--page",
                                            type: "button",
                                            onClick: ()=>setPage(target),
                                            disabled: target < 1 || target > pageCount || target === safePage,
                                            children: label
                                        }, label, false, {
                                            fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                            lineNumber: 352,
                                            columnNumber: 122
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pi-pageText",
                                        children: [
                                            "Page ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: safePage
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 356,
                                                columnNumber: 34
                                            }, this),
                                            " / ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: pageCount
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                                lineNumber: 356,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                        lineNumber: 355,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                                lineNumber: 351,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                        lineNumber: 342,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
                lineNumber: 250,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PlayerProfileModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerProfileModal"], {
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
                lineNumber: 361,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/PlayerInformation.jsx",
        lineNumber: 249,
        columnNumber: 10
    }, this);
}
_s(PlayerInformation, "FrEmOfALdPBX9mmK5ngm+JvBP6E=");
_c = PlayerInformation;
var _c;
__turbopack_context__.k.register(_c, "PlayerInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=catch23-next_src_0-586jk._.js.map