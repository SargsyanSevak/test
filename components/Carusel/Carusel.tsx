import React from "react";
import Image from 'next/image'
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
            <Image src={el.url} width={200} height={100} alt={el.name}/>
          </div>
        );
      })}
    </Carousel>
  );
}
