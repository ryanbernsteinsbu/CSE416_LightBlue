'use client';

import React, { useEffect, useState, useRef, useCallback } from "react";
import "../stylesheets/App.css";
import { getUser, updatePlayerNotes } from "../lib/api";

export function PlayerProfileModal({ isOpen, onClose, player }) {
  const [visible, setVisible] = useState(false);
  const [note, setNote] = useState("");
  const [saveStatus, setSaveStatus] = useState("idle"); // "idle" | "saving" | "saved" | "error"
  const debounceRef = useRef(null);
  const savingForPlayerRef = useRef(null); // tracks which player id we're currently on

  // Slide-in animation
  useEffect(() => {
    if (isOpen) setTimeout(() => setVisible(true), 10);
    else setVisible(false);
  }, [isOpen]);

  // Load note for this player whenever the modal opens or the player changes.
  // Resets state on close so stale text never bleeds into the next player.
  useEffect(() => {
    // Always wipe on close
    if (!isOpen) {
      setNote("");
      setSaveStatus("idle");
      savingForPlayerRef.current = null;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      return;
    }

    // Guard: need a real player id to key notes against
    if (!player?.id) {
      setNote("");
      return;
    }

    savingForPlayerRef.current = player.id;
    setSaveStatus("idle");
    setNote(""); // clear while loading so we don't flash the previous player's note

    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    getUser(userId)
      .then((res) => {
        // Only apply result if this player is still the one open
        if (savingForPlayerRef.current !== player.id) return;
        const notes = res.data?.playerNotes ?? res.data?.player_notes ?? [];
        // Coerce both sides to Number so "5" === 5 never breaks the lookup
        const existing = notes.find((n) => Number(n.playerId) === Number(player.id));
        setNote(existing?.note ?? "");
      })
      .catch((err) => {
        console.error("Failed to load player notes:", err);
        setNote("");
      });
  }, [isOpen, player?.id]);

  // Auto-save with 800ms debounce
  const handleNoteChange = useCallback(
    (e) => {
      const value = e.target.value;
      setNote(value);

      if (!player?.id) return;

      if (debounceRef.current) clearTimeout(debounceRef.current);
      setSaveStatus("saving");

      const playerId = player.id; // capture at call time — avoids stale closure

      debounceRef.current = setTimeout(async () => {
        const userId = localStorage.getItem("user_id");
        if (!userId) return;

        try {
          // Re-fetch latest notes so we never clobber another player's entry
          const res = await getUser(userId);
          const currentNotes = res.data?.playerNotes ?? res.data?.player_notes ?? [];

          let updatedNotes;
          if (value.trim() === "") {
            updatedNotes = currentNotes.filter((n) => Number(n.playerId) !== Number(playerId));
          } else {
            const exists = currentNotes.some((n) => Number(n.playerId) === Number(playerId));
            updatedNotes = exists
              ? currentNotes.map((n) =>
                Number(n.playerId) === Number(playerId) ? { ...n, note: value } : n
              )
              : [...currentNotes, { playerId: Number(playerId), note: value }];
          }

          await updatePlayerNotes(userId, updatedNotes);

          // Only show "Saved" if we're still on the same player
          if (savingForPlayerRef.current === playerId) {
            setSaveStatus("saved");
            setTimeout(() => setSaveStatus("idle"), 2000);
          }
        } catch (err) {
          console.error("Failed to save note:", err);
          if (savingForPlayerRef.current === playerId) {
            setSaveStatus("error");
            setTimeout(() => setSaveStatus("idle"), 3000);
          }
        }
      }, 800);
    },
    [player?.id]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="pprof-backdrop" onClick={onClose} />

      <div className={`pprof-panel ${visible ? "pprof-visible" : ""}`}>

        <div className="pprof-header">
          <span className="pprof-title">PLAYER PROFILE</span>
          <button className="pprof-close" onClick={onClose}>✕</button>
        </div>

        <div className="pprof-body" >
          <div style={{ alignItems: "center" }}>
            <div className="pprof-name-section"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                width: "100%",
              }}
            >
              <img
                src={`https://securea.mlb.com/mlb/images/players/head_shot/${player.mlbID}.jpg`}
                alt="Profile picture"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <div className="pprof-name">
                  {player?.username || "PLAYER"}
                </div>
                <div className="pprof-sub">
                  {player?.team
                    ? `${player.team} · ${player.role}`
                    : player?.role || "—"}
                </div>
                {player?.depth && player.depth !== "—" && (
                  <div className="pprof-sub" style={{ marginTop: "2px", opacity: 0.7 }}>
                    Depth: {player.depth}
                  </div>
                )}
              </div>
            </div>
          </div>

          {player?.stats && (
            <div>
              <div className="pprof-hitpitch">HITTING</div>
              {[
                ["PA (Plate Appearances)", player.stats.PA],
                ["AB (At Bats)", player.stats.AB],
                ["R (Runs Scored)", player.stats.R],
                ["H (Hits)", player.stats.H],
                ["1B (Singles)", player.stats["1B"]],
                ["2B (Doubles)", player.stats["2B"]],
                ["3B (Triples)", player.stats["3B"]],
                ["HR (Home Runs)", player.stats.HR],
                ["RBI (Runs Batted In)", player.stats.RBI],
                ["BB (Walks)", player.stats.BB],
                ["K (Strikeouts)", player.stats.K],
                ["SB (Stolen Bases)", player.stats.SB],
                ["CS (Caught Stealing)", player.stats.CS],
                ["AVG (Batting Average)", player.stats.AVG],
                ["OBP (On-Base Percentage)", player.stats.OBP],
                ["SLG (Slugging Percentage)", player.stats.SLG],
              ].map(([label, value]) => (
                <div key={label} className="pprof-row">
                  <span className="pprof-team">{label}</span>
                  <span className="pprof-team">{value ?? "—"}</span>
                </div>
              ))}
            </div>
          )}

          {player?.stats && (
            <div>
              <div className="pprof-hitpitch">PITCHING</div>
              {[
                ["G (Games Appeared)", player.stats.G],
                ["GS (Games Started)", player.stats.GS],
                ["W (Wins)", player.stats.W],
                ["SV (Saves)", player.stats.SV],
                ["IP (Innings Pitched)", player.stats.IP],
                ["H (Hits Allowed)", player.stats.H],
                ["ER (Earned Runs)", player.stats.ER],
                ["BB (Walks Allowed)", player.stats.BB],
                ["SO (Strikeouts)", player.stats.SO],
                ["HR (Home Runs Allowed)", player.stats.HR],
                ["ERA (Earned Run Average)", player.stats.ERA],
                ["WHIP (Walks + Hits per Inning Pitched)", player.stats.WHIP],
                ["BF (Batters Faced)", player.stats.BF],
                // AFTER
                ["SO/W (Strikeout-to-Walk Ratio)", player.stats.BB ? Number((player.stats.SO / player.stats.BB).toFixed(3)) : "—"],
                ["SB (Stolen Bases Allowed)", player.stats.SB],
                ["PO (Pickoffs)", player.stats.PO],
              ].map(([label, value]) => (
                <div key={label} className="pprof-row">
                  <span className="pprof-team">{label}</span>
                  <span className="pprof-team">{value ?? "—"}</span>
                </div>
              ))}
            </div>
          )}

          {/* Scout Notes */}
          <div className="pprof-notes-section">
            <div className="pprof-notes-header">
              <span className="pprof-hitpitch" style={{ margin: 0 }}>SCOUT NOTES</span>
              <span className={`pprof-save-indicator pprof-save-${saveStatus}`}>
                {saveStatus === "saving" && "Saving..."}
                {saveStatus === "saved" && "✓ Saved"}
                {saveStatus === "error" && "✗ Error saving"}
              </span>
            </div>
            <textarea
              className="pprof-notes-textarea"
              placeholder="Add your scouting notes for this player..."
              value={note}
              onChange={handleNoteChange}
              disabled={!player?.id}
              rows={5}
            />
          </div>

        </div>
      </div>
    </>
  );
}
