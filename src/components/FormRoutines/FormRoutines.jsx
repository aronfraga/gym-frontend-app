import {
  Typography,
  Rating,
  FormGroup,
  TextField,
  Box,
  Button,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useAddNewRoutinesMutation } from "../../redux/query/api";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Loading from "../Loading/Loading";

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
  const [value, setValue] = useState({
    name: "",
    createdBy: "",
    duration: 0,
    difficulty: 0,
    category: "Masa Muscular",
  });

  const [createRoutines, { isLoading }] = useAddNewRoutinesMutation();

  const handelSubmit = async (e) => {
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
      category: "Masa Muscular",
    });
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
    <form sx={{ border: 1, width: { xl: 300 } }} onSubmit={handelSubmit}>
      <TextField
        id="standard-name"
        label="Nombre de la rutina"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <TextField
        id="standard-name"
        label="Creado por"
        name="createdBy"
        value={value.createdBy}
        onChange={handleChange}
      />

      {/* <InputLabel>Categoria</InputLabel>
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
      </Select> */}
      <Box sx={{ width: 300 }}>
        <InputLabel id="duracion">Duracion</InputLabel>
        <Slider
          name="duration"
          max={120}
          defaultValue={30}
          getAriaValueText={(value) => auxDuration(value)}
          value={auxDuration()}
          onChange={handleChange}
          step={null}
          valueLabelDisplay="off"
          marks={marks}
        />
      </Box>
      <Typography component="legend">Dificultad</Typography>
      <Rating
        name="difficulty"
        id="difficultyId"
        value={value.difficulty}
        onChange={handleChange}
      />

      <button type="submit">
        {isLoading ? (
          <>
            <p>"Submit"</p>
            <Loading />
          </>
        ) : (
          <p>"Submit"</p>
        )}
      </button>
    </form>
  );
};

export default FormRoutines;

const auxDuration = (value) => value;
