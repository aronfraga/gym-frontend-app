import React, { useEffect } from 'react';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import { useGetAllProductsQuery } from '../../redux/query/ApiEcommerce';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import style from './PrevShop.module.css';
import ShoppingCartHome from '../ShoppingCartHome/ShoppingCartHome';

export const PrevShop = () => {

	const { data, isLoading } = useGetAllProductsQuery({
		data: {},
		page: 0,
		size: 10,
	});
	const [renderShop, setRenderShop] = useState('');

	function handerRenderShop(data) {
		setRenderShop(data);
	}

	const handlerAlertSuccess = () => {
		toast.success('¡Producto agregado al carrito!', {
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

	const handlerAlertError = () => {
		toast.error('El producto no se pudo agregar porque ya está en el carrito', {
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

	if (isLoading) return <Loading />;

	return (
		<>
			<div className={style.mainContainer}>
				<div className={style.titleContainer}>
					<h1 className={style.title}>Tienda virtual</h1>
					<ShoppingCartHome />
				</div>
				<div className={style.cardContainer}>
					{data.products?.map((product, i) => (
						<ProductCard
							key={i}
							id={product.id}
							title={product.title}
							unit_price={product.unit_price}
							description={product.description}
							picture_url={product.imgUrl}
							stock={product.stock}
							quantity={1}
							render={handerRenderShop}
							handlerAlertSuccess={handlerAlertSuccess}
							handlerAlertError={handlerAlertError}
						/>
					))}
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
		</>
	);
};
