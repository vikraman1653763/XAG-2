import React from 'react';
import '../style/home.css';
import Section0 from '../home/Section0';
import Section2 from '../home/Section2';
import Section3 from '../home/Section3';
import Section4 from '../home/Section4';

import Section6 from '../home/Section6';
import Section8 from '../home/Section8';
import Section9 from '../home/Section9';

function Home() {
  return (
    <div className='Home-page'>
    <Section0/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section6/>      
      <Section9/>
<Section8/>
     
    </div>
  );
}

export default Home;
