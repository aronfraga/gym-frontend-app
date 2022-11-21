import React from "react";
import { useGetRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";
import PrevRoutine from "../PrevRoutine/PrevRoutine";
import style from "./PrevRoutines.module.css";
//Arreglo all routines

const prueba = [
  {
    duration: "60 minutos",
    name: "Intensivo piernas",
    createdBy: "Aaron Fraga",
    difficulty: 5,
    category: "Cardio/Resistencia",
  },
  {
    duration: "45 minutos",
    name: "Intensivo piernas",
    createdBy: "Gaston Schmitz",
    difficulty: 3,
    category: "Masa Muscular",
  },
  {
    duration: "30 minutos",
    name: "Intensivo piernas",
    createdBy: "Gaston Schmitz",
    difficulty: 4,
    category: "Postura",
  },
  {
    duration: "60 minutos",
    name: "Intensivo piernas",
    createdBy: "Aaron Fraga",
    difficulty: 5,
    category: "Cardio/Resistencia",
  },
];
//Arreglo Fav
const fav = [
  // {
  // 	duration: '60 minutos',
  // 	name: 'Intensivo piernas',
  // 	createdBy: 'Aaron Fraga',
  // 	difficulty: 5,
  // 	category: 'Cardio/Resistencia',
  // },
];

// const renderFavorites = () =>
//   fav?.map((rutine, i) => {
//     if (i < 3) {
//       return (
//         <PrevRoutine
//           key={i}
//           duration={rutine.duration}
//           name={rutine.name}
//           difficulty={rutine.difficulty}
//         />
//       );
//     }
//   });

const renderAll = (data) =>
  data?.map((rutine, i) => {
    if (i < 3) {
      return (
        <PrevRoutine
          key={i}
          id={rutine.id}
          duration={rutine.duration}
          name={rutine.name}
          difficulty={rutine.difficulty}
          img={rutine.imgUrl}
          category={rutine.category}
        />
      );
    }
  });
const PrevRoutines = () => {
  const { data } = useGetRoutinesQuery({});

  return (
    <div className={style.mainContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Mis rutinas</h1>
      </div>
      <div className={style.cardContainer}>
        {/* {fav.length ? renderFavorites() : renderAll(data)} */}
        {renderAll(data)}
      </div>
    </div>
  );
};

export default PrevRoutines;
