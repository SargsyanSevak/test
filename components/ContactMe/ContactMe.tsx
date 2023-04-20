import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
const steps = [
  {
    label: "SEND A MESSAGE IN A BOTTLE",
    description: (
      <textarea
        placeholder="Type your message here ..."
        className="w-60 h-20 border-y-2 border-x-2  text-sm  outline-none bg-inherit px-2 py-2"
      />
    ),
  },
  {
    label: "WE JUST NEED YOUR FULL NAME...",
    description: (
      <input
        type="text"
        placeholder="Type your full name here ..."
        className="w-60 text-sm px-4 py-4 outline-none bg-inherit border-y-2 border-x-2"
      />
    ),
  },
  {
    label: "AND YOUR EMAIL ADDRESS.",
    description: (
      <input
        type="text"
        placeholder="Type your e-mail address here ..."
        className="w-60 text-sm px-4 py-4 outline-none bg-inherit border-y-2 border-x-2"
      />
    ),
  },
];

const ContactMe = () => {
  const [ownWidth, setOwnWidth] = useState(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <div className="contact-me-container">
        <div className="open fixed right-4 top-3 md:right-10">
          <button className="button " onClick={() => setOwnWidth(true)}>Contact</button>
        </div>
      </div>

      <div
        className={`bg-white contact-me h-screen fixed right-0 top-0 bottom-0 z-50  ${
          ownWidth ? "w-80" : "hidden"
        }`}
      >
        <div className="contact_title h-1/6 pt-4 pl-2 absolute">
          <Button
            variant="text"
            color="success"
            startIcon={<CloseIcon />}
            className="text-black border-x-1 border-y-1 bg-inherit  border-x-white border-y-white btn_text"
            onClick={() => setOwnWidth(false)}
          >
            Close
          </Button>
        </div>
        <div className="contact-logo h-1/2 flex flex-col justify-evenly items-center">
          <Image src="/logo.png" alt="" width={150} height={150} />
          <h4 className="text-xl text-teal-400 font-bold">
            Have you any <span className="text-black"> questions?</span>
          </h4>
          <h6 className="font-bold text-black">
            I am at your <span className="text-teal-400">services</span>{" "}
          </h6>
        </div>
        <div
          className={`contact-input h-1/2 flex flex-col justify-start md:justify-evenly items-center gap-6 md:gap-0`}
        >
          <h3 className="font-bold text-black-500 py-8">
            {steps[activeStep].label}
          </h3>
          <div>{steps[activeStep].description}</div>
          <MobileStepper
            className="gap-12"
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                color="success"
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
              color="success"
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
