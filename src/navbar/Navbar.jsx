import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar.jsx";
import WindowNavbar from "./NewNav.jsx";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? <MobileNavbar /> : <WindowNavbar />;
};

export default Navbar;
