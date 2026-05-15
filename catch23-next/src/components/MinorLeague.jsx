'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";

const getPlayerDisplayName = (p) => `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
const getPlayerName = (p) => getPlayerDisplayName(p).toLowerCase();

function makeEmptyTeam(index, numSlots) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: Array(numSlots).fill(null).map(() => ({ player: "", player_id: null, season: "" }))
    };
}

async function getMinorTable(teamId) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/minorleague/${teamId}`, {
        headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY }
    });
    if (!res.ok) throw new Error(`Failed to fetch minor league table for team ${teamId}`);
    return res.json(); // { id, numPlayers, team_id, players: [{ id, player_id, slotIndex, season, player }] }
}

async function saveMinorPicks(tableId, picks) {
    // picks: [{ player_id, slotIndex, season }]
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/minorleague/${tableId}/save`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY
        },
        body: JSON.stringify({ picks })
    });
    if (!res.ok) throw new Error("Failed to save minor league picks");
    return res.json();
}
// ─────────────────────────────────────────────────────────────────────────────

export default function MinorLeagueDraftBoard({ league, onBack, onModeChange }) {
    const [teams, setTeams] = useState([]); // each team has { id, name, tableId, rows[] }
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");
    const [allPlayers, setAllPlayers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [activeCell, setActiveCell] = useState(null);
    const [activeSeason, setActiveSeason] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [editSeason, setEditSeason] = useState("");
    const [teamDeleteTarget, setTeamDeleteTarget] = useState(null);
    const [saveBanner, setSaveBanner] = useState(false);
    const [errorBanner, setErrorBanner] = useState(false);

    const teamInputRef = useRef(null);
    const cellInputRef = useRef(null);

    const draftedIds = useMemo(() =>
        new Set(teams.flatMap(t => t.rows.map(r => r.player_id).filter(Boolean)))
        , [teams]);

    // numSlots comes from the league's taxi/minor league setting, fallback to 10
    const numSlots = league?.rosterSettings?.numTaxi ?? 10;

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);
                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = Array(numSlots).fill(null).map(() => ({
                            player: "", player_id: null, season: ""
                        }));

                        try {
                            const minorTable = await getMinorTable(t.id);
                            const picks = (minorTable.players ?? [])
                                .slice()
                                .sort((a, b) => a.slotIndex - b.slotIndex);

                            picks.forEach((pick) => {
                                const i = pick.slotIndex;
                                if (i >= 0 && i < numSlots) {
                                    emptyRows[i] = {
                                        player: pick.player
                                            ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                            : "",
                                        player_id: pick.player_id,
                                        season: pick.season ?? ""
                                    };
                                }
                            });

                            return { id: Number(t.id), name: t.name, tableId: minorTable.id, rows: emptyRows };
                        } catch {
                            return { id: Number(t.id), name: t.name, tableId: null, rows: emptyRows };
                        }
                    })
                );
                setTeams(loaded);
            } catch (err) {
                console.error("Failed to load minor league teams:", err);
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
        if (activeCell) setTimeout(() => cellInputRef.current?.focus(), 0);
    }, [activeCell]);

    const handleSave = async () => {
        try {
            await Promise.all(
                teams.map(async (team) => {
                    if (!team.tableId) return; // skip teams with no minor league table
                    const picks = team.rows
                        .map((row, i) => ({ player_id: row.player_id, slotIndex: i, season: row.season || league.season }))
                        .filter(p => p.player_id);
                    await saveMinorPicks(team.tableId, picks);
                })
            );
            setSaveBanner(true);
            setTimeout(() => setSaveBanner(false), 3000);
        } catch (err) {
            console.error("Failed to save minor league draft:", err);
            setErrorBanner(true);
            setTimeout(() => setErrorBanner(false), 3000);
        }
    };

    const addTeam = async () => {
        const newTeam = makeEmptyTeam(teams.length, numSlots);
        try {
            const { data } = await createTeam(newTeam.name, league.id);
            // backend auto-creates MinorTable on team creation, fetch it back for the tableId
            const minorTable = await getMinorTable(data.id);
            newTeam.id = Number(data.id);
            newTeam.tableId = minorTable.id;
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

    const openCell = (teamId, rowIndex, currentPlayer) => {
        setActiveCell({ teamId, rowIndex });
        setEditValue(currentPlayer || "");
        setSuggestions([]);
    };

    const commitCell = () => {
        if (!activeCell) return;
        const { teamId, rowIndex } = activeCell;
        setTeams(prev => prev.map(t => {
            if (t.id !== teamId) return t;
            const newRows = t.rows.map((row, i) => {
                if (i !== rowIndex) return row;
                const matched = allPlayers.find(p => getPlayerName(p) === editValue.trim().toLowerCase());
                const isValid = matched && !draftedIds.has(matched.id);
                return {
                    ...row,
                    player: isValid ? getPlayerDisplayName(matched) : "",
                    player_id: isValid ? matched.id : null,
                };
            });
            return { ...t, rows: newRows };
        }));
        setActiveCell(null);
        setEditValue("");
        setSuggestions([]);
    };

    const handleCellKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitCell(); }
        if (e.key === "Escape") { setActiveCell(null); setEditValue(""); setSuggestions([]); }
    };

    const commitSeason = (teamId, rowIndex, value) => {
        setTeams(prev => prev.map(t => {
            if (t.id !== teamId) return t;
            const newRows = t.rows.map((row, i) =>
                i === rowIndex ? { ...row, season: value } : row
            );
            return { ...t, rows: newRows };
        }));
        setActiveSeason(null);
        setEditSeason("");
    };

    const isActiveCell = (teamId, rowIndex) =>
        activeCell?.teamId === teamId && activeCell?.rowIndex === rowIndex;

    const isActiveSeason = (teamId, rowIndex) =>
        activeSeason?.teamId === teamId && activeSeason?.rowIndex === rowIndex;

    return (
        <div className="home" style={{ paddingTop: 80 }}>
            <div className="db-mode-banner">YOU ARE IN MINOR LEAGUE DRAFT MODE!</div>
            <div className={`save-banner ${saveBanner ? "save-banner--visible" : ""}`}>✅ Minor league draft saved!</div>
            <div className={`save-banner save-banner-error ${errorBanner ? "save-banner--visible" : ""}`}>
                ❌ Failed to save. Please try again.
            </div>

            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.name || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {teams.length} TEAMS • {league?.season} SEASON • MINOR LEAGUE
                        </div>
                    </div>
                </div>
                <div className="db-header-right">
                    <div className="db-stat">
                        <span className="db-stat-num">{teams.length}</span>
                        <span className="db-stat-label">Teams</span>
                    </div>
                    <div className="db-stat">
                        <span className="db-stat-num">{numSlots}</span>
                        <span className="db-stat-label">Slots</span>
                    </div>
                </div>
            </div>

            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <button className="db-tool-btn db-tool-primary" onClick={addTeam}>+ Add Team</button>
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <>
                            <span className="db-progress-label">Click any cell to assign a player • Click team name to rename</span>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>Pre-Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>Draft Simulation</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>Live Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("taxi")}>Taxi Draft</button>
                            <button className="db-tool-btn db-tool-primary" onClick={handleSave}>💾 Save Draft</button>
                        </>
                    )}
                </div>
            </div>

            <div className="db-table-wrap">
                {teams.length === 0 ? (
                    <div className="db-empty">
                        <div className="db-empty-icon">⚾</div>
                        <div className="db-empty-title">No teams yet</div>
                        <div className="db-empty-sub">Click "+ Add Team" to add your first team column</div>
                        <button className="clm-primary" style={{ marginTop: 18 }} onClick={addTeam}>+ Add Team</button>
                    </div>
                ) : (
                    <div className="db-scroll">
                        <table className="db-table">
                            <thead>
                                <tr>
                                    <th className="db-th db-th-pos db-sticky-col" rowSpan={2}>#</th>
                                    {teams.map(team => (
                                        <th key={team.id} className="db-th db-th-teamname" colSpan={2}>
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
                                                    <span className="db-team-name" onClick={() => startEditTeam(team)} title="Click to rename">
                                                        {team.name}
                                                    </span>
                                                )}
                                                <button
                                                    className="db-remove-team"
                                                    onClick={() => setTeamDeleteTarget({ id: team.id, name: team.name })}
                                                    title="Remove team"
                                                >×</button>
                                            </div>
                                            {!team.tableId && (
                                                <div className="db-team-budget" style={{ color: "var(--color-warning)" }}>
                                                    no minor league table
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                                <tr>
                                    {teams.map(team => (
                                        <React.Fragment key={team.id}>
                                            <th className="db-th db-th-sub">PLAYER</th>
                                            <th className="db-th db-th-sub db-th-narrow">SEASON</th>
                                        </React.Fragment>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {Array(numSlots).fill(null).map((_, rowIndex) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}>
                                        <td className="db-td db-td-pos db-sticky-col">
                                            {rowIndex + 1}
                                        </td>

                                        {teams.map(team => {
                                            const row = team.rows[rowIndex];
                                            return (
                                                <React.Fragment key={`${team.id}-${rowIndex}`}>
                                                    <td
                                                        className={[
                                                            "db-td db-td-pick",
                                                            isActiveCell(team.id, rowIndex) ? "db-td-editing" : "",
                                                            row.player ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isActiveCell(team.id, rowIndex) &&
                                                            openCell(team.id, rowIndex, row.player)
                                                        }
                                                    >
                                                        {isActiveCell(team.id, rowIndex) ? (
                                                            <div style={{ position: "relative" }}>
                                                                <input
                                                                    ref={cellInputRef}
                                                                    className="db-cell-input"
                                                                    value={editValue}
                                                                    onChange={e => {
                                                                        const val = e.target.value;
                                                                        const q = val.toLowerCase();
                                                                        setEditValue(val);
                                                                        setSuggestions(
                                                                            q.length < 2 ? [] :
                                                                                allPlayers
                                                                                    .filter(p => p.status === 'MINORS')
                                                                                    .filter(p => getPlayerName(p).includes(q))
                                                                                    .filter(p => !draftedIds.has(p.id))
                                                                                    .slice(0, 8)
                                                                        );
                                                                    }}
                                                                    onBlur={commitCell}
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
                                                                                    const displayName = getPlayerDisplayName(p);
                                                                                    setTeams(prev => prev.map(t => {
                                                                                        if (t.id !== team.id) return t;
                                                                                        const newRows = t.rows.map((r, i) =>
                                                                                            i === rowIndex
                                                                                                ? { ...r, player: displayName, player_id: p.id }
                                                                                                : r
                                                                                        );
                                                                                        return { ...t, rows: newRows };
                                                                                    }));
                                                                                    setActiveCell(null);
                                                                                    setEditValue("");
                                                                                    setSuggestions([]);
                                                                                }}
                                                                            >
                                                                                {getPlayerDisplayName(p)}
                                                                                <span className="db-suggestion-pos">
                                                                                    {" "}{Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : ""}
                                                                                </span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <span className="db-cell-value">
                                                                {row.player || <span className="db-cell-empty">—</span>}
                                                            </span>
                                                        )}
                                                    </td>

                                                    <td
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isActiveSeason(team.id, rowIndex) ? "db-td-editing" : "",
                                                            row.season ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() => {
                                                            if (!isActiveSeason(team.id, rowIndex)) {
                                                                setActiveSeason({ teamId: team.id, rowIndex });
                                                                setEditSeason(row.season || "");
                                                            }
                                                        }}
                                                    >
                                                        {isActiveSeason(team.id, rowIndex) ? (
                                                            <>
                                                                <input
                                                                    className="db-cell-input"
                                                                    list={`minor-season-${team.id}-${rowIndex}`}
                                                                    value={editSeason}
                                                                    onChange={e => setEditSeason(e.target.value)}
                                                                    onBlur={() => commitSeason(team.id, rowIndex, editSeason)}
                                                                    onKeyDown={e => {
                                                                        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitSeason(team.id, rowIndex, editSeason); }
                                                                        if (e.key === "Escape") { setActiveSeason(null); setEditSeason(""); }
                                                                    }}
                                                                    autoFocus
                                                                    placeholder="e.g. 2024"
                                                                />
                                                                <datalist id={`minor-season-${team.id}-${rowIndex}`}>
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

            <ConfirmDeleteModal
                isOpen={!!teamDeleteTarget}
                leagueName={teamDeleteTarget?.name || ""}
                onCancel={() => setTeamDeleteTarget(null)}
                onConfirm={async () => {
                    try { await removeTeam(teamDeleteTarget.id); setTeamDeleteTarget(null); }
                    catch (err) { console.error("Failed to delete team:", err); alert("Error deleting team."); }
                }}
            />
        </div>
    );
}