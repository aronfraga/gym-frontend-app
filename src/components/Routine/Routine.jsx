import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import style from './Routine.module.css';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';

const Routine = ({ duration, name, difficulty }) => {
	const [favorite, setFavorite] = useState(false);
	const handlerFavorite = (event) => {
		favorite ? setFavorite(false) : setFavorite(true);
		console.log(favorite, 'favorite');
	};

	const handlerCardAction = (event) => {
		console.log(event.target, 'Card');
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<div className={style.titleContainer}>
					<h1>{name}</h1>
					<h2>Grupo muscular o musculo</h2>
				</div>
				<CardMedia
					onClick={handlerCardAction}
					component='img'
					height='200'
					width='auto'
					image='https://wrmx00.epimg.net/radio/imagenes/2017/08/22/sociedad/1503421462_805587_1503430567_noticia_normal.jpg'
					alt='Rutine'
				/>
				<div className={style.timeContainer}>
					<h2>{duration}</h2>
					<div className={style.iconsContainer}>
						<div className={style.bolitasContainer}>
							<div
								className={`${style.bolitas} ${
									difficulty >= 1 ? style.bolitasActive : style.bolitasDesactive
								}`}
							></div>
							<div
								className={`${style.bolitas} ${
									difficulty >= 2 ? style.bolitasActive : style.bolitasDesactive
								}`}
							></div>
							<div
								className={`${style.bolitas} ${
									difficulty >= 3 ? style.bolitasActive : style.bolitasDesactive
								}`}
							></div>
							<div
								className={`${style.bolitas} ${
									difficulty >= 4 ? style.bolitasActive : style.bolitasDesactive
								}`}
							></div>
							<div
								className={`${style.bolitas} ${
									difficulty >= 5 ? style.bolitasActive : style.bolitasDesactive
								}`}
							></div>
						</div>
						<IconButton
							aria-label='star'
							onClick={handlerFavorite}
							sx={{ color: '#f0f0f0', padding: '0px', 'margin-right': '6px' }}
						>
							{favorite ? <StarIcon /> : <StarBorderIcon />}
						</IconButton>
					</div>
				</div>
			</CardActionArea>
		</Card>
	);
};

export default Routine;