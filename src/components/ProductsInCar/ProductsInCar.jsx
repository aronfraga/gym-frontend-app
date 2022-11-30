import React from 'react';
import { seterItem } from '../../redux/actions/defaultAction';
import { useDispatch } from "react-redux";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import style from './ProductsInCar.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const ProductsInCar = ({
	id,
	title,
	price,
	stock,
	quantity,
	category,
	description,
	imgUrl,
	render,
	handlerAlertStock0,
	handlerAlertStockFull,
}) => {
	
	const dispatch = useDispatch();

	const item = {
		id: id,
		title: title,
		unit_price: price,
		description: description,
		picture_url: imgUrl,
		stock: stock,
		quantity: quantity,
	};

	function hendlerDelete(event) {
		event.preventDefault();
		localStorage.removeItem(`item_${title}`);
		dispatch(seterItem(localStorage));
		render(`item_${title}`);
	} 

	return (
		<div className={style.mainContainer}>
			<div className={style.imgContainer}>
				<img src={imgUrl} alt={title} />
			</div>
			<div className={style.infoContainer}>
				<h1>{title}</h1>
				<h3>{category}</h3>
			</div>

			<div className={style.quantitySelectorContainer}>
				<QuantitySelector
					item={item}
					render={render}
					handlerAlertStock0={handlerAlertStock0}
					handlerAlertStockFull={handlerAlertStockFull}
				/>
				<h3>Disponible: {stock}</h3>
			</div>

			<div className={style.priceContainer}>
				<h2>${price * quantity}</h2>
			</div>

			<div className={style.closeIcon}>
				<IconButton
					onClick={(event) => hendlerDelete(event)}
					aria-label='close'
					size='small'
				>
					<CloseIcon sx={{ color: '#0d0d0d' }} fontSize='inherit' />
				</IconButton>
			</div>
		</div>
	);
};

export default ProductsInCar;
