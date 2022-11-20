import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import style from "./Routine.module.css";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import { useSetFavoritesMutation } from "../../redux/query/api";
import { Link } from "react-router-dom";
//"https://wrmx00.epimg.net/radio/imagenes/2017/08/22/sociedad/1503421462_805587_1503430567_noticia_normal.jpg"
const Routine = ({
  duration,
  name,
  difficulty,
  id,
  flagFav,
  category,
  imgUrl,
}) => {
  const [addToFavorite] = useSetFavoritesMutation();
  const [favorite, setFavorite] = useState(flagFav);

  console.log(name, flagFav);

  const handlerFavorite = (event) => {
    favorite && flagFav ? setFavorite(false) : setFavorite(true);
    addToFavorite(id);
  };

  const handlerCardAction = (event) => {};

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Link to={`/rutinas/${id}`}>
        <CardActionArea onClick={handlerCardAction}>
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
        </CardActionArea>
      </Link>
      <div className={style.iconFavorite}>
        <IconButton
          aria-label="star"
          onClick={handlerFavorite}
          sx={{ color: "#f0f0f0", padding: "0px" }}
        >
          {favorite || flagFav ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default Routine;
