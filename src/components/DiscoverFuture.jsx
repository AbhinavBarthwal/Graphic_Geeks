import React from "react";
import { motion } from "framer-motion";
import "../index.scss";

const DiscoverFuture = () => {
  const text = "Graphic Geeks";
  const smallText = "Bits to Brilliance";

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        damping: 100,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="relative h-screen future">
      <img
        src={"/arial_view2.jpg"}
        className="absolute top-0 left-0 w-full h-full blur-sm object-cover z-1"
        alt="Arial View"
      />
      <div className="absolute inset-0 bg-sky-100 opacity-10"></div> {/* Semi-transparent sky blue overlay */}
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <motion.div
          className="w-full flex flex-col overflow-hidden text-center"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <motion.div className="w-full mb-4 flex flex-col items-center">
            <motion.h1 className="text1 texty text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] font-extrabold space-y-4">
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={itemVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 className="text2 texty italic font-extrabold text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] mt-2">
              {smallText.split("").map((char, index) => (
                <motion.span key={index} variants={itemVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverFuture;
