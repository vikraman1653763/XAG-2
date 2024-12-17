import React from 'react';
const Section9 = () => {
  const certificates = [
    {
      id: 1,
      image: '/assets/certificate1.webp', 
    },
    {
      id: 2,
      image: '/assets/certificate1.webp', 
    }
  ];

  return (
    <div className="cert-certificates-container">
      <div className="cert-certificate-item">
        <div className="cert-certificate-images">
          {certificates.map(cert => (
            <img key={cert.id} src={cert.image} alt={`Certificate ${cert.id}`} />
          ))}
        </div>
        <div className="cert-certificate-details">
          <h2><span>ISO </span>Certifications</h2>
          <p>
            Demonstrates our commitment to quality management systems (ISO 9001:2015) and environmental
            management systems (ISO 14001:2015), ensuring high-quality products and sustainable practices.
          </p>
        </div>
      </div>
      </div>
  );
};

export default Section9;
