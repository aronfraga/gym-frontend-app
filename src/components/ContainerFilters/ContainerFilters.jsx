import React from 'react';
import Filters from '../Filters/Filters';
import style from './ContainerFilters.module.css';

const ContainerFilters = ({ filters }) => {
	return (
		<div className={style.mainContainer}>
			{filters?.map((filter, i) => (
				<Filters key={i} title={filter.title} filters={filter.filters} />
			))}
		</div>
	);
};

export default ContainerFilters;
