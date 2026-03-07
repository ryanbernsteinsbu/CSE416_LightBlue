import React, { useState } from 'react';
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

export default function Login({ onLoginSuccess, handleError, onShowRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter email");
            return;
        }

        try {
            const { data } = await axios.post(
                "/api/users/login",
                { email, password },
                { withCredentials: true }
            );
            console.log("LOGIN:", data);
            onLoginSuccess(data);
        } catch (err) {
            if (err.response?.status === 404) {
                alert("User not found.");
            } else if (err.response?.status === 401) {
                alert("Password entered incorrectly.");
            } else {
                alert("An error has occurred.");
                console.error(err);
                handleError(err);
            }
        }
    };

   return (
    <div id="login_setup">
      <form id="login_form" onSubmit={loginUser}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button id="submit_login" type="submit">Sign in</button>

        <button id="go_register" type="button" onClick={onShowRegister}>
          Register
        </button>
      </form>
    </div>
  );


}
