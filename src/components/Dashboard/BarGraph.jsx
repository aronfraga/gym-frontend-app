import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import { ventas_anuales_tienda } from "./Data";
import Style from "./Dashboard.module.css";
import 'chart.js/auto';

const BarGraph = ({mes, año}) => {

    const [isShown, setIsShown] = useState(true);
    const [isShown2, setIsShown2] = useState(true);
    const [isShown3, setIsShown3] = useState(true);
    const [isShown4, setIsShown4] = useState(true);

    const months_2022 = () => {
        let count = [];
        for (const [key] of Object.entries(ventas_anuales_tienda)) count.push(key);
        return count;
    };

    const calculate_income = (mes) => {
        const total_income_per_product = ventas_anuales_tienda[mes].map( e => 
            e.qty_sell*e.unit_price);
        const total_month_income = total_income_per_product.reduce((a,b) => a + b, 0); 
        return total_month_income;
    }

    const handlerChange = () => {
        setIsShown(current => !current)
    }
    const handlerChange2 = () => {
        setIsShown2(current => !current)
    }
    const handlerChange3 = () => {
        setIsShown3(current => !current)
    }
    const handlerChange4 = () => {
        setIsShown4(current => !current)
    }

    const dataset1 = {
        label: `1ER TRIMESTRE`,
        barThickness: 25,
        maxBarThickness: 21,
        skipNull: true,
        data: [245000, 268250, 301200],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1,
    }

    const dataset2 = {
        label: `2DO TRIMESTRE`,
        barThickness: 25,
        maxBarThickness: 21,
        skipNull: true,
        data: [,,,292500, 311000, 421000],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1
    }

    const dataset3 = {
        label: `3ER TRIMESTRE`,
        barThickness: 25,
        maxBarThickness: 21,
        skipNull: true,
        data: [,,,,,,
            calculate_income("Julio"),
            calculate_income("Agosto"), 
            calculate_income("Setiembre")],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1,
    }
    const dataset4 = {
        label: `4TO TRIMESTRE`,
        barThickness: 25,
        maxBarThickness: 21,
        skipNull: true,
        data: [,,,,,,,,,
            calculate_income("Octubre"),
            calculate_income("Noviembre"),
            calculate_income("Diciembre")],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
    }

    const meses = () => {
        const a = isShown?months_2022().slice(0,3):[];
        const b = isShown2?months_2022().slice(3,6):[];
        const c = isShown3?months_2022().slice(6,9):[];
        const d = isShown4?months_2022().slice(9,12):[];
        return ((a.concat(b)).concat(c)).concat(d);
    };

    const data = {
        type: 'bar',
        labels: meses(),
        datasets: [dataset1,dataset2,dataset3,dataset4]
    };

    const opciones = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: `INGRESOS ANUALES (TIENDA) - ${año}`,
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                title: {
                  display: true,
                  text: "Ingresos (ARS)",
                }
            },
            y: {
                beginAtZero: true,
            },
        },
        indexAxis: 'y',
    
    };

    return (
        <div>
            <div className={Style.botoneraTrim}>
            <p>Selecciona uno o más trimestres</p>
            <label>1ro
                <input defaultChecked={true} type="checkbox" value={isShown} onChange={handlerChange}></input>
            </label>
            <label>2do
                <input defaultChecked={true} type="checkbox" value={isShown} onChange={handlerChange2}></input>
            </label>
            <label>3ro
                <input defaultChecked={true} type="checkbox" value={isShown} onChange={handlerChange3}></input>
            </label>
            <label>4to
                <input defaultChecked={true} type="checkbox" value={isShown} onChange={handlerChange4}></input>
            </label>
            </div>
            <div className={Style.VerticalBar}>
                <Bar data={data} options={opciones} />
            </div>
        </div>
    );
};

export default BarGraph;