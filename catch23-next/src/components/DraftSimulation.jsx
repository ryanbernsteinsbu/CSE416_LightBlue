'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { getLeagueTeams, getAllPlayers, getTeamDraftPicks } from "../lib/api";
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

const positionToEnum = (pos, index, POSITIONS) => {
    const counts = {};
    for (let i = 0; i <= index; i++) {
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
        MI: "MIDDLE_INFIELD",
        CI: "CORNER_INFIELD",
        OF: `OUTFIELD_${n}`,
        U: "UTILITY",
        P: `PITCHER_${n}`,
    };
    return map[pos] || pos;
};

const getPlayerDisplayName = (p) => `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
const getPlayerName = (p) => getPlayerDisplayName(p).toLowerCase();

// localStorage keys
const simPicksKey  = (id) => `sim_picks_${id}`;
const simTeamIdKey = (id) => `sim_team_${id}`;

// Maps raw player from allPlayers into the shape PlayerProfileModal expects
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

export default function DraftSimulation({ league, onBack, onModeChange }) {
    const POSITIONS = buildPositions(league.rosterSettings);

    // team identity
    const [simTeamId,     setSimTeamId]     = useState(null);
    const [teamName,      setTeamName]      = useState("My Team");
    const [editingName,   setEditingName]   = useState(false);
    const [editNameValue, setEditNameValue] = useState("");

    // rows: one per position slot
    const emptyRows = () => POSITIONS.map(() => ({
        player: "", player_id: null, season: "", price: "", isKeeper: false
    }));
    const [rows, setRows] = useState(emptyRows);

    // players / autocomplete
    const [allPlayers,  setAllPlayers]  = useState([]);
    const [editingCell, setEditingCell] = useState(null); // { rowIndex, field }
    const [editValue,   setEditValue]   = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // ui state
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [saveBanner,  setSaveBanner]  = useState(false);
    const [errorMsg,    setErrorMsg]    = useState(null);
    const [budgetError, setBudgetError] = useState(null);
    const [loading,     setLoading]     = useState(true);
    const [profilePlayer, setProfilePlayer] = useState(null); // PlayerProfileModal

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);

    const draftedIds = useMemo(() =>
        new Set(rows.map(r => r.player_id).filter(Boolean))
    , [rows]);

    const totalSpent = useMemo(() =>
        rows.reduce((s, r) => s + (parseFloat(r.price) || 0), 0)
    , [rows]);

    const remainingBudget = useMemo(() =>
        (league.draftSettings?.budget ?? 0) - totalSpent
    , [totalSpent, league.draftSettings?.budget]);

    const keeperRows = useMemo(() =>
        rows.map((r, i) => ({ ...r, pos: POSITIONS[i] })).filter(r => r.isKeeper)
    , [rows]);

    const targetRows = useMemo(() =>
        rows.map((r, i) => ({ ...r, pos: POSITIONS[i] })).filter(r => r.player_id && !r.isKeeper)
    , [rows]);

    const emptySlots = useMemo(() =>
        POSITIONS.filter((_, i) => !rows[i]?.player_id)
    , [rows]);

    // open profile

    const openProfile = (e, playerId) => {
        e.stopPropagation();
        const found = allPlayers.find(p => p.id === playerId);
        if (found) setProfilePlayer(toProfilePlayer(found));
    };


    useEffect(() => {
        const init = async () => {
            try {
                const { data: teams } = await getLeagueTeams(league.id);

                const storedId   = typeof window !== "undefined" ? localStorage.getItem(simTeamIdKey(league.id)) : null;
                const targetTeam = (storedId ? teams.find(t => String(t.id) === storedId) : null) ?? teams[0];

                if (!targetTeam) { setLoading(false); return; }

                const teamId = Number(targetTeam.id);
                setSimTeamId(teamId);
                if (typeof window !== "undefined") localStorage.setItem(simTeamIdKey(league.id), String(teamId));

                const { data: picks } = await getTeamDraftPicks(targetTeam.id);
                const newRows = emptyRows();

                picks.forEach(pick => {
                    if (!pick.draft_time && pick.player_id) {
                        const rowIndex = POSITIONS.findIndex((pos, idx) =>
                            positionToEnum(pos, idx, POSITIONS) === pick.rosterPosition
                        );
                        if (rowIndex !== -1) {
                            newRows[rowIndex] = {
                                player: pick.player
                                    ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                    : "",
                                player_id: pick.player_id,
                                season:    pick.season ?? "",
                                price:     pick.cost   ?? "",
                                isKeeper:  true
                            };
                        }
                    }
                });

                let storedPayload = null;
                if (typeof window !== "undefined") {
                    try { storedPayload = JSON.parse(localStorage.getItem(simPicksKey(league.id)) ?? "null"); } catch {}
                }

                if (storedPayload) {
                    setTeamName(storedPayload.teamName || targetTeam.name);
                    (storedPayload.picks ?? []).forEach(pick => {
                        const ri = pick.rowIndex;
                        if (ri >= 0 && ri < newRows.length && !newRows[ri].isKeeper) {
                            newRows[ri] = {
                                player:    pick.player    ?? "",
                                player_id: pick.player_id ?? null,
                                season:    pick.season    ?? league.season,
                                price:     pick.price     ?? "",
                                isKeeper:  false
                            };
                        }
                    });
                } else {
                    setTeamName(targetTeam.name);
                }

                setRows(newRows);
            } catch (err) {
                console.error("Failed to load simulation:", err);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, [league.id]);

    useEffect(() => {
        getAllPlayers()
            .then(({ data }) => setAllPlayers(data))
            .catch(err => console.error("Failed to load players:", err));
    }, []);

    // save

    const handleSave = () => {
        const missingPrice = rows.some(r => r.player_id && !r.isKeeper && !r.price);
        if (missingPrice) {
            setErrorMsg("Please add a price for every planned pick.");
            setTimeout(() => setErrorMsg(null), 3500);
            return;
        }

        if (league.draftSettings?.budget != null && totalSpent > league.draftSettings.budget) {
            setBudgetError({ spent: totalSpent, budget: league.draftSettings.budget });
            setTimeout(() => setBudgetError(null), 4000);
            return;
        }

        const simPicks = rows
            .map((row, i) => ({ ...row, pos: POSITIONS[i], rowIndex: i }))
            .filter(r => r.player_id && !r.isKeeper);

        const payload = { teamName, picks: simPicks };
        if (typeof window !== "undefined") {
            localStorage.setItem(simPicksKey(league.id), JSON.stringify(payload));
            if (simTeamId) localStorage.setItem(simTeamIdKey(league.id), String(simTeamId));
        }

        setSaveBanner(true);
        setTimeout(() => setSaveBanner(false), 3000);
    };

    // team name editing

    const startEditName = () => {
        setEditingName(true);
        setEditNameValue(teamName);
        setTimeout(() => teamInputRef.current?.focus(), 0);
    };

    const commitNameEdit = () => {
        setTeamName(editNameValue.trim() || teamName);
        setEditingName(false);
    };

    const handleNameKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitNameEdit(); }
        if (e.key === "Escape") setEditingName(false);
    };

    // cell editing

    const startEditCell = (rowIndex, field, currentValue) => {
        setEditingCell({ rowIndex, field });
        setEditValue(currentValue);
        setTimeout(() => cellInputRef.current?.focus(), 0);
    };

    const commitCellEdit = () => {
        if (!editingCell) return;
        const { rowIndex, field } = editingCell;

        setRows(prev => prev.map((row, i) => {
            if (i !== rowIndex) return row;
            if (field === "player") {
                if (editValue.trim().toLowerCase() === row.player.toLowerCase()) return row;
                const matched = allPlayers.find(p => getPlayerName(p) === editValue.trim().toLowerCase());
                const isValid = matched && !draftedIds.has(matched.id);
                return {
                    ...row,
                    player:    isValid ? getPlayerDisplayName(matched) : "",
                    player_id: isValid ? matched.id : null,
                    season:    isValid ? league.season : ""
                };
            }
            return { ...row, [field]: editValue };
        }));

        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };

    const handleCellKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitCellEdit(); }
        if (e.key === "Escape") { setEditingCell(null); setEditValue(""); setSuggestions([]); }
    };

    const isEditing = (rowIndex, field) =>
        editingCell?.rowIndex === rowIndex && editingCell?.field === field;

    // render

    if (loading) {
        return (
            <div className="home home-padded" style={{ color: "white", textAlign: "center", paddingTop: 120, fontSize: 20 }}>
                Loading simulation…
            </div>
        );
    }

    const budgetPct = league.draftSettings?.budget
        ? Math.min(100, (totalSpent / league.draftSettings.budget) * 100)
        : 0;

    return (
        <div className="home home-padded">
            {/* Mode banner */}
            <div className="db-mode-banner">DRAFT SIMULATION MODE</div>

            {/* Banners */}
            <div className={`save-banner ${saveBanner ? "save-banner--visible" : ""}`}>
                ✅ Simulation saved! Head to Live Draft when ready.
            </div>
            <div className={`save-banner save-banner-error ${errorMsg ? "save-banner--visible" : ""}`}>
                ❌ {errorMsg}
            </div>
            <div className={`save-banner save-banner-error ${budgetError ? "save-banner--visible" : ""}`}>
                ❌ Over budget — spent ${budgetError?.spent.toFixed(0)} of ${budgetError?.budget}
            </div>

            {/* Header */}
            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.title || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {league?.format} • SIMULATION • {league?.season} SEASON
                        </div>
                    </div>
                </div>
                <div className="db-header-right">
                    <div className="db-stat">
                        <span className="db-stat-num">{targetRows.length}</span>
                        <span className="db-stat-label">Targets</span>
                    </div>
                    <div className="db-stat">
                        <span className="db-stat-num">{emptySlots.length}</span>
                        <span className="db-stat-label">Open</span>
                    </div>
                    {league.draftSettings?.budget != null && (
                        <div className="db-stat">
                            <span className={`db-stat-num ${remainingBudget < 0 ? "db-stat-num--incomplete" : "db-stat-num--complete"}`}>
                                ${remainingBudget.toFixed(0)}
                            </span>
                            <span className="db-stat-label">Remaining</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Toolbar */}
            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <span className="db-progress-label">
                        Plan your auction targets · Keepers shown in blue · Click any cell to edit
                    </span>
                </div>
                <div className="db-toolbar-right">
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>Pre-Draft</button>
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>Live Draft</button>
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("taxi")}>Taxi Draft</button>
                    <button className="db-tool-btn db-tool-primary"   onClick={handleSave}>💾 Save Simulation</button>
                </div>
            </div>

            {/* Main layout: table + sidebar */}
            <div className="sim-layout">

                {/* ── Roster table ── */}
                <div className="sim-main">
                    <div className="db-scroll">
                        <table className="db-table">
                            <thead>
                                <tr>
                                    <th className="db-th db-th-pos db-sticky-col" rowSpan={2}>POS</th>
                                    <th className="db-th db-th-teamname sim-th-teamname" colSpan={3}>
                                        <div className="db-th-team-inner">
                                            {editingName ? (
                                                <input
                                                    ref={teamInputRef}
                                                    className="db-team-input"
                                                    value={editNameValue}
                                                    onChange={e => setEditNameValue(e.target.value)}
                                                    onBlur={commitNameEdit}
                                                    onKeyDown={handleNameKeyDown}
                                                />
                                            ) : (
                                                <span className="db-team-name" onClick={startEditName} title="Click to rename">
                                                    {teamName}
                                                </span>
                                            )}
                                        </div>
                                        {league.draftSettings?.budget != null && (
                                            <div className="db-team-budget">${remainingBudget.toFixed(0)} left</div>
                                        )}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="db-th db-th-sub">PLAYER</th>
                                    <th className="db-th db-th-sub db-th-narrow">SEASON</th>
                                    <th className="db-th db-th-sub db-th-narrow">PRICE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {POSITIONS.map((pos, rowIndex) => {
                                    const row = rows[rowIndex];
                                    const isKeeper = row.isKeeper;

                                    return (
                                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}>

                                            {/* Position label */}
                                            <td
                                                className="db-td db-td-pos db-sticky-col db-td-draftable"
                                                onClick={() => setSelectedPosition(pos)}
                                            >
                                                <div className="tooltip-wrap" data-tip="Click to view available players">{pos}</div>
                                            </td>

                                            {/* Player */}
                                            <td
                                                className={[
                                                    "db-td db-td-pick",
                                                    isKeeper ? "db-td-keeper" : "db-td-draftable",
                                                    isEditing(rowIndex, "player") ? "db-td-editing" : "",
                                                    row.player ? "db-td-filled" : ""
                                                ].join(" ")}
                                                onClick={() => {
                                                    if (isKeeper) return;
                                                    if (!isEditing(rowIndex, "player")) startEditCell(rowIndex, "player", row.player);
                                                }}
                                            >
                                                {isEditing(rowIndex, "player") ? (
                                                    <div style={{ position: "relative" }}>
                                                        <input
                                                            ref={cellInputRef}
                                                            className="db-cell-input"
                                                            value={editValue}
                                                            onChange={e => {
                                                                const q = e.target.value.toLowerCase();
                                                                setEditValue(e.target.value);
                                                                setSuggestions(
                                                                    q.length < 2 ? [] :
                                                                        allPlayers
                                                                            .filter(p => playerMatchesRowPosition(p, pos))
                                                                            .filter(p => getPlayerName(p).includes(q))
                                                                            .filter(p => !draftedIds.has(p.id))
                                                                            .slice(0, 8)
                                                                );
                                                            }}
                                                            onBlur={commitCellEdit}
                                                            onKeyDown={handleCellKeyDown}
                                                        />
                                                        {suggestions.length > 0 && (
                                                            <ul className="db-suggestions">
                                                                {suggestions.map(p => (
                                                                    <li
                                                                        key={p.id}
                                                                        className="db-suggestion-item"
                                                                        onMouseDown={e => {
                                                                            e.preventDefault();
                                                                            setRows(prev => prev.map((r, i) =>
                                                                                i === rowIndex
                                                                                    ? { ...r, player: getPlayerDisplayName(p), player_id: p.id, season: league.season }
                                                                                    : r
                                                                            ));
                                                                            setEditingCell(null);
                                                                            setEditValue("");
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
                                                ) : (
                                                    // ── Filled player cell with detail button ──
                                                    row.player ? (
                                                        <span className="db-cell-value db-cell-has-player">
                                                            <span className="db-cell-name">
                                                                {row.player}
                                                                {isKeeper && <span className="sim-keeper-badge">KEEPER</span>}
                                                            </span>
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
                                                    )
                                                )}
                                            </td>

                                            {/* Season */}
                                            <td
                                                className={[
                                                    "db-td db-td-pick db-td-narrow",
                                                    isKeeper ? "db-td-keeper" : "",
                                                    isEditing(rowIndex, "season") ? "db-td-editing" : "",
                                                    row.season ? "db-td-filled" : ""
                                                ].join(" ")}
                                                onClick={() => {
                                                    if (isKeeper) return;
                                                    if (!isEditing(rowIndex, "season")) startEditCell(rowIndex, "season", row.season);
                                                }}
                                            >
                                                {isEditing(rowIndex, "season") ? (
                                                    <input ref={cellInputRef} className="db-cell-input" value={editValue}
                                                        onChange={e => setEditValue(e.target.value)}
                                                        onBlur={commitCellEdit} onKeyDown={handleCellKeyDown} />
                                                ) : (
                                                    <span className="db-cell-value">{row.season || <span className="db-cell-empty">—</span>}</span>
                                                )}
                                            </td>

                                            {/* Price */}
                                            <td
                                                className={[
                                                    "db-td db-td-pick db-td-narrow",
                                                    isKeeper ? "db-td-keeper" : "",
                                                    isEditing(rowIndex, "price") ? "db-td-editing" : "",
                                                    row.price ? "db-td-filled" : ""
                                                ].join(" ")}
                                                onClick={() => {
                                                    if (isKeeper) return;
                                                    if (!isEditing(rowIndex, "price")) startEditCell(rowIndex, "price", row.price);
                                                }}
                                            >
                                                {isEditing(rowIndex, "price") ? (
                                                    <input ref={cellInputRef} className="db-cell-input" value={editValue}
                                                        onChange={e => setEditValue(e.target.value)}
                                                        onBlur={commitCellEdit} onKeyDown={handleCellKeyDown} />
                                                ) : (
                                                    <span className="db-cell-value">{row.price || <span className="db-cell-empty">—</span>}</span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── Summary sidebar ── */}
                <div className="sim-sidebar">
                    <div className="sim-sidebar-header">🎯 Simulation Summary</div>
                    <div className="sim-sidebar-body">

                        {/* Budget bar */}
                        {league.draftSettings?.budget != null && (
                            <div className="sim-section">
                                <div className="sim-section-title">Budget</div>
                                <div className="sim-budget-numbers">
                                    <span className="sim-budget-spent">${totalSpent.toFixed(0)}</span>
                                    <span className="sim-budget-sep"> / </span>
                                    <span className="sim-budget-total">${league.draftSettings.budget}</span>
                                </div>
                                <div className="sim-budget-bar">
                                    <div
                                        className="sim-budget-bar-fill"
                                        style={{
                                            width: `${budgetPct}%`,
                                            background: remainingBudget < 0 ? "#ff4d4f" : "#52c41a"
                                        }}
                                    />
                                </div>
                                <div className="sim-budget-remaining" style={{ color: remainingBudget < 0 ? "#ff4d4f" : "#52c41a" }}>
                                    ${remainingBudget.toFixed(0)} remaining
                                </div>
                            </div>
                        )}

                        {/* Keepers */}
                        {keeperRows.length > 0 && (
                            <div className="sim-section">
                                <div className="sim-section-title">🔒 Keepers ({keeperRows.length})</div>
                                {keeperRows.map((r, i) => (
                                    <div key={i} className="sim-pick-row sim-pick-row--keeper">
                                        <span className="sim-pick-pos">{r.pos}</span>
                                        <span className="sim-pick-name">{r.player}</span>
                                        {r.price && <span className="sim-pick-price">${r.price}</span>}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Targets */}
                        <div className="sim-section">
                            <div className="sim-section-title">
                                🎯 Targets ({targetRows.length}/{POSITIONS.length - keeperRows.length} filled)
                            </div>
                            {targetRows.length === 0 ? (
                                <div className="sim-empty-msg">
                                    Start typing in a player cell to build your draft plan.
                                </div>
                            ) : (
                                targetRows.map((r, i) => (
                                    <div key={i} className="sim-pick-row">
                                        <span className="sim-pick-pos">{r.pos}</span>
                                        <span className="sim-pick-name">{r.player}</span>
                                        {r.price && <span className="sim-pick-price">${r.price}</span>}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Open slots */}
                        {emptySlots.length > 0 && (
                            <div className="sim-section">
                                <div className="sim-section-title">⚪ Unfilled ({emptySlots.length})</div>
                                <div className="sim-slots-wrap">
                                    {emptySlots.map((pos, i) => (
                                        <span key={i} className="sim-slot-chip">{pos}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tip */}
                        <div className="sim-tip">
                            💡 <strong>Save</strong> your simulation, then click <strong>Live Draft</strong> — your targets appear as one-click recommendations during the auction.
                        </div>
                    </div>
                </div>
            </div>

            {/* Position Players Modal */}
            <PositionPlayersModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition}
                players={allPlayers.filter(p => playerMatchesRowPosition(p, selectedPosition ?? ""))}
                draftedIds={draftedIds}
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