'use client';
import React, { useState } from "react";
import { registerUser } from "../lib/api";

export default function Register({ onCreateUserClick, onShowLogin }) {
    const [email, setEmail] = useState("");
    const [displayName, setName] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [saveBanner, setSaveBanner] = useState(false);
    const [errorBanner, setErrorBanner] = useState("");


    const showBanner = () => {
        setSaveBanner(true);
        setTimeout(() => setSaveBanner(false), 3000);
    };

    const showError = (msg) => {
        setErrorBanner(msg);
        setTimeout(() => setErrorBanner(""), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") return showError("Email is required");
        if (displayName === "") return showError("Display Name is required");
        if (firstPassword === "") return showError("Password is required");
        if (secondPassword === "") return showError("Re-type Password is required");
        if (firstPassword !== secondPassword) return showError("Passwords do not match, please try again");

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return showError("Please enter a valid email address.");

        const emailSub = email.split("@")[0];
        const p = firstPassword.toLowerCase();
        if (p.includes(displayName.toLowerCase())) return showError("Password cannot contain your display name!");
        if (p.includes(emailSub.toLowerCase())) return showError("Password cannot contain your email!");

        try {
            const { data } = await registerUser(email, displayName, firstPassword);
            console.log("REGISTER:", data);

            setEmail("");
            setName("");
            setFirstPassword("");
            setSecondPassword("");

            showBanner();
            setTimeout(() => onCreateUserClick(), 1500);
        } catch (err) {
            console.error("REGISTER ERROR:", err);

            const backendMsg = err.response?.data?.error?.message;

            if (backendMsg === "Email is connected to existing account") {
                showError("There's already an account associated with that email");
            } else {
                showError("Error creating user. Please try again later.");
            }
        }
    };

    return (
        <div id="login_setup">
            {saveBanner && (
                <div className="save-banner save-banner--visible" style={{ transform: "translateX(-50%) translateY(0)" }}>
                    ✅ Account successfully created!
                </div>
            )}

            {errorBanner && (
                <div className="save-banner save-banner--visible" style={{ transform: "translateX(-50%) translateY(0)", background: "#BD2522" }}>
                    ❌ {errorBanner}
                </div>
            )}

            <form id="login_form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    value={displayName}
                    placeholder="Display Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    value={firstPassword}
                    placeholder="Password"
                    onChange={(e) => setFirstPassword(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    value={secondPassword}
                    placeholder="Re-Type password"
                    onChange={(e) => setSecondPassword(e.target.value)}
                />

                <br /><br />
                <button id="submit_login" type="submit">
                    Register
                </button>
                <button id="go_register" type="button" onClick={onShowLogin}>
                    Sign In
                </button>
            </form>
        </div>
    );
}


