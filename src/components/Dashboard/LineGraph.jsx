import React from "react";
import {Line} from "react-chartjs-2";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const LineGraph = ({datos, año}) => {

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
    
    const valores = datos?.map(e => e.sum);

    const data = {
        type: 'line',
        labels: meses,
        datasets: [{
            label: `Ingresos Totales - ${año}`,
            data:valores,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const opciones = {
        responsive: true,
    };

    return (
        <div className={Style.Doughnut}>
            <Line data={data} options={opciones} />
        </div>
  );
};

export default LineGraph;