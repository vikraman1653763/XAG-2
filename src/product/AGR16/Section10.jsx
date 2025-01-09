import React, { useState } from 'react';

const media = [
  {
    title: 'Detachable Tank',
    video: '/assets/Tankvid.webm',
    content: (
      <p>
        The AGR 16 introduces an innovative detachable tank, making maintenance and refilling quick and easy. This feature reduces downtime and enhances flexibility, adapting seamlessly to various farming requirements.
      </p>
    ),
  },
  {
    title: 'Superior Capacity',
    video: '/assets/16L.webm',
    content: (
        <p>
        The AGR 16's 16-liter tank reduces refill frequency, enabling extended operations with fewer interruptions. Its large capacity ensures high efficiency for large-scale farming tasks.
      </p>
    ),
  },
];

function Section10() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = media[currentIndex];

  return (
    <section className="agr-16-sec-10-container">
      <div className="agr-16-sec-10-video">
        <video src={currentMedia.video} autoPlay loop muted />
      </div>

    
      <div className="agr-16-sec-10-content">
        <div className="agr-16-sec-10-index">
          {media.map((item, index) => (
            <button
              key={index}
              className={`agr-16-sec-10-index-item ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="agr-16-sec-10-description">
          <h3>{currentMedia.title}</h3>
          {currentMedia.content}
        </div>
      </div>
    </section>
  );
}

export default Section10;
