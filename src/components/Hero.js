import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="tags">
          <span className="tag">Simple</span>
          <span className="tag">Reliable</span>
          <span className="tag">Trustworthy</span>
        </div>
        <h1 className="hero-title">
          <span>Save More Tax in Just 7</span><br />
          <span className="hero-title-second-line"> Minutes - <span className="highlight">Backed by Real CAs</span></span>
        </h1>
        <div className="hero-subtext">
          Form-16 Upload. ₹10K+ Saved. 100% Operator Reviewed.
        </div>
        <div className="hero-bold-text">
          <span style={{ fontWeight: 700 }}>Over 100,000+ successful tax filings.</span>
        </div>
        <div className="hero-buttons">
          <button className="btn primary-btn">Start Filing Instantly</button>
          <button className="btn secondary-btn">Talk to a Tax Expert — Free</button>
        </div>
        <div className="trusted-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="shield-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            />
          </svg>
          India’s most trusted tax filing partner
        </div>
      </div>
      <div className="hero-right">
        <div className="glow-box">
          <div className="files-itr-text">
            Files ITR in 7 minutes
          </div>
          <div className="tax-saved-box">
            Tax saved: <span className="tax-amount">₹32,500</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
