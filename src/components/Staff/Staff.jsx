import React, { useEffect } from 'react';
import { fetchGetAllStaff } from '../../redux/actions/defaultAction.js';
import { useSelector, useDispatch } from 'react-redux';
import CardStaff from '../CardStaff/CardStaff.jsx';
import Style from './Staff.module.css';
import NavBar from '../NavBar/NavBar.jsx';

const Staff = () => {
	const dispatch = useDispatch();
	const { staff } = useSelector((state) => state.staff);
	useEffect(() => {
		dispatch(fetchGetAllStaff());
	}, [dispatch]);
	return (
		<>
			<NavBar />
			<div className={Style.mainwrapper}>
				<div className={Style.titleContainer}>
					<h1 className={Style.stafftittle}>Staff Técnico</h1>
					<hr className={Style.divisionline}></hr>
				</div>
				<div className={Style.cardswrapper}>
					{staff?.map((staff,index) => (
						<CardStaff
							key={index}
							name={staff.name}
							rating={staff.averageScore}
							img={staff.imgUrl}
							mail={staff.email}
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default Staff;
