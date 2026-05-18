'use client';
import React, { useEffect, useState } from "react";
import PreDraftBoard from "./PreDraftBoard";
import DraftSimulation from "./DraftSimulation";
import LiveDraft from "./LiveDraft";
import DraftSummary from "./DraftSummary";
import TaxiDraft from "./TaxiDraft";
import MinorLeagueDraft from "./MinorLeague";
import DraftBoardTopBar from "./DraftBoardTopBar";
import { getLeagueTeams } from "../lib/api";

const simTeamIdKey = (id) => `sim_team_${id}`;

export default function LeagueDraftController({ league: initialLeague, onBack, initialMode }) {
    const [league, setLeague] = useState(initialLeague);
    const defaultMode = initialMode || (initialLeague.status === "DRAFTED" ? "summary" : "predraft");
    const [mode, setMode] = useState(defaultMode);

    const [leagueTeams, setLeagueTeams] = useState([]);
    const [principalTeamId, setPrincipalTeamId] = useState(null);

    const updateLeague = (updates) => {
        setLeague(prev => ({ ...prev, ...updates }));
    };

    const loadLeagueTeams = async () => {
        try {
            const { data } = await getLeagueTeams(league.id);
            const sortedTeams = [...data].sort((a, b) => Number(a.id) - Number(b.id));
            setLeagueTeams(sortedTeams);

            const storedId = typeof window !== "undefined"
                ? localStorage.getItem(simTeamIdKey(league.id))
                : null;

            if (storedId && sortedTeams.some(t => Number(t.id) === Number(storedId))) {
                setPrincipalTeamId(Number(storedId));
            } else {
                setPrincipalTeamId(null);
            }
        } catch (err) {
            console.error("Failed to load teams for draft top bar:", err);
        }
    };

    useEffect(() => {
        loadLeagueTeams();
    }, [league.id]);

    const handlePrincipalTeamChange = (teamId) => {
        setPrincipalTeamId(teamId);

        if (typeof window === "undefined") return;

        if (teamId) {
            localStorage.setItem(simTeamIdKey(league.id), String(teamId));
        } else {
            localStorage.removeItem(simTeamIdKey(league.id));
        }
    };

    const handleModeChange = (nextMode) => {
        setMode(nextMode);
    };

    const shouldShowTopBar = mode !== "summary";

    return (
        <>
            {shouldShowTopBar && (
                <DraftBoardTopBar
                    league={league}
                    mode={mode}
                    onModeChange={handleModeChange}
                    onBack={onBack}
                    teams={leagueTeams}
                    principalTeamId={principalTeamId}
                    onPrincipalTeamChange={handlePrincipalTeamChange}
                />
            )}

            {mode === "predraft" && (
                <PreDraftBoard
                    league={league}
                    onBack={onBack}
                    onModeChange={handleModeChange}
                    onLeagueUpdate={(updates) => {
                        updateLeague(updates);
                        loadLeagueTeams();
                    }}
                    principalTeamId={principalTeamId}
                />
            )}

            {mode === "simulation" && (
                <DraftSimulation
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={handleModeChange}
                    onLeagueUpdate={(updates) => {
                        updateLeague(updates);
                        loadLeagueTeams();
                    }}
                    principalTeamId={principalTeamId}
                    onPrincipalTeamChange={handlePrincipalTeamChange}
                />
            )}

            {mode === "live" && (
                <LiveDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={handleModeChange}
                    onLeagueUpdate={(updates) => {
                        updateLeague(updates);
                        loadLeagueTeams();
                    }}
                    principalTeamId={principalTeamId}
                />
            )}

            {mode === "summary" && (
                <DraftSummary
                    league={league}
                    onBack={onBack}
                    onModeChange={handleModeChange}
                />
            )}

            {mode === "taxi" && (
                <TaxiDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={handleModeChange}
                    principalTeamId={principalTeamId}
                />
            )}

            {mode === "minor" && (
                <MinorLeagueDraft
                    league={league}
                    onBack={() => setMode("predraft")}
                    onModeChange={handleModeChange}
                    principalTeamId={principalTeamId}
                />
            )}
        </>
    );
}