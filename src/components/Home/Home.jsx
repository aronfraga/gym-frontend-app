import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/defaultAction";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Carrusel from "../Carousel/Carrusel";
import Login from "../Login/Login";
import Planes from "../Planes/Planes";

const Home = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) dispatch(setToken(user.sub));
  }, [dispatch]);

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
