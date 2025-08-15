import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm Kevin Porras</h1>
        <h3>Software Developer - FULL STACK DEVELOPER</h3>
        <p>Full Stack Developer passionate about creating efficient, scalable, 
          and user-friendly web applications. Skilled in Laravel, PHP, JavaScript,
           React, and SQL databases, with experience in agile workflows, Azure DevOps, 
           and Trello. Committed to delivering high-quality solutions, solving complex 
           problems, and contributing to impactful IT projects while continuously 
           growing professionally.</p>
        
        <h2>Skills</h2>
        <div className="btn-skills">
          <a href="#"><i className='bx bxl-html5'></i></a>
          <a href="#"><i className='bx bxl-css3'></i></a>
          <a href="#"><i className='bx bxl-git'></i></a>
          <a href="#"><i className='bx bxl-github bxgithub'></i></a>
          <a href="#"><i className='bx bxl-react'></i></a>
          <a href="#"><i className='bx bxl-javascript'></i></a>
          <a href="#"><i className="bx bxl-php"></i></a>
        </div>
        
        <div className="btn-box">
          <a href="mailto:kevinporras9906@gmail.com" target="_blank" rel="noopener noreferrer">Contact me</a>
          <a href="https://www.linkedin.com/in/kevin-porras-3a8bab253/" target="_blank" rel="noopener noreferrer">Let's talk</a>
        </div>
      </div>
      <div className="navigation-arrows">
        <Link to="/projects" className="arrow-right">&gt;</Link>
      </div>
    </section>
  );
};

export default Home;