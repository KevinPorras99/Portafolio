import React from 'react';
import '../Styles/ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
      Ver proyecto
    </a>
  </div>
);

export default ProjectCard;
