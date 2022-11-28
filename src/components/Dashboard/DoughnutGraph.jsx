import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ventas_anuales_tienda } from "./Data";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const DoughnutGraph = ({mes, año}) => {

    const products_names = (mes) => {
        const productos_mensuales = ventas_anuales_tienda[mes].map(e => e.name);
        return productos_mensuales;
    };

    const ventas_mensuales_producto = (mes) => {
        const total_income_per_product = ventas_anuales_tienda[mes].map( e => 
            e.qty_sell*e.unit_price);
        return total_income_per_product;
    };

    const ventas_mensuales = (mes)=>{
        const aux_1 = ventas_mensuales_producto(mes);
        const total_month_income = aux_1.reduce( (a,b) => a + b, 0); 
        return total_month_income;
    }

    const products_percentOfSells = (mes) => {
        const aux_2 = ventas_mensuales_producto(mes);
        const aux_3 = ventas_mensuales(mes);
        const income_percent = aux_2.map( e => (e/aux_3)*100);
        return income_percent;
    };

    const aux_4 = ventas_mensuales(mes);

    const data = {
        type: 'doughnut',
        labels: products_names(mes),
        datasets: [{
            data: products_percentOfSells(mes),
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
                text: `INGRESOS POR PRODUCTO - ${mes.toUpperCase()} - ${año}` 
            },
            subtitle:{
                display: true,
                text: `TOTAL - $${aux_4} (ARS)` 
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.formattedValue}%      $${Math.ceil((context.parsed)*(aux_4/100))} (ARS)`;
                    }
                }
            }
        }
    };

    return (
          <div className={Style.Doughnut}>
              <Doughnut data={data} options={opciones} />
          </div>
    );
  };
  
export default DoughnutGraph;
  