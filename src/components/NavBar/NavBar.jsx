import * as React from 'react';
import { setTokenDefault } from '../../redux/actions/defaultAction';
import { destroyToken } from '../../services/cookies';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../NavBar/NavBar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png';

const pages = [
	'tienda',
	'rutinas',
	'instalaciones',
	'staff',
	'agenda',
	'feedback',
];
// const settings = [ 'tienda','seguimiento', 'clases',];

const NavBar = () => {
	const { user, logout } = useAuth0();
	const { id } = useParams();

	const [anchorElNav, setAnchorElNav] = React.useState();
	const [anchorElUser, setAnchorElUser] = React.useState();

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		destroyToken();
		setTokenDefault();
		logout({ returnTo: window.location.origin });
	};
	const handlerCloseUserMenu = () => {
		setAnchorElUser();
	};
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav();
	};

	return (
		<AppBar
			sx={{
				margin: 0,
				backgroundColor: 'var(--secondary-color)',
			}}
			position='static'
		>
			<Container
				disableGutters
				className={styles.mainContainer}
				maxWidth={false}
				width='100%'
			>
				<Toolbar
					className={styles.toolBar}
					sx={{
						display: 'flex',
						// paddingLeft: '0px',
						// paddingRight: '0px',
						'&.MuiToolbar-root': {
							paddingLeft: '12px',
							paddingRight: '12px',
						},
					}}
				>
					{/* <Link to={'/home'} style={{ textDecoration: 'none' }}> */}
					<div className={styles.appGym}>
						<Link to={'/home'} style={{ textDecoration: 'none' }}>
							<img src={logo} alt='Logo' />
						</Link>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								sx={{ color: 'var(--white-color)' }}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Link to={`/${page}`} style={{ textDecoration: 'none' }}>
											<Typography
												textAlign='center'
												sx={{ color: 'var(--black-color)' }}
											>
												{page.toUpperCase()}
											</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</div>
					{/* </Link> */}

					<Box
						sx={{
							flexGrow: 1,

							display: {
								xs: 'none',
								md: 'flex',
								justifyContent: 'center',
								gap: '6px',
								width: 'fit-content',
							},
						}}
					>
						<Link to={'/home'} style={{ textDecoration: 'none' }}>
							<Button
								sx={{
									color: 'var(--white-color)',
									display: 'block',
									fontSize: '15px',
								}}
							>
								INICIO
							</Button>
						</Link>
						{pages.map((page) => (
							<Link
								to={`/${page}`}
								style={{ textDecoration: 'none' }}
								key={page}
							>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										color: 'var(--white-color)',
										display: 'block',
										fontSize: '15px',
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>
					{/* Carita + boton*/}
					<div className={styles.caritaContainer}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar
									alt='avatar'
									src={user?.picture}
									sx={{ border: '1px solid var(--white-color)' }}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handlerCloseUserMenu}
						>
							<Link
								to={`/perfil`}
								style={{ textDecoration: 'none', color: 'var(--black-color)' }}
							>
								<MenuItem>
									<Typography textAlign='center'>Perfil</Typography>
								</MenuItem>
							</Link>
							<MenuItem>
								<Typography
									onClick={handleCloseUserMenu}
									textAlign='center'
									sx={{ color: 'var(--black-color)' }}
								>
									Cerrar Sesion
								</Typography>
							</MenuItem>
						</Menu>

						{/* <Link to='/planes' style={{ textDecoration: 'none' }}>
							<Button
								variant='outlined'
								sx={{
									paddingRight: '25px',
									paddingLeft: '25px',
									color: 'white',
									display: 'flex',
									borderRadius: '6px',
									borderColor: 'var(--white-color)',
									alignItems: 'center',
									'&:hover': {
										backgroundColor: 'var(--tertiary-color)',
										transition: '0.4s',
										borderColor: 'var(--white-color)',
									},
								}}
							>
								Mi Plan
							</Button>
						</Link> */}
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
