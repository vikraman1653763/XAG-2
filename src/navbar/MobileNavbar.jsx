import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset menus on route change
  useEffect(() => {
    resetMenus();
  }, [location]);

  const resetMenus = () => {
    setIsMenuOpen(false);
    setIsProductOpen(false);
    setActiveSubmenu(null);
  };

  // Toggle the product dropdown
  const handleProductClick = () => {
    setIsProductOpen((prev) => !prev);
    setActiveSubmenu(null);
  };

  // Toggle submenus on click
  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  if (!isMobile) {
    return null;
  }

  return (
    <nav className="mobile-nav-container">
      <div className="mobile-nav-header">
        <div className="mobile-nav-logo">
          <Link to="/" onClick={resetMenus}>
          <img className="mobile-nav-logo-img" src="/assets/logo.webp" alt="logo" />
          </Link>
        </div>
        <div
          className="mobile-nav-menu-icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav-links">
          <Link to="/about" onClick={resetMenus}>
            ABOUT
          </Link>

          {/* PRODUCT DROPDOWN */}
          <div className="mobile-nav-dropdown">
            <div
              onClick={handleProductClick}
              className="mobile-nav-dropdown-title"
            >
              PRODUCT
            </div>
            {isProductOpen && (
              <div className="mobile-nav-dropdown-menu">
                {/* Agri Section */}
                <div>
                  <div
                    onClick={() => handleSubmenuClick("agri")}
                    className="mobile-nav-dropdown-header"
                  >
                    Agricultural
                  </div>
                  {activeSubmenu === "agri" && (
                    <div className="mobile-nav-submenu">
                      <Link to="/agr10" onClick={resetMenus}>
                        AGR10
                      </Link>
                      <Link to="/agr16" onClick={resetMenus}>
                        AGR16
                      </Link>
                      <Link to="/agr20" onClick={resetMenus}>
                        AGR20
                      </Link>
                    </div>
                  )}
                </div>

                {/* S11 Section */}
                <div>
                  <div
                    onClick={() => handleSubmenuClick("s11")}
                    className="mobile-nav-dropdown-header"
                  >
                    S11
                  </div>
                  {activeSubmenu === "s11" && (
                    <div className="mobile-nav-submenu">
                      <Link to="/survey" onClick={resetMenus}>
                      XAG-Mapper
                      </Link>
                      <Link to="/surveillance" onClick={resetMenus}>
                      XAG-SkyWatch
                      </Link>
                      <Link to="/inspection" onClick={resetMenus}>
                      XAG-Inspectra
                      </Link>
                      <Link to="/emergency" onClick={resetMenus}>
                      XAG-ResQ
                      </Link>
                    </div>
                  )}
                </div>

                {/* Accessories Section */}
                <div>
                  <div
                    onClick={() => handleSubmenuClick("accessories")}
                    className="mobile-nav-dropdown-header"
                  >
                    Accessories
                  </div>
                  {activeSubmenu === "accessories" && (
                    <div className="mobile-nav-submenu">
                      <Link to="/flight-controller" onClick={resetMenus}>
                        Flight Controller
                      </Link>
                      <Link to="/batteries" onClick={resetMenus}>
                        Batteries
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
      )}
    </nav>
  );
};

export default MobileNavbar;
