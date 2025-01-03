import React from 'react';
import '../Styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© 2025 - Development by Kevin Porras</p>
    <div className="social-links">
      <a href="https://github.com/KevinPorras99" target="_blank" rel="noopener noreferrer" className="btn-social">
        <i className="fa fa-github"></i> 
      </a>
      <a href="https://www.linkedin.com/in/kevin-porras-3a8bab253/" target="_blank" rel="noopener noreferrer" className="btn-social">
        <i className="fa fa-linkedin"></i> 
      </a>
      <a href="mailto:kevinporras9906@gmail.com" className="btn-social">
        <i className="fa fa-envelope"></i> 
      </a>
    </div>
  </footer>
);

export default Footer;