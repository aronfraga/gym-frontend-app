import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useGetAllRoutinesQuery } from "../../redux/query/api";
import Loading from "../Loading/Loading";

const Routine = () => {

  const { data, isLoading, error  } = useGetAllRoutinesQuery();

console.log(data)

const renderRoutines = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://wrmx00.epimg.net/radio/imagenes/2017/08/22/sociedad/1503421462_805587_1503430567_noticia_normal.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const renderSpinner = () => {
  return <Loading />
}

return (
  <div>
    {isLoading ? renderSpinner() : renderRoutines()}
  </div>
  )
}

export default Routine;
