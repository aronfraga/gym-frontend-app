import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { tokenRequest } from "../../redux/actions/defaultAction";
import { resetAlert } from "../../redux/actions/defaultAction";
import { getToken } from "../../services/cookies";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Carrusel from "../Carousel/Carrusel";
import Login from "../Login/Login";
import Planes from "../Planes/Planes";
import PrevRoutines from "../PrevRoutines/PrevRoutines";
import { PrevShop } from '../PrevShop/PrevShop';

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const { tokenIsValid } = useSelector((state) => state.tokenIsValid);
  const { alertDelivery } = useSelector((state) => state.alertDelivery);

  console.log(alertDelivery)

  useEffect(() => {
    if (isAuthenticated) {
      if (!getToken() && tokenIsValid) {
        dispatch(
          tokenRequest({
            name: user.given_name || user.nickname,
            email: user.email,
            password: user.sub,
          })
        );
      }
      if (!tokenIsValid) logout();
    }
    if(alertDelivery) return handlerAlertSuccess();
  }, [dispatch, isAuthenticated, tokenIsValid, alertDelivery]);

  const handlerAlertSuccess = () => {
		toast.success('¡La compra se realizo con exito!', {
			position: 'bottom-left',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
  dispatch(resetAlert(false));
}

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <Login />;

  return (
    <div>
      <NavBar />
      <Carrusel />
      <PrevRoutines />
      <PrevShop />
      <Planes />
      <Footer />
      <ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='colored'
			/>
    </div>
  );
};

export default Home;
