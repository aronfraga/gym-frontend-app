import { style } from '@mui/system';
import React from 'react';
import styles from '../Calendar/Calendar.module.css';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import Calendarli from './Calendarli';
import { useGetAllClassesQuery } from '../../redux/query/api';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Calendar() {

	const { data: classes, isLoading } = useGetAllClassesQuery();
	console.log(classes)
	if (isLoading) {
		return (
			<>
				<NavBar />
				<Loading />
			</>
		);
	}



	return (
		<>
			<NavBar />
			<div className={styles.mainContainer}>
				<div>
					<h2 className={styles.tittle}>Calendario</h2>
					<hr className={styles.divisionline}></hr>
					<Link to="/calendario/crear" >
						<Button sx={{
							paddingRight: '25px',
							paddingLeft: '25px',
							marginBottom: '10px',
							marginRight: '0px',
							marginTop: '10px',
							width: 150,
							color: 'white',
							borderRadius: '6px',
							background: 'var(--primary-color)',
							alignItems: 'center',
							'&:hover': {
								backgroundColor: '#5151519c',
								transition: '1s',
							},
						}}>
							Crear
						</Button>
					</Link>
				</div>

				<div className={styles.calendar}>
					<div className={styles.container}>
						<ul className={styles.weeklyByhour}>
							{classes?.map((value, i) => (
								<Calendarli
									key={i}
									name={value.name}
									hour={value.hour}
									day={value.day}
									imgUrl={value.user.imgUrl}
									staff={value.user.name}
								/>
							))}

							<li className={styles.mon}>Lunes</li>
							<li className={styles.tue}>Martes</li>
							<li className={styles.wed}>Miercoles</li>
							<li className={styles.thu}>Jueves</li>
							<li className={styles.fri}>Viernes</li>
							<li className={styles.sat}>Sabado</li>

							<li className={styles.h07}>7:00 am</li>
							<li className={styles.h08}>8:00 am</li>
							<li className={styles.h09}>9:00 am</li>
							<li className={styles.h10}>10:00 am</li>
							<li className={styles.h11}>11:00 am</li>
							<li className={styles.h12}>12:00 pm</li>
							<li className={styles.h13}>13:00 pm</li>
							<li className={styles.h14}>14:00 pm</li>
							<li className={styles.h15}>15:00 pm</li>
							<li className={styles.h16}>16:00 pm</li>
							<li className={styles.h17}>17:00 pm</li>
							<li className={styles.h18}>18:00 pm</li>
							<li className={styles.h19}>19:00 pm</li>
							<li className={styles.h20}>20:00 pm</li>
							<li className={styles.h21}>21:00 pm</li>
							<li className={styles.h22}>22:00 pm</li>
							<li className={styles.h23}>23:00 pm</li>

							<li className={styles.corner}></li>

							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
							<li className={styles.lis}></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
