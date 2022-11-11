import React from "react";
import BtnFilter from "../BtnFilter/BtnFilter";
import style from './BtnRoutines.module.css';

const BtnRoutines = () => {
  return (
      <div className={style.mainContainer}>
        <div className={style.subContainer}>
          <h1 className={style.title}>Rutinas</h1>
          <BtnFilter />
        </div>
        <div className={style.underLine}></div>
      </div>
  )
}

export default BtnRoutines;