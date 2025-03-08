import React from 'react'
import'../S11/s11.css';
import Sec1 from '../S11/S11-Spec.jsx';
import Sec2 from '../S11/S11-Usecase.jsx';
import Sec3 from '../S11/S11-Techspec.jsx';
import Sec4 from '../S11/S11-Adv.jsx';
import Sec5 from '../S11/S11-Payload.jsx';
import { payloadData ,slideData } from './surveyData.js';

function Survey() {
  return (
    <div>
      <Sec1/>
      <Sec5 data={payloadData}/>
      <Sec2 data={slideData}/>
      <Sec4/>
      <Sec3/>
    </div>
  )
}

export default Survey
