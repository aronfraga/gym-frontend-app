import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import style from "./Routine.module.css";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import {
  useDeleteRoutinesMutation,
  useSetFavoritesMutation,
} from "../../redux/query/api";
import { Link } from "react-router-dom";

const Routine = ({
  duration,
  name,
  difficulty,
  id,
  flagFav,
  category,
  imgUrl,
  favFilter,
}) => {
  const [addToFavorite] = useSetFavoritesMutation();
  const [deleteRoutines] = useDeleteRoutinesMutation();
  const [favorite, setFavorite] = useState(favFilter ? true : flagFav);
  const handlerFavorite = (event) => {
    addToFavorite(id);
    favorite ? setFavorite(false) : setFavorite(true);
  };

  const handlerDelete = () => {
    deleteRoutines(id);
  };

  const handlerCardAction = (event) => {};

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardActionArea onClick={handlerCardAction}>
        <Link to={`/rutinas/${id}`}>
          <div className={style.titleContainer}>
            <h1>{name}</h1>
            <h2>{category.name}</h2>
          </div>
          <CardMedia
            component="img"
            height="200"
            width="auto"
            image={imgUrl}
            alt="Rutine"
          />

          <div className={style.timeContainer}>
            <div>
              <h2>{duration}</h2>
              <div className={style.iconsContainer}>
                <div className={style.bolitasContainer}>
                  <div
                    className={`${style.bolitas} ${
                      difficulty >= 1
                        ? style.bolitasActive
                        : style.bolitasDesactive
                    }`}
                  ></div>
                  <div
                    className={`${style.bolitas} ${
                      difficulty >= 2
                        ? style.bolitasActive
                        : style.bolitasDesactive
                    }`}
                  ></div>
                  <div
                    className={`${style.bolitas} ${
                      difficulty >= 3
                        ? style.bolitasActive
                        : style.bolitasDesactive
                    }`}
                  ></div>
                  <div
                    className={`${style.bolitas} ${
                      difficulty >= 4
                        ? style.bolitasActive
                        : style.bolitasDesactive
                    }`}
                  ></div>
                  <div
                    className={`${style.bolitas} ${
                      difficulty >= 5
                        ? style.bolitasActive
                        : style.bolitasDesactive
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </CardActionArea>
      <div className={style.iconDelete}>
        <IconButton
          onClick={handlerDelete}
          sx={{
            color: "var(--red-color)",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <div className={style.iconFavorite}>
        <IconButton
          aria-label="star"
          onClick={handlerFavorite}
          sx={{ color: "#f0f0f0", padding: "0px" }}
        >
          {favorite ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default Routine;
