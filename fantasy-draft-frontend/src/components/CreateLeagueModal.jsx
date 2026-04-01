import { useMemo, useState } from "react";
import { createLeague } from "../api/api";

// data to render sidebar buttons
const TABS = [
    { key: "draft", label: "Draft" },
    { key: "players", label: "Players" },
    { key: "roster", label: "Roster" },
    { key: "scoring", label: "Scoring" },
];

export default function CreateLeagueModal({ isOpen, onClose, onSave }) {
    const [step, setStep] = useState(1);
    const [activeTab, setActiveTab] = useState("draft");

    // Step 1 fields
    const [leagueName, setLeagueName] = useState("");
    const [logoFile, setLogoFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState("");

    // Step 2 (players settings)
    const[playerSettings, setPlayerSettings] = useState({
        positionEligibilityRule: true,
        multiPositionEnabled: false,
        prospectEligibility: false,
        rookieStatusFilter: false,
        prospects: false,
        minorLeaguePlayers: false,
        freeAgents: false,
        twoWayPlayerSplit: false,
        injuredPlayersDraftable: false,
        autoInjuryRiskIndicator: false,
        hideLongTermIL: false
    })

    // Step 3 (roster settings)
    const [rosterSettings, setRosterSettings] = useState({
        numCatchers: 2,
        numFirstBase: 1,
        numSecondBase: 1,
        numThirdBase: 1,
        numShortstop: 1,
        numCornerInfield: 1,
        numMiddleInfield: 1,
        numOutfield: 5,
        numUtility: 1,
        numPitchers: 9,
        numTaxi: 8
    })

    // Step 4 (scoring settings)
    const [scoringSettings, setScoringSettings] = useState({
        useAvg: true,
        useHr: true,
        useRbi: true,
        useSb: true,
        useRuns: true,
        useEra: true,
        useWhip: true,
        useWins: true,
        useStrikeouts: true,
        useSaves: true
    })
    
    // Step 5 (draftingSettings)
    const [draftSettings, setDraftSettings] = useState({
        budget: 260,
        numTeams: 0
    })

    // only allow Next if league name has something
    const canGoNext = useMemo(() => leagueName.trim().length > 0, [leagueName]);

    const onLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file.");
            return;
        }

        // cleanup previous preview url
        if (logoPreview) URL.revokeObjectURL(logoPreview);

        setLogoFile(file);
        const objectUrl = URL.createObjectURL(file);
        setLogoPreview(objectUrl);
    };

    const resetState = () => {
        setStep(1);
        setActiveTab("draft");
        setLeagueName("");
        setLogoFile(null);
        setLogoPreview("");
    }

    // handle closing modal
    const handleClose = () => {
        resetState();
        onClose?.();
    }
    // handle the next page
    const handleNext = () => {
        if (!canGoNext) return;
        setStep(2);
    }

    // handle the back button
    const handleBack = () => setStep(1);

    // handle saving the league
    const handleSave = async () => {
        const newLeague = {
            id: crypto.randomUUID(),
            name: leagueName.trim(),
            logoUrl: logoPreview || "",
            currRank: 0,
            projectFinish: 0,
            dateMade: new Date(),
            season: new Date().getFullYear(),
            status: "ACTIVE",
            draftSettings: {
                budget: draftSettings.budget,
                numTeams: draftSettings.numTeams
            },
            scoringSettings: {
                useAvg: scoringSettings.useAvg,
                useHr: scoringSettings.useHr,
                useRbi: scoringSettings.useRbi,
                useSb: scoringSettings.useSb,
                useRuns: scoringSettings.useRuns,
                useEra: scoringSettings.useEra,
                useWhip: scoringSettings.useWhip,
                useWins: scoringSettings.useWins,
                useStrikeouts: scoringSettings.useStrikeouts,
                useSaves: scoringSettings.useSaves
            },
            playerSettings: {
                positionEligibility: playerSettings.positionEligibilityRule,
                multiPositionEnabled: playerSettings.multiPositionEnabled,
                prospectEligibility: playerSettings.prospectEligibility,
                rookieStatusFilter: playerSettings.rookieStatusFilter,
                mlbOnly: playerSettings.mlbOnly,
                mlbPlusProspects: playerSettings.mlbPlusProspects,
                minorLeaguePlayers: playerSettings.minorLeaguePlayers,
                freeAgents: playerSettings.freeAgents,
                draftInjuredPlayers: playerSettings.draftInjuredPlayers,
                autoInjuryRisk: playerSettings.autoInjuryRiskIndicator,
                hideLongTermIL: playerSettings.hideLongTermIL,
                ohtaniRule: playerSettings.ohtaniRule
            },
            rosterSettings: {
                numCatchers: rosterSettings.numCatchers,
                numFirstBase: rosterSettings.numFirstBase,
                numSecondBase: rosterSettings.numSecondBase,
                numThirdBase: rosterSettings.numThirdBase,
                numShortstop: rosterSettings.numShortstop,
                numCornerInfield: rosterSettings.numCornerInfield,
                numMiddleInfield: rosterSettings.numMiddleInfield,
                numOutfield: rosterSettings.numOutfield,
                numUtility: rosterSettings.numUtility,
                numPitchers: rosterSettings.numPitchers,
                numTaxi: rosterSettings.numTaxi
            },
            logoFile,
        }
        try {
            const { data } = await createLeague(newLeague);
            onSave?.({ ...newLeague, id: Number(data.id), title: data.title });
            handleClose();
        } catch (err) {
            console.error("Failed to create league:", err);
            alert("Error creating league. Please try again.");
        }
    }

    // if modal isn't open, don't render anything
    if (!isOpen) return null;

    return (
        <div className="clm-backdrop" onClick={handleClose}>
            {/* stopPropagation so clicking the card doesn't close */}
            <div className="clm-card" onClick={(e) => e.stopPropagation()}>
                <button className="clm-close" type="button" onClick={handleClose} aria-label="Close">
                    ×
                </button>

                {step === 1 ? (
                    <div className="clm-step">
                        <div className="clm-title">Create League</div>

                        <div className="clm-field">
                            <input
                                className="clm-input"
                                value={leagueName}
                                onChange={(e) => setLeagueName(e.target.value)}
                                placeholder="League Name"
                            />
                        </div>

                        <div className="clm-field">
                            <label className="clm-label">Upload League Logo</label>

                            {/* Hidden real input */}
                            <input
                                id="clm-logo-input"
                                className="clm-file-hidden"
                                type="file"
                                accept="image/*"
                                onChange={onLogoChange}
                            />

                            {/* Pretty upload box */}
                            <label
                                htmlFor="clm-logo-input"
                                className="clm-dropzone"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = e.dataTransfer.files?.[0];
                                    if (!file) return;

                                    // reuse your same validation + preview logic
                                    if (!file.type.startsWith("image/")) {
                                        alert("Please upload an image file.");
                                        return;
                                    }

                                    if (logoPreview) URL.revokeObjectURL(logoPreview);
                                    setLogoFile(file);
                                    setLogoPreview(URL.createObjectURL(file));
                                }}
                            >
                                <div className="clm-dropicon" aria-hidden="true">⬆</div>
                                <div className="clm-droptext">
                                    <div className="clm-dropheadline">
                                        {logoFile ? "Replace file" : "Drag & drop or click to upload"}
                                    </div>
                                    <div className="clm-dropsub">
                                        PNG, JPG, GIF up to ~10MB
                                    </div>
                                    {logoFile && (
                                        <div className="clm-filename">{logoFile.name}</div>
                                    )}
                                </div>
                            </label>

                            {logoPreview && (
                                <img className="clm-logo-preview" src={logoPreview} alt="logo preview" />
                            )}
                        </div>

                        <div className="clm-footer">
                            <div />
                            <button className="clm-primary" type="button" onClick={handleNext} disabled={!canGoNext}>
                                Next →
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="clm-step2">
                        {/* Left tabs */}
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

                        {/* Right content */}
                        <div className="clm-main">
                            <div className="clm-title">Settings</div>
                            <div className="clm-subtitle">{leagueName}</div>
                            {activeTab === "players" ? (
                                <div className="clm-panel">
                                    <div className="clm-section">
                                        <h3 className="clm-section-title">Eligibility</h3>
                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Position Eligibility Rule</span>
                                            <button className={`clm-toggle ${playerSettings.positionEligibilityRule ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, positionEligibilityRule: !prev.positionEligibilityRule}))}
                                            > {playerSettings.positionEligibilityRule ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Multi-Position Enabled</span>
                                            <button className={`clm-toggle ${playerSettings.multiPositionEnabled ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, multiPositionEnabled: !prev.multiPositionEnabled}))}
                                            > {playerSettings.multiPositionEnabled ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Prospect Eligibility</span>
                                            <button className={`clm-toggle ${playerSettings.prospectEligibility ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, prospectEligibility: !prev.prospectEligibility}))}
                                            > {playerSettings.prospectEligibility ? "ON" : "OFF"}</button>
                                        </div>


                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Rookie Status Filter</span>
                                            <button className={`clm-toggle ${playerSettings.rookieStatusFilter ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, rookieStatusFilter: !prev.rookieStatusFilter}))}
                                            > {playerSettings.rookieStatusFilter ? "ON" : "OFF"}</button>
                                        </div>
                                    </div>

                                    <div className="clm-section">
                                        <h3 className="clm-section-title">Player Pool</h3>
                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Include Prospects</span>
                                            <button className={`clm-toggle ${playerSettings.prospects ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, prospects: !prev.prospects}))}
                                            > {playerSettings.prospects ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Include Minor League Players</span>
                                            <button className={`clm-toggle ${playerSettings.minorLeaguePlayers ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, minorLeaguePlayers: !prev.minorLeaguePlayers}))}
                                            > {playerSettings.minorLeaguePlayers ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Include Free Agents</span>
                                            <button className={`clm-toggle ${playerSettings.freeAgents ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, freeAgents: !prev.freeAgents}))}
                                            > {playerSettings.freeAgents ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Include Two Way Player Split</span>
                                            <button className={`clm-toggle ${playerSettings.twoWayPlayerSplit ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, twoWayPlayerSplit: !prev.twoWayPlayerSplit}))}
                                            > {playerSettings.twoWayPlayerSplit ? "ON" : "OFF"}</button>
                                        </div>
                                    </div>

                                    <div className="clm-section">
                                        <h3 className="clm-section-title">Injury Handling</h3>
                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Injured Players Draftable</span>
                                            <button className={`clm-toggle ${playerSettings.injuredPlayersDraftable ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, injuredPlayersDraftable: !prev.injuredPlayersDraftable}))}
                                            > {playerSettings.injuredPlayersDraftable ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Auto Injury Risk Indicator</span>
                                            <button className={`clm-toggle ${playerSettings.autoInjuryRiskIndicator ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, autoInjuryRiskIndicator: !prev.autoInjuryRiskIndicator}))}
                                            > {playerSettings.autoInjuryRiskIndicator ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Hide Long Term IL</span>
                                            <button className={`clm-toggle ${playerSettings.hideLongTermIL ? "on" : "off"}`}
                                                    onClick={() => setPlayerSettings(prev => ({...prev, hideLongTermIL: !prev.hideLongTermIL}))}
                                            > {playerSettings.hideLongTermIL ? "ON" : "OFF"}</button>
                                        </div>
                                    </div>
                                </div>
                            ) : activeTab === "roster" ? (
                                <div className="clm-panel">
                                    <h3>Roster</h3>
                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Catchers</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numCatchers}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numCatchers: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of First Basemen</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numFirstBase}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numFirstBase: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Second Basemen</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numSecondBase}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numSecondBase: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Third Basemen</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numThirdBase}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numThirdBase: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Shortstop</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numShortstop}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numShortstop: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Corner Infield</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numCornerInfield}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numCornerInfield: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Middle Infield</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numMiddleInfield}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numMiddleInfield: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Outfielders</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numOutfield}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numOutfield: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Utility Players</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numUtility}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numUtility: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>
                                    
                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Pitchers</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numPitchers}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numPitchers: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Taxi Players</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={rosterSettings.numTaxi}
                                            min={0}
                                            onChange={(e) => setRosterSettings(prev => ({...prev, numTaxi: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>                                            
                                </div>
                            ): activeTab === "scoring" ? (
                                <div className="clm-panel">
                                    <div className="clm-section">
                                        <h3 className="clm-section-title">Hitters</h3>
                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Batting Average</span>
                                            <button className={`clm-toggle ${scoringSettings.useAvg ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useAvg: !prev.useAvg}))}
                                            > {scoringSettings.useAvg ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Home Runs</span>
                                            <button className={`clm-toggle ${scoringSettings.useHr ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useHr: !prev.useHr}))}
                                            > {scoringSettings.useHr ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Runs Batted In</span>
                                            <button className={`clm-toggle ${scoringSettings.useRbi ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useRbi: !prev.useRbi}))}
                                            > {scoringSettings.useRbi ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Stolen Bases</span>
                                            <button className={`clm-toggle ${scoringSettings.useSb ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useSb: !prev.useSb}))}
                                            > {scoringSettings.useSb ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Runs</span>
                                            <button className={`clm-toggle ${scoringSettings.useRuns ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useRuns: !prev.useRuns}))}
                                            > {scoringSettings.useRuns ? "ON" : "OFF"}</button>
                                        </div>
                                    </div>

                                    <div className="clm-section">
                                        <h3 className="clm-section-title">Pitchers</h3>
                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Earned Run Average</span>
                                            <button className={`clm-toggle ${scoringSettings.useEra ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useEra: !prev.useEra}))}
                                            > {scoringSettings.useEra ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use WHIP</span>
                                            <button className={`clm-toggle ${scoringSettings.useWhip ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useWhip: !prev.useWhip}))}
                                            > {scoringSettings.useWhip ? "ON" : "OFF"}</button>
                                        </div>

                                         <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Wins</span>
                                            <button className={`clm-toggle ${scoringSettings.useWins ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useWins: !prev.useWins}))}
                                            > {scoringSettings.useWins ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Strikeouts</span>
                                            <button className={`clm-toggle ${scoringSettings.useStrikeouts ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useStrikeouts: !prev.useStrikeouts}))}
                                            > {scoringSettings.useStrikeouts ? "ON" : "OFF"}</button>
                                        </div>

                                        <div className="clm-toggle-row">
                                            <span className="clm-toggle-label">Use Saves</span>
                                            <button className={`clm-toggle ${scoringSettings.useSaves ? "on" : "off"}`}
                                                    onClick={() => setScoringSettings(prev => ({...prev, useSaves: !prev.useSaves}))}
                                            > {scoringSettings.useSaves ? "ON" : "OFF"}</button>
                                        </div>
                                    </div>
                                </div>
                            ):activeTab === "draft" ? ( 
                                <div className="clm-panel">
                                    <h3>Draft</h3>
                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Budget</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={draftSettings.budget}
                                            min={0}
                                            onChange={(e) => setDraftSettings(prev => ({...prev, budget: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>

                                    <div className="clm-num-row">
                                        <span className="clm-num-label">Number of Teams</span>
                                        <input
                                            type="number"
                                            className="clm-num-input"
                                            value={draftSettings.numTeams}
                                            min={0}
                                            onChange={(e) => setDraftSettings(prev => ({...prev, numTeams: parseInt(e.target.value) || 0
                                            }))}
                                        />
                                    </div>
                                </div>
                            ):(
                                <div className="clm-panel">
                                    <div className="clm-placeholder">
                                        {TABS.find((t) => t.key === activeTab)?.label} setup goes here (later).
                                    </div>
                                </div>
                            )}

                            <div className="clm-footer">
                                <button className="clm-secondary" type="button" onClick={handleBack}>
                                    ← Back
                                </button>
                                <button className="clm-primary" type="button" onClick={handleSave}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}