import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from '../ShoppingCartHome/ShoppingCartHome.module.css';
import { Link } from 'react-router-dom';

const ShoppingCartHome = () => {

	return (
		<div className={style.ShoppingCart}>
			<Link className={style.linkIcon} to={'/tienda/carrito'}>
				<ShoppingCartIcon />
				<span className={style.cartspan}>
					{Object.keys(localStorage).length}
				</span>
			</Link>
		</div>
	);
};

export default ShoppingCartHome;
