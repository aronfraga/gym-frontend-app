import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from '../../redux/query/ApiEcommerce';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import NavBar from '../NavBar/NavBar';
import Products from '../Products/Products';
import style from './Shop.module.css';
import Loading from '../Loading/Loading';
import { productToPay } from '../../redux/actions/defaultAction';
import { setPurchase } from '../../redux/actions/defaultAction';
import { seterItem } from '../../redux/actions/defaultAction';
import { useDispatch, useSelector } from 'react-redux';
import { Productos, Price } from './DatosFilter';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import style2 from './Filters.module.css';

const Shop = () => {
	const dispatch = useDispatch();
	const { itemCheckOut } = useSelector((state) => state.itemCheckOut);
	const [renderShop, setRenderShop] = useState('');

	const urlChanged = window.location.search;
	const urlParams = new URLSearchParams(urlChanged);
	const purchaseStatus = {
		payed: urlParams.get('status'),
		paymentMethod: urlParams.get('payment_type'),
		purchaseId: urlParams.get('preference_id'),
	};

	useEffect(() => {
		if (purchaseStatus.payed === 'approved') {
			dispatch(setPurchase(purchaseStatus));
			handlerClearCheckOut();
		}
	}, []);

	function handerRenderShop(data) {
		setRenderShop(data);
	}

	function handlerClearCheckOut() {
		for (var i = 0; i < itemCheckOut.length; i++) {
			localStorage.removeItem(`item_${itemCheckOut[i].title}`);
		}
		dispatch(seterItem(localStorage));
	}

	function handlerDirectBuy(event, data) {
		event.preventDefault();
		const checkOut = {
			items: [data[0]],
			auto_return: 'approved',
			notification_url: 'https://www.success.com/',
			back_urls: {
				success: 'http://127.0.0.1:5173/tienda/',
				failure: 'http://www.facebook.com/',
				pending: 'http://www.pending.com/',
			},
		};
		dispatch(productToPay(checkOut));
	}

	/* ACA EMPIEZAN LOS FILTROS, SORRY POR EL LIO*/

	// const { routinesFilters, setRoutinesFilters } = useFilter();

	const [input, setInput] = useState({
		category: '',
		min: 0,
		max: 0,
		letra: '',
	});

	const handlerCheck = (event) => {
		let value = event.target.value;
		let name = event.target.name;
		name === 'category' && setInput({ ...input, [name]: value });
		if (name === 'price') {
			value === 'a' && setInput({ ...input, max: 1000, letra: 'a' });
			value === 'b' && setInput({ ...input, min: 1000, max: 1500, letra: 'b' });
			value === 'c' && setInput({ ...input, min: 1500, max: 2000, letra: 'c' });
			value === 'd' && setInput({ ...input, min: 2000, max: 3000, letra: 'd' });
			value === 'e' && setInput({ ...input, min: 3000, letra: 'e' });
		}
	};

	const aux = {};

	for (const a in input) {
		if (input[a].length > 0 || input[a] > 0) aux[a] = input[a];
	}

	const { data, isLoading } = useGetAllProductsQuery(aux);

	if (isLoading) return <Loading />;

	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				{/* <ContainerFilters filters={allFilters} /> */}
				{/* FILTROS */}
				<div className={style2.allContainer}>
					{/* FILTRO DE PRODUCTOS*/}
					<div className={style2.mainContainer}>
						<div className={style2.titleContainer}>
							<h3>{Productos.title}</h3>
						</div>
						<div className={style2.checksContainer}>
							<RadioGroup>
								{Productos.value.map((checkboxes, i) => (
									<FormControlLabel
										key={i}
										control={
											<Radio
												sx={{
													padding: '6px',
													color: '#0d0d6b',
													'&.Mui-checked': {
														color: '#0d0d6b',
													},
												}}
												value={checkboxes}
												onChange={handlerCheck}
											/>
										}
										checked={input.category === checkboxes}
										label={checkboxes}
										name={Productos.name}
										sx={{
											marginRight: '0px',
											marginLeft: '-10px',
											color: '#2d2d2d',
										}}
									/>
								))}
							</RadioGroup>
						</div>
					</div>
					{/* FILTRO DE PRECIO*/}
					<div className={style2.mainContainer}>
						<div className={style2.titleContainer}>
							<h3>{Price.title}</h3>
						</div>
						<div className={style2.checksContainer}>
							<RadioGroup>
								{Price.value.map((checkboxes, i) => (
									<FormControlLabel
										key={i}
										control={
											<Radio
												sx={{
													padding: '6px',
													color: '#0d0d6b',
													'&.Mui-checked': {
														color: '#0d0d6b',
													},
												}}
												value={checkboxes}
												onChange={handlerCheck}
											/>
										}
										checked={input.letra === checkboxes}
										label={Price.label[i]}
										name={Price.name}
										sx={{
											marginRight: '0px',
											marginLeft: '-10px',
											color: '#2d2d2d',
										}}
									/>
								))}
							</RadioGroup>
						</div>
					</div>
					<Button
						variant='contained'
						onClick={() =>
							setInput({
								category: '',
								min: 0,
								max: 0,
								letra: '',
							})
						}
						sx={{
							background: '#0d0d6b',
							'&:hover': {
								backgroundColor: '#62629f',
								transition: '0.4s',
							},
						}}
					>
						Limpiar Filtros
					</Button>
				</div>
				<div className={style.cardsContainer}>
					<HeaderBtn title={'Tienda virtual'} />
					<Products products={data} render={handerRenderShop} />
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<button onClick={(event) => handlerDirectBuy(event, data)}>
				Compra Directa
			</button>
		</div>
	);
};

export default Shop;
