import React, { useEffect, useState } from 'react';
import { productToPay } from '../../redux/actions/defaultAction';
import { seterItem } from '../../redux/actions/defaultAction';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import ProductsInCar from '../ProductsInCar/ProductsInCar';
import style from './Shopping.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shopping = () => {
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

	let total = 0;
	const dispatch = useDispatch();
	const [render, setRender] = useState('');
	const { itemCheckOut } = useSelector((state) => state.itemCheckOut);

	useEffect(() => {
		dispatch(seterItem(localStorage));
	}, [render]);

	function handlerRender(data) {
		setRender(data);
	}

	function handlerCheckOutBuy(event) {
		event.preventDefault();
		const checkOut = {
			items: itemCheckOut,
			auto_return: 'approved',
			notification_url: 'https://www.success.com/',
			back_urls: {
				success: 'http://127.0.0.1:5173/tienda',
				failure: 'http://www.facebook.com/',
				pending: 'http://www.pending.com/',
			},
		};
		dispatch(productToPay(checkOut));
	}

	function setTotal() {
		for (var i = 0; i < itemCheckOut.length; i++) {
			total = total + itemCheckOut[i].unit_price * itemCheckOut[i].quantity;
		}
		return total;
	}

	function handlerClearCheckOut(event) {
		event.preventDefault();
		for (var i = 0; i < itemCheckOut.length; i++) {
			localStorage.removeItem(`item_${itemCheckOut[i].title}`);
		}
		dispatch(seterItem(localStorage));
	}

	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.shopCartContainer}>
					<div className={style.cardsContainer}>
						{/* map productos en carrito */}
						{itemCheckOut?.map((product) => (
							<ProductsInCar
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.unit_price}
								quantity={product.quantity}
								stock={product.stock}
								category={product.category}
								description={product.description}
								imgUrl={product.picture_url}
								render={handlerRender}
								handlerAlertStock0={handlerAlertStock0}
								handlerAlertStockFull={handlerAlertStockFull}
							/>
						))}
					</div>
					<div className={style.infoContainer}>
						<h1>Carrito de compras</h1>
						<div className={style.priceContainer}>
							{/* map precios */}
							{itemCheckOut?.map((product, i) => (
								<h2 key={i}>$ {product.unit_price * product.quantity} ARS</h2>
							))}
							<hr />
							<h1 className={style.total}>Total: ${setTotal()}</h1>
						</div>
						<div className={style.buttonContainer}>
							<Button
								onClick={(event) => handlerCheckOutBuy(event)}
								variant='contained'
								sx={{
									background: 'var(--primary-color)',
									'&:hover': {
										backgroundColor: 'var(--secondary-color)',
										transition: '0.4s',
									},
								}}
							>
								Comprar
							</Button>
							<Button
								onClick={(event) => handlerClearCheckOut(event)}
								variant='outlined'
								sx={{
									color: 'var(--primary-color)',
									borderColor: 'var(--primary-color)',
									'&:hover': {
										borderColor: 'var(--primary-color)',
										backgroundColor: 'var(--hover-outlined-button)',
										transition: '0.4s',
									},
								}}
							>
								Vaciar carrito
							</Button>
						</div>
					</div>
				</div>
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

export default Shopping;
