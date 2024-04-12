import React from 'react';
import { FiHome, FiSearch, FiSettings, FiSkipBack, FiPlay, FiSkipForward } from "react-icons/fi";

const DoridaMusic = () => {
  return (
    <div className="dorida-music">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-icons">
          <FiHome className="icon active" />
          <FiSearch className="icon" />
          <FiSettings className="icon" />
          {/* Altri pulsanti di navigazione se necessari */}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
            <h2 className='Titolo text-white my-2 fs-3 pt-4'>Buonasera</h2>
            <div className='header-playlist'>
<div className="container">
    <div className="row">
        <div className="col col-4">
<div className='card-playlist'>
<p>prova</p>
</div>
        </div>
      
        <div className="col col-4">
<div className='card-playlist'>
<p>prova</p>
</div>
        </div>
        <div className="col col-4">
<div className='card-playlist'>
<p>prova</p>
</div>
        </div>
        

     
    </div>
</div>
            </div>
        </div>

        {/* Content Area */}
        <div className="content">
          {/* Qui inserire il contenuto principale, ad esempio le playlist */}
        </div>
      </div>

      {/* Player Bar */}
      <div className="player-bar">
        <div className="current-track">
          <div className="track-info">
            <div className="thumbnail">
              {/* Immagine del brano corrente */}
              <img src="path_to_album_cover.jpg" alt="Album cover" />
            </div>
            <div className="info">
              <span className="title">Titolo del Brano</span>
              <span className="artist">Nome dell'Artista</span>
            </div>
          </div>
        </div>
        
        <div className="player-controls">
          <button className="btn control-btn">
            <FiSkipBack className="icon" />
          </button>
          <button className="btn play-btn">
            <FiPlay className="icon" />
          </button>
          <button className="btn control-btn">
            <FiSkipForward className="icon" />
          </button>
        </div>

        <div className="track-progress">
          <input type="range" min="0" max="100" value="0" className="progress-bar" />
        </div>
      </div>
    </div>
  );
}

export default DoridaMusic;
