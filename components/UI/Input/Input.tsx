import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useAnimation, transform } from "framer-motion";


const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

 const MyInput = ({maxLength,placeholder}:any) => {
  const [value, setValue] = useState("");
  const charactersRemaining = maxLength - value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > 6) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80
      }
    });
  }, [value.length]);

  return (
    <div className="input-container">
      <input value={value} onChange={e => setValue(e.target.value)} 
      placeholder={placeholder}/>
      
      <div>
        <motion.span
          animate={controls}
          style={{ color: mapRemainingToColor(charactersRemaining) }}
        >
          {charactersRemaining}
        </motion.span>
      </div>
    </div>
  );
};

export default MyInput