import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>YAIA</h3>
          <p>Shaping the future of AI safety and ethics</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p> Subsidiary of Yale Effective Altruism. 
          This website is published by Yale College students and Yale University is not responsible for its contents. The activities on this website are not supervised or endorsed by Yale and information contained on this website does not necessarily reflect the opinions or official positions of the University. All rights are reserved to Yale University for the Yale name and trademark. </p>
      </div>
    </footer>
  );
}

export default Footer;