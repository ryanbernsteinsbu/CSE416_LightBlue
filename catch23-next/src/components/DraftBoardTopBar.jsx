'use client';
import React from "react";

const MODE_LABELS = [
  { key: "predraft", label: "Pre-Draft" },
  { key: "simulation", label: "Simulation" },
  { key: "live", label: "Live Draft" },
  { key: "taxi", label: "Taxi Draft" },
  { key: "minor", label: "Minor League" },
];

export default function DraftBoardTopBar({
  league,
  mode,
  onModeChange,
  onBack,
  teams,
  principalTeamId,
  onPrincipalTeamChange,
}) {
  const selectedValue = principalTeamId ?? "";

  return (
    <div className="draft-topbar">
      <div className="draft-topbar-main">
        <button className="db-back-btn" onClick={onBack}>
          ← Back
        </button>

        <div className="draft-topbar-titleblock">
          <div className="db-league-name">{league?.title || league?.name || "LEAGUE"}</div>
          <div className="db-league-meta">
            {league?.format} • {league?.season} SEASON
          </div>
        </div>
      </div>

      <div className="draft-topbar-tabs">
        {MODE_LABELS.map((m) => (
          <button
            key={m.key}
            type="button"
            className={mode === m.key ? "draft-mode-tab active" : "draft-mode-tab"}
            onClick={() => onModeChange(m.key)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="draft-topbar-team">
        <span className="draft-topbar-team-label">Your Team</span>

        <select
          className="draft-topbar-team-select"
          value={selectedValue}
          onChange={(e) => onPrincipalTeamChange(e.target.value ? Number(e.target.value) : null)}
          disabled={!teams || teams.length === 0}
        >
          <option value="">Select team</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}