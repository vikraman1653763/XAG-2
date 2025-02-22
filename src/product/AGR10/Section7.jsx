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
            The AGR 10’s 10-liter detachable tank allows quick refills, easy maintenance, and reduced downtime for efficient farming.
          </p>
        </>
      ),
    },
    {
      title: 'High-Performance Motor',
      index: 'Motor',
      video: '/sam/7.mp4',
      content: (
        <>
          <p>
            The AGR 10’s motor ensures strong thrust, stability, and durability with heat- and waterproof features for reliable performance.
          </p>
        </>
      ),
    },
    {
      title: 'Precision Nozzle System',
      index: 'Nozzle',
      video: '/sam/7.mp4',
      content: (
        <>
          <p>
            The precision nozzles ensure even pesticide and fertilizer distribution, reducing waste and improving application efficiency.
          </p>
        </>
      ),
    },
    {
      title: 'AI-Enabled Camera',
      index: 'Camera',
      video: '/sam/7.mp4',
      content: (
        <>
          <p>
            The AI-enabled camera provides real-time monitoring, smart obstacle detection, and accurate field mapping for better navigation.
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
            <video className="agr10-sec-7-video-placeholder" src={item.video} autoPlay muted playsInline loop />
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
