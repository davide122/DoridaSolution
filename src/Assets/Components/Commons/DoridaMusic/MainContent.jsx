import immagineClear from "../Image/edsherranpeople.png"
import imageblur from "../Image/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.large_2x.jpg"

import marcomengoniclear from "../Image/marcomengoni.png"
import marcomengoniblur from "../Image/mengoniblurr.jpg"

import sferaclear from "../Image/IMAGEMUSIC/TOCLEAR.png"
import sferablur from "../Image/IMAGEMUSIC/toblur.webp"



import { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import "./Css/Maincontent.css"

const immagini = [
  { blurred: imageblur, clear: immagineClear },
  { blurred: marcomengoniblur, clear: marcomengoniclear },
  { blurred: sferablur, clear: sferaclear },
];
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
    <div className="image-music container-fluid ">
      <div className="shadow">
        </div>
      <img
        src={immagini[currentImage].blurred}
        alt=""
        className="blurra img-fullscreen  "
      />

      <img
        src={immagini[currentImage].clear}
        alt=""
        className="img-sovra img-fullscreen "
      />
      <div className="blur-overlay"></div>
      <div className="text-overlay">
        <p className="fs-5 text-primary my-0">Radio</p>
        <h1 className="text-white text-start fw  ">
          La mia colonna...
        </h1>
        <p className="fs-6">Another text</p>
        <button className="Call-Button my-0 d-md-block d-none " id="callnone" onClick={playMusic}>
          <FiPlay className="player-icon play" />
          Riproduci
        </button>
        <button className="Call-Button my-0 d-md-none d-block rotondo d-none " id="callnone" onClick={playMusic}>
          <FiPlay className="text-ce"/>
        
        </button>
      </div>
    </div>
  );
};
export default MainContent;
