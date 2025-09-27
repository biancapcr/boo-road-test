import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "../index.css";

function Rubrica() {
  const [search, setSearch] = useState("");

  const partecipanti = [
    {
      nome: "Mario",
      cognome: "Rossi",
      telefono: "3204567890",
      email: "mario.rossi@email.com",
    },
    {
      nome: "Anna",
      cognome: "Bianchi",
      telefono: "3319876543",
      email: "anna.bianchi@email.com",
    },
    {
      nome: "Luca",
      cognome: "Verdi",
      telefono: "3471122334",
      email: "luca.verdi@email.com",
    },
    {
      nome: "Giulia",
      cognome: "Ferrari",
      telefono: "3392233445",
      email: "giulia.ferrari@email.com",
    },
    {
      nome: "Paolo",
      cognome: "Ricci",
      telefono: "3285566778",
      email: "paolo.ricci@email.com",
    },
    {
      nome: "Chiara",
      cognome: "Esposito",
      telefono: "3456677889",
      email: "chiara.esposito@email.com",
    },
    {
      nome: "Francesco",
      cognome: "Marini",
      telefono: "3347788990",
      email: "francesco.marini@email.com",
    },
    {
      nome: "Elena",
      cognome: "Greco",
      telefono: "3278899001",
      email: "elena.greco@email.com",
    },
    {
      nome: "Giorgio",
      cognome: "Conti",
      telefono: "3331122445",
      email: "giorgio.conti@email.com",
    },
  ];

  const filtrati = partecipanti.filter((p) =>
    (p.nome + " " + p.cognome).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DefaultLayout>
      <div className="rubrica-page">
        {/* Contenitore con cornice dorata */}
        <div className="rubrica-container">
          <h2 className="rubrica-title">Rubrica Partecipanti</h2>
          <input
            type="text"
            placeholder="Cerca per nome o cognome..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
        </div>

        {/* Lista partecipanti */}
        <div className="rubrica-list">
          {filtrati.map((p, i) => (
            <div key={i} className="rubrica-item">
              <h3>
                <FaUser /> {p.nome} {p.cognome}
              </h3>
              <p>
                <FaPhone /> {p.telefono}
              </p>
              <p>
                <FaEnvelope /> {p.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Rubrica;
