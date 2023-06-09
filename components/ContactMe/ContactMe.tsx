import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import MyInput from "../UI/Input/Input";
import TextArea from "../UI/TextArea/TextArea";

const steps = [
  {
    label: ["SEND A MESSAGE", "IN A BOTTLE"],
    description: (
      <TextArea maxLength="200" placeholder="Type your message here..." />
    ),
  },
  {
    label: ["WE JUST NEED YOUR", "FULL NAME"],
    description: (
      <MyInput maxLength={30} placeholder={"Type your full name here..."} />
    ),
  },
  {
    label: ["AND YOUR", "EMAIL ADDRESS"],
    description: (
      <MyInput
        maxLength={30}
        placeholder={"Type your e-mail address here..."}
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
      <div className="contact-me-container ">
        <div className="open fixed right-4 top-4 z-40 md:right-10">
          <button className="button " onClick={() => setOwnWidth(true)}>
            Contact
          </button>
        </div>
      </div>

      <div
        className={`bg-white contact-me h-screen fixed right-0 top-0 bottom-0 z-40  ${
          ownWidth ? "w-80" : "hidden"
        }`}
      >
        <div className="contact_title h-1/6 pt-4 pl-2 absolute ">
          <span
            className="text-white font-bold transition-all cursor-pointer ml-2 hover:text-teal-400 "
            onClick={() => setOwnWidth(false)}
          >
            X
          </span>
        </div>
        <div className="contact-logo h-1/2 flex flex-col justify-evenly items-center">
          <Image src="/logo.png" alt="" width={150} height={150} />
          <h4 className="text-xl text-white font-bold">
            Have you any <span className="text-teal-400"> questions?</span>
          </h4>
          <h6 className="font-bold text-white">
            I&rsquo;m at your <span className="text-teal-400">services</span>{" "}
          </h6>
        </div>
        <div
          className={`contact-input h-1/2 flex flex-col justify-start md:justify-evenly items-center gap-6 md:gap-0`}
        >
          <h3 className="font-bold text-white py-8">
            <span>{steps[activeStep].label[0]}</span>
            <span className="text-teal-400 pl-2">
              {steps[activeStep].label[1]}
            </span>
          </h3>
          <div>{steps[activeStep].description}</div>
          <MobileStepper
            className="gap-12 rounded-xl"
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
