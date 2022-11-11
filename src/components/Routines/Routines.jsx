import React from 'react';
import NavBar from '../NavBar/NavBar';
import AllRoutines from '../AllRoutines/AllRoutines';
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import style from './Routines.module.css';

const Routines = () => {
	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<ContainerFilters />
				<AllRoutines />
			</div>
		</div>
	);
};

export default Routines;
