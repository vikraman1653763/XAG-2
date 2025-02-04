import React from 'react'
import { WiStars } from "react-icons/wi";

function Section4() {
  return (
    <div className='agr10-sec-4'>
      <div className='agr10-sec-4-content'>
      <h2>perfect partner for your agricultural needs</h2>
      <p>The AGR10 agricultural drone is designed to redefine precision farming. With a payload capacity of up to 10L, advanced geo-fencing, and user-friendly controls, it’s the perfect partner for your agricultural needs</p>
        <ul>
          <li><WiStars/>Increased Productivity</li>
        <li><WiStars/>Eco-Friendly</li>
        <li><WiStars/>Cost-Efficient</li>  
        </ul>
      </div>
      <div className='agr10-sec-4-video'>
        <video src='/assets/agr10-01.webm'
        loop autoPlay muted playsInline >
        Your browser does not support the video tag.
      </video>

        </div> 
      <p></p>
    </div>
  )
}

export default Section4
