import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import style from './CardPlan.module.css';

const tertiaryColor = '#62629f';

const CardPLan = ({ monts, price, benefits1 }) => {
	return (
		<Card
			className={style.cardPlan}
			sx={{
				width: '100%',
				maxWidth: '400px',
				height: 'fit-content',
				border: `1px solid ${tertiaryColor}`,
				borderRadius: '10px',
				backgroundColor: 'white',
				transition: 'all 0.2s ease-out',
			}}
		>
			<CardActionArea>
				<div className={style.containerText}>
					<h2 className={style.textPrice}>
						$<font size='7'>{price}</font>/mes
					</h2>

					<div className={style.containerTextMons}>
						<h2 className={style.textMons}>Plan de {monts} meses</h2>
					</div>
				</div>
				<div className={style.containerBenefits}>
					<h2>{benefits1}</h2>
					<hr />
					<h2>Beneficios por el plan</h2>
					<hr />
					<h2>Beneficios por el plan</h2>
					<hr />
					<h2>Beneficios por el plan</h2>
					<hr />
					<h2>Beneficios por el plan</h2>
				</div>
			</CardActionArea>
		</Card>
	);
};

export default CardPLan;
