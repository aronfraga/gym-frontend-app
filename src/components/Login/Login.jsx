import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) navigate("/home");
  return (
    <div className="loginContainer">
      <h1 className="loginText">Unete a la comunidad del App Gym</h1>
      <Button
        variant="contained"
        onClick={() => loginWithRedirect({ redirect_uri: "/home" })}
      >
        Iniciar Sesion
      </Button>
    </div>
  );
};

export default Landing;
