import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './Filters.module.css';

const aquiVanLosFiltros = [
	//Estado/props/query o lo que sea que le mande lo que debe filtrar
	'Label 1',
	'Label 2',
	'Label 3',
	'Label 4',
	'Label 5',
	'Label 6',
	'Label 7',
	'Label 8',
	'Label 9',
	'Label 10',
];

const title = 'Titulo filtro';

const Filters = () => {
	const handlerCheck = (event) => {
		let checked = event.target.checked;
		let value = event.target.value;

		checked && console.log(value);
	};

	return (
		<div className={style.mainContainer}>
			<div className={style.titleContainer}>
				<h3>{title}</h3>
			</div>
			<div className={style.checksContainer}>
				{aquiVanLosFiltros?.map((checkboxes, i) => (
					<FormControlLabel
						key={i}
						control={
							<Checkbox
								sx={{ padding: '6px' }}
								value={checkboxes}
								onChange={handlerCheck}
							/>
						}
						label={checkboxes}
						sx={{ marginRight: '0px', marginLeft: '-10px' }}
					/>
				))}
			</div>
		</div>
	);
};

export default Filters;
