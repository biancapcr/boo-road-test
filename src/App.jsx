import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Rubrica from "./pages/Rubrica";
import ContactPage from "./pages/ContactPage";
import DetailTripsPage from "./pages/DetailTripsPage";
import GestioneViaggi from "./pages/GestioneViaggi"; // 🔹 nuovo import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viaggi" element={<DetailTripsPage />} />
        <Route path="/rubrica" element={<Rubrica />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/gestione-viaggi" element={<GestioneViaggi />} />{" "}
        {/* 🔹 nuova rotta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
