import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Contact.css';

const Contact = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p><FontAwesomeIcon icon={faPhone} /> Phone: (+506)8645-7832</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> Email: kevinporras9906.com</p>
    <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
    <p><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
    <div className="navigation-arrows">
      <Link to="/services" className="arrow-left">&lt;</Link>
    </div>
  </section>
);

export default Contact;