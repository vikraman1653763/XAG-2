import React from 'react';

const MiniRes = () => {
  return (
    <section className="mini-resources-section">
      <div className="mini-resources-overlay">
        <div className="mini-resources-content">
          <h2 className="mini-resources-title">Explore XAG-MINI</h2>
          <p className="mini-resources-description">
            Unlock the full potential of aerial intelligence with our compact and powerful drone. Whether you're mapping farms, filming events, or exploring new heights—XAG-MINI is your perfect flying companion.
          </p>
          <div className="mini-resources-buttons">
            <a href="/contact" className="mini-resources-button">Contact Us</a>
            <a href="/dealer" className="mini-resources-button">Get a Quote</a>
            <a href="/downloads/xag-mini-brochure.pdf" className="mini-resources-button" download>
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniRes;
