import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import style from './CardPlan.module.css';

const primaryColor = '#18a0fb';

const CardPLan = ({ monts, price, benefits1, center }) => {
	return (
		<Card
			className={`${style.cardPlan} ${center ? style.centerCard : null}`}
			sx={{
				minWidth: '425px',
				height: 'fit-content',
				border: `1px solid ${primaryColor}`,
				borderRadius: '10px',
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
