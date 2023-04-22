import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MyCarusel({ activeStep,portfolio }: any) {
  return (
    <Carousel
      autoPlay={false}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      selectedItem={activeStep}
    >
      {portfolio.map((el:any, i:number) => {
        return (
            
          <div key={i}>
            <img src={el.url} />
            
          </div>
        );
      })}
    </Carousel>
  );
}
