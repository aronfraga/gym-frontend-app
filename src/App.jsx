import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Planes from "./components/Planes/Planes";
import NoMatch from "./components/NoMatch/NoMatch";
import Routines from "./components/Routines/Routines";
import Staff from "./components/Staff/Staff";
import FeedBack from "./components/FeedBack/FeedBack";
import FormRoutines from "./components/FormRoutines/FormRoutines";
import DetailRoutine from "./components/DetailRoutine/DetailRoutine";
import Landing from "./components/Login/Login";
//import Facilities from "./components/Facilities/Facilities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Landing />} />
        <Route path="/tienda" element={<Home />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/rutinas/:id" element={<DetailRoutine />} />
        <Route path="/rutinas/crear" element={<FormRoutines />} />
        <Route path="/staff" element={<Staff />} />
        {/* <Route path="/instalaciones" element={<Facilities />} /> */}
        <Route path="/seguimiento" element={<Home />} />
        <Route path="/clases" element={<Home />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
