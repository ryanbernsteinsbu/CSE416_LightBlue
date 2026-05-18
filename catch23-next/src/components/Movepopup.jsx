'use client';
import React, { useEffect, useState } from "react";
import { playerMatchesRowPosition } from "./PositionPlayersModal";

export function MovePopup({
    movePopup,
    teams,
    POSITIONS,
    onConfirm,
    onClose,
    remainingBudgets,
    budget,
    slotsMode = false,   // true for minor league / taxi — skips keeper & position filters
}) {
    const defaultTeamId = teams.find(t => t.id !== movePopup.fromTeamId)?.id ?? movePopup.fromTeamId;
    const [toTeamId, setToTeamId] = useState(defaultTeamId);

    const destTeam = teams.find(t => t.id === Number(toTeamId));

    const compatibleRows = destTeam
        ? destTeam.rows
            .map((r, i) => ({ ...r, i, pos: POSITIONS[i] }))
            // never show the source slot when moving within the same team
            .filter(r => !(r.i === movePopup.fromRowIndex && Number(toTeamId) === movePopup.fromTeamId))
            // keeper check — skip entirely in slots mode (no keepers in taxi / minor league)
            .filter(r => {
                if (slotsMode) return true;
                const isKeeperSlot = r.player_id && !r.draft_time;
                return !isKeeperSlot;
            })
            // position check — skip in slots mode so any player can go to any slot
            .filter(r => {
                if (slotsMode) return true;
                return movePopup.playerObj
                    ? playerMatchesRowPosition(movePopup.playerObj, POSITIONS[r.i])
                    : true;
            })
        : [];

    const [toRowIndex, setToRowIndex] = useState(compatibleRows[0]?.i ?? 0);

    useEffect(() => {
        if (compatibleRows.length > 0 && !compatibleRows.some(r => r.i === toRowIndex)) {
            setToRowIndex(compatibleRows[0].i);
        }
    }, [toTeamId, compatibleRows, toRowIndex]);

    const isSameTeam = Number(toTeamId) === movePopup.fromTeamId;
    const destSlotPrice = parseFloat(compatibleRows.find(r => r.i === toRowIndex)?.price) || 0;
    const movingPrice = parseFloat(movePopup.price) || 0;
    const netCostToDest = movingPrice - destSlotPrice;
    const destRemaining = remainingBudgets?.[Number(toTeamId)] ?? Infinity;
    const wouldOverBudget = !isSameTeam && budget != null && netCostToDest > destRemaining;

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
                            onChange={e => setToTeamId(Number(e.target.value))}
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
                                No eligible slots on this team.
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