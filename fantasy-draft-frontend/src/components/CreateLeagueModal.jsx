import { useMemo, useState } from "react";
import { createLeague } from "../api/api";

// data to render sidebar buttons
const TABS = [
    { key: "settings", label: "Settings" },
    { key: "rankings", label: "Rankings" },
    { key: "cheatsheet", label: "Cheatsheet" },
    { key: "sleepers", label: "Sleepers" },
    { key: "projections", label: "Projections" },
];

export default function CreateLeagueModal({ isOpen, onClose, onSave }) {
    const [step, setStep] = useState(1);
    const [activeTab, setActiveTab] = useState("settings");

    // Step 1 fields
    const [leagueName, setLeagueName] = useState("");
    const [logoFile, setLogoFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState("");

    // Step 2 (settings)
    const [format, setFormat] = useState("KEEPER");
    const [teams, setTeams] = useState(12);
    const [season, setSeason] = useState(2026);

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
        setActiveTab("settings");
        setLeagueName("");
        setLogoFile(null);
        setLogoPreview("");
        setFormat("KEEPER");
        setTeams(12);
        setSeason(2026);
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
            format,
            teams: Number(teams),
            season: Number(season),
            seasonNum: 1, // placeholder for now
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
                            <div className="clm-title">League Setup</div>
                            <div className="clm-subtitle">{leagueName}</div>

                            {activeTab === "settings" ? (
                                <div className="clm-panel">
                                    <div className="clm-row">
                                        <div className="clm-field">
                                            <label className="clm-label">Format</label>
                                            <select className="clm-input" value={format} onChange={(e) => setFormat(e.target.value)}>
                                                <option value="KEEPER">KEEPER</option>
                                                <option value="RE-DRAFT">RE-DRAFT</option>
                                            </select>
                                        </div>

                                        <div className="clm-field">
                                            <label className="clm-label">Teams</label>
                                            <input
                                                className="clm-input"
                                                type="number"
                                                min="2"
                                                max="30"
                                                value={teams}
                                                onChange={(e) => setTeams(e.target.value)}
                                            />
                                        </div>

                                        <div className="clm-field">
                                            <label className="clm-label">Season</label>
                                            <input
                                                className="clm-input"
                                                type="number"
                                                min="2000"
                                                max="2100"
                                                value={season}
                                                onChange={(e) => setSeason(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
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