import React from "react";
import { useState } from "react";
import style from './FormCalendar.module.css'
import styles from './PutClasses.module.css'
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import { useAddClassMutation, useGetAllStaffQuery, useGetAllClassesQuery, usePutClassesMutation, useDeleteClassesMutation, useGetClassesByIdQuery } from "../../redux/query/api";
import FormControl from "@mui/material/FormControl";
import swal from 'sweetalert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const horas = [
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
]

const imagenes = [
    "https://media.gettyimages.com/id/1292567082/es/foto/male-personal-trainer-sitting-on-weight-bench-after-training-client-finish-in-a-gym.jpg?s=2048x2048&w=gi&k=20&c=R9YVEJQyRcLTFX8sQsGpYwaOWzAcP1Z8D7iKv0Oxktc=",
    "https://media.gettyimages.com/id/1265090289/es/foto/el-personal-que-usa-una-toallita-h%C3%BAmeda-y-un-desinfectante-azul-de-la-botella-para-limpiar-la.jpg?s=2048x2048&w=gi&k=20&c=PttbdoekEaLCLw0ADbi46TocS3xnu0coEnd-ikewXXk=",
    "https://media.gettyimages.com/id/1319635095/es/foto/despu%C3%A9s-de-terminar-con-el-uso-de-equipos-de-ejercicio-en-el-gimnasio-moderno-el-atleta-y-el.jpg?s=2048x2048&w=gi&k=20&c=S_S2Q65ekxuy1mlmadVYawIm0VqABDTGlAh5mWdJKbo=",
    "https://media.gettyimages.com/id/615883260/es/foto/dif%C3%ADcil-no-significa-imposible.jpg?s=1024x1024&w=gi&k=20&c=A4t-maeefZ_B0wDZH2AZxFaVW-cidudFpMCICIRByPI=",
    "https://media.gettyimages.com/id/1311330212/es/foto/estoy-mejorando-d%C3%ADa-a-d%C3%ADa.jpg?s=1024x1024&w=gi&k=20&c=mv-7rC5VB8Ehy_8ucRs11jwhUDNRB_d_jXbMAe70vCw=",
    "https://media.gettyimages.com/id/1084251084/es/foto/entrenamiento-personal-en-el-gimnasio.jpg?s=1024x1024&w=gi&k=20&c=aNQ7_4FwYLPd4RxFAO-_pWuOZDx1hGMYpQn9r1Rp8gk=",
    "https://media.gettyimages.com/id/909416522/es/foto/hombre-mayor-activo-teniendo-fuerza-ejercicios-con-barra-en-un-gimnasio.jpg?s=1024x1024&w=gi&k=20&c=Ryxs9wzbVTy35mYc77vrZclg7GgccFO8fn2SRxQf13k=",
    "https://media.gettyimages.com/id/1347836469/es/foto/foto-de-un-apuesto-hombre-maduro-de-pie-con-los-brazos-cruzados-despu%C3%A9s-de-su-entrenamiento-en.jpg?s=2048x2048&w=gi&k=20&c=RSR3O-mDycSua1jsu4ZnOimx4UDYa2px77xvA9feVn4=",
]
const days = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
]
const staff = [
    'Martin Galara',
    'Agustin Reynoso',
    'Manuel Casanueva',
    'Jose Manrique',
    'Alexsandro Gomez',
    'Pablo Lospennato',
    'Aron Fraga',
    'Gaston Schmitz'
]



