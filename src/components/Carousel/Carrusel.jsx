import React from "react";
import Carousel from "react-material-ui-carousel";
import Banner from "./Banner";
import items from "./ImagenesEj";

const Carrusel = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        stopAutoPlayOnHover={true}
        animation={"slide"}
        indicators={true}
        interval={8000}
        duration={4000}
        cycleNavigation={true}
        navButtonsAlwaysVisible={true}
        height={300}
      >
        {items.map((item, index) => (
          <Banner
            item={item}
            key={index}
            contentPosition={item.contentPosition}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Carrusel;
