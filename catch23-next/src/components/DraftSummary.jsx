'use client';
import React, { useEffect, useState, useMemo } from "react";
import { getLeagueTeams, getTeamDraftPicks, getTeamTaxiPicks } from "../lib/api";

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

// Matches the simple enum used by all draft boards
const positionToEnum = (pos) => {
    const map = {
        C: "CATCHER",
        "1B": "FIRST",
        "2B": "SECOND",
        "3B": "THIRD",
        SS: "SHORTSTOP",
        CI: "CORNER",
        MI: "MIDDLE",
        OF: "OUTFIELD",
        U: "UTILITY",
        P: "PITCHER",
    };
    return map[pos] || pos;
};

export default function DraftSummary({ league, onBack, onModeChange }) {
    const POSITIONS = buildPositions(league.rosterSettings);
    const NUM_TAXI  = league.rosterSettings?.numTaxi ?? 0;

    const [teams,     setTeams]     = useState([]);
    const [taxiTeams, setTaxiTeams] = useState([]);
    const [loading,   setLoading]   = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getLeagueTeams(league.id);

                //  main draft picks 
                const loaded = await Promise.all(
                    data.map(async (t) => {
                        const emptyRows = POSITIONS.map(() => ({
                            player: "", player_id: null, season: "", price: "", draft_time: ""
                        }));
                        const { data: picks } = await getTeamDraftPicks(t.id);
                        picks.forEach((pick) => {
                            // prefer slotIndex saved by the board; fall back to position match
                            const rowIndex = pick.slotIndex != null
                                ? pick.slotIndex
                                : POSITIONS.findIndex((pos, idx) =>
                                    positionToEnum(pos) === pick.rosterPosition &&
                                    !emptyRows[idx].player_id
                                );
                            if (rowIndex !== -1 && rowIndex < POSITIONS.length) {
                                emptyRows[rowIndex] = {
                                    player: pick.player
                                        ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                        : "",
                                    player_id: pick.player_id,
                                    season:     pick.season    ?? "",
                                    price:      pick.cost      ?? "",
                                    draft_time: pick.draft_time ?? "",
                                };
                            }
                        });
                        return { id: Number(t.id), name: t.name, rows: emptyRows };
                    })
                );
                setTeams(loaded);

                // taxi picks 
                if (NUM_TAXI > 0) {
                    const taxiLoaded = await Promise.all(
                        data.map(async (t) => {
                            const emptyRows = Array.from({ length: NUM_TAXI }, () => ({
                                player: "", player_id: null, season: "", price: ""
                            }));
                            try {
                                const { data: taxiPicks } = await getTeamTaxiPicks(t.id);
                                taxiPicks.forEach((pick) => {
                                    const idx = (pick.slot ?? 1) - 1;
                                    if (idx >= 0 && idx < NUM_TAXI) {
                                        emptyRows[idx] = {
                                            player: pick.player
                                                ? `${pick.player.firstName ?? ""} ${pick.player.lastName ?? ""}`.trim()
                                                : "",
                                            player_id: pick.player_id,
                                            season:    pick.season ?? "",
                                            price:     pick.cost != null ? String(parseFloat(pick.cost)) : "",
                                        };
                                    }
                                });
                            } catch { /* no taxi picks yet — fine */ }
                            return { id: Number(t.id), name: t.name, rows: emptyRows };
                        })
                    );
                    setTaxiTeams(taxiLoaded);
                }
            } catch (err) {
                console.error("Failed to load draft summary:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [league.id]);

    const draftLog = useMemo(() => {
        const entries = [];
        teams.forEach(team => {
            team.rows.forEach((row, i) => {
                if (row.player_id && row.draft_time) {
                    entries.push({
                        id:         `${team.id}-${i}`,
                        teamName:   team.name,
                        playerName: row.player,
                        position:   POSITIONS[i],
                        price:      row.price,
                        draft_time: row.draft_time,
                    });
                }
            });
        });
        return entries;
    }, [teams]);

    const teamTotals = useMemo(() => {
        const result = {};
        teams.forEach(team => {
            const spent = team.rows.reduce((sum, row) => {
                const p = parseFloat(row.price);
                return sum + (isNaN(p) ? 0 : p);
            }, 0);
            result[team.id] = {
                spent,
                remaining: (league.draftSettings?.budget ?? 0) - spent,
            };
        });
        return result;
    }, [teams]);

    const topPick = useMemo(() => {
        let top = null;
        teams.forEach(team => {
            team.rows.forEach((row, i) => {
                const price = parseFloat(row.price);
                if (row.player_id && !isNaN(price)) {
                    if (!top || price > parseFloat(top.price)) {
                        top = { ...row, teamName: team.name, position: POSITIONS[i] };
                    }
                }
            });
        });
        return top;
    }, [teams]);

    const hasTaxiPicks = useMemo(() =>
        taxiTeams.some(t => t.rows.some(r => r.player_id))
    , [taxiTeams]);

    if (loading) {
        return (
            <div className="home home-padded">
                <div className="db-empty">
                    <div className="db-empty-icon">⏳</div>
                    <div className="db-empty-title">Loading draft summary...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="home home-padded">

            <div className="db-mode-banner ds-banner-complete">
                🏆 DRAFT COMPLETE — FINAL SUMMARY
            </div>

            {/* ── header ── */}
            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Home</button>
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
                        <span className="db-stat-label">Roster Spots</span>
                    </div>
                    {topPick && (
                        <div className="db-stat">
                            <span className="db-stat-num">${topPick.price}</span>
                            <span className="db-stat-label">Top Pick</span>
                        </div>
                    )}
                </div>
            </div>

            {/*  toolbar */}
            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <span className="ds-readonly-label">
                        📖 Read-only view — draft is complete
                    </span>
                </div>
                <div className="db-toolbar-right">
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>
                        ✏️ Edit in Pre-Draft
                    </button>
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>
                        🔄 Return to Live Draft
                    </button>
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("taxi")}>Taxi Draft</button>
                    <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("minor")}>Minor League</button>
                </div>
            </div>

            {/* top pick callout */}
            {topPick && (
                <div className="ds-top-pick">
                    <span className="ds-top-pick-icon">💰</span>
                    <div>
                        <div className="ds-top-pick-label">Top Pick of the Draft</div>
                        <div className="ds-top-pick-name">
                            {topPick.player}
                            <span className="ds-top-pick-pos">{topPick.position}</span>
                            <span className="ds-top-pick-price">${topPick.price}</span>
                        </div>
                        <div className="ds-top-pick-byline">Drafted by {topPick.teamName}</div>
                    </div>
                </div>
            )}

            {/*  main draft roster cards  */}
            <div className="ds-team-grid">
                {teams.map(team => {
                    const totals = teamTotals[team.id] ?? { spent: 0, remaining: 0 };
                    return (
                        <div key={team.id} className="ds-team-card">
                            <div className="ds-team-card-header">
                                <span className="ds-team-card-name">{team.name}</span>
                                {league.draftSettings?.budget != null && (
                                    <div className="ds-team-budget-info">
                                        <span className="ds-team-spent">${totals.spent.toFixed(0)} spent</span>
                                        <span className="ds-team-total">/ ${league.draftSettings.budget}</span>
                                    </div>
                                )}
                            </div>
                            <table className="ds-roster-table">
                                <thead className="ds-roster-thead">
                                    <tr>
                                        <th className="ds-roster-th ds-roster-th-pos">POS</th>
                                        <th className="ds-roster-th">PLAYER</th>
                                        <th className="ds-roster-th ds-roster-th-price">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {POSITIONS.map((pos, i) => {
                                        const row = team.rows[i];
                                        const isKeeper = row.player_id && !row.draft_time;
                                        return (
                                            <tr key={i} className={`ds-roster-row${i % 2 !== 0 ? " ds-roster-row-alt" : ""}`}>
                                                <td className="ds-roster-td">
                                                    <span className="ds-pos-badge">{pos}</span>
                                                </td>
                                                <td className="ds-roster-td">
                                                    {row.player ? (
                                                        <span className="ds-player-name">
                                                            {row.player}
                                                            {isKeeper && <span className="ds-keeper-badge">KEEPER</span>}
                                                        </span>
                                                    ) : (
                                                        <span className="ds-player-empty">—</span>
                                                    )}
                                                </td>
                                                <td className="ds-roster-td">
                                                    {row.price
                                                        ? <span className="ds-price-value">${row.price}</span>
                                                        : <span className="ds-price-empty">—</span>
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>

            {/* taxi draft summary */}
            {NUM_TAXI > 0 && hasTaxiPicks && (
                <>
                    <div className="ds-timeline-title" style={{ marginBottom: 14 }}>
                        🚕 Taxi Draft Rosters
                    </div>
                    <div className="ds-team-grid" style={{ marginBottom: 36 }}>
                        {taxiTeams.map(team => (
                            <div key={team.id} className="ds-team-card">
                                <div className="ds-team-card-header">
                                    <span className="ds-team-card-name">{team.name}</span>
                                    <span style={{ fontSize: "0.75rem", color: "#888" }}>
                                        {team.rows.filter(r => r.player_id).length}/{NUM_TAXI} filled
                                    </span>
                                </div>
                                <table className="ds-roster-table">
                                    <thead className="ds-roster-thead">
                                        <tr>
                                            <th className="ds-roster-th ds-roster-th-pos">SLOT</th>
                                            <th className="ds-roster-th">PLAYER</th>
                                            <th className="ds-roster-th ds-roster-th-price">PRICE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {team.rows.map((row, i) => (
                                            <tr key={i} className={`ds-roster-row${i % 2 !== 0 ? " ds-roster-row-alt" : ""}`}>
                                                <td className="ds-roster-td">
                                                    <span className="ds-pos-badge">{i + 1}</span>
                                                </td>
                                                <td className="ds-roster-td">
                                                    {row.player
                                                        ? <span className="ds-player-name">{row.player}</span>
                                                        : <span className="ds-player-empty">—</span>
                                                    }
                                                </td>
                                                <td className="ds-roster-td">
                                                    {row.price
                                                        ? <span className="ds-price-value">${row.price}</span>
                                                        : <span className="ds-price-empty">—</span>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* draft order timeline */}
            {draftLog.length > 0 && (
                <div className="ds-timeline">
                    <div className="ds-timeline-title">📋 Draft Order Timeline</div>
                    <div className="ds-timeline-body">
                        {draftLog.map((entry, idx) => (
                            <div
                                key={entry.id}
                                className={`ds-timeline-entry${idx % 2 !== 0 ? " ds-timeline-entry-alt" : ""}`}
                            >
                                <span className="ds-log-num">#{idx + 1}</span>
                                <span className="ds-log-pos">{entry.position}</span>
                                <span className="ds-log-player">{entry.playerName}</span>
                                <span className="ds-log-team">{entry.teamName}</span>
                                {entry.price && <span className="ds-log-price">${entry.price}</span>}
                                <span className="ds-log-time">{entry.draft_time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}