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

const Home = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

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
    return <Loading />
  }

  return (
    <div>
      {isLoading ? renderSpinner() : isAuthenticated ? renderisAuthenticated() : renderisNotAuthenticated()}
      <Link to='home/routines'>
        <button>routines</button>
      </Link>
      
    </div>
  )
}

export default Home;
