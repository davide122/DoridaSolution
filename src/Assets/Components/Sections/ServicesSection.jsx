import React, { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import hand from "../Commons/video/Manomigliorata.mp4";
import useViewportVisibility from '../../Hooks/useViewportVisibility';
import { motion } from 'framer-motion';
import Palla from "../Commons/video/Palla.mp4";
import { throttle } from 'lodash'; // Assicurati di avere lodash installato

const ServicesSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isVisible = useViewportVisibility(sectionRef);
  const [videoDuration, setVideoDuration] = useState(9); // Preset per la durata del video

  const textVariants = {
    visible: { color: "#EC6AFF", transition: { duration: 0.7 } },
    hidden: { color: "#FFFFFF" }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Imposta la durata del video non appena è disponibile
      video.addEventListener('loadedmetadata', () => {
        setVideoDuration(video.duration || 9); // Aggiorna la durata del video
      });
    }
  }, []);

  const smoothScrollVideo = (targetTime) => {
    const video = videoRef.current;
    if (video) {
      // Imposta il currentTime del video basato sul tempo target calcolato
      video.currentTime = Math.min(Math.max(targetTime, 0), videoDuration);
    }
  };

  const handleScroll = throttle(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const sectionHeight = sectionRef.current.offsetHeight;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Calcola la posizione di scroll centrale rispetto alla finestra
    const scrolledThrough = Math.min(Math.max(scrollPosition - sectionTop, 0), sectionHeight);

    const progress = scrolledThrough / sectionHeight;
    const targetTime = videoDuration * progress;
    smoothScrollVideo(targetTime);
  }, 100); // Throttle per migliorare le performance

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]); // Include handleScroll come dipendenza

  useEffect(() => {
    const handleWheel = (event) => {
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      scroll.scrollMore(delta * 50, {
        duration: 5000,
        delay: 2,
        smooth: 'easeInOutQuart'
      });
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="bg-black position-relative">
        <div className="container-fluid">
          <div className="row align-items-center mt-md-5">
            <div className="col-md-6 d-none d-md-flex justify-content-center">
              <video src={hand} ref={videoRef} className="HandLeft w-100" muted></video>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <motion.h1 variants={textVariants} initial="hidden" animate={isVisible && "visible" } className='Title text-right mx-2' id='titolobottom'>
                Strategie Innovative, risultati concreti.
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      <section className="community-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="community-text">
                <video src={Palla} className='imgPalla' muted autoPlay loop></video>
                <h2 className='Title fs-1 posizionetitolo text-white BasicTitle'>Perché Scegliere Dorida</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stats-container d-flex flex-column">
                <div className="stat-item my-3 p-4">
                  <h3>Innovazione in azione</h3>
                  <p>Ogni progetto inizia con un sogno. La nostra mission è di realizzare visioni innovative, coniugando creatività e tecnologia per plasmare il futuro digitale.</p>
                </div>
                <div className="stat-item my-3 p-4">
                  <h3>Soluzioni personalizzate</h3>
                  <p>Perché ogni Business è unico, le nostre soluzioni sono tagliate su misura per le tue esigenze.</p>
                </div>
                <div className="stat-item my-3 p-4">
                  <h3>Connessione e Collaborazione</h3>
                  <p>Connessione è la parola chiave: uniamo persone e idee per trasformare ogni progetto in un punto di incontro tra innovazione e progresso tecnologico, espandendo le possibilità del digitale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
