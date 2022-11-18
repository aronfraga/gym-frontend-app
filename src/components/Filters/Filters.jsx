import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './Filters.module.css';

const Filters = ({ title, filters }) => {
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
				{filters?.map((checkboxes, i) => (
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
