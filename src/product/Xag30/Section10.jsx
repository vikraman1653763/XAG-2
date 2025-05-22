import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Xag30Feature = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  
  const topLeftX = useTransform(scrollYProgress, [0, 0.4], ['300px', '-100px']);
  const bottomLeftX = useTransform(scrollYProgress, [0, 0.5], ['300px', '-300px']);
  const topRightY = useTransform(scrollYProgress, [0, 1], ['10px', '-40px']);
  const leftToRight = useTransform(scrollYProgress, [0, 0.4], ['-40px', '350px']);
  const upToDown = useTransform(scrollYProgress, [0, 0.4], ['300px', '0px']);
  const centerToTop = useTransform(scrollYProgress, [0.2, 0.4], ['300px', '0px']);
  const centerScale = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);
  const bottomLeftRotate = useTransform(scrollYProgress, [0, 0.4], ['100deg', '0deg']);
  const blink =useTransform(scrollYProgress,[0.2,0.4],[0,1])
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="xag30-feature-wrapper">
        <h2 className="xag30-feature-title">Unveiling the Core of Precision: XAG 30 Key Features</h2>
        <p className="xag30-feature-subtext">
          Experience the powerful synergy of camera vision, flight control, and intelligent sensors – engineered for mission-critical performance and dynamic responsiveness.
        </p>
        <img src="/assets/xag30/cam.webp" className="xag30-feature-img" />
        <img src="/assets/xag30/fc.webp" className="xag30-feature-img" />
        <img src="/assets/xag30/sensor.webp" className="xag30-feature-img" />
        <img src="/assets/xag30/cam.webp" className="xag30-feature-img" />
        <img src="/assets/xag30/payload.webp" className="xag30-feature-img" />
      </div>
    );
  }

  return (
    <div className="xag30-feature-wrapper" ref={ref}>
       <motion.div
          className="xag30-feature-detail"
          style={{
            opacity:blink}}
        >
          <h2 className="xag30-feature-title">Unveiling the Core of Precision</h2>
          <p className="xag30-feature-subtext">
            Experience the powerful synergy of camera vision, flight control, and intelligent sensors – engineered for mission-critical performance and dynamic responsiveness.
          </p>
        </motion.div>
      <motion.img
        src="/assets/xag30/cam.webp"
        alt="Top Left"
        className="xag30-feature-img xag30-feature-top-left"
        style={{ x: topLeftX }}
      />
      <motion.img
        src="/assets/xag30/payload.webp"
        alt="Top Right"
        className="xag30-feature-img xag30-feature-top-right"
        style={{ y: topRightY, x: leftToRight }}
      />
      <motion.img
        src="/assets/xag30/g3.webp"
        alt="Center"
        className="xag30-feature-img xag30-feature-center"
        style={{ scale: centerScale }}
      />
      <motion.img
        src="/assets/xag30/fc.webp"
        alt="Bottom Left"
        className="xag30-feature-img xag30-feature-bottom-left"
        style={{ rotate: bottomLeftRotate, x: bottomLeftX }}
        />
      <motion.img
        src="/assets/xag30/sensor.webp"
        alt="Bottom Right"
        className="xag30-feature-img xag30-feature-bottom-right"
        style={{ y: upToDown }}
      />
    </div>
  );
};

export default Xag30Feature;
