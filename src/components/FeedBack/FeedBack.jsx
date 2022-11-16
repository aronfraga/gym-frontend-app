import React from "react"
import FormControl from '@mui/material/FormControl'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "../FeedBack/FeedBack.module.css"
import Typography from '@mui/material/Typography';
import NavBar from "../NavBar/NavBar.jsx"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { TextField } from "@mui/material"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



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

const dataGym = [
    "Intalaciones",
    'Maquinas',
    'Staff',
    'Servicios',
    'Otros...'
];
function getStyles(name, infoGym, theme) {
    return {
        fontWeight:
            infoGym.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const FeedBack = () => {

    const theme = useTheme();
    const [input, setInput] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setInput(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handlerClickSubmit = () => {
        alert("Gracias por dejarnos tu Feedback")
    }

    return (
        <>

            <NavBar />
            <div className={style.mainContainer} >
                <div className={style.mainContainerForm} >
                    <FormControl sx={{ m: 1, width: 300 }} >
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
                        <div>
                            <InputLabel className={style.inputlabel} id="demo-multiple-chip-label"  >Seleciona un apartado </InputLabel>
                        </div>
                        <Select className={style.select}
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={input}
                            onChange={handleChange}
                            input={<OutlinedInput label="Seleciona un apartado" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {dataGym.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, input, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>

                        <Stack className={style.rating} spacing={1}>
                            <Rating name="size-large" defaultValue={0} size="large" />
                        </Stack>
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
                                variant="outlined"
                                placeholder="Comparti tu experiencia"
                                multiline
                                rows={2}
                                rowsMax={10}
                            />
                        </div>

                    </FormControl>
                    <Link to="/home" style={{ textDecoration: 'none' }} >
                        <Button sx={{
                            paddingRight: '25px',
                            paddingLeft: '25px',
                            marginBottom: '10px',
                            color: 'white',
                            display: 'flex',
                            borderRadius: '6px',
                            background: '#2779ff',
                            alignItems: "center",
                            "&:hover": { backgroundColor: '#5151519c', transition: "1s" }
                        }}
                            onClick={handlerClickSubmit}
                        > Submit </Button>
                    </Link>
                </div>
            </div>
        </>
    )

}



export default FeedBack;