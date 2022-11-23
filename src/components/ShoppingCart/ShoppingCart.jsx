import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from '../ShoppingCart/ShoppingCart.module.css'
import { Link } from "react-router-dom";

const ShoppingCart = () => {

    return (
        <div className={style.ShoppingCart}>
            <Link to={'/tienda/carrito'} style={{ color: "#017FFE" }}>
                <ShoppingCartIcon />
                <span className={style.cartspan}>{Object.keys(localStorage).length}</span>
            </Link>
        </div>
    );
};

export default ShoppingCart;