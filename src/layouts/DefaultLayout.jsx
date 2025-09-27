import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Registrati from "../components/Registrati";

function DefaultLayout({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="default-layout">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <main>{children}</main>

      {/* modali globali */}
      <Modal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        title="Accedi"
      >
        <Login />
      </Modal>

      <Modal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        title="Registrati"
      >
        <Registrati />
      </Modal>
    </div>
  );
}

export default DefaultLayout;
