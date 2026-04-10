import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import PlayerInformation from "./PlayerInformation";
import UserProfile from "./UserProfile";

function AppContent({ route }) {
  switch (route) {
    case "player":
      return <PlayerInformation />;
    case "profile":
      return <UserProfile />;
    case "home":
    default:
      return <Home />;
  }
}

export default function AppShell({ route, setRoute }) {
  return (
    <>
      <Navbar
        onNavigate={setRoute}
        onProfileClick={() => setRoute("profile")}
      />
      <AppContent route={route} />
    </>
  );
}