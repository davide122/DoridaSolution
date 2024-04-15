import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Aggiungi i tuoi stili qui
import davide from "../Commons/Image/Fotonostre/davide.png";
import rino from "../Commons/Image/Fotonostre/rinosolo.png";
import dorin from "../Commons/Image/Fotonostre/dorin.png";

const PeopleCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container-fluid ">
      <Slider {...settings}>
        <div className="slide"><img src={davide} alt="Davide" /></div>
        <div className="slide"><img src={rino} alt="Rino" /></div>
        <div className="slide"><img src={dorin} alt="Dorin" /></div>
      </Slider>
    </div>
  );
};

export default PeopleCarousel;
