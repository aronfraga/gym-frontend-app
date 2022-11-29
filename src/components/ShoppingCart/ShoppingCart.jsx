import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from '../ShoppingCart/ShoppingCart.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
	const { itemCheckOut } = useSelector((state) => state.itemCheckOut);
	return (
		<div className={style.ShoppingCart}>
			<Link className={style.linkIcon} to={'/tienda/carrito'}>
				<ShoppingCartIcon />
				<span className={style.cartspan}>
					{itemCheckOut.length}
				</span>
			</Link>
		</div>
	);
};

export default ShoppingCart;
