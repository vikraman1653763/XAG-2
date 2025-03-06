import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/NewNavbar.css";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="new-nav-container">
      <div className="new-nav-logo">
        <Link to="/">
          <img className="new-nav-logo-img" src="/assets/logo.webp" alt="logo" />
        </Link>
      </div>
      
      <div className="new-nav-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776;
      </div>
      
      <div className={`new-nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/about">ABOUT</Link>
        <Link to="/dealer">DEALER&nbsp;PORTAL</Link>
        <Link to="/training">TRAINING</Link>
        <Link to="/blog">BLOGS</Link>
        <Link to="/career">CAREER</Link>
        <Link to="/contact">CONTACT</Link>
        
        <div className="new-nav-dropdown" 
             onMouseEnter={() => setIsProductOpen(true)} 
             onMouseLeave={() => setIsProductOpen(false)}>
          <span className="new-nav-dropdown-title">PRODUCT</span>
          {isProductOpen && (
            <div className="new-nav-dropdown-menu">
              <div className="new-nav-dropdown-section">
                <span className="new-nav-dropdown-header">Agricultural Drone</span>
                <Link to="/agr10">AGR10</Link>
                <Link to="/agr16">AGR16</Link>
                <Link to="/agr20">AGR20</Link>
              </div>
              <div className="new-nav-dropdown-section">
                <span className="new-nav-dropdown-header">S11</span>
                <Link to="/survey">Survey</Link>
                <Link to="/surveillance">Surveillance</Link>
                <Link to="/inspection">Inspection</Link>
                <Link to="/emergency">Emergency</Link>
              </div>
              <div className="new-nav-dropdown-section">
                <span className="new-nav-dropdown-header">Accessories</span>
                <Link to="/flight-controller">Flight Controller</Link>
                <Link to="/batteries">Batteries</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;