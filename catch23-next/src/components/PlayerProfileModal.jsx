'use client';

import React, { useEffect, useState } from "react";
 
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
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
      />
 
      {/* Panel */}
      <div style={{
        position: "fixed",
        top: 0, right: 0, bottom: 0,
        width: "50%",
        background: "#3d4a8a",
        border: "3px solid #5060b0",
        borderRight: "none",
        borderRadius: "16px 0 0 16px",
        zIndex: 1000,
        transform: visible ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
        overflowY: "auto",
      }}>
 
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "24px 28px",
          borderBottom: "2px solid #5060b0",
        }}>
          <span style={{ fontSize: "26px", letterSpacing: "0.08em", color: "#fff" }}>
            PLAYER PROFILE
          </span>
          <button
            onClick={onClose}
            style={{
              background: "#2e3a7a", border: "none", borderRadius: "8px",
              color: "#fff", width: "36px", height: "36px",
              fontSize: "18px", cursor: "pointer",
              fontFamily: "sans-serif",
            }}
            onMouseEnter={e => e.target.style.background = "#3a4890"}
            onMouseLeave={e => e.target.style.background = "#2e3a7a"}
          >
            ✕
          </button>
        </div>
 
        {/* Body */}
        <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* Name */}
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", color: "#e03030", letterSpacing: "0.08em" }}>
            {player?.username || "PLAYER"}
            </div>
            <div style={{ fontSize: "16px", color: "#aab0d0", letterSpacing: "0.1em" }}>
            {player?.team ? `${player.team} · ${player.role}` : player?.role || "—"}
            </div>
        </div>

        {/* Hitting Stats */}
        {player?.stats && (
            <div>
            <div style={{ fontSize: "13px", color: "#aab0d0", letterSpacing: "0.1em", marginBottom: "10px" }}>
                HITTING
            </div>
            {[
                ["HR", player.stats.HR],
                ["RBI", player.stats.RBI],
                ["SB", player.stats.SB],
                ["R", player.stats.R],
                ["AVG", player.stats.AVG],
                ["OBP", player.stats.OBP],
            ].map(([label, value]) => (
                <div key={label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid #5060b0",
                }}>
                <span style={{ fontSize: "14px", color: "#aab0d0", letterSpacing: "0.08em" }}>{label}</span>
                <span style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}>{value ?? "—"}</span>
                </div>
            ))}
            </div>
        )}

        {/* Pitching Stats */}
        {player?.stats && (
            <div>
            <div style={{ fontSize: "13px", color: "#aab0d0", letterSpacing: "0.1em", marginBottom: "10px" }}>
                PITCHING
            </div>
            {[
                ["W", player.stats.W],
                ["SV", player.stats.SV],
                ["K", player.stats.K],
                ["ERA", player.stats.ERA],
                ["WHIP", player.stats.WHIP],
            ].map(([label, value]) => (
                <div key={label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid #5060b0",
                }}>
                <span style={{ fontSize: "14px", color: "#aab0d0", letterSpacing: "0.08em" }}>{label}</span>
                <span style={{ fontSize: "18px", color: "#fff", fontWeight: "bold" }}>{value ?? "—"}</span>
                </div>
            ))}
            </div>
        )}
        </div>
      </div>
    </>
  );
}
