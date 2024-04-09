import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Import delle immagini (esempi)
import Dorin from "../Commons/Image/Fotonostre/dorin.png";
import Davide from "../Commons/Image/Fotonostre/davide.png";
import Rino from "../Commons/Image/Fotonostre/rino1.png";

const images = [Dorin, Davide, Rino];
const texts = [
  "Io porto più clienti per la tua azienda, da 0 a 100 con noi!",
  "Io costruisco i tuoi sistemi personalizzati, dagli ecommerce fino a sistemi gestionali solo per te!",
  "Io sono la parte creativa, Creo le tue melodie, i tuoi video, e porto la tua storia in giro per il mondo."
];

const VideoPresentazione = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia slide ogni 5 secondi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid" style={{ overflow: 'hidden' }}>
      <div className="row">
        <AnimatePresence mode="wait">
          {isMobile ? (
            // Mobile view: Mostra una slide alla volta
            <motion.div
              key={currentSlide}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1 }}
              className="col-12 p-0"
            >
              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-100"
                style={{ maxHeight: '100vh', objectFit: 'cover' }}
              />
              <h2 className="text-center text-white">{texts[currentSlide]}</h2>
            </motion.div>
          ) : (
            // Desktop view: Mostra tutte e tre le immagini
            images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="col-md-4 p-0"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-100"
                  style={{ maxHeight: '100vh', objectFit: 'cover' }}
                />
                <h2 className="text-center text-white">{texts[index]}</h2>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoPresentazione;
