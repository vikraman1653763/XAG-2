

const projects = [
  { "title": "Precision Location Accuracy", "description": "With support for GPS/BEIDOU/GLONASS, achieve 1-meter location precision with high precision GPS",'image':"/assets/fckey1.webp" },
  { "title": "Robust Industrial IMU Sensor", "description": "Works flawlessly from -25°C to 60°C, ensuring high reliability in extreme environments",'image':"/assets/fckey2.webp"},
  { "title": "High-Voltage Compatibility", "description": "Supports up to 100V, offering superior protection from voltage surges" ,'image':"/assets/fckey3.webp"},
  { "title": "Comprehensive Flight Logs", "description": "Records up to 50 flight logs for in-depth operational analysis",'image':"/assets/fckey4.webp" },
  { "title": "Customizable Flight Paths", "description": "Design point-to-point routes for tree spraying and optimized flight plans",'image':"/assets/fckey5.webp" },
  { "title": "Real-Time Video Recording", "description": "Capture high-quality video for live monitoring and post-flight analysis" ,'image':"/assets/fckey6.webp"},
  { "title": "Vibration Tolerance", "description": "Advanced algorithms ensure stability even in high-vibration environments" ,'image':"/assets/fckey7.webp"},
  { "title": "Multi-Functionality", "description": "Capable of supporting 4 water pumps, dual flowmeters, and level meters for versatile applications.",'image':"/assets/fckey8.webp"},
  { "title": "Live Cloud Data Log", "description": "Track your drone's flight data in real-time with cloud-based storage and analytics" ,'image':"/assets/fckey9.webp"},
  { "title": "Server Support", "description": "Benefit from seamless server-based operations for efficient data handling",'image':"/assets/fckey10.webp"},
]

import React, { useState, useRef, useEffect } from 'react';

function Section9() {


  return (
    <div className='section-9'>
      <section className='sec-9-card-container'>
        <h2> key feature</h2>
        {projects.map((project, index) => (
          <div 
            className='sec-9-card'
            key={index}
            style={{
              '--card-z-index': index, 
              '--card-stack-index': projects.length - index ,
              width:`${50+(index *.5)}vw`
            }}
          >
            <div className='sec-9-card-details'>
              <h4>{String(index + 1).padStart(2, '0')}</h4>
              <h3>{project.title}</h3>
              <img src={project.image} className='fcIcon'/>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Section9;
