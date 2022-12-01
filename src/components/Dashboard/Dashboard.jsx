import React, { useState } from "react";
import {    useGetSellProductsQuery, 
            useGetSellMembresiesQuery,
            useGetSellProductsMonthQuery} from "../../redux/query/api";
import {useGetAllProductsQuery} from "../../redux/query/ApiEcommerce";
import DoughnutGraph from "./DoughnutGraph";
import PieGraph from "./PieGraph";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import LineMembresies from "./LineMembresies";
import Style from "./Dashboard.module.css";
import NavBar from "../NavBar/NavBar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Dashboard = () => {

    const [state, setState] = useState({
        year: 2022,
        month: 'Agosto',
    });

    const handlerChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setState({ ...state, [property]: value });
    };

    /* const { data: allproducts, isLoading: loadingAllPro} = useGetAllProductsQuery({data:{},page:0,size:5000});
    const { data: monthlysales, isLoading: loadingMonthly} = useGetSellProductsMonthQuery(state.year); */
    const { data: products, isLoading: loadingPro } = useGetSellProductsQuery(state.year);
    const { data: membresies, isLoading: loadingMem} = useGetSellMembresiesQuery(state.year);
    
    return (
        <div>
            <NavBar />
            <div className={Style.titleContainer}>
                <h1 className={Style.tittle}>Admin Dashboard </h1>
                <hr></hr>
            </div>
            <div>
                <p className={Style.subtittle}>Usa los selectores para ver distinta data</p>
                <br></br>
                <div className={Style.selectors}>Año 
                    <select
                        name="year"
                        value={state.year}
                        onChange={handlerChange}>
                        <option hidden value="default">Año</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                    {/* <select 
                        name="month" 
                        value={state.month} 
                        onChange={handlerChange}
                        >
                        <option hidden value="default">Mes</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setiembre">Setiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select> */}
                </div>
                <div className={Style.AllChartsWrapper}>
                    {/* <div className={Style.ChartWrapper}>
                        <DoughnutGraph mes={state.month} año={state.year}/>
                    </div>
                    <div className={Style.ChartWrapper}>
                        <PieGraph mes={state.month}  año={state.year}/>
                    </div>
                    <div className={Style.ChartWrapper}>
                        <BarGraph mes={state.month}  año={state.year}/>
                    </div> */}
                    <div className={Style.ChartWrapper}>
                        <LineGraph loading={loadingPro} datos={products} año={state.year} />
                    </div>
                    <div className={Style.ChartWrapper}>
                        <LineMembresies loading={loadingMem} datos={membresies} año={state.year} />
                    </div>
                </div>
                <Link to='/admdashboard/roles'>
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            right: 275,
                            top: 150,
                            background: "#0d0d6b",
                            "&:hover": {
                                backgroundColor: "#62629f",
                                transition: "0.4s",
                            },
                        }}
                    >
                        Cambiar roles
                    </Button>
                </Link>
                
                <Link to='/admdashboard/feedbacks'>
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            right: 80,
                            top: 150,
                            background: "#0d0d6b",
                            "&:hover": {
                                backgroundColor: "#62629f",
                                transition: "0.4s",
                            },
                        }}
                    >
                        Ver Feedbacks
                    </Button>
                </Link>
            </div>
        </div>

    );

};

export default Dashboard;
