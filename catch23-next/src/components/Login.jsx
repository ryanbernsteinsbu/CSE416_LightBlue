'use client';
import React, { useState } from 'react';
import { loginUser } from '../lib/api';

export default function Login({ onLoginSuccess, handleError, onShowRegister, onShowForgotPassword }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorBanner, setErrorBanner] = useState("");

    const showError = (msg) => {
        setErrorBanner(msg);
        setTimeout(() => setErrorBanner(""), 3000);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email) {
            showError("Please enter your email.");
            return;
        }

        if (!password) {
            showError("Please enter your password.");
            return;
        }

        try {
            const { data } = await loginUser(email, password);
            console.log("LOGIN:", data);
            onLoginSuccess?.(data);
            window.dispatchEvent(new Event("storage"));
        } catch (err) {
            const backendMsg = err.response?.data?.message;

            if (backendMsg === "Invalid user credentials") {
                showError("Invalid email or password.");
            } else {
                showError("An error has occurred.");
                console.error(err);
                handleError?.(err);
            }
        }
    };

    return (
        <div id="login_setup">
            {errorBanner && (
                <div
                    className="save-banner save-banner--visible"
                    style={{
                        transform: "translateX(-50%) translateY(0)",
                        background: "#BD2522",
                    }}
                >
                    ❌ {errorBanner}
                </div>
            )}

            <form id="login_form" onSubmit={handleLogin}>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="forgot-link-row">
                    <button type="button" className="forgot-link" onClick={onShowForgotPassword}>
                        Forgot password?
                    </button>
                </div>

                <br />

                <button id="submit_login" type="submit">Sign in</button>

                <button id="go_register" type="button" onClick={onShowRegister}>
                    Register
                </button>
            </form>
        </div>
    );
}