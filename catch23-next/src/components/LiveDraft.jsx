'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers, saveDraftPicks, getTeamDraftPicks, updateLeague, updateTeam } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { PositionPlayersModal, playerMatchesRowPosition } from "./PositionPlayersModal";
import { PlayerProfileModal } from "./PlayerProfileModal";

// helpers

const buildPositions = (rosterSettings) => {
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
        ...Array(rosterSettings.numPitchers).fill("P"),
    ];
};

const positionToEnum = (pos) => {
    const map = {
        C: 'CATCHER',
        '1B': 'FIRST',
        '2B': 'SECOND',
        '3B': 'THIRD',
        SS: 'SHORTSTOP',
        CI: 'CORNER',
        MI: 'MIDDLE',
        OF: 'OUTFIELD',
        U: 'UTILITY',
        P: 'PITCHER',
    };
    return map[pos] || pos;
};

function makeEmptyTeam(index, POSITIONS) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: POSITIONS.map(() => ({ player: "", player_id: null, season: "", price: "", draft_time: "" }))
    };
}

const getPlayerDisplayName = (p) => `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
const getPlayerName = (p) => getPlayerDisplayName(p).toLowerCase();

const simPicksKey = (id) => `sim_picks_${id}`;
const simTeamIdKey = (id) => `sim_team_${id}`;

const toProfilePlayer = (p) => ({
    id: p.id,
    username: getPlayerDisplayName(p),
    team: p.team ?? p.mlbTeam ?? p.teamAbbreviation ?? "",
    role: Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : (p.position ?? ""),
    stats: {
        HR: 0, RBI: 0, SB: 0, AVG: 0, R: 0, OBP: 0,
        W: 0, SV: 0, K: 0, ERA: 0, WHIP: 0,
        ...p.lastYearStats
    }
});


export default function LiveDraftBoard({ league, onBack, onModeChange, onLeagueUpdate }) {
    const POSITIONS = buildPositions(league.rosterSettings);

    const [teams, setTeams] = useState([]);
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");
    const [allPlayers, setAllPlayers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [teamDeleteTarget, setTeamDeleteTarget] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [draftLog, setDraftLog] = useState([]);
    const [draftPopup, setDraftPopup] = useState(null);
    const [endDraftConfirm, setEndDraftConfirm] = useState(false);
    const [endingDraft, setEndingDraft] = useState(false);
    const [profilePlayer, setProfilePlayer] = useState(null); // PlayerProfileModal

    const [simTeamId, setSimTeamId] = useState(null);
    const [simPicks, setSimPicks] = useState([]);
    const [targetsOpen, setTargetsOpen] = useState(true);

    const [pickBanner, setPickBanner] = useState(null);
    const [pickBannerVisible, setPickBannerVisible] = useState(false);
    const pickBannerTimer = useRef(null);

    const teamInputRef = useRef(null);
    const popupPlayerRef = useRef(null);

    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const cloneDraftState = (state) => JSON.parse(JSON.stringify(state));

    const getDraftSnapshot = () => ({
        teams: cloneDraftState(teams),
        draftLog: cloneDraftState(draftLog)
    });

    const applyDraftSnapshot = (snapshot) => {
        setTeams(cloneDraftState(snapshot.teams));
        setDraftLog(cloneDraftState(snapshot.draftLog));

        setDraftPopup(null);
        setSuggestions([]);
        setEditingTeamId(null);
        setEditTeamValue("");
    };

    const recordDraftHistory = () => {
        setUndoStack(prev => [...prev.slice(-49), getDraftSnapshot()]);
        setRedoStack([]);
    };

    const handleUndo = async () => {
        if (undoStack.length === 0) return;

        const previousSnapshot = undoStack[undoStack.length - 1];
        const currentSnapshot = getDraftSnapshot();

        setUndoStack(prev => prev.slice(0, -1));
        setRedoStack(prev => [...prev, currentSnapshot]);

        applyDraftSnapshot(previousSnapshot);
        await autoSave(previousSnapshot.teams);
    };

    const handleRedo = async () => {
        if (redoStack.length === 0) return;

        const nextSnapshot = redoStack[redoStack.length - 1];
        const currentSnapshot = getDraftSnapshot();

        setRedoStack(prev => prev.slice(0, -1));
        setUndoStack(prev => [...prev, currentSnapshot]);

        applyDraftSnapshot(nextSnapshot);
        await autoSave(nextSnapshot.teams);
    };


    const draftedIds = useMemo(() =>
        new Set(teams.flatMap(t => t.rows.map(r => r.player_id).filter(Boolean)))
        , [teams]);

    const remainingBudgets = useMemo(() => {
        const result = {};
        teams.forEach(team => {
            const spent = (team.rows ?? []).reduce((sum, row) => {
                const price = parseFloat(row.price);
                return sum + (isNaN(price) ? 0 : price);
            }, 0);
            result[team.id] = (league.draftSettings.budget ?? 0) - spent;
        });
        return result;
    }, [teams, league.draftSettings.budget]);

    const allFilled = useMemo(() =>
        teams.length > 0 && teams.every(t => t.rows.every(r => r.player_id))
        , [teams]);

    const emptyCount = useMemo(() =>
        teams.reduce((total, t) => total + t.rows.filter(r => !r.player_id).length, 0)
        , [teams]);

    const availableSimPicks = useMemo(() =>
        simPicks.filter(p => !draftedIds.has(p.player_id))
        , [simPicks, draftedIds]);

    // open profile

    const openProfile = (e, playerId) => {
        e.stopPropagation();
        const found = allPlayers.find(p => p.id === playerId);
        if (found) setProfilePlayer(toProfilePlayer(found));
    };


    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const storedSimId = typeof window !== "undefined"
                    ? localStorage.getItem(simTeamIdKey(league.id)) : null;
                const storedSimTeamId = storedSimId ? Number(storedSimId) : null;

                let storedSimPicks = [];
                if (typeof window !== "undefined") {
                    try {
                        const raw = localStorage.getItem(simPicksKey(league.id));
                        if (raw) storedSimPicks = JSON.parse(raw)?.picks ?? [];
                    } catch { }
                }

                setSimTeamId(storedSimTeamId);
                setSimPicks(storedSimPicks);

                const { data } = await getLeagueTeams(league.id);
                const loadedDraftLog = [];

                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = POSITIONS.map(() => ({
                            player: "", player_id: null, season: "", price: "", draft_time: ""
                        }));
                        const { data: picks } = await getTeamDraftPicks(t.id);
                        picks.forEach((pick) => {
                            const rowIndex = pick.slotIndex ?? POSITIONS.findIndex((pos, idx) =>
                                positionToEnum(pos) === pick.rosterPosition &&
                                !emptyRows[idx].player_id
                            );
                            if (rowIndex !== -1 && rowIndex < POSITIONS.length) {
                                const playerName = pick.player
                                    ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                    : "";
                                emptyRows[rowIndex] = {
                                    player: playerName,
                                    player_id: pick.player_id,
                                    season: pick.season ?? "",
                                    price: pick.cost ?? "",
                                    draft_time: pick.draft_time ?? ""
                                };
                                if (pick.draft_time) {
                                    loadedDraftLog.push({
                                        id: pick.id ?? crypto.randomUUID(),
                                        teamName: t.name,
                                        teamId: Number(t.id),
                                        playerName,
                                        position: POSITIONS[rowIndex],
                                        price: pick.cost ?? "",
                                        rowIndex,
                                        timestamp: pick.draft_time
                                    });
                                }
                            }
                        });
                        return { id: Number(t.id), name: t.name, rows: emptyRows };
                    })
                );

                const sorted = storedSimTeamId
                    ? [...loaded].sort((a, b) => {
                        if (a.id === storedSimTeamId) return -1;
                        if (b.id === storedSimTeamId) return 1;
                        return 0;
                    })
                    : loaded;

                setTeams(sorted);
                setDraftLog(
                    loadedDraftLog
                        .filter(e => e.playerName)
                        .sort((a, b) => Number(b.id) - Number(a.id))
                );
            } catch (err) {
                console.error("Failed to load teams/draft picks:", err);
            }
        };
        fetchTeams();
    }, [league.id]);

    useEffect(() => {
        getAllPlayers()
            .then(({ data }) => setAllPlayers(data))
            .catch(err => console.error("Failed to load players:", err));
    }, []);

    useEffect(() => {
        if (!draftPopup) return;
        const timer = setTimeout(() => { popupPlayerRef.current?.focus(); }, 50);
        return () => clearTimeout(timer);
    }, [!!draftPopup]);

    // pick banner

    const showPickBanner = (teamName, playerName, position) => {
        if (pickBannerTimer.current) clearTimeout(pickBannerTimer.current);
        setPickBanner({ teamName, playerName, position });
        setPickBannerVisible(false);
        setTimeout(() => setPickBannerVisible(true), 10);
        pickBannerTimer.current = setTimeout(() => setPickBannerVisible(false), 4000);
    };

    // auto save

    const autoSave = async (updatedTeams) => {
        const picks = [];
        updatedTeams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (!row.player_id) return;
                picks.push({
                    cost: parseFloat(row.price) || 0,
                    rosterPosition: positionToEnum(POSITIONS[i]),
                    team_id: team.id,
                    player_id: row.player_id,
                    season: row.season || league.season,
                    draft_time: row.draft_time || "",
                    slotIndex: i
                });
            });
        });
        try {
            await saveDraftPicks({ picks, teamIds: updatedTeams.map(t => t.id) });
        } catch (err) {
            console.error("Auto-save failed:", err);
        }
    };

    // end draft

    const handleEndDraft = async () => {
        if (!allFilled) return;
        setEndingDraft(true);
        try {
            await updateLeague(league.id, { status: "DRAFTED" });
            onModeChange("taxi");
        } catch (err) {
            console.error("Failed to end draft:", err);
            alert("Error ending draft. Please try again.");
        } finally {
            setEndingDraft(false);
            setEndDraftConfirm(false);
        }
    };

    // team management

    const addTeam = async () => {
        const newTeam = makeEmptyTeam(teams.length, POSITIONS);
        try {
            const { data } = await createTeam(newTeam.name, league.id);
            newTeam.id = Number(data.id);
            const updated = [...teams, newTeam];
            setTeams(updated);
            onLeagueUpdate({ teams: updated.map(t => ({ id: t.id, name: t.name })) });
        } catch (err) {
            console.error("Failed to save team:", err);
            alert("Error saving team to database.");
            return;
        }
        setTimeout(() => {
            setEditingTeamId(newTeam.id);
            setEditTeamValue(newTeam.name);
            setTimeout(() => teamInputRef.current?.focus(), 0);
        }, 0);
    };

    const removeTeam = async (teamId) => {
        await deleteTeam(teamId);
        const updated = teams.filter(t => t.id !== teamId);
        setTeams(updated);
        onLeagueUpdate({ teams: updated.map(t => ({ id: t.id, name: t.name })) });
    };

    const startEditTeam = (team) => {
        setEditingTeamId(team.id);
        setEditTeamValue(team.name);
        setTimeout(() => teamInputRef.current?.focus(), 0);
    };

    const commitTeamEdit = async() => {
        if (!editingTeamId) return;

        const currentTeam = teams.find(t => t.id === editingTeamId);
        const nextName = editTeamValue.trim() || currentTeam?.name;

        if (currentTeam && nextName !== currentTeam.name) {
            recordDraftHistory();
        }

        setTeams(prev => prev.map(t =>
            t.id === editingTeamId ? { ...t, name: nextName || t.name } : t
        ));

        setEditingTeamId(null);
        setEditTeamValue("");

        if(nextName && nextName !== currentTeam?.name) {
            try {
                await updateTeam(editingTeamId, { name: nextName });
            } catch(err) {
                console.error("Failed to save team name:", err);
            }
        }
    };

    const handleTeamKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitTeamEdit(); }
        if (e.key === "Escape") { setEditingTeamId(null); setEditTeamValue(""); }
    };

    // confirm draft pick 

    const confirmDraftPopup = async () => {
        const { teamId, rowIndex, playerId, playerName, price, pos } = draftPopup;
        if (!playerId || !price) return;

        recordDraftHistory();

        const displayTime = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

        const updatedTeams = teams.map(t => {
            if (t.id !== teamId) return t;
            const newRows = t.rows.map((r, i) =>
                i === rowIndex
                    ? { ...r, player: playerName, player_id: playerId, price, season: league.season, draft_time: displayTime }
                    : r
            );
            return { ...t, rows: newRows };
        });

        setTeams(updatedTeams);
        onLeagueUpdate({ 
            teams: updatedTeams.map(t => ({ 
                id: t.id, 
                name: t.name, 
                players: t.rows
                    .map((r, i) => ({ r, i }))
                    .filter(({ r }) => r.player_id)
                    .map(({ r, i }) => ({ 
                        player_id: r.player_id, 
                        rosterPosition: positionToEnum(POSITIONS[i]) 
                    }))
            })) 
        });

        const teamName = teams.find(t => t.id === teamId)?.name;
        setDraftLog(prev => [{
            id: crypto.randomUUID(),
            teamName, teamId, playerName, position: pos, price, rowIndex, timestamp: displayTime
        }, ...prev]);

        showPickBanner(teamName, playerName, pos);
        setDraftPopup(null);
        setSuggestions([]);
        await autoSave(updatedTeams);
    };

    // sim target click 

    const handleTargetClick = (pick) => {
        if (!simTeamId) return;
        const simTeam = teams.find(t => t.id === simTeamId);
        if (!simTeam) return;
        const rowIndex = POSITIONS.findIndex((pos, i) =>
            pos === pick.pos && !simTeam.rows[i]?.player_id
        );
        if (rowIndex === -1) {
            const anyRowIndex = POSITIONS.findIndex((pos) => pos === pick.pos);
            if (anyRowIndex === -1) return;
            setDraftPopup({ teamId: simTeamId, rowIndex: anyRowIndex, pos: pick.pos, playerName: pick.player, playerId: pick.player_id, price: pick.price || "", originalPlayerId: simTeam.rows[anyRowIndex]?.player_id || null });
            return;
        }
        setDraftPopup({ teamId: simTeamId, rowIndex, pos: pick.pos, playerName: pick.player, playerId: pick.player_id, price: pick.price || "", originalPlayerId: null });
    };


    return (
        <div className="home home-padded">
            <div className="db-mode-banner">YOU ARE IN LIVE DRAFT MODE!</div>

            <div className={`pick-banner ${pickBannerVisible ? "pick-banner--visible" : ""}`}>
                {pickBanner && (
                    <>
                        <span className="pick-banner-team">{pickBanner.teamName}</span>
                        {" drafted "}
                        <span className="pick-banner-player">{pickBanner.playerName}</span>
                        {" as "}
                        <span className="pick-banner-pos">{pickBanner.position}</span>
                    </>
                )}
            </div>

            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.title || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {league?.format} • {teams.length} TEAMS • {league?.season} SEASON
                        </div>
                    </div>
                </div>
                <div className="db-header-right">
                    <div className="db-stat"><span className="db-stat-num">{teams.length}</span><span className="db-stat-label">Teams</span></div>
                    <div className="db-stat"><span className="db-stat-num">{POSITIONS.length}</span><span className="db-stat-label">Positions</span></div>
                    {teams.length > 0 && (
                        <div className="db-stat">
                            <span className={`db-stat-num ${allFilled ? "db-stat-num--complete" : "db-stat-num--incomplete"}`}>
                                {allFilled ? "✓" : emptyCount}
                            </span>
                            <span className="db-stat-label">{allFilled ? "Complete" : "Empty Slots"}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <button className="db-tool-btn db-tool-primary" onClick={addTeam}>+ Add Team</button>
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <>
                            <span className="db-progress-label">Click any player cell to draft · Auto-saves on each pick</span>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>Pre-Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>Simulation</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("taxi")}>Taxi Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("minor")}>Minor League</button>

                            <button
                                className="db-tool-btn db-tool-secondary"
                                disabled={undoStack.length === 0}
                                onClick={handleUndo}
                            >
                                ↶ Undo
                            </button>

                            <button
                                className="db-tool-btn db-tool-secondary"
                                disabled={redoStack.length === 0}
                                onClick={handleRedo}
                            >
                                ↷ Redo
                            </button>

                            <div className="tooltip-wrap tooltip-bottom" data-tip={allFilled ? "Finalize and view draft summary" : `${emptyCount} slot${emptyCount !== 1 ? "s" : ""} still need to be filled`}>
                                <button
                                    className={`db-tool-btn ${allFilled ? "end-draft-btn--active" : "end-draft-btn--disabled"}`}
                                    disabled={!allFilled}
                                    onClick={() => allFilled && setEndDraftConfirm(true)}
                                >🏁 End Draft</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="ld-layout">
                <div className="ld-main">
                    <div className="db-table-wrap" style={{ width: "100%", margin: 0 }}>
                        {teams.length === 0 ? (
                            <div className="db-empty">
                                <div className="db-empty-icon">📋</div>
                                <div className="db-empty-title">No teams yet</div>
                                <div className="db-empty-sub">Click "+ Add Team" to get started</div>
                            </div>
                        ) : (
                            <div className="db-scroll">
                                <table className="db-table">
                                    <thead>
                                        <tr>
                                            <th className="db-th db-th-pos db-sticky-col" rowSpan={2}>POS</th>
                                            {teams.map(team => (
                                                <th key={team.id} className={`db-th db-th-teamname ${team.id === simTeamId ? "db-th-simteam" : ""}`} colSpan={3}>
                                                    <div className="db-th-team-inner">
                                                        {editingTeamId === team.id ? (
                                                            <input ref={teamInputRef} className="db-team-input" value={editTeamValue}
                                                                onChange={e => setEditTeamValue(e.target.value)}
                                                                onBlur={commitTeamEdit} onKeyDown={handleTeamKeyDown} />
                                                        ) : (
                                                            <span className="db-team-name" onClick={() => startEditTeam(team)} title="Click to rename">
                                                                {team.name}
                                                                {team.id === simTeamId && <span className="ld-your-team-badge">YOU</span>}
                                                            </span>
                                                        )}
                                                        <button className="db-remove-team"
                                                            onClick={() => setTeamDeleteTarget({ id: team.id, name: team.name })}
                                                            title="Remove team">×</button>
                                                    </div>
                                                    {league.draftSettings.budget != null && (
                                                        <div className="db-team-budget">${remainingBudgets[team.id]?.toFixed(0)} left</div>
                                                    )}
                                                </th>
                                            ))}
                                        </tr>
                                        <tr>
                                            {teams.map(team => (
                                                <React.Fragment key={team.id}>
                                                    <th className="db-th db-th-sub">PLAYER</th>
                                                    <th className="db-th db-th-sub db-th-narrow">SEASON</th>
                                                    <th className="db-th db-th-sub db-th-narrow">PRICE</th>
                                                </React.Fragment>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {POSITIONS.map((pos, rowIndex) => (
                                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}>
                                                <td className="db-td db-td-pos db-sticky-col db-td-draftable"
                                                    onClick={() => setSelectedPosition(pos)}>
                                                    <div className="tooltip-wrap" data-tip="Click to view available players">{pos}</div>
                                                </td>

                                                {teams.map(team => {
                                                    const row = team.rows[rowIndex];
                                                    const isKeeper = row.player_id && !row.draft_time;
                                                    return (
                                                        <React.Fragment key={`${team.id}-${rowIndex}`}>
                                                            <td
                                                                className={[
                                                                    "db-td db-td-pick",
                                                                    row.player ? "db-td-filled" : "",
                                                                    isKeeper ? "db-td-keeper" : "db-td-draftable"
                                                                ].join(" ")}
                                                                onClick={() => {
                                                                    if (isKeeper) return;
                                                                    setDraftPopup({
                                                                        teamId: team.id, rowIndex, pos,
                                                                        playerName: row.player || "",
                                                                        playerId: row.player_id || null,
                                                                        price: row.price || "",
                                                                        originalPlayerId: row.player_id || null
                                                                    });
                                                                }}
                                                            >
                                                                {/* ── Filled player cell with detail button ── */}
                                                                {row.player ? (
                                                                    <span className="db-cell-value db-cell-has-player">
                                                                        <span className="db-cell-name">{row.player}</span>
                                                                        <button
                                                                            className="db-cell-detail-btn"
                                                                            onClick={(e) => openProfile(e, row.player_id)}
                                                                            title="View player profile"
                                                                        >
                                                                            Details
                                                                        </button>
                                                                    </span>
                                                                ) : (
                                                                    <span className="db-cell-value">
                                                                        <span className="db-cell-empty">—</span>
                                                                    </span>
                                                                )}
                                                            </td>

                                                            <td className={["db-td db-td-pick db-td-narrow", row.season ? "db-td-filled" : "", isKeeper ? "db-td-keeper" : ""].join(" ")}>
                                                                <span className="db-cell-value">{row.season || <span className="db-cell-empty">—</span>}</span>
                                                            </td>
                                                            <td className={["db-td db-td-pick db-td-narrow", row.price ? "db-td-filled" : "", isKeeper ? "db-td-keeper" : ""].join(" ")}>
                                                                <span className="db-cell-value">{row.price || <span className="db-cell-empty">—</span>}</span>
                                                            </td>
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="ld-sidebar">
                    {simPicks.length > 0 && (
                        <div className="ld-targets-section">
                            <button className="ld-targets-header" onClick={() => setTargetsOpen(p => !p)}>
                                <span>🎯 Your Targets <span className="ld-targets-count">{availableSimPicks.length} left</span></span>
                                <span className="ld-targets-toggle">{targetsOpen ? "▲" : "▼"}</span>
                            </button>
                            {targetsOpen && (
                                <div className="ld-targets-body">
                                    {simPicks.map((pick, i) => {
                                        const isDrafted = draftedIds.has(pick.player_id);
                                        return (
                                            <div
                                                key={i}
                                                className={`ld-target-row ${isDrafted ? "ld-target-row--done" : "ld-target-row--available"}`}
                                                onClick={() => !isDrafted && handleTargetClick(pick)}
                                            >
                                                <span className="ld-target-pos">{pick.pos}</span>
                                                <span className="ld-target-name">{pick.player}</span>
                                                {isDrafted
                                                    ? <span className="ld-target-check">✓</span>
                                                    : pick.price
                                                        ? <span className="ld-target-price">${pick.price}</span>
                                                        : <span className="ld-target-click-hint">click</span>
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="ld-sidebar-header">📋 Draft Log</div>
                    <div className="ld-sidebar-body">
                        {draftLog.length === 0 ? (
                            <div className="ld-sidebar-empty">No picks yet. Picks will appear here as they are made.</div>
                        ) : (
                            draftLog.map(entry => (
                                <div key={entry.id} className="ld-log-entry">
                                    <div className="ld-log-team">{entry.teamName}</div>
                                    <div className="ld-log-pick">drafted <span className="ld-log-player">{entry.playerName}</span></div>
                                    <div className="ld-log-meta">{entry.position}{entry.price ? ` • $${entry.price}` : ""}{" • "}{entry.timestamp}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Draft popup */}
            {draftPopup && (
                <div className="draft-popup-backdrop" onClick={() => { setDraftPopup(null); setSuggestions([]); }}>
                    <div className="draft-popup" onClick={e => e.stopPropagation()}>
                        <div className="draft-popup-title">
                            Draft Player — <span className="ds-top-pick-pos">{draftPopup.pos}</span>
                            <span className="ld-popup-team-label">{teams.find(t => t.id === draftPopup.teamId)?.name}</span>
                        </div>
                        <div className="db-suggestions-wrap">
                            <input
                                ref={popupPlayerRef}
                                className="draft-popup-input"
                                placeholder="Search player…"
                                value={draftPopup.playerName}
                                onChange={e => {
                                    const val = e.target.value;
                                    const q = val.toLowerCase();
                                    setDraftPopup(prev => ({ ...prev, playerName: val, playerId: null }));
                                    setSuggestions(
                                        q.length < 2 ? [] :
                                            allPlayers
                                                .filter(p => playerMatchesRowPosition(p, draftPopup.pos))
                                                .filter(p => {
                                                    const div = league.playerSettings?.division;
                                                    if (div && div !== "MIXED") return p.realLeague === div;
                                                    return true;
                                                })
                                                .filter(p => p.status !== "MINORS")
                                                .filter(p => getPlayerName(p).includes(q))
                                                .filter(p => !draftedIds.has(p.id) || p.id === draftPopup.originalPlayerId)
                                                .slice(0, 8)
                                    );
                                }}
                            />
                            {draftPopup.price && parseFloat(draftPopup.price) > (remainingBudgets[draftPopup.teamId] ?? 0) && (
                                <div className="ld-budget-warning">Exceeds remaining budget (${remainingBudgets[draftPopup.teamId]?.toFixed(0)})</div>
                            )}
                            {suggestions.length > 0 && (
                                <ul className="db-suggestions">
                                    {suggestions.map(p => (
                                        <li key={p.id} className="db-suggestion-item"
                                            onMouseDown={() => {
                                                setDraftPopup(prev => ({ ...prev, playerName: getPlayerDisplayName(p), playerId: p.id }));
                                                setSuggestions([]);
                                            }}
                                        >
                                            {getPlayerDisplayName(p)}
                                            <span className="db-suggestion-pos"> {p.playablePositions?.join(", ")}</span>
                                            <span className="db-suggestion-season"> {league.season}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <input
                            className="draft-popup-input"
                            placeholder="Price (e.g. 25)"
                            type="number" min="1"
                            value={draftPopup.price}
                            onChange={e => setDraftPopup(prev => ({ ...prev, price: e.target.value }))}
                        />
                        <div className="draft-popup-actions">
                            <button className="db-tool-btn db-tool-secondary"
                                onClick={() => { setDraftPopup(null); setSuggestions([]); }}>Cancel</button>
                            <button
                                className="db-tool-btn db-tool-primary"
                                disabled={!draftPopup.playerId || !draftPopup.price || parseFloat(draftPopup.price) > (remainingBudgets[draftPopup.teamId] ?? 0)}
                                onClick={confirmDraftPopup}
                            >✓ Draft</button>
                        </div>
                    </div>
                </div>
            )}

            {endDraftConfirm && (
                <div className="draft-popup-backdrop" onClick={() => setEndDraftConfirm(false)}>
                    <div className="draft-popup draft-popup--sm" onClick={e => e.stopPropagation()}>
                        <div className="draft-popup-title">🏁 End Draft?</div>
                        <p className="end-draft-confirm-text">
                            All {teams.length} teams and {teams.length * POSITIONS.length} roster slots are filled.
                            This will finalize your draft picks and take you to <strong style={{ color: "#7a9fff" }}>Taxi Draft</strong> — where you can assign minor league call-ups before viewing your full draft summary.
                        </p>
                        <div className="draft-popup-actions">
                            <button className="db-tool-btn db-tool-secondary" onClick={() => setEndDraftConfirm(false)} disabled={endingDraft}>Keep Drafting</button>
                            <button className="db-tool-btn end-draft-finalize-btn" onClick={handleEndDraft} disabled={endingDraft}>
                                {endingDraft ? "Saving…" : "✓ Finalize Draft"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ConfirmDeleteModal
                isOpen={!!teamDeleteTarget}
                leagueName={teamDeleteTarget?.name || ""}
                onCancel={() => setTeamDeleteTarget(null)}
                onConfirm={async () => {
                    try { await removeTeam(teamDeleteTarget.id); setTeamDeleteTarget(null); }
                    catch (err) { console.error("Failed to delete team:", err); alert("Error deleting team."); }
                }}
            />

            <PositionPlayersModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition}
                players={allPlayers.filter(p => playerMatchesRowPosition(p, selectedPosition ?? ""))
                    .filter(p => {
                        const div = league.playerSettings?.division;
                        if (div && div !== "MIXED") return p.realLeague === div;
                        return true;
                    })
                    .filter(p => p.status !== "MINORS")}
                draftedIds={draftedIds}
                league={league}
            />

            {/* Player Profile slide-in */}
            <PlayerProfileModal
                isOpen={!!profilePlayer}
                onClose={() => setProfilePlayer(null)}
                player={profilePlayer}
            />
        </div>
    );
}