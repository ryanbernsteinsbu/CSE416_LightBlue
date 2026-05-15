'use client';
import React from "react";

export default function TaxiDraft({ league, onBack, onModeChange }) {
    return (
        <div className="home" style={{ paddingTop: 80 }}>
            <div className="db-mode-banner">YOU ARE IN TAXI DRAFT MODE!</div>

            <div className="db-header">
                <div className="db-header-left">
                    <button className="db-back-btn" onClick={onBack}>← Back</button>
                    <div>
                        <div className="db-league-name">{league?.title || "LEAGUE"}</div>
                        <div className="db-league-meta">
                            {league?.format} • TAXI SQUAD • {league?.season} SEASON
                        </div>
                    </div>
                </div>
            </div>

            <div className="db-toolbar">
                <div className="db-toolbar-left">
                    <span className="db-progress-label">Taxi draft coming soon</span>
                </div>
                <div className="db-toolbar-right">
                    <>
                        <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("predraft")}>
                            Pre-Draft
                        </button>
                        <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("simulation")}>
                            Draft Simulation
                        </button>
                        <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("live")}>
                            Live Draft
                        </button>
                        <button className="db-tool-btn db-tool-secondary" onClick={() => onModeChange("minor")}>Minor League</button>
                        <button className="db-tool-btn db-tool-primary">
                            💾 Save Draft
                        </button>
                    </>
                </div>
            </div>

            <div className="db-table-wrap">
                <div className="db-empty">
                    <div className="db-empty-title">Taxi Draft</div>
                    <div className="db-empty-sub">This feature is being worked on</div>
                </div>
            </div>
        </div>
    );
}