import React, { useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import style from "../FeedBack/FeedBack.module.css";
import Typography from '@mui/material/Typography';
import NavBar from "../NavBar/NavBar.jsx";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { FormGroup, TextField } from "@mui/material"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAddFeedbackMutation, useGetAllStaffQuery } from "../../redux/query/api";
// import { getAllStaff } from "../../redux/actions/defaultAction"
// import { useDispatch, useSelector } from "react-redux";





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

const labels = {
    0.5: '',
    1: '',
    1.5: '',
    2: '',
    2.5: '',
    3: '',
    3.5: '',
    4: '',
    4.5: '',
    5: '',
};


const dataGym = [
    "Intalaciones",
    'Maquinas',
    'Servicios',
    'Staff',
    'Otros...'
];

// const staff = [
//     'Martin Galara',
//     'Gaston Schmitz',
//     'Aaron Fraga',
//     'Agustin Reynoso', 
//     'Jose Manrique',
//     'Manuel Casanueva',
//     'Pablo Lospennato',
//     'Alexsandro Gomez'
// ]

function getStyles(name, infoGym, theme) {
    return {
        fontWeight:
            infoGym.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const FeedBack = () => {

    // const dispatch = useDispatch()
    // const { staff } = useSelector((state) => state.staff);
    const { data: staff, isLoading } = useGetAllStaffQuery()
    console.log(staff)
    const [addFeedback, { data }] = useAddFeedbackMutation()
    const navigate = useNavigate()
    const theme = useTheme();
    const [input, setInput] = useState({
        title: [],
        staff: "",
        description: "",
        score: 0
    });

    // useEffect(() => {
    //     dispatch(getAllStaff())

    // }, [dispatch])

    const handleChange = (event) => {
        if (event.target.name === "score") {
            const number = Number(event.target.value)
            setInput({
                ...input,
                [event.target.name]: number,
            })
        } else {
            setInput({
                ...input,
                [event.target.name]: event.target.value,
            })
        }

    };



    const HandleSubmit = async (e) => {
        e.preventDefault()
        await addFeedback({
            title: input.title,
            staff: input.staff,
            description: input.description,
            score: input.score
        }).unwrap();
        setInput({
            title: [],
            staff: "",
            description: "",
            score: 0
        })
        alert("Gracias por dejarnos tu Feedback")
        navigate("/home")
    }

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <>

            <NavBar />
            <div className={style.mainContainer} >
                <div className={style.mainContainerForm} >
                    <form onSubmit={HandleSubmit}  >


                        <FormControl sx={{ m: 1.5, width: 300 }} >
                            <div>
                                <img className={style.logoGym} src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2660/posts/32516/image/online-logo-generator-for-a-power-fitness-gym-2457j-93-el.jpg" />
                            </div>
                            <div>
                                <Typography textAlign="center" sx={{
                                    m: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'roboto',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>¿Qué te parecio el servicio brindado?</Typography>
                            </div>

                            <InputLabel sx={{ m: 0.3, width: 300, marginTop: 52.5 }} id="demo-multiple-chip-label"  >Seleciona un apartado </InputLabel>

                            <Select className={style.select}
                                required
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                name="title"
                                value={input.title}
                                onChange={handleChange}
                                input={<OutlinedInput label="Seleciona un apartado" />}
                                renderValue={(value) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        <Chip key={value} label={value} />
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {dataGym.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, input.title, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>

                            {(input.title === "Staff") &&
                                <>
                                    <InputLabel sx={{ m: 0.3, width: 300, marginTop: 52.5 }} id="demo-multiple-chip-label"  >Seleciona un apartado </InputLabel>
                                    <FormGroup>
                                        <Select className={style.selectStaff}

                                            id="input-base"
                                            name="staff"
                                            // displayEmpty
                                            value={input.staff}
                                            onChange={handleChange}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <em>Staff</em>;
                                                }
                                                return selected
                                            }}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem disabled value="">
                                                <em>Staff</em>
                                            </MenuItem>
                                            {staff?.map((value, i) => (
                                                <MenuItem value={value.name} key={i} >
                                                    {value.name}
                                                </MenuItem>
                                            )
                                            )}
                                        </Select>
                                    </FormGroup>

                                </>
                            }

                            <Box required sx={{
                                width: 300,
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: 'center',
                                marginTop: 3
                            }}>
                                <Rating
                                    required
                                    size="large"
                                    name="score"
                                    value={input.score}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={handleChange}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                            </Box>
                            {/* {errors.score && <p className={style.danger} >{errors.score}</p>} */}
                            <div className={style.textField} >
                                <Typography textAlign="center" sx={{
                                    m: 3,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'roboto',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>Dejanos tu comentario para poder mejorar</Typography>
                                <TextField sx={{ m: 1, width: 300 }}
                                    required
                                    name="description"
                                    variant="outlined"
                                    placeholder="Comparti tu experiencia"
                                    multiline
                                    onChange={handleChange}
                                    value={input.description}
                                    rows={2}

                                />
                            </div>
                            <div className={style.botonContainer} >
                                <Button className={style.boton} type="submit" sx={{
                                    paddingRight: '25px',
                                    paddingLeft: '25px',
                                    marginBottom: '10px',
                                    color: 'white',
                                    borderRadius: '6px',
                                    background: '#2779ff',
                                    alignItems: "center",
                                    "&:hover": { backgroundColor: '#5151519c', transition: "1s" }
                                }}> Submit </Button>
                            </div>

                        </FormControl>


                    </form>
                </div>
            </div>
        </>
    )

}



export default FeedBack;


