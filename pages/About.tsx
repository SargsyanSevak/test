// Photos from https://citizenofnowhe.re

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const portfolio = [
  {
    step: 0,
    name: "Armstroy",
    url: "port2",
    href: "https://google.com",
  },
  {
    step: 1,
    name: "Marvel",
    url: "port1",
    href: "https://google.com",
  },
  {
    step: 2,
    name: "UTL",
    url: "port2",
    href: "https://google.com",
  },
  {
    step: 3,
    name: "Portfolio",
    url: "port1",
    href: "https://google.com",
  },
  {
    step: 4,
    name: "Naxshun",
    url: "port2",
    href: "https://google.com",
  },
];

function Image({ id }: { id: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    setIsInView(false);
  }, []);
  return (
    <div className="mySection w-full h-full">
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={`/${id}.jpeg`}
          width={300}
          height={200}
          alt=""
          className="myImg"
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <main className="scroll-container container">
        {portfolio.map((image) => (
          <section>
            <Image id={image.url} key={image.name} />
          </section>
        ))}
      </main>
    </>
  );
}

// import React from 'react'

// const About = () => {
//   return (

//   )
// }

// export default About
