import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
  
const Section7 = () => {
  const media = [
    {
      title: 'Detachable Tank',
      index: 'Tank',
      video: '/assets/agr10-06.webm',
      
      content: (
        <>
          <p>
          10-liter polyethylene detachable tank is lightweight, durable, reduced downtime and ensuring efficient farming
          </p>
          <p>Allows quick refills, ensuring minimal downtime, and is designed for easy maintenance</p>
        </>
      ),
    },
    {
      title: 'Powering Performance with X Power Plus',
      index: 'Motor',
      image :'/assets/agr10-09.webp',
      content: (
        <>
          <p>
          The AGR 10 runs on the X Power Plus battery, providing strong thrust, stability, and durability. </p><p>Its motor, backed by a reliable power source, ensures smooth performance with heat- and waterproof protection.
                    </p>
        </>
      ),
    },
    {
      title: 'Precision Nozzle System',
      index: 'Nozzle',
      image :'/assets/agr10-08.webp',
      
      content: (
        <>
          <p>
            The precision nozzles ensure even pesticide and fertilizer distribution, reducing waste and improving application efficiency.
          </p>
        </>
      ),
    },
    {
      title: 'Advanced Obstacle Avoidance',
      index: 'Camera',
      video: '/assets/agr10-07.webm',
      content: (
        <>
          <p>
          Designed to detect obstacles and varying terrain in real-time, ensuring smooth navigation and optimized spraying performance for precision agriculture.
                    </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="agr10-sec-7-container">
      {media.map((item, index) => (
        <div key={item.index} className="agr10-sec-7-card">
         <div className="agr10-sec-7-video">
  {item.video ? (
    <video
      className="agr10-sec-7-video-placeholder"
      src={item.video}
      autoPlay
      muted
      playsInline
      loop
    />
  ) : (
    <img
      className="agr10-sec-7-video-placeholder"
      src={item.image}
      alt={item.title}
    />
  )}
</div>

          <div className="agr10-sec-7-content" data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
            <h2 className="agr10-sec-7-title">{item.title}</h2>
            <div className="agr10-sec-7-description">{item.content}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section7;
