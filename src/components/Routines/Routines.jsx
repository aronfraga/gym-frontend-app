import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllRoutines from "../AllRoutines/AllRoutines";
import BtnRoutines from "../BtnRoutines/BtnRoutines";

const Routines = () => {
  return (
    <div>
      <NavBar />
      <BtnRoutines />
      <AllRoutines />
      <Footer />
    </div>
  )
}

export default Routines;