import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
	useGetAllUsersQuery,
	useSetNewImgMutation,
} from '../../redux/query/api';
import Loading from '../Loading/Loading';
import Style from './Profile.module.css';
import { IconButton, FormLabel, FormControl } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Button } from '@mui/material';
import { uploadUserImage } from './Helpers';

const Profile = () => {
	const [setImg] = useSetNewImgMutation();
	const { user } = useAuth0();
	const email = user?.email;
	const [isShown, setIsShown] = useState(false);
	const [input, setInput] = useState({ imgUrl: '' });
	const { data, isSuccess, isLoading } = useGetAllUsersQuery();

	const mydata = () => {
		if (isSuccess) {
			let actual_user = data?.find((e) => e.email === email);
			return actual_user;
		}
	};

	const datos = mydata();
	let rol = datos?.role;

	const funcionalidad = () => {
		let date1 = new Date(datos?.membresyExpDate);
		let date2 = Date.now();
		let diff = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
		if (isSuccess && rol !== 'Admin') {
			if (diff < 0) {
				return (
					<div>
						<p>Tu plan se encuentra vencido, ¡renuévalo ahora!</p>
						<Link to='/planes' style={{ textDecoration: 'none' }}>
							<Button
								onClick={handlerSaveButton}
								variant='contained'
								sx={{
									width: '100%',
									background: '#0d0d6b',
									'&:hover': {
										backgroundColor: '#62629f',
										transition: '0.4s',
									},
								}}
							>
								Ver planes
							</Button>
						</Link>
					</div>
				);
			} else {
				return (
					<div>
						<p>Tu plan vence el InserteFechaAquiAlex</p>
						<Link to='/planes' style={{ textDecoration: 'none' }}>
							<Button
								onClick={handlerSaveButton}
								variant='contained'
								sx={{
									width: '100%',
									background: '#0d0d6b',
									'&:hover': {
										backgroundColor: '#62629f',
										transition: '0.4s',
									},
								}}
							>
								Ver planes
							</Button>
						</Link>
					</div>
				);
			}
		} else if (isSuccess && rol === 'Admin') {
			return (
				<div>
					<p>Eres administrador, puedes acceder</p>
					<p> a la siguiente funcionalidad</p>
					<Link to={'/admdashboard'}>
						<button>Dashboard</button>
					</Link>
				</div>
			);
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
		setInput({ ...input, ['imgUrl']: url });
	};

	if (isLoading) return <Loading />;
	return (
		<>
			<NavBar />
			<div className={Style.mainContainer}>
				<div className={Style.profileContainer}>
					<h1>Bienvenido a tu perfil</h1>
					<div className={Style.ProfileWrapper}>
						<div className={Style.PhotoandEdit}>
							<div className={Style.PhotoContainer}>
								<img className={Style.img} src={datos?.imgUrl} />{' '}
							</div>
							<div className={Style.buttonContainer}>
								<Button
									onClick={handlerbuttonEdit}
									variant='outlined'
									sx={{
										width: '100%',
										color: 'var(--primary-color)',
										borderColor: 'var(--primary-color)',
										'&:hover': {
											borderColor: 'var(--primary-color)',
											backgroundColor: 'var(--hover-outlined-button)',
											transition: '0.4s',
										},
									}}
								>
									{isShown ? 'Volver atras' : 'Cambiar Foto'}
								</Button>
								{isShown && (
									<Button
										onClick={handlerSaveButton}
										variant='contained'
										sx={{
											width: '100%',
											background: '#0d0d6b',
											'&:hover': {
												backgroundColor: '#62629f',
												transition: '0.4s',
											},
										}}
									>
										Guardar
									</Button>
								)}
							</div>
							{isShown && (
								<div>
									<FormControl>
										<IconButton
											color='primary'
											aria-label='upload picture'
											component='label'
										>
											<FormLabel id='img-label'>Imagen</FormLabel>
											<input
												accept='image/*'
												type='file'
												name='imgUrl'
												onChange={handlerImage}
											/>
											<PhotoCamera />
										</IconButton>
									</FormControl>
								</div>
							)}
						</div>
						<div className={Style.InfoProfile}>
							<h3>Nombre: {datos?.name}</h3>
							<h3>E-mail: {datos?.email}</h3>
							{funcionalidad()}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
