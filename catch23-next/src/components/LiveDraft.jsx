'use client';
import React, { useEffect, useState, useRef, useMemo } from "react";
import { createTeam, getLeagueTeams, deleteTeam, getAllPlayers, saveDraftPicks, getTeamDraftPicks, updateLeague } from "../lib/api";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import { PositionPlayersModal, playerMatchesRowPosition } from "./PositionPlayersModal";

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
        SS: "SHORTSTOP", MI: "SHORTSTOP", CI: "FIRST",
        OF: `OUTFIELD_${n}`, U: "UTILITY", P: `PITCHER_${n}`,
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

export default function LiveDraftBoard({ league, onBack, onModeChange }) {
    const POSITIONS = buildPositions(league.rosterSettings);

    const [teams, setTeams] = useState([]);
    const [editingCell, setEditingCell] = useState(null);
    const [editValue, setEditValue] = useState("");
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

    const [pickBanner, setPickBanner] = useState(null);
    const [pickBannerVisible, setPickBannerVisible] = useState(false);
    const pickBannerTimer = useRef(null);

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);
    const popupPlayerRef = useRef(null);

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

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);
                const loadedDraftLog = [];
                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = POSITIONS.map(() => ({ player: "", player_id: null, season: "", price: "", draft_time: "" }));
                        const { data: picks } = await getTeamDraftPicks(t.id);

                        picks.forEach((pick) => {
                            const rowIndex = POSITIONS.findIndex((pos, idx) =>
                                positionToEnum(pos, idx, POSITIONS) === pick.rosterPosition
                            );
                            if (rowIndex !== -1) {
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
                setTeams(loaded);
                setDraftLog(
                    loadedDraftLog
                        .filter(entry => entry.playerName)
                        .sort((a, b) => Number(b.id) - Number(a.id))
                );
            } catch (err) {
                console.error("Failed to load teams/draft picks:", err);
            }
        };
        fetchTeams();
    }, [league.id]);

    // draft is complete when every team has every slot filled
    const allFilled = useMemo(() =>
        teams.length > 0 && teams.every(t => t.rows.every(r => r.player_id))
        , [teams]);

    // count how many slots are still empty across all teams
    const emptyCount = useMemo(() =>
        teams.reduce((total, t) => total + t.rows.filter(r => !r.player_id).length, 0)
        , [teams]);

    useEffect(() => {
        getAllPlayers()
            .then(({ data }) => setAllPlayers(data))
            .catch(err => console.error("Failed to load players:", err));
    }, []);

    useEffect(() => {
        if (!draftPopup) return;

        const timer = setTimeout(() => {
            popupPlayerRef.current?.focus();
        }, 50);

        return () => clearTimeout(timer);
    }, [!!draftPopup]);

    const showPickBanner = (teamName, playerName, position) => {
        if (pickBannerTimer.current) clearTimeout(pickBannerTimer.current);
        setPickBanner({ teamName, playerName, position });
        setPickBannerVisible(false);
        setTimeout(() => setPickBannerVisible(true), 10);
        pickBannerTimer.current = setTimeout(() => {
            setPickBannerVisible(false);
        }, 4000);
    };

    const autoSave = async (updatedTeams) => {
        const picks = [];
        updatedTeams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (!row.player_id) return;
                picks.push({
                    cost: parseFloat(row.price) || 0,
                    rosterPosition: positionToEnum(POSITIONS[i], i, POSITIONS),
                    team_id: team.id,
                    player_id: row.player_id,
                    season: row.season || league.season,
                    draft_time: row.draft_time || ""
                });
            });
        });
        try {
            await saveDraftPicks({ picks, teamIds: updatedTeams.map(t => t.id) });
        } catch (err) {
            console.error("Auto-save failed:", err);
        }
    };

    // finalize draft and navigate to summary
    const handleEndDraft = async () => {
        if (!allFilled) return;
        setEndingDraft(true);
        try {
            await updateLeague(league.id, { status: "DRAFTED" });
            onModeChange("summary");
        } catch (err) {
            console.error("Failed to end draft:", err);
            alert("Error ending draft. Please try again.");
        } finally {
            setEndingDraft(false);
            setEndDraftConfirm(false);
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
        setTeams(prev => {
            const updated = prev.map(t => {
                if (t.id !== teamId) return t;
                const newRows = t.rows.map((row, i) => {
                    if (i !== rowIndex) return row;
                    return { ...row, [field]: editValue };
                });
                return { ...t, rows: newRows };
            });
            return updated;
        });
        setEditingCell(null);
        setEditValue("");
    };

    const handleCellKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitCellEdit(); }
        if (e.key === "Escape") { setEditingCell(null); setEditValue(""); }
    };

    const isEditing = (teamId, rowIndex, field) =>
        editingCell?.teamId === teamId && editingCell?.rowIndex === rowIndex && editingCell?.field === field;

    const confirmDraftPopup = async () => {
        const { teamId, rowIndex, playerId, playerName, price, pos } = draftPopup;
        if (!playerId || !price) return;

        const displayTime = new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit"
        });

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

        const teamName = teams.find(t => t.id === teamId)?.name;

        setDraftLog(prev => [{
            id: crypto.randomUUID(),
            teamName,
            teamId,
            playerName,
            position: pos,
            price,
            rowIndex,
            timestamp: displayTime
        }, ...prev]);

        showPickBanner(teamName, playerName, pos);

        setDraftPopup(null);
        setSuggestions([]);

        await autoSave(updatedTeams);
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
                            <span className="db-progress-label">Click any player cell to draft • Auto-saves on each pick</span>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>Pre-Draft</button>
                            <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>Draft Simulation</button>
                            <div
                                className="tooltip-wrap"
                                data-tip={allFilled
                                    ? "Finalize and view draft summary"
                                    : `${emptyCount} roster slot${emptyCount !== 1 ? "s" : ""} still need to be filled`
                                }
                            >
                                <button
                                    className={`db-tool-btn ${allFilled ? "end-draft-btn--active" : "end-draft-btn--disabled"}`}
                                    disabled={!allFilled}
                                    onClick={() => allFilled && setEndDraftConfirm(true)}
                                >
                                    🏁 End Draft
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="ld-layout">
                <div className="ld-main">
                    <div className="db-table-wrap">
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
                                                <th key={team.id} className="db-th db-th-teamname" colSpan={3}>
                                                    <div className="db-th-team-inner">
                                                        {editingTeamId === team.id ? (
                                                            <input ref={teamInputRef} className="db-team-input" value={editTeamValue}
                                                                onChange={e => setEditTeamValue(e.target.value)}
                                                                onBlur={commitTeamEdit} onKeyDown={handleTeamKeyDown} />
                                                        ) : (
                                                            <span className="db-team-name" onClick={() => startEditTeam(team)} title="Click to rename">
                                                                {team.name}
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
                                                                        teamId: team.id,
                                                                        rowIndex,
                                                                        pos,
                                                                        playerName: "",
                                                                        playerId: null,
                                                                        price: ""
                                                                    });
                                                                }}
                                                            >
                                                                <span className="db-cell-value">
                                                                    {row.player || <span className="db-cell-empty">—</span>}
                                                                </span>
                                                            </td>

                                                            <td
                                                                className={[ 
                                                                    "db-td db-td-pick db-td-narrow",
                                                                    isEditing(team.id, rowIndex, "season") ? "db-td-editing" : "",
                                                                    row.season ? "db-td-filled" : "",
                                                                    isKeeper ? "db-td-keeper" : "db-td-draftable"
                                                                ].join(" ")}
                                                                onClick={() => {
                                                                    if (isKeeper) return;
                                                                    if (!isEditing(team.id, rowIndex, "season"))
                                                                        startEditCell(team.id, rowIndex, "season", row.season);
                                                                }}
                                                            >
                                                                {isEditing(team.id, rowIndex, "season") ? (
                                                                    <input ref={cellInputRef} className="db-cell-input" value={editValue}
                                                                        onChange={e => setEditValue(e.target.value)}
                                                                        onBlur={commitCellEdit} onKeyDown={handleCellKeyDown} />
                                                                ) : (
                                                                    <span className="db-cell-value">
                                                                        {row.season || <span className="db-cell-empty">—</span>}
                                                                    </span>
                                                                )}
                                                            </td>

                                                            <td
                                                                className={[
                                                                    "db-td db-td-pick db-td-narrow",
                                                                    isEditing(team.id, rowIndex, "price") ? "db-td-editing" : "",
                                                                    row.price ? "db-td-filled" : "",
                                                                    isKeeper ? "db-td-keeper" : "db-td-draftable"
                                                                ].join(" ")}
                                                                onClick={() => {
                                                                    if (isKeeper) return;
                                                                    if (!isEditing(team.id, rowIndex, "price"))
                                                                        startEditCell(team.id, rowIndex, "price", row.price);
                                                                }}
                                                            >
                                                                {isEditing(team.id, rowIndex, "price") ? (
                                                                    <input ref={cellInputRef} className="db-cell-input" value={editValue}
                                                                        onChange={e => setEditValue(e.target.value)}
                                                                        onBlur={commitCellEdit} onKeyDown={handleCellKeyDown} />
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
                </div>

                <div className="ld-sidebar">
                    <div className="ld-sidebar-header">📋 Draft Log</div>
                    <div className="ld-sidebar-body">
                        {draftLog.length === 0 ? (
                            <div className="ld-sidebar-empty">No picks yet. Picks will appear here as they are made.</div>
                        ) : (
                            draftLog.map(entry => (
                                <div key={entry.id} className="ld-log-entry">
                                    <div className="ld-log-team">{entry.teamName}</div>
                                    <div className="ld-log-pick">
                                        drafted <span className="ld-log-player">{entry.playerName}</span>
                                    </div>
                                    <div className="ld-log-meta">
                                        {entry.position}
                                        {entry.price ? ` • $${entry.price}` : ""}
                                        {" • "}{entry.timestamp}
                                    </div>
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
                            <span className="ld-popup-team-label">
                                {teams.find(t => t.id === draftPopup.teamId)?.name}
                            </span>
                        </div>

                        <div className="db-suggestions-wrap">
                            <input
                                ref={popupPlayerRef}
                                className="draft-popup-input"
                                placeholder="Search player..."
                                value={draftPopup.playerName}
                                onChange={e => {
                                    const val = e.target.value;
                                    const q = val.toLowerCase();
                                    setDraftPopup(prev => ({ ...prev, playerName: val, playerId: null }));
                                    setSuggestions(
                                        q.length < 2 ? [] :
                                            allPlayers
                                                .filter(p => playerMatchesRowPosition(p, draftPopup.pos))
                                                .filter(p => getPlayerName(p).includes(q))
                                                .filter(p => !draftedIds.has(p.id))
                                                .slice(0, 8)
                                    );
                                }}
                            />
                            {draftPopup.price &&
                                parseFloat(draftPopup.price) > (remainingBudgets[draftPopup.teamId] ?? 0) && (
                                    <div className="ld-budget-warning"> 
                                        Exceeds remaining budget (${remainingBudgets[draftPopup.teamId]?.toFixed(0)})
                                    </div>
                                )}
                            {suggestions.length > 0 && (
                                <ul className="db-suggestions">
                                    {suggestions.map(p => (
                                        <li key={p.id} className="db-suggestion-item"
                                            onMouseDown={() => {
                                                setDraftPopup(prev => ({
                                                    ...prev,
                                                    playerName: getPlayerDisplayName(p),
                                                    playerId: p.id
                                                }));
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
                            type="number"
                            min="1"
                            value={draftPopup.price}
                            onChange={e => setDraftPopup(prev => ({ ...prev, price: e.target.value }))}
                        />

                        <div className="draft-popup-actions">
                            <button className="db-tool-btn db-tool-secondary"
                                onClick={() => { setDraftPopup(null); setSuggestions([]); }}>
                                Cancel
                            </button>
                            <button
                                className="db-tool-btn db-tool-primary"
                                disabled={
                                    !draftPopup.playerId ||
                                    !draftPopup.price ||
                                    parseFloat(draftPopup.price) > (remainingBudgets[draftPopup.teamId] ?? 0)
                                }
                                onClick={confirmDraftPopup}
                            >
                                ✓ Draft
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {endDraftConfirm && (
                <div className="draft-popup-backdrop" onClick={() => setEndDraftConfirm(false)}>
                    <div className="draft-popup draft-popup--sm" onClick={e => e.stopPropagation()}>
                        <div className="draft-popup-title">
                            🏁 End Draft?
                        </div>
                        <p className="end-draft-confirm-text">
                            All {teams.length} teams and {teams.length * POSITIONS.length} roster slots are filled.
                            This will finalize the draft and take you to the summary page.
                            <br /><br />
                            You can still return to Pre-Draft mode to make changes after.
                        </p>
                        <div className="draft-popup-actions">
                            <button
                                className="db-tool-btn db-tool-secondary"
                                onClick={() => setEndDraftConfirm(false)}
                                disabled={endingDraft}
                            >
                                Keep Drafting
                            </button>
                            <button
                                className="db-tool-btn end-draft-finalize-btn"
                                onClick={handleEndDraft}
                                disabled={endingDraft}
                            >
                                {endingDraft ? "Saving..." : "✓ Finalize Draft"}
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
                    try {
                        await removeTeam(teamDeleteTarget.id);
                        setTeamDeleteTarget(null);
                    } catch (err) {
                        console.error("Failed to delete team:", err);
                        alert("Error deleting team.");
                    }
                }}
            />

            <PositionPlayersModal
                isOpen={!!selectedPosition}
                onClose={() => setSelectedPosition(null)}
                position={selectedPosition}
                players={allPlayers.filter(p => playerMatchesRowPosition(p, selectedPosition ?? ""))}
                draftedIds={draftedIds}
            />
        </div>
    );
}
