import { useEffect, useMemo, useState } from "react";
import { getAllPlayers } from "../api/api";

// dummy data for now
// const MOCK_PLAYERS = [
//   {
//     id: "p1",
//     firstName: "Edwin",
//     lastName: "Díaz",
//     team: "LAD",
//     pos: "RP",
//     age: 30,
//     stats: { W: 6, SV: 28, K: 98, AVG: 0.164, ERA: 1.63, WHIP: 0.87, HR: 0, RBI: 0, SB: 0, R: 0, OBP: 0.0 },
//   },
//   {
//     id: "p2",
//     firstName: "José",
//     lastName: "Ramírez",
//     team: "CLE",
//     pos: "3B",
//     age: 32,
//     stats: { HR: 30, RBI: 85, SB: 44, AVG: 0.283, R: 103, OBP: 0.36, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
//   },
//   {
//     id: "p3",
//     firstName: "Mookie",
//     lastName: "Betts",
//     team: "LAD",
//     pos: "RF",
//     age: 31,
//     stats: { HR: 22, RBI: 67, SB: 14, AVG: 0.301, R: 98, OBP: 0.392, W: 0, SV: 0, K: 0, ERA: 0.0, WHIP: 0.0 },
//   },
// ];

// Base columns (shared columns that appear both hitting and pitching views)
const BASE_COLUMNS = [
  { key: "name", label: "PLAYER", sortable: true },
  { key: "team", label: "TEAM", sortable: true },
  { key: "pos", label: "POS", sortable: true },
  { key: "age", label: "AGE", sortable: true },
];

// Hitting-specific columns
const HITTING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "HR", label: "HR", sortable: true, stat: "HR" },
  { key: "RBI", label: "RBI", sortable: true, stat: "RBI" },
  { key: "SB", label: "SB", sortable: true, stat: "SB" },
  { key: "R", label: "R", sortable: true, stat: "R" },
  { key: "AVG", label: "AVG", sortable: true, stat: "AVG", format: "avg" },
  { key: "OBP", label: "OBP", sortable: true, stat: "OBP", format: "avg" },
];

// Pitching-specific columns
const PITCHING_COLUMNS = [
  ...BASE_COLUMNS,
  { key: "W", label: "W", sortable: true, stat: "W" },
  { key: "SV", label: "SV", sortable: true, stat: "SV" },
  { key: "K", label: "K", sortable: true, stat: "K" },
  { key: "ERA", label: "ERA", sortable: true, stat: "ERA", format: "era" },
  { key: "WHIP", label: "WHIP", sortable: true, stat: "WHIP", format: "whip" },
];

// Sort helpers

// Converts any value into a number so we can sort numerically
function toNum(v) {
  const s = String(v ?? "").trim().replace(/^\./, "0.");
  const n = Number(s);
  return Number.isFinite(n) ? n : -Infinity;
}

// Returns the sortable value for a given player + column combination
// what value should I use to sort this player for this column?
function sortVal(player, col) {
  const raw = col.stat ? player.stats?.[col.stat] : player[col.key];
  if (col.key === "name" || col.key === "team" || col.key === "pos")
    return String(raw ?? "").toLowerCase(); // string sort 
  return toNum(raw); // numeric sort 
}

