import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../Components/About';
import Proyectos from '../Components/Proyectos';

export default function Rutas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/proyect' element={<Proyectos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
