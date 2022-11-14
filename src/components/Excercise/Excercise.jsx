import React from 'react';
import style from './Excercise.module.css';

const Excercise = ({ name, gif, series, repetitions, muscle }) => {
	return (
		<div className={style.mainContainer}>
			<img className={style.gifClass} src={gif} alt='' />

			<div className={style.infoContainer}>
				<div className={style.titlesContainer}>
					<h1>{name}</h1>
					<h2>{muscle.name}</h2>
				</div>

				<div className={style.subInfoContainer}>
					<div className={style.repsSeriesContainer}>
						<h1>Repeticiones</h1>
						<h2>{repetitions}</h2>
					</div>
					<div className={style.repsSeriesContainer}>
						<h1>Series</h1>
						<h2>{series}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Excercise;
