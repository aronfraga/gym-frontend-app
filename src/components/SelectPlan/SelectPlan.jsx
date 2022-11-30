import React from 'react';
import NavBar from '../NavBar/NavBar';
import {
	useGetUserProfileQuery,
	useGetAllMembresiesQuery,
} from '../../redux/query/ApiEcommerce';
import style from './SelectPlan.module.css';
import Loading from '../Loading/Loading';
import CardPLan from '../CardPlan/CardPlan';

const SelectPlan = () => {
	const { data: profile, isLoading: isLoadingProfile } =
		useGetUserProfileQuery();
	const { data: planes, isLoading } = useGetAllMembresiesQuery();
	const fecha = new Date(profile?.membresyExpDate); // Formato de fecha iso 8601

	if (isLoading || isLoadingProfile) return <Loading />;
	return (
		<>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.titleContainer}>
					<h1>¡Elige tu plan y empieza a entrenar ya!</h1>
					{/* <hr /> */}
					{profile?.expiredMembresy ? (
						<h2>
							¡Hola {profile?.name}! tu membresía está vencida, puedes renovarla
							ahora mismo seleccionando cualquiera de nuestros planes
						</h2>
					) : (
						<h2>
							¡Hola {profile?.name}! tu membresía está vigente hasta el{' '}
							{fecha.toLocaleDateString()}
						</h2>
					)}
				</div>
				<div className={style.planContainer}>
					<CardPLan
						monts={planes[0]?.name}
						price={Math.round(planes[0]?.totalCost)}
						benefits1={`Con este plan te ahorras ${planes[0]?.saving} pesos`}
						benefits2={`Acceso a todas nuestras instalaciones`}
						benefits3={`Atención personalizada de nuestro staff`}
						benefits4={`Invita a ${1} amigos al mes para entrenar`}
					/>
					<CardPLan
						monts={planes[1]?.name}
						price={Math.round(planes[1]?.totalCost / 3)}
						benefits1={`Con este plan te ahorras ${planes[1]?.saving} pesos`}
						benefits2={`Acceso a todas nuestras instalaciones`}
						benefits3={`Atención personalizada de nuestro staff`}
						benefits4={`Invita a ${3} amigos al mes para entrenar`}
					/>
					<CardPLan
						monts={planes[2]?.name}
						price={Math.round(planes[2]?.totalCost / 6)}
						benefits1={`Con este plan te ahorras ${planes[2]?.saving} pesos`}
						benefits2={`Acceso a todas nuestras instalaciones`}
						benefits3={`Atención personalizada de nuestro staff`}
						benefits4={`Invita a ${4} amigos al mes para entrenar`}
					/>
					<CardPLan
						monts={planes[3]?.name}
						price={Math.round(planes[3]?.totalCost / 12)}
						benefits1={`Con este plan te ahorras ${planes[3]?.saving} pesos`}
						benefits2={`Acceso a todas nuestras instalaciones`}
						benefits3={`Atención personalizada de nuestro staff`}
						benefits4={`Invita a ${5} amigos al mes para entrenar`}
					/>
				</div>
			</div>
		</>
	);
};

export default SelectPlan;
