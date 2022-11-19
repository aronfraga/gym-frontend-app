import React from 'react';
import { useGetAllProductsQuery } from '../../redux/query/ApiEcommerce';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';
import style from './Shop.module.css';
import Loading from '../Loading/Loading';
import { productToPay } from "../../redux/actions/defaultAction";
import { useDispatch } from 'react-redux';

const allFilters = [
	{
		title: 'Productos',
		filters: ['Suplementos', 'Entrenamiento', 'Accesorios', 'Prendas'],
	},
	{
		title: 'Precio',
		filters: [
			'menos de 50.00',
			'50.00 - 100.00',
			'100.00 - 200.00',
			'Más de 200.00',
		],
	},
];

const Shop = () => {
	const dispatch = useDispatch();
	const { data, isLoading } = useGetAllProductsQuery();

	function handlerCheckOutBuy(event) {
		event.preventDefault();
		let items = [];
		let keys = Object.keys(localStorage);
		let index = keys.length;
		while (index--) {
			items.push(JSON.parse(localStorage.getItem(keys[index])));
		}
		const checkOut = { // array no puede ser vacio, reveer notification, pagina thankyou
			items: items,
			auto_return: "approved",
			notification_url: "https://www.success.com/",
			back_urls: {
				success: "http://127.0.0.1:5173/approve",
				failure: "http://www.facebook.com/",
				pending: "http://www.pending.com/"
			}
		}
		dispatch(productToPay(checkOut))
	}

	function handlerDirectBuy(event, data) {
		event.preventDefault();
		const checkOut = {
			items: [data[0]],
			auto_return: "approved",
			notification_url: "https://www.success.com/",
			back_urls: {
				success: "http://127.0.0.1:5173/approve",
				failure: "http://www.facebook.com/",
				pending: "http://www.pending.com/"
			}
		}
		dispatch(productToPay(checkOut))
	}

	if (isLoading) return <Loading />

	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<ContainerFilters filters={allFilters} />
				<div className={style.cardsContainer}>
					<HeaderBtn title={'Tienda virtual'} />
					<Products products={data} />
					<h1>Hola</h1>
				</div>
			</div>
			<button onClick={(event) => handlerCheckOutBuy(event)}>Carrito</button>
			<button onClick={(event) => handlerDirectBuy(event, data)}>Compra Directa</button>
		</div>
	);
};

export default Shop;
