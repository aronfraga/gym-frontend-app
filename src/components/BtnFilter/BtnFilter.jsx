import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import style from './BtnFilter.module.css';
import { useState } from 'react';

const BtnFilter = () => {
	const [favorite, setFavorite] = useState(false);

	const handlerClick = (event) => {
		if (favorite) {
			setFavorite(false);
		} else {
			setFavorite(true);
			console.log('tratando de filtrar favoritos');
		}
	};

	return (
		<div className={style.mainContainer}>
			<Button
				variant='contained'
				sx={{
					padding: '8px 16px',
					'& .css-1d6wzja-MuiButton-startIcon': {
						margin: '0px',
					},
				}}
				onClick={handlerClick}
				startIcon={favorite ? <StarIcon /> : <StarBorderIcon />}
			/>
			<ButtonGroup
				variant='contained'
				aria-label='outlined primary button group'
			>
				<Button>Todas las rutinas</Button>
				<Button>Mis Rutinas</Button>
				<Button>Las que no tengo</Button>
			</ButtonGroup>

			<Button variant='contained'>Crear rutina</Button>
		</div>
	);
};

export default BtnFilter;
