import React from "react";
import { Pie } from "react-chartjs-2";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';
import Loading from "../Loading/Loading";

const PieGraph = ({info,loading}) => {

    const productos = {};

    info?.map(e => {
        if(!productos[e.title]) productos[e.title] = e.quantity;
        else productos[e.title] = productos[e.title] + e.quantity;
    })

    let total = 0;

    for (const property in productos) {
        total = total + productos[property];
      }

    const names = []
    const quantities = []

    for (const property in productos) {
        names.push([property])
        quantities.push(productos[property])
      }

    const data = {
        type: 'pie',
        labels: names,
        datasets: [{
            data: quantities,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#FCE2B3',
                '#5975A7',
                '#67A7A6',
                '#DBBDC3',
              ],
            hoverOffset: 4,
            borderWidth: 0,
        }]
    };

    const opciones = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `UNIDADES VENDIDAS EN PERIODO SELECCIONADO` 
            },
            subtitle:{
                display: true,
                text: `TOTAL - ${total} UNIDADES` 
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.formattedValue} UNIDADES`;
                    }
                }
            }
        }
    };


    return (
        <div>{loading?(<Loading/>):
        (<div className={Style.LineGraph}>
            <Pie data={data} options={opciones} />
        </div>)}
    </div>
  );
};

export default PieGraph;