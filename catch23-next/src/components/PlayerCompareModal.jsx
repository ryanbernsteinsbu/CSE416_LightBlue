'use client';
import "../stylesheets/App.css";

import { useEffect, useState } from "react";

function fmt(v, key) {
  if (v == null || v === "") return "—";
  if (key === "AVG" || key === "OBP") return Number(v) === 0 ? ".000" : Number(v).toFixed(3).replace(/^0/, "");
  if (key === "ERA" || key === "WHIP") return Number(v) === 0 ? "—" : Number(v).toFixed(2);
  return v === 0 ? "—" : v;
}

const HIT_STATS = [
  ["PA", "PA (Plate Appearances)"],
  ["AB", "AB (At Bats)"],
  ["R", "R (Runs Scored)"],
  ["H", "H (Hits)"],
  ["1B", "1B (Singles)"],
  ["2B", "2B (Doubles)"],
  ["3B", "3B (Triples)"],
  ["HR", "HR (Home Runs)"],
  ["RBI", "RBI (Runs Batted In)"],
  ["BB", "BB (Walks)"],
  ["K", "K (Strikeouts)"],
  ["SB", "SB (Stolen Bases)"],
  ["CS", "CS (Caught Stealing)"],
  ["AVG", "AVG (Batting Average)"],
  ["OBP", "OBP (On-Base Percentage)"],
  ["SLG", "SLG (Slugging Percentage)"],
];
const PIT_STATS = [
  ["G", "G (Games Appeared)"],
  ["GS", "GS (Games Started)"],
  ["W", "W (Wins)"],
  ["SV", "SV (Saves)"],
  ["IP", "IP (Innings Pitched)"],
  ["H", "H (Hits Allowed)"],
  ["ER", "ER (Earned Runs)"],
  ["BB", "BB (Walks Allowed)"],
  ["SO", "SO (Strikeouts)"],
  ["HR", "HR (Home Runs Allowed)"],
  ["ERA", "ERA (Earned Run Average)"],
  ["WHIP", "WHIP (Walks + Hits per Inning Pitched)"],
  ["BF", "BF (Batters Faced)"],
  ["SO/W", "SO/W (Strikeout-to-Walk Ratio)"],
  ["SB", "SB (Stolen Bases Allowed)"],
  ["PO", "PO (Pickoffs)"],
];

function PlayerCompareCard({ player, onRemove, mode }) {
  return (
    <div className="cmp-card">
      <button className="cmp-card-remove" onClick={() => onRemove(player.id)} type="button">
        ✕
      </button>
      <div className="cmp-card-name">
        {player.firstName} {player.lastName}
      </div>
      <div className="cmp-card-sub">
        {player.team} · {player.pos}
      </div>
      {player.depth && player.depth !== "—" && (
        <div className="cmp-card-sub" style={{ marginTop: "2px", opacity: 0.7 }}>
            Depth: {player.depth}
        </div>
      )}

      <div className="cmp-card-stats">
        {/* Only show hitting stats when NOT in pitching mode */}
        {mode !== "pitching" && (
          <div className="cmp-stat-col">
            <div className="cmp-stat-heading">HITTING</div>
            {HIT_STATS.map(([key]) => (
              <div key={key} className="cmp-stat-row">
                <span className="cmp-stat-label">{key}</span>
                <span className="cmp-stat-val">{fmt(player.stats?.[key], key)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Only show pitching stats when NOT in hitting mode */}
        {mode !== "hitting" && (
          <div className="cmp-stat-col">
            <div className="cmp-stat-heading">PITCHING</div>
            {PIT_STATS.map(([key]) => (
              <div key={key} className="cmp-stat-row">
                <span className="cmp-stat-label">{key}</span>
                <span className="cmp-stat-val">{fmt(player.stats?.[key], key)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function PlayerCompareModal({ isOpen, selected, onRemove, onClose, mode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => setVisible(true), 10);
    else setVisible(false);
  }, [isOpen]);

  //if (!isOpen) return null;

  return (
    <div className={`cmp-panel ${visible ? "cmp-panel--open" : ""}`}>
      {/* Header */}
      <div className="cmp-header">
        <span className="cmp-title">
          COMPARE
          {selected.length > 0 && (
            <span className="cmp-badge">{selected.length}</span>
          )}
        </span>
        <button className="cmp-close" onClick={onClose} type="button">
          ✕
        </button>
      </div>

      {/* Empty state */}
      {selected.length === 0 ? (
        <div className="cmp-empty">
          <span className="cmp-empty-icon"></span>
          <p className="cmp-empty-text">Start comparing players!</p>
          <small className="cmp-empty-sub">Click any player name in the table</small>
        </div>
      ) : (
        <div className="cmp-cards">
          {selected.map((p) => (
            <PlayerCompareCard key={p.id} player={p} onRemove={onRemove} mode={mode} />
          ))}
        </div>
      )}
    </div>
  );
}
