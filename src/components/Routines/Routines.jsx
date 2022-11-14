import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AllRoutines from "../AllRoutines/AllRoutines";
import BtnRoutines from "../BtnRoutines/BtnRoutines";
import ContainerFilters from '../ContainerFilters/ContainerFilters';
import style from './Routines.module.css';

const Routines = () => {

	return (
		<div>
			<NavBar />
      <BtnRoutines />
			<div className={style.mainContainer}>
				<ContainerFilters />
				<AllRoutines />
			</div>
		</div>
	);
};

export default Routines;
