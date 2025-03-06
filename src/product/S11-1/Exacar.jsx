import React, { useState } from "react";
import "./Exacar.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const slideData = [
  {
    index: 0,
    headline: "LiDAR Vision Snapshot",
    button: "Shop now",
    src: "/assets/s11-lidar.webm",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Slide = ({ slide, isActive, position }) => {
  return (
    <li className={`ex-01-slide ex-01-slide--${position} ${isActive ? "ex-01-slide--current" : ""}`}>
      <div className="ex-01-slide__video-wrapper">
        <video className="ex-01-slide__video" autoPlay loop muted>
          <source src={slide.src} type="video/mp4" />
        </video>
      </div>
      <article className="ex-01-slide__content">
        <h2 className="ex-01-slide__headline">{slide.headline}</h2>
      </article>
    </li>
  );
};

const Exacar = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slideData.length;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ex-01-slider">
      <ul className="ex-01-slider__wrapper">
        {slideData.map((slide, index) => {
          let diff = index - current;
          if (diff > 1) diff -= totalSlides;
          if (diff < -1) diff += totalSlides;

          const positionClass = diff === -1 ? "prev" : diff === 0 ? "current" : diff === 1 ? "next" : "";
          return (
            <Slide
              key={slide.index}
              slide={slide}
              isActive={index === current}
              position={positionClass}
            />
          );
        })}

        <div className="ex-01-slider__controls">
          <button className="ex-01-btn" onClick={handlePreviousClick}>
            <IoIosArrowDropleft />
          </button>
          <button className="ex-01-btn" onClick={handleNextClick}>
            <IoIosArrowDropright />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Exacar;