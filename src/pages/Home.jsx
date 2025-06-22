import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { HashLoader } from "react-spinners";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSections from "../components/TestimonialsSections";
import HeroSection from "../components/HeroSection";
import BrandTrustees from "./BrandTrustees";
import ValidCalient from "./ValidCalient";
import infoFile from "../assets/info.json";
import Allservices from "./Allservices";
import Services from "./Services";
import ProjectCards from "../components/ProjectCards";
import Coasting from "./Coasting";
import ContactForm from "./ContactForm";
import PublicBlogList from "../components/PublicBlogList";

import { initializeApp } from "firebase/app";

const Home = ({ isDarkTheme = false, brands = [] }) => {
  const [siteData, setSiteData] = useState(infoFile);
  const firebase = initializeApp({
    apiKey: "AIzaSyBgH_BtRGwNW-1aExGpkRmrdqYKzXTbV-g",
    authDomain: "camelli-324.firebaseapp.com",
    databaseURL: "https://camelli-324-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "camelli-324",
    storageBucket: "camelli-324.firebasestorage.app",
    messagingSenderId: "717749055319",
    appId: "1:717749055319:web:4b7fcc193d7609a453d812",
    measurementId: "G-SWDHSPPBWD"
  });

  
  const whatsappNumber = "6593427892"; 
  
  const handleWhatsAppClick = () => {
    
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div
      className={`${
        isDarkTheme ? "bg-[#131313] text-white" : "bg-white text-black"
      } min-h-[100vh] w-full`}
    >
      {/* WhatsApp Floating Button */}
      <div 
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
          <FaWhatsapp size={28} />
        </div>
      </div>

      <div>
        <HeroSection />

        <div className="mx-auto w-10/12">
          <BrandTrustees brands={brands} />

          {/* Services */}
          <Services details={siteData} />

          {/* Portfolio */}
          <ProjectCards
            projects={"projects" in siteData ? siteData.projects : {}}
          />

          {/* why choose us sec */}
          <WhyChooseUsSection />

          <Coasting />

          <PublicBlogList firebase={firebase} />

          {/* User Testimonials Section */}
          <TestimonialsSections />

          <ContactForm details={siteData} />

          <div className="pt-20 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;