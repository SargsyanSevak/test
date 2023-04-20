import React from "react";
import SvgImage from "../Bg/SvgImage";
import Button from "@mui/material/Button";
import Link from 'next/link'
const Content = () => {
  return (
    <div className="content container h-screen flex ">
      <div className="container h-4/4 flex flex-col justify-center items-start gap-6 text-white anim ">
        <span className="text-7xl font-bold pl-2 md:pl-0">Hi there</span>
        <span className="text-7xl font-bold pl-2 md:pl-0">
          I am <span className="text-teal-400">Sevak</span>{" "}
        </span>
        <p className="span_group pl-2 md:pl-0">
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
        <div className="btn-group flex flex-row anim gap-4 pl-2 md:pl-0">
          <Link href={'/Works'}>
             <button className="button">Our Works</button>
          </Link>
         <Link href={'/About'}>
           <button className="button">About Us</button>
         </Link>
        </div>
      </div>
      <div className="item container h-4/4 hidden md:flex flex-col justify-center items-end anim">
        <SvgImage />
      </div>
    </div>
  );
};

export default Content;
