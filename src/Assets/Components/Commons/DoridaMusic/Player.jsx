import { FiPlay, FiSkipBack, FiSkipForward } from "react-icons/fi";
import "./Css/Player.css"
const Player = () => {
  return (
    <div className="player-bar fixed-bottom bg-dark d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
          <FiSkipBack className="player-icon" />
          <FiPlay className="player-icon play" />
          <FiSkipForward className="player-icon" />
        </div>
      </div>
  )
};
export default Player