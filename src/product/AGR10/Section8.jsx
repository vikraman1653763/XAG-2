import React, { useState } from 'react';

const media = [
    {
      title: 'Detachable Tank',
      video: '/sam/7.mp4',
      content: (
        <p>
          Experience seamless operations with the AGR 16's detachable tank, designed for hassle-free maintenance and swift refills. This innovation minimizes downtime and enhances productivity for diverse agricultural needs.
        </p>
      ),
    },
    
    {
      title: 'Precision Sprayer',
      video: '/sam/7.mp4',
      content: (
        <p>
          Achieve unmatched accuracy with the AGR 16's high-precision sprayer. Designed to deliver uniform spray patterns, it ensures optimal coverage and reduces wastage, tailored for modern farming techniques.
        </p>
      ),
    },
    {
      title: 'Efficient  Spreader',
      video: '/sam/7.mp4',
      content: (
        <p>
          Adapt to various farming needs with the AGR 16's versatile spreader. Engineered for efficiency, it handles multiple applications with ease, offering a reliable solution for spreading tasks.
        </p>
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
              {item.title}
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
