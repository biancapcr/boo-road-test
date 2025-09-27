import React from 'react'
import { useState } from 'react';
const ContactPage = () => {
  // Stati per i campi del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // Stato per il messaggio di feedback (simulato)
  const [status, setStatus] = useState('');

  // Icone Lucide React (simulate import since this is a single file)
  const Mail = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
  );
  const Phone = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  );
  const MapPin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  );
  const Send = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
  );

  // Gestore per l'aggiornamento dei campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gestore per l'invio del form (simulato)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione di invio
    setStatus('Invio in corso...');
    setTimeout(() => {
      console.log('Dati inviati:', formData);
      setStatus('Grazie per averci contattato! Ti risponderemo presto.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="container-app">
      {/* Blocco di Stile CSS personalizzato (al posto di Tailwind) */}
      <style>
        {`
          :root {
            --color-primary: #007bff;
            --color-accent: #ffc107;
            --color-text-dark: #343a40;
            --color-bg-light: #f8f9fa;
          }

          /* General Layout */
          .container-app {
            min-height: 100vh;
            background-color: var(--color-bg-light);
            padding: 1.5rem 1rem;
            font-family: 'Inter', sans-serif;
          }
          
          .main-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Header */
          .header-app {
            padding: 1.5rem 1rem;
            margin-bottom: 2rem;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); /* Bootstrap shadow */
          }

          .header-app h1 {
            font-size: 2.5rem;
            font-weight: 800;
            text-align: center;
            color: var(--color-primary);
            letter-spacing: 0.05em;
          }

          .header-app span {
            color: var(--color-accent);
          }

          .header-app p {
            text-align: center;
            color: #6c757d;
            margin-top: 0.5rem;
          }

          /* Grid and Cards */
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 1024px) {
            .contact-grid {
              grid-template-columns: 1fr 2fr;
            }
          }

          .info-card {
            background-color: var(--color-primary);
            color: white;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
            height: 100%;
          }
          
          .info-card h2 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.3);
              padding-bottom: 0.75rem;
          }

          .info-detail {
              display: flex;
              align-items: flex-start;
              margin-bottom: 1.5rem;
          }
          
          .info-icon {
              width: 1.5rem;
              height: 1.5rem;
              margin-right: 0.75rem;
              margin-top: 0.25rem;
              color: var(--color-accent);
              flex-shrink: 0;
          }

          .info-detail h3 {
              font-weight: 600;
              font-size: 1.125rem;
              margin-bottom: 0.25rem;
          }
          
          .info-detail p {
              color: rgba(255, 255, 255, 0.8);
          }

          .info-footer {
              margin-top: 2rem;
              padding-top: 1.5rem;
              border-top: 1px solid rgba(255, 255, 255, 0.3);
              font-size: 0.875rem;
              color: rgba(255, 255, 255, 0.7);
          }

          .form-card {
            background-color: white;
            padding: 2rem;
            border-radius: 0.75rem;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
          }
          
          .form-card h2 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
              color: var(--color-text-dark);
          }

          /* Form Elements */
          .form-group {
              margin-bottom: 1.5rem;
          }
          
          .form-label {
              display: block;
              font-size: 0.875rem;
              font-weight: 500;
              color: #495057;
              margin-bottom: 0.25rem;
          }

          .form-input, .form-textarea {
              width: 100%;
              padding: 0.75rem;
              border: 1px solid #ced4da;
              border-radius: 0.5rem;
              transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }

          .form-input:focus, .form-textarea:focus {
              border-color: #80bdff;
              outline: 0;
              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }

          .form-textarea {
              resize: vertical;
          }

          /* Feedback Status */
          .alert {
              padding: 0.75rem 1.25rem;
              margin-bottom: 1rem;
              border: 1px solid transparent;
              border-radius: 0.5rem;
              font-size: 0.875rem;
              font-weight: 500;
          }

          .alert-success {
              color: #155724;
              background-color: #d4edda;
              border-color: #c3e6cb;
          }

          .alert-warning {
              color: #856404;
              background-color: #fff3cd;
              border-color: #ffeeba;
          }

          /* Primary Button (btn-primary Bootstrap look) */
          .btn-primary {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
            border-radius: 0.5rem;
            color: white;
            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            cursor: pointer;
            width: 100%; /* Full width by default */
          }
          
          @media (min-width: 640px) {
            .btn-primary {
              width: auto; /* Auto width on larger screens */
            }
          }

          .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
          }
          
          .btn-primary:disabled {
              opacity: 0.65;
              cursor: not-allowed;
          }
        `}
      </style>

      <div className="main-content">
        {/* Intestazione e Logo */}
        <header className="header-app">
          <h1>
            Boo Road <span>Contatti</span>
          </h1>
          <p>Siamo qui per aiutarti a pianificare la tua avventura.</p>
        </header>

        {/* Contenitore principale del modulo - Griglia a 3 colonne su desktop */}
        <div className="contact-grid">

          {/* Colonna di Informazioni di Contatto (Card primaria) */}
          <div className="info-card">
            <h2>Informazioni</h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="info-detail">
                <Mail className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>supporto@booroad.it</p>
                </div>
              </div>

              {/* Telefono */}
              <div className="info-detail">
                <Phone className="info-icon" />
                <div>
                  <h3>Telefono</h3>
                  <p>+39 012 345 6789</p>
                </div>
              </div>

              {/* Indirizzo */}
              <div className="info-detail">
                <MapPin className="info-icon" />
                <div>
                  <h3>Sede Centrale</h3>
                  <p>Via dei Viaggi, 10<br />00100 Roma, Italia</p>
                </div>
              </div>
            </div>

            <div className="info-footer">
              <p>Rispondiamo generalmente entro 24 ore lavorative.</p>
            </div>
          </div>

          {/* Colonna del Modulo di Contatto (Card secondaria) */}
          <div className="form-card">
            <h2>Inviaci un Messaggio</h2>

            <form onSubmit={handleSubmit}>
              {/* Campo Nome */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome Completo</label>
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

              {/* Campo Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Indirizzo Email</label>
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

              {/* Campo Messaggio */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Messaggio</label>
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

              {/* Stato di Feedback */}
              {status && (
                <div className={`alert ${status.includes('Grazie')
                  ? 'alert-success'
                  : 'alert-warning'
                  }`} role="alert">
                  {status}
                </div>
              )}

              {/* Pulsante Invia (btn-primary) */}
              <div className="form-group">
                <button
                  type="submit"
                  disabled={status.includes('Invio')}
                  className="btn-primary"
                >
                  <Send style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }} />
                  {status.includes('Invio') ? 'Invio...' : 'Invia Messaggio'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactPage