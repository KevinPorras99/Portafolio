import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Services.css';
import webDevImage from '../img/servicesimg/webservice.jpeg';
import localAppImage from '../img/servicesimg/localservice.jpeg';
import mobileAppImage from '../img/servicesimg/movilservice.jpeg';

const services = [
    {
      title: 'Web Application Development',
      image: webDevImage,
      description: 'We offer professional web application development services using the latest technologies and best practices.',
      emailSubject: 'Web Application Development Service Inquiry'
    },
    {
      title: 'Local Application Development',
      image: localAppImage,
      description: 'We specializes in developing robust local applications tailored to your business needs.',
      emailSubject: 'Local Application Development Service Inquiry'
    },
    {
      title: 'Mobile Application Development',
      image: mobileAppImage,
      description: 'We create high-quality mobile applications for both Android and iOS platforms.',
      emailSubject: 'Mobile Application Development Service Inquiry'
    }
  ];
  
  const Services = () => (
    <section className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={`mailto:kevinporras9906@gmail.com?subject=${encodeURIComponent(service.emailSubject)}`} className="service-button">
              Hire Service
            </a>
          </div>
        ))}
      </div>
      <div className="navigation-arrows">
        <Link to="/about" className="arrow-left">&lt;</Link>
        <Link to="/contact" className="arrow-right">&gt;</Link>
      </div>
    </section>
  );
  
  export default Services;