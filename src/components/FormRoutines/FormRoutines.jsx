import {
  Typography,
  Rating,
  TextField,
  Button,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Slider,
  FormControl,
  IconButton,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddNewRoutinesMutation,
  useGetCategoryQuery,
  useGetMusclesQuery,
} from "../../redux/query/api";
import NavBar from "../NavBar/NavBar";
import style from "../FeedBack/FeedBack.module.css";
import Loading from "../Loading/Loading";
import FormEjer from "./FormEjer";
import { PhotoCamera } from "@mui/icons-material";
import { uploadImage } from "./uploadImage";
import {
  validatorCategory,
  validatorDifficulty,
  validatorMuscles,
  validatorName,
  validatorRepetitions,
  validatorSerie,
} from "./ValidatorForm";

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
  const { data: category, isLoading: load } = useGetCategoryQuery();
  const { data: muscles, isLoading: loadM } = useGetMusclesQuery();

  const [value, setValue] = useState({
    name: "",
    duration: 0,
    difficulty: 0,
    categoryId: 0,
    imgUrl: "",
    page: 0,
    nEje: 1,
    auxNEje: 1,
    aux: [],
  });

  const [ejercicio, setEjercicio] = useState({
    day: 0,
    name: "",
    series: 1,
    repetitions: 1,
    gifUrl: "",
    muscleId: 0,
  });

  const [errorValue, SetErrorValue] = useState({
    name: "El nombre debe tener mas de 2 caracteres",
  });

  const [createRoutines, { isLoading, error }] = useAddNewRoutinesMutation();

  const handelSubmit = async (e) => {
    e.preventDefault();
    value.aux.push(ejercicio);
    await createRoutines({
      name: value.name,
      duration: value.duration,
      difficulty: value.difficulty,
      categoryId: value.categoryId,
      excercises: value.aux,
      imgUrl: value.imgUrl,
    }).unwrap();
    setValue({
      name: "",
      duration: 0,
      difficulty: 0,
      categoryId: 0,
      page: 0,
      nEje: 1,
      auxNEje: 1,
      aux: [],
    });
    alert("Rutina Creada");
    navigate("/rutinas");
  };

  const handleChange = (event) => {
    if (
      event.target.name === "difficulty" ||
      event.target.name === "categoryId"
    ) {
      const number = Number(event.target.value);
      setValue({
        ...value,
        [event.target.name]: number,
      });
    } else {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    }

    SetErrorValue(
      validator({ ...value, [event.target.name]: event.target.value })
    );
  };

  const validator = (data) => {
    let error = {};
    validatorName(data.name) && (error.name = validatorName(data.name));

    validatorCategory(data.categoryId) &&
      (error.categoryId = validatorCategory(data.categoryId));

    validatorDifficulty(data.difficulty) &&
      (error.difficulty = validatorDifficulty(data.difficulty));

    validatorSerie(data.series) && (error.series = validatorSerie(data.series));

    validatorRepetitions(data.repetitions) &&
      (error.repetitions = validatorRepetitions(data.repetitions));

    validatorMuscles(data.muscleId) &&
      (error.muscleId = validatorMuscles(data.muscleId));
    return error;
  };

  const handlerImage = async (e) => {
    e.preventDefault();
    const url = await uploadImage(e.target.files);
    setValue({
      ...value,
      [e.target.name]: url,
    });
  };

  const handleChange2 = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "repetitions" || name === "series" || name === "muscleId") {
      const number = Number(value);
      setEjercicio({
        ...ejercicio,
        [name]: number,
      });
    } else {
      setEjercicio({
        ...ejercicio,
        [name]: value,
      });
    }
    SetErrorValue(validator({ ...ejercicio, [name]: value }));
  };

  const handelNext = (e) => {
    let pagina = value.page;
    pagina++;
    setValue({
      ...value,
      page: pagina,
      nEje: 1,
    });
    if (pagina > 1) {
      value.aux.push(ejercicio);
    }
    setEjercicio({
      day: pagina,
      name: "",
      series: 0,
      repetitions: 0,
      gifUrl: "",
      muscleId: ejercicio.muscleId,
    });
    SetErrorValue({
      name: "El nombre debe tener mas de 2 caracteres",
      series: "Agregar cantidad de series",
      repetitions: "Agregar cantidad de repeticiones",
    });
  };

  const handelPrev = (e) => {
    let pagina = value.page;
    pagina--;
    setValue({
      ...value,
      page: pagina,
      nEje: value.auxNEje,
    });
    setEjercicio(value.aux.pop());
  };

  const handelNextEjer = (e) => {
    let numeroEje = value.nEje;
    let auxN = value.auxNEje;
    numeroEje++;
    auxN++;
    setValue({
      ...value,
      nEje: numeroEje,
      auxNEje: auxN,
    });
    if (numeroEje > 1) {
      value.aux.push(ejercicio);
    }
    setEjercicio({
      day: value.page,
      name: "",
      series: 0,
      repetitions: 0,
      gifUrl: "",
      muscleId: ejercicio.muscleId,
    });
    SetErrorValue({
      name: "El nombre debe tener mas de 2 caracteres",
      series: "Agregar cantidad de series",
      repetitions: "Agregar cantidad de repeticiones",
    });
  };

  const handelPrevEjer = (e) => {
    let numeroEje = value.nEje;
    numeroEje--;
    let auxNejer = value.auxNEje;
    auxNejer--;
    setValue({
      ...value,
      nEje: numeroEje,
      auxNEje: auxNejer,
    });

    setEjercicio(value.aux.pop());
  };
  if (load || loadM) return <Loading />;
  if (value.page === 0) {
    return (
      <>
        <NavBar />
        <div className={style.mainContainer}>
          <div className={style.mainContainerForm}>
            <form>
              <FormControl>
                <TextField
                  sx={{ width: 300 }}
                  key="standard-name"
                  label="Nombre de la rutina"
                  name="name"
                  value={value.name}
                  onChange={handleChange}
                  error={errorValue.name ? true : false}
                  helperText={errorValue.name && errorValue.name}
                  required
                />
                <br />
                <div>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <FormLabel id="img-label">Imagen</FormLabel>
                    <input
                      accept="image/*"
                      type="file"
                      name="imgUrl"
                      onChange={handlerImage}
                    />
                    <PhotoCamera />
                  </IconButton>
                </div>
                <br />
                <div>
                  <FormLabel id="row-radio-buttons-group-label">
                    Categoria
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    error={errorValue.categoryId ? true : false}
                    required
                    sx={errorValue.categoryId && { color: "red" }}
                  >
                    {category.map((cate) => (
                      <FormControlLabel
                        name="categoryId"
                        key={cate.id}
                        value={cate.id}
                        control={<Radio />}
                        label={cate.name}
                        onChange={handleChange}
                      />
                    ))}
                  </RadioGroup>
                  <FormHelperText sx={{ color: "red" }}>
                    {errorValue.categoryId && errorValue.categoryId}
                  </FormHelperText>
                  {/* {errorValue.categoryId && (
                  <p>
                    <small>{errorValue.categoryId}</small>
                  </p>
                )} */}
                </div>

                <Typography component="legend">Dificultad</Typography>

                <Rating
                  name="difficulty"
                  id="difficultyId"
                  value={value.difficulty}
                  onChange={handleChange}
                  error={errorValue.difficulty ? true : false}
                />
                <FormHelperText sx={{ color: "red" }}>
                  {errorValue.difficulty && errorValue.difficulty}
                </FormHelperText>

                <InputLabel id="duracion" sx={{ position: "relative" }}>
                  Duracion
                </InputLabel>
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
                <br />
                <Button
                  variant="contained"
                  onClick={handelNext}
                  disabled={
                    Object.entries(errorValue).length === 0 ? false : true
                  }
                >
                  Siguiente
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      /* DIAS */
      <>
        <NavBar />
        <div className={style.mainContainer}>
          <div className={style.mainContainerForm}>
            <div>
              <h2>Dia {value.page}</h2>
              <form>
                <FormControl>
                  <FormEjer
                    ejercicio={ejercicio}
                    muscles={muscles}
                    handleChange2={handleChange2}
                    errorValue={errorValue}
                  />

                  <div>
                    <br />
                    <div>
                      <Button
                        variant="contained"
                        onClick={handelPrevEjer}
                        sx={
                          value.nEje === 1
                            ? { display: "none" }
                            : { display: "true" }
                        }
                      >
                        Ejercicio {value.nEje - 1}
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handelNextEjer}
                        disabled={
                          Object.entries(errorValue).length === 0 ? false : true
                        }
                      >
                        Ejercicio {value.nEje + 1}
                      </Button>
                    </div>
                    <br />
                    {value.page !== 1 ? (
                      <Button
                        variant="contained"
                        onClick={handelPrev}
                        sx={
                          value.page === 1 || value.nEje !== 1
                            ? { display: "none" }
                            : { display: "true" }
                        }
                      >
                        Dia {value.page - 1}
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={handelPrev}>
                        Volver
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handelSubmit}
                      disabled={
                        Object.entries(errorValue).length === 0 ? false : true
                      }
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handelNext}
                      sx={
                        value.page === 7
                          ? { display: "none" }
                          : { display: "true" }
                      }
                      disabled={
                        Object.entries(errorValue).length === 0 ? false : true
                      }
                    >
                      Dia {value.page + 1}
                    </Button>
                  </div>
                </FormControl>
              </form>
              {error && <section> {error.error}</section>}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FormRoutines;

const auxDuration = (value) => value;

//  <Button
//    variant="contained"
//    onClick={handelSubmit}
//    disabled={isLoading ? true : false}
//  >
//    Submit
//  </Button>;
