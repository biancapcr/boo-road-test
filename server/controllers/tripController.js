import { trips } from "../data/trips.js";

// GET /api/trips
export const index = (req, res) => {
  res.json(trips);
};

// GET /api/trips/:id
export const show = (req, res) => {
  const id = parseInt(req.params.id);
  const trip = trips.find(t => t.id === id);

  if (!trip) {
    return res.status(404).json({ error: "Viaggio non trovato" });
  }

  res.json(trip);
};
