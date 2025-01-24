import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import { FaEnvira } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";

function Section5() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Surveillance and Security",
      description: "Monitor large areas like industrial sites, borders, and restricted zones with precision. The 30x optical zoom camera and thermal sensor ensure clear imaging in both day and night conditions",
      icon: <MdOutlineSecurity />,
      image: "/sam/12.jpg",
    },
    {
      title: "Search and Rescue",
      description: "Assist in locating missing persons and evaluating disaster-hit areas. The drone’s endurance and thermal imaging capabilities make it a vital tool for rescue missions.",
      icon: <FaHandsHelping  />,
      image: "/sam/13.jpg",
    },
    {
      title: "Infrastructure Inspection",
      description: "Inspect critical infrastructure such as power lines, pipelines, and wind turbines. The stable 3-axis gimbal and high-resolution imaging provide detailed visual data for accurate assessments",
      icon: <GiBinoculars/>,
      image: "/sam/14.jpg",
    },
    {
      title: "Environmental Monitoring",
      description: "Track environmental changes, monitor wildlife, or assess land use with advanced sensors. The drone’s range and imaging features allow for efficient data collection over vast areas",
      icon: <FaEnvira />,
      image: "/sam/15.jpg",
    },
    {
      title: "Agriculture Monitoring",
      description: "Enhance farming practices with detailed crop health analysis and irrigation checks. The XAG-S11’s thermal and optical sensors provide actionable insights for precision agriculture",
      icon: <GiPlantRoots />,
      image: "/sam/16.jpg",
    }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [data.length]);

  return (
    <section className='s11-sec-5'>
        <h2 className="s11-sec-5-title">Surveillance and Monitoring Applications</h2>
        <p className="s11-sec-5-desc">The XAG-S11 is designed for critical surveillance and monitoring tasks across various industries. Its advanced camera system and reliable performance make it a versatile solution for diverse use cases</p>
      <div className="s11-sec-5-container">
        {/* Navigation Index */}
        <div className="s11-sec-5-index">
          {data.map((item, index) => (
            <div
              key={index}
              className={`s11-sec-5-index-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>

        {/* Active Card with AnimatePresence */}
        <div className="s11-sec-5-card-container">
          <AnimatePresence  mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="s11-sec-5-card"
            >
              <img
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
                className="s11-sec-5-card-image"
              />
              <div className="s11-sec-5-content">
                <h3 className="s11-sec-5-card-title">{data[activeIndex].title}</h3>
                <p className="s11-sec-5-card-description">{data[activeIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Section5;
