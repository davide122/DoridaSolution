import immagine from "../Image/prova.webp";
import immagine2 from "../Image/prova.jpeg";
import immagine3 from "../Image/prova.webp";
import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import "./Css/Maincontent.css"

const immagini = [immagine, immagine2, immagine3];
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
        <p className="Titolo fs-4 my-0 fw">Prova1</p>
        <h1 className="Titolo text-white text-start fw my-3">
          La mia colonna sonora
        </h1>
        <p className="fw fs-5">Another text</p>
        <button className="Call-Button my-0 " onClick={playMusic}>
          <FiPlay className="player-icon play" />
          Riproduci
        </button>
      </div>
    </div>
  );
};
export default MainContent;
