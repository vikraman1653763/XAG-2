import React from 'react'
import'../S11/s11.css';
import Sec1 from '../S11/S11-Spec.jsx';
import Sec2 from '../S11/S11-Usecase.jsx';
import Sec3 from '../S11/S11-Techspec.jsx';
import Sec4 from '../S11/S11-Adv.jsx';
import Sec5 from '../S11/S11-Payload.jsx';
import Sec6 from '../S11/S11-Types.jsx';
import Sec7 from '../S11/S11-Intro.jsx';
import {introData, payloadData , usageData ,slideData} from './Data.js';

function Rescue() {
  return (
    <div>
      <Sec7 data={introData}/>
      <Sec1/>
      <Sec5 data={usageData}/>
      <Sec2 data={slideData}/>
      <Sec4 model="Rescue"/>
      <Sec3/>
    </div>
  )
}

export default Rescue
