// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './agr10.css';
const AGR16 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);
  return (
    <div>
    </div>
  );
};
export default AGR16;
