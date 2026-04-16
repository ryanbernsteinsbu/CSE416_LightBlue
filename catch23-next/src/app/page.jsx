"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AuthScreen from "../components/AuthScreen";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState("login");
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [activeLeague, setActiveLeague] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    setIsLoggedIn(!!token && !!userId);
    setCheckedAuth(true);
  }, []);

  if (!checkedAuth) return null;

  return (
    <>
      <Navbar />
      {isLoggedIn ? (
        <div className="catch23">
          <Home
            activeLeague={activeLeague}
            setActiveLeague={setActiveLeague}
          />
        </div>
      ) : (
        <AuthScreen
          authView={authView}
          setAuthView={setAuthView}
          onLoginSuccess={(data) => {
            const token = data;
            localStorage.setItem("token", token);

            try {
              const decoded = jwtDecode(token);
              if (decoded.id) {
                localStorage.setItem("user_id", String(decoded.id));
              }
              setIsLoggedIn(true);
            } catch (err) {
              console.error("Could not decode token:", err);
            }
          }}
        />
      )}
    </>
  );
}