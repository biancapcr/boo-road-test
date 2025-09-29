import React from "react";
import { Link } from "react-router-dom";

function Header({ onLoginClick, onRegisterClick }) {
  return (
    <header className="homepage-header">
      <div className="top-bar">
        <div className="logo">BooRoad</div>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/viaggi">Viaggi</Link>
          <Link to="/rubrica">Rubrica</Link>
          <Link to="/contatti">Contatti</Link>
          <Link to="/gestione-viaggi">Gestione Viaggi</Link>{" "}
          {/* 🔹 nuovo link */}
        </nav>

        <div className="auth-buttons">
          <button onClick={onLoginClick} className="btn btn-outline-light me-2">
            Login
          </button>
          <button
            onClick={onRegisterClick}
            className="btn btn-outline-light me-2"
          >
            Registrati
          </button>
        </div>
      </div>
      <hr className="header-divider" />
    </header>
  );
}

export default Header;
