import React from 'react';
import Filters from '../Filters/Filters';
import style from './ContainerFilters.module.css';

const pruebaFiltros1 = [
	'Dorsal',
	'Pectoral',
	'Triceps',
	'Bíceps',
	'Cuádriceps',
	'Gluteos',
	'Abdomen',
	'Adultores',
	'Isquiotibiales',
	'Hombro',
];
const title1 = 'Musculos';

const pruebaFiltros2 = [
	'15 - 30 min',
	'30 - 45 min',
	'45 - 60 min',
	'60 - 90 min',
	'Más de 90 min',
];
const title2 = 'Tiempo';

const pruebaFiltros3 = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5'];
const title3 = 'Intensidad';

const ContainerFilters = () => {
	return (
		<div className={style.mainContainer}>
			<Filters title={title1} filters={pruebaFiltros1} />
			<Filters title={title2} filters={pruebaFiltros2} />
			<Filters title={title3} filters={pruebaFiltros3} />
		</div>
	);
};

export default ContainerFilters;
