import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import style from './ProductCard.module.css';

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

const ProductCard = () => {
	const [expanded, setExpanded] = useState(false);
	const [favorite, setFavorite] = useState(false);

	const handlerFavorite = (event) => {
		favorite ? setFavorite(false) : setFavorite(true);
		console.log(favorite, 'favorite');
	};

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card
			className={style.cardProduct}
			sx={{
				// maxWidth: 250,
				width: 250,
				position: 'relative',
				transition: 'all 0.2s ease-out',
			}}
		>
			<CardMedia
				component='img'
				image='https://copservir.vtexassets.com/arquivos/ids/760267-1200-auto?v=637928621257630000&width=1200&height=auto&aspect=true'
				alt='Paella dish'
				sx={{ maxHeight: '200px', margin: '0px auto', width: 'auto' }}
			/>
			<hr className={style.line} />
			<div className={style.priceContainer}>
				<h1>$500.000</h1>
				<CardActions sx={{ padding: '0px' }}>
					<Button
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
						}}
					>
						Agregar
					</Button>
				</CardActions>
			</div>
			<div className={style.nameContainer}>
				<h2>Nombre del producto</h2>
				<CardActions sx={{ padding: '0px' }}>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
			</div>
			<div className={style.iconFavorite}>
				<IconButton
					size='large'
					aria-label='star'
					onClick={handlerFavorite}
					sx={{ color: '#18a0fb', padding: '0px' }}
				>
					{favorite ? (
						<StarIcon sx={{ fontSize: '1.8rem' }} />
					) : (
						<StarBorderIcon sx={{ fontSize: '1.8rem' }} />
					)}
				</IconButton>
			</div>

			<Collapse in={expanded} timeout='auto' unmountOnExit sx={{}}>
				<Typography
					paragraph
					sx={{ padding: '0px 12px 12px', marginBottom: '0px' }}
				>
					Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
					over medium-high heat. Add chicken, shrimp and chorizo, and cook,
					stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
					shrimp to a large plate and set aside, leaving chicken and chorizo in
					the pan.
				</Typography>
			</Collapse>
		</Card>
	);
};

export default ProductCard;
