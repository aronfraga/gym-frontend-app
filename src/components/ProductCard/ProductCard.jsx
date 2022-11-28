import React from 'react';
import { seterItem } from '../../redux/actions/defaultAction';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const ProductCard = ({
	id,
	title,
	unit_price,
	description,
	picture_url,
	stock,
	quantity,
	render,
	handlerAlertSuccess,
	handlerAlertError,
}) => {
	const [expanded, setExpanded] = useState(false);
	const dispatch = useDispatch();
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handlerSaveInCheckOut = (event) => {
		event.preventDefault();
		if (!localStorage.getItem(`item_${title}`)) {
			localStorage.setItem(
				`item_${title}`,
				JSON.stringify({
					id: id,
					title: title,
					unit_price: unit_price,
					description: description,
					picture_url: picture_url,
					stock: stock,
					quantity: quantity,
				})
			);
			dispatch(seterItem(localStorage));
			render(`item_${title}`);
			handlerAlertSuccess();
		} else {
			handlerAlertError();
		}
	};

	return (
		<Card
			className={style.cardProduct}
			sx={{
				width: 250,
				height: 'fit-content',
				position: 'relative',
				transition: 'all 0.2s ease-out',
			}}
		>
			<CardActionArea>
				<Link to={`/tienda/producto/${id}`}>
					<CardMedia
						component='img'
						image={picture_url}
						alt='Paella dish'
						sx={{ maxHeight: '200px', margin: '0px auto', width: 'auto' }}
					/>

					<hr className={style.line} />
				</Link>
			</CardActionArea>
			<div className={style.priceContainer}>
				<h1>{unit_price}</h1>
				<CardActions sx={{ padding: '0px' }}>
					<Button
						onClick={(event) => handlerSaveInCheckOut(event)}
						variant='outlined'
						startIcon={<ShoppingCartIcon />}
						sx={{
							padding: '5px 10px',
							fontSize: '0.7rem',
							'& .css-1d6wzja-MuiButton-startIcon': {
								marginRight: '6px',
								marginLeft: '0px',
							},
							'& .css-4tfxnd-MuiSvgIcon-root': {
								fontSize: '18px',
							},
							color: 'var(--primary-color)',
							borderColor: 'var(--primary-color)',
							'&:hover': {
								borderColor: 'var(--primary-color)',
								backgroundColor: 'var(--hover-outlined-button)',
								transition: '0.4s',
							},
						}}
					>
						Agregar
					</Button>
				</CardActions>
			</div>
			<div className={style.nameContainer}>
				<h2>{title}</h2>
				<CardActions sx={{ padding: '0px' }}>
					<ExpandMore
						sx={{
							'&:hover': {
								borderColor: 'var(--primary-color)',
								backgroundColor: 'var(--hover-outlined-button)',
								transition: '0.4s ease-in-out',
							},
						}}
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon
							sx={{
								color: 'var(--primary-color)',
							}}
						/>
					</ExpandMore>
				</CardActions>
			</div>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<Typography
					paragraph
					sx={{ padding: '0px 12px 12px', marginBottom: '0px' }}
				>
					{description}
				</Typography>
			</Collapse>
		</Card>
	);
};

export default ProductCard;
