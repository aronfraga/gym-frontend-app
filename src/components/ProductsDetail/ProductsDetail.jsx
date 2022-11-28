import React from 'react';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import style from './ProductsDetail.module.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useNavigate } from 'react-router-dom';

const prueba = {
	id: 1,
	title: 'Articulo de prueba',
	unit_price: 100000,
	description:
		'Remera fit con la cara del futuro del Bodybuilding Manu Casanueva',
	picture_url:
		'https://http2.mlstatic.com/D_NQ_NP_613482-MLA52418021813_112022-O.webp',
	stock: 5,
	quantity: 0,
};

//!ARON, TE DEJE UN COMENTARIO IMPORTANTE MÁS ABAJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO *****************************************

export const ProductsDetail = () => {
	const [render, setRender] = useState('');
	const navigate = useNavigate();

	function handlerRender(data) {
		setRender(data);
	}

	function handlerCheckOutBuy(event) {
		event.preventDefault();
	}

	function handlerSaveInCheckOut(event) {
		event.preventDefault();
	}

	function handlerClickBack() {
		navigate(-1);
	}
	return (
		<>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.cardContainer}>
					<div className={style.goBack}>
						<IconButton
							onClick={handlerClickBack}
							sx={{
								color: 'var(--black-color)',
								'&:hover': {
									borderColor: 'var(--black-color)',
									backgroundColor: 'var(--hover-outlined-button)',
									transition: '0.4s ease-in-out',
								},
							}}
						>
							<ArrowBackIcon />
						</IconButton>
					</div>
					<div className={style.imgContainer}>
						<img src={prueba.picture_url} alt='Producto' />
					</div>
					<div className={style.infoContainer}>
						<h1>{prueba.title}</h1>
						<h2>$ {prueba.unit_price}</h2>
						<p>{prueba.description}</p>
						<div className={style.quantityContainer}>
							<h3>Cantidad:</h3>
							{/* AAAAAAAAAARON, AQUI PASAN COSAS RARAS, le meti el quantity aqui también pero lo agrega al carrito al añadir
                            cantidad de producto, como no sé cómo funciona el local store lo dejé quiero pero para que sepa :D, si lo puedes
                            arreglar me avisas su no hago otro quantity para esta parte */}
							<QuantitySelector item={prueba} render={handlerRender} />
							<h4>Disponible: {prueba.stock}</h4>
						</div>
						<div className={style.buttonContainer}>
							<Button
								onClick={handlerCheckOutBuy}
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
								onClick={handlerSaveInCheckOut}
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
								Agregar al carrito
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
