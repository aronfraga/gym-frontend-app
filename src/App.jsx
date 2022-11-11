import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Planes from "./components/Planes/Planes";
import NoMatch from "./components/NoMatch/NoMatch";
import Routines from "./components/Routines/Routines";
import Staff from "./components/Staff/Staff";
import FeedBack from "./components/FeedBack/FeedBack";
import FormRoutines from "./components/FormRoutines/FormRoutines";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Home />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/rutinas/crear" element={<FormRoutines />} />
        <Route path="/instalaciones" element={<Staff />} />
        <Route path="/seguimiento" element={<Home />} />
        <Route path="/clases" element={<Home />} />
        <Route path="/feedback" element={<Home />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
