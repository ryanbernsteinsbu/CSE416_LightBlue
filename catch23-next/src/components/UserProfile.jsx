"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("No token found. User is not logged in.");
                return;
            }

            const decoded = jwtDecode(token);
            console.log("decoded token:", decoded);
            setUser(decoded);
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

    if (error) {
        return (
            <div className="profile-page">
                <div className="profile-card">
                    <h2 style={{ color: "white" }}>{error}</h2>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="profile-page">
                <div className="profile-card">
                    <h2 style={{ color: "white" }}>Loading profile...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-top-section">
                    <div className="profile-avatar-ring">
                        <i className="fa-solid fa-user" />
                    </div>
                    <h1 className="profile-name">{user.email || "User"}</h1>
                </div>

                <div className="profile-info-grid">
                    <div className="profile-field">
                        <p className="profile-label">User ID</p>
                        <p className="profile-value">{user.id || "N/A"}</p>
                    </div>

                    <div className="profile-field">
                        <p className="profile-label">Email</p>
                        <p className="profile-value">{user.email || "No email found"}</p>
                    </div>
                </div>

                <div className="profile-actions">
                    <button
                        className="profile-btn"
                        type="button"
                        onClick={() => alert("Edit profile coming soon")}
                    >
                        <i className="fa-solid fa-pen" />
                        Edit Profile
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
            </div>
        </div>
    );
}