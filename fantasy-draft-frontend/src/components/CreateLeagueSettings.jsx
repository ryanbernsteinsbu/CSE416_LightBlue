import React from "react";
import { TABS } from "./createLeagueHelpers";

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

        {activeTab === "players" ? (
          <div className="clm-panel">
            <div className="clm-section">
              <h3 className="clm-section-title">Eligibility</h3>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Position Eligibility Rule</span>
                <button
                  className={`clm-toggle ${playerSettings.positionEligibilityRule ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      positionEligibilityRule: !prev.positionEligibilityRule,
                    }))
                  }
                >
                  {playerSettings.positionEligibilityRule ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Multi-Position Enabled</span>
                <button
                  className={`clm-toggle ${playerSettings.multiPositionEnabled ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      multiPositionEnabled: !prev.multiPositionEnabled,
                    }))
                  }
                >
                  {playerSettings.multiPositionEnabled ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Prospect Eligibility</span>
                <button
                  className={`clm-toggle ${playerSettings.prospectEligibility ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      prospectEligibility: !prev.prospectEligibility,
                    }))
                  }
                >
                  {playerSettings.prospectEligibility ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Rookie Status Filter</span>
                <button
                  className={`clm-toggle ${playerSettings.rookieStatusFilter ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      rookieStatusFilter: !prev.rookieStatusFilter,
                    }))
                  }
                >
                  {playerSettings.rookieStatusFilter ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            <div className="clm-section">
              <h3 className="clm-section-title">Player Pool</h3>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Include Prospects</span>
                <button
                  className={`clm-toggle ${playerSettings.prospects ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      prospects: !prev.prospects,
                    }))
                  }
                >
                  {playerSettings.prospects ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Include Minor League Players</span>
                <button
                  className={`clm-toggle ${playerSettings.minorLeaguePlayers ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      minorLeaguePlayers: !prev.minorLeaguePlayers,
                    }))
                  }
                >
                  {playerSettings.minorLeaguePlayers ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Include Free Agents</span>
                <button
                  className={`clm-toggle ${playerSettings.freeAgents ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      freeAgents: !prev.freeAgents,
                    }))
                  }
                >
                  {playerSettings.freeAgents ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Include Two Way Player Split</span>
                <button
                  className={`clm-toggle ${playerSettings.twoWayPlayerSplit ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      twoWayPlayerSplit: !prev.twoWayPlayerSplit,
                    }))
                  }
                >
                  {playerSettings.twoWayPlayerSplit ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            <div className="clm-section">
              <h3 className="clm-section-title">Injury Handling</h3>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Injured Players Draftable</span>
                <button
                  className={`clm-toggle ${playerSettings.injuredPlayersDraftable ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      injuredPlayersDraftable: !prev.injuredPlayersDraftable,
                    }))
                  }
                >
                  {playerSettings.injuredPlayersDraftable ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Auto Injury Risk Indicator</span>
                <button
                  className={`clm-toggle ${playerSettings.autoInjuryRiskIndicator ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      autoInjuryRiskIndicator: !prev.autoInjuryRiskIndicator,
                    }))
                  }
                >
                  {playerSettings.autoInjuryRiskIndicator ? "ON" : "OFF"}
                </button>
              </div>

              <div className="clm-toggle-row">
                <span className="clm-toggle-label">Hide Long Term IL</span>
                <button
                  className={`clm-toggle ${playerSettings.hideLongTermIL ? "on" : "off"}`}
                  onClick={() =>
                    setPlayerSettings((prev) => ({
                      ...prev,
                      hideLongTermIL: !prev.hideLongTermIL,
                    }))
                  }
                >
                  {playerSettings.hideLongTermIL ? "ON" : "OFF"}
                </button>
              </div>
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
                ["Use Batting Average", "useAvg"],
                ["Use Home Runs", "useHr"],
                ["Use Runs Batted In", "useRbi"],
                ["Use Stolen Bases", "useSb"],
                ["Use Runs", "useRuns"],
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

            <div className="clm-section">
              <h3 className="clm-section-title">Pitchers</h3>

              {[
                ["Use Earned Run Average", "useEra"],
                ["Use WHIP", "useWhip"],
                ["Use Wins", "useWins"],
                ["Use Strikeouts", "useStrikeouts"],
                ["Use Saves", "useSaves"],
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