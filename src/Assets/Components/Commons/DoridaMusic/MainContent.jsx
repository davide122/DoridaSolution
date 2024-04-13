import immagine from "../Image/prova.webp";
import immagine2 from "../Image/prova.jpeg";
import immagine3 from "../Image/prova.webp";
import immagine4 from "../Image/salvatore-paky-cover-ts1647049432.webp";
import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import "./Css/Maincontent.css"

const immagini = [immagine, immagine2, immagine3, immagine4];
const MainContent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % immagini.length);
    }, 3000); // Cambia immagine ogni 3 secondi

    return () => clearInterval(intervalId);
  }, []);

  const playMusic = () => {
    // Qui metterai il codice per riprodurre la musica
    console.log("Play music");
  };

  return (
    <div className="image-music">
      <img
        src={immagini[currentImage]}
        alt=""
        className="blurra img-fullscreen "
      />
      <img
        src={immagini[currentImage]}
        alt=""
        className="img-sovra img-fullscreen "
      />
      <div className="text-overlay">
        <p className="fs-6 text-primary my-0 fw">Radio</p>
        <h1 className="text-white text-start fw ">
          La mia colonna...
        </h1>
        <p className="fs-6">Another text</p>
        <button className="Call-Button my-0 d-md-block d-none " onClick={playMusic}>
          <FiPlay className="player-icon play" />
          Riproduci
        </button>
        <button className="Call-Button my-0 d-md-none d-block rotondo " onClick={playMusic}>
          <FiPlay className="text-ce" />
        
        </button>
      </div>
    </div>
  );
};
export default MainContent;
