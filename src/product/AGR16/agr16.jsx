// AGR16.jsx
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './agr16.css';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Section6 from './Section6.jsx';
import Section7 from './Section7.jsx';
import Section8 from './Section8.jsx';
import Section9 from './Section9.jsx';
import Section10 from './Section10.jsx';
import Section11 from './Section11.jsx';
import Section12 from './Section12.jsx';

const AGR16 = () => {
 

  return (
    <div >
    
      <Section1/>
      <div className='agr16-body'>
      <Section2/>
      <Section3/>
      <Section4/>
      </div>
      <Section5/>
      <Section7/>
      <Section6/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Section12/>
      <Section8/>
    </div>
  );
};

export default AGR16;