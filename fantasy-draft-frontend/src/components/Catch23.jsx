import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import runner from "../assets/images/reddude.png";
import Navbar from "./Navbar";
import Home from "./Home";
import PlayerInformation from "./PlayerInformation";
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode

export default function Catch23() {
  const [authView, setAuthView] = useState("login");
  const [route, setRoute] = useState("home");
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const showLoggedIn = loggedIn;

  return (
    <>
      {showLoggedIn ? (
        <>
          <Navbar onNavigate={setRoute} />
          {route === "home" && <Home />}
          {route === "player" && <PlayerInformation />}
        </>
      ) : (
        <div className="landing">
          <img className="landing-runner" src={runner} alt="runner" />
          <h1 className="landing-title">CATCH 23</h1>

          <Modal isOpen={true}>
            {authView === "login" ? (
              <Login
                onLoginSuccess={(data) => {
                  const token = typeof data === 'string' ? data : data.token;
                  localStorage.setItem('token', token);
                  const decoded = jwtDecode(token);
                  console.log('decoded:', decoded);
                  localStorage.setItem('user_id', decoded.id);
                  setLoggedIn(true);
                }}
                onShowRegister={() => setAuthView("register")}
              />
            ) : (
              <Register
                createUser={async () => { }}
                onCreateUserClick={() => setAuthView("login")}
                onShowLogin={() => setAuthView("login")}
              />
            )}
          </Modal>
        </div>
      )}
    </>
  );
}