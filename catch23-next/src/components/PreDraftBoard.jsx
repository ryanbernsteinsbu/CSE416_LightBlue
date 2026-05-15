'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers, saveDraftPicks, getTeamDraftPicks } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { PositionPlayersModal, playerMatchesRowPosition } from "./PositionPlayersModal";
import { PlayerProfileModal } from "./PlayerProfileModal";
import { MovePopup } from "./Movepopup";

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
        C: `CATCHER_${n}`, "1B": "FIRST", "2B": "SECOND", "3B": "THIRD",
        SS: "SHORTSTOP", MI: "MIDDLE_INFIELD", CI: "CORNER_INFIELD",
        OF: `OUTFIELD_${n}`, U: "UTILITY", P: `PITCHER_${n}`,
    };
    return map[pos] || pos;
};

function makeEmptyTeam(index, POSITIONS) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: POSITIONS.map(() => ({ player: "", player_id: null, season: "", price: "" }))
    };
}

const getPlayerDisplayName = (p) => `${p?.firstName ?? ""} ${p?.lastName ?? ""}`.trim();
const getPlayerName = (p) => getPlayerDisplayName(p).toLowerCase();

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

export default function PreDraftBoard({ league, onBack, onModeChange }) {
    const POSITIONS = buildPositions(league.rosterSettings);

    const [teams, setTeams] = useState([]);
    const [editingCell, setEditingCell] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");
    const [allPlayers, setAllPlayers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [teamDeleteTarget, setTeamDeleteTarget] = useState(null);
    const [saveBanner, setSaveBanner] = useState(false);
    const [errorBanner, setErrorBanner] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [budgetErrorTeam, setBudgetErrorTeam] = useState(null);
    const [profilePlayer, setProfilePlayer] = useState(null);
    const [movePopup, setMovePopup] = useState(null);

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);

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

    const openProfile = (e, playerId) => {
        e.stopPropagation();
        const found = allPlayers.find(p => p.id === playerId);
        if (found) setProfilePlayer(toProfilePlayer(found));
    };

    const openMove = (e, team, rowIndex, row) => {
        e.stopPropagation();
        const playerData = allPlayers.find(p => p.id === row.player_id);
        setMovePopup({
            fromTeamId: team.id,
            fromRowIndex: rowIndex,
            player: row.player,
            player_id: row.player_id,
            season: row.season,
            price: row.price,
            playablePositions: playerData?.playablePositions ?? [],
            playerObj: playerData ?? null,  // ← add this
        });
    };

    const confirmMove = (toTeamId, toRowIndex) => {
        const { fromTeamId, fromRowIndex } = movePopup;
        const movingPlayer = {
            player: movePopup.player,
            player_id: movePopup.player_id,
            season: movePopup.season,
            price: movePopup.price,
        };

        setTeams(prev => {
            const destTeam = prev.find(t => t.id === toTeamId);
            const destRow = destTeam?.rows[toRowIndex];
            const destPlayer = destRow?.player_id
                ? { player: destRow.player, player_id: destRow.player_id, season: destRow.season, price: destRow.price }
                : { player: "", player_id: null, season: "", price: "" };

            return prev.map(t => {
                if (t.id === fromTeamId && t.id === toTeamId) {
                    const newRows = t.rows.map((r, i) => {
                        if (i === fromRowIndex) return { ...r, ...destPlayer };
                        if (i === toRowIndex) return { ...r, ...movingPlayer };
                        return r;
                    });
                    return { ...t, rows: newRows };
                }
                if (t.id === fromTeamId) {
                    const newRows = t.rows.map((r, i) =>
                        i === fromRowIndex ? { ...r, ...destPlayer } : r
                    );
                    return { ...t, rows: newRows };
                }
                if (t.id === toTeamId) {
                    const newRows = t.rows.map((r, i) =>
                        i === toRowIndex ? { ...r, ...movingPlayer } : r
                    );
                    return { ...t, rows: newRows };
                }
                return t;
            });
        });

        setMovePopup(null);
    };

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);
                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = POSITIONS.map(() => ({
                            player: "", player_id: null, season: "", price: ""
                        }));
                        const { data: picks } = await getTeamDraftPicks(t.id);
                        picks.forEach((pick) => {
                            const rowIndex = POSITIONS.findIndex((pos, idx) =>
                                positionToEnum(pos, idx, POSITIONS) === pick.rosterPosition
                            );
                            if (rowIndex !== -1) {
                                emptyRows[rowIndex] = {
                                    player: pick.player
                                        ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                        : "",
                                    player_id: pick.player_id,
                                    season: pick.season ?? "",
                                    price: pick.cost ?? ""
                                };
                            }
                        });
                        return { id: Number(t.id), name: t.name, rows: emptyRows };
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
            .then(({ data }) => setAllPlayers(data))
            .catch(err => console.error("Failed to load players:", err));
    }, []);

    const handleSaveDraft = async () => {
        const missingField = teams.some(team =>
            team.rows.some(row => row.player_id && (!row.price || !row.season))
        );
        if (missingField) {
            setErrorBanner(true);
            setTimeout(() => setErrorBanner(false), 3000);
            return;
        }
        if (league.draftSettings.budget != null) {
            const overBudgetTeam = teams.find(team => {
                const spent = team.rows.reduce((sum, row) => {
                    const price = parseFloat(row.price);
                    return sum + (isNaN(price) ? 0 : price);
                }, 0);
                return spent > league.draftSettings.budget;
            });
            if (overBudgetTeam) {
                const spent = overBudgetTeam.rows.reduce((sum, row) => {
                    const price = parseFloat(row.price);
                    return sum + (isNaN(price) ? 0 : price);
                }, 0);
                setBudgetErrorTeam({ name: overBudgetTeam.name, spent, budget: league.draftSettings.budget });
                setTimeout(() => setBudgetErrorTeam(null), 4000);
                return;
            }
        }

        const picks = [];
        teams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (!row.player_id) return;
                picks.push({
                    cost: parseFloat(row.price),
                    rosterPosition: positionToEnum(POSITIONS[i], i, POSITIONS),
                    team_id: team.id,
                    player_id: row.player_id,
                    season: row.season || league.season
                });
            });
        });

        try {
            await saveDraftPicks({ picks, teamIds: teams.map(t => t.id) });
            setSaveBanner(true);
            setTimeout(() => setSaveBanner(false), 3000);
        } catch (err) {
            console.error("Failed to save draft:", err);
            setErrorBanner(true);
            setTimeout(() => setErrorBanner(false), 3000);
        }
    };

    const addTeam = async () => {
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
                        player: isValid ? getPlayerDisplayName(matched) : "",
                        player_id: isValid ? matched.id : null,
                        season: isValid ? (row.season || "") : ""
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

    return (
        <div className="home" style={{ paddingTop: 80 }}>
            <div className="db-mode-banner">YOU ARE IN PRE-DRAFT MODE!</div>
            <div className={`save-banner ${saveBanner ? "save-banner--visible" : ""}`}>✅ Draft saved!</div>
            <div className={`save-banner save-banner-error ${errorBanner ? "save-banner--visible" : ""}`}>
                ❌ Draft did not save. One or more players is missing a required field (season or price).
            </div>
            <div className={`save-banner save-banner-error ${budgetErrorTeam ? "save-banner--visible" : ""}`}>
                ❌ {budgetErrorTeam?.name} is over budget — spent ${budgetErrorTeam?.spent.toFixed(0)} of ${budgetErrorTeam?.budget}
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
                    <button className="db-tool-btn db-tool-primary" onClick={addTeam}>+ Add Team</button>
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <>
                            <span className="db-progress-label">Click any cell to edit • Click team name to rename</span>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("taxi")}>Taxi Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>Draft Simulation</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>Live Draft</button>
                            <button className="db-tool-btn db-tool-primary" onClick={handleSaveDraft}>💾 Save Draft</button>
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
                        <button className="clm-primary" style={{ marginTop: 18 }} onClick={addTeam}>+ Add Team</button>
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
                                        <td
                                            className="db-td db-td-pos db-sticky-col"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setSelectedPosition(pos)}
                                        >
                                            <div className="tooltip-wrap" data-tip="Click to view available players">{pos}</div>
                                        </td>

                                        {teams.map(team => {
                                            const row = team.rows[rowIndex];
                                            return (
                                                <React.Fragment key={`${team.id}-${rowIndex}`}>
                                                    {/* Player cell */}
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
                                                                                onMouseDown={(e) => {
                                                                                    e.preventDefault();
                                                                                    const displayName = getPlayerDisplayName(p);
                                                                                    setTeams(prev => prev.map(t => {
                                                                                        if (t.id !== team.id) return t;
                                                                                        const newRows = t.rows.map((r, i) =>
                                                                                            i === rowIndex
                                                                                                ? { ...r, player: displayName, player_id: p.id, season: r.season || "" }
                                                                                                : r
                                                                                        );
                                                                                        return { ...t, rows: newRows };
                                                                                    }));
                                                                                    setEditingCell(null);
                                                                                    setEditValue("");
                                                                                    setSuggestions([]);
                                                                                }}
                                                                            >
                                                                                {getPlayerDisplayName(p)}
                                                                                <span className="db-suggestion-pos">
                                                                                    {" "}{Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : ""}
                                                                                </span>
                                                                                <span className="db-suggestion-season"> {league.season}</span>
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
                                                                        onClick={(e) => openProfile(e, row.player_id)}
                                                                        title="View player profile"
                                                                    >
                                                                        Details
                                                                    </button>
                                                                    <button
                                                                        className="db-cell-detail-btn"
                                                                        onClick={(e) => openMove(e, team, rowIndex, row)}
                                                                        title="Move player"
                                                                    >
                                                                        Move
                                                                    </button>
                                                                </span>
                                                            ) : (
                                                                <span className="db-cell-value">
                                                                    <span className="db-cell-empty">—</span>
                                                                </span>
                                                            )
                                                        )}
                                                    </td>

                                                    {/* Season cell */}
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
                                                                    list={`season-options-${team.id}-${rowIndex}`}
                                                                    value={editValue}
                                                                    onChange={e => setEditValue(e.target.value)}
                                                                    onBlur={commitCellEdit}
                                                                    onKeyDown={handleCellKeyDown}
                                                                    placeholder="e.g. 2024"
                                                                />
                                                                <datalist id={`season-options-${team.id}-${rowIndex}`}>
                                                                    {[0, 1, 2, 3, 4, 5].map(offset => {
                                                                        const yr = String(Number(league.season) - offset);
                                                                        return <option key={yr} value={yr} />;
                                                                    })}
                                                                </datalist>
                                                            </>
                                                        ) : (
                                                            <span className="db-cell-value">{row.season || <span className="db-cell-empty">—</span>}</span>
                                                        )}
                                                    </td>

                                                    {/* Price cell */}
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
                                                            <input ref={cellInputRef} className="db-cell-input" value={editValue}
                                                                onChange={e => setEditValue(e.target.value)}
                                                                onBlur={commitCellEdit} onKeyDown={handleCellKeyDown} />
                                                        ) : (
                                                            <span className="db-cell-value">{row.price || <span className="db-cell-empty">—</span>}</span>
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

            <PositionPlayersModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition}
                players={allPlayers.filter(p => playerMatchesRowPosition(p, selectedPosition ?? ""))}
                draftedIds={draftedIds}
                league={league}
            />

            <PlayerProfileModal
                isOpen={!!profilePlayer}
                onClose={() => setProfilePlayer(null)}
                player={profilePlayer}
            />

            {movePopup && (
                <MovePopup
                    movePopup={movePopup}
                    teams={teams}
                    POSITIONS={POSITIONS}
                    onConfirm={confirmMove}
                    onClose={() => setMovePopup(null)}
                    remainingBudgets={remainingBudgets}
                    budget={league.draftSettings.budget}
                />
            )}
        </div>
    );
}