import React from "react";
import { useGetAllFeedbacksQuery } from "../../redux/query/api";
import { Card, CardActionArea } from "@mui/material";
import style from './GetFeedbacks.module.css'
import NavBar from "../NavBar/NavBar";


export default function GetFeedbacks() {

    const { data: feedbacks } = useGetAllFeedbacksQuery();

    return (
        <div>
            <NavBar />
            <div className={style.mainContainer}>
                <h2 className={style.tittle}>Feedbacks</h2>
                <hr className={style.divisionline}></hr>
                <div className={style.cardsclasses} >
                    {feedbacks?.products.map((value, i) => (
                        <Card key={i}
                            className={style.cardPlan}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                                maxWidth: '400px',
                                height: 'fit-content',
                                border: '1px solid var(--tertiary-color) ',
                                borderRadius: '10px',
                                backgroundColor: 'white',
                                transition: 'all 0.2s ease-out',
                            }}
                        >

                            <div className={style.containerBenefits}>
                                <h2>Comentario: {value.title}</h2>
                                <h2>Staff: {value.staff}</h2>
                                <h2>Score: {value.score}</h2>
                                <h2>Description: {value.description}</h2>

                            </div>


                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}