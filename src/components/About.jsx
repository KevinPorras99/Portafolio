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
            <div
              className="skill-logo-container"
              style={{ backgroundImage: `url(${skill.logo})` }}
            >
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
          I am a Full Stack Developer with a strong passion for building scalable, efficient, and user-friendly web applications. I have hands-on experience in  Laravel 11, PHP, JavaScript, React, SQL databases, and agile development methodologies including Scrum, Trello, and Azure DevOps.
        </p>
        <p>
          My focus is on delivering high-quality software solutions that solve real-world problems. I enjoy working on complex backend systems, responsive front-end designs, and integrating tools for data management and automation.
        </p>

        <div className="experience">
          <h3>Professional Experience</h3>
          <ul>
            <li>
              <strong>Full Stack Developer</strong> at Team Steam S.R.L. (July - December 2024)
              <p>
                Developed <em>Registro Docente</em>, an automated student record management system using Laravel 11. 
                Responsibilities included database design, secure authentication, Excel import/export, and dashboard analytics.
              </p>
            </li>
            <li>
              <strong>Full Stack Developer</strong> at Municipalidad de San Isidro de Heredia (February 2023 - June 2024)
              <p>
                Developed <em>MuniTicket</em>, a Helpdesk ticketing system in Laravel 11. Designed relational databases, implemented ticket tracking dashboards, automated email notifications, and ensured secure role-based access.
              </p>
            </li>
          </ul>
        </div>

        <div className="testimonials">
          <h3>Testimonials</h3>
          <blockquote>
            "An excellent developer with a keen eye for detail and problem-solving skills." - Edgar Chacón (CEO - Team Steam)
          </blockquote>
          <blockquote>
            "Consistently delivers high-quality work on time and collaborates effectively with teams." - Supervisor - Team Steam
          </blockquote>
        </div>

        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelor's Degree in Systems Engineering</strong> - Universidad Nacional de Costa Rica (2018 - 2025)
              <p>Specialization: Full Stack Development | Relevant Projects: Registro Docente (Laravel, Excel integration)</p>
            </li>
          </ul>
        </div>

        <div className="interests">
          <h3>Interests</h3>
          <p>
            Passionate about learning new programming languages, exploring cloud technologies, developing personal projects, hiking, and gaming.
          </p>
        </div>
      </div>

      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="personal-attributes">
          <h3>Professional Attributes</h3>
          <ul>
            <li>Detail-oriented with strong coding standards</li>
            <li>Collaborative team player</li>
            <li>Excellent communication skills</li>
            <li>Analytical and problem-solving mindset</li>
            <li>Adaptable, quick learner, and proactive</li>
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