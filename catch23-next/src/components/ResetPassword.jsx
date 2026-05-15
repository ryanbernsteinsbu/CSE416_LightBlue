'use client';
import React, { useState, useEffect } from 'react';
import { resetPassword } from '../lib/api';

export default function ResetPassword({ token, onShowLogin }) {
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [errorBanner, setErrorBanner] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tokenMissing, setTokenMissing] = useState(false);

    useEffect(() => {
        if (!token) setTokenMissing(true);
    }, [token]);

    const showError = (msg) => {
        setErrorBanner(msg);
        setTimeout(() => setErrorBanner(""), 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstPassword) return showError("Please enter a new password.");
        if (!secondPassword) return showError("Please confirm your new password.");
        if (firstPassword !== secondPassword) return showError("Passwords do not match.");
        if (firstPassword.length < 8) return showError("Password must be at least 8 characters.");

        setLoading(true);
        try {
            await resetPassword(token, firstPassword);
            setSuccess(true);
        } catch (err) {
            console.error("RESET PASSWORD ERROR:", err);
            const backendMsg = err.response?.data?.error;
            if (backendMsg === "Token expired") {
                showError("This reset link has expired. Please request a new one.");
            } else if (backendMsg === "Invalid token") {
                showError("This reset link is invalid. Please request a new one.");
            } else {
                showError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (tokenMissing) {
        return (
            <div id="login_setup">
                <div className="auth-feedback">
                    <span className="auth-feedback-icon">🔗</span>
                    <p className="auth-feedback-title">Invalid reset link</p>
                    <p className="auth-feedback-sub">
                        This link is missing or malformed. Please request a new one.
                    </p>
                    <button id="go_register" type="button" onClick={onShowLogin}>
                        Back to Sign In
                    </button>
                </div>
            </div>
        );
    }

    if (success) {
        return (
            <div id="login_setup">
                <div className="auth-feedback">
                    <span className="auth-feedback-icon">✅</span>
                    <p className="auth-feedback-title">Password updated!</p>
                    <p className="auth-feedback-sub">
                        You can now sign in with your new password.
                    </p>
                    <button id="submit_login" type="button" onClick={onShowLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div id="login_setup">
            {errorBanner && (
                <div
                    className="save-banner save-banner--visible"
                    style={{ transform: "translateX(-50%) translateY(0)", background: "#BD2522" }}
                >
                    ❌ {errorBanner}
                </div>
            )}

            <p className="auth-hint">Choose a new password for your account.</p>

            <form id="login_form" onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={firstPassword}
                    onChange={(e) => setFirstPassword(e.target.value)}
                    disabled={loading}
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={secondPassword}
                    onChange={(e) => setSecondPassword(e.target.value)}
                    disabled={loading}
                />
                <br /><br />
                <button id="submit_login" type="submit" disabled={loading}>
                    {loading ? "Updating..." : "Reset Password"}
                </button>
                <button id="go_register" type="button" onClick={onShowLogin} disabled={loading}>
                    Back to Sign In
                </button>
            </form>
        </div>
    );
}