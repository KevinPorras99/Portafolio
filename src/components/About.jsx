import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/About.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import jsLogo from '../img/logos/jslogo.png';
import reactLogo from '../img/logos/reactlogo.png';
import nodeLogo from '../img/logos/nodejslogo.png';
import pythonLogo from '../img/logos/pythonlogo.png';
import javaLogo from '../img/logos/javalogo.png';
import kotlinLogo from '../img/logos/kotlinlogo.png';
import htmlCssLogo from '../img/logos/htmlcsslogo.png';
import cppLogo from '../img/logos/cpplogo.png';
import phpLogo from '../img/logos/phplogo.png';
import profilePic from '../img/profileimage.jpg'; // Asegúrate de tener una imagen de perfil en esta ruta

const skills = [
  { name: 'JavaScript', logo: jsLogo, percentage: 90 },
  { name: 'React', logo: reactLogo, percentage: 85 },
  { name: 'Node.js', logo: nodeLogo, percentage: 80 },
  { name: 'Python', logo: pythonLogo, percentage: 75 },
  { name: 'Java', logo: javaLogo, percentage: 70 },
  { name: 'Kotlin', logo: kotlinLogo, percentage: 80 },
  { name: 'HTML & CSS', logo: htmlCssLogo, percentage: 90 },
  { name: 'C++', logo: cppLogo, percentage: 90 },
  { name: 'PHP', logo: phpLogo, percentage: 90 },
];

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-logo-container" style={{ backgroundImage: `url(${skill.logo})` }}>
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                className="circular-progressbar"
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="about-text">
        <p>
          I am a software developer with a passion for problem-solving and creating efficient solutions. 
          I have experience in various programming languages and technologies, including:
        </p>
        <p>
          I enjoy working on web applications, mobile applications, and local applications. 
          My goal is to continuously improve my skills and contribute to impactful projects.
        </p>
        <div className="experience">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Intern Full Stack</strong> at Team Steam (July - December 2024)
              <p>Responsibilities: Developing Registro Docente web application, collaborating with cross-functional teams.</p>
            </li>
            <li>
              <strong>Junior Developer</strong> at Municipalidad de San Isidro de Heredia (February 2023 - June 2024)
              <p>Responsibilities: Developing MuniTicket web application, collaborating with cross-functional teams.</p>
            </li>
          </ul>
        </div>
        <div className="testimonials">
          <h3>Testimonials</h3>
          <blockquote>
            "An excellent developer with a keen eye for detail." - Edgar Chacón (CEO - Team Steam)
          </blockquote>
          <blockquote>
            "Always delivers high-quality work on time." - (Supervisor - Team Steam)
          </blockquote>
        </div>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelor's Degree in Systems Enginnering</strong> - Universidad Nacional de Costa Rica (2018 - 2024)
            </li>
          </ul>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <p>In my free time, I enjoy hiking, playing videogames, and experimenting with new programming languages.</p>
        </div>
      </div>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="personal-attributes">
          <h3>Personal Attributes</h3>
          <ul>
            <li>Detail-oriented</li>
            <li>Team player</li>
            <li>Strong communication skills</li>
            <li>Problem-solving mindset</li>
            <li>Adaptable and quick learner</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="navigation-arrows">
      <Link to="/projects" className="arrow-left">&lt;</Link>
      <Link to="/services" className="arrow-right">&gt;</Link>
    </div>
  </section>
);

export default About;