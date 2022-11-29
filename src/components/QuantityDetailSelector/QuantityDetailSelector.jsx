import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import style from './QuantityDetailSelector.module.css';
import { ToastContainer, toast } from 'react-toastify';

const QuantityDetailSelector = ({ stock, quantity, setQuantity , render }) => {

	const handlerAlertStock0 = () => {
		toast.error('Puedes comprar a partir de 1 item', {
			position: 'bottom-left',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const handlerAlertStockFull = () => {
		toast.error('No hay stock suficiente', {
			position: 'bottom-left',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const handlerClickMenos = () => {
		if (quantity === 1) handlerAlertStock0();
		if (quantity > 1) {
			setQuantity(quantity - 1);
			render(`${quantity}`);
		}
	};

	const handlerClickMas = () => {
		if (quantity === stock) handlerAlertStockFull();
		if (quantity < stock) {
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
			<ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='colored'
			/>
		</div>
	);
};

export default QuantityDetailSelector;
