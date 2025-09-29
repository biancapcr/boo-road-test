import express from "express";
const router = express.Router();


router.get("/test", (req, res) => {
  res.json({
    status: "success",
    message: "API contatti attiva!"
  });
});


router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      status: "error",
      message: "Tutti i campi sono obbligatori"
    });
  }


  console.log("messaggio ricevuto:", req.body);

  return res.json({
    status: "success",
    message: "Grazie per avercicontattato! Ti risponderemo al più presto"
  });
});

export default router;