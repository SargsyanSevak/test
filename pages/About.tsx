
import { motion } from "framer-motion";

export default function About() {
  return (
        <motion.div
      className=" ml-64 flex justify-center items-center w-28 h-8 bg-red-400 rounded-sm"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      Button
    </motion.div>

    
  );
}
