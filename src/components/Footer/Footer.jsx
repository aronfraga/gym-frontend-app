import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Footer.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {
	googlemapurl,
	instaimgurl,
	fbimgurl,
	linkinimgurl,
	twitterimgurl,
} from './Helpers';
import logo from '../../Images/Logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

const Footer = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl2, setAnchorEl2] = React.useState(null);
	const open = Boolean(anchorEl);
	const open2 = Boolean(anchorEl2);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick2 = (event) => {
		setAnchorEl2(event.currentTarget);
	};

	const handleClose2 = () => {
		setAnchorEl2(null);
	};

	return (
		<footer className={Style.footer}>
			<div className={Style.footerR1}>
				<div className={Style.logoContainer}>
					<img className={Style.ImgLogo} src={logo} alt='img' />
				</div>
				<div className={Style.linkswrapper}>
					<Button
						sx={{
							color: 'white',
						}}
						id='basic-button'
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<GitHubIcon fontSize='large' />
					</Button>
					<Menu
						id='basic-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<a href='https://github.com/JAlex2014' className={Style.menuitem}>
							<MenuItem>Alexsandro Gomez</MenuItem>
						</a>
						<a href='https://github.com/AguRey96' className={Style.menuitem}>
							<MenuItem>Agustin Reynoso</MenuItem>
						</a>
						<a href='https://github.com/aronfraga' className={Style.menuitem}>
							<MenuItem>Aron Fraga</MenuItem>
						</a>
						<a href='https://github.com/Schmitz0' className={Style.menuitem}>
							<MenuItem>Gaston Schmitz</MenuItem>
						</a>
						<a
							href='https://github.com/JoseManriqueBaena'
							className={Style.menuitem}
						>
							<MenuItem>Jose Manrique</MenuItem>
						</a>
						<a
							href='https://github.com/ManuCasanueva'
							className={Style.menuitem}
						>
							<MenuItem>Manuel Casanueva</MenuItem>
						</a>
						<a
							href='https://github.com/MartinGalara'
							className={Style.menuitem}
						>
							<MenuItem>Martin Galara</MenuItem>
						</a>
						<a href='https://github.com/pablolospe' className={Style.menuitem}>
							<MenuItem>Pablo Lospennato</MenuItem>
						</a>
					</Menu>
					<Button
						sx={{
							color: 'white',
						}}
						id='basic-button'
						aria-controls={open2 ? 'basic-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open2 ? 'true' : undefined}
						onClick={handleClick2}
					>
						<LinkedIn fontSize='large' />
					</Button>
					<Menu
						id='basic-menu'
						anchorEl={anchorEl2}
						open={open2}
						onClose={handleClose2}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<a
							href='https://www.linkedin.com/in/alexsandro-gomez-913b3713b/'
							className={Style.menuitem}
						>
							<MenuItem>Alexsandro Gomez</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/agustin-reynoso-5a339515a/'
							className={Style.menuitem}
						>
							<MenuItem>Agustin Reynoso</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/aaron-fraga-4036a8244/'
							className={Style.menuitem}
						>
							<MenuItem>Aron Fraga</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/gaston-schmitz-76267645/'
							className={Style.menuitem}
						>
							<MenuItem>Gaston Schmitz</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/jose-manrique/'
							className={Style.menuitem}
						>
							<MenuItem>Jose Manrique</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/manuel-casanueva-b243a224a/'
							className={Style.menuitem}
						>
							<MenuItem>Manuel Casanueva</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/martingalara/'
							className={Style.menuitem}
						>
							<MenuItem>Martin Galara</MenuItem>
						</a>
						<a
							href='https://www.linkedin.com/in/pablo-xavier-lospennato-1065b4a2/'
							className={Style.menuitem}
						>
							<MenuItem>Pablo Lospennato</MenuItem>
						</a>
					</Menu>
				</div>
				<div className={Style.altgooglemapgooglemap}>
					<iframe
						className={Style.googlemapbox}
						src={googlemapurl}
						width='190'
						height='150'
						loading='lazy'
						frameBorder='0'
						marginHeight='0'
						marginWidth='0'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>

			<div className={Style.altfooterR3}>
				<h4>DRACULA TEAM © 2022</h4>
			</div>
		</footer>
	);
};
export default Footer;
