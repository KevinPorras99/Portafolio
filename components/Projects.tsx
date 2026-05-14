import React from 'react';
import type { Project } from '../types';
import { IconGitHub, IconExternalLink } from './icons';

const projectsData: Project[] = [
  {
    title: 'Registro Docente',
    description:
      'Web application built with Laravel 11 for managing student grades in educational institutions. Features role-based authentication, interactive dashboards, and Excel import/export functionality.',
    tags: ['Laravel 11', 'Blade', 'JavaScript', 'Tailwind CSS', 'MySQL', 'phpMyAdmin', 'Git'],
    imageUrl: 'img/RegistroDocente.png',
    repoUrl: 'https://github.com/KevinPorras99/RegistroDocente',
  },
  {
    title: 'Muniticket',
    description:
      'Technical support ticket management system developed with Laravel 11 for the Municipality of San Isidro de Heredia. Includes real-time tracking, automated email notifications, and admin dashboards.',
    tags: ['Laravel 11', 'Blade', 'JavaScript', 'Bootstrap', 'MySQL', 'phpMyAdmin', 'Git'],
    imageUrl: 'img/Muniticket.png',
  },
  {
    title: 'Pokédex',
    description:
      'Interactive Pokédex built with React and Vite. Consumes the PokéAPI to display stats, evolutions, and detailed info for every Pokémon with a clean, responsive UI.',
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'REST API', 'Git'],
    imageUrl: 'img/pokedex.png',
    liveUrl: 'https://kevinporras99.github.io/pokedex-react-app/',
    repoUrl: 'https://github.com/KevinPorras99/pokedex-react-app',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary border border-tertiary hover:border-accent/30 rounded-lg overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-1">
    <div className="relative overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/30 transition-colors duration-300"></div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-light font-bold text-xl">{project.title}</h3>
        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-accent transition-colors"
              aria-label={`${project.title} repository`}
            >
              <IconGitHub className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <IconExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-dark text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center gap-6">
        <span className="text-accent font-mono text-xl">05.</span>
        Some Things I've Built
        <span className="h-px bg-tertiary flex-grow"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
