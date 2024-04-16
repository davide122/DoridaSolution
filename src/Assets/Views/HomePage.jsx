
import Carouseltext from "../Components/Carousel/Carouseltext";

import MyNavbar from "../Components/Commons/Headers/MyNavbar";
import HeroSection from "../Components/Hero/HeroSection";
import ChangeColor from "../Components/Sections/ChangeColor";

import ServicesSection from "../Components/Sections/ServicesSection";
import TeamBalls from "../Components/Sections/ExplainPeople";
import VideoPresentazione from "../Components/Sections/VideoPresentazione";
import ServicesExplain from "../Components/ServicesComponent/ServicesExplain";
import ExplainPeople from "../Components/Sections/ExplainPeople";
import MyFooter from "../Components/Commons/FOOTER/MyFooter";
import PeopleCarousel from "../Components/Carousel/PeopleCarousel";
import davide from "../Components/Commons/Image/Fotonostre/davideoslo.png";
import rino from "../Components/Commons/Image/Fotonostre/rinosolo.png";
import dorin from "../Components/Commons/Image/Fotonostre/dorinsola.png";

const imagePaths = [
    davide, 
    rino,
   dorin,
  
  ];

const HomePage = () => {
    return(
        <>
   
        <MyNavbar className={"gradient"}></MyNavbar>
        <HeroSection ></HeroSection>
        <Carouseltext></Carouseltext>
       <ServicesSection></ServicesSection>
      <ServicesExplain></ServicesExplain>
      <ChangeColor></ChangeColor>
      <PeopleCarousel/>
      <VideoPresentazione></VideoPresentazione>
      
   <MyFooter></MyFooter>
        </>
    )
}
export default HomePage;