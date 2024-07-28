import { motion } from "framer-motion";
import Card from "./Card";
import "../index.scss";

const Coordinators = () => {
  return (
    <div className="w-full h-auto flex flex-col bg-stone-100 items-center justify-between px-4 py-10 ">
      <motion.h1
        className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel sm:mt-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.76 }}
      >
        Meet Our Coordinators
      </motion.h1>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10 ">
        <Card
        
          index={1}
          title="Dr Anupum Singh"
          about="(Associate Prof)"
          texture="/anupumsir.png"
        
        />
        <Card
          index={0}
          title="Dr Teekam Singh"
          about="(Associate Prof)"
          texture="/teekamsir.jpg"
        />
        <Card
          index={2}
          title="Mr Sidhant Thapliyal"
          about="(Assistant Prof)"
          texture="/sidanthsir.png"
        />
      </div>
    </div>
  );
};

export default Coordinators;