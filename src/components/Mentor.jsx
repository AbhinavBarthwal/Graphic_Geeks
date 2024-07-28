import { motion } from "framer-motion";
import Card from "./Card";
const Mentor = () => {
  return (
    <div className="w-full bg-stone-100 h-80full">
      <div className=" flex flex-col sm:p-6 p-20 items-center gap-10">
        <motion.h1
          className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel sm:mt-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.76 }}
        >
          Meet Our Mentor
        </motion.h1>
        <Card
          index={1}
          title="Dr. Devesh Pratap Singh"
          about="(HOD)"
          texture="/deveshsir.png"
        />
        
      </div>
    </div>
  );
};

export default Mentor;
