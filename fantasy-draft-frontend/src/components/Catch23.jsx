import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

import AuthScreen from "./AuthScreen";
import AppShell from "./AppShell";

export default function Catch23() {
  const [authView, setAuthView] = useState("login");
  const [route, setRoute] = useState("home");
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLoginSuccess = (data) => {
    const token = typeof data === "string" ? data : data.token;

    localStorage.setItem("token", token);

    const decoded = jwtDecode(token);
    console.log("decoded:", decoded);
    localStorage.setItem("user_id", decoded.id);

    setLoggedIn(true);
    setRoute("home");
  };

  if (!loggedIn) {
    return (
      <AuthScreen
        authView={authView}
        setAuthView={setAuthView}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  return <AppShell route={route} setRoute={setRoute} />;
}