<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage'
import DetailTripsPage from './pages/DetailTripsPage';
import DefaultLayout from './assets/Layout/DefaultLayout';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<DetailTripsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>


=======
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
>>>>>
  );
}

export default App;
