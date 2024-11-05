// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/agr16.css';

import Description from './Description.jsx';
import Specifications from './Specifications.jsx';
import DroneTypes from './DroneTypes.jsx';
import Advantages from './Advantages.jsx';
import DroneTabs from './dronetab.jsx';
import CubeSection from './CubeSection.jsx';
import Fc from './fCSection.jsx';
import Section1 from './Section1.jsx';

const AGR16 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <div>
    
      <main> 
      
        {/* <GifContainer /> */}
      <Section1/>
        <Description />
        <Specifications />
        <Fc/>
        <CubeSection/>
        <DroneTypes />
      <DroneTabs />
        <Advantages />
      </main>
 
    </div>
  );
};

export default AGR16;