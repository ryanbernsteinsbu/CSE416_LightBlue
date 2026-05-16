'use client';
import React, { useEffect, useState } from "react";
import { getRankedPlayers, getDynamicRankedPlayers } from "../lib/api";

// RANKING FUNCTION
export async function rankPlayers(players) {
    try {
        const response = await getRankedPlayers();

        if (!response?.data) {
            console.error("Ranking API failed:", response);
            return players;
        }

        const rankData = Array.isArray(response.data)
            ? response.data
            : Object.values(response.data);

        console.log("Sample rank entry:", rankData[0]);

        const rankMap = new Map(rankData.map(r => [String(r.mlbPlayerId), { rank: r.rank, cost: r.cost }]));
        console.log("Ohtani rank:", rankMap.get(String(players.find(p => p.lastName === "Ohtani")?.mlbPlayerId)));
        console.log("Jorge Alfaro rank:", rankMap.get(String(players.find(p => p.lastName === "Alfaro")?.mlbPlayerId)));

        const sorted = [...players]
            .map(p => ({
                ...p,
                rank: rankMap.get(String(p.mlbPlayerId))?.rank ?? Number.POSITIVE_INFINITY,
                cost: rankMap.get(String(p.mlbPlayerId))?.cost ?? null,
            }))
            .sort((a, b) => b.rank - a.rank);

        return sorted;
    } catch (err) {
        console.error("Error fetching ranked players:", err?.response?.data || err.message);
        return players;
    }
}

// DYNAMIC RANKING FUNCTION
export async function dynamicRankPlayers(players, league) {
    try {
        const response = await getDynamicRankedPlayers(league);

        if (!response?.data) {
            console.error("Dynamic Ranking API failed:", response);
            return players;
        }

        const rankData = Array.isArray(response.data)
            ? response.data
            : Object.values(response.data);

        const rankMap = new Map(rankData.map(r => [String(r.mlbPlayerId), { rank: r.rank, cost: r.cost }]));
        console.log("Ohtani rank:", rankMap.get(String(players.find(p => p.lastName === "Ohtani")?.mlbPlayerId)));
        console.log("Jorge Alfaro rank:", rankMap.get(String(players.find(p => p.lastName === "Alfaro")?.mlbPlayerId)));

        const sorted = [...players]
            .map(p => ({
                ...p,
                rank: rankMap.get(String(p.mlbPlayerId))?.rank ?? Number.POSITIVE_INFINITY,
                cost: rankMap.get(String(p.mlbPlayerId))?.cost ?? null,
            }))
            .sort((a, b) => b.rank - a.rank);

        return sorted;
    } catch (err) {
        console.error("Error fetching ranked players:", err?.response?.data || err.message);
        return players;
    }
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

export function PositionPlayersModal({ isOpen, onClose, position, players, draftedIds = new Set(), league }) {
    const [visible, setVisible] = useState(false);
    const [ranked, setRanked] = useState([]);

    useEffect(() => {
        if (isOpen) setTimeout(() => setVisible(true), 10);
        else setVisible(false);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !players?.length) return;

        const ranking = league ? dynamicRankPlayers(players, league) : rankPlayers(players);
        console.log("players passed in:", players);
        console.log("Sample player:", players[0]);
        ranking.then(result => setRanked(result.slice(0, 10)));
    }, [isOpen, players, league]);

    if (!isOpen) return null;

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
                    <div style={{ display: "flex", gap: "32px" }}>
                        <span>$</span>
                        <span>TEAM</span>
                    </div>
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

                                    {/* Cost + Team */}
                                    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
                                        <span className="ppm-cost">
                                            {p.cost != null ? `$${p.cost}` : "—"}
                                        </span>
                                        <span className="ppm-team">
                                            {p.realTeam ?? p.real_team ?? "—"}
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}