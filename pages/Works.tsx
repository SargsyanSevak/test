import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import DiscoverBtn from "@/components/UI/DiscoverBtn/DiscoverBtn";
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

      <div className="container ">
        <div className="  h-screen flex flex-col-reverse justify-center  md:flex-row md:justify-center ">
          <div className="left  w-4/4 h-1/4 flex flex-col-reverse md:w-2/4 md:h-screen md:flex-row">
            <div className="stepper  w-4/4 h-2/4 flex justify-center items-center md:w-1/4 md:h-screen">
              <div className="stepper-item hidden md:flex flex-col justify-center items-center gap-2 ">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0 ? true : false}
                  className={`${activeStep === 0 ? "text-gray-400" : ""}`}
                >
                  Previous
                </button>
                <div className="stepper-col bg-white w-1 ">
                  <ul>
                    {portfolio.map((el, i) => (
                      <li
                        key={i}
                        className={`${
                          activeStep == el.step ? "bg-teal-400" : "bg-white"
                        } w-1 h-16 cursor-pointer hover:bg-teal-200 `}
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

              <div className="steeper-col w-screen h-4/4 flex flex-col justify-between gap-4 md:hidden">
                <div className="steeper-col h-10 w-4/4 flex justify-center items-center px-4">
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
                <div className="steeper-btns  h-10 w-4/4 flex justify-between items-center p-4">
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
            </div>
            <div className="w-full stepper-description pl-4 flex flex-col gap-4  justify-center items-start md:w-3/4 md:h-screen md:gap-8 md:pl-0">
              <span className="text-teal-400 font-bold ">
                0{portfolio[activeStep].step + 1}
              </span>
              <h2 className="text-white font-bold text-4xl leading-8 bruno-style">
                {" "}
                {portfolio[activeStep].name}
              </h2>
              <Link href={portfolio[activeStep].href || {}} target="_blank">
                <button className="button"> Discover +</button>
              </Link>
            </div>
          </div>

          <div className="right  w-4/4 h-2/4 flex justify-center items-center md:w-3/4 md:h-screen">
            <motion.div
              className="reletive flex justify-center items-center px-4"
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
              <Carusel activeStep={activeStep} portfolio={portfolio} />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="container flex justify-around items-center anim">
        <div className="stepper h-screen w-52  hidden md:flex flex-col justify-center items-center gap-4 ">
          <button
            onClick={handleBack}
            disabled={activeStep === 0 ? true : false}
            className={`${activeStep === 0 ? "text-gray-400" : ""}`}
          >
            Previous
          </button>
          <div className="stepper-col bg-white w-1 h-96">
            <ul>
              {portfolio.map((el, i) => (
                <li
                  key={i}
                  className={`${
                    activeStep == el.step ? "bg-teal-400" : "bg-white"
                  } w-1 h-16 cursor-pointer hover:bg-teal-200 `}
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
            disabled={activeStep === 5 ? true : false}
            className={`${activeStep === 5 ? "text-gray-400" : ""}`}
          >
            Next
          </button>
        </div>
        <div className="portfolio w-screen  md:w-3/4 h-screen  flex flex-col justify-center">
          <div className="title w-4/4 h-20 flex justify-center items-center ">
            <p className="text-2xl md:text-4xl font-bold tracking-wide">
              <span className="text-teal-400 pr-4 text-lg">
                0{portfolio[activeStep].step + 1}.
              </span>
              {portfolio[activeStep].name}
            </p>
          </div>
          <div className="portfolio-body w-4/4 h-72 md:h-96 flex justify-center items-center overflow-hidden ">
            <motion.div
              className="reletive flex justify-center items-center "
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
              <img
                src={portfolio[activeStep].url}
                alt={portfolio[activeStep].name}
                width={600}
                height={500}
              />
            </motion.div>
          </div>
          <div className="discover-btn  w-4/4 h-28 flex justify-center items-center ">
            {matches ? (
              <Link href={portfolio[activeStep].href || {}} target="_blank">
                <button className="button"> Discover +</button>
              </Link>
            ) : (
              <Link href={portfolio[activeStep].href || {}} target="_blank">
                <DiscoverBtn />
              </Link>
            )}
          </div>

          <div className="reletive  w-4/4 h-40 flex justify-center items-center md:hidden pt-20 ">
            <div className=" w-50 flex flex-row-reverse justify-center items-center">
              <button
                onClick={handleBack}
                disabled={activeStep === 0 ? true : false}
                className={`${
                  activeStep === 0 ? "text-gray-400" : ""
                } absolute left-8 font-bold button`}
              >
                Back
              </button>
              <ul className="h-50 transition-both">
                {portfolio.map((el, i) => (
                  <li
                    key={i}
                    className={`${
                      activeStep == el.step ? "bg-teal-400" : "bg-white"
                    } w-1 h-10  transition-all cursor-pointer hover:bg-teal-200`}
                    onClick={() => {
                      slideSound.play();
                      setTimeout(() => {
                        setActiveStep(el.step);
                      }, 400);
                    }}
                  ></li>
                ))}
              </ul>
              <button
                onClick={handleNext}
                disabled={activeStep === 5 ? true : false}
                className={`${
                  activeStep === 5 ? "text-gray-400" : ""
                } absolute right-8 font-bold button`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
