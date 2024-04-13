import React, { useEffect, useState } from "react";
import { FiSkipBack, FiPlay, FiSkipForward } from "react-icons/fi";
import MusicNavbar from "./MusicNavbar";
import MainContent from "./MainContent";
import Player from "./Player";
import Playlist from "./Playlist";

const DoridaMusic = () => {
  return (
    <div className="dorida-music">
      <MusicNavbar />

  
      <div className=" ">
        <MainContent />
      </div>
        <Playlist></Playlist>

  
      <Player/>
    </div>
  );
};

export default DoridaMusic;
