import React, { useState } from "react";

export default function Register({ createUser, onCreateUserClick }) {
    const [email, setEmail] = useState("");
    const [displayName, setName] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") return alert("Email is required");
        if (displayName === "") return alert("Display Name is required");
        if (firstPassword === "") return alert("Password is required");
        if (secondPassword === "") return alert("Re-type Password is required");
        if (firstPassword !== secondPassword) return alert("Passwords do not match, please try again");

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return alert("Please enter a valid email address.");

        const emailSub = email.split("@")[0];
        const p = firstPassword.toLowerCase();
        if (p.includes(displayName.toLowerCase())) return alert("Password cannot contain your display name!");
        if (p.includes(emailSub.toLowerCase())) return alert("Password cannot contain your email!");

        try {
            await createUser({ email, displayName, password: firstPassword });

            alert("Your user has successfully been created");
            setEmail("");
            setName("");
            setFirstPassword("");
            setSecondPassword("");

            onCreateUserClick();
        } catch (err) {
            const status = err.response?.status;
            const code = err.response?.data?.error;

            if (status === 409) {
                if (code === "EMAIL_TAKEN") alert("There's already an account associated with that email");
                else if (code === "DISPLAYNAME_TAKEN") alert("That display name is already taken");
                else {
                    console.error("Unexpected error creating user:", err);
                    alert("Error creating user. Please try again later.");
                }
            } else {
                console.error(err);
                alert("Error creating user. Please try again later.");
            }
        }
    };

    return (
        <div id="login_setup">
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
            </form>
        </div>
    );
}


