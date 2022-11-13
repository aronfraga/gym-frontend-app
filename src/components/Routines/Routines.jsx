import React from 'react';
import NavBar from '../NavBar/NavBar';
import AllRoutines from '../AllRoutines/AllRoutines';
import BtnRoutines from '../BtnRoutines/BtnRoutines';
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import style from './Routines.module.css';

const Routines = () => {
	return (
		<div>
			<NavBar />

			<div className={style.mainContainer}>
				<ContainerFilters />
				<div className={style.cardsContainer}>
					<BtnRoutines />
					<AllRoutines />
				</div>
			</div>
		</div>
	);
};

export default Routines;
