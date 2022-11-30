import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import style from './CardPlan.module.css';
import { useDispatch } from 'react-redux';
import { planToPay } from '../../redux/actions/defaultAction';

const tertiaryColor = '#62629f';

const CardPLan = ({
	id,
	monts,
	price,
	benefits1,
	benefits2,
	benefits3,
	benefits4,
}) => {
	const dispatch = useDispatch();

	const itemCheckOut = {
		id: id,
		title: monts,
		unit_price: price,
		quantity: 1,
	};
	console.log(id)
	const handlerClickBuyPlan = () => {
		const checkOut = {
			items: [itemCheckOut],
			auto_return: 'approved',
			notification_url: 'https://www.success.com/',
			back_urls: {
				success: 'http://127.0.0.1:5173/perfil',
				failure: 'http://www.facebook.com/',
				pending: 'http://www.pending.com/',
			},
		};
		dispatch(planToPay(checkOut));
	};
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
			<CardActionArea onClick={handlerClickBuyPlan}>
				<div className={style.containerText}>
					<h2 className={style.textPrice}>
						$<font size='7'>{price}</font>/mes
					</h2>

					<div className={style.containerTextMons}>
						<h2 className={style.textMons}>{monts}</h2>
					</div>
				</div>
				<div className={style.containerBenefits}>
					<h2>{benefits1}</h2>
					<hr />
					<h2>{benefits2}</h2>
					<hr />
					<h2>{benefits3}</h2>
					<hr />
					<h2>{benefits4}</h2>
				</div>
			</CardActionArea>
		</Card>
	);
};

export default CardPLan;
