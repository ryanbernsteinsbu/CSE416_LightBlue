"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [displayName, setDisplayName] = useState("");

    // Panel state: null | "editProfile" | "changePassword"
    const [activePanel, setActivePanel] = useState(null);

    // Edit profile state
    const [newUsername, setNewUsername] = useState("");
    const [editStatus, setEditStatus] = useState(null);
    const [editError, setEditError] = useState("");

    // Change password state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pwStatus, setPwStatus] = useState(null);
    const [pwError, setPwError] = useState("");

    useEffect(() => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                window.location.href = "/";
                return;
            }
            const decoded = jwtDecode(token);
            setUser(decoded);
            const name = decoded.displayName || decoded.username || decoded.name || "Player";
            setDisplayName(name);
            setNewUsername(name);
        } catch (err) {
            console.error("Error decoding token:", err);
            setError("Could not load user profile.");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        window.location.href = "/";
    };

    const closePanel = () => {
        setActivePanel(null);
        setEditError("");
        setEditStatus(null);
        setPwError("");
        setPwStatus(null);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setNewUsername(displayName);
    };

    // ── Edit profile submit ──────────────────────────────────────────────────
    const handleEditProfile = async (e) => {
        e.preventDefault();
        setEditError("");

        if (!newUsername.trim()) {
            setEditError("Display name cannot be empty.");
            return;
        }
        if (newUsername.trim() === displayName) {
            setEditError("That's already your display name.");
            return;
        }

        try {
            setEditStatus("saving");
            const token = localStorage.getItem("token");
            await axios.put(
                "/api/auth/update-profile",
                { username: newUsername.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setDisplayName(newUsername.trim());
            setEditStatus("success");
            setTimeout(() => {
                setEditStatus(null);
                setActivePanel(null);
            }, 2000);
        } catch (err) {
            setEditStatus("error");
            setEditError(err.response?.data?.error || "Failed to update display name.");
        }
    };

    // ── Change password submit ───────────────────────────────────────────────
    const handleChangePassword = async (e) => {
        e.preventDefault();
        setPwError("");

        if (newPassword !== confirmPassword) {
            setPwError("New passwords do not match.");
            return;
        }
        if (newPassword.length < 8) {
            setPwError("New password must be at least 8 characters.");
            return;
        }

        try {
            setPwStatus("saving");
            const token = localStorage.getItem("token");
            await axios.put(
                "/api/auth/change-password",
                { currentPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setPwStatus("success");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setPwStatus(null);
                setActivePanel(null);
            }, 2000);
        } catch (err) {
            setPwStatus("error");
            setPwError(err.response?.data?.error || "Failed to update password. Check your current password.");
        }
    };

    if (error) return (
        <div className="profile-page">
            <div className="profile-card">
                <h2 style={{ color: "white" }}>{error}</h2>
            </div>
        </div>
    );

    if (!user) return (
        <div className="profile-page">
            <div className="profile-card">
                <h2 style={{ color: "white" }}>Loading profile...</h2>
            </div>
        </div>
    );

    return (
        <div className="profile-page">
            <div className="profile-card">

                {/* Avatar + name */}
                <div className="profile-top-section">
                    <div className="profile-avatar-ring">
                        <i className="fa-solid fa-user" />
                    </div>
                    <h2 className="profile-name">{displayName}</h2>
                </div>

                {/* Info grid */}
                <div className="profile-info-grid">
                    <div className="profile-field">
                        <p className="profile-label">Display Name</p>
                        <p className="profile-value">{displayName}</p>
                    </div>
                    <div className="profile-field">
                        <p className="profile-label">Email</p>
                        <p className="profile-value">{user.email || "No email found"}</p>
                    </div>
                </div>

                {/* ── Edit Profile panel ── */}
                {activePanel === "editProfile" && (
                    <form className="profile-pw-form" onSubmit={handleEditProfile}>
                        <p className="profile-pw-title">Edit Display Name</p>
                        <input
                            className="profile-pw-input"
                            type="text"
                            placeholder="New display name"
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                            maxLength={32}
                            required
                            autoFocus
                        />
                        <p className="profile-edit-hint">{newUsername.trim().length}/32 characters</p>
                        {editError && <p className="profile-pw-error">{editError}</p>}
                        <div className="profile-pw-actions">
                            <button type="button" className="profile-btn profile-btn--ghost" onClick={closePanel} disabled={editStatus === "saving"}>
                                Cancel
                            </button>
                            <button type="submit" className="profile-btn profile-btn--save" disabled={editStatus === "saving" || editStatus === "success"}>
                                {editStatus === "saving"  && "Saving…"}
                                {editStatus === "success" && "✓ Updated!"}
                                {(!editStatus || editStatus === "error") && "Save"}
                            </button>
                        </div>
                    </form>
                )}

                {/* ── Change Password panel ── */}
                {activePanel === "changePassword" && (
                    <form className="profile-pw-form" onSubmit={handleChangePassword}>
                        <p className="profile-pw-title">Change Password</p>
                        <input
                            className="profile-pw-input"
                            type="password"
                            placeholder="Current password"
                            value={currentPassword}
                            onChange={e => setCurrentPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            autoFocus
                        />
                        <input
                            className="profile-pw-input"
                            type="password"
                            placeholder="New password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        <input
                            className="profile-pw-input"
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                        {pwError && <p className="profile-pw-error">{pwError}</p>}
                        <div className="profile-pw-actions">
                            <button type="button" className="profile-btn profile-btn--ghost" onClick={closePanel} disabled={pwStatus === "saving"}>
                                Cancel
                            </button>
                            <button type="submit" className="profile-btn profile-btn--save" disabled={pwStatus === "saving" || pwStatus === "success"}>
                                {pwStatus === "saving"  && "Saving…"}
                                {pwStatus === "success" && "✓ Updated!"}
                                {(!pwStatus || pwStatus === "error") && "Save Password"}
                            </button>
                        </div>
                    </form>
                )}

                {/* ── Action buttons (hidden when a panel is open) ── */}
                {!activePanel && (
                    <div className="profile-actions">
                        <button
                            className="profile-btn profile-btn--change-pw"
                            type="button"
                            onClick={() => setActivePanel("editProfile")}
                        >
                            <i className="fa-solid fa-pen" />
                            Edit Profile
                        </button>
                        <button
                            className="profile-btn profile-btn--change-pw"
                            type="button"
                            onClick={() => setActivePanel("changePassword")}
                        >
                            <i className="fa-solid fa-lock" />
                            Change Password
                        </button>
                        <button
                            className="profile-btn profile-logout"
                            type="button"
                            onClick={handleLogout}
                        >
                            <i className="fa-solid fa-right-from-bracket" />
                            Log Out
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}