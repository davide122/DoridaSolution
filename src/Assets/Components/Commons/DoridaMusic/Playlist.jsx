import React from "react";
import fotoprova from "../Image/Hip hop.png";
import "./Css/playlist.css"
const playlists = [
  { id: 1, name: "Rap", image: fotoprova },
  { id: 2, name: "Pop", image: fotoprova },
  { id: 3, name: "Rock", image: fotoprova },
  { id: 4, name: "Jazz", image: fotoprova },

];

const Playlist = () => {
  return (
    <div>
      <div className="carousel-container my-2">
      <h3 className="text-white  ms-md-4 ms-3 text-start  ">Scopri le nostre Playlist</h3>
        <div className="carousel ms-3">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="playlist-card">
              <img src={playlist.image} alt="" className="img-fluid" />
              <p className="fs-4">{playlist.name}</p>
              {/* Additional information if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
