import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import '../Styles/Projects.css';
import registrodocente from '../img/Registrodocente.webp';
import muniticket from '../img/muniticket/Login.png';
import lakerslogo from '../img/lakersweb/lakerslogo.jpg';
import pokedex from '../img/pokedex/pokedex.png';

const projects = [
  {
    id: '1',
    title: 'Registro Docente',
    description: 'Registro Docente is a web application built with Laravel 11 for managing student grades in educational institutions.',
    image: registrodocente,
    link: 'https://linkproyecto1.com'
  },
  {
    id: '2',
    title: 'Muniticket',
    description: 'Muniticket is a web application developed with Laravel 11 for managing technical support tickets for the Municipality of San Isidro de Heredia.',
    image: muniticket,
    link: 'https://linkproyecto2.com'
  },
  {
    id: '3',
    title: 'Lakers Fan Page',
    description: 'Lakers Fan Page is a website developed in HTML5 for fans of the Los Angeles Lakers basketball team.',
    image: lakerslogo,
    link: 'https://linkproyecto3.com'
  },
  {
    id: '4',
    title: 'Pokedex',
    description: 'Pokédex is a web application built with React and powered by Vite, designed to provide a complete and interactive experience for exploring all existing Pokémon. ',
    image: pokedex,
    link: 'https://linkproyecto4.com'
  },
  // Añade más proyectos aquí
];

const Projects = () => (
  <section className="projects">
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