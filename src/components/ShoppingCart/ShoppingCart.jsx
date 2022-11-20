import React from "react";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from '../ShoppingCart/ShoppingCart.module.css'
import { Link } from "react-router-dom";

const ShoppingCart = () => {

    const { cart_count } = useSelector(state => state.cart_count);

    return (
        <div className={style.ShoppingCart}>
            <Link style={{ color: "black" }}>
                <ShoppingCartIcon />
                <span className={style.cartspan}>{cart_count}</span>
            </Link>
        </div>
    );
};

export default ShoppingCart;