import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";
import {linkinimgurl} from "../Footer/Helpers"
import Button from '@mui/material/Button';
import Style from "./CardStaff.module.css"


const CardStaff = ({name,linkedin,rating,img}) => {
     return (
        <div className={Style.mainwrapper}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={img}
            />
            <CardContent className={Style.contentwrapper}>
                    <Typography gutterBottom variant="h5" component="div">{name}
                    <Typography gutterBottom variant="h6" component="div">
                            <a href={`${linkedin}`} target="_blank" rel="noreferrer">
                                <img src={linkinimgurl} alt="img" width="30px"height="30px"/>
                            </a><Rating name="read-only" value={rating} precision={0.1} readOnly /> 
                        </Typography>
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
        
    ); 
}

export default CardStaff;