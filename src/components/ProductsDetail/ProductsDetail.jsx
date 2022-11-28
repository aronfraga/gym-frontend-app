import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import style from './ProductsDetail.module.css';
import Loading from "../Loading/Loading";
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { useNavigate, useParams } from 'react-router-dom';
import { productToPay, seterItem } from "../../redux/actions/defaultAction";
import { useGetProductByIdQuery } from "../../redux/query/ApiEcommerce";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const ProductsDetail = () => {

	const { id } = useParams();
	const { data, isLoading } = useGetProductByIdQuery(id);
	const [ item, setItem ] = useState({})
	const [ render, setRender ] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if(!isLoading) {
			setItem({
				id: data.id,
				title: data.title,
				unit_price: data.unit_price,
				description: data.description,
				picture_url: data.imgUrl,
				stock: data.stock,
				quantity: 1,
			});
		}
	},[isLoading])

	console.log(item)

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

	function handlerRender(data) {
		setRender(data);
	}

	function handlerCheckOutBuy(event) {
		event.preventDefault();
    const checkOut = {
      items: [item],
      auto_return: "approved",
      notification_url: "https://www.success.com/",
      back_urls: {
        success: "http://127.0.0.1:5173/tienda/",
        failure: "http://www.facebook.com/",
        pending: "http://www.pending.com/",
      },
    };
    dispatch(productToPay(checkOut));
	}

	const handlerSaveInCheckOut = (event) => {
		event.preventDefault();
		if (!localStorage.getItem(`item_${data.title}`)) {
			localStorage.setItem(
				`item_${data.title}`,
				JSON.stringify({
					id: data.id,
					title: data.title,
					unit_price: data.unit_price,
					description: data.description,
					picture_url: data.imgUrl,
					stock: data.stock,
					quantity: 1,
				})
			);
			dispatch(seterItem(localStorage));
			setRender(`item_${data.title}`);
			handlerAlertSuccess();
		} else {
			handlerAlertError();
		}
	};

	function handlerClickBack() {
		navigate(-1);
	}
	
	if(isLoading) return <Loading />; 
	
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
						<img src={data.imgUrl} alt='Producto' />
					</div>
					<div className={style.infoContainer}>
						<h1>{data.title}</h1>
						<h2>$ {data.unit_price}</h2>
						<p>{data.description}</p>
						<div className={style.quantityContainer}>
							<h3>Cantidad:</h3>
							{/* AAAAAAAAAARON, AQUI PASAN COSAS RARAS, le meti el quantity aqui también pero lo agrega al carrito al añadir
                            cantidad de producto, como no sé cómo funciona el local store lo dejé quiero pero para que sepa :D, si lo puedes
                            arreglar me avisas su no hago otro quantity para esta parte */}
							<QuantitySelector item={item} render={handlerRender} />
							<h4>Disponible: {data.stock}</h4>
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
								onClick={(event) => handlerSaveInCheckOut(event)}
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

export default ProductsDetail;