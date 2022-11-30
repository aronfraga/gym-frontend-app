import React from 'react';
import BtnFilter from '../BtnFilter/BtnFilter';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import style from './HeaderBtn.module.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { getToken } from "../../services/cookies";

const HeaderBtn = ({ title }) => {
	const role = getToken().userRole;
	return (
		<div className={style.mainContainer}>
			<div className={style.infoContainer}>
				<h1 className={style.title}>{title}</h1>
				<Link to="/admdashboard/products" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={
                      role === "Admin" || role === "Staff"
                        ? {
                            background: "#0d0d6b",
                            "&:hover": {
                              backgroundColor: "#62629f",
                              transition: "0.4s",
                            },
                          }
                        : { display: "none" }
                    }
                  >
                    Crear Producto
                  </Button>
                </Link>
				<ShoppingCart />
			</div>
			<hr />
		</div>
	);
};

export default HeaderBtn;
