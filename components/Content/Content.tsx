import React from "react";
import SvgImage from "../Bg/SvgImage";
import Button from "@mui/material/Button";

const Content = () => {
  return (
    <div className="content container h-screen flex ">
      <div className="container h-4/4 flex flex-col justify-center items-start gap-6 text-white anim ">
        <span className="text-7xl font-bold">Hi there</span>
        <span className="text-7xl font-bold">
          I am <span className="text-teal-400">Sevak</span>{" "}
        </span>
        <p className="span_group">
          <span>A well</span>
          <span> experienced </span>
          <span> UI/UX Designer</span>
          <span> and</span>
          <span> Web Developer</span>
          <span>.</span>
          <span> I</span>
          <span> enjoy </span>
          <span> Creating</span>
          <span>Delightful, </span>
          <span>Human-Centered </span>
          <span>& </span>
          <span>Unique </span>
          <span>Digital </span>
          <span>Experiences.</span>
          <span></span>
          <span></span>
          <span></span>
             
          
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
