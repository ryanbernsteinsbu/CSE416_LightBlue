'use client';

import React, { useEffect, useState } from "react";
import "../stylesheets/App.css";
 
export function PlayerProfileModal({ isOpen, onClose, player }) {
  const [visible, setVisible] = useState(false);
 
  useEffect(() => {
    if (isOpen) setTimeout(() => setVisible(true), 10);
    else setVisible(false);
  }, [isOpen]);
 
  if (!isOpen) return null;
 
  return (
    <>
      {/* Backdrop */}
      <div className="pprof-backdrop" onClick={onClose} />
 
      {/* Panel */}
      <div className={`pprof-panel ${visible ? "pprof-visible" : ""}`}>
 
        {/* Header */}
        <div className="pprof-header">
          <span className="pprof-title">PLAYER PROFILE</span>
          <button className="pprof-close" onClick={onClose}>
            ✕
          </button>
        </div>
 
        {/* Body */}
        <div className="pprof-body">


        {/* Name */}
        <div className="pprof-name-section">
            <div className="pprof-name">
              {player?.username || "PLAYER"}
            </div>
            <div className="pprof-sub">
              {player?.team
                ? `${player.team} · ${player.role}`
                : player?.role || "—"}
            </div>
        </div>

        {/* Hitting Stats */}
        {player?.stats && (
            <div>
            <div className="pprof-hitpitch">HITTING</div>
            {[
                ["HR (Home Runs)", player.stats.HR],
                ["RBI (Runs Batted In)", player.stats.RBI],
                ["SB (Stolen Bases)", player.stats.SB],
                ["R (Runs Scored)", player.stats.R],
                ["AVG (Batting Average)", player.stats.AVG],
                ["OBP (On-Base Percentage)", player.stats.OBP],
            ].map(([label, value]) => (
                <div key={label} className="pprof-row">
                  <span className="pprof-team">{label}</span>
                  <span className="pprof-team">{value ?? "—"}</span>
                </div>
            ))}
            </div>
        )}

        {/* Pitching Stats */}
        {player?.stats && (
            <div>
            <div className="pprof-hitpitch">
                PITCHING
            </div>
            {[
                ["W (Wins)", player.stats.W],
                ["SV (Saves)", player.stats.SV],
                ["K (Strikeouts)", player.stats.K],
                ["ERA (Earned Run Average)", player.stats.ERA],
                ["WHIP (Walk plus Hits per Inning Pitched)", player.stats.WHIP],
            ].map(([label, value]) => (
                <div key={label} className="pprof-row">
                  <span className="pprof-team">{label}</span>
                  <span className="pprof-team">{value ?? "—"}</span>
                </div>
            ))}
            </div>
        )}
        </div>
      </div>
    </>
  );
}
