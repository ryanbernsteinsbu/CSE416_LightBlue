"use client";

import { useState } from "react";
import axios from "axios";

export default function EditProfile({ currentUsername, onUpdated }) {
    const [username, setUsername] = useState(currentUsername || "");
    const [status, setStatus] = useState(null); // "saving" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!username.trim()) {
            setErrorMsg("Username cannot be empty.");
            return;
        }
        if (username.trim() === currentUsername) {
            setErrorMsg("That's already your username.");
            return;
        }

        try {
            setStatus("saving");
            const token = localStorage.getItem("token");
            const { data } = await axios.put(
                `/api/auth/update-profile`,
                { username: username.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Persist refreshed token so the name survives a page reload
            if (data?.token) localStorage.setItem("token", data.token);

            setStatus("success");
            onUpdated(username.trim());
            setTimeout(() => setStatus(null), 2000);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.response?.data?.error || "Failed to update username.");
        }
    };

    return (
        <form className="profile-pw-form" onSubmit={handleSubmit}>
            <p className="profile-pw-title">Edit Display Name</p>
            <input
                className="profile-pw-input"
                type="text"
                placeholder="New username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                maxLength={32}
                required
                autoComplete="username"
            />
            {errorMsg && <p className="profile-pw-error">{errorMsg}</p>}
            <p className="profile-edit-hint">
                {username.trim().length}/32 characters
            </p>
            <button
                type="submit"
                className="profile-btn profile-btn--save"
                disabled={status === "saving" || status === "success"}
            >
                {status === "saving"  && "Saving…"}
                {status === "success" && "✓ Updated!"}
                {(!status || status === "error") && "Save"}
            </button>
        </form>
    );
}