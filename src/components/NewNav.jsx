import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/NewNavbar.css";
const Navbar = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isProductLocked, setIsProductLocked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [lockedCategory, setLockedCategory] = useState(null);

  // Reset all menus on route change
  useEffect(() => {
    resetMenus();
  }, [location]);

  const resetMenus = () => {
    setIsMenuOpen(false);
    setIsProductOpen(false);
    setIsProductLocked(false);
    setActiveCategory(null);
    setLockedCategory(null);
  };

  // Toggle the product dropdown lock on click
  const handleProductClick = (e) => {
    e.stopPropagation();
    setIsProductLocked((prevLock) => {
      const newLock = !prevLock;
      if (!newLock) {
        setActiveCategory(null);
        setLockedCategory(null);
      } else {
        setIsProductOpen(true);
      }
      return newLock;
    });
  };

  // Always open product dropdown on hover
  const handleProductMouseEnter = () => {
    setIsProductOpen(true);
  };

  // Close product dropdown on mouse leave if not locked
  const handleProductMouseLeave = () => {
    if (!isProductLocked) {
      setIsProductOpen(false);
      setActiveCategory(null);
      setLockedCategory(null);
    }
  };

  // For submenu items: on hover, show submenu if not locked
  const handleCategoryMouseEnter = (category) => {
    if (!lockedCategory) {
      setActiveCategory(category);
    }
  };

  // When leaving a submenu header, clear the active category if not locked
  const handleCategoryMouseLeave = () => {
    if (!lockedCategory) {
      setActiveCategory(null);
    }
  };

  // Toggle locking for a submenu category
  const handleCategoryClick = (category, e) => {
    e.stopPropagation();
    if (lockedCategory === category) {
      setLockedCategory(null);
    } else {
      setLockedCategory(category);
      setActiveCategory(category);
    }
  };

  // A submenu is open if it's the one currently active or locked
  const isSubmenuOpen = (category) =>
    activeCategory === category || lockedCategory === category;

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

        {/* PRODUCT DROPDOWN */}
        <div
          className="new-nav-dropdown"
          onMouseEnter={handleProductMouseEnter}
          onMouseLeave={handleProductMouseLeave}
          onClick={handleProductClick} // Click toggles the lock for the whole dropdown
        >
          <a className="new-nav-dropdown-title">PRODUCT</a>
          {isProductOpen && (
            <div className="new-nav-dropdown-menu horizontal">
              {/* Agri Section */}
              <div className="new-nav-dropdown-section">
                <span
                  className="new-nav-dropdown-header"
                  onMouseEnter={() => handleCategoryMouseEnter("agri")}
                  onMouseLeave={handleCategoryMouseLeave}
                  onClick={(e) => handleCategoryClick("agri", e)}
                >
                  Agri
                </span>
                {isSubmenuOpen("agri") && (
                  <div className="new-nav-submenu">
                    <Link to="/agr10" onClick={resetMenus}>
                      <img
                        src="/assets/nav1.png"
                        alt="AGR10"
                        className="submenu-image"
                      />
                      <li>AGR10</li>
                    </Link>
                    <Link to="/agr16" onClick={resetMenus}>
                      <img
                        src="/assets/nav3.png"
                        alt="AGR16"
                        className="submenu-image"
                      />
                      <li>AGR16</li>
                      </Link>
                    <Link to="/agr20" onClick={resetMenus}>
                      <img
                        src="/assets/agr20.webp"
                        alt="AGR20"
                        className="submenu-image"
                      />
                      <span>AGR20</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* S11 Section */}
              <div className="new-nav-dropdown-section">
                <span
                  className="new-nav-dropdown-header"
                  onMouseEnter={() => handleCategoryMouseEnter("s11")}
                  onMouseLeave={handleCategoryMouseLeave}
                  onClick={(e) => handleCategoryClick("s11", e)}
                >
                  S11
                </span>
                {isSubmenuOpen("s11") && (
                  <div className="new-nav-submenu">
                    <Link to="/survey" onClick={resetMenus}>
                      <img
                        src="/assets/survey.webp"
                        alt="Survey"
                        className="submenu-image"
                      />
                      <span>Survey</span>
                    </Link>
                    <Link to="/surveillance" onClick={resetMenus}>
                      <img
                        src="/assets/surveillance.webp"
                        alt="Surveillance"
                        className="submenu-image"
                      />
                      <span>Surveillance</span>
                    </Link>
                    <Link to="/inspection" onClick={resetMenus}>
                      <img
                        src="/assets/inspection.webp"
                        alt="Inspection"
                        className="submenu-image"
                      />
                      <span>Inspection</span>
                    </Link>
                    <Link to="/emergency" onClick={resetMenus}>
                      <img
                        src="/assets/emergency.webp"
                        alt="Emergency"
                        className="submenu-image"
                      />
                      <span>Emergency</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Accessories Section */}
              <div className="new-nav-dropdown-section">
                <span
                  className="new-nav-dropdown-header"
                  onMouseEnter={() => handleCategoryMouseEnter("accessories")}
                  onMouseLeave={handleCategoryMouseLeave}
                  onClick={(e) => handleCategoryClick("accessories", e)}
                >
                  Accessories
                </span>
                {isSubmenuOpen("accessories") && (
                  <div className="new-nav-submenu">
                    <Link to="/flight-controller" onClick={resetMenus}>
                      <img
                        src="/assets/nav2.png"
                        alt="Flight Controller"
                        className="submenu-image"
                      />
                      <li>Flight Controller</li>
                    </Link>
                    <Link to="/batteries" onClick={resetMenus}>
                      <img
                        src="/assets/nav5.png"
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

export default Navbar;
