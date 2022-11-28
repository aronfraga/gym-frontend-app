import React from "react";
import { Pie } from "react-chartjs-2";
import { ventas_anuales_tienda } from "./Data";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const PieGraph = ({mes, año}) => {

    const products_names = (mes) => {
        const product_names = ventas_anuales_tienda[mes].map(e => e.name);
        return product_names;
    };

    const qty_mensual_producto = (mes) => {
        const total_qty_per_product = ventas_anuales_tienda[mes].map( e => e.qty_sell);
        return total_qty_per_product;
    };

    const total_qty = (mes)=>{
        const aux_1 = qty_mensual_producto(mes);
        const total_month_qty = aux_1.reduce( (a,b) => a + b, 0); 
        return total_month_qty;
    };

    const aux_2 = total_qty(mes);

    const data = {
        type: 'pie',
        labels: products_names(mes),
        datasets: [{
            data: qty_mensual_producto(mes),
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
                text: `UNIDADES VENDIDAS - ${mes.toUpperCase()} - ${año}` 
            },
            subtitle:{
                display: true,
                text: `TOTAL - ${aux_2} UNIDADES` 
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
        <div className={Style.Pie}>
            <Pie data={data} options={opciones} />
        </div>
  );
};

export default PieGraph;