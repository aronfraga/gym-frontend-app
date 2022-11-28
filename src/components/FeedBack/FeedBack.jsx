import React from 'react';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import style from '../FeedBack/FeedBack.module.css';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar/NavBar.jsx';
import swal from 'sweetalert';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useAddFeedbackMutation, useGetAllStaffQuery, } from '../../redux/query/api';
import logo from '../../Images/Logo.png';


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

const labels = {
	0.5: '',
	1: '',
	1.5: '',
	2: '',
	2.5: '',
	3: '',
	3.5: '',
	4: '',
	4.5: '',
	5: '',
};

const dataGym = ['Intalaciones', 'Maquinas', 'Servicios', 'Staff', 'Otros...'];


function getStyles(name, infoGym, theme) {
	return {
		fontWeight:
			infoGym.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const FeedBack = () => {
	const validate = (input) => {

		const errors = {}
		if (input.score === 0) {
			errors.score = "Agrega al menos una estrella"
		}
		return errors

	}

	const { data: staff, isLoading } = useGetAllStaffQuery();

	const [addFeedback, { data }] = useAddFeedbackMutation();
	const theme = useTheme();
	const [errors, setError] = useState({})
	const [input, setInput] = useState({
		title: [],
		staff: '',
		description: '',
		score: 0,
		staffId: 0,
	});

	const handleChange = (event) => {
		if (event.target.name === 'staff') {
			setInput({
				...input,
				[event.target.name]: event.target.value.name,
				staffId: event.target.value.id,
			});
		} else if (event.target.name === 'score') {
			const number = Number(event.target.value);
			setInput({
				...input,
				[event.target.name]: number,
			});
		} else {
			setInput({
				...input,
				[event.target.name]: event.target.value,
			});

		}
		setError(validate({
			...input,
			[event.target.name]: event.target.value
		}))
	};

	const HandleSubmit = async (e) => {
		e.preventDefault();
		await addFeedback({
			title: input.title,
			staff: input.staff,
			description: input.description,
			score: input.score,
			staffId: input.staffId,
		}).unwrap();
		setInput({
			title: [],
			staff: '',
			description: '',
			score: 0,
			staffId: 0,
		});
		swal("Gracias!", "Hemos recibido tu Feedback!", "success");

	};

	function getLabelText(value) {
		return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
	}

	return (
		<>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.mainContainerForm}>
					<div className={style.logoGymContainer}>
						<img className={style.logoGym} src={logo} />
					</div>
					<form onSubmit={HandleSubmit}>
						<FormControl sx={{ m: 1.5, alignItems: 'center' }}>
							<div>
								<Typography
									textAlign='center'
									sx={{
										m: 2,
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'roboto',
										fontWeight: 700,
										color: 'inherit',
										textDecoration: 'none',
									}}
								>
									¿Qué te parecio el servicio brindado?
								</Typography>
							</div>
							<div className={style.selectContainer}>
								<InputLabel id='demo-multiple-chip-label'>
									Seleciona un apartado
								</InputLabel>

								<Select
									className={style.select}
									required
									labelId='demo-multiple-chip-label'
									id='demo-multiple-chip'
									name='title'
									value={input.title}
									onChange={handleChange}
									input={<OutlinedInput label='Seleciona un apartado' />}
									renderValue={(value) => (
										<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
											<Chip key={value} label={value} />
										</Box>
									)}
									MenuProps={MenuProps}
								>
									{dataGym.map((name) => (
										<MenuItem
											key={name}
											value={name}
											style={getStyles(name, input.title, theme)}
										>
											{name}
										</MenuItem>
									))}
								</Select>
							</div>

							{input.title === 'Staff' && (
								<Select
									className={style.selectStaff}
									id='input-base'
									name='staff'
									// displayEmpty
									value={input.staff}
									onChange={handleChange}
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
							)}

							<Box

								sx={{
									width: 300,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: 3,
								}}
							>
								<Rating

									size='large'
									name='score'
									value={input.score}
									precision={0.5}
									getLabelText={getLabelText}
									onChange={handleChange}
									emptyIcon={
										<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
									}
								/>
							</Box>
							{errors.score && <p className={style.danger} >{errors.score}</p>}
							<div className={style.textField}>
								<Typography
									textAlign='center'
									sx={{
										marginTop: '24px',
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'roboto',
										fontWeight: 700,
										color: 'inherit',
										textDecoration: 'none',
									}}
								>
									Dejanos tu comentario para poder mejorar
								</Typography>
								<TextField
									sx={{ m: 1, width: 300 }}
									required
									name='description'
									variant='outlined'
									placeholder='Comparti tu experiencia'
									multiline
									onChange={handleChange}
									value={input.description}
									rows={2}
								/>
							</div>
							<div className={style.botonContainer}>
								<Button
									className={style.boton}
									type='submit'
									sx={{
										paddingRight: '25px',
										paddingLeft: '25px',
										marginBottom: '10px',
										color: 'white',
										borderRadius: '6px',
										background: '#2779ff',
										alignItems: 'center',
										'&:hover': {
											backgroundColor: '#5151519c',
											transition: '1s',
										},
									}}
								>
									Submit
								</Button>
							</div>
						</FormControl>
					</form>
				</div>
			</div>
		</>
	);
};

export default FeedBack;
