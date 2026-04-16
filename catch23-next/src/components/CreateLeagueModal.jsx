'use client';
import { useMemo, useState } from "react";
import { createLeague } from "../lib/api";
import CreateLeagueStepOne from "./CreateLeagueStepOne";
import CreateLeagueSettings from "./CreateLeagueSettings";
import {
  INITIAL_PLAYER_SETTINGS,
  INITIAL_ROSTER_SETTINGS,
  INITIAL_SCORING_SETTINGS,
  INITIAL_DRAFT_SETTINGS,
  buildLeaguePayload,
} from "./CreateLeagueHelpers";

export default function CreateLeagueModal({ isOpen, onClose, onSave }) {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("draft");

  const [leagueName, setLeagueName] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  const [playerSettings, setPlayerSettings] = useState(INITIAL_PLAYER_SETTINGS);
  const [rosterSettings, setRosterSettings] = useState(INITIAL_ROSTER_SETTINGS);
  const [scoringSettings, setScoringSettings] = useState(INITIAL_SCORING_SETTINGS);
  const [draftSettings, setDraftSettings] = useState(INITIAL_DRAFT_SETTINGS);

  const canGoNext = useMemo(() => leagueName.trim().length > 0, [leagueName]);

  const onLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    if (logoPreview) URL.revokeObjectURL(logoPreview);

    setLogoFile(file);
    const objectUrl = URL.createObjectURL(file);
    setLogoPreview(objectUrl);
  };

  const resetState = () => {
    if (logoPreview) URL.revokeObjectURL(logoPreview);

    setStep(1);
    setActiveTab("draft");
    setLeagueName("");
    setLogoFile(null);
    setLogoPreview("");
    setPlayerSettings(INITIAL_PLAYER_SETTINGS);
    setRosterSettings(INITIAL_ROSTER_SETTINGS);
    setScoringSettings(INITIAL_SCORING_SETTINGS);
    setDraftSettings(INITIAL_DRAFT_SETTINGS);
  };

  const handleClose = () => {
    resetState();
    onClose?.();
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSave = async () => {
    const newLeague = buildLeaguePayload({
      leagueName,
      logoPreview,
      logoFile,
      draftSettings,
      scoringSettings,
      playerSettings,
      rosterSettings,
    });

    try {
        console.log("payload being sent:", newLeague);
        const { data } = await createLeague(newLeague);
        console.log("response from backend:", data);
      onSave?.({ ...newLeague, id: Number(data.id), title: data.title });
      handleClose();
    } catch (err) {
      console.error("Failed to create league:", err);
      alert("Error creating league. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="clm-backdrop" onClick={handleClose}>
      <div className="clm-card" onClick={(e) => e.stopPropagation()}>
        <button className="clm-close" type="button" onClick={handleClose} aria-label="Close">
          ×
        </button>

        {step === 1 ? (
          <CreateLeagueStepOne
            leagueName={leagueName}
            setLeagueName={setLeagueName}
            logoFile={logoFile}
            logoPreview={logoPreview}
            onLogoChange={onLogoChange}
            setLogoFile={setLogoFile}
            setLogoPreview={setLogoPreview}
            canGoNext={canGoNext}
            onNext={handleNext}
          />
        ) : (
          <CreateLeagueSettings
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            leagueName={leagueName}
            playerSettings={playerSettings}
            setPlayerSettings={setPlayerSettings}
            rosterSettings={rosterSettings}
            setRosterSettings={setRosterSettings}
            scoringSettings={scoringSettings}
            setScoringSettings={setScoringSettings}
            draftSettings={draftSettings}
            setDraftSettings={setDraftSettings}
            onBack={handleBack}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}