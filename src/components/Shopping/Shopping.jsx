import React, { useEffect, useState } from 'react';
import { productToPay } from "../../redux/actions/defaultAction";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import ProductsInCar from '../ProductsInCar/ProductsInCar';
import style from './Shopping.module.css';

const Shopping = () => {

	let total = 0;
	const [ item, setItem ] = useState([]);
	const [ render, setRender ] = useState('');

	useEffect(() => {
		let items = [];
		let keys = Object.keys(localStorage);
		let index = keys.length;
		while (index--) {
			items.push(JSON.parse(localStorage.getItem(keys[index])));
		}
		setItem(items);
	},[render])

	function handlerRender(data) {
		setRender(data);
	}

	function handlerCheckOutBuy(event) {
    event.preventDefault();
    const checkOut = {
      // array no puede ser vacio, reveer notification, pagina thankyou
      items: "items",
      auto_return: "approved",
      notification_url: "https://www.success.com/",
      back_urls: {
        success: "http://127.0.0.1:5173/approve",
        failure: "http://www.facebook.com/",
        pending: "http://www.pending.com/",
      },
    };
    dispatch(productToPay(checkOut));
  }

	
	for (var i = 0; i < item.length; i++) {
		total = total + item[i].unit_price
	}

	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.shopCartContainer}>
					<div className={style.cardsContainer}>
						{/* map productos en carrito */}
						{item?.map((product) => (
							<ProductsInCar
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.unit_price}
								stock={product.quantity}
								category={product.category}
								description={product.description}
								imgUrl={product.picture_url}
								render={handlerRender}
							/>
						))}
					</div>
					<div className={style.infoContainer}>
						<h1>Carrito de compras</h1>
						<div className={style.priceContainer}>
							{/* map precios */}
							{item?.map((product, i) => (
								<h2 key={i}>$ {product.unit_price} ARS</h2>
								))}
							<hr />
							<h1 className={style.total}>Total: $ {total}</h1>
						</div>
						<div className={style.buttonContainer}>
							<Button variant='contained'>Comprar</Button>
							{/* <Button variant='outlined'>Vaciar carrito</Button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shopping;
