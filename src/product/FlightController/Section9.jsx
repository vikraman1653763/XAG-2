import React from 'react'


const projects=[
    {
      "title": "Robust Industrial IMU Sensor",
      "description": "Works flawlessly from -25°C to 60°C, ensuring high reliability in extreme environments",
      "image": "/assets/dealer1.webp"
    },
    {
      "title": "High-Voltage Compatibility",
      "description": "Supports up to 100V, offering superior protection from voltage surges",
      "image": "/assets/dealer2.webp"
    },
    {
      "title": "Precision Location Accuracy",
      "description": "With support for GPS/BEIDOU/GLONASS, achieve 1-meter location precision with high precision GPS",
      "image": "/assets/dealer3.webp"
    },
    {
      "title": "Real-Time Video Recording",
      "description": "Benefit from seamless server-based operations for efficient data handling",
      "image": "/assets/dealer4.webp"
    },
    {
      "title": "Live Cloud Data Log",
      "description": "Track your drone's flight data in real-time with cloud-based storage and analytics",
      "image": "/assets/dealer5.webp"
    },
    {
      "title": "Multi-Functionality",
      "description": "Capable of supporting 4 water pumps, dual flowmeters, and level meters for versatile applications.",
      "image": "/assets/dealer5.webp"
    },
    {
      "title": "Vibration Tolerance",
      "description": "Advanced algorithms ensure stability even in high-vibration environments",
      "image": "/assets/dealer4.webp"
    },
    {
      "title": "Customizable Flight Paths",
      "description": "Design point-to-point routes for tree spraying and optimized flight plans",
      "image": "/assets/dealer3.webp"
    },
    {
      "title": "Comprehensive Flight Logs",
      "description": "Records up to 50 flight logs for in-depth operational analysis",
      "image": "/assets/dealer2.webp"
    },
    {
      "title": "Real-Time Video Recording",
      "description": "Capture high-quality video for live monitoring and post-flight analysis",
      "image": "/assets/dealer1.webp"
    }
  ]
  
function Section9() {
  return (
    <div className='section-9'>
        <section className='sec-9-card-container'>
          <h2>Advanced Performance for Every Mission</h2>
          
       {projects.map((project,index)=>(
        <div className='sec-9-card' key={index}>
            <img src={project.image}/>
            <div className='sec-9-card-details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
       ))}
        

    
      
        </section>
      </div>
  )
}

export default Section9
        