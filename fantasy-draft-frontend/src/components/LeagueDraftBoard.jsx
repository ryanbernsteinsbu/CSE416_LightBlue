import { useState, useRef } from "react";

// 24 positions from the excel sheet (non-editable, fixed rows)
const POSITIONS = [
    "C", "C", "1B", "3B", "CI", "2B", "SS", "MI",
    "OF", "OF", "OF", "OF", "OF", "OF", "U",
    "P", "P", "P", "P", "P", "P", "P", "P", "P"
];

function makeEmptyTeam(index) {
    return {
        id: crypto.randomUUID(),
        name: `Team ${index + 1}`,
        rows: POSITIONS.map(() => ({ player: "", season: "", price: "" }))
    };
}

export default function LeagueDraftBoard({ league, onBack }) {
    const [teams, setTeams] = useState([]);
    const [editingCell, setEditingCell] = useState(null); // { teamId, rowIndex, field }
    const [editValue, setEditValue] = useState("");
    const [editingTeamId, setEditingTeamId] = useState(null);
    const [editTeamValue, setEditTeamValue] = useState("");

    const cellInputRef = useRef(null);
    const teamInputRef = useRef(null);

    // team management

    const addTeam = () => {
        const newTeam = makeEmptyTeam(teams.length);
        setTeams(prev => [...prev, newTeam]);
        setTimeout(() => {
            setEditingTeamId(newTeam.id);
            setEditTeamValue(newTeam.name);
            setTimeout(() => teamInputRef.current?.focus(), 0);
        }, 0);
    };

    const removeTeam = (teamId) => {
        setTeams(prev => prev.filter(t => t.id !== teamId));
    };

    // team name editing 

    const startEditTeam = (team) => {
        setEditingTeamId(team.id);
        setEditTeamValue(team.name);
        setTimeout(() => teamInputRef.current?.focus(), 0);
    };

    const commitTeamEdit = () => {
        if (!editingTeamId) return;
        setTeams(prev => prev.map(t =>
            t.id === editingTeamId
                ? { ...t, name: editTeamValue.trim() || t.name }
                : t
        ));
        setEditingTeamId(null);
        setEditTeamValue("");
    };

    const handleTeamKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitTeamEdit(); }
        if (e.key === "Escape") { setEditingTeamId(null); setEditTeamValue(""); }
    };

    // cell editing 

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
            const newRows = t.rows.map((row, i) =>
                i === rowIndex ? { ...row, [field]: editValue } : row
            );
            return { ...t, rows: newRows };
        }));
        setEditingCell(null);
        setEditValue("");
    };

    const handleCellKeyDown = (e) => {
        if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); commitCellEdit(); }
        if (e.key === "Escape") { setEditingCell(null); setEditValue(""); }
    };

    const isEditing = (teamId, rowIndex, field) =>
        editingCell?.teamId === teamId &&
        editingCell?.rowIndex === rowIndex &&
        editingCell?.field === field;

    return (
        <div className="home" style={{ paddingTop: 80 }}>

            {/* Page header */}
            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.name || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {league?.format} • {league?.teams} TEAMS • {league?.season} SEASON
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

            {/* Toolbar */}
            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <button className="db-tool-btn db-tool-primary" onClick={addTeam}>
                        + Add Team
                    </button>
                </div>
                <div className="db-toolbar-right">
                    {teams.length > 0 && (
                        <span className="db-progress-label">
                            Click any cell to edit • Click team name to rename
                        </span>
                    )}
                </div>
            </div>

            {/* Draft Board Table */}
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
                                {/* Row 1: team name spanning 3 sub-columns */}
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
                                                    onClick={() => removeTeam(team.id)}
                                                    title="Remove team"
                                                >×</button>
                                            </div>
                                        </th>
                                    ))}
                                </tr>

                                {/* Row 2: sub-column headers */}
                                <tr>
                                    {teams.map(team => (
                                        <>
                                            <th key={`${team.id}-p`}  className="db-th db-th-sub">PLAYER</th>
                                            <th key={`${team.id}-s`}  className="db-th db-th-sub db-th-narrow">SEASON</th>
                                            <th key={`${team.id}-pr`} className="db-th db-th-sub db-th-narrow">PRICE</th>
                                        </>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {POSITIONS.map((pos, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={rowIndex % 2 === 0 ? "db-row" : "db-row db-row-alt"}
                                    >
                                        {/* sticky non-editable position label */}
                                        <td className="db-td db-td-pos db-sticky-col">{pos}</td>

                                        {/* inline cell rendering — no nested component so typing works */}
                                        {teams.map(team => {
                                            const row = team.rows[rowIndex];
                                            return (
                                                <>
                                                    {/* PLAYER */}
                                                    <td
                                                        key={`${team.id}-player-${rowIndex}`}
                                                        className={[
                                                            "db-td db-td-pick",
                                                            isEditing(team.id, rowIndex, "player") ? "db-td-editing" : "",
                                                            row.player ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() => !isEditing(team.id, rowIndex, "player") && startEditCell(team.id, rowIndex, "player", row.player)}
                                                    >
                                                        {isEditing(team.id, rowIndex, "player") ? (
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
                                                                {row.player || <span className="db-cell-empty">—</span>}
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* SEASON */}
                                                    <td
                                                        key={`${team.id}-season-${rowIndex}`}
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isEditing(team.id, rowIndex, "season") ? "db-td-editing" : "",
                                                            row.season ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() => !isEditing(team.id, rowIndex, "season") && startEditCell(team.id, rowIndex, "season", row.season)}
                                                    >
                                                        {isEditing(team.id, rowIndex, "season") ? (
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
                                                                {row.season || <span className="db-cell-empty">—</span>}
                                                            </span>
                                                        )}
                                                    </td>

                                                    {/* PRICE */}
                                                    <td
                                                        key={`${team.id}-price-${rowIndex}`}
                                                        className={[
                                                            "db-td db-td-pick db-td-narrow",
                                                            isEditing(team.id, rowIndex, "price") ? "db-td-editing" : "",
                                                            row.price ? "db-td-filled" : ""
                                                        ].join(" ")}
                                                        onClick={() => !isEditing(team.id, rowIndex, "price") && startEditCell(team.id, rowIndex, "price", row.price)}
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
                                                </>
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
    );
}