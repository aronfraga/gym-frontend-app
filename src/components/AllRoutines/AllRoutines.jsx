import React from "react";
import { useGetAllRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";
import Routine from "../Routine/Routine";
import style from "./AllRoutines.module.css";

const AllRoutines = () => {
  const { data: routines, isLoading, error } = useGetAllRoutinesQuery();

  if (isLoading) return <Loading />;

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
