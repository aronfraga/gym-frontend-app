import React from 'react';
import { useState } from 'react';
import style from './FormCalendar.module.css';
import styles from './PutClasses.module.css';
import NavBar from '../NavBar/NavBar';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import {
	useAddClassMutation,
	useGetAllStaffQuery,
	useGetAllClassesQuery,
	usePutClassesMutation,
	useDeleteClassesMutation,
	useGetClassesByIdQuery,
} from '../../redux/query/api';
import FormControl from '@mui/material/FormControl';
import swal from 'sweetalert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const horas = [
	'07',
	'08',
	'09',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
];

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function PutClasses() {
	function validate(input) {
		let errors = {};
		if (/[^a-zA-Z, ]/g.test(input.name)) {
			errors.name = 'Ingresa un nombre valido';
		} else if (!input.name) {
			errors.name = 'Ingresa un nombre';
		} else if (!input.day) {
			errors.day = 'Ingresa un dia';
		}
		return errors;
	}

	const navigate = useNavigate();
	const { id } = useParams();
	const [deleteClasses] = useDeleteClassesMutation();
	const [putClasses] = usePutClassesMutation();
	const { data: getClassesById, isSuccess } = useGetClassesByIdQuery(id);
	const [flag, setFlag] = useState(false);
	const [addClass, { data }] = useAddClassMutation();
	const [errors, setErrors] = useState({});
	const { data: staff, isLoading } = useGetAllStaffQuery();

	const [hora, setHora] = useState({
		inicio: '',
		final: '',
	});

	const [input, setInput] = useState({
		name: '',
		hour: '',
		day: '',
		id: 0,
		staff: '',
		staffId: 0,
	});

	if (isSuccess && flag === false) {
		setInput({
			name: getClassesById.name,
			hour: getClassesById.hour,
			day: getClassesById.day,
			id: getClassesById.id,
		});
		setFlag(true);
	}

	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validate({
				...input,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleChangeHour1 = (event) => {
		event.preventDefault();

		if (event.target.name === 'inicio') {
			setHora({
				...hora,
				inicio: event.target.value,
			});
		}
	};

	const handleChangeHour2 = (event) => {
		if (event.target.name === 'final') {
			setHora({
				...hora,
				final: event.target.value,
			});
		}
	};

	const handleConfirmHour = (event) => {
		if (hora.inicio !== '' && hora.final !== '') {
			setInput({
				...input,
				hour: `h${hora.inicio}/h${hora.final}`,
			});
		}
	};

	const handleChangeStaff = (event) => {
		if (event.target.name === 'staff') {
			if (event.target.value)
				setInput({
					...input,
					[event.target.name]: event.target.value.name,
					staffId: event.target.value.id,
				});
		}
	};

	const HandleSubmit = async (event) => {
		event.preventDefault();
		await putClasses({
			id,
			payload: {
				name: input.name,
				hour: input.hour,
				day: input.day,
				staffId: input.staffId,
			},
		}).unwrap();
		setInput({
			name: '',
			hour: '',
			day: '',
		});
		swal({
			title: 'Hecho!',
			text: 'Cambio realizado con exito',
			type: 'success',
		}).then((ok) => {
			if (ok) {
				navigate('/agenda');
			}
		});
	};

	const handlerClickDelete = async (event) => {
		await deleteClasses(event.currentTarget.value);
		useGetAllClassesQuery();
	};

	return (
		<>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.mainContainerForm}>
					<form onSubmit={HandleSubmit}>
						<FormControl>
							<TextField
								required
								sx={{ width: 300 }}
								key='standard-name'
								label='clase'
								name='name'
								value={input.name}
								onChange={handleChange}
							/>
							{errors.name && <p className={style.danger}>{errors.name}</p>}
							<p>Day:</p>
							<Select
								required
								id='input-base'
								name='day'
								placeholder='Selecciona un dia'
								value={input.day}
								onChange={handleChange}
								renderValue={(selected) => {
									if (selected.length === 0) {
										return <em>Day</em>;
									}
									return selected;
								}}
								MenuProps={MenuProps}
							>
								<MenuItem disabled value=''>
									<em>Day</em>
								</MenuItem>
								{days?.map((value, i) => (
									<MenuItem value={value} key={i}>
										{value}
									</MenuItem>
								))}
							</Select>
							{errors.day && <p className={style.danger}>{errors.day}</p>}
							<p>Hora Inicio:</p>
							<Select
								required
								id='input-base'
								name='inicio'
								value={hora.inicio}
								onChange={handleChangeHour1}
								renderValue={(selected) => {
									if (selected.length === 0) {
										return <em>Inicio</em>;
									}
									return selected;
								}}
								MenuProps={MenuProps}
							>
								<MenuItem disabled value=''>
									<em>Inicio</em>
								</MenuItem>
								{horas?.map((value, i) => (
									<MenuItem value={value} key={i}>
										{value}
									</MenuItem>
								))}
							</Select>

							<p>Hora Final:</p>
							<Select
								required
								id='input-base2'
								name='final'
								value={hora.final}
								onChange={handleChangeHour2}
								renderValue={(selected) => {
									if (selected.length === 0) {
										return <em>Final</em>;
									}
									return selected;
								}}
								MenuProps={MenuProps}
							>
								<MenuItem disabled value=''>
									<em>Final</em>
								</MenuItem>
								{horas
									?.slice(horas.indexOf(hora.inicio) + 1, 28)
									.map((value, i) => (
										<MenuItem value={value} key={i}>
											{value}
										</MenuItem>
									))}
							</Select>
							<Button
								onClick={handleConfirmHour}
								disabled={errors.inicio > errors.final}
								type='button'
								sx={{
									display: 'flex',
									justifyContent: 'center',
									paddingRight: '25px',
									paddingLeft: '25px',
									marginBottom: '10px',
									marginLeft: '73px',
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
								}}
							>
								Confirmar
							</Button>

							<p>Instructor:</p>
							<Select
								className={style.selectStaff}
								id='input-base'
								name='staff'
								// displayEmpty
								value={input.staff}
								onChange={handleChangeStaff}
								renderValue={(selected) => {
									if (selected.length === 0) {
										return <em>Staff</em>;
									}
									return selected;
								}}
								MenuProps={MenuProps}
							>
								<MenuItem disabled value=''>
									<em>Staff</em>
								</MenuItem>
								{staff?.map((value, i) => (
									<MenuItem value={value} key={i}>
										{value.name}
									</MenuItem>
								))}
							</Select>
							<Button
								disabled={errors.inicio > errors.final}
								type='submit'
								sx={{
									display: 'flex',
									justifyContent: 'center',
									paddingRight: '25px',
									paddingLeft: '25px',
									marginBottom: '10px',
									marginLeft: '73px',
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
								}}
							>
								Editar clase
							</Button>
						</FormControl>
					</form>
				</div>
				&nbsp;
				<Card
					className={styles.cardPlan}
					sx={{
						width: 'fit-content',
						paddingRight: '25px',
						paddingLeft: '25px',
						height: 'fit-content',
						border: '1px solid var(--tertiary-color) ',
						borderRadius: '10px',
						backgroundColor: 'white',
						transition: 'all 0.2s ease-out',
					}}
				>
					<div className={styles.containerBenefits}>
						<h2>Clase: {getClassesById?.name}</h2>
						<h2>Dia: {getClassesById?.day}</h2>
						<h2>Horario: {getClassesById?.hour}</h2>
					</div>
				</Card>
			</div>
			<div className={styles.cardsclasses}></div>
		</>
	);
}
