import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import style from './Filters.module.css';
import { useGetFilteredByPriceMutation } from '../../redux/query/ApiEcommerce';
import { useGetFilteredByCategoryQuery } from '../../redux/query/ApiEcommerce';
//import { useGetFilteredByCategoryMutation } from '../../redux/query/ApiEcommerce';

const Filters = ({ title, filters, type }) => {

	const [ filterByPrice ] = useGetFilteredByPriceMutation();
	
	//const [ filterByCategory ] = useGetFilteredByCategoryMutation();

	//const [ filterByCategory ] = useGetFilteredByCategoryQuery()

	const handlerCheck = (event) => {
		let checked = event.target.checked;
		let value = event.target.value;
			//if(checked && type === 0) filterByCategory({ filters: { value } });
			//if(checked && type === 0) filterByCategory({ filters: { value } });
			//if(checked && type === 1) filterByPrice(valueMin, valueMax);
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
