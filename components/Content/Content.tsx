import React from "react";
import SvgImage from "../Bg/SvgImage";
import Button from "@mui/material/Button";

const Content = () => {
  return (
    <div className="content container h-screen flex ">
      <div className="container h-4/4 flex flex-col justify-center items-start gap-6 text-white anim">
        <span className="text-7xl font-bold">Hi there</span>
        <span className="text-7xl font-bold">
          I am <span className="text-teal-400">Sevak</span>{" "}
        </span>
        <p>
          A well experienced UI/UX Designer and Web Developer. I enjoy Creating
          Delightful, Human-Centered & Unique Digital Experiences.
        </p>
        <div className="btn-group flex flex-row anim">
          <Button variant="text" className="text-white btn_text">
            Our Work
          </Button>
          <Button variant="text" className="text-white btn_text">
            About Us
          </Button>
        </div>
      </div>
      <div className="item container h-4/4 hidden md:flex flex-col justify-center items-end anim">
        <SvgImage />
      </div>
    </div>
  );
};

export default Content;
