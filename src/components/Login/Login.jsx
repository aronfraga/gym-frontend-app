import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Landing = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		// <div className="loginContainer">
		//   <h1 className="loginText">Unete a la comunidad del App Gym</h1>
		//   <Button variant="contained" onClick={() => loginWithRedirect()}>
		//     Iniciar Sesion
		//   </Button>
		// </div>
		<div className='loginContainer'>
			<div className='card transition'>
				<h2 className='transition'>Gym Fit</h2>
				<p className='parrafo'>Unete a nuestra comunidad.</p>
				<div className='cta-container transition'>
					<Button
						className='cta'
						variant='contained'
						sx={{
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
				<div className='card_circle transition'></div>
			</div>
		</div>
	);
};

export default Landing;
