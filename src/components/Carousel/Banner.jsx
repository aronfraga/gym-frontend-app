import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content" className="Grid-content">
      <CardContent className="Content">
        <Typography variant="h3" sx={{ color: "var(--secondary-color)" }}>
          {props.item.Name}
        </Typography>
        <Typography sx={{ color: "var(--black-blue)" }}>
          {props.item.Caption}
        </Typography>
        <Link to={`/${props.item.Routing}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              color: "var(--primary-color)",
              borderColor: "var(--primary-color)",
              "&:hover": {
                borderColor: "var(--primary-color)",
                backgroundColor: "var(--hover-outlined-button)",
                transition: "0.4s",
              },
            }}
          >
            Ver ahora
          </Button>
        </Link>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          component="img"
          height="360"
          image={item.Image}
          title={item.Name}
        ></CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};

export default Banner;
