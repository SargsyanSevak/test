import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Head from "next/head";
import Image from "next/image";
const portfolio = [
  {
    step: 0,
    name: "Armstroyservice",
    url: "https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg",
  },
  {
    step: 1,
    name: "Marvel Information Portal",
    url: "https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg",
  },
  {
    step: 2,
    name: "UTL Load Board",
    url: "https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg",
  },
  {
    step: 3,
    name: "Portfolio Website",
    url: "https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg",
  },
  {
    step: 4,
    name: "Naxshun React Shop",
    url: "https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg",
  },
  {
    step: 5,
    name: "ToDo",
    url: "https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg",
  },
];
export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <section className="content">
      <Head>
        <title>My Works</title>
        <meta name="description" content="sargsyan" />
      </Head>

      <div className="container flex justify-around items-center">
        <div className="stepper h-screen w-52  hidden md:flex flex-col justify-center items-center gap-4">
          <button
            onClick={handleBack}
            disabled={activeStep === 0 ? true : false}
            className={`${activeStep === 0 ? "text-gray-400" : ""}`}
          >
            Previous
          </button>
          <div className="stepper-col bg-white w-1 h-96">
            <ul className="transition-both">
              {portfolio.map((el, i) => (
                <li
                  key={i}
                  className={`${
                    activeStep == el.step ? "bg-red-800" : "bg-white"
                  } w-1 h-16  transition-all cursor-pointer`}
                  onClick={() => setActiveStep(el.step)}
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
          <div className="title w-4/4 h-20 flex justify-center items-center">
            <p className="text-2xl md:text-4xl font-bold tracking-wide">
              {portfolio[activeStep].name}
            </p>
          </div>
          <div className="portfolio-body w-4/4 h-72 md:h-96 flex justify-center items-center overflow-hidden">
            <img
              src={portfolio[activeStep].url}
              alt={portfolio[activeStep].name}
              width={600}
              height={500}
            />
          </div>
          <div className="discover-btn  w-4/4 h-20 flex justify-center items-center">
            <Button variant="text" className="text-white btn_text">
              Discover +
            </Button>
          </div>

          <div className="reletive  w-4/4 h-40 flex justify-center items-center md:hidden pt-20">
            <div className=" w-50 flex flex-row-reverse justify-center items-center">
              <button
                onClick={handleBack}
                disabled={activeStep === 0 ? true : false}
                className={`${
                  activeStep === 0 ? "text-gray-400" : ""
                } absolute left-8 font-bold`}
              >
                Back
              </button>
              <ul className="h-50 transition-both">
                {portfolio.map((el, i) => (
                  <li
                    key={i}
                    className={`${
                      activeStep == el.step ? "bg-teal-400" : "bg-white"
                    } w-1 h-10  transition-all cursor-pointer`}
                    onClick={() => setActiveStep(el.step)}
                  ></li>
                ))}
              </ul>
              <button
                onClick={handleNext}
                disabled={activeStep === 5 ? true : false}
                className={`${
                  activeStep === 5 ? "text-gray-400" : ""
                } absolute right-8 font-bold`}
              >
                Next
              </button>
              {/* <div className="">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0 ? true : false}
                  className={`${
                    activeStep === 0 ? "text-gray-400" : ""
                  } `}
                >
                  Next
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeStep === 5 ? true : false}
                  className={`${activeStep === 5 ? "text-gray-400" : ""} `}
                >
                  Previous
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
