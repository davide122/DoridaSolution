import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useViewportVisibility from '../../Hooks/useViewportVisibility';

const SectionWorld = () => {
  const sectionRef = useRef(null);
  const isVisible = useViewportVisibility(sectionRef, 0.1); // Assumi una soglia per migliorare la rilevazione
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const startAnimate = window.innerHeight - sectionRect.top; // Inizia l'animazione quando la sezione entra nel viewport
        setOffsetY(Math.max(0, startAnimate));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Assicurati che il secondo titolo inizi da una posizione non visibile e si muova verso l'alto
  const secondTitleVariants = {
    hidden: { y: 200 }, // Inizia più in basso
    visible: { y: offsetY > 100 ? -100 : 0 } // Muovi verso l'alto al momento dello scroll
  };

  return (
    <div ref={sectionRef} style={{ height: '150vh', position: 'relative' }}>
      <motion.h1
        initial="hidden"
        animate="visible"
        className="d-flex justify-content-center align-items-center"
        style={{ position: 'sticky', top: '50vh' }}> {/* Modifica '20vh' come preferisci */}
        Titolo 1
      </motion.h1>
    
      
    </div>
  );
};

export default SectionWorld;
