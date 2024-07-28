// src/components/TeamRender.jsx
import React from 'react';
import TeamList from './TeamList'; // Correct path to TeamList
import Navbar from '../components/Navbar'; // Correct path to Navbar

const TeamRender = () => {
  return (
    <div lassName="w-full h-full flex flex-col overflow-hidden">
      <img
        src={"/arial_view2.jpg"}
        className="absolute top-0 left-0 w-full h-full blur-sm object-cover z-1"
        alt="Arial View"
      />
      <div className="absolute inset-0 bg-sky-100 opacity-10"></div>
      <div className="relative z-20">
        <TeamList />
        <Navbar />
      </div>
    </div>
  );
};

export default TeamRender;
