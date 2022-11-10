import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Routine = ({ name, difficulty }) => {
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
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {difficulty}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Routine;
