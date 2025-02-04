import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Section7 = () => {
  const cards = [
    {
      id: 1,
      videoTitle: "Crop Spraying",
      image: '/assets/agr10-02.webp',
      description:
        "Deliver precise pesticide and herbicide coverage, ensuring optimal crop protection. Reduce chemical usage while enhancing efficiency for sustainable farming.",
    },
    {
      id: 2,
      videoTitle: "Fertilizer Spreading",
      image: '/assets/agr10-03.webp',
      description:
        "Ensure even nutrient distribution across fields, promoting healthy crop growth. Maximize soil fertility with precise application, reducing wastage.",
    },
    
    {
      id: 5,
      videoTitle: "Fish Feeding",
      image: '/assets/agr10-03.webp', 
      description:
        "Automate the feeding process in aquaculture with uniform pellet distribution. Enhance fish growth and reduce feed waste through precise aerial feeding.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="agr10-sec-7-container">
      {cards.map((card) => (
        <div key={card.id} className="agr10-sec-7-card">
          <div className="agr10-sec-7-image">
            <img
              className="agr10-sec-7-image-placeholder"
              src={card.image}
              alt={card.videoTitle}
            />
          </div>
          <div className="agr10-sec-7-content" data-aos={card.id % 2 === 0 ? 'fade-left' : 'fade-right'}>
            <h2 className="agr10-sec-7-title">{card.videoTitle}</h2>
            <p className="agr10-sec-7-description">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Section7;
