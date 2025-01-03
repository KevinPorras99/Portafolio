import React from 'react';
import '../Styles/Home.css'; 

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm Kevin</h1>
        <h3>Software Developer</h3>
        <p>A Software developer passionate about problem-solving, innovation, 
            and continuous learning. Experienced in programming languages and 
            web technologies, with a strong commitment to excellence and teamwork. 
            My goal is to contribute to impactful IT projects, 
            leveraging my skills in Laravel, web development, and
         agile methodologies. I aim to grow professionally while supporting the success of the organization."</p>
        
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
          <a href="mailto:kevinporras9906@gmail.com" target="_blank" rel="noopener noreferrer">Contrátame</a>
          <a href="https://www.linkedin.com/in/kevin-porras-3a8bab253/" target="_blank" rel="noopener noreferrer">Hablemos</a>
        </div>
      </div>
      
    </section>
  );
};

export default Home;