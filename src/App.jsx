import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Rubrica from "./pages/Rubrica";
import ContactPage from "./pages/ContactPage";
import DefaultLayout from "./layouts/DefaultLayout";
import DetailTripsPage from "./pages/DetailTripsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viaggi" element={<DetailTripsPage />} />
        <Route path="/rubrica" element={<Rubrica />} />
        <Route path='/contatti' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
