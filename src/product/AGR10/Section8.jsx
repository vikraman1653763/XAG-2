import React, { useState } from 'react';

const media = [
  {
    title: 'Detachable Tank',
    index: 'Tank',
    video: '/assets/agr10-06.webm',
    content: (
      <>
        <p>
        The AGR 10 features a 10-liter detachable tank for easy maintenance, quick refills, and reduced downtime, ensuring better productivity for farming.
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
        The AGR 10's high-performance motor provides strong thrust, stability, and durability. It is heat- and waterproof, ensuring reliable performance in harsh field conditions.
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
        AGR 10’s precision nozzles reduce drift and optimize droplet size for even coverage, ensuring accurate pesticide and fertilizer application.        </p>
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
        The AGR 10’s AI-enabled camera provides real-time monitoring and smart obstacle detection, ensuring precise navigation and efficient field mapping for farming.        </p>
      </>
    ),
  },
];


function Section8() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = media[currentIndex];

  return (
    <section className=" agr10-sec-8-container">
      {/* Left: Video Section */}
      <div className=" agr10-sec-8-video">
        <video src={currentMedia.video} autoPlay loop muted />
      </div>

      {/* Right: Content Section */}
      <div className=" agr10-sec-8-content">
        <div className=" agr10-sec-8-index">
          {media.map((item, index) => (
            <button
              key={index}
              className={` agr10-sec-8-index-item ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {item.index}
            </button>
          ))}
        </div>
        <div className=" agr10-sec-8-description">
          <h3>{currentMedia.title}</h3>
          {currentMedia.content}
        </div>
      </div>
    </section>
  );
}

export default Section8;
