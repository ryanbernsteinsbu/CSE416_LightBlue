import React from "react";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import runner from "../assets/images/reddude.png";

export default function AuthScreen({ authView, setAuthView, onLoginSuccess }) {
  return (
    <div className="landing">
      <img className="landing-runner" src={runner} alt="runner" />
      <h1 className="landing-title">CATCH 23</h1>

      <Modal isOpen={true}>
        {authView === "login" ? (
          <Login
            onLoginSuccess={onLoginSuccess}
            onShowRegister={() => setAuthView("register")}
          />
        ) : (
          <Register
            createUser={async () => {}}
            onCreateUserClick={() => setAuthView("login")}
            onShowLogin={() => setAuthView("login")}
          />
        )}
      </Modal>
    </div>
  );
}