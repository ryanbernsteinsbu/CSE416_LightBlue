import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import runner from "../assets/images/reddude.png";
import Navbar from "./Navbar";
import Home from "./Home";

const PREVIEW_LOGGED_IN = true; // for testing

export default function Catch23() {
  const [authView, setAuthView] = useState("login");
  const showLoggedIn = PREVIEW_LOGGED_IN; // for testing

  return (
    <>
      {showLoggedIn ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : (
    <div className="landing">
      <img className="landing-runner" src={runner} alt="runner" />
      <h1 className="landing-title">CATCH 23</h1>

      <Modal isOpen={true}>
        {authView === "login" ? (
          <Login onShowRegister={() => setAuthView("register")} />
        ) : (
          <Register
            createUser={async () => {}}
            onCreateUserClick={() => setAuthView("login")}
          />
        )}
      </Modal>
    </div>
    )}
    </>
  );
}