import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import style from './ProductsInCar.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const ProductsInCar = ({
	id,
	title,
	price,
	stock,
	category,
	description,
	imgUrl,
}) => {
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
				<QuantitySelector stock={stock} />
				<h3>Disponible: {stock}</h3>
			</div>

			<div className={style.priceContainer}>
				<h2>${price} ARS</h2>
			</div>

			<div className={style.closeIcon}>
				<IconButton aria-label='close' size='small'>
					<CloseIcon sx={{ color: '#2d2d2d' }} fontSize='inherit' />
				</IconButton>
			</div>
		</div>
	);
};

export default ProductsInCar;
