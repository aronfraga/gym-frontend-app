import React from "react";
import { useGetRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";
import PrevRoutine from "../PrevRoutine/PrevRoutine";
import style from "./PrevRoutines.module.css";
// const fav = [
// {
// 	duration: '60 minutos',
// 	name: 'Intensivo piernas',
// 	createdBy: 'Aaron Fraga',
// 	difficulty: 5,
// 	category: 'Cardio/Resistencia',
// },
// ];

const renderFavorites = (fav) =>
  fav?.map((rutine, i) => {
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
  const { data, isSuccess, isLoading } = useGetRoutinesQuery({});
  if (isLoading) return <Loading />;
  const fav = data?.filter((e) => e.favByUser);
  return (
    <div className={style.mainContainer}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Mis rutinas</h1>
      </div>
      <div className={style.cardContainer}>
        {isSuccess && fav.length >= 3 ? renderFavorites(fav) : renderAll(data)}
        {/* {renderAll(data)} */}
      </div>
    </div>
  );
};

export default PrevRoutines;
