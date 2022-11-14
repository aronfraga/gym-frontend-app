import React from "react";
import Routine from "../Routine/Routine";
import style from "./AllRoutines.module.css";

const AllRoutines = ({ routines }) => {
  return (
    <div className={style.mainContainer}>
      {routines?.map((rutine, i) => (
        <Routine
          key={i}
          duration={rutine.duration}
          name={rutine.name}
          difficulty={rutine.difficulty}
        />
      ))}
    </div>
  );
};

export default AllRoutines;
