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
  ["HR", "HR (Home Runs)"],
  ["RBI", "RBI (Runs Batted In)"],
  ["SB", "SB (Stolen Bases)"],
  ["R", "R (Runs Scored)"],
  ["AVG", "AVG (Batting Average)"],
  ["OBP", "OBP (On-Base %)"],
];

const PIT_STATS = [
  ["W", "W (Wins)"],
  ["SV", "SV (Saves)"],
  ["K", "K (Strikeouts)"],
  ["ERA", "ERA (Earned Run Avg)"],
  ["WHIP", "WHIP"],
];

function PlayerCompareCard({ player, onRemove }) {
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

      <div className="cmp-card-stats">
        {/* Hitting */}
        <div className="cmp-stat-col">
          <div className="cmp-stat-heading">HITTING</div>
          {HIT_STATS.map(([key, label]) => (
            <div key={key} className="cmp-stat-row">
              <span className="cmp-stat-label">{key}</span>
              <span className="cmp-stat-val">{fmt(player.stats?.[key], key)}</span>
            </div>
          ))}
        </div>

        {/* Pitching */}
        <div className="cmp-stat-col">
          <div className="cmp-stat-heading">PITCHING</div>
          {PIT_STATS.map(([key, label]) => (
            <div key={key} className="cmp-stat-row">
              <span className="cmp-stat-label">{key}</span>
              <span className="cmp-stat-val">{fmt(player.stats?.[key], key)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PlayerCompareModal({ isOpen, selected, onRemove, onClose }) {
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
            <PlayerCompareCard key={p.id} player={p} onRemove={onRemove} />
          ))}
        </div>
      )}
    </div>
  );
}