import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';
import { tokenRequest } from "../../redux/actions/defaultAction";
import { getToken } from '../../services/cookies';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Carrusel from "../Carousel/Carrusel";
import Login from "../Login/Login";
import Planes from "../Planes/Planes";

const Home = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { tokenIsValid } = useSelector((state) => state.tokenIsValid);

  const usr = { //esto es para simular el inicio de sesion sera reemplazado por "user"
    name: "aron",
    email: "aaronfrago@hotmail.com",
    password: "auth0|636d38848ad399282c11fafa"
  }

  useEffect(() => {
    if(isAuthenticated) {
      if(!getToken() && tokenIsValid) dispatch(tokenRequest(usr));
      if(!tokenIsValid) logout();
    }
  }, [dispatch, isAuthenticated, tokenIsValid]);

  if(isLoading) return <Loading />
  if(!isAuthenticated) return <Login />

  return (
    <div>
      <NavBar /> 
      <Carrusel />
      <Planes />
      <Footer />
    </div>
  )
}

export default Home;

