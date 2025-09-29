import { participants } from "../data/participants.js";

let currentId = participants.length + 1;

export const index = (req, res) => {
  res.json(participants);
};

export const show = (req, res) => {
  const id = parseInt(req.params.id);
  const participant = participants.find((p) => p.id === id);
  if (!participant) {
    return res.status(404).json({ error: "Partecipante non trovato" });
  }
  res.json(participant);
};


export const store = (req, res) => {
  const { nome, cognome, telefono, email } = req.body;
  if (!nome || !cognome) {
    return res.status(400).json({ error: "Nome e cognome obbligatori" });
  }

  const nuovo = { id: currentId++, nome, cognome, telefono, email };
  participants.push(nuovo);
  res.status(201).json(nuovo);
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const index = participants.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Partecipante non trovato" });

  participants[index] = { ...participants[index], ...req.body };
  res.json(participants[index]);
};

export const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const index = participants.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Partecipante non trovato" });

  const eliminato = participants.splice(index, 1);
  res.json(eliminato[0]);
};