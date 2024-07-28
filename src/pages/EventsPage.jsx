import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../index.scss';
import Navbar from "../components/Navbar";

// Dummy Cursor component implementation
const Cursor = ({ hover, zIndex, invert }) => {
  return (
    <div
      style={{ zIndex }}
      className={`cursor ${hover ? 'hover' : ''} ${invert ? 'invert' : ''}`}
    ></div>
  );
};


const Events = () => {
  const [hover, setHover] = useState(false);
  const [invert, setInvert] = useState(false);

  const handleHoverStart = () => {
    setHover(true);
    setInvert(true);
  };

  const handleHoverEnd = () => {
    setHover(false);
    setInvert(false);
  };

  const menuTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    hover: { scale: 1.03, x: 20, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <>
      <Navbar />
      <img
        src={"/arial_view2.jpg"}
        className="absolute top-0 left-0 w-full h-full blur object-cover z-1"
        alt="Arial View"
      />
      <div className="absolute inset-0 bg-sky-100 opacity-10"></div>
      
      <Cursor hover={hover} zIndex={10000} invert={invert} />
      <motion.div
        className="w-full h-screen p-20 pt-80 relative flex flex-col gap-10 justify-center overflow-hidden "
        variants={menuTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          className="select-none eventy w-fit h-fit text-8xl absolutetext1 texty text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] font-extrabold space-y-4 font"
          whileHover="hover"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ zIndex: hover ? 10001 : "auto" }}
        >
          Events
        </motion.h1>
        <div className="w-max h-max gap-4 flex flex-col items-start justify-center">
          <Link to="/events/Upcoming">
            <motion.h1
              className="select-nonetext2 texty italic font-extrabold text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] mt-2 hover:text-white w-max h-max font-pixel text-3xl relative"
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Upcoming
            </motion.h1>
          </Link>
          <Link to="/events/ongoing">
            <motion.h1
              className="select-nonetext2 texty italic font-extrabold text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] mt-2 hover:text-white w-max h-max font-pixel text-3xl relative"
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Ongoing
            </motion.h1>
          </Link>
          <Link to="/events/past">
            <motion.h1
              className="select-nonetext2 texty italic font-extrabold text-yellow-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] mt-2 hover:text-white w-max h-max font-pixel text-3xl relative"
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Past
            </motion.h1>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Events;
