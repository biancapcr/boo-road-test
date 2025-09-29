import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import "../index.css";

function GestioneViaggi() {
  const [form, setForm] = useState({
    titolo: "",
    descrizione: "",
    immagine: "",
    partenza: "",
    ritorno: "",
    prezzo: "",
  });

  const [viaggi, setViaggi] = useState([]);
  const [showViaggi, setShowViaggi] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const publishTrip = (e) => {
    e.preventDefault();
    if (!form.titolo || !form.descrizione) return;
    setViaggi([...viaggi, { id: Date.now(), ...form }]);
    setForm({
      titolo: "",
      descrizione: "",
      immagine: "",
      partenza: "",
      ritorno: "",
      prezzo: "",
    });
  };

  return (
    <DefaultLayout>
      <div className="gestione-viaggi-page">
        <h2>Gestione Viaggi</h2>

        {/* viaggi pubblicati */}
        <div className="viaggi-pubblicati-toggle">
          <button onClick={() => setShowViaggi(!showViaggi)}>
            {showViaggi
              ? "Nascondi viaggi pubblicati"
              : "Mostra viaggi pubblicati"}
          </button>
        </div>

        {showViaggi && (
          <div className="viaggi-list">
            <h3>Viaggi pubblicati</h3>
            {viaggi.length === 0 && <p>Nessun viaggio pubblicato.</p>}
            {viaggi.map((v) => (
              <div key={v.id} className="trip-card">
                {v.immagine && <img src={v.immagine} alt={v.titolo} />}
                <h4>{v.titolo}</h4>
                <p>{v.descrizione}</p>
                <p>
                  {v.partenza} → {v.ritorno}
                </p>
                <p>
                  <strong>{v.prezzo} €</strong>
                </p>
              </div>
            ))}
          </div>
        )}

        {/* form creazione viaggio */}
        <form className="viaggi-form" onSubmit={publishTrip}>
          <input
            type="text"
            name="titolo"
            placeholder="Titolo"
            value={form.titolo}
            onChange={handleChange}
          />
          <textarea
            name="descrizione"
            placeholder="Descrizione"
            value={form.descrizione}
            onChange={handleChange}
          />
          <input
            type="text"
            name="immagine"
            placeholder="URL immagine"
            value={form.immagine}
            onChange={handleChange}
          />
          <label className="date-label">
            Data partenza
            <input
              type="date"
              name="partenza"
              value={form.partenza}
              onChange={handleChange}
            />
          </label>

          <label className="date-label">
            Data ritorno
            <input
              type="date"
              name="ritorno"
              value={form.ritorno}
              onChange={handleChange}
            />
          </label>
          <input
            type="number"
            name="prezzo"
            placeholder="Prezzo in €"
            value={form.prezzo}
            onChange={handleChange}
          />
          <button type="submit">Pubblica viaggio</button>
        </form>

        {/* anteprima in tempo reale */}
        <div className="anteprima">
          <h3>Anteprima</h3>
          {form.titolo && (
            <div className="trip-card">
              {form.immagine && <img src={form.immagine} alt="anteprima" />}
              <h4>{form.titolo}</h4>
              <p>{form.descrizione}</p>
              <p>
                {form.partenza} → {form.ritorno}
              </p>
              <p>
                <strong>{form.prezzo} €</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default GestioneViaggi;