export default function PlayerInformation() {

  // MLB-like tabs
  const [mode, setMode] = useState("hitting") // hitting | pitching

  // search filter inputs
  const [nameQuery, setNameQuery] = useState("");
  const [teamQuery, setTeamQuery] = useState("");
  const [posQuery, setPosQuery] = useState("");

  // which column is currently sorted, and in which direction
  const [sortKey, setSortKey] = useState("name")
  const [sortDir, setSortDir] = useState("asc")

  // current page number, and how many rows to show per page
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // pick the right column set based on the active tab 
  const columns = mode === "hitting" ? HITTING_COLUMNS : PITCHING_COLUMNS;

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data } = await getAllPlayers();
        // map DB fields to what the component expects
        const mapped = data.map(p => ({
          id: p.id,
          firstName: p.firstName || p.first_name,
          lastName: p.lastName || p.last_name,
          team: p.realTeam || p.real_team,
          pos: p.playablePositions?.[0] || "—",
          age: "—",  // not in DB yet
          stats: {
            HR: 0, RBI: 0, SB: 0, AVG: 0, R: 0, OBP: 0,
            W: 0, SV: 0, K: 0, ERA: 0, WHIP: 0,
            ...p.lastYearStats
          }
        }));
        setPlayers(mapped);
      } catch (err) {
        console.error("Failed to fetch players:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  // returns only te players that match all active filter inputs 
  // Note: useMemo only re-runs when nameQuery or posQuery changes, not on every single render
  const filtered = useMemo(() =>
    players.filter((p) =>
      (!nameQuery || `${p.firstName} ${p.lastName}`.toLowerCase().includes(nameQuery.toLowerCase())) &&
      (!teamQuery || p.team?.toLowerCase().includes(teamQuery.toLowerCase())) &&
      (!posQuery || p.pos?.toLowerCase().includes(posQuery.toLowerCase()))
    ), [players, nameQuery, teamQuery, posQuery]);
  // Sort

  // takes the filtered array and returns a new sorted copy 
  const sorted = useMemo(() => {
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return filtered;
    // converts sort direction into a number you can multiply with
    const dir = sortDir === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      const va = sortVal(a, col), vb = sortVal(b, col);
      // alphabetically compare strings (asc v desc)
      if (typeof va === "string") return va.localeCompare(vb) * dir;
      // compare numbers (asc v desc)
      return (va - vb) * dir;
    });
  }, [filtered, columns, sortKey, sortDir]);

  // Pagination

  // total number of pages based on how many players passed filtering
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  // clamp page to a valid range (prevents being stuck on page 5 if filters reduce results to 1 page)
  const safePage = Math.min(Math.max(1, page), pageCount);
  // slice just the rows for the current page to render in the table
  const pageRows = sorted.slice((safePage - 1) * pageSize, safePage * pageSize);


  // Event Handlers

  // called when the user clicks a column eader to sort it
  const handleHeader = (col) => {
    setSortKey(col.key);
    setSortDir(sortKey === col.key && sortDir === "asc" ? "desc" : "asc");
    setPage(1);
  };

  // called when the user switches between Hitting and Pitching tabs.
  // resets sort and page so the new tab starts in a clean state.
  const switchTab = (next) => {
    setMode(next);
    setSortKey("name");
    setSortDir("asc");
    setPage(1);
  }

  return (
    <div className="pi-page">
      <div className="pi-wrap">
        <div className="pi-header">
          <div className="pi-titleRow">
            <h1 className="pi-title">Player Information</h1>

            <div className="pi-tabs">
              {["hitting", "pitching"].map((t) => (
                <button
                  key={t}
                  className={`pi-tab ${mode === t ? "is-active" : ""}`}
                  onClick={() => switchTab(t)}
                  type="button"
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="pi-filters">
            <input
              className="pi-input"
              placeholder="Player"
              value={nameQuery}
              onChange={(e) => { setNameQuery(e.target.value); setPage(1); }}
            />
            <input
              className="pi-input"
              placeholder="Team"
              value={teamQuery}
              onChange={(e) => { setTeamQuery(e.target.value); setPage(1); }}
            />
            <input
              className="pi-input"
              placeholder="Position"
              value={posQuery}
              onChange={(e) => { setPosQuery(e.target.value); setPage(1); }}
            />
            <button
              className="pi-btn pi-btn--ghost"
              type="button"
              onClick={() => { setNameQuery(""); setTeamQuery(""); setPosQuery(""); setPage(1); }}
            >
              Clear
            </button>
            <label className="pi-rows">
              Rows
              <select
                className="pi-select"
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
              >
                {[10, 25, 50].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* ✅ ONLY CHANGE IS HERE */}
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
                    {columns.map((col) => (
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
                  {pageRows.length === 0 ? (
                    <tr>
                      <td className="pi-empty" colSpan={columns.length}>
                        No results.
                      </td>
                    </tr>
                  ) : (
                    pageRows.map((p) => (
                      <tr key={p.id} className="pi-row">
                        {columns.map((col) => {
                          let val = "—";
                          if (col.key === "name") val = `${p.firstName} ${p.lastName}`;
                          else if (col.stat) val = p.stats?.[col.stat] ?? "—";
                          else val = p[col.key] ?? "—";
                          return (
                            <td key={col.key} className="pi-td">{val}</td>
                          );
                        })}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="pi-pager">
          <div className="pi-pagerInfo">
            Showing{" "}
            <b>
              {pageRows.length === 0 ? 0 : (safePage - 1) * pageSize + 1}–
              {(safePage - 1) * pageSize + pageRows.length}
            </b>{" "}
            of <b>{sorted.length}</b>
          </div>
          <div className="pi-pagerBtns">
            {[
              ["⟪", 1],
              ["‹", safePage - 1],
              ["›", safePage + 1],
              ["⟫", pageCount],
            ].map(([label, target]) => (
              <button
                key={label}
                className="pi-btn pi-btn--page"
                type="button"
                onClick={() => setPage(target)}
                disabled={target < 1 || target > pageCount || target === safePage}
              >
                {label}
              </button>
            ))}
            <span className="pi-pageText">
              Page <b>{safePage}</b> / <b>{pageCount}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}