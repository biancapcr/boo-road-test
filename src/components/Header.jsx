import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="homepage-header">
      <div className="top-bar">
        {/* logo */}
        <div className="logo">BooRoad</div>

        {/* nav */}
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
            className="btn btn-outline-light me-2"
          >
            Registrati
          </button>
        </div>
      </div>

      <hr className="header-divider" />
    </header>
  )
}

export default Header
