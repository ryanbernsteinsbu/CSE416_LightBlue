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
            <div
                onClick={onClose}
                style={{
                    position: "fixed", inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 999,
                }}
            />

            {/* Panel */}
            <div style={{
                position: "fixed",
                top: 0, right: 0, bottom: 0,
                width: "50%",
                background: "#3d4a8a",
                border: "3px solid #5060b0",
                borderRight: "none",
                borderRadius: "16px 0 0 16px",
                zIndex: 1000,
                transform: visible ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
                display: "flex",
                flexDirection: "column",
                fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                overflowY: "auto",
            }}>

                {/* Header */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "24px 28px",
                    borderBottom: "2px solid #5060b0",
                }}>
                    <div>
                        <span style={{ fontSize: "26px", letterSpacing: "0.08em", color: "#fff" }}>
                            TOP AVAILABLE
                        </span>
                        <span style={{
                            marginLeft: "12px", fontSize: "26px",
                            letterSpacing: "0.08em", color: "#e03030"
                        }}>
                            {POSITION_LABELS[position] ?? position}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: "#2e3a7a", border: "none", borderRadius: "8px",
                            color: "#fff", width: "36px", height: "36px",
                            fontSize: "18px", cursor: "pointer",
                            fontFamily: "sans-serif",
                        }}
                        onMouseEnter={e => e.target.style.background = "#3a4890"}
                        onMouseLeave={e => e.target.style.background = "#2e3a7a"}
                    >
                        ✕
                    </button>
                </div>

                {/* Column labels */}
                <div style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "10px 28px",
                    borderBottom: "1px solid #5060b0",
                    fontSize: "11px", color: "#aab0d0", letterSpacing: "0.1em",
                }}>
                    <span>PLAYER</span>
                    <span>TEAM</span>
                </div>

                {/* Player rows */}
                <div style={{ padding: "8px 0", display: "flex", flexDirection: "column" }}>
                    {ranked.length === 0 ? (
                        <div style={{ padding: "24px 28px", color: "#aab0d0", fontSize: "14px" }}>
                            No available players for this position.
                        </div>
                    ) : (
                        ranked.map((p, i) => {
                            const isDrafted = draftedIds.has(p.id);
                            const fullName = `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim();
                            return (
                                <div
                                    key={p.id}
                                    style={{
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "12px 28px",
                                        borderBottom: "1px solid #5060b0",
                                        opacity: isDrafted ? 0.4 : 1,
                                    }}
                                >
                                    {/* Rank + Name */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                        <span style={{
                                            fontSize: "13px", color: "#aab0d0",
                                            minWidth: "22px", textAlign: "right"
                                        }}>
                                            {i + 1}
                                        </span>
                                        <div>
                                            <div style={{
                                                fontSize: "18px", color: isDrafted ? "#aab0d0" : "#fff",
                                                letterSpacing: "0.05em"
                                            }}>
                                                {fullName}
                                            </div>
                                            {isDrafted && (
                                                <div style={{ fontSize: "10px", color: "#e03030", letterSpacing: "0.08em" }}>
                                                    DRAFTED
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Team */}
                                    <span style={{ fontSize: "14px", color: "#aab0d0", letterSpacing: "0.08em" }}>
                                        {p.realTeam ?? p.real_team ?? "—"}
                                    </span>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer note */}
                <div style={{
                    marginTop: "auto", padding: "16px 28px",
                    borderTop: "1px solid #5060b0",
                    fontSize: "11px", color: "#5060b0", letterSpacing: "0.08em",
                }}>
                    SORTED ALPHABETICALLY • SWAP rankPlayers() FOR SCORING EQUATION
                </div>
            </div>
        </>
    );
}