

const projects = [
  { "title": "Precision Location Accuracy", "description": "With support for GPS/BEIDOU/GLONASS, achieve 1-meter location precision with high precision GPS" },
  { "title": "Robust Industrial IMU Sensor", "description": "Works flawlessly from -25°C to 60°C, ensuring high reliability in extreme environments"},
  { "title": "High-Voltage Compatibility", "description": "Supports up to 100V, offering superior protection from voltage surges" },
  { "title": "Comprehensive Flight Logs", "description": "Records up to 50 flight logs for in-depth operational analysis" },
  { "title": "Customizable Flight Paths", "description": "Design point-to-point routes for tree spraying and optimized flight plans" },
  { "title": "Real-Time Video Recording", "description": "Capture high-quality video for live monitoring and post-flight analysis" },
  { "title": "Vibration Tolerance", "description": "Advanced algorithms ensure stability even in high-vibration environments" },
  { "title": "Multi-Functionality", "description": "Capable of supporting 4 water pumps, dual flowmeters, and level meters for versatile applications."},
  { "title": "Live Cloud Data Log", "description": "Track your drone's flight data in real-time with cloud-based storage and analytics" },
  { "title": "Server Support", "description": "Benefit from seamless server-based operations for efficient data handling"},
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
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Section9;
