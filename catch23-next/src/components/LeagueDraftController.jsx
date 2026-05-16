'use client';
import React, { useState } from "react";
import PreDraftBoard from "./PreDraftBoard";
import DraftSimulation from "./DraftSimulation";
import LiveDraft from "./LiveDraft";
import DraftSummary from "./DraftSummary";
import TaxiDraft from "./TaxiDraft";
import MinorLeagueDraft from "./MinorLeague";

export default function LeagueDraftController({ league: initialLeague, onBack, initialMode }) {
    const [league, setLeague] = useState(initialLeague);
    const defaultMode = initialMode || (league.status === "DRAFTED" ? "summary" : "predraft"); 
    const [mode, setMode] = useState(defaultMode); 

    const updateLeague = (updates) => {
        setLeague(prev => ({ ...prev, ...updates}));
    };

    return (
        <>
            {mode === "predraft" && (
                <PreDraftBoard
                    league={league}
                    onBack={onBack}
                    onModeChange={setMode}
                    onLeagueUpdate={updateLeague}
                />
            )}
            {mode === "simulation" && (
                <DraftSimulation
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
                    onLeagueUpdate={updateLeague}
                />
            )}
            {mode === "live" && (
                <LiveDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
                    onLeagueUpdate={updateLeague}
                />
            )}
            {mode === "summary" && (
                <DraftSummary
                    league={league}
                    onBack={onBack}
                    onModeChange={setMode}
                />
            )}
            {mode === "taxi" && (
                <TaxiDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
                />
            )}
            {mode === "minor" && (
                <MinorLeagueDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
                />
            )}
        </>
    );
}