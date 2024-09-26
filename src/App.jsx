import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ajout from './pages/Ajout';
import AthletePage from './pages/AthletePage';
import Favoris from './pages/Favoris';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<AthletePage />} />
        <Route path="/ajout" element={<Ajout/>} />
        <Route path="/favoris" element={<Favoris/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;