import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ThankYou = () => {

  return (
    <div>
      <h1>😁😁😁 Gracias por su compra 😁😁😁</h1>
      <Link to='/tienda' >
        VOLVER
      </Link>
    </div>
  )
}

export default ThankYou;