import React, { useRef, useEffect } from 'react';

const features = [
  { description: 'Effortless folding mechanism for rapid deployment', video: '/assets/xag30/xag30-fold.webm' },
  { description: 'High-capacity battery ensures long flight endurance', video: '/assets/xag30/xag30-battery.webm' },
  { description: 'Efficient motors and aerodynamic wings for stable flight', video: '/assets/xag30/xag30-motor.webm' },
  { description: 'Advanced obstacle sensors for collision-free navigation', video: '/assets/xag30/xag30-obstacle.webm' },
  { description: 'Terrain-following sensor for altitude adaptation over uneven ground', video: '/assets/xag30/xag30-terrain.webm' },
];

function Section9() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Autoplay fallback
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, // 60% of video must be in view
      }
    );

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach(video => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className='xag30-scroll-sec'>
      <section className='xag30-scroll-card-container'>
        {features.map((feature, index) => (
          <div
            className='xag30-scroll-card'
            key={index}
            style={{
              '--card-z-index': index,
              '--card-stack-index': features.length - index,
              width: `${50 + index * 0.5}vw`,
            }}
          >
            <p>{feature.description}</p>
            <div className='xag30-scroll-card-details'>
              <video
                ref={el => (videoRefs.current[index] = el)}
                className='xag30-scroll-video'
                src={feature.video}
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Section9;
