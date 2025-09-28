import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Invio in corso...");
    setTimeout(() => {
      console.log("Dati inviati:", formData);
      setStatus("Grazie per averci contattato! Ti risponderemo presto.");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <DefaultLayout>
      <div className="container-app">
        <div className="main-content">
          {/* Header */}
          <header className="header-app">
            <h1>
              Boo Road <span>Contatti</span>
            </h1>
            <p>Siamo qui per aiutarti a pianificare la tua avventura</p>
          </header>

          {/* Contenitore principale */}
          <div className="contact-grid">
            {/* Info Card */}
            <div className="info-card">
              <h2>Informazioni</h2>

              <div className="info-detail">
                <FiMail className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>supporto@booroad.it</p>
                </div>
              </div>

              <div className="info-detail">
                <FiPhone className="info-icon" />
                <div>
                  <h3>Telefono</h3>
                  <p>+39 012 345 6789</p>
                </div>
              </div>

              <div className="info-detail">
                <FiMapPin className="info-icon" />
                <div>
                  <h3>Sede Centrale</h3>
                  <p>
                    Via dei Viaggi, 10
                    <br />
                    00100 Roma, Italia
                  </p>
                </div>
              </div>

              <div className="info-footer">
                <p>Rispondiamo generalmente entro 24 ore lavorative</p>
              </div>
            </div>

            {/* Form Card */}
            <div className="form-card">
              <h2>Inviaci un Messaggio</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Inserisci il tuo nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Indirizzo Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="tua@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Dicci di cosa hai bisogno..."
                  ></textarea>
                </div>

                {status && (
                  <div
                    className={`alert ${
                      status.includes("Grazie")
                        ? "alert-success"
                        : "alert-warning"
                    }`}
                    role="alert"
                  >
                    {status}
                  </div>
                )}

                <div className="form-group">
                  <button
                    type="submit"
                    disabled={status.includes("Invio")}
                    className="btn-primary"
                  >
                    {status.includes("Invio") ? "Invio..." : "Invia Messaggio"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactPage;
