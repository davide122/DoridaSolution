import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import imagehuman from "../Commons/Image/Screenshot 2024-03-26 alle 12.03.30.png"
import ChatWithGPT from '../ChatGpt/ChatWithGpt';
import Parla from "../Commons/video/robot.mp4";
import { BsChatDots,BsRobot } from "react-icons/bs";

const HeroSection = () => {
  // Stato per controllare se mostrare lo Spline (true) o il video (false)
  const [showSpline, setShowSpline] = useState(true);

  // Funzione per gestire il clic sul pulsante
  const handleButtonClick = () => {
    setShowSpline(!showSpline); // Cambia lo stato corrente
    
  };

  return (
    <div className="container vh-100">
      <div className="row vh-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-left bg-black hero-text vh-50">
          <h1 className="text-white Title">La Dorida Solution <span className='d-none d-xl-block'>è qui per te.</span></h1>
          <h2 className="text-white Title2 d-md-none ">è qui per aiutarvi</h2>
         <button className='Call-Button mt-2 mt-md-3 p-md-3 p-2'>Preventivo gratuito</button>
        </div>
        
        <div className="col-12 col-md-6 ">
         

          <div>
            {showSpline ? (
              // Mostra lo Spline se showSpline è true
              <div>
              <Spline scene="https://prod.spline.design/fG63sTT4o138JOix/scene.splinecode" className='vh-100 d-none d-md-block d-md' />
              <div className="d-block d-md-none vh-100 mx-0">
              <img src={imagehuman} alt="Mobile" className="imgHuman" />
              </div>
            </div>
            ) : (
              // Altrimenti mostra il video
              <video src={Parla} className="vh-100 video d-md-block" autoPlay> </video>
            )}
           

           
            
            <div className='Utilies'>
        <button onClick={handleButtonClick} className="Call-Button mb-2 "> {showSpline ? <BsChatDots></BsChatDots> : <BsRobot></BsRobot>}</button>
        <ChatWithGPT className="buttontalk "></ChatWithGPT>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
