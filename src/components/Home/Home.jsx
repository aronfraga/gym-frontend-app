import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Login from "../Login/Login";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/defaultAction";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrusel from "../Carousel/Carrusel";

const Home = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) dispatch(setToken(user.sub));
  }, [dispatch]);

  const renderisAuthenticated = () => {
    return (
      <div>
        <NavBar />
        <Carrusel />
        <Footer />
      </div>
    )
  }

  const renderisNotAuthenticated = () => {
    return <Login />
  }

  const renderSpinner = () => {
    return
  }

  return (
    <div>
      {isAuthenticated ? renderisAuthenticated() : renderisNotAuthenticated()}

    </div>
  )
}



export default Home;
