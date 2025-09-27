import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Rubrica from "./pages/Rubrica";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rubrica" element={<Rubrica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
