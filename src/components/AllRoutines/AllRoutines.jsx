import React from "react";
import { useGetAllRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";
import Routine from "../Routine/Routine";

const AllRoutines = () => {

  const { data: routines, isLoading, error  } = useGetAllRoutinesQuery();

  if(isLoading) return <Loading />
    return (
      <div>
        {routines?.map((data, idx) => (
          <Routine key={idx} name={data.name} difficulty={data.difficulty}/> 
        ))}
    </div>
  )
}

export default AllRoutines;