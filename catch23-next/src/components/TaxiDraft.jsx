'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers, saveTaxiPicks, getTeamTaxiPicks, getTeamDraftPicks } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { PlayerProfileModal } from "./PlayerProfileModal";

// ─── helpers ──────────────────────────────────────────────────────────────────

const getPlayerDisplayName = (p) => `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
const getPlayerName        = (p) => getPlayerDisplayName(p).toLowerCase();

const toProfilePlayer = (p) => ({
    id:       p.id,
    username: getPlayerDisplayName(p),
    team:     p.team ?? p.mlbTeam ?? p.teamAbbreviation ?? "",
    role:     Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : (p.position ?? ""),
    stats:    p.stats ?? {
        HR:   p.HR   ?? p.homeRuns,
        RBI:  p.RBI,
        SB:   p.SB   ?? p.stolenBases,
        R:    p.R    ?? p.runs,
        AVG:  p.AVG  ?? p.battingAverage,
        OBP:  p.OBP,
        W:    p.W    ?? p.wins,
        SV:   p.SV   ?? p.saves,
        K:    p.K    ?? p.strikeouts,
        ERA:  p.ERA,
        WHIP: p.WHIP,
    },
});

function makeEmptyTeam(index, numSlots) {
    return {
        id:   crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: Array.from({ length: numSlots }, () => ({
            player: "", player_id: null, season: "", price: ""
        })),
    };
}

// ─── component ────────────────────────────────────────────────────────────────

export default function TaxiDraftBoard({ league, onBack, onModeChange }) {
    const NUM_SLOTS = league.rosterSettings?.numTaxi ?? 8;

    // core state
    const [teams,          setTeams]          = useState([]);
    const [mainRosterIds,  setMainRosterIds]  = useState(new Set());

    // editing
    const [editingCell,   setEditingCell]   = useState(null); // { teamId, rowIndex, field }
    const [editValue,     setEditValue]     = useState("");
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");

    // players
    const [allPlayers,  setAllPlayers]  = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    // ui
    const [teamDeleteTarget, setTeamDeleteTarget] = useState(null);
    const [saveBanner,       setSaveBanner]       = useState(false);
    const [errorBanner,      setErrorBanner]      = useState(false);
    const [seasonErrorBanner, setSeasonErrorBanner] = useState(false);
    const [profilePlayer,    setProfilePlayer]    = useState(null);

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);

    // every player_id currently assigned to any taxi slot OR on any main roster
    const draftedIds = useMemo(() =>
        new Set([
            ...mainRosterIds,
            ...teams.flatMap(t => t.rows.map(r => r.player_id).filter(Boolean))
        ])
    , [teams, mainRosterIds]);

    // ── data loading ──────────────────────────────────────────────────────────

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);
                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = Array.from({ length: NUM_SLOTS }, () => ({
                            player: "", player_id: null, season: "", price: ""
                        }));
                        try {
                            const { data: picks } = await getTeamTaxiPicks(t.id);
                            picks.forEach((pick) => {
                                const idx = pick.slot - 1;
                                if (idx >= 0 && idx < NUM_SLOTS) {
                                    emptyRows[idx] = {
                                        player:    pick.player
                                            ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                            : "",
                                        player_id: pick.player_id,
                                        season:    pick.season ?? "",
                                        price: pick.cost != null ? String(parseFloat(pick.cost)) : "",
                                    };
                                }
                            });
                        } catch {
                            // no picks yet — fine
                        }
                        return { id: Number(t.id), name: t.name, rows: emptyRows };
                    })
                );
                setTeams(loaded);

                // collect all player_ids from the main draft so they
                // can't be added to taxi rosters
                const allMainIds = new Set();
                await Promise.all(
                    data.map(async (t) => {
                        try {
                            const { data: draftPicks } = await getTeamDraftPicks(t.id);
                            draftPicks.forEach(p => {
                                if (p.player_id) allMainIds.add(p.player_id);
                            });
                        } catch {}
                    })
                );
                setMainRosterIds(allMainIds);
            } catch (err) {
                console.error("Failed to load teams/taxi picks:", err);
            }
        };
        fetchTeams();
    }, [league.id]);

    useEffect(() => {
        getAllPlayers()
            .then(({ data }) => setAllPlayers(data))
            .catch(err => console.error("Failed to load players:", err));
    }, []);

    // ── save ──────────────────────────────────────────────────────────────────

    const handleSave = async () => {
        const missingseason = teams.some(team =>
        team.rows.some(row => row.player_id && !row.season));
        if (missingseason) {
            setSeasonErrorBanner(true);
            setTimeout(() => setSeasonErrorBanner(false), 3000);
            return;
        }

        const picks = [];
        teams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (!row.player_id) return;
                picks.push({
                    slot:      i + 1,
                    team_id:   team.id,
                    player_id: row.player_id,
                    season:    row.season || league.season,
                    cost:      parseFloat(row.price) || 1,
                });
            });
        });

        try {
            await saveTaxiPicks({ picks, teamIds: teams.map(t => t.id) });
            setSaveBanner(true);
            setTimeout(() => setSaveBanner(false), 3000);
        } catch (err) {
            console.error("Failed to save taxi picks:", err);
            setErrorBanner(true);
            setTimeout(() => setErrorBanner(false), 3000);
        }
    };

    // ── team management ───────────────────────────────────────────────────────

    const addTeam = async () => {
        const newTeam = makeEmptyTeam(teams.length, NUM_SLOTS);
        try {
            const { data } = await createTeam(newTeam.name, league.id);
            newTeam.id = Number(data.id);
            setTeams(prev => [...prev, newTeam]);
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
        setTeams(prev => prev.filter(t => t.id !== teamId));
    };

    const startEditTeam = (team) => {
        setEditingTeamId(team.id);
        setEditTeamValue(team.name);
        setTimeout(() => teamInputRef.current?.focus(), 0);
    };

    const commitTeamEdit = () => {
        if (!editingTeamId) return;
        setTeams(prev => prev.map(t =>
            t.id === editingTeamId ? { ...t, name: editTeamValue.trim() || t.name } : t
        ));
        setEditingTeamId(null);
        setEditTeamValue("");
    };

    const handleTeamKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitTeamEdit(); }
        if (e.key === "Escape") { setEditingTeamId(null); setEditTeamValue(""); }
    };

    // ── cell editing ──────────────────────────────────────────────────────────

    const startEditCell = (teamId, rowIndex, field, currentValue) => {
        setEditingCell({ teamId, rowIndex, field });
        setEditValue(currentValue);
        setTimeout(() => cellInputRef.current?.focus(), 0);
    };

    const commitCellEdit = () => {
        if (!editingCell) return;
        const { teamId, rowIndex, field } = editingCell;
        setTeams(prev => prev.map(t => {
            if (t.id !== teamId) return t;
            const newRows = t.rows.map((row, i) => {
                if (i !== rowIndex) return row;
                if (field === "player") {
                    if (editValue.trim().toLowerCase() === row.player.toLowerCase()) return row;
                    const matched = allPlayers.find(p => getPlayerName(p) === editValue.trim().toLowerCase());
                    const isValid = matched && !draftedIds.has(matched.id);
                    return {
                        ...row,
                        player:    isValid ? getPlayerDisplayName(matched) : "",
                        player_id: isValid ? matched.id : null,
                        season:    isValid ? (row.season || league.season) : "",
                        price:     isValid ? (row.price  || "1") : "",
                    };
                }
                return { ...row, [field]: editValue };
            });
            return { ...t, rows: newRows };
        }));
        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };

    const handleCellKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitCellEdit(); }
        if (e.key === "Escape") { setEditingCell(null); setEditValue(""); setSuggestions([]); }
    };

    const isEditing = (teamId, rowIndex, field) =>
        editingCell?.teamId === teamId &&
        editingCell?.rowIndex === rowIndex &&
        editingCell?.field === field;

    // ── suggestion selection ──────────────────────────────────────────────────

    const selectSuggestion = (team, rowIndex, p) => {
        setTeams(prev => prev.map(t => {
            if (t.id !== team.id) return t;
            const newRows = t.rows.map((r, i) =>
                i === rowIndex
                    ? {
                        ...r,
                        player:    getPlayerDisplayName(p),
                        player_id: p.id,
                        season:    r.season || league.season,
                        price:     r.price  || "1",
                    }
                    : r
            );
            return { ...t, rows: newRows };
        }));
        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };

    // ── profile ───────────────────────────────────────────────────────────────

    const openProfile = (e, playerId) => {
        e.stopPropagation();
        const found = allPlayers.find(p => p.id === playerId);
        if (found) setProfilePlayer(toProfilePlayer(found));
    };

    // ── post-draft state ──────────────────────────────────────────────────────

    const isPostDraft = league.status === "DRAFTED";

    const allSlotsFilled = useMemo(() =>
        teams.length > 0 && teams.every(t => t.rows.every(r => r.player_id))
    , [teams]);

    const filledCount = useMemo(() =>
        teams.reduce((sum, t) => sum + t.rows.filter(r => r.player_id).length, 0)
    , [teams]);

    const totalSlots = teams.length * NUM_SLOTS;

    const handleComplete = async () => {
        await handleSave();
        onModeChange("summary");
    };

    // ─────────────────────────────────────────────────────────────────────────

    return (
        <div className="home" style={{ paddingTop: 80 }}>

            <div className="db-mode-banner">
                {isPostDraft ? "COMPLETE YOUR TAXI DRAFT!" : "YOU ARE IN TAXI DRAFT MODE!"}
            </div>

            <div className={`save-banner ${saveBanner ? "save-banner--visible" : ""}`}>
                ✅ Taxi draft saved!
            </div>
            <div className={`save-banner save-banner-error ${errorBanner ? "save-banner--visible" : ""}`}>
                ❌ Failed to save taxi draft.
            </div>
            <div className={`save-banner save-banner-error ${seasonErrorBanner ? "save-banner--visible" : ""}`}>
                ❌ Missing season for one or more players.
            </div>

            {/* post-draft prompt — shown until all slots are filled */}
            {isPostDraft && !allSlotsFilled && (
                <div className="taxi-postdraft-banner" style={{ color: "white" }}>
                    🏁 The live draft is complete. Fill all taxi slots to finish —
                    <strong> {filledCount}/{totalSlots}</strong> filled.
                </div>
            )}

            {/* ── header ── */}
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
                    <div className="db-stat">
                        <span className="db-stat-num">{teams.length}</span>
                        <span className="db-stat-label">Teams</span>
                    </div>
                    <div className="db-stat">
                        <span className="db-stat-num">{NUM_SLOTS}</span>
                        <span className="db-stat-label">Taxi Slots</span>
                    </div>
                    {isPostDraft && (
                        <div className="db-stat">
                            <span className={`db-stat-num ${allSlotsFilled ? "db-stat-num--complete" : "db-stat-num--incomplete"}`}>
                                {allSlotsFilled ? "✓" : `${filledCount}/${totalSlots}`}
                            </span>
                            <span className="db-stat-label">{allSlotsFilled ? "Complete" : "Filled"}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* ── toolbar ── */}
            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    {!isPostDraft && (
                        <button className="db-tool-btn db-tool-primary" onClick={addTeam}>+ Add Team</button>
                    )}
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <>
                            <span className="db-progress-label">
                                Click any cell to edit • Click team name to rename
                            </span>
                            {!isPostDraft && (
                                <>
                                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>Pre-Draft</button>
                                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>Simulation</button>
                                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>Live Draft</button>
                                </>
                            )}
                            <button className="db-tool-btn db-tool-secondary" onClick={handleSave}>💾 Save</button>
                            {isPostDraft && (
                                <div className="tooltip-wrap" data-tip={allSlotsFilled ? "Finalize and view draft summary" : `${totalSlots - filledCount} slot${totalSlots - filledCount !== 1 ? "s" : ""} still need to be filled`}>
                                    <button
                                        className={`db-tool-btn ${allSlotsFilled ? "end-draft-btn--active" : "end-draft-btn--disabled"}`}
                                        disabled={!allSlotsFilled}
                                        onClick={handleComplete}
                                    >
                                        🏁 Complete Taxi Draft
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* ── table ── */}
            <div className="db-table-wrap">
                {teams.length === 0 ? (
                    <div className="db-empty">
                        <div className="db-empty-icon">🚕</div>
                        <div className="db-empty-title">No teams yet</div>
                        <div className="db-empty-sub">Click "+ Add Team" to add your first team column</div>
                        <button className="clm-primary" style={{ marginTop: 18 }} onClick={addTeam}>+ Add Team</button>
                    </div>
                ) : (
                    <div className="db-scroll">
                        <table className="db-table">
                            <thead>
                                <tr>
                                    <th className="db-th db-th-pos db-sticky-col" rowSpan={2}>SLOT</th>
                                    {teams.map(team => (
                                        <th key={team.id} className="db-th db-th-teamname" colSpan={3}>
                                            <div className="db-th-team-inner">
                                                {editingTeamId === team.id ? (
                                                    <input
                                                        ref={teamInputRef}
                                                        className="db-team-input"
                                                        value={editTeamValue}
                                                        onChange={e => setEditTeamValue(e.target.value)}
                                                        onBlur={commitTeamEdit}
                                                        onKeyDown={handleTeamKeyDown}
                                                    />
                                                ) : (
                                                    <span
                                                        className="db-team-name"
                                                        onClick={() => startEditTeam(team)}
                                                        title="Click to rename"
                                                    >
                                                        {team.name}
                                                    </span>
                                                )}
                                                <button
                                                    className="db-remove-team"
                                                    onClick={() => setTeamDeleteTarget({ id: team.id, name: team.name })}
                                                    title="Remove team"
                                                >×</button>
                                            </div>
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
                                {Array.from({ length: NUM_SLOTS }, (_, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}
                                    >
                                        {/* slot number — no position label, any player can go anywhere */}
                                        <td className="db-td db-td-pos db-sticky-col">
                                            {rowIndex + 1}
                                        </td>

                                        {teams.map(team => {
                                            const row = team.rows[rowIndex];
                                            return (
                                                <React.Fragment key={`${team.id}-${rowIndex}`}>

                                                    {/* ── player cell ── */}
                                                    <td
                                                        className={[
                                                            "db-td db-td-pick",
                                                            isEditing(team.id, rowIndex, "player") ? "db-td-editing" : "",
                                                            row.player ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isEditing(team.id, rowIndex, "player") &&
                                                            startEditCell(team.id, rowIndex, "player", row.player)
                                                        }
                                                    >
                                                        {isEditing(team.id, rowIndex, "player") ? (
                                                            <div style={{ position: "relative" }}>
                                                                <input
                                                                    ref={cellInputRef}
                                                                    className="db-cell-input"
                                                                    value={editValue}
                                                                    onChange={e => {
                                                                        const value = e.target.value;
                                                                        const q     = value.toLowerCase();
                                                                        setEditValue(value);
                                                                        // no position filter — any player is eligible
                                                                        setSuggestions(
                                                                            q.length < 2 ? [] :
                                                                                allPlayers
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
                                                                                    selectSuggestion(team, rowIndex, p);
                                                                                }}
                                                                            >
                                                                                {getPlayerDisplayName(p)}
                                                                                <span className="db-suggestion-pos">
                                                                                    {" "}{Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : ""}
                                                                                </span>
                                                                                <span className="db-suggestion-season">
                                                                                    {" "}{league.season}
                                                                                </span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            row.player ? (
                                                                <span className="db-cell-value db-cell-has-player">
                                                                    <span className="db-cell-name">{row.player}</span>
                                                                    <button
                                                                        className="db-cell-detail-btn"
                                                                        onClick={e => openProfile(e, row.player_id)}
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

                                                    {/* ── season cell ── */}
                                                    <td
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isEditing(team.id, rowIndex, "season") ? "db-td-editing" : "",
                                                            row.season ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isEditing(team.id, rowIndex, "season") &&
                                                            startEditCell(team.id, rowIndex, "season", row.season)
                                                        }
                                                    >
                                                        {isEditing(team.id, rowIndex, "season") ? (
                                                            <>
                                                                <input
                                                                    ref={cellInputRef}
                                                                    className="db-cell-input"
                                                                    list={`taxi-season-${team.id}-${rowIndex}`}
                                                                    value={editValue}
                                                                    onChange={e => setEditValue(e.target.value)}
                                                                    onBlur={commitCellEdit}
                                                                    onKeyDown={handleCellKeyDown}
                                                                    placeholder="e.g. 2024"
                                                                />
                                                                <datalist id={`taxi-season-${team.id}-${rowIndex}`}>
                                                                    {[0, 1, 2, 3, 4, 5].map(offset => {
                                                                        const yr = String(Number(league.season) - offset);
                                                                        return <option key={yr} value={yr} />;
                                                                    })}
                                                                </datalist>
                                                            </>
                                                        ) : (
                                                            <span className="db-cell-value">
                                                                {row.season || <span className="db-cell-empty">—</span>}
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* ── price cell ── */}
                                                    <td
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isEditing(team.id, rowIndex, "price") ? "db-td-editing" : "",
                                                            row.price ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isEditing(team.id, rowIndex, "price") &&
                                                            startEditCell(team.id, rowIndex, "price", row.price)
                                                        }
                                                    >
                                                        {isEditing(team.id, rowIndex, "price") ? (
                                                            <input
                                                                ref={cellInputRef}
                                                                className="db-cell-input"
                                                                value={editValue}
                                                                onChange={e => setEditValue(e.target.value)}
                                                                onBlur={commitCellEdit}
                                                                onKeyDown={handleCellKeyDown}
                                                            />
                                                        ) : (
                                                            <span className="db-cell-value">
                                                                {row.price || <span className="db-cell-empty">—</span>}
                                                            </span>
                                                        )}
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

            {/* ── modals ── */}
            <ConfirmDeleteModal
                isOpen={!!teamDeleteTarget}
                leagueName={teamDeleteTarget?.name || ""}
                onCancel={() => setTeamDeleteTarget(null)}
                onConfirm={async () => {
                    try {
                        await removeTeam(teamDeleteTarget.id);
                        setTeamDeleteTarget(null);
                    } catch (err) {
                        console.error("Failed to delete team:", err);
                        alert("Error deleting team.");
                    }
                }}
            />

            <PlayerProfileModal
                isOpen={!!profilePlayer}
                onClose={() => setProfilePlayer(null)}
                player={profilePlayer}
            />
        </div>
    );
}