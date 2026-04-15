import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function UserProfile() {
  const token = localStorage.getItem("token");
  const [logoutHover, setLogoutHover, editHover, setEditHover] = useState(false);

  let user = {};
  try {
    user = token ? jwtDecode(token) : {};
  } catch {
    user = {};
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        
        {/* TOP */}
        <div className="profile-top-section">
          <div className="profile-avatar-ring">
            <i className="fa-solid fa-user" />
          </div>
          <h2 className="profile-name">
            {user.username || user.name || "Player"}
          </h2>
        </div>

        {/* MIDDLE */}
        <div className="profile-info-grid">
          {user.email && (
            <div className="profile-field">
              <p className="profile-label">Email</p>
              <p className="profile-value">{user.email}</p>
            </div>
          )}

          <div className="profile-field">
            <p className="profile-label">Player ID</p>
            <p className="profile-value">{user.id || user.sub || "—"}</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="profile-actions">
          <button
            className="profile-btn"
            onMouseEnter={() => setEditHover(true)}
            onMouseLeave={() => setEditHover(false)}
            style={{
              background: editHover
                ? "rgba(255,255,255,0.18)"
                : undefined,
            }}
            onClick={() => {
            //   localStorage.clear();
            //   window.location.reload();
            }}
          >
            Edit Profile
          </button>
          <button
            className="profile-btn profile-logout"
            onMouseEnter={() => setLogoutHover(true)}
            onMouseLeave={() => setLogoutHover(false)}
            style={{
              background: logoutHover
                ? "rgba(200,50,50,0.35)"
                : undefined,
            }}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            <i className="fa-solid fa-right-from-bracket" />
            Log Out
          </button>
        </div>

      </div>
    </div>
  );
}