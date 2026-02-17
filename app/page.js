import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";
import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
import Popup from "@/components/Popup";
// import CityPage from "../components/City";
import Dedicated from "@/components/Landingpage/Dedicated";


export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero />
      <Cta></Cta>
      <About />
         
      <Categories />
      <Countup />
        <Whoweare />
   <Dedicated></Dedicated>
  <Formsection></Formsection>
         <Process></Process>
      <Whychoose />
 
       <TestimonialSlider></TestimonialSlider>
      <Faq></Faq>
     
    
      {/* <CityPage /> */}
    </>
  );
}
