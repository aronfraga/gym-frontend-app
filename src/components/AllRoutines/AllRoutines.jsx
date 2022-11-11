import React from 'react';
import { useGetAllRoutinesQuery } from '../../redux/query/api';
import Loading from '../Loading/Loading';
import Routine from '../Routine/Routine';
import style from './AllRoutines.module.css';

const prueba = [
	{
		duration: '60 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Aaron Fraga',
		difficulty: 5,
		category: 'Cardio/Resistencia',
	},
	{
		duration: '45 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 3,
		category: 'Masa Muscular',
	},
	{
		duration: '30 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 4,
		category: 'Postura',
	},
	{
		duration: '60 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Aaron Fraga',
		difficulty: 5,
		category: 'Cardio/Resistencia',
	},
	{
		duration: '45 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 3,
		category: 'Masa Muscular',
	},
	{
		duration: '30 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 4,
		category: 'Postura',
	},
	{
		duration: '45 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 3,
		category: 'Masa Muscular',
	},
	{
		duration: '30 minutos',
		name: 'Intensivo piernas',
		createdBy: 'Gaston Schmitz',
		difficulty: 4,
		category: 'Postura',
	},
];

const AllRoutines = () => {
	const { data: routines, isLoading, error } = useGetAllRoutinesQuery();

	if (isLoading) return <Loading />;

	return (
		<div className={style.mainContainer}>
			{prueba?.map((rutine, i) => (
				<Routine
					key={i}
					duration={rutine.duration}
					name={rutine.name}
					difficulty={rutine.difficulty}
				/>
			))}
		</div>
	);
};

export default AllRoutines;
