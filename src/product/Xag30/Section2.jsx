import React from 'react';
import ImpactIcon from '/assets/xag30/impact.svg';

const AboutXag25 = () => {
  return (
    <section className="xag25-about-section">
      <div className="xag25-about-container">
      <img src={ImpactIcon} alt="Impact Design" className="xag25-impact-icon" />

        <p className="xag25-about-description">
          The <span>XAG 30</span> is a cutting-edge heavy-lift unmanned aerial system designed for rapid logistics, battlefield resupply, emergency response, and naval operations. With unmatched endurance, high payload capacity, and rugged design, <span>XAG 30</span> ensures critical support when and where it’s needed most.
        </p>
      </div>
    </section>
  );
}

export default AboutXag25;
