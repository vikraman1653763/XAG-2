import React from "react";

const Section8 = () => {
  return (
    <section className="s11-sec-8">
      <div className="s11-sec-8-container">
        {/* Left Side Content */}
        <div className="s11-sec-8-visual">
          <img
            src="/sam/14.jpg"
            alt="XAG-S11 Drone"
            className="s11-sec-8-image"
          />
        </div>
        <div className="s11-sec-8-content">
          <h2 className="s11-sec-8-title">Take the Next Step with XAG-S11</h2>
          <p className="s11-sec-8-description">
            Ready to elevate your operations with the XAG-S11? Get in touch with
            us to learn more, request a personalized quote, or download the
            detailed brochure for all specifications and features. Let’s work
            together to meet your industrial needs with precision and
            reliability.
          </p>
          <div className="s11-sec-8-buttons">
            <button className="s11-sec-8-btn s11-contact-btn">
              Contact Us
            </button>
            <button className="s11-sec-8-btn s11-quote-btn">
              Get a Quote
            </button>
            <button className="s11-sec-8-btn s11-brochure-btn">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Side Visual */}
      </div>
    </section>
  );
};

export default Section8;
