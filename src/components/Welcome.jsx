import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RandomQuote from "./RandomQuote";
import PropTypes from "prop-types";


const Welcome = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    ease: "easeInOut",
  };

  return (
    <motion.div
      ref={ref}
      className="welcome overflow-hidden w-full h-auto flex flex-col items-center justify-between bg-[#023047] p-6 sm:p-14"
      initial="hidden"
      animate={controls}
    >
  
      <div className="flex flex-col gap-5 sm:gap-10">
        <motion.div
          className="h-max flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.span
            className="welcome rounded-xl font-nerd items-center justify-center flex w-[80vw] lg:h-[5dvh]  sm:w-[90dvw] md:h-[5dvh] sm:h-[10dvh] bg-[#001d3d]"
            variants={itemVariants}
          >
            <span className="text-lg sm:text-xl">&gt;&gt;&nbsp;</span>
            <RandomQuote />
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

Welcome.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default Welcome;
