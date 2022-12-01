import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
	useGetAllUsersQuery,
	useSetNewImgMutation,
} from '../../redux/query/api';
import { useGetUserProfileQuery } from '../../redux/query/ApiEcommerce';
import Loading from '../Loading/Loading';
import Style from './Profile.module.css';
import { IconButton, FormLabel, FormControl } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Button } from '@mui/material';
import { uploadUserImage } from './Helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setNewPlan } from '../../redux/actions/defaultAction';

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [setImg] = useSetNewImgMutation();
	const [isShown, setIsShown] = useState(false);
	const [input, setInput] = useState({ imgUrl: '' });
	const { data: profile, isLoading, isSuccess } = useGetUserProfileQuery();
	const rol = profile?.role;
	const urlChanged = window.location.search;
	const urlParams = new URLSearchParams(urlChanged);
	const fecha = new Date(profile?.membresyExpDate);

	let purchaseStatus = {
		payed: urlParams.get('status') === 'approved' ? true : false,
		paymentMethod: urlParams.get('payment_type'),
		purchaseId: urlParams.get('preference_id'),
	};

	useEffect(() => {
		if (purchaseStatus.payed) {
			dispatch(setNewPlan(purchaseStatus));
			purchaseStatus.payed = false;
			navigate('/home');
		}
	}, []);

	function renderPlan() {
		if (isLoading) return <p>Loading...</p>;
		return <p>Tu plan vence el {fecha.toLocaleDateString()}</p>;
	}

	function renderPlanExpired() {
		if (isLoading) return <p>Loading...</p>;
		return (
			<p>
				Tu plan se encuentra vencido, puedes renovarlo ahora mismo haciendo clic
				aquí abajo
			</p>
		);
	}

	const funcionalidad = () => {
		if (isSuccess && rol !== 'Admin') {
			if (profile?.expiredMembresy) {
				return (
					<div>
						{renderPlanExpired()}
						<Link to='/planes' style={{ textDecoration: 'none' }}>
							<Button
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
						{renderPlan()}
						<Link to='/planes' style={{ textDecoration: 'none' }}>
							<Button
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
					<p>Eres administrador, puedes acceder a la siguiente funcionalidad</p>
					<Link to={'/admdashboard'} style={{ textDecoration: 'none' }}>
						<Button
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
							Dashboard
						</Button>
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
								<img className={Style.img} src={profile?.imgUrl} />{' '}
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
							<h3>Nombre: {profile?.name}</h3>
							<h3>E-mail: {profile?.email}</h3>
							{funcionalidad()}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Profile;
