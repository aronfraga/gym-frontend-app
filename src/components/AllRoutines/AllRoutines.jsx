import React from "react";
import Routine from "../Routine/Routine";

const AllRoutines = () => {

  const test = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div>
      {test.map((data) => <Routine key={data}/>)}
    </div>
  )
}

export default AllRoutines;