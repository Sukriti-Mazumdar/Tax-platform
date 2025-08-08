import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-links">
          About | Pricing | Contact
        </div>
        <div className="footer-disclaimer">
          © 2025 DoMyTaxes. All rights reserved. GSTIN: XX | This is a private platform. Not affiliated with Income Tax Dept
        </div>
      </div>
    </footer>
  );
};

export default Footer;
