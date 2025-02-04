import React, { useState } from 'react';

const media = [
  {
    title: 'Detachable Tank',
    index: 'Tank',
    video: '/sam/7.mp4',
    content: (
      <>
        <p>
          Experience seamless operations with the AGR 16's detachable tank, designed for hassle-free maintenance and swift refills. This innovation minimizes downtime and enhances productivity for diverse agricultural needs.
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
          Power through demanding agricultural tasks with AGR 16's high-performance motor. Engineered for efficiency, it delivers optimal thrust, stability, and longevity, ensuring reliable operation under varying field conditions.
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
          Maximize spray efficiency with AGR 16’s advanced precision nozzles. Designed to reduce drift and optimize droplet size, they provide uniform coverage, improving pesticide and fertilizer application accuracy.
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
          Enhance agricultural insights with AGR 16’s AI-enabled camera. Offering real-time monitoring and intelligent obstacle detection, it ensures accurate navigation and optimized field mapping for precision farming.
        </p>
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
