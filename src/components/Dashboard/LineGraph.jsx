import React from "react";
import {Line} from "react-chartjs-2";
import Loading from "../Loading/Loading";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const LineGraph = ({datos, año, loading}) => {

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
    const aux_arr = [0,0,0,0,0,0,0,0,0,0,0,0];
    
    let valores = datos?.map(e => {
        aux_arr[e.month] = e.sum;
        }
    );
    valores = aux_arr;

    const data = {
        type: 'line',
        labels: meses,
        datasets: [{
            label: `Ingresos Totales - ${año}`,
            data: valores,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const opciones = {
        responsive: true,
    };

    return (
        <div>{loading?(<Loading/>):
            (<div className={Style.Doughnut}>
                <Line data={data} options={opciones} />
            </div>)}
        </div>
  );
};

export default LineGraph;