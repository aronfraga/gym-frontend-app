import React from "react";
import {Line} from "react-chartjs-2";
import Loading from "../Loading/Loading";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const LineMembresies = ({datos, año, loading}) => {

    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
    const aux_arr = [0,0,0,0,0,0,0,0,0,0,0,0];
    
    let valores = datos?.map(e => {
        aux_arr[e.month] = e.sum }
    );
    
    valores = aux_arr;

    const data = {
        type: 'line',
        labels: meses,
        datasets: [{
            label: `INGRESOS TOTALES (ARS) - ${año}`,
            data: valores,
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.3
        }]
    };

    const opciones = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'MEMBRESIAS'
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.formattedValue} $`;
                    }
                }
            },
        },        
    };

    return (
        <div>{loading?(<Loading/>):
            (<div className={Style.LineGraph}>
                <Line data={data} options={opciones} />
            </div>)}
        </div>
  );
};

export default LineMembresies;