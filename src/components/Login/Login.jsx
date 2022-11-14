import React from 'react';
import { Button } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css'

const Landing = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="loginContainer">
      <h1 className="loginText">Unete a la comunidad del App Gym</h1>
      <Button variant="contained" onClick={() => loginWithRedirect()}>Iniciar Sesion</Button>
    </div>
  )
}

export default Landing;