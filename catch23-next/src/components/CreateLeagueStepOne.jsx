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

      <div className="clm-field">
        <label className="clm-label">Upload League Logo</label>

        <input
          id="clm-logo-input"
          className="clm-file-hidden"
          type="file"
          accept="image/*"
          onChange={onLogoChange}
        />

        <label
          htmlFor="clm-logo-input"
          className="clm-dropzone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (!file) return;

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
            <div className="clm-dropsub">PNG, JPG, GIF up to ~10MB</div>
            {logoFile && <div className="clm-filename">{logoFile.name}</div>}
          </div>
        </label>

        {logoPreview && (
          <img className="clm-logo-preview" src={logoPreview} alt="logo preview" />
        )}
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