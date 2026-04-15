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
"[project]/catch23-next/src/components/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "4c6b1c600461fc5db52e23ebf7959e754ea2275553fc31a292419c429aea0a42") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4c6b1c600461fc5db52e23ebf7959e754ea2275553fc31a292419c429aea0a42";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[useEffect()]": ()=>{
                const loadLeagues = async function loadLeagues() {
                    const userId = localStorage.getItem("user_id");
                    if (!userId) {
                        console.log("No user_id found, skipping league fetch");
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
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "home-leagues-title",
            children: "Leagues"
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-header",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tooltip-wrap tooltip-right",
                    "data-tip": "Create a new league",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "create-league-btn",
                        onClick: onCreateLeague,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 62,
                        columnNumber: 118
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 62,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== leagues) {
        t5 = leagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home-empty",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "No leagues yet."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 69,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Click the button to create one."
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/Home.jsx",
                    lineNumber: 69,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 69,
            columnNumber: 33
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "league-grid",
            children: leagues.map(_HomeLeaguesMap)
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 69,
            columnNumber: 132
        }, this);
        $[6] = leagues;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmDeleteModal, {
            isOpen: !!deleteTarget,
            leagueName: deleteTarget?.name || "",
            onCancel: _HomeConfirmDeleteModalOnCancel,
            onConfirm: {
                "Home[<ConfirmDeleteModal>.onConfirm]": async ()=>{
                    ;
                    try {
                        await deleteLeague(deleteTarget.id);
                        setLeagues(_HomeConfirmDeleteModalOnConfirmSetLeagues);
                        setDeleteTarget(null);
                    } catch (t7) {
                        const err = t7;
                        console.error("Failed to delete league:", err);
                        alert("Error deleting league. Please try again.");
                    }
                }
            }["Home[<ConfirmDeleteModal>.onConfirm]"]
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateLeagueModal, {
            isOpen: isCreateOpen,
            onClose: _HomeCreateLeagueModalOnClose,
            onSave: {
                "Home[<CreateLeagueModal>.onSave]": (newLeague)=>{
                    console.log("new league from modal:", newLeague);
                    setLeagues({
                        "Home[<CreateLeagueModal>.onSave > setLeagues()]": (prev_0)=>[
                                newLeague,
                                ...prev_0
                            ]
                    }["Home[<CreateLeagueModal>.onSave > setLeagues()]"]);
                }
            }["Home[<CreateLeagueModal>.onSave]"]
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "home",
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    return t8;
}
_s(Home, "cGspQ7vl5HsucbBZPKgPNmgnNkg=");
_c = Home;
// For evelyn
// DELETE FROM scoring_settings;
// DELETE FROM player_settings;
// DELETE FROM roster_settings;
// DELETE FROM draft_settings;
// DELETE FROM league;
function _HomeCreateLeagueModalOnClose() {
    return setIsCreateOpen(false);
}
function _HomeConfirmDeleteModalOnConfirmSetLeagues(prev) {
    return prev.filter(_HomeConfirmDeleteModalOnConfirmSetLeaguesPrevFilter);
}
function _HomeConfirmDeleteModalOnConfirmSetLeaguesPrevFilter(l) {
    return l.id !== deleteTarget.id;
}
function _HomeConfirmDeleteModalOnCancel() {
    return setDeleteTarget(null);
}
function _HomeLeaguesMap(league) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "league-card",
        onClick: {
            "Home[leagues.map() > <div>.onClick]": ()=>setActiveLeague(league)
        }["Home[leagues.map() > <div>.onClick]"],
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
                lineNumber: 141,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: "league-logo-placeholder",
                src: league.leagueIconUrl || league.league_icon_url || league.logoUrl || DEFAULT_LOGO,
                alt: "league logo"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 149,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "league-title",
                children: league.title || league.name
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 149,
                columnNumber: 235
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
                lineNumber: 149,
                columnNumber: 300
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "league-season",
                children: [
                    "Season ",
                    league.seasonNum
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 149,
                columnNumber: 411
            }, this)
        ]
    }, league.id, true, {
        fileName: "[project]/catch23-next/src/components/Home.jsx",
        lineNumber: 139,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=catch23-next_src_08zp64_._.js.map