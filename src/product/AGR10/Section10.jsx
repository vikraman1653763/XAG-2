import React from "react";

const cards = [
    {
      id: 1,
      videoTitle: "Crop Spraying",
      image: '/assets/agr10-02.webp',
    },
    {
      id: 2,
      videoTitle: "Precision Monitoring",
      image: '/assets/agr10-05.webp',
    },
    {
      id: 3,
      videoTitle: "Fertilizer Spreading",
      image: '/assets/agr10-03.webp',
    },
    {
      id: 4,
      videoTitle: "Fish Feeding",
      image: '/assets/agr10-04.webp',
    },
  ];

const Section10 = () => {
    return (
        <section className="agr10-sec-10-container">
            <h2 className="agr10-sec-10-title">Applications of AGR10</h2>
            <div className="agr10-sec-10-cards">
                {cards.map((card) => (
                    <div key={card.id} className="agr10-sec-10-card">
                        <img src={card.image} alt={card.videoTitle} className="agr10-sec-10-image" />
                        <h3 className="agr10-sec-10-card-title">{card.videoTitle}</h3>
                        <p className="agr10-sec-10-card-description">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section10;
