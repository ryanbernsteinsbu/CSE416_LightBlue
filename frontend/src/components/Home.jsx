import { useState } from "react"

export default function Home() {
    // TODO: replace with backend data later
    const [leagues, setLeagues] = useState([
        // start empty to test "No leagues" state:
        // []
        {
            id: 1,
            name: "EMPIRE BASEBALL LEAGUE",
            format: "KEEPER",
            teams: 12,
            season: 2026,
            seasonNum: 3,
        },
        {
            id: 2,
            name: "SKULL BEATERS LEAGUE",
            format: "RE-DRAFT",
            teams: 9,
            season: 2026,
            seasonNum: 5,
        },
    ]);

    const removeLeague = (id) => {
        setLeagues((prev) => prev.filter((l) => l.id !== id));
    };

    const onCreateLeague = () => {
        alert("Create league flow later");
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
                        <div className="league-card" key={league.id}>
                            <button
                                className="league-close"
                                type="button"
                                onClick={() => removeLeague(league.id)}
                                aria-label="Remove league"
                            >
                                ×
                            </button>

                            <div className="league-logo-placeholder" />

                            <div className="league-title">{league.name}</div>
                            <div className="league-subtitle">
                                {league.format} • {league.teams} TEAMS • {league.season} SEASON
                            </div>

                            <div className="league-season">Season {league.seasonNum}</div>
                        </div>
                    ))}
                </div>
            )}

            <button className="create-league-btn" type="button" onClick={onCreateLeague} aria-label="Create league">
                +
            </button>
        </div>

    );
}