'use client';

import { useEffect, useState } from "react";
import { queryPlayers } from "../lib/api";
import { PlayerProfileModal } from "./PlayerProfileModal";
import { PlayerCompareModal } from "./PlayerCompareModal";
import TeamDepthChart from "./TeamDepthChart";

// Column definitions

const BASE_COLUMNS = [
  { key: "name", label: "PLAYER",  sortable: true },
  { key: "team", label: "TEAM",    sortable: true },
  { key: "pos",  label: "POS",     sortable: true },
  { key: "age",  label: "AGE",     sortable: true },
];

const HITTING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "HR",  label: "HR",  sortable: true, stat: "HR"  },
  { key: "RBI", label: "RBI", sortable: true, stat: "RBI" },
  { key: "SB",  label: "SB",  sortable: true, stat: "SB"  },
  { key: "R",   label: "R",   sortable: true, stat: "R"   },
  { key: "AVG", label: "AVG", sortable: true, stat: "AVG", format: "avg" },
  { key: "OBP", label: "OBP", sortable: true, stat: "OBP", format: "avg" },
];

const PITCHING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "W",    label: "W",    sortable: true, stat: "W"    },
  { key: "SV",   label: "SV",   sortable: true, stat: "SV"   },
  { key: "SO",   label: "SO",   sortable: true, stat: "SO"   },
  { key: "ERA",  label: "ERA",  sortable: true, stat: "ERA",  format: "era"  },
  { key: "BB",   label: "BB",   sortable: true, stat: "BB"   },
  { key: "WHIP", label: "WHIP", sortable: true, stat: "WHIP", format: "whip" },
];

// Component

