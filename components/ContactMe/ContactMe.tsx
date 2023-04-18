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
      <input
        type="text"
        placeholder="Type your message here ..."
        className="w-60 text-sm px-4 py-4 outline-none bg-inherit"
      />
    ),
  },
  {
    label: "WE JUST NEED YOUR FULL NAME...",
    description: (
      <input
        type="text"
        placeholder="Type your full name here ..."
        className="w-60 text-sm px-4 py-4 outline-none bg-inherit"
      />
    ),
  },
  {
    label: "AND YOUR EMAIL ADDRESS.",
    description: (
      <input
        type="text"
        placeholder="Type your e-mail address here ..."
        className="w-60 text-sm px-4 py-4 outline-none bg-inherit"
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
        <div className="open fixed right-4 top-4 md:right-10">
          <Button
            variant="text"
            startIcon={<CallIcon />}
            className="text-white btn_text"
            onClick={() => setOwnWidth(true)}
          >
            Contact
          </Button>
        </div>
      </div>

      <div 
       className={`bg-yellow-50 contact-me h-screen fixed right-0 top-0 bottom-0 z-50 ${
        ownWidth ? "w-70" : "hidden"
      }`}
      >
        <div className="contact_title  h-1/6 pt-4 pl-2">
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
        <div className="contact-logo  h-1/3 flex flex-col justify-evenly items-center">
          <Image src="/main-logo.png" alt="" width={80} height={80} />
          <h4 className="text-lg text-orange-400">Have you any questions?</h4>
          <h6>Im at your services</h6>
        </div>
        <div className="contact-input  h-1/2 flex flex-col justify-center items-center">
          <h3 className="text-bold text-blue-500">{steps[activeStep].label}</h3>
          <div>{steps[activeStep].description}</div>
          <MobileStepper
            className="bg-inherit gap-12"
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
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
      {/* <div
        className={`bg-yellow-50 contact-me h-screen fixed right-0 top-0 bottom-0 z-50 ${
          ownWidth ? "w-80" : "hidden"
        }`}
      >
        <Button
          variant="text"
          color="success"
          startIcon={<CloseIcon />}
          className="text-black border-x-1 border-y-1 bg-inherit  border-x-white border-y-white btn_text pt-4 pl-2"
          onClick={() => setOwnWidth(false)}
        >
          Close
        </Button>

        <div className="contact-body py-8 absolute">
          <div className="contact-description flex justify-center items-center flex-col gap-10">
            <Image src="/main-logo.png" alt="" width={80} height={80} />
            <h4 className="text-lg text-orange-400">Have you any questions?</h4>
            <h6>Im at your services</h6>
          </div>
          <div className="input-form">
            <h3 className="text-bold text-blue-500">
              {steps[activeStep].label}
            </h3>
            <div>{steps[activeStep].description}</div>
          

          <MobileStepper
            className="bg-inherit gap-12"
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
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
      </div> */}
    </>
  );
};

export default ContactMe;
