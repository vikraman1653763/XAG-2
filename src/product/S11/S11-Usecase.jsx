import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";



const Slide = ({ slide, isActive, position }) => {
  return (
    <li className={`s11-usecase-slide s11-usecase-slide--${position} ${isActive ? "s11-usecase-slide--current" : ""}`}>
      <div className="s11-usecase-slide__video-wrapper">
        <video className="s11-usecase-slide__video" autoPlay loop muted>
          <source src={slide.src} type="video/mp4" />
        </video>
      </div>
      <article className="s11-usecase-slide__content">
        <h2 className="s11-usecase-slide__headline">{slide.headline}</h2>
      </article>
    </li>
  );
};

const Usecase = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = data.length;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="s11-usecase-slider">
      <ul className="s11-usecase-slider__wrapper">
        {data.map((slide, index) => {
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

        <div className="s11-usecase-slider__controls">
          <button className="s11-usecase-btn" onClick={handlePreviousClick}>
            <IoIosArrowDropleft />
          </button>
          <button className="s11-usecase-btn" onClick={handleNextClick}>
            <IoIosArrowDropright />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Usecase;

