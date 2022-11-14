import React from 'react';
import NavBar from '../NavBar/NavBar';
import style from './DetailRoutine.module.css';
import Excercise from '../Excercise/Excercise';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const prueba = {
	id: 2,
	name: 'Intensivo piernas 2',
	createdBy: 'Gaston Schmitz',
	duration: 45,
	difficulty: 3,
	category: 'Masa Muscular',
	flag: false,
	excercises: [
		{
			id: 1,
			day: 1,
			name: 'Press de banca',
			gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif',
			series: 4,
			repetitions: 10,
			muscleId: 1,
			Routine_Excercise: {
				routineId: 2,
				excerciseId: 1,
			},
			muscle: {
				id: 1,
				name: 'Pectorales',
			},
		},
		{
			id: 2,
			day: 1,
			name: 'Press de banca',
			gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif',
			series: 4,
			repetitions: 10,
			muscleId: 1,
			Routine_Excercise: {
				routineId: 2,
				excerciseId: 1,
			},
			muscle: {
				id: 1,
				name: 'Pectorales',
			},
		},
		{
			id: 3,
			day: 1,
			name: 'Press de banca',
			gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif',
			series: 4,
			repetitions: 10,
			muscleId: 1,
			Routine_Excercise: {
				routineId: 2,
				excerciseId: 1,
			},
			muscle: {
				id: 1,
				name: 'Pectorales',
			},
		},
		{
			id: 4,
			day: 2,
			name: 'Press de banca',
			gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif',
			series: 4,
			repetitions: 10,
			muscleId: 1,
			Routine_Excercise: {
				routineId: 2,
				excerciseId: 1,
			},
			muscle: {
				id: 1,
				name: 'Pectorales',
			},
		},
		{
			id: 5,
			day: 2,
			name: 'Press de banca',
			gif: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif',
			series: 4,
			repetitions: 10,
			muscleId: 1,
			Routine_Excercise: {
				routineId: 2,
				excerciseId: 1,
			},
			muscle: {
				id: 1,
				name: 'Pectorales',
			},
		},
	],
};

let auxDay;

auxDay = prueba.excercises.map((exercise) => exercise.day);
auxDay = auxDay.filter((day, i) => auxDay.indexOf(day) === i);

const DetailRoutine = () => {
	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.cardContainer}>
					<div className={style.infoContainer}>
						<img
							className={style.imgClass}
							src='https://bestlifeonline.com/wp-content/uploads/sites/3/2017/07/shutterstock_401309230.jpg?quality=82&strip=all'
							alt='press banca'
						/>
						<div className={style.titlesContainer}>
							<h1>{prueba.name}</h1>
							<h2>{prueba.category}</h2>
							<div className={style.icons}>
								<HourglassFullIcon sx={{ fontSize: '1.7rem' }} />
								<h2>{prueba.duration} Minutos</h2>
							</div>
							<div className={style.icons}>
								<TrendingUpIcon sx={{ fontSize: '1.7rem' }} />
								<div className={style.bolitasContainer}>
									<div
										className={`${style.bolitas} ${
											prueba.difficulty >= 1
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											prueba.difficulty >= 2
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											prueba.difficulty >= 3
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											prueba.difficulty >= 4
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											prueba.difficulty >= 5
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.execerciseContainer}>
						{/* Dia 1 */}
						{auxDay.includes(1) && (
							<div>
								<h2>Día 1</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 1) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 2 */}
						{auxDay.includes(2) && (
							<div>
								<h2>Día 2</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 2) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 3 */}
						{auxDay.includes(3) && (
							<div>
								<h2>Día 3</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 3) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 4 */}
						{auxDay.includes(4) && (
							<div>
								<h2>Día 4</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 4) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 5 */}
						{auxDay.includes(5) && (
							<div>
								<h2>Día 5</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 5) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 6 */}
						{auxDay.includes(6) && (
							<div>
								<h2>Día 6</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 6) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 7 */}
						{auxDay.includes(7) && (
							<div>
								<h2>Día 7</h2>
								{prueba?.excercises?.map((excercise) => {
									if (excercise.day === 7) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gif}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailRoutine;
