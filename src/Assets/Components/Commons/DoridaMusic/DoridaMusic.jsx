import React, { useEffect, useState } from "react";
import { FiSkipBack, FiPlay, FiSkipForward } from "react-icons/fi";
import "./music.css"; // Assicurati di avere questo file CSS nella tua directory
import MusicNavbar from "./MusicNavbar";
import MainContent from "./MainContent";
import Player from "./Player";

const DoridaMusic = () => {
  return (
    <div className="dorida-music">
      <MusicNavbar />

  
      <div className="vh-100 ">
        <MainContent />
      </div>

  
      <Player/>
    </div>
  );
};

export default DoridaMusic;
