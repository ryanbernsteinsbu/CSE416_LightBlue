"use client";

import { useEffect, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import CreateLeagueModal from "./CreateLeagueModal";
import LeagueDraftController from "./LeagueDraftController";
import { getUserLeagues, deleteLeague, getLeagueTeams } from "../lib/api";

export default function Home({ activeLeague, setActiveLeague }) {
  const [leagues, setLeagues] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [initialMode, setInitialMode] = useState(null);

  const DEFAULT_LOGO = "https://i.imgur.com/DxHxkuJ.png";

  const fetchLeagues = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      if (!userId) {
        console.log("No user_id found, skipping league fetch");
        setLeagues([]);
        return;
      }

      const { data } = await getUserLeagues(userId);

      const leaguesWithCounts = await Promise.all(
        data.map(async (league) => {
          const { data: teams } = await getLeagueTeams(league.id);
          return { ...league, teamCount: teams.length };
        })
      );

      setLeagues(leaguesWithCounts);
    } catch (error) {
      console.error("Error loading leagues:", error);
    }
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  // open league directly into a specific mode 
  const openLeague = (league, mode = null) => {
    setInitialMode(mode);
    setActiveLeague(league);
  };

  const onCreateLeague = () => {
    setIsCreateOpen(true);
  };

  if (activeLeague) {
    return (
      <LeagueDraftController
        league={activeLeague}
        initialMode={initialMode}
        onBack={() => {
          setActiveLeague(null);
          setInitialMode(null);
          fetchLeagues();
        }}
      />
    );
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-leagues-title">Leagues</h1>
        <div className="tooltip-wrap tooltip-right" data-tip="Create a new league">
          <button className="create-league-btn" onClick={() => setIsCreateOpen(true)}>
            +
          </button>
        </div>
      </div>

      {leagues.length === 0 ? (
        <div className="home-empty">
          <h2>No leagues yet.</h2>
          <p>Click the button to create one.</p>
        </div>
      ) : (
        <div className="league-grid">
          {leagues.map((league) => {
            const isDrafted = league.status === "DRAFTED"; 
            return (
              <div
                className="league-card"
                key={league.id}
                onClick={() => openLeague(league)} 
              >
                <button
                  className="league-close"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteTarget({
                      id: league.id,
                      name: league.title || league.name,
                    });
                  }}
                  aria-label="Remove league"
                >
                  ×
                </button>

                <img
                  className="league-logo-placeholder"
                  src={
                    league.leagueIconUrl ||
                    league.league_icon_url ||
                    league.logoUrl ||
                    DEFAULT_LOGO
                  }
                  alt="league logo"
                />

                <div className="league-title">{league.title || league.name}</div>

                <div className="league-subtitle">
                  {league.format} • {league.teamCount ?? 0} TEAMS • {league.season} SEASON
                </div>

                <div className="league-season">Season {league.season}</div>

                {isDrafted && (
                  <button
                    className="league-summary-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLeague(league, "summary");
                    }}
                  >
                    📊 View Draft Summary
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={!!deleteTarget}
        leagueName={deleteTarget?.name || ""}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={async () => {
          try {
            await deleteLeague(deleteTarget.id);
            setLeagues((prev) =>
              prev.filter((l) => l.id !== deleteTarget.id)
            );
            setDeleteTarget(null);
          } catch (err) {
            console.error("Failed to delete league:", err);
            alert("Error deleting league. Please try again.");
          }
        }}
      />

      <CreateLeagueModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSave={() => {
          setIsCreateOpen(false);
          fetchLeagues();
        }}
      />
    </div>
  );
}
