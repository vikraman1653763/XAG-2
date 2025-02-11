// MobileCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import image1 from '/assets/demo9.webp';
import image2 from '/assets/demo4.webp';
import image3 from '/assets/demo3.webp';
import image4 from '/assets/demo10.webp';


const items = [
  {
    image: image3,
    title: "AGRI DRONE",
    topic: "AGR-16",
    link: "/agr16",
    description:
      "The AGR-16 by Xagrotor Tek is a high-tech farming drone designed to enhance precision and productivity and ensures smooth, accurate flying, making it an excellent tool for modern farming.",
  },
  {
    image: image4,
    title: "Flight Controller",
    topic: "Xrotor Tek India",
    link: "/flight-controller",
    description:
      "Xrotor Tek India AG-FMU is perfect for agricultural spraying, offering real-time tracking, support for nine languages, and future upgrades like live video streaming.",
  },
  {
    image: image2,
    title: "AGRI DRONE",
    topic: "AGR-10",
    link: "/agr10",
    description:
      "The AGR-10 is a hexacopter UAS from Xagrotor Tek, built for precise farming. It uses advanced technology and a custom flight controller to help farmers work more efficiently and improve productivity.",
  },
  {
    image: image1,
    title: "BATTERY",
    topic: "Xpower Plus",
    link: "/Batteries",
    description:
      "Xpower Plus is designed for long-lasting power in drones, ensuring extended flight times and reliable performance for agricultural and industrial tasks.",
  },
];

const HomeMobileCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Start auto slide when the component mounts
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // change every 7 seconds (adjust as needed)
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Destructure the current item
  const { image, title, topic, link, description } = items[currentIndex];

  return (
    <div className="mobile-carousel">
      <div className="mobile-carousel-card">
        {/* Image on top */}
        <div className="mobile-carousel-image">
          <img src={image} alt={title} />
        </div>
        {/* Introduction on bottom */}
        <div className="mobile-carousel-content">
          <h2>{title}</h2>
          <h4>{topic}</h4>
          <p>{description}</p>
          <Link to={link} className="mobile-carousel-link">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMobileCard;
