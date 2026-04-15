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
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const BASE_URL = 'http://localhost:8000';
axios.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials = true;
const registerUser = (email, displayName, password)=>axios.post('/api/users/register', {
        email,
        displayName,
        password
    });
const loginUser = (email, password)=>axios.post('/api/users/login', {
        email,
        password
    });
const createLeague = (leagueData)=>axios.post('/api/leagues/create', {
        title: leagueData.name,
        season: leagueData.season,
        status: 'PRE_DRAFT',
        leagueIconUrl: 'https://i.imgur.com/DxHxkuJ.png',
        user_id: localStorage.getItem('user_id')
    });
const deleteLeague = (id)=>axios.delete(`/api/leagues/${id}`);
const getUserLeagues = (userId)=>axios.get(`/api/leagues/user/${userId}`);
const createTeam = (name, leagueId)=>axios.post('/api/teams/create', {
        name,
        league_id: leagueId,
        budget: 260 // default
    });
const getLeagueTeams = (leagueId)=>axios.get(`/api/teams/league/${leagueId}`);
const getTeam = (id)=>axios.get(`/api/teams/${id}`);
const updateTeam = (id, data)=>axios.put(`/api/teams/${id}`, data);
const deleteTeam = (id)=>axios.delete(`/api/teams/${id}`);
const getAllPlayers = ()=>axios.get('/api/players/all');
const getPlayer = (id)=>axios.get(`/api/players/${id}`);
const getPlayerByMlbId = (mlbPlayerId)=>axios.get(`/api/players/mlbId/${mlbPlayerId}`);
const getPlayersByPosition = (position)=>axios.get(`/api/players/position/${position}`);
const createPlayer = (data)=>axios.post('/api/players/create', data);
const updatePlayer = (id, data)=>axios.put(`/api/players/${id}`, data);
const deletePlayer = (id)=>axios.delete(`/api/players/${id}`);
const saveDraftPicks = (payload)=>axios.post('/api/draft-picks/bulk', payload);
const getTeamDraftPicks = (teamId)=>axios.get(`/api/draft-picks/team/${teamId}`);
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
"[project]/catch23-next/src/components/PositionPlayersModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionPlayersModal",
    ()=>PositionPlayersModal,
    "playerMatchesRowPosition",
    ()=>playerMatchesRowPosition,
    "rankPlayers",
    ()=>rankPlayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) setTimeout(()=>setVisible(true), 10);
        else setVisible(false);
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const ranked = rankPlayers(players).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ppm-backdrop",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `ppm-panel ${visible ? "ppm-panel--visible" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-header-title",
                                        children: "TOP AVAILABLE"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-header-position",
                                        children: POSITION_LABELS[position] ?? position
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "ppm-close-btn",
                                onMouseEnter: (e)=>e.target.style.background = "#3a4890",
                                onMouseLeave: (e)=>e.target.style.background = "#2e3a7a",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-col-labels",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "PLAYER"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "TEAM"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-player-list",
                        children: ranked.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ppm-empty",
                            children: "No available players for this position."
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                            lineNumber: 93,
                            columnNumber: 25
                        }, this) : ranked.map((p, i)=>{
                            const isDrafted = draftedIds.has(p.id);
                            const fullName = `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim();
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `ppm-player-row ${isDrafted ? "ppm-player-row--drafted" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ppm-player-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ppm-rank",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                lineNumber: 107,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `ppm-player-name ${isDrafted ? "ppm-player-name--drafted" : ""}`,
                                                        children: fullName
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 45
                                                    }, this),
                                                    isDrafted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ppm-drafted-label",
                                                        children: "DRAFTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                                lineNumber: 108,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 106,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ppm-team",
                                        children: p.realTeam ?? p.real_team ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                        lineNumber: 119,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                                lineNumber: 101,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ppm-footer",
                        children: "SORTED ALPHABETICALLY • SWAP rankPlayers() FOR SCORING EQUATION"
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/PositionPlayersModal.jsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/catch23-next/src/components/LeagueDraftBoard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeagueDraftBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/ConfirmDeleteModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/PositionPlayersModal.jsx [app-ssr] (ecmascript)");
'use client';
;
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
    const POSITIONS = buildPositions(league.rosterSettings);
    const [teams, setTeams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // { teamId, rowIndex, field }
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingTeamId, setEditingTeamId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editTeamValue, setEditTeamValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [allPlayers, setAllPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [teamDeleteTarget, setTeamDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saveBanner, setSaveBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPosition, setSelectedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    //const [teamBudgets, setTeamBudgets] = useState({});
    const cellInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const teamInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // get all already-drafted player ids across every team
    const draftedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>// flat map loops through every team and grabs the player_id from every row, filter removes null values
        new Set(teams.flatMap((t)=>t.rows.map((r)=>r.player_id).filter(Boolean))), [
        teams
    ]);
    const remainingBudgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = {};
        teams.forEach((team)=>{
            const spent = (team.rows ?? []).reduce((sum, row)=>{
                const price = parseFloat(row.price);
                return sum + (isNaN(price) ? 0 : price);
            }, 0);
            console.log("league:", league);
            result[team.id] = (league.draftSettings.budget ?? 0) - spent;
        });
        return result;
    }, [
        teams,
        league.draftSettings.budget
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTeams = async ()=>{
            try {
                const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeagueTeams"])(league.id);
                const loaded = await Promise.all(data.map(async (t)=>{
                    const emptyRows = POSITIONS.map(()=>({
                            player: "",
                            player_id: null,
                            season: "",
                            price: ""
                        }));
                    const { data: picks } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeamDraftPicks"])(t.id);
                    picks.forEach((pick)=>{
                        const rowIndex = POSITIONS.findIndex((pos, idx)=>positionToEnum(pos, idx, POSITIONS) === pick.rosterPosition);
                        if (rowIndex !== -1) {
                            emptyRows[rowIndex] = {
                                player: pick.player ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim() : "",
                                player_id: pick.player_id,
                                season: "",
                                price: pick.cost ?? ""
                            };
                        }
                    });
                    return {
                        id: Number(t.id),
                        name: t.name,
                        rows: emptyRows
                    };
                }));
                setTeams(loaded);
            } catch (err) {
                console.error("Failed to load teams/draft picks:", err);
            }
        };
        fetchTeams();
    }, [
        league.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPlayers"])().then(({ data })=>{
            console.log("players from api:", data);
            setAllPlayers(data);
        }).catch((err)=>{
            console.error("Failed to load players:", err);
        });
    }, []);
    const handleSaveDraft = async ()=>{
        const picks = [];
        teams.forEach((team)=>{
            team.rows.forEach((row, i)=>{
                if (!row.player_id) return;
                picks.push({
                    cost: parseFloat(row.price) || 0,
                    rosterPosition: positionToEnum(POSITIONS[i], i, POSITIONS),
                    team_id: team.id,
                    player_id: row.player_id
                });
            });
        });
        console.log("sending picks:", picks);
        try {
            // save draft picks to the database
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveDraftPicks"])({
                picks,
                teamIds: teams.map((t)=>t.id)
            });
            setSaveBanner(true);
            setTimeout(()=>setSaveBanner(false), 3000);
        } catch (err) {
            console.error("Failed to save draft:", err);
            alert("Error saving draft.");
        }
    };
    // adding a new team
    const addTeam = async ()=>{
        // initialize column
        const newTeam = makeEmptyTeam(teams.length, POSITIONS);
        try {
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTeam"])(newTeam.name, league.id);
            newTeam.id = Number(data.id);
            setTeams((prev)=>[
                    ...prev,
                    newTeam
                ]);
        } catch (err) {
            console.error("Failed to save team:", err);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteTeam"])(teamId);
        setTeams((prev)=>prev.filter((t)=>t.id !== teamId));
    };
    // editing a team
    const startEditTeam = (team)=>{
        setEditingTeamId(team.id);
        setEditTeamValue(team.name);
        setTimeout(()=>teamInputRef.current?.focus(), 0);
    };
    const commitTeamEdit = ()=>{
        if (!editingTeamId) return;
        setTeams((prev)=>prev.map((t)=>t.id === editingTeamId ? {
                    ...t,
                    name: editTeamValue.trim() || t.name
                } : t));
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
    const startEditCell = (teamId, rowIndex, field, currentValue)=>{
        setEditingCell({
            teamId,
            rowIndex,
            field
        });
        setEditValue(currentValue);
        setTimeout(()=>cellInputRef.current?.focus(), 0);
    };
    const commitCellEdit = ()=>{
        if (!editingCell) return;
        const { teamId, rowIndex, field } = editingCell;
        setTeams((prev)=>prev.map((t)=>{
                if (t.id !== teamId) return t;
                const newRows = t.rows.map((row, i)=>{
                    if (i !== rowIndex) return row;
                    if (field === "player") {
                        if (editValue.trim().toLowerCase() === row.player.toLowerCase()) {
                            return row;
                        }
                        const matched = allPlayers.find((p)=>getPlayerName(p) === editValue.trim().toLowerCase());
                        // invalid if: doesn't exist OR already drafted by another team
                        const isValid = matched && !draftedIds.has(matched.id);
                        return {
                            ...row,
                            player: isValid ? getPlayerDisplayName(matched) : "",
                            player_id: isValid ? matched.id : null
                        };
                    }
                    return {
                        ...row,
                        [field]: editValue
                    };
                });
                return {
                    ...t,
                    rows: newRows
                };
            }));
        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };
    const handleCellKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            commitCellEdit();
        }
        if (e.key === "Escape") {
            setEditingCell(null);
            setEditValue("");
            setSuggestions([]);
        }
    };
    const isEditing = (teamId, rowIndex, field)=>editingCell?.teamId === teamId && editingCell?.rowIndex === rowIndex && editingCell?.field === field;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "home",
        style: {
            paddingTop: 80
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `save-banner ${saveBanner ? "save-banner--visible" : ""}`,
                children: "✅ Draft saved!"
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 330,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-header-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "db-back-btn",
                                onClick: onBack,
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 335,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "db-league-name",
                                        children: league?.title || "LEAGUE"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 337,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 334,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-header-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-num",
                                        children: teams.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 345,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-label",
                                        children: "Teams"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 346,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 344,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "db-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-num",
                                        children: POSITIONS.length
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 349,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "db-stat-label",
                                        children: "Positions"
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 348,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 333,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-toolbar-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "db-tool-btn db-tool-primary",
                            onClick: addTeam,
                            children: "+ Add Team"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 356,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "db-toolbar-right",
                        children: teams.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "db-progress-label",
                                    children: "Click any cell to edit • Click team name to rename"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                    lineNumber: 364,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "db-tool-btn db-tool-primary",
                                    onClick: handleSaveDraft,
                                    children: "💾 Save Draft"
                                }, void 0, false, {
                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 361,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 355,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "db-table-wrap",
                children: teams.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-empty",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-icon",
                            children: "📋"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 378,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-title",
                            children: "No teams yet"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 379,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "db-empty-sub",
                            children: 'Click "+ Add Team" to add your first team column'
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 380,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "clm-primary",
                            style: {
                                marginTop: 18
                            },
                            onClick: addTeam,
                            children: "+ Add Team"
                        }, void 0, false, {
                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                            lineNumber: 381,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                    lineNumber: 377,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "db-scroll",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "db-table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "db-th db-th-pos db-sticky-col",
                                                rowSpan: 2,
                                                children: "POS"
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 390,
                                                columnNumber: 37
                                            }, this),
                                            teams.map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "db-th db-th-teamname",
                                                    colSpan: 3,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "db-th-team-inner",
                                                            children: [
                                                                editingTeamId === team.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: teamInputRef,
                                                                    className: "db-team-input",
                                                                    value: editTeamValue,
                                                                    onChange: (e)=>setEditTeamValue(e.target.value),
                                                                    onBlur: commitTeamEdit,
                                                                    onKeyDown: handleTeamKeyDown
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 53
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-team-name",
                                                                    onClick: ()=>startEditTeam(team),
                                                                    title: "Click to rename",
                                                                    children: team.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "db-remove-team",
                                                                    onClick: ()=>setTeamDeleteTarget({
                                                                            id: team.id,
                                                                            name: team.name
                                                                        }),
                                                                    title: "Remove team",
                                                                    children: "×"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 393,
                                                            columnNumber: 45
                                                        }, this),
                                                        league.draftSettings.budget != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "db-team-budget",
                                                            children: [
                                                                "$",
                                                                remainingBudgets[team.id]?.toFixed(0),
                                                                " left"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 422,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, team.id, true, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 392,
                                                    columnNumber: 41
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 389,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: teams.map((team)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub",
                                                        children: "PLAYER"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 435,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub db-th-narrow",
                                                        children: "SEASON"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 436,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "db-th db-th-sub db-th-narrow",
                                                        children: "PRICE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                        lineNumber: 437,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, team.id, true, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 434,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 432,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 388,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: POSITIONS.map((pos, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "db-td db-td-pos db-sticky-col",
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: ()=>setSelectedPosition(pos),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tooltip-wrap",
                                                    "data-tip": "Click to view available players",
                                                    children: pos
                                                }, void 0, false, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 454,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                lineNumber: 449,
                                                columnNumber: 41
                                            }, this),
                                            teams.map((team)=>{
                                                const row = team.rows[rowIndex];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick",
                                                                isEditing(team.id, rowIndex, "player") ? "db-td-editing" : "",
                                                                row.player ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team.id, rowIndex, "player") && startEditCell(team.id, rowIndex, "player", row.player),
                                                            children: isEditing(team.id, rowIndex, "player") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: "relative"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: cellInputRef,
                                                                        className: "db-cell-input",
                                                                        value: editValue,
                                                                        onChange: (e)=>{
                                                                            const value = e.target.value;
                                                                            const q = value.toLowerCase();
                                                                            setEditValue(value);
                                                                            setSuggestions(q.length < 2 ? [] : allPlayers.filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerMatchesRowPosition"])(p, pos)).filter((p)=>getPlayerName(p).includes(q)).filter((p)=>!draftedIds.has(p.id)) // exclude players that are already drafted
                                                                            .slice(0, 8));
                                                                        },
                                                                        onBlur: commitCellEdit,
                                                                        onKeyDown: handleCellKeyDown
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 65
                                                                    }, this),
                                                                    suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "db-suggestions",
                                                                        children: suggestions.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                className: "db-suggestion-item",
                                                                                onMouseDown: (e)=>{
                                                                                    e.preventDefault();
                                                                                    const displayName = getPlayerDisplayName(p);
                                                                                    setTeams((prev)=>prev.map((t)=>{
                                                                                            if (t.id !== team.id) return t;
                                                                                            const newRows = t.rows.map((r, i)=>i === rowIndex ? {
                                                                                                    ...r,
                                                                                                    player: displayName,
                                                                                                    player_id: p.id
                                                                                                } : r);
                                                                                            return {
                                                                                                ...t,
                                                                                                rows: newRows
                                                                                            };
                                                                                        }));
                                                                                    setEditingCell(null);
                                                                                    setEditValue("");
                                                                                    setSuggestions([]);
                                                                                },
                                                                                children: [
                                                                                    getPlayerDisplayName(p),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "db-suggestion-pos",
                                                                                        children: [
                                                                                            " ",
                                                                                            Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : ""
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                                        lineNumber: 535,
                                                                                        columnNumber: 81
                                                                                    }, this)
                                                                                ]
                                                                            }, p.id, true, {
                                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                                lineNumber: 503,
                                                                                columnNumber: 77
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 69
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 476,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row.player || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 80
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 547,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 464,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick db-td-narrow",
                                                                isEditing(team.id, rowIndex, "season") ? "db-td-editing" : "",
                                                                row.season ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team.id, rowIndex, "season") && startEditCell(team.id, rowIndex, "season", row.season),
                                                            children: isEditing(team.id, rowIndex, "season") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: cellInputRef,
                                                                className: "db-cell-input",
                                                                value: editValue,
                                                                onChange: (e)=>setEditValue(e.target.value),
                                                                onBlur: commitCellEdit,
                                                                onKeyDown: handleCellKeyDown
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 565,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row.season || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 575,
                                                                    columnNumber: 80
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 574,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 553,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: [
                                                                "db-td db-td-pick db-td-narrow",
                                                                isEditing(team.id, rowIndex, "price") ? "db-td-editing" : "",
                                                                row.price ? "db-td-filled" : ""
                                                            ].join(" "),
                                                            onClick: ()=>!isEditing(team.id, rowIndex, "price") && startEditCell(team.id, rowIndex, "price", row.price),
                                                            children: isEditing(team.id, rowIndex, "price") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: cellInputRef,
                                                                className: "db-cell-input",
                                                                value: editValue,
                                                                onChange: (e)=>setEditValue(e.target.value),
                                                                onBlur: commitCellEdit,
                                                                onKeyDown: handleCellKeyDown
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 592,
                                                                columnNumber: 61
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "db-cell-value",
                                                                children: row.price || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "db-cell-empty",
                                                                    children: "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 79
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                                lineNumber: 601,
                                                                columnNumber: 61
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                            lineNumber: 580,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, `${team.id}-${rowIndex}`, true, {
                                                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                                    lineNumber: 463,
                                                    columnNumber: 49
                                                }, this);
                                            })
                                        ]
                                    }, rowIndex, true, {
                                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                        lineNumber: 445,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                                lineNumber: 443,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                        lineNumber: 387,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                    lineNumber: 386,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 375,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$ConfirmDeleteModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!teamDeleteTarget,
                leagueName: teamDeleteTarget?.name || "",
                onCancel: ()=>setTeamDeleteTarget(null),
                onConfirm: async ()=>{
                    try {
                        await removeTeam(teamDeleteTarget.id);
                        setTeamDeleteTarget(null);
                    } catch (err) {
                        console.error("Failed to delete team:", err);
                        alert("Error deleting team.");
                    }
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 617,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PositionPlayersModal"], {
                isOpen: !!selectedPosition,
                onClose: ()=>setSelectedPosition(null),
                position: selectedPosition,
                players: allPlayers.filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$PositionPlayersModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerMatchesRowPosition"])(p, selectedPosition ?? "")),
                draftedIds: draftedIds
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
                lineNumber: 632,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/LeagueDraftBoard.jsx",
        lineNumber: 329,
        columnNumber: 9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$LeagueDraftBoard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/components/LeagueDraftBoard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/catch23-next/src/lib/api.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home() {
    // TODO: replace with backend data later
    const [deleteTarget, setDeleteTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeLeague, setActiveLeague] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // track which league is open
    const DEFAULT_LOGO = 'https://i.imgur.com/DxHxkuJ.png';
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchLeagues = async ()=>{
        try {
            const user_id = localStorage.getItem('user_id');
            console.log('fetching leagues for user_id:', user_id);
            const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserLeagues"])(user_id);
            console.log('leagues from DB:', data);
            const leaguesWithCounts = await Promise.all(data.map(async (league)=>{
                const { data: teams } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLeagueTeams"])(league.id);
                return {
                    ...league,
                    teamCount: teams.length
                };
            }));
            setLeagues(leaguesWithCounts);
        } catch (err) {
            console.error("Failed to fetch leagues:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLeagues();
    }, []);
    if (activeLeague) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$LeagueDraftBoard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            league: activeLeague,
            onBack: ()=>{
                setActiveLeague(null);
                fetchLeagues();
            }
        }, void 0, false, {
            fileName: "[project]/catch23-next/src/components/Home.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    const removeLeague = (id)=>{
        setLeagues((prev)=>prev.filter((l)=>l.id !== id));
    };
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
                        lineNumber: 58,
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
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            leagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-empty",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "No leagues yet."
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Click the button to create one."
                    }, void 0, false, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "league-grid",
                children: leagues.map((league)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "league-card",
                        onClick: ()=>setActiveLeague(league),
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
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "league-logo-placeholder",
                                src: league.leagueIconUrl || league.league_icon_url || league.logoUrl || DEFAULT_LOGO,
                                alt: "league logo"
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "league-title",
                                children: league.title || league.name
                            }, void 0, false, {
                                fileName: "[project]/catch23-next/src/components/Home.jsx",
                                lineNumber: 91,
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
                                lineNumber: 92,
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
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, league.id, true, {
                        fileName: "[project]/catch23-next/src/components/Home.jsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 70,
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
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$catch23$2d$next$2f$src$2f$components$2f$CreateLeagueModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateOpen,
                onClose: ()=>setIsCreateOpen(false),
                onSave: (newLeague)=>{
                    console.log('new league from modal:', newLeague);
                    setLeagues((prev)=>[
                            newLeague,
                            ...prev
                        ]);
                }
            }, void 0, false, {
                fileName: "[project]/catch23-next/src/components/Home.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/catch23-next/src/components/Home.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
} // For evelyn
 // DELETE FROM scoring_settings;
 // DELETE FROM player_settings;
 // DELETE FROM roster_settings;
 // DELETE FROM draft_settings;
 // DELETE FROM league;
}),
];

//# sourceMappingURL=catch23-next_src_0z4e.nd._.js.map