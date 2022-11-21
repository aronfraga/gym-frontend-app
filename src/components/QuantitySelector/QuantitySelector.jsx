import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './QuantitySelector.module.css';
import { useState } from 'react';

const QuantitySelector = ({ stock }) => {
	const [quantity, setQuantity] = useState(1);

	const handlerClickMenos = () => {
		if (quantity === 1) alert('Puedes comprar a partir de 1 item');
		if (quantity > 1) setQuantity(quantity - 1);
	};

	const handlerClickMas = () => {
		if (quantity === stock) alert('No hay stock suficiente');
		if (quantity < stock) setQuantity(quantity + 1);
	};

	return (
		<div className={style.mainContainer}>
			<div>
				<IconButton size='small' onClick={handlerClickMenos}>
					<RemoveIcon fontSize='inherit' sx={{ color: '#2d2d2d' }} />
				</IconButton>
			</div>
			<h1>{quantity}</h1>
			<div>
				<IconButton
					size='small'
					onClick={handlerClickMas}
					sx={{ color: '#2d2d2d' }}
				>
					<AddIcon fontSize='inherit' />
				</IconButton>
			</div>
		</div>
	);
};

export default QuantitySelector;