export default function PutClasses() {
    function validate(input) {
        let errors = {};
        if (/[^a-zA-Z, ]/g.test(input.name)
        ) {
            errors.name = "Ingresa un nombre valido";
        } else if (!input.name) {
            errors.name = "Ingresa un nombre";
        } else if (!input.day) {
            errors.day = "Ingresa un dia";
        }
        return errors;
    }

    const navigate = useNavigate()
    const { id } = useParams()
    const [deleteClasses] = useDeleteClassesMutation()
    const [putClasses] = usePutClassesMutation()
    const { data: getClassesById, isSuccess } = useGetClassesByIdQuery(id);
    const [flag, setFlag] = useState(false)
    const [addClass, { data }] = useAddClassMutation()
    const [errors, setErrors] = useState({});
    const { data: staff, isLoading } = useGetAllStaffQuery();



    const [hora, setHora] = useState({
        inicio: "",
        final: ""
    })


    const [input, setInput] = useState({
        name: "",
        hour: "",
        day: "",
        id: 0,
        staff: "",
        staffId: 0,
    })

    if (isSuccess && flag === false) {

        setInput({
            name: getClassesById.name,
            hour: getClassesById.hour,
            day: getClassesById.day,
            id: getClassesById.id,

        })
        setFlag(true)
    }

    const handleChange = (event) => {


        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        setErrors(
            validate({
                ...input,
                [event.target.name]: event.target.value,
            })
        );


    }

    const handleChangeHour1 = (event) => {
        event.preventDefault()

        if (event.target.name === "inicio") {
            setHora({
                ...hora,
                inicio: event.target.value
            })
        }


    }

    const handleChangeHour2 = (event) => {
        if (event.target.name === "final") {
            setHora({
                ...hora,
                final: event.target.value
            })
        }

    }

    const handleConfirmHour = (event) => {

        if (hora.inicio !== "" && hora.final !== "") {
            setInput({
                ...input,
                hour: `h${hora.inicio}/h${hora.final}`
            })
        }
    }


    const handleChangeStaff = (event) => {


        if (event.target.name === 'staff') {
            if (event.target.value)
                setInput({
                    ...input,
                    [event.target.name]: event.target.value.name,
                    staffId: event.target.value.id,

                });
        }

    }

    const HandleSubmit = async (event) => {
        event.preventDefault()
        await putClasses({
            id, payload: {
                name: input.name,
                hour: input.hour,
                day: input.day,
                staffId: input.staffId,
            }
        }).unwrap();
        setInput({
            name: "",
            hour: "",
            day: "",
        });
        swal({ title: "Hecho!", text: "Cambio realizado con exito", type: "success" }).then(
            (ok) => {
                if (ok) {
                    navigate("/calendario");
                }
            }
        );
    }



    const handlerClickDelete = async (event) => {
        await deleteClasses(event.currentTarget.value)
        useGetAllClassesQuery()
    }


    return (
        <>

            <div className={style.mainContainer}>
                <div className={style.mainContainerForm} >
                    <form onSubmit={HandleSubmit}>

                        <FormControl>

                            <TextField
                                required
                                sx={{ width: 300 }}
                                key="standard-name"
                                label="clase"
                                name="name"
                                value={input.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className={style.danger}>{errors.name}</p>}
                            <p>Day:</p>
                            <Select
                                required
                                id='input-base'
                                name='day'
                                placeholder="Selecciona un dia"
                                value={input.day}
                                onChange={handleChange}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Day</em>;
                                    }
                                    return selected;
                                }}
                                MenuProps={MenuProps}

                            >
                                <MenuItem disabled value=''>
                                    <em>Day</em>
                                </MenuItem>
                                {days?.map((value, i) => (
                                    <MenuItem value={value} key={i}>
                                        {value}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.day && <p className={style.danger}>{errors.day}</p>}
                            <p>Hora Inicio:</p>
                            <Select
                                required
                                id='input-base'
                                name='inicio'
                                value={hora.inicio}
                                onChange={handleChangeHour1}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Inicio</em>;
                                    }
                                    return selected;
                                }}
                                MenuProps={MenuProps}
                            >
                                <MenuItem disabled value=''>
                                    <em>Inicio</em>
                                </MenuItem>
                                {horas?.map((value, i) => (
                                    <MenuItem value={value} key={i}>
                                        {value}
                                    </MenuItem>
                                ))}
                            </Select>

                            <p>Hora Final:</p>
                            <Select
                                required
                                id='input-base2'
                                name='final'
                                value={hora.final}
                                onChange={handleChangeHour2}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Final</em>;
                                    }
                                    return selected;
                                }}
                                MenuProps={MenuProps}

                            >
                                <MenuItem disabled value=''>
                                    <em>Final</em>
                                </MenuItem>
                                {horas?.slice(horas.indexOf(hora.inicio) + 1, 28).map((value, i) => (
                                    <MenuItem value={value} key={i}>
                                        {value}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button onClick={handleConfirmHour}
                                disabled={errors.inicio > errors.final}
                                type='submit' sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    paddingRight: '25px',
                                    paddingLeft: '25px',
                                    marginBottom: '10px',
                                    marginLeft: '73px',
                                    marginTop: '10px',
                                    width: 150,
                                    color: 'white',
                                    borderRadius: '6px',
                                    background: '#2779ff',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: '#5151519c',
                                        transition: '1s',
                                    },
                                }}>
                                Confirmar
                            </Button>

                            <p>Instructor:</p>
                            <Select
                                className={style.selectStaff}
                                id='input-base'
                                name='staff'
                                // displayEmpty
                                value={input.staff}
                                onChange={handleChangeStaff}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Staff</em>;
                                    }
                                    return selected;
                                }}
                                MenuProps={MenuProps}

                            >
                                <MenuItem disabled value=''>
                                    <em>Staff</em>
                                </MenuItem>
                                {staff?.map((value, i) => (
                                    <MenuItem value={value} key={i}>
                                        {value.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button
                                disabled={errors.inicio > errors.final}
                                type='submit' sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    paddingRight: '25px',
                                    paddingLeft: '25px',
                                    marginBottom: '10px',
                                    marginLeft: '73px',
                                    marginTop: '10px',
                                    width: 150,
                                    color: 'white',
                                    borderRadius: '6px',
                                    background: '#2779ff',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: '#5151519c',
                                        transition: '1s',
                                    },
                                }}>
                                Editar
                            </Button>
                        </FormControl>
                    </form>
                </div>
                &nbsp;

            </div>
            <div className={styles.cardsclasses} >

                <Card
                    className={styles.cardPlan}
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'fit-content',
                        border: '1px solid var(--tertiary-color) ',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        transition: 'all 0.2s ease-out',
                    }}
                >

                    <div className={styles.containerBenefits}>
                        <h2>Clase: {getClassesById?.name}</h2>
                        <h2>Dia: {getClassesById?.dia}</h2>
                        <h2>Horario: {getClassesById?.hour}</h2>
                    </div>


                </Card>
            </div>




        </>
    )

}