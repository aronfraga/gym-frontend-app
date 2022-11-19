import React from 'react';
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import BtnFilter from '../BtnFilter/BtnFilter';
import style from './HeaderBtn.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderBtn = ({ title }) => {

	const {cart_count} = useSelector(state => state.cart_count);

	return (
		<div className={style.mainContainer}>
			<div className={style.infoContainer}>
				<h1 className={style.title}>{title}</h1>
				{/* <BtnFilter/> */}
				<div className={style.ShoppingCart}>
					<Link style={{color:"black"}}>
                        <ShoppingCartIcon/>
                        <span className={style.cartspan}>{cart_count}</span>
					</Link>
                </div>
			</div>
			<hr />
		</div>
	);
};

export default HeaderBtn;
