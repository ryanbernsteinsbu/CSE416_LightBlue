'use client';
import React, { useEffect, useState } from "react";
import { getTeamPlayers } from "../lib/api";
import { PlayerProfileModal } from "./PlayerProfileModal";

// Constants 

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

// Maps API response keys → display labels
const POSITION_PLAYERS = [
  { key: "c",  label: "C",  full: "Catcher"           },
  { key: "1b", label: "1B", full: "First Base"         },
  { key: "2b", label: "2B", full: "Second Base"        },
  { key: "3b", label: "3B", full: "Third Base"         },
  { key: "ss", label: "SS", full: "Shortstop"          },
  { key: "lf", label: "LF", full: "Left Field"         },
  { key: "cf", label: "CF", full: "Center Field"       },
  { key: "rf", label: "RF", full: "Right Field"        },
  { key: "dh", label: "DH", full: "Designated Hitter"  },
];

const PITCHER_GROUPS = [
  { key: "p",  label: "SP", full: "Starting Pitchers" },
  { key: "rp", label: "RP", full: "Relief Pitchers"   },
  { key: "cl", label: "CL", full: "Closers"           },
];

// Helpers 

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
  const w    = s.W  ?? 0;
  return sv > 0
    ? `${era} ERA · ${sv} SV · ${whip} WHIP`
    : `${era} ERA · ${w} W · ${whip} WHIP`;
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

// Sub-components

function PlayerRow({ player, rank, isPitcher, onOpenProfile }) {
  const name = `${player.firstName ?? ""} ${player.lastName ?? ""}`.trim();
  return (
    <div className={`dc-player-row${rank === 1 ? " dc-player-row--starter" : ""}`}>
      <span className="dc-rank">{rank}</span>
      <div className="dc-player-details">
        <button className="dc-player-name" onClick={() => onOpenProfile(player)}>
          {name}
        </button>
        <span className="dc-player-stat-line">
          {isPitcher ? fmtPitcher(player.lastYearStats) : fmtHitter(player.lastYearStats)}
        </span>
      </div>
    </div>
  );
}

function PositionCard({ config, players, onOpenProfile }) {
  return (
    <div className="dc-group">
      <div className="dc-group-header">
        <span className="dc-group-pos-badge">{config.label}</span>
        <span className="dc-group-label">{config.full}</span>
      </div>
      {players.length === 0 ? (
        <div className="dc-player-row">
          <span className="dc-rank" style={{ color: "#2a3550" }}>—</span>
          <span className="dc-player-stat-line" style={{ padding: "2px 0" }}>
            No players listed
          </span>
        </div>
      ) : (
        players.map((p, i) => (
          <PlayerRow
            key={p.id ?? i}
            player={p}
            rank={i + 1}
            isPitcher={false}
            onOpenProfile={onOpenProfile}
          />
        ))
      )}
    </div>
  );
}

function PitcherSection({ config, players, onOpenProfile }) {
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
          <div
            key={p.id ?? i}
            className={`dc-pitcher-card${i === 0 ? " dc-pitcher-card--ace" : ""}`}
          >
            <span className="dc-rank">{i + 1}</span>
            <div className="dc-player-details">
              <button className="dc-player-name" onClick={() => onOpenProfile(p)}>
                {`${p.firstName ?? ""} ${p.lastName ?? ""}`.trim()}
              </button>
              <span className="dc-player-stat-line">{fmtPitcher(p.lastYearStats)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//  Main component 

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

  const openProfile = (p) => setProfilePlayer(toProfileShape(p));

  const hasAnyData = depthData &&
    Object.values(depthData).some(arr => Array.isArray(arr) && arr.length > 0);

  return (
    <div className="dc-wrap">

      {/* Team selector */}
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
        <>
          {/* Position players */}
          <div className="dc-pos-grid">
            {POSITION_PLAYERS.map(config => (
              <PositionCard
                key={config.key}
                config={config}
                players={depthData[config.key] ?? []}
                onOpenProfile={openProfile}
              />
            ))}
          </div>

          {/* Pitchers */}
          <div className="dc-pitchers-wrap">
            {PITCHER_GROUPS.map(config => (
              <PitcherSection
                key={config.key}
                config={config}
                players={depthData[config.key] ?? []}
                onOpenProfile={openProfile}
              />
            ))}
          </div>
        </>
      )}

      <PlayerProfileModal
        isOpen={!!profilePlayer}
        onClose={() => setProfilePlayer(null)}
        player={profilePlayer}
      />
    </div>
  );
}