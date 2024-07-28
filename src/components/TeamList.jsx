import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TeamList = ({ setHover }) => {
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const teams = [
    { name: "Technical", color: "bg-[#caf0f8]", link: "/technical" },
    { name: "Marketing", color: "bg-[#ade8f4]", link: "/marketing" },
    { name: "Operation", color: "bg-[#90e0ef]", link: "/operation" },
    { name: "Working", color: "bg-[#48cae4]", link: "/working" },
    { name: "Designing", color: "bg-[#00b4d8] text-white hover:text-black", link: "/designing" },
    { name: "Editorial", color: "bg-[#0096c7] text-white hover:text-black", link: "/editorial" },
    { name: "Content Creation", color: "bg-[#0077b6] text-white hover:text-black", link: "/content-creation" },
    { name: "Treasurer", color: "bg-[#023e8a] text-white hover:text-black", link: "/treasurer" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 sm:p-10 lg:p-20">
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {teams.map((team, index) => (
          <Link
            key={index}
            to={team.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`team-item ${team.color} p-4 sm:p-6 lg:p-8 text-center flex items-center justify-center transition-transform transform hover:scale-105 rounded-lg`}
            style={{ textDecoration: 'none' }}
          >
            <div className="block text-center font-bold text-base sm:text-lg lg:text-xl">
              {team.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

TeamList.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default TeamList;
