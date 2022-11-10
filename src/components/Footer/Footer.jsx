import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";
import {googlemapurl,instaimgurl,fbimgurl,linkinimgurl,twitterimgurl} from "./Helpers";

const Footer = () => {
  return (
    <footer className={Style.footer}>
        <div className={Style.footerR1}>
            <div className={Style.logo}>
                <h1>GymApp Logo</h1>
            </div>
            <div className={Style.containerfooterLinks}>
                <Link className={Style.Links} to="/home">Inicio</Link>
                <Link className={Style.Links} to="/tiendavirtual">Tienda Virtual</Link>
                <Link className={Style.Links} to="/rutinas">Rutinas</Link>
                <Link className={Style.Links} to="/gym">Gym</Link>
                <Link className={Style.Links} to="/seguimiento">Seguimiento</Link>
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
        </div>
    </footer>
  )
}
export default Footer;