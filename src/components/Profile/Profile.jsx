import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import {useGetAllUsersQuery, useSetNewImgMutation} from '../../redux/query/api';
import Loading from '../Loading/Loading';
import  Style  from './Profile.module.css';
import {IconButton, FormLabel, FormControl} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Button } from '@mui/material';
import { uploadUserImage } from './Helpers';

const Profile = () => {
    const [setImg] = useSetNewImgMutation();
    const {user} = useAuth0();
	const email = user?.email;
    const [isShown, setIsShown] = useState(false);
    const [input,setInput] = useState({ imgUrl: "" });
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
                        <Button>Renovar</Button>
                    </div>)
            }else{
                return (
                    <div>
                        <p>Tu membresía vence en ${diff} días</p>
                        <Button>Renovar</Button>
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

    const handlerbuttonEdit = () => {
        setIsShown((current) => !current);
    };

    const handlerSaveButton = (event) => {
        setImg(input.imgUrl);
    };

    const handlerImage = async (e) => {
        e.preventDefault();
        const url = await uploadUserImage(e.target.files);
        console.log(url);
        setInput({...input, ["imgUrl"]: url});
    };

    return(
        <div>
            <NavBar/>
                {isSuccess?
                <div>
                    <h1>Bienvenido a su perfil</h1>
                    <div className={Style.ProfileWrapper}>
                        <div className={Style.PhotoandEdit}>
                            <div className={Style.PhotoContainer}>
                                <img className={Style.img} src={datos?.imgUrl}/> </div>
                                <div>
                                <Button 
                                    onClick={handlerbuttonEdit}
                                    variant='contained'
									sx={{
										background: '#0d0d6b',
										'&:hover': {
											backgroundColor: '#62629f',
											transition: '0.4s',
										},
									}}>Editar Foto
                                </Button>
                                {isShown && <Button 
                                    onClick={handlerSaveButton}
                                    variant='contained'
									sx={{
										background: '#0d0d6b',
										'&:hover': {
											backgroundColor: '#62629f',
											transition: '0.4s',
										},
									}}>Guardar</Button>}
                                </div>
                            {isShown &&
                            <div>
                                <FormControl>
                                    <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label">
                                    <FormLabel id="img-label">Imagen</FormLabel>
                                    <input
                                    accept="image/*"
                                    type="file"
                                    name="imgUrl"
                                    onChange={handlerImage}
                                    />
                                    <PhotoCamera />
                                    </IconButton>
                                </FormControl>
                            </div>}
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