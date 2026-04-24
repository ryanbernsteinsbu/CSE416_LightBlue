'use client';
import React, { useState } from "react";
import PreDraftBoard from "./PreDraftBoard";
import DraftSimulation from "./DraftSimulation";
import LiveDraft from "./LiveDraft";

export default function LeagueDraftController({ league, onBack }) {
    const [mode, setMode] = useState("predraft");

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
        </>
    );
}