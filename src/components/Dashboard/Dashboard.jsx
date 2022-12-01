import React, { useState } from 'react';
import {
	useGetSellProductsQuery,
	useGetSellMembresiesQuery,
	useGetSellProductsMonthQuery,
} from '../../redux/query/api';
import { useGetAllProductsQuery } from '../../redux/query/ApiEcommerce';
import DoughnutGraph from './DoughnutGraph';
import PieGraph from './PieGraph';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import LineMembresies from './LineMembresies';
import Style from './Dashboard.module.css';
import NavBar from '../NavBar/NavBar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const [state, setState] = useState({
		year: 2022,
		month: 12,
	});

	const handlerChange = (event) => {
		const value = event.target.value;
		const property = event.target.name;
		setState({ ...state, [property]: value });
	};

	/* const { data: allproducts, isLoading: loadingAllPro} = useGetAllProductsQuery({data:{},page:0,size:5000});
    const { data: monthlysales, isLoading: loadingMonthly} = useGetSellProductsMonthQuery(state.year); */
	const { data: products, isLoading: loadingPro } = useGetSellProductsQuery(
		state.year
	);
	const { data: membresies, isLoading: loadingMem } = useGetSellMembresiesQuery(
		state.year
	);
	const { data: productsByMonth, isLoading: loadingInfo } =
		useGetSellProductsMonthQuery(state);

	return (
		<>
			<NavBar />
			<div className={Style.mainContainer}>
				<div className={Style.titleContainer}>
					<div className={Style.header}>
						<h1 className={Style.tittle}>Admin Dashboard </h1>
						<div className={Style.buttonsContainer}>
							<Link to='/admdashboard/roles' style={{ textDecoration: 'none' }}>
								<Button
									variant='contained'
									sx={{
										background: '#0d0d6b',
										'&:hover': {
											backgroundColor: '#62629f',
											transition: '0.4s',
										},
									}}
								>
									Cambiar roles
								</Button>
							</Link>

							<Link
								to='/admdashboard/feedbacks'
								style={{ textDecoration: 'none' }}
							>
								<Button
									variant='contained'
									sx={{
										background: '#0d0d6b',
										'&:hover': {
											backgroundColor: '#62629f',
											transition: '0.4s',
										},
									}}
								>
									Ver Feedbacks
								</Button>
							</Link>
						</div>
					</div>

					<hr></hr>
				</div>
				<div>
					<p className={Style.subtittle}>
						Usa los selectores para ver distinta data
					</p>
					<br></br>
					<div className={Style.selectorsContainer}>
						<div className={Style.selectors}>
							Año
							<select name='year' value={state.year} onChange={handlerChange}>
								<option hidden value='default'>
									Año
								</option>
								<option>2021</option>
								<option>2022</option>
							</select>
						</div>
						<div className={Style.selectors}>
							Mes
							<select name='month' value={state.month} onChange={handlerChange}>
								<option hidden value='default'>
									Año
								</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
								<option>11</option>
								<option>12</option>
							</select>
						</div>
					</div>
					<div className={Style.AllChartsWrapper}>
						{/* <div className={Style.ChartWrapper}>
                        <DoughnutGraph mes={state.month} año={state.year}/>
                    </div>
                    <div className={Style.ChartWrapper}>
                        <BarGraph mes={state.month}  año={state.year}/>
                    </div> */}
						<div className={Style.ChartWrapper}>
							<PieGraph loading={loadingInfo} info={productsByMonth} />
						</div>
						<div className={Style.ChartWrapper}>
							<LineGraph
								loading={loadingPro}
								datos={products}
								año={state.year}
							/>
						</div>
						<div className={Style.ChartWrapper}>
							<LineMembresies
								loading={loadingMem}
								datos={membresies}
								año={state.year}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
