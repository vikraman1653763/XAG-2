// Section00.jsx
import React, { useState, useEffect } from "react";
import HomeCarousel2 from "./HomeWindowCard.jsx"; 
import MobileCarousel from "./HomeMobileCard.jsx"; 
import "./homeSection1.css"; 

const Section1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileCarousel /> : <HomeCarousel2 />}</>;
};

export default Section1;
