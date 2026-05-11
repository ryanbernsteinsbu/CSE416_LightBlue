'use client';
import React, { useState } from 'react';
import { requestPasswordReset } from '../lib/api';

export default function ForgotPassword({ onShowLogin }) {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorBanner, setErrorBanner] = useState("");
    const [loading, setLoading] = useState(false);

    const showError = (msg) => {
        setErrorBanner(msg);
        setTimeout(() => setErrorBanner(""), 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return showError("Please enter your email address.");

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return showError("Please enter a valid email address.");

        setLoading(true);
        try {
            await requestPasswordReset(email);
        } catch (err) {
            console.error("FORGOT PASSWORD ERROR:", err);
            // Always show success (never leak whether an email exists)
        } finally {
            setLoading(false);
            setSuccess(true);
            setEmail("");
        }
    };

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

            {success ? (
                <div className="auth-feedback">
                    <span className="auth-feedback-icon">📬</span>
                    <p className="auth-feedback-title">Check your inbox!</p>
                    <p className="auth-feedback-sub">
                        If an account with that email exists, a reset link has been sent.
                        Don't forget to check your spam folder.
                    </p>
                    <button id="go_register" type="button" onClick={onShowLogin}>
                        Back to Sign In
                    </button>
                </div>
            ) : (
                <>
                    <p className="auth-hint">
                        Enter the email linked to your account and we'll send you a reset link.
                    </p>
                    <form id="login_form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <br /><br />
                        <button id="submit_login" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                        <button id="go_register" type="button" onClick={onShowLogin} disabled={loading}>
                            Back to Sign In
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}