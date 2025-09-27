import React, { useState } from "react";
import "../index.css";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Registrati from "../components/Registrati";
import DefaultLayout from "../layouts/DefaultLayout";

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <DefaultLayout
      onLoginClick={() => setShowLogin(true)}
      onRegisterClick={() => setShowRegister(true)}
    >
      <div className="homepage">
        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Scopri il mondo con BooRoad</h1>
            <p>
              Esperienze uniche, viaggi organizzati, contatti sempre con te.
            </p>
          </div>
        </section>

        {/* doppia linea */}
        <div className="double-divider">
          <span></span>
          <span></span>
        </div>

        {/* destinazioni */}
        <section className="destinations text-center">
          <p className="subtitle">Le nostre raccomandazioni</p>
          <h2 className="section-title">Prossimi viaggi in evidenza</h2>
          {/* cards */}
        </section>

        {/* modali */}
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
    </DefaultLayout>
  );
}

export default HomePage;
