import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import style from './PrevRoutine.module.css';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PrevRoutine = ({ duration, name, difficulty, img, category, id }) => {
	const handlerCardAction = (event) => {};

	return (
		<Card
			sx={{
				maxWidth: 'fit-content',
				position: 'relative',
				'&:focus-visible': {
					backgroundColor: 'black',
				},
			}}
		>
			<CardActionArea onClick={handlerCardAction}>
				<Link to={`/rutinas/${id}`}>
					<div className={style.titleContainer}>
						<h1>{name}</h1>
						<h2>{category.name}</h2>
					</div>
					<CardMedia component='img' height='300' width='200' image={img} />

					<div className={style.timeContainer}>
						<div>
							<h2>{duration}</h2>
							<div className={style.iconsContainer}>
								<div className={style.bolitasContainer}>
									<div
										className={`${style.bolitas} ${
											difficulty >= 1
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											difficulty >= 2
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											difficulty >= 3
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											difficulty >= 4
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											difficulty >= 5
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</CardActionArea>
			{/* <div className={style.iconFavorite}>
				<IconButton
					size='large'
					aria-label='star'
					onClick={handlerFavorite}
					sx={{ color: '#f0f0f0', padding: '0px' }}
				>
					{favorite ? (
						<StarIcon sx={{ fontSize: '2.2rem' }} />
					) : (
						<StarBorderIcon sx={{ fontSize: '2.2rem' }} />
					)}
				</IconButton>
			</div> */}
		</Card>
	);
};

export default PrevRoutine;
