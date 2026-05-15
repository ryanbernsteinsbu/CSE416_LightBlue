'use client';
import React, { useState } from "react";
import { playerMatchesRowPosition } from "./PositionPlayersModal";

export function MovePopup({ movePopup, teams, POSITIONS, onConfirm, onClose, remainingBudgets, budget }) {
    const defaultTeamId = teams.find(t => t.id !== movePopup.fromTeamId)?.id ?? movePopup.fromTeamId;
    const [toTeamId, setToTeamId] = useState(defaultTeamId);
    const [toRowIndex, setToRowIndex] = useState(0);

    const destTeam = teams.find(t => t.id === Number(toTeamId));

    const compatibleRows = destTeam
        ? destTeam.rows
            .map((r, i) => ({ ...r, i, pos: POSITIONS[i] }))
            .filter(r => !(r.i === movePopup.fromRowIndex && Number(toTeamId) === movePopup.fromTeamId))
            .filter(r =>
                movePopup.playerObj
                    ? playerMatchesRowPosition(movePopup.playerObj, POSITIONS[r.i])
                    : true
            )
        : [];

    // Budget check (only applies to cross-team moves)
    const isSameTeam = Number(toTeamId) === movePopup.fromTeamId;
    const destSlotPrice = parseFloat(compatibleRows.find(r => r.i === toRowIndex)?.price) || 0;
    const movingPrice = parseFloat(movePopup.price) || 0;
    const netCostToDest = movingPrice - destSlotPrice; // displaced player's price offsets the cost
    const destRemaining = remainingBudgets?.[Number(toTeamId)] ?? Infinity;
    const wouldOverBudget = !isSameTeam && budget != null && netCostToDest > destRemaining;

    const handleTeamChange = (e) => {
        setToTeamId(Number(e.target.value));
        setToRowIndex(0);
    };

    return (
        <div className="draft-popup-backdrop" onClick={onClose}>
            <div className="draft-popup draft-popup--sm" onClick={e => e.stopPropagation()}>
                <div className="draft-popup-title">
                    Move — <span className="ds-top-pick-pos">{movePopup.player}</span>
                </div>

                <div className="move-popup-fields">
                    <label className="move-popup-label">
                        Destination Team
                        <select
                            className="move-popup-select"
                            value={toTeamId}
                            onChange={handleTeamChange}
                        >
                            {teams.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}{t.id === movePopup.fromTeamId ? " (same team)" : ""}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="move-popup-label">
                        Destination Slot
                        {compatibleRows.length === 0 ? (
                            <div className="move-popup-no-slots">
                                No eligible slots on this team for this player's position.
                            </div>
                        ) : (
                            <select
                                className="move-popup-select"
                                value={toRowIndex}
                                onChange={e => setToRowIndex(Number(e.target.value))}
                            >
                                {compatibleRows.map(r => (
                                    <option key={r.i} value={r.i}>
                                        {POSITIONS[r.i]}{r.player ? ` — ${r.player} (swap)` : " — empty"}
                                    </option>
                                ))}
                            </select>
                        )}
                    </label>

                    {wouldOverBudget && (
                        <div className="ld-budget-warning">
                            This move would put {destTeam?.name} over budget — they only have ${destRemaining.toFixed(0)} remaining.
                        </div>
                    )}
                </div>

                <div className="draft-popup-actions">
                    <button className="db-tool-btn db-tool-secondary" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="db-tool-btn db-tool-primary"
                        disabled={compatibleRows.length === 0 || wouldOverBudget}
                        onClick={() => onConfirm(Number(toTeamId), toRowIndex)}
                    >
                        ✓ Move
                    </button>
                </div>
            </div>
        </div>
    );
}