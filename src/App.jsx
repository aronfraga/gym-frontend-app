import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Planes from "./components/Planes/Planes"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Home />} />
        <Route path='/rutinas' element={<Home />} />
        <Route path='/instalaciones' element={<Home />} />
        <Route path='/seguimiento' element={<Home />} />
        <Route path='/clases' element={<Home />} />
        <Route path='/feedback' element={<Home />} />
        <Route path='/planes' element={<Planes />} />
        <Route path='/:id' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;