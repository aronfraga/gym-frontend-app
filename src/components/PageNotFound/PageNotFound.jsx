import React from "react";
import logo from "../../Images/gym404.jpg"
import style from '../PageNotFound/PageNotFound.module.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PageNotFound = () => {

  return (
    <div className={style.mainContainer}>
      <div className={style.mainContainerForm} >
        <img className={style.imagen} src={logo} />
        <div >

          <Link style={{ textDecoration: 'none' }} to="/" >
            <Button sx={{
              width: '250px',
              position: 'relative',
              marginTop: 5,
              bottom: 0,
              fontSize: 13.5,
              color: 'white',
              borderRadius: '6px',
              background: 'var(--primary-color)',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: '#5151519c',
                transition: '1s',
              },
            }}>
              Volver
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound;