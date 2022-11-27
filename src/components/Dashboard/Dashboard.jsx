import React, {useState} from "react";
import DoughnutGraph from "./DoughnutGraph";
import PieGraph from "./PieGraph";
import BarGraph from "./BarGraph";
import Style from "./Dashboard.module.css";
import NavBar from "../NavBar/NavBar";

const Dashboard = () => {

    const [state,setState] = useState({
        year: 2022,
        month: "Agosto",
    });

    const handlerChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setState({...state,[property]: value});
    }

    return (
        <div>
        <NavBar/>
            <div className={Style.titleContainer}>
            <h1 className={Style.tittle}>Admin Dashboard </h1>
            <hr></hr>
            </div>
            <div>
                <p className={Style.subtittle}>Usa los selectores para ver distinta data</p>
                <br></br>
                <div className={Style.selectors}>
                    <select 
                        name="year" 
                        value={state.year} 
                        onChange={handlerChange}>
                        <option hidden value="default">Año</option>
                        <option>2022</option>
                    </select>
                    <select 
                        name="month" 
                        value={state.month} 
                        onChange={handlerChange}
                        >
                        <option hidden value="default">Mes</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setiembre">Setiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                </div>
                <div className={Style.AllChartsWrapper}>
                    <div className={Style.ChartWrapper}>
                        <DoughnutGraph mes={state.month} año={state.year}/>
                    </div>
                    <div className={Style.ChartWrapper}>
                        <PieGraph mes={state.month}  año={state.year}/>
                    </div>
                    <div className={Style.ChartWrapper}>
                        <BarGraph mes={state.month}  año={state.year}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Dashboard;