export default function PlayerInformation() {
  // view: "table" | "depth"
  const [view, setView] = useState("table");

  // table-specific state
  const [mode,   setMode]   = useState(null);   // "hitting" | "pitching" | null
  const [minors, setMinors] = useState(false);

  const [nameQuery, setNameQuery] = useState("");
  const [teamQuery, setTeamQuery] = useState("");
  const [posQuery,  setPosQuery]  = useState("");

  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");

  const [page,     setPage]     = useState(1);
  const [pageSize, setPageSize] = useState(50);

  const [selectedPlayer,  setSelectedPlayer]  = useState(null);
  const [compareOpen,     setCompareOpen]     = useState(false);
  const [compareSelected, setCompareSelected] = useState([]);

  const [players,      setPlayers]      = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [totalPlayers, setTotalPlayers] = useState(null);

  const columns = mode === "pitching" ? PITCHING_COLUMNS : HITTING_COLUMNS;

  useEffect(() => {
    if (view !== "table") return;
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const { data } = await queryPlayers(
          nameQuery, posQuery, teamQuery,
          sortKey, sortDir === "asc",
          mode !== "pitching",
          page, pageSize, minors
        );
        const mapped = data.players.map(p => ({
          id:        p.id,
          mlbID:     p.mlbPlayerId,
          firstName: p.firstName || p.first_name,
          lastName:  p.lastName  || p.last_name,
          team:      p.realTeam  || p.real_team,
          pos:       p.playablePositions?.[0] || "—",
          depth:     p.depth ?? null,
          age:       p.age   ?? "—",
          stats: {
            HR:0, RBI:0, SB:0, AVG:0, R:0, OBP:0,
            W:0, SV:0, K:0, ERA:0, WHIP:0,
            ...p.lastYearStats,
          },
        }));
        setPlayers(mapped);
        setTotalPlayers(data.total);
      } catch (err) {
        console.error("Failed to fetch players:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, [view, nameQuery, posQuery, teamQuery, sortKey, sortDir, mode, page, pageSize, minors]);

  const pageCount = totalPlayers == null ? 1 : Math.max(1, Math.ceil(totalPlayers / pageSize));
  const safePage  = Math.min(Math.max(1, page), pageCount);

  const handleHeader = (col) => {
    setSortKey(col.key);
    setSortDir(sortKey === col.key && sortDir === "asc" ? "desc" : "asc");
    setPage(1);
  };

  const switchMode = (next) => {
    setMode(prev => prev === next ? null : next);
    setSortKey("name");
    setSortDir("asc");
    setPage(1);
  };

  const switchView = (next) => {
    setView(next);
    // close compare when switching to depth
    if (next === "depth") {
      setCompareOpen(false);
      setCompareSelected([]);
    }
  };

  const addPlayer = (player) => {
    if (!compareOpen) return;
    if (compareSelected.find(p => p.id === player.id)) {
      setCompareSelected(prev => prev.filter(p => p.id !== player.id));
      return;
    }
    if (compareSelected.length >= 4) return;
    setCompareSelected(prev => [...prev, player]);
  };

  const closeCompare = () => {
    setCompareOpen(false);
    setCompareSelected([]);
  };

  const clearFilters = () => {
    setNameQuery(""); setTeamQuery(""); setPosQuery("");
    setMode(null); setPage(1); setMinors(false);
  };

  return (
    <div className="pi-page">
      <div className="pi-wrap">

        {/* ── Header ── */}
        <div className="pi-header">
          <div className="pi-titleRow">
            <h1 className="pi-title">Player Information</h1>

            <div className="pi-tabs">
              {/* View toggle: Players vs Depth Charts */}
              <button
                className={`pi-tab pi-tab--view ${view === "table" ? "is-active" : ""}`}
                type="button"
                onClick={() => switchView("table")}
              >
                Players
              </button>
              <button
                className={`pi-tab pi-tab--view ${view === "depth" ? "is-active" : ""}`}
                type="button"
                onClick={() => switchView("depth")}
              >
                📋 Depth Charts
              </button>

              {/* Table-only filters — hidden in depth view */}
              {view === "table" && (
                <>
                  <div className="pi-tab-divider" />
                  <button
                    className={`pi-tab ${minors ? "is-active" : ""}`}
                    onClick={() => setMinors(v => !v)}
                    type="button"
                  >
                    Minors
                  </button>
                  {["hitting", "pitching"].map(t => (
                    <button
                      key={t}
                      className={`pi-tab ${mode === t ? "is-active" : ""}`}
                      onClick={() => switchMode(t)}
                      type="button"
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                  <button
                    className={`pi-tab ${compareOpen ? "is-active" : ""}`}
                    type="button"
                    onClick={() => compareOpen ? closeCompare() : setCompareOpen(true)}
                  >
                    Compare
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Filters row — only in table view */}
          {view === "table" && (
            <div className="pi-filters">
              <input
                className="pi-input"
                placeholder="Player"
                value={nameQuery}
                onChange={e => { setNameQuery(e.target.value); setPage(1); }}
              />
              <input
                className="pi-input"
                placeholder="Team"
                value={teamQuery}
                onChange={e => { setTeamQuery(e.target.value); setPage(1); }}
              />
              <input
                className="pi-input"
                placeholder="Position"
                value={posQuery}
                onChange={e => { setPosQuery(e.target.value); setPage(1); }}
              />
              <button className="pi-btn pi-btn--ghost" type="button" onClick={clearFilters}>
                Clear
              </button>
              <label className="pi-rows">
                Rows
                <select
                  className="pi-select"
                  value={pageSize}
                  onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
                >
                  {[10, 25, 50].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
            </div>
          )}
        </div>

        {/* ── Depth chart view ── */}
        {view === "depth" && <TeamDepthChart />}

        {/* ── Player table view ── */}
        {view === "table" && (
          <>
            {loading ? (
              <div className="pi-tableCard">
                <div className="pi-empty">Loading players...</div>
              </div>
            ) : (
              <div className="pi-tableCard">
                <div className="pi-tableScroll">
                  <table className="pi-table">
                    <thead>
                      <tr>
                        {columns.map(col => (
                          <th
                            key={col.key}
                            className={`pi-th ${col.sortable ? "is-sortable" : ""}`}
                            onClick={() => handleHeader(col)}
                          >
                            <span className="pi-thInner">
                              {col.label}
                              {sortKey === col.key ? (
                                <span className="pi-sortIcon">{sortDir === "asc" ? "▲" : "▼"}</span>
                              ) : (
                                <span className="pi-sortIcon pi-sortIcon--muted">▲</span>
                              )}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {players.length === 0 ? (
                        <tr>
                          <td className="pi-empty" colSpan={columns.length}>No results.</td>
                        </tr>
                      ) : (
                        players.map(p => (
                          <tr key={p.id} className="pi-row">
                            {columns.map(col => {
                              if (col.key === "name") {
                                return (
                                  <td key={col.key} className="pi-td">
                                    <div
                                      className="tooltip-wrap tooltip-top"
                                      data-tip="More details"
                                      style={{ display: "inline-block" }}
                                    >
                                      <span
                                        onClick={() => {
                                          if (!compareOpen) setSelectedPlayer(p);
                                          addPlayer(p);
                                        }}
                                        style={{ cursor: "pointer", color: "#e03030", fontWeight: "bold" }}
                                      >
                                        {p.firstName} {p.lastName}
                                      </span>
                                    </div>
                                  </td>
                                );
                              }
                              const val = col.stat ? (p.stats?.[col.stat] ?? "—") : (p[col.key] ?? "—");
                              return <td key={col.key} className="pi-td">{val}</td>;
                            })}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Pager */}
            <div className="pi-pager">
              <div className="pi-pagerInfo">
                Showing{" "}
                <b>
                  {players.length === 0 ? 0 : (safePage - 1) * pageSize + 1}–
                  {(safePage - 1) * pageSize + players.length}
                </b>{" "}
                of <b>{totalPlayers}</b>
              </div>
              <div className="pi-pagerBtns">
                {[["⟪", 1], ["‹", safePage - 1], ["›", safePage + 1], ["⟫", pageCount]].map(
                  ([label, target]) => (
                    <button
                      key={label}
                      className="pi-btn pi-btn--page"
                      type="button"
                      onClick={() => setPage(target)}
                      disabled={target < 1 || target > pageCount || target === safePage}
                    >
                      {label}
                    </button>
                  )
                )}
                <span className="pi-pageText">
                  Page <b>{safePage}</b> / <b>{pageCount}</b>
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <PlayerProfileModal
        isOpen={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        player={selectedPlayer ? {
          id:       selectedPlayer.id,
          mlbID:    selectedPlayer.mlbID,
          username: `${selectedPlayer.firstName} ${selectedPlayer.lastName}`,
          role:     selectedPlayer.pos,
          team:     selectedPlayer.team,
          depth:    selectedPlayer.depth,
          stats:    selectedPlayer.stats,
        } : null}
      />

      <PlayerCompareModal
        isOpen={compareOpen}
        selected={compareSelected}
        mode={mode}
        onRemove={id => setCompareSelected(prev => prev.filter(p => p.id !== id))}
        onClose={closeCompare}
      />
    </div>
  );
}