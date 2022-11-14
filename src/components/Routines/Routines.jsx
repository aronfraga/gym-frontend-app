import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import AllRoutines from "../AllRoutines/AllRoutines";
import BtnRoutines from "../BtnRoutines/BtnRoutines";
import style2 from "./Routines.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import style from "./Filters.module.css";
import { muscles, duration, difficulty } from "./Datos.js";
import { useGetRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";

const Routines = () => {

  const [input, setInput] = useState({
    muscles: [],
    difficulty: [],
    duration: [],
  });

  const handlerCheck = (event) => {
    let checked = event.target.checked;
    let value = event.target.value;
    let name = event.target.name;

    if (name !== "muscles") value = parseInt(value);

    checked
      ? setInput({
          ...input,
          [name]: [...new Set([...input[name], value])],
        })
      : setInput({
          ...input,
          [name]: input[name].filter((f) => f !== value),
        });
  };

  const aux = {};
  for (const a in input) {
    if (input[a].length > 0) aux[a] = [...input[a]];
  }
  const { data, isLoading } = useGetRoutinesQuery(aux);

  if (isLoading) return <Loading />;
  return (
    <div>
      <NavBar />
      <div className={style2.mainContainer}>
        {/* FILTROS */}
        <div className={style.allContainer}>
          {/* FILTRO DE MUSCULOS*/}
          <div className={style.mainContainer}>
            <div className={style.titleContainer}>
              <h3>{muscles.title}</h3>
            </div>
            <div className={style.checksContainer}>
              {muscles.value.map((checkboxes, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      sx={{ padding: "6px" }}
                      value={checkboxes}
                      onChange={handlerCheck}
                    />
                  }
                  label={checkboxes}
                  name={muscles.name}
                  sx={{ marginRight: "0px", marginLeft: "-10px" }}
                />
              ))}
            </div>
          </div>

          {/* FILTRO DE TIEMPO*/}
          <div className={style.mainContainer}>
            <div className={style.titleContainer}>
              <h3>{duration.title}</h3>
            </div>
            <div className={style.checksContainer}>
              {duration.value.map((checkboxes, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      sx={{ padding: "6px" }}
                      value={parseInt(checkboxes)}
                      onChange={handlerCheck}
                    />
                  }
                  label={duration.label[i]}
                  name={duration.name}
                  sx={{ marginRight: "0px", marginLeft: "-10px" }}
                />
              ))}
            </div>
          </div>

          {/* FILTRO DE DIFICULTAD*/}
          <div className={style.mainContainer}>
            <div className={style.titleContainer}>
              <h3>{difficulty.title}</h3>
            </div>
            <div className={style.checksContainer}>
              {difficulty.value.map((checkboxes, i) => (
                <FormControlLabel
                  key={i}
                  control={
                    <Checkbox
                      sx={{ padding: "6px" }}
                      value={parseInt(checkboxes)}
                      onChange={handlerCheck}
                    />
                  }
                  label={difficulty.label[i]}
                  name={difficulty.name}
                  sx={{ marginRight: "0px", marginLeft: "-10px" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={style2.cardsContainer}>
          <BtnRoutines />
          <AllRoutines routines={data} />
        </div>
      </div>
    </div>
  );
};

export default Routines;
