<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
=======
import React from "react";
import { Link } from "react-router-dom";

function Header({ onLoginClick, onRegisterClick }) {
>>>>>>> 2c2c4c39b1b778177737fc14750e622e4ed255c3
  return (
    <header className="homepage-header">
      <div className="top-bar">
        {/* logo */}
        <div className="logo">BooRoad</div>

        {/* nav */}
<<<<<<< HEAD
        <div className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/trips">Viaggi</Link>
          <Link to="/rubrica">Rubrica</Link>
          <Link to="/contact">Contatti</Link>
        </div>

        {/* bottoni a destra */}
        <div className="auth-buttons">
          <button
            onClick={() => setShowLogin(true)}
            className="btn btn-outline-light me-2"
          >
            Login
          </button>
          <button
            onClick={() => setShowRegister(true)}
=======
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/viaggi">Viaggi</Link>
          <Link to="/rubrica">Rubrica</Link>
          <Link to="/contatti">Contatti</Link>
        </nav>

        {/* bottoni login/registrati */}
        <div className="auth-buttons">
          <button onClick={onLoginClick} className="btn btn-outline-light me-2">
            Login
          </button>
          <button
            onClick={onRegisterClick}
>>>>>>> 2c2c4c39b1b778177737fc14750e622e4ed255c3
            className="btn btn-outline-light me-2"
          >
            Registrati
          </button>
        </div>
      </div>

      <hr className="header-divider" />
    </header>
<<<<<<< HEAD
  )
}

export default Header
=======
  );
}

export default Header;
>>>>>>> 2c2c4c39b1b778177737fc14750e622e4ed255c3
