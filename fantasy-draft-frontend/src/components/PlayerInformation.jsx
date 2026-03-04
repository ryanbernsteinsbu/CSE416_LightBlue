import { useMemo, useState } from "react";

// dummy data for now
const MOCK_PLAYERS = [
  {
    id: "p1",
    name: "E. DÍAZ",
    team: "LAD",
    pos: "RP",
    stats: { W: 6, SV: 28, K: 98, AVG: ".164", ERA: "1.63", WHIP: "0.87" },
  },
  {
    id: "p2",
    name: "J. RAMÍREZ",
    team: "CLE",
    pos: "3B",
    stats: { HR: 30, RBI: 85, SB: 44, AVG: ".283", R: 103, OBP: ".360" },
  },
  {
    id: "p3",
    name: "M. BETTS",
    team: "LAD",
    pos: "RF",
    stats: { HR: 22, RBI: 67, SB: 14, AVG: ".301", R: 98, OBP: ".392" },
  },
];

function PlayerCard({ player, onPick }) {
  return (
    <button className="pi-card" type="button" onClick={() => onPick(player)}>
      <div className="pi-card-top">
        <div className="pi-headshot" aria-hidden="true" />
        <div className="pi-stats">
          {Object.entries(player.stats).slice(0, 6).map(([k, v]) => (
            <div className="pi-stat" key={k}>
              <span className="pi-stat-k">{k}</span>
              <span className="pi-stat-dots" aria-hidden="true" />
              <span className="pi-stat-v">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pi-name">{player.name}</div>
      <div className="pi-sub">
        {player.team} - {player.pos}
      </div>
    </button>
  );
}
export default function PlayerInformation() {
  // search
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [team, setTeam] = useState("");

  // sort
  const [sortBy, setSortBy] = useState("overall");

  // filters
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);

  // age
  const [age, setAge] = useState(30);

  const filtered = useMemo(() => {
    // TODO: Sawp this to backend queries
    return MOCK_PLAYERS.filter((p) => {
      const fnOk = firstName.trim()
        ? p.name.toLowerCase().includes(firstName.trim().toLowerCase())
        : true;
      const lnOk = lastName.trim()
        ? p.name.toLowerCase().includes(lastName.trim().toLowerCase())
        : true;
      const teamOk = team.trim()
        ? p.team.toLowerCase().includes(team.trim().toLowerCase())
        : true;
      return fnOk && lnOk && teamOk;
    });
  }, [firstName, lastName, team]);

  const onPickPlayer = (player) => {
    if (!slot1) setSlot1(player);
    else if (!slot2) setSlot2(player);
    else setSlot2(player); // if both filled, overwrite slot2
  }

  const onClearSearch = () => {
    setFirstName("");
    setLastName("");
    setTeam("");
  };

  return (
    <div className="pi-page">
      {/* TOP SEARCH BAR */}
      <div className="pi-top">
        <div className="pi-top-title">Find a Player</div>

        <div className="pi-searchrow">
          <input
            className="pi-searchinput"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="pi-searchinput"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="pi-searchinput"
            placeholder="Team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />

          <button className="pi-btn primary" type="button">
            Search
          </button>
          <button className="pi-btn" type="button" onClick={onClearSearch}>
            Clear
          </button>
        </div>
      </div>

      {/* MAIN GRID: LEFT FILTERS / CENTER RESULTS / RIGHT COMPARE */}
      <div className="pi-main">
        {/* LEFT FILTER PANEL */}
        <aside className="pi-filters">
          <div className="pi-filter-title">FILTER BY</div>

          <div className="pi-filter-section">
            <div className="pi-filter-h">POSITION</div>
            <div className="pi-checkgrid">
              {["SP", "RP", "C", "1B", "2B", "3B", "SS", "LF", "CF", "RF", "DH"].map((x) => (
                <label key={x} className="pi-check">
                  <input type="checkbox" />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pi-filter-section">
            <div className="pi-filter-h">LEAGUE</div>
            <label className="pi-check">
              <input type="checkbox" />
              <span>AMERICAN LEAGUE</span>
            </label>
            <label className="pi-check">
              <input type="checkbox" />
              <span>NATIONAL LEAGUE</span>
            </label>
          </div>

          <div className="pi-filter-section">
            <div className="pi-filter-h">DIVISION</div>
            <div className="pi-checkgrid two">
              {["AL EAST", "AL CENTRAL", "AL WEST", "NL EAST", "NL CENTRAL", "NL WEST"].map((x) => (
                <label key={x} className="pi-check">
                  <input type="checkbox" />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pi-filter-section">
            <div className="pi-filter-h">INJURY STATUS</div>
            <div className="pi-checkgrid two">
              {["HEALTHY", "DAY TO DAY", "10-DAY IL", "15-DAY IL", "60-DAY IL", "OUT INDEF"].map((x) => (
                <label key={x} className="pi-check">
                  <input type="checkbox" />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pi-filter-section">
            <div className="pi-filter-h">AGE</div>
            <div className="pi-age">
              <input
                type="range"
                min="20"
                max="45"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
              <div className="pi-age-nums">
                <span>20</span>
                <span>{age}</span>
                <span>45</span>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER RESULTS */}
        <section className="pi-results">
          <div className="pi-results-head">
            <div className="pi-results-label">RESULTS</div>

            <div className="pi-sort">
              <div className="pi-sort-label">SORT BY</div>
              <select
                className="pi-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="overall">OVERALL RANK</option>
                <option value="hr">HR</option>
                <option value="rbi">RBI</option>
                <option value="avg">AVG</option>
              </select>
            </div>
          </div>

          <div className="pi-grid">
            {filtered.map((p) => (
              <PlayerCard key={p.id} player={p} onPick={onPickPlayer} />
            ))}
          </div>
        </section>

        {/* RIGHT COMPARE PANEL */}
        <aside className="pi-compare">
          <div className="pi-slot">
            <button
              className="pi-slot-x"
              type="button"
              onClick={() => setSlot1(null)}
              aria-label="Clear slot 1"
            >
              ×
            </button>

            {slot1 ? (
              <div className="pi-slot-filled">
                <div className="pi-slot-name">{slot1.name}</div>
                <div className="pi-slot-sub">
                  {slot1.team} - {slot1.pos}
                </div>
              </div>
            ) : (
              <div className="pi-slot-empty">SELECT 1ST PLAYER</div>
            )}
          </div>

          <div className="pi-slot">
            <button
              className="pi-slot-x"
              type="button"
              onClick={() => setSlot2(null)}
              aria-label="Clear slot 2"
            >
              ×
            </button>

            {slot2 ? (
              <div className="pi-slot-filled">
                <div className="pi-slot-name">{slot2.name}</div>
                <div className="pi-slot-sub">
                  {slot2.team} - {slot2.pos}
                </div>
              </div>
            ) : (
              <div className="pi-slot-empty">SELECT 2ND PLAYER</div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}



