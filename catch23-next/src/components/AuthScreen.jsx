import React from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Modal from "./Modal";

export default function AuthScreen({ authView, setAuthView, onLoginSuccess }) {
  return (
    <div className="landing">
      <img className="landing-runner" src="/images/reddude.png" alt="runner" />
      <h1 className="landing-title">CATCH 23</h1>

      <Modal isOpen={true}>
        {authView === "login" && (
          <Login
            onLoginSuccess={onLoginSuccess}
            onShowRegister={() => setAuthView("register")}
            onShowForgotPassword={() => setAuthView("forgot")} 
          />
        )}
        {authView === "register" && (
          <Register
            createUser={async () => { }}
            onCreateUserClick={() => setAuthView("login")}
            onShowLogin={() => setAuthView("login")}
          />
        )}
        {authView === "forgot" && (
          <ForgotPassword
            onShowLogin={() => setAuthView("login")}
          />
        )}
      </Modal>
    </div>
  );
}