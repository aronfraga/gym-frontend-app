import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Routines from "./components/Routines/Routines";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoMatch />} />
        <Route path='/' element={<Home />} />
        <Route path='/tienda' element={<Home />} />
        <Route path='/rutinas' element={<Routines />} />
        <Route path='/instalaciones' element={<Home />} />
        <Route path='/seguimiento' element={<Home />} />
        <Route path='/clases' element={<Home />} />
        <Route path='/feedback' element={<Home />} />
        <Route path='/planes' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

