import React, { useState, useRef, useEffect } from 'react';

const Section9 = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const sectionRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const videos = [
    '/assets/fcFitting.webm',
    '/assets/camera.webm',
    '/assets/pump.webm',
    '/assets/sensor1.webm',
    '/assets/sensor2.webm',
  ];

  const captions = [
    "4 motors for stable flight",
    "cameras for aerial live monitoring",
    'controls pumps for precise spraying',
    "ensures safety with obstacle sensors",
    "terrain sensors for smooth operations"
  ];

  const connectingSentences = [
    'Xrotor Tek India connects seamlessly to',
    ", integrates",
    ", ",
    ", and ",
    "and",
  ];
  if (isMobile) {
    return (
      <div className="agr16-sec-9-container">
        <div className="agr16-sec-9-paragraph">
          <p>
            {captions.map((caption, index) => (
              <React.Fragment key={index}>
                {<span>{connectingSentences[index]}</span>}
                <span className="agr16-sec-9-caption">{caption}</span>
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="agr16-sec-9-video-container">
          {videos.map((videoSrc, index) => (
            <video
              key={index}
              src={videoSrc}
              className="agr16-sec-9-video"
              loop
              muted
              autoPlay
              playsInline
            />
          ))}
        </div>
      </div>
    );
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      const visibleHeight = Math.min(window.innerHeight, sectionHeight);
      const scrollPercentage = ((visibleHeight - sectionTop) / sectionHeight) * 100;

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
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
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
