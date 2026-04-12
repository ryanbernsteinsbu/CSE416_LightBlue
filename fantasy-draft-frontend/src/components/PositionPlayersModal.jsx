import React, { useEffect, useState } from "react";

/**
 * RANKING FUNCTION — replace this later with your real scoring equation.
 * Receives the full player object and returns a numeric score (higher = better).
 */
export function rankPlayers(players) {
    // Placeholder: alphabetical by last name, then first name
    return [...players].sort((a, b) => {
        const last = (a.lastName ?? "").localeCompare(b.lastName ?? "");
        return last !== 0 ? last : (a.firstName ?? "").localeCompare(b.firstName ?? "");
    });
}

export const playerMatchesRowPosition = (player, rowPos) => {
    const positions = player?.playablePositions || [];

    if (rowPos === "C") return positions.includes("CATCHER");
    if (rowPos === "1B") return positions.includes("FIRST");
    if (rowPos === "2B") return positions.includes("SECOND");
    if (rowPos === "3B") return positions.includes("THIRD");
    if (rowPos === "SS") return positions.includes("SHORTSTOP");
    if (rowPos === "OF") return positions.includes("OUTFIELD");
    if (rowPos === "P") return positions.includes("PITCHER");
    if (rowPos === "U") return player?.isHitter === true;
    if (rowPos === "CI") return positions.includes("FIRST") || positions.includes("THIRD");
    if (rowPos === "MI") return positions.includes("SECOND") || positions.includes("SHORTSTOP");

    return false;
};

const POSITION_LABELS = {
    C: "CATCHERS",
    "1B": "FIRST BASEMEN",
    "2B": "SECOND BASEMEN",
    "3B": "THIRD BASEMEN",
    SS: "SHORTSTOPS",
    CI: "CORNER INFIELDERS",
    MI: "MIDDLE INFIELDERS",
    OF: "OUTFIELDERS",
    U: "UTILITY",
    P: "PITCHERS",
};

export function PositionPlayersModal({ isOpen, onClose, position, players, draftedIds = new Set() }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) setTimeout(() => setVisible(true), 10);
        else setVisible(false);
    }, [isOpen]);

    if (!isOpen) return null;

    const ranked = rankPlayers(players).slice(0, 10);

    return (
        <>
            {/* Backdrop */}
            <div className="ppm-backdrop" onClick={onClose} />

            {/* Panel */}
            <div className={`ppm-panel ${visible ? "ppm-panel--visible" : ""}`}>

                {/* Header */}
                <div className="ppm-header">
                    <div>
                        <span className="ppm-header-title">TOP AVAILABLE</span>
                        <span className="ppm-header-position">
                            {POSITION_LABELS[position] ?? position}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="ppm-close-btn"
                        onMouseEnter={e => e.target.style.background = "#3a4890"}
                        onMouseLeave={e => e.target.style.background = "#2e3a7a"}
                    >
                        ✕
                    </button>
                </div>

                {/* Column labels */}
                <div className="ppm-col-labels">
                    <span>PLAYER</span>
                    <span>TEAM</span>
                </div>

                {/* Player rows */}
                <div className="ppm-player-list">
                    {ranked.length === 0 ? (
                        <div className="ppm-empty">
                            No available players for this position.
                        </div>
                    ) : (
                        ranked.map((p, i) => {
                            const isDrafted = draftedIds.has(p.id);
                            const fullName = `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim();
                            return (
                                <div
                                    key={p.id}
                                    className={`ppm-player-row ${isDrafted ? "ppm-player-row--drafted" : ""}`}
                                >
                                    {/* Rank + Name */}
                                    <div className="ppm-player-left">
                                        <span className="ppm-rank">{i + 1}</span>
                                        <div>
                                            <div className={`ppm-player-name ${isDrafted ? "ppm-player-name--drafted" : ""}`}>
                                                {fullName}
                                            </div>
                                            {isDrafted && (
                                                <div className="ppm-drafted-label">DRAFTED</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Team */}
                                    <span className="ppm-team">
                                        {p.realTeam ?? p.real_team ?? "—"}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer note */}
                <div className="ppm-footer">
                    SORTED ALPHABETICALLY • SWAP rankPlayers() FOR SCORING EQUATION
                </div>
            </div>
        </>
    );
}