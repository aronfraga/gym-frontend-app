import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Login from "../Login/Login";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/actions/defaultAction";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Home = () => {

  const dispatch = useDispatch();
  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) dispatch(setToken(user.sub));
  },[dispatch]);

  const renderisAuthenticated = () => {
    return (
      <div>
        <NavBar />
        <h1>token test: {user.sub}</h1>
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
      {isAuthenticated?renderisAuthenticated():renderisNotAuthenticated()}
      <button onClick={() => logout({ returnTo: window.location.origin })} type='button'>Log Out</button>
    </div>
  )
}

export default Home;
