import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import {useGetAllUsersQuery} from '../../redux/query/api';
import Loading from '../Loading/Loading';
import  Style  from './Profile.module.css';

const Profile = () => {

    const {user} = useAuth0();
	const email = user?.email;
    const {data,isSuccess} =  useGetAllUsersQuery();
    const mydata = () =>{
       if(isSuccess){
        let actual_user = data?.find(e => e.email === email);
        return actual_user;
       }
    };
    const datos = mydata();
    let rol = datos?.role;

    const funcionalidad = () => {
        let date1 = new Date(datos?.membresyExpDate);
        let date2 = Date.now();
        let diff =  Math.floor((date1-date2)/(1000 * 60 * 60 * 24));
        if(isSuccess && (rol !=="Admin")){
            if (diff<0) {
                return (
                    <div>
                        <p>Tu membresía se encuentra vencida, quieres renovarla?</p>
                        <button>Renovar</button>
                    </div>)
            }else{
                return (
                    <div>
                        <p>Tu membresía vence en ${diff} días</p>
                        <button>Renovar</button>
                    </div>)
            }
        }else if(isSuccess && (rol ==="Admin")){
            return (
                <div>
                    <p>Eres administrador, puedes acceder</p>
                    <p> a la siguiente funcionalidad</p>
                    <Link to={'/admdashboard'}><button>Dashboard</button></Link>
                    <button>Crear Rutina</button>
                </div>)
        }
    };
   
    return(
        <div>
            <NavBar/>
                {isSuccess?
                <div>
                    <h1>Bienvenido a su perfil</h1>
                    <div className={Style.ProfileWrapper}>
                        <div className={Style.PhotoContainer}>
                            <img className={Style.img} src={datos?.imgUrl}/>
                        </div>
                        <div className={Style.InfoProfile}>
                            <p>Nombre: {datos?.name}</p>
                            <p>E-mail: {datos?.email}</p>
                            {funcionalidad()}
                        </div>
                    </div>
                </div>:<Loading/>}
        </div>
    );
};
export default Profile;