'use client';
import React, { useEffect, useState } from "react";
import { getTeamPlayers } from "../lib/api";
import { PlayerProfileModal } from "./PlayerProfileModal";

const TEAM_ABBRS = [
  "ARI","ATL","BAL","BOS","CHC","CHW","CIN","CLE",
  "COL","DET","HOU","KC","LAA","LAD","MIA","MIL",
  "MIN","NYM","NYY","ATH","PHI","PIT","SD","SEA",
  "SF","STL","TB","TEX","TOR","WSH",
];

const TEAM_NAMES = {
  ARI:"Arizona Diamondbacks", ATL:"Atlanta Braves",     BAL:"Baltimore Orioles",
  BOS:"Boston Red Sox",       CHC:"Chicago Cubs",       CHW:"Chicago White Sox",
  CIN:"Cincinnati Reds",      CLE:"Cleveland Guardians",COL:"Colorado Rockies",
  DET:"Detroit Tigers",       HOU:"Houston Astros",     KC:"Kansas City Royals",
  LAA:"Los Angeles Angels",   LAD:"Los Angeles Dodgers",MIA:"Miami Marlins",
  MIL:"Milwaukee Brewers",    MIN:"Minnesota Twins",    NYM:"New York Mets",
  NYY:"New York Yankees",     ATH:"Oakland Athletics",  PHI:"Philadelphia Phillies",
  PIT:"Pittsburgh Pirates",   SD:"San Diego Padres",    SEA:"Seattle Mariners",
  SF:"San Francisco Giants",  STL:"St. Louis Cardinals",TB:"Tampa Bay Rays",
  TEX:"Texas Rangers",        TOR:"Toronto Blue Jays",  WSH:"Washington Nationals",
};

const GROUPS = [
  { key: "dh", label: "DH", full: "Designated Hitters", isPitcher: false },
  { key: "p",  label: "SP", full: "Starting Pitchers",  isPitcher: true  },
  { key: "rp", label: "RP", full: "Relief Pitchers",    isPitcher: true  },
  { key: "cl", label: "CL", full: "Closers",            isPitcher: true  },
];

function fmtHitter(s) {
  if (!s) return "No stats";
  const avg = s.AVG != null ? Number(s.AVG).toFixed(3).replace(/^0/, "") : ".—";
  return `${avg} · ${s.HR ?? "—"} HR · ${s.RBI ?? "—"} RBI`;
}

function fmtPitcher(s) {
  if (!s) return "No stats";
  const era  = s.ERA  != null ? Number(s.ERA).toFixed(2)  : "—";
  const whip = s.WHIP != null ? Number(s.WHIP).toFixed(2) : "—";
  const sv   = s.SV ?? 0;
  return sv > 0
    ? `${era} ERA · ${sv} SV · ${whip} WHIP`
    : `${era} ERA · ${s.W ?? 0} W · ${whip} WHIP`;
}

function toProfileShape(p) {
  return {
    id:       p.id,
    mlbID:    p.mlbPlayerId,
    username: `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim(),
    team:     p.realTeam ?? p.teamAbbreviation ?? "",
    depth:    p.depth ?? null,
    role:     Array.isArray(p.playablePositions) ? p.playablePositions.join(", ") : "",
    stats: {
      HR:0, RBI:0, SB:0, AVG:0, R:0, OBP:0,
      W:0, SV:0, K:0, ERA:0, WHIP:0,
      ...p.lastYearStats,
    },
  };
}

function PlayerSection({ config, players, onOpenProfile }) {
  if (!players?.length) return null;
  return (
    <div className="dc-pitcher-section">
      <div className="dc-section-title">
        <span className="dc-group-pos-badge" style={{ marginRight: 8 }}>
          {config.label}
        </span>
        {config.full}
      </div>
      <div className="dc-pitcher-grid">
        {players.map((p, i) => (
          <div key={p.id ?? i} className="dc-pitcher-card">
            <span className="dc-rank">{i + 1}</span>
            <div className="dc-player-details">
              <button className="dc-player-name" onClick={() => onOpenProfile(p)}>
                {`${p.firstName ?? ""} ${p.lastName ?? ""}`.trim()}
              </button>
              <span className="dc-player-stat-line">
                {config.isPitcher ? fmtPitcher(p.lastYearStats) : fmtHitter(p.lastYearStats)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamDepthChart({ initialTeam = "LAD" }) {
  const [team, setTeam]                   = useState(initialTeam);
  const [depthData, setDepthData]         = useState(null);
  const [loading, setLoading]             = useState(true);
  const [profilePlayer, setProfilePlayer] = useState(null);

  useEffect(() => {
    setLoading(true);
    setDepthData(null);
    getTeamPlayers(team)
      .then(({ data }) => setDepthData(data))
      .catch(err => console.error("Depth chart fetch failed:", err))
      .finally(() => setLoading(false));
  }, [team]);

  const hasAnyData = depthData &&
    Object.values(depthData).some(arr => Array.isArray(arr) && arr.length > 0);

  return (
    <div className="dc-wrap">
      <div className="dc-header">
        <select
          className="dc-team-select"
          value={team}
          onChange={e => setTeam(e.target.value)}
        >
          {TEAM_ABBRS.map(abbr => (
            <option key={abbr} value={abbr}>
              {TEAM_NAMES[abbr]} ({abbr})
            </option>
          ))}
        </select>
        <span className="dc-header-tag">Depth Chart</span>
      </div>

      {loading ? (
        <div className="dc-state">Loading depth chart…</div>
      ) : !hasAnyData ? (
        <div className="dc-state">No depth chart data available for this team.</div>
      ) : (
        <div className="dc-pitchers-wrap">
          {GROUPS.map(config => (
            <PlayerSection
              key={config.key}
              config={config}
              players={depthData[config.key] ?? []}
              onOpenProfile={p => setProfilePlayer(toProfileShape(p))}
            />
          ))}
        </div>
      )}

      <PlayerProfileModal
        isOpen={!!profilePlayer}
        onClose={() => setProfilePlayer(null)}
        player={profilePlayer}
      />
    </div>
  );
}