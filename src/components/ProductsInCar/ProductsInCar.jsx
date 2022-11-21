import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import style from './ProductsInCar.module.css';

const ProductsInCar = ({
	id,
	title,
	price,
	stock,
	category,
	description,
	imgUrl,
	render,
}) => {

	
	function hendlerDelete(event) {
		event.preventDefault();
		console.log(title)
		localStorage.removeItem(`item_${title}`);
		render(title);
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
				<div>Selector</div>
				<h3>Disponible: {stock}</h3>
			</div>

			<div className={style.priceContainer}>
				<h2>${price} ARS</h2>
			</div>

			<div className={style.closeIcon}>
				<IconButton onClick={(event) => hendlerDelete(event)} aria-label='close' size='small'>
					<CloseIcon sx={{ color: '#0d0d0d' }} fontSize='inherit' />
				</IconButton>
			</div>
		</div>
	);
};

export default ProductsInCar;
