
import Carouseltext from "../Components/Commons/Carousel/Carouseltext";

import MyNavbar from "../Components/Commons/Headers/MyNavbar";
import HeroSection from "../Components/Hero/HeroSection";
import ChangeColor from "../Components/Sections/ChangeColor";

import ServicesSection from "../Components/Sections/ServicesSection";
import TeamBalls from "../Components/Sections/ExplainPeople";
import VideoPresentazione from "../Components/Sections/VideoPresentazione";
import ServicesExplain from "../Components/ServicesComponent/ServicesExplain";
import ExplainPeople from "../Components/Sections/ExplainPeople";
import MyFooter from "../Components/Commons/FOOTER/MyFooter";
import Superior from "../Components/Commons/Headers/Superior";

const HomePage = () => {
    return(
        <>
   
        <MyNavbar></MyNavbar>
        <HeroSection ></HeroSection>
        <Carouseltext></Carouseltext>
       <ServicesSection></ServicesSection>
      <ServicesExplain></ServicesExplain>
      <ChangeColor></ChangeColor>
      <VideoPresentazione></VideoPresentazione>
      
   <MyFooter></MyFooter>
        </>
    )
}
export default HomePage;