import React, { useEffect } from 'react';
import { useState } from 'react';
import { seterItem } from '../../redux/actions/defaultAction';
import { setItem } from '../../redux/actions/defaultAction';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './QuantitySelector.module.css';

const QuantitySelector = ({ item, render }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.quantity);

	useEffect(() => {
		handlerProductUpdate(quantity);
	}, [quantity]);

	function handlerProductUpdate(quantity) {
		localStorage.setItem(
			`item_${item.title}`,
			JSON.stringify({
				id: item.id,
				title: item.title,
				unit_price: item.unit_price,
				description: item.description,
				picture_url: item.picture_url,
				stock: item.stock,
				quantity: quantity,
			})
		);
		dispatch(seterItem(localStorage));
	}

	const handlerClickMenos = () => {
		if (quantity === 1) alert('Puedes comprar a partir de 1 item');
		if (quantity > 1) {
			setQuantity(quantity - 1);
			render(`${quantity}`);
		}
	};

	const handlerClickMas = () => {
		if (quantity === item.stock) alert('No hay stock suficiente');
		if (quantity < item.stock) {
			setQuantity(quantity + 1);
			render(`${quantity}`);
		}
	};

	return (
		<div className={style.mainContainer}>
			<div>
				<IconButton
					size='small'
					onClick={handlerClickMenos}
					sx={{
						color: 'var(--primary-color)',
						'&:hover': {
							borderColor: 'var(--primary-color)',
							backgroundColor: 'var(--hover-outlined-button)',
							transition: '0.4s ease-in-out',
						},
					}}
				>
					<RemoveIcon fontSize='inherit' />
				</IconButton>
			</div>
			<h1>{quantity}</h1>
			<div>
				<IconButton
					size='small'
					onClick={handlerClickMas}
					sx={{
						color: 'var(--primary-color)',
						'&:hover': {
							borderColor: 'var(--primary-color)',
							backgroundColor: 'var(--hover-outlined-button)',
							transition: '0.4s ease-in-out',
						},
					}}
				>
					<AddIcon fontSize='inherit' />
				</IconButton>
			</div>
		</div>
	);
};

export default QuantitySelector;
