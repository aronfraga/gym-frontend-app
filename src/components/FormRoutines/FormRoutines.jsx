import {
  Typography,
  Rating,
  TextField,
  Box,
  Button,
  Grid,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewRoutinesMutation } from "../../redux/query/api";
import NavBar from "../NavBar/NavBar";

const categorias = [
  "Cardio/Resistencia",
  "Masa Muscular",
  "Postura",
  "Bajada de Peso",
  "Definición",
];

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 30,
    label: "30min",
  },
  {
    value: 60,
    label: "60min",
  },
  {
    value: 90,
    label: "90min",
  },
  {
    value: 120,
    label: "120min",
  },
];

const FormRoutines = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    createdBy: "",
    duration: 0,
    difficulty: 0,
    category: "",
  });

  const [createRoutines, { isLoading }] = useAddNewRoutinesMutation();

  const handelSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await createRoutines({
      name: value.name,
      createdBy: value.createdBy,
      duration: value.duration,
      difficulty: value.difficulty,
      category: value.category,
    }).unwrap();
    setValue({
      name: "",
      createdBy: "",
      duration: 0,
      difficulty: 0,
      category: "",
    });
    alert("Rutina Creada");
    navigate("/rutinas");
  };

  const handleChange = (event) => {
    if (event.target.name === "difficulty") {
      const number = Number(event.target.value);
      setValue({
        ...value,
        [event.target.name]: number,
      });
    } else
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
  };

  return (
    <>
      <NavBar />
      <div>
        <Grid container>
          <form>
            <Grid item>
              <TextField
                sx={{ width: 300 }}
                id="standard-name"
                label="Nombre de la rutina"
                name="name"
                value={value.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                sx={{ width: 300 }}
                id="standard-name"
                label="Creado por"
                name="createdBy"
                value={value.createdBy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item></Grid>

            <FormLabel id="row-radio-buttons-group-label">Categoria</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {categorias.map((cate) => (
                <FormControlLabel
                  name="category"
                  value={cate}
                  control={<Radio />}
                  label={cate}
                  onChange={handleChange}
                />
              ))}
            </RadioGroup>

            <Grid item>
              <Box sx={{ width: 300 }}>
                <InputLabel id="duracion">Duracion</InputLabel>
                <Slider
                  name="duration"
                  max={120}
                  defaultValue={0}
                  getAriaValueText={(value) => auxDuration(value)}
                  value={auxDuration()}
                  onChange={handleChange}
                  step={null}
                  valueLabelDisplay="off"
                  marks={marks}
                />
              </Box>
            </Grid>
            <Grid item>
              <Typography component="legend">Dificultad</Typography>
              <Rating
                name="difficulty"
                id="difficultyId"
                value={value.difficulty}
                onChange={handleChange}
              />
            </Grid>
            <Box>
              <Button
                variant="contained"
                onClick={handelSubmit}
                disabled={isLoading ? true : false}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </div>
    </>
  );
};

export default FormRoutines;

const auxDuration = (value) => value;

// DEJO ESTO COSAS COMENTADAS

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

/* <InputLabel>Categoria</InputLabel>
      <Select
        name="category"
        id="categoryId"
        multiple
        value={value.category}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {categorias.map((cate) => (
          <MenuItem key={cate} value={cate}>
            <Checkbox checked={value.category.indexOf(cate) > -1} />
            <ListItemText primary={cate} />
          </MenuItem>
        ))}
      </Select> */
