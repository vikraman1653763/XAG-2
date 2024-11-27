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
import Section2 from './Section2.jsx';
import './agr16.css';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Section6 from './Section6.jsx';
import Section7 from './Section7.jsx';
import Section8 from './Section8.jsx';
import Section9 from './Section9.jsx';
import Section10 from './Section10.jsx';

const AGR16 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <div >
    
      <main > 
      
        {/* <GifContainer /> */}
      <Section1/>
      <div className='agr16-body'>
      <Section2/>

      <Section3/>
      <Section4/>
      </div>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section9/>
      <Section10/>
        <DroneTypes />
      <DroneTabs />
      <Section8/>
        {/* <Description /> */}
        {/* <Specifications /> */}
        {/* <Fc/> */}
        {/* <CubeSection/> */}
        {/* <Advantages /> */}
      </main>
 
    </div>
  );
};

export default AGR16;