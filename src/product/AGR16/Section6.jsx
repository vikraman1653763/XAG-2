import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

import fcImage1 from '/assets/agr16fc1.webp';
import fcImage3 from '/assets/agr16fc2.webp'; 
import fcImage2 from '/assets/agr16fc3.webp'; 

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '20vw' : '-20vw',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '20vw' : '-20vw',
    opacity: 0,
  }),
};

const Section6 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const images = [fcImage1, fcImage2, fcImage3];

  useEffect(() => {
    let scrollListenerAttached = false;

    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPercentage =
        ((window.innerHeight - sectionTop) / sectionHeight) * 100;
        if (scrollPercentage >= 0 && scrollPercentage <= 100) {

            if (scrollPercentage < 33) {
                setCurrentImageIndex(0);
            } else if (scrollPercentage >= 33 && scrollPercentage < 66) {
                setCurrentImageIndex(1);
            } else {
                setCurrentImageIndex(2);
            }
        } else{
            setCurrentImageIndex(0)
        }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!scrollListenerAttached) {
            window.addEventListener('scroll', handleScroll);
            scrollListenerAttached = true;
          }
        } else {
          if (scrollListenerAttached) {
            window.removeEventListener('scroll', handleScroll);
            scrollListenerAttached = false;
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (scrollListenerAttached) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section id="agr16-sec-6" className="agr16-sec-6" ref={sectionRef}>
      <div className="container">
        <div className="agr16-sec-6-content">
          <div className="agr16-sec-6-image-section">
            <AnimatePresence custom={currentImageIndex} mode="wait">
              <motion.img

                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="Flight Controller"
                className="agr16-sec-6-fc-image"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
                transition={{
                  x: { duration: 0.5, type: "tween"},
                  opacity: { duration: .5 },
                }}
              />
            </AnimatePresence>
          </div>
          <div className="agr16-sec-6-text-section">
            <h2 className="agr16-sec-6-section-title">XRotor Tek India</h2>
            <p className="agr16-sec-6-section-description">
              The XRotor Tek India Flight Controller powers the AGR16 with precision and stability, ensuring accurate operations for spraying, spreading, and mapping. Its advanced navigation and robust design optimize performance in diverse agricultural environments, delivering unmatched reliability for efficient field tasks.
            </p>
            <button className="agr16-sec-6-learn-more-button">
              <Link to="/flight-controller">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
