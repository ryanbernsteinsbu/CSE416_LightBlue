import React from "react";

export default function CreateLeagueStepOne({
  leagueName,
  setLeagueName,
  logoFile,
  logoPreview,
  onLogoChange,
  setLogoFile,
  setLogoPreview,
  canGoNext,
  onNext,
}) {
  return (
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

      <div className="clm-footer">
        <div />
        <button
          className="clm-primary"
          type="button"
          onClick={onNext}
          disabled={!canGoNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
}