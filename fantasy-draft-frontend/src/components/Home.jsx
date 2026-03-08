import { useEffect, useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import CreateLeagueModal from "./CreateLeagueModal";
import LeagueDraftBoard from "./LeagueDraftBoard";
import { getUserLeagues, deleteLeague } from "../api/api";

export default function Home() {
  // TODO: replace with backend data later
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [activeLeague, setActiveLeague] = useState(null); // track which league is open

  const DEFAULT_LOGO = 'https://i.imgur.com/DxHxkuJ.png';
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const user_id = localStorage.getItem('user_id');
        console.log('fetching leagues for user_id:', user_id);
        const { data } = await getUserLeagues(user_id);
        console.log('leagues from DB:', data);
        setLeagues(data);
      } catch (err) {
        console.error("Failed to fetch leagues:", err);
      }
    };
    fetchLeagues();
  }, []);


  if (activeLeague) {
    return (
      <LeagueDraftBoard
        league={activeLeague}
        onBack={() => setActiveLeague(null)}
      />
    );
  }

  const removeLeague = (id) => {
    setLeagues((prev) => prev.filter((l) => l.id !== id));
  };

  const onCreateLeague = () => {
    setIsCreateOpen(true);
  }

  return (
    <div className="home">
      {leagues.length === 0 ? (
        <div className="home-empty">
          <h2>No leagues yet.</h2>
          <p>Click the button to create one.</p>
        </div>
      ) : (
        <div className="league-grid">
          {leagues.map((league) => (
            <div className="league-card" key={league.id} onClick={() => setActiveLeague(league)}>
              <button
                className="league-close"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDeleteTarget({ id: league.id, name: league.name });
                }}
                aria-label="Remove league"
              >
                ×
              </button>

              <img
                className="league-logo-placeholder"
                src={league.leagueIconUrl || league.league_icon_url || league.logoUrl || DEFAULT_LOGO}
                alt="league logo"
              />

              <div className="league-title">{league.title || league.name}</div>
              <div className="league-subtitle">
                {league.format} • {league.teams} TEAMS • {league.season} SEASON
              </div>

              <div className="league-season">Season {league.seasonNum}</div>
            </div>
          ))}
        </div>
      )}
      <ConfirmDeleteModal
        isOpen={!!deleteTarget}
        leagueName={deleteTarget?.name || ""}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={async () => {
          try {
            await deleteLeague(deleteTarget.id);
            setLeagues((prev) => prev.filter((l) => l.id !== deleteTarget.id));
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
        onSave={(newLeague) => {
          setLeagues((prev) => [newLeague, ...prev]);
        }}
      />

      <button className="create-league-btn" type="button" onClick={onCreateLeague} aria-label="Create league">
        +
      </button>
    </div>
  );
}

// For evelyn
// DELETE FROM scoring_settings;
// DELETE FROM player_settings;
// DELETE FROM roster_settings;
// DELETE FROM draft_settings;
// DELETE FROM league;