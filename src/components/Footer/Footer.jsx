import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import {googlemapurl,instaimgurl,fbimgurl,linkinimgurl,twitterimgurl} from "./Helpers";
import logo from '../../Images/Logo.png';

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
       {/*  <div className={Style.footerR1}>
            <div className={Style.logo}>
                <h1>GymApp Logo</h1>
            </div>
            <div className={Style.containerfooterLinks}>
                <Link className={Style.Links} to="/home">Inicio</Link>
                <Link className={Style.Links} to="/tiendavirtual">Tienda Virtual</Link>
                <Link className={Style.Links} to="/rutinas">Rutinas</Link>
                <Link className={Style.Links} to="/instalaciones">Gym</Link>
                <Link className={Style.Links} to="/seguimiento">Seguimiento</Link>
                <Link className={Style.Links} to="/clases">Clases</Link>
                <Link className={Style.Links} to="/feedback">Feedback</Link>
                <Link className={Style.Links} to="/perfil">Perfil</Link>
                <Link className={Style.Links} to="/membresia">Tu plan</Link>
            </div>
            <div className={Style.googlemap}>
                <iframe  className={Style.googlemapbox} src={googlemapurl} 
                        width="350" 
                        height="210" 
                        loading="lazy"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <div className={Style.footerR2}>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img className={Style.icons} src={instaimgurl} alt="img" width="40px"height="40px"/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img className={Style.icons} src={fbimgurl} alt="img" width="40px"height="40px"/></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img className={Style.icons} src={linkinimgurl} alt="img" width="40px"height="40px"/></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img className={Style.icons} src={twitterimgurl} alt="img" width="40px"height="40px"/></a>
        </div>
        <div className={Style.footerR3}>
            <p>© Dracula team gym app todos los derechos reservados</p>
        </div> */}
        <div className={Style.footerR1}>
            <img className={Style.ImgLogo} src={logo} alt='img'/>
            <div className={Style.linkswrapper}>
                <Button 
                    sx={{
                        color: "white",
                    }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>GIT HUB
                </Button>
                <img className={Style.icons} src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="img" width="30px"height="30px"/>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <a href="https://github.com/JAlex2014" className={Style.menuitem}><MenuItem >Alex</MenuItem></a>
                    <a href="https://github.com/AguRey96" className={Style.menuitem}><MenuItem >Agus</MenuItem></a>
                    <a href="https://github.com/aronfraga" className={Style.menuitem}><MenuItem >Aron</MenuItem></a>
                    <a href="https://github.com/Schmitz0"className={Style.menuitem}><MenuItem >Gaston</MenuItem></a>
                    <a href="https://github.com/JoseManriqueBaena" className={Style.menuitem}><MenuItem>Jose</MenuItem></a>
                    <a href="https://github.com/ManuCasanueva" className={Style.menuitem}><MenuItem >Manu</MenuItem></a>
                    <a href="https://github.com/MartinGalara" className={Style.menuitem}><MenuItem>Martin</MenuItem></a>
                    <a href="https://github.com/pablolospe" className={Style.menuitem}><MenuItem >Pol</MenuItem></a>
                </Menu>
                <Button
                    sx={{
                        color: "white",
                    }}
                    id="basic-button"
                    aria-controls={open2 ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? 'true' : undefined}
                    onClick={handleClick2}>LINKED IN
                </Button>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <a href="https://www.linkedin.com/in/alexsandro-gomez-913b3713b/" className={Style.menuitem}><MenuItem>Alex</MenuItem></a>
                    <a href="https://www.linkedin.com/in/agustin-reynoso-5a339515a/" className={Style.menuitem}><MenuItem >Agus</MenuItem></a>
                    <a href="https://www.linkedin.com/in/aaron-fraga-4036a8244/" className={Style.menuitem}><MenuItem>Aron</MenuItem></a>
                    <a href="https://www.linkedin.com/in/gaston-schmitz-76267645/"className={Style.menuitem}><MenuItem>Gaston</MenuItem></a>
                    <a href="https://www.linkedin.com/in/jose-manrique/" className={Style.menuitem}><MenuItem>Jose</MenuItem></a>
                    <a href="https://www.linkedin.com/in/manuel-casanueva-b243a224a/" className={Style.menuitem}><MenuItem>Manu</MenuItem></a>
                    <a href="https://www.linkedin.com/in/martingalara/" className={Style.menuitem}><MenuItem>Martin</MenuItem></a>
                    <a href="https://www.linkedin.com/in/pablo-xavier-lospennato-1065b4a2/" className={Style.menuitem}><MenuItem>Pol</MenuItem></a>
                </Menu>
                <img className={Style.icons} src={linkinimgurl} alt="img" width="30px"height="30px"/>
            </div>
            <div className={Style.altgooglemapgooglemap}>
                <iframe className={Style.googlemapbox}  src={googlemapurl} 
                        width="170" 
                        height="140" 
                        loading="lazy"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        <div className={Style.altfooterR3}>
            <p>DRACULA TEAM © 2022</p>
        </div>
    </footer>
   
  )
}
export default Footer;