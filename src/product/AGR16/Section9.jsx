import React, { useState, useRef, useEffect } from 'react';

const Section9 = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sectionRef = useRef(null);

  const videos = [
    '/assets/fcFitting.webm',
    '/assets/camera.webm',
    '/assets/pump.webm',
    '/assets/sensor1.webm',
    '/assets/sensor2.webm',
  ];

  const captions = [
    "4 motors",
    "cameras",
    'pumps',
    "obstacle",
    "terrain sensors"
  ];

  const connectingSentences = [
    'Xrotor Tek India connects seamlessly to',
    "for stable flight, integrates",
    "for aerial imaging, controls",
    "or precise spraying, and ensures safety with ",
    "and",
    "for smooth operations"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      // Calculate visible height and scroll percentage
      const visibleHeight = Math.min(window.innerHeight, sectionHeight);
      const scrollPercentage = ((visibleHeight - sectionTop) / sectionHeight) * 100;

      // Determine the active video index based on scroll percentage
      const videoIndex = Math.max(
        0,
        Math.min(videos.length - 1, Math.floor(scrollPercentage / (100 / videos.length)))
      );

      setCurrentVideoIndex(videoIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videos.length]);

  useEffect(() => {
    const videoElements = document.querySelectorAll('.agr16-sec-9-video');

    videoElements.forEach((video, index) => {
      if (index === currentVideoIndex) {
        video.play(); // Play the current video
      } else {
        video.pause(); // Pause other videos
        video.currentTime = 0; // Reset their playback position
      }
    });
  }, [currentVideoIndex]);

  return (
    <div className="agr16-sec-9-container" ref={sectionRef}>
      <div className="agr16-sec-9-paragraph">
        <p>
          {captions.map((caption, index) => (
            <React.Fragment key={index}>
              {<span> {connectingSentences[index ]} </span>}
              <span
                className={`agr16-sec-9-caption ${
                  currentVideoIndex === index ? 'agr16-sec-9-highlight' : ''
                }`}
              >
                {caption}
              </span>
            </React.Fragment>
          ))}
          {` for unmatched drone operations.`}
        </p>
      </div>
      <div className="agr16-sec-9-video-container">
        {videos.map((videoSrc, index) => (
          <video
            key={index}
            src={videoSrc}
            className={`agr16-sec-9-video ${
              currentVideoIndex === index ? 'agr16-sec-9-active' : ''
            }`}
            loop
            muted
            playsInline
          />
        ))}
      </div>
    </div>
  );
};

export default Section9;
