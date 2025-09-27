import React, { useState } from "react";
import "../index.css";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Registrati from "../components/Registrati";


function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="homepage">
      {/* header */}


      {/* hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Scopri il mondo con BooRoad</h1>
          <p>Esperienze uniche, viaggi organizzati, contatti sempre con te.</p>
        </div>
      </section>

      {/* doppia linea separatrice */}
      <div className="double-divider">
        <span></span>
        <span></span>
      </div>

      {/* destinazioni */}
      <section className="destinations text-center">
        <p className="subtitle">Le nostre raccomandazioni</p>
        <h2 className="section-title">Prossimi viaggi in evidenza</h2>

        <div className="row justify-content-center mt-5">
          <div className="col-md-3 mb-4">
            <div className="destination-card">
              <img
                src="https://i.pinimg.com/1200x/5b/c4/b6/5bc4b6ea54a59b41f935077437a357d2.jpg"
                alt="Roma"
              />
              <h4>Roma</h4>
              <p>12 - 15 Ottobre</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="destination-card">
              <img
                src="https://i.pinimg.com/1200x/b4/d3/0e/b4d30e8cb2b7962bf9dc92d2e6d725a9.jpg"
                alt="Parigi"
              />
              <h4>Parigi</h4>
              <p>20 - 23 Ottobre</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="destination-card">
              <img
                src="https://i.pinimg.com/1200x/fa/52/58/fa525835edbfb5720af041b082ff71a9.jpg"
                alt="Barcellona"
              />
              <h4>Barcellona</h4>
              <p>5 - 9 Novembre</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="destination-card">
              <img
                src="https://i.pinimg.com/1200x/cf/7b/a5/cf7ba56b548a4124207e38fc523fc8a9.jpg"
                alt="Londra"
              />
              <h4>Londra</h4>
              <p>18 - 22 Novembre</p>
            </div>
          </div>
        </div>
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
  );
}

export default HomePage;
