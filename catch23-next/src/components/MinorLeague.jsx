'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers, saveDraftPicks, getTeamDraftPicks } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { PositionPlayersModal, playerMatchesRowPosition } from "./PositionPlayersModal";

// initialize empty rows 
function makeEmptyTeam(index, count) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: Array(count).fill(null).map(() => ({ player: "", player_id: null}))
    };
}

// get player display name

const getPlayerDisplayName = (p) =>
    `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();

// unify player names
const getPlayerName = (p) =>
    getPlayerDisplayName(p).toLowerCase();

export default function PreDraftBoard({ league, onBack, onModeChange }) {
    const POSITIONS = buildPositions(league.rosterSettings)

    const [teams, setTeams] = useState([]);
    const [editingCell, setEditingCell] = useState(null); // { teamId, rowIndex, field }
    const [editValue, setEditValue] = useState("");
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");
    const [allPlayers, setAllPlayers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [teamDeleteTarget, setTeamDeleteTarget] = useState(null);
    const [saveBanner, setSaveBanner] = useState(false);
    const [errorBanner, setErrorBanner] = useState(false);

    allPlayers
        .filter(p => p.isMinorLeague === true)  // adjust to whatever your field is
        .filter(p => getPlayerName(p).includes(q))
        .filter(p => !draftedIds.has(p.id))
        .slice(0, 8)

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);

    // get all already-drafted player ids across every team
    const draftedIds = useMemo(() =>
        // flat map loops through every team and grabs the player_id from every row, filter removes null values
        new Set(teams.flatMap(t => t.rows.map(r => r.player_id).filter(Boolean)))
        , [teams]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);

                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = POSITIONS.map(() => ({
                            player: "",
                            player_id: null,
                        }));

                        const { data: picks } = await getTeamDraftPicks(t.id);

                        picks.forEach((pick) => {
                            const rowIndex = parseInt(pick.rosterPosition.replace("MINOR_LEAGUE_", "")) - 1;
                            if (rowIndex >= 0) {
                                emptyRows[rowIndex] = {
                                    player: `${pick.player?.firstName ?? ""} ${pick.player?.lastName ?? ""}`.trim(),
                                    player_id: pick.player_id,
                                };
                            }
                        });

                        return {
                            id: Number(t.id),
                            name: t.name,
                            rows: emptyRows
                        };
                    })
                );

                setTeams(loaded);
            } catch (err) {
                console.error("Failed to load teams/draft picks:", err);
            }
        };

        fetchTeams();
    }, [league.id]);

    useEffect(() => {
        getAllPlayers()
            .then(({ data }) => {
                console.log("players from api:", data);
                setAllPlayers(data);
            })
            .catch(err => {
                console.error("Failed to load players:", err);
            });
    }, []);

    const handleSaveDraft = async () => {
        const picks = [];

        teams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (!row.player_id) return;

                picks.push({
                    rosterPosition: positionToEnum(POSITIONS[i], i, POSITIONS),
                    team_id: team.id,
                    player_id: row.player_id,
                });
            });
        });

        console.log("sending picks:", picks);

        try {
            await saveDraftPicks({
                picks,
                teamIds: teams.map(t => t.id)
            });

            setSaveBanner(true);
            setTimeout(() => setSaveBanner(false), 3000);

        } catch (err) {
            console.error("Failed to save draft:", err);
            setErrorBanner(true);
            setTimeout(() => setErrorBanner(false), 3000);
        }
    };
    // adding a new team
    const addTeam = async () => {

        // initialize column
        const newTeam = makeEmptyTeam(teams.length, POSITIONS);

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

    // deleting a team
    const removeTeam = async (teamId) => {
        await deleteTeam(teamId);
        setTeams(prev => prev.filter(t => t.id !== teamId));
    };

    // editing a team
    const startEditTeam = (team) => {
        setEditingTeamId(team.id);
        setEditTeamValue(team.name);
        setTimeout(() => teamInputRef.current?.focus(), 0);
    };

    const commitTeamEdit = () => {
        if (!editingTeamId) return;

        setTeams(prev =>
            prev.map(t =>
                t.id === editingTeamId
                    ? { ...t, name: editTeamValue.trim() || t.name }
                    : t
            )
        );

        setEditingTeamId(null);
        setEditTeamValue("");
    };

    const handleTeamKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            commitTeamEdit();
        }
        if (e.key === "Escape") {
            setEditingTeamId(null);
            setEditTeamValue("");
        }
    };

    const startEditCell = (teamId, rowIndex, field, currentValue) => {
        setEditingCell({ teamId, rowIndex, field });
        setEditValue(currentValue);
        setTimeout(() => cellInputRef.current?.focus(), 0);
    };

    const commitCellEdit = () => {
        if (!editingCell) return;

        const { teamId, rowIndex, field } = editingCell;

        setTeams(prev =>
            prev.map(t => {
                if (t.id !== teamId) return t;

                const newRows = t.rows.map((row, i) => {
                    if (i !== rowIndex) return row;

                    if (field === "player") {

                        if (editValue.trim().toLowerCase() === row.player.toLowerCase()) {
                            return row;
                        }
                        const matched = allPlayers.find(
                            p => getPlayerName(p) === editValue.trim().toLowerCase()
                        );

                        // invalid if: doesn't exist OR already drafted by another team
                        const isValid = matched && !draftedIds.has(matched.id);


                        return {
                            ...row,
                            player: isValid ? getPlayerDisplayName(matched) : "", // null if not an existing player 
                            player_id: isValid ? matched.id : null,
                        };
                    }

                    return { ...row, [field]: editValue };
                });

                return { ...t, rows: newRows };
            })
        );

        setEditingCell(null);
        setEditValue("");
        setSuggestions([]);
    };

    const handleCellKeyDown = (e) => {
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

    const isEditing = (teamId, rowIndex, field) =>
        editingCell?.teamId === teamId &&
        editingCell?.rowIndex === rowIndex &&
        editingCell?.field === field;

    return (
        <div className="home" style={{ paddingTop: 80 }}>
            <div className="db-mode-banner">YOU ARE IN PRE-DRAFT MODE!</div>
            <div className={`save-banner ${saveBanner ? "save-banner--visible" : ""}`}>
                ✅ Draft saved!
            </div>
            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.title || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {league?.format} • {teams.length} TEAMS
                        </div>
                    </div>
                </div>
                <div className="db-header-right">
                    <div className="db-stat">
                        <span className="db-stat-num">{teams.length}</span>
                        <span className="db-stat-label">Teams</span>
                    </div>
                    <div className="db-stat">
                        <span className="db-stat-num">{POSITIONS.length}</span>
                        <span className="db-stat-label">Positions</span>
                    </div>
                </div>
            </div>

            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <button className="db-tool-btn db-tool-primary" onClick={addTeam}>
                        + Add Team
                    </button>
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <>
                            <span className="db-progress-label">
                                Click any cell to edit • Click team name to rename
                            </span>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>
                                Draft Simulation
                            </button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>
                                Live Draft
                            </button>
                            <button className="db-tool-btn db-tool-primary" onClick={handleSaveDraft}>
                                💾 Save Draft
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="db-table-wrap">
                {teams.length === 0 ? (
                    <div className="db-empty">
                        <div className="db-empty-icon">📋</div>
                        <div className="db-empty-title">No teams yet</div>
                        <div className="db-empty-sub">Click "+ Add Team" to add your first team column</div>
                        <button className="clm-primary" style={{ marginTop: 18 }} onClick={addTeam}>
                            + Add Team
                        </button>
                    </div>
                ) : (
                    <div className="db-scroll">
                        <table className="db-table">
                            <thead>
                                <tr>
                                    <th className="db-th db-th-pos db-sticky-col" rowSpan={2}>POS</th>
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
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            {league.draftSettings.budget != null && ( // Used AI
                                                <div
                                                    className="db-team-budget"
                                                >
                                                    ${remainingBudgets[team.id]?.toFixed(0)} left
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>

                                <tr>
                                    {teams.map(team => (
                                        <React.Fragment key={team.id}>
                                            <th className="db-th db-th-sub">PLAYER</th>
                                        </React.Fragment>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {POSITIONS.map((pos, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}
                                    >
                                        <td
                                            className="db-td db-td-pos db-sticky-col"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setSelectedPosition(pos)}
                                        >
                                            <div className="tooltip-wrap" data-tip="Click to view available players">
                                                {pos}
                                            </div>
                                        </td>

                                        {teams.map(team => {
                                            const row = team.rows[rowIndex];

                                            return (
                                                <React.Fragment key={`${team.id}-${rowIndex}`}>
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
                                                                        const q = value.toLowerCase();
                                                                        setEditValue(value);

                                                                        setSuggestions(
                                                                            q.length < 2
                                                                                ? []
                                                                                : allPlayers
                                                                                    .filter(p => playerMatchesRowPosition(p, pos))
                                                                                    .filter(p => getPlayerName(p).includes(q))
                                                                                    .filter(p => !draftedIds.has(p.id)) // exclude players that are already drafted
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
                                                                                onMouseDown={(e) => {
                                                                                    e.preventDefault();

                                                                                    const displayName = getPlayerDisplayName(p);

                                                                                    setTeams(prev =>
                                                                                        prev.map(t => {
                                                                                            if (t.id !== team.id) return t;

                                                                                            const newRows = t.rows.map((r, i) =>
                                                                                                i === rowIndex
                                                                                                    ? {
                                                                                                        ...r,
                                                                                                        player: displayName,
                                                                                                        player_id: p.id,
                                                                                                    }
                                                                                                    : r
                                                                                            );

                                                                                            return { ...t, rows: newRows };
                                                                                        })
                                                                                    );

                                                                                    setEditingCell(null);
                                                                                    setEditValue("");
                                                                                    setSuggestions([]);
                                                                                }}
                                                                            >
                                                                                {getPlayerDisplayName(p)}
                                                                                <span className="db-suggestion-pos">
                                                                                    {" "}
                                                                                    {Array.isArray(p.playablePositions)
                                                                                        ? p.playablePositions.join(", ")
                                                                                        : ""}
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
                                                            isEditing(team.id, rowIndex) ? "db-td-editing" : "",                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isEditing(team.id, rowIndex) &&
                                                            startEditCell(team.id, rowIndex)
                                                        }
                                                    >
                                                        {isEditing(team.id, rowIndex, ) ? (
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
                                                            </span>
                                                        )}
                                                    </td>

                                                    <td
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isEditing(team.id, rowIndex) ? "db-td-editing" : "",
                                                        ].join(" ")}
                                                        onClick={() =>
                                                            !isEditing(team.id, rowIndex) &&
                                                            startEditCell(team.id, rowIndex)
                                                        }
                                                    >
                                                        {isEditing(team.id, rowIndex) ? (
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
                    try {
                        await removeTeam(teamDeleteTarget.id);
                        setTeamDeleteTarget(null);
                    } catch (err) {
                        console.error("Failed to delete team:", err);
                        alert("Error deleting team.");
                    }
                }}
            />

        </div>
    );
}
