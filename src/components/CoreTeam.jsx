import { motion } from "framer-motion";
import "../index.scss";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoreTeam = () => {
  return (
    <div className="core-team-container w-full h-auto flex flex-col items-center bg-sky-950 px-4 py-10 sm:px-10 sm:py-10 lg:p-40">
      <motion.div
        className="h-max w-full flex items-center justify-center flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-8xl text-[#fdf0d5] font-serif p-4 sm:p-14 text-center no-underline hover:underline transition-all duration-500">
          Meet our core Team
        </h1>
      </motion.div>
      <div className="w-full h-full">
        <div className="presi w-full h-full flex flex-col sm:flex-row items-center justify-evenly gap-10 sm:gap-10">
          {teamMembers1.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-member flex flex-col gap-1 items-center justify-center text-sm font-nerd p-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white text-center">
                {member.name}
              </h1>
              <h1 className="text-md sm:text-lg text-red-500 text-center">
                ({member.position})
              </h1>
              <div className="flex space-x-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                <a
                  href={member.gmail}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faGoogle} size="1x" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers1 = [
  {
    name: "Shakshat Jain",
    position: "President",
    image: "/shakshatjain.jpg",
    linkedin: "https://www.linkedin.com/in/shakshatjain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gmail: "mailto:220211173@geu.ac.in",
  },
  {
    name: "Aniruddh Singh",
    position: "Vice President",
    image: "/anirudh.jpg",
    linkedin: "https://www.linkedin.com/in/aniruddh-singh-8b3ba2263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gmail: "mailto:22021572@geu.ac.in",
  },
  {
    name: "Shauryaman Singh Taragi",
    position: "Vice President",
    image: "/shauraman.jpg",
    linkedin: "https://www.linkedin.com/in/shauryaman-singh-taragi-b57305250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gmail: "mailto:220211097@geu.ac.in",
  },
];

export default CoreTeam;
