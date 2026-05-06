'use client';
import React, { useState } from "react";
import PreDraftBoard from "./PreDraftBoard";
import DraftSimulation from "./DraftSimulation";
import LiveDraft from "./LiveDraft";
import DraftSummary from "./DraftSummary";
import TaxiDraft from "./TaxiDraft";

export default function LeagueDraftController({ league, onBack, initialMode }) {
    const defaultMode = initialMode || (league.status === "DRAFTED" ? "summary" : "predraft"); 
    const [mode, setMode] = useState(defaultMode); 

    return (
        <>
            {mode === "predraft" && (
                <PreDraftBoard
                    league={league}
                    onBack={onBack}
                    onModeChange={setMode}
                />
            )}
            {mode === "simulation" && (
                <DraftSimulation
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
                />
            )}
            {mode === "live" && (
                <LiveDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={setMode}
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
                    onBack={() => setMode("taxi")}
                    onModeChange={setMode}
                />
            )}
        </>
    );
}