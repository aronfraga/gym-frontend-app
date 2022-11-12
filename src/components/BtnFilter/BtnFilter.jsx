import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import ButtonGroup from "@mui/material/ButtonGroup";
import style from "./BtnFilter.module.css";

const BtnFilter = () => {
  return (
    <div className={style.btnMaster}>
      <Icon>star</Icon>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>Todas las rutinas</Button>
        <Button>Mis Rutinas</Button>
        <Button>Las que no tengo</Button>
      </ButtonGroup>
      <Button variant="contained" href={"/rutinas/crear"}>
        Crear rutina
      </Button>
    </div>
  );
};

export default BtnFilter;
