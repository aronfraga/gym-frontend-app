import { style } from "@mui/system";
import React from "react";
import styles from '../Calendar/Calendar.module.css'
import NavBar from "../NavBar/NavBar";
import { useGetAllClassesQuery } from "../../redux/query/api";

export default function Calendar() {

    const { data: classes, isLoading } = useGetAllClassesQuery()


    return (
        <>
            <NavBar />

            <h2 className={styles.tittle}>Calendario</h2>
            <hr className={styles.divisionline}></hr>

            <div className={styles.calendar} >

                <div className={styles.container}>



                    <ul className={styles.weeklyByhour}>
                        {
                            classes?.map((value, i) => (
                                <li key={i} style={{
                                    gridColumn: `${value.day}`,
                                    gridRow: `${value.hour}`,
                                    backgroundColor: '#0d0d6b',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    position: 'relative',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid black',
                                    borderRadius: '5px'

                                }}>{value.name}</li>
                            ))
                        }




                        {/* <li style={{ gridColumn: 'mon', gridRow: 'h08/h11', backgroundColor: '#82caaf', textAlign: 'center', }}>Clases de Spinning</li>
                        <li className={styles.eventWork} style={{ gridColumn: 'mon', gridRow: 'h09   /  h12', backgroundColor: '#00000047', textAlign: 'center', }}>Clases de Conter</li>
                        <li className={styles.eventWork} style={{ gridColumn: 'wed', gridRow: 'h10   /  h14', backgroundColor: '#00ff1eaa', textAlign: 'center' }}>Clases de Aerobicos</li>
                        <li className={styles.eventPersonal} style={{ gridColumn: 'fri', gridRow: 'h16   /  h18', backgroundColor: '#00f2ffb1', textAlign: 'center' }}>Clase de Yoga</li>
                        <li className={styles.eventPersonal} style={{ gridColumn: 'thu', gridRow: 'h07   /  h09', backgroundColor: '#ffcc00cb', textAlign: 'center' }}  >Clase de Zumba </li>
                        <li className={styles.eventPersonal} style={{ gridColumn: 'tue', gridRow: 'h18   /  h20', backgroundColor: '#f40000b0', textAlign: 'center' }}  >Clase de Pilates </li> */}


                        <li className={styles.mon}>Lunes</li>
                        <li className={styles.tue}>Martes</li>
                        <li className={styles.wed}>Miercoles</li>
                        <li className={styles.thu}>Jueves</li>
                        <li className={styles.fri}>Viernes</li>
                        <li className={styles.sat}>Sabado</li>



                        <li className={styles.h07}>7:00 am</li>
                        <li className={styles.h08}>8:00 am</li>
                        <li className={styles.h09}>9:00 am</li>
                        <li className={styles.h10}>10:00 am</li>
                        <li className={styles.h11}>11:00 am</li>
                        <li className={styles.h12}>12:00 pm</li>
                        <li className={styles.h13}>13:00 pm</li>
                        <li className={styles.h14}>14:00 pm</li>
                        <li className={styles.h15}>15:00 pm</li>
                        <li className={styles.h16}>16:00 pm</li>
                        <li className={styles.h17}>17:00 pm</li>
                        <li className={styles.h18}>18:00 pm</li>
                        <li className={styles.h19}>19:00 pm</li>
                        <li className={styles.h20}>20:00 pm</li>
                        <li className={styles.h21}>21:00 pm</li>
                        <li className={styles.h22}>22:00 pm</li>
                        <li className={styles.h23}>23:00 pm</li>


                        <li className={styles.corner}></li>


                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        <li className={styles.lis} ></li>
                        <li className={styles.lis}  ></li>
                        {/* <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li> */}
                        {/* <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li> */}
                        {/* <li ></li>
                        <li ></li> */}
                        {/* <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li ></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li> */}
                        {/* <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li> */}
                        {/* <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li> */}

                    </ul>
                </div>




            </div >
        </>

    )
}