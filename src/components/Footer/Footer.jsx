import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className={Style.footer}>
        <div className={Style.footerR1}>
            <div className={Style.logo}>
                <h1>GymApp Logo</h1>
            </div>
            <div className={Style.containerfooterLinks}>
                <Link className={Style.Links} to="/home">Inicio</Link>
                <Link className={Style.Links} to="/home/tiendavirtual">Tienda Virtual</Link>
                <Link className={Style.Links} to="/home/rutinas">Rutinas</Link>
                <Link className={Style.Links} to="/home/gym">Gym</Link>
                <Link className={Style.Links} to="/home/seguimiento">Seguimiento</Link>
                <Link className={Style.Links} to="/home/feedback">Feedback</Link>
                <Link className={Style.Links} to="/home/perfil">Perfil</Link>
                <Link className={Style.Links} to="/home/membresia">Tu plan</Link>
                <Link className={Style.Links} to="/home/membresia"></Link>
            </div>
            <div className={Style.googlemap}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3390043490963!2d-77.00809568459287!3d-12.08892874597916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7209cec11cf%3A0xb104066d15b57333!2sSmart%20Fit%20San%20Borja!5e0!3m2!1ses!2spe!4v1667945412764!5m2!1ses!2spe" 
                        width="220" 
                        height="210" 
                        loading="lazy"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        referrerPolicy="no-referrer-when-downgrade" >
                </iframe>
            </div>
        </div>
        <div className={Style.footerR2}>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><TwitterIcon/></a>
        </div>
        <div className={Style.footerR3}>
            <p>© Dracula team gym app todos los derechos reservados</p>
        </div>
    </footer>
  )
}
export default Footer;