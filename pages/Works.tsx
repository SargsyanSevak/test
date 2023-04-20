import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Head from "next/head";
import Image from 'next/image'
const portfolio = [
  {
    name:'Armstroyservice',
    url:'https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg'
  },
  {
    name:'Marvel Information Portal',
    url:'https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg'
  },
  {
    name:'UTL Load Board',
    url:'https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg'
  },
  {
    name:'Portfolio Website',
    url:'https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg'
  },
  {
    name:'Naxshun React Shop',
    url:'https://chicago.aiga.org/wp-content/cache/ikit/image_resize/54c90e577c0897cb924e65632404bf0a/8761d09c20ef1c2ec4b2c33ae9a07231/fc5a120561408f41c104ea1d46d08ad6-1600x.jpg'
  },
  {
    name:'ToDo',
    url:'https://pbs.twimg.com/media/FoeMW74WAAQVMtM.jpg'
  }
]
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

      <div className="container flex justify-between items-center anim">
        <MobileStepper
          className="bg-inherit h-screen hidden md:flex flex-col w-20 justify-evenly items-center text-white"
          variant="dots"
          color="success"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
              className=' text-white'
            >
              
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
              next
            </Button>
          }
          backButton={
            <Button
            className=" text-white"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              previous
            </Button>
          }
        />
        <div className="portfolio w-screen md:w-3/4 h-screen  flex flex-col justify-center">
          <div className="title  w-4/4 h-20 flex justify-center items-center">
            <p className="text-2xl font-bold tracking-wide">{portfolio[activeStep].name}</p>
          </div>
          <div className="portfolio-body  w-4/4 h-2/4 flex justify-center items-center overflow-hidden">
            <img src={portfolio[activeStep].url} alt={portfolio[activeStep].name}width={600} height={500} />
          </div>
          <div className="discover-btn w-4/4 h-20 flex justify-center items-center">
          <Button variant="text" className="text-white btn_text">
            Discover +
          </Button>
          </div>
          <div className="w-4/4 h-20 flex justify-center items-center md:hidden">
          <MobileStepper
          className="bg-inherit h-screen flex md:hidden flex-col w-20 justify-evenly items-center text-white"
          variant="dots"
          steps={6}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
              className=' text-white'
            >
              
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
              next
            </Button>
          }
          backButton={
            <Button
            className=' text-white'
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              previous
            </Button>
          }
        />
          </div>
        </div>
      </div>
    </section>
  );
}
