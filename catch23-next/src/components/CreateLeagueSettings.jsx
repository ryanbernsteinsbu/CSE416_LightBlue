import React from "react";
import { TABS } from "./CreateLeagueHelpers.jsx";

export default function CreateLeagueSettings({
  activeTab,
  setActiveTab,
  leagueName,
  playerSettings,
  setPlayerSettings,
  rosterSettings,
  setRosterSettings,
  scoringSettings,
  setScoringSettings,
  draftSettings,
  setDraftSettings,
  onBack,
  onSave,
}) {
  return (
    <div className="clm-step2">
      <div className="clm-sidebar">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={activeTab === t.key ? "clm-tab active" : "clm-tab"}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="clm-main">
        <div className="clm-title">Settings</div>
        <div className="clm-subtitle">{leagueName}</div>

        { activeTab === "players" ? (
          <div className="clm-panel">
            {false && (
            <div className="clm-section">
              <h3 className="clm-section-title">Ohtani Rule</h3>
              {[
                { value: "ONE_PLAYER", label: "One Player" },
                { value: "TWO_PLAYERS", label: "Two Players" },
                { value: "MIXED", label: "Mixed" },
              ].map((option) => (
                <div className="clm-toggle-row" key={option.value}>
                  <span className="clm-toggle-label">{option.label}</span>
                  <button
                    className={`clm-toggle ${playerSettings.ohtaniRule === option.value ? "on" : "off"}`}
                    onClick={() =>
                      setPlayerSettings((prev) => ({
                        ...prev,
                        ohtaniRule: option.value,
                      }))
                    }
                  >
                    {playerSettings.ohtaniRule === option.value ? "ON" : "OFF"}
                  </button>
                </div>
              ))}
            </div>)}

            <div className="clm-section">
              <h3 className="clm-section-title">Division</h3>
              {[
                { value: "AL", label: "American League (AL)" },
                { value: "NL", label: "National League (NL)" },
                { value: "MIXED", label: "Mixed" },
              ].map((option) => (
                <div className="clm-toggle-row" key={option.value}>
                  <span className="clm-toggle-label">{option.label}</span>
                  <button
                    className={`clm-toggle ${playerSettings.division === option.value ? "on" : "off"}`}
                    onClick={() =>
                      setPlayerSettings((prev) => ({
                        ...prev,
                        division: option.value,
                      }))
                    }
                  >
                    {playerSettings.division === option.value ? "ON" : "OFF"}
                  </button>
                </div>
              ))}
            </div>

          </div>
        ) : activeTab === "roster" ? (
          <div className="clm-panel">
            <h3>Roster</h3>

            {[
              ["Number of Catchers", "numCatchers"],
              ["Number of First Basemen", "numFirstBase"],
              ["Number of Second Basemen", "numSecondBase"],
              ["Number of Third Basemen", "numThirdBase"],
              ["Number of Shortstop", "numShortstop"],
              ["Number of Corner Infield", "numCornerInfield"],
              ["Number of Middle Infield", "numMiddleInfield"],
              ["Number of Outfielders", "numOutfield"],
              ["Number of Utility Players", "numUtility"],
              ["Number of Pitchers", "numPitchers"],
              ["Number of Taxi Players", "numTaxi"],
              ["Number of Minor League Players", "numMinor"]
            ].map(([label, key]) => (
              <div className="clm-num-row" key={key}>
                <span className="clm-num-label">{label}</span>
                <input
                  type="number"
                  className="clm-num-input"
                  value={rosterSettings[key]}
                  min={0}
                  onChange={(e) =>
                    setRosterSettings((prev) => ({
                      ...prev,
                      [key]: parseInt(e.target.value) || 0,
                    }))
                  }
                />
              </div>
            ))}
          </div>
        ) : activeTab === "scoring" ? (
          <div className="clm-panel">
            <div className="clm-section">
              <h3 className="clm-section-title">Hitters</h3>

              {[
                ["Home Run Weight", "hrWeight"],
                ["RBI Weight", "rbiWeight"],
                ["Stolen Base Weight", "sbWeight"],
                ["Batting Average Weight", "avgWeight"],
                ["Runs Weight", "runsWeight"],
              ].map(([label, key]) => (
                <div className="clm-num-row" key={key}>
                  <span className="clm-num-label">{label}</span>
                  <input
                    type="number"
                    className="clm-num-input"
                    value={scoringSettings[key]}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={(e) =>
                      setScoringSettings((prev) => ({
                        ...prev,
                        [key]: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </div>
              ))}
            </div>

            <div className="clm-section">
              <h3 className="clm-section-title">Pitchers</h3>

              {[
                ["ERA Weight", "eraWeight"],
                ["WHIP Weight", "whipWeight"],
                ["Wins Weight", "winsWeight"],
                ["Strikeouts Weight", "strikeoutsWeight"],
                ["Saves Weight", "savesWeight"],
              ].map(([label, key]) => (
                <div className="clm-num-row" key={key}>
                  <span className="clm-num-label">{label}</span>
                  <input
                    type="number"
                    className="clm-num-input"
                    value={scoringSettings[key]}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={(e) =>
                      setScoringSettings((prev) => ({
                        ...prev,
                        [key]: parseFloat(e.target.value) || 0,
                      }))
                    }
                  />
                </div>
              ))}
            </div>
            <div className="clm-section">
              <h3 className="clm-section-title">Stat Windows</h3>

              {[
                ["Use Last Year Stats", "useLastYear"],
                ["Use 3-Year Average", "useThreeYearAvg"],
                ["Use Projected Stats", "useProjected"],
              ].map(([label, key]) => (
                <div className="clm-toggle-row" key={key}>
                  <span className="clm-toggle-label">{label}</span>
                  <button
                    className={`clm-toggle ${scoringSettings[key] ? "on" : "off"}`}
                    onClick={() =>
                      setScoringSettings((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }))
                    }
                  >
                    {scoringSettings[key] ? "ON" : "OFF"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "draft" ? (
          <div className="clm-panel">
            <h3>Draft</h3>

            <div className="clm-num-row">
              <span className="clm-num-label">Budget</span>
              <input
                type="number"
                className="clm-num-input"
                value={draftSettings.budget}
                min={0}
                onChange={(e) =>
                  setDraftSettings((prev) => ({
                    ...prev,
                    budget: parseInt(e.target.value) || 0,
                  }))
                }
              />
            </div>

            <div className="clm-num-row">
              <span className="clm-num-label">Number of Teams</span>
              <input
                type="number"
                className="clm-num-input"
                value={draftSettings.numTeams}
                min={0}
                onChange={(e) =>
                  setDraftSettings((prev) => ({
                    ...prev,
                    numTeams: parseInt(e.target.value) || 0,
                  }))
                }
              />
            </div>
          </div>
        ) : (
          <div className="clm-panel">
            <div className="clm-placeholder">Settings go here later.</div>
          </div>
        )}

        <div className="clm-footer">
          <button className="clm-secondary" type="button" onClick={onBack}>
            ← Back
          </button>
          <button className="clm-primary" type="button" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
