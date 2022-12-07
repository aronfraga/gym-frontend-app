import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import style from './Login.module.css';
import Typewriter from 'typewriter-effect';

const Landing = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className={style.mainContainer}>
			<div className={style.infoContainer}>
				<div className={style.titlesContainer}>
					<h1 className={style.title1}>
						Bienvenido a nuestra comunidad Gymfit.
					</h1>
					<div className={style.divTypewriter}>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Suscríbete a nuestro gym desde 2500 por mes')
									.pauseFor(3000)
									.deleteAll()
									.typeString('Inicia sesión para entrar en acción!')
									.start();
							}}
						/>
					</div>
				</div>
				<Button
					className='cta'
					variant='contained'
					sx={{
						width: '300px',
						height: '50px',
						background: 'var(--primary-color)',
						'&:hover': {
							backgroundColor: 'var(--secondary-color)',
							transition: '0.4s',
						},
					}}
					onClick={() => loginWithRedirect()}
				>
					Iniciar Sesion
				</Button>
			</div>
		</div>
	);
};

export default Landing;
