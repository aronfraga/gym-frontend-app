import React from 'react';
import Grid from '@mui/material/Grid';
import CardPLan from '../CardPlan/CardPlan';
import style from './Planes.module.css';
import { Box } from '@mui/system';

export default function Planes() {
	return (
		<div className={style.mainContainer}>
			<div className={style.titleContainer}>
				<h1 className={style.title}>Elige tu plan y empieza ya!</h1>
			</div>
			<div className={style.cardContainer}>
				<CardPLan monts={'3'} price={'70'} benefits1={'Lo que sea'} />

				<CardPLan
					monts={'12'}
					price={'50'}
					benefits1={'Lo que sea'}
					center={true}
				/>

				<CardPLan monts={'6'} price={'60'} benefits1={'Lo que sea'} />
			</div>
		</div>
	);
}
