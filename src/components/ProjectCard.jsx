import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <Link to={`/projects/${project.id}`} className="project-link">
        Ver proyecto
      </Link>
    </div>
  </div>
);

export default ProjectCard;