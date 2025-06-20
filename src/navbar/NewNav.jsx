import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const WindowNavbar = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [lockedCategory, setLockedCategory] = useState(null);
  useEffect(() => {
    resetMenus();
  }, [location]);

  const resetMenus = () => {
    setIsMenuOpen(false);
    setIsProductOpen(false);
    setLockedCategory(null);
  };

  const handleProductClick = (e) => {
    e.stopPropagation();
    setIsProductOpen((prev) => !prev);
    if (isProductOpen) {
      setLockedCategory(null);
    }
  };

  const handleCategoryClick = (category, e) => {
    e.stopPropagation();
    if (lockedCategory === category) {
      setLockedCategory(null);
    } else {
      setLockedCategory(category);
    }
  };

  const isSubmenuOpen = (category) => lockedCategory === category;

  return (
    <nav className="new-nav-container">
      <div className="new-nav-logo">
        <Link to="/" onClick={resetMenus}>
          <img className="new-nav-logo-img" src="/assets/logo.webp" alt="logo" />
        </Link>
      </div>

      <div
        className="new-nav-menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776;
      </div>

      <div className={`new-nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={resetMenus}>
          ABOUT
        </Link>
        <div className="new-nav-dropdown" onClick={handleProductClick}>
          <a className="new-nav-dropdown-title">PRODUCT</a>
          {isProductOpen && (
            <div className="new-nav-dropdown-menu horizontal">
              <div className="new-nav-dropdown-section"  onClick={(e) => handleCategoryClick("agri", e)}>
                <span
                  className="new-nav-dropdown-header"              
                >
                    Agricultural
                </span>
                {isSubmenuOpen("agri") && (
                  <div className="new-nav-submenu">
                    <Link to="/agr10" onClick={resetMenus}>
                      <img
                        src="/assets/nav1.webp"
                        alt="AGR10"
                        className="submenu-image"
                      />
                      <li>AGR10</li>
                    </Link>
                    <Link to="/agr16" onClick={resetMenus}>
                      <img
                        src="/assets/nav2.webp"
                        alt="AGR16"
                        className="submenu-image"
                      />
                      <li>AGR16</li>
                    </Link>
                   
                  </div>
                )}
              </div>
              {/* QUAD Section */}
              <div className="new-nav-dropdown-section"  onClick={(e) => handleCategoryClick("s11", e)}>
                <span
                  className="new-nav-dropdown-header"
        
                >                
                  Industrial
                </span>
                {isSubmenuOpen("s11") && (
                  <div className="new-nav-submenu">
                    <Link to="/xag30" onClick={resetMenus}>
                      <img
                        src="/assets/xag30/g3.webp"
                        alt="xag30"
                        className="submenu-image"
                      />
                      <li>XAG-30</li>
                    </Link>


                    <Link to="/survey" onClick={resetMenus}>
                      <img
                        src="/assets/nav3.webp"
                        alt="Survey"
                        className="submenu-image"
                      />
                      <li>XAG-Mapper</li>
                    </Link>
                    <Link to="/surveillance" onClick={resetMenus}>
                      <img
                        src="/assets/nav4.webp"
                        alt="Surveillance"
                        className="submenu-image"
                      />
                      <li>XAG-SkyWatch</li>
                    </Link>
                    <Link to="/inspection" onClick={resetMenus}>
                      <img
                        src="/assets/nav5.webp"
                        alt="Inspection"
                        className="submenu-image"
                      />
                      <li>XAG-Inspectra</li>
                    </Link>
                    <Link to="/rescue" onClick={resetMenus}>
                      <img
                        src="/assets/nav6.webp"
                        alt="Rescue"
                        className="submenu-image"
                      />
                      <li>XAG-ResQ</li>
                    </Link>
                  </div>
                )}
              </div>
              {/* Accessories Section */}
              <div className="new-nav-dropdown-section" onClick={(e) => handleCategoryClick("accessories", e)} >
                <span
                  className="new-nav-dropdown-header"
                >
                  Accessories
                </span>
                {isSubmenuOpen("accessories") && (
                  <div className="new-nav-submenu">
                    <Link to="/flight-controller" onClick={resetMenus}>
                      <img
                        src="/assets/nav7.webp"
                        alt="Flight Controller"
                        className="submenu-image"
                      />
                      <li>Flight Controller</li>  
                    </Link>
                    <Link to="/batteries" onClick={resetMenus}>
                      <img
                        src="/assets/nav8.webp"
                        alt="Batteries"
                        className="submenu-image"
                      />
                      <li>Batteries</li>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Link to="/dealer" onClick={resetMenus}>
          DEALER PORTAL
        </Link>
        <Link to="/training" onClick={resetMenus}>
          TRAINING
        </Link>
        <Link to="/blog" onClick={resetMenus}>
          BLOGS
        </Link>
        <Link to="/career" onClick={resetMenus}>
          CAREER
        </Link>
        <Link to="/contact" onClick={resetMenus}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default WindowNavbar;
