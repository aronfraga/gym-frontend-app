import React from 'react';
import CardPLan from '../CardPlan/CardPlan';
import { useGetAllMembresiesQuery } from '../../redux/query/ApiEcommerce';
import Loading from '../Loading/Loading';
import style from './Planes.module.css';

export default function Planes() {
	const { data: planes, isLoading } = useGetAllMembresiesQuery();

	if (isLoading) return <Loading />;
	return (
		// <section className={style.sectionMain}>
		<div className={style.mainContainer}>
			<div className={style.titleContainer}>
				<h1 className={style.title}>Elige tu plan y empieza ya!</h1>
			</div>
			<div className={style.cardContainer}>
				<CardPLan
					id={planes[1].id}
					days={planes[1].daysToAdd}
					monts={planes[1]?.name}
					price={planes[1]?.totalCost}
					benefits1={`Con este plan te ahorras ${planes[1]?.saving} pesos`}
					benefits2={`Acceso a todas nuestras instalaciones`}
					benefits3={`Atención personalizada de nuestro staff`}
					benefits4={`Invita a ${3} amigos al mes para entrenar`}
				/>
				<CardPLan
					id={planes[2].id}
					days={planes[2].daysToAdd}
					monts={planes[2]?.name}
					price={planes[2]?.totalCost}
					benefits1={`Con este plan te ahorras ${planes[2]?.saving} pesos`}
					benefits2={`Acceso a todas nuestras instalaciones`}
					benefits3={`Atención personalizada de nuestro staff`}
					benefits4={`Invita a ${4} amigos al mes para entrenar`}
				/>
				<CardPLan
					id={planes[3].id}
					days={planes[3].daysToAdd}
					monts={planes[3]?.name}
					price={planes[3]?.totalCost}
					benefits1={`Con este plan te ahorras ${planes[3]?.saving} pesos`}
					benefits2={`Acceso a todas nuestras instalaciones`}
					benefits3={`Atención personalizada de nuestro staff`}
					benefits4={`Invita a ${5} amigos al mes para entrenar`}
				/>
			</div>
		</div>
		// </section>
	);
}
