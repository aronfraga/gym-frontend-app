import React from "react";
import Routine from "../Routine/Routine";
import style from "./AllRoutines.module.css";

const AllRoutines = ({ routines, favFilter }) => {
  return (
    <div className={style.mainContainer}>
      {routines?.map((rutine, i) => (
        <Routine
          key={i}
          id={rutine.id}
          duration={rutine.duration}
          name={rutine.name}
          difficulty={rutine.difficulty}
          category={rutine.category}
          imgUrl={rutine.imgUrl}
          favFilter={favFilter}
          flagFav={
            rutine.User_Routine
              ? rutine.User_Routine.favourite
              : rutine.favByUser
          }
        />
      ))}
    </div>
  );
};

export default AllRoutines;
