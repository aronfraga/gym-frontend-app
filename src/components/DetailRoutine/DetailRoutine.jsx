import React from 'react';
import NavBar from '../NavBar/NavBar';
import style from './DetailRoutine.module.css';
import Excercise from '../Excercise/Excercise';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useGetRoutinesByIdQuery } from '../../redux/query/api';
import { useMatch } from 'react-router-dom';
import Loading from '../Loading/Loading';

// const routineDetail = {
// 	id: 4,
// 	name: 'Alto rendimiento',
// 	createdBy: 'Gaston Schmitz',
// 	duration: 90,
// 	difficulty: 1,
// 	category: 'Fuerza',
// 	flag: false,
// 	favByUser: false,
// 	excercises: [
// 		{
// 			id: 5,
// 			day: 1,
// 			name: 'Triceps',
// 			series: 4,
// 			repetitions: 10,
// 			muscleId: 4,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 5,
// 			},
// 			muscle: {
// 				id: 4,
// 				name: 'Triceps',
// 			},
// 		},
// 		{
// 			id: 6,
// 			day: 2,
// 			name: 'Mancuernas',
// 			series: 4,
// 			repetitions: 12,
// 			muscleId: 5,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 6,
// 			},
// 			muscle: {
// 				id: 5,
// 				name: 'Biceps',
// 			},
// 		},
// 		{
// 			id: 7,
// 			day: 3,
// 			name: 'Abdominales Laterales',
// 			series: 4,
// 			repetitions: 10,
// 			muscleId: 2,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 7,
// 			},
// 			muscle: {
// 				id: 2,
// 				name: 'Abdominales',
// 			},
// 		},
// 		{
// 			id: 9,
// 			day: 4,
// 			name: 'Abdomianles bajos',
// 			series: 4,
// 			repetitions: 10,
// 			muscleId: 2,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 9,
// 			},
// 			muscle: {
// 				id: 2,
// 				name: 'Abdominales',
// 			},
// 		},
// 		{
// 			id: 12,
// 			day: 5,
// 			name: 'Patada trasera mancuerna',
// 			series: 4,
// 			repetitions: 10,
// 			muscleId: 6,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 12,
// 			},
// 			muscle: {
// 				id: 6,
// 				name: 'Gluteos',
// 			},
// 		},
// 		{
// 			id: 14,
// 			day: 6,
// 			name: 'Peso muerto',
// 			series: 4,
// 			repetitions: 15,
// 			muscleId: 4,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 14,
// 			},
// 			muscle: {
// 				id: 4,
// 				name: 'Triceps',
// 			},
// 		},
// 		{
// 			id: 17,
// 			day: 7,
// 			name: 'Gemelos',
// 			series: 4,
// 			repetitions: 15,
// 			muscleId: 7,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 17,
// 			},
// 			muscle: {
// 				id: 7,
// 				name: 'Gemelos',
// 			},
// 		},
// 		{
// 			id: 174,
// 			day: 1,
// 			name: 'Gemelos',
// 			series: 4,
// 			repetitions: 15,
// 			muscleId: 7,
// 			Routine_Excercise: {
// 				routineId: 4,
// 				excerciseId: 17,
// 			},
// 			muscle: {
// 				id: 7,
// 				name: 'Gemelos',
// 			},
// 		},
// 	],
// };

const DetailRoutine = () => {
	const match = useMatch('/rutinas/:id');
	const routineId = match.params.id;

	const { data: routineDetail, isLoading } = useGetRoutinesByIdQuery(routineId);
	console.log(routineDetail);

	let excerciseDays;

	excerciseDays = routineDetail?.excercises?.map((exercise) => exercise.day);
	excerciseDays = excerciseDays?.filter(
		(day, i) => excerciseDays.indexOf(day) === i
	);
	if (isLoading) return <Loading />;
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
							<h1>{routineDetail?.name}</h1>
							<h2>{routineDetail?.category}</h2>
							<div className={style.icons}>
								<HourglassFullIcon sx={{ fontSize: '1.7rem' }} />
								<h2>{routineDetail?.duration} Minutos</h2>
							</div>
							<div className={style.icons}>
								<TrendingUpIcon sx={{ fontSize: '1.7rem' }} />
								<div className={style.bolitasContainer}>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 1
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 2
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 3
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 4
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 5
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
						{excerciseDays?.includes(1) && (
							<div className={style.execercises}>
								<h2>Día 1</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 1) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(2) && (
							<div className={style.execercises}>
								<h2>Día 2</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 2) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(3) && (
							<div className={style.execercises}>
								<h2>Día 3</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 3) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(4) && (
							<div className={style.execercises}>
								<h2>Día 4</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 4) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(5) && (
							<div className={style.execercises}>
								<h2>Día 5</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 5) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(6) && (
							<div className={style.execercises}>
								<h2>Día 6</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 6) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
						{excerciseDays?.includes(7) && (
							<div className={style.execercises}>
								<h2>Día 7</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 7) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												// gif={excercise.gif}
												gif={
													'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bench-press-1568117208.gif'
												}
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
