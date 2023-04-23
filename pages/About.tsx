import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const skillsIcons = [
  "/html.png",
  "/css.png",
  "/js.png",
  "/react.png",
  "/nextjs.png",
  "/tailwind.png",
  "/matrial.png",
  "/mongodb_origina.png",
  '/github.png',
  '/git1.png'
];
// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function About() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", background: "inherit" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "inherit" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "inherit" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("")} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img src={url('server')} style={{width:'600px'}}/> */}
          <div
            style={{
              width: "900px",
              minHeight: "300px",
              background: "gray",
              borderRadius: "20px",
              marginLeft: "90px",
            }}
            className="flex justify-center items-center"
          >
            <p className="text-white-600 font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur numquam sit cum architecto eum id soluta quis a
              corrupti iste maiores quae harum obcaecati ducimus dolor
              accusamus, delectus quasi rerum libero perspiciatis quaerat?
              Aliquam quibusdam quidem vitae minima. Excepturi consectetur ex
              voluptates voluptatibus praesentium odio labore reiciendis quae
              culpa non?
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="p-4 ml-0 md:p-0 md:ml-10"
        >
          <h4 className="text-white text-6xl font-bold spacing-4 py-8">
            Skills
          </h4>
          <div
            style={{
              background: "black",
              height: "auto",
              borderRadius: "30px",
            }}
            className="w-full md:w-2/4"
          >
            <div
              className=" h-14 bg-gray-300 flex items-center gap-2 pl-4"
              style={{ borderRadius: "30px 30px 0px 0px" }}
            >
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              <div className="w-6 h-6 rounded-full bg-teal-400"></div>
            </div>
            <div className="min-h-96 relative flex justify-around items-center flex-wrap">
              {skillsIcons.map((el, i) => {
                return (
                  <div key={i} className="w-1/4 h-36 flex justify-center items-center">
                     <img src={el} width={50} height={50} />
                  </div>
               
                );
              })}
              <div className="languages w-1/2"></div>
              <span className="font-bold text-4xl absolute bottom-4 left-8">
                &gt;
              </span>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
