import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const useInView = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

const NumericSpecs = ({ specs }) => {
  return (
    <div className="mini-specs-list">
      {specs.map((spec, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref);

        return (
          <div className="mini-specs-card" key={index} ref={ref}>
            <div className="mini-specs-card-content">
              <span className="mini-specs-value animated">
                {isInView && <CountUp end={spec.value} duration={1.5} suffix={spec.suffix} />}
              </span>
              <span className="mini-specs-label">{spec.label}</span>
              <p className="mini-specs-desc">{spec.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const TextSpecs = ({ specs }) => {
  return (
    <div className="mini-specs-list">
      {specs.map((spec, index) => (
        <div className="mini-specs-card" key={index}>
          <div className="mini-specs-card-content">
            <span className="mini-specs-label">{spec.label}</span>
            <span className="mini-specs-value">{spec.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const MiniSpecs = () => {
  const specifications = [
    {
      label: 'Weight',
      value: 249,
      suffix: 'g',
      isNumeric: true,
      desc: 'Light enough to bypass drone registration rules in many countries, yet durable for stable flight.'
    },
    {
      label: 'Battery Life',
      value: 31,
      suffix: ' Mins+',
      isNumeric: true,
      desc: 'Provides extended flight time, perfect for long survey missions or uninterrupted shoots.'
    },
    {
      label: 'Range',
      value: 6,
      suffix: ' km+',
      isNumeric: true,
      desc: 'Fly farther with a strong transmission system, enabling long-distance operations with precision.'
    },
    {
      label: 'Max Speed',
      value: 57.6,
      suffix: ' km/h',
      isNumeric: true,
      desc: 'High-speed flight capability for dynamic environments or rapid response scenarios.'
    },
    {
      label: 'Camera',
      value: '4K Ultra HD, 12MP, Gimbal Stabilization',
      isNumeric: false
    },
    {
      label: 'Flight Modes',
      value: 'GPS, Follow Me, Waypoints, Intelligent Flight Modes',
      isNumeric: false
    }
  ];
  
  

  const numericSpecs = specifications.filter(spec => spec.isNumeric);
  const textSpecs = specifications.filter(spec => !spec.isNumeric);

  const numericRow1 = numericSpecs.slice(0, 2);
  const numericRow2 = numericSpecs.slice(2);
  const textRow = textSpecs;

  return (
    <div className="mini-specs-container">
      <h2 className="mini-specs-title">Specifications</h2>

      <NumericSpecs specs={numericRow1} />
      <TextSpecs specs={textRow} />
      <NumericSpecs specs={numericRow2} />
    </div>
  );
};

export default MiniSpecs;
