import React from 'react';
import AntennaIcon from '/assets/xag30/antenna.svg';
import BatteryIcon from '/assets/xag30/battery.svg';
import DistanceIcon from '/assets/xag30/distance.svg';
import MountainIcon from '/assets/xag30/mountain.svg';
import ThermoIcon from '/assets/xag30/thermo.svg';
import WeightIcon from '/assets/xag30/weight.svg';

const Xag30High = () => {
  const cardsData = [
    { id: '01', icon: <img src={BatteryIcon} alt="Battery" />, title: 'Endurance', desc: 'Up to 45 Minutes' },
    { id: '02', icon: <img src={DistanceIcon} alt="Distance" />, title: 'Range', desc: '12 Km One Way' },
    { id: '03', icon: <img src={MountainIcon} alt="Mountain" />, title: 'Max Altitude', desc: '5000 Feet AMSL' },
    { id: '04', icon: <img src={WeightIcon} alt="Weight" />, title: 'Payload', desc: '25 Kg' },
    { id: '05', icon: <img src={ThermoIcon} alt="Thermometer" />, title: 'Operating Temperature', desc: '-20℃ to 60℃' },
    { id: '06', icon: <img src={AntennaIcon} alt="Communication" />, title: 'Communication', desc: '2.4 GHz Reliable Link' },
  ];

  return (
    <div className="xag-30-high-container">
      <div className="xag-30-high-cards-container">
        <div className="xag-30-high-grid">
          
          {/* Box-0: Header */}
          <div className="xag-30-high-header">
            <h2 className="xag-30-high-title">Discover the <span>XAG30’s </span> Tactical Unmatched Capabilities</h2>
            <div className="xag-30-high-header-line" />
            <p className="xag-30-high-desc">Purpose-built to deliver exceptional performance, resilience, and precision across diverse operational landscapes.</p>
          </div>

          {/* Box-1, Box-2: First 2 cards */}
          {cardsData.slice(0, 2).map((card, index) => (
            <div className={`xag-30-high-card box-${index + 1}`} key={card.id}>
                <span className="xag-30-high-card-number">{card.id}.</span>
              <div className="xag-30-high-card-top">
                <div className="xag-30-high-card-icon">{card.icon}</div>
              </div>
              <h3 className="xag-30-high-card-title">{card.title}</h3>
              <p className="xag-30-high-card-desc">{card.desc}</p>
            </div>
          ))}

          {/* Box-3, Box-4, Box-5, Box-6: Remaining 4 cards */}
          {cardsData.slice(2).map((card, index) => (
            <div className={`xag-30-high-card box-${index + 3}`} key={card.id}>
                <span className="xag-30-high-card-number">{card.id}.</span>
              <div className="xag-30-high-card-top">
                <div className="xag-30-high-card-icon">{card.icon}</div>
              </div>
              <h3 className="xag-30-high-card-title">{card.title}</h3>
              <p className="xag-30-high-card-desc">{card.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Xag30High;
