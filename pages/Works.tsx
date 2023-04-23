import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Carusel from "@/components/Carusel/Carusel";
const portfolio = [
  {
    step: 0,
    name: "Armstroy",
    url: "/port2.jpeg",
    href: "https://google.com",
  },
  {
    step: 1,
    name: "Marvel",
    url: "/port1.jpeg",
    href: "https://google.com",
  },
  {
    step: 2,
    name: "UTL",
    url: "/port2.jpeg",
    href: "https://google.com",
  },
  {
    step: 3,
    name: "Portfolio",
    url: "/port1.jpeg",
    href: "https://google.com",
  },
  {
    step: 4,
    name: "Naxshun",
    url: "/port2.jpeg",
    href: "https://google.com",
  },
];
export default function DotsMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const matches = useMediaQuery("(max-width:760px)");
  let slideSound: HTMLAudioElement;

  if (typeof Audio !== "undefined") {
    slideSound = new Audio("/change.mp3");
  }
  const handleNext = () => {
    slideSound.play();
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, 400);
  };

  const handleBack = () => {
    slideSound.play();
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, 400);
  };

  return (
    <section className="content">
      <Head>
        <title>My Works</title>
        <meta name="description" content="sargsyan" />
      </Head>

      <div className="row-container works w-full ">
        <div className="w-full h-full flex flex-col-reverse md:flex-row">
          <div className=" w-full h-screen md:w-3/5">
            <div className="container  h-full w-full flex flex-col-reverse md:flex-row">
              <div className=" steeper w-full h-full  md:w-2/5">
                <div className="mobile-steeper-container w-full h-full block md:hidden">
                  <div className="mobile-steeper h-1/2  flex justify-center items-center">
                    <ul className="steeper-col h-1 w-full  bg-white flex">
                      {portfolio.map((el, i) => {
                        return (
                          <li
                            key={i}
                            className={`${
                              activeStep == el.step ? "bg-teal-400" : "bg-white"
                            } w-1/5 h-1 cursor-pointer`}
                            onClick={() => {
                              slideSound.play();
                              setTimeout(() => {
                                setActiveStep(el.step);
                              }, 400);
                            }}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="steeper-btns h-1/2 flex justify-between items-start">
                    <button
                      onClick={handleBack}
                      disabled={activeStep === 0 ? true : false}
                      className={`${
                        activeStep === 0 ? "text-gray-400" : "text-white"
                      } font-bold button`}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={activeStep === 4 ? true : false}
                      className={`${
                        activeStep === 4 ? "text-gray-400" : ""
                      } font-bold button`}
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className=" w-full h-full hidden md:flex flex-col justify-center items-center gap-2">
                  <button
                    onClick={handleBack}
                    disabled={activeStep === 0 ? true : false}
                    className={`${activeStep === 0 ? "text-gray-400" : ""}`}
                  >
                    Previous
                  </button>
                  <div className="h-3/5">
                    <ul className="stepper-col bg-white w-1 h-full">
                      {portfolio.map((el, i) => (
                        <li
                          key={i}
                          className={`${
                            activeStep == el.step ? "bg-teal-400" : "bg-white"
                          } w-1 h-1/5 cursor-pointer hover:bg-teal-200 `}
                          onClick={() => {
                            slideSound.play();
                            setTimeout(() => {
                              setActiveStep(el.step);
                            }, 400);
                          }}
                        ></li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={activeStep === 4 ? true : false}
                    className={`${activeStep === 4 ? "text-gray-400" : ""}`}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="portfolio-description w-full h-full flex flex-col justify-center items-start gap-6">
                <span className="text-teal-400 font-bold ">
                  0{portfolio[activeStep].step + 1}
                </span>
                <h2 className="text-white font-bold text-4xl leading-8 bruno-style ">
                  {" "}
                  {portfolio[activeStep].name}
                </h2>
                <Link href={portfolio[activeStep].href || {}} target="_blank">
                  <button className="button"> Discover +</button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-full h-screen md:w-4/5">
            <div className=" w-full flex justify-center h-full md:w-4/5">
              <motion.div
                className="reletive flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <Carusel activeStep={activeStep} portfolio={portfolio} setActiveStep={setActiveStep}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
