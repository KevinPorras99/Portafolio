import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import '../Styles/Projects.css';
import registrodocente from '../img/Registrodocente.webp';
import muniticket from '../img/muniticket/Login.png';
import lakerslogo from '../img/lakersweb/lakerslogo.jpg';

const projects = [
  {
    id: '1',
    title: 'Registro Docente',
    description: 'El Registro Docente es una aplicación web diseñada en Laravel 11 para la gestión de calificaciones de estudiantes en las instituciones educativas.',
    image: registrodocente,
    link: 'https://linkproyecto1.com'
  },
  {
    id: '2',
    title: 'Muniticket',
    description: 'Muniticket es una aplicación web desarrollada en Laravel 11 para la gestión de tickets de soporte técnico para la municipalidad de San Isidro de Heredia.',
    image: muniticket,
    link: 'https://linkproyecto2.com'
  },
  {
    id: '3',
    title: 'Lakers Fan Page',
    description: 'Lakers Fan Page es una página web desarrollada en HTML5 para los fanáticos del equipo de baloncesto Los Angeles Lakers.',
    image: lakerslogo,
    link: 'https://linkproyecto3.com'
  },
  // Añade más proyectos aquí
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
    <div className="navigation-arrows">
      <Link to="/" className="arrow-left">&lt;</Link>
      <Link to="/about" className="arrow-right">&gt;</Link>
    </div>
  </section>
);

export default Projects;