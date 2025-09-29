import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTrash,
  FaEdit,
  FaPlus,
  FaIdCard,
} from "react-icons/fa";
import "../index.css";

function Rubrica() {
  const [search, setSearch] = useState("");
  const [contatti, setContatti] = useState([
    {
      id: 1,
      nome: "Mario",
      cognome: "Rossi",
      telefono: "3204567890",
      email: "mario.rossi@email.com",
    },
    {
      id: 2,
      nome: "Anna",
      cognome: "Bianchi",
      telefono: "3319876543",
      email: "anna.bianchi@email.com",
    },
    {
      id: 3,
      nome: "Luca",
      cognome: "Verdi",
      telefono: "3471122334",
      email: "luca.verdi@email.com",
    },
    {
      id: 4,
      nome: "Giulia",
      cognome: "Ferrari",
      telefono: "3392233445",
      email: "giulia.ferrari@email.com",
    },
    {
      id: 5,
      nome: "Paolo",
      cognome: "Ricci",
      telefono: "3285566778",
      email: "paolo.ricci@email.com",
    },
    {
      id: 6,
      nome: "Chiara",
      cognome: "Esposito",
      telefono: "3456677889",
      email: "chiara.esposito@email.com",
    },
    {
      id: 7,
      nome: "Francesco",
      cognome: "Marini",
      telefono: "3347788990",
      email: "francesco.marini@email.com",
    },
    {
      id: 8,
      nome: "Elena",
      cognome: "Greco",
      telefono: "3278899001",
      email: "elena.greco@email.com",
    },
    {
      id: 9,
      nome: "Giorgio",
      cognome: "Conti",
      telefono: "3331122445",
      email: "giorgio.conti@email.com",
    },
  ]);

  const [form, setForm] = useState({
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
  });
  const [editId, setEditId] = useState(null);

  // Filtra contatti per nome e cognome
  const filtrati = contatti.filter((p) =>
    (p.nome + " " + p.cognome).toLowerCase().includes(search.toLowerCase())
  );

  // Aggiungi o modifica contatto
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.cognome) return;

    if (editId) {
      setContatti(
        contatti.map((c) => (c.id === editId ? { ...c, ...form } : c))
      );
      setEditId(null);
    } else {
      setContatti([...contatti, { id: Date.now(), ...form }]);
    }

    setForm({ nome: "", cognome: "", telefono: "", email: "" });
  };

  // Elimina contatto
  const removeContact = (id) => {
    setContatti(contatti.filter((c) => c.id !== id));
  };

  // Prepara modifica
  const editContact = (c) => {
    setForm({
      nome: c.nome,
      cognome: c.cognome,
      telefono: c.telefono,
      email: c.email,
    });
    setEditId(c.id);
  };

  return (
    <DefaultLayout>
      <div className="rubrica-page">
        {/* Box titolo + ricerca */}
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

        {/* Form Aggiungi/Modifica */}
        <form onSubmit={handleSubmit} className="rubrica-form">
          <div className="input-icon">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
          </div>

          <div className="input-icon">
            <FaIdCard className="icon" />
            <input
              type="text"
              placeholder="Cognome"
              value={form.cognome}
              onChange={(e) => setForm({ ...form, cognome: e.target.value })}
            />
          </div>

          <div className="input-icon">
            <FaPhone className="icon" />
            <input
              type="text"
              placeholder="Telefono"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            />
          </div>

          <div className="input-icon">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <button type="submit">
            {editId ? "Modifica" : "Aggiungi"} <FaPlus />
          </button>
        </form>

        {/* Lista contatti */}
        <div className="rubrica-list">
          {filtrati.map((p) => (
            <div key={p.id} className="rubrica-item">
              <h3>
                <FaUser /> {p.nome} {p.cognome}
              </h3>
              <p>
                <FaPhone /> {p.telefono}
              </p>
              <p>
                <FaEnvelope /> {p.email}
              </p>
              <div className="rubrica-actions">
                <button className="edit" onClick={() => editContact(p)}>
                  <FaEdit />
                </button>
                <button className="delete" onClick={() => removeContact(p.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Rubrica;
