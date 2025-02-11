import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shade from "/assets/shade.webp";
import image1 from '/assets/demo9.webp';
import image3 from '/assets/demo3.webp';
import image2 from '/assets/demo4.webp';
import image4 from '/assets/demo10.webp';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const items = [
  {
    image: image3,
    title: "AGRI DRONE",
    topic: "AGR-16",
    link: '/agr16',
    description: "The AGR-16 by Xagrotor Tek is a high-tech farming drone designed to enhance precision and productivity and ensures smooth, accurate flying, making it an excellent tool for modern farming.",
  },
  {
    image: image4,
    title: "Flight Controller",
    topic: "Xrotor Tek India",
    link: '/flight-controller',
    description: "Xrotor Tek India AG-FMU is perfect for agricultural spraying, offering real-time tracking, support for nine languages, and future upgrades like live video streaming",
  },
  {
    image: image2,
    title: "AGRI DRONE",
    topic: "AGR-10",
    link: '/agr10',
    description: "The AGR-10 is a hexacopter UAS from Xagrotor Tek, built for precise farming. It uses advanced technology and a custom flight controller to help farmers work more efficiently and improve productivity.",
  },
  {
    image: image1,
    title: "BATTERY",
    topic: "Xpower Plus",
    link: '/Batteries',
    description: "Xpower Plus is designed for long-lasting power in drones, ensuring extended flight times and reliable performance for agricultural and industrial tasks.",
  },
];

const HomeWindowCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };



   const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



  return (
    <div className="home-car-2-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="home-car-2-item"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <img src={items[currentIndex].image} className="home-car-2-image" alt={items[currentIndex].title} />
          <div className="home-car-2-introduce">
            <motion.div
              className="home-car-2-title"
              initial={{ opacity: 0, y: -20 ,filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0 ,filter: 'blur(0px)'}}
              transition={{duration: 0.6, ease: "easeInOut", delay: .2 }}
            >
              {items[currentIndex].title}
            </motion.div>
            <motion.div
              className="home-car-2-topic"
              initial={{ opacity: 0, y: -20 ,filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0 ,filter: 'blur(0px)'}}
              transition={{duration: 0.6, ease: "easeInOut", delay: .4 }}
            >
              {items[currentIndex].topic}
            </motion.div>
            <motion.div
              className="home-car-2-des"
              initial={{ opacity: 0, y: -20 ,filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0 ,filter: 'blur(0px)'}}
              transition={{ duration: 0.6, ease: "easeInOut",delay: .6 }}
            >
              {items[currentIndex].description}
            </motion.div>
            <motion.button
              className="home-car-2-seeMore"
              initial={{ opacity: 0, y: -20 ,filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0 ,filter: 'blur(0px)'}}
              transition={{duration: 0.6, ease: "easeInOut", delay: .8 }}
            >
              <Link to={items[currentIndex].link} style={{ textDecoration: 'none', color: 'inherit' }}>
                Explore More <MdKeyboardDoubleArrowRight />
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="home-car-2-arrows-container">
        <button className="home-car-2-prev" aria-label="Previous Slide" onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        <button className="home-car-2-next" aria-label="Next Slide" onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>

      <img src={shade} alt="shade" className="home-car-2-shade" style={{
          transform: `translateY(-${offsetY * .5}px)`,
        }} />
    </div>
  );
};

export default HomeWindowCard;
