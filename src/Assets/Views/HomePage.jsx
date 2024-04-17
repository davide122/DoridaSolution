
import Carouseltext from "../Components/Carousel/Carouseltext";
import MyNavbar from "../Components/Commons/Headers/MyNavbar";
import HeroSection from "../Components/Hero/HeroSection";
import ChangeColor from "../Components/Sections/ChangeColor";
import ServicesSection from "../Components/Sections/ServicesSection";
import VideoPresentazione from "../Components/Sections/VideoPresentazione";
import ServicesExplain from "../Components/ServicesComponent/ServicesExplain";
import MyFooter from "../Components/Commons/FOOTER/MyFooter";
import PeopleCarousel from "../Components/Carousel/PeopleCarousel";
import SectionWHY from "../Components/Sections/SectionWHY";

const HomePage = () => {
    return(
        <>
   
        <MyNavbar className={"gradient"}></MyNavbar>
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